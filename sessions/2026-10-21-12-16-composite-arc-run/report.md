# Solana QoS report: 2026-10-21-12-16-composite-arc-run

Barn, orders created between `2026-10-21T12:17:58.820Z` and `2026-10-21T12:54:50.334Z`. Data fetched 2026-10-21T12:56:35+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 146 |
| Orders executed | **46** (31.5%) |
| Sponsored orders never created on-chain | 3 (2.1%) |
| Traders | 92 |
| Settlement txs | 46 |

## Scenario results

Target solver: `arc`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-21T12:17:58.820Z | 2026-10-21T12:19:15.257Z | 2/6 | 4 | 3 | 2 | 33.3% |
| solver-same-direction-25 | 2026-10-21T12:20:30.881Z | 2026-10-21T12:21:53.994Z | 1/25 | 24 | 25 | 1 | 4.0% |
| solver-burst-sell | 2026-10-21T12:24:09.572Z | 2026-10-21T12:31:39.129Z | 30/84 | 54 | 84 | 30 | 35.7% |
| solver-cow | 2026-10-21T12:35:14.123Z | 2026-10-21T12:39:01.817Z | 3/15 | 12 | 10 | 5 | 20.0% |
| solver-token-coverage | 2026-10-21T12:40:50.616Z | 2026-10-21T12:42:14.726Z | 7/52 | 45 | 20 | 7 | 13.5% |
| solver-fresh-accounts | 2026-10-21T12:44:13.987Z | 2026-10-21T12:45:26.629Z | 1/8 | 7 | 4 | 1 | 12.5% |

## Scenario

