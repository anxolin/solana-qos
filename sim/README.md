# sim: scripted Solana trade sessions

These commands play a CSV of trades on barn with up to N wallets derived from one mnemonic. They write a session folder that
`../qos.py` turns into a report, so the same scenario can be replayed before and after a backend change.

**This spends real SOL.** Barn trades mainnet assets.

## Setup

### 1. Create a wallet

```sh
cd ~/code/cow/solana-qos/sim && pnpm install
pnpm sim new-wallet          # prints a new 12-word mnemonic, the funder address and the first traders
```

- **One mnemonic covers every account.** Account 0 (`m/44'/501'/0'/0'`) is the **funder**, and trader *n* is account
  *n*. They're the same addresses Phantom or Solflare show if you import the mnemonic there.
- **Store the mnemonic in a password manager.** Anyone with it controls the funds.
- **Use a dedicated mnemonic for testing,** never your personal wallet.
- **Don't use `solana-keygen new` to make it.** Its printed pubkey is the seed's root key, not account 0, so you'd
  fund the wrong address. To reuse a mnemonic you already have, run `pnpm sim wallets` to see the right addresses.

### 2. Configure

Create `sim/.env`, which is git-ignored and loaded automatically by `pnpm sim`:

```sh
MNEMONIC="word1 word2 … word12"
RPC_URL="https://…"   # a paid RPC (Helius, Triton, QuickNode…); the public one rate-limits
```

Exported environment variables work too and take precedence. `SOLANA_RPC_URL` is accepted as an alias for `RPC_URL`.

### 3. Fund the funder

Send SOL from any wallet to the funder address. A session needs about `traders × --sol-funding-per-trader`, plus fees.
Most of it comes back at cleanup:
- 25 traders at 0.1 SOL is about 2.5 SOL
- the smoke test is about 0.1 SOL

Check the balances with:

```sh
pnpm sim wallets --traders 1-25
```

## Commands

```sh
# 1. Make a scenario (no wallet needed): 25 traders over 10 minutes, budgeted for 0.1 SOL each
pnpm sim generate-trade-session --traders 25 --duration 10 --sol-amount-per-trader 0.1 --seed 1 \
  --self-ratio 0.2 -o ../scenarios/kaffee-25x10.csv

# 2. Check it: quotes every row, shows funding and expected spend per trader, trades nothing
pnpm sim simulate-trade-session ../scenarios/kaffee-25x10.csv --dry-run

# 3. Play it: fund → trade → cleanup → report
pnpm sim simulate-trade-session ../scenarios/kaffee-25x10.csv --sol-funding-per-trader 0.1 --report

# Recover funds if a run was interrupted (or after --no-cleanup)
pnpm sim cleanup-trade-session --traders 1-25

# Addresses and balances
pnpm sim wallets --traders 1-25

# A new mnemonic for testing
pnpm sim new-wallet
```

### simulate-trade-session flags

