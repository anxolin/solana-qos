import { afterEach, expect, it, vi } from 'vitest'
import { Command } from 'commander'
import { existsSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { PublicKey, SystemInstruction, SystemProgram } from '@solana/web3.js'
import { ASSOCIATED_TOKEN_PROGRAM_ID, TOKEN_PROGRAM_ID, createAssociatedTokenAccountIdempotentInstruction, decodeCloseAccountInstruction, getAssociatedTokenAddressSync } from '@solana/spl-token'
import type { FlowContext } from '../src/flow.js'
import type { TradeRow } from '../src/scenario.js'
import type { SavedRun } from '../src/resume.js'

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  vi.doUnmock('../src/config.js')
  vi.doUnmock('../src/flow.js')
  vi.doUnmock('../src/rpc.js')
  vi.doUnmock('../src/orders.js')
  vi.doUnmock('../src/cleanup.js')
})

it.each(['single', 'composite', 'resume', 'limited-funder', 'setup-resume', 'fresh-occupied', 'fresh-occupied-resume', 'fresh-late-occupied', 'single-fresh-occupied', 'fresh-occupied-dry-run'])('prepares accounts once and recovers their rent at the end: %s', async mode => {
  vi.resetModules()
  const root = mkdtempSync(join(tmpdir(), 'account-run-'))
  const mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about'
  const usdc = 'EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'
  writeFileSync(join(root, 'tokens.json'), JSON.stringify({ [usdc]: 'USDC' }))
  const header = 'trader,time,type,amount,token,other_token,mode,note\n'
  const ordinaryTraders = mode === 'limited-funder' || mode === 'setup-resume' ? 8 : 1
  writeFileSync(join(root, 'ordinary.csv'), header + Array.from({ length: ordinaryTraders }, (_, i) => `${i + 1},0,sell,0.001,SOL,USDC,sponsored,ordinary\n`).join('') + '1,1,sell,0.001,SOL,USDC,sponsored,repeat\n')
  writeFileSync(join(root, 'fresh.csv'), header + '1,0,sell,0.1,SOL,USDC,sponsored,fresh\n')
  writeFileSync(join(root, 'composite.json'), JSON.stringify({ name: 'account lifecycle', solver: 'test', breakSeconds: 0,
    scenarios: ['ordinary.csv', { path: 'fresh.csv', options: { freshAccounts: true, solFundingPerTrader: 0.15, slippageBps: 500 } }] }))
  const balances = new Map<string, bigint>()
  const accounts = new Map<string, { owner: PublicKey; mint: PublicKey }>()
  const events: { event: string; address?: string; row?: number }[] = []
  let transactions = 0
  const singleFresh = mode === 'single-fresh-occupied'
  const dryRun = mode === 'fresh-occupied-dry-run'
  const occupiedFresh = mode.includes('occupied')
  const freshTrader = singleFresh ? 3 : occupiedFresh ? 4 : 2
  const occupiedTraders = singleFresh ? [1, 2] : [2, 3]
  const resumeCleanup = mode === 'resume' || mode === 'fresh-occupied-resume'
  let failFinalClose = resumeCleanup
  let failSecondSetup = mode === 'setup-resume'
  vi.stubGlobal('fetch', vi.fn(() => { throw new Error('No network allowed') }))
  vi.doMock('../src/config.js', async original => ({ ...await original<typeof import('../src/config.js')>(),
    QOS_ROOT: root, SIM_ROOT: root, logsConfigured: () => false,
    loadEnv: () => ({ mnemonic, rpcUrl: 'https://rpc.invalid', apiBase: 'https://api.invalid', urls: { label: 'offline', api: 'https://api.invalid', debug: '', solscan: '', sponsor: '11111111111111111111111111111111', logs: null } }),
  }))
  // The run registers its app-data pre-image with the orderbook before placing orders; this test allows no network.
  vi.doMock('../src/appData.js', async original => ({
    ...await original<typeof import('../src/appData.js')>(),
    registerAppData: async () => 'present' as const,
  }))
  const rpcModule = await import('../src/rpc.js')
  const ordersModule = await import('../src/orders.js')
  const { Rpc } = rpcModule
  const { Orders } = ordersModule
  const { wallets } = await import('../src/wallets.js')
  const w = wallets(mnemonic)
  const seedOccupiedAccounts = () => {
    for (const trader of occupiedTraders) {
      const owner = w.trader(trader).publicKey
      accounts.set(getAssociatedTokenAddressSync(new PublicKey(usdc), owner).toBase58(), { owner, mint: new PublicKey(usdc) })
    }
  }
  if (occupiedFresh && mode !== 'fresh-late-occupied') seedOccupiedAccounts()
  const initialFunder = mode === 'limited-funder' ? 60_000_000n : 3_000_000_000n
  balances.set(w.funder.publicKey.toBase58(), initialFunder)
  const setBalance = (address: PublicKey, delta: bigint) => balances.set(address.toBase58(), (balances.get(address.toBase58()) ?? 0n) + delta)
  vi.spyOn(Rpc.prototype, 'mintInfo').mockResolvedValue({ decimals: 6, programId: TOKEN_PROGRAM_ID })
  vi.spyOn(Rpc.prototype, 'call').mockImplementation(async fn => fn({
    getMultipleAccountsInfo: async (addresses: PublicKey[]) => addresses.map(a => accounts.has(a.toBase58()) ? { owner: TOKEN_PROGRAM_ID } : null),
    getMinimumBalanceForRentExemption: async (size: number) => size === 0 ? 650_240 : 2_039_280,
  } as never))
  vi.spyOn(Rpc.prototype, 'lamports').mockImplementation(async owner => owner.toBase58() === '11111111111111111111111111111111' ? 10_000_000_000n : balances.get(owner.toBase58()) ?? 0n)
  vi.spyOn(Rpc.prototype, 'tokenAccounts').mockImplementation(async owner => [...accounts].filter(([, a]) => a.owner.equals(owner)).map(([address, a]) => ({
    address: new PublicKey(address), mint: a.mint, programId: TOKEN_PROGRAM_ID, amount: 0n, decimals: 6, lamports: 2_039_280,
  })))
  vi.spyOn(Orders.prototype, 'ownerOrders').mockResolvedValue([])
  vi.spyOn(Orders.prototype, 'getOrder').mockResolvedValue(null)
  const quotes = vi.spyOn(Orders.prototype, 'quote').mockResolvedValue({ solanaQuote: { intent: { sellAmount: 1_000_000n, buyAmount: 1_000_000n } } } as never)
  vi.spyOn(Rpc.prototype, 'sendAndConfirm').mockImplementation(async (ixs, signers) => {
    if (ixs.some(ix => ix.programId.equals(TOKEN_PROGRAM_ID)) && failFinalClose) throw new Error('Temporary closure failure')
    if (ixs.some(ix => ix.programId.equals(ASSOCIATED_TOKEN_PROGRAM_ID)) && accounts.size === 6 && failSecondSetup) throw new Error('Interrupted account setup')
    transactions++
    expect(balances.get(signers[0].publicKey.toBase58()) ?? 0n).toBeGreaterThanOrEqual(5000n)
    setBalance(signers[0].publicKey, -5000n)
    for (const ix of ixs) {
      if (ix.programId.equals(ASSOCIATED_TOKEN_PROGRAM_ID)) {
        const [payer, address, owner, mint] = ix.keys.map(k => k.pubkey)
        if (!accounts.has(address.toBase58())) {
          setBalance(payer, -2_039_280n)
          accounts.set(address.toBase58(), { owner, mint })
          events.push({ event: 'create', address: address.toBase58() })
        }
      } else if (ix.programId.equals(SystemProgram.programId)) {
        const transfer = SystemInstruction.decodeTransfer(ix)
        if ((balances.get(transfer.toPubkey.toBase58()) ?? 0n) === 0n && !transfer.toPubkey.equals(w.funder.publicKey)) {
          expect(transfer.lamports).toBeGreaterThanOrEqual(650_240n)
        }
        setBalance(transfer.fromPubkey, -transfer.lamports)
        setBalance(transfer.toPubkey, transfer.lamports)
      } else {
        const close = decodeCloseAccountInstruction(ix)
        accounts.delete(close.keys.account.pubkey.toBase58())
        setBalance(close.keys.destination.pubkey, 2_039_280n)
        events.push({ event: 'close', address: close.keys.account.pubkey.toBase58() })
      }
    }
    return `tx-${transactions}`
  })
  vi.doMock('../src/flow.js', async original => ({ ...await original<typeof import('../src/flow.js')>(),
    runRow: async (ctx: FlowContext, owner: ReturnType<typeof w.trader>, row: TradeRow) => {
      const mint = new PublicKey(usdc)
      const address = getAssociatedTokenAddressSync(mint, owner.publicKey)
      if (row.note === 'fresh') {
        expect(accounts.has(address.toBase58())).toBe(false)
        expect(ctx.slippageBps).toBe(500)
        expect(balances.get(owner.publicKey.toBase58())).toBe(150_000_000n)
        await ctx.rpc.sendAndConfirm([createAssociatedTokenAccountIdempotentInstruction(w.funder.publicKey, address, owner.publicKey, mint)], [w.funder])
      } else {
        expect(accounts.has(address.toBase58())).toBe(true)
        expect(ctx.slippageBps).toBeUndefined()
        if (mode === 'fresh-late-occupied') seedOccupiedAccounts()
      }
      events.push({ event: 'main', row: row.row })
      ctx.session.log({ step: 'main', event: 'row_done', row: row.row, trader: row.trader, orders: 0 })
      return { row: row.row, trader: row.trader, status: 'filled', orders: 0 }
    },
  }))
  vi.doMock('../src/cleanup.js', async original => {
    const cleanup = await original<typeof import('../src/cleanup.js')>()
    const cleanupTrader: typeof cleanup.cleanupTrader = (ctx, ...args) => {
      expect(ctx.slippageBps).toBe((!single || singleFresh) && args[1] === freshTrader ? 500 : undefined)
      return cleanup.cleanupTrader(ctx, ...args)
    }
    return { ...cleanup, cleanupTrader }
  })
  vi.spyOn(console, 'log').mockImplementation(() => {})
  vi.spyOn(console, 'table').mockImplementation(() => {})
  vi.spyOn(console, 'error').mockImplementation(() => {})
  vi.spyOn(process, 'exit').mockImplementation(() => undefined as never)
  const single = mode === 'single' || mode === 'limited-funder' || mode === 'setup-resume' || singleFresh
  const argv = vi.spyOn(process, 'argv', 'get').mockReturnValue([process.execPath, 'sim', single ? 'simulate-trade-session' : 'simulate-composite-scenario', join(root, singleFresh ? 'fresh.csv' : single ? 'ordinary.csv' : 'composite.json'), '--session', 'accounts', '--yes', '--prepare-token-accounts', ...(mode === 'limited-funder' ? ['--sol-funding-per-trader', '0.005'] : []), ...(singleFresh ? ['--fresh-accounts', '--sol-funding-per-trader', '0.15', '--slippage-bps', '500'] : []), ...(dryRun ? ['--dry-run'] : [])])
  let completion: Promise<Command> | undefined
  const parse = Command.prototype.parseAsync
  vi.spyOn(Command.prototype, 'parseAsync').mockImplementation(function (this: Command, ...args) {
    completion = parse.apply(this, args); completion.catch(() => {}); return completion
  })
  try {
    vi.useFakeTimers()
    vi.setSystemTime(0)
    await import('../src/cli/index.js')
    await vi.runAllTimersAsync()
    const checkpointPath = join(root, 'sessions', 'accounts', 'sim', 'run.json')
    if (dryRun) {
      await completion
      expect(quotes.mock.calls.map(([params]) => params.owner.publicKey.toBase58())).toEqual([1, 1, freshTrader].map(trader => w.trader(trader).publicKey.toBase58()))
      expect(transactions).toBe(0)
      expect(accounts.size).toBe(2)
      expect(existsSync(checkpointPath)).toBe(false)
      return
    }
    if (mode === 'setup-resume') {
      await expect(completion).rejects.toThrow('Interrupted account setup')
      const interrupted = JSON.parse(readFileSync(checkpointPath, 'utf8')) as SavedRun
      expect(interrupted.accountSetup?.prepared).toBe(false)
      expect(interrupted.accountSetup?.cleanupPending).toHaveLength(8)
      expect(accounts.size).toBe(6)
      expect(events.every(e => e.event === 'create')).toBe(true)
      failSecondSetup = false
      argv.mockReturnValue([process.execPath, 'sim', 'resume-session', 'accounts', '--yes'])
      vi.resetModules()
      vi.doMock('../src/rpc.js', () => rpcModule)
      vi.doMock('../src/orders.js', () => ordersModule)
      await import('../src/cli/index.js')
      await vi.runAllTimersAsync()
    }
    await completion
    const beforeResume = events.length
    if (resumeCleanup) {
      const interrupted = JSON.parse(readFileSync(checkpointPath, 'utf8')) as SavedRun
      expect(interrupted.finished).toBe(false)
      if (occupiedFresh) expect(interrupted.scenarios[1].rows[0].trader).toBe(freshTrader)
      expect(accounts.size).toBe(occupiedFresh ? 4 : 2)
      failFinalClose = false
      argv.mockReturnValue([process.execPath, 'sim', 'resume-session', 'accounts', '--yes'])
      vi.resetModules()
      vi.doMock('../src/rpc.js', () => rpcModule)
      vi.doMock('../src/orders.js', () => ordersModule)
      await import('../src/cli/index.js')
      await vi.runAllTimersAsync()
      await completion
      expect(events.slice(beforeResume).every(e => e.event !== 'create' && e.event !== 'main')).toBe(true)
    }
    const saved = JSON.parse(readFileSync(checkpointPath, 'utf8')) as SavedRun
    expect(saved.finished).toBe(true)
    expect(saved.accountSetup?.cleanupPending).toEqual([])
    expect(accounts.size).toBe(occupiedFresh ? 2 : 0)
    if (occupiedFresh) {
      expect(saved.scenarios[singleFresh ? 0 : 1].rows[0].trader).toBe(freshTrader)
      for (const trader of occupiedTraders) {
        expect(accounts.has(getAssociatedTokenAddressSync(new PublicKey(usdc), w.trader(trader).publicKey).toBase58())).toBe(true)
        expect(balances.get(w.trader(trader).publicKey.toBase58()) ?? 0n).toBe(0n)
      }
    }
    expect(events.filter(e => e.event === 'create')).toHaveLength(single ? ordinaryTraders : 2)
    const lastTrade = Math.max(...events.map((e, index) => e.event === 'main' ? index : -1))
    expect(events.findIndex(e => e.event === 'close')).toBeGreaterThan(lastTrade)
    expect(balances.get(w.funder.publicKey.toBase58())).toBe(initialFunder - BigInt(transactions) * 5000n)
  } finally { rmSync(root, { recursive: true, force: true }) }
}, 20_000)
