# Solana QoS report: 2026-10-05-19-14-stress-25x6

Barn, orders created between `2026-10-05T19:15:12.408Z` and `2026-10-05T19:37:15.589Z`. Data fetched 2026-10-05T19:44:09+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 172 |
| Orders executed | **168** (97.7%) |
| Sponsored orders never created on-chain | 2 (1.2%) |
| Traders | 25 |
| Settlement txs | 168 |

## Scenario

141 of 141 scenario rows completed. 6 retries, 5 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 19:15:13 | 1 | 22 | sell 0.00428 SOL → USDT | filled | 11s | 1 |  |
| 19:15:22 | 2 | 7 | buy 120000 BONK ← SOL | filled | 19s | 1 |  |
| 19:15:23 | 3 | 4 | buy 0.00256 mSOL ← USDC | filled | 109s | 3 |  |
| 19:15:23 | 4 | 21 | sell 0.0036 SOL → USDC | filled | 28s | 1 |  |
| 19:15:27 | 5 | 19 | buy 0.225 RAY ← USDC | filled | 35s | 2 |  |
| 19:15:32 | 6 | 24 | sell 0.0036 SOL → USDC | filled | 17s | 1 |  |
| 19:15:33 | 7 | 6 | buy 120000 BONK ← SOL | filled | 17s | 1 |  |
| 19:15:34 | 8 | 10 | buy 0.206 TRUMP ← SOL | filled | 30s | 1 |  |
| 19:15:35 | 9 | 14 | buy 0.00276 JitoSOL ← USDC | filled | 46s | 2 |  |
| 19:15:37 | 10 | 23 | buy 0.206 TRUMP ← SOL | filled | 18s | 1 |  |
| 19:15:38 | 11 | 9 | buy 8.15 POPCAT ← SOL | filled | 43s | 1 |  |
| 19:15:40 | 12 | 25 | buy 0.835 JTO ← USDC | filled | 41s | 2 |  |
| 19:15:42 | 13 | 8 | buy 1.37 JUP ← USDC | filled | 60s | 2 |  |
| 19:15:51 | 14 | 21 | sell 0.0036 SOL → USDC | filled | 37s | 1 |  |
| 19:15:44 | 15 | 1 | buy 8.15 POPCAT ← SOL | filled | 18s | 1 |  |
| 19:15:45 | 16 | 18 | buy 120000 BONK ← SOL | filled | 36s | 1 |  |
| 19:15:45 | 17 | 20 | buy 0.00256 mSOL ← USDC | filled | 52s | 2 |  |
| 19:16:02 | 18 | 19 | buy 0.835 JTO ← USDC | filled | 63s | 2 |  |
| 19:15:50 | 19 | 15 | sell 0.00492 SOL → USDC | filled | 31s | 1 |  |
| 19:15:53 | 20 | 22 | sell 0.0036 SOL → USDT | filled | 28s | 1 |  |
| 19:15:54 | 21 | 16 | buy 120000 BONK ← SOL | filled | 28s | 1 |  |
| 19:15:57 | 22 | 17 | buy 0.206 TRUMP ← SOL | filled | 25s | 1 |  |
| 19:15:58 | 23 | 2 | buy 0.225 RAY ← USDC | filled | 60s | 2 |  |
| 19:16:03 | 24 | 12 | buy 0.00256 mSOL ← USDC | filled | 100s | 3 |  |
| 19:16:04 | 25 | 6 | buy 120000 BONK ← SOL | filled | 31s | 1 |  |
| 19:16:05 | 26 | 13 | sell 0.00428 SOL → USDT | filled | 36s | 1 |  |
| 19:16:08 | 27 | 5 | sell 0.0036 SOL → USDC | filled | 45s | 1 |  |
| 19:16:08 | 28 | 11 | sell 0.0036 SOL → USDT | filled | 40s | 1 |  |
| 19:16:28 | 29 | 21 | sell 0.0036 SOL → USDT | filled | 30s | 1 |  |
| 19:16:09 | 30 | 3 | sell 0.00493 SOL → USDC | filled | 26s | 1 |  |
| 19:16:21 | 31 | 25 | sell 0.798 JTO → RAY | filled | 16s | 1 |  |
| 19:16:21 | 32 | 22 | sell 0.0036 SOL → USDT | filled | 31s | 1 |  |
| 19:16:22 | 33 | 16 | buy 0.206 TRUMP ← SOL | filled | 19s | 1 |  |
| 19:16:41 | 34 | 8 | buy 0.00276 JitoSOL ← USDC | filled | 40s | 2 |  |
| 19:16:23 | 35 | 23 | sell 0.174 TRUMP → SOL | filled | 18s | 1 |  |
| 19:16:25 | 36 | 17 | buy 0.206 TRUMP ← SOL | filled | 21s | 1 |  |
| 19:16:27 | 37 | 9 | sell 7.18 POPCAT → SOL | filled | 13s | 1 |  |
| 19:16:53 | 38 | 5 | sell 0.0036 SOL → USDC | filled | 98s | 2 |  |
| 19:16:58 | 39 | 21 | sell 0.00437 SOL → USDC | filled | 13s | 1 |  |
| 19:16:35 | 40 | 3 | sell 0.478 USDC → SOL | filled | 13s | 1 |  |
| 19:17:05 | 41 | 19 | sell 0.822 JTO → TRUMP | filled | 15s | 1 |  |
| 19:17:12 | 42 | 4 | sell 0.00237 mSOL → POPCAT | filled | 17s | 1 |  |
| 19:17:22 | 43 | 8 | sell 0.00267 JitoSOL → JTO | filled | 13s | 1 |  |
| 19:16:43 | 44 | 23 | buy 8.15 POPCAT ← SOL | filled | 16s | 1 |  |
| 19:16:47 | 45 | 9 | buy 120000 BONK ← SOL | filled | 18s | 1 |  |
| 19:18:31 | 46 | 5 | sell 0.642 USDC → SOL | filled | 26s | 1 |  |
| 19:16:52 | 47 | 22 | sell 0.908 USDT → SOL | filled | 21s | 1 |  |
| 19:16:50 | 48 | 25 | sell 0.201 RAY → mSOL | filled | 16s | 1 |  |
| 19:17:43 | 49 | 12 | sell 0.00215 mSOL → JTO | filled | 14s | 1 |  |
| 19:16:54 | 50 | 7 | buy 8.15 POPCAT ← SOL | filled | 28s | 1 |  |
| 19:17:03 | 51 | 3 | sell 0.0036 SOL → USDT | filled | 18s | 1 |  |
| 19:17:07 | 52 | 9 | buy 1.75 WIF ← SOL | filled | 27s | 1 |  |
| 19:17:11 | 53 | 21 | sell 0.0036 SOL → USDT | filled | 17s | 1 |  |
| 19:17:10 | 54 | 10 | sell 0.182 TRUMP → USDC | filled | 12s | 1 |  |
| 19:17:10 | 55 | 24 | sell 0.385 USDC → SOL | filled | 14s | 1 |  |
| 19:17:11 | 56 | 6 | buy 1.75 WIF ← SOL | filled | 17s | 1 |  |
| 19:17:57 | 57 | 12 | buy 0.225 RAY ← USDC | filled | 37s | 2 |  |
| 19:17:20 | 58 | 20 | buy 0.225 RAY ← USDC | filled | 31s | 2 |  |
| 19:18:57 | 59 | 5 | sell 0.0036 SOL → USDC | filled | 28s | 1 |  |
| 19:17:30 | 60 | 10 | buy 120000 BONK ← SOL | filled | 16s | 1 |  |
| 19:17:31 | 61 | 6 | buy 120000 BONK ← SOL | filled | 19s | 1 |  |
| 19:17:31 | 62 | 21 | sell 0.00377 SOL → USDT | filled | 14s | 1 |  |
| 19:17:33 | 63 | 23 | sell 7.4 POPCAT → SOL | filled | 14s | 1 |  |
| 19:17:51 | 64 | 20 | buy 0.00276 JitoSOL ← USDC | filled | 37s | 2 |  |
| 19:17:43 | 65 | 9 | buy 8.15 POPCAT ← SOL | filled | 19s | 1 |  |
| 19:17:49 | 66 | 2 | sell 0.191 RAY → JitoSOL | filled | 17s | 1 |  |
| 19:17:50 | 67 | 10 | buy 1.75 WIF ← SOL | filled | 22s | 1 |  |
| 19:17:51 | 68 | 22 | sell 0.0036 SOL → USDT | filled | 21s | 1 |  |
| 19:17:54 | 69 | 8 | buy 0.835 JTO ← USDC | filled | 45s | 2 |  |
| 19:17:58 | 70 | 16 | buy 120000 BONK ← SOL | filled | 18s | 1 |  |
| 19:18:01 | 71 | 7 | sell 7.74 POPCAT → SOL | filled | 16s | 1 |  |
| 19:18:02 | 72 | 17 | buy 0.206 TRUMP ← SOL | filled | 21s | 1 |  |
| 19:18:06 | 73 | 11 | sell 0.00447 SOL → USDT | filled | 17s | 1 |  |
| 19:19:25 | 74 | 5 | sell 0.0036 SOL → USDC | filled | 29s | 1 |  |
| 19:18:09 | 75 | 2 | buy 0.00256 mSOL ← USDC | filled | 43s | 2 |  |
| 19:18:13 | 76 | 21 | sell 0.00474 SOL → USDT | filled | 27s | 1 |  |
| 19:18:39 | 77 | 8 | sell 1.34 JTO → USDC | filled | 20s | 1 |  |
| 19:18:27 | 78 | 20 | buy 1.37 JUP ← USDC | filled | 37s | 2 |  |
| 19:18:20 | 79 | 24 | sell 0.00445 SOL → USDC | filled | 15s | 1 |  |
| 19:18:21 | 80 | 1 | sell 7.26 POPCAT → SOL | filled | 21s | 1 |  |
| 19:18:34 | 81 | 12 | buy 0.225 RAY ← USDC | filled | 36s | 2 |  |
| 19:18:23 | 82 | 17 | buy 0.00276 JitoSOL ← SOL | filled | 18s | 1 |  |
| 19:18:26 | 83 | 11 | sell 0.7 USDT → SOL | filled | 31s | 1 |  |
| 19:18:30 | 84 | 3 | sell 0.399 USDT → SOL | filled | 23s | 1 |  |
| 19:18:30 | 85 | 15 | sell 0.478 USDC → SOL | filled | 21s | 1 |  |
| 19:18:42 | 86 | 1 | buy 0.206 TRUMP ← SOL | filled | 28s | 1 |  |
| 19:18:59 | 87 | 8 | sell 0.66 USDC → JitoSOL | filled | 16s | 1 |  |
| 19:19:11 | 88 | 12 | buy 0.00276 JitoSOL ← USDC | filled | 79s | 3 |  |
| 19:18:42 | 89 | 17 | buy 8.15 POPCAT ← SOL | filled | 15s | 1 |  |
| 19:18:49 | 90 | 16 | sell 172000 BONK → SOL | filled | 16s | 1 |  |
| 19:18:53 | 91 | 3 | sell 0.00396 SOL → USDT | filled | 14s | 1 |  |
| 19:18:51 | 92 | 6 | sell 1.71 WIF → SOL | filled | 16s | 1 |  |
| 19:18:56 | 93 | 13 | sell 0.0036 SOL → USDC | filled | 12s | 1 |  |
| 19:18:58 | 94 | 21 | sell 1.25 USDC → SOL | filled | 16s | 1 |  |
| 19:19:01 | 95 | 4 | buy 0.237 RAY ← USDC | filled | 30s | 2 |  |
| 19:19:15 | 96 | 8 | sell 0.00351 JitoSOL → BONK | filled | 16s | 1 |  |
| 19:19:01 | 97 | 15 | sell 0.0036 SOL → USDC | filled | 13s | 1 |  |
| 19:19:02 | 98 | 17 | buy 0.00256 mSOL ← SOL | filled | 17s | 1 |  |
| 19:19:02 | 99 | 23 | buy 120000 BONK ← SOL | filled | 17s | 1 |  |
| 19:19:06 | 100 | 14 | sell 0.00267 JitoSOL → USDC | filled | 15s | 1 |  |
| 19:19:54 | 101 | 5 | sell 0.744 USDC → SOL | filled | 16s | 1 |  |
| 19:19:07 | 102 | 22 | sell 0.0036 SOL → USDC | filled | 30s | 1 |  |
| 19:19:09 | 103 | 11 | sell 0.0036 SOL → USDT | filled | 16s | 1 |  |
| 19:19:16 | 104 | 13 | sell 0.0036 SOL → USDC | filled | 16s | 1 |  |
| 19:19:31 | 105 | 8 | sell 148000 BONK → USDT | filled | 35s | 2 |  |
| 19:20:30 | 106 | 12 | sell 0.372 RAY → JUP | filled | 15s | 1 |  |
| 19:19:21 | 107 | 16 | sell 0.172 TRUMP → USDC | filled | 17s | 1 |  |
| 19:19:22 | 108 | 17 | buy 0.206 TRUMP ← SOL | filled | 16s | 1 |  |
| 19:19:23 | 109 | 9 | buy 120000 BONK ← SOL | filled | 23s | 1 |  |
| 19:19:37 | 110 | 22 | sell 0.54 USDT → SOL | filled | 16s | 1 |  |
| 19:19:29 | 111 | 24 | sell 0.0036 SOL → USDC | filled | 23s | 1 |  |
| 19:19:30 | 112 | 10 | buy 1.75 WIF ← SOL | filled | 22s | 1 |  |
| 19:20:45 | 113 | 12 | sell 0.00246 JitoSOL → mSOL | filled | 14s | 1 |  |
| 19:19:41 | 114 | 18 | sell 103000 BONK → USDC | filled | 25s | 1 |  |
| 19:19:42 | 115 | 16 | buy 8.15 POPCAT ← SOL | filled | 18s | 1 |  |
| 19:19:45 | 116 | 7 | buy 1.75 WIF ← SOL | filled | 15s | 1 |  |
| 19:19:49 | 117 | 2 | buy 1.37 JUP ← USDC | filled | 31s | 2 |  |
| 19:19:52 | 118 | 22 | sell 0.0036 SOL → USDT | filled | 14s | 1 |  |
| 19:19:55 | 119 | 9 | buy 1.75 WIF ← SOL | filled | 17s | 1 |  |
| 19:20:01 | 120 | 3 | sell 0.369 USDT → SOL | filled | 17s | 1 |  |
| 19:20:59 | 121 | 12 | buy 1.37 JUP ← USDC | filled | 41s | 2 |  |
| 19:20:10 | 122 | 6 | sell 272000 BONK → SOL | filled | 11s | 1 |  |
| 19:20:15 | 123 | 9 | sell 179000 BONK → SOL | filled | 11s | 1 |  |
| 19:20:19 | 124 | 18 | buy 0.206 TRUMP ← SOL | filled | 12s | 1 |  |
| 19:20:21 | 125 | 3 | sell 0.0036 SOL → USDT | filled | 17s | 1 |  |
| 19:20:21 | 126 | 8 | buy 0.00256 mSOL ← USDC | filled | 35s | 2 |  |
| 19:20:29 | 127 | 13 | sell 0.0036 SOL → USDT | filled | 14s | 1 |  |
| 19:20:29 | 128 | 19 | buy 1.37 JUP ← USDC | filled | 26s | 2 |  |
| 19:20:38 | 129 | 20 | sell 1.2 JUP → BONK | filled | 18s | 1 |  |
| 19:20:39 | 130 | 11 | sell 0.514 USDT → SOL | filled | 22s | 1 |  |
| 19:20:41 | 131 | 24 | sell 0.00419 SOL → USDC | filled | 14s | 1 |  |
| 19:20:47 | 132 | 25 | buy 1.37 JUP ← USDC | filled | 36s | 2 |  |
| 19:21:00 | 133 | 4 | buy 0.225 RAY ← USDC | filled | 32s | 2 |  |
| 19:21:00 | 134 | 6 | buy 1.75 WIF ← SOL | filled | 16s | 1 |  |
| 19:21:04 | 135 | 8 | sell 0.493 USDT → JitoSOL | filled | 25s | 1 |  |
| 19:21:04 | 136 | 13 | sell 0.726 USDC → SOL | filled | 17s | 1 |  |
| 19:21:05 | 137 | 11 | sell 0.0036 SOL → USDC | filled | 29s | 1 |  |
| 19:21:07 | 138 | 9 | buy 8.15 POPCAT ← SOL | filled | 22s | 1 |  |
| 19:21:07 | 139 | 16 | buy 0.206 TRUMP ← SOL | filled | 20s | 1 |  |
| 19:21:07 | 140 | 17 | buy 120000 BONK ← SOL | filled | 22s | 1 |  |
| 19:21:10 | 141 | 2 | buy 0.892 JTO ← USDC | filled | 30s | 2 |  |

