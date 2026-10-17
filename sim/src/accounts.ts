import { PublicKey } from '@solana/web3.js'
import {
  ACCOUNT_SIZE, ExtensionType, TOKEN_2022_PROGRAM_ID, createAssociatedTokenAccountIdempotentInstruction,
  getAccountLen, getAccountTypeOfMintType, getAssociatedTokenAddressSync, getExtensionTypes, getMint,
} from '@solana/spl-token'
import { TX_FEE_LAMPORTS } from './config.js'
import type { FlowContext } from './flow.js'
import type { Rpc } from './rpc.js'
import type { TradeRow } from './scenario.js'
import { resolveToken, type Token } from './tokens.js'
import { fmtSol, type Wallets } from './wallets.js'

interface PlannedAccount {
  trader: number
  address: PublicKey
  token: Token
  exists: boolean
}

export interface AccountPlan {
  accounts: PlannedAccount[]
  rent: bigint
  fees: bigint
}

/** Plan receiving accounts, including sell tokens that may first need an acquisition. */
export async function planAccounts(rpc: Rpc, w: Wallets, rows: TradeRow[]): Promise<AccountPlan> {
  const accounts = new Map<string, PlannedAccount>()
  const tokens = new Map<string, Token>()
  for (const row of rows) {
    const sellSymbol = row.type === 'sell' ? row.token : row.otherToken
    for (const symbol of [row.token, row.otherToken]) {
      let token = tokens.get(symbol)
      if (!token) { token = await resolveToken(rpc, symbol); tokens.set(symbol, token) }
      if (token.isNative || (token.isSol && symbol === sellSymbol)) continue
      const address = getAssociatedTokenAddressSync(token.mint, w.trader(row.trader).publicKey, false, token.programId)
      accounts.set(address.toBase58(), { trader: row.trader, address, token, exists: false })
    }
  }
  const planned = [...accounts.values()]
  for (let i = 0; i < planned.length; i += 100) {
    const batch = planned.slice(i, i + 100)
    const infos = await rpc.call(c => c.getMultipleAccountsInfo(batch.map(a => a.address)))
    infos.forEach((info, index) => {
      if (info && !info.owner.equals(batch[index].token.programId)) throw new Error(`Token account ${batch[index].address} has an unexpected owner`)
      batch[index].exists = info !== null
    })
  }
  const sizes = new Map<string, number>()
  const rents = new Map<number, bigint>()
  let rent = 0n
  const missing = planned.filter(a => !a.exists)
  for (const { token } of missing) {
    let size = sizes.get(token.mint.toBase58())
    if (size === undefined) {
      size = ACCOUNT_SIZE
      if (token.programId.equals(TOKEN_2022_PROGRAM_ID)) {
        const mint = await rpc.call(c => getMint(c, token.mint, 'confirmed', token.programId))
        // Only these mint extensions require account space on InitializeAccount; confidential extensions are opt-in.
        // https://github.com/solana-program/token-2022/blob/main/interface/src/extension/mod.rs#L1296
        const required = [ExtensionType.TransferFeeConfig, ExtensionType.NonTransferable, ExtensionType.TransferHook, ExtensionType.PausableConfig]
        const extensions = getExtensionTypes(mint.tlvData).filter(type => required.includes(type)).map(getAccountTypeOfMintType)
        size = getAccountLen([...extensions, ExtensionType.ImmutableOwner])
      }
      sizes.set(token.mint.toBase58(), size)
    }
    if (!rents.has(size)) rents.set(size, BigInt(await rpc.call(c => c.getMinimumBalanceForRentExemption(size))))
    rent += rents.get(size)!
  }
  return { accounts: planned, rent, fees: BigInt(Math.ceil(missing.length / 6)) * TX_FEE_LAMPORTS }
}

/** Move fresh-test rows to other seed-derived wallets when receiving accounts already exist. */
export async function selectFreshWallets(rpc: Rpc, w: Wallets, rows: TradeRow[], reserved: Set<number>, log: (message: string) => void) {
  const plan = await planAccounts(rpc, w, rows)
  const replacements = new Map<number, number>()
  let next = Math.max(0, ...reserved) + 1
  for (const trader of new Set(plan.accounts.filter(a => a.exists).map(a => a.trader))) {
    const traderRows = rows.filter(row => row.trader === trader)
    let candidate: number
    let candidatePlan: AccountPlan
    do {
      candidate = next++
      reserved.add(candidate)
      candidatePlan = await planAccounts(rpc, w, traderRows.map(row => ({ ...row, trader: candidate })))
    } while (candidatePlan.accounts.some(a => a.exists))
    for (const row of traderRows) row.trader = candidate
    replacements.set(trader, candidate)
    log(`Fresh-account test: trader ${trader} has an existing receiving account; using trader ${candidate} instead.`)
  }
  return replacements
}

/** The funder pays rent once; closing the accounts returns it through their trader wallets. */
export async function prepareAccounts(ctx: FlowContext, w: Wallets, plan: AccountPlan) {
  const missing = plan.accounts.filter(a => !a.exists)
  if (!missing.length) return
  if (await ctx.rpc.lamports(w.funder.publicKey) < plan.rent + plan.fees) {
    throw new Error(`The funder needs ${fmtSol(plan.rent + plan.fees)} for token-account setup rent and fees`)
  }
  for (let i = 0; i < missing.length; i += 6) {
    const batch = missing.slice(i, i + 6)
    const instructions = batch.map(a => createAssociatedTokenAccountIdempotentInstruction(
      w.funder.publicKey, a.address, w.trader(a.trader).publicKey, a.token.mint, a.token.programId,
    ))
    const signature = await ctx.rpc.sendAndConfirm(instructions, [w.funder])
    ctx.session.log({ step: 'setup', event: 'token_accounts_created', accounts: batch.map(a => ({ trader: a.trader, address: a.address.toBase58() })), signature })
    ctx.log(`Created ${batch.length} receiving token accounts: ${signature}`)
  }
}
