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

Main flags of `simulate-trade-session`:

| Flag | Default | |
|---|---|---|
| `--sol-funding-per-trader` | 0.1 | Tops each trader up to this |
| `--max-total-sol` | 3 | Refuses to fund more than this in total |
| `--fill-timeout` | 90 | Seconds to wait for a fill, then move on (the order expires on its own) |
| `--cancel-on-timeout` | off | Cancel on chain when giving up, so it can't fill late |
| `--max-retries` | 0 | Retry an order that didn't fill, with a new quote |
| `--order-validity` | 120 | Seconds an order is valid when placed (120 is the orderbook minimum) |
| `--quote-rps` / `--api-rps` / `--rpc-rps` | 5 / 8 / 10 | Request rates for quotes, other orderbook calls and Solana RPC. Raise for stress tests |
| `--report` | off | Fetch logs (if configured) and build the report afterwards |
| `--dry-run`, `--no-cleanup`, `-y` | | Quote only; keep the funds in the traders; skip the prompt |
| `--max-creation-sol` | off | Refuses a run whose estimated creation cost (acquisitions, retries, cleanup) is above this |
| `--env` | staging | `prod` must be passed explicitly |

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

Runs after every session, for up to `max(10, --rpc-rps)` traders at once:
1. **Sell** every token worth more than its account's rent back to SOL. Dust and tokens with no route are burned.
2. **Close** the empty token accounts (rent returns to the trader).
3. **Reclaim** the rent of finished orders.
4. **Sweep** all SOL back to the funder.

Safe to re-run. If a quote fails for a passing reason (rate limit, network), the tokens are left alone and reported.

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
| `token-2022/` | One file per Token-2022 extension, plus expected rejections. See its [README](../scenarios/token-2022/README.md) |
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
