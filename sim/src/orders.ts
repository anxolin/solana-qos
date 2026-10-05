import { Keypair, PublicKey, SystemProgram, Transaction, type TransactionInstruction } from '@solana/web3.js'
import {
  createAssociatedTokenAccountIdempotentInstruction,
  createSyncNativeInstruction,
  getAssociatedTokenAddressSync,
} from '@solana/spl-token'
import { OrderBookApi, OrderKind } from '@cowprotocol/sdk-order-book'
import { SupportedChainId, type CowEnv } from '@cowprotocol/sdk-config'
import {
  encodeOrderIntent,
  findOrderPda,
  hashOrderIntent,
  SolanaTradingSdk,
  type SolanaQuoteAndPost,
  type SolanaOrderIntent,
} from '@cowprotocol/sdk-trading-solana'
import { APP_DATA } from './appData.js'
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

/** Sum of sell amounts of a trader's open orders per mint: an SPL approve replaces, never adds. */
class AllowanceLedger {
  private open = new Map<string, Map<string, bigint>>()
  private key = (owner: PublicKey, mint: PublicKey) => `${owner.toBase58()}:${mint.toBase58()}`
  reserved(owner: PublicKey, mint: PublicKey) {
    let s = 0n
    for (const v of this.open.get(this.key(owner, mint))?.values() ?? []) s += v
    return s
  }
  add(owner: PublicKey, mint: PublicKey, uid: string, amount: bigint) {
    const k = this.key(owner, mint)
    if (!this.open.has(k)) this.open.set(k, new Map())
    this.open.get(k)!.set(uid, amount)
  }
  release(uid: string) {
    for (const m of this.open.values()) m.delete(uid)
  }
}

/**
 * Seconds added to the requested validity at quote time. `validTo` is fixed when quoting, and building,
 * signing and posting take a few seconds; the orderbook rejects an order with under 120s left.
 */
export const PLACEMENT_MARGIN_S = 10

export interface OrdersOptions {
  env: CowEnv
  apiBase: string
  /** Seconds the order must still have when it's placed (orderbook minimum 120). */
  validFor: number
  /** Seconds to wait for a fill before giving up on the order (it keeps living until its own expiry, >= 120s). */
  fillTimeout?: number
  /** Cancel on-chain when giving up, so a late fill can't happen. Off by default: the order just expires. */
  cancelOnTimeout?: boolean
  slippageBps?: number
  /** Our own orderbook calls (posting, polling) per second. */
  apiRps?: number
  /** Quotes per second through the SDK's client (its default is 5). */
  quoteRps?: number
}

export class Orders {
  readonly sdk: SolanaTradingSdk
  readonly ledger = new AllowanceLedger()
  private readonly api: RateLimiter
  /** Backend's sponsoring funder, learnt from the first quote. */
  sponsorFunder?: PublicKey

  constructor(
    private readonly rpc: Rpc,
    private readonly opts: OrdersOptions,
  ) {
    const orderBookApi = new OrderBookApi({
      chainId: SupportedChainId.SOLANA,
      env: opts.env,
      limiterOpts: { tokensPerInterval: opts.quoteRps ?? 5, interval: 'second' },
    })
    this.sdk = new SolanaTradingSdk({ env: opts.env, orderBookApi })
    this.api = new RateLimiter(opts.apiRps ?? 8)
  }

  /** Quote, then stamp our app data on the intent and re-derive the uid and order PDA from it. */
  async quote(p: Omit<PlaceParams, 'mode'>): Promise<SolanaQuoteAndPost> {
    const q = await this.sdk.getQuote({
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
      ...(this.opts.slippageBps !== undefined ? { slippageBps: this.opts.slippageBps } : {}),
    })
    // buildOrder() reuses solanaQuote's uid/PDA when given no overrides, so they must match the new intent.
    const sq = q.solanaQuote
    sq.intent = { ...sq.intent, appData: APP_DATA }
    sq.intentBytes = encodeOrderIntent(sq.intent)
    sq.uid = await hashOrderIntent(sq.intentBytes)
    ;[sq.orderPda] = findOrderPda(sq.programId, sq.uid, this.opts.env)
    return q
  }

