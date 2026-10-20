# Solana QoS report: 2026-10-20-11-18-composite-helixbox-run

Barn, orders created between `2026-10-20T11:20:28.344Z` and `2026-10-20T11:50:19.446Z`. Data fetched 2026-10-20T11:52:24+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 107 |
| Orders executed | **67** (62.6%) |
| Sponsored orders never created on-chain | 4 (3.7%) |
| Traders | 50 |
| Settlement txs | 67 |

## Scenario results

Target solver: `helixbox`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-20T11:20:28.344Z | 2026-10-20T11:20:35.114Z | 2/6 | 4 | 2 | 2 | 33.3% |
| solver-same-direction-25 | 2026-10-20T11:21:28.929Z | 2026-10-20T11:21:33.925Z | 0/25 | 25 | 0 | 0 | 0.0% |
| solver-burst-sell | 2026-10-20T11:22:48.318Z | 2026-10-20T11:30:11.780Z | 48/84 | 36 | 84 | 48 | 57.1% |
| solver-cow | 2026-10-20T11:32:21.746Z | 2026-10-20T11:35:46.277Z | 3/15 | 12 | 12 | 8 | 20.0% |
| solver-token-coverage | 2026-10-20T11:36:57.328Z | 2026-10-20T11:37:12.940Z | 5/55 | 50 | 5 | 5 | 9.1% |
| solver-transaction-size | 2026-10-20T11:39:01.552Z | 2026-10-20T11:40:33.202Z | 0/10 | 10 | 0 | 0 | 0.0% |
| solver-fresh-accounts | 2026-10-20T11:41:16.115Z | 2026-10-20T11:41:30.992Z | 4/8 | 4 | 4 | 4 | 50.0% |

## Scenario

