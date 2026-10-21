# First round: Grafiks solver validation on staging

Run with only the target solver enabled in staging. These are new files; existing scenarios and remote changes are preserved. No live trades were placed while preparing them.

| Run                         | CSV                                                          | Main | Possible acquisitions | Cleanup | Total estimate | Creation allowance before refunds |
| --------------------------- | ------------------------------------------------------------ | ---: | --------------------: | ------: | -------------: | --------------------------------: |
| 1. Batch remainder          | [solver-same-direction-25.csv](solver-same-direction-25.csv) |   25 |                     0 |      25 |             50 |                         0.150 SOL |
| 2. Increasing load          | [solver-burst-sell.csv](solver-burst-sell.csv)               |   84 |                     0 |      32 |            116 |                         0.348 SOL |
| 3. Opposing orders          | [solver-cow.csv](solver-cow.csv)                             |   15 |                     6 |      13 |             34 |                         0.102 SOL |
| 4. Token coverage           | [solver-token-coverage.csv](solver-token-coverage.csv)       |   52 |                     0 |      37 |             89 |                         0.267 SOL |
| 5. Large route candidates   | [solver-transaction-size.csv](solver-transaction-size.csv)   |   10 |                     0 |       8 |             18 |                         0.054 SOL |
| 6. Fresh receiving accounts | [solver-fresh-accounts.csv](solver-fresh-accounts.csv)       |    8 |                     0 |       8 |             16 |                         0.048 SOL |

The five ordinary checks allow 307 orders conservatively, or 0.921 SOL at the planning rate of 0.003 SOL/order before refunds. The current Grafiks composite adds the shared fresh-account test: 194 main rows across 119 wallets, 323 estimated creations and a 0.969 SOL creation allowance. Counts assume no main-order retries, no unrelated tokens in wallets and one cleanup pass. Cleanup can retry after a failure, so estimates are not hard order ceilings. The complete burst sequence exceeds the earlier 100-order cap with the user's approval; the other files stay below 100. Trading amounts, upfront receiving-account rent and other fees are separate from the creation allowance.

## What to check

1. **25 sells:** all wallets spend SOL for JUP at time zero. This uses sell orders because the solver promises batches of up to four sells. Check how 25 orders split into groups and how the last order clears. One timestamp starts the flows; actual placement times determine which orders share an auction.
2. **Sell bursts:** 4, 8, 16, 24 and 32 wallets start at 0, 90, 180, 270 and 360 seconds. Wallets are reused, with unequal SOL inputs of 0.0025–0.004. Check batch sizes, one swap per sell batch, proportional output, single-order price protection and time to clear the backlog. This measures bursts, not a sustainable continuous arrival rate.
3. **CoW:** a copy of the existing perfect and imperfect opposing-order cases, including preparation and a control. It retains sponsored creation, so record creation failures separately. Verify both sides reached the same auction. A shared transaction proves batching; inspect DEX instructions to establish direct CoW. Unequal demand or the solver's DEX-price guard can make a swap or separate execution reasonable.
4. **Tokens:** 37 distinct token/SOL pairs, including Token-2022, memecoins, LSTs, Bitcoin, bridged assets, gold, stocks, stablecoins and pool tokens. The 15 original positive Token-2022 candidates retain inbound sells and exact-output buys; explicit return sells were removed because cleanup provides that direction. The 22 supported added controls each get one inbound sell and cleanup return. Non-zero transfer-fee tokens are excluded because autopilot does not support them. Supported zero-fee Token-2022 tokens remain. Original PAID is outside the frontend list. Original fixed buy amounts need fresh quote checks.
5. **Size:** SOL → EURC and SOL → JLP each have one baseline followed by four sells together, using self paid creation. Check account setup, lookup tables, chosen routes and final settlement bytes. The file is a large-route candidate test, not a proven byte-boundary test.

Measure the solver's quote and competition response times from its logs; order fill time measures a different part of the flow. Record version, auction participation, placement times, fills, errors, batches, DEX calls, payouts and transaction bytes. Passing a case proves that case, not production readiness. A separate buy burst can be considered later; buy batching was not part of the solver's promise.

## Transaction size evidence

