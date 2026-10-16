# Solana QoS report: 2026-10-16-09-40-composite-grafiks-run

Barn, orders created between `2026-10-16T09:41:57.835Z` and `2026-10-16T10:06:26.003Z`. Data fetched 2026-10-16T10:09:03+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 186 |
| Orders executed | **147** (79.0%) |
| Sponsored orders never created on-chain | 39 (21.0%) |
| Traders | 111 |
| Settlement txs | 65 |

## Scenario results

Target solver: `grafiks`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-same-direction-25 | 2026-10-16T09:41:57.835Z | 2026-10-16T09:43:17.936Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-16T09:45:31.367Z | 2026-10-16T09:52:13.049Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-cow | 2026-10-16T09:54:55.599Z | 2026-10-16T09:58:09.212Z | 0/15 | 15 | 15 | 0 | 0.0% |
| solver-token-coverage | 2026-10-16T09:59:00.751Z | 2026-10-16T10:00:22.806Z | 28/55 | 27 | 52 | 28 | 50.9% |
| solver-transaction-size | 2026-10-16T10:03:10.976Z | 2026-10-16T10:04:53.311Z | 10/10 | 0 | 10 | 10 | 100.0% |

## Scenario

147 of 189 scenario rows completed. 0 retries, 3 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 09:41:57 | 1 | 1 | sell 0.005 SOL → JUP | filled | 45s | 1 |  |
| 09:41:58 | 2 | 2 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 09:41:58 | 3 | 3 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 09:41:58 | 4 | 4 | sell 0.005 SOL → JUP | filled | 46s | 1 |  |
| 09:41:58 | 5 | 5 | sell 0.005 SOL → JUP | filled | 40s | 1 |  |
| 09:41:58 | 6 | 6 | sell 0.005 SOL → JUP | filled | 45s | 1 |  |
| 09:41:58 | 7 | 7 | sell 0.005 SOL → JUP | filled | 79s | 1 |  |
| 09:41:58 | 8 | 8 | sell 0.005 SOL → JUP | filled | 35s | 1 |  |
| 09:41:58 | 9 | 9 | sell 0.005 SOL → JUP | filled | 35s | 1 |  |
| 09:41:58 | 10 | 10 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 09:41:58 | 11 | 11 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 09:41:58 | 12 | 12 | sell 0.005 SOL → JUP | filled | 69s | 1 |  |
| 09:41:59 | 13 | 13 | sell 0.005 SOL → JUP | filled | 79s | 1 |  |
| 09:41:59 | 14 | 14 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 09:41:59 | 15 | 15 | sell 0.005 SOL → JUP | filled | 38s | 1 |  |
| 09:41:59 | 16 | 16 | sell 0.005 SOL → JUP | filled | 44s | 1 |  |
| 09:41:59 | 17 | 17 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 09:41:59 | 18 | 18 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 09:41:59 | 19 | 19 | sell 0.005 SOL → JUP | filled | 44s | 1 |  |
| 09:41:59 | 20 | 20 | sell 0.005 SOL → JUP | filled | 38s | 1 |  |
| 09:41:59 | 21 | 21 | sell 0.005 SOL → JUP | filled | 26s | 1 |  |
| 09:41:59 | 22 | 22 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 09:42:00 | 23 | 23 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 09:42:00 | 24 | 24 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 09:42:00 | 25 | 25 | sell 0.005 SOL → JUP | filled | 48s | 1 |  |
| 09:45:31 | 26 | 26 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 09:45:31 | 27 | 27 | sell 0.003 SOL → USDC | filled | 9s | 1 |  |
| 09:45:31 | 28 | 28 | sell 0.0035 SOL → USDC | filled | 9s | 1 |  |
| 09:45:31 | 29 | 29 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 09:47:01 | 30 | 26 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 09:47:01 | 31 | 27 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 09:47:01 | 32 | 28 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 09:47:01 | 33 | 29 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:47:01 | 34 | 30 | sell 0.0025 SOL → USDC | filled | 6s | 1 |  |
| 09:47:01 | 35 | 31 | sell 0.003 SOL → USDC | filled | 5s | 1 |  |
| 09:47:01 | 36 | 32 | sell 0.0035 SOL → USDC | filled | 5s | 1 |  |
| 09:47:01 | 37 | 33 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 09:48:31 | 38 | 26 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 09:48:31 | 39 | 27 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 09:48:31 | 40 | 28 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 09:48:31 | 41 | 29 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 09:48:31 | 42 | 30 | sell 0.0025 SOL → USDC | filled | 26s | 1 |  |
| 09:48:31 | 43 | 31 | sell 0.003 SOL → USDC | filled | 12s | 1 |  |
| 09:48:31 | 44 | 32 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 09:48:31 | 45 | 33 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 09:48:31 | 46 | 34 | sell 0.0025 SOL → USDC | filled | 20s | 1 |  |
| 09:48:31 | 47 | 35 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 09:48:31 | 48 | 36 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 09:48:31 | 49 | 37 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 09:48:31 | 50 | 38 | sell 0.0025 SOL → USDC | filled | 16s | 1 |  |
| 09:48:31 | 51 | 39 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 09:48:31 | 52 | 40 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 09:48:31 | 53 | 41 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 09:50:01 | 54 | 26 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 09:50:01 | 55 | 27 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 09:50:01 | 56 | 28 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 09:50:01 | 57 | 29 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 09:50:01 | 58 | 30 | sell 0.0025 SOL → USDC | filled | 34s | 1 |  |
| 09:50:01 | 59 | 31 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 09:50:01 | 60 | 32 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 09:50:01 | 61 | 33 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 09:50:01 | 62 | 34 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 09:50:01 | 63 | 35 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 09:50:01 | 64 | 36 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 09:50:01 | 65 | 37 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 09:50:01 | 66 | 38 | sell 0.0025 SOL → USDC | filled | 11s | 1 |  |
| 09:50:01 | 67 | 39 | sell 0.003 SOL → USDC | filled | 13s | 1 |  |
| 09:50:01 | 68 | 40 | sell 0.0035 SOL → USDC | filled | 26s | 1 |  |
| 09:50:01 | 69 | 41 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 09:50:01 | 70 | 42 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 09:50:01 | 71 | 43 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 09:50:01 | 72 | 44 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 09:50:01 | 73 | 45 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 09:50:01 | 74 | 46 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 09:50:01 | 75 | 47 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 09:50:01 | 76 | 48 | sell 0.0035 SOL → USDC | filled | 32s | 1 |  |
| 09:50:01 | 77 | 49 | sell 0.004 SOL → USDC | filled | 33s | 1 |  |
| 09:51:31 | 78 | 26 | sell 0.0025 SOL → USDC | filled | 37s | 1 |  |
| 09:51:31 | 79 | 27 | sell 0.003 SOL → USDC | filled | 19s | 1 |  |
| 09:51:31 | 80 | 28 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 09:51:31 | 81 | 29 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 09:51:31 | 82 | 30 | sell 0.0025 SOL → USDC | filled | 25s | 1 |  |
| 09:51:31 | 83 | 31 | sell 0.003 SOL → USDC | filled | 41s | 1 |  |
| 09:51:31 | 84 | 32 | sell 0.0035 SOL → USDC | filled | 36s | 1 |  |
| 09:51:31 | 85 | 33 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 09:51:31 | 86 | 34 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 09:51:31 | 87 | 35 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 09:51:31 | 88 | 36 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 09:51:31 | 89 | 37 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 09:51:31 | 90 | 38 | sell 0.0025 SOL → USDC | filled | 10s | 1 |  |
| 09:51:31 | 91 | 39 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 09:51:31 | 92 | 40 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 09:51:31 | 93 | 41 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 09:51:31 | 94 | 42 | sell 0.0025 SOL → USDC | filled | 28s | 1 |  |
| 09:51:31 | 95 | 43 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 09:51:31 | 96 | 44 | sell 0.0035 SOL → USDC | filled | 37s | 1 |  |
| 09:51:31 | 97 | 45 | sell 0.004 SOL → USDC | filled | 19s | 1 |  |
| 09:51:31 | 98 | 46 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 09:51:31 | 99 | 47 | sell 0.003 SOL → USDC | filled | 28s | 1 |  |
| 09:51:31 | 100 | 48 | sell 0.0035 SOL → USDC | filled | 31s | 1 |  |
| 09:51:31 | 101 | 49 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 09:51:31 | 102 | 50 | sell 0.0025 SOL → USDC | filled | 19s | 1 |  |
| 09:51:31 | 103 | 51 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 09:51:31 | 104 | 52 | sell 0.0035 SOL → USDC | filled | 32s | 1 |  |
| 09:51:31 | 105 | 53 | sell 0.004 SOL → USDC | filled | 42s | 1 |  |
| 09:51:31 | 106 | 54 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 09:51:31 | 107 | 55 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 09:51:31 | 108 | 56 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 09:51:31 | 109 | 57 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 09:54:55 | 110 | 59 | buy 2.6 USDC ← SOL | failed | 37s | 1 | main expired |
| 09:54:55 | 111 | 61 | buy 1.3 USDC ← SOL | failed | 37s | 1 | main expired |
| 09:54:55 | 112 | 62 | buy 3.1 USDC ← SOL | failed | 37s | 1 | main expired |
| 09:54:55 | 113 | 63 | buy 3.1 USDT ← SOL | failed | 37s | 1 | main expired |
| 09:54:55 | 114 | 64 | buy 1.1 USDT ← SOL | failed | 37s | 1 | main expired |
| 09:54:55 | 115 | 65 | buy 3.2 USDC ← SOL | failed | 37s | 1 | main expired |
| 09:57:25 | 116 | 58 | sell 0.02 SOL → USDC | failed | 36s | 1 | main expired |
| 09:57:25 | 117 | 59 | buy 0.02 SOL ← USDC | failed | 44s | 1 | acquire USDC expired |
| 09:57:25 | 118 | 60 | sell 0.03 SOL → USDC | failed | 36s | 1 | main expired |
| 09:57:25 | 119 | 61 | sell 1.2 USDC → SOL | failed | 42s | 1 | acquire USDC expired |
| 09:57:25 | 120 | 62 | sell 3 USDC → USDT | failed | 43s | 1 | acquire USDC expired |
| 09:57:25 | 121 | 63 | sell 3 USDT → USDC | failed | 43s | 1 | acquire USDT expired |
| 09:57:25 | 122 | 64 | sell 1 USDT → USDC | failed | 43s | 1 | acquire USDT expired |
| 09:57:25 | 123 | 65 | sell 3 USDC → USDT | failed | 43s | 1 | acquire USDC expired |
| 09:57:25 | 124 | 66 | sell 0.02 SOL → JUP | failed | 36s | 1 | main expired |
| 09:59:00 | 125 | 67 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 42s | 1 | main expired |
| 09:59:00 | 126 | 68 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 45s | 1 | main expired |
| 09:59:01 | 127 | 69 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 42s | 1 | main expired |
| 09:59:01 | 128 | 70 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 19s | 1 |  |
| 09:59:01 | 129 | 71 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 42s | 1 | main expired |
| 09:59:01 | 130 | 72 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 42s | 1 | main expired |
| 09:59:01 | 131 | 73 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 42s | 1 | main expired |
| 09:59:01 | 132 | 74 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 19s | 1 |  |
| 09:59:01 | 133 | 75 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 42s | 1 | main expired |
| 09:59:01 | 134 | 76 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 42s | 1 | main expired |
| 09:59:01 | 135 | 77 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 42s | 1 | main expired |
| 09:59:01 | 136 | 78 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 19s | 1 |  |
| 09:59:02 | 137 | 79 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 42s | 1 | main expired |
| 09:59:02 | 138 | 80 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 42s | 1 | main expired |
| 09:59:02 | 139 | 81 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 43s | 1 | main expired |
| 09:59:02 | 140 | 82 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 09:59:02 | 141 | 83 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 09:59:02 | 142 | 84 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 09:59:02 | 143 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 20s | 1 |  |
| 09:59:02 | 144 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 16s | 1 |  |
| 09:59:02 | 145 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 22s | 1 |  |
| 09:59:02 | 146 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 16s | 1 |  |
| 09:59:03 | 147 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 16s | 1 |  |
| 09:59:03 | 148 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 16s | 1 |  |
| 09:59:03 | 149 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 16s | 1 |  |
| 09:59:03 | 150 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 17s | 1 |  |
| 09:59:03 | 151 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 17s | 1 |  |
| 09:59:03 | 152 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 21s | 1 |  |
| 09:59:03 | 153 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 22s | 1 |  |
| 09:59:03 | 154 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 22s | 1 |  |
| 09:59:03 | 155 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 23s | 1 |  |
| 09:59:03 | 156 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 22s | 1 |  |
| 09:59:04 | 157 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 22s | 1 |  |
| 09:59:04 | 158 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 63s | 1 |  |
| 09:59:04 | 159 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 63s | 1 |  |
| 09:59:04 | 160 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 19s | 1 |  |
| 09:59:04 | 161 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 19s | 1 |  |
| 09:59:04 | 162 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 19s | 1 |  |
| 09:59:04 | 163 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 19s | 1 |  |
| 09:59:04 | 164 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 19s | 1 |  |
| 09:59:42 | 165 | 67 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 36s | 1 | main expired |
| 09:59:45 | 166 | 68 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 37s | 1 | main expired |
| 09:59:42 | 167 | 69 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 36s | 1 | main expired |
| 09:59:19 | 168 | 70 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 7s | 1 |  |
| 09:59:43 | 169 | 71 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 36s | 1 | main expired |
| 09:59:43 | 170 | 72 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 36s | 1 | main expired |
| 09:59:43 | 171 | 73 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 38s | 1 | main expired |
| 09:59:20 | 172 | 74 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 6s | 1 |  |
| 09:59:43 | 173 | 75 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 38s | 1 | main expired |
| 09:59:44 | 174 | 76 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 37s | 1 | main expired |
| 09:59:44 | 175 | 77 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 37s | 1 | main expired |
| 09:59:21 | 176 | 78 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | filled | 6s | 1 |  |
| 09:59:44 | 177 | 79 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 38s | 1 | main expired |
| 09:59:44 | 178 | 80 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 37s | 1 | main expired |
| 09:59:44 | 179 | 81 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 37s | 1 | main expired |
| 10:03:10 | 180 | 107 | sell 0.005 SOL → EURC | filled | 9s | 1 |  |
| 10:03:10 | 181 | 111 | sell 0.005 SOL → JLP | filled | 12s | 1 |  |
| 10:04:40 | 182 | 107 | sell 0.005 SOL → EURC | filled | 11s | 1 |  |
| 10:04:40 | 183 | 108 | sell 0.005 SOL → EURC | filled | 8s | 1 |  |
| 10:04:40 | 184 | 109 | sell 0.005 SOL → EURC | filled | 8s | 1 |  |
| 10:04:40 | 185 | 110 | sell 0.005 SOL → EURC | filled | 5s | 1 |  |
| 10:04:40 | 186 | 111 | sell 0.00125 SOL → JLP | filled | 11s | 1 |  |
| 10:04:40 | 187 | 112 | sell 0.00125 SOL → JLP | filled | 6s | 1 |  |
| 10:04:40 | 188 | 113 | sell 0.00125 SOL → JLP | filled | 6s | 1 |  |
| 10:04:40 | 189 | 114 | sell 0.00125 SOL → JLP | filled | 12s | 1 |  |

