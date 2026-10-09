import { readFileSync } from 'node:fs'
import { PublicKey } from '@solana/web3.js'
import { TOKEN_2022_PROGRAM_ID } from '@solana/spl-token'
import { parse } from 'csv-parse/sync'
import { RateLimiter, retry } from './limiter.js'
import type { Rpc } from './rpc.js'
import { NATIVE_SOL, WSOL_MINT } from './rpc.js'
import { loadTokenList, SOLANA_CHAIN_ID } from './tokenlist.js'
import { mulberry32 } from './generator.js'

/**
 * The Solana token universe: every mint with real DEX volume, joined with what decides whether CoW can trade it
 * (Jupiter metadata, a CoinGecko price, the mint's program and extensions, live barn quotes) and with the app's lists.
 */

/** Dune query 8910905: net swap volume per mint over 90 days, each transaction counted once per mint. */
export const DEFAULT_DUNE_QUERY = 8910905
/** Swap volume per mint over 30 days split by who routed it (dex_solana.trades.trade_source), hops deduplicated. */
export const DEFAULT_ROUTED_QUERY = 8921585

/** Who routed a swap, as the routed-volume query splits it. */
export const ROUTES = ['jupiter', 'dflow', 'titan', 'direct', 'other_routed'] as const
export type Route = (typeof ROUTES)[number]
export type Routed = Record<Route, number>
export const ROUTE_LABEL: Record<Route, string> = {
  jupiter: 'Jupiter-routed',
  dflow: 'DFlow-routed',
  // T1TANpT…: Titan's vanity address and volume, but no public source names it yet.
  titan: 'Titan-routed (label unconfirmed)',
  direct: 'direct DEX',
  other_routed: 'other-router',
}

/** A request that hangs (e.g. a connection left dead by the laptop sleeping) fails after this and is retried. */
const HTTP_TIMEOUT_MS = 30_000

export interface VolumeRow {
  mint: string
  symbol: string
  volume90d: number
  volume30d: number
  txs90d: number
  traders90d: number
}

/** Volume per mint from a CSV export of the Dune query, or straight from the Dune API (`dune:<query id>`, needs DUNE_API_KEY). */
export async function loadVolume(source: string): Promise<VolumeRow[]> {
  const records = parse(await readCsvSource(source), { columns: true, skip_empty_lines: true, trim: true }) as Record<string, string>[]
  return records.map((r) => ({
    mint: r.mint,
    symbol: r.symbol ?? '',
    volume90d: Number(r.volume_90d),
    volume30d: Number(r.volume_30d),
    txs90d: Number(r.txs_90d),
    traders90d: Number(r.traders_90d),
  }))
}

/** Routed USD volume per mint and source over 30 days, from the routed-volume query's results or a CSV export of them. */
export async function loadRoutedVolume(source: string): Promise<Map<string, Routed>> {
  const records = parse(await readCsvSource(source), { columns: true, skip_empty_lines: true, trim: true }) as Record<string, string>[]
  // Dune writes an empty sum as `<nil>`: anything that isn't a number means no volume through that source.
  const usd = (v: string | undefined) => (Number.isFinite(Number(v)) && v !== '' ? Number(v) : 0)
  return new Map(records.map((r) => [r.mint, Object.fromEntries(ROUTES.map((k) => [k, usd(r[`${k}_volume_30d`])])) as Routed]))
}

const NO_ROUTES = Object.fromEntries(ROUTES.map((k) => [k, 0])) as Routed

/** The same rows with the routed volume set (zeros for mints absent from `volume`). */
export const withRoutedVolume = (rows: UniverseRow[], volume: Map<string, Routed>): UniverseRow[] =>
  rows.map((r) => ({ ...r, routed: volume.get(r.mint) ?? NO_ROUTES }))

/** A CSV file, or a saved Dune query's latest results (`dune:<query id>`, needs DUNE_API_KEY or DUNE_KEY). */
async function readCsvSource(source: string): Promise<string> {
  let text: string
  const dune = /^dune:(\d+)$/.exec(source)
  if (dune) {
    const key = (process.env.DUNE_API_KEY || process.env.DUNE_KEY)?.trim()
    if (!key) throw new Error('Set DUNE_API_KEY (or DUNE_KEY) to read the volume from Dune, or pass --volume <file.csv>')
    // The API serves at most 32k rows per page: follow x-dune-next-uri, keeping the CSV header of the first page only.
    const pages: string[] = []
    let next: string | null = `https://api.dune.com/api/v1/query/${dune[1]}/results/csv?limit=32000`
    while (next) {
      const url: string = next
      const res = await retry(async () => {
        const r = await fetch(url, { headers: { 'X-Dune-Api-Key': key }, signal: AbortSignal.timeout(120_000) })
        if (!r.ok) throw new Error(`Dune query ${dune[1]}: HTTP ${r.status} ${await r.text()}`)
        return r
      })
      const page = await res.text()
      pages.push(pages.length ? page.slice(page.indexOf('\n') + 1) : page)
      next = res.headers.get('x-dune-next-uri')
    }
    text = pages.map((p) => (p.endsWith('\n') ? p : `${p}\n`)).join('')
  } else {
    text = readFileSync(source, 'utf8')
  }
  return text
}

