# Solana QoS report: 2026-10-05-15-31-stress-25x6

Barn, orders created between `2026-10-05T15:31:30.885Z` and `2026-10-05T16:06:42.105Z`. Data fetched 2026-10-05T16:12:23+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 174 |
| Orders executed | **164** (94.3%) |
| Sponsored orders never created on-chain | 8 (4.6%) |
| Traders | 25 |
| Settlement txs | 164 |

## Scenario

139 of 141 scenario rows completed. 28 retries, 8 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 15:31:32 | 1 | 22 | sell 0.00428 SOL → USDT | filled | 11s | 1 |  |
| 15:31:41 | 2 | 7 | buy 120000 BONK ← SOL | filled | 17s | 1 |  |
| 15:31:42 | 3 | 4 | buy 0.00256 mSOL ← USDC | filled | 128s | 2 |  |
| 15:31:42 | 4 | 21 | sell 0.0036 SOL → USDC | filled | 16s | 1 |  |
| 15:31:45 | 5 | 19 | buy 0.225 RAY ← USDC | filled | 35s | 2 |  |
| 15:31:50 | 6 | 24 | sell 0.0036 SOL → USDC | filled | 74s | 1 |  |
| 15:31:51 | 7 | 6 | buy 120000 BONK ← SOL | filled | 17s | 1 |  |
| 15:31:52 | 8 | 10 | buy 0.206 TRUMP ← SOL | filled | 23s | 1 |  |
| 15:31:53 | 9 | 14 | buy 0.00276 JitoSOL ← USDC | filled | 39s | 2 |  |
| 15:31:55 | 10 | 23 | buy 0.206 TRUMP ← SOL | filled | 24s | 1 |  |
| 15:31:56 | 11 | 9 | buy 8.15 POPCAT ← SOL | filled | 20s | 1 |  |
| 15:31:58 | 12 | 25 | buy 0.835 JTO ← USDC | filled | 36s | 2 |  |
| 15:32:00 | 13 | 8 | buy 1.37 JUP ← USDC | failed | 56s | 1 | acquire USDC error: Bad Request |
| 15:32:01 | 14 | 21 | sell 0.0036 SOL → USDC | filled | 35s | 1 |  |
| 15:32:02 | 15 | 1 | buy 8.15 POPCAT ← SOL | filled | 28s | 1 |  |
| 15:32:03 | 16 | 18 | buy 120000 BONK ← SOL | filled | 28s | 1 |  |
| 15:32:03 | 17 | 20 | buy 0.00256 mSOL ← USDC | failed | 99s | 2 | acquire USDC expired |
| 15:32:20 | 18 | 19 | buy 0.835 JTO ← USDC | filled | 57s | 2 |  |
| 15:32:08 | 19 | 15 | sell 0.00492 SOL → USDC | filled | 158s | 2 |  |
| 15:32:11 | 20 | 22 | sell 0.0036 SOL → USDT | filled | 70s | 1 |  |
| 15:32:12 | 21 | 16 | buy 120000 BONK ← SOL | filled | 22s | 1 |  |
| 15:32:15 | 22 | 17 | buy 0.206 TRUMP ← SOL | filled | 17s | 1 |  |
| 15:32:16 | 23 | 2 | buy 0.225 RAY ← USDC | filled | 93s | 3 |  |
| 15:32:21 | 24 | 12 | buy 0.00256 mSOL ← USDC | filled | 49s | 2 |  |
| 15:32:22 | 25 | 6 | buy 120000 BONK ← SOL | filled | 26s | 1 |  |
| 15:32:23 | 26 | 13 | sell 0.00428 SOL → USDT | filled | 13s | 1 |  |
| 15:32:26 | 27 | 5 | sell 0.0036 SOL → USDC | filled | 36s | 1 |  |
| 15:32:26 | 28 | 11 | sell 0.0036 SOL → USDT | filled | 19s | 1 |  |
| 15:32:36 | 29 | 21 | sell 0.0036 SOL → USDT | filled | 17s | 1 |  |
| 15:32:27 | 30 | 3 | sell 0.00493 SOL → USDC | filled | 19s | 1 |  |
| 15:32:35 | 31 | 25 | sell 0.798 JTO → RAY | filled | 19s | 1 |  |
| 15:33:22 | 32 | 22 | sell 0.0036 SOL → USDT | filled | 28s | 1 |  |
| 15:32:34 | 33 | 16 | buy 0.206 TRUMP ← SOL | filled | 36s | 1 |  |
| 15:32:56 | 34 | 8 | buy 0.00276 JitoSOL ← USDC | filled | 84s | 3 |  |
| 15:32:41 | 35 | 23 | sell 0.174 TRUMP → SOL | filled | 27s | 1 |  |
| 15:32:43 | 36 | 17 | buy 0.206 TRUMP ← SOL | filled | 23s | 1 |  |
| 15:32:45 | 37 | 9 | sell 7.18 POPCAT → SOL | filled | 19s | 1 |  |
| 15:33:02 | 38 | 5 | sell 0.0036 SOL → USDC | filled | 14s | 1 |  |
| 15:32:54 | 39 | 21 | sell 0.00437 SOL → USDC | filled | 17s | 1 |  |
| 15:32:49 | 40 | 3 | sell 0.478 USDC → SOL | filled | 15s | 1 |  |
| 15:33:17 | 41 | 19 | sell 0.822 JTO → TRUMP | filled | 33s | 1 |  |
| 15:33:49 | 42 | 4 | sell 0.00237 mSOL → POPCAT | filled | 12s | 1 |  |
| 15:34:20 | 43 | 8 | sell 0.00267 JitoSOL → JTO | filled | 17s | 1 |  |
| 15:33:08 | 44 | 23 | buy 8.15 POPCAT ← SOL | filled | 21s | 1 |  |
| 15:33:05 | 45 | 9 | buy 120000 BONK ← SOL | filled | 17s | 1 |  |
| 15:33:16 | 46 | 5 | sell 0.642 USDC → SOL | filled | 12s | 1 |  |
| 15:33:50 | 47 | 22 | sell 0.908 USDT → SOL | filled | 27s | 1 |  |
| 15:33:08 | 48 | 25 | sell 0.201 RAY → mSOL | filled | 17s | 1 |  |
| 15:33:11 | 49 | 12 | sell 0.00215 mSOL → JTO | filled | 16s | 1 |  |
| 15:33:12 | 50 | 7 | buy 8.15 POPCAT ← SOL | filled | 20s | 1 |  |
| 15:33:21 | 51 | 3 | sell 0.0036 SOL → USDT | filled | 12s | 1 |  |
| 15:33:25 | 52 | 9 | buy 1.75 WIF ← SOL | filled | 14s | 1 |  |
| 15:33:26 | 53 | 21 | sell 0.0036 SOL → USDT | filled | 22s | 1 |  |
| 15:33:28 | 54 | 10 | sell 0.182 TRUMP → USDC | filled | 19s | 1 |  |
| 15:33:28 | 55 | 24 | sell 0.385 USDC → SOL | filled | 17s | 1 |  |
| 15:33:29 | 56 | 6 | buy 1.75 WIF ← SOL | filled | 18s | 1 |  |
| 15:33:36 | 57 | 12 | buy 0.225 RAY ← USDC | filled | 31s | 2 |  |
| 15:33:43 | 58 | 20 | buy 0.225 RAY ← USDC | filled | 38s | 2 |  |
| 15:33:39 | 59 | 5 | sell 0.0036 SOL → USDC | filled | 20s | 1 |  |
| 15:33:48 | 60 | 10 | buy 120000 BONK ← SOL | filled | 20s | 1 |  |
| 15:33:49 | 61 | 6 | buy 120000 BONK ← SOL | filled | 22s | 1 |  |
| 15:33:49 | 62 | 21 | sell 0.00377 SOL → USDT | filled | 17s | 1 |  |
| 15:33:51 | 63 | 23 | sell 7.4 POPCAT → SOL | filled | 17s | 1 |  |
| 15:34:20 | 64 | 20 | buy 0.00276 JitoSOL ← USDC | filled | 99s | 3 |  |
| 15:34:01 | 65 | 9 | buy 8.15 POPCAT ← SOL | filled | 15s | 1 |  |
| 15:34:07 | 66 | 2 | sell 0.191 RAY → JitoSOL | filled | 18s | 1 |  |
| 15:34:08 | 67 | 10 | buy 1.75 WIF ← SOL | filled | 17s | 1 |  |
| 15:34:17 | 68 | 22 | sell 0.0036 SOL → USDT | filled | 13s | 1 |  |
| 15:34:38 | 69 | 8 | buy 0.835 JTO ← USDC | filled | 46s | 2 |  |
| 15:34:16 | 70 | 16 | buy 120000 BONK ← SOL | filled | 21s | 1 |  |
| 15:34:19 | 71 | 7 | sell 7.74 POPCAT → SOL | filled | 29s | 1 |  |
| 15:34:20 | 72 | 17 | buy 0.206 TRUMP ← SOL | filled | 23s | 1 |  |
| 15:34:24 | 73 | 11 | sell 0.00447 SOL → USDT | filled | 16s | 1 |  |
| 15:34:25 | 74 | 5 | sell 0.0036 SOL → USDC | filled | 17s | 1 |  |
| 15:34:27 | 75 | 2 | buy 0.00256 mSOL ← USDC | filled | 82s | 3 |  |
| 15:34:31 | 76 | 21 | sell 0.00474 SOL → USDT | filled | 16s | 1 |  |
| 15:35:23 | 77 | 8 | sell 1.34 JTO → USDC | filled | 27s | 1 |  |
| 15:35:59 | 78 | 20 | buy 1.37 JUP ← USDC | filled | 37s | 2 |  |
| 15:34:38 | 79 | 24 | sell 0.00445 SOL → USDC | filled | 27s | 1 |  |
| 15:34:39 | 80 | 1 | sell 7.26 POPCAT → SOL | filled | 13s | 1 |  |
| 15:34:39 | 81 | 12 | buy 0.225 RAY ← USDC | filled | 39s | 2 |  |
| 15:34:43 | 82 | 17 | buy 0.00276 JitoSOL ← SOL | filled | 20s | 1 |  |
| 15:34:44 | 83 | 11 | sell 0.7 USDT → SOL | filled | 16s | 1 |  |
| 15:34:48 | 84 | 3 | sell 0.399 USDT → SOL | filled | 16s | 1 |  |
| 15:34:48 | 85 | 15 | sell 0.478 USDC → SOL | filled | 16s | 1 |  |
| 15:34:59 | 86 | 1 | buy 0.206 TRUMP ← SOL | filled | 18s | 1 |  |
| 15:35:51 | 87 | 8 | sell 0.66 USDC → JitoSOL | filled | 17s | 1 |  |
| 15:35:18 | 88 | 12 | buy 0.00276 JitoSOL ← USDC | filled | 73s | 2 |  |
| 15:35:03 | 89 | 17 | buy 8.15 POPCAT ← SOL | filled | 22s | 1 |  |
| 15:35:07 | 90 | 16 | sell 172000 BONK → SOL | filled | 153s | 2 |  |
| 15:35:08 | 91 | 3 | sell 0.00396 SOL → USDT | filled | 15s | 1 |  |
| 15:35:09 | 92 | 6 | sell 1.71 WIF → SOL | filled | 73s | 1 |  |
| 15:35:14 | 93 | 13 | sell 0.0036 SOL → USDC | filled | 36s | 1 |  |
| 15:35:16 | 94 | 21 | sell 1.25 USDC → SOL | filled | 14s | 1 |  |
| 15:35:19 | 95 | 4 | buy 0.237 RAY ← USDC | filled | 51s | 2 |  |
| 15:36:08 | 96 | 8 | sell 0.00351 JitoSOL → BONK | filled | 14s | 1 |  |
| 15:35:19 | 97 | 15 | sell 0.0036 SOL → USDC | filled | 39s | 1 |  |
| 15:35:25 | 98 | 17 | buy 0.00256 mSOL ← SOL | filled | 25s | 1 |  |
| 15:35:20 | 99 | 23 | buy 120000 BONK ← SOL | filled | 21s | 1 |  |
| 15:35:24 | 100 | 14 | sell 0.00267 JitoSOL → USDC | filled | 27s | 1 |  |
| 15:35:25 | 101 | 5 | sell 0.744 USDC → SOL | filled | 18s | 1 |  |
| 15:35:25 | 102 | 22 | sell 0.0036 SOL → USDC | filled | 19s | 1 |  |
| 15:35:27 | 103 | 11 | sell 0.0036 SOL → USDT | filled | 18s | 1 |  |
| 15:35:50 | 104 | 13 | sell 0.0036 SOL → USDC | filled | 20s | 1 |  |
| 15:36:22 | 105 | 8 | sell 148000 BONK → USDT | filled | 35s | 2 |  |
| 15:36:31 | 106 | 12 | sell 0.372 RAY → JUP | filled | 15s | 1 |  |
| 15:37:40 | 107 | 16 | sell 0.172 TRUMP → USDC | filled | 13s | 1 |  |
| 15:35:50 | 108 | 17 | buy 0.206 TRUMP ← SOL | filled | 23s | 1 |  |
| 15:35:41 | 109 | 9 | buy 120000 BONK ← SOL | filled | 20s | 1 |  |
| 15:35:45 | 110 | 22 | sell 0.54 USDT → SOL | filled | 20s | 1 |  |
| 15:35:47 | 111 | 24 | sell 0.0036 SOL → USDC | filled | 28s | 1 |  |
| 15:35:48 | 112 | 10 | buy 1.75 WIF ← SOL | filled | 35s | 1 |  |
| 15:36:46 | 113 | 12 | sell 0.00246 JitoSOL → mSOL | filled | 18s | 1 |  |
| 15:35:59 | 114 | 18 | sell 103000 BONK → USDC | filled | 17s | 1 |  |
| 15:37:54 | 115 | 16 | buy 8.15 POPCAT ← SOL | filled | 17s | 1 |  |
| 15:36:03 | 116 | 7 | buy 1.75 WIF ← SOL | filled | 33s | 1 |  |
| 15:36:07 | 117 | 2 | buy 1.37 JUP ← USDC | filled | 42s | 2 |  |
| 15:36:08 | 118 | 22 | sell 0.0036 SOL → USDT | filled | 14s | 1 |  |
| 15:36:13 | 119 | 9 | buy 1.75 WIF ← SOL | filled | 18s | 1 |  |
| 15:36:19 | 120 | 3 | sell 0.369 USDT → SOL | filled | 15s | 1 |  |
| 15:37:04 | 121 | 12 | buy 1.37 JUP ← USDC | filled | 39s | 2 |  |
| 15:36:28 | 122 | 6 | sell 272000 BONK → SOL | filled | 17s | 1 |  |
| 15:36:33 | 123 | 9 | sell 179000 BONK → SOL | filled | 17s | 1 |  |
| 15:36:37 | 124 | 18 | buy 0.206 TRUMP ← SOL | filled | 14s | 1 |  |
| 15:36:39 | 125 | 3 | sell 0.0036 SOL → USDT | filled | 16s | 1 |  |
| 15:36:57 | 126 | 8 | buy 0.00256 mSOL ← USDC | filled | 74s | 3 |  |
| 15:36:47 | 127 | 13 | sell 0.0036 SOL → USDT | filled | 15s | 1 |  |
| 15:36:47 | 128 | 19 | buy 1.37 JUP ← USDC | filled | 34s | 2 |  |
| 15:36:56 | 129 | 20 | sell 1.2 JUP → BONK | filled | 25s | 1 |  |
| 15:36:57 | 130 | 11 | sell 0.514 USDT → SOL | filled | 29s | 1 |  |
| 15:36:59 | 131 | 24 | sell 0.00419 SOL → USDC | filled | 25s | 1 |  |
| 15:37:05 | 132 | 25 | buy 1.37 JUP ← USDC | filled | 43s | 2 |  |
| 15:37:18 | 133 | 4 | buy 0.225 RAY ← USDC | filled | 36s | 2 |  |
| 15:37:18 | 134 | 6 | buy 1.75 WIF ← SOL | filled | 29s | 1 |  |
| 15:38:11 | 135 | 8 | sell 0.493 USDT → JitoSOL | filled | 11s | 1 |  |
| 15:37:22 | 136 | 13 | sell 0.726 USDC → SOL | filled | 19s | 1 |  |
| 15:37:26 | 137 | 11 | sell 0.0036 SOL → USDC | filled | 27s | 1 |  |
| 15:37:25 | 138 | 9 | buy 8.15 POPCAT ← SOL | filled | 21s | 1 |  |
| 15:38:11 | 139 | 16 | buy 0.206 TRUMP ← SOL | filled | 12s | 1 |  |
| 15:37:25 | 140 | 17 | buy 120000 BONK ← SOL | filled | 19s | 1 |  |
| 15:37:28 | 141 | 2 | buy 0.892 JTO ← USDC | filled | 38s | 2 |  |

