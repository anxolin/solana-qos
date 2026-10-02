# Solana QoS report: 2026-10-02-20-34-smoke

Barn, orders created between `2026-10-02T20:35:05.002Z` and `2026-10-02T20:40:26.681Z`. Data fetched 2026-10-02T20:50:47+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 11 |
| Orders executed | **10** (90.9%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 10 |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 10 | 90.9% |
| expired | 1 | 9.1% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 22s | 38s | 48s | 48s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 7 | 70.0% | 7 | 130,990 | 35s |
| fractal | 2 | 20.0% | 2 | 120,202 | 14s |
| rosato | 1 | 10.0% | 1 | 159,388 | 18s |

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
| 20:40:21 | USDC → SOL (native) | sell | Expired without a fill | `0x318e12a2…` [🐞](https://debug.barn.cow.fi/order/0x318e12a2111bf61bbe427ed1df5d023857780c8a7c3d7ba14be9cce57179d289) |
