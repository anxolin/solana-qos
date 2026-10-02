import { readFileSync, writeFileSync } from 'node:fs'
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

export function writeScenario(path: string, rows: Omit<TradeRow, 'row'>[], comment?: string) {
  const esc = (v: string | number) => (/[",\n]/.test(String(v)) ? `"${String(v).replace(/"/g, '""')}"` : String(v))
  const lines = [
    ...(comment ? comment.split('\n').map((l) => `# ${l}`) : []),
    HEADER.join(','),
    ...rows.map((r) => [r.trader, r.time, r.type, r.amount, r.token, r.otherToken, r.mode, r.note].map(esc).join(',')),
  ]
  writeFileSync(path, lines.join('\n') + '\n')
}

export const tradersIn = (rows: TradeRow[]) => [...new Set(rows.map((r) => r.trader))].sort((a, b) => a - b)
