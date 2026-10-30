import { Keypair, PublicKey, SystemProgram, Transaction, type TransactionInstruction } from '@solana/web3.js'
import {
  createApproveInstruction,
  createAssociatedTokenAccountIdempotentInstruction,
  createSyncNativeInstruction,
  getAssociatedTokenAddressSync,
} from '@solana/spl-token'
import { DEFAULT_BACKOFF_OPTIONS, OrderBookApi, OrderKind } from '@cowprotocol/sdk-order-book'
import { SupportedChainId, type CowEnv } from '@cowprotocol/sdk-config'
import {
  buildCancelOrderInstruction,
  encodeOrderIntent,
  getSolanaSettlementProgramId,
  hashOrderIntent,
  SolanaTradingSdk,
  type SolanaQuoteAndPost,
  type SolanaOrderIntent,
} from '@cowprotocol/sdk-trading-solana'
import { APP_DATA, registerAppData, type AppDataStatus } from './appData.js'
import { apiHeaders } from './config.js'
import { settlementFor } from './settlement.js'
import { RateLimiter, retry, sleep } from './limiter.js'
import { WSOL_MINT, type Rpc } from './rpc.js'
import { splMint, type Token } from './tokens.js'
import type { Mode } from './scenario.js'

/** `timeout`: not filled within the fill timeout; the script stopped waiting (and cancelled it, if asked to). */
export type FinalStatus = 'fulfilled' | 'expired' | 'cancelled' | 'timeout'

export interface PlaceParams {
  owner: Keypair
  sell: Token
  buy: Token
  kind: 'sell' | 'buy'
  /** Raw amount of the sell token (sell orders) or buy token (buy orders). */
  amount: bigint
  mode: Mode
  slippageBps?: number
}

export interface Placed {
  uid: string
  orderPda: string
  mode: Mode
  /** Set when a sponsored order was rejected for buying native SOL and was placed self-paid instead. */
  forcedSelf: boolean
  sellAmount: bigint
  buyAmount: bigint
  validTo: number
  funder?: string
  signature?: string
  placedAt: number
  /** Kept to cancel the order after the fill timeout. */
  owner: Keypair
  intent: SolanaOrderIntent
}

type RecordPlacement = (order: Pick<Placed, 'uid' | 'validTo' | 'mode'> & { sellMint: string; sellAmount: string }, event: 'prepared' | 'rejected') => void

export interface OrderDto {
  uid: string
  status: string
  executedSellAmount: string
  executedBuyAmount: string
  orderPda: string
  validTo: number
  lastValidBlockHeight?: number
}

/** Error message plus any response body the SDK attached, for matching backend error descriptions. */
export function errorText(e: unknown): string {
  const err = e as { message?: string; body?: unknown; response?: unknown }
  let extra = ''
  try {
    extra = JSON.stringify(err.body ?? err.response ?? '')
  } catch {
    /* circular */
  }
  return `${err?.message ?? String(e)} ${extra}`
}

/** Tag an error with the placement stage that threw and what was sent, for the journal (see `errorInfo`). */
async function stage<T>(name: string, request: unknown, fn: () => Promise<T>): Promise<T> {
  try {
    return await fn()
  } catch (e) {
    if (e && typeof e === 'object' && !('stage' in e)) Object.assign(e, { stage: name, request })
    throw e
  }
}

/** Sum of sell amounts of a trader's open orders per mint: an SPL approve replaces, never adds. */
class AllowanceLedger {
  private open = new Map<string, Map<string, { amount: bigint; validTo?: number }>>()
  private key = (owner: PublicKey, mint: PublicKey) => `${owner.toBase58()}:${mint.toBase58()}`
  reserved(owner: PublicKey, mint: PublicKey) {
    let s = 0n
    for (const [uid, value] of this.open.get(this.key(owner, mint)) ?? []) {
      if (value.validTo !== undefined && Date.now() >= value.validTo * 1000 + 30_000) this.release(uid)
      else s += value.amount
    }
    return s
  }
  add(owner: PublicKey, mint: PublicKey, uid: string, amount: bigint, validTo?: number) {
    const k = this.key(owner, mint)
    if (!this.open.has(k)) this.open.set(k, new Map())
    this.open.get(k)!.set(uid, { amount, validTo })
  }
  release(uid: string) {
    for (const m of this.open.values()) m.delete(uid)
  }
}

