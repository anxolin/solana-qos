import { readFileSync } from 'node:fs'
import { basename, dirname, resolve } from 'node:path'
import { readScenario, tradersIn, type TradeRow } from './scenario.js'

const minimums = {
  solFundingPerTrader: 0, maxTotalSol: 0, maxCreationSol: 0, maxRetries: 0,
  orderValidity: 120, fillTimeout: 0, quoteRps: 0, apiRps: 0, rpcRps: 0, slippageBps: 0,
} as const
const booleans = ['cancelOnTimeout', 'cleanup', 'report'] as const
type Settings = Partial<Record<keyof typeof minimums, number> & Record<typeof booleans[number], boolean>>

export interface CompositeConfig {
  name: string
  solver: string
  env: 'staging' | 'prod'
  breakSeconds: number
  scenarios: string[]
  options: Settings
}

export interface CompositeScenario {
  id: number
  name: string
  path: string
  rows: TradeRow[]
  sourceRows: { row: number; sourceRow: number; sourceTrader: number }[]
  /** Actual seconds from session start, set when this scenario begins. */
  offset?: number
  start?: string
  end?: string
}

function object(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value)
}

export function parseComposite(value: unknown): CompositeConfig {
  if (!object(value)) throw new Error('Composite config must be a JSON object')
  const allowed = ['name', 'solver', 'env', 'breakSeconds', 'scenarios', 'options']
  for (const key of Object.keys(value)) if (!allowed.includes(key)) throw new Error(`Unknown composite field: ${key}`)
  for (const key of ['name', 'solver']) {
    if (typeof value[key] !== 'string' || !value[key].trim()) throw new Error(`Composite ${key} must be a non-empty string`)
  }
  const env = value.env ?? 'staging'
  if (env !== 'staging' && env !== 'prod') throw new Error('Composite env must be staging or prod')
  const breakSeconds = value.breakSeconds ?? 60
  if (typeof breakSeconds !== 'number' || !Number.isFinite(breakSeconds) || breakSeconds < 0) {
    throw new Error('Composite breakSeconds must be a non-negative number')
  }
  const scenarios = value.scenarios
  if (!Array.isArray(scenarios) || !scenarios.length || scenarios.some(p => typeof p !== 'string' || !p.trim())) {
    throw new Error('Composite scenarios must be a non-empty array of CSV paths')
  }
  const options = value.options ?? {}
  if (!object(options)) throw new Error('Composite options must be an object')
  for (const [key, setting] of Object.entries(options)) {
    if ((booleans as readonly string[]).includes(key)) {
      if (typeof setting !== 'boolean') throw new Error(`Composite option ${key} must be a boolean`)
    } else if (Object.hasOwn(minimums, key)) {
      const min = minimums[key as keyof typeof minimums]
      if (typeof setting !== 'number' || !Number.isFinite(setting) || setting < min ||
          (['solFundingPerTrader', 'fillTimeout', 'quoteRps', 'apiRps', 'rpcRps'].includes(key) && setting === 0) ||
          (['maxRetries', 'orderValidity', 'slippageBps'].includes(key) && !Number.isInteger(setting))) {
        throw new Error(`Invalid composite option ${key}`)
      }
    } else throw new Error(`Unknown composite option: ${key}`)
  }
  return { name: value.name as string, solver: value.solver as string, env, breakSeconds, scenarios, options }
}

export function readComposite(path: string) {
  const config = parseComposite(JSON.parse(readFileSync(path, 'utf8')))
  let nextTrader = 1
  let nextRow = 1
  const scenarios: CompositeScenario[] = config.scenarios.map((file, index) => {
    const source = resolve(dirname(path), file)
    const original = readScenario(source)
    if (!original.length) throw new Error(`Composite scenario is empty: ${file}`)
    const traders = new Map(tradersIn(original).map(trader => [trader, nextTrader++]))
    const sourceRows: CompositeScenario['sourceRows'] = []
    const rows = original.map(r => {
      const row = nextRow++
      sourceRows.push({ row, sourceRow: r.row, sourceTrader: r.trader })
      return { ...r, row, trader: traders.get(r.trader)! }
    })
    return { id: index + 1, name: basename(file, '.csv'), path: file, rows, sourceRows }
  })
  return { ...config, scenarios }
}

/** Earliest scheduled timeline for preview; actual offsets replace it as scenarios begin. */
export function combinedRows(scenarios: CompositeScenario[], breakSeconds: number): TradeRow[] {
  let offset = 0
  return scenarios.flatMap(scenario => {
    offset = scenario.offset ?? offset
    const rows = scenario.rows.map(row => ({ ...row, time: offset + row.time }))
    offset += Math.max(...scenario.rows.map(row => row.time)) + breakSeconds
    return rows
  })
}
