import { readFileSync } from 'node:fs'
import { PublicKey } from '@solana/web3.js'
import { TOKEN_2022_PROGRAM_ID } from '@solana/spl-token'
import { parse } from 'csv-parse/sync'
import { RateLimiter, retry } from './limiter.js'
import type { Rpc } from './rpc.js'
import { NATIVE_SOL, WSOL_MINT } from './rpc.js'
import { loadTokenList, SOLANA_CHAIN_ID } from './tokenlist.js'

/**
 * The Solana token universe: every mint with real DEX volume, joined with what decides whether CoW can trade it
 * (Jupiter metadata, a CoinGecko price, the mint's program and extensions, live barn quotes) and with the app's lists.
 */

/** Dune query 8910905: net swap volume per mint over 90 days, each transaction counted once per mint. */
export const DEFAULT_DUNE_QUERY = 8910905

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
        const r = await fetch(url, { headers: { 'X-Dune-Api-Key': key } })
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
  const records = parse(text, { columns: true, skip_empty_lines: true, trim: true }) as Record<string, string>[]
  return records.map((r) => ({
    mint: r.mint,
    symbol: r.symbol ?? '',
    volume90d: Number(r.volume_90d),
    volume30d: Number(r.volume_30d),
    txs90d: Number(r.txs_90d),
    traders90d: Number(r.traders_90d),
  }))
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

/** Jupiter's token metadata for `mints`, 100 per search call. Mints Jupiter doesn't know are absent. */
export async function jupiterTokens(mints: string[], onProgress?: (done: number, total: number) => void): Promise<Map<string, JupiterToken>> {
  const out = new Map<string, JupiterToken>()
  const limiter = new RateLimiter(1)
  for (let i = 0; i < mints.length; i += 100) {
    const chunk = mints.slice(i, i + 100)
    const found = await retry(() =>
      limiter.run(async () => {
        const res = await fetch(`https://lite-api.jup.ag/tokens/v2/search?query=${chunk.join(',')}`)
        if (!res.ok) throw new Error(`Jupiter token search: HTTP ${res.status}`)
        return (await res.json()) as JupiterToken[]
      }),
    )
    for (const t of found) if (chunk.includes(t.id)) out.set(t.id, t)
    onProgress?.(Math.min(i + 100, mints.length), mints.length)
  }
  return out
}

/** Mints CoinGecko lists on Solana. The backend's native prices come from CoinGecko: without it, orders can't settle. */
export async function coingeckoMints(): Promise<Set<string>> {
  const coins = await retry(async () => {
    const res = await fetch('https://api.coingecko.com/api/v3/coins/list?include_platform=true')
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

/** Sell and buy quotes on the orderbook for every mint, at `quoteRps`. */
export async function barnQuotes(
  apiBase: string,
  mints: string[],
  solIn: bigint,
  quoteRps: number,
  onProgress?: (done: number, total: number) => void,
): Promise<Map<string, Quotes>> {
  const out = new Map<string, Quotes>()
  const limiter = new RateLimiter(quoteRps)
  const wsol = WSOL_MINT.toBase58()
  let done = 0
  await Promise.all(
    mints.map(async (mint) => {
      await limiter.take()
      const sell = await quote(apiBase, wsol, mint, 'sell', solIn)
      let buy: QuoteResult | undefined
      if (sell.ok && sell.amount > 1n) {
        await limiter.take()
        buy = await quote(apiBase, wsol, mint, 'buy', sell.amount / 2n)
      }
      out.set(mint, { sell, buy })
      onProgress?.(++done, mints.length)
    }),
  )
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
 * Ready for CoW: barn quotes sell orders into it and CoinGecko prices it (the native price orders need to settle).
 * Buy orders are reported apart (`sell-only`): barn has no exact-out route for Token-2022.
 */
export const supported = (r: UniverseRow) => (r.barn === 'tradable' || r.barn === 'sell-only') && r.coingecko

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
]

const csvCell = (v: string | number | boolean | null) => {
  const s = v === null ? '' : String(v)
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s
}

export function toCsv(rows: UniverseRow[]): string {
  return [CSV_COLUMNS.map(([h]) => h).join(','), ...rows.map((r) => CSV_COLUMNS.map(([, f]) => csvCell(f(r))).join(','))].join('\n') + '\n'
}

/** A Uniswap-style token list, the format `generate-token-list-session` and the app read. */
export function toTokenList(name: string, rows: UniverseRow[]) {
  return {
    name,
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
    `${tokens.length} tokens with at least $100k of DEX volume in the last 90 days (${o.source}), ${usd(total)} in total ` +
      `(each swap counted once per token, hops and arbitrage loops excluded; SOL left out of the shares).`,
    '',
    `The top ${tokens.filter((r) => r.jupiter !== 'unchecked').length} (by volume, plus the app lists' tokens) were checked on Jupiter, on chain and on barn; ` +
      'the rest only count towards the volume.',
    '',
    '**Supported by CoW** means barn quotes a sell order into it and CoinGecko prices it (the native price orders need to settle). ' +
      '**Sell-only** tokens have no buy (exact-out) quote: expected for Token-2022, where Jupiter has no exact-out route.',
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
    const why = supported(r) ? '' : r.coingecko ? `${r.barn}${r.barnReason ? `: ${r.barnReason}` : ''}` : r.barn === 'tradable' || r.barn === 'sell-only' ? 'no CoinGecko price' : `${r.barn}${r.barnReason ? `: ${r.barnReason}` : ''}, no CoinGecko price`
    out.push(`| ${r.rank} | ${r.symbol} \`${r.mint}\` | ${usd(r.volume90d)} | ${why} | ${r.lists.join(', ') || '–'} |`)
  }
  out.push('')

  const listed = tokens.filter((r) => r.lists.includes(app))
  const stale = listed.filter((r) => !supported(r))
  out.push(`## In ${app} but not supported (${stale.length})`, '')
  for (const r of stale) out.push(`- ${r.symbol} \`${r.mint}\` (${usd(r.volume90d)}): ${r.coingecko ? `${r.barn} ${r.barnReason}` : `no CoinGecko price (barn: ${r.barn})`}`)
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
