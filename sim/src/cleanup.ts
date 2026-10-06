import { PublicKey, TransactionInstruction, type Keypair } from '@solana/web3.js'
import { createBurnInstruction, createCloseAccountInstruction, TOKEN_PROGRAM_ID } from '@solana/spl-token'
import type { CowEnv } from '@cowprotocol/sdk-config'
import { placeAndWait, type FlowContext } from './flow.js'
import { errorText } from './orders.js'
import { NATIVE_SOL, WSOL_MINT } from './rpc.js'
import { fmtSol, sweepToFunder, type Wallets } from './wallets.js'
import { fromRaw, type Token } from './tokens.js'
import { c } from './ui.js'

/** `ReclaimOrder` (discriminator 5): closes a finished order PDA, rent goes to its `created_by`. */
function reclaimIx(programId: PublicKey, orderPda: PublicKey, createdBy: PublicKey) {
  return new TransactionInstruction({
    programId,
    keys: [
      { pubkey: orderPda, isSigner: false, isWritable: true },
      { pubkey: createdBy, isSigner: false, isWritable: true },
    ],
    data: Buffer.from([5]),
  })
}

/** Order account layout: discriminator, bump, cancelled, 2×u64, created_by (32) at byte 19. */
const createdByOf = (data: Buffer) => new PublicKey(data.subarray(19, 51))

export interface CleanupResult {
  trader: number
  sold: string[]
  /** Dust burned because selling it would return less than its account's rent (or it has no route). */
  burned: string[]
  leftover: string[]
  closedAccounts: number
  reclaimed: number
  swept: bigint
}

/** Instructions for one item (a close, a burn + close, a reclaim) plus what it's for, for the logs. */
interface Item {
  ixs: TransactionInstruction[]
  /** Journal fields: e.g. { uid, orderPda, createdBy } for a reclaim, { account, mint } for a close. */
  meta: Record<string, string>
  /** Short console label, e.g. the order uid prefix. */
  label: string
}

/**
 * Send `items` in batches of `size`, falling back to one by one when a batch fails. Every confirmed transaction
 * is logged to the console (with its Solscan link) and to the journal with the items it covered.
 */
async function sendBatches(ctx: FlowContext, items: Item[], signer: Keypair, size: number, n: number, what: 'reclaim' | 'close') {
  let ok = 0
  const record = (sig: string, batch: Item[]) => {
    ok += batch.length
    ctx.session.log({ trader: n, step: 'cleanup', event: what === 'reclaim' ? 'reclaimed' : 'closed_accounts', signature: sig, items: batch.map((b) => b.meta) })
    ctx.log(
      `  ${c.blue(`t${n}`)} ${c.blue('cleanup')}: ${what === 'reclaim' ? 'reclaimed' : 'closed'} ${batch.length} ` +
        `${what === 'reclaim' ? 'order' : 'account'}${batch.length === 1 ? '' : 's'} ${c.dim(batch.map((b) => b.label).join(' '))}\n` +
        `      ${c.dim('tx')} ${c.dim(ctx.link.tx(sig))}`,
    )
  }
  for (let i = 0; i < items.length; i += size) {
    const batch = items.slice(i, i + size)
    try {
      record(await ctx.rpc.sendAndConfirm(batch.flatMap((b) => b.ixs), [signer]), batch)
    } catch {
      // One bad instruction fails the batch: fall back to one by one.
      for (const item of batch) {
        try {
          record(await ctx.rpc.sendAndConfirm(item.ixs, [signer]), [item])
        } catch (e) {
          ctx.session.log({ trader: n, step: 'cleanup', event: `${what}_skipped`, ...item.meta, error: (e as Error).message.slice(0, 200) })
        }
      }
    }
  }
  return ok
}

/** Orderbook answers meaning "this can't be sold", as opposed to a transient failure. */
export const NO_ROUTE = /NoLiquidity|no route|Not Found|UnsupportedToken|SameBuyAndSellToken/i

/** Seconds after `validTo` before an expired order counts as reclaimable (clock skew between us and the chain). */
const EXPIRY_MARGIN_S = 10

/**
 * Return a trader to zero, safe to re-run:
 * 1. sell every token worth more than its account's rent to native SOL, all at once (self-paid);
 *    burn the rest (dust, or no route) so its account can be closed;
 * 2. unwrap wSOL and close every empty token account;
 * 3. reclaim the rent of finished orders (looked up in one batched call);
 * 4. sweep all SOL to the funder.
 */
