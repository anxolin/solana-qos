import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, utimesSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { createInterface } from 'node:readline/promises'
import { Command, Option } from 'commander'
import type { CowEnv } from '@cowprotocol/sdk-config'
import { canBuild, SHIMMED, sdkVersion } from '../settlement.js'
import { LOG_ENV_HINT, links, loadEnv, logsConfigured, lamportsToSol, QOS_ROOT, SIM_ROOT, solToLamports, TRADER_RESERVE_SOL } from '../config.js'
import { NATIVE_SOL, Rpc, WSOL_MINT } from '../rpc.js'
import { fmtSol, fund, fundingPlan, wallets } from '../wallets.js'
import { Orders } from '../orders.js'
import { Session } from '../session.js'
import { readScenario, sessionSlug, tradersIn, writeScenario, type TradeRow } from '../scenario.js'
import { runRow, type FlowContext, type RowResult } from '../flow.js'
import { cleanupTrader } from '../cleanup.js'
import { loadUniverse, resolveToken, splMint, toRaw, fromRaw, usdPrices } from '../tokens.js'
import { generate, MIN_GAP_S, MIXES } from '../generator.js'
import { classify, listRows, loadTokenList, type ListToken } from '../tokenlist.js'
import { barnQuotes, buildRows, buildSequence, coingeckoMints, coverage, DEFAULT_DUNE_QUERY, DEFAULT_ROUTED_QUERY, fromCsv, jupiterTokens, listMembership, loadRoutedVolume, loadVolume, mintFacts, RELEVANCE, sampleLongTail, summarize, supported, toCsv, toTokenList, withRoutedVolume, type SequenceStep, type UniverseRow } from '../universe.js'
import { errorDetail, sleep } from '../limiter.js'
import { creationBudget, ORDER_CREATION_LAMPORTS } from '../budget.js'
import * as ui from '../ui.js'
import { c, tag } from '../ui.js'

// Optional sim/.env; exported variables win because loadEnvFile never overwrites them.
const envFile = resolve(SIM_ROOT, '.env')
const SHELL_RPC_URL = process.env.RPC_URL
if (existsSync(envFile)) process.loadEnvFile(envFile)

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
 * that fail get one more pass after a pause, since cleanup is safe to repeat.
 */