export interface JupiterToken {
  id: string
  name: string
  symbol: string
  decimals: number
  isVerified?: boolean
  organicScore?: number
  organicScoreLabel?: string
  liquidity?: number
  mcap?: number
  tags?: string[]
  stats24h?: { buyVolume?: number; sellVolume?: number }
}

/**
 * Whether Jupiter can buy exactly `amount` (raw) of `mint` with SOL: an ExactOut quote. A buy order on CoW needs the
 * same exact-out route, so this is the parity reference for buy tests. Answers `{ ok: false, reason }` on no route.
 */
export async function jupiterExactOut(mint: string, amount: bigint): Promise<{ ok: true } | { ok: false; reason: string }> {
  const url = `https://lite-api.jup.ag/swap/v1/quote?inputMint=${WSOL_MINT.toBase58()}&outputMint=${mint}&amount=${amount}&swapMode=ExactOut&slippageBps=100`
  const res = await retry(() => fetch(url, { signal: AbortSignal.timeout(HTTP_TIMEOUT_MS) }).then((r) => {
    if (r.status === 429 || r.status >= 500) throw new Error(`Jupiter quote: HTTP ${r.status}`)
    return r
  }))
  if (res.ok) return { ok: true }
  const body = (await res.json().catch(() => ({}))) as { errorCode?: string; error?: string }
  return { ok: false, reason: body.errorCode ?? body.error ?? `HTTP ${res.status}` }
}

/** Jupiter's token metadata for `mints`, 100 per search call. Mints Jupiter doesn't know are absent. */
export async function jupiterTokens(mints: string[], onProgress?: (done: number, total: number) => void): Promise<Map<string, JupiterToken>> {
  const out = new Map<string, JupiterToken>()
  const limiter = new RateLimiter(1)
  for (let i = 0; i < mints.length; i += 100) {
    const chunk = mints.slice(i, i + 100)
    const found = await retry(() =>
      limiter.run(async () => {
        const res = await fetch(`https://lite-api.jup.ag/tokens/v2/search?query=${chunk.join(',')}`, { signal: AbortSignal.timeout(HTTP_TIMEOUT_MS) })
        if (!res.ok) throw new Error(`Jupiter token search: HTTP ${res.status}`)
        return (await res.json()) as JupiterToken[]
      }),
    )
    for (const t of found) if (chunk.includes(t.id)) out.set(t.id, t)
    onProgress?.(Math.min(i + 100, mints.length), mints.length)
  }
  return out
}

/** Mints CoinGecko lists on Solana. Kept as information: barn trades tokens without a CoinGecko price too. */
export async function coingeckoMints(): Promise<Set<string>> {
  const coins = await retry(async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=true', { signal: AbortSignal.timeout(120_000) })
    if (!res.ok) throw new Error(`CoinGecko coins list: HTTP ${res.status}`)
    return (await res.json()) as { platforms?: Record<string, string> }[]
  })
  return new Set(coins.map((c) => c.platforms?.solana).filter((m): m is string => !!m))
}

/** mint → names of the lists that include it. */
export async function listMembership(lists: Record<string, string>): Promise<Map<string, string[]>> {
  const out = new Map<string, string[]>()
  for (const [name, source] of Object.entries(lists)) {
    for (const t of (await loadTokenList(source)).tokens) out.set(t.mint, [...(out.get(t.mint) ?? []), name])
  }
  return out
}

export interface MintFacts {
  program: 'classic' | 'token-2022'
  decimals: number
  /** Token-2022 extensions with the detail that matters, e.g. `transferFeeConfig(300bps)`, `transferHook(none)`. */
  extensions: string[]
}

const QUIET = new Set(['metadataPointer', 'tokenMetadata', 'groupPointer', 'groupMemberPointer', 'tokenGroup', 'tokenGroupMember'])

interface ParsedExtension {
  extension: string
  state?: {
    accountState?: string
    programId?: string | null
    paused?: boolean
    newerTransferFee?: { transferFeeBasisPoints?: number }
    delegate?: string | null
  }
}