  /**
   * Quote, build and submit one order. Sponsored orders follow the orderbook's template:
   * [create wSOL ATA, transfer, sync-native] (selling SOL) → approve → create buy ATA → CreateOrder,
   * with the backend's funder as fee payer. Self-paid orders send the same bundle with the owner paying.
   */
  async place(p: PlaceParams): Promise<Placed> {
    try {
      return await this.placeAs(p, p.mode, false)
    } catch (e) {
      // Deployments without services#4990 reject sponsored native-SOL buys; the contracts support them.
      if (p.mode === 'sponsored' && p.buy.isNative && /native SOL/i.test(errorText(e))) {
        return this.placeAs(p, 'self', true)
      }
      throw e
    }
  }

  private async placeAs(p: PlaceParams, mode: Mode, forcedSelf: boolean): Promise<Placed> {
    const q = await this.quote(p)
    const funder = q.solanaQuote.funder
    if (funder) this.sponsorFunder = funder
    if (mode === 'sponsored' && !funder) throw new Error('sponsoring is disabled on this deployment (no funder in quote)')

    const order = await q.buildOrder(undefined, mode === 'sponsored' ? { sponsor: funder } : undefined)
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
    ixs.push(
      this.sdk.approveCowProtocol({
        ownerAddress: owner,
        sellTokenAddress: sellMint,
        approveAmount: allowance,
        sellTokenProgramId: p.sell.programId,
      }),
    )
    if (!p.buy.isNative) {
      // Mandatory in the sponsored template even if the account exists, hence idempotent.
      const payer = mode === 'sponsored' ? funder! : owner
      ixs.push(
        createAssociatedTokenAccountIdempotentInstruction(payer, intent.buyTokenAccount, owner, intent.buyMint, p.buy.programId),
      )
    }
    ixs.push(order.instruction)

    let signature: string | undefined
    if (mode === 'sponsored') {
      const { blockhash, lastValidBlockHeight } = await this.rpc.call((c) => c.getLatestBlockhash('confirmed'))
      const tx = new Transaction({ feePayer: funder!, blockhash, lastValidBlockHeight }).add(...ixs)
      tx.partialSign(p.owner)
      const b64 = tx.serialize({ requireAllSignatures: false, verifySignatures: false }).toString('base64')
      await this.api.take()
      await q.postSponsoredOrder(b64)
    } else {
      signature = await this.rpc.sendAndConfirm(ixs, [p.owner])
    }
    this.ledger.add(owner, sellMint, order.orderId, intent.sellAmount)
    return {
      uid: order.orderId,
      orderPda: order.orderPda.toBase58(),
      mode,
      forcedSelf,
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
    const res = await retry(() => fetch(`${this.opts.apiBase}/v1/orders/${uid}`))
    if (res.status === 404) return null
    if (!res.ok) throw new Error(`GET order ${uid}: ${res.status}`)
    return (await res.json()) as OrderDto
  }

  async ownerOrders(owner: PublicKey): Promise<OrderDto[]> {
    await this.api.take()
    const res = await retry(() => fetch(`${this.opts.apiBase}/v1/account/${owner.toBase58()}/orders?limit=1000`))
    if (!res.ok) throw new Error(`GET account orders: ${res.status}`)
    return (await res.json()) as OrderDto[]
  }

  /**
   * Poll until the order is final, or give up after the fill timeout (`timeout`). The order is left to expire on its
   * own unless `cancelOnTimeout` is set, which cancels it on-chain first (reporting the fill if it settled meanwhile).
   */
  async waitFinal(placed: Placed, pollMs = 3000): Promise<{ status: FinalStatus; order: OrderDto | null; cancelTx?: string }> {
    const validUntil = placed.validTo * 1000 + 30_000
    const giveUpAt = Math.min(validUntil, placed.placedAt + (this.opts.fillTimeout ?? 60) * 1000)
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
    const ix = this.sdk.cancelOrder({
      ownerAddress: placed.owner.publicKey,
      orderPda: pda,
      ...(exists ? {} : { intent: placed.intent, createdByAddress: placed.owner.publicKey }),
    })
    return this.rpc.sendAndConfirm([ix], [placed.owner])
  }
}
