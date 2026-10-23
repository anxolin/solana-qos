# Solana QoS report: 2026-10-23-12-24-composite-asao-run

Barn, orders created between `2026-10-23T12:25:50.275Z` and `2026-10-23T12:57:28.140Z`. Data fetched 2026-10-23T13:00:16+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 155 |
| Orders executed | **142** (91.6%) |
| Sponsored orders never created on-chain | 4 (2.6%) |
| Traders | 90 |
| Settlement txs | 53 |

## Scenario results

Target solver: `asao`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-23T12:25:50.275Z | 2026-10-23T12:27:47.673Z | 2/6 | 4 | 6 | 2 | 33.3% |
| solver-same-direction-25 | 2026-10-23T12:28:41.742Z | 2026-10-23T12:29:06.520Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-23T12:31:26.840Z | 2026-10-23T12:38:41.934Z | 76/84 | 8 | 84 | 76 | 90.5% |
| solver-cow | 2026-10-23T12:42:02.790Z | 2026-10-23T12:44:44.796Z | 15/15 | 0 | 15 | 15 | 100.0% |
| solver-token-coverage | 2026-10-23T12:46:23.840Z | 2026-10-23T12:47:10.494Z | 16/52 | 36 | 17 | 16 | 30.8% |
| solver-fresh-accounts | 2026-10-23T12:48:53.927Z | 2026-10-23T12:49:12.275Z | 8/8 | 0 | 8 | 8 | 100.0% |

## Scenario