export function describeExtension(e: ParsedExtension): string {
  const s = e.state ?? {}
  switch (e.extension) {
    case 'transferFeeConfig':
      return `transferFeeConfig(${s.newerTransferFee?.transferFeeBasisPoints ?? '?'}bps)`
    case 'transferHook':
      return `transferHook(${s.programId ? 'program' : 'none'})`
    case 'defaultAccountState':
      return `defaultAccountState(${s.accountState ?? '?'})`
    case 'pausableConfig':
      return `pausableConfig(${s.paused ? 'paused' : 'running'})`
    case 'permanentDelegate':
      return `permanentDelegate(${s.delegate ? 'set' : 'none'})`
    default:
      return e.extension
  }
}

/** Program, decimals and extensions of each mint, read on chain 100 at a time. Mints that aren't token mints are absent. */
export async function mintFacts(rpc: Rpc, mints: string[]): Promise<Map<string, MintFacts>> {
  const out = new Map<string, MintFacts>()
  for (let i = 0; i < mints.length; i += 100) {
    const chunk = mints.slice(i, i + 100)
    const infos = await rpc.call((c) => c.getMultipleParsedAccounts(chunk.map((m) => new PublicKey(m))))
    chunk.forEach((m, j) => {
      const info = infos.value[j]
      const data = info?.data
      if (!info || !data || !('parsed' in data) || data.parsed.type !== 'mint') return
      const exts = (data.parsed.info.extensions ?? []) as ParsedExtension[]
      out.set(m, {
        program: info.owner.equals(TOKEN_2022_PROGRAM_ID) ? 'token-2022' : 'classic',
        decimals: data.parsed.info.decimals,
        extensions: exts.filter((e) => !QUIET.has(e.extension)).map(describeExtension),
      })
    })
  }
  return out
}

export type QuoteResult = { ok: true; amount: bigint } | { ok: false; error: string; reason?: string }

/** A barn quote with SOL on one side. `amount` is the sell amount (sell) or the buy amount (buy). */
async function quote(apiBase: string, sellToken: string, buyToken: string, kind: 'sell' | 'buy', amount: bigint): Promise<QuoteResult> {
  const res = await retry(() =>
    fetch(`${apiBase}/v1/quote`, {
      method: 'POST',
      signal: AbortSignal.timeout(HTTP_TIMEOUT_MS),
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        from: '11111111111111111111111111111112', // any valid key; quotes don't need a funded owner
        sellToken,
        buyToken,
        kind,
        ...(kind === 'sell' ? { sellAmountBeforeFee: amount.toString() } : { buyAmountAfterFee: amount.toString() }),
      }),
    }).then((r) => {
      if (r.status === 429 || r.status >= 500) throw new Error(`HTTP ${r.status}`)
      return r
    }),
  )
  const body = (await res.json().catch(() => ({}))) as { quote?: { buyAmount: string; sellAmount: string }; errorType?: string; description?: string }
  if (res.ok && body.quote) return { ok: true, amount: BigInt(kind === 'sell' ? body.quote.buyAmount : body.quote.sellAmount) }
  return {
    ok: false,
    error: body.errorType ?? `HTTP ${res.status}`,
    reason: body.description?.replace(/^Token \S+ is unsupported: /, ''),
  }
}

export interface Quotes {
  /** SOL → token, selling `solIn`. */
  sell: QuoteResult
  /** SOL → token, buying half of what the sell quote returned (exact out). Skipped when the sell quote failed. */
  buy?: QuoteResult
}

/**
 * Sell and buy quotes on the orderbook for every mint, at `quoteRps`. Under load the solvers get rate limited and the
 * orderbook answers NoLiquidity for routes that exist, so every NoLiquidity is asked again `retryRounds` times at
 * `retryRps` (slowly) before it counts.
 */