Scenario orders: 174 (141 main, 33 acquire). Cleanup placed 100 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 15:38:25 | 1 | TRUMP → SOL (native) | Executed | `0x2be2897b…` [🐞](https://debug.barn.cow.fi/order/0x2be2897b4b838276cab3a137b95c397eb957fd575bf6809ff868bc135d38c06f) |
| 15:38:26 | 2 | JUP → SOL (native) | Executed | `0x01996a1a…` [🐞](https://debug.barn.cow.fi/order/0x01996a1aaa19d9c2716100aee7d08aa17e9c775a17cd4e2c6c19b72d460176f8) |
| 15:38:27 | 3 | USDC → SOL (native) | Executed | `0x6d2f8cac…` [🐞](https://debug.barn.cow.fi/order/0x6d2f8cacc7c4d6e01633050c16a06d5428cb7201a702c8f869264b69eefa3bf2) |
| 15:38:28 | 4 | mSOL → SOL (native) | Expired without a fill | `0x52deba0b…` [🐞](https://debug.barn.cow.fi/order/0x52deba0b83995347c9bf149dbe9e64485f50467e9389883395b3a182af84be5c) |
| 15:38:29 | 5 | USDC → SOL (native) | Executed | `0x1fd59592…` [🐞](https://debug.barn.cow.fi/order/0x1fd595920626961250ea2d206b4fcf8e0b0d0f3b9331078ca570047ff045e668) |
| 15:38:37 | 3 | USDT → SOL (native) | Executed | `0x0f6e7f46…` [🐞](https://debug.barn.cow.fi/order/0x0f6e7f4606762d957d4f75f5b3431d5c74f8a9ec44e5323ee400ddfda5d5c7f1) |
| 15:38:38 | 2 | JTO → SOL (native) | Executed | `0x57d8ce37…` [🐞](https://debug.barn.cow.fi/order/0x57d8ce3754b3d810d76718ccfb4c5776dc7f4e3e9e0a08f7f019047388068255) |
| 15:38:49 | 1 | POPCAT → SOL (native) | Expired without a fill | `0xf22461ba…` [🐞](https://debug.barn.cow.fi/order/0xf22461bad6c16638cd99cbed8c8a9efc23b567551cdb01178cd3b55c901a0989) |
| 15:38:50 | 2 | mSOL → SOL (native) | Executed | `0xd7b47201…` [🐞](https://debug.barn.cow.fi/order/0xd7b47201a450ba197252d2b567a9b914ed62f61fa23c8e3a77accc010133ea6e) |
| 15:39:00 | 2 | RAY → SOL (native) | Executed | `0x71798769…` [🐞](https://debug.barn.cow.fi/order/0x71798769ece870cedd97ddb9196e19d638c3fc7ddf7f06b8ce2e1958ff1c1ac6) |
| 15:39:07 | 6 | Bonk → SOL (native) | Executed | `0x55ccca39…` [🐞](https://debug.barn.cow.fi/order/0x55ccca399c46cc97bf32bbd97fdee153f7d7a9d816ac75141e9840b38d88b807) |
| 15:39:08 | 2 | USDC → SOL (native) | Expired without a fill | `0x01c78f34…` [🐞](https://debug.barn.cow.fi/order/0x01c78f3483a0fbf2cad8da9b3aceee96dcf21a398a1d6908a985fbcdcdd24a39) |
| 15:39:12 | 6 | $WIF → SOL (native) | Executed | `0xf40235e8…` [🐞](https://debug.barn.cow.fi/order/0xf40235e8142b13155da53b7bcd053a43b2c84059057cb21b4f8780a47e0b94a8) |
| 15:39:21 | 6 | USDC → SOL (native) | Expired without a fill | `0x4fe32de9…` [🐞](https://debug.barn.cow.fi/order/0x4fe32de992c4dc1016722db71f4fdfa197fad5d03bd0cbf91c03a90646177363) |
| 15:39:27 | 7 | POPCAT → SOL (native) | Expired without a fill | `0x0da33a3b…` [🐞](https://debug.barn.cow.fi/order/0x0da33a3bcc321aff3cf0ad4999984fd028acc0f5e5328f2e231491bc2faf0ea3) |
| 15:40:39 | 4 | mSOL → SOL (native) | Expired without a fill | `0x86b7b9bd…` [🐞](https://debug.barn.cow.fi/order/0x86b7b9bd26e23ae2f86f501d00090193955e2af80186ca751d43fcfc7a64711f) |
| 15:41:01 | 1 | POPCAT → SOL (native) | Expired without a fill | `0xd3c2238e…` [🐞](https://debug.barn.cow.fi/order/0xd3c2238e60fab9954c81e3dcf6f2832dabf451ac0b5fee7dbc79b769f4fd0df8) |
| 15:41:19 | 2 | USDC → SOL (native) | Expired without a fill | `0x48ed0c0d…` [🐞](https://debug.barn.cow.fi/order/0x48ed0c0de7e8b2bb8c9e875f41277e79e30e58b90386cf321751e3d29a996142) |
| 15:41:32 | 6 | USDC → SOL (native) | Expired without a fill | `0xaa725918…` [🐞](https://debug.barn.cow.fi/order/0xaa725918922e86339b200fcf66b9d8e1f631f2195afd21adf2a96828ff685c61) |
| 15:41:38 | 7 | POPCAT → SOL (native) | Expired without a fill | `0xfea7bce4…` [🐞](https://debug.barn.cow.fi/order/0xfea7bce40ce86e7d463f441024adc483631a89f4b8525fa3b766be99b3f60657) |
| 15:42:50 | 4 | RAY → SOL (native) | Executed | `0xdaefaff1…` [🐞](https://debug.barn.cow.fi/order/0xdaefaff12942a88bb188f9374eda87c4dd02e3c922d0eee8c9ac33cd9af2c506) |
| 15:43:02 | 4 | POPCAT → SOL (native) | Executed | `0x47648039…` [🐞](https://debug.barn.cow.fi/order/0x47648039ecb800c353bb0cdd7b14a68bc6d99cdd9c4f86011b09996760de9c02) |
| 15:43:12 | 4 | USDC → SOL (native) | Expired without a fill | `0xe79177b6…` [🐞](https://debug.barn.cow.fi/order/0xe79177b6aee37db5c5934a1d0ae2c8b91ba17132a401b33a6917a6a79470e954) |
| 15:43:31 | 2 | JitoSOL → SOL (native) | Executed | `0xe368f24e…` [🐞](https://debug.barn.cow.fi/order/0xe368f24e2e0d9b55fd61ddeb4da4322acf7266f7755ce527070abd158de06086) |
| 15:43:32 | 8 | JTO → SOL (native) | Executed | `0x087ea264…` [🐞](https://debug.barn.cow.fi/order/0x087ea26433c4fe4e0ca2974b157c7c8b7d6dcd68384f386b1766e0ca4269cbcd) |
| 15:43:52 | 7 | Bonk → SOL (native) | Executed | `0x1b418809…` [🐞](https://debug.barn.cow.fi/order/0x1b418809115ac6b06e41fcd529f300d82ac095ac798ebe44a3bc55d0734aeff6) |
| 15:43:58 | 7 | $WIF → SOL (native) | Executed | `0x08183457…` [🐞](https://debug.barn.cow.fi/order/0x08183457419fde6e4270997351ddd9768927caa9cf1436136de955e16e52ef37) |
| 15:44:37 | 8 | mSOL → SOL (native) | Executed | `0xd8ac15d9…` [🐞](https://debug.barn.cow.fi/order/0xd8ac15d994c182e6a96d06753e8f0732e5d7a3c6cf017ca251c4024b056fd563) |
| 15:44:42 | 9 | POPCAT → SOL (native) | Executed | `0x89da76ca…` [🐞](https://debug.barn.cow.fi/order/0x89da76ca3a2ad90cdbf779e3923ad1cb57dd97a5675246dfe18b0bbea6deb726) |
| 15:44:44 | 8 | USDC → SOL (native) | Expired without a fill | `0x05f3b45f…` [🐞](https://debug.barn.cow.fi/order/0x05f3b45f880b6e804b828bf3fb42017d7c9a1cf0e7fa3704acfaa0a42e6df6f6) |
| 15:44:53 | 9 | Bonk → SOL (native) | Executed | `0x9f9056fa…` [🐞](https://debug.barn.cow.fi/order/0x9f9056fa7cf74bee9e2a6003853d66895ac9859085c01a6f716a86a137b6c39f) |
| 15:45:01 | 9 | $WIF → SOL (native) | Executed | `0xb50aa88a…` [🐞](https://debug.barn.cow.fi/order/0xb50aa88a9cb9c0df27886ea9bd48a098c564f131adab81cfe01bfaaa94771e68) |
| 15:45:13 | 10 | TRUMP → SOL (native) | Expired without a fill | `0xc681b41f…` [🐞](https://debug.barn.cow.fi/order/0xc681b41f99d364bf42cc1c09f6ca1ae92e96679d3d133c825d4d46e542a4000b) |
| 15:45:23 | 4 | USDC → SOL (native) | Expired without a fill | `0x09c2b3a9…` [🐞](https://debug.barn.cow.fi/order/0x09c2b3a9f92efadecb359af0ac792cd8c87d2cee0e5a68ad913bf46c65e523af) |
| 15:45:34 | 11 | USDC → SOL (native) | Executed | `0x23340af6…` [🐞](https://debug.barn.cow.fi/order/0x23340af6661ba9698e151d2a1434371dd2a70bc434592cec6c15c5244fbe10a2) |
| 15:45:41 | 12 | JUP → SOL (native) | Executed | `0xf51a25a6…` [🐞](https://debug.barn.cow.fi/order/0xf51a25a6f4108b07c5bed163ca38c5235248606d50c9e94cdb94cfb3b2c7607e) |
| 15:46:06 | 11 | USDT → SOL (native) | Executed | `0x78160747…` [🐞](https://debug.barn.cow.fi/order/0x781607472b1c282552b353b346ff87c28c9e2a3d5379c23b8f6bdf1e1c88d41a) |
| 15:46:09 | 12 | JTO → SOL (native) | Executed | `0x1b2fa11b…` [🐞](https://debug.barn.cow.fi/order/0x1b2fa11befd8e46ad5a88844eecd42d29ae660233cc78972d7aceb0df81e7b1d) |
| 15:46:18 | 12 | mSOL → SOL (native) | Executed | `0x15bbf606…` [🐞](https://debug.barn.cow.fi/order/0x15bbf60624de763c11e08b4ff6b8c4ad549a638b33841ac151d1940897b8efd9) |
| 15:46:30 | 12 | RAY → SOL (native) | Executed | `0xaba7edd2…` [🐞](https://debug.barn.cow.fi/order/0xaba7edd2d4e53f1c7ba808aebf00294f81cd5a44df3b636e0406f940093884cd) |
| 15:46:32 | 13 | USDC → SOL (native) | Executed | `0x979e4295…` [🐞](https://debug.barn.cow.fi/order/0x979e4295dbfa280b0942d451ac14ab3768b02c426942919991a9e64933ef5ab7) |
| 15:46:39 | 12 | USDC → SOL (native) | Expired without a fill | `0x41be738e…` [🐞](https://debug.barn.cow.fi/order/0x41be738e93a57fe985f24259a7f06aff78c413636bd08044177d1fc3608428ad) |
| 15:46:40 | 13 | USDT → SOL (native) | Executed | `0x172adea2…` [🐞](https://debug.barn.cow.fi/order/0x172adea2e6cdcd246d820057dc9aefec95c95e606ab8f5d51e63641bb0999611) |
| 15:46:54 | 8 | USDC → SOL (native) | Expired without a fill | `0x9f943ec4…` [🐞](https://debug.barn.cow.fi/order/0x9f943ec4f4b984c6d181f29767d9aca9285b9fae93695bf43a9b8840b2adc693) |
| 15:47:01 | 14 | USDC → SOL (native) | Executed | `0xcfc32e39…` [🐞](https://debug.barn.cow.fi/order/0xcfc32e390ba65ba15e6a0700eb8bbde1f7febe98e6751c686db9bb4d18606f36) |
| 15:47:11 | 14 | JitoSOL → SOL (native) | Expired without a fill | `0x3ccbd2e0…` [🐞](https://debug.barn.cow.fi/order/0x3ccbd2e0742ce9cbc9e3930e8306b6e52666450c547f2c180645895449df3ebc) |
| 15:47:23 | 10 | TRUMP → SOL (native) | Expired without a fill | `0x1d0afe3a…` [🐞](https://debug.barn.cow.fi/order/0x1d0afe3a9894d188283455c109a40e00d132b969a2c58fa07a5a2bd4649de54f) |
| 15:47:59 | 15 | USDC → SOL (native) | Executed | `0x52a848a4…` [🐞](https://debug.barn.cow.fi/order/0x52a848a46dd964e59c27043bfccb0f094d4a72accac14f4508abb1cba18ad4d7) |
| 15:48:17 | 16 | TRUMP → SOL (native) | Executed | `0x107134cc…` [🐞](https://debug.barn.cow.fi/order/0x107134cc6a6292acebb743af317ef9b44415cffcc9b0704e95b95cc9c6b97ff1) |
| 15:48:21 | 16 | POPCAT → SOL (native) | Executed | `0x34cff827…` [🐞](https://debug.barn.cow.fi/order/0x34cff827d907d91c87ea253db327da30270b0cadc7bd0ebeacfd1b010cf671ba) |
| 15:48:27 | 16 | Bonk → SOL (native) | Executed | `0xe2dec1e1…` [🐞](https://debug.barn.cow.fi/order/0xe2dec1e1de7f08439525fa865ddbd66deb773d41157e805e2bd1d4b6f405fa25) |
| 15:48:50 | 12 | USDC → SOL (native) | Expired without a fill | `0xff596c86…` [🐞](https://debug.barn.cow.fi/order/0xff596c866adcc645302bb7d51192da5f08ecc33be953504a9aabdc2991f7c7a4) |
| 15:49:06 | 8 | USDT → SOL (native) | Expired without a fill | `0xa58891d6…` [🐞](https://debug.barn.cow.fi/order/0xa58891d61798e99e87c0d16b0e2d1796e41eaae352c69ec6a7dadff025dbcb00) |
| 15:49:23 | 14 | JitoSOL → SOL (native) | Expired without a fill | `0x366fb372…` [🐞](https://debug.barn.cow.fi/order/0x366fb372df5d72c493434a3761af35f38a867ebfbbedbc732b92d4802db98bf4) |
| 15:49:29 | 16 | USDC → SOL (native) | Executed | `0xfe3ffee1…` [🐞](https://debug.barn.cow.fi/order/0xfe3ffee1f02515ef03121927bc25f39a4e01bc94411315f5cdf99bbf8ba98ede) |
| 15:49:36 | 10 | Bonk → SOL (native) | Executed | `0xfd10d8d1…` [🐞](https://debug.barn.cow.fi/order/0xfd10d8d15d90da819ac3ec1d1c9e5ec344d77750a511cba7fbe3efc8f7e5fee1) |
| 15:49:51 | 10 | $WIF → SOL (native) | Executed | `0x16440de8…` [🐞](https://debug.barn.cow.fi/order/0x16440de87752ee0e78cb571ede5ffa9bc1ecaadd16c1f56e3ebb693b61bc2773) |
| 15:49:53 | 17 | mSOL → SOL (native) | Executed | `0xd19a17ca…` [🐞](https://debug.barn.cow.fi/order/0xd19a17cac363e3a07ae271b0c08163c1c3ba4f68dc19f904854380395fc06cbd) |
| 15:50:05 | 17 | TRUMP → SOL (native) | Executed | `0xb6d12459…` [🐞](https://debug.barn.cow.fi/order/0xb6d124597a912d8a69f23260f5a33d0021a4328fc1f10e19762e84195c0c3f68) |
| 15:50:06 | 10 | USDC → SOL (native) | Executed | `0x9fb8d2b9…` [🐞](https://debug.barn.cow.fi/order/0x9fb8d2b98a65174b5aeebc5ca75619188bb7746989469861091a71a543afef67) |
| 15:50:15 | 17 | POPCAT → SOL (native) | Executed | `0x1b470d90…` [🐞](https://debug.barn.cow.fi/order/0x1b470d9067dc1df4b137a4a007e9043507677fa5d8d159f651a8684a431cc19c) |
| 15:50:30 | 17 | Bonk → SOL (native) | Executed | `0xda61ce3b…` [🐞](https://debug.barn.cow.fi/order/0xda61ce3bc4a95422ef36e1194694c1dbe1fe98c68a3c41c279ed3d36ad2e1975) |
| 15:50:32 | 18 | TRUMP → SOL (native) | Executed | `0x8bec4ffc…` [🐞](https://debug.barn.cow.fi/order/0x8bec4ffca008ee7a66bcb23f11608410d8dbaef3edf0c54f4eae8bdfccb67c31) |
| 15:50:41 | 18 | Bonk → SOL (native) | Expired without a fill | `0x3a24b53d…` [🐞](https://debug.barn.cow.fi/order/0x3a24b53d3e26a83dbfbca7f76542aee10976e8352b55af517219898326529f2f) |
| 15:50:46 | 17 | JitoSOL → SOL (native) | Executed | `0xffc9c787…` [🐞](https://debug.barn.cow.fi/order/0xffc9c787bedae28f552d89dc7219cd9d7b751f58373504768f61ea5645670917) |
| 15:51:01 | 12 | JitoSOL → SOL (native) | Expired without a fill | `0x567b91da…` [🐞](https://debug.barn.cow.fi/order/0x567b91da4236c4bf9c2ed41736486dd95b08d103669a4e9c91a2d71f306b7a1c) |
| 15:51:20 | 8 | USDT → SOL (native) | Expired without a fill | `0x14c3a53e…` [🐞](https://debug.barn.cow.fi/order/0x14c3a53ec8f2c7b1eda9666e5abc34968296ee15530af3a8ca8855a70b1425ed) |
| 15:51:27 | 19 | JUP → SOL (native) | Executed | `0x45de6cb5…` [🐞](https://debug.barn.cow.fi/order/0x45de6cb5736373ca4799bb2922686cfb1e24c03dd58f4514736403c06c72247b) |
| 15:51:37 | 19 | JTO → SOL (native) | Expired without a fill | `0x67c4569b…` [🐞](https://debug.barn.cow.fi/order/0x67c4569bb8c2787458d6ab615f14c8659c45e9492195838e54bfa6b17aeab463) |
| 15:51:48 | 20 | JUP → SOL (native) | Executed | `0x0139d0c5…` [🐞](https://debug.barn.cow.fi/order/0x0139d0c503a6392fcea487285dc41ea10c79c5fcbfa38dd9e5a98b268f39005e) |
| 15:52:08 | 20 | RAY → SOL (native) | Executed | `0x5adcc69c…` [🐞](https://debug.barn.cow.fi/order/0x5adcc69cf1dfd7463b2531f27f595e4c973227e55af849162df41f7fe7b43ad4) |
| 15:52:20 | 20 | Bonk → SOL (native) | Executed | `0x5eeb400c…` [🐞](https://debug.barn.cow.fi/order/0x5eeb400cd4c9838def0d774aad90a497a2357466a9a7fc22f9df36dd8de9b125) |
| 15:52:36 | 20 | USDC → SOL (native) | Expired without a fill | `0x1863f812…` [🐞](https://debug.barn.cow.fi/order/0x1863f8122947186fffca3fe8d1bf3eaf3979f20df16b0e5db8d8a50748485e9f) |
| 15:52:52 | 18 | Bonk → SOL (native) | Expired without a fill | `0x2ac6bb28…` [🐞](https://debug.barn.cow.fi/order/0x2ac6bb28409b225f8d2d2b91bada7c0aa298ec61a598242b4f9972592edc8f94) |
| 15:53:14 | 12 | JitoSOL → SOL (native) | Expired without a fill | `0x8d0a1963…` [🐞](https://debug.barn.cow.fi/order/0x8d0a1963825bf509991157c6e5555046f0d3a787d9a08678937629fd1e36eaf9) |
| 15:53:29 | 8 | JitoSOL → SOL (native) | Executed | `0x5ed289aa…` [🐞](https://debug.barn.cow.fi/order/0x5ed289aabedcd576b8ae1fce79fbae4d97970a8e9df31af5bf01fa0d336fb93d) |
| 15:53:51 | 19 | JTO → SOL (native) | Expired without a fill | `0x777b754e…` [🐞](https://debug.barn.cow.fi/order/0x777b754e541a429bf6cc59d36e5748f50649eec14af8e48db7f22b4a5a4d5ad3) |
| 15:54:12 | 21 | USDC → SOL (native) | Executed | `0x4b415be8…` [🐞](https://debug.barn.cow.fi/order/0x4b415be89e8c4464939e876a7378736a93dece4e8fb3533442866ea9a45277d9) |
| 15:54:21 | 21 | USDT → SOL (native) | Executed | `0x0cb1ad28…` [🐞](https://debug.barn.cow.fi/order/0x0cb1ad286d22ef1506f74ce5e84de59be0247cf72e1fe8fcdbe49ed88b1dfc1a) |
| 15:54:40 | 22 | USDC → SOL (native) | Executed | `0xa4e60384…` [🐞](https://debug.barn.cow.fi/order/0xa4e603841d2229ac68ee570ae7daae7f629d642ed37de8308988664723b57e38) |
| 15:54:51 | 20 | USDC → SOL (native) | Expired without a fill | `0x4d98733b…` [🐞](https://debug.barn.cow.fi/order/0x4d98733be3258c45491552d8e04cc6891f4fac7bc0a3336aac7829f7db0ce326) |
| 15:54:52 | 22 | USDT → SOL (native) | Executed | `0xad27b0e0…` [🐞](https://debug.barn.cow.fi/order/0xad27b0e092aeb7184653051caf61ad24125b20ea021500340e131e6fd2af902d) |
| 15:55:03 | 18 | USDC → SOL (native) | Executed | `0x2068223b…` [🐞](https://debug.barn.cow.fi/order/0x2068223b77345729161fdf4f7aaa27fcd191f53317d6db7b17b6e42ce52c0b88) |
| 15:55:11 | 23 | TRUMP → SOL (native) | Expired without a fill | `0xe044c8c5…` [🐞](https://debug.barn.cow.fi/order/0xe044c8c55c2ffdd51194db1d9d0cd5ce83aefcbfe798cc82d3ccf755eca30a99) |
| 15:55:28 | 24 | USDC → SOL (native) | Executed | `0x18a30a2f…` [🐞](https://debug.barn.cow.fi/order/0x18a30a2fc1da192868e8b3d91012ed048adae95858cb3821df0393837d4bf8ab) |
| 15:56:02 | 19 | RAY → SOL (native) | Executed | `0x19ba9a5a…` [🐞](https://debug.barn.cow.fi/order/0x19ba9a5a873e730597e9d5b5f2e9f962a93d5a426559bdb0a510ab47e15ee6ad) |
| 15:56:11 | 19 | TRUMP → SOL (native) | Executed | `0xdc09fd77…` [🐞](https://debug.barn.cow.fi/order/0xdc09fd77e0ed5064e7cd37aa1c30f2924b5cafdc36da3e686239214ebe9f2caa) |
| 15:56:17 | 19 | USDC → SOL (native) | Expired without a fill | `0x18940d2e…` [🐞](https://debug.barn.cow.fi/order/0x18940d2ee042d506c4a1ada597a5f4d8dc42083f8d3b6ae3654659f9a797d3d2) |
| 15:56:17 | 25 | JUP → SOL (native) | Executed | `0xaa96279e…` [🐞](https://debug.barn.cow.fi/order/0xaa96279efa76183e17d2b4f0781724ccd54769b98f0445e6b7a184c4bfd4251c) |
| 15:57:04 | 20 | JitoSOL → SOL (native) | Executed | `0xaca3630e…` [🐞](https://debug.barn.cow.fi/order/0xaca3630e7914e3efbdce548cbdc3955d61fd28e194354c1c284714ac783527ba) |
| 15:57:30 | 23 | TRUMP → SOL (native) | Expired without a fill | `0xfab78212…` [🐞](https://debug.barn.cow.fi/order/0xfab78212e79a2e1ed5c7d071f49afde50ffc9676dc6228c3370a17754f95cfc9) |
| 15:57:31 | 25 | JTO → SOL (native) | Expired without a fill | `0x3754b18b…` [🐞](https://debug.barn.cow.fi/order/0x3754b18b39815d6855cb5563b82b63acd37787c6bc6b67c2f4b943ab385bf463) |
| 15:58:30 | 19 | USDC → SOL (native) | Expired without a fill | `0x17c9b18c…` [🐞](https://debug.barn.cow.fi/order/0x17c9b18c944905b35632167091af30dcbf522afe1215fb86b1e7b669bda495b1) |
| 15:59:31 | 25 | JTO → SOL (native) | Expired without a fill | `0xf7fdf657…` [🐞](https://debug.barn.cow.fi/order/0xf7fdf657a4078eb8b5e63b9a10f96c6076c8bba245a3bd9eef02a39faa04a3fa) |
| 15:59:35 | 23 | POPCAT → SOL (native) | Executed | `0xb9808fbb…` [🐞](https://debug.barn.cow.fi/order/0xb9808fbb6e493d9ec88844995d20c43793ee956e61f03b1624bca59361bd0ba9) |
| 15:59:47 | 23 | Bonk → SOL (native) | Executed | `0x55d71c3f…` [🐞](https://debug.barn.cow.fi/order/0x55d71c3f6cdd1af6113f11ad7c9702a0afc4c371fa67865900c11255c6674689) |
| 16:01:42 | 25 | mSOL → SOL (native) | Executed | `0x0ee3d5ac…` [🐞](https://debug.barn.cow.fi/order/0x0ee3d5ac33ff4df30e98f5a9704733687d41939f6c4f695e6aaa0f6dc487bbe9) |
| 16:01:52 | 25 | RAY → SOL (native) | Expired without a fill | `0x120cc4b5…` [🐞](https://debug.barn.cow.fi/order/0x120cc4b593dbaf1edd32aaaee72e19fa51b1341b598f82801cee403acc5d55b0) |
| 16:04:03 | 25 | RAY → SOL (native) | Executed | `0xe1ebd70e…` [🐞](https://debug.barn.cow.fi/order/0xe1ebd70edd9c2e794abc5084970ea2da9b979243b79c30ff94c0144693e56319) |
| 16:05:45 | 25 | USDC → SOL (native) | Executed | `0x6cc343b6…` [🐞](https://debug.barn.cow.fi/order/0x6cc343b6e3040b7fbf66ae9f9da43f424f78bf61d838ef0a9da852954e3d0ee3) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 164 | 94.3% |
| expired: never created on-chain (winner found, creation blockhash expired) | 8 | 4.6% |
| expired | 2 | 1.1% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 11s | 15s | 21s | 109s |

## Jupiter rate limiting

98 of 420 Jupiter quote attempts (23.3%) were rejected with `rate limited`. 0 orders never executed: Jupiter's quotes for them were rate limited, it never found a solution, and no other solver bid.

Orders using the most Jupiter quote attempts:

| Order | In this report | Attempts | Rate limited | Solved |
|---|---|---|---|---|
| `0x315010d2…` [🐞](https://debug.barn.cow.fi/order/0x315010d28493a0984b0f658c42f483ceabf5fa68ffc957ca0aa72fc3bf2659b0) | yes | 22 | 5 | 0 |
| `0xc387eed9…` [🐞](https://debug.barn.cow.fi/order/0xc387eed90b78359b3b5584183ea1d742d13786667930e72ccfe5dcf77b8c36e2) | yes | 18 | 6 | 12 |
| `0xc7eea697…` [🐞](https://debug.barn.cow.fi/order/0xc7eea6979bd2d6420374adf23a2605d391f7d706c570d7cfda9333e701c23bd6) | yes | 11 | 6 | 5 |
| `0x3a49626a…` [🐞](https://debug.barn.cow.fi/order/0x3a49626a82498c51c539ad1a01cf8ccbaf2744aa1554a107a9a3029e1c16e51d) | yes | 7 | 5 | 2 |
| `0x9ff48e4c…` [🐞](https://debug.barn.cow.fi/order/0x9ff48e4c32e6a409fb1c37d707deda31b489b4a9dc68af936d33db0875d925b4) | yes | 7 | 3 | 4 |
| `0xdb494475…` [🐞](https://debug.barn.cow.fi/order/0xdb4944753083f14dba38ee72529aca0db609f1e5aa2229fd0518ff322e8cdc6a) | yes | 7 | 6 | 1 |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 99 | 60.4% | 99 | 89,961 | 11s |
| 8E74…2mpx | 59 | 36.0% | 59 | 165,640 | 11s |
| rosato | 5 | 3.0% | 5 | 183,081 | 11s |
| 6P1c…bsGJ | 1 | 0.6% | 1 | 61,049 | 9s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 301 | 157 | 141 | 89.8% | 14 | 2 | 3 | 0 |
| grafiks | 334 | 113 | 80 | 70.8% | 26 | 14 | 3 | 1 |
| rosato | 121 | 5 | 5 | 100.0% | 0 | 0 | 10 | 16 |
| helixbox | 74 | 1 | 1 | 100.0% | 0 | 0 | 3 | 0 |
| fractal | 3 | 0 | 0 | – | 0 | 0 | 137 | 0 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 145 | 1 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 146 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 26 |
| jupiter-solve: SimulationFailed | 13 |
| jupiter-solve: FailedToCreate | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 1
- Orders filtered for `unfunded_sell_token_account`: 402 times
- Orders filtered for `unpayable_native_buy`: 316 times
- Orders filtered for `in_flight`: 118 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| buy | 96 | 88 | 91.7% |
| sell | 78 | 76 | 97.4% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 51 | 42 | 82.4% |
| wSOL → USDT | 17 | 17 | 100.0% |
| wSOL → Bonk | 13 | 13 | 100.0% |
| wSOL → TRUMP | 10 | 10 | 100.0% |
| wSOL → POPCAT | 8 | 8 | 100.0% |
| USDC → RAY | 7 | 7 | 100.0% |
| USDC → SOL (native) | 7 | 7 | 100.0% |
| wSOL → $WIF | 7 | 7 | 100.0% |
| USDT → SOL (native) | 6 | 6 | 100.0% |
| USDC → JitoSOL | 5 | 5 | 100.0% |
| USDC → JUP | 5 | 5 | 100.0% |
| USDC → JTO | 4 | 4 | 100.0% |
| POPCAT → SOL (native) | 4 | 4 | 100.0% |
| USDC → mSOL | 4 | 4 | 100.0% |
| Bonk → SOL (native) | 4 | 3 | 75.0% |
| TRUMP → USDC | 2 | 2 | 100.0% |
| JTO → RAY | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| RAY → mSOL | 1 | 1 | 100.0% |
| mSOL → JTO | 1 | 1 | 100.0% |
| JTO → TRUMP | 1 | 1 | 100.0% |
| mSOL → POPCAT | 1 | 1 | 100.0% |
| RAY → JitoSOL | 1 | 1 | 100.0% |
| JitoSOL → JTO | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| $WIF → SOL (native) | 1 | 1 | 100.0% |
| JTO → USDC | 1 | 1 | 100.0% |
| JitoSOL → USDC | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| Bonk → USDC | 1 | 1 | 100.0% |
| JitoSOL → Bonk | 1 | 1 | 100.0% |
| RAY → JUP | 1 | 1 | 100.0% |
| Bonk → USDT | 1 | 1 | 100.0% |
| JitoSOL → mSOL | 1 | 1 | 100.0% |
| JUP → Bonk | 1 | 1 | 100.0% |
| USDT → JitoSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 16 | 13 | 81.2% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 13 | 13 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 11 | 9 | 81.8% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 10 | 7 | 70.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 9 | 9 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 8 | 8 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 8 | 8 | 100.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 8 | 7 | 87.5% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 8 | 8 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 7 | 7 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 7 | 7 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 7 | 7 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 7 | 7 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 6 | 6 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 6 | 6 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 6 | 6 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 5 | 5 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 5 | 5 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 5 | 5 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 5 | 5 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 4 | 4 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 4 | 3 | 75.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 3 | 3 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 3 | 3 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 3 | 3 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 8 |
| Expired without a fill | 2 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 15:32:10 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x3a49626a…` [🐞](https://debug.barn.cow.fi/order/0x3a49626a82498c51c539ad1a01cf8ccbaf2744aa1554a107a9a3029e1c16e51d) |
| 15:32:12 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x9ff48e4c…` [🐞](https://debug.barn.cow.fi/order/0x9ff48e4c32e6a409fb1c37d707deda31b489b4a9dc68af936d33db0875d925b4) |
| 15:32:13 | wSOL → USDC | sell | Expired without a fill | `0xf24bcee6…` [🐞](https://debug.barn.cow.fi/order/0xf24bcee65b30453ebbb3a21c8cde9cf12a696b8d1ae56c8e6022ebd969c3e932) |
| 15:32:25 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xdb494475…` [🐞](https://debug.barn.cow.fi/order/0xdb4944753083f14dba38ee72529aca0db609f1e5aa2229fd0518ff322e8cdc6a) |
| 15:32:59 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xacfd8089…` [🐞](https://debug.barn.cow.fi/order/0xacfd80890623d1665a717bb722e0ff28061a88c0b82ba35f7e3b47f8780828ae) |
| 15:33:03 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x652d4a72…` [🐞](https://debug.barn.cow.fi/order/0x652d4a72500f0de18d7a707cef3f65ed1f23987e26debc9826fcdd868e9718cb) |
| 15:34:30 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x18ac091f…` [🐞](https://debug.barn.cow.fi/order/0x18ac091f898d3ee80de0da07b885d73e2084dacad3d91f3473a86b5ab3e4c5d1) |
| 15:34:33 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x000aa806…` [🐞](https://debug.barn.cow.fi/order/0x000aa806b0822abbcb98fc25f37bda170d61631d6e7622d2dc16c6680bcd9786) |
| 15:35:11 | Bonk → SOL (native) | sell | Expired without a fill | `0x315010d2…` [🐞](https://debug.barn.cow.fi/order/0x315010d28493a0984b0f658c42f483ceabf5fa68ffc957ca0aa72fc3bf2659b0) |
| 15:37:05 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x538e410c…` [🐞](https://debug.barn.cow.fi/order/0x538e410c2a4680a564663245787bd4cf87bd7cdec8f00887e562c6f322330a3d) |
