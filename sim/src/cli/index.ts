import { copyFileSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, utimesSync, writeFileSync } from 'node:fs'
import { relative, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { parseEnv } from 'node:util'
import { createInterface } from 'node:readline/promises'
import { Command, Option } from 'commander'
import type { CowEnv } from '@cowprotocol/sdk-config'
import { PublicKey } from '@solana/web3.js'
import { canBuild, SHIMMED, sdkVersion } from '../settlement.js'
import { LOG_ENV_HINT, links, loadEnv, logsConfigured, lamportsToSol, QOS_ROOT, SIM_ROOT, solToLamports, TRADER_RESERVE_SOL, TX_FEE_LAMPORTS } from '../config.js'
import { NATIVE_SOL, Rpc, WSOL_MINT } from '../rpc.js'
import { fmtSol, fund, fundingPlan, wallets } from '../wallets.js'
import { Orders } from '../orders.js'
import { Session } from '../session.js'
import { parseScenario, readScenario, sessionSlug, tradersIn, writeScenario, type TradeRow } from '../scenario.js'
import { failureKind, latestOutcomes, retryRows } from '../retry.js'
import { runRow, type FlowContext, type RowResult } from '../flow.js'
import { playScenarios } from '../runner.js'
import { combinedRows, readComposite, type CompositeScenario } from '../composite.js'
import { journal, readRun, recoverOrders, recoverRun, saveRun, type SavedRun, type UnresolvedOrder } from '../resume.js'
import { cleanupTrader } from '../cleanup.js'
import { loadUniverse, resolveToken, splMint, toRaw, fromRaw, usdPrices } from '../tokens.js'
import { generate, MIN_GAP_S, MIXES } from '../generator.js'
import { classify, listRows, loadTokenList, type ListToken } from '../tokenlist.js'
import { barnQuotes, buildRows, buildSequence, jupiterExactOut, coingeckoMints, coverage, DEFAULT_DUNE_QUERY, DEFAULT_ROUTED_QUERY, fromCsv, jupiterTokens, listMembership, loadRoutedVolume, loadVolume, mintFacts, RELEVANCE, sampleLongTail, summarize, supported, toCsv, toTokenList, withRoutedVolume, type SequenceStep, type UniverseRow } from '../universe.js'
import { errorDetail, RateLimiter, sleep } from '../limiter.js'
import { creationBudget, ORDER_CREATION_LAMPORTS } from '../budget.js'
import * as ui from '../ui.js'
import { c, stepLabel, tag } from '../ui.js'

// Optional sim/.env; exported variables win because loadEnvFile never overwrites them.
const envFile = resolve(SIM_ROOT, '.env')
const SHELL_RPC_URL = process.env.RPC_URL
if (existsSync(envFile)) process.loadEnvFile(envFile)
const PUBLIC_RPC = /api\.mainnet-beta\.solana\.com/
// Except a public RPC left exported in the shell: it rate-limits a session within minutes. A real one in sim/.env wins.
const ENV_RPC_URL = existsSync(envFile) ? parseEnv(readFileSync(envFile, 'utf8')).RPC_URL?.trim() : undefined
const RPC_FROM_ENV_FILE = Boolean(SHELL_RPC_URL && PUBLIC_RPC.test(SHELL_RPC_URL) && ENV_RPC_URL && !PUBLIC_RPC.test(ENV_RPC_URL))
if (RPC_FROM_ENV_FILE) process.env.RPC_URL = ENV_RPC_URL

const log = (m: string) => console.log(`${c.dim(new Date().toISOString().slice(11, 19))} ${m}`)

const envOption = new Option('--env <env>', 'CoW environment; prod must be passed explicitly').choices(['staging', 'prod']).default('staging')

function parseTraders(spec: string): number[] {
  return spec.split(',').flatMap((part) => {
    const [a, b] = part.split('-').map(Number)
    if (!Number.isInteger(a) || a < 1 || (b !== undefined && (!Number.isInteger(b) || b < a))) throw new Error(`bad trader spec "${part}"`)
    return b === undefined ? [a] : Array.from({ length: b - a + 1 }, (_, i) => a + i)
  })
}

async function confirm(question: string, yes: boolean) {
  if (yes) return
  const rl = createInterface({ input: process.stdin, output: process.stdout })
  const answer = await rl.question(`${question} [y/N] `)
  rl.close()
  if (!/^y(es)?$/i.test(answer.trim())) {
    console.log(c.yellow('Aborted.'))
    process.exit(1)
  }
}

/** Funding that covers the biggest planned spend plus the fee/rent reserve, with a 25% margin, rounded up to 0.01 SOL. */
export function recommendFunding(maxSpendSol: number): number {
  return Math.ceil((maxSpendSol + TRADER_RESERVE_SOL) * 1.25 * 100) / 100
}

/** Traders cleaned up at once: one per RPC call/s (at least 10). Cleanup is light on RPC since the batched lookups. */
const cleanupParallel = (rpcRps = 10) => Math.max(10, Math.floor(rpcRps))

/**
 * Clean up every trader; one trader failing (RPC rate limits, dropped connections) never stops the others. Traders
 * that fail can use the configured retry budget for another pass, without nested order retries.
 */
async function cleanupAll(ctx: FlowContext, w: ReturnType<typeof wallets>, traders: number[], env: CowEnv, rpcRps?: number) {
  const done = new Map<number, Awaited<ReturnType<typeof cleanupTrader>>>()
  const deferred = new Set<number>()
  let todo = traders
  for (let pass = 1; pass <= ctx.maxRetries + 1 && todo.length; pass++) {
    if (pass > 1) {
      const retryUids = new Set(journal(ctx.session).filter(event => event.uid && todo.includes(event.trader)).map(event => event.uid!))
      const unresolved = await recoverOrders(ctx.session, uid => ctx.orders.getOrder(uid),
        order => ctx.orders.ledger.release(order.uid), undefined, retryUids)
      for (const order of unresolved) {
        if (Date.now() < order.validTo * 1000 + 30_000) deferred.add(order.trader)
      }
      todo = todo.filter(trader => !deferred.has(trader))
      if (!todo.length) break
      ctx.log(ui.warn(`Cleanup didn't finish for ${todo.length} traders, retrying in 20s: ${todo.map((n) => `t${n}`).join(', ')}`))
      await sleep(20_000)
    }
    const failed: number[] = []
    await pool(todo, cleanupParallel(rpcRps), async (n) => {
      try {
        const result = await cleanupTrader({ ...ctx, maxRetries: 0 }, w, n, env, pass === ctx.maxRetries + 1)
        done.set(n, result)
        if (result.leftover.length) failed.push(n)
      } catch (e) {
        failed.push(n)
        ctx.log(`  ${c.blue(`t${n}`)} ${c.blue('cleanup')}: ${ui.error(errorDetail(e).slice(0, 200))}`)
        ctx.session.log({ trader: n, step: 'cleanup', event: 'cleanup_failed', pass, error: errorDetail(e) })
      }
    })
    todo = failed.sort((a, b) => a - b)
  }
  const unfinished = [...new Set([...todo, ...deferred])].sort((a, b) => a - b)
  if (unfinished.length) {
    ctx.log(ui.warn(`Cleanup still unfinished for ${unfinished.length} traders. Re-run: pnpm sim cleanup-trade-session --traders ${unfinished.join(',')}`))
  }
  return [...done.values()]
}

/** Rough wall-clock estimate in minutes: a trader's rows run back to back, then cleanup runs in parallel batches. */
function estimateDuration(rows: TradeRow[], traders: number, rpcRps?: number) {
  const ORDER_S = 30 // measured: orders fill in ~6-47s, ~25s on average
  const ROW_S = ORDER_S * 1.3 // some rows also acquire their sell token first
  const CLEANUP_BATCH_S = 45 // a batch of traders sells (in parallel), closes, reclaims and sweeps
  const busyUntil = new Map<number, number>()
  for (const r of rows) busyUntil.set(r.trader, Math.max(r.time, busyUntil.get(r.trader) ?? 0) + ROW_S)
  const trading = Math.max(...busyUntil.values())
  const total = 30 + trading + Math.ceil(traders / cleanupParallel(rpcRps)) * CLEANUP_BATCH_S
  const min = (sec: number) => Math.max(1, Math.round(sec / 60))
  return { total: min(total), trading: min(trading) }
}

/** Aligned `key  value` lines, one setting per line. */
function printSettings(title: string, entries: [string, string][]) {
  const width = Math.max(...entries.map(([k]) => k.length))
  console.log(`\n${c.bold(title)}`)
  for (const [k, v] of entries) console.log(`  ${c.dim(k.padEnd(width))}  ${v}`)
  console.log('')
}

/** Run `fn` over items with at most `n` in flight. */
async function pool<T, R>(items: T[], n: number, fn: (x: T) => Promise<R>): Promise<R[]> {
  const out: R[] = []
  let i = 0
  await Promise.all(
    Array.from({ length: Math.min(n, items.length) }, async () => {
      while (i < items.length) {
        const idx = i++
        out[idx] = await fn(items[idx])
      }
    }),
  )
  return out
}

interface RateOpts {
  quoteRps?: number
  apiRps?: number
  rpcRps?: number
}

function context(
  opts: { env: CowEnv; maxRetries?: number; orderValidity?: number; fillTimeout?: number; cancelOnTimeout?: boolean; slippageBps?: number } & RateOpts,
  session: Session,
) {
  const env = loadEnv({ cowEnv: opts.env })
  checkSettlementVersion(opts.env, env.urls.settlementVersion)
  const rpc = new Rpc(env.rpcUrl, opts.rpcRps ?? 10, env.rpcBackupUrl)
  const orders = new Orders(rpc, {
    env: opts.env,
    apiBase: env.apiBase,
    maxRetries: opts.maxRetries ?? 0,
    validFor: opts.orderValidity ?? 120,
    fillTimeout: opts.fillTimeout ?? 90,
    cancelOnTimeout: Boolean(opts.cancelOnTimeout),
    slippageBps: opts.slippageBps,
    quoteRps: opts.quoteRps,
    settlementProgram: env.urls.settlementProgram,
    settlementVersion: env.urls.settlementVersion,
    sponsor: env.urls.sponsor,
    warn: (m) => log(ui.warn(m)),
    apiRps: opts.apiRps,
  })
  const ctx: FlowContext = { link: links(env.urls), rpc, orders, session, maxRetries: opts.maxRetries ?? 0, acquireBufferBps: 300, log }
  return { env, rpc, orders, ctx, w: wallets(env.mnemonic) }
}

/** Read-only creation budget; scenario estimates are separate so each includes its own cleanup. */
async function checkCreationBudget(
  run: ReturnType<typeof context>,
  scenarios: { name: string; rows: TradeRow[] }[],
  opts: { maxRetries: number; cleanup: boolean; maxCreationSol?: number },
) {
  const estimates = scenarios.map(({ name, rows }) => ({ name, ...creationBudget(rows, opts.maxRetries, opts.cleanup) }))
  const total = estimates.reduce((sum, estimate) => sum + estimate.total, 0n)
  const sponsored = estimates.reduce((sum, estimate) => sum + estimate.sponsoredCost, 0n)
  const self = total - sponsored
  let sponsor = run.orders.sponsorFunder
  if (sponsored && !sponsor) {
    const row = scenarios.flatMap((s) => s.rows).find((r) => r.mode === 'sponsored')!
    const t = await resolveToken(run.rpc, row.token)
    const o = await resolveToken(run.rpc, row.otherToken)
    const [sell, buy] = row.type === 'sell' ? [t, o] : [o, t]
    const quote = await run.orders.quote({ owner: run.w.trader(row.trader), sell, buy, kind: row.type, amount: toRaw(row.amount, row.type === 'sell' ? sell.decimals : buy.decimals) })
    sponsor = quote.solanaQuote.funder
  }
  const sponsorBalance = sponsor && sponsored ? await run.rpc.lamports(sponsor) : undefined
  console.log(`\n${c.bold('Order creation budget')} ${c.dim(`(${fmtSol(ORDER_CREATION_LAMPORTS)} each, before rent refunds)`)}`)
  for (const estimate of estimates) {
    console.log(`  ${estimate.name}: ${estimate.main} row attempts + ${estimate.acquisitions} possible acquisitions + ${estimate.cleanup} cleanup orders = ${fmtSol(estimate.total)}`)
  }
  console.log(`  Total: ${c.bold(fmtSol(total))}; sponsor ${fmtSol(sponsored)}, traders ${fmtSol(self)}`)
  if (sponsorBalance !== undefined) console.log(`  Sponsor ${sponsor!.toBase58()}: ${fmtSol(sponsorBalance)} available`)
  console.log(c.dim('  Estimate only: trade amounts, other transaction fees, existing unrelated tokens and extra cleanup passes are excluded. Solver wallets are not checked.'))
  const issues: string[] = []
  if (sponsored && !sponsor) issues.push('No sponsoring funder is available for the planned sponsored creations')
  if (sponsorBalance !== undefined && sponsorBalance < sponsored) issues.push(`Sponsor needs an estimated ${fmtSol(sponsored)}, but has ${fmtSol(sponsorBalance)}`)
  if (opts.maxCreationSol !== undefined) {
    if (!Number.isFinite(opts.maxCreationSol) || opts.maxCreationSol < 0) throw new Error('--max-creation-sol must be a non-negative number')
    if (total > solToLamports(opts.maxCreationSol)) issues.push(`Estimated creation cost ${fmtSol(total)} exceeds --max-creation-sol ${opts.maxCreationSol}`)
  }
  return { estimates, issues, sponsor, sponsorBalance, sponsored }
}

/** Quote every row without trading: routes, and the SOL each trader is expected to spend. */
async function dryRun(ctx: FlowContext, w: ReturnType<typeof wallets>, rows: TradeRow[], fundingSol: number) {
  const spend = new Map<number, bigint>()
  const holdings = new Map<string, bigint>() // `${trader}:${mint}` -> raw
  const problems: string[] = []
  const sol = await resolveToken(ctx.rpc, 'SOL')
  for (const r of rows) {
    const owner = w.trader(r.trader)
    try {
      const t = await resolveToken(ctx.rpc, r.token)
      const o = await resolveToken(ctx.rpc, r.otherToken)
      const [sell, buy] = r.type === 'sell' ? [t, o] : [o, t]
      const amount = toRaw(r.amount, r.type === 'sell' ? sell.decimals : buy.decimals)
      const q = await ctx.orders.quote({ owner, sell, buy, kind: r.type, amount })
      const { sellAmount, buyAmount } = q.solanaQuote.intent
      const key = (m: string) => `${r.trader}:${m}`
      if (sell.isSol) spend.set(r.trader, (spend.get(r.trader) ?? 0n) + sellAmount)
      else {
        const have = holdings.get(key(splMint(sell).toBase58())) ?? 0n
        if (have < sellAmount) {
          const acq = await ctx.orders.quote({ owner, sell: sol, buy: sell, kind: 'buy', amount: sellAmount - have })
          spend.set(r.trader, (spend.get(r.trader) ?? 0n) + acq.solanaQuote.intent.sellAmount)
          holdings.set(key(splMint(sell).toBase58()), sellAmount)
        }
        holdings.set(key(splMint(sell).toBase58()), (holdings.get(key(splMint(sell).toBase58())) ?? 0n) - sellAmount)
      }
      if (!buy.isSol) holdings.set(key(splMint(buy).toBase58()), (holdings.get(key(splMint(buy).toBase58())) ?? 0n) + buyAmount)
      log(`${tag(r.row, r.trader)} ${c.green('✓')} ${ui.kind(r.type)} ${c.bold(`${fromRaw(sellAmount, sell.decimals).toPrecision(5)} ${sell.symbol}`)} → ${c.bold(`${fromRaw(buyAmount, buy.decimals).toPrecision(5)} ${buy.symbol}`)}`)
    } catch (e) {
      problems.push(`#${r.row} t${r.trader} ${r.type} ${r.amount} ${r.token}/${r.otherToken}: ${errorDetail(e)}`)
    }
  }
  console.log(`\n${c.bold('Expected SOL spend per trader')} ${c.dim('(wraps + acquisitions)')}`)
  const budget = fundingSol - TRADER_RESERVE_SOL
  for (const [t, l] of [...spend].sort((a, b) => a[0] - b[0])) {
    const s = lamportsToSol(l)
    console.log(`  ${c.blue(`trader ${String(t).padStart(2)}`)}  ${s > budget ? c.red(`${s.toFixed(4)} SOL  over budget (${budget.toFixed(3)} after reserve)`) : `${s.toFixed(4)} SOL`}`)
  }
  const maxSpend = Math.max(0, ...[...spend.values()].map((l) => lamportsToSol(l)))
  const perTrader = recommendFunding(maxSpend)
  const traders = new Set(rows.map((r) => r.trader)).size
  console.log(`\n${c.bold('Recommended funding')}`)
  console.log(`  ${c.dim('Per trader')}  ${c.green(`${perTrader} SOL`)} ${c.dim(`(max spend ${maxSpend.toFixed(4)} + ${TRADER_RESERVE_SOL} reserve, +25% margin)`)}`)
  console.log(`  ${c.dim('Total     ')}  ${c.bold(`${(perTrader * traders).toFixed(2)} SOL`)} ${c.dim(`for ${traders} traders; most of it comes back at cleanup`)}`)
  console.log(`  ${c.dim('Run with  ')}  --sol-funding-per-trader ${perTrader}`)
  if (problems.length) console.log(`\n${ui.error(`${problems.length} rows can't be quoted:`)}\n  ${problems.map((p) => c.red(p)).join('\n  ')}`)
  else console.log(`\n${ui.ok('Every row quotes.')}`)
}

const program = new Command().name('sim').description('Scripted CoW Protocol Solana trade sessions for solana-qos')

program
  .command('check-budget')
  .description('Estimate creation costs across scenarios and read funder balances; never trade')
  .argument('<scenarios...>', 'scenario CSV files, in run order')
  .option('--max-retries <n>', 'order retries to include in the estimate', (v) => parseInt(v, 10), 0)
  .option('--max-creation-sol <sol>', 'fail if estimated creation costs exceed this amount', Number)
  .option('--no-cleanup', 'exclude cleanup orders from the estimate')
  .addOption(envOption)
  .action(async (paths: string[], opts) => {
    const run = context(opts, new Session('budget-check'))
    console.log(`Test funder ${run.w.funder.publicKey.toBase58()}: ${fmtSol(await run.rpc.lamports(run.w.funder.publicKey))}`)
    const budget = await checkCreationBudget(run, paths.map((name) => ({ name, rows: readScenario(name) })), opts)
    if (budget.issues.length) throw new Error(budget.issues.join('; '))
  })

function sessionCommand(name: string) {
  return program.command(name)
    .option('--session <name>', 'session folder name under solana-qos/sessions')
    .option('--sol-funding-per-trader <sol>', 'SOL each trader is topped up to', parseFloat, 0.1)
    .option('--max-total-sol <sol>', 'refuse to fund more than this per scenario', parseFloat, 3)
    .option('--max-creation-sol <sol>', 'refuse a run whose estimated creation costs exceed this amount', Number)
    .option('--max-retries <n>', 'retry failed quotes, placement or fills (0 = no retries)', Number, 0)
    .option('--order-validity <s>', 'seconds an order has left when placed (orderbook minimum 120)', (v) => {
      const n = parseInt(v, 10)
      if (!(n >= 120)) throw new Error('--order-validity must be at least 120 seconds (the orderbook rejects shorter orders)')
      return n
    }, 120)
    .option('--fill-timeout <s>', 'seconds to wait for a fill before giving up on the order (it then expires on its own)', (v) => parseInt(v, 10), 90)
    .option('--cancel-on-timeout', 'cancel the order on-chain when giving up, so it cannot fill late')
    .option('--slippage-bps <bps>', 'override the quoted slippage', (v) => parseInt(v, 10))
    .option('--quote-rps <n>', 'quotes per second (raise for stress tests)', parseFloat, 5)
    .option('--api-rps <n>', 'other orderbook calls per second: posting, polling', parseFloat, 8)
    .option('--rpc-rps <n>', 'Solana RPC calls per second (your RPC plan is the limit)', parseFloat, 10)
    .option('--dry-run', 'quote every row and print the funding plan, without trading')
    .option('--allow-public-rpc', 'trade on the public mainnet RPC anyway (it rate-limits sessions; set RPC_URL to a paid one)')
    .option('--no-cleanup', 'leave tokens and SOL in the trader wallets')
    .option('--defer-cleanup', 'continue after unfinished cleanup and retry at the end (now the default)')
    .option('--report', 'run qos.py fetch + report on the session afterwards')
    .option('-y, --yes', 'skip the confirmation prompt')
    .addOption(envOption)
}

async function runSession(scenarioPath: string, opts: any, composite?: ReturnType<typeof readComposite>, resume?: SavedRun) {
  const scenarios: CompositeScenario[] = resume?.scenarios ?? composite?.scenarios ?? [{
    id: 1, name: sessionSlug(scenarioPath), path: scenarioPath, rows: readScenario(scenarioPath), sourceRows: [],
  }]
  const rows = composite ? combinedRows(scenarios, composite.breakSeconds) : scenarios[0].rows
  const traders = tradersIn(rows)
  const stamp = new Date().toISOString().slice(0, 16).replace(/[T:]/g, '-')
  const slug = composite ? `composite-${composite.solver.replace(/[^a-zA-Z0-9_-]+/g, '-')}-run` : sessionSlug(scenarioPath)
  const session = new Session(opts.session ?? `${stamp}-${slug}`)
  if (!resume && !opts.dryRun && existsSync(resolve(session.dir, 'sim', 'journal.jsonl'))) {
    throw new Error(`Session ${session.name} already exists. Use resume-session ${session.name}, or choose a new --session.`)
  }
  const run = context(opts, session)
  const { env, rpc, orders, ctx, w } = run
  const warnUnresolved = (order: UnresolvedOrder) => {
    if (order.sellMint && order.sellAmount) {
      const mint = new PublicKey(order.sellMint)
      orders.ledger.add(w.trader(order.trader).publicKey, mint.equals(NATIVE_SOL) ? WSOL_MINT : mint,
        order.uid, BigInt(order.sellAmount), order.validTo)
    }
    log(ui.warn(`${tag(order.row, order.trader)} ${order.step}: outcome unknown; continuing without replay. ${order.reason}`))
    log(ui.warn(`Order ${order.uid}: ${ctx.link.order(order.uid)}`))
  }
  const liveUnresolvedOrders = (saved: SavedRun, trader: number) => (saved.unresolvedOrders ?? [])
    .filter(order => order.trader === trader && Date.now() < order.validTo * 1000 + 30_000)
  const recoverOutstanding = async (saved: SavedRun, scenarioLog: (message: string) => void, traders?: ReadonlySet<number>) => {
    const uids = traders && new Set(journal(session).filter(event => event.uid && traders.has(event.trader)).map(event => event.uid!))
    const outstanding = session.outstandingOrders()
    const outstandingUids = new Set(outstanding.map(order => order.uid))
    saved.unresolvedOrders = saved.unresolvedOrders?.filter(order => outstandingUids.has(order.uid))
    const pending = outstanding.filter(order => !uids || uids.has(order.uid))
    if (!pending.length) return
    scenarioLog(c.dim(`Checking ${pending.length} outstanding orders before continuing`))
    await recoverRun(session, saved, uid => orders.getOrder(uid), order => orders.ledger.release(order.uid), warnUnresolved, new Set(pending.map(order => order.uid)))
  }
  if (resume && (resume.funder !== w.funder.publicKey.toBase58() || resume.program !== orders.programId.toBase58() || resume.api !== env.apiBase)) {
    throw new Error('Resume requires the original funder, settlement program, and orderbook. Check MNEMONIC and environment settings.')
  }
  if (PUBLIC_RPC.test(env.rpcUrl) && !opts.dryRun && !opts.allowPublicRpc) {
    throw new Error(`RPC_URL is the public mainnet RPC (${rpcSource()}): it rate-limits a session within minutes, so rows fail with 429s. ` +
      'Put your Alchemy URL in sim/.env as RPC_URL (and `unset RPC_URL` in this shell), or pass --allow-public-rpc.')
  }
  let release: (() => void) | undefined
  try {
    if (resume) {
      await confirm(`Resume ${session.name} on ${opts.env}, checking outstanding orders before continuing${opts.deferCleanupScenario === undefined ? '' : ' and leaving the current scenario cleanup for later'}?`, opts.yes)
      release = session.lock()
      if (JSON.stringify(readRun(session)) !== JSON.stringify(resume)) throw new Error('Session changed while confirming. Run resume-session again.')
      log('Checking previously submitted orders before continuing…')
      await recoverRun(session, resume, uid => orders.getOrder(uid), recovered => {
        orders.ledger.release(recovered.uid)
        const scenario = composite && scenarios.find(s => s.rows.some(row => row.trader === recovered.trader))
        log(`${scenario ? `[${scenario.name}] ` : ''}${tag(recovered.row, recovered.trader)} ${stepLabel(recovered.step)}: ${ui.status(recovered.status)} ${c.dim('(recovered)')}`)
        log(`      ${c.dim('🐞')} ${c.cyan(ctx.link.order(recovered.uid))}`)
      }, warnUnresolved)
      session.log({ step: 'setup', event: 'resumed', completedRows: resume.results.length })
      session.writeMeta({ resumes: [...(session.readMeta().resumes as unknown[] ?? []), {
        at: new Date().toISOString(), checkpoint: resume.scenarios.find(s => s.phase === 'running')?.checkpointAt,
      }] })
    }
    const target = solToLamports(opts.solFundingPerTrader)
    const unfinished = (scenario: CompositeScenario) => scenario.rows.filter(row => !resume?.results.some(result => result.row === row.row))
    const plan = await fundingPlan(rpc, w, resume ? tradersIn(scenarios.flatMap(unfinished)) : traders, target)
    const scenarioPlans = scenarios.map(scenario => {
      const ids = new Set(tradersIn(scenario.rows))
      return plan.filter(line => ids.has(line.trader))
    })
    const totals = scenarioPlans.map(lines => lines.reduce((sum, line) => sum + line.topUp, 0n))
    const total = totals.reduce((peak, amount) => amount > peak ? amount : peak, 0n)
    const funderBalance = await rpc.lamports(w.funder.publicKey)
    const est = estimateDuration(rows, traders.length, opts.rpcRps)
    const hasLogs = logsConfigured(opts.env)
    const onOff = (b: boolean) => (b ? c.green('on') : c.dim('off'))
    const title = composite ? `Composite scenario: ${composite.name}` : 'Trade session'
    printSettings(opts.dryRun ? `${title} (dry run)` : title, [
      ['Scenario', c.cyan(scenarioPath)],
      ...(composite ? [['Solver', composite.solver], ['Break', `${composite.breakSeconds}s after each scenario finishes`]] as [string, string][] : []),
      ['Trades', `${c.bold(rows.length)} rows, ${c.bold(traders.length)} traders`],
      ['Duration', `about ${c.bold(`${est.total} min`)} ${c.dim(`(~${est.trading} min trading, plus funding and cleanup)`)}`],
      ['Environment', `${opts.env === 'prod' ? c.red('prod') : c.green(opts.env)} ${c.dim(`(${env.urls.label})`)}`],
      ['Orderbook', c.dim(env.urls.api)],
      ['RPC', `${rpcHost(env.rpcUrl)} ${c.dim(`(from ${rpcSource()}, ${opts.rpcRps ?? 10} req/s)`)}` +
        (/api\.mainnet-beta\.solana\.com/.test(env.rpcUrl) ? c.yellow('  public RPC: expect 429s, lower --rpc-rps') : '')],
      ['Debug tool', c.dim(env.urls.debug)],
      ['Settlement', `${orders.programId.toBase58()} v${env.urls.settlementVersion ?? sdkVersion(opts.env)}` +
        `${env.urls.settlementProgram ? c.yellow(' (override from environments.json)') : ''}` +
        `${env.urls.settlementVersion && env.urls.settlementVersion !== sdkVersion(opts.env) ? c.yellow(' (orders built by settlement.ts, not the SDK)') : ''}`],
      ['Sponsor', env.urls.sponsor ? `${env.urls.sponsor}${c.yellow(' (from environments.json)')}` : c.dim("the quote's funder")],
      ['Session', opts.dryRun ? c.dim('none (dry run)') : c.cyan(session.name)],
      ['Funder', `${w.funder.publicKey.toBase58()}  ${c.green(fmtSol(funderBalance))}`],
      ['Per trader', `${opts.solFundingPerTrader} SOL`],
      ['Top-ups', `${c.bold(fmtSol(total))} ${c.dim(composite ? 'at most per scenario; fund before each run' : `to ${plan.filter((l) => l.topUp > 0n).length} of ${traders.length} traders`)}`],
      ['Max total', `${opts.maxTotalSol} SOL${composite ? ' per scenario' : ''}`],
      ['Retries', String(opts.maxRetries)],
      ['Order validity', `${opts.orderValidity}s, the orderbook minimum`],
      ['Fill timeout', `${opts.fillTimeout}s, then ${opts.cancelOnTimeout ? 'cancel on-chain and move on' : 'move on and let the order expire'}`],
      ['Client limits', `${opts.quoteRps} quotes/s, ${opts.apiRps} API calls/s, ${opts.rpcRps} RPC calls/s`],
      ['Cleanup', `${onOff(opts.cleanup)}${opts.cleanup ? ' (retry unfinished wallets at the end; top up fees if needed)' : ''}`],
      ['Report', onOff(Boolean(opts.report))],
      [
        'Logs',
        hasLogs
          ? c.green('VictoriaLogs via Grafana (full report)')
          : ui.warn(`not configured, the report will be basic. Set ${LOG_ENV_HINT}`),
      ],
    ])
    const budget = await checkCreationBudget(run, scenarios.map(scenario => ({ name: scenario.path, rows: unfinished(scenario) })), opts)
    const fundingIssues = (lines: typeof plan, balance: bigint, sponsored: bigint, checkBalance = true) => {
      const amount = lines.reduce((sum, line) => sum + line.topUp, 0n)
      return [
        ...(amount > solToLamports(opts.maxTotalSol) ? [`Funding ${fmtSol(amount)} is over --max-total-sol ${opts.maxTotalSol}`] : []),
        ...(checkBalance && amount + 100_000n > balance ? [`The funder can't cover ${fmtSol(amount)}`] : []),
        ...(checkBalance && budget.sponsor?.equals(w.funder.publicKey) && amount + sponsored + 100_000n > balance
          ? ['The shared funder cannot cover both trader top-ups and sponsored creations'] : []),
        ...lines.filter(line => budget.estimates.some(estimate => (estimate.selfCosts.get(line.trader) ?? 0n) > line.balance + line.topUp))
          .map((line) => `Trader ${line.trader} cannot cover its estimated self-paid creation costs after funding`),
      ]
    }
    const issues = [
      ...budget.issues,
      ...scenarioPlans.flatMap(lines => fundingIssues(lines, funderBalance, budget.sponsored, !resume)),
    ]
    if (issues.length && !opts.dryRun) throw new Error(issues.join('; '))
    for (const i of issues) console.log(ui.warn(i))

    if (opts.dryRun) {
      for (const scenario of scenarios) {
        if (composite) log(c.bold(`▶ Scenario ${scenario.id}/${scenarios.length}: ${scenario.name}`))
        await dryRun(ctx, w, scenario.rows, opts.solFundingPerTrader)
      }
      return
    }
    if (!resume) await confirm(`Fund up to ${fmtSol(total)}${composite ? ' per scenario' : ''} on ${opts.env}?`, opts.yes)
    release ??= session.lock()
    if (!resume && existsSync(resolve(session.dir, 'sim', 'run.json'))) throw new Error('Session already exists. Use resume-session.')
    const { yes: _yes, session: _session, dryRun: _dryRun, deferCleanupScenario: _deferCleanupScenario, ...settings } = opts
    const saved: SavedRun = resume ?? {
      version: 1, scenarioPath, options: settings, funder: w.funder.publicKey.toBase58(),
      program: orders.programId.toBase58(), api: env.apiBase,
      ...(composite ? { composite: { name: composite.name, solver: composite.solver, breakSeconds: composite.breakSeconds } } : {}),
      scenarios: scenarios.map(scenario => ({ ...scenario, phase: 'pending', elapsed: 0 })), results: [], times: {},
    }
    if (!resume) {
      session.writeMeta({ rpc: rpcHost(env.rpcUrl), name: `${session.name} trade session`, title: session.name, env: opts.env,
        sim: { scenario: resolve(scenarioPath), traders: traders.length, rows: rows.length, solFundingPerTrader: opts.solFundingPerTrader } })
      copyFileSync(scenarioPath, resolve(session.dir, 'sim', composite ? 'composite.json' : 'scenario.csv'))
    }
    saveRun(session, saved)
    const fundScenario = async (scenario: CompositeScenario, lines: typeof plan) => {
      const scenarioLog = composite ? (message: string) => log(`[${scenario.name}] ${message}`) : log
      if (lines.length) await fund(rpc, w, lines, scenarioLog, ctx.link.tx)
      session.log({ step: 'setup', event: 'funded', total: lines.reduce((sum, line) => sum + line.topUp, 0n).toString(),
        traders: lines.map(line => line.trader), ...(composite ? { scenario: scenario.id } : {}) })
    }
    // The scenario as played: files get regenerated, and retry-session needs the exact rows.
    const saveComposite = () => {
      if (composite) session.writeMeta({ composite: {
        name: composite.name, solver: composite.solver, breakSeconds: composite.breakSeconds,
        scenarios: saved.scenarios.map(({ rows, ...scenario }) => scenario),
      } })
      const combined = composite ? combinedRows(saved.scenarios, composite.breakSeconds) : saved.scenarios[0].rows
      writeScenario(resolve(session.dir, 'sim', 'scenario.csv'), combined.map(row => ({ ...row, time: saved.times[row.row] ?? row.time })).sort((a, b) => a.row - b.row))
      saveRun(session, saved)
    }
    saveComposite()
    log(`${c.bold('▶ Playing')} ${rows.length} rows ${c.dim(`→ ${session.dir}`)}`)

    // Watch the backend's sponsoring funder: an empty funder silently kills every sponsored creation.
    let watching = true
    const watch = (async () => {
      while (watching) {
        if (orders.sponsorFunder) {
          const bal = await rpc.lamports(orders.sponsorFunder).catch(() => null)
          if (bal !== null && bal < solToLamports(0.05)) log(ui.warn(`sponsoring funder ${orders.sponsorFunder.toBase58()} is low: ${fmtSol(bal)}`))
        }
        await sleep(60_000)
      }
    })()

    const scenarioSummary: { Scenario: string; Trades: number; Completed: number; Failed: number; Completion: string }[] = []
    const results = saved.results
    const priorOrders = new Map<number, Set<string>>()
    if (resume) for (const event of journal(session)) {
      if (event.event !== 'placed' || event.row === undefined || !event.uid) continue
      const uids = priorOrders.get(event.row) ?? new Set<string>()
      uids.add(event.uid)
      priorOrders.set(event.row, uids)
    }
    try {
      for (const scenario of saved.scenarios) {
        const resumingCleanup = Boolean(resume && scenario.phase === 'cleanup')
        if (scenario.phase === 'finished') continue
        const scenarioLog = composite ? (message: string) => log(`[${scenario.name}] ${message}`) : log
        if (['pending', 'running'].includes(scenario.phase)) {
          const pendingRows = scenario.rows.filter(row => !results.some(result => result.row === row.row))
          const lines = await fundingPlan(rpc, w, tradersIn(pendingRows), target)
          const balance = await rpc.lamports(w.funder.publicKey)
          const estimate = budget.estimates[scenario.id - 1]
          const issues = pendingRows.length ? fundingIssues(lines, balance, estimate.sponsoredCost) : []
          if (pendingRows.length && budget.sponsor && estimate.sponsoredCost > await rpc.lamports(budget.sponsor)) {
            issues.push(`Sponsor cannot cover ${fmtSol(estimate.sponsoredCost)} for ${scenario.path}`)
          }
          if (issues.length) throw new Error(issues.join('; '))
          await fundScenario(scenario, lines)
          const start = Date.now() + (saved.start === undefined ? 5000 : 0)
          const elapsed = scenario.elapsed
          let timer: ReturnType<typeof setInterval> | undefined
          const checkpoint = () => {
            scenario.elapsed = elapsed + Math.max(0, Date.now() - start) / 1000
            scenario.checkpointAt = Date.now()
            saveRun(session, saved)
          }
          const stop = () => { checkpoint(); process.exit(130) }
          try {
            await playScenarios([{ rows: pendingRows.map(row => ({ ...row, time: Math.max(0, row.time - elapsed) })) }], {
              start,
              onStart: (_scenario, at) => {
                saved.start ??= at
                session.writeMeta({ start: new Date(saved.start).toISOString() })
                scenario.phase = 'running'
                scenario.start ??= new Date(at).toISOString()
                scenario.offset ??= (at - saved.start) / 1000
                for (const row of pendingRows) saved.times[row.row] = (at - saved.start) / 1000 + Math.max(0, row.time - elapsed)
                saveComposite()
                console.log('')
                if (composite) log(c.bold(`▶ Scenario ${scenario.id}/${scenarios.length}: ${scenario.name}`))
                if (resume) scenarioLog(`Resuming: ${scenario.rows.length - pendingRows.length}/${scenario.rows.length} rows already finished`)
                console.log('')
                timer = setInterval(checkpoint, 1000)
                process.once('SIGINT', stop)
                process.once('SIGTERM', stop)
              },
              playRow: async row => {
                const played = { ...row, time: saved.times[row.row] }
                scenarioLog(`${tag(row.row, row.trader)} ${ui.kind(row.type)} ${c.bold(`${row.amount} ${row.token}`)} ${row.type === 'sell' ? '→' : '←'} ${c.bold(row.otherToken)} ${c.dim('[')}${ui.mode(row.mode)}${c.dim(']')}${row.note ? ' ' + c.dim(row.note) : ''}`)
                const result = await runRow({ ...ctx, log: scenarioLog }, w.trader(row.trader), played)
                result.orders += priorOrders.get(row.row)?.size ?? 0
                results.push(result)
                checkpoint()
                return result
              },
            })
          } finally {
            clearInterval(timer)
            process.off('SIGINT', stop)
            process.off('SIGTERM', stop)
          }
          await recoverOutstanding(saved, scenarioLog, new Set(tradersIn(scenario.rows)))
          scenario.end = new Date().toISOString()
          scenario.phase = 'cleanup'
          if (opts.cleanup) scenario.cleanupPending = tradersIn(scenario.rows)
          saveComposite()
          console.log('')
          scenarioLog('Finished')
        }
        if (scenario.phase === 'cleanup') {
          const deferCleanup = (unfinished?: number[]) => {
            const cleaned = new Set(journal(session).filter(e => e.event === 'cleanup_done' && !e.leftover?.length).map(e => e.trader))
            const traders = unfinished ?? scenario.cleanupPending ?? tradersIn(scenario.rows).filter(trader => !cleaned.has(trader))
            scenario.cleanupDeferred = true
            scenario.cleanupPending = [...new Set([...(scenario.cleanupPending ?? []), ...traders])]
            session.log({ step: 'cleanup', event: 'cleanup_deferred', scenario: scenario.id, traders })
            scenarioLog(ui.warn(`Cleanup queued for the end for traders ${traders.join(', ')}; their remaining tokens and SOL stay in their wallets.`))
          }
          if (scenario.id === opts.deferCleanupScenario) deferCleanup()
          else if (opts.cleanup) {
            scenarioLog(c.bold('🧹 Cleaning up'))
            const cleaned = new Set(journal(session).filter(e => e.event === 'cleanup_done' && !e.leftover?.length).map(e => e.trader))
            const blocked = tradersIn(scenario.rows).filter(trader => liveUnresolvedOrders(saved, trader).length)
            if (blocked.length) {
              scenario.cleanupDeferred = true
              scenario.cleanupPending = [...new Set([...(scenario.cleanupPending ?? []), ...blocked])]
              session.log({ step: 'cleanup', event: 'cleanup_deferred', scenario: scenario.id, traders: blocked, reason: 'unresolved_orders' })
              scenarioLog(ui.warn(`Cleanup deferred for traders ${blocked.join(', ')} with unresolved orders; continuing.`))
            }
            const todo = (scenario.cleanupPending ?? tradersIn(scenario.rows).filter(trader => !cleaned.has(trader))).filter(trader => !blocked.includes(trader))
            if (resumingCleanup && todo.length) {
              const lines = await fundingPlan(rpc, w, todo, target)
              const issues = fundingIssues(lines, await rpc.lamports(w.funder.publicKey), 0n)
              if (issues.length) throw new Error(issues.join('; '))
              await fundScenario(scenario, lines)
            }
            const cleanedUp = await cleanupAll({ ...ctx, log: scenarioLog }, w, todo, opts.env, opts.rpcRps)
            await recoverOutstanding(saved, scenarioLog, new Set(todo))
            const unfinished = todo.filter(trader => !cleanedUp.some(result => result.trader === trader && !result.leftover.length))
            scenario.cleanupPending = [...new Set([...blocked, ...unfinished])]
            scenario.cleanupDeferred = scenario.cleanupPending.length ? true : undefined
            if (cleanedUp.length !== todo.length || cleanedUp.some(result => result.leftover.length)) {
              if (unfinished.every(trader => liveUnresolvedOrders(saved, trader).length)) {
                scenario.cleanupDeferred = true
                session.log({ step: 'cleanup', event: 'cleanup_deferred', scenario: scenario.id, traders: unfinished, reason: 'unresolved_orders' })
                scenarioLog(ui.warn(`Cleanup deferred for traders ${unfinished.join(', ')} with unresolved orders.`))
              } else {
                deferCleanup(unfinished)
              }
            }
          }
          scenario.phase = 'pause'
          const pauseSeconds = (composite?.breakSeconds ?? 0) / (scenario.cleanupDeferred ? 3 : 1)
          scenario.pauseUntil = Date.now() + (scenario.id < scenarios.length ? pauseSeconds * 1000 : 0)
          saveComposite()
        }
        if (scenario.phase === 'pause') {
          const remaining = Math.max(0, scenario.pauseUntil! - Date.now())
          if (remaining) scenarioLog(c.dim(`Pause: ${remaining / 1000}s before the next scenario`))
          await sleep(remaining)
          scenario.phase = 'finished'
          saveComposite()
        }
      }
      if (opts.cleanup) {
        const queued = saved.scenarios.filter(scenario => scenario.cleanupDeferred)
        for (const scenario of queued) {
          scenario.cleanupPending ??= tradersIn(scenario.rows)
        }
        const pending = [...new Set(queued.flatMap(scenario => scenario.cleanupPending!))].sort((a, b) => a - b)
        if (pending.length) {
          log(c.bold(`🧹 Retrying unfinished cleanup at the end for traders ${pending.join(', ')}`))
          await recoverOutstanding(saved, log, new Set(pending))
          const todo = pending.filter(trader => !liveUnresolvedOrders(saved, trader).length)
          if (todo.length) {
            try {
              const balances = await Promise.all(todo.map(async trader => [trader, await rpc.lamports(w.trader(trader).publicKey), (await rpc.tokenAccounts(w.trader(trader).publicKey)).length] as const))
              const lines = cleanupFundingPlan(w, balances)
              const topUps = lines.filter(line => line.topUp > 0n)
              const amount = topUps.reduce((sum, line) => sum + line.topUp, 0n)
              if (amount > 0n) {
                for (const scenario of queued) {
                  const scenarioAmount = topUps.filter(line => scenario.cleanupPending!.includes(line.trader)).reduce((sum, line) => sum + line.topUp, 0n)
                  if (scenarioAmount > solToLamports(opts.maxTotalSol)) throw new Error(`Final cleanup funding ${fmtSol(scenarioAmount)} for ${scenario.name} is over --max-total-sol ${opts.maxTotalSol}`)
                }
                const needed = amount + BigInt(Math.ceil(topUps.length / 15)) * TX_FEE_LAMPORTS
                if (await rpc.lamports(w.funder.publicKey) < needed) throw new Error(`Funder needs ${fmtSol(needed)} for final cleanup top-ups and transfer fees.`)
                await fund(rpc, w, lines, log, ctx.link.tx)
                session.log({ step: 'cleanup', event: 'funded', traders: topUps.map(line => line.trader), amount: amount.toString() })
              }
              const cleaned = await cleanupAll(ctx, w, todo, opts.env, opts.rpcRps)
              const completed = new Set(todo.filter(trader => cleaned.some(result => result.trader === trader && !result.leftover.length)))
              for (const scenario of queued) {
                scenario.cleanupPending = scenario.cleanupPending!.filter(trader => !completed.has(trader))
                scenario.cleanupDeferred = scenario.cleanupPending.length ? true : undefined
              }
              await recoverOutstanding(saved, log, new Set(todo))
            } catch (error) {
              log(ui.warn(`Final cleanup could not finish: ${errorDetail(error)}`))
              session.log({ step: 'cleanup', event: 'cleanup_final_failed', traders: todo, error: errorDetail(error) })
            }
          }
          saveComposite()
        }
      }
    } finally { watching = false }
    for (const scenario of saved.scenarios) {
      const completed = results.filter(result => result.status === 'filled' && scenario.rows.some(row => row.row === result.row)).length
      scenarioSummary.push({ Scenario: scenario.path, Trades: scenario.rows.length, Completed: completed,
        Failed: scenario.rows.length - completed, Completion: `${(100 * completed / scenario.rows.length).toFixed(1)}%` })
    }
    session.writeMeta({ trading_end: new Date().toISOString(), end: new Date(Date.now() + 60_000).toISOString() })

    const filled = results.filter((r) => r.status === 'filled').length
    console.log(`\n${(filled === results.length ? c.green : c.yellow)(c.bold(`${filled}/${results.length} rows filled`))}, ${results.reduce((s, r) => s + r.orders, 0)} orders placed.`)
    if (composite) {
      console.log('\nScenario results (completion = full trade flow succeeded):')
      console.table(scenarioSummary)
      console.log('')
    }
    for (const r of results.filter((r) => r.status === 'failed').sort((a, b) => a.row - b.row)) {
      const scenario = composite?.scenarios.find(s => s.rows.some(row => row.row === r.row))
      console.log(`  ${scenario ? `[${scenario.name}] ` : ''}${tag(r.row, r.trader)}: ${c.red(r.reason ?? 'failed')}`)
    }
    for (const scenario of saved.scenarios.filter(s => s.cleanupDeferred)) {
      log(ui.warn(`Cleanup still pending for ${scenario.name}: traders ${scenario.cleanupPending?.join(', ')}. Retry with: pnpm sim resume-session ${session.name}`))
    }
    if (saved.unresolvedOrders?.length) {
      log(ui.warn(`${saved.unresolvedOrders.length} orders still have unknown outcomes. See recovery_unresolved in sim/journal.jsonl.`))
      for (const order of saved.unresolvedOrders) warnUnresolved(order)
    }

    if (opts.report) {
      for (const cmd of [...(logsConfigured(opts.env) ? ['logs'] : []), 'fetch', 'report']) spawnSync('python3', [resolve(QOS_ROOT, 'qos.py'), cmd, '--session', session.name], { stdio: 'inherit' })
    }
    saved.finished = !saved.scenarios.some(scenario => scenario.cleanupDeferred)
    saveRun(session, saved)
    log(`${saved.finished ? ui.ok('Done.') : ui.warn('Trading finished; cleanup still pending.')} Session: ${c.cyan(session.dir)}`)
    if (composite) {
      log(`Trade logs: ${resolve(session.dir, 'sim', 'journal.jsonl')}`)
      if (opts.report) log(`Scenario results: ${resolve(session.dir, 'report.html')}`)
    }
    await Promise.race([watch, sleep(0)])
    process.exit(0)
  } finally { release?.() }
}

function assertCleanupCanBeDeferred(scenarios: SavedRun['scenarios'], deferred: SavedRun['scenarios'][number]) {
  const traders = new Set(tradersIn(deferred.rows))
  if (scenarios.some(s => s.id > deferred.id && s.phase !== 'finished' && s.rows.some(row => traders.has(row.trader)))) {
    throw new Error('Cannot defer cleanup: later scenarios reuse its trader wallets.')
  }
}

function cleanupFundingPlan(w: ReturnType<typeof wallets>, balances: readonly (readonly [number, bigint, number])[]) {
  return balances.map(([trader, balance, accounts]) => {
    const creationReserve = BigInt(accounts) * ORDER_CREATION_LAMPORTS + TX_FEE_LAMPORTS * 2n
    const reserve = solToLamports(TRADER_RESERVE_SOL)
    const target = creationReserve > reserve ? creationReserve : reserve
    return { trader, address: w.trader(trader).publicKey, balance, topUp: accounts > 0 && balance < target ? target - balance : 0n }
  })
}

program.command('resume-session')
  .description('Continue an interrupted individual or composite run in the same session')
  .argument('<session>', 'existing session folder name')
  .option('--allow-public-rpc', 'resume using a public RPC')
  .option('--defer-cleanup', 'leave the current composite scenario cleanup for later; keep cleanup enabled for later scenarios')
  .option('-y, --yes', 'skip the confirmation prompt')
  .action(async (name: string, flags) => {
    const saved = readRun(new Session(name))
    if (saved.finished) { console.log(ui.ok(`${name}: already finished; no trades replayed`)); return }
    const deferred = flags.deferCleanup ? saved.scenarios.find(s => s.phase !== 'finished') : undefined
    if (flags.deferCleanup) {
      if (!saved.composite || deferred?.phase !== 'cleanup') {
        throw new Error('--defer-cleanup is allowed only when a composite scenario is waiting for cleanup.')
      }
      assertCleanupCanBeDeferred(saved.scenarios, deferred)
    }
    const opts: any = { ...saved.options, session: name, yes: flags.yes, allowPublicRpc: flags.allowPublicRpc || saved.options.allowPublicRpc,
      deferCleanupScenario: deferred?.id }
    const composite = saved.composite ? { ...saved.composite, env: opts.env as 'staging' | 'prod', options: {}, scenarios: saved.scenarios } : undefined
    await runSession(saved.scenarioPath, opts, composite, saved)
  })

sessionCommand('simulate-trade-session')
  .argument('<scenario>', 'CSV: trader,time,type,amount,token,other_token[,mode,note]')
  .action((path: string, opts) => runSession(path, opts))

sessionCommand('simulate-composite-scenario')
  .description('Play CSV scenarios in order as one session, with breaks between them')
  .argument('<config>', 'composite scenario JSON; CSV paths are relative to this file')
  .option('--preview', 'show the combined schedule and budget offline; no wallet or RPC needed')
  .action(async (path: string, opts, command: Command) => {
    const composite = readComposite(path)
    const settings = { ...opts }
    for (const [key, value] of Object.entries({ ...composite.options, env: composite.env })) {
      if (command.getOptionValueSource(key) !== 'cli') settings[key] = value
    }
    if (opts.preview) {
      const rows = combinedRows(composite.scenarios, composite.breakSeconds)
      const budget = creationBudget(rows, settings.maxRetries, settings.cleanup)
      const duration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60)
        const rest = Number((seconds % 60).toFixed(3))
        return minutes ? `${minutes}m${rest ? ` ${rest}s` : ''}` : `${rest}s`
      }
      const peakWallets = Math.max(...composite.scenarios.map(scenario => tradersIn(scenario.rows).length))
      const wallets = settings.cleanup ? peakWallets : tradersIn(rows).length
      console.log(`\nComposite scenario: ${composite.name}`)
      console.log('Preview only: no network calls, funding, or trades.')
      console.log('Results: not available — use the command without --preview to run the scenarios.')
      console.log(`Environment: ${settings.env}`)
      console.log(`Solver label: ${composite.solver} (does not select the active solver)`)
      console.log(`\nRun order (${rows.length} trades):`)
      console.table(composite.scenarios.map((scenario, index) => ({
        Scenario: scenario.path, Trades: scenario.rows.length, Completion: 'Not run',
        'Pause after running': index < composite.scenarios.length - 1 ? duration(composite.breakSeconds) : 'None',
      })))
      console.log('')
      console.log('Breaks start after all trades, outstanding orders, and cleanup finish.')
      console.log('During a run: each scenario logs trade outcomes, failure reasons, and its trade completion rate.')
      console.log(settings.cleanup
        ? settings.deferCleanup
          ? '\nCleanup: try after each scenario; defer failures after checking orders, then use one-third of the normal pause. Retained funds need separate cleanup.'
          : '\nCleanup: after each scenario; return remaining funds before funding the next.'
        : '\nCleanup: disabled; funds stay in the trader wallets.')
      console.log(settings.report ? 'Report: one combined report with results for each scenario.' : 'Report: disabled.')
      const fundingScope = settings.cleanup ? settings.deferCleanup ? ' per scenario; deferred cleanup can retain earlier funding' : ' at a time' : ' across all scenarios'
      console.log(`\nFunding: up to ${fmtSol(solToLamports(settings.solFundingPerTrader) * BigInt(wallets))}${fundingScope}; cap ${settings.maxTotalSol} SOL per scenario. Existing balances reduce top-ups.`)
      console.log('Keep extra SOL for fees and trading losses; balances are checked before funding each scenario.')
      console.log(`Estimated order creation fees/rent: ${fmtSol(budget.total)} before refunds; excludes trade amounts and other fees.`)
      return
    }
    await runSession(path, settings, composite)
  })

