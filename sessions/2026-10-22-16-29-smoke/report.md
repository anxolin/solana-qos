# Solana QoS report: 2026-10-22-16-29-smoke

Prod, orders created between `2026-10-22T16:30:09.079Z` and `2026-10-22T16:32:07.636Z`. Data fetched 2026-10-22T16:31:35+00:00.

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
| 16:30:09 | 1 | 1 | sell 0.01 SOL → USDC | filled | 7s | 1 |  |
| 16:30:09 | 2 | 2 | buy 2 JUP ← SOL | filled | 10s | 1 |  |
| 16:30:15 | 3 | 1 | buy 1 JUP ← USDC | filled | 10s | 1 |  |
| 16:30:19 | 4 | 2 | sell 1 JUP → wSOL | filled | 7s | 1 |  |
| 16:30:25 | 5 | 1 | sell 0.5 JUP → SOL | filled | 8s | 1 |  |
| 16:30:25 | 6 | 2 | buy 1 USDT ← USDC | filled | 20s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 3 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 16:30:47 | 1 | USDC → SOL (native) | Executed | `0xfc79fb8a…` [🐞](https://debug.cow.fi/order/0xfc79fb8a08b39d99eca73f87a8baf60e4fb3a0b9f74db26d32ef0c21f85c9b3b) |
| 16:30:48 | 2 | JUP → SOL (native) | Executed | `0x344c6048…` [🐞](https://debug.cow.fi/order/0x344c6048a6ee5f062617f9e1367c478e28e6e3d14cb63aa7a779247657edd95c) |
| 16:30:49 | 2 | USDT → SOL (native) | Executed | `0x046dae10…` [🐞](https://debug.cow.fi/order/0x046dae10924a6c86b4b03d6e5597cfa2c7d0dca6e34e8ca4352631b15b9b43ce) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 7s | 7s | 7s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 7 | 100.0% | 7 | 121,047 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 10 | 10 | 10 | 100.0% | 0 | 0 | 0 | 0 |
| fractal | 0 | 0 | 0 | – | 0 | 0 | 7 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0

## By order type

Limit orders carry CoW Swap's limit-order appData (`0x8edb72fc822ff168ce66d6c4ade61567503f644242a62de5b35fbf6ea5560349`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 4 | 4 | 100.0% |
| market buy | 3 | 3 | 100.0% |

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
