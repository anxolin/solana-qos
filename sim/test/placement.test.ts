import { afterEach, describe, expect, it, vi } from 'vitest'
import { Keypair, Transaction } from '@solana/web3.js'
import { decodeApproveInstruction } from '@solana/spl-token'
import { OrderKind } from '@cowprotocol/sdk-order-book'
import type { SolanaQuoteAndPost } from '@cowprotocol/sdk-trading-solana'
import { placeAndWait, runRow, type FlowContext } from '../src/flow.js'
import { RateLimiter } from '../src/limiter.js'
import { Orders, type Placed } from '../src/orders.js'
import { Rpc } from '../src/rpc.js'
import { parseScenario } from '../src/scenario.js'
import { Session } from '../src/session.js'
import { randomUUID } from 'node:crypto'
import { rmSync } from 'node:fs'
import { waitForOutstandingOrders } from '../src/runner.js'
import { resolveToken, splMint } from '../src/tokens.js'

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  vi.useRealTimers()
})

async function fixture(maxRetries = 0) {
  const rpc = new Rpc('http://unused.invalid')
  vi.spyOn(rpc, 'mintInfo').mockResolvedValue({ decimals: 6, programId: (await resolveToken(rpc, 'SOL')).programId })
  const owner = Keypair.generate()
  const sell = await resolveToken(rpc, 'SOL')
  const buy = await resolveToken(rpc, 'USDC')
  const orders = new Orders(rpc, { env: 'staging', apiBase: 'http://unused.invalid', validFor: 120, quoteRps: 2, maxRetries })
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
  it('adds a resumed live reservation to the next approval and releases it after expiry', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(0)
    const { rpc, orders, owner, buy: usdc, sell: sol } = await fixture()
    orders.ledger.add(owner.publicKey, usdc.mint, 'old-order', 10_000_000n, 300)
    const built = await orders.sdk.buildLimitOrder({
      env: 'staging', ownerAddress: owner.publicKey, sellTokenAddress: usdc.mint, buyTokenAddress: splMint(sol),
      sellAmount: 5_000_000n, buyAmount: 100_000n, kind: OrderKind.SELL,
      validTo: 600, partiallyFillable: false, appData: new Uint8Array(32),
    })
    vi.spyOn(orders, 'quote').mockResolvedValue({ solanaQuote: {}, buildOrder: async () => built } as unknown as SolanaQuoteAndPost)
    const send = vi.spyOn(rpc, 'sendAndConfirm').mockResolvedValue('tx')
    const placed = await orders.place({ owner, sell: usdc, buy: sol, kind: 'sell', amount: 5_000_000n, mode: 'self' })
    expect(decodeApproveInstruction(send.mock.calls[0][0][0]).data.amount).toBe(15_000_000n)
    expect(orders.ledger.reserved(owner.publicKey, usdc.mint)).toBe(15_000_000n)
    vi.setSystemTime(330_000)
    expect(orders.ledger.reserved(owner.publicKey, usdc.mint)).toBe(5_000_000n)
    orders.ledger.release(placed.uid)
    expect(orders.ledger.reserved(owner.publicKey, usdc.mint)).toBe(0n)
  })

  it.each([[500, 0, 1], [500, 2, 3], [429, 1, 2], [400, 2, 1]])('bounds HTTP %s quotes with maxRetries=%s at %s attempts', async (status, maxRetries, attempts) => {
    vi.useFakeTimers()
    const { orders, owner, sell, buy } = await fixture(maxRetries)
    const fetch = vi.fn(async () => new Response(JSON.stringify({ errorType: 'TestFailure' }), {
      status, headers: { 'Content-Type': 'application/json' },
    }))
    vi.stubGlobal('fetch', fetch)
    const start = Date.now()
    const result = expect(orders.quote({ owner, sell, buy, kind: 'sell', amount: 1_000_000n })).rejects.toThrow()
    await vi.runAllTimersAsync()
    await result
    expect(fetch).toHaveBeenCalledTimes(attempts)
    expect(Date.now() - start).toBeLessThanOrEqual(2000)
  })

  it.each([0, 1, 2])('does not multiply placement retries with SDK retries when maxRetries=%s', async maxRetries => {
    vi.useFakeTimers()
    const { orders, owner, sell, buy, rpc } = await fixture(maxRetries)
    const fetch = vi.fn(async () => new Response(JSON.stringify({ errorType: 'InternalServerError' }), {
      status: 500, headers: { 'Content-Type': 'application/json' },
    }))
    vi.stubGlobal('fetch', fetch)
    const ctx: FlowContext = { orders, rpc, maxRetries, acquireBufferBps: 100,
      session: { log: vi.fn(), addOrder: vi.fn() } as unknown as Session,
      log: vi.fn(), link: { order: uid => uid, tx: sig => sig } }
    const result = placeAndWait(ctx, { owner, sell, buy, kind: 'sell', amount: 1_000_000n, mode: 'sponsored' }, { row: 1, trader: 1, step: 'main' })
    await vi.runAllTimersAsync()
    expect(await result).toMatchObject({ status: 'error', attempts: maxRetries + 1 })
    expect(fetch).toHaveBeenCalledTimes(maxRetries + 1)
  })

  it.each([0, 2])('bounds sponsored POST failures with maxRetries=%s', async maxRetries => {
    vi.useFakeTimers()
    const { rpc, orders, owner, sell, buy, built } = await fixture(maxRetries)
    const post = vi.fn().mockRejectedValue(new Error('500 InternalServerError'))
    vi.spyOn(orders, 'quote').mockResolvedValue({ solanaQuote: { funder: Keypair.generate().publicKey },
      buildOrder: vi.fn().mockResolvedValue(built), postSponsoredOrder: post } as unknown as SolanaQuoteAndPost)
    vi.spyOn(rpc, 'call').mockResolvedValue({ blockhash: Keypair.generate().publicKey.toBase58(), lastValidBlockHeight: 1000 })
    const ctx: FlowContext = { orders, rpc, maxRetries, acquireBufferBps: 100,
      session: { log: vi.fn(), addOrder: vi.fn() } as unknown as Session,
      log: vi.fn(), link: { order: uid => uid, tx: sig => sig } }
    const result = placeAndWait(ctx, { owner, sell, buy, kind: 'sell', amount: 1_000_000n, mode: 'sponsored' }, { row: 1, trader: 1, step: 'main' })
    await vi.runAllTimersAsync()
    expect(await result).toMatchObject({ status: 'error', attempts: maxRetries + 1 })
    expect(post).toHaveBeenCalledTimes(maxRetries + 1)
  })

  it('shares one retry budget across placement errors and fill timeouts', async () => {
    vi.useFakeTimers()
    const { orders, rpc, owner, sell, buy, placed } = await fixture(2)
    const place = vi.spyOn(orders, 'place').mockRejectedValueOnce(new Error('placement failed')).mockResolvedValue(placed)
    vi.spyOn(orders, 'waitFinal').mockResolvedValueOnce({ status: 'timeout', order: null }).mockResolvedValue({ status: 'fulfilled', order: null })
    const ctx: FlowContext = { orders, rpc, maxRetries: 2, acquireBufferBps: 100,
      session: { log: vi.fn(), addOrder: vi.fn() } as unknown as Session,
      log: vi.fn(), link: { order: uid => uid, tx: sig => sig } }
    const result = placeAndWait(ctx, { owner, sell, buy, kind: 'sell', amount: 1_000_000n, mode: 'self' }, { row: 1, trader: 1, step: 'main' })
    await vi.runAllTimersAsync()
    expect(await result).toMatchObject({ status: 'fulfilled', attempts: 3 })
    expect(place).toHaveBeenCalledTimes(3)
  })

  it('waits before cleanup when an accepted submission loses its response', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(0)
    const { rpc, orders, owner, sell, buy, built } = await fixture()
    const session = new Session(`placement-test-${randomUUID()}`)
    try {
      vi.spyOn(orders, 'quote').mockResolvedValue({ solanaQuote: { funder: Keypair.generate().publicKey },
        buildOrder: vi.fn().mockResolvedValue(built), postSponsoredOrder: vi.fn().mockRejectedValue(new Error('Response lost after acceptance')) } as unknown as SolanaQuoteAndPost)
      vi.spyOn(rpc, 'call').mockResolvedValue({ blockhash: Keypair.generate().publicKey.toBase58(), lastValidBlockHeight: 1000 })
      const ctx: FlowContext = { rpc, orders, session, maxRetries: 0, acquireBufferBps: 100,
        log: vi.fn(), link: { order: uid => uid, tx: sig => sig } }
      const result = await placeAndWait(ctx, { owner, sell, buy, kind: 'sell', amount: 1_000_000n, mode: 'sponsored' }, { row: 1, trader: 1, step: 'main' })
      expect(result.status).toBe('error')
      expect(session.outstandingOrders()).toEqual([{ uid: built.orderId, validTo: built.intent.validTo }])
      const getOrder = vi.fn().mockResolvedValueOnce({ status: 'open' }).mockResolvedValue({ status: 'fulfilled' })
      const cleanup = vi.fn()
      const barrier = waitForOutstandingOrders(session.outstandingOrders(), getOrder).then(cleanup)
      await vi.advanceTimersByTimeAsync(2999)
      expect(cleanup).not.toHaveBeenCalled()
      await vi.advanceTimersByTimeAsync(1)
      await barrier
      expect(cleanup).toHaveBeenCalledOnce()
      session.log({ trader: 1, step: 'main', event: 'rejected', uid: built.orderId })
      expect(session.outstandingOrders()).toEqual([])
    } finally { rmSync(session.dir, { recursive: true, force: true }) }
  })
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

  it.each(['sponsored', 'self'] as const)('does not submit a %s order when its journal entry cannot be saved', async mode => {
    const { rpc, orders, owner, sell, buy, built } = await fixture()
    const funder = Keypair.generate().publicKey
    const post = vi.fn()
    vi.spyOn(orders, 'quote').mockResolvedValue({ solanaQuote: { funder },
      buildOrder: vi.fn().mockResolvedValue(built), postSponsoredOrder: post } as unknown as SolanaQuoteAndPost)
    vi.spyOn(rpc, 'call').mockResolvedValue({ blockhash: Keypair.generate().publicKey.toBase58(), lastValidBlockHeight: 1000 })
    const send = vi.spyOn(rpc, 'sendAndConfirm')
    await expect(orders.place({ owner, sell, buy, kind: 'sell', amount: 1_000_000n, mode }, () => {
      throw new Error('Journal unavailable')
    })).rejects.toThrow('Journal unavailable')
    expect(post).not.toHaveBeenCalled()
    expect(send).not.toHaveBeenCalled()
  })

  it.each([
    { message: 'InsufficientValidTo', rejected: true },
    { message: 'Network timeout posting native SOL', rejected: false },
  ])('records definite rejections without hidden placement retries: $message', async ({ message, rejected }) => {
    const { rpc, orders, owner, sell, buy, built } = await fixture()
    const funder = Keypair.generate().publicKey
    const post = vi.fn().mockRejectedValueOnce(new Error(message)).mockResolvedValue(built.orderId)
    vi.spyOn(orders, 'quote').mockResolvedValue({ solanaQuote: { funder },
      buildOrder: vi.fn().mockResolvedValue(built), postSponsoredOrder: post } as unknown as SolanaQuoteAndPost)
    vi.spyOn(rpc, 'call').mockResolvedValue({ blockhash: Keypair.generate().publicKey.toBase58(), lastValidBlockHeight: 1000 })
    const record = vi.fn()
    const placing = orders.place({ owner, sell, buy, kind: 'sell', amount: 1_000_000n, mode: 'sponsored' }, record)
    await expect(placing).rejects.toThrow(message)
    expect(post).toHaveBeenCalledOnce()
    expect(record.mock.calls.map(call => call[1])).toEqual(rejected ? ['prepared', 'rejected'] : ['prepared'])
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
    const prepared = vi.fn()
    const pending = orders.place({ owner, sell, buy, kind: 'sell', amount: 1_000_000n, mode: 'sponsored' }, prepared)
    expect(quote).not.toHaveBeenCalled()
    expect(call).not.toHaveBeenCalled()
    release()
    expect((await pending).uid).toBe(built.orderId)
    expect(post).toHaveBeenCalledTimes(1)
    expect(prepared).toHaveBeenCalledWith({ uid: built.orderId, validTo: built.intent.validTo, mode: 'sponsored',
      sellMint: splMint(sell).toBase58(), sellAmount: built.intent.sellAmount.toString() }, 'prepared')
    expect(prepared.mock.invocationCallOrder[0]).toBeLessThan(post.mock.invocationCallOrder[0])
    const tx = Transaction.from(Buffer.from(post.mock.calls[0][0], 'base64'))
    expect(tx.recentBlockhash).toBe(blockhash)
    expect(tx.feePayer?.equals(funder)).toBe(true)
    expect(tx.signatures.find((s) => s.publicKey.equals(owner.publicKey))?.signature).toBeInstanceOf(Buffer)
    expect(tx.verifySignatures(false)).toBe(true)
  })
})
