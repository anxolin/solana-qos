# Solana QoS report: 2026-10-21-11-26-composite-asao-run

Barn, orders created between `2026-10-21T11:27:51.172Z` and `2026-10-21T12:00:36.086Z`. Data fetched 2026-10-21T12:04:45+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 170 |
| Orders executed | **152** (89.4%) |
| Sponsored orders never created on-chain | 3 (1.8%) |
| Traders | 102 |
| Settlement txs | 86 |

## Scenario results

Target solver: `asao`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-21T11:27:51.172Z | 2026-10-21T11:28:38.853Z | 6/6 | 0 | 8 | 8 | 100.0% |
| solver-same-direction-25 | 2026-10-21T11:29:14.560Z | 2026-10-21T11:30:33.229Z | 20/25 | 5 | 25 | 20 | 80.0% |
| solver-burst-sell | 2026-10-21T11:33:26.845Z | 2026-10-21T11:40:48.137Z | 75/84 | 9 | 84 | 75 | 89.3% |
| solver-cow | 2026-10-21T11:43:26.352Z | 2026-10-21T11:46:24.171Z | 9/15 | 6 | 15 | 15 | 60.0% |
| solver-token-coverage | 2026-10-21T11:47:41.225Z | 2026-10-21T11:49:31.756Z | 27/52 | 25 | 31 | 27 | 51.9% |
| solver-fresh-accounts | 2026-10-21T11:51:36.792Z | 2026-10-21T11:51:56.789Z | 7/8 | 1 | 7 | 7 | 87.5% |

## Scenario