| Flag | Default | |
|---|---|---|
| `--sol-funding-per-trader` | 0.1 | Each trader is topped up to this; traders already at it are skipped |
| `--max-total-sol` | 3 | Refuses to fund more than this in total |
| `--session` | `<date>-<scenario>` | Folder under `../sessions/` |
| `--max-retries` | 0 | Re-quote and retry an order that expires or times out (new uid each time). 0 = move on |
| `--order-validity` | 120 | Seconds an order has left when placed (the orderbook's minimum is 120). The quote asks for 10s more to cover placement time |
| `--fill-timeout` | 60 | Seconds to wait for a fill. After that the script moves on and the order expires on its own (≥ 120s: the orderbook minimum), so it can still fill late |
| `--cancel-on-timeout` | off | Cancel the order on-chain when giving up, so it can't fill late |
| `--slippage-bps` | quoted | Override the signed slippage |
| `--dry-run` | | Quote only |
| `--no-cleanup` | | Leave tokens and SOL in the trader wallets |
| `--quote-rps` / `--api-rps` / `--rpc-rps` | 5 / 8 / 10 | Client-side limits for quotes, other orderbook calls and Solana RPC. Raise them for stress tests; cleanup runs `rpc-rps / 2` traders at once (min 5) |
| `--report` | | Run `qos.py logs` (when VictoriaLogs credentials are set), `fetch` and `report` afterwards |
| `--env` | staging | `prod` must be passed explicitly |
| `-y` | | Skip the confirmation prompt |

## Scenario CSV

```
trader,time,type,amount,token,other_token,mode,note
1,0,sell,0.01,SOL,USDC,sponsored,swapper
2,90,buy,1,JUP,USDC,,rotator
```

| Column | Meaning |
|---|---|
| `trader` | Wallet number (1 = first account after the funder) |
| `time` | Seconds after the start when this trader begins the flow |
| `type` | `sell` or `buy` |
| `amount` | Amount of `token`, in human units |
| `token` | What `amount` refers to: the sell token for sells, the buy token for buys. A symbol from `universe.json` or `../tokens.json`, or an address. `SOL` is native SOL, `wSOL` the wrapped mint |
| `other_token` | The buy token for sells, the sell token for buys |
| `mode` | `sponsored` (default, gasless) or `self` (the trader pays fees and rent) |
| `note` | Free text (the generator writes the persona) |

Lines starting with `#` are comments.

## What a row does

1. **Acquire:** if the trader doesn't hold enough of the sell token, place a BUY of the missing amount, paid with SOL, and
   wait for it to fill. Buy rows acquire the quoted maximum sell amount plus 3%. Skipped when selling SOL.
2. **Main order:** placed as soon as the acquisition fills, then polled until fulfilled, expired or timed out.
   After `--fill-timeout` (60s) without a fill, the script moves on. By default it doesn't retry.

Rows for the same trader run in order, and a row waits for the trader's previous one. Different traders run in parallel.

Sponsored orders follow the orderbook's template:
- create the wSOL ATA, transfer and sync-native (only when selling SOL)
- approve the settlement state PDA
- create the buy ATA (paid by the funder; skipped for native SOL buys)
- `CreateOrder`

The backend's funder is the fee payer: the `funder` named in the quote, or the environment's `sponsor` in
`../environments.json` when set (the run then warns once if a quote names a different account). Native SOL buys are sponsored when the deployment supports them
(services#4990). Otherwise they fall back to self-paid, and the journal records `forcedSelf`.

### App data

Every order carries `appData` `0x3c74bf5b542341051f22f7a76d928086964a346f3fb5dc08eaf1e8348cbfbad2`, the keccak256 of
this pre-image, defined in `src/appData.ts`:

```json
{"appCode":"solana-qos","metadata":{"hooks":{"version":"0.2.0"}},"version":"1.15.0"}
```

That makes simulated orders easy to tell apart from real users in the orderbook, logs and analytics. If you
change the string, the hash changes: keep it byte-for-byte, and update the test that pins it.

### Token-2022

The simulator reads each mint's token program (classic SPL or Token-2022) and uses it for quotes, token accounts,
approvals and cleanup. What the backend accepts is decided in `services/crates/solana-token`. It rejects mints with a
transfer fee config (even at 0 bps), a transfer hook, pausable, non-transferable, or frozen-by-default accounts, and
accepts the rest: metadata, mint close authority, permanent delegate, interest-bearing, and so on.
`universe-token-2022.json` lists the tokens used for each extension.

## Cleanup

For each trader, with up to `max(10, --rpc-rps)` traders at once:
1. **Sell or burn.** Every token is quoted first. If the sale would return more SOL than closing its account does,
   it's sold to native SOL (self-paid). All of a trader's tokens are sold at the same time. Dust, or tokens the
   orderbook says can't be sold (no route, unsupported), are burned so the account can be closed. A quote that fails
   for another reason (rate limit, network) leaves the tokens untouched and reports them as left behind.
2. **Close** wSOL (unwraps it) and every empty, sold-out or burned token account. The rent goes back to the trader.
3. **Reclaim** the rent of finished orders: filled and cancelled ones right away, expired ones once past their
   validity. Their accounts are looked up in one batched call.
4. **Sweep** all SOL to the funder.

It's safe to re-run. Traders that fail get a second pass after 20s; if that fails too, the command to re-run is printed.

## Links while it runs

Each placed order prints its debug-tool link, and self-paid orders also print their Solscan transaction:

```
20:41:07 #1 t1 main: sell 0.0100 SOL → 1.17 USDC [sponsored] 0x8f2c41d0
      🐞 https://debug.barn.cow.fi/order/0x8f2c41d0…
```

The URLs come from `../environments.json` for the `--env` in use: `debug.barn.cow.fi` on staging, `debug.cow.fi` on prod.

## Output

`../sessions/<name>/`:
- `meta.json`: window and scenario
- `logs/seed_orders.txt`: every uid placed. `qos.py fetch` reads it.
- `sim/journal.jsonl`: one event per step: `placed`, `final` (status and seconds), `retry`, `place_error`, `row_failed`, `cleanup_done`

## Generator

- **Personas:** `swapper` (SOL ↔ stables), `degen` (memecoin buys and later sells), `rotator` (token → token, buys paid in
  USDC), `buyer` (buy orders). `--mix` picks the blend: `mixed`, `stables`, `memes` or `rotation`.
- **Prices:** from Jupiter for the tokens in `universe.json`.
- **Budget:** each trader's plan, including acquisitions, stays within `--sol-amount-per-trader` minus a 0.02 SOL
  reserve for fees and rent.
- **Holdings:** later rows sell what earlier rows bought.
- **Timing:**
  - flows for one trader are at least 75s apart (`--min-gap`; `--min-gap 0` packs them back to back, since the runner already waits for each flow to finish)
  - start times are random but fixed by `--seed`
  - every flow starts within `--duration`; the run itself lasts longer because of setup and cleanup

## Scenarios

| File | What it tests |
|---|---|
| `scenarios/smoke.csv` | Every path once, 2 traders, ~3 min. Run it first |
| `scenarios/kaffee-25x10.csv` | 25 traders over 10 min, liquid tokens, ~8 orders per minute |
| `scenarios/stress-25x6.csv` | 25 traders over ~7 min, liquid tokens, ~20 orders per minute (`--intensity 4 --min-gap 20`) |
| `scenarios/stress-50x2.csv` | **Heavy burst.** 50 traders, 139 rows starting within 2 min (~3 min of trading), all sponsored, ~15× the Kaffeekränzchen rate. Run with raised client limits: `--quote-rps 20 --api-rps 20 --rpc-rps 30` (if your RPC plan allows) |
| `scenarios/cow-simple.csv` | Coincidence of wants. Setup at t=0, then at t=150 four pairs placed in the same second: perfect SOL/USDC (sell 0.02 SOL vs buy 0.02 SOL), imperfect SOL/USDC (0.03 SOL vs 1.2 USDC), perfect USDC/USDT (3 vs 3), imperfect USDC/USDT (3 vs 1), plus a control with no counterparty. 9 traders, fund 0.07 |
| `scenarios/same-direction-25x1.csv` | 25 traders buy 10 JUP with SOL at the same moment: same market, same direction, no counterparty. Fund 0.06 |
| `scenarios/token-lists/solana-default.csv` | The CoW Swap app's default Solana list (`files.cow.fi/token-lists/SolanaDefault.json`): every one of its 432 tradable tokens, 0.005 SOL in and 90% back out, 30 traders (~29 orders each, back to back). Fund 0.05 |
| `scenarios/token-lists/solana-default-unsupported.csv` | Its 10 tokens the backend rejects (8 Token-2022 transfer fee, 2 transfer hook: PYUSD, USDP, stJUP, …). Expected to fail with `UnsupportedToken`; one trader, spends nothing |
| `scenarios/token-lists/solana-default-no-route.csv` | Its 19 tokens without a route on 6 Oct (soBTC, UST, LUNA, DJT, …). Expected to fail at the quote; one trader |
| `scenarios/token-lists/near-solana.csv` (+ `-no-route`) | The app's second Solana list (`NearSolana.json`): 12 tradable, 1 without a route (PUBLIC) |
| `scenarios/token-2022/` | Token-2022 smoke tests, one file per extension. Sell orders only (no exact-out route for Token-2022 on barn today). Fund with 0.05 per trader:<br>• `metadata-only.csv`: CATE, USDu, ANSEM (self-paid), jlUSDG<br>• `mint-close-authority.csv`: sUSD.infra, ZARP<br>• `permanent-delegate.csv`: SILV, sUSDu<br>• `interest-bearing.csv`: USDM1<br>• `token-2022-to-token-2022.csv`: USDu → CATE<br>• `probe-buy-exact-out.csv`: a BUY, expected `NoLiquidity` today<br>• `rejected-transfer-fee.csv`: PYUSD, USDG, expected `UnsupportedToken`<br>• `all.csv`: all of the above in one run (13 traders)<br>• `xstocks-4x10.csv`: **not runnable yet**, xStocks are rejected (transfer hook) |
| `scenarios/longtail-25x6.csv` | The Kaffeekränzchen's long-tail tokens (`universe-longtail.json`, `--mix longtail`): token coverage, buffers, routes |

A failure on liquid tokens points at the stack (funding, rate limits, creation window). A failure that only shows up in the long-tail run
points at token coverage. Keep them separate when comparing runs.

## Token lists

`generate-token-list-session` turns any token list (URL or file) into scenarios, so coverage follows the lists the app
uses:

```sh
pnpm sim generate-token-list-session --list https://files.cow.fi/token-lists/SolanaDefault.json -o ../scenarios/token-lists/solana-default
```

For every Solana token in the list it reads the mint on chain and applies the backend's Token-2022 rules. It then quotes
`--sol-per-token` SOL into the token on the orderbook, and writes:
- `<out>.csv`: tradable tokens, buy then sell back, spread over `--traders`
- `<out>-unsupported.csv`: tokens the backend rejects, expected to fail (only written when there are any)
- `<out>-no-route.csv`: tokens without a route at generation time, expected to fail (only written when there are any)

Tokens are referenced by address (list symbols aren't unique), with the symbol and token program in the `note` column.
The CoW Swap app loads `SolanaDefault.json` (Jupiter's verified + strict tokens, built by `cowprotocol/token-lists`
`src/scripts/solana.ts`) and `NearSolana.json`. Regenerate after those lists change.

## Token universe

`build-token-universe` (~1h: quotes are asked again slowly when the solvers answer NoLiquidity) ranks every Solana token by DEX volume and checks each one against CoW, to see whether the app's
lists cover what people actually trade:

```sh
pnpm sim build-token-universe                                  # volume from Dune (needs DUNE_API_KEY or DUNE_KEY in sim/.env)
pnpm sim build-token-universe --volume ~/Downloads/volume.csv  # or a CSV export of the same query
```

Volume comes from Dune query [8910905](https://dune.com/queries/8910905): `dex_solana.trades` over 90 days, every mint
with at least $100k (~106k mints; a full run takes ~22 min and ~340 credits, `days` is a parameter). Each transaction
counts once per mint by its net flow, so the intermediate hops of aggregator routes and arbitrage loops don't inflate it.
The top `--check` mints by volume (default 2000) plus every token in the app lists are then checked (the rest only count
towards the volume totals):

| Column | Source |
|---|---|
| `jupiter`, `organic`, `liquidity_usd`, `jupiter_volume_24h_usd` | Jupiter token API (`verified`, `listed` or `unknown`) |
| `coingecko` | CoinGecko's Solana mints. The backend's native prices come from CoinGecko: orders for tokens without one expire |
| `program`, `extensions` | the mint on chain: classic SPL or Token-2022, with fee bps, hook program, default state |
| `barn`, `barn_reason` | live quotes on `--env`: a sell of `--sol-per-token` SOL into the token, then a buy of half of it. `tradable`, `sell-only` (no exact-out route; mostly Token-2022), `unsupported`, `no-route` |
| `cow_supported` | sell quote works and CoinGecko prices it |
| `lists` | membership in the app's `SolanaDefault` and `NearSolana` |
| `proposed` | Jupiter verified with organic score high or medium (the list proposed in #solana) |

Output, in `solana-qos/token-universe/`:
- `universe.csv`: one row per mint, ranked, with each token's share of the volume and the running total
- `summary.md`: volume coverage of each list, supported tokens missing from the lists, top tokens CoW can't trade and
  why, and the SPL / Token-2022 split with every extension weighted by volume
- `tokenlist-top<N>.json` (`--top`, default 250) and `tokenlist-missing.json`: token lists of supported tokens, for
  `generate-token-list-session`:

```sh
pnpm sim generate-token-list-session --list ../token-universe/tokenlist-top250.json -o ../scenarios/token-lists/top250
pnpm sim generate-token-list-session --list ../token-universe/tokenlist-missing.json -o ../scenarios/token-lists/missing-from-app
```

## Tests

`pnpm test` checks:
- wallet derivation against `solana-keygen`
- CSV validation and amount conversion
- generator rules: determinism, budget, spacing, native SOL payouts, and that a token is only sold after it was acquired

Never use the test mnemonic (`abandon … about`) for real funds: it's public.
