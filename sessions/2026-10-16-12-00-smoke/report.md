# Solana QoS report: 2026-10-16-12-00-smoke

Prod, orders created between `2026-10-16T12:00:56.291Z` and `2026-10-16T12:02:27.671Z`. Data fetched 2026-10-16T12:02:17+00:00.

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
| 12:00:56 | 1 | 1 | sell 0.01 SOL → USDC | filled | 7s | 1 |  |
| 12:00:56 | 2 | 2 | buy 2 JUP ← SOL | filled | 14s | 1 |  |
| 12:01:03 | 3 | 1 | buy 1 JUP ← USDC | filled | 7s | 1 |  |
| 12:01:10 | 4 | 2 | sell 1 JUP → wSOL | filled | 4s | 1 |  |
| 12:01:11 | 5 | 1 | sell 0.5 JUP → SOL | filled | 8s | 1 |  |
| 12:01:14 | 6 | 2 | buy 1 USDT ← USDC | filled | 24s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 5 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 12:01:45 | 1 | USDC → SOL (native) | Executed | `0xb32e9530…` [🐞](https://debug.cow.fi/order/0xb32e9530bf705d294af37e305d83de96ec29ea801ef7ada97bf3cdc201265018) |
| 12:01:45 | 1 | HEEHEE → SOL (native) | Executed | `0x92dfd667…` [🐞](https://debug.cow.fi/order/0x92dfd667b19dcf342167c94cb87c1bf1cf95c83e37d81adc028b6aa9d3aabbab) |
| 12:01:45 | 2 | JUP → SOL (native) | Executed | `0x23403b7f…` [🐞](https://debug.cow.fi/order/0x23403b7f5f343deffada504db705cb2b3da165773e15430329a41fe069d1c8dc) |
| 12:01:45 | 2 | arc → SOL (native) | Executed | `0x14f56bda…` [🐞](https://debug.cow.fi/order/0x14f56bdaac536d0faea6fcb2203c42b58dffd69c0a3c5b1305dad978a565cfc7) |
| 12:01:46 | 2 | USDT → SOL (native) | Executed | `0xf8269d00…` [🐞](https://debug.cow.fi/order/0xf8269d0034c1eb5579b8533666ecfe4fb59b72959cbe431e2415f64424f9cf3e) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 5s | 6s | 10s | 10s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 7 | 100.0% | 7 | 103,583 | 5s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 12 | 12 | 12 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 13 times
- Orders filtered for `in_flight`: 1 times

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
