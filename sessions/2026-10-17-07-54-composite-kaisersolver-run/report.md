# Solana QoS report: 2026-10-17-07-54-composite-kaisersolver-run

Barn, orders created between `2026-10-17T07:55:09.835Z` and `2026-10-17T08:14:26.935Z`. Data fetched 2026-10-17T08:15:21+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 48 |
| Orders executed | **48** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 37 |
| Settlement txs | 48 |

## Scenario results

Target solver: `kaisersolver`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-17T07:55:09.835Z | 2026-10-17T07:55:18.764Z | 2/6 | 4 | 2 | 2 | 33.3% |
| receiving-account-costs | 2026-10-17T07:55:50.124Z | 2026-10-17T07:56:26.903Z | 4/16 | 12 | 4 | 4 | 25.0% |
| native-vs-wrapped-payouts | 2026-10-17T07:57:02.043Z | 2026-10-17T07:57:31.297Z | 6/12 | 6 | 6 | 6 | 50.0% |
| solver-same-direction-25 | 2026-10-17T07:58:03.588Z | 2026-10-17T07:58:42.979Z | 5/25 | 20 | 5 | 5 | 20.0% |
| solver-burst-sell | 2026-10-17T07:59:54.631Z | 2026-10-17T08:06:46.623Z | 24/84 | 60 | 24 | 24 | 28.6% |
| solver-token-coverage | 2026-10-17T08:08:34.831Z | 2026-10-17T08:09:01.998Z | 5/55 | 50 | 5 | 5 | 9.1% |
| solver-fresh-accounts | 2026-10-17T08:10:12.445Z | 2026-10-17T08:10:28.238Z | 2/8 | 6 | 2 | 2 | 25.0% |

## Scenario

