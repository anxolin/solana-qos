import { readFileSync } from 'node:fs'
import { PublicKey } from '@solana/web3.js'
import { TOKEN_2022_PROGRAM_ID } from '@solana/spl-token'
import { RateLimiter, retry } from './limiter.js'
import type { Rpc } from './rpc.js'
import { NATIVE_SOL, WSOL_MINT } from './rpc.js'
import type { Mode, TradeRow } from './scenario.js'

export const SOLANA_CHAIN_ID = 1000000001

export interface ListToken {
  symbol: string
  mint: string
  decimals: number
}

export type Verdict =
  | { kind: 'tradable'; program: 'classic' | 'token-2022'; extensions: string[]; quotedOut: bigint }
  | { kind: 'unsupported'; reason: string; extensions: string[] }
  | { kind: 'no-route'; reason: string; program: 'classic' | 'token-2022' }
  | { kind: 'missing'; reason: string }

/** A Uniswap-style token list from a URL or a file, keeping Solana tokens only (SOL and wSOL excluded). */
export async function loadTokenList(source: string): Promise<{ name: string; criteria?: string; tokens: ListToken[] }> {
  const raw = /^https?:\/\//.test(source)
    ? await retry(async () => {
        const res = await fetch(source, { signal: AbortSignal.timeout(60_000) })
        if (!res.ok) throw new Error(`${source}: HTTP ${res.status}`)
        return res.json()
      })
    : JSON.parse(readFileSync(source, 'utf8'))
  const skip = new Set([NATIVE_SOL.toBase58(), WSOL_MINT.toBase58()])
  const seen = new Set<string>()
  const tokens: ListToken[] = []
  for (const t of raw.tokens as { chainId: number; address: string; symbol: string; decimals: number }[]) {
    if (t.chainId !== SOLANA_CHAIN_ID || skip.has(t.address) || seen.has(t.address)) continue
    seen.add(t.address)
    tokens.push({ symbol: t.symbol, mint: t.address, decimals: t.decimals })
  }
  return { name: raw.name ?? source, criteria: raw.criteria, tokens }
}

/**
 * The backend's mint rules (services/crates/solana-token `mint_verdict`): Token-2022 refuses the settlement's
 * plain Transfer for these extensions, so the backend rejects such mints.
 */
const REJECTED: Record<string, string> = {
  transferFeeConfig: 'transfer fee',
  transferHook: 'transfer hook',
  pausableConfig: 'pausable',
  nonTransferable: 'non-transferable',
}

export function backendVerdict(extensions: { extension: string; state?: { accountState?: string } }[]): string | null {
  for (const e of extensions) if (REJECTED[e.extension]) return `Token-2022 ${REJECTED[e.extension]} extension`
  if (extensions.some((e) => e.extension === 'defaultAccountState' && e.state?.accountState === 'frozen')) {
    return 'new token accounts start frozen'
  }
  return null
}

/**
 * Classify every token with a live sell quote (SOL → token) on the orderbook, which is the source of truth: its rules
 * change between deployments. The mint's extensions (read on chain) are kept to explain the result.
 */
