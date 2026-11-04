# Solana QoS report: 2026-10-29-17-03-composite-cicada-run

Barn, orders created between `2026-10-29T17:04:28.901Z` and `2026-10-29T17:32:50.295Z`. Data fetched 2026-10-29T17:33:05+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 137 |
| Orders executed | **0** (0.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 85 |
| Settlement txs | 0 |

## Scenario results

Target solver: `cicada`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-29T17:04:28.901Z | 2026-10-29T17:05:56.655Z | 0/6 | 6 | 3 | 0 | 0.0% |
| solver-same-direction-25 | 2026-10-29T17:06:12.130Z | 2026-10-29T17:07:34.963Z | 0/25 | 25 | 25 | 0 | 0.0% |
| solver-burst-sell | 2026-10-29T17:10:58.529Z | 2026-10-29T17:18:29.002Z | 0/84 | 84 | 84 | 0 | 0.0% |
| solver-cow | 2026-10-29T17:20:53.459Z | 2026-10-29T17:23:37.874Z | 0/15 | 15 | 0 | 0 | 0.0% |
| solver-token-coverage | 2026-10-29T17:23:56.834Z | 2026-10-29T17:25:30.504Z | 0/52 | 52 | 25 | 0 | 0.0% |

## Scenario

0 of 182 scenario rows completed. 0 retries, 30 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 17:04:29 | 1 | 1 | sell 0.005 SOL → USDC | failed | 70s | 1 | main timeout |
| 17:04:29 | 2 | 2 | sell 0.005 SOL → USDT | failed | 71s | 1 | main timeout |
| 17:04:29 | 3 | 3 | sell 0.5 JUP → USDC | failed | 76s | 1 | acquire JUP timeout |
| 17:05:39 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:05:40 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:05:45 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 9s | 0 | acquire JUP error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:06:12 | 7 | 4 | sell 0.005 SOL → JUP | failed | 73s | 1 | main timeout |
| 17:06:12 | 8 | 5 | sell 0.005 SOL → JUP | failed | 74s | 1 | main timeout |
| 17:06:12 | 9 | 6 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 17:06:12 | 10 | 7 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 17:06:12 | 11 | 8 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 17:06:12 | 12 | 9 | sell 0.005 SOL → JUP | failed | 74s | 1 | main timeout |
| 17:06:12 | 13 | 10 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 17:06:12 | 14 | 11 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 17:06:12 | 15 | 12 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 17:06:12 | 16 | 13 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 17:06:12 | 17 | 14 | sell 0.005 SOL → JUP | failed | 79s | 1 | main timeout |
| 17:06:12 | 18 | 15 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 17:06:12 | 19 | 16 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 17:06:12 | 20 | 17 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 17:06:12 | 21 | 18 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 17:06:12 | 22 | 19 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 17:06:12 | 23 | 20 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 17:06:12 | 24 | 21 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 17:06:12 | 25 | 22 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 17:06:12 | 26 | 23 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 17:06:12 | 27 | 24 | sell 0.005 SOL → JUP | failed | 83s | 1 | main timeout |
| 17:06:12 | 28 | 25 | sell 0.005 SOL → JUP | failed | 83s | 1 | main timeout |
| 17:06:12 | 29 | 26 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 17:06:12 | 30 | 27 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 17:06:12 | 31 | 28 | sell 0.005 SOL → JUP | failed | 83s | 1 | main timeout |
| 17:10:58 | 32 | 29 | sell 0.0025 SOL → USDC | failed | 71s | 1 | main timeout |
| 17:10:58 | 33 | 30 | sell 0.003 SOL → USDC | failed | 69s | 1 | main timeout |
| 17:10:58 | 34 | 31 | sell 0.0035 SOL → USDC | failed | 70s | 1 | main timeout |
| 17:10:58 | 35 | 32 | sell 0.004 SOL → USDC | failed | 70s | 1 | main timeout |
| 17:12:28 | 36 | 29 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 17:12:28 | 37 | 30 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 17:12:28 | 38 | 31 | sell 0.0035 SOL → USDC | failed | 70s | 1 | main timeout |
| 17:12:28 | 39 | 32 | sell 0.004 SOL → USDC | failed | 73s | 1 | main timeout |
| 17:12:28 | 40 | 33 | sell 0.0025 SOL → USDC | failed | 71s | 1 | main timeout |
| 17:12:28 | 41 | 34 | sell 0.003 SOL → USDC | failed | 71s | 1 | main timeout |
| 17:12:28 | 42 | 35 | sell 0.0035 SOL → USDC | failed | 72s | 1 | main timeout |
| 17:12:28 | 43 | 36 | sell 0.004 SOL → USDC | failed | 72s | 1 | main timeout |
| 17:13:58 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 17:13:58 | 45 | 30 | sell 0.003 SOL → USDC | failed | 72s | 1 | main timeout |
| 17:13:58 | 46 | 31 | sell 0.0035 SOL → USDC | failed | 74s | 1 | main timeout |
| 17:13:58 | 47 | 32 | sell 0.004 SOL → USDC | failed | 72s | 1 | main timeout |
| 17:13:58 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 17:13:58 | 49 | 34 | sell 0.003 SOL → USDC | failed | 76s | 1 | main timeout |
| 17:13:58 | 50 | 35 | sell 0.0035 SOL → USDC | failed | 77s | 1 | main timeout |
| 17:13:58 | 51 | 36 | sell 0.004 SOL → USDC | failed | 71s | 1 | main timeout |
| 17:13:58 | 52 | 37 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 17:13:58 | 53 | 38 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 17:13:58 | 54 | 39 | sell 0.0035 SOL → USDC | failed | 79s | 1 | main timeout |
| 17:13:58 | 55 | 40 | sell 0.004 SOL → USDC | failed | 78s | 1 | main timeout |
| 17:13:58 | 56 | 41 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 17:13:58 | 57 | 42 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 17:13:58 | 58 | 43 | sell 0.0035 SOL → USDC | failed | 75s | 1 | main timeout |
| 17:13:58 | 59 | 44 | sell 0.004 SOL → USDC | failed | 78s | 1 | main timeout |
| 17:15:28 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 17:15:28 | 61 | 30 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 17:15:28 | 62 | 31 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 17:15:28 | 63 | 32 | sell 0.004 SOL → USDC | failed | 75s | 1 | main timeout |
| 17:15:28 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 17:15:28 | 65 | 34 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 17:15:28 | 66 | 35 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 17:15:28 | 67 | 36 | sell 0.004 SOL → USDC | failed | 80s | 1 | main timeout |
| 17:15:28 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 17:15:28 | 69 | 38 | sell 0.003 SOL → USDC | failed | 81s | 1 | main timeout |
| 17:15:28 | 70 | 39 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 17:15:28 | 71 | 40 | sell 0.004 SOL → USDC | failed | 79s | 1 | main timeout |
| 17:15:28 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 17:15:28 | 73 | 42 | sell 0.003 SOL → USDC | failed | 81s | 1 | main timeout |
| 17:15:28 | 74 | 43 | sell 0.0035 SOL → USDC | failed | 81s | 1 | main timeout |
| 17:15:28 | 75 | 44 | sell 0.004 SOL → USDC | failed | 81s | 1 | main timeout |
| 17:15:28 | 76 | 45 | sell 0.0025 SOL → USDC | failed | 82s | 1 | main timeout |
| 17:15:28 | 77 | 46 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 17:15:28 | 78 | 47 | sell 0.0035 SOL → USDC | failed | 82s | 1 | main timeout |
| 17:15:28 | 79 | 48 | sell 0.004 SOL → USDC | failed | 85s | 1 | main timeout |
| 17:15:28 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 82s | 1 | main timeout |
| 17:15:28 | 81 | 50 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 17:15:28 | 82 | 51 | sell 0.0035 SOL → USDC | failed | 84s | 1 | main timeout |
| 17:15:28 | 83 | 52 | sell 0.004 SOL → USDC | failed | 82s | 1 | main timeout |
| 17:16:58 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 17:16:58 | 85 | 30 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 17:16:58 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 82s | 1 | main timeout |
| 17:16:58 | 87 | 32 | sell 0.004 SOL → USDC | failed | 77s | 1 | main timeout |
| 17:16:58 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 17:16:58 | 89 | 34 | sell 0.003 SOL → USDC | failed | 81s | 1 | main timeout |
| 17:16:58 | 90 | 35 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 17:16:58 | 91 | 36 | sell 0.004 SOL → USDC | failed | 83s | 1 | main timeout |
| 17:16:58 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 17:16:58 | 93 | 38 | sell 0.003 SOL → USDC | failed | 85s | 1 | main timeout |
| 17:16:58 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 82s | 1 | main timeout |
| 17:16:58 | 95 | 40 | sell 0.004 SOL → USDC | failed | 80s | 1 | main timeout |
| 17:16:58 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 17:16:58 | 97 | 42 | sell 0.003 SOL → USDC | failed | 84s | 1 | main timeout |
| 17:16:58 | 98 | 43 | sell 0.0035 SOL → USDC | failed | 75s | 1 | main timeout |
| 17:16:58 | 99 | 44 | sell 0.004 SOL → USDC | failed | 84s | 1 | main timeout |
| 17:16:58 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 85s | 1 | main timeout |
| 17:16:58 | 101 | 46 | sell 0.003 SOL → USDC | failed | 85s | 1 | main timeout |
| 17:16:58 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 76s | 1 | main timeout |
| 17:16:58 | 103 | 48 | sell 0.004 SOL → USDC | failed | 86s | 1 | main timeout |
| 17:16:58 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 86s | 1 | main timeout |
| 17:16:58 | 105 | 50 | sell 0.003 SOL → USDC | failed | 86s | 1 | main timeout |
| 17:16:58 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 86s | 1 | main timeout |
| 17:16:58 | 107 | 52 | sell 0.004 SOL → USDC | failed | 86s | 1 | main timeout |
| 17:16:58 | 108 | 53 | sell 0.0025 SOL → USDC | failed | 87s | 1 | main timeout |
| 17:16:58 | 109 | 54 | sell 0.003 SOL → USDC | failed | 87s | 1 | main timeout |
| 17:16:58 | 110 | 55 | sell 0.0035 SOL → USDC | failed | 87s | 1 | main timeout |
| 17:16:58 | 111 | 56 | sell 0.004 SOL → USDC | failed | 87s | 1 | main timeout |
| 17:16:58 | 112 | 57 | sell 0.0025 SOL → USDC | failed | 87s | 1 | main timeout |
| 17:16:58 | 113 | 58 | sell 0.003 SOL → USDC | failed | 90s | 1 | main timeout |
| 17:16:58 | 114 | 59 | sell 0.0035 SOL → USDC | failed | 90s | 1 | main timeout |
| 17:16:58 | 115 | 60 | sell 0.004 SOL → USDC | failed | 90s | 1 | main timeout |
| 17:20:53 | 116 | 62 | buy 2.6 USDC ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:20:53 | 117 | 64 | buy 1.3 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:20:53 | 118 | 65 | buy 3.1 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:20:53 | 119 | 66 | buy 3.1 USDT ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:20:53 | 120 | 67 | buy 1.1 USDT ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:20:53 | 121 | 68 | buy 3.2 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:23 | 122 | 61 | sell 0.02 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:23 | 123 | 62 | buy 0.02 SOL ← USDC | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:23 | 124 | 63 | sell 0.03 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:23 | 125 | 64 | sell 1.2 USDC → SOL | failed | 8s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:23 | 126 | 65 | sell 3 USDC → USDT | failed | 8s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:23 | 127 | 66 | sell 3 USDT → USDC | failed | 8s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:23 | 128 | 67 | sell 1 USDT → USDC | failed | 8s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:23 | 129 | 68 | sell 3 USDC → USDT | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:23 | 130 | 69 | sell 0.02 SOL → JUP | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:56 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:57 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:57 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:57 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 77s | 1 | main timeout |
| 17:23:57 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:57 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:57 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:57 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 80s | 1 | main timeout |
| 17:23:57 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:57 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:57 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:58 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 81s | 1 | main timeout |
| 17:23:58 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:58 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:58 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 17:23:58 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 81s | 1 | main timeout |
| 17:23:58 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 77s | 1 | main timeout |
| 17:23:58 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 81s | 1 | main timeout |
| 17:23:58 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 87s | 1 | main timeout |
| 17:23:58 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 87s | 1 | main timeout |
| 17:23:58 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 85s | 1 | main timeout |
| 17:23:59 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 85s | 1 | main timeout |
| 17:23:59 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 86s | 1 | main timeout |
| 17:23:59 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 85s | 1 | main timeout |
| 17:23:59 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 79s | 1 | main timeout |
| 17:23:59 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 85s | 1 | main timeout |
| 17:23:59 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 86s | 1 | main timeout |
| 17:23:59 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 86s | 1 | main timeout |
| 17:23:59 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 86s | 1 | main timeout |
| 17:23:59 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 86s | 1 | main timeout |
| 17:23:59 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 86s | 1 | main timeout |
| 17:24:00 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 83s | 1 | main timeout |
| 17:24:00 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 81s | 1 | main timeout |
| 17:24:00 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 82s | 1 | main timeout |
| 17:24:00 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 82s | 1 | main timeout |
| 17:24:00 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 85s | 1 | main timeout |
| 17:24:00 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 83s | 1 | main timeout |
| 17:24:04 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:04 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:04 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:25:14 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:04 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:04 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:04 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:25:17 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:05 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:05 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:05 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:25:19 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:05 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:05 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 17:24:05 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

45 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| InvalidTransaction | main | 23 | SOL → USDC ×7, SOL → USDT ×3, SOL → JUP, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | the bundle must not create the buy token account |
| NoLiquidity | quote | 15 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| InvalidTransaction | acquire | 7 | SOL → USDC ×4, SOL → USDT ×2, SOL → JUP | the bundle must not create the buy token account |

Scenario orders: 137 (136 main, 1 acquire). Cleanup placed 36 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 17:07:38 | 6 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x85444c7b…` [🐞](https://debug.barn.cow.fi/order/0x85444c7b8a53e42b0eded8b1fd032c6da4daccb6dba190ff27184f3401f6a9dd) |
| 17:07:39 | 7 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x7124129b…` [🐞](https://debug.barn.cow.fi/order/0x7124129b6f3b97a93b98c18c3fdfeb5c840cb9745f074e109f33ce6627753acc) |
| 17:07:40 | 8 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x44128370…` [🐞](https://debug.barn.cow.fi/order/0x44128370f0c0cba4dc4f75eee4780320bad22d116a11f8d0a0493e5d74b2ad3f) |
| 17:07:42 | 9 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x91cf077f…` [🐞](https://debug.barn.cow.fi/order/0x91cf077faceb8d7c9bfc8b608e117305e561aef3ec5c17e60957673cdc627590) |
| 17:07:46 | 11 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xf8adcf3f…` [🐞](https://debug.barn.cow.fi/order/0xf8adcf3f4f2adb470a847f2c18822ec0496916f18f295eed1ec84616daf028bd) |
| 17:07:48 | 13 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2e36dac9…` [🐞](https://debug.barn.cow.fi/order/0x2e36dac9f337297aa8ec3e803d7267d93f700c0b905e1252c9d43e73b7a03f78) |
| 17:07:49 | 14 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x187bc7bd…` [🐞](https://debug.barn.cow.fi/order/0x187bc7bdbc073adcb261c0062a56a79978870e51769f42cb9bda9d962fa2d825) |
| 17:07:57 | 16 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xa078b617…` [🐞](https://debug.barn.cow.fi/order/0xa078b61783175ba8d746d1ab086ae430e321c75fd76f325b0841067ca2e14f85) |
| 17:08:05 | 17 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb5598935…` [🐞](https://debug.barn.cow.fi/order/0xb5598935b542a233a583d9b248cfa1440d4d6654b0864f1e78ef4040ff6aa385) |
| 17:08:05 | 18 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xcd616487…` [🐞](https://debug.barn.cow.fi/order/0xcd61648795dc228bdedc993d5db9d32a222ef0429beacb97bd7564fa8a36eb61) |
| 17:09:01 | 19 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x286f3bf3…` [🐞](https://debug.barn.cow.fi/order/0x286f3bf308e4d6e631a8bb0a53261b0cac6657d1fc9fd71900407ce67865b958) |
| 17:09:02 | 20 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x14b3035c…` [🐞](https://debug.barn.cow.fi/order/0x14b3035c9aca5a404e1ad7eaa0d38c19550be3514a57e1cbc990f4ee18f5dab0) |
| 17:09:08 | 21 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x537dd710…` [🐞](https://debug.barn.cow.fi/order/0x537dd710237a6702f1c6456765333caa408d3d8626942a8a471c35213ea36687) |
| 17:09:11 | 22 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd14ae14e…` [🐞](https://debug.barn.cow.fi/order/0xd14ae14e25eb685eec1d5988f7c3f64b9aa5daed849755d89fcc467cd2abd409) |
| 17:09:23 | 24 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x386498fe…` [🐞](https://debug.barn.cow.fi/order/0x386498fea44611319fc52b05789fd073af640370abde13bbc8917f8790aff0c3) |
| 17:18:32 | 31 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x56c9e77d…` [🐞](https://debug.barn.cow.fi/order/0x56c9e77d0120920f74ed35ecbbbcabe6f31872d0eeae384b6216d548b1d2796e) |
| 17:18:36 | 34 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xa8eef52b…` [🐞](https://debug.barn.cow.fi/order/0xa8eef52b7176c10e6ff4e9d9d24debd15aae5a937023fe1eb77f21adafc26b6e) |
| 17:18:43 | 38 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x3fe84e57…` [🐞](https://debug.barn.cow.fi/order/0x3fe84e57a4d9f2f5cb2352e6b6ca97875631a8514f3a0697879faabfe872d122) |
| 17:19:23 | 50 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x0338d91a…` [🐞](https://debug.barn.cow.fi/order/0x0338d91a5294551a865a39443bfbaa07fff07e8892cd62a33ae9d2b135a1d042) |
| 17:27:38 | 6 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc17f290a…` [🐞](https://debug.barn.cow.fi/order/0xc17f290a3d1f7788f032508fdb4a573332663abd8bc8e7dba10651ca22c348e2) |
| 17:27:38 | 7 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xce586824…` [🐞](https://debug.barn.cow.fi/order/0xce5868245048568c9754771efd5536e98e44748b9266fc87d61f200a8891a957) |
| 17:27:40 | 8 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x30fbd308…` [🐞](https://debug.barn.cow.fi/order/0x30fbd30856a4ad0ea6069e93f7fe94d7770f21998856d35ab8de778336a7cd94) |
| 17:27:41 | 9 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x223c1d05…` [🐞](https://debug.barn.cow.fi/order/0x223c1d05ebe470d8abc35560454a51456b5a9c30073f952c97e86f8a929b70a9) |
| 17:27:43 | 11 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x8e8ccf0a…` [🐞](https://debug.barn.cow.fi/order/0x8e8ccf0ad9f24659c9da0a3cc0bd0b736abd75a84fc548b95c9dffc18fa3769d) |
| 17:27:47 | 13 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xaad57189…` [🐞](https://debug.barn.cow.fi/order/0xaad57189c522ea0300b9a685f75a97348dbaa456746000a554f96c5f786ce8b7) |
| 17:27:48 | 14 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x0c4ca18c…` [🐞](https://debug.barn.cow.fi/order/0x0c4ca18c372ba03bd8f529cab1760ae83f35c17f4dedfac99d041cc4057576f2) |
| 17:27:49 | 16 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb62e3d43…` [🐞](https://debug.barn.cow.fi/order/0xb62e3d4398d110388fdcc5a0d81b525275ec04a6ca649c0f5e294d40c81cd54d) |
| 17:27:51 | 17 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x08d480cb…` [🐞](https://debug.barn.cow.fi/order/0x08d480cbf1236a6493d018630c9d2d9494d29f781beb940961971b8b5a75f93b) |
| 17:27:51 | 18 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2e010403…` [🐞](https://debug.barn.cow.fi/order/0x2e0104039809985f31bcdc27134f644b7ed6dcf5a2812651ba15a67cee8fd0a6) |
| 17:28:51 | 19 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb06828be…` [🐞](https://debug.barn.cow.fi/order/0xb06828bed8c7fac27ab159726aafc289a88e6568422279801bdd6d0aa9b2d526) |
| 17:29:03 | 20 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xca0b8880…` [🐞](https://debug.barn.cow.fi/order/0xca0b888007078ffe1a7001f32b63bf1fc8a8dd82d54d15f1b46d518ef8cb664f) |
| 17:29:10 | 21 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x18a19b7b…` [🐞](https://debug.barn.cow.fi/order/0x18a19b7b62198885664207794dabd9395c27e426c6bb4b2fc2c89090e8a27e48) |
| 17:29:12 | 22 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x9dc3f702…` [🐞](https://debug.barn.cow.fi/order/0x9dc3f7028e5cea171930b2f1913e174005f152d393bbdf857aacc81ce04c675c) |
| 17:29:14 | 24 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x06f79226…` [🐞](https://debug.barn.cow.fi/order/0x06f79226157487a5e0c9e9b452cc8ec74bcefa41daebe25426341975a883c69f) |
| 17:30:29 | 31 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x82d616ad…` [🐞](https://debug.barn.cow.fi/order/0x82d616ad85b13f3faa93210ff85bd6602cb0bfd13741c4211df7586fa1b30a70) |
| 17:30:35 | 50 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xf34e860e…` [🐞](https://debug.barn.cow.fi/order/0xf34e860e7d4fdc8176ebdd7459d1638cfbb1bf24a879336bec780f23d3a4598c) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| cancelled | 137 | 100.0% |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 137 | 0 | 0.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 85 | 0 | 0.0% |
| wSOL → JUP | 26 | 0 | 0.0% |
| wSOL → USDT | 1 | 0 | 0.0% |
| wSOL → PUMP | 1 | 0 | 0.0% |
| wSOL → SPYx | 1 | 0 | 0.0% |
| wSOL → MU | 1 | 0 | 0.0% |
| wSOL → Bonk | 1 | 0 | 0.0% |
| wSOL → $WIF | 1 | 0 | 0.0% |
| wSOL → POPCAT | 1 | 0 | 0.0% |
| wSOL → JupSOL | 1 | 0 | 0.0% |
| wSOL → cbBTC | 1 | 0 | 0.0% |
| wSOL → USDe | 1 | 0 | 0.0% |
| wSOL → EURC | 1 | 0 | 0.0% |
| wSOL → USDY | 1 | 0 | 0.0% |
| wSOL → JLP | 1 | 0 | 0.0% |
| wSOL → INF | 1 | 0 | 0.0% |
| wSOL → ETH | 1 | 0 | 0.0% |
| wSOL → BNB | 1 | 0 | 0.0% |
| wSOL → JitoSOL | 1 | 0 | 0.0% |
| wSOL → mSOL | 1 | 0 | 0.0% |
| wSOL → XAUt0 | 1 | 0 | 0.0% |
| wSOL → GLDx | 1 | 0 | 0.0% |
| wSOL → EUROP | 1 | 0 | 0.0% |
| wSOL → Fartcoin | 1 | 0 | 0.0% |
| wSOL → MEW | 1 | 0 | 0.0% |
| wSOL → BOME | 1 | 0 | 0.0% |
| wSOL → hyloSOL | 1 | 0 | 0.0% |
| wSOL → PSOL | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 0 | 0.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 0 | 0.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 0 | 0.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 0 | 0.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 0 | 0.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 0 | 0.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 0 | 0.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 0 | 0.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 0 | 0.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 0 | 0.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 0 | 0.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 0 | 0.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 0 | 0.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 0 | 0.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 0 | 0.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 0 | 0.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 0 | 0.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 0 | 0.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 0 | 0.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 0 | 0.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 0 | 0.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 0 | 0.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 0 | 0.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 0 | 0.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 0 | 0.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 0 | 0.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 0 | 0.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 0 | 0.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 0 | 0.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 0 | 0.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 0 | 0.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 0 | 0.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 0 | 0.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 0 | 0.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 0 | 0.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 0 | 0.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 0 | 0.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 0 | 0.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 0 | 0.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 0 | 0.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 0 | 0.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 0 | 0.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 0 | 0.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 0 | 0.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 0 | 0.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 0 | 0.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 0 | 0.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 0 | 0.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 0 | 0.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 0 | 0.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 0 | 0.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 0 | 0.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 0 | 0.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 0 | 0.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 0 | 0.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 0 | 0.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 0 | 0.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 0 | 0.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 0 | 0.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 1 | 0 | 0.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 1 | 0 | 0.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 1 | 0 | 0.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 0 | 0.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 0 | 0.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 0 | 0.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 0 | 0.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 0 | 0.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 0 | 0.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 0 | 0.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 0 | 0.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 0 | 0.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 0 | 0.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 0 | 0.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 0 | 0.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 0 | 0.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 0 | 0.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 0 | 0.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 0 | 0.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 0 | 0.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 0 | 0.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 0 | 0.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 0 | 0.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 0 | 0.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 137 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 17:04:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x133dadc0…` [🐞](https://debug.barn.cow.fi/order/0x133dadc0f41ae8ff8e304e4ebc1c7c60e1d49265ad3c367ff5c79b28604ad9a0) |
| 17:04:30 | wSOL → USDT | market sell | Not filled within fill timeout (cancelled by sim) | `0x4dd8f4c3…` [🐞](https://debug.barn.cow.fi/order/0x4dd8f4c3b2ec29072b4145d0cd83deca5b3c2c978a77ad2c9aaa71b0c324fdb6) |
| 17:04:36 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x953e1eb5…` [🐞](https://debug.barn.cow.fi/order/0x953e1eb5ea250988f0881fece338706828386ea31bd5149c7d6b2ec8080663bd) |
| 17:06:16 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x87c88269…` [🐞](https://debug.barn.cow.fi/order/0x87c88269db6bcae182795a145f6c7efcb654a6df537d14d6c9a7df96eebddad3) |
| 17:06:16 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x7bf32c9d…` [🐞](https://debug.barn.cow.fi/order/0x7bf32c9dcacfb1a9bc16be6547c46fc68456e171120e48816ef207136a4576f5) |
| 17:06:16 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x2ef9f514…` [🐞](https://debug.barn.cow.fi/order/0x2ef9f514ab202dd58bb19495039dcaf870f72a9f18d5b709dbe1a9c0c75c91fd) |
| 17:06:16 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x8e9133b6…` [🐞](https://debug.barn.cow.fi/order/0x8e9133b6188e36d2f86594428a59bd572c6e749e9523c6160cbd0864dc3a7a91) |
| 17:06:17 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xc89d0dcf…` [🐞](https://debug.barn.cow.fi/order/0xc89d0dcf548554f36d846ff4ec1c25f27ea9e82a0d653ad1a96c9edf66add507) |
| 17:06:17 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x2c41cef7…` [🐞](https://debug.barn.cow.fi/order/0x2c41cef7fdc10111ea5bff62fd17024f4d483a4a892f0f5bd687f6a813cdce6d) |
| 17:06:17 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x9902ef11…` [🐞](https://debug.barn.cow.fi/order/0x9902ef1106ecf25dd29110317233dd30d12c3d836cbaa511d452a99cdb07578f) |
| 17:06:17 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x042d9566…` [🐞](https://debug.barn.cow.fi/order/0x042d95667ec088ed1369fbf3d5ab907706c9c9b55af0556cdb73c12a8e173fd4) |
| 17:06:17 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf5656164…` [🐞](https://debug.barn.cow.fi/order/0xf5656164dff4dbd60fbac0f1459a402fd1104bb1945583463fb4df70b4b54acc) |
| 17:06:17 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x363612cf…` [🐞](https://debug.barn.cow.fi/order/0x363612cfad7fb6d7026f158dc893546c2fc8c082f8db18bc3d1ec0ca6d2b5d93) |
| 17:06:17 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x16e1bc0b…` [🐞](https://debug.barn.cow.fi/order/0x16e1bc0b52d60a7a1fa17ea23f53405d8e4f30e900ecf15b06cc53097dd9dd16) |
| 17:06:18 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x5483de21…` [🐞](https://debug.barn.cow.fi/order/0x5483de21ffd63279c8c988c5a6ad31af878a833ce4059898fdad7020d5b5c063) |
| 17:06:18 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x24018dbf…` [🐞](https://debug.barn.cow.fi/order/0x24018dbfcf5d75b67a156c163ce8ed741ae90fa9081696ef37ff343c2fe2b6ae) |
| 17:06:19 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x009ea653…` [🐞](https://debug.barn.cow.fi/order/0x009ea653c4ff45e19b1cfdf831c81926f80dbc65132b602c56eb31b8eae8475a) |
| 17:06:19 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf0f151b9…` [🐞](https://debug.barn.cow.fi/order/0xf0f151b9f7536fd2423c400e3e9f1736f41c999e6e14e90faaedd6ae68ec2543) |
| 17:06:19 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x1e57b5e4…` [🐞](https://debug.barn.cow.fi/order/0x1e57b5e43f258008ebf530f21b05557cccf228dceb6b0f434cd3f44500175a57) |
| 17:06:20 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xfefdd665…` [🐞](https://debug.barn.cow.fi/order/0xfefdd66554900bc0e01cf06d64486a12386834134a2e7ad491636cb99c50eab2) |
| 17:06:20 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x10346343…` [🐞](https://debug.barn.cow.fi/order/0x10346343e2098b60c458313082e8e16800591a0674a5bb002d63dcd1df4cc060) |
| 17:06:20 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x4fe2692c…` [🐞](https://debug.barn.cow.fi/order/0x4fe2692c9fcc1d515da74d9539541cd686cdf08f83bec41a110537974862383b) |
| 17:06:21 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x6e7dd55e…` [🐞](https://debug.barn.cow.fi/order/0x6e7dd55e1735acf905cd5770a17e5376ac0dc0b3f45bc0c3a973002bac757484) |
| 17:06:21 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x846dc9a4…` [🐞](https://debug.barn.cow.fi/order/0x846dc9a4b86b785a344683fa6f82b04928073f62b8ff9034420b03d40a2820d8) |
| 17:06:21 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x961f9b79…` [🐞](https://debug.barn.cow.fi/order/0x961f9b7919a0eef5e9d1d567af0750df56f194211fd269cae74e86284b545cd0) |
| 17:06:21 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x90497b9b…` [🐞](https://debug.barn.cow.fi/order/0x90497b9b8126e53d38a9efd4704b22d447f4019398f530c4fd852aee552ca0f8) |
| 17:06:21 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xcced5946…` [🐞](https://debug.barn.cow.fi/order/0xcced594676be0b210172fd758c63e7c451d5d91b7d4c3ca1df7de4973955ba8b) |
| 17:06:22 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb9366eaa…` [🐞](https://debug.barn.cow.fi/order/0xb9366eaa0cd66485c3d99c3c38cf762b842121da7178e359c548369d8a9bf6cd) |
| 17:10:59 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x68aa26f1…` [🐞](https://debug.barn.cow.fi/order/0x68aa26f1530897d6401b201479a450e937a9bc62c7d327a4b2faf33de0494e36) |
| 17:11:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x504047b4…` [🐞](https://debug.barn.cow.fi/order/0x504047b47d30442ad1f7ab81aa02bdeda8f91fe99d88ac7687fe129e4f6e0798) |
| 17:11:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xaf4bad47…` [🐞](https://debug.barn.cow.fi/order/0xaf4bad4774d8deabd2638f29d2ad896dba2f46dca16aa958e58d10b3ba0a160e) |
| 17:11:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x442cf5ab…` [🐞](https://debug.barn.cow.fi/order/0x442cf5ab15127701738b201b7c1ab0d2d697bd3c8b99de9c2973ad39ebcbd865) |
| 17:12:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7ecd3ebe…` [🐞](https://debug.barn.cow.fi/order/0x7ecd3ebe951986bebcf35d058e01957a2a90e9492c939b5be6717d19d09d3b69) |
| 17:12:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf643df68…` [🐞](https://debug.barn.cow.fi/order/0xf643df68d6a5f76466ca13cfca6dd148286bf2be59f9f776dfe6f61e8f66eb0b) |
| 17:12:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x39f6e257…` [🐞](https://debug.barn.cow.fi/order/0x39f6e257666cde2a2e91bff6d301e242830dd59b70de556ffcdba1ee54064c37) |
| 17:12:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd03d9cf5…` [🐞](https://debug.barn.cow.fi/order/0xd03d9cf560c906efd56b6c151d641e4fbb95afd7f7b7139e51a2e9d059f77a80) |
| 17:12:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6e77154e…` [🐞](https://debug.barn.cow.fi/order/0x6e77154e5003c82f4dba3dcd7122845789bed066c8393b5780a65acf25dea15f) |
| 17:12:31 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x16f51c7f…` [🐞](https://debug.barn.cow.fi/order/0x16f51c7f5a96da91a70178b0196de7351887aaba5c5c8a22bfd84a491422f689) |
| 17:12:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x44a5c37b…` [🐞](https://debug.barn.cow.fi/order/0x44a5c37b64a8747461084e4ba08dc8671f2cdf396e8455dc72228e4a6e48223d) |
| 17:12:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3b4244e3…` [🐞](https://debug.barn.cow.fi/order/0x3b4244e3cc9e47edd4b8122f1b2158e66b5877e9c92ae5e8370ea3542e3c2d83) |
| 17:14:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x749d86d8…` [🐞](https://debug.barn.cow.fi/order/0x749d86d865e9ba96f5e24bca0a1ec7fd026b51d624cb70c0f58e438da51a6131) |
| 17:14:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xdf5d1349…` [🐞](https://debug.barn.cow.fi/order/0xdf5d1349740e9949473cbfd490dc45c2a86583631e834d8ae14ac298b03b0a21) |
| 17:14:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xed08328a…` [🐞](https://debug.barn.cow.fi/order/0xed08328a24792e8085cbcd6785ce0a4830dc1a550dff2458fec7c31484319d9a) |
| 17:14:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9e9541d4…` [🐞](https://debug.barn.cow.fi/order/0x9e9541d493bdd5163dacb54a0a158a4d2b4b52ea95c6594e8294f5c7e31c97d2) |
| 17:14:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6c422ed3…` [🐞](https://debug.barn.cow.fi/order/0x6c422ed3d3b7cf6fe3a866252339938811a49d5e3a84b7e8f2d724ceefbef45d) |
| 17:14:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x78d99193…` [🐞](https://debug.barn.cow.fi/order/0x78d99193f25c348c5edc8ff9a9c62757046ffd57c135b988c6cde9d1657328b5) |
| 17:14:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8c9e7503…` [🐞](https://debug.barn.cow.fi/order/0x8c9e7503dd64ea980f3905b77f471391ad85fa9a404e7b756bb2fe9c4708fc9a) |
| 17:14:03 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd29d02ac…` [🐞](https://debug.barn.cow.fi/order/0xd29d02ac9aef410117d8525015ae3945744aeaa6c71ccb29bccc818182b368bb) |
| 17:14:03 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc9b301d6…` [🐞](https://debug.barn.cow.fi/order/0xc9b301d65fb3cf924defff8ba23f85f1409729ccf1af867cc48782f8cfebda8b) |
| 17:14:03 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xca85443c…` [🐞](https://debug.barn.cow.fi/order/0xca85443cd45f647d87ac65f291436dfb9110b8dcaae128b2277fd02a4c0bdcc7) |
| 17:14:04 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc7b4426c…` [🐞](https://debug.barn.cow.fi/order/0xc7b4426c38f2ac3a55c6602c55bb761af89034b63254029073cd0bf2d15f0d67) |
| 17:14:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x51416596…` [🐞](https://debug.barn.cow.fi/order/0x514165962cf0643d8ae114900c0d84881c20962fb64a3f5fd3702efdc969cb68) |
| 17:14:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xffeafe69…` [🐞](https://debug.barn.cow.fi/order/0xffeafe69df382fb590990f5a9083f70b6c6c536c7f21071fb83542915a6d5208) |
| 17:14:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf132f879…` [🐞](https://debug.barn.cow.fi/order/0xf132f879d2c0e0c254d0eb7d61476768e9e4f1d70a0e3128be8936f8f888c669) |
| 17:14:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xdde2f892…` [🐞](https://debug.barn.cow.fi/order/0xdde2f8922e38324dad98ccbf2c68c7fa0c7009d3796361827e61c1523dc43ae7) |
| 17:14:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb1e3d7bd…` [🐞](https://debug.barn.cow.fi/order/0xb1e3d7bd46531a40c637234f6ba14ae1f18beb1bf5ed7359007f5a39fb55d2dc) |
| 17:15:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc4446ab8…` [🐞](https://debug.barn.cow.fi/order/0xc4446ab8cccd530985a6268092315bf2e4e80afd4503dc276d26320b1fd520f0) |
| 17:15:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe04554fd…` [🐞](https://debug.barn.cow.fi/order/0xe04554fdbe99244e8356775658c2e9e95a5be93112df3505ea2b2b4e63e708e2) |
| 17:15:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0ef8f597…` [🐞](https://debug.barn.cow.fi/order/0x0ef8f597b4af9863dcf9acda1f725ad0ec391dd0140e1018547f387469605ed1) |
| 17:15:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xff1fb2c2…` [🐞](https://debug.barn.cow.fi/order/0xff1fb2c2317a25fb74af43230d0d791a06efdee9d0bcdf9244f0732c2187fcb1) |
| 17:15:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5b721989…` [🐞](https://debug.barn.cow.fi/order/0x5b721989e3b2ad629dd44f555469de153fb49e5810c5f83516fcc14d048953df) |
| 17:15:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x92235245…` [🐞](https://debug.barn.cow.fi/order/0x92235245843982b9b8eaa6d81d71ac5e2671ad9717e4891a3b2dde85e7410237) |
| 17:15:34 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc6d6da32…` [🐞](https://debug.barn.cow.fi/order/0xc6d6da324c9dbf7ecb3fe0f666d53473535d42f9979cd8e2c787216085c13a31) |
| 17:15:34 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x64a4cc34…` [🐞](https://debug.barn.cow.fi/order/0x64a4cc34cd628dbfce9026e44ea57c64c0cac3b7ffcd4f3b3690e349915fcfd2) |
| 17:15:34 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3f756240…` [🐞](https://debug.barn.cow.fi/order/0x3f756240ce0c8c7bf8e09eb2e2ad000ba82341b5429937fffb1db45d20ff753b) |
| 17:15:34 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfcd20743…` [🐞](https://debug.barn.cow.fi/order/0xfcd2074381aa52eb47ab9dcb943b643c0f7b8bd7f9976d29aeb3c3f8557522e9) |
| 17:15:34 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4e2e5261…` [🐞](https://debug.barn.cow.fi/order/0x4e2e526108d6c38b03d8c80e6e6bf16abb39f1ef8ee9dd0cfd744674cf10d4c4) |
| 17:15:34 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2a8ae7f0…` [🐞](https://debug.barn.cow.fi/order/0x2a8ae7f06bb93cae99dbcd0b2a18235925c65d5dd4a8c82edc48195c635e44ab) |
| 17:15:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8c851c39…` [🐞](https://debug.barn.cow.fi/order/0x8c851c3951f28e954f620ec7ff1927ca017e7f60360a0a619cc53b5ab298a2e0) |
| 17:15:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1779abf2…` [🐞](https://debug.barn.cow.fi/order/0x1779abf20f81af700fdd6f049bfa7ffbcb3a6cc840015674503604310aed6b14) |
| 17:15:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x26f15b3f…` [🐞](https://debug.barn.cow.fi/order/0x26f15b3fe336d5e0ff6917165192a69610d5d58deb6dc99df770f1dc2a2e5b0b) |
| 17:15:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x21038be8…` [🐞](https://debug.barn.cow.fi/order/0x21038be885c1c2fbed814926399a8e008ddd27758265ae4be94b87504ae21240) |
| 17:15:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb8c57517…` [🐞](https://debug.barn.cow.fi/order/0xb8c57517212df2b2c561c750d6baa36ab3901d1a1a687fc6c3d56e74a2109d5f) |
| 17:15:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2441acee…` [🐞](https://debug.barn.cow.fi/order/0x2441acee966e478c0e0ecc234524f7ecf682f30dda7c174693d5303662be8ed6) |
| 17:15:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe9abdb9a…` [🐞](https://debug.barn.cow.fi/order/0xe9abdb9a23ebda612e567b006b3a58ea676a76c5bc82f18fa8e6f0d44bb2454a) |
| 17:15:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xeac92e16…` [🐞](https://debug.barn.cow.fi/order/0xeac92e16874f256e4c025efa86193cfca2898c924570a6befbf7812482ff27ef) |
| 17:15:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb4ee5480…` [🐞](https://debug.barn.cow.fi/order/0xb4ee548008447652e9dd223fdf9476ed5b42617ab59fd2be9b13c7ea60130947) |
| 17:15:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd12a3588…` [🐞](https://debug.barn.cow.fi/order/0xd12a3588e7f06a6fcee40945e07d5b80d73c975fa30c5fb1b2585a803526138b) |
| 17:15:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xdb35ae43…` [🐞](https://debug.barn.cow.fi/order/0xdb35ae4332377d865e88884314e2191529882f447e44ceeea5bf573c5680144c) |
| 17:15:39 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0028a89b…` [🐞](https://debug.barn.cow.fi/order/0x0028a89b0f6a6685b00d6a35d646a7369c93b7c0b05772d919c53ff8195f0e53) |
| 17:17:03 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x24389197…` [🐞](https://debug.barn.cow.fi/order/0x243891978384d0007b129a74d5a3faf07c32ccace43944aae13c6eba112a0d46) |
| 17:17:03 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x78684772…` [🐞](https://debug.barn.cow.fi/order/0x78684772e53e74553ce24390f98e02d8bb91d1f2c693d1499c4685171005d45b) |
| 17:17:04 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd8df986f…` [🐞](https://debug.barn.cow.fi/order/0xd8df986f5f35eb23dd59bb1c60b66572dff6094f0999f7c55b3ab98a082123ec) |
| 17:17:04 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x28d471e1…` [🐞](https://debug.barn.cow.fi/order/0x28d471e178d482feac219818bd3b5c13b39a6d91eff579c0f74eb48f5d14affd) |
| 17:17:04 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x01a4e202…` [🐞](https://debug.barn.cow.fi/order/0x01a4e2029e4d13f14e5d02d7a35208c509317e79bda8c0ac83d500d47e9f3259) |
| 17:17:04 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8cd498bc…` [🐞](https://debug.barn.cow.fi/order/0x8cd498bc53ffe027c7f8ae4007f97421f100995573ccb7fa4c35f95324c695fa) |
| 17:17:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd088aafb…` [🐞](https://debug.barn.cow.fi/order/0xd088aafb68475bd6864085a93e2440aec7e9ccc586971d1da53b5c9fbfcb1cb0) |
| 17:17:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf5cb4fe0…` [🐞](https://debug.barn.cow.fi/order/0xf5cb4fe0b859bc33ee6cf1be5e3b819195c4e8c36a9da5b198f4df69fc4a69a4) |
| 17:17:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x06241583…` [🐞](https://debug.barn.cow.fi/order/0x06241583b66cdfacde43ee6603d97a7e70804118aa42b4682f671fcd7f9d2ef5) |
| 17:17:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb5942d4e…` [🐞](https://debug.barn.cow.fi/order/0xb5942d4e12d622ed26dcc55bbf1e6c14d16da74fc4808dfbdbab18dc1972e718) |
| 17:17:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2cdbd273…` [🐞](https://debug.barn.cow.fi/order/0x2cdbd27389d87135001a25f832bbdd21993cb07a72dca9bdae445456e335a477) |
| 17:17:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xef5eaf22…` [🐞](https://debug.barn.cow.fi/order/0xef5eaf22e2f3fc25299259d6815314c5c6d09dadba944f5352b2f63e7aa55439) |
| 17:17:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8cabecb7…` [🐞](https://debug.barn.cow.fi/order/0x8cabecb79a8af2ae41a5835a19cfca8675710856b6397c891fda9acd8ba94fa0) |
| 17:17:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7848e3c9…` [🐞](https://debug.barn.cow.fi/order/0x7848e3c984b5221a37880fd074cc16a397062117a0f13546fa7666eaffb17b5f) |
| 17:17:05 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x426b17aa…` [🐞](https://debug.barn.cow.fi/order/0x426b17aa6edbf1535cba2ad5e4ceb51cd6fba09f0cc2a927fb3b68e767a041a5) |
| 17:17:06 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x91a8f42a…` [🐞](https://debug.barn.cow.fi/order/0x91a8f42a39409cf79c3e7c0445092c0b250dab0900d52ac314974022d7d5360e) |
| 17:17:07 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd2f173ef…` [🐞](https://debug.barn.cow.fi/order/0xd2f173efd76ea118ccdb5b874e2a671e96129ad0b17c3e55b6af2e19ae8fb11b) |
| 17:17:07 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4ea855b4…` [🐞](https://debug.barn.cow.fi/order/0x4ea855b431c2151db00746309daf80907d3cb3b60f9c5b2dc02c147f61815ddf) |
| 17:17:07 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x79f9cc01…` [🐞](https://debug.barn.cow.fi/order/0x79f9cc010a42f3cdcbf248ba526469573d8acb692ece43952f130fcf876cebcf) |
| 17:17:08 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe510036a…` [🐞](https://debug.barn.cow.fi/order/0xe510036ae1fff1c5df8d73881ff58d0365b1fff6542cc31dada260d1ac979f2f) |
| 17:17:08 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc346836a…` [🐞](https://debug.barn.cow.fi/order/0xc346836a01ff7bd0ddf4683eecc9c9d0dbd3d576d1ca152c12587aa21afa2c41) |
| 17:17:09 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe1ca5fea…` [🐞](https://debug.barn.cow.fi/order/0xe1ca5feaf8e725770ec6f49850434c4627f1e5bec43c3cc0c8a65d23fe822ce2) |
| 17:17:09 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xde6c0d56…` [🐞](https://debug.barn.cow.fi/order/0xde6c0d568f35f5be19bfd303676a577f1764e1e01beacc76bb3cb75860cf0488) |
| 17:17:09 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9f403d9f…` [🐞](https://debug.barn.cow.fi/order/0x9f403d9f973e27cd56057740067d3110ef7ee8b0e97afa22ccd34bd13fd1ee5f) |
| 17:17:09 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x80594048…` [🐞](https://debug.barn.cow.fi/order/0x80594048c60040cdb6ddc90d9e8cbafd43eeee7f015e73ca3c1f121cfe319ff5) |
| 17:17:09 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5d47cc0b…` [🐞](https://debug.barn.cow.fi/order/0x5d47cc0b525c291af6b3247a51044589af55b2b047b6198fa84752111e4686b1) |
| 17:17:09 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfbbc76f7…` [🐞](https://debug.barn.cow.fi/order/0xfbbc76f71eddbcf6385a2bf4b4ced198c43e2ab4f29feb7832b82378eca200f2) |
| 17:17:11 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4576aad2…` [🐞](https://debug.barn.cow.fi/order/0x4576aad2b50566da89f3c0714e442a197277e2c1ef7950299676f6cbfdc6951f) |
| 17:17:11 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x73569b0b…` [🐞](https://debug.barn.cow.fi/order/0x73569b0b381ca1da9dcb8125d341507ab07012e583eeeb4d3e85356c40cdcce4) |
| 17:17:11 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc9674d8a…` [🐞](https://debug.barn.cow.fi/order/0xc9674d8a57e24450215d676351f1f69f4902aaba36cc8ad5c725e66a8a14ed05) |
| 17:17:11 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x384524a0…` [🐞](https://debug.barn.cow.fi/order/0x384524a08b55223fb9833c761c5d6accfcf05f50673ada8339e4aef3c0b62049) |
| 17:17:11 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xcd440429…` [🐞](https://debug.barn.cow.fi/order/0xcd440429bd9c8a67b597457dd5874879b37a98d5d2a2e254b92824f34fa25a2f) |
| 17:24:06 | wSOL → PUMP | market sell | Not filled within fill timeout (cancelled by sim) | `0x3c8d4797…` [🐞](https://debug.barn.cow.fi/order/0x3c8d47979b9de19e4cbe43bcfe202ff6b9d3cb888cd02c64b638f33f6e206e0f) |
| 17:24:06 | wSOL → SPYx | market sell | Not filled within fill timeout (cancelled by sim) | `0x16939649…` [🐞](https://debug.barn.cow.fi/order/0x16939649563ad3b76691b720141cfc943463910eb4b33375221d8bc2b4ed394c) |
| 17:24:07 | wSOL → MU | market sell | Not filled within fill timeout (cancelled by sim) | `0xf42040b2…` [🐞](https://debug.barn.cow.fi/order/0xf42040b2eab8ad5b065a5613a037c7715fdec08061b5a1344f4337777179b186) |
| 17:24:07 | wSOL → Bonk | market sell | Not filled within fill timeout (cancelled by sim) | `0xd03124b7…` [🐞](https://debug.barn.cow.fi/order/0xd03124b7293141d6cb1c773d3a6b852abd554b5061ee646301bd2f11bc9ed878) |
| 17:24:08 | wSOL → $WIF | market sell | Not filled within fill timeout (cancelled by sim) | `0x76b47693…` [🐞](https://debug.barn.cow.fi/order/0x76b476930e279e313dcca120d1ee7ba9917d97f78f99488717d74ee3f69e3ca2) |
| 17:24:08 | wSOL → POPCAT | market sell | Not filled within fill timeout (cancelled by sim) | `0x468a98ee…` [🐞](https://debug.barn.cow.fi/order/0x468a98ee20f70dd80a995bd2a08a7996429c6c902cb7e2b37ef7b72cbf9bdb2f) |
| 17:24:09 | wSOL → JupSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0xdd8ba455…` [🐞](https://debug.barn.cow.fi/order/0xdd8ba455150c2b6aab499fce988b30c6c8804e311d81dd78e041b1b9cea57f6e) |
| 17:24:09 | wSOL → cbBTC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd0a5741e…` [🐞](https://debug.barn.cow.fi/order/0xd0a5741ef85510077267c063829db90870851370762bf08ee523e9fb97fc70e8) |
| 17:24:09 | wSOL → USDe | market sell | Not filled within fill timeout (cancelled by sim) | `0x41343675…` [🐞](https://debug.barn.cow.fi/order/0x41343675ea9496e7697fa0a5b534873b76b84cc5ff63ef6c65c1a7b6261cb4ca) |
| 17:24:09 | wSOL → EURC | market sell | Not filled within fill timeout (cancelled by sim) | `0xdf179845…` [🐞](https://debug.barn.cow.fi/order/0xdf179845318b04ba31c29f22ba55239fa992e593a5616d9419810372910ff192) |
| 17:24:09 | wSOL → USDY | market sell | Not filled within fill timeout (cancelled by sim) | `0xeea2e9fe…` [🐞](https://debug.barn.cow.fi/order/0xeea2e9feb30006dff3273818c13163410899b69a36bafcae30ed8ada050bbe16) |
| 17:24:09 | wSOL → JLP | market sell | Not filled within fill timeout (cancelled by sim) | `0x76e5549a…` [🐞](https://debug.barn.cow.fi/order/0x76e5549af70a48c3a59918a9cfbd5f4bbf73c64a324d135448faba6845936b8a) |
| 17:24:10 | wSOL → INF | market sell | Not filled within fill timeout (cancelled by sim) | `0x0004bbb3…` [🐞](https://debug.barn.cow.fi/order/0x0004bbb32855ebfc59b2e30e1d89372f29ae80742477ca1ff103c200bc87c6e9) |
| 17:24:10 | wSOL → ETH | market sell | Not filled within fill timeout (cancelled by sim) | `0xb8cc0b04…` [🐞](https://debug.barn.cow.fi/order/0xb8cc0b04f40ae57142fbf63a3316cb06b72abb57d05d3f0a761119c2e690ea2d) |
| 17:24:10 | wSOL → BNB | market sell | Not filled within fill timeout (cancelled by sim) | `0x8346f534…` [🐞](https://debug.barn.cow.fi/order/0x8346f5341c5e8f4563d57b8f1b76c7b1ee2e2a03fde6a6d403b5950e0acc8b5b) |
| 17:24:10 | wSOL → JitoSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0xdabb9a7c…` [🐞](https://debug.barn.cow.fi/order/0xdabb9a7ce47a003f166304fdf3554e89ac1a38ad124023bd4b444143c06a0bae) |
| 17:24:11 | wSOL → mSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x8969c2ad…` [🐞](https://debug.barn.cow.fi/order/0x8969c2ad6ec602cfafdb20992251bde21882970971c619e26004687bdef806bc) |
| 17:24:11 | wSOL → XAUt0 | market sell | Not filled within fill timeout (cancelled by sim) | `0xb5e7e3d9…` [🐞](https://debug.barn.cow.fi/order/0xb5e7e3d9618f9932bbc0f19daeb1507522cbe894fb14bf552c19625ef40a1ea7) |
| 17:24:11 | wSOL → GLDx | market sell | Not filled within fill timeout (cancelled by sim) | `0xef773e4c…` [🐞](https://debug.barn.cow.fi/order/0xef773e4c7320f1e721b44aa57b7b357b1224c2f816a93ee01914851460ad84be) |
| 17:24:11 | wSOL → EUROP | market sell | Not filled within fill timeout (cancelled by sim) | `0x68383443…` [🐞](https://debug.barn.cow.fi/order/0x68383443cb1c1881b015a9d80784349a4e062ebe7dd77836f451465b3a9a0012) |
| 17:24:11 | wSOL → Fartcoin | market sell | Not filled within fill timeout (cancelled by sim) | `0xd504dbd9…` [🐞](https://debug.barn.cow.fi/order/0xd504dbd94858bebdb523f763b281d2eb5d1e2db6f8057d721c8fa8a1ab0335eb) |
| 17:24:12 | wSOL → MEW | market sell | Not filled within fill timeout (cancelled by sim) | `0x2262905f…` [🐞](https://debug.barn.cow.fi/order/0x2262905f9749bcce79915c807a69bc57b8ee5d627bbd93b7f68734ee04fabdfd) |
| 17:24:12 | wSOL → BOME | market sell | Not filled within fill timeout (cancelled by sim) | `0xfe11e9d2…` [🐞](https://debug.barn.cow.fi/order/0xfe11e9d2c9aad4ab043c00a0d5fdde2ae74a5f3bf604e8fbae27b62e0e9d299e) |
| 17:24:12 | wSOL → hyloSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x041906b2…` [🐞](https://debug.barn.cow.fi/order/0x041906b20783a84cd24879f15162718fa97ad2524132b12a20ed76b6e7869fd8) |
| 17:24:12 | wSOL → PSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x0178f1dc…` [🐞](https://debug.barn.cow.fi/order/0x0178f1dc9a305e99516b6ad7151ac96abd66691a9373a83aa28fe23a5d80af01) |