program
  .command('cleanup-trade-session')
  .description('Sell every token back to SOL, close accounts, reclaim order rent and sweep SOL to the funder')
  .option('--traders <spec>', 'e.g. 1-25 or 1,3,7', '1-25')
  .option('--session <name>', 'session folder to journal into', 'cleanup')
  .option('--quote-rps <n>', 'quotes per second (raise for stress tests)', parseFloat, 5)
  .option('--api-rps <n>', 'other orderbook calls per second: posting, polling', parseFloat, 8)
  .option('--rpc-rps <n>', 'Solana RPC calls per second (your RPC plan is the limit)', parseFloat, 10)
  .option('--max-retries <n>', 'additional cleanup passes after failures (0 = no retries)', Number, 0)
  .option('-y, --yes', 'skip the confirmation prompt')
  .addOption(envOption)
  .action(async (opts) => {
    const session = new Session(opts.session)
    const { rpc, ctx, w } = context(opts, session)
    const traders = parseTraders(opts.traders)
    const balances = await Promise.all(traders.map(async (n) => [n, await rpc.lamports(w.trader(n).publicKey), (await rpc.tokenAccounts(w.trader(n).publicKey)).length] as const))
    const active = balances.filter(([, l, a]) => l > 0n || a > 0).map(([n]) => n)
    console.log(`${c.bold(active.length)} of ${traders.length} traders hold SOL or token accounts.`)
    if (!active.length) return
    const plan = cleanupFundingPlan(w, balances)
    const topUps = plan.filter(line => line.topUp > 0n)
    const funding = topUps.reduce((sum, line) => sum + line.topUp, 0n)
    if (funding > 0n) {
      const needed = funding + BigInt(Math.ceil(topUps.length / 15)) * TX_FEE_LAMPORTS
      if (await rpc.lamports(w.funder.publicKey) < needed) {
        throw new Error(`Funder needs ${fmtSol(needed)} for cleanup top-ups and transfer fees. Fund it before retrying cleanup.`)
      }
      console.log(`Cleanup funding: top up ${topUps.length} traders with ${fmtSol(funding)} total from the funder for fees and order rent.`)
    }
    await confirm(`Clean up traders ${active.join(', ')}?`, opts.yes)
    if (funding > 0n) {
      await fund(rpc, w, plan, log, ctx.link.tx)
      session.log({ step: 'cleanup', event: 'funded', traders: topUps.map(line => line.trader), amount: funding.toString() })
    }
    const res = await cleanupAll(ctx, w, active, opts.env, opts.rpcRps)
    const swept = res.reduce((s, r) => s + r.swept, 0n)
    console.log(`\n${ui.ok(`Swept ${fmtSol(swept)} to the funder.`)}`)
    const left = res.filter((r) => r.leftover.length)
    if (left.length) console.log(ui.warn(`Left behind (no route): ${left.map((r) => `t${r.trader}: ${r.leftover.join(', ')}`).join('; ')}`))
    process.exit(0)
  })

