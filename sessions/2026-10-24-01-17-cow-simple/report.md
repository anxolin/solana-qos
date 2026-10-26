# Solana QoS report: 2026-10-24-01-17-cow-simple

Barn, orders created between `2026-10-24T01:18:02.915Z` and `2026-10-24T01:19:36.379Z`. Data fetched 2026-10-24T01:18:44+00:00.

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
| 01:18:03 | 1 | 2 | buy 2.1 USDC ← SOL | filled | 8s | 1 |  |
| 01:18:10 | 2 | 1 | sell 0.02 SOL → USDC | filled | 4s | 1 |  |
| 01:18:10 | 3 | 2 | sell 2 USDC → SOL | filled | 4s | 1 |  |

Scenario orders: 3 (3 main, 0 acquire). Cleanup placed 2 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 01:18:16 | 1 | USDC → SOL (native) | Executed | `0x52ecc111…` [🐞](https://debug.barn.cow.fi/order/0x52ecc11170a15c9d94f8cfe7987277692f7beff58c1f25ae9546b15784edacce) |
| 01:18:17 | 2 | USDC → SOL (native) | Executed | `0x61d59c58…` [🐞](https://debug.barn.cow.fi/order/0x61d59c582598f686250c9b55829875ef1afa31895c6881057967b0840199afd1) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 3 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 1s | 4s | 4s | 4s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 3 | 100.0% | 3 | 92,514 | 1s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 4 | 4 | 4 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 7 times

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