export async function barnQuotes(
  apiBase: string,
  mints: string[],
  solIn: bigint,
  quoteRps: number,
  onProgress?: (done: number, total: number, round: number) => void,
  { retryRounds = 2, retryRps = 1 } = {},
): Promise<Map<string, Quotes>> {
  const out = new Map<string, Quotes>()
  const wsol = WSOL_MINT.toBase58()
  const transient = (q?: QuoteResult) => !!q && !q.ok && q.error === 'NoLiquidity'
  const pass = async (todo: string[], rps: number, round: number) => {
    const limiter = new RateLimiter(rps)
    let done = 0
    await Promise.all(
      todo.map(async (mint) => {
        const prev = out.get(mint)
        let sell = prev?.sell
        if (!sell || transient(sell)) {
          await limiter.take()
          sell = await quote(apiBase, wsol, mint, 'sell', solIn)
        }
        let buy = prev?.buy
        if (sell.ok && sell.amount > 1n && (!buy || transient(buy))) {
          await limiter.take()
          buy = await quote(apiBase, wsol, mint, 'buy', sell.amount / 2n)
        }
        out.set(mint, { sell, buy })
        onProgress?.(++done, todo.length, round)
      }),
    )
  }
  await pass(mints, quoteRps, 0)
  for (let round = 1; round <= retryRounds; round++) {
    const again = mints.filter((m) => transient(out.get(m)?.sell) || transient(out.get(m)?.buy))
    if (!again.length) break
    await pass(again, retryRps, round)
  }
  return out
}

export type BarnStatus = 'tradable' | 'sell-only' | 'unsupported' | 'no-route' | 'not-a-mint' | 'not-quoted'

export interface UniverseRow {
  rank: number
  mint: string
  symbol: string
  name: string
  volume90d: number
  share: number
  cumShare: number
  volume30d: number
  txs90d: number
  traders90d: number
  /** `unchecked`: below the `--check` cut, so not looked up (nor quoted, nor read on chain). */
  jupiter: 'verified' | 'listed' | 'unknown' | 'unchecked'
  organic: string
  organicScore: number | null
  liquidity: number | null
  jupVolume24h: number | null
  /** 30-day volume by who routed it (see DEFAULT_ROUTED_QUERY); null when it wasn't loaded. */
  routed: Routed | null
  coingecko: boolean
  program: 'classic' | 'token-2022' | ''
  decimals: number | null
  extensions: string[]
  barn: BarnStatus
  barnReason: string
  lists: string[]
  /** Jupiter verified with an organic score label of high or medium: the list proposed in #solana on 2026-10-06. */
  proposed: boolean
}

export interface UniverseInputs {
  volume: VolumeRow[]
  /** Mints that got the Jupiter, on-chain and barn checks. */
  checked: Set<string>
  jupiter: Map<string, JupiterToken>
  coingecko: Set<string>
  facts: Map<string, MintFacts>
  quotes: Map<string, Quotes>
  lists: Map<string, string[]>
  /** Routed 30-day volume per mint; mints absent from it had none. */
  routedVolume?: Map<string, Routed>
}

const SOL_MINTS = new Set([WSOL_MINT.toBase58(), NATIVE_SOL.toBase58()])

export function barnStatus(mint: string, facts: MintFacts | undefined, q: Quotes | undefined): { barn: BarnStatus; reason: string } {
  if (SOL_MINTS.has(mint)) return { barn: 'tradable', reason: 'SOL' }
  if (!facts) return { barn: 'not-a-mint', reason: 'not an SPL or Token-2022 mint' }
  if (!q) return { barn: 'not-quoted', reason: '' }
  if (!q.sell.ok) {
    if (q.sell.error === 'UnsupportedToken') return { barn: 'unsupported', reason: q.sell.reason ?? 'UnsupportedToken' }
    return { barn: 'no-route', reason: q.sell.error }
  }
  if (q.buy && !q.buy.ok) return { barn: 'sell-only', reason: `no buy quote: ${q.buy.error}` }
  return { barn: 'tradable', reason: '' }
}

/** Join everything into one row per mint, ranked by 90-day volume, with each mint's share and the running total. */
export function buildRows(inp: UniverseInputs): UniverseRow[] {
  const sorted = [...inp.volume].sort((a, b) => b.volume90d - a.volume90d)
  const total = sorted.reduce((s, v) => s + v.volume90d, 0)
  let cum = 0
  return sorted.map((v, i) => {
    cum += v.volume90d
    const j = inp.jupiter.get(v.mint)
    const f = inp.facts.get(v.mint)
    const { barn, reason } = barnStatus(v.mint, f, inp.quotes.get(v.mint))
    const vol24 = j?.stats24h ? (j.stats24h.buyVolume ?? 0) + (j.stats24h.sellVolume ?? 0) : null
    return {
      rank: i + 1,
      mint: v.mint,
      symbol: j?.symbol ?? v.symbol,
      name: j?.name ?? '',
      volume90d: v.volume90d,
      share: v.volume90d / total,
      cumShare: cum / total,
      volume30d: v.volume30d,
      txs90d: v.txs90d,
      traders90d: v.traders90d,
      jupiter: j ? (j.isVerified ? 'verified' : 'listed') : inp.checked.has(v.mint) ? 'unknown' : 'unchecked',
      organic: j?.organicScoreLabel ?? '',
      organicScore: j?.organicScore ?? null,
      liquidity: j?.liquidity ?? null,
      jupVolume24h: vol24,
      routed: inp.routedVolume ? (inp.routedVolume.get(v.mint) ?? NO_ROUTES) : null,
      coingecko: inp.coingecko.has(v.mint) || SOL_MINTS.has(v.mint),
      program: f?.program ?? '',
      decimals: f?.decimals ?? null,
      extensions: f?.extensions ?? [],
      barn,
      barnReason: reason,
      lists: inp.lists.get(v.mint) ?? [],
      proposed: !!j?.isVerified && (j.organicScoreLabel === 'high' || j.organicScoreLabel === 'medium'),
    }
  })
}

