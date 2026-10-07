# Solana QoS report: 2026-10-07-19-06-smoke

Barn, orders created between `2026-10-07T19:06:24.301Z` and `2026-10-07T19:08:14.741Z`. Data fetched 2026-10-07T19:07:53+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 7 |
| Orders executed | **7** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 7 |

## Scenario

6 of 6 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 19:06:24 | 1 | 1 | sell 0.01 SOL → USDC | filled | 11s | 1 |  |
| 19:06:24 | 2 | 2 | buy 2 JUP ← SOL | filled | 13s | 1 |  |
| 19:06:35 | 3 | 1 | buy 1 JUP ← USDC | filled | 11s | 1 |  |
| 19:06:37 | 4 | 2 | sell 1 JUP → wSOL | filled | 11s | 1 |  |
| 19:06:46 | 5 | 1 | sell 0.5 JUP → SOL | filled | 9s | 1 |  |
| 19:06:48 | 6 | 2 | buy 1 USDT ← USDC | filled | 22s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 3 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 19:07:17 | 1 | USDC → SOL (native) | Executed | `0xff28a6f6…` [🐞](https://debug.barn.cow.fi/order/0xff28a6f651cdcbe338e410910cfc0fe3bede203e0d38d8c5f1367606b0671cdc) |
| 19:07:18 | 2 | USDT → SOL (native) | Executed | `0xd2da4ca5…` [🐞](https://debug.barn.cow.fi/order/0xd2da4ca5582cf6d4ba4de89b583aaa6569289cf17acec63f5e11ae004d560078) |
| 19:07:19 | 2 | JUP → SOL (native) | Executed | `0x40fb7e9d…` [🐞](https://debug.barn.cow.fi/order/0x40fb7e9d76015f07aa97038d362875295ef361f97eda3417d7905fbcc907464a) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 7s | 8s | 8s | 8s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 5 | 71.4% | 5 | 153,298 | 7s |
| AuwL…YzVj | 2 | 28.6% | 2 | 241,658 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 13 | 10 | 7 | 70.0% | 3 | 0 | 0 | 0 |
| grafiks | 11 | 3 | 3 | 100.0% | 0 | 0 | 0 | 0 |
| paradox | 4 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| zurui | 1 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| rosato | 9 | 0 | 0 | – | 0 | 0 | 1 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 7 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: PriorityFeeTooHigh | 3 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 17 times
- Orders filtered for `unreceivable_buy_token_account`: 17 times
- Orders filtered for `in_flight`: 2 times

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
