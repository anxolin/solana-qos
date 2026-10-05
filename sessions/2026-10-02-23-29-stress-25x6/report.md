# Solana QoS report: 2026-10-02-23-29-stress-25x6

Barn, orders created between `2026-10-02T23:29:45.471Z` and `2026-10-03T00:12:21.326Z`. Data fetched 2026-10-03T00:17:00+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 217 |
| Orders executed | **132** (60.8%) |
| Sponsored orders never created on-chain | 72 (33.2%) |
| Traders | 25 |
| Settlement txs | 132 |

## Scenario

107 of 141 scenario rows completed. 68 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 23:29:46 | 1 | 22 | sell 0.00428 SOL → USDT | filled | 32s | 1 |  |
| 23:29:55 | 2 | 7 | buy 120000 BONK ← SOL | failed | 88s | 2 | main expired |
| 23:29:56 | 3 | 4 | buy 0.00256 mSOL ← USDC | failed | 265s | 2 | acquire USDC expired |
| 23:29:56 | 4 | 21 | sell 0.0036 SOL → USDC | filled | 50s | 1 |  |
| 23:30:00 | 5 | 19 | buy 0.225 RAY ← USDC | filled | 78s | 3 |  |
| 23:30:05 | 6 | 24 | sell 0.0036 SOL → USDC | failed | 89s | 2 | main expired |
| 23:30:06 | 7 | 6 | buy 120000 BONK ← SOL | filled | 74s | 2 |  |
| 23:30:07 | 8 | 10 | buy 0.206 TRUMP ← SOL | failed | 93s | 2 | main expired |
| 23:30:08 | 9 | 14 | buy 0.00276 JitoSOL ← USDC | filled | 184s | 2 |  |
| 23:30:10 | 10 | 23 | buy 0.206 TRUMP ← SOL | failed | 97s | 2 | main expired |
| 23:30:11 | 11 | 9 | buy 8.15 POPCAT ← SOL | failed | 267s | 2 | main expired |
| 23:30:13 | 12 | 25 | buy 0.835 JTO ← USDC | filled | 150s | 2 |  |
| 23:30:15 | 13 | 8 | buy 1.37 JUP ← USDC | failed | 96s | 2 | acquire USDC expired |
| 23:30:46 | 14 | 21 | sell 0.0036 SOL → USDC | filled | 42s | 1 |  |
| 23:30:17 | 15 | 1 | buy 8.15 POPCAT ← SOL | failed | 98s | 2 | main expired |
| 23:30:18 | 16 | 18 | buy 120000 BONK ← SOL | failed | 94s | 2 | main expired |
| 23:30:18 | 17 | 20 | buy 0.00256 mSOL ← USDC | failed | 99s | 2 | acquire USDC expired |
| 23:31:18 | 18 | 19 | buy 0.835 JTO ← USDC | failed | 100s | 2 | acquire USDC expired |
| 23:30:23 | 19 | 15 | sell 0.00492 SOL → USDC | filled | 31s | 1 |  |
| 23:30:26 | 20 | 22 | sell 0.0036 SOL → USDT | filled | 16s | 1 |  |
| 23:30:27 | 21 | 16 | buy 120000 BONK ← SOL | filled | 21s | 1 |  |
| 23:30:30 | 22 | 17 | buy 0.206 TRUMP ← SOL | failed | 95s | 2 | main expired |
| 23:30:31 | 23 | 2 | buy 0.225 RAY ← USDC | failed | 252s | 4 | main expired |
| 23:30:36 | 24 | 12 | buy 0.00256 mSOL ← USDC | filled | 100s | 2 |  |
| 23:31:20 | 25 | 6 | buy 120000 BONK ← SOL | filled | 84s | 2 |  |
| 23:30:38 | 26 | 13 | sell 0.00428 SOL → USDT | filled | 26s | 1 |  |
| 23:30:41 | 27 | 5 | sell 0.0036 SOL → USDC | failed | 94s | 2 | main expired |
| 23:30:41 | 28 | 11 | sell 0.0036 SOL → USDT | filled | 29s | 1 |  |
| 23:31:28 | 29 | 21 | sell 0.0036 SOL → USDT | filled | 17s | 1 |  |
| 23:30:42 | 30 | 3 | sell 0.00493 SOL → USDC | filled | 16s | 1 |  |
| 23:32:43 | 31 | 25 | sell 0.798 JTO → RAY | filled | 41s | 1 |  |
| 23:30:46 | 32 | 22 | sell 0.0036 SOL → USDT | filled | 13s | 1 |  |
| 23:30:48 | 33 | 16 | buy 0.206 TRUMP ← SOL | filled | 57s | 1 |  |
| 23:31:51 | 34 | 8 | buy 0.00276 JitoSOL ← USDC | failed | 180s | 4 | main expired |
| 23:31:47 | 35 | 23 | sell 0.174 TRUMP → SOL | filled | 75s | 2 |  |
| 23:32:05 | 36 | 17 | buy 0.206 TRUMP ← SOL | filled | 67s | 2 |  |
| 23:34:38 | 37 | 9 | sell 7.18 POPCAT → SOL | filled | 95s | 2 |  |
| 23:32:15 | 38 | 5 | sell 0.0036 SOL → USDC | filled | 28s | 1 |  |
| 23:31:46 | 39 | 21 | sell 0.00437 SOL → USDC | filled | 13s | 1 |  |
| 23:31:04 | 40 | 3 | sell 0.478 USDC → SOL | filled | 20s | 1 |  |
| 23:32:58 | 41 | 19 | sell 0.822 JTO → TRUMP | filled | 60s | 2 |  |
| 23:34:21 | 42 | 4 | sell 0.00237 mSOL → POPCAT | filled | 155s | 3 |  |
| 23:34:51 | 43 | 8 | sell 0.00267 JitoSOL → JTO | filled | 95s | 3 |  |
| 23:33:01 | 44 | 23 | buy 8.15 POPCAT ← SOL | filled | 39s | 1 |  |
| 23:36:14 | 45 | 9 | buy 120000 BONK ← SOL | filled | 41s | 1 |  |
| 23:32:44 | 46 | 5 | sell 0.642 USDC → SOL | failed | 93s | 2 | acquire USDC expired |
| 23:31:23 | 47 | 22 | sell 0.908 USDT → SOL | filled | 17s | 1 |  |
| 23:33:24 | 48 | 25 | sell 0.201 RAY → mSOL | filled | 71s | 2 |  |
| 23:32:16 | 49 | 12 | sell 0.00215 mSOL → JTO | filled | 16s | 1 |  |
| 23:31:27 | 50 | 7 | buy 8.15 POPCAT ← SOL | filled | 20s | 1 |  |
| 23:31:36 | 51 | 3 | sell 0.0036 SOL → USDT | failed | 93s | 2 | main expired |
| 23:36:55 | 52 | 9 | buy 1.75 WIF ← SOL | filled | 57s | 1 |  |
| 23:31:59 | 53 | 21 | sell 0.0036 SOL → USDT | filled | 16s | 1 |  |
| 23:31:43 | 54 | 10 | sell 0.182 TRUMP → USDC | failed | 265s | 2 | acquire TRUMP expired |
| 23:31:43 | 55 | 24 | sell 0.385 USDC → SOL | failed | 92s | 2 | acquire USDC expired |
| 23:32:44 | 56 | 6 | buy 1.75 WIF ← SOL | failed | 271s | 2 | main expired |
| 23:32:32 | 57 | 12 | buy 0.225 RAY ← USDC | filled | 96s | 3 |  |
| 23:31:57 | 58 | 20 | buy 0.225 RAY ← USDC | filled | 183s | 2 |  |
| 23:34:17 | 59 | 5 | sell 0.0036 SOL → USDC | filled | 12s | 1 |  |
| 23:36:08 | 60 | 10 | buy 120000 BONK ← SOL | failed | 95s | 2 | main expired |
| 23:37:15 | 61 | 6 | buy 120000 BONK ← SOL | filled | 36s | 1 |  |
| 23:32:15 | 62 | 21 | sell 0.00377 SOL → USDT | filled | 22s | 1 |  |
| 23:33:40 | 63 | 23 | sell 7.4 POPCAT → SOL | filled | 18s | 1 |  |
| 23:35:00 | 64 | 20 | buy 0.00276 JitoSOL ← USDC | failed | 212s | 3 | main expired |
| 23:37:52 | 65 | 9 | buy 8.15 POPCAT ← SOL | filled | 28s | 1 |  |
| 23:34:43 | 66 | 2 | sell 0.191 RAY → JitoSOL | failed | 91s | 2 | acquire RAY expired |
| 23:37:43 | 67 | 10 | buy 1.75 WIF ← SOL | filled | 36s | 1 |  |
| 23:32:24 | 68 | 22 | sell 0.0036 SOL → USDT | filled | 22s | 1 |  |
| 23:36:26 | 69 | 8 | buy 0.835 JTO ← USDC | failed | 181s | 2 | acquire USDC expired |
| 23:32:31 | 70 | 16 | buy 120000 BONK ← SOL | filled | 96s | 2 |  |
| 23:32:34 | 71 | 7 | sell 7.74 POPCAT → SOL | filled | 17s | 1 |  |
| 23:33:11 | 72 | 17 | buy 0.206 TRUMP ← SOL | filled | 28s | 1 |  |
| 23:32:39 | 73 | 11 | sell 0.00447 SOL → USDT | filled | 16s | 1 |  |
| 23:34:30 | 74 | 5 | sell 0.0036 SOL → USDC | filled | 26s | 1 |  |
| 23:36:15 | 75 | 2 | buy 0.00256 mSOL ← USDC | filled | 39s | 1 |  |
| 23:32:46 | 76 | 21 | sell 0.00474 SOL → USDT | filled | 15s | 1 |  |
| 23:39:28 | 77 | 8 | sell 1.34 JTO → USDC | filled | 31s | 2 |  |
| 23:38:32 | 78 | 20 | buy 1.37 JUP ← USDC | filled | 100s | 2 |  |
| 23:33:15 | 79 | 24 | sell 0.00445 SOL → USDC | failed | 92s | 2 | main expired |
| 23:32:54 | 80 | 1 | sell 7.26 POPCAT → SOL | filled | 91s | 2 |  |
| 23:34:09 | 81 | 12 | buy 0.225 RAY ← USDC | failed | 103s | 2 | acquire USDC expired |
| 23:33:39 | 82 | 17 | buy 0.00276 JitoSOL ← SOL | filled | 28s | 1 |  |
| 23:32:59 | 83 | 11 | sell 0.7 USDT → SOL | filled | 14s | 1 |  |
| 23:33:09 | 84 | 3 | sell 0.399 USDT → SOL | filled | 55s | 2 |  |
| 23:33:03 | 85 | 15 | sell 0.478 USDC → SOL | filled | 14s | 1 |  |
| 23:34:25 | 86 | 1 | buy 0.206 TRUMP ← SOL | filled | 68s | 2 |  |
| 23:39:58 | 87 | 8 | sell 0.66 USDC → JitoSOL | filled | 18s | 1 |  |
| 23:35:52 | 88 | 12 | buy 0.00276 JitoSOL ← USDC | filled | 119s | 2 |  |
| 23:34:07 | 89 | 17 | buy 8.15 POPCAT ← SOL | filled | 30s | 1 |  |
| 23:34:07 | 90 | 16 | sell 172000 BONK → SOL | filled | 18s | 1 |  |
| 23:34:04 | 91 | 3 | sell 0.00396 SOL → USDT | filled | 22s | 1 |  |
| 23:37:52 | 92 | 6 | sell 1.71 WIF → SOL | failed | 56s | 1 | acquire WIF expired |
| 23:33:29 | 93 | 13 | sell 0.0036 SOL → USDC | filled | 79s | 2 |  |
| 23:33:31 | 94 | 21 | sell 1.25 USDC → SOL | filled | 16s | 1 |  |
| 23:36:56 | 95 | 4 | buy 0.237 RAY ← USDC | filled | 111s | 2 |  |
| 23:40:17 | 96 | 8 | sell 0.00351 JitoSOL → BONK | filled | 15s | 1 |  |
| 23:33:34 | 97 | 15 | sell 0.0036 SOL → USDC | filled | 12s | 1 |  |
| 23:34:37 | 98 | 17 | buy 0.00256 mSOL ← SOL | filled | 31s | 1 |  |
| 23:33:58 | 99 | 23 | buy 120000 BONK ← SOL | filled | 149s | 2 |  |
| 23:33:39 | 100 | 14 | sell 0.00267 JitoSOL → USDC | filled | 13s | 1 |  |
| 23:34:56 | 101 | 5 | sell 0.744 USDC → SOL | filled | 16s | 1 |  |
| 23:33:40 | 102 | 22 | sell 0.0036 SOL → USDC | failed | 94s | 2 | main expired |
| 23:33:42 | 103 | 11 | sell 0.0036 SOL → USDT | filled | 14s | 1 |  |
| 23:34:48 | 104 | 13 | sell 0.0036 SOL → USDC | filled | 13s | 1 |  |
| 23:40:31 | 105 | 8 | sell 148000 BONK → USDT | filled | 15s | 1 |  |
| 23:37:51 | 106 | 12 | sell 0.372 RAY → JUP | filled | 82s | 2 |  |
| 23:34:26 | 107 | 16 | sell 0.172 TRUMP → USDC | filled | 18s | 1 |  |
| 23:35:08 | 108 | 17 | buy 0.206 TRUMP ← SOL | failed | 92s | 2 | main expired |
| 23:38:20 | 109 | 9 | buy 120000 BONK ← SOL | filled | 44s | 1 |  |
| 23:35:14 | 110 | 22 | sell 0.54 USDT → SOL | filled | 12s | 1 |  |
| 23:34:47 | 111 | 24 | sell 0.0036 SOL → USDC | failed | 92s | 2 | main expired |
| 23:38:19 | 112 | 10 | buy 1.75 WIF ← SOL | filled | 27s | 1 |  |
| 23:39:13 | 113 | 12 | sell 0.00246 JitoSOL → mSOL | filled | 16s | 1 |  |
| 23:34:14 | 114 | 18 | sell 103000 BONK → USDC | failed | 177s | 2 | acquire BONK expired |
| 23:34:43 | 115 | 16 | buy 8.15 POPCAT ← SOL | failed | 95s | 2 | main expired |
| 23:34:18 | 116 | 7 | buy 1.75 WIF ← SOL | filled | 52s | 1 |  |
| 23:36:54 | 117 | 2 | buy 1.37 JUP ← USDC | failed | 92s | 2 | acquire USDC expired |
| 23:35:26 | 118 | 22 | sell 0.0036 SOL → USDT | filled | 12s | 1 |  |
| 23:39:04 | 119 | 9 | buy 1.75 WIF ← SOL | filled | 66s | 1 |  |
| 23:34:34 | 120 | 3 | sell 0.369 USDT → SOL | filled | 15s | 1 |  |
| 23:39:30 | 121 | 12 | buy 1.37 JUP ← USDC | filled | 92s | 2 |  |
| 23:38:48 | 122 | 6 | sell 272000 BONK → SOL | filled | 15s | 1 |  |
| 23:40:10 | 123 | 9 | sell 179000 BONK → SOL | filled | 58s | 2 |  |
| 23:37:11 | 124 | 18 | buy 0.206 TRUMP ← SOL | filled | 61s | 2 |  |
| 23:34:54 | 125 | 3 | sell 0.0036 SOL → USDT | filled | 12s | 1 |  |
| 23:40:46 | 126 | 8 | buy 0.00256 mSOL ← USDC | filled | 20s | 1 |  |
| 23:35:02 | 127 | 13 | sell 0.0036 SOL → USDT | filled | 24s | 1 |  |
| 23:35:02 | 128 | 19 | buy 1.37 JUP ← USDC | failed | 94s | 2 | acquire USDC expired |
| 23:40:12 | 129 | 20 | sell 1.2 JUP → BONK | filled | 11s | 1 |  |
| 23:35:12 | 130 | 11 | sell 0.514 USDT → SOL | filled | 20s | 1 |  |
| 23:36:19 | 131 | 24 | sell 0.00419 SOL → USDC | filled | 66s | 2 |  |
| 23:35:20 | 132 | 25 | buy 1.37 JUP ← USDC | filled | 177s | 3 |  |
| 23:38:47 | 133 | 4 | buy 0.225 RAY ← USDC | filled | 56s | 2 |  |
| 23:39:03 | 134 | 6 | buy 1.75 WIF ← SOL | filled | 41s | 1 |  |
| 23:41:06 | 135 | 8 | sell 0.493 USDT → JitoSOL | filled | 11s | 1 |  |
| 23:35:37 | 136 | 13 | sell 0.726 USDC → SOL | filled | 12s | 1 |  |
| 23:35:38 | 137 | 11 | sell 0.0036 SOL → USDC | filled | 26s | 1 |  |
| 23:41:08 | 138 | 9 | buy 8.15 POPCAT ← SOL | filled | 22s | 1 |  |
| 23:36:19 | 139 | 16 | buy 0.206 TRUMP ← SOL | filled | 35s | 1 |  |
| 23:36:40 | 140 | 17 | buy 120000 BONK ← SOL | filled | 42s | 1 |  |
| 23:38:26 | 141 | 2 | buy 0.892 JTO ← USDC | filled | 50s | 2 |  |