62 of 203 scenario rows completed. 0 retries, 71 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:20:28 | 1 | 1 | sell 0.005 SOL → USDC | filled | 5s | 1 |  |
| 11:20:28 | 2 | 2 | sell 0.005 SOL → USDT | filled | 5s | 1 |  |
| 11:20:28 | 3 | 3 | sell 0.5 JUP → USDC | failed | 7s | 0 | acquire JUP quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:20:33 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:20:33 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:20:35 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 7 | 4 | sell 0.005 SOL → JUP | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 8 | 5 | sell 0.005 SOL → JUP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 9 | 6 | sell 0.005 SOL → JUP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 10 | 7 | sell 0.005 SOL → JUP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 11 | 8 | sell 0.005 SOL → JUP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 12 | 9 | sell 0.005 SOL → JUP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 13 | 10 | sell 0.005 SOL → JUP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 14 | 11 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 15 | 12 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 16 | 13 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 17 | 14 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 18 | 15 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 19 | 16 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 20 | 17 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 21 | 18 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 22 | 19 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 23 | 20 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 24 | 21 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 25 | 22 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 26 | 23 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 27 | 24 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 28 | 25 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 29 | 26 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 30 | 27 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:21:28 | 31 | 28 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:22:48 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 11:22:48 | 33 | 30 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 11:22:48 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 11:22:48 | 35 | 32 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 11:24:18 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 11:24:18 | 37 | 30 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 11:24:18 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 11:24:18 | 39 | 32 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 11:24:18 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 40s | 1 |  |
| 11:24:18 | 41 | 34 | sell 0.003 SOL → USDC | filled | 31s | 1 |  |
| 11:24:18 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 11:24:18 | 43 | 36 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 11:25:48 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 11:25:48 | 45 | 30 | sell 0.003 SOL → USDC | filled | 60s | 1 |  |
| 11:25:48 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 31s | 1 |  |
| 11:25:48 | 47 | 32 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 11:25:48 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 11:25:48 | 49 | 34 | sell 0.003 SOL → USDC | filled | 51s | 1 |  |
| 11:25:48 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 36s | 1 |  |
| 11:25:48 | 51 | 36 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 11:25:48 | 52 | 37 | sell 0.0025 SOL → USDC | failed | 74s | 1 | main timeout |
| 11:25:48 | 53 | 38 | sell 0.003 SOL → USDC | filled | 55s | 1 |  |
| 11:25:48 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 46s | 1 |  |
| 11:25:48 | 55 | 40 | sell 0.004 SOL → USDC | filled | 26s | 1 |  |
| 11:25:48 | 56 | 41 | sell 0.0025 SOL → USDC | failed | 74s | 1 | main timeout |
| 11:25:48 | 57 | 42 | sell 0.003 SOL → USDC | filled | 65s | 1 |  |
| 11:25:48 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 40s | 1 |  |
| 11:25:48 | 59 | 44 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 11:27:18 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 11:27:18 | 61 | 30 | sell 0.003 SOL → USDC | failed | 78s | 1 | main timeout |
| 11:27:18 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 41s | 1 |  |
| 11:27:18 | 63 | 32 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 11:27:18 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 11:27:18 | 65 | 34 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 11:27:18 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 44s | 1 |  |
| 11:27:18 | 67 | 36 | sell 0.004 SOL → USDC | filled | 25s | 1 |  |
| 11:27:18 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 11:27:18 | 69 | 38 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 11:27:18 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 64s | 1 |  |
| 11:27:18 | 71 | 40 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 11:27:18 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 11:27:18 | 73 | 42 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 11:27:18 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 51s | 1 |  |
| 11:27:18 | 75 | 44 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 11:27:18 | 76 | 45 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 11:27:18 | 77 | 46 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 11:27:18 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 59s | 1 |  |
| 11:27:18 | 79 | 48 | sell 0.004 SOL → USDC | filled | 35s | 1 |  |
| 11:27:18 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 11:27:18 | 81 | 50 | sell 0.003 SOL → USDC | failed | 80s | 1 | main timeout |
| 11:27:18 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 54s | 1 |  |
| 11:27:18 | 83 | 52 | sell 0.004 SOL → USDC | filled | 30s | 1 |  |
| 11:28:48 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 81s | 1 | main timeout |
| 11:28:48 | 85 | 30 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 11:28:48 | 86 | 31 | sell 0.0035 SOL → USDC | filled | 36s | 1 |  |
| 11:28:48 | 87 | 32 | sell 0.004 SOL → USDC | filled | 56s | 1 |  |
| 11:28:48 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 11:28:48 | 89 | 34 | sell 0.003 SOL → USDC | failed | 76s | 1 | main timeout |
| 11:28:48 | 90 | 35 | sell 0.0035 SOL → USDC | failed | 75s | 1 | main timeout |
| 11:28:48 | 91 | 36 | sell 0.004 SOL → USDC | filled | 27s | 1 |  |
| 11:28:48 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 11:28:48 | 93 | 38 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 11:28:48 | 94 | 39 | sell 0.0035 SOL → USDC | filled | 69s | 1 |  |
| 11:28:48 | 95 | 40 | sell 0.004 SOL → USDC | filled | 62s | 1 |  |
| 11:28:48 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 11:28:48 | 97 | 42 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 11:28:48 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 65s | 1 |  |
| 11:28:48 | 99 | 44 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 11:28:48 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 11:28:48 | 101 | 46 | sell 0.003 SOL → USDC | failed | 81s | 1 | main timeout |
| 11:28:48 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 76s | 1 | main timeout |
| 11:28:48 | 103 | 48 | sell 0.004 SOL → USDC | filled | 49s | 1 |  |
| 11:28:48 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 11:28:48 | 105 | 50 | sell 0.003 SOL → USDC | failed | 81s | 1 | main timeout |
| 11:28:48 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 76s | 1 | main timeout |
| 11:28:48 | 107 | 52 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 11:28:48 | 108 | 53 | sell 0.0025 SOL → USDC | failed | 82s | 1 | main timeout |
| 11:28:48 | 109 | 54 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 11:28:48 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 83s | 1 |  |
| 11:28:48 | 111 | 56 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 11:28:48 | 112 | 57 | sell 0.0025 SOL → USDC | failed | 82s | 1 | main timeout |
| 11:28:48 | 113 | 58 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 11:28:48 | 114 | 59 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 11:28:48 | 115 | 60 | sell 0.004 SOL → USDC | filled | 29s | 1 |  |
| 11:32:21 | 116 | 62 | buy 2.6 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:32:21 | 117 | 64 | buy 1.3 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:32:21 | 118 | 65 | buy 3.1 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:32:21 | 119 | 66 | buy 3.1 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:32:21 | 120 | 67 | buy 1.1 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:32:21 | 121 | 68 | buy 3.2 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:34:51 | 122 | 61 | sell 0.02 SOL → USDC | filled | 20s | 1 |  |
| 11:34:51 | 123 | 62 | buy 0.02 SOL ← USDC | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:34:51 | 124 | 63 | sell 0.03 SOL → USDC | filled | 8s | 1 |  |
| 11:34:51 | 125 | 64 | sell 1.2 USDC → SOL | filled | 32s | 2 |  |
| 11:34:51 | 126 | 65 | sell 3 USDC → USDT | failed | 54s | 2 | main expired |
| 11:34:51 | 127 | 66 | sell 3 USDT → USDC | failed | 48s | 2 | main expired |
| 11:34:51 | 128 | 67 | sell 1 USDT → USDC | failed | 55s | 2 | main expired |
| 11:34:51 | 129 | 68 | sell 3 USDC → USDT | failed | 48s | 2 | main expired |
| 11:34:51 | 130 | 69 | sell 0.02 SOL → JUP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 146 | 85 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 11:36:57 | 147 | 86 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 11:36:57 | 148 | 87 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 4s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 11:36:57 | 149 | 88 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 150 | 89 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 151 | 90 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 14s | 1 |  |
| 11:36:57 | 152 | 91 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 153 | 92 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 154 | 93 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 155 | 94 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 12s | 1 |  |
| 11:36:57 | 156 | 95 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 157 | 96 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 158 | 97 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 159 | 98 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 160 | 99 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 161 | 100 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 162 | 101 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 163 | 102 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 164 | 103 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 165 | 104 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 166 | 105 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 15s | 1 |  |
| 11:36:57 | 167 | 106 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 15s | 1 |  |
| 11:36:57 | 168 | 107 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 16s | 1 |  |
| 11:36:57 | 169 | 108 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:57 | 170 | 109 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 171 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 172 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 173 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 174 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 175 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 176 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 177 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 178 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 179 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 180 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 181 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:36:59 | 182 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:37:00 | 183 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:37:00 | 184 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:37:00 | 185 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:39:01 | 186 | 110 | sell 0.005 SOL → EURC | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:39:01 | 187 | 114 | sell 0.005 SOL → JLP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:40:31 | 188 | 110 | sell 0.005 SOL → EURC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:40:31 | 189 | 111 | sell 0.005 SOL → EURC | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:40:31 | 190 | 112 | sell 0.005 SOL → EURC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:40:31 | 191 | 113 | sell 0.005 SOL → EURC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:40:31 | 192 | 114 | sell 0.00125 SOL → JLP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:40:31 | 193 | 115 | sell 0.00125 SOL → JLP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:40:31 | 194 | 116 | sell 0.00125 SOL → JLP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:40:31 | 195 | 117 | sell 0.00125 SOL → JLP | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:41:16 | 196 | 118 | sell 0.1 SOL → USDC | filled | 9s | 1 |  |
| 11:41:16 | 197 | 119 | sell 0.1 SOL → USDC | filled | 14s | 1 |  |
| 11:41:16 | 198 | 120 | buy 10 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:41:16 | 199 | 121 | buy 10 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:41:16 | 200 | 122 | sell 0.1 SOL → USDT | filled | 6s | 1 |  |
| 11:41:16 | 201 | 123 | sell 0.1 SOL → USDT | filled | 15s | 1 |  |
| 11:41:16 | 202 | 124 | buy 10 USDT ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:41:16 | 203 | 125 | buy 10 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

