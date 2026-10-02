import { PublicKey, TransactionInstruction, type Keypair } from '@solana/web3.js'
import { createCloseAccountInstruction } from '@solana/spl-token'
import { getSolanaSettlementProgramId } from '@cowprotocol/sdk-trading-solana'
import type { CowEnv } from '@cowprotocol/sdk-config'
import { placeAndWait, type FlowContext } from './flow.js'
import { NATIVE_SOL, WSOL_MINT } from './rpc.js'
import { fmtSol, sweepToFunder, type Wallets } from './wallets.js'
import { fromRaw, type Token } from './tokens.js'

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

async function sendBatches(ctx: FlowContext, ixs: TransactionInstruction[], signer: Keypair, size: number) {
  let ok = 0
  for (let i = 0; i < ixs.length; i += size) {
    const batch = ixs.slice(i, i + size)
    try {
      await ctx.rpc.sendAndConfirm(batch, [signer])
      ok += batch.length
    } catch {
      // One bad instruction fails the batch: fall back to one by one.
      for (const ix of batch) {
        try {
          await ctx.rpc.sendAndConfirm([ix], [signer])
          ok++
        } catch {
          /* not reclaimable yet / already closed */
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
  const closes = (await ctx.rpc.tokenAccounts(owner))
    .filter((a) => a.mint.equals(WSOL_MINT) || a.amount === 0n)
    .map((a) => createCloseAccountInstruction(a.address, owner, owner))
  result.closedAccounts = await sendBatches(ctx, closes, kp, 8)

  // Reclaim the rent of finished orders that still have a PDA on chain.
  const programId = getSolanaSettlementProgramId(env)
  const finished = (await ctx.orders.ownerOrders(owner)).filter((o) => o.status !== 'open')
  const reclaims: TransactionInstruction[] = []
  for (const o of finished) {
    const info = await ctx.rpc.call((c) => c.getAccountInfo(new PublicKey(o.orderPda)))
    if (info && info.owner.equals(programId)) reclaims.push(reclaimIx(programId, new PublicKey(o.orderPda), createdByOf(info.data)))
  }
  result.reclaimed = await sendBatches(ctx, reclaims, kp, 10)

  result.swept = await sweepToFunder(ctx.rpc, w, n)
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
    `  t${n} cleanup: sold ${result.sold.length}, left ${result.leftover.length}, closed ${result.closedAccounts} accounts, ` +
      `reclaimed ${result.reclaimed} orders, swept ${fmtSol(result.swept)}`,
  )
  return result
}
