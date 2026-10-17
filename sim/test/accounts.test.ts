import { describe, expect, it, vi } from 'vitest'
import { Keypair, PublicKey } from '@solana/web3.js'
import { ACCOUNT_SIZE, AccountType, ExtensionType, MintLayout, TOKEN_2022_PROGRAM_ID, getAccountLen, getMintLen, getTypeLen, getAssociatedTokenAddressSync, TOKEN_PROGRAM_ID, decodeCloseAccountInstruction } from '@solana/spl-token'
import { planAccounts, prepareAccounts, selectFreshWallets } from '../src/accounts.js'
import { cleanupTrader } from '../src/cleanup.js'
import { parseScenario } from '../src/scenario.js'
import { wallets } from '../src/wallets.js'
import type { FlowContext } from '../src/flow.js'
import type { Rpc } from '../src/rpc.js'

const mnemonic = 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon about'
const usdc = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v')
const w = wallets(mnemonic)
const rows = parseScenario('trader,time,type,amount,token,other_token,mode,note\n1,0,sell,0.01,SOL,USDC,self,first\n1,1,buy,1,USDC,SOL,sponsored,repeat\n2,0,sell,1,USDC,SOL,self,acquisition')

function fixture(existing = false) {
  const connection = {
    getMultipleAccountsInfo: vi.fn(async (addresses: PublicKey[]) => addresses.map(() => existing ? { owner: TOKEN_PROGRAM_ID } : null)),
    getMinimumBalanceForRentExemption: vi.fn(async () => 2_039_280),
  }
  const rpc = {
    mintInfo: vi.fn(async () => ({ decimals: 6, programId: TOKEN_PROGRAM_ID })),
    call: async (fn: (c: typeof connection) => Promise<unknown>) => fn(connection),
    lamports: vi.fn(async () => 1_000_000_000n),
    sendAndConfirm: vi.fn(async () => 'created'),
  } as unknown as Rpc
  return { rpc, connection }
}