program
  .command('generate-trade-session')
  .description('Write a scenario CSV that emulates users, sized so each trader can fund the whole flow')
  .requiredOption('-o, --out <file>', 'output CSV, e.g. ../scenarios/kaffee-25x10.csv')
  .option('--traders <n>', 'number of traders', (v) => parseInt(v, 10), 25)
  .option('--duration <minutes>', 'minutes over which flows start', parseFloat, 10)
  .option('--sol-amount-per-trader <sol>', 'SOL each trader will be funded with', parseFloat, 0.1)
  .option('--seed <n>', 'random seed (same seed, same file)', (v) => parseInt(v, 10), Date.now() % 1_000_000)
  .addOption(new Option('--mix <mix>', 'persona mix').choices(Object.keys(MIXES)).default('mixed'))
  .option('--self-ratio <r>', 'share of rows placed self-paid', parseFloat, 0)
  .option('--intensity <x>', 'trade x times more often, with x times smaller trades', parseFloat, 1)
  .option('--min-gap <s>', "minimum seconds between one trader's flows (0 = back to back)", (v) => parseInt(v, 10), MIN_GAP_S)
  .option('--universe <file>', 'token universe JSON')
  .action(async (opts) => {
    const universe = loadUniverse(opts.universe)
    const usd = await usdPrices(universe.map((t) => t.mint))
    const solUsd = usd.get(universe.find((t) => t.symbol === 'SOL')!.mint)!
    const priceSol = Object.fromEntries(universe.filter((t) => usd.has(t.mint)).map((t) => [t.symbol, usd.get(t.mint)! / solUsd]))
    const plans = generate({
      traders: opts.traders,
      durationMin: opts.duration,
      solPerTrader: opts.solAmountPerTrader,
      seed: opts.seed,
      mix: opts.mix,
      selfRatio: opts.selfRatio,
      universe,
      priceSol,
      minGap: opts.minGap,
      intensity: opts.intensity,
    })
    const rows = plans.flatMap((p) => p.rows).sort((a, b) => a.time - b.time || a.trader - b.trader)
    writeScenario(
      opts.out,
      rows,
      `generate-trade-session --traders ${opts.traders} --duration ${opts.duration} --sol-amount-per-trader ${opts.solAmountPerTrader} ` +
        `--seed ${opts.seed} --mix ${opts.mix} --self-ratio ${opts.selfRatio} --intensity ${opts.intensity} --min-gap ${opts.minGap}\nSOL price $${solUsd.toFixed(2)} at ${new Date().toISOString()}`,
    )
    console.log(`${ui.ok(`Wrote ${rows.length} rows`)} for ${plans.length} traders to ${c.cyan(opts.out)} ${c.dim(`(seed ${opts.seed})`)}`)
    const byPersona = new Map<string, number>()
    for (const p of plans) byPersona.set(p.persona, (byPersona.get(p.persona) ?? 0) + 1)
    console.log(`Personas: ${[...byPersona].map(([k, v]) => `${k} ${v}`).join(', ')}`)
    const maxSpend = Math.max(...plans.map((p) => p.spendSol))
    console.log(`Planned SOL spend per trader: max ${maxSpend.toFixed(4)} of ${(opts.solAmountPerTrader - TRADER_RESERVE_SOL).toFixed(4)} available (reserve ${TRADER_RESERVE_SOL}).`)
    const rec = recommendFunding(maxSpend)
    console.log(`Recommended funding: ${c.green(`--sol-funding-per-trader ${rec}`)} (${(rec * plans.length).toFixed(2)} SOL total). ` +
      c.dim('Run --dry-run for a figure from live quotes.'))
  })

