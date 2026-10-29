# Solana QoS report: 2026-10-29-10-54-composite-rosato-run

Barn, orders created between `2026-10-29T10:54:53.802Z` and `2026-10-29T11:11:43.003Z`. Data fetched 2026-10-29T11:12:21+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 36 |
| Orders executed | **32** (88.9%) |
| Sponsored orders never created on-chain | 4 (11.1%) |
| Traders | 28 |
| Settlement txs | 32 |

## Scenario results

Target solver: `rosato`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-29T10:54:53.802Z | 2026-10-29T10:55:54.743Z | 5/6 | 1 | 7 | 7 | 83.3% |
| solver-same-direction-25 | 2026-10-29T10:57:04.042Z | 2026-10-29T10:58:03.668Z | 7/25 | 18 | 7 | 7 | 28.0% |
| solver-burst-sell-small | 2026-10-29T10:59:32.441Z | 2026-10-29T11:02:57.706Z | 9/28 | 19 | 9 | 9 | 32.1% |
| solver-cow | 2026-10-29T11:04:06.880Z | 2026-10-29T11:07:26.836Z | 5/15 | 10 | 9 | 6 | 33.3% |
| solver-token-sample | 2026-10-29T11:08:10.881Z | 2026-10-29T11:09:06.372Z | 3/12 | 9 | 4 | 3 | 25.0% |

## Scenario

29 of 86 scenario rows completed. 0 retries, 48 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 10:54:54 | 1 | 1 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 10:54:54 | 2 | 2 | sell 0.005 SOL → USDT | filled | 41s | 1 |  |
| 10:54:54 | 3 | 3 | sell 0.5 JUP → USDC | failed | 23s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 10:55:02 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 18s | 1 |  |
| 10:55:35 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 17s | 1 |  |
| 10:55:17 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 38s | 2 |  |
| 10:57:04 | 7 | 4 | sell 0.005 SOL → JUP | filled | 45s | 1 |  |
| 10:57:04 | 8 | 5 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 10:57:04 | 9 | 6 | sell 0.005 SOL → JUP | filled | 27s | 1 |  |
| 10:57:04 | 10 | 7 | sell 0.005 SOL → JUP | filled | 60s | 1 |  |
| 10:57:04 | 11 | 8 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 10:57:04 | 12 | 9 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 13 | 10 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 14 | 11 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 10:57:04 | 15 | 12 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 16 | 13 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 17 | 14 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 18 | 15 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 19 | 16 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 20 | 17 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 21 | 18 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 22 | 19 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 23 | 20 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 24 | 21 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 25 | 22 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 10:57:04 | 26 | 23 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 27 | 24 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 28 | 25 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 29 | 26 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 30 | 27 | sell 0.005 SOL → JUP | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:57:04 | 31 | 28 | sell 0.005 SOL → JUP | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:32 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 10s | 1 |  |
| 10:59:32 | 33 | 30 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 10:59:32 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 10:59:32 | 35 | 32 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:01:02 | 36 | 29 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:01:02 | 37 | 30 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:01:02 | 38 | 31 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:01:02 | 39 | 32 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:01:02 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 20s | 1 |  |
| 11:01:02 | 41 | 34 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 11:01:02 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 11:01:02 | 43 | 36 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 44 | 29 | sell 0.0025 SOL → USDC | filled | 25s | 1 |  |
| 11:02:32 | 45 | 30 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 11:02:32 | 46 | 31 | sell 0.0035 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 47 | 32 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 49 | 34 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 50 | 35 | sell 0.0035 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 51 | 36 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 11:02:32 | 52 | 37 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 53 | 38 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 54 | 39 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 55 | 40 | sell 0.004 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 56 | 41 | sell 0.0025 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 57 | 42 | sell 0.003 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 58 | 43 | sell 0.0035 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:02:32 | 59 | 44 | sell 0.004 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:04:06 | 60 | 46 | buy 2.6 USDC ← SOL | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:04:06 | 61 | 48 | buy 1.3 USDC ← SOL | filled | 25s | 1 |  |
| 11:04:06 | 62 | 49 | buy 3.1 USDC ← SOL | failed | 7s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:04:06 | 63 | 50 | buy 3.1 USDT ← SOL | filled | 18s | 1 |  |
| 11:04:06 | 64 | 51 | buy 1.1 USDT ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:04:06 | 65 | 52 | buy 3.2 USDC ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:06:36 | 66 | 45 | sell 0.02 SOL → USDC | failed | 39s | 1 | main expired |
| 11:06:36 | 67 | 46 | buy 0.02 SOL ← USDC | filled | 44s | 2 |  |
| 11:06:36 | 68 | 47 | sell 0.03 SOL → USDC | filled | 21s | 1 |  |
| 11:06:36 | 69 | 48 | sell 1.2 USDC → SOL | filled | 33s | 1 |  |
| 11:06:36 | 70 | 49 | sell 3 USDC → USDT | failed | 48s | 1 | acquire USDC expired |
| 11:06:36 | 71 | 50 | sell 3 USDT → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:06:36 | 72 | 51 | sell 1 USDT → USDC | failed | 47s | 1 | acquire USDT expired |
| 11:06:36 | 73 | 52 | sell 3 USDC → USDT | failed | 15s | 0 | acquire USDC error: 404 Not Found: NoLiquidity: no route found |
| 11:06:36 | 74 | 53 | sell 0.02 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:08:10 | 75 | 54 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 37s | 1 | main expired |
| 11:08:11 | 76 | 55 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 23s | 1 |  |
| 11:08:11 | 77 | 56 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 42s | 1 |  |
| 11:08:11 | 78 | 57 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 55s | 1 |  |
| 11:08:11 | 79 | 58 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:08:11 | 80 | 59 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:08:11 | 81 | 60 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:08:11 | 82 | 61 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:08:11 | 83 | 62 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:08:47 | 84 | 54 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:08:33 | 85 | 55 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:08:53 | 86 | 56 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

