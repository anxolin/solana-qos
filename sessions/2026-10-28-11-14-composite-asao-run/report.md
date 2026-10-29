# Solana QoS report: 2026-10-28-11-14-composite-asao-run

Barn, orders created between `2026-10-28T11:14:46.988Z` and `2026-10-28T11:38:12.532Z`. Data fetched 2026-10-28T11:43:25+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 182 |
| Orders executed | **181** (99.5%) |
| Sponsored orders never created on-chain | 1 (0.5%) |
| Traders | 106 |
| Settlement txs | 82 |

## Scenario results

Target solver: `asao`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-28T11:14:46.988Z | 2026-10-28T11:15:21.775Z | 5/6 | 1 | 7 | 7 | 83.3% |
| solver-same-direction-25 | 2026-10-28T11:16:22.416Z | 2026-10-28T11:16:43.427Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-28T11:19:04.570Z | 2026-10-28T11:25:34.495Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-cow | 2026-10-28T11:28:27.871Z | 2026-10-28T11:31:10.739Z | 15/15 | 0 | 15 | 15 | 100.0% |
| solver-token-coverage | 2026-10-28T11:32:02.223Z | 2026-10-28T11:33:00.331Z | 50/52 | 2 | 51 | 50 | 96.2% |

## Scenario

179 of 182 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:14:47 | 1 | 1 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 11:14:47 | 2 | 2 | sell 0.005 SOL → USDT | filled | 9s | 1 |  |
| 11:14:47 | 3 | 3 | sell 0.5 JUP → USDC | failed | 16s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 11:14:56 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 7s | 1 |  |
| 11:14:56 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 8s | 1 |  |
| 11:15:03 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 19s | 2 |  |
| 11:16:22 | 7 | 4 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 11:16:22 | 8 | 5 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 11:16:22 | 9 | 6 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 11:16:22 | 10 | 7 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 11:16:22 | 11 | 8 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 11:16:22 | 12 | 9 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 11:16:22 | 13 | 10 | sell 0.005 SOL → JUP | filled | 13s | 1 |  |
| 11:16:22 | 14 | 11 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 11:16:22 | 15 | 12 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 11:16:22 | 16 | 13 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 11:16:22 | 17 | 14 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 11:16:22 | 18 | 15 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 11:16:22 | 19 | 16 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 11:16:22 | 20 | 17 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 11:16:22 | 21 | 18 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 11:16:22 | 22 | 19 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 11:16:22 | 23 | 20 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 11:16:22 | 24 | 21 | sell 0.005 SOL → JUP | filled | 13s | 1 |  |
| 11:16:22 | 25 | 22 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 11:16:22 | 26 | 23 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 11:16:22 | 27 | 24 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 11:16:22 | 28 | 25 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 11:16:22 | 29 | 26 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 11:16:22 | 30 | 27 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 11:16:22 | 31 | 28 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 11:19:04 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 11:19:04 | 33 | 30 | sell 0.003 SOL → USDC | filled | 6s | 1 |  |
| 11:19:04 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 6s | 1 |  |
| 11:19:04 | 35 | 32 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 11:20:34 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 11:20:34 | 37 | 30 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 11:20:34 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 7s | 1 |  |
| 11:20:34 | 39 | 32 | sell 0.004 SOL → USDC | filled | 8s | 1 |  |
| 11:20:34 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 11:20:34 | 41 | 34 | sell 0.003 SOL → USDC | filled | 8s | 1 |  |
| 11:20:34 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 8s | 1 |  |
| 11:20:34 | 43 | 36 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 11:22:04 | 44 | 29 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 11:22:04 | 45 | 30 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 11:22:04 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 11:22:04 | 47 | 32 | sell 0.004 SOL → USDC | filled | 23s | 1 |  |
| 11:22:04 | 48 | 33 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 11:22:04 | 49 | 34 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 11:22:04 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 11:22:04 | 51 | 36 | sell 0.004 SOL → USDC | filled | 23s | 1 |  |
| 11:22:04 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 24s | 1 |  |
| 11:22:04 | 53 | 38 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 11:22:04 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 11:22:04 | 55 | 40 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 11:22:04 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 11:22:04 | 57 | 42 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 11:22:04 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 11:22:04 | 59 | 44 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 11:23:34 | 60 | 29 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 11:23:34 | 61 | 30 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 11:23:34 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 11:23:34 | 63 | 32 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 11:23:34 | 64 | 33 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 11:23:34 | 65 | 34 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 11:23:34 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 11:23:34 | 67 | 36 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 11:23:34 | 68 | 37 | sell 0.0025 SOL → USDC | filled | 24s | 1 |  |
| 11:23:34 | 69 | 38 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 11:23:34 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 11:23:34 | 71 | 40 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 11:23:34 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 11:23:34 | 73 | 42 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 11:23:34 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 11:23:34 | 75 | 44 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 11:23:34 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 11:23:34 | 77 | 46 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 11:23:34 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 11:23:34 | 79 | 48 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 11:23:34 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 11:23:34 | 81 | 50 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 11:23:34 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 11:23:34 | 83 | 52 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 11:25:04 | 84 | 29 | sell 0.0025 SOL → USDC | filled | 29s | 1 |  |
| 11:25:04 | 85 | 30 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 11:25:04 | 86 | 31 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 11:25:04 | 87 | 32 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 11:25:04 | 88 | 33 | sell 0.0025 SOL → USDC | filled | 29s | 1 |  |
| 11:25:04 | 89 | 34 | sell 0.003 SOL → USDC | filled | 28s | 1 |  |
| 11:25:04 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 11:25:04 | 91 | 36 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 11:25:04 | 92 | 37 | sell 0.0025 SOL → USDC | filled | 29s | 1 |  |
| 11:25:04 | 93 | 38 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 11:25:04 | 94 | 39 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 11:25:04 | 95 | 40 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 11:25:04 | 96 | 41 | sell 0.0025 SOL → USDC | filled | 28s | 1 |  |
| 11:25:04 | 97 | 42 | sell 0.003 SOL → USDC | filled | 28s | 1 |  |
| 11:25:04 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 11:25:04 | 99 | 44 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 11:25:04 | 100 | 45 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 11:25:04 | 101 | 46 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 11:25:04 | 102 | 47 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 11:25:04 | 103 | 48 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 11:25:04 | 104 | 49 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 11:25:04 | 105 | 50 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 11:25:04 | 106 | 51 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 11:25:04 | 107 | 52 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 11:25:04 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 11:25:04 | 109 | 54 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 11:25:04 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 11:25:04 | 111 | 56 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 11:25:04 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 24s | 1 |  |
| 11:25:04 | 113 | 58 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 11:25:04 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 11:25:04 | 115 | 60 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 11:28:27 | 116 | 62 | buy 2.6 USDC ← SOL | filled | 21s | 1 |  |
| 11:28:27 | 117 | 64 | buy 1.3 USDC ← SOL | filled | 24s | 1 |  |
| 11:28:27 | 118 | 65 | buy 3.1 USDC ← SOL | filled | 15s | 1 |  |
| 11:28:27 | 119 | 66 | buy 3.1 USDT ← SOL | filled | 9s | 1 |  |
| 11:28:27 | 120 | 67 | buy 1.1 USDT ← SOL | filled | 15s | 1 |  |
| 11:28:27 | 121 | 68 | buy 3.2 USDC ← SOL | filled | 9s | 1 |  |
| 11:30:57 | 122 | 61 | sell 0.02 SOL → USDC | filled | 11s | 1 |  |
| 11:30:57 | 123 | 62 | buy 0.02 SOL ← USDC | filled | 12s | 1 |  |
| 11:30:57 | 124 | 63 | sell 0.03 SOL → USDC | filled | 11s | 1 |  |
| 11:30:57 | 125 | 64 | sell 1.2 USDC → SOL | filled | 13s | 1 |  |
| 11:30:57 | 126 | 65 | sell 3 USDC → USDT | filled | 11s | 1 |  |
| 11:30:57 | 127 | 66 | sell 3 USDT → USDC | filled | 12s | 1 |  |
| 11:30:57 | 128 | 67 | sell 1 USDT → USDC | filled | 9s | 1 |  |
| 11:30:57 | 129 | 68 | sell 3 USDC → USDT | filled | 12s | 1 |  |
| 11:30:57 | 130 | 69 | sell 0.02 SOL → JUP | filled | 11s | 1 |  |
| 11:32:02 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 19s | 1 |  |
| 11:32:02 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 19s | 1 |  |
| 11:32:02 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 25s | 1 |  |
| 11:32:02 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 18s | 1 |  |
| 11:32:02 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 20s | 1 |  |
| 11:32:02 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 31s | 1 |  |
| 11:32:02 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 15s | 1 |  |
| 11:32:03 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 14s | 1 |  |
| 11:32:03 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 15s | 1 |  |
| 11:32:03 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 15s | 1 |  |
| 11:32:03 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 24s | 1 |  |
| 11:32:03 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 14s | 1 |  |
| 11:32:03 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 15s | 1 |  |
| 11:32:03 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 7s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:32:03 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 16s | 1 |  |
| 11:32:03 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 15s | 1 |  |
| 11:32:03 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 19s | 1 |  |
| 11:32:04 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 20s | 1 |  |
| 11:32:04 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 20s | 1 |  |
| 11:32:04 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 20s | 1 |  |
| 11:32:04 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 22s | 1 |  |
| 11:32:04 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 22s | 1 |  |
| 11:32:04 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 17s | 1 |  |
| 11:32:04 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 22s | 1 |  |
| 11:32:04 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 17s | 1 |  |
| 11:32:04 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 18s | 1 |  |
| 11:32:04 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 18s | 1 |  |
| 11:32:05 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 18s | 1 |  |
| 11:32:05 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 19s | 1 |  |
| 11:32:05 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 19s | 1 |  |
| 11:32:05 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 20s | 1 |  |
| 11:32:05 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 20s | 1 |  |
| 11:32:05 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 20s | 1 |  |
| 11:32:05 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 20s | 1 |  |
| 11:32:05 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 20s | 1 |  |
| 11:32:05 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 20s | 1 |  |
| 11:32:05 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 20s | 1 |  |
| 11:32:21 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 12s | 1 |  |
| 11:32:21 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 37s | 1 | main expired |
| 11:32:27 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 5s | 1 |  |
| 11:32:20 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 5s | 1 |  |
| 11:32:22 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | filled | 11s | 1 |  |
| 11:32:33 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | filled | 11s | 1 |  |
| 11:32:17 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | filled | 10s | 1 |  |
| 11:32:16 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 10s | 1 |  |
| 11:32:18 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | filled | 10s | 1 |  |
| 11:32:18 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | filled | 10s | 1 |  |
| 11:32:27 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | filled | 11s | 1 |  |
| 11:32:17 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | filled | 25s | 1 |  |
| 11:32:18 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | filled | 9s | 1 |  |
| 11:32:11 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | filled | 17s | 1 |  |
| 11:32:19 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | filled | 9s | 1 |  |

