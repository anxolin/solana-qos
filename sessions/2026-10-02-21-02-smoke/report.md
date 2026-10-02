# Solana QoS report: 2026-10-02-21-02-smoke

Barn, orders created between `2026-10-02T21:02:54.664Z` and `2026-10-02T21:07:39.128Z`. Data fetched 2026-10-02T21:18:20+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 11 |
| Orders executed | **10** (90.9%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 10 |

## Scenario

6 of 6 scenario rows completed. 1 retries, 0 placement errors (from `sim/journal.jsonl`).

| Row | Trader | Trade | Result | Orders | Reason |
|---|---|---|---|---|---|
| 1 | 1 | sell 0.01 SOL → USDC | filled | 1 |  |
| 2 | 2 | buy 2 JUP ← SOL | filled | 1 |  |
| 3 | 1 | buy 1 JUP ← USDC | filled | 1 |  |
| 4 | 2 | sell 1 JUP → wSOL | filled | 1 |  |
| 5 | 1 | sell 0.5 JUP → SOL | filled | 1 |  |
| 6 | 2 | buy 1 USDT ← USDC | filled | 2 |  |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 10 | 90.9% |
| expired | 1 | 9.1% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 18s | 24s | 35s | 35s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 6 | 60.0% | 6 | 142,782 | 22s |
| fractal | 2 | 20.0% | 2 | 50,361 | 12s |
| rosato | 2 | 20.0% | 2 | 171,554 | 5s |

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
| sell | 7 | 6 | 85.7% |
| buy | 4 | 4 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| JUP → SOL (native) | 3 | 3 | 100.0% |
| wSOL → USDC | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 1 | 50.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| USDC → JUP | 1 | 1 | 100.0% |
| JUP → wSOL | 1 | 1 | 100.0% |
| USDC → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 6 | 5 | 83.3% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 5 | 5 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Expired without a fill | 1 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 21:06:52 | USDC → SOL (native) | sell | Expired without a fill | `0x5d3aec2d…` [🐞](https://debug.barn.cow.fi/order/0x5d3aec2d7813f2496fe973f2c12abc2371094e1fcbafe5a64d43362e99def183) |
