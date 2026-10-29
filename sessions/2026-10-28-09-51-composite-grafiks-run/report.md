# Solana QoS report: 2026-10-28-09-51-composite-grafiks-run

Barn, orders created between `2026-10-28T09:52:02.397Z` and `2026-10-28T10:16:30.788Z`. Data fetched 2026-10-28T10:21:08+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 182 |
| Orders executed | **181** (99.5%) |
| Sponsored orders never created on-chain | 1 (0.5%) |
| Traders | 108 |
| Settlement txs | 82 |

## Scenario results

Target solver: `grafiks`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-same-direction-25 | 2026-10-28T09:52:02.397Z | 2026-10-28T09:52:38.294Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-28T09:55:54.949Z | 2026-10-28T10:02:18.294Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-cow | 2026-10-28T10:05:19.923Z | 2026-10-28T10:08:13.819Z | 14/15 | 1 | 16 | 15 | 93.3% |
| solver-token-coverage | 2026-10-28T10:09:24.637Z | 2026-10-28T10:10:24.766Z | 50/52 | 2 | 50 | 50 | 96.2% |
| solver-transaction-size | 2026-10-28T10:13:11.290Z | 2026-10-28T10:14:51.061Z | 7/10 | 3 | 7 | 7 | 70.0% |

## Scenario

