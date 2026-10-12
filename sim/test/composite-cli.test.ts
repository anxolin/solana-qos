import { afterEach, expect, it, vi } from 'vitest'
import { Command } from 'commander'
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { FlowContext } from '../src/flow.js'
import type { TradeRow } from '../src/scenario.js'
import type { SavedRun } from '../src/resume.js'

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
})

it.each([
  { override: [], name: '1970-01-01-00-00-composite-solver-a-run', cleanup: true, mode: 'fresh' },
  { override: ['--session', 'offline', '--no-cleanup'], name: 'offline', cleanup: false, mode: 'fresh' },
  { override: ['--session', 'interrupt'], name: 'interrupt', cleanup: true, mode: 'interrupt' },
  { override: ['--session', 'unsorted', '--sol-funding-per-trader', '0.07', '--report'], name: 'unsorted', cleanup: true, mode: 'unsorted' },
  ...['running', 'single', 'cleanup', 'pause', 'unknown', 'identity', 'finished'].map(mode => ({ override: [], name: mode, cleanup: true, mode })),
  ...['defer', 'defer-running', 'defer-unknown', 'defer-shared'].map(mode => ({ override: ['--defer-cleanup'], name: mode, cleanup: true, mode })),
])('runs the real command offline: $name', async ({ override, name, cleanup, mode }) => {
  vi.resetModules()
  const root = mkdtempSync(join(tmpdir(), 'composite-cli-'))
  writeFileSync(join(root, 'tokens.json'), JSON.stringify({
    EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v: 'USDC',
  }))
  const sample = fileURLToPath(new URL('./fixtures/composite/composite.json', import.meta.url))
  const singleCsv = join(root, 'unsorted.csv')
  writeFileSync(singleCsv, 'trader,time,type,amount,token,other_token\n1,10,sell,0.001,SOL,USDC\n2,0,sell,0.002,SOL,USDC\n3,20,sell,0.003,SOL,USDC\n')
  const mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about'
  const starts: [number, number][] = []
  let interrupt = mode === 'interrupt'
  const lifecycle: [string, number[], number][] = []
  const balances = new Map<string, bigint>()
  let holdings = true
  let quoteOutage = true
  let funderBalance = mode === 'cleanup' ? 80_000_000n : mode === 'unsorted' ? 500_000_000n : cleanup ? 150_000_000n : 300_000_000n
  const fund = vi.fn<typeof import('../src/wallets.js').fund>(async (_rpc, _w, plan) => {
    lifecycle.push(['fund', plan.map(line => line.trader), Date.now() / 1000])
    funderBalance -= plan.reduce((sum, line) => sum + line.topUp, 0n)
    for (const line of plan) balances.set(line.address.toBase58(), line.balance + line.topUp)
    // Preparation must not consume the next scenario's scheduled trading time.
    if (plan[0].trader === 3) await new Promise(resolve => setTimeout(resolve, 2000))
  })
  const report = vi.fn()
  const network = vi.fn(() => { throw new Error('Network access is forbidden in this test') })
  vi.stubGlobal('fetch', network)
  vi.doMock('../src/config.js', async importOriginal => {
    const actual = await importOriginal<typeof import('../src/config.js')>()
    return {
      ...actual, QOS_ROOT: root, SIM_ROOT: root,
      logsConfigured: () => false,
      loadEnv: () => ({
        mnemonic,
        rpcUrl: 'https://rpc.invalid', apiBase: 'https://orderbook.invalid', cowEnv: 'staging',
        urls: { label: 'Offline', api: 'https://orderbook.invalid', debug: '', solscan: '', logs: null,
          sponsor: '11111111111111111111111111111111' },
      }),
    }
  })
  vi.doMock('../src/wallets.js', async importOriginal => ({
    ...await importOriginal<typeof import('../src/wallets.js')>(), fund,
  }))
  vi.doMock('../src/flow.js', async importOriginal => ({
    ...await importOriginal<typeof import('../src/flow.js')>(),
    runRow: async (ctx: FlowContext, _wallet: unknown, row: TradeRow) => {
      starts.push([row.row, Date.now() / 1000])
      ctx.session.log({ step: 'main', event: 'placed', row: row.row, uid: `order-${row.row}`, validTo: 300 })
      await new Promise(resolve => setTimeout(resolve, row.row === 1 ? 10_000 : 1000))
      if (row.row === 1 && interrupt) { interrupt = false; throw new Error('Simulated process interruption') }
      ctx.session.log({ step: 'main', event: 'final', uid: `order-${row.row}`, status: row.row === 1 ? 'timeout' : 'fulfilled' })
      ctx.log(`  #${row.row} t${row.trader} main: ${row.row === 1 ? 'timeout' : 'fulfilled'}`)
      return { row: row.row, trader: row.trader, orders: 1, status: row.row === 1 ? 'failed' : 'filled',
        reason: row.row === 1 ? 'main timeout' : undefined }
    },
  }))
  vi.doMock('../src/cleanup.js', async importOriginal => {
    const actual = await importOriginal<typeof import('../src/cleanup.js')>()
    return {
      cleanupTrader: async (ctx: FlowContext, w: ReturnType<typeof wallets>, trader: number) => {
        lifecycle.push(['cleanup', [trader], Date.now() / 1000])
        await new Promise(resolve => setTimeout(resolve, 3000))
        if (mode === 'cleanup') return actual.cleanupTrader(ctx, w, trader, 'staging')
        funderBalance += 70_000_000n
        ctx.session.log({ step: 'cleanup', event: 'cleanup_done', trader, leftover: [] })
        return { swept: 70_000_000n, leftover: [] }
      },
    }
  })
  vi.doMock('node:child_process', async importOriginal => ({
    ...await importOriginal<typeof import('node:child_process')>(), spawnSync: report,
  }))
  const { wallets } = await import('../src/wallets.js')
  const { readScenario } = await import('../src/scenario.js')
  const w = wallets(mnemonic)
  const funder = w.funder.publicKey
  const stubNetwork = async () => {
    const { Rpc } = await import('../src/rpc.js')
    const { Orders } = await import('../src/orders.js')
    vi.spyOn(Rpc.prototype, 'lamports').mockImplementation(async address =>
      address.equals(funder) ? funderBalance : address.toBase58() === '11111111111111111111111111111111' ? 10_000_000_000n : balances.get(address.toBase58()) ?? 0n)
    vi.spyOn(Orders.prototype, 'getOrder').mockImplementation(async uid => mode === 'unknown' || mode === 'defer-unknown' ? null : ({
      uid, status: Date.now() >= 20_000 ? 'fulfilled' : 'open', validTo: 300,
      executedSellAmount: '0', executedBuyAmount: '0', orderPda: '',
    }))
    if (mode === 'cleanup') {
      const { PublicKey, SystemProgram } = await import('@solana/web3.js')
      const { TOKEN_PROGRAM_ID } = await import('@solana/spl-token')
      vi.spyOn(Rpc.prototype, 'tokenAccounts').mockImplementation(async owner => owner.equals(w.trader(2).publicKey) && holdings ? [{
        address: new PublicKey('11111111111111111111111111111111'), mint: new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
        amount: 1_000_000n, decimals: 6, lamports: 2_000_000, programId: TOKEN_PROGRAM_ID,
      }] : [])
      vi.spyOn(Orders.prototype, 'quote').mockImplementation(async () => {
        if (quoteOutage) throw new Error('404 Not Found: NoLiquidity: no route found')
        return { solanaQuote: { intent: { buyAmount: 3_000_000n } } } as never
      })
      vi.spyOn(Orders.prototype, 'place').mockImplementation(async (params, record) => {
        const balance = balances.get(params.owner.publicKey.toBase58()) ?? 0n
        expect(balance).toBeGreaterThanOrEqual(3_000_000n)
        holdings = false
        const placed = { uid: 'cleanup-order', mode: 'self', validTo: 300, placedAt: Date.now(), sellAmount: 1_000_000n, buyAmount: 3_000_000n }
        record?.(placed as never, 'prepared')
        return placed as never
      })
      vi.spyOn(Orders.prototype, 'waitFinal').mockResolvedValue({ status: 'fulfilled', order: null })
      vi.spyOn(Orders.prototype, 'ownerOrders').mockResolvedValue([])
      vi.spyOn(Rpc.prototype, 'sendAndConfirm').mockImplementation(async (ixs, signers) => {
        const owner = signers[0].publicKey.toBase58()
        if (ixs[0].programId.equals(SystemProgram.programId)) {
          funderBalance += (balances.get(owner) ?? 0n) - 5000n
          balances.set(owner, 0n)
        }
        return 'mock-cleanup-tx'
      })
    }
    return { Rpc, Orders }
  }
  const { Rpc, Orders } = await stubNetwork()
  const logs = vi.spyOn(console, 'log').mockImplementation(() => {})
  const tables = vi.spyOn(console, 'table').mockImplementation(() => {})
  const errors = vi.spyOn(console, 'error').mockImplementation(() => {})
  const exit = vi.spyOn(process, 'exit').mockImplementation(() => undefined as never)
  const argv = vi.spyOn(process, 'argv', 'get').mockReturnValue([
    process.execPath, 'sim', ...(mode === 'unsorted' ? ['simulate-trade-session', singleCsv] : mode === 'fresh' || mode === 'interrupt' ? ['simulate-composite-scenario', sample] : ['resume-session', name]), ...override, '--yes',
  ])
  // Capture the CLI's completion without exporting an entry point only for tests.
  const parse = Command.prototype.parseAsync
  let completion: Promise<Command> | undefined
  vi.spyOn(Command.prototype, 'parseAsync').mockImplementation(function (this: Command, ...args) {
    completion = parse.apply(this, args)
    completion.catch(() => {})
    return completion
  })
  vi.useFakeTimers()
  vi.setSystemTime(0)
  try {
    if (mode !== 'fresh' && mode !== 'interrupt' && mode !== 'unsorted') {
      const { Session } = await import('../src/session.js')
      const { readComposite } = await import('../src/composite.js')
      const { saveRun } = await import('../src/resume.js')
      const config = readComposite(sample)
      const session = new Session(name)
      session.writeMeta({ start: new Date(5000).toISOString(), env: 'staging' })
      const saved: SavedRun = {
        version: 1, scenarioPath: join(root, 'deleted-original.csv'), funder: mode === 'identity' ? 'another funder' : funder.toBase58(),
        program: new Orders(new Rpc('https://rpc.invalid'), { env: 'staging', apiBase: 'https://orderbook.invalid', validFor: 300 }).programId.toBase58(), api: 'https://orderbook.invalid',
        options: { ...config.options, env: 'staging', cleanup: true, maxRetries: 0, rpcRps: 10, apiRps: 8, quoteRps: 5 },
        ...(mode === 'single' ? {} : { composite: { name: config.name, solver: config.solver, breakSeconds: 60 } }),
        start: 5000, scenarios: config.scenarios.slice(0, mode === 'single' ? 1 : 2).map(scenario => ({ ...scenario, phase: 'pending', elapsed: 0 })),
        results: [], times: {}, finished: mode === 'finished',
      }
      const first = saved.scenarios[0]
      Object.assign(first, { phase: mode === 'single' ? 'running' : mode === 'cleanup' || mode === 'pause' ? mode : 'finished',
        start: new Date(5000).toISOString(), end: new Date(22_000).toISOString(), offset: 0, elapsed: mode === 'single' ? 1 : 17 })
      if (mode.startsWith('defer')) first.phase = mode === 'defer-running' ? 'running' : 'cleanup'
      if (mode === 'defer-shared') saved.scenarios[1].rows[0].trader = first.rows[0].trader
      first.pauseUntil = 120_000
      if (mode === 'single') {
        session.log({ step: 'main', event: 'prepared', row: 1, trader: 1, uid: 'interrupted-main', validTo: 300 })
        session.log({ step: 'main', event: 'row_failed', row: 2, trader: 2, reason: 'previous failure' })
      } else {
        saved.results = first.rows.map(row => ({ row: row.row, trader: row.trader, orders: 1,
          status: row.row === 1 ? 'failed' : 'filled', reason: row.row === 1 ? 'main timeout' : undefined }))
        for (const row of first.rows) saved.times[row.row] = row.time
        if (mode === 'running' || mode === 'unknown') {
          Object.assign(saved.scenarios[1], { phase: 'running', elapsed: 2, checkpointAt: 84_000,
            start: new Date(82_000).toISOString(), offset: 77 })
          saved.times[5] = 77
          session.log({ step: 'main', event: 'prepared', row: 5, trader: 4, uid: 'interrupted-main', validTo: 300 })
          session.log({ step: 'acquire', event: 'placed', row: 7, trader: 4, uid: 'interrupted-acquisition', validTo: 300 })
        }
        if (mode === 'cleanup') {
          session.log({ step: 'cleanup', event: 'cleanup_done', trader: 1, leftover: [] })
          balances.set(w.trader(2).publicKey.toBase58(), 70_000_000n)
          const actual = await vi.importActual<typeof import('../src/cleanup.js')>('../src/cleanup.js')
          const result = await actual.cleanupTrader({ session, rpc: new Rpc('https://rpc.invalid'),
            orders: new Orders(new Rpc('https://rpc.invalid'), { env: 'staging', apiBase: 'https://orderbook.invalid', validFor: 300 }),
            maxRetries: 0, acquireBufferBps: 100, log: () => {}, link: { order: uid => uid, tx: sig => sig } }, w, 2, 'staging')
          expect(result.leftover).toHaveLength(1)
          expect(balances.get(w.trader(2).publicKey.toBase58())).toBe(0n)
          quoteOutage = false
        }
      }
      if (mode.startsWith('defer')) {
        session.log({ step: 'cleanup', event: 'cleanup_done', trader: 1, leftover: [] })
        session.log({ step: 'cleanup', event: 'cleanup_done', trader: 2, leftover: ['0.806183 USDC'] })
        if (mode === 'defer-unknown') session.log({ step: 'cleanup', event: 'placed', trader: 2, uid: 'uncertain-cleanup', validTo: 300 })
      }
      saveRun(session, saved)
      vi.setSystemTime(100_000)
    }
    await import('../src/cli/index.js')
    await vi.runAllTimersAsync()
    if (mode === 'interrupt') {
      await expect(completion).rejects.toThrow('Simulated process interruption')
      const saved = JSON.parse(readFileSync(join(root, 'sessions', name, 'sim', 'run.json'), 'utf8')) as SavedRun
      expect(saved.scenarios[0].phase).toBe('running')
      expect(saved.scenarios[0].elapsed).toBeGreaterThanOrEqual(9)
      expect(saved.scenarios[0].elapsed).toBeLessThanOrEqual(10)
      expect(saved.results.map(result => result.row).sort()).toEqual([2, 4])
      errors.mockClear()
      exit.mockClear()
      funderBalance = 150_000_000n
      vi.setSystemTime(100_000)
      argv.mockReturnValue([process.execPath, 'sim', 'resume-session', name, '--yes'])
      vi.resetModules()
      await stubNetwork()
      await import('../src/cli/index.js')
      await vi.runAllTimersAsync()
    }
    if (mode === 'unknown' || mode === 'identity' || ['defer-running', 'defer-unknown', 'defer-shared'].includes(mode)) {
      const error = {
        unknown: 'Cannot verify order interrupted-main', identity: 'original funder',
        'defer-running': 'only when a composite scenario is waiting for cleanup',
        'defer-unknown': 'Cannot verify order uncertain-cleanup', 'defer-shared': 'reuse its trader wallets',
      }[mode]!
      await expect(completion).rejects.toThrow(error)
      expect(starts).toEqual([])
      expect(lifecycle).toEqual([])
      if (mode.startsWith('defer')) {
        const saved = JSON.parse(readFileSync(join(root, 'sessions', name, 'sim', 'run.json'), 'utf8'))
        expect(saved.scenarios[0].cleanupDeferred).toBeUndefined()
      }
      return
    }
    await completion
    expect(errors).not.toHaveBeenCalled()
    expect(network).not.toHaveBeenCalled()
    if (mode === 'finished') {
      expect(starts).toEqual([])
      expect(lifecycle).toEqual([])
      return
    }
    expect(exit).toHaveBeenCalledWith(0)
    const directory = join(root, 'sessions', name)
    const checkpoint = JSON.parse(readFileSync(join(directory, 'sim', 'run.json'), 'utf8')) as SavedRun
    expect(checkpoint.finished).toBe(true)
    if (mode === 'unsorted') {
      const savedRows = readScenario(join(directory, 'sim', 'scenario.csv'))
      const original = readScenario(singleCsv)
      expect(savedRows).toEqual(original)
      const { retryRows } = await import('../src/retry.js')
      const journal = original.filter(row => row.row !== 3).map(row => ({ ...row, other: row.otherToken, event: 'row_start' }))
      const retry = retryRows([[...journal, { row: 3, trader: 3, event: 'row_failed', reason: 'RPC fetch failed' }]], savedRows)
      expect(retry.originalMatches).toBe(true)
      expect(retry.rows).toMatchObject([{ trader: 3, amount: 0.003 }])
      return
    }
    expect(new Set(checkpoint.results.map(result => result.row)).size).toBe(mode === 'single' ? 4 : 7)
    expect(report.mock.calls.map(call => call[1].slice(1))).toEqual([
      ['fetch', '--session', name], ['report', '--session', name],
    ])
    if (mode !== 'fresh') {
      const expected = {
        running: [[6, 105], [7, 105]], single: [[3, 101], [4, 101]],
        cleanup: [[5, 165], [6, 170], [7, 170]], pause: [[5, 122], [6, 127], [7, 127]],
        defer: [[5, 122], [6, 127], [7, 127]],
        interrupt: [[1, 5], [2, 5], [4, 7], [3, 100], [5, 166], [6, 171], [7, 171]],
      }[mode]
      expect(starts).toEqual(expected)
      if (mode === 'running') expect(checkpoint.results.find(result => result.row === 7)?.orders).toBe(2)
      if (mode === 'cleanup') expect(lifecycle.slice(0, 2)).toEqual([['fund', [2], 100], ['cleanup', [2], 100]])
      if (mode === 'pause' || mode === 'running') expect(lifecycle.filter(event => event[0] === 'cleanup').map(event => event[1][0])).toEqual([3, 4])
      if (mode === 'defer') {
        expect(lifecycle).toEqual([['fund', [3, 4], 120], ['cleanup', [3], 128], ['cleanup', [4], 128]])
        expect(checkpoint.options.cleanup).toBe(true)
        expect(checkpoint.scenarios[0].cleanupDeferred).toBe(true)
        expect(checkpoint.scenarios[1].cleanupDeferred).toBeUndefined()
        const events = readFileSync(join(directory, 'sim', 'journal.jsonl'), 'utf8').trim().split('\n').map(line => JSON.parse(line))
        expect(events.filter(event => event.event === 'cleanup_deferred')).toEqual([
          expect.objectContaining({ scenario: 1, traders: [2] }),
        ])
        expect(events).toContainEqual(expect.objectContaining({ trader: 2, event: 'cleanup_done', leftover: ['0.806183 USDC'] }))
      }
      expect(checkpoint.results.find(result => result.row === (mode === 'single' ? 2 : 1))?.status).toBe(mode === 'interrupt' ? 'filled' : 'failed')
      const meta = JSON.parse(readFileSync(join(directory, 'meta.json'), 'utf8'))
      expect(meta.resumes).toHaveLength(1)
      expect(meta.start).toBe(new Date(5000).toISOString())
      return
    }
    const output = logs.mock.calls.map(call => call.join(' ')).join('\n').replace(/\x1b\[[0-9;]*m/g, '')
    expect(output).toContain('[burst] #1 t1 sell 0.001 SOL')
    expect(output).toContain('[burst]   #1 t1 main: timeout')
    expect(output).toContain('[burst] #1 t1: main timeout')
    expect(tables).toHaveBeenCalledWith([
      { Scenario: 'burst.csv', Trades: 4, Completed: 3, Failed: 1, Completion: '75.0%' },
      { Scenario: 'cow.csv', Trades: 3, Completed: 3, Failed: 0, Completion: '100.0%' },
    ])
    expect(output).toContain('[cow]   #5 t4 main: fulfilled')
    expect(output).not.toContain('Trade 5 completed')
    expect(output).toContain('Trade logs:')
    expect(output).toContain('sim/journal.jsonl')
    const cowStart = cleanup ? 87 : 84
    expect(starts).toEqual([[1, 5], [2, 5], [4, 7], [3, 15], [5, cowStart], [6, cowStart + 5], [7, cowStart + 5]])
    expect(fund).toHaveBeenCalledTimes(2)
    expect(fund.mock.calls.map(call => call[2].reduce((sum, line) => sum + line.topUp, 0n))).toEqual([140_000_000n, 140_000_000n])
    expect(lifecycle).toEqual(cleanup ? [
      ['fund', [1, 2], 0], ['cleanup', [1], 22], ['cleanup', [2], 22],
      ['fund', [3, 4], 85], ['cleanup', [3], 93], ['cleanup', [4], 93],
    ] : [['fund', [1, 2], 0], ['fund', [3, 4], 82]])
    const meta = JSON.parse(readFileSync(join(directory, 'meta.json'), 'utf8'))
    expect(meta.composite.scenarios).toMatchObject([
      { name: 'burst', offset: 0, start: '1970-01-01T00:00:05.000Z', end: '1970-01-01T00:00:22.000Z' },
      { name: 'cow', offset: cowStart - 5, start: new Date(cowStart * 1000).toISOString(), end: new Date((cowStart + 6) * 1000).toISOString() },
    ])
    expect(meta.composite.scenarios[1].sourceRows[0]).toEqual({ row: 5, sourceRow: 1, sourceTrader: 2 })
    expect(readScenario(join(directory, 'sim', 'scenario.csv')).map(row => row.time)).toEqual([0, 0, 2, 2, cowStart - 5, cowStart, cowStart])
    expect(readFileSync(join(directory, 'sim', 'composite.json'), 'utf8')).toBe(readFileSync(sample, 'utf8'))
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
