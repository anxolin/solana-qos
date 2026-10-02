# Solana QoS report: 2026-10-02-21-02-smoke

Barn, orders created between `2026-10-02T21:02:54.664Z` and `2026-10-02T21:07:39.128Z`. Data fetched 2026-10-02T21:49:47+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 7 |
| Orders executed | **7** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 7 |

## Scenario

6 of 6 scenario rows completed. 1 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 21:02:54 | 1 | 1 | sell 0.01 SOL → USDC | filled | 23s | 1 |  |
| 21:02:59 | 2 | 2 | buy 2 JUP ← SOL | filled | 42s | 1 |  |
| 21:04:24 | 3 | 1 | buy 1 JUP ← USDC | filled | 33s | 1 |  |
| 21:04:34 | 4 | 2 | sell 1 JUP → wSOL | filled | 28s | 1 |  |
| 21:05:54 | 5 | 1 | sell 0.5 JUP → SOL | filled | 9s | 1 |  |
| 21:06:04 | 6 | 2 | buy 1 USDT ← USDC | filled | 34s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 6 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 21:06:41 | 1 | JUP → SOL (native) | Executed | `0xa7c2667f…` [🐞](https://debug.barn.cow.fi/order/0xa7c2667f78928df966672a0879657913811094a90205e50c2c2db368cc6efa09) |
| 21:06:41 | 2 | JUP → SOL (native) | Executed | `0xd67af8be…` [🐞](https://debug.barn.cow.fi/order/0xd67af8be4283ff8773c3832806b8209e17f3685503713c62bf38a21afe555a4e) |
| 21:06:52 | 2 | USDC → SOL (native) | Expired without a fill | `0x5d3aec2d…` [🐞](https://debug.barn.cow.fi/order/0x5d3aec2d7813f2496fe973f2c12abc2371094e1fcbafe5a64d43362e99def183) |
| 21:07:06 | 1 | USDC → SOL (native) | Executed | `0xc5fc2f06…` [🐞](https://debug.barn.cow.fi/order/0xc5fc2f0675a55d69d396c4e3fb226f2adbf8c350516198c9caf47a5bbb5e7462) |
| 21:09:04 | 2 | USDC → SOL (native) | Expired without a fill | `0x6b664b6e…` [🐞](https://debug.barn.cow.fi/order/0x6b664b6e362e95eb1e8c284256716920dac6724c020077285c7f86f432516302) |
| 21:11:21 | 2 | USDT → SOL (native) | Executed | `0x49075415…` [🐞](https://debug.barn.cow.fi/order/0x490754151ff9409c73e5971dbc4515c795729d884707352cecaae97b94208da3) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 18s | 27s | 35s | 35s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 5 | 71.4% | 5 | 106,051 | 24s |
| fractal | 1 | 14.3% | 1 | 51,391 | 18s |
| rosato | 1 | 14.3% | 1 | 171,976 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| paradox | 21 | 12 | 0 | 0.0% | 12 | 0 | 0 | 0 |
| jupiter-solve | 7 | 6 | 6 | 100.0% | 0 | 0 | 0 | 0 |
| fractal | 9 | 2 | 2 | 100.0% | 0 | 0 | 0 | 0 |
| rosato | 22 | 2 | 2 | 100.0% | 0 | 0 | 0 | 0 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 56 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 56 | 0 |
| grafiks | 0 | 0 | 0 | – | 0 | 0 | 4 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| paradox: SimulationFailed | 12 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 56 times
- Orders filtered for `unpayable_native_buy`: 10 times
- Orders filtered for `in_flight`: 11 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| buy | 4 | 4 | 100.0% |
| sell | 3 | 3 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 2 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| USDC → JUP | 1 | 1 | 100.0% |
| JUP → wSOL | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| USDC → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 4 | 4 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 3 | 3 | 100.0% |
