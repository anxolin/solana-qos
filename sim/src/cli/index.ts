import { existsSync } from 'node:fs'
import { basename, resolve } from 'node:path'
import { spawnSync } from 'node:child_process'
import { createInterface } from 'node:readline/promises'
import { Command, Option } from 'commander'
import type { CowEnv } from '@cowprotocol/sdk-config'
import { LOG_ENV_HINT, links, loadEnv, logsConfigured, lamportsToSol, QOS_ROOT, SIM_ROOT, solToLamports, TRADER_RESERVE_SOL } from '../config.js'
import { Rpc } from '../rpc.js'
import { fmtSol, fund, fundingPlan, wallets } from '../wallets.js'
import { Orders } from '../orders.js'
import { Session } from '../session.js'
import { readScenario, tradersIn, writeScenario, type TradeRow } from '../scenario.js'
import { runRow, type FlowContext, type RowResult } from '../flow.js'
import { cleanupTrader } from '../cleanup.js'
import { loadUniverse, resolveToken, splMint, toRaw, fromRaw, usdPrices } from '../tokens.js'
import { generate, MIN_GAP_S, MIXES } from '../generator.js'
import { errorDetail, sleep } from '../limiter.js'
import * as ui from '../ui.js'
import { c, tag } from '../ui.js'

// Optional sim/.env; exported variables win because loadEnvFile never overwrites them.
const envFile = resolve(SIM_ROOT, '.env')
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

/** Traders cleaned up at once: one per 2 RPC calls/s (at least 5), so cleanup scales with the RPC plan. */
const cleanupParallel = (rpcRps = 10) => Math.max(5, Math.floor(rpcRps / 2))

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
  const CLEANUP_BATCH_S = 60 // a batch of traders sells leftovers in parallel
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

function context(opts: { env: CowEnv; maxRetries?: number; orderValidity?: number; fillTimeout?: number; slippageBps?: number } & RateOpts, session: Session) {
  const env = loadEnv({ cowEnv: opts.env })
  const rpc = new Rpc(env.rpcUrl, opts.rpcRps ?? 10)
  const orders = new Orders(rpc, {
    env: opts.env,
    apiBase: env.apiBase,
    validFor: opts.orderValidity ?? 120,
    fillTimeout: opts.fillTimeout ?? 60,
    slippageBps: opts.slippageBps,
    quoteRps: opts.quoteRps,
    apiRps: opts.apiRps,
  })
  const ctx: FlowContext = { link: links(env.urls), rpc, orders, session, maxRetries: opts.maxRetries ?? 1, acquireBufferBps: 300, log }
  return { env, rpc, orders, ctx, w: wallets(env.mnemonic) }
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
  .command('simulate-trade-session')
  .argument('<scenario>', 'CSV: trader,time,type,amount,token,other_token[,mode,note]')
  .option('--session <name>', 'session folder name under solana-qos/sessions')
  .option('--sol-funding-per-trader <sol>', 'SOL each trader is topped up to', parseFloat, 0.1)
  .option('--max-total-sol <sol>', 'refuse to fund more than this in total', parseFloat, 3)
  .option('--max-retries <n>', 're-quote and retry an order that expires', (v) => parseInt(v, 10), 1)
  .option('--order-validity <s>', 'seconds an order has left when placed (orderbook minimum 120)', (v) => {
    const n = parseInt(v, 10)
    if (!(n >= 120)) throw new Error('--order-validity must be at least 120 seconds (the orderbook rejects shorter orders)')
    return n
  }, 120)
  .option('--fill-timeout <s>', 'seconds to wait for a fill before cancelling on-chain and retrying', (v) => parseInt(v, 10), 60)
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
    const session = new Session(opts.session ?? `${stamp}-${basename(scenarioPath, '.csv')}`)
    const { env, rpc, orders, ctx, w } = context(opts, session)

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
      ['Debug tool', c.dim(env.urls.debug)],
      ['Session', opts.dryRun ? c.dim('none (dry run)') : c.cyan(session.name)],
      ['Funder', `${w.funder.publicKey.toBase58()}  ${c.green(fmtSol(funderBalance))}`],
      ['Per trader', `${opts.solFundingPerTrader} SOL`],
      ['Top-ups', `${c.bold(fmtSol(total))} ${c.dim(`to ${plan.filter((l) => l.topUp > 0n).length} of ${traders.length} traders`)}`],
      ['Max total', `${opts.maxTotalSol} SOL`],
      ['Retries', String(opts.maxRetries)],
      ['Order validity', `${opts.orderValidity}s ${c.dim(`(cancelled on-chain if not filled after ${opts.fillTimeout}s)`)}`],
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
    const issues = [
      ...(total > solToLamports(opts.maxTotalSol) ? [`Funding ${fmtSol(total)} is over --max-total-sol ${opts.maxTotalSol}`] : []),
      ...(total + 100_000n > funderBalance ? [`The funder can't cover ${fmtSol(total)}`] : []),
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
    const rpc = new Rpc(env.rpcUrl)
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