export async function cleanupTrader(ctx: FlowContext, w: Wallets, n: number, env: CowEnv): Promise<CleanupResult> {
  void env
  const kp = w.trader(n)
  const owner = kp.publicKey
  const result: CleanupResult = { trader: n, sold: [], burned: [], leftover: [], closedAccounts: 0, reclaimed: 0, swept: 0n }
  const sol: Token = { symbol: 'SOL', mint: NATIVE_SOL, decimals: 9, isSol: true, isNative: true, programId: TOKEN_PROGRAM_ID }
  const tokenOf = (a: { mint: PublicKey; decimals: number; programId: PublicKey }): Token => ({
    symbol: a.mint.toBase58().slice(0, 6),
    mint: a.mint,
    decimals: a.decimals,
    isSol: false,
    isNative: false,
    programId: a.programId,
  })
  const labelOf = (a: { amount: bigint; decimals: number; mint: PublicKey }) => `${fromRaw(a.amount, a.decimals)} ${a.mint.toBase58().slice(0, 6)}…`

  // 1. Sell or burn. A sale only pays if it returns more SOL than closing the account does.
  const before = await ctx.rpc.tokenAccounts(owner)
  const holdings = before.filter((a) => a.amount > 0n && !a.mint.equals(WSOL_MINT))
  const plans = await Promise.all(
    holdings.map(async (a) => {
      try {
        const q = await ctx.orders.quote({ owner: kp, sell: tokenOf(a), buy: sol, kind: 'sell', amount: a.amount })
        return { a, burn: q.solanaQuote.intent.buyAmount < BigInt(a.lamports) }
      } catch (e) {
        // Burn only when the orderbook says it can't be sold. A rate limit or network error leaves the tokens alone.
        if (NO_ROUTE.test(errorText(e))) return { a, burn: true }
        result.leftover.push(`${labelOf(a)} (quote failed: ${errorText(e).slice(0, 60)})`)
        return null
      }
    }),
  )
  const decided = plans.filter((p): p is NonNullable<typeof p> => p !== null)
  await Promise.all(
    decided
      .filter((p) => !p.burn)
      .map(async ({ a }) => {
        const res = await placeAndWait(
          ctx,
          { owner: kp, sell: tokenOf(a), buy: sol, kind: 'sell', amount: a.amount, mode: 'self' },
          { trader: n, step: 'cleanup' },
        )
        ;(res.status === 'fulfilled' ? result.sold : result.leftover).push(labelOf(a))
      }),
  )

  // 2. Close: wSOL (unwraps), empty accounts, sold-out accounts, and dust (burned first, in the same transaction).
  // Balances only changed if something was sold; otherwise the first scan is still current.
  const after = decided.some((p) => !p.burn) ? await ctx.rpc.tokenAccounts(owner) : before
  const burnAddrs = new Set(decided.filter((p) => p.burn).map((p) => p.a.address.toBase58()))
  const closes: Item[] = []
  for (const a of after) {
    const addr = a.address.toBase58()
    const close = createCloseAccountInstruction(a.address, owner, owner, [], a.programId)
    const label = a.mint.equals(WSOL_MINT) ? 'wSOL' : a.mint.toBase58().slice(0, 6)
    if (a.mint.equals(WSOL_MINT) || a.amount === 0n) {
      closes.push({ ixs: [close], meta: { account: addr, mint: a.mint.toBase58() }, label })
    } else if (burnAddrs.has(addr)) {
      closes.push({
        ixs: [createBurnInstruction(a.address, a.mint, owner, a.amount, [], a.programId), close],
        meta: { account: addr, mint: a.mint.toBase58(), burned: a.amount.toString() },
        label: `${label} (burned dust)`,
      })
      result.burned.push(labelOf(a))
    }
  }
  result.closedAccounts = await sendBatches(ctx, closes, kp, 6, n, 'close')

  // 3. Reclaim finished orders: filled and cancelled ones right away, expired ones once past their validTo.
  const programId = ctx.orders.programId
  const now = Date.now() / 1000
  const candidates = (await ctx.orders.ownerOrders(owner)).filter(
    (o) => o.status === 'fulfilled' || o.status === 'cancelled' || (o.status === 'expired' && o.validTo + EXPIRY_MARGIN_S < now),
  )
  const reclaims: Item[] = []
  for (let i = 0; i < candidates.length; i += 100) {
    const chunk = candidates.slice(i, i + 100)
    const infos = await ctx.rpc.call((c) => c.getMultipleAccountsInfo(chunk.map((o) => new PublicKey(o.orderPda))))
    chunk.forEach((o, j) => {
      const info = infos[j]
      if (!info || !info.owner.equals(programId)) return // never created, or already reclaimed
      const createdBy = createdByOf(info.data)
      reclaims.push({
        ixs: [reclaimIx(programId, new PublicKey(o.orderPda), createdBy)],
        meta: { uid: o.uid, orderPda: o.orderPda, createdBy: createdBy.toBase58(), status: o.status },
        label: o.uid.slice(0, 10),
      })
    })
  }
  result.reclaimed = await sendBatches(ctx, reclaims, kp, 10, n, 'reclaim')

  const sweep = await sweepToFunder(ctx.rpc, w, n)
  result.swept = sweep.amount
  if (sweep.signature) {
    ctx.session.log({ trader: n, step: 'cleanup', event: 'swept', amount: sweep.amount.toString(), signature: sweep.signature })
    ctx.log(`  ${c.blue(`t${n}`)} ${c.blue('cleanup')}: swept ${c.bold(fmtSol(sweep.amount))} to the funder\n      ${c.dim('tx')} ${c.dim(ctx.link.tx(sweep.signature))}`)
  }
  ctx.session.log({
    trader: n,
    step: 'cleanup',
    event: 'cleanup_done',
    sold: result.sold,
    burned: result.burned,
    leftover: result.leftover,
    closedAccounts: result.closedAccounts,
    reclaimed: result.reclaimed,
    swept: result.swept.toString(),
  })
  ctx.log(
    `  ${c.blue(`t${n}`)} ${c.blue('cleanup')}: sold ${c.green(result.sold.length)}, burned ${result.burned.length} dust, ` +
      `left ${result.leftover.length ? c.yellow(result.leftover.length) : 0}, ` +
      `closed ${result.closedAccounts} accounts, reclaimed ${result.reclaimed} orders, swept ${c.bold(fmtSol(result.swept))}`,
  )
  return result
}
