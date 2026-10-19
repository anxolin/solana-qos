# Solana QoS report: 2026-10-17-08-53-composite-grafiks-run

Barn, orders created between `2026-10-17T08:54:44.177Z` and `2026-10-17T09:28:09.855Z`. Data fetched 2026-10-17T09:34:42+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 190 |
| Orders executed | **190** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 119 |
| Settlement txs | 101 |

## Scenario results

Target solver: `grafiks`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-same-direction-25 | 2026-10-17T08:54:44.177Z | 2026-10-17T08:55:18.570Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-17T08:57:33.757Z | 2026-10-17T09:04:24.894Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-cow | 2026-10-17T09:07:22.385Z | 2026-10-17T09:10:44.573Z | 15/15 | 0 | 15 | 15 | 100.0% |
| solver-token-coverage | 2026-10-17T09:11:59.849Z | 2026-10-17T09:12:36.464Z | 48/55 | 7 | 48 | 48 | 87.3% |
| solver-transaction-size | 2026-10-17T09:15:37.326Z | 2026-10-17T09:17:17.723Z | 10/10 | 0 | 10 | 10 | 100.0% |
| solver-fresh-accounts | 2026-10-17T09:18:48.086Z | 2026-10-17T09:19:12.161Z | 8/8 | 0 | 8 | 8 | 100.0% |

## Scenario