142 of 190 scenario rows completed. 0 retries, 26 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 12:25:50 | 1 | 1 | sell 0.005 SOL → USDC | filled | 11s | 1 |  |
| 12:25:50 | 2 | 2 | sell 0.005 SOL → USDT | filled | 9s | 1 |  |
| 12:25:50 | 3 | 3 | sell 0.5 JUP → USDC | failed | 78s | 1 | acquire JUP timeout |
| 12:26:01 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 35s | 1 | main expired |
| 12:25:59 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 33s | 1 | main expired |
| 12:27:08 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 40s | 1 | acquire JUP expired |
| 12:28:41 | 7 | 4 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 12:28:41 | 8 | 5 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 12:28:41 | 9 | 6 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 12:28:41 | 10 | 7 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 12:28:41 | 11 | 8 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 12:28:41 | 12 | 9 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 12:28:41 | 13 | 10 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 12:28:41 | 14 | 11 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 12:28:41 | 15 | 12 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 12:28:41 | 16 | 13 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 12:28:41 | 17 | 14 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 12:28:41 | 18 | 15 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 12:28:41 | 19 | 16 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 12:28:41 | 20 | 17 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 12:28:41 | 21 | 18 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 12:28:41 | 22 | 19 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 12:28:41 | 23 | 20 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 12:28:41 | 24 | 21 | sell 0.005 SOL → JUP | filled | 22s | 1 |  |
| 12:28:41 | 25 | 22 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 12:28:41 | 26 | 23 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 12:28:41 | 27 | 24 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 12:28:41 | 28 | 25 | sell 0.005 SOL → JUP | filled | 13s | 1 |  |
| 12:28:41 | 29 | 26 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 12:28:41 | 30 | 27 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 12:28:41 | 31 | 28 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 12:31:26 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 12:31:26 | 33 | 30 | sell 0.003 SOL → USDC | filled | 34s | 1 |  |
| 12:31:26 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 8s | 1 |  |
| 12:31:26 | 35 | 32 | sell 0.004 SOL → USDC | filled | 8s | 1 |  |
| 12:32:56 | 36 | 29 | sell 0.0025 SOL → USDC | failed | 68s | 1 | main timeout |
| 12:32:56 | 37 | 30 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 12:32:56 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 12:32:56 | 39 | 32 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 12:32:56 | 40 | 33 | sell 0.0025 SOL → USDC | failed | 73s | 1 | main timeout |
| 12:32:56 | 41 | 34 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 12:32:56 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 12:32:56 | 43 | 36 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 12:34:26 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:34:26 | 45 | 30 | sell 0.003 SOL → USDC | filled | 8s | 1 |  |
| 12:34:26 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 12:34:26 | 47 | 32 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 12:34:26 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:34:26 | 49 | 34 | sell 0.003 SOL → USDC | filled | 7s | 1 |  |
| 12:34:26 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 12:34:26 | 51 | 36 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 12:34:26 | 52 | 37 | sell 0.0025 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:34:26 | 53 | 38 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 12:34:26 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 12:34:26 | 55 | 40 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 12:34:26 | 56 | 41 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:34:26 | 57 | 42 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 12:34:26 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 12:34:26 | 59 | 44 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 12:35:56 | 60 | 29 | sell 0.0025 SOL → USDC | filled | 57s | 1 |  |
| 12:35:56 | 61 | 30 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 12:35:56 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 12:35:56 | 63 | 32 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:35:56 | 64 | 33 | sell 0.0025 SOL → USDC | filled | 60s | 1 |  |
| 12:35:56 | 65 | 34 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 12:35:56 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 12:35:56 | 67 | 36 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:35:56 | 68 | 37 | sell 0.0025 SOL → USDC | filled | 58s | 1 |  |
| 12:35:56 | 69 | 38 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 12:35:56 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 12:35:56 | 71 | 40 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:35:56 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 58s | 1 |  |
| 12:35:56 | 73 | 42 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 12:35:56 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 12:35:56 | 75 | 44 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:35:56 | 76 | 45 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:35:56 | 77 | 46 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 12:35:56 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 12:35:56 | 79 | 48 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 12:35:56 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:35:56 | 81 | 50 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 12:35:56 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 12:35:56 | 83 | 52 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 12:37:26 | 84 | 29 | sell 0.0025 SOL → USDC | filled | 50s | 1 |  |
| 12:37:26 | 85 | 30 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 12:37:26 | 86 | 31 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 12:37:26 | 87 | 32 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 12:37:26 | 88 | 33 | sell 0.0025 SOL → USDC | filled | 75s | 1 |  |
| 12:37:26 | 89 | 34 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 12:37:26 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 12:37:26 | 91 | 36 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 12:37:26 | 92 | 37 | sell 0.0025 SOL → USDC | filled | 50s | 1 |  |
| 12:37:26 | 93 | 38 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 12:37:26 | 94 | 39 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 12:37:26 | 95 | 40 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 12:37:26 | 96 | 41 | sell 0.0025 SOL → USDC | filled | 48s | 1 |  |
| 12:37:26 | 97 | 42 | sell 0.003 SOL → USDC | filled | 14s | 1 |  |
| 12:37:26 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 12:37:26 | 99 | 44 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 12:37:26 | 100 | 45 | sell 0.0025 SOL → USDC | filled | 48s | 1 |  |
| 12:37:26 | 101 | 46 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 12:37:26 | 102 | 47 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 12:37:26 | 103 | 48 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 12:37:26 | 104 | 49 | sell 0.0025 SOL → USDC | filled | 48s | 1 |  |
| 12:37:26 | 105 | 50 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 12:37:26 | 106 | 51 | sell 0.0035 SOL → USDC | filled | 7s | 1 |  |
| 12:37:26 | 107 | 52 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:37:26 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 48s | 1 |  |
| 12:37:26 | 109 | 54 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 12:37:26 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 12:37:26 | 111 | 56 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 12:37:26 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 68s | 1 |  |
| 12:37:26 | 113 | 58 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 12:37:26 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 12:37:26 | 115 | 60 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 12:42:02 | 116 | 62 | buy 2.6 USDC ← SOL | filled | 18s | 1 |  |
| 12:42:02 | 117 | 64 | buy 1.3 USDC ← SOL | filled | 21s | 1 |  |
| 12:42:02 | 118 | 65 | buy 3.1 USDC ← SOL | filled | 15s | 1 |  |
| 12:42:02 | 119 | 66 | buy 3.1 USDT ← SOL | filled | 9s | 1 |  |
| 12:42:02 | 120 | 67 | buy 1.1 USDT ← SOL | filled | 12s | 1 |  |
| 12:42:02 | 121 | 68 | buy 3.2 USDC ← SOL | filled | 9s | 1 |  |
| 12:44:32 | 122 | 61 | sell 0.02 SOL → USDC | filled | 11s | 1 |  |
| 12:44:32 | 123 | 62 | buy 0.02 SOL ← USDC | filled | 12s | 1 |  |
| 12:44:32 | 124 | 63 | sell 0.03 SOL → USDC | filled | 11s | 1 |  |
| 12:44:32 | 125 | 64 | sell 1.2 USDC → SOL | filled | 12s | 1 |  |
| 12:44:32 | 126 | 65 | sell 3 USDC → USDT | filled | 12s | 1 |  |
| 12:44:32 | 127 | 66 | sell 3 USDT → USDC | filled | 12s | 1 |  |
| 12:44:32 | 128 | 67 | sell 1 USDT → USDC | filled | 11s | 1 |  |
| 12:44:32 | 129 | 68 | sell 3 USDC → USDT | filled | 11s | 1 |  |
| 12:44:32 | 130 | 69 | sell 0.02 SOL → JUP | filled | 11s | 1 |  |
| 12:46:23 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 13s | 1 |  |
| 12:46:23 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 4s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 12:46:23 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 14s | 1 |  |
| 12:46:23 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 18s | 1 |  |
| 12:46:23 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 14s | 1 |  |
| 12:46:23 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 13s | 1 |  |
| 12:46:23 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 12s | 1 |  |
| 12:46:23 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 12s | 1 |  |
| 12:46:23 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 13s | 1 |  |
| 12:46:23 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 13s | 1 |  |
| 12:46:23 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 17s | 1 |  |
| 12:46:23 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 19s | 1 |  |
| 12:46:23 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:23 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:46:37 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 10s | 1 |  |
| 12:46:27 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 41s | 1 | main expired |
| 12:46:37 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 11s | 1 |  |
| 12:46:42 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 9s | 1 |  |
| 12:46:37 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | filled | 11s | 1 |  |
| 12:46:25 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:46:28 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | filled | 16s | 1 |  |
| 12:46:25 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:46:25 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:46:25 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:46:26 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:46:26 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:46:26 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:46:26 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 8s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:46:26 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:48:53 | 183 | 107 | sell 0.1 SOL → USDC | filled | 9s | 1 |  |
| 12:48:53 | 184 | 108 | sell 0.1 SOL → USDC | filled | 8s | 1 |  |
| 12:48:53 | 185 | 109 | buy 10 USDC ← SOL | filled | 13s | 1 |  |
| 12:48:53 | 186 | 110 | buy 10 USDC ← SOL | filled | 18s | 1 |  |
| 12:48:53 | 187 | 111 | sell 0.1 SOL → USDT | filled | 9s | 1 |  |
| 12:48:53 | 188 | 112 | sell 0.1 SOL → USDT | filled | 8s | 1 |  |
| 12:48:53 | 189 | 113 | buy 10 USDT ← SOL | filled | 10s | 1 |  |
| 12:48:53 | 190 | 114 | buy 10 USDT ← SOL | filled | 18s | 1 |  |