interface ListScenarioRun {
  /** `<prefix>.csv` (plus `-unsupported`/`-no-route` files unless includeFailing). */
  out: string
  /** Where the list came from, shown in the header. */
  source: string
  /** The command that regenerates the file, shown in the header. */
  regenerate: string
  env: CowEnv
  solPerToken: number
  traders: number
  sellBack: number
  mode: 'sponsored' | 'self'
  includeFailing: boolean
  quoteRps: number
}

/** Classify a token list on barn and write its scenario file(s). Shared by generate-token-list-session and build-token-sequence. */
async function writeListScenario(list: { name: string; criteria?: string; coverage?: string; extra?: string; tokens: ListToken[] }, o: ListScenarioRun) {
  const env = loadEnv({ needMnemonic: false, cowEnv: o.env })
  const rpc = new Rpc(env.rpcUrl, 10, env.rpcBackupUrl)
  log(`${c.bold(list.name)}: ${list.tokens.length} Solana tokens (SOL/wSOL excluded). Classifying on ${o.env}…`)
  const solIn = BigInt(Math.round(o.solPerToken * 1e9))
  const verdicts = await classify(rpc, env.apiBase, list.tokens, solIn, o.quoteRps, (d, t) => {
    if (d % 50 === 0 || d === t) log(c.dim(`  quoted ${d}/${t}`))
  })
  const { tradable, unsupported, noRoute, missing: notMints } = listRows(list.tokens, verdicts, {
    solPerToken: o.solPerToken,
    traders: o.traders,
    sellBackShare: o.sellBack,
    mode: o.mode,
  })
  const counts = { tradable: tradable.filter((r) => r.token === 'SOL').length, unsupported: unsupported.length, noRoute: noRoute.length, notMints: notMints.length }
  const t22 = [...verdicts.values()].filter((v) => v.kind === 'tradable' && v.program === 'token-2022').length
  const date = new Date().toISOString().slice(0, 10)
  const traders = Math.max(1, Math.min(o.traders, counts.tradable))
  const perTrader = Math.ceil(counts.tradable / traders)
  const header = (what: string) =>
    `${list.name} (${o.source}), classified on ${o.env} on ${date}.\n` +
    `${list.criteria ? `Token criteria: ${list.criteria}.\n` : ''}${list.coverage ? `Coverage: ${list.coverage}.\n` : ''}` +
    `${list.extra ? `${list.extra}\n` : ''}${what}\nRegenerate: ${o.regenerate}`
  const funding = `Fund with --sol-funding-per-trader ${Math.max(0.05, Math.ceil((o.solPerToken * 2 + 0.02) * 1.25 * 100) / 100)}.`
  const tradableLine = `${counts.tradable} tradable tokens (${t22} Token-2022): sell ${o.solPerToken} SOL into each, then ` +
    `${o.sellBack * 100}% of the quote back. ${traders} traders, ~${perTrader} tokens each, back to back.`
  // Expected-failure files only when they have rows; drop stale ones from an earlier run.
  const writeOrDrop = (path: string, rows: Omit<TradeRow, 'row'>[], comment: string) =>
    rows.length ? writeScenario(path, rows, comment) : rmSync(path, { force: true })
  const failing = [...unsupported, ...noRoute, ...notMints]
  if (o.includeFailing) {
    // One row per failing token, spread over the traders after their tradable rows: each fails at the quote, spends
    // nothing, and lands in the report's "Rows without an order" next to the rest of the list.
    failing.forEach((r, k) => (r.trader = (k % traders) + 1))
    writeScenario(`${o.out}.csv`, [...tradable, ...failing],
      header(`${tradableLine}\nPlus ${failing.length} tokens expected to fail at the quote (${counts.unsupported} rejected by the backend, ` +
        `${counts.noRoute} without a route${notMints.length ? `, ${notMints.length} not a mint` : ''}): one SOL to token row each, ` +
        `kept in so the report shows what isn't supported.\n${funding}`))
    for (const f of ['unsupported', 'no-route']) rmSync(`${o.out}-${f}.csv`, { force: true })
  } else {
    writeScenario(`${o.out}.csv`, tradable, header(`${tradableLine}\n${funding}`))
    writeOrDrop(`${o.out}-unsupported.csv`, unsupported,
      header(`${counts.unsupported} tokens the backend rejects (Token-2022 extensions). Every row is expected to fail with UnsupportedToken; one trader, nothing is spent.`))
    writeOrDrop(`${o.out}-no-route.csv`, noRoute,
      header(`${counts.noRoute} tokens with no route when classified. Every row is expected to fail at the quote; one trader. Rerun to see which gained a route.`))
  }
  console.log(`${ui.ok(`${list.name}`)}: ${c.green(counts.tradable)} tradable (${t22} Token-2022), ${c.yellow(counts.unsupported)} unsupported, ` +
    `${c.yellow(counts.noRoute)} no route${notMints.length ? `, ${notMints.length} not a mint` : ''}${o.includeFailing ? ' (failing ones kept in the main file)' : ''}`)
  console.log(c.dim(`  ${[`${o.out}.csv`, ...(!o.includeFailing && unsupported.length ? [`${o.out}-unsupported.csv`] : []), ...(!o.includeFailing && noRoute.length ? [`${o.out}-no-route.csv`] : [])].join(', ')}`))
  return { ...counts, t22, traders }
}

