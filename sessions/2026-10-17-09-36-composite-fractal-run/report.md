# Solana QoS report: 2026-10-17-09-36-composite-fractal-run

Barn, orders created between `2026-10-17T09:37:27.581Z` and `2026-10-17T10:09:00.782Z`. Data fetched 2026-10-17T10:13:37+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 192 |
| Orders executed | **192** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 114 |
| Settlement txs | 94 |

## Scenario results

Target solver: `fractal`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-17T09:37:27.581Z | 2026-10-17T09:38:23.890Z | 6/6 | 0 | 8 | 8 | 100.0% |
| solver-same-direction-25 | 2026-10-17T09:39:22.201Z | 2026-10-17T09:39:57.346Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-17T09:42:29.005Z | 2026-10-17T09:49:10.954Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-cow | 2026-10-17T09:52:00.775Z | 2026-10-17T09:54:45.828Z | 15/15 | 0 | 15 | 15 | 100.0% |
| solver-token-coverage | 2026-10-17T09:56:03.529Z | 2026-10-17T09:56:40.091Z | 52/55 | 3 | 52 | 52 | 94.5% |
| solver-fresh-accounts | 2026-10-17T10:00:04.338Z | 2026-10-17T10:00:29.950Z | 8/8 | 0 | 8 | 8 | 100.0% |

## Scenario

