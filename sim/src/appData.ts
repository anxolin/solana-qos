import { keccak_256 } from '@noble/hashes/sha3'
import { OrderBookApiError, type OrderBookApi } from '@cowprotocol/sdk-order-book'
import { errorDetail, isRateLimit } from './limiter.js'

/**
 * App-data pre-image a simulated order carries when the run leaves slippage to the orderbook: `appCode` alone, so the
 * orders are identifiable without claiming metadata they do not use. The order's 32-byte `appData` is keccak256 of
 * these exact bytes (the EVM convention), so keep the string byte-for-byte: no reformatting or key reordering.
 */
export const APP_DATA_DOC = '{"appCode":"solana-qos","metadata":{},"version":"1.15.0"}'

export const APP_DATA: Uint8Array = keccak_256(new TextEncoder().encode(APP_DATA_DOC))
export const APP_DATA_HEX = `0x${Buffer.from(APP_DATA).toString('hex')}`

/**
 * The pre-image for a quote's slippage, which `metadata.quote.slippageBips` is the schema's place for (app-data
 * v1.15.0): the order then says on its own what it was quoted with, which is what a debug session needs. Built by
 * hand, like the doc above, so the bytes we hash are the bytes we upload. Each value is its own hash, so a run that
 * changes slippage registers another pre-image.
 */
export function appDataDoc(slippageBps?: number): string {
  if (slippageBps === undefined) return APP_DATA_DOC
  if (!Number.isInteger(slippageBps) || slippageBps < 0 || slippageBps > 10_000) {
    throw new Error(`app data slippage must be an integer between 0 and 10000, got ${slippageBps}`)
  }
  return `{"appCode":"solana-qos","metadata":{"quote":{"slippageBips":${slippageBps}}},"version":"1.15.0"}`
}

export function appDataHash(doc: string): { bytes: Uint8Array; hex: string } {
  const bytes = keccak_256(new TextEncoder().encode(doc))
  return { bytes, hex: `0x${Buffer.from(bytes).toString('hex')}` }
}

/** What the orderbook knows about our hash: it had it, we just gave it, or it has none and we were told not to upload. */
export type AppDataStatus = 'present' | 'uploaded' | 'missing'

/**
 * Make sure the orderbook can resolve our app-data hash. An order carries only the 32-byte hash, so a backend that
 * has never seen the pre-image rejects it with `InvalidAppData`. Registration is idempotent and permanent: this is a
 * no-op on every run after the first against a given environment. With `upload: false` the check stays read-only and
 * an unknown hash comes back as `missing`, for an environment that does not take uploads yet.
 */
export async function registerAppData(api: OrderBookApi, { upload = true, doc = APP_DATA_DOC } = {}): Promise<AppDataStatus> {
  const { hex } = appDataHash(doc)
  try {
    const known = await api.getAppData(hex)
    if (known.fullAppData) return 'present'
  } catch (error) {
    // 404 is the backend saying it has no pre-image for the hash; anything else is a real failure.
    if (!(error instanceof OrderBookApiError) || error.response.status !== 404) throw appDataError('read', hex, error)
  }
  if (!upload) return 'missing'
  try {
    await api.uploadAppData(hex, doc)
  } catch (error) {
    throw appDataError('upload', hex, error)
  }
  return 'uploaded'
}

/** Name the step and the hash: on its own, the orderbook's "429 Too Many Requests" says nothing about what failed. */
const appDataError = (step: 'read' | 'upload', hex: string, cause: unknown) =>
  Object.assign(
    new Error(`App data ${step} for ${hex} failed: ${errorDetail(cause)}` +
      (isRateLimit(cause) ? ' (the orderbook rate-limited every attempt; wait a minute and run again, or set COW_API_KEY)' : '')),
    { cause },
  )
