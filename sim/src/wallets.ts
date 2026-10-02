import { mnemonicToSeedSync, validateMnemonic } from 'bip39'
import { derivePath } from 'ed25519-hd-key'
import { Keypair, PublicKey, SystemProgram } from '@solana/web3.js'
import type { Rpc } from './rpc.js'
import { lamportsToSol, TX_FEE_LAMPORTS } from './config.js'
import { c } from './ui.js'

/** Phantom/Solflare/solana-keygen compatible path. Index 0 is the funder, index n is trader n. */
export const derivationPath = (index: number) => `m/44'/501'/${index}'/0'`

export function deriveKeypair(mnemonic: string, index: number): Keypair {
  if (!validateMnemonic(mnemonic)) throw new Error('MNEMONIC is not a valid BIP-39 mnemonic')
  const seed = mnemonicToSeedSync(mnemonic).toString('hex')
  return Keypair.fromSeed(derivePath(derivationPath(index), seed).key)
}

export interface Wallets {
  funder: Keypair
  trader(n: number): Keypair
}

export function wallets(mnemonic: string): Wallets {
  const cache = new Map<number, Keypair>()
  const get = (i: number) => {
    let kp = cache.get(i)
    if (!kp) cache.set(i, (kp = deriveKeypair(mnemonic, i)))
    return kp
  }
  return { funder: get(0), trader: (n) => get(n) }
}

export interface FundingLine {
  trader: number
  address: PublicKey
  balance: bigint
  topUp: bigint
}

/** How much each trader needs to reach `target` lamports; traders already at or above it get 0. */
export async function fundingPlan(rpc: Rpc, w: Wallets, traders: number[], target: bigint): Promise<FundingLine[]> {
  return Promise.all(
    traders.map(async (n) => {
      const address = w.trader(n).publicKey
      const balance = await rpc.lamports(address)
      return { trader: n, address, balance, topUp: balance >= target ? 0n : target - balance }
    }),
  )
}

/** Send the top-ups from the funder, batching up to 15 transfers per transaction. */
export async function fund(rpc: Rpc, w: Wallets, plan: FundingLine[], log: (m: string) => void) {
  const todo = plan.filter((l) => l.topUp > 0n)
  for (let i = 0; i < todo.length; i += 15) {
    const batch = todo.slice(i, i + 15)
    const ixs = batch.map((l) =>
      SystemProgram.transfer({ fromPubkey: w.funder.publicKey, toPubkey: l.address, lamports: l.topUp }),
    )
    const sig = await rpc.sendAndConfirm(ixs, [w.funder])
    log(`${c.green('✓ funded')} traders ${batch.map((l) => c.blue(`t${l.trader}`)).join(', ')} ${c.dim(`(${sig.slice(0, 12)}…)`)}`)
  }
}

/** Send everything but the fee back to the funder. Returns the lamports moved and the transaction. */
export async function sweepToFunder(rpc: Rpc, w: Wallets, n: number): Promise<{ amount: bigint; signature?: string }> {
  const kp = w.trader(n)
  const balance = await rpc.lamports(kp.publicKey)
  const amount = balance - TX_FEE_LAMPORTS
  if (amount <= 0n) return { amount: 0n }
  const signature = await rpc.sendAndConfirm(
    [SystemProgram.transfer({ fromPubkey: kp.publicKey, toPubkey: w.funder.publicKey, lamports: amount })],
    [kp],
  )
  return { amount, signature }
}

export const fmtSol = (l: bigint) => `${lamportsToSol(l).toFixed(4)} SOL`
