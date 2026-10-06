# Solana QoS report: 2026-10-05-21-06-stress-25x6

Barn, orders created between `2026-10-05T21:07:09.228Z` and `2026-10-05T21:31:12.032Z`. Data fetched 2026-10-05T21:37:57+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 165 |
| Orders executed | **164** (99.4%) |
| Sponsored orders never created on-chain | 1 (0.6%) |
| Traders | 25 |
| Settlement txs | 164 |

## Scenario

136 of 141 scenario rows completed. 0 retries, 5 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 21:07:10 | 1 | 22 | sell 0.00428 SOL → USDT | filled | 7s | 1 |  |
| 21:07:19 | 2 | 7 | buy 120000 BONK ← SOL | filled | 7s | 1 |  |
| 21:07:20 | 3 | 4 | buy 0.00256 mSOL ← USDC | filled | 19s | 2 |  |
| 21:07:20 | 4 | 21 | sell 0.0036 SOL → USDC | filled | 7s | 1 |  |
| 21:07:24 | 5 | 19 | buy 0.225 RAY ← USDC | filled | 17s | 2 |  |
| 21:07:29 | 6 | 24 | sell 0.0036 SOL → USDC | filled | 13s | 1 |  |
| 21:07:30 | 7 | 6 | buy 120000 BONK ← SOL | filled | 7s | 1 |  |
| 21:07:31 | 8 | 10 | buy 0.206 TRUMP ← SOL | filled | 4s | 1 |  |
| 21:07:32 | 9 | 14 | buy 0.00276 JitoSOL ← USDC | failed | 65s | 1 | acquire USDC timeout |
| 21:07:34 | 10 | 23 | buy 0.206 TRUMP ← SOL | filled | 7s | 1 |  |
| 21:07:35 | 11 | 9 | buy 8.15 POPCAT ← SOL | filled | 6s | 1 |  |
| 21:07:37 | 12 | 25 | buy 0.835 JTO ← USDC | filled | 15s | 2 |  |
| 21:07:39 | 13 | 8 | buy 1.37 JUP ← USDC | filled | 26s | 2 |  |
| 21:07:40 | 14 | 21 | sell 0.0036 SOL → USDC | failed | 45s | 1 | main expired |
| 21:07:41 | 15 | 1 | buy 8.15 POPCAT ← SOL | filled | 4s | 1 |  |
| 21:07:42 | 16 | 18 | buy 120000 BONK ← SOL | filled | 4s | 1 |  |
| 21:07:42 | 17 | 20 | buy 0.00256 mSOL ← USDC | filled | 45s | 2 |  |
| 21:07:44 | 18 | 19 | buy 0.835 JTO ← USDC | filled | 26s | 2 |  |
| 21:07:47 | 19 | 15 | sell 0.00492 SOL → USDC | filled | 7s | 1 |  |
| 21:07:50 | 20 | 22 | sell 0.0036 SOL → USDT | filled | 7s | 1 |  |
| 21:07:51 | 21 | 16 | buy 120000 BONK ← SOL | filled | 7s | 1 |  |
| 21:07:54 | 22 | 17 | buy 0.206 TRUMP ← SOL | filled | 7s | 1 |  |
| 21:07:55 | 23 | 2 | buy 0.225 RAY ← USDC | filled | 11s | 2 |  |
| 21:08:00 | 24 | 12 | buy 0.00256 mSOL ← USDC | filled | 20s | 2 |  |
| 21:08:01 | 25 | 6 | buy 120000 BONK ← SOL | filled | 4s | 1 |  |
| 21:08:02 | 26 | 13 | sell 0.00428 SOL → USDT | filled | 4s | 1 |  |
| 21:08:05 | 27 | 5 | sell 0.0036 SOL → USDC | filled | 19s | 1 |  |
| 21:08:05 | 28 | 11 | sell 0.0036 SOL → USDT | filled | 6s | 1 |  |
| 21:08:24 | 29 | 21 | sell 0.0036 SOL → USDT | filled | 7s | 1 |  |
| 21:08:06 | 30 | 3 | sell 0.00493 SOL → USDC | filled | 5s | 1 |  |
| 21:08:09 | 31 | 25 | sell 0.798 JTO → RAY | filled | 7s | 1 |  |
| 21:08:10 | 32 | 22 | sell 0.0036 SOL → USDT | filled | 7s | 1 |  |
| 21:08:11 | 33 | 16 | buy 0.206 TRUMP ← SOL | filled | 7s | 1 |  |
| 21:08:19 | 34 | 8 | buy 0.00276 JitoSOL ← USDC | filled | 29s | 2 |  |
| 21:08:20 | 35 | 23 | sell 0.174 TRUMP → SOL | filled | 7s | 1 |  |
| 21:08:22 | 36 | 17 | buy 0.206 TRUMP ← SOL | filled | 4s | 1 |  |
| 21:08:24 | 37 | 9 | sell 7.18 POPCAT → SOL | filled | 9s | 1 |  |
| 21:08:25 | 38 | 5 | sell 0.0036 SOL → USDC | filled | 5s | 1 |  |
| 21:08:31 | 39 | 21 | sell 0.00437 SOL → USDC | filled | 7s | 1 |  |
| 21:08:28 | 40 | 3 | sell 0.478 USDC → SOL | filled | 27s | 1 |  |
| 21:08:34 | 41 | 19 | sell 0.822 JTO → TRUMP | filled | 7s | 1 |  |
| 21:08:37 | 42 | 4 | sell 0.00237 mSOL → POPCAT | filled | 4s | 1 |  |
| 21:08:48 | 43 | 8 | sell 0.00267 JitoSOL → JTO | filled | 19s | 1 |  |
| 21:08:40 | 44 | 23 | buy 8.15 POPCAT ← SOL | filled | 7s | 1 |  |
| 21:08:44 | 45 | 9 | buy 120000 BONK ← SOL | filled | 23s | 1 |  |
| 21:08:45 | 46 | 5 | sell 0.642 USDC → SOL | filled | 60s | 1 |  |
| 21:08:47 | 47 | 22 | sell 0.908 USDT → SOL | filled | 57s | 1 |  |
| 21:08:47 | 48 | 25 | sell 0.201 RAY → mSOL | filled | 7s | 1 |  |
| 21:08:50 | 49 | 12 | sell 0.00215 mSOL → JTO | filled | 15s | 1 |  |
| 21:08:51 | 50 | 7 | buy 8.15 POPCAT ← SOL | filled | 7s | 1 |  |
| 21:09:00 | 51 | 3 | sell 0.0036 SOL → USDT | filled | 7s | 1 |  |
| 21:09:07 | 52 | 9 | buy 1.75 WIF ← SOL | filled | 7s | 1 |  |
| 21:09:05 | 53 | 21 | sell 0.0036 SOL → USDT | filled | 7s | 1 |  |
| 21:09:07 | 54 | 10 | sell 0.182 TRUMP → USDC | filled | 9s | 1 |  |
| 21:09:07 | 55 | 24 | sell 0.385 USDC → SOL | filled | 4s | 1 |  |
| 21:09:08 | 56 | 6 | buy 1.75 WIF ← SOL | filled | 15s | 1 |  |
| 21:09:15 | 57 | 12 | buy 0.225 RAY ← USDC | filled | 14s | 2 |  |
| 21:09:17 | 58 | 20 | buy 0.225 RAY ← USDC | failed | 0s | 0 | acquire USDC error: Bad Request |
| 21:09:44 | 59 | 5 | sell 0.0036 SOL → USDC | filled | 7s | 1 |  |
| 21:09:27 | 60 | 10 | buy 120000 BONK ← SOL | filled | 4s | 1 |  |
| 21:09:28 | 61 | 6 | buy 120000 BONK ← SOL | filled | 7s | 1 |  |
| 21:09:28 | 62 | 21 | sell 0.00377 SOL → USDT | filled | 10s | 1 |  |
| 21:09:30 | 63 | 23 | sell 7.4 POPCAT → SOL | filled | 7s | 1 |  |
| 21:09:37 | 64 | 20 | buy 0.00276 JitoSOL ← USDC | filled | 8s | 2 |  |
| 21:09:40 | 65 | 9 | buy 8.15 POPCAT ← SOL | filled | 5s | 1 |  |
| 21:09:46 | 66 | 2 | sell 0.191 RAY → JitoSOL | filled | 4s | 1 |  |
| 21:09:47 | 67 | 10 | buy 1.75 WIF ← SOL | filled | 4s | 1 |  |
| 21:09:48 | 68 | 22 | sell 0.0036 SOL → USDT | filled | 10s | 1 |  |
| 21:09:51 | 69 | 8 | buy 0.835 JTO ← USDC | filled | 14s | 2 |  |
| 21:09:55 | 70 | 16 | buy 120000 BONK ← SOL | filled | 10s | 1 |  |
| 21:09:58 | 71 | 7 | sell 7.74 POPCAT → SOL | filled | 7s | 1 |  |
| 21:09:59 | 72 | 17 | buy 0.206 TRUMP ← SOL | filled | 6s | 1 |  |
| 21:10:03 | 73 | 11 | sell 0.00447 SOL → USDT | filled | 13s | 1 |  |
| 21:10:04 | 74 | 5 | sell 0.0036 SOL → USDC | filled | 10s | 1 |  |
| 21:10:06 | 75 | 2 | buy 0.00256 mSOL ← USDC | failed | 10s | 1 | main error: Bad Request |
| 21:10:10 | 76 | 21 | sell 0.00474 SOL → USDT | filled | 7s | 1 |  |
| 21:10:11 | 77 | 8 | sell 1.34 JTO → USDC | filled | 7s | 1 |  |
| 21:10:17 | 78 | 20 | buy 1.37 JUP ← USDC | filled | 20s | 2 |  |
| 21:10:17 | 79 | 24 | sell 0.00445 SOL → USDC | filled | 7s | 1 |  |
| 21:10:18 | 80 | 1 | sell 7.26 POPCAT → SOL | filled | 9s | 1 |  |
| 21:10:18 | 81 | 12 | buy 0.225 RAY ← USDC | filled | 20s | 2 |  |
| 21:10:19 | 82 | 17 | buy 0.00276 JitoSOL ← SOL | filled | 6s | 1 |  |
| 21:10:23 | 83 | 11 | sell 0.7 USDT → SOL | filled | 12s | 1 |  |
| 21:10:27 | 84 | 3 | sell 0.399 USDT → SOL | filled | 13s | 1 |  |
| 21:10:27 | 85 | 15 | sell 0.478 USDC → SOL | filled | 12s | 1 |  |
| 21:10:38 | 86 | 1 | buy 0.206 TRUMP ← SOL | filled | 7s | 1 |  |
| 21:10:38 | 87 | 8 | sell 0.66 USDC → JitoSOL | filled | 8s | 1 |  |
| 21:10:38 | 88 | 12 | buy 0.00276 JitoSOL ← USDC | filled | 18s | 2 |  |
| 21:10:39 | 89 | 17 | buy 8.15 POPCAT ← SOL | filled | 7s | 1 |  |
| 21:10:46 | 90 | 16 | sell 172000 BONK → SOL | filled | 9s | 1 |  |
| 21:10:47 | 91 | 3 | sell 0.00396 SOL → USDT | filled | 8s | 1 |  |
| 21:10:48 | 92 | 6 | sell 1.71 WIF → SOL | filled | 7s | 1 |  |
| 21:10:53 | 93 | 13 | sell 0.0036 SOL → USDC | filled | 7s | 1 |  |
| 21:10:55 | 94 | 21 | sell 1.25 USDC → SOL | filled | 36s | 2 |  |
| 21:10:58 | 95 | 4 | buy 0.237 RAY ← USDC | filled | 14s | 2 |  |
| 21:10:58 | 96 | 8 | sell 0.00351 JitoSOL → BONK | filled | 7s | 1 |  |
| 21:10:58 | 97 | 15 | sell 0.0036 SOL → USDC | filled | 17s | 1 |  |
| 21:10:59 | 98 | 17 | buy 0.00256 mSOL ← SOL | filled | 7s | 1 |  |
| 21:10:59 | 99 | 23 | buy 120000 BONK ← SOL | filled | 6s | 1 |  |
| 21:11:03 | 100 | 14 | sell 0.00267 JitoSOL → USDC | filled | 17s | 2 |  |
| 21:11:04 | 101 | 5 | sell 0.744 USDC → SOL | filled | 7s | 1 |  |
| 21:11:04 | 102 | 22 | sell 0.0036 SOL → USDC | filled | 7s | 1 |  |
| 21:11:06 | 103 | 11 | sell 0.0036 SOL → USDT | filled | 7s | 1 |  |
| 21:11:13 | 104 | 13 | sell 0.0036 SOL → USDC | filled | 7s | 1 |  |
| 21:11:18 | 105 | 8 | sell 148000 BONK → USDT | filled | 17s | 2 |  |
| 21:11:18 | 106 | 12 | sell 0.372 RAY → JUP | filled | 7s | 1 |  |
| 21:11:18 | 107 | 16 | sell 0.172 TRUMP → USDC | filled | 9s | 1 |  |
| 21:11:19 | 108 | 17 | buy 0.206 TRUMP ← SOL | filled | 7s | 1 |  |
| 21:11:20 | 109 | 9 | buy 120000 BONK ← SOL | filled | 7s | 1 |  |
| 21:11:24 | 110 | 22 | sell 0.54 USDT → SOL | filled | 5s | 1 |  |
| 21:11:26 | 111 | 24 | sell 0.0036 SOL → USDC | filled | 4s | 1 |  |
| 21:11:27 | 112 | 10 | buy 1.75 WIF ← SOL | filled | 4s | 1 |  |
| 21:11:38 | 113 | 12 | sell 0.00246 JitoSOL → mSOL | filled | 13s | 1 |  |
| 21:11:38 | 114 | 18 | sell 103000 BONK → USDC | filled | 10s | 1 |  |
| 21:11:39 | 115 | 16 | buy 8.15 POPCAT ← SOL | filled | 7s | 1 |  |
| 21:11:42 | 116 | 7 | buy 1.75 WIF ← SOL | filled | 4s | 1 |  |
| 21:11:46 | 117 | 2 | buy 1.37 JUP ← USDC | filled | 13s | 2 |  |
| 21:11:47 | 118 | 22 | sell 0.0036 SOL → USDT | filled | 4s | 1 |  |
| 21:11:52 | 119 | 9 | buy 1.75 WIF ← SOL | filled | 13s | 1 |  |
| 21:11:58 | 120 | 3 | sell 0.369 USDT → SOL | filled | 7s | 1 |  |
| 21:12:02 | 121 | 12 | buy 1.37 JUP ← USDC | failed | 4s | 1 | main error: Bad Request |
| 21:12:07 | 122 | 6 | sell 272000 BONK → SOL | filled | 2s | 1 |  |
| 21:12:12 | 123 | 9 | sell 179000 BONK → SOL | filled | 7s | 1 |  |
| 21:12:16 | 124 | 18 | buy 0.206 TRUMP ← SOL | filled | 4s | 1 |  |
| 21:12:18 | 125 | 3 | sell 0.0036 SOL → USDT | filled | 10s | 1 |  |
| 21:12:18 | 126 | 8 | buy 0.00256 mSOL ← USDC | filled | 20s | 2 |  |
| 21:12:26 | 127 | 13 | sell 0.0036 SOL → USDT | filled | 7s | 1 |  |
| 21:12:26 | 128 | 19 | buy 1.37 JUP ← USDC | filled | 17s | 2 |  |
| 21:12:35 | 129 | 20 | sell 1.2 JUP → BONK | filled | 10s | 1 |  |
| 21:12:36 | 130 | 11 | sell 0.514 USDT → SOL | filled | 10s | 1 |  |
| 21:12:38 | 131 | 24 | sell 0.00419 SOL → USDC | filled | 7s | 1 |  |
| 21:12:44 | 132 | 25 | buy 1.37 JUP ← USDC | filled | 11s | 2 |  |
| 21:12:57 | 133 | 4 | buy 0.225 RAY ← USDC | filled | 7s | 2 |  |
| 21:12:57 | 134 | 6 | buy 1.75 WIF ← SOL | filled | 9s | 1 |  |
| 21:13:01 | 135 | 8 | sell 0.493 USDT → JitoSOL | filled | 4s | 1 |  |
| 21:13:01 | 136 | 13 | sell 0.726 USDC → SOL | filled | 3s | 1 |  |
| 21:13:02 | 137 | 11 | sell 0.0036 SOL → USDC | filled | 7s | 1 |  |
| 21:13:04 | 138 | 9 | buy 8.15 POPCAT ← SOL | filled | 7s | 1 |  |
| 21:13:04 | 139 | 16 | buy 0.206 TRUMP ← SOL | filled | 8s | 1 |  |
| 21:13:04 | 140 | 17 | buy 120000 BONK ← SOL | filled | 8s | 1 |  |
| 21:13:07 | 141 | 2 | buy 0.892 JTO ← USDC | filled | 14s | 2 |  |

