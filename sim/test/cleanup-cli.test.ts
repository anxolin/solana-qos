import { afterEach, expect, it, vi } from 'vitest'
import { Command } from 'commander'
import { mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { PublicKey, SystemInstruction } from '@solana/web3.js'
import { TOKEN_PROGRAM_ID } from '@solana/spl-token'

afterEach(() => {
  vi.restoreAllMocks()
  vi.unstubAllGlobals()
  vi.doUnmock('../src/config.js')
  vi.doUnmock('../src/cleanup.js')
})

it.each([
  { name: 'empty trader with tokens', balance: 0n, holdings: true, funder: 100_000_000n, topUp: 20_000_000n },
  { name: 'partly funded trader', balance: 8_000_000n, holdings: true, funder: 100_000_000n, topUp: 12_000_000n },
  { name: 'already funded trader', balance: 30_000_000n, holdings: true, funder: 0n, topUp: 0n },
  { name: 'SOL-only trader', balance: 1_000_000n, holdings: false, funder: 0n, topUp: 0n },
  { name: 'insufficient funder', balance: 0n, holdings: true, funder: 20_000_000n, topUp: 20_000_000n, fails: true },
  { name: 'fully cleaned trader', balance: 0n, holdings: false, funder: 100_000_000n, topUp: 0n },
  { name: 'zero-SOL trader with an empty token account', balance: 0n, holdings: true, empty: true, funder: 100_000_000n, topUp: 660_240n },
  { name: 'zero-SOL trader with wrapped SOL', balance: 0n, holdings: true, wrapped: true, funder: 100_000_000n, topUp: 660_240n },
  { name: 'closure fees above the wallet rent floor', balance: 650_240n, holdings: true, empty: true, funder: 100_000_000n, topUp: 10_000n },
  { name: 'insufficient funder for wallet rent and transfer fee', balance: 0n, holdings: true, empty: true, funder: 660_240n, topUp: 660_240n, fails: true },
].map(test => ({ empty: false, wrapped: false, ...test })))('funds cleanup before self-paid transactions: $name', async ({ balance, holdings, funder, topUp, fails, empty, wrapped }) => {
  vi.resetModules()
  const root = mkdtempSync(join(tmpdir(), 'cleanup-cli-'))
  const mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about'
  vi.doMock('../src/config.js', async importOriginal => ({
    ...await importOriginal<typeof import('../src/config.js')>(),
    QOS_ROOT: root, SIM_ROOT: root,
    loadEnv: () => ({ mnemonic, rpcUrl: 'https://rpc.invalid', apiBase: 'https://orderbook.invalid',
      urls: { label: 'Offline', debug: '', solscan: '' } }),
  }))
  const { wallets } = await import('../src/wallets.js')
  const { Rpc, WSOL_MINT } = await import('../src/rpc.js')
  const w = wallets(mnemonic)
  let native = balance
  vi.spyOn(Rpc.prototype, 'lamports').mockImplementation(async owner => owner.equals(w.funder.publicKey) ? funder : native)
  vi.spyOn(Rpc.prototype, 'call').mockImplementation(async fn => fn({ getMinimumBalanceForRentExemption: async () => 650_240 } as never))
  vi.spyOn(Rpc.prototype, 'tokenAccounts').mockResolvedValue(holdings ? [{
    address: PublicKey.default, mint: wrapped ? WSOL_MINT : new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'),
    amount: empty ? 0n : 1_000_000n, decimals: 6, lamports: 2_039_280, programId: TOKEN_PROGRAM_ID,
  }] : [])
  const send = vi.spyOn(Rpc.prototype, 'sendAndConfirm').mockImplementation(async (ixs, signers) => {
    expect(signers).toEqual([w.funder])
    const transfer = SystemInstruction.decodeTransfer(ixs[0])
    expect(transfer.toPubkey).toEqual(w.trader(1).publicKey)
    if (native === 0n) expect(transfer.lamports).toBeGreaterThanOrEqual(650_240n)
    native += transfer.lamports
    return 'funding-signature'
  })
  const cleanup = vi.fn(async () => {
    if (holdings) expect(native).toBeGreaterThanOrEqual(empty || wrapped ? 660_240n : 20_000_000n)
    return { trader: 1, sold: [], burned: [], leftover: [], closedAccounts: 0, reclaimed: 0, swept: 0n }
  })
  vi.doMock('../src/cleanup.js', () => ({ cleanupTrader: cleanup }))
  const network = vi.fn(() => { throw new Error('No network allowed') })
  vi.stubGlobal('fetch', network)
  const output = vi.spyOn(console, 'log').mockImplementation(() => {})
  vi.spyOn(console, 'error').mockImplementation(() => {})
  vi.spyOn(process, 'exit').mockImplementation(() => undefined as never)
  vi.spyOn(process, 'argv', 'get').mockReturnValue([process.execPath, 'sim', 'cleanup-trade-session', '--traders', '1', '--yes'])
  const parse = Command.prototype.parseAsync
  let completion: Promise<Command> | undefined
  vi.spyOn(Command.prototype, 'parseAsync').mockImplementation(function (this: Command, ...args) {
    completion = parse.apply(this, args)
    completion.catch(() => {})
    return completion
  })
  try {
    await import('../src/cli/index.js')
    if (fails) {
      await expect(completion).rejects.toThrow('Funder needs')
      expect(send).not.toHaveBeenCalled()
      expect(cleanup).not.toHaveBeenCalled()
    } else {
      await completion
      expect(cleanup).toHaveBeenCalledTimes(holdings || balance > 0n ? 1 : 0)
      expect(send).toHaveBeenCalledTimes(topUp > 0n ? 1 : 0)
      expect(native).toBe(balance + topUp)
      if (topUp > 0n) expect(output.mock.calls.flat().join('\n')).toContain('Cleanup funding')
    }
    expect(network).not.toHaveBeenCalled()
  } finally {
    rmSync(root, { recursive: true, force: true })
  }
})
