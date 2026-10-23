# Solana QoS report: 2026-10-22-10-50-same-direction-25x1

Barn, orders created between `2026-10-22T10:50:38.800Z` and `2026-10-22T10:55:42.195Z`. Data fetched 2026-10-22T10:55:48+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 23 |
| Orders executed | **22** (95.7%) |
| Sponsored orders never created on-chain | 1 (4.3%) |
| Traders | 23 |
| Settlement txs | 22 |

## Scenario

16 of 25 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 10:50:38 | 1 | 1 | buy 10 JUP ← SOL | filled | 96s | 1 |  |
| 10:50:38 | 2 | 2 | buy 10 JUP ← SOL | failed | 102s | 1 | main timeout |
| 10:50:38 | 3 | 3 | buy 10 JUP ← SOL | filled | 99s | 1 |  |
| 10:50:38 | 4 | 4 | buy 10 JUP ← SOL | failed | 103s | 1 | main timeout |
| 10:50:38 | 5 | 5 | buy 10 JUP ← SOL | filled | 69s | 1 |  |
| 10:50:38 | 6 | 6 | buy 10 JUP ← SOL | filled | 81s | 1 |  |
| 10:50:38 | 7 | 7 | buy 10 JUP ← SOL | filled | 88s | 1 |  |
| 10:50:38 | 8 | 8 | buy 10 JUP ← SOL | failed | 104s | 1 | main timeout |
| 10:50:38 | 9 | 9 | buy 10 JUP ← SOL | failed | 104s | 1 | main timeout |
| 10:50:38 | 10 | 10 | buy 10 JUP ← SOL | filled | 76s | 1 |  |
| 10:50:38 | 11 | 11 | buy 10 JUP ← SOL | failed | 11s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 10:50:38 | 12 | 12 | buy 10 JUP ← SOL | failed | 104s | 1 | main timeout |
| 10:50:38 | 13 | 13 | buy 10 JUP ← SOL | filled | 89s | 1 |  |
| 10:50:38 | 14 | 14 | buy 10 JUP ← SOL | failed | 104s | 1 | main timeout |
| 10:50:38 | 15 | 15 | buy 10 JUP ← SOL | failed | 46s | 1 | main expired |
| 10:50:38 | 16 | 16 | buy 10 JUP ← SOL | filled | 59s | 1 |  |
| 10:50:38 | 17 | 17 | buy 10 JUP ← SOL | filled | 32s | 1 |  |
| 10:50:38 | 18 | 18 | buy 10 JUP ← SOL | filled | 38s | 1 |  |
| 10:50:38 | 19 | 19 | buy 10 JUP ← SOL | filled | 50s | 1 |  |
| 10:50:38 | 20 | 20 | buy 10 JUP ← SOL | filled | 44s | 1 |  |
| 10:50:38 | 21 | 21 | buy 10 JUP ← SOL | filled | 42s | 1 |  |
| 10:50:38 | 22 | 22 | buy 10 JUP ← SOL | filled | 27s | 1 |  |
| 10:50:38 | 23 | 23 | buy 10 JUP ← SOL | filled | 63s | 1 |  |
| 10:50:38 | 24 | 24 | buy 10 JUP ← SOL | filled | 55s | 1 |  |
| 10:50:38 | 25 | 25 | buy 10 JUP ← SOL | failed | 14s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |

### Rows without an order

