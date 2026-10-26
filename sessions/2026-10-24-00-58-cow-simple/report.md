# Solana QoS report: 2026-10-24-00-58-cow-simple

Barn, orders created between `2026-10-24T00:58:44.845Z` and `2026-10-24T01:03:10.963Z`. Data fetched 2026-10-24T01:02:34+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 15 |
| Orders executed | **15** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 9 |
| Settlement txs | 9 |

## Scenario

15 of 15 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 00:58:45 | 1 | 2 | buy 2.6 USDC ← SOL | filled | 14s | 1 |  |
| 00:58:45 | 2 | 4 | buy 1.3 USDC ← SOL | filled | 14s | 1 |  |
| 00:58:45 | 3 | 5 | buy 3.1 USDC ← SOL | filled | 9s | 1 |  |
| 00:58:45 | 4 | 6 | buy 3.1 USDT ← SOL | filled | 9s | 1 |  |
| 00:58:45 | 5 | 7 | buy 1.1 USDT ← SOL | filled | 8s | 1 |  |
| 00:58:45 | 6 | 8 | buy 3.2 USDC ← SOL | filled | 9s | 1 |  |
| 01:01:14 | 7 | 1 | sell 0.02 SOL → USDC | filled | 8s | 1 |  |
| 01:01:14 | 8 | 2 | buy 0.02 SOL ← USDC | filled | 9s | 1 |  |
| 01:01:14 | 9 | 3 | sell 0.03 SOL → USDC | filled | 8s | 1 |  |
| 01:01:14 | 10 | 4 | sell 1.2 USDC → SOL | filled | 15s | 1 |  |
| 01:01:14 | 11 | 5 | sell 3 USDC → USDT | filled | 12s | 1 |  |
| 01:01:14 | 12 | 6 | sell 3 USDT → USDC | filled | 5s | 1 |  |
| 01:01:14 | 13 | 7 | sell 1 USDT → USDC | filled | 8s | 1 |  |
| 01:01:14 | 14 | 8 | sell 3 USDC → USDT | filled | 12s | 1 |  |
| 01:01:15 | 15 | 9 | sell 0.02 SOL → JUP | filled | 8s | 1 |  |

Scenario orders: 15 (15 main, 0 acquire). Cleanup placed 9 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 01:01:32 | 1 | USDC → SOL (native) | Executed | `0xcb6f2a2e…` [🐞](https://debug.barn.cow.fi/order/0xcb6f2a2e32b52e782d9c3cc04d9a2f76f2806db30380c52e627354d638cbc704) |
| 01:01:34 | 2 | USDC → SOL (native) | Executed | `0xfd0f19f8…` [🐞](https://debug.barn.cow.fi/order/0xfd0f19f80ead9fc92a156755469c5dfe9a737ce8bc700296699168626efb5a8e) |
| 01:01:34 | 3 | USDC → SOL (native) | Executed | `0x85f52c27…` [🐞](https://debug.barn.cow.fi/order/0x85f52c27e0dbe6a9ea65bb7f82c7fadffab15316a712792fee8959d597d70e45) |
| 01:01:38 | 5 | USDT → SOL (native) | Executed | `0xfa935f9c…` [🐞](https://debug.barn.cow.fi/order/0xfa935f9c9883fc960ca4af22a6f2af9ba1fd308b0e419b30dc6a19b86896d32b) |
| 01:01:40 | 6 | USDC → SOL (native) | Executed | `0xe0bc59a8…` [🐞](https://debug.barn.cow.fi/order/0xe0bc59a85f351c38d5a138a09778aa0a63182a81a5af13ff9d0f0bf7053e0f7b) |
| 01:01:43 | 7 | USDC → SOL (native) | Executed | `0x3322a08b…` [🐞](https://debug.barn.cow.fi/order/0x3322a08b65a9c4f785ed85120ec98fc1724089c57b75e39e41255cbcc6659326) |
| 01:01:43 | 8 | USDC → SOL (native) | Executed | `0x3ddba0b4…` [🐞](https://debug.barn.cow.fi/order/0x3ddba0b4fea744bab4ce505ec93115873e998765f8764aded3b74a5b02ddbf7f) |
| 01:01:44 | 8 | USDT → SOL (native) | Executed | `0x5c1ef5c8…` [🐞](https://debug.barn.cow.fi/order/0x5c1ef5c8f747871bb1dc18b791d7d77c30e44de6fc3f5ecd250d49e5d10804f4) |
| 01:01:44 | 9 | JUP → SOL (native) | Executed | `0x69bb981f…` [🐞](https://debug.barn.cow.fi/order/0x69bb981faa88c66af8138d56da97b517ee71c63ac981f4c92e93937a08eb4d17) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 15 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 5s | 6s | 10s | 10s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 15 | 100.0% | 9 | 104,561 | 5s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 18 | 15 | 15 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 42 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 8 | 8 | 100.0% |
| market buy | 7 | 7 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 6 | 6 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 2 | 2 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 2 | 2 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 2 | 2 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 2 | 2 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 2 | 2 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 2 | 2 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 1 | 1 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 1 | 1 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 1 | 1 | 100.0% |