190 of 193 scenario rows completed. 0 retries, 3 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 09:37:27 | 1 | 1 | sell 0.005 SOL → USDC | filled | 8s | 1 |  |
| 09:37:27 | 2 | 2 | sell 0.005 SOL → USDT | filled | 16s | 1 |  |
| 09:37:27 | 3 | 3 | sell 0.5 JUP → USDC | filled | 29s | 2 |  |
| 09:37:36 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 14s | 1 |  |
| 09:37:43 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 11s | 1 |  |
| 09:37:56 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 28s | 2 |  |
| 09:39:22 | 7 | 4 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:39:22 | 8 | 5 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 09:39:22 | 9 | 6 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 09:39:22 | 10 | 7 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 09:39:22 | 11 | 8 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 09:39:22 | 12 | 9 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:39:22 | 13 | 10 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 09:39:22 | 14 | 11 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:39:22 | 15 | 12 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 09:39:22 | 16 | 13 | sell 0.005 SOL → JUP | filled | 27s | 1 |  |
| 09:39:22 | 17 | 14 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:39:22 | 18 | 15 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 09:39:22 | 19 | 16 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 09:39:22 | 20 | 17 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:39:22 | 21 | 18 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:39:22 | 22 | 19 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 09:39:22 | 23 | 20 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 09:39:22 | 24 | 21 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 09:39:22 | 25 | 22 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 09:39:22 | 26 | 23 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 09:39:22 | 27 | 24 | sell 0.005 SOL → JUP | filled | 35s | 1 |  |
| 09:39:22 | 28 | 25 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:39:22 | 29 | 26 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:39:22 | 30 | 27 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:39:22 | 31 | 28 | sell 0.005 SOL → JUP | filled | 26s | 1 |  |
| 09:42:29 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 11s | 1 |  |
| 09:42:29 | 33 | 30 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 09:42:29 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 09:42:29 | 35 | 32 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 09:43:59 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 09:43:59 | 37 | 30 | sell 0.003 SOL → USDC | filled | 12s | 1 |  |
| 09:43:59 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 09:43:59 | 39 | 32 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 09:43:59 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 09:43:59 | 41 | 34 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 09:43:59 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 09:43:59 | 43 | 36 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 09:45:29 | 44 | 29 | sell 0.0025 SOL → USDC | filled | 24s | 1 |  |
| 09:45:29 | 45 | 30 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 09:45:29 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 09:45:29 | 47 | 32 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 09:45:29 | 48 | 33 | sell 0.0025 SOL → USDC | filled | 26s | 1 |  |
| 09:45:29 | 49 | 34 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 09:45:29 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 09:45:29 | 51 | 36 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 09:45:29 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 24s | 1 |  |
| 09:45:29 | 53 | 38 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 09:45:29 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 09:45:29 | 55 | 40 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 09:45:29 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 26s | 1 |  |
| 09:45:29 | 57 | 42 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 09:45:29 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 09:45:29 | 59 | 44 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:46:59 | 60 | 29 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 09:46:59 | 61 | 30 | sell 0.003 SOL → USDC | filled | 26s | 1 |  |
| 09:46:59 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 09:46:59 | 63 | 32 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 09:46:59 | 64 | 33 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 09:46:59 | 65 | 34 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 09:46:59 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 09:46:59 | 67 | 36 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 09:46:59 | 68 | 37 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 09:46:59 | 69 | 38 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 09:46:59 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 09:46:59 | 71 | 40 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:46:59 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 09:46:59 | 73 | 42 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 09:46:59 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 09:46:59 | 75 | 44 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:46:59 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 09:46:59 | 77 | 46 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 09:46:59 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 09:46:59 | 79 | 48 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 09:46:59 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 09:46:59 | 81 | 50 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 09:46:59 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 09:46:59 | 83 | 52 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 09:48:29 | 84 | 29 | sell 0.0025 SOL → USDC | filled | 34s | 1 |  |
| 09:48:29 | 85 | 30 | sell 0.003 SOL → USDC | filled | 31s | 1 |  |
| 09:48:29 | 86 | 31 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 09:48:29 | 87 | 32 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 09:48:29 | 88 | 33 | sell 0.0025 SOL → USDC | filled | 34s | 1 |  |
| 09:48:29 | 89 | 34 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 09:48:29 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 09:48:29 | 91 | 36 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 09:48:29 | 92 | 37 | sell 0.0025 SOL → USDC | filled | 41s | 1 |  |
| 09:48:29 | 93 | 38 | sell 0.003 SOL → USDC | filled | 29s | 1 |  |
| 09:48:29 | 94 | 39 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 09:48:29 | 95 | 40 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 09:48:29 | 96 | 41 | sell 0.0025 SOL → USDC | filled | 42s | 1 |  |
| 09:48:29 | 97 | 42 | sell 0.003 SOL → USDC | filled | 31s | 1 |  |
| 09:48:29 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 09:48:29 | 99 | 44 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 09:48:29 | 100 | 45 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 09:48:29 | 101 | 46 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 09:48:29 | 102 | 47 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 09:48:29 | 103 | 48 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 09:48:29 | 104 | 49 | sell 0.0025 SOL → USDC | filled | 34s | 1 |  |
| 09:48:29 | 105 | 50 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 09:48:29 | 106 | 51 | sell 0.0035 SOL → USDC | filled | 26s | 1 |  |
| 09:48:29 | 107 | 52 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 09:48:29 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 09:48:29 | 109 | 54 | sell 0.003 SOL → USDC | filled | 29s | 1 |  |
| 09:48:29 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 09:48:29 | 111 | 56 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 09:48:29 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 09:48:29 | 113 | 58 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 09:48:29 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 09:48:29 | 115 | 60 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 09:52:00 | 116 | 62 | buy 2.6 USDC ← SOL | filled | 15s | 1 |  |
| 09:52:00 | 117 | 64 | buy 1.3 USDC ← SOL | filled | 15s | 1 |  |
| 09:52:00 | 118 | 65 | buy 3.1 USDC ← SOL | filled | 15s | 1 |  |
| 09:52:00 | 119 | 66 | buy 3.1 USDT ← SOL | filled | 15s | 1 |  |
| 09:52:00 | 120 | 67 | buy 1.1 USDT ← SOL | filled | 15s | 1 |  |
| 09:52:00 | 121 | 68 | buy 3.2 USDC ← SOL | filled | 15s | 1 |  |
| 09:54:30 | 122 | 61 | sell 0.02 SOL → USDC | filled | 11s | 1 |  |
| 09:54:30 | 123 | 62 | buy 0.02 SOL ← USDC | filled | 15s | 1 |  |
| 09:54:30 | 124 | 63 | sell 0.03 SOL → USDC | filled | 11s | 1 |  |
| 09:54:30 | 125 | 64 | sell 1.2 USDC → SOL | filled | 12s | 1 |  |
| 09:54:30 | 126 | 65 | sell 3 USDC → USDT | filled | 11s | 1 |  |
| 09:54:30 | 127 | 66 | sell 3 USDT → USDC | filled | 11s | 1 |  |
| 09:54:30 | 128 | 67 | sell 1 USDT → USDC | filled | 12s | 1 |  |
| 09:54:30 | 129 | 68 | sell 3 USDC → USDT | filled | 15s | 1 |  |
| 09:54:30 | 130 | 69 | sell 0.02 SOL → JUP | filled | 11s | 1 |  |
| 09:56:03 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 16s | 1 |  |
| 09:56:03 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 16s | 1 |  |
| 09:56:03 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 16s | 1 |  |
| 09:56:03 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 21s | 1 |  |
| 09:56:03 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 16s | 1 |  |
| 09:56:03 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 17s | 1 |  |
| 09:56:03 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 12s | 1 |  |
| 09:56:03 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 21s | 1 |  |
| 09:56:03 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 12s | 1 |  |
| 09:56:03 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 23s | 1 |  |
| 09:56:03 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 23s | 1 |  |
| 09:56:03 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 22s | 1 |  |
| 09:56:03 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 19s | 1 |  |
| 09:56:03 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 23s | 1 |  |
| 09:56:03 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 19s | 1 |  |
| 09:56:03 | 146 | 85 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 09:56:03 | 147 | 86 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 09:56:03 | 148 | 87 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 4s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 09:56:03 | 149 | 88 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 18s | 1 |  |
| 09:56:03 | 150 | 89 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 23s | 1 |  |
| 09:56:03 | 151 | 90 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 19s | 1 |  |
| 09:56:03 | 152 | 91 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 20s | 1 |  |
| 09:56:03 | 153 | 92 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 20s | 1 |  |
| 09:56:03 | 154 | 93 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 20s | 1 |  |
| 09:56:03 | 155 | 94 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 21s | 1 |  |
| 09:56:03 | 156 | 95 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 21s | 1 |  |
| 09:56:03 | 157 | 96 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 21s | 1 |  |
| 09:56:03 | 158 | 97 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 22s | 1 |  |
| 09:56:03 | 159 | 98 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 22s | 1 |  |
| 09:56:03 | 160 | 99 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 22s | 1 |  |
| 09:56:03 | 161 | 100 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 23s | 1 |  |
| 09:56:03 | 162 | 101 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 23s | 1 |  |
| 09:56:03 | 163 | 102 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 23s | 1 |  |
| 09:56:03 | 164 | 103 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 24s | 1 |  |
| 09:56:03 | 165 | 104 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 24s | 1 |  |
| 09:56:03 | 166 | 105 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 24s | 1 |  |
| 09:56:03 | 167 | 106 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 24s | 1 |  |
| 09:56:03 | 168 | 107 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 24s | 1 |  |
| 09:56:03 | 169 | 108 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 24s | 1 |  |
| 09:56:03 | 170 | 109 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 25s | 1 |  |
| 09:56:19 | 171 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 13s | 1 |  |
| 09:56:19 | 172 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | filled | 13s | 1 |  |
| 09:56:19 | 173 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 15s | 1 |  |
| 09:56:24 | 174 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 14s | 1 |  |
| 09:56:19 | 175 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | filled | 13s | 1 |  |
| 09:56:20 | 176 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | filled | 13s | 1 |  |
| 09:56:15 | 177 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | filled | 14s | 1 |  |
| 09:56:25 | 178 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 13s | 1 |  |
| 09:56:15 | 179 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | filled | 14s | 1 |  |
| 09:56:26 | 180 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | filled | 13s | 1 |  |
| 09:56:26 | 181 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | filled | 13s | 1 |  |
| 09:56:25 | 182 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | filled | 13s | 1 |  |
| 09:56:22 | 183 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | filled | 18s | 1 |  |
| 09:56:26 | 184 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | filled | 13s | 1 |  |
| 09:56:22 | 185 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | filled | 17s | 1 |  |
| 10:00:04 | 186 | 110 | sell 0.1 SOL → USDC | filled | 21s | 1 |  |
| 10:00:04 | 187 | 111 | sell 0.1 SOL → USDC | filled | 21s | 1 |  |
| 10:00:04 | 188 | 112 | buy 10 USDC ← SOL | filled | 24s | 1 |  |
| 10:00:04 | 189 | 113 | buy 10 USDC ← SOL | filled | 25s | 1 |  |
| 10:00:04 | 190 | 114 | sell 0.1 SOL → USDT | filled | 19s | 1 |  |
| 10:00:04 | 191 | 115 | sell 0.1 SOL → USDT | filled | 21s | 1 |  |
| 10:00:04 | 192 | 116 | buy 10 USDT ← SOL | filled | 24s | 1 |  |
| 10:00:04 | 193 | 117 | buy 10 USDT ← SOL | filled | 26s | 1 |  |