144 of 190 scenario rows completed. 0 retries, 15 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:27:51 | 1 | 1 | sell 0.005 SOL → USDC | filled | 6s | 1 |  |
| 11:27:51 | 2 | 2 | sell 0.005 SOL → USDT | filled | 6s | 1 |  |
| 11:27:51 | 3 | 3 | sell 0.5 JUP → USDC | filled | 17s | 2 |  |
| 11:27:56 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 8s | 1 |  |
| 11:27:57 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 7s | 1 |  |
| 11:28:08 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 30s | 2 |  |
| 11:29:14 | 7 | 4 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 11:29:14 | 8 | 5 | sell 0.005 SOL → JUP | filled | 52s | 1 |  |
| 11:29:14 | 9 | 6 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 11:29:14 | 10 | 7 | sell 0.005 SOL → JUP | filled | 10s | 1 |  |
| 11:29:14 | 11 | 8 | sell 0.005 SOL → JUP | filled | 7s | 1 |  |
| 11:29:14 | 12 | 9 | sell 0.005 SOL → JUP | filled | 54s | 1 |  |
| 11:29:14 | 13 | 10 | sell 0.005 SOL → JUP | filled | 7s | 1 |  |
| 11:29:14 | 14 | 11 | sell 0.005 SOL → JUP | failed | 77s | 1 | main timeout |
| 11:29:14 | 15 | 12 | sell 0.005 SOL → JUP | filled | 48s | 1 |  |
| 11:29:14 | 16 | 13 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 11:29:14 | 17 | 14 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 11:29:14 | 18 | 15 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 11:29:14 | 19 | 16 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 11:29:14 | 20 | 17 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 11:29:14 | 21 | 18 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 11:29:14 | 22 | 19 | sell 0.005 SOL → JUP | filled | 46s | 1 |  |
| 11:29:14 | 23 | 20 | sell 0.005 SOL → JUP | filled | 60s | 1 |  |
| 11:29:14 | 24 | 21 | sell 0.005 SOL → JUP | filled | 59s | 1 |  |
| 11:29:14 | 25 | 22 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 11:29:14 | 26 | 23 | sell 0.005 SOL → JUP | filled | 53s | 1 |  |
| 11:29:14 | 27 | 24 | sell 0.005 SOL → JUP | filled | 35s | 1 |  |
| 11:29:14 | 28 | 25 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 11:29:14 | 29 | 26 | sell 0.005 SOL → JUP | filled | 54s | 1 |  |
| 11:29:14 | 30 | 27 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 11:29:14 | 31 | 28 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 11:33:26 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 11:33:26 | 33 | 30 | sell 0.003 SOL → USDC | filled | 6s | 1 |  |
| 11:33:26 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 6s | 1 |  |
| 11:33:26 | 35 | 32 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 11:34:56 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 11:34:56 | 37 | 30 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 11:34:56 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 11:34:56 | 39 | 32 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 11:34:56 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 11:34:56 | 41 | 34 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 11:34:56 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 11:34:56 | 43 | 36 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 11:36:26 | 44 | 29 | sell 0.0025 SOL → USDC | filled | 44s | 1 |  |
| 11:36:26 | 45 | 30 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 11:36:26 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 11:36:26 | 47 | 32 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 11:36:26 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 71s | 1 | main timeout |
| 11:36:26 | 49 | 34 | sell 0.003 SOL → USDC | filled | 46s | 1 |  |
| 11:36:26 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 11:36:26 | 51 | 36 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 11:36:26 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 46s | 1 |  |
| 11:36:26 | 53 | 38 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 11:36:26 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 11:36:26 | 55 | 40 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 11:36:26 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 45s | 1 |  |
| 11:36:26 | 57 | 42 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 11:36:26 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 11:36:26 | 59 | 44 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 11:37:56 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 11:37:56 | 61 | 30 | sell 0.003 SOL → USDC | filled | 45s | 1 |  |
| 11:37:56 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 11:37:56 | 63 | 32 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 11:37:56 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 11:37:56 | 65 | 34 | sell 0.003 SOL → USDC | filled | 47s | 1 |  |
| 11:37:56 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 11:37:56 | 67 | 36 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 11:37:56 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 11:37:56 | 69 | 38 | sell 0.003 SOL → USDC | filled | 46s | 1 |  |
| 11:37:56 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 11:37:56 | 71 | 40 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 11:37:56 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 11:37:56 | 73 | 42 | sell 0.003 SOL → USDC | filled | 46s | 1 |  |
| 11:37:56 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 11:37:56 | 75 | 44 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 11:37:56 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 50s | 1 |  |
| 11:37:56 | 77 | 46 | sell 0.003 SOL → USDC | filled | 28s | 1 |  |
| 11:37:56 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 11:37:56 | 79 | 48 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 11:37:56 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 29s | 1 |  |
| 11:37:56 | 81 | 50 | sell 0.003 SOL → USDC | filled | 28s | 1 |  |
| 11:37:56 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 11:37:56 | 83 | 52 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 11:39:26 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 11:39:26 | 85 | 30 | sell 0.003 SOL → USDC | filled | 51s | 1 |  |
| 11:39:26 | 86 | 31 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 11:39:26 | 87 | 32 | sell 0.004 SOL → USDC | filled | 27s | 1 |  |
| 11:39:26 | 88 | 33 | sell 0.0025 SOL → USDC | filled | 57s | 1 |  |
| 11:39:26 | 89 | 34 | sell 0.003 SOL → USDC | filled | 81s | 1 |  |
| 11:39:26 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 31s | 1 |  |
| 11:39:26 | 91 | 36 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 11:39:26 | 92 | 37 | sell 0.0025 SOL → USDC | filled | 77s | 1 |  |
| 11:39:26 | 93 | 38 | sell 0.003 SOL → USDC | filled | 50s | 1 |  |
| 11:39:26 | 94 | 39 | sell 0.0035 SOL → USDC | filled | 46s | 1 |  |
| 11:39:26 | 95 | 40 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 11:39:26 | 96 | 41 | sell 0.0025 SOL → USDC | filled | 76s | 1 |  |
| 11:39:26 | 97 | 42 | sell 0.003 SOL → USDC | filled | 75s | 1 |  |
| 11:39:26 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 47s | 1 |  |
| 11:39:26 | 99 | 44 | sell 0.004 SOL → USDC | filled | 30s | 1 |  |
| 11:39:26 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 11:39:26 | 101 | 46 | sell 0.003 SOL → USDC | filled | 47s | 1 |  |
| 11:39:26 | 102 | 47 | sell 0.0035 SOL → USDC | filled | 29s | 1 |  |
| 11:39:26 | 103 | 48 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 11:39:26 | 104 | 49 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 11:39:26 | 105 | 50 | sell 0.003 SOL → USDC | filled | 56s | 1 |  |
| 11:39:26 | 106 | 51 | sell 0.0035 SOL → USDC | filled | 55s | 1 |  |
| 11:39:26 | 107 | 52 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 11:39:26 | 108 | 53 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 11:39:26 | 109 | 54 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 11:39:26 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 52s | 1 |  |
| 11:39:26 | 111 | 56 | sell 0.004 SOL → USDC | filled | 27s | 1 |  |
| 11:39:26 | 112 | 57 | sell 0.0025 SOL → USDC | failed | 81s | 1 | main timeout |
| 11:39:26 | 113 | 58 | sell 0.003 SOL → USDC | filled | 52s | 1 |  |
| 11:39:26 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 37s | 1 |  |
| 11:39:26 | 115 | 60 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 11:43:26 | 116 | 62 | buy 2.6 USDC ← SOL | failed | 0s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 11:43:26 | 117 | 64 | buy 1.3 USDC ← SOL | failed | 0s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 11:43:26 | 118 | 65 | buy 3.1 USDC ← SOL | failed | 0s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 11:43:26 | 119 | 66 | buy 3.1 USDT ← SOL | failed | 1s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 11:43:26 | 120 | 67 | buy 1.1 USDT ← SOL | failed | 1s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 11:43:26 | 121 | 68 | buy 3.2 USDC ← SOL | failed | 1s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 11:45:56 | 122 | 61 | sell 0.02 SOL → USDC | filled | 4s | 1 |  |
| 11:45:56 | 123 | 62 | buy 0.02 SOL ← USDC | filled | 23s | 2 |  |
| 11:45:56 | 124 | 63 | sell 0.03 SOL → USDC | filled | 4s | 1 |  |
| 11:45:56 | 125 | 64 | sell 1.2 USDC → SOL | filled | 28s | 2 |  |
| 11:45:56 | 126 | 65 | sell 3 USDC → USDT | filled | 18s | 2 |  |
| 11:45:56 | 127 | 66 | sell 3 USDT → USDC | filled | 19s | 2 |  |
| 11:45:56 | 128 | 67 | sell 1 USDT → USDC | filled | 19s | 2 |  |
| 11:45:56 | 129 | 68 | sell 3 USDC → USDT | filled | 23s | 2 |  |
| 11:45:56 | 130 | 69 | sell 0.02 SOL → JUP | filled | 14s | 1 |  |
| 11:47:41 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 17s | 1 |  |
| 11:47:41 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 20s | 1 |  |
| 11:47:41 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 11s | 1 |  |
| 11:47:41 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 10s | 1 |  |
| 11:47:41 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 11s | 1 |  |
| 11:47:41 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 39s | 1 | main expired |
| 11:47:41 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 27s | 1 |  |
| 11:47:41 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 76s | 1 | main timeout |
| 11:47:41 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 18s | 1 |  |
| 11:47:41 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 12s | 1 |  |
| 11:47:41 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 40s | 1 |  |
| 11:47:41 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 27s | 1 |  |
| 11:47:41 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 40s | 1 | main expired |
| 11:47:41 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 28s | 1 |  |
| 11:47:41 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 43s | 1 | main expired |
| 11:47:41 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 21s | 1 |  |
| 11:47:41 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 28s | 1 |  |
| 11:47:41 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 19s | 1 |  |
| 11:47:41 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 16s | 1 |  |
| 11:47:41 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 22s | 1 |  |
| 11:47:41 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 16s | 1 |  |
| 11:47:41 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 38s | 1 |  |
| 11:47:41 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 20s | 1 |  |
| 11:47:41 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 29s | 1 |  |
| 11:47:41 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 29s | 1 |  |
| 11:47:41 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 16s | 1 |  |
| 11:47:41 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:41 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:47:58 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:48:01 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:47:51 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:47:51 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:47:52 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:48:20 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | filled | 4s | 1 |  |
| 11:48:08 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:48:57 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 34s | 1 |  |
| 11:47:59 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:47:53 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:48:21 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | filled | 4s | 1 |  |
| 11:48:08 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:48:21 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | filled | 10s | 1 |  |
| 11:48:09 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:48:24 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | filled | 7s | 1 |  |
| 11:51:36 | 183 | 107 | sell 0.1 SOL → USDC | filled | 9s | 1 |  |
| 11:51:36 | 184 | 108 | sell 0.1 SOL → USDC | filled | 8s | 1 |  |
| 11:51:36 | 185 | 109 | buy 10 USDC ← SOL | filled | 16s | 1 |  |
| 11:51:36 | 186 | 110 | buy 10 USDC ← SOL | filled | 18s | 1 |  |
| 11:51:36 | 187 | 111 | sell 0.1 SOL → USDT | filled | 9s | 1 |  |
| 11:51:36 | 188 | 112 | sell 0.1 SOL → USDT | failed | 2s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:51:36 | 189 | 113 | buy 10 USDT ← SOL | filled | 17s | 1 |  |
| 11:51:36 | 190 | 114 | buy 10 USDT ← SOL | filled | 19s | 1 |  |

