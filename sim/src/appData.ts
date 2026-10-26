import { keccak_256 } from '@noble/hashes/sha3'
import { OrderBookApiError, type OrderBookApi } from '@cowprotocol/sdk-order-book'

/**
 * App-data pre-image every simulated order carries. The order's 32-byte `appData` is keccak256 of these
 * exact bytes (the EVM convention), so keep the string byte-for-byte: no reformatting or key reordering.
 */
export const APP_DATA_DOC = '{"appCode":"solana-qos","metadata":{"hooks":{"version":"0.2.0"}},"version":"1.15.0"}'

export const APP_DATA: Uint8Array = keccak_256(new TextEncoder().encode(APP_DATA_DOC))
export const APP_DATA_HEX = `0x${Buffer.from(APP_DATA).toString('hex')}`

/**
 * Make sure the orderbook can resolve our app-data hash. An order carries only the 32-byte hash, so a backend that
 * has never seen the pre-image rejects it with `InvalidAppData`. Registration is idempotent and permanent: this is a
 * no-op on every run after the first against a given environment.
 */
export async function registerAppData(api: OrderBookApi): Promise<'present' | 'uploaded'> {
  try {
    const known = await api.getAppData(APP_DATA_HEX)
    if (known.fullAppData) return 'present'
  } catch (error) {
    // 404 is the backend saying it has no pre-image for the hash; anything else is a real failure.
    if (!(error instanceof OrderBookApiError) || error.response.status !== 404) throw error
  }
  await api.uploadAppData(APP_DATA_HEX, APP_DATA_DOC)
  return 'uploaded'
}