48 of 206 scenario rows completed. 0 retries, 134 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 07:55:09 | 1 | 1 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 07:55:09 | 2 | 2 | sell 0.005 SOL → USDT | filled | 9s | 1 |  |
| 07:55:09 | 3 | 3 | sell 0.5 JUP → USDC | failed | 7s | 0 | acquire JUP error: 404 Not Found: NoLiquidity: no route found |
| 07:55:18 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:55:18 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:55:16 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:55:50 | 7 | 4 | sell 0.0025 SOL → USDC | filled | 33s | 1 |  |
| 07:55:50 | 8 | 5 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 07:55:50 | 9 | 6 | buy 0.25 USDC ← SOL | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:55:50 | 10 | 7 | buy 0.25 USDC ← SOL | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:55:50 | 11 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:55:50 | 12 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:55:50 | 13 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:55:50 | 14 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:56:22 | 15 | 4 | sell 0.0025 SOL → USDC | filled | 4s | 1 |  |
| 07:56:02 | 16 | 5 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 07:55:51 | 17 | 6 | buy 0.25 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:55:52 | 18 | 7 | buy 0.25 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:55:51 | 19 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:55:51 | 20 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:55:51 | 21 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:55:51 | 22 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:57:02 | 23 | 12 | sell 0.005 SOL → USDC | filled | 19s | 1 |  |
| 07:57:02 | 24 | 13 | sell 0.005 SOL → USDC | filled | 14s | 1 |  |
| 07:57:02 | 25 | 14 | sell 0.005 SOL → USDC | filled | 24s | 1 |  |
| 07:57:02 | 26 | 15 | sell 0.005 SOL → USDC | filled | 6s | 1 |  |
| 07:57:21 | 27 | 12 | sell 0.2 USDC → SOL | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:57:15 | 28 | 13 | sell 0.2 USDC → wSOL | filled | 13s | 1 |  |
| 07:57:25 | 29 | 14 | sell 0.2 USDC → SOL | filled | 5s | 1 |  |
| 07:57:07 | 30 | 15 | sell 0.2 USDC → wSOL | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:57:22 | 31 | 12 | buy 0.002 SOL ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:57:28 | 32 | 13 | buy 0.002 wSOL ← USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:57:30 | 33 | 14 | buy 0.002 SOL ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:57:08 | 34 | 15 | buy 0.002 wSOL ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 35 | 16 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 07:58:03 | 36 | 17 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 07:58:03 | 37 | 18 | sell 0.005 SOL → JUP | filled | 39s | 1 |  |
| 07:58:03 | 38 | 19 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 07:58:03 | 39 | 20 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 07:58:03 | 40 | 21 | sell 0.005 SOL → JUP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 41 | 22 | sell 0.005 SOL → JUP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 42 | 23 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 43 | 24 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 44 | 25 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 45 | 26 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 46 | 27 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 47 | 28 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 48 | 29 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 49 | 30 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 50 | 31 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 51 | 32 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 52 | 33 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 53 | 34 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 54 | 35 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 55 | 36 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 56 | 37 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 57 | 38 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 58 | 39 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:58:03 | 59 | 40 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:59:54 | 60 | 41 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 07:59:54 | 61 | 42 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 07:59:54 | 62 | 43 | sell 0.0035 SOL → USDC | filled | 6s | 1 |  |
| 07:59:54 | 63 | 44 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 08:01:24 | 64 | 41 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:01:24 | 65 | 42 | sell 0.003 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:01:24 | 66 | 43 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:01:24 | 67 | 44 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 08:01:24 | 68 | 45 | sell 0.0025 SOL → USDC | filled | 33s | 1 |  |
| 08:01:24 | 69 | 46 | sell 0.003 SOL → USDC | filled | 26s | 1 |  |
| 08:01:24 | 70 | 47 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 08:01:24 | 71 | 48 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 08:02:54 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 73 | 42 | sell 0.003 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 74 | 43 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 75 | 44 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 76 | 45 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 77 | 46 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 78 | 47 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 79 | 48 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 63s | 1 |  |
| 08:02:54 | 81 | 50 | sell 0.003 SOL → USDC | filled | 56s | 1 |  |
| 08:02:54 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 44s | 1 |  |
| 08:02:54 | 83 | 52 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 08:02:54 | 84 | 53 | sell 0.0025 SOL → USDC | filled | 38s | 1 |  |
| 08:02:54 | 85 | 54 | sell 0.003 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 86 | 55 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:02:54 | 87 | 56 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 88 | 41 | sell 0.0025 SOL → USDC | filled | 39s | 1 |  |
| 08:04:24 | 89 | 42 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 08:04:24 | 90 | 43 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 91 | 44 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 08:04:24 | 92 | 45 | sell 0.0025 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 93 | 46 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 94 | 47 | sell 0.0035 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 95 | 48 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 08:04:24 | 96 | 49 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 97 | 50 | sell 0.003 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 98 | 51 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 99 | 52 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 100 | 53 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 101 | 54 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 08:04:24 | 102 | 55 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 103 | 56 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 104 | 57 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 105 | 58 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 106 | 59 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 107 | 60 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 108 | 61 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 109 | 62 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 110 | 63 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:24 | 111 | 64 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 112 | 41 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 113 | 42 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 114 | 43 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 115 | 44 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 116 | 45 | sell 0.0025 SOL → USDC | filled | 45s | 1 |  |
| 08:05:54 | 117 | 46 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 118 | 47 | sell 0.0035 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 119 | 48 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 120 | 49 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 121 | 50 | sell 0.003 SOL → USDC | filled | 52s | 1 |  |
| 08:05:54 | 122 | 51 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 123 | 52 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 124 | 53 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 125 | 54 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 126 | 55 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 127 | 56 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 128 | 57 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 129 | 58 | sell 0.003 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 130 | 59 | sell 0.0035 SOL → USDC | filled | 47s | 1 |  |
| 08:05:54 | 131 | 60 | sell 0.004 SOL → USDC | filled | 37s | 1 |  |
| 08:05:54 | 132 | 61 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 133 | 62 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 134 | 63 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 135 | 64 | sell 0.004 SOL → USDC | filled | 28s | 1 |  |
| 08:05:54 | 136 | 65 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 137 | 66 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 138 | 67 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 139 | 68 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 140 | 69 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 141 | 70 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 142 | 71 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:05:54 | 143 | 72 | sell 0.004 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 144 | 73 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 26s | 1 |  |
| 08:08:34 | 145 | 74 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 17s | 1 |  |
| 08:08:34 | 146 | 75 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 27s | 1 |  |
| 08:08:34 | 147 | 76 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 19s | 1 |  |
| 08:08:34 | 148 | 77 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 27s | 1 |  |
| 08:08:34 | 149 | 78 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 150 | 79 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 151 | 80 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 152 | 81 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 153 | 82 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 154 | 83 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 155 | 84 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 156 | 85 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 157 | 86 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 158 | 87 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 159 | 88 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 08:08:34 | 160 | 89 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 08:08:34 | 161 | 90 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 4s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 08:08:34 | 162 | 91 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 163 | 92 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 164 | 93 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 165 | 94 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 166 | 95 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 167 | 96 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 168 | 97 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 169 | 98 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 170 | 99 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 171 | 100 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 172 | 101 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 173 | 102 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 174 | 103 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 175 | 104 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 176 | 105 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 177 | 106 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 178 | 107 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 179 | 108 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 180 | 109 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 181 | 110 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 182 | 111 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:08:34 | 183 | 112 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:09:01 | 184 | 73 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:51 | 185 | 74 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:09:01 | 186 | 75 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:53 | 187 | 76 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:09:01 | 188 | 77 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:36 | 189 | 78 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:36 | 190 | 79 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:36 | 191 | 80 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:36 | 192 | 81 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:36 | 193 | 82 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:37 | 194 | 83 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:37 | 195 | 84 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:37 | 196 | 85 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:37 | 197 | 86 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:08:37 | 198 | 87 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:10:12 | 199 | 113 | sell 0.1 SOL → USDC | filled | 6s | 1 |  |
| 08:10:12 | 200 | 114 | sell 0.1 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:10:12 | 201 | 115 | buy 10 USDC ← SOL | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:10:12 | 202 | 116 | buy 10 USDC ← SOL | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:10:12 | 203 | 117 | sell 0.1 SOL → USDT | filled | 16s | 1 |  |
| 08:10:12 | 204 | 118 | sell 0.1 SOL → USDT | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:10:12 | 205 | 119 | buy 10 USDT ← SOL | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:10:12 | 206 | 120 | buy 10 USDT ← SOL | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

