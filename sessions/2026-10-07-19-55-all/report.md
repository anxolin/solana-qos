# Solana QoS report: 2026-10-07-19-55-all

Barn, orders created between `2026-10-07T19:56:14.184Z` and `2026-10-07T20:00:49.421Z`. Data fetched 2026-10-07T20:00:58+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 19 |
| Orders executed | **16** (84.2%) |
| Sponsored orders never created on-chain | 3 (15.8%) |
| Traders | 11 |
| Settlement txs | 16 |

## Scenario

16 of 25 scenario rows completed. 0 retries, 5 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 19:56:15 | 1 | 1 | sell 0.02 SOL → CATE | filled | 18s | 1 |  |
| 19:56:33 | 2 | 1 | sell 22.1 CATE → SOL | filled | 10s | 1 |  |
| 19:56:14 | 3 | 2 | sell 0.02 SOL → USDu | filled | 18s | 1 |  |
| 19:56:32 | 4 | 2 | sell 1.43 USDu → SOL | filled | 10s | 1 |  |
| 19:56:14 | 5 | 3 | sell 0.02 SOL → ANSEM | filled | 13s | 1 |  |
| 19:56:27 | 6 | 3 | sell 9.3 ANSEM → SOL | filled | 14s | 1 |  |
| 19:56:14 | 7 | 4 | sell 0.02 SOL → jlUSDG | failed | 47s | 1 | main expired |
| 19:57:01 | 8 | 4 | sell 1.33 jlUSDG → SOL | failed | 0s | 0 | acquire jlUSDG error: 404 Not Found: NoLiquidity: no route found |
| 19:56:14 | 9 | 5 | sell 0.02 SOL → sUSD.infra | failed | 48s | 1 | main expired |
| 19:57:02 | 10 | 5 | sell 1.43 sUSD.infra → SOL | failed | 0s | 0 | acquire sUSD.infra error: 404 Not Found: NoLiquidity: no route found |
| 19:56:14 | 11 | 6 | sell 0.02 SOL → ZARP | filled | 25s | 1 |  |
| 19:56:39 | 12 | 6 | sell 23.9 ZARP → SOL | filled | 13s | 1 |  |
| 19:56:14 | 13 | 7 | sell 0.02 SOL → SILV | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 19:56:16 | 14 | 7 | sell 0.497 SILV → SOL | failed | 1s | 0 | acquire SILV error: 404 Not Found: NoLiquidity: no route found |
| 19:56:14 | 15 | 8 | sell 0.02 SOL → sUSDu | failed | 47s | 1 | main expired |
| 19:57:01 | 16 | 8 | sell 1.23 sUSDu → SOL | failed | 0s | 0 | acquire sUSDu error: 404 Not Found: NoLiquidity: no route found |
| 19:56:14 | 17 | 9 | sell 0.02 SOL → USDM1 | filled | 19s | 1 |  |
| 19:56:34 | 18 | 9 | sell 1.4 USDM1 → SOL | filled | 10s | 1 |  |
| 19:56:15 | 19 | 10 | sell 0.02 SOL → USDu | filled | 26s | 1 |  |
| 19:56:40 | 20 | 10 | sell 1.43 USDu → CATE | filled | 13s | 1 |  |
| 19:56:15 | 21 | 11 | buy 29.5 CATE ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 19:56:15 | 22 | 12 | sell 0.02 SOL → PYUSD | filled | 13s | 1 |  |
| 19:56:28 | 23 | 12 | sell 1.39 PYUSD → SOL | filled | 10s | 1 |  |
| 19:56:15 | 24 | 13 | sell 0.02 SOL → USDG | filled | 14s | 1 |  |
| 19:56:29 | 25 | 13 | sell 1.39 USDG → SOL | filled | 10s | 1 |  |

### Rows without an order

6 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | acquire | 4 | SOL → jlUSDG, SOL → sUSD.infra, SOL → SILV, SOL → sUSDu | no route found |
| NoLiquidity | main | 1 | SOL → SILV | no route found |
| NoLiquidity | quote | 1 | SOL → CATE | no route found |

