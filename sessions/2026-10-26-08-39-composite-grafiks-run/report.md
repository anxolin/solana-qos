# Solana QoS report: 2026-10-26-08-39-composite-grafiks-run

Barn, orders created between `2026-10-26T08:40:44.714Z` and `2026-10-26T09:13:14.985Z`. Data fetched 2026-10-26T09:19:27+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 191 |
| Orders executed | **191** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 118 |
| Settlement txs | 90 |

## Scenario results

Target solver: `grafiks`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-same-direction-25 | 2026-10-26T08:40:44.714Z | 2026-10-26T08:41:27.737Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-26T08:43:54.275Z | 2026-10-26T08:50:18.477Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-cow | 2026-10-26T08:53:15.066Z | 2026-10-26T08:56:12.527Z | 15/15 | 0 | 15 | 15 | 100.0% |
| solver-token-coverage | 2026-10-26T08:57:29.595Z | 2026-10-26T08:58:43.772Z | 49/52 | 3 | 49 | 49 | 94.2% |
| solver-transaction-size | 2026-10-26T09:01:43.185Z | 2026-10-26T09:03:25.462Z | 10/10 | 0 | 10 | 10 | 100.0% |
| solver-fresh-accounts | 2026-10-26T09:04:29.416Z | 2026-10-26T09:04:48.428Z | 8/8 | 0 | 8 | 8 | 100.0% |

## Scenario