/**
 * Ready for CoW: barn quotes sell orders into it. A CoinGecko price isn't needed: in the 9 Oct top-250 run, 33 of 39
 * orders into tokens without one filled (the rest failed for unrelated reasons).
 */
export const supported = (r: UniverseRow) => r.barn === 'tradable' || r.barn === 'sell-only'

/**
 * A relevant token matters to traders: enough liquidity to absorb a test trade, and still traded (thin pools and faded
 * launches rank high on 90-day volume). Deliberately says nothing about CoW: tokens barn can't trade stay in, so the
 * scenarios built from these lists show where support is missing.
 */
export const MIN_LIQUIDITY_USD = 50_000
/** Share of the 90-day volume the last 30 days must carry (a steady token has ~33%). */
export const MIN_RECENT_SHARE = 0.05
export const RELEVANCE =
  'liquidity >= $50k and the last 30 days carry >= 5% of the 90-day DEX volume. ' +
  'CoW support is not required: tokens barn rejects or has no route for stay in'

export const relevant = (r: UniverseRow) =>
  r.program !== '' && r.decimals !== null && (r.liquidity ?? 0) >= MIN_LIQUIDITY_USD && r.volume30d >= MIN_RECENT_SHARE * r.volume90d

const CSV_COLUMNS: [string, (r: UniverseRow) => string | number | boolean | null][] = [
  ['rank', (r) => r.rank],
  ['mint', (r) => r.mint],
  ['symbol', (r) => r.symbol],
  ['name', (r) => r.name],
  ['volume_90d_usd', (r) => Math.round(r.volume90d)],
  ['share', (r) => r.share.toFixed(6)],
  ['cum_share', (r) => r.cumShare.toFixed(6)],
  ['volume_30d_usd', (r) => Math.round(r.volume30d)],
  ['txs_90d', (r) => r.txs90d],
  ['traders_90d', (r) => r.traders90d],
  ['jupiter', (r) => r.jupiter],
  ['organic', (r) => r.organic],
  ['organic_score', (r) => (r.organicScore === null ? '' : r.organicScore.toFixed(1))],
  ['liquidity_usd', (r) => (r.liquidity === null ? '' : Math.round(r.liquidity))],
  ['jupiter_volume_24h_usd', (r) => (r.jupVolume24h === null ? '' : Math.round(r.jupVolume24h))],
  ['coingecko', (r) => r.coingecko],
  ['program', (r) => r.program],
  ['decimals', (r) => r.decimals],
  ['extensions', (r) => r.extensions.join(' ')],
  ['barn', (r) => r.barn],
  ['barn_reason', (r) => r.barnReason],
  ['cow_supported', (r) => supported(r)],
  ['lists', (r) => r.lists.join(' ')],
  ['proposed', (r) => r.proposed],
  ...ROUTES.map((k): [string, (r: UniverseRow) => string | number] => [`${k}_volume_30d_usd`, (r) => (r.routed ? Math.round(r.routed[k]) : '')]),
]

