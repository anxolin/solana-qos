import type { TradeRow } from './scenario.js'
import { sleep } from './limiter.js'

/** Wait through unresolved timeouts, including failed cancellation or unavailable orderbook reads. */
export async function waitForOutstandingOrders(
  orders: { uid: string; validTo: number }[],
  getOrder: (uid: string) => Promise<{ status: string } | null>,
) {
  const pending = new Map(orders.map(order => [order.uid, order.validTo * 1000 + 30_000]))
  while (pending.size) {
    await Promise.all([...pending].map(async ([uid, expires]) => {
      if (Date.now() >= expires) { pending.delete(uid); return }
      let timer: ReturnType<typeof setTimeout> | undefined
      try {
        const order = await Promise.race([
          getOrder(uid).catch(() => null),
          new Promise<null>(resolve => { timer = setTimeout(() => resolve(null), expires - Date.now()) }),
        ])
        if (Date.now() >= expires || (order && ['fulfilled', 'expired', 'cancelled'].includes(order.status))) pending.delete(uid)
      } finally {
        clearTimeout(timer)
      }
    }))
    if (pending.size) await sleep(Math.min(3000, Math.max(0, Math.min(...pending.values()) - Date.now())))
  }
}

/** The existing per-trader scheduler, with a barrier and a break between scenarios. */
export async function playScenarios<S extends { rows: TradeRow[] }, R>(
  scenarios: S[],
  options: {
    start: number
    breakSeconds?: number
    /** A row also waits until every row scheduled earlier (any trader) has finished: each CSV time is a phase. */
    phases?: boolean
    playRow: (row: TradeRow) => Promise<R>
    prepare?: (scenario: S) => Promise<void>
    onStart?: (scenario: S, at: number) => void
    onEnd?: (scenario: S) => Promise<void>
  },
): Promise<R[]> {
  const results: R[] = []
  for (const [index, scenario] of scenarios.entries()) {
    await options.prepare?.(scenario)
    const start = index === 0 ? Math.max(options.start, Date.now()) : Date.now()
    const wait = start - Date.now()
    if (wait > 0) await sleep(wait)
    options.onStart?.(scenario, start)
    const chains = new Map<number, Promise<void>>()
    const played: { time: number; done: Promise<void> }[] = []
    await Promise.all(scenario.rows.map(row => {
      const earlier = options.phases ? played.filter(p => p.time < row.time).map(p => p.done) : []
      const previous = Promise.all([chains.get(row.trader) ?? Promise.resolve(), ...earlier])
      const next = previous.then(async () => {
        const wait = start + row.time * 1000 - Date.now()
        if (wait > 0) await sleep(wait)
        results.push(await options.playRow(row))
      })
      chains.set(row.trader, next)
      // A failed row still ends its phase; its own failure is reported by Promise.all below.
      played.push({ time: row.time, done: next.catch(() => {}) })
      return next
    }))
    await options.onEnd?.(scenario)
    if (index < scenarios.length - 1) await sleep((options.breakSeconds ?? 0) * 1000)
  }
  return results
}