### Rows without an order

3 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |

Scenario orders: 192 (190 main, 2 acquire). Cleanup placed 114 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 09:38:26 | 2 | USDT → SOL (native) | Executed | `0x0eeb38b6…` [🐞](https://debug.barn.cow.fi/order/0x0eeb38b6e9c665d3c331dc477f0aeed0c6d2dabdd7cc08a1478345610889ba01) |
| 09:38:28 | 3 | USDC → SOL (native) | Executed | `0xb0e9e2ec…` [🐞](https://debug.barn.cow.fi/order/0xb0e9e2ec1d5fae714fc7a666ebe224dbb15a2d1d84d8a4a84177ada622c3c639) |
| 09:38:28 | 1 | USDC → SOL (native) | Executed | `0x33c74bb8…` [🐞](https://debug.barn.cow.fi/order/0x33c74bb80f43b931b45d006bca30d06842008b77407eda338b2d72dd7122cbe7) |
| 09:40:00 | 5 | JUP → SOL (native) | Executed | `0x27369f57…` [🐞](https://debug.barn.cow.fi/order/0x27369f57005e8337bf90ebe578ec2043a7cfc8a0b029e521af7b37aee494e612) |
| 09:40:01 | 6 | JUP → SOL (native) | Executed | `0x754f2320…` [🐞](https://debug.barn.cow.fi/order/0x754f2320feea1bf68fcbf485ee45405eef4127228c12de0b77283811fc2d3f57) |
| 09:40:02 | 7 | JUP → SOL (native) | Executed | `0xcd668ed2…` [🐞](https://debug.barn.cow.fi/order/0xcd668ed26b7b977d1640e27281c3e9a643b1966968829fc912e50835aa487424) |
| 09:40:03 | 8 | JUP → SOL (native) | Executed | `0xabc9967c…` [🐞](https://debug.barn.cow.fi/order/0xabc9967cadd679e44dd9d5ca40e9524a768ab43306ae5e2d78557958e8bec436) |
| 09:40:03 | 9 | JUP → SOL (native) | Executed | `0x7e0fda31…` [🐞](https://debug.barn.cow.fi/order/0x7e0fda31ed59c9d5610049ff96455973454b0d18769d1c683e38e4f3f9511bb6) |
| 09:40:05 | 10 | JUP → SOL (native) | Executed | `0x73cea522…` [🐞](https://debug.barn.cow.fi/order/0x73cea5220c8f85f37adb7e90e6138d7fda5c806a678480cde97b01a58b9ee921) |
| 09:40:06 | 11 | JUP → SOL (native) | Executed | `0xd4a100eb…` [🐞](https://debug.barn.cow.fi/order/0xd4a100eb35e457762d4d8008cb31af74d887450c66a53fb137fcf43ad8ee20ba) |
| 09:40:07 | 12 | JUP → SOL (native) | Executed | `0x4a40bbea…` [🐞](https://debug.barn.cow.fi/order/0x4a40bbea4c518b38c85f9eab49b7ef3e72ad7e32400f8a9a6017f3f2440cead3) |
| 09:40:08 | 13 | JUP → SOL (native) | Executed | `0xc9bf3679…` [🐞](https://debug.barn.cow.fi/order/0xc9bf36797149d3ecc55e290283c9bfc0eb1e3363e02b109e3953d4d633e4cd01) |
| 09:40:10 | 4 | JUP → SOL (native) | Executed | `0xfa6510da…` [🐞](https://debug.barn.cow.fi/order/0xfa6510da35340cb59528659c0af9d081204a66bbf2fce51d1a470b7e8c29c48a) |
| 09:40:24 | 14 | JUP → SOL (native) | Executed | `0xf91666d3…` [🐞](https://debug.barn.cow.fi/order/0xf91666d33213c72a28b5dc47839d13f7bd4ab80d60d560284b6e706418a25a71) |
| 09:40:32 | 15 | JUP → SOL (native) | Executed | `0xd4fc33b6…` [🐞](https://debug.barn.cow.fi/order/0xd4fc33b66302708d35394683dd17fd2fc1c29b0980be191a11cb9385d53157f3) |
| 09:40:37 | 17 | JUP → SOL (native) | Executed | `0xa1c5def4…` [🐞](https://debug.barn.cow.fi/order/0xa1c5def4b71d245429aeda87849e3a6068f530df48324e68b3cfd60b1300c937) |
| 09:40:37 | 16 | JUP → SOL (native) | Executed | `0xcd44939a…` [🐞](https://debug.barn.cow.fi/order/0xcd44939a910ae475a6325f091b18dff69b34d668186bf6a02f68c638e2856809) |
| 09:40:38 | 18 | JUP → SOL (native) | Executed | `0xe468dcb6…` [🐞](https://debug.barn.cow.fi/order/0xe468dcb69f6b12bcd6e3f543a8abedf1a2c6788b1ea983db05f5f30842695e95) |
| 09:40:42 | 19 | JUP → SOL (native) | Executed | `0xaf707f66…` [🐞](https://debug.barn.cow.fi/order/0xaf707f660fee1931b9639d1ea5985552801f3443c02e99d982538efe3b3a43b8) |
| 09:40:42 | 20 | JUP → SOL (native) | Executed | `0xccf1c0ac…` [🐞](https://debug.barn.cow.fi/order/0xccf1c0acca14abffaec114915abf831b76afe0ddcd58efd846fa4f8bbfac89bb) |
| 09:40:51 | 21 | JUP → SOL (native) | Executed | `0x65d9b0e6…` [🐞](https://debug.barn.cow.fi/order/0x65d9b0e686beb81467b011a18a10f9f9040d7311e31a4ecd99d47cca614b837f) |
| 09:40:52 | 22 | JUP → SOL (native) | Executed | `0x4ab25cd1…` [🐞](https://debug.barn.cow.fi/order/0x4ab25cd17e82408dbaf4339f2d147be8510fe3688bbe8003c12070565c5c0809) |
| 09:40:57 | 24 | JUP → SOL (native) | Executed | `0x1bdefe63…` [🐞](https://debug.barn.cow.fi/order/0x1bdefe6393b671071b0aae8d3622c942be3902a89599c1dd64148322bb1816a9) |
| 09:40:57 | 23 | JUP → SOL (native) | Executed | `0x9fdef49b…` [🐞](https://debug.barn.cow.fi/order/0x9fdef49be603530d1b1b5ac432304124b93f21afaf46051a3638a714650c704d) |
| 09:41:15 | 25 | JUP → SOL (native) | Executed | `0x55c74c73…` [🐞](https://debug.barn.cow.fi/order/0x55c74c735de78a3be1322e2042f9f58c747d401dcea083d1aadf445871a5681b) |
| 09:41:16 | 27 | JUP → SOL (native) | Executed | `0x67de9e66…` [🐞](https://debug.barn.cow.fi/order/0x67de9e665a1f3ce773500d11ab5efe4586bb49db073126f016821e593f891949) |
| 09:41:25 | 26 | JUP → SOL (native) | Executed | `0x8ab04a71…` [🐞](https://debug.barn.cow.fi/order/0x8ab04a714ad0643207290d2caed976020a762eb0149078a102d6233fcc5c2b7e) |
| 09:41:32 | 28 | JUP → SOL (native) | Executed | `0x50258f3f…` [🐞](https://debug.barn.cow.fi/order/0x50258f3f4245f2e21b8ad86f18adfb46c689a79f6efa55841f327f2dac9c04ad) |
| 09:49:13 | 30 | USDC → SOL (native) | Executed | `0x241294db…` [🐞](https://debug.barn.cow.fi/order/0x241294dbddff27538a27f7925b2dca459715d07ed38f7067974cb1e54d05b01e) |
| 09:49:14 | 31 | USDC → SOL (native) | Executed | `0x5d171dc1…` [🐞](https://debug.barn.cow.fi/order/0x5d171dc124954852909c61f8678ff17f706a75e4f0581ba821b4a911f0de3c1c) |
| 09:49:15 | 32 | USDC → SOL (native) | Executed | `0x0f5e3a55…` [🐞](https://debug.barn.cow.fi/order/0x0f5e3a55b01e2d43222594c77463834d064e36a3a59cee3ccda9c72399aafe15) |
| 09:49:16 | 33 | USDC → SOL (native) | Executed | `0xa4012e7e…` [🐞](https://debug.barn.cow.fi/order/0xa4012e7ebb56f6e0eb184cce797d4c2483687b2aee7222e3a6a4681782064a8f) |
| 09:49:17 | 34 | USDC → SOL (native) | Executed | `0x0068871f…` [🐞](https://debug.barn.cow.fi/order/0x0068871f9d1789c6bd644a9e186d329c51d5dd23863c4e5e29b8a5c133d59406) |
| 09:49:18 | 35 | USDC → SOL (native) | Executed | `0x374785bd…` [🐞](https://debug.barn.cow.fi/order/0x374785bd2d729d1e50501b51e2de6235973f8f640d90f59debebb5655cb26f8e) |
| 09:49:19 | 36 | USDC → SOL (native) | Executed | `0xd95784b9…` [🐞](https://debug.barn.cow.fi/order/0xd95784b938c0dcd7b8b5c701d720d384d35d176df73771f9699306011cd276da) |
| 09:49:21 | 37 | USDC → SOL (native) | Executed | `0x55dfd58f…` [🐞](https://debug.barn.cow.fi/order/0x55dfd58f3402a0a535f4453c9f1bf271c25d851638c37004ad7e3083a1150db6) |
| 09:49:23 | 38 | USDC → SOL (native) | Executed | `0x139d2b03…` [🐞](https://debug.barn.cow.fi/order/0x139d2b0315a6a3ed1d588a71ecfc75b7841033f2456424e52ae305909d125cc9) |
| 09:49:24 | 29 | USDC → SOL (native) | Executed | `0xaa22958f…` [🐞](https://debug.barn.cow.fi/order/0xaa22958f902a92353cf817dbc9230476073eaf448fcca218de68fc285fd4babc) |
| 09:49:41 | 39 | USDC → SOL (native) | Executed | `0xae0aa7fd…` [🐞](https://debug.barn.cow.fi/order/0xae0aa7fdfe4b7e46217cd1146d6c943aa7d00c9b479bac10ad0938925556e0ba) |
| 09:49:47 | 41 | USDC → SOL (native) | Executed | `0x8330d691…` [🐞](https://debug.barn.cow.fi/order/0x8330d691879bf78be0cf643edc2fc8d2f8a94d5eacd45f78d55c940278832f2f) |
| 09:49:50 | 40 | USDC → SOL (native) | Executed | `0x5dab1224…` [🐞](https://debug.barn.cow.fi/order/0x5dab12242ba0237d819cb65d27a3cdca7b7901324555a6ad3ce4247e4d08714c) |
| 09:49:53 | 42 | USDC → SOL (native) | Executed | `0xac16e23a…` [🐞](https://debug.barn.cow.fi/order/0xac16e23a9497102280609da7b36cf4684dc6f79c239f02a4d664c356394fb7b8) |
| 09:49:55 | 44 | USDC → SOL (native) | Executed | `0x123cb797…` [🐞](https://debug.barn.cow.fi/order/0x123cb797f32443467e53bb93df2838ad997a6c4316879cdd98d9a130b0ab3821) |
| 09:49:58 | 45 | USDC → SOL (native) | Executed | `0x4c19a9a6…` [🐞](https://debug.barn.cow.fi/order/0x4c19a9a69f97c55fbb43e21fc54bdcb617676d6e27b6b5687997e7d6ad814d5e) |
| 09:49:58 | 43 | USDC → SOL (native) | Executed | `0x5223d6f1…` [🐞](https://debug.barn.cow.fi/order/0x5223d6f1b5c89c9fcd772981fb0cd7430b69cabf716348c9b54352ab43382fbe) |
| 09:49:59 | 46 | USDC → SOL (native) | Executed | `0x276094bf…` [🐞](https://debug.barn.cow.fi/order/0x276094bf9e0026fcece1bebcfd364a8717b745cccdca4bd22beba95c72afe262) |
| 09:50:00 | 47 | USDC → SOL (native) | Executed | `0x55fc3ad4…` [🐞](https://debug.barn.cow.fi/order/0x55fc3ad403ef30ec84f3c9e9272fba861098341f82e93312fe3f6381d1179bd4) |
| 09:50:04 | 48 | USDC → SOL (native) | Executed | `0x22116f88…` [🐞](https://debug.barn.cow.fi/order/0x22116f8857e26f0372179ea1d6d2f293b29e0bf5241da528895aa7d1575d678e) |
| 09:50:11 | 49 | USDC → SOL (native) | Executed | `0x172b32d1…` [🐞](https://debug.barn.cow.fi/order/0x172b32d100d73849714b50ee8e6be452bbcab876e7cdfa838500bd5b8b0d321d) |
| 09:50:24 | 51 | USDC → SOL (native) | Executed | `0xb3190d5a…` [🐞](https://debug.barn.cow.fi/order/0xb3190d5a8d74d4ba96e47f11dd4c5869f8f62abd669bcb1792c915fdf4b7cd95) |
| 09:50:27 | 50 | USDC → SOL (native) | Executed | `0xe754f6e5…` [🐞](https://debug.barn.cow.fi/order/0xe754f6e5a874234d0f8e9c6b49bd3f41be9eeb78c32f7dfa95293ef4a0d6e9f5) |
| 09:50:28 | 52 | USDC → SOL (native) | Executed | `0x5549ac0b…` [🐞](https://debug.barn.cow.fi/order/0x5549ac0bd75f65c4416c09cefbfba351e6f2db78ba0abafd4ad7002cdec4334d) |
| 09:50:33 | 53 | USDC → SOL (native) | Executed | `0x8f8c890b…` [🐞](https://debug.barn.cow.fi/order/0x8f8c890b0de7fedf24d2113a04195c5c8094c92c5a4fad875bba93fab11792c6) |
| 09:50:34 | 55 | USDC → SOL (native) | Executed | `0xa5212102…` [🐞](https://debug.barn.cow.fi/order/0xa5212102d0cd6f83dcd21461eb3b04b840e16c9668c5604e39eefa716f62b904) |
| 09:50:34 | 54 | USDC → SOL (native) | Executed | `0xfd96ec97…` [🐞](https://debug.barn.cow.fi/order/0xfd96ec9727d1591554a483272e4ed7d35aa0483b71ba578de3c545bba3fa54e4) |
| 09:50:37 | 56 | USDC → SOL (native) | Executed | `0xdadcb728…` [🐞](https://debug.barn.cow.fi/order/0xdadcb728599b54cd13b0f1fa6abf2bb2309d159220df8bc93d5de7bf9a7810e8) |
| 09:50:40 | 57 | USDC → SOL (native) | Executed | `0xacd6d8ff…` [🐞](https://debug.barn.cow.fi/order/0xacd6d8ffa0f7a53716a45f5c25241bda14489d8f172c37b3cca288d2a1978d8d) |
| 09:50:40 | 58 | USDC → SOL (native) | Executed | `0x714f67f7…` [🐞](https://debug.barn.cow.fi/order/0x714f67f706144abd47283dce92864cb920b32fce5188e199767778a710a63ee0) |
| 09:50:43 | 59 | USDC → SOL (native) | Executed | `0xa3bdcdd9…` [🐞](https://debug.barn.cow.fi/order/0xa3bdcdd971fdde262566d788310affac86aa64211f027c7734090bb01bee832a) |
| 09:51:02 | 60 | USDC → SOL (native) | Executed | `0x083c00ad…` [🐞](https://debug.barn.cow.fi/order/0x083c00adf251d297f563249386c2b98c869f8f21306a6f2e90dfdc0032c3d437) |
| 09:54:48 | 62 | USDC → SOL (native) | Executed | `0xae08025d…` [🐞](https://debug.barn.cow.fi/order/0xae08025dc186949ea194464cf9a58617abd1659664516da7428d33f13b5de0e1) |
| 09:54:49 | 63 | USDC → SOL (native) | Executed | `0xe0d7076b…` [🐞](https://debug.barn.cow.fi/order/0xe0d7076b7ca2bc3a1b391442a40a06812fd46ff3296a84f43ea6b7c5b9a28e74) |
| 09:54:52 | 65 | USDT → SOL (native) | Executed | `0x6a42ceb7…` [🐞](https://debug.barn.cow.fi/order/0x6a42ceb7a318fad570d2ca8c0e78e0959760a51517458314457632aa9656b059) |
| 09:54:53 | 66 | USDC → SOL (native) | Executed | `0x268b4afc…` [🐞](https://debug.barn.cow.fi/order/0x268b4afccbbdb6fa6fa1c1d1f8f38ea9524d8991d76017c2193696f560bb21f9) |
| 09:54:53 | 67 | USDC → SOL (native) | Executed | `0xbe6a13fc…` [🐞](https://debug.barn.cow.fi/order/0xbe6a13fc3ec75e50918f6221fac431f2eb60ee3cd8f7e674b79bee05ef93c0b1) |
| 09:54:57 | 68 | USDT → SOL (native) | Executed | `0x59137464…` [🐞](https://debug.barn.cow.fi/order/0x59137464d565dc0c6142036320746110204f032d521b1d1f33f2f0ddc470b3a6) |
| 09:54:57 | 68 | USDC → SOL (native) | Executed | `0x5afb507e…` [🐞](https://debug.barn.cow.fi/order/0x5afb507ec25244595a98b9cfa537b5094c0bdcdfa94606a1c704473dc380e0ee) |
| 09:55:02 | 69 | JUP → SOL (native) | Executed | `0xf102df71…` [🐞](https://debug.barn.cow.fi/order/0xf102df71cd1b7540645a050fae0183f0775fa56e6eed077e98b2f4a795ac237b) |
| 09:55:02 | 61 | USDC → SOL (native) | Executed | `0x6921cfd3…` [🐞](https://debug.barn.cow.fi/order/0x6921cfd38654f41b3bacb13c60cceb6444023c503bfc1597d49f47c828ecaf26) |
| 09:56:43 | 71 | PAID → SOL (native) | Executed | `0xec1852b7…` [🐞](https://debug.barn.cow.fi/order/0xec1852b7d0b7daa12f8507e00119cabba93046c565b51b1d0723816863bef80c) |
| 09:56:44 | 72 | USDG → SOL (native) | Executed | `0x0715fa06…` [🐞](https://debug.barn.cow.fi/order/0x0715fa0683e9802d783620ce2880540247fa6d54f586667e1c27ea8350e7985f) |
| 09:56:45 | 73 | PUMP → SOL (native) | Executed | `0x7d4ec000…` [🐞](https://debug.barn.cow.fi/order/0x7d4ec0000dd051cb2166e05906956090cb36a489e77ab0048890668d9572153e) |
| 09:56:45 | 74 | PYUSD → SOL (native) | Executed | `0x4927b2f9…` [🐞](https://debug.barn.cow.fi/order/0x4927b2f97dcbbfdd5c34690bffbbbf512e2091b1c39f93143ae7f340a74c4ff7) |
| 09:56:47 | 75 | CASH → SOL (native) | Executed | `0x3e331a69…` [🐞](https://debug.barn.cow.fi/order/0x3e331a69accd4101dc4bc527e72e0f829481f69b9e22b718e5ca034188fa311e) |
| 09:56:47 | 76 | CRCLx → SOL (native) | Executed | `0x3fa64625…` [🐞](https://debug.barn.cow.fi/order/0x3fa646257d2c6788bf5b2a83a67c22b49aac81e12bc791bfb66f7fe1ee399057) |
| 09:56:48 | 77 | SPYx → SOL (native) | Executed | `0xf5a405a8…` [🐞](https://debug.barn.cow.fi/order/0xf5a405a873721ccd5dc7371af0beffaf665b288dacacb90cdaa01204263b3cba) |
| 09:56:49 | 78 | USDv → SOL (native) | Executed | `0x2eba6665…` [🐞](https://debug.barn.cow.fi/order/0x2eba66659d84155b796160f9b9e9624b5e96b32eb855284f1eb261d18ddf1f04) |
| 09:56:52 | 79 | SKHY → SOL (native) | Executed | `0x6cf7170e…` [🐞](https://debug.barn.cow.fi/order/0x6cf7170e5d508585b57a754e4d1ea23411310d4f5a9d61c0b6e9cffbb3377540) |
| 09:56:53 | 70 | ANSEM → SOL (native) | Executed | `0xcd842786…` [🐞](https://debug.barn.cow.fi/order/0xcd842786617354a8702b0d4578f93a5276ad3efeaf0af85ebb6f87fc8212ea81) |
| 09:57:11 | 80 | NVDAx → SOL (native) | Executed | `0x16dd023a…` [🐞](https://debug.barn.cow.fi/order/0x16dd023a5544d8a2244a7a4365079e87d7c3f002406fec584ce5ec6cfc610543) |
| 09:57:12 | 81 | MU → SOL (native) | Executed | `0xbf4f7fef…` [🐞](https://debug.barn.cow.fi/order/0xbf4f7fefab787ef87af7b546b7ef57787ab904112c8c686998e9700b222ad893) |
| 09:57:20 | 82 | SPCX → SOL (native) | Executed | `0x1b76f96d…` [🐞](https://debug.barn.cow.fi/order/0x1b76f96d757416aa4762655ba3e4f0e0668d9f429d9a9f89141b73d1f570affc) |
| 09:57:21 | 84 | TSLAx → SOL (native) | Executed | `0x32d7d58d…` [🐞](https://debug.barn.cow.fi/order/0x32d7d58d400df73f1d86c091fce1568016f1a27dcf784a44e421dfc884e701cf) |
| 09:57:24 | 83 | SPCXx → SOL (native) | Executed | `0xf179cab6…` [🐞](https://debug.barn.cow.fi/order/0xf179cab6c6e553de384a7ee044a05e7ff27774f141bfe72b933e85213c183b75) |
| 09:57:31 | 88 | Bonk → SOL (native) | Executed | `0x384fe72a…` [🐞](https://debug.barn.cow.fi/order/0x384fe72a62b701f8600d82a1297365e2270d277a31038ab3aba2fecc1216cc3c) |
| 09:57:36 | 89 | $WIF → SOL (native) | Executed | `0x0158937d…` [🐞](https://debug.barn.cow.fi/order/0x0158937d386afccffa038fc5d2e9434cfaeb0af8ad7fca1ce6e4f541f5a57f56) |
| 09:57:43 | 90 | POPCAT → SOL (native) | Executed | `0xda00e322…` [🐞](https://debug.barn.cow.fi/order/0xda00e32228bf2c756c6e12f610f3522db9d7e7e40171025760ef7098143fd41c) |
| 09:57:54 | 92 | mSOL → SOL (native) | Executed | `0x1433b033…` [🐞](https://debug.barn.cow.fi/order/0x1433b033712dbc8e1f96072e42f3886a1d8abc1104cea337c05e3381334b01a3) |
| 09:57:55 | 91 | JitoSOL → SOL (native) | Executed | `0xc129d0c6…` [🐞](https://debug.barn.cow.fi/order/0xc129d0c6f1957fe4831bbd213c31142740e3ec6b255bd7ba5eb894434bd71a45) |
| 09:58:11 | 95 | USDe → SOL (native) | Executed | `0x4091279c…` [🐞](https://debug.barn.cow.fi/order/0x4091279cebc05302fcdeba425b545ee37f1dbf8295edbaf067786dfd268478ec) |
| 09:58:19 | 97 | USDY → SOL (native) | Executed | `0x2e77c40c…` [🐞](https://debug.barn.cow.fi/order/0x2e77c40c605e8e903e0a6cfdb471767151bd28b23b070244983588db3f988946) |
| 09:58:20 | 93 | JupSOL → SOL (native) | Executed | `0x72db222d…` [🐞](https://debug.barn.cow.fi/order/0x72db222d0d8d3d9516729be5dadb68285082de5732dcd38a88bc7fafd53ffb93) |
| 09:58:22 | 94 | cbBTC → SOL (native) | Executed | `0x1610b201…` [🐞](https://debug.barn.cow.fi/order/0x1610b20106f670fd896cf415ea9883c21563363d3e1c30dcbd611d685c3ef316) |
| 09:58:28 | 96 | EURC → SOL (native) | Executed | `0xb661c222…` [🐞](https://debug.barn.cow.fi/order/0xb661c22260c7d43920956bdc44f22198b1ed2d4dedd3a3a7594b1c391623b2c4) |
| 09:58:35 | 98 | JLP → SOL (native) | Executed | `0x45bebf54…` [🐞](https://debug.barn.cow.fi/order/0x45bebf54631624d956b9f1430690e931077976bd1b77648e116a1fa65a10c22a) |
| 09:58:35 | 100 | ETH → SOL (native) | Executed | `0x851e96a8…` [🐞](https://debug.barn.cow.fi/order/0x851e96a8c9381ddb7f2bb7b3d21c2eb1ec3826a01e3ffc6a5b547c404ebe3915) |
| 09:58:37 | 99 | INF → SOL (native) | Executed | `0xf539c803…` [🐞](https://debug.barn.cow.fi/order/0xf539c8039e8447448a811f2991660ee124728c2962e91edf17d83697a47ae0ef) |
| 09:58:43 | 101 | BNB → SOL (native) | Executed | `0x9417deae…` [🐞](https://debug.barn.cow.fi/order/0x9417deaece6457a6596f85693300d2111afb85192c00f03f6773b34840b956c6) |
| 09:58:44 | 102 | XAUt0 → SOL (native) | Executed | `0x49976fcf…` [🐞](https://debug.barn.cow.fi/order/0x49976fcfcc8fde1072b29e84e005053bcda072de801ac21a6537768cda832952) |
| 09:58:49 | 103 | GLDx → SOL (native) | Executed | `0x3dcff78a…` [🐞](https://debug.barn.cow.fi/order/0x3dcff78a9a183ffbfb4ba011b8a382fa411433164f824bc8a5620f879d20f3b8) |
| 09:58:53 | 104 | EUROP → SOL (native) | Executed | `0x0b97721b…` [🐞](https://debug.barn.cow.fi/order/0x0b97721bd81ca31e66f7359d61537ce060425c7ff7a6ae265f5ff70ad56739a4) |
| 09:58:56 | 105 | Fartcoin → SOL (native) | Executed | `0x83774969…` [🐞](https://debug.barn.cow.fi/order/0x837749693336ff587063db3f8a7c42b19b82c54b70a8815feb452d397e04ccba) |
| 09:58:56 | 106 | MEW → SOL (native) | Executed | `0x5b05e4db…` [🐞](https://debug.barn.cow.fi/order/0x5b05e4dbe0b52a7841da44783a7f727436a926182b4f0c856ff6421e2daf2ba9) |
| 09:59:02 | 107 | BOME → SOL (native) | Executed | `0x7473b2a4…` [🐞](https://debug.barn.cow.fi/order/0x7473b2a4ee3efc817c041502100b0f64a9a816ceea81a4f4c10b0d74c9f257e4) |
| 09:59:03 | 108 | hyloSOL → SOL (native) | Executed | `0xa4440307…` [🐞](https://debug.barn.cow.fi/order/0xa4440307b8363cf5918f6ee94d16626a795e6bad758eef6fd104df427b75e08f) |
| 09:59:03 | 109 | PSOL → SOL (native) | Executed | `0x00391f6f…` [🐞](https://debug.barn.cow.fi/order/0x00391f6f651c58ec4c4e49379e46a4ff1a91c35bcb3faced86e1872b37e9da0c) |
| 10:00:32 | 111 | USDC → SOL (native) | Executed | `0x13652292…` [🐞](https://debug.barn.cow.fi/order/0x136522926170a43a86e42e7d74f5680d50da57f0cc9aa0916d292666dd9e3e83) |
| 10:00:33 | 112 | USDC → SOL (native) | Executed | `0xa50759f2…` [🐞](https://debug.barn.cow.fi/order/0xa50759f296ea01d0916c8ca8f6ae85c766ad2fcb02d330256c91afbf0c7475dd) |
| 10:00:34 | 113 | USDC → SOL (native) | Executed | `0x7a649f41…` [🐞](https://debug.barn.cow.fi/order/0x7a649f410acdd5c8da9baa9203a8dc97035c887cf52e65ad87892868a910e644) |
| 10:00:36 | 114 | USDT → SOL (native) | Executed | `0xb63cd66c…` [🐞](https://debug.barn.cow.fi/order/0xb63cd66c98fba4d55b95bfca2c48077bd28e7bc54c630caebd355a74eeb16f74) |
| 10:00:36 | 115 | USDT → SOL (native) | Executed | `0x2663f090…` [🐞](https://debug.barn.cow.fi/order/0x2663f09016e805b8f7cfcd2c0a262cc3f0d9a1682da786e930c2ea604d6d65e0) |
| 10:00:37 | 116 | USDT → SOL (native) | Executed | `0x554bf20f…` [🐞](https://debug.barn.cow.fi/order/0x554bf20f810abee7fae180acd1006b1a0d6e78dbc078a483f5cdf8c58bdf9893) |
| 10:00:38 | 117 | USDT → SOL (native) | Executed | `0xc46c1487…` [🐞](https://debug.barn.cow.fi/order/0xc46c14876467f88ceff59a3ee719832cec6314e7751fd90b890cb9f5f74e2850) |
| 10:00:39 | 110 | USDC → SOL (native) | Executed | `0x4de04335…` [🐞](https://debug.barn.cow.fi/order/0x4de04335d49bc4a1991cdcfdd0f04e70a3387fcfa9401795809fdc8ed8bcb052) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 192 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 9s | 15s | 21s | 28s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| fractal | 192 | 100.0% | 94 | 83,454 | 9s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| fractal | 289 | 168 | 168 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 365 times
- Orders filtered for `in_flight`: 89 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 163 | 163 | 100.0% |
| market buy | 29 | 29 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 96 | 96 | 100.0% |
| wSOL → JUP | 28 | 28 | 100.0% |
| wSOL → USDT | 8 | 8 | 100.0% |
| JUP → USDC | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → PAID | 2 | 2 | 100.0% |
| wSOL → PYUSD | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 2 | 100.0% |
| wSOL → CRCLx | 2 | 2 | 100.0% |
| wSOL → USDv | 2 | 2 | 100.0% |
| wSOL → SKHY | 2 | 2 | 100.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → SPCXx | 2 | 2 | 100.0% |
| wSOL → SPCX | 2 | 2 | 100.0% |
| wSOL → TSLAx | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 5 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 5 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 5 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 5 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 4 | 4 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 4 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 4 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 4 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 4 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 3 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 3 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 3 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 3 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 2 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 2 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 2 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 2 | 2 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 2 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 2 | 2 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 2 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 2 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 2 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 2 | 2 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 2 | 2 | 100.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 2 | 100.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 2 | 2 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 2 | 2 | 100.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 2 | 2 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 2 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 2 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
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
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 1 | 1 | 100.0% |
| `DBKSmR7E2tkDuZNeweWTCNenv871nxaCVThANH8eQJLV` | 1 | 1 | 100.0% |
| `52CfB35yd7jyGA6U2198WmCDVV8wi3Xg48S4MgMDvKR1` | 1 | 1 | 100.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 1 | 100.0% |
| `FCMwP3inMPkh6iUYYee8F9kHE8BtMUPCTAJ6ifPfo7Vy` | 1 | 1 | 100.0% |
| `cnt7zt27wGwu9SZufyuytxmTyFYaS6HhUUpLgpQdkup` | 1 | 1 | 100.0% |
| `7ehtrkWqiruHhxCfG9gaCApJ3prnfGuEsYVuqB948SeJ` | 1 | 1 | 100.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 1 | 100.0% |
