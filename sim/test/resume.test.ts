import { afterEach, expect, it, vi } from 'vitest'
import { appendFileSync, existsSync, rmSync, writeFileSync } from 'node:fs'
import { randomUUID } from 'node:crypto'
import { resolve } from 'node:path'
import { Session } from '../src/session.js'
import { readRun, recoverRun, saveRun, type SavedRun } from '../src/resume.js'
import type { OrderDto } from '../src/orders.js'
import { parseScenario } from '../src/scenario.js'

const sessions: Session[] = []
afterEach(() => {
  vi.useRealTimers()
  for (const session of sessions.splice(0)) rmSync(session.dir, { recursive: true, force: true })
})

function fixture(step: 'main' | 'acquire' = 'main') {
  const session = new Session(`resume-test-${randomUUID()}`)
  sessions.push(session)
  session.writeMeta({})
  const saved: SavedRun = {
    version: 1, scenarioPath: 'missing.csv', options: {}, funder: 'funder', program: 'program', api: 'api',
    scenarios: [{ id: 1, name: 'sample', path: 'missing.csv', sourceRows: [], phase: 'running', elapsed: 2,
      rows: parseScenario('trader,time,type,amount,token,other_token\n1,0,sell,0.001,SOL,USDC\n') }],
    results: [], times: {},
  }
  session.log({ row: 1, trader: 1, step, event: 'prepared', uid: 'order', validTo: 300 })
  saveRun(session, saved)
  const order = (status: string): OrderDto => ({ uid: 'order', status, validTo: 300,
    executedSellAmount: '1', executedBuyAmount: '1', orderPda: '' })
  return { session, saved, order }
}

it.each(['fulfilled', 'expired', 'cancelled'])('recovers a %s main order without replaying or double counting it', async status => {
  const { session, saved, order } = fixture()
  session.log({ row: 1, trader: 1, step: 'main', event: 'placed', uid: 'order', validTo: 300 })
  appendFileSync(resolve(session.dir, 'sim', 'journal.jsonl'), '{"event":"unfinished')
  const getOrder = vi.fn(async () => order(status))
  await recoverRun(session, saved, getOrder)
  await recoverRun(session, saved, getOrder)
  expect(getOrder).toHaveBeenCalledOnce()
  expect(saved.results).toEqual([expect.objectContaining({ row: 1, orders: 1, status: status === 'fulfilled' ? 'filled' : 'failed' })])
  expect(readRun(session).results).toEqual(saved.results)
  expect(session.outstandingOrders()).toEqual([])
})

it('leaves a row unfinished after recovering only its acquisition', async () => {
  const { session, saved, order } = fixture('acquire')
  await recoverRun(session, saved, async () => order('fulfilled'))
  expect(saved.results).toEqual([])
  expect(saved.scenarios[0].elapsed).toBe(2)
})

it('keeps a recorded failure failed even when its main order filled late', async () => {
  const { session, saved, order } = fixture()
  session.log({ row: 1, trader: 1, step: 'main', event: 'row_failed', reason: 'main timeout' })
  await recoverRun(session, saved, async () => order('fulfilled'))
  expect(saved.results[0]).toMatchObject({ status: 'failed', reason: 'main timeout' })
})

it('ignores an explicitly rejected quote before the successful fallback order', async () => {
  const { session, saved, order } = fixture()
  session.log({ row: 1, trader: 1, step: 'main', event: 'prepared', uid: 'rejected-quote', validTo: 300 })
  session.log({ row: 1, trader: 1, step: 'main', event: 'rejected', uid: 'rejected-quote' })
  const getOrder = vi.fn(async () => order('fulfilled'))
  await recoverRun(session, saved, getOrder)
  expect(getOrder).toHaveBeenCalledExactlyOnceWith('order')
  expect(saved.results[0]).toMatchObject({ status: 'filled', orders: 1 })
})

it('waits for an open order before recovering its row', async () => {
  vi.useFakeTimers()
  vi.setSystemTime(0)
  const { session, saved, order } = fixture()
  const getOrder = vi.fn().mockResolvedValueOnce(order('open')).mockResolvedValue(order('fulfilled'))
  const recovery = recoverRun(session, saved, getOrder)
  await vi.advanceTimersByTimeAsync(3000)
  await recovery
  expect(getOrder).toHaveBeenCalledTimes(2)
  expect(saved.results[0].status).toBe('filled')
})

