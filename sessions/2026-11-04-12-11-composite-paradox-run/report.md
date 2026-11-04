# Solana QoS report: 2026-11-04-12-11-composite-paradox-run

Barn, orders created between `2026-11-04T12:11:43.702Z` and `2026-11-04T12:32:31.503Z`. Data fetched 2026-11-04T12:31:49+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 137 |
| Orders executed | **5** (3.6%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 85 |
| Settlement txs | 5 |

## Scenario results

Target solver: `paradox`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-11-04T12:11:43.702Z | 2026-11-04T12:13:02.038Z | 1/6 | 5 | 3 | 2 | 16.7% |
| solver-same-direction-25 | 2026-11-04T12:13:17.919Z | 2026-11-04T12:14:42.784Z | 0/25 | 25 | 25 | 0 | 0.0% |
| solver-burst-sell | 2026-11-04T12:16:23.996Z | 2026-11-04T12:23:52.398Z | 3/84 | 81 | 84 | 3 | 3.6% |
| solver-token-coverage | 2026-11-04T12:25:53.617Z | 2026-11-04T12:27:29.808Z | 0/52 | 52 | 25 | 0 | 0.0% |

## Scenario

4 of 167 scenario rows completed. 0 retries, 16 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 12:11:43 | 1 | 1 | sell 0.005 SOL → USDC | failed | 71s | 1 | main timeout |
| 12:11:44 | 2 | 2 | sell 0.005 SOL → USDT | filled | 74s | 1 |  |
| 12:11:44 | 3 | 3 | sell 0.5 JUP → USDC | failed | 14s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 12:12:55 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:12:58 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:11:58 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 8s | 0 | acquire JUP error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:13:17 | 7 | 4 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 12:13:17 | 8 | 5 | sell 0.005 SOL → JUP | failed | 73s | 1 | main timeout |
| 12:13:17 | 9 | 6 | sell 0.005 SOL → JUP | failed | 77s | 1 | main timeout |
| 12:13:17 | 10 | 7 | sell 0.005 SOL → JUP | failed | 75s | 1 | main timeout |
| 12:13:17 | 11 | 8 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 12:13:17 | 12 | 9 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 12:13:17 | 13 | 10 | sell 0.005 SOL → JUP | failed | 83s | 1 | main timeout |
| 12:13:17 | 14 | 11 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 12:13:17 | 15 | 12 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 12:13:17 | 16 | 13 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:13:17 | 17 | 14 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 12:13:17 | 18 | 15 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 12:13:17 | 19 | 16 | sell 0.005 SOL → JUP | failed | 84s | 1 | main timeout |
| 12:13:17 | 20 | 17 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:13:17 | 21 | 18 | sell 0.005 SOL → JUP | failed | 84s | 1 | main timeout |
| 12:13:17 | 22 | 19 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:13:17 | 23 | 20 | sell 0.005 SOL → JUP | failed | 83s | 1 | main timeout |
| 12:13:17 | 24 | 21 | sell 0.005 SOL → JUP | failed | 83s | 1 | main timeout |
| 12:13:17 | 25 | 22 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:13:17 | 26 | 23 | sell 0.005 SOL → JUP | failed | 83s | 1 | main timeout |
| 12:13:17 | 27 | 24 | sell 0.005 SOL → JUP | failed | 85s | 1 | main timeout |
| 12:13:17 | 28 | 25 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 12:13:17 | 29 | 26 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 12:13:17 | 30 | 27 | sell 0.005 SOL → JUP | failed | 83s | 1 | main timeout |
| 12:13:17 | 31 | 28 | sell 0.005 SOL → JUP | failed | 85s | 1 | main timeout |
| 12:16:24 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 40s | 1 |  |
| 12:16:24 | 33 | 30 | sell 0.003 SOL → USDC | filled | 58s | 1 |  |
| 12:16:24 | 34 | 31 | sell 0.0035 SOL → USDC | failed | 71s | 1 | main timeout |
| 12:16:24 | 35 | 32 | sell 0.004 SOL → USDC | filled | 55s | 1 |  |
| 12:17:54 | 36 | 29 | sell 0.0025 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:17:54 | 37 | 30 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:17:54 | 38 | 31 | sell 0.0035 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:17:54 | 39 | 32 | sell 0.004 SOL → USDC | failed | 73s | 1 | main timeout |
| 12:17:53 | 40 | 33 | sell 0.0025 SOL → USDC | failed | 73s | 1 | main timeout |
| 12:17:54 | 41 | 34 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:17:54 | 42 | 35 | sell 0.0035 SOL → USDC | failed | 73s | 1 | main timeout |
| 12:17:54 | 43 | 36 | sell 0.004 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:19:23 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:19:23 | 45 | 30 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:19:23 | 46 | 31 | sell 0.0035 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:19:23 | 47 | 32 | sell 0.004 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:19:23 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:19:23 | 49 | 34 | sell 0.003 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:19:23 | 50 | 35 | sell 0.0035 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:19:23 | 51 | 36 | sell 0.004 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:19:23 | 52 | 37 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:19:23 | 53 | 38 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:19:23 | 54 | 39 | sell 0.0035 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:19:23 | 55 | 40 | sell 0.004 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:19:23 | 56 | 41 | sell 0.0025 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:19:23 | 57 | 42 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:19:23 | 58 | 43 | sell 0.0035 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:19:23 | 59 | 44 | sell 0.004 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:20:54 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:20:54 | 61 | 30 | sell 0.003 SOL → USDC | failed | 73s | 1 | main timeout |
| 12:20:54 | 62 | 31 | sell 0.0035 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:20:54 | 63 | 32 | sell 0.004 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:20:53 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 84s | 1 | main timeout |
| 12:20:54 | 65 | 34 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:20:54 | 66 | 35 | sell 0.0035 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:20:54 | 67 | 36 | sell 0.004 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:20:54 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:20:54 | 69 | 38 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:20:54 | 70 | 39 | sell 0.0035 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:20:54 | 71 | 40 | sell 0.004 SOL → USDC | failed | 73s | 1 | main timeout |
| 12:20:54 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 12:20:54 | 73 | 42 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 12:20:54 | 74 | 43 | sell 0.0035 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:20:54 | 75 | 44 | sell 0.004 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:20:54 | 76 | 45 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:20:54 | 77 | 46 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:20:54 | 78 | 47 | sell 0.0035 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:20:54 | 79 | 48 | sell 0.004 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:20:54 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:20:54 | 81 | 50 | sell 0.003 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:20:54 | 82 | 51 | sell 0.0035 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:20:54 | 83 | 52 | sell 0.004 SOL → USDC | failed | 81s | 1 | main timeout |
| 12:22:23 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:22:23 | 85 | 30 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:22:23 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:22:23 | 87 | 32 | sell 0.004 SOL → USDC | failed | 79s | 1 | main timeout |
| 12:22:24 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 88s | 1 | main timeout |
| 12:22:24 | 89 | 34 | sell 0.003 SOL → USDC | failed | 85s | 1 | main timeout |
| 12:22:23 | 90 | 35 | sell 0.0035 SOL → USDC | failed | 82s | 1 | main timeout |
| 12:22:23 | 91 | 36 | sell 0.004 SOL → USDC | failed | 86s | 1 | main timeout |
| 12:22:23 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:22:23 | 93 | 38 | sell 0.003 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:22:23 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:22:23 | 95 | 40 | sell 0.004 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:22:23 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:22:23 | 97 | 42 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 12:22:23 | 98 | 43 | sell 0.0035 SOL → USDC | failed | 78s | 1 | main timeout |
| 12:22:23 | 99 | 44 | sell 0.004 SOL → USDC | failed | 80s | 1 | main timeout |
| 12:22:24 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 85s | 1 | main timeout |
| 12:22:24 | 101 | 46 | sell 0.003 SOL → USDC | failed | 85s | 1 | main timeout |
| 12:22:24 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 85s | 1 | main timeout |
| 12:22:24 | 103 | 48 | sell 0.004 SOL → USDC | failed | 88s | 1 | main timeout |
| 12:22:24 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:22:24 | 105 | 50 | sell 0.003 SOL → USDC | failed | 84s | 1 | main timeout |
| 12:22:24 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 12:22:24 | 107 | 52 | sell 0.004 SOL → USDC | failed | 87s | 1 | main timeout |
| 12:22:24 | 108 | 53 | sell 0.0025 SOL → USDC | failed | 87s | 1 | main timeout |
| 12:22:24 | 109 | 54 | sell 0.003 SOL → USDC | failed | 88s | 1 | main timeout |
| 12:22:24 | 110 | 55 | sell 0.0035 SOL → USDC | failed | 86s | 1 | main timeout |
| 12:22:24 | 111 | 56 | sell 0.004 SOL → USDC | failed | 85s | 1 | main timeout |
| 12:22:24 | 112 | 57 | sell 0.0025 SOL → USDC | failed | 84s | 1 | main timeout |
| 12:22:24 | 113 | 58 | sell 0.003 SOL → USDC | failed | 87s | 1 | main timeout |
| 12:22:24 | 114 | 59 | sell 0.0035 SOL → USDC | failed | 86s | 1 | main timeout |
| 12:22:24 | 115 | 60 | sell 0.004 SOL → USDC | failed | 88s | 1 | main timeout |
| 12:25:53 | 116 | 61 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:53 | 117 | 62 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:53 | 118 | 63 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:54 | 119 | 64 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 79s | 1 | main timeout |
| 12:25:54 | 120 | 65 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:54 | 121 | 66 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:54 | 122 | 67 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:54 | 123 | 68 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 79s | 1 | main timeout |
| 12:25:54 | 124 | 69 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:54 | 125 | 70 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:54 | 126 | 71 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:56 | 127 | 72 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 77s | 1 | main timeout |
| 12:25:55 | 128 | 73 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:55 | 129 | 74 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 7s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:56 | 130 | 75 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 8s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 12:25:56 | 131 | 76 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 79s | 1 | main timeout |
| 12:25:56 | 132 | 77 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 79s | 1 | main timeout |
| 12:25:56 | 133 | 78 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 77s | 1 | main timeout |
| 12:25:56 | 134 | 79 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 80s | 1 | main timeout |
| 12:25:56 | 135 | 80 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 80s | 1 | main timeout |
| 12:25:56 | 136 | 81 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 84s | 1 | main timeout |
| 12:25:56 | 137 | 82 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 81s | 1 | main timeout |
| 12:25:55 | 138 | 83 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 80s | 1 | main timeout |
| 12:25:56 | 139 | 84 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 84s | 1 | main timeout |
| 12:25:56 | 140 | 85 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 89s | 1 | main timeout |
| 12:25:56 | 141 | 86 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 86s | 1 | main timeout |
| 12:25:56 | 142 | 87 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 84s | 1 | main timeout |
| 12:25:56 | 143 | 88 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 80s | 1 | main timeout |
| 12:25:56 | 144 | 89 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 83s | 1 | main timeout |
| 12:25:56 | 145 | 90 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 83s | 1 | main timeout |
| 12:25:56 | 146 | 91 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 88s | 1 | main timeout |
| 12:25:56 | 147 | 92 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 86s | 1 | main timeout |
| 12:25:56 | 148 | 93 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 86s | 1 | main timeout |
| 12:25:57 | 149 | 94 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 86s | 1 | main timeout |
| 12:25:57 | 150 | 95 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 85s | 1 | main timeout |
| 12:25:57 | 151 | 96 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 86s | 1 | main timeout |
| 12:25:57 | 152 | 97 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 87s | 1 | main timeout |
| 12:26:01 | 153 | 61 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:01 | 154 | 62 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:01 | 155 | 63 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:27:12 | 156 | 64 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:02 | 157 | 65 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:01 | 158 | 66 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:02 | 159 | 67 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:27:13 | 160 | 68 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:02 | 161 | 69 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:02 | 162 | 70 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:02 | 163 | 71 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:27:13 | 164 | 72 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:02 | 165 | 73 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:02 | 166 | 74 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:03 | 167 | 75 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

31 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 15 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| InvalidTransaction | main | 14 | SOL → USDC, SOL → USDT, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | the bundle must not create the buy token account |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |
| InvalidTransaction | acquire | 1 | SOL → JUP | the bundle must not create the buy token account |

Scenario orders: 137 (136 main, 1 acquire). Cleanup placed 6 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 12:23:56 | 30 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc12ecbf5…` [🐞](https://debug.barn.cow.fi/order/0xc12ecbf5379561abba33dd19b0d0e75e035f4bbbba8af54e4fe0eadb64451665) |
| 12:23:57 | 32 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x473a64c7…` [🐞](https://debug.barn.cow.fi/order/0x473a64c7a412959febdbd81559de7597b207504eb965a42bbeb9dcf4d2a63af8) |
| 12:24:08 | 29 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x650336c8…` [🐞](https://debug.barn.cow.fi/order/0x650336c859b2cd554c574c20f369e66412059a26f2deca410661787c30e5e555) |
| 12:28:50 | 2 | USDT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xdfd1bf33…` [🐞](https://debug.barn.cow.fi/order/0xdfd1bf33c7187f8fa40e76b380f9c7661fb2ab691f65b1fa2a2044ba0e3c0bd9) |
| 12:28:51 | 3 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x9951a331…` [🐞](https://debug.barn.cow.fi/order/0x9951a3312ef3b7dfa29d5cc93be49b23705fb9b38716d865480e820c26f593cb) |
| 12:30:13 | 32 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x76d4664f…` [🐞](https://debug.barn.cow.fi/order/0x76d4664f24e578cde3c154f93565135f7e479ab773fe61626d7fe1a370ec7034) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| cancelled | 132 | 96.4% |
| executed | 5 | 3.6% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 49s | 54s | 63s | 63s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 8oLu…T8ku | 5 | 100.0% | 5 | 79,382 | 49s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| paradox | 18 | 10 | 6 | 60.0% | 1 | 2 | 110 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| paradox: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unreceivable_buy_token_account`: 239 times
- Orders filtered for `in_flight`: 1 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 137 | 5 | 3.6% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 85 | 3 | 3.5% |
| wSOL → JUP | 26 | 1 | 3.8% |
| wSOL → USDT | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 0 | 0.0% |
| wSOL → SPYx | 1 | 0 | 0.0% |
| wSOL → USDe | 1 | 0 | 0.0% |
| wSOL → MU | 1 | 0 | 0.0% |
| wSOL → $WIF | 1 | 0 | 0.0% |
| wSOL → POPCAT | 1 | 0 | 0.0% |
| wSOL → Bonk | 1 | 0 | 0.0% |
| wSOL → mSOL | 1 | 0 | 0.0% |
| wSOL → JitoSOL | 1 | 0 | 0.0% |
| wSOL → JupSOL | 1 | 0 | 0.0% |
| wSOL → EURC | 1 | 0 | 0.0% |
| wSOL → cbBTC | 1 | 0 | 0.0% |
| wSOL → USDY | 1 | 0 | 0.0% |
| wSOL → INF | 1 | 0 | 0.0% |
| wSOL → JLP | 1 | 0 | 0.0% |
| wSOL → ETH | 1 | 0 | 0.0% |
| wSOL → BNB | 1 | 0 | 0.0% |
| wSOL → XAUt0 | 1 | 0 | 0.0% |
| wSOL → Fartcoin | 1 | 0 | 0.0% |
| wSOL → BOME | 1 | 0 | 0.0% |
| wSOL → MEW | 1 | 0 | 0.0% |
| wSOL → hyloSOL | 1 | 0 | 0.0% |
| wSOL → EUROP | 1 | 0 | 0.0% |
| wSOL → PSOL | 1 | 0 | 0.0% |
| wSOL → GLDx | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 1 | 20.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 0 | 0.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 1 | 20.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 1 | 20.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 0 | 0.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 0 | 0.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 0 | 0.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 0 | 0.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 0 | 0.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 0 | 0.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 0 | 0.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 0 | 0.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 0 | 0.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 0 | 0.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 0 | 0.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 0 | 0.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 0 | 0.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 0 | 0.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 0 | 0.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 0 | 0.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 0 | 0.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 0 | 0.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 0 | 0.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 0 | 0.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 0 | 0.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 0 | 0.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 0 | 0.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 0 | 0.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 0 | 0.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 0 | 0.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 0 | 0.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 0 | 0.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 0 | 0.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 0 | 0.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 0 | 0.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 0 | 0.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 0 | 0.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 0 | 0.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 0 | 0.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 0 | 0.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 0 | 0.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 0 | 0.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 0 | 0.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 0 | 0.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 0 | 0.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 0 | 0.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 0 | 0.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 0 | 0.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 0 | 0.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 0 | 0.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 0 | 0.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 0 | 0.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 0 | 0.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 0 | 0.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 0 | 0.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 0 | 0.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 0 | 0.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 1 | 0 | 0.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 0 | 0.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 1 | 0 | 0.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 1 | 0 | 0.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 1 | 0 | 0.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 1 | 0 | 0.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 1 | 0 | 0.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 1 | 0 | 0.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 1 | 0 | 0.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 1 | 0 | 0.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 1 | 0 | 0.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 1 | 0 | 0.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 0 | 0.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 0 | 0.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 0 | 0.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 0 | 0.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 0 | 0.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 0 | 0.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 0 | 0.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 0 | 0.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 0 | 0.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 0 | 0.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 0 | 0.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 0 | 0.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 132 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 12:11:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x457b7e8a…` [🐞](https://debug.barn.cow.fi/order/0x457b7e8adb24650e107e12f622c9d8c261711a9cd51f5871c2e8bb27db94b047) |
| 12:13:22 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xa781813b…` [🐞](https://debug.barn.cow.fi/order/0xa781813b5cba8b4eac7691439973c5acb6b8e54a3d1854309a5b3566c6982eeb) |
| 12:13:22 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb26931fe…` [🐞](https://debug.barn.cow.fi/order/0xb26931fedf2e3b8542d9808a7c66ffe409a6043f434f814772aff980dd563612) |
| 12:13:22 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xbac15e27…` [🐞](https://debug.barn.cow.fi/order/0xbac15e278d2630119e1ef59b2a2f7bbec5777dfe09c761857737f2c1eb6bd41e) |
| 12:13:22 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xba5d5616…` [🐞](https://debug.barn.cow.fi/order/0xba5d56164fd0a99a2734e50df7805bdadd104eae0edffbf41e863618a4798a37) |
| 12:13:23 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xe9151449…` [🐞](https://debug.barn.cow.fi/order/0xe91514497cdfa2de7c3d1499668b90295a5530c8a5d6040291763b3b872e3512) |
| 12:13:23 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x98ba92d9…` [🐞](https://debug.barn.cow.fi/order/0x98ba92d957a4ed4f185b2820edc3bc1e5aa8bcf59d4123f05bc66543d4a140ab) |
| 12:13:23 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x091fff50…` [🐞](https://debug.barn.cow.fi/order/0x091fff501c9a655af038bbeb8ea6893e2265ecdadea21cb183d6abc261baf5b7) |
| 12:13:23 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x7cb8c0e1…` [🐞](https://debug.barn.cow.fi/order/0x7cb8c0e1da61e5489cbd7df984a3768b3312b8d6c0ce19adcfde639c2e7ef148) |
| 12:13:23 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x22f34ae4…` [🐞](https://debug.barn.cow.fi/order/0x22f34ae4de0e026d11431c15b0772c7b20459a1dd535186bc87cdbcc6ed648a4) |
| 12:13:23 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x63c56738…` [🐞](https://debug.barn.cow.fi/order/0x63c56738b33985dfc8083c5aa4fdce248682cedb06b9f761c41aac85a21b3ad0) |
| 12:13:24 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xca4e1e2d…` [🐞](https://debug.barn.cow.fi/order/0xca4e1e2df909405caac796579238f86e8871d9701ad656e0cde44a08f089a86f) |
| 12:13:25 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x0bbc314a…` [🐞](https://debug.barn.cow.fi/order/0x0bbc314a14c1d2be12416a306c38692478057b16c447a7d5c61271408f3380b3) |
| 12:13:25 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb4434edb…` [🐞](https://debug.barn.cow.fi/order/0xb4434edb36a862b85decbc502341774295a4da0be531910893f9c58f5babc629) |
| 12:13:25 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x474ae953…` [🐞](https://debug.barn.cow.fi/order/0x474ae9536c9210378efa0f12806fc2dcaecca1304d0a5b9997d48dceea126d09) |
| 12:13:26 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xfa5c12e2…` [🐞](https://debug.barn.cow.fi/order/0xfa5c12e2fe6abe7b9b735332f1d8a80513365901cf6d2aeb908709efa280dbdc) |
| 12:13:26 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xe6563679…` [🐞](https://debug.barn.cow.fi/order/0xe6563679c7618b1f597a32c196194b996e536936d4a6d6439ab474ea1d21ec82) |
| 12:13:26 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x1a32c723…` [🐞](https://debug.barn.cow.fi/order/0x1a32c7237e3fc951aeacaae916237195f610a5f7aad74758c62f29a7e0501d0f) |
| 12:13:26 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x0e1a8359…` [🐞](https://debug.barn.cow.fi/order/0x0e1a835966ea6c7b9cf4c96d3de81e6feb0207d1b0c11a078dea20d0bafe2a1c) |
| 12:13:26 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf0e6007a…` [🐞](https://debug.barn.cow.fi/order/0xf0e6007a93adf01279bf7f289c69ad69785e495061555543fcfc0c22a33106d9) |
| 12:13:27 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x4d3319c2…` [🐞](https://debug.barn.cow.fi/order/0x4d3319c2619af228635425fc7a0fdd35e77ed3468466b63e277d1a8f41b27ae5) |
| 12:13:27 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x196c1b87…` [🐞](https://debug.barn.cow.fi/order/0x196c1b87e289c0f1624939babcf4349cf1ea38eb0946c7e043360b4a8bd93805) |
| 12:13:27 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x895b5f9d…` [🐞](https://debug.barn.cow.fi/order/0x895b5f9d16ee6c807b0b2bdb55178ad975edf9f4ffa157448a91f5bd3fdb0f9b) |
| 12:13:27 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf902d037…` [🐞](https://debug.barn.cow.fi/order/0xf902d0379ba7605a5ef611e3b1f867872961ffb3fbbca3f4e1590d228c080909) |
| 12:13:28 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x0499abcf…` [🐞](https://debug.barn.cow.fi/order/0x0499abcf6ea991893c244e11d07895579a32c21874d78a4f96fa52000e99c416) |
| 12:13:28 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x1c6a3944…` [🐞](https://debug.barn.cow.fi/order/0x1c6a394486f8921a6e8e19da6b91b5ba9b2cc147cbe57c48afe5725eeffb5d9c) |
| 12:16:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x398ce306…` [🐞](https://debug.barn.cow.fi/order/0x398ce306fbd33c4d2d0e9ba03ecb01d692a0a64d9d16e4a8a8bcd563e4d29de3) |
| 12:17:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8e41b0d8…` [🐞](https://debug.barn.cow.fi/order/0x8e41b0d8ac458d44a75f8bfddc2e97f32b1e5cc7a04ae21213e185d0d7a64a91) |
| 12:17:56 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa9bc602c…` [🐞](https://debug.barn.cow.fi/order/0xa9bc602c89b6249821a01da250539b94fba904c9f93bc3468c2323c2655cda08) |
| 12:17:56 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1a2325b2…` [🐞](https://debug.barn.cow.fi/order/0x1a2325b2c061d48b2cedf784757d09c2b70114725790b25a85609ee7fa33fe04) |
| 12:17:57 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xba3d9bdb…` [🐞](https://debug.barn.cow.fi/order/0xba3d9bdbb2409c45d31a7fcc45f10160c9cfcb2a7b6fe838fd8a8fa7e293c0cd) |
| 12:17:57 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7c60917f…` [🐞](https://debug.barn.cow.fi/order/0x7c60917fe14e2e8505d698591174c7860c5b520bbac5d6dc17c805a4194ed7dd) |
| 12:17:57 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x79bef00e…` [🐞](https://debug.barn.cow.fi/order/0x79bef00ec16a8f9289df7d50222501f15d7666942f6dbb55e9ad3402590c2e6e) |
| 12:17:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb3862536…` [🐞](https://debug.barn.cow.fi/order/0xb386253664a121832c6f199a14a1dcae00664e8b51ca5f141632f4a8cf088b55) |
| 12:17:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8521747f…` [🐞](https://debug.barn.cow.fi/order/0x8521747f0adb27ca6bec9ac57aecae29e30aa11c90209f4812f9dd4edde4db75) |
| 12:19:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x879d17e4…` [🐞](https://debug.barn.cow.fi/order/0x879d17e43f5b39bb6fbfb716cf885e46af5ff1937d713566d63081c664d2da8a) |
| 12:19:26 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2250857f…` [🐞](https://debug.barn.cow.fi/order/0x2250857fa5603a50e930c03aff3beba24c05a8ea2d7d7212dce62a0ec598012f) |
| 12:19:27 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2a3cf34d…` [🐞](https://debug.barn.cow.fi/order/0x2a3cf34dea7fcb56eb8ef323eb65f35238b0aa14199ed3df11f66dc03731e72b) |
| 12:19:27 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x59ef489e…` [🐞](https://debug.barn.cow.fi/order/0x59ef489e0a821d5f2b931a9fc1a2387cf1bea71632cf357dac213bb4030911f5) |
| 12:19:27 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x64b070f0…` [🐞](https://debug.barn.cow.fi/order/0x64b070f0d04bf4d6c6509c75c7232f9c6e98ce2bf1a6076e9eae12f99d0698d1) |
| 12:19:27 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4a533563…` [🐞](https://debug.barn.cow.fi/order/0x4a533563e703cf03bab83b03ec44450ac614f9b64d33ad197abacd704aedd4c3) |
| 12:19:27 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb0d35e95…` [🐞](https://debug.barn.cow.fi/order/0xb0d35e9550604954d6ddc235f4da08a766b7581b023eb2dfa1da97a4155cd773) |
| 12:19:28 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1f5193ab…` [🐞](https://debug.barn.cow.fi/order/0x1f5193abb3a8ac6070c43bb8162c1fd7d683887d804600c2bcb8b737558ba194) |
| 12:19:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xba84835b…` [🐞](https://debug.barn.cow.fi/order/0xba84835b0ede244ef373e93d41ad3e268b54b353e811d947ff6e84e403631900) |
| 12:19:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8c49a714…` [🐞](https://debug.barn.cow.fi/order/0x8c49a7147716f1f4b090e16206477303092359606b413cb3023afba618883f46) |
| 12:19:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc99d6aa6…` [🐞](https://debug.barn.cow.fi/order/0xc99d6aa6e813cd94ee72882a6f94aed73c069040f524d9ea009ded635db21271) |
| 12:19:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x94899a55…` [🐞](https://debug.barn.cow.fi/order/0x94899a555d470d523328f42270a3a27223f222f13cf9966ea042ece348eab463) |
| 12:19:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x32c5af75…` [🐞](https://debug.barn.cow.fi/order/0x32c5af7599e0459cf07af2c3dc5acf19ee7b96f5867af3f33f4cfc0b45f7723b) |
| 12:19:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1ada1364…` [🐞](https://debug.barn.cow.fi/order/0x1ada1364b0d831b004675e1052d34d92154a95642d4559e7a311649e2da75fa1) |
| 12:19:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4c9d179b…` [🐞](https://debug.barn.cow.fi/order/0x4c9d179b5d0189827f8fc1e0f7321e8d81d8caa97bc990da4f809583713fafe8) |
| 12:19:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbf9afa6e…` [🐞](https://debug.barn.cow.fi/order/0xbf9afa6e5fd58cda8b656e714ae368698d04b0e176460ee983e72a1ea90e30b9) |
| 12:20:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe7d740dd…` [🐞](https://debug.barn.cow.fi/order/0xe7d740ddcd6aae499705a399957d865a5ff5606c21f951e0f073747282890627) |
| 12:20:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd4f31ea7…` [🐞](https://debug.barn.cow.fi/order/0xd4f31ea7f9eacac1fa79733a7b553adca3621cafe0d1480d594330707b55fbf6) |
| 12:20:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb824fcc2…` [🐞](https://debug.barn.cow.fi/order/0xb824fcc27411e8694c389edc6c71f676cac727ccd29bf3f4e6b7887a04694876) |
| 12:20:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0f785e37…` [🐞](https://debug.barn.cow.fi/order/0x0f785e3715099916b959ea3edf28bce805684a3b0bfeca402dc511f50ed53819) |
| 12:20:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x02e47354…` [🐞](https://debug.barn.cow.fi/order/0x02e473541d5fc7d77fd0b38018f2a037f1ea1f7d335fd6e8944cf96dffa45cd2) |
| 12:20:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x727d1429…` [🐞](https://debug.barn.cow.fi/order/0x727d14296e923bc84da96359d888f58d78bef4bb1d6b5beee902618ba6583079) |
| 12:20:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1f2acb30…` [🐞](https://debug.barn.cow.fi/order/0x1f2acb308e66c0795afc08cce85c47f12fce4debff7c624fa91d419b4073a119) |
| 12:20:58 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa801c705…` [🐞](https://debug.barn.cow.fi/order/0xa801c70589f3d459d36b2849a9b1fd811695da6065f9a7e1bc07c6a44e1c019a) |
| 12:20:59 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0171f182…` [🐞](https://debug.barn.cow.fi/order/0x0171f182966724346e51234bcb5cfe28dd40a2d2fd754d86e71f0d0c70144e74) |
| 12:21:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x40e911d5…` [🐞](https://debug.barn.cow.fi/order/0x40e911d52e52bca1367c618b335b8d2b17c56de2b4eb383a70de32b7a7f81d9c) |
| 12:21:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7300d363…` [🐞](https://debug.barn.cow.fi/order/0x7300d36382b1470368361dc6a87425c86b62c5060efd56ffe07dd09cf94a3028) |
| 12:21:00 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x026529d3…` [🐞](https://debug.barn.cow.fi/order/0x026529d314b2d78b7a04568491941b44b56037e98c377560b6c6515ce5d15118) |
| 12:21:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x51fd9e74…` [🐞](https://debug.barn.cow.fi/order/0x51fd9e749fee78de092b23aac137bb112949f7e01131ec7055390d17eb0efd7a) |
| 12:21:01 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6c732eac…` [🐞](https://debug.barn.cow.fi/order/0x6c732eac129cafe67bcab0662b85f3b12b007838b873ebd5cd2d1a873f322806) |
| 12:21:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe235dc2b…` [🐞](https://debug.barn.cow.fi/order/0xe235dc2baa4fd7f12c0192c5486fbe01673d033f0bb83c4e13a4a69a8d5b81ac) |
| 12:21:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x02e138fb…` [🐞](https://debug.barn.cow.fi/order/0x02e138fb9fe508237029f8295be71e30420f068bcdfb954de63cba1ae1144d67) |
| 12:21:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1292b857…` [🐞](https://debug.barn.cow.fi/order/0x1292b857c29f55bce650e5e39dbf3b4d63c0e4621e30be7c0750a61cfaada761) |
| 12:21:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1a331315…` [🐞](https://debug.barn.cow.fi/order/0x1a331315f6af37c2521d242a09b08ac64c7b0824dad0478a9c5f9601b6c395ad) |
| 12:21:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x53765254…` [🐞](https://debug.barn.cow.fi/order/0x5376525457bada53a63bbe6b29bc255a9bef57a3960102c907a8e86a8bea2cc8) |
| 12:21:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5b14416c…` [🐞](https://debug.barn.cow.fi/order/0x5b14416cd32b506a9751bde8387868d87b77825f422b32d37942a505a968f33c) |
| 12:21:02 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf2fafb9e…` [🐞](https://debug.barn.cow.fi/order/0xf2fafb9ef056102e5f337c0073f2c23058fa145e885863fd69bf4544da68f29c) |
| 12:21:03 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8532060a…` [🐞](https://debug.barn.cow.fi/order/0x8532060a787443afeddd5a3a6562e3699d4018493f8104bd599bb213a2795ae5) |
| 12:21:03 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x3c80bef5…` [🐞](https://debug.barn.cow.fi/order/0x3c80bef51dfdb2077131687a1cf74620db13fb77bb99873709abd4cb6fec4ce6) |
| 12:21:03 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc03fed89…` [🐞](https://debug.barn.cow.fi/order/0xc03fed89cdd3da7c1e0d331dc525961793eb4559e54a9d485d760ecd5a508e8e) |
| 12:22:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x414257ca…` [🐞](https://debug.barn.cow.fi/order/0x414257ca5f8b1aaeb3b6695822217cef5815815048731ba5f28fc31547d3d7a8) |
| 12:22:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa855800f…` [🐞](https://debug.barn.cow.fi/order/0xa855800fa37b88c275171f90f74e31aee91abde9fd8fdc2a1f2cf8a67256cf31) |
| 12:22:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd99ba75a…` [🐞](https://debug.barn.cow.fi/order/0xd99ba75aedae722a5c1de3831f661f64c78df87e475e5c8282e03f8b84f9bd2f) |
| 12:22:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5c9dbde2…` [🐞](https://debug.barn.cow.fi/order/0x5c9dbde2ca5dcb6f3dcfe1c16a96be1341aa920364c8554e0c1ecec8de5803ae) |
| 12:22:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb0a6a206…` [🐞](https://debug.barn.cow.fi/order/0xb0a6a206864e46b6914474e850701b54c0c2d8a7c2318c39faec2716e5ab77e2) |
| 12:22:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5dbb8515…` [🐞](https://debug.barn.cow.fi/order/0x5dbb8515e45ec58bb9095cfb7acf3090c2cfb10d35131c091ce831af2844373a) |
| 12:22:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xdbae4574…` [🐞](https://debug.barn.cow.fi/order/0xdbae4574a14b0ca46b78caf8ceec427956a022578bb0db16a35c94796ade96b3) |
| 12:22:29 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x072b6733…` [🐞](https://debug.barn.cow.fi/order/0x072b6733219877b92440e366165c749f4e82d156a6b5fc32e7fadc40753100ca) |
| 12:22:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb9acd688…` [🐞](https://debug.barn.cow.fi/order/0xb9acd688a671232bfb9745ca15ad9606702a17d69cd4c48019d0bd377cf1899d) |
| 12:22:30 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xd0f24462…` [🐞](https://debug.barn.cow.fi/order/0xd0f244628a29a570c86bd179fe72bfc55ad6b5c892baa912ddf790d8a871a792) |
| 12:22:31 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6e9e2955…` [🐞](https://debug.barn.cow.fi/order/0x6e9e29551e6f0ac48414569a12c436f1c16d9dd244522b9b2696044d07dd17fc) |
| 12:22:31 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4fe28af1…` [🐞](https://debug.barn.cow.fi/order/0x4fe28af1327d1f33cae302cfbdfbfc8be48a4ee67ee086435566152e568ea1f3) |
| 12:22:31 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4b06955d…` [🐞](https://debug.barn.cow.fi/order/0x4b06955d03c32ced053242521b397979813b3bfbcd9dddd9728c6f7eb56e024e) |
| 12:22:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6af48921…` [🐞](https://debug.barn.cow.fi/order/0x6af489219c3baad23138c289d398a0130b1b4dc6dfd43d331631ad1543e21752) |
| 12:22:32 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x778becbc…` [🐞](https://debug.barn.cow.fi/order/0x778becbcff9cb4a0884b65cbfb3c76f4c5b4ba6882efa2dcfcc363ff9891cef9) |
| 12:22:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8b63d1ba…` [🐞](https://debug.barn.cow.fi/order/0x8b63d1bac3e239855714b06bbd582a999746b7aa7753a8a215ce752acefd5474) |
| 12:22:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5d286022…` [🐞](https://debug.barn.cow.fi/order/0x5d2860229538861cdf1eecf6bafa70c3208ea4b86133c96e1bec39dc9e1fde28) |
| 12:22:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6203e9e1…` [🐞](https://debug.barn.cow.fi/order/0x6203e9e1299491010e8c465054ec4e33441067f462faec47e7fc267a98d7a463) |
| 12:22:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6319549e…` [🐞](https://debug.barn.cow.fi/order/0x6319549ef445ce7d34e8cfd2f0cc7ee2341a0b643fea021ea9f1d4570007716e) |
| 12:22:33 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa7bdff24…` [🐞](https://debug.barn.cow.fi/order/0xa7bdff246d50c02f24051de09b79b2ac8e51153c82a43518f239e697e788f087) |
| 12:22:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x89589ed1…` [🐞](https://debug.barn.cow.fi/order/0x89589ed10302e65878886006218ef315523b191bcbc9168f5c5cfa088612d0e4) |
| 12:22:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0ff508af…` [🐞](https://debug.barn.cow.fi/order/0x0ff508af87b90e0afe1d665473fb9774a7dee6c6cb09f9be8c134471bc578ac9) |
| 12:22:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1fe5bab2…` [🐞](https://debug.barn.cow.fi/order/0x1fe5bab2000476b7a0bd3c997d657d6726fb703a11b92bef22a87904693666b3) |
| 12:22:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf99d9adc…` [🐞](https://debug.barn.cow.fi/order/0xf99d9adca59ba04926c354e897fdeefedc11fe36a0951a63e57de222c145142b) |
| 12:22:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x594ca7ed…` [🐞](https://debug.barn.cow.fi/order/0x594ca7ed69ced2a772de1242bb75f7cfbeab7688d17e4526178cf0c3e39ca420) |
| 12:22:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbce31053…` [🐞](https://debug.barn.cow.fi/order/0xbce31053b2d8ecca6d38e2239c0d817614a1502eb389c632e833c756489bca24) |
| 12:22:36 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x86e014f3…` [🐞](https://debug.barn.cow.fi/order/0x86e014f3da8fbc44fe62b5603e7787ff6606053ca2e81877c59270f53a7ec799) |
| 12:22:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x341d18b9…` [🐞](https://debug.barn.cow.fi/order/0x341d18b9fef580c5e9942c872e5436080979fd6333dc1c2384a5b2cb8cac3c3a) |
| 12:22:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8fd5fcd1…` [🐞](https://debug.barn.cow.fi/order/0x8fd5fcd1b7eba927bbb1e0b750703cef2aa1c066cac2b2acd8841734afa51239) |
| 12:22:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xed1dffa8…` [🐞](https://debug.barn.cow.fi/order/0xed1dffa83d9addb8cb2858ebf38f0066ebf20974cb443e0bb609f8949feb03a6) |
| 12:22:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x61b50dd2…` [🐞](https://debug.barn.cow.fi/order/0x61b50dd2deabdc8c0d14491d7f17b06490b2195b366c30085f4898584ba5d138) |
| 12:22:37 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xccbfad0d…` [🐞](https://debug.barn.cow.fi/order/0xccbfad0dd303db653038e0a904fc33bda53cc0383908a83f64011fdea647d84c) |
| 12:26:03 | wSOL → PUMP | market sell | Not filled within fill timeout (cancelled by sim) | `0xb002f7a3…` [🐞](https://debug.barn.cow.fi/order/0xb002f7a33f2d8f5a591ed96009047ccc481cfc817b5f08c62d4ca3c0f6fc4653) |
| 12:26:03 | wSOL → SPYx | market sell | Not filled within fill timeout (cancelled by sim) | `0xe5e2de1a…` [🐞](https://debug.barn.cow.fi/order/0xe5e2de1a2e69f3fa6d6e370c96f26f2a84e11a1073b93b1bbd95ed6516f1457c) |
| 12:26:03 | wSOL → USDe | market sell | Not filled within fill timeout (cancelled by sim) | `0x4ba4c991…` [🐞](https://debug.barn.cow.fi/order/0x4ba4c991c537a3f748e2b4ebb05a60db0e07720bee09dd1f4680b0fa5e5daaa8) |
| 12:26:04 | wSOL → MU | market sell | Not filled within fill timeout (cancelled by sim) | `0xaaf4d2e4…` [🐞](https://debug.barn.cow.fi/order/0xaaf4d2e42d795989c9dd9dd4dcd3692efc7951c1eb2fc323bb1e52f29fba6a0c) |
| 12:26:04 | wSOL → $WIF | market sell | Not filled within fill timeout (cancelled by sim) | `0xfed5a8ff…` [🐞](https://debug.barn.cow.fi/order/0xfed5a8ff1de755c1dc0ef7ce5e167f17d3a4663be2f8cff0ed7ba4235385067a) |
| 12:26:04 | wSOL → POPCAT | market sell | Not filled within fill timeout (cancelled by sim) | `0xdf3cd57f…` [🐞](https://debug.barn.cow.fi/order/0xdf3cd57f032be2de94819cc218add5aa94408cc6de1516520e2c15434a76961d) |
| 12:26:04 | wSOL → Bonk | market sell | Not filled within fill timeout (cancelled by sim) | `0x83727412…` [🐞](https://debug.barn.cow.fi/order/0x837274124dab9b430697c64d96ef3807fbfc13ea1506d491c778ebc855723169) |
| 12:26:04 | wSOL → mSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x8071aec0…` [🐞](https://debug.barn.cow.fi/order/0x8071aec0aab719e8cbd46dba4e6eccf8dde6435216db87f346f8531ede5a9058) |
| 12:26:04 | wSOL → JitoSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0xc366b84e…` [🐞](https://debug.barn.cow.fi/order/0xc366b84e1520d2c1cbf6d107c214148069ecfe169f89ad7453a52cd099d3546d) |
| 12:26:05 | wSOL → JupSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x632c6cd8…` [🐞](https://debug.barn.cow.fi/order/0x632c6cd87cf8b606585e41b59df49998689346e3b82873c9a2de5a663df3e6b9) |
| 12:26:05 | wSOL → EURC | market sell | Not filled within fill timeout (cancelled by sim) | `0xcb92633f…` [🐞](https://debug.barn.cow.fi/order/0xcb92633f655b419ab8157056f611b570f50053e2b104d48a74fd514f597a839a) |
| 12:26:06 | wSOL → cbBTC | market sell | Not filled within fill timeout (cancelled by sim) | `0x273adcae…` [🐞](https://debug.barn.cow.fi/order/0x273adcae2717bc50d5c21cbd033957b6ce5f285a7e971c12dc7b760ac74ebc7e) |
| 12:26:06 | wSOL → USDY | market sell | Not filled within fill timeout (cancelled by sim) | `0x91d392e2…` [🐞](https://debug.barn.cow.fi/order/0x91d392e2706188fbd27d2075e8678c114a31d09f029a7c83637ee59806f1b021) |
| 12:26:07 | wSOL → INF | market sell | Not filled within fill timeout (cancelled by sim) | `0x3688807c…` [🐞](https://debug.barn.cow.fi/order/0x3688807c0a2f94c2eb3b5f5f38137dbe528a537d8622578a55b748fc02651b30) |
| 12:26:07 | wSOL → JLP | market sell | Not filled within fill timeout (cancelled by sim) | `0x0ac42549…` [🐞](https://debug.barn.cow.fi/order/0x0ac42549260a5e241c37132900e16d141edfb5c5a800cbf1e005a98885cf56a2) |
| 12:26:07 | wSOL → ETH | market sell | Not filled within fill timeout (cancelled by sim) | `0x87e6eede…` [🐞](https://debug.barn.cow.fi/order/0x87e6eeded7678175fc00ce6fc165577f8a44c2e792bf6c8884309100fc71786a) |
| 12:26:07 | wSOL → BNB | market sell | Not filled within fill timeout (cancelled by sim) | `0x87071a26…` [🐞](https://debug.barn.cow.fi/order/0x87071a261c74f03c639a85b8b15602a66f01b473c67cec3ddcade504f4f3ee10) |
| 12:26:08 | wSOL → XAUt0 | market sell | Not filled within fill timeout (cancelled by sim) | `0x7f177a3a…` [🐞](https://debug.barn.cow.fi/order/0x7f177a3a2ecb808bdcdb866b2503015d052d89b113a1016a153bfcc90e3079dd) |
| 12:26:09 | wSOL → Fartcoin | market sell | Not filled within fill timeout (cancelled by sim) | `0x46e0b4c9…` [🐞](https://debug.barn.cow.fi/order/0x46e0b4c9b64b5317c9be9aa2395e69ffb4a41beb13bd3ba1b72f07e430400ae9) |
| 12:26:09 | wSOL → BOME | market sell | Not filled within fill timeout (cancelled by sim) | `0x39153a45…` [🐞](https://debug.barn.cow.fi/order/0x39153a452a6824c74c00413fbcff2c03289eb26257a0d61c164ac3c25d010d5e) |
| 12:26:09 | wSOL → MEW | market sell | Not filled within fill timeout (cancelled by sim) | `0x89d03643…` [🐞](https://debug.barn.cow.fi/order/0x89d036437e2d78edfc0adbd91e5dc705ac63a658db92b47212511057fed999de) |
| 12:26:09 | wSOL → hyloSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x917dfacb…` [🐞](https://debug.barn.cow.fi/order/0x917dfacb04f8846e79e0a44bf7435fb5759e1618a2c6eed4c5bf64942451a0d9) |
| 12:26:09 | wSOL → EUROP | market sell | Not filled within fill timeout (cancelled by sim) | `0x7d178210…` [🐞](https://debug.barn.cow.fi/order/0x7d178210503ec230147b77312f529bd95a3c90c7000d89fcbcbd10c226fca680) |
| 12:26:09 | wSOL → PSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0xaf745f06…` [🐞](https://debug.barn.cow.fi/order/0xaf745f062884c9690be065af11f03220f4c2dd95b7737ade3d0084b2078a3de0) |
| 12:26:11 | wSOL → GLDx | market sell | Not filled within fill timeout (cancelled by sim) | `0x4140838a…` [🐞](https://debug.barn.cow.fi/order/0x4140838a43a6dda05ca4d1cb908ff6411da7e0067741809e93d7f911084b5b33) |
