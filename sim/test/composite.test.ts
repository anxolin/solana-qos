import { afterEach, describe, expect, it, vi } from 'vitest'
import { fileURLToPath } from 'node:url'
import { execFileSync } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { readComposite, combinedRows, parseComposite } from '../src/composite.js'
import { playScenarios, waitForOutstandingOrders } from '../src/runner.js'
import { Session } from '../src/session.js'
import { tradersIn } from '../src/scenario.js'
import { creationBudget } from '../src/budget.js'

const sample = fileURLToPath(new URL('./fixtures/composite/composite.json', import.meta.url))

afterEach(() => vi.useRealTimers())

describe('composite scenarios', () => {
  it('loads per-scenario funding, slippage and fresh-account settings', () => {
    const directory = mkdtempSync(join(tmpdir(), 'fresh-composite-'))
    try {
      const path = join(directory, 'composite.json')
      const csv = fileURLToPath(new URL('./fixtures/composite/burst.csv', import.meta.url))
      const options = { freshAccounts: true, slippageBps: 500, solFundingPerTrader: 0.15 }
      writeFileSync(path, JSON.stringify({ name: 'fresh', solver: 'test', scenarios: [{ path: csv, options }] }))
      expect(readComposite(path).scenarios[0]).toMatchObject({ path: csv, options })
      expect(() => parseComposite({ name: 'fresh', solver: 'test', scenarios: [{ path: csv, options: { slippageBps: 10001 } }] })).toThrow(/slippageBps/)
    } finally { rmSync(directory, { recursive: true, force: true }) }
  })
  it('composes Grafiks scenarios and the shared fresh-account test within their budgets', () => {
    const config = fileURLToPath(new URL('../../scenarios/solver-validation/grafiks-composite.json', import.meta.url))
    const composite = readComposite(config)
    const rows = combinedRows(composite.scenarios, composite.breakSeconds)
    expect(composite.scenarios.map(scenario => [scenario.path, scenario.rows.length])).toEqual([
      ['solver-same-direction-25.csv', 25], ['solver-burst-sell.csv', 84], ['solver-cow.csv', 15],
      ['solver-token-coverage.csv', 55], ['solver-transaction-size.csv', 10], ['solver-fresh-accounts.csv', 8],
    ])
    expect(composite.solver).toBe('grafiks')
    expect(composite.breakSeconds).toBe(30)
    expect(new Set(rows.map(row => row.row)).size).toBe(197)
    const walletCount = new Set(rows.map(row => row.trader)).size
    expect(walletCount).toBe(122)
    const peakWallets = Math.max(...composite.scenarios.map(scenario => tradersIn(scenario.rows).length))
    expect(peakWallets * composite.options.solFundingPerTrader!).toBeLessThanOrEqual(composite.options.maxTotalSol!)
    const budget = creationBudget(rows, composite.options.maxRetries, composite.options.cleanup)
    expect(budget.creations).toBe(329)
    expect(Number(budget.total) / 1e9).toBeLessThanOrEqual(composite.options.maxCreationSol!)
  })
  it('defaults to a 60-second pause and keeps an explicitly configured pause', () => {
    const config = { name: 'sample', solver: 'solver-a', scenarios: ['burst.csv'] }
    expect(parseComposite(config).breakSeconds).toBe(60)
    expect(parseComposite({ ...config, breakSeconds: 180 }).breakSeconds).toBe(180)
  })
  it('combines the samples with separate wallets, stable row IDs and source mappings', () => {
    const composite = readComposite(sample)
    const rows = combinedRows(composite.scenarios, composite.breakSeconds)
    expect(rows.map(r => [r.row, r.trader, r.time])).toEqual([
      [1, 1, 0], [2, 2, 0], [3, 1, 2], [4, 2, 2],
      [5, 4, 62], [6, 3, 67], [7, 4, 67],
    ])
    expect(composite.scenarios[1].sourceRows).toEqual([
      { row: 5, sourceRow: 1, sourceTrader: 2 },
      { row: 6, sourceRow: 2, sourceTrader: 1 },
      { row: 7, sourceRow: 3, sourceTrader: 2 },
    ])
    expect(composite.scenarios[1].rows.map(r => r.time)).toEqual([0, 5, 5])
    expect(rows[4]).toMatchObject({ type: 'buy', amount: 0.25, note: 'prepare opposing order' })
    expect(composite.options.orderValidity).toBe(300)
  })

  it('previews the full composite without credentials and lets explicit CLI settings override config', () => {
    const output = execFileSync(process.execPath, [
      '--import', 'tsx', fileURLToPath(new URL('../src/cli/index.ts', import.meta.url)),
      'simulate-composite-scenario', sample, '--preview', '--sol-funding-per-trader', '0.08', '--no-cleanup',
    ], { encoding: 'utf8', env: { ...process.env, MNEMONIC: '', RPC_URL: '', SOLANA_RPC_URL: '' } })
    expect(output).toContain('Preview only: no network calls, funding, or trades.')
    expect(output).toMatch(/'burst.csv'\s+│\s+4\s+│\s+'Not run'\s+│\s+'1m'/)
    expect(output).toMatch(/'cow.csv'\s+│\s+3\s+│\s+'Not run'/)
    expect(output).toContain('Pause after running')
    expect(output).not.toContain('Break after')
    expect(output).toContain('┌')
    expect(output).toContain('Results: not available')
    expect(output).toContain('Breaks start after all trades, outstanding orders, and cleanup finish.')
    expect(output).toContain('Funding: up to 0.3200 SOL across all scenarios; cap 0.15 SOL per scenario.')
    expect(output).toContain('Cleanup: disabled; funds stay in the trader wallets.')
    expect(output).toContain('Estimated order creation fees/rent: 0.0240 SOL')
    expect(output).not.toContain('firstRowSeconds')
    expect(output).not.toContain('wallets (IDs')
  })

  it('uses the config environment unless the CLI explicitly overrides it', () => {
    const directory = mkdtempSync(join(tmpdir(), 'composite-preview-'))
    try {
      const config = JSON.parse(readFileSync(sample, 'utf8'))
      config.env = 'prod'
      config.scenarios = config.scenarios.map((path: string) => fileURLToPath(new URL(`./fixtures/composite/${path}`, import.meta.url)))
      const path = join(directory, 'composite.json')
      writeFileSync(path, JSON.stringify(config))
      const preview = (extra: string[]) => execFileSync(process.execPath, [
        '--import', 'tsx', fileURLToPath(new URL('../src/cli/index.ts', import.meta.url)),
        'simulate-composite-scenario', path, '--preview', ...extra,
      ], { encoding: 'utf8', env: { ...process.env, MNEMONIC: '', RPC_URL: '', SOLANA_RPC_URL: '' } })
      expect(preview([])).toContain('Environment: prod')
      expect(preview(['--env', 'staging'])).toContain('Environment: staging')
    } finally {
      rmSync(directory, { recursive: true, force: true })
    }
  })

  it.each([
    [{ scenarios: [] }, /scenarios/],
    [{ breakSeconds: -1 }, /breakSeconds/],
    [{ env: 'production' }, /env/],
    [{ options: { maxRetries: -1 } }, /maxRetries/],
    [{ options: { orderValidity: 90 } }, /orderValidity/],
    [{ options: { yes: true } }, /yes/],
  ])('rejects an invalid composite before preparing a session: %j', (changes, error) => {
    expect(() => parseComposite({ name: 'test', solver: 'test', scenarios: ['burst.csv'], ...changes })).toThrow(error)
  })
})

