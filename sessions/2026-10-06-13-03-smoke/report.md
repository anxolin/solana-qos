# Solana QoS report: 2026-10-06-13-03-smoke

Barn, orders created between `2026-10-06T13:03:43.165Z` and `2026-10-06T13:05:08.549Z`. Data fetched 2026-10-06T13:04:45+00:00.

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
| 13:03:43 | 1 | 1 | sell 0.01 SOL → USDC | filled | 7s | 1 |  |
| 13:03:43 | 2 | 2 | buy 2 JUP ← SOL | filled | 7s | 1 |  |
| 13:03:50 | 3 | 1 | buy 1 JUP ← USDC | filled | 4s | 1 |  |
| 13:03:50 | 4 | 2 | sell 1 JUP → wSOL | filled | 4s | 1 |  |
| 13:03:54 | 5 | 1 | sell 0.5 JUP → SOL | filled | 5s | 1 |  |
| 13:03:54 | 6 | 2 | buy 1 USDT ← USDC | filled | 17s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 3 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 13:04:13 | 1 | USDC → SOL (native) | Executed | `0xb2b74a7c…` [🐞](https://debug.barn.cow.fi/order/0xb2b74a7c38fd00d98d7deed8ba48bfb5b8befd91e4c6dff7608e006b7b3f7551) |
| 13:04:13 | 2 | USDT → SOL (native) | Executed | `0x8974a09c…` [🐞](https://debug.barn.cow.fi/order/0x8974a09caad64b82842b8732532e82b862cc527bc3a74c785111d22d3350e4ca) |
| 13:04:14 | 2 | JUP → SOL (native) | Executed | `0x452de96b…` [🐞](https://debug.barn.cow.fi/order/0x452de96ba8742bf8544038eb17dcb69c46d601746b4164ef4aba4f6f8d71f3a1) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 3s | 4s | 7s | 7s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 7 | 100.0% | 7 | 127,093 | 3s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 10 | 10 | 10 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 11 times

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
