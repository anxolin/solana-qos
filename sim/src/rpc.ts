import {
  Connection,
  PublicKey,
  Transaction,
  type Keypair,
  type TransactionInstruction,
} from '@solana/web3.js'
import { getAssociatedTokenAddressSync, TOKEN_2022_PROGRAM_ID, TOKEN_PROGRAM_ID } from '@solana/spl-token'
import { isRateLimit, RateLimiter, retry, sleep } from './limiter.js'

export const WSOL_MINT = new PublicKey('So11111111111111111111111111111111111111112')
export const NATIVE_SOL = new PublicKey('11111111111111111111111111111111')

/** How long every RPC call waits after any of them gets a 429. */
const RATE_LIMIT_PAUSE_MS = 2_000

/** Connection plus a shared limiter, so 25 traders polling don't trip the RPC's rate limit. */
export class Rpc {
  readonly connection: Connection
  private readonly limiter: RateLimiter
  private readonly mints = new Map<string, { decimals: number; programId: PublicKey }>()

  /** Heavy calls (token account scans) get their own, slower lane: RPCs rate-limit them per method. */
  private readonly heavy: RateLimiter

  constructor(url: string, rps = 10) {
    // web3.js's own 429 retry is noisy and short; ours backs off longer and quietly.
    this.connection = new Connection(url, { commitment: 'confirmed', disableRetryOnRateLimit: true })
    this.limiter = new RateLimiter(rps)
    this.heavy = new RateLimiter(Math.max(1, Math.floor(rps / 4)))
  }

  private callHeavy<T>(fn: (c: Connection) => Promise<T>): Promise<T> {
    return retry(() => this.heavy.run(() => this.limiter.run(() => this.throttled(fn))))
  }

  call<T>(fn: (c: Connection) => Promise<T>): Promise<T> {
    return retry(() => this.limiter.run(() => this.throttled(fn)))
  }

  /** On a 429, pause every RPC call for a moment, not just this one: otherwise the others keep the limit hit. */
  private async throttled<T>(fn: (c: Connection) => Promise<T>): Promise<T> {
    try {
      return await fn(this.connection)
    } catch (e) {
      if (isRateLimit(e)) this.limiter.pause(RATE_LIMIT_PAUSE_MS)
      throw e
    }
  }

  async lamports(owner: PublicKey): Promise<bigint> {
    return BigInt(await this.call((c) => c.getBalance(owner)))
  }

  /** Raw balance of `owner`'s associated token account for `mint`; 0 when it doesn't exist. */
  async tokenBalance(owner: PublicKey, mint: PublicKey, programId: PublicKey = TOKEN_PROGRAM_ID): Promise<bigint> {
    const ata = getAssociatedTokenAddressSync(mint, owner, false, programId)
    // Only a missing account is a zero balance; a 429 or timeout must be retried, not read as "holds nothing".
    const info = await this.call((c) =>
      c.getTokenAccountBalance(ata).catch((e) => {
        if ((e as { code?: number }).code === -32602 && /could not find account/i.test(String((e as Error).message))) return null
        throw e
      }),
    )
    return info ? BigInt(info.value.amount) : 0n
  }

  /** Decimals and token program (classic SPL or Token-2022) of a mint. */
  async mintInfo(mint: PublicKey): Promise<{ decimals: number; programId: PublicKey }> {
    const key = mint.toBase58()
    const cached = this.mints.get(key)
    if (cached) return cached
    const info = await this.call((c) => c.getParsedAccountInfo(mint))
    const data = info.value?.data
    if (!data || !('parsed' in data)) throw new Error(`${key} is not a token mint`)
    const programId = info.value!.owner
    if (!programId.equals(TOKEN_PROGRAM_ID) && !programId.equals(TOKEN_2022_PROGRAM_ID)) {
      throw new Error(`${key} is not owned by the SPL Token or Token-2022 program`)
    }
    const out = { decimals: data.parsed.info.decimals as number, programId }
    this.mints.set(key, out)
    return out
  }

  async mintDecimals(mint: PublicKey): Promise<number> {
    return (await this.mintInfo(mint)).decimals
  }


  /** Every token account the owner holds, under both token programs: mint, address, raw amount, program. */
  async tokenAccounts(owner: PublicKey) {
    const lists = await Promise.all(
      [TOKEN_PROGRAM_ID, TOKEN_2022_PROGRAM_ID].map(async (programId) => ({
        programId,
        res: await this.callHeavy((c) => c.getParsedTokenAccountsByOwner(owner, { programId })),
      })),
    )
    return lists.flatMap(({ programId, res }) => res.value.map((a) => ({
      programId,
      address: a.pubkey,
      mint: new PublicKey(a.account.data.parsed.info.mint),
      amount: BigInt(a.account.data.parsed.info.tokenAmount.amount),
      decimals: a.account.data.parsed.info.tokenAmount.decimals as number,
      /** Rent held by the account, returned to the owner when it's closed. */
      lamports: a.account.lamports,
    })))
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
    // Poll the signature every second; check expiry and resend only every few polls, to spare the RPC budget.
    for (let i = 1; ; i++) {
      const st = (await this.call((c) => c.getSignatureStatuses([sig]))).value[0]
      if (st?.err) throw new Error(`tx ${sig} failed: ${JSON.stringify(st.err)}`)
      if (st?.confirmationStatus === 'confirmed' || st?.confirmationStatus === 'finalized') return sig
      if (i % 5 === 0) {
        const height = await this.call((c) => c.getBlockHeight('confirmed'))
        if (height > lastValidBlockHeight) {
          const final = (await this.call((c) => c.getSignatureStatuses([sig], { searchTransactionHistory: true }))).value[0]
          if (final && !final.err) return sig
          throw new Error(`tx ${sig} expired before confirming`)
        }
      }
      // Resend while waiting; harmless if it already landed.
      if (i % 3 === 0) await this.call((c) => c.sendRawTransaction(raw, { skipPreflight: true, maxRetries: 0 })).catch(() => {})
      await sleep(1000)
    }
  }
}