program
  .command('generate-token-list-session')
  .description('Turn a token list (URL or file) into scenarios: tradable tokens, rejected tokens, tokens with no route')
  .requiredOption('--list <url|file>', 'e.g. https://files.cow.fi/token-lists/SolanaDefault.json')
  .requiredOption('-o, --out <prefix>', 'output prefix, e.g. ../scenarios/experiments/solana-default')
  .option('--sol-per-token <sol>', 'SOL sold into each token', parseFloat, 0.005)
  .option('--traders <n>', 'traders sharing the tradable tokens (each runs its tokens back to back)', (v) => parseInt(v, 10), 30)
  .option('--sell-back <share>', 'share of the quoted amount sold back to SOL', parseFloat, 0.9)
  .addOption(new Option('--mode <mode>', 'order mode for every row').choices(['sponsored', 'self']).default('sponsored'))
  .option('--include-failing', 'keep tokens barn rejects or has no route for in the main file (one row each, fails at the quote), so the report shows them; otherwise they get their own files')
  .option('--quote-rps <n>', 'quotes per second while classifying', parseFloat, 5)
  .addOption(envOption)
  .action(async (opts) => {
    const list = await loadTokenList(opts.list)
    await writeListScenario(list, {
      out: opts.out,
      source: opts.list,
      regenerate: `pnpm sim generate-token-list-session --list ${opts.list} -o ${opts.out}${opts.includeFailing ? ' --include-failing' : ''}`,
      env: opts.env,
      solPerToken: opts.solPerToken,
      traders: opts.traders,
      sellBack: opts.sellBack,
      mode: opts.mode,
      includeFailing: Boolean(opts.includeFailing),
      quoteRps: opts.quoteRps,
    })
    process.exit(0)
  })

