# First round: Grafiks solver validation on staging

Run with only the target solver enabled in staging. These are new files; existing scenarios and remote changes are preserved. No live trades were placed while preparing them.

| Run | CSV | Main | Possible acquisitions | Cleanup | Total estimate | Creation allowance before refunds |
|---|---|---:|---:|---:|---:|---:|
| 1. Batch remainder | [solver-same-direction-25.csv](solver-same-direction-25.csv) | 25 | 0 | 25 | 50 | 0.150 SOL |
| 2. Increasing load | [solver-burst-sell.csv](solver-burst-sell.csv) | 84 | 0 | 32 | 116 | 0.348 SOL |
| 3. Opposing orders | [solver-cow.csv](solver-cow.csv) | 15 | 6 | 13 | 34 | 0.102 SOL |
| 4. Token coverage | [solver-token-coverage.csv](solver-token-coverage.csv) | 55 | 0 | 40 | 95 | 0.285 SOL |
| 5. Large route candidates | [solver-transaction-size.csv](solver-transaction-size.csv) | 10 | 0 | 8 | 18 | 0.054 SOL |

The first round allows 313 orders conservatively, or 0.939 SOL at the planning rate of 0.003 SOL/order before refunds. Counts assume no main-order retries, no unrelated tokens in wallets and one cleanup pass. Cleanup can retry after a failure, so estimates are not hard order ceilings. The complete burst sequence exceeds the earlier 100-order cap with the user's approval; the other files stay below 100. Trading amounts and other fees are separate from the creation allowance.

## What to check

1. **25 sells:** all wallets spend SOL for JUP at time zero. This uses sell orders because the solver promises batches of up to four sells. Check how 25 orders split into groups and how the last order clears. One timestamp starts the flows; actual placement times determine which orders share an auction.
2. **Sell bursts:** 4, 8, 16, 24 and 32 wallets start at 0, 240, 480, 720 and 960 seconds. Wallets are reused, with unequal SOL inputs of 0.0025–0.004. Check batch sizes, one swap per sell batch, proportional output, single-order price protection and time to clear the backlog. This measures bursts, not a sustainable continuous arrival rate.
3. **CoW:** a copy of the existing perfect and imperfect opposing-order cases, including preparation and a control. It retains sponsored creation, so record creation failures separately. Verify both sides reached the same auction. A shared transaction proves batching; inspect DEX instructions to establish direct CoW. Unequal demand or the solver's DEX-price guard can make a swap or separate execution reasonable.
4. **Tokens:** 40 distinct token/SOL pairs, including Token-2022, memecoins, LSTs, Bitcoin, bridged assets, gold, stocks, stablecoins and pool tokens. The 15 original positive Token-2022 candidates retain inbound sells and exact-output buys; explicit return sells were removed because cleanup provides that direction. The 25 added controls each get one inbound sell and cleanup return. Three expected unsupported-token rows test the backend. Original PAID and SI probes are outside the frontend list. Original fixed buy amounts need fresh quote checks.
5. **Size:** SOL → EURC and SOL → JLP each have one baseline followed by four sells together, using self paid creation. Check account setup, lookup tables, chosen routes and final settlement bytes. The file is a large-route candidate test, not a proven byte-boundary test.

Measure the solver's quote and competition response times from its logs; order fill time measures a different part of the flow. Record version, auction participation, placement times, fills, errors, batches, DEX calls, payouts and transaction bytes. Passing a case proves that case, not production readiness. A separate buy burst can be considered later; buy batching was not part of the solver's promise.

## Transaction size evidence

Read-only Jupiter quote and swap builds on October 9 used 0.005 SOL, ExactIn, maxAccounts=64, wrapping enabled and dynamic compute estimation disabled. The API returned base64 transactions, whose decoded byte length matched Solana SDK serialization, including signature slots and lookup-table metadata.

| Pair | Swap bytes at 0.005 SOL | Route | Swap bytes at 0.02 SOL |
|---|---:|---|---:|
| SOL → EURC | 1109 | Meteora DLMM → AlphaQ → DefiTuna | 951 |
| SOL → JLP | 1104 | Meteora DLMM → GoonFi V2 → Raydium CLMM | 875 |

These are ordinary Jupiter swaps, not Grafiks's final CoW settlements. Aggregating four orders changes the amount and can select a smaller route. Routes change with liquidity, and this solver may choose Titan instead. EURC and JLP aliases resolve to the exact mints in the repository's token labels.