/**
 * Seconds added to the requested validity at quote time. `validTo` is fixed when quoting, and building,
 * signing and posting take a few seconds, over 20s when many traders start at once (rate limits); the orderbook
 * rejects an order with under 120s left. Placement retries use the flow's configured retry budget.
 */
export const PLACEMENT_MARGIN_S = 30

export interface OrdersOptions {
  env: CowEnv
  apiBase: string
  /** Retry budget for standalone quotes; placement retries are owned by placeAndWait. */
  maxRetries?: number
  /** Seconds the order must still have when it's placed (orderbook minimum 120). */
  validFor: number
  /** Seconds to wait for a fill before giving up on the order (it keeps living until its own expiry, >= 120s). */
  fillTimeout?: number
  /** Cancel on-chain when giving up, so a late fill can't happen. Off by default: the order just expires. */
  cancelOnTimeout?: boolean
  slippageBps?: number
  /** Settlement program to target instead of the SDK's built-in id. */
  settlementProgram?: string
  /** Settlement version deployed there; a version the SDK doesn't build goes through settlement.ts. */
  settlementVersion?: string
  /** Sponsoring account to use instead of the quote's `funder` (fee payer and `createdBy` of sponsored orders). */
  sponsor?: string
  /** Called once if a quote names a different funder than `sponsor`. */
  warn?: (m: string) => void
  /** Our own orderbook calls (posting, polling) per second. */
  apiRps?: number
  /** Quotes per second (the SDK also uses its client for sponsored posts). */
  quoteRps?: number
  /** Upload our app-data pre-image when the orderbook has none (default). Off: check only, and report it missing. */
  uploadAppData?: boolean
}

export class Orders {
  readonly sdk: SolanaTradingSdk
  private readonly orderBookApi: OrderBookApi
  readonly ledger = new AllowanceLedger()
  private readonly api: RateLimiter
  private readonly quotes: RateLimiter
  /** Backend's sponsoring funder: `sponsor` if configured, otherwise learnt from the first quote. */
  sponsorFunder?: PublicKey
  private readonly sponsor?: PublicKey
  private warnedSponsor = false
  private appDataReady?: Promise<AppDataStatus>
  /** The settlement program orders are created on, and its state PDA (the SPL delegate approvals must name). */
  readonly programId: PublicKey
  readonly delegate: PublicKey
  private readonly settlement: ReturnType<typeof settlementFor>

  constructor(
    private readonly rpc: Rpc,
    private readonly opts: OrdersOptions,
  ) {
    const quoteRps = opts.quoteRps ?? 5
    const apiRps = opts.apiRps ?? 8
    if (!Number.isInteger(opts.maxRetries ?? 0) || (opts.maxRetries ?? 0) < 0) throw new Error('maxRetries must be a non-negative integer')
    const apiKey = apiHeaders()['X-API-Key']
    const orderBookApi = new OrderBookApi({
      chainId: SupportedChainId.SOLANA,
      env: opts.env,
      // With an apiKey the SDK picks its own partner URL; pin ours from environments.json instead, so the base the
      // settings table prints (and COW_SOLANA_API overrides) is the one every call actually goes to.
      ...(apiKey ? { apiKey, baseUrls: { [SupportedChainId.SOLANA]: opts.apiBase.replace(/\/api$/, '') } as Record<SupportedChainId, string> } : {}),
      // Retry at the flow level so quotes, posts, and fill timeouts share one placement budget.
      backoffOpts: { ...DEFAULT_BACKOFF_OPTIONS, numOfAttempts: 1 },
      // The SDK shares one limit for quotes and posts; allow both configured lanes.
      limiterOpts: { tokensPerInterval: quoteRps + apiRps, interval: 'second' },
    })
    this.orderBookApi = orderBookApi
    this.sdk = new SolanaTradingSdk({ env: opts.env, orderBookApi })
    this.programId = opts.settlementProgram ? new PublicKey(opts.settlementProgram) : getSolanaSettlementProgramId(opts.env)
    this.settlement = settlementFor(opts.env, opts.settlementVersion, this.programId)
    this.delegate = this.settlement.statePda()
    this.api = new RateLimiter(apiRps)
    this.quotes = new RateLimiter(quoteRps)
    this.sponsor = opts.sponsor ? new PublicKey(opts.sponsor) : undefined
    this.sponsorFunder = this.sponsor
  }