describe('run token accounts', () => {
  it('plans each receiving or acquisition account once, excluding native SOL', async () => {
    const { rpc } = fixture()
    const plan = await planAccounts(rpc, w, rows)
    expect(plan.accounts.map(a => a.address.toBase58())).toEqual([1, 2].map(n => getAssociatedTokenAddressSync(usdc, w.trader(n).publicKey).toBase58()))
    expect(plan.rent).toBe(4_078_560n)
    expect(plan.fees).toBe(5_000n)
    await prepareAccounts({ rpc, session: { log: vi.fn() }, log: vi.fn() } as unknown as FlowContext, w, plan)
    const [ixs, signers] = vi.mocked(rpc.sendAndConfirm).mock.calls[0]
    expect(ixs).toHaveLength(2)
    expect(ixs[0].keys[1].pubkey).toEqual(plan.accounts[0].address)
    expect(signers).toEqual([w.funder])
  })

  it('reuses existing accounts without paying setup costs', async () => {
    const { rpc } = fixture(true)
    const plan = await planAccounts(rpc, w, rows)
    expect(plan.rent).toBe(0n)
    expect(plan.fees).toBe(0n)
    await prepareAccounts({ rpc } as FlowContext, w, plan)
    expect(rpc.sendAndConfirm).not.toHaveBeenCalled()
  })

  it('keeps fresh wallets and moves occupied ones past reserved and occupied candidates', async () => {
    const { rpc, connection } = fixture()
    const occupied = new Set([1, 4].map(n => getAssociatedTokenAddressSync(usdc, w.trader(n).publicKey).toBase58()))
    connection.getMultipleAccountsInfo.mockImplementation(async addresses => addresses.map(a => occupied.has(a.toBase58()) ? { owner: TOKEN_PROGRAM_ID } : null))
    const freshRows = rows.map(row => ({ ...row }))
    const log = vi.fn()
    const replacements = await selectFreshWallets(rpc, w, freshRows, new Set([1, 2, 3]), log)
    expect([...replacements]).toEqual([[1, 5]])
    expect(freshRows.map(row => row.trader)).toEqual([5, 2, 5])
    expect(log).toHaveBeenCalledOnce()
    expect(rpc.sendAndConfirm).not.toHaveBeenCalled()
    expect((await selectFreshWallets(rpc, w, freshRows, new Set([1, 2, 3, 4, 5]), log)).size).toBe(0)
  })

  it('checks the funder can cover rent and fees before sending', async () => {
    const { rpc } = fixture()
    const plan = await planAccounts(rpc, w, rows)
    vi.mocked(rpc.lamports).mockResolvedValue(plan.rent)
    await expect(prepareAccounts({ rpc } as FlowContext, w, plan)).rejects.toThrow(/funder/i)
    expect(rpc.sendAndConfirm).not.toHaveBeenCalled()
  })

  it.each([false, true])('budgets required Token-2022 extensions with confidential fees=%s', async confidential => {
    const { rpc, connection } = fixture()
    const mint = Keypair.generate().publicKey
    const extensions = [ExtensionType.TransferFeeConfig, ...(confidential ? [ExtensionType.ConfidentialTransferMint] : [])]
    const confidentialFeeSize = 32 + 32 + 1 + 64
    const data = Buffer.alloc(getMintLen(extensions) + (confidential ? 4 + confidentialFeeSize : 0))
    MintLayout.encode({ mintAuthorityOption: 0, mintAuthority: PublicKey.default, supply: 0n, decimals: 6, isInitialized: true,
      freezeAuthorityOption: 0, freezeAuthority: PublicKey.default }, data)
    data[ACCOUNT_SIZE] = AccountType.Mint
    data.writeUInt16LE(ExtensionType.TransferFeeConfig, ACCOUNT_SIZE + 1)
    data.writeUInt16LE(getTypeLen(ExtensionType.TransferFeeConfig), ACCOUNT_SIZE + 3)
    if (confidential) {
      const offset = ACCOUNT_SIZE + 5 + getTypeLen(ExtensionType.TransferFeeConfig)
      data.writeUInt16LE(ExtensionType.ConfidentialTransferMint, offset)
      data.writeUInt16LE(getTypeLen(ExtensionType.ConfidentialTransferMint), offset + 2)
      const feeOffset = offset + 4 + getTypeLen(ExtensionType.ConfidentialTransferMint)
      data.writeUInt16LE(16, feeOffset) // ConfidentialTransferFeeConfig is absent from the JS library enum.
      data.writeUInt16LE(confidentialFeeSize, feeOffset + 2)
    }
    Object.assign(connection, { getAccountInfo: vi.fn(async () => ({ owner: TOKEN_2022_PROGRAM_ID, data })) })
    vi.mocked(rpc.mintInfo).mockResolvedValue({ decimals: 6, programId: TOKEN_2022_PROGRAM_ID })
    const rows = parseScenario(`trader,time,type,amount,token,other_token\n1,0,sell,0.01,SOL,${mint}\n`)
    const plan = await planAccounts(rpc, w, rows)
    expect(connection.getMinimumBalanceForRentExemption).toHaveBeenCalledWith(getAccountLen([ExtensionType.TransferFeeAmount, ExtensionType.ImmutableOwner]))
    expect(plan.rent).toBe(2_039_280n)
    await prepareAccounts({ rpc, session: { log: vi.fn() }, log: vi.fn() } as unknown as FlowContext, w, plan)
    const instruction = vi.mocked(rpc.sendAndConfirm).mock.calls[0][0][0]
    expect(instruction.keys[1].pubkey).toEqual(getAssociatedTokenAddressSync(mint, w.trader(1).publicKey, false, TOKEN_2022_PROGRAM_ID))
    expect(instruction.keys[5].pubkey).toEqual(TOKEN_2022_PROGRAM_ID)
  })

  it('keeps setup accounts between scenarios and closes them during final cleanup', async () => {
    const address = getAssociatedTokenAddressSync(usdc, w.trader(1).publicKey)
    const send = vi.fn<Rpc['sendAndConfirm']>(async () => 'closed')
    const ctx = {
      rpc: { tokenAccounts: async () => [{ address, mint: usdc, amount: 0n, decimals: 6, lamports: 2_039_280, programId: TOKEN_PROGRAM_ID }], lamports: async () => 0n, sendAndConfirm: send },
      orders: { programId: Keypair.generate().publicKey, ownerOrders: async () => [] },
      session: { log: vi.fn() }, log: vi.fn(), link: { tx: (s: string) => s },
      keepTokenAccounts: new Set([address.toBase58()]),
    } as unknown as FlowContext
    expect((await cleanupTrader(ctx, w, 1, 'staging')).closedAccounts).toBe(0)
    expect(send).not.toHaveBeenCalled()
    const result = await cleanupTrader({ ...ctx, keepTokenAccounts: undefined }, w, 1, 'staging')
    expect(result.closedAccounts).toBe(1)
    expect(decodeCloseAccountInstruction(send.mock.calls[0][0][0]).keys.account.pubkey).toEqual(address)
  })
})