it.each(['missing', 'unavailable', 'stale', 'stalled'])('continues without replay after expiry when status is %s, retaining the unknown outcome', async status => {
  vi.useFakeTimers()
  vi.setSystemTime(400_000)
  const { session, saved, order } = fixture()
  const getOrder = vi.fn(async () => {
    if (status === 'unavailable') throw new Error('RPC unavailable')
    if (status === 'stalled') return new Promise<OrderDto | null>(() => {})
    return status === 'missing' ? null : order('open')
  })
  const warn = vi.fn()
  const recovery = recoverRun(session, saved, getOrder, undefined, warn)
  await vi.runAllTimersAsync()
  await recovery
  expect(getOrder).toHaveBeenCalledTimes(3)
  expect(warn).toHaveBeenCalledExactlyOnceWith(expect.objectContaining({ uid: 'order', row: 1, trader: 1 }))
  expect(saved.results).toEqual([expect.objectContaining({ row: 1, status: 'failed', reason: expect.stringContaining('unknown') })])
  expect(readRun(session).unresolvedOrders).toEqual(saved.unresolvedOrders)
  expect(saved.unresolvedOrders).toHaveLength(1)
  expect(session.outstandingOrders()).toEqual([{ uid: 'order', validTo: 300 }])
  const recovered = recoverRun(session, saved, async () => order('fulfilled'))
  await recovered
  expect(saved.unresolvedOrders).toEqual([])
  expect(saved.results[0].status).toBe('failed')
  expect(session.outstandingOrders()).toEqual([])
})

it.each(['missing', 'unavailable'])('records an unexpired unknown order for cleanup deferral when the API is %s', async status => {
  vi.useFakeTimers()
  vi.setSystemTime(0)
  const { session, saved } = fixture()
  const recovery = recoverRun(session, saved, async () => {
    if (status === 'unavailable') throw new Error('API unavailable')
    return null
  })
  await vi.runAllTimersAsync()
  await recovery
  expect(Date.now()).toBeLessThanOrEqual(10_000)
  expect(saved.results[0].status).toBe('failed')
  expect(saved.unresolvedOrders).toEqual([expect.objectContaining({ uid: 'order', trader: 1, validTo: 300 })])
})

it('recovers a missing expired order on retry without reporting it as unknown', async () => {
  vi.useFakeTimers()
  vi.setSystemTime(330_000)
  const { session, saved, order } = fixture()
  const getOrder = vi.fn().mockResolvedValueOnce(null).mockResolvedValue(order('fulfilled'))
  const warn = vi.fn()
  const recovery = recoverRun(session, saved, getOrder, undefined, warn)
  await vi.runAllTimersAsync()
  await recovery
  expect(getOrder).toHaveBeenCalledTimes(2)
  expect(warn).not.toHaveBeenCalled()
  expect(saved.results[0].status).toBe('filled')
})

it('does not replay an acquisition whose outcome remains unknown after expiry', async () => {
  vi.useFakeTimers()
  vi.setSystemTime(400_000)
  const { session, saved } = fixture('acquire')
  const recovery = recoverRun(session, saved, async () => null)
  await vi.runAllTimersAsync()
  await recovery
  expect(saved.results[0]).toMatchObject({ row: 1, status: 'failed' })
})

it('bounds stalled lookups and records the wallet for cleanup deferral', async () => {
  vi.useFakeTimers()
  vi.setSystemTime(0)
  const { session, saved } = fixture()
  const recovery = recoverRun(session, saved, () => new Promise(() => {}))
  await vi.advanceTimersByTimeAsync(10_000)
  await recovery
  expect(saved.unresolvedOrders).toEqual([expect.objectContaining({ uid: 'order', reason: 'Order lookup timed out' })])
  expect(saved.results[0].status).toBe('failed')
})

