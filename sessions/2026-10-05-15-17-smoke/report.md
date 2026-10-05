# Solana QoS report: 2026-10-05-15-17-smoke

Barn, orders created between `2026-10-05T15:18:03.666Z` and `2026-10-05T15:29:36.054Z`. Data fetched 2026-10-05T15:29:30+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 7 |
| Orders executed | **7** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 7 |

## Scenario

6 of 6 scenario rows completed. 2 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 15:18:04 | 1 | 1 | sell 0.01 SOL → USDC | filled | 9s | 1 |  |
| 15:18:04 | 2 | 2 | buy 2 JUP ← SOL | filled | 10s | 1 |  |
| 15:18:12 | 3 | 1 | buy 1 JUP ← USDC | filled | 12s | 1 |  |
| 15:18:14 | 4 | 2 | sell 1 JUP → wSOL | filled | 9s | 1 |  |
| 15:18:24 | 5 | 1 | sell 0.5 JUP → SOL | filled | 19s | 1 |  |
| 15:18:23 | 6 | 2 | buy 1 USDT ← USDC | filled | 22s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 8 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 15:18:46 | 1 | JUP → SOL (native) | Executed | `0x53933dba…` [🐞](https://debug.barn.cow.fi/order/0x53933dba42f17ecadd7e32585c58c4541828f0807193e4b55a9479ae4e7aa7c6) |
| 15:18:47 | 2 | JUP → SOL (native) | Executed | `0xc707ed59…` [🐞](https://debug.barn.cow.fi/order/0xc707ed59935b95f6f7a55e9d411cf6717c5d7b9313543dbd7e2a04b10301d6e9) |
| 15:19:01 | 1 | USDC → SOL (native) | Executed | `0xe7aa8215…` [🐞](https://debug.barn.cow.fi/order/0xe7aa82151c44322b073a9c6aa60f8bf15eeba1c751dea8cd0bdb81f86f727f16) |
| 15:19:43 | 2 | RAY → SOL (native) | Expired without a fill | `0x27c32f12…` [🐞](https://debug.barn.cow.fi/order/0x27c32f1284663f44a6b334d2b0c27d66d67fd1ddc9573aa293f97de6d1e293cf) |
| 15:21:56 | 2 | RAY → SOL (native) | Expired without a fill | `0x2dfdce96…` [🐞](https://debug.barn.cow.fi/order/0x2dfdce96ab9a98a3879489cab9321cc6da6c14b1059df5cce90df11c470251c4) |
| 15:24:08 | 2 | USDC → SOL (native) | Expired without a fill | `0x1674373f…` [🐞](https://debug.barn.cow.fi/order/0x1674373f708d1874f62ee216e0f54a58df5c7d88a8e873ccb50ee8bfb3060d43) |
| 15:26:29 | 2 | USDC → SOL (native) | Expired without a fill | `0xd21b118f…` [🐞](https://debug.barn.cow.fi/order/0xd21b118f274246c19aee1f41887b75911c17bb8379eb5bbcfa1bb9be1adc5c0d) |
| 15:28:32 | 2 | USDT → SOL (native) | Executed | `0x1d4a0e94…` [🐞](https://debug.barn.cow.fi/order/0x1d4a0e94797cf1b99a5b6a21e1ec67375297208b4d7441a4463825b5018457ec) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 7s | 15s | 15s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 5 | 71.4% | 5 | 120,903 | 6s |
| 8E74…2mpx | 2 | 28.6% | 2 | 218,034 | 10s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 16 | 9 | 9 | 100.0% | 0 | 0 | 0 | 0 |
| grafiks | 16 | 6 | 2 | 33.3% | 3 | 2 | 0 | 0 |
| helixbox | 1 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| rosato | 16 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| fractal | 0 | 0 | 0 | – | 0 | 0 | 11 | 0 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 11 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 11 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 3 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 132 times
- Orders filtered for `unpayable_native_buy`: 102 times
- Orders filtered for `in_flight`: 13 times

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
