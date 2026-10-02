import { Keypair, PublicKey, SystemProgram, Transaction, type TransactionInstruction } from '@solana/web3.js'
import {
  createAssociatedTokenAccountIdempotentInstruction,
  createSyncNativeInstruction,
  getAssociatedTokenAddressSync,
} from '@solana/spl-token'
import { OrderKind } from '@cowprotocol/sdk-order-book'
import type { CowEnv } from '@cowprotocol/sdk-config'
import { SolanaTradingSdk, type SolanaQuoteAndPost } from '@cowprotocol/sdk-trading-solana'
import { RateLimiter, sleep } from './limiter.js'
import { WSOL_MINT, type Rpc } from './rpc.js'
import { splMint, type Token } from './tokens.js'
import type { Mode } from './scenario.js'

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

export interface OrdersOptions {
  env: CowEnv
  apiBase: string
  /** Order lifetime in seconds (min 120 per the orderbook). */
  validFor: number
  slippageBps?: number
  apiRps?: number
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
    this.sdk = new SolanaTradingSdk({ env: opts.env })
    this.api = new RateLimiter(opts.apiRps ?? 8)
  }

  quote(p: Omit<PlaceParams, 'mode'>): Promise<SolanaQuoteAndPost> {
    return this.sdk.getQuote({
      ownerAddress: p.owner.publicKey,
      sellTokenAddress: p.sell.mint,
      sellTokenDecimals: p.sell.decimals,
      buyTokenAddress: p.buy.mint,
      buyTokenDecimals: p.buy.decimals,
      amount: p.amount,
      kind: p.kind === 'sell' ? OrderKind.SELL : OrderKind.BUY,
      validForSeconds: this.opts.validFor,
      ...(this.opts.slippageBps !== undefined ? { slippageBps: this.opts.slippageBps } : {}),
    })
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
    ixs.push(this.sdk.approveCowProtocol({ ownerAddress: owner, sellTokenAddress: sellMint, approveAmount: allowance }))
    if (!p.buy.isNative) {
      // Mandatory in the sponsored template even if the account exists, hence idempotent.
      const payer = mode === 'sponsored' ? funder! : owner
      ixs.push(createAssociatedTokenAccountIdempotentInstruction(payer, intent.buyTokenAccount, owner, intent.buyMint))
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
    }
  }

  async getOrder(uid: string): Promise<OrderDto | null> {
    await this.api.take()
    const res = await fetch(`${this.opts.apiBase}/v1/orders/${uid}`)
    if (res.status === 404) return null
    if (!res.ok) throw new Error(`GET order ${uid}: ${res.status}`)
    return (await res.json()) as OrderDto
  }

  async ownerOrders(owner: PublicKey): Promise<OrderDto[]> {
    await this.api.take()
    const res = await fetch(`${this.opts.apiBase}/v1/account/${owner.toBase58()}/orders?limit=1000`)
    if (!res.ok) throw new Error(`GET account orders: ${res.status}`)
    return (await res.json()) as OrderDto[]
  }

  /** Poll until the order is final, or until `validTo` + 30s passes. */
  async waitFinal(placed: Placed, pollMs = 3000): Promise<{ status: FinalStatus; order: OrderDto | null }> {
    const deadline = placed.validTo * 1000 + 30_000
    let order: OrderDto | null = null
    try {
      while (Date.now() < deadline) {
        order = await this.getOrder(placed.uid).catch(() => order)
        if (order && ['fulfilled', 'expired', 'cancelled'].includes(order.status)) {
          return { status: order.status as FinalStatus, order }
        }
        await sleep(pollMs)
      }
      return { status: 'timeout', order }
    } finally {
      this.ledger.release(placed.uid)
    }
  }
}
