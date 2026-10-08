import { afterEach, describe, expect, it, vi } from 'vitest'
import { Keypair, Transaction } from '@solana/web3.js'
import { OrderKind } from '@cowprotocol/sdk-order-book'
import type { SolanaQuoteAndPost } from '@cowprotocol/sdk-trading-solana'
import { runRow, type FlowContext } from '../src/flow.js'
import { RateLimiter } from '../src/limiter.js'
import { Orders, type Placed } from '../src/orders.js'
import { Rpc } from '../src/rpc.js'
import { parseScenario } from '../src/scenario.js'
import type { Session } from '../src/session.js'
import { resolveToken, splMint } from '../src/tokens.js'

afterEach(() => {
  vi.restoreAllMocks()
  vi.useRealTimers()
})

async function fixture() {
  const rpc = new Rpc('http://unused.invalid')
  vi.spyOn(rpc, 'mintInfo').mockResolvedValue({ decimals: 6, programId: (await resolveToken(rpc, 'SOL')).programId })
  const owner = Keypair.generate()
  const sell = await resolveToken(rpc, 'SOL')
  const buy = await resolveToken(rpc, 'USDC')
  const orders = new Orders(rpc, { env: 'staging', apiBase: 'http://unused.invalid', validFor: 120, quoteRps: 2 })
  const built = await orders.sdk.buildLimitOrder({
    env: 'staging', ownerAddress: owner.publicKey, sellTokenAddress: splMint(sell), buyTokenAddress: buy.mint,
    sellAmount: 1_000_000n, buyAmount: 100_000n, kind: OrderKind.SELL,
    validTo: Math.floor(Date.now() / 1000) + 130, partiallyFillable: false, appData: new Uint8Array(32),
  })
  const placed: Placed = {
    uid: built.orderId, orderPda: built.orderPda.toBase58(), mode: 'sponsored', forcedSelf: false,
    sellAmount: built.intent.sellAmount, buyAmount: built.intent.buyAmount,
    validTo: built.intent.validTo, placedAt: Date.now(), owner, intent: built.intent,
  }
  return { rpc, owner, sell, buy, orders, built, placed }
}

describe('placement reliability', () => {
  it.each(['SOL', 'USDC'])('records a failed %s balance read and runs the next row', async (token) => {
    const { rpc, owner, orders, placed } = await fixture()
    const lamports = vi.spyOn(rpc, 'lamports').mockResolvedValue(1_000_000_000n)
    const balance = vi.spyOn(rpc, 'tokenBalance').mockResolvedValue(1_000_000_000n)
    const outage = Object.assign(new Error('fetch failed'), { cause: { code: 'ECONNRESET' } })
    if (token === 'SOL') lamports.mockRejectedValueOnce(outage)
    else balance.mockRejectedValueOnce(outage)
    const place = vi.spyOn(orders, 'place').mockResolvedValue(placed)
    vi.spyOn(orders, 'waitFinal').mockResolvedValue({ status: 'fulfilled', order: null })
    const log = vi.fn()
    const ctx: FlowContext = {
      rpc, orders, session: { log, addOrder: vi.fn() } as unknown as Session,
      maxRetries: 0, acquireBufferBps: 100, log: vi.fn(), link: { order: (uid) => uid, tx: (sig) => sig },
    }
    const other = token === 'SOL' ? 'USDC' : 'SOL'
    const rows = parseScenario(`trader,time,type,amount,token,other_token\n1,0,sell,0.001,${token},${other}\n1,1,sell,0.001,${token},${other}\n`)
    const results = []
    for (const row of rows) results.push(await runRow(ctx, owner, row))
    expect(results.map((r) => r.status)).toEqual(['failed', 'filled'])
    expect(results[0].reason).toContain('ECONNRESET')
    expect(place).toHaveBeenCalledTimes(1)
    expect(log).toHaveBeenCalledWith(expect.objectContaining({ row: 1, event: 'row_failed' }))
    expect(log).toHaveBeenCalledWith(expect.objectContaining({ row: 2, event: 'row_done' }))
  })

  it('keeps the configured quote rate before entering the SDK', async () => {
    const { orders, owner, sell, buy } = await fixture()
    vi.useFakeTimers()
    const getQuote = vi.spyOn(orders.sdk, 'getQuote').mockRejectedValue(new Error('quote unavailable'))
    const params = { owner, sell, buy, kind: 'sell' as const, amount: 1_000_000n }
    const results = Promise.allSettled([orders.quote(params), orders.quote(params), orders.quote(params)])
    await vi.advanceTimersByTimeAsync(0)
    expect(getQuote).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(499)
    expect(getQuote).toHaveBeenCalledTimes(1)
    await vi.advanceTimersByTimeAsync(1)
    expect(getQuote).toHaveBeenCalledTimes(2)
    await vi.advanceTimersByTimeAsync(500)
    expect(getQuote).toHaveBeenCalledTimes(3)
    expect((await results).every((r) => r.status === 'rejected')).toBe(true)
  })

  it('waits for the API slot before quoting or fetching the sponsored blockhash', async () => {
    const { rpc, orders, owner, sell, buy, built } = await fixture()
    const funder = Keypair.generate().publicKey
    const blockhash = Keypair.generate().publicKey.toBase58()
    let release!: () => void
    vi.spyOn(RateLimiter.prototype, 'take').mockImplementationOnce(() => new Promise<void>((resolve) => { release = resolve }))
    const post = vi.fn().mockResolvedValue(built.orderId)
    const quote = vi.spyOn(orders, 'quote').mockResolvedValue({
      solanaQuote: { funder }, buildOrder: vi.fn().mockResolvedValue(built), postSponsoredOrder: post,
    } as unknown as SolanaQuoteAndPost)
    const call = vi.spyOn(rpc, 'call').mockResolvedValue({ blockhash, lastValidBlockHeight: 1000 })
    const pending = orders.place({ owner, sell, buy, kind: 'sell', amount: 1_000_000n, mode: 'sponsored' })
    expect(quote).not.toHaveBeenCalled()
    expect(call).not.toHaveBeenCalled()
    release()
    expect((await pending).uid).toBe(built.orderId)
    expect(post).toHaveBeenCalledTimes(1)
    const tx = Transaction.from(Buffer.from(post.mock.calls[0][0], 'base64'))
    expect(tx.recentBlockhash).toBe(blockhash)
    expect(tx.feePayer?.equals(funder)).toBe(true)
    expect(tx.signatures.find((s) => s.publicKey.equals(owner.publicKey))?.signature).toBeInstanceOf(Buffer)
    expect(tx.verifySignatures(false)).toBe(true)
  })
})
