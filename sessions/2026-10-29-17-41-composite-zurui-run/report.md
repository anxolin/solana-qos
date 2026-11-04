# Solana QoS report: 2026-10-29-17-41-composite-zurui-run

Barn, orders created between `2026-10-29T17:41:58.647Z` and `2026-10-29T18:16:03.420Z`. Data fetched 2026-10-29T18:16:28+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 26 |
| Orders executed | **24** (92.3%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 23 |
| Settlement txs | 24 |

## Scenario results

Target solver: `zurui`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-29T17:41:58.647Z | 2026-10-29T17:42:25.797Z | 2/6 | 4 | 3 | 3 | 33.3% |
| native-vs-wrapped-payouts | 2026-10-29T17:44:17.329Z | 2026-10-29T17:46:26.067Z | 1/12 | 11 | 2 | 2 | 8.3% |
| receiving-account-costs | 2026-10-29T17:47:03.116Z | 2026-10-29T17:47:23.948Z | 1/16 | 15 | 1 | 1 | 6.2% |
| solver-same-direction-25 | 2026-10-29T17:48:04.941Z | 2026-10-29T17:51:23.306Z | 2/25 | 23 | 4 | 2 | 8.0% |
| solver-burst-sell | 2026-10-29T17:52:32.319Z | 2026-10-29T17:59:03.851Z | 12/84 | 72 | 12 | 12 | 14.3% |
| solver-cow | 2026-10-29T18:02:38.044Z | 2026-10-29T18:05:24.180Z | 0/15 | 15 | 0 | 0 | 0.0% |
| solver-token-coverage | 2026-10-29T18:05:49.737Z | 2026-10-29T18:06:17.847Z | 2/52 | 50 | 2 | 2 | 3.8% |
| xstocks | 2026-10-29T18:10:16.479Z | 2026-10-29T18:11:11.861Z | 2/86 | 84 | 2 | 2 | 2.3% |

## Scenario

22 of 296 scenario rows completed. 0 retries, 211 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 17:41:58 | 1 | 1 | sell 0.005 SOL → USDC | filled | 10s | 1 |  |
| 17:41:58 | 2 | 2 | sell 0.005 SOL → USDT | filled | 15s | 1 |  |
| 17:41:58 | 3 | 3 | sell 0.5 JUP → USDC | failed | 21s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 17:42:08 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:42:14 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:42:20 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:44:17 | 7 | 4 | sell 0.005 SOL → USDC | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:44:17 | 8 | 5 | sell 0.005 SOL → USDC | failed | 4s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:44:17 | 9 | 6 | sell 0.005 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:44:17 | 10 | 7 | sell 0.005 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:44:19 | 11 | 4 | sell 0.2 USDC → SOL | failed | 10s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:44:21 | 12 | 5 | sell 0.2 USDC → wSOL | failed | 14s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:44:22 | 13 | 6 | sell 0.2 USDC → SOL | failed | 11s | 0 | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:44:22 | 14 | 7 | sell 0.2 USDC → wSOL | failed | 11s | 0 | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:44:29 | 15 | 4 | buy 0.002 SOL ← USDC | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:44:35 | 16 | 5 | buy 0.002 wSOL ← USDC | failed | 17s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:44:33 | 17 | 6 | buy 0.002 SOL ← USDC | filled | 111s | 2 |  |
| 17:44:33 | 18 | 7 | buy 0.002 wSOL ← USDC | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:47:03 | 19 | 8 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:47:03 | 20 | 9 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:47:03 | 21 | 10 | buy 0.25 USDC ← SOL | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:47:03 | 22 | 11 | buy 0.25 USDC ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:47:03 | 23 | 12 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:47:03 | 24 | 13 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:47:03 | 25 | 14 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:47:03 | 26 | 15 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:47:08 | 27 | 8 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:47:08 | 28 | 9 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:47:05 | 29 | 10 | buy 0.25 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:47:07 | 30 | 11 | buy 0.25 USDC ← SOL | filled | 16s | 1 |  |
| 17:47:08 | 31 | 12 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:47:08 | 32 | 13 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:47:06 | 33 | 14 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:47:07 | 34 | 15 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 35 | 16 | sell 0.005 SOL → JUP | failed | 192s | 1 | main timeout |
| 17:48:04 | 36 | 17 | sell 0.005 SOL → JUP | filled | 136s | 1 |  |
| 17:48:04 | 37 | 18 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 38 | 19 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 39 | 20 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 40 | 21 | sell 0.005 SOL → JUP | failed | 198s | 1 | main timeout |
| 17:48:04 | 41 | 22 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 42 | 23 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 43 | 24 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 44 | 25 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 45 | 26 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 46 | 27 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 47 | 28 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 48 | 29 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 49 | 30 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 50 | 31 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 51 | 32 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 52 | 33 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 17:48:04 | 53 | 34 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 54 | 35 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 55 | 36 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 56 | 37 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 57 | 38 | sell 0.005 SOL → JUP | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 58 | 39 | sell 0.005 SOL → JUP | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:48:04 | 59 | 40 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:52:32 | 60 | 41 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 17:52:32 | 61 | 42 | sell 0.003 SOL → USDC | filled | 12s | 1 |  |
| 17:52:32 | 62 | 43 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:52:32 | 63 | 44 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:54:02 | 64 | 41 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:54:02 | 65 | 42 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:54:02 | 66 | 43 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:54:02 | 67 | 44 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:54:02 | 68 | 45 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 17:54:02 | 69 | 46 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:54:02 | 70 | 47 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 17:54:02 | 71 | 48 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 73 | 42 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 17:55:32 | 75 | 44 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 76 | 45 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 77 | 46 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 78 | 47 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 79 | 48 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 17:55:32 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 81 | 50 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 82 | 51 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 83 | 52 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 84 | 53 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 85 | 54 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 86 | 55 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:55:32 | 87 | 56 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 88 | 41 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 89 | 42 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 90 | 43 | sell 0.0035 SOL → USDC | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 91 | 44 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 92 | 45 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 93 | 46 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 94 | 47 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 95 | 48 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 96 | 49 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 97 | 50 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 98 | 51 | sell 0.0035 SOL → USDC | filled | 29s | 1 |  |
| 17:57:02 | 99 | 52 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 100 | 53 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 101 | 54 | sell 0.003 SOL → USDC | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 102 | 55 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 103 | 56 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 104 | 57 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 17:57:02 | 105 | 58 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 17:57:02 | 106 | 59 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 107 | 60 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 108 | 61 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 109 | 62 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 110 | 63 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:57:02 | 111 | 64 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 112 | 41 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 113 | 42 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 17:58:32 | 114 | 43 | sell 0.0035 SOL → USDC | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 115 | 44 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 116 | 45 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 117 | 46 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 118 | 47 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 119 | 48 | sell 0.004 SOL → USDC | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 120 | 49 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 121 | 50 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 122 | 51 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 123 | 52 | sell 0.004 SOL → USDC | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 124 | 53 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 125 | 54 | sell 0.003 SOL → USDC | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 126 | 55 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 127 | 56 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 128 | 57 | sell 0.0025 SOL → USDC | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 129 | 58 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 130 | 59 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 131 | 60 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 132 | 61 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 133 | 62 | sell 0.003 SOL → USDC | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 134 | 63 | sell 0.0035 SOL → USDC | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 135 | 64 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 136 | 65 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 17:58:32 | 137 | 66 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 17:58:32 | 138 | 67 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 139 | 68 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 140 | 69 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 141 | 70 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 142 | 71 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:58:32 | 143 | 72 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:02:38 | 144 | 74 | buy 2.6 USDC ← SOL | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:02:38 | 145 | 76 | buy 1.3 USDC ← SOL | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:02:38 | 146 | 77 | buy 3.1 USDC ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:02:38 | 147 | 78 | buy 3.1 USDT ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:02:38 | 148 | 79 | buy 1.1 USDT ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:02:38 | 149 | 80 | buy 3.2 USDC ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:08 | 150 | 73 | sell 0.02 SOL → USDC | failed | 4s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:05:08 | 151 | 74 | buy 0.02 SOL ← USDC | failed | 12s | 0 | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:08 | 152 | 75 | sell 0.03 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:08 | 153 | 76 | sell 1.2 USDC → SOL | failed | 11s | 0 | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:08 | 154 | 77 | sell 3 USDC → USDT | failed | 15s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:05:08 | 155 | 78 | sell 3 USDT → USDC | failed | 12s | 0 | acquire USDT error: 404 Not Found: NoLiquidity: no route found |
| 18:05:08 | 156 | 79 | sell 1 USDT → USDC | failed | 11s | 0 | acquire USDT quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:08 | 157 | 80 | sell 3 USDC → USDT | failed | 11s | 0 | acquire USDC quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:08 | 158 | 81 | sell 0.02 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:49 | 159 | 82 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:05:49 | 160 | 83 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:49 | 161 | 84 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:05:50 | 162 | 85 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:50 | 163 | 86 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:50 | 164 | 87 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:50 | 165 | 88 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:50 | 166 | 89 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:50 | 167 | 90 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:50 | 168 | 91 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:50 | 169 | 92 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:50 | 170 | 93 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:50 | 171 | 94 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:51 | 172 | 95 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:51 | 173 | 96 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:51 | 174 | 97 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:51 | 175 | 98 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 24s | 1 |  |
| 18:05:51 | 176 | 99 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:51 | 177 | 100 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:51 | 178 | 101 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:51 | 179 | 102 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:51 | 180 | 103 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:51 | 181 | 104 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:52 | 182 | 105 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:52 | 183 | 106 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:52 | 184 | 107 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:52 | 185 | 108 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:52 | 186 | 109 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:52 | 187 | 110 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:52 | 188 | 111 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:52 | 189 | 112 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 24s | 1 |  |
| 18:05:52 | 190 | 113 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:52 | 191 | 114 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:53 | 192 | 115 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:53 | 193 | 116 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 13s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:53 | 194 | 117 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 13s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:53 | 195 | 118 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 13s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:05:57 | 196 | 82 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:57 | 197 | 83 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 9s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:57 | 198 | 84 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:57 | 199 | 85 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 9s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:58 | 200 | 86 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 8s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:58 | 201 | 87 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 8s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:58 | 202 | 88 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:58 | 203 | 89 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:55 | 204 | 90 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:55 | 205 | 91 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:55 | 206 | 92 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:56 | 207 | 93 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:56 | 208 | 94 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:56 | 209 | 95 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:05:56 | 210 | 96 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:16 | 211 | 119 | sell 0.0025 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:10:16 | 212 | 120 | sell 0.0025 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 5s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:10:16 | 213 | 121 | sell 0.0025 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:16 | 214 | 122 | sell 0.0025 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:16 | 215 | 123 | sell 0.0025 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:16 | 216 | 124 | sell 0.0025 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:16 | 217 | 125 | sell 0.0025 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:17 | 218 | 126 | sell 0.0025 SOL → XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:17 | 219 | 127 | sell 0.0025 SOL → XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:17 | 220 | 128 | sell 0.0025 SOL → XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:17 | 221 | 129 | sell 0.0025 SOL → XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:17 | 222 | 130 | sell 0.0025 SOL → XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:17 | 223 | 131 | sell 0.0025 SOL → XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:17 | 224 | 132 | sell 0.0025 SOL → XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:23 | 225 | 125 | sell 0.00078292 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | failed | 8s | 0 | acquire XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:19 | 226 | 119 | buy 0.00321248 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:21 | 227 | 120 | buy 0.00165941 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:22 | 228 | 121 | buy 0.0003632 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:22 | 229 | 122 | buy 0.0004981 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:23 | 230 | 123 | buy 0.00995113 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:23 | 231 | 124 | buy 0.00112024 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:30 | 232 | 125 | buy 0.00130486 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:23 | 233 | 126 | buy 0.00270181 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:19 | 234 | 127 | buy 0.00191264 XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:20 | 235 | 128 | buy 0.00076666 XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:20 | 236 | 129 | buy 0.00156561 XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:20 | 237 | 130 | buy 0.00068993 XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:20 | 238 | 131 | buy 0.00702429 XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:20 | 239 | 132 | buy 0.00379726 XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:21 | 240 | 119 | sell 0.0025 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 5s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 18:10:22 | 241 | 120 | sell 0.0025 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:27 | 242 | 121 | sell 0.0025 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:27 | 243 | 122 | sell 0.0025 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:25 | 244 | 123 | sell 0.0025 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:24 | 245 | 124 | sell 0.0025 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:31 | 246 | 125 | sell 0.0025 SOL → XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:25 | 247 | 126 | sell 0.0025 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | filled | 31s | 1 |  |
| 18:10:21 | 248 | 127 | sell 0.0025 SOL → XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:24 | 249 | 128 | sell 0.0025 SOL → Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:21 | 250 | 129 | sell 0.0025 SOL → XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:21 | 251 | 130 | sell 0.0025 SOL → XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:21 | 252 | 131 | sell 0.0025 SOL → XsXb7KCxcxTi6hqWfYyEe1kpTwtiCeU5TJbEz8N7RWn | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:22 | 253 | 132 | sell 0.0025 SOL → Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:26 | 254 | 119 | sell 0.00020765 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | failed | 11s | 0 | acquire XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:37 | 255 | 119 | buy 0.00034609 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:28 | 256 | 120 | buy 0.00072217 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:32 | 257 | 121 | buy 0.00036664 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:28 | 258 | 122 | buy 0.00076634 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:25 | 259 | 123 | buy 0.00247816 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:25 | 260 | 124 | buy 0.00104887 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:36 | 261 | 125 | buy 0.20269702 XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:56 | 262 | 126 | buy 0.00293543 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:26 | 263 | 127 | buy 0.00028462 XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:25 | 264 | 128 | buy 0.00236142 Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:22 | 265 | 129 | buy 0.00047014 XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:23 | 266 | 130 | buy 0.00060557 XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:28 | 267 | 132 | buy 0.00023241 Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:41 | 268 | 119 | sell 0.0025 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:29 | 269 | 120 | sell 0.0025 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:36 | 270 | 121 | sell 0.0025 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:28 | 271 | 122 | sell 0.0025 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:26 | 272 | 123 | sell 0.0025 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:26 | 273 | 124 | sell 0.0025 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:39 | 274 | 125 | sell 0.0025 SOL → Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:56 | 275 | 126 | sell 0.0025 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | filled | 13s | 1 |  |
| 18:10:27 | 276 | 127 | sell 0.0025 SOL → XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:26 | 277 | 128 | sell 0.0025 SOL → XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:28 | 278 | 129 | sell 0.0025 SOL → XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:24 | 279 | 130 | sell 0.0025 SOL → Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:27 | 280 | 131 | sell 0.0025 SOL → XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:29 | 281 | 132 | sell 0.0025 SOL → XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 18:10:31 | 282 | 128 | sell 0.00022735 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL → SOL | failed | 10s | 0 | acquire XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:45 | 283 | 119 | buy 0.00120141 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:30 | 284 | 120 | buy 0.00174356 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:40 | 285 | 121 | buy 0.00070541 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:29 | 286 | 122 | buy 0.00148708 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:31 | 287 | 123 | buy 0.00078968 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:31 | 288 | 124 | buy 0.00248053 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:43 | 289 | 125 | buy 0.06056963 Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:11:09 | 290 | 126 | buy 0.00052262 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:27 | 291 | 127 | buy 0.00172031 XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:41 | 292 | 128 | buy 0.00037893 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:29 | 293 | 129 | buy 0.00106586 XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:25 | 294 | 130 | buy 0.00018281 Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:32 | 295 | 131 | buy 0.00170138 XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 18:10:29 | 296 | 132 | buy 0.01072636 XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

272 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 177 | SOL → USDC ×81, SOL → JUP ×22, SOL → USDG ×4, SOL → NVDAx ×2, SOL → TSLAx ×2, SOL → PAID, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → Bonk, SOL → POPCAT, SOL → JitoSOL, SOL → mSOL, SOL → JupSOL, SOL → cbBTC, SOL → USDe, SOL → EURC, SOL → USDY, SOL → JLP, SOL → INF, SOL → ETH, SOL → BNB, SOL → XAUt0, SOL → EUROP, SOL → Fartcoin, SOL → MEW, SOL → BOME, SOL → hyloSOL, SOL → PSOL, SOL → QQQx, SOL → MSFTx, SOL → GMEx, SOL → MCDx, SOL → PLTRx, SOL → INTCx, SOL → ORCLx, SOL → AVGOx, SOL → XOMx, SOL → UNHx, SOL → NVOx, SOL → UBERx, SOL → METAx, SOL → GOOGLx, SOL → HOODx, SOL → AMZNx, SOL → VIDAx, SOL → MUx, SOL → WMTx, SOL → AMDx, SOL → TSMx, SOL → TCENTx, SOL → LLYx, SOL → MSTRx, SOL → GLDx, SOL → COINx, SOL → AAPLx, SOL → STRCx, SOL → DFDVx, SOL → TQQQx, SOL → NFLXx, SOL → MRVLx, SOL → SNDKx, SOL → SKHYx, SOL → BMNRx | no route found |
| NoLiquidity | quote | 70 | SOL → USDC ×5, SOL → USDG ×5, SOL → USDT ×2, SOL → CRCLx ×2, SOL → SPYx ×2, SOL → NVDAx ×2, SOL → SPCXx ×2, SOL → TSLAx ×2, JUP → USDC, USDC → SOL, USDC → wSOL, SOL → ANSEM, SOL → PAID, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → USDv, SOL → SKHY, SOL → MU, SOL → SPCX, SOL → QQQx, SOL → MSFTx, SOL → GMEx, SOL → MCDx, SOL → PLTRx, SOL → INTCx, SOL → ORCLx, SOL → AVGOx, SOL → XOMx, SOL → UNHx, SOL → NVOx, SOL → UBERx, SOL → METAx, SOL → GOOGLx, SOL → HOODx, SOL → AMZNx, SOL → VIDAx, SOL → KOx, SOL → MUx, SOL → WMTx, SOL → AMDx, SOL → TSMx, SOL → LLYx, SOL → MSTRx, SOL → GLDx, SOL → COINx, SOL → AAPLx, SOL → STRCx, SOL → DFDVx, SOL → BRK.Bx, SOL → TQQQx, SOL → NFLXx, SOL → MRVLx, SOL → SNDKx, SOL → SKHYx, SOL → BMNRx | no route found |
| InvalidTransaction | main | 10 | SOL → USDC ×4, SOL → USDT, SOL → ANSEM, SOL → USDG, SOL → CRCLx, SOL → SPCXx, SOL → SPYx | the bundle must not create the buy token account |
| NoLiquidity | acquire | 10 | SOL → USDC ×5, SOL → USDT ×2, SOL → PLTRx, SOL → SPYx, SOL → NFLXx | no route found |
| InvalidTransaction | acquire | 4 | SOL → USDC ×4 | the bundle must not create the buy token account |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |

Scenario orders: 26 (24 main, 2 acquire). Cleanup placed 19 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 17:42:32 | 1 | USDC → SOL (native) | Executed | `0x03f02953…` [🐞](https://debug.barn.cow.fi/order/0x03f029535adb226eed983853aee98a56a68b401dae4ab62ce85ca16585f658ee) |
| 17:46:36 | 7 | JUP → SOL (native) | Executed | `0xf7424764…` [🐞](https://debug.barn.cow.fi/order/0xf742476484a9b6cb22b2c85357cb79ee6c9ba8a12f37d886caefae92c6e33e46) |
| 17:47:31 | 8 | JUP → SOL (native) | Executed | `0x77d8ec9b…` [🐞](https://debug.barn.cow.fi/order/0x77d8ec9b7758d345a016b4d54ac4cc347c604179e6a62da9eba43dfb5627ed65) |
| 17:51:42 | 24 | JUP → SOL (native) | Executed | `0xc9888da5…` [🐞](https://debug.barn.cow.fi/order/0xc9888da5dd1aa1fbbc096ff8264baac3a82aac206257a9e4efa06238a77a4672) |
| 17:51:56 | 31 | USDC → SOL (native) | Executed | `0xcbb91f26…` [🐞](https://debug.barn.cow.fi/order/0xcbb91f26265a5498dfb7c5fdc80824c6912944672db86931d2641fb59a12ac84) |
| 17:52:00 | 33 | JUP → SOL (native) | Executed | `0x2968e04f…` [🐞](https://debug.barn.cow.fi/order/0x2968e04fd4488c6237d4312327107468586ee0e560798a49729ac565e3367399) |
| 17:59:11 | 41 | USDC → SOL (native) | Executed | `0x3e817245…` [🐞](https://debug.barn.cow.fi/order/0x3e8172459d43eef62b25eb0706089786e5500644994e18026266e6103eaa81d2) |
| 17:59:23 | 50 | USDC → SOL (native) | Executed | `0x54b17913…` [🐞](https://debug.barn.cow.fi/order/0x54b17913bc0dac4166514c941fc50a88989ee148331f8c8f789066390d2112ca) |
| 17:59:46 | 58 | USDC → SOL (native) | Executed | `0x41e11963…` [🐞](https://debug.barn.cow.fi/order/0x41e11963aa0fc386de6c01dee8f0805d12f7327ba532299dd41b081b34b6115e) |
| 18:00:00 | 65 | USDC → SOL (native) | Executed | `0x50f54ef0…` [🐞](https://debug.barn.cow.fi/order/0x50f54ef0033df853632365fd9425101aa8c68d259df159dcb2b5812350b1cd6d) |
| 18:06:48 | 98 | $WIF → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x9e8f9568…` [🐞](https://debug.barn.cow.fi/order/0x9e8f9568f1c4c29dc85941055d192e94d16e3e2e7739ab2bc55f2079a798d6ec) |
| 18:07:10 | 112 | GLDx → SOL (native) | Executed | `0x97e7c13e…` [🐞](https://debug.barn.cow.fi/order/0x97e7c13e7f59f0a5348fd528834b4ea80e224d19fadf25fb9ea138c5cefb9f08) |
| 18:11:26 | 126 | BRK.Bx → SOL (native) | Executed | `0x55dbcff0…` [🐞](https://debug.barn.cow.fi/order/0x55dbcff0b5e6be101e7ba8c06a2314be6dccbd382458771ec322798da7438638) |
| 18:12:26 | 2 | USDT → SOL (native) | Executed | `0xd98c9c8c…` [🐞](https://debug.barn.cow.fi/order/0xd98c9c8c58c3e383aa6f500000ec343dc0d52ef2bb00ef2945632e5275798f26) |
| 18:13:04 | 6 | JUP → SOL (native) | Executed | `0xa21e29ab…` [🐞](https://debug.barn.cow.fi/order/0xa21e29ab1f62f9a20d7f050ac6724f9e048e11ceacee8f3ea1d014162f18dfbd) |
| 18:13:31 | 11 | JUP → SOL (native) | Executed | `0x11b8d475…` [🐞](https://debug.barn.cow.fi/order/0x11b8d4750c60d04e5dde291827fef2af3eac9a4b854dcf526a5d7199dae0144b) |
| 18:13:53 | 16 | JUP → SOL (native) | Executed | `0x2cacbdc7…` [🐞](https://debug.barn.cow.fi/order/0x2cacbdc7aa9b24c834a014bb5c7aac3f3289b37301043857475027d41c3b4db0) |
| 18:14:16 | 42 | USDC → SOL (native) | Executed | `0x1a0b914e…` [🐞](https://debug.barn.cow.fi/order/0x1a0b914e2918c76a6ec88a7da7a81b93f471d12fe23157ba13f4d686bfdb029c) |
| 18:14:43 | 98 | $WIF → SOL (native) | Executed | `0x157c6f38…` [🐞](https://debug.barn.cow.fi/order/0x157c6f38fbb83f52da5364a12959c194632f7400bd0b1339b7da39b7d6ca804a) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 24 | 92.3% |
| cancelled | 2 | 7.7% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 9s | 16s | 26s | 128s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| FKtU…4q3H | 24 | 100.0% | 24 | 73,972 | 9s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| zurui | 46 | 42 | 42 | 100.0% | 0 | 0 | 13 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 398 times
- Orders filtered for `in_flight`: 14 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 24 | 22 | 91.7% |
| market buy | 2 | 2 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 15 | 15 | 100.0% |
| wSOL → JUP | 5 | 3 | 60.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → KOx | 1 | 1 | 100.0% |
| wSOL → BRK.Bx | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 2 | 2 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 2 | 2 | 100.0% |
| `WNij2mXZQ2QionkPDF2N8AB1Z3hYbrGtdKq3SpuQi5Y` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 0 | 0.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 0 | 0.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 1 | 1 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 1 | 1 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 1 | 1 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 1 | 1 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 1 | 1 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 1 | 1 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 1 | 1 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 2 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 17:48:09 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xd42b7322…` [🐞](https://debug.barn.cow.fi/order/0xd42b7322c15c4091315caa0d5c118963ddae1cd83ccb57a91446110c3ae4e3d5) |
| 17:48:13 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x05949ae3…` [🐞](https://debug.barn.cow.fi/order/0x05949ae32c66e73819823248c56b087c7bd039b43d87af69c75c033df758101c) |
