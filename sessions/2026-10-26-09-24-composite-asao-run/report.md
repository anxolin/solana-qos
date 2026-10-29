# Solana QoS report: 2026-10-26-09-24-composite-asao-run

Barn, orders created between `2026-10-26T09:25:18.308Z` and `2026-10-26T10:04:21.106Z`. Data fetched 2026-10-26T10:08:54+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 186 |
| Orders executed | **174** (93.5%) |
| Sponsored orders never created on-chain | 1 (0.5%) |
| Traders | 110 |
| Settlement txs | 78 |

## Scenario results

Target solver: `asao`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-26T09:25:18.308Z | 2026-10-26T09:25:59.840Z | 6/6 | 0 | 8 | 8 | 100.0% |
| solver-same-direction-25 | 2026-10-26T09:26:56.954Z | 2026-10-26T09:27:19.391Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-26T09:29:37.172Z | 2026-10-26T09:36:03.506Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-cow | 2026-10-26T09:38:52.697Z | 2026-10-26T09:41:39.123Z | 14/15 | 1 | 14 | 14 | 93.3% |
| solver-token-coverage | 2026-10-26T09:42:31.813Z | 2026-10-26T09:44:01.913Z | 43/52 | 9 | 51 | 43 | 82.7% |
| solver-fresh-accounts | 2026-10-26T09:49:48.699Z | 2026-10-26T09:51:02.283Z | 0/8 | 8 | 4 | 0 | 0.0% |

## Scenario