2 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | main | 2 | SOL → JUP ×2 | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 23 (23 main, 0 acquire). Cleanup placed 22 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 10:52:32 | 1 | JUP → SOL (native) | Executed | `0x70ff6fb0…` [🐞](https://debug.barn.cow.fi/order/0x70ff6fb090aaa77a4d1949f21570c209beeeca25a3caf2ff46cc170cf2299a9a) |
| 10:52:34 | 3 | JUP → SOL (native) | Executed | `0xabb306fa…` [🐞](https://debug.barn.cow.fi/order/0xabb306fa90a1ae9cceeac7942d01c7b1c883908dcafacf43e7c8ef2121623729) |
| 10:52:37 | 5 | JUP → SOL (native) | Executed | `0x8238fdae…` [🐞](https://debug.barn.cow.fi/order/0x8238fdae84195aa65946cd8df79bf86bd3ab50b3fe9cbb4d3486a8125ddf589f) |
| 10:52:38 | 6 | JUP → SOL (native) | Executed | `0x197600f6…` [🐞](https://debug.barn.cow.fi/order/0x197600f606e85436d0b9757c291570cdd42bfd56f1213457d2de834d65c4df39) |
| 10:52:39 | 7 | JUP → SOL (native) | Executed | `0xf327a350…` [🐞](https://debug.barn.cow.fi/order/0xf327a350ed635c93e685ddf69da615948a16b0214c8eb44a69434e7281b4a48d) |
| 10:52:40 | 10 | JUP → SOL (native) | Executed | `0x0545f1c4…` [🐞](https://debug.barn.cow.fi/order/0x0545f1c4a3a35ad5f21de2cd3367dd0c45112fbd7699b6e8eb78373f1a1d1edf) |
| 10:52:42 | 12 | JUP → SOL (native) | Executed | `0x4dbab257…` [🐞](https://debug.barn.cow.fi/order/0x4dbab257dfd0d72e6ffd7b2d6ad440044ed832f97361f5669380c0cf390e6ef2) |
| 10:52:43 | 13 | JUP → SOL (native) | Executed | `0x2bd86ea7…` [🐞](https://debug.barn.cow.fi/order/0x2bd86ea757b26bd4edca1db982ba8788db8724a1a0db1b073f13060c4bbed466) |
| 10:52:43 | 16 | JUP → SOL (native) | Executed | `0xfe6e5b8d…` [🐞](https://debug.barn.cow.fi/order/0xfe6e5b8d23df48ef12adc886efea1f52ccbbd1ed1f34a8724c50ab346d395133) |
| 10:52:45 | 17 | JUP → SOL (native) | Executed | `0x4727fc1b…` [🐞](https://debug.barn.cow.fi/order/0x4727fc1b96ad19569c671f4df75ee1defca705af4f996e617a397a4856d80639) |
| 10:52:53 | 18 | JUP → SOL (native) | Executed | `0x815cf316…` [🐞](https://debug.barn.cow.fi/order/0x815cf31677a5494426a227ae0a6e1d8ae8f77469dedb7ac762491a7c7ad3b436) |
| 10:53:01 | 19 | JUP → SOL (native) | Executed | `0xd50ab43b…` [🐞](https://debug.barn.cow.fi/order/0xd50ab43b928500d4af9bb1b1396f5346d17513649cd12dde710c70329b10911c) |
| 10:53:08 | 20 | JUP → SOL (native) | Executed | `0xbcaf25f0…` [🐞](https://debug.barn.cow.fi/order/0xbcaf25f0a761d6f39c6179c4829e3fcbd4c7001c140e47ab402c7c8514139179) |
| 10:53:10 | 21 | JUP → SOL (native) | Executed | `0x73469e63…` [🐞](https://debug.barn.cow.fi/order/0x73469e63326c9ce6c2b83fefcbe542c7dca70f00cf5d08171fa39f9ed6282987) |
| 10:53:14 | 22 | JUP → SOL (native) | Executed | `0x76505af9…` [🐞](https://debug.barn.cow.fi/order/0x76505af94718e963c25bba5620216bbaaa7651436b9cfce2b6b867a98400c6fd) |
| 10:53:17 | 23 | JUP → SOL (native) | Executed | `0x6b3930d6…` [🐞](https://debug.barn.cow.fi/order/0x6b3930d6347fc64fcb05fb8fd850fffb63a9d771a73c8ce0c6c2721b797b9dd3) |
| 10:53:18 | 24 | JUP → SOL (native) | Executed | `0xdb8b2207…` [🐞](https://debug.barn.cow.fi/order/0xdb8b22075b3eaa321b890836067a38f6e40d587627c6188449d93038df6ccc7f) |
| 10:54:09 | 2 | JUP → SOL (native) | Executed | `0xd3055b25…` [🐞](https://debug.barn.cow.fi/order/0xd3055b256963d073fa3f05c1fd5b75ee9d08843f0860f9d3745e5f9e068e2fb2) |
| 10:54:12 | 4 | JUP → SOL (native) | Executed | `0xab309384…` [🐞](https://debug.barn.cow.fi/order/0xab3093843cfc3cc9ee71a71931bc27fc7c8d4e4b43e98cceb25d9196cf7ef136) |
| 10:54:15 | 8 | JUP → SOL (native) | Executed | `0x74b167ea…` [🐞](https://debug.barn.cow.fi/order/0x74b167ea687621f5e7be33446080de9a77cd82e26a2714008c5532f316a86dc0) |
| 10:54:18 | 9 | JUP → SOL (native) | Executed | `0xbca2a5e9…` [🐞](https://debug.barn.cow.fi/order/0xbca2a5e9360c3f1218077864a456ab37f1dbdd1f55aa763a7df7624b8f9d5596) |
| 10:54:20 | 14 | JUP → SOL (native) | Executed | `0x48cf11c3…` [🐞](https://debug.barn.cow.fi/order/0x48cf11c3f3989343657550ae2360f804dbd01d0f7e4dd4c8aa0c15f452a8c272) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 22 | 95.7% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 4.3% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 64s | 90s | 106s | 118s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| J6eq…jy6c | 7 | 31.8% | 7 | 54,728 | 73s |
| GCBB…o5VC | 6 | 27.3% | 6 | 76,236 | 33s |
| 8oLu…T8ku | 3 | 13.6% | 3 | 69,043 | 90s |
| Grr6…x1jS | 3 | 13.6% | 3 | 167,656 | 29s |
| AuwL…YzVj | 2 | 9.1% | 2 | 23,617 | 115s |
| 883X…8aGz | 1 | 4.5% | 1 | 72,856 | 34s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| asao | 128 | 13 | 12 | 92.3% | 1 | 0 | 0 | 0 |
| solivagus | 90 | 12 | 11 | 91.7% | 1 | 0 | 0 | 0 |
| jupiter-solve | 159 | 4 | 4 | 100.0% | 0 | 0 | 0 | 0 |
| paradox | 8 | 3 | 3 | 100.0% | 0 | 0 | 0 | 0 |
| grafiks | 255 | 2 | 2 | 100.0% | 0 | 0 | 0 | 0 |
| kaisersolver | 91 | 1 | 1 | 100.0% | 0 | 0 | 0 | 0 |
| arc | 1 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| rosato | 42 | 0 | 0 | – | 0 | 0 | 1 | 0 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 6 | 0 |
| rizzolver | 0 | 0 | 0 | – | 0 | 0 | 35 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 35 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| asao: SimulationFailed | 1 |
| solivagus: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 49 times
- Orders filtered for `in_flight`: 26 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market buy | 23 | 22 | 95.7% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → JUP | 23 | 22 | 95.7% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 1 | 1 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 1 | 1 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 1 | 1 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 1 | 1 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 1 | 1 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 1 | 1 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 1 | 1 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 1 | 1 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 1 | 1 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 1 | 1 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 1 | 1 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 1 | 1 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 1 | 1 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 1 | 0 | 0.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 1 | 1 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 1 | 1 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 1 | 1 | 100.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 1 | 1 | 100.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 1 | 1 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 1 | 1 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 1 | 1 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 1 | 1 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 10:50:50 | wSOL → JUP | market buy | Winner too late: creation blockhash expired | `0xdd8894dc…` [🐞](https://debug.barn.cow.fi/order/0xdd8894dccfcf57a69fb2e4d063030c465479484ed60e1cdd96d75ec78f0fa8d1) |