export async function classify(
  rpc: Rpc,
  apiBase: string,
  tokens: ListToken[],
  solIn: bigint,
  quoteRps: number,
  onProgress?: (done: number, total: number) => void,
): Promise<Map<string, Verdict>> {
  const out = new Map<string, Verdict>()
  const parsed = new Map<string, { program: 'classic' | 'token-2022'; extensions: { extension: string; state?: { accountState?: string } }[] }>()
  for (let i = 0; i < tokens.length; i += 100) {
    const chunk = tokens.slice(i, i + 100)
    const infos = await rpc.call((c) => c.getMultipleParsedAccounts(chunk.map((t) => new PublicKey(t.mint))))
    chunk.forEach((t, j) => {
      const info = infos.value[j]
      const data = info?.data
      if (!info || !data || !('parsed' in data)) return out.set(t.mint, { kind: 'missing', reason: 'mint account not found' })
      const program = info.owner.equals(TOKEN_2022_PROGRAM_ID) ? 'token-2022' : 'classic'
      parsed.set(t.mint, { program, extensions: data.parsed.info.extensions ?? [] })
    })
  }
  const limiter = new RateLimiter(quoteRps)
  let done = 0
  await Promise.all(
    tokens.map(async (t) => {
      const p = parsed.get(t.mint)
      if (!p) return
      // The orderbook decides: its rules change with deployments, so a local verdict only explains a rejection.
      const localReason = backendVerdict(p.extensions)
      const extNames = p.extensions.map((e) => e.extension).filter((e) => e !== 'metadataPointer' && e !== 'tokenMetadata')
      await limiter.take()
      const res = await retry(() =>
        fetch(`${apiBase}/v1/quote`, {
          method: 'POST',
          signal: AbortSignal.timeout(30_000),
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify({
            from: '11111111111111111111111111111112', // any valid key; quotes don't need a funded owner
            sellToken: WSOL_MINT.toBase58(),
            buyToken: t.mint,
            kind: 'sell',
            sellAmountBeforeFee: solIn.toString(),
          }),
        }),
      )
      const body = (await res.json().catch(() => ({}))) as { quote?: { buyAmount: string }; errorType?: string; description?: string }
      if (res.ok && body.quote) {
        out.set(t.mint, { kind: 'tradable', program: p.program, extensions: extNames, quotedOut: BigInt(body.quote.buyAmount) })
      } else if (body.errorType === 'UnsupportedToken') {
        out.set(t.mint, { kind: 'unsupported', reason: body.description?.replace(/^Token \S+ is unsupported: /, '') ?? localReason ?? 'UnsupportedToken', extensions: extNames })
      } else {
        out.set(t.mint, { kind: 'no-route', reason: body.errorType ?? `HTTP ${res.status}`, program: p.program })
      }
      onProgress?.(++done, tokens.length)
    }),
  )
  return out
}

export interface ListScenarioOptions {
  solPerToken: number
  traders: number
  sellBackShare: number
  mode: Mode
}

const round3 = (x: number) => Number(x.toPrecision(3))

/**
 * Rows for the three scenario files. Tradable tokens: each gets SOL → token, then a sell of `sellBackShare` of what
 * the quote promised back to SOL, spread round-robin over the traders (a trader's rows run back to back). Unsupported
 * and no-route tokens get one SOL → token row each on trader 1 (they fail at the quote and spend nothing), so the files
 * show when that changes.
 */
export function listRows(tokens: ListToken[], verdicts: Map<string, Verdict>, o: ListScenarioOptions) {
  const tradable: Omit<TradeRow, 'row'>[] = []
  const unsupported: Omit<TradeRow, 'row'>[] = []
  const noRoute: Omit<TradeRow, 'row'>[] = []
  let i = 0
  for (const t of tokens) {
    const v = verdicts.get(t.mint)
    if (!v || v.kind === 'missing') continue
    const sym = t.mint // addresses, not symbols: list symbols aren't unique
    if (v.kind === 'tradable') {
      const trader = (i++ % o.traders) + 1
      const back = round3((Number(v.quotedOut) / 10 ** t.decimals) * o.sellBackShare)
      const note = `${t.symbol} (${v.program}${v.extensions.length ? `: ${v.extensions.join(' ')}` : ''})`
      tradable.push({ trader, time: 0, type: 'sell', amount: o.solPerToken, token: 'SOL', otherToken: sym, mode: o.mode, note: `${note}: SOL to token` })
      if (back > 0) tradable.push({ trader, time: 0, type: 'sell', amount: back, token: sym, otherToken: 'SOL', mode: o.mode, note: `${note}: token to SOL` })
    } else if (v.kind === 'unsupported') {
      unsupported.push({ trader: 1, time: 0, type: 'sell', amount: o.solPerToken, token: 'SOL', otherToken: sym, mode: o.mode, note: `${t.symbol}: expected UnsupportedToken (${v.reason})` })
    } else {
      noRoute.push({ trader: 1, time: 0, type: 'sell', amount: o.solPerToken, token: 'SOL', otherToken: sym, mode: o.mode, note: `${t.symbol} (${v.program}): no route on ${new Date().toISOString().slice(0, 10)} (${v.reason})` })
    }
  }
  return { tradable, unsupported, noRoute }
}