async function cleanupAll(ctx: FlowContext, w: ReturnType<typeof wallets>, traders: number[], env: CowEnv, rpcRps?: number) {
  const done = new Map<number, Awaited<ReturnType<typeof cleanupTrader>>>()
  let todo = traders
  for (let pass = 1; pass <= 2 && todo.length; pass++) {
    if (pass > 1) {
      log(ui.warn(`Cleanup didn't finish for ${todo.length} traders, retrying in 20s: ${todo.map((n) => `t${n}`).join(', ')}`))
      await sleep(20_000)
    }
    const failed: number[] = []
    await pool(todo, cleanupParallel(rpcRps), async (n) => {
      try {
        done.set(n, await cleanupTrader(ctx, w, n, env))
      } catch (e) {
        failed.push(n)
        log(`  ${c.blue(`t${n}`)} ${c.blue('cleanup')}: ${ui.error(errorDetail(e).slice(0, 200))}`)
        ctx.session.log({ trader: n, step: 'cleanup', event: 'cleanup_failed', pass, error: errorDetail(e) })
      }
    })
    todo = failed.sort((a, b) => a - b)
  }
  if (todo.length) {
    console.log(ui.warn(`Cleanup still unfinished for ${todo.length} traders. Re-run: pnpm sim cleanup-trade-session --traders ${todo.join(',')}`))
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
      problems.push(`#${r.row} t${r.trader} ${r.type} ${r.amount} ${r.token}/${r.otherToken}: ${(e as Error).message}`)
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

program
  .command('simulate-trade-session')
  .argument('<scenario>', 'CSV: trader,time,type,amount,token,other_token[,mode,note]')
  .option('--session <name>', 'session folder name under solana-qos/sessions')
  .option('--sol-funding-per-trader <sol>', 'SOL each trader is topped up to', parseFloat, 0.1)
  .option('--max-total-sol <sol>', 'refuse to fund more than this in total', parseFloat, 3)
  .option('--max-creation-sol <sol>', 'refuse a run whose estimated creation costs exceed this amount', Number)
  .option('--max-retries <n>', 're-quote and retry an order that expires or times out (0 = move on)', (v) => parseInt(v, 10), 0)
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
  .option('--no-cleanup', 'leave tokens and SOL in the trader wallets')
  .option('--report', 'run qos.py fetch + report on the session afterwards')
  .option('-y, --yes', 'skip the confirmation prompt')
  .addOption(envOption)
  .action(async (scenarioPath: string, opts) => {
    const rows = readScenario(scenarioPath)
    const traders = tradersIn(rows)
    const stamp = new Date().toISOString().slice(0, 16).replace(/[T:]/g, '-')
    const session = new Session(opts.session ?? `${stamp}-${sessionSlug(scenarioPath)}`)
    const run = context(opts, session)
    const { env, rpc, orders, ctx, w } = run

    const target = solToLamports(opts.solFundingPerTrader)
    const plan = await fundingPlan(rpc, w, traders, target)
    const total = plan.reduce((s, l) => s + l.topUp, 0n)
    const funderBalance = await rpc.lamports(w.funder.publicKey)
    const est = estimateDuration(rows, traders.length, opts.rpcRps)
    const hasLogs = logsConfigured(opts.env)
    const onOff = (b: boolean) => (b ? c.green('on') : c.dim('off'))
    printSettings(opts.dryRun ? 'Trade session (dry run)' : 'Trade session', [
      ['Scenario', c.cyan(scenarioPath)],
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
      ['Top-ups', `${c.bold(fmtSol(total))} ${c.dim(`to ${plan.filter((l) => l.topUp > 0n).length} of ${traders.length} traders`)}`],
      ['Max total', `${opts.maxTotalSol} SOL`],
      ['Retries', String(opts.maxRetries)],
      ['Order validity', `${opts.orderValidity}s, the orderbook minimum`],
      ['Fill timeout', `${opts.fillTimeout}s, then ${opts.cancelOnTimeout ? 'cancel on-chain and move on' : 'move on and let the order expire'}`],
      ['Client limits', `${opts.quoteRps} quotes/s, ${opts.apiRps} API calls/s, ${opts.rpcRps} RPC calls/s`],
      ['Cleanup', onOff(opts.cleanup)],
      ['Report', onOff(Boolean(opts.report))],
      [
        'Logs',
        hasLogs
          ? c.green('VictoriaLogs via Grafana (full report)')
          : ui.warn(`not configured, the report will be basic. Set ${LOG_ENV_HINT}`),
      ],
    ])
    const budget = await checkCreationBudget(run, [{ name: scenarioPath, rows }], opts)
    const issues = [
      ...budget.issues,
      ...(total > solToLamports(opts.maxTotalSol) ? [`Funding ${fmtSol(total)} is over --max-total-sol ${opts.maxTotalSol}`] : []),
      ...(total + 100_000n > funderBalance ? [`The funder can't cover ${fmtSol(total)}`] : []),
      ...(budget.sponsor?.equals(w.funder.publicKey) && total + budget.sponsored + 100_000n > funderBalance
        ? ['The shared funder cannot cover both trader top-ups and sponsored creations'] : []),
      ...plan.filter((line) => (budget.estimates[0].selfCosts.get(line.trader) ?? 0n) > line.balance + line.topUp)
        .map((line) => `Trader ${line.trader} cannot cover its estimated self-paid creation costs after funding`),
    ]
    if (issues.length && !opts.dryRun) throw new Error(issues.join('; '))
    for (const i of issues) console.log(ui.warn(i))

    if (opts.dryRun) {
      await dryRun(ctx, w, rows, opts.solFundingPerTrader)
      return
    }
    await confirm(`Fund ${fmtSol(total)} and play ${rows.length} trades on ${opts.env}?`, opts.yes)
    await fund(rpc, w, plan, log, ctx.link.tx)
    session.log({ step: 'setup', event: 'funded', total: total.toString(), traders })

    const start = Date.now() + 5000
    session.writeMeta({
      rpc: rpcHost(env.rpcUrl),
      name: `${session.name} trade session`,
      title: session.name,
      start: new Date(start).toISOString(),
      env: opts.env,
      sim: { scenario: resolve(scenarioPath), traders: traders.length, rows: rows.length, solFundingPerTrader: opts.solFundingPerTrader },
    })
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

    // Rows for one trader run in order (a row waits for the previous one); traders run in parallel.
    const chains = new Map<number, Promise<unknown>>()
    const results: RowResult[] = []
    await Promise.all(
      rows.map((row) => {
        const prev = chains.get(row.trader) ?? Promise.resolve()
        const p = prev.then(async () => {
          const wait = start + row.time * 1000 - Date.now()
          if (wait > 0) await sleep(wait)
          log(`${tag(row.row, row.trader)} ${ui.kind(row.type)} ${c.bold(`${row.amount} ${row.token}`)} ${row.type === 'sell' ? '→' : '←'} ${c.bold(row.otherToken)} ${c.dim('[')}${ui.mode(row.mode)}${c.dim(']')}${row.note ? ' ' + c.dim(row.note) : ''}`)
          results.push(await runRow(ctx, w.trader(row.trader), row))
        })
        chains.set(row.trader, p)
        return p
      }),
    )
    watching = false
    session.writeMeta({ trading_end: new Date().toISOString(), end: new Date(Date.now() + 60_000).toISOString() })

    const filled = results.filter((r) => r.status === 'filled').length
    console.log(`\n${(filled === results.length ? c.green : c.yellow)(c.bold(`${filled}/${results.length} rows filled`))}, ${results.reduce((s, r) => s + r.orders, 0)} orders placed.`)
    for (const r of results.filter((r) => r.status === 'failed').sort((a, b) => a.row - b.row)) console.log(`  ${tag(r.row, r.trader)}: ${c.red(r.reason ?? 'failed')}`)

    if (opts.cleanup) {
      log(c.bold('🧹 Cleaning up'))
      await cleanupAll(ctx, w, traders, opts.env, opts.rpcRps)
      // The session window covers cleanup too, so log queries see its orders.
      session.writeMeta({ end: new Date(Date.now() + 30_000).toISOString() })
    }
    if (opts.report) {
      for (const cmd of [...(logsConfigured(opts.env) ? ['logs'] : []), 'fetch', 'report']) spawnSync('python3', [resolve(QOS_ROOT, 'qos.py'), cmd, '--session', session.name], { stdio: 'inherit' })
    }
    log(`${ui.ok('Done.')} Session: ${c.cyan(session.dir)}`)
    await Promise.race([watch, sleep(0)])
    process.exit(0)
  })

program
  .command('cleanup-trade-session')
  .description('Sell every token back to SOL, close accounts, reclaim order rent and sweep SOL to the funder')
  .option('--traders <spec>', 'e.g. 1-25 or 1,3,7', '1-25')
  .option('--session <name>', 'session folder to journal into', 'cleanup')
  .option('--quote-rps <n>', 'quotes per second (raise for stress tests)', parseFloat, 5)
  .option('--api-rps <n>', 'other orderbook calls per second: posting, polling', parseFloat, 8)
  .option('--rpc-rps <n>', 'Solana RPC calls per second (your RPC plan is the limit)', parseFloat, 10)
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
    await confirm(`Clean up traders ${active.join(', ')}?`, opts.yes)
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
  .option('--sol-per-token <sol>', 'SOL sold into each token', parseFloat, 0.005)
  .option('--traders <n>', 'traders per file', (v) => parseInt(v, 10), 30)
  .option('--quote-rps <n>', 'quotes per second while classifying', parseFloat, 5)
  .addOption(envOption)
  .action(async (opts) => {
    process.env.RPC_URL ||= process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com'
    const csv = resolve(opts.universe, 'universe.csv')
    const built = statSync(csv).mtime.toISOString().slice(0, 10)
    let rows = fromCsv(readFileSync(csv, 'utf8'))
    if (opts.routedVolume || !rows.some((r) => r.routed)) {
      const source = opts.routedVolume ?? `dune:${DEFAULT_ROUTED_QUERY}`
      rows = withRoutedVolume(rows, await loadRoutedVolume(source))
      const { atime, mtime } = statSync(csv)
      writeFileSync(csv, toCsv(rows))
      utimesSync(csv, atime, mtime) // keep the build date: the files carry it
      log(`Routed volume from ${source} written to ${csv}`)
    }
    // App lists are read live: the frontend changes them more often than the universe is rebuilt.
    const appMints = new Set((await listMembership(APP_LISTS)).keys())
    // The long tail was never read on chain: read a seeded oversample, keep the real mints.
    const env = loadEnv({ needMnemonic: false, cowEnv: opts.env })
    const candidates = sampleLongTail(rows, opts.longTail * 3, opts.seed)
    const facts = await mintFacts(new Rpc(env.rpcUrl, 2), candidates.map((r) => r.mint))
    const longTail = candidates.flatMap((r) => {
      const f = facts.get(r.mint)
      return f ? [{ ...r, program: f.program, decimals: f.decimals, extensions: f.extensions }] : []
    })
    const steps = buildSequence(rows, { appMints, longTail, longTailSize: opts.longTail })
    const listDir = resolve(opts.universe, 'sequence')
    mkdirSync(listDir, { recursive: true })
    mkdirSync(opts.out, { recursive: true })
    // Files of steps that no longer exist would read as part of the sequence: remove them.
    const ids = new Set(steps.map((s) => s.id))
    for (const [dir, ext] of [[opts.out, '.csv'], [listDir, '.json']] as const) {
      for (const f of readdirSync(dir)) if (/^test_\d\d_/.test(f) && f.endsWith(ext) && !ids.has(f.slice(0, -ext.length))) rmSync(resolve(dir, f))
    }
    const done: { step: SequenceStep; share: string; cumulative: string; result?: Awaited<ReturnType<typeof writeListScenario>> }[] = []
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
    writeFileSync(resolve(opts.out, 'README.md'), sequenceReadme(done, built))
    log(`${ui.ok('Sequence')}: ${resolve(opts.out, 'README.md')}`)
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
    'Each file: sell 0.005 SOL into each token, then 90% of the quote back; 30 traders. Fund with `--sol-funding-per-trader 0.05`.', '',
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
const rpcSource = () => (SHELL_RPC_URL ? 'your shell, overriding sim/.env' : existsSync(envFile) ? 'sim/.env' : 'environment')

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