180 of 186 scenario rows completed. 0 retries, 5 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 09:52:02 | 1 | 1 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 09:52:02 | 2 | 2 | sell 0.005 SOL → JUP | filled | 27s | 1 |  |
| 09:52:02 | 3 | 3 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 09:52:02 | 4 | 4 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 09:52:02 | 5 | 5 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 09:52:02 | 6 | 6 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 09:52:03 | 7 | 7 | sell 0.005 SOL → JUP | filled | 22s | 1 |  |
| 09:52:03 | 8 | 8 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 09:52:03 | 9 | 9 | sell 0.005 SOL → JUP | filled | 28s | 1 |  |
| 09:52:03 | 10 | 10 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 09:52:03 | 11 | 11 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 09:52:03 | 12 | 12 | sell 0.005 SOL → JUP | filled | 35s | 1 |  |
| 09:52:03 | 13 | 13 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 09:52:03 | 14 | 14 | sell 0.005 SOL → JUP | filled | 26s | 1 |  |
| 09:52:03 | 15 | 15 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 09:52:04 | 16 | 16 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 09:52:04 | 17 | 17 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 09:52:04 | 18 | 18 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 09:52:04 | 19 | 19 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 09:52:04 | 20 | 20 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 09:52:04 | 21 | 21 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 09:52:04 | 22 | 22 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 09:52:04 | 23 | 23 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 09:52:04 | 24 | 24 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 09:52:04 | 25 | 25 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 09:55:55 | 26 | 26 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 09:55:55 | 27 | 27 | sell 0.003 SOL → USDC | filled | 6s | 1 |  |
| 09:55:55 | 28 | 28 | sell 0.0035 SOL → USDC | filled | 6s | 1 |  |
| 09:55:55 | 29 | 29 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 09:57:24 | 30 | 26 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 09:57:24 | 31 | 27 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 09:57:24 | 32 | 28 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 09:57:24 | 33 | 29 | sell 0.004 SOL → USDC | filled | 8s | 1 |  |
| 09:57:24 | 34 | 30 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 09:57:24 | 35 | 31 | sell 0.003 SOL → USDC | filled | 8s | 1 |  |
| 09:57:24 | 36 | 32 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 09:57:24 | 37 | 33 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 09:58:54 | 38 | 26 | sell 0.0025 SOL → USDC | filled | 7s | 1 |  |
| 09:58:54 | 39 | 27 | sell 0.003 SOL → USDC | filled | 8s | 1 |  |
| 09:58:54 | 40 | 28 | sell 0.0035 SOL → USDC | filled | 8s | 1 |  |
| 09:58:54 | 41 | 29 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 09:58:54 | 42 | 30 | sell 0.0025 SOL → USDC | filled | 7s | 1 |  |
| 09:58:54 | 43 | 31 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 09:58:54 | 44 | 32 | sell 0.0035 SOL → USDC | filled | 7s | 1 |  |
| 09:58:54 | 45 | 33 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 09:58:54 | 46 | 34 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 09:58:54 | 47 | 35 | sell 0.003 SOL → USDC | filled | 12s | 1 |  |
| 09:58:54 | 48 | 36 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 09:58:54 | 49 | 37 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 09:58:54 | 50 | 38 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 09:58:54 | 51 | 39 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 09:58:54 | 52 | 40 | sell 0.0035 SOL → USDC | filled | 13s | 1 |  |
| 09:58:54 | 53 | 41 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 10:00:24 | 54 | 26 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 10:00:24 | 55 | 27 | sell 0.003 SOL → USDC | filled | 14s | 1 |  |
| 10:00:24 | 56 | 28 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 10:00:24 | 57 | 29 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 10:00:24 | 58 | 30 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 10:00:24 | 59 | 31 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 10:00:24 | 60 | 32 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 10:00:24 | 61 | 33 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 10:00:24 | 62 | 34 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 10:00:24 | 63 | 35 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 10:00:24 | 64 | 36 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 10:00:24 | 65 | 37 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 10:00:24 | 66 | 38 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 10:00:24 | 67 | 39 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 10:00:24 | 68 | 40 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 10:00:24 | 69 | 41 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:00:24 | 70 | 42 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 10:00:24 | 71 | 43 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 10:00:24 | 72 | 44 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 10:00:24 | 73 | 45 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:00:24 | 74 | 46 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 10:00:24 | 75 | 47 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 10:00:24 | 76 | 48 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 10:00:24 | 77 | 49 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 10:01:54 | 78 | 26 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 10:01:54 | 79 | 27 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 10:01:54 | 80 | 28 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 10:01:54 | 81 | 29 | sell 0.004 SOL → USDC | filled | 23s | 1 |  |
| 10:01:54 | 82 | 30 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 10:01:54 | 83 | 31 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 10:01:54 | 84 | 32 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 10:01:54 | 85 | 33 | sell 0.004 SOL → USDC | filled | 23s | 1 |  |
| 10:01:54 | 86 | 34 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 10:01:54 | 87 | 35 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 10:01:54 | 88 | 36 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 10:01:54 | 89 | 37 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 10:01:54 | 90 | 38 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 10:01:54 | 91 | 39 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 10:01:54 | 92 | 40 | sell 0.0035 SOL → USDC | filled | 14s | 1 |  |
| 10:01:54 | 93 | 41 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 10:01:54 | 94 | 42 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 10:01:54 | 95 | 43 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 10:01:54 | 96 | 44 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 10:01:54 | 97 | 45 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 10:01:54 | 98 | 46 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 10:01:54 | 99 | 47 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 10:01:54 | 100 | 48 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 10:01:54 | 101 | 49 | sell 0.004 SOL → USDC | filled | 23s | 1 |  |
| 10:01:54 | 102 | 50 | sell 0.0025 SOL → USDC | filled | 20s | 1 |  |
| 10:01:54 | 103 | 51 | sell 0.003 SOL → USDC | filled | 20s | 1 |  |
| 10:01:54 | 104 | 52 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 10:01:54 | 105 | 53 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 10:01:54 | 106 | 54 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 10:01:54 | 107 | 55 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 10:01:54 | 108 | 56 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 10:01:54 | 109 | 57 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 10:05:19 | 110 | 59 | buy 2.6 USDC ← SOL | filled | 27s | 1 |  |
| 10:05:19 | 111 | 61 | buy 1.3 USDC ← SOL | failed | 37s | 1 | main expired |
| 10:05:19 | 112 | 62 | buy 3.1 USDC ← SOL | filled | 16s | 1 |  |
| 10:05:20 | 113 | 63 | buy 3.1 USDT ← SOL | filled | 9s | 1 |  |
| 10:05:20 | 114 | 64 | buy 1.1 USDT ← SOL | filled | 15s | 1 |  |
| 10:05:19 | 115 | 65 | buy 3.2 USDC ← SOL | filled | 9s | 1 |  |
| 10:07:49 | 116 | 58 | sell 0.02 SOL → USDC | filled | 14s | 1 |  |
| 10:07:49 | 117 | 59 | buy 0.02 SOL ← USDC | filled | 9s | 1 |  |
| 10:07:49 | 118 | 60 | sell 0.03 SOL → USDC | filled | 11s | 1 |  |
| 10:07:49 | 119 | 61 | sell 1.2 USDC → SOL | filled | 24s | 2 |  |
| 10:07:49 | 120 | 62 | sell 3 USDC → USDT | filled | 15s | 1 |  |
| 10:07:49 | 121 | 63 | sell 3 USDT → USDC | filled | 11s | 1 |  |
| 10:07:49 | 122 | 64 | sell 1 USDT → USDC | filled | 8s | 1 |  |
| 10:07:49 | 123 | 65 | sell 3 USDC → USDT | filled | 11s | 1 |  |
| 10:07:49 | 124 | 66 | sell 0.02 SOL → JUP | filled | 11s | 1 |  |
| 10:09:24 | 125 | 67 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 14s | 1 |  |
| 10:09:24 | 126 | 68 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 8s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 10:09:24 | 127 | 69 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 14s | 1 |  |
| 10:09:25 | 128 | 70 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:09:25 | 129 | 71 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 31s | 1 |  |
| 10:09:25 | 130 | 72 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 14s | 1 |  |
| 10:09:25 | 131 | 73 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 14s | 1 |  |
| 10:09:25 | 132 | 74 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 23s | 1 |  |
| 10:09:25 | 133 | 75 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 14s | 1 |  |
| 10:09:25 | 134 | 76 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 14s | 1 |  |
| 10:09:25 | 135 | 77 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 14s | 1 |  |
| 10:09:25 | 136 | 78 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 23s | 1 |  |
| 10:09:25 | 137 | 79 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 15s | 1 |  |
| 10:09:26 | 138 | 80 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 15s | 1 |  |
| 10:09:26 | 139 | 81 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 31s | 1 |  |
| 10:09:26 | 140 | 82 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 23s | 1 |  |
| 10:09:26 | 141 | 83 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 23s | 1 |  |
| 10:09:26 | 142 | 84 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 24s | 1 |  |
| 10:09:26 | 143 | 85 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 19s | 1 |  |
| 10:09:26 | 144 | 86 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 20s | 1 |  |
| 10:09:26 | 145 | 87 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 20s | 1 |  |
| 10:09:26 | 146 | 88 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 21s | 1 |  |
| 10:09:26 | 147 | 89 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 21s | 1 |  |
| 10:09:27 | 148 | 90 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 21s | 1 |  |
| 10:09:27 | 149 | 91 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 22s | 1 |  |
| 10:09:27 | 150 | 92 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 22s | 1 |  |
| 10:09:27 | 151 | 93 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 22s | 1 |  |
| 10:09:27 | 152 | 94 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 23s | 1 |  |
| 10:09:27 | 153 | 95 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 23s | 1 |  |
| 10:09:27 | 154 | 96 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 23s | 1 |  |
| 10:09:27 | 155 | 97 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 24s | 1 |  |
| 10:09:27 | 156 | 98 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 24s | 1 |  |
| 10:09:27 | 157 | 99 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 24s | 1 |  |
| 10:09:28 | 158 | 100 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 24s | 1 |  |
| 10:09:28 | 159 | 101 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 24s | 1 |  |
| 10:09:28 | 160 | 102 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 24s | 1 |  |
| 10:09:28 | 161 | 103 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 24s | 1 |  |
| 10:09:38 | 162 | 67 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 14s | 1 |  |
| 10:09:32 | 163 | 68 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | filled | 26s | 1 |  |
| 10:09:38 | 164 | 69 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 17s | 1 |  |
| 10:09:29 | 165 | 70 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 26s | 1 |  |
| 10:09:55 | 166 | 71 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | filled | 14s | 1 |  |
| 10:09:39 | 167 | 72 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | filled | 17s | 1 |  |
| 10:09:39 | 168 | 73 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | filled | 18s | 1 |  |
| 10:09:48 | 169 | 74 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 29s | 1 |  |
| 10:09:39 | 170 | 75 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | filled | 17s | 1 |  |
| 10:09:39 | 171 | 76 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | filled | 18s | 1 |  |
| 10:09:40 | 172 | 77 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | filled | 18s | 1 |  |
| 10:09:49 | 173 | 78 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | filled | 34s | 1 |  |
| 10:09:40 | 174 | 79 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | filled | 17s | 1 |  |
| 10:09:40 | 175 | 80 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | filled | 16s | 1 |  |
| 10:09:56 | 176 | 81 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | filled | 7s | 1 |  |
| 10:13:11 | 177 | 104 | sell 0.005 SOL → EURC | filled | 5s | 1 |  |
| 10:13:11 | 178 | 108 | sell 0.005 SOL → JLP | filled | 6s | 1 |  |
| 10:14:41 | 179 | 104 | sell 0.005 SOL → EURC | filled | 10s | 1 |  |
| 10:14:41 | 180 | 105 | sell 0.005 SOL → EURC | filled | 6s | 1 |  |
| 10:14:41 | 181 | 106 | sell 0.005 SOL → EURC | filled | 6s | 1 |  |
| 10:14:41 | 182 | 107 | sell 0.005 SOL → EURC | filled | 6s | 1 |  |
| 10:14:41 | 183 | 108 | sell 0.00125 SOL → JLP | filled | 10s | 1 |  |
| 10:14:41 | 184 | 109 | sell 0.00125 SOL → JLP | failed | 1s | 0 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 10:14:41 | 185 | 110 | sell 0.00125 SOL → JLP | failed | 1s | 0 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 10:14:41 | 186 | 111 | sell 0.00125 SOL → JLP | failed | 1s | 0 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |

### Rows without an order

5 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| SellAmountDoesNotCoverFee | main | 3 | SOL → JLP ×3 | the quoted amount does not cover the execution cost |
| BlockhashExpired | main | 1 | SOL → PAID | the transaction's blockhash is no longer valid, sign a fresh one |
| NoLiquidity | main | 1 | SOL → PUMP | no route found |

Scenario orders: 182 (181 main, 1 acquire). Cleanup placed 107 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 09:52:42 | 3 | JUP → SOL (native) | Executed | `0x9b0396c6…` [🐞](https://debug.barn.cow.fi/order/0x9b0396c6a4779053b280e21ded4a626830d4f585b21dbbbbb08c76f2259b9077) |
| 09:52:43 | 4 | JUP → SOL (native) | Executed | `0x04ef51ca…` [🐞](https://debug.barn.cow.fi/order/0x04ef51ca480f251264b1a778830b4e94efb411d525fbb0b8c65827dbbeee18c7) |
| 09:52:44 | 5 | JUP → SOL (native) | Executed | `0xe7cca299…` [🐞](https://debug.barn.cow.fi/order/0xe7cca2997e8ca5cd23952a9f7b3ee1b2cc014c39d3ce535d98c513227f396ec1) |
| 09:52:44 | 6 | JUP → SOL (native) | Executed | `0x8aab2706…` [🐞](https://debug.barn.cow.fi/order/0x8aab2706b76cbceb35088c3609591449b7d1c2f15a1b5d9a701b77d6dbe9717c) |
| 09:52:46 | 7 | JUP → SOL (native) | Executed | `0xb810a2b7…` [🐞](https://debug.barn.cow.fi/order/0xb810a2b7caa87a5738f08c6e0650714f6decbba91e37f27f4c373705e4ed71cc) |
| 09:52:47 | 8 | JUP → SOL (native) | Executed | `0x4a763de8…` [🐞](https://debug.barn.cow.fi/order/0x4a763de8283f95c97953af5e0588b14a5bbc6509a94a46389e88be4d3a1926bd) |
| 09:52:47 | 9 | JUP → SOL (native) | Executed | `0xc91932c8…` [🐞](https://debug.barn.cow.fi/order/0xc91932c82b66b24bb8e84afc72cc4d755fbadf4e8168f912d12a4c20942174a1) |
| 09:52:49 | 10 | JUP → SOL (native) | Executed | `0x3439825f…` [🐞](https://debug.barn.cow.fi/order/0x3439825f86a3540faa4f6f2b42c1fb0a2621df28b284e9a60d886d701a21ba3d) |
| 09:52:50 | 1 | JUP → SOL (native) | Executed | `0x244c4a13…` [🐞](https://debug.barn.cow.fi/order/0x244c4a13535beafc98956dbb4e2e7ddacca7b5362b7e3dfedce23209ae073fb9) |
| 09:52:52 | 2 | JUP → SOL (native) | Executed | `0x7eb7127f…` [🐞](https://debug.barn.cow.fi/order/0x7eb7127f5ce4082d088fd7109f07797c4cf1e1e12b0ee53e783a4aa5659a95e4) |
| 09:53:13 | 12 | JUP → SOL (native) | Executed | `0x3a02c27f…` [🐞](https://debug.barn.cow.fi/order/0x3a02c27fd1c2ea2dd44239e6961af9b0ce88a80fe8989356e6e20053cb0007ab) |
| 09:53:15 | 11 | JUP → SOL (native) | Executed | `0x227fad1f…` [🐞](https://debug.barn.cow.fi/order/0x227fad1f6f6b4e0ca8ff8269aa1cd455a14a91f8c86725c270ed2d98956008b7) |
| 09:53:19 | 15 | JUP → SOL (native) | Executed | `0xad4e9f6d…` [🐞](https://debug.barn.cow.fi/order/0xad4e9f6df189fb255e94ff2ebaf7b6efade5305a78ff3ba1a469c6311eb55f2f) |
| 09:53:22 | 16 | JUP → SOL (native) | Executed | `0x381ff51c…` [🐞](https://debug.barn.cow.fi/order/0x381ff51c487917607efd521a8fd10eba74af8658d27c9febd2670e11a19a16ac) |
| 09:53:22 | 13 | JUP → SOL (native) | Executed | `0x15f09f59…` [🐞](https://debug.barn.cow.fi/order/0x15f09f59b2ae218f21dac7726e6fd33800291c2f9e56564a23c709fe162e086a) |
| 09:53:23 | 17 | JUP → SOL (native) | Executed | `0xae31c5e3…` [🐞](https://debug.barn.cow.fi/order/0xae31c5e380d73153f97c57638ebcdbf7401f533e3b0e375c95c1299a69d34a4a) |
| 09:53:27 | 14 | JUP → SOL (native) | Executed | `0x8d794b84…` [🐞](https://debug.barn.cow.fi/order/0x8d794b847df443835a71009618b9b0be363759dc05835f767620a4893526eb03) |
| 09:53:27 | 19 | JUP → SOL (native) | Executed | `0xfd8bac86…` [🐞](https://debug.barn.cow.fi/order/0xfd8bac8669975ebc1e725220de1c37131341f661837c75fa69e8511603822589) |
| 09:53:27 | 20 | JUP → SOL (native) | Executed | `0x07ff7ef9…` [🐞](https://debug.barn.cow.fi/order/0x07ff7ef974e7e6bd7595e26b94015bad67cd221b58204f5a4d32b52c2d51e082) |
| 09:53:28 | 18 | JUP → SOL (native) | Executed | `0xae9b0cdc…` [🐞](https://debug.barn.cow.fi/order/0xae9b0cdc0f8de5ba6c7dc5e9f3df00058161706c4da44daf98aec1999c005059) |
| 09:53:49 | 21 | JUP → SOL (native) | Executed | `0xb3942f0f…` [🐞](https://debug.barn.cow.fi/order/0xb3942f0f424129611382bcdb433c531ea036052bac5b516eacbb5e96632950fb) |
| 09:53:56 | 23 | JUP → SOL (native) | Executed | `0x47a74608…` [🐞](https://debug.barn.cow.fi/order/0x47a746081839878f3dcb9d55e54f6f48633c1739f93c21b81a276f2c861eb006) |
| 09:54:02 | 24 | JUP → SOL (native) | Executed | `0xc484d474…` [🐞](https://debug.barn.cow.fi/order/0xc484d474ef7138829bcd48a84d6147711a54418ba047c7cd09cd2c84dfa1104c) |
| 09:54:08 | 22 | JUP → SOL (native) | Executed | `0x2239c14f…` [🐞](https://debug.barn.cow.fi/order/0x2239c14f38d122eb1a9fa693441c7311a1d6fb06c7e76e90c6e392aff43ecdda) |
| 09:55:08 | 25 | JUP → SOL (native) | Executed | `0xf4b45c84…` [🐞](https://debug.barn.cow.fi/order/0xf4b45c84ce161d488fb91418df617d6532d79134ac2451779c3486c8b2e96385) |
| 10:02:21 | 27 | USDC → SOL (native) | Executed | `0x81d05f7c…` [🐞](https://debug.barn.cow.fi/order/0x81d05f7c32d7a3b4803c499b4a5bc81652bca1ac603dd6664997322790ca3a7a) |
| 10:02:22 | 28 | USDC → SOL (native) | Executed | `0x8433f034…` [🐞](https://debug.barn.cow.fi/order/0x8433f034e50c40518d420850c666eb34e4dbdc52d9a8532f40e6ee161676b3a5) |
| 10:02:23 | 29 | USDC → SOL (native) | Executed | `0xb952efff…` [🐞](https://debug.barn.cow.fi/order/0xb952efffea51eb1f703f9fb3dd2469ed70fde18d76e3def5478b4f63e7fd0d43) |
| 10:02:24 | 30 | USDC → SOL (native) | Executed | `0xa65a3c1b…` [🐞](https://debug.barn.cow.fi/order/0xa65a3c1b7601f3fbf798830f55cf68774c9cb9f2841621695e915bb145f768c1) |
| 10:02:25 | 31 | USDC → SOL (native) | Executed | `0x199a7070…` [🐞](https://debug.barn.cow.fi/order/0x199a70701bb76e45cad187be87bcce6e27ee52ee6fe1988377cce5509a614890) |
| 10:02:26 | 32 | USDC → SOL (native) | Executed | `0x4549b108…` [🐞](https://debug.barn.cow.fi/order/0x4549b108cfadf9026ac84d29cee6311a8b1022c18bfd1e140fc9c9b055c61bf6) |
| 10:02:27 | 33 | USDC → SOL (native) | Executed | `0xcb94d8e4…` [🐞](https://debug.barn.cow.fi/order/0xcb94d8e4741b6241e0269ddc9ad6368fd165542223b003d7d576582ec25bc8ee) |
| 10:02:28 | 34 | USDC → SOL (native) | Executed | `0x0be8efb0…` [🐞](https://debug.barn.cow.fi/order/0x0be8efb044f1af392c5f1291b26fefef958e6253612da8c1fc67f1d20af14fbd) |
| 10:02:29 | 35 | USDC → SOL (native) | Executed | `0x9b54e8ed…` [🐞](https://debug.barn.cow.fi/order/0x9b54e8ed0616769df153e79a2e750d351fe3d1e6076b62d957e9acb731752cdd) |
| 10:02:31 | 26 | USDC → SOL (native) | Executed | `0x534d13b5…` [🐞](https://debug.barn.cow.fi/order/0x534d13b568b94780f83afb8a795698fed6f0fbf9cc9ba37334f940776762a8db) |
| 10:02:49 | 36 | USDC → SOL (native) | Executed | `0x7bff216a…` [🐞](https://debug.barn.cow.fi/order/0x7bff216a606a63c5b570ab18c5767a2f12875b1c64166dbd4ed93adec842a1ce) |
| 10:02:51 | 37 | USDC → SOL (native) | Executed | `0xf1d4f96f…` [🐞](https://debug.barn.cow.fi/order/0xf1d4f96f0227097343e16bd5aee930e54b04147784b8aff60e4005c2ccce726c) |
| 10:02:52 | 38 | USDC → SOL (native) | Executed | `0x54e878b2…` [🐞](https://debug.barn.cow.fi/order/0x54e878b2cd06f7b72e0ac63f1d8a21a41375e3d5951f93e148908a6d948baf91) |
| 10:02:54 | 39 | USDC → SOL (native) | Executed | `0xaedd5930…` [🐞](https://debug.barn.cow.fi/order/0xaedd59300edeea285986b30592c95864e7430a89e6659fbae47b54e215718ce6) |
| 10:02:58 | 40 | USDC → SOL (native) | Executed | `0x30505f2d…` [🐞](https://debug.barn.cow.fi/order/0x30505f2dbb89d236403eee1242db7ec40eef321a7ea2c503032a97d19476e509) |
| 10:02:59 | 41 | USDC → SOL (native) | Executed | `0x61f1a4c5…` [🐞](https://debug.barn.cow.fi/order/0x61f1a4c5925f4172e5d2149e8513174bfe8b4f353d603878913647aa47ff8f0a) |
| 10:03:01 | 42 | USDC → SOL (native) | Executed | `0xf6339223…` [🐞](https://debug.barn.cow.fi/order/0xf6339223a0f83ec10d07741e2736c0410526cdac070fbf683ee1ea1fc7ca34f5) |
| 10:03:11 | 43 | USDC → SOL (native) | Executed | `0x13187a00…` [🐞](https://debug.barn.cow.fi/order/0x13187a0009eb69659a7d8610797cf107c50d078c7fdc07255f561a25048c9ee9) |
| 10:03:19 | 44 | USDC → SOL (native) | Executed | `0xd8f77486…` [🐞](https://debug.barn.cow.fi/order/0xd8f7748648d0f772c1fc1308c14b0d70cbe969417445bb48d9117cedefe0c9b1) |
| 10:03:23 | 46 | USDC → SOL (native) | Executed | `0xa27ac3e6…` [🐞](https://debug.barn.cow.fi/order/0xa27ac3e6ace92a6bb8d93f7ffc713d822cb2cdb605698fe672c175566d513cdd) |
| 10:03:24 | 45 | USDC → SOL (native) | Executed | `0x66329245…` [🐞](https://debug.barn.cow.fi/order/0x66329245e78e6b8d5036f23c4f58216fb6629bd6abec43d6c80015306fe0a0a7) |
| 10:03:28 | 47 | USDC → SOL (native) | Executed | `0x2b001b03…` [🐞](https://debug.barn.cow.fi/order/0x2b001b03839631a8605b23798cfa827a69faaaf9a58b7e4cd54bab4a3d33cfd0) |
| 10:03:28 | 48 | USDC → SOL (native) | Executed | `0x101fdc52…` [🐞](https://debug.barn.cow.fi/order/0x101fdc5265e8787980a171b6319d21d88e6066fc7c0dc8a26498d6c909beb653) |
| 10:03:35 | 49 | USDC → SOL (native) | Executed | `0x016e3e1f…` [🐞](https://debug.barn.cow.fi/order/0x016e3e1f3179bde18dc7df866325f1c300bae75729b132c5858c286e02076c51) |
| 10:03:35 | 50 | USDC → SOL (native) | Executed | `0xa057b18a…` [🐞](https://debug.barn.cow.fi/order/0xa057b18a24e786bfcb060f877a96b9d2d9ac46113832ebd350921abcf4cd3c26) |
| 10:03:36 | 51 | USDC → SOL (native) | Executed | `0xfc09b789…` [🐞](https://debug.barn.cow.fi/order/0xfc09b789b2da045e57a851ea01af51e624513f59ad65f3427ce725282192b7f4) |
| 10:03:41 | 52 | USDC → SOL (native) | Executed | `0x3aea2d0a…` [🐞](https://debug.barn.cow.fi/order/0x3aea2d0a39f2f59924e0f70c5b4d88b942ac520451a720167fc3030a42a19f65) |
| 10:03:56 | 54 | USDC → SOL (native) | Executed | `0xd7d1b4fe…` [🐞](https://debug.barn.cow.fi/order/0xd7d1b4fe80aa7c59d2ad881cbf57b9acefd174b8c593b6b883a6ae5bbac8dea9) |
| 10:04:06 | 53 | USDC → SOL (native) | Executed | `0x7174bc87…` [🐞](https://debug.barn.cow.fi/order/0x7174bc870cdfe6cf9091a406765ca92a6a2f2421fdc94e779cece7ef7e6665ab) |
| 10:04:08 | 56 | USDC → SOL (native) | Executed | `0xa1a4c364…` [🐞](https://debug.barn.cow.fi/order/0xa1a4c364de4cba955f1827c6ff4186b2855f1facba20c0f05f79602326947e0f) |
| 10:04:08 | 55 | USDC → SOL (native) | Executed | `0x938d333e…` [🐞](https://debug.barn.cow.fi/order/0x938d333ec4a07417a64292651661fe0bcbbf09597e8f846daa9955bf40fcdf79) |
| 10:04:17 | 57 | USDC → SOL (native) | Executed | `0x9512eec3…` [🐞](https://debug.barn.cow.fi/order/0x9512eec33cd99c30f8035bb90e2d08afafbc12a9085321dc88887e764b68705b) |
| 10:08:16 | 59 | USDC → SOL (native) | Executed | `0x5934bce4…` [🐞](https://debug.barn.cow.fi/order/0x5934bce47d31f358a6216fdade8ce5e4b73012d0998f37b50b3d14a284b31ddc) |
| 10:08:18 | 60 | USDC → SOL (native) | Executed | `0xfd776d5b…` [🐞](https://debug.barn.cow.fi/order/0xfd776d5b04d1233397703ec6604d720f95f6382ef33690c5a22b9bbee8dd9bf7) |
| 10:08:18 | 61 | USDC → SOL (native) | Executed | `0x02abadff…` [🐞](https://debug.barn.cow.fi/order/0x02abadff47704d60fb653d6dde64f48d1b82c78350c7e24b84317b2718e5558c) |
| 10:08:20 | 62 | USDT → SOL (native) | Executed | `0xcaa756ab…` [🐞](https://debug.barn.cow.fi/order/0xcaa756ab169c4d153c8118c538f924467479b696b48788a4c8b6542091fe806a) |
| 10:08:21 | 63 | USDC → SOL (native) | Executed | `0x8a771e31…` [🐞](https://debug.barn.cow.fi/order/0x8a771e3106e2e50e427b23f572580f9cecbb131f261072cf379200174833bab5) |
| 10:08:22 | 64 | USDC → SOL (native) | Executed | `0x6fa80c5a…` [🐞](https://debug.barn.cow.fi/order/0x6fa80c5ac154a93cf806bbd743e270d03e92aa8440f5029a64f31e683c59ae0a) |
| 10:08:22 | 65 | USDT → SOL (native) | Executed | `0x39bcb6ff…` [🐞](https://debug.barn.cow.fi/order/0x39bcb6ff51a9129853b1700a244da5a63ede8b9d110d89d94791228b3edce8d9) |
| 10:08:23 | 65 | USDC → SOL (native) | Executed | `0x2b6f72b1…` [🐞](https://debug.barn.cow.fi/order/0x2b6f72b180b6dfc275f938c13ce6829b8e6029ee1ccbc0864254cc307e3431e7) |
| 10:08:25 | 66 | JUP → SOL (native) | Executed | `0xd2b64237…` [🐞](https://debug.barn.cow.fi/order/0xd2b64237ede37e70feb898b9108135720b3f0a4517509df38a6a2b2411bc519b) |
| 10:08:26 | 58 | USDC → SOL (native) | Executed | `0x07830cf0…` [🐞](https://debug.barn.cow.fi/order/0x07830cf07184996fe678da9c0855be0f101fa6b3d2a1e3b86ddb019a084c6a1b) |
| 10:10:27 | 69 | USDG → SOL (native) | Executed | `0x11668d65…` [🐞](https://debug.barn.cow.fi/order/0x11668d65e4e41d3956312881aa975468936523920a86976e638d41c0fa5654be) |
| 10:10:29 | 71 | PYUSD → SOL (native) | Executed | `0xa3473b31…` [🐞](https://debug.barn.cow.fi/order/0xa3473b315c70639fcbe84039b6055c09b5b07f5d13c7d1b79f242114c74d312b) |
| 10:10:30 | 72 | CASH → SOL (native) | Executed | `0x249a0dd6…` [🐞](https://debug.barn.cow.fi/order/0x249a0dd6ace8d9a1009c91d44da3580dad4f7fbed60399a3006ad42fd911f7d6) |
| 10:10:31 | 73 | CRCLx → SOL (native) | Executed | `0x26a7afb8…` [🐞](https://debug.barn.cow.fi/order/0x26a7afb8d67a848a944df29fb1258e5f5149e08130d4f0355682810d226ad959) |
| 10:10:34 | 74 | SPYx → SOL (native) | Executed | `0x3bcbbf85…` [🐞](https://debug.barn.cow.fi/order/0x3bcbbf854e9e6dc0a06d76b06ac722bd7e161f2d855e654c138f901891a03161) |
| 10:10:36 | 75 | USDv → SOL (native) | Executed | `0x0e977d04…` [🐞](https://debug.barn.cow.fi/order/0x0e977d047369d7fba792182ef8933c27b3174eb6d0bdbd6171313878d8795fab) |
| 10:10:39 | 77 | NVDAx → SOL (native) | Executed | `0x075e7122…` [🐞](https://debug.barn.cow.fi/order/0x075e7122eb11624844d8d16d96038c9d89964996c9e8832f4e6c88db45e0476b) |
| 10:10:39 | 76 | SKHY → SOL (native) | Executed | `0x19404dee…` [🐞](https://debug.barn.cow.fi/order/0x19404dee228638ce159a3a8aa876276520d8d5887744e3fd6c21a43eb02aef94) |
| 10:10:39 | 67 | ANSEM → SOL (native) | Executed | `0x1005dac2…` [🐞](https://debug.barn.cow.fi/order/0x1005dac28fb27ac5ec5539195a12494890d862d515cbe5e81b6af2430a179130) |
| 10:10:43 | 78 | MU → SOL (native) | Executed | `0xb2938c02…` [🐞](https://debug.barn.cow.fi/order/0xb2938c0213a14749e40f6fbf8ade4a08057623899ea428205c480df4e38e8453) |
| 10:10:49 | 79 | SPCX → SOL (native) | Executed | `0xa32e56f7…` [🐞](https://debug.barn.cow.fi/order/0xa32e56f7bb85601057ed8fc2dc3dc746ecdeb30f775f9dda304c5a5d9358f15c) |
| 10:10:57 | 80 | SPCXx → SOL (native) | Executed | `0x6c6651b9…` [🐞](https://debug.barn.cow.fi/order/0x6c6651b9d66663563d4b289453be63f4be9ddf0870e2d60e1f47202ec286e349) |
| 10:11:05 | 81 | TSLAx → SOL (native) | Executed | `0x1a61409e…` [🐞](https://debug.barn.cow.fi/order/0x1a61409e1f4e513eef761b997190d9ab29c1681792a5427a6b706b067adf3092) |
| 10:11:07 | 82 | Bonk → SOL (native) | Executed | `0x63d1fe68…` [🐞](https://debug.barn.cow.fi/order/0x63d1fe680da15ab65ac3d2088a76919e096a02bb5e72583a1e4d785e8bf2b90b) |
| 10:11:11 | 83 | $WIF → SOL (native) | Executed | `0x1657291d…` [🐞](https://debug.barn.cow.fi/order/0x1657291d3fdac9aeb1ade0853b676a600c22bc63a9d6d0f385e09c6f862943e2) |
| 10:11:12 | 84 | POPCAT → SOL (native) | Executed | `0xad962605…` [🐞](https://debug.barn.cow.fi/order/0xad9626051975b9e1d68d8226780cb02ced177360623ab05a685b1dc65bd9cdd4) |
| 10:11:15 | 86 | mSOL → SOL (native) | Executed | `0x484ddab2…` [🐞](https://debug.barn.cow.fi/order/0x484ddab2f5bf0f3dbd60b96a3872a4d7762eb3cfde87bee651f8494369064b67) |
| 10:11:16 | 85 | JitoSOL → SOL (native) | Executed | `0x6dd02215…` [🐞](https://debug.barn.cow.fi/order/0x6dd02215dbca90a7036749f85c5cf43c44d1ddef1d5fa47eecb984c7fbdd4f18) |
| 10:11:22 | 87 | JupSOL → SOL (native) | Executed | `0xcd426d32…` [🐞](https://debug.barn.cow.fi/order/0xcd426d3266e455766bede7d9111d5e7efb40347ea2404638b0f7000cc3f41f60) |
| 10:11:24 | 88 | cbBTC → SOL (native) | Executed | `0x9c26e674…` [🐞](https://debug.barn.cow.fi/order/0x9c26e674c6191b92e36b2533bb8044204d2f49a2e3e6ca276a70c7dc48944c35) |
| 10:11:35 | 89 | USDe → SOL (native) | Executed | `0x03e61c7a…` [🐞](https://debug.barn.cow.fi/order/0x03e61c7a65f4d153c6ca0dde2dc14b8e247489bea17a56ae11637b3e5dfbb116) |
| 10:11:37 | 90 | EURC → SOL (native) | Executed | `0x8818f89b…` [🐞](https://debug.barn.cow.fi/order/0x8818f89b6d855faeb7919da526346b0e555ce6dddfaff6caef67a78d9a7604c5) |
| 10:11:48 | 91 | USDY → SOL (native) | Executed | `0xb9c971ce…` [🐞](https://debug.barn.cow.fi/order/0xb9c971ce3804aabf9c83d7012aefeb998d56e339931a9d62916b0a8029889e33) |
| 10:11:54 | 92 | JLP → SOL (native) | Executed | `0x641b4ef2…` [🐞](https://debug.barn.cow.fi/order/0x641b4ef278c6200d6ba89458708089502af3b6afd16a4d8967e6a7730c819739) |
| 10:12:02 | 96 | XAUt0 → SOL (native) | Executed | `0x3f3fd6a0…` [🐞](https://debug.barn.cow.fi/order/0x3f3fd6a0ceae35e831da4efbeafa3b3e7bb206be86d4968a4121a15bd16b393a) |
| 10:12:02 | 93 | INF → SOL (native) | Executed | `0x960dc310…` [🐞](https://debug.barn.cow.fi/order/0x960dc310de0ef74f8d9284dafe1a3aa803905b5d63e9dbab9d040c3ad6e122bf) |
| 10:12:02 | 95 | BNB → SOL (native) | Executed | `0x6ee2d766…` [🐞](https://debug.barn.cow.fi/order/0x6ee2d766ed7987846667b86b9993e3a63101d86cb0107aa21322cadd7de2c844) |
| 10:12:11 | 94 | ETH → SOL (native) | Executed | `0x9b2fcf35…` [🐞](https://debug.barn.cow.fi/order/0x9b2fcf352618f49ca114270e0891518973ef56aba7dc3e938e6728785773c641) |
| 10:12:12 | 98 | EUROP → SOL (native) | Executed | `0xd585bb7a…` [🐞](https://debug.barn.cow.fi/order/0xd585bb7a777f8461b81eceae24ac347b06c2ca238f1f5c33aeb81ae96b4102dc) |
| 10:12:12 | 99 | Fartcoin → SOL (native) | Executed | `0x29bc8f40…` [🐞](https://debug.barn.cow.fi/order/0x29bc8f402ba80cd56f4732f58e78513600d99b590e11ff5eb75fbe7f4d5719f5) |
| 10:12:21 | 97 | GLDx → SOL (native) | Executed | `0xa9d8c1b8…` [🐞](https://debug.barn.cow.fi/order/0xa9d8c1b8a1463bbdd22abe288efa9fdc88c6f15f572981d29b0a2a6f865e0d16) |
| 10:12:23 | 100 | MEW → SOL (native) | Executed | `0xd0c9f18c…` [🐞](https://debug.barn.cow.fi/order/0xd0c9f18c7cad614a3b25d5cd01058c506cd75b9488a108822006e6011cc9fcbb) |
| 10:12:37 | 102 | hyloSOL → SOL (native) | Executed | `0x5d77174b…` [🐞](https://debug.barn.cow.fi/order/0x5d77174b22d7950c1878c8f56622aaf08b8f7ee86963e34f7f733b04f5c9bb21) |
| 10:12:39 | 103 | PSOL → SOL (native) | Executed | `0x413fe5b5…` [🐞](https://debug.barn.cow.fi/order/0x413fe5b517ad54d1306891c17dcc100a0a79d8768ca88a5ee71639c1041e3757) |
| 10:12:43 | 101 | BOME → SOL (native) | Executed | `0xde03debb…` [🐞](https://debug.barn.cow.fi/order/0xde03debb129ab7b4b6ba675b427a346578d87724fbc82e5db4d77becb408f5d0) |
| 10:14:53 | 105 | EURC → SOL (native) | Executed | `0x8666f85f…` [🐞](https://debug.barn.cow.fi/order/0x8666f85f471b07fc44e777124d30858d89b9c6d8768dda017439c7221cd44188) |
| 10:14:55 | 106 | EURC → SOL (native) | Executed | `0xa038e9f9…` [🐞](https://debug.barn.cow.fi/order/0xa038e9f99729a0123351bc3204f5f7cfd3c21aa1652b9b17c7b88478197f3f71) |
| 10:14:56 | 107 | EURC → SOL (native) | Executed | `0xa294b6ca…` [🐞](https://debug.barn.cow.fi/order/0xa294b6ca085fc650f50142fd82a1db0e89c15f8f4bf8278ad22c731d1a002811) |
| 10:14:57 | 108 | JLP → SOL (native) | Executed | `0x0624d199…` [🐞](https://debug.barn.cow.fi/order/0x0624d19973f51277230e81c9d303442fbabd340accad7efaa25f03276e7783a0) |
| 10:15:00 | 104 | EURC → SOL (native) | Executed | `0xb0df7f0f…` [🐞](https://debug.barn.cow.fi/order/0xb0df7f0f09f0411a8b34773ac2adfa6a3dca4ace121428601faf9826b9844a4d) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 181 | 99.5% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 0.5% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 10s | 13s | 24s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| AuwL…YzVj | 181 | 100.0% | 82 | 149,205 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| grafiks | 385 | 155 | 152 | 98.1% | 1 | 0 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `in_flight`: 5 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 160 | 160 | 100.0% |
| market buy | 22 | 21 | 95.5% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 91 | 90 | 98.9% |
| wSOL → JUP | 26 | 26 | 100.0% |
| wSOL → EURC | 6 | 6 | 100.0% |
| wSOL → JLP | 3 | 3 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| USDT → USDC | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 2 | 100.0% |
| wSOL → PYUSD | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 2 | 100.0% |
| wSOL → CRCLx | 2 | 2 | 100.0% |
| wSOL → USDv | 2 | 2 | 100.0% |
| wSOL → SKHY | 2 | 2 | 100.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → SPCX | 2 | 2 | 100.0% |
| wSOL → SPCXx | 2 | 2 | 100.0% |
| wSOL → TSLAx | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |

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
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 3 | 3 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 3 | 3 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 3 | 3 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 3 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 3 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 3 | 2 | 66.7% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 2 | 2 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 2 | 2 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 2 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 2 | 2 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 2 | 2 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 2 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 2 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 2 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 2 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 2 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 2 | 2 | 100.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 2 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 2 | 2 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 2 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 2 | 2 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 2 | 2 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 1 | 1 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 1 | 1 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 1 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 1 | 1 | 100.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 1 | 1 | 100.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 1 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 10:05:21 | wSOL → USDC | market buy | Winner too late: creation blockhash expired | `0x673230aa…` [🐞](https://debug.barn.cow.fi/order/0x673230aa30d31f111fe8cf6da2565dc3dae4c4fdfc6fcf8cffe815a2e597bfce) |