  /**
   * Register our app-data pre-image with this environment's orderbook, once per process. The upload is the first API
   * call of a run and the one environment that has never seen the hash is the one that has to take it, so a single 429
   * would otherwise end the run before any funding: rate-limit it and retry it like every other orderbook call.
   */
  ensureAppData(): Promise<AppDataStatus> {
    const upload = this.opts.uploadAppData !== false
    return this.appDataReady ??= retry(() => this.api.run(() => registerAppData(this.orderBookApi, { upload })))
  }

  /** Quote, then stamp our app data on the intent and re-derive the uid and order PDA from it. */
  async quote(p: Omit<PlaceParams, 'mode'>, maxRetries = this.opts.maxRetries ?? 0): Promise<SolanaQuoteAndPost> {
    for (let attempt = 0; ; attempt++) {
      try { return await this.quoteOnce(p) }
      catch (error) {
        if (attempt >= maxRetries || !await DEFAULT_BACKOFF_OPTIONS.retry!(error, attempt + 1)) throw error
        await sleep(Math.min(1000, 100 * 2 ** attempt))
      }
    }
  }

  private async quoteOnce(p: Omit<PlaceParams, 'mode'>): Promise<SolanaQuoteAndPost> {
    await this.quotes.take()
    const params = {
      ownerAddress: p.owner.publicKey,
      sellTokenAddress: p.sell.mint,
      sellTokenDecimals: p.sell.decimals,
      buyTokenAddress: p.buy.mint,
      buyTokenDecimals: p.buy.decimals,
      amount: p.amount,
      kind: p.kind === 'sell' ? OrderKind.SELL : OrderKind.BUY,
      sellTokenProgramId: p.sell.programId,
      buyTokenProgramId: p.buy.programId,
      validForSeconds: this.opts.validFor + PLACEMENT_MARGIN_S,
      ...((p.slippageBps ?? this.opts.slippageBps) !== undefined ? { slippageBps: p.slippageBps ?? this.opts.slippageBps } : {}),
    }
    const q = await stage('quote', { ...params, ownerAddress: params.ownerAddress.toBase58() }, () => this.sdk.getQuote(params))
    // buildOrder() reuses solanaQuote's uid/PDA when given no overrides, so they must match the new intent.
    const sq = q.solanaQuote
    sq.intent = this.settlement.intent({ ...sq.intent, appData: APP_DATA })
    sq.intentBytes = encodeOrderIntent(sq.intent)
    sq.uid = await hashOrderIntent(sq.intentBytes)
    // The CreateOrder instruction and order PDA follow solanaQuote.programId, so pointing it at our program is enough.
    sq.programId = this.programId
    sq.orderPda = this.settlement.orderPda(sq.uid)
    return q
  }

  /**
   * SOL to sell for at least `amount` of `buy`, plus `bufferBps`, priced from a small sell quote. Sells only need an
   * exact-in route, which far more tokens have than the exact-out route a buy needs.
   */
  async solFor(owner: Keypair, sol: Token, buy: Token, amount: bigint, bufferBps: number, options: { probe?: bigint; slippageBps?: number } = {}): Promise<bigint> {
    const { probe = 5_000_000n, slippageBps } = options
    const q = await this.quote({ owner, sell: sol, buy, kind: 'sell', amount: probe, slippageBps })
    const out = q.solanaQuote.intent.buyAmount // the signed minimum: a conservative price
    if (out <= 0n) throw new Error(`quote for ${buy.symbol} returned nothing`)
    return (amount * probe * BigInt(10_000 + bufferBps)) / (out * 10_000n) + 1n
  }

