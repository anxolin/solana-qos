import { keccak_256 } from '@noble/hashes/sha3'

/**
 * App-data pre-image every simulated order carries. The order's 32-byte `appData` is keccak256 of these
 * exact bytes (the EVM convention), so keep the string byte-for-byte: no reformatting or key reordering.
 */
export const APP_DATA_DOC = '{"appCode":"solana-qos","metadata":{"hooks":{"version":"0.2.0"}},"version":"1.15.0"}'

export const APP_DATA: Uint8Array = keccak_256(new TextEncoder().encode(APP_DATA_DOC))
export const APP_DATA_HEX = `0x${Buffer.from(APP_DATA).toString('hex')}`