172 of 190 scenario rows completed. 0 retries, 6 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 09:25:18 | 1 | 1 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 09:25:18 | 2 | 2 | sell 0.005 SOL → USDT | filled | 9s | 1 |  |
| 09:25:18 | 3 | 3 | sell 0.5 JUP → USDC | filled | 23s | 2 |  |
| 09:25:26 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 7s | 1 |  |
| 09:25:27 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 7s | 1 |  |
| 09:25:41 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 18s | 2 |  |
| 09:26:56 | 7 | 4 | sell 0.005 SOL → JUP | filled | 12s | 1 |  |
| 09:26:56 | 8 | 5 | sell 0.005 SOL → JUP | filled | 12s | 1 |  |
| 09:26:56 | 9 | 6 | sell 0.005 SOL → JUP | filled | 12s | 1 |  |
| 09:26:56 | 10 | 7 | sell 0.005 SOL → JUP | filled | 22s | 1 |  |
| 09:26:56 | 11 | 8 | sell 0.005 SOL → JUP | filled | 10s | 1 |  |
| 09:26:56 | 12 | 9 | sell 0.005 SOL → JUP | filled | 10s | 1 |  |
| 09:26:56 | 13 | 10 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:26:56 | 14 | 11 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:26:56 | 15 | 12 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:26:56 | 16 | 13 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:26:56 | 17 | 14 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 09:26:56 | 18 | 15 | sell 0.005 SOL → JUP | filled | 12s | 1 |  |
| 09:26:56 | 19 | 16 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 09:26:56 | 20 | 17 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 09:26:56 | 21 | 18 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:26:56 | 22 | 19 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:26:56 | 23 | 20 | sell 0.005 SOL → JUP | filled | 22s | 1 |  |
| 09:26:56 | 24 | 21 | sell 0.005 SOL → JUP | filled | 22s | 1 |  |
| 09:26:56 | 25 | 22 | sell 0.005 SOL → JUP | filled | 22s | 1 |  |
| 09:26:56 | 26 | 23 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 09:26:56 | 27 | 24 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 09:26:56 | 28 | 25 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:26:56 | 29 | 26 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:26:56 | 30 | 27 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:26:56 | 31 | 28 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:29:37 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 6s | 1 |  |
| 09:29:37 | 33 | 30 | sell 0.003 SOL → USDC | filled | 5s | 1 |  |
| 09:29:37 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 6s | 1 |  |
| 09:29:37 | 35 | 32 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 09:31:07 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 09:31:07 | 37 | 30 | sell 0.003 SOL → USDC | filled | 10s | 1 |  |
| 09:31:07 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 09:31:07 | 39 | 32 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:31:07 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 6s | 1 |  |
| 09:31:07 | 41 | 34 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 09:31:07 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 09:31:07 | 43 | 36 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:32:37 | 44 | 29 | sell 0.0025 SOL → USDC | filled | 10s | 1 |  |
| 09:32:37 | 45 | 30 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 09:32:37 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 09:32:37 | 47 | 32 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:32:37 | 48 | 33 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 09:32:37 | 49 | 34 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 09:32:37 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 09:32:37 | 51 | 36 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 09:32:37 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 09:32:37 | 53 | 38 | sell 0.003 SOL → USDC | filled | 10s | 1 |  |
| 09:32:37 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 09:32:37 | 55 | 40 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 09:32:37 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 09:32:37 | 57 | 42 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 09:32:37 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 09:32:37 | 59 | 44 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:34:07 | 60 | 29 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 09:34:07 | 61 | 30 | sell 0.003 SOL → USDC | filled | 10s | 1 |  |
| 09:34:07 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 09:34:07 | 63 | 32 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 09:34:07 | 64 | 33 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 09:34:07 | 65 | 34 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 09:34:07 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 09:34:07 | 67 | 36 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 09:34:07 | 68 | 37 | sell 0.0025 SOL → USDC | filled | 18s | 1 |  |
| 09:34:07 | 69 | 38 | sell 0.003 SOL → USDC | filled | 10s | 1 |  |
| 09:34:07 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 09:34:07 | 71 | 40 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 09:34:07 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 09:34:07 | 73 | 42 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 09:34:07 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 09:34:07 | 75 | 44 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:34:07 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 09:34:07 | 77 | 46 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 09:34:07 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 09:34:07 | 79 | 48 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:34:07 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 09:34:07 | 81 | 50 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 09:34:07 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 09:34:07 | 83 | 52 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 09:35:37 | 84 | 29 | sell 0.0025 SOL → USDC | filled | 20s | 1 |  |
| 09:35:37 | 85 | 30 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 09:35:37 | 86 | 31 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 09:35:37 | 87 | 32 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 09:35:37 | 88 | 33 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 09:35:37 | 89 | 34 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 09:35:37 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 09:35:37 | 91 | 36 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 09:35:37 | 92 | 37 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 09:35:37 | 93 | 38 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 09:35:37 | 94 | 39 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 09:35:37 | 95 | 40 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 09:35:37 | 96 | 41 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 09:35:37 | 97 | 42 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 09:35:37 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 09:35:37 | 99 | 44 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 09:35:37 | 100 | 45 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 09:35:37 | 101 | 46 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 09:35:37 | 102 | 47 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 09:35:37 | 103 | 48 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:35:37 | 104 | 49 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 09:35:37 | 105 | 50 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 09:35:37 | 106 | 51 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 09:35:37 | 107 | 52 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:35:37 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 19s | 1 |  |
| 09:35:37 | 109 | 54 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 09:35:37 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 09:35:37 | 111 | 56 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 09:35:37 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 26s | 1 |  |
| 09:35:37 | 113 | 58 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 09:35:37 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 09:35:37 | 115 | 60 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 09:38:52 | 116 | 62 | buy 2.6 USDC ← SOL | filled | 14s | 1 |  |
| 09:38:52 | 117 | 64 | buy 1.3 USDC ← SOL | filled | 21s | 1 |  |
| 09:38:52 | 118 | 65 | buy 3.1 USDC ← SOL | filled | 8s | 1 |  |
| 09:38:52 | 119 | 66 | buy 3.1 USDT ← SOL | filled | 12s | 1 |  |
| 09:38:52 | 120 | 67 | buy 1.1 USDT ← SOL | filled | 15s | 1 |  |
| 09:38:52 | 121 | 68 | buy 3.2 USDC ← SOL | filled | 12s | 1 |  |
| 09:41:22 | 122 | 61 | sell 0.02 SOL → USDC | filled | 8s | 1 |  |
| 09:41:22 | 123 | 62 | buy 0.02 SOL ← USDC | filled | 12s | 1 |  |
| 09:41:22 | 124 | 63 | sell 0.03 SOL → USDC | filled | 8s | 1 |  |
| 09:41:22 | 125 | 64 | sell 1.2 USDC → SOL | filled | 15s | 1 |  |
| 09:41:22 | 126 | 65 | sell 3 USDC → USDT | filled | 8s | 1 |  |
| 09:41:22 | 127 | 66 | sell 3 USDT → USDC | filled | 5s | 1 |  |
| 09:41:22 | 128 | 67 | sell 1 USDT → USDC | failed | 2s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 09:41:22 | 129 | 68 | sell 3 USDC → USDT | filled | 5s | 1 |  |
| 09:41:22 | 130 | 69 | sell 0.02 SOL → JUP | filled | 5s | 1 |  |
| 09:42:31 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 15s | 1 |  |
| 09:42:31 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 15s | 1 |  |
| 09:42:31 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 15s | 1 |  |
| 09:42:31 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 15s | 1 |  |
| 09:42:31 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 16s | 1 |  |
| 09:42:31 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 16s | 1 |  |
| 09:42:31 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 17s | 1 |  |
| 09:42:31 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 12s | 1 |  |
| 09:42:31 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 17s | 1 |  |
| 09:42:31 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 17s | 1 |  |
| 09:42:31 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 17s | 1 |  |
| 09:42:31 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 12s | 1 |  |
| 09:42:31 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 18s | 1 |  |
| 09:42:31 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 13s | 1 |  |
| 09:42:31 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 14s | 1 |  |
| 09:42:31 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 13s | 1 |  |
| 09:42:31 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 13s | 1 |  |
| 09:42:31 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 13s | 1 |  |
| 09:42:31 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 14s | 1 |  |
| 09:42:31 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 14s | 1 |  |
| 09:42:31 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 19s | 1 |  |
| 09:42:31 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 19s | 1 |  |
| 09:42:31 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 20s | 1 |  |
| 09:42:31 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 19s | 1 |  |
| 09:42:31 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 21s | 1 |  |
| 09:42:31 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 16s | 1 |  |
| 09:42:31 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 17s | 1 |  |
| 09:42:31 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 17s | 1 |  |
| 09:42:31 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 17s | 1 |  |
| 09:42:31 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 79s | 1 | main timeout |
| 09:42:31 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 18s | 1 |  |
| 09:42:31 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 80s | 1 | main timeout |
| 09:42:31 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 23s | 1 |  |
| 09:42:31 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 20s | 1 |  |
| 09:42:31 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 20s | 1 |  |
| 09:42:31 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 20s | 1 |  |
| 09:42:31 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 21s | 1 |  |
| 09:42:46 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 8s | 1 |  |
| 09:42:47 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | filled | 12s | 1 |  |
| 09:42:47 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 21s | 1 |  |
| 09:42:46 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 72s | 1 | main timeout |
| 09:42:47 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 73s | 1 | main timeout |
| 09:42:47 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | filled | 15s | 1 |  |
| 09:42:48 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 72s | 1 | main timeout |
| 09:42:43 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 70s | 1 | main timeout |
| 09:42:48 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | filled | 11s | 1 |  |
| 09:42:49 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | filled | 11s | 1 |  |
| 09:42:49 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | filled | 20s | 1 |  |
| 09:42:44 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 71s | 1 | main timeout |
| 09:42:49 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 36s | 1 | main expired |
| 09:42:44 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | filled | 25s | 1 |  |
| 09:42:45 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 3s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 09:49:48 | 183 | 107 | sell 0.1 SOL → USDC | failed | 71s | 1 | main timeout |
| 09:49:48 | 184 | 108 | sell 0.1 SOL → USDC | failed | 2s | 0 | main error: 400 Bad Request: InvalidAppData: Unknown pre-image for app data hash 0x3c74bf5b542341051f22f7a76d928086964a346f3fb5dc08eaf1e8348cbfbad2 |
| 09:49:48 | 185 | 109 | buy 10 USDC ← SOL | failed | 72s | 1 | main timeout |
| 09:49:48 | 186 | 110 | buy 10 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidAppData: Unknown pre-image for app data hash 0x3c74bf5b542341051f22f7a76d928086964a346f3fb5dc08eaf1e8348cbfbad2 |
| 09:49:48 | 187 | 111 | sell 0.1 SOL → USDT | failed | 71s | 1 | main timeout |
| 09:49:48 | 188 | 112 | sell 0.1 SOL → USDT | failed | 2s | 0 | main error: 400 Bad Request: InvalidAppData: Unknown pre-image for app data hash 0x3c74bf5b542341051f22f7a76d928086964a346f3fb5dc08eaf1e8348cbfbad2 |
| 09:49:48 | 189 | 113 | buy 10 USDT ← SOL | failed | 71s | 1 | main timeout |
| 09:49:48 | 190 | 114 | buy 10 USDT ← SOL | failed | 3s | 0 | main error: 400 Bad Request: InvalidAppData: Unknown pre-image for app data hash 0x3c74bf5b542341051f22f7a76d928086964a346f3fb5dc08eaf1e8348cbfbad2 |

