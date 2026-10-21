# Solana QoS report: 2026-10-21-08-51-composite-rizzolver-run

Barn, orders created between `2026-10-21T08:52:30.372Z` and `2026-10-21T09:25:37.060Z`. Data fetched 2026-10-21T09:30:03+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 129 |
| Orders executed | **124** (96.1%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 72 |
| Settlement txs | 124 |

## Scenario results

Target solver: `rizzolver`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-21T08:52:30.372Z | 2026-10-21T08:53:23.903Z | 6/6 | 0 | 8 | 8 | 100.0% |
| rizzolver-sol-jup | 2026-10-21T08:54:15.274Z | 2026-10-21T08:54:35.721Z | 4/4 | 0 | 4 | 4 | 100.0% |
| solver-same-direction-25 | 2026-10-21T08:55:36.722Z | 2026-10-21T08:57:47.813Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-21T09:00:41.084Z | 2026-10-21T09:15:38.936Z | 78/84 | 6 | 84 | 79 | 92.9% |
| solver-fresh-accounts | 2026-10-21T09:19:20.071Z | 2026-10-21T09:19:42.738Z | 8/8 | 0 | 8 | 8 | 100.0% |

## Scenario

121 of 127 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 08:52:30 | 1 | 1 | sell 0.005 SOL → USDC | filled | 6s | 1 |  |
| 08:52:30 | 2 | 2 | sell 0.005 SOL → USDT | filled | 5s | 1 |  |
| 08:52:30 | 3 | 3 | sell 0.5 JUP → USDC | filled | 17s | 2 |  |
| 08:52:36 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 48s | 1 |  |
| 08:52:35 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 48s | 1 |  |
| 08:52:47 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 14s | 2 |  |
| 08:54:15 | 7 | 4 | sell 0.01 SOL → JUP | filled | 5s | 1 |  |
| 08:54:15 | 8 | 5 | sell 0.01 SOL → JUP | filled | 11s | 1 |  |
| 08:54:15 | 9 | 6 | buy 1 JUP ← SOL | filled | 18s | 1 |  |
| 08:54:15 | 10 | 7 | buy 1 JUP ← SOL | filled | 20s | 1 |  |
| 08:55:36 | 11 | 8 | sell 0.005 SOL → JUP | filled | 40s | 1 |  |
| 08:55:36 | 12 | 9 | sell 0.005 SOL → JUP | filled | 10s | 1 |  |
| 08:55:36 | 13 | 10 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 08:55:36 | 14 | 11 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 08:55:36 | 15 | 12 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 08:55:36 | 16 | 13 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 08:55:36 | 17 | 14 | sell 0.005 SOL → JUP | filled | 54s | 1 |  |
| 08:55:36 | 18 | 15 | sell 0.005 SOL → JUP | filled | 67s | 1 |  |
| 08:55:36 | 19 | 16 | sell 0.005 SOL → JUP | filled | 92s | 1 |  |
| 08:55:36 | 20 | 17 | sell 0.005 SOL → JUP | filled | 85s | 1 |  |
| 08:55:36 | 21 | 18 | sell 0.005 SOL → JUP | filled | 95s | 1 |  |
| 08:55:36 | 22 | 19 | sell 0.005 SOL → JUP | filled | 79s | 1 |  |
| 08:55:36 | 23 | 20 | sell 0.005 SOL → JUP | filled | 36s | 1 |  |
| 08:55:36 | 24 | 21 | sell 0.005 SOL → JUP | filled | 77s | 1 |  |
| 08:55:36 | 25 | 22 | sell 0.005 SOL → JUP | filled | 71s | 1 |  |
| 08:55:36 | 26 | 23 | sell 0.005 SOL → JUP | filled | 46s | 1 |  |
| 08:55:36 | 27 | 24 | sell 0.005 SOL → JUP | filled | 49s | 1 |  |
| 08:55:36 | 28 | 25 | sell 0.005 SOL → JUP | filled | 59s | 1 |  |
| 08:55:36 | 29 | 26 | sell 0.005 SOL → JUP | filled | 99s | 1 |  |
| 08:55:36 | 30 | 27 | sell 0.005 SOL → JUP | filled | 125s | 1 |  |
| 08:55:36 | 31 | 28 | sell 0.005 SOL → JUP | filled | 131s | 1 |  |
| 08:55:36 | 32 | 29 | sell 0.005 SOL → JUP | filled | 116s | 1 |  |
| 08:55:36 | 33 | 30 | sell 0.005 SOL → JUP | filled | 106s | 1 |  |
| 08:55:36 | 34 | 31 | sell 0.005 SOL → JUP | filled | 110s | 1 |  |
| 08:55:36 | 35 | 32 | sell 0.005 SOL → JUP | filled | 119s | 1 |  |
| 09:00:41 | 36 | 33 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 09:00:41 | 37 | 34 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 09:00:41 | 38 | 35 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 09:00:41 | 39 | 36 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 09:02:11 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 09:02:11 | 41 | 34 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 09:02:11 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 09:02:11 | 43 | 36 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 09:02:11 | 44 | 37 | sell 0.0025 SOL → USDC | filled | 41s | 1 |  |
| 09:02:11 | 45 | 38 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 09:02:11 | 46 | 39 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 09:02:11 | 47 | 40 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 09:03:41 | 48 | 33 | sell 0.0025 SOL → USDC | filled | 76s | 1 |  |
| 09:03:41 | 49 | 34 | sell 0.003 SOL → USDC | filled | 47s | 1 |  |
| 09:03:41 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 35s | 1 |  |
| 09:03:41 | 51 | 36 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 09:03:41 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 82s | 1 |  |
| 09:03:41 | 53 | 38 | sell 0.003 SOL → USDC | filled | 63s | 1 |  |
| 09:03:41 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 26s | 1 |  |
| 09:03:41 | 55 | 40 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 09:03:41 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 70s | 1 |  |
| 09:03:41 | 57 | 42 | sell 0.003 SOL → USDC | filled | 51s | 1 |  |
| 09:03:41 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 32s | 1 |  |
| 09:03:41 | 59 | 44 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 09:03:41 | 60 | 45 | sell 0.0025 SOL → USDC | filled | 67s | 1 |  |
| 09:03:41 | 61 | 46 | sell 0.003 SOL → USDC | filled | 55s | 1 |  |
| 09:03:41 | 62 | 47 | sell 0.0035 SOL → USDC | filled | 43s | 1 |  |
| 09:03:41 | 63 | 48 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 09:05:11 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 200s | 1 | main timeout |
| 09:05:11 | 65 | 34 | sell 0.003 SOL → USDC | filled | 92s | 1 |  |
| 09:05:11 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 61s | 1 |  |
| 09:05:11 | 67 | 36 | sell 0.004 SOL → USDC | filled | 37s | 1 |  |
| 09:05:11 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 201s | 1 | main timeout |
| 09:05:11 | 69 | 38 | sell 0.003 SOL → USDC | filled | 77s | 1 |  |
| 09:05:11 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 52s | 1 |  |
| 09:05:11 | 71 | 40 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 09:05:11 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 198s | 1 | main timeout |
| 09:05:11 | 73 | 42 | sell 0.003 SOL → USDC | filled | 67s | 1 |  |
| 09:05:11 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 45s | 1 |  |
| 09:05:11 | 75 | 44 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:05:11 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 97s | 1 |  |
| 09:05:11 | 77 | 46 | sell 0.003 SOL → USDC | filled | 70s | 1 |  |
| 09:05:11 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 56s | 1 |  |
| 09:05:11 | 79 | 48 | sell 0.004 SOL → USDC | filled | 26s | 1 |  |
| 09:05:11 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 194s | 1 | main timeout |
| 09:05:11 | 81 | 50 | sell 0.003 SOL → USDC | filled | 88s | 1 |  |
| 09:05:11 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 6s | 1 |  |
| 09:05:11 | 83 | 52 | sell 0.004 SOL → USDC | filled | 32s | 1 |  |
| 09:05:11 | 84 | 53 | sell 0.0025 SOL → USDC | failed | 196s | 1 | main timeout |
| 09:05:11 | 85 | 54 | sell 0.003 SOL → USDC | filled | 82s | 1 |  |
| 09:05:11 | 86 | 55 | sell 0.0035 SOL → USDC | filled | 42s | 1 |  |
| 09:05:11 | 87 | 56 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 09:08:31 | 88 | 33 | sell 0.0025 SOL → USDC | filled | 45s | 1 |  |
| 09:06:42 | 89 | 34 | sell 0.003 SOL → USDC | filled | 126s | 1 |  |
| 09:06:41 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 80s | 1 |  |
| 09:06:41 | 91 | 36 | sell 0.004 SOL → USDC | filled | 45s | 1 |  |
| 09:08:31 | 92 | 37 | sell 0.0025 SOL → USDC | filled | 55s | 1 |  |
| 09:06:41 | 93 | 38 | sell 0.003 SOL → USDC | filled | 113s | 1 |  |
| 09:06:41 | 94 | 39 | sell 0.0035 SOL → USDC | filled | 67s | 1 |  |
| 09:06:41 | 95 | 40 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 09:08:29 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 419s | 1 | main timeout |
| 09:06:41 | 97 | 42 | sell 0.003 SOL → USDC | filled | 96s | 1 |  |
| 09:06:41 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 76s | 1 |  |
| 09:06:41 | 99 | 44 | sell 0.004 SOL → USDC | filled | 41s | 1 |  |
| 09:06:48 | 100 | 45 | sell 0.0025 SOL → USDC | filled | 133s | 1 |  |
| 09:06:41 | 101 | 46 | sell 0.003 SOL → USDC | filled | 100s | 1 |  |
| 09:06:41 | 102 | 47 | sell 0.0035 SOL → USDC | filled | 86s | 1 |  |
| 09:06:41 | 103 | 48 | sell 0.004 SOL → USDC | filled | 36s | 1 |  |
| 09:08:24 | 104 | 49 | sell 0.0025 SOL → USDC | filled | 59s | 1 |  |
| 09:06:41 | 105 | 50 | sell 0.003 SOL → USDC | filled | 121s | 1 |  |
| 09:06:41 | 106 | 51 | sell 0.0035 SOL → USDC | filled | 62s | 1 |  |
| 09:06:41 | 107 | 52 | sell 0.004 SOL → USDC | filled | 27s | 1 |  |
| 09:08:26 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 47s | 1 |  |
| 09:06:41 | 109 | 54 | sell 0.003 SOL → USDC | filled | 117s | 1 |  |
| 09:06:41 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 56s | 1 |  |
| 09:06:41 | 111 | 56 | sell 0.004 SOL → USDC | filled | 31s | 1 |  |
| 09:06:41 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 137s | 1 |  |
| 09:06:41 | 113 | 58 | sell 0.003 SOL → USDC | filled | 106s | 1 |  |
| 09:06:41 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 70s | 1 |  |
| 09:06:41 | 115 | 60 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:06:41 | 116 | 61 | sell 0.0025 SOL → USDC | filled | 132s | 1 |  |
| 09:06:41 | 117 | 62 | sell 0.003 SOL → USDC | filled | 92s | 1 |  |
| 09:06:41 | 118 | 63 | sell 0.0035 SOL → USDC | filled | 50s | 1 |  |
| 09:06:41 | 119 | 64 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:19:20 | 120 | 65 | sell 0.1 SOL → USDC | filled | 9s | 1 |  |
| 09:19:20 | 121 | 66 | sell 0.1 SOL → USDC | filled | 14s | 1 |  |
| 09:19:20 | 122 | 67 | buy 10 USDC ← SOL | filled | 22s | 1 |  |
| 09:19:20 | 123 | 68 | buy 10 USDC ← SOL | filled | 18s | 1 |  |
| 09:19:20 | 124 | 69 | sell 0.1 SOL → USDT | filled | 6s | 1 |  |
| 09:19:20 | 125 | 70 | sell 0.1 SOL → USDT | filled | 15s | 1 |  |
| 09:19:20 | 126 | 71 | buy 10 USDT ← SOL | filled | 23s | 1 |  |
| 09:19:20 | 127 | 72 | buy 10 USDT ← SOL | filled | 18s | 1 |  |

Scenario orders: 129 (127 main, 2 acquire). Cleanup placed 72 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 08:53:25 | 1 | USDC → SOL (native) | Executed | `0x29533592…` [🐞](https://debug.barn.cow.fi/order/0x2953359293baf900d713e6987bb55adc9449af626853fbb8536d8026bf09c6eb) |
| 08:53:26 | 2 | USDT → SOL (native) | Executed | `0xaad9df24…` [🐞](https://debug.barn.cow.fi/order/0xaad9df247e1c10668ee0b4f406aceb018f0e289586e596488562f8f4d84a7c32) |
| 08:53:27 | 3 | USDC → SOL (native) | Executed | `0x42cb5bd8…` [🐞](https://debug.barn.cow.fi/order/0x42cb5bd896c770d555d4cb3d0206440a0f66912adfbb44c731afce2092904b5d) |
| 08:54:37 | 4 | JUP → SOL (native) | Executed | `0xd7449963…` [🐞](https://debug.barn.cow.fi/order/0xd744996367a7943a009bd408a6dbcc9fbfc29c7a726dabe3ad751609c35b2ea2) |
| 08:54:38 | 5 | JUP → SOL (native) | Executed | `0x1525f7be…` [🐞](https://debug.barn.cow.fi/order/0x1525f7befaeec85951121055408986a90f4ba1c039bd362bc9ddc83e478e4de3) |
| 08:54:39 | 6 | JUP → SOL (native) | Executed | `0xdb16c528…` [🐞](https://debug.barn.cow.fi/order/0xdb16c5289089486bd06d1652077e47d5a65a09d9a623061c6ef46b397761e6bc) |
| 08:54:40 | 7 | JUP → SOL (native) | Executed | `0xa0d656fc…` [🐞](https://debug.barn.cow.fi/order/0xa0d656fc879783e14049748280a98cfd051483efc5de6a239927f5b2caa1257f) |
| 08:57:50 | 9 | JUP → SOL (native) | Executed | `0xb07a2a82…` [🐞](https://debug.barn.cow.fi/order/0xb07a2a82b53bab76f5f1ee17143a671be624077efd56afbafd3de81b7632cdb1) |
| 08:57:51 | 10 | JUP → SOL (native) | Executed | `0x54556a7b…` [🐞](https://debug.barn.cow.fi/order/0x54556a7b6b30e9dfa7faa9446923f7fb0b20362df007df0b1dfd034461f59175) |
| 08:57:52 | 11 | JUP → SOL (native) | Executed | `0xee9d433c…` [🐞](https://debug.barn.cow.fi/order/0xee9d433cc2cdf904b36aff7f9b3429f6aaa3122b98f7e7d8b19b5bdb77d73fae) |
| 08:57:53 | 12 | JUP → SOL (native) | Executed | `0x3beb0a47…` [🐞](https://debug.barn.cow.fi/order/0x3beb0a4763a32c738b8b43fb52d3b947292a392c598c51e2005aa550707fdf7f) |
| 08:57:54 | 13 | JUP → SOL (native) | Executed | `0xe0e9a2b8…` [🐞](https://debug.barn.cow.fi/order/0xe0e9a2b8f7f310f1909b4f59717d5645c8fb39b06938e627ad703e4ed8b92429) |
| 08:57:55 | 14 | JUP → SOL (native) | Executed | `0x3a75312d…` [🐞](https://debug.barn.cow.fi/order/0x3a75312db4d7eb575ca5564d3a367a53c1d78d9df02eb01173f1827dff53a78c) |
| 08:57:56 | 15 | JUP → SOL (native) | Executed | `0x67942e23…` [🐞](https://debug.barn.cow.fi/order/0x67942e23df0878273f6a1fe9510e9004277afaa9e935cdb2ed2cb3df99db2bc0) |
| 08:57:57 | 16 | JUP → SOL (native) | Executed | `0xdbd083da…` [🐞](https://debug.barn.cow.fi/order/0xdbd083da1ef86f76978df6815e6970c53ff963941772ccf7e17b2f6854182440) |
| 08:57:58 | 17 | JUP → SOL (native) | Executed | `0xc7f27930…` [🐞](https://debug.barn.cow.fi/order/0xc7f27930eb9ee94130e1e146aadc0e2de29301ac67f2a0a3a0d572b206ee9b7c) |
| 08:58:01 | 8 | JUP → SOL (native) | Executed | `0xe9b00777…` [🐞](https://debug.barn.cow.fi/order/0xe9b00777ec26441a204c388ad04acd77b89ec9080d1a86ced5e1219af21b9436) |
| 08:58:12 | 18 | JUP → SOL (native) | Executed | `0x5fb7d101…` [🐞](https://debug.barn.cow.fi/order/0x5fb7d1012f8795f8e88f7fa6aa8c2f1ca66031d568aef948f41ae0d96da22859) |
| 08:58:17 | 19 | JUP → SOL (native) | Executed | `0x9d913553…` [🐞](https://debug.barn.cow.fi/order/0x9d913553bdcb1a8e439b9b66282a321b4e66b59c0ba2cae4e580e61009772f13) |
| 08:58:20 | 20 | JUP → SOL (native) | Executed | `0x93059e33…` [🐞](https://debug.barn.cow.fi/order/0x93059e33fdc3936f21c3ec02c93c6c6e77b2e606dcc4150c42a1be3cdb8108cf) |
| 08:58:27 | 21 | JUP → SOL (native) | Executed | `0xd19032a3…` [🐞](https://debug.barn.cow.fi/order/0xd19032a3ff8c58891c4e14c23acb11ae6b16ee4835709b0e3e0d44d75a222a63) |
| 08:58:28 | 22 | JUP → SOL (native) | Executed | `0x1e1fbff1…` [🐞](https://debug.barn.cow.fi/order/0x1e1fbff10c9fe4ad68c8e34078a6c524b75f0002c599f51fe02f558b9af9b484) |
| 08:58:35 | 23 | JUP → SOL (native) | Executed | `0x4d6813bd…` [🐞](https://debug.barn.cow.fi/order/0x4d6813bdcd709a2490688c4514bd18c46f1d178dc2756a76b59a6766d5afb88e) |
| 08:58:37 | 24 | JUP → SOL (native) | Executed | `0x42b01284…` [🐞](https://debug.barn.cow.fi/order/0x42b012845f59f85fbe1c2c77d9fa494aa4aca031d838bc183e21c7d122f2ccd4) |
| 08:58:39 | 25 | JUP → SOL (native) | Executed | `0x0fb6d328…` [🐞](https://debug.barn.cow.fi/order/0x0fb6d328f5472dfa05ddc00e78928581719ea5d2c71f781ac0206d1df1940bee) |
| 08:58:46 | 26 | JUP → SOL (native) | Executed | `0xe9e99dd6…` [🐞](https://debug.barn.cow.fi/order/0xe9e99dd679879c3ab31ffc72e03a9301e9b186c8c8b20ecdeb5a80f1de5d8acc) |
| 08:58:55 | 28 | JUP → SOL (native) | Executed | `0x78e50ecc…` [🐞](https://debug.barn.cow.fi/order/0x78e50ecc103125ec8d612e82632a17bb74b278d159ba9e02005e6bdb9a5cd52f) |
| 08:58:56 | 27 | JUP → SOL (native) | Executed | `0x16974701…` [🐞](https://debug.barn.cow.fi/order/0x16974701b056a3cf9f704491b8be18501333222e5978fb799370395c3f24c6d0) |
| 08:59:11 | 29 | JUP → SOL (native) | Executed | `0x142d713c…` [🐞](https://debug.barn.cow.fi/order/0x142d713cd0a7412486175b6e726bdceacfdee92ee2ccc8e8010dbaa842dce177) |
| 08:59:17 | 30 | JUP → SOL (native) | Executed | `0x01ffaaa0…` [🐞](https://debug.barn.cow.fi/order/0x01ffaaa07004be908b0c60d3e8dc4b3d492d53513b0356ee2b82e709d3f2189f) |
| 08:59:22 | 31 | JUP → SOL (native) | Executed | `0xb2f824b6…` [🐞](https://debug.barn.cow.fi/order/0xb2f824b6c1a20276945834e8f366251e1ec5ed01db33afdfd088a740e4a61048) |
| 08:59:34 | 32 | JUP → SOL (native) | Executed | `0x47dfbd7c…` [🐞](https://debug.barn.cow.fi/order/0x47dfbd7ca8ef2e4f99e542d05740c4f66fcd1332e2c145dc78a34624db364ead) |
| 09:15:50 | 33 | USDC → SOL (native) | Executed | `0xba95c26d…` [🐞](https://debug.barn.cow.fi/order/0xba95c26df1385792b24da49df02916edbc3b0b2b915b441fe9f3b3bce11832c1) |
| 09:15:51 | 34 | USDC → SOL (native) | Executed | `0x8de03ac2…` [🐞](https://debug.barn.cow.fi/order/0x8de03ac2152f8704d3be8d5d87e5bfd2123546bb046d97723d48c5381d0588cf) |
| 09:15:52 | 35 | USDC → SOL (native) | Executed | `0xefd406ea…` [🐞](https://debug.barn.cow.fi/order/0xefd406eabb886d868291919940d718ea17c5d318bf4508c99ba3c4ce00774ea0) |
| 09:15:54 | 36 | USDC → SOL (native) | Executed | `0xc43fab0c…` [🐞](https://debug.barn.cow.fi/order/0xc43fab0c35ef37abc5a2c8d934801241149d51e4423b21ee8458417632b943f0) |
| 09:15:54 | 37 | USDC → SOL (native) | Executed | `0xde1cb2fc…` [🐞](https://debug.barn.cow.fi/order/0xde1cb2fcad5c41043abff3699326d9186f6c4f18526aa08862ca892935f87221) |
| 09:15:55 | 38 | USDC → SOL (native) | Executed | `0xf0bbfa01…` [🐞](https://debug.barn.cow.fi/order/0xf0bbfa01611db59c56fc1bc57d4e4981b2716b872df1be8c8382f5634a60e1d0) |
| 09:15:56 | 39 | USDC → SOL (native) | Executed | `0x852879dd…` [🐞](https://debug.barn.cow.fi/order/0x852879ddb564f4bb6872f010d8397b9b0b4f33cb070616e2bceceb05efe1dfc5) |
| 09:15:58 | 40 | USDC → SOL (native) | Executed | `0x1e958cb3…` [🐞](https://debug.barn.cow.fi/order/0x1e958cb33794ef5ae22ba773dc676bd2c508d33f28f4cf499b66881029ad6538) |
| 09:15:58 | 41 | USDC → SOL (native) | Executed | `0x67793461…` [🐞](https://debug.barn.cow.fi/order/0x67793461a895eb1748034e9500df3b13ee25834407efd5c2edaf8479015093b6) |
| 09:16:02 | 42 | USDC → SOL (native) | Executed | `0xc8ab83a1…` [🐞](https://debug.barn.cow.fi/order/0xc8ab83a1e13a7de8e89ec430791307300032d080f5a0e563b7a162d3d9532ee1) |
| 09:16:10 | 43 | USDC → SOL (native) | Executed | `0x4567c43b…` [🐞](https://debug.barn.cow.fi/order/0x4567c43b0db263ebf83264fb99c8e4ace38be66050d830baf5b110e0190cc3f7) |
| 09:16:12 | 44 | USDC → SOL (native) | Executed | `0xa64bca1d…` [🐞](https://debug.barn.cow.fi/order/0xa64bca1dc2e397b963963b302b2f195e63becc9242f537cec12ab6efce751919) |
| 09:16:20 | 45 | USDC → SOL (native) | Executed | `0x068923d0…` [🐞](https://debug.barn.cow.fi/order/0x068923d0a0dc1a4e57f51b8d6ff360551eec735a214a4b7167eed5c1a9fa9829) |
| 09:16:22 | 46 | USDC → SOL (native) | Executed | `0x86e80ee7…` [🐞](https://debug.barn.cow.fi/order/0x86e80ee779b66bf97d56d9fa3e2116c87bd41bb101710ef80d9b6add10381920) |
| 09:16:28 | 47 | USDC → SOL (native) | Executed | `0x42fae803…` [🐞](https://debug.barn.cow.fi/order/0x42fae8033b2704cf3707dc27cff8166799a620ed1f75c1dfb6ff2264e0d64e76) |
| 09:16:35 | 48 | USDC → SOL (native) | Executed | `0x058de3a0…` [🐞](https://debug.barn.cow.fi/order/0x058de3a01fe0a2dd0a76b26eec332773e49fc23c4430d0bd2ecef2570105107b) |
| 09:16:42 | 49 | USDC → SOL (native) | Executed | `0x1c990aee…` [🐞](https://debug.barn.cow.fi/order/0x1c990aee0e7c285a911bd6409f6faca1fade873cad4af995e06dcce5c7ecd2ae) |
| 09:16:44 | 50 | USDC → SOL (native) | Executed | `0x3eba1a94…` [🐞](https://debug.barn.cow.fi/order/0x3eba1a949bcf389b1f06c6951173d9e0e15c4f1499e4cab78cf34647c15952d3) |
| 09:16:48 | 51 | USDC → SOL (native) | Executed | `0x8a426ec4…` [🐞](https://debug.barn.cow.fi/order/0x8a426ec481fc1cb056785c8f1e656106aed6f345ffd386dea7c90bb9ef6b36f7) |
| 09:16:55 | 52 | USDC → SOL (native) | Executed | `0xda3befcd…` [🐞](https://debug.barn.cow.fi/order/0xda3befcd1bf097d44c05975f52cbb8728d65f339e5663d46d4c2f589f8689f4d) |
| 09:17:01 | 53 | USDC → SOL (native) | Executed | `0x937325bc…` [🐞](https://debug.barn.cow.fi/order/0x937325bc1b2e7ea1811c366b2168ae78559b2db5efc24cbcff69ce8a6e4c5f87) |
| 09:17:05 | 54 | USDC → SOL (native) | Executed | `0x01ea1d8c…` [🐞](https://debug.barn.cow.fi/order/0x01ea1d8c4913a840d3dd0f02b07ffaeb328994b25b19a9c0c3eca75a9ce524c3) |
| 09:17:14 | 55 | USDC → SOL (native) | Executed | `0x9b72c0ac…` [🐞](https://debug.barn.cow.fi/order/0x9b72c0ac072563814e31ee7f4961dd48ff04f9496d0cab217a917634e16ad6dc) |
| 09:17:17 | 56 | USDC → SOL (native) | Executed | `0x4d417ceb…` [🐞](https://debug.barn.cow.fi/order/0x4d417ceb940453d8e377b8723d5e066906ed909d076e2ffa2628e224264c3a76) |
| 09:17:18 | 57 | USDC → SOL (native) | Executed | `0xeedc3ff1…` [🐞](https://debug.barn.cow.fi/order/0xeedc3ff1d6514da335a18f5a0dca1ebdf10fe6a6c02b8598abe414156c9a85e2) |
| 09:17:31 | 58 | USDC → SOL (native) | Executed | `0xfc974050…` [🐞](https://debug.barn.cow.fi/order/0xfc97405068b11daf7b7f09f80dc8eee6ecd9cff219aaf4b14695c484e9deb0c9) |
| 09:17:34 | 59 | USDC → SOL (native) | Executed | `0x41775633…` [🐞](https://debug.barn.cow.fi/order/0x41775633d9f0c82e478b0e14560851f7223a6a15ae7d3cedd1bbd5e74ba96e57) |
| 09:17:41 | 60 | USDC → SOL (native) | Executed | `0xa84589d7…` [🐞](https://debug.barn.cow.fi/order/0xa84589d7bc90fedc28307d6e2bf120bdefc975753e0c3b8243548c1d929280c6) |
| 09:17:47 | 61 | USDC → SOL (native) | Executed | `0x0c32dd97…` [🐞](https://debug.barn.cow.fi/order/0x0c32dd97e69a3d608eefae3f2a9125cafa9cace9914a2a2cd588869541cd39d7) |
| 09:17:51 | 62 | USDC → SOL (native) | Executed | `0xd8ab86a4…` [🐞](https://debug.barn.cow.fi/order/0xd8ab86a47c2b0d003191ced01c67bb1467f365276e0cdb1e7407e2c525486523) |
| 09:17:54 | 63 | USDC → SOL (native) | Executed | `0xa5b9a96c…` [🐞](https://debug.barn.cow.fi/order/0xa5b9a96c369edc6860f6d0e0d3658c67e2aa34eaa8655b0ecfe171b404be34a5) |
| 09:17:59 | 64 | USDC → SOL (native) | Executed | `0x59191376…` [🐞](https://debug.barn.cow.fi/order/0x591913766efdeafa88c9f5bd3318c21647f491df8e003f7161831603660cd34e) |
| 09:19:45 | 66 | USDC → SOL (native) | Executed | `0x5d7b90fd…` [🐞](https://debug.barn.cow.fi/order/0x5d7b90fd5bdd28a676cbc1b38e29ced9c870a25de2fdb9f43ee91967060be485) |
| 09:19:46 | 67 | USDC → SOL (native) | Executed | `0x91c359f3…` [🐞](https://debug.barn.cow.fi/order/0x91c359f32a4f224240012547fa4da1c26a1608d7210821374bc8141d425073c8) |
| 09:19:47 | 68 | USDC → SOL (native) | Executed | `0xb9c52e82…` [🐞](https://debug.barn.cow.fi/order/0xb9c52e829b6304ac5a4cb446c8b4bf02be6d3ee109e474d270f18d812899ca75) |
| 09:19:48 | 69 | USDT → SOL (native) | Executed | `0xa1bd6a29…` [🐞](https://debug.barn.cow.fi/order/0xa1bd6a291aaea909812d29578707ea75c999cbcdeaee9ddf997203813dffb8ae) |
| 09:19:49 | 70 | USDT → SOL (native) | Executed | `0x4a2732dd…` [🐞](https://debug.barn.cow.fi/order/0x4a2732dd6c451bf325c5fa19034ffa201b8364eba2fe48711601f8c4002d60f1) |
| 09:19:50 | 71 | USDT → SOL (native) | Executed | `0x2d797ca7…` [🐞](https://debug.barn.cow.fi/order/0x2d797ca79e694700fc695ffae033f36a202c433b2d1bcbb3bfb45386e0cbba76) |
| 09:19:51 | 72 | USDT → SOL (native) | Executed | `0x9276d320…` [🐞](https://debug.barn.cow.fi/order/0x9276d320b49aabcff836166f7d27ab533a022f43ef5ce4a51f8f63ca576cd7c5) |
| 09:19:51 | 65 | USDC → SOL (native) | Executed | `0x8de433af…` [🐞](https://debug.barn.cow.fi/order/0x8de433afde0c3b51af166e2b270955cfd9d63eef692b13bd33a5c420aa72e58b) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 124 | 96.1% |
| cancelled | 5 | 3.9% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 37s | 67s | 97s | 128s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 6ZUe…frSx | 124 | 100.0% | 124 | 21,836 | 37s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| rizzolver | 1683 | 200 | 196 | 98.0% | 0 | 8 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 377 times
- Orders filtered for `in_flight`: 21 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 120 | 115 | 95.8% |
| market buy | 9 | 9 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 90 | 85 | 94.4% |
| wSOL → JUP | 31 | 31 | 100.0% |
| wSOL → USDT | 6 | 6 | 100.0% |
| JUP → USDC | 2 | 2 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 5 | 4 | 80.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 5 | 5 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 5 | 5 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 5 | 5 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 4 | 4 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 4 | 4 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 4 | 4 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 4 | 3 | 75.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 4 | 4 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 2 | 66.7% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 3 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 3 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 3 | 3 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 3 | 3 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 3 | 3 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 3 | 3 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 1 | 50.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 2 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 2 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 2 | 1 | 50.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 2 | 2 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 2 | 2 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 2 | 2 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 1 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 1 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 1 | 1 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 1 | 1 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 1 | 1 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 1 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 1 | 1 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 1 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 1 | 1 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 1 | 1 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 5 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 09:05:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0e6ab5f8…` [🐞](https://debug.barn.cow.fi/order/0x0e6ab5f85d66e8db77d4fc6c5661d1ba3ff370b6e28378a49b3c74e7192b8520) |
| 09:05:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x47b862ab…` [🐞](https://debug.barn.cow.fi/order/0x47b862ab4d2490273e1197f8a46581cafd39ea78441c5658635b9a779c242314) |
| 09:05:22 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7d953567…` [🐞](https://debug.barn.cow.fi/order/0x7d953567fbbd8970f920ac465837689d368481d2ab0114fc42b1cca919d5f4b1) |
| 09:05:22 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6f944431…` [🐞](https://debug.barn.cow.fi/order/0x6f944431a65d0699219dd27806e4dc24822da6c606d5e311b6313aed8fd8166a) |
| 09:05:22 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xdc53e246…` [🐞](https://debug.barn.cow.fi/order/0xdc53e246099f73e204e8e0678a1ca49cf722f894b97bd752f308fdfc582da49c) |
