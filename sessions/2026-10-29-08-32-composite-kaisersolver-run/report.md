# Solana QoS report: 2026-10-29-08-32-composite-kaisersolver-run

Barn, orders created between `2026-10-29T08:32:43.846Z` and `2026-10-29T08:57:27.776Z`. Data fetched 2026-10-29T09:04:45+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 188 |
| Orders executed | **187** (99.5%) |
| Sponsored orders never created on-chain | 1 (0.5%) |
| Traders | 109 |
| Settlement txs | 103 |

## Scenario results

Target solver: `kaisersolver`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-29T08:32:43.846Z | 2026-10-29T08:33:19.065Z | 5/6 | 1 | 7 | 7 | 83.3% |
| receiving-account-costs | 2026-10-29T08:34:15.530Z | 2026-10-29T08:34:51.926Z | 16/16 | 0 | 16 | 16 | 100.0% |
| native-vs-wrapped-payouts | 2026-10-29T08:36:31.022Z | 2026-10-29T08:37:29.775Z | 12/12 | 0 | 14 | 14 | 100.0% |
| solver-same-direction-25 | 2026-10-29T08:38:18.643Z | 2026-10-29T08:39:03.157Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-29T08:41:41.050Z | 2026-10-29T08:48:33.794Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-token-coverage | 2026-10-29T08:51:53.834Z | 2026-10-29T08:53:00.159Z | 41/52 | 11 | 42 | 41 | 78.8% |

## Scenario