Scenario orders: 217 (161 main, 56 acquire). Cleanup placed 81 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 23:41:31 | 1 | TRUMP → SOL (native) | Executed | `0x8d1adfdb…` [🐞](https://debug.barn.cow.fi/order/0x8d1adfdbc1ccaef42dda04c21e08d848d4b58d8583efbdc5084f19909c2cc723) |
| 23:41:33 | 2 | JTO → SOL (native) | Executed | `0x8e581dba…` [🐞](https://debug.barn.cow.fi/order/0x8e581dba1cc243a0427a965cd90f4e1dfbd8bbd9cb4cce20a3e0ccd75ff59323) |
| 23:41:34 | 3 | USDC → SOL (native) | Executed | `0x7f324e46…` [🐞](https://debug.barn.cow.fi/order/0x7f324e465750f763c1486ce688b56194262870e585d26d5bf9bba53310a1a124) |
| 23:41:36 | 5 | USDC → SOL (native) | Executed | `0xa162cfbf…` [🐞](https://debug.barn.cow.fi/order/0xa162cfbf494adb127af95436458ad66cbb7181127c8203dbe051d724cf9697da) |
| 23:41:36 | 4 | RAY → SOL (native) | Executed | `0xa8f04271…` [🐞](https://debug.barn.cow.fi/order/0xa8f04271bbcf854daada2cc411cf3902aeeabd0fd4f0ae90c32329a300563f28) |
| 23:41:46 | 2 | mSOL → SOL (native) | Executed | `0x9e872b45…` [🐞](https://debug.barn.cow.fi/order/0x9e872b4534d2ead9cf5e07336fff4ad6fe3cf8f3abadc3e27be7ea27c6255be4) |
| 23:41:50 | 4 | POPCAT → SOL (native) | Executed | `0xf3324818…` [🐞](https://debug.barn.cow.fi/order/0xf33248185d22d842e79a9ab39772d4470c7ed7ece503fc504193c27785609231) |
| 23:42:01 | 2 | RAY → SOL (native) | Expired without a fill | `0xd1143bc5…` [🐞](https://debug.barn.cow.fi/order/0xd1143bc5e1c18a7cbb8be4aba84a3cb977cfd6f193369b5b5644b57753ddfd78) |
| 23:42:04 | 4 | USDC → SOL (native) | Expired without a fill | `0x6f7a837b…` [🐞](https://debug.barn.cow.fi/order/0x6f7a837b4b51ed452ba4a0f097a1eea2492e3aa028c15e668ef3b5d8d986d434) |
| 23:42:11 | 6 | Bonk → SOL (native) | Executed | `0xae8cd5c5…` [🐞](https://debug.barn.cow.fi/order/0xae8cd5c5688c281353b6b0cc1467e7449acdd520843eff6448d35d9881af8a83) |
| 23:42:32 | 3 | USDT → SOL (native) | Executed | `0xd7443df0…` [🐞](https://debug.barn.cow.fi/order/0xd7443df027ce20858356bc8d2c5cbc89faf71121ae0484b7dfe7c2aa0d4baf9b) |
| 23:42:54 | 7 | POPCAT → SOL (native) | Expired without a fill | `0xa2daedb2…` [🐞](https://debug.barn.cow.fi/order/0xa2daedb241d5b4a83eed9b4b97d7488253d5f06b080a53f7bf4b6f39623c9678) |
| 23:42:57 | 6 | $WIF → SOL (native) | Executed | `0xf2d68809…` [🐞](https://debug.barn.cow.fi/order/0xf2d688099c7b117374c56c2d9b384046b66b3566daec384c76b2ab083a7539e2) |
| 23:43:04 | 8 | mSOL → SOL (native) | Executed | `0x5f1884e3…` [🐞](https://debug.barn.cow.fi/order/0x5f1884e3b419ffbdce61a4fee6b483053a50120e2bc973b44aa01810c44a1753) |
| 23:43:17 | 6 | USDC → SOL (native) | Expired without a fill | `0xfaa7000f…` [🐞](https://debug.barn.cow.fi/order/0xfaa7000f1308fdd4543aaa965d1fe8408afbfeb67731165779110ac2d45eb9bb) |
| 23:43:45 | 8 | Bonk → SOL (native) | Expired without a fill | `0x60f8a204…` [🐞](https://debug.barn.cow.fi/order/0x60f8a204fc7dd386313fcec45f677f59cd07a41f2104e27a11e7418a5824dd1d) |
| 23:44:07 | 2 | RAY → SOL (native) | Expired without a fill | `0xa08de91f…` [🐞](https://debug.barn.cow.fi/order/0xa08de91ff3a76903ce244e31ce4cd48b17a9cabf4ffb549a902fde45aa86b258) |
| 23:44:15 | 4 | USDC → SOL (native) | Expired without a fill | `0xfc4f2ea0…` [🐞](https://debug.barn.cow.fi/order/0xfc4f2ea07bbccc8d942490a3a75764e66873894b2b277b23673c8669c22ae7a4) |
| 23:45:05 | 7 | POPCAT → SOL (native) | Expired without a fill | `0xd9c9ddd5…` [🐞](https://debug.barn.cow.fi/order/0xd9c9ddd500f70ac7a469b2885569db266b9de647479b27c383b9e14d222263ad) |
| 23:45:28 | 6 | USDC → SOL (native) | Expired without a fill | `0x40df245e…` [🐞](https://debug.barn.cow.fi/order/0x40df245ec3cb642a2fc7801e06edaf280ba089946f7cc94961893b8ce93b3648) |
| 23:45:56 | 8 | Bonk → SOL (native) | Expired without a fill | `0xf08f6bd4…` [🐞](https://debug.barn.cow.fi/order/0xf08f6bd420137237f33dbf6daff9f88afea0efea37e89834ce4291ff2499d499) |
| 23:46:18 | 2 | USDC → SOL (native) | Expired without a fill | `0xfd9a8ca3…` [🐞](https://debug.barn.cow.fi/order/0xfd9a8ca393f4eabb2b2b1c00549f90d1d4de525a60e21afd9c40908716551d2e) |
| 23:46:38 | 9 | POPCAT → SOL (native) | Executed | `0x11b6a448…` [🐞](https://debug.barn.cow.fi/order/0x11b6a448c6cd71d7a2a45b199efef265ac84e46225d6f81a9a90a1c51be7bef9) |
| 23:47:05 | 9 | Bonk → SOL (native) | Executed | `0x20df5a7d…` [🐞](https://debug.barn.cow.fi/order/0x20df5a7df034e1fc6a940f4f82dfed7615db4af801495c6d3e36c8e325c45b4a) |
| 23:47:18 | 7 | $WIF → SOL (native) | Executed | `0x9bd03ec2…` [🐞](https://debug.barn.cow.fi/order/0x9bd03ec2cff1d6b70b0dbcb4f84dd8fb1ec280e7cb3ed2c36e5cf5983b871d0c) |
| 23:47:28 | 9 | $WIF → SOL (native) | Executed | `0xe3f84485…` [🐞](https://debug.barn.cow.fi/order/0xe3f8448559483102b1058c275aba769afe61a79c24fa7b783917959bf5b4cdf2) |
| 23:47:41 | 10 | $WIF → SOL (native) | Executed | `0x0cdba56d…` [🐞](https://debug.barn.cow.fi/order/0x0cdba56d8d29604a305ace8137e42d12fda9cca256b523d79a3c6a9a4a4c1677) |
| 23:48:09 | 8 | USDC → SOL (native) | Expired without a fill | `0x904874df…` [🐞](https://debug.barn.cow.fi/order/0x904874df81ffe33c1d3406b5c098d1fd80eb655317c3be04484e8ddef26ca71c) |
| 23:48:29 | 11 | USDC → SOL (native) | Executed | `0x482ae372…` [🐞](https://debug.barn.cow.fi/order/0x482ae37299e69b1faae7fd12b397d742a8f81d4b0be71a63c7fc796526913ed1) |
| 23:48:31 | 2 | USDC → SOL (native) | Expired without a fill | `0xd1ce520e…` [🐞](https://debug.barn.cow.fi/order/0xd1ce520e7026fb21a64bfda340a879eac5a45b75cdbbb09a902d5d74d16a2bdd) |
| 23:48:33 | 12 | JUP → SOL (native) | Executed | `0xa9380aa0…` [🐞](https://debug.barn.cow.fi/order/0xa9380aa07f701df34b6a1b9dd0279b8ce3d4e1fb503e176c672e6e783d4e235a) |
| 23:48:52 | 12 | JTO → SOL (native) | Executed | `0xa3c5e5b0…` [🐞](https://debug.barn.cow.fi/order/0xa3c5e5b0225b45538f0072e813119b198d92831b2fb382e75c1d421b8368722b) |
| 23:48:57 | 11 | USDT → SOL (native) | Executed | `0xeed34ce2…` [🐞](https://debug.barn.cow.fi/order/0xeed34ce2335b659b463feda6817dc4e71d1c51db5e5633e2d265c1c6f3bc4085) |
| 23:48:59 | 13 | USDC → SOL (native) | Executed | `0xa051292a…` [🐞](https://debug.barn.cow.fi/order/0xa051292a1dd12e77cfe95a10728e4847c1aeb9fc36774b99b7e55fa596597fca) |
| 23:49:02 | 12 | mSOL → SOL (native) | Executed | `0x86fc9ca8…` [🐞](https://debug.barn.cow.fi/order/0x86fc9ca8485e075ec08324d2f58108633d6b90fd74cb73fd3153773050fab794) |
| 23:49:15 | 13 | USDT → SOL (native) | Executed | `0x49ef86ac…` [🐞](https://debug.barn.cow.fi/order/0x49ef86ac7bfbf4031189b42da596cc03fe84f975a8da52ae3cc234b24056737d) |
| 23:49:16 | 12 | USDC → SOL (native) | Expired without a fill | `0x77249f22…` [🐞](https://debug.barn.cow.fi/order/0x77249f22cd7edfb23d8af6d8f5ea478dc211c2baae3896209abebfcbf84cf573) |
| 23:49:43 | 14 | USDC → SOL (native) | Executed | `0x73fda9d8…` [🐞](https://debug.barn.cow.fi/order/0x73fda9d813b874288c13f83cefb478cc3f7f9b69823a8db94554ffcc0883a90e) |
| 23:49:55 | 15 | USDC → SOL (native) | Executed | `0x5d79e3b5…` [🐞](https://debug.barn.cow.fi/order/0x5d79e3b5ee19b832efcfeaf139cb19aee1db9895ed783f444c527e46c010ff8d) |
| 23:50:00 | 14 | JitoSOL → SOL (native) | Expired without a fill | `0xa3d55328…` [🐞](https://debug.barn.cow.fi/order/0xa3d55328369f3e599c2689b842a4f5a11aecf7ce06a625cf6b4ea59b02aac705) |
| 23:50:13 | 16 | TRUMP → SOL (native) | Executed | `0xdfea2105…` [🐞](https://debug.barn.cow.fi/order/0xdfea21050b91bf260c0c495fcd944ab77333eccdba10fe40a74c40d75e0be931) |
| 23:50:21 | 8 | USDC → SOL (native) | Expired without a fill | `0xd411c65f…` [🐞](https://debug.barn.cow.fi/order/0xd411c65f90546884bde22dd91a42d0d534c4755ae78b56dd99977875b988ab2f) |
| 23:50:29 | 16 | Bonk → SOL (native) | Executed | `0x51540fc1…` [🐞](https://debug.barn.cow.fi/order/0x51540fc18265f7c92b13c5d71acb05de085db5781c59d4d4b0750093bbb28284) |
| 23:51:07 | 17 | mSOL → SOL (native) | Executed | `0x436b21f6…` [🐞](https://debug.barn.cow.fi/order/0x436b21f61bb1c07039e133da05eb65f3cebbe361136c3b1dbff87a284319b1b4) |
| 23:51:08 | 16 | USDC → SOL (native) | Executed | `0x861750ce…` [🐞](https://debug.barn.cow.fi/order/0x861750ce7afbeec1b90d78f38da1b572145677ae85cfdc42d42faedc32d54d0d) |
| 23:51:22 | 17 | TRUMP → SOL (native) | Executed | `0x81502c1d…` [🐞](https://debug.barn.cow.fi/order/0x81502c1d2a7ed193f7ef33aaf939be8f2655df6080b532f70cf20caaf8f71131) |
| 23:51:28 | 12 | USDC → SOL (native) | Expired without a fill | `0x461f5b8e…` [🐞](https://debug.barn.cow.fi/order/0x461f5b8e0c47f3c81c67a393f461ef66abbf3e2bb3d2e768cb98188d05d508e4) |
| 23:51:35 | 17 | POPCAT → SOL (native) | Executed | `0xa1b3ad6e…` [🐞](https://debug.barn.cow.fi/order/0xa1b3ad6ed2c7f3415be883981e8c062fc3d8d482ebbcdcaa35a569dc1dd88877) |
| 23:51:49 | 17 | Bonk → SOL (native) | Executed | `0x4589ea2e…` [🐞](https://debug.barn.cow.fi/order/0x4589ea2e00dcca1825adf9d7bcbabb635e6732259485dc3bdaa9ad42a406dc15) |
| 23:52:05 | 18 | TRUMP → SOL (native) | Executed | `0xe5f0b06c…` [🐞](https://debug.barn.cow.fi/order/0xe5f0b06ce393c41307fa2b7d9b752d98f6929f0926e324fe821335bf55d55153) |
| 23:52:12 | 14 | JitoSOL → SOL (native) | Expired without a fill | `0x2e35bec7…` [🐞](https://debug.barn.cow.fi/order/0x2e35bec797d87cf193bb960367c9050e770d9c1e38bb7198f97ecdbeb8eb4543) |
| 23:52:16 | 17 | JitoSOL → SOL (native) | Executed | `0x34900146…` [🐞](https://debug.barn.cow.fi/order/0x34900146fc2630b6c36cbd2660ee5613117e333cedb5f556705a89090e2ec360) |
| 23:52:25 | 19 | RAY → SOL (native) | Executed | `0xa95f6dc0…` [🐞](https://debug.barn.cow.fi/order/0xa95f6dc03dc071d5eb52cb5c951c166974dfa913835a2f0e0b9e10e377c17a87) |
| 23:52:33 | 8 | USDT → SOL (native) | Executed | `0x90ae9fe3…` [🐞](https://debug.barn.cow.fi/order/0x90ae9fe3e73240e9557f5d16078f9a450fe2b245076a1a9e2ccb2263e0454481) |
| 23:52:35 | 19 | TRUMP → SOL (native) | Executed | `0xaa075315…` [🐞](https://debug.barn.cow.fi/order/0xaa075315262fe1be72e3b41a5c37733ec682a08282eb4815e54005b923fb2d19) |
| 23:52:48 | 19 | USDC → SOL (native) | Expired without a fill | `0xbeb76138…` [🐞](https://debug.barn.cow.fi/order/0xbeb76138862695110c64d77d53bbfbec3c434531f6e38df1f2cb5aee6f7c81fb) |
| 23:53:08 | 8 | JitoSOL → SOL (native) | Executed | `0xf58f8b55…` [🐞](https://debug.barn.cow.fi/order/0xf58f8b55f732c715fd3eba53a8b2f9923995f59e1d39fbd55bf7ad4b6b635661) |
| 23:53:32 | 20 | JUP → SOL (native) | Expired without a fill | `0x78612e31…` [🐞](https://debug.barn.cow.fi/order/0x78612e312aeac041375c6c73c439f668257c0ce2b4cb881b2e50f34b223bec42) |
| 23:53:39 | 12 | JitoSOL → SOL (native) | Expired without a fill | `0xddbccc31…` [🐞](https://debug.barn.cow.fi/order/0xddbccc31e696af359541d18baa709ba33363d84a4f8c3dd1e7a1c96eeab099d1) |
| 23:53:47 | 21 | USDC → SOL (native) | Executed | `0xe2d216ec…` [🐞](https://debug.barn.cow.fi/order/0xe2d216ec7d539e1ac7b1fcfae13e840e36539ce3c208c5fb938e3672a746cf1f) |
| 23:54:33 | 22 | USDT → SOL (native) | Executed | `0xa81bdeb0…` [🐞](https://debug.barn.cow.fi/order/0xa81bdeb05e0fbc512af9106563693f5545479ae208a306cda97a634cb4992efc) |
| 23:54:44 | 21 | USDT → SOL (native) | Executed | `0x03297915…` [🐞](https://debug.barn.cow.fi/order/0x03297915002b2a02b5088e5613f38c125ec59478ea1a6356c81f5baf69a83fef) |
| 23:55:00 | 23 | POPCAT → SOL (native) | Expired without a fill | `0x7805739d…` [🐞](https://debug.barn.cow.fi/order/0x7805739d705dc1bdfa8a7dc3a1d50e9045c60f56460cbcb09c613cdf99f74f3d) |
| 23:55:03 | 19 | USDC → SOL (native) | Expired without a fill | `0xb4a7a554…` [🐞](https://debug.barn.cow.fi/order/0xb4a7a554f592f543e65d719411a87f46c3b664473908ff69cf7f587519df6f56) |
| 23:55:14 | 24 | USDC → SOL (native) | Executed | `0x8e305a7a…` [🐞](https://debug.barn.cow.fi/order/0x8e305a7a9e39406b4387ac6f7d5f35f39bfe02cab03374786c241933d9c81e26) |
| 23:55:46 | 20 | JUP → SOL (native) | Expired without a fill | `0x08a7e873…` [🐞](https://debug.barn.cow.fi/order/0x08a7e873309c0ea06e4ca96607fdb73c8601b3324fa9f0bde6ce81198e64a425) |
| 23:55:51 | 12 | JitoSOL → SOL (native) | Expired without a fill | `0xb17ebb13…` [🐞](https://debug.barn.cow.fi/order/0xb17ebb13e027b8d2e7021ecff85d61dda8e30a663206f275961905635203b8c8) |
| 23:55:53 | 25 | JUP → SOL (native) | Executed | `0x1f243557…` [🐞](https://debug.barn.cow.fi/order/0x1f243557a0f1b1c2e5c06b386b4faa77b463c12ce09c1e225f94a3e93e1571a7) |
| 23:57:14 | 23 | POPCAT → SOL (native) | Expired without a fill | `0x3bc4bede…` [🐞](https://debug.barn.cow.fi/order/0x3bc4bede238226ae9c80362aad14a774d5757fa40568cdd6efa24bbeba6052d6) |
| 23:57:46 | 25 | JTO → SOL (native) | Expired without a fill | `0xc16771cc…` [🐞](https://debug.barn.cow.fi/order/0xc16771cc0e84174cabc4dc4aaa120305a39567d5582c71f6ee7e48c8a05dc90a) |
| 23:57:56 | 20 | RAY → SOL (native) | Executed | `0x43695a23…` [🐞](https://debug.barn.cow.fi/order/0x43695a2317d63c69775c34944cbdbb45aed79d8c91f94fe18e40c6190c679c35) |
| 23:58:18 | 20 | Bonk → SOL (native) | Executed | `0x2edd23b0…` [🐞](https://debug.barn.cow.fi/order/0x2edd23b02eccc1d8ab772cc0ae68293c8b6082b126b80769edf36cde948fef6b) |
| 23:58:33 | 20 | USDC → SOL (native) | Expired without a fill | `0x0e9c5895…` [🐞](https://debug.barn.cow.fi/order/0x0e9c5895cf68fb648ebab94345f03a8672ae4640af321be6355fe40fab175ca1) |
| 23:59:26 | 23 | Bonk → SOL (native) | Executed | `0xb19f3312…` [🐞](https://debug.barn.cow.fi/order/0xb19f33122ac68d882edd3d0b7eb02f5a5cd3bc77fbc4fed8432bafda5ae6178e) |
| 23:59:59 | 25 | JTO → SOL (native) | Expired without a fill | `0x08c7b232…` [🐞](https://debug.barn.cow.fi/order/0x08c7b232952d0fea8a43a4444dd53efea8707d75dcbabc730b7af1f64e35368f) |
| 00:00:44 | 20 | USDC → SOL (native) | Expired without a fill | `0x6e533a04…` [🐞](https://debug.barn.cow.fi/order/0x6e533a04af98f3b894f7f1d08a309a6dd48897723fe95591c3d84689b41c3326) |
| 00:02:10 | 25 | mSOL → SOL (native) | Executed | `0xa38822ef…` [🐞](https://debug.barn.cow.fi/order/0xa38822efb997d1bdcd29ed9113635e57bc2fe3c9fdd574354b643097a5a00cef) |
| 00:02:48 | 25 | RAY → SOL (native) | Expired without a fill | `0x52f36528…` [🐞](https://debug.barn.cow.fi/order/0x52f36528c03f960ef5213a3ecafd1c0510f24533d39504bde4e863ec913d1bed) |
| 00:05:00 | 25 | RAY → SOL (native) | Expired without a fill | `0xb8a74ba6…` [🐞](https://debug.barn.cow.fi/order/0xb8a74ba67fd6e21fad68a1a7004b2f9d4e4b60a24e5ce70e802aded9c9321769) |
| 00:07:13 | 25 | USDC → SOL (native) | Expired without a fill | `0xf496d9f1…` [🐞](https://debug.barn.cow.fi/order/0xf496d9f1fc7f0fa1523ddce3edcd04425f56e22bd0bafccdc3c63f199f49b713) |
| 00:09:25 | 25 | USDC → SOL (native) | Expired without a fill | `0xc32a7b44…` [🐞](https://debug.barn.cow.fi/order/0xc32a7b445e2f4f7cc5e53272acf55d8114a87821d75c0592d7e23f2ab9bf28eb) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 132 | 60.8% |
| expired: never created on-chain (winner found, creation blockhash expired) | 72 | 33.2% |
| expired | 13 | 6.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 18s | 29s | 55s | 117s |

## Jupiter rate limiting

177 of 379 Jupiter quote attempts (46.7%) were rejected with `rate limited`. 0 orders never executed: Jupiter's quotes for them were rate limited, it never found a solution, and no other solver bid.

Orders using the most Jupiter quote attempts:

| Order | In this report | Attempts | Rate limited | Solved |
|---|---|---|---|---|
| `0xc3aed111…` [🐞](https://debug.barn.cow.fi/order/0xc3aed111af6d315487fc8867c8873a143f377b6da540ad601d493c733adc8f33) | no (older order) | 97 | 17 | 0 |
| `0x49be5011…` [🐞](https://debug.barn.cow.fi/order/0x49be5011b772808d9a3c064ca82ccbb4266113b21d742ad29b97e18b1c0c084f) | yes | 5 | 4 | 1 |
| `0xb706f901…` [🐞](https://debug.barn.cow.fi/order/0xb706f901fe4a5fc5399297d347eb2b1aefae33b501a1af6482ab3f62c7000fe2) | yes | 5 | 5 | 0 |
| `0x1646c11a…` [🐞](https://debug.barn.cow.fi/order/0x1646c11a792500b601b2de4e04df43475348767009fc909f4a08b6707b1aa1c7) | yes | 5 | 4 | 1 |
| `0x319a955c…` [🐞](https://debug.barn.cow.fi/order/0x319a955c955bd17dd7e8753f24df312f7fbf50efdf9d60bd3e821b48cc5bc275) | yes | 4 | 2 | 2 |
| `0xc0a817aa…` [🐞](https://debug.barn.cow.fi/order/0xc0a817aa2ffe2788ef0f9a47befc79a76d12c2f99d91ca7bf988e247654e7be3) | yes | 4 | 3 | 1 |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 66 | 50.0% | 66 | 86,956 | 25s |
| fractal | 50 | 37.9% | 50 | 59,732 | 10s |
| rosato | 16 | 12.1% | 16 | 84,932 | 15s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| paradox | 263 | 180 | 0 | 0.0% | 177 | 4 | 0 | 0 |
| jupiter-solve | 119 | 105 | 90 | 85.7% | 13 | 0 | 0 | 0 |
| fractal | 204 | 71 | 71 | 100.0% | 0 | 0 | 1 | 0 |
| rosato | 219 | 21 | 18 | 85.7% | 2 | 2 | 9 | 13 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 486 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 486 | 0 |
| grafiks | 0 | 0 | 0 | – | 0 | 0 | 100 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| paradox: SimulationFailed | 177 |
| jupiter-solve: SimulationFailed | 13 |
| rosato: SimulationFailed | 2 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 3
- Orders filtered for `unfunded_sell_token_account`: 486 times
- Orders filtered for `unpayable_native_buy`: 348 times
- Orders filtered for `in_flight`: 145 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| buy | 136 | 68 | 50.0% |
| sell | 81 | 64 | 79.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 64 | 29 | 45.3% |
| wSOL → Bonk | 21 | 9 | 42.9% |
| wSOL → TRUMP | 20 | 7 | 35.0% |
| wSOL → USDT | 19 | 17 | 89.5% |
| wSOL → POPCAT | 13 | 7 | 53.8% |
| wSOL → $WIF | 9 | 6 | 66.7% |
| USDC → RAY | 8 | 5 | 62.5% |
| USDC → JitoSOL | 7 | 3 | 42.9% |
| USDT → SOL (native) | 6 | 6 | 100.0% |
| USDC → SOL (native) | 5 | 5 | 100.0% |
| POPCAT → SOL (native) | 4 | 4 | 100.0% |
| Bonk → SOL (native) | 4 | 3 | 75.0% |
| USDC → JUP | 4 | 3 | 75.0% |
| USDC → mSOL | 3 | 3 | 100.0% |
| wSOL → mSOL | 3 | 2 | 66.7% |
| wSOL → RAY | 3 | 1 | 33.3% |
| USDC → JTO | 2 | 2 | 100.0% |
| wSOL → JTO | 2 | 2 | 100.0% |
| RAY → mSOL | 2 | 1 | 50.0% |
| wSOL → JitoSOL | 2 | 2 | 100.0% |
| JitoSOL → JTO | 2 | 1 | 50.0% |
| mSOL → JTO | 1 | 1 | 100.0% |
| JTO → RAY | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| JitoSOL → USDC | 1 | 1 | 100.0% |
| JTO → TRUMP | 1 | 1 | 100.0% |
| TRUMP → USDC | 1 | 1 | 100.0% |
| mSOL → POPCAT | 1 | 1 | 100.0% |
| RAY → JUP | 1 | 1 | 100.0% |
| JitoSOL → mSOL | 1 | 1 | 100.0% |
| JTO → USDC | 1 | 1 | 100.0% |
| JUP → Bonk | 1 | 1 | 100.0% |
| JitoSOL → Bonk | 1 | 1 | 100.0% |
| Bonk → USDT | 1 | 1 | 100.0% |
| USDT → JitoSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 18 | 10 | 55.6% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 15 | 12 | 80.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 12 | 9 | 75.0% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 11 | 6 | 54.5% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 11 | 4 | 36.4% |
| `EDimKwHuMtcwxxbAfQPT3EaH9CPpyTLARxLRRwiZV26v` | 10 | 1 | 10.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 10 | 5 | 50.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 10 | 6 | 60.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 9 | 7 | 77.8% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 9 | 6 | 66.7% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 9 | 4 | 44.4% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 9 | 6 | 66.7% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 9 | 7 | 77.8% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 8 | 8 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 8 | 2 | 25.0% |
| `GikSpMABHu6MJERkF3N9GMmwPXfEBxABjChVkK1W9ji4` | 8 | 5 | 62.5% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 8 | 6 | 75.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 8 | 4 | 50.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 6 | 3 | 50.0% |
| `94bjVVSp8jgvP4ivAW3wFomkRpeE3xBouyCWErsR1ANz` | 6 | 1 | 16.7% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 6 | 5 | 83.3% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 6 | 6 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 5 | 3 | 60.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 3 | 3 | 100.0% |
| `CcQdkRAXeX7seuZLmiapfpM6CVBndVrsvMe38E4Uypyg` | 3 | 3 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 72 |
| Expired without a fill | 13 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 23:29:58 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0x2ab652b9…` [🐞](https://debug.barn.cow.fi/order/0x2ab652b97f9a1352fb1ca1ad7eb7bbafe583d57eca4d05bcb0b3fa86805abd9b) |
| 23:30:01 | wSOL → USDC | buy | Expired without a fill | `0x319a955c…` [🐞](https://debug.barn.cow.fi/order/0x319a955c955bd17dd7e8753f24df312f7fbf50efdf9d60bd3e821b48cc5bc275) |
| 23:30:07 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xec7a96af…` [🐞](https://debug.barn.cow.fi/order/0xec7a96af898e6a1ea691635e2b99bf716c6613a136e8ae4e54148908860583e6) |
| 23:30:12 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0x65ea7e1c…` [🐞](https://debug.barn.cow.fi/order/0x65ea7e1ce15373526a9474a876f959df61f6cef29dcc566f921ddefe6260d0a0) |
| 23:30:14 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0xe59ee0ef…` [🐞](https://debug.barn.cow.fi/order/0xe59ee0ef87dfecb9f644931c29859acac63b8269123de229fbe111b4c240830f) |
| 23:30:18 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0x43a87f8e…` [🐞](https://debug.barn.cow.fi/order/0x43a87f8e31ba13f8bc722404c86c80ccec5084a85ff49d207a192a5dcc0dff27) |
| 23:30:21 | wSOL → POPCAT | buy | Expired without a fill | `0xf7d18e49…` [🐞](https://debug.barn.cow.fi/order/0xf7d18e49805244a31cf236eff973fb1b8f9137e0a7d9e32517363adfc42f8aa5) |
| 23:30:21 | USDC → RAY | buy | Winner too late: creation blockhash expired | `0xd67b6fd0…` [🐞](https://debug.barn.cow.fi/order/0xd67b6fd053664e21ac3a2e8453fd95a095b5940061aae14b9829262b98db99e8) |
| 23:30:23 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xb80762c0…` [🐞](https://debug.barn.cow.fi/order/0xb80762c0b15d12f403304500172d02d2f1359166799495f23ddd9613f4de85d0) |
| 23:30:24 | wSOL → POPCAT | buy | Winner too late: creation blockhash expired | `0xdac1da55…` [🐞](https://debug.barn.cow.fi/order/0xdac1da555e4cebde492a0d7606aa426b2cec8a8d676ac687fee521fce26e9433) |
| 23:30:26 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0xd3a0b599…` [🐞](https://debug.barn.cow.fi/order/0xd3a0b599509725b2fbc477f0ff9a65174830e6f1e464b94fa2828f087b991068) |
| 23:30:27 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xe704eda5…` [🐞](https://debug.barn.cow.fi/order/0xe704eda574ec7f35f155ed75b0f189097ded068ae128dac1065a75a4c558186f) |
| 23:30:37 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0x8d8977ee…` [🐞](https://debug.barn.cow.fi/order/0x8d8977eea8e8bff1406ec5045c5225b00cdb79b3bcb4c681458e7fd096ac5934) |
| 23:30:38 | wSOL → USDC | buy | Expired without a fill | `0x0622ebda…` [🐞](https://debug.barn.cow.fi/order/0x0622ebda0a23e5fd7762cf16e0c268f6aeb4386b07584eb43f0a2a8e7ff26077) |
| 23:30:42 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0xde896023…` [🐞](https://debug.barn.cow.fi/order/0xde896023a67696cd7fb257e3273e413209bab7b9c185aa85fd9c673f312a1b9c) |
| 23:30:45 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x885007e4…` [🐞](https://debug.barn.cow.fi/order/0x885007e495d1dd334ecec1e1d391943abcad3cb2ef041fa2c75f85621669a119) |
| 23:30:52 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xa345d385…` [🐞](https://debug.barn.cow.fi/order/0xa345d3850c369f223a55c2182dd4f29359610cbe9b7fa9b930d7e7cce27af1ed) |
| 23:30:59 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0xdb83dc9d…` [🐞](https://debug.barn.cow.fi/order/0xdb83dc9da91f023f5cde8a483f2efa5dcf1b4c5e0bf2265501bd8bc0b5a76629) |
| 23:31:02 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0x75d6abfd…` [🐞](https://debug.barn.cow.fi/order/0x75d6abfd3d96581f09094ba37a0a311e648e655c3ecd415a82a8726cf37c9da7) |
| 23:31:09 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xe3c70957…` [🐞](https://debug.barn.cow.fi/order/0xe3c70957dcabe89dd625dceb2b3e603d8e460ba38ab3ccd4b3ad96a7d98d7058) |
| 23:31:10 | wSOL → POPCAT | buy | Winner too late: creation blockhash expired | `0xbc6bd17c…` [🐞](https://debug.barn.cow.fi/order/0xbc6bd17c802764519bb101776e75299668849a67e0e963f52b41b6da67b57a1b) |
| 23:31:11 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0x14def430…` [🐞](https://debug.barn.cow.fi/order/0x14def430de7bb67519ebe605f4b467fd54161369f53dd9237ffc4c4521cd1e60) |
| 23:31:13 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x09c97ee1…` [🐞](https://debug.barn.cow.fi/order/0x09c97ee1f45a73a2c8a083d35563a3027bb6bf172062d93960a0958636aecfd4) |
| 23:31:23 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0xe50a221b…` [🐞](https://debug.barn.cow.fi/order/0xe50a221b94bc287195a904f432faab7d96fb0ee45db355460c2c177cb2831bbf) |
| 23:31:26 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x9e244934…` [🐞](https://debug.barn.cow.fi/order/0x9e244934e38edaaa4d5615b5cb267334cf6a003fedb8c4bfbcb8f2237bbc252e) |
| 23:31:29 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0xfea11f89…` [🐞](https://debug.barn.cow.fi/order/0xfea11f89ec8558a60ebc4864fa6ffe26bb3d047a14a0251f4a2af79bc939095c) |
| 23:31:31 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xc0646e36…` [🐞](https://debug.barn.cow.fi/order/0xc0646e36f044a56ff616e7a495875c65991fa3d9e2f16faf34cc3d2f476bb83d) |
| 23:31:38 | wSOL → USDT | sell | Winner too late: creation blockhash expired | `0xce075757…` [🐞](https://debug.barn.cow.fi/order/0xce0757573d8b1b3cfcf19f18e284d42eeb5b344c72c2dbb388d409da82f17dcd) |
| 23:31:46 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x2c9d1024…` [🐞](https://debug.barn.cow.fi/order/0x2c9d1024935c3aa5bfc5cdc2002ca296eec18c1492126b108ab35235b687cd69) |
| 23:31:48 | wSOL → TRUMP | buy | Expired without a fill | `0xf73d6e0c…` [🐞](https://debug.barn.cow.fi/order/0xf73d6e0c3289e5fc03ae60d91115f4d381a003f832d0c7764b479d90e1b7f97e) |
| 23:31:55 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xb5405c1f…` [🐞](https://debug.barn.cow.fi/order/0xb5405c1f77c04429ec3db32a24140c34fa52a6fcb0e7c27fc5b16e6c74866e76) |
| 23:32:09 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0xa9287f28…` [🐞](https://debug.barn.cow.fi/order/0xa9287f28f25687786aac034ebed3e3c0f2ce0f2d90eebedd0643e2ed4a7dc8c9) |
| 23:32:12 | wSOL → USDC | buy | Expired without a fill | `0xe5df8240…` [🐞](https://debug.barn.cow.fi/order/0xe5df8240e09c344d81d3d1c13a5c0cde3981208993ff9c0db5c114b915777af2) |
| 23:32:14 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xc0379e99…` [🐞](https://debug.barn.cow.fi/order/0xc0379e99fb1cfef408a537ec7bf40f947d7dc3fab1aa63169c0e2775ee8128f1) |
| 23:32:25 | wSOL → USDT | sell | Winner too late: creation blockhash expired | `0xdabb3558…` [🐞](https://debug.barn.cow.fi/order/0xdabb355802ca2d475f1f683ce85324c18319b67839ebf7522674885bfc9c8bfa) |
| 23:32:29 | wSOL → POPCAT | buy | Expired without a fill | `0x49be5011…` [🐞](https://debug.barn.cow.fi/order/0x49be5011b772808d9a3c064ca82ccbb4266113b21d742ad29b97e18b1c0c084f) |
| 23:32:30 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xc8b82377…` [🐞](https://debug.barn.cow.fi/order/0xc8b823776ff0ef4747a118f5b06cdf7bbab4beaa7079b08d158c113c59b41ff2) |
| 23:32:36 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0x31edda42…` [🐞](https://debug.barn.cow.fi/order/0x31edda422dd2d37fc15fad13289f0ed0728ef64004ce1233851d804b2f4362f0) |
| 23:32:39 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x2961b587…` [🐞](https://debug.barn.cow.fi/order/0x2961b587da1ef944b08101e73ef38908c36bfbf9368c06bf5572d64af8521e8d) |
| 23:32:47 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x2e075178…` [🐞](https://debug.barn.cow.fi/order/0x2e0751788029a08fee0b10783ac929765533d21944a2a31f52ba1ccafa222506) |
| 23:32:53 | wSOL → $WIF | buy | Expired without a fill | `0xb706f901…` [🐞](https://debug.barn.cow.fi/order/0xb706f901fe4a5fc5399297d347eb2b1aefae33b501a1af6482ab3f62c7000fe2) |
| 23:33:16 | USDC → RAY | buy | Winner too late: creation blockhash expired | `0x7f7e5298…` [🐞](https://debug.barn.cow.fi/order/0x7f7e5298f13dcc70f90129fdf4dab5b0344ecd610388792d2b527eac4d961feb) |
| 23:33:19 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xefe70e4f…` [🐞](https://debug.barn.cow.fi/order/0xefe70e4ff51bbb43f3f54b462d0629b0384399c558b105817cb732a61b9b1bdd) |
| 23:33:21 | USDC → JitoSOL | buy | Winner too late: creation blockhash expired | `0xda41ed35…` [🐞](https://debug.barn.cow.fi/order/0xda41ed35a240c7d947bc2021a8aaf198fbcba7ab83d73560a27e6d4fde43d90e) |
| 23:33:27 | RAY → mSOL | sell | Winner too late: creation blockhash expired | `0xd104e6b0…` [🐞](https://debug.barn.cow.fi/order/0xd104e6b088a2751b661554c637e06c306940eb511d9b2ed08e7c32711983eb84) |
| 23:33:32 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xd7759770…` [🐞](https://debug.barn.cow.fi/order/0xd7759770454b1277a1360efcc875a584a76c17d52e2af9afab33b4f53e9cf15e) |
| 23:33:33 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xfbb73bf8…` [🐞](https://debug.barn.cow.fi/order/0xfbb73bf82494f9e8ea7e64879845e0b46baf48eeff64c01f5878ac904d2bfd4f) |
| 23:33:45 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xed52f8a6…` [🐞](https://debug.barn.cow.fi/order/0xed52f8a6501414af047311a7983e82a0aff8661e744492145219dd13ed35f54b) |
| 23:34:00 | wSOL → TRUMP | buy | Expired without a fill | `0x6af20f78…` [🐞](https://debug.barn.cow.fi/order/0x6af20f78be5d92889d7f211853a565ba3d7725fab9bfb56fbebb8b4c7760d03b) |
| 23:34:02 | USDC → RAY | buy | Winner too late: creation blockhash expired | `0x56d53eb1…` [🐞](https://debug.barn.cow.fi/order/0x56d53eb1a873afee64489c1d2ee4f0f956b6b3f75e044d643288e28847fdd47f) |
| 23:34:05 | wSOL → Bonk | buy | Expired without a fill | `0x86e683ef…` [🐞](https://debug.barn.cow.fi/order/0x86e683ef421ba0d38baeae55cbc6bbd853c243065df04eb45c7b4670b2ef5a0d) |
| 23:34:06 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xc86eb715…` [🐞](https://debug.barn.cow.fi/order/0xc86eb7159fd918e9cc004f7d466a1e769db6c0a8891c54d206406550361718e0) |
| 23:34:07 | USDC → JitoSOL | buy | Winner too late: creation blockhash expired | `0xa77ecd5a…` [🐞](https://debug.barn.cow.fi/order/0xa77ecd5a234f35ebbcf6a7b417210b81d4ffe2331833448be1bcdff6599f3b73) |
| 23:34:18 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x489c8514…` [🐞](https://debug.barn.cow.fi/order/0x489c85144f751678870d6aeb50a5539e7a18660ffe6ce025bf28a98201eda346) |
| 23:34:19 | wSOL → Bonk | buy | Expired without a fill | `0x1646c11a…` [🐞](https://debug.barn.cow.fi/order/0x1646c11a792500b601b2de4e04df43475348767009fc909f4a08b6707b1aa1c7) |
| 23:34:24 | wSOL → mSOL | buy | Winner too late: creation blockhash expired | `0x68c6d862…` [🐞](https://debug.barn.cow.fi/order/0x68c6d8623323f338164cd4db9ed3679a4f1a0ed4955fe2789a031677a651b05c) |
| 23:34:30 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xc6b9cff1…` [🐞](https://debug.barn.cow.fi/order/0xc6b9cff15419d42804608a16815a3b7fb4cee4160c7ecfbc131b205aa81a3ad3) |
| 23:34:31 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0xced850aa…` [🐞](https://debug.barn.cow.fi/order/0xced850aa6552811833ccbacb664137f4ecb43466507a3d4c76a7831f92cebd1d) |
| 23:34:47 | wSOL → RAY | buy | Winner too late: creation blockhash expired | `0x5438c7cb…` [🐞](https://debug.barn.cow.fi/order/0x5438c7cba94df407a14bdf103ee0d19d215cf32d237f9f8623bf1e801d894785) |
| 23:34:48 | wSOL → POPCAT | buy | Winner too late: creation blockhash expired | `0xe35a94e0…` [🐞](https://debug.barn.cow.fi/order/0xe35a94e0ddbbacad33043b4075cb0a1aabb9d1b43888579cde96593e1c88d47a) |
| 23:34:50 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xd37d1d1d…` [🐞](https://debug.barn.cow.fi/order/0xd37d1d1d02478e3fe5b186cdeea57ac325f3b4a8141184e2b16a5aa1452d6014) |
| 23:35:05 | wSOL → $WIF | buy | Expired without a fill | `0xe470c3f0…` [🐞](https://debug.barn.cow.fi/order/0xe470c3f0db4ade00999038eda25b16e418ccec9abb346afb38d64f44eece07be) |
| 23:35:06 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x93997af8…` [🐞](https://debug.barn.cow.fi/order/0x93997af8983614ec94df42bf027b9096159fac0eb38f7115b68dc5a41109bee6) |
| 23:35:08 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xc0d80d49…` [🐞](https://debug.barn.cow.fi/order/0xc0d80d4929fcd7a7c244210523d4a9614eb34917fc712ab0b89dffbd2ca46937) |
| 23:35:13 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0xbf1db30b…` [🐞](https://debug.barn.cow.fi/order/0xbf1db30b956a6ad69306dc60217145d2fad7056acb891859f613dfd4cf1b3da6) |
| 23:35:14 | JitoSOL → JTO | sell | Winner too late: creation blockhash expired | `0xee44e840…` [🐞](https://debug.barn.cow.fi/order/0xee44e8400a96172e1692f070b10809c8c9afd349a1cac4e2c41dc358975192af) |
| 23:35:32 | wSOL → RAY | buy | Winner too late: creation blockhash expired | `0xd66c85fe…` [🐞](https://debug.barn.cow.fi/order/0xd66c85fecb8c2ad73cc3aa5a43a74342e4b8fb5a03867f7d7eeac711b5cfdfc8) |
| 23:35:35 | wSOL → POPCAT | buy | Winner too late: creation blockhash expired | `0xbca72830…` [🐞](https://debug.barn.cow.fi/order/0xbca728308c097ed19681d26dfbd22d97d62d78cb469acb2498fbe117734f0584) |
| 23:35:37 | USDC → JitoSOL | buy | Winner too late: creation blockhash expired | `0xfd277b10…` [🐞](https://debug.barn.cow.fi/order/0xfd277b10c12503e4e973c39a366ca5f4e953df1d1bcc49c058eac6b3e2091994) |
| 23:35:38 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xb599fde7…` [🐞](https://debug.barn.cow.fi/order/0xb599fde757693852690c7140115a72820273be103b09dee91a0269e1415018fb) |
| 23:35:56 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xe04d1ad3…` [🐞](https://debug.barn.cow.fi/order/0xe04d1ad34cff05a23afcc9e0e1217e10eb4b4a5ac13cb3ff5f9d2d678c52fd9d) |
| 23:35:59 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0xe138509c…` [🐞](https://debug.barn.cow.fi/order/0xe138509c78edf1c3e08978381fa8209ceca450132b6f3fdbbcd07802ec906f56) |
| 23:36:03 | USDC → JUP | buy | Winner too late: creation blockhash expired | `0xcee5513a…` [🐞](https://debug.barn.cow.fi/order/0xcee5513a126397b969c801e1c9045f8249e3db30d38702d039c18c19697b2386) |
| 23:36:12 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0xfaea48f1…` [🐞](https://debug.barn.cow.fi/order/0xfaea48f183701f9a67cec233f4f2c5d1247264a1f9621a6f9b9d26abb4dd5d07) |
| 23:36:23 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xbdae3689…` [🐞](https://debug.barn.cow.fi/order/0xbdae3689532b70bb0505409eb4567d22e3ee2c9cb266192b68a6b093f7c38624) |
| 23:36:26 | USDC → JitoSOL | buy | Expired without a fill | `0x009efe49…` [🐞](https://debug.barn.cow.fi/order/0x009efe49eb6c0b9515f3594e6c891b700075b44d7a456668c31b7169d829c65a) |
| 23:36:28 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0xd3a744c9…` [🐞](https://debug.barn.cow.fi/order/0xd3a744c95e7cbc37fec77795d0341f22a691b293a53b5882b6393ec52ecfe413) |
| 23:36:33 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xdad3054c…` [🐞](https://debug.barn.cow.fi/order/0xdad3054cb2d45b56934da2855024a9338c6197c92bc17321f930aeb986783b7a) |
| 23:37:00 | wSOL → Bonk | buy | Winner too late: creation blockhash expired | `0x8f1d2811…` [🐞](https://debug.barn.cow.fi/order/0x8f1d2811268e361c3b589d31ae60fd9016f97595e7061787e0e9ee54d3eb6eab) |
| 23:37:01 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x92b30ec6…` [🐞](https://debug.barn.cow.fi/order/0x92b30ec6148f6b4d786b6432bdc9e6f379b8917ed13b193bad91b601deff3942) |
| 23:37:16 | wSOL → TRUMP | buy | Winner too late: creation blockhash expired | `0xd24b37bc…` [🐞](https://debug.barn.cow.fi/order/0xd24b37bcf58ac1c42671ac7fe6654bdfe53a4c5a9899664a373756dccac0e722) |
| 23:37:19 | wSOL → USDC | buy | Expired without a fill | `0x4e849ba5…` [🐞](https://debug.barn.cow.fi/order/0x4e849ba54684c76d90a6b28b60f5ee8a56e9939a773ebd47246dbc3a86c88e97) |
| 23:37:45 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xa72d3798…` [🐞](https://debug.barn.cow.fi/order/0xa72d3798a1d910fa67fd7f759ca60d62c29139e2721b22ac37ef60621f739c28) |
| 23:38:03 | wSOL → $WIF | buy | Winner too late: creation blockhash expired | `0xd467a47d…` [🐞](https://debug.barn.cow.fi/order/0xd467a47de602b90b14b71261f5cc43dc052b4ab08724c5b83f0a7727bf6b03ab) |
| 23:40:12 | Bonk → SOL (native) | sell | Winner too late: creation blockhash expired | `0x3fe5d4c2…` [🐞](https://debug.barn.cow.fi/order/0x3fe5d4c2cc0efcfdc1284688628517cd933aea2f89b4c5302e463815282032c3) |
