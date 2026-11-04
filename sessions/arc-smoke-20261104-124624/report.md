# Solana QoS report: arc-smoke-20261104-124624

Barn, orders created between `2026-11-04T12:47:08.913Z` and `2026-11-04T12:48:37.989Z`. Data fetched 2026-11-04T12:47:50+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 2 |
| Orders executed | **2** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 1 |
| Settlement txs | 2 |

## Scenario

1 of 6 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 12:47:09 | 1 | 1 | sell 0.01 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:47:09 | 2 | 2 | buy 2 JUP ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:47:10 | 3 | 1 | buy 1 JUP ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:47:09 | 4 | 2 | sell 1 JUP → wSOL | failed | 8s | 0 | acquire JUP error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:47:10 | 5 | 1 | sell 0.5 JUP → SOL | filled | 23s | 2 |  |
| 12:47:17 | 6 | 2 | buy 1 USDT ← USDC | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

5 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 3 | SOL → JUP, USDC → JUP, USDC → USDT | no route found |
| InvalidTransaction | main | 1 | SOL → USDC | the bundle must not create the buy token account |
| InvalidTransaction | acquire | 1 | SOL → JUP | the bundle must not create the buy token account |

Scenario orders: 2 (1 main, 1 acquire). Cleanup placed 0 more, listed below and left out of the stats.

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 2 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 3s | 5s | 5s | 5s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 6YuF…AyeH | 2 | 100.0% | 2 | 142,500 | 3s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| arc | 2 | 2 | 2 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unreceivable_buy_token_account`: 8 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 2 | 2 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → JUP | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
