# Solana QoS report: grafiks-2026-10-09-213017-cow-2

Barn, orders created between `2026-10-09T20:08:45.187Z` and `2026-10-09T20:13:12.302Z`. Data fetched 2026-10-09T20:13:18+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 14 |
| Orders executed | **14** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 9 |
| Settlement txs | 13 |

## Scenario

14 of 15 scenario rows completed. 0 retries, 1 placement errors (from `sim/journal.jsonl`).

| Planned trades | Filled | Quote failed | Submitted but unfilled | Other failed | Unfinished | Trade completion |
|---|---|---|---|---|---|---|
| 15 | 14 | 1 | 0 | 0 | 0 | 93.3% |

Counts are scenario rows, not failed attempts. Cleanup is excluded. Late fills remain separate from full-flow completion.

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 20:08:45 | 1 | 2 | buy 2.6 USDC ← SOL | filled | 24s | 1 |  |
| 20:08:45 | 2 | 4 | buy 1.3 USDC ← SOL | filled | 18s | 1 |  |
| 20:08:45 | 3 | 5 | buy 3.1 USDC ← SOL | filled | 11s | 1 |  |
| 20:08:45 | 4 | 6 | buy 3.1 USDT ← SOL | filled | 8s | 1 |  |
| 20:08:45 | 5 | 7 | buy 1.1 USDT ← SOL | filled | 18s | 1 |  |
| 20:08:45 | 6 | 8 | buy 3.2 USDC ← SOL | filled | 9s | 1 |  |
| 20:11:15 | 7 | 1 | sell 0.02 SOL → USDC | filled | 20s | 1 |  |
| 20:11:15 | 8 | 2 | buy 0.02 SOL ← USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 20:11:15 | 9 | 3 | sell 0.03 SOL → USDC | filled | 14s | 1 |  |
| 20:11:15 | 10 | 4 | sell 1.2 USDC → SOL | filled | 8s | 1 |  |
| 20:11:15 | 11 | 5 | sell 3 USDC → USDT | filled | 14s | 1 |  |
| 20:11:15 | 12 | 6 | sell 3 USDT → USDC | filled | 8s | 1 |  |
| 20:11:15 | 13 | 7 | sell 1 USDT → USDC | filled | 8s | 1 |  |
| 20:11:15 | 14 | 8 | sell 3 USDC → USDT | filled | 8s | 1 |  |
| 20:11:15 | 15 | 9 | sell 0.02 SOL → JUP | filled | 8s | 1 |  |

### Rows without a main order

1 rows failed before a main order existed. Any acquisition orders are counted separately.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| Quote unavailable (API: NoLiquidity) | main | 1 | USDC → SOL | API reported no route found. This does not prove missing liquidity; underlying cause unknown. |

Scenario orders: 14 (14 main, 0 acquire). Cleanup placed 9 more, listed below and left out of the stats.

## Backend failure evidence

NoLiquidity is a generic API response, not proof of missing market liquidity. Timing matches are approximate; a shared auction does not prove an order-specific cause.

| UTC time | Row | Stage | Solver | Backend detail | Match | Cause / order context |
|---|---|---|---|---|---|---|
| 2026-10-09T20:11:17.186Z | 8 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:11:40.328334622Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x0a47c39748de2c46df1882692e692068284c5e637cca40c4c173090d60cc6fb0, 0x4ffd37e45f903f6cd778763ecc0989fc24829c38e8c40f9fa694a06caabc0044, 0xbe656cec461003e0a2697b81d36e28e4ce74fbe6e983cc67fdd98b3ec67e61d3 |

Backend evidence fetched through `2026-10-09T20:13:12.302Z`.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 20:11:37 | 1 | USDC → SOL (native) | Executed | `0x0a47c397…` [🐞](https://debug.barn.cow.fi/order/0x0a47c39748de2c46df1882692e692068284c5e637cca40c4c173090d60cc6fb0) |
| 20:11:38 | 2 | USDC → SOL (native) | Executed | `0x4ffd37e4…` [🐞](https://debug.barn.cow.fi/order/0x4ffd37e45f903f6cd778763ecc0989fc24829c38e8c40f9fa694a06caabc0044) |
| 20:11:39 | 3 | USDC → SOL (native) | Executed | `0xbe656cec…` [🐞](https://debug.barn.cow.fi/order/0xbe656cec461003e0a2697b81d36e28e4ce74fbe6e983cc67fdd98b3ec67e61d3) |
| 20:11:41 | 5 | USDT → SOL (native) | Executed | `0x6abb3b1a…` [🐞](https://debug.barn.cow.fi/order/0x6abb3b1aaa79d79358dbaa669d98c08153e0b4f3b9b16aa2610dbc5d278e48df) |
| 20:11:42 | 6 | USDC → SOL (native) | Executed | `0xe510c168…` [🐞](https://debug.barn.cow.fi/order/0xe510c168d362ecd3c2e90e884128367103f193824017fba0b9a262a7ee22886b) |
| 20:11:45 | 7 | USDC → SOL (native) | Executed | `0x339628dd…` [🐞](https://debug.barn.cow.fi/order/0x339628dda0d901f5ec61e1338ac1fc352e1a831b21cd1155bac34d1ade6014b4) |
| 20:11:46 | 8 | USDT → SOL (native) | Executed | `0x51ccdb15…` [🐞](https://debug.barn.cow.fi/order/0x51ccdb150d6b3297240b8bafc378e2ddc3cd68a218ce7ace2e9be8d331599c6f) |
| 20:11:46 | 8 | USDC → SOL (native) | Executed | `0x31fcfc37…` [🐞](https://debug.barn.cow.fi/order/0x31fcfc37ddff426849eae54c55fafed31a3799861fcc0ee892fcd33ecfcf7600) |
| 20:11:47 | 9 | JUP → SOL (native) | Executed | `0x86aae26f…` [🐞](https://debug.barn.cow.fi/order/0x86aae26fe3893a9f00cb94a303a41b667b75dbea83cdb527830903be55c827fb) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 14 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 14s | 15s | 18s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| AuwL…YzVj | 14 | 100.0% | 13 | 101,896 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| grafiks | 46 | 27 | 22 | 81.5% | 2 | 6 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 2 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 47 times
- Orders filtered for `unreceivable_buy_token_account`: 47 times
- Orders filtered for `in_flight`: 7 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 8 | 8 | 100.0% |
| buy | 6 | 6 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 6 | 6 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 2 | 2 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 2 | 2 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 2 | 2 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 2 | 2 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
