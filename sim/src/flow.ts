import type { Keypair } from '@solana/web3.js'
import { solToLamports, TRADER_RESERVE_SOL } from './config.js'
import { errorDetail, errorInfo, sleep } from './limiter.js'
import type { Orders, PlaceParams, FinalStatus, Placed } from './orders.js'
import type { Rpc } from './rpc.js'
import type { Mode, TradeRow } from './scenario.js'
import type { Session, Step } from './session.js'
import { resolveToken, splMint, toRaw, fromRaw, type Token } from './tokens.js'
import * as ui from './ui.js'
import { c, stepLabel, tag } from './ui.js'

export interface FlowContext {
  /** Debug-tool and Solscan links for the session's environment. */
  link: { order: (uid: string) => string; tx: (sig: string) => string }
  rpc: Rpc
  orders: Orders
  session: Session
  maxRetries: number
  /** Extra margin acquired for buy rows, on top of the quoted max sell amount. */
  acquireBufferBps: number
  log: (m: string) => void
}

export interface RowResult {
  row: number
  trader: number
  status: 'filled' | 'failed'
  reason?: string
  orders: number
}

const fmt = (raw: bigint, t: Token) => `${fromRaw(raw, t.decimals).toPrecision(6)} ${t.symbol}`

/** Place an order and wait; on expiry/timeout re-quote (new uid) up to `maxRetries` times. */
export async function placeAndWait(
  ctx: FlowContext,
  p: PlaceParams,
  meta: { row?: number; trader: number; step: Step },
): Promise<{ status: FinalStatus | 'error'; attempts: number; last?: Placed; error?: string }> {
  let attempts = 0
  let last: Placed | undefined
  for (let attempt = 0; attempt <= ctx.maxRetries; attempt++) {
    attempts++
    try {
      last = await ctx.orders.place(p)
    } catch (e) {
      const error = errorDetail(e)
      const info = errorInfo(e)
      ctx.session.log({ ...meta, event: 'place_error', attempt, mode: p.mode, error, ...info })
      ctx.log(`  ${tag(meta.row, meta.trader)} ${stepLabel(meta.step)}: ${ui.error(`place failed${info.stage ? ` (${info.stage})` : ''}: ${error}`)}`)
      if (attempt < ctx.maxRetries) {
        await sleep(5000)
        continue
      }
      return { status: 'error', attempts, error }
    }
    ctx.session.addOrder(last.uid)
    ctx.session.log({
      ...meta,
      event: 'placed',
      attempt,
      uid: last.uid,
      mode: last.mode,
      forcedSelf: last.forcedSelf,
      kind: p.kind,
      sell: p.sell.symbol,
      buy: p.buy.symbol,
      sellAmount: last.sellAmount.toString(),
      buyAmount: last.buyAmount.toString(),
      validTo: last.validTo,
      signature: last.signature,
    })
    ctx.log(
      `  ${tag(meta.row, meta.trader)} ${stepLabel(meta.step)}: ${ui.kind(p.kind)} ${c.bold(fmt(last.sellAmount, p.sell))} → ` +
        `${c.bold(fmt(last.buyAmount, p.buy))} ${c.dim('[')}${ui.mode(last.mode)}${last.forcedSelf ? c.yellow(' (fallback)') : ''}${c.dim(']')} ` +
        c.dim(last.uid.slice(0, 10)),
    )
    ctx.log(`      ${c.dim('🐞')} ${c.cyan(ctx.link.order(last.uid))}${last.signature ? `  ${c.dim('tx')} ${c.dim(ctx.link.tx(last.signature))}` : ''}`)
    const { status, order, cancelTx } = await ctx.orders.waitFinal(last)
    ctx.session.log({
      ...meta,
      event: 'final',
      attempt,
      uid: last.uid,
      status,
      seconds: (Date.now() - last.placedAt) / 1000,
      executedSellAmount: order?.executedSellAmount,
      executedBuyAmount: order?.executedBuyAmount,
      cancelTx,
    })
    ctx.log(
      `  ${tag(meta.row, meta.trader)} ${stepLabel(meta.step)}: ${ui.status(status)} ${c.dim(`after ${((Date.now() - last.placedAt) / 1000).toFixed(0)}s`)}` +
        (cancelTx
          ? `${status === 'timeout' ? ', cancelled' : ''}\n      ${c.dim('cancel tx')} ${c.dim(ctx.link.tx(cancelTx))}`
          : status === 'timeout'
            ? c.dim(', moving on (the order expires on its own)')
            : ''),
    )
    if (status === 'fulfilled') return { status, attempts, last }
    if (attempt < ctx.maxRetries) ctx.session.log({ ...meta, event: 'retry', attempt: attempt + 1, previous: last.uid })
    else return { status, attempts, last }
  }
  return { status: 'timeout', attempts, last }
}

