# Solana QoS report: 2026-10-28-11-43-composite-kaisersolver-run

Barn, orders created between `2026-10-28T11:46:37.256Z` and `2026-10-28T12:10:57.512Z`. Data fetched 2026-10-28T12:18:00+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 184 |
| Orders executed | **182** (98.9%) |
| Sponsored orders never created on-chain | 2 (1.1%) |
| Traders | 109 |
| Settlement txs | 100 |

## Scenario results

Target solver: `kaisersolver`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-28T11:46:37.256Z | 2026-10-28T11:47:13.405Z | 4/6 | 2 | 6 | 6 | 66.7% |
| receiving-account-costs | 2026-10-28T11:47:41.496Z | 2026-10-28T11:48:34.681Z | 14/16 | 2 | 16 | 14 | 87.5% |
| native-vs-wrapped-payouts | 2026-10-28T11:50:03.863Z | 2026-10-28T11:51:34.220Z | 12/12 | 0 | 14 | 14 | 100.0% |
| solver-same-direction-25 | 2026-10-28T11:52:25.348Z | 2026-10-28T11:53:05.195Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-28T11:55:28.131Z | 2026-10-28T12:02:16.225Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-token-coverage | 2026-10-28T12:05:31.601Z | 2026-10-28T12:06:08.631Z | 39/52 | 13 | 39 | 39 | 75.0% |

## Scenario

