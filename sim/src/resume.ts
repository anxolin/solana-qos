import { appendFileSync, existsSync, readFileSync, renameSync, truncateSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import type { CompositeScenario } from './composite.js'
import type { RowResult } from './flow.js'
import type { OrderDto } from './orders.js'
import { sleep } from './limiter.js'
import type { Session } from './session.js'

export type RunScenario = CompositeScenario & {
  phase: 'pending' | 'running' | 'cleanup' | 'pause' | 'finished'
  elapsed: number
  checkpointAt?: number
  pauseUntil?: number
  cleanupDeferred?: boolean
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
    })
}

/** Reconcile every possibly submitted order before any new trading or cleanup. Never guess after an unavailable read. */
export async function recoverRun(
  session: Session, saved: SavedRun, getOrder: (uid: string) => Promise<OrderDto | null>,
  onFinal?: (order: { uid: string; status: string; step: string; trader: number; row?: number }) => void,
) {
  const events = journal(session)
  const submitted = new Map<string, typeof events[number]>()
  const finals = new Map<string, string>()
  for (const event of events) {
    if (event.uid && ['prepared', 'placed'].includes(event.event)) submitted.set(event.uid, event)
    if (event.uid && event.event === 'rejected') submitted.delete(event.uid)
    if (event.event === 'final' && event.uid && ['fulfilled', 'expired', 'cancelled'].includes(event.status!)) finals.set(event.uid, event.status!)
    if (['row_done', 'row_failed'].includes(event.event) && event.row !== undefined) {
      const orders = new Set(events.filter(e => e.row === event.row && e.event === 'placed').map(e => e.uid)).size
      const result: RowResult = { row: event.row, trader: event.trader, status: event.event === 'row_done' ? 'filled' : 'failed',
        reason: event.reason, orders: event.orders ?? orders }
      const existing = saved.results.findIndex(r => r.row === event.row)
      if (existing < 0) saved.results.push(result)
    }
  }
  for (const [uid, event] of submitted) {
    if (finals.has(uid)) continue
    if (!Number.isFinite(event.validTo)) throw new Error(`Order ${uid} has no validity deadline; cannot resume safely.`)
    let order: OrderDto | null
    do {
      let timer: ReturnType<typeof setTimeout> | undefined
      try {
        order = await Promise.race([
          getOrder(uid),
          new Promise<never>((_resolve, reject) => { timer = setTimeout(() => reject(new Error('Order lookup timed out')), 30_000) }),
        ])
      }
      catch (cause) { throw new Error(`Cannot verify order ${uid}. Resume stopped without placing new trades.`, { cause }) }
      finally { clearTimeout(timer) }
      if (!order) throw new Error(`Cannot verify order ${uid}. Resume stopped without placing new trades; check this order before continuing.`)
      if (['fulfilled', 'expired', 'cancelled'].includes(order.status)) break
      if (Date.now() >= event.validTo! * 1000 + 30_000) throw new Error(`Order ${uid} still has no confirmed final status. Resume stopped without placing new trades.`)
      await sleep(3000)
    } while (true)
    finals.set(uid, order.status)
    session.addOrder(uid)
    if (event.event === 'prepared') session.log({ step: event.step as 'main' | 'acquire' | 'cleanup', trader: event.trader,
      row: event.row, event: 'placed', uid, validTo: event.validTo, recovered: true })
    session.log({ step: event.step as 'main' | 'acquire' | 'cleanup', trader: event.trader, row: event.row,
      event: 'final', uid, status: order.status, recovered: true,
      executedSellAmount: order.executedSellAmount, executedBuyAmount: order.executedBuyAmount })
    onFinal?.({ uid, status: order.status, step: event.step, trader: event.trader, row: event.row })
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
        ...(!filled ? { reason: 'Order expired or was cancelled while the run was interrupted' } : {}) }
      saved.results.push(result)
      session.log({ ...result, step: 'main', event: filled ? 'row_done' : 'row_failed', recovered: true })
    }
  }
  saveRun(session, saved)
}
