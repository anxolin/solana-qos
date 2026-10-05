import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { PublicKey } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { QOS_ROOT, SIM_ROOT } from './config.js'
import { NATIVE_SOL, WSOL_MINT, type Rpc } from './rpc.js'

export type Tier = 'native' | 'stable' | 'major' | 'lst' | 'meme'

export interface UniverseToken {
  symbol: string
  mint: string
  decimals: number
  tier: Tier
}

export interface Token {
  symbol: string
  mint: PublicKey
  decimals: number
  /** Native SOL (sold as wSOL, bought as lamports) or wSOL itself. */
  isSol: boolean
  isNative: boolean
  /** Classic SPL Token or Token-2022: token accounts, approvals and quotes use it. */
  programId: PublicKey
}

export function loadUniverse(path = resolve(SIM_ROOT, 'universe.json')): UniverseToken[] {
  if (!path.includes('/')) path = resolve(SIM_ROOT, path) // bare names resolve inside sim/
  return JSON.parse(readFileSync(path, 'utf8')).tokens
}

/** symbol (lowercased) -> mint, from the universe first, then solana-qos/tokens.json. */
function symbolIndex(): Map<string, string> {
  const idx = new Map<string, string>()
  try {
    const qos = JSON.parse(readFileSync(resolve(QOS_ROOT, 'tokens.json'), 'utf8')) as Record<string, string>
    for (const [mint, sym] of Object.entries(qos)) idx.set(sym.toLowerCase(), mint)
  } catch {
    /* tokens.json is optional */
  }
  for (const file of ['universe.json', 'universe-longtail.json', 'universe-token-2022-xstocks.json', 'universe-token-2022.json']) {
    try {
      for (const t of loadUniverse(resolve(SIM_ROOT, file))) idx.set(t.symbol.toLowerCase(), t.mint)
    } catch {
      /* optional universe */
    }
  }
  idx.set('sol', NATIVE_SOL.toBase58())
  idx.set('wsol', WSOL_MINT.toBase58())
  return idx
}

let index: Map<string, string> | undefined
const symbols = new Map<string, string>()

export function resolveMint(symbolOrAddress: string): PublicKey {
  index ??= symbolIndex()
  const mint = index.get(symbolOrAddress.toLowerCase())
  if (mint) {
    symbols.set(mint, symbolOrAddress)
    return new PublicKey(mint)
  }
  try {
    return new PublicKey(symbolOrAddress)
  } catch {
    throw new Error(`Unknown token "${symbolOrAddress}": use an address or a symbol from universe.json / tokens.json`)
  }
}

export async function resolveToken(rpc: Rpc, symbolOrAddress: string): Promise<Token> {
  const mint = resolveMint(symbolOrAddress)
  const isNative = mint.equals(NATIVE_SOL)
  const isSol = isNative || mint.equals(WSOL_MINT)
  const { decimals, programId } = isNative ? { decimals: 9, programId: TOKEN_PROGRAM_ID } : await rpc.mintInfo(mint)
  return { symbol: symbols.get(mint.toBase58()) ?? symbolOrAddress, mint, decimals, isSol, isNative, programId }
}

/** The SPL mint an order sells or quotes: native SOL becomes wSOL. */
export const splMint = (t: Token) => (t.isNative ? WSOL_MINT : t.mint)

export function toRaw(amount: number, decimals: number): bigint {
  const [whole, frac = ''] = amount.toFixed(decimals).split('.')
  return BigInt(whole + frac.padEnd(decimals, '0').slice(0, decimals))
}

export function fromRaw(raw: bigint, decimals: number): number {
  return Number(raw) / 10 ** decimals
}

/** USD prices from Jupiter's price API, keyed by mint. Native SOL is priced as wSOL. */
export async function usdPrices(mints: string[]): Promise<Map<string, number>> {
  const query = [...new Set(mints.map((m) => (m === NATIVE_SOL.toBase58() ? WSOL_MINT.toBase58() : m)))]
  const res = await fetch(`https://lite-api.jup.ag/price/v3?ids=${query.join(',')}`)
  if (!res.ok) throw new Error(`Jupiter price API: ${res.status}`)
  const body = (await res.json()) as Record<string, { usdPrice: number }>
  const out = new Map<string, number>()
  for (const m of mints) {
    const key = m === NATIVE_SOL.toBase58() ? WSOL_MINT.toBase58() : m
    if (body[key]) out.set(m, body[key].usdPrice)
  }
  return out
}
