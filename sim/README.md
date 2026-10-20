# sim: scripted Solana trade sessions

Plays a CSV of trades on barn with wallets derived from one mnemonic, then writes a session folder that `../qos.py`
turns into a report. Replay the same scenario before and after a change to compare.

**This spends real SOL.** Barn trades mainnet assets. Most of it comes back at cleanup.

## Setup

```sh
cd ~/code/cow/solana-qos/sim && pnpm install
pnpm sim new-wallet        # a new 12-word mnemonic, with the funder and first trader addresses
```

Put it in `sim/.env` (git-ignored, loaded automatically; exported variables win, except a public `RPC_URL` left in the
shell, which `sim/.env`'s own `RPC_URL` replaces). Live runs refuse the public RPC unless you pass `--allow-public-rpc`:

```sh
MNEMONIC="word1 word2 … word12"
RPC_URL="https://…"        # a paid RPC (Helius, Triton, QuickNode…): the public one rate-limits
RPC_BACKUP_URL="https://…" # optional: a second provider with its own quota, used while the first fails
DUNE_KEY="…"               # only for build-token-universe
COW_API_KEY="…"            # optional: orderbook API key, sent as X-API-Key for higher rate limits (also read by qos.py)
```

Then send SOL to the funder address. A session needs about `traders × --sol-funding-per-trader` (25 traders at 0.1 is
~2.5 SOL; the smoke test ~0.1 SOL).

Each order creation costs about **0.003 SOL** (rent and fees, before refunds). Before a live run the tool checks
that the sponsor and the traders can cover the creations, including acquisitions, retries and cleanup. Preview it
for one or more scenarios with `pnpm sim check-budget <scenario.csv>…`; `--max-creation-sol` refuses runs above a
limit, even with `--yes` (an estimate: trade amounts and other fees are extra).

About the wallets:
- Account 0 is the **funder**, trader *n* is account *n* (path `m/44'/501'/n'/0'`): the same addresses Phantom or
  Solflare show for the mnemonic. `pnpm sim wallets` lists them with balances.
- Use a dedicated mnemonic, keep it in a password manager, and never use the test one in `test/` (it's public).
- Don't create it with `solana-keygen new`: the pubkey it prints isn't account 0.

## Commands

```sh
# Make a scenario (no wallet needed)
pnpm sim generate-trade-session --traders 25 --duration 10 --sol-amount-per-trader 0.1 --seed 1 -o ../scenarios/kaffee-25x10.csv

# Check it: quotes every row and shows the funding needed, trades nothing
pnpm sim simulate-trade-session ../scenarios/kaffee-25x10.csv --dry-run

# Play it: fund, trade, clean up, report
pnpm sim simulate-trade-session ../scenarios/kaffee-25x10.csv --sol-funding-per-trader 0.1 --report

# Get the SOL back after an interrupted run (or --no-cleanup)
pnpm sim cleanup-trade-session --traders 1-25

# Addresses and balances
pnpm sim wallets --traders 1-25
```

Standalone cleanup shows any SOL top-ups needed for fees, wallet rent and order rent before asking for confirmation. Wallets with tokens to sell receive at least the usual 0.02 SOL reserve; wallets with only empty accounts or wSOL receive the current minimum SOL-account balance plus closure fees. That minimum is read from Solana, since a wallet with zero SOL may need its SOL account recreated even while token accounts remain. It stops before sending if the funder cannot cover the top-ups and transfer fees. This lets cleanup retry wallets whose SOL was already swept while tokens remained. Cleanup still returns remaining SOL to the funder, including on its final attempt when some tokens could not be sold.

By default, single and composite runs create missing receiving token accounts once before trading. Composites keep those accounts open between scenarios while selling tokens and recycling available SOL. Final cleanup closes the accounts and returns their rent. Existing accounts are reused. Rent is a temporary deposit, checked against the funder's balance during preflight; transaction fees and trading costs are spent. Receiving wSOL accounts can also retain wrapped SOL until final cleanup. `--no-cleanup` leaves accounts and funds in the wallets. Dry runs never create accounts.

Cleanup logs refer to two different kinds of account:

- **Token accounts** hold tokens, such as USDC. Prepared receiving accounts stay open until the whole run ends. Other token accounts can close between scenarios, including temporary wrapped SOL accounts; closing those converts wrapped SOL back into ordinary SOL.
- **Order records** store trade instructions, such as “sell SOL for at least 10 USDC.” `reclaimed 3 order records` means three finished order records were closed and their refundable deposits returned to whoever paid them. It does not mean three receiving token accounts were closed.

Main flags of `simulate-trade-session`:

| Flag | Default | |
|---|---|---|
| `--sol-funding-per-trader` | 0.1 | Tops each trader up to this |
| `--max-total-sol` | 3 | Refuses to fund more than this per scenario |
| `--fill-timeout` | 90 | Seconds to wait for a fill, then move on (the order expires on its own) |
| `--cancel-on-timeout` | off | Cancel on chain when giving up, so it can't fill late |
| `--max-retries` | 0 | Retry failed quotes, placement or fills; 0 means one attempt |
| `--order-validity` | 120 | Seconds an order is valid when placed (120 is the orderbook minimum) |
| `--quote-rps` / `--api-rps` / `--rpc-rps` | 5 / 8 / 10 | Request rates for quotes, other orderbook calls and Solana RPC. Raise for stress tests |
| `--report` | off | Fetch logs (if configured) and build the report afterwards |
| `--dry-run`, `--no-cleanup`, `-y` | | Quote only; keep the funds in the traders; skip the prompt |
| `--defer-cleanup` | automatic | Compatibility flag; unfinished cleanup now continues and retries at the end by default |
| `--max-creation-sol` | off | Refuses a run whose estimated creation cost (acquisitions, retries, cleanup) is above this |
| `--no-prepare-token-accounts` | preparation on | Skip receiving-account setup before trading |
| `--fresh-accounts` | off | Skip preparation and require missing receiving accounts for a dedicated fresh-account test |
| `--slippage-bps` | SDK default | Quote slippage in basis points; 500 means 5% |
| `--env` | staging | `prod` must be passed explicitly |

`--fill-timeout` starts after placement. `--max-retries N` allows at most N further attempts after placement errors or fill failures, shared across both kinds of failure. The SDK makes each request once, so its retries cannot multiply that budget. Standalone preparation and cleanup quotes also use `maxRetries`, with quote retry delays capped at one second. With `maxRetries: 0`, each quote, placement and cleanup stage gets one attempt, including no fresh quotes after a validity rejection or self-paid fallback after a native-SOL rejection. A run still has a separate final cleanup stage for unfinished wallets. A failed sponsored submission may still have been accepted, so outstanding-order recovery checks its UID before cleanup or the next scenario. Recovery polling and RPC transport handling remain separate from trade retries.

## Composite scenarios

A composite scenario combines existing CSV scenarios into one solver validation session. Add the CSV paths to a JSON config in the order you want to run them:

```text
Prepare receiving accounts once
Fund Burst → run → wait for outstanding orders → sell tokens and sweep SOL → 60s pause
Fund CoW → run → wait for outstanding orders → sell tokens and sweep SOL
Close retained accounts → return rent → one report
```

The command is `simulate-composite-scenario`. It uses the same trading flow and flags as `simulate-trade-session`.

### Try the small sample offline

From `sim/`, run:

```sh
pnpm sim simulate-composite-scenario test/fixtures/composite/composite.json --preview
```

The [sample config](test/fixtures/composite/composite.json) combines [Burst](test/fixtures/composite/burst.csv) (4 trades) and [CoW](test/fixtures/composite/cow.csv) (3 trades). Preview needs no credentials, makes no network calls, creates no session files, and places no trades. It shows the exact CSV paths from the config, the run order, a 60-second pause in the `Pause after running` column, and a 0.15 SOL funding cap per scenario. Results stay pending because preview does not execute anything.

Funding is money moved to trader wallets, with leftovers returned during cleanup. The separate order creation estimate covers fees/rent before refunds, including possible token acquisitions and cleanup orders; it is not the total cost of trading.

### Make your own config

For Grafiks, use [grafiks-composite.json](../scenarios/solver-validation/grafiks-composite.json). It runs the original five scenarios plus the shared fresh-account test: 197 trades across 122 wallets, with a 3 SOL funding cap per scenario (at most 2.8 SOL in trader top-ups at a time, plus upfront account rent). Its creation allowance is 0.987 SOL before refunds. The solver validation configs use 30-second pauses between scenarios; the sample and omitted-setting default remain 60 seconds. Shared functional and burst CSVs use shorter schedules for new runs; see [timing details](../scenarios/solver-validation/README.md#faster-schedules).

Save this JSON beside the two CSV files:

```json
{
  "name": "solver-a-burst-and-cow",
  "solver": "solver-a",
  "env": "staging",
  "breakSeconds": 60,
  "scenarios": ["burst.csv", "cow.csv"],
  "options": {
    "solFundingPerTrader": 0.07,
    "maxTotalSol": 0.15,
    "orderValidity": 300,
    "fillTimeout": 210,
    "cancelOnTimeout": true,
    "report": true
  }
}
```

| Field | Meaning |
|---|---|
| `name` | Required composite label, shown in settings and saved in metadata. |
| `solver` | Required report label. It does not select, enable, or route orders to a solver; enable the target solver in staging before testing. |
| `scenarios` | Required non-empty list of CSV paths or objects with `path` and `options`. Paths are relative to the JSON file. Each entry runs in order. |
| `env` | `staging` by default. Set `prod` explicitly to use production. |
| `breakSeconds` | Full pause after trades, outstanding orders, and cleanup finish; defaults to `60`. Set `0` to skip the pause. |
| `options` | Optional existing run settings in camelCase. Explicit CLI flags override the config. |

Supported `options`: `solFundingPerTrader`, `maxTotalSol`, `maxCreationSol`, `maxRetries`, `orderValidity`, `fillTimeout`, `cancelOnTimeout`, `slippageBps`, `quoteRps`, `apiRps`, `rpcRps`, `cleanup`, `report`, `prepareTokenAccounts`, and `freshAccounts`. Omitted settings use the existing run defaults. Unknown fields and invalid settings are rejected before funding. Confirmation can only be skipped with the CLI's `--yes` flag. `maxTotalSol` caps each scenario's funding pass and separately limits upfront token-account setup; `maxCreationSol` caps the whole composite's estimated order creation fees/rent before refunds, excluding receiving-account setup.

A scenario object can override only `freshAccounts`, `solFundingPerTrader`, and `slippageBps`. These per-scenario values take precedence over shared config and CLI settings. The main solver composites include this shared exception:

```json
{"path": "solver-fresh-accounts.csv", "options": {"freshAccounts": true, "solFundingPerTrader": 0.15, "slippageBps": 500}}
```

The runner excludes those wallets from preparation and checks their receiving accounts are missing before their first quotes. Each fresh-account row uses a separate wallet. If a receiving account already exists, the runner selects another seed-derived wallet outside the run’s reserved wallet range and checks it on-chain. It logs the replacement and saves the selected trader number in the checkpoint and effective scenario CSV, so resume and cleanup use the same wallet. Previously occupied wallets are left untouched. Resuming a partial scenario does not require accounts created by earlier rows to be missing again. Larger amounts and 5% slippage give account-opening costs more room; they do not guarantee a fill, and exact buys still require their signed output. Test the shared scenario alone with:

```sh
pnpm sim simulate-trade-session ../scenarios/solver-validation/solver-fresh-accounts.csv --fresh-accounts --sol-funding-per-trader 0.15 --slippage-bps 500
```

### Timing and wallets

CSV times stay relative to each scenario's own start. Rows for the same trader run in order, while different traders can run in parallel. A row waits for its own trader's previous flow to finish, not another trader's fill. Failed or unresolved earlier orders do not block or skip later rows on that wallet; recovery records their outcomes separately. Functional scenarios start independent wallets together and use short offsets for later wallet rows. Each burst wave shares a timestamp, but preparation, rate limits and unfinished earlier wallet flows can spread actual placement times. Each scenario gets separate trader wallets, so trader `1` in Burst and trader `1` in CoW are different wallets. The runner gives every row a unique ID and records the original CSV row and trader IDs.

After its row flows finish, a scenario makes a bounded recovery check for outstanding orders. Unknown outcomes are reported without waiting for expiry or skipping later rows. Cleanup is deferred for wallets whose unresolved orders may still execute; other wallets are cleaned normally before the pause. No pause is added after the last scenario. Funding happens before each scenario, using current balances; cleanup returns remaining SOL for the next funding pass. The creation budget is checked for the whole composite, and the report is generated once. With `--no-cleanup`, funds stay in separate wallets, so more SOL is needed upfront.

The next scenario's CSV clock starts after its funding finishes. Cleanup and funding take extra time beyond the pause. The saved CSV and report use the actual scenario offsets. Keep extra SOL for fees, trading losses, or unfinished cleanup; if a later funding check fails, the run stops before funding or playing that scenario.

### Quote or run it

```sh
# Quote and check funding; no trades. Requires the usual wallet/RPC settings.
pnpm sim simulate-composite-scenario test/fixtures/composite/composite.json --dry-run

# Live: asks for confirmation before funding and trading.
pnpm sim simulate-composite-scenario test/fixtures/composite/composite.json
```

`--preview` is the fully offline check. `--dry-run` uses RPC and quotes to check the rows but does not fund or trade. A live run uses the usual wallet/RPC settings described above.

Both `simulate-trade-session` and `simulate-composite-scenario` try cleanup after each scenario, keeping managed token accounts open. If cleanup cannot finish, they record the unfinished wallets and continue trading. After all trading, final cleanup retries those wallets and closes retained token accounts. No flag is needed:

```sh
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/fractal-composite.json --env staging
```

Each normal cleanup and the final cleanup use the configured retry budget. The runner checks submitted orders before queuing unfinished wallets, records their IDs in the `cleanup_deferred` journal event and saves them in the run checkpoint. Before the final attempt it checks orders again, skips wallets with orders that may still execute, and tops up token-holding wallets from the funder when they need SOL for fees and order rent. The final pass starts after the last scenario, with no extra inter-scenario pause. After an earlier deferral, the inter-scenario pause is one-third of the configured pause (10 seconds for a 30-second setting); successful cleanup keeps the normal pause. `--defer-cleanup` remains accepted for compatibility and has the same behavior as the default.

Queued funds stay in trader wallets until cleanup succeeds, so later scenarios may need more funder SOL; per-scenario funding and creation limits still apply. If the final cleanup fails or cannot be funded, the runner reports the remaining wallet IDs and leaves cleanup pending in the checkpoint. Run `resume-session <session-name>` to retry only pending cleanup without replaying trades, or use `cleanup-trade-session --traders <ids>` separately. `--no-cleanup` skips both normal and final cleanup.

### Interrupted runs

Resume an individual or composite run in the same session:

```sh
pnpm sim resume-session <session-name>
```

Resume uses the saved scenarios, effective settings, and wallet IDs; the original CSVs and config are no longer needed. It asks for confirmation and checks that the funder, settlement program, and orderbook match the original run. Two runners cannot use the same session at once. Starting a fresh run with an existing session name is rejected.

Normal runs, resumes, and cleanup deferral share the same recovery check. It makes up to three status lookups per order concurrently, bounded to about ten seconds per recovery check. Unknown outcomes are recorded as `recovery_unresolved` in `sim/journal.jsonl` and `unresolvedOrders` in `sim/run.json`, and highlighted with order UIDs and links. Failed trades are not replayed or marked filled. An unresolved order does not pause or skip later trades, including rows on the same wallet. Cleanup waits for that wallet until the order is confirmed final or its validity deadline plus a 30-second buffer has passed; unknown outcomes remain reported after that buffer. The final cleanup checks queued wallets again. If they still cannot be cleaned safely, a later resume retries recovery and cleanup.

If an older composite is blocked in cleanup, `pnpm sim resume-session <session-name>` retries cleanup and automatically queues remaining failures for the end before continuing the tests. `--defer-cleanup` on resume skips the current cleanup attempt, queues those wallets for the final pass and keeps cleanup enabled for later scenarios; this explicit skip refuses later scenarios that reuse those wallets. Cleanup still uses the configured CoW solver, so it does not bypass a solver problem.

| Interrupted during | Resume behavior |
|---|---|
| Trading | Skip completed and failed rows. Check submitted orders before continuing unfinished rows. |
| Token acquisition | If it filled, continue the row using the current wallet balance. |
| Cleanup | Top up unfinished cleanup wallets using the original funding target and cap, then clean only those wallets. |
| Pause | Wait for the remaining pause; time while stopped counts toward it. |
| After completion | Print that the session is finished; replay nothing. |

The active scenario clock is saved every second and on row outcomes. Ctrl-C saves it immediately during playback. Resume freezes that clock while stopped, preserving future timing gaps instead of sending every overdue row together. A hard stop may lose up to one second of clock progress. The original session start stays unchanged, remaining scheduled CSV times are updated, and the report lists resume times.

After a hard kill, a stale `sim/run.lock` may remain in the session folder. Resume prints its full path. Confirm the previous runner has stopped, remove that lock file, and run `resume-session` again. Stale locks are never removed automatically, so two resume commands cannot both take over the session.

Order IDs are recorded before submission. Resume checks their final status, waits for open orders, and stops if a status is missing or unavailable. It never guesses that an uncertain order can be placed again. An interrupted main order that filled is recorded as completed; one that expired or was cancelled is recorded as failed. A failure already recorded stays failed even if its order filled later. Funding uses current balances for unfinished rows, with cleanup after each scenario.

Only sessions started with this version have a resume checkpoint. Older sessions cannot be resumed safely. Use `cleanup-trade-session` to recover their wallets. `retry-session <session>` remains separate: it generates a CSV for recorded RPC failures and dependent failures, rather than continuing the saved schedule.

### Results and logs

A composite uses the same trade logs as an individual run: timestamps, `#row t<trader>` tags, acquisition/main steps, statuses, and transaction links. It only adds the scenario prefix (`[burst]` or `[cow]`). It ends with a table of per-scenario trade counts, completed trades, failed trades, and completion percentages, followed by failure reasons. Preview uses a table too, with completion shown as `Not run`. Completion means the entire planned trade flow succeeded, including any required token acquisition. A timed-out trade remains failed even if its order fills later; the report counts that order execution separately. Retries and cleanup orders do not increase the number of planned trades.

The runner prints the path to `sim/journal.jsonl` for detailed trade events and `report.html` for the combined results when reporting is enabled. The report's scenario table shows trade completion percentages, counts, and order executions. Local trade logs work without Grafana; backend solver logs require the existing Grafana settings.

### Saved files and report

Each composite creates one normal session folder with:

The default folder name is `<UTC timestamp>-composite-<solver>-run`, for example `2026-10-10-14-42-composite-solver-a-run`. Use `--session <name>` to choose a different folder name. The config's `name` describes the composite rather than naming its folder.

| File | What it contains |
|---|---|
| `sim/composite.json` | A copy of the input config. |
| `sim/run.json` | Atomic resume checkpoint: saved rows, effective settings, public wallet identity, scenario stages, clock progress, and results. No mnemonic or RPC credentials. |
| `sim/scenario.csv` | Combined rows with global trader IDs and actual offsets as scenarios start. Scenarios that have not started still have estimated offsets. |
| `meta.json` | `composite` name, solver label, break length, actual scenario windows, and source row/trader mappings. |
| `report.md` / `report.html` | Whole-session analysis, per-scenario totals, and scenario windows and breaks on the HTML timeline. Generated when `report` is enabled. |
| `orders.csv` | Order data with `sim_scenario` linking each order to its source scenario. |

Acquisitions and retries belong to their source scenario. Cleanup orders stay separate from scenario results. Existing single-CSV commands keep working.

### Local tests

```sh
pnpm test
pnpm typecheck
```

The TypeScript tests cover config validation, wallet/row mapping, CLI overrides, and outstanding orders. CLI tests run real commands with a fake clock and mocked external calls. They check per-scenario funding and cleanup, resumed individual and composite runs, partial cleanup and pauses, missing source CSVs, saved results, and one report pass. Recovery tests cover submitted orders, partial journal writes, uncertain statuses, and concurrent runners. All tests run without live trades.

## Scenario CSV

```
trader,time,type,amount,token,other_token,mode,note
1,0,sell,0.01,SOL,USDC,sponsored,swapper
2,90,buy,1,JUP,USDC,,rotator
```

- `trader`: wallet number (1 is the first after the funder)
- `time`: seconds after the start
- `type`, `amount`, `token`: sell `amount` of `token`, or buy `amount` of `token`
- `other_token`: what you get for a sell, what you pay with for a buy
- `mode`: `sponsored` (default, gasless) or `self` (the trader pays fees and rent)
- tokens are a symbol (`SOL`, `USDC`, anything in `universe*.json` or `../tokens.json`) or a mint address. `SOL` is native SOL
- lines starting with `#` are comments

## What happens per row

1. **Acquire.** If the trader doesn't hold enough of the sell token (after re-reading the balance, which can lag a fill),
   it first sells SOL for it and waits for the fill. It never buys: many tokens have no exact-out route. Within 5% of
   the amount, it sells what the trader holds instead.
2. **Trade.** Places the order and waits up to `--fill-timeout`. No retry unless `--max-retries`.

A trader's rows run one after another. Different traders run in parallel.

Each order prints its debug-tool link (`debug.barn.cow.fi` on staging), and self-paid ones their Solscan transaction.

Every order carries the app data hash `0x3c74bf5b542341051f22f7a76d928086964a346f3fb5dc08eaf1e8348cbfbad2`
(`{"appCode":"solana-qos","metadata":{"hooks":{"version":"0.2.0"}},"version":"1.15.0"}`, in `src/appData.ts`), so
simulated orders are easy to tell apart from real users. Changing the string changes the hash.

## Cleanup

Runs after each composite scenario or at the end of an individual session, for up to `max(10, --rpc-rps)` traders at once:

1. **Sell** every token worth more than its account's rent back to SOL. Dust is burned only when a successful quote values it below the account's rent.
2. **Close** the empty token accounts (rent returns to the trader).
3. **Reclaim** the rent of finished orders.
4. **Sweep** all SOL back to the funder.

Every failed quote, including `NoLiquidity` or "no route", leaves the tokens untouched and logs the reason. Unfilled cleanup orders also leave tokens for another attempt. Remaining SOL is still swept back to the funder. If tokens remain, the run queues those wallets and retries them after all trading finishes. Final cleanup tops up token wallets when needed. If that still fails, `resume-session <session-name>` retries pending cleanup without replaying completed or failed test rows. Use the same mnemonic so those wallets remain accessible. Wait for the quote or settlement problem to be fixed before retrying; resuming cannot recover tokens already burned.

## Output

`../sessions/<name>/`:
- `meta.json`: time window and scenario
- `logs/seed_orders.txt`: every order placed
- `sim/journal.jsonl`: one line per event (placed, final status, retries, errors, cleanup)

## Generating scenarios

`generate-trade-session` makes realistic traffic:
- **Personas:** `swapper` (SOL ↔ stables), `degen` (memecoins), `rotator` (token → token), `buyer` (buy orders).
  `--mix` picks the blend: `mixed`, `stables`, `memes`, `rotation`, `longtail`.
- **Budget:** each trader stays within `--sol-amount-per-trader`, keeping 0.02 SOL for fees and rent.
- **Realism:** later rows sell what earlier rows bought. Prices come from Jupiter.
- **Timing:** random but fixed by `--seed`. One trader's flows are at least 75s apart (`--min-gap`, 0 = back to back).
  `--intensity 4` trades 4× as often with 4× smaller amounts.

## Scenarios

In `../scenarios/`. Run `smoke.csv` first.

| File | What it tests |
|---|---|
| `smoke.csv` | Every path once. 2 traders, ~3 min |
| `kaffee-25x10.csv` | 25 traders over 10 min, liquid tokens |
| `stress-25x6.csv` | 25 traders, ~20 orders a minute |
| `stress-50x2.csv` | Heavy burst: 50 traders, 139 orders within 2 min. Run with `--quote-rps 20 --api-rps 20 --rpc-rps 30` |
| `cow-simple.csv` | Coincidences of wants: perfect and imperfect matches placed in the same second, plus a control. Fund 0.07 |
| `same-direction-25x1.csv` | 25 traders buy JUP at the same moment. Fund 0.06 |
| `longtail-25x6.csv` | The Kaffeekränzchen's long-tail tokens |
| `token-2022/` | One file per supported Token-2022 extension; non-zero transfer-fee tokens are excluded. See its [README](../scenarios/token-2022/README.md) |
| `token-universe/` | **Token coverage sequence**, run in order, each token in one file only: `test_01_cow-swap-top` (the 50 most traded CoW Swap tokens with a CoinGecko price: a quick health check), `test_02_cow-swap` (the rest of the app lists), `test_03_jupiter` (other relevant tokens), `test_04_long-tail` (a 50-token sample), `test_05_buy-vs-jupiter` (buys). `expected.csv` holds every row that should work today, as a regression suite. See its [README](../scenarios/token-universe/README.md) |
| `experiments/` | One-off probes from the token universe: `buy-gap-classic.csv`, `liquidity-ladder.csv`, `no-coingecko-price.csv`, `volume-weighted-20x10.csv` |
| `unsupported.csv` | `SolanaDefault` tokens CoW can't trade. Every row should fail at the quote |

A failure on liquid tokens points at the stack (funding, rate limits). A failure only on long-tail tokens points at token
coverage.

## Token-2022

The simulator handles both token programs for quotes, accounts, approvals and cleanup. On barn (as of 7 Oct):
- **Rejected:** a transfer fee above 0 bps.
- **Accepted:** a 0 bps fee config (USDG, PYUSD), a transfer hook with no program, permanent delegate, pausable,
  scaled UI amount (xStocks), confidential transfers, metadata.
- **Buy orders** fail for many Token-2022 tokens (no exact-out route); sells work.

`build-token-universe` re-checks this live; the summary's extension table is the current picture.

## Token lists

`generate-token-list-session` turns any token list (URL or file) into a scenario. For each token it quotes a small
sell on barn and sorts it into tradable, unsupported or no route:

```sh
pnpm sim generate-token-list-session --list https://files.cow.fi/token-lists/SolanaDefault.json -o ../scenarios/experiments/solana-default --include-failing
```

It writes `<out>.csv` (sell 0.005 SOL into each tradable token, then 90% back). With `--include-failing`, tokens that
fail the quote stay in the same file with one row each, so the report shows them; otherwise they go to
`<out>-unsupported.csv` and `<out>-no-route.csv`. The coverage sequence below uses the same code.

## Token universe

`build-token-universe` answers: **which Solana tokens do people trade, and can CoW trade them?**

```sh
pnpm sim build-token-universe                     # ~1 hour, needs DUNE_KEY
pnpm sim build-token-universe --volume file.csv   # or a CSV export of the Dune query
```

1. **Volume** from Dune query [8910905](https://dune.com/queries/8910905): every token with at least $100k traded
   in 90 days (~106k tokens). Multi-hop routes and arbitrage loops are counted once, not per hop.
2. **Checks** for the 2,000 most traded tokens and every token in the app lists:
   - Jupiter: verified, organic score, liquidity
   - CoinGecko: has a price (orders need one to settle)
   - on chain: classic SPL or Token-2022, and which extensions
   - barn: a sell quote and a buy quote. Answers of "no liquidity" are asked again slowly, because they're often
     solvers being rate-limited

A token is **supported** when barn quotes a sell into it and CoinGecko prices it.

3. **Routed volume** from Dune query [8921585](https://dune.com/queries/8921585): each token's 30-day volume split
   by who routed it: Jupiter, DFlow, Titan (label unconfirmed), direct DEX trading, other routers.

A token is **supported** when barn quotes a sell into it and CoinGecko prices it. It's **relevant** when it has at least
$50k of liquidity and the last 30 days carry at least 5% of its 90-day volume (still traded); support isn't required.

Output in `../token-universe/`:
- `summary.md`: how much volume each list covers, what's missing from the lists, why top tokens can't be traded, and
  the SPL / Token-2022 split by extension
- `universe.csv`: one row per token, ranked by volume

### Coverage sequence

```sh
pnpm sim build-token-sequence                                   # from universe.csv; app lists read live
pnpm sim build-token-sequence --routed-volume dune:8921585      # refresh the routed volume first
```

Writes `../scenarios/token-universe/`: `test_01_cow-swap-top.csv` (`--top`, default 50), `test_02_cow-swap.csv`,
`test_03_jupiter.csv`, `test_04_long-tail.csv`, and a README with what each file covers, alone and cumulatively (also in
each file's header). Each token appears in one file only. `test_05_buy-vs-jupiter.csv` tests buys on their own: one per
token of test_01-03, annotated with whether Jupiter can quote that exact-out buy (CoW should fill where Jupiter can;
`--no-buys` skips it). `expected.csv` gathers every row that should work on the API today (sells into tokens barn
quotes, buys Jupiter can do): run it to catch regressions.
The token lists behind them are in `../token-universe/sequence/`.

## Tests

`pnpm test` covers wallet derivation, the CSV format, the generator's rules, app data, retries and rate limits, RPC
failover, quote pacing before sponsored signing, cleanup's burn rule, token list classification and the token universe.
