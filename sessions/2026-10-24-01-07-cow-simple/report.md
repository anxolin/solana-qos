# Solana QoS report: 2026-10-24-01-07-cow-simple

Barn, orders created between `2026-10-24T01:07:30.357Z` and `2026-10-24T01:11:15.929Z`. Data fetched 2026-10-24T01:10:24+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 3 |
| Orders executed | **3** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 3 |

## Scenario

3 of 3 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 01:07:30 | 1 | 2 | buy 2.1 USDC ← SOL | filled | 11s | 1 |  |
| 01:10:00 | 2 | 1 | sell 0.02 SOL → USDC | filled | 4s | 1 |  |
| 01:10:00 | 3 | 2 | sell 2 USDC → SOL | filled | 4s | 1 |  |

Scenario orders: 3 (3 main, 0 acquire). Cleanup placed 1 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 01:10:06 | 1 | USDC → SOL (native) | Executed | `0x265dc02a…` [🐞](https://debug.barn.cow.fi/order/0x265dc02a33ab2cabe42c43536b333d4dd8f546740ca5c8c67e8ba3cef0d5b798) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 3 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 2s | 6s | 6s | 6s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 3 | 100.0% | 3 | 75,016 | 2s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 4 | 4 | 4 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 34 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 2 | 2 | 100.0% |
| market buy | 1 | 1 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 2 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 2 | 2 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 1 | 1 | 100.0% |