183 of 195 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 08:32:44 | 1 | 1 | sell 0.005 SOL → USDC | filled | 6s | 1 |  |
| 08:32:44 | 2 | 2 | sell 0.005 SOL → USDT | filled | 12s | 1 |  |
| 08:32:44 | 3 | 3 | sell 0.5 JUP → USDC | failed | 13s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 08:32:50 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 8s | 1 |  |
| 08:32:56 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 8s | 1 |  |
| 08:32:56 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 22s | 2 |  |
| 08:34:15 | 7 | 4 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 08:34:15 | 8 | 5 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 08:34:15 | 9 | 6 | buy 0.25 USDC ← SOL | filled | 19s | 1 |  |
| 08:34:15 | 10 | 7 | buy 0.25 USDC ← SOL | filled | 13s | 1 |  |
| 08:34:15 | 11 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 8s | 1 |  |
| 08:34:15 | 12 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 6s | 1 |  |
| 08:34:15 | 13 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 28s | 1 |  |
| 08:34:15 | 14 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 13s | 1 |  |
| 08:34:23 | 15 | 4 | sell 0.0025 SOL → USDC | filled | 14s | 1 |  |
| 08:34:24 | 16 | 5 | sell 0.0025 SOL → USDC | filled | 15s | 1 |  |
| 08:34:34 | 17 | 6 | buy 0.25 USDC ← SOL | filled | 14s | 1 |  |
| 08:34:28 | 18 | 7 | buy 0.25 USDC ← SOL | filled | 12s | 1 |  |
| 08:34:24 | 19 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 11s | 1 |  |
| 08:34:22 | 20 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 12s | 1 |  |
| 08:34:44 | 21 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 8s | 1 |  |
| 08:34:29 | 22 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 19s | 1 |  |
| 08:36:31 | 23 | 12 | sell 0.005 SOL → USDC | filled | 11s | 1 |  |
| 08:36:31 | 24 | 13 | sell 0.005 SOL → USDC | filled | 8s | 1 |  |
| 08:36:31 | 25 | 14 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 08:36:31 | 26 | 15 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 08:36:41 | 27 | 12 | sell 0.2 USDC → SOL | filled | 23s | 1 |  |
| 08:36:39 | 28 | 13 | sell 0.2 USDC → wSOL | filled | 10s | 1 |  |
| 08:36:39 | 29 | 14 | sell 0.2 USDC → SOL | filled | 12s | 1 |  |
| 08:36:40 | 30 | 15 | sell 0.2 USDC → wSOL | filled | 15s | 1 |  |
| 08:37:04 | 31 | 12 | buy 0.002 SOL ← USDC | filled | 25s | 2 |  |
| 08:36:49 | 32 | 13 | buy 0.002 wSOL ← USDC | filled | 22s | 2 |  |
| 08:36:52 | 33 | 14 | buy 0.002 SOL ← USDC | filled | 25s | 1 |  |
| 08:36:55 | 34 | 15 | buy 0.002 wSOL ← USDC | filled | 12s | 1 |  |
| 08:38:18 | 35 | 16 | sell 0.005 SOL → JUP | filled | 34s | 1 |  |
| 08:38:18 | 36 | 17 | sell 0.005 SOL → JUP | filled | 12s | 1 |  |
| 08:38:18 | 37 | 18 | sell 0.005 SOL → JUP | filled | 13s | 1 |  |
| 08:38:18 | 38 | 19 | sell 0.005 SOL → JUP | filled | 38s | 1 |  |
| 08:38:18 | 39 | 20 | sell 0.005 SOL → JUP | filled | 45s | 1 |  |
| 08:38:18 | 40 | 21 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 08:38:18 | 41 | 22 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 08:38:18 | 42 | 23 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 08:38:18 | 43 | 24 | sell 0.005 SOL → JUP | filled | 39s | 1 |  |
| 08:38:18 | 44 | 25 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 08:38:18 | 45 | 26 | sell 0.005 SOL → JUP | filled | 40s | 1 |  |
| 08:38:18 | 46 | 27 | sell 0.005 SOL → JUP | filled | 12s | 1 |  |
| 08:38:18 | 47 | 28 | sell 0.005 SOL → JUP | filled | 28s | 1 |  |
| 08:38:18 | 48 | 29 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 08:38:18 | 49 | 30 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 08:38:18 | 50 | 31 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 08:38:18 | 51 | 32 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 08:38:18 | 52 | 33 | sell 0.005 SOL → JUP | filled | 40s | 1 |  |
| 08:38:18 | 53 | 34 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 08:38:18 | 54 | 35 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 08:38:18 | 55 | 36 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 08:38:18 | 56 | 37 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 08:38:18 | 57 | 38 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 08:38:18 | 58 | 39 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 08:38:18 | 59 | 40 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 08:41:41 | 60 | 41 | sell 0.0025 SOL → USDC | filled | 6s | 1 |  |
| 08:41:41 | 61 | 42 | sell 0.003 SOL → USDC | filled | 6s | 1 |  |
| 08:41:41 | 62 | 43 | sell 0.0035 SOL → USDC | filled | 6s | 1 |  |
| 08:41:41 | 63 | 44 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 08:43:11 | 64 | 41 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 08:43:11 | 65 | 42 | sell 0.003 SOL → USDC | filled | 21s | 1 |  |
| 08:43:11 | 66 | 43 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 08:43:11 | 67 | 44 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 08:43:11 | 68 | 45 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 08:43:11 | 69 | 46 | sell 0.003 SOL → USDC | filled | 18s | 1 |  |
| 08:43:11 | 70 | 47 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 08:43:11 | 71 | 48 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 08:44:41 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 08:44:41 | 73 | 42 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 08:44:41 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 30s | 1 |  |
| 08:44:41 | 75 | 44 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 08:44:41 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 08:44:41 | 77 | 46 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 08:44:41 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 08:44:41 | 79 | 48 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 08:44:41 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 08:44:41 | 81 | 50 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 08:44:41 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 08:44:41 | 83 | 52 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 08:44:41 | 84 | 53 | sell 0.0025 SOL → USDC | filled | 37s | 1 |  |
| 08:44:41 | 85 | 54 | sell 0.003 SOL → USDC | filled | 28s | 1 |  |
| 08:44:41 | 86 | 55 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 08:44:41 | 87 | 56 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 08:46:11 | 88 | 41 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 08:46:11 | 89 | 42 | sell 0.003 SOL → USDC | filled | 26s | 1 |  |
| 08:46:11 | 90 | 43 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 08:46:11 | 91 | 44 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 08:46:11 | 92 | 45 | sell 0.0025 SOL → USDC | filled | 37s | 1 |  |
| 08:46:11 | 93 | 46 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 08:46:11 | 94 | 47 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 08:46:11 | 95 | 48 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 08:46:11 | 96 | 49 | sell 0.0025 SOL → USDC | filled | 37s | 1 |  |
| 08:46:11 | 97 | 50 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 08:46:11 | 98 | 51 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 08:46:11 | 99 | 52 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 08:46:11 | 100 | 53 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 08:46:11 | 101 | 54 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 08:46:11 | 102 | 55 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 08:46:11 | 103 | 56 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 08:46:11 | 104 | 57 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 08:46:11 | 105 | 58 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 08:46:11 | 106 | 59 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 08:46:11 | 107 | 60 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 08:46:11 | 108 | 61 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 08:46:11 | 109 | 62 | sell 0.003 SOL → USDC | filled | 26s | 1 |  |
| 08:46:11 | 110 | 63 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 08:46:11 | 111 | 64 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 08:47:41 | 112 | 41 | sell 0.0025 SOL → USDC | filled | 46s | 1 |  |
| 08:47:41 | 113 | 42 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 08:47:41 | 114 | 43 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 08:47:41 | 115 | 44 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 08:47:41 | 116 | 45 | sell 0.0025 SOL → USDC | filled | 51s | 1 |  |
| 08:47:41 | 117 | 46 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 08:47:41 | 118 | 47 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 08:47:41 | 119 | 48 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 08:47:41 | 120 | 49 | sell 0.0025 SOL → USDC | filled | 53s | 1 |  |
| 08:47:41 | 121 | 50 | sell 0.003 SOL → USDC | filled | 42s | 1 |  |
| 08:47:41 | 122 | 51 | sell 0.0035 SOL → USDC | filled | 26s | 1 |  |
| 08:47:41 | 123 | 52 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 08:47:41 | 124 | 53 | sell 0.0025 SOL → USDC | filled | 40s | 1 |  |
| 08:47:41 | 125 | 54 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 08:47:41 | 126 | 55 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 08:47:41 | 127 | 56 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 08:47:41 | 128 | 57 | sell 0.0025 SOL → USDC | filled | 52s | 1 |  |
| 08:47:41 | 129 | 58 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 08:47:41 | 130 | 59 | sell 0.0035 SOL → USDC | filled | 20s | 1 |  |
| 08:47:41 | 131 | 60 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 08:47:41 | 132 | 61 | sell 0.0025 SOL → USDC | filled | 41s | 1 |  |
| 08:47:41 | 133 | 62 | sell 0.003 SOL → USDC | filled | 36s | 1 |  |
| 08:47:41 | 134 | 63 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 08:47:41 | 135 | 64 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 08:47:41 | 136 | 65 | sell 0.0025 SOL → USDC | filled | 45s | 1 |  |
| 08:47:41 | 137 | 66 | sell 0.003 SOL → USDC | filled | 36s | 1 |  |
| 08:47:41 | 138 | 67 | sell 0.0035 SOL → USDC | filled | 32s | 1 |  |
| 08:47:41 | 139 | 68 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 08:47:41 | 140 | 69 | sell 0.0025 SOL → USDC | filled | 47s | 1 |  |
| 08:47:41 | 141 | 70 | sell 0.003 SOL → USDC | filled | 38s | 1 |  |
| 08:47:41 | 142 | 71 | sell 0.0035 SOL → USDC | filled | 26s | 1 |  |
| 08:47:41 | 143 | 72 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 08:51:54 | 144 | 73 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 19s | 1 |  |
| 08:51:54 | 145 | 74 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 19s | 1 |  |
| 08:51:53 | 146 | 75 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 19s | 1 |  |
| 08:51:54 | 147 | 76 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 23s | 1 |  |
| 08:51:54 | 148 | 77 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 19s | 1 |  |
| 08:51:54 | 149 | 78 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 42s | 1 | main expired |
| 08:51:54 | 150 | 79 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 23s | 1 |  |
| 08:51:54 | 151 | 80 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 19s | 1 |  |
| 08:51:54 | 152 | 81 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 19s | 1 |  |
| 08:51:54 | 153 | 82 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 19s | 1 |  |
| 08:51:54 | 154 | 83 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 14s | 1 |  |
| 08:51:54 | 155 | 84 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 26s | 1 |  |
| 08:51:55 | 156 | 85 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 15s | 1 |  |
| 08:51:55 | 157 | 86 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 19s | 1 |  |
| 08:51:55 | 158 | 87 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 20s | 1 |  |
| 08:51:55 | 159 | 88 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 32s | 1 |  |
| 08:51:55 | 160 | 89 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 32s | 1 |  |
| 08:51:55 | 161 | 90 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 23s | 1 |  |
| 08:51:55 | 162 | 91 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 33s | 1 |  |
| 08:51:55 | 163 | 92 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 16s | 1 |  |
| 08:51:55 | 164 | 93 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 21s | 1 |  |
| 08:51:55 | 165 | 94 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 20s | 1 |  |
| 08:51:56 | 166 | 95 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 64s | 1 |  |
| 08:51:56 | 167 | 96 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 30s | 1 |  |
| 08:51:56 | 168 | 97 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 21s | 1 |  |
| 08:51:56 | 169 | 98 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 17s | 1 |  |
| 08:51:56 | 170 | 99 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 17s | 1 |  |
| 08:51:56 | 171 | 100 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 31s | 1 |  |
| 08:51:56 | 172 | 101 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 63s | 1 |  |
| 08:51:56 | 173 | 102 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 22s | 1 |  |
| 08:51:56 | 174 | 103 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 47s | 1 |  |
| 08:51:56 | 175 | 104 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 18s | 1 |  |
| 08:51:57 | 176 | 105 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 22s | 1 |  |
| 08:51:57 | 177 | 106 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 19s | 1 |  |
| 08:51:57 | 178 | 107 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 19s | 1 |  |
| 08:51:57 | 179 | 108 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 20s | 1 |  |
| 08:51:57 | 180 | 109 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 20s | 1 |  |
| 08:52:12 | 181 | 73 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 17s | 1 |  |
| 08:52:12 | 182 | 74 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | filled | 17s | 1 |  |
| 08:52:12 | 183 | 75 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 17s | 1 |  |
| 08:52:17 | 184 | 76 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:52:12 | 185 | 77 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:52:36 | 186 | 78 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | filled | 17s | 1 |  |
| 08:52:17 | 187 | 79 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:52:13 | 188 | 80 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:52:13 | 189 | 81 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:52:13 | 190 | 82 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:52:09 | 191 | 83 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:52:21 | 192 | 84 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | filled | 5s | 1 |  |
| 08:52:09 | 193 | 85 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:52:14 | 194 | 86 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:52:15 | 195 | 87 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

