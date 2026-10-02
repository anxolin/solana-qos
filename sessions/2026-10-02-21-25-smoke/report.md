# Solana QoS report: 2026-10-02-21-25-smoke

Barn, orders created between `2026-10-02T21:26:26.087Z` and `2026-10-02T21:30:38.835Z`. Data fetched 2026-10-02T21:35:32+00:00.

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
| 19s | 44s | 124s | 124s |

## Jupiter rate limiting

0 of 20 Jupiter quote attempts (0.0%) were rejected with `rate limited`. 0 orders never executed: Jupiter's quotes for them were rate limited, it never found a solution, and no other solver bid.

Orders using the most Jupiter quote attempts:

| Order | In this report | Attempts | Rate limited | Solved |
|---|---|---|---|---|

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 7 | 70.0% | 7 | 129,999 | 20s |
| fractal | 2 | 20.0% | 2 | 125,743 | 13s |
| rosato | 1 | 10.0% | 1 | 164,117 | 13s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| paradox | 37 | 25 | 0 | 0.0% | 25 | 0 | 0 | 0 |
| jupiter-solve | 9 | 8 | 7 | 87.5% | 0 | 2 | 0 | 0 |
| fractal | 24 | 2 | 2 | 100.0% | 0 | 0 | 0 | 0 |
| rosato | 36 | 2 | 1 | 50.0% | 1 | 0 | 0 | 0 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 49 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 49 | 0 |
| grafiks | 0 | 0 | 0 | – | 0 | 0 | 4 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| paradox: SimulationFailed | 25 |
| rosato: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 49 times
- Orders filtered for `in_flight`: 20 times

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
| JUP → wSOL | 1 | 1 | 100.0% |
| USDC → JUP | 1 | 1 | 100.0% |
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
| 21:30:36 | USDC → SOL (native) | sell | Expired without a fill | `0xc69a116b…` [🐞](https://debug.barn.cow.fi/order/0xc69a116b820a41a8cdb1ff52ecad8ec7318ea9d46e478cb92fcada1bb4fa3703) |