### Rows without an order

6 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| InvalidAppData | main | 4 | SOL → USDC ×2, SOL → USDT ×2 | Unknown pre-image for app data hash 0x3c74bf5b542341051f22f7a76d928086964a346f3fb5dc08eaf1e8348cbfbad2 |
| BlockhashExpired | main | 2 | USDT → USDC, SOL → TSLAx | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 186 (184 main, 2 acquire). Cleanup placed 135 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 09:26:02 | 2 | USDT → SOL (native) | Executed | `0xd291638b…` [🐞](https://debug.barn.cow.fi/order/0xd291638b94131851e22f5370bdb06bb678f8b03ac7ed28475109f79c68fe6a39) |
| 09:26:04 | 3 | USDC → SOL (native) | Executed | `0xfbd023b0…` [🐞](https://debug.barn.cow.fi/order/0xfbd023b06e1888c545dc221190b4c41c11fdcaefc1d1366ceb0374cedd7b0168) |
| 09:26:04 | 1 | USDC → SOL (native) | Executed | `0x29b48a6f…` [🐞](https://debug.barn.cow.fi/order/0x29b48a6fcad3c19b072f90621236f745b3ab9aa96f1ca8f65c8518c73a411076) |
| 09:27:22 | 5 | JUP → SOL (native) | Executed | `0x815c020a…` [🐞](https://debug.barn.cow.fi/order/0x815c020a51a1dd35c47a10ffca8d7d5f79c986687f71ad49639c7825010f62a8) |
| 09:27:23 | 6 | JUP → SOL (native) | Executed | `0x2e626b2c…` [🐞](https://debug.barn.cow.fi/order/0x2e626b2ce2e0329b06fc9591b06e32f3dbfc4ed6342d35519dbd0e01e99d3885) |
| 09:27:24 | 7 | JUP → SOL (native) | Executed | `0x17db155a…` [🐞](https://debug.barn.cow.fi/order/0x17db155aaf29ba473d58703708bf29c58ff119caf6aa7697fbd63f41270d7295) |
| 09:27:25 | 8 | JUP → SOL (native) | Executed | `0xcf5606f8…` [🐞](https://debug.barn.cow.fi/order/0xcf5606f8e11043da0f8a13cc398df39db84685f645dd6761f70c2f89a1a0c894) |
| 09:27:26 | 9 | JUP → SOL (native) | Executed | `0x701fef1a…` [🐞](https://debug.barn.cow.fi/order/0x701fef1a958079bae1e71544df2cd544145ee65f36880855b1ca63244b828841) |
| 09:27:27 | 10 | JUP → SOL (native) | Executed | `0x430781fa…` [🐞](https://debug.barn.cow.fi/order/0x430781faff5a5dc31c988d7502a584bd31716577154e874715071a09382aba85) |
| 09:27:28 | 11 | JUP → SOL (native) | Executed | `0xf43bc247…` [🐞](https://debug.barn.cow.fi/order/0xf43bc247f5ac91d94e821833612317316027b879f6c24be53a70df9cce7d46a6) |
| 09:27:29 | 12 | JUP → SOL (native) | Executed | `0x83cc84f5…` [🐞](https://debug.barn.cow.fi/order/0x83cc84f55b3297c3ddcc67429e3dd729d95c9ef6425e97cbdd59e19525c09fa1) |
| 09:27:32 | 13 | JUP → SOL (native) | Executed | `0x9c8f166d…` [🐞](https://debug.barn.cow.fi/order/0x9c8f166d9d660b4bbd816c308d5ece55f5a9638573cc86015ad0014ff49d99d2) |
| 09:27:33 | 4 | JUP → SOL (native) | Executed | `0x2b5e4181…` [🐞](https://debug.barn.cow.fi/order/0x2b5e418186f7376241cf5288d7fd912928c23f4c16dc0859695681ff4f69309a) |
| 09:27:56 | 14 | JUP → SOL (native) | Executed | `0x8cbc4745…` [🐞](https://debug.barn.cow.fi/order/0x8cbc4745f2f492a697a2beaa051842801ea64146da6b78c181df01a92171aa67) |
| 09:27:56 | 16 | JUP → SOL (native) | Executed | `0x5a89c201…` [🐞](https://debug.barn.cow.fi/order/0x5a89c201ad43320cf7e6dd26dba769614efbc3cb6bed1c2d0ea2033177e84f7c) |
| 09:27:57 | 15 | JUP → SOL (native) | Executed | `0x30a6aac7…` [🐞](https://debug.barn.cow.fi/order/0x30a6aac78e0a3dbca31233b0c3626e4e0a713a30cc7d254efba38a8fe179a168) |
| 09:28:00 | 17 | JUP → SOL (native) | Executed | `0xd6b066e4…` [🐞](https://debug.barn.cow.fi/order/0xd6b066e4919bbdbb0c186a1d2e4a8540245b74920c6b246f6ac033e5257f7b97) |
| 09:28:00 | 19 | JUP → SOL (native) | Executed | `0x5a58602f…` [🐞](https://debug.barn.cow.fi/order/0x5a58602f7c5a514d900b8cae354e05fd436fabd646b1d2decb619f4f76b49022) |
| 09:28:01 | 18 | JUP → SOL (native) | Executed | `0x4ccede8e…` [🐞](https://debug.barn.cow.fi/order/0x4ccede8e5e5a6dca2bc16c9116cd6848a7d8fcc979f3754f0180ecf7ccf3fdb8) |
| 09:28:04 | 20 | JUP → SOL (native) | Executed | `0xa1a53af2…` [🐞](https://debug.barn.cow.fi/order/0xa1a53af2b66de13f9685221cb7cb82ad63d378df1785b85ad5a7b043e94f3d35) |
| 09:28:04 | 21 | JUP → SOL (native) | Executed | `0x30eea861…` [🐞](https://debug.barn.cow.fi/order/0x30eea861c4353e6ee1db5d971c9b67da8b3c9af600edf2574e0482611344968b) |
| 09:28:05 | 22 | JUP → SOL (native) | Executed | `0xf025f8fe…` [🐞](https://debug.barn.cow.fi/order/0xf025f8fe13ae16e70281a1599bd9a7a4c03838d5baca06b891873d0b71b5eced) |
| 09:28:09 | 23 | JUP → SOL (native) | Executed | `0x8028762a…` [🐞](https://debug.barn.cow.fi/order/0x8028762a223726ccce67176b9c2d99e1f1b5151ca044ab9b809e8784338c489d) |
| 09:28:25 | 24 | JUP → SOL (native) | Executed | `0x444389a2…` [🐞](https://debug.barn.cow.fi/order/0x444389a262baf094c0ebc4df14ac1f136563686d32d0d603e4a6018e80552c89) |
| 09:28:28 | 25 | JUP → SOL (native) | Executed | `0x25257b3e…` [🐞](https://debug.barn.cow.fi/order/0x25257b3e52e7fa77560b8bd48a3af1936ba08164b31c13ed330bc3efd9245ccc) |
| 09:28:30 | 26 | JUP → SOL (native) | Executed | `0x348778e0…` [🐞](https://debug.barn.cow.fi/order/0x348778e011820bc1ca07eebf95cc047dc363c5ac26a7c89bdd72f49fb36f74bf) |
| 09:28:32 | 27 | JUP → SOL (native) | Executed | `0x46e62bc1…` [🐞](https://debug.barn.cow.fi/order/0x46e62bc1797213544bcea3cb10eff65aab63eb386696f346878ccf18b0b6114c) |
| 09:28:34 | 28 | JUP → SOL (native) | Executed | `0xc10c5742…` [🐞](https://debug.barn.cow.fi/order/0xc10c57428b0f307b389b53ff9878312fef378e5b0cc85accc21a8bb2e5e8afab) |
| 09:36:06 | 30 | USDC → SOL (native) | Executed | `0x9375b5bf…` [🐞](https://debug.barn.cow.fi/order/0x9375b5bffca7362d3e84f4216a78872e150c161a72f6c3754fcdbbc3f2964f2d) |
| 09:36:07 | 31 | USDC → SOL (native) | Executed | `0xbd70d921…` [🐞](https://debug.barn.cow.fi/order/0xbd70d921c8bed11cee527e45b2a0a39418d25f4aafc18b6bd425f5763058b071) |
| 09:36:08 | 32 | USDC → SOL (native) | Executed | `0x34cc7357…` [🐞](https://debug.barn.cow.fi/order/0x34cc73577b943b5905570116340583ca44aac3f28b97e5fc0b99e0997961127a) |
| 09:36:09 | 33 | USDC → SOL (native) | Executed | `0x6fbf8973…` [🐞](https://debug.barn.cow.fi/order/0x6fbf897323565c55f8dfaba21bc9fbb09aef1567b4f390266d74489ca5d474a5) |
| 09:36:11 | 34 | USDC → SOL (native) | Executed | `0xd0448391…` [🐞](https://debug.barn.cow.fi/order/0xd04483917a28fce708345b4648f5a7ad7b1950723d0a0ac9a18ca95ab39d7085) |
| 09:36:11 | 35 | USDC → SOL (native) | Executed | `0xf7fba9f5…` [🐞](https://debug.barn.cow.fi/order/0xf7fba9f56483123cba68248e61506251b617baaa6419b12a4befd7a6b5c80e72) |
| 09:36:12 | 36 | USDC → SOL (native) | Executed | `0xc2ff9ce8…` [🐞](https://debug.barn.cow.fi/order/0xc2ff9ce86d1a122417db0a16458d1525e22f1a7958efbe3b1c862ca168af45d3) |
| 09:36:13 | 37 | USDC → SOL (native) | Executed | `0x0727c664…` [🐞](https://debug.barn.cow.fi/order/0x0727c664a7b168bfd4f1d79180b867fdb917f70222b9f155f7bfdea81776583b) |
| 09:36:16 | 38 | USDC → SOL (native) | Executed | `0xcc50f02f…` [🐞](https://debug.barn.cow.fi/order/0xcc50f02f253827d4f4ba29a96293e24af646801fab0da42014467856a5477658) |
| 09:36:17 | 29 | USDC → SOL (native) | Executed | `0xb22eb63a…` [🐞](https://debug.barn.cow.fi/order/0xb22eb63aa60bffec34931d7140312247016ceae9f5f7150ab47ed47f9ea5f1a3) |
| 09:36:36 | 39 | USDC → SOL (native) | Executed | `0xb4aa453b…` [🐞](https://debug.barn.cow.fi/order/0xb4aa453b5312805a596f22633594106d8921fcc31461048437a3d4d5b8328853) |
| 09:36:37 | 40 | USDC → SOL (native) | Executed | `0x75c3ee39…` [🐞](https://debug.barn.cow.fi/order/0x75c3ee39a895d62649b54e9f85cb8e33d9cd60b6409f4f62931534b0b79c1a07) |
| 09:36:41 | 41 | USDC → SOL (native) | Executed | `0x7d2e7058…` [🐞](https://debug.barn.cow.fi/order/0x7d2e7058138a4a12129c365074af6098896a05c00f185e0ee7ab9604d017ccc2) |
| 09:36:43 | 42 | USDC → SOL (native) | Executed | `0x22a500a2…` [🐞](https://debug.barn.cow.fi/order/0x22a500a2d1a3dd4d510634049128b198e3ddf80e65689f9033897da9c0bd8e41) |
| 09:36:43 | 43 | USDC → SOL (native) | Executed | `0x92a35369…` [🐞](https://debug.barn.cow.fi/order/0x92a35369d83890dd3b705b44ef8eb813b32c8ed816755e2575cb3aeedc388061) |
| 09:36:46 | 45 | USDC → SOL (native) | Executed | `0x04ad0ff5…` [🐞](https://debug.barn.cow.fi/order/0x04ad0ff58c37a66ff466a354db5bd4b11fbd4df0489b0fca4d4c2a0ee3f74fba) |
| 09:36:49 | 44 | USDC → SOL (native) | Executed | `0x010071d3…` [🐞](https://debug.barn.cow.fi/order/0x010071d3cfeb59e57cf47a280482be5f3582798167a2a4456c591afafc79428e) |
| 09:36:49 | 47 | USDC → SOL (native) | Executed | `0x5f2008f4…` [🐞](https://debug.barn.cow.fi/order/0x5f2008f45ac646179833651ba7baf14cb0a65bed6962331603c537c8b6720cfc) |
| 09:36:55 | 46 | USDC → SOL (native) | Executed | `0x13e7ffdb…` [🐞](https://debug.barn.cow.fi/order/0x13e7ffdbbe7ad47bb86251322c6f82f34b6e5cf363b742eb4302031192338fe5) |
| 09:37:09 | 48 | USDC → SOL (native) | Executed | `0xe25bcf41…` [🐞](https://debug.barn.cow.fi/order/0xe25bcf41f5aa2fde5b3cf7eeec478cc8aed8dca69f26158dadbc6657e1e989a8) |
| 09:37:13 | 49 | USDC → SOL (native) | Executed | `0xb11876ec…` [🐞](https://debug.barn.cow.fi/order/0xb11876ecea27888d6d5af68e93d1b9d6be33e198823f0c9030523207e78fbafb) |
| 09:37:18 | 50 | USDC → SOL (native) | Executed | `0xa8e97c88…` [🐞](https://debug.barn.cow.fi/order/0xa8e97c8888ebfeec228b331b4bb5acad38cb6e8869192daa24a701d6a679fcf3) |
| 09:37:26 | 51 | USDC → SOL (native) | Executed | `0x47229ec8…` [🐞](https://debug.barn.cow.fi/order/0x47229ec85d1d4ecf5c6c15a233d893b77bb5eb9dcb35076b08b6530054a0e7b4) |
| 09:37:32 | 52 | USDC → SOL (native) | Executed | `0x097a4b1a…` [🐞](https://debug.barn.cow.fi/order/0x097a4b1acf3d061449a296b0c42b9b8628b51b8fa1c9749b74499f283ca10c91) |
| 09:37:33 | 54 | USDC → SOL (native) | Executed | `0x4b5077c4…` [🐞](https://debug.barn.cow.fi/order/0x4b5077c47855e5e78f0cc4b3898b2dc322794c9630700e9c94d5928f00e5bef7) |
| 09:37:35 | 53 | USDC → SOL (native) | Executed | `0x388c4f00…` [🐞](https://debug.barn.cow.fi/order/0x388c4f0014693ab64e7f1a8418f32599e37ab2189f10356e5f871ba27c33e139) |
| 09:37:39 | 56 | USDC → SOL (native) | Executed | `0xa49b247b…` [🐞](https://debug.barn.cow.fi/order/0xa49b247b52065f7ae803e4c6ec644b67afebac6608ac4e12b59c99546a893cf0) |
| 09:37:50 | 55 | USDC → SOL (native) | Executed | `0x6c9b3387…` [🐞](https://debug.barn.cow.fi/order/0x6c9b33873c0dc0784d091d8b8a2c01d28df12c4fee86adcb5e56274369b3fb17) |
| 09:37:57 | 58 | USDC → SOL (native) | Executed | `0x4663b110…` [🐞](https://debug.barn.cow.fi/order/0x4663b11055c180d96bab6dc125b31732e067c74f7391533dd52e3f4349ad5720) |
| 09:37:59 | 57 | USDC → SOL (native) | Executed | `0x207a76a8…` [🐞](https://debug.barn.cow.fi/order/0x207a76a817941dd42591104a26f6391b902b0d2a35655758b46fe2e0abb6b0b4) |
| 09:38:01 | 59 | USDC → SOL (native) | Executed | `0x19515281…` [🐞](https://debug.barn.cow.fi/order/0x19515281710727541c7dad558fb8ae401b04a873d6b880ce2d3926b721839b02) |
| 09:38:03 | 60 | USDC → SOL (native) | Executed | `0x166be172…` [🐞](https://debug.barn.cow.fi/order/0x166be172d62759cc24292d8e35c6b989e0f4bf0c353b32e9263531d33b8a08ed) |
| 09:41:42 | 62 | USDC → SOL (native) | Executed | `0x65379a8c…` [🐞](https://debug.barn.cow.fi/order/0x65379a8cebd4428eacb11e4a91b3b3768fed13df83c8415ed13227be6c28d8fa) |
| 09:41:43 | 63 | USDC → SOL (native) | Executed | `0x241d8d5d…` [🐞](https://debug.barn.cow.fi/order/0x241d8d5da7b211cc9d53fa25705966e0f902ce1cfb83921165e8440eebf8cab4) |
| 09:41:45 | 65 | USDT → SOL (native) | Executed | `0x9ee442b8…` [🐞](https://debug.barn.cow.fi/order/0x9ee442b8423a2a0fab89922d87acba5790b868782752f5e409b7bb79353c5596) |
| 09:41:46 | 66 | USDC → SOL (native) | Executed | `0x39c992e4…` [🐞](https://debug.barn.cow.fi/order/0x39c992e49594de3e3ff95f3c715e73047e20faf312b5f7e708cb82e060579066) |
| 09:41:48 | 68 | USDT → SOL (native) | Executed | `0x336a26ae…` [🐞](https://debug.barn.cow.fi/order/0x336a26aefae16561b7266605da42a7f403ca87dc4299d864fbafddc1a3f5ef51) |
| 09:41:49 | 68 | USDC → SOL (native) | Executed | `0xde2cb042…` [🐞](https://debug.barn.cow.fi/order/0xde2cb042f543f61eb1a77d5965f1e691f1f886850df40c918194a1bef1ca1c43) |
| 09:41:50 | 69 | JUP → SOL (native) | Executed | `0xbc5dec37…` [🐞](https://debug.barn.cow.fi/order/0xbc5dec3745d29b7f19b112c042f7c19bb0f955269dff238ec4189e11b89d7c81) |
| 09:41:53 | 61 | USDC → SOL (native) | Executed | `0x0724fbd3…` [🐞](https://debug.barn.cow.fi/order/0x0724fbd351d8db869eb51ab96ae973ba1903428e9b418f58d7fac5e9af2b6443) |
| 09:44:04 | 71 | PAID → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x00b22023…` [🐞](https://debug.barn.cow.fi/order/0x00b220232e37b33c29d3da278fe7fd51ac695ec4c370c4815d1a6dbd9cb61268) |
| 09:44:06 | 72 | USDG → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xf8c06699…` [🐞](https://debug.barn.cow.fi/order/0xf8c066994518d3203dd9b24d816be07d827b087063125fdcabc5229ed5eb04a4) |
| 09:44:06 | 73 | PUMP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x9f6d6ae9…` [🐞](https://debug.barn.cow.fi/order/0x9f6d6ae9246afcece18d5427071ef8a9ad90ff91f44c70c50d88e08d6503b172) |
| 09:44:07 | 74 | PYUSD → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xab7d635a…` [🐞](https://debug.barn.cow.fi/order/0xab7d635a5d4070870f7f39c7e72af7539d84e187cc21668d98e43a2c82d39ae9) |
| 09:44:08 | 75 | CASH → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x8585f346…` [🐞](https://debug.barn.cow.fi/order/0x8585f34690f886ee052a836ee560d3c6bd40ee2fcb853c92fa051ce37166d8b1) |
| 09:44:09 | 76 | CRCLx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2a8f6f32…` [🐞](https://debug.barn.cow.fi/order/0x2a8f6f3281203adacd154878209444acb8ae95666cb5244e6dc447804b243c0a) |
| 09:44:10 | 77 | SPYx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x707e8355…` [🐞](https://debug.barn.cow.fi/order/0x707e835511f6e90868745cd9398650d1ac224a7a54a1f2a7e0737b9ed2ac60bf) |
| 09:44:11 | 78 | USDv → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc2e6951f…` [🐞](https://debug.barn.cow.fi/order/0xc2e6951f5f2ea1b15410939bc2d353327923b3ea5ef85ea0dc13a04cba86546d) |
| 09:44:14 | 79 | SKHY → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4b7e9d20…` [🐞](https://debug.barn.cow.fi/order/0x4b7e9d20cc99b0ffe8096fbadfb0cc4d8914657d8515812e93db6f617e60cb30) |
| 09:44:15 | 70 | ANSEM → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4ddb4cda…` [🐞](https://debug.barn.cow.fi/order/0x4ddb4cda77bdb897bec064c60cc4d69657e45ac92f235ce9ec19b83684a635f7) |
| 09:45:30 | 80 | NVDAx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x886ed595…` [🐞](https://debug.barn.cow.fi/order/0x886ed59502ad9dfe7520855f13948de258f4b307a383ce193a5d77d7b2b24e63) |
| 09:45:38 | 81 | MU → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc06fca19…` [🐞](https://debug.barn.cow.fi/order/0xc06fca19f6a990379b9e6da671e2eabec4412f4a3110a70f9adef3053d6896ab) |
| 09:45:44 | 82 | SPCX → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xbf2c93ad…` [🐞](https://debug.barn.cow.fi/order/0xbf2c93ad8eaf1499b680d684fa2308388b53fc4933cc1cd9acf42189a22d7e08) |
| 09:45:45 | 87 | POPCAT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xbf338f95…` [🐞](https://debug.barn.cow.fi/order/0xbf338f955477cb4acaf918a4cb1bc5fc60f4402b57242a34aee35ee979cebbd9) |
| 09:45:46 | 83 | SPCXx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xec286893…` [🐞](https://debug.barn.cow.fi/order/0xec286893f37b65a679f6a72396cc37f7599c7f536dd2d146838cc38e3c0f6830) |
| 09:45:47 | 85 | Bonk → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe6135e84…` [🐞](https://debug.barn.cow.fi/order/0xe6135e84f7a757ac6734e47326fcb8a9c876ab49548ab8409357f8287597e411) |
| 09:45:48 | 86 | $WIF → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xbd8f8a63…` [🐞](https://debug.barn.cow.fi/order/0xbd8f8a6396217b1107af493cf1d7db0d82c6d0acf3aa0e76bc63436572bc0631) |
| 09:45:51 | 88 | JitoSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x5181e311…` [🐞](https://debug.barn.cow.fi/order/0x5181e31121f0a350bcd9d6f1af72970070bb35ebbd82d74884d6a1c57a1b7039) |
| 09:45:52 | 89 | mSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x92ae24dd…` [🐞](https://debug.barn.cow.fi/order/0x92ae24dd49c48395d6868ee618b4d3585655aa8584bc2bca9fb27d4d359af36f) |
| 09:45:53 | 90 | JupSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x8c7752e9…` [🐞](https://debug.barn.cow.fi/order/0x8c7752e953b59aa105cbef55bdcb1d5bbaddd1c176bafc89a5f99db5b6dbb5ff) |
| 09:46:46 | 91 | cbBTC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc6bee978…` [🐞](https://debug.barn.cow.fi/order/0xc6bee978680a6472c2138bb69ab44a8bf77c0796e186b4fff7b97e1fbbf015e6) |
| 09:47:01 | 92 | USDe → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xf0d701fa…` [🐞](https://debug.barn.cow.fi/order/0xf0d701fa68e22c4fe11b04af25a6513e5dd2dbfb26c7819b839c4d8826d8d4d0) |
| 09:47:15 | 93 | EURC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x92845be3…` [🐞](https://debug.barn.cow.fi/order/0x92845be3f493f47e3f462bd68b281359739702e112274998328765d19ccfa478) |
| 09:47:18 | 94 | USDY → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x6aa4e700…` [🐞](https://debug.barn.cow.fi/order/0x6aa4e700b9977918b3e553ff4bb41a78c33fcf9df0689f93491b604b93f0e786) |
| 09:47:19 | 95 | JLP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xa5fbd4fe…` [🐞](https://debug.barn.cow.fi/order/0xa5fbd4fe691ceaa6585a39a9f75a469d3279d24c9ae0fe7196c0ad7b9c480bea) |
| 09:47:22 | 96 | INF → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x0dff99e1…` [🐞](https://debug.barn.cow.fi/order/0x0dff99e16b0d6a5d2e0a6c550e6a7c4f75a41505264b399f5e18e724970285af) |
| 09:47:23 | 97 | ETH → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x90af9da0…` [🐞](https://debug.barn.cow.fi/order/0x90af9da04d4eb051c6ea19cf0bd0518da80d8438aeddcedb6b35ff7589f6d69d) |
| 09:47:24 | 98 | BNB → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x108a6cca…` [🐞](https://debug.barn.cow.fi/order/0x108a6cca2fe82f1d8650e9167a9300153499c31284472f9160fc82587acf66dc) |
| 09:47:26 | 100 | GLDx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x52173fd5…` [🐞](https://debug.barn.cow.fi/order/0x52173fd5d31c9df1b79f5f221ec6e8cb2864ba521c2e365113f127250a2c9741) |
| 09:47:38 | 102 | Fartcoin → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd551ad9f…` [🐞](https://debug.barn.cow.fi/order/0xd551ad9fa8b6dfb8663df383356125bbc59f51101aca20935a972fc65f7a8d4a) |
| 09:48:03 | 103 | MEW → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x6c34ecf4…` [🐞](https://debug.barn.cow.fi/order/0x6c34ecf4e51374a6d9370235da4f4f4eb0efe633a9d43ef33b344cd1e7f9966f) |
| 09:48:20 | 104 | BOME → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x5c1cecf7…` [🐞](https://debug.barn.cow.fi/order/0x5c1cecf7051d4c255023d997eaa4eb3ed02b2309b1e7222b530408bba22bc06b) |
| 09:56:11 | 67 | USDT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb59993b1…` [🐞](https://debug.barn.cow.fi/order/0xb59993b15f3e424932e9acc1c32238e659cd6c1151fb35f22ff3aec804a6b838) |
| 09:57:27 | 84 | TSLAx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4d29df3d…` [🐞](https://debug.barn.cow.fi/order/0x4d29df3d4f6b82b93c57f59c86b8cca83e9c4ebfaf245dcb45aa914deca30b8a) |
| 09:57:28 | 70 | ANSEM → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe58e67bd…` [🐞](https://debug.barn.cow.fi/order/0xe58e67bd4573d9dc764aa7c6ad46475e5c1e6e5e53f09a3faf97d0d30f4cd28a) |
| 09:57:29 | 71 | PAID → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x007c0302…` [🐞](https://debug.barn.cow.fi/order/0x007c0302b8053232463a51c8dd7520ad3eb06a7a3bd74ce94d91f4d7d043dac0) |
| 09:57:30 | 72 | USDG → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd3bcf03b…` [🐞](https://debug.barn.cow.fi/order/0xd3bcf03b3251d4a82888820a71f4515e2fd7eb4fd7e3a5c9bfdeb63d0cdefa70) |
| 09:57:31 | 73 | PUMP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x91726757…` [🐞](https://debug.barn.cow.fi/order/0x91726757cc85f359bba41e2c01ccf703498e7a2ae60749b896fda91efaa93678) |
| 09:57:32 | 74 | PYUSD → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xbde23cb5…` [🐞](https://debug.barn.cow.fi/order/0xbde23cb576c07497f763520b54afb6cd18b3f78591e2b0642fdf47d77dd84e62) |
| 09:57:33 | 75 | CASH → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd1d99139…` [🐞](https://debug.barn.cow.fi/order/0xd1d991392e2b692b5f01f3717fc7a88fbdef0ea27216e3bbc3d4f122d9bce8aa) |
| 09:57:34 | 76 | CRCLx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x549e57af…` [🐞](https://debug.barn.cow.fi/order/0x549e57af47187706403c56526b34a2ccb3a6c688e02c9971fb61df17c1e0d867) |
| 09:57:37 | 77 | SPYx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x9c49d4eb…` [🐞](https://debug.barn.cow.fi/order/0x9c49d4eb3c05af449482f9ffff9dc4d6400bad7987de6401c00e08c196db9d3c) |
| 09:57:38 | 78 | USDv → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x19e91e0f…` [🐞](https://debug.barn.cow.fi/order/0x19e91e0f3b2ed16655961e19501e93d01ff6b53d8e3874c4a6657fa1b37a01e3) |
| 09:58:51 | 79 | SKHY → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4115006f…` [🐞](https://debug.barn.cow.fi/order/0x4115006fb2d9c5057b0aa31cd30cf024dea27231b81967981706f259091a28eb) |
| 09:58:55 | 80 | NVDAx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xa06bce52…` [🐞](https://debug.barn.cow.fi/order/0xa06bce52de5e6c29e8f98c6ddef6114c522b860a8a1bc6b5642b3ddeaed21769) |
| 09:59:01 | 82 | SPCX → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x3bc1f22d…` [🐞](https://debug.barn.cow.fi/order/0x3bc1f22d4e4f646ac41bf4bf1120ec0c47d308879632f9d44d03ca751c5f80dd) |
| 09:59:01 | 81 | MU → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x5055c769…` [🐞](https://debug.barn.cow.fi/order/0x5055c769c324141f181f0124feb0ca67a51ff83b4f7840895e178b092a1f4c0b) |
| 09:59:05 | 83 | SPCXx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4986c09c…` [🐞](https://debug.barn.cow.fi/order/0x4986c09c325a3bc814f17604241e5eb3c300364d8b517bc09816bf4fd41f73eb) |
| 09:59:08 | 86 | $WIF → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xf138326d…` [🐞](https://debug.barn.cow.fi/order/0xf138326de5e27cfa15649aa0ca41d2af1fa308253538a2f6196885cf2d4d0227) |
| 09:59:10 | 85 | Bonk → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd92c0ec0…` [🐞](https://debug.barn.cow.fi/order/0xd92c0ec04667d519268893b066a65e08bc5840b065733eab70605d0986846f5a) |
| 09:59:11 | 87 | POPCAT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe10ae0f5…` [🐞](https://debug.barn.cow.fi/order/0xe10ae0f5ccb6e45d3877db7ff280d61b471cf0995885ecd3498a88220d0bc36f) |
| 09:59:12 | 88 | JitoSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x9d044241…` [🐞](https://debug.barn.cow.fi/order/0x9d04424109a99df6ffa7dfbe12f5b515f3cdd87c0efec59989b5bb46c70b3596) |
| 09:59:14 | 89 | mSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4fa32fd1…` [🐞](https://debug.barn.cow.fi/order/0x4fa32fd1efba364697bc31e3a7b76f6109b8d9468226110da2acc68a50a1d944) |
| 10:00:09 | 90 | JupSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc273e264…` [🐞](https://debug.barn.cow.fi/order/0xc273e2649fd6a69bf89efaeb58fc250d043afee3fbc89016ef2cce12da7ce0da) |
| 10:00:18 | 91 | cbBTC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x9b6134d8…` [🐞](https://debug.barn.cow.fi/order/0x9b6134d885d023657d49f2ad473dc4c95b012041e58a5390a8699c77709b4d79) |
| 10:00:29 | 94 | USDY → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe594ae7c…` [🐞](https://debug.barn.cow.fi/order/0xe594ae7c6627a82b52146d67825f3139fac3e9833528af162f36fa35c410ac93) |
| 10:00:34 | 93 | EURC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x87200a40…` [🐞](https://debug.barn.cow.fi/order/0x87200a401d49b1a2af7e946e57f0d2d4f7da96495f145490a38ce2a6faf365d7) |
| 10:00:38 | 95 | JLP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x8149777f…` [🐞](https://debug.barn.cow.fi/order/0x8149777fe30a8de9cc48a2f23149904ce05274a5e40c8c9e34bbc46a01080839) |
| 10:00:41 | 96 | INF → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x9ba3177e…` [🐞](https://debug.barn.cow.fi/order/0x9ba3177e4dae369dfd878ff7bdbbbe40255c0400c393aaf9d6d7d0272265264e) |
| 10:00:42 | 97 | ETH → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x55b0d23b…` [🐞](https://debug.barn.cow.fi/order/0x55b0d23b2e22f5f616ad81d2f1acadeb4abde95021d6f90871d60fa9dfc5501f) |
| 10:00:43 | 100 | GLDx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x3db6830d…` [🐞](https://debug.barn.cow.fi/order/0x3db6830ddf12d182f6fcade252cf240109ed42a7b9e5e171ca2fa153e83515b3) |
| 10:00:45 | 102 | Fartcoin → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2ed292cc…` [🐞](https://debug.barn.cow.fi/order/0x2ed292ccf9e05a4ce1334c5d791530aef5fc505b004751aacc021c98258dced1) |
| 10:00:45 | 98 | BNB → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xf3be5b8e…` [🐞](https://debug.barn.cow.fi/order/0xf3be5b8ecd166538efef5a5d965d253293d03c67a74f9a4f70200f1e98f852f6) |
| 10:01:22 | 103 | MEW → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x6a65e975…` [🐞](https://debug.barn.cow.fi/order/0x6a65e9758ef3bd26e3b51dc921365190de14d88a175ceed4cfd3f2f7a8dc6f5d) |
| 10:01:34 | 104 | BOME → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb2f55054…` [🐞](https://debug.barn.cow.fi/order/0xb2f55054564bff56e816dd8e98b312f4fceac67ff292649cc3cbdf7a47fadcdc) |
| 10:01:46 | 105 | hyloSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x8432f538…` [🐞](https://debug.barn.cow.fi/order/0x8432f5384c1153b55f1b92797ad4e4c98eaab34c107d7f99ff5f59e78f8732c3) |
| 10:01:54 | 106 | PSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x21639b98…` [🐞](https://debug.barn.cow.fi/order/0x21639b98fd13657d2a5b2c32a7b928aba638fd9666af038051cf335972dc199d) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 174 | 93.5% |
| cancelled | 11 | 5.9% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 0.5% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 7s | 9s | 18s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| GCBB…o5VC | 174 | 100.0% | 78 | 122,863 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| asao | 332 | 123 | 112 | 91.1% | 2 | 0 | 6 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| asao: SimulationFailed | 2 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 453 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 160 | 156 | 97.5% |
| market buy | 26 | 18 | 69.2% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 94 | 92 | 97.9% |
| wSOL → JUP | 28 | 28 | 100.0% |
| wSOL → USDT | 6 | 4 | 66.7% |
| JUP → USDC | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → PAID | 2 | 2 | 100.0% |
| wSOL → PYUSD | 2 | 1 | 50.0% |
| wSOL → CASH | 2 | 2 | 100.0% |
| wSOL → CRCLx | 2 | 1 | 50.0% |
| wSOL → USDv | 2 | 2 | 100.0% |
| wSOL → SKHY | 2 | 2 | 100.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → SPCX | 2 | 1 | 50.0% |
| wSOL → SPCXx | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 1 | 50.0% |
| wSOL → SPYx | 2 | 1 | 50.0% |
| wSOL → MU | 2 | 1 | 50.0% |
| USDT → USDC | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 0 | 0.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 0 | 0.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |

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
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 4 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 4 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 3 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 3 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 3 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 3 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 2 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 2 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 2 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 2 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 2 | 2 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 2 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 2 | 2 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 1 | 50.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 2 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 1 | 50.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 2 | 2 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 2 | 2 | 100.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 2 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 2 | 1 | 50.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 2 | 2 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 1 | 50.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 1 | 50.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 2 | 1 | 50.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
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
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 0 | 0.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 0 | 0.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 0 | 0.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 1 | 0 | 0.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 0 | 0.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 11 | 0 |
| Winner too late: creation blockhash expired | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 09:42:42 | wSOL → XAUt0 | market sell | Not filled within fill timeout (cancelled by sim) | `0xdf7cd29f…` [🐞](https://debug.barn.cow.fi/order/0xdf7cd29f5168014ee4be36fd84798bdc4b3c461692e6f984e5353924a035622b) |
| 09:42:42 | wSOL → EUROP | market sell | Not filled within fill timeout (cancelled by sim) | `0xd79a6aab…` [🐞](https://debug.barn.cow.fi/order/0xd79a6aab81da1dc2a480c3c5ecc9861b6a251e0fcd0b9e54c10bb3e739bbeda4) |
| 09:42:45 | wSOL → SPYx | market buy | Not filled within fill timeout (cancelled by sim) | `0x93e2736c…` [🐞](https://debug.barn.cow.fi/order/0x93e2736c2fcaad913197d527201acaa922fb684cb069edb4cf891344cb7019eb) |
| 09:42:45 | wSOL → MU | market buy | Not filled within fill timeout (cancelled by sim) | `0x89eb95be…` [🐞](https://debug.barn.cow.fi/order/0x89eb95bea245f39bffd7ff7accbac2574ee0c9769b21991330acb8aabfe5e8c3) |
| 09:42:48 | wSOL → PUMP | market buy | Not filled within fill timeout (cancelled by sim) | `0xe8e9e65e…` [🐞](https://debug.barn.cow.fi/order/0xe8e9e65e8773fc00f1e7bec94d30ce4fed04b0d0b2c71e73b1bf8d7a67a89c20) |
| 09:42:50 | wSOL → PYUSD | market buy | Not filled within fill timeout (cancelled by sim) | `0x21f39003…` [🐞](https://debug.barn.cow.fi/order/0x21f39003a86ff0fe458802d750418603b0bef7e835bcf96c160cd96a1e92e30e) |
| 09:42:51 | wSOL → CRCLx | market buy | Not filled within fill timeout (cancelled by sim) | `0x60598f50…` [🐞](https://debug.barn.cow.fi/order/0x60598f50b312e02fb98c52b2444939147a35bef417f6feb3fea4ec0a4a51c9c9) |
| 09:42:52 | wSOL → SPCX | market buy | Winner too late: creation blockhash expired | `0xbaf3e68c…` [🐞](https://debug.barn.cow.fi/order/0xbaf3e68c57d3f0db9056a5c95ce0f6a305e2ce1ae09265438864f2115ea21756) |
| 09:49:50 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4b224835…` [🐞](https://debug.barn.cow.fi/order/0x4b224835c356b8d31350e0ce7bfd877e5d8fd56f240ad91b9acfaf5a40413aba) |
| 09:49:50 | wSOL → USDT | market sell | Not filled within fill timeout (cancelled by sim) | `0xcca95693…` [🐞](https://debug.barn.cow.fi/order/0xcca956936c4a5622acd51cc2f7ff80bbfd17babc7997498b78475aff78a21a58) |
| 09:49:51 | wSOL → USDC | market buy | Not filled within fill timeout (cancelled by sim) | `0x27b07246…` [🐞](https://debug.barn.cow.fi/order/0x27b0724641546d573db97728044db981849652293229017601105d4cbbbfef71) |
| 09:49:51 | wSOL → USDT | market buy | Not filled within fill timeout (cancelled by sim) | `0xc24abd54…` [🐞](https://debug.barn.cow.fi/order/0xc24abd545c0577c6e7d2057d6a1fac61d595b3b01cd993a348aef4e3f20ddb4b) |
