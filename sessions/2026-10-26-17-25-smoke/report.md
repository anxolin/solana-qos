# Solana QoS report: 2026-10-26-17-25-smoke

Barn, orders created between `2026-10-26T17:25:28.457Z` and `2026-10-26T17:28:15.997Z`. Data fetched 2026-10-26T17:27:24+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 7 |
| Orders executed | **6** (85.7%) |
| Sponsored orders never created on-chain | 1 (14.3%) |
| Traders | 2 |
| Settlement txs | 6 |

## Scenario

5 of 6 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 17:25:28 | 1 | 1 | sell 0.01 SOL → USDC | filled | 15s | 1 |  |
| 17:25:28 | 2 | 2 | buy 2 JUP ← SOL | filled | 15s | 1 |  |
| 17:25:43 | 3 | 1 | buy 1 JUP ← USDC | filled | 15s | 1 |  |
| 17:25:44 | 4 | 2 | sell 1 JUP → wSOL | failed | 37s | 1 | main expired |
| 17:25:58 | 5 | 1 | sell 0.5 JUP → SOL | filled | 11s | 1 |  |
| 17:26:20 | 6 | 2 | buy 1 USDT ← USDC | filled | 29s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 4 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 17:26:57 | 1 | USDC → SOL (native) | Executed | `0xc4eb8b7e…` [🐞](https://debug.barn.cow.fi/order/0xc4eb8b7ee31d5a1992a280c3b292ab2b2993e5b73bede440de9c2f302da8c6c8) |
| 17:26:59 | 2 | JUP → SOL (native) | Executed | `0xe22e7db4…` [🐞](https://debug.barn.cow.fi/order/0xe22e7db4848134f0ea7fcf4e67ad4b01f7d166af2a399881d87cb0f12b5838d7) |
| 17:27:00 | 2 | USDT → SOL (native) | Executed | `0x7ac94ab9…` [🐞](https://debug.barn.cow.fi/order/0x7ac94ab993bfbc17af90559c2b2db6fae874044c0b6e9d12a15bde0ea679ca17) |
| 17:27:00 | 2 | USDC → SOL (native) | Executed | `0x76f8dccd…` [🐞](https://debug.barn.cow.fi/order/0x76f8dccdb748565e4390a2ae6675d25d8774fa52b0f817bb18c23fae3e68d942) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 6 | 85.7% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 14.3% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 8s | 9s | 10s | 10s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 2 | 33.3% | 2 | 67,362 | 10s |
| GCBB…o5VC | 2 | 33.3% | 2 | 60,160 | 7s |
| AuwL…YzVj | 2 | 33.3% | 2 | 196,671 | 7s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 8 | 5 | 5 | 100.0% | 0 | 0 | 0 | 0 |
| asao | 10 | 3 | 3 | 100.0% | 0 | 0 | 0 | 0 |
| grafiks | 9 | 2 | 2 | 100.0% | 0 | 0 | 0 | 0 |
| paradox | 4 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| kaisersolver | 10 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| helixbox | 4 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| arc | 2 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| rosato | 6 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 11 | 0 |
| rizzolver | 0 | 0 | 0 | – | 0 | 0 | 11 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `in_flight`: 4 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 4 | 3 | 75.0% |
| market buy | 3 | 3 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 2 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| USDC → JUP | 1 | 1 | 100.0% |
| JUP → wSOL | 1 | 0 | 0.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| USDC → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 4 | 3 | 75.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 3 | 3 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 17:25:46 | JUP → wSOL | market sell | Winner too late: creation blockhash expired | `0x4dffac08…` [🐞](https://debug.barn.cow.fi/order/0x4dffac084da3b213cb2cd7079936356c73eab69665626f1a7ab018694157e25a) |