  /**
   * Quote, build and submit one order. Sponsored orders follow the orderbook's template:
   * [create wSOL ATA, transfer, sync-native] (selling SOL) → approve → CreateOrder, with the backend's funder as fee
   * payer. Self-paid orders send the same bundle with the owner paying, plus the buy account it opens for itself.
   */
  async place(p: PlaceParams, record?: RecordPlacement): Promise<Placed> {
    const { mode } = p
    // Wait before quoting/signing, so our API queue does not age the quote or blockhash.
    if (mode === 'sponsored') await this.api.take()
    const q = await this.quote(p, 0)
    const quoted = q.solanaQuote.funder
    if (mode === 'sponsored' && !quoted) throw new Error('sponsoring is disabled on this deployment (no funder in quote)')
    if (this.sponsor && quoted && !quoted.equals(this.sponsor) && !this.warnedSponsor) {
      this.warnedSponsor = true
      this.opts.warn?.(`quote names funder ${quoted.toBase58()}, using the configured sponsor ${this.sponsor.toBase58()}`)
    }
    const funder = this.sponsor ?? quoted
    if (funder) this.sponsorFunder = funder

    const order = await stage('build', { intent: q.solanaQuote.intent }, () =>
      q.buildOrder(undefined, mode === 'sponsored' ? { sponsor: funder } : undefined),
    )
    const { intent } = order
    const owner = p.owner.publicKey
    const sellMint = splMint(p.sell)
    const ixs: TransactionInstruction[] = []

    if (p.sell.isSol) {
      // Wrap exactly what this order sells; leftover wSOL is unwrapped by cleanup.
      const wsolAta = getAssociatedTokenAddressSync(WSOL_MINT, owner)
      ixs.push(
        createAssociatedTokenAccountIdempotentInstruction(owner, wsolAta, owner, WSOL_MINT),
        SystemProgram.transfer({ fromPubkey: owner, toPubkey: wsolAta, lamports: intent.sellAmount }),
        createSyncNativeInstruction(wsolAta),
      )
    }
    const allowance = this.ledger.reserved(owner, sellMint) + intent.sellAmount
    // Built by hand so the delegate is our program's state PDA (the SDK's helper only knows its built-in program).
    ixs.push(createApproveInstruction(intent.sellTokenAccount, this.delegate, owner, allowance, [], p.sell.programId))
    // The sponsored template rejects a bundle that creates the buy token account at all, existing or not (services
    // #5191, live on both environments since 30 Oct 2026): the settlement opens a missing one at the owner's
    // associated address itself and takes the rent out of the fill, instead of billing the funder for it. A self-paid
    // order pays its own rent anyway, so it keeps opening the account up front (idempotent when it is already there).
    if (!p.buy.isNative && mode !== 'sponsored') {
      ixs.push(
        createAssociatedTokenAccountIdempotentInstruction(owner, intent.buyTokenAccount, owner, intent.buyMint, p.buy.programId),
      )
    }
    ixs.push(order.instruction)

    let signature: string | undefined
    const prepared = { uid: order.orderId, validTo: intent.validTo, mode,
      sellMint: sellMint.toBase58(), sellAmount: intent.sellAmount.toString() }
    const submit = async <T>(fn: () => Promise<T>): Promise<T> => {
      record?.(prepared, 'prepared')
      try { return await fn() }
      catch (e) {
        // Definite rejections created no order; the flow may retry within its configured budget.
        if (/InsufficientValidTo|native SOL.*(?:not supported|unsupported)|(?:unsupported|not supported).*native SOL/i.test(errorText(e))) record?.(prepared, 'rejected')
        throw e
      }
    }
    if (mode === 'sponsored') {
      const { blockhash, lastValidBlockHeight } = await this.rpc.call((c) => c.getLatestBlockhash('confirmed'))
      const tx = new Transaction({ feePayer: funder!, blockhash, lastValidBlockHeight }).add(...ixs)
      tx.partialSign(p.owner)
      const b64 = tx.serialize({ requireAllSignatures: false, verifySignatures: false }).toString('base64')
      await submit(() => stage('post', { uid: order.orderId, intent, transaction: b64 }, () => q.postSponsoredOrder(b64)))
    } else {
      signature = await submit(() => stage('send', { uid: order.orderId, intent }, () => this.rpc.sendAndConfirm(ixs, [p.owner])))
    }
    this.ledger.add(owner, sellMint, order.orderId, intent.sellAmount)
    return {
      uid: order.orderId,
      orderPda: order.orderPda.toBase58(),
      mode,
      forcedSelf: false,
      sellAmount: intent.sellAmount,
      buyAmount: intent.buyAmount,
      validTo: intent.validTo,
      funder: funder?.toBase58(),
      signature,
      placedAt: Date.now(),
      owner: p.owner,
      intent,
    }
  }