/** One scenario row. Never throws: an unexpected error (an RPC that won't answer, say) fails just this row. */
export async function runRow(ctx: FlowContext, owner: Keypair, row: TradeRow): Promise<RowResult> {
  try {
    return await playRow(ctx, owner, row)
  } catch (e) {
    const reason = `error: ${errorDetail(e)}`
    ctx.session.log({ row: row.row, trader: row.trader, step: 'main', event: 'row_failed', reason })
    ctx.log(`  ${tag(row.row, row.trader)}: ${ui.error(reason)}`)
    return { row: row.row, trader: row.trader, status: 'failed', reason, orders: 0 }
  }
}

/** Acquire the sell token if the trader is short, then place the main order. */
async function playRow(ctx: FlowContext, owner: Keypair, row: TradeRow): Promise<RowResult> {
  const base = { row: row.row, trader: row.trader }
  let orders = 0
  const fail = (reason: string): RowResult => {
    ctx.session.log({ ...base, step: 'main', event: 'row_failed', reason })
    return { ...base, status: 'failed', reason, orders }
  }
  let sell: Token, buy: Token
  try {
    const t = await resolveToken(ctx.rpc, row.token)
    const o = await resolveToken(ctx.rpc, row.otherToken)
    ;[sell, buy] = row.type === 'sell' ? [t, o] : [o, t]
  } catch (e) {
    return fail((e as Error).message)
  }
  const amount = toRaw(row.amount, row.type === 'sell' ? sell.decimals : buy.decimals)
  const main: PlaceParams = { owner, sell, buy, kind: row.type, amount, mode: row.mode }
  ctx.session.log({ ...base, step: 'main', event: 'row_start', type: row.type, amount: row.amount, token: row.token, other: row.otherToken })

  // How much of the sell token the main order needs.
  let need = amount
  if (row.type === 'buy') {
    try {
      const q = await ctx.orders.quote(main)
      need = (q.solanaQuote.intent.sellAmount * BigInt(10_000 + ctx.acquireBufferBps)) / 10_000n
    } catch (e) {
      return fail(`quote failed: ${errorDetail(e)}`)
    }
  }

  if (sell.isSol) {
    const lamports = await ctx.rpc.lamports(owner.publicKey)
    if (lamports < need + solToLamports(TRADER_RESERVE_SOL / 2)) {
      ctx.log(`  ${tag(row.row, row.trader)}: ${ui.warn(`low SOL (${fmt(lamports, sell)} for ${fmt(need, sell)}), trying anyway`)}`)
    }
  } else {
    const balance = await ctx.rpc.tokenBalance(owner.publicKey, splMint(sell), sell.programId)
    const available = balance - ctx.orders.ledger.reserved(owner.publicKey, splMint(sell))
    const short = need - (available > 0n ? available : 0n)
    if (short > 0n) {
      const sol = await resolveToken(ctx.rpc, 'SOL')
      const acq = await placeAndWait(
        ctx,
        { owner, sell: sol, buy: sell, kind: 'buy', amount: short, mode: row.mode },
        { ...base, step: 'acquire' },
      )
      orders += acq.attempts
      if (acq.status !== 'fulfilled') return fail(`acquire ${sell.symbol} ${acq.status}${acq.error ? `: ${acq.error}` : ''}`)
    }
  }

  const res = await placeAndWait(ctx, main, { ...base, step: 'main' })
  orders += res.attempts
  if (res.status !== 'fulfilled') return fail(`main ${res.status}${res.error ? `: ${res.error}` : ''}`)
  ctx.session.log({ ...base, step: 'main', event: 'row_done', orders })
  return { ...base, status: 'filled', orders }
}

export const modeLabel = (m: Mode) => (m === 'sponsored' ? 'sponsored' : 'self-paid')
