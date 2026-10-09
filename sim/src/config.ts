import { readFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import type { CowEnv } from '@cowprotocol/sdk-config'

/** `solana-qos/` — sessions, tokens.json and qos.py live here. */
export const QOS_ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..', '..')
export const SIM_ROOT = resolve(QOS_ROOT, 'sim')

export const LAMPORTS_PER_SOL = 1_000_000_000n
/** SOL a trader keeps aside for fees and account rent; never planned as tradable funds. */
export const TRADER_RESERVE_SOL = 0.02
export const TX_FEE_LAMPORTS = 5_000n

/** Per-environment endpoints from solana-qos/environments.json (shared with qos.py). */
export interface Endpoints {
  label: string
  api: string
  debug: string
  solscan: string
  logs: Record<string, string> | null
  /** Overrides the SDK's settlement program id when barn runs a newer deployment than the SDK knows. */
  settlementProgram?: string
  /** Settlement program version deployed there (`0.5`): orders and PDA seeds differ between versions. */
  settlementVersion?: string
  /** Pins the account that pays for and signs sponsored creations, instead of trusting the quote's `funder`. */
  sponsor?: string
}

export function endpoints(cowEnv: CowEnv): Endpoints {
  const all = JSON.parse(readFileSync(resolve(QOS_ROOT, 'environments.json'), 'utf8'))
  const e = all[cowEnv] as Endpoints | undefined
  if (!e) throw new Error(`environments.json has no "${cowEnv}" entry`)
  return { ...e, api: process.env.COW_SOLANA_API?.trim() || e.api }
}

const LOG_KEYS = ['GRAFANA_URL', 'GRAFANA_API_TOKEN', 'GRAFANA_DATASOURCE_UID'] as const

/**
 * Whether qos.py can read VictoriaLogs (through Grafana) for this environment: the three GRAFANA_* variables,
 * exported or in solana-qos/.env.<env>. Without them the session report is basic.
 */
export function logsConfigured(cowEnv: CowEnv): boolean {
  const found = new Set(LOG_KEYS.filter((k) => process.env[k]?.trim()))
  try {
    for (const line of readFileSync(resolve(QOS_ROOT, `.env.${cowEnv}`), 'utf8').split('\n')) {
      const [k, v] = line.split('=', 2)
      if ((LOG_KEYS as readonly string[]).includes(k?.trim()) && v?.trim()) found.add(k.trim() as (typeof LOG_KEYS)[number])
    }
  } catch {
    /* no env file */
  }
  return found.size === LOG_KEYS.length
}

export const LOG_ENV_HINT = `${LOG_KEYS.join(', ')} (or solana-qos/.env.<env>)`

/** Links for what the tool prints, in the session's environment. */
export const links = (e: Endpoints) => ({
  order: (uid: string) => `${e.debug}/order/${uid}`,
  tx: (sig: string) => `${e.solscan}/tx/${sig}`,
  account: (addr: string) => `${e.solscan}/account/${addr}`,
})

export interface Env {
  mnemonic: string
  rpcUrl: string
  rpcBackupUrl?: string
  cowEnv: CowEnv
  /** Orderbook base, e.g. https://barn.api.cow.fi/solana/api */
  apiBase: string
  urls: Endpoints
}

export function loadEnv({ needMnemonic = true, cowEnv = 'staging' as CowEnv } = {}): Env {
  const mnemonic = process.env.MNEMONIC?.trim() ?? ''
  if (needMnemonic && !mnemonic) throw new Error('Set MNEMONIC (the funder is its first account).')
  // RPC_URL is the documented name; SOLANA_RPC_URL still works.
  const rpcUrl = (process.env.RPC_URL || process.env.SOLANA_RPC_URL || '').trim()
  if (!rpcUrl) throw new Error('Set RPC_URL; the public mainnet RPC is too rate-limited for a session.')
  const rpcBackupUrl = process.env.RPC_BACKUP_URL?.trim() || undefined
  const urls = endpoints(cowEnv)
  return { mnemonic, rpcUrl, rpcBackupUrl, cowEnv, apiBase: urls.api, urls }
}

export function solToLamports(sol: number): bigint {
  return BigInt(Math.round(sol * 1e9))
}

export function lamportsToSol(l: bigint | number): number {
  return Number(l) / 1e9
}
