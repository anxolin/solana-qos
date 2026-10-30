import { keccak_256 } from '@noble/hashes/sha3'
import { OrderBookApiError, type OrderBookApi } from '@cowprotocol/sdk-order-book'
import { errorDetail, isRateLimit } from './limiter.js'

/**
 * App-data pre-image every simulated order carries: `appCode` alone, so the orders are identifiable without
 * claiming metadata they do not use. The order's 32-byte `appData` is keccak256 of these exact bytes (the EVM
 * convention), so keep the string byte-for-byte: no reformatting or key reordering.
 */
export const APP_DATA_DOC = '{"appCode":"solana-qos","metadata":{},"version":"1.15.0"}'

export const APP_DATA: Uint8Array = keccak_256(new TextEncoder().encode(APP_DATA_DOC))
export const APP_DATA_HEX = `0x${Buffer.from(APP_DATA).toString('hex')}`

/** What the orderbook knows about our hash: it had it, we just gave it, or it has none and we were told not to upload. */
export type AppDataStatus = 'present' | 'uploaded' | 'missing'

/**
 * Make sure the orderbook can resolve our app-data hash. An order carries only the 32-byte hash, so a backend that
 * has never seen the pre-image rejects it with `InvalidAppData`. Registration is idempotent and permanent: this is a
 * no-op on every run after the first against a given environment. With `upload: false` the check stays read-only and
 * an unknown hash comes back as `missing`, for an environment that does not take uploads yet.
 */
export async function registerAppData(api: OrderBookApi, { upload = true } = {}): Promise<AppDataStatus> {
  try {
    const known = await api.getAppData(APP_DATA_HEX)
    if (known.fullAppData) return 'present'
  } catch (error) {
    // 404 is the backend saying it has no pre-image for the hash; anything else is a real failure.
    if (!(error instanceof OrderBookApiError) || error.response.status !== 404) throw appDataError('read', error)
  }
  if (!upload) return 'missing'
  try {
    await api.uploadAppData(APP_DATA_HEX, APP_DATA_DOC)
  } catch (error) {
    throw appDataError('upload', error)
  }
  return 'uploaded'
}

/** Name the step and the hash: on its own, the orderbook's "429 Too Many Requests" says nothing about what failed. */
const appDataError = (step: 'read' | 'upload', cause: unknown) =>
  Object.assign(
    new Error(`App data ${step} for ${APP_DATA_HEX} failed: ${errorDetail(cause)}` +
      (isRateLimit(cause) ? ' (the orderbook rate-limited every attempt; wait a minute and run again, or set COW_API_KEY)' : '')),
    { cause },
  )