program
  .command('build-token-universe')
  .description('Rank every Solana token by DEX volume and check it against CoW: barn quotes, CoinGecko price, program and extensions, app lists, routed volume')
  .option('--volume <source>', 'volume per mint: a CSV export of the Dune query, or dune:<query id> with DUNE_API_KEY', `dune:${DEFAULT_DUNE_QUERY}`)
  .option('--routed-volume <source>', 'volume per mint and router (Jupiter, DFlow, Titan, direct, others): CSV export or dune:<query id>', `dune:${DEFAULT_ROUTED_QUERY}`)
  .option('-o, --out <dir>', 'output folder', resolve(QOS_ROOT, 'token-universe'))
  .option('--check <n>', 'tokens checked on Jupiter, on chain and on barn, by volume (plus every token in the app lists)', (v) => parseInt(v, 10), 2000)
  .option('--sol-per-token <sol>', 'SOL in each sell quote (the buy quote asks for half of what it returns)', parseFloat, 0.005)
  .option('--quote-rps <n>', 'quotes per second', parseFloat, 5)
  .addOption(envOption)
  .action(async (opts) => {
    // Read-only and light on RPC (one call per 100 mints): the public RPC does when RPC_URL isn't set.
    process.env.RPC_URL ||= process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com'
    const env = loadEnv({ needMnemonic: false, cowEnv: opts.env })
    const rpc = new Rpc(env.rpcUrl, 2)
    const volume = await loadVolume(opts.volume)
    const [coingecko, lists] = await Promise.all([coingeckoMints(), listMembership(APP_LISTS)])
    // Tens of thousands of mints have volume: only the top ones and those in the app lists get the slow checks.
    const ranked = [...volume].sort((a, b) => b.volume90d - a.volume90d).map((v) => v.mint)
    const mints = [...new Set([...ranked.slice(0, opts.check), ...ranked.filter((m) => lists.has(m))])]
    log(`${c.bold(volume.length)} mints with volume (${opts.volume}). Checking the top ${opts.check} and the app lists' tokens: ` +
      `${mints.length} mints on Jupiter and on chain…`)
    const [jupiter, facts] = await Promise.all([
      jupiterTokens(mints, (d, t) => d % 500 === 0 && log(c.dim(`  Jupiter ${d}/${t}`))),
      mintFacts(rpc, mints),
    ])
    const toQuote = mints.filter((m) => facts.has(m) && m !== WSOL_MINT.toBase58())
    log(`Quoting ${toQuote.length} mints on ${opts.env} (sell, then buy), ${opts.quoteRps}/s; NoLiquidity answers are asked again slowly…`)
    const quotes = await barnQuotes(env.apiBase, toQuote, BigInt(Math.round(opts.solPerToken * 1e9)), opts.quoteRps, (d, t, round) => {
      if (d % 100 === 0 || d === t) log(c.dim(`  ${round ? `retry round ${round}: ` : ''}quoted ${d}/${t}`))
    })
    const routedVolume = await loadRoutedVolume(opts.routedVolume)
    const rows = buildRows({ volume, jupiter, coingecko, facts, quotes, lists, checked: new Set(mints), routedVolume })
    const date = new Date().toISOString().slice(0, 10)
    mkdirSync(opts.out, { recursive: true })
    const write = (name: string, body: string) => {
      writeFileSync(resolve(opts.out, name), body)
      return resolve(opts.out, name)
    }
    const tokens = rows.filter((r) => r.mint !== WSOL_MINT.toBase58() && r.mint !== NATIVE_SOL.toBase58())
    const files = [
      write('universe.csv', toCsv(rows)),
      write('summary.md', summarize(rows, { date, source: opts.volume, listNames: Object.keys(APP_LISTS), lists })),
    ]
    const count = (s: string) => tokens.filter((r) => r.barn === s).length
    console.log(
      `\n${ui.ok('Token universe')}: ${tokens.length} tokens, ${c.green(tokens.filter(supported).length)} supported by CoW, ` +
        `${count('sell-only')} sell-only, ${c.yellow(count('unsupported'))} unsupported, ${c.yellow(count('no-route'))} no route, ` +
        `${tokens.filter((r) => r.barn === 'tradable' && !r.coingecko).length} without a CoinGecko price`,
    )
    for (const f of files) console.log(c.dim(`  ${f}`))
    console.log(`\nScenarios: ${c.green('pnpm sim build-token-sequence')}`)
    process.exit(0)
  })

program
  .command('build-token-sequence')
  .description('Write the token coverage sequence (scenarios/token-universe/test_01…test_03) from token-universe/universe.csv: each token in one file only')
  .option('--universe <dir>', 'token universe folder', resolve(QOS_ROOT, 'token-universe'))
  .option('-o, --out <dir>', 'scenario folder', resolve(QOS_ROOT, 'scenarios', 'token-universe'))
  .option('--routed-volume <source>', `refresh the routed volume in universe.csv first: CSV export or dune:<query id> (done anyway when universe.csv has none; default dune:${DEFAULT_ROUTED_QUERY})`)
  .option('--long-tail <n>', 'tokens in the long-tail sample', (v) => parseInt(v, 10), 50)
  .option('--seed <n>', 'long-tail sample seed', (v) => parseInt(v, 10), 1)
  .option('--top <n>', 'tokens in the first, quick file (top CoW Swap tokens)', (v) => parseInt(v, 10), 50)
  .option('--no-buys', 'skip the buy step (test_05_buy-vs-jupiter), which asks Jupiter for an exact-out quote per token')
  .option('--jupiter-rps <n>', "Jupiter quotes per second for the buy step (its public API is rate-limited)", parseFloat, 1)
  .option('--sol-per-token <sol>', 'SOL sold into each token', parseFloat, 0.005)
  .option('--traders <n>', 'traders per file', (v) => parseInt(v, 10), 30)
  .option('--quote-rps <n>', 'quotes per second while classifying', parseFloat, 5)
  .addOption(envOption)
  .action(async (opts) => {
    process.env.RPC_URL ||= process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com'
    const csv = resolve(opts.universe, 'universe.csv')
    // The build date is in summary.md's title; the CSV's timestamp moves with every git checkout.
    const summary = resolve(opts.universe, 'summary.md')
    const built = (existsSync(summary) && /\((\d{4}-\d{2}-\d{2})\)/.exec(readFileSync(summary, 'utf8').split('\n')[0])?.[1]) || statSync(csv).mtime.toISOString().slice(0, 10)
    let rows = fromCsv(readFileSync(csv, 'utf8'))
    if (opts.routedVolume || !rows.some((r) => r.routed)) {
      const source = opts.routedVolume ?? `dune:${DEFAULT_ROUTED_QUERY}`
      rows = withRoutedVolume(rows, await loadRoutedVolume(source))
      const { atime, mtime } = statSync(csv)
      writeFileSync(csv, toCsv(rows))
      utimesSync(csv, atime, mtime) // keep the build date: the files carry it
      log(`Routed volume from ${source} written to ${csv}`)
    }
    // App lists are read live: the frontend changes them more often than the universe is rebuilt. A list that can't be
    // fetched falls back to the membership universe.csv recorded when it was built.
    const appMints = new Set<string>()
    for (const [name, url] of Object.entries(APP_LISTS)) {
      try {
        for (const m of (await listMembership({ [name]: url })).keys()) appMints.add(m)
      } catch (e) {
        const recorded = rows.filter((r) => r.lists.includes(name))
        log(ui.warn(`${name} can't be fetched (${errorDetail(e)}): using its ${recorded.length} tokens recorded in universe.csv (${built})`))
        for (const r of recorded) appMints.add(r.mint)
      }
    }
    // The long tail was never read on chain: read a seeded oversample, keep the real mints.
    const env = loadEnv({ needMnemonic: false, cowEnv: opts.env })
    const candidates = sampleLongTail(rows, opts.longTail * 3, opts.seed)
    const facts = await mintFacts(new Rpc(env.rpcUrl, 2), candidates.map((r) => r.mint))
    const longTail = candidates.flatMap((r) => {
      const f = facts.get(r.mint)
      return f ? [{ ...r, program: f.program, decimals: f.decimals, extensions: f.extensions }] : []
    })
    const steps = buildSequence(rows, { appMints, topSize: opts.top, longTail, longTailSize: opts.longTail })
    const listDir = resolve(opts.universe, 'sequence')
    mkdirSync(listDir, { recursive: true })
    mkdirSync(opts.out, { recursive: true })
    // Files of steps that no longer exist would read as part of the sequence: remove them.
    const ids = new Set([...steps.map((s) => s.id), 'test_05_buy-vs-jupiter']) // --no-buys keeps the last buy file
    for (const [dir, ext] of [[opts.out, '.csv'], [listDir, '.json']] as const) {
      for (const f of readdirSync(dir)) if (/^test_\d\d_/.test(f) && f.endsWith(ext) && !ids.has(f.slice(0, -ext.length))) rmSync(resolve(dir, f))
    }
    const done: { step: SequenceStep; share: string; cumulative: string; result?: { tradable: number; unsupported: number; noRoute: number; notMints: number } }[] = []
    const soFar: UniverseRow[] = []
    for (const step of steps) {
      soFar.push(...step.rows)
      const share = coverage(rows, step.rows)
      const cumulative = coverage(rows, soFar)
      const out = resolve(opts.out, step.id)
      if (!step.rows.length) {
        rmSync(`${out}.csv`, { force: true })
        rmSync(resolve(listDir, `${step.id}.json`), { force: true })
        log(c.dim(`${step.id}: no tokens left, skipped`))
        done.push({ step, share, cumulative })
        continue
      }
      const name = `${step.id}: ${step.title} (${step.rows.length} tokens, universe of ${built})`
      writeFileSync(resolve(listDir, `${step.id}.json`), JSON.stringify(toTokenList(name, step.rows, step.criteria, share), null, 2))
      const result = await writeListScenario(
        { name, criteria: step.criteria, coverage: share, extra: `Through this step (test_01 to ${step.id.slice(0, 7)}): ${cumulative}.`, tokens: step.rows.map((r) => ({ symbol: r.symbol, mint: r.mint, decimals: r.decimals! })) },
        { out, source: `token-universe/sequence/${step.id}.json`, regenerate: 'pnpm sim build-token-sequence', env: opts.env,
          solPerToken: opts.solPerToken, traders: opts.traders, sellBack: 0.9, mode: 'sponsored', includeFailing: true, quoteRps: opts.quoteRps },
      )
      done.push({ step, share, cumulative, result })
    }
    if (opts.buys) {
      const tokens = steps.filter((s) => s.id !== 'test_04_long-tail').flatMap((s) => s.rows)
      done.push(await buyStep(rows, tokens, { out: opts.out, listDir, built, solPerToken: opts.solPerToken, traders: opts.traders, rps: opts.jupiterRps }))
    }
    writeExpected(opts.out, rows, opts.solPerToken)
    writeFileSync(resolve(opts.out, 'README.md'), sequenceReadme(done, built))
    log(`${ui.ok('Sequence')}: ${resolve(opts.out, 'README.md')}`)
    process.exit(0)
  })