11 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 9 | SOL → PUMP, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |
| NoLiquidity | main | 1 | SOL → PYUSD | no route found |

Scenario orders: 188 (184 main, 4 acquire). Cleanup placed 111 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 08:33:20 | 1 | USDC → SOL (native) | Executed | `0xe558e1f4…` [🐞](https://debug.barn.cow.fi/order/0xe558e1f41ed8883f41db5b3d9f13e7ba5b064383dffbcc510759121634fd2410) |
| 08:33:21 | 2 | USDT → SOL (native) | Executed | `0x034e3cc8…` [🐞](https://debug.barn.cow.fi/order/0x034e3cc86a1304ff6b591b28436151cfe28d73b6b3eff0392d853ce63c0b32a9) |
| 08:33:23 | 3 | USDC → SOL (native) | Executed | `0xb3b809d6…` [🐞](https://debug.barn.cow.fi/order/0xb3b809d6b4417fbd347ba3f0c5fffff94be58310a3783b0e8a718ba2187bb2c5) |
| 08:34:54 | 4 | USDC → SOL (native) | Executed | `0xbf625a10…` [🐞](https://debug.barn.cow.fi/order/0xbf625a106803ac201d007701522be0026521b3cc927138d4f8edf4cabc4bd81e) |
| 08:34:55 | 5 | USDC → SOL (native) | Executed | `0xbbcf8e7c…` [🐞](https://debug.barn.cow.fi/order/0xbbcf8e7ca63cdd5c23f4d45d099ac0003f556e3edafc2be6590ff942dac6777f) |
| 08:34:55 | 6 | USDC → SOL (native) | Executed | `0xc17377ed…` [🐞](https://debug.barn.cow.fi/order/0xc17377ed34d71a58298688212916eadeaa7b9ef9db4432afb1764fd482642001) |
| 08:34:56 | 7 | USDC → SOL (native) | Executed | `0x6751c9cd…` [🐞](https://debug.barn.cow.fi/order/0x6751c9cdfc934b28b53055a4ad0a376cfe5da061055759a275eb9c6da403ab7d) |
| 08:34:58 | 8 | USDG → SOL (native) | Executed | `0xbcbd4133…` [🐞](https://debug.barn.cow.fi/order/0xbcbd4133cd36fbcca95231f6da91f5994e225cdf497feedd5db73f93e58a015b) |
| 08:34:58 | 9 | USDG → SOL (native) | Executed | `0x8ec94252…` [🐞](https://debug.barn.cow.fi/order/0x8ec94252536f3f5ab63e114f95cd7ca743cdcd59f70ef2a42242a45ced50edbe) |
| 08:34:59 | 10 | USDG → SOL (native) | Executed | `0x599533ca…` [🐞](https://debug.barn.cow.fi/order/0x599533cae466db7bc7cedacb9f403c5043fa86325d00b297b801dc5b86d8f20e) |
| 08:35:01 | 11 | USDG → SOL (native) | Executed | `0xea4037d5…` [🐞](https://debug.barn.cow.fi/order/0xea4037d5946118da0163dd611f31c6fa3e5d4e4d6c30dba014ddae986a4c7590) |
| 08:39:06 | 17 | JUP → SOL (native) | Executed | `0xf92dcf76…` [🐞](https://debug.barn.cow.fi/order/0xf92dcf767e191b6aa755ef104ced1e0ec2477f678e37b2045e11baf663ec1fee) |
| 08:39:07 | 18 | JUP → SOL (native) | Executed | `0xb171c20e…` [🐞](https://debug.barn.cow.fi/order/0xb171c20e40fccd4b8d3abe81ef50341421d60e060a4e24a836f08ab736c78ba4) |
| 08:39:08 | 19 | JUP → SOL (native) | Executed | `0x5dfe37b6…` [🐞](https://debug.barn.cow.fi/order/0x5dfe37b66ea90be2bb66aede286b0eed07e7f3c236e1b06965abcf10a3913504) |
| 08:39:09 | 20 | JUP → SOL (native) | Executed | `0xa5c936c0…` [🐞](https://debug.barn.cow.fi/order/0xa5c936c06d75e04ddf781f336b389d27d0b56e7b90bc108565bf207ae5e78e60) |
| 08:39:09 | 21 | JUP → SOL (native) | Executed | `0x6be78206…` [🐞](https://debug.barn.cow.fi/order/0x6be782067375789617a372ef482cb9a22e517ee9d0b653853df2e06852f3ac47) |
| 08:39:11 | 22 | JUP → SOL (native) | Executed | `0x6f60aa68…` [🐞](https://debug.barn.cow.fi/order/0x6f60aa68e4f7930b54293e090bb7ac3d21a57d5969fa1c7f3cf0a2b897678632) |
| 08:39:12 | 23 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4042a029…` [🐞](https://debug.barn.cow.fi/order/0x4042a0299611da8cbdb94f8d3b2b135f913dbc4554e22358f6f4dcac0f97c4fa) |
| 08:39:12 | 24 | JUP → SOL (native) | Executed | `0x636e0944…` [🐞](https://debug.barn.cow.fi/order/0x636e0944f41b3fb6042a0cf88017eff73b661ef2cdac5596f3ef6468ae30ee70) |
| 08:39:16 | 25 | JUP → SOL (native) | Executed | `0x0ce3bbfc…` [🐞](https://debug.barn.cow.fi/order/0x0ce3bbfc4fcfe51aa157edd18a1ece2721a156f810d610456d364fb6a6593d20) |
| 08:39:16 | 16 | JUP → SOL (native) | Executed | `0x1a304949…` [🐞](https://debug.barn.cow.fi/order/0x1a3049494ae18f852becc23df4f1448d72805f9fd0cdb4fa3b0fc2ffdff1d948) |
| 08:39:26 | 26 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc53f47d9…` [🐞](https://debug.barn.cow.fi/order/0xc53f47d96a0b86c4e3a6b4e8d2591300fd4be6396e3763cb4ed1f9c0d2233128) |
| 08:39:30 | 27 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb6c41aee…` [🐞](https://debug.barn.cow.fi/order/0xb6c41aeefa6ed34cefd7c724528390772a20381a2b85e54d1410d9b0c1af6e31) |
| 08:39:33 | 28 | JUP → SOL (native) | Executed | `0x68f40617…` [🐞](https://debug.barn.cow.fi/order/0x68f406170315a8dcbaf7bcaef2f60c654a722eb83297a4831d08bee7a3457c83) |
| 08:39:40 | 29 | JUP → SOL (native) | Executed | `0x7b6e9cbd…` [🐞](https://debug.barn.cow.fi/order/0x7b6e9cbdea274b5787cbfc03beb0689da73f04ca6f9cb25873d5a234fcbd5454) |
| 08:39:47 | 30 | JUP → SOL (native) | Executed | `0x22d3eedb…` [🐞](https://debug.barn.cow.fi/order/0x22d3eedb08f7124ed0684583d773fa9c9203bc3665ad160c2b82f68e1e3f1553) |
| 08:39:55 | 31 | JUP → SOL (native) | Executed | `0xdcc7703e…` [🐞](https://debug.barn.cow.fi/order/0xdcc7703e67e46ccfc05e0baa2205d080a621499a334237405e89e059690c2037) |
| 08:40:01 | 32 | JUP → SOL (native) | Executed | `0x413c6a69…` [🐞](https://debug.barn.cow.fi/order/0x413c6a691d4e9099e8669332ca5eb60e0de843305a491a9045e88b5fb9423ed8) |
| 08:40:04 | 33 | JUP → SOL (native) | Executed | `0xb7cf671f…` [🐞](https://debug.barn.cow.fi/order/0xb7cf671f958cee81d7a23d87ef97fb2f39120335f0d3a55fad14477ce3aa2cc2) |
| 08:40:12 | 34 | JUP → SOL (native) | Executed | `0x4cc31735…` [🐞](https://debug.barn.cow.fi/order/0x4cc317353d00e5b136922c58c32d1427e05724de72a58c603fafd71b83a5906f) |
| 08:40:15 | 35 | JUP → SOL (native) | Executed | `0xef0bf878…` [🐞](https://debug.barn.cow.fi/order/0xef0bf878a9e082990a02377969c8a2b10ee814da5bb496776c64ff8e3fa95cba) |
| 08:40:20 | 36 | JUP → SOL (native) | Executed | `0xc80f3d9d…` [🐞](https://debug.barn.cow.fi/order/0xc80f3d9dca99b1c7ad3eb9c05e4fc7f6d3f5538f0baf4ff094e61d17490110fb) |
| 08:40:20 | 36 | USDC → SOL (native) | Executed | `0x408d80c9…` [🐞](https://debug.barn.cow.fi/order/0x408d80c9fc1887a94766e13e12aa062db1a771723e882ef2bad97d66ea7b0898) |
| 08:40:22 | 37 | JUP → SOL (native) | Executed | `0x785d921b…` [🐞](https://debug.barn.cow.fi/order/0x785d921bcfa1a34370c66e5b3daaa9d61b1e978df2349f2897768c90b9d14f8d) |
| 08:40:24 | 38 | JUP → SOL (native) | Executed | `0xcf6d306e…` [🐞](https://debug.barn.cow.fi/order/0xcf6d306eab1597817bd32649abeaabab042fb914f37dbebcca9632098725e273) |
| 08:40:34 | 39 | JUP → SOL (native) | Executed | `0x51cae980…` [🐞](https://debug.barn.cow.fi/order/0x51cae9802ce9717da9899a09cd5e0196778e8cf4ed5e829df3d4be9747ccbec0) |
| 08:40:41 | 40 | JUP → SOL (native) | Executed | `0x1f5e819e…` [🐞](https://debug.barn.cow.fi/order/0x1f5e819eccd29a27d6a8da69468792b5df44c761ac943fa355275a4ce96085a2) |
| 08:48:36 | 42 | USDC → SOL (native) | Executed | `0xb944cfaa…` [🐞](https://debug.barn.cow.fi/order/0xb944cfaad3569cca42dda9977e821845d421768ed727961f73d6e139c4523da8) |
| 08:48:37 | 43 | USDC → SOL (native) | Executed | `0x4cddabaf…` [🐞](https://debug.barn.cow.fi/order/0x4cddabaf878a304e09c13d487712b8d3b9a94706ed3928c5d1131df68b453164) |
| 08:48:38 | 44 | USDC → SOL (native) | Executed | `0x05d3eb6a…` [🐞](https://debug.barn.cow.fi/order/0x05d3eb6ae154ecc210c45a27bc2e2ac3cc5771db7d2a58531e1b65d0357ca152) |
| 08:48:39 | 45 | USDC → SOL (native) | Executed | `0x78fa8b41…` [🐞](https://debug.barn.cow.fi/order/0x78fa8b4161ce0c89dc34b1923703d6d0afb70afc7ebd2126ebafdc49ff8dc2d5) |
| 08:48:40 | 46 | USDC → SOL (native) | Executed | `0x54304f1c…` [🐞](https://debug.barn.cow.fi/order/0x54304f1cd30928220d2b7abdb1ae592100fbef70c89a47a3a741eb2b5c68c5dc) |
| 08:48:41 | 47 | USDC → SOL (native) | Executed | `0x864281a0…` [🐞](https://debug.barn.cow.fi/order/0x864281a02e110bfebb9eea9bb600a91fd66221cb0ba145587857f41c35a618d5) |
| 08:48:42 | 48 | USDC → SOL (native) | Executed | `0x4e919bb5…` [🐞](https://debug.barn.cow.fi/order/0x4e919bb533ad4ea4d8891fdfd2c6a70a39dbde25ddc9a3cdd5b248fb264ae2d3) |
| 08:48:43 | 49 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb8c36b1b…` [🐞](https://debug.barn.cow.fi/order/0xb8c36b1b4487aa5d583f9b746d8b9ebec2d44b535500f40ef35884e0ed893601) |
| 08:48:46 | 50 | USDC → SOL (native) | Executed | `0x1231737b…` [🐞](https://debug.barn.cow.fi/order/0x1231737b82fa404d616f79ef882397bddf26f7dcb49d33bece75ff26af4687d6) |
| 08:48:47 | 41 | USDC → SOL (native) | Executed | `0xa22cb235…` [🐞](https://debug.barn.cow.fi/order/0xa22cb235557314911465801f6403f7b545b7c73eb7d8054e908c47cfaf9528cb) |
| 08:48:56 | 51 | USDC → SOL (native) | Executed | `0x4f75abe2…` [🐞](https://debug.barn.cow.fi/order/0x4f75abe2392050cc4e9a2e587e5c4d55a6c1396c4a47cbf5e852558ce8dd70e2) |
| 08:48:57 | 52 | USDC → SOL (native) | Executed | `0xb59a5294…` [🐞](https://debug.barn.cow.fi/order/0xb59a529401d0904335ab77df1478c13cd7730df8f8e38f7b7998a959340215ff) |
| 08:49:04 | 53 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x83422133…` [🐞](https://debug.barn.cow.fi/order/0x83422133ea0315c40c2a8568e23be4ce8708c474037fb392c2f84d0acd514530) |
| 08:49:13 | 54 | USDC → SOL (native) | Executed | `0xd510b349…` [🐞](https://debug.barn.cow.fi/order/0xd510b34942d542cddc5f8a09f4cf0118e1b320e8ceff489b10c97d2a8caebe4e) |
| 08:49:18 | 55 | USDC → SOL (native) | Executed | `0xd83cc089…` [🐞](https://debug.barn.cow.fi/order/0xd83cc08918e91362a86b43f0cd992ffc6ca33518322d715140bb756deae7a964) |
| 08:49:27 | 56 | USDC → SOL (native) | Executed | `0x0e99a5f0…` [🐞](https://debug.barn.cow.fi/order/0x0e99a5f08c12b2f985f1b072bdace84f73e79704c76e35d4238462557df0ed9c) |
| 08:49:30 | 57 | USDC → SOL (native) | Executed | `0xa8febfde…` [🐞](https://debug.barn.cow.fi/order/0xa8febfde6fb533379ec25262e8e401cf0f52fae732ca2d4f50e0447cafb81760) |
| 08:49:32 | 58 | USDC → SOL (native) | Executed | `0x1727c4ec…` [🐞](https://debug.barn.cow.fi/order/0x1727c4ec79812711b155ca619d28e9870183a5fa812c8c5983be37edec656a19) |
| 08:49:45 | 59 | USDC → SOL (native) | Executed | `0x4638bc17…` [🐞](https://debug.barn.cow.fi/order/0x4638bc179deaa20c3f1b4af69e350e8056d3708654961943ad59b5a1c72b5952) |
| 08:49:46 | 60 | USDC → SOL (native) | Executed | `0x7b8e3ebd…` [🐞](https://debug.barn.cow.fi/order/0x7b8e3ebd92097e5149c1e633acdcba7eccc33ba27ddb2fa2f581e1d22c818dc0) |
| 08:49:50 | 61 | USDC → SOL (native) | Executed | `0x9032cf70…` [🐞](https://debug.barn.cow.fi/order/0x9032cf70eb9c1d5f6772b5ec2a53d77ce5dd9429e3031cdf8acc2b0dc7c2320f) |
| 08:50:10 | 62 | USDC → SOL (native) | Executed | `0xf66b177d…` [🐞](https://debug.barn.cow.fi/order/0xf66b177d3d19c913b00f9359c53a68c56bf66c88706378856bc0330c28ebae0d) |
| 08:50:12 | 63 | USDC → SOL (native) | Executed | `0xdcc88968…` [🐞](https://debug.barn.cow.fi/order/0xdcc88968dce99272cc40877c238a267bcfb38a790c323bd6a52c53e6c53e754d) |
| 08:50:17 | 65 | USDC → SOL (native) | Executed | `0xc8e69860…` [🐞](https://debug.barn.cow.fi/order/0xc8e69860522cf3da10ca812e65d2b3d0a098ed04ce3031518c5d260b314c9252) |
| 08:50:18 | 64 | USDC → SOL (native) | Executed | `0xf6ef1652…` [🐞](https://debug.barn.cow.fi/order/0xf6ef1652aa52720ef2bf0fdc065e6f64e6c24924e7cc932be79d3435cc1b471e) |
| 08:50:23 | 66 | USDC → SOL (native) | Executed | `0x092d1381…` [🐞](https://debug.barn.cow.fi/order/0x092d13810f02b67eccd447ac0409bf0ad4f50efa87e45167a08c040a980d152f) |
| 08:50:29 | 67 | USDC → SOL (native) | Executed | `0xc4a6ad1a…` [🐞](https://debug.barn.cow.fi/order/0xc4a6ad1a1904841951f12b78b3b265217c0d02102cc7047232000f541a10f08c) |
| 08:50:33 | 68 | USDC → SOL (native) | Executed | `0x23c95e05…` [🐞](https://debug.barn.cow.fi/order/0x23c95e056aef5207ca222cec34b4b10abe9aa357399c46a71481d58037231180) |
| 08:50:39 | 69 | USDC → SOL (native) | Executed | `0x7af75c6d…` [🐞](https://debug.barn.cow.fi/order/0x7af75c6dd3ef0ef5d59a29d20595f17d54d1e8744b8218dd059bca5fdfbbe54e) |
| 08:50:47 | 71 | USDC → SOL (native) | Executed | `0x78ad33b3…` [🐞](https://debug.barn.cow.fi/order/0x78ad33b30c52bd82c3bbcee3ea661d14175ef0378296798a2d7b0e1bd0769b88) |
| 08:50:47 | 70 | USDC → SOL (native) | Executed | `0x9392f979…` [🐞](https://debug.barn.cow.fi/order/0x9392f9797da8bb0241e0621d753306a8d781dbd68ca71cf4bb279ba63ac8e284) |
| 08:50:47 | 72 | USDC → SOL (native) | Executed | `0x8494669d…` [🐞](https://debug.barn.cow.fi/order/0x8494669d68d101b105c6cc7ab631dd3afbc67e91e6f9306d3dbd27b2f017c578) |
| 08:53:03 | 74 | PAID → SOL (native) | Executed | `0x93fa6478…` [🐞](https://debug.barn.cow.fi/order/0x93fa64783a5f8d34454bdbdaeca2b4fd8b0b0f24d181009badb4ceccf9ae2565) |
| 08:53:04 | 75 | USDG → SOL (native) | Executed | `0xa9379fac…` [🐞](https://debug.barn.cow.fi/order/0xa9379fac0880172d0eae52a2986df82a99c23d14424bc263ddee5c5a2e12844d) |
| 08:53:05 | 76 | PUMP → SOL (native) | Executed | `0xa007ed5d…` [🐞](https://debug.barn.cow.fi/order/0xa007ed5d8147c90f5f9b4b74048af9db17eb661f3d55e2fd57825e0ec4557555) |
| 08:53:06 | 77 | PYUSD → SOL (native) | Executed | `0x65615eaa…` [🐞](https://debug.barn.cow.fi/order/0x65615eaa2f795ac03f2ea6834232e1c4b5e0db23ac4ec6c75c3b1227a02549a1) |
| 08:53:07 | 78 | CASH → SOL (native) | Executed | `0x393b2d71…` [🐞](https://debug.barn.cow.fi/order/0x393b2d71059d332fbf37202629cf967563b9750f5265ec19cec9dd1eabad645c) |
| 08:53:08 | 79 | CRCLx → SOL (native) | Executed | `0x68183266…` [🐞](https://debug.barn.cow.fi/order/0x6818326689d9095cb80993ad6c0d76774897072ff7e055dd896aa999d4ba858a) |
| 08:53:09 | 80 | SPYx → SOL (native) | Executed | `0x4f4de39c…` [🐞](https://debug.barn.cow.fi/order/0x4f4de39cffe5589d54664e4f085f36ec88363aa75524eb5eac7ec0cfa3a2cc79) |
| 08:53:10 | 81 | USDv → SOL (native) | Executed | `0x13df1576…` [🐞](https://debug.barn.cow.fi/order/0x13df15768db655ca44c30d787ad8c3e9af1e6a9553121ca68423b30788c7ad62) |
| 08:53:13 | 82 | SKHY → SOL (native) | Executed | `0x2195fae4…` [🐞](https://debug.barn.cow.fi/order/0x2195fae47ab762139612ce848e14ec341da17c2b73ab9ee29f3456f7ec46d714) |
| 08:53:13 | 73 | ANSEM → SOL (native) | Executed | `0x89ca65bd…` [🐞](https://debug.barn.cow.fi/order/0x89ca65bdefd3af1f18f624b40b414961c6055fff49826569944a640c4bca9c81) |
| 08:53:25 | 83 | NVDAx → SOL (native) | Executed | `0xa1432a90…` [🐞](https://debug.barn.cow.fi/order/0xa1432a90d14a614590f5751164b09855c17aaa154d17b23d8d97d78f0fb836d1) |
| 08:53:28 | 84 | MU → SOL (native) | Executed | `0x5b4ce895…` [🐞](https://debug.barn.cow.fi/order/0x5b4ce89543bd2b5ae8cc55cf8e7263b7d65f357365e0fbbead99a9fc1021834f) |
| 08:53:31 | 85 | SPCX → SOL (native) | Executed | `0xd44fc808…` [🐞](https://debug.barn.cow.fi/order/0xd44fc8089db679f15f8f0f9d26fcbdca08a793aca936533ba6fedfe9d691b445) |
| 08:53:38 | 86 | SPCXx → SOL (native) | Executed | `0xed3151ab…` [🐞](https://debug.barn.cow.fi/order/0xed3151ab27a2a1a5258eef756d37f7b22de9e52051ee8bbbc431645276be8712) |
| 08:53:48 | 87 | TSLAx → SOL (native) | Executed | `0xe1ce0350…` [🐞](https://debug.barn.cow.fi/order/0xe1ce03501412f2c2730aa41715a234e7ee85250c1a1a70df7a5a3a656a639e30) |
| 08:54:06 | 88 | Bonk → SOL (native) | Executed | `0x1d42537a…` [🐞](https://debug.barn.cow.fi/order/0x1d42537a7bdabe10dfc0e54cb298a87fa1a59394d060721fba1b167693524a3d) |
| 08:54:08 | 89 | $WIF → SOL (native) | Executed | `0x5e6900db…` [🐞](https://debug.barn.cow.fi/order/0x5e6900dbb179786b9aec8dc49e7c24e32a2af8757319a7164c8354005e692bc7) |
| 08:54:08 | 91 | JitoSOL → SOL (native) | Executed | `0x70964d63…` [🐞](https://debug.barn.cow.fi/order/0x70964d63421833b3dfce08f63115209586e7898ff51352fc38dc1e5df6b51573) |
| 08:54:08 | 90 | POPCAT → SOL (native) | Executed | `0xa45e7a99…` [🐞](https://debug.barn.cow.fi/order/0xa45e7a993874ce40453e65a03767b428fb8d8ce378c542d09624f8eea9df461e) |
| 08:54:09 | 92 | mSOL → SOL (native) | Executed | `0xbd399bc2…` [🐞](https://debug.barn.cow.fi/order/0xbd399bc29369c570cfefb7f30cdaf1d90d049f6a5bf136a0ccde0a5a3fd8d17f) |
| 08:54:19 | 93 | JupSOL → SOL (native) | Executed | `0xb1dacf49…` [🐞](https://debug.barn.cow.fi/order/0xb1dacf4975ade455c52b1881cf66dba73ef4fff4ec58a527fabf56da9a03d53a) |
| 08:54:21 | 94 | cbBTC → SOL (native) | Executed | `0x51ce8cb8…` [🐞](https://debug.barn.cow.fi/order/0x51ce8cb8e226ad0090e0ce3c7cede19d9ea826219173c7e821fe3f0b02ddb994) |
| 08:54:23 | 95 | USDe → SOL (native) | Executed | `0x5d613708…` [🐞](https://debug.barn.cow.fi/order/0x5d613708f03abf028922d9e64a839734f596e65a9ed1c7ba0a7fff81dc7ffd5f) |
| 08:54:27 | 96 | EURC → SOL (native) | Executed | `0x15a913e1…` [🐞](https://debug.barn.cow.fi/order/0x15a913e10a821ece172ed8bc68528497546f0a53aa531828100bd5629fa750a7) |
| 08:54:28 | 97 | USDY → SOL (native) | Executed | `0xa1b66c7e…` [🐞](https://debug.barn.cow.fi/order/0xa1b66c7e9c34ac624085ce5324a83ab6873d815059c213fbf2fb100b5b1ce1ed) |
| 08:54:31 | 98 | JLP → SOL (native) | Executed | `0x38c7943d…` [🐞](https://debug.barn.cow.fi/order/0x38c7943da98379c299e466ca77425fd9a2d7f6013663d3fbe6e355d94c42cfc5) |
| 08:54:41 | 101 | BNB → SOL (native) | Executed | `0xab4ac58f…` [🐞](https://debug.barn.cow.fi/order/0xab4ac58fe5eacc7dd53065d969246617f3c0adbf91271c3c75fa2507c32aa246) |
| 08:54:44 | 100 | ETH → SOL (native) | Executed | `0x584c45f7…` [🐞](https://debug.barn.cow.fi/order/0x584c45f7e15e5a5e9388d6172f0624322d6d7bc0e139400ba3ecce8e0ddd306f) |
| 08:54:44 | 99 | INF → SOL (native) | Executed | `0x84ed0fd1…` [🐞](https://debug.barn.cow.fi/order/0x84ed0fd1f9a8d0e340ed03aeed653fe3ea021c05fc2100049c2db3122cbdec39) |
| 08:55:07 | 104 | EUROP → SOL (native) | Executed | `0x13906592…` [🐞](https://debug.barn.cow.fi/order/0x13906592502a6db3b2957ac8c0dddf49808173857be926284561fe104a4557bf) |
| 08:55:11 | 106 | MEW → SOL (native) | Executed | `0x844bc1e0…` [🐞](https://debug.barn.cow.fi/order/0x844bc1e0d75a54a30aff4fa86136883c320f920ffea4855a7b03e3655b360167) |
| 08:55:11 | 108 | hyloSOL → SOL (native) | Executed | `0xb6c28e7c…` [🐞](https://debug.barn.cow.fi/order/0xb6c28e7c498ae4954ffe6a312f447109678e694832e48c69afc83368215877a1) |
| 08:55:16 | 102 | XAUt0 → SOL (native) | Executed | `0x16ca57e1…` [🐞](https://debug.barn.cow.fi/order/0x16ca57e17f8279f0678f2f7b415b89326f47f806bdd3c37e8bc5d14790ef6762) |
| 08:55:17 | 109 | PSOL → SOL (native) | Executed | `0xe9961f31…` [🐞](https://debug.barn.cow.fi/order/0xe9961f31ef28bc4dd47ad88d9a08d31b083676e8261d15bac40fe95372f2deca) |
| 08:55:17 | 103 | GLDx → SOL (native) | Executed | `0x34d5293d…` [🐞](https://debug.barn.cow.fi/order/0x34d5293d0aebcc8a8d0a4cd5e6c99f096adf07ae81091d68fe0478af87cb9174) |
| 08:55:18 | 107 | BOME → SOL (native) | Executed | `0xd9b75bbc…` [🐞](https://debug.barn.cow.fi/order/0xd9b75bbc93d1cfcac920cd76cabde04972809445800c2cb91a4ecfaf0dcfd391) |
| 08:55:19 | 105 | Fartcoin → SOL (native) | Executed | `0x431b3425…` [🐞](https://debug.barn.cow.fi/order/0x431b3425dc4a2bc7bbe7b3446f8ac151cc991431cdb456ccc427d7067d020ec3) |
| 08:55:52 | 23 | JUP → SOL (native) | Executed | `0x632349a3…` [🐞](https://debug.barn.cow.fi/order/0x632349a38bd34acb990f4d903fb33168aec931f3d1d4dcd153876547125ac778) |
| 08:55:52 | 26 | JUP → SOL (native) | Executed | `0x9f49d9ee…` [🐞](https://debug.barn.cow.fi/order/0x9f49d9ee4773b7139af547b9447c7e8dcb24ad94a076bfcdd4837c603842b871) |
| 08:55:53 | 27 | JUP → SOL (native) | Executed | `0xcb3998f7…` [🐞](https://debug.barn.cow.fi/order/0xcb3998f70af23d0cd27f0140d3ca37c8cc7597abfe370104e8643fb65a4e83b4) |
| 08:56:13 | 49 | USDC → SOL (native) | Executed | `0x64347d9f…` [🐞](https://debug.barn.cow.fi/order/0x64347d9f2e7d162da03d67085f097ad60c14b3389f6c15a09b185f4f90cebf70) |
| 08:56:14 | 53 | USDC → SOL (native) | Executed | `0xb1f1848c…` [🐞](https://debug.barn.cow.fi/order/0xb1f1848c17323b6c3b3002f494131a136e7ef02ab5720a2411fa506232807f58) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 187 | 99.5% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 0.5% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 10s | 20s | 27s | 48s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 883X…8aGz | 187 | 100.0% | 103 | 106,016 | 10s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| kaisersolver | 491 | 212 | 209 | 98.6% | 0 | 2 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 286 times
- Orders filtered for `in_flight`: 1 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 168 | 167 | 99.4% |
| market buy | 20 | 20 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 100 | 100 | 100.0% |
| wSOL → JUP | 27 | 27 | 100.0% |
| wSOL → USDG | 10 | 10 | 100.0% |
| USDC → wSOL | 4 | 4 | 100.0% |
| USDC → SOL (native) | 4 | 4 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 2 | 100.0% |
| wSOL → PAID | 2 | 2 | 100.0% |
| wSOL → CASH | 2 | 1 | 50.0% |
| wSOL → MU | 2 | 2 | 100.0% |
| JUP → USDC | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → USDv | 1 | 1 | 100.0% |
| wSOL → SKHY | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 5 | 5 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 5 | 5 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 5 | 5 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 5 | 5 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 4 | 4 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 4 | 4 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 4 | 4 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 4 | 4 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 4 | 4 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 4 | 4 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 3 | 3 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 3 | 3 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 3 | 3 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 3 | 3 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 3 | 3 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 3 | 3 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 3 | 3 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 3 | 3 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 3 | 3 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 3 | 3 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 3 | 3 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 2 | 2 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 2 | 2 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 2 | 2 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 2 | 2 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 2 | 2 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 2 | 2 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 2 | 2 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 2 | 2 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 2 | 2 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 2 | 2 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 2 | 2 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 2 | 2 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 2 | 2 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 2 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 2 | 2 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 2 | 1 | 50.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 2 | 2 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 1 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 1 | 1 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 1 | 1 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 1 | 1 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 1 | 1 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 1 | 1 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 1 | 1 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 1 | 1 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 1 | 1 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 1 | 1 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 1 | 1 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 1 | 1 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 1 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 1 | 1 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 1 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 1 | 1 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 1 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 1 | 1 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 1 | 1 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 1 | 1 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 1 | 1 | 100.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 08:52:01 | wSOL → CASH | market sell | Winner too late: creation blockhash expired | `0x4816f0eb…` [🐞](https://debug.barn.cow.fi/order/0x4816f0ebf31a0be9cf385deb89c219fe84a1455eb1aa364d171f0d8b92fed351) |