101 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 68 | SOL → JUP ×26, SOL → EURC ×6, SOL → JLP ×6, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx, SOL → Bonk, SOL → $WIF, SOL → JitoSOL, SOL → mSOL, SOL → JupSOL, SOL → USDe, SOL → USDY, SOL → INF, SOL → ETH, SOL → BNB, SOL → XAUt0, SOL → GLDx, SOL → EUROP, SOL → hyloSOL, SOL → PSOL | no route found |
| NoLiquidity | quote | 29 | SOL → USDC ×7, SOL → USDT ×5, JUP → USDC, USDC → SOL, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| NoLiquidity | acquire | 1 | SOL → JUP | no route found |

Scenario orders: 107 (102 main, 5 acquire). Cleanup placed 39 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:20:39 | 1 | USDC → SOL (native) | Executed | `0xf42ac4da…` [🐞](https://debug.barn.cow.fi/order/0xf42ac4da19f02f2707f79aab9d5526dbf7f11d9b44cb9ae8af650867db8081ab) |
| 11:20:40 | 2 | USDT → SOL (native) | Executed | `0x8c1d09be…` [🐞](https://debug.barn.cow.fi/order/0x8c1d09be331fa1e111e75c8e0841b45d1381711ba9c01cf26dd99ae4acb88915) |
| 11:30:14 | 30 | USDC → SOL (native) | Executed | `0xdfd5e3c2…` [🐞](https://debug.barn.cow.fi/order/0xdfd5e3c266e5eee04671873d038b59da65e8ce7f39d7edf042d25c29b83c7079) |
| 11:30:15 | 31 | USDC → SOL (native) | Executed | `0x73f767d5…` [🐞](https://debug.barn.cow.fi/order/0x73f767d5791b9e7ec107a39c661763e67d878f18cb02800c190f8897a5624498) |
| 11:30:16 | 32 | cbBTC → SOL (native) | Executed | `0x3de4a6c8…` [🐞](https://debug.barn.cow.fi/order/0x3de4a6c87de78a4a7c1c6d31603ca77b52549d4a6bf60424c45eda60c5336d65) |
| 11:30:16 | 32 | USDC → SOL (native) | Executed | `0x5a2fe5ac…` [🐞](https://debug.barn.cow.fi/order/0x5a2fe5ac46c5b6291b9ad612bcd0aa50db7540b766c9e368898826b9b22b2f4b) |
| 11:30:17 | 33 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xcc427a54…` [🐞](https://debug.barn.cow.fi/order/0xcc427a5493a80ff93f82586359c2287f9c8b0fe5a387df7a9f83b2211d0c1bfa) |
| 11:30:18 | 34 | USDC → SOL (native) | Executed | `0x29ea2ca7…` [🐞](https://debug.barn.cow.fi/order/0x29ea2ca72151596d7483c1ba0cac5662a67fda5576c1f85eddb0af867e26cc6b) |
| 11:30:19 | 35 | USDC → SOL (native) | Executed | `0x081bf040…` [🐞](https://debug.barn.cow.fi/order/0x081bf0407d2f343e95e772c011aa2f075def4b5373d3ff097058f27f1e5b60be) |
| 11:30:20 | 36 | USDC → SOL (native) | Executed | `0x72ab5a6c…` [🐞](https://debug.barn.cow.fi/order/0x72ab5a6cc6c748f7c18217e58f8bd1f0f3509944fb7d273a29b6ab72d8c1c1a7) |
| 11:30:24 | 29 | USDC → SOL (native) | Executed | `0x99c60cc5…` [🐞](https://debug.barn.cow.fi/order/0x99c60cc5e5f5dddbf8f04e1d2f189f9ecf5f35afb603864555dcb4539ecb8441) |
| 11:30:27 | 38 | USDC → SOL (native) | Executed | `0x20cfb5ef…` [🐞](https://debug.barn.cow.fi/order/0x20cfb5ef9d8b5dfdbe23c13087eb7b238dd4f4f0dbd9b9f79a7c68fc89c3eaef) |
| 11:30:38 | 39 | USDC → SOL (native) | Executed | `0x86386f80…` [🐞](https://debug.barn.cow.fi/order/0x86386f803839c096f48d7200cc24def369f232a0e8e30a7378a51089766b5642) |
| 11:30:41 | 40 | USDC → SOL (native) | Executed | `0x48acd8ba…` [🐞](https://debug.barn.cow.fi/order/0x48acd8bab8ed2380548d3876fea8868333fbb8841a6db5c12633b7b1b42591bc) |
| 11:30:47 | 42 | USDC → SOL (native) | Executed | `0x359ccd0a…` [🐞](https://debug.barn.cow.fi/order/0x359ccd0a1eef5fb0af572bc71806245834c3cce32f6d3a0fd72be1d8808b2fb3) |
| 11:30:52 | 43 | USDC → SOL (native) | Executed | `0xd9af6b2a…` [🐞](https://debug.barn.cow.fi/order/0xd9af6b2a6edadc41046e4f1a9e1cc0b4bd79044bc21d6984f122a6cc3bffede1) |
| 11:30:55 | 44 | USDC → SOL (native) | Executed | `0xc0a702a5…` [🐞](https://debug.barn.cow.fi/order/0xc0a702a5c73b41512289ff1327018f89d9cc56b0e21f1b4c20d560fe47c3efbf) |
| 11:31:12 | 47 | USDC → SOL (native) | Executed | `0x3dab8eab…` [🐞](https://debug.barn.cow.fi/order/0x3dab8eabc07f5e7a07c757ada56f42cd4c9fb483d9efaf0257e4a127d7f10ee0) |
| 11:31:17 | 48 | USDC → SOL (native) | Executed | `0x889b5c1a…` [🐞](https://debug.barn.cow.fi/order/0x889b5c1ab26c557d19b609a7c02584c948736b21a6839a68f28579bc88fffb1a) |
| 11:31:22 | 51 | USDC → SOL (native) | Executed | `0x2ae26ca9…` [🐞](https://debug.barn.cow.fi/order/0x2ae26ca90411b219faaeb1fa4e3816da137b655419de2414e1790800c133ca1d) |
| 11:31:38 | 52 | USDC → SOL (native) | Executed | `0xee691dc2…` [🐞](https://debug.barn.cow.fi/order/0xee691dc211c769773db9ee29b0ee2a57fa41a23c1eadb09c94abe350fb3fd889) |
| 11:31:42 | 55 | USDC → SOL (native) | Executed | `0x4c085933…` [🐞](https://debug.barn.cow.fi/order/0x4c0859338f77755075ad461013d5282b8645226dbc27a93a1cfe9a4bb0e22ece) |
| 11:31:42 | 56 | USDC → SOL (native) | Executed | `0x1d47209a…` [🐞](https://debug.barn.cow.fi/order/0x1d47209acf52b7b6c6840107a95ad283b1ab2add75724055a998dbc3124eb446) |
| 11:31:57 | 60 | USDC → SOL (native) | Executed | `0xe3bb6950…` [🐞](https://debug.barn.cow.fi/order/0xe3bb6950b34af4ec71e6daa9e5480d52d9b18f43b007d21b23c2f6cb86b3d69c) |
| 11:35:48 | 61 | USDC → SOL (native) | Executed | `0x41aee35a…` [🐞](https://debug.barn.cow.fi/order/0x41aee35a3133bfbe3e3ae2a7dbf19a2e5ee241fa98c28a16825267fd95b9d984) |
| 11:35:50 | 63 | USDC → SOL (native) | Executed | `0xbe659cbb…` [🐞](https://debug.barn.cow.fi/order/0xbe659cbb560cd8f5720acb07ebff40188d8fbb7811c6da84f7c9475379c367a4) |
| 11:35:52 | 65 | USDC → SOL (native) | Executed | `0x3bf84555…` [🐞](https://debug.barn.cow.fi/order/0x3bf84555b617827312af3a9ea877f75fa48a6666f4ad9eb190ad8eda32328862) |
| 11:35:53 | 66 | USDT → SOL (native) | Executed | `0xb32d5930…` [🐞](https://debug.barn.cow.fi/order/0xb32d59304fa2f32fdabf1ebc8e034bd89cd4e6c0fa63dddd81bf08b690133965) |
| 11:35:54 | 67 | USDT → SOL (native) | Executed | `0xb3365688…` [🐞](https://debug.barn.cow.fi/order/0xb3365688a9cf2d149c09fa19f971aeb693dce0af234742296257f3717f1194c8) |
| 11:35:57 | 68 | USDC → SOL (native) | Executed | `0xda05ed3f…` [🐞](https://debug.barn.cow.fi/order/0xda05ed3f157e0768f43440581b0801c710008fb2f70121eb64fb1ca1db9e75f6) |
| 11:37:35 | 90 | POPCAT → SOL (native) | Executed | `0xd3b08914…` [🐞](https://debug.barn.cow.fi/order/0xd3b08914d89f9f1b38cb418fdf4660d5821ed73d0cf45d0d0d94d3ac848f0612) |
| 11:37:47 | 94 | cbBTC → SOL (native) | Executed | `0x36c53192…` [🐞](https://debug.barn.cow.fi/order/0x36c5319254c4c833c16844c01448e85ef05e3abd11c3d12b2c5c62a4b6897e29) |
| 11:38:09 | 105 | Fartcoin → SOL (native) | Executed | `0x92e74bd4…` [🐞](https://debug.barn.cow.fi/order/0x92e74bd47b84a79ace45577e93d84a8a3affc1c36896f8221edf4a0ae2d1c220) |
| 11:38:10 | 106 | MEW → SOL (native) | Executed | `0xa62c7b1f…` [🐞](https://debug.barn.cow.fi/order/0xa62c7b1f85e8aa6791ae231a96f2738e7a85d2b41d5e1a8573b019dcba55d8bb) |
| 11:38:11 | 107 | BOME → SOL (native) | Executed | `0x0094993e…` [🐞](https://debug.barn.cow.fi/order/0x0094993eda7678c94e611eead33b2d1a6ae9c9b7d8efc312caa9731e11355f9e) |
| 11:41:32 | 118 | USDC → SOL (native) | Executed | `0x5695e0d5…` [🐞](https://debug.barn.cow.fi/order/0x5695e0d53b14946a231ae14538d34a6830e20e156ea506207a97fd83edd769f8) |
| 11:41:33 | 119 | USDC → SOL (native) | Executed | `0x392324c8…` [🐞](https://debug.barn.cow.fi/order/0x392324c8f35d213d386951c1dfe986e405d7ca675d5e6ff0f1d273bb3be636aa) |
| 11:41:36 | 122 | USDT → SOL (native) | Executed | `0xd0c02fc4…` [🐞](https://debug.barn.cow.fi/order/0xd0c02fc45d549d607fd0c4e7553ddad6485f724c857d5567b7f28ea2182c4ba7) |
| 11:41:37 | 123 | USDT → SOL (native) | Executed | `0x612e519f…` [🐞](https://debug.barn.cow.fi/order/0x612e519ff00dcae601451da045fe59d88b7b137825c8e6f35cc4397404013dae) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 67 | 62.6% |
| cancelled | 36 | 33.6% |
| expired: never created on-chain (winner found, creation blockhash expired) | 4 | 3.7% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 15s | 35s | 51s | 62s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 9CHj…Rb7v | 67 | 100.0% | 67 | 64,886 | 15s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| helixbox | 803 | 108 | 105 | 97.2% | 0 | 6 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 347 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 107 | 67 | 62.6% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 92 | 56 | 60.9% |
| wSOL → USDT | 5 | 5 | 100.0% |
| USDT → USDC | 2 | 0 | 0.0% |
| USDC → USDT | 2 | 0 | 0.0% |
| USDC → SOL (native) | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 2 | 40.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 5 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 3 | 60.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 5 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 1 | 25.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 2 | 50.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 3 | 75.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 4 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 0 | 0.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 1 | 33.3% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 0 | 0.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 1 | 33.3% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 3 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 0 | 0.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 0 | 0.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 1 | 50.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 0 | 0.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 0 | 0.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 1 | 50.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 1 | 50.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 1 | 50.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 1 | 50.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 1 | 50.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 0 | 0.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 0 | 0.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 0 | 0.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 0 | 0.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 0 | 0.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `Bk7AYQexQvtetasHf5tR8jV69rvdMHEF699K77ZT3S3H` | 1 | 1 | 100.0% |
| `4b6B15qXF9dZuuFwX66EZV6hzTRcFf37P9oRFYerfzbN` | 1 | 1 | 100.0% |
| `EgXhxv9Y3nFquYURnSgHCc3CeYue4iVCqw1pravxTAbN` | 1 | 1 | 100.0% |
| `ALRkrC3Ztr2WYqbFhEYP26DnAK3D18kkhARDENoF5M5d` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 36 | 0 |
| Winner too late: creation blockhash expired | 4 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 11:25:51 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2ea49321…` [🐞](https://debug.barn.cow.fi/order/0x2ea49321c4c7af7e5aab1a309523d4c7ba688c2860fdf3391cd09ee7e38fe7a0) |
| 11:25:52 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xea2134e5…` [🐞](https://debug.barn.cow.fi/order/0xea2134e5361d18a02c6cb4223fdc5f64d812ff4668601b26871f569b19137722) |
| 11:25:54 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3600dfa2…` [🐞](https://debug.barn.cow.fi/order/0x3600dfa2f0267c98344d4b67e5c1b7dd8e2019d03a458e9a82008c0a045ef442) |
| 11:25:54 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8965ced6…` [🐞](https://debug.barn.cow.fi/order/0x8965ced6b54feb2ce060786b889a7c4dd0dbf8bfcb6a26b5baa0e2e02c5a3bfe) |
| 11:27:22 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb0ea441b…` [🐞](https://debug.barn.cow.fi/order/0xb0ea441b35bc174cc2011623545be8aaecb0112f107520a6560b3bcb30507b33) |
| 11:27:23 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe011c31f…` [🐞](https://debug.barn.cow.fi/order/0xe011c31f0d933c9f37b4f3a48b5cea8ee6d4aac593f2e173ff5064dac9badda9) |
| 11:27:23 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x61801a9b…` [🐞](https://debug.barn.cow.fi/order/0x61801a9bb608178ad7a0054d58ad4392289437019f25fbb7738833db12ad5796) |
| 11:27:25 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x318ec684…` [🐞](https://debug.barn.cow.fi/order/0x318ec6849424e0d08b1e3ffda7a5a3178e9f02f0a6ccd5fc5d8013bbf30d0e45) |
| 11:27:25 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x23babb23…` [🐞](https://debug.barn.cow.fi/order/0x23babb23a0b7dd989056700b86841679eac7c99d96454ea0a8d2be35c0068175) |
| 11:27:25 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x172d1d86…` [🐞](https://debug.barn.cow.fi/order/0x172d1d864dc61d6b3579710187a77b76de88208740d7b145ae24598c9497ff3d) |
| 11:27:25 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0ef8d1fb…` [🐞](https://debug.barn.cow.fi/order/0x0ef8d1fb208f3a32aa4c0191facaa5716aa2ab50651dd5901c730dabe87da7c9) |
| 11:27:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa29464b4…` [🐞](https://debug.barn.cow.fi/order/0xa29464b482da07d85187322bd5a0658e292bcc25ee2a43b5eb38d798014c4013) |
| 11:27:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x049af8ff…` [🐞](https://debug.barn.cow.fi/order/0x049af8ff6e76d2bec5637e81e07f8730355aa75f69922cefd84b3f43b8b2dd9b) |
| 11:27:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3a526a11…` [🐞](https://debug.barn.cow.fi/order/0x3a526a11616cb89b6d477f82f17a94c79950923dae37b5b7ac033353e9b8a349) |
| 11:27:27 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x50d470c0…` [🐞](https://debug.barn.cow.fi/order/0x50d470c08c44f8dd6144c5da3ee051e9ef6f10c9448dea078e03f6b94662aed0) |
| 11:27:27 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xcb312586…` [🐞](https://debug.barn.cow.fi/order/0xcb3125861a93fc78e30e478ff9b868951ee193f9788b03e980dc9bc20950ce8b) |
| 11:28:53 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf42fc1e2…` [🐞](https://debug.barn.cow.fi/order/0xf42fc1e20af3a9718ed498c66d455a8d424a8b30ee8bba3eb3dfe4f83989a797) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x88dca487…` [🐞](https://debug.barn.cow.fi/order/0x88dca487a7900e09e0e0cd2c04af8f1e8fce88742fd6b134fd948dec89024a4d) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9e5c456c…` [🐞](https://debug.barn.cow.fi/order/0x9e5c456c6adf03db88076ca3408a7e1c49bbe2f9821112c5a18ec2eaa320cadc) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x82cbfbc5…` [🐞](https://debug.barn.cow.fi/order/0x82cbfbc55b654690b161718e6cc572753b71df0caaecb41a05bb3e149e59dfe6) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8ee832f1…` [🐞](https://debug.barn.cow.fi/order/0x8ee832f1cac64a961f48057d02b66b46f5de76810eea6944f671bdd0bb9ea760) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x85f3e741…` [🐞](https://debug.barn.cow.fi/order/0x85f3e7417f81d0f11511ff9be7dd7af2cbd44e55439270e94f069d01ee301fc7) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfcf375c5…` [🐞](https://debug.barn.cow.fi/order/0xfcf375c54de800fb41401ecdee81e54079c1897794ca6f6684350c168c268a7f) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf2f215e7…` [🐞](https://debug.barn.cow.fi/order/0xf2f215e735ad3266de26cea5b3d359b3b92a1d1ec84a9a86ec9858b6054addb9) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb372dde7…` [🐞](https://debug.barn.cow.fi/order/0xb372dde7e6a9b22cc0e9ca0d8ec0c7fd719c248cc66adb1fd28cdc0c7ee77874) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd67e8684…` [🐞](https://debug.barn.cow.fi/order/0xd67e86848914c47a50a61aa6cb94567865904b1640a8e2d0444e75dc9c9450cb) |
| 11:28:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb1316149…` [🐞](https://debug.barn.cow.fi/order/0xb13161492db998b9f19bfa9230eb6aa1a7d3691375d20b4552b74a38b143e59b) |
| 11:28:56 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf1cf5645…` [🐞](https://debug.barn.cow.fi/order/0xf1cf56452e29d9b92a8a94a39bb1f9283fc1911474db24fed32296ce3292b2b3) |
| 11:28:56 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8c488372…` [🐞](https://debug.barn.cow.fi/order/0x8c488372a1f7bbba6978b5383af3696558d00658b6e40151a9bdf6833efe0332) |
| 11:28:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1fe89ec5…` [🐞](https://debug.barn.cow.fi/order/0x1fe89ec533b2a977f23482194418d49e0d8ee0d723565d66629bfcd6ee39a599) |
| 11:28:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc53682bb…` [🐞](https://debug.barn.cow.fi/order/0xc53682bbb41120b625722a340bff62e4066a90af1073c583fe1f27a6fbec261a) |
| 11:28:59 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc42492cd…` [🐞](https://debug.barn.cow.fi/order/0xc42492cd633d38455e99ee5b5b0de7fcacd7a38807ee8cebdfc08d060ae82aa4) |
| 11:28:59 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x48a76549…` [🐞](https://debug.barn.cow.fi/order/0x48a765493435f8eb73c8ffc5625091acd6971fc46e44ee3251c7b4f8e71ead0d) |
| 11:28:59 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3bef5b87…` [🐞](https://debug.barn.cow.fi/order/0x3bef5b87ea3c58d7d5a24ab394c80f03b4cc9140f02ed22082ca22b9001b4dca) |
| 11:29:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x13e3037e…` [🐞](https://debug.barn.cow.fi/order/0x13e3037eb1ec302c8ac0c61105262bb53b79e476cc8695596dc6b058cdca0f0d) |
| 11:29:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xee0d3592…` [🐞](https://debug.barn.cow.fi/order/0xee0d3592c679b68cce0b12b3305e27b1eadfce73fbb5aa28b719170d17f5aee7) |
| 11:35:04 | USDT → USDC | market sell | Winner too late: creation blockhash expired | `0xa04ef079…` [🐞](https://debug.barn.cow.fi/order/0xa04ef079d91e75299899a450137bbcd76ad46504c5330495859c0462cb557ad1) |
| 11:35:04 | USDC → USDT | market sell | Winner too late: creation blockhash expired | `0x17b5dd39…` [🐞](https://debug.barn.cow.fi/order/0x17b5dd391532e23e1e16bd21441c82700423b4ec954d473f32b6d321fb91a488) |
| 11:35:10 | USDC → USDT | market sell | Winner too late: creation blockhash expired | `0xfcc550c5…` [🐞](https://debug.barn.cow.fi/order/0xfcc550c55c7ba2534761a6ade4379d29dc2c9e2c0e9a2b0618a21f4cd3073fdd) |
| 11:35:11 | USDT → USDC | market sell | Winner too late: creation blockhash expired | `0xb5be2402…` [🐞](https://debug.barn.cow.fi/order/0xb5be240225feeb80cbc692c3acf9148b1fd60afe0ecd4df56c13cba4cad15234) |