### Rows without an order

3 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |

Scenario orders: 186 (180 main, 6 acquire). Cleanup placed 87 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 09:43:20 | 2 | JUP → SOL (native) | Executed | `0x7a69821f…` [🐞](https://debug.barn.cow.fi/order/0x7a69821fcfe35bb00e4138bc2f3d93854e4186f861972cb09fcc8352f52af734) |
| 09:43:21 | 3 | JUP → SOL (native) | Executed | `0x8362b417…` [🐞](https://debug.barn.cow.fi/order/0x8362b4179c358ca386235a891c0b99af8704c7fb3a48cbd1dd18ebc53119d3bb) |
| 09:43:22 | 4 | JUP → SOL (native) | Executed | `0x5f8ae980…` [🐞](https://debug.barn.cow.fi/order/0x5f8ae980b53b11824d1eeda097cdb703451417c779a3ab203c89277fbd7d20a1) |
| 09:43:23 | 5 | JUP → SOL (native) | Executed | `0xf752e1b9…` [🐞](https://debug.barn.cow.fi/order/0xf752e1b9c59bcd98940935087fa8b9ff33ad281254b17a6607121d559b6360ee) |
| 09:43:24 | 6 | JUP → SOL (native) | Executed | `0x38eaf922…` [🐞](https://debug.barn.cow.fi/order/0x38eaf92289ef16b3450d7bd50f86103df41c78d1bfd468f740de417e6387f2a7) |
| 09:43:25 | 7 | JUP → SOL (native) | Executed | `0x2a17185e…` [🐞](https://debug.barn.cow.fi/order/0x2a17185efc307ebd02e400d8ed50dcdccd52844877d1a258bf1d9eae4a6f2301) |
| 09:43:26 | 8 | JUP → SOL (native) | Executed | `0xa95767f3…` [🐞](https://debug.barn.cow.fi/order/0xa95767f3fbb9e4c592085f50a6d2a9a3cb1b223a4cf92b09916a91872d59b729) |
| 09:43:27 | 9 | JUP → SOL (native) | Executed | `0xfb6c7833…` [🐞](https://debug.barn.cow.fi/order/0xfb6c78333f759e7755f0d8d53208e2c9fa83552d4346da4a3bc2bbd290ac553a) |
| 09:43:31 | 10 | JUP → SOL (native) | Executed | `0xe8a46d50…` [🐞](https://debug.barn.cow.fi/order/0xe8a46d50d60cb347334d047c262d4c536e7e5a13054bbb0f86c33d8a9a724f73) |
| 09:43:31 | 1 | JUP → SOL (native) | Executed | `0xd0c4cff2…` [🐞](https://debug.barn.cow.fi/order/0xd0c4cff2bdd8c63777dfecfd639af1004ac79544b80a6f070b2e40bf4941ec26) |
| 09:43:50 | 11 | JUP → SOL (native) | Executed | `0x2d526a4a…` [🐞](https://debug.barn.cow.fi/order/0x2d526a4a3279540b81c56314127f04647b6404f879183c5b3c247eb621950cab) |
| 09:43:53 | 13 | JUP → SOL (native) | Executed | `0x325ee7a0…` [🐞](https://debug.barn.cow.fi/order/0x325ee7a04774928f5df0b60cdd3790adef22e7d342872edd9895eb1fe3ff7aee) |
| 09:43:56 | 12 | JUP → SOL (native) | Executed | `0x6e5cf378…` [🐞](https://debug.barn.cow.fi/order/0x6e5cf3786243a70ba568562ee2090c0a7760cd9cd0edd1dd8f29ab05a5d760eb) |
| 09:43:56 | 14 | JUP → SOL (native) | Executed | `0x35955f2b…` [🐞](https://debug.barn.cow.fi/order/0x35955f2b636b37f723f55acb03d0524e2ea4a86737cf8be6cd7f9b51e50b882b) |
| 09:43:59 | 19 | JUP → SOL (native) | Executed | `0xca620039…` [🐞](https://debug.barn.cow.fi/order/0xca620039b571453f60884a765dcac6825a259f2c1dfb9258edab5bbd24c0d07e) |
| 09:44:00 | 15 | JUP → SOL (native) | Executed | `0x93806a9c…` [🐞](https://debug.barn.cow.fi/order/0x93806a9c4bc40a42f9ddc92272170f6c832422f96d8f6cda9c5a52070fa9ae26) |
| 09:44:01 | 16 | JUP → SOL (native) | Executed | `0xcc778719…` [🐞](https://debug.barn.cow.fi/order/0xcc77871918dbb1776472507c38bad83957b4c8937add4ca6dc1b83715b2e9b36) |
| 09:44:01 | 17 | JUP → SOL (native) | Executed | `0x56dae937…` [🐞](https://debug.barn.cow.fi/order/0x56dae937b3b1a6c5d8671fab55b9dbad1f0a56aba18b5c0b64684cde5318a081) |
| 09:44:03 | 18 | JUP → SOL (native) | Executed | `0x687e77e5…` [🐞](https://debug.barn.cow.fi/order/0x687e77e52fd1eecadb67f2a2f4ef3015a75b857425f28f7c18de5352e52ab0c3) |
| 09:44:06 | 20 | JUP → SOL (native) | Executed | `0x0d012bce…` [🐞](https://debug.barn.cow.fi/order/0x0d012bced0419aca35852c0297aee08e743dbc0f43a4fcc93443a9a2f7e4406b) |
| 09:44:14 | 21 | JUP → SOL (native) | Executed | `0xa2439452…` [🐞](https://debug.barn.cow.fi/order/0xa2439452a0a6fbf1b01212fed02f7fe0d285d80e647e4a93463e992df7c22a56) |
| 09:44:28 | 22 | JUP → SOL (native) | Executed | `0x3b50b669…` [🐞](https://debug.barn.cow.fi/order/0x3b50b669e0e0afa38abb4990b3002bbba18ed1e6029130b574bf1dab4d0d84ef) |
| 09:44:31 | 24 | JUP → SOL (native) | Executed | `0x5044c606…` [🐞](https://debug.barn.cow.fi/order/0x5044c606534358176e1dcc70455f588b986449134222aad14f3e025cf793d02c) |
| 09:44:31 | 23 | JUP → SOL (native) | Executed | `0x8a5555fa…` [🐞](https://debug.barn.cow.fi/order/0x8a5555fad91ad340c2a91dd3c63c6f6457c045d0bc9127eaf0ff64405326f43d) |
| 09:44:35 | 25 | JUP → SOL (native) | Executed | `0x2706987c…` [🐞](https://debug.barn.cow.fi/order/0x2706987c96833e7d54d1727743ce25ec71837836913e9df0ea9ff8039ba710ad) |
| 09:52:15 | 27 | USDC → SOL (native) | Executed | `0x93b565f5…` [🐞](https://debug.barn.cow.fi/order/0x93b565f5442d2d6abd858eab3c6773b744fd4d8a35c746dfc684134b1981e8ae) |
| 09:52:16 | 28 | USDC → SOL (native) | Executed | `0xa5b4200c…` [🐞](https://debug.barn.cow.fi/order/0xa5b4200c8834c45dcf97bcd7e5824c0912c4369fc5839b9dc25e90965aa5b493) |
| 09:52:18 | 29 | USDC → SOL (native) | Executed | `0x4443fff5…` [🐞](https://debug.barn.cow.fi/order/0x4443fff550586da33fb5ae946827d4409994f111288c04e428831b31868b8de0) |
| 09:52:19 | 30 | USDC → SOL (native) | Executed | `0x5633b80e…` [🐞](https://debug.barn.cow.fi/order/0x5633b80e34fb61cda2701d81c8a462e7c07c72ff34be19d7f1ea2ced8a4a057b) |
| 09:52:20 | 31 | USDC → SOL (native) | Executed | `0xea36257d…` [🐞](https://debug.barn.cow.fi/order/0xea36257da6647f4665e58cc786859b6bd3ae98e3ddd112a51ae04349a0b49f9d) |
| 09:52:20 | 32 | USDC → SOL (native) | Executed | `0x3a71fdd5…` [🐞](https://debug.barn.cow.fi/order/0x3a71fdd5154b994ea58d201f11fb77d4147a66b54ec372dceeb9b423d94f479d) |
| 09:52:21 | 33 | USDC → SOL (native) | Executed | `0xecad361e…` [🐞](https://debug.barn.cow.fi/order/0xecad361ef60e34e48ea231be33060cf7ddd02948c3678b4340379e82c0ee43fe) |
| 09:52:23 | 34 | USDC → SOL (native) | Executed | `0xbd2c8b22…` [🐞](https://debug.barn.cow.fi/order/0xbd2c8b2272da373f1a914088c11ba0b832e8e1d6c746eae0e68393f83159afff) |
| 09:52:25 | 35 | USDC → SOL (native) | Executed | `0xdbf5301a…` [🐞](https://debug.barn.cow.fi/order/0xdbf5301aaa3984e4fa79193c9dc47efd97b7b4b41bac586472ea3a226a24e1f1) |
| 09:52:26 | 26 | USDC → SOL (native) | Executed | `0xcb423d34…` [🐞](https://debug.barn.cow.fi/order/0xcb423d340711fdd3a70b1d3df850dd7f45d9a3560bcbbfee5aaaf48092f3d8d1) |
| 09:52:46 | 36 | USDC → SOL (native) | Executed | `0xa3fbac7e…` [🐞](https://debug.barn.cow.fi/order/0xa3fbac7e977b89c9938baf452e18e7df0d50bcaacc06a6753d5e1063ef87b5cf) |
| 09:52:48 | 37 | USDC → SOL (native) | Executed | `0xb20eded6…` [🐞](https://debug.barn.cow.fi/order/0xb20eded6d4b2165a6609c0714ee8c798e09f28fc10cd8a39b365e4cfb7ba41f9) |
| 09:52:49 | 38 | USDC → SOL (native) | Executed | `0xf5e2ef65…` [🐞](https://debug.barn.cow.fi/order/0xf5e2ef65259cbf0b419c77744b99a921a9ca7977bee202f15ff2f38ebd120f1c) |
| 09:52:49 | 40 | USDC → SOL (native) | Executed | `0x0c3e7245…` [🐞](https://debug.barn.cow.fi/order/0x0c3e724599c7bf619cabf57cbec069b7444cb1a75c0d56657334e1cc92ce9cc0) |
| 09:52:52 | 41 | USDC → SOL (native) | Executed | `0x4f81a76e…` [🐞](https://debug.barn.cow.fi/order/0x4f81a76e183eb1fd9857779874799ba36369c228a85cfd96f2b4d7d84761a808) |
| 09:52:52 | 39 | USDC → SOL (native) | Executed | `0xaf8b7c18…` [🐞](https://debug.barn.cow.fi/order/0xaf8b7c18865833e5a26371a369fcdfe49541dc85bd2e14e097b9253e6cedc17c) |
| 09:52:53 | 42 | USDC → SOL (native) | Executed | `0x3069f819…` [🐞](https://debug.barn.cow.fi/order/0x3069f819c019403a9eab1a4068b68209b8658a9890cd3fa301e934a1e5fd01b7) |
| 09:52:55 | 43 | USDC → SOL (native) | Executed | `0xdce5b621…` [🐞](https://debug.barn.cow.fi/order/0xdce5b6213fa054d5748b62e84fb421eff49bae5ac05b6f4fc1681df53aaef6fb) |
| 09:52:56 | 44 | USDC → SOL (native) | Executed | `0x95e7507c…` [🐞](https://debug.barn.cow.fi/order/0x95e7507cde2bbb86d2b0cde2ffb2ddabb026bf683946b11f4040c4450125e58a) |
| 09:52:58 | 45 | USDC → SOL (native) | Executed | `0x2b6baad1…` [🐞](https://debug.barn.cow.fi/order/0x2b6baad1b2e186247a033957ee495825c1c9a6c0ebc7b884e6cc688dc2420ae8) |
| 09:53:11 | 46 | USDC → SOL (native) | Executed | `0x86e6d8d4…` [🐞](https://debug.barn.cow.fi/order/0x86e6d8d4659ae3a4b351bb17a2e84dec1456ca205bb5b94fd7b6f8c4a9cd2555) |
| 09:53:16 | 47 | USDC → SOL (native) | Executed | `0xbea4471f…` [🐞](https://debug.barn.cow.fi/order/0xbea4471f1f46468c7e217f62cb14d23c65e2fa1a4c48eb54044ee6b1d3f5fca0) |
| 09:53:17 | 48 | USDC → SOL (native) | Executed | `0xc687d358…` [🐞](https://debug.barn.cow.fi/order/0xc687d3585ace0ae387d2b95b0758a5562cb650f6f85e1cabe634f26cdf625ddd) |
| 09:53:18 | 49 | USDC → SOL (native) | Executed | `0x12325d9a…` [🐞](https://debug.barn.cow.fi/order/0x12325d9a915b296606ac60d4cb70a86be07ce0026bd9e82f7a54be7571b6f210) |
| 09:53:19 | 50 | USDC → SOL (native) | Executed | `0x4d81bf83…` [🐞](https://debug.barn.cow.fi/order/0x4d81bf832a1c70abb18f54a70dab5c7d59118f0df70eabd4bf8fad93a170f631) |
| 09:53:33 | 51 | USDC → SOL (native) | Executed | `0x3a756a5d…` [🐞](https://debug.barn.cow.fi/order/0x3a756a5d4a67aebd0c1f0b75449bd24e0d385ef16cba14021999aae24cd99faa) |
| 09:53:35 | 52 | USDC → SOL (native) | Executed | `0xa3d426fb…` [🐞](https://debug.barn.cow.fi/order/0xa3d426fb2a72a94f45f6568b225b528049f9ff11949c85bab1462ef664540bd1) |
| 09:53:38 | 53 | USDC → SOL (native) | Executed | `0xbd41968a…` [🐞](https://debug.barn.cow.fi/order/0xbd41968a8ace097012cafe6fb17e35e63d65f6b01fcb4680078dbc6e4a4c9640) |
| 09:53:41 | 54 | USDC → SOL (native) | Executed | `0x2e26c71f…` [🐞](https://debug.barn.cow.fi/order/0x2e26c71fda4b288637421e1ac9a6554d7ed91b4e935e84b8add3f3ff5eba4dca) |
| 09:53:51 | 55 | USDC → SOL (native) | Executed | `0x4bb2a6ac…` [🐞](https://debug.barn.cow.fi/order/0x4bb2a6ac9b4b7244262efe6d93ace350b2f1209d410f2731f947cf0d82b64b99) |
| 09:54:02 | 56 | USDC → SOL (native) | Executed | `0x048ae3da…` [🐞](https://debug.barn.cow.fi/order/0x048ae3da5b897fce8b947572f4e9e37a10cb52c61795ab8bddeee7ff1758984a) |
| 09:54:08 | 57 | USDC → SOL (native) | Executed | `0x0b11e7a2…` [🐞](https://debug.barn.cow.fi/order/0x0b11e7a2abdfa07da2651607cd0679ba9c217e97bfc404989c62d0741a1366ce) |
| 10:00:27 | 70 | PUMP → SOL (native) | Executed | `0x5cf506a1…` [🐞](https://debug.barn.cow.fi/order/0x5cf506a15be933622c1a012aefd81ad390ce8a3d74704736fc7e388b9ad28afe) |
| 10:00:31 | 74 | SPYx → SOL (native) | Executed | `0x1583d089…` [🐞](https://debug.barn.cow.fi/order/0x1583d0896adb771a10813c630b8b2ac18bfc6b4da76874edc87fc8b326677234) |
| 10:00:38 | 78 | MU → SOL (native) | Executed | `0xc4e51591…` [🐞](https://debug.barn.cow.fi/order/0xc4e51591b04cb206aa1a839b946e727d87fc4b784922ff9e9d7a712ed0b26443) |
| 10:00:49 | 85 | Bonk → SOL (native) | Executed | `0x2e180276…` [🐞](https://debug.barn.cow.fi/order/0x2e18027627e60eda9f77e1847838668e47227f971bb8a7bbef239758a02bf86b) |
| 10:00:53 | 88 | JitoSOL → SOL (native) | Executed | `0x06641f2e…` [🐞](https://debug.barn.cow.fi/order/0x06641f2e35e5f29d6a8f49ad5b8692dc1517d98798aecef69e877b3e3e4db211) |
| 10:00:56 | 86 | $WIF → SOL (native) | Executed | `0x16e439fe…` [🐞](https://debug.barn.cow.fi/order/0x16e439fe490bfdb33a17c702ecaf59bad552eed2d6ee680c9fa887e521670dbb) |
| 10:00:57 | 87 | POPCAT → SOL (native) | Executed | `0x2658a1c0…` [🐞](https://debug.barn.cow.fi/order/0x2658a1c07d36b40e9794128eefd652cefda930135bbf5a4d2d4c243c2943bff0) |
| 10:01:00 | 91 | cbBTC → SOL (native) | Executed | `0xa68d3ce4…` [🐞](https://debug.barn.cow.fi/order/0xa68d3ce4d9404dc0418350326f3ea1728cbc25d1b06951804f0b83c806d95e5f) |
| 10:01:00 | 89 | mSOL → SOL (native) | Executed | `0x5cffc2bd…` [🐞](https://debug.barn.cow.fi/order/0x5cffc2bd5dcdf4ef89de853406da5d62d8aa091e6b2560435f316d376ffce39e) |
| 10:01:00 | 92 | USDe → SOL (native) | Executed | `0x22260a09…` [🐞](https://debug.barn.cow.fi/order/0x22260a0915183ea185fa3746384e7ae9c93d4d05045ce6e82e7cdb1bcb4f30cf) |
| 10:01:03 | 90 | JupSOL → SOL (native) | Executed | `0x15cb52df…` [🐞](https://debug.barn.cow.fi/order/0x15cb52dfe638b4c036e6036794abb7aed050a0a57efe6f20b617973080d8d5a3) |
| 10:01:09 | 94 | USDY → SOL (native) | Executed | `0xc46932cf…` [🐞](https://debug.barn.cow.fi/order/0xc46932cfb79a9d40de0ec76474175bc06c42c812b85028e1ee1bdbe834a8fde4) |
| 10:01:13 | 93 | EURC → SOL (native) | Executed | `0x1575f6cd…` [🐞](https://debug.barn.cow.fi/order/0x1575f6cd1d9d27fd1ca03c73adb075382232b52bafa00e81ad7768e9204cd428) |
| 10:01:21 | 95 | JLP → SOL (native) | Executed | `0xc202225d…` [🐞](https://debug.barn.cow.fi/order/0xc202225df130810ba111e9a82419c5d5ee7299f55d0454755b6b0c196f710f01) |
| 10:01:23 | 96 | INF → SOL (native) | Executed | `0xaa74ab87…` [🐞](https://debug.barn.cow.fi/order/0xaa74ab8765861b61e85cf05cc8ffa20f58adfde9781a14f7bee9520f18e812d6) |
| 10:01:28 | 97 | ETH → SOL (native) | Executed | `0x32f6bbc9…` [🐞](https://debug.barn.cow.fi/order/0x32f6bbc991927f1ef3be5a81e0b84356376f836c5528c3d4f0cbb451b67c0284) |
| 10:01:28 | 98 | BNB → SOL (native) | Executed | `0x1c77631a…` [🐞](https://debug.barn.cow.fi/order/0x1c77631a7330de6dece44f73158275a3a399761c545d19353e72243fbb438ab2) |
| 10:01:38 | 99 | XAUt0 → SOL (native) | Executed | `0x596b9b8b…` [🐞](https://debug.barn.cow.fi/order/0x596b9b8ba61b90dfa27aa61aad5d7980e343b3c0ea7d98599d7969df0a1c1a8f) |
| 10:01:50 | 102 | Fartcoin → SOL (native) | Executed | `0xee626535…` [🐞](https://debug.barn.cow.fi/order/0xee62653537d934b451c58d61cc0dca2a75b26ff50a72b0cfcf7af00200719989) |
| 10:01:51 | 100 | GLDx → SOL (native) | Executed | `0x41b33fba…` [🐞](https://debug.barn.cow.fi/order/0x41b33fbae6652823dac87332571fe7e66b900d1d47f27f81c8d79afab4cf85fe) |
| 10:01:54 | 101 | EUROP → SOL (native) | Executed | `0xfce7f665…` [🐞](https://debug.barn.cow.fi/order/0xfce7f665b37fd44603ecf777665876a76eb4082ec5672269a340c25d4b5a8a97) |
| 10:01:55 | 104 | BOME → SOL (native) | Executed | `0x7d5b09f6…` [🐞](https://debug.barn.cow.fi/order/0x7d5b09f6d7b5615386feee401d01fb7fef03282bb09e704bfa9b82aa6fef603f) |
| 10:02:17 | 105 | hyloSOL → SOL (native) | Executed | `0x6a454c21…` [🐞](https://debug.barn.cow.fi/order/0x6a454c219abaae1fd43390acadfe4971485b5cfaf6ed2f2f84aff42854d5d2fa) |
| 10:02:18 | 106 | PSOL → SOL (native) | Executed | `0x2ba1eb8c…` [🐞](https://debug.barn.cow.fi/order/0x2ba1eb8cd860fbbc835404a39f2425ce0116434ea1587d140b2ea82723f0b622) |
| 10:02:25 | 103 | MEW → SOL (native) | Executed | `0x96ddd594…` [🐞](https://debug.barn.cow.fi/order/0x96ddd594db270d71d069725252dfb1ba9dae04c74e23f9c92cef5d26226f4098) |
| 10:05:03 | 107 | EURC → SOL (native) | Executed | `0xc6546620…` [🐞](https://debug.barn.cow.fi/order/0xc654662006ebd184a1dbb561ffd45f78fd4bf29e2f19131b945ff22001d03514) |
| 10:05:04 | 108 | EURC → SOL (native) | Executed | `0x0e64ec28…` [🐞](https://debug.barn.cow.fi/order/0x0e64ec28660d1767a54b143c28c2fcc6993bb469a13ded4d200930f022776485) |
| 10:05:05 | 109 | EURC → SOL (native) | Executed | `0xe5b98ff9…` [🐞](https://debug.barn.cow.fi/order/0xe5b98ff95eae6f1ea57f2c30ee7b124ee0bc21809b79e25cd43eebcc50e50b1b) |
| 10:05:06 | 110 | EURC → SOL (native) | Executed | `0xdef0a348…` [🐞](https://debug.barn.cow.fi/order/0xdef0a348419198f0a13579e6e07f10c87753afe10f2eea63b14ea46d3b186e06) |
| 10:05:07 | 111 | JLP → SOL (native) | Executed | `0x835b57a6…` [🐞](https://debug.barn.cow.fi/order/0x835b57a6d3f4713a7d5f0f9d7c4dacd5f3b8447eff02b9a309f858745544693a) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 147 | 79.0% |
| expired: never created on-chain (winner found, creation blockhash expired) | 39 | 21.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 8s | 17s | 26s | 64s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| AuwL…YzVj | 147 | 100.0% | 65 | 105,109 | 8s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| grafiks | 499 | 125 | 118 | 94.4% | 1 | 12 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 282 times
- Orders filtered for `in_flight`: 32 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 165 | 144 | 87.3% |
| buy | 21 | 3 | 14.3% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 94 | 84 | 89.4% |
| wSOL → JUP | 26 | 25 | 96.2% |
| wSOL → EURC | 6 | 6 | 100.0% |
| wSOL → JLP | 6 | 6 | 100.0% |
| wSOL → USDT | 4 | 0 | 0.0% |
| wSOL → PAID | 2 | 0 | 0.0% |
| wSOL → ANSEM | 2 | 0 | 0.0% |
| wSOL → USDG | 2 | 0 | 0.0% |
| wSOL → PYUSD | 2 | 0 | 0.0% |
| wSOL → CASH | 2 | 0 | 0.0% |
| wSOL → CRCLx | 2 | 0 | 0.0% |
| wSOL → USDv | 2 | 0 | 0.0% |
| wSOL → SKHY | 2 | 0 | 0.0% |
| wSOL → NVDAx | 2 | 0 | 0.0% |
| wSOL → SPCX | 2 | 0 | 0.0% |
| wSOL → SPCXx | 2 | 0 | 0.0% |
| wSOL → TSLAx | 2 | 0 | 0.0% |
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
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
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
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 5 | 5 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 5 | 5 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 5 | 5 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 5 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 4 | 4 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 4 | 4 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 4 | 4 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 4 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 3 | 3 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 3 | 3 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 3 | 3 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 3 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 3 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 3 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 3 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 3 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 2 | 2 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 2 | 2 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 0 | 0.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 2 | 0 | 0.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 2 | 0 | 0.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 0 | 0.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 2 | 0 | 0.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 0 | 0.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 2 | 0 | 0.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 2 | 0 | 0.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 2 | 0 | 0.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 2 | 0 | 0.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 2 | 0 | 0.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 0 | 0.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 0 | 0.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 0 | 0.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 2 | 0 | 0.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 2 | 0 | 0.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 0 | 0.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 2 | 0 | 0.0% |
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
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
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
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 0 | 0.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 0 | 0.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 0 | 0.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |
| `52CfB35yd7jyGA6U2198WmCDVV8wi3Xg48S4MgMDvKR1` | 1 | 1 | 100.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 1 | 100.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 1 | 100.0% |
| `FCMwP3inMPkh6iUYYee8F9kHE8BtMUPCTAJ6ifPfo7Vy` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 39 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 09:54:57 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xcc62d57b…` [🐞](https://debug.barn.cow.fi/order/0xcc62d57bf3c17f33755e39a9c9960695e0fa10b0cd661754e0db692efb5a6271) |
| 09:54:57 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x4dee6b56…` [🐞](https://debug.barn.cow.fi/order/0x4dee6b56f1a90be3f86616c2dbae4d8786d6f4efdfa9d86f283f34eaf1083711) |
| 09:54:57 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0x166b380e…` [🐞](https://debug.barn.cow.fi/order/0x166b380ea22bf31fef1a1f9085698f36b742dd0e2f7b89fd77b7b7afa5d6023e) |
| 09:54:57 | wSOL → USDC | buy | Winner too late: creation blockhash expired | `0xaa5aebf6…` [🐞](https://debug.barn.cow.fi/order/0xaa5aebf6af28fe97ad6f997b3723dcf7a98f3ec722cdac051452866826ce423f) |
| 09:54:58 | wSOL → USDT | buy | Winner too late: creation blockhash expired | `0xdf818f0c…` [🐞](https://debug.barn.cow.fi/order/0xdf818f0c102be59613fb267984ceb052bff25d466985bbfbcd6ded315aa97df5) |
| 09:54:58 | wSOL → USDT | buy | Winner too late: creation blockhash expired | `0x8d13a32e…` [🐞](https://debug.barn.cow.fi/order/0x8d13a32e2b85896539a5069ae8dd81319335c1694d8c55896cf0d98a08eabb88) |
| 09:57:26 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x466b42d0…` [🐞](https://debug.barn.cow.fi/order/0x466b42d08bfb261c89c535994521ecd2436cef25b5dac3e3d95cb0db7cc6bc1d) |
| 09:57:26 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x9e5e5b31…` [🐞](https://debug.barn.cow.fi/order/0x9e5e5b31a3fe4637680c63018b0cab1dfbca3630d768aab368e612fbc3517c1c) |
| 09:57:26 | wSOL → JUP | sell | Winner too late: creation blockhash expired | `0x8da9cb66…` [🐞](https://debug.barn.cow.fi/order/0x8da9cb6672a3fe9d79d5cc4d5443326864503ab2bbfc37aada3f19c1b4ae574f) |
| 09:57:32 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x91d282aa…` [🐞](https://debug.barn.cow.fi/order/0x91d282aad261daab22288149f40e30f31940f6aa1de85ab4f9f6ff8b284f4cb2) |
| 09:57:33 | wSOL → USDT | sell | Winner too late: creation blockhash expired | `0x6dc67440…` [🐞](https://debug.barn.cow.fi/order/0x6dc67440b0c606aabf78b44b48cce147171e32d922f3d5038e1e10bcabe98f42) |
| 09:57:34 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x7e53e67e…` [🐞](https://debug.barn.cow.fi/order/0x7e53e67e739c8668db1ac7f12c5b0cec332323cae1a8c561b1fc151806251c4d) |
| 09:57:34 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0x1fd235d1…` [🐞](https://debug.barn.cow.fi/order/0x1fd235d17584321340ef88b8f2979188fb1d547854b197879d9ec5b3aea89ac7) |
| 09:57:34 | wSOL → USDT | sell | Winner too late: creation blockhash expired | `0x3dec9466…` [🐞](https://debug.barn.cow.fi/order/0x3dec94665ea6adeb5b5b2df9d07a929642d984f473ea002c2b498a333fa1bde5) |
| 09:57:34 | wSOL → USDC | sell | Winner too late: creation blockhash expired | `0xeef259ff…` [🐞](https://debug.barn.cow.fi/order/0xeef259ffeeb28c93c2c4e198fc999bc94c1aa4682d19fc949258b1d6579203e7) |
| 09:59:09 | wSOL → PAID | sell | Winner too late: creation blockhash expired | `0x68579ee0…` [🐞](https://debug.barn.cow.fi/order/0x68579ee0ad927f6a0b9cc1698ec2da69202f6975a63ac18ef60346d961fa94e7) |
| 09:59:09 | wSOL → ANSEM | sell | Winner too late: creation blockhash expired | `0x10ac9862…` [🐞](https://debug.barn.cow.fi/order/0x10ac9862b49e4999595346b4fa4cf9854af749daf523c9bcd7c6cce03ef231a4) |
| 09:59:09 | wSOL → USDG | sell | Winner too late: creation blockhash expired | `0x15b143e8…` [🐞](https://debug.barn.cow.fi/order/0x15b143e8ca9c20abc8419983d60f575e0df7b31224d0607525bc357106de079a) |
| 09:59:09 | wSOL → PYUSD | sell | Winner too late: creation blockhash expired | `0x781b98fd…` [🐞](https://debug.barn.cow.fi/order/0x781b98fd01f3b2511e7fc116cf6de06eee7e7c25045510334d711e17eaddc8cc) |
| 09:59:09 | wSOL → CASH | sell | Winner too late: creation blockhash expired | `0xd5ce3f3f…` [🐞](https://debug.barn.cow.fi/order/0xd5ce3f3fb6ad081a26c7544d1d740005551fb70853567b4402f2a4bb3322bd23) |
| 09:59:09 | wSOL → CRCLx | sell | Winner too late: creation blockhash expired | `0xd613f0af…` [🐞](https://debug.barn.cow.fi/order/0xd613f0af7c54afea5ca50b0920d9fdafd762ee06590ad7a034d0f61384c13e66) |
| 09:59:09 | wSOL → USDv | sell | Winner too late: creation blockhash expired | `0xee94b178…` [🐞](https://debug.barn.cow.fi/order/0xee94b178d3eecc6d16c73e2c3a1e64e552e231a7efcc2736c9fd57ce9cd99730) |
| 09:59:09 | wSOL → SKHY | sell | Winner too late: creation blockhash expired | `0x80d6aec7…` [🐞](https://debug.barn.cow.fi/order/0x80d6aec703b6d2130afa7bcdfd19433035290c53dbe2824a33ef2da1aa28a1c4) |
| 09:59:09 | wSOL → NVDAx | sell | Winner too late: creation blockhash expired | `0x0ec4425b…` [🐞](https://debug.barn.cow.fi/order/0x0ec4425b09e9f81b9f336c5d118fa2799f6c74d3c8cb20d3244903b7ed7ff44c) |
| 09:59:10 | wSOL → SPCX | sell | Winner too late: creation blockhash expired | `0x28e1282c…` [🐞](https://debug.barn.cow.fi/order/0x28e1282c09faf82a2f2489f543d8c28d9301350bb6031f9b1b8b5865f09d93e4) |
| 09:59:10 | wSOL → SPCXx | sell | Winner too late: creation blockhash expired | `0x6ade6eed…` [🐞](https://debug.barn.cow.fi/order/0x6ade6eede7777d97faeee16988a01d8d381ba3442be93669b033612511754367) |
| 09:59:10 | wSOL → TSLAx | sell | Winner too late: creation blockhash expired | `0xba2a816d…` [🐞](https://debug.barn.cow.fi/order/0xba2a816d7c96d26bb98310dbbe356de58f901242067c600aa694b3315fbfd225) |
| 09:59:43 | wSOL → USDG | buy | Winner too late: creation blockhash expired | `0x96a10fe8…` [🐞](https://debug.barn.cow.fi/order/0x96a10fe84686b7ff509ee4e6e82c43706e09ed91b480212f012e8f210947b338) |
| 09:59:44 | wSOL → PYUSD | buy | Winner too late: creation blockhash expired | `0xf9f989b7…` [🐞](https://debug.barn.cow.fi/order/0xf9f989b7ef0cb7db8dc757d024c0b2a74635f9ba1aac2e1d816563515db47eda) |
| 09:59:44 | wSOL → ANSEM | buy | Winner too late: creation blockhash expired | `0x40eae338…` [🐞](https://debug.barn.cow.fi/order/0x40eae33836ece9869a332542fdc1f1ccf79272f5d94a3213ac6670cfe70a0b28) |
| 09:59:44 | wSOL → CASH | buy | Winner too late: creation blockhash expired | `0x4a125f1c…` [🐞](https://debug.barn.cow.fi/order/0x4a125f1cf3f0130fd1112ee6cec9cc1fa3898ac84750d4d36ec04a9536ce8f9f) |
| 09:59:46 | wSOL → CRCLx | buy | Winner too late: creation blockhash expired | `0x44f71f41…` [🐞](https://debug.barn.cow.fi/order/0x44f71f413bcd2b1bc4c65c4c36198c2c6895a39bfd156d02e6b3cff3d338f95d) |
| 09:59:46 | wSOL → USDv | buy | Winner too late: creation blockhash expired | `0x7eafbd34…` [🐞](https://debug.barn.cow.fi/order/0x7eafbd3473a5931dc642d6f83985ec3e7f2f48b2f38f8b932ac204e920d4dd58) |
| 09:59:46 | wSOL → SKHY | buy | Winner too late: creation blockhash expired | `0x9b3f5d7e…` [🐞](https://debug.barn.cow.fi/order/0x9b3f5d7e59a432f9401db1e1300b2dca14c9210f4da7ee45815e177831a8728c) |
| 09:59:46 | wSOL → NVDAx | buy | Winner too late: creation blockhash expired | `0xe01b2624…` [🐞](https://debug.barn.cow.fi/order/0xe01b2624073a31d85104c49d1601b6d97bd10536294e41df35c7d04f1ad18ffc) |
| 09:59:47 | wSOL → SPCXx | buy | Winner too late: creation blockhash expired | `0x576d116e…` [🐞](https://debug.barn.cow.fi/order/0x576d116e1068fd6a734403a3008aabe9a77310b1766a121aee962b3f3c8c61ab) |
| 09:59:47 | wSOL → SPCX | buy | Winner too late: creation blockhash expired | `0xdd2149b9…` [🐞](https://debug.barn.cow.fi/order/0xdd2149b96898bfd5431eb271061bd6563362374539e2045a77af9c2fbd7c41e7) |
| 09:59:47 | wSOL → TSLAx | buy | Winner too late: creation blockhash expired | `0xa7d5bb87…` [🐞](https://debug.barn.cow.fi/order/0xa7d5bb87075664acfb7ebda93d6fe3670ea42f2f30e9eb40cd8700e539da2134) |
| 09:59:47 | wSOL → PAID | buy | Winner too late: creation blockhash expired | `0x9d31e261…` [🐞](https://debug.barn.cow.fi/order/0x9d31e261f44f6b66f1b65d220049d89a34988f0ae0732b1df1dbfa7320794a1b) |