44 of 190 scenario rows completed. 0 retries, 17 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 12:17:58 | 1 | 1 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 12:17:58 | 2 | 2 | sell 0.005 SOL → USDT | filled | 12s | 1 |  |
| 12:17:58 | 3 | 3 | sell 0.5 JUP → USDC | failed | 76s | 1 | acquire JUP timeout |
| 12:18:07 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:18:10 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:19:15 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:20:30 | 7 | 4 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 12:20:30 | 8 | 5 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 12:20:30 | 9 | 6 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 12:20:30 | 10 | 7 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 12:20:30 | 11 | 8 | sell 0.005 SOL → JUP | failed | 74s | 1 | main timeout |
| 12:20:30 | 12 | 9 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 12:20:30 | 13 | 10 | sell 0.005 SOL → JUP | failed | 77s | 1 | main timeout |
| 12:20:30 | 14 | 11 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 12:20:30 | 15 | 12 | sell 0.005 SOL → JUP | failed | 74s | 1 | main timeout |
| 12:20:30 | 16 | 13 | sell 0.005 SOL → JUP | filled | 46s | 1 |  |
| 12:20:30 | 17 | 14 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 12:20:30 | 18 | 15 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 12:20:30 | 19 | 16 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 12:20:30 | 20 | 17 | sell 0.005 SOL → JUP | failed | 77s | 1 | main timeout |
| 12:20:30 | 21 | 18 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 12:20:30 | 22 | 19 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 12:20:30 | 23 | 20 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 12:20:30 | 24 | 21 | sell 0.005 SOL → JUP | failed | 83s | 1 | main timeout |
| 12:20:30 | 25 | 22 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 12:20:30 | 26 | 23 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:20:30 | 27 | 24 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:20:30 | 28 | 25 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:20:30 | 29 | 26 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:20:30 | 30 | 27 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:20:30 | 31 | 28 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 12:24:09 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 12:24:09 | 33 | 30 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 12:24:09 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 12:24:09 | 35 | 32 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 12:25:39 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 12:25:39 | 37 | 30 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 12:25:39 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 12:25:39 | 39 | 32 | sell 0.004 SOL → USDC | filled | 27s | 1 |  |
| 12:25:39 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 46s | 1 |  |
| 12:25:39 | 41 | 34 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 12:25:39 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 31s | 1 |  |
| 12:25:39 | 43 | 36 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 12:27:09 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 71s | 1 | main timeout |
| 12:27:09 | 45 | 30 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:27:09 | 46 | 31 | sell 0.0035 SOL → USDC | failed | 73s | 1 | main timeout |
| 12:27:09 | 47 | 32 | sell 0.004 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:27:09 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 70s | 1 | main timeout |
| 12:27:09 | 49 | 34 | sell 0.003 SOL → USDC | failed | 71s | 1 | main timeout |
| 12:27:09 | 50 | 35 | sell 0.0035 SOL → USDC | failed | 72s | 1 | main timeout |
| 12:27:09 | 51 | 36 | sell 0.004 SOL → USDC | filled | 62s | 1 |  |
| 12:27:09 | 52 | 37 | sell 0.0025 SOL → USDC | failed | 73s | 1 | main timeout |
| 12:27:09 | 53 | 38 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:27:09 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 12:27:09 | 55 | 40 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 12:27:09 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 33s | 1 |  |
| 12:27:09 | 57 | 42 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 12:27:09 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 12:27:09 | 59 | 44 | sell 0.004 SOL → USDC | filled | 38s | 1 |  |
| 12:28:39 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:28:39 | 61 | 30 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:28:39 | 62 | 31 | sell 0.0035 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:28:39 | 63 | 32 | sell 0.004 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:28:39 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:28:39 | 65 | 34 | sell 0.003 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:28:39 | 66 | 35 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:28:39 | 67 | 36 | sell 0.004 SOL → USDC | filled | 82s | 1 |  |
| 12:28:39 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:28:39 | 69 | 38 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:28:39 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 58s | 1 |  |
| 12:28:39 | 71 | 40 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 12:28:39 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:28:39 | 73 | 42 | sell 0.003 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:28:39 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 12:28:39 | 75 | 44 | sell 0.004 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:28:39 | 76 | 45 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:28:39 | 77 | 46 | sell 0.003 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:28:39 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 12:28:39 | 79 | 48 | sell 0.004 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:28:39 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:28:39 | 81 | 50 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 12:28:39 | 82 | 51 | sell 0.0035 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:28:39 | 83 | 52 | sell 0.004 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:30:09 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 90s | 1 | main timeout |
| 12:30:09 | 85 | 30 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:30:09 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 85s | 1 | main timeout |
| 12:30:09 | 87 | 32 | sell 0.004 SOL → USDC | failed | 86s | 1 | main timeout |
| 12:30:09 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 89s | 1 | main timeout |
| 12:30:09 | 89 | 34 | sell 0.003 SOL → USDC | failed | 86s | 1 | main timeout |
| 12:30:09 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 54s | 1 |  |
| 12:30:09 | 91 | 36 | sell 0.004 SOL → USDC | failed | 88s | 1 | main timeout |
| 12:30:09 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 86s | 1 | main timeout |
| 12:30:09 | 93 | 38 | sell 0.003 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:30:09 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 85s | 1 | main timeout |
| 12:30:09 | 95 | 40 | sell 0.004 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:30:09 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 86s | 1 | main timeout |
| 12:30:09 | 97 | 42 | sell 0.003 SOL → USDC | failed | 85s | 1 | main timeout |
| 12:30:09 | 98 | 43 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:30:09 | 99 | 44 | sell 0.004 SOL → USDC | filled | 29s | 1 |  |
| 12:30:09 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 84s | 1 | main timeout |
| 12:30:09 | 101 | 46 | sell 0.003 SOL → USDC | filled | 58s | 1 |  |
| 12:30:09 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:30:09 | 103 | 48 | sell 0.004 SOL → USDC | failed | 84s | 1 | main timeout |
| 12:30:09 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 86s | 1 | main timeout |
| 12:30:09 | 105 | 50 | sell 0.003 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:30:09 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 85s | 1 | main timeout |
| 12:30:09 | 107 | 52 | sell 0.004 SOL → USDC | filled | 61s | 1 |  |
| 12:30:09 | 108 | 53 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:30:09 | 109 | 54 | sell 0.003 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:30:09 | 110 | 55 | sell 0.0035 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:30:09 | 111 | 56 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 12:30:09 | 112 | 57 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:30:09 | 113 | 58 | sell 0.003 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:30:09 | 114 | 59 | sell 0.0035 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:30:09 | 115 | 60 | sell 0.004 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:35:14 | 116 | 62 | buy 2.6 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:35:14 | 117 | 64 | buy 1.3 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:35:14 | 118 | 65 | buy 3.1 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:35:14 | 119 | 66 | buy 3.1 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:35:14 | 120 | 67 | buy 1.1 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:35:14 | 121 | 68 | buy 3.2 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:37:44 | 122 | 61 | sell 0.02 SOL → USDC | failed | 70s | 1 | main timeout |
| 12:37:44 | 123 | 62 | buy 0.02 SOL ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:37:44 | 124 | 63 | sell 0.03 SOL → USDC | failed | 36s | 1 | main expired |
| 12:37:44 | 125 | 64 | sell 1.2 USDC → SOL | filled | 66s | 2 |  |
| 12:37:44 | 126 | 65 | sell 3 USDC → USDT | failed | 42s | 1 | acquire USDC expired |
| 12:37:44 | 127 | 66 | sell 3 USDT → USDC | failed | 78s | 1 | acquire USDT timeout |
| 12:37:44 | 128 | 67 | sell 1 USDT → USDC | filled | 47s | 2 |  |
| 12:37:44 | 129 | 68 | sell 3 USDC → USDT | failed | 43s | 1 | acquire USDC expired |
| 12:37:44 | 130 | 69 | sell 0.02 SOL → JUP | filled | 58s | 1 |  |
| 12:40:50 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 76s | 1 | main timeout |
| 12:40:50 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 11s | 1 |  |
| 12:40:50 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 11s | 1 |  |
| 12:40:50 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 10s | 1 |  |
| 12:40:50 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 12s | 1 |  |
| 12:40:50 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 9s | 1 |  |
| 12:40:50 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 80s | 1 | main timeout |
| 12:40:50 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 80s | 1 | main timeout |
| 12:40:50 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 81s | 1 | main timeout |
| 12:40:50 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 79s | 1 | main timeout |
| 12:40:50 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 84s | 1 | main timeout |
| 12:40:50 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 79s | 1 | main timeout |
| 12:40:50 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 79s | 1 | main timeout |
| 12:40:50 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 79s | 1 | main timeout |
| 12:40:50 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 83s | 1 | main timeout |
| 12:40:50 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:40:50 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 83s | 1 | main timeout |
| 12:40:50 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 16s | 1 |  |
| 12:40:50 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 84s | 1 | main timeout |
| 12:40:50 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 24s | 1 |  |
| 12:40:50 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 84s | 1 | main timeout |
| 12:40:52 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:52 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:53 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:53 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:53 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:40:53 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:44:13 | 183 | 107 | sell 0.1 SOL → USDC | failed | 72s | 1 | main timeout |
| 12:44:13 | 184 | 108 | sell 0.1 SOL → USDC | filled | 11s | 1 |  |
| 12:44:13 | 185 | 109 | buy 10 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:44:13 | 186 | 110 | buy 10 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:44:13 | 187 | 111 | sell 0.1 SOL → USDT | failed | 73s | 1 | main timeout |
| 12:44:13 | 188 | 112 | sell 0.1 SOL → USDT | failed | 69s | 1 | main timeout |
| 12:44:13 | 189 | 113 | buy 10 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:44:13 | 190 | 114 | buy 10 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

46 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 29 | SOL → USDC ×7, SOL → USDT ×5, JUP → USDC, USDC → SOL, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| NoLiquidity | main | 17 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx, SOL → GLDx, SOL → EUROP | no route found |