Scenario orders: 165 (137 main, 28 acquire). Cleanup placed 77 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 21:13:22 | 1 | TRUMP → SOL (native) | Executed | `0x1480f0be…` [🐞](https://debug.barn.cow.fi/order/0x1480f0beb4e128ea5813a2708bcef0ababeefc881272e7019ebcc2de1a86a278) |
| 21:13:23 | 2 | JUP → SOL (native) | Executed | `0x4fa31c9c…` [🐞](https://debug.barn.cow.fi/order/0x4fa31c9c3d81f6e210178bcb7e2a6fb51bc832d68b00182bc4a43caede83aa4a) |
| 21:13:24 | 3 | USDC → SOL (native) | Executed | `0x5c1e3c6f…` [🐞](https://debug.barn.cow.fi/order/0x5c1e3c6fc9d063bc4051e1dfb95310d4e619d4c13fff4bfa496cbb846d678944) |
| 21:13:25 | 4 | mSOL → SOL (native) | Executed | `0x24ae6420…` [🐞](https://debug.barn.cow.fi/order/0x24ae6420781ddd090d08482d4677c331e8807d7873edb04fb40dbdaef6261d0c) |
| 21:13:26 | 5 | USDC → SOL (native) | Executed | `0x38d7724d…` [🐞](https://debug.barn.cow.fi/order/0x38d7724d3ff7e618cea14102003e5d5024c5b4e593e132508d56f94aa9e600d9) |
| 21:13:28 | 1 | POPCAT → SOL (native) | Executed | `0x4016795e…` [🐞](https://debug.barn.cow.fi/order/0x4016795edfe1b4a7a1b747eacadd539e27fd13a333768062521beb2b26a8eabe) |
| 21:13:31 | 4 | RAY → SOL (native) | Executed | `0x637abdfa…` [🐞](https://debug.barn.cow.fi/order/0x637abdfa42c6d58d95611d61d8eda832132bb2b83fc3703bd87428bf4ab7b43e) |
| 21:13:32 | 2 | JTO → SOL (native) | Executed | `0x85b2906a…` [🐞](https://debug.barn.cow.fi/order/0x85b2906a0aabfe32bd2a86af164be40a848d1950d0e4ffe02dbf6dd450f1984d) |
| 21:13:36 | 3 | USDT → SOL (native) | Executed | `0x086a1d94…` [🐞](https://debug.barn.cow.fi/order/0x086a1d9484aefa9ae2c0095d602685c62b9ebc998105f4f2633c1bbcdc45aa68) |
| 21:13:47 | 2 | RAY → SOL (native) | Executed | `0xd7751dc5…` [🐞](https://debug.barn.cow.fi/order/0xd7751dc527f3d72d34d1056e2865e225f0821a3f06f011a20a3712283fa7d254) |
| 21:14:10 | 2 | USDC → SOL (native) | Executed | `0x2bc2e446…` [🐞](https://debug.barn.cow.fi/order/0x2bc2e446dca7709482345bf48e1bb822c545a4b6258792b2a4de15cf5c666fc4) |
| 21:14:34 | 2 | JitoSOL → SOL (native) | Executed | `0xa3760f74…` [🐞](https://debug.barn.cow.fi/order/0xa3760f74680d39c22c5f29399b75d08391d279324f481ef80ea54c9d05c4007b) |
| 21:14:34 | 6 | Bonk → SOL (native) | Executed | `0x757b29f4…` [🐞](https://debug.barn.cow.fi/order/0x757b29f48f9e526c26b17d4fbb773d704bc72c705a91751d44f0f11956b3da3e) |
| 21:14:38 | 4 | POPCAT → SOL (native) | Executed | `0x0ce89ab0…` [🐞](https://debug.barn.cow.fi/order/0x0ce89ab030f6245bc3d670193d0603b26d282afd46f4b75d7f586209f6d696f9) |
| 21:14:44 | 6 | $WIF → SOL (native) | Executed | `0x1a764cfe…` [🐞](https://debug.barn.cow.fi/order/0x1a764cfef43905090ab10b01b005550232f320f07d31ac7b31730abbe8b6766e) |
| 21:14:48 | 4 | USDC → SOL (native) | Executed | `0x57cf8a5d…` [🐞](https://debug.barn.cow.fi/order/0x57cf8a5d6096850634e8cf8fea77d6c8859d8403df9e390a095f960b513ec6a2) |
| 21:15:20 | 7 | POPCAT → SOL (native) | Executed | `0xbe6001f6…` [🐞](https://debug.barn.cow.fi/order/0xbe6001f6d0b657995e2e722aba39d98242b61bd0931c2e79fe66db319e18838d) |
| 21:15:29 | 7 | Bonk → SOL (native) | Executed | `0x1fa5853b…` [🐞](https://debug.barn.cow.fi/order/0x1fa5853b45511d555a49a4e5aabd61e7157e1734292c6e8131e7aaba9e6a2273) |
| 21:15:36 | 7 | $WIF → SOL (native) | Executed | `0x80106555…` [🐞](https://debug.barn.cow.fi/order/0x801065551786bf94de7ce4b2750b47cc14d4c627c26b28619bbc3738f93e244a) |
| 21:16:33 | 8 | JUP → SOL (native) | Executed | `0xaa292732…` [🐞](https://debug.barn.cow.fi/order/0xaa29273287a639f675b701226c2e281a21638da8f92ed58514c08de474e55337) |
| 21:16:55 | 8 | JTO → SOL (native) | Executed | `0x4466b290…` [🐞](https://debug.barn.cow.fi/order/0x4466b2905c6a1e0fbec196ab35da4b867580b38c18b132462d55d3dfbd6b7a3f) |
| 21:17:05 | 8 | mSOL → SOL (native) | Executed | `0x465f7578…` [🐞](https://debug.barn.cow.fi/order/0x465f757891c4479053b7bacffc9e39242173b5da42f3a4428aa4d5366a7cde95) |
| 21:17:09 | 9 | POPCAT → SOL (native) | Executed | `0x23567fe8…` [🐞](https://debug.barn.cow.fi/order/0x23567fe8c03da12f7a114815230806020448e81c2887c525a59953d925e444f6) |
| 21:17:17 | 9 | Bonk → SOL (native) | Executed | `0x0cb14859…` [🐞](https://debug.barn.cow.fi/order/0x0cb14859191fb660bc13a08e37616d3e6234039852526e31b85e1b4563547fe3) |
| 21:17:24 | 9 | $WIF → SOL (native) | Executed | `0x20cadeeb…` [🐞](https://debug.barn.cow.fi/order/0x20cadeebd112e113f3ce665c4a2df63e20301cad4b0d2033c54e26855d622042) |
| 21:17:26 | 8 | USDC → SOL (native) | Executed | `0x98bfc436…` [🐞](https://debug.barn.cow.fi/order/0x98bfc4368002b9322d578dc682c154b9ececc4e262d8713520072d2ee61f1d39) |
| 21:17:33 | 8 | USDT → SOL (native) | Executed | `0x6c280d9f…` [🐞](https://debug.barn.cow.fi/order/0x6c280d9ffc59ce2edf1217ef7302c7e1876fd9b890ce87d7921bc1b43daa5032) |
| 21:17:41 | 8 | JitoSOL → SOL (native) | Executed | `0xbfeb5135…` [🐞](https://debug.barn.cow.fi/order/0xbfeb5135b633de175b911c1a3a593e753d1ec3d2f786960a364837dfc946562c) |
| 21:18:39 | 10 | TRUMP → SOL (native) | Executed | `0x038b6be8…` [🐞](https://debug.barn.cow.fi/order/0x038b6be84395332cd491b943e10bc058c5b184c30f6424b86f1f296576abf10c) |
| 21:18:46 | 11 | USDC → SOL (native) | Executed | `0x334f641e…` [🐞](https://debug.barn.cow.fi/order/0x334f641e13ef43c223950f9828b925ab1946f549f01e86fdc0a1a9d1334572e7) |
| 21:18:51 | 11 | USDT → SOL (native) | Executed | `0xa3545217…` [🐞](https://debug.barn.cow.fi/order/0xa354521728343d8400e46bc545a42ca8ec39febdbf02541eb009b2eb51735caa) |
| 21:19:13 | 10 | Bonk → SOL (native) | Executed | `0x11a06db5…` [🐞](https://debug.barn.cow.fi/order/0x11a06db553e983b903678bcb7309a5ee9ddea40d5e80bf19f351ea631718bfea) |
| 21:19:17 | 10 | $WIF → SOL (native) | Executed | `0x43570fb0…` [🐞](https://debug.barn.cow.fi/order/0x43570fb00ceff635dc73cd5c01da7fd8ccf0523fad08240bac466731722cb2b6) |
| 21:19:25 | 12 | JUP → SOL (native) | Executed | `0x7a6c523b…` [🐞](https://debug.barn.cow.fi/order/0x7a6c523bd8be19db04cd45ccf02dd9dddeca4f17470384ccab24c9e53ceea413) |
| 21:19:36 | 13 | USDC → SOL (native) | Executed | `0xc87a6830…` [🐞](https://debug.barn.cow.fi/order/0xc87a68301776c842d0f3dd77528d9efd5c8b248e0cb1a0c0dea590a72f714252) |
| 21:19:37 | 10 | USDC → SOL (native) | Executed | `0x3fdfdb35…` [🐞](https://debug.barn.cow.fi/order/0x3fdfdb356001d708aaecaedca2f22dd56b63c91cfc06b59a65435130497065b4) |
| 21:20:07 | 12 | JTO → SOL (native) | Executed | `0xdc14cba1…` [🐞](https://debug.barn.cow.fi/order/0xdc14cba144c376f11c6c2a1854dc1021ca5cec18ecc8013f0c7cf680664f224e) |
| 21:20:59 | 12 | RAY → SOL (native) | Executed | `0x34da73b3…` [🐞](https://debug.barn.cow.fi/order/0x34da73b30cb0461e5ccc923f24440c9864cb8ee90065e21aab8192cc777fb901) |
| 21:21:00 | 13 | USDT → SOL (native) | Executed | `0x90854742…` [🐞](https://debug.barn.cow.fi/order/0x9085474252ba91f191b70512d2a68d0b3e75cbf8187beaded3a5985cbdc744d9) |
| 21:21:13 | 12 | USDC → SOL (native) | Executed | `0x9535a93b…` [🐞](https://debug.barn.cow.fi/order/0x9535a93b4b5d08d92395f456f9d1a06e22b11697c3ff0f169bc33317ef58b287) |
| 21:21:15 | 12 | JitoSOL → SOL (native) | Executed | `0xfc931c82…` [🐞](https://debug.barn.cow.fi/order/0xfc931c8277da230d6f4052ed684865f6c4e7ee728324d53036369319fccb30b9) |
| 21:22:45 | 16 | TRUMP → SOL (native) | Executed | `0x28179154…` [🐞](https://debug.barn.cow.fi/order/0x281791541eaaee75ed56450a544cbac776c2f83b6cb523d01728af05e43adeb1) |
| 21:22:52 | 16 | POPCAT → SOL (native) | Executed | `0x48b84133…` [🐞](https://debug.barn.cow.fi/order/0x48b841336755ea86d66c6d3c2afec53146660f5e8e6154fd9eebeb976cc986ac) |
| 21:22:55 | 15 | USDC → SOL (native) | Executed | `0x0b253848…` [🐞](https://debug.barn.cow.fi/order/0x0b253848cc667404b22f7d810529362de304f93a5bcd570e13e9b0e90c87924b) |
| 21:23:01 | 16 | Bonk → SOL (native) | Executed | `0xf8e92ebd…` [🐞](https://debug.barn.cow.fi/order/0xf8e92ebd247aeec97f26f76e356d737a7018f889919637513801f89ecd99980e) |
| 21:23:11 | 16 | USDC → SOL (native) | Executed | `0x58bccb7a…` [🐞](https://debug.barn.cow.fi/order/0x58bccb7a00e14844887076a6d71eb3866673f1a348546460cd0505155902c40b) |
| 21:23:39 | 18 | TRUMP → SOL (native) | Executed | `0xff3611a7…` [🐞](https://debug.barn.cow.fi/order/0xff3611a7669b65111f36cbc97d2b64774b5d990afd3557ef0248dce167f024e4) |
| 21:23:44 | 17 | mSOL → SOL (native) | Executed | `0x59ad13f7…` [🐞](https://debug.barn.cow.fi/order/0x59ad13f72cdd3fe0c3c2d8ff47537bb908a58273c327dbfb23376e99fe8ccadc) |
| 21:23:51 | 17 | TRUMP → SOL (native) | Executed | `0xf8c2af92…` [🐞](https://debug.barn.cow.fi/order/0xf8c2af929d72008f40f6214c7881311ad3e9b377481ee1950ca8ec678b1e0ed8) |
| 21:23:53 | 18 | Bonk → SOL (native) | Executed | `0x2265f298…` [🐞](https://debug.barn.cow.fi/order/0x2265f2981d6a8aaafe1289fcde87224d0620e40010a5ff09788e55b33dfc1432) |
| 21:23:55 | 17 | POPCAT → SOL (native) | Executed | `0x2413012f…` [🐞](https://debug.barn.cow.fi/order/0x2413012f2c82e37350525f6244d5a2a1a0f34b7aed14a22de7c1e6fde3923f5a) |
| 21:24:02 | 19 | JUP → SOL (native) | Executed | `0xf670046f…` [🐞](https://debug.barn.cow.fi/order/0xf670046fd321592349f1234c881513834fed02e18ed1eb10b121d9bcb284ef49) |
| 21:24:02 | 18 | USDC → SOL (native) | Executed | `0x1027ebf3…` [🐞](https://debug.barn.cow.fi/order/0x1027ebf35c2ddb701a93a4f1b95f364b120d0a52d18596858819c87e2c9755b1) |
| 21:24:03 | 17 | Bonk → SOL (native) | Executed | `0xa327b7c2…` [🐞](https://debug.barn.cow.fi/order/0xa327b7c26beeff25d12a636e41e43194687bbaadf1a72c9273dbe82c12b3465d) |
| 21:24:45 | 17 | JitoSOL → SOL (native) | Executed | `0xe0f881b4…` [🐞](https://debug.barn.cow.fi/order/0xe0f881b4844757aceb5b77fc01210444ab185cee2c63332d6efcb24e0879d6f2) |
| 21:25:05 | 20 | JUP → SOL (native) | Executed | `0x7e3a42da…` [🐞](https://debug.barn.cow.fi/order/0x7e3a42daeb80162260b5032878540823eabfa2d5923f935ca4d27e51be0b3955) |
| 21:25:10 | 21 | USDT → SOL (native) | Executed | `0xd79bbeae…` [🐞](https://debug.barn.cow.fi/order/0xd79bbeae3120fd99f949136c98635def966a598c7b30f0e8a5885b31d59c4c15) |
| 21:25:17 | 22 | USDC → SOL (native) | Executed | `0xcc69feeb…` [🐞](https://debug.barn.cow.fi/order/0xcc69feeb73b58c7869fa7356d818973066b7b4459433f15b4bbe043ca228958e) |
| 21:25:29 | 22 | USDT → SOL (native) | Executed | `0x0b667991…` [🐞](https://debug.barn.cow.fi/order/0x0b66799161b622723b9d21dd5483e51ff5c28b8c2abf26058e78c4388a31e77c) |
| 21:25:32 | 19 | JTO → SOL (native) | Executed | `0x01bab71c…` [🐞](https://debug.barn.cow.fi/order/0x01bab71cc311f7f770fb174f718c8f9d45e64c73bba4e6d6b0a256c016dc7206) |
| 21:25:36 | 19 | RAY → SOL (native) | Executed | `0x79c3fbd8…` [🐞](https://debug.barn.cow.fi/order/0x79c3fbd82dfd825ec67a12c70ee9a9f80f88fc2eec6e23ffde55d6c13a5c91cd) |
| 21:25:41 | 19 | TRUMP → SOL (native) | Executed | `0x89834543…` [🐞](https://debug.barn.cow.fi/order/0x8983454381308a9242e34bd02755e7f377c217f7bebb21e47ba14e6d82f5ab48) |
| 21:25:58 | 19 | USDC → SOL (native) | Executed | `0xdcd00119…` [🐞](https://debug.barn.cow.fi/order/0xdcd001198220d28fb99103f8f23b59716c55d9f199fd5ef9b792bd3db9703974) |
| 21:26:27 | 23 | TRUMP → SOL (native) | Executed | `0xdc34e6b4…` [🐞](https://debug.barn.cow.fi/order/0xdc34e6b4dcf7e3d5ba78d14d466eb9404e59cb22497d3c4d72f9c6d491105422) |
| 21:26:29 | 20 | mSOL → SOL (native) | Executed | `0xaf1a3250…` [🐞](https://debug.barn.cow.fi/order/0xaf1a32505e2b52395722fc522bde9defb46d8c878f174062b1f562ffd122cd0e) |
| 21:26:37 | 20 | Bonk → SOL (native) | Executed | `0xfbe8b065…` [🐞](https://debug.barn.cow.fi/order/0xfbe8b06525634d772da5555e0235c721841bfc0e82f463f0a51719eb4d5899dc) |
| 21:26:47 | 20 | USDC → SOL (native) | Executed | `0x9fdf2d3c…` [🐞](https://debug.barn.cow.fi/order/0x9fdf2d3c91a12c80842aa537b87b4ee80de54291c4e29561edcb88a515a8eeb0) |
| 21:26:56 | 24 | USDC → SOL (native) | Executed | `0xbbf92963…` [🐞](https://debug.barn.cow.fi/order/0xbbf92963be4758be3bdbf63ab888208cfe687ab44595fd3c2bf0911680c16c77) |
| 21:27:01 | 23 | POPCAT → SOL (native) | Executed | `0x12daa7e9…` [🐞](https://debug.barn.cow.fi/order/0x12daa7e9f8f8f14fabadf9e527d3bcf1945eb549c6235e4cb28f2585fb06c611) |
| 21:27:07 | 23 | Bonk → SOL (native) | Executed | `0xb747d981…` [🐞](https://debug.barn.cow.fi/order/0xb747d98189dcb61fb56b8ffbf5d6111f1de415dcbaa1362ddc8daacbac0caa03) |
| 21:27:30 | 25 | JUP → SOL (native) | Executed | `0x3dbeab28…` [🐞](https://debug.barn.cow.fi/order/0x3dbeab28d3cc9300cf3f7dd08f27a45aec61a1fc24ad17508fb847e8d4290fc8) |
| 21:27:38 | 25 | JTO → SOL (native) | Executed | `0x8d92f5be…` [🐞](https://debug.barn.cow.fi/order/0x8d92f5be8edb74efac2d452e677009202349ffea26fe90b57f47c2c50b831f1d) |
| 21:27:44 | 25 | mSOL → SOL (native) | Executed | `0xd40ccd67…` [🐞](https://debug.barn.cow.fi/order/0xd40ccd671b6ff3fdc7b565f3322b90dbdd184840a9cbd8c8053759683d6adec7) |
| 21:27:52 | 25 | RAY → SOL (native) | Executed | `0xee0df845…` [🐞](https://debug.barn.cow.fi/order/0xee0df8452a209b15a734bd89632df655deff44b0d22965655478956a8815810c) |
| 21:28:04 | 25 | USDC → SOL (native) | Executed | `0xf1817726…` [🐞](https://debug.barn.cow.fi/order/0xf1817726a33968587e83131cf021a2479afc33da18c536e73e74d53b72e84a86) |
| 21:28:08 | 20 | JitoSOL → SOL (native) | Executed | `0xd27e5315…` [🐞](https://debug.barn.cow.fi/order/0xd27e531525f312073ea77bc91688bcde7d5506150d4ae784db3a61c480521721) |
| 21:30:24 | 14 | USDC → SOL (native) | Executed | `0x016983e1…` [🐞](https://debug.barn.cow.fi/order/0x016983e1597e6404432fefc4e29f007896e262a6e4515ed42aa81efd1abfef79) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 164 | 99.4% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 0.6% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 5s | 10s | 78s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 164 | 100.0% | 164 | 100,146 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 320 | 262 | 241 | 92.0% | 16 | 16 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 16 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 282 times
- Orders filtered for `in_flight`: 36 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| buy | 89 | 89 | 100.0% |
| sell | 76 | 75 | 98.7% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 44 | 43 | 97.7% |
| wSOL → USDT | 17 | 17 | 100.0% |
| wSOL → Bonk | 13 | 13 | 100.0% |
| wSOL → TRUMP | 10 | 10 | 100.0% |
| wSOL → POPCAT | 8 | 8 | 100.0% |
| USDC → SOL (native) | 7 | 7 | 100.0% |
| wSOL → $WIF | 7 | 7 | 100.0% |
| USDC → RAY | 6 | 6 | 100.0% |
| USDT → SOL (native) | 6 | 6 | 100.0% |
| USDC → JUP | 5 | 5 | 100.0% |
| USDC → mSOL | 4 | 4 | 100.0% |
| USDC → JTO | 4 | 4 | 100.0% |
| POPCAT → SOL (native) | 4 | 4 | 100.0% |
| USDC → JitoSOL | 4 | 4 | 100.0% |
| Bonk → SOL (native) | 3 | 3 | 100.0% |
| TRUMP → USDC | 2 | 2 | 100.0% |
| wSOL → JitoSOL | 2 | 2 | 100.0% |
| JTO → RAY | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| JTO → TRUMP | 1 | 1 | 100.0% |
| mSOL → POPCAT | 1 | 1 | 100.0% |
| RAY → mSOL | 1 | 1 | 100.0% |
| JitoSOL → JTO | 1 | 1 | 100.0% |
| mSOL → JTO | 1 | 1 | 100.0% |
| RAY → JitoSOL | 1 | 1 | 100.0% |
| JTO → USDC | 1 | 1 | 100.0% |
| $WIF → SOL (native) | 1 | 1 | 100.0% |
| JitoSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| JitoSOL → USDC | 1 | 1 | 100.0% |
| RAY → JUP | 1 | 1 | 100.0% |
| Bonk → USDT | 1 | 1 | 100.0% |
| Bonk → USDC | 1 | 1 | 100.0% |
| JitoSOL → mSOL | 1 | 1 | 100.0% |
| JUP → Bonk | 1 | 1 | 100.0% |
| USDT → JitoSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 15 | 15 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 12 | 12 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 9 | 8 | 88.9% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 9 | 9 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 8 | 8 | 100.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 8 | 8 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 8 | 8 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 7 | 7 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 7 | 7 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 7 | 7 | 100.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 7 | 7 | 100.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 7 | 7 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 7 | 7 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 6 | 6 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 6 | 6 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 6 | 6 | 100.0% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 5 | 5 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 5 | 5 | 100.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 5 | 5 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 5 | 5 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 4 | 4 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 3 | 3 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 3 | 3 | 100.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 3 | 3 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 3 | 3 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 1 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 21:07:40 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xc77b996b…` [🐞](https://debug.barn.cow.fi/order/0xc77b996bfbd3a56c29fcddd3ae24725e1cddd5828cf4e164d1f17afa80534b9c) |