191 of 194 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 08:40:44 | 1 | 1 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 08:40:44 | 2 | 2 | sell 0.005 SOL → JUP | filled | 34s | 1 |  |
| 08:40:44 | 3 | 3 | sell 0.005 SOL → JUP | filled | 34s | 1 |  |
| 08:40:44 | 4 | 4 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 08:40:44 | 5 | 5 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 08:40:44 | 6 | 6 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 08:40:44 | 7 | 7 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 08:40:44 | 8 | 8 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 08:40:44 | 9 | 9 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 08:40:44 | 10 | 10 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 08:40:44 | 11 | 11 | sell 0.005 SOL → JUP | filled | 27s | 1 |  |
| 08:40:44 | 12 | 12 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 08:40:44 | 13 | 13 | sell 0.005 SOL → JUP | filled | 43s | 1 |  |
| 08:40:44 | 14 | 14 | sell 0.005 SOL → JUP | filled | 28s | 1 |  |
| 08:40:44 | 15 | 15 | sell 0.005 SOL → JUP | filled | 27s | 1 |  |
| 08:40:44 | 16 | 16 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 08:40:44 | 17 | 17 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 08:40:44 | 18 | 18 | sell 0.005 SOL → JUP | filled | 41s | 1 |  |
| 08:40:44 | 19 | 19 | sell 0.005 SOL → JUP | filled | 28s | 1 |  |
| 08:40:44 | 20 | 20 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 08:40:44 | 21 | 21 | sell 0.005 SOL → JUP | filled | 41s | 1 |  |
| 08:40:44 | 22 | 22 | sell 0.005 SOL → JUP | filled | 27s | 1 |  |
| 08:40:44 | 23 | 23 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 08:40:44 | 24 | 24 | sell 0.005 SOL → JUP | filled | 43s | 1 |  |
| 08:40:44 | 25 | 25 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 08:43:54 | 26 | 26 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 08:43:54 | 27 | 27 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 08:43:54 | 28 | 28 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 08:43:54 | 29 | 29 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 08:45:24 | 30 | 26 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 08:45:24 | 31 | 27 | sell 0.003 SOL → USDC | filled | 10s | 1 |  |
| 08:45:24 | 32 | 28 | sell 0.0035 SOL → USDC | filled | 8s | 1 |  |
| 08:45:24 | 33 | 29 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 08:45:24 | 34 | 30 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 08:45:24 | 35 | 31 | sell 0.003 SOL → USDC | filled | 8s | 1 |  |
| 08:45:24 | 36 | 32 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 08:45:24 | 37 | 33 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 08:46:54 | 38 | 26 | sell 0.0025 SOL → USDC | filled | 18s | 1 |  |
| 08:46:54 | 39 | 27 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 08:46:54 | 40 | 28 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 08:46:54 | 41 | 29 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 08:46:54 | 42 | 30 | sell 0.0025 SOL → USDC | filled | 18s | 1 |  |
| 08:46:54 | 43 | 31 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 08:46:54 | 44 | 32 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 08:46:54 | 45 | 33 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 08:46:54 | 46 | 34 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 08:46:54 | 47 | 35 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 08:46:54 | 48 | 36 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 08:46:54 | 49 | 37 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 08:46:54 | 50 | 38 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 08:46:54 | 51 | 39 | sell 0.003 SOL → USDC | filled | 8s | 1 |  |
| 08:46:54 | 52 | 40 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 08:46:54 | 53 | 41 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 08:48:24 | 54 | 26 | sell 0.0025 SOL → USDC | filled | 20s | 1 |  |
| 08:48:24 | 55 | 27 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 08:48:24 | 56 | 28 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 08:48:24 | 57 | 29 | sell 0.004 SOL → USDC | filled | 8s | 1 |  |
| 08:48:24 | 58 | 30 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 08:48:24 | 59 | 31 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 08:48:24 | 60 | 32 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 08:48:24 | 61 | 33 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 08:48:24 | 62 | 34 | sell 0.0025 SOL → USDC | filled | 19s | 1 |  |
| 08:48:24 | 63 | 35 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 08:48:24 | 64 | 36 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 08:48:24 | 65 | 37 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 08:48:24 | 66 | 38 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 08:48:24 | 67 | 39 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 08:48:24 | 68 | 40 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 08:48:24 | 69 | 41 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 08:48:24 | 70 | 42 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 08:48:24 | 71 | 43 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 08:48:24 | 72 | 44 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 08:48:24 | 73 | 45 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 08:48:24 | 74 | 46 | sell 0.0025 SOL → USDC | filled | 18s | 1 |  |
| 08:48:24 | 75 | 47 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 08:48:24 | 76 | 48 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 08:48:24 | 77 | 49 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 08:49:54 | 78 | 26 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 08:49:54 | 79 | 27 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 08:49:54 | 80 | 28 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 08:49:54 | 81 | 29 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 08:49:54 | 82 | 30 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 08:49:54 | 83 | 31 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 08:49:54 | 84 | 32 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 08:49:54 | 85 | 33 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 08:49:54 | 86 | 34 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 08:49:54 | 87 | 35 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 08:49:54 | 88 | 36 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 08:49:54 | 89 | 37 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 08:49:54 | 90 | 38 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 08:49:54 | 91 | 39 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 08:49:54 | 92 | 40 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 08:49:54 | 93 | 41 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 08:49:54 | 94 | 42 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 08:49:54 | 95 | 43 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 08:49:54 | 96 | 44 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 08:49:54 | 97 | 45 | sell 0.004 SOL → USDC | filled | 23s | 1 |  |
| 08:49:54 | 98 | 46 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 08:49:54 | 99 | 47 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 08:49:54 | 100 | 48 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 08:49:54 | 101 | 49 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 08:49:54 | 102 | 50 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 08:49:54 | 103 | 51 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 08:49:54 | 104 | 52 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 08:49:54 | 105 | 53 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 08:49:54 | 106 | 54 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 08:49:54 | 107 | 55 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 08:49:54 | 108 | 56 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 08:49:54 | 109 | 57 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 08:53:15 | 110 | 59 | buy 2.6 USDC ← SOL | filled | 8s | 1 |  |
| 08:53:15 | 111 | 61 | buy 1.3 USDC ← SOL | filled | 31s | 1 |  |
| 08:53:15 | 112 | 62 | buy 3.1 USDC ← SOL | filled | 12s | 1 |  |
| 08:53:15 | 113 | 63 | buy 3.1 USDT ← SOL | filled | 9s | 1 |  |
| 08:53:15 | 114 | 64 | buy 1.1 USDT ← SOL | filled | 12s | 1 |  |
| 08:53:15 | 115 | 65 | buy 3.2 USDC ← SOL | filled | 25s | 1 |  |
| 08:55:45 | 116 | 58 | sell 0.02 SOL → USDC | filled | 14s | 1 |  |
| 08:55:45 | 117 | 59 | buy 0.02 SOL ← USDC | filled | 12s | 1 |  |
| 08:55:45 | 118 | 60 | sell 0.03 SOL → USDC | filled | 12s | 1 |  |
| 08:55:45 | 119 | 61 | sell 1.2 USDC → SOL | filled | 18s | 1 |  |
| 08:55:45 | 120 | 62 | sell 3 USDC → USDT | filled | 12s | 1 |  |
| 08:55:45 | 121 | 63 | sell 3 USDT → USDC | filled | 27s | 1 |  |
| 08:55:45 | 122 | 64 | sell 1 USDT → USDC | filled | 24s | 1 |  |
| 08:55:45 | 123 | 65 | sell 3 USDC → USDT | filled | 11s | 1 |  |
| 08:55:45 | 124 | 66 | sell 0.02 SOL → JUP | filled | 12s | 1 |  |
| 08:57:29 | 125 | 67 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 7s | 1 |  |
| 08:57:29 | 126 | 68 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 7s | 1 |  |
| 08:57:29 | 127 | 69 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 8s | 1 |  |
| 08:57:29 | 128 | 70 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 32s | 1 |  |
| 08:57:29 | 129 | 71 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 7s | 1 |  |
| 08:57:29 | 130 | 72 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 8s | 1 |  |
| 08:57:29 | 131 | 73 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:57:29 | 132 | 74 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 15s | 1 |  |
| 08:57:29 | 133 | 75 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 16s | 1 |  |
| 08:57:29 | 134 | 76 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 16s | 1 |  |
| 08:57:29 | 135 | 77 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 16s | 1 |  |
| 08:57:29 | 136 | 78 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 16s | 1 |  |
| 08:57:29 | 137 | 79 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 17s | 1 |  |
| 08:57:29 | 138 | 80 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 17s | 1 |  |
| 08:57:29 | 139 | 81 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 17s | 1 |  |
| 08:57:29 | 140 | 82 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 16s | 1 |  |
| 08:57:29 | 141 | 83 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 17s | 1 |  |
| 08:57:29 | 142 | 84 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 17s | 1 |  |
| 08:57:29 | 143 | 85 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 18s | 1 |  |
| 08:57:29 | 144 | 86 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 18s | 1 |  |
| 08:57:29 | 145 | 87 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 14s | 1 |  |
| 08:57:29 | 146 | 88 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 14s | 1 |  |
| 08:57:29 | 147 | 89 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 15s | 1 |  |
| 08:57:29 | 148 | 90 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 16s | 1 |  |
| 08:57:29 | 149 | 91 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 16s | 1 |  |
| 08:57:29 | 150 | 92 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 21s | 1 |  |
| 08:57:29 | 151 | 93 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 21s | 1 |  |
| 08:57:29 | 152 | 94 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 24s | 1 |  |
| 08:57:29 | 153 | 95 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 21s | 1 |  |
| 08:57:29 | 154 | 96 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 21s | 1 |  |
| 08:57:29 | 155 | 97 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 21s | 1 |  |
| 08:57:29 | 156 | 98 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 19s | 1 |  |
| 08:57:29 | 157 | 99 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 22s | 1 |  |
| 08:57:29 | 158 | 100 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 22s | 1 |  |
| 08:57:29 | 159 | 101 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 20s | 1 |  |
| 08:57:29 | 160 | 102 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 20s | 1 |  |
| 08:57:29 | 161 | 103 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 20s | 1 |  |
| 08:57:36 | 162 | 67 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 15s | 1 |  |
| 08:57:36 | 163 | 68 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | filled | 15s | 1 |  |
| 08:57:37 | 164 | 69 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 15s | 1 |  |
| 08:58:01 | 165 | 70 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 31s | 1 |  |
| 08:57:37 | 166 | 71 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | filled | 15s | 1 |  |
| 08:57:37 | 167 | 72 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | filled | 15s | 1 |  |
| 08:57:31 | 168 | 73 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:57:44 | 169 | 74 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 10s | 1 |  |
| 08:57:45 | 170 | 75 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | filled | 12s | 1 |  |
| 08:57:45 | 171 | 76 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | filled | 56s | 1 |  |
| 08:57:45 | 172 | 77 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | filled | 12s | 1 |  |
| 08:57:45 | 173 | 78 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | filled | 10s | 1 |  |
| 08:57:46 | 174 | 79 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 4s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 08:57:46 | 175 | 80 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | filled | 11s | 1 |  |
| 08:57:47 | 176 | 81 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | filled | 10s | 1 |  |
| 09:01:43 | 177 | 104 | sell 0.005 SOL → EURC | filled | 9s | 1 |  |
| 09:01:43 | 178 | 108 | sell 0.005 SOL → JLP | filled | 9s | 1 |  |
| 09:03:13 | 179 | 104 | sell 0.005 SOL → EURC | filled | 12s | 1 |  |
| 09:03:13 | 180 | 105 | sell 0.005 SOL → EURC | filled | 12s | 1 |  |
| 09:03:13 | 181 | 106 | sell 0.005 SOL → EURC | filled | 12s | 1 |  |
| 09:03:13 | 182 | 107 | sell 0.005 SOL → EURC | filled | 9s | 1 |  |
| 09:03:13 | 183 | 108 | sell 0.00125 SOL → JLP | filled | 12s | 1 |  |
| 09:03:13 | 184 | 109 | sell 0.00125 SOL → JLP | filled | 10s | 1 |  |
| 09:03:13 | 185 | 110 | sell 0.00125 SOL → JLP | filled | 11s | 1 |  |
| 09:03:13 | 186 | 111 | sell 0.00125 SOL → JLP | filled | 11s | 1 |  |
| 09:04:29 | 187 | 112 | sell 0.1 SOL → USDC | filled | 12s | 1 |  |
| 09:04:29 | 188 | 113 | sell 0.1 SOL → USDC | filled | 11s | 1 |  |
| 09:04:29 | 189 | 114 | buy 10 USDC ← SOL | filled | 13s | 1 |  |
| 09:04:29 | 190 | 115 | buy 10 USDC ← SOL | filled | 18s | 1 |  |
| 09:04:29 | 191 | 116 | sell 0.1 SOL → USDT | filled | 13s | 1 |  |
| 09:04:29 | 192 | 117 | sell 0.1 SOL → USDT | filled | 11s | 1 |  |
| 09:04:29 | 193 | 118 | buy 10 USDT ← SOL | filled | 13s | 1 |  |
| 09:04:29 | 194 | 119 | buy 10 USDT ← SOL | filled | 19s | 1 |  |