Scenario orders: 146 (140 main, 6 acquire). Cleanup placed 43 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 12:19:17 | 2 | USDT → SOL (native) | Executed | `0x8c4dfa7c…` [🐞](https://debug.barn.cow.fi/order/0x8c4dfa7cbd609c55b900cc7359ed8b9e9f71e468dbc9278c468376d7f6d3544b) |
| 12:19:19 | 1 | USDC → SOL (native) | Executed | `0xce61e35c…` [🐞](https://debug.barn.cow.fi/order/0xce61e35c48e197f84cc676bb110fdb6ea4965bf9c522614beaf2c7ffc62f74ac) |
| 12:22:11 | 13 | JUP → SOL (native) | Executed | `0xdf163908…` [🐞](https://debug.barn.cow.fi/order/0xdf1639083646111d060a62d3aac43e59b77af8bef2ab5b9503106dc281ea08ac) |
| 12:31:41 | 30 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x50ca874c…` [🐞](https://debug.barn.cow.fi/order/0x50ca874ca1af48f9e944e8fbf85dbc34794ef430b23232f53efb019998836ad7) |
| 12:31:42 | 31 | USDC → SOL (native) | Executed | `0x80c479cf…` [🐞](https://debug.barn.cow.fi/order/0x80c479cfd7e3e898ad2734a09e8edafeac394ffb8d3638377b41cbbfe095f181) |
| 12:31:43 | 32 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x5d3aa1e2…` [🐞](https://debug.barn.cow.fi/order/0x5d3aa1e2dfe8e5474c65d53cb6bc40c78bb171e40d2352bb71517e7eb009a2ba) |
| 12:31:44 | 33 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2d27d864…` [🐞](https://debug.barn.cow.fi/order/0x2d27d8645123c354f04271e4fbb5244dc7c729d61042641f7db642ba1c5b9792) |
| 12:31:45 | 34 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xeabcf9b4…` [🐞](https://debug.barn.cow.fi/order/0xeabcf9b467f955b4d0fb90341a536690b91ac896b527d41e3dc8f42dc7f6afcc) |
| 12:31:46 | 35 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x26b2b31a…` [🐞](https://debug.barn.cow.fi/order/0x26b2b31adc202e2b58f2a63483b46746e29ecfe3b4a8bbb013d7bc84b2cc9c7d) |
| 12:31:47 | 36 | USDC → SOL (native) | Executed | `0xc99d17d0…` [🐞](https://debug.barn.cow.fi/order/0xc99d17d0c4dc9a3e1769d1562d1f547968110691b1315a627f788205a09d52f1) |
| 12:31:52 | 29 | USDC → SOL (native) | Executed | `0x381df555…` [🐞](https://debug.barn.cow.fi/order/0x381df55529d94ef25c5728600e317d5bd10fe4d6594877f3163a1b357e95e32e) |
| 12:31:59 | 40 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe2a8cc38…` [🐞](https://debug.barn.cow.fi/order/0xe2a8cc38eafecb9226257e44d62b4b50bec8295543fe654037185bead7c58466) |
| 12:32:00 | 39 | USDC → SOL (native) | Executed | `0x44de87d4…` [🐞](https://debug.barn.cow.fi/order/0x44de87d4de298ae2b2d64cc78c86f8afbd49cfd85193efa6b79da20a7e78dc45) |
| 12:32:11 | 41 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xf8b1961c…` [🐞](https://debug.barn.cow.fi/order/0xf8b1961c76a9268f76205a0d8915b006d58f824dcc1b7fe89363ed90b1fd8463) |
| 12:32:27 | 42 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x8e9ae2e2…` [🐞](https://debug.barn.cow.fi/order/0x8e9ae2e29dce5da5474d711ad86db42f8157204e734da73c23a63e915da3ce3a) |
| 12:32:33 | 43 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x79ed7825…` [🐞](https://debug.barn.cow.fi/order/0x79ed7825bade5217c872b195eea2c0f68d17d5026531c8d30de5d3336ab80708) |
| 12:32:37 | 44 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2abf029b…` [🐞](https://debug.barn.cow.fi/order/0x2abf029b4a26b3bfa0f098a9f60bc09611315f9614a25620473517e628eabdbb) |
| 12:33:09 | 47 | USDC → SOL (native) | Executed | `0xc1d3b33c…` [🐞](https://debug.barn.cow.fi/order/0xc1d3b33cdeccdf551465b5c90b3e5f6bf66e627e74ac5b5ca0e793c9a938985b) |
| 12:33:12 | 46 | USDC → SOL (native) | Executed | `0xfb1a16bb…` [🐞](https://debug.barn.cow.fi/order/0xfb1a16bba39d3ef91fdda5d648a629ae770d00281068e860c27950cc6e14cc4c) |
| 12:33:16 | 50 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xbd1b7ec6…` [🐞](https://debug.barn.cow.fi/order/0xbd1b7ec652847a95a08f25076546a854a55d2f46f35a894ead4dd61e7993e6a9) |
| 12:33:25 | 52 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x34ff19a6…` [🐞](https://debug.barn.cow.fi/order/0x34ff19a6ca01e83428696f3bfef24885b0912561bcc20e5f5003d07ac2ba861e) |
| 12:33:41 | 56 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xcc703d0f…` [🐞](https://debug.barn.cow.fi/order/0xcc703d0f1275c133ea329ba3f95015ff96046c9442b37a22f8b8c0237d48c08e) |
| 12:39:12 | 67 | USDC → SOL (native) | Executed | `0xf524a11c…` [🐞](https://debug.barn.cow.fi/order/0xf524a11c1d7f639541264c3980c3e4e9801ad0cf9ae4e8ef8385fd03e2a2aca6) |
| 12:39:16 | 69 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x78f0a20c…` [🐞](https://debug.barn.cow.fi/order/0x78f0a20c3d22c4bc17c33c0ba642d3f878dd71b37a3c62ec076f3eb04c1bcfce) |
| 12:42:36 | 86 | $WIF → SOL (native) | Executed | `0xd3db20b4…` [🐞](https://debug.barn.cow.fi/order/0xd3db20b458bbb0f61ebc8edc5ecb4bfe72031476f91c4c23c5948d73cea3ba14) |
| 12:42:37 | 87 | POPCAT → SOL (native) | Executed | `0x506d374d…` [🐞](https://debug.barn.cow.fi/order/0x506d374d5a5c974b3a23ec6ef58971673ab0a4633d204ef3b6269863ba244599) |
| 12:42:37 | 88 | JitoSOL → SOL (native) | Executed | `0x29e3fbed…` [🐞](https://debug.barn.cow.fi/order/0x29e3fbed4ad3588ee383857985ec2c7d6cb83741d97f9abfe6db4832a06fe0e4) |
| 12:42:40 | 90 | JupSOL → SOL (native) | Executed | `0xf84df5bb…` [🐞](https://debug.barn.cow.fi/order/0xf84df5bb6376e0b98410a90c5be0fa90e6916472483cca7cec5fba91b0f15357) |
| 12:42:44 | 89 | mSOL → SOL (native) | Executed | `0x9a45f280…` [🐞](https://debug.barn.cow.fi/order/0x9a45f280082060a9812cc58f0967163ef456d74cdb08450c816706ed14460521) |
| 12:42:44 | 94 | USDY → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xca58b2f8…` [🐞](https://debug.barn.cow.fi/order/0xca58b2f8e3033243387f9e2baa0385f13fa6d22ffc0de182e51f9ad4f3206854) |
| 12:43:18 | 103 | MEW → SOL (native) | Executed | `0xf9ef1e32…` [🐞](https://debug.barn.cow.fi/order/0xf9ef1e324759fdc4cea057856bb43d15071f5ae5b804b9c0e343e95cfa1be7be) |
| 12:43:18 | 105 | hyloSOL → SOL (native) | Executed | `0x0118e125…` [🐞](https://debug.barn.cow.fi/order/0x0118e1250c6eb2a3bc4a923c96926527a664225510c2b7b936622dcc8345ebd0) |
| 12:45:29 | 108 | USDC → SOL (native) | Executed | `0x7d90f40d…` [🐞](https://debug.barn.cow.fi/order/0x7d90f40d982179f5c7478a0070648be9329ed14e2ec47aa564ef2ef02886fe56) |
| 12:49:12 | 32 | USDC → SOL (native) | Executed | `0x0a0ad6c0…` [🐞](https://debug.barn.cow.fi/order/0x0a0ad6c06ac87013bc9ccc2c4d8d0678443157ad6450802433a725b9e507c2de) |
| 12:49:16 | 35 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x211ed44e…` [🐞](https://debug.barn.cow.fi/order/0x211ed44e725253251d5e7e4a17ce19d53098eccf4137b18e47ca341330f952df) |
| 12:49:19 | 40 | USDC → SOL (native) | Executed | `0xb1962f5e…` [🐞](https://debug.barn.cow.fi/order/0xb1962f5ef0e0a7ce5bae3b113abea68490f80a98e90078c6ff2c7d202a8e6e67) |
| 12:49:23 | 43 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x62e36e16…` [🐞](https://debug.barn.cow.fi/order/0x62e36e160f0f7f6cb86fd0e4e470bbdf0953829ef2da9a5bc9e9efdad8b266f6) |
| 12:49:23 | 44 | USDC → SOL (native) | Executed | `0x3e55c25d…` [🐞](https://debug.barn.cow.fi/order/0x3e55c25de98d5d4c4f37e23d0d003fa830472904900bcd2f1a1e5769613c3a99) |
| 12:49:25 | 30 | USDC → SOL (native) | Executed | `0x8d61f90a…` [🐞](https://debug.barn.cow.fi/order/0x8d61f90a23f27033294b1a75ca3f1983c4c8ce2d45c77f884d4f9f172c62a761) |
| 12:49:29 | 52 | USDC → SOL (native) | Executed | `0x88570f37…` [🐞](https://debug.barn.cow.fi/order/0x88570f37fa34dc8b9b1a23d893cc7ce2a85e0c2d90a6c237264db91ac454cc66) |
| 12:49:32 | 56 | USDC → SOL (native) | Executed | `0x931ff5af…` [🐞](https://debug.barn.cow.fi/order/0x931ff5af86664ade66bba91cbc8ed60b582e4f449015449537b88fe5e478ba66) |
| 12:50:57 | 69 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x0dd90cc6…` [🐞](https://debug.barn.cow.fi/order/0x0dd90cc6a566a70f3a5082d9d10c5b5f10bfab849794cc3af20a8ef452859fed) |
| 12:52:14 | 94 | USDY → SOL (native) | Executed | `0x2274003d…` [🐞](https://debug.barn.cow.fi/order/0x2274003d4ca72c7a6c4ae30bd3168c8d157c777edef2f8aed3e6702f268c1f85) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| cancelled | 97 | 66.4% |
| executed | 46 | 31.5% |
| expired: never created on-chain (winner found, creation blockhash expired) | 3 | 2.1% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 13s | 27s | 49s | 64s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 6YuF…AyeH | 46 | 100.0% | 46 | 97,954 | 13s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| arc | 632 | 112 | 71 | 63.4% | 9 | 64 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| arc: SimulationFailed | 9 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 430 times
- Orders filtered for `in_flight`: 90 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 146 | 46 | 31.5% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 92 | 33 | 35.9% |
| wSOL → JUP | 27 | 2 | 7.4% |
| wSOL → USDT | 5 | 2 | 40.0% |
| USDT → USDC | 1 | 1 | 100.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 0 | 0.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 0 | 0.0% |
| wSOL → EURC | 1 | 0 | 0.0% |
| wSOL → USDe | 1 | 0 | 0.0% |
| wSOL → USDY | 1 | 0 | 0.0% |
| wSOL → JLP | 1 | 0 | 0.0% |
| wSOL → INF | 1 | 0 | 0.0% |
| wSOL → ETH | 1 | 0 | 0.0% |
| wSOL → BNB | 1 | 0 | 0.0% |
| wSOL → XAUt0 | 1 | 0 | 0.0% |
| wSOL → Fartcoin | 1 | 0 | 0.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 0 | 0.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 2 | 40.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 2 | 40.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 2 | 40.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 2 | 40.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 1 | 25.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 1 | 25.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 2 | 50.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 3 | 75.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 0 | 0.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 1 | 33.3% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 2 | 66.7% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 2 | 66.7% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 2 | 66.7% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 2 | 66.7% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 1 | 33.3% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 0 | 0.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 0 | 0.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 1 | 50.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 1 | 50.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 0 | 0.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 1 | 50.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 0 | 0.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 1 | 50.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 0 | 0.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 0 | 0.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 0 | 0.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 0 | 0.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 0 | 0.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 0 | 0.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 0 | 0.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 0 | 0.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 0 | 0.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 0 | 0.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 0 | 0.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 0 | 0.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 0 | 0.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 0 | 0.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 0 | 0.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 0 | 0.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 0 | 0.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 0 | 0.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 0 | 0.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 0 | 0.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 0 | 0.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 0 | 0.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 0 | 0.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 0 | 0.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 0 | 0.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 0 | 0.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 0 | 0.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 0 | 0.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 0 | 0.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 0 | 0.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 0 | 0.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 0 | 0.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 0 | 0.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 0 | 0.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 1 | 0 | 0.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 0 | 0.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 0 | 0.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 0 | 0.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 0 | 0.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 0 | 0.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 0 | 0.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 0 | 0.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 0 | 0.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 0 | 0.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 0 | 0.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 0 | 0.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 0 | 0.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 0 | 0.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 0 | 0.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 0 | 0.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 0 | 0.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 0 | 0.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 97 | 0 |
| Winner too late: creation blockhash expired | 3 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 12:18:06 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xd26fb080…` [🐞](https://debug.barn.cow.fi/order/0xd26fb080d9381b3697292d54fb8e288b707962c0b593be7e6fc8fcb509fac7a8) |
| 12:20:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xaa56bd92…` [🐞](https://debug.barn.cow.fi/order/0xaa56bd92c3c49282e4cd8bc08113ac3a3b653394587d1622ab888e566d5ef4dc) |
| 12:20:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xa6f025d1…` [🐞](https://debug.barn.cow.fi/order/0xa6f025d1eb0d9c9faa27bfd37552d8f7010b182e4c0b338bbe828297ec3cc0b0) |
| 12:20:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x4853750a…` [🐞](https://debug.barn.cow.fi/order/0x4853750ae62fa0c9ff04bbf876d7926d6430d3753321c4fe71d0ff5bba578b65) |
| 12:20:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf9f1db7c…` [🐞](https://debug.barn.cow.fi/order/0xf9f1db7c7b74ec60f7a1815b5902b6f9c2f1a6a32fcdd232652142eab8492dae) |
| 12:20:36 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xec72c108…` [🐞](https://debug.barn.cow.fi/order/0xec72c108ec009099432b9b40abf0990c92a1e4de885e987e25536102cc1dd549) |
| 12:20:36 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xc692813d…` [🐞](https://debug.barn.cow.fi/order/0xc692813dd513fce0043898aef9d7a9beb2814eae9eb0ca0540d1e59bd49fbb6a) |
| 12:20:36 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb071abe9…` [🐞](https://debug.barn.cow.fi/order/0xb071abe9267dd6119b5a635b673eff81f6609e723b7e18d688fa6fe50ae61f19) |
| 12:20:36 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x8edff5dc…` [🐞](https://debug.barn.cow.fi/order/0x8edff5dcdd534976d174c9f290f3dded693d7463892c02e7376bf47651e345d6) |
| 12:20:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x5de0910d…` [🐞](https://debug.barn.cow.fi/order/0x5de0910d554a69a0cb2c45962230b3883842131b29a903bb3c5d7fb06467e0b4) |
| 12:20:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x1d4a99ca…` [🐞](https://debug.barn.cow.fi/order/0x1d4a99ca66d9ad797f28fe39db9291fb5a3623356e5e4dbd456f49478e7f9a7e) |
| 12:20:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x6e212c05…` [🐞](https://debug.barn.cow.fi/order/0x6e212c05394a41a8541badf734375a70245beb6aec89c071887c8b68fe9b9610) |
| 12:20:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x5c09840f…` [🐞](https://debug.barn.cow.fi/order/0x5c09840f6e0e86a2a310543c7c15803781f32da9d829168fa28bab8202206fea) |
| 12:20:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xffcaf613…` [🐞](https://debug.barn.cow.fi/order/0xffcaf613083f970ad6fc3445671f22a7dffe23a6c787d2febcc01a49318eee59) |
| 12:20:37 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xa7775958…` [🐞](https://debug.barn.cow.fi/order/0xa777595853c7b5dcd82e14b0d38d21bd898ac1205b88ff68d52d96fc046b9dbb) |
| 12:20:38 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x01cfb2e2…` [🐞](https://debug.barn.cow.fi/order/0x01cfb2e29aa44ff41b3d97203239266ae5a766bf2a2e8e74854b3bfe57f8be84) |
| 12:20:38 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x3250ae3b…` [🐞](https://debug.barn.cow.fi/order/0x3250ae3bcdd7a4ba17e45a0c1cf3e97391f3f928a52dcd2b1d5e1ba24ec25fa6) |
| 12:20:39 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xa9fac5d3…` [🐞](https://debug.barn.cow.fi/order/0xa9fac5d38bf8c595576b943c0a44800eb698fab01b8b17a4fd7d56e9382376b8) |
| 12:20:39 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x5dcc848e…` [🐞](https://debug.barn.cow.fi/order/0x5dcc848e18e6b769354dd19a25eaa7941c46d2c7eaf71307e8dbb701a5722e18) |
| 12:20:39 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x2ece0a8d…` [🐞](https://debug.barn.cow.fi/order/0x2ece0a8d4966402a05bc7279193e1c550f2a511eb21d47c53aff7ba67b36fef3) |
| 12:20:39 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb46d664e…` [🐞](https://debug.barn.cow.fi/order/0xb46d664e4b7643b080bd8bbdbd0fce0a91238c0b3e94c5c70313150c7d053fee) |
| 12:20:39 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xfdf45c10…` [🐞](https://debug.barn.cow.fi/order/0xfdf45c10736462d7b3b393500f6de8a3cda0e46a1c89258d2002a003e8d3836c) |
| 12:20:40 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x7c7dc140…` [🐞](https://debug.barn.cow.fi/order/0x7c7dc1403c79ecaf97f842b64635dd975e424a04123aa99fbddf66170b05f600) |
| 12:20:40 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xfa335f35…` [🐞](https://debug.barn.cow.fi/order/0xfa335f3576738f6f928911cd258dd575569ebab3c155a92c84cecf78143c397a) |
| 12:20:40 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x34561584…` [🐞](https://debug.barn.cow.fi/order/0x345615848e7fdf2a196c09b1f489d16c268c42e59c2342c0ff42e045fe4d4fb2) |
| 12:27:12 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xac2091dc…` [🐞](https://debug.barn.cow.fi/order/0xac2091dc8e49c04b32df64e46e53bd3407d13fa3d34731bdf946391b55ea9623) |
| 12:27:12 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1df04fbf…` [🐞](https://debug.barn.cow.fi/order/0x1df04fbfc4eea180a8cc3cc87dcbc3b45cc3ff1364a7440be816241759c89533) |
| 12:27:12 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7186d899…` [🐞](https://debug.barn.cow.fi/order/0x7186d8992b94d2cb185ff6c76ed08990cabd6e2ad0bb94eb18a8fa8615d2e001) |
| 12:27:12 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xaac9ec49…` [🐞](https://debug.barn.cow.fi/order/0xaac9ec4933b66a8d2272498dca422bf95cc4b396cdd1ab564a196b88f16ed833) |
| 12:27:12 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x94e53e24…` [🐞](https://debug.barn.cow.fi/order/0x94e53e2438c0467da77b1eb4f9126cf1a0275107549e961bad8323b840ffbede) |
| 12:27:13 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xad14dd9a…` [🐞](https://debug.barn.cow.fi/order/0xad14dd9a011d6ae74ecd3bfd1a6fb439cfb22e9c28be860d4bc0552dd345c616) |
| 12:27:13 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3952c65e…` [🐞](https://debug.barn.cow.fi/order/0x3952c65e920d163aa569b909b135f656ce9c5b8750eb82698750b7a15210f485) |
| 12:27:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc687931c…` [🐞](https://debug.barn.cow.fi/order/0xc687931c3f8075f970ebad122abb550845982a6012238c9321bf37541138e5e9) |
| 12:27:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc29eb220…` [🐞](https://debug.barn.cow.fi/order/0xc29eb2201444920e04c5bdc81eef4a0bc96fe2a6cdd9ce7dad9df1da98794d9f) |
| 12:28:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x62b1dc7a…` [🐞](https://debug.barn.cow.fi/order/0x62b1dc7a952055ce390c2ae4178d695d820874bc28e4eeac59f13425d1d78acd) |
| 12:28:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9d53dbde…` [🐞](https://debug.barn.cow.fi/order/0x9d53dbde9429af8210116bfdaf531ed2b433ab501d03b927fdd7943e61c89924) |
| 12:28:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2b7b582b…` [🐞](https://debug.barn.cow.fi/order/0x2b7b582b431aadcf8d18a3311f4e92aee226b0416e1ac505e865aaeba66ec239) |
| 12:28:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8209b891…` [🐞](https://debug.barn.cow.fi/order/0x8209b891acf6b32eb514d4fed2e5b5f7ac85c7b15a9a0bb85da3a8b3603987e3) |
| 12:28:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa6d9b452…` [🐞](https://debug.barn.cow.fi/order/0xa6d9b4527c23611f8f4178f6a66cc1c1660dd623625e15cd08fd01acef7d19c7) |
| 12:28:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe307cf5b…` [🐞](https://debug.barn.cow.fi/order/0xe307cf5b9dfc9f93b9566bbb1759f2aee5e750a483a7a1561e3ccc60c1fd87c5) |
| 12:28:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9b609ceb…` [🐞](https://debug.barn.cow.fi/order/0x9b609ceb3c4f49b01d7da536ff4adabb62b402574f43e54ff425dcd6dfbf5b9e) |
| 12:28:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x93efd139…` [🐞](https://debug.barn.cow.fi/order/0x93efd139bebb6e280777addb159a58c7d785b2ce76cca5f61c57fbd9986929da) |
| 12:28:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3f339295…` [🐞](https://debug.barn.cow.fi/order/0x3f33929586d0e683288605b2a7ed7ff81dc19a4c859b83f95209e6ddc6746603) |
| 12:28:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf37ab937…` [🐞](https://debug.barn.cow.fi/order/0xf37ab9374b65d1daa9d87de76516bf2cfbe2ca17635c688e70ce529ff2c2dd8e) |
| 12:28:49 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf2d621f4…` [🐞](https://debug.barn.cow.fi/order/0xf2d621f4f43c315defc5a9f463d70ba1388516489da0ba064a46b7366d645e2e) |
| 12:28:49 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xafc11c67…` [🐞](https://debug.barn.cow.fi/order/0xafc11c67f274ba60c574294d3bf475300a1f4de511c07feaa18005274ecd9a71) |
| 12:28:49 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0c747929…` [🐞](https://debug.barn.cow.fi/order/0x0c747929dfb2be87345829c718bafda35d8f21f7b315f881e5f41e0f5ce50ea7) |
| 12:28:49 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x014a9f37…` [🐞](https://debug.barn.cow.fi/order/0x014a9f37c33cfcdd4bc0e60a0b540b5834f68773af0ab2e6cc41a306fd42ef21) |
| 12:28:50 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb850705a…` [🐞](https://debug.barn.cow.fi/order/0xb850705a939a1ad5a992a122097fd7a1f1e39e7599e70b66fe87810963dbe008) |
| 12:28:50 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xce970128…` [🐞](https://debug.barn.cow.fi/order/0xce9701283df2065f4c27370bddacc557d3a58387b1308732132d6d6264c88e2b) |
| 12:28:50 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd04bb5d4…` [🐞](https://debug.barn.cow.fi/order/0xd04bb5d41c246be31d2558c134faf91675e664ed58a5da92c456af92343e3aea) |
| 12:28:51 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xab96e1bc…` [🐞](https://debug.barn.cow.fi/order/0xab96e1bc59ba087946c3c0c8b9752ca22474656a23b6cea9c81f9ba9c30bc1a7) |
| 12:30:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xcaefe532…` [🐞](https://debug.barn.cow.fi/order/0xcaefe532440097d3e32d680fd271544f83c99ecf0ac8ab6db088e00bd9b03493) |
| 12:30:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbcc54d8a…` [🐞](https://debug.barn.cow.fi/order/0xbcc54d8abeced8d5aaf99dc724fb87d38fff8ba9a3c0c816061f7fcdbf236496) |
| 12:30:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x34b3720d…` [🐞](https://debug.barn.cow.fi/order/0x34b3720d7e288fb0287873c52a60e0aff941a2955089d28193b036e35f7ce415) |
| 12:30:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa636a955…` [🐞](https://debug.barn.cow.fi/order/0xa636a9554812e3979643ad635bd7f48b68f4aa45d92feb2741c3c75da1e7ff26) |
| 12:30:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x27661b09…` [🐞](https://debug.barn.cow.fi/order/0x27661b0929c4b1ff614c48bbe860fa2e6bf01ee055b9fb1776e2c8b45280a6a4) |
| 12:30:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x225b6a32…` [🐞](https://debug.barn.cow.fi/order/0x225b6a324ce892a3ac16d16480b42d1743f0e018aff3f9f942f95ac911faa3ca) |
| 12:30:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe76badf2…` [🐞](https://debug.barn.cow.fi/order/0xe76badf266338ca98af7ef8f82436849308824ede400e408cfd3cfdf30ab0da0) |
| 12:30:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6c6e42d2…` [🐞](https://debug.barn.cow.fi/order/0x6c6e42d2a68470f4d9a4e45dfe0977c1872add9580a7942263d524821739f0b9) |
| 12:30:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0ad5097f…` [🐞](https://debug.barn.cow.fi/order/0x0ad5097feabfe2400742ee67f1e3f3574cf2a763d76d15ed8934228dc68f38b2) |
| 12:30:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc67a17d9…` [🐞](https://debug.barn.cow.fi/order/0xc67a17d91c8b75fcb34aa097b38589cdc8683f2899076787ecaa1501207d80f8) |
| 12:30:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa1f6a905…` [🐞](https://debug.barn.cow.fi/order/0xa1f6a905c3aeae9a153a0d411d8a6582f24a052fc90cf4a489ceac3776e26bc8) |
| 12:30:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x444fe22c…` [🐞](https://debug.barn.cow.fi/order/0x444fe22c873b6d7cd160a0b6d1754fe80c8ffc8ee097a7c73cbe621b880b2e79) |
| 12:30:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x978ce82d…` [🐞](https://debug.barn.cow.fi/order/0x978ce82d64d2a52add3d6d5815c6e67b23ceb957fcd0c06079549a5bdde075c9) |
| 12:30:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1434d014…` [🐞](https://debug.barn.cow.fi/order/0x1434d014bdf18071afbaf8c29cd23861c6e9232a1e0f1a671e539a5c03200ccd) |
| 12:30:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x60e35a2e…` [🐞](https://debug.barn.cow.fi/order/0x60e35a2e2376f2218fc9a8d6de93eb18b1bf8ee7bc58647a164805bf3325dcd9) |
| 12:30:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa1df6699…` [🐞](https://debug.barn.cow.fi/order/0xa1df66995dc86b6ccd965588a08c8c3776d3c3660b6625be28e759900490df3a) |
| 12:30:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2b32af32…` [🐞](https://debug.barn.cow.fi/order/0x2b32af3247658d4890b05fb2a2c69cc31800608640728f0a2e6821c78a02ae3b) |
| 12:30:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4c0989d4…` [🐞](https://debug.barn.cow.fi/order/0x4c0989d4de49f0d5a32e92c450b34a02e74652441d6894d5a687541fa144fefe) |
| 12:30:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x84040be8…` [🐞](https://debug.barn.cow.fi/order/0x84040be8761e71f2babc5c58a2d29061d9d8739e0883e574e8f35bfb2318b29f) |
| 12:30:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc2efd801…` [🐞](https://debug.barn.cow.fi/order/0xc2efd80122a7e7ba4c4ce40fb4b6351bdac5c21a40c6aeca5afe100d12266a1c) |
| 12:30:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf465b514…` [🐞](https://debug.barn.cow.fi/order/0xf465b51418aec18b8c625d61565af08485e756734145558a490cf86f9f250542) |
| 12:30:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x857d5f2d…` [🐞](https://debug.barn.cow.fi/order/0x857d5f2d024a337424bf05a76b2d2c5d224c593f2f501667b8cfe527a8ae98b6) |
| 12:30:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xae178d03…` [🐞](https://debug.barn.cow.fi/order/0xae178d03b72831844df150878cec5339747efffe03c84e25dcf6554e0fcac9a7) |
| 12:30:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb11de814…` [🐞](https://debug.barn.cow.fi/order/0xb11de81413b856fc19caaf3f947d221d3bb11e9e937c37ad03695a8f099e088b) |
| 12:30:21 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x93cf1459…` [🐞](https://debug.barn.cow.fi/order/0x93cf1459d61d0c7ae17b74714c080b8ffb934985c0ff9fef9fa48cecb0a40967) |
| 12:30:21 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x18e39452…` [🐞](https://debug.barn.cow.fi/order/0x18e394526f683a2c231034eb72bcd3d8d6232c9989b20315631ab78b928bb33a) |
| 12:30:21 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2558d5f0…` [🐞](https://debug.barn.cow.fi/order/0x2558d5f0eabb891693b574cdf40e11f988298c8a5fd7b878bc59927d0dd0cce7) |
| 12:37:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9037d9b7…` [🐞](https://debug.barn.cow.fi/order/0x9037d9b7d3b5fab7cd5b745a8165cc11aef299949695fb1168a83435886f7ae2) |
| 12:37:45 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x1a4bae06…` [🐞](https://debug.barn.cow.fi/order/0x1a4bae06cae95cb094a8edd5a9dd918af896183ad2f0ad442f2e0b8373b3895c) |
| 12:37:51 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x860c5fda…` [🐞](https://debug.barn.cow.fi/order/0x860c5fdac818687414b15dc2caea5dec9e14f2401ed446b7b8bd03f8b70f8c01) |
| 12:37:52 | wSOL → USDT | market sell | Not filled within fill timeout (cancelled by sim) | `0x6826bdcf…` [🐞](https://debug.barn.cow.fi/order/0x6826bdcf7ea4da58f103cbec2d72ac8936f3811a025680afc9b585da5f143a1c) |
| 12:37:52 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x72e722bf…` [🐞](https://debug.barn.cow.fi/order/0x72e722bf8a8a0d7156b72829c76c505d01d164891c9e348fd8aca95f4d937c1d) |
| 12:40:54 | wSOL → Bonk | market sell | Not filled within fill timeout (cancelled by sim) | `0xe21de087…` [🐞](https://debug.barn.cow.fi/order/0xe21de087ede24be99766312cee37c929a1338eea89d4919e32aa71aae626c3bf) |
| 12:40:59 | wSOL → cbBTC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3719ddf3…` [🐞](https://debug.barn.cow.fi/order/0x3719ddf32f8ff0b1a48948c260d04e983be470756aa0b34fa343d2134ab4d001) |
| 12:41:00 | wSOL → EURC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5340620d…` [🐞](https://debug.barn.cow.fi/order/0x5340620dd11291a2a2ed1e21a9d8f4ffcf659988fda2caeb164b36af7129541a) |
| 12:41:00 | wSOL → USDe | market sell | Not filled within fill timeout (cancelled by sim) | `0x3929b472…` [🐞](https://debug.barn.cow.fi/order/0x3929b472a350512164cc8e30d15d2713942784f71f132f5aab1a15a2466d8abb) |
| 12:41:00 | wSOL → USDY | market sell | Not filled within fill timeout (cancelled by sim) | `0x3e253685…` [🐞](https://debug.barn.cow.fi/order/0x3e2536852a26f4b6695552dbb451f99131c9f1b62a2e56f09e54fbc8a9a03cdb) |
| 12:41:01 | wSOL → JLP | market sell | Not filled within fill timeout (cancelled by sim) | `0x11478b27…` [🐞](https://debug.barn.cow.fi/order/0x11478b27101314411f52d013927bb4a10f6269ff04a586833e5544235361d44b) |
| 12:41:01 | wSOL → INF | market sell | Not filled within fill timeout (cancelled by sim) | `0xe0583f3e…` [🐞](https://debug.barn.cow.fi/order/0xe0583f3e814d89f943ec94b231fa9530252d619465b5ef1d0b6c27fbf273ea3d) |
| 12:41:01 | wSOL → ETH | market sell | Not filled within fill timeout (cancelled by sim) | `0xaced5114…` [🐞](https://debug.barn.cow.fi/order/0xaced51145411fb1521e607a328942d7ba6ca7f119305c10b69504eb29ac6344a) |
| 12:41:01 | wSOL → BNB | market sell | Not filled within fill timeout (cancelled by sim) | `0xced2d1f2…` [🐞](https://debug.barn.cow.fi/order/0xced2d1f2578ced736ff6d2ded47f0fad25171761d220591fb34d7d71a1a7c250) |
| 12:41:01 | wSOL → XAUt0 | market sell | Not filled within fill timeout (cancelled by sim) | `0x3d0cd881…` [🐞](https://debug.barn.cow.fi/order/0x3d0cd8817cc6632cb36d7902066778737b98b76355a3bc08f2cb0dcdf5e2d4dc) |
| 12:41:02 | wSOL → Fartcoin | market sell | Not filled within fill timeout (cancelled by sim) | `0x463976c9…` [🐞](https://debug.barn.cow.fi/order/0x463976c9859db135fe27c25bda4d4ba9bab8ee479b29dd8005201353e0417432) |
| 12:41:04 | wSOL → BOME | market sell | Not filled within fill timeout (cancelled by sim) | `0xb1aa0293…` [🐞](https://debug.barn.cow.fi/order/0xb1aa0293f68fd66d4c4b0d9ea447940d648a5bb95430307e4a9b24896bb101cb) |
| 12:41:04 | wSOL → PSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x05ae3948…` [🐞](https://debug.barn.cow.fi/order/0x05ae39482134c83458a55a692cffeeba64b1114e05cfbfe3e71b1b96b7c60877) |
| 12:44:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0df25249…` [🐞](https://debug.barn.cow.fi/order/0x0df25249545b51e125bf734cd0892c054b0d71424aec098023cd074af5c4dcee) |
| 12:44:15 | wSOL → USDT | market sell | Not filled within fill timeout (cancelled by sim) | `0x850c1bd0…` [🐞](https://debug.barn.cow.fi/order/0x850c1bd052652812c7442defde45f15a82b672f3339270d4a4e2ff1e30efdcee) |
| 12:44:15 | wSOL → USDT | market sell | Not filled within fill timeout (cancelled by sim) | `0x6f8062cc…` [🐞](https://debug.barn.cow.fi/order/0x6f8062ccb1cdf653a589924074ea151685eb57e818e61fa549e285042edd984e) |