### Rows without an order

2 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |
| BlockhashExpired | main | 1 | SOL → SPCXx | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 182 (180 main, 2 acquire). Cleanup placed 107 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:15:23 | 1 | USDC → SOL (native) | Executed | `0xa32b973b…` [🐞](https://debug.barn.cow.fi/order/0xa32b973b69455aaa0f5f90cbea8d39fa7f7f7e1b712f55edd2dcf8163a3d214f) |
| 11:15:25 | 2 | USDT → SOL (native) | Executed | `0x7b932845…` [🐞](https://debug.barn.cow.fi/order/0x7b932845f5d4ef29deea8bb84d2c8633c698c69038426c47adf0a8af2b41d282) |
| 11:15:25 | 3 | USDC → SOL (native) | Executed | `0xdad61197…` [🐞](https://debug.barn.cow.fi/order/0xdad611979558d2401782845f6cf3bd908462624012beb1c09e2bfb81df2c4f61) |
| 11:16:46 | 5 | JUP → SOL (native) | Executed | `0x0cacfca7…` [🐞](https://debug.barn.cow.fi/order/0x0cacfca7d8da0b05f5a0d2aea72a2edc11ec6882ce37e55f890dbba4fc97e3ce) |
| 11:16:47 | 6 | JUP → SOL (native) | Executed | `0xcc38dd27…` [🐞](https://debug.barn.cow.fi/order/0xcc38dd27a0ca7cb0cd2a873867fd45ae66bae63ac32b088458bfff8d77806a14) |
| 11:16:48 | 7 | JUP → SOL (native) | Executed | `0xbf3aea21…` [🐞](https://debug.barn.cow.fi/order/0xbf3aea21b5300dd8aab59ee6ca0f2ca5b6c44b4a5d9654c61b47c47fc1796468) |
| 11:16:49 | 8 | JUP → SOL (native) | Executed | `0x6e195dd3…` [🐞](https://debug.barn.cow.fi/order/0x6e195dd327c0f6ff0fc18af50ca62dd7701c87717497f3c9cbed0112a8be1b89) |
| 11:16:50 | 9 | JUP → SOL (native) | Executed | `0xf398acae…` [🐞](https://debug.barn.cow.fi/order/0xf398acaeaf238b4f1980d7cc8fd1ffeb2d2187c8fdf662abb24b199f77635345) |
| 11:16:51 | 10 | JUP → SOL (native) | Executed | `0xc76e1837…` [🐞](https://debug.barn.cow.fi/order/0xc76e183783b76c46db97e660759440f6a8694fb19f3ba5d1aae5972d61390c23) |
| 11:16:52 | 11 | JUP → SOL (native) | Executed | `0x5ba1968b…` [🐞](https://debug.barn.cow.fi/order/0x5ba1968bab56bdc453f71256553ff483b9f8cc8d987f8d42316d2e7c552b054c) |
| 11:16:53 | 12 | JUP → SOL (native) | Executed | `0x4e51a21a…` [🐞](https://debug.barn.cow.fi/order/0x4e51a21a8cb754c65a1891a9da75aa09e1111b7c1137438a5743045534204585) |
| 11:16:56 | 13 | JUP → SOL (native) | Executed | `0x0bd43c70…` [🐞](https://debug.barn.cow.fi/order/0x0bd43c709767ed72bdb465ea7cc9921c9dae6827c8f8524aca23afc984579708) |
| 11:16:57 | 4 | JUP → SOL (native) | Executed | `0x6c42a9c4…` [🐞](https://debug.barn.cow.fi/order/0x6c42a9c4876657179a7f393e8640a63d7095e5bb54338f9dd0b03808a75e67b1) |
| 11:17:16 | 14 | JUP → SOL (native) | Executed | `0xae454d10…` [🐞](https://debug.barn.cow.fi/order/0xae454d10bb49d6674b937c930bfc9b315555360aafb504d40dd89be5fd3b21d8) |
| 11:17:20 | 15 | JUP → SOL (native) | Executed | `0x48430034…` [🐞](https://debug.barn.cow.fi/order/0x484300341e9ca9b68aef7cda3ce347f4aaa6789ff85614f4aeab0d2e254771dc) |
| 11:17:21 | 16 | JUP → SOL (native) | Executed | `0x8e3f9f6e…` [🐞](https://debug.barn.cow.fi/order/0x8e3f9f6ed60e02a46d440be760683e1b07763b416770b0136d30dcc4e08a0ed9) |
| 11:17:24 | 18 | JUP → SOL (native) | Executed | `0xab9e35db…` [🐞](https://debug.barn.cow.fi/order/0xab9e35db68796104d3f40c5b4fac4dbb7c6a5c70a268c8f929ae37fca3b730cc) |
| 11:17:24 | 17 | JUP → SOL (native) | Executed | `0x77329311…` [🐞](https://debug.barn.cow.fi/order/0x773293118d9d93645376151c00bb97c28221c7ae0f7d3ced93c579c25cd12e67) |
| 11:17:27 | 19 | JUP → SOL (native) | Executed | `0x5848f4dd…` [🐞](https://debug.barn.cow.fi/order/0x5848f4ddce920cf04fe3368f585fce42ee36d2ebbb3df0eba277517d836aea19) |
| 11:17:29 | 23 | JUP → SOL (native) | Executed | `0xf712a3d1…` [🐞](https://debug.barn.cow.fi/order/0xf712a3d1bd6a6639b54b2fc549c0cf0dfbad4c2022ce892b2764d2f66e4c651e) |
| 11:17:30 | 20 | JUP → SOL (native) | Executed | `0x1825ab12…` [🐞](https://debug.barn.cow.fi/order/0x1825ab12313d9daf12a14ebb634a8e1d7b7a1f27fa6ba937717488003305e2ee) |
| 11:17:37 | 21 | JUP → SOL (native) | Executed | `0xd7c4bf2e…` [🐞](https://debug.barn.cow.fi/order/0xd7c4bf2e91ec266152bea0b76258a803d6e872bef83ae876864bf9b2311ef7f4) |
| 11:17:40 | 22 | JUP → SOL (native) | Executed | `0xd4c497f8…` [🐞](https://debug.barn.cow.fi/order/0xd4c497f800e74a83efff010634cf0e74820a48b05e31f3d389bb7a9628bfd57b) |
| 11:17:45 | 24 | JUP → SOL (native) | Executed | `0x48d9cc3c…` [🐞](https://debug.barn.cow.fi/order/0x48d9cc3c14533f48a9d0424b13fc5dddf348b950154571ce6bbc716c00cf322d) |
| 11:17:54 | 25 | JUP → SOL (native) | Executed | `0x67887dfb…` [🐞](https://debug.barn.cow.fi/order/0x67887dfb39c09d4933ac427558bebdb3ee29de30aebcbab353b6268c4a8556a0) |
| 11:17:57 | 26 | JUP → SOL (native) | Executed | `0xb1187fc7…` [🐞](https://debug.barn.cow.fi/order/0xb1187fc778771966262b832d273e948ff4e95424f45b1faa0b3024ceae28a264) |
| 11:17:57 | 27 | JUP → SOL (native) | Executed | `0xc9504660…` [🐞](https://debug.barn.cow.fi/order/0xc95046601f7fb0452edf02e3bad9e5d3da2f98cd5747a85baee577e862f1ea57) |
| 11:17:58 | 28 | JUP → SOL (native) | Executed | `0xd5075b1d…` [🐞](https://debug.barn.cow.fi/order/0xd5075b1d65c152c006f07c23724676093442cbc8fc6e3385d0dee99cc9164853) |
| 11:25:37 | 30 | USDC → SOL (native) | Executed | `0x8f04e059…` [🐞](https://debug.barn.cow.fi/order/0x8f04e05905516f27f6ef11e750a664ab2426d663f56f055655e26792adb71aed) |
| 11:25:38 | 31 | USDC → SOL (native) | Executed | `0xc9a54df8…` [🐞](https://debug.barn.cow.fi/order/0xc9a54df8bb3e5c529354db477c49fe7e9c82dec1b412a51fe2b334aab8978c39) |
| 11:25:39 | 32 | USDC → SOL (native) | Executed | `0x19c95be6…` [🐞](https://debug.barn.cow.fi/order/0x19c95be6d909e023971a495fb7513e8440a90b25e6c89ecf2bb22b270345d534) |
| 11:25:40 | 33 | USDC → SOL (native) | Executed | `0xce477261…` [🐞](https://debug.barn.cow.fi/order/0xce477261050bb057bd87ffe3e91d30fbb7d2f44334218890a9c7d5837150a080) |
| 11:25:41 | 34 | USDC → SOL (native) | Executed | `0x533cf566…` [🐞](https://debug.barn.cow.fi/order/0x533cf566ba8aab58bbbe71b5671bbd0b4f5dd2540d391ba0c61620c92bf2c07c) |
| 11:25:42 | 35 | USDC → SOL (native) | Executed | `0xfc189b5d…` [🐞](https://debug.barn.cow.fi/order/0xfc189b5da25a675b9fc2425b893c8ac13555d5150e3ad1e2bd90882d72951a25) |
| 11:25:43 | 36 | USDC → SOL (native) | Executed | `0xc09b4fa8…` [🐞](https://debug.barn.cow.fi/order/0xc09b4fa826da9a62136bfd8aa7e13a4942385dbfe69d60f08c2a13a5ee716ed5) |
| 11:25:44 | 37 | USDC → SOL (native) | Executed | `0x4acabb1d…` [🐞](https://debug.barn.cow.fi/order/0x4acabb1d29ee10308b87567ca3ff3a4b998f5119951ecadb314eaa7f610a0984) |
| 11:25:47 | 38 | USDC → SOL (native) | Executed | `0x76493ca4…` [🐞](https://debug.barn.cow.fi/order/0x76493ca4fe632ee8b596042f41c843c21ddf925d5e6e109528731d5f6ed31aa0) |
| 11:25:48 | 29 | USDC → SOL (native) | Executed | `0x5a74183e…` [🐞](https://debug.barn.cow.fi/order/0x5a74183e32f2ecdc52f566879a83ccc761cd9a6dd8f0265db17ccbf7d47c7575) |
| 11:26:08 | 39 | USDC → SOL (native) | Executed | `0xda979f2e…` [🐞](https://debug.barn.cow.fi/order/0xda979f2e2ea406aaddcf9f7d13b86883b4bb54ba379440d7f36d2851139563ad) |
| 11:26:10 | 40 | USDC → SOL (native) | Executed | `0xbf9a14dc…` [🐞](https://debug.barn.cow.fi/order/0xbf9a14dca3449837bdef9f0df84acf7927207ea16150b29e227b1a2ea5a838e5) |
| 11:26:11 | 41 | USDC → SOL (native) | Executed | `0xadecb74e…` [🐞](https://debug.barn.cow.fi/order/0xadecb74eea1cbf239a266ed61e5096b6bf854eddbbfdc0326b6df31c349b385c) |
| 11:26:15 | 45 | USDC → SOL (native) | Executed | `0xa3b3a663…` [🐞](https://debug.barn.cow.fi/order/0xa3b3a6631aad19242a416a97c9c1c597800a5c37da7811fc21111012c8d748c5) |
| 11:26:16 | 42 | USDC → SOL (native) | Executed | `0xebd412fd…` [🐞](https://debug.barn.cow.fi/order/0xebd412fda646c7c59a4da8eab4f142fc044ab9ecd337936c3a2de1c24b900b63) |
| 11:26:16 | 43 | USDC → SOL (native) | Executed | `0x66e02039…` [🐞](https://debug.barn.cow.fi/order/0x66e02039db3c09c2c6d59ba93242761db490743c82cb79547cb1245562d71ee2) |
| 11:26:19 | 44 | USDC → SOL (native) | Executed | `0xc0e49653…` [🐞](https://debug.barn.cow.fi/order/0xc0e496531e2d8bb23021dbe3198c9abc6ac767c5ed8f1fe76b536277134d15ea) |
| 11:26:20 | 46 | USDC → SOL (native) | Executed | `0xe017a79b…` [🐞](https://debug.barn.cow.fi/order/0xe017a79b6bc5d1fd8ca55e8615d38cb78e05e2d0fefe2773ee7480c650027218) |
| 11:26:23 | 48 | USDC → SOL (native) | Executed | `0x2978cd5e…` [🐞](https://debug.barn.cow.fi/order/0x2978cd5e88eacf1ee98b12f68f1b464d6511065ac3923d81729eeed30736458b) |
| 11:26:24 | 47 | USDC → SOL (native) | Executed | `0x0e50eccb…` [🐞](https://debug.barn.cow.fi/order/0x0e50eccb46dec3ca6835e0b54f46d2ad3c2aa0709e04589110c922ea72273c59) |
| 11:26:42 | 49 | USDC → SOL (native) | Executed | `0x4c93c0fd…` [🐞](https://debug.barn.cow.fi/order/0x4c93c0fd834caca12cef88dac8408c05ac7e68d444602d6d8df231319dea03de) |
| 11:26:49 | 51 | USDC → SOL (native) | Executed | `0x1d4e26ae…` [🐞](https://debug.barn.cow.fi/order/0x1d4e26ae2e2c2364e5657fe0a3a1028be235ecc0ab05367e6ead9c5ce2b50b64) |
| 11:26:51 | 50 | USDC → SOL (native) | Executed | `0xfcceb2d7…` [🐞](https://debug.barn.cow.fi/order/0xfcceb2d74128c78d53654d176b974602020344fad748dbd9f276be486acf91e5) |
| 11:27:04 | 53 | USDC → SOL (native) | Executed | `0x7f9d38b5…` [🐞](https://debug.barn.cow.fi/order/0x7f9d38b53b251537167c8bcb2eb71c3df9d46a28e2aefea02a07a2299278575d) |
| 11:27:07 | 55 | USDC → SOL (native) | Executed | `0x648e4874…` [🐞](https://debug.barn.cow.fi/order/0x648e487458d529d4a62a00d21233c99e568db4324c74fa668f1822ea943e0cbd) |
| 11:27:08 | 56 | USDC → SOL (native) | Executed | `0xa679469e…` [🐞](https://debug.barn.cow.fi/order/0xa679469eba821326cafdfd3090e5f6eac014c4705ba8e6eb838613b72e22ddf4) |
| 11:27:10 | 52 | USDC → SOL (native) | Executed | `0xd4fc52d0…` [🐞](https://debug.barn.cow.fi/order/0xd4fc52d0c86e925dbe8d752c3353fe20bf998174c52375ce66517e19a793c94f) |
| 11:27:15 | 57 | USDC → SOL (native) | Executed | `0x15da4eef…` [🐞](https://debug.barn.cow.fi/order/0x15da4eef2ab59a8192576130c43cd21e3d347dfbb762cfbce01b83cf30ae8243) |
| 11:27:21 | 58 | USDC → SOL (native) | Executed | `0xd61dd0a5…` [🐞](https://debug.barn.cow.fi/order/0xd61dd0a50a8be76411154ac302e5c1171ed6a2c173d0366b87a4c60ff2583c9e) |
| 11:27:22 | 54 | USDC → SOL (native) | Executed | `0xfbccb767…` [🐞](https://debug.barn.cow.fi/order/0xfbccb767c842a0a60ab440211b3c33e1bdb956ee1d51e709aad1470e5f4bd564) |
| 11:27:35 | 59 | USDC → SOL (native) | Executed | `0x74c28834…` [🐞](https://debug.barn.cow.fi/order/0x74c288346e95f36d52cda014b8f04c95ff309b0c92071ed6b1f946ee8a3011cc) |
| 11:27:40 | 60 | USDC → SOL (native) | Executed | `0xc32b5d5b…` [🐞](https://debug.barn.cow.fi/order/0xc32b5d5b8f2f938bfb5556b231ab1bc1cfeab5154c6bd5c01676f4669207d290) |
| 11:31:12 | 61 | USDC → SOL (native) | Executed | `0x34566696…` [🐞](https://debug.barn.cow.fi/order/0x3456669655e2422eac9c2bd9128cd4d761676b1c6659ef3d295f59ac130740fc) |
| 11:31:14 | 62 | USDC → SOL (native) | Executed | `0xb887b885…` [🐞](https://debug.barn.cow.fi/order/0xb887b88508dca5ebbc133c38defb1a3f94ae1b94e4685be87c9495bd883c7e51) |
| 11:31:14 | 63 | USDC → SOL (native) | Executed | `0xb2c96a4b…` [🐞](https://debug.barn.cow.fi/order/0xb2c96a4be9c99be356bb847f7603e8710693664114662399dbcb35d3820b093d) |
| 11:31:16 | 65 | USDT → SOL (native) | Executed | `0x452f0738…` [🐞](https://debug.barn.cow.fi/order/0x452f0738a614b63b62d5853ca7240b176e2403153bc74d81be43358dcec3ba3f) |
| 11:31:18 | 66 | USDC → SOL (native) | Executed | `0xc0c6882b…` [🐞](https://debug.barn.cow.fi/order/0xc0c6882ba330e55578647bebf6407a93c92aaa342034cf9d1b5f9c1debecc9f2) |
| 11:31:21 | 67 | USDC → SOL (native) | Executed | `0x9eaa691e…` [🐞](https://debug.barn.cow.fi/order/0x9eaa691e93ea587cde007755c34fe4b38b7b8c860e9f0e4d6d4f0038c7508770) |
| 11:31:22 | 68 | USDC → SOL (native) | Executed | `0x8d4c32c3…` [🐞](https://debug.barn.cow.fi/order/0x8d4c32c318cb99e5e9ef2d70e624bfcd46be1e9bd551f55578fd995d55432f3f) |
| 11:31:22 | 68 | USDT → SOL (native) | Executed | `0x1d6068a1…` [🐞](https://debug.barn.cow.fi/order/0x1d6068a180b59b4fe76f17513b8f5561d0c1b80aae4f36548a65ecd902e64e6c) |
| 11:31:22 | 68 | PAID → SOL (native) | Executed | `0x9b81c42c…` [🐞](https://debug.barn.cow.fi/order/0x9b81c42c837dd0a6f80683fb2e324d5696ab2b9c0cb4598dc866d0524c98f03a) |
| 11:31:24 | 69 | JUP → SOL (native) | Executed | `0xd7d48f5f…` [🐞](https://debug.barn.cow.fi/order/0xd7d48f5fb5ee65c2db51a70f228ff77da7ec6c07c6bd40baac69cba25e927f25) |
| 11:33:03 | 71 | PAID → SOL (native) | Executed | `0x75630da3…` [🐞](https://debug.barn.cow.fi/order/0x75630da3a36df47b0c9a5a9f1d0e320bb8415b599099d42646070adcbfdd289b) |
| 11:33:04 | 72 | USDG → SOL (native) | Executed | `0xb42f86bf…` [🐞](https://debug.barn.cow.fi/order/0xb42f86bfad2b5cc8c13c9e741d6d0f55f150c4419c33f2895b071ef7718376d9) |
| 11:33:05 | 73 | PUMP → SOL (native) | Executed | `0xcb8b8bba…` [🐞](https://debug.barn.cow.fi/order/0xcb8b8bba8bbf12c5e3b494e3413d34d10a9d1f2bca46a8e15962299059fc2e67) |
| 11:33:06 | 74 | PYUSD → SOL (native) | Executed | `0x78d20789…` [🐞](https://debug.barn.cow.fi/order/0x78d207893043455f63652984cc02726ae24036d31e4d6ef1e94146d0890a6844) |
| 11:33:07 | 75 | CASH → SOL (native) | Executed | `0x778fe7d7…` [🐞](https://debug.barn.cow.fi/order/0x778fe7d70fd058121ab75a72180520304dd63ec3a877e0be4cbf0942a93a9f0e) |
| 11:33:08 | 76 | CRCLx → SOL (native) | Executed | `0x171ebb4e…` [🐞](https://debug.barn.cow.fi/order/0x171ebb4e6ac2003043c3d1301bbfc85958a56f822c2f5e21e447b35677eefd4d) |
| 11:33:09 | 77 | SPYx → SOL (native) | Executed | `0x8cd56228…` [🐞](https://debug.barn.cow.fi/order/0x8cd56228b5fb60537efc501e93d6c9f6c5083dcc386912f9a31a755bcd832d40) |
| 11:33:10 | 78 | USDv → SOL (native) | Executed | `0xff0ce879…` [🐞](https://debug.barn.cow.fi/order/0xff0ce87956b54688784692f28664462c902c7f8af5e657f771c1791ffa7db5f6) |
| 11:33:11 | 79 | SKHY → SOL (native) | Executed | `0xc5b9ad3d…` [🐞](https://debug.barn.cow.fi/order/0xc5b9ad3d73402be659c183d66437f31950e87e0d53a56b138954d60f4d73a62f) |
| 11:33:14 | 70 | ANSEM → SOL (native) | Executed | `0xb83db643…` [🐞](https://debug.barn.cow.fi/order/0xb83db643bc4265178df2d6de21d09694034c66ada892b22738c81503c2db5121) |
| 11:33:36 | 80 | NVDAx → SOL (native) | Executed | `0x4bcbbc6d…` [🐞](https://debug.barn.cow.fi/order/0x4bcbbc6d9631a4d72e9082f2cecaf9fb88905f72f29919a6b0005b97b7b4ac6e) |
| 11:33:36 | 81 | MU → SOL (native) | Executed | `0xf3808136…` [🐞](https://debug.barn.cow.fi/order/0xf3808136b2651e04c6c863cc778ec550b323f343bb590f3b44fcfa0985ab0a88) |
| 11:33:37 | 84 | TSLAx → SOL (native) | Executed | `0x17188e94…` [🐞](https://debug.barn.cow.fi/order/0x17188e947c796de9053d8041559d55aad2c002360f261c46329f542c95ce5d54) |
| 11:33:40 | 82 | SPCX → SOL (native) | Executed | `0x1308f320…` [🐞](https://debug.barn.cow.fi/order/0x1308f320aa27028b1f40b0044071c29e8802ffacdd330d7d66f2da1df0f92aa4) |
| 11:33:41 | 87 | POPCAT → SOL (native) | Executed | `0x4e265128…` [🐞](https://debug.barn.cow.fi/order/0x4e265128215dea3bf22aa1428a0031cd1f9866b889ffbbf0f4c0b5883ae15411) |
| 11:33:41 | 85 | Bonk → SOL (native) | Executed | `0xf84d0155…` [🐞](https://debug.barn.cow.fi/order/0xf84d0155f1128b299a13eed7fcd31ae9d644068a8400069e49c9e4aa0ca59242) |
| 11:33:43 | 86 | $WIF → SOL (native) | Executed | `0xe3f548e1…` [🐞](https://debug.barn.cow.fi/order/0xe3f548e11b39f9dce12cc4d27218dd37d6cb2e0c4c39bc51568f1dd3b5d691ed) |
| 11:33:44 | 89 | mSOL → SOL (native) | Executed | `0xc6a9644e…` [🐞](https://debug.barn.cow.fi/order/0xc6a9644e60e4d911cfe6505a550ba81e67b4aa3630b15b7ba9fd16702ccd03f8) |
| 11:33:49 | 90 | JupSOL → SOL (native) | Executed | `0xdad6be6e…` [🐞](https://debug.barn.cow.fi/order/0xdad6be6e1558c7621b73d843087894c8bfae7c1856c8a1a740ac66f94216cee6) |
| 11:34:00 | 88 | JitoSOL → SOL (native) | Executed | `0x93cdcd73…` [🐞](https://debug.barn.cow.fi/order/0x93cdcd730930cf79ce3171228ffb02cb0425a565dde55d834976bfde0670dcb5) |
| 11:34:14 | 92 | USDe → SOL (native) | Executed | `0x62cf816d…` [🐞](https://debug.barn.cow.fi/order/0x62cf816d15b3191662687da3edecef5432c066dae36ed97c34763f46e85182da) |
| 11:34:15 | 91 | cbBTC → SOL (native) | Executed | `0x6158c67b…` [🐞](https://debug.barn.cow.fi/order/0x6158c67be4cb372d9d61a71026db23246267bd7dc5a06f88cb65d359f86fec62) |
| 11:34:22 | 93 | EURC → SOL (native) | Executed | `0x81772e22…` [🐞](https://debug.barn.cow.fi/order/0x81772e227f749bc8f0f66ae3cef801a12006d0eb861d8745a7ffb30bc826cbfe) |
| 11:34:33 | 95 | JLP → SOL (native) | Executed | `0x210a9c3a…` [🐞](https://debug.barn.cow.fi/order/0x210a9c3a404c4c04588f510ea2b34ed641d8f5307ea38c9631edf659aec70108) |
| 11:34:43 | 97 | ETH → SOL (native) | Executed | `0xd2ca78ba…` [🐞](https://debug.barn.cow.fi/order/0xd2ca78ba0617967f88c1de196c9ab59e7fe705d66966d12dd8d7a1a06b2c99b2) |
| 11:34:44 | 98 | BNB → SOL (native) | Executed | `0x9719e4df…` [🐞](https://debug.barn.cow.fi/order/0x9719e4df75b639f771627d0ebfb27afe499807d54c0091a9274cd9335cf617fa) |
| 11:34:45 | 96 | INF → SOL (native) | Executed | `0x5929988a…` [🐞](https://debug.barn.cow.fi/order/0x5929988af68de1fdff676f69afb2bdd3580d31ca961b8ec8a43d1ffe7076c4d8) |
| 11:34:45 | 94 | USDY → SOL (native) | Executed | `0x872e6ebb…` [🐞](https://debug.barn.cow.fi/order/0x872e6ebb713f597c39b91914c2a85a5d7e176d53996438875b0d301c92e90f4c) |
| 11:34:49 | 99 | XAUt0 → SOL (native) | Executed | `0x5f55075b…` [🐞](https://debug.barn.cow.fi/order/0x5f55075ba9922019a230921f2d6ea3deda7c472c0aea3cf8f1fb27e39f7c6d81) |
| 11:34:51 | 100 | GLDx → SOL (native) | Executed | `0x685fcb9e…` [🐞](https://debug.barn.cow.fi/order/0x685fcb9e551f820ea6f99bfd4aba3a1d2cb129853881c3f04a3dc44b624c26bc) |
| 11:34:56 | 101 | EUROP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x13bbadaf…` [🐞](https://debug.barn.cow.fi/order/0x13bbadaf2bda6be561c958b36c5c535e45e23719f83df98b8dc3c21642610585) |
| 11:35:03 | 103 | MEW → SOL (native) | Executed | `0xc77185ce…` [🐞](https://debug.barn.cow.fi/order/0xc77185cec92427a63b7bfb7e0c9b58b1d1018b3d61cd5ea8bca56a94a2f490c9) |
| 11:35:04 | 104 | BOME → SOL (native) | Executed | `0x36038b88…` [🐞](https://debug.barn.cow.fi/order/0x36038b88fcb01d7ece4dc93c680c21f63b79471b3c87eddb13c5c0ef289d905e) |
| 11:35:04 | 102 | Fartcoin → SOL (native) | Executed | `0x8b0d877b…` [🐞](https://debug.barn.cow.fi/order/0x8b0d877b186968eb6c65536fe2ef9628b57287f044ffa181ceee9ed4252c2535) |
| 11:35:13 | 105 | hyloSOL → SOL (native) | Executed | `0xd11ef8ae…` [🐞](https://debug.barn.cow.fi/order/0xd11ef8aeca7317d62011118b38e49e3282cf046e851a0d59fe038e752d191978) |
| 11:35:13 | 106 | PSOL → SOL (native) | Executed | `0xbdf371a9…` [🐞](https://debug.barn.cow.fi/order/0xbdf371a9731082d6b7976345f3396801bdc2ad7294183e0973c5fd018b6b37c8) |
| 11:36:31 | 101 | EUROP → SOL (native) | Executed | `0x276274af…` [🐞](https://debug.barn.cow.fi/order/0x276274afda483f8558a7f1770b33bd73db2edf7366131f15ee177504839569df) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 181 | 99.5% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 0.5% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 11s | 15s | 21s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| GCBB…o5VC | 181 | 100.0% | 82 | 123,996 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| asao | 443 | 160 | 160 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 157 | 157 | 100.0% |
| market buy | 25 | 24 | 96.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 92 | 92 | 100.0% |
| wSOL → JUP | 28 | 28 | 100.0% |
| wSOL → USDT | 4 | 4 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → PAID | 2 | 1 | 50.0% |
| wSOL → ANSEM | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → PYUSD | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 2 | 100.0% |
| wSOL → CRCLx | 2 | 2 | 100.0% |
| wSOL → SKHY | 2 | 2 | 100.0% |
| wSOL → USDv | 2 | 2 | 100.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → SPCX | 2 | 2 | 100.0% |
| wSOL → TSLAx | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| JUP → USDC | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 5 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 5 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 5 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 5 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 4 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 4 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 4 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 4 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 3 | 3 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 3 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 3 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 3 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 3 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 2 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 2 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 2 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 2 | 1 | 50.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 2 | 2 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 2 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 2 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 2 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 2 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 2 | 2 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 2 | 2 | 100.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 2 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 2 | 2 | 100.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 2 | 2 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 2 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 2 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 2 | 2 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
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
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 11:32:25 | wSOL → PAID | market buy | Winner too late: creation blockhash expired | `0x20d0873a…` [🐞](https://debug.barn.cow.fi/order/0x20d0873a3ea2da0cc7a5ed30bd44c020c6af4ecefd8bf46fd24f5b1f2e5ef16e) |
