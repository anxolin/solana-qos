import { PublicKey } from '@solana/web3.js'
import { SOLANA_SETTLEMENT_PROGRAM_VERSION, SOLANA_SETTLEMENT_PROGRAM_VERSION_STAGING, type CowEnv } from '@cowprotocol/sdk-config'
import { findOrderPda, findSettlementStatePda, type SolanaOrderIntent } from '@cowprotocol/sdk-trading-solana'

/**
 * The settlement version sim builds orders for, and its PDAs.
 *
 * Until @cowprotocol/sdk-trading-solana 0.15 the SDK built v0.4 orders and this file shimmed v0.5 on top (flags byte
 * and PDA seed). The SDK builds v0.5 itself since then, so only the version check is left: an environment running
 * another version than the SDK builds would accept orders that never get created on chain.
 */

/** Settlement versions sim can build orders for besides the SDK's own. None since the SDK builds v0.5. */
export const SHIMMED: string[] = []

/** The version the installed SDK builds orders for. */
export const sdkVersion = (env: CowEnv) => (env === 'staging' ? SOLANA_SETTLEMENT_PROGRAM_VERSION_STAGING : SOLANA_SETTLEMENT_PROGRAM_VERSION)

/** Whether sim can build orders for `version` on `env`. */
export const canBuild = (env: CowEnv, version?: string) => !version || version === sdkVersion(env) || SHIMMED.includes(version)

/** PDA derivations for the settlement version deployed on `env`, which must be the one the SDK builds. */
export function settlementFor(env: CowEnv, version: string | undefined, programId: PublicKey) {
  if (!canBuild(env, version)) throw new Error(`no order builder for settlement v${version}`)
  return {
    version: sdkVersion(env),
    statePda: () => findSettlementStatePda(programId, env)[0],
    orderPda: (uid: Uint8Array) => findOrderPda(programId, uid, env)[0],
    intent: (i: SolanaOrderIntent) => i,
  }
}
