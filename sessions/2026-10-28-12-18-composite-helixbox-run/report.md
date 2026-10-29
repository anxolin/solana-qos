# Solana QoS report: 2026-10-28-12-18-composite-helixbox-run

Barn, orders created between `2026-10-28T12:19:29.961Z` and `2026-10-28T12:43:38.266Z`. Data fetched 2026-10-28T12:48:08+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 130 |
| Orders executed | **86** (66.2%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 73 |
| Settlement txs | 86 |

## Scenario results

Target solver: `helixbox`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-28T12:19:29.961Z | 2026-10-28T12:19:43.184Z | 2/6 | 4 | 3 | 3 | 33.3% |
| solver-same-direction-25 | 2026-10-28T12:20:39.221Z | 2026-10-28T12:21:59.331Z | 13/25 | 12 | 25 | 13 | 52.0% |
| solver-burst-sell | 2026-10-28T12:24:25.956Z | 2026-10-28T12:31:49.632Z | 52/84 | 32 | 84 | 52 | 61.9% |
| solver-cow | 2026-10-28T12:34:39.821Z | 2026-10-28T12:37:41.958Z | 8/15 | 7 | 13 | 13 | 53.3% |
| solver-token-coverage | 2026-10-28T12:38:50.673Z | 2026-10-28T12:39:12.166Z | 5/52 | 47 | 5 | 5 | 9.6% |
| solver-transaction-size | 2026-10-28T12:40:35.082Z | 2026-10-28T12:42:06.851Z | 0/10 | 10 | 0 | 0 | 0.0% |

## Scenario

80 of 192 scenario rows completed. 0 retries, 43 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 12:19:30 | 1 | 1 | sell 0.005 SOL → USDC | filled | 6s | 1 |  |
| 12:19:30 | 2 | 2 | sell 0.005 SOL → USDT | filled | 6s | 1 |  |
| 12:19:30 | 3 | 3 | sell 0.5 JUP → USDC | failed | 12s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 12:19:35 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:19:36 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:19:42 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:20:39 | 7 | 4 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 12:20:39 | 8 | 5 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 12:20:39 | 9 | 6 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 12:20:39 | 10 | 7 | sell 0.005 SOL → JUP | failed | 73s | 1 | main timeout |
| 12:20:39 | 11 | 8 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 12:20:39 | 12 | 9 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 12:20:39 | 13 | 10 | sell 0.005 SOL → JUP | filled | 48s | 1 |  |
| 12:20:39 | 14 | 11 | sell 0.005 SOL → JUP | filled | 76s | 1 |  |
| 12:20:39 | 15 | 12 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 12:20:39 | 16 | 13 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 12:20:39 | 17 | 14 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 12:20:39 | 18 | 15 | sell 0.005 SOL → JUP | filled | 61s | 1 |  |
| 12:20:39 | 19 | 16 | sell 0.005 SOL → JUP | filled | 61s | 1 |  |
| 12:20:39 | 20 | 17 | sell 0.005 SOL → JUP | filled | 52s | 1 |  |
| 12:20:39 | 21 | 18 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 12:20:39 | 22 | 19 | sell 0.005 SOL → JUP | filled | 68s | 1 |  |
| 12:20:39 | 23 | 20 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 12:20:39 | 24 | 21 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 12:20:39 | 25 | 22 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 12:20:39 | 26 | 23 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 12:20:39 | 27 | 24 | sell 0.005 SOL → JUP | filled | 28s | 1 |  |
| 12:20:39 | 28 | 25 | sell 0.005 SOL → JUP | filled | 37s | 1 |  |
| 12:20:39 | 29 | 26 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 12:20:39 | 30 | 27 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 12:20:39 | 31 | 28 | sell 0.005 SOL → JUP | filled | 43s | 1 |  |
| 12:24:25 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 12:24:25 | 33 | 30 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 12:24:25 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 12:24:25 | 35 | 32 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 12:25:55 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 42s | 1 |  |
| 12:25:55 | 37 | 30 | sell 0.003 SOL → USDC | filled | 36s | 1 |  |
| 12:25:55 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 30s | 1 |  |
| 12:25:55 | 39 | 32 | sell 0.004 SOL → USDC | filled | 26s | 1 |  |
| 12:25:55 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 12:25:55 | 41 | 34 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 12:25:55 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 12:25:55 | 43 | 36 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 12:27:25 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:27:25 | 45 | 30 | sell 0.003 SOL → USDC | filled | 69s | 1 |  |
| 12:27:25 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 66s | 1 |  |
| 12:27:25 | 47 | 32 | sell 0.004 SOL → USDC | filled | 56s | 1 |  |
| 12:27:25 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:27:25 | 49 | 34 | sell 0.003 SOL → USDC | filled | 83s | 1 |  |
| 12:27:25 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 59s | 1 |  |
| 12:27:25 | 51 | 36 | sell 0.004 SOL → USDC | filled | 52s | 1 |  |
| 12:27:25 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 42s | 1 |  |
| 12:27:25 | 53 | 38 | sell 0.003 SOL → USDC | filled | 29s | 1 |  |
| 12:27:25 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 26s | 1 |  |
| 12:27:25 | 55 | 40 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 12:27:25 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 46s | 1 |  |
| 12:27:25 | 57 | 42 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 12:27:25 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 12:27:25 | 59 | 44 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 12:28:55 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:28:55 | 61 | 30 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:28:55 | 62 | 31 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:28:55 | 63 | 32 | sell 0.004 SOL → USDC | filled | 57s | 1 |  |
| 12:28:55 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:28:55 | 65 | 34 | sell 0.003 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:28:55 | 66 | 35 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:28:55 | 67 | 36 | sell 0.004 SOL → USDC | filled | 66s | 1 |  |
| 12:28:55 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:28:55 | 69 | 38 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:28:55 | 70 | 39 | sell 0.0035 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:28:55 | 71 | 40 | sell 0.004 SOL → USDC | filled | 62s | 1 |  |
| 12:28:55 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:28:55 | 73 | 42 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:28:55 | 74 | 43 | sell 0.0035 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:28:55 | 75 | 44 | sell 0.004 SOL → USDC | filled | 52s | 1 |  |
| 12:28:55 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 46s | 1 |  |
| 12:28:55 | 77 | 46 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 12:28:55 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 12:28:55 | 79 | 48 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 12:28:55 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 40s | 1 |  |
| 12:28:55 | 81 | 50 | sell 0.003 SOL → USDC | filled | 36s | 1 |  |
| 12:28:55 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 12:28:55 | 83 | 52 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 12:30:25 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:30:25 | 85 | 30 | sell 0.003 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:30:25 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:30:25 | 87 | 32 | sell 0.004 SOL → USDC | filled | 56s | 1 |  |
| 12:30:25 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 84s | 1 | main timeout |
| 12:30:25 | 89 | 34 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:30:25 | 90 | 35 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:30:25 | 91 | 36 | sell 0.004 SOL → USDC | filled | 82s | 1 |  |
| 12:30:25 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:30:25 | 93 | 38 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:30:25 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:30:25 | 95 | 40 | sell 0.004 SOL → USDC | filled | 59s | 1 |  |
| 12:30:25 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:30:25 | 97 | 42 | sell 0.003 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:30:25 | 98 | 43 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:30:25 | 99 | 44 | sell 0.004 SOL → USDC | filled | 65s | 1 |  |
| 12:30:25 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:30:25 | 101 | 46 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:30:25 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:30:25 | 103 | 48 | sell 0.004 SOL → USDC | filled | 80s | 1 |  |
| 12:30:25 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:30:25 | 105 | 50 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:30:25 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:30:25 | 107 | 52 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 12:30:25 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 48s | 1 |  |
| 12:30:25 | 109 | 54 | sell 0.003 SOL → USDC | filled | 38s | 1 |  |
| 12:30:25 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 32s | 1 |  |
| 12:30:25 | 111 | 56 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 12:30:25 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 51s | 1 |  |
| 12:30:25 | 113 | 58 | sell 0.003 SOL → USDC | filled | 42s | 1 |  |
| 12:30:25 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 12:30:25 | 115 | 60 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 12:34:39 | 116 | 62 | buy 2.6 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:34:39 | 117 | 64 | buy 1.3 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:34:39 | 118 | 65 | buy 3.1 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:34:39 | 119 | 66 | buy 3.1 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:34:39 | 120 | 67 | buy 1.1 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:34:39 | 121 | 68 | buy 3.2 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:37:09 | 122 | 61 | sell 0.02 SOL → USDC | filled | 27s | 1 |  |
| 12:37:09 | 123 | 62 | buy 0.02 SOL ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:37:09 | 124 | 63 | sell 0.03 SOL → USDC | filled | 8s | 1 |  |
| 12:37:09 | 125 | 64 | sell 1.2 USDC → SOL | filled | 32s | 2 |  |
| 12:37:09 | 126 | 65 | sell 3 USDC → USDT | filled | 28s | 2 |  |
| 12:37:09 | 127 | 66 | sell 3 USDT → USDC | filled | 25s | 2 |  |
| 12:37:09 | 128 | 67 | sell 1 USDT → USDC | filled | 28s | 2 |  |
| 12:37:09 | 129 | 68 | sell 3 USDC → USDT | filled | 24s | 2 |  |
| 12:37:09 | 130 | 69 | sell 0.02 SOL → JUP | filled | 8s | 1 |  |
| 12:38:50 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:50 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:50 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:51 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:52 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:52 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:52 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:52 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:52 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 15s | 1 |  |
| 12:38:52 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:52 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:52 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:52 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 16s | 1 |  |
| 12:38:52 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:53 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 18s | 1 |  |
| 12:38:54 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 18s | 1 |  |
| 12:38:54 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 18s | 1 |  |
| 12:38:54 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:54 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:38:54 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:54 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:54 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:55 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:55 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:56 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:56 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:56 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:56 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:57 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:57 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:57 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:57 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:58 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:38:58 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:35 | 183 | 107 | sell 0.005 SOL → EURC | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:35 | 184 | 111 | sell 0.005 SOL → JLP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:42:05 | 185 | 107 | sell 0.005 SOL → EURC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:42:05 | 186 | 108 | sell 0.005 SOL → EURC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:42:05 | 187 | 109 | sell 0.005 SOL → EURC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:42:05 | 188 | 110 | sell 0.005 SOL → EURC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:42:05 | 189 | 111 | sell 0.00125 SOL → JLP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:42:05 | 190 | 112 | sell 0.00125 SOL → JLP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:42:05 | 191 | 113 | sell 0.00125 SOL → JLP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:42:05 | 192 | 114 | sell 0.00125 SOL → JLP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

68 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 42 | SOL → EURC ×6, SOL → JLP ×6, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx, SOL → Bonk, SOL → $WIF, SOL → JitoSOL, SOL → mSOL, SOL → JupSOL, SOL → USDe, SOL → USDY, SOL → INF, SOL → ETH, SOL → BNB, SOL → XAUt0, SOL → GLDx, SOL → EUROP, SOL → hyloSOL, SOL → PSOL | no route found |
| NoLiquidity | quote | 25 | SOL → USDC ×5, SOL → USDT ×3, JUP → USDC, USDC → SOL, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |

Scenario orders: 130 (124 main, 6 acquire). Cleanup placed 65 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 12:19:45 | 1 | USDC → SOL (native) | Executed | `0x2bfdb4a9…` [🐞](https://debug.barn.cow.fi/order/0x2bfdb4a96a0c19bd25d51a78bea46e1379d7dcecebb25b42de4dc808c9362ddb) |
| 12:19:45 | 2 | USDT → SOL (native) | Executed | `0xb1663cf2…` [🐞](https://debug.barn.cow.fi/order/0xb1663cf2697d0f3ec5f81df308d3c5ee5d7bb2d050d917ff88e9019240225d92) |
| 12:19:47 | 3 | JUP → SOL (native) | Executed | `0x65e98d42…` [🐞](https://debug.barn.cow.fi/order/0x65e98d4263fae63e2385a995b098f7d43cf4c106f9d08a47a63dc842f23e1e22) |
| 12:22:10 | 10 | JUP → SOL (native) | Executed | `0x9e1dee57…` [🐞](https://debug.barn.cow.fi/order/0x9e1dee577ed4d0b400e3465f3b0f353df5192d4bf6e800c9eaf471a7521eca2a) |
| 12:22:13 | 12 | JUP → SOL (native) | Executed | `0x23da1a6a…` [🐞](https://debug.barn.cow.fi/order/0x23da1a6aca36bab27f83a90e3c3cd655f7adab8529f6c5d3da6046647c5a4b29) |
| 12:22:13 | 13 | JUP → SOL (native) | Executed | `0x74234686…` [🐞](https://debug.barn.cow.fi/order/0x74234686f5595f8c1f98895a7da639c366b04758c5879b8b58a55b53d4aa661e) |
| 12:22:18 | 11 | JUP → SOL (native) | Executed | `0x46e350c8…` [🐞](https://debug.barn.cow.fi/order/0x46e350c817d7c9e00bdf207aea7ea6079d000a41db10fde9cbc2b7de52883a02) |
| 12:22:21 | 15 | JUP → SOL (native) | Executed | `0x4fb6412f…` [🐞](https://debug.barn.cow.fi/order/0x4fb6412f6cd38eaed8397ebb52a97674d2858a6bf1fc895d1617326af9043c61) |
| 12:22:27 | 16 | JUP → SOL (native) | Executed | `0x479e7ebd…` [🐞](https://debug.barn.cow.fi/order/0x479e7ebd70134dd99242e3da85f173dcb9f82cb182d119208dde421bea1b0a7f) |
| 12:22:27 | 17 | JUP → SOL (native) | Executed | `0xdc4e39f5…` [🐞](https://debug.barn.cow.fi/order/0xdc4e39f590691321816d24223286b040847c7840173a88cbd32195cdf7fef002) |
| 12:22:28 | 19 | JUP → SOL (native) | Executed | `0x3c701752…` [🐞](https://debug.barn.cow.fi/order/0x3c701752d6d9749a4f06d8f93b15a74f1695b351993548a536060e28917f0835) |
| 12:22:43 | 21 | JUP → SOL (native) | Executed | `0x6d45aa1b…` [🐞](https://debug.barn.cow.fi/order/0x6d45aa1bdaf8f9a1b632b4af27b4438b507fe98fd89e226f7b81d90f4a57d4f1) |
| 12:22:51 | 22 | JUP → SOL (native) | Executed | `0x805f620f…` [🐞](https://debug.barn.cow.fi/order/0x805f620f0f720d2f5f9d46e5a9b94fdb08f4742d6a1d3d1a146a57dd53d7f944) |
| 12:22:58 | 24 | JUP → SOL (native) | Executed | `0xb9d08b9d…` [🐞](https://debug.barn.cow.fi/order/0xb9d08b9dfeb24287998dad50b02e2c1d4eeb806baca5e614516c8a0c898903ed) |
| 12:23:08 | 25 | JUP → SOL (native) | Executed | `0xf772c862…` [🐞](https://debug.barn.cow.fi/order/0xf772c862e46b0fae056e24232ef1ce47f4458baf4df55b170a8838593010dae2) |
| 12:23:27 | 28 | JUP → SOL (native) | Executed | `0x21727c1f…` [🐞](https://debug.barn.cow.fi/order/0x21727c1f75e56e404bd634c2a6f895e9a6baa604848957c429a1c5ef0235938c) |
| 12:31:52 | 30 | USDC → SOL (native) | Executed | `0xdd50a05c…` [🐞](https://debug.barn.cow.fi/order/0xdd50a05c08b773c1729c2d7ee899cc315c2f52e72df1fd4e1c4a1de3c865d3bc) |
| 12:31:53 | 31 | USDC → SOL (native) | Executed | `0x2bff19b0…` [🐞](https://debug.barn.cow.fi/order/0x2bff19b031b20df7aa8bbc2bbf657e8ea498e2c58b6042b6b59c7032188102ac) |
| 12:31:54 | 32 | USDC → SOL (native) | Executed | `0xc3ab9233…` [🐞](https://debug.barn.cow.fi/order/0xc3ab9233ca96608b29ca614de2c5a940d174d496879c120aac70339c807707b3) |
| 12:31:55 | 33 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc32d6e4b…` [🐞](https://debug.barn.cow.fi/order/0xc32d6e4b7b7274031c0457c51dbaa38e51bed93616a223f0ba0f790d61b9f8a5) |
| 12:31:56 | 34 | USDC → SOL (native) | Executed | `0x85cadad8…` [🐞](https://debug.barn.cow.fi/order/0x85cadad83d4b2adfc7a1ad28024856f519ffe621618877fa2f2c596bfac4feab) |
| 12:31:57 | 35 | USDC → SOL (native) | Executed | `0x5027b0bc…` [🐞](https://debug.barn.cow.fi/order/0x5027b0bcdd61e7ce29323e59296c9c59e15203fcfd6699f298f434f673cfa26f) |
| 12:31:58 | 36 | USDC → SOL (native) | Executed | `0x11ed9e8e…` [🐞](https://debug.barn.cow.fi/order/0x11ed9e8eaff8b25cd2dffbb3bafced640e9673e5674290a4aaa3cc185cfba0db) |
| 12:31:59 | 37 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x31551ae7…` [🐞](https://debug.barn.cow.fi/order/0x31551ae72ac679a5c195c8b5ecccdfa834d173e5a2cedde695a9889977918ea0) |
| 12:32:00 | 38 | USDC → SOL (native) | Executed | `0xf751097d…` [🐞](https://debug.barn.cow.fi/order/0xf751097d7ccfa72548d1e72aaf00045df6d1966a94f0251cdd34cb901afddbff) |
| 12:32:03 | 29 | USDC → SOL (native) | Executed | `0x7f2ceca3…` [🐞](https://debug.barn.cow.fi/order/0x7f2ceca31be51f31c75b46b7ae059c297df357c0f8d90d5be731b4d3fce8affc) |
| 12:32:13 | 39 | USDC → SOL (native) | Executed | `0x000ce61c…` [🐞](https://debug.barn.cow.fi/order/0x000ce61c597229e146ff689208cb5da3aba180681d51ab9ef8dd02c6a71a3c7d) |
| 12:32:18 | 40 | USDC → SOL (native) | Executed | `0x6b198a49…` [🐞](https://debug.barn.cow.fi/order/0x6b198a49d758a05783ccf674c8a0e81bb4adae3d57f358490a9d63e200f33449) |
| 12:32:21 | 41 | USDC → SOL (native) | Executed | `0x8ccbd0b2…` [🐞](https://debug.barn.cow.fi/order/0x8ccbd0b2b1bad1265028473807f2d271d0efe8e263397dcffaf7c96aa0d0bc43) |
| 12:32:22 | 42 | USDC → SOL (native) | Executed | `0x341700fb…` [🐞](https://debug.barn.cow.fi/order/0x341700fb5f2444cc3050014c1b152c699f9e337219d6fa82c92e6bb9be8f122b) |
| 12:32:31 | 43 | USDC → SOL (native) | Executed | `0xdd2901eb…` [🐞](https://debug.barn.cow.fi/order/0xdd2901eb9089eecf74b9862a57589e48f53f86e70442179e5a775b08f8983903) |
| 12:32:34 | 44 | USDC → SOL (native) | Executed | `0x687b6776…` [🐞](https://debug.barn.cow.fi/order/0x687b677653a207226a74d0f955c033d91f8d6ab3ab5ffdd9b8319e53331b9821) |
| 12:32:37 | 45 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x97328e3e…` [🐞](https://debug.barn.cow.fi/order/0x97328e3eaec9a54f073ed423f75867c6cc820a0d28b1b108f5a8472ea6c90a1a) |
| 12:32:45 | 46 | USDC → SOL (native) | Executed | `0x126dec9b…` [🐞](https://debug.barn.cow.fi/order/0x126dec9b2c3fc1922ecea8cc5247c76bada4ebea3b5731635d6bc216ddec5bcb) |
| 12:32:51 | 47 | USDC → SOL (native) | Executed | `0x2b783d46…` [🐞](https://debug.barn.cow.fi/order/0x2b783d46042071d42461e9b2a07b5d51e0e879efef79c3bb5502adcd8e69ef90) |
| 12:32:56 | 48 | USDC → SOL (native) | Executed | `0x3d073602…` [🐞](https://debug.barn.cow.fi/order/0x3d0736022fcab4fd86edf3fe9b582a5fe0edbda9e82eb78ac9e8a59e4112c4f7) |
| 12:33:04 | 49 | USDC → SOL (native) | Executed | `0x3bd6dabc…` [🐞](https://debug.barn.cow.fi/order/0x3bd6dabcf7a0b474d504e4e3a8d5bc559614147fd68316f469e5a2cdce1570a7) |
| 12:33:07 | 50 | USDC → SOL (native) | Executed | `0x3e72c833…` [🐞](https://debug.barn.cow.fi/order/0x3e72c833f8d5736fa2155c846687df459e2999cb378bc20d71835aab72becb09) |
| 12:33:20 | 51 | USDC → SOL (native) | Executed | `0x584880f9…` [🐞](https://debug.barn.cow.fi/order/0x584880f951c6c83e8b859f5bef7eb034ec581787e96dfdb520110ce76a492ac8) |
| 12:33:25 | 52 | USDC → SOL (native) | Executed | `0xd4fe48ff…` [🐞](https://debug.barn.cow.fi/order/0xd4fe48ff745ee043e35dac6042a7b794527cf7a354f14691173fee6518bbbb30) |
| 12:33:29 | 55 | USDC → SOL (native) | Executed | `0x4f66e8fc…` [🐞](https://debug.barn.cow.fi/order/0x4f66e8fc1cf3dba269bf7716422439ba1f9e8720269a6b0856ef39ada9519bfc) |
| 12:33:30 | 53 | USDC → SOL (native) | Executed | `0x1b6001f3…` [🐞](https://debug.barn.cow.fi/order/0x1b6001f3a320f173f96a33056c9becaf2730fdc0366e98ffecf2261204b0245a) |
| 12:33:31 | 54 | USDC → SOL (native) | Executed | `0x2ee587e0…` [🐞](https://debug.barn.cow.fi/order/0x2ee587e0e6acea4b215627becfe868f99e43c3a719b87ffc03271cc94cc2b4da) |
| 12:33:37 | 56 | USDC → SOL (native) | Executed | `0xa9ae2492…` [🐞](https://debug.barn.cow.fi/order/0xa9ae249234b94a2844186aaf590e1862257f93c537d211be896db54d6ecd221c) |
| 12:33:41 | 57 | USDC → SOL (native) | Executed | `0x581c6bf0…` [🐞](https://debug.barn.cow.fi/order/0x581c6bf05884e15ae75d37d9655df00f4d7e3c9cf55544f9c3cc61d1de496392) |
| 12:33:49 | 58 | USDC → SOL (native) | Executed | `0x9efc1cdf…` [🐞](https://debug.barn.cow.fi/order/0x9efc1cdf84e11d9b16bf69e7c09433a5b95c497a559cf63b22367fee7abb75f7) |
| 12:34:01 | 59 | USDC → SOL (native) | Executed | `0x7576933f…` [🐞](https://debug.barn.cow.fi/order/0x7576933f616727e142e8642e43218e89bcd2de47b8e3055b34d6bb74f3fd9b11) |
| 12:34:04 | 60 | USDC → SOL (native) | Executed | `0xca5010a4…` [🐞](https://debug.barn.cow.fi/order/0xca5010a42ed69e1be093ba59b75a3bda5c4d10ccb98da2c7384cacda751b94fa) |
| 12:37:45 | 63 | USDC → SOL (native) | Executed | `0xa9e3d02c…` [🐞](https://debug.barn.cow.fi/order/0xa9e3d02cdcdd8c8b590f024989ac0126077d88f502637637cd4120ab3808d94c) |
| 12:37:46 | 64 | USDC → SOL (native) | Executed | `0x17380b3e…` [🐞](https://debug.barn.cow.fi/order/0x17380b3ed7f730a966117019b4c5ae0c2933b3d5bacb531e4928454ad06f5e68) |
| 12:37:48 | 65 | USDT → SOL (native) | Executed | `0x82a93fc7…` [🐞](https://debug.barn.cow.fi/order/0x82a93fc75f1fee1f286cdc6ab398ded4ddfcb201a0ce546f377b26ca1f5e831f) |
| 12:37:48 | 65 | USDC → SOL (native) | Executed | `0x0fdf1069…` [🐞](https://debug.barn.cow.fi/order/0x0fdf10692931f73f073411e0fce74bcd7c2e56a3c0535f9ab9be203da7654b7c) |
| 12:37:49 | 66 | USDC → SOL (native) | Executed | `0x4241ffcc…` [🐞](https://debug.barn.cow.fi/order/0x4241ffccb8df186a9992d98f80ee85e4233a774c2e65e75cd9953012aa7a3ed7) |
| 12:37:49 | 66 | USDT → SOL (native) | Executed | `0xa3e532f8…` [🐞](https://debug.barn.cow.fi/order/0xa3e532f80497a275235e2642030d85283a65caf8bb6d705c9a951488cf7e21a3) |
| 12:37:52 | 67 | USDT → SOL (native) | Executed | `0x63620405…` [🐞](https://debug.barn.cow.fi/order/0x6362040570732b242f980c779847e5bba5f02818fd60ef46a71c10d1ab00217a) |
| 12:37:52 | 67 | USDC → SOL (native) | Executed | `0x8a207ace…` [🐞](https://debug.barn.cow.fi/order/0x8a207ace067b8d492f02fcc45d65cc92918f6acc4ab40bd836e7bb2af404a634) |
| 12:37:53 | 68 | USDT → SOL (native) | Executed | `0xacf666e2…` [🐞](https://debug.barn.cow.fi/order/0xacf666e288de29b3189d8e7b23d39a95a58c27d1186487e462ce8e43a66804f3) |
| 12:37:55 | 68 | USDC → SOL (native) | Executed | `0x6bf5a22c…` [🐞](https://debug.barn.cow.fi/order/0x6bf5a22c18d557ca87066f455f7e5a16ddeaf060c7fd97a5cbc1c83c5de9dbea) |
| 12:37:55 | 69 | JUP → SOL (native) | Executed | `0x6e79bd11…` [🐞](https://debug.barn.cow.fi/order/0x6e79bd111f3a6cdff0adb8755c3cf600eabc0525f158185a0b5030e68731e14d) |
| 12:37:58 | 61 | USDC → SOL (native) | Executed | `0x1edf7e1e…` [🐞](https://debug.barn.cow.fi/order/0x1edf7e1edf1756ca2667c876b035ee5e7868a6bf675405d35876852c7d38857b) |
| 12:39:32 | 87 | POPCAT → SOL (native) | Executed | `0xaf1bea46…` [🐞](https://debug.barn.cow.fi/order/0xaf1bea4646362c03f761568340b85ea0361d2f84a2901fcf8d54daa1072334f9) |
| 12:39:44 | 91 | cbBTC → SOL (native) | Executed | `0x85bef928…` [🐞](https://debug.barn.cow.fi/order/0x85bef92899bda71fdba900f00cd7a07e014d45774733648c96e101b2544d8c70) |
| 12:40:05 | 103 | MEW → SOL (native) | Executed | `0x955cf6d1…` [🐞](https://debug.barn.cow.fi/order/0x955cf6d19bb68d2aa317998be99f809466aa7cfda47bdc98fa7a23100912b2bf) |
| 12:40:06 | 102 | Fartcoin → SOL (native) | Executed | `0x7412905f…` [🐞](https://debug.barn.cow.fi/order/0x7412905f5c1c9d3b9e401d809455e155e5db10c9985ea5304a135b9dd6629858) |
| 12:40:06 | 104 | BOME → SOL (native) | Executed | `0x95c08aa6…` [🐞](https://debug.barn.cow.fi/order/0x95c08aa6b8c5691c6979a9f5691aaff592ac15172df7ec09860d17ba9b2a3c19) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 86 | 66.2% |
| cancelled | 44 | 33.8% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 17s | 40s | 54s | 66s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 9CHj…Rb7v | 86 | 100.0% | 86 | 64,368 | 17s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| helixbox | 1211 | 151 | 148 | 98.0% | 1 | 0 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| helixbox: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 278 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 130 | 86 | 66.2% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 90 | 58 | 64.4% |
| wSOL → JUP | 27 | 15 | 55.6% |
| wSOL → USDT | 3 | 3 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 3 | 60.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 3 | 60.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 5 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 2 | 40.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 2 | 50.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 1 | 25.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 2 | 50.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 4 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 1 | 33.3% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 1 | 33.3% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 1 | 33.3% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 1 | 33.3% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 1 | 33.3% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 1 | 33.3% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 1 | 50.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 1 | 50.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 1 | 50.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 1 | 50.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 1 | 50.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 1 | 50.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 2 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 0 | 0.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 0 | 0.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 0 | 0.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 0 | 0.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 0 | 0.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 0 | 0.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 0 | 0.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 0 | 0.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 0 | 0.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 0 | 0.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 0 | 0.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 1 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 1 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 44 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 12:20:44 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xdd6f9d4c…` [🐞](https://debug.barn.cow.fi/order/0xdd6f9d4c0e8bcaea4af5ecdaf2ab89c39a8d4f6e4bd8e4c945d915e1b13fc514) |
| 12:20:44 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x61c478d7…` [🐞](https://debug.barn.cow.fi/order/0x61c478d786a0e1da574a5e0edadc0171b53850c274071e9d44cb15db721d2c27) |
| 12:20:44 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x923b3b6e…` [🐞](https://debug.barn.cow.fi/order/0x923b3b6e8c8316d264dd2eb4cca4b4f2c67c2f22c91c99c91611c7da35a88d4e) |
| 12:20:44 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x5f6ec017…` [🐞](https://debug.barn.cow.fi/order/0x5f6ec01789a15b7a36ccb3b720d4af919c5e140c9793947b598e00658183024a) |
| 12:20:44 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xa6e809e0…` [🐞](https://debug.barn.cow.fi/order/0xa6e809e0861da88dbc50df64d74ebcbd8c7d34fd5db5b348b66d3660de7c5990) |
| 12:20:44 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf2bf5a03…` [🐞](https://debug.barn.cow.fi/order/0xf2bf5a03b95876717501fe2ab5fef8d15d190cc361a307feb198fc72acc705a9) |
| 12:20:45 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xcc6a31db…` [🐞](https://debug.barn.cow.fi/order/0xcc6a31dbbeacaf776b19917e9ab058e7e6551163787930c714245dafb36cdcef) |
| 12:20:46 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb090789f…` [🐞](https://debug.barn.cow.fi/order/0xb090789fc40616b7c429b8414250b799d4e0eda0416b8dd8929e9c7e2d085f2c) |
| 12:20:47 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb58a84f4…` [🐞](https://debug.barn.cow.fi/order/0xb58a84f439a99da6d9dcbf4b19531d067bdba70771ea42726b29d72f043a4d73) |
| 12:20:49 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf9db7d9a…` [🐞](https://debug.barn.cow.fi/order/0xf9db7d9a5c4ef3b0155225d6bffc118d84e260b08dd6badc78596b4e94c7782a) |
| 12:20:49 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xc5ebab60…` [🐞](https://debug.barn.cow.fi/order/0xc5ebab60a291cb232c84a3489be44f381366882f19b441c274986ed314340b99) |
| 12:20:49 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf1fa33b3…` [🐞](https://debug.barn.cow.fi/order/0xf1fa33b30296bb711f0911e132e97e9f2caf0f14a8519cefcc44c85b0e0eaaf2) |
| 12:27:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x166005bd…` [🐞](https://debug.barn.cow.fi/order/0x166005bd6a7c7988176f6b019f8dae0816c8494d6442796681b71950377730c1) |
| 12:27:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa8180d04…` [🐞](https://debug.barn.cow.fi/order/0xa8180d049a366ffbff746fe10f18ac0922bbc48108d530f799f7d4f697d14e61) |
| 12:28:59 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3f25e219…` [🐞](https://debug.barn.cow.fi/order/0x3f25e219b3eda63e1e1ffed8387b7fec0ce42698f99bbd559fbed3c1b732ba0c) |
| 12:29:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xab6ce2b0…` [🐞](https://debug.barn.cow.fi/order/0xab6ce2b0645e1669e5386cf810324f340787513a7d32a9b2baf9a07c2e9b716f) |
| 12:29:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8f2cbadf…` [🐞](https://debug.barn.cow.fi/order/0x8f2cbadf3d9ac918a5a27d299fc9a28ba111344b2bb07fbc4460844c8e0ddbc8) |
| 12:29:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd27f9ec7…` [🐞](https://debug.barn.cow.fi/order/0xd27f9ec7f5db0321cdb9075fc6a9797bb669518bb4513307eabf3cef734085db) |
| 12:29:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd6b6b186…` [🐞](https://debug.barn.cow.fi/order/0xd6b6b18633698eed8144c256915cdfbdeb53b866e6cd30e57d966bd4df73d78d) |
| 12:29:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x050830fc…` [🐞](https://debug.barn.cow.fi/order/0x050830fce2146f396dba4206c4f8d20a7eb6713ba7668098c420b5702bb7198f) |
| 12:29:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3e30dece…` [🐞](https://debug.barn.cow.fi/order/0x3e30dece297a56117f311effab5bec360eb29a2b4662558407d607c9efb946b4) |
| 12:29:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfb67fd85…` [🐞](https://debug.barn.cow.fi/order/0xfb67fd85eff2c4fcfe2379d5f3619aecdbce43d41b362ab37242621be7db4d67) |
| 12:29:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa6786db0…` [🐞](https://debug.barn.cow.fi/order/0xa6786db00121071bac39d5996b74a9cf2d3a22799d3feb2d7f34244c0926b07b) |
| 12:29:04 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5762a07d…` [🐞](https://debug.barn.cow.fi/order/0x5762a07da15532645b5356fb6bea7700a17408784045fae6d7fc476dc5a2391d) |
| 12:29:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd6b51846…` [🐞](https://debug.barn.cow.fi/order/0xd6b51846f8d646eba379e92bdebb866df20bd54ea98a8b82bfd8d81eb5d36ebe) |
| 12:29:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf2bac8eb…` [🐞](https://debug.barn.cow.fi/order/0xf2bac8eb8825e6d9a4de51941009143ac1840ffcd2af169ccd92cd659d0a1aec) |
| 12:30:31 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xad155826…` [🐞](https://debug.barn.cow.fi/order/0xad1558268fbbadb1b93f6cc30ed8df7c120565e308749478ce5d41c0855392b1) |
| 12:30:31 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x94e2631a…` [🐞](https://debug.barn.cow.fi/order/0x94e2631a86a9c9d8820d18de0b3460cee289a4c6c833b993852a6effc667c861) |
| 12:30:31 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x20199ee2…` [🐞](https://debug.barn.cow.fi/order/0x20199ee201d9b97a1af6721c548bf1ba3058e89c461f4d63cbcfc7b59705e34e) |
| 12:30:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1f544c8c…` [🐞](https://debug.barn.cow.fi/order/0x1f544c8c94ad67408fc0ec18192c8c21542416bafb00b90d65900df021ebd826) |
| 12:30:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa98781c5…` [🐞](https://debug.barn.cow.fi/order/0xa98781c5fb333c220ad26e82e59c5b1af10d7beb988b228e4867e1130c5a139c) |
| 12:30:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf2e23b9d…` [🐞](https://debug.barn.cow.fi/order/0xf2e23b9d4fa79ee4929e272dd2a07e407c9b5b6e45a1af30392c8566caaf7106) |
| 12:30:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc625dd1b…` [🐞](https://debug.barn.cow.fi/order/0xc625dd1bf0a4b58022de770b26a3ddca84d5c2303d45360191e519e69c6d697e) |
| 12:30:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x12d11ee7…` [🐞](https://debug.barn.cow.fi/order/0x12d11ee7fd4413f18de498a99ca7633e9da170078516bf946985b05518942ceb) |
| 12:30:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd402b8c8…` [🐞](https://debug.barn.cow.fi/order/0xd402b8c8fa15cd767a353442f0a66d3330885f8454932fd5061b996599852a33) |
| 12:30:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x97374b4e…` [🐞](https://debug.barn.cow.fi/order/0x97374b4ee570e52cce3c380bef7f1a054e092285930531c66adc39d56ccf61ab) |
| 12:30:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x72896881…` [🐞](https://debug.barn.cow.fi/order/0x72896881d9ab4b9be66c74705968b010353b8815fba377f62ac2ca9478dbab20) |
| 12:30:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6eb2933a…` [🐞](https://debug.barn.cow.fi/order/0x6eb2933aa86ff0e14af62b9efc133fe032070852f3ce547c1e6bf9f82f5ea4fa) |
| 12:30:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x411c91a5…` [🐞](https://debug.barn.cow.fi/order/0x411c91a5ba42a2908b690b7c85f41326070ece2d350e7de44c0c3c1fa1c71b44) |
| 12:30:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x49fe8593…` [🐞](https://debug.barn.cow.fi/order/0x49fe859310c57c42f86764dbf0c764aa97d610ea61d16cb2410ead2cde6012fe) |
| 12:30:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1224d776…` [🐞](https://debug.barn.cow.fi/order/0x1224d77697973e48ca0f08355b86de577e35cdf9fbec9c6d0dd805e9256d9905) |
| 12:30:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd392a02c…` [🐞](https://debug.barn.cow.fi/order/0xd392a02c5502dc285e17d5acd9925754638abc650067c23f06932ab5d42c1d35) |
| 12:30:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7fd92987…` [🐞](https://debug.barn.cow.fi/order/0x7fd92987b184a41081776e357957b92c56586865cba60fd40ea0c461a9cfa2e1) |
| 12:30:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb8e9f4f8…` [🐞](https://debug.barn.cow.fi/order/0xb8e9f4f80d59797c2742576799f701aa04b22dc4f1baff4cbef81553ef99a432) |
