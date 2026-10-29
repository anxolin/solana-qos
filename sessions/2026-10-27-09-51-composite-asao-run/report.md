# Solana QoS report: 2026-10-27-09-51-composite-asao-run

Barn, orders created between `2026-10-27T09:52:35.157Z` and `2026-10-27T10:23:31.246Z`. Data fetched 2026-10-27T10:52:15+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 192 |
| Orders executed | **190** (99.0%) |
| Sponsored orders never created on-chain | 1 (0.5%) |
| Traders | 114 |
| Settlement txs | 91 |

## Scenario results

Target solver: `asao`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-27T09:52:35.157Z | 2026-10-27T09:53:23.300Z | 6/6 | 0 | 8 | 8 | 100.0% |
| solver-same-direction-25 | 2026-10-27T09:54:16.582Z | 2026-10-27T09:54:35.483Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-27T09:56:50.070Z | 2026-10-27T10:03:11.906Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-cow | 2026-10-27T10:06:03.582Z | 2026-10-27T10:08:59.679Z | 14/15 | 1 | 15 | 15 | 93.3% |
| solver-token-coverage | 2026-10-27T10:09:50.413Z | 2026-10-27T10:11:09.746Z | 50/52 | 2 | 52 | 50 | 96.2% |
| solver-fresh-accounts | 2026-10-27T10:14:18.518Z | 2026-10-27T10:14:36.983Z | 8/8 | 0 | 8 | 8 | 100.0% |

## Scenario

