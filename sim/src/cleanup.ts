import { PublicKey, TransactionInstruction, type Keypair } from '@solana/web3.js'
import { createCloseAccountInstruction } from '@solana/spl-token'
import { getSolanaSettlementProgramId } from '@cowprotocol/sdk-trading-solana'
import type { CowEnv } from '@cowprotocol/sdk-config'
import { placeAndWait, type FlowContext } from './flow.js'
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
  leftover: string[]
  closedAccounts: number
  reclaimed: number
  swept: bigint
}

/** One instruction plus what it's for, so every transaction can be logged with the items it covered. */
interface Item {
  ix: TransactionInstruction
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
      record(await ctx.rpc.sendAndConfirm(batch.map((b) => b.ix), [signer]), batch)
    } catch {
      // One bad instruction fails the batch: fall back to one by one.
      for (const item of batch) {
        try {
          record(await ctx.rpc.sendAndConfirm([item.ix], [signer]), [item])
        } catch (e) {
          ctx.session.log({ trader: n, step: 'cleanup', event: `${what}_skipped`, ...item.meta, error: (e as Error).message.slice(0, 200) })
        }
      }
    }
  }
  return ok
}

/**
 * Return a trader to zero: sell every token to native SOL (self-paid), unwrap wSOL, close empty token
 * accounts, reclaim finished order PDAs, then sweep all SOL to the funder. Safe to re-run.
 */
export async function cleanupTrader(ctx: FlowContext, w: Wallets, n: number, env: CowEnv): Promise<CleanupResult> {
  const kp = w.trader(n)
  const owner = kp.publicKey
  const result: CleanupResult = { trader: n, sold: [], leftover: [], closedAccounts: 0, reclaimed: 0, swept: 0n }
  const sol: Token = { symbol: 'SOL', mint: NATIVE_SOL, decimals: 9, isSol: true, isNative: true }

  for (const acct of await ctx.rpc.tokenAccounts(owner)) {
    if (acct.amount === 0n || acct.mint.equals(WSOL_MINT)) continue
    const token: Token = { symbol: acct.mint.toBase58().slice(0, 6), mint: acct.mint, decimals: acct.decimals, isSol: false, isNative: false }
    const label = `${fromRaw(acct.amount, acct.decimals)} ${token.symbol}…`
    const res = await placeAndWait(
      ctx,
      { owner: kp, sell: token, buy: sol, kind: 'sell', amount: acct.amount, mode: 'self' },
      { trader: n, step: 'cleanup' },
    )
    ;(res.status === 'fulfilled' ? result.sold : result.leftover).push(label)
  }

  // Unwrap wSOL and close every empty account (rent back to the trader).
  const closes: Item[] = (await ctx.rpc.tokenAccounts(owner))
    .filter((a) => a.mint.equals(WSOL_MINT) || a.amount === 0n)
    .map((a) => ({
      ix: createCloseAccountInstruction(a.address, owner, owner),
      meta: { account: a.address.toBase58(), mint: a.mint.toBase58() },
      label: a.mint.equals(WSOL_MINT) ? 'wSOL' : a.mint.toBase58().slice(0, 6),
    }))
  result.closedAccounts = await sendBatches(ctx, closes, kp, 8, n, 'close')

  // Reclaim the rent of finished orders that still have a PDA on chain.
  const programId = getSolanaSettlementProgramId(env)
  const finished = (await ctx.orders.ownerOrders(owner)).filter((o) => o.status !== 'open')
  const reclaims: Item[] = []
  for (const o of finished) {
    const info = await ctx.rpc.call((c) => c.getAccountInfo(new PublicKey(o.orderPda)))
    if (info && info.owner.equals(programId)) {
      const createdBy = createdByOf(info.data)
      reclaims.push({
        ix: reclaimIx(programId, new PublicKey(o.orderPda), createdBy),
        meta: { uid: o.uid, orderPda: o.orderPda, createdBy: createdBy.toBase58(), status: o.status },
        label: o.uid.slice(0, 10),
      })
    }
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
    leftover: result.leftover,
    closedAccounts: result.closedAccounts,
    reclaimed: result.reclaimed,
    swept: result.swept.toString(),
  })
  ctx.log(
    `  ${c.blue(`t${n}`)} ${c.blue('cleanup')}: sold ${c.green(result.sold.length)}, left ${result.leftover.length ? c.yellow(result.leftover.length) : 0}, ` +
      `closed ${result.closedAccounts} accounts, reclaimed ${result.reclaimed} orders, swept ${c.bold(fmtSol(result.swept))}`,
  )
  return result
}
