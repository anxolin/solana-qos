import {
  Connection,
  PublicKey,
  Transaction,
  type Keypair,
  type TransactionInstruction,
} from '@solana/web3.js'
import { getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { RateLimiter, retry, sleep } from './limiter.js'

export const WSOL_MINT = new PublicKey('So11111111111111111111111111111111111111112')
export const NATIVE_SOL = new PublicKey('11111111111111111111111111111111')

/** Connection plus a shared limiter, so 25 traders polling don't trip the RPC's rate limit. */
export class Rpc {
  readonly connection: Connection
  private readonly limiter: RateLimiter
  private readonly decimals = new Map<string, number>()

  constructor(url: string, rps = 20) {
    this.connection = new Connection(url, 'confirmed')
    this.limiter = new RateLimiter(rps)
  }

  call<T>(fn: (c: Connection) => Promise<T>): Promise<T> {
    return retry(() => this.limiter.run(() => fn(this.connection)))
  }

  async lamports(owner: PublicKey): Promise<bigint> {
    return BigInt(await this.call((c) => c.getBalance(owner)))
  }

  /** Raw balance of `owner`'s associated token account for `mint`; 0 when it doesn't exist. */
  async tokenBalance(owner: PublicKey, mint: PublicKey): Promise<bigint> {
    const ata = getAssociatedTokenAddressSync(mint, owner, false)
    const info = await this.call((c) => c.getTokenAccountBalance(ata).catch(() => null))
    return info ? BigInt(info.value.amount) : 0n
  }

  async mintDecimals(mint: PublicKey): Promise<number> {
    const key = mint.toBase58()
    const cached = this.decimals.get(key)
    if (cached !== undefined) return cached
    const info = await this.call((c) => c.getParsedAccountInfo(mint))
    const data = info.value?.data
    if (!data || !('parsed' in data)) throw new Error(`${key} is not a token mint`)
    if (!info.value!.owner.equals(TOKEN_PROGRAM_ID)) {
      throw new Error(`${key} is not a classic SPL token (sponsored orders only support the classic program)`)
    }
    const d = data.parsed.info.decimals as number
    this.decimals.set(key, d)
    return d
  }

  /** Every classic SPL token account the owner holds: mint, address, raw amount. */
  async tokenAccounts(owner: PublicKey) {
    const res = await this.call((c) => c.getParsedTokenAccountsByOwner(owner, { programId: TOKEN_PROGRAM_ID }))
    return res.value.map((a) => ({
      address: a.pubkey,
      mint: new PublicKey(a.account.data.parsed.info.mint),
      amount: BigInt(a.account.data.parsed.info.tokenAmount.amount),
      decimals: a.account.data.parsed.info.tokenAmount.decimals as number,
    }))
  }

  /**
   * Sign with `signers` (the first pays), send, and wait for confirmation. Public RPCs sometimes report a
   * false "blockhash expired", so the signature status is the source of truth.
   */
  async sendAndConfirm(ixs: TransactionInstruction[], signers: Keypair[]): Promise<string> {
    const { blockhash, lastValidBlockHeight } = await this.call((c) => c.getLatestBlockhash('confirmed'))
    const tx = new Transaction({ feePayer: signers[0].publicKey, blockhash, lastValidBlockHeight }).add(...ixs)
    tx.sign(...signers)
    const raw = tx.serialize()
    const sig = await this.call((c) => c.sendRawTransaction(raw, { skipPreflight: false, maxRetries: 3 }))
    for (;;) {
      const st = (await this.call((c) => c.getSignatureStatuses([sig]))).value[0]
      if (st?.err) throw new Error(`tx ${sig} failed: ${JSON.stringify(st.err)}`)
      if (st?.confirmationStatus === 'confirmed' || st?.confirmationStatus === 'finalized') return sig
      const height = await this.call((c) => c.getBlockHeight('confirmed'))
      if (height > lastValidBlockHeight) {
        const final = (await this.call((c) => c.getSignatureStatuses([sig], { searchTransactionHistory: true }))).value[0]
        if (final && !final.err) return sig
        throw new Error(`tx ${sig} expired before confirming`)
      }
      // Resend while waiting; harmless if it already landed.
      await this.call((c) => c.sendRawTransaction(raw, { skipPreflight: true, maxRetries: 0 })).catch(() => {})
      await sleep(1500)
    }
  }
}
