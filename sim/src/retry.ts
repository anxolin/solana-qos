import type { Mode, TradeRow } from './scenario.js'

/** A failure from the sim's own RPC (rate limit, timeout, unreachable node) rather than from CoW or the market. */
export const isRpcFailure = (reason: string) =>
  /\b429\b|too many requests|rate limit|fetch failed|ECONNRESET|ETIMEDOUT|timed? ?out|socket hang up|node is (?:unhealthy|behind)/i.test(reason)

interface JournalLine {
  event: string
  row?: number
  trader?: number
  reason?: string
  type?: 'sell' | 'buy'
  amount?: number
  token?: string
  other?: string
  mode?: Mode
  time?: number
  note?: string
}

/** Each original row's latest attempt across a session and its retries (matched by their "retry of row N" notes). */
export function latestOutcomes(journals: JournalLine[][]) {
  const starts = new Map<number, JournalLine>()
  const outcome = new Map<number, { status: 'filled' | 'failed'; reason: string; attempts: number }>()
  journals.forEach((journal, i) => {
    const original = new Map<number, number>() // this journal's row -> original row
    for (const e of journal) {
      if (e.row === undefined) continue
      if (e.event === 'row_start') {
        const n = i === 0 ? e.row : Number(/^retry of row (\d+)/.exec(e.note ?? '')?.[1] ?? NaN)
        if (!Number.isNaN(n)) {
          original.set(e.row, n)
          if (!starts.has(n)) starts.set(n, { ...e, row: n, note: i === 0 ? e.note : e.note?.replace(/^retry of row \d+:? ?/, '') })
        }
      }
      // Rows that failed before logging their start can only be matched in the first journal.
      const n = original.get(e.row) ?? (i === 0 ? e.row : undefined)
      if (n === undefined) continue
      if (e.event === 'row_done' || e.event === 'row_failed') {
        outcome.set(n, { status: e.event === 'row_done' ? 'filled' : 'failed', reason: e.reason ?? '', attempts: (outcome.get(n)?.attempts ?? 0) + 1 })
      }
    }
  })
  return { starts, outcome }
}

/** Why a row failed, in the categories the reports use. */
export function failureKind(reason: string): string {
  if (/UnsupportedToken/.test(reason)) return 'UnsupportedToken'
  if (isRpcFailure(reason)) return 'RPC (429, timeout)'
  if (/^acquire .*NoLiquidity/.test(reason)) return 'NoLiquidity while acquiring'
  if (/NoLiquidity|no route/i.test(reason)) return 'NoLiquidity'
  if (/BlockhashExpired/.test(reason)) return 'BlockhashExpired'
  if (/InsufficientValidTo/.test(reason)) return 'InsufficientValidTo'
  if (/ (expired|timeout)$/.test(reason)) return 'order expired unfilled'
  return reason.slice(0, 60) || 'unknown'
}

/**
 * The rows of a session worth playing again after its RPC failed: rows that failed on RPC errors, plus later rows of
 * the same trader that failed after one of them, since they usually needed the token it never bought.
 * Each row comes from the journal; `original` (the scenario as it ran) fills in what the journal lacks: rows that
 * failed before logging their start, and the mode/time/note older journals didn't log. It's only trusted when it
 * matches at least 95% of the rows the journal logged; rows nothing can rebuild come back as `skipped`.
 */
export function retryRows(journal: JournalLine[] | JournalLine[][], original: TradeRow[] = [], match: (reason: string) => boolean = isRpcFailure) {
  const journals = (Array.isArray(journal[0]) ? journal : [journal]) as JournalLine[][]
  const latest = latestOutcomes(journals)
  const starts = latest.starts
  const failed = new Map([...latest.outcome].filter(([, o]) => o.status === 'failed').map(([row, o]) => [row, o.reason]))
  const byRow = new Map(original.map((r) => [r.row, r]))
  const same = (s: JournalLine, o?: TradeRow): o is TradeRow =>
    !!o && o.trader === s.trader && o.type === s.type && o.amount === s.amount && o.token === s.token && o.otherToken === s.other
  const matches = [...starts.values()].filter((s) => same(s, byRow.get(s.row!))).length
  const trusted = starts.size > 0 && matches / starts.size >= 0.95
  // The trade of a row: as logged, or from the trusted original when the row failed before logging it.
  const trade = (row: number): JournalLine | undefined => {
    const s = starts.get(row)
    if (s) return s
    const o = trusted ? byRow.get(row) : undefined
    return o && { event: 'row_start', row, trader: o.trader, type: o.type, amount: o.amount, token: o.token, other: o.otherToken, mode: o.mode, time: o.time, note: o.note }
  }
  const rpcRows = [...failed].filter(([, reason]) => match(reason)).map(([row]) => row)
  const picked = new Set(rpcRows)
  for (const row of rpcRows) {
    const s = trade(row)
    if (!s) continue
    const bought = s.type === 'sell' ? s.other : s.token
    for (const [later, reason] of failed) {
      const l = trade(later)
      const sells = l?.type === 'sell' ? l.token : l?.other
      if (later > row && l?.trader === s.trader && sells === bought && !match(reason)) picked.add(later)
    }
    // And the other way: the earlier row that was meant to deliver this row's sell token, if it failed too.
    const sells = s.type === 'sell' ? s.token : s.other
    for (const [earlier] of failed) {
      const e = trade(earlier)
      const delivers = e?.type === 'sell' ? e.other : e?.token
      if (earlier < row && e?.trader === s.trader && delivers === sells) picked.add(earlier)
    }
  }
  const skipped: number[] = []
  const rows = [...picked].sort((a, b) => a - b).flatMap((row) => {
    const s = trade(row)
    if (!s?.type || s.amount === undefined || !s.token || !s.other || s.trader === undefined) {
      skipped.push(row)
      return []
    }
    const o = byRow.get(row)
    const ok = same(s, o)
    const note = s.note ?? (ok ? o.note : '')
    return [{
      trader: s.trader, time: s.time ?? (ok ? o.time : 0), type: s.type, amount: s.amount, token: s.token, otherToken: s.other,
      mode: s.mode ?? (ok ? o.mode : ('sponsored' as Mode)), note: `retry of row ${row}${note ? `: ${note}` : ''}`,
    }]
  })
  return { rows, rpc: rpcRows.length, dependent: picked.size - rpcRows.length, skipped, originalMatches: trusted }
}