/**
 * test_05_buy-vs-jupiter: one BUY per relevant token, worth `solPerToken` SOL, annotated with whether Jupiter can quote
 * that exact-out buy. CoW buys need the same exact-out route, so parity is the bar: fill where Jupiter can, fail where it can't.
 */
async function buyStep(all: UniverseRow[], tokens: UniverseRow[], o: { out: string; listDir: string; built: string; solPerToken: number; traders: number; rps: number }) {
  const id = 'test_05_buy-vs-jupiter'
  const SOL = WSOL_MINT.toBase58()
  const price = new Map<string, number>()
  const mints = [SOL, ...tokens.map((r) => r.mint)]
  for (let i = 0; i < mints.length; i += 50) for (const [k, v] of await usdPrices(mints.slice(i, i + 50))) price.set(k, v)
  const amounts = new Map<string, number>()
  let unpriced = 0
  for (const r of tokens) {
    const usd = price.get(r.mint)
    if (!usd || !price.get(SOL) || r.decimals === null) unpriced++
    else amounts.set(r.mint, Number(((o.solPerToken * price.get(SOL)!) / usd).toPrecision(3)))
  }
  // Jupiter's answer per token: a route or not. HTTP errors (its public API sheds load with 503s) aren't an answer:
  // those tokens are asked again, slowly, and stay "unknown" if Jupiter still doesn't reply.
  const answers = new Map<string, { ok: true } | { ok: false; reason: string }>()
  const ask = async (todo: UniverseRow[], rps: number) => {
    const limiter = new RateLimiter(rps)
    for (const [i, r] of todo.entries()) {
      await limiter.take()
      answers.set(r.mint, await jupiterExactOut(r.mint, toRaw(amounts.get(r.mint)!, r.decimals!)).catch((e) => ({ ok: false as const, reason: `error: ${errorDetail(e)}` })))
      if ((i + 1) % 100 === 0) log(c.dim(`  ${i + 1}/${todo.length}`))
    }
  }
  const unanswered = (r: UniverseRow) => { const a = answers.get(r.mint); return !!a && !a.ok && /^error|HTTP/.test(a.reason) }
  const priced = tokens.filter((r) => amounts.has(r.mint))
  log(`${id}: asking Jupiter for ${priced.length} exact-out quotes at ${o.rps}/s…`)
  await ask(priced, o.rps)
  for (let round = 0; round < 2 && priced.some(unanswered); round++) {
    const again = priced.filter(unanswered)
    log(c.dim(`  Jupiter didn't answer for ${again.length} tokens: asking again slowly`))
    await sleep(15_000)
    await ask(again, 0.5)
  }
  let can = 0, cannot = 0, unknown = 0
  const lines: Omit<TradeRow, 'row'>[] = priced.map((r, i) => {
    const a = answers.get(r.mint)!
    const verdict = a.ok ? (can++, 'Jupiter can buy exact-out, expected to fill')
      : unanswered(r) ? (unknown++, `Jupiter didn't answer (${a.reason}), unknown`)
      : (cannot++, `Jupiter can't (${a.reason}), expected to fail`)
    return { trader: (i % o.traders) + 1, time: 0, type: 'buy', amount: amounts.get(r.mint)!, token: r.mint, otherToken: 'SOL', mode: 'sponsored', note: `${r.symbol} (${r.program}): ${verdict}` }
  })
  const step: SequenceStep = { id, title: 'Buys, checked against Jupiter',
    criteria: `the relevant tokens of test_01 to test_03, one BUY each worth ${o.solPerToken} SOL; CoW should match Jupiter's exact-out support`, rows: tokens }
  const share = coverage(all, tokens)
  writeFileSync(resolve(o.listDir, `${id}.json`), JSON.stringify(toTokenList(`${id}: ${step.title} (universe of ${o.built})`, tokens, step.criteria, share), null, 2))
  writeScenario(resolve(o.out, `${id}.csv`), lines,
    `${id}: ${step.title} (universe of ${o.built}), quoted on Jupiter on ${new Date().toISOString().slice(0, 10)}.\n` +
      `Token criteria: ${step.criteria}.\n` +
      `${can} tokens Jupiter can buy exact-out (expected to fill), ${cannot} it can't (expected to fail at the quote; a fill there beats Jupiter)` +
      `${unknown ? `, ${unknown} Jupiter didn't answer for (unknown)` : ''}${unpriced ? `, ${unpriced} skipped without a price` : ''}.\n` +
      `Buys only: the sell scenarios (test_01-04) never buy, so they don't depend on this. Fund with --sol-funding-per-trader 0.05.\n` +
      'Regenerate: pnpm sim build-token-sequence')
  log(`${ui.ok(id)}: ${can} buyable on Jupiter, ${cannot} not${unknown ? `, ${unknown} unknown (Jupiter didn't answer)` : ''}${unpriced ? `, ${unpriced} without a price` : ''}`)
  return { step, share, cumulative: share, result: { tradable: can, unsupported: 0, noRoute: cannot, notMints: 0 } }
}

/** Notes of rows the sequence writes for tokens expected to fail (see listRows and buyStep). */
const FAILING_ROW = /expected UnsupportedToken|: no route on |not a token mint|Jupiter can't|Jupiter didn't answer/

/**
 * expected.csv: what the API should handle today, from the sequence files as built (barn's and Jupiter's answers then):
 * one SOL -> token sell per token barn quotes (test_01-04; their sell-backs are covered by those files) and the buys
 * Jupiter can quote exact-out (test_05). A row failing here is a regression.
 */
function writeExpected(dir: string, universe: UniverseRow[], solPerToken: number) {
  const files = readdirSync(dir).filter((f) => /^test_\d\d_.*\.csv$/.test(f)).sort()
  const rows: Omit<TradeRow, 'row'>[] = []
  for (const f of files) {
    const id = f.replace(/\.csv$/, '')
    for (const r of readScenario(resolve(dir, f))) {
      const keep = r.type === 'buy' ? /Jupiter can buy/.test(r.note) : r.token === 'SOL' && !FAILING_ROW.test(r.note)
      if (keep) rows.push({ trader: r.trader, time: 0, type: r.type, amount: r.amount, token: r.token, otherToken: r.otherToken, mode: r.mode, note: `${id}: ${r.note}` })
    }
  }
  const sells = rows.filter((r) => r.type === 'sell')
  const buys = rows.filter((r) => r.type === 'buy')
  const mints = new Set(rows.map((r) => (r.type === 'sell' ? r.otherToken : r.token)))
  const share = coverage(universe, universe.filter((r) => mints.has(r.mint)))
  // Buys keep their tokens until cleanup, so a trader needs SOL for all of its buys at once.
  const perTrader = Math.max(0, ...[...new Set(rows.map((r) => r.trader))].map((t) => rows.filter((r) => r.trader === t).length))
  const funding = Math.ceil((0.03 + solPerToken * 1.1 * perTrader) * 100) / 100
  writeScenario(resolve(dir, 'expected.csv'), rows,
    `Expected to work on the API today (${new Date().toISOString().slice(0, 10)}): one SOL -> token sell for each of ${sells.length} tokens barn quotes ` +
      `(test_01-04) and ${buys.length} buys Jupiter can quote exact-out (test_05). Tokens barn rejects or can't route, and buys Jupiter can't do, aren't here.\n` +
      `Coverage of the ${mints.size} tokens: ${share}.\n` +
      'A row failing here is a regression (or a market change: rebuild with build-token-sequence). Notes keep the file each row comes from.\n' +
      `Fund with --sol-funding-per-trader ${funding}.\nRegenerate: pnpm sim build-expected (from the test files as they are)`)
  log(`${ui.ok('expected.csv')}: ${sells.length} sells + ${buys.length} buys; ${share}`)
}

program
  .command('build-expected')
  .description('Rewrite scenarios/token-universe/expected.csv from the sequence files as they are (no quoting)')
  .option('--universe <dir>', 'token universe folder', resolve(QOS_ROOT, 'token-universe'))
  .option('-o, --out <dir>', 'scenario folder', resolve(QOS_ROOT, 'scenarios', 'token-universe'))
  .option('--sol-per-token <sol>', 'SOL per row, for the funding hint', parseFloat, 0.005)
  .action(async (opts) => {
    writeExpected(opts.out, fromCsv(readFileSync(resolve(opts.universe, 'universe.csv'), 'utf8')), opts.solPerToken)
    process.exit(0)
  })

/** scenarios/token-universe/README.md: the steps, what each holds, and how much volume they cover. */
function sequenceReadme(done: { step: SequenceStep; share: string; cumulative: string; result?: { tradable: number; unsupported: number; noRoute: number; notMints: number } }[], built: string): string {
  const rows = done.map(({ step, share, cumulative, result }) =>
    `| ${step.rows.length ? `[\`${step.id}.csv\`](${step.id}.csv)` : `\`${step.id}\` (empty)`} | ${step.title} | ${step.rows.length} | ` +
    `${result ? `${result.tradable} tradable, ${result.unsupported + result.noRoute + result.notMints} expected to fail` : '–'} | ${share} | ${cumulative} |`)
  return [
    '# Token coverage sequence', '',
    `Generated by \`pnpm sim build-token-sequence\` from \`token-universe/universe.csv\` (universe of ${built}). Run the files in order:`,
    'each one only holds tokens no earlier file tested, so together they test every relevant token once, then a sample of the long tail.', '',
    `**Relevant** means: ${RELEVANCE}. Tokens CoW can't trade stay in: they get one row that fails at the quote, so the report shows them.`, '',
    '| File | What | Tokens | Rows | This file covers | Cumulative |', '|---|---|---:|---|---|---|', ...rows, '',
    'Coverage is of the 30-day volume by who routed it (Jupiter, DFlow, Titan, direct DEX trading) and of all DEX volume, SOL excluded.',
    'Titan is matched by the `T1TANpT…` program, a label no public source confirmed yet.', '',
    'Why no per-router steps: the relevant tokens in steps 1 and 2 already carry 84-98% of what Jupiter, DFlow and Titan route.',
    'The rest of DFlow and direct DEX volume sits in pools under $50k (pump.fun-style tokens), which a test order cannot trade meaningfully.', '',
    'test_01-04: sell 0.005 SOL into each token, then 90% of the quote back; they never buy (a short trader acquires with a SOL sell).',
    'test_05: one buy per token from test_01-03, worth 0.005 SOL; "expected to fail" there means Jupiter has no exact-out route either.',
    '`expected.csv`: every row above that should work on the API today (sells into tradable tokens, buys Jupiter can do). A failure there is a regression.',
    '30 traders per file. Fund with `--sol-funding-per-trader 0.05`.', '',
  ].join('\n')
}

/** CoW Swap's Solana token lists, as the frontend serves them. */
const APP_LISTS = {
  SolanaDefault: 'https://files.cow.fi/token-lists/SolanaDefault.json',
  NearSolana: 'https://files.cow.fi/token-lists/NearSolana.json',
}

/**
 * Refuse to trade when the SDK builds orders for another settlement version than the environment runs: the orderbook
 * accepts them, then they never get created on chain (InvalidInstructionData) and expire, spending fees for nothing.
 */
function checkSettlementVersion(cowEnv: CowEnv, deployed?: string) {
  if (canBuild(cowEnv, deployed) || process.env.SIM_SKIP_SETTLEMENT_CHECK === '1') return
  throw new Error(
    `${cowEnv} runs settlement v${deployed} (environments.json), but sim builds v${sdkVersion(cowEnv)} orders (the SDK) ` +
      `and v${SHIMMED.join(', v')} (settlement.ts): they would fail on chain with InvalidInstructionData. Upgrade ` +
      `@cowprotocol/sdk-trading-solana and @cowprotocol/sdk-config once a release supports v${deployed} ` +
      `(SIM_SKIP_SETTLEMENT_CHECK=1 skips this check).`,
  )
}

/** The RPC's host only: the rest of the URL often carries an API key. */
const rpcHost = (url: string) => {
  try {
    return new URL(url).host
  } catch {
    return '(unparsable RPC_URL)'
  }
}

/** Where RPC_URL came from: a shell export beats sim/.env, which surprises when both are set. */
const rpcSource = () =>
  RPC_FROM_ENV_FILE ? "sim/.env; your shell's public RPC_URL ignored"
    : SHELL_RPC_URL ? 'your shell, overriding sim/.env' : existsSync(envFile) ? 'sim/.env' : 'environment'

program
  .command('retry-session')
  .description("Write a scenario of a session's failed rows to play again: by default the ones the sim's own RPC failed (429s, timeouts)")
  .argument('<sessions...>', 'the session, then any retries of it already run (each row is judged by its latest attempt)')
  .option('--match <regex>', "which failures to retry, matched against the row's reason (default: RPC failures)")
  .option('-o, --out <file>', 'output CSV (default ../scenarios/retries/<session>[-<label>].csv)')
  .option('--label <name>', 'suffix for the default output name, e.g. no-liquidity')
  .action(async (names: string[], opts: { match?: string; out?: string; label?: string }) => {
    const [name] = names
    const journals = names.map(readJournal)
    const session = new Session(name)
    const meta = session.readMeta() as { start?: string; sim?: { scenario?: string } }
    const original = meta.sim?.scenario ? scenarioAsRun(meta.sim.scenario, meta.start, resolve(session.dir, 'sim', 'scenario.csv')) : []
    const match = opts.match ? (reason: string) => new RegExp(opts.match!, 'i').test(reason) : undefined
    const { rows, rpc, dependent, skipped, originalMatches } = retryRows(journals, original, match)
    if (original.length && !originalMatches) log(ui.warn("that scenario doesn't match the rows the session logged, so it isn't used"))
    const what = opts.match ? `matching /${opts.match}/` : "that failed on the sim's RPC (429s, timeouts)"
    if (!rows.length) {
      console.log(ui.ok(`${name}: no rows ${what}, nothing to retry`))
      process.exit(0)
    }
    const out = opts.out ?? resolve(QOS_ROOT, 'scenarios', 'retries', `${name}${opts.label ? `-${opts.label}` : ''}.csv`)
    mkdirSync(resolve(out, '..'), { recursive: true })
    const cmd = `pnpm sim retry-session ${names.join(' ')}${opts.match ? ` --match '${opts.match}'` : ''}${opts.label ? ` --label ${opts.label}` : ''}`
    writeScenario(out, rows,
      `Retry of session ${name}${names.length > 1 ? ` (after ${names.length - 1} retry run${names.length > 2 ? 's' : ''})` : ''}: ` +
        `${rpc} rows ${what}, and ${dependent} rows of the same traders that depend on them (the other leg of the same token). ` +
        'Same traders, amounts and modes.\n' +
        `${skipped.length ? `Not included: rows ${skipped.join(', ')} failed before the journal logged them, and the scenario as it ran is gone.\n` : ''}` +
        `Regenerate: ${cmd}\nAfterwards: pnpm sim session-stats ${names.join(' ')} <this run's session>`)
    console.log(`${ui.ok(`${rows.length} rows`)} (${rpc} matching + ${dependent} dependent${skipped.length ? `, ${skipped.length} not recoverable` : ''}) written to ${c.cyan(out)}`)
    if (skipped.length) console.log(ui.warn(`Rows ${skipped.join(', ')} failed before the journal logged them and the scenario as it ran is gone: not included`))
    console.log(c.dim(`Run: pnpm sim simulate-trade-session ${out} --sol-funding-per-trader 0.05 --report`))
    console.log(c.dim(`Then: pnpm sim session-stats ${names.join(' ')} <the new session>`))
    process.exit(0)
  })

program
  .command('session-stats')
  .description('Combined results of a session and its retries: each original row counted once, by its latest attempt')
  .argument('<sessions...>', 'the session, then its retries in the order they ran')
  .action(async (names: string[]) => {
    const journals = names.map(readJournal)
    const meta = new Session(names[0]).readMeta() as { sim?: { rows?: number } }
    const { outcome } = latestOutcomes(journals)
    const total = meta.sim?.rows ?? outcome.size
    // After each run: how many original rows had filled so far.
    for (let i = 0; i < names.length; i++) {
      const { outcome: o } = latestOutcomes(journals.slice(0, i + 1))
      const filled = [...o.values()].filter((x) => x.status === 'filled').length
      console.log(`${i ? `+ ${names[i]}` : names[i]}: ${c.bold(`${filled}/${total}`)} rows filled (${((100 * filled) / total).toFixed(1)}%)`)
    }
    const failed = [...outcome.values()].filter((x) => x.status === 'failed')
    const kinds = new Map<string, number>()
    for (const f of failed) kinds.set(failureKind(f.reason), (kinds.get(failureKind(f.reason)) ?? 0) + 1)
    const filled = total - failed.length - (total - outcome.size)
    console.log(`\nStill failing (${failed.length}${total > outcome.size ? `, plus ${total - outcome.size} never logged` : ''}):`)
    for (const [k, v] of [...kinds].sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(4)}  ${k}`)
    // Fillable: leave out what's expected to fail (UnsupportedToken) and what was never really tested (RPC, never logged).
    const excluded = (kinds.get('UnsupportedToken') ?? 0) + (kinds.get('RPC (429, timeout)') ?? 0) + (total - outcome.size)
    console.log(`\nFillable rows (without UnsupportedToken and RPC failures): ${c.bold(`${filled}/${total - excluded}`)} (${((100 * filled) / (total - excluded)).toFixed(1)}%)`)
    // Orders: every order the runs placed, cleanup left out.
    let placed = 0, fulfilled = 0
    for (const n of names) {
      const ordersPath = resolve(new Session(n).dir, 'orders.json')
      if (!existsSync(ordersPath)) { log(ui.warn(`${n}: no orders.json (run qos.py fetch); its orders aren't counted`)); continue }
      const step = new Map(readJournal(n).filter((e) => e.event === 'placed').map((e) => [e.uid, e.step]))
      const orders = (JSON.parse(readFileSync(ordersPath, 'utf8')) as { uid: string; status: string }[]).filter((o) => step.has(o.uid) && step.get(o.uid) !== 'cleanup')
      placed += orders.length
      fulfilled += orders.filter((o) => o.status === 'fulfilled').length
    }
    if (placed) console.log(`Orders placed: ${c.bold(`${fulfilled}/${placed}`)} filled (${((100 * fulfilled) / placed).toFixed(1)}%)`)
    process.exit(0)
  })

/** A session's sim/journal.jsonl as events. */
function readJournal(name: string): { event: string; row?: number; uid?: string; step?: string; [k: string]: unknown }[] {
  const path = resolve(new Session(name).dir, 'sim', 'journal.jsonl')
  if (!existsSync(path)) throw new Error(`no journal at ${path}`)
  return readFileSync(path, 'utf8').split('\n').filter(Boolean).map((l) => JSON.parse(l))
}

/** The scenario as a session ran it: the copy saved in the session, else the file, else git's version at the start. */
function scenarioAsRun(path: string, start?: string, saved?: string): TradeRow[] {
  if (saved && existsSync(saved)) return readScenario(saved)
  if (existsSync(path)) return readScenario(path)
  const rel = relative(QOS_ROOT, path)
  const git = (args: string[]) => spawnSync('git', args, { cwd: QOS_ROOT, encoding: 'utf8' })
  const commit = git(['log', '-1', '--format=%H', ...(start ? [`--before=${start}`] : []), '--all', '--', rel]).stdout.trim()
  const text = commit ? git(['show', `${commit}:${rel}`]) : undefined
  if (!text || text.status !== 0) {
    log(ui.warn(`${rel} is gone and not in git: retried rows default to sponsored mode and time 0`))
    return []
  }
  log(c.dim(`${rel} is gone: trying the version from commit ${commit.slice(0, 7)}`))
  return parseScenario(text.stdout)
}

program
  .command('new-wallet')
  .description('Generate a fresh mnemonic and print the funder and first trader addresses')
  .option('--words <n>', '12 or 24', (v) => parseInt(v, 10), 12)
  .action(async (opts) => {
    const { generateMnemonic } = await import('bip39')
    const mnemonic = generateMnemonic(opts.words === 24 ? 256 : 128)
    const w = wallets(mnemonic)
    console.log(`${c.bold('Mnemonic')} ${c.yellow('(store it in a password manager; anyone with it controls the funds)')}:\n\n  ${c.bold(mnemonic)}\n`)
    console.log(`${c.bold('Funder')} (account 0, fund this one): ${c.green(w.funder.publicKey.toBase58())}`)
    for (const n of [1, 2, 3]) console.log(`Trader ${n}: ${w.trader(n).publicKey.toBase58()}`)
    console.log(`\nTo use it, put it in sim/.env (git-ignored):\n  MNEMONIC="${mnemonic}"\n  RPC_URL="https://…"`)
  })

program
  .command('wallets')
  .description('List the funder and trader addresses with their SOL balances')
  .option('--traders <spec>', 'e.g. 1-25', '1-25')
  .action(async (opts) => {
    const env = loadEnv()
    const rpc = new Rpc(env.rpcUrl, 10, env.rpcBackupUrl)
    const w = wallets(env.mnemonic)
    console.log(`${c.bold('funder  ')} ${w.funder.publicKey.toBase58()}  ${c.green(fmtSol(await rpc.lamports(w.funder.publicKey)))}`)
    for (const n of parseTraders(opts.traders)) {
      const pk = w.trader(n).publicKey
      const bal = await rpc.lamports(pk)
      console.log(`${c.blue(`trader ${String(n).padStart(2)}`)} ${pk.toBase58()}  ${bal > 0n ? fmtSol(bal) : c.dim(fmtSol(bal))}`)
    }
  })

program.parseAsync().catch((e) => {
  console.error(ui.error(`Error: ${errorDetail(e)}`))
  process.exit(1)
})
