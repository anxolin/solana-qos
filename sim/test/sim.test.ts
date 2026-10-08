import { describe, expect, it } from 'vitest'
import { Keypair, PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { RateLimiter } from '../src/limiter.js'
import { Rpc } from '../src/rpc.js'
import { runRow, type FlowContext } from '../src/flow.js'
import { deriveKeypair } from '../src/wallets.js'
import { parseScenario } from '../src/scenario.js'
import { fromRaw, loadUniverse, toRaw } from '../src/tokens.js'
import { generate, MIN_GAP_S, mulberry32, roundAmount } from '../src/generator.js'
import { TRADER_RESERVE_SOL } from '../src/config.js'
import { creationBudget } from '../src/budget.js'
import { APP_DATA_DOC, APP_DATA_HEX } from '../src/appData.js'
import { barnStatus, buildRows, describeExtension, supported } from '../src/universe.js'

const TEST_MNEMONIC = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about'

describe('wallet derivation', () => {
  // Reference addresses from `solana-keygen pubkey "prompt://?key=<i>/0"` with the same mnemonic.
  it.each([
    [0, 'HAgk14JpMQLgt6rVgv7cBQFJWFto5Dqxi472uT3DKpqk'],
    [1, 'Hh8QwFUA6MtVu1qAoq12ucvFHNwCcVTV7hpWjeY1Hztb'],
    [2, '7WktogJEd2wQ9eH2oWusmcoFTgeYi6rS632UviTBJ2jm'],
  ])('index %i matches solana-keygen', (i, address) => {
    expect(deriveKeypair(TEST_MNEMONIC, i).publicKey.toBase58()).toBe(address)
  })

  it('rejects an invalid mnemonic', () => {
    expect(() => deriveKeypair('not a mnemonic', 0)).toThrow(/valid BIP-39/)
  })
})

describe('scenario CSV', () => {
  it('parses, defaults mode to sponsored, and sorts by time', () => {
    const rows = parseScenario(
      'trader,time,type,amount,token,other_token,mode,note\n2,30,buy,100,JUP,USDC,,rotator\n1,0,sell,0.02,SOL,USDC,self,\n',
    )
    expect(rows.map((r) => [r.trader, r.time, r.mode])).toEqual([
      [1, 0, 'self'],
      [2, 30, 'sponsored'],
    ])
  })

  it.each([
    ['0,0,sell,1,SOL,USDC', /trader/],
    ['1,-1,sell,1,SOL,USDC', /time/],
    ['1,0,swap,1,SOL,USDC', /type/],
    ['1,0,sell,0,SOL,USDC', /amount/],
    ['1,0,sell,1,SOL,sol', /differ/],
    ['1,0,sell,1,SOL,USDC,gasless', /mode/],
  ])('rejects %s', (line, err) => {
    expect(() => parseScenario(`trader,time,type,amount,token,other_token,mode\n${line}\n`)).toThrow(err)
  })

  it('skips # comments', () => {
    expect(parseScenario('# generated\ntrader,time,type,amount,token,other_token\n1,0,sell,1,SOL,USDC\n')).toHaveLength(1)
  })
})

describe('amounts', () => {
  it('converts human amounts to raw without float drift', () => {
    expect(toRaw(0.1, 9)).toBe(100_000_000n)
    expect(toRaw(1.23456789, 6)).toBe(1_234_568n)
    expect(fromRaw(1_500_000n, 6)).toBe(1.5)
  })
  it('rounds to three significant digits', () => {
    expect(roundAmount(12345.6)).toBe(12300)
    expect(roundAmount(0.0123456)).toBeCloseTo(0.0123, 10)
  })
})

describe('creation budget', () => {
  const rows = parseScenario('trader,time,type,amount,token,other_token,mode\n1,0,sell,0.01,SOL,USDC,sponsored\n1,60,sell,1,USDC,SOL,self\n')

  it('includes setup rows, possible acquisitions and one cleanup per trader/token', () => {
    expect(creationBudget(rows)).toMatchObject({ main: 2, acquisitions: 1, cleanup: 1, creations: 4, total: 12_000_000n, sponsoredCost: 3_000_000n, selfCost: 9_000_000n })
    expect(creationBudget(rows).selfCosts.get(1)).toBe(9_000_000n)
  })

  it('includes retries and honors disabled cleanup', () => {
    expect(creationBudget(rows, 1, false)).toMatchObject({ main: 4, acquisitions: 2, cleanup: 0, total: 18_000_000n })
    expect(() => creationBudget(rows, -1)).toThrow(/non-negative/)
  })

  it('recognizes SOL/wSOL addresses and keeps separate trader cleanup costs', () => {
    const aliases = parseScenario('trader,time,type,amount,token,other_token\n1,0,sell,0.01,So11111111111111111111111111111111111111112,USDC\n2,0,buy,0.01,SOL,USDC\n')
    expect(creationBudget(aliases)).toMatchObject({ main: 2, acquisitions: 1, cleanup: 2, creations: 5 })
    expect(creationBudget(aliases).selfCosts.size).toBe(2)
  })
})

describe('generator', () => {
  const universe = loadUniverse()
  const priceSol = Object.fromEntries(
    universe.map((t) => [t.symbol, { SOL: 1, USDC: 0.0085, USDT: 0.0085, JitoSOL: 1.3, mSOL: 1.4, BONK: 3e-8 }[t.symbol] ?? 0.004]),
  )
  const opts = { traders: 25, durationMin: 10, solPerTrader: 0.1, seed: 7, mix: 'mixed', selfRatio: 0.2, universe, priceSol }

  it('is deterministic for a seed', () => {
    expect(generate(opts)).toEqual(generate(opts))
    expect(generate({ ...opts, seed: 8 })).not.toEqual(generate(opts))
    expect(mulberry32(1)()).toBe(mulberry32(1)())
  })

  it('keeps the budget at higher intensity and produces more trades', () => {
    const hot = generate({ ...opts, intensity: 3, minGap: 20 })
    for (const p of hot) expect(p.spendSol).toBeLessThanOrEqual(opts.solPerTrader - TRADER_RESERVE_SOL + 1e-9)
    expect(hot.flatMap((p) => p.rows).length).toBeGreaterThan(generate(opts).flatMap((p) => p.rows).length)
  })

  it('keeps every trader within budget', () => {
    for (const p of generate(opts)) expect(p.spendSol).toBeLessThanOrEqual(opts.solPerTrader - TRADER_RESERVE_SOL + 1e-9)
  })

  it('honours --min-gap, including back to back', () => {
    for (const p of generate({ ...opts, minGap: 0 })) for (const r of p.rows) expect(r.time).toBeLessThanOrEqual(opts.durationMin * 60)
  })

  it('spaces each trader’s flows and starts them within the duration', () => {
    for (const p of generate(opts)) {
      p.rows.forEach((r, i) => {
        expect(r.time).toBeLessThanOrEqual(opts.durationMin * 60)
        if (i) expect(r.time - p.rows[i - 1].time).toBeGreaterThanOrEqual(MIN_GAP_S)
      })
    }
  })

  it('pays native SOL buys at least the rent-exempt minimum (~0.00089 SOL)', () => {
    const rows = generate(opts).flatMap((p) => p.rows).filter((r) => r.type === 'sell' && r.otherToken === 'SOL')
    for (const r of rows) expect(r.amount * priceSol[r.token]).toBeGreaterThanOrEqual(0.001)
  })

  it('only sells tokens other than SOL that the trader acquired earlier', () => {
    for (const p of generate(opts)) {
      const got = new Set<string>()
      for (const r of p.rows) {
        if (r.type === 'sell' && r.token !== 'SOL') expect(got.has(r.token)).toBe(true)
        got.add(r.type === 'sell' ? r.otherToken : r.token)
      }
    }
  })
})

describe('app data', () => {
  it('hashes the solana-qos pre-image to the registered appData', () => {
    expect(APP_DATA_DOC).toBe('{"appCode":"solana-qos","metadata":{"hooks":{"version":"0.2.0"}},"version":"1.15.0"}')
    expect(APP_DATA_HEX).toBe('0x3c74bf5b542341051f22f7a76d928086964a346f3fb5dc08eaf1e8348cbfbad2')
  })
})

describe('retry', () => {
  it('waits out dropped connections and shows their cause', async () => {
    const { retry, errorDetail } = await import('../src/limiter.js')
    const netErr = Object.assign(new TypeError('fetch failed'), { cause: { code: 'ECONNRESET' } })
    expect(errorDetail(netErr)).toBe('fetch failed (ECONNRESET)')
    let calls = 0
    const ok = await retry(async () => {
      if (++calls < 3) throw netErr
      return 'done'
    }, 4, 1)
    expect([ok, calls]).toEqual(['done', 3])
  }, 30_000)

  it('gives up quickly on errors that are not rate limits or network failures', async () => {
    const { retry } = await import('../src/limiter.js')
    let calls = 0
    await expect(retry(async () => { calls++; throw new Error('Bad Request') }, 2, 1)).rejects.toThrow('Bad Request')
    expect(calls).toBe(2)
  })
})

describe('cleanup dust burning', () => {
  it('treats only "cannot be sold" answers as burnable, never transient failures', async () => {
    const { NO_ROUTE } = await import('../src/cleanup.js')
    for (const sellable of ['NoLiquidity: no route found', 'Not Found', 'UnsupportedToken: Token-2022 transfer hook extension'])
      expect(NO_ROUTE.test(sellable)).toBe(true)
    for (const transient of ['429 Too Many Requests', 'fetch failed (ECONNRESET)', 'Bad Request', 'Internal Server Error'])
      expect(NO_ROUTE.test(transient)).toBe(false)
  })
})

describe('token list classification', () => {
  it('applies the backend Token-2022 rules', async () => {
    const { backendVerdict } = await import('../src/tokenlist.js')
    expect(backendVerdict([{ extension: 'metadataPointer' }, { extension: 'tokenMetadata' }])).toBeNull()
    expect(backendVerdict([{ extension: 'permanentDelegate' }, { extension: 'mintCloseAuthority' }])).toBeNull()
    expect(backendVerdict([{ extension: 'transferFeeConfig' }])).toMatch(/transfer fee/)
    expect(backendVerdict([{ extension: 'transferHook' }])).toMatch(/transfer hook/)
    expect(backendVerdict([{ extension: 'pausableConfig' }])).toMatch(/pausable/)
    expect(backendVerdict([{ extension: 'defaultAccountState', state: { accountState: 'frozen' } }])).toMatch(/frozen/)
    expect(backendVerdict([{ extension: 'defaultAccountState', state: { accountState: 'initialized' } }])).toBeNull()
  })
})

describe('token universe', () => {
  const mint = (n: number) => `Mint${n}`.padEnd(32, '1')
  const facts = { program: 'classic' as const, decimals: 6, extensions: [] }
  const ok = (amount: bigint) => ({ ok: true as const, amount })

  it('describes the extensions that decide support', () => {
    expect(describeExtension({ extension: 'transferFeeConfig', state: { newerTransferFee: { transferFeeBasisPoints: 300 } } })).toBe('transferFeeConfig(300bps)')
    expect(describeExtension({ extension: 'transferHook', state: { programId: null } })).toBe('transferHook(none)')
    expect(describeExtension({ extension: 'defaultAccountState', state: { accountState: 'frozen' } })).toBe('defaultAccountState(frozen)')
  })

  it('classifies barn answers', () => {
    expect(barnStatus(mint(1), undefined, undefined).barn).toBe('not-a-mint')
    expect(barnStatus(mint(1), facts, { sell: { ok: false, error: 'UnsupportedToken', reason: 'transfer fee' } })).toEqual({ barn: 'unsupported', reason: 'transfer fee' })
    expect(barnStatus(mint(1), facts, { sell: { ok: false, error: 'NoLiquidity' } }).barn).toBe('no-route')
    expect(barnStatus(mint(1), facts, { sell: ok(10n), buy: { ok: false, error: 'NoLiquidity' } }).barn).toBe('sell-only')
    expect(barnStatus(mint(1), facts, { sell: ok(10n), buy: ok(5n) }).barn).toBe('tradable')
  })

  it('ranks by volume with running shares, and needs a CoinGecko price to count as supported', () => {
    const rows = buildRows({
      volume: [
        { mint: mint(1), symbol: 'A', volume90d: 100, volume30d: 30, txs90d: 1, traders90d: 1 },
        { mint: mint(2), symbol: 'B', volume90d: 300, volume30d: 90, txs90d: 1, traders90d: 1 },
      ],
      jupiter: new Map([[mint(2), { id: mint(2), name: 'Bee', symbol: 'B', decimals: 6, isVerified: true, organicScoreLabel: 'medium' }]]),
      coingecko: new Set([mint(2)]),
      facts: new Map([[mint(1), facts], [mint(2), facts]]),
      quotes: new Map([[mint(1), { sell: ok(10n), buy: ok(5n) }], [mint(2), { sell: ok(10n), buy: ok(5n) }]]),
      lists: new Map([[mint(2), ['SolanaDefault']]]),
      checked: new Set([mint(1), mint(2)]),
    })
    expect(rows.map((r) => [r.symbol, r.rank, r.cumShare])).toEqual([['B', 1, 0.75], ['A', 2, 1]])
    expect(rows[0]).toMatchObject({ proposed: true, jupiter: 'verified', lists: ['SolanaDefault'] })
    expect(rows.map(supported)).toEqual([true, false])
    expect(supported({ ...rows[0], barn: 'sell-only' })).toBe(true)
    expect(supported({ ...rows[0], barn: 'no-route' })).toBe(false)
  })
})

describe('RPC rate limits', () => {
  const owner = Keypair.generate().publicKey
  const mint = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')
  const rpcWith = (connection: object) => {
    const rpc = new Rpc('http://localhost:8899', 1000)
    Object.assign(rpc.connection, connection)
    return rpc
  }

  it('pauses every caller after a pause', async () => {
    const limiter = new RateLimiter(1000)
    limiter.pause(300)
    const t = Date.now()
    await limiter.take()
    expect(Date.now() - t).toBeGreaterThanOrEqual(250)
  })

  it('reads a missing token account as a zero balance', async () => {
    const missing = Object.assign(new Error('failed to get token account balance: Invalid param: could not find account'), { code: -32602 })
    const rpc = rpcWith({ getTokenAccountBalance: () => Promise.reject(missing) })
    expect(await rpc.tokenBalance(owner, mint)).toBe(0n)
  })

  it('retries a 429 on a token balance instead of reading it as zero', async () => {
    let calls = 0
    const rpc = rpcWith({
      getTokenAccountBalance: () =>
        ++calls === 1 ? Promise.reject(new Error('429 Too Many Requests')) : Promise.resolve({ value: { amount: '42' } }),
    })
    expect(await rpc.tokenBalance(owner, mint)).toBe(42n)
    expect(calls).toBe(2)
  }, 10_000)

  it('fails only the row when an RPC call keeps failing', async () => {
    const logged: { event: string; reason?: string }[] = []
    const ctx = {
      rpc: { lamports: () => Promise.reject(new Error('failed to get balance: 429 Too Many Requests')),
             mintInfo: () => Promise.resolve({ decimals: 6, programId: TOKEN_PROGRAM_ID }) },
      session: { log: (e: { event: string; reason?: string }) => logged.push(e) },
      log: () => {},
    } as unknown as FlowContext
    const row = { row: 7, trader: 3, time: 0, type: 'sell' as const, amount: 0.01, token: 'SOL', otherToken: 'USDC', mode: 'sponsored' as const, note: '' }
    const res = await runRow(ctx, Keypair.generate(), row)
    expect(res).toMatchObject({ row: 7, trader: 3, status: 'failed', orders: 0 })
    expect(res.reason).toMatch(/^error: .*429/)
    expect(logged.at(-1)).toMatchObject({ event: 'row_failed' })
  })
})