const csvCell = (v: string | number | boolean | null) => {
  const s = v === null ? '' : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

/** Read back a universe.csv written by `toCsv`, to rebuild the token lists without the network. */
export function fromCsv(text: string): UniverseRow[] {
  const num = (v: string) => (v === '' ? null : Number(v))
  const words = (v: string) => (v ? v.split(' ') : [])
  return (parse(text, { columns: true, skip_empty_lines: true }) as Record<string, string>[]).map((c) => ({
    rank: Number(c.rank),
    mint: c.mint,
    symbol: c.symbol,
    name: c.name,
    volume90d: Number(c.volume_90d_usd),
    share: Number(c.share),
    cumShare: Number(c.cum_share),
    volume30d: Number(c.volume_30d_usd),
    txs90d: Number(c.txs_90d),
    traders90d: Number(c.traders_90d),
    jupiter: c.jupiter as UniverseRow['jupiter'],
    organic: c.organic,
    organicScore: num(c.organic_score),
    liquidity: num(c.liquidity_usd),
    jupVolume24h: num(c.jupiter_volume_24h_usd),
    // Older files have no routed columns, or only Jupiter's: treat those as not loaded.
    routed: ROUTES.every((k) => `${k}_volume_30d_usd` in c && c[`${k}_volume_30d_usd`] !== '')
      ? (Object.fromEntries(ROUTES.map((k) => [k, Number(c[`${k}_volume_30d_usd`])])) as Routed)
      : null,
    coingecko: c.coingecko === 'true',
    program: c.program as UniverseRow['program'],
    decimals: num(c.decimals),
    extensions: words(c.extensions),
    barn: c.barn as BarnStatus,
    barnReason: c.barn_reason,
    lists: words(c.lists),
    proposed: c.proposed === 'true',
  }))
}

export function toCsv(rows: UniverseRow[]): string {
  return [CSV_COLUMNS.map(([h]) => h).join(','), ...rows.map((r) => CSV_COLUMNS.map(([, f]) => csvCell(f(r))).join(','))].join('\n') + '\n'
}

/** A Uniswap-style token list, the format `generate-token-list-session` and the app read. */
/** Share of the 30-day volume `picked` carries, per routing source (when loaded) and overall DEX volume. SOL excluded. */
export function coverage(all: UniverseRow[], picked: UniverseRow[]): string {
  const keep = (rows: UniverseRow[]) => rows.filter((r) => !SOL_MINTS.has(r.mint))
  const sum = (rows: UniverseRow[], f: (r: UniverseRow) => number) => keep(rows).reduce((s, r) => s + f(r), 0)
  const pct = (a: number, b: number) => `${b ? ((100 * a) / b).toFixed(1) : '0'}%`
  const usd = (v: number) => (v >= 1e9 ? `$${(v / 1e9).toFixed(1)}B` : v >= 1e6 ? `$${(v / 1e6).toFixed(0)}M` : `$${(v / 1e3).toFixed(0)}k`)
  const dex = (r: UniverseRow) => r.volume30d
  const parts = all.some((r) => r.routed)
    ? (['jupiter', 'dflow', 'titan', 'direct'] as Route[]).map((k) => {
        const f = (r: UniverseRow) => r.routed?.[k] ?? 0
        return `${pct(sum(picked, f), sum(all, f))} ${ROUTE_LABEL[k]}`
      })
    : []
  return [...parts, `${pct(sum(picked, dex), sum(all, dex))} of all DEX volume (${usd(sum(picked, dex))} of ${usd(sum(all, dex))})`].join(', ') +
    ' over 30 days; SOL excluded'
}

/** One file of the coverage sequence: tokens no earlier step used. */
export interface SequenceStep {
  id: string
  title: string
  criteria: string
  rows: UniverseRow[]
}

export interface SequenceOptions {
  /** Mints in CoW Swap's app lists (SolanaDefault + NearSolana). */
  appMints: Set<string>
  /** Size of the first, quick file: the most traded app-list tokens with a CoinGecko price. */
  topSize: number
  /** Long-tail candidates already read on chain, in sampling order (see sampleLongTail). */
  longTail: UniverseRow[]
  longTailSize: number
}

/**
 * The token coverage sequence: each step takes the tokens no earlier step used, so every token is tested once.
 * 1: the top app-list tokens (CoinGecko-priced, most traded), a quick health check. 2: the rest of the relevant tokens
 * CoW Swap lists. 3: every other relevant token, by Jupiter-routed volume. 4: a long-tail sample.
 * Per-router steps (DFlow, Titan, direct) were tried and dropped: steps 1-2 already hold 84-98% of each router's
 * volume, and what's left sits in pools under $50k.
 */
export function buildSequence(rows: UniverseRow[], o: SequenceOptions): SequenceStep[] {
  const used = new Set<string>()
  const pool = rows.filter((r) => !SOL_MINTS.has(r.mint) && relevant(r))
  const jupiter = (r: UniverseRow) => r.routed?.jupiter ?? 0
  const take = (candidates: UniverseRow[], key: (r: UniverseRow) => number) => {
    const picked = candidates.filter((r) => !used.has(r.mint)).sort((a, b) => key(b) - key(a))
    for (const r of picked) used.add(r.mint)
    return picked
  }
  const app = pool.filter((r) => o.appMints.has(r.mint))
  const top = (rows: UniverseRow[]) => {
    const picked = rows.filter((r) => r.coingecko).sort((a, b) => jupiter(b) - jupiter(a)).slice(0, o.topSize)
    return take(picked, jupiter)
  }
  return [
    { id: 'test_01_cow-swap-top', title: `Top ${o.topSize} CoW Swap tokens`,
      criteria: `${RELEVANCE}; in SolanaDefault or NearSolana, with a CoinGecko price; the ${o.topSize} with the most Jupiter-routed volume`, rows: top(app) },
    { id: 'test_02_cow-swap', title: 'The rest of the CoW Swap lists',
      criteria: `${RELEVANCE}; in SolanaDefault or NearSolana; ranked by Jupiter-routed volume`, rows: take(app, jupiter) },
    { id: 'test_03_jupiter', title: 'Every other relevant token',
      criteria: `${RELEVANCE}; not in the app lists; ranked by Jupiter-routed volume`, rows: take(pool, jupiter) },
    { id: 'test_04_long-tail', title: 'Long-tail sample',
      criteria: `random sample of ${o.longTailSize} tokens outside the ~2,200 the universe checked (>= $100k over 90 days); not relevance-filtered`,
      rows: o.longTail.filter((r) => !used.has(r.mint) && r.program !== '' && r.decimals !== null).slice(0, o.longTailSize) },
  ]
}

/** Seeded candidates for the long-tail step: unchecked tokens (no on-chain facts yet), shuffled. Read them on chain before use. */
export function sampleLongTail(rows: UniverseRow[], count: number, seed: number): UniverseRow[] {
  const rand = mulberry32(seed)
  const pool = rows.filter((r) => r.program === '' && !SOL_MINTS.has(r.mint))
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[pool[i], pool[j]] = [pool[j], pool[i]]
  }
  return pool.slice(0, count)
}