178 of 195 scenario rows completed. 0 retries, 7 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:46:37 | 1 | 1 | sell 0.005 SOL → USDC | filled | 7s | 1 |  |
| 11:46:37 | 2 | 2 | sell 0.005 SOL → USDT | filled | 6s | 1 |  |
| 11:46:37 | 3 | 3 | sell 0.5 JUP → USDC | failed | 12s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 11:46:44 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 1s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 11:46:43 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 7s | 1 |  |
| 11:46:50 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 22s | 2 |  |
| 11:47:41 | 7 | 4 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 11:47:41 | 8 | 5 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 11:47:41 | 9 | 6 | buy 0.25 USDC ← SOL | filled | 18s | 1 |  |
| 11:47:41 | 10 | 7 | buy 0.25 USDC ← SOL | filled | 13s | 1 |  |
| 11:47:41 | 11 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 33s | 1 | main expired |
| 11:47:41 | 12 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 6s | 1 |  |
| 11:47:41 | 13 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 37s | 1 | main expired |
| 11:47:41 | 14 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 13s | 1 |  |
| 11:47:49 | 15 | 4 | sell 0.0025 SOL → USDC | filled | 29s | 1 |  |
| 11:47:50 | 16 | 5 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 11:47:59 | 17 | 6 | buy 0.25 USDC ← SOL | filled | 4s | 1 |  |
| 11:47:54 | 18 | 7 | buy 0.25 USDC ← SOL | filled | 15s | 1 |  |
| 11:48:14 | 19 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 20s | 1 |  |
| 11:47:48 | 20 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 11s | 1 |  |
| 11:48:18 | 21 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 13s | 1 |  |
| 11:47:54 | 22 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 24s | 1 |  |
| 11:50:03 | 23 | 12 | sell 0.005 SOL → USDC | filled | 7s | 1 |  |
| 11:50:03 | 24 | 13 | sell 0.005 SOL → USDC | filled | 13s | 1 |  |
| 11:50:03 | 25 | 14 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 11:50:03 | 26 | 15 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 11:50:10 | 27 | 12 | sell 0.2 USDC → SOL | filled | 10s | 1 |  |
| 11:50:17 | 28 | 13 | sell 0.2 USDC → wSOL | filled | 58s | 1 |  |
| 11:50:12 | 29 | 14 | sell 0.2 USDC → SOL | filled | 59s | 1 |  |
| 11:50:12 | 30 | 15 | sell 0.2 USDC → wSOL | filled | 18s | 1 |  |
| 11:50:21 | 31 | 12 | buy 0.002 SOL ← USDC | filled | 21s | 2 |  |
| 11:51:15 | 32 | 13 | buy 0.002 wSOL ← USDC | filled | 19s | 2 |  |
| 11:51:11 | 33 | 14 | buy 0.002 SOL ← USDC | filled | 8s | 1 |  |
| 11:50:30 | 34 | 15 | buy 0.002 wSOL ← USDC | filled | 15s | 1 |  |
| 11:52:25 | 35 | 16 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 11:52:25 | 36 | 17 | sell 0.005 SOL → JUP | filled | 35s | 1 |  |
| 11:52:25 | 37 | 18 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 11:52:25 | 38 | 19 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 11:52:25 | 39 | 20 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 11:52:25 | 40 | 21 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 11:52:25 | 41 | 22 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 11:52:25 | 42 | 23 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 11:52:25 | 43 | 24 | sell 0.005 SOL → JUP | filled | 11s | 1 |  |
| 11:52:25 | 44 | 25 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 11:52:25 | 45 | 26 | sell 0.005 SOL → JUP | filled | 40s | 1 |  |
| 11:52:25 | 46 | 27 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 11:52:25 | 47 | 28 | sell 0.005 SOL → JUP | filled | 34s | 1 |  |
| 11:52:25 | 48 | 29 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 11:52:25 | 49 | 30 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 11:52:25 | 50 | 31 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 11:52:25 | 51 | 32 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 11:52:25 | 52 | 33 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 11:52:25 | 53 | 34 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 11:52:25 | 54 | 35 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 11:52:25 | 55 | 36 | sell 0.005 SOL → JUP | filled | 32s | 1 |  |
| 11:52:25 | 56 | 37 | sell 0.005 SOL → JUP | filled | 36s | 1 |  |
| 11:52:25 | 57 | 38 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 11:52:25 | 58 | 39 | sell 0.005 SOL → JUP | filled | 14s | 1 |  |
| 11:52:25 | 59 | 40 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 11:55:28 | 60 | 41 | sell 0.0025 SOL → USDC | filled | 5s | 1 |  |
| 11:55:28 | 61 | 42 | sell 0.003 SOL → USDC | filled | 6s | 1 |  |
| 11:55:28 | 62 | 43 | sell 0.0035 SOL → USDC | filled | 6s | 1 |  |
| 11:55:28 | 63 | 44 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 11:56:58 | 64 | 41 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 11:56:58 | 65 | 42 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 11:56:58 | 66 | 43 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 11:56:58 | 67 | 44 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 11:56:58 | 68 | 45 | sell 0.0025 SOL → USDC | filled | 5s | 1 |  |
| 11:56:58 | 69 | 46 | sell 0.003 SOL → USDC | filled | 5s | 1 |  |
| 11:56:58 | 70 | 47 | sell 0.0035 SOL → USDC | filled | 5s | 1 |  |
| 11:56:58 | 71 | 48 | sell 0.004 SOL → USDC | filled | 5s | 1 |  |
| 11:58:28 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 33s | 1 |  |
| 11:58:28 | 73 | 42 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 11:58:28 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 11:58:28 | 75 | 44 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 11:58:28 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 11:58:28 | 77 | 46 | sell 0.003 SOL → USDC | filled | 26s | 1 |  |
| 11:58:28 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 11:58:28 | 79 | 48 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 11:58:28 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 11:58:28 | 81 | 50 | sell 0.003 SOL → USDC | filled | 7s | 1 |  |
| 11:58:28 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 11:58:28 | 83 | 52 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 11:58:28 | 84 | 53 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 11:58:28 | 85 | 54 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 11:58:28 | 86 | 55 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 11:58:28 | 87 | 56 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 11:59:58 | 88 | 41 | sell 0.0025 SOL → USDC | filled | 37s | 1 |  |
| 11:59:58 | 89 | 42 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 11:59:58 | 90 | 43 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 11:59:58 | 91 | 44 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 11:59:58 | 92 | 45 | sell 0.0025 SOL → USDC | filled | 37s | 1 |  |
| 11:59:58 | 93 | 46 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 11:59:58 | 94 | 47 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 11:59:58 | 95 | 48 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 11:59:58 | 96 | 49 | sell 0.0025 SOL → USDC | filled | 37s | 1 |  |
| 11:59:58 | 97 | 50 | sell 0.003 SOL → USDC | filled | 31s | 1 |  |
| 11:59:58 | 98 | 51 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 11:59:58 | 99 | 52 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 11:59:58 | 100 | 53 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 11:59:58 | 101 | 54 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 11:59:58 | 102 | 55 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 11:59:58 | 103 | 56 | sell 0.004 SOL → USDC | filled | 10s | 1 |  |
| 11:59:58 | 104 | 57 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 11:59:58 | 105 | 58 | sell 0.003 SOL → USDC | filled | 25s | 1 |  |
| 11:59:58 | 106 | 59 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 11:59:58 | 107 | 60 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 11:59:58 | 108 | 61 | sell 0.0025 SOL → USDC | filled | 32s | 1 |  |
| 11:59:58 | 109 | 62 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 11:59:58 | 110 | 63 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 11:59:58 | 111 | 64 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 12:01:28 | 112 | 41 | sell 0.0025 SOL → USDC | filled | 44s | 1 |  |
| 12:01:28 | 113 | 42 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 12:01:28 | 114 | 43 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 12:01:28 | 115 | 44 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:01:28 | 116 | 45 | sell 0.0025 SOL → USDC | filled | 47s | 1 |  |
| 12:01:28 | 117 | 46 | sell 0.003 SOL → USDC | filled | 36s | 1 |  |
| 12:01:28 | 118 | 47 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 12:01:28 | 119 | 48 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:01:28 | 120 | 49 | sell 0.0025 SOL → USDC | filled | 47s | 1 |  |
| 12:01:28 | 121 | 50 | sell 0.003 SOL → USDC | filled | 35s | 1 |  |
| 12:01:28 | 122 | 51 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 12:01:28 | 123 | 52 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:01:28 | 124 | 53 | sell 0.0025 SOL → USDC | filled | 43s | 1 |  |
| 12:01:28 | 125 | 54 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 12:01:28 | 126 | 55 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 12:01:28 | 127 | 56 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:01:28 | 128 | 57 | sell 0.0025 SOL → USDC | filled | 48s | 1 |  |
| 12:01:28 | 129 | 58 | sell 0.003 SOL → USDC | filled | 35s | 1 |  |
| 12:01:28 | 130 | 59 | sell 0.0035 SOL → USDC | filled | 22s | 1 |  |
| 12:01:28 | 131 | 60 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 12:01:28 | 132 | 61 | sell 0.0025 SOL → USDC | filled | 43s | 1 |  |
| 12:01:28 | 133 | 62 | sell 0.003 SOL → USDC | filled | 35s | 1 |  |
| 12:01:28 | 134 | 63 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 12:01:28 | 135 | 64 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 12:01:28 | 136 | 65 | sell 0.0025 SOL → USDC | filled | 48s | 1 |  |
| 12:01:28 | 137 | 66 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 12:01:28 | 138 | 67 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 12:01:28 | 139 | 68 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 12:01:28 | 140 | 69 | sell 0.0025 SOL → USDC | filled | 42s | 1 |  |
| 12:01:28 | 141 | 70 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 12:01:28 | 142 | 71 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 12:01:28 | 143 | 72 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 12:05:31 | 144 | 73 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 14s | 1 |  |
| 12:05:31 | 145 | 74 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 14s | 1 |  |
| 12:05:31 | 146 | 75 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 14s | 1 |  |
| 12:05:31 | 147 | 76 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 14s | 1 |  |
| 12:05:32 | 148 | 77 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 7s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 12:05:32 | 149 | 78 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 14s | 1 |  |
| 12:05:32 | 150 | 79 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 15s | 1 |  |
| 12:05:32 | 151 | 80 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 22s | 1 |  |
| 12:05:32 | 152 | 81 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 19s | 1 |  |
| 12:05:32 | 153 | 82 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 15s | 1 |  |
| 12:05:32 | 154 | 83 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 14s | 1 |  |
| 12:05:32 | 155 | 84 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 19s | 1 |  |
| 12:05:32 | 156 | 85 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 19s | 1 |  |
| 12:05:32 | 157 | 86 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 15s | 1 |  |
| 12:05:32 | 158 | 87 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 15s | 1 |  |
| 12:05:33 | 159 | 88 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 26s | 1 |  |
| 12:05:33 | 160 | 89 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 26s | 1 |  |
| 12:05:33 | 161 | 90 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 23s | 1 |  |
| 12:05:33 | 162 | 91 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 33s | 1 |  |
| 12:05:33 | 163 | 92 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 23s | 1 |  |
| 12:05:33 | 164 | 93 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 20s | 1 |  |
| 12:05:33 | 165 | 94 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 21s | 1 |  |
| 12:05:33 | 166 | 95 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 27s | 1 |  |
| 12:05:33 | 167 | 96 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 24s | 1 |  |
| 12:05:33 | 168 | 97 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 24s | 1 |  |
| 12:05:34 | 169 | 98 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 21s | 1 |  |
| 12:05:34 | 170 | 99 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 21s | 1 |  |
| 12:05:34 | 171 | 100 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 24s | 1 |  |
| 12:05:34 | 172 | 101 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 24s | 1 |  |
| 12:05:34 | 173 | 102 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 24s | 1 |  |
| 12:05:34 | 174 | 103 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 22s | 1 |  |
| 12:05:34 | 175 | 104 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 22s | 1 |  |
| 12:05:34 | 176 | 105 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 25s | 1 |  |
| 12:05:34 | 177 | 106 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 22s | 1 |  |
| 12:05:34 | 178 | 107 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 19s | 1 |  |
| 12:05:35 | 179 | 108 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 19s | 1 |  |
| 12:05:35 | 180 | 109 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 19s | 1 |  |
| 12:05:45 | 181 | 73 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | filled | 19s | 1 |  |
| 12:05:45 | 182 | 74 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:05:45 | 183 | 75 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:05:45 | 184 | 76 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:05:39 | 185 | 77 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | filled | 20s | 1 |  |
| 12:05:46 | 186 | 78 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:05:46 | 187 | 79 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:05:54 | 188 | 80 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:05:51 | 189 | 81 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | filled | 15s | 1 |  |
| 12:05:47 | 190 | 82 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:05:47 | 191 | 83 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:05:51 | 192 | 84 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:05:51 | 193 | 85 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:05:47 | 194 | 86 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:05:47 | 195 | 87 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

