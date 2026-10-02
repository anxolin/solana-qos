import { TRADER_RESERVE_SOL } from './config.js'
import type { Mode, TradeRow } from './scenario.js'
import type { Tier, UniverseToken } from './tokens.js'

export type Persona = 'swapper' | 'degen' | 'rotator' | 'buyer'

export const MIXES: Record<string, Partial<Record<Persona, number>>> = {
  mixed: { swapper: 0.35, degen: 0.3, rotator: 0.25, buyer: 0.1 },
  stables: { swapper: 1 },
  memes: { degen: 0.8, buyer: 0.2 },
  rotation: { rotator: 0.7, buyer: 0.3 },
}

/** Trades per trader per 10 minutes, before jitter. */
const ACTIVITY: Record<Persona, number> = { swapper: 3, degen: 4, rotator: 4, buyer: 3 }

/** Default seconds between a trader's flows. The runner already waits for the previous flow, so this only paces. */
export const MIN_GAP_S = 75
/** Smallest trade the generator emits, in SOL value. */
const MIN_TRADE_SOL = 0.003
/** Extra SOL value assumed lost to slippage when acquiring a token. */
const ACQUIRE_OVERHEAD = 1.03

export interface GenerateOptions {
  traders: number
  durationMin: number
  solPerTrader: number
  seed: number
  mix: string
  /** Share of rows placed self-paid instead of sponsored. */
  selfRatio: number
  universe: UniverseToken[]
  /** Price of each token in SOL, by symbol. */
  priceSol: Record<string, number>
  /** Minimum seconds between one trader's flows (default MIN_GAP_S). */
  minGap?: number
  /** Multiplies how often each persona trades; trade sizes shrink by the same factor so the budget still holds. */
  intensity?: number
}