it('checks stalled orders concurrently within one ten-second recovery window', async () => {
  vi.useFakeTimers()
  vi.setSystemTime(0)
  const { session, saved } = fixture()
  for (const trader of [2, 3]) session.log({ step: 'main', event: 'prepared', trader, uid: `order-${trader}`, validTo: 300 })
  const recovery = recoverRun(session, saved, () => new Promise(() => {}))
  await vi.advanceTimersByTimeAsync(10_000)
  await recovery
  expect(saved.unresolvedOrders).toHaveLength(3)
  expect(Date.now()).toBe(10_000)
})

it('does not recover another wallet while its row is still running', async () => {
  const { session, saved, order } = fixture()
  saved.scenarios[0].rows.push({ ...saved.scenarios[0].rows[0], row: 2, trader: 2 })
  session.log({ step: 'main', event: 'prepared', trader: 2, row: 2, uid: 'in-flight', validTo: 300 })
  session.log({ step: 'main', event: 'row_done', trader: 2, row: 2, orders: 1 })
  const getOrder = vi.fn(async () => order('fulfilled'))
  await recoverRun(session, saved, getOrder, undefined, undefined, new Set(['order']))
  expect(getOrder).toHaveBeenCalledExactlyOnceWith('order')
  expect(saved.results.map(row => row.row)).toEqual([1])
  expect(session.outstandingOrders()).toEqual([{ uid: 'in-flight', validTo: 300 }])
})

it('does not recheck a confirmed cancellation just because its final event says timeout', async () => {
  const { session, saved } = fixture()
  session.log({ step: 'main', trader: 1, row: 1, uid: 'order', event: 'final', status: 'timeout', cancelTx: 'confirmed-cancel' })
  const getOrder = vi.fn(async () => null)
  await recoverRun(session, saved, getOrder)
  expect(getOrder).not.toHaveBeenCalled()
  expect(saved.unresolvedOrders).toBeUndefined()
})

it('requires a supported checkpoint and writes it atomically', () => {
  const { session, saved } = fixture()
  expect(readRun(session)).toEqual(saved)
  expect(existsSync(resolve(session.dir, 'sim', 'run.json.tmp'))).toBe(false)
  writeFileSync(resolve(session.dir, 'sim', 'run.json'), '{"version":2}')
  expect(() => readRun(session)).toThrow('Unsupported')
  rmSync(resolve(session.dir, 'sim', 'run.json'))
  expect(() => readRun(session)).toThrow('no resume checkpoint')
})

it('blocks concurrent runners and refuses a stale lock until explicitly removed', () => {
  const { session } = fixture()
  const release = session.lock()
  try { expect(() => session.lock()).toThrow('already running') }
  finally { release() }
  writeFileSync(resolve(session.dir, 'sim', 'run.lock'), '2147483647')
  expect(() => session.lock()).toThrow('stale lock')
  rmSync(resolve(session.dir, 'sim', 'run.lock'))
  session.lock()()
  expect(existsSync(resolve(session.dir, 'sim', 'run.lock'))).toBe(false)
})

it('prevents competing stale-lock takeovers and leaves another owner’s lock alone', () => {
  const { session } = fixture()
  const path = resolve(session.dir, 'sim', 'run.lock')
  writeFileSync(path, '2147483647')
  const kill = vi.spyOn(process, 'kill').mockImplementationOnce(() => {
    expect(() => session.lock()).toThrow('stale lock')
    throw Object.assign(new Error('Dead process'), { code: 'ESRCH' })
  })
  try { expect(() => session.lock()).toThrow('stale lock') }
  finally { kill.mockRestore() }
  expect(existsSync(path)).toBe(true)
  rmSync(path)
  const release = session.lock()
  writeFileSync(path, `${process.pid}:another-owner`)
  release()
  expect(existsSync(path)).toBe(true)
})

it('preserves a complete prepared event without a trailing newline', async () => {
  const { session, saved, order } = fixture()
  const path = resolve(session.dir, 'sim', 'journal.jsonl')
  writeFileSync(path, JSON.stringify({ row: 1, trader: 1, step: 'main', event: 'prepared', uid: 'order', validTo: 300 }))
  const getOrder = vi.fn(async () => order('fulfilled'))
  await recoverRun(session, saved, getOrder)
  expect(getOrder).toHaveBeenCalledExactlyOnceWith('order')
  expect(saved.results[0]).toMatchObject({ row: 1, status: 'filled', orders: 1 })
})
