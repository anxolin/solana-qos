# Solana QoS report: grafiks-2026-10-09-213017-cow

Barn, orders created between `2026-10-09T20:01:07.436Z` and `2026-10-09T20:04:26.882Z`. Data fetched 2026-10-12T09:13:46+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 0 |
| Orders executed | **0** (–) |
| Sponsored orders never created on-chain | 0 (–) |
| Traders | 0 |
| Settlement txs | 0 |

## Scenario

0 of 15 scenario rows completed. 0 retries, 15 placement errors (from `sim/journal.jsonl`).

| Planned trades | Filled | Quote failed | Submitted but unfilled | Other failed | Unfinished | Trade completion |
|---|---|---|---|---|---|---|
| 15 | 0 | 1 | 0 | 14 | 0 | 0.0% |

Counts are scenario rows, not failed attempts. Cleanup is excluded. Late fills remain separate from full-flow completion.

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 20:01:07 | 1 | 2 | buy 2.6 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:01:07 | 2 | 4 | buy 1.3 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:01:07 | 3 | 5 | buy 3.1 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:01:07 | 4 | 6 | buy 3.1 USDT ← SOL | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 20:01:07 | 5 | 7 | buy 1.1 USDT ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:01:07 | 6 | 8 | buy 3.2 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:03:37 | 7 | 1 | sell 0.02 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:03:37 | 8 | 2 | buy 0.02 SOL ← USDC | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:03:37 | 9 | 3 | sell 0.03 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:03:37 | 10 | 4 | sell 1.2 USDC → SOL | failed | 7s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:03:37 | 11 | 5 | sell 3 USDC → USDT | failed | 8s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:03:37 | 12 | 6 | sell 3 USDT → USDC | failed | 8s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:03:37 | 13 | 7 | sell 1 USDT → USDC | failed | 9s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:03:37 | 14 | 8 | sell 3 USDC → USDT | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |
| 20:03:37 | 15 | 9 | sell 0.02 SOL → JUP | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the transaction must end with a CreateOrder instruction |

### Rows without a main order

15 rows failed before a main order existed. Any acquisition orders are counted separately.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| InvalidTransaction | main | 8 | SOL → USDC ×6, SOL → USDT, SOL → JUP | the transaction must end with a CreateOrder instruction |
| InvalidTransaction | acquire | 6 | SOL → USDC ×4, SOL → USDT ×2 | the transaction must end with a CreateOrder instruction |
| Quote unavailable (API: NoLiquidity) | main | 1 | SOL → USDT | API reported no route found. This does not prove missing liquidity; underlying cause unknown. |

Scenario orders: 0 (0 main, 0 acquire). Cleanup placed 0 more, listed below and left out of the stats.

## Backend failure evidence

NoLiquidity is a generic API response, not proof of missing market liquidity. Timing matches are approximate; a shared auction does not prove an order-specific cause.

| UTC time | Row | Stage | Solver | Backend detail | Match | Cause / order context |
|---|---|---|---|---|---|---|
| 2026-10-09T20:01:09.544Z | 4 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |

Backend evidence fetched through `2026-10-09T20:04:26.882Z`.

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
