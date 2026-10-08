import { createServer, type Server } from 'node:http'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js'
import bs58 from 'bs58'
import { loadEnv } from '../src/config.js'
import { Rpc } from '../src/rpc.js'

const servers: Server[] = []
const owner = Keypair.generate()

type RpcResponse = { status?: number; result?: unknown; error?: unknown }

async function startServer(server: Server): Promise<string> {
  servers.push(server)
  await new Promise<void>((resolve, reject) => {
    server.once('error', reject)
    server.listen(0, '127.0.0.1', resolve)
  })
  return `http://127.0.0.1:${(server.address() as { port: number }).port}`
}

async function endpoint(handle: (method: string, params: unknown[]) => RpcResponse | Promise<RpcResponse>) {
  const calls: { method: string; params: unknown[] }[] = []
  const server = createServer(async (req, res) => {
    let body = ''
    for await (const chunk of req) body += chunk
    const { id, method, params } = JSON.parse(body)
    calls.push({ method, params })
    const response = await handle(method, params)
    res.writeHead(response.status ?? 200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ jsonrpc: '2.0', id, ...(response.error ? { error: response.error } : { result: response.result }) }))
  })
  return { url: await startServer(server), calls }
}

beforeEach(() => {
  vi.spyOn(console, 'warn').mockImplementation(() => {})
})

afterEach(async () => {
  vi.restoreAllMocks()
  vi.unstubAllEnvs()
  await Promise.all(servers.splice(0).map((server) => new Promise<void>((resolve) => {
    server.closeAllConnections()
    server.close(() => resolve())
  })))
})