/** Deterministic PRNG so a seed always produces the same file. */
export function mulberry32(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Three significant digits, as a human would type an amount. */
export function roundAmount(x: number): number {
  return x > 0 ? Number(x.toPrecision(3)) : 0
}

export interface TraderPlan {
  trader: number
  persona: Persona
  /** SOL value the plan expects to spend (wrapping + acquisitions), excluding the reserve. */
  spendSol: number
  rows: Omit<TradeRow, 'row'>[]
}

export function generate(o: GenerateOptions): TraderPlan[] {
  const rng = mulberry32(o.seed)
  const pick = <T>(xs: T[]) => xs[Math.floor(rng() * xs.length)]
  const range = (a: number, b: number) => a + (b - a) * rng()
  const weights = MIXES[o.mix] ?? MIXES.mixed
  const persona = (): Persona => {
    let r = rng()
    for (const [p, w] of Object.entries(weights) as [Persona, number][]) if ((r -= w) <= 0) return p
    return 'swapper'
  }
  const of = (...tiers: Tier[]) => o.universe.filter((t) => tiers.includes(t.tier) && o.priceSol[t.symbol] > 0)
  const stables = of('stable')
  const memes = of('meme')
  const majors = of('major', 'lst')
  const tradables = of('stable', 'major', 'lst', 'meme')
  const durationS = o.durationMin * 60
  const minGap = o.minGap ?? MIN_GAP_S
  const intensity = o.intensity ?? 1

  return Array.from({ length: o.traders }, (_, i): TraderPlan => {
    const trader = i + 1
    const who = persona()
    let spendable = o.solPerTrader - TRADER_RESERVE_SOL
    const holdings = new Map<string, number>() // symbol -> token units
    const rows: Omit<TradeRow, 'row'>[] = []
    let spent = 0

    const n = Math.max(1, Math.round(ACTIVITY[who] * intensity * (o.durationMin / 10) * range(0.6, 1.4)))
    const meanGap = durationS / n
    let t = Math.round(range(0, Math.min(60, durationS * 0.2)))

    const mode = (): Mode => (rng() < o.selfRatio ? 'self' : 'sponsored')
    /** Selling to SOL pays out native SOL (sponsored or self-paid). */
    const solOut = (_m: Mode) => 'SOL'
    const held = (tiers: UniverseToken[]) => tiers.filter((x) => (holdings.get(x.symbol) ?? 0) * o.priceSol[x.symbol] >= MIN_TRADE_SOL)
    const valueSol = (sym: string, units: number) => units * o.priceSol[sym]

    /** Spend SOL value on `sym`, either directly (SOL sell) or via an acquisition. Returns false if over budget. */
    const spend = (solValue: number) => {
      if (solValue > spendable || solValue < MIN_TRADE_SOL) return false
      spendable -= solValue
      spent += solValue
      return true
    }
    const receive = (sym: string, solValue: number) => {
      if (sym === 'SOL' || sym === 'wSOL') return // proceeds in wSOL are not re-planned as spendable
      holdings.set(sym, (holdings.get(sym) ?? 0) + (solValue * 0.99) / o.priceSol[sym])
    }
    /** Sell `units` of a held token (no SOL spent beyond what's already held). */
    const sellHeld = (sym: string, units: number) => holdings.set(sym, Math.max(0, (holdings.get(sym) ?? 0) - units))

    for (let k = 0; k < n && t <= durationS; k++) {
      const m = mode()
      // Shrink with intensity, but never below the smallest trade worth placing (raise it while the budget allows).
      const budgetSlice = (a: number, b: number) =>
        Math.min(spendable, Math.max(MIN_TRADE_SOL * 1.2, ((o.solPerTrader - TRADER_RESERVE_SOL) * range(a, b)) / Math.max(1, intensity)))
      let row: Omit<TradeRow, 'row'> | null = null

      const sellHeldTo = (from: UniverseToken[], to: () => string) => {
        const x = pick(from)
        const units = roundAmount((holdings.get(x.symbol) ?? 0) * range(0.5, 1))
        if (valueSol(x.symbol, units) < MIN_TRADE_SOL) return null
        let dest = to()
        if (dest === x.symbol) dest = x.symbol === 'USDC' ? 'USDT' : 'USDC'
        sellHeld(x.symbol, units)
        receive(dest, valueSol(x.symbol, units))
        return { trader, time: t, type: 'sell' as const, amount: units, token: x.symbol, otherToken: dest, mode: m, note: who }
      }

      if (who === 'swapper') {
        const hs = held(stables)
        if (hs.length && rng() < 0.5) row = sellHeldTo(hs, () => solOut(m))
        else {
          const v = budgetSlice(0.1, 0.25)
          const amt = roundAmount(v)
          if (spend(amt)) {
            const s = pick(stables).symbol
            receive(s, amt)
            row = { trader, time: t, type: 'sell', amount: amt, token: 'SOL', otherToken: s, mode: m, note: who }
          }
        }
      } else if (who === 'degen') {
        const hm = held(memes)
        if (hm.length && rng() < 0.5) row = sellHeldTo(hm, () => (rng() < 0.5 ? solOut(m) : 'USDC'))
        else {
          const x = pick(memes)
          const v = budgetSlice(0.05, 0.15)
          const units = roundAmount(v / o.priceSol[x.symbol])
          if (spend(valueSol(x.symbol, units) * ACQUIRE_OVERHEAD)) {
            receive(x.symbol, valueSol(x.symbol, units))
            row = { trader, time: t, type: 'buy', amount: units, token: x.symbol, otherToken: 'SOL', mode: m, note: who }
          }
        }
      } else if (who === 'rotator') {
        const ht = held(tradables)
        if (ht.length && rng() < 0.6) {
          row = sellHeldTo(ht, () => pick(tradables.filter((x) => !ht.includes(x)).concat(stables)).symbol)
        } else {
          // Buy a major paying USDC: the runner acquires the USDC first, which costs SOL.
          const x = pick(majors)
          const v = budgetSlice(0.08, 0.2)
          const units = roundAmount(v / o.priceSol[x.symbol])
          const usdcHeld = holdings.get('USDC') ?? 0
          const usdcNeeded = valueSol(x.symbol, units) / o.priceSol.USDC
          const extra = Math.max(0, usdcNeeded - usdcHeld) * o.priceSol.USDC * ACQUIRE_OVERHEAD
          if (extra === 0 || spend(extra)) {
            sellHeld('USDC', Math.min(usdcHeld, usdcNeeded))
            receive(x.symbol, valueSol(x.symbol, units))
            row = { trader, time: t, type: 'buy', amount: units, token: x.symbol, otherToken: 'USDC', mode: m, note: who }
          }
        }
      } else {
        const x = pick(majors.concat(memes))
        const v = budgetSlice(0.05, 0.15)
        const units = roundAmount(v / o.priceSol[x.symbol])
        if (spend(valueSol(x.symbol, units) * ACQUIRE_OVERHEAD)) {
          receive(x.symbol, valueSol(x.symbol, units))
          row = { trader, time: t, type: 'buy', amount: units, token: x.symbol, otherToken: 'SOL', mode: m, note: who }
        }
      }
      if (!row && rows.length === 0) {
        // Small budgets can make every persona move too small; fall back to a plain SOL → stable swap.
        const amt = roundAmount(Math.min(spendable, (o.solPerTrader - TRADER_RESERVE_SOL) * 0.3))
        if (spend(amt)) {
          const s = pick(stables).symbol
          receive(s, amt)
          row = { trader, time: t, type: 'sell', amount: amt, token: 'SOL', otherToken: s, mode: m, note: `${who}-fallback` }
        }
      }
      if (row) rows.push(row)
      // Exponential inter-arrival, never closer than minGap.
      t += Math.max(minGap, Math.round(-Math.log(1 - rng()) * meanGap))
    }
    return { trader, persona: who, spendSol: spent, rows }
  })
}
