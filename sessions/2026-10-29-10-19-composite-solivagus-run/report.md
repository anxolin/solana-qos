# Solana QoS report: 2026-10-29-10-19-composite-solivagus-run

Barn, orders created between `2026-10-29T10:20:05.367Z` and `2026-10-29T10:44:06.194Z`. Data fetched 2026-10-29T10:49:14+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 168 |
| Orders executed | **97** (57.7%) |
| Sponsored orders never created on-chain | 10 (6.0%) |
| Traders | 106 |
| Settlement txs | 97 |

## Scenario results

Target solver: `solivagus`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-29T10:20:05.367Z | 2026-10-29T10:20:44.996Z | 5/6 | 1 | 7 | 7 | 83.3% |
| solver-same-direction-25 | 2026-10-29T10:21:41.049Z | 2026-10-29T10:23:01.320Z | 12/25 | 13 | 25 | 12 | 48.0% |
| solver-burst-sell | 2026-10-29T10:25:11.907Z | 2026-10-29T10:32:34.977Z | 47/84 | 37 | 84 | 47 | 56.0% |
| solver-cow | 2026-10-29T10:35:28.209Z | 2026-10-29T10:38:16.277Z | 15/15 | 0 | 15 | 15 | 100.0% |
| solver-token-coverage | 2026-10-29T10:39:37.934Z | 2026-10-29T10:41:04.166Z | 16/52 | 36 | 37 | 16 | 30.8% |

## Scenario