export function toTokenList(name: string, rows: UniverseRow[], criteria?: string, coverage?: string) {
  return {
    name,
    ...(criteria ? { criteria } : {}),
    ...(coverage ? { coverage } : {}),
    timestamp: new Date().toISOString(),
    version: { major: 1, minor: 0, patch: 0 },
    tokens: rows
      .filter((r) => r.decimals !== null)
      .map((r) => ({ chainId: SOLANA_CHAIN_ID, address: r.mint, symbol: r.symbol, name: r.name || r.symbol, decimals: r.decimals! })),
  }
}

const usd = (x: number) =>
  x >= 1e9 ? `$${(x / 1e9).toFixed(2)}B` : x >= 1e6 ? `$${(x / 1e6).toFixed(1)}M` : x >= 1e3 ? `$${(x / 1e3).toFixed(0)}k` : `$${x.toFixed(0)}`
const pct = (x: number) => `${(x * 100).toFixed(1)}%`

/** Markdown summary: list coverage of the traded volume, the biggest gaps, and the token programs and extensions. */
export function summarize(rows: UniverseRow[], o: { date: string; source: string; listNames: string[]; lists: Map<string, string[]> }): string {
  // SOL is on every list and in half of all swaps: shares are of the volume excluding SOL, so they measure the token choice.
  const tokens = rows.filter((r) => !SOL_MINTS.has(r.mint))
  const total = tokens.reduce((s, r) => s + r.volume90d, 0)
  const vol = (rs: UniverseRow[]) => rs.reduce((s, r) => s + r.volume90d, 0)
  const line = (label: string, rs: UniverseRow[]) => {
    const sup = rs.filter(supported)
    return `| ${label} | ${rs.length} | ${usd(vol(rs))} | ${pct(vol(rs) / total)} | ${sup.length} | ${pct(vol(sup) / total)} |`
  }
  const out: string[] = []
  out.push(`# Solana token universe (${o.date})`, '')
  out.push(
    `- **${tokens.length.toLocaleString('en-US')} tokens** traded at least $100k on Solana DEXs in the last 90 days, ${usd(total)} in total ` +
      `(source: ${o.source}). Shares below leave SOL out.`,
    `- **${tokens.filter((r) => r.jupiter !== 'unchecked').length.toLocaleString('en-US')} were checked** on Jupiter, on chain and on barn: ` +
      'the most traded, plus every token in the app lists. The rest only count towards the volume.',
    '- **Supported** = barn quotes a sell into the token (a CoinGecko price isn\'t needed).',
    '- **Sell-only** = no buy quote. Mostly Token-2022 tokens.',
    '',
  )

  out.push('## Coverage of the traded volume', '')
  out.push('| Tokens | Count | 90d volume | Share | Supported by CoW | Share supported |', '|---|---:|---:|---:|---:|---:|')
  for (const name of o.listNames) out.push(line(`In ${name}`, tokens.filter((r) => r.lists.includes(name))))
  out.push(line('Proposed (Jupiter verified, organic high/medium)', tokens.filter((r) => r.proposed)))
  out.push(line('Jupiter verified', tokens.filter((r) => r.jupiter === 'verified')))
  for (const n of [50, 100, 250, 500, 1000]) if (tokens.length > n) out.push(line(`Top ${n} by volume`, tokens.slice(0, n)))
  out.push(line('All', tokens), '')

  const app = o.listNames[0]
  const missing = tokens.filter((r) => supported(r) && !r.lists.length)
  out.push(`## Supported by CoW but in no app list (${missing.length}, ${pct(vol(missing) / total)} of the volume)`, '')
  out.push('| # | Token | 90d volume | Jupiter | Organic | Program |', '|---:|---|---:|---|---|---|')
  for (const r of missing.slice(0, 40)) {
    out.push(`| ${r.rank} | ${r.symbol} \`${r.mint}\` | ${usd(r.volume90d)} | ${r.jupiter} | ${r.organic} | ${r.program}${r.extensions.length ? ` (${r.extensions.join(', ')})` : ''} |`)
  }
  out.push('')

  const blocked = tokens.slice(0, 500).filter((r) => !supported(r))
  out.push(`## Top-500 tokens CoW can't trade (${blocked.length}, ${pct(vol(blocked) / total)} of the volume)`, '')
  out.push('| # | Token | 90d volume | Why | In lists |', '|---:|---|---:|---|---|')
  for (const r of blocked.slice(0, 60)) {
    const why = supported(r) ? '' : `${r.barn}${r.barnReason ? `: ${r.barnReason}` : ''}`
    out.push(`| ${r.rank} | ${r.symbol} \`${r.mint}\` | ${usd(r.volume90d)} | ${why} | ${r.lists.join(', ') || '–'} |`)
  }
  out.push('')

  const listed = tokens.filter((r) => r.lists.includes(app))
  const stale = listed.filter((r) => !supported(r))
  out.push(`## In ${app} but not supported (${stale.length})`, '')
  for (const r of stale) out.push(`- ${r.symbol} \`${r.mint}\` (${usd(r.volume90d)}): ${r.barn} ${r.barnReason}`)
  const sellOnly = listed.filter((r) => r.barn === 'sell-only')
  out.push('', `Sell-only in ${app} (no buy orders): ${sellOnly.length}, ${sellOnly.filter((r) => r.program === 'classic').length} of them classic SPL` +
    (sellOnly.some((r) => r.program === 'classic') ? `: ${sellOnly.filter((r) => r.program === 'classic').map((r) => r.symbol).join(', ')}` : '') + '.')
  const inUniverse = new Set(rows.map((r) => r.mint))
  const quiet = [...o.lists].filter(([m, ls]) => ls.includes(app) && !inUniverse.has(m) && !SOL_MINTS.has(m)).length
  out.push('', `${quiet} of the ${app} tokens had under $100k of volume in 90 days, so they aren't in this universe: candidates to drop.`, '')

  out.push('## Token programs', '')
  out.push('| Program | Tokens | 90d volume | Share | Supported by CoW | Buy orders too |', '|---|---:|---:|---:|---:|---:|')
  for (const p of ['classic', 'token-2022'] as const) {
    const rs = tokens.filter((r) => r.program === p)
    out.push(`| ${p === 'classic' ? 'SPL Token (classic)' : 'Token-2022'} | ${rs.length} | ${usd(vol(rs))} | ${pct(vol(rs) / total)} | ${rs.filter(supported).length} | ${rs.filter((r) => supported(r) && r.barn === 'tradable').length} |`)
  }
  out.push('')
  const byExt = new Map<string, UniverseRow[]>()
  for (const r of tokens.filter((r) => r.program === 'token-2022')) {
    for (const e of r.extensions.length ? r.extensions : ['(none besides metadata)']) byExt.set(e, [...(byExt.get(e) ?? []), r])
  }
  out.push('### Token-2022 extensions', '')
  out.push('| Extension | Tokens | 90d volume | Supported by CoW | Examples |', '|---|---:|---:|---:|---|')
  for (const [e, rs] of [...byExt].sort((a, b) => vol(b[1]) - vol(a[1]))) {
    out.push(`| ${e} | ${rs.length} | ${usd(vol(rs))} | ${rs.filter(supported).length} | ${rs.slice(0, 4).map((r) => r.symbol).join(', ')} |`)
  }
  out.push('')
  return out.join('\n')
}
