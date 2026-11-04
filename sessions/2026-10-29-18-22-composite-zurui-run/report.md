# Solana QoS report: 2026-10-29-18-22-composite-zurui-run

Barn, orders created between `2026-10-29T18:22:31.874Z` and `2026-10-29T18:57:51.747Z`. Data fetched 2026-10-29T19:00:57+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 158 |
| Orders executed | **56** (35.4%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 93 |
| Settlement txs | 56 |

## Scenario results

Target solver: `zurui`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-29T18:22:31.874Z | 2026-10-29T18:22:59.919Z | 2/6 | 4 | 3 | 3 | 33.3% |
| native-vs-wrapped-payouts | 2026-10-29T18:23:11.885Z | 2026-10-29T18:23:45.141Z | 6/12 | 6 | 6 | 6 | 50.0% |
| receiving-account-costs | 2026-10-29T18:24:12.721Z | 2026-10-29T18:24:46.160Z | 6/16 | 10 | 6 | 6 | 37.5% |
| solver-same-direction-25 | 2026-10-29T18:25:29.582Z | 2026-10-29T18:28:53.078Z | 1/25 | 24 | 25 | 1 | 4.0% |
| solver-burst-sell | 2026-10-29T18:30:40.507Z | 2026-10-29T18:41:48.059Z | 29/84 | 55 | 84 | 29 | 34.5% |
| solver-cow | 2026-10-29T18:45:07.683Z | 2026-10-29T18:47:52.190Z | 0/15 | 15 | 0 | 0 | 0.0% |
| solver-token-coverage | 2026-10-29T18:48:12.268Z | 2026-10-29T18:51:45.799Z | 2/52 | 50 | 25 | 2 | 3.8% |
| xstocks | 2026-10-29T18:52:59.863Z | 2026-10-29T18:53:50.939Z | 9/86 | 77 | 9 | 9 | 10.5% |

## Scenario

55 of 296 scenario rows completed. 0 retries, 79 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 18:22:31 | 1 | 1 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 18:22:32 | 2 | 2 | sell 0.005 SOL → USDT | filled | 8s | 1 |  |
| 18:22:32 | 3 | 3 | sell 0.5 JUP → USDC | failed | 19s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 18:22:40 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:22:40 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:22:50 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 7s | 0 | acquire JUP error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:23:11 | 7 | 4 | sell 0.005 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:23:11 | 8 | 5 | sell 0.005 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:23:11 | 9 | 6 | sell 0.005 SOL → USDC | filled | 11s | 1 |  |
| 18:23:11 | 10 | 7 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 18:23:12 | 11 | 4 | sell 0.2 USDC → SOL | failed | 7s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:23:13 | 12 | 5 | sell 0.2 USDC → wSOL | failed | 7s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:23:23 | 13 | 6 | sell 0.2 USDC → SOL | filled | 11s | 1 |  |
| 18:23:20 | 14 | 7 | sell 0.2 USDC → wSOL | filled | 8s | 1 |  |
| 18:23:19 | 15 | 4 | buy 0.002 SOL ← USDC | failed | 7s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:23:20 | 16 | 5 | buy 0.002 wSOL ← USDC | failed | 7s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:23:34 | 17 | 6 | buy 0.002 SOL ← USDC | filled | 8s | 1 |  |
| 18:23:28 | 18 | 7 | buy 0.002 wSOL ← USDC | filled | 12s | 1 |  |
| 18:24:12 | 19 | 8 | sell 0.0025 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:24:12 | 20 | 9 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 18:24:12 | 21 | 10 | buy 0.25 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:24:12 | 22 | 11 | buy 0.25 USDC ← SOL | filled | 20s | 1 |  |
| 18:24:12 | 23 | 12 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:24:12 | 24 | 13 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 19s | 1 |  |
| 18:24:12 | 25 | 14 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:24:12 | 26 | 15 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:24:13 | 27 | 8 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:24:25 | 28 | 9 | sell 0.0025 SOL → USDC | filled | 11s | 1 |  |
| 18:24:14 | 29 | 10 | buy 0.25 USDC ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:24:32 | 30 | 11 | buy 0.25 USDC ← SOL | filled | 9s | 1 |  |
| 18:24:14 | 31 | 12 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:24:32 | 32 | 13 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 12s | 1 |  |
| 18:24:13 | 33 | 14 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:24:13 | 34 | 15 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:25:29 | 35 | 16 | sell 0.005 SOL → JUP | failed | 196s | 1 | main timeout |
| 18:25:29 | 36 | 17 | sell 0.005 SOL → JUP | filled | 12s | 1 |  |
| 18:25:29 | 37 | 18 | sell 0.005 SOL → JUP | failed | 195s | 1 | main timeout |
| 18:25:29 | 38 | 19 | sell 0.005 SOL → JUP | failed | 196s | 1 | main timeout |
| 18:25:29 | 39 | 20 | sell 0.005 SOL → JUP | failed | 195s | 1 | main timeout |
| 18:25:29 | 40 | 21 | sell 0.005 SOL → JUP | failed | 196s | 1 | main timeout |
| 18:25:29 | 41 | 22 | sell 0.005 SOL → JUP | failed | 197s | 1 | main timeout |
| 18:25:29 | 42 | 23 | sell 0.005 SOL → JUP | failed | 201s | 1 | main timeout |
| 18:25:29 | 43 | 24 | sell 0.005 SOL → JUP | failed | 203s | 1 | main timeout |
| 18:25:29 | 44 | 25 | sell 0.005 SOL → JUP | failed | 198s | 1 | main timeout |
| 18:25:29 | 45 | 26 | sell 0.005 SOL → JUP | failed | 199s | 1 | main timeout |
| 18:25:29 | 46 | 27 | sell 0.005 SOL → JUP | failed | 197s | 1 | main timeout |
| 18:25:29 | 47 | 28 | sell 0.005 SOL → JUP | failed | 199s | 1 | main timeout |
| 18:25:29 | 48 | 29 | sell 0.005 SOL → JUP | failed | 199s | 1 | main timeout |
| 18:25:29 | 49 | 30 | sell 0.005 SOL → JUP | failed | 200s | 1 | main timeout |
| 18:25:29 | 50 | 31 | sell 0.005 SOL → JUP | failed | 200s | 1 | main timeout |
| 18:25:29 | 51 | 32 | sell 0.005 SOL → JUP | failed | 201s | 1 | main timeout |
| 18:25:29 | 52 | 33 | sell 0.005 SOL → JUP | failed | 203s | 1 | main timeout |
| 18:25:29 | 53 | 34 | sell 0.005 SOL → JUP | failed | 201s | 1 | main timeout |
| 18:25:29 | 54 | 35 | sell 0.005 SOL → JUP | failed | 202s | 1 | main timeout |
| 18:25:29 | 55 | 36 | sell 0.005 SOL → JUP | failed | 202s | 1 | main timeout |
| 18:25:29 | 56 | 37 | sell 0.005 SOL → JUP | failed | 202s | 1 | main timeout |
| 18:25:29 | 57 | 38 | sell 0.005 SOL → JUP | failed | 202s | 1 | main timeout |
| 18:25:29 | 58 | 39 | sell 0.005 SOL → JUP | failed | 202s | 1 | main timeout |
| 18:25:29 | 59 | 40 | sell 0.005 SOL → JUP | failed | 202s | 1 | main timeout |
| 18:30:40 | 60 | 41 | sell 0.0025 SOL → USDC | filled | 24s | 1 |  |
| 18:30:40 | 61 | 42 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 18:30:40 | 62 | 43 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 18:30:40 | 63 | 44 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 18:32:10 | 64 | 41 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 18:32:10 | 65 | 42 | sell 0.003 SOL → USDC | filled | 49s | 1 |  |
| 18:32:10 | 66 | 43 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 18:32:10 | 67 | 44 | sell 0.004 SOL → USDC | filled | 37s | 1 |  |
| 18:32:10 | 68 | 45 | sell 0.0025 SOL → USDC | filled | 29s | 1 |  |
| 18:32:10 | 69 | 46 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 18:32:10 | 70 | 47 | sell 0.0035 SOL → USDC | filled | 46s | 1 |  |
| 18:32:10 | 71 | 48 | sell 0.004 SOL → USDC | filled | 41s | 1 |  |
| 18:33:40 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 73s | 1 |  |
| 18:33:40 | 73 | 42 | sell 0.003 SOL → USDC | filled | 87s | 1 |  |
| 18:33:40 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 51s | 1 |  |
| 18:33:40 | 75 | 44 | sell 0.004 SOL → USDC | filled | 93s | 1 |  |
| 18:33:40 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 71s | 1 |  |
| 18:33:40 | 77 | 46 | sell 0.003 SOL → USDC | filled | 61s | 1 |  |
| 18:33:40 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 41s | 1 |  |
| 18:33:40 | 79 | 48 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 18:33:40 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 18:33:40 | 81 | 50 | sell 0.003 SOL → USDC | filled | 56s | 1 |  |
| 18:33:40 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 37s | 1 |  |
| 18:33:40 | 83 | 52 | sell 0.004 SOL → USDC | filled | 91s | 1 |  |
| 18:33:40 | 84 | 53 | sell 0.0025 SOL → USDC | filled | 79s | 1 |  |
| 18:33:40 | 85 | 54 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 18:33:40 | 86 | 55 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 18:33:40 | 87 | 56 | sell 0.004 SOL → USDC | filled | 25s | 1 |  |
| 18:35:10 | 88 | 41 | sell 0.0025 SOL → USDC | failed | 197s | 1 | main timeout |
| 18:35:10 | 89 | 42 | sell 0.003 SOL → USDC | failed | 202s | 1 | main timeout |
| 18:35:10 | 90 | 43 | sell 0.0035 SOL → USDC | failed | 197s | 1 | main timeout |
| 18:35:13 | 91 | 44 | sell 0.004 SOL → USDC | failed | 202s | 1 | main timeout |
| 18:35:10 | 92 | 45 | sell 0.0025 SOL → USDC | failed | 200s | 1 | main timeout |
| 18:35:10 | 93 | 46 | sell 0.003 SOL → USDC | failed | 200s | 1 | main timeout |
| 18:35:10 | 94 | 47 | sell 0.0035 SOL → USDC | failed | 196s | 1 | main timeout |
| 18:35:10 | 95 | 48 | sell 0.004 SOL → USDC | failed | 201s | 1 | main timeout |
| 18:35:10 | 96 | 49 | sell 0.0025 SOL → USDC | failed | 202s | 1 | main timeout |
| 18:35:10 | 97 | 50 | sell 0.003 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:35:10 | 98 | 51 | sell 0.0035 SOL → USDC | failed | 195s | 1 | main timeout |
| 18:35:11 | 99 | 52 | sell 0.004 SOL → USDC | failed | 204s | 1 | main timeout |
| 18:35:10 | 100 | 53 | sell 0.0025 SOL → USDC | failed | 198s | 1 | main timeout |
| 18:35:10 | 101 | 54 | sell 0.003 SOL → USDC | failed | 195s | 1 | main timeout |
| 18:35:10 | 102 | 55 | sell 0.0035 SOL → USDC | failed | 202s | 1 | main timeout |
| 18:35:10 | 103 | 56 | sell 0.004 SOL → USDC | failed | 194s | 1 | main timeout |
| 18:35:10 | 104 | 57 | sell 0.0025 SOL → USDC | failed | 203s | 1 | main timeout |
| 18:35:10 | 105 | 58 | sell 0.003 SOL → USDC | failed | 199s | 1 | main timeout |
| 18:35:10 | 106 | 59 | sell 0.0035 SOL → USDC | failed | 199s | 1 | main timeout |
| 18:35:10 | 107 | 60 | sell 0.004 SOL → USDC | failed | 200s | 1 | main timeout |
| 18:35:10 | 108 | 61 | sell 0.0025 SOL → USDC | failed | 203s | 1 | main timeout |
| 18:35:10 | 109 | 62 | sell 0.003 SOL → USDC | failed | 206s | 1 | main timeout |
| 18:35:10 | 110 | 63 | sell 0.0035 SOL → USDC | failed | 203s | 1 | main timeout |
| 18:35:10 | 111 | 64 | sell 0.004 SOL → USDC | failed | 203s | 1 | main timeout |
| 18:38:27 | 112 | 41 | sell 0.0025 SOL → USDC | failed | 193s | 1 | main timeout |
| 18:38:32 | 113 | 42 | sell 0.003 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:38:27 | 114 | 43 | sell 0.0035 SOL → USDC | failed | 193s | 1 | main timeout |
| 18:38:35 | 115 | 44 | sell 0.004 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:38:30 | 116 | 45 | sell 0.0025 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:38:30 | 117 | 46 | sell 0.003 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:38:26 | 118 | 47 | sell 0.0035 SOL → USDC | failed | 193s | 1 | main timeout |
| 18:38:31 | 119 | 48 | sell 0.004 SOL → USDC | failed | 196s | 1 | main timeout |
| 18:38:32 | 120 | 49 | sell 0.0025 SOL → USDC | failed | 194s | 1 | main timeout |
| 18:38:22 | 121 | 50 | sell 0.003 SOL → USDC | filled | 14s | 1 |  |
| 18:38:25 | 122 | 51 | sell 0.0035 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:38:35 | 123 | 52 | sell 0.004 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:38:28 | 124 | 53 | sell 0.0025 SOL → USDC | failed | 195s | 1 | main timeout |
| 18:38:25 | 125 | 54 | sell 0.003 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:38:32 | 126 | 55 | sell 0.0035 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:38:24 | 127 | 56 | sell 0.004 SOL → USDC | failed | 196s | 1 | main timeout |
| 18:38:33 | 128 | 57 | sell 0.0025 SOL → USDC | failed | 194s | 1 | main timeout |
| 18:38:29 | 129 | 58 | sell 0.003 SOL → USDC | failed | 194s | 1 | main timeout |
| 18:38:29 | 130 | 59 | sell 0.0035 SOL → USDC | failed | 191s | 1 | main timeout |
| 18:38:31 | 131 | 60 | sell 0.004 SOL → USDC | failed | 193s | 1 | main timeout |
| 18:38:33 | 132 | 61 | sell 0.0025 SOL → USDC | failed | 193s | 1 | main timeout |
| 18:38:36 | 133 | 62 | sell 0.003 SOL → USDC | failed | 191s | 1 | main timeout |
| 18:38:33 | 134 | 63 | sell 0.0035 SOL → USDC | failed | 191s | 1 | main timeout |
| 18:38:33 | 135 | 64 | sell 0.004 SOL → USDC | failed | 194s | 1 | main timeout |
| 18:36:40 | 136 | 65 | sell 0.0025 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:36:40 | 137 | 66 | sell 0.003 SOL → USDC | failed | 190s | 1 | main timeout |
| 18:36:40 | 138 | 67 | sell 0.0035 SOL → USDC | failed | 191s | 1 | main timeout |
| 18:36:40 | 139 | 68 | sell 0.004 SOL → USDC | failed | 191s | 1 | main timeout |
| 18:36:40 | 140 | 69 | sell 0.0025 SOL → USDC | failed | 192s | 1 | main timeout |
| 18:36:40 | 141 | 70 | sell 0.003 SOL → USDC | failed | 197s | 1 | main timeout |
| 18:36:40 | 142 | 71 | sell 0.0035 SOL → USDC | failed | 194s | 1 | main timeout |
| 18:36:40 | 143 | 72 | sell 0.004 SOL → USDC | failed | 194s | 1 | main timeout |
| 18:45:07 | 144 | 74 | buy 2.6 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:45:07 | 145 | 76 | buy 1.3 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:45:07 | 146 | 77 | buy 3.1 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:45:07 | 147 | 78 | buy 3.1 USDT ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:45:07 | 148 | 79 | buy 1.1 USDT ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:45:07 | 149 | 80 | buy 3.2 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:47:37 | 150 | 73 | sell 0.02 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:47:37 | 151 | 74 | buy 0.02 SOL ← USDC | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:47:37 | 152 | 75 | sell 0.03 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:47:37 | 153 | 76 | sell 1.2 USDC → SOL | failed | 8s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:47:37 | 154 | 77 | sell 3 USDC → USDT | failed | 8s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:47:37 | 155 | 78 | sell 3 USDT → USDC | failed | 8s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:47:37 | 156 | 79 | sell 1 USDT → USDC | failed | 7s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:47:37 | 157 | 80 | sell 3 USDC → USDT | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:47:37 | 158 | 81 | sell 0.02 SOL → JUP | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:12 | 159 | 82 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:12 | 160 | 83 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:12 | 161 | 84 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:12 | 162 | 85 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 197s | 1 | main timeout |
| 18:48:12 | 163 | 86 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:12 | 164 | 87 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:12 | 165 | 88 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:12 | 166 | 89 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 208s | 1 | main timeout |
| 18:48:13 | 167 | 90 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:13 | 168 | 91 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:13 | 169 | 92 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:13 | 170 | 93 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 207s | 1 | main timeout |
| 18:48:13 | 171 | 94 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:13 | 172 | 95 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:13 | 173 | 96 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:48:13 | 174 | 97 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 201s | 1 | main timeout |
| 18:48:13 | 175 | 98 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 197s | 1 | main timeout |
| 18:48:13 | 176 | 99 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 198s | 1 | main timeout |
| 18:48:14 | 177 | 100 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 202s | 1 | main timeout |
| 18:48:14 | 178 | 101 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 18s | 1 |  |
| 18:48:14 | 179 | 102 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 18s | 1 |  |
| 18:48:14 | 180 | 103 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 199s | 1 | main timeout |
| 18:48:14 | 181 | 104 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 204s | 1 | main timeout |
| 18:48:14 | 182 | 105 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 201s | 1 | main timeout |
| 18:48:14 | 183 | 106 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 202s | 1 | main timeout |
| 18:48:14 | 184 | 107 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 206s | 1 | main timeout |
| 18:48:14 | 185 | 108 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 206s | 1 | main timeout |
| 18:48:15 | 186 | 109 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 203s | 1 | main timeout |
| 18:48:15 | 187 | 110 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 206s | 1 | main timeout |
| 18:48:15 | 188 | 111 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 201s | 1 | main timeout |
| 18:48:15 | 189 | 112 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 202s | 1 | main timeout |
| 18:48:15 | 190 | 113 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 206s | 1 | main timeout |
| 18:48:15 | 191 | 114 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 202s | 1 | main timeout |
| 18:48:15 | 192 | 115 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 202s | 1 | main timeout |
| 18:48:15 | 193 | 116 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 203s | 1 | main timeout |
| 18:48:15 | 194 | 117 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 203s | 1 | main timeout |
| 18:48:15 | 195 | 118 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 205s | 1 | main timeout |
| 18:48:19 | 196 | 82 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:19 | 197 | 83 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:19 | 198 | 84 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:51:29 | 199 | 85 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:20 | 200 | 86 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:20 | 201 | 87 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:20 | 202 | 88 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:51:40 | 203 | 89 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:21 | 204 | 90 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:20 | 205 | 91 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:20 | 206 | 92 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:51:40 | 207 | 93 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:21 | 208 | 94 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:21 | 209 | 95 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:48:21 | 210 | 96 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:52:59 | 211 | 119 | sell 0.0025 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:52:59 | 212 | 120 | sell 0.0025 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:52:59 | 213 | 121 | sell 0.0025 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:00 | 214 | 122 | sell 0.0025 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | filled | 11s | 1 |  |
| 18:53:00 | 215 | 123 | sell 0.0025 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:00 | 216 | 124 | sell 0.0025 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:00 | 217 | 125 | sell 0.0025 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:00 | 218 | 126 | sell 0.0025 SOL → XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM | filled | 11s | 1 |  |
| 18:53:00 | 219 | 127 | sell 0.0025 SOL → XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:00 | 220 | 128 | sell 0.0025 SOL → XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:00 | 221 | 129 | sell 0.0025 SOL → XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:00 | 222 | 130 | sell 0.0025 SOL → XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe | filled | 15s | 1 |  |
| 18:53:00 | 223 | 131 | sell 0.0025 SOL → XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:01 | 224 | 132 | sell 0.0025 SOL → XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB | failed | 4s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:03 | 225 | 125 | sell 0.00078292 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | failed | 10s | 0 | acquire XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:02 | 226 | 119 | buy 0.00321248 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:02 | 227 | 120 | buy 0.00165941 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:02 | 228 | 121 | buy 0.0003632 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:11 | 229 | 122 | buy 0.0004981 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:03 | 230 | 123 | buy 0.00995113 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:03 | 231 | 124 | buy 0.00112024 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:13 | 232 | 125 | buy 0.00130486 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:11 | 233 | 126 | buy 0.00270181 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:03 | 234 | 127 | buy 0.00191264 XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:04 | 235 | 128 | buy 0.00076666 XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:04 | 236 | 129 | buy 0.00156561 XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:15 | 237 | 130 | buy 0.00068993 XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:04 | 238 | 131 | buy 0.00702429 XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:04 | 239 | 132 | buy 0.00379726 XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:04 | 240 | 119 | sell 0.0025 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:04 | 241 | 120 | sell 0.0025 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:05 | 242 | 121 | sell 0.0025 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:13 | 243 | 122 | sell 0.0025 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | filled | 12s | 1 |  |
| 18:53:04 | 244 | 123 | sell 0.0025 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:05 | 245 | 124 | sell 0.0025 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:14 | 246 | 125 | sell 0.0025 SOL → XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:13 | 247 | 126 | sell 0.0025 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | filled | 12s | 1 |  |
| 18:53:05 | 248 | 127 | sell 0.0025 SOL → XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:06 | 249 | 128 | sell 0.0025 SOL → Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:05 | 250 | 129 | sell 0.0025 SOL → XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:16 | 251 | 130 | sell 0.0025 SOL → XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV | filled | 13s | 1 |  |
| 18:53:05 | 252 | 131 | sell 0.0025 SOL → XsXb7KCxcxTi6hqWfYyEe1kpTwtiCeU5TJbEz8N7RWn | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:53:06 | 253 | 132 | sell 0.0025 SOL → Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:06 | 254 | 119 | sell 0.00020765 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | failed | 8s | 0 | acquire XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:15 | 255 | 119 | buy 0.00034609 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:06 | 256 | 120 | buy 0.00072217 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:07 | 257 | 121 | buy 0.00036664 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:25 | 258 | 122 | buy 0.00076634 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:07 | 259 | 123 | buy 0.00247816 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:07 | 260 | 124 | buy 0.00104887 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:15 | 261 | 125 | buy 0.20269702 XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:25 | 262 | 126 | buy 0.00293543 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:07 | 263 | 127 | buy 0.00028462 XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:08 | 264 | 128 | buy 0.00236142 Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:07 | 265 | 129 | buy 0.00047014 XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:28 | 266 | 130 | buy 0.00060557 XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:08 | 267 | 132 | buy 0.00023241 Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:15 | 268 | 119 | sell 0.0025 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:07 | 269 | 120 | sell 0.0025 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:08 | 270 | 121 | sell 0.0025 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:25 | 271 | 122 | sell 0.0025 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | filled | 12s | 1 |  |
| 18:53:08 | 272 | 123 | sell 0.0025 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:08 | 273 | 124 | sell 0.0025 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:15 | 274 | 125 | sell 0.0025 SOL → Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:25 | 275 | 126 | sell 0.0025 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | filled | 12s | 1 |  |
| 18:53:09 | 276 | 127 | sell 0.0025 SOL → XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:10 | 277 | 128 | sell 0.0025 SOL → XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:09 | 278 | 129 | sell 0.0025 SOL → XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:28 | 279 | 130 | sell 0.0025 SOL → Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj | filled | 12s | 1 |  |
| 18:53:07 | 280 | 131 | sell 0.0025 SOL → XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:10 | 281 | 132 | sell 0.0025 SOL → XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:12 | 282 | 128 | sell 0.00022735 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL → SOL | failed | 7s | 0 | acquire XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:53:15 | 283 | 119 | buy 0.00120141 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:10 | 284 | 120 | buy 0.00174356 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:10 | 285 | 121 | buy 0.00070541 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:37 | 286 | 122 | buy 0.00148708 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:10 | 287 | 123 | buy 0.00078968 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:11 | 288 | 124 | buy 0.00248053 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:16 | 289 | 125 | buy 0.06056963 Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:37 | 290 | 126 | buy 0.00052262 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:11 | 291 | 127 | buy 0.00172031 XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:18 | 292 | 128 | buy 0.00037893 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:11 | 293 | 129 | buy 0.00106586 XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:40 | 294 | 130 | buy 0.00018281 Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:09 | 295 | 131 | buy 0.00170138 XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:53:12 | 296 | 132 | buy 0.01072636 XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

139 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| InvalidTransaction | main | 63 | SOL → USDC ×13, SOL → USDT ×3, SOL → USDG ×3, SOL → CRCLx ×2, SOL → NVDAx ×2, SOL → SPCXx ×2, SOL → TSLAx ×2, SOL → JUP, SOL → ANSEM, SOL → PAID, SOL → PYUSD, SOL → CASH, SOL → USDv, SOL → SKHY, SOL → SPCX, SOL → QQQx, SOL → GMEx, SOL → MCDx, SOL → PLTRx, SOL → ORCLx, SOL → AVGOx, SOL → XOMx, SOL → NVOx, SOL → UBERx, SOL → SPYx, SOL → METAx, SOL → HOODx, SOL → AMZNx, SOL → VIDAx, SOL → MUx, SOL → WMTx, SOL → AMDx, SOL → LLYx, SOL → MSTRx, SOL → GLDx, SOL → AAPLx, SOL → STRCx, SOL → DFDVx, SOL → TQQQx, SOL → NFLXx, SOL → MRVLx, SOL → SKHYx, SOL → BMNRx | the bundle must not create the buy token account |
| NoLiquidity | quote | 60 | SOL → USDG ×5, SOL → CRCLx ×2, SOL → SPYx ×2, SOL → NVDAx ×2, SOL → SPCXx ×2, SOL → TSLAx ×2, SOL → ANSEM, SOL → PAID, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → USDv, SOL → SKHY, SOL → MU, SOL → SPCX, SOL → QQQx, SOL → MSFTx, SOL → GMEx, SOL → MCDx, SOL → PLTRx, SOL → INTCx, SOL → ORCLx, SOL → AVGOx, SOL → XOMx, SOL → UNHx, SOL → NVOx, SOL → UBERx, SOL → METAx, SOL → GOOGLx, SOL → HOODx, SOL → AMZNx, SOL → VIDAx, SOL → KOx, SOL → MUx, SOL → WMTx, SOL → AMDx, SOL → TSMx, SOL → LLYx, SOL → MSTRx, SOL → GLDx, SOL → COINx, SOL → AAPLx, SOL → STRCx, SOL → DFDVx, SOL → BRK.Bx, SOL → TQQQx, SOL → NFLXx, SOL → MRVLx, SOL → SNDKx, SOL → SKHYx, SOL → BMNRx | no route found |
| InvalidTransaction | acquire | 14 | SOL → USDC ×8, SOL → USDT ×2, SOL → JUP, SOL → PLTRx, SOL → SPYx, SOL → NFLXx | the bundle must not create the buy token account |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |
| NoLiquidity | main | 1 | SOL → TCENTx | no route found |

Scenario orders: 158 (157 main, 1 acquire). Cleanup placed 45 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 18:23:46 | 6 | USDC → SOL (native) | Executed | `0xcc90f69a…` [🐞](https://debug.barn.cow.fi/order/0xcc90f69aa9f660ec28b172a4456d550b3a9c4d5b9537450e79090736ce3eb5aa) |
| 18:24:48 | 9 | USDC → SOL (native) | Executed | `0xd7830abe…` [🐞](https://debug.barn.cow.fi/order/0xd7830abefcc4ec64bc40bb9f2b470a2716805c1bc66c078bc2055f4eef063c21) |
| 18:24:48 | 9 | JUP → SOL (native) | Executed | `0x02862b5c…` [🐞](https://debug.barn.cow.fi/order/0x02862b5cc9c5e3167e1c7173619970bdf0dc85252f9a79387601c68a2ffb4ff5) |
| 18:24:49 | 11 | USDC → SOL (native) | Executed | `0x502115a3…` [🐞](https://debug.barn.cow.fi/order/0x502115a3b291a50c922fd4ab8533f6e3e2e9bb783d47ef6734ee63cc88d2883c) |
| 18:24:50 | 13 | JUP → SOL (native) | Executed | `0xc8a0c19b…` [🐞](https://debug.barn.cow.fi/order/0xc8a0c19b56fa8a76db89d5dee9789ac6df443502a15117b6a54fd52d5ab702db) |
| 18:24:50 | 13 | USDG → SOL (native) | Executed | `0x15063a49…` [🐞](https://debug.barn.cow.fi/order/0x15063a49952b74fc2e1ca93607314bbb521f53a9cfa82fdc0f8120cdda03362d) |
| 18:24:51 | 14 | JUP → SOL (native) | Executed | `0x2f1b93ea…` [🐞](https://debug.barn.cow.fi/order/0x2f1b93eaa1af09cd20727f26f6ccee660ad8fb74d4ae2a647117f9f59865d1e4) |
| 18:28:55 | 17 | JUP → SOL (native) | Executed | `0x8a7fd8a9…` [🐞](https://debug.barn.cow.fi/order/0x8a7fd8a94412679c81e6b14518935392090b0b90b5f9927953cae69abb19e96e) |
| 18:28:56 | 18 | JUP → SOL (native) | Executed | `0x8adb3817…` [🐞](https://debug.barn.cow.fi/order/0x8adb3817d5c649a3526ea29b8971c8ff7378d68aaeecfea63c05a1d472e3f41f) |
| 18:28:57 | 19 | JUP → SOL (native) | Executed | `0x3f2c2538…` [🐞](https://debug.barn.cow.fi/order/0x3f2c253807d5126b6bc3038f99ce739f769fab9c87cc36b19bd8a37101f03ece) |
| 18:28:58 | 20 | JUP → SOL (native) | Executed | `0x171e147d…` [🐞](https://debug.barn.cow.fi/order/0x171e147d89e0d4c36e4a911fb6601df661ef39efa32970f0dec79beaa0233743) |
| 18:28:59 | 21 | JUP → SOL (native) | Executed | `0x51e889de…` [🐞](https://debug.barn.cow.fi/order/0x51e889de62056eca5168cf60ffc0d93e67b0d06c623756ebdc3237ed0858deb4) |
| 18:29:00 | 22 | JUP → SOL (native) | Executed | `0x73a6dfb2…` [🐞](https://debug.barn.cow.fi/order/0x73a6dfb2df7ff68e760aaa24c89877fbcb58fdcad3aa5ff2a0ad9329a8bda614) |
| 18:41:50 | 42 | USDC → SOL (native) | Executed | `0x4e021986…` [🐞](https://debug.barn.cow.fi/order/0x4e0219862ffcf2262be67cd9030e9dcaf93f6941ae3b1b31895918b1641dd3ec) |
| 18:41:51 | 43 | USDC → SOL (native) | Executed | `0x760fa3d4…` [🐞](https://debug.barn.cow.fi/order/0x760fa3d431eea57409dbbd66c2d3aebca4611b5b0eb92daa708df88b3f8f76f5) |
| 18:41:53 | 44 | USDC → SOL (native) | Executed | `0x59f9f088…` [🐞](https://debug.barn.cow.fi/order/0x59f9f088517eaf8bb15e7bd9d6381c2f00dafd2b5198b58f2cb6a696e9cd1851) |
| 18:41:53 | 45 | USDC → SOL (native) | Executed | `0x9e9c9abb…` [🐞](https://debug.barn.cow.fi/order/0x9e9c9abb3063ee47da9f4b2b9d2d2440df679e631a0a8dced541017ba001c88a) |
| 18:41:54 | 46 | USDC → SOL (native) | Executed | `0xe9eeee15…` [🐞](https://debug.barn.cow.fi/order/0xe9eeee15d313fbe020cf5ce48dddae53477bea66bd63b345c5f7986f761e558f) |
| 18:41:55 | 47 | USDC → SOL (native) | Executed | `0xb9d610c4…` [🐞](https://debug.barn.cow.fi/order/0xb9d610c44435c3baeba33bbc1f3c35ed77684bc855b10382c9ab33addbdac292) |
| 18:41:57 | 48 | USDC → SOL (native) | Executed | `0xc98fca1b…` [🐞](https://debug.barn.cow.fi/order/0xc98fca1b0d55584ac9c11b94ebfc4e7479727164fd967a4cc2711a3141e647e2) |
| 18:41:57 | 49 | USDC → SOL (native) | Executed | `0x8cd0b54b…` [🐞](https://debug.barn.cow.fi/order/0x8cd0b54b8f95420614d42e98d6bda2899beb5187eabd10f5012edef02e4a85cf) |
| 18:41:58 | 50 | USDC → SOL (native) | Executed | `0x234ad6c7…` [🐞](https://debug.barn.cow.fi/order/0x234ad6c79e1d39c776632c2a48b0b164ccd9dd9b4a3d6a340303c45be17b7314) |
| 18:42:02 | 41 | USDC → SOL (native) | Executed | `0xe0fc1735…` [🐞](https://debug.barn.cow.fi/order/0xe0fc1735a5ddb833d202c25c987082ca110cd183972597f53d5da34a35a0e2d0) |
| 18:42:07 | 51 | USDC → SOL (native) | Executed | `0xf1a8f6c2…` [🐞](https://debug.barn.cow.fi/order/0xf1a8f6c23683657524c16a83bdef98d78601bbbd0882e464f0a0c0497ab7457c) |
| 18:42:16 | 52 | USDC → SOL (native) | Executed | `0xb359c308…` [🐞](https://debug.barn.cow.fi/order/0xb359c308a7da89132cd01c7ff3350a9221aec199d30db34b20c810454a075d9f) |
| 18:42:20 | 53 | USDC → SOL (native) | Executed | `0x36ba1b64…` [🐞](https://debug.barn.cow.fi/order/0x36ba1b6440c145b095256f58729369ffd2d1dde4329de357ef7dfa668ea3caea) |
| 18:42:30 | 54 | USDC → SOL (native) | Executed | `0xfb3aeda4…` [🐞](https://debug.barn.cow.fi/order/0xfb3aeda4c70354e219c6442a92681172272a012dcf27446b927abc2b4ef2b3da) |
| 18:42:38 | 55 | USDC → SOL (native) | Executed | `0xc48d62f9…` [🐞](https://debug.barn.cow.fi/order/0xc48d62f9b070d15f588618fb01c0012c26ea3d7f338a95e23634dc72ebcf1000) |
| 18:42:40 | 56 | USDC → SOL (native) | Executed | `0x7ae3e860…` [🐞](https://debug.barn.cow.fi/order/0x7ae3e8607a9f9b77cc3556383f44b7eee24ea54c7465f0c3a5da15c7fb98d489) |
| 18:42:44 | 57 | USDC → SOL (native) | Executed | `0x038fa8ba…` [🐞](https://debug.barn.cow.fi/order/0x038fa8ba644adcce712e228bb5a527cd11e1d4f53c3d5eb3d29f51cd9b3b20c4) |
| 18:43:27 | 66 | USDC → SOL (native) | Executed | `0x88a84133…` [🐞](https://debug.barn.cow.fi/order/0x88a8413329a2761f164bb85b597a12c73639653e93e12d92f37d4ba55118049a) |
| 18:51:59 | 102 | JupSOL → SOL (native) | Executed | `0x164bd374…` [🐞](https://debug.barn.cow.fi/order/0x164bd3744c478739bcabc34359797d18dfe07c68597a6cd6a14d0dbc1fe6425b) |
| 18:51:59 | 101 | mSOL → SOL (native) | Executed | `0xe14eda4b…` [🐞](https://debug.barn.cow.fi/order/0xe14eda4b5afd567a36ea6bd0b4cb05bbc7e7cf4f3b7b7e498dcbbd7dfe5ebcdc) |
| 18:53:54 | 126 | BRK.Bx → SOL (native) | Executed | `0x57e7e18b…` [🐞](https://debug.barn.cow.fi/order/0x57e7e18ba8908fd4598573e03c8f1489ea3c7ebd797b5ec734074753a2f4cb56) |
| 18:53:54 | 126 | INTCx → SOL (native) | Executed | `0x3b16aa1c…` [🐞](https://debug.barn.cow.fi/order/0x3b16aa1c299ddc63170b02b3ec735051137c8dc1011bc7b49eadd2d9da633301) |
| 18:53:55 | 126 | KOx → SOL (native) | Executed | `0x037d5742…` [🐞](https://debug.barn.cow.fi/order/0x037d57429be722dbe21602736ab3312f23922423157485201c117ab4a7214b5b) |
| 18:53:55 | 130 | TSMx → SOL (native) | Executed | `0x26947dc3…` [🐞](https://debug.barn.cow.fi/order/0x26947dc3976f72134a1539de5995abd17178ae069967f5a877be046cb5432ed0) |
| 18:53:56 | 130 | UNHx → SOL (native) | Executed | `0xd8a5f4a3…` [🐞](https://debug.barn.cow.fi/order/0xd8a5f4a3a7791682b2841620ed5760f4c150bddb356dc46acee2d8b0c0bbbd3d) |
| 18:53:56 | 130 | SNDKx → SOL (native) | Executed | `0xf1d16848…` [🐞](https://debug.barn.cow.fi/order/0xf1d1684847d2d88d6dd83fd1bc0698b740fb5785348c2b845e2f74fea79dfbe2) |
| 18:53:58 | 122 | MSFTx → SOL (native) | Executed | `0x30239dcc…` [🐞](https://debug.barn.cow.fi/order/0x30239dcc7b5438cd6a5f75927169516d5b06b0236f64ad61de6420d8f935e448) |
| 18:53:58 | 122 | COINx → SOL (native) | Executed | `0x404bcc13…` [🐞](https://debug.barn.cow.fi/order/0x404bcc13846892542653e6a0e9bb67c7ecec902fd12428975dbc5eaf9154235e) |
| 18:54:04 | 122 | GOOGLx → SOL (native) | Executed | `0x39f505ff…` [🐞](https://debug.barn.cow.fi/order/0x39f505ff1c5e8ffc9993fb1a0622545085c3c2c3bf3b17999ec35353cc9ecf99) |
| 18:55:22 | 1 | USDC → SOL (native) | Executed | `0x7af07924…` [🐞](https://debug.barn.cow.fi/order/0x7af079243febd120daf30885403f8fca78f540de49eb3f08a548c79590ad6b7d) |
| 18:55:23 | 2 | USDT → SOL (native) | Executed | `0xb5e96211…` [🐞](https://debug.barn.cow.fi/order/0xb5e9621182f44dadcab75f1e4e780d2b8138ab2f51d0e2b8ef3194bb91517ba4) |
| 18:55:24 | 3 | JUP → SOL (native) | Executed | `0xc93c060e…` [🐞](https://debug.barn.cow.fi/order/0xc93c060ec8b66eec5d463ee75afc89689d1c6e3f8064def53b7478760565854f) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| cancelled | 102 | 64.6% |
| executed | 56 | 35.4% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 9s | 32s | 63s | 88s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| FKtU…4q3H | 56 | 100.0% | 56 | 73,344 | 9s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| zurui | 140 | 101 | 101 | 100.0% | 0 | 0 | 159 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 412 times
- Orders filtered for `in_flight`: 57 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 154 | 52 | 33.8% |
| market buy | 4 | 4 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 91 | 36 | 39.6% |
| wSOL → JUP | 26 | 2 | 7.7% |
| USDC → wSOL | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 0 | 0.0% |
| wSOL → Bonk | 1 | 0 | 0.0% |
| wSOL → $WIF | 1 | 0 | 0.0% |
| wSOL → POPCAT | 1 | 0 | 0.0% |
| wSOL → JitoSOL | 1 | 0 | 0.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 0 | 0.0% |
| wSOL → EURC | 1 | 0 | 0.0% |
| wSOL → USDY | 1 | 0 | 0.0% |
| wSOL → SPYx | 1 | 0 | 0.0% |
| wSOL → INF | 1 | 0 | 0.0% |
| wSOL → ETH | 1 | 0 | 0.0% |
| wSOL → BNB | 1 | 0 | 0.0% |
| wSOL → XAUt0 | 1 | 0 | 0.0% |
| wSOL → USDe | 1 | 0 | 0.0% |
| wSOL → GLDx | 1 | 0 | 0.0% |
| wSOL → EUROP | 1 | 0 | 0.0% |
| wSOL → Fartcoin | 1 | 0 | 0.0% |
| wSOL → JLP | 1 | 0 | 0.0% |
| wSOL → MU | 1 | 0 | 0.0% |
| wSOL → MEW | 1 | 0 | 0.0% |
| wSOL → BOME | 1 | 0 | 0.0% |
| wSOL → hyloSOL | 1 | 0 | 0.0% |
| wSOL → PSOL | 1 | 0 | 0.0% |
| wSOL → MSFTx | 1 | 1 | 100.0% |
| wSOL → INTCx | 1 | 1 | 100.0% |
| wSOL → UNHx | 1 | 1 | 100.0% |
| wSOL → GOOGLx | 1 | 1 | 100.0% |
| wSOL → KOx | 1 | 1 | 100.0% |
| wSOL → TSMx | 1 | 1 | 100.0% |
| wSOL → COINx | 1 | 1 | 100.0% |
| wSOL → BRK.Bx | 1 | 1 | 100.0% |
| wSOL → SNDKx | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 5 | 3 | 60.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 5 | 3 | 60.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 5 | 3 | 60.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 5 | 3 | 60.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 4 | 2 | 50.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 4 | 2 | 50.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 4 | 2 | 50.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 4 | 2 | 50.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 3 | 3 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 3 | 3 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 3 | 2 | 66.7% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 3 | 1 | 33.3% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 3 | 1 | 33.3% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 3 | 1 | 33.3% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 3 | 1 | 33.3% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 3 | 1 | 33.3% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 3 | 1 | 33.3% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 3 | 1 | 33.3% |
| `ALRkrC3Ztr2WYqbFhEYP26DnAK3D18kkhARDENoF5M5d` | 3 | 3 | 100.0% |
| `WNij2mXZQ2QionkPDF2N8AB1Z3hYbrGtdKq3SpuQi5Y` | 3 | 3 | 100.0% |
| `J3mNKrtVqfCExF9Bw2VcyG7ZSKR4M1QbMbv5dyYqxTGY` | 3 | 3 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 2 | 2 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 2 | 2 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 2 | 2 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 2 | 0 | 0.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 2 | 0 | 0.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 2 | 0 | 0.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 2 | 0 | 0.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 2 | 0 | 0.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 0 | 0.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 2 | 0 | 0.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 0 | 0.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 0 | 0.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 0 | 0.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 0 | 0.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 0 | 0.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 0 | 0.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 0 | 0.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 0 | 0.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 0 | 0.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 0 | 0.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 1 | 0 | 0.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 1 | 0 | 0.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 0 | 0.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 1 | 0 | 0.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 1 | 0 | 0.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 1 | 0 | 0.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 0 | 0.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 1 | 0 | 0.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 1 | 0 | 0.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 1 | 0 | 0.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 1 | 0 | 0.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 1 | 0 | 0.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 1 | 0 | 0.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 1 | 0 | 0.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 0 | 0.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 1 | 0 | 0.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 1 | 0 | 0.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 0 | 0.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 0 | 0.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 1 | 0 | 0.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 1 | 0 | 0.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 0 | 0.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 0 | 0.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 0 | 0.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 0 | 0.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 0 | 0.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 0 | 0.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 0 | 0.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 0 | 0.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 0 | 0.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 0 | 0.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 0 | 0.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 0 | 0.0% |
| `52CfB35yd7jyGA6U2198WmCDVV8wi3Xg48S4MgMDvKR1` | 1 | 0 | 0.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 1 | 0 | 0.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 0 | 0.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 0 | 0.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 0 | 0.0% |
| `FCMwP3inMPkh6iUYYee8F9kHE8BtMUPCTAJ6ifPfo7Vy` | 1 | 0 | 0.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 0 | 0.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 0 | 0.0% |
| `DBKSmR7E2tkDuZNeweWTCNenv871nxaCVThANH8eQJLV` | 1 | 0 | 0.0% |
| `7ehtrkWqiruHhxCfG9gaCApJ3prnfGuEsYVuqB948SeJ` | 1 | 0 | 0.0% |
| `cnt7zt27wGwu9SZufyuytxmTyFYaS6HhUUpLgpQdkup` | 1 | 0 | 0.0% |
| `4b6B15qXF9dZuuFwX66EZV6hzTRcFf37P9oRFYerfzbN` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 102 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 18:25:33 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb8edb341…` [🐞](https://debug.barn.cow.fi/order/0xb8edb341768e908dd1cda6dacb63cae2f6d89f9877d1adfb0434a28121421f64) |
| 18:25:34 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x8947b42c…` [🐞](https://debug.barn.cow.fi/order/0x8947b42cfd647d4568e2ad8ccb8133f9a2c4edbe0041135c19d9a327b9734536) |
| 18:25:34 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf7e962fa…` [🐞](https://debug.barn.cow.fi/order/0xf7e962fa0186cd9ba1def5f28f47c8f90fd16feb813e543c1a9f0b313c1283a4) |
| 18:25:34 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb63f309c…` [🐞](https://debug.barn.cow.fi/order/0xb63f309c8b0f0ad29dece096a642662fa580c58e4aac9f94b3bc377318fffabe) |
| 18:25:34 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xea8d4794…` [🐞](https://debug.barn.cow.fi/order/0xea8d4794dc96f0633c17c7447f0e6d16cc186504ce8513a51ae835f6423c0dad) |
| 18:25:34 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x542f4145…` [🐞](https://debug.barn.cow.fi/order/0x542f41451183f075c7896416daaaf6eda8956bf92745da7f2223d050ffca3b24) |
| 18:25:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xa4b40966…` [🐞](https://debug.barn.cow.fi/order/0xa4b4096630b989ea5a90c9b512db14569aef27f172907a361ff6159ca345141f) |
| 18:25:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xdd40ed55…` [🐞](https://debug.barn.cow.fi/order/0xdd40ed5526e8e75ed3c38f1622a713a6576e20fc22360e0294d7bdfc14bb3562) |
| 18:25:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x5ff49634…` [🐞](https://debug.barn.cow.fi/order/0x5ff49634bf98169af14973e15902b7a70fe4e6d5755bf45ea0dfd3a9a3a9a2c9) |
| 18:25:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x26e8782c…` [🐞](https://debug.barn.cow.fi/order/0x26e8782c2d6897451ab158d9b6c8f94a59db75acb94dbafc1c887a47b0f9c260) |
| 18:25:36 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x39e124ee…` [🐞](https://debug.barn.cow.fi/order/0x39e124ee109bae18893fbbed6215ce796a6a41b6d44dde050909d98deee7fc06) |
| 18:25:36 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x45278241…` [🐞](https://debug.barn.cow.fi/order/0x452782416af222a8bbcd1c4a40966edf122cd439a00075d02279ac1dc88ed734) |
| 18:25:36 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xc9128979…` [🐞](https://debug.barn.cow.fi/order/0xc912897923e08d2685434cb32ab6cee8f3f86693d40e06a04c5a33974ff7007c) |
| 18:25:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x85b84ad1…` [🐞](https://debug.barn.cow.fi/order/0x85b84ad16450e839666ad90dbb15b91d918d66d0b1f0d44167a021f96355d594) |
| 18:25:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x2760ecc2…` [🐞](https://debug.barn.cow.fi/order/0x2760ecc29430b2c74d3dac03e6ec47bb0221e8cc24f7ad78bcecac18c16288b5) |
| 18:25:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x9fb24092…` [🐞](https://debug.barn.cow.fi/order/0x9fb240921162e20d84d1325cc8f75d7bf7400c8e25d814c406522e2d15cb2944) |
| 18:25:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x3ba3471a…` [🐞](https://debug.barn.cow.fi/order/0x3ba3471a7e9f3e8866f1f2880518c87a1d36ed48d52a3f2d72df7950b55ac3ee) |
| 18:25:38 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x5795d4d4…` [🐞](https://debug.barn.cow.fi/order/0x5795d4d4bca9f762a2f0dc751734cbc472dcbfbccf3e3ed737906cb11ad17260) |
| 18:25:38 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x10d1b9e5…` [🐞](https://debug.barn.cow.fi/order/0x10d1b9e513025eb94850c213a9f9012c9505fd283257dc7a69ac36efd4c3df12) |
| 18:25:38 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xeb92b4a7…` [🐞](https://debug.barn.cow.fi/order/0xeb92b4a7b0491f7028d5f580eebeaadc4558236ae7a4beaaa17adaea52e2c30d) |
| 18:25:38 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb786d53b…` [🐞](https://debug.barn.cow.fi/order/0xb786d53b4c3eea372fa2baa45b61b8a29c857a14fbc360fe3e031ca04ac51d91) |
| 18:25:38 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xdea7bb0f…` [🐞](https://debug.barn.cow.fi/order/0xdea7bb0f43e73a051d555890590430052ba574c9f120d3106e8635d716fe755f) |
| 18:25:39 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xba997566…` [🐞](https://debug.barn.cow.fi/order/0xba997566c8352303dfb7be3ed86ff258451a1a02556e6cb009ead37a57860ee6) |
| 18:25:39 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x7d8903d3…` [🐞](https://debug.barn.cow.fi/order/0x7d8903d397f960bfc742758f40166e9bab1f00c46c2a25c5fdc37ff8a2da4d3f) |
| 18:35:14 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x04e3b0e5…` [🐞](https://debug.barn.cow.fi/order/0x04e3b0e5e2f11c76d7f746a2875e490e12a88e2b0b0156e53e04ba58af35ea90) |
| 18:35:14 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x553f137a…` [🐞](https://debug.barn.cow.fi/order/0x553f137acb0a98a5d92e54177f87f566a622973a4ba3749ccec203a3c3866f7f) |
| 18:35:14 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5de98c09…` [🐞](https://debug.barn.cow.fi/order/0x5de98c091fafee60da60e9017d24738387c901575d7891a968edf1c75a0cf96a) |
| 18:35:14 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xda27cdbb…` [🐞](https://debug.barn.cow.fi/order/0xda27cdbb282948cec2dfede3055fe6f05b7dfc3b24042cf71fb9ffaef5b4413b) |
| 18:35:14 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7590af4d…` [🐞](https://debug.barn.cow.fi/order/0x7590af4d172ec9b96ca6078a14e41bf5bae9e644b6be69d3abb4a97e8fd3c306) |
| 18:35:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd85c9069…` [🐞](https://debug.barn.cow.fi/order/0xd85c90697ddbc370913d1c0e98d45acb6997d0f220579c7410270932744eff25) |
| 18:35:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc0fdfec3…` [🐞](https://debug.barn.cow.fi/order/0xc0fdfec36abfbe3edcee34338028e4d25c0f0ee12d00a28f1519daac5097b719) |
| 18:35:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x94ea9061…` [🐞](https://debug.barn.cow.fi/order/0x94ea9061e444ea3812206f877f491684391bb92d559006631217b0b38b6ea7f0) |
| 18:35:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc230ebb4…` [🐞](https://debug.barn.cow.fi/order/0xc230ebb457053208c5439506fc26c1527055b88f88ab7d18c5451e9b27876dcf) |
| 18:35:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0ab8ccb9…` [🐞](https://debug.barn.cow.fi/order/0x0ab8ccb95428265901d053fdceb15e846b33689463f9118191aa153d7df3b720) |
| 18:35:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x676ffb8c…` [🐞](https://debug.barn.cow.fi/order/0x676ffb8c41751cc67b42fdd8844752eafb8a8295ce38dce2db4e54d76aa89c78) |
| 18:35:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x02c2a4c6…` [🐞](https://debug.barn.cow.fi/order/0x02c2a4c638b23851cda1abdfe70a258bf8213d89dd906521e59fe29422a3623c) |
| 18:35:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x74e09c37…` [🐞](https://debug.barn.cow.fi/order/0x74e09c3752b7146d0d50f8bf9f0543abe9e992bba670cc40797d69721bd89579) |
| 18:35:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x18aacf84…` [🐞](https://debug.barn.cow.fi/order/0x18aacf84da31a0de65ea72df736384ee22f4f271f483eaeecef4cf67304f4164) |
| 18:35:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x37d0a857…` [🐞](https://debug.barn.cow.fi/order/0x37d0a857b4d576d0de1d8083351e8e18f42d34adb2643928d7e767277a7d5c39) |
| 18:35:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x259395a0…` [🐞](https://debug.barn.cow.fi/order/0x259395a0cebd93ee49f4a5a2ec50a4571a056a57d76d97eaa05738b00cd25b64) |
| 18:35:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4987ed10…` [🐞](https://debug.barn.cow.fi/order/0x4987ed103bc46f35be48e522240ae1ef47d2cf719df011da426ba9cf62cfeb89) |
| 18:35:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x62bdccd6…` [🐞](https://debug.barn.cow.fi/order/0x62bdccd6468983ef0fb25feccd553cf8324abd5f47b72a00254f0dab71034a4e) |
| 18:35:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xddfc85aa…` [🐞](https://debug.barn.cow.fi/order/0xddfc85aa75d4964a93725210654e202932a8b3088132853cc4cd5c4b705789bf) |
| 18:35:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3915ee2e…` [🐞](https://debug.barn.cow.fi/order/0x3915ee2ea4da962d7f05eab65e59207cc703a861388c5e29c8a7ad7edc4810f8) |
| 18:35:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xccad8d1f…` [🐞](https://debug.barn.cow.fi/order/0xccad8d1f17b87f961251b92e12bf7d02172d436dc762af89ec0fadf72ee268d7) |
| 18:35:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd77c5c27…` [🐞](https://debug.barn.cow.fi/order/0xd77c5c27f3be92b3a3d19d0af6903ba927b3221390c085900454f17aa8b0e38e) |
| 18:35:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1ccf3b84…` [🐞](https://debug.barn.cow.fi/order/0x1ccf3b8401b5bdbf06d704cd693e491f42cac2d5fb45a1787b4fcdeaecab7326) |
| 18:35:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7bc75474…` [🐞](https://debug.barn.cow.fi/order/0x7bc75474e70057f9a86fbb59fbf7286bf8323a4fab4a74c06ee1d8627fd20007) |
| 18:36:42 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x19a8db02…` [🐞](https://debug.barn.cow.fi/order/0x19a8db02eba85b464a81b98fc5d7d15e057520e089be993de9a46623027ec9e5) |
| 18:36:42 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5402e74d…` [🐞](https://debug.barn.cow.fi/order/0x5402e74dcdcca6c92720f8ab3f9d7464bbcf70609af8e9b20ebfcce6e6ec7b76) |
| 18:36:42 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5911f201…` [🐞](https://debug.barn.cow.fi/order/0x5911f201605216fa0f954e593bc408185f6a2c34b48c45f66eaf793d101b8d3c) |
| 18:36:42 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3d8f66d5…` [🐞](https://debug.barn.cow.fi/order/0x3d8f66d560f8fbe327055ad45ff48d27f5bfa94cd0d0296074f91c6975c2884f) |
| 18:36:43 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc36bbe72…` [🐞](https://debug.barn.cow.fi/order/0xc36bbe726326125567d31edb81afe04bc91d7f6c78ce56bbfffae0d5bcdb6945) |
| 18:36:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa5889c45…` [🐞](https://debug.barn.cow.fi/order/0xa5889c45043bb5a19e03865498c1041e407173b0d77d8ca0ccc7e098cafe4326) |
| 18:36:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5e2f8e5c…` [🐞](https://debug.barn.cow.fi/order/0x5e2f8e5c21496d24b745253268912429c78907a9732918b05134373d63317b28) |
| 18:36:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd2becd35…` [🐞](https://debug.barn.cow.fi/order/0xd2becd3524e411ab2d18bbdf0cdef1da8da2509c96506ef56f5fcaea579ecffc) |
| 18:38:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc76d857a…` [🐞](https://debug.barn.cow.fi/order/0xc76d857a556e84b2de1a947548f7b0970488691a32ea98f9f300ae87d1fcc752) |
| 18:38:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x37f81ea6…` [🐞](https://debug.barn.cow.fi/order/0x37f81ea6e90a18567192dab49339637b4d57217802cdf4fa4bb71c7ea27f6e0b) |
| 18:38:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7d4cb11f…` [🐞](https://debug.barn.cow.fi/order/0x7d4cb11f34301625b1851afcccd4009e8802f04ff02df2df6ab060a12fd05f62) |
| 18:38:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xadee381e…` [🐞](https://debug.barn.cow.fi/order/0xadee381edc24d4a3e9eae8fbe1148ad0e2f686be37816f76198d97e83ed89a71) |
| 18:38:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6b96e79c…` [🐞](https://debug.barn.cow.fi/order/0x6b96e79c5e76f9701874c8b60ae7d01ad008e3b08118af82208f2441430d03e0) |
| 18:38:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb2e80874…` [🐞](https://debug.barn.cow.fi/order/0xb2e80874199ebdb2038d899d2371cee8391f70cb2d803f98934a97bae91eacdf) |
| 18:38:31 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9b965ba5…` [🐞](https://debug.barn.cow.fi/order/0x9b965ba59bec44611d4b8adbb2981a2c259853ceb589b14e82f6b34d9ac3eab3) |
| 18:38:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd155c556…` [🐞](https://debug.barn.cow.fi/order/0xd155c556146eb1b8e4d0b89e8bab38d6ab82f4b778a7fb5cab9bc0cf5a984065) |
| 18:38:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe590971d…` [🐞](https://debug.barn.cow.fi/order/0xe590971d45bbd229c45d01c1b55d70b79cf15a2c76ac948309c3f4c513f6cc83) |
| 18:38:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x39cdd5e5…` [🐞](https://debug.barn.cow.fi/order/0x39cdd5e531c3350d87ece0454c786c36bfe80e67000ff76e9327ada34e61651c) |
| 18:38:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8512afca…` [🐞](https://debug.barn.cow.fi/order/0x8512afcae6940d45d0226735881a5f814fec132d94499a48c67746e22fbd1047) |
| 18:38:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6dd8cf37…` [🐞](https://debug.barn.cow.fi/order/0x6dd8cf37b6ccf3c86858f87266df4c851f8f5f574be95a8769a5eb44cf9ffa21) |
| 18:38:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1521e485…` [🐞](https://debug.barn.cow.fi/order/0x1521e485d5207e9d0bd280a54289c3f65cb03e2d03e492359b0739edddbf4012) |
| 18:38:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf65ecc9a…` [🐞](https://debug.barn.cow.fi/order/0xf65ecc9a50a6a3c457b2c223297ede03c06121a1498f9d5fc9293e086b766a9c) |
| 18:38:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x206b84a2…` [🐞](https://debug.barn.cow.fi/order/0x206b84a261ef5313d02ebea97817995822389d1b1960053a0d87225af17142d3) |
| 18:38:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6f2d5965…` [🐞](https://debug.barn.cow.fi/order/0x6f2d5965985e6866fb36c7c14feec77b0d3e0db93cab0e3a41216c21a181c24d) |
| 18:38:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x66872126…` [🐞](https://debug.barn.cow.fi/order/0x66872126734582e3deee71353a68bfd675b1493187bcb2db9d6eebd8ef464701) |
| 18:38:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5d6f65c3…` [🐞](https://debug.barn.cow.fi/order/0x5d6f65c3778b0a4aac2478fff02371a12ba2d3d689265a81d62253d5d7d1fe2e) |
| 18:38:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbb610399…` [🐞](https://debug.barn.cow.fi/order/0xbb610399791e71c1f73f2b14898766c71172df30763a8f1efb2cd05708c05082) |
| 18:38:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6e8de283…` [🐞](https://debug.barn.cow.fi/order/0x6e8de283299d5b4c5c51fd2ee401612dee9ef087eb726542d17416c9fe44f75d) |
| 18:38:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x093a4b61…` [🐞](https://debug.barn.cow.fi/order/0x093a4b61cb56b784fcfdc3e55a2ba45444fa0268342c6639d8a189ccdd534369) |
| 18:38:38 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2797c341…` [🐞](https://debug.barn.cow.fi/order/0x2797c34143342c99b0f327b1a1f49512039b3ff2d5f9a251ef835b8d85f53979) |
| 18:38:38 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc72b38b7…` [🐞](https://debug.barn.cow.fi/order/0xc72b38b72baa43d54cca3e3ab365b62456789890db2fac7d6bfd0dcb3d7e0911) |
| 18:48:21 | wSOL → PUMP | market sell | Not filled within fill timeout (cancelled by sim) | `0x1eded944…` [🐞](https://debug.barn.cow.fi/order/0x1eded94415e4b294132520a7f5e7cf392c9a0416f400b669e85407d5d16c57aa) |
| 18:48:23 | wSOL → Bonk | market sell | Not filled within fill timeout (cancelled by sim) | `0xda181fdb…` [🐞](https://debug.barn.cow.fi/order/0xda181fdbc5e9104c902ccb31535c3bc75dbbf53c86a89f048725de6e68b29a75) |
| 18:48:23 | wSOL → $WIF | market sell | Not filled within fill timeout (cancelled by sim) | `0x3c679ceb…` [🐞](https://debug.barn.cow.fi/order/0x3c679ceb4c638d49b7fac45621ed23a823feeff46aab478ede746cc0cff95ca0) |
| 18:48:23 | wSOL → POPCAT | market sell | Not filled within fill timeout (cancelled by sim) | `0x7832e099…` [🐞](https://debug.barn.cow.fi/order/0x7832e099ddbde3c7a7ee0948ef42fb403f14fa225d806e5de2cdfadfeb42770b) |
| 18:48:23 | wSOL → JitoSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0xef83e527…` [🐞](https://debug.barn.cow.fi/order/0xef83e527ba6748a5e5ba2d72f3bba4d7adca90bbc05e54c870d2f80e1fe6ee3e) |
| 18:48:24 | wSOL → cbBTC | market sell | Not filled within fill timeout (cancelled by sim) | `0x25b37924…` [🐞](https://debug.barn.cow.fi/order/0x25b37924527fcf1d6d9c9ae9b8cc70addf2cc823b6497af89c4a56375a2aacb8) |
| 18:48:25 | wSOL → EURC | market sell | Not filled within fill timeout (cancelled by sim) | `0x52ef115f…` [🐞](https://debug.barn.cow.fi/order/0x52ef115f2a89698172fd3d64743391cb8d6a476d8ba906b97763ada24deb5b6d) |
| 18:48:25 | wSOL → USDY | market sell | Not filled within fill timeout (cancelled by sim) | `0x65e624d9…` [🐞](https://debug.barn.cow.fi/order/0x65e624d950b40da111d909d5d02dfba6d15ecbe0d2c512be5f91f66187312591) |
| 18:48:25 | wSOL → SPYx | market sell | Not filled within fill timeout (cancelled by sim) | `0x1784c4d7…` [🐞](https://debug.barn.cow.fi/order/0x1784c4d771c7cdd6426e6a6fa9b221c4649de6e8a94d7956bc9402dae4e9c92f) |
| 18:48:26 | wSOL → INF | market sell | Not filled within fill timeout (cancelled by sim) | `0x17f0e03c…` [🐞](https://debug.barn.cow.fi/order/0x17f0e03c1bedc86360c89b2f8d151b046f533f83e5c4581e8a8f89d2e21963de) |
| 18:48:26 | wSOL → ETH | market sell | Not filled within fill timeout (cancelled by sim) | `0x8439a8f9…` [🐞](https://debug.barn.cow.fi/order/0x8439a8f93ff8404b57d41c9023dd58a9e2e91ea20157cadbfde982321a85067a) |
| 18:48:26 | wSOL → BNB | market sell | Not filled within fill timeout (cancelled by sim) | `0x11496d4d…` [🐞](https://debug.barn.cow.fi/order/0x11496d4d6792223389c98215974083c8af5838a5036327f49ae0c1e086fc9b34) |
| 18:48:26 | wSOL → XAUt0 | market sell | Not filled within fill timeout (cancelled by sim) | `0xfe1824b2…` [🐞](https://debug.barn.cow.fi/order/0xfe1824b26c46321640e9f05d9777d9f143401ac75f2c0430fc345c8a5a041286) |
| 18:48:26 | wSOL → USDe | market sell | Not filled within fill timeout (cancelled by sim) | `0x67c10348…` [🐞](https://debug.barn.cow.fi/order/0x67c10348d7f051cac395c9fc373d2aca21f370ee1c48a6d12581c8672ad7dea5) |
| 18:48:27 | wSOL → GLDx | market sell | Not filled within fill timeout (cancelled by sim) | `0xbaceaaef…` [🐞](https://debug.barn.cow.fi/order/0xbaceaaef2568107a55de2d564a6ea50967d289123ae2a02b87005346bf789962) |
| 18:48:27 | wSOL → EUROP | market sell | Not filled within fill timeout (cancelled by sim) | `0x48ee891d…` [🐞](https://debug.barn.cow.fi/order/0x48ee891d814a6831127c0046180afdedafe3ff508bb1a57d3cf3f16702657bb3) |
| 18:48:27 | wSOL → Fartcoin | market sell | Not filled within fill timeout (cancelled by sim) | `0x1c9c3f1c…` [🐞](https://debug.barn.cow.fi/order/0x1c9c3f1c656a8942a92b418fe776aa367886b88fa13ed799b2a12aade3321994) |
| 18:48:27 | wSOL → JLP | market sell | Not filled within fill timeout (cancelled by sim) | `0x42927c26…` [🐞](https://debug.barn.cow.fi/order/0x42927c26adf71fa7906e832de4a11f6fc228dabd083ba528f7e8a657721eda8e) |
| 18:48:27 | wSOL → MU | market sell | Not filled within fill timeout (cancelled by sim) | `0x55f07f75…` [🐞](https://debug.barn.cow.fi/order/0x55f07f7577aa20804adabfafbc542fca4525d5fc6dc1677453c935915935acb9) |
| 18:48:27 | wSOL → MEW | market sell | Not filled within fill timeout (cancelled by sim) | `0x55d7d558…` [🐞](https://debug.barn.cow.fi/order/0x55d7d558a78d6ee37963a73c05e22cd550c4571586be4d728b91982d8c917618) |
| 18:48:27 | wSOL → BOME | market sell | Not filled within fill timeout (cancelled by sim) | `0x8652bbe2…` [🐞](https://debug.barn.cow.fi/order/0x8652bbe20d27428c743dbe6f12f99fbda8cc49d4674494d2e0f55f822f1310eb) |
| 18:48:27 | wSOL → hyloSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x4a0c1a6e…` [🐞](https://debug.barn.cow.fi/order/0x4a0c1a6e3e1d7390de12616f482b82f4f47ac2df493b0fe76d476c9dc0c49495) |
| 18:48:28 | wSOL → PSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x4c53a638…` [🐞](https://debug.barn.cow.fi/order/0x4c53a6381bf48ae9ec88e1b3ede6ef8548e414ef0d66ef38194d06a1df6da717) |