### Rows without an order

28 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 14 | SOL → JitoSOL, SOL → ETH, SOL → BNB, SOL → XAUt0, SOL → GLDx, SOL → EUROP, SOL → Fartcoin, SOL → MEW, SOL → BOME, SOL → hyloSOL, SOL → PSOL, SOL → CRCLx, SOL → MU, SOL → SPCXx | no route found |
| NoLiquidity | quote | 7 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → USDv, SOL → SKHY | no route found |
| <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 | quote | 6 | SOL → USDC ×4, SOL → USDT ×2 |  |
| BlockhashExpired | main | 1 | SOL → USDT | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 170 (162 main, 8 acquire). Cleanup placed 93 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:28:41 | 2 | USDT → SOL (native) | Executed | `0x6d45f512…` [🐞](https://debug.barn.cow.fi/order/0x6d45f512cd2862c6cc1a015b20a5472720056497c13280ce00ce8b2d773fbb48) |
| 11:28:43 | 3 | USDC → SOL (native) | Executed | `0xc139c59a…` [🐞](https://debug.barn.cow.fi/order/0xc139c59a0587f665269d3ba02b07308c1dec5966eae3f698084295cf74012889) |
| 11:28:43 | 1 | USDC → SOL (native) | Executed | `0xc8b17e00…` [🐞](https://debug.barn.cow.fi/order/0xc8b17e00b6c399d1d9a259140d184e2750e3674ea84aa451c7480e2ee487e304) |
| 11:30:36 | 5 | JUP → SOL (native) | Executed | `0xca2e1dc3…` [🐞](https://debug.barn.cow.fi/order/0xca2e1dc35df5fef5d35c4bfcdebaa2e2670d7cbe704034078255c73f7a0d473f) |
| 11:30:36 | 6 | JUP → SOL (native) | Executed | `0x4565c55e…` [🐞](https://debug.barn.cow.fi/order/0x4565c55e4f5721ba498d1d373953facba47419bbd3454738e0aae06c0da4528f) |
| 11:30:37 | 7 | JUP → SOL (native) | Executed | `0xe79726b6…` [🐞](https://debug.barn.cow.fi/order/0xe79726b69a44984d096d9264b9ff85af5b920f5842e654109528e5bd9a680935) |
| 11:30:38 | 8 | JUP → SOL (native) | Executed | `0x74e3a00f…` [🐞](https://debug.barn.cow.fi/order/0x74e3a00f1bcb318ba0830d4f3af5413e346ee8ab25016e1aaf99b1ad204c00c1) |
| 11:30:39 | 9 | JUP → SOL (native) | Executed | `0x91c46c5f…` [🐞](https://debug.barn.cow.fi/order/0x91c46c5f773c5d0938779fe8fd0bf6fa4d80e09fc9cf6b79c441d568da972100) |
| 11:30:40 | 10 | JUP → SOL (native) | Executed | `0x2a6e8838…` [🐞](https://debug.barn.cow.fi/order/0x2a6e88388776256821bd5d786577f5ae2047c6e7b8ad8c0d3cf1761c91530ccd) |
| 11:30:43 | 12 | JUP → SOL (native) | Executed | `0x579af072…` [🐞](https://debug.barn.cow.fi/order/0x579af072490285ed16d931964c85097673caf59a8ffe76174e26ae6bc12cab66) |
| 11:30:46 | 13 | JUP → SOL (native) | Executed | `0x02bc1f1c…` [🐞](https://debug.barn.cow.fi/order/0x02bc1f1cf638bc12885d1cda98f541bfe571a555631e2d670fbf916743efc593) |
| 11:30:52 | 14 | JUP → SOL (native) | Executed | `0x2fddd705…` [🐞](https://debug.barn.cow.fi/order/0x2fddd7053a9f3b5534a0524ceb9b155cef79be312a5bc7172501ebc32874d3c0) |
| 11:30:57 | 15 | JUP → SOL (native) | Executed | `0x799600f0…` [🐞](https://debug.barn.cow.fi/order/0x799600f0023981d5c4ebe9d82ba5a162128850a812248812932b3ca23a7dbdbf) |
| 11:31:02 | 16 | JUP → SOL (native) | Executed | `0x4083d837…` [🐞](https://debug.barn.cow.fi/order/0x4083d837db350ec8a64d62e2ae82a043dc2688a2d745ad99f6791121fe551a1a) |
| 11:31:13 | 18 | JUP → SOL (native) | Executed | `0x66c2df84…` [🐞](https://debug.barn.cow.fi/order/0x66c2df84ce3d4350d0b7f5adbf2c8fdb751965e6507ffa894a3e8454dc40e3d7) |
| 11:31:14 | 17 | JUP → SOL (native) | Executed | `0xc9ce166a…` [🐞](https://debug.barn.cow.fi/order/0xc9ce166a1220c0e2b654c6d2a54c60b0e64a9be4e6661a22df89b0f054c26606) |
| 11:31:19 | 19 | JUP → SOL (native) | Executed | `0x9c23c905…` [🐞](https://debug.barn.cow.fi/order/0x9c23c9057a07fd28bffa7ceee2bfb4cf58d60278ff39684e9853ac623aa611b2) |
| 11:31:23 | 20 | JUP → SOL (native) | Executed | `0x7bba188a…` [🐞](https://debug.barn.cow.fi/order/0x7bba188aa3dbf8ed8756bb200b5985a5a573406dca96510d8b2062d2eab153e1) |
| 11:31:29 | 21 | JUP → SOL (native) | Executed | `0x0133fd86…` [🐞](https://debug.barn.cow.fi/order/0x0133fd86b45176cd9462b40b7c2bfaf12fddf617c894d84720e39f520105e4f8) |
| 11:31:37 | 23 | JUP → SOL (native) | Executed | `0x7f661339…` [🐞](https://debug.barn.cow.fi/order/0x7f6613395d7211614278cc9637a400e99f75546dc4a885c68ec4bec66ce1f622) |
| 11:31:42 | 24 | JUP → SOL (native) | Executed | `0x08c1dac5…` [🐞](https://debug.barn.cow.fi/order/0x08c1dac5ff8f7629a00ab69dd7f7e1f6c734f545f84003837df9b67cb668e957) |
| 11:31:47 | 26 | JUP → SOL (native) | Executed | `0x038a8c2d…` [🐞](https://debug.barn.cow.fi/order/0x038a8c2dd1f9e69d17c72b1d472aa25005adebaaf6fed8e15804e854a13e400d) |
| 11:31:49 | 28 | JUP → SOL (native) | Executed | `0x7e099bc4…` [🐞](https://debug.barn.cow.fi/order/0x7e099bc471b660463d1c28890d4cac6ee7e60124f83128931fbda40d83865cc4) |
| 11:40:50 | 30 | USDC → SOL (native) | Executed | `0x5cd2744f…` [🐞](https://debug.barn.cow.fi/order/0x5cd2744f3d79537a9a0a1e500e19c043e93378427ff76a40f195cb56400d0c80) |
| 11:40:51 | 31 | USDC → SOL (native) | Executed | `0xdb215363…` [🐞](https://debug.barn.cow.fi/order/0xdb215363ffd42ed103c2d04745a08e6d8a38fdb2cab2d04c1b643a97b6eb5fe1) |
| 11:40:52 | 32 | USDC → SOL (native) | Executed | `0x9d68e308…` [🐞](https://debug.barn.cow.fi/order/0x9d68e30822cc3fa8d9c2ef7be5548384ee13f7faacd00ff9304208a713b32c3e) |
| 11:40:53 | 33 | USDC → SOL (native) | Executed | `0xad2b074e…` [🐞](https://debug.barn.cow.fi/order/0xad2b074ed5e939defdbad9095e47b0ba8b579a1b91cb5344d3d8413b440653c0) |
| 11:40:54 | 34 | USDC → SOL (native) | Executed | `0xa89686ae…` [🐞](https://debug.barn.cow.fi/order/0xa89686ae6500cbda9e7bb4695c6a49624038d25c42995f3cd02a07bead8c8d4a) |
| 11:40:55 | 35 | USDC → SOL (native) | Executed | `0xf1407ec4…` [🐞](https://debug.barn.cow.fi/order/0xf1407ec4642569df05cf1ee582940ed5e7347d56e2eaf08e6926475f55729948) |
| 11:40:56 | 36 | USDC → SOL (native) | Executed | `0x516505a1…` [🐞](https://debug.barn.cow.fi/order/0x516505a121c34299135393f5dd502e712a417585490325716225fa7b8fe1a752) |
| 11:40:57 | 37 | USDC → SOL (native) | Executed | `0xa6f73d45…` [🐞](https://debug.barn.cow.fi/order/0xa6f73d452136d4626d64c5555310e9e594ba28c6d9b72d98a2fb2930fce4a105) |
| 11:41:01 | 38 | USDC → SOL (native) | Executed | `0x4cd4e2fc…` [🐞](https://debug.barn.cow.fi/order/0x4cd4e2fca83fa374cc7b1a6c7a060eefa80f2c3222d41b87f1af23de2040452a) |
| 11:41:01 | 29 | USDC → SOL (native) | Executed | `0xfe1320b9…` [🐞](https://debug.barn.cow.fi/order/0xfe1320b986ad2b6439287af72740671a24b0ff598e864f04835a1c8e35ce394d) |
| 11:41:16 | 39 | USDC → SOL (native) | Executed | `0x3cb07048…` [🐞](https://debug.barn.cow.fi/order/0x3cb07048271d613213ba8ad4a383a2ccc7148af4747b174b00fc3778cb02d5c4) |
| 11:41:19 | 40 | USDC → SOL (native) | Executed | `0xa3b4759b…` [🐞](https://debug.barn.cow.fi/order/0xa3b4759b8e7df59a50ff6784d5f1e4a7ceb9533daa4e488212ed22abe92e7ad0) |
| 11:41:21 | 42 | USDC → SOL (native) | Executed | `0x6d53900f…` [🐞](https://debug.barn.cow.fi/order/0x6d53900ffe2e90fe398a1f03fa45b447e4ab8924d6ca24ac8548fdca9fed5818) |
| 11:41:22 | 41 | USDC → SOL (native) | Executed | `0x2aa09bf9…` [🐞](https://debug.barn.cow.fi/order/0x2aa09bf92328bdb386c5c71327db54fdda11228f4ddfd41e81ca4f3ee6aa343c) |
| 11:41:25 | 43 | USDC → SOL (native) | Executed | `0xb1ebed76…` [🐞](https://debug.barn.cow.fi/order/0xb1ebed760ad9a5a5fcde33e0a979de2ffd392a166d4af25efe2f1ed06afaf517) |
| 11:41:28 | 44 | USDC → SOL (native) | Executed | `0x25b75658…` [🐞](https://debug.barn.cow.fi/order/0x25b75658017c7ed1f07a1a92777a7d3b118734b437e5b8777d4c2359fc7ee0cd) |
| 11:41:30 | 45 | USDC → SOL (native) | Executed | `0xc40e45f5…` [🐞](https://debug.barn.cow.fi/order/0xc40e45f5f2b354305b01418dfb884370a330dc6d5d9fc75b0a817c663f14cd1b) |
| 11:41:31 | 46 | USDC → SOL (native) | Executed | `0xd6a2aaa8…` [🐞](https://debug.barn.cow.fi/order/0xd6a2aaa83060ae2d02b88962c2679ee2fdbc2b1af51954b6f760fbdf6ce8e605) |
| 11:41:36 | 47 | USDC → SOL (native) | Executed | `0xa29d0fbb…` [🐞](https://debug.barn.cow.fi/order/0xa29d0fbb113159f622e26a9556a797f822d37eff7da3e8fb050729c1f12ee8ba) |
| 11:41:38 | 48 | USDC → SOL (native) | Executed | `0x554548fa…` [🐞](https://debug.barn.cow.fi/order/0x554548fa478c67b159dbb2c46f3d62dd9a551077b11dea162dacf9e987ae281d) |
| 11:41:58 | 50 | USDC → SOL (native) | Executed | `0x8c4953f7…` [🐞](https://debug.barn.cow.fi/order/0x8c4953f7e600592208de99f1f45d175e4ab6ebd62bd88e0c9f7db546640e3f20) |
| 11:41:58 | 51 | USDC → SOL (native) | Executed | `0xcef2e8be…` [🐞](https://debug.barn.cow.fi/order/0xcef2e8beeed102c8cc3d1155bb89f567f95db71390009c925a89ebd0c540970e) |
| 11:42:18 | 49 | USDC → SOL (native) | Executed | `0xd39f8807…` [🐞](https://debug.barn.cow.fi/order/0xd39f880711c83849bf9924c73455fd72234072e3f1d5718d9ce0a43a88c4be22) |
| 11:42:22 | 55 | USDC → SOL (native) | Executed | `0x5ccbf27a…` [🐞](https://debug.barn.cow.fi/order/0x5ccbf27a0d0af87dc23bc3db230b43a3c7652a4e061e57753f683cbce44932f1) |
| 11:42:30 | 52 | USDC → SOL (native) | Executed | `0x07e810fe…` [🐞](https://debug.barn.cow.fi/order/0x07e810febfb2fbdf53450fdb0d08274137ad7ed7db32d93ecfaf958cafc98fa7) |
| 11:42:33 | 56 | USDC → SOL (native) | Executed | `0xdadc3ec2…` [🐞](https://debug.barn.cow.fi/order/0xdadc3ec29cb3dbf74d04219ae00a809cf8ccd3be8b59f64a57163702384ffd18) |
| 11:42:39 | 58 | USDC → SOL (native) | Executed | `0x3102eb98…` [🐞](https://debug.barn.cow.fi/order/0x3102eb98efd869e8d31f8811a408866e45d80a1d15d45724b3272f78f3d28d08) |
| 11:42:44 | 54 | USDC → SOL (native) | Executed | `0xcf02fb0d…` [🐞](https://debug.barn.cow.fi/order/0xcf02fb0d60d84d6f627c5c1ecc3c8b87e1ca13589fbcc2f844472439533fbdac) |
| 11:42:44 | 59 | USDC → SOL (native) | Executed | `0xaea89c88…` [🐞](https://debug.barn.cow.fi/order/0xaea89c88a8cae0895cec9b705888055dc81ea515313c114597c152b05ec7ff2c) |
| 11:42:51 | 60 | USDC → SOL (native) | Executed | `0xa82adad2…` [🐞](https://debug.barn.cow.fi/order/0xa82adad2a57dd9a5a6465472e8eb700bfc99197e5872ec53234dbed68da2cdfd) |
| 11:46:25 | 61 | USDC → SOL (native) | Executed | `0xbad61c13…` [🐞](https://debug.barn.cow.fi/order/0xbad61c1300d2a6e449ecced9cd7a3ae196bd67bd48798af61b321a231096c312) |
| 11:46:26 | 62 | USDC → SOL (native) | Executed | `0x7f9a2c43…` [🐞](https://debug.barn.cow.fi/order/0x7f9a2c4346802dfe29470f373f26b228c59c14176c7d7f569f6b587e0c8aac4c) |
| 11:46:27 | 63 | USDC → SOL (native) | Executed | `0x5933313a…` [🐞](https://debug.barn.cow.fi/order/0x5933313aff870049d2282306939f8322578f6e91bdf8683ea6b02ae7ff1faac1) |
| 11:46:29 | 65 | USDT → SOL (native) | Executed | `0x7f0c7eef…` [🐞](https://debug.barn.cow.fi/order/0x7f0c7eef7cb5d4aae6320792e6ae7d26599686021c6e2afa4b1c9fce3d658727) |
| 11:46:30 | 65 | USDC → SOL (native) | Executed | `0x7a304d0e…` [🐞](https://debug.barn.cow.fi/order/0x7a304d0edfc15876be1ef2f840d34294d50dd1170833943af7a7eadcaab34d40) |
| 11:46:36 | 66 | USDC → SOL (native) | Executed | `0x9d2a14d4…` [🐞](https://debug.barn.cow.fi/order/0x9d2a14d4dd53c64218a77f7baa39c0a27ecae5a90927d60753e47942b391695c) |
| 11:46:36 | 67 | USDC → SOL (native) | Executed | `0x4606606c…` [🐞](https://debug.barn.cow.fi/order/0x4606606ce77368bfcc7ddad8af890ee9fe9df6b8d22633e8f6acaa5ed6c84fac) |
| 11:46:36 | 68 | USDT → SOL (native) | Executed | `0x4686fd54…` [🐞](https://debug.barn.cow.fi/order/0x4686fd54fa1ef7fbb2fa991875b4627ca04ca79faee6ff8e10c475445b6f2f20) |
| 11:46:40 | 69 | JUP → SOL (native) | Executed | `0xb10ed6aa…` [🐞](https://debug.barn.cow.fi/order/0xb10ed6aa44c0dbd28126a165f42370ba3a674ec18fa0db55950f1a5f76cade83) |
| 11:49:34 | 71 | PAID → SOL (native) | Executed | `0xba67db83…` [🐞](https://debug.barn.cow.fi/order/0xba67db8384f9b0ced6046ade1fc73ecdea500c7df5df5a9693af1ff52c77bd55) |
| 11:49:35 | 72 | USDG → SOL (native) | Executed | `0x7db48953…` [🐞](https://debug.barn.cow.fi/order/0x7db4895316f09887c3781029b9163eeae9291633d342f0b9f28fd16e95ff7f5b) |
| 11:49:36 | 73 | PUMP → SOL (native) | Executed | `0xfe8beef6…` [🐞](https://debug.barn.cow.fi/order/0xfe8beef69b511830fd3d28239a5d585404309e3b5a324a805efed07a11d5f5bf) |
| 11:49:37 | 74 | PYUSD → SOL (native) | Executed | `0x20ab8bf2…` [🐞](https://debug.barn.cow.fi/order/0x20ab8bf2903417f9a70914b76c3828641df124546b01479f6cf11116529016f4) |
| 11:49:38 | 75 | CASH → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe5ea7536…` [🐞](https://debug.barn.cow.fi/order/0xe5ea7536a017b38c909f02dd0f4a9e60736681db8da2322ad53f13e3aabc2b5a) |
| 11:49:39 | 76 | CRCLx → SOL (native) | Executed | `0x048fb865…` [🐞](https://debug.barn.cow.fi/order/0x048fb865ce5c3f7eed0dad3166ac4eebb0d3ba8b209008127cd454dc648c92fb) |
| 11:49:40 | 77 | SPYx → SOL (native) | Executed | `0x22791f4b…` [🐞](https://debug.barn.cow.fi/order/0x22791f4b1403e7b2bc6ef262b188230b27bcd68bbfd2e264856e8e153f0cad5f) |
| 11:49:41 | 78 | USDv → SOL (native) | Executed | `0xecf5d81d…` [🐞](https://debug.barn.cow.fi/order/0xecf5d81dbdc4e8f2a8d5d314440e1f657326bf2928a6b52c766eae5549d49f35) |
| 11:49:44 | 79 | SKHY → SOL (native) | Executed | `0x918bbcde…` [🐞](https://debug.barn.cow.fi/order/0x918bbcdeb5744b1e955813a3d3ae6019b5bc9d217b75b41a7bccb018f296643b) |
| 11:49:45 | 70 | ANSEM → SOL (native) | Executed | `0xf6fa9e1c…` [🐞](https://debug.barn.cow.fi/order/0xf6fa9e1c3ef4f8561bebf7dbee83dd043a9ca5c3079afef667e5b2bb91abd05b) |
| 11:50:04 | 80 | NVDAx → SOL (native) | Executed | `0x821a491a…` [🐞](https://debug.barn.cow.fi/order/0x821a491ad044c81ade7cfba040b5857ecc0ad22a183f2971abd2db014f6aa2f7) |
| 11:50:04 | 81 | MU → SOL (native) | Executed | `0xa548b5be…` [🐞](https://debug.barn.cow.fi/order/0xa548b5be76778091df9eb1bf7b4d9f89b4ebb3be971f68d75f5615f846190ff4) |
| 11:50:07 | 84 | TSLAx → SOL (native) | Executed | `0x23f5e301…` [🐞](https://debug.barn.cow.fi/order/0x23f5e3010b9eb8bad4143c2c9bd6d241d97a1702d50d32cf4155cf0ca50cdfde) |
| 11:50:10 | 86 | $WIF → SOL (native) | Executed | `0x0f273fff…` [🐞](https://debug.barn.cow.fi/order/0x0f273fff171f7f17588701f24682ffe360e57c255d422c25cc71e0abc6db6ca6) |
| 11:50:13 | 85 | Bonk → SOL (native) | Executed | `0x48dfc652…` [🐞](https://debug.barn.cow.fi/order/0x48dfc6523fd48e954e23601b4c8e6fd34c6370e2a1ab2d874581398987c76db9) |
| 11:50:14 | 87 | POPCAT → SOL (native) | Executed | `0x56d4d799…` [🐞](https://debug.barn.cow.fi/order/0x56d4d79941453750d887318060693b4bc2b2700619220a3c7e37119dd54dfe8d) |
| 11:50:29 | 89 | mSOL → SOL (native) | Executed | `0xf55eff77…` [🐞](https://debug.barn.cow.fi/order/0xf55eff777ad1bcb4198da11cf038d28e515a51248764088aeeedb70fa678ca76) |
| 11:50:39 | 93 | EURC → SOL (native) | Executed | `0xe39eef56…` [🐞](https://debug.barn.cow.fi/order/0xe39eef5689ffb7a3e90548c3f7904f9980af7335705593394c298873919aa586) |
| 11:50:41 | 90 | JupSOL → SOL (native) | Executed | `0x066f5c02…` [🐞](https://debug.barn.cow.fi/order/0x066f5c027b9fb346a6fe8710d6545a6d3e89d19efd62548ac9c3fd8fc1ba4e52) |
| 11:50:47 | 92 | USDe → SOL (native) | Executed | `0xc19dfef4…` [🐞](https://debug.barn.cow.fi/order/0xc19dfef44da81b5f92bfb695359ff8eff03592567bee0fbb38b0b16ab730018b) |
| 11:50:50 | 96 | INF → SOL (native) | Executed | `0x20770415…` [🐞](https://debug.barn.cow.fi/order/0x207704150b7acbcb3703a8179bc05182f7172e3d096110210aaf363829c1e313) |
| 11:51:59 | 108 | USDC → SOL (native) | Executed | `0x9bc30318…` [🐞](https://debug.barn.cow.fi/order/0x9bc30318b00ffbbc2d3a3a70182cb86eb497d56682a4ebc618dd88916532487f) |
| 11:52:00 | 109 | USDC → SOL (native) | Executed | `0x3d3cecbb…` [🐞](https://debug.barn.cow.fi/order/0x3d3cecbbc03590246b400d85b7263450276bab9ae522e53ad413dfc294cd9e49) |
| 11:52:01 | 110 | USDC → SOL (native) | Executed | `0x4d42a1fd…` [🐞](https://debug.barn.cow.fi/order/0x4d42a1fd0206ad590173eb7bfb8935ea460a24b919c973aa44c32f193440c983) |
| 11:52:02 | 111 | USDT → SOL (native) | Executed | `0xf7eced49…` [🐞](https://debug.barn.cow.fi/order/0xf7eced49e553b8accfbb1eb73d5722f218d238a051b251fea9731d883da8925f) |
| 11:52:03 | 113 | USDT → SOL (native) | Executed | `0xafbea15c…` [🐞](https://debug.barn.cow.fi/order/0xafbea15cb242b2f04e38917a36df2395baabcdae3dd1985db643e7d527b1cd0c) |
| 11:52:04 | 114 | USDT → SOL (native) | Executed | `0x382f86cf…` [🐞](https://debug.barn.cow.fi/order/0x382f86cfbb9c31dab43d36d7c188446affca9b8c51498c32ede35751cffc2ab0) |
| 11:52:05 | 107 | USDC → SOL (native) | Executed | `0x8736de3a…` [🐞](https://debug.barn.cow.fi/order/0x8736de3a86b7bb0923ab573eb389798572e3620ddb6c54101a1f10db4a844a04) |
| 11:57:54 | 75 | CASH → SOL (native) | Executed | `0x930e1eac…` [🐞](https://debug.barn.cow.fi/order/0x930e1eac6d5caa2fab6f9cfdefff0bbace2176c9fadd5fb4cbcf60f40be0b871) |
| 11:57:57 | 91 | cbBTC → SOL (native) | Executed | `0x897e925b…` [🐞](https://debug.barn.cow.fi/order/0x897e925ba4d8fccd8843e0c42e6bb19a574af77d4dfe2802889363f5cb2c12d4) |
| 11:57:59 | 95 | JLP → SOL (native) | Executed | `0x377aeb9d…` [🐞](https://debug.barn.cow.fi/order/0x377aeb9dd9c14532d105499c0f7b0f7dcb0b5e69c90abf6ec7dd36208afe4833) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 152 | 89.4% |
| cancelled | 15 | 8.8% |
| expired: never created on-chain (winner found, creation blockhash expired) | 3 | 1.8% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 11s | 22s | 40s | 63s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| GCBB…o5VC | 152 | 100.0% | 86 | 105,307 | 11s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| asao | 472 | 152 | 148 | 97.4% | 2 | 4 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| asao: SimulationFailed | 2 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 370 times
- Orders filtered for `in_flight`: 11 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 157 | 139 | 88.5% |
| market buy | 13 | 13 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 96 | 87 | 90.6% |
| wSOL → JUP | 28 | 23 | 82.1% |
| wSOL → USDT | 7 | 7 | 100.0% |
| JUP → USDC | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 1 | 50.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → SPCX | 2 | 1 | 50.0% |
| wSOL → TSLAx | 2 | 1 | 50.0% |
| wSOL → SPYx | 2 | 1 | 50.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → USDv | 1 | 1 | 100.0% |
| wSOL → SKHY | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 5 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 5 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 5 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 3 | 60.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 4 | 4 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 4 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 4 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 4 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 2 | 50.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 2 | 66.7% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 3 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 2 | 66.7% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 1 | 50.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 2 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 2 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 1 | 50.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 2 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 2 | 1 | 50.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 2 | 1 | 50.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 1 | 50.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 0 | 0.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 0 | 0.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 0 | 0.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 0 | 0.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 1 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 0 | 0.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 0 | 0.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 1 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 0 | 0.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 1 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 1 | 1 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 1 | 1 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 1 | 1 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 1 | 1 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 1 | 1 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 1 | 1 | 100.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 1 | 1 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 1 | 1 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 1 | 1 | 100.0% |
| `52CfB35yd7jyGA6U2198WmCDVV8wi3Xg48S4MgMDvKR1` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |
| `FCMwP3inMPkh6iUYYee8F9kHE8BtMUPCTAJ6ifPfo7Vy` | 1 | 1 | 100.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 15 | 0 |
| Winner too late: creation blockhash expired | 3 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 11:29:18 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf26781de…` [🐞](https://debug.barn.cow.fi/order/0xf26781dec81681ef972388976f5363b0bf74a479cd8bdfcdb98a260454366264) |
| 11:29:19 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x44a58246…` [🐞](https://debug.barn.cow.fi/order/0x44a58246f4fb2c0ced8a5e2d84d262c5882a3f8e2ad0dcfbc35e4d17f0b09b97) |
| 11:29:22 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x9f5ae701…` [🐞](https://debug.barn.cow.fi/order/0x9f5ae7012f6094851f233f90ccba9bee6e0c7272ed20313de521830078a1095e) |
| 11:29:23 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x5530fb51…` [🐞](https://debug.barn.cow.fi/order/0x5530fb51d56b55f841ce407beb260b58ff3744fe9e89281687b3484fd6ba8c72) |
| 11:29:23 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x0806df00…` [🐞](https://debug.barn.cow.fi/order/0x0806df0011b97bc59782fa5ad2b4306e09da70ec95b13ed63b815ad507aa717e) |
| 11:36:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf38a3f0e…` [🐞](https://debug.barn.cow.fi/order/0xf38a3f0eb498e823f5c7b73ecaf9b7b1249da9b290372e4b1f26da6ded05e6d2) |
| 11:38:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc738e199…` [🐞](https://debug.barn.cow.fi/order/0xc738e199a716e791beff8fec1085e2aff8f3aaffe055adf785a1a0eee199ac40) |
| 11:38:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x72bc6d20…` [🐞](https://debug.barn.cow.fi/order/0x72bc6d20f7484541b9eeec0a89ffac172cda261b5023cf4ce3d3f455e72c9675) |
| 11:38:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xcd4e5c53…` [🐞](https://debug.barn.cow.fi/order/0xcd4e5c53d460ce01d083ba005511579fca7a6241e3f8633fb64006798363c2b4) |
| 11:38:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfef3bcc1…` [🐞](https://debug.barn.cow.fi/order/0xfef3bcc116a3aab53d718508514e0b08f6f6ade0548db610e8aeaac85dc68332) |
| 11:39:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0752e951…` [🐞](https://debug.barn.cow.fi/order/0x0752e951340824218b00d0930f0b97dffbd30a92267733c9dfec26841a564577) |
| 11:39:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x414987b4…` [🐞](https://debug.barn.cow.fi/order/0x414987b48a29336ba9f7f9bcc9560bf4ac5a71629a732775f227f6843f1a5d68) |
| 11:39:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x10cf34dc…` [🐞](https://debug.barn.cow.fi/order/0x10cf34dc369509a7ad7ec6a1f874d655dbadb1ea3ed0a2f2b29b26f386d0859d) |
| 11:39:38 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x88d68788…` [🐞](https://debug.barn.cow.fi/order/0x88d687885e9183e4ea31fb6f6ca6f05c8937b7ce9d9298fb2f266001abb88ff3) |
| 11:47:45 | wSOL → CASH | market sell | Winner too late: creation blockhash expired | `0xddaaf660…` [🐞](https://debug.barn.cow.fi/order/0xddaaf66099393c2cccb927398dcee48d694762e1cc7950292308219a9fb4c072) |
| 11:47:46 | wSOL → SPCX | market sell | Winner too late: creation blockhash expired | `0x967fa57a…` [🐞](https://debug.barn.cow.fi/order/0x967fa57af35ff5a20410a2953dd15e151f372c2530b11434f57f5a21bda746a3) |
| 11:47:46 | wSOL → TSLAx | market sell | Winner too late: creation blockhash expired | `0x9a721321…` [🐞](https://debug.barn.cow.fi/order/0x9a7213213ad13bbf226c0f2b3ab084c0c18239e47d885c81b105aab3240dd3dd) |
| 11:47:47 | wSOL → SPYx | market sell | Not filled within fill timeout (cancelled by sim) | `0xb45fb3c5…` [🐞](https://debug.barn.cow.fi/order/0xb45fb3c5a41fd2a98243566c30f741312b2641729c9bb389a2bc51692555a837) |