190 of 197 scenario rows completed. 0 retries, 6 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 08:54:44 | 1 | 1 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 08:54:44 | 2 | 2 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 08:54:44 | 3 | 3 | sell 0.005 SOL → JUP | filled | 27s | 1 |  |
| 08:54:44 | 4 | 4 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 08:54:44 | 5 | 5 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 08:54:44 | 6 | 6 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 08:54:44 | 7 | 7 | sell 0.005 SOL → JUP | filled | 26s | 1 |  |
| 08:54:44 | 8 | 8 | sell 0.005 SOL → JUP | filled | 34s | 1 |  |
| 08:54:44 | 9 | 9 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 08:54:44 | 10 | 10 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 08:54:44 | 11 | 11 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 08:54:44 | 12 | 12 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 08:54:44 | 13 | 13 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 08:54:44 | 14 | 14 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 08:54:44 | 15 | 15 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 08:54:44 | 16 | 16 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 08:54:44 | 17 | 17 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 08:54:44 | 18 | 18 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 08:54:44 | 19 | 19 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 08:54:44 | 20 | 20 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 08:54:44 | 21 | 21 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 08:54:44 | 22 | 22 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 08:54:44 | 23 | 23 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 08:54:44 | 24 | 24 | sell 0.005 SOL → JUP | filled | 26s | 1 |  |
| 08:54:44 | 25 | 25 | sell 0.005 SOL → JUP | filled | 28s | 1 |  |
| 08:57:33 | 26 | 26 | sell 0.0025 SOL → USDC | filled | 11s | 1 |  |
| 08:57:33 | 27 | 27 | sell 0.003 SOL → USDC | filled | 12s | 1 |  |
| 08:57:33 | 28 | 28 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 08:57:33 | 29 | 29 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 08:59:03 | 30 | 26 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 08:59:03 | 31 | 27 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 08:59:03 | 32 | 28 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 08:59:03 | 33 | 29 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 08:59:03 | 34 | 30 | sell 0.0025 SOL → USDC | filled | 10s | 1 |  |
| 08:59:03 | 35 | 31 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 08:59:03 | 36 | 32 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 08:59:03 | 37 | 33 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:00:33 | 38 | 26 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 09:00:33 | 39 | 27 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 09:00:33 | 40 | 28 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 09:00:33 | 41 | 29 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 09:00:33 | 42 | 30 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 09:00:33 | 43 | 31 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 09:00:33 | 44 | 32 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 09:00:33 | 45 | 33 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:00:33 | 46 | 34 | sell 0.0025 SOL → USDC | filled | 7s | 1 |  |
| 09:00:33 | 47 | 35 | sell 0.003 SOL → USDC | filled | 8s | 1 |  |
| 09:00:33 | 48 | 36 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 09:00:33 | 49 | 37 | sell 0.004 SOL → USDC | filled | 8s | 1 |  |
| 09:00:33 | 50 | 38 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 09:00:33 | 51 | 39 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 09:00:33 | 52 | 40 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 09:00:33 | 53 | 41 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 09:02:03 | 54 | 26 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 09:02:03 | 55 | 27 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 09:02:03 | 56 | 28 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 09:02:03 | 57 | 29 | sell 0.004 SOL → USDC | filled | 31s | 1 |  |
| 09:02:03 | 58 | 30 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 09:02:03 | 59 | 31 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 09:02:03 | 60 | 32 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 09:02:03 | 61 | 33 | sell 0.004 SOL → USDC | filled | 38s | 1 |  |
| 09:02:03 | 62 | 34 | sell 0.0025 SOL → USDC | filled | 19s | 1 |  |
| 09:02:03 | 63 | 35 | sell 0.003 SOL → USDC | filled | 5s | 1 |  |
| 09:02:03 | 64 | 36 | sell 0.0035 SOL → USDC | filled | 32s | 1 |  |
| 09:02:03 | 65 | 37 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 09:02:03 | 66 | 38 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 09:02:03 | 67 | 39 | sell 0.003 SOL → USDC | filled | 29s | 1 |  |
| 09:02:03 | 68 | 40 | sell 0.0035 SOL → USDC | filled | 38s | 1 |  |
| 09:02:03 | 69 | 41 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 09:02:03 | 70 | 42 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 09:02:03 | 71 | 43 | sell 0.003 SOL → USDC | filled | 35s | 1 |  |
| 09:02:03 | 72 | 44 | sell 0.0035 SOL → USDC | filled | 36s | 1 |  |
| 09:02:03 | 73 | 45 | sell 0.004 SOL → USDC | filled | 23s | 1 |  |
| 09:02:03 | 74 | 46 | sell 0.0025 SOL → USDC | filled | 33s | 1 |  |
| 09:02:03 | 75 | 47 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 09:02:03 | 76 | 48 | sell 0.0035 SOL → USDC | filled | 30s | 1 |  |
| 09:02:03 | 77 | 49 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 09:03:33 | 78 | 26 | sell 0.0025 SOL → USDC | filled | 45s | 1 |  |
| 09:03:33 | 79 | 27 | sell 0.003 SOL → USDC | filled | 41s | 1 |  |
| 09:03:33 | 80 | 28 | sell 0.0035 SOL → USDC | filled | 46s | 1 |  |
| 09:03:33 | 81 | 29 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 09:03:33 | 82 | 30 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 09:03:33 | 83 | 31 | sell 0.003 SOL → USDC | filled | 36s | 1 |  |
| 09:03:33 | 84 | 32 | sell 0.0035 SOL → USDC | filled | 42s | 1 |  |
| 09:03:33 | 85 | 33 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 09:03:33 | 86 | 34 | sell 0.0025 SOL → USDC | filled | 43s | 1 |  |
| 09:03:33 | 87 | 35 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 09:03:33 | 88 | 36 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 09:03:33 | 89 | 37 | sell 0.004 SOL → USDC | filled | 37s | 1 |  |
| 09:03:33 | 90 | 38 | sell 0.0025 SOL → USDC | filled | 38s | 1 |  |
| 09:03:33 | 91 | 39 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 09:03:33 | 92 | 40 | sell 0.0035 SOL → USDC | filled | 46s | 1 |  |
| 09:03:33 | 93 | 41 | sell 0.004 SOL → USDC | filled | 34s | 1 |  |
| 09:03:33 | 94 | 42 | sell 0.0025 SOL → USDC | filled | 18s | 1 |  |
| 09:03:33 | 95 | 43 | sell 0.003 SOL → USDC | filled | 42s | 1 |  |
| 09:03:33 | 96 | 44 | sell 0.0035 SOL → USDC | filled | 34s | 1 |  |
| 09:03:33 | 97 | 45 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:03:33 | 98 | 46 | sell 0.0025 SOL → USDC | filled | 46s | 1 |  |
| 09:03:33 | 99 | 47 | sell 0.003 SOL → USDC | filled | 47s | 1 |  |
| 09:03:33 | 100 | 48 | sell 0.0035 SOL → USDC | filled | 51s | 1 |  |
| 09:03:33 | 101 | 49 | sell 0.004 SOL → USDC | filled | 23s | 1 |  |
| 09:03:33 | 102 | 50 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 09:03:33 | 103 | 51 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 09:03:33 | 104 | 52 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 09:03:33 | 105 | 53 | sell 0.004 SOL → USDC | filled | 38s | 1 |  |
| 09:03:33 | 106 | 54 | sell 0.0025 SOL → USDC | filled | 44s | 1 |  |
| 09:03:33 | 107 | 55 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 09:03:33 | 108 | 56 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 09:03:33 | 109 | 57 | sell 0.004 SOL → USDC | filled | 32s | 1 |  |
| 09:07:22 | 110 | 59 | buy 2.6 USDC ← SOL | filled | 18s | 1 |  |
| 09:07:22 | 111 | 61 | buy 1.3 USDC ← SOL | filled | 24s | 1 |  |
| 09:07:22 | 112 | 62 | buy 3.1 USDC ← SOL | filled | 15s | 1 |  |
| 09:07:22 | 113 | 63 | buy 3.1 USDT ← SOL | filled | 12s | 1 |  |
| 09:07:22 | 114 | 64 | buy 1.1 USDT ← SOL | filled | 12s | 1 |  |
| 09:07:22 | 115 | 65 | buy 3.2 USDC ← SOL | filled | 12s | 1 |  |
| 09:09:52 | 116 | 58 | sell 0.02 SOL → USDC | filled | 11s | 1 |  |
| 09:09:52 | 117 | 59 | buy 0.02 SOL ← USDC | filled | 12s | 1 |  |
| 09:09:52 | 118 | 60 | sell 0.03 SOL → USDC | filled | 11s | 1 |  |
| 09:09:52 | 119 | 61 | sell 1.2 USDC → SOL | filled | 18s | 1 |  |
| 09:09:52 | 120 | 62 | sell 3 USDC → USDT | filled | 11s | 1 |  |
| 09:09:52 | 121 | 63 | sell 3 USDT → USDC | filled | 12s | 1 |  |
| 09:09:52 | 122 | 64 | sell 1 USDT → USDC | filled | 11s | 1 |  |
| 09:09:52 | 123 | 65 | sell 3 USDC → USDT | filled | 11s | 1 |  |
| 09:09:52 | 124 | 66 | sell 0.02 SOL → JUP | filled | 52s | 1 |  |
| 09:11:59 | 125 | 67 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 16s | 1 |  |
| 09:11:59 | 126 | 68 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 16s | 1 |  |
| 09:11:59 | 127 | 69 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 16s | 1 |  |
| 09:11:59 | 128 | 70 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 15s | 1 |  |
| 09:11:59 | 129 | 71 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 17s | 1 |  |
| 09:11:59 | 130 | 72 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 12s | 1 |  |
| 09:11:59 | 131 | 73 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 21s | 1 |  |
| 09:11:59 | 132 | 74 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 11s | 1 |  |
| 09:11:59 | 133 | 75 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 12s | 1 |  |
| 09:11:59 | 134 | 76 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 13s | 1 |  |
| 09:11:59 | 135 | 77 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 31s | 1 |  |
| 09:11:59 | 136 | 78 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 12s | 1 |  |
| 09:11:59 | 137 | 79 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 5s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 09:11:59 | 138 | 80 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 13s | 1 |  |
| 09:11:59 | 139 | 81 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 14s | 1 |  |
| 09:11:59 | 140 | 82 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 09:11:59 | 141 | 83 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 09:11:59 | 142 | 84 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 4s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 09:11:59 | 143 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 13s | 1 |  |
| 09:11:59 | 144 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 13s | 1 |  |
| 09:11:59 | 145 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 14s | 1 |  |
| 09:11:59 | 146 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 18s | 1 |  |
| 09:11:59 | 147 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 18s | 1 |  |
| 09:11:59 | 148 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 20s | 1 |  |
| 09:11:59 | 149 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 20s | 1 |  |
| 09:11:59 | 150 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 20s | 1 |  |
| 09:11:59 | 151 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 21s | 1 |  |
| 09:11:59 | 152 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 17s | 1 |  |
| 09:11:59 | 153 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 21s | 1 |  |
| 09:11:59 | 154 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 17s | 1 |  |
| 09:11:59 | 155 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 28s | 1 |  |
| 09:11:59 | 156 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 18s | 1 |  |
| 09:11:59 | 157 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 22s | 1 |  |
| 09:11:59 | 158 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 22s | 1 |  |
| 09:11:59 | 159 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 19s | 1 |  |
| 09:11:59 | 160 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 22s | 1 |  |
| 09:11:59 | 161 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 19s | 1 |  |
| 09:11:59 | 162 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 20s | 1 |  |
| 09:11:59 | 163 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 20s | 1 |  |
| 09:11:59 | 164 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 20s | 1 |  |
| 09:12:15 | 165 | 67 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 14s | 1 |  |
| 09:12:15 | 166 | 68 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:12:16 | 167 | 69 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:12:15 | 168 | 70 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 11s | 1 |  |
| 09:12:16 | 169 | 71 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | filled | 13s | 1 |  |
| 09:12:11 | 170 | 72 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | filled | 19s | 1 |  |
| 09:12:20 | 171 | 73 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | filled | 11s | 1 |  |
| 09:12:11 | 172 | 74 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 16s | 1 |  |
| 09:12:11 | 173 | 75 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | filled | 19s | 1 |  |
| 09:12:12 | 174 | 76 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | filled | 16s | 1 |  |
| 09:12:30 | 175 | 77 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | filled | 5s | 1 |  |
| 09:12:11 | 176 | 78 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | filled | 16s | 1 |  |
| 09:12:05 | 177 | 79 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | filled | 26s | 1 |  |
| 09:12:12 | 178 | 80 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | filled | 19s | 1 |  |
| 09:12:13 | 179 | 81 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 09:15:37 | 180 | 107 | sell 0.005 SOL → EURC | filled | 8s | 1 |  |
| 09:15:37 | 181 | 111 | sell 0.005 SOL → JLP | filled | 9s | 1 |  |
| 09:17:07 | 182 | 107 | sell 0.005 SOL → EURC | filled | 10s | 1 |  |
| 09:17:07 | 183 | 108 | sell 0.005 SOL → EURC | filled | 9s | 1 |  |
| 09:17:07 | 184 | 109 | sell 0.005 SOL → EURC | filled | 10s | 1 |  |
| 09:17:07 | 185 | 110 | sell 0.005 SOL → EURC | filled | 10s | 1 |  |
| 09:17:07 | 186 | 111 | sell 0.00125 SOL → JLP | filled | 10s | 1 |  |
| 09:17:07 | 187 | 112 | sell 0.00125 SOL → JLP | filled | 10s | 1 |  |
| 09:17:07 | 188 | 113 | sell 0.00125 SOL → JLP | filled | 10s | 1 |  |
| 09:17:07 | 189 | 114 | sell 0.00125 SOL → JLP | filled | 9s | 1 |  |
| 09:18:48 | 190 | 115 | sell 0.1 SOL → USDC | filled | 9s | 1 |  |
| 09:18:48 | 191 | 116 | sell 0.1 SOL → USDC | filled | 24s | 1 |  |
| 09:18:48 | 192 | 117 | buy 10 USDC ← SOL | filled | 13s | 1 |  |
| 09:18:48 | 193 | 118 | buy 10 USDC ← SOL | filled | 24s | 1 |  |
| 09:18:48 | 194 | 119 | sell 0.1 SOL → USDT | filled | 9s | 1 |  |
| 09:18:48 | 195 | 120 | sell 0.1 SOL → USDT | filled | 21s | 1 |  |
| 09:18:48 | 196 | 121 | buy 10 USDT ← SOL | filled | 13s | 1 |  |
| 09:18:48 | 197 | 122 | buy 10 USDT ← SOL | filled | 22s | 1 |  |