187 of 190 scenario rows completed. 0 retries, 1 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 09:52:35 | 1 | 1 | sell 0.005 SOL → USDC | filled | 6s | 1 |  |
| 09:52:35 | 2 | 2 | sell 0.005 SOL → USDT | filled | 6s | 1 |  |
| 09:52:35 | 3 | 3 | sell 0.5 JUP → USDC | filled | 20s | 2 |  |
| 09:52:40 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 7s | 1 |  |
| 09:52:40 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 8s | 1 |  |
| 09:52:55 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 28s | 2 |  |
| 09:54:16 | 7 | 4 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 09:54:16 | 8 | 5 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 09:54:16 | 9 | 6 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 09:54:16 | 10 | 7 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:54:16 | 11 | 8 | sell 0.005 SOL → JUP | filled | 10s | 1 |  |
| 09:54:16 | 12 | 9 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:54:16 | 13 | 10 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:54:16 | 14 | 11 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:54:16 | 15 | 12 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:54:16 | 16 | 13 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:54:16 | 17 | 14 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 09:54:16 | 18 | 15 | sell 0.005 SOL → JUP | filled | 12s | 1 |  |
| 09:54:16 | 19 | 16 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:54:16 | 20 | 17 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:54:16 | 21 | 18 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:54:16 | 22 | 19 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 09:54:16 | 23 | 20 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 09:54:16 | 24 | 21 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 09:54:16 | 25 | 22 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 09:54:16 | 26 | 23 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 09:54:16 | 27 | 24 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 09:54:16 | 28 | 25 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 09:54:16 | 29 | 26 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 09:54:16 | 30 | 27 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 09:54:16 | 31 | 28 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:56:50 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 09:56:50 | 33 | 30 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 09:56:50 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 09:56:50 | 35 | 32 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 09:58:20 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 10s | 1 |  |
| 09:58:20 | 37 | 30 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 09:58:20 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 09:58:20 | 39 | 32 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 09:58:20 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 6s | 1 |  |
| 09:58:20 | 41 | 34 | sell 0.003 SOL → USDC | filled | 7s | 1 |  |
| 09:58:20 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 7s | 1 |  |
| 09:58:20 | 43 | 36 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 09:59:50 | 44 | 29 | sell 0.0025 SOL → USDC | filled | 19s | 1 |  |
| 09:59:50 | 45 | 30 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 09:59:50 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 09:59:50 | 47 | 32 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 09:59:50 | 48 | 33 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 09:59:50 | 49 | 34 | sell 0.003 SOL → USDC | filled | 12s | 1 |  |
| 09:59:50 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 09:59:50 | 51 | 36 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 09:59:50 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 7s | 1 |  |
| 09:59:50 | 53 | 38 | sell 0.003 SOL → USDC | filled | 7s | 1 |  |
| 09:59:50 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 09:59:50 | 55 | 40 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 09:59:50 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 19s | 1 |  |
| 09:59:50 | 57 | 42 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 09:59:50 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 09:59:50 | 59 | 44 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 10:01:20 | 60 | 29 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 10:01:20 | 61 | 30 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 10:01:20 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 10:01:20 | 63 | 32 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:01:20 | 64 | 33 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 10:01:20 | 65 | 34 | sell 0.003 SOL → USDC | filled | 12s | 1 |  |
| 10:01:20 | 66 | 35 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 10:01:20 | 67 | 36 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 10:01:20 | 68 | 37 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 10:01:20 | 69 | 38 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 10:01:20 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 10:01:20 | 71 | 40 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 10:01:20 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 23s | 1 |  |
| 10:01:20 | 73 | 42 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 10:01:20 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 10:01:20 | 75 | 44 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 10:01:20 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 10:01:20 | 77 | 46 | sell 0.003 SOL → USDC | filled | 14s | 1 |  |
| 10:01:20 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 10:01:20 | 79 | 48 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 10:01:20 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 11s | 1 |  |
| 10:01:20 | 81 | 50 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 10:01:20 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 10:01:20 | 83 | 52 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 10:02:50 | 84 | 29 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 10:02:50 | 85 | 30 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 10:02:50 | 86 | 31 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 10:02:50 | 87 | 32 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 10:02:50 | 88 | 33 | sell 0.0025 SOL → USDC | filled | 11s | 1 |  |
| 10:02:50 | 89 | 34 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 10:02:50 | 90 | 35 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 10:02:50 | 91 | 36 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 10:02:50 | 92 | 37 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 10:02:50 | 93 | 38 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 10:02:50 | 94 | 39 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 10:02:50 | 95 | 40 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:02:50 | 96 | 41 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 10:02:50 | 97 | 42 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 10:02:50 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 10:02:50 | 99 | 44 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 10:02:50 | 100 | 45 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 10:02:50 | 101 | 46 | sell 0.003 SOL → USDC | filled | 12s | 1 |  |
| 10:02:50 | 102 | 47 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 10:02:50 | 103 | 48 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 10:02:50 | 104 | 49 | sell 0.0025 SOL → USDC | filled | 20s | 1 |  |
| 10:02:50 | 105 | 50 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 10:02:50 | 106 | 51 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 10:02:50 | 107 | 52 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 10:02:50 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 10:02:50 | 109 | 54 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 10:02:50 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 10:02:50 | 111 | 56 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 10:02:50 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 10:02:50 | 113 | 58 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 10:02:50 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 10:02:50 | 115 | 60 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 10:06:03 | 116 | 62 | buy 2.6 USDC ← SOL | filled | 18s | 1 |  |
| 10:06:03 | 117 | 64 | buy 1.3 USDC ← SOL | filled | 21s | 1 |  |
| 10:06:03 | 118 | 65 | buy 3.1 USDC ← SOL | filled | 11s | 1 |  |
| 10:06:03 | 119 | 66 | buy 3.1 USDT ← SOL | failed | 2s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 10:06:03 | 120 | 67 | buy 1.1 USDT ← SOL | filled | 9s | 1 |  |
| 10:06:03 | 121 | 68 | buy 3.2 USDC ← SOL | filled | 9s | 1 |  |
| 10:08:33 | 122 | 61 | sell 0.02 SOL → USDC | filled | 11s | 1 |  |
| 10:08:33 | 123 | 62 | buy 0.02 SOL ← USDC | filled | 12s | 1 |  |
| 10:08:33 | 124 | 63 | sell 0.03 SOL → USDC | filled | 11s | 1 |  |
| 10:08:33 | 125 | 64 | sell 1.2 USDC → SOL | filled | 15s | 1 |  |
| 10:08:33 | 126 | 65 | sell 3 USDC → USDT | filled | 15s | 1 |  |
| 10:08:33 | 127 | 66 | sell 3 USDT → USDC | filled | 25s | 2 |  |
| 10:08:33 | 128 | 67 | sell 1 USDT → USDC | filled | 15s | 1 |  |
| 10:08:33 | 129 | 68 | sell 3 USDC → USDT | filled | 14s | 1 |  |
| 10:08:33 | 130 | 69 | sell 0.02 SOL → JUP | filled | 11s | 1 |  |
| 10:09:50 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 16s | 1 |  |
| 10:09:50 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 16s | 1 |  |
| 10:09:50 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 16s | 1 |  |
| 10:09:50 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 16s | 1 |  |
| 10:09:50 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 11s | 1 |  |
| 10:09:50 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 12s | 1 |  |
| 10:09:50 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 12s | 1 |  |
| 10:09:50 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 12s | 1 |  |
| 10:09:50 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 12s | 1 |  |
| 10:09:50 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 13s | 1 |  |
| 10:09:50 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 13s | 1 |  |
| 10:09:50 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 12s | 1 |  |
| 10:09:50 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 13s | 1 |  |
| 10:09:50 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 13s | 1 |  |
| 10:09:50 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 14s | 1 |  |
| 10:09:50 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 13s | 1 |  |
| 10:09:50 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 14s | 1 |  |
| 10:09:50 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 14s | 1 |  |
| 10:09:50 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 20s | 1 |  |
| 10:09:50 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 20s | 1 |  |
| 10:09:50 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 16s | 1 |  |
| 10:09:50 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 15s | 1 |  |
| 10:09:50 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 16s | 1 |  |
| 10:09:50 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 16s | 1 |  |
| 10:09:50 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 21s | 1 |  |
| 10:09:50 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 17s | 1 |  |
| 10:09:50 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 17s | 1 |  |
| 10:09:50 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 18s | 1 |  |
| 10:09:50 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 18s | 1 |  |
| 10:09:50 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 79s | 1 | main timeout |
| 10:09:50 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 19s | 1 |  |
| 10:09:50 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 22s | 1 |  |
| 10:09:50 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 19s | 1 |  |
| 10:09:50 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 19s | 1 |  |
| 10:09:50 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 20s | 1 |  |
| 10:09:50 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 20s | 1 |  |
| 10:09:50 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 20s | 1 |  |
| 10:10:06 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 11s | 1 |  |
| 10:10:06 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | filled | 11s | 1 |  |
| 10:10:06 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 14s | 1 |  |
| 10:10:06 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 11s | 1 |  |
| 10:10:01 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | filled | 10s | 1 |  |
| 10:10:02 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | filled | 10s | 1 |  |
| 10:10:02 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | filled | 10s | 1 |  |
| 10:10:01 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 10s | 1 |  |
| 10:10:02 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | filled | 9s | 1 |  |
| 10:10:02 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 38s | 1 | main expired |
| 10:10:03 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | filled | 10s | 1 |  |
| 10:10:02 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | filled | 9s | 1 |  |
| 10:10:03 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | filled | 10s | 1 |  |
| 10:10:03 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | filled | 10s | 1 |  |
| 10:10:04 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | filled | 13s | 1 |  |
| 10:14:18 | 183 | 107 | sell 0.1 SOL → USDC | filled | 9s | 1 |  |
| 10:14:18 | 184 | 108 | sell 0.1 SOL → USDC | filled | 8s | 1 |  |
| 10:14:18 | 185 | 109 | buy 10 USDC ← SOL | filled | 13s | 1 |  |
| 10:14:18 | 186 | 110 | buy 10 USDC ← SOL | filled | 18s | 1 |  |
| 10:14:18 | 187 | 111 | sell 0.1 SOL → USDT | filled | 10s | 1 |  |
| 10:14:18 | 188 | 112 | sell 0.1 SOL → USDT | filled | 9s | 1 |  |
| 10:14:18 | 189 | 113 | buy 10 USDT ← SOL | filled | 14s | 1 |  |
| 10:14:18 | 190 | 114 | buy 10 USDT ← SOL | filled | 18s | 1 |  |

