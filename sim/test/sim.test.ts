import { describe, expect, it } from 'vitest'
import { deriveKeypair } from '../src/wallets.js'
import { parseScenario } from '../src/scenario.js'
import { fromRaw, loadUniverse, toRaw } from '../src/tokens.js'
import { generate, MIN_GAP_S, mulberry32, roundAmount } from '../src/generator.js'
import { TRADER_RESERVE_SOL } from '../src/config.js'
import { APP_DATA_DOC, APP_DATA_HEX } from '../src/appData.js'

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