### Rows without an order

7 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| NoLiquidity | quote | 2 | SOL → PAID, SOL → USDG | no route found |
| BlockhashExpired | main | 1 | SOL → SPCX | the transaction's blockhash is no longer valid, sign a fresh one |
| NoLiquidity | main | 1 | SOL → TSLAx | no route found |

Scenario orders: 190 (190 main, 0 acquire). Cleanup placed 125 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 08:55:21 | 2 | JUP → SOL (native) | Executed | `0xe224fa46…` [🐞](https://debug.barn.cow.fi/order/0xe224fa46fa2bbc61cddab45df6ec0b30b10a0b2c01bcc245d8472a839ac18aa5) |
| 08:55:22 | 3 | JUP → SOL (native) | Executed | `0x507c57c6…` [🐞](https://debug.barn.cow.fi/order/0x507c57c6aabfd8ea1bc7c58ecd9ed0c5f189bdbf673091fa94499963434bf199) |
| 08:55:23 | 4 | JUP → SOL (native) | Executed | `0x540401f9…` [🐞](https://debug.barn.cow.fi/order/0x540401f9f78d7602b5b35589045cebe4baa5bd45b7d0c5185d668e9f1e7178c2) |
| 08:55:25 | 6 | JUP → SOL (native) | Executed | `0xd1cc344b…` [🐞](https://debug.barn.cow.fi/order/0xd1cc344bb420f4533b1e478411971dd59baa7d84ba7135b1ef97d0640ff1c570) |
| 08:55:26 | 7 | JUP → SOL (native) | Executed | `0x091d2159…` [🐞](https://debug.barn.cow.fi/order/0x091d2159770917fb0820ec0302ffea4cf4b3f6693f578c390e50e55fd610cddd) |
| 08:55:27 | 8 | JUP → SOL (native) | Executed | `0xe0941fee…` [🐞](https://debug.barn.cow.fi/order/0xe0941feefb5d1c86d29cd6deceffc6c70e932412635a2c8b5568cdd506e95d66) |
| 08:55:28 | 9 | JUP → SOL (native) | Executed | `0x1240ff13…` [🐞](https://debug.barn.cow.fi/order/0x1240ff13094a365c31fb5573894443664c1238ce97812667bc2413d91d1600c4) |
| 08:55:29 | 10 | JUP → SOL (native) | Executed | `0x12f60d67…` [🐞](https://debug.barn.cow.fi/order/0x12f60d67f2524e1ab3c1201477091c2e2f5538fb01a2fdb15aee1c2c798b5b1a) |
| 08:55:29 | 1 | JUP → SOL (native) | Executed | `0xac372215…` [🐞](https://debug.barn.cow.fi/order/0xac3722158385d315fd307443bb32b335586761953ca7571a8c6a71f23a4bffef) |
| 08:55:51 | 11 | JUP → SOL (native) | Executed | `0x5288c2fd…` [🐞](https://debug.barn.cow.fi/order/0x5288c2fd26c614fe8cd981d407c954f01eeb193c1f6d5adae0e1f1a09357deb8) |
| 08:55:53 | 12 | USDC → SOL (native) | Executed | `0xa10797bb…` [🐞](https://debug.barn.cow.fi/order/0xa10797bb390fb105cb03b7ea3cea1268ab2a3e1b81c894e6f7cc134c552f9192) |
| 08:55:53 | 12 | JUP → SOL (native) | Executed | `0xb6c0cd3f…` [🐞](https://debug.barn.cow.fi/order/0xb6c0cd3f402434bf2ce0f2234df6e4cdd4a4305a6921c4c430a099e18894d179) |
| 08:55:56 | 13 | JUP → SOL (native) | Executed | `0x3aa67422…` [🐞](https://debug.barn.cow.fi/order/0x3aa67422bfe047c93b133032f2ee528b6983f930164d80b8c625e409325d3007) |
| 08:56:00 | 16 | JUP → SOL (native) | Executed | `0xb571cb65…` [🐞](https://debug.barn.cow.fi/order/0xb571cb65d1727af1fc2c31f6c6d4330d0b291902f736b6947abbea12c82de0be) |
| 08:56:00 | 14 | USDC → SOL (native) | Executed | `0x8026a4af…` [🐞](https://debug.barn.cow.fi/order/0x8026a4af790b606c2ca9af30504a6ed92b039a8c24c07c6eb70935dff3724063) |
| 08:56:00 | 14 | JUP → SOL (native) | Executed | `0x48f021bd…` [🐞](https://debug.barn.cow.fi/order/0x48f021bd028a80b2f267781929f7c3a2cfe95b73bbec0411b55ba366aac962c6) |
| 08:56:00 | 15 | JUP → SOL (native) | Executed | `0x74d13e1d…` [🐞](https://debug.barn.cow.fi/order/0x74d13e1d8d63701ae1ad642263f68286e6e2f1d03118c813171f057f95ae1fbb) |
| 08:56:07 | 17 | JUP → SOL (native) | Executed | `0xdb11ffb1…` [🐞](https://debug.barn.cow.fi/order/0xdb11ffb1b200bb757ce06cb1c42939e22e53ecc38dd6b70f46274f3615dc7fd4) |
| 08:56:09 | 19 | USDC → SOL (native) | Executed | `0x5f313452…` [🐞](https://debug.barn.cow.fi/order/0x5f313452723415cb4623650ebd39b50f0e12734fbc6da9458ad86cf344b1087f) |
| 08:56:10 | 19 | JUP → SOL (native) | Executed | `0x01245086…` [🐞](https://debug.barn.cow.fi/order/0x01245086f24755703ff4a4494e5a2335461b7bcd60305ec6dea800ca124937f0) |
| 08:56:13 | 18 | JUP → SOL (native) | Executed | `0xf680e992…` [🐞](https://debug.barn.cow.fi/order/0xf680e99206045acc8eae3bf7d68ab9c94f1b6b2b8ab46567743d9933299efe4f) |
| 08:56:14 | 20 | JUP → SOL (native) | Executed | `0xe0a252f9…` [🐞](https://debug.barn.cow.fi/order/0xe0a252f9f3442f4fc60d9e4f7774473639eb32da9900cdde94cdc308d0a7bdec) |
| 08:56:38 | 21 | JUP → SOL (native) | Executed | `0xcf057915…` [🐞](https://debug.barn.cow.fi/order/0xcf0579159f1a45d4d4749837abaf80bcb9c4cff9a6ea8f91c383a19e8d3567d7) |
| 08:56:57 | 24 | JUP → SOL (native) | Executed | `0xc80e0657…` [🐞](https://debug.barn.cow.fi/order/0xc80e0657d6def9e1b5c72b4eda6c1c259efd63c49ec6db15eb4941f92eec8892) |
| 08:56:57 | 23 | JUP → SOL (native) | Executed | `0xf6fb12c9…` [🐞](https://debug.barn.cow.fi/order/0xf6fb12c972f526a2132fb5885ddacc1cb51aa2ba3e2fb192d15a8384a43a0dd2) |
| 08:56:58 | 22 | JUP → SOL (native) | Executed | `0xe43a430a…` [🐞](https://debug.barn.cow.fi/order/0xe43a430ae65f57151168537dc84cc9fd9d32bc9915c87c820f9abcd9c1c81e74) |
| 08:56:58 | 25 | JUP → SOL (native) | Executed | `0x595a1cc9…` [🐞](https://debug.barn.cow.fi/order/0x595a1cc90ee8d0b690768a52054d45971ef919209fd63d71dd9f8f8889124d37) |
| 09:04:28 | 27 | USDC → SOL (native) | Executed | `0x816eea7e…` [🐞](https://debug.barn.cow.fi/order/0x816eea7e1f90a13e1afece3718556569796a88cba3559b55878bc634777a6125) |
| 09:04:28 | 28 | USDC → SOL (native) | Executed | `0xd1bb27f8…` [🐞](https://debug.barn.cow.fi/order/0xd1bb27f8600c3e56d3f4aae4574ee112e36ae1961257d5426b6d59cb69b8a11a) |
| 09:04:29 | 29 | USDC → SOL (native) | Executed | `0xdc1ec60a…` [🐞](https://debug.barn.cow.fi/order/0xdc1ec60a426550066e4c63cad6dc599cec383576b4abcbf63f9afa002704805c) |
| 09:04:30 | 30 | USDC → SOL (native) | Executed | `0x657aae94…` [🐞](https://debug.barn.cow.fi/order/0x657aae94772099402db1f8e8dc69af6fca4caf25be54712a29e7244e700682e5) |
| 09:04:32 | 31 | USDC → SOL (native) | Executed | `0x10021cd8…` [🐞](https://debug.barn.cow.fi/order/0x10021cd8005dd81e557d9ed3ff5581d6aa4750cbe7c380bf7440b89a2f849ff6) |
| 09:04:32 | 32 | USDC → SOL (native) | Executed | `0x072b7a3f…` [🐞](https://debug.barn.cow.fi/order/0x072b7a3fc7e15c5cb8c4f01bd5300d32d6e97f12d9af085dc4d49e88302c6f9e) |
| 09:04:33 | 33 | USDC → SOL (native) | Executed | `0x8a066ac1…` [🐞](https://debug.barn.cow.fi/order/0x8a066ac1c4852e1ed28de40b401f95d2b0ceca2600ad7a72a2056f5c13a4df4c) |
| 09:04:34 | 34 | USDC → SOL (native) | Executed | `0x6849c3e9…` [🐞](https://debug.barn.cow.fi/order/0x6849c3e9c6da5e644c46445197745a6b9dff565e19aa24886025a793a7bb5626) |
| 09:04:37 | 35 | USDC → SOL (native) | Executed | `0x8608aa98…` [🐞](https://debug.barn.cow.fi/order/0x8608aa98997c9236028f5fbc3aef2e3139a6aa2df69242cc70cc7141cbc18d0c) |
| 09:04:38 | 26 | USDC → SOL (native) | Executed | `0xdf31d9a7…` [🐞](https://debug.barn.cow.fi/order/0xdf31d9a75633a5a1fea12af9c71590bcbef646125d0b4f584186d2cc55d605a0) |
| 09:05:00 | 36 | USDC → SOL (native) | Executed | `0x32536682…` [🐞](https://debug.barn.cow.fi/order/0x325366824e71894c387bb717f1b31ba036fed83bacc78cb59151046a80a7f8d0) |
| 09:05:00 | 37 | USDC → SOL (native) | Executed | `0x9d7efa2e…` [🐞](https://debug.barn.cow.fi/order/0x9d7efa2ef19a7d49e47ff1370f0e0a02f802b4524cf1a17ced42e634bb2b9c52) |
| 09:05:04 | 38 | USDC → SOL (native) | Executed | `0xb17e7aad…` [🐞](https://debug.barn.cow.fi/order/0xb17e7aad41ab91ee975d80c82941bd9acb847c609f4a2ba38abd2ca7ad500181) |
| 09:05:07 | 39 | USDC → SOL (native) | Executed | `0x2f078601…` [🐞](https://debug.barn.cow.fi/order/0x2f078601e6fef6ac77297f8798bfc4fbc91ea031f87cc1dd9400e12e48b62044) |
| 09:05:09 | 40 | USDC → SOL (native) | Executed | `0xd52669fb…` [🐞](https://debug.barn.cow.fi/order/0xd52669fb38a31500de66f9734489706513b132d8ad3b1126faba7c0002b86afd) |
| 09:05:12 | 41 | USDC → SOL (native) | Executed | `0x61a6dd60…` [🐞](https://debug.barn.cow.fi/order/0x61a6dd60b17c1e5d54e7c063645417eb3bbb1ff14e0c022fb54ccf131e26ca8e) |
| 09:05:14 | 42 | USDC → SOL (native) | Executed | `0x2732d414…` [🐞](https://debug.barn.cow.fi/order/0x2732d4145adc22b19664fa960b37c6cba51c22174dc705b5c592339879a427db) |
| 09:05:17 | 44 | USDC → SOL (native) | Executed | `0xe3473a81…` [🐞](https://debug.barn.cow.fi/order/0xe3473a81095a012dbed9503bbf9dff8d48e82b1790b21f3ebd124a762e8f4e25) |
| 09:05:17 | 43 | USDC → SOL (native) | Executed | `0xf4f41dfa…` [🐞](https://debug.barn.cow.fi/order/0xf4f41dfa7a7cfebddfef09f565829f58fc9bffae4d07a19797336078338d6be0) |
| 09:05:18 | 45 | USDC → SOL (native) | Executed | `0xffac2b07…` [🐞](https://debug.barn.cow.fi/order/0xffac2b07f8e4fc539883c456dc6de2b1c2c44b32eaf11ff37c0e9acc99259999) |
| 09:05:38 | 46 | USDC → SOL (native) | Executed | `0x9d24bba9…` [🐞](https://debug.barn.cow.fi/order/0x9d24bba97fa0fc3c4ac37a89df189f14bf7b3d811c462f15e10323c9d630106f) |
| 09:05:38 | 47 | USDC → SOL (native) | Executed | `0xb826e124…` [🐞](https://debug.barn.cow.fi/order/0xb826e1247f288868f23957b877030de31405bb572816cc5ea801285f62ef777f) |
| 09:05:44 | 49 | USDC → SOL (native) | Executed | `0xd973ad5d…` [🐞](https://debug.barn.cow.fi/order/0xd973ad5dd7670af4f6aa4be83b180358c350423cf28bd3d9a43726211a464373) |
| 09:05:46 | 48 | USDC → SOL (native) | Executed | `0xdeecc79a…` [🐞](https://debug.barn.cow.fi/order/0xdeecc79a25a4bbd6d1e4c27445185227b23b5a7ad4d2bf5db2de68e90f5abd2a) |
| 09:05:49 | 50 | USDC → SOL (native) | Executed | `0x4fa80838…` [🐞](https://debug.barn.cow.fi/order/0x4fa808383a8b3d3ef0fa41e4beaba09c96542515d2245ae8399056740055c174) |
| 09:05:52 | 51 | USDC → SOL (native) | Executed | `0x9ceb8199…` [🐞](https://debug.barn.cow.fi/order/0x9ceb8199067152baad7023c0a49f963de7abae0a98a7136cbcd188b76df13f1c) |
| 09:06:11 | 52 | USDC → SOL (native) | Executed | `0x60f31057…` [🐞](https://debug.barn.cow.fi/order/0x60f310577b92cc9352209eb51571ea06fe79bb50e29967000ed3ddd50bd4f614) |
| 09:06:13 | 54 | USDC → SOL (native) | Executed | `0x29287b30…` [🐞](https://debug.barn.cow.fi/order/0x29287b30257bbd4ed7eed01c0c026d5251198d140b4a31f9cbd2ea37b34478db) |
| 09:06:17 | 53 | USDC → SOL (native) | Executed | `0x90cf333d…` [🐞](https://debug.barn.cow.fi/order/0x90cf333d2c7bfd46d1dcad3532be518fadcb0fd747a776b8bf02b44623c66408) |
| 09:06:35 | 55 | USDC → SOL (native) | Executed | `0x33f969ad…` [🐞](https://debug.barn.cow.fi/order/0x33f969ade551436b936cf31ad53144d1c846fb15804c11d42e670aca5d4ae0c1) |
| 09:06:37 | 56 | USDC → SOL (native) | Executed | `0x16f172d3…` [🐞](https://debug.barn.cow.fi/order/0x16f172d345f08b689a28cdb1b584d63f027e0636a9be37dbb1236440e1931642) |
| 09:06:37 | 57 | USDC → SOL (native) | Executed | `0x5d8fc6c6…` [🐞](https://debug.barn.cow.fi/order/0x5d8fc6c65852246bdfe1ff478a1a59d3a017479ae20933f0d4a8af680912fef0) |
| 09:10:47 | 59 | USDC → SOL (native) | Executed | `0x16a3c3c7…` [🐞](https://debug.barn.cow.fi/order/0x16a3c3c7b49110ace93dc1bfddfed9658e4408f4c4195974e0e249b58b0273ce) |
| 09:10:48 | 60 | USDC → SOL (native) | Executed | `0x6f85ff39…` [🐞](https://debug.barn.cow.fi/order/0x6f85ff393ec563b20e3985b77abfd7328255a07dd959741a82035501a6432653) |
| 09:10:49 | 61 | USDC → SOL (native) | Executed | `0xd826b5bc…` [🐞](https://debug.barn.cow.fi/order/0xd826b5bcf0b4ba709dab7622ebfde2faba88d54db7d46883fe4998c545411651) |
| 09:10:50 | 62 | USDT → SOL (native) | Executed | `0x920210db…` [🐞](https://debug.barn.cow.fi/order/0x920210db7a403a5483fd4e0e6845f8ba4552332a0ac824148903db61934ef1cc) |
| 09:10:51 | 63 | USDC → SOL (native) | Executed | `0x301d3ae4…` [🐞](https://debug.barn.cow.fi/order/0x301d3ae45f59b27d9617a32720eebdaed6939d80e2cf1426070b93c7fdc8ceb3) |
| 09:10:52 | 64 | USDC → SOL (native) | Executed | `0x5a687fee…` [🐞](https://debug.barn.cow.fi/order/0x5a687fee1a535a090fb1a8e645ef2022de8fcfc559167c2443c46be910c2f02c) |
| 09:10:53 | 65 | USDT → SOL (native) | Executed | `0xced3690a…` [🐞](https://debug.barn.cow.fi/order/0xced3690a658b3d7d82744b9e4c17334f2a9946b002829f8f6e08f3ddb8d2cf92) |
| 09:10:53 | 65 | USDC → SOL (native) | Executed | `0x70db7f40…` [🐞](https://debug.barn.cow.fi/order/0x70db7f40dde9c95d251dab4f98493d4edbae81685eec8901485111db168af5ab) |
| 09:10:56 | 66 | JUP → SOL (native) | Executed | `0x58f996d8…` [🐞](https://debug.barn.cow.fi/order/0x58f996d89c3ea3b18ea2d5f73c859bfbcdae5dca2063b6449cc931464b517eb9) |
| 09:10:57 | 58 | USDC → SOL (native) | Executed | `0xa7efa4ec…` [🐞](https://debug.barn.cow.fi/order/0xa7efa4ecfa837103e61d910c3b2d31a6f8b4473dc141e8b36e459488080f7de0) |
| 09:12:39 | 68 | USDC → SOL (native) | Executed | `0x4be2b570…` [🐞](https://debug.barn.cow.fi/order/0x4be2b570aa7922f61250ff5bd92c8f233e68db88ae63ea818b7d5e5aee624d96) |
| 09:12:39 | 68 | PAID → SOL (native) | Executed | `0xf4c7a571…` [🐞](https://debug.barn.cow.fi/order/0xf4c7a57117efd7d1e7470f9eaaa42587dc98fa6c3e5476a9e5a8b85fac8410d5) |
| 09:12:40 | 69 | USDG → SOL (native) | Executed | `0x0ae61138…` [🐞](https://debug.barn.cow.fi/order/0x0ae611384fce5a17f68982e7a434824b66b4b7e7f5684b7a7f0e1b2be8505bf4) |
| 09:12:41 | 70 | PUMP → SOL (native) | Executed | `0xa601e18c…` [🐞](https://debug.barn.cow.fi/order/0xa601e18c3a6dec75385f99333d7d9ef4d3ada3613c7b55e7ab8f04ff26bb3292) |
| 09:12:42 | 71 | PYUSD → SOL (native) | Executed | `0x530c2054…` [🐞](https://debug.barn.cow.fi/order/0x530c20540f00532c54e6ee6e2a835204436dd2d2f8e9c7222eb0ca4505128f21) |
| 09:12:43 | 72 | CASH → SOL (native) | Executed | `0xa85665e4…` [🐞](https://debug.barn.cow.fi/order/0xa85665e44b37a132e0be5f1b90cdde4038f620e162574634bc37bb9115138c2d) |
| 09:12:44 | 73 | CRCLx → SOL (native) | Executed | `0xb0ac110b…` [🐞](https://debug.barn.cow.fi/order/0xb0ac110b3ea429103845778a0452346ed2428b476e7f56a35eb7f2e95398eb75) |
| 09:12:47 | 73 | ANSEM → SOL (native) | Executed | `0xfb2658a1…` [🐞](https://debug.barn.cow.fi/order/0xfb2658a1cd0ae0d13bfa7ebb55dc6294d74e35357b40fea2872a8d87f801dd24) |
| 09:12:47 | 74 | SPYx → SOL (native) | Executed | `0x14c173e2…` [🐞](https://debug.barn.cow.fi/order/0x14c173e2b4cf90ce36001b3dd4804730ca0098000073aa493d259b05f69dc1f4) |
| 09:12:50 | 75 | USDv → SOL (native) | Executed | `0xa0b69e7d…` [🐞](https://debug.barn.cow.fi/order/0xa0b69e7ddca7af1711e76236b8fb0137a7bf5f2998468c278bb80ad12713fa22) |
| 09:12:50 | 75 | USDG → SOL (native) | Executed | `0x0b27850d…` [🐞](https://debug.barn.cow.fi/order/0x0b27850dfd2847188f6caa0e796f9051ba01941158fe137f1a2f49d8ca47c32b) |
| 09:12:52 | 67 | ANSEM → SOL (native) | Executed | `0xc0aef9d6…` [🐞](https://debug.barn.cow.fi/order/0xc0aef9d613eb7cc919442e54bef6b67af4945e0eafbcb060e8c016320f2849d1) |
| 09:12:53 | 76 | PUMP → SOL (native) | Executed | `0x59d90f9c…` [🐞](https://debug.barn.cow.fi/order/0x59d90f9c00dba869e74fd5b73b0a39c7132d55e9c89c57b1b8df69c99916a050) |
| 09:12:53 | 76 | SKHY → SOL (native) | Executed | `0xa8e152c8…` [🐞](https://debug.barn.cow.fi/order/0xa8e152c854443f283caf29e1154e44a86871c89157e0461b0a93013946af95c6) |
| 09:13:12 | 77 | NVDAx → SOL (native) | Executed | `0xebd0bf6b…` [🐞](https://debug.barn.cow.fi/order/0xebd0bf6b53391198052cb03154dcfc008036fdb448aefa9f2767f89f267999cf) |
| 09:13:14 | 77 | PYUSD → SOL (native) | Executed | `0x5028d263…` [🐞](https://debug.barn.cow.fi/order/0x5028d2639efb26b249cb3d8504fba421cc5cd1862d08c8b8c02843ece1b0cbc8) |
| 09:13:14 | 78 | MU → SOL (native) | Executed | `0x807afad4…` [🐞](https://debug.barn.cow.fi/order/0x807afad46f05783e9f01c12dac70694d849ca7785d360d05eaa0c5a4e49dceea) |
| 09:13:15 | 81 | TSLAx → SOL (native) | Executed | `0x2a5a7f70…` [🐞](https://debug.barn.cow.fi/order/0x2a5a7f70fca79663a6827c4a5b1552690a4d26e542e9ce8122bce90761787bd1) |
| 09:13:16 | 80 | SPCXx → SOL (native) | Executed | `0xb62f278d…` [🐞](https://debug.barn.cow.fi/order/0xb62f278db0e065e76bd3b067a01465afbc86e9d879a49db1a09f01169bf0a8fb) |
| 09:13:23 | 86 | $WIF → SOL (native) | Executed | `0x71b4f5b0…` [🐞](https://debug.barn.cow.fi/order/0x71b4f5b0b85db9f010753c743726b727b300cae6ee2cb0aa9ba85f9b70b263ae) |
| 09:13:24 | 85 | Bonk → SOL (native) | Executed | `0x448777cc…` [🐞](https://debug.barn.cow.fi/order/0x448777cc87431ae866728856b81d527aa15d46cddce7c44f498ae8ad84e9ce25) |
| 09:13:25 | 87 | POPCAT → SOL (native) | Executed | `0xcccd1071…` [🐞](https://debug.barn.cow.fi/order/0xcccd10710d2ad4b1ec05fd834b24678727b35b4404a16b1e58b8f9c14b39be0b) |
| 09:13:26 | 88 | JitoSOL → SOL (native) | Executed | `0x9d9e3bda…` [🐞](https://debug.barn.cow.fi/order/0x9d9e3bda82b1a5c32fefd1766313f405b9d99cf8e1270306a5561250c1bc693b) |
| 09:13:29 | 89 | mSOL → SOL (native) | Executed | `0x9401a299…` [🐞](https://debug.barn.cow.fi/order/0x9401a299c471c3bba8dad3ec53f5b192070d4180f4b5bbff87fe96e03d96d7af) |
| 09:13:29 | 90 | JupSOL → SOL (native) | Executed | `0x41c82210…` [🐞](https://debug.barn.cow.fi/order/0x41c8221061086d4ca9533be1210e3231f57321b66d0842cbae2ef6ac0ba4810a) |
| 09:13:48 | 91 | cbBTC → SOL (native) | Executed | `0xeb1e7f9e…` [🐞](https://debug.barn.cow.fi/order/0xeb1e7f9e3d02472df2a3703b476b14fd5689a405aacf08d7393baca418385a95) |
| 09:13:52 | 92 | USDe → SOL (native) | Executed | `0x9a3c5648…` [🐞](https://debug.barn.cow.fi/order/0x9a3c5648a7252f1896344b4c6f6f5277c7b644d4906c59dfc8fe222fd7efec33) |
| 09:13:55 | 93 | EURC → SOL (native) | Executed | `0x5bb3e967…` [🐞](https://debug.barn.cow.fi/order/0x5bb3e9678594980868e980acfa02bc38c98562caebff454b91b019e5bd8b6c7c) |
| 09:13:59 | 94 | USDY → SOL (native) | Executed | `0x831ea0f7…` [🐞](https://debug.barn.cow.fi/order/0x831ea0f7aa4da46368bc88735baf96e7138edfbdb73f40b1760b7410d3807e3c) |
| 09:13:59 | 95 | JLP → SOL (native) | Executed | `0xf35b95a2…` [🐞](https://debug.barn.cow.fi/order/0xf35b95a2fb9c5a71d5f2b3681d59cbdcb898e8a07076b1132845584c2f317f51) |
| 09:14:20 | 97 | ETH → SOL (native) | Executed | `0xabb9f297…` [🐞](https://debug.barn.cow.fi/order/0xabb9f2973863c14a95729224a19d8e2a7e6e79a0a8a9c064ccd9e54521f20372) |
| 09:14:24 | 98 | BNB → SOL (native) | Executed | `0x8d00823f…` [🐞](https://debug.barn.cow.fi/order/0x8d00823f43d71513eeceee14e3945b61dda92a54cd1fa96ccf1db3e903afa8d5) |
| 09:14:25 | 96 | INF → SOL (native) | Executed | `0x7fb2cb61…` [🐞](https://debug.barn.cow.fi/order/0x7fb2cb61705bd46c942dc5228993db64394d0f209ff2f8991c5729486a05187c) |
| 09:14:41 | 99 | XAUt0 → SOL (native) | Executed | `0x4c06f5ab…` [🐞](https://debug.barn.cow.fi/order/0x4c06f5abc94e1d477a2ba8206d8f5ecf19e4822bea91808e94fb80625e702286) |
| 09:14:43 | 102 | Fartcoin → SOL (native) | Executed | `0xccf5f7c3…` [🐞](https://debug.barn.cow.fi/order/0xccf5f7c3cf7244e08c5d9e86e3a483eb9ca7a809b048039e85cfa6ad80a60d52) |
| 09:14:45 | 100 | GLDx → SOL (native) | Executed | `0x5c280e52…` [🐞](https://debug.barn.cow.fi/order/0x5c280e52061cb436bdf4211c120b9a31f7c8f11257ce38cdab3fa2913e78db6f) |
| 09:14:46 | 103 | MEW → SOL (native) | Executed | `0xe02db6ae…` [🐞](https://debug.barn.cow.fi/order/0xe02db6ae610db912870c9b3bb2005387ea4c3730dfd63bddc286b81a194b0ee3) |
| 09:14:49 | 105 | hyloSOL → SOL (native) | Executed | `0x6c1e22f1…` [🐞](https://debug.barn.cow.fi/order/0x6c1e22f12eba612a6ca7a302fc1f7cae10ba7f5050ed542bd10f3505c1971631) |
| 09:14:49 | 101 | EUROP → SOL (native) | Executed | `0x3f39b4d8…` [🐞](https://debug.barn.cow.fi/order/0x3f39b4d89e6c3b564b18ae5995c42aba298489854c75dfebfb92f87af917c79e) |
| 09:14:51 | 106 | PSOL → SOL (native) | Executed | `0xe8b552c7…` [🐞](https://debug.barn.cow.fi/order/0xe8b552c76837f60e918236a629d00b4fe273961347be24e7814a63be92186987) |
| 09:14:53 | 104 | BOME → SOL (native) | Executed | `0x61be7c40…` [🐞](https://debug.barn.cow.fi/order/0x61be7c40973bbdfd8428e1f685f9e026b52de91a125c14edc82d8eaea7c8b528) |
| 09:17:20 | 108 | EURC → SOL (native) | Executed | `0x826c05a9…` [🐞](https://debug.barn.cow.fi/order/0x826c05a91f1c241be66aa3a86632f3d9f79d905f8fe247428a94af5e6da89fec) |
| 09:17:21 | 109 | EURC → SOL (native) | Executed | `0x6b925703…` [🐞](https://debug.barn.cow.fi/order/0x6b925703b00641a87581181b7510318aa818d92a1875499efa4dfa9f2c3919c9) |
| 09:17:22 | 110 | EURC → SOL (native) | Executed | `0x93fb690c…` [🐞](https://debug.barn.cow.fi/order/0x93fb690c5167111a6d5467e9d4f16dfccbe9c0e2cd7c9220e57ff099995b74bd) |
| 09:17:23 | 111 | JLP → SOL (native) | Executed | `0x48f0c08e…` [🐞](https://debug.barn.cow.fi/order/0x48f0c08eb32f4c8118065fda056f903804654d74b7a6051538fa57fb05d94085) |
| 09:17:29 | 107 | EURC → SOL (native) | Executed | `0x866dc541…` [🐞](https://debug.barn.cow.fi/order/0x866dc5416655b6ab369e78daf551d2d93db9168d8260c1ee7647b052794c1801) |
| 09:19:13 | 115 | USDC → SOL (native) | Executed | `0x6b9f2b9c…` [🐞](https://debug.barn.cow.fi/order/0x6b9f2b9ca9f52e14a632519ae5c7a071d076d0b6ef6120d719ff4180c41e3e94) |
| 09:19:14 | 116 | USDC → SOL (native) | Executed | `0x2fdd9f8d…` [🐞](https://debug.barn.cow.fi/order/0x2fdd9f8d7bac63b09332040153f2909ea54be91211d10a001e86be2ffd0be416) |
| 09:19:15 | 117 | USDC → SOL (native) | Executed | `0xef8e4e73…` [🐞](https://debug.barn.cow.fi/order/0xef8e4e7340981a343206b465317f78522dd282fc69b0440950cc8d38b6fce052) |
| 09:19:17 | 118 | USDC → SOL (native) | Executed | `0x61f33d9e…` [🐞](https://debug.barn.cow.fi/order/0x61f33d9e5a879f12742e424cb62533ad160fc4c7d5233e2c9351a7814c7d1566) |
| 09:19:17 | 119 | USDT → SOL (native) | Executed | `0x8744c935…` [🐞](https://debug.barn.cow.fi/order/0x8744c935ebc10b34d1611a17a735d50f32cf546529d8c22b950f815b38d05d12) |
| 09:19:19 | 120 | USDT → SOL (native) | Executed | `0x80de987c…` [🐞](https://debug.barn.cow.fi/order/0x80de987cbcb57c87c885b58f27901b500264e3de995560a4d5e414bb2844b651) |
| 09:19:19 | 121 | USDT → SOL (native) | Executed | `0x722d217a…` [🐞](https://debug.barn.cow.fi/order/0x722d217a4c62c4af67c740473209539e7d6d96e20f6c06d3c3ee75553308b6b1) |
| 09:19:21 | 122 | USDT → SOL (native) | Executed | `0x70290aee…` [🐞](https://debug.barn.cow.fi/order/0x70290aee7cb4a61c2bdc0625ab05359772827c6c8a47b7fe3f2a4d106183a13d) |
| 09:22:20 | 5 | JUP → SOL (native) | Executed | `0x0256b8f2…` [🐞](https://debug.barn.cow.fi/order/0x0256b8f254e5769baf77c3b21264e759a7c9613275b452692f546cc0afad8911) |
| 09:25:11 | 79 | SPCX → SOL (native) | Executed | `0x7c162e11…` [🐞](https://debug.barn.cow.fi/order/0x7c162e118f31978367fe5cbea53f4cae422aec499d977d87937f37fe22d2d91d) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 190 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 8s | 18s | 26s | 49s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| AuwL…YzVj | 190 | 100.0% | 101 | 105,726 | 8s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| grafiks | 571 | 199 | 184 | 92.5% | 6 | 18 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 6 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 389 times
- Orders filtered for `in_flight`: 44 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 167 | 167 | 100.0% |
| market buy | 23 | 23 | 100.0% |

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
| wSOL → PYUSD | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 2 | 100.0% |
| wSOL → CRCLx | 2 | 2 | 100.0% |
| wSOL → USDv | 2 | 2 | 100.0% |
| wSOL → SKHY | 2 | 2 | 100.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → SPCXx | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 5 | 5 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 5 | 5 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 5 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 5 | 5 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 4 | 4 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 4 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 4 | 4 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 4 | 4 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 3 | 3 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 3 | 3 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 3 | 3 | 100.0% |
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
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 2 | 2 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 2 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 2 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 2 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 2 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 2 | 100.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 2 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 2 | 2 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 2 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 2 | 2 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 2 | 2 | 100.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
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
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |
| `52CfB35yd7jyGA6U2198WmCDVV8wi3Xg48S4MgMDvKR1` | 1 | 1 | 100.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 1 | 100.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 1 | 100.0% |
| `FCMwP3inMPkh6iUYYee8F9kHE8BtMUPCTAJ6ifPfo7Vy` | 1 | 1 | 100.0% |
| `7ehtrkWqiruHhxCfG9gaCApJ3prnfGuEsYVuqB948SeJ` | 1 | 1 | 100.0% |
| `DBKSmR7E2tkDuZNeweWTCNenv871nxaCVThANH8eQJLV` | 1 | 1 | 100.0% |
| `37RrjKncvFpp5VvauvmuYy8mmr7WTA3RWLk2PTD2sst6` | 1 | 1 | 100.0% |
| `Bk7AYQexQvtetasHf5tR8jV69rvdMHEF699K77ZT3S3H` | 1 | 1 | 100.0% |
| `4b6B15qXF9dZuuFwX66EZV6hzTRcFf37P9oRFYerfzbN` | 1 | 1 | 100.0% |
| `cnt7zt27wGwu9SZufyuytxmTyFYaS6HhUUpLgpQdkup` | 1 | 1 | 100.0% |
| `ALRkrC3Ztr2WYqbFhEYP26DnAK3D18kkhARDENoF5M5d` | 1 | 1 | 100.0% |
| `7d87AydxarhV4GxjHqpLQ5fMYtEJkdhHhgoKGp57mGUG` | 1 | 1 | 100.0% |