### Rows without an order

1 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | main | 1 | SOL → USDT | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 192 (189 main, 3 acquire). Cleanup placed 118 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 09:53:25 | 1 | USDC → SOL (native) | Executed | `0x53627850…` [🐞](https://debug.barn.cow.fi/order/0x53627850f0fee37551d2ea7b8a6f76438ffda84f7f6ba158adaed0a93db7eb02) |
| 09:53:26 | 2 | USDT → SOL (native) | Executed | `0xfe5cb7f7…` [🐞](https://debug.barn.cow.fi/order/0xfe5cb7f7afbac3195c5178621edbb6e252cb8f7c115543cd0e47b1b11faa70eb) |
| 09:53:27 | 3 | USDC → SOL (native) | Executed | `0x0a75db25…` [🐞](https://debug.barn.cow.fi/order/0x0a75db255c79e96b7c65e8684b1fe38495a390d6a08aecea111d1220dc969ce6) |
| 09:54:38 | 5 | JUP → SOL (native) | Executed | `0x302588f5…` [🐞](https://debug.barn.cow.fi/order/0x302588f5727210fd5a535bb3af48e92b08c699cd16d768f2ca54085a69efd548) |
| 09:54:39 | 6 | JUP → SOL (native) | Executed | `0x30281a3a…` [🐞](https://debug.barn.cow.fi/order/0x30281a3ae9441ed6b6f35570861f803b37e9a9e498b9b8516b37a14feba8c0ac) |
| 09:54:40 | 7 | JUP → SOL (native) | Executed | `0xf74ca03a…` [🐞](https://debug.barn.cow.fi/order/0xf74ca03a8b5934ac8ea91027f17c36f827f3cd7a920e412756d9aa080ee311a6) |
| 09:54:41 | 8 | JUP → SOL (native) | Executed | `0x664295b8…` [🐞](https://debug.barn.cow.fi/order/0x664295b83912665cbd831a3ebda6a54f3602538cec4c9af85ea21c8fda008c7c) |
| 09:54:42 | 9 | JUP → SOL (native) | Executed | `0xfc2835bf…` [🐞](https://debug.barn.cow.fi/order/0xfc2835bfbb5b6624ce33dd96858c795a6b39d5e994757150a1aa17a4552fe0f6) |
| 09:54:43 | 10 | JUP → SOL (native) | Executed | `0x018951a4…` [🐞](https://debug.barn.cow.fi/order/0x018951a41808a1a6105f29e8a6fa40892d1bb3874b3431479f4f1ca5b3623f40) |
| 09:54:44 | 11 | JUP → SOL (native) | Executed | `0x2e694a27…` [🐞](https://debug.barn.cow.fi/order/0x2e694a27c0633f9651b7a159e2b9156af47c9cdf662e7a5a86f99ec5f46e7758) |
| 09:54:45 | 12 | JUP → SOL (native) | Executed | `0x20b01034…` [🐞](https://debug.barn.cow.fi/order/0x20b01034c4ec971715328638f78b53829158a14fcbb1faee468ef5b093063bc9) |
| 09:54:49 | 4 | JUP → SOL (native) | Executed | `0xe53a59b5…` [🐞](https://debug.barn.cow.fi/order/0xe53a59b55410e98258ef99329183fb031444474b34a85d93e7023ccef24b657a) |
| 09:54:50 | 13 | JUP → SOL (native) | Executed | `0x57c4e172…` [🐞](https://debug.barn.cow.fi/order/0x57c4e172d6bd21376b20b7e9e96c03df4e19b55e05d4b4d8aed2e1d34e110d63) |
| 09:55:07 | 15 | JUP → SOL (native) | Executed | `0xb3b74b0e…` [🐞](https://debug.barn.cow.fi/order/0xb3b74b0eb85fb057f6f801d799f8296e178fd5f386db6263b3541193f7a1f334) |
| 09:55:08 | 14 | JUP → SOL (native) | Executed | `0xe006c40f…` [🐞](https://debug.barn.cow.fi/order/0xe006c40f80a73003ea056feb53a860463d4ccbf6fe54b84057315444ae5bd1a7) |
| 09:55:09 | 16 | JUP → SOL (native) | Executed | `0x648db1a5…` [🐞](https://debug.barn.cow.fi/order/0x648db1a5042505061f0d620127777fb368222d8ba0e62b5c5f2a6bcfb5410e04) |
| 09:55:14 | 17 | JUP → SOL (native) | Executed | `0x9f0bfd4b…` [🐞](https://debug.barn.cow.fi/order/0x9f0bfd4b39800130f7d26deb0be0ecd4c92309acf6c833182f5dd371e1d2f616) |
| 09:55:17 | 18 | JUP → SOL (native) | Executed | `0xd38cd65a…` [🐞](https://debug.barn.cow.fi/order/0xd38cd65aa8612c64c9c1ec975ae89a214306b89d9aada2f66907993bd4a902a9) |
| 09:55:18 | 19 | JUP → SOL (native) | Executed | `0x10c42c26…` [🐞](https://debug.barn.cow.fi/order/0x10c42c267c07f080dbbe15cb297c8451d8f07f6b9e0dcbb2c816b6895baa80fa) |
| 09:55:19 | 20 | JUP → SOL (native) | Executed | `0x71a97ba8…` [🐞](https://debug.barn.cow.fi/order/0x71a97ba802588c1e9108df1f5710b6306dc052ea2ca83cb1d790960af890609c) |
| 09:55:26 | 21 | JUP → SOL (native) | Executed | `0x85627492…` [🐞](https://debug.barn.cow.fi/order/0x856274929ccd09c263f92bbebfecf9af3d3df8dc720b2e3405a9b18bcadde6c9) |
| 09:55:27 | 22 | JUP → SOL (native) | Executed | `0xc6b8e445…` [🐞](https://debug.barn.cow.fi/order/0xc6b8e445f02819e94ecea5ca9cb220c529b334608fb3423192b27ada893a2daa) |
| 09:55:29 | 23 | JUP → SOL (native) | Executed | `0x42e77f58…` [🐞](https://debug.barn.cow.fi/order/0x42e77f5898d9ef2895206fc49bf27304aea2e2c1f4c5c834e27a788399a6c803) |
| 09:55:39 | 24 | JUP → SOL (native) | Executed | `0x16a6ffee…` [🐞](https://debug.barn.cow.fi/order/0x16a6ffee74631ebe97fc9e67d69defa30ae9507f1583ec7e63663ce93108ed82) |
| 09:55:43 | 25 | JUP → SOL (native) | Executed | `0xfb57b0d1…` [🐞](https://debug.barn.cow.fi/order/0xfb57b0d1bbf0aefd6cba723acb1b6b5b1b8548e96f8617a62e617e80d52e639f) |
| 09:55:44 | 26 | JUP → SOL (native) | Executed | `0x25fe6c03…` [🐞](https://debug.barn.cow.fi/order/0x25fe6c03a118fcc556f3f0b3990e9e181337472a3831293d544b26ad510cd1aa) |
| 09:55:47 | 27 | JUP → SOL (native) | Executed | `0x4bb79fbe…` [🐞](https://debug.barn.cow.fi/order/0x4bb79fbe354e6036ae4bd234fbb389c18afd5400268e83eee700605d640ccf0d) |
| 09:55:51 | 28 | JUP → SOL (native) | Executed | `0x0472e569…` [🐞](https://debug.barn.cow.fi/order/0x0472e56912aa58b7390a5a2a8ac9d9e534076cbebe016fb95cc4686dbf1b10f1) |
| 10:03:15 | 30 | USDC → SOL (native) | Executed | `0xedbc47dd…` [🐞](https://debug.barn.cow.fi/order/0xedbc47dde024b7ec3c4df3b96c875ed9d465f2e7723866a9f332a3fa955f84d9) |
| 10:03:15 | 31 | USDC → SOL (native) | Executed | `0xc8132af6…` [🐞](https://debug.barn.cow.fi/order/0xc8132af679a3ef72576d48be290132c3ac6988726fa5c1974bb100518b74197c) |
| 10:03:16 | 32 | USDC → SOL (native) | Executed | `0xb3691726…` [🐞](https://debug.barn.cow.fi/order/0xb3691726f7bf621e7a5b3facd7617bac3065607fd2db4c7e34d80c652ca9f13c) |
| 10:03:18 | 33 | USDC → SOL (native) | Executed | `0xeaee9d37…` [🐞](https://debug.barn.cow.fi/order/0xeaee9d37f186f925d94aa6ec0b3190da4810e008dcde708f96389320fa98b407) |
| 10:03:18 | 34 | USDC → SOL (native) | Executed | `0xc7fd707e…` [🐞](https://debug.barn.cow.fi/order/0xc7fd707e496d50a5b6ffc572ae64ba93431dfdd32cfa1d0c21d6d3984d201efc) |
| 10:03:19 | 35 | USDC → SOL (native) | Executed | `0x84300a7b…` [🐞](https://debug.barn.cow.fi/order/0x84300a7ba69d5188df8899f4c195a06826c6b3e758af69c5f53ab3df30749b99) |
| 10:03:20 | 36 | USDC → SOL (native) | Executed | `0x673c3d32…` [🐞](https://debug.barn.cow.fi/order/0x673c3d32ce7bec5fc3362d2aa67f09415002f0e3f08b60227d51141f33a388db) |
| 10:03:21 | 37 | USDC → SOL (native) | Executed | `0x6b6bf0a1…` [🐞](https://debug.barn.cow.fi/order/0x6b6bf0a1132d650cee6da1829a3678cd98bd658129d9c23bda24122af0663f8a) |
| 10:03:25 | 38 | USDC → SOL (native) | Executed | `0xa2e4f52e…` [🐞](https://debug.barn.cow.fi/order/0xa2e4f52e9c1a9a13590fa7da3792622e89136ada86bb2da38c210e5a8bc79b63) |
| 10:03:25 | 29 | USDC → SOL (native) | Executed | `0xa4fb3b71…` [🐞](https://debug.barn.cow.fi/order/0xa4fb3b71d677946b0113347ed5b71d007d0f8c822be92af2d48a3f37470d22e0) |
| 10:03:44 | 39 | USDC → SOL (native) | Executed | `0x66f3890a…` [🐞](https://debug.barn.cow.fi/order/0x66f3890a40254e3389a931a48d59943e29fde9fb93acc3746ec4cf83bcb4660b) |
| 10:03:48 | 40 | USDC → SOL (native) | Executed | `0x8a4133be…` [🐞](https://debug.barn.cow.fi/order/0x8a4133be18b1f1da3f9de6bdab9f19291f34023f320e1608601c9b7b7990a087) |
| 10:03:49 | 41 | USDC → SOL (native) | Executed | `0xe2f7ab37…` [🐞](https://debug.barn.cow.fi/order/0xe2f7ab375f3d4279e7a50e62a8b1165f2227813b04e4cc319f5e1a523a2b4986) |
| 10:03:50 | 42 | USDC → SOL (native) | Executed | `0xa3abb1e2…` [🐞](https://debug.barn.cow.fi/order/0xa3abb1e2d5c642d93beec6219a18d61557db45f35529468a9a81465bf18c42d4) |
| 10:03:53 | 44 | USDC → SOL (native) | Executed | `0x62ef85f1…` [🐞](https://debug.barn.cow.fi/order/0x62ef85f197b1be1afba86d7ec62598360fa90a0b966bf1dad4db9373d7bf2f68) |
| 10:03:54 | 43 | USDC → SOL (native) | Executed | `0xb02e21b3…` [🐞](https://debug.barn.cow.fi/order/0xb02e21b32bb8346d36dda83e90655d87af0f18f62e1ecaf7a9e95d1357f16129) |
| 10:03:56 | 46 | USDC → SOL (native) | Executed | `0x0295aac0…` [🐞](https://debug.barn.cow.fi/order/0x0295aac00b1e8b02f14667edb8191737deabb5693cf58f67e9d3be956a178586) |
| 10:03:59 | 47 | USDC → SOL (native) | Executed | `0xfac28404…` [🐞](https://debug.barn.cow.fi/order/0xfac284045836cea354f6c4ab32ed0003f6c3509f6862e7ea5c7ebbb19f1ac5ce) |
| 10:03:59 | 45 | USDC → SOL (native) | Executed | `0x0ed7ecf4…` [🐞](https://debug.barn.cow.fi/order/0x0ed7ecf4c99b17c8231c48acdf2e27b5c96a2d597d6f548fba1775477c3447b3) |
| 10:03:59 | 48 | USDC → SOL (native) | Executed | `0xdd8287c9…` [🐞](https://debug.barn.cow.fi/order/0xdd8287c9ac475f3896342561cdc165eccb85d1419978163d44785fd21b041239) |
| 10:04:34 | 49 | USDC → SOL (native) | Executed | `0x716ff0e6…` [🐞](https://debug.barn.cow.fi/order/0x716ff0e6acad239c1b8ae2b1c9d02cc876b8cf1da3f0dfde55a81629af3091d6) |
| 10:04:34 | 51 | USDC → SOL (native) | Executed | `0x1b3117e0…` [🐞](https://debug.barn.cow.fi/order/0x1b3117e0b2a8510c25126ee725ce0da9b050771f49aad437a85b99e3ab83234d) |
| 10:04:39 | 53 | USDC → SOL (native) | Executed | `0xdb3bda9a…` [🐞](https://debug.barn.cow.fi/order/0xdb3bda9af34fad9f3014759689652d1515a3578de13f08d7c743ec21edc05ce3) |
| 10:04:41 | 52 | USDC → SOL (native) | Executed | `0xc8448749…` [🐞](https://debug.barn.cow.fi/order/0xc844874949cc3e71bdaf48fa9da2f3aa0b4fa849ad6932eb0e3baae71fbbfe55) |
| 10:04:42 | 50 | USDC → SOL (native) | Executed | `0x54340cd8…` [🐞](https://debug.barn.cow.fi/order/0x54340cd821018d06c7eb01f040ec4e42c20e0755ad14fe2702286831b4dff97f) |
| 10:04:42 | 54 | USDC → SOL (native) | Executed | `0x673abaaa…` [🐞](https://debug.barn.cow.fi/order/0x673abaaaa35769180f13f5154a93de824ef45a32c816affcf12f17cb304be9c3) |
| 10:04:51 | 55 | USDC → SOL (native) | Executed | `0xf0efd964…` [🐞](https://debug.barn.cow.fi/order/0xf0efd964f79683f4663c27941ffa75e2aac79f24f3e4d60d83000af52a6218c6) |
| 10:04:53 | 57 | USDC → SOL (native) | Executed | `0xe9b99a1d…` [🐞](https://debug.barn.cow.fi/order/0xe9b99a1dc3aeb5c5c6df3b400f1a7005ba95c38ad822c66ea9d9e8e174ab1380) |
| 10:04:56 | 58 | USDC → SOL (native) | Executed | `0xdb5dfec4…` [🐞](https://debug.barn.cow.fi/order/0xdb5dfec43e11adcc837ce542391a9dac3d5c49d4f70f2740b39cc8938bcb065e) |
| 10:04:59 | 56 | USDC → SOL (native) | Executed | `0x0c121bc3…` [🐞](https://debug.barn.cow.fi/order/0x0c121bc37ff69991912b9ab9c259e075261d1f1fce788a3b92bf13302ed8be95) |
| 10:05:14 | 59 | USDC → SOL (native) | Executed | `0xca1a153b…` [🐞](https://debug.barn.cow.fi/order/0xca1a153be3116f031aeee93077633c9c2f04621216be642d01c5a22d2d7d6d11) |
| 10:05:14 | 60 | USDC → SOL (native) | Executed | `0x6d09075e…` [🐞](https://debug.barn.cow.fi/order/0x6d09075e87b5d3a748f8cff2919cf1141ef622cd2bd3de8d7be93900092c6deb) |
| 10:09:01 | 61 | USDC → SOL (native) | Executed | `0xb15c9bd8…` [🐞](https://debug.barn.cow.fi/order/0xb15c9bd8859aaf38faeefb887b29150fcea590d4d1a2e3f382edf10031e23189) |
| 10:09:02 | 62 | USDC → SOL (native) | Executed | `0x0dce4959…` [🐞](https://debug.barn.cow.fi/order/0x0dce49597603cb54824ea76653e4ca7213101dcd0706ad895b0bc4622161b508) |
| 10:09:03 | 63 | USDC → SOL (native) | Executed | `0xbcbd1a86…` [🐞](https://debug.barn.cow.fi/order/0xbcbd1a869df0ae59cbcc5832b7f766f504a651b37f758914a94c8a134041b7c4) |
| 10:09:04 | 64 | USDC → SOL (native) | Executed | `0xb78e3491…` [🐞](https://debug.barn.cow.fi/order/0xb78e3491ce778cc39446334021622456ad7d797e5a45e5298856604ce3f1d27f) |
| 10:09:05 | 65 | USDT → SOL (native) | Executed | `0xf31833f9…` [🐞](https://debug.barn.cow.fi/order/0xf31833f94674aed6e27f971626473714ef5eb4f73ff4d3fdd56e32bb0d6cb1eb) |
| 10:09:06 | 65 | USDC → SOL (native) | Executed | `0x7b4734f3…` [🐞](https://debug.barn.cow.fi/order/0x7b4734f318256a2082da0a803e2e8f0dc2e11865f8319ed5a91cf527d448086e) |
| 10:09:07 | 67 | USDC → SOL (native) | Executed | `0x3ebbbe4b…` [🐞](https://debug.barn.cow.fi/order/0x3ebbbe4b22807e1bb5dd91ccb8b29e84db53b8dead5718b2d46cb79f605d95ed) |
| 10:09:09 | 67 | USDT → SOL (native) | Executed | `0xedd56ca4…` [🐞](https://debug.barn.cow.fi/order/0xedd56ca46ccdc96084430e18e300506f44e9af2d75fbc228b3b662490baf4fe6) |
| 10:09:10 | 68 | USDT → SOL (native) | Executed | `0x012a60f7…` [🐞](https://debug.barn.cow.fi/order/0x012a60f7112c05050ff47c7922aa6d5b220e1cbbf57617d0b32af875ee0de5b4) |
| 10:09:10 | 68 | USDC → SOL (native) | Executed | `0xccc89caa…` [🐞](https://debug.barn.cow.fi/order/0xccc89caaf86cdcbeb3784564f5d314067368fc5f3fe223e5ad3da877231fea86) |
| 10:09:14 | 69 | JUP → SOL (native) | Executed | `0x460fffc3…` [🐞](https://debug.barn.cow.fi/order/0x460fffc3a9185d3f73c645eafbe5c6fedd14d1c42881d900eab619707dcb2884) |
| 10:11:12 | 71 | PAID → SOL (native) | Executed | `0x4d8a1949…` [🐞](https://debug.barn.cow.fi/order/0x4d8a194975d99fe89b85f3e61a2616fcbb07a6102d3a1c8098684037d91eca9c) |
| 10:11:13 | 72 | USDG → SOL (native) | Executed | `0x64265080…` [🐞](https://debug.barn.cow.fi/order/0x6426508026f9bd49f4105a2ef057c331ae5cb90507e4e619c4b45a39f43d5317) |
| 10:11:14 | 73 | PUMP → SOL (native) | Executed | `0x521249a0…` [🐞](https://debug.barn.cow.fi/order/0x521249a0ef7a00568c7bce16a255c63ed60b2d657118026ccd1f8e0f6e90e9d4) |
| 10:11:16 | 74 | PYUSD → SOL (native) | Executed | `0x1d2b1256…` [🐞](https://debug.barn.cow.fi/order/0x1d2b1256b97ab009111b889849431cf0f04a09e9c13d9ddd2bc558c00524c4d4) |
| 10:11:16 | 75 | CASH → SOL (native) | Executed | `0xac2299aa…` [🐞](https://debug.barn.cow.fi/order/0xac2299aa91aed5504a40484b90454e9ee4320462a1b204859e4ab0efb58eb995) |
| 10:11:17 | 76 | CRCLx → SOL (native) | Executed | `0x72e44457…` [🐞](https://debug.barn.cow.fi/order/0x72e44457c9995785ebc7adda334c0073d51a7c4d310e6606dfe433b55b5e8105) |
| 10:11:18 | 77 | SPYx → SOL (native) | Executed | `0x2d3da0af…` [🐞](https://debug.barn.cow.fi/order/0x2d3da0afe79e01b0009c158e81d07bd1b80f29ca39475cc7f5a7f2000d43533b) |
| 10:11:20 | 78 | USDv → SOL (native) | Executed | `0xfb2f8c4a…` [🐞](https://debug.barn.cow.fi/order/0xfb2f8c4ab7c955cbecb2762ca8b159f5aa4374f8d50a47829c1466cb0281d0fc) |
| 10:11:21 | 79 | SKHY → SOL (native) | Executed | `0x938620f7…` [🐞](https://debug.barn.cow.fi/order/0x938620f75492261cc695716e6a061d0119e0665b5eaf6279579ba1b16818035d) |
| 10:11:24 | 70 | ANSEM → SOL (native) | Executed | `0x80394977…` [🐞](https://debug.barn.cow.fi/order/0x803949773604d7c41fffe8007f21446bc8a6909d36799bbb696a958d18e4d0da) |
| 10:11:41 | 80 | NVDAx → SOL (native) | Executed | `0xbaddb53e…` [🐞](https://debug.barn.cow.fi/order/0xbaddb53e203188a7a8c03cd9d899fb323ac8175265699a3f0593861592fef817) |
| 10:11:43 | 81 | MU → SOL (native) | Executed | `0x586e3f53…` [🐞](https://debug.barn.cow.fi/order/0x586e3f5376fa05af5ec983ee1edf5588de45da56ff0be1c14919a836d2e71f56) |
| 10:11:44 | 82 | SPCX → SOL (native) | Executed | `0x3abb8936…` [🐞](https://debug.barn.cow.fi/order/0x3abb893677a018315339ab007abf59943a2af77a9d8146702c5f79dff2e57406) |
| 10:11:46 | 83 | SPCXx → SOL (native) | Executed | `0xce2fefe7…` [🐞](https://debug.barn.cow.fi/order/0xce2fefe7a36156aa17ae58ea8c48574f274ec2ec30fe192df51d765c86fc4678) |
| 10:11:50 | 84 | TSLAx → SOL (native) | Executed | `0xab06b6c6…` [🐞](https://debug.barn.cow.fi/order/0xab06b6c654ff98ebbb2cd8b014e637c0a06341f1fa5dcc9bf51968a6449073db) |
| 10:11:52 | 85 | Bonk → SOL (native) | Executed | `0x261684c6…` [🐞](https://debug.barn.cow.fi/order/0x261684c6edd72734412bca3cdddfdc0187fdb00c9006835416c61f65db716442) |
| 10:11:55 | 86 | $WIF → SOL (native) | Executed | `0x4e74b266…` [🐞](https://debug.barn.cow.fi/order/0x4e74b266512d4f4a7dba1641bb48e020fac5ecce9c6a1a337f9c33d2fc91c90a) |
| 10:11:55 | 87 | POPCAT → SOL (native) | Executed | `0x66f8c848…` [🐞](https://debug.barn.cow.fi/order/0x66f8c848125fcdf70d66c8ffd5589943535d971f3110e9a8eadb84daefd74a66) |
| 10:12:01 | 88 | JitoSOL → SOL (native) | Executed | `0xa60104f6…` [🐞](https://debug.barn.cow.fi/order/0xa60104f68779ae07ae73d453e5245e9052c97b3ff072e0ac3f67fb9861be7f30) |
| 10:12:08 | 89 | mSOL → SOL (native) | Executed | `0xba9155dd…` [🐞](https://debug.barn.cow.fi/order/0xba9155dd0fda16854cd236db359a3679c7a8caed607fb1639f1446fd5380ce73) |
| 10:12:49 | 101 | EUROP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x42d6dda7…` [🐞](https://debug.barn.cow.fi/order/0x42d6dda797c7212290156989d17852495c8c792e6528b69686f31ce3ce120628) |
| 10:12:49 | 105 | hyloSOL → SOL (native) | Executed | `0x2747e4d7…` [🐞](https://debug.barn.cow.fi/order/0x2747e4d7d93b2348d7dd293a2dd1c3fcd7b783f3e1e1caeb05d77a2de5259b02) |
| 10:12:57 | 106 | PSOL → SOL (native) | Executed | `0xd20851c1…` [🐞](https://debug.barn.cow.fi/order/0xd20851c1a14d9c403acd991beb19dfdf58803cd87c8e3a9460a373298e933965) |
| 10:14:38 | 107 | USDC → SOL (native) | Executed | `0x660c1b57…` [🐞](https://debug.barn.cow.fi/order/0x660c1b574b29d6f175c24d91f393bcba85a0d0adf9934cf067ec5afa17e6ccd5) |
| 10:14:40 | 108 | USDC → SOL (native) | Executed | `0x4cabd2e4…` [🐞](https://debug.barn.cow.fi/order/0x4cabd2e4256d5e33dd6694c8c14fa1f573bce38c704c3d435c5316255dbd8b32) |
| 10:14:41 | 109 | USDC → SOL (native) | Executed | `0x5a8afd61…` [🐞](https://debug.barn.cow.fi/order/0x5a8afd610398fb62fe9551969c26b30151a09ece48ccc5eeeb79839adffae672) |
| 10:14:42 | 110 | USDC → SOL (native) | Executed | `0x41a82c80…` [🐞](https://debug.barn.cow.fi/order/0x41a82c80d4a899086edc1cc16d392f9507065708ed6f4b98f8cc2e9d45e2f65e) |
| 10:14:42 | 111 | USDT → SOL (native) | Executed | `0xd841c174…` [🐞](https://debug.barn.cow.fi/order/0xd841c174f5508da75bba72d2ecd5f9bf88be92b6122c286950bd97dd00c8b079) |
| 10:14:43 | 112 | USDT → SOL (native) | Executed | `0x943e2739…` [🐞](https://debug.barn.cow.fi/order/0x943e273928f9939319226bf5406e55b6f62e54892aaf0ee30cf40f0629a8ea20) |
| 10:14:45 | 113 | USDT → SOL (native) | Executed | `0xe52b1624…` [🐞](https://debug.barn.cow.fi/order/0xe52b162426b2be9e184dc167d9ff2ee790850958e0d99c1e760f87786da7a602) |
| 10:14:46 | 114 | USDT → SOL (native) | Executed | `0x5ec12fb5…` [🐞](https://debug.barn.cow.fi/order/0x5ec12fb540653386a32f2ebc19b75e2c08b6576a029454102f1388e09c66ed9e) |
| 10:20:04 | 66 | USDC → SOL (native) | Executed | `0xc3031d24…` [🐞](https://debug.barn.cow.fi/order/0xc3031d24b1b70ead4236d81256b34275838a16bba90a75b6566f3f771aea203c) |
| 10:20:04 | 66 | USDT → SOL (native) | Executed | `0x474a04cb…` [🐞](https://debug.barn.cow.fi/order/0x474a04cbed7867f83fbfc7b2df6da57b2517f0f60b9b2b9c9d044d8456eec92a) |
| 10:20:40 | 90 | JupSOL → SOL (native) | Executed | `0x06e716b6…` [🐞](https://debug.barn.cow.fi/order/0x06e716b60355c89044238029a8325eb04947af53484533b7f08ef1ef3c0d8cd0) |
| 10:20:42 | 91 | cbBTC → SOL (native) | Executed | `0x5b758643…` [🐞](https://debug.barn.cow.fi/order/0x5b7586435205a800d2bb0d1c56bcb2012d1e8bc4549adc04c37244f71eb34f92) |
| 10:20:42 | 92 | USDe → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x171e75aa…` [🐞](https://debug.barn.cow.fi/order/0x171e75aad1818d58c9bfae31fa434b1eafa20e8521a4f8fd24bfdc199b73969a) |
| 10:20:45 | 94 | USDY → SOL (native) | Executed | `0x6d45da0b…` [🐞](https://debug.barn.cow.fi/order/0x6d45da0b482cd9300c4cf100a23eab262a1bed3983474d01191e07d7c2b44f07) |
| 10:20:45 | 93 | EURC → SOL (native) | Executed | `0x43466247…` [🐞](https://debug.barn.cow.fi/order/0x43466247f6ff43f1eb793c3b716acd87acd72eca3185654269906d216e0162e7) |
| 10:20:46 | 95 | JLP → SOL (native) | Executed | `0x41b39aa1…` [🐞](https://debug.barn.cow.fi/order/0x41b39aa1b6c4262046cbbf0fa36274b793e124c5e48c07c25baf80abbb2a9097) |
| 10:20:47 | 98 | BNB → SOL (native) | Executed | `0x6ba0b52a…` [🐞](https://debug.barn.cow.fi/order/0x6ba0b52a0c8f5ad783fac860d67ae18101c73dd206846d519675c82acf56cdba) |
| 10:20:49 | 96 | INF → SOL (native) | Executed | `0x12bd2f96…` [🐞](https://debug.barn.cow.fi/order/0x12bd2f96cadcfce60afe0ad10063541298a75a3bdfe5190e31e34c33ab6dadcb) |
| 10:20:50 | 97 | ETH → SOL (native) | Executed | `0x6a4e177c…` [🐞](https://debug.barn.cow.fi/order/0x6a4e177c61dc1aa361df3f22506f0e156d0480e77b50bfa750e299153d59a219) |
| 10:20:59 | 100 | GLDx → SOL (native) | Executed | `0x5bfee1bb…` [🐞](https://debug.barn.cow.fi/order/0x5bfee1bbcfa51d446d057f8aaccbc010bfda8edce5745980a0888be26ef26b6f) |
| 10:21:16 | 101 | EUROP → SOL (native) | Executed | `0xebe12b6a…` [🐞](https://debug.barn.cow.fi/order/0xebe12b6a66d1d4a2c378b9bcbb405418f574478563b7711a60055e74f29709ec) |
| 10:21:22 | 102 | Fartcoin → SOL (native) | Executed | `0xce7042d5…` [🐞](https://debug.barn.cow.fi/order/0xce7042d5773e3cefa35ecc63052208241a8a1ddad445804cbd7ca9751d95fd13) |
| 10:21:26 | 104 | BOME → SOL (native) | Executed | `0x1fa63461…` [🐞](https://debug.barn.cow.fi/order/0x1fa634617006224acfcaf5f67e931fa8ee7ca639519eca2e987df7be659623fd) |
| 10:21:29 | 103 | MEW → SOL (native) | Executed | `0xe0e21efd…` [🐞](https://debug.barn.cow.fi/order/0xe0e21efdb911353afbf97b9408946d5c959187f57a6b3e3a8062533e5a2cc312) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 190 | 99.0% |
| cancelled | 1 | 0.5% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 0.5% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 6s | 9s | 17s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| GCBB…o5VC | 190 | 100.0% | 91 | 110,691 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| asao | 390 | 168 | 164 | 97.6% | 3 | 0 | 4 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| asao: SimulationFailed | 2 |
| asao: FailedToCreate | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `in_flight`: 1 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 164 | 163 | 99.4% |
| market buy | 28 | 27 | 96.4% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 96 | 96 | 100.0% |
| wSOL → JUP | 28 | 28 | 100.0% |
| wSOL → USDT | 8 | 8 | 100.0% |
| JUP → USDC | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → PAID | 2 | 2 | 100.0% |
| wSOL → PYUSD | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 2 | 100.0% |
| wSOL → CRCLx | 2 | 2 | 100.0% |
| wSOL → USDv | 2 | 2 | 100.0% |
| wSOL → SKHY | 2 | 1 | 50.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → SPCX | 2 | 2 | 100.0% |
| wSOL → SPCXx | 2 | 2 | 100.0% |
| wSOL → TSLAx | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
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
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 5 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 5 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 5 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 5 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 4 | 4 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 4 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 4 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 4 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 4 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 3 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
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
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 2 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 2 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 2 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 2 | 2 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 2 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 2 | 2 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 2 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 2 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 2 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 2 | 2 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 2 | 1 | 50.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 2 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 2 | 2 | 100.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 2 | 2 | 100.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 2 | 2 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 2 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 2 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
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
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
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
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 0 | 0.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 1 | 100.0% |
| `52CfB35yd7jyGA6U2198WmCDVV8wi3Xg48S4MgMDvKR1` | 1 | 1 | 100.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 1 | 1 | 100.0% |
| `FCMwP3inMPkh6iUYYee8F9kHE8BtMUPCTAJ6ifPfo7Vy` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 1 | 0 |
| Creation tx rejected: blockhash not found | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 10:10:01 | wSOL → XAUt0 | market sell | Not filled within fill timeout (cancelled by sim) | `0xb09fbe7e…` [🐞](https://debug.barn.cow.fi/order/0xb09fbe7ed1b2847586ba3dadcea285342e8d236dd24de2d6ef4f91ec7903ca4e) |
| 10:10:06 | wSOL → SKHY | market buy | Creation tx rejected: blockhash not found | `0x9a1f23df…` [🐞](https://debug.barn.cow.fi/order/0x9a1f23df9f5e42ca6541009ad7ba452ce0fae4fc8c3654415367ba7ed6465a18) |