95 of 182 scenario rows completed. 0 retries, 1 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 10:20:05 | 1 | 1 | sell 0.005 SOL → USDC | filled | 15s | 1 |  |
| 10:20:05 | 2 | 2 | sell 0.005 SOL → USDT | filled | 9s | 1 |  |
| 10:20:05 | 3 | 3 | sell 0.5 JUP → USDC | failed | 15s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 10:20:20 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 10s | 1 |  |
| 10:20:14 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 10s | 1 |  |
| 10:20:21 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 24s | 2 |  |
| 10:21:41 | 7 | 4 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 10:21:41 | 8 | 5 | sell 0.005 SOL → JUP | failed | 74s | 1 | main timeout |
| 10:21:41 | 9 | 6 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 10:21:41 | 10 | 7 | sell 0.005 SOL → JUP | filled | 76s | 1 |  |
| 10:21:41 | 11 | 8 | sell 0.005 SOL → JUP | filled | 59s | 1 |  |
| 10:21:41 | 12 | 9 | sell 0.005 SOL → JUP | filled | 55s | 1 |  |
| 10:21:41 | 13 | 10 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 10:21:41 | 14 | 11 | sell 0.005 SOL → JUP | failed | 77s | 1 | main timeout |
| 10:21:41 | 15 | 12 | sell 0.005 SOL → JUP | failed | 77s | 1 | main timeout |
| 10:21:41 | 16 | 13 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 10:21:41 | 17 | 14 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 10:21:41 | 18 | 15 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 10:21:41 | 19 | 16 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 10:21:41 | 20 | 17 | sell 0.005 SOL → JUP | filled | 37s | 1 |  |
| 10:21:41 | 21 | 18 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 10:21:41 | 22 | 19 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 10:21:41 | 23 | 20 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 10:21:41 | 24 | 21 | sell 0.005 SOL → JUP | filled | 80s | 1 |  |
| 10:21:41 | 25 | 22 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 10:21:41 | 26 | 23 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 10:21:41 | 27 | 24 | sell 0.005 SOL → JUP | filled | 41s | 1 |  |
| 10:21:41 | 28 | 25 | sell 0.005 SOL → JUP | filled | 48s | 1 |  |
| 10:21:41 | 29 | 26 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 10:21:41 | 30 | 27 | sell 0.005 SOL → JUP | filled | 51s | 1 |  |
| 10:21:41 | 31 | 28 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 10:25:11 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 10:25:11 | 33 | 30 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 10:25:11 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 10:25:11 | 35 | 32 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 10:26:41 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 52s | 1 |  |
| 10:26:41 | 37 | 30 | sell 0.003 SOL → USDC | filled | 48s | 1 |  |
| 10:26:41 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 40s | 1 |  |
| 10:26:41 | 39 | 32 | sell 0.004 SOL → USDC | filled | 28s | 1 |  |
| 10:26:41 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 44s | 1 |  |
| 10:26:41 | 41 | 34 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 10:26:41 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 10:26:41 | 43 | 36 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 10:28:11 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 73s | 1 | main timeout |
| 10:28:11 | 45 | 30 | sell 0.003 SOL → USDC | failed | 73s | 1 | main timeout |
| 10:28:11 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 72s | 1 |  |
| 10:28:11 | 47 | 32 | sell 0.004 SOL → USDC | failed | 72s | 1 | main timeout |
| 10:28:11 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 73s | 1 | main timeout |
| 10:28:11 | 49 | 34 | sell 0.003 SOL → USDC | filled | 6s | 1 |  |
| 10:28:11 | 50 | 35 | sell 0.0035 SOL → USDC | failed | 73s | 1 | main timeout |
| 10:28:11 | 51 | 36 | sell 0.004 SOL → USDC | failed | 74s | 1 | main timeout |
| 10:28:11 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 50s | 1 |  |
| 10:28:11 | 53 | 38 | sell 0.003 SOL → USDC | filled | 34s | 1 |  |
| 10:28:11 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 67s | 1 |  |
| 10:28:11 | 55 | 40 | sell 0.004 SOL → USDC | filled | 58s | 1 |  |
| 10:28:11 | 56 | 41 | sell 0.0025 SOL → USDC | failed | 74s | 1 | main timeout |
| 10:28:11 | 57 | 42 | sell 0.003 SOL → USDC | filled | 53s | 1 |  |
| 10:28:11 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 30s | 1 |  |
| 10:28:11 | 59 | 44 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 10:29:41 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 10:29:41 | 61 | 30 | sell 0.003 SOL → USDC | failed | 78s | 1 | main timeout |
| 10:29:41 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 48s | 1 |  |
| 10:29:41 | 63 | 32 | sell 0.004 SOL → USDC | filled | 64s | 1 |  |
| 10:29:41 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 10:29:41 | 65 | 34 | sell 0.003 SOL → USDC | failed | 74s | 1 | main timeout |
| 10:29:41 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 10:29:41 | 67 | 36 | sell 0.004 SOL → USDC | filled | 68s | 1 |  |
| 10:29:41 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 10:29:41 | 69 | 38 | sell 0.003 SOL → USDC | failed | 76s | 1 | main timeout |
| 10:29:41 | 70 | 39 | sell 0.0035 SOL → USDC | failed | 74s | 1 | main timeout |
| 10:29:41 | 71 | 40 | sell 0.004 SOL → USDC | filled | 55s | 1 |  |
| 10:29:41 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 10:29:41 | 73 | 42 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 10:29:41 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 43s | 1 |  |
| 10:29:41 | 75 | 44 | sell 0.004 SOL → USDC | failed | 75s | 1 | main timeout |
| 10:29:41 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 28s | 1 |  |
| 10:29:41 | 77 | 46 | sell 0.003 SOL → USDC | filled | 59s | 1 |  |
| 10:29:41 | 78 | 47 | sell 0.0035 SOL → USDC | failed | 79s | 1 | main timeout |
| 10:29:41 | 79 | 48 | sell 0.004 SOL → USDC | filled | 25s | 1 |  |
| 10:29:41 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 10:29:41 | 81 | 50 | sell 0.003 SOL → USDC | filled | 38s | 1 |  |
| 10:29:41 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 79s | 1 |  |
| 10:29:41 | 83 | 52 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 10:31:11 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 81s | 1 | main timeout |
| 10:31:11 | 85 | 30 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 10:31:11 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 81s | 1 | main timeout |
| 10:31:11 | 87 | 32 | sell 0.004 SOL → USDC | failed | 75s | 1 | main timeout |
| 10:31:11 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 10:31:11 | 89 | 34 | sell 0.003 SOL → USDC | failed | 76s | 1 | main timeout |
| 10:31:11 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 59s | 1 |  |
| 10:31:11 | 91 | 36 | sell 0.004 SOL → USDC | failed | 81s | 1 | main timeout |
| 10:31:11 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 10:31:11 | 93 | 38 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 10:31:11 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 82s | 1 | main timeout |
| 10:31:11 | 95 | 40 | sell 0.004 SOL → USDC | filled | 70s | 1 |  |
| 10:31:11 | 96 | 41 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 10:31:11 | 97 | 42 | sell 0.003 SOL → USDC | failed | 76s | 1 | main timeout |
| 10:31:11 | 98 | 43 | sell 0.0035 SOL → USDC | failed | 81s | 1 | main timeout |
| 10:31:11 | 99 | 44 | sell 0.004 SOL → USDC | filled | 66s | 1 |  |
| 10:31:11 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 10:31:11 | 101 | 46 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 10:31:11 | 102 | 47 | sell 0.0035 SOL → USDC | filled | 55s | 1 |  |
| 10:31:11 | 103 | 48 | sell 0.004 SOL → USDC | filled | 33s | 1 |  |
| 10:31:11 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 81s | 1 | main timeout |
| 10:31:11 | 105 | 50 | sell 0.003 SOL → USDC | failed | 80s | 1 | main timeout |
| 10:31:11 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 10:31:11 | 107 | 52 | sell 0.004 SOL → USDC | filled | 29s | 1 |  |
| 10:31:11 | 108 | 53 | sell 0.0025 SOL → USDC | failed | 82s | 1 | main timeout |
| 10:31:11 | 109 | 54 | sell 0.003 SOL → USDC | filled | 83s | 1 |  |
| 10:31:11 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 39s | 1 |  |
| 10:31:11 | 111 | 56 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 10:31:11 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 42s | 1 |  |
| 10:31:11 | 113 | 58 | sell 0.003 SOL → USDC | failed | 83s | 1 | main timeout |
| 10:31:11 | 114 | 59 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 10:31:11 | 115 | 60 | sell 0.004 SOL → USDC | filled | 49s | 1 |  |
| 10:35:28 | 116 | 62 | buy 2.6 USDC ← SOL | filled | 31s | 1 |  |
| 10:35:28 | 117 | 64 | buy 1.3 USDC ← SOL | filled | 15s | 1 |  |
| 10:35:28 | 118 | 65 | buy 3.1 USDC ← SOL | filled | 24s | 1 |  |
| 10:35:28 | 119 | 66 | buy 3.1 USDT ← SOL | filled | 18s | 1 |  |
| 10:35:28 | 120 | 67 | buy 1.1 USDT ← SOL | filled | 25s | 1 |  |
| 10:35:28 | 121 | 68 | buy 3.2 USDC ← SOL | filled | 28s | 1 |  |
| 10:37:58 | 122 | 61 | sell 0.02 SOL → USDC | filled | 14s | 1 |  |
| 10:37:58 | 123 | 62 | buy 0.02 SOL ← USDC | filled | 18s | 1 |  |
| 10:37:58 | 124 | 63 | sell 0.03 SOL → USDC | filled | 11s | 1 |  |
| 10:37:58 | 125 | 64 | sell 1.2 USDC → SOL | filled | 8s | 1 |  |
| 10:37:58 | 126 | 65 | sell 3 USDC → USDT | filled | 18s | 1 |  |
| 10:37:58 | 127 | 66 | sell 3 USDT → USDC | filled | 8s | 1 |  |
| 10:37:58 | 128 | 67 | sell 1 USDT → USDC | filled | 15s | 1 |  |
| 10:37:58 | 129 | 68 | sell 3 USDC → USDT | filled | 8s | 1 |  |
| 10:37:58 | 130 | 69 | sell 0.02 SOL → JUP | filled | 15s | 1 |  |
| 10:39:38 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 44s | 1 | main expired |
| 10:39:38 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 44s | 1 | main expired |
| 10:39:38 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 44s | 1 | main expired |
| 10:39:38 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 78s | 1 | main timeout |
| 10:39:38 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 41s | 1 | main expired |
| 10:39:38 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 41s | 1 | main expired |
| 10:39:38 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 41s | 1 | main expired |
| 10:39:38 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 27s | 1 |  |
| 10:39:38 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 41s | 1 | main expired |
| 10:39:38 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 20s | 1 |  |
| 10:39:39 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 76s | 1 | main timeout |
| 10:39:39 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 19s | 1 |  |
| 10:39:39 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 41s | 1 | main expired |
| 10:39:39 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 41s | 1 | main expired |
| 10:39:39 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 42s | 1 | main expired |
| 10:39:39 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 20s | 1 |  |
| 10:39:39 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 32s | 1 |  |
| 10:39:39 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 29s | 1 |  |
| 10:39:39 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 39s | 1 |  |
| 10:39:39 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 81s | 1 | main timeout |
| 10:39:40 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 32s | 1 |  |
| 10:39:40 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 32s | 1 |  |
| 10:39:40 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 21s | 1 |  |
| 10:39:40 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 48s | 1 |  |
| 10:39:40 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 80s | 1 | main timeout |
| 10:39:40 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 26s | 1 |  |
| 10:39:40 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 81s | 1 | main timeout |
| 10:39:40 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 82s | 1 | main timeout |
| 10:39:40 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 83s | 1 | main timeout |
| 10:39:40 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 18s | 1 |  |
| 10:39:41 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 46s | 1 |  |
| 10:39:41 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 82s | 1 | main timeout |
| 10:39:41 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 65s | 1 |  |
| 10:39:41 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 81s | 1 | main timeout |
| 10:39:41 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 82s | 1 | main timeout |
| 10:39:41 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 19s | 1 |  |
| 10:39:41 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 82s | 1 | main timeout |
| 10:40:22 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:21 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:22 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:56 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:19 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:19 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:19 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:06 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:20 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:39:58 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:54 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:39:58 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:20 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:20 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:40:21 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