Scenario orders: 19 (19 main, 0 acquire). Cleanup placed 9 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 19:57:04 | 1 | CATE → SOL (native) | Executed | `0x682f6cf7…` [🐞](https://debug.barn.cow.fi/order/0x682f6cf77c95aa807f6fffc648276aff2609a0576b14fd62b6a39bfa6d608bcd) |
| 19:57:09 | 3 | ANSEM → SOL (native) | Executed | `0xc5ee5512…` [🐞](https://debug.barn.cow.fi/order/0xc5ee55121a3f1a61c9b514ce92099440f189009474f94c4059bd0c9c56aedf3d) |
| 19:57:09 | 2 | USDu → SOL (native) | Executed | `0x8858a702…` [🐞](https://debug.barn.cow.fi/order/0x8858a702757cceb92af1314ad2758285f8720e29ffd404f2b2defaa15d852096) |
| 19:58:12 | 13 | USDG → SOL (native) | Executed | `0x728e004a…` [🐞](https://debug.barn.cow.fi/order/0x728e004a0112bcbb5f47ea7aeabe9f67cd1a52afd4537394698f8d4ef436bd93) |
| 19:58:39 | 6 | ZARP → SOL (native) | Executed | `0x89282990…` [🐞](https://debug.barn.cow.fi/order/0x89282990e46ef9225de558bf009eb9bd8e8c45f51f7da9fd8a30e4b3cd679572) |
| 19:58:39 | 10 | CATE → SOL (native) | Executed | `0x8b8a99e2…` [🐞](https://debug.barn.cow.fi/order/0x8b8a99e2810224beb76360d8d6104d58eaac3140d8cea0d1d2ca9383cd98d319) |
| 19:58:39 | 10 | USDu → SOL (native) | Executed | `0xb2fd4ca9…` [🐞](https://debug.barn.cow.fi/order/0xb2fd4ca9b7092ac477ce47cb2ca1bc089cdc1a608eceb0e3f33aa87d5757acad) |
| 19:58:39 | 12 | PYUSD → SOL (native) | Executed | `0x47c269e2…` [🐞](https://debug.barn.cow.fi/order/0x47c269e2861615b06b6c84f92243747f73901bf5f4c74fce0481c7a76861ca00) |
| 19:58:56 | 9 | USDM1 → SOL (native) | Executed | `0x9abee69a…` [🐞](https://debug.barn.cow.fi/order/0x9abee69a2a81fecb38f5b383bfb1af55f9fb8b1b7afb197cc5eba7f2d159f003) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 16 | 84.2% |
| expired: never created on-chain (winner found, creation blockhash expired) | 3 | 15.8% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 9s | 13s | 15s | 16s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 16 | 100.0% | 16 | 120,624 | 9s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 52 | 29 | 25 | 86.2% | 3 | 2 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 2 |
| jupiter-solve: PriorityFeeTooHigh | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 49 times
- Orders filtered for `unreceivable_buy_token_account`: 49 times
- Orders filtered for `in_flight`: 14 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 19 | 16 | 84.2% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDu | 2 | 2 | 100.0% |
| wSOL → jlUSDG | 1 | 0 | 0.0% |
| wSOL → ZARP | 1 | 1 | 100.0% |
| wSOL → sUSDu | 1 | 0 | 0.0% |
| wSOL → USDM1 | 1 | 1 | 100.0% |
| wSOL → sUSD.infra | 1 | 0 | 0.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → CATE | 1 | 1 | 100.0% |
| PYUSD → SOL (native) | 1 | 1 | 100.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |
| USDG → SOL (native) | 1 | 1 | 100.0% |
| USDu → SOL (native) | 1 | 1 | 100.0% |
| CATE → SOL (native) | 1 | 1 | 100.0% |
| USDM1 → SOL (native) | 1 | 1 | 100.0% |
| ZARP → SOL (native) | 1 | 1 | 100.0% |
| USDu → CATE | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 2 | 2 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 2 | 2 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 2 | 2 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 2 | 2 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 2 | 2 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 2 | 2 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 2 | 2 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 2 | 2 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 1 | 0 | 0.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 1 | 0 | 0.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 3 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 19:56:17 | wSOL → jlUSDG | sell | Winner too late: creation blockhash expired | `0xc9365700…` [🐞](https://debug.barn.cow.fi/order/0xc9365700bd2f47e80221791b5529a61ecec52ccd81d4a9823683d1968d1ee3d9) |
| 19:56:18 | wSOL → sUSDu | sell | Winner too late: creation blockhash expired | `0x5de541eb…` [🐞](https://debug.barn.cow.fi/order/0x5de541ebc86dcb78d38d940100f02ce71cccb654308ba0d84b973a6ca5220c95) |
| 19:56:18 | wSOL → sUSD.infra | sell | Winner too late: creation blockhash expired | `0xd60e7ea0…` [🐞](https://debug.barn.cow.fi/order/0xd60e7ea03fccf613cbb9d188e7be1d2aecc91f60a547a00afc3fee33f12911bd) |