15 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 8 | SOL → CRCLx, SOL → SPYx, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| NoLiquidity | main | 4 | SOL → PAID, SOL → USDG, SOL → PUMP, SOL → CASH | no route found |
| BlockhashExpired | main | 2 | SOL → USDC, SOL → PYUSD | the transaction's blockhash is no longer valid, sign a fresh one |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |

Scenario orders: 184 (180 main, 4 acquire). Cleanup placed 109 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:47:15 | 2 | USDT → SOL (native) | Executed | `0x12729e49…` [🐞](https://debug.barn.cow.fi/order/0x12729e49a5c8f9a2cb6cfb756b9035f5e408fde03a74fa1ee332b957125e62d6) |
| 11:47:16 | 3 | USDC → SOL (native) | Executed | `0xea580d1b…` [🐞](https://debug.barn.cow.fi/order/0xea580d1b138ccbc75b5aa487d9b011ef54da39495947dcf29fb06779a3ca3a60) |
| 11:48:36 | 4 | USDC → SOL (native) | Executed | `0xa855741c…` [🐞](https://debug.barn.cow.fi/order/0xa855741c26d4c27cb589009875ecd98de233c2b882064ed7bc7287039022ca18) |
| 11:48:37 | 5 | USDC → SOL (native) | Executed | `0xcf8aa24b…` [🐞](https://debug.barn.cow.fi/order/0xcf8aa24bf3f72af971512e353d85a561b526cd16be75d6f83c339cf33785ef84) |
| 11:48:38 | 6 | USDC → SOL (native) | Executed | `0x73ce28f5…` [🐞](https://debug.barn.cow.fi/order/0x73ce28f5d1df587d843ea01c34d652cb44d3ac7d60123ce8ddfafdcc5ba1ed4d) |
| 11:48:39 | 7 | USDC → SOL (native) | Executed | `0x1404f734…` [🐞](https://debug.barn.cow.fi/order/0x1404f7349d638dc2d9777b991a623ec560ec813a0652752755caf1bcb1f479e7) |
| 11:48:41 | 9 | USDG → SOL (native) | Executed | `0x4b7d1f4f…` [🐞](https://debug.barn.cow.fi/order/0x4b7d1f4fb7d1920c39f1354a6c7dacc8b6ea084f7a29719712f6c4c753ac32c3) |
| 11:48:45 | 10 | USDG → SOL (native) | Executed | `0x86a4fb95…` [🐞](https://debug.barn.cow.fi/order/0x86a4fb95f37dd4df76bfe52f930a3b4d2ce82c83718bc4d275d5b643402aea3b) |
| 11:48:45 | 11 | USDG → SOL (native) | Executed | `0x6aa9b9ab…` [🐞](https://debug.barn.cow.fi/order/0x6aa9b9aba661dab653e61ca80bab43a84bfdd766258d900615ba3bd77071922a) |
| 11:53:08 | 17 | JUP → SOL (native) | Executed | `0x08235235…` [🐞](https://debug.barn.cow.fi/order/0x08235235c8945f429499e20b2d30eb0deb37bc509e38be38214567f87e510e7b) |
| 11:53:09 | 18 | JUP → SOL (native) | Executed | `0x4a96c95e…` [🐞](https://debug.barn.cow.fi/order/0x4a96c95e6005b2b32cbd1b82253456735a5f27ed4ebc2975a00919118874d720) |
| 11:53:10 | 19 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe2dbaa7f…` [🐞](https://debug.barn.cow.fi/order/0xe2dbaa7fb18dd86c52115f3b54d945d7ced168ac87d7d5d829a981836a4e67f5) |
| 11:53:11 | 20 | JUP → SOL (native) | Executed | `0x8a321090…` [🐞](https://debug.barn.cow.fi/order/0x8a3210906c62c3b71dac689e3535f24d0062917cefc4ad66901a5f98e9eff9b8) |
| 11:53:12 | 21 | JUP → SOL (native) | Executed | `0xef493f2b…` [🐞](https://debug.barn.cow.fi/order/0xef493f2b45db459515b130449ec488ba43bb076d88d7f24a009e3dfbb4f98afe) |
| 11:53:13 | 22 | JUP → SOL (native) | Executed | `0x3bf1ab1a…` [🐞](https://debug.barn.cow.fi/order/0x3bf1ab1ad97dccdcb3ad4d3500bae1e142a54dfbcd7c7c714be2ab2b86be66b3) |
| 11:53:14 | 23 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe11748fd…` [🐞](https://debug.barn.cow.fi/order/0xe11748fd6874841c32d203e8f1ac5e9a17f321ea28fe148de03e09d2a562041c) |
| 11:53:15 | 24 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc4013c93…` [🐞](https://debug.barn.cow.fi/order/0xc4013c93c1593138489b6f7080494f8effcbfc89ce65c8aaac159f313c61761a) |
| 11:53:16 | 25 | JUP → SOL (native) | Executed | `0xc2adecc2…` [🐞](https://debug.barn.cow.fi/order/0xc2adecc2ede9bbeeac223d56ddc0c3ef3835473952f575089f0302d4f8362dd0) |
| 11:53:19 | 16 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x55eac2e1…` [🐞](https://debug.barn.cow.fi/order/0x55eac2e13f40a375d4fc297617d876e972a53524e58967b20417177b13264d4d) |
| 11:53:26 | 26 | JUP → SOL (native) | Executed | `0x8cfcd80d…` [🐞](https://debug.barn.cow.fi/order/0x8cfcd80d557bf7fe19f0c7de112e0bc748479ff6113001a5f6f8815f3959a4b6) |
| 11:53:31 | 27 | JUP → SOL (native) | Executed | `0xf12959e0…` [🐞](https://debug.barn.cow.fi/order/0xf12959e0191a309c515b3538cdb32d707f85f29117cdbfc7b46719de823dc880) |
| 11:53:42 | 28 | JUP → SOL (native) | Executed | `0x0890829c…` [🐞](https://debug.barn.cow.fi/order/0x0890829c90c2cc6a63165b2912217f5ee99f19683f459e0de83c7ed5f122d571) |
| 11:53:46 | 29 | JUP → SOL (native) | Executed | `0xc4f4b1ec…` [🐞](https://debug.barn.cow.fi/order/0xc4f4b1ecb04d42c3976ff36544d8ae692a45258610ffa26e33016138c7ba282c) |
| 11:53:47 | 30 | JUP → SOL (native) | Executed | `0x91406f20…` [🐞](https://debug.barn.cow.fi/order/0x91406f20bbd91a4612ace9511b18a5156a74f86f0b42038d99ad35d695c1a42a) |
| 11:53:53 | 31 | JUP → SOL (native) | Executed | `0xf5ac2891…` [🐞](https://debug.barn.cow.fi/order/0xf5ac28918e368e099bda9bad0e37224919e577a00dd21fea8909c455668fd2c3) |
| 11:54:01 | 32 | JUP → SOL (native) | Executed | `0xf3fc8564…` [🐞](https://debug.barn.cow.fi/order/0xf3fc8564b74091a2427ffb7aad59afa7d75c55ff6e347c3c6eaf047cbc28e335) |
| 11:54:01 | 33 | JUP → SOL (native) | Executed | `0xe0382a7f…` [🐞](https://debug.barn.cow.fi/order/0xe0382a7fa664f9f7543ac99a61f144475712b3a86c46748e0beb579f00efe184) |
| 11:54:10 | 34 | JUP → SOL (native) | Executed | `0xa0629c9f…` [🐞](https://debug.barn.cow.fi/order/0xa0629c9f30696149f5ab68563200ac495082900b34c50fba54b0a3187f5cc09a) |
| 11:54:17 | 35 | JUP → SOL (native) | Executed | `0x4cc29504…` [🐞](https://debug.barn.cow.fi/order/0x4cc2950429be0520003cd33c7724bc9b3a01641e08e1c06a79e21b4203aa31a0) |
| 11:54:27 | 36 | JUP → SOL (native) | Executed | `0x9bbf56ef…` [🐞](https://debug.barn.cow.fi/order/0x9bbf56efcfab49793bb4e41d4e6569c5fe2e046440a1c3b8753079c31fbab470) |
| 11:54:38 | 37 | JUP → SOL (native) | Executed | `0xd1d380a4…` [🐞](https://debug.barn.cow.fi/order/0xd1d380a4865ccd58646ce04ba79b09accc1e0231990ac974288b248603ea01da) |
| 11:54:41 | 39 | JUP → SOL (native) | Executed | `0x73639270…` [🐞](https://debug.barn.cow.fi/order/0x73639270601058b386e227139b26beee289256b7bc1a10e63fdf28c823ebd3af) |
| 11:54:45 | 38 | JUP → SOL (native) | Executed | `0x3d27ebae…` [🐞](https://debug.barn.cow.fi/order/0x3d27ebae7c8b3509365be26b3c68d97315cc1a9e04ce2ab3aecde5d1cb4c76b9) |
| 11:54:48 | 40 | JUP → SOL (native) | Executed | `0xf052dd62…` [🐞](https://debug.barn.cow.fi/order/0xf052dd62de1978dee8b04e4f1f21c9758ea3691b0f901aa392c2ce4b665418b0) |
| 12:02:19 | 42 | USDC → SOL (native) | Executed | `0x57a6e2dd…` [🐞](https://debug.barn.cow.fi/order/0x57a6e2dde07c65279cbf977f071a0872f8f422ca1ef6db580b91fd1e7b33e538) |
| 12:02:20 | 43 | USDC → SOL (native) | Executed | `0x74ae2454…` [🐞](https://debug.barn.cow.fi/order/0x74ae245459f581ea3eca73174a68aa0f46feca93e5cf4b4c0af8ad96bc548cb4) |
| 12:02:21 | 44 | USDC → SOL (native) | Executed | `0x08bf2f32…` [🐞](https://debug.barn.cow.fi/order/0x08bf2f325749a9dd39c93aca7e41ea67ee591a7ebbc35fad318e93c0086b7d5c) |
| 12:02:22 | 45 | USDC → SOL (native) | Executed | `0x5988b39d…` [🐞](https://debug.barn.cow.fi/order/0x5988b39daef6ce79c2bf1389b577237c6d59690c9da1fc4ded7d3de0645c2099) |
| 12:02:23 | 46 | USDC → SOL (native) | Executed | `0xc1e26614…` [🐞](https://debug.barn.cow.fi/order/0xc1e26614cbca0f1ae593bbf81e205a050ba405f1cc76793be796bffa2fdb505f) |
| 12:02:24 | 47 | USDC → SOL (native) | Executed | `0x9ffdd719…` [🐞](https://debug.barn.cow.fi/order/0x9ffdd719d7f776cc8056df1173c87fc27f2ff924cea66daf0e42fbd6ee9e64f5) |
| 12:02:25 | 48 | USDC → SOL (native) | Executed | `0x266b2d14…` [🐞](https://debug.barn.cow.fi/order/0x266b2d14276736f304aa0a01de5d3b8fb59d0350900d80fa5b3020645dad5fa4) |
| 12:02:26 | 49 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x3f04e89a…` [🐞](https://debug.barn.cow.fi/order/0x3f04e89a479004f8083c1ee2ca46519f40e9a7d43ea573cdfb8d72f78fe143c5) |
| 12:02:29 | 50 | USDC → SOL (native) | Executed | `0xbde60a22…` [🐞](https://debug.barn.cow.fi/order/0xbde60a22542b45257f3c93aa77e482e656fde0315bd9696f1e2fbb5ef6a3a28a) |
| 12:02:29 | 41 | USDC → SOL (native) | Executed | `0x6ee34f48…` [🐞](https://debug.barn.cow.fi/order/0x6ee34f4852f80dec3e4990f77267be7737a40d24950bfe3016a26348161f3533) |
| 12:02:39 | 51 | USDC → SOL (native) | Executed | `0xdaf673c1…` [🐞](https://debug.barn.cow.fi/order/0xdaf673c1abcf0ce49f54fa27aa06d83eea5852c40973110377361ed023e2c6c6) |
| 12:02:40 | 52 | USDC → SOL (native) | Executed | `0x4e5604d7…` [🐞](https://debug.barn.cow.fi/order/0x4e5604d70c06a85ca61c64768bc5093e70143de6b07b34785e2d3121e4ddc16e) |
| 12:02:47 | 53 | USDC → SOL (native) | Executed | `0x3e94c3df…` [🐞](https://debug.barn.cow.fi/order/0x3e94c3df06d463ff74c02dcfec0f49bbf8bf7cd01c0bf3778e79b2a7c1bebf76) |
| 12:02:49 | 54 | USDC → SOL (native) | Executed | `0x9280c4a6…` [🐞](https://debug.barn.cow.fi/order/0x9280c4a624c6cd15d6e2e3944149b79f35714b7c4f646ad77cb35282f1bc4149) |
| 12:02:58 | 55 | USDC → SOL (native) | Executed | `0x9ef41f01…` [🐞](https://debug.barn.cow.fi/order/0x9ef41f01227c38f2b1a897face9c2f2f1aab14ab008cf6f88f74196cc11bb705) |
| 12:03:03 | 56 | USDC → SOL (native) | Executed | `0x2d3dc8e9…` [🐞](https://debug.barn.cow.fi/order/0x2d3dc8e958a56af848fb13d5d868e18b0c6f7f0d3e486836f89904caad7be47c) |
| 12:03:12 | 57 | USDC → SOL (native) | Executed | `0xc0c432fd…` [🐞](https://debug.barn.cow.fi/order/0xc0c432fdd73266fff03621a5a3597f2aee3491227f3dbb46e48d1a0b93647cf3) |
| 12:03:18 | 58 | USDC → SOL (native) | Executed | `0xa5234c8d…` [🐞](https://debug.barn.cow.fi/order/0xa5234c8d49a5835e1e88cf204efcf8d61d0b0a7872b2fdaddb85c8bbeaf15221) |
| 12:03:21 | 59 | USDC → SOL (native) | Executed | `0x3c98eb30…` [🐞](https://debug.barn.cow.fi/order/0x3c98eb30dd57928f1d606720d12342db0f69b5c7c1f0b28d801044dfdcbea759) |
| 12:03:29 | 60 | USDC → SOL (native) | Executed | `0xcb2559ac…` [🐞](https://debug.barn.cow.fi/order/0xcb2559ac6da498b72d7e35eeda864723b3de0ce8637bd1b09b7c5bc2c760d0cf) |
| 12:03:34 | 61 | USDC → SOL (native) | Executed | `0xafcc6f01…` [🐞](https://debug.barn.cow.fi/order/0xafcc6f01765f82ae84598fe8c229872abcfab6fcb63bec9cca0867a47dd6da83) |
| 12:03:38 | 62 | USDC → SOL (native) | Executed | `0x02d17f9e…` [🐞](https://debug.barn.cow.fi/order/0x02d17f9ea6f6a24e280c15e3292e689db9f43fe9d8c895ea09d74d281a127247) |
| 12:03:48 | 63 | USDC → SOL (native) | Executed | `0x2f70bad1…` [🐞](https://debug.barn.cow.fi/order/0x2f70bad12b967bdf542da3a9432bee547a102a4955e0fc532ba490e7a6a0467c) |
| 12:03:55 | 65 | USDC → SOL (native) | Executed | `0xe9a86b0a…` [🐞](https://debug.barn.cow.fi/order/0xe9a86b0a40e17be99b2ae941c00dc2949692205d9a64e7156b96810d5d3bead1) |
| 12:03:58 | 64 | USDC → SOL (native) | Executed | `0x0d3f244f…` [🐞](https://debug.barn.cow.fi/order/0x0d3f244f761bc06db1725192f805980412191ddd5fab2eb99cd04b4b6a4f6128) |
| 12:03:59 | 66 | USDC → SOL (native) | Executed | `0x317a4558…` [🐞](https://debug.barn.cow.fi/order/0x317a4558014c15f05671f9fbb374d3fecfcd797bea3a6595c19e088da6155efc) |
| 12:04:07 | 67 | USDC → SOL (native) | Executed | `0xdb7c1354…` [🐞](https://debug.barn.cow.fi/order/0xdb7c13543d8b0c1d7f6d9baa84542cb789f4a5d928888e2ef39e0d2e7f6c35a0) |
| 12:04:14 | 68 | USDC → SOL (native) | Executed | `0x8afcca93…` [🐞](https://debug.barn.cow.fi/order/0x8afcca9338b993bc0397895a7acef9df4ac7a158b06f58f67fb75f339e5bdaa9) |
| 12:04:30 | 69 | USDC → SOL (native) | Executed | `0x5c2636ad…` [🐞](https://debug.barn.cow.fi/order/0x5c2636ad4983116a0e4d266e920f4eda8d559f28cdeb0b72b4e52bc55fe2309e) |
| 12:04:34 | 70 | USDC → SOL (native) | Executed | `0x964d0237…` [🐞](https://debug.barn.cow.fi/order/0x964d0237c7aae21e3447ea75e0150888f5f196220557e49549269640e263d451) |
| 12:04:39 | 71 | USDC → SOL (native) | Executed | `0x0f9747bb…` [🐞](https://debug.barn.cow.fi/order/0x0f9747bb8155ec62fd8f2175fe2c123e71fe025921ae285340acb99d5c554d28) |
| 12:04:42 | 72 | USDC → SOL (native) | Executed | `0x1c9ae5ca…` [🐞](https://debug.barn.cow.fi/order/0x1c9ae5cac23d7f5a4c30813c979850f97455f2564ac08a81883aa41ec3de27d8) |
| 12:06:11 | 74 | PAID → SOL (native) | Executed | `0xfd162422…` [🐞](https://debug.barn.cow.fi/order/0xfd162422fcaf7d00602a461c2966f69829798ee79112c2e9f203503a8f4d396d) |
| 12:06:12 | 75 | USDG → SOL (native) | Executed | `0xbe1a2808…` [🐞](https://debug.barn.cow.fi/order/0xbe1a280824d4fc5d8e466fae0df213e6955231a84371a61bb6bc946b9da65715) |
| 12:06:14 | 76 | PUMP → SOL (native) | Executed | `0x254e59b5…` [🐞](https://debug.barn.cow.fi/order/0x254e59b541c4dd45191d2ed39d750fa9208b39a8f78db701bb99cd42111a4a33) |
| 12:06:15 | 78 | CASH → SOL (native) | Executed | `0x2117cd16…` [🐞](https://debug.barn.cow.fi/order/0x2117cd16262cf798c4b7d2844a2358885ff4e2091fb92161711851411d24bae4) |
| 12:06:15 | 79 | CRCLx → SOL (native) | Executed | `0x36aa37ab…` [🐞](https://debug.barn.cow.fi/order/0x36aa37ab8af8a8d39ab7d999653fe7e644e5adcd6365510d6037272166b4a7b8) |
| 12:06:16 | 80 | SPYx → SOL (native) | Executed | `0x39808495…` [🐞](https://debug.barn.cow.fi/order/0x39808495ab674b04cf6db2f9eb8ef6fbf0ff2aaf7b26f08061d4fe4275cadc91) |
| 12:06:17 | 81 | USDv → SOL (native) | Executed | `0x094d18d0…` [🐞](https://debug.barn.cow.fi/order/0x094d18d0be0a5327c4fb49a9da16dd7acb34ee52706084250e2f9d6c389fda09) |
| 12:06:18 | 82 | SKHY → SOL (native) | Executed | `0xefeb4f2a…` [🐞](https://debug.barn.cow.fi/order/0xefeb4f2a651a3274a8b9ab03df05ed94a34381376bbe32831a3ad3d77a992938) |
| 12:06:20 | 83 | NVDAx → SOL (native) | Executed | `0x34b5173d…` [🐞](https://debug.barn.cow.fi/order/0x34b5173d6cd9e785dab0b83c8e887e87ca2a4385416370d5cb4796a5c2efb258) |
| 12:06:22 | 83 | SPCXx → SOL (native) | Executed | `0x0c956b7c…` [🐞](https://debug.barn.cow.fi/order/0x0c956b7c3d9934682e3e949e3ddf8211e0ee7b9537f17a4a4649a7d3e53339e3) |
| 12:06:23 | 73 | ANSEM → SOL (native) | Executed | `0xdf457bac…` [🐞](https://debug.barn.cow.fi/order/0xdf457bacf8f16ddb7587facb3422a5d194861a7278ad435e9cf92eafa9051e78) |
| 12:06:42 | 84 | MU → SOL (native) | Executed | `0x097a8f3e…` [🐞](https://debug.barn.cow.fi/order/0x097a8f3ebd3a31e0b4e4e3aef621cdce25e07a23d53efa11cc2041308b71e55a) |
| 12:06:44 | 85 | SPCX → SOL (native) | Executed | `0xa8ae54b7…` [🐞](https://debug.barn.cow.fi/order/0xa8ae54b7556e5dd1388c3d8479980ffcee00f3d7db15e3c5fa4140a1b64a9c7b) |
| 12:06:47 | 86 | SPCXx → SOL (native) | Executed | `0x9ae8078b…` [🐞](https://debug.barn.cow.fi/order/0x9ae8078b36227e68fa4afaf9c25f1f06304d8e5a3225b5724a650cb1949914f0) |
| 12:06:49 | 88 | Bonk → SOL (native) | Executed | `0x2853e2ce…` [🐞](https://debug.barn.cow.fi/order/0x2853e2ce28fed754d8823b9e8e4eedd04fc978fb3d0eb6c54fb08485038095da) |
| 12:06:50 | 87 | TSLAx → SOL (native) | Executed | `0x426c6085…` [🐞](https://debug.barn.cow.fi/order/0x426c60858b0c4ff48d71a238473531b53ca254a1350bb9710e3149fc58759000) |
| 12:06:51 | 90 | POPCAT → SOL (native) | Executed | `0xa49b2bcb…` [🐞](https://debug.barn.cow.fi/order/0xa49b2bcbcfac73ae37280337ad8762000ef157ce0df58882c04ec07cd55832f6) |
| 12:06:53 | 89 | $WIF → SOL (native) | Executed | `0xd5215824…` [🐞](https://debug.barn.cow.fi/order/0xd52158240d160f5c8ec42ffab619cfdaef14bb4ec34b694289b3df11871e266d) |
| 12:06:54 | 91 | JitoSOL → SOL (native) | Executed | `0x932358ec…` [🐞](https://debug.barn.cow.fi/order/0x932358ecb38c00727d0a73910c0e071667880d9096ea6b5d4a9e3e86f0e6d3cd) |
| 12:06:54 | 92 | mSOL → SOL (native) | Executed | `0xbee8e2a0…` [🐞](https://debug.barn.cow.fi/order/0xbee8e2a06130dc7aea8392948352efd78c2a7d1ffd91a2b7ad2a669e02595aef) |
| 12:06:56 | 93 | JupSOL → SOL (native) | Executed | `0x7fd09374…` [🐞](https://debug.barn.cow.fi/order/0x7fd0937410b18eb818a0e09fb85cf1a989008907ce6c15e74c0422fd3baba24f) |
| 12:07:17 | 94 | cbBTC → SOL (native) | Executed | `0x65f35d0e…` [🐞](https://debug.barn.cow.fi/order/0x65f35d0ec2c4b7a219410e5dbb75d99b9292c28eef3f6e02538a366dfd055277) |
| 12:07:26 | 96 | EURC → SOL (native) | Executed | `0x1cae484e…` [🐞](https://debug.barn.cow.fi/order/0x1cae484e4fafd702cc9e3ae8da4bc582e93463c1df1643a498dda27cf5c4c4be) |
| 12:07:26 | 95 | USDe → SOL (native) | Executed | `0x24f75bfe…` [🐞](https://debug.barn.cow.fi/order/0x24f75bfee98702c9d963fb1b9a3972c87cb27d2cd17c67b6b13240bbc7b65f99) |
| 12:07:33 | 97 | USDY → SOL (native) | Executed | `0xb7fd0b4b…` [🐞](https://debug.barn.cow.fi/order/0xb7fd0b4bdb5bbfbe140858b7fff31fb9240fb218360e47041b54eee15d664383) |
| 12:07:38 | 98 | JLP → SOL (native) | Executed | `0x1bd19442…` [🐞](https://debug.barn.cow.fi/order/0x1bd19442afa43dccfa53caf46dd40850a586bcfaac8f4e00e8e535666eb75cfb) |
| 12:07:38 | 100 | ETH → SOL (native) | Executed | `0x6189b7ba…` [🐞](https://debug.barn.cow.fi/order/0x6189b7ba3194482287e5c7ce650edb5a3aef26b3a3cdbae5165925b62ae06855) |
| 12:07:38 | 99 | INF → SOL (native) | Executed | `0x56c50fd0…` [🐞](https://debug.barn.cow.fi/order/0x56c50fd0a526c66ca49fbf992d8a80a500a93e03fe741d964a87d74e10021d47) |
| 12:07:40 | 101 | BNB → SOL (native) | Executed | `0x02b631df…` [🐞](https://debug.barn.cow.fi/order/0x02b631dfea0cac36c34bade41991b44aefb208073ffac07ce2d7a945f20e524d) |
| 12:07:46 | 102 | XAUt0 → SOL (native) | Executed | `0x87c50ea7…` [🐞](https://debug.barn.cow.fi/order/0x87c50ea7f12f3d7006d6f0d8752833ac0d3b0d8c972bbebc9a473157bdb3dde5) |
| 12:07:54 | 103 | GLDx → SOL (native) | Executed | `0x9bf0fd25…` [🐞](https://debug.barn.cow.fi/order/0x9bf0fd25ce750061c3105134231cbd2b396ec51531fc1a586e20297ad69800cb) |
| 12:08:08 | 105 | Fartcoin → SOL (native) | Executed | `0x86cdd95d…` [🐞](https://debug.barn.cow.fi/order/0x86cdd95dc920eea30bb87da69bc7a809e68a558b25b5565057298f099f6520b3) |
| 12:08:09 | 104 | EUROP → SOL (native) | Executed | `0xc409510e…` [🐞](https://debug.barn.cow.fi/order/0xc409510ef3243a4a2e329e81d19a11761854827b6acdad9e0d3f2a1ec87fb8c2) |
| 12:08:15 | 107 | BOME → SOL (native) | Executed | `0xc7235bbc…` [🐞](https://debug.barn.cow.fi/order/0xc7235bbc4156e3f1c9794cce724e77e52ae404688c6b0cbeb738ad75e7a6097e) |
| 12:08:17 | 106 | MEW → SOL (native) | Executed | `0xf170c336…` [🐞](https://debug.barn.cow.fi/order/0xf170c336464f10971dcbd4d926c16f8d348f6ce5fba7fb0379528fa42ae709cd) |
| 12:08:18 | 108 | hyloSOL → SOL (native) | Executed | `0xf2c4a452…` [🐞](https://debug.barn.cow.fi/order/0xf2c4a4529eefd1d24a1037b1d73ff6af08488b3407967e378df361151ff68b70) |
| 12:08:24 | 109 | PSOL → SOL (native) | Executed | `0x340222c2…` [🐞](https://debug.barn.cow.fi/order/0x340222c20d7a2af311168af04e60de9bb8636d329c83ca19a0d87eddfb381e15) |
| 12:08:51 | 1 | USDC → SOL (native) | Executed | `0xe6ed1fec…` [🐞](https://debug.barn.cow.fi/order/0xe6ed1fec70a8b8a15a46f815e3756a0f543b14ddb1a7c9e7dff0a0ff8ec1e742) |
| 12:09:13 | 16 | JUP → SOL (native) | Executed | `0xf55588ac…` [🐞](https://debug.barn.cow.fi/order/0xf55588ac1c0c4db180e1b49b938ba1e0284c4c51d6635a9dc415c4078a09d6d0) |
| 12:09:13 | 19 | JUP → SOL (native) | Executed | `0x1e827a34…` [🐞](https://debug.barn.cow.fi/order/0x1e827a341be46f202bcb148f7773f9492e8acae956b03dc3ddaa60c765120865) |
| 12:09:14 | 23 | JUP → SOL (native) | Executed | `0x179eee61…` [🐞](https://debug.barn.cow.fi/order/0x179eee611f860b062329f9d0b08babf091db5fe9ab8d5dc0a415d7fbef3ea8a7) |
| 12:09:16 | 24 | JUP → SOL (native) | Executed | `0x2d09276a…` [🐞](https://debug.barn.cow.fi/order/0x2d09276a293107cfdc1a98c4fdd85c2ea6d12a798102753c91d278349e180125) |
| 12:09:43 | 49 | USDC → SOL (native) | Executed | `0xfae744ac…` [🐞](https://debug.barn.cow.fi/order/0xfae744ac6738beee6df13a5d65129397878341301d27c6d484e75458ae869c6a) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 182 | 98.9% |
| expired: never created on-chain (winner found, creation blockhash expired) | 2 | 1.1% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 9s | 19s | 26s | 55s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 883X…8aGz | 182 | 100.0% | 100 | 101,006 | 9s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| kaisersolver | 459 | 208 | 205 | 98.6% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 173 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 167 | 166 | 99.4% |
| market buy | 17 | 16 | 94.1% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 99 | 99 | 100.0% |
| wSOL → JUP | 27 | 27 | 100.0% |
| wSOL → USDG | 9 | 7 | 77.8% |
| USDC → SOL (native) | 4 | 4 | 100.0% |
| USDC → wSOL | 4 | 4 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| wSOL → ANSEM | 2 | 2 | 100.0% |
| wSOL → USDv | 2 | 2 | 100.0% |
| JUP → USDC | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| wSOL → SKHY | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
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
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
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
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 4 | 4 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 4 | 4 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 4 | 4 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 4 | 4 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 3 | 3 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 3 | 3 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 3 | 3 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 3 | 3 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 3 | 3 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 3 | 3 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 3 | 3 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 3 | 3 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 3 | 3 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 3 | 3 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 3 | 3 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 2 | 2 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 2 | 1 | 50.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 2 | 2 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 2 | 2 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 2 | 1 | 50.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 2 | 2 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 2 | 2 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 2 | 2 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 2 | 2 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 2 | 2 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 2 | 2 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 2 | 2 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 2 | 2 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
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
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 1 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 1 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 1 | 1 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 1 | 1 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 1 | 1 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 1 | 1 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 1 | 1 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 1 | 1 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 1 | 1 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 1 | 1 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 1 | 1 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 1 | 1 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 1 | 1 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 1 | 1 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 1 | 1 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 1 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 1 | 1 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 1 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 1 | 1 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 1 | 1 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 1 | 1 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 1 | 1 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 1 | 1 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 1 | 1 | 100.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 1 | 1 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 1 | 1 | 100.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 1 | 1 | 100.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 1 | 1 | 100.0% |
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
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 2 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 11:47:43 | wSOL → USDG | market sell | Winner too late: creation blockhash expired | `0x018f969a…` [🐞](https://debug.barn.cow.fi/order/0x018f969a98b92dfa294e9b6a1267f43638f03ac7eff6822747626dfab69abbea) |
| 11:47:44 | wSOL → USDG | market buy | Winner too late: creation blockhash expired | `0xf953aadd…` [🐞](https://debug.barn.cow.fi/order/0xf953aadd4459fb97f5dbd2ccf2437a1aed7eaa34c8ed7cce88ebda522bd1e074) |