16 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 15 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |

Scenario orders: 168 (166 main, 2 acquire). Cleanup placed 69 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 10:20:47 | 1 | USDC → SOL (native) | Executed | `0x8598c867…` [🐞](https://debug.barn.cow.fi/order/0x8598c8674b1aa628bf6d3d4d890991f36cb57e31fe48523e5a9a6f4173fbec62) |
| 10:20:47 | 2 | USDT → SOL (native) | Executed | `0xac739061…` [🐞](https://debug.barn.cow.fi/order/0xac739061647356b8cc2c8537d99f5047e9b89a938b456e6ac9bf6d1ee57163f7) |
| 10:20:49 | 3 | USDC → SOL (native) | Executed | `0x0090971b…` [🐞](https://debug.barn.cow.fi/order/0x0090971ba8d9cb4ab83f2e201b75496ad649b258eabe7d0ea6f4215980f74771) |
| 10:23:06 | 7 | JUP → SOL (native) | Executed | `0xc74dfbfd…` [🐞](https://debug.barn.cow.fi/order/0xc74dfbfdfe99555999000c768ec74418f3c9595807ea813c5ca3b7568eeef11a) |
| 10:23:07 | 8 | JUP → SOL (native) | Executed | `0xc2bffcab…` [🐞](https://debug.barn.cow.fi/order/0xc2bffcabf0ec96351a8b121f44945f98798cf1b6acbb494e4c8e991f7080f665) |
| 10:23:10 | 9 | JUP → SOL (native) | Executed | `0xe6551ba2…` [🐞](https://debug.barn.cow.fi/order/0xe6551ba20d404adfbb881a5a352678ed701a8f8a1c6e2bed661127c66736802e) |
| 10:23:17 | 14 | JUP → SOL (native) | Executed | `0x8185e149…` [🐞](https://debug.barn.cow.fi/order/0x8185e149fc365c1540fc1b9ea0732283a7c111402705a96e592ac4eef4084939) |
| 10:23:30 | 17 | JUP → SOL (native) | Executed | `0xcbcd7109…` [🐞](https://debug.barn.cow.fi/order/0xcbcd71090d25f5ad59d0dcc9027262f6e81099d9a5e25c7a53a5db9ab58eb201) |
| 10:23:36 | 21 | JUP → SOL (native) | Executed | `0xc67549f1…` [🐞](https://debug.barn.cow.fi/order/0xc67549f1bdb82821464e2829800a63329de9ec5e86d06349b00946aaae22a4ed) |
| 10:23:37 | 20 | JUP → SOL (native) | Executed | `0x6bce118c…` [🐞](https://debug.barn.cow.fi/order/0x6bce118cb92c8afccae7f692b6d6345b40282e5e39a451671daae109dd6ab377) |
| 10:23:45 | 22 | JUP → SOL (native) | Executed | `0x53c4bfd8…` [🐞](https://debug.barn.cow.fi/order/0x53c4bfd83b6ff5fc44a98a8a955d61d7867b97fb40cbcfd81718b9f323042fa8) |
| 10:23:48 | 24 | JUP → SOL (native) | Executed | `0xb0685976…` [🐞](https://debug.barn.cow.fi/order/0xb06859766cbb3c530c92290c067e19d33550d18b85a3f8781d454da0d9eb1f06) |
| 10:23:55 | 27 | JUP → SOL (native) | Executed | `0xfed689b9…` [🐞](https://debug.barn.cow.fi/order/0xfed689b985d8ecdbb04df2e1942d09e02e0c9e38fcddd88f2f0f664046073ec5) |
| 10:23:56 | 23 | JUP → SOL (native) | Executed | `0x0785db7c…` [🐞](https://debug.barn.cow.fi/order/0x0785db7c2cc2dbafcecd58e93978239cd25c69c371c373236b719b9d42d9db7d) |
| 10:24:01 | 25 | JUP → SOL (native) | Executed | `0xa2e898ef…` [🐞](https://debug.barn.cow.fi/order/0xa2e898efc8b303a31e29ecef8261dc1c862926426cd8e38d4c5729ca0045f0cb) |
| 10:32:38 | 30 | USDC → SOL (native) | Executed | `0x373ae71e…` [🐞](https://debug.barn.cow.fi/order/0x373ae71e592a52057c792a40c83c770bdcae5cc48b2f311c8925b218c924d8f8) |
| 10:32:38 | 31 | USDC → SOL (native) | Executed | `0x6fdecf7e…` [🐞](https://debug.barn.cow.fi/order/0x6fdecf7e4e1eeb15fb7777eb76137faa2d4ec8382ee3bf518cfa094b0298f847) |
| 10:32:39 | 32 | USDC → SOL (native) | Executed | `0x2a8e3a73…` [🐞](https://debug.barn.cow.fi/order/0x2a8e3a7309580265d27baa2280a1db0508bcb9c0fe66b4183a4e689a9102473b) |
| 10:32:40 | 33 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xcd56887b…` [🐞](https://debug.barn.cow.fi/order/0xcd56887bb54eda2e44482822d6d76f9c5d344cf4f3cab22a4e6cdad44f348b23) |
| 10:32:41 | 34 | USDC → SOL (native) | Executed | `0x6da9735d…` [🐞](https://debug.barn.cow.fi/order/0x6da9735d5163227a4a2cdbcbf7a257ab05bd7400b97e8be23875fddabad7a5bd) |
| 10:32:42 | 35 | USDC → SOL (native) | Executed | `0x1b26359d…` [🐞](https://debug.barn.cow.fi/order/0x1b26359d2912e794e96543f8a1be18ff56751be55cf1b773ca559e58701d8fef) |
| 10:32:43 | 36 | USDC → SOL (native) | Executed | `0x4e3bcfae…` [🐞](https://debug.barn.cow.fi/order/0x4e3bcfae98940cd653c5a633664ab84a36cc5fbb1eaaabfe001b494e8b718ae4) |
| 10:32:44 | 37 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb4c5b161…` [🐞](https://debug.barn.cow.fi/order/0xb4c5b1614b1c2e40abc16779af967401f121fe77b6500a623d86998a8dba2d77) |
| 10:32:48 | 29 | USDC → SOL (native) | Executed | `0xe76e1616…` [🐞](https://debug.barn.cow.fi/order/0xe76e1616fe10a6e8d1c852a0a6927cbc1d4b1649fb553f73832f64a297961c19) |
| 10:32:49 | 38 | USDC → SOL (native) | Executed | `0x7af225c7…` [🐞](https://debug.barn.cow.fi/order/0x7af225c72809be33e3ae4bdca6b4e062e6d9588a4c0bb7362ec32abe9652c469) |
| 10:32:58 | 39 | USDC → SOL (native) | Executed | `0x071c12b7…` [🐞](https://debug.barn.cow.fi/order/0x071c12b70cff0a95c947d3eb4432e76a0a64806999c4843723791d68b146126a) |
| 10:33:09 | 40 | USDC → SOL (native) | Executed | `0x6c827314…` [🐞](https://debug.barn.cow.fi/order/0x6c82731444e538eb453920f6ac0788de803142fa9dd8995605dabdd03358ba82) |
| 10:33:10 | 41 | USDC → SOL (native) | Executed | `0x6e6af3f7…` [🐞](https://debug.barn.cow.fi/order/0x6e6af3f7b60c021f67e069b89d9b13bdb99748b4df8f11eacd73c15c00163fa2) |
| 10:33:11 | 42 | USDC → SOL (native) | Executed | `0x55f4047c…` [🐞](https://debug.barn.cow.fi/order/0x55f4047cecee7e16b7f6ef3b150b20d141079406d68db3dc7ef24e5495e09cb7) |
| 10:33:25 | 43 | USDC → SOL (native) | Executed | `0x1ce4730d…` [🐞](https://debug.barn.cow.fi/order/0x1ce4730d070cd7bef58786826f81a593dca14d939a1034510fb07197e1c7182d) |
| 10:33:28 | 44 | USDC → SOL (native) | Executed | `0x2a2d3b55…` [🐞](https://debug.barn.cow.fi/order/0x2a2d3b55d30e620c57e989a57493a70796f00b9f5617758a446f5cbeb9dc8a19) |
| 10:33:34 | 45 | USDC → SOL (native) | Executed | `0x1356e16b…` [🐞](https://debug.barn.cow.fi/order/0x1356e16b1eab3ace64ba8c19a0aede4453de4fd3dfba4f3013d55d0418efdd8d) |
| 10:33:37 | 46 | USDC → SOL (native) | Executed | `0x0a26595b…` [🐞](https://debug.barn.cow.fi/order/0x0a26595b1ba3e460c929154c01bcb3758e6e00011857357926b18572b9fa8a9b) |
| 10:33:45 | 47 | USDC → SOL (native) | Executed | `0x33ac73ea…` [🐞](https://debug.barn.cow.fi/order/0x33ac73ea0124b17504ba2b287875a45e86491abc2aade4a9d7930cd43bcc52aa) |
| 10:33:53 | 48 | USDC → SOL (native) | Executed | `0xba976d6f…` [🐞](https://debug.barn.cow.fi/order/0xba976d6fc02ef343c0f6bc6b6bf9971a29ad2efd21f142b3ca46b7a945b928e0) |
| 10:34:18 | 49 | USDC → SOL (native) | Executed | `0xbfd25fc8…` [🐞](https://debug.barn.cow.fi/order/0xbfd25fc85fbfb900661047a79da767cd80bb7d87082df6862900c1d8fb6c2ce5) |
| 10:34:21 | 51 | USDC → SOL (native) | Executed | `0x2cfbca19…` [🐞](https://debug.barn.cow.fi/order/0x2cfbca19c9b3905a2c8a7a8ac67a0aa5035a8faffd0d68a9759d3c48439b2774) |
| 10:34:25 | 50 | USDC → SOL (native) | Executed | `0xd77e34b5…` [🐞](https://debug.barn.cow.fi/order/0xd77e34b57a2c8d70f32e8a0dfa6f92beca06b94ff4a5487c7efa55969bccfb4b) |
| 10:34:33 | 52 | USDC → SOL (native) | Executed | `0x1a8d29c6…` [🐞](https://debug.barn.cow.fi/order/0x1a8d29c6b21b2cc2c66d48798e1b1a0d60748a8010f66c9ba4ef8ae0b6f626b0) |
| 10:34:36 | 54 | USDC → SOL (native) | Executed | `0x4c61e012…` [🐞](https://debug.barn.cow.fi/order/0x4c61e012794be0fbdf7ff8c99af29e6b5a890c0422614ec1ded5d16af7ff6287) |
| 10:34:47 | 55 | USDC → SOL (native) | Executed | `0xb29cbf99…` [🐞](https://debug.barn.cow.fi/order/0xb29cbf99f2d1bcb76e2f58486e9a8e3e1d4ef3f3c3f3e953dcf7c02a1227fb9e) |
| 10:34:48 | 56 | USDC → SOL (native) | Executed | `0xee34399b…` [🐞](https://debug.barn.cow.fi/order/0xee34399b2d6cddc0ca77874b603fdd3b864d312b2de3b04247bdadac66fba44f) |
| 10:34:50 | 57 | USDC → SOL (native) | Executed | `0xbff58223…` [🐞](https://debug.barn.cow.fi/order/0xbff58223eac4fcbdbe60b60399d6ea5fa5df52a2096b0e4ef58d0718da6552e5) |
| 10:34:55 | 60 | USDC → SOL (native) | Executed | `0x12ba21fa…` [🐞](https://debug.barn.cow.fi/order/0x12ba21fa0aee3a2511fa9bc01c443cc2da0d6c36a6dc2fb884573facd8f3cafa) |
| 10:38:18 | 61 | USDC → SOL (native) | Executed | `0xbd66216d…` [🐞](https://debug.barn.cow.fi/order/0xbd66216d9cdbd96d620642d2223db44981f526d10ad740b78bb6ad45ec3571b9) |
| 10:38:19 | 62 | USDC → SOL (native) | Executed | `0xa6299398…` [🐞](https://debug.barn.cow.fi/order/0xa6299398106b6a3a159b36a50ec6fb3326fbcf4ac330220ccfd0727682548968) |
| 10:38:21 | 63 | USDC → SOL (native) | Executed | `0xec6851ea…` [🐞](https://debug.barn.cow.fi/order/0xec6851ea33b77eeecae7e7ad3bd5b4700e5a4e9e556d6fa30b306fce3550069d) |
| 10:38:22 | 65 | USDT → SOL (native) | Executed | `0x2e3437f4…` [🐞](https://debug.barn.cow.fi/order/0x2e3437f42393bc617f35bec8685cd5edb2d07c2ebfc9f2669405cab290c60aab) |
| 10:38:23 | 66 | USDC → SOL (native) | Executed | `0xb936c7b6…` [🐞](https://debug.barn.cow.fi/order/0xb936c7b6fe1aa6ba4c04f152c168840c9eef6cc626f165927b9b2a0a7c0f65c0) |
| 10:38:24 | 67 | USDC → SOL (native) | Executed | `0x3f8fac55…` [🐞](https://debug.barn.cow.fi/order/0x3f8fac55e1fd87254706e530274a35caec45bfbbe0a0d95150ae8bdd43d067ae) |
| 10:38:27 | 68 | USDT → SOL (native) | Executed | `0x209495cb…` [🐞](https://debug.barn.cow.fi/order/0x209495cb24fa328b2956c9ec54cad1c80683674700ecdfd7c5c057c1f107c7ba) |
| 10:38:30 | 68 | USDC → SOL (native) | Executed | `0xb22e7415…` [🐞](https://debug.barn.cow.fi/order/0xb22e741545b214088c7c56705249977ae7e7267938f747a6bb0e96b1302b3091) |
| 10:38:30 | 69 | JUP → SOL (native) | Executed | `0xcfb78601…` [🐞](https://debug.barn.cow.fi/order/0xcfb7860176583fd1174dd530bd37182df07a4ec495b6f8530dd9c09b47a0c5bc) |
| 10:41:15 | 77 | SPYx → SOL (native) | Executed | `0x627aaf90…` [🐞](https://debug.barn.cow.fi/order/0x627aaf9041d3b9995ca9dfdfe64fd5720dc5b74e7efcf2908162ba7e10237a4e) |
| 10:41:16 | 79 | SKHY → SOL (native) | Executed | `0xbfe47256…` [🐞](https://debug.barn.cow.fi/order/0xbfe472560ccebe1d6b852d15e8ab3409f43580967fc31b2e3ad4d1c0e5e4ea50) |
| 10:41:22 | 81 | MU → SOL (native) | Executed | `0x741685c7…` [🐞](https://debug.barn.cow.fi/order/0x741685c7d7714082c6bf266a39e20d81896bde4e94ed814973f7430b79b960fe) |
| 10:41:22 | 86 | $WIF → SOL (native) | Executed | `0x47e25312…` [🐞](https://debug.barn.cow.fi/order/0x47e2531205dae623f2d864cd13ee48af69c3a76189694ffeb15178907205f378) |
| 10:41:28 | 87 | POPCAT → SOL (native) | Executed | `0x1bf07385…` [🐞](https://debug.barn.cow.fi/order/0x1bf07385565e7b65a45b8217c0d587de5d36f0b99c4cbd55031883fe0dd35dc5) |
| 10:41:30 | 85 | Bonk → SOL (native) | Executed | `0xe999d2f2…` [🐞](https://debug.barn.cow.fi/order/0xe999d2f27761c7d81615f6249d8f39e5f16ba076fd75768e55ce2da16f26cb65) |
| 10:41:30 | 88 | JitoSOL → SOL (native) | Executed | `0xa8adf48a…` [🐞](https://debug.barn.cow.fi/order/0xa8adf48acf7c2a993d10231f7ae3de1840aebd9b9c106d0815c92a62b83e43fe) |
| 10:41:38 | 91 | cbBTC → SOL (native) | Executed | `0x5be346ca…` [🐞](https://debug.barn.cow.fi/order/0x5be346ca3cbde75b4a4fb9040e1d24140a38ffc8f09a8ae614a106b015da3984) |
| 10:41:42 | 90 | JupSOL → SOL (native) | Executed | `0xb75d249e…` [🐞](https://debug.barn.cow.fi/order/0xb75d249e4329f4d01db930c3eee2cbc75658b890e4cea22051d2820de1ac4eee) |
| 10:41:52 | 92 | USDe → SOL (native) | Executed | `0xd6d211b3…` [🐞](https://debug.barn.cow.fi/order/0xd6d211b3273e4813bbb1203f83a5609034ace3508db047cf385c45df4369db01) |
| 10:41:55 | 93 | EURC → SOL (native) | Executed | `0xa7edeaac…` [🐞](https://debug.barn.cow.fi/order/0xa7edeaacfc2641a571acdcc18ebec934f4b2ce015847966e171b845693f4222a) |
| 10:42:00 | 95 | JLP → SOL (native) | Executed | `0xaa6e9ce0…` [🐞](https://debug.barn.cow.fi/order/0xaa6e9ce0f468683d446bbe17cbf510ab1b605e80d51ed4d688e38b0bff6df0bd) |
| 10:42:07 | 100 | GLDx → SOL (native) | Executed | `0x29d74145…` [🐞](https://debug.barn.cow.fi/order/0x29d74145122ec8e1bc840a4db0d46a5b4ea9a1a752c01caa4b839c4909efe437) |
| 10:42:10 | 99 | XAUt0 → SOL (native) | Executed | `0x2534aff2…` [🐞](https://debug.barn.cow.fi/order/0x2534aff2d641c983574a709b4cd99336698b62e7484dea09205699bac7dd87f2) |
| 10:42:19 | 102 | Fartcoin → SOL (native) | Executed | `0xa0dc2341…` [🐞](https://debug.barn.cow.fi/order/0xa0dc2341d3f4d172b378f186632989345b7dfe10234759028b152efdd284fb2d) |
| 10:42:27 | 105 | hyloSOL → SOL (native) | Executed | `0x6ee7f619…` [🐞](https://debug.barn.cow.fi/order/0x6ee7f61959d2d749ed2f0669a6c6f3ced288f1eac354d74e3269c3425d888300) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 97 | 57.7% |
| cancelled | 61 | 36.3% |
| expired: never created on-chain (winner found, creation blockhash expired) | 10 | 6.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 19s | 38s | 57s | 63s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| J6eq…jy6c | 97 | 100.0% | 97 | 71,401 | 19s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| solivagus | 418 | 175 | 164 | 93.7% | 2 | 0 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| solivagus: SimulationFailed | 2 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 276 times
- Orders filtered for `in_flight`: 39 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 158 | 87 | 55.1% |
| market buy | 10 | 10 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 92 | 55 | 59.8% |
| wSOL → JUP | 28 | 15 | 53.6% |
| wSOL → USDT | 4 | 4 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| JUP → USDC | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 0 | 0.0% |
| wSOL → USDG | 1 | 0 | 0.0% |
| wSOL → ANSEM | 1 | 0 | 0.0% |
| wSOL → PYUSD | 1 | 0 | 0.0% |
| wSOL → CASH | 1 | 0 | 0.0% |
| wSOL → CRCLx | 1 | 0 | 0.0% |
| wSOL → USDv | 1 | 0 | 0.0% |
| wSOL → NVDAx | 1 | 0 | 0.0% |
| wSOL → SKHY | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 0 | 0.0% |
| wSOL → SPCXx | 1 | 0 | 0.0% |
| wSOL → TSLAx | 1 | 0 | 0.0% |
| wSOL → PUMP | 1 | 0 | 0.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 0 | 0.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 0 | 0.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 0 | 0.0% |
| wSOL → ETH | 1 | 0 | 0.0% |
| wSOL → BNB | 1 | 0 | 0.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 0 | 0.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 0 | 0.0% |
| wSOL → BOME | 1 | 0 | 0.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 3 | 60.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 4 | 80.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 3 | 60.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 2 | 40.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 2 | 50.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 1 | 25.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 3 | 75.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 2 | 50.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 3 | 3 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 1 | 33.3% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 1 | 33.3% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 1 | 33.3% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 1 | 33.3% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 1 | 33.3% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 2 | 66.7% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 2 | 66.7% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 1 | 50.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 1 | 50.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 1 | 50.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 1 | 50.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 1 | 50.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 1 | 50.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 2 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 0 | 0.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 0 | 0.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 0 | 0.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 0 | 0.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 0 | 0.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 0 | 0.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 0 | 0.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 0 | 0.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 0 | 0.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 0 | 0.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 0 | 0.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 0 | 0.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 1 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 0 | 0.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 1 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 0 | 0.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 0 | 0.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 1 | 0 | 0.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 1 | 0 | 0.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 0 | 0.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 1 | 0 | 0.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 1 | 0 | 0.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 1 | 0 | 0.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 1 | 0 | 0.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 1 | 0 | 0.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 1 | 1 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 1 | 0 | 0.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 1 | 0 | 0.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 1 | 0 | 0.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 1 | 0 | 0.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 1 | 1 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 0 | 0.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 0 | 0.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 0 | 0.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 0 | 0.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 0 | 0.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 0 | 0.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 0 | 0.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 0 | 0.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 61 | 0 |
| Winner too late: creation blockhash expired | 10 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 10:21:45 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x7e281bbe…` [🐞](https://debug.barn.cow.fi/order/0x7e281bbed6d88964eabf9623a6ee77501f2466678408f9ece9d6b1e59030014e) |
| 10:21:45 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf2ae710b…` [🐞](https://debug.barn.cow.fi/order/0xf2ae710b294959b44dae349a526d8ae040607f1a61a1d9829b9e432d7f02d50b) |
| 10:21:45 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf06af63a…` [🐞](https://debug.barn.cow.fi/order/0xf06af63adc1c54882c88076c4e5c7af8402af6f2d9130928a5af3d92a824ddae) |
| 10:21:46 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x87a6787c…` [🐞](https://debug.barn.cow.fi/order/0x87a6787c52fefa91a560c078207e5e4a84fb1021a8bfa3c8cadfe9281c24bdef) |
| 10:21:46 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x071a7bfc…` [🐞](https://debug.barn.cow.fi/order/0x071a7bfc6b7cd070ca4910841766832553294459b4a68b60f5eb7b02c34e48e3) |
| 10:21:46 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x898a3857…` [🐞](https://debug.barn.cow.fi/order/0x898a38579f842ebe5df92df385b7d49d64509734943cdaedae9f784b9e3a1888) |
| 10:21:46 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xc6832058…` [🐞](https://debug.barn.cow.fi/order/0xc68320585dcb8a0f8c33468e762d375bcaad3e2503b5e7f261aae84da2792df5) |
| 10:21:46 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x8987eab3…` [🐞](https://debug.barn.cow.fi/order/0x8987eab30c091ac241690228bb6061791679aa7c8687b4baf9f120e4be958b52) |
| 10:21:47 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x3cd350bb…` [🐞](https://debug.barn.cow.fi/order/0x3cd350bb1436e93370cf3e00db989b1cd7f38f54ad0ce8675562d8130ecd48a3) |
| 10:21:49 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x4a5910a2…` [🐞](https://debug.barn.cow.fi/order/0x4a5910a2882d81ca225bf6308f1cc765d4d8428775d34af4f8deea70900a889d) |
| 10:21:49 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xcb76746a…` [🐞](https://debug.barn.cow.fi/order/0xcb76746a0889fe81ae32a6954fecb1cc793abf5d2096b6aad5c112086c83fffd) |
| 10:21:50 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xca49a78e…` [🐞](https://debug.barn.cow.fi/order/0xca49a78eaee93786dc9468536073a2745d44e6d4eaa3e5c31d0be77c71318e07) |
| 10:21:50 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xfdf16d90…` [🐞](https://debug.barn.cow.fi/order/0xfdf16d90af8f693f9d63a25f8a350cde48491af1007e84cf90f7337f8dfa3bcb) |
| 10:28:14 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x942c926d…` [🐞](https://debug.barn.cow.fi/order/0x942c926d56dd44150f9bd0a223eddcd8edf48c251327f185b0bd9594788af8cf) |
| 10:28:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1c39da12…` [🐞](https://debug.barn.cow.fi/order/0x1c39da121ac5eb1350fc2fe11f31ac500ad95b2dbb808dc791816857c168ca7f) |
| 10:28:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb1699ec3…` [🐞](https://debug.barn.cow.fi/order/0xb1699ec3b63da3d9670a9f193661d3f36877d096081d2dc851fa4a3ac241cc2a) |
| 10:28:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xec0e3da1…` [🐞](https://debug.barn.cow.fi/order/0xec0e3da182d24fb88941e970b9f9ea66f0c20f091cfcad4cf9fb538e78a2819c) |
| 10:28:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x489ee134…` [🐞](https://debug.barn.cow.fi/order/0x489ee13460dce8070e91b429b518e42441b1f571b3fc6cbdfcbe1facb2e18c53) |
| 10:28:16 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6c875fcd…` [🐞](https://debug.barn.cow.fi/order/0x6c875fcd637f33c70e0b2c033c68e6df600ab33f863538b61bb28dcffddb250b) |
| 10:28:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9fe13a6e…` [🐞](https://debug.barn.cow.fi/order/0x9fe13a6e126d688e8b65a02926ae4ad67452445e07de8339cfc00a8f28223956) |
| 10:29:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x62bb6d7d…` [🐞](https://debug.barn.cow.fi/order/0x62bb6d7d594430f1b56a1f999d23450dd4d571623186672a80e792c7988af2fb) |
| 10:29:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4392818c…` [🐞](https://debug.barn.cow.fi/order/0x4392818c4e5d336cacef44fb66bc9debda5881d527a76af3e550351936189df0) |
| 10:29:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfce42e0c…` [🐞](https://debug.barn.cow.fi/order/0xfce42e0c104e32570134b4bd98025671c4abe8b12c0dc90068cb020847400a14) |
| 10:29:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x277a5657…` [🐞](https://debug.barn.cow.fi/order/0x277a5657ff72e94a3c7ff42fff791ef023d60539307b658f3a55af1b30032f52) |
| 10:29:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf876f368…` [🐞](https://debug.barn.cow.fi/order/0xf876f368555a37c5403c7205a310978ce7883a012254242cee6abc1b6915a3c0) |
| 10:29:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa5ba3fb1…` [🐞](https://debug.barn.cow.fi/order/0xa5ba3fb132994b5aabcdec2cf10c836fad3bda6895490ff7ccb22779394c5f3e) |
| 10:29:48 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x95dea442…` [🐞](https://debug.barn.cow.fi/order/0x95dea442efc996165dae99d9a15003e9106c4df55c50f5202c6f3b790869189f) |
| 10:29:48 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf7c34699…` [🐞](https://debug.barn.cow.fi/order/0xf7c3469912fbc4904db6fe521d600712c37eb2b843402c092d96f31861c942bc) |
| 10:29:48 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf49767f9…` [🐞](https://debug.barn.cow.fi/order/0xf49767f90d00762baa835ab535c791c9346c3ef6dd4f9c285dfae5bacf32f7e0) |
| 10:29:49 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf00f16c7…` [🐞](https://debug.barn.cow.fi/order/0xf00f16c7b9c4fb22e666dea0d1d8e1ff2a9f5a2d1c1f07beccdcab667b864e59) |
| 10:29:50 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x50395c39…` [🐞](https://debug.barn.cow.fi/order/0x50395c399b63feaded724d57abffbeb498a5eaa84243d2760374519082349557) |
| 10:31:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x08dcf53f…` [🐞](https://debug.barn.cow.fi/order/0x08dcf53f7d71c868a534497485a4e3452b38346d14714a609da50d2ef5f5e34e) |
| 10:31:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x53532f89…` [🐞](https://debug.barn.cow.fi/order/0x53532f899d3baaf4852579ff3430da8c708244cdec7b1170b0b68be22f3a7729) |
| 10:31:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x90d97b52…` [🐞](https://debug.barn.cow.fi/order/0x90d97b520a75a9494de5f71c994f68fc705e03cc698e99c5e68b3ee2fbaef089) |
| 10:31:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xea5af5f8…` [🐞](https://debug.barn.cow.fi/order/0xea5af5f88a8a27b57aa195641da25ee2700081fd622a57922473d9c09403e713) |
| 10:31:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9be34377…` [🐞](https://debug.barn.cow.fi/order/0x9be343777acf66d042e1d40897b2f5909c91ddb94e5c3e55c8db4fc725ea4832) |
| 10:31:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1e3efe42…` [🐞](https://debug.barn.cow.fi/order/0x1e3efe4286d37a9b3a9126111902f4bce339204adaa40d3e23f555ef4fb1f2c6) |
| 10:31:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x86d52f24…` [🐞](https://debug.barn.cow.fi/order/0x86d52f24444ba4cc7449fe82351b19048896eb67a02da087d7d8935379733417) |
| 10:31:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf9481ce5…` [🐞](https://debug.barn.cow.fi/order/0xf9481ce5198c238eb735e0a1b8c7ccd021ae14f85133340bd7ff0ab9d508e4db) |
| 10:31:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf6bb3a8c…` [🐞](https://debug.barn.cow.fi/order/0xf6bb3a8c913ead4b8464097b4e7f3bc201121905136e5b759f1f066f20680663) |
| 10:31:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x395452a4…` [🐞](https://debug.barn.cow.fi/order/0x395452a40feb5567e0e6251f6828b517151bc027fa381a89fe69d0d4c975822f) |
| 10:31:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x30fd28ed…` [🐞](https://debug.barn.cow.fi/order/0x30fd28ed1edfe37702ea153943392afbc85f1d969e80c9852eb480000761864f) |
| 10:31:21 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7b732715…` [🐞](https://debug.barn.cow.fi/order/0x7b73271578700cc9f9953bf23f5f0ea5d02ebe07343d44830813e659709d596d) |
| 10:31:21 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa004acf4…` [🐞](https://debug.barn.cow.fi/order/0xa004acf44e7576a7b216b88b6907d575ea0eb1ffb6acc87aefd51566840e693f) |
| 10:31:22 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x953662df…` [🐞](https://debug.barn.cow.fi/order/0x953662dfb2d35d8ac841b4d96342c0f59239b18f14ed70331032317abd35c7f8) |
| 10:31:22 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x080facd4…` [🐞](https://debug.barn.cow.fi/order/0x080facd4b7092c276d54f5bb5e7744987e4d7eaa18ea90ba9e0f905704e0650e) |
| 10:31:23 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1c4f5eac…` [🐞](https://debug.barn.cow.fi/order/0x1c4f5eac7b1f4e7cec5e1579d9618c07c0b396cf77897f1be150f30e49ede3e6) |
| 10:31:23 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9deeeefa…` [🐞](https://debug.barn.cow.fi/order/0x9deeeefa268f77e4ec1386b8045eee9dbff22e930ef596a12ce4f7d4c1b41cce) |
| 10:31:23 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd33c18af…` [🐞](https://debug.barn.cow.fi/order/0xd33c18afbfe3e51da160d9b222a611adc48bff01d29696879ad14fdbbc1a3124) |
| 10:31:23 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe6f48cd2…` [🐞](https://debug.barn.cow.fi/order/0xe6f48cd285c1d21388e76ae01075a4133c7f4b635ab964746e8ad0e9a01c5a7b) |
| 10:39:45 | wSOL → PAID | market sell | Winner too late: creation blockhash expired | `0x84baa844…` [🐞](https://debug.barn.cow.fi/order/0x84baa84469508a678c859c2a9bb18b4b7d8663b8db0fc0cc545ccc3ee4a1cee5) |
| 10:39:45 | wSOL → USDG | market sell | Winner too late: creation blockhash expired | `0xf0c6ef89…` [🐞](https://debug.barn.cow.fi/order/0xf0c6ef89a80737cb34a51a15e41b377a5fefdb573c081611030efdc4c76a92af) |
| 10:39:45 | wSOL → ANSEM | market sell | Winner too late: creation blockhash expired | `0xe1a1e340…` [🐞](https://debug.barn.cow.fi/order/0xe1a1e340125e538c84a2f0c8af8f90ebb84c31bae26f667a091b0f3fc2f3020a) |
| 10:39:45 | wSOL → PYUSD | market sell | Winner too late: creation blockhash expired | `0x4e5696dd…` [🐞](https://debug.barn.cow.fi/order/0x4e5696dd37fb937b74028fc23759ebf7ac153c83c61e5107e5a35650f74e07a8) |
| 10:39:45 | wSOL → CASH | market sell | Winner too late: creation blockhash expired | `0xa6d9b9a9…` [🐞](https://debug.barn.cow.fi/order/0xa6d9b9a9574ea175187f9c0d8387e5f5d666f25a9709a3ed4df2d53ad16f771d) |
| 10:39:46 | wSOL → CRCLx | market sell | Winner too late: creation blockhash expired | `0xb8d325a5…` [🐞](https://debug.barn.cow.fi/order/0xb8d325a5e6d8cf3e94a6d1ccdb658d7885df6e03fefad4be0767b01019479f39) |
| 10:39:46 | wSOL → USDv | market sell | Winner too late: creation blockhash expired | `0x992baea8…` [🐞](https://debug.barn.cow.fi/order/0x992baea83dd0979762ec7e323114bacf1576473d38445997a208523845abb773) |
| 10:39:46 | wSOL → NVDAx | market sell | Not filled within fill timeout (cancelled by sim) | `0x3300b7e3…` [🐞](https://debug.barn.cow.fi/order/0x3300b7e32915adb585f2bee161b9f74598560003a1996ac130363a0c647feb70) |
| 10:39:46 | wSOL → SPCX | market sell | Winner too late: creation blockhash expired | `0x7d367dd9…` [🐞](https://debug.barn.cow.fi/order/0x7d367dd9afe370217793206dce6415b1d3ffdacc3d1de2130ce5e623e3bee2e9) |
| 10:39:46 | wSOL → SPCXx | market sell | Winner too late: creation blockhash expired | `0x890a1848…` [🐞](https://debug.barn.cow.fi/order/0x890a1848b39be4ccb3966a99143e25d316fbc87c6a2824932c2e2f6c3b05d10b) |
| 10:39:46 | wSOL → TSLAx | market sell | Winner too late: creation blockhash expired | `0x7f06cd55…` [🐞](https://debug.barn.cow.fi/order/0x7f06cd55a9ef62a90d46dd6a4fe9a7a7536875a71b25d48bc210519ff130a8da) |
| 10:39:47 | wSOL → PUMP | market sell | Not filled within fill timeout (cancelled by sim) | `0x70a41d81…` [🐞](https://debug.barn.cow.fi/order/0x70a41d812ba654e16b7e4cda95324c1856bd70a32d3685404e411717964553c8) |
| 10:39:49 | wSOL → mSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0xd77abf9b…` [🐞](https://debug.barn.cow.fi/order/0xd77abf9bd028c938a9bf4792bac85f877be4044fccdf31a006f50b308c848b67) |
| 10:39:50 | wSOL → USDY | market sell | Not filled within fill timeout (cancelled by sim) | `0x91ba3a84…` [🐞](https://debug.barn.cow.fi/order/0x91ba3a842b078c30084c92fd6107726b90d9edc7f93c7f11316a768962044add) |
| 10:39:51 | wSOL → INF | market sell | Not filled within fill timeout (cancelled by sim) | `0x28d1178c…` [🐞](https://debug.barn.cow.fi/order/0x28d1178c34e0f7a03fef6a353c505b904b75251d117f65598c747424afe48b33) |
| 10:39:51 | wSOL → ETH | market sell | Not filled within fill timeout (cancelled by sim) | `0xc48174e1…` [🐞](https://debug.barn.cow.fi/order/0xc48174e1e9bcc7c9bf721024828ab643e4ca6d9a4a1e86f5fa73f1f362c49667) |
| 10:39:52 | wSOL → BNB | market sell | Not filled within fill timeout (cancelled by sim) | `0xa564d1ab…` [🐞](https://debug.barn.cow.fi/order/0xa564d1abf6121e30e560b962da97d231edfb38bdd96e8f52a05879966aab3272) |
| 10:39:53 | wSOL → EUROP | market sell | Not filled within fill timeout (cancelled by sim) | `0x65d5318d…` [🐞](https://debug.barn.cow.fi/order/0x65d5318d09a8002eb92c0755c5bdca0437b4d9b40d64c30d617f460d7223a8af) |
| 10:39:53 | wSOL → MEW | market sell | Not filled within fill timeout (cancelled by sim) | `0xa4812ab6…` [🐞](https://debug.barn.cow.fi/order/0xa4812ab64ac9b1e2c9e9a06f68b16d0115b63188a7a59bfac6da7b1a87aeb2fa) |
| 10:39:53 | wSOL → BOME | market sell | Not filled within fill timeout (cancelled by sim) | `0xf4d10fe5…` [🐞](https://debug.barn.cow.fi/order/0xf4d10fe51f48a3e5bd575d1a5de6a18fc367bdd72fdab5d9eee8e3414469c39e) |
| 10:39:53 | wSOL → PSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x308d326f…` [🐞](https://debug.barn.cow.fi/order/0x308d326f81ff8cae4df837dcbf82d8bedf6ff6823fdea191c3b878e0c0ab73d4) |