### Rows without an order

35 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 25 | SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx, SOL → Bonk, SOL → POPCAT, SOL → USDe, SOL → EURC, SOL → USDY, SOL → JLP, SOL → BNB, SOL → XAUt0, SOL → GLDx, SOL → EUROP, SOL → Fartcoin, SOL → MEW, SOL → BOME, SOL → hyloSOL, SOL → PSOL | no route found |
| NoLiquidity | quote | 9 | SOL → CASH, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| BlockhashExpired | main | 1 | SOL → PAID | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 155 (153 main, 2 acquire). Cleanup placed 93 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 12:27:50 | 2 | USDT → SOL (native) | Executed | `0x9966f015…` [🐞](https://debug.barn.cow.fi/order/0x9966f0150c9a6be6e5153a407037f63fb8491e8b939771bac7166f684d31988a) |
| 12:27:52 | 1 | USDC → SOL (native) | Executed | `0x5ab58165…` [🐞](https://debug.barn.cow.fi/order/0x5ab58165bdba8ded930aec50544ab58a934e385fc8661cfa5e0b587f5942a206) |
| 12:29:19 | 4 | JUP → SOL (native) | Executed | `0xc23b80d3…` [🐞](https://debug.barn.cow.fi/order/0xc23b80d3229b88377094722f3790563ed4ed2d42eba1e20f3ace566f32a0a5ab) |
| 12:29:19 | 5 | JUP → SOL (native) | Executed | `0x5922973a…` [🐞](https://debug.barn.cow.fi/order/0x5922973ac11d3e6be61955ca80ddbd0477895dfab14b30870434d1487e81e2c0) |
| 12:29:20 | 6 | JUP → SOL (native) | Executed | `0x8794c37d…` [🐞](https://debug.barn.cow.fi/order/0x8794c37d13e34defa146c757946326d6c8e14fbeb911d576b5d378fad1bd36df) |
| 12:29:21 | 7 | JUP → SOL (native) | Executed | `0x91abe7da…` [🐞](https://debug.barn.cow.fi/order/0x91abe7dae8dc24cd0fe892b1fa0de4a2f4a4490c9d66d616a23fdf4ce6a32f4f) |
| 12:29:22 | 8 | JUP → SOL (native) | Executed | `0x3b0fabef…` [🐞](https://debug.barn.cow.fi/order/0x3b0fabef5326222ccdc0c98bb4d6b48f9fa1b7497c6763fdd2763c751f72e9fb) |
| 12:29:23 | 9 | JUP → SOL (native) | Executed | `0xe1755eec…` [🐞](https://debug.barn.cow.fi/order/0xe1755eec236f630c7ec57820cb6cd564b743dfecc6718286e3c4c491056e68b1) |
| 12:29:25 | 11 | JUP → SOL (native) | Executed | `0x470d64b4…` [🐞](https://debug.barn.cow.fi/order/0x470d64b47aff143cdab7fdd1413405dbd8d3d10ef91d0a11951e2bd98b71993b) |
| 12:29:28 | 12 | JUP → SOL (native) | Executed | `0xe4275b2a…` [🐞](https://debug.barn.cow.fi/order/0xe4275b2a7a841dce60f4af5f422c84879ca72f20da97f25f0c4b7d7f524342c7) |
| 12:29:32 | 13 | JUP → SOL (native) | Executed | `0xfeadcf55…` [🐞](https://debug.barn.cow.fi/order/0xfeadcf553c7f30f927c772e4243640990b2f810344ee64c7619f256712c1335f) |
| 12:29:36 | 14 | JUP → SOL (native) | Executed | `0x11492981…` [🐞](https://debug.barn.cow.fi/order/0x11492981db9ad3884200918027e40adeb3081e4d6bca9e9de6631c4f27744c9d) |
| 12:29:45 | 15 | JUP → SOL (native) | Executed | `0x083909ef…` [🐞](https://debug.barn.cow.fi/order/0x083909ef6eedfb704098702848c82448cb6964a19cab8de66f933cadb6ae5cb7) |
| 12:29:49 | 16 | JUP → SOL (native) | Executed | `0x9ffc2d58…` [🐞](https://debug.barn.cow.fi/order/0x9ffc2d586481132855f0ccab36a66a9928235addea9e37f72a68f0f462220473) |
| 12:29:50 | 17 | JUP → SOL (native) | Executed | `0x2c289852…` [🐞](https://debug.barn.cow.fi/order/0x2c28985226642bdc3e2b6f8deb2b88f982566d6da7f39005e47922add0ab0d08) |
| 12:29:53 | 18 | JUP → SOL (native) | Executed | `0x658db557…` [🐞](https://debug.barn.cow.fi/order/0x658db5570fcd81a36eb62832ad361b1dfe6107ddb0cc9049ab3c85ab0a73b5b0) |
| 12:29:58 | 19 | JUP → SOL (native) | Executed | `0xa196bab0…` [🐞](https://debug.barn.cow.fi/order/0xa196bab088c54c9eaf6208d08690953427266da4647b9094fffdf975aa1c9447) |
| 12:30:08 | 23 | JUP → SOL (native) | Executed | `0xabe9ba8e…` [🐞](https://debug.barn.cow.fi/order/0xabe9ba8e5246937b904345f0954ec3d458a6ee3154f2d3ec1b79f9f018b59c98) |
| 12:30:12 | 21 | JUP → SOL (native) | Executed | `0x0ff8d873…` [🐞](https://debug.barn.cow.fi/order/0x0ff8d8731f52a5b3856092a5903cccf94a484fb90a99374f94d012f735a4e39f) |
| 12:30:12 | 24 | JUP → SOL (native) | Executed | `0xcb5d1de0…` [🐞](https://debug.barn.cow.fi/order/0xcb5d1de07817b975eb3fc81e0fd4c3f499f21ef860d770d709098c02eac87577) |
| 12:30:18 | 20 | JUP → SOL (native) | Executed | `0x10421fa3…` [🐞](https://debug.barn.cow.fi/order/0x10421fa3efe3cc60efe0038fe1ad69a91cda52195706ed1ebf3f59107c29d1bb) |
| 12:30:19 | 25 | JUP → SOL (native) | Executed | `0x7e53589a…` [🐞](https://debug.barn.cow.fi/order/0x7e53589ad223082ca8e4eda0b966f6f3c10bb5150d18ebe76f325d9783d96c34) |
| 12:30:21 | 22 | JUP → SOL (native) | Executed | `0xae54109e…` [🐞](https://debug.barn.cow.fi/order/0xae54109e6de6ebea279d36c0a198a85f23e7d3ebcddb254c1eca68cce2630094) |
| 12:30:26 | 28 | JUP → SOL (native) | Executed | `0x97af43f6…` [🐞](https://debug.barn.cow.fi/order/0x97af43f65df9e164df674d957e7fe8bb1632c4d428a34712f33a0d73f4e4c0e9) |
| 12:30:30 | 26 | JUP → SOL (native) | Executed | `0x8d56929b…` [🐞](https://debug.barn.cow.fi/order/0x8d56929bfbc8e7c249a8b5fe368813839df85a0409104443e87f6a51f43e17d8) |
| 12:30:31 | 27 | JUP → SOL (native) | Executed | `0xc309738a…` [🐞](https://debug.barn.cow.fi/order/0xc309738a3604643202436eb58fd193c3cd6828556db0006bd477659cd1192dda) |
| 12:38:44 | 30 | USDC → SOL (native) | Executed | `0xccc8d0f4…` [🐞](https://debug.barn.cow.fi/order/0xccc8d0f46939856b63d44f3e40d5ada9dbf93c4577513c42f814faa51aad1ac7) |
| 12:38:45 | 31 | USDC → SOL (native) | Executed | `0xaf6f153b…` [🐞](https://debug.barn.cow.fi/order/0xaf6f153ba04951c85df6c840ec3c06096ed4e5eb46a7f9b0eeb21a4d7c101564) |
| 12:38:46 | 32 | USDC → SOL (native) | Executed | `0x628ee753…` [🐞](https://debug.barn.cow.fi/order/0x628ee753bd09602e0c5a283848b59dd08adafcb4cf44358b8d4aa728d3d4ddbe) |
| 12:38:48 | 33 | USDC → SOL (native) | Executed | `0x848ddb25…` [🐞](https://debug.barn.cow.fi/order/0x848ddb25861c7a96d6d8186fa07a97830151607835d19addf68520fc4fc94586) |
| 12:38:48 | 34 | USDC → SOL (native) | Executed | `0x21b714c2…` [🐞](https://debug.barn.cow.fi/order/0x21b714c2700d20a65f3e2724ca2f27dcb151edb002071b2d8491f1b48c32d1f2) |
| 12:38:49 | 35 | USDC → SOL (native) | Executed | `0xbf3bd165…` [🐞](https://debug.barn.cow.fi/order/0xbf3bd165c3f2cb81105f12f50b7fb42de3488b09858cce398cc6b44032d293ec) |
| 12:38:51 | 36 | USDC → SOL (native) | Executed | `0xd94cdca0…` [🐞](https://debug.barn.cow.fi/order/0xd94cdca0b6ef5ae5760391aaa9a9936ec6b5628519a965faf74303faa63ffc9a) |
| 12:38:51 | 37 | USDC → SOL (native) | Executed | `0xfa4973a9…` [🐞](https://debug.barn.cow.fi/order/0xfa4973a90b4ad0133f87417bcab4981bab4b1779ac6411f3e494ec6249ae05cb) |
| 12:38:54 | 38 | USDC → SOL (native) | Executed | `0xe91a828e…` [🐞](https://debug.barn.cow.fi/order/0xe91a828e929234ae269a39494da6899ca3203cc4a9fe32c20cee9d4a5deef8cb) |
| 12:38:55 | 29 | USDC → SOL (native) | Executed | `0xb22eb6cd…` [🐞](https://debug.barn.cow.fi/order/0xb22eb6cdc27e84ab9efbd2e7ee97651df684e25e860ce02e89ea646623760773) |
| 12:39:15 | 39 | USDC → SOL (native) | Executed | `0x302f9eee…` [🐞](https://debug.barn.cow.fi/order/0x302f9eee7da78c1574aae628d541c854c116e6d521df23fa0f0b0f3f13704566) |
| 12:39:16 | 40 | USDC → SOL (native) | Executed | `0xa0f2694e…` [🐞](https://debug.barn.cow.fi/order/0xa0f2694eecbcb00a9900764ebda60ddf8d46a32e21bdf693da131dce2810d2a7) |
| 12:39:17 | 41 | USDC → SOL (native) | Executed | `0xadc4b8d2…` [🐞](https://debug.barn.cow.fi/order/0xadc4b8d2c431d65aa50deab3aa4dacfbaa5f964cd4d949696a6b45c305a18948) |
| 12:39:21 | 42 | USDC → SOL (native) | Executed | `0xb2c55722…` [🐞](https://debug.barn.cow.fi/order/0xb2c55722c781e5a373356ec73189babd1e793255a349ca2168913b33b08affd9) |
| 12:39:23 | 43 | USDC → SOL (native) | Executed | `0x90191ae6…` [🐞](https://debug.barn.cow.fi/order/0x90191ae6ae30c4b6d868c8efc19ef2de336f580d950d9a23066c4d94d49316ec) |
| 12:39:26 | 44 | USDC → SOL (native) | Executed | `0x5f562c51…` [🐞](https://debug.barn.cow.fi/order/0x5f562c51ae4828b4e9fd63cc0525d4d53bff938f852b2a9bf966cb09be38cdbe) |
| 12:39:27 | 45 | USDC → SOL (native) | Executed | `0xc7e7af5f…` [🐞](https://debug.barn.cow.fi/order/0xc7e7af5fd306ff12d35469c6e1fe199d67963debb3bd634701c8abd4b99f1e06) |
| 12:39:28 | 46 | USDC → SOL (native) | Executed | `0x65839253…` [🐞](https://debug.barn.cow.fi/order/0x65839253dc8348750e2429d3c93e0bb2a3fbe2e02ed28a4e9971b69b3b5e90da) |
| 12:39:33 | 47 | USDC → SOL (native) | Executed | `0xb850a877…` [🐞](https://debug.barn.cow.fi/order/0xb850a877a7c7f78aa007a7e6169f3e275cd61ee3ad42f5c2dd8bf9671cb12ceb) |
| 12:39:35 | 48 | USDC → SOL (native) | Executed | `0x57ee7c40…` [🐞](https://debug.barn.cow.fi/order/0x57ee7c4018873422d9262fef22ea21cb6b2252febe2968df49140302e5b1b829) |
| 12:39:45 | 49 | USDC → SOL (native) | Executed | `0x10068cc8…` [🐞](https://debug.barn.cow.fi/order/0x10068cc8603009e6b2890a0f84c0a3995973e53d4d84bff216ec25384e184966) |
| 12:39:51 | 50 | USDC → SOL (native) | Executed | `0x964aa9b1…` [🐞](https://debug.barn.cow.fi/order/0x964aa9b1d2108d94e1d9c335769a911bffb7b05f12381c39caceef18fd139a56) |
| 12:40:03 | 51 | USDC → SOL (native) | Executed | `0xcbe168b8…` [🐞](https://debug.barn.cow.fi/order/0xcbe168b8d2639e726edffd77b6157020e522cc190ec0abdf14b73d65b3c7a071) |
| 12:40:03 | 52 | USDC → SOL (native) | Executed | `0xd5640d68…` [🐞](https://debug.barn.cow.fi/order/0xd5640d68ccf3f8e0fe2bd12e957ce06037e14c9c03331a10c4797a0d393d142a) |
| 12:40:05 | 53 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x74571afa…` [🐞](https://debug.barn.cow.fi/order/0x74571afae94ccc16d3ccbef937b3670963b53e09b45357b6fce2316645e3cabe) |
| 12:40:06 | 54 | USDC → SOL (native) | Executed | `0x3e828126…` [🐞](https://debug.barn.cow.fi/order/0x3e828126a603c5d13694baca430c0cc0f14bf820765b273996841e83bf35a416) |
| 12:40:18 | 55 | USDC → SOL (native) | Executed | `0xc193cb22…` [🐞](https://debug.barn.cow.fi/order/0xc193cb22e61099215a6c32187fb70e9b62ac1cec1d9b7d97c0499009fd069114) |
| 12:40:21 | 56 | USDC → SOL (native) | Executed | `0x94af1747…` [🐞](https://debug.barn.cow.fi/order/0x94af174764495fed4e5a49566e8ab77abbe5e36bdb2a5101498ee18b073bdaf2) |
| 12:40:29 | 57 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb53e8f18…` [🐞](https://debug.barn.cow.fi/order/0xb53e8f18a7a0414842e8ba041c37cf6aea6a8ed204b49c91b6acf483ef947736) |
| 12:40:35 | 58 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x17a1d423…` [🐞](https://debug.barn.cow.fi/order/0x17a1d4239ad35105e52908f4b9099299d12f913197f0a50219a33f2d21e5b7ad) |
| 12:40:40 | 59 | USDC → SOL (native) | Executed | `0x73b7906c…` [🐞](https://debug.barn.cow.fi/order/0x73b7906c8a7cfa0a13f67c464e5e729652ec93dc7b9aa92311483c4e92011601) |
| 12:40:43 | 60 | USDC → SOL (native) | Executed | `0xa192fb7d…` [🐞](https://debug.barn.cow.fi/order/0xa192fb7dc06f032fea1aa28f914d89b5164ceca4d8484b4fd2aa56245cce8d94) |
| 12:44:46 | 61 | USDC → SOL (native) | Executed | `0x5b8a88d4…` [🐞](https://debug.barn.cow.fi/order/0x5b8a88d42b7c612e1bafd7e0947fc29ccff7a6929d0165b1675791a2251add50) |
| 12:44:47 | 62 | USDC → SOL (native) | Executed | `0x60d56aa6…` [🐞](https://debug.barn.cow.fi/order/0x60d56aa603d50b1ca050ff686e9b2cc811f1614c409930535bde247422576b45) |
| 12:44:48 | 63 | USDC → SOL (native) | Executed | `0x9e0e1caa…` [🐞](https://debug.barn.cow.fi/order/0x9e0e1caabb1ac2aff3754538f5462c8b802b4b6f53e85964509fbdcfb98f9578) |
| 12:44:49 | 64 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xaab5ce69…` [🐞](https://debug.barn.cow.fi/order/0xaab5ce692359f108cdf54292c9f9f80ac6bfb26b3a650fad51c985607b82aec4) |
| 12:44:50 | 65 | USDT → SOL (native) | Executed | `0x0c0725f5…` [🐞](https://debug.barn.cow.fi/order/0x0c0725f51ce363f77bb18b9795c4f37ade16773d2e3a40a7e0588db82f929ff6) |
| 12:44:51 | 66 | USDC → SOL (native) | Executed | `0x3b459594…` [🐞](https://debug.barn.cow.fi/order/0x3b4595948c39bbb37d57804b1915841e9976b56cb38022b7548c250e1ceb81c5) |
| 12:44:52 | 66 | USDT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4de7ba0e…` [🐞](https://debug.barn.cow.fi/order/0x4de7ba0e8aff134bb208e103a06a8b694fa4e2024a31a9130ac14efaeed949ed) |
| 12:44:52 | 67 | USDC → SOL (native) | Executed | `0x861ab99d…` [🐞](https://debug.barn.cow.fi/order/0x861ab99d0faee52ccab652ddb6c0d375e40e25b1b0b1ac073e6440ba56534617) |
| 12:44:54 | 68 | USDC → SOL (native) | Executed | `0xabec63dc…` [🐞](https://debug.barn.cow.fi/order/0xabec63dc89f916602b18009c101a0b6e48ad6f09020b0b2ca4d965da337c3ac2) |
| 12:44:55 | 68 | USDT → SOL (native) | Executed | `0x16405294…` [🐞](https://debug.barn.cow.fi/order/0x16405294749e880a014f45552e9df7f26c133cbe4c7045ba1e0cb0b2e9888145) |
| 12:44:57 | 69 | JUP → SOL (native) | Executed | `0xc34e5781…` [🐞](https://debug.barn.cow.fi/order/0xc34e5781c94404b15ee6eabbcebf21b5498ac56c5a05add985a40d9bb2d9f6f7) |
| 12:47:13 | 72 | USDG → SOL (native) | Executed | `0x6c622b35…` [🐞](https://debug.barn.cow.fi/order/0x6c622b35d98aee1c8aaa2cea33f341207117bfeebdf6a709b39fe66306f170bf) |
| 12:47:14 | 73 | PUMP → SOL (native) | Executed | `0xc5af38e4…` [🐞](https://debug.barn.cow.fi/order/0xc5af38e4dfb1e690779decb159625baef58ebce52f7e89ff83405bb00a525c73) |
| 12:47:15 | 74 | PYUSD → SOL (native) | Executed | `0x2abf1f85…` [🐞](https://debug.barn.cow.fi/order/0x2abf1f85f12f872311373b6c9f65b6c4fc8d1ab5ccfea6ec4b28bd666cf1c984) |
| 12:47:17 | 76 | CRCLx → SOL (native) | Executed | `0xf8cc9c6e…` [🐞](https://debug.barn.cow.fi/order/0xf8cc9c6e1ca0fcbf28b0b2f0d943787b62de6c6120937b346b68b8506ce34287) |
| 12:47:24 | 70 | ANSEM → SOL (native) | Executed | `0xd6ff7e69…` [🐞](https://debug.barn.cow.fi/order/0xd6ff7e69f2b5c74d6873aceb939813202c3ce575a4fb4889528e02bdc6e0533c) |
| 12:47:27 | 82 | SPCX → SOL (native) | Executed | `0xf3ae0b2b…` [🐞](https://debug.barn.cow.fi/order/0xf3ae0b2b4acabb18822115b4918565f77561cdad393ee595cc72d5d9179b6711) |
| 12:47:27 | 83 | SPCXx → SOL (native) | Executed | `0x99eaa2fc…` [🐞](https://debug.barn.cow.fi/order/0x99eaa2fcc9c326faa074f9ffb5fbe1f27fb930f65a58744d31018476a0ee962d) |
| 12:47:34 | 86 | $WIF → SOL (native) | Executed | `0xdddd4cb8…` [🐞](https://debug.barn.cow.fi/order/0xdddd4cb80fb22a0840985806039a4a11e1bcf786d6b9f1d06a4dafa1dc1658b6) |
| 12:47:45 | 88 | JitoSOL → SOL (native) | Executed | `0xb1a15dfd…` [🐞](https://debug.barn.cow.fi/order/0xb1a15dfd2c133ded41db8303660239cada2e4b0007a117c4ecaeaa8a4b6cfef0) |
| 12:47:49 | 89 | mSOL → SOL (native) | Executed | `0x3f584eb6…` [🐞](https://debug.barn.cow.fi/order/0x3f584eb6874e5865ece9a421379a5c075e9e626ca63203aa4687682384574bd4) |
| 12:47:49 | 90 | JupSOL → SOL (native) | Executed | `0x701280e5…` [🐞](https://debug.barn.cow.fi/order/0x701280e5e947bf511bbbf50a0d8c4686750c84ee29239eddf52cde336ed3fa61) |
| 12:47:53 | 91 | cbBTC → SOL (native) | Executed | `0x116dc88e…` [🐞](https://debug.barn.cow.fi/order/0x116dc88e8bfa36c549f32f8ebb2b8701fa020998ff82fa2186fce8ec76a371e7) |
| 12:48:01 | 96 | INF → SOL (native) | Executed | `0xc6454345…` [🐞](https://debug.barn.cow.fi/order/0xc6454345cff247a8344f049c259da2edc941417b5af84fb08cdf317f3dd24595) |
| 12:48:07 | 97 | ETH → SOL (native) | Executed | `0xe0f05c86…` [🐞](https://debug.barn.cow.fi/order/0xe0f05c86358d06d3e8ac91f96eb72130d8a6d3f6d1a6ed84cb0db075360bc88b) |
| 12:49:15 | 108 | USDC → SOL (native) | Executed | `0x3044d1db…` [🐞](https://debug.barn.cow.fi/order/0x3044d1db0c0adbf80b3a3a6404ca1e7f07bef22592b7cbf5852c77b10387df97) |
| 12:49:16 | 109 | USDC → SOL (native) | Executed | `0xed2a5778…` [🐞](https://debug.barn.cow.fi/order/0xed2a5778f2d9627acfb1539d8bd50fd5e581ccd1da692d1a2aa4cd6fdc12fc9c) |
| 12:49:17 | 110 | USDC → SOL (native) | Executed | `0x20770a12…` [🐞](https://debug.barn.cow.fi/order/0x20770a12021e8c87a721295578b041dc5772b0699cee4ec6e86d82a1221e890f) |
| 12:49:18 | 111 | USDT → SOL (native) | Executed | `0x99600536…` [🐞](https://debug.barn.cow.fi/order/0x996005361849e8f3ecb94d4f509a679337d3c2c92b157fc91cdb39e4fed52616) |
| 12:49:19 | 112 | USDT → SOL (native) | Executed | `0xfae9f7fa…` [🐞](https://debug.barn.cow.fi/order/0xfae9f7fa8d9c806b938cbc94b4a3a92af965dcea0cd3bcdc369a1d2381ec6925) |
| 12:49:20 | 113 | USDT → SOL (native) | Executed | `0xdd227249…` [🐞](https://debug.barn.cow.fi/order/0xdd22724975444ae3bb8124ad906fb276ba8f8351750439bbf576b715d975f290) |
| 12:49:21 | 114 | USDT → SOL (native) | Executed | `0x8f9cade7…` [🐞](https://debug.barn.cow.fi/order/0x8f9cade7a8df26ce5f12da2321a03ee84b52c6f8170e565e57bd0beb3f2b13ef) |
| 12:49:21 | 107 | USDC → SOL (native) | Executed | `0xe4f4077c…` [🐞](https://debug.barn.cow.fi/order/0xe4f4077c72a0b76f1606eb6cc3ac35929e7fedfac91401822a9cbee06303e295) |
| 12:52:28 | 10 | JUP → SOL (native) | Executed | `0x368ab0ac…` [🐞](https://debug.barn.cow.fi/order/0x368ab0ac9832a83e103c76d5eb981c8448c11a1396aeac34eeab5aa3fd675249) |
| 12:53:38 | 58 | USDC → SOL (native) | Executed | `0xc7e9ab1c…` [🐞](https://debug.barn.cow.fi/order/0xc7e9ab1ceaa384bf8ee2458f97c14f24dd698149500191bed5661a42c379746e) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 142 | 91.6% |
| cancelled | 9 | 5.8% |
| expired: never created on-chain (winner found, creation blockhash expired) | 4 | 2.6% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 9s | 15s | 61s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| GCBB…o5VC | 142 | 100.0% | 53 | 138,630 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| asao | 316 | 108 | 107 | 99.1% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 368 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 136 | 126 | 92.6% |
| market buy | 19 | 16 | 84.2% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 96 | 87 | 90.6% |
| wSOL → JUP | 28 | 26 | 92.9% |
| wSOL → USDT | 8 | 7 | 87.5% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → PYUSD | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 0 | 0.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 3 | 60.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 5 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 5 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 5 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 2 | 50.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 4 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 4 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 4 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 2 | 66.7% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 2 | 66.7% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 3 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 3 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 1 | 50.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 1 | 50.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 2 | 0 | 0.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 1 | 50.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 1 | 50.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 2 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 2 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 2 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 2 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 2 | 2 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 2 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 2 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 1 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 1 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 1 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 1 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 1 | 0 | 0.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 1 | 100.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 1 | 1 | 100.0% |
| `52CfB35yd7jyGA6U2198WmCDVV8wi3Xg48S4MgMDvKR1` | 1 | 1 | 100.0% |
| `FCMwP3inMPkh6iUYYee8F9kHE8BtMUPCTAJ6ifPfo7Vy` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 9 | 0 |
| Winner too late: creation blockhash expired | 4 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 12:26:00 | wSOL → USDT | market buy | Winner too late: creation blockhash expired | `0xb733caad…` [🐞](https://debug.barn.cow.fi/order/0xb733caad8705a12d13b9f281019d5d6a7667e96ee586f65d4ab616fb290db85d) |
| 12:26:00 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf75d64b6…` [🐞](https://debug.barn.cow.fi/order/0xf75d64b687ad131c0861ea178ac17635c2827f59221629ae499c6f6cde9aa136) |
| 12:26:01 | wSOL → USDC | market buy | Winner too late: creation blockhash expired | `0xfa4f428f…` [🐞](https://debug.barn.cow.fi/order/0xfa4f428f1c2d0317b95181b827002dc668e73bba312f03e0ae5a0dff283a9b9d) |
| 12:27:15 | wSOL → JUP | market sell | Winner too late: creation blockhash expired | `0x85610f90…` [🐞](https://debug.barn.cow.fi/order/0x85610f9011872e85dee859dd8ba3e31cd765df54ec2ac6de8bdfa4da0f34cf7b) |
| 12:32:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1972953c…` [🐞](https://debug.barn.cow.fi/order/0x1972953cca0d0b24efc0a94853cf964712e1177fa4adebbed6dc32be7c3f4de4) |
| 12:32:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5ca6b944…` [🐞](https://debug.barn.cow.fi/order/0x5ca6b94425401ac7ba937b9989db4f2b5ad131486c9cf27ee4e0f9445b4f17fb) |
| 12:34:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb7e98900…` [🐞](https://debug.barn.cow.fi/order/0xb7e989004376812b085e1396fe581cf81ec346bab764bb5c1cd193e1e31414e2) |
| 12:34:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6b209311…` [🐞](https://debug.barn.cow.fi/order/0x6b2093117097748a57275a5062f140e0f95641d2ff74443781cef4c153db2861) |
| 12:34:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5d95b2bc…` [🐞](https://debug.barn.cow.fi/order/0x5d95b2bc067364d4b802f1d3b4060e9d2802c199aac57b9d8f6d80fc71f3294c) |
| 12:34:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4a0f00a9…` [🐞](https://debug.barn.cow.fi/order/0x4a0f00a9e3c8725b8b54697698e646d96c839274a7f52d511ff57670030a2f4b) |
| 12:36:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc3c68ebd…` [🐞](https://debug.barn.cow.fi/order/0xc3c68ebdf005dc58e2df17f9695b983af349fe9e3c70cc92d41c7abf1c9df832) |
| 12:36:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0129ca76…` [🐞](https://debug.barn.cow.fi/order/0x0129ca76511d45980fe6be001c29ba6c03bf024592decb9717c898329b368e11) |
| 12:46:33 | wSOL → PAID | market buy | Winner too late: creation blockhash expired | `0x69d77103…` [🐞](https://debug.barn.cow.fi/order/0x69d771036acb3ba7e799c89686293b357cf9c24daaab6b26acf23f29c2cec4aa) |