  async getOrder(uid: string): Promise<OrderDto | null> {
    await this.api.take()
    const res = await retry(() => fetch(`${this.opts.apiBase}/v1/orders/${uid}`, { headers: apiHeaders() }))
    if (res.status === 404) return null
    if (!res.ok) throw new Error(`GET order ${uid}: ${res.status}`)
    return (await res.json()) as OrderDto
  }

  async ownerOrders(owner: PublicKey): Promise<OrderDto[]> {
    await this.api.take()
    const res = await retry(() => fetch(`${this.opts.apiBase}/v1/account/${owner.toBase58()}/orders?limit=1000`, { headers: apiHeaders() }))
    if (!res.ok) throw new Error(`GET account orders: ${res.status}`)
    return (await res.json()) as OrderDto[]
  }

  /**
   * Poll until the order is final, or give up after the fill timeout (`timeout`). The order is left to expire on its
   * own unless `cancelOnTimeout` is set, which cancels it on-chain first (reporting the fill if it settled meanwhile).
   */
  async waitFinal(placed: Placed, pollMs = 3000): Promise<{ status: FinalStatus; order: OrderDto | null; cancelTx?: string }> {
    const validUntil = placed.validTo * 1000 + 30_000
    const giveUpAt = Math.min(validUntil, placed.placedAt + (this.opts.fillTimeout ?? 90) * 1000)
    let order: OrderDto | null = null
    const final = (o: OrderDto | null) => o && ['fulfilled', 'expired', 'cancelled'].includes(o.status)
    try {
      while (Date.now() < giveUpAt) {
        order = await this.getOrder(placed.uid).catch(() => order)
        if (final(order)) return { status: order!.status as FinalStatus, order }
        await sleep(pollMs)
      }
      if (Date.now() >= validUntil || !this.opts.cancelOnTimeout) return { status: 'timeout', order }
      const cancelTx = await this.cancel(placed).catch(() => undefined)
      await sleep(5000)
      order = await this.getOrder(placed.uid).catch(() => order)
      if (order?.status === 'fulfilled') return { status: 'fulfilled', order, cancelTx }
      return { status: 'timeout', order, cancelTx }
    } finally {
      this.ledger.release(placed.uid)
    }
  }

  /**
   * Cancel on-chain, signed and paid by the owner. An order already on chain just gets its flag set; a sponsored
   * order still waiting for its creation is created already cancelled (the owner pays rent; cleanup reclaims it).
   */
  async cancel(placed: Placed): Promise<string> {
    const pda = new PublicKey(placed.orderPda)
    const exists = await this.rpc.call((c) => c.getAccountInfo(pda))
    const ix = buildCancelOrderInstruction({
      programId: this.programId,
      owner: placed.owner.publicKey,
      orderPda: pda,
      ...(exists ? {} : { intent: placed.intent, createdBy: placed.owner.publicKey }),
    })
    return this.rpc.sendAndConfirm([ix], [placed.owner])
  }
}