An offline memo-padding check on the 1109-byte EURC swap produced exactly 1200, 1232 and 1233 bytes using 56, 88 and 89 ASCII padding bytes. The variants retained all original instructions and account references, including three lookup tables, and deserialized successfully. They were unsigned and were not submitted or successfully simulated.

For an exact CoW boundary test, use a solver test hook or isolated replay to add a harmless memo interaction. Build the full settlement with its actual setup instructions and lookup tables, then adjust padding to reach 1200, 1232 and 1233 bytes. Passing the byte check is separate from passing simulation. CSV rows cannot request this extra instruction. The referenced [driver builder](https://github.com/cowprotocol/services/blob/703c58b2618154f6fa0bb64ed17075d01dbca33e/crates/solana-driver/src/domain/settlement.rs#L388-L425) builds v0 transactions with placeholder signature slots of the same wire size; its [size check](https://github.com/cowprotocol/services/blob/703c58b2618154f6fa0bb64ed17075d01dbca33e/crates/solana-driver/src/domain/competition.rs#L227-L243) rejects transactions above 1232 bytes. Confirm the deployed driver version before interpreting failures.

## Run settings

From `sim/`, dry-run the selected file first:

```sh
pnpm sim simulate-trade-session ../scenarios/solver-validation/solver-same-direction-25.csv --env staging --dry-run --sol-funding-per-trader 0.06
```

Then run it with no retries and explicit deadlines:

```sh
pnpm sim simulate-trade-session ../scenarios/solver-validation/solver-same-direction-25.csv --env staging --max-retries 0 --order-validity 300 --fill-timeout 210 --cancel-on-timeout --sol-funding-per-trader 0.06 --max-total-sol 1.5 --max-creation-sol 0.150 --report
```

Use the same environment, retry, validity and timeout settings with each file's funding limits:

| CSV | SOL per trader | Maximum funded SOL | Creation allowance |
|---|---:|---:|---:|
| `solver-same-direction-25.csv` | 0.06 | 1.5 | 0.150 |
| `solver-burst-sell.csv` | 0.06 | 1.92 | 0.348 |
| `solver-cow.csv` | 0.07 | 0.63 | 0.102 |
| `solver-token-coverage.csv` | 0.05 | 2.0 | 0.285 |
| `solver-transaction-size.csv` | 0.06 | 0.48 | 0.054 |

The default 120-second validity could expire orders before a 32-order burst clears; 300 seconds avoids that artificial bottleneck. Keep timeout and cancellation outcomes in the report. Review fixed preparation and buy amounts against current quotes.

## SOL returned by cleanup

The creation allowance includes fees and rent before refunds. Cleanup sells worthwhile balances, unwraps wSOL, closes token accounts to recover rent, reclaims finished order rent to its creator, and sweeps remaining trader SOL to the test funder. Sponsored order rent can return to the sponsor. Network and priority fees, trading fees, price changes and burned dust reduce the return; unsold balances or unsuccessful reclaims remain outstanding. Include funder and sponsor balances when measuring actual net cost.

The broader top250 scenario is outside this first round. Its earlier version had 500 scheduled orders, plus 250 possible acquisitions and 250 cleanup sells: 1000 total, not 1000 cleanup orders. Actual acquisitions and cleanup sales can be fewer. Its remote version has since changed; recount before planning that campaign.

## Optional buy burst

[solver-burst-buy.csv](solver-burst-buy.csv) adds the same bursts of 4, 8, 16, 24 and 32 orders at 0, 240, 480, 720 and 960 seconds. Both burst files spend SOL and receive USDC: sells fix the SOL input; buys fix the USDC output. The buy file uses self paid creation and unequal output amounts of 0.25–0.40 USDC. Buy batching is outside the solver's stated promise, so use it as an optional comparison of order types.

It allows 84 main orders, no acquisitions and 32 cleanup orders: 116 estimated orders and 0.348 SOL before refunds. Adding it to the five first-round runs gives 429 estimated orders and a 1.287 SOL creation allowance. Use the run settings above with 0.06 SOL per trader, a maximum of 1.92 funded SOL and a 0.348 SOL creation allowance. Dry-run first to check the fixed USDC amounts against current quotes.

CSV timestamps start each trade flow; inspect actual placement times and auction membership before judging missed batching opportunities. A wallet waits for its earlier flow to finish, so check actual starts if a burst overruns its four-minute gap. Retain individual bids from the same auction when checking the single-order price guard.
