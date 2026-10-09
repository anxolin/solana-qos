import { PublicKey } from '@solana/web3.js'
import { SOLANA_SETTLEMENT_PROGRAM_VERSION, SOLANA_SETTLEMENT_PROGRAM_VERSION_STAGING, type CowEnv } from '@cowprotocol/sdk-config'
import { findOrderPda, findSettlementStatePda, type SolanaOrderIntent } from '@cowprotocol/sdk-trading-solana'

/**
 * TEMPORARY settlement v0.5 shim, until @cowprotocol/sdk-trading-solana builds v0.5 orders (0.14.1 still builds v0.4).
 *
 * Staging (upgraded in place) and prod run settlement v0.5 since 9 Oct 2026. For what sim does (create, cancel and
 * reclaim orders), v0.5 differs from v0.4 in two places only (solana-programs v0.4.1..v0.5.1, `interface/src`):
 * - the intent's flags byte: bit 0 (`created_on_chain`) is reserved and must be clear; v0.4 required it set;
 * - the PDA seed: `settlement v0.5` instead of `settlement v0.4` (state PDA and order PDAs).
 * The intent layout, instruction discriminators and accounts, and the order account layout are unchanged.
 *
 * To remove once the SDK supports v0.5: bump sdk-trading-solana and sdk-config, delete this file, and in orders.ts
 * call the SDK's `findSettlementStatePda`/`findOrderPda` directly and drop `forSettlement` (search "settlement.js").
 */

/** Settlement versions sim can build orders for: the SDK's own, plus the ones this shim adds. */
export const SHIMMED = ['0.5']

/** The version the installed SDK builds orders for. */
export const sdkVersion = (env: CowEnv) => (env === 'staging' ? SOLANA_SETTLEMENT_PROGRAM_VERSION_STAGING : SOLANA_SETTLEMENT_PROGRAM_VERSION)

/** Whether sim can build orders for `version` on `env`, natively or through the shim. */
export const canBuild = (env: CowEnv, version?: string) => !version || version === sdkVersion(env) || SHIMMED.includes(version)

/** PDA derivations and intent tweaks for the settlement version deployed on `env`. */
export function settlementFor(env: CowEnv, version: string | undefined, programId: PublicKey) {
  if (!version || version === sdkVersion(env)) {
    return {
      version: sdkVersion(env),
      statePda: () => findSettlementStatePda(programId, env)[0],
      orderPda: (uid: Uint8Array) => findOrderPda(programId, uid, env)[0],
      intent: (i: SolanaOrderIntent) => i,
    }
  }
  if (!SHIMMED.includes(version)) throw new Error(`no order builder for settlement v${version}`)
  // Same padding as the program: "settlement v" + the version padded with spaces to 7 bytes.
  const seed = new TextEncoder().encode(`settlement v${version.padEnd(7, ' ')}`)
  return {
    version,
    statePda: () => PublicKey.findProgramAddressSync([seed], programId)[0],
    orderPda: (uid: Uint8Array) => PublicKey.findProgramAddressSync([seed, uid, new TextEncoder().encode('order')], programId)[0],
    intent: (i: SolanaOrderIntent): SolanaOrderIntent => ({ ...i, createdOnChain: false }),
  }
}