158 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 127 | SOL → USDC ×65, SOL → JUP ×20, SOL → USDG ×4, SOL → USDT ×3, USDC → wSOL ×2, USDC → SOL, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx, SOL → Bonk, SOL → $WIF, SOL → POPCAT, SOL → JitoSOL, SOL → mSOL, SOL → JupSOL, SOL → cbBTC, SOL → USDe, SOL → EURC, SOL → USDY, SOL → JLP, SOL → INF, SOL → ETH, SOL → BNB, SOL → XAUt0, SOL → GLDx, SOL → EUROP, SOL → Fartcoin, SOL → MEW, SOL → BOME, SOL → hyloSOL, SOL → PSOL | no route found |
| NoLiquidity | quote | 27 | SOL → USDG ×5, SOL → USDC ×3, USDC → SOL ×2, SOL → USDT, JUP → USDC, USDC → wSOL, SOL → ANSEM, SOL → PAID, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| NoLiquidity | acquire | 1 | SOL → JUP | no route found |

Scenario orders: 48 (48 main, 0 acquire). Cleanup placed 15 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 07:55:21 | 2 | USDT → SOL (native) | Executed | `0x5786b676…` [🐞](https://debug.barn.cow.fi/order/0x5786b676fb6b2c6a4a8d6d55bcb562e3c20e5c53db0d57b38cb09b54b158d02a) |
| 07:56:28 | 4 | USDC → SOL (native) | Executed | `0xd25c6b60…` [🐞](https://debug.barn.cow.fi/order/0xd25c6b6048caf8b6fd57bb2272717f2e5c89093e1ea18e79146f0a5c984206dd) |
| 07:57:36 | 15 | USDC → SOL (native) | Executed | `0xfbff3469…` [🐞](https://debug.barn.cow.fi/order/0xfbff34697d43b35824034f27877e8018fbfb24ae53f81ff193f0ad5716cc5e0a) |
| 07:58:45 | 17 | JUP → SOL (native) | Executed | `0x1d8c6c68…` [🐞](https://debug.barn.cow.fi/order/0x1d8c6c685049d0a76461ddcadd709cc5577fd239336af812d1762aa0887f670d) |
| 07:58:46 | 18 | JUP → SOL (native) | Executed | `0xd93584e5…` [🐞](https://debug.barn.cow.fi/order/0xd93584e5b40a1f3105b7c8ec2d6df94b9fdc87b5bb6065b8c507464241df4b16) |
| 07:59:24 | 38 | JUP → SOL (native) | Executed | `0x7cffbf0e…` [🐞](https://debug.barn.cow.fi/order/0x7cffbf0e46cb25465af12c518e60ad729e89037a748e667843250ae6a4f1a255) |
| 08:06:51 | 44 | USDC → SOL (native) | Executed | `0x71c37fea…` [🐞](https://debug.barn.cow.fi/order/0x71c37fea648d711bdc8c214b3a2b5b136486153c59c9a23add396c6e329ba4e3) |
| 08:06:59 | 47 | USDC → SOL (native) | Executed | `0xddd44ff3…` [🐞](https://debug.barn.cow.fi/order/0xddd44ff35826c49a1701465f2e419cf77838ddd55b1fc252f30f821b1d449b8a) |
| 08:07:07 | 50 | USDC → SOL (native) | Executed | `0x52f1e194…` [🐞](https://debug.barn.cow.fi/order/0x52f1e19456668f945a251c1dec608557bd6b00d012281b12e5783d6abd7dec90) |
| 08:07:33 | 59 | USDC → SOL (native) | Executed | `0x630c774d…` [🐞](https://debug.barn.cow.fi/order/0x630c774dee953855e73aa1022780f98fb4437552fe81d5fefb52e763bf19522c) |
| 08:07:33 | 58 | USDC → SOL (native) | Executed | `0xaec74d14…` [🐞](https://debug.barn.cow.fi/order/0xaec74d144355ba0d7cf77e6fe8c5a93e59c143cd01e243a1bad8b491e55f8568) |
| 08:07:46 | 65 | USDC → SOL (native) | Executed | `0xcc4c1ba1…` [🐞](https://debug.barn.cow.fi/order/0xcc4c1ba19cafb09d8a690a444a43de1ce05b2b7f0bbfe72901f1fd672a0260f0) |
| 08:08:00 | 69 | USDC → SOL (native) | Executed | `0x65626aeb…` [🐞](https://debug.barn.cow.fi/order/0x65626aeb7fd83ef62e12b73d914447135c544d31a9c1dc3c4521db989fe26e0d) |
| 08:10:37 | 113 | USDC → SOL (native) | Executed | `0x7db66ed1…` [🐞](https://debug.barn.cow.fi/order/0x7db66ed1896798fb96632c82ee4b76296811c19c632162630207ef035c47049e) |
| 08:10:41 | 117 | USDT → SOL (native) | Executed | `0xa6012a70…` [🐞](https://debug.barn.cow.fi/order/0xa6012a70c4ec2e61191f95aa4934c52bfb459f35dd20b06cb95da8cdc04630d8) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 48 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 16s | 28s | 38s | 58s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 883X…8aGz | 48 | 100.0% | 48 | 100,473 | 16s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| kaisersolver | 121 | 75 | 63 | 84.0% | 12 | 0 | 1 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| kaisersolver: PriorityFeeTooHigh | 12 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 219 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 48 | 48 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 34 | 34 | 100.0% |
| wSOL → JUP | 5 | 5 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| USDC → wSOL | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 2 | 2 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 2 | 2 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 2 | 2 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 2 | 2 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 2 | 2 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 1 | 1 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 1 | 1 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 1 | 1 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 1 | 1 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 1 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 1 | 1 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 1 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 1 | 1 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 1 | 1 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 1 | 1 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 1 | 1 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 1 | 1 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 1 | 1 | 100.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 1 | 100.0% |
| `cnt7zt27wGwu9SZufyuytxmTyFYaS6HhUUpLgpQdkup` | 1 | 1 | 100.0% |
