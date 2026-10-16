# Solana QoS report: 2026-10-16-10-12-composite-fractal-run

Barn, orders created between `2026-10-16T10:14:10.487Z` and `2026-10-16T10:38:00.397Z`. Data fetched 2026-10-16T10:41:11+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 184 |
| Orders executed | **144** (78.3%) |
| Sponsored orders never created on-chain | 39 (21.2%) |
| Traders | 106 |
| Settlement txs | 64 |

## Scenario results

Target solver: `fractal`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-16T10:14:10.487Z | 2026-10-16T10:15:17.627Z | 6/6 | 0 | 8 | 8 | 100.0% |
| solver-same-direction-25 | 2026-10-16T10:16:14.508Z | 2026-10-16T10:16:53.242Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-16T10:19:25.666Z | 2026-10-16T10:26:46.871Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-cow | 2026-10-16T10:29:34.452Z | 2026-10-16T10:32:47.935Z | 0/15 | 15 | 15 | 0 | 0.0% |
| solver-token-coverage | 2026-10-16T10:33:39.460Z | 2026-10-16T10:35:06.527Z | 27/55 | 28 | 52 | 27 | 49.1% |

## Scenario

142 of 185 scenario rows completed. 0 retries, 3 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 10:14:10 | 1 | 1 | sell 0.005 SOL → USDC | filled | 15s | 1 |  |
| 10:14:10 | 2 | 2 | sell 0.005 SOL → USDT | filled | 15s | 1 |  |
| 10:14:10 | 3 | 3 | sell 0.5 JUP → USDC | filled | 36s | 2 |  |
| 10:14:26 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 10s | 1 |  |
| 10:14:25 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 11s | 1 |  |
| 10:14:46 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 31s | 2 |  |
| 10:16:14 | 7 | 4 | sell 0.005 SOL → JUP | filled | 28s | 1 |  |
| 10:16:14 | 8 | 5 | sell 0.005 SOL → JUP | filled | 22s | 1 |  |
| 10:16:14 | 9 | 6 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 10:16:14 | 10 | 7 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 10:16:14 | 11 | 8 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 10:16:14 | 12 | 9 | sell 0.005 SOL → JUP | filled | 26s | 1 |  |
| 10:16:14 | 13 | 10 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 10:16:14 | 14 | 11 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 10:16:14 | 15 | 12 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 10:16:14 | 16 | 13 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 10:16:14 | 17 | 14 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 10:16:14 | 18 | 15 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 10:16:14 | 19 | 16 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 10:16:14 | 20 | 17 | sell 0.005 SOL → JUP | filled | 27s | 1 |  |
| 10:16:14 | 21 | 18 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 10:16:14 | 22 | 19 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 10:16:14 | 23 | 20 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 10:16:14 | 24 | 21 | sell 0.005 SOL → JUP | filled | 28s | 1 |  |
| 10:16:14 | 25 | 22 | sell 0.005 SOL → JUP | filled | 28s | 1 |  |
| 10:16:14 | 26 | 23 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 10:16:14 | 27 | 24 | sell 0.005 SOL → JUP | filled | 22s | 1 |  |
| 10:16:14 | 28 | 25 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 10:16:14 | 29 | 26 | sell 0.005 SOL → JUP | filled | 26s | 1 |  |
| 10:16:14 | 30 | 27 | sell 0.005 SOL → JUP | filled | 39s | 1 |  |
| 10:16:14 | 31 | 28 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 10:19:25 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 10:19:25 | 33 | 30 | sell 0.003 SOL → USDC | filled | 26s | 1 |  |
| 10:19:25 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 10:19:25 | 35 | 32 | sell 0.004 SOL → USDC | filled | 25s | 1 |  |
| 10:20:55 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 10:20:55 | 37 | 30 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 10:20:55 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 10:20:55 | 39 | 32 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:20:55 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 10:20:55 | 41 | 34 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 10:20:55 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 10:20:55 | 43 | 36 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 10:22:25 | 44 | 29 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 10:22:25 | 45 | 30 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 10:22:25 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 10:22:25 | 47 | 32 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:22:25 | 48 | 33 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 10:22:25 | 49 | 34 | sell 0.003 SOL → USDC | filled | 10s | 1 |  |
| 10:22:25 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 10:22:25 | 51 | 36 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 10:22:25 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 10:22:25 | 53 | 38 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 10:22:25 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 10:22:25 | 55 | 40 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 10:22:25 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 10:22:25 | 57 | 42 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 10:22:25 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 10:22:25 | 59 | 44 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:23:55 | 60 | 29 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 10:23:55 | 61 | 30 | sell 0.003 SOL → USDC | filled | 26s | 1 |  |
| 10:23:55 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 10:23:55 | 63 | 32 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:23:55 | 64 | 33 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 10:23:55 | 65 | 34 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 10:23:55 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 10:23:55 | 67 | 36 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:23:55 | 68 | 37 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 10:23:55 | 69 | 38 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 10:23:55 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 10:23:55 | 71 | 40 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 10:23:55 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 10:23:55 | 73 | 42 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 10:23:55 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 10:23:55 | 75 | 44 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:23:55 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 10:23:55 | 77 | 46 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 10:23:55 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 10:23:55 | 79 | 48 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 10:23:55 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 10:23:55 | 81 | 50 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 10:23:55 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 10:23:55 | 83 | 52 | sell 0.004 SOL → USDC | filled | 23s | 1 |  |
| 10:25:25 | 84 | 29 | sell 0.0025 SOL → USDC | filled | 80s | 1 |  |
| 10:25:25 | 85 | 30 | sell 0.003 SOL → USDC | filled | 54s | 1 |  |
| 10:25:25 | 86 | 31 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 10:25:25 | 87 | 32 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 10:25:25 | 88 | 33 | sell 0.0025 SOL → USDC | filled | 61s | 1 |  |
| 10:25:25 | 89 | 34 | sell 0.003 SOL → USDC | filled | 31s | 1 |  |
| 10:25:25 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 10:25:25 | 91 | 36 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 10:25:25 | 92 | 37 | sell 0.0025 SOL → USDC | filled | 81s | 1 |  |
| 10:25:25 | 93 | 38 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 10:25:25 | 94 | 39 | sell 0.0035 SOL → USDC | filled | 26s | 1 |  |
| 10:25:25 | 95 | 40 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 10:25:25 | 96 | 41 | sell 0.0025 SOL → USDC | filled | 80s | 1 |  |
| 10:25:25 | 97 | 42 | sell 0.003 SOL → USDC | filled | 58s | 1 |  |
| 10:25:25 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 10:25:25 | 99 | 44 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 10:25:25 | 100 | 45 | sell 0.0025 SOL → USDC | filled | 79s | 1 |  |
| 10:25:25 | 101 | 46 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 10:25:25 | 102 | 47 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 10:25:25 | 103 | 48 | sell 0.004 SOL → USDC | filled | 27s | 1 |  |
| 10:25:25 | 104 | 49 | sell 0.0025 SOL → USDC | filled | 71s | 1 |  |
| 10:25:25 | 105 | 50 | sell 0.003 SOL → USDC | filled | 44s | 1 |  |
| 10:25:25 | 106 | 51 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 10:25:25 | 107 | 52 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:25:25 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 81s | 1 |  |
| 10:25:25 | 109 | 54 | sell 0.003 SOL → USDC | filled | 46s | 1 |  |
| 10:25:25 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 10:25:25 | 111 | 56 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 10:25:25 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 68s | 1 |  |
| 10:25:25 | 113 | 58 | sell 0.003 SOL → USDC | filled | 28s | 1 |  |
| 10:25:25 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 10:25:25 | 115 | 60 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 10:29:34 | 116 | 62 | buy 2.6 USDC ← SOL | failed | 37s | 1 | main expired |
| 10:29:34 | 117 | 64 | buy 1.3 USDC ← SOL | failed | 33s | 1 | main expired |
| 10:29:34 | 118 | 65 | buy 3.1 USDC ← SOL | failed | 37s | 1 | main expired |
| 10:29:34 | 119 | 66 | buy 3.1 USDT ← SOL | failed | 37s | 1 | main expired |
| 10:29:34 | 120 | 67 | buy 1.1 USDT ← SOL | failed | 37s | 1 | main expired |
| 10:29:34 | 121 | 68 | buy 3.2 USDC ← SOL | failed | 37s | 1 | main expired |
| 10:32:04 | 122 | 61 | sell 0.02 SOL → USDC | failed | 36s | 1 | main expired |
| 10:32:04 | 123 | 62 | buy 0.02 SOL ← USDC | failed | 43s | 1 | acquire USDC expired |
| 10:32:04 | 124 | 63 | sell 0.03 SOL → USDC | failed | 35s | 1 | main expired |
| 10:32:04 | 125 | 64 | sell 1.2 USDC → SOL | failed | 42s | 1 | acquire USDC expired |
| 10:32:04 | 126 | 65 | sell 3 USDC → USDT | failed | 43s | 1 | acquire USDC expired |
| 10:32:04 | 127 | 66 | sell 3 USDT → USDC | failed | 43s | 1 | acquire USDT expired |
| 10:32:04 | 128 | 67 | sell 1 USDT → USDC | failed | 43s | 1 | acquire USDT expired |
| 10:32:04 | 129 | 68 | sell 3 USDC → USDT | failed | 43s | 1 | acquire USDC expired |
| 10:32:04 | 130 | 69 | sell 0.02 SOL → JUP | failed | 36s | 1 | main expired |
| 10:33:39 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 42s | 1 | main expired |
| 10:33:39 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 42s | 1 | main expired |
| 10:33:39 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 42s | 1 | main expired |
| 10:33:39 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 19s | 1 |  |
| 10:33:39 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 42s | 1 | main expired |
| 10:33:40 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 43s | 1 | main expired |
| 10:33:40 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 42s | 1 | main expired |
| 10:33:40 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 19s | 1 |  |
| 10:33:40 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 42s | 1 | main expired |
| 10:33:40 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 42s | 1 | main expired |
| 10:33:40 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 46s | 1 | main expired |
| 10:33:40 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 20s | 1 |  |
| 10:33:40 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 43s | 1 | main expired |
| 10:33:40 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 43s | 1 | main expired |
| 10:33:40 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 43s | 1 | main expired |
| 10:33:41 | 146 | 85 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 10:33:41 | 147 | 86 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 10:33:41 | 148 | 87 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 10:33:41 | 149 | 88 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 20s | 1 |  |
| 10:33:41 | 150 | 89 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 20s | 1 |  |
| 10:33:41 | 151 | 90 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 28s | 1 |  |
| 10:33:41 | 152 | 91 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 29s | 1 |  |
| 10:33:41 | 153 | 92 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 30s | 1 |  |
| 10:33:41 | 154 | 93 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 30s | 1 |  |
| 10:33:41 | 155 | 94 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 30s | 1 |  |
| 10:33:42 | 156 | 95 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 30s | 1 |  |
| 10:33:42 | 157 | 96 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 26s | 1 |  |
| 10:33:42 | 158 | 97 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 26s | 1 |  |
| 10:33:42 | 159 | 98 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 26s | 1 |  |
| 10:33:42 | 160 | 99 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 27s | 1 |  |
| 10:33:42 | 161 | 100 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 27s | 1 |  |
| 10:33:42 | 162 | 101 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 27s | 1 |  |
| 10:33:42 | 163 | 102 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 84s | 1 | main timeout |
| 10:33:42 | 164 | 103 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 28s | 1 |  |
| 10:33:42 | 165 | 104 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 28s | 1 |  |
| 10:33:43 | 166 | 105 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 28s | 1 |  |
| 10:33:43 | 167 | 106 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 28s | 1 |  |
| 10:33:43 | 168 | 107 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 28s | 1 |  |
| 10:33:43 | 169 | 108 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 28s | 1 |  |
| 10:33:43 | 170 | 109 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 28s | 1 |  |
| 10:34:21 | 171 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 36s | 1 | main expired |
| 10:34:21 | 172 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 36s | 1 | main expired |
| 10:34:21 | 173 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 36s | 1 | main expired |
| 10:33:58 | 174 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 22s | 1 |  |
| 10:34:22 | 175 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 36s | 1 | main expired |
| 10:34:22 | 176 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 37s | 1 | main expired |
| 10:34:22 | 177 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 37s | 1 | main expired |
| 10:33:59 | 178 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 12s | 1 |  |
| 10:34:22 | 179 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 37s | 1 | main expired |
| 10:34:22 | 180 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 37s | 1 | main expired |
| 10:34:26 | 181 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 35s | 1 | main expired |
| 10:34:00 | 182 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | filled | 28s | 1 |  |
| 10:34:23 | 183 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 37s | 1 | main expired |
| 10:34:23 | 184 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 36s | 1 | main expired |
| 10:34:23 | 185 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 37s | 1 | main expired |