53 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 45 | SOL → USDC ×20, SOL → JUP ×19, USDT → USDC, SOL → $WIF, SOL → POPCAT, SOL → JitoSOL, SOL → mSOL, SOL → JupSOL | no route found |
| NoLiquidity | quote | 5 | SOL → USDT, SOL → USDC, SOL → USDG, SOL → PUMP, SOL → PYUSD | no route found |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |
| BlockhashExpired | main | 1 | SOL → USDC | the transaction's blockhash is no longer valid, sign a fresh one |
| NoLiquidity | acquire | 1 | SOL → USDC | no route found |

Scenario orders: 36 (31 main, 5 acquire). Cleanup placed 22 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 10:55:57 | 1 | USDC → SOL (native) | Executed | `0x42c4c997…` [🐞](https://debug.barn.cow.fi/order/0x42c4c9972335f6294b047e1f1cfb5a067a644e30ee46e5f7cb8bb4721604acc3) |
| 10:56:03 | 2 | USDT → SOL (native) | Executed | `0xac319f17…` [🐞](https://debug.barn.cow.fi/order/0xac319f179c57347c080c046c0ed4a303ca701e7c412ff03633663a4778b071bb) |
| 10:56:04 | 3 | USDC → SOL (native) | Executed | `0x4750001e…` [🐞](https://debug.barn.cow.fi/order/0x4750001ef831365dc5b78f901e6d1dd736c6609bc72abb717314b8c21b92933f) |
| 10:58:06 | 4 | JUP → SOL (native) | Executed | `0xdf8226a3…` [🐞](https://debug.barn.cow.fi/order/0xdf8226a3214e83aaff281384bfb93c5752fa2fb4eeb4ed3a5f91434af9154ad9) |
| 10:58:09 | 5 | JUP → SOL (native) | Executed | `0x4f7bf889…` [🐞](https://debug.barn.cow.fi/order/0x4f7bf88937a7d774755e1af1b0d5662580fc47ce4df17d53e9139678aeff7c7a) |
| 10:58:13 | 6 | JUP → SOL (native) | Executed | `0xc662ec77…` [🐞](https://debug.barn.cow.fi/order/0xc662ec7719a6e31c2dd9898ade10cb588f56746f4865352d92e9723bec79313c) |
| 10:58:16 | 7 | JUP → SOL (native) | Executed | `0xeb7f4934…` [🐞](https://debug.barn.cow.fi/order/0xeb7f493467cbdb1d3a7a59cf3bfe57c342051ca89ce09d0c9f3bf16a63ee395e) |
| 10:58:20 | 11 | JUP → SOL (native) | Executed | `0x80f9342f…` [🐞](https://debug.barn.cow.fi/order/0x80f9342fa4be5ffd854f9b52783b2adcb97ce4ddd9022ec20433ebefe238c21c) |
| 10:58:34 | 22 | JUP → SOL (native) | Executed | `0x90c946c8…` [🐞](https://debug.barn.cow.fi/order/0x90c946c8f3a70e7bd7a27b341a85700cf5c4e5825e6327ea52d11e434908d58a) |
| 11:03:03 | 29 | USDC → SOL (native) | Executed | `0x7b01e9ce…` [🐞](https://debug.barn.cow.fi/order/0x7b01e9ce6a50b4802df342d929a156eae25ab5c5fa5446fdc7caba8bffa275bd) |
| 11:03:04 | 30 | USDC → SOL (native) | Executed | `0x82d63c74…` [🐞](https://debug.barn.cow.fi/order/0x82d63c7459c9e9f06728df6af6ff215cc4999e15bfbf61fe84f9705ec77bbd7b) |
| 11:03:08 | 31 | USDC → SOL (native) | Executed | `0x36945065…` [🐞](https://debug.barn.cow.fi/order/0x369450656d6c7e846c8d3f2e33859215957afa92cface906cbdc8f98d80325d0) |
| 11:03:13 | 33 | USDC → SOL (native) | Executed | `0xa04565e3…` [🐞](https://debug.barn.cow.fi/order/0xa04565e3d9181da22f15e70b70d6c78def060456b3a23600d945dd1123392bd9) |
| 11:03:14 | 35 | USDC → SOL (native) | Executed | `0x3d0c91c5…` [🐞](https://debug.barn.cow.fi/order/0x3d0c91c5d96ef62d0c0e60413e5e36b48ac30c12e68f2620ba4d80c19f6acd62) |
| 11:03:15 | 36 | USDC → SOL (native) | Executed | `0x96a6de65…` [🐞](https://debug.barn.cow.fi/order/0x96a6de650994aa5cb10bb33bf8bfc14ca8eb00c2728ecdfb3e84a8a68d87ff0e) |
| 11:07:41 | 47 | USDC → SOL (native) | Executed | `0x8ed90581…` [🐞](https://debug.barn.cow.fi/order/0x8ed905814272c01a5c19f9fd024e5a7115231e5d6c7c783e7b15bbcef0162751) |
| 11:09:14 | 55 | PUMP → SOL (native) | Executed | `0x8690c500…` [🐞](https://debug.barn.cow.fi/order/0x8690c500be78dd60871fd4e2a026edf444b17f6de6297fd207dd3e2f2269c6af) |
| 11:09:15 | 56 | PYUSD → SOL (native) | Executed | `0xaecb7173…` [🐞](https://debug.barn.cow.fi/order/0xaecb7173b7c043b78251007477db300b4e036a7411c350cb3e8048b7263c941e) |
| 11:09:16 | 57 | Bonk → SOL (native) | Executed | `0x913a436b…` [🐞](https://debug.barn.cow.fi/order/0x913a436b3a52f4e281591772307883b689b5eaf47f9f1cb8524cdf0051625329) |
| 11:09:52 | 8 | JUP → SOL (native) | Executed | `0xc56b39bb…` [🐞](https://debug.barn.cow.fi/order/0xc56b39bbb2d12455dfdc31e95179a8bde6bbbbf9ad3a7da19b4364c4967b7358) |
| 11:10:12 | 46 | USDC → SOL (native) | Executed | `0x7c6f871c…` [🐞](https://debug.barn.cow.fi/order/0x7c6f871c25310ad44dabbb15798d38e62a65144bf16f98235fcb4d6e7e61eb52) |
| 11:10:16 | 50 | USDT → SOL (native) | Executed | `0x23ae98f5…` [🐞](https://debug.barn.cow.fi/order/0x23ae98f5fa8efeaf608f00680677dc5a0e50ca95147bba8465f8f14260746eb8) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 32 | 88.9% |
| expired: never created on-chain (winner found, creation blockhash expired) | 4 | 11.1% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 14s | 19s | 35s | 52s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| DNvt…HqL1 | 32 | 100.0% | 32 | 121,782 | 14s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| rosato | 57 | 57 | 54 | 94.7% | 0 | 0 | 8 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 1
- Orders filtered for `unfunded_sell_token_account`: 190 times
- Orders filtered for `in_flight`: 27 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 30 | 26 | 86.7% |
| market buy | 6 | 6 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 16 | 14 | 87.5% |
| wSOL → JUP | 9 | 9 | 100.0% |
| wSOL → USDT | 4 | 3 | 75.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| JUP → USDC | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 0 | 0.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 3 | 3 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 2 | 2 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 1 | 1 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 1 | 1 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 1 | 1 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 1 | 1 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 1 | 1 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 1 | 1 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 1 | 0 | 0.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 1 | 1 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 1 | 0 | 0.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 1 | 0 | 0.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 0 | 0.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 4 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 11:06:40 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x841adb8a…` [🐞](https://debug.barn.cow.fi/order/0x841adb8a5e0ddd4a84a8cfb343246d17ecafd88007c29e692e790107e5c7ef2f) |
| 11:06:49 | wSOL → USDT | market sell | Winner too late: creation blockhash expired | `0xc3b2a4a8…` [🐞](https://debug.barn.cow.fi/order/0xc3b2a4a8fa8b84ac8f95f8b47b89fc9f22f871f5c47de01e9b0af71169901df2) |
| 11:06:50 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x9024aa61…` [🐞](https://debug.barn.cow.fi/order/0x9024aa6197385330fb409638ca1fb9f8ee311b5f27927db71536794bbebc258c) |
| 11:08:13 | wSOL → USDG | market sell | Winner too late: creation blockhash expired | `0x3ae8125f…` [🐞](https://debug.barn.cow.fi/order/0x3ae8125fa9bc018a6590dd35d9953ff66307a58d720c379c476951bdfd92ca83) |