describe('scenario playback', () => {
  it('keeps a single CSV schedule and does not add a final break', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(0)
    const [scenario] = readComposite(sample).scenarios
    const starts: number[] = []
    const result = playScenarios([scenario], {
      start: 5000,
      breakSeconds: 180,
      playRow: async () => { starts.push(Date.now()); return 'filled' },
    })
    await vi.runAllTimersAsync()
    expect(starts).toEqual([5000, 5000, 7000, 7000])
    expect(Date.now()).toBe(7000)
    expect(await result).toEqual(['filled', 'filled', 'filled', 'filled'])
  })

  it('waits until unresolved orders are final or past validity when orderbook reads fail', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(0)
    const finished = waitForOutstandingOrders([
      { uid: 'late-fill', validTo: 60 }, { uid: 'unavailable', validTo: 2 },
    ], async uid => {
      if (uid === 'unavailable') throw new Error('orderbook unavailable')
      return { status: Date.now() >= 6000 ? 'fulfilled' : 'open' }
    })
    await vi.runAllTimersAsync()
    await finished
    expect(Date.now()).toBe(32_000)
  })

  it('ends drainage at expiry even when an orderbook read never returns', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(0)
    let ended = false
    const finished = waitForOutstandingOrders([{ uid: 'stalled', validTo: 2 }], () => new Promise(() => {}))
      .then(() => { ended = true })
    await vi.runAllTimersAsync()
    expect(ended).toBe(true)
    expect(Date.now()).toBe(32_000)
    await finished
  })

  it('retains earlier timed-out attempts until final, including a failed cancellation', () => {
    const session = new Session(`validation-test-${randomUUID()}`)
    try {
      for (const uid of ['timeout', 'retry', 'cancelled', 'filled', 'expired']) {
        session.log({ step: 'main', event: 'placed', uid, validTo: 300 })
      }
      session.log({ step: 'main', event: 'final', uid: 'timeout', status: 'timeout' })
      session.log({ step: 'main', event: 'final', uid: 'cancelled', status: 'timeout', cancelTx: 'confirmed-tx' })
      session.log({ step: 'main', event: 'final', uid: 'filled', status: 'fulfilled' })
      session.log({ step: 'main', event: 'final', uid: 'expired', status: 'expired' })
      expect(session.outstandingOrders()).toEqual([
        { uid: 'timeout', validTo: 300 }, { uid: 'retry', validTo: 300 },
      ])
    } finally {
      rmSync(session.dir, { recursive: true, force: true })
    }
  })
})
