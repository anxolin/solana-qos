import { readFileSync, writeFileSync } from 'node:fs'
import { basename, isAbsolute, relative, resolve, sep } from 'node:path'
import { QOS_ROOT } from './config.js'
import { parse } from 'csv-parse/sync'

export type Mode = 'sponsored' | 'self'

/** One line of a scenario CSV. `token` is what `amount` refers to. */
export interface TradeRow {
  /** 1-based line number (excluding the header), for logs. */
  row: number
  trader: number
  /** Seconds from the session start when the trader starts this flow. */
  time: number
  type: 'sell' | 'buy'
  amount: number
  /** Sell token for sells, buy token for buys. */
  token: string
  /** Buy token for sells, sell token for buys. */
  otherToken: string
  mode: Mode
  note: string
}

export const HEADER = ['trader', 'time', 'type', 'amount', 'token', 'other_token', 'mode', 'note'] as const

export function parseScenario(text: string): TradeRow[] {
  const records = parse(text, { columns: true, skip_empty_lines: true, trim: true, comment: '#', relax_column_count: true }) as Record<
    string,
    string
  >[]
  const rows = records.map((r, i): TradeRow => {
    const row = i + 1
    const fail = (m: string): never => {
      throw new Error(`scenario row ${row}: ${m}`)
    }
    const trader = Number(r.trader)
    if (!Number.isInteger(trader) || trader < 1) fail(`trader must be an integer >= 1, got "${r.trader}"`)
    const time = Number(r.time)
    if (!Number.isFinite(time) || time < 0) fail(`time must be seconds >= 0, got "${r.time}"`)
    const type = r.type?.toLowerCase()
    if (type !== 'sell' && type !== 'buy') fail(`type must be sell or buy, got "${r.type}"`)
    const amount = Number(r.amount)
    if (!(amount > 0)) fail(`amount must be > 0, got "${r.amount}"`)
    if (!r.token) fail('token is required')
    if (!r.other_token) fail('other_token is required')
    if (r.token.toLowerCase() === r.other_token.toLowerCase()) fail('token and other_token must differ')
    const mode = (r.mode || 'sponsored').toLowerCase()
    if (mode !== 'sponsored' && mode !== 'self') fail(`mode must be sponsored or self, got "${r.mode}"`)
    return {
      row,
      trader,
      time,
      type: type as TradeRow['type'],
      amount,
      token: r.token,
      otherToken: r.other_token,
      mode: mode as Mode,
      note: r.note ?? '',
    }
  })
  return rows.sort((a, b) => a.time - b.time || a.row - b.row)
}

export const readScenario = (path: string) => parseScenario(readFileSync(path, 'utf8'))

/**
 * Start each trader `seconds` after the previous one (in trader order) by shifting all of its rows, so a scenario whose
 * traders all start at 0 ramps up instead of opening with one burst. A trader's own rows keep their order and gaps.
 */
export function spaceTraders(rows: TradeRow[], seconds: number): TradeRow[] {
  if (!(seconds > 0)) return rows
  const rank = new Map([...new Set(rows.map((r) => r.trader))].sort((a, b) => a - b).map((t, i) => [t, i]))
  return rows
    .map((r) => ({ ...r, time: r.time + rank.get(r.trader)! * seconds }))
    .sort((a, b) => a.time - b.time || a.row - b.row)
}

/**
 * Run every row as a sell of `token` for `other_token`, whatever the CSV's `type` column says. A converted buy keeps its
 * token and amount, so `buy 0.5 USDC with SOL` becomes `sell 0.5 USDC for SOL`: the trader acquires the token first (a
 * sell flow does that whenever it is short) and then sells it, which keeps a mixed or buy-only file to one order kind.
 */
export const sellOnly = (rows: TradeRow[]): TradeRow[] =>
  rows.every((r) => r.type === 'sell') ? rows : rows.map((r) => (r.type === 'sell' ? r : { ...r, type: 'sell' as const }))

/**
 * Start the n-th paced row (in the given order) at n * 60 / `perMinute` seconds, so the scenario places at most about
 * `perMinute` orders a minute however many traders run in parallel. A time is only the earliest start: a trader's rows
 * still run in order, so a slow flow delays that trader's later rows, not the pace. Rows `paced` skips keep their time.
 */
export function paceRows<T extends Pick<TradeRow, 'time'>>(rows: T[], perMinute: number, paced: (r: T) => boolean = () => true): T[] {
  if (!(perMinute > 0)) return rows
  let n = 0
  return rows.map((r) => (paced(r) ? { ...r, time: Math.round((n++ * 60) / perMinute) } : r))
}

export function writeScenario(path: string, rows: Omit<TradeRow, 'row'>[], comment?: string) {
  // Quote anything with a quote, comma, newline or '#': the parser reads an unquoted '#' as a comment, even mid-line.
  const esc = (v: string | number) => (/[",\n#]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v))
  const lines = [
    ...(comment ? comment.split('\n').map((l) => `# ${l}`) : []),
    HEADER.join(','),
    ...rows.map((r) => [r.trader, r.time, r.type, r.amount, r.token, r.otherToken, r.mode, r.note].map(esc).join(',')),
  ]
  writeFileSync(path, lines.join('\n') + '\n')
}

/**
 * A scenario's name for its session folder: its path under solana-qos/scenarios with `__` for each folder, so files of
 * the same name stay apart (scenarios/token-universe/top250.csv → token-universe__top250). Elsewhere, the file name.
 */
export function sessionSlug(path: string, scenariosDir = resolve(QOS_ROOT, 'scenarios')): string {
  const rel = relative(scenariosDir, resolve(path))
  if (!rel || rel.startsWith('..') || isAbsolute(rel)) return basename(path, '.csv')
  return rel.replace(/\.csv$/, '').split(sep).join('__')
}

export const tradersIn = (rows: TradeRow[]) => [...new Set(rows.map((r) => r.trader))].sort((a, b) => a - b)