describe('backup RPC', () => {
  it('loads an optional backup without changing the primary', () => {
    vi.stubEnv('RPC_URL', 'https://primary.example')
    vi.stubEnv('RPC_BACKUP_URL', ' https://backup.example ')
    expect(loadEnv({ needMnemonic: false })).toMatchObject({ rpcUrl: 'https://primary.example', rpcBackupUrl: 'https://backup.example' })
  })

  it('keeps primary-only configuration working', async () => {
    const primary = await endpoint(() => ({ result: { context: { slot: 1 }, value: 42 } }))
    expect(await new Rpc(primary.url, 1000).lamports(owner.publicKey)).toBe(42n)
  })

  it.each<[string, RpcResponse]>([
    ['HTTP 429', { status: 429 }],
    ['HTTP 503', { status: 503 }],
    ['unhealthy node', { error: { code: -32005, message: 'Node is unhealthy' } }],
  ])('fails over on %s and keeps the unhealthy primary out of later reads', async (_, response) => {
    const primary = await endpoint(() => response)
    const backup = await endpoint(() => ({ result: { context: { slot: 1 }, value: 42 } }))
    const rpc = new Rpc(primary.url, 1000, backup.url)
    expect(await rpc.lamports(owner.publicKey)).toBe(42n)
    expect(await rpc.lamports(owner.publicKey)).toBe(42n)
    expect(primary.calls).toHaveLength(1)
    expect(backup.calls).toHaveLength(2)
  })

  it('switches back when the backup fails', async () => {
    let primaryHealthy = false
    let backupHealthy = true
    const primary = await endpoint(() => primaryHealthy ? { result: { context: { slot: 1 }, value: 7 } } : { status: 429 })
    const backup = await endpoint(() => backupHealthy ? { result: { context: { slot: 1 }, value: 42 } } : { status: 503 })
    const rpc = new Rpc(primary.url, 1000, backup.url)
    expect(await rpc.lamports(owner.publicKey)).toBe(42n)
    primaryHealthy = true
    backupHealthy = false
    expect(await rpc.lamports(owner.publicKey)).toBe(7n)
  })

  it('moves queued concurrent reads to the backup after the primary fails', async () => {
    const primary = await endpoint(() => ({ status: 429 }))
    const backup = await endpoint(() => ({ result: { context: { slot: 1 }, value: 42 } }))
    const rpc = new Rpc(primary.url, 20, backup.url)
    expect(await Promise.all(Array.from({ length: 4 }, () => rpc.lamports(owner.publicKey)))).toEqual([42n, 42n, 42n, 42n])
    expect(primary.calls).toHaveLength(1)
  })

  it('keeps a newer cooldown when an older successful read finishes late', async () => {
    let release!: () => void
    let ready!: () => void
    const delayed = new Promise<void>((resolve) => { release = resolve })
    const started = new Promise<void>((resolve) => { ready = resolve })
    let calls = 0
    const primary = await endpoint(async () => {
      if (++calls === 1) {
        ready()
        await delayed
        return { result: { context: { slot: 1 }, value: 7 } }
      }
      return { status: 429 }
    })
    const backup = await endpoint(() => ({ result: { context: { slot: 1 }, value: 42 } }))
    const rpc = new Rpc(primary.url, 1000, backup.url)
    const earlier = rpc.lamports(owner.publicKey)
    await started
    expect(await rpc.lamports(owner.publicKey)).toBe(42n)
    release()
    expect(await earlier).toBe(7n)
    expect(await rpc.lamports(owner.publicKey)).toBe(42n)
    expect(primary.calls).toHaveLength(2)
  })

  it('does not treat a provider outage as a zero token balance', async () => {
    const primary = await endpoint(() => ({ status: 429 }))
    const backup = await endpoint(() => ({ result: { context: { slot: 1 }, value: { amount: '123', decimals: 6, uiAmount: 0.000123 } } }))
    expect(await new Rpc(primary.url, 1000, backup.url).tokenBalance(owner.publicKey, Keypair.generate().publicKey)).toBe(123n)
  })

  it('throws instead of returning zero when neither provider can read a token balance', async () => {
    const fail = () => ({ error: { code: -32005, message: 'Node is unhealthy' } })
    const primary = await endpoint(fail)
    const backup = await endpoint(fail)
    await expect(new Rpc(primary.url, 1000, backup.url).tokenBalance(owner.publicKey, Keypair.generate().publicKey)).rejects.toThrow(/unhealthy/)
    expect(primary.calls.length).toBeGreaterThan(0)
    expect(backup.calls.length).toBeGreaterThan(0)
  }, 10_000)

  it('returns zero for a missing token account without contacting the backup', async () => {
    const primary = await endpoint(() => ({ error: { code: -32602, message: 'Invalid param: could not find account' } }))
    const backup = await endpoint(() => ({ result: 'unexpected' }))
    expect(await new Rpc(primary.url, 1000, backup.url).tokenBalance(owner.publicKey, Keypair.generate().publicKey)).toBe(0n)
    expect(primary.calls).toHaveLength(1)
    expect(backup.calls).toHaveLength(0)
  })

  it('uses the backup for heavy token-account scans', async () => {
    const primary = await endpoint(() => ({ status: 503 }))
    const backup = await endpoint(() => ({ result: { context: { slot: 1 }, value: [] } }))
    expect(await new Rpc(primary.url, 1000, backup.url).tokenAccounts(owner.publicKey)).toEqual([])
    expect(backup.calls.map((c) => c.method)).toEqual(['getTokenAccountsByOwner', 'getTokenAccountsByOwner'])
  })

  it.each([
    ['drops the connection', () => createServer((req) => req.socket.destroy())],
    ['stalls before headers', () => createServer(() => {})],
    ['stalls after headers', () => createServer((_, res) => {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.flushHeaders()
    })],
  ])('fails over when the primary %s', async (_, server) => {
    const url = await startServer(server())
    const backup = await endpoint(() => ({ result: { context: { slot: 1 }, value: 42 } }))
    expect(await new Rpc(url, 1000, backup.url).lamports(owner.publicKey)).toBe(42n)
  }, 15_000)

  it('does not send a rejected transaction to the backup', async () => {
    const primary = await endpoint(() => ({ error: { code: -32002, message: 'Transaction simulation failed: insufficient funds', data: { logs: [], err: { InstructionError: [0, { Custom: 1 }] } } } }))
    const backup = await endpoint(() => ({ result: 'unexpected' }))
    const rpc = new Rpc(primary.url, 1000, backup.url)
    await expect(rpc.call((c) => c.sendRawTransaction(Buffer.from([1, 2, 3])))).rejects.toThrow(/simulation failed/)
    expect(backup.calls).toHaveLength(0)
  }, 10_000)

  it('fails over an unhealthy submission node without changing transaction bytes', async () => {
    const primary = await endpoint(() => ({ error: { code: -32005, message: 'Node is behind by 16 slots', data: { numSlotsBehind: 16 } } }))
    const expected = bs58.encode(new Uint8Array(64).fill(1))
    const backup = await endpoint(() => ({ result: expected }))
    const raw = Buffer.from([1, 2, 3])
    expect(await new Rpc(primary.url, 1000, backup.url).call((c) => c.sendRawTransaction(raw))).toBe(expected)
    expect(primary.calls[0].params[0]).toBe(backup.calls[0].params[0])
  }, 10_000)

  it('resends identical signed bytes after a lost submission response', async () => {
    const blockhash = Keypair.generate().publicKey.toBase58()
    const submitted: string[] = []
    const primary = await endpoint((method, params) => {
      if (method === 'getLatestBlockhash') return { result: { context: { slot: 1 }, value: { blockhash, lastValidBlockHeight: 1000 } } }
      submitted.push(params[0] as string)
      return { status: 503 }
    })
    const backup = await endpoint((method, params) => {
      if (method === 'sendTransaction') {
        submitted.push(params[0] as string)
        const tx = Transaction.from(Buffer.from(params[0] as string, 'base64'))
        return { result: bs58.encode(tx.signature!) }
      }
      return { result: { context: { slot: 1 }, value: [{ slot: 1, confirmations: 1, err: null, confirmationStatus: 'confirmed' }] } }
    })
    const rpc = new Rpc(primary.url, 1000, backup.url)
    const signature = await rpc.sendAndConfirm([SystemProgram.transfer({ fromPubkey: owner.publicKey, toPubkey: Keypair.generate().publicKey, lamports: 1 })], [owner])
    expect(submitted).toHaveLength(2)
    expect(submitted[0]).toBe(submitted[1])
    expect(signature).toBe(bs58.encode(Transaction.from(Buffer.from(submitted[0], 'base64')).signature!))
  })
})
