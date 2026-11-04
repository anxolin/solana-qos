# Solana QoS report: 2026-11-04-12-49-composite-arc-run

Barn, orders created between `2026-11-04T12:49:57.613Z` and `2026-11-04T13:19:11.540Z`. Data fetched 2026-11-04T13:21:43+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 136 |
| Orders executed | **88** (64.7%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 84 |
| Settlement txs | 88 |

## Scenario results

Target solver: `arc`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-11-04T12:49:57.613Z | 2026-11-04T12:50:09.468Z | 2/6 | 4 | 2 | 2 | 33.3% |
| solver-same-direction-25 | 2026-11-04T12:50:26.572Z | 2026-11-04T12:51:47.151Z | 14/25 | 11 | 25 | 14 | 56.0% |
| solver-burst-sell | 2026-11-04T12:54:49.229Z | 2026-11-04T13:02:13.131Z | 52/84 | 32 | 84 | 52 | 61.9% |
| solver-cow | 2026-11-04T13:06:27.472Z | 2026-11-04T13:09:13.190Z | 0/15 | 15 | 0 | 0 | 0.0% |
| solver-token-coverage | 2026-11-04T13:09:34.686Z | 2026-11-04T13:11:07.288Z | 20/52 | 32 | 25 | 20 | 38.5% |

## Scenario

88 of 182 scenario rows completed. 0 retries, 31 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 12:49:57 | 1 | 1 | sell 0.005 SOL → USDC | filled | 6s | 1 |  |
| 12:49:57 | 2 | 2 | sell 0.005 SOL → USDT | filled | 6s | 1 |  |
| 12:49:57 | 3 | 3 | sell 0.5 JUP → USDC | failed | 1s | 0 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 12:50:03 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:50:03 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:49:59 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 8s | 0 | acquire JUP error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:50:26 | 7 | 4 | sell 0.005 SOL → JUP | failed | 73s | 1 | main timeout |
| 12:50:26 | 8 | 5 | sell 0.005 SOL → JUP | filled | 74s | 1 |  |
| 12:50:26 | 9 | 6 | sell 0.005 SOL → JUP | filled | 47s | 1 |  |
| 12:50:26 | 10 | 7 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 12:50:26 | 11 | 8 | sell 0.005 SOL → JUP | filled | 44s | 1 |  |
| 12:50:26 | 12 | 9 | sell 0.005 SOL → JUP | filled | 51s | 1 |  |
| 12:50:26 | 13 | 10 | sell 0.005 SOL → JUP | filled | 56s | 1 |  |
| 12:50:26 | 14 | 11 | sell 0.005 SOL → JUP | filled | 63s | 1 |  |
| 12:50:26 | 15 | 12 | sell 0.005 SOL → JUP | failed | 77s | 1 | main timeout |
| 12:50:26 | 16 | 13 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 12:50:26 | 17 | 14 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 12:50:26 | 18 | 15 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 12:50:26 | 19 | 16 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 12:50:26 | 20 | 17 | sell 0.005 SOL → JUP | filled | 76s | 1 |  |
| 12:50:26 | 21 | 18 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 12:50:26 | 22 | 19 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 12:50:26 | 23 | 20 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 12:50:26 | 24 | 21 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 12:50:26 | 25 | 22 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:50:26 | 26 | 23 | sell 0.005 SOL → JUP | filled | 38s | 1 |  |
| 12:50:26 | 27 | 24 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 12:50:26 | 28 | 25 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 12:50:26 | 29 | 26 | sell 0.005 SOL → JUP | filled | 21s | 1 |  |
| 12:50:26 | 30 | 27 | sell 0.005 SOL → JUP | filled | 27s | 1 |  |
| 12:50:26 | 31 | 28 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 12:54:49 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 12:54:49 | 33 | 30 | sell 0.003 SOL → USDC | filled | 6s | 1 |  |
| 12:54:49 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 11s | 1 |  |
| 12:54:49 | 35 | 32 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 12:56:19 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 44s | 1 |  |
| 12:56:19 | 37 | 30 | sell 0.003 SOL → USDC | filled | 34s | 1 |  |
| 12:56:19 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 39s | 1 |  |
| 12:56:19 | 39 | 32 | sell 0.004 SOL → USDC | filled | 32s | 1 |  |
| 12:56:19 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 26s | 1 |  |
| 12:56:19 | 41 | 34 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 12:56:19 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 12:56:19 | 43 | 36 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 12:57:49 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 73s | 1 | main timeout |
| 12:57:49 | 45 | 30 | sell 0.003 SOL → USDC | filled | 79s | 1 |  |
| 12:57:49 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 60s | 1 |  |
| 12:57:49 | 47 | 32 | sell 0.004 SOL → USDC | filled | 48s | 1 |  |
| 12:57:49 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:57:49 | 49 | 34 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:57:49 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 66s | 1 |  |
| 12:57:49 | 51 | 36 | sell 0.004 SOL → USDC | filled | 56s | 1 |  |
| 12:57:49 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 44s | 1 |  |
| 12:57:49 | 53 | 38 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 12:57:49 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 12:57:49 | 55 | 40 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 12:57:49 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 40s | 1 |  |
| 12:57:49 | 57 | 42 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 12:57:49 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 12:57:49 | 59 | 44 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 12:59:19 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:59:19 | 61 | 30 | sell 0.003 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:59:19 | 62 | 31 | sell 0.0035 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:59:19 | 63 | 32 | sell 0.004 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:59:19 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:59:19 | 65 | 34 | sell 0.003 SOL → USDC | filled | 66s | 1 |  |
| 12:59:19 | 66 | 35 | sell 0.0035 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:59:19 | 67 | 36 | sell 0.004 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:59:19 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:59:19 | 69 | 38 | sell 0.003 SOL → USDC | filled | 77s | 1 |  |
| 12:59:19 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 57s | 1 |  |
| 12:59:19 | 71 | 40 | sell 0.004 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:59:19 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:59:19 | 73 | 42 | sell 0.003 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:59:19 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 61s | 1 |  |
| 12:59:19 | 75 | 44 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 12:59:19 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 50s | 1 |  |
| 12:59:19 | 77 | 46 | sell 0.003 SOL → USDC | filled | 40s | 1 |  |
| 12:59:19 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 35s | 1 |  |
| 12:59:19 | 79 | 48 | sell 0.004 SOL → USDC | filled | 29s | 1 |  |
| 12:59:19 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 46s | 1 |  |
| 12:59:19 | 81 | 50 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 12:59:19 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 12:59:19 | 83 | 52 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 13:00:49 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 13:00:49 | 85 | 30 | sell 0.003 SOL → USDC | failed | 80s | 1 | main timeout |
| 13:00:49 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 79s | 1 | main timeout |
| 13:00:49 | 87 | 32 | sell 0.004 SOL → USDC | filled | 66s | 1 |  |
| 13:00:49 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 83s | 1 | main timeout |
| 13:00:49 | 89 | 34 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 13:00:49 | 90 | 35 | sell 0.0035 SOL → USDC | failed | 82s | 1 | main timeout |
| 13:00:49 | 91 | 36 | sell 0.004 SOL → USDC | filled | 61s | 1 |  |
| 13:00:49 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 13:00:49 | 93 | 38 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 13:00:49 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 13:00:49 | 95 | 40 | sell 0.004 SOL → USDC | filled | 69s | 1 |  |
| 13:00:49 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 83s | 1 | main timeout |
| 13:00:49 | 97 | 42 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 13:00:49 | 98 | 43 | sell 0.0035 SOL → USDC | filled | 57s | 1 |  |
| 13:00:49 | 99 | 44 | sell 0.004 SOL → USDC | filled | 82s | 1 |  |
| 13:00:49 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 83s | 1 | main timeout |
| 13:00:49 | 101 | 46 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 13:00:49 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 84s | 1 | main timeout |
| 13:00:49 | 103 | 48 | sell 0.004 SOL → USDC | failed | 84s | 1 | main timeout |
| 13:00:49 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 82s | 1 | main timeout |
| 13:00:49 | 105 | 50 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 13:00:49 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 82s | 1 | main timeout |
| 13:00:49 | 107 | 52 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 13:00:49 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 49s | 1 |  |
| 13:00:49 | 109 | 54 | sell 0.003 SOL → USDC | filled | 16s | 1 |  |
| 13:00:49 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 35s | 1 |  |
| 13:00:49 | 111 | 56 | sell 0.004 SOL → USDC | filled | 26s | 1 |  |
| 13:00:49 | 112 | 57 | sell 0.0025 SOL → USDC | filled | 46s | 1 |  |
| 13:00:49 | 113 | 58 | sell 0.003 SOL → USDC | filled | 40s | 1 |  |
| 13:00:49 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 13:00:49 | 115 | 60 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 13:06:27 | 116 | 62 | buy 2.6 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:06:27 | 117 | 64 | buy 1.3 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:06:27 | 118 | 65 | buy 3.1 USDC ← SOL | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:06:27 | 119 | 66 | buy 3.1 USDT ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:06:27 | 120 | 67 | buy 1.1 USDT ← SOL | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:06:27 | 121 | 68 | buy 3.2 USDC ← SOL | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:08:57 | 122 | 61 | sell 0.02 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:08:57 | 123 | 62 | buy 0.02 SOL ← USDC | failed | 10s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:08:57 | 124 | 63 | sell 0.03 SOL → USDC | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:08:57 | 125 | 64 | sell 1.2 USDC → SOL | failed | 8s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:08:57 | 126 | 65 | sell 3 USDC → USDT | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:08:57 | 127 | 66 | sell 3 USDT → USDC | failed | 8s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:08:57 | 128 | 67 | sell 1 USDT → USDC | failed | 10s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:08:57 | 129 | 68 | sell 3 USDC → USDT | failed | 8s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:08:57 | 130 | 69 | sell 0.02 SOL → JUP | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:34 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:34 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:35 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:35 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 81s | 1 | main timeout |
| 13:09:35 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:35 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:35 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:35 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 82s | 1 | main timeout |
| 13:09:35 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:35 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:35 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:35 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 79s | 1 | main timeout |
| 13:09:35 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:36 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:36 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 9s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 13:09:36 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 15s | 1 |  |
| 13:09:37 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 16s | 1 |  |
| 13:09:37 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 14s | 1 |  |
| 13:09:37 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 11s | 1 |  |
| 13:09:37 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 16s | 1 |  |
| 13:09:37 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 12s | 1 |  |
| 13:09:39 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 16s | 1 |  |
| 13:09:37 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 16s | 1 |  |
| 13:09:37 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 12s | 1 |  |
| 13:09:37 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 12s | 1 |  |
| 13:09:37 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 16s | 1 |  |
| 13:09:37 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 16s | 1 |  |
| 13:09:37 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 18s | 1 |  |
| 13:09:37 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 16s | 1 |  |
| 13:09:37 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 16s | 1 |  |
| 13:09:37 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 80s | 1 | main timeout |
| 13:09:37 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 85s | 1 | main timeout |
| 13:09:37 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 17s | 1 |  |
| 13:09:38 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 17s | 1 |  |
| 13:09:38 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 17s | 1 |  |
| 13:09:38 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 17s | 1 |  |
| 13:09:38 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 17s | 1 |  |
| 13:09:42 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:43 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:43 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:10:55 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:42 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:42 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:42 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:10:57 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:43 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:43 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:43 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:10:55 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:43 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:44 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:09:44 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

46 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| InvalidTransaction | main | 23 | SOL → USDC ×7, SOL → USDT ×3, SOL → JUP, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | the bundle must not create the buy token account |
| NoLiquidity | quote | 15 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| InvalidTransaction | acquire | 7 | SOL → USDC ×4, SOL → USDT ×2, SOL → JUP | the bundle must not create the buy token account |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |

Scenario orders: 136 (136 main, 0 acquire). Cleanup placed 84 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 12:51:49 | 5 | JUP → SOL (native) | Executed | `0xa3071118…` [🐞](https://debug.barn.cow.fi/order/0xa30711186eaa5c71d0956cf7d7124bdba0c14af6dc0b3fbfd8e755c91ea632fa) |
| 12:51:51 | 6 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xec2efc65…` [🐞](https://debug.barn.cow.fi/order/0xec2efc65b63b7946251be3bd1b9a4827019e5a4d13242881b54b5125ee7e142a) |
| 12:51:52 | 7 | JUP → SOL (native) | Executed | `0x79584863…` [🐞](https://debug.barn.cow.fi/order/0x795848635f6b9b6a5d8e0cee6764eb49f3dd1f2dfcf56572a8492d53ebc84ad2) |
| 12:51:54 | 8 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x52257d9c…` [🐞](https://debug.barn.cow.fi/order/0x52257d9c933272024a88f819f0ff4e5ff7606d17eb0b9846193ad8b75f636fc9) |
| 12:51:54 | 9 | JUP → SOL (native) | Executed | `0x3ef1c91b…` [🐞](https://debug.barn.cow.fi/order/0x3ef1c91bd01db967345fe3439166dca95bbb9f1d0882ee26f46e6b700abacb81) |
| 12:51:56 | 10 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x0bad4bac…` [🐞](https://debug.barn.cow.fi/order/0x0bad4baced6a895a6d3fa39d840025f109bbb0a4783a6489986a1a90c33395ca) |
| 12:51:56 | 11 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xab3e0a7c…` [🐞](https://debug.barn.cow.fi/order/0xab3e0a7cf1ad9948c6e59427e562ff01d2957cb1c738dd7ff027af7e69a0285c) |
| 12:52:21 | 17 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc0d729c0…` [🐞](https://debug.barn.cow.fi/order/0xc0d729c0db16a2d12a1da30470da97c3cf5916229ceb0aee768baf64c6203f49) |
| 12:52:48 | 24 | JUP → SOL (native) | Executed | `0x2cc334bc…` [🐞](https://debug.barn.cow.fi/order/0x2cc334bcde2df1a7039537cdc92d5dfebd37b8608e1eeb47e38bd85b9d5d8836) |
| 12:52:49 | 25 | JUP → SOL (native) | Executed | `0xb22528a4…` [🐞](https://debug.barn.cow.fi/order/0xb22528a44e05b95ba39b0691a0943fa5fe3f678d1be7a79b86bb7816b1d382b1) |
| 12:52:51 | 23 | JUP → SOL (native) | Executed | `0x82df036d…` [🐞](https://debug.barn.cow.fi/order/0x82df036dcfc64d7710720401e2e7b49021111a3869768ddb472bb8d76fc51a17) |
| 12:52:56 | 26 | JUP → SOL (native) | Executed | `0x152238f1…` [🐞](https://debug.barn.cow.fi/order/0x152238f172136ea64fc9f1f993bfef259b31c8b5f69e260ddc0308eb2b9f7e75) |
| 12:52:58 | 27 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xfcdf2896…` [🐞](https://debug.barn.cow.fi/order/0xfcdf2896d5b6dbb79b2c8841382f629f1f019727e125ba3a81a1b7bdf6afbb0c) |
| 12:53:11 | 28 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x11de2cb3…` [🐞](https://debug.barn.cow.fi/order/0x11de2cb37bfd3d6a2f27e1e967a4d1f009b2d440ea7ebc35431547ffb9b96aa9) |
| 13:02:16 | 30 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xde091fdb…` [🐞](https://debug.barn.cow.fi/order/0xde091fdbc47afe193c4fa6b5acc9991e984537ce748cdeadcb6c798e9c18215d) |
| 13:02:18 | 31 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xff7b85dc…` [🐞](https://debug.barn.cow.fi/order/0xff7b85dc59c735e0a3875670ad0b46cb20ed75f244da22f848722fad9842b2a3) |
| 13:02:18 | 32 | USDC → SOL (native) | Executed | `0xf2afcc83…` [🐞](https://debug.barn.cow.fi/order/0xf2afcc83fd27da1ad8ade9596d1eee58e4e9fcb4a68d9f05dd5b3a2882ab7948) |
| 13:02:19 | 33 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x58deedd7…` [🐞](https://debug.barn.cow.fi/order/0x58deedd72d7bc51892e189540b6961519422a7facfa7799fc88adcaa59faec19) |
| 13:02:20 | 34 | USDC → SOL (native) | Executed | `0xd597b3b6…` [🐞](https://debug.barn.cow.fi/order/0xd597b3b6d0ea1f95a6cedb937a58776fd3ad2c1517085fc1e382e59f499c1bcd) |
| 13:02:21 | 35 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x92636ff9…` [🐞](https://debug.barn.cow.fi/order/0x92636ff9804a8c9b56c6aeaab513ed9b74e827a190f85ed67401fea3b9e79081) |
| 13:02:22 | 36 | USDC → SOL (native) | Executed | `0xfe790250…` [🐞](https://debug.barn.cow.fi/order/0xfe790250d2c988396e2c5bdf9d9aa2695e2679fb557b906042785d83f4ef04a9) |
| 13:02:22 | 37 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe1ab0b95…` [🐞](https://debug.barn.cow.fi/order/0xe1ab0b95f2b90f11096b7f1c8c7d4374add7914cd8c59eedaf900f0b6170384c) |
| 13:02:26 | 29 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x3a5043bd…` [🐞](https://debug.barn.cow.fi/order/0x3a5043bdd69b419af98fd575203c5e49f717689a58f03529a724fc3502714a3e) |
| 13:02:27 | 38 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x1165c384…` [🐞](https://debug.barn.cow.fi/order/0x1165c384f7ca8056f5946ff7edb3518dc6ee743a42cba8311a5927b9bde075df) |
| 13:02:47 | 39 | USDC → SOL (native) | Executed | `0x9602fc22…` [🐞](https://debug.barn.cow.fi/order/0x9602fc22a78bb4592e58c1e6670bc6cda05474efda689ccd82f689f9731a723c) |
| 13:03:02 | 40 | USDC → SOL (native) | Executed | `0x5660bd90…` [🐞](https://debug.barn.cow.fi/order/0x5660bd90bda97162bd3d0ec68062b7077fda252505410a9efc6772b70a850e70) |
| 13:03:14 | 41 | USDC → SOL (native) | Executed | `0xb1d02e75…` [🐞](https://debug.barn.cow.fi/order/0xb1d02e7577649a5ee480d334b6bb5c51ed02b4bf84b07088737df101860b650f) |
| 13:03:26 | 42 | USDC → SOL (native) | Executed | `0x58a88f63…` [🐞](https://debug.barn.cow.fi/order/0x58a88f63a956ed5dee8b2ac651aae772507bdec56a9968a174fdc7a8d2cc5795) |
| 13:03:48 | 43 | USDC → SOL (native) | Executed | `0x9c22b84e…` [🐞](https://debug.barn.cow.fi/order/0x9c22b84e2d403ece2825011f61c61d30a6040554a31b9f8837c81aa5c791a7e8) |
| 13:03:56 | 45 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x572e9931…` [🐞](https://debug.barn.cow.fi/order/0x572e9931601237a3ca420fd5eca4c25e822a54f160fed8b0d3a56b2681763054) |
| 13:03:59 | 47 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x33c0594c…` [🐞](https://debug.barn.cow.fi/order/0x33c0594cda2314c0cc7a0a4fe11217d04d9f54b29efa91128cd573e51c5cfe53) |
| 13:03:59 | 44 | USDC → SOL (native) | Executed | `0x2ba9bdec…` [🐞](https://debug.barn.cow.fi/order/0x2ba9bdec6bdd202f2b6ec50653d13f7947064422ff4df8f4eb83cba504bccb02) |
| 13:04:00 | 48 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe70cdb9f…` [🐞](https://debug.barn.cow.fi/order/0xe70cdb9fc280d0462eea59b1c0173cb4824ee8ef3eff4959fcc67deef0d9cc08) |
| 13:04:00 | 46 | USDC → SOL (native) | Executed | `0xc29208f3…` [🐞](https://debug.barn.cow.fi/order/0xc29208f377e3990747f19c5975155dd791826b9421317eed985398282f2927f8) |
| 13:04:04 | 51 | USDC → SOL (native) | Executed | `0x36205e58…` [🐞](https://debug.barn.cow.fi/order/0x36205e580a46f1955e84356091cca76d31462090f9ffd3fdacc4b4bb6c581ef0) |
| 13:04:04 | 49 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x17a53b50…` [🐞](https://debug.barn.cow.fi/order/0x17a53b508964cfab0aaf8257c5e609bab8d4aa81d2fece7ab8cbfbc116e0d176) |
| 13:04:07 | 50 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x46b85e09…` [🐞](https://debug.barn.cow.fi/order/0x46b85e0946dfe9fb1478115f67ba205f517e523bcd23d075f0beea746b141264) |
| 13:04:13 | 52 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb963c0f6…` [🐞](https://debug.barn.cow.fi/order/0xb963c0f64f54686f004f8a84d13af0c7627f6fcaacd9e0ec03e80f774c17ac7c) |
| 13:04:15 | 53 | USDC → SOL (native) | Executed | `0xd918434c…` [🐞](https://debug.barn.cow.fi/order/0xd918434c4cec0fdf42c755c04bf7eef4c0d40894fda89e029d3f7f6f5a4b9353) |
| 13:04:20 | 54 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x435486fb…` [🐞](https://debug.barn.cow.fi/order/0x435486fb6d68b87a564b06d7d56c27f72ba7b8bd15b7604dc82db80017999022) |
| 13:04:43 | 55 | USDC → SOL (native) | Executed | `0x6aecb3f4…` [🐞](https://debug.barn.cow.fi/order/0x6aecb3f4e705f5b4069d5e9465951674ed22c4433147ae4bc3024a860613e143) |
| 13:04:51 | 56 | USDC → SOL (native) | Executed | `0x982a5b5e…` [🐞](https://debug.barn.cow.fi/order/0x982a5b5ed6056a6f94b081727a5aefc5c4d30e4c105f5f1d3613a34fabd0e220) |
| 13:05:00 | 57 | USDC → SOL (native) | Executed | `0xd514d007…` [🐞](https://debug.barn.cow.fi/order/0xd514d0075008470a0e53dbcc4c68cf4affddca2d8cacf53c4696d8a03dee6849) |
| 13:05:18 | 58 | USDC → SOL (native) | Executed | `0x799ce4e1…` [🐞](https://debug.barn.cow.fi/order/0x799ce4e11c370c546cf63ae3ea923a89657fc7e29a4e4d3ce78323b15ba19b06) |
| 13:05:28 | 60 | USDC → SOL (native) | Executed | `0x4eda9d12…` [🐞](https://debug.barn.cow.fi/order/0x4eda9d128b3284cadab0b5d69f90d7b2679c809f94f305f658d46ba93f951d83) |
| 13:05:29 | 59 | USDC → SOL (native) | Executed | `0x3ca2718e…` [🐞](https://debug.barn.cow.fi/order/0x3ca2718ef7b34b24c49beaccb8adf62bca35fd33513299feaea5d08ff591c08a) |
| 13:11:12 | 85 | Bonk → SOL (native) | Executed | `0x47c89261…` [🐞](https://debug.barn.cow.fi/order/0x47c892612a31e38e48af8cf7a88b38b9af3487a2b80122087ef14eb77654a3fd) |
| 13:11:13 | 86 | $WIF → SOL (native) | Executed | `0x2d9034cb…` [🐞](https://debug.barn.cow.fi/order/0x2d9034cb8bc3afb46dfebdc1849482bbf03bf39fb9754de5ac8c367d104e140e) |
| 13:11:17 | 87 | POPCAT → SOL (native) | Executed | `0x6abffe22…` [🐞](https://debug.barn.cow.fi/order/0x6abffe22ad3498122d5c25e972cac32f4118a11a853085c716c71a54671feba9) |
| 13:11:18 | 88 | JitoSOL → SOL (native) | Executed | `0x92dfcaf9…` [🐞](https://debug.barn.cow.fi/order/0x92dfcaf9cd300a4f4e66b6c6afba12198c814f6b9bc813f57479dfb8e7a31f0e) |
| 13:11:20 | 90 | JupSOL → SOL (native) | Executed | `0x020821a5…` [🐞](https://debug.barn.cow.fi/order/0x020821a5de29ce998b8ea726772712b10955550d52dba3af7b7ad2bf6a0ce6dc) |
| 13:11:22 | 89 | mSOL → SOL (native) | Executed | `0x0546565d…` [🐞](https://debug.barn.cow.fi/order/0x0546565d86e22e5db479e877eee6c2e21c98f00b57fe61c73bd7461900d8f138) |
| 13:11:22 | 91 | cbBTC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x69229cbc…` [🐞](https://debug.barn.cow.fi/order/0x69229cbc9110fd4fe051c9c077d496878ec9e7f276a3413c6ddcec226ad29003) |
| 13:11:22 | 92 | USDe → SOL (native) | Executed | `0x0bd0cd8e…` [🐞](https://debug.barn.cow.fi/order/0x0bd0cd8e97c0a07c84d2db69d74c6a8d2c3d7a5b5a3e7e434bed129c52c4e572) |
| 13:11:25 | 93 | EURC → SOL (native) | Executed | `0xcaa6ac6e…` [🐞](https://debug.barn.cow.fi/order/0xcaa6ac6eb641d3af36a4c5f73ebed0bba94611215e8f681499d10f993fa85a54) |
| 13:11:31 | 94 | USDY → SOL (native) | Executed | `0x865bf93d…` [🐞](https://debug.barn.cow.fi/order/0x865bf93d6384eda16d1509a81ed73662b21e6894a4d695ba1237d57c931eab03) |
| 13:11:43 | 95 | JLP → SOL (native) | Executed | `0xc5376161…` [🐞](https://debug.barn.cow.fi/order/0xc53761614132aacc6eef863f6fde65c3ebea9cdb59174ccf84095e0e57a007c9) |
| 13:11:44 | 96 | INF → SOL (native) | Executed | `0x6514ce6d…` [🐞](https://debug.barn.cow.fi/order/0x6514ce6dcd62be228aa3bcb82fe59d8b3011d699509e9627824e60b291a68fe4) |
| 13:11:45 | 97 | ETH → SOL (native) | Executed | `0x36647897…` [🐞](https://debug.barn.cow.fi/order/0x3664789792950329696d0db82f89c7a3b31d5231cbeeecd5c45d8f829cb10c0a) |
| 13:11:46 | 98 | BNB → SOL (native) | Executed | `0xfc2f8779…` [🐞](https://debug.barn.cow.fi/order/0xfc2f877906dfcdc04b9269a3fc10011c4b58c5f29cb8f447122c299e02ff8a04) |
| 13:11:47 | 99 | XAUt0 → SOL (native) | Executed | `0x82717a4b…` [🐞](https://debug.barn.cow.fi/order/0x82717a4b2bf71c13a19f4868dd75c7026d4207799c720affc46cbd970ace4a01) |
| 13:12:16 | 102 | Fartcoin → SOL (native) | Executed | `0x6bcde962…` [🐞](https://debug.barn.cow.fi/order/0x6bcde962f87a0e89e1ed814e1a79654499f23001927175e21cdf4abee0fa1920) |
| 13:12:18 | 104 | BOME → SOL (native) | Executed | `0x3616d8e5…` [🐞](https://debug.barn.cow.fi/order/0x3616d8e556dc40592486a622e9660595f24a506fe04b5416b79527ea91ef170b) |
| 13:12:22 | 105 | hyloSOL → SOL (native) | Executed | `0x4096b710…` [🐞](https://debug.barn.cow.fi/order/0x4096b710d5d46982540381e6b7618de6f379634318971ead2f917107bbc1278d) |
| 13:12:23 | 103 | MEW → SOL (native) | Executed | `0x474d821f…` [🐞](https://debug.barn.cow.fi/order/0x474d821fcf7848099526bcd66651135ffe9e6d79e9d7a1783caa7636aa531efb) |
| 13:12:28 | 106 | PSOL → SOL (native) | Executed | `0x6f37202a…` [🐞](https://debug.barn.cow.fi/order/0x6f37202a5f7bffad6d2c0f69ecb2cb7c84f701db1575558acff78016afc11bcb) |
| 13:13:44 | 1 | USDC → SOL (native) | Executed | `0x68a81bc4…` [🐞](https://debug.barn.cow.fi/order/0x68a81bc463c85cf533ffb5320320049ac0e699e7490ea0e3e8be87e972c30408) |
| 13:13:45 | 2 | USDT → SOL (native) | Executed | `0x1ceca6a4…` [🐞](https://debug.barn.cow.fi/order/0x1ceca6a4d8b9dc7bb072de34bc1e53e6588452ba0803a6b32c70318bae1aca3f) |
| 13:14:09 | 6 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2bc57bba…` [🐞](https://debug.barn.cow.fi/order/0x2bc57bbaef12ea1f5935d366012d5391d95bbf526f493c1130751fab936b435e) |
| 13:14:10 | 8 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb4eeeeab…` [🐞](https://debug.barn.cow.fi/order/0xb4eeeeabcb9c0da7419199722c2f18f64480634caf6d19066a5e5df27db6756d) |
| 13:14:11 | 10 | JUP → SOL (native) | Executed | `0x41ace9bf…` [🐞](https://debug.barn.cow.fi/order/0x41ace9bf06db069c4b2b8d176d122d68eac7f1749716061199b6aac9cf2cddeb) |
| 13:14:12 | 11 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x8312fe87…` [🐞](https://debug.barn.cow.fi/order/0x8312fe8750f8df0379eb9684796f89bbe1d9bc2fe0fc5b1acecdde8f487de3bd) |
| 13:14:13 | 17 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x97c1d01b…` [🐞](https://debug.barn.cow.fi/order/0x97c1d01b2506de28576bdf334f56bb4172cffe44bfb6e18966977ee068948ae5) |
| 13:14:14 | 27 | JUP → SOL (native) | Executed | `0xf7dc2990…` [🐞](https://debug.barn.cow.fi/order/0xf7dc2990d77f6d7ac37fe24b55d170d77fd57056552ea624d821723cfb2a0b88) |
| 13:14:15 | 28 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xfc40b94b…` [🐞](https://debug.barn.cow.fi/order/0xfc40b94b6c2c4edf630413e79a57f5399bffad8f1ede09b51f512be64d6079c2) |
| 13:15:45 | 29 | USDC → SOL (native) | Executed | `0x6f421794…` [🐞](https://debug.barn.cow.fi/order/0x6f421794f894afc18c934794d76fd28b56127df465ba21309abfc8a5a29dd009) |
| 13:15:46 | 30 | USDC → SOL (native) | Executed | `0xb606d448…` [🐞](https://debug.barn.cow.fi/order/0xb606d448834e87c487fa7049b88cdbb08df6099a73b440e591f60077ae3c50f7) |
| 13:15:47 | 31 | USDC → SOL (native) | Executed | `0x063f172d…` [🐞](https://debug.barn.cow.fi/order/0x063f172d99e33914eb587730eb2f34cc4442201d33aea3f61eeda525ebf5459f) |
| 13:15:48 | 35 | USDC → SOL (native) | Executed | `0x2dcce44e…` [🐞](https://debug.barn.cow.fi/order/0x2dcce44edd62e28ca011f209098b7a5bafd72cfd5cf59524ed122d120337a88e) |
| 13:15:50 | 38 | USDC → SOL (native) | Executed | `0x7b446e44…` [🐞](https://debug.barn.cow.fi/order/0x7b446e44ec0c6c1aa3af09125afd557e50d9c59c9a229576a997c978151607f3) |
| 13:15:55 | 47 | USDC → SOL (native) | Executed | `0x77c431dc…` [🐞](https://debug.barn.cow.fi/order/0x77c431dca30b86c9af98f6ad78d434c14df6cce8c0b5db57eb410f5b531343c4) |
| 13:15:58 | 48 | USDC → SOL (native) | Executed | `0xd177997a…` [🐞](https://debug.barn.cow.fi/order/0xd177997a1cb0d451f1a49a0103385ad67fc837e5e91f8766b2fb324f91257378) |
| 13:16:07 | 52 | USDC → SOL (native) | Executed | `0x07f1dc6b…` [🐞](https://debug.barn.cow.fi/order/0x07f1dc6b77f33351250959d8e797e05d8ff48fead6941a1507ebb19952344c3d) |
| 13:16:53 | 91 | cbBTC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc08c783f…` [🐞](https://debug.barn.cow.fi/order/0xc08c783f073f2feabd48ef9a96e11f56df69d1170003ef2632b5f675ea6e4489) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 88 | 64.7% |
| cancelled | 48 | 35.3% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 14s | 37s | 55s | 65s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 6YuF…AyeH | 88 | 100.0% | 88 | 95,228 | 14s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| arc | 1130 | 147 | 144 | 98.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unreceivable_buy_token_account`: 340 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 136 | 88 | 64.7% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 85 | 53 | 62.4% |
| wSOL → JUP | 25 | 14 | 56.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 0 | 0.0% |
| wSOL → MU | 1 | 0 | 0.0% |
| wSOL → SPYx | 1 | 0 | 0.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 0 | 0.0% |
| wSOL → EUROP | 1 | 0 | 0.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 3 | 60.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 2 | 40.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 4 | 80.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 3 | 60.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 1 | 25.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 2 | 50.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 3 | 75.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 2 | 50.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 2 | 66.7% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 2 | 66.7% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 2 | 66.7% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 1 | 33.3% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 1 | 33.3% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 1 | 33.3% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 3 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 3 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 1 | 50.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 1 | 50.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 1 | 50.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 1 | 50.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 1 | 50.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 1 | 50.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 1 | 50.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 0 | 0.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 0 | 0.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 0 | 0.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 0 | 0.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 0 | 0.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 0 | 0.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 0 | 0.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 0 | 0.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 0 | 0.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 0 | 0.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 1 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 1 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 1 | 0 | 0.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 1 | 0 | 0.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 1 | 0 | 0.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 0 | 0.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 0 | 0.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 48 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 12:50:31 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xbdfa7193…` [🐞](https://debug.barn.cow.fi/order/0xbdfa7193d0725118382e704d7f1c686f6c91751c56acdfa3e15a2d130cc41d9d) |
| 12:50:32 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xd6da4cf9…` [🐞](https://debug.barn.cow.fi/order/0xd6da4cf98e2196241565328c6a347864c621c29f6bb6760ce9caad457e91b377) |
| 12:50:32 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x0905b226…` [🐞](https://debug.barn.cow.fi/order/0x0905b226e646f9921e04a5fbd6430032d63d44a89f85ae1ba27d59fc48006bff) |
| 12:50:32 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xa91f3a0e…` [🐞](https://debug.barn.cow.fi/order/0xa91f3a0e3d78583cea354204e7d29246cb20d2ff1969ec131ba29f4188c8d962) |
| 12:50:33 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x95f6e998…` [🐞](https://debug.barn.cow.fi/order/0x95f6e9984c2eeca3868e412e8761329057daae00d04336c1a7abddc44451083d) |
| 12:50:34 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xc9eff4db…` [🐞](https://debug.barn.cow.fi/order/0xc9eff4dbd278b76c6288c18b21ffc4cd9fe7db874f3ed9e5334e1be28a9e2585) |
| 12:50:34 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb0117e48…` [🐞](https://debug.barn.cow.fi/order/0xb0117e48539719eebf3e88d0fc0f35d52319a642ade434e09e3f05d2b12459c0) |
| 12:50:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x31e3a9ce…` [🐞](https://debug.barn.cow.fi/order/0x31e3a9ce04f3e4e8f47b5385547a931b31c0088dade395259f980336e836f1d9) |
| 12:50:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xc256942c…` [🐞](https://debug.barn.cow.fi/order/0xc256942cb1e51920d11c50ee31f074bccc9c115c04ab5f90bccca3d552c74e24) |
| 12:50:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x69afc090…` [🐞](https://debug.barn.cow.fi/order/0x69afc090c76a39a95b5a24eac302c3dd36e2a48a48989b1354d5af981e55a54e) |
| 12:50:35 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x71e9df99…` [🐞](https://debug.barn.cow.fi/order/0x71e9df99fb010b22a625b9702dafb7216b2c6197813b0e27d04190ffea5d7f51) |
| 12:57:53 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x60d55806…` [🐞](https://debug.barn.cow.fi/order/0x60d55806a2b1058d1c8aa690eeafaa1b4cea6be18461aac633809fda6debe2d0) |
| 12:57:54 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x62dc0cba…` [🐞](https://debug.barn.cow.fi/order/0x62dc0cba0513bb2274df1ccce255549ee76355ff66b5ba949ee914110221f4e8) |
| 12:57:56 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5de184e2…` [🐞](https://debug.barn.cow.fi/order/0x5de184e2f580d77574ceeb0daa75ede57e4a6de3a842415b731291811b2d39ce) |
| 12:59:25 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbde6990d…` [🐞](https://debug.barn.cow.fi/order/0xbde6990dbec8d02706ed107b8be3d5822cc5f645bad9b5ac7c781d915d3ecddb) |
| 12:59:25 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x858a5f50…` [🐞](https://debug.barn.cow.fi/order/0x858a5f507b0f1de093cfa5be15650d9c5fb5180ada0e12c0f6630f27ebe52315) |
| 12:59:25 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbb8b44f6…` [🐞](https://debug.barn.cow.fi/order/0xbb8b44f62d69757e02a657b71edc99d0231c2af0e405b0eca22e50cf4e2737d1) |
| 12:59:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xebb72cec…` [🐞](https://debug.barn.cow.fi/order/0xebb72ceca6dbe598645e6eef7c388f8a11c90cd34e0096c8045007f4c905dc1f) |
| 12:59:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0fdea6b0…` [🐞](https://debug.barn.cow.fi/order/0x0fdea6b088c795bda3e45d2882cff5d195858ae59a2652237e1696094069e561) |
| 12:59:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x88367595…` [🐞](https://debug.barn.cow.fi/order/0x88367595eed3a1770cd93b9de8667ae1e7c79cc423bd612e6ff8070f4897b31f) |
| 12:59:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1e5c4120…` [🐞](https://debug.barn.cow.fi/order/0x1e5c41205c5eaf0bd821a7e92dbbebb4a4d769caba7513f25a6b0f034d20e6d3) |
| 12:59:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbfcd9f19…` [🐞](https://debug.barn.cow.fi/order/0xbfcd9f194270dafdf1515942bdff9d7b1573f4e8311b8513d364040c9f1dbd8d) |
| 12:59:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc6c21268…` [🐞](https://debug.barn.cow.fi/order/0xc6c21268ecd3660f30321441a65800d91df7f19660aa9b2501a3a5a343f039b9) |
| 12:59:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7ef38e34…` [🐞](https://debug.barn.cow.fi/order/0x7ef38e34f320a97f2def88fed33350b827f55a6f4a392f64f2119c91f5503aa9) |
| 12:59:27 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x60a6c33a…` [🐞](https://debug.barn.cow.fi/order/0x60a6c33a56d82817f55aad0614f1c9dd161381883b3fedb145180becccc83ad0) |
| 13:00:54 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x427abfdf…` [🐞](https://debug.barn.cow.fi/order/0x427abfdf2cbee08c83e0cef538287d19cafb71e504a24c3b3cb61ac271a090e6) |
| 13:00:54 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x790a6cb5…` [🐞](https://debug.barn.cow.fi/order/0x790a6cb5c2cca7d8d79e16f5650254d9006c0cc06b93d8b791c2fdb7d5c14a55) |
| 13:00:54 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x42762e31…` [🐞](https://debug.barn.cow.fi/order/0x42762e31c9bb1864be0fd1a024dfde7a37fb643b69b1eee5db84621a16f7f40e) |
| 13:00:54 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4cf8df87…` [🐞](https://debug.barn.cow.fi/order/0x4cf8df875817e3f316792a7caf46144f369c74308ec9951c2e682e3c7e2a6275) |
| 13:00:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x123a9c09…` [🐞](https://debug.barn.cow.fi/order/0x123a9c09d52e3f586884ebbabcc2166be99afa5444007ceeb685cef887e2c98d) |
| 13:00:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x29d6c3db…` [🐞](https://debug.barn.cow.fi/order/0x29d6c3db898041aaeb64d55c1c4b379a33b87e56bc115b5d565719a933edb7af) |
| 13:00:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x22bbb66b…` [🐞](https://debug.barn.cow.fi/order/0x22bbb66bc60b09251598e9bd8de354f272bfb33e7db580705592bf4c5620df65) |
| 13:00:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x96719985…` [🐞](https://debug.barn.cow.fi/order/0x9671998578bf642790730bf77bdce212b88d2d9a538ed48d37df77a1568cb758) |
| 13:00:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xea6ca742…` [🐞](https://debug.barn.cow.fi/order/0xea6ca742f6bb9df6673374173f48dfee2110bfdd21eb7f884656b305f0ad6d27) |
| 13:00:56 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9cafb809…` [🐞](https://debug.barn.cow.fi/order/0x9cafb8091d83816b35af5ffe447f065fd3f8c2f90e2d7f68afa36fb81672c36f) |
| 13:00:57 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xed2674ba…` [🐞](https://debug.barn.cow.fi/order/0xed2674ba1915c45c56ab7bc847f2cf1916f4acbf0cca22c81a8bed7122f7939a) |
| 13:00:57 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xed157edc…` [🐞](https://debug.barn.cow.fi/order/0xed157edc3ab295760bb86d0ca6f4192eef76babad4418fba1741f39683de8019) |
| 13:00:57 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x13cb27af…` [🐞](https://debug.barn.cow.fi/order/0x13cb27affa5fcf66d55a9e5085fbeefd916c3ade2fb59a11b1c8f1ec0855bc84) |
| 13:00:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xae6b8dc6…` [🐞](https://debug.barn.cow.fi/order/0xae6b8dc6c383980952d5fcf7901f5e5dc7ffbac482d4d666e3f044f2fcc3da1f) |
| 13:00:59 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xec44b5a3…` [🐞](https://debug.barn.cow.fi/order/0xec44b5a32b5ad3c1238bdc986bdf014963ee8c4736776f2ae5c6eae07c59648b) |
| 13:00:59 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x023987b3…` [🐞](https://debug.barn.cow.fi/order/0x023987b3575db44385f59cc225a694de2f30b91f047f2b9bc7437ac424cd29eb) |
| 13:00:59 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xcab33bf2…` [🐞](https://debug.barn.cow.fi/order/0xcab33bf28f60f66b7b9e1c2667dba4a085fa3421c5a3b52d0c383310a50d2568) |
| 13:01:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1c699e97…` [🐞](https://debug.barn.cow.fi/order/0x1c699e97eeb92a57667b5fde2964c3b8314218c05e293abb79d70762f52a9ded) |
| 13:09:44 | wSOL → PUMP | market sell | Not filled within fill timeout (cancelled by sim) | `0x2c9fd02e…` [🐞](https://debug.barn.cow.fi/order/0x2c9fd02e823c4c880b972a0877bd209f97846aedc4e2e1e36b9e9e523b210c82) |
| 13:09:45 | wSOL → MU | market sell | Not filled within fill timeout (cancelled by sim) | `0x56ce7e74…` [🐞](https://debug.barn.cow.fi/order/0x56ce7e7426320540d8a7a19d5ec1613bb0a75ea7bd9e0c2ed8cc888e26d46206) |
| 13:09:45 | wSOL → SPYx | market sell | Not filled within fill timeout (cancelled by sim) | `0xccc74e86…` [🐞](https://debug.barn.cow.fi/order/0xccc74e862a94d2f3962d1ab14adcf78d8666fe515ca0c0ca1841068fcf4ed078) |
| 13:09:49 | wSOL → GLDx | market sell | Not filled within fill timeout (cancelled by sim) | `0x2eb5346b…` [🐞](https://debug.barn.cow.fi/order/0x2eb5346b355cb4597014953000ae34d549cb005ac7087f2ec3118e729192a0c4) |
| 13:09:50 | wSOL → EUROP | market sell | Not filled within fill timeout (cancelled by sim) | `0x6755a6e4…` [🐞](https://debug.barn.cow.fi/order/0x6755a6e405d04aeb0202b0f0363dacc40f68f6a8100ff7d82819b0e4f3a1e7e2) |