### Rows without an order

3 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |

Scenario orders: 184 (176 main, 8 acquire). Cleanup placed 84 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 10:15:19 | 1 | USDC → SOL (native) | Executed | `0x39adb7f7…` [🐞](https://debug.barn.cow.fi/order/0x39adb7f7bae365d9e799b664ccb6aaefb679e9bc7ec07f1e41ad416fe1d286d7) |
| 10:15:20 | 2 | USDT → SOL (native) | Executed | `0xe7ef946d…` [🐞](https://debug.barn.cow.fi/order/0xe7ef946dfa0b67e623c42efc0576abb3e763f026d021df865880162a644b8307) |
| 10:15:21 | 3 | USDC → SOL (native) | Executed | `0x72aa97bf…` [🐞](https://debug.barn.cow.fi/order/0x72aa97bf987a78c4e3fa7759435f0d296119b6f652aa4c39e4803026f6f5aed7) |
| 10:16:56 | 5 | JUP → SOL (native) | Executed | `0x034a4865…` [🐞](https://debug.barn.cow.fi/order/0x034a4865c3694895fe67b7f14b5a59ff0eff64d28f3618faec78c81cd2b94f2e) |
| 10:16:57 | 6 | JUP → SOL (native) | Executed | `0x4b100a01…` [🐞](https://debug.barn.cow.fi/order/0x4b100a01e12cd04229fe54772df7f11f171c06e0b5dc0e2e97fac73ef1b9b568) |
| 10:16:58 | 7 | JUP → SOL (native) | Executed | `0x939319b5…` [🐞](https://debug.barn.cow.fi/order/0x939319b5405e8936aca2331b032d18ec7c0044a2fb4963a1565918aa8cefe289) |
| 10:16:59 | 8 | JUP → SOL (native) | Executed | `0xb80c7de2…` [🐞](https://debug.barn.cow.fi/order/0xb80c7de28d9a0f24f7248c1721cbc9e3331bb87ef2f4b32d3f029fbe0da050ba) |
| 10:16:59 | 9 | JUP → SOL (native) | Executed | `0x803521ec…` [🐞](https://debug.barn.cow.fi/order/0x803521ec9d047ebbe20a9a3bd3033ecaae6a6e67bc2e4202fe6d7e5ad8fb34e5) |
| 10:17:01 | 10 | JUP → SOL (native) | Executed | `0xc460cb7e…` [🐞](https://debug.barn.cow.fi/order/0xc460cb7eab686d26fb53f9c69b55fa8226a45c8b3a62e7c979bc1388cb0f5df6) |
| 10:17:01 | 11 | JUP → SOL (native) | Executed | `0x327b058b…` [🐞](https://debug.barn.cow.fi/order/0x327b058b76d8ca37f363a00f6376db6d6de9cc130867298f9adb7ec024278f96) |
| 10:17:03 | 12 | JUP → SOL (native) | Executed | `0xa688c298…` [🐞](https://debug.barn.cow.fi/order/0xa688c298a8577b5efa4022af4d7350d3894367c98cf724265de6936b70c1f4e3) |
| 10:17:04 | 13 | JUP → SOL (native) | Executed | `0x346dd552…` [🐞](https://debug.barn.cow.fi/order/0x346dd552ce062961762ccdb1818203bf0a5773f4a366b68b0a961627f430ce11) |
| 10:17:09 | 4 | JUP → SOL (native) | Executed | `0x6ec53af6…` [🐞](https://debug.barn.cow.fi/order/0x6ec53af67115db2bdb178e65499baf723dbba0535d671bc7734fbdb331aed6fc) |
| 10:17:22 | 14 | JUP → SOL (native) | Executed | `0xf1ea9e44…` [🐞](https://debug.barn.cow.fi/order/0xf1ea9e44bbbb24055249e1d5be0456e67d369fb979b2c95ec4d3c16bf2e449e4) |
| 10:17:29 | 16 | JUP → SOL (native) | Executed | `0xd74dea5f…` [🐞](https://debug.barn.cow.fi/order/0xd74dea5f1fa2640bef8f80e3355109d96fb0ffe5a0ccf3483cc34d117bb36978) |
| 10:17:32 | 15 | JUP → SOL (native) | Executed | `0x2196a716…` [🐞](https://debug.barn.cow.fi/order/0x2196a716c97ba1c523d26add074fdca3ad53859fec88c282946346de9025d496) |
| 10:17:35 | 19 | JUP → SOL (native) | Executed | `0xef2cd3c2…` [🐞](https://debug.barn.cow.fi/order/0xef2cd3c29a5bd510498d71e8755ec3126f12c76e9d94958cffba8d22f0bcfe69) |
| 10:17:38 | 17 | JUP → SOL (native) | Executed | `0xfe4d8d5e…` [🐞](https://debug.barn.cow.fi/order/0xfe4d8d5ea930016ceec46fb2dbec9939e6c5c05dcc58582e00bde2b6ff5a7a30) |
| 10:17:39 | 20 | JUP → SOL (native) | Executed | `0x5ffd9370…` [🐞](https://debug.barn.cow.fi/order/0x5ffd9370c96df97aec16eb9f803c63f61de22ce7f5b149838e8c235e090f616f) |
| 10:17:41 | 18 | JUP → SOL (native) | Executed | `0x2bcf4c95…` [🐞](https://debug.barn.cow.fi/order/0x2bcf4c95d8d92c209c3299217b836adbdffd5a52e131fab6815cc535a304d29a) |
| 10:17:44 | 21 | JUP → SOL (native) | Executed | `0xc7a0e432…` [🐞](https://debug.barn.cow.fi/order/0xc7a0e432a8e283a0b9e9942c3f3cb5996d3d0fa1cfdc34684be49cb2d0b8c626) |
| 10:17:48 | 23 | JUP → SOL (native) | Executed | `0x3ab91c07…` [🐞](https://debug.barn.cow.fi/order/0x3ab91c0758b7d68f474d9936a7204a1032e118b1c9332f6bdc636bc86aa64620) |
| 10:17:50 | 22 | JUP → SOL (native) | Executed | `0xb403b01e…` [🐞](https://debug.barn.cow.fi/order/0xb403b01e5f58917025514fa96dc80838eacd4766e9dbd30e31091a535c448711) |
| 10:17:53 | 24 | JUP → SOL (native) | Executed | `0xe07c161b…` [🐞](https://debug.barn.cow.fi/order/0xe07c161bc790d432b6e095303955318fd0db140d0d32ffb8597a57106615ea47) |
| 10:18:08 | 25 | JUP → SOL (native) | Executed | `0xa1dd87ea…` [🐞](https://debug.barn.cow.fi/order/0xa1dd87ea304daf6b74aecc1eacfecbbeffb8899d8747eb0ae260d37163800a15) |
| 10:18:21 | 26 | JUP → SOL (native) | Executed | `0x391f9457…` [🐞](https://debug.barn.cow.fi/order/0x391f9457e6655cb71323ef905b12ec866a740d57809a71c713316671a2613bc2) |
| 10:18:26 | 28 | JUP → SOL (native) | Executed | `0xe91876d8…` [🐞](https://debug.barn.cow.fi/order/0xe91876d87528b4d028f770f9f54dc0856908b9cabc633d9c37f6786eec1d3252) |
| 10:18:29 | 27 | JUP → SOL (native) | Executed | `0xc5d9e9b1…` [🐞](https://debug.barn.cow.fi/order/0xc5d9e9b143440bf5709c06a6f2988399bae260ce2802befb932348a6a5399347) |
| 10:26:49 | 30 | USDC → SOL (native) | Executed | `0x521b67be…` [🐞](https://debug.barn.cow.fi/order/0x521b67be861344f7eb6358e5af9a4d8de3af82ee580f2a2c5e5c21eb3cf4f833) |
| 10:26:50 | 31 | USDC → SOL (native) | Executed | `0x1057a943…` [🐞](https://debug.barn.cow.fi/order/0x1057a94389776c06cec188089e38ce6f3ac82d52dafa5e3c423a0e6c3f0578f4) |
| 10:26:51 | 32 | USDC → SOL (native) | Executed | `0xb7bd8aed…` [🐞](https://debug.barn.cow.fi/order/0xb7bd8aedf2c6f320cb067eaeaa375a9562599d06f45b74130839a66d07d5014e) |
| 10:26:52 | 33 | USDC → SOL (native) | Executed | `0xa4d05bc4…` [🐞](https://debug.barn.cow.fi/order/0xa4d05bc4bef7318fa6107ffb120116cefa6bfffe2afd3c15620e1f50f7eff5d4) |
| 10:26:53 | 34 | USDC → SOL (native) | Executed | `0x5ed73e70…` [🐞](https://debug.barn.cow.fi/order/0x5ed73e70f1ab13c2afb3c3455f3b76b13722466dfab7cb335b481cb2b7e14c52) |
| 10:26:54 | 35 | USDC → SOL (native) | Executed | `0xdd1ffa7f…` [🐞](https://debug.barn.cow.fi/order/0xdd1ffa7fdba60b2364a1bb6d0e1b0ddf756a185d42d0e454f0eb22b5dc6744a8) |
| 10:26:56 | 36 | USDC → SOL (native) | Executed | `0x1770596d…` [🐞](https://debug.barn.cow.fi/order/0x1770596db42adcc86f31507fb186019426fbd6641b908148ca7b0f33fa002f35) |
| 10:26:57 | 37 | USDC → SOL (native) | Executed | `0x609f18cd…` [🐞](https://debug.barn.cow.fi/order/0x609f18cda52f7c2b330c196730b783e1783365682068b5f3a0ea80063030ab84) |
| 10:26:57 | 38 | USDC → SOL (native) | Executed | `0xc5c084b3…` [🐞](https://debug.barn.cow.fi/order/0xc5c084b3851a0106b838a4c5a3163bc305b933606aac20082822227a20577173) |
| 10:27:00 | 29 | USDC → SOL (native) | Executed | `0x6bc03ec8…` [🐞](https://debug.barn.cow.fi/order/0x6bc03ec8ee52ca875bf8e0610dfd1afa8e7306a055c7f4f0e4a178b48b707003) |
| 10:27:14 | 39 | USDC → SOL (native) | Executed | `0x8bc5991c…` [🐞](https://debug.barn.cow.fi/order/0x8bc5991cc3d7d61c005df2c2c704f3138a3eb70e89445179ef8ce01a38c92d2b) |
| 10:27:19 | 40 | USDC → SOL (native) | Executed | `0x024515fa…` [🐞](https://debug.barn.cow.fi/order/0x024515fabd2be9c541e2f0e24e6a60e15209ba44ddaa8e4c14b2bcff17517400) |
| 10:27:26 | 41 | USDC → SOL (native) | Executed | `0xb6def26c…` [🐞](https://debug.barn.cow.fi/order/0xb6def26c1d42adaa77f4a145f6023caf7781b797020d158a23af74a60e7a335b) |
| 10:27:30 | 42 | USDC → SOL (native) | Executed | `0xeb695224…` [🐞](https://debug.barn.cow.fi/order/0xeb6952249b39073fed84369562925088a8ae117457d292c6971218da9c17744f) |
| 10:27:32 | 44 | USDC → SOL (native) | Executed | `0xf1e67101…` [🐞](https://debug.barn.cow.fi/order/0xf1e6710101773a3cfc550008813b9548b5e3413a7e566323eb8765bd6603304c) |
| 10:27:33 | 43 | USDC → SOL (native) | Executed | `0x46a4dbd2…` [🐞](https://debug.barn.cow.fi/order/0x46a4dbd2836158001f5f3d59a7aaf50548fe8e60975d572554b741384dd3e251) |
| 10:27:33 | 45 | USDC → SOL (native) | Executed | `0x1ab28e85…` [🐞](https://debug.barn.cow.fi/order/0x1ab28e859be25318d52dd213ee472fb853d92aee60d858c2d1ef117d1f922714) |
| 10:27:36 | 47 | USDC → SOL (native) | Executed | `0xe130c4f7…` [🐞](https://debug.barn.cow.fi/order/0xe130c4f732b15cddf8b71ea65fcc79449537f69245d11f299db0349ce0cd8573) |
| 10:27:37 | 46 | USDC → SOL (native) | Executed | `0xd19fc86e…` [🐞](https://debug.barn.cow.fi/order/0xd19fc86ee62e0cc0ef961f6119a6654d24092845d8748cb8940941d54540ae49) |
| 10:27:39 | 48 | USDC → SOL (native) | Executed | `0xcfb156c4…` [🐞](https://debug.barn.cow.fi/order/0xcfb156c405995098185ad8803edd891ce0eb9b4ca66bcb6489b73434d0a42b1e) |
| 10:27:51 | 50 | USDC → SOL (native) | Executed | `0x7ad0ac0f…` [🐞](https://debug.barn.cow.fi/order/0x7ad0ac0f99fefcc998ed3afbcb32cbd5d13615e4e79e39dde5f823487b2e0945) |
| 10:27:58 | 49 | USDC → SOL (native) | Executed | `0xc4fba1b5…` [🐞](https://debug.barn.cow.fi/order/0xc4fba1b547843f2d0e57840af327aac9d380e6cd5facf5fb68a4b535aa8ef801) |
| 10:28:10 | 51 | USDC → SOL (native) | Executed | `0xa0978f13…` [🐞](https://debug.barn.cow.fi/order/0xa0978f13b2e933fa794404917d50ed61e7933e55c4b259411d3275abcd29b8a9) |
| 10:28:10 | 52 | USDC → SOL (native) | Executed | `0x3f99fe48…` [🐞](https://debug.barn.cow.fi/order/0x3f99fe489a1df37d95a4a0ddc9808cfbc9ce044a5a0be7fdb8ce3c4d9220a95b) |
| 10:28:12 | 53 | USDC → SOL (native) | Executed | `0x8a8c1e46…` [🐞](https://debug.barn.cow.fi/order/0x8a8c1e466816fbe60dff24c404399887fb8a787cec86bca276bd76a5430a3134) |
| 10:28:31 | 58 | USDC → SOL (native) | Executed | `0x7fe2e4f7…` [🐞](https://debug.barn.cow.fi/order/0x7fe2e4f75323b1716e49b88367b17f6a95bf53897331ca2de54824fc03c73a11) |
| 10:28:31 | 57 | USDC → SOL (native) | Executed | `0x80b6503b…` [🐞](https://debug.barn.cow.fi/order/0x80b6503be3f79ab31521631640be68e6408db878cfaf1a998c84e172777dbc03) |
| 10:28:32 | 55 | USDC → SOL (native) | Executed | `0xf5b57767…` [🐞](https://debug.barn.cow.fi/order/0xf5b5776744dd59b8af856bb8c1595108a440298384f7794e42f59fa3ccb9ddad) |
| 10:28:36 | 56 | USDC → SOL (native) | Executed | `0x9459fe10…` [🐞](https://debug.barn.cow.fi/order/0x9459fe103ed6c16df65873cb520ea33fb0e6d7bf14887cbceb8f07b1dc0ffea4) |
| 10:28:36 | 59 | USDC → SOL (native) | Executed | `0x7b30dbcf…` [🐞](https://debug.barn.cow.fi/order/0x7b30dbcf2225788b413751f63b4a49b544ebe7e617361d1e3806c7acb5b607fe) |
| 10:28:37 | 54 | USDC → SOL (native) | Executed | `0xe4e530e5…` [🐞](https://debug.barn.cow.fi/order/0xe4e530e57414ed5f9f7ea39ffc04378861b3249ca621e973ddf72607749b8cee) |
| 10:28:39 | 60 | USDC → SOL (native) | Executed | `0xfb21d7e0…` [🐞](https://debug.barn.cow.fi/order/0xfb21d7e0c315673fff617931ea73b9edfe3665c289f40da5f463b71e91bc3923) |
| 10:35:11 | 73 | PUMP → SOL (native) | Executed | `0x7426e819…` [🐞](https://debug.barn.cow.fi/order/0x7426e81971999b51e08f1309a08b804b77085d5c40b0cca8eacce7d5f743c72c) |
| 10:35:15 | 77 | SPYx → SOL (native) | Executed | `0x2c45d233…` [🐞](https://debug.barn.cow.fi/order/0x2c45d2338021ec095d281ed138679992ae9ccb05dd14250c2bf13c7cf60f6ebd) |
| 10:35:21 | 81 | MU → SOL (native) | Executed | `0x670e8ae4…` [🐞](https://debug.barn.cow.fi/order/0x670e8ae4a81a95193e92fdc1479b15ddb2ab6ecb15e5c575468d5620a1eea272) |
| 10:35:30 | 89 | $WIF → SOL (native) | Executed | `0x2eda4d9b…` [🐞](https://debug.barn.cow.fi/order/0x2eda4d9b0c901b04e1b31d2651784beabff8e9294a9a18b2d3457788b952caea) |
| 10:35:36 | 90 | POPCAT → SOL (native) | Executed | `0xeb4a894d…` [🐞](https://debug.barn.cow.fi/order/0xeb4a894d84b01e116f0cf1772122feeaa817db079e1944c9bd54023ad2c73f49) |
| 10:35:39 | 88 | Bonk → SOL (native) | Executed | `0x6d4b0577…` [🐞](https://debug.barn.cow.fi/order/0x6d4b057758da54eac66f05f1d686fcdc70cc7ef90757e4ce8c67d2248a0571a9) |
| 10:35:40 | 91 | JitoSOL → SOL (native) | Executed | `0xff6fbdb8…` [🐞](https://debug.barn.cow.fi/order/0xff6fbdb84f1b65a7882c70477862119ffa04235947dbaea0b5fcf08e9e9ea857) |
| 10:35:41 | 94 | cbBTC → SOL (native) | Executed | `0xdbe1f248…` [🐞](https://debug.barn.cow.fi/order/0xdbe1f2480a194afe17d48966ccd5b783208435eba950c9015cc731ac6d5602d4) |
| 10:35:42 | 92 | mSOL → SOL (native) | Executed | `0x234e3a9e…` [🐞](https://debug.barn.cow.fi/order/0x234e3a9e89ba15be31358b1effefa4b29934941d2ee6477ead369f2d88d1f796) |
| 10:35:46 | 93 | JupSOL → SOL (native) | Executed | `0x80cc2380…` [🐞](https://debug.barn.cow.fi/order/0x80cc23807b6d3066e0582615782fb32b3d4ca673be567ccadb4780b2a71f1229) |
| 10:35:50 | 96 | EURC → SOL (native) | Executed | `0x39cd806a…` [🐞](https://debug.barn.cow.fi/order/0x39cd806af18ec7d2adf974c4a7943e14e26b044c41a2f026cfb04ef1906cd0ee) |
| 10:35:50 | 95 | USDe → SOL (native) | Executed | `0x16f3c6b7…` [🐞](https://debug.barn.cow.fi/order/0x16f3c6b7fe6a601a4003f7e11ab7d4fe0bd1950b7db577d49548dac9140d7d40) |
| 10:36:01 | 97 | USDY → SOL (native) | Executed | `0xc6330b7e…` [🐞](https://debug.barn.cow.fi/order/0xc6330b7e719a33f2709f2d36cbdf29fec851a701bdcf9f625c1dc599499d7969) |
| 10:36:04 | 99 | INF → SOL (native) | Executed | `0xb10e4a94…` [🐞](https://debug.barn.cow.fi/order/0xb10e4a94a7bf629d99e72b4b7a7bcff77157e86ad4b448b35a384bed7531ef30) |
| 10:36:04 | 98 | JLP → SOL (native) | Executed | `0xc1a17631…` [🐞](https://debug.barn.cow.fi/order/0xc1a176311ea8ee890a14c69d9ac09151dad2162cbe34564d5912532b4d5ac7bf) |
| 10:36:10 | 100 | ETH → SOL (native) | Executed | `0x841dc93b…` [🐞](https://debug.barn.cow.fi/order/0x841dc93b99600a84594536e6479481c7ace0786cab386d59b7a645a30232c236) |
| 10:36:17 | 101 | BNB → SOL (native) | Executed | `0x2d55c30a…` [🐞](https://debug.barn.cow.fi/order/0x2d55c30a635d76e3ca6ac0b24cb8c4069fdf508a91ef0c7f9cc1a44593a69024) |
| 10:36:22 | 103 | GLDx → SOL (native) | Executed | `0x58f3ea11…` [🐞](https://debug.barn.cow.fi/order/0x58f3ea11d5683253485e1b06a270865ba789b78e7dea0409988aca017b00c100) |
| 10:36:24 | 104 | EUROP → SOL (native) | Executed | `0x48edf341…` [🐞](https://debug.barn.cow.fi/order/0x48edf3414f5d27eb90e0745471e54ce883582c8d09df0580a29681348b0755d4) |
| 10:36:28 | 106 | MEW → SOL (native) | Executed | `0x1357f601…` [🐞](https://debug.barn.cow.fi/order/0x1357f6015861b157d9d1bb1826c9959790d8036aded4a18cf78d9c9ad0567bd2) |
| 10:36:31 | 105 | Fartcoin → SOL (native) | Executed | `0x59b0af4f…` [🐞](https://debug.barn.cow.fi/order/0x59b0af4fa46dcf250508a12ee85138cf1548fdfe1908ffdcd4411330ab62010e) |
| 10:36:34 | 109 | PSOL → SOL (native) | Executed | `0xf350870b…` [🐞](https://debug.barn.cow.fi/order/0xf350870beeab13c4729810a848cb91de27d4dd517d4ab6d9f695df0a0b4ffb4e) |
| 10:36:37 | 108 | hyloSOL → SOL (native) | Executed | `0xfa86f2c3…` [🐞](https://debug.barn.cow.fi/order/0xfa86f2c3744e163d761b2dd869e7b0a97fa89b797dbec4239cea612eeae2aac4) |
| 10:36:39 | 107 | BOME → SOL (native) | Executed | `0x617771b0…` [🐞](https://debug.barn.cow.fi/order/0x617771b0ff7ffc70ae3944acaf7b299442be8979620767ecdc3bfc6050eb8d53) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 144 | 78.3% |
| expired: never created on-chain (winner found, creation blockhash expired) | 39 | 21.2% |
| cancelled | 1 | 0.5% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 13s | 18s | 25s | 62s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| fractal | 144 | 100.0% | 64 | 84,337 | 13s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| fractal | 312 | 113 | 113 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 273 times
- Orders filtered for `in_flight`: 78 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 160 | 138 | 86.2% |
| buy | 24 | 6 | 25.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 96 | 86 | 89.6% |
| wSOL → JUP | 28 | 27 | 96.4% |
| wSOL → USDT | 6 | 2 | 33.3% |
| JUP → USDC | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 0 | 0.0% |
| wSOL → PAID | 2 | 0 | 0.0% |
| wSOL → USDG | 2 | 0 | 0.0% |
| wSOL → PYUSD | 2 | 0 | 0.0% |
| wSOL → CASH | 2 | 0 | 0.0% |
| wSOL → CRCLx | 2 | 0 | 0.0% |
| wSOL → USDv | 2 | 0 | 0.0% |
| wSOL → SKHY | 2 | 0 | 0.0% |
| wSOL → NVDAx | 2 | 0 | 0.0% |
| wSOL → SPCX | 2 | 0 | 0.0% |
| wSOL → TSLAx | 2 | 0 | 0.0% |
| wSOL → SPCXx | 2 | 0 | 0.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 0 | 0.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 5 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 5 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 5 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 5 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 4 | 4 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 4 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 4 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 4 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 4 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 3 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 3 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 3 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 3 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 2 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 2 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 0 | 0.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 0 | 0.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 0 | 0.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 0 | 0.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 0 | 0.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 0 | 0.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 2 | 0 | 0.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 2 | 0 | 0.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 0 | 0.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 0 | 0.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 0 | 0.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 0 | 0.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 2 | 0 | 0.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 2 | 0 | 0.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 0 | 0.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 2 | 0 | 0.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 2 | 0 | 0.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 2 | 0 | 0.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 2 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 2 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
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
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 0 | 0.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 0 | 0.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 0 | 0.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 0 | 0.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 39 |
| Not filled within fill timeout (cancelled by sim) | 1 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 10:29:36 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x0bfd911c…` [🐞](https://debug.barn.cow.fi/order/0x0bfd911ccfd9400b780aa8e1ce1b0ee7272a560db9b047c0a08a47605b8199bc) |
| 10:29:36 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xfb7b8b8e…` [🐞](https://debug.barn.cow.fi/order/0xfb7b8b8e9cfb144fba32617476e9137faf76ac8aa0ac2bb7f8fff476fa282947) |
| 10:29:36 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x9b817564…` [🐞](https://debug.barn.cow.fi/order/0x9b81756440e132d2e420567ad42a339c1542ba81de46fea11ad31c7e6c2e5556) |
| 10:29:36 | wSOL → USDT | buy | Winner too late: creation blockhash expired | `0xf38a6755…` [🐞](https://debug.barn.cow.fi/order/0xf38a6755950af2892e55aab18528f92213494985e1fb6a2f39414b1f66dfe6b7) |
| 10:29:36 | wSOL → USDT | buy | Winner too late: creation blockhash expired | `0x061da012…` [🐞](https://debug.barn.cow.fi/order/0x061da012edef7c54d5e99b8363e7acca6152111c9141338d684f08a7e2964430) |
| 10:29:37 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x90e91d3c…` [🐞](https://debug.barn.cow.fi/order/0x90e91d3ca147e8c92fe6dc57913126c879a18e0cc5bcac2398188fb6b4ffa423) |
| 10:32:05 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x4f37c635…` [🐞](https://debug.barn.cow.fi/order/0x4f37c635452dc4d0c75c9fb75d1c7432c616303b33c882a7e0a7f30e2e481e16) |
| 10:32:05 | wSOL → JUP | sell | Winner too late: creation blockhash expired | `0xb67b9699…` [🐞](https://debug.barn.cow.fi/order/0xb67b9699192af613aa5dd4cf3d45753bd24cdfa3ccadd17713d6e988d4a667d3) |
| 10:32:05 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xece9840b…` [🐞](https://debug.barn.cow.fi/order/0xece9840b3030f9c280d06953fc99488da7088242b860724ca1f643a192b5c5bc) |
| 10:32:12 | wSOL → USDT | sell | Winner too late: creation blockhash expired | `0x22e09969…` [🐞](https://debug.barn.cow.fi/order/0x22e099692623cdd06ea033a546e204e0fb8eafc056905e4d7d9ede21f658ab35) |
| 10:32:12 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xb3c7b927…` [🐞](https://debug.barn.cow.fi/order/0xb3c7b927be968383c2a661de8d9e27fa5ac21b41d71d8d1a903de9cf28e3e4c5) |
| 10:32:12 | wSOL → USDT | sell | Winner too late: creation blockhash expired | `0x12f42d9e…` [🐞](https://debug.barn.cow.fi/order/0x12f42d9ed1b8bc3bfe8f51eff2a6da2ea4dd0a4541667bbfa6f9389a5ffffd35) |
| 10:32:12 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xf2ce1ab3…` [🐞](https://debug.barn.cow.fi/order/0xf2ce1ab38e703e8d857177d67b3dd7c27759879923ab0821f93e33ba93d8744f) |
| 10:32:12 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x71e4f932…` [🐞](https://debug.barn.cow.fi/order/0x71e4f932844805cf60a3333b34a95d53c582be6e274c8c816048992ef2034b2f) |
| 10:32:13 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x7739a31f…` [🐞](https://debug.barn.cow.fi/order/0x7739a31f72357c094b3e60f58ef0fee94d6662acf2801f5056388b5b0c02dee7) |
| 10:33:47 | wSOL → ANSEM | sell | Winner too late: creation blockhash expired | `0x929df996…` [🐞](https://debug.barn.cow.fi/order/0x929df9968464a44fdb4d495fe8943cf13bf1e271d9b9aeacf457fdc18e189db8) |
| 10:33:47 | wSOL → PAID | sell | Winner too late: creation blockhash expired | `0x7c2b5024…` [🐞](https://debug.barn.cow.fi/order/0x7c2b5024ef829a014eb37ccc11143402e80819639931cb43987b0a4142f6886a) |
| 10:33:47 | wSOL → USDG | sell | Winner too late: creation blockhash expired | `0xfa8fe4a8…` [🐞](https://debug.barn.cow.fi/order/0xfa8fe4a80c90851cbf5c9afb80446f9cb7c410609e2b72b2d641f23f6a2852e5) |
| 10:33:48 | wSOL → PYUSD | sell | Winner too late: creation blockhash expired | `0x5be9592a…` [🐞](https://debug.barn.cow.fi/order/0x5be9592a25aea344c5996aa604ae2e8faf2d06bfd64e3159fc96edf15ec3a4e6) |
| 10:33:48 | wSOL → CASH | sell | Winner too late: creation blockhash expired | `0x6adf7994…` [🐞](https://debug.barn.cow.fi/order/0x6adf7994ed035e547c6f5095c653dad060b10b6ff71ce3f4cb29f6ab685e634e) |
| 10:33:48 | wSOL → CRCLx | sell | Winner too late: creation blockhash expired | `0xb480de87…` [🐞](https://debug.barn.cow.fi/order/0xb480de8724f43bff605116b8c6c9eed5335fcc6b8658154f9c2beb83f3b9d1d7) |
| 10:33:48 | wSOL → USDv | sell | Winner too late: creation blockhash expired | `0xf647b34b…` [🐞](https://debug.barn.cow.fi/order/0xf647b34b94c09b190e4583ef3b477b1bfa8460266db3ffa6d2f8e69e42a1841d) |
| 10:33:48 | wSOL → SKHY | sell | Winner too late: creation blockhash expired | `0xa2d983e5…` [🐞](https://debug.barn.cow.fi/order/0xa2d983e5092756167d64d7de7d358ff9922ade00c8e837ca2b0fcf5ef1502d6b) |
| 10:33:48 | wSOL → NVDAx | sell | Winner too late: creation blockhash expired | `0x050e587e…` [🐞](https://debug.barn.cow.fi/order/0x050e587e103541d38d67b1c9722a0b3926ecb654b4b5d2dfcface811d4e615c9) |
| 10:33:48 | wSOL → SPCX | sell | Winner too late: creation blockhash expired | `0x0065e3d5…` [🐞](https://debug.barn.cow.fi/order/0x0065e3d5e376bf57c57aeb7e7f1f76b4204b35ecd679f173a0b10c329bad4ee3) |
| 10:33:49 | wSOL → TSLAx | sell | Winner too late: creation blockhash expired | `0x491ac394…` [🐞](https://debug.barn.cow.fi/order/0x491ac3946c0e8351bd83414817207306b59d78e091be3c21133fc5cb30eb8cbe) |
| 10:33:49 | wSOL → SPCXx | sell | Winner too late: creation blockhash expired | `0x1304e77d…` [🐞](https://debug.barn.cow.fi/order/0x1304e77d16c4d5d9d842d4d4dc7eca4377705cae53ab11636a33ab5657b4b7f4) |
| 10:33:54 | wSOL → XAUt0 | sell | Not filled within fill timeout (cancelled by sim) | `0x703045c6…` [🐞](https://debug.barn.cow.fi/order/0x703045c66d7f1073032686757308197a882ca4b70796f40fa3bcee9a12dfebf1) |
| 10:34:22 | wSOL → ANSEM | buy | Winner too late: creation blockhash expired | `0xc8f44ad8…` [🐞](https://debug.barn.cow.fi/order/0xc8f44ad88526b95420d49309325ff8218e69f1ba25b41db0c985b5f63224fed7) |
| 10:34:22 | wSOL → PAID | buy | Winner too late: creation blockhash expired | `0x7a76b86d…` [🐞](https://debug.barn.cow.fi/order/0x7a76b86d121c9e72c9a44af8a9e993903464edb2ff77d838a4ec8aab5a9231c9) |
| 10:34:23 | wSOL → USDG | buy | Winner too late: creation blockhash expired | `0xb9cd7507…` [🐞](https://debug.barn.cow.fi/order/0xb9cd750780078c0a456162e4d3d50cc4526259d09d346b2266dc5a236f54b7b3) |
| 10:34:23 | wSOL → PYUSD | buy | Winner too late: creation blockhash expired | `0xfb435cf7…` [🐞](https://debug.barn.cow.fi/order/0xfb435cf779c1b38d34d8733bbdfc42afc2d486c1f08c365e9dbb2b52ffc1e7f5) |
| 10:34:24 | wSOL → CRCLx | buy | Winner too late: creation blockhash expired | `0x558d22cf…` [🐞](https://debug.barn.cow.fi/order/0x558d22cfaf2ace670c8b59fa86dda950f27fff9efe94c60b29268686bcdb015c) |
| 10:34:24 | wSOL → CASH | buy | Winner too late: creation blockhash expired | `0x23a03b84…` [🐞](https://debug.barn.cow.fi/order/0x23a03b84917625d0d3d6c28bfeb0b11160e19306cf380f2b261722d1dfbe0f19) |
| 10:34:25 | wSOL → USDv | buy | Winner too late: creation blockhash expired | `0x3f5a83e9…` [🐞](https://debug.barn.cow.fi/order/0x3f5a83e92f965d8b89b1f402d9411f11cc569a89bcd1266470b58c1ef7079d20) |
| 10:34:25 | wSOL → SKHY | buy | Winner too late: creation blockhash expired | `0x78a483b9…` [🐞](https://debug.barn.cow.fi/order/0x78a483b984395940f71db0f412b8954914979ef1b55585a9b4ccc91169c66518) |
| 10:34:25 | wSOL → SPCX | buy | Winner too late: creation blockhash expired | `0xca6de05b…` [🐞](https://debug.barn.cow.fi/order/0xca6de05b94d6733069a22e3c5c595deb8f089bec1b5aa8b040aac5248c045719) |
| 10:34:25 | wSOL → TSLAx | buy | Winner too late: creation blockhash expired | `0x4c29abf2…` [🐞](https://debug.barn.cow.fi/order/0x4c29abf21f430a12f5270b3a74eec5a22107c386795ef22f1256e33e99c1dfcc) |
| 10:34:25 | wSOL → SPCXx | buy | Winner too late: creation blockhash expired | `0x055593e9…` [🐞](https://debug.barn.cow.fi/order/0x055593e9752baf61a0c0cea6ead6504567f5bc5acdca5166d80f2beeb5c15f0c) |
| 10:34:27 | wSOL → NVDAx | buy | Winner too late: creation blockhash expired | `0x541bb7d7…` [🐞](https://debug.barn.cow.fi/order/0x541bb7d723bbc7a646f17c8dc57bcb40a54059135d6b93e309b7dfb4da86f28c) |