Scenario orders: 172 (142 main, 30 acquire). Cleanup placed 82 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 19:21:43 | 1 | TRUMP → SOL (native) | Executed | `0x667e7ebc…` [🐞](https://debug.barn.cow.fi/order/0x667e7ebcae8eeb59f3094e3f3028e736eb5a65aaa99c431a42c7eb5c88216c3e) |
| 19:21:44 | 2 | JUP → SOL (native) | Executed | `0x043c5401…` [🐞](https://debug.barn.cow.fi/order/0x043c540102fcdf046969be26df6377b260d3fd15c5af6a76e076d245ecbbd738) |
| 19:21:45 | 3 | USDC → SOL (native) | Executed | `0xd11ed6e4…` [🐞](https://debug.barn.cow.fi/order/0xd11ed6e4f17b0361867a8c0b7c740540055e70c781a340f8ae9595d183b1e868) |
| 19:21:46 | 4 | mSOL → SOL (native) | Executed | `0x7c2dd464…` [🐞](https://debug.barn.cow.fi/order/0x7c2dd4641d394ebdb263bfa96cc574254a2e0ff3db3ee81310b0659932cfc0d3) |
| 19:21:48 | 5 | USDC → SOL (native) | Executed | `0xf5215031…` [🐞](https://debug.barn.cow.fi/order/0xf5215031402b9f3974c78f6315498ee668fb62f0ab0cf6eadd7f83670a23cd17) |
| 19:21:53 | 1 | POPCAT → SOL (native) | Executed | `0x26adff39…` [🐞](https://debug.barn.cow.fi/order/0x26adff395158313c1ada9f1a167fb16e78517e34acb20b92d6dd6d8d0f034a46) |
| 19:21:56 | 2 | JTO → SOL (native) | Executed | `0x0c4f2b2e…` [🐞](https://debug.barn.cow.fi/order/0x0c4f2b2e5dd9639b423070d8b66358b21aef8e92208471fe709a4b5e040405a8) |
| 19:22:08 | 2 | mSOL → SOL (native) | Executed | `0xf0989d9b…` [🐞](https://debug.barn.cow.fi/order/0xf0989d9bfac28d65ef6783e33056684d5268527f7a73487b671dcfd6628c83a9) |
| 19:22:09 | 3 | USDT → SOL (native) | Executed | `0x19750b95…` [🐞](https://debug.barn.cow.fi/order/0x19750b958fb18a051244398603d960d39a6c0e8cc9897140050828e4705e62d8) |
| 19:22:24 | 2 | RAY → SOL (native) | Executed | `0x9a4578ff…` [🐞](https://debug.barn.cow.fi/order/0x9a4578fffb238d3e399ffc936485c261817ca7a9b64c9be93c9b34701116dae3) |
| 19:22:36 | 2 | USDC → SOL (native) | Executed | `0x57f5cea9…` [🐞](https://debug.barn.cow.fi/order/0x57f5cea977fb497d6ad1021b06371fb3a37297163ea4e3c63232ff643f8c068e) |
| 19:22:48 | 2 | JitoSOL → SOL (native) | Executed | `0xd3bac39b…` [🐞](https://debug.barn.cow.fi/order/0xd3bac39be33a643b9d7adc4aa90a0a30b6d3382a00957b1f187dcf0648e2ae9e) |
| 19:22:52 | 4 | RAY → SOL (native) | Executed | `0x06e30008…` [🐞](https://debug.barn.cow.fi/order/0x06e30008b466bcf8ec3799bbfd0608b3057970058c0387f44be21465921819e6) |
| 19:23:07 | 4 | POPCAT → SOL (native) | Executed | `0x2e0369dd…` [🐞](https://debug.barn.cow.fi/order/0x2e0369dd587f9f059dbf48ccc1f92c9be06caf1a6d5a2a907a8d1962cc624b6f) |
| 19:23:19 | 6 | Bonk → SOL (native) | Executed | `0x97a3c9c7…` [🐞](https://debug.barn.cow.fi/order/0x97a3c9c76ec0fabbadfefd9d27af5b2d670e338c427275fbc0869c6af88eda35) |
| 19:23:23 | 4 | USDC → SOL (native) | Executed | `0xe95cdfcf…` [🐞](https://debug.barn.cow.fi/order/0xe95cdfcf11b841aef706969aacbca19cc50132f2d6b4df115a901e63e7b7591a) |
| 19:23:26 | 7 | POPCAT → SOL (native) | Executed | `0x745103c3…` [🐞](https://debug.barn.cow.fi/order/0x745103c3f35774347722ed31e8bd2e6b51e412a6d44014baac20da4533a2357b) |
| 19:23:35 | 7 | Bonk → SOL (native) | Executed | `0xd18c4c1f…` [🐞](https://debug.barn.cow.fi/order/0xd18c4c1f641c6133ed8db6c5c0ed78897fad4194ebabaf50022037064c77b66d) |
| 19:23:39 | 6 | $WIF → SOL (native) | Executed | `0x70cf1c7b…` [🐞](https://debug.barn.cow.fi/order/0x70cf1c7b2d7d4b638fee4a01a4612f2b60824e40da15cd335bced209889fb728) |
| 19:23:49 | 7 | $WIF → SOL (native) | Executed | `0x515dffe8…` [🐞](https://debug.barn.cow.fi/order/0x515dffe8261c6b1686f98f6a77b6ad82e2ec8cd00ccb59d693a10ee5b02fe24e) |
| 19:24:08 | 6 | USDC → SOL (native) | Executed | `0xdc6170f4…` [🐞](https://debug.barn.cow.fi/order/0xdc6170f4ada95877415bc1525e184ae4c9713c0bf09f7ba5ad5cccbccdde4801) |
| 19:24:49 | 8 | JUP → SOL (native) | Executed | `0x18aff8d0…` [🐞](https://debug.barn.cow.fi/order/0x18aff8d019fd1cdb334b1d6ae34df9e5a8849bae70992c661f320cbf1dc862ad) |
| 19:25:04 | 8 | JTO → SOL (native) | Executed | `0x25e2a5ae…` [🐞](https://debug.barn.cow.fi/order/0x25e2a5ae0a09a813b78e4c3e57a804b4f9004536f52eda380a00d838379dbb05) |
| 19:25:13 | 9 | POPCAT → SOL (native) | Executed | `0xfb76b0aa…` [🐞](https://debug.barn.cow.fi/order/0xfb76b0aa2d7990f3ff8bb381aab5eefdd801c950951bd38dedc8f073c9c035fa) |
| 19:25:17 | 10 | TRUMP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd10eaa69…` [🐞](https://debug.barn.cow.fi/order/0xd10eaa69c8085498c84373cd0b1ea150e63564a5878ef96f46aa1114cea5ad9c) |
| 19:25:19 | 8 | mSOL → SOL (native) | Executed | `0x7fd8e2a5…` [🐞](https://debug.barn.cow.fi/order/0x7fd8e2a57e704922fd516dd619aff64310339c35f3a1121f93bc6993895af3f2) |
| 19:25:24 | 9 | Bonk → SOL (native) | Executed | `0x38157efa…` [🐞](https://debug.barn.cow.fi/order/0x38157efa79a28f2eb43ffccadfa5a45e60c1c6f32bd2625f1d80f3ee9cbc34b8) |
| 19:25:35 | 8 | USDC → SOL (native) | Executed | `0x145a1f06…` [🐞](https://debug.barn.cow.fi/order/0x145a1f06cf3f6e255d872a770037b21d37e87c971bab95086e99358eab1df5f7) |
| 19:25:39 | 9 | $WIF → SOL (native) | Executed | `0xbb80e9ce…` [🐞](https://debug.barn.cow.fi/order/0xbb80e9ce2366a406a414545faaed8eee58f07c1a72f86853ffec4ee2b511186c) |
| 19:25:40 | 11 | USDC → SOL (native) | Executed | `0x550a5334…` [🐞](https://debug.barn.cow.fi/order/0x550a5334f1186b1ad55805cfe7a4cd383f835377a86fe9f872bcdceabdfa342c) |
| 19:25:41 | 8 | USDT → SOL (native) | Executed | `0xe17dfc60…` [🐞](https://debug.barn.cow.fi/order/0xe17dfc604e7c39b488fb8251155b2792a02dea46f58ffa6dc05228472f59e039) |
| 19:26:08 | 8 | JitoSOL → SOL (native) | Executed | `0x03d1a64d…` [🐞](https://debug.barn.cow.fi/order/0x03d1a64d22246ae8f4b304fddc57d5a6319728b2af979e47972a9c32baf67707) |
| 19:26:13 | 12 | JUP → SOL (native) | Executed | `0xb3b04bf4…` [🐞](https://debug.barn.cow.fi/order/0xb3b04bf43d055974b1d0901a9f11f7349c950ab8497d5b247b871648a12e1f5b) |
| 19:26:15 | 11 | USDT → SOL (native) | Executed | `0xf933f35b…` [🐞](https://debug.barn.cow.fi/order/0xf933f35b8b6bcac57971bb4a4be0d41b0e2a6686e2530a1c374b07c8c52367ab) |
| 19:26:27 | 12 | JTO → SOL (native) | Executed | `0xe8eb10ad…` [🐞](https://debug.barn.cow.fi/order/0xe8eb10ad20d52ba1f15dedd3dac2dca0090fd6e5184dba3b21b71f468bb8f9c2) |
| 19:26:50 | 10 | TRUMP → SOL (native) | Executed | `0xae6f5e4c…` [🐞](https://debug.barn.cow.fi/order/0xae6f5e4c5202d98712b9c502acb025f4ede6e9f07a01f77d3e3fb637e286e58b) |
| 19:26:58 | 13 | USDC → SOL (native) | Executed | `0xb10e73ec…` [🐞](https://debug.barn.cow.fi/order/0xb10e73ece556a3ceda0d1be037e6274ea1c18424e40e47742edd10818785cd19) |
| 19:27:06 | 10 | Bonk → SOL (native) | Executed | `0xff6cc2d3…` [🐞](https://debug.barn.cow.fi/order/0xff6cc2d3d17d5021631626ae9d42d6c9b4e170b33f5bdbe1aecd85be86cb8508) |
| 19:27:19 | 10 | $WIF → SOL (native) | Executed | `0x28a96c9a…` [🐞](https://debug.barn.cow.fi/order/0x28a96c9ab3fe9599ee2762024c2b8b767e08aebe5659e211a60a906054b5d8d2) |
| 19:27:24 | 13 | USDT → SOL (native) | Executed | `0x1f68af52…` [🐞](https://debug.barn.cow.fi/order/0x1f68af52638b2bc57d73e7f9ef68d712c7829d51db9e2bf80a42414ab610bc3f) |
| 19:27:48 | 10 | USDC → SOL (native) | Executed | `0xa95cef32…` [🐞](https://debug.barn.cow.fi/order/0xa95cef32e523af9e2aba67aeb1db5b7a597943b3f8e7d799b4e24925e67e2a0a) |
| 19:29:17 | 12 | mSOL → SOL (native) | Executed | `0x9ce58986…` [🐞](https://debug.barn.cow.fi/order/0x9ce5898677a36b79538d055d59be1d2155729f04c09c09563df0407887e61c6d) |
| 19:29:18 | 17 | mSOL → SOL (native) | Executed | `0x41554a9c…` [🐞](https://debug.barn.cow.fi/order/0x41554a9c12249fefc993550656bf47c9cdcb5cb84547bfa8de5057e495100116) |
| 19:29:19 | 16 | TRUMP → SOL (native) | Executed | `0x23d889e3…` [🐞](https://debug.barn.cow.fi/order/0x23d889e35164143d1d39864eb488ca54a2044f5d00bc71f2ba625ba4ddbe92dc) |
| 19:29:30 | 12 | RAY → SOL (native) | Executed | `0xa2070bcb…` [🐞](https://debug.barn.cow.fi/order/0xa2070bcb8d486c4092aa02029f3f2a6d30ca2a7809c054db6d844bdeb958dca2) |
| 19:29:35 | 17 | TRUMP → SOL (native) | Executed | `0x0f5dcac7…` [🐞](https://debug.barn.cow.fi/order/0x0f5dcac7777279116f1de3dce3bc438b3c803835aa4148cb3592b83466b98bf0) |
| 19:29:46 | 17 | POPCAT → SOL (native) | Executed | `0xd588b8ba…` [🐞](https://debug.barn.cow.fi/order/0xd588b8ba473b17efb5820107f1c56db186aabe00c80ecf91d6becf41f70b04e9) |
| 19:29:51 | 16 | POPCAT → SOL (native) | Executed | `0x8f65e1e6…` [🐞](https://debug.barn.cow.fi/order/0x8f65e1e6cb8c79b191e4e709fdc33bf24183dcee35b378a3917ff494b9a02a43) |
| 19:29:59 | 18 | TRUMP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xdd6ef4a3…` [🐞](https://debug.barn.cow.fi/order/0xdd6ef4a3474bca5e8d94269f06ae26e8a7c56935e83e1ecfeaa71074dd4f31c6) |
| 19:30:03 | 17 | Bonk → SOL (native) | Executed | `0xe9db2c89…` [🐞](https://debug.barn.cow.fi/order/0xe9db2c89313e70b3ce38086337473a183b228592978a8cf3c0112ef11624148c) |
| 19:30:05 | 12 | USDC → SOL (native) | Executed | `0x3cd84ff9…` [🐞](https://debug.barn.cow.fi/order/0x3cd84ff9fe28aec7bd5d2350bd066f4f09d7ddc72fcec13b389f1adec1b1f0dd) |
| 19:30:07 | 16 | Bonk → SOL (native) | Executed | `0x1e984555…` [🐞](https://debug.barn.cow.fi/order/0x1e9845557dfc3a46ca4920a7436cf16b45acf00f30f13f089b071206a809b2d6) |
| 19:30:12 | 19 | JUP → SOL (native) | Executed | `0x28058d0b…` [🐞](https://debug.barn.cow.fi/order/0x28058d0b25a219c33edc3418f515a62345bc26ccd1244ee8577f30470382bbf8) |
| 19:30:17 | 12 | JitoSOL → SOL (native) | Executed | `0x508eacd7…` [🐞](https://debug.barn.cow.fi/order/0x508eacd77336c06136d07b089f12d6b3ca17ea39689ec907c4eca5cfdc1cce41) |
| 19:30:19 | 17 | JitoSOL → SOL (native) | Executed | `0x5f17e4a9…` [🐞](https://debug.barn.cow.fi/order/0x5f17e4a9ec5f8d2cec4bd44bd565703d84570efa0683c8d5bd124db9207115aa) |
| 19:30:22 | 19 | JTO → SOL (native) | Executed | `0x74e6a2a6…` [🐞](https://debug.barn.cow.fi/order/0x74e6a2a66a43f0dc32758a83329db00a91e3bc2694d216a328dfe1c633e18231) |
| 19:30:24 | 16 | USDC → SOL (native) | Executed | `0x7e8bd9d3…` [🐞](https://debug.barn.cow.fi/order/0x7e8bd9d315b86703f11016a796a333f7f209dbb2ef75b743aca6167c34b4411e) |
| 19:30:42 | 19 | RAY → SOL (native) | Executed | `0x0265a821…` [🐞](https://debug.barn.cow.fi/order/0x0265a821599593c6ab09eb24d4a6291a0a91084d21c6d0425342b0bbd4fcac5f) |
| 19:31:13 | 18 | TRUMP → SOL (native) | Executed | `0x2171e2cf…` [🐞](https://debug.barn.cow.fi/order/0x2171e2cfb0bf7b66c5c103d6412dac339a1fe9758ee0f26c1ce00fe2d3909b24) |
| 19:31:23 | 19 | TRUMP → SOL (native) | Executed | `0x693c90b3…` [🐞](https://debug.barn.cow.fi/order/0x693c90b36d03b8e14d5e0d46b523fb58763e450bdef4bfc744e76972b9dfe3b4) |
| 19:31:47 | 20 | JUP → SOL (native) | Executed | `0xb60f9544…` [🐞](https://debug.barn.cow.fi/order/0xb60f9544921426116b7b1accb9776f039ea07f2b7a323ef9e6e17cdcefc48744) |
| 19:31:51 | 19 | USDC → SOL (native) | Executed | `0x5cd6f324…` [🐞](https://debug.barn.cow.fi/order/0x5cd6f3241acaafad657370a35ce669ed4f239df4b6140533ae9a0e6975c37cc6) |
| 19:31:54 | 21 | USDC → SOL (native) | Executed | `0x70a881c9…` [🐞](https://debug.barn.cow.fi/order/0x70a881c915b9f28de2724d91bf02b3a9b5b49058effcc6faac0db1a088acd684) |
| 19:31:56 | 20 | mSOL → SOL (native) | Executed | `0x57400380…` [🐞](https://debug.barn.cow.fi/order/0x574003805d1d2f7cf757dcb73787fdccabd2c0b1455bccc6e1944f5541d64d49) |
| 19:32:12 | 20 | RAY → SOL (native) | Executed | `0x7c76632b…` [🐞](https://debug.barn.cow.fi/order/0x7c76632b83ea0938cd17e651d6dbf865d489aeac26b2e064603c000e5429985c) |
| 19:32:15 | 21 | USDT → SOL (native) | Executed | `0xdd8d46db…` [🐞](https://debug.barn.cow.fi/order/0xdd8d46db033c64bc03c6900fa5cb5be8b683b274e4a373ccc0d0e5132edc5ee1) |
| 19:32:26 | 20 | Bonk → SOL (native) | Executed | `0x1fda534c…` [🐞](https://debug.barn.cow.fi/order/0x1fda534ce20442534a612dd7ca4b54dcb775b3d06b6ac63acbc76604eb2220c8) |
| 19:32:41 | 20 | USDC → SOL (native) | Executed | `0xcbc08012…` [🐞](https://debug.barn.cow.fi/order/0xcbc080126f89e142e98d0c36beacb54f6a3392517e99e0024b356ddca9c849dc) |
| 19:32:54 | 22 | USDC → SOL (native) | Executed | `0x1644b17b…` [🐞](https://debug.barn.cow.fi/order/0x1644b17b03cea37c19b4e5deb7a2b4dcbf270469323795d36a1418defce7bb95) |
| 19:32:59 | 20 | JitoSOL → SOL (native) | Executed | `0x7f988a20…` [🐞](https://debug.barn.cow.fi/order/0x7f988a20f19a937648bfadf4f8e47b6bd0ce6cd2fd96caea72feb6145f6904aa) |
| 19:33:22 | 23 | TRUMP → SOL (native) | Executed | `0xfa8851ee…` [🐞](https://debug.barn.cow.fi/order/0xfa8851ee0f61f08a8a6c5a1a5f27a2d6f9369dc78bc5b5730c467b1dc78604f5) |
| 19:33:23 | 18 | Bonk → SOL (native) | Executed | `0xdc11b9da…` [🐞](https://debug.barn.cow.fi/order/0xdc11b9da17546a6f7207dbb50d1e66ac3a42dfe30c1344ff855b54f5c10ea453) |
| 19:33:30 | 22 | USDT → SOL (native) | Executed | `0xd1c468b2…` [🐞](https://debug.barn.cow.fi/order/0xd1c468b2cab43a03ec5a88a852888c7facdcf3448f295bec24fcf51b832f98d6) |
| 19:33:32 | 24 | USDC → SOL (native) | Executed | `0xa0e73c10…` [🐞](https://debug.barn.cow.fi/order/0xa0e73c106533bb8f1a5c71d5c666974c43c469ace8a377dbec7b1a034301ec8f) |
| 19:33:38 | 18 | USDC → SOL (native) | Executed | `0xb07e4c99…` [🐞](https://debug.barn.cow.fi/order/0xb07e4c994d568cd315fe74875bd66f68ce7baa388c1c7d37c877c3fa732463f2) |
| 19:33:46 | 23 | POPCAT → SOL (native) | Executed | `0xeea77601…` [🐞](https://debug.barn.cow.fi/order/0xeea77601c168041b44bb378123d2d6408cd6b43807249feee161d8edbe5c8b14) |
| 19:33:54 | 23 | Bonk → SOL (native) | Executed | `0xafc9f802…` [🐞](https://debug.barn.cow.fi/order/0xafc9f8026e8ab3de2fe0a9c661272b5c12bd4f6604f20e5369ecbbb449c7d897) |
| 19:35:05 | 25 | JUP → SOL (native) | Executed | `0x8f49f109…` [🐞](https://debug.barn.cow.fi/order/0x8f49f109a08bc5228bd82aa78a8e1a2201750d868772b4fb3067bff2b6ff0751) |
| 19:35:37 | 25 | JTO → SOL (native) | Executed | `0xe607edb3…` [🐞](https://debug.barn.cow.fi/order/0xe607edb3c1dd6b94a9a41f46e8e273ed4827d4afa0aaa801a82519ee2cbde184) |
| 19:35:57 | 25 | mSOL → SOL (native) | Executed | `0xad6f44cd…` [🐞](https://debug.barn.cow.fi/order/0xad6f44cdfcc3df8ae6e7c45825101d4626e36cb4e057070d1abb6f89c83f68ea) |
| 19:36:06 | 25 | RAY → SOL (native) | Executed | `0x0575e7cf…` [🐞](https://debug.barn.cow.fi/order/0x0575e7cf0e11b3963895b962af4edb0b86647dec18f8bc61f3253667d9408c9a) |
| 19:36:15 | 25 | USDC → SOL (native) | Executed | `0x03559441…` [🐞](https://debug.barn.cow.fi/order/0x035594416b7474c9bfe540a76525f618d79b5bbc43f0683346ec5b4b15392849) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 168 | 97.7% |
| cancelled | 2 | 1.2% |
| expired: never created on-chain (winner found, creation blockhash expired) | 2 | 1.2% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 10s | 13s | 19s | 31s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 126 | 75.0% | 126 | 90,957 | 10s |
| 8E74…2mpx | 34 | 20.2% | 34 | 172,934 | 10s |
| fractal | 8 | 4.8% | 8 | 67,156 | 8s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 351 | 171 | 164 | 95.9% | 5 | 2 | 0 | 0 |
| grafiks | 332 | 97 | 68 | 70.1% | 23 | 12 | 0 | 0 |
| fractal | 210 | 16 | 16 | 100.0% | 0 | 0 | 0 | 0 |
| rosato | 149 | 1 | 0 | 0.0% | 1 | 0 | 2 | 19 |
| helixbox | 63 | 0 | 0 | – | 0 | 0 | 0 | 0 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 146 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 146 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 23 |
| jupiter-solve: SimulationFailed | 5 |
| rosato: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 1
- Orders filtered for `unfunded_sell_token_account`: 246 times
- Orders filtered for `in_flight`: 144 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| buy | 95 | 92 | 96.8% |
| sell | 77 | 76 | 98.7% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 48 | 44 | 91.7% |
| wSOL → USDT | 17 | 17 | 100.0% |
| wSOL → Bonk | 13 | 13 | 100.0% |
| wSOL → TRUMP | 10 | 10 | 100.0% |
| wSOL → POPCAT | 8 | 8 | 100.0% |
| USDC → RAY | 7 | 7 | 100.0% |
| USDC → SOL (native) | 7 | 7 | 100.0% |
| wSOL → $WIF | 7 | 7 | 100.0% |
| USDC → JUP | 6 | 6 | 100.0% |
| USDT → SOL (native) | 6 | 6 | 100.0% |
| USDC → JitoSOL | 5 | 5 | 100.0% |
| USDC → mSOL | 5 | 5 | 100.0% |
| USDC → JTO | 4 | 4 | 100.0% |
| POPCAT → SOL (native) | 4 | 4 | 100.0% |
| Bonk → SOL (native) | 3 | 3 | 100.0% |
| TRUMP → USDC | 2 | 2 | 100.0% |
| JTO → RAY | 1 | 1 | 100.0% |
| TRUMP → SOL (native) | 1 | 1 | 100.0% |
| RAY → mSOL | 1 | 1 | 100.0% |
| JTO → TRUMP | 1 | 1 | 100.0% |
| mSOL → POPCAT | 1 | 1 | 100.0% |
| JitoSOL → JTO | 1 | 1 | 100.0% |
| mSOL → JTO | 1 | 1 | 100.0% |
| RAY → JitoSOL | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| JTO → USDC | 1 | 1 | 100.0% |
| $WIF → SOL (native) | 1 | 1 | 100.0% |
| JitoSOL → USDC | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| JitoSOL → Bonk | 1 | 1 | 100.0% |
| Bonk → USDC | 1 | 1 | 100.0% |
| Bonk → USDT | 1 | 1 | 100.0% |
| RAY → JUP | 1 | 1 | 100.0% |
| JUP → Bonk | 1 | 1 | 100.0% |
| JitoSOL → mSOL | 1 | 1 | 100.0% |
| USDT → JitoSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 15 | 15 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 15 | 13 | 86.7% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 9 | 9 | 100.0% |
| `9XSrZ8RkSZ3WDoGkrgWHrmMhixsoWZTLnPxBtQNWNK9c` | 9 | 9 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 9 | 9 | 100.0% |
| `CagkCmsroJWAiUWrigym7vR9wGYV5aKWanTGu3ZARKqD` | 8 | 8 | 100.0% |
| `HoWtt82mr4wqKqMDy4jFDRs1C9kt3kY6KtXH3i83fyn5` | 8 | 8 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 8 | 7 | 87.5% |
| `BsXAAY6SvTyWYjwKCa5SUs1kDBK6n7ia7qvRPVj5dFgz` | 8 | 8 | 100.0% |
| `2kV12Qsin6Wfxr2Pr6M8bqUbjqMppw4gpqAbV18TiFfJ` | 7 | 7 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 7 | 7 | 100.0% |
| `EGXsUdM4HLc983jD276LHz87k5zBZSJrJc137qcokK8D` | 7 | 7 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 7 | 6 | 85.7% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 7 | 7 | 100.0% |
| `AQtmpjmjjZTzzs5W2Ld4gPteDe1teLKMpwj3v5GAv7ef` | 6 | 6 | 100.0% |
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
| Not filled within fill timeout (cancelled by sim) | 2 |
| Winner too late: creation blockhash expired | 2 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 19:15:28 | wSOL → USDC | buy | Not filled within fill timeout (cancelled by sim) | `0xd9617892…` [🐞](https://debug.barn.cow.fi/order/0xd9617892fae617e2a45d9dd5d62482c45c4d0ee35f6960c3af12e94d92a5fefd) |
| 19:16:24 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xa194c934…` [🐞](https://debug.barn.cow.fi/order/0xa194c9348a9f59fd8618f16b0fa8ced9d2add4094dee3f9f52f586eda121b8af) |
| 19:16:58 | wSOL → USDC | sell | Not filled within fill timeout (cancelled by sim) | `0x7fa67fde…` [🐞](https://debug.barn.cow.fi/order/0x7fa67fded394e68e99606c55fdfbedd769a3a3b6db696cac69c02f90b8a46b87) |
| 19:19:16 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xee74ae7d…` [🐞](https://debug.barn.cow.fi/order/0xee74ae7db12362fb167e0b97d4d7994b86cc5f675842e8114509cbed57faa757) |
