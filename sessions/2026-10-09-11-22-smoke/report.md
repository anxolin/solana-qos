# Solana QoS report: 2026-10-09-11-22-smoke

Barn, orders created between `2026-10-09T11:22:46.030Z` and `2026-10-09T11:24:00.651Z`. Data fetched 2026-10-09T11:23:46+00:00.

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
| 11:22:46 | 1 | 1 | sell 0.01 SOL → USDC | filled | 13s | 1 |  |
| 11:22:46 | 2 | 2 | buy 2 JUP ← SOL | filled | 7s | 1 |  |
| 11:22:59 | 3 | 1 | buy 1 JUP ← USDC | filled | 4s | 1 |  |
| 11:22:53 | 4 | 2 | sell 1 JUP → wSOL | filled | 7s | 1 |  |
| 11:23:03 | 5 | 1 | sell 0.5 JUP → SOL | filled | 5s | 1 |  |
| 11:23:00 | 6 | 2 | buy 1 USDT ← USDC | filled | 10s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 4 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:23:12 | 1 | JUP → SOL (native) | Executed | `0x074595db…` [🐞](https://debug.barn.cow.fi/order/0x074595dbc73c9f2ddf9df81e6e3d1a3ed63d5e371ba8f592fddcccb27c1f11dd) |
| 11:23:13 | 1 | USDC → SOL (native) | Executed | `0x959f866f…` [🐞](https://debug.barn.cow.fi/order/0x959f866f9fd95dba1172020204620f9ca4f4d12b9a3d88d877aa812af245efa7) |
| 11:23:14 | 2 | JUP → SOL (native) | Executed | `0x36c3f9c3…` [🐞](https://debug.barn.cow.fi/order/0x36c3f9c3bac533179c33ad2d861ccb0df11b1e1e4b42bc2d399e5d8345b07979) |
| 11:23:14 | 2 | USDT → SOL (native) | Executed | `0x3f2874c6…` [🐞](https://debug.barn.cow.fi/order/0x3f2874c6aef9f6b972fd95d33e67c6e77dd4302cc875634dcbe2f461e43b771e) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 2s | 5s | 10s | 10s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 7 | 100.0% | 7 | 156,957 | 2s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 12 | 11 | 11 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 10 times
- Orders filtered for `unreceivable_buy_token_account`: 10 times

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
| JUP → wSOL | 1 | 1 | 100.0% |
| USDC → JUP | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| USDC → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 4 | 4 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 3 | 3 | 100.0% |
