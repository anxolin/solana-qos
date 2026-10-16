import { appendFileSync, existsSync, readFileSync, renameSync, truncateSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { CompositeScenario } from './composite.js'
import type { RowResult } from './flow.js'
import type { OrderDto } from './orders.js'
import { sleep } from './limiter.js'
import type { Session } from './session.js'
import { resolveMint } from './tokens.js'

export type RunScenario = CompositeScenario & {
  phase: 'pending' | 'running' | 'cleanup' | 'pause' | 'finished'
  elapsed: number
  checkpointAt?: number
  pauseUntil?: number
  cleanupDeferred?: boolean
  cleanupPending?: number[]
}

/** Only public identity and effective CLI settings are saved; never the mnemonic or RPC credentials. */
export interface SavedRun {
  version: 1
  scenarioPath: string
  options: Record<string, unknown>
  funder: string
  program: string
  api: string
  composite?: { name: string; solver: string; breakSeconds: number }
  scenarios: RunScenario[]
  results: RowResult[]
  times: Record<number, number>
  start?: number
  finished?: boolean
  unresolvedOrders?: UnresolvedOrder[]
}

export interface UnresolvedOrder {
  uid: string
  step: string
  trader: number
  row?: number
  validTo: number
  reason: string
  sellMint?: string
  sellAmount?: string
}

export function readRun(session: Session): SavedRun {
  const path = resolve(session.dir, 'sim', 'run.json')
  if (!existsSync(path)) throw new Error('This session has no resume checkpoint. Only runs started with resume support can be resumed.')
  const saved: SavedRun = JSON.parse(readFileSync(path, 'utf8'))
  if (saved.version !== 1) throw new Error('Unsupported resume checkpoint version')
  return saved
}

export function saveRun(session: Session, saved: SavedRun) {
  const path = resolve(session.dir, 'sim', 'run.json')
  writeFileSync(`${path}.tmp`, JSON.stringify(saved))
  renameSync(`${path}.tmp`, path)
}

export function journal(session: Session) {
  const path = resolve(session.dir, 'sim', 'journal.jsonl')
  if (!existsSync(path)) return []
  // A process can die while appending the last event; earlier complete events remain usable.
  const text = readFileSync(path, 'utf8')
  const end = text.lastIndexOf('\n') + 1
  if (end < text.length) {
    try { JSON.parse(text.slice(end)); appendFileSync(path, '\n') }
    catch { truncateSync(path, Buffer.byteLength(text.slice(0, end))) }
  }
  return readFileSync(path, 'utf8').split('\n').filter(Boolean)
    .map(line => JSON.parse(line) as {
      ts: string; event: string; step: string; row?: number; trader: number; uid?: string;
      validTo?: number; status?: string; cancelTx?: string; orders?: number; reason?: string; leftover?: unknown[];
      sell?: string; sellMint?: string; sellAmount?: string; stage?: string;
      request?: { uid?: string; intent?: { sellMint?: string; sellAmount?: string } };
    })
}

/** Order checks do not reconstruct row results; cleanup uses the same bounded checks as resume. */
export async function recoverOrders(
  session: Session, getOrder: (uid: string) => Promise<OrderDto | null>,
  onFinal?: (order: { uid: string; status: string; step: string; trader: number; row?: number }) => void,
  onUnresolved?: (order: UnresolvedOrder) => void,
  onlyUids?: ReadonlySet<string>,
): Promise<UnresolvedOrder[]> {
  const events = journal(session)
  const submitted = new Map<string, typeof events[number]>()
  for (const event of events) {
    if (event.uid && ['prepared', 'placed'].includes(event.event)) {
      submitted.set(event.uid, { ...submitted.get(event.uid), ...event })
    }
    // Older sessions recorded the exact intent only on a failed post/send.
    if (event.event === 'place_error' && event.request?.intent && (event.request.uid || event.stage === 'post' || event.stage === 'send')) {
      const prepared = event.request.uid ? submitted.get(event.request.uid) : [...submitted.values()].reverse()
        .find(order => order.trader === event.trader && order.row === event.row && order.step === event.step)
      if (prepared) {
        prepared.sellMint = event.request.intent.sellMint ?? prepared.sellMint
        prepared.sellAmount = event.request.intent.sellAmount ?? prepared.sellAmount
      }
    }
    if (event.uid && (event.event === 'rejected' || event.event === 'final' &&
      (['fulfilled', 'expired', 'cancelled'].includes(event.status!) || event.cancelTx))) submitted.delete(event.uid)
  }
  const pending = [...submitted].filter(([uid]) => !onlyUids || onlyUids.has(uid))
  for (const [uid, event] of pending) {
    if (!Number.isFinite(event.validTo)) throw new Error(`Order ${uid} has no validity deadline; cannot resume safely.`)
  }
  const unresolved = await Promise.all(pending.map(async ([uid, event]) => {
    let order: OrderDto | null = null
    let reason = ''
    for (let attempt = 0; attempt < 3; attempt++) {
      order = null
      reason = ''
      let timer: ReturnType<typeof setTimeout> | undefined
      try {
        order = await Promise.race([
          getOrder(uid),
          new Promise<never>((_resolve, reject) => { timer = setTimeout(() => reject(new Error('Order lookup timed out')), 3000) }),
        ])
      }
      catch (cause) {
        reason = cause instanceof Error ? cause.message : String(cause)
      }
      finally { clearTimeout(timer) }
      if (order && ['fulfilled', 'expired', 'cancelled'].includes(order.status)) break
      if (!reason) reason = order ? `API status is still ${order.status}` : 'Order was not found in the API'
      if (attempt < 2) await sleep(500)
    }
    if (!order || !['fulfilled', 'expired', 'cancelled'].includes(order.status)) {
      let sellMint = event.sellMint
      if (!sellMint && event.sell) {
        try { sellMint = resolveMint(event.sell).toBase58() } catch { /* Older custom symbols can be unavailable. */ }
      }
      const unresolved: UnresolvedOrder = { uid, step: event.step, trader: event.trader, row: event.row,
        validTo: event.validTo!, reason, sellMint, sellAmount: event.sellAmount }
      session.addOrder(uid)
      session.log({ ...unresolved, step: event.step as 'main' | 'acquire' | 'cleanup', event: 'recovery_unresolved' })
      onUnresolved?.(unresolved)
      return unresolved
    }
    session.addOrder(uid)
    if (event.event === 'prepared') session.log({ step: event.step as 'main' | 'acquire' | 'cleanup', trader: event.trader,
      row: event.row, event: 'placed', uid, validTo: event.validTo, sellMint: event.sellMint, sellAmount: event.sellAmount, recovered: true })
    session.log({ step: event.step as 'main' | 'acquire' | 'cleanup', trader: event.trader, row: event.row,
      event: 'final', uid, status: order.status, recovered: true,
      executedSellAmount: order.executedSellAmount, executedBuyAmount: order.executedBuyAmount })
    onFinal?.({ uid, status: order.status, step: event.step, trader: event.trader, row: event.row })
    return null
  }))
  return unresolved.filter((order): order is UnresolvedOrder => order !== null)
}

/** Reconstruct an interrupted run only while no row callbacks are active. */
export async function recoverRun(
  session: Session, saved: SavedRun, getOrder: (uid: string) => Promise<OrderDto | null>,
  onFinal?: (order: { uid: string; status: string; step: string; trader: number; row?: number }) => void,
  onUnresolved?: (order: UnresolvedOrder) => void,
  onlyUids?: ReadonlySet<string>,
) {
  const unresolved = await recoverOrders(session, getOrder, onFinal, onUnresolved, onlyUids)
  const remaining = (saved.unresolvedOrders ?? []).filter(order => onlyUids && !onlyUids.has(order.uid))
  if (saved.unresolvedOrders || unresolved.length) saved.unresolvedOrders = [...remaining, ...unresolved]
  const events = journal(session)
  const submitted = new Map<string, typeof events[number]>()
  const finals = new Map<string, string>()
  for (const event of events) {
    if (event.uid && ['prepared', 'placed'].includes(event.event) && (!onlyUids || onlyUids.has(event.uid))) submitted.set(event.uid, event)
    if (event.uid && event.event === 'rejected') submitted.delete(event.uid)
    if (event.event === 'final' && event.uid && ['fulfilled', 'expired', 'cancelled'].includes(event.status!)) finals.set(event.uid, event.status!)
    if (event.event === 'final' && event.uid && event.cancelTx) finals.set(event.uid, event.status === 'fulfilled' ? 'fulfilled' : 'cancelled')
  }
  const selectedRows = new Set([...submitted.values()].map(event => event.row))
  for (const event of events) {
    if (['row_done', 'row_failed'].includes(event.event) && event.row !== undefined && (!onlyUids || selectedRows.has(event.row))) {
      const orders = new Set(events.filter(e => e.row === event.row && e.event === 'placed').map(e => e.uid)).size
      const result: RowResult = { row: event.row, trader: event.trader, status: event.event === 'row_done' ? 'filled' : 'failed',
        reason: event.reason, orders: event.orders ?? orders }
      if (!saved.results.some(row => row.row === event.row)) saved.results.push(result)
    }
  }
  for (const scenario of saved.scenarios) {
    for (const row of scenario.rows) {
      const orders = [...submitted.values()].filter(e => e.row === row.row)
      const existing = saved.results.find(r => r.row === row.row)
      if (existing) { existing.orders = Math.max(existing.orders, orders.length); continue }
      const main = orders.filter(e => e.step === 'main')
      const filled = main.some(e => finals.get(e.uid!) === 'fulfilled')
      if (!main.length && (!orders.length || orders.every(e => finals.get(e.uid!) === 'fulfilled'))) continue
      const result: RowResult = { row: row.row, trader: row.trader, status: filled ? 'filled' : 'failed', orders: orders.length,
        ...(!filled ? { reason: orders.some(e => saved.unresolvedOrders?.some(o => o.uid === e.uid))
          ? 'Order outcome is unknown; trade was not replayed'
          : 'Order expired or was cancelled while the run was interrupted' } : {}) }
      saved.results.push(result)
      session.log({ ...result, step: 'main', event: filled ? 'row_done' : 'row_failed', recovered: true })
    }
  }
  saveRun(session, saved)
}