### Rows without an order

3 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 1 | SOL → CRCLx | no route found |
| NoLiquidity | quote | 1 | SOL → CRCLx | no route found |
| BlockhashExpired | main | 1 | SOL → SPCX | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 191 (191 main, 0 acquire). Cleanup placed 115 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 08:41:30 | 2 | JUP → SOL (native) | Executed | `0x23209cf7…` [🐞](https://debug.barn.cow.fi/order/0x23209cf7f2e90bd091818a615fef20ef1317dd984b221798a7600495006cc1a2) |
| 08:41:32 | 4 | JUP → SOL (native) | Executed | `0xf9b8f4b6…` [🐞](https://debug.barn.cow.fi/order/0xf9b8f4b60c683f48c0d712cc4be7160ebb2bbc667f131715059232a937348963) |
| 08:41:32 | 3 | JUP → SOL (native) | Executed | `0x0ae308e7…` [🐞](https://debug.barn.cow.fi/order/0x0ae308e70278bc0e7f3577b5d99b9a42aa54a4e5e428d1b2e9f29bf68357c908) |
| 08:41:33 | 5 | JUP → SOL (native) | Executed | `0x4ad900df…` [🐞](https://debug.barn.cow.fi/order/0x4ad900df3fb824ac6a7e90dc10e2309619354c823c07e2d663cd87396ef73d12) |
| 08:41:34 | 6 | JUP → SOL (native) | Executed | `0x5814a7c8…` [🐞](https://debug.barn.cow.fi/order/0x5814a7c8410122aeaedacb090f0ff76116809f4b7365ba6ab21903b53d9631c8) |
| 08:41:35 | 7 | JUP → SOL (native) | Executed | `0x92472af2…` [🐞](https://debug.barn.cow.fi/order/0x92472af2d66594af55ae312daa37732c504e05a8578eb8d18a4699b970717243) |
| 08:41:36 | 8 | JUP → SOL (native) | Executed | `0x469ae6ff…` [🐞](https://debug.barn.cow.fi/order/0x469ae6ffab4fe065e69098caac183123381c6d86afa4920e0e555e5bc5b55d6e) |
| 08:41:37 | 9 | JUP → SOL (native) | Executed | `0x610c8242…` [🐞](https://debug.barn.cow.fi/order/0x610c82425f3f56b835909c10c495dc35ab3ed9ab51a0f97aceea274425b8943f) |
| 08:41:40 | 10 | JUP → SOL (native) | Executed | `0x80ae01c4…` [🐞](https://debug.barn.cow.fi/order/0x80ae01c48ca39d1be7754f9cca881c30aa724fd82613ef96c42b575242265e22) |
| 08:41:41 | 1 | JUP → SOL (native) | Executed | `0x18aa8572…` [🐞](https://debug.barn.cow.fi/order/0x18aa8572ed65218a5fec3e060e0d6c906434783db7178b7f2df03f38c4e32039) |
| 08:41:59 | 11 | JUP → SOL (native) | Executed | `0x02ed482c…` [🐞](https://debug.barn.cow.fi/order/0x02ed482cb0ed3458653778508d8d392e7e0151c396bab12f69a5a44afa3e76da) |
| 08:42:06 | 13 | JUP → SOL (native) | Executed | `0x9ed3caaf…` [🐞](https://debug.barn.cow.fi/order/0x9ed3caaf6b3e24a07088adae44b1696d83b91f2a50e5d610e7d57d0769a937a3) |
| 08:42:07 | 12 | JUP → SOL (native) | Executed | `0xea38853c…` [🐞](https://debug.barn.cow.fi/order/0xea38853c35267c034e0aa056a6c96545a60bc13c2e0f3cc93fb29a1b56f29fff) |
| 08:42:09 | 14 | JUP → SOL (native) | Executed | `0x8b9f2755…` [🐞](https://debug.barn.cow.fi/order/0x8b9f275536c42d63fcadcf8576782ad6865f484774c01ee1d181d56483aa8a5f) |
| 08:42:09 | 16 | JUP → SOL (native) | Executed | `0xc7a9f434…` [🐞](https://debug.barn.cow.fi/order/0xc7a9f4341c7331ccb5b8ed84289aa364283e67be4345ff3f3e26420a6772338a) |
| 08:42:10 | 15 | JUP → SOL (native) | Executed | `0xa1a2c7b3…` [🐞](https://debug.barn.cow.fi/order/0xa1a2c7b38d66b1e7f895985adf8d9bc62ee528912eeb8d21314bd93f2d9571e2) |
| 08:42:11 | 17 | JUP → SOL (native) | Executed | `0xc11bf5c3…` [🐞](https://debug.barn.cow.fi/order/0xc11bf5c3ab0c52d4837582847c48a8201736393ffa24e3b285f370ef181e406d) |
| 08:42:14 | 19 | JUP → SOL (native) | Executed | `0x922271f1…` [🐞](https://debug.barn.cow.fi/order/0x922271f148bc6ee6f846bffa90f1830a6ad171fbfe302113ce2c1a283c876bac) |
| 08:42:15 | 18 | JUP → SOL (native) | Executed | `0x55f124cd…` [🐞](https://debug.barn.cow.fi/order/0x55f124cdd0f2a03c452c59bbc59324ae9840f398325a53f23341cb6421a36eeb) |
| 08:42:18 | 20 | JUP → SOL (native) | Executed | `0x6e905944…` [🐞](https://debug.barn.cow.fi/order/0x6e905944d8f7d21ffc9f371babb235c47ab91a5a0f3c4989c40bd796358e13b7) |
| 08:42:39 | 21 | JUP → SOL (native) | Executed | `0xf2a7e0fd…` [🐞](https://debug.barn.cow.fi/order/0xf2a7e0fd28a2adc43589ebb6f2d6db120e85b2ef2c801255465805f091633750) |
| 08:42:41 | 22 | JUP → SOL (native) | Executed | `0xe36103f4…` [🐞](https://debug.barn.cow.fi/order/0xe36103f4479e7384dd8e0b38dd4c6e2cb9b081c44c0752547a4845b9100669cf) |
| 08:42:42 | 23 | JUP → SOL (native) | Executed | `0xc4dc66ed…` [🐞](https://debug.barn.cow.fi/order/0xc4dc66ed6683ef962a5a3d7c24cee3ecea178345157ee958fcea4fc2472daee4) |
| 08:42:49 | 25 | JUP → SOL (native) | Executed | `0x0cfa0727…` [🐞](https://debug.barn.cow.fi/order/0x0cfa072730332cb97fa82a08a8fa087ad63b3a5372b8d464cef594a3530c6cc4) |
| 08:42:54 | 24 | JUP → SOL (native) | Executed | `0x1852f084…` [🐞](https://debug.barn.cow.fi/order/0x1852f084fbd7dffc7230f82b01f7193f0ca0d983729fedc3d7ba47c35011b015) |
| 08:50:21 | 27 | USDC → SOL (native) | Executed | `0x411779dc…` [🐞](https://debug.barn.cow.fi/order/0x411779dc91054192159c3319826f5af11f449841791e82893486c0059e481f44) |
| 08:50:22 | 28 | USDC → SOL (native) | Executed | `0xcd8ecfc5…` [🐞](https://debug.barn.cow.fi/order/0xcd8ecfc5aad9860a5fbbb9831205f86a2823927477511a13973978a0887de8bf) |
| 08:50:23 | 29 | USDC → SOL (native) | Executed | `0x263de479…` [🐞](https://debug.barn.cow.fi/order/0x263de4792b366abcb8fe6207ae31a98a5559c7336404301a2b21e05183d4a08b) |
| 08:50:24 | 30 | USDC → SOL (native) | Executed | `0x5d2791c3…` [🐞](https://debug.barn.cow.fi/order/0x5d2791c33a4a53aa56dba17b9fb31448c9a0c80723b2c6021eef07565fa2db0e) |
| 08:50:25 | 31 | USDC → SOL (native) | Executed | `0x35875b82…` [🐞](https://debug.barn.cow.fi/order/0x35875b8226bc96449834f3a606742235e4b846c33b00685b80e752ef2ff0bf4b) |
| 08:50:26 | 32 | USDC → SOL (native) | Executed | `0x5ae011b5…` [🐞](https://debug.barn.cow.fi/order/0x5ae011b51ae84c4cd66bcb54c528b532581de71b641aa9dd5bff9b8cb3096c17) |
| 08:50:27 | 33 | USDC → SOL (native) | Executed | `0x29b6b5f0…` [🐞](https://debug.barn.cow.fi/order/0x29b6b5f017984c5b5cd51f490c84b68d7b62f99f9ca476e191344e2d7b8a6d3d) |
| 08:50:28 | 34 | USDC → SOL (native) | Executed | `0xae2258f7…` [🐞](https://debug.barn.cow.fi/order/0xae2258f7ff748efb16f0f15e88d9ba747a15aa978ee7e510ebcbcc3c9fabc682) |
| 08:50:29 | 35 | USDC → SOL (native) | Executed | `0x88f873c4…` [🐞](https://debug.barn.cow.fi/order/0x88f873c487d991e48a0b525f23f5aab6a4ba0a09acc74a402a488ac9122a4fbd) |
| 08:50:32 | 26 | USDC → SOL (native) | Executed | `0x48948abf…` [🐞](https://debug.barn.cow.fi/order/0x48948abf592f6cf3d4937bb0d810278e2834458dd122400eaef84c443d41585c) |
| 08:50:50 | 36 | USDC → SOL (native) | Executed | `0xb6ad9ac1…` [🐞](https://debug.barn.cow.fi/order/0xb6ad9ac18b4ab9bd9551d5461ac094b0fb7a576492ade7776ae62da7d3bf0d62) |
| 08:50:52 | 38 | USDC → SOL (native) | Executed | `0xa6b5fad0…` [🐞](https://debug.barn.cow.fi/order/0xa6b5fad0e211619c3b6cef5342c4b0bd3df43f8d8fa9cf6a4d2afd9ac56b337f) |
| 08:50:53 | 37 | USDC → SOL (native) | Executed | `0xd3351388…` [🐞](https://debug.barn.cow.fi/order/0xd33513884da68bafac5ab100a3d4960d2d98677b1f3629c3ddd9c2ee42cba493) |
| 08:51:01 | 39 | USDC → SOL (native) | Executed | `0x60f0fb14…` [🐞](https://debug.barn.cow.fi/order/0x60f0fb14790a74ea7fc38d139f43ddb7e373a68644da7347f23b483e1b37659c) |
| 08:51:19 | 43 | USDC → SOL (native) | Executed | `0x8d47d647…` [🐞](https://debug.barn.cow.fi/order/0x8d47d647900e729f40121dd52e3fa205ab0621bcb0f7177ca3f7539eea1ea89d) |
| 08:51:22 | 44 | USDC → SOL (native) | Executed | `0xdcc864fc…` [🐞](https://debug.barn.cow.fi/order/0xdcc864fc39f1e25573ff2e6db8cf6ba8b9a97796900ca1d29570de99ef3bcce0) |
| 08:51:24 | 45 | USDC → SOL (native) | Executed | `0xce9faf00…` [🐞](https://debug.barn.cow.fi/order/0xce9faf0040483cafd036be3e01936ec03d6cdf413b8d58ef35292b8a4cdca13a) |
| 08:51:28 | 42 | USDC → SOL (native) | Executed | `0x16c84da0…` [🐞](https://debug.barn.cow.fi/order/0x16c84da0f60117167fd44617afe00f6e233f342b1d284ea2245be8aec45e974d) |
| 08:51:30 | 40 | USDC → SOL (native) | Executed | `0xd307f8fa…` [🐞](https://debug.barn.cow.fi/order/0xd307f8faf5d786cd137ade9a7ac07093f0428ba12dd86e391d72109030444226) |
| 08:51:31 | 41 | USDC → SOL (native) | Executed | `0xe43ca3b7…` [🐞](https://debug.barn.cow.fi/order/0xe43ca3b7291ad8988c159d00bba0f85a68668504f45608a2e6e42b74869c07e5) |
| 08:51:51 | 46 | USDC → SOL (native) | Executed | `0x8ccd030f…` [🐞](https://debug.barn.cow.fi/order/0x8ccd030fbcceb4a757d490ea1b8ee1bf4fdd012aec01b4cc1e2e3a674ace4054) |
| 08:51:56 | 47 | USDC → SOL (native) | Executed | `0x695e4b0b…` [🐞](https://debug.barn.cow.fi/order/0x695e4b0bb3d3e75ffb8b83a4357b8bbab6599898a48be2851de069d1c668a470) |
| 08:52:00 | 48 | USDC → SOL (native) | Executed | `0x23da2e0e…` [🐞](https://debug.barn.cow.fi/order/0x23da2e0eb46f466295628811c8eec9a341f524599f370e8f325d3560a925d401) |
| 08:52:03 | 49 | USDC → SOL (native) | Executed | `0x582d967f…` [🐞](https://debug.barn.cow.fi/order/0x582d967fdb7d0c89c2c359f7b9bf8c6281c1baff55cd443e4fb96358cdc6caf3) |
| 08:52:06 | 50 | USDC → SOL (native) | Executed | `0x492cf035…` [🐞](https://debug.barn.cow.fi/order/0x492cf035ddc3914647eb7e4275add75c60404790f2971c357158de44e6ea7d51) |
| 08:52:07 | 51 | USDC → SOL (native) | Executed | `0x28ac7f31…` [🐞](https://debug.barn.cow.fi/order/0x28ac7f31d8cc4e05fcd16db7f914958848000d0f7343e8990689ef0f0d00a63d) |
| 08:52:12 | 52 | USDC → SOL (native) | Executed | `0xf3088b6a…` [🐞](https://debug.barn.cow.fi/order/0xf3088b6ab395795821b2e0590db78b694e85c84b6bfdc14594f749d1423a6507) |
| 08:52:15 | 53 | USDC → SOL (native) | Executed | `0x6faf4d27…` [🐞](https://debug.barn.cow.fi/order/0x6faf4d27e1734c639c5744c08308163f7f7da6770ebdcb9565cb9402d34b596a) |
| 08:52:16 | 54 | USDC → SOL (native) | Executed | `0x40483700…` [🐞](https://debug.barn.cow.fi/order/0x4048370036e6fd6f883dc9fbffcce708c2bd8694876b2f502ba728df2e347bf1) |
| 08:52:19 | 55 | USDC → SOL (native) | Executed | `0x581745e5…` [🐞](https://debug.barn.cow.fi/order/0x581745e52d9efa4c00366e541db2403406054fb278fc8879c9faee332f82d1ce) |
| 08:52:21 | 56 | USDC → SOL (native) | Executed | `0x4b181b3b…` [🐞](https://debug.barn.cow.fi/order/0x4b181b3bf0227114563dbbb0271b87a6387e4a8f8ba049cdfd1f33a0300900c6) |
| 08:52:25 | 57 | USDC → SOL (native) | Executed | `0x3bd8b763…` [🐞](https://debug.barn.cow.fi/order/0x3bd8b763c5f6679b3f7f3a89432d8541474e0e1433f7e1201b6b3af184bd0cab) |
| 08:56:15 | 59 | USDC → SOL (native) | Executed | `0x8f593d6f…` [🐞](https://debug.barn.cow.fi/order/0x8f593d6f8c956358adeca673982a6d417ae195abf2877321573a770d109a7359) |
| 08:56:16 | 60 | USDC → SOL (native) | Executed | `0xfdc5ee94…` [🐞](https://debug.barn.cow.fi/order/0xfdc5ee946404d33fc4c8c18ae7af3170c9388b8133c7ee32d9724a8adf7137e8) |
| 08:56:18 | 62 | USDT → SOL (native) | Executed | `0x57c79ac8…` [🐞](https://debug.barn.cow.fi/order/0x57c79ac844e74d5a39f4c2d74c95130149c89aa97293460cdb819fc31b335ce4) |
| 08:56:19 | 63 | USDC → SOL (native) | Executed | `0x4726352f…` [🐞](https://debug.barn.cow.fi/order/0x4726352f5d1e299c2da25a35d686bac6c5565d788260ff5ae1605a42b39c3064) |
| 08:56:23 | 64 | USDC → SOL (native) | Executed | `0xd068a128…` [🐞](https://debug.barn.cow.fi/order/0xd068a12827e3e474edad5e4261d5c7fd0ae01ed12cd8c44dd994e49b8ff59120) |
| 08:56:23 | 65 | USDT → SOL (native) | Executed | `0xee550b3e…` [🐞](https://debug.barn.cow.fi/order/0xee550b3eabe4649b7cff5ffe22f1ef12989c9f84585be739e89b2e92285274e5) |
| 08:56:23 | 65 | USDC → SOL (native) | Executed | `0x32ef256a…` [🐞](https://debug.barn.cow.fi/order/0x32ef256a7239e6d20651bf836f568dee51cc9e7f2cd3864af34e8a29fae8dcd2) |
| 08:56:27 | 58 | USDC → SOL (native) | Executed | `0xb48e33be…` [🐞](https://debug.barn.cow.fi/order/0xb48e33be887a782192258e4aa7fd9b581044fbe47c0698b874fd5c6b359b1303) |
| 08:56:27 | 66 | JUP → SOL (native) | Executed | `0x4e5be473…` [🐞](https://debug.barn.cow.fi/order/0x4e5be47325b2228f4a853547d91d4a7fb2883b68cb0d150218b7151594a9395b) |
| 08:58:46 | 68 | PAID → SOL (native) | Executed | `0xb1c159b7…` [🐞](https://debug.barn.cow.fi/order/0xb1c159b74aa1840212d96b694ca2fbcbbd25a8531ced1847056ea07ce75a1e9d) |
| 08:58:47 | 69 | USDG → SOL (native) | Executed | `0x8c91825a…` [🐞](https://debug.barn.cow.fi/order/0x8c91825aa17aeeeb7d796310cf5514ff0de4b49200e89e57308801a0b1ae1939) |
| 08:58:48 | 70 | PUMP → SOL (native) | Executed | `0x2058c219…` [🐞](https://debug.barn.cow.fi/order/0x2058c219d26aae46f701487d4da783aa7069813cbb36011c49d878f476ef2489) |
| 08:58:49 | 71 | PYUSD → SOL (native) | Executed | `0xdaa6304c…` [🐞](https://debug.barn.cow.fi/order/0xdaa6304cfcfa0fdac265db657b2111ff8158b4203325694f49c81cc9e0d86d41) |
| 08:58:50 | 72 | CASH → SOL (native) | Executed | `0xe524eef9…` [🐞](https://debug.barn.cow.fi/order/0xe524eef99119e350dbbd8cec34b6030b8019bbce55355af73b23676ab91465f0) |
| 08:58:52 | 74 | SPYx → SOL (native) | Executed | `0x04b1ed90…` [🐞](https://debug.barn.cow.fi/order/0x04b1ed906ced83380587930093f70e53c382b6a44ffc551499a2747133120698) |
| 08:58:54 | 75 | USDv → SOL (native) | Executed | `0x89d2f66d…` [🐞](https://debug.barn.cow.fi/order/0x89d2f66df39041b1a4a07691b41dcb8538ae5106104726cd01ac181d71c84d8b) |
| 08:58:56 | 76 | SKHY → SOL (native) | Executed | `0xe992dba7…` [🐞](https://debug.barn.cow.fi/order/0xe992dba76d54784709a9420259211862e57376436aaa79f4b74c29f3ec78e3f4) |
| 08:58:57 | 67 | ANSEM → SOL (native) | Executed | `0x49149792…` [🐞](https://debug.barn.cow.fi/order/0x491497927928d6efbe2291dc24e74e6fe3f000a09bfbf6296cbc63611848c2df) |
| 08:59:03 | 77 | NVDAx → SOL (native) | Executed | `0x449b8945…` [🐞](https://debug.barn.cow.fi/order/0x449b89451dbcb0e1af880b32148aacfedd0ef89cfdfcf75e75ef46cc111daabd) |
| 08:59:13 | 78 | MU → SOL (native) | Executed | `0xb9536d4d…` [🐞](https://debug.barn.cow.fi/order/0xb9536d4da669d68215cd4f86e9249304d6fa04252ee75fa308a165814f70e178) |
| 08:59:14 | 80 | SPCXx → SOL (native) | Executed | `0xe366a37f…` [🐞](https://debug.barn.cow.fi/order/0xe366a37fe84d902d9a8588a0c654940fde758fbf42090237b6cc83f8ad10b4c7) |
| 08:59:21 | 81 | TSLAx → SOL (native) | Executed | `0x3b83df28…` [🐞](https://debug.barn.cow.fi/order/0x3b83df28e89a50d985ef24aaaa17a381f24351e011cbda90cd1d65988b0b2770) |
| 08:59:27 | 82 | Bonk → SOL (native) | Executed | `0xb07ae445…` [🐞](https://debug.barn.cow.fi/order/0xb07ae4458198c2ecee268f9fc565c4fcbffc7e696696221229b8531fcbad1aa9) |
| 08:59:30 | 84 | POPCAT → SOL (native) | Executed | `0x77c03bd6…` [🐞](https://debug.barn.cow.fi/order/0x77c03bd6e3384f16c9898727c7a55c0f5ca5c455e4d18e2586c0a05bdbd7dd39) |
| 08:59:32 | 83 | $WIF → SOL (native) | Executed | `0x1e86bae3…` [🐞](https://debug.barn.cow.fi/order/0x1e86bae3ea72a6a1d7008ead236cd6b723b4002b6cc67328d630d578d655361b) |
| 08:59:35 | 85 | JitoSOL → SOL (native) | Executed | `0xc37b9d3e…` [🐞](https://debug.barn.cow.fi/order/0xc37b9d3e8a23c2f5a76a54fd25e0681bd6ac0ffde4c66ea97e6b81c16d35cde5) |
| 08:59:37 | 87 | JupSOL → SOL (native) | Executed | `0xa1762ad4…` [🐞](https://debug.barn.cow.fi/order/0xa1762ad4409be5cb75c312df414abd6485d892ca1d89b1996150fde3f0bf0e7b) |
| 08:59:40 | 88 | cbBTC → SOL (native) | Executed | `0x18866c0e…` [🐞](https://debug.barn.cow.fi/order/0x18866c0eef0d3ef7555b00e2f68270f6a5684a7132bfc841889d5bb0d9a1533e) |
| 08:59:41 | 86 | mSOL → SOL (native) | Executed | `0xf664e40f…` [🐞](https://debug.barn.cow.fi/order/0xf664e40f4031e4be81f99b42d4401415708c87ccab9b20f44be7c9ee91c3ba55) |
| 08:59:45 | 89 | USDe → SOL (native) | Executed | `0xc347dc21…` [🐞](https://debug.barn.cow.fi/order/0xc347dc21d6186aa2fbaf7cd993ed2317501596e321908a889e7e2b34461c8b3e) |
| 08:59:49 | 90 | EURC → SOL (native) | Executed | `0x27135f39…` [🐞](https://debug.barn.cow.fi/order/0x27135f392bc62bf85e1cbc975c3a89f7a054c9f7ad53862ea698600f592294d3) |
| 08:59:52 | 91 | USDY → SOL (native) | Executed | `0x51c61885…` [🐞](https://debug.barn.cow.fi/order/0x51c618859871a081ff7cf1c27adec7f1b97b6c302a98a5c7e378ab2982b68952) |
| 09:00:18 | 93 | INF → SOL (native) | Executed | `0x31aca7cf…` [🐞](https://debug.barn.cow.fi/order/0x31aca7cf2203132a11ae155ab11e3973285103c50427bf7bfd5b015c3fc5a60c) |
| 09:00:22 | 92 | JLP → SOL (native) | Executed | `0xa62eb29d…` [🐞](https://debug.barn.cow.fi/order/0xa62eb29d5de87f9ef0538be3ce2672fb7a3f2e50158eda0827cb9997ff253c59) |
| 09:00:22 | 94 | ETH → SOL (native) | Executed | `0x4e5a43b6…` [🐞](https://debug.barn.cow.fi/order/0x4e5a43b65d36b87626a1087d5126b2d7dff209d2c29f41b501acda9031d44515) |
| 09:00:24 | 95 | BNB → SOL (native) | Executed | `0x9db5c6b5…` [🐞](https://debug.barn.cow.fi/order/0x9db5c6b590bbad25ee6b869dadc027f2c6e27eea6486866c8096737c8632db98) |
| 09:00:32 | 99 | Fartcoin → SOL (native) | Executed | `0xc6919c3d…` [🐞](https://debug.barn.cow.fi/order/0xc6919c3d23e1dd181d4440e2042c4d365b8dc8de169cd01eecbb212356ef44a2) |
| 09:00:32 | 98 | EUROP → SOL (native) | Executed | `0xd7e86269…` [🐞](https://debug.barn.cow.fi/order/0xd7e86269f64c110bf6ef6ba198b7ad88dc6cd0df3459eb452b31b5c44010d8bc) |
| 09:00:42 | 97 | GLDx → SOL (native) | Executed | `0x554c6f19…` [🐞](https://debug.barn.cow.fi/order/0x554c6f19889ef589216c1bc6fa6fd075e75aa852ce5085213b8714797dd5843d) |
| 09:00:57 | 100 | MEW → SOL (native) | Executed | `0xcfab5951…` [🐞](https://debug.barn.cow.fi/order/0xcfab59514aba4cfca53e0020d5722ba2f1f0acd557155f678cf075dd751defa0) |
| 09:00:59 | 96 | XAUt0 → SOL (native) | Executed | `0x69f909fb…` [🐞](https://debug.barn.cow.fi/order/0x69f909fbe172ad20f90170ea9660e307fce42c9111ae56f727c1785eb67ca982) |
| 09:01:02 | 102 | hyloSOL → SOL (native) | Executed | `0x13a720c9…` [🐞](https://debug.barn.cow.fi/order/0x13a720c95ca7057605cb80839362fa001afac7f83a4f8cb96dea30f1b1032021) |
| 09:01:02 | 103 | PSOL → SOL (native) | Executed | `0xaae62d28…` [🐞](https://debug.barn.cow.fi/order/0xaae62d28ad15d406eef08f1d387b03282355380e4771f5189b6e6eed597ea99c) |
| 09:01:11 | 101 | BOME → SOL (native) | Executed | `0x2a0136f0…` [🐞](https://debug.barn.cow.fi/order/0x2a0136f038fe5082a36a8311620b51cea156c70d810b30b01e344b6ef1c9f0d7) |
| 09:03:28 | 105 | EURC → SOL (native) | Executed | `0x6c654a05…` [🐞](https://debug.barn.cow.fi/order/0x6c654a05df337b7ec373c1c07f2336dea252d3135831f1b59b2827527e9e7543) |
| 09:03:29 | 106 | EURC → SOL (native) | Executed | `0x668d473e…` [🐞](https://debug.barn.cow.fi/order/0x668d473ec809d7cd6979c6f23ae988af5a6f66cd3fd2ff143b3e5f1adb177b06) |
| 09:03:30 | 107 | EURC → SOL (native) | Executed | `0x04426b3a…` [🐞](https://debug.barn.cow.fi/order/0x04426b3a3b97c0c8b711b7df42b3bff9a36a86626b66adf2d7ddffcf151ca3bd) |
| 09:03:31 | 108 | JLP → SOL (native) | Executed | `0x36480c3c…` [🐞](https://debug.barn.cow.fi/order/0x36480c3c57c2d14fdc1c6c330353fa0248525fca468309a9fb458bfc4957574c) |
| 09:03:36 | 104 | EURC → SOL (native) | Executed | `0x4deeaaec…` [🐞](https://debug.barn.cow.fi/order/0x4deeaaec7c3477c6ae573de192a3b3b8c0d992ed093313978d2244909ad216fa) |
| 09:04:51 | 113 | USDC → SOL (native) | Executed | `0xbfce04b3…` [🐞](https://debug.barn.cow.fi/order/0xbfce04b3df343728af3f8dc1bd2f9cdaf33fd091096b62d8930df50c820d2da1) |
| 09:04:52 | 114 | USDC → SOL (native) | Executed | `0xf0c3ce04…` [🐞](https://debug.barn.cow.fi/order/0xf0c3ce0485c68f335e9e67339d61d129ded8b1c0360135edcc002cf1530be231) |
| 09:04:53 | 115 | USDC → SOL (native) | Executed | `0xeded377d…` [🐞](https://debug.barn.cow.fi/order/0xeded377d07e083f2c4b7453e90f2f4504dd5f5e78d3adc050d5e1daff842835c) |
| 09:04:54 | 116 | USDT → SOL (native) | Executed | `0x11da659a…` [🐞](https://debug.barn.cow.fi/order/0x11da659a7454a0628d84b1f64c34968a9ad8797b96c600f4b0da92d88c1878bb) |
| 09:04:55 | 117 | USDT → SOL (native) | Executed | `0x0f276e79…` [🐞](https://debug.barn.cow.fi/order/0x0f276e79ace8d3fc76d46abc135cd6189b665a4455c81928af4a3a5eb47c4dda) |
| 09:04:56 | 118 | USDT → SOL (native) | Executed | `0x3735297b…` [🐞](https://debug.barn.cow.fi/order/0x3735297b7586ddbf1993fcda3f99e2c7c3408104ac732bd6455f0a46bbe42664) |
| 09:04:57 | 119 | USDT → SOL (native) | Executed | `0xd0cc2300…` [🐞](https://debug.barn.cow.fi/order/0xd0cc2300eda0e55ffaa65bc304583934d308ef25fa293111502b5c71901b7906) |
| 09:04:57 | 112 | USDC → SOL (native) | Executed | `0xb5b89313…` [🐞](https://debug.barn.cow.fi/order/0xb5b89313b165dec141454621095c4f9759a0fa5f970f321c120715365a6f7e28) |
| 09:10:04 | 79 | SPCX → SOL (native) | Executed | `0x266e7705…` [🐞](https://debug.barn.cow.fi/order/0x266e77056fb8e80a0dfd5b51718fee2b5393032c2c18bfd952f2824d221dee99) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 191 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 7s | 10s | 18s | 51s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| AuwL…YzVj | 191 | 100.0% | 90 | 131,018 | 7s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| grafiks | 430 | 176 | 164 | 93.2% | 3 | 4 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 3 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 378 times
- Orders filtered for `in_flight`: 6 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 167 | 167 | 100.0% |
| market buy | 24 | 24 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 94 | 94 | 100.0% |
| wSOL → JUP | 26 | 26 | 100.0% |
| wSOL → USDT | 6 | 6 | 100.0% |
| wSOL → EURC | 6 | 6 | 100.0% |
| wSOL → JLP | 6 | 6 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 2 | 100.0% |
| wSOL → PAID | 2 | 2 | 100.0% |
| wSOL → PYUSD | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 2 | 100.0% |
| wSOL → USDv | 2 | 2 | 100.0% |
| wSOL → SKHY | 2 | 2 | 100.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → SPCXx | 2 | 2 | 100.0% |
| wSOL → TSLAx | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 5 | 5 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 5 | 5 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 5 | 5 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 5 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 4 | 4 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 4 | 4 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 4 | 4 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 4 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 3 | 3 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 3 | 3 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 3 | 3 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 3 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 3 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 2 | 2 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 2 | 2 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 2 | 2 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 2 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 2 | 2 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 2 | 2 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 2 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 2 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 2 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 2 | 100.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 2 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 2 | 2 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 2 | 2 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 2 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 2 | 2 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 2 | 2 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 1 | 1 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 1 | 1 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 1 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 1 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 1 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 1 | 1 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 1 | 1 | 100.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 1 | 1 | 100.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |
| `52CfB35yd7jyGA6U2198WmCDVV8wi3Xg48S4MgMDvKR1` | 1 | 1 | 100.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 1 | 1 | 100.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 1 | 100.0% |
| `cnt7zt27wGwu9SZufyuytxmTyFYaS6HhUUpLgpQdkup` | 1 | 1 | 100.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 1 | 100.0% |
| `7ehtrkWqiruHhxCfG9gaCApJ3prnfGuEsYVuqB948SeJ` | 1 | 1 | 100.0% |
| `DBKSmR7E2tkDuZNeweWTCNenv871nxaCVThANH8eQJLV` | 1 | 1 | 100.0% |
| `Bk7AYQexQvtetasHf5tR8jV69rvdMHEF699K77ZT3S3H` | 1 | 1 | 100.0% |
| `FCMwP3inMPkh6iUYYee8F9kHE8BtMUPCTAJ6ifPfo7Vy` | 1 | 1 | 100.0% |
| `4b6B15qXF9dZuuFwX66EZV6hzTRcFf37P9oRFYerfzbN` | 1 | 1 | 100.0% |