Read-only Jupiter quote and swap builds on October 9 used 0.005 SOL, ExactIn, maxAccounts=64, wrapping enabled and dynamic compute estimation disabled. The API returned base64 transactions, whose decoded byte length matched Solana SDK serialization, including signature slots and lookup-table metadata.

| Pair       | Swap bytes at 0.005 SOL | Route                                   | Swap bytes at 0.02 SOL |
| ---------- | ----------------------: | --------------------------------------- | ---------------------: |
| SOL → EURC |                    1109 | Meteora DLMM → AlphaQ → DefiTuna        |                    951 |
| SOL → JLP  |                    1104 | Meteora DLMM → GoonFi V2 → Raydium CLMM |                    875 |

These are ordinary Jupiter swaps, not Grafiks's final CoW settlements. Aggregating four orders changes the amount and can select a smaller route. Routes change with liquidity, and this solver may choose Titan instead. EURC and JLP aliases resolve to the exact mints in the repository's token labels.

An offline memo-padding check on the 1109-byte EURC swap produced exactly 1200, 1232 and 1233 bytes using 56, 88 and 89 ASCII padding bytes. The variants retained all original instructions and account references, including three lookup tables, and deserialized successfully. They were unsigned and were not submitted or successfully simulated.

For an exact CoW boundary test, use a solver test hook or isolated replay to add a harmless memo interaction. Build the full settlement with its actual setup instructions and lookup tables, then adjust padding to reach 1200, 1232 and 1233 bytes. Passing the byte check is separate from passing simulation. CSV rows cannot request this extra instruction. The referenced [driver builder](https://github.com/cowprotocol/services/blob/703c58b2618154f6fa0bb64ed17075d01dbca33e/crates/solana-driver/src/domain/settlement.rs#L388-L425) builds v0 transactions with placeholder signature slots of the same wire size; its [size check](https://github.com/cowprotocol/services/blob/703c58b2618154f6fa0bb64ed17075d01dbca33e/crates/solana-driver/src/domain/competition.rs#L227-L243) rejects transactions above 1232 bytes. Confirm the deployed driver version before interpreting failures.

## Run settings

A composite runs several scenario CSVs in order as one session. Create a JSON config with a name, solver label, CSV filenames, and shared run options. Paths are relative to the JSON file, so a CSV beside it needs only its filename. See the [config format](../../sim/README.md#make-your-own-config).

For example, [grafiks-composite.json](grafiks-composite.json) lists the five scenarios previously run for Grafiks plus the shared fresh-account test. From `sim/`:

```sh
# Preview the scenario table and budget without credentials or network calls.
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/grafiks-composite.json --preview

# Run the composite; asks for confirmation before funding or trading.
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/grafiks-composite.json
```

The runner creates missing receiving token accounts once before the composite starts. Between scenarios it sells tokens and returns available SOL, keeping those accounts open. Final cleanup closes them and recovers rent. Single runs use the same setup at the beginning and closure at the end. Existing accounts are reused. Account rent is a refundable deposit; transaction fees, trading losses and burned dust are spent. Receiving wSOL accounts can retain wrapped SOL until final cleanup. `--no-cleanup` keeps accounts and funds in the wallets.

The solver composite configs pause for 30 seconds before funding the next scenario; the simulator still defaults to 60 seconds when a config omits `breakSeconds`. Allow extra SOL for fees, trading losses and upfront account rent; balances are checked before each funding pass. `maxTotalSol` caps funding per scenario and separately limits account setup. `maxCreationSol` covers the whole composite's estimated order creation fees/rent before refunds, excluding receiving-account setup.

Scenarios inherit the config's `options`; explicit CLI flags override shared settings. A scenario object can override `freshAccounts`, `solFundingPerTrader` and `slippageBps` for its own rows, taking precedence over shared settings. Use `--dry-run` to check quotes without trading or creating accounts. The solver name is a label: enable the target solver in the chosen environment before an isolated test. Each scenario keeps its own CSV timings and gets separate wallets. The session has prefixed trade logs, a results table, and one combined report when enabled.

Continue an interrupted run with `pnpm sim resume-session <session-name>`. It uses the saved settings and skips finished rows. See [interrupted runs](../../sim/README.md#interrupted-runs) for order checks and recovery details.

## Rizzolver and Helixbox

[rizzolver-composite.json](rizzolver-composite.json) checks Wintermute's supported staging tokens only: SOL, USDC, USDT and JUP. It runs 127 planned trades across 72 wallets: 6 standard-pair cases, 4 [SOL/JUP cases](rizzolver-sol-jup.csv) covering self-paid and sponsored sells and exact buys, 25 same-direction SOL/JUP sells, 84 burst sells and the 8 shared fresh-account cases. This retests JUP quoting, sponsored creation and completion under concurrent load. The creation allowance is 0.65 SOL, covering 202 estimated order creations (0.606 SOL before refunds).

Batching is a known current limitation: interpret the shared 25-sell and burst scenarios as completion and timing checks, despite their batching-oriented CSV notes. Record actual batch sizes without expecting four-order batches. The run uses a 180-second fill timeout to allow serial fills; its timeout-sensitive results are not directly comparable with earlier 60-second runs. CoW matching, unsupported-token coverage and transaction-size checks are excluded. Production eligibility is not determined by this config.

[helixbox-composite.json](helixbox-composite.json) keeps the seven checks: standard pairs, 25 same-direction sells, sell bursts, opposing orders, token coverage, transaction-size candidates and the shared eight fresh-account cases. It runs 200 planned trades across 122 wallets, with a 1.005 SOL allowance for 335 estimated order creations before refunds.

Both configs retain 30-second pauses, no retries, upfront receiving-account setup for ordinary wallets, final account closure and a 3 SOL funding cap per scenario. Helixbox retains its 60-second fill timeout; Rizzolver uses 180 seconds. The shared fresh-account cases retain 0.15 SOL funding per trader and 500 bps slippage. The expanded 30-case fresh-account scenario remains separate.

From `sim/`, preview either config offline:

```sh
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/rizzolver-composite.json --preview
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/helixbox-composite.json --preview
```

Enable only the target solver in staging before testing; the config's solver label does not isolate it. Replace `--preview` with `--dry-run` to check live quotes without funding or trading, then remove that flag for a live run.

## Shared fresh-account test

The main solver composites include [solver-fresh-accounts.csv](solver-fresh-accounts.csv). Its eight separate wallets cover SOL→USDC and SOL→USDT, sell and exact-buy orders, and self-paid and sponsored creation. These wallets skip preparation, and the runner verifies the receiving token accounts are missing before quoting. Ordinary test amounts stay unchanged.

This scenario alone uses 0.1 SOL sells, exact buys of 10 USDC/USDT, 0.15 SOL funding per wallet and 500 bps (5%) slippage. Its maximum wallet top-ups are 1.2 SOL, with a separate 0.048 SOL order creation allowance. Larger amounts and slippage reduce the relative impact of account-opening costs; they cannot guarantee settlement or relax the required output of an exact buy. Check current quotes with `--dry-run` before live trading.

From `sim/`, run it alone with:

```sh
pnpm sim simulate-trade-session ../scenarios/solver-validation/solver-fresh-accounts.csv --fresh-accounts --sol-funding-per-trader 0.15 --slippage-bps 500
```

If a receiving account already exists, the runner continues with another seed-derived wallet whose receiving accounts are missing. It avoids wallets reserved for other scenarios, logs the replacement and saves the selected trader number for resume and cleanup. The previous wallet and its funds are left untouched. On resume, the saved check allows accounts created by earlier rows to remain. The quote endpoint is unchanged.

## SOL returned by cleanup

The creation allowance includes fees and rent before refunds. Cleanup sells worthwhile balances, unwraps wSOL, closes token accounts to recover rent, reclaims finished order rent to its creator, and sweeps remaining trader SOL to the test funder. Sponsored order rent can return to the sponsor. Network and priority fees, trading fees, price changes and burned dust reduce the return; unsold balances or unsuccessful reclaims remain outstanding. Include funder and sponsor balances when measuring actual net cost.

In cleanup logs, **order records store trade instructions; receiving token accounts hold the tokens bought**. `reclaimed 3 order records` recovers deposits from three finished trade records, without closing receiving accounts. Between scenarios, prepared receiving accounts stay open; temporary wrapped SOL accounts can close to recover ordinary SOL. Prepared receiving accounts close during final cleanup at the end of the whole run. See [the cleanup log explanation](../../sim/README.md#commands) for more detail.

The broader top250 scenario is outside this first round. Its earlier version had 500 scheduled orders, plus 250 possible acquisitions and 250 cleanup sells: 1000 total, not 1000 cleanup orders. Actual acquisitions and cleanup sales can be fewer. Its remote version has since changed; recount before planning that campaign.

## Optional buy burst

[solver-burst-buy.csv](solver-burst-buy.csv) adds the same bursts of 4, 8, 16, 24 and 32 orders at 0, 90, 180, 270 and 360 seconds. Both burst files spend SOL and receive USDC: sells fix the SOL input; buys fix the USDC output. The buy file uses self paid creation and unequal output amounts of 0.25–0.40 USDC. Buy batching is outside the solver's stated promise, so use it as an optional comparison of order types.

It allows 84 main orders, no acquisitions and 32 cleanup orders: 116 estimated orders and 0.348 SOL before refunds. Adding it to the five first-round runs gives 423 estimated orders and a 1.269 SOL creation allowance. Use the run settings above with 0.06 SOL per trader, a maximum of 1.92 funded SOL and a 0.348 SOL creation allowance. Dry-run first to check the fixed USDC amounts against current quotes.

CSV timestamps start each trade flow; inspect actual placement times and auction membership before judging missed batching opportunities. A wallet waits for its earlier flow to finish, so check actual starts if a burst overruns its gap: 90 seconds for both sells and buys. Retain individual bids from the same auction when checking the single-order price guard.

## Faster schedules

All solver composite configs use a 30-second pause after cleanup, a 60-second fill timeout and no trade retries. Standard pairs and focused Jupiter account, payout, precision and general-asset checks start every independent wallet at 0 seconds. Later rows use 1-second stage offsets and wait only for the preceding flow on their own wallet. These offsets are relative to scenario start, not extra pauses after a fill. A previous flow must finish but need not succeed. Unknown outcomes are checked and reported without blocking or skipping later rows; only cleanup is deferred for wallets with potentially live orders.

| Functional check        | Last scheduled start before this review | Last scheduled start now |
| ----------------------- | --------------------------------------: | -----------------------: |
| Standard pairs          |                                     15s |                       1s |
| Receiving-account costs |                                    270s |                       1s |
| Native/wrapped payouts  |                                    185s |                       2s |
| Amount precision        |                                    165s |                       1s |
| General asset gaps      |                                    180s |                       1s |

Sell and optional buy bursts now both use 90-second wave gaps. Every order within a wave has the same timestamp. The standalone 8/16/24/32 burst also uses 90-second gaps instead of 180 seconds. This leaves room for the 60-second fill window plus preparation and cancellation; it does not guarantee slow earlier flows have finished. Baselines for the two independent transaction-size pairs start together at 0 seconds, followed by both four-order groups at 90 seconds, instead of four phases ending at 180 seconds.

CSV timestamps start trade flows. Quotes, RPC limits, order creation and earlier flows on reused wallets can spread actual placements; verify placement times and auction membership before claiming simultaneous submission or batching. Denser schedules change offered load. Row counts, wallet IDs, per-wallet order, amounts, modes, creation allowances and order validity are preserved.

All 49 scenario CSVs were reviewed. Token-2022, xStock, token-universe, retry and most experiment files already have parallel wallet starts and back-to-back wallet rows. The generated traffic profiles and sustained-rate experiments keep their intended arrival rates. CoW and opposing-order files retain 150/120-second preparation windows so pre-funded sides have time to be ready. Failure-isolation probes move from 90 to 30 seconds, with follow-up controls at 45 seconds; late controls retain 420 seconds to allow 300-second validity plus preparation and an expiry margin. Late recovery still requires confirmed final probe orders. The sustained test retains its recovery probe for the same reason.

Funding, fills, cancellation and cleanup still take their actual time. Any caller of these shared CSVs uses the new timings, including standalone runs; standalone runs should explicitly use `--fill-timeout 60 --cancel-on-timeout` for the shorter burst gaps. Composite configs already set these options.

A live or resumed session uses its saved config, rows and timings. These changes apply to new sessions; they do not accelerate an already-running session.

## Historical composite results

[All saved composite runs](../../sim/composite-test-runs.md) have adjusted reports that exclude unsupported non-zero transfer-fee rows from both the numerator and denominator. Keep the original session files as evidence. Older report details can retain their original raw counts; use the recalculated summary for solver performance.
