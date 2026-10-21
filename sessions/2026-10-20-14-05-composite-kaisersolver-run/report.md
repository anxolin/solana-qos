# Solana QoS report: 2026-10-20-14-05-composite-kaisersolver-run

Barn, orders created between `2026-10-20T14:06:08.169Z` and `2026-10-20T14:40:49.771Z`. Data fetched 2026-10-20T14:47:10+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 193 |
| Orders executed | **192** (99.5%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 117 |
| Settlement txs | 115 |

## Scenario results

Target solver: `kaisersolver`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-20T14:06:08.169Z | 2026-10-20T14:06:58.137Z | 6/6 | 0 | 8 | 8 | 100.0% |
| receiving-account-costs | 2026-10-20T14:07:48.083Z | 2026-10-20T14:08:29.016Z | 16/16 | 0 | 16 | 16 | 100.0% |
| native-vs-wrapped-payouts | 2026-10-20T14:09:35.265Z | 2026-10-20T14:11:56.969Z | 11/12 | 1 | 12 | 11 | 91.7% |
| solver-same-direction-25 | 2026-10-20T14:13:28.682Z | 2026-10-20T14:14:22.147Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell | 2026-10-20T14:17:16.349Z | 2026-10-20T14:24:18.574Z | 84/84 | 0 | 84 | 84 | 100.0% |
| solver-token-coverage | 2026-10-20T14:27:37.484Z | 2026-10-20T14:28:10.005Z | 40/52 | 12 | 40 | 40 | 76.9% |
| solver-fresh-accounts | 2026-10-20T14:31:32.676Z | 2026-10-20T14:31:48.188Z | 8/8 | 0 | 8 | 8 | 100.0% |

## Scenario

190 of 203 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 14:06:08 | 1 | 1 | sell 0.005 SOL → USDC | filled | 5s | 1 |  |
| 14:06:08 | 2 | 2 | sell 0.005 SOL → USDT | filled | 6s | 1 |  |
| 14:06:08 | 3 | 3 | sell 0.5 JUP → USDC | filled | 26s | 2 |  |
| 14:06:13 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 7s | 1 |  |
| 14:06:13 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 5s | 1 |  |
| 14:06:34 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 24s | 2 |  |
| 14:07:48 | 7 | 4 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 14:07:48 | 8 | 5 | sell 0.0025 SOL → USDC | filled | 6s | 1 |  |
| 14:07:48 | 9 | 6 | buy 0.25 USDC ← SOL | filled | 27s | 1 |  |
| 14:07:48 | 10 | 7 | buy 0.25 USDC ← SOL | filled | 11s | 1 |  |
| 14:07:48 | 11 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 5s | 1 |  |
| 14:07:48 | 12 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 11s | 1 |  |
| 14:07:48 | 13 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 31s | 1 |  |
| 14:07:48 | 14 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 16s | 1 |  |
| 14:07:55 | 15 | 4 | sell 0.0025 SOL → USDC | filled | 7s | 1 |  |
| 14:07:53 | 16 | 5 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 14:08:15 | 17 | 6 | buy 0.25 USDC ← SOL | filled | 14s | 1 |  |
| 14:07:58 | 18 | 7 | buy 0.25 USDC ← SOL | filled | 8s | 1 |  |
| 14:07:52 | 19 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 7s | 1 |  |
| 14:07:59 | 20 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 14s | 1 |  |
| 14:08:18 | 21 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 10s | 1 |  |
| 14:08:04 | 22 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | filled | 18s | 1 |  |
| 14:09:35 | 23 | 12 | sell 0.005 SOL → USDC | filled | 11s | 1 |  |
| 14:09:35 | 24 | 13 | sell 0.005 SOL → USDC | filled | 10s | 1 |  |
| 14:09:35 | 25 | 14 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 14:09:35 | 26 | 15 | sell 0.005 SOL → USDC | filled | 12s | 1 |  |
| 14:09:45 | 27 | 12 | sell 0.2 USDC → SOL | filled | 61s | 1 |  |
| 14:09:45 | 28 | 13 | sell 0.2 USDC → wSOL | filled | 13s | 1 |  |
| 14:09:44 | 29 | 14 | sell 0.2 USDC → SOL | filled | 5s | 1 |  |
| 14:09:47 | 30 | 15 | sell 0.2 USDC → wSOL | filled | 30s | 1 |  |
| 14:10:46 | 31 | 12 | buy 0.002 SOL ← USDC | failed | 70s | 1 | main timeout |
| 14:09:58 | 32 | 13 | buy 0.002 wSOL ← USDC | filled | 4s | 1 |  |
| 14:09:49 | 33 | 14 | buy 0.002 SOL ← USDC | filled | 5s | 1 |  |
| 14:10:17 | 34 | 15 | buy 0.002 wSOL ← USDC | filled | 5s | 1 |  |
| 14:13:28 | 35 | 16 | sell 0.005 SOL → JUP | filled | 46s | 1 |  |
| 14:13:28 | 36 | 17 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 14:13:28 | 37 | 18 | sell 0.005 SOL → JUP | filled | 40s | 1 |  |
| 14:13:28 | 38 | 19 | sell 0.005 SOL → JUP | filled | 10s | 1 |  |
| 14:13:28 | 39 | 20 | sell 0.005 SOL → JUP | filled | 53s | 1 |  |
| 14:13:28 | 40 | 21 | sell 0.005 SOL → JUP | filled | 46s | 1 |  |
| 14:13:28 | 41 | 22 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 14:13:28 | 42 | 23 | sell 0.005 SOL → JUP | filled | 19s | 1 |  |
| 14:13:28 | 43 | 24 | sell 0.005 SOL → JUP | filled | 26s | 1 |  |
| 14:13:28 | 44 | 25 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 14:13:28 | 45 | 26 | sell 0.005 SOL → JUP | filled | 39s | 1 |  |
| 14:13:28 | 46 | 27 | sell 0.005 SOL → JUP | filled | 39s | 1 |  |
| 14:13:28 | 47 | 28 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 14:13:28 | 48 | 29 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 14:13:28 | 49 | 30 | sell 0.005 SOL → JUP | filled | 24s | 1 |  |
| 14:13:28 | 50 | 31 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 14:13:28 | 51 | 32 | sell 0.005 SOL → JUP | filled | 31s | 1 |  |
| 14:13:28 | 52 | 33 | sell 0.005 SOL → JUP | filled | 47s | 1 |  |
| 14:13:28 | 53 | 34 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 14:13:28 | 54 | 35 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 14:13:28 | 55 | 36 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 14:13:28 | 56 | 37 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 14:13:28 | 57 | 38 | sell 0.005 SOL → JUP | filled | 34s | 1 |  |
| 14:13:28 | 58 | 39 | sell 0.005 SOL → JUP | filled | 18s | 1 |  |
| 14:13:28 | 59 | 40 | sell 0.005 SOL → JUP | filled | 33s | 1 |  |
| 14:17:16 | 60 | 41 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 14:17:16 | 61 | 42 | sell 0.003 SOL → USDC | filled | 6s | 1 |  |
| 14:17:16 | 62 | 43 | sell 0.0035 SOL → USDC | filled | 6s | 1 |  |
| 14:17:16 | 63 | 44 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 14:18:46 | 64 | 41 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 14:18:46 | 65 | 42 | sell 0.003 SOL → USDC | filled | 12s | 1 |  |
| 14:18:46 | 66 | 43 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 14:18:46 | 67 | 44 | sell 0.004 SOL → USDC | filled | 8s | 1 |  |
| 14:18:46 | 68 | 45 | sell 0.0025 SOL → USDC | filled | 17s | 1 |  |
| 14:18:46 | 69 | 46 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 14:18:46 | 70 | 47 | sell 0.0035 SOL → USDC | filled | 8s | 1 |  |
| 14:18:46 | 71 | 48 | sell 0.004 SOL → USDC | filled | 9s | 1 |  |
| 14:20:16 | 72 | 41 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 14:20:16 | 73 | 42 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 14:20:16 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 14:20:16 | 75 | 44 | sell 0.004 SOL → USDC | filled | 6s | 1 |  |
| 14:20:16 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 14:20:16 | 77 | 46 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 14:20:16 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 7s | 1 |  |
| 14:20:16 | 79 | 48 | sell 0.004 SOL → USDC | filled | 7s | 1 |  |
| 14:20:16 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 14:20:16 | 81 | 50 | sell 0.003 SOL → USDC | filled | 17s | 1 |  |
| 14:20:16 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 14:20:16 | 83 | 52 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 14:20:16 | 84 | 53 | sell 0.0025 SOL → USDC | filled | 28s | 1 |  |
| 14:20:16 | 85 | 54 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 14:20:16 | 86 | 55 | sell 0.0035 SOL → USDC | filled | 15s | 1 |  |
| 14:20:16 | 87 | 56 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 14:21:46 | 88 | 41 | sell 0.0025 SOL → USDC | filled | 49s | 1 |  |
| 14:21:46 | 89 | 42 | sell 0.003 SOL → USDC | filled | 36s | 1 |  |
| 14:21:46 | 90 | 43 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 14:21:46 | 91 | 44 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 14:21:46 | 92 | 45 | sell 0.0025 SOL → USDC | filled | 43s | 1 |  |
| 14:21:46 | 93 | 46 | sell 0.003 SOL → USDC | filled | 36s | 1 |  |
| 14:21:46 | 94 | 47 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 14:21:46 | 95 | 48 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 14:21:46 | 96 | 49 | sell 0.0025 SOL → USDC | filled | 43s | 1 |  |
| 14:21:46 | 97 | 50 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 14:21:46 | 98 | 51 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 14:21:46 | 99 | 52 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 14:21:46 | 100 | 53 | sell 0.0025 SOL → USDC | filled | 48s | 1 |  |
| 14:21:46 | 101 | 54 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 14:21:46 | 102 | 55 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 14:21:46 | 103 | 56 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 14:21:46 | 104 | 57 | sell 0.0025 SOL → USDC | filled | 46s | 1 |  |
| 14:21:46 | 105 | 58 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 14:21:46 | 106 | 59 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 14:21:46 | 107 | 60 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 14:21:46 | 108 | 61 | sell 0.0025 SOL → USDC | filled | 41s | 1 |  |
| 14:21:46 | 109 | 62 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 14:21:46 | 110 | 63 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 14:21:46 | 111 | 64 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 14:23:16 | 112 | 41 | sell 0.0025 SOL → USDC | filled | 53s | 1 |  |
| 14:23:16 | 113 | 42 | sell 0.003 SOL → USDC | filled | 43s | 1 |  |
| 14:23:16 | 114 | 43 | sell 0.0035 SOL → USDC | filled | 31s | 1 |  |
| 14:23:16 | 115 | 44 | sell 0.004 SOL → USDC | filled | 21s | 1 |  |
| 14:23:16 | 116 | 45 | sell 0.0025 SOL → USDC | filled | 53s | 1 |  |
| 14:23:16 | 117 | 46 | sell 0.003 SOL → USDC | filled | 48s | 1 |  |
| 14:23:16 | 118 | 47 | sell 0.0035 SOL → USDC | filled | 32s | 1 |  |
| 14:23:16 | 119 | 48 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 14:23:16 | 120 | 49 | sell 0.0025 SOL → USDC | filled | 53s | 1 |  |
| 14:23:16 | 121 | 50 | sell 0.003 SOL → USDC | filled | 48s | 1 |  |
| 14:23:16 | 122 | 51 | sell 0.0035 SOL → USDC | filled | 33s | 1 |  |
| 14:23:16 | 123 | 52 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 14:23:16 | 124 | 53 | sell 0.0025 SOL → USDC | filled | 56s | 1 |  |
| 14:23:16 | 125 | 54 | sell 0.003 SOL → USDC | filled | 41s | 1 |  |
| 14:23:16 | 126 | 55 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 14:23:16 | 127 | 56 | sell 0.004 SOL → USDC | filled | 18s | 1 |  |
| 14:23:16 | 128 | 57 | sell 0.0025 SOL → USDC | filled | 62s | 1 |  |
| 14:23:16 | 129 | 58 | sell 0.003 SOL → USDC | filled | 43s | 1 |  |
| 14:23:16 | 130 | 59 | sell 0.0035 SOL → USDC | filled | 38s | 1 |  |
| 14:23:16 | 131 | 60 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 14:23:16 | 132 | 61 | sell 0.0025 SOL → USDC | filled | 62s | 1 |  |
| 14:23:16 | 133 | 62 | sell 0.003 SOL → USDC | filled | 38s | 1 |  |
| 14:23:16 | 134 | 63 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 14:23:16 | 135 | 64 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 14:23:16 | 136 | 65 | sell 0.0025 SOL → USDC | filled | 59s | 1 |  |
| 14:23:16 | 137 | 66 | sell 0.003 SOL → USDC | filled | 48s | 1 |  |
| 14:23:16 | 138 | 67 | sell 0.0035 SOL → USDC | filled | 27s | 1 |  |
| 14:23:16 | 139 | 68 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 14:23:16 | 140 | 69 | sell 0.0025 SOL → USDC | filled | 59s | 1 |  |
| 14:23:16 | 141 | 70 | sell 0.003 SOL → USDC | filled | 37s | 1 |  |
| 14:23:16 | 142 | 71 | sell 0.0035 SOL → USDC | filled | 21s | 1 |  |
| 14:23:16 | 143 | 72 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 14:27:37 | 144 | 73 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 15s | 1 |  |
| 14:27:37 | 145 | 74 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 11s | 1 |  |
| 14:27:37 | 146 | 75 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 15s | 1 |  |
| 14:27:37 | 147 | 76 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 11s | 1 |  |
| 14:27:37 | 148 | 77 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 16s | 1 |  |
| 14:27:37 | 149 | 78 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 16s | 1 |  |
| 14:27:37 | 150 | 79 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 17s | 1 |  |
| 14:27:37 | 151 | 80 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 12s | 1 |  |
| 14:27:37 | 152 | 81 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 17s | 1 |  |
| 14:27:37 | 153 | 82 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 12s | 1 |  |
| 14:27:37 | 154 | 83 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 12s | 1 |  |
| 14:27:37 | 155 | 84 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 12s | 1 |  |
| 14:27:37 | 156 | 85 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 20s | 1 |  |
| 14:27:37 | 157 | 86 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 13s | 1 |  |
| 14:27:37 | 158 | 87 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 14s | 1 |  |
| 14:27:37 | 159 | 88 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 13s | 1 |  |
| 14:27:37 | 160 | 89 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 21s | 1 |  |
| 14:27:37 | 161 | 90 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 23s | 1 |  |
| 14:27:37 | 162 | 91 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 14s | 1 |  |
| 14:27:37 | 163 | 92 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 14s | 1 |  |
| 14:27:37 | 164 | 93 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 15s | 1 |  |
| 14:27:37 | 165 | 94 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 22s | 1 |  |
| 14:27:37 | 166 | 95 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 15s | 1 |  |
| 14:27:37 | 167 | 96 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 22s | 1 |  |
| 14:27:37 | 168 | 97 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 22s | 1 |  |
| 14:27:37 | 169 | 98 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 22s | 1 |  |
| 14:27:37 | 170 | 99 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 23s | 1 |  |
| 14:27:37 | 171 | 100 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 20s | 1 |  |
| 14:27:37 | 172 | 101 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 20s | 1 |  |
| 14:27:37 | 173 | 102 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 21s | 1 |  |
| 14:27:37 | 174 | 103 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 20s | 1 |  |
| 14:27:37 | 175 | 104 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 21s | 1 |  |
| 14:27:37 | 176 | 105 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 22s | 1 |  |
| 14:27:37 | 177 | 106 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 18s | 1 |  |
| 14:27:37 | 178 | 107 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 21s | 1 |  |
| 14:27:37 | 179 | 108 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 21s | 1 |  |
| 14:27:37 | 180 | 109 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 22s | 1 |  |
| 14:27:52 | 181 | 73 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:27:48 | 182 | 74 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 14:27:52 | 183 | 75 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:27:48 | 184 | 76 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | filled | 21s | 1 |  |
| 14:27:53 | 185 | 77 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:27:53 | 186 | 78 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:27:54 | 187 | 79 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:27:49 | 188 | 80 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 11s | 1 |  |
| 14:27:54 | 189 | 81 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 14:27:49 | 190 | 82 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:27:49 | 191 | 83 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | filled | 20s | 1 |  |
| 14:27:49 | 192 | 84 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:27:57 | 193 | 85 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:27:50 | 194 | 86 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:27:51 | 195 | 87 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:31:32 | 196 | 110 | sell 0.1 SOL → USDC | filled | 9s | 1 |  |
| 14:31:32 | 197 | 111 | sell 0.1 SOL → USDC | filled | 8s | 1 |  |
| 14:31:32 | 198 | 112 | buy 10 USDC ← SOL | filled | 10s | 1 |  |
| 14:31:32 | 199 | 113 | buy 10 USDC ← SOL | filled | 15s | 1 |  |
| 14:31:32 | 200 | 114 | sell 0.1 SOL → USDT | filled | 6s | 1 |  |
| 14:31:32 | 201 | 115 | sell 0.1 SOL → USDT | filled | 8s | 1 |  |
| 14:31:32 | 202 | 116 | buy 10 USDT ← SOL | filled | 10s | 1 |  |
| 14:31:32 | 203 | 117 | buy 10 USDT ← SOL | filled | 15s | 1 |  |

### Rows without an order

12 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 10 | SOL → ANSEM, SOL → USDG, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SKHY, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| NoLiquidity | main | 2 | SOL → PAID, SOL → USDv | no route found |

Scenario orders: 193 (191 main, 2 acquire). Cleanup placed 124 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 14:06:59 | 1 | USDC → SOL (native) | Executed | `0xa3751fb5…` [🐞](https://debug.barn.cow.fi/order/0xa3751fb5443c2d5b1a5f46386b9b53a34d2bcb6a1371b80fd9c9b1aa8c9b7efe) |
| 14:07:01 | 2 | USDT → SOL (native) | Executed | `0x57bb55ef…` [🐞](https://debug.barn.cow.fi/order/0x57bb55eff7746def4ea8b73b70ba5474538864d4270a7de949cca98809647afa) |
| 14:07:04 | 3 | USDC → SOL (native) | Executed | `0x99495c65…` [🐞](https://debug.barn.cow.fi/order/0x99495c65190e0c62584a5865af80e9f396cca6b9d8607da8fe8dafcc814ca42a) |
| 14:08:32 | 5 | USDC → SOL (native) | Executed | `0x3bf83a6f…` [🐞](https://debug.barn.cow.fi/order/0x3bf83a6f32e151e2f6b66e33124935f161de0732f9723e08eadc9d961c016601) |
| 14:08:32 | 6 | USDC → SOL (native) | Executed | `0xb5669b60…` [🐞](https://debug.barn.cow.fi/order/0xb5669b602dc96cbfc2d382e949f41f12a04cae486c755b6aac1dfdd22fea8264) |
| 14:08:34 | 7 | USDC → SOL (native) | Executed | `0x6a0d74f1…` [🐞](https://debug.barn.cow.fi/order/0x6a0d74f109aa5eed9fe0b8dc32b43206b728fdc11fa21e4813d69bf3306d8217) |
| 14:08:34 | 8 | USDG → SOL (native) | Executed | `0x7eae48f2…` [🐞](https://debug.barn.cow.fi/order/0x7eae48f26303dd69e118955c1aa0a7000109bd846003142b55f1eae9dbf9c821) |
| 14:08:35 | 9 | USDG → SOL (native) | Executed | `0x287088e4…` [🐞](https://debug.barn.cow.fi/order/0x287088e44dc50ea5e23ecdfbe80aaa1e834a071b861b769d74453a2c110340d1) |
| 14:08:36 | 10 | USDG → SOL (native) | Executed | `0x364505b1…` [🐞](https://debug.barn.cow.fi/order/0x364505b17ac3f17f090550bdcbea8f177c307b9b378dc9a0b5043501609e58e5) |
| 14:08:37 | 11 | USDG → SOL (native) | Executed | `0xac95124a…` [🐞](https://debug.barn.cow.fi/order/0xac95124af19e87e7365992cdee1b1703921a48f08d8ee5303379089018899d17) |
| 14:08:38 | 4 | USDC → SOL (native) | Executed | `0x73202895…` [🐞](https://debug.barn.cow.fi/order/0x73202895526be5d6b966119119d20607e1a9b94d171eb7ab846a30b9337fe218) |
| 14:12:01 | 14 | USDC → SOL (native) | Executed | `0x7d62527d…` [🐞](https://debug.barn.cow.fi/order/0x7d62527d8e3b837be130efca1de7de93e8a2591871d2e26a946a341183463633) |
| 14:12:02 | 12 | USDC → SOL (native) | Executed | `0x0f89cdc8…` [🐞](https://debug.barn.cow.fi/order/0x0f89cdc80135b18aaa62a1767cf4e46c40ce055cf5843773ac6572fec51b9b0a) |
| 14:14:24 | 17 | JUP → SOL (native) | Executed | `0xe9569691…` [🐞](https://debug.barn.cow.fi/order/0xe9569691ab85e76b3d25bdae2dfbcfe9e05a4e3d345ab7928101c70fbd6d2eb4) |
| 14:14:27 | 19 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe649b977…` [🐞](https://debug.barn.cow.fi/order/0xe649b977dbd24373b517e9daeda8bca565355f9c051eab6f58bf5ef7ac44935b) |
| 14:14:27 | 20 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe2a33e7e…` [🐞](https://debug.barn.cow.fi/order/0xe2a33e7e6ed1b81b2ca67cecc85501a7c7065543f42a28911140ca0376c64345) |
| 14:14:28 | 18 | JUP → SOL (native) | Executed | `0x7dc07eb1…` [🐞](https://debug.barn.cow.fi/order/0x7dc07eb11a8c1507dd3feea2119c79d543fd628f87857e8d9c20cf0008a52b62) |
| 14:14:29 | 21 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd216d785…` [🐞](https://debug.barn.cow.fi/order/0xd216d785c60c3d6bd895d739a8eb83646f33e1c742763b8b77cd03d5139184e6) |
| 14:14:29 | 22 | JUP → SOL (native) | Executed | `0x39dad8a8…` [🐞](https://debug.barn.cow.fi/order/0x39dad8a8a101d5ed02c68cd97721476f5d7e7d943db80d3a0428442aff0b3421) |
| 14:14:31 | 23 | JUP → SOL (native) | Executed | `0x8ba38425…` [🐞](https://debug.barn.cow.fi/order/0x8ba38425eed7178c0e5bf8f442b6eaa46da0ee8d7cb50c3b6a9a438d6ab3ed72) |
| 14:14:33 | 24 | JUP → SOL (native) | Executed | `0xa615b299…` [🐞](https://debug.barn.cow.fi/order/0xa615b2991449ff6788a73924ec1f07e6fe05e4b8fc2e855544f22c0175a1a0b2) |
| 14:14:35 | 25 | JUP → SOL (native) | Executed | `0x77f849bd…` [🐞](https://debug.barn.cow.fi/order/0x77f849bd7f7c3959abf63fea330c8da3978a470d2b35418f986c2948fabeac4f) |
| 14:14:37 | 16 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2856c74b…` [🐞](https://debug.barn.cow.fi/order/0x2856c74b44798b68e6421e7fc3a8c894319253fd4d6a50dd5634b28399a43271) |
| 14:14:47 | 26 | JUP → SOL (native) | Executed | `0xeb027425…` [🐞](https://debug.barn.cow.fi/order/0xeb027425f96306e5f54a486af2225fe5f5ecbcf3ba8a0d3e46186a5f90ab0846) |
| 14:14:48 | 27 | JUP → SOL (native) | Executed | `0x77d3f34e…` [🐞](https://debug.barn.cow.fi/order/0x77d3f34ec88222a7547a52cd165f4551b31258400e408d27d25759fa3006db53) |
| 14:14:55 | 28 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2db23601…` [🐞](https://debug.barn.cow.fi/order/0x2db236010c5090b40b03b25f7dfe161471cb06d7bdae1d6dcb474a0bb2004a64) |
| 14:15:00 | 29 | JUP → SOL (native) | Executed | `0x3353932b…` [🐞](https://debug.barn.cow.fi/order/0x3353932b218635b905fc93a0c5658c7c5ab9264c10b02bba075366ec469910e3) |
| 14:15:18 | 30 | JUP → SOL (native) | Executed | `0x33be4716…` [🐞](https://debug.barn.cow.fi/order/0x33be47165eccef7dad4c7e5e2554fe6ba0d00ac8dc710161f4d86c6b6d2885e4) |
| 14:15:38 | 31 | JUP → SOL (native) | Executed | `0xc7f1bb3f…` [🐞](https://debug.barn.cow.fi/order/0xc7f1bb3fd9c4016ca7125702149ef70f5938a5c11482f2eed69709d37c7f3c3c) |
| 14:15:50 | 32 | JUP → SOL (native) | Executed | `0x8600e62c…` [🐞](https://debug.barn.cow.fi/order/0x8600e62ca64e50cbe6cff80f212b0d11a1cb11050f733441a6dc59affda78da0) |
| 14:15:55 | 33 | JUP → SOL (native) | Executed | `0xb5b10349…` [🐞](https://debug.barn.cow.fi/order/0xb5b103499a55c520a7018b197b4e26931616ef2f5881683115a70bb5e641860d) |
| 14:15:58 | 35 | JUP → SOL (native) | Executed | `0xa9a147c4…` [🐞](https://debug.barn.cow.fi/order/0xa9a147c40a9cb3c4e6d3a6c0aaa9a4895276022b70811dfa2232b47e0e99e78c) |
| 14:15:59 | 36 | JUP → SOL (native) | Executed | `0x88e2b889…` [🐞](https://debug.barn.cow.fi/order/0x88e2b88978e5fd20fe3879935460b4d0775aac6b2677ed68ae68e10ce44d61b4) |
| 14:16:03 | 34 | JUP → SOL (native) | Executed | `0x23807792…` [🐞](https://debug.barn.cow.fi/order/0x238077921587bcae20e4584f13d79cec13628da42f975e14fcac9cfb81d1f5a3) |
| 14:16:06 | 37 | JUP → SOL (native) | Executed | `0xb0bd1376…` [🐞](https://debug.barn.cow.fi/order/0xb0bd137641983627f488ec729651244e66ceb38d2d392ce54d34f184e93101ac) |
| 14:16:15 | 40 | JUP → SOL (native) | Executed | `0x386f02ba…` [🐞](https://debug.barn.cow.fi/order/0x386f02ba4ffadaf6c6f8676d74c4dc5d9821f2fbf5f6803701e0f97124d8d184) |
| 14:16:15 | 38 | JUP → SOL (native) | Executed | `0x4398d97c…` [🐞](https://debug.barn.cow.fi/order/0x4398d97c8ba689263ab58aab007648f43532c7898f28d9e37181650919d8af4c) |
| 14:16:16 | 39 | JUP → SOL (native) | Executed | `0xbcf8b115…` [🐞](https://debug.barn.cow.fi/order/0xbcf8b1154df2e05b7e04d8f0ca05448e9c8f14e814389b5202971a24e5797ae8) |
| 14:24:22 | 42 | USDC → SOL (native) | Executed | `0x4380843b…` [🐞](https://debug.barn.cow.fi/order/0x4380843bf1e9bf8439edca57620651c12e1f9b281c2e069257f93de823661ee5) |
| 14:24:22 | 43 | USDC → SOL (native) | Executed | `0x717cd79a…` [🐞](https://debug.barn.cow.fi/order/0x717cd79ae6fba441dbda69f8d055ee18655127c2fd51126783484b0f6a1dfaf7) |
| 14:24:23 | 44 | USDC → SOL (native) | Executed | `0xb0bfa2c0…` [🐞](https://debug.barn.cow.fi/order/0xb0bfa2c0c9449e2fbd90854bd942a998ac9110026b90074f9d11af2d4ee4f3e5) |
| 14:24:24 | 45 | USDC → SOL (native) | Executed | `0xc7bc9631…` [🐞](https://debug.barn.cow.fi/order/0xc7bc96317376be5c0ff0ccdd7783dcbad45b96cb86b5e3f036d29e085ebf90e6) |
| 14:24:25 | 46 | USDC → SOL (native) | Executed | `0x3e6b8e86…` [🐞](https://debug.barn.cow.fi/order/0x3e6b8e86341044e53b3de6eb5b3f136f6155f183b5ce46e0343ad863a61b65e1) |
| 14:24:26 | 47 | USDC → SOL (native) | Executed | `0x2a2c439e…` [🐞](https://debug.barn.cow.fi/order/0x2a2c439e14763bb97113a30d30168cc35348ae8c252f204a0d1ca2cfab8aaa26) |
| 14:24:27 | 48 | USDC → SOL (native) | Executed | `0x1242f126…` [🐞](https://debug.barn.cow.fi/order/0x1242f126edd3ae0e3bb29322b5c5fd4e5fcfb898b6847035fd1e9adfc4bc1b8d) |
| 14:24:30 | 48 | PAXG → SOL (native) | Executed | `0xb3fc0a2a…` [🐞](https://debug.barn.cow.fi/order/0xb3fc0a2a05d7fa649552aca626c5479f3850565721cb63bb617161fd7acd6d41) |
| 14:24:30 | 49 | USDC → SOL (native) | Executed | `0x1d98946d…` [🐞](https://debug.barn.cow.fi/order/0x1d98946dd933d275ec4417442f2ec5f7cf5fb981c35f768860b93f1e07e9fcc2) |
| 14:24:33 | 41 | USDC → SOL (native) | Executed | `0x649b354d…` [🐞](https://debug.barn.cow.fi/order/0x649b354d3c8608759ab493115519df3eeb55ccfc863b42676bf2d8a6bf19f680) |
| 14:24:33 | 50 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4b9009f4…` [🐞](https://debug.barn.cow.fi/order/0x4b9009f46a47cbb677c17e5869a2042135533739d173bccfca57e97cdb493ead) |
| 14:24:39 | 51 | USDC → SOL (native) | Executed | `0x650d8522…` [🐞](https://debug.barn.cow.fi/order/0x650d852255166e3a56656470ac08e2aa9545fc93a78fb430f11a3ef8b7e89c38) |
| 14:24:47 | 52 | USDC → SOL (native) | Executed | `0x6dce29ac…` [🐞](https://debug.barn.cow.fi/order/0x6dce29ac8313a0072425bfc22cd69684099ad0d611b40d410dd342beecff7ffd) |
| 14:24:49 | 53 | USDC → SOL (native) | Executed | `0x5fc0275a…` [🐞](https://debug.barn.cow.fi/order/0x5fc0275a36621b7be08541632bd5e6243701a298ecce025fa599216149291963) |
| 14:24:58 | 54 | USDC → SOL (native) | Executed | `0xedd36ecc…` [🐞](https://debug.barn.cow.fi/order/0xedd36ecc1642a492e263d614f71effe7d7549d37abd0fe861103091633c127a1) |
| 14:25:01 | 55 | USDC → SOL (native) | Executed | `0x884aec62…` [🐞](https://debug.barn.cow.fi/order/0x884aec62ae9d4fb69eee8fd5c45786c98799868540f20e6d413fc0ea000a142f) |
| 14:25:07 | 56 | USDC → SOL (native) | Executed | `0x8171dc42…` [🐞](https://debug.barn.cow.fi/order/0x8171dc42c227e7928bb017f9e6696c13435bac5648cf4aabef23c73129a622bc) |
| 14:25:11 | 57 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xf64b6a41…` [🐞](https://debug.barn.cow.fi/order/0xf64b6a412068d96bc3e5dfc3b9d8a76955c57592cc2108ae689bd41313bb2812) |
| 14:25:19 | 58 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x6bdf333a…` [🐞](https://debug.barn.cow.fi/order/0x6bdf333a7e5143003de58c8a46b4fee8935f2cf0cea496e1757818fb034c3b0e) |
| 14:25:23 | 59 | USDC → SOL (native) | Executed | `0xb757e834…` [🐞](https://debug.barn.cow.fi/order/0xb757e8347ba0357a5f5ece354ba756d464f34c4fc8fa491b63341f1b34e56315) |
| 14:25:28 | 60 | USDC → SOL (native) | Executed | `0x3470fce3…` [🐞](https://debug.barn.cow.fi/order/0x3470fce36443a12d1b45d22e8174a96fe4fccc163555063c1d23df19d746d8b6) |
| 14:25:36 | 61 | USDC → SOL (native) | Executed | `0xfe8fed66…` [🐞](https://debug.barn.cow.fi/order/0xfe8fed660524d0ab4a86661a6327a7929a2d3e2f81be3127d812a4f5cd347917) |
| 14:25:44 | 62 | USDC → SOL (native) | Executed | `0x6baae92a…` [🐞](https://debug.barn.cow.fi/order/0x6baae92a0e659d595810dad7a443be33400fe73d4f3af685d94a585fe6dc5113) |
| 14:25:54 | 63 | USDC → SOL (native) | Executed | `0x6b593d8d…` [🐞](https://debug.barn.cow.fi/order/0x6b593d8d6875d13b09759d25445b42caafb8e40047b8bb4e49010f270d70907d) |
| 14:25:59 | 66 | USDC → SOL (native) | Executed | `0x931117be…` [🐞](https://debug.barn.cow.fi/order/0x931117be267c914b2d56bf83d02501597f096953328513f831fadfb097b4ed4f) |
| 14:26:00 | 65 | USDC → SOL (native) | Executed | `0x053a508c…` [🐞](https://debug.barn.cow.fi/order/0x053a508c5ebad96fe69eae4e1f97bd2164a57b6e03ef159ca29e93c20908473f) |
| 14:26:00 | 64 | USDC → SOL (native) | Executed | `0xb5ad8d03…` [🐞](https://debug.barn.cow.fi/order/0xb5ad8d03e8d2f6b5facc4449edbe2e8aa6a30d046849b426ed863d97ad844820) |
| 14:26:09 | 67 | USDC → SOL (native) | Executed | `0x30db038d…` [🐞](https://debug.barn.cow.fi/order/0x30db038deba9a70aab9e6d858f6c957df4e175331805ea73d663feed3c028612) |
| 14:26:20 | 68 | USDC → SOL (native) | Executed | `0xf6d20076…` [🐞](https://debug.barn.cow.fi/order/0xf6d20076ea22cb2a8c01c44d3b6c352bbb090080d0199e76d35a5a7f4444e519) |
| 14:26:26 | 70 | USDC → SOL (native) | Executed | `0x0cd9fb59…` [🐞](https://debug.barn.cow.fi/order/0x0cd9fb5950eaad3d69c39e5472f067480c487e191e5a94e881f5b93513f6790f) |
| 14:26:27 | 69 | USDC → SOL (native) | Executed | `0x6cb5916c…` [🐞](https://debug.barn.cow.fi/order/0x6cb5916c293155b782af032c8f74f9819a896840fd2ce46a2ceb1582bd5fed00) |
| 14:26:31 | 71 | USDC → SOL (native) | Executed | `0xb08c44e1…` [🐞](https://debug.barn.cow.fi/order/0xb08c44e1078c02b393a6e5cd1cf8790b0f04a79feb8d9a7826a7a916e97d1c69) |
| 14:26:36 | 72 | USDC → SOL (native) | Executed | `0x2c1df492…` [🐞](https://debug.barn.cow.fi/order/0x2c1df492476216b31ff78ae4e57a31a34fec6a3aa0a1b4dd44039f862eca7acd) |
| 14:28:16 | 78 | CASH → SOL (native) | Executed | `0xa196951c…` [🐞](https://debug.barn.cow.fi/order/0xa196951cfd121d4af8472603eb0ab5af89cfda7db41d26dc26c322c423908b2f) |
| 14:28:17 | 79 | CRCLx → SOL (native) | Executed | `0x41b5b92c…` [🐞](https://debug.barn.cow.fi/order/0x41b5b92c416006241cf34168932e1d748188a0732ceb8c52d7a79cdb5ead0a37) |
| 14:28:18 | 80 | SPYx → SOL (native) | Executed | `0x40c5f98b…` [🐞](https://debug.barn.cow.fi/order/0x40c5f98b0a3be690914eb1ac54d96fd9d67e7d9a796f3b20b57e894807f6e9a4) |
| 14:28:19 | 81 | USDv → SOL (native) | Executed | `0xdb2052d0…` [🐞](https://debug.barn.cow.fi/order/0xdb2052d0e33c40187ed8cb43ad683ca93b17bc323c993cf7851c312174fcc6a6) |
| 14:28:20 | 82 | SKHY → SOL (native) | Executed | `0x6ae7397f…` [🐞](https://debug.barn.cow.fi/order/0x6ae7397f8d8b4699ca71eac448ffa6dbc6333a07076797fe6ec89567e4888ace) |
| 14:28:21 | 73 | ANSEM → SOL (native) | Executed | `0x2b19c584…` [🐞](https://debug.barn.cow.fi/order/0x2b19c58478eb78659b56ea59ee8bf60aef6369aac8b883a789ba4bd637f7816a) |
| 14:28:23 | 74 | PAID → SOL (native) | Executed | `0xca32b9d6…` [🐞](https://debug.barn.cow.fi/order/0xca32b9d68333d3620cce1b48c0e851e77857bb9f9a047056181d90ab217483bc) |
| 14:28:23 | 75 | USDG → SOL (native) | Executed | `0xde6a1434…` [🐞](https://debug.barn.cow.fi/order/0xde6a1434bed34ddba55a33ac4797c0affc680a748b11bc1b6a265bf2d6f05af6) |
| 14:28:25 | 76 | PUMP → SOL (native) | Executed | `0xac1406cf…` [🐞](https://debug.barn.cow.fi/order/0xac1406cf9f14e2ee753c5b4bb9bd5a605c02d690f3e4b9c6d4559fc8336d862b) |
| 14:28:27 | 77 | PYUSD → SOL (native) | Executed | `0x218b8da2…` [🐞](https://debug.barn.cow.fi/order/0x218b8da2b6aeb8e04971f3ae88b697481963da8f683b45efb8e849e4c2fee317) |
| 14:28:43 | 83 | NVDAx → SOL (native) | Executed | `0xe3de1f9f…` [🐞](https://debug.barn.cow.fi/order/0xe3de1f9f17a0338bb80be8b02a5b24fc32b92845c2001d9f6a3d1359d514984c) |
| 14:28:45 | 84 | MU → SOL (native) | Executed | `0xa7c90dea…` [🐞](https://debug.barn.cow.fi/order/0xa7c90dea8c6020187cdefc653e5abe7fe62305f0850e6916e823a9e6b5def692) |
| 14:28:47 | 85 | SPCX → SOL (native) | Executed | `0x8a940a46…` [🐞](https://debug.barn.cow.fi/order/0x8a940a466342269c526c1ed0dd058004b2e7268b215282a4f9285f237aaffb05) |
| 14:28:49 | 86 | SPCXx → SOL (native) | Executed | `0xd915a181…` [🐞](https://debug.barn.cow.fi/order/0xd915a181a46a23ec1d6396f58a5932cb5b2638bd2b7aa512ccbe999f924a4877) |
| 14:28:53 | 89 | $WIF → SOL (native) | Executed | `0x4ea266a4…` [🐞](https://debug.barn.cow.fi/order/0x4ea266a4320d6e972fb20f1c218ef04338bd80c4fdd2da2616a992bb34015d8a) |
| 14:28:53 | 87 | TSLAx → SOL (native) | Executed | `0x5d09a613…` [🐞](https://debug.barn.cow.fi/order/0x5d09a613b277686025fa7104714ee384a821f4b70785a568cf054f72f51b7718) |
| 14:28:54 | 88 | Bonk → SOL (native) | Executed | `0xb3b3e9b1…` [🐞](https://debug.barn.cow.fi/order/0xb3b3e9b131943da91aa3dca10d7fd16cd6438f29fa9f97e5fb640db918cd6f4d) |
| 14:28:56 | 90 | POPCAT → SOL (native) | Executed | `0xd4727a6b…` [🐞](https://debug.barn.cow.fi/order/0xd4727a6bba3379c9d7d5c00b092d80f2554747e82159ced98f3c7785cd73c04e) |
| 14:28:56 | 91 | JitoSOL → SOL (native) | Executed | `0x1e52143c…` [🐞](https://debug.barn.cow.fi/order/0x1e52143cc1c44d31a92f84b91bf9b648a5f2ed9fad0796384cf1f82efd7d4e68) |
| 14:29:13 | 92 | mSOL → SOL (native) | Executed | `0x202c7707…` [🐞](https://debug.barn.cow.fi/order/0x202c77076e56ed0721b59905a89ace414869cd83cc206897ba6bb9c5c2185b0e) |
| 14:29:23 | 94 | cbBTC → SOL (native) | Executed | `0x0da3687e…` [🐞](https://debug.barn.cow.fi/order/0x0da3687eb31cce5152935408bb275cfea1438fd159343da8ea51fcc674278635) |
| 14:29:26 | 93 | JupSOL → SOL (native) | Executed | `0xf8302bfa…` [🐞](https://debug.barn.cow.fi/order/0xf8302bfaf35ff5c4b3e18024820c87345339060ccd44fd153fae959c7eed3767) |
| 14:29:26 | 95 | USDe → SOL (native) | Executed | `0x10cddccc…` [🐞](https://debug.barn.cow.fi/order/0x10cddccc5ea60751fb66f52ff30c67a12079875231156a47f62d3fb0fbed0c42) |
| 14:29:30 | 98 | JLP → SOL (native) | Executed | `0xc4117e60…` [🐞](https://debug.barn.cow.fi/order/0xc4117e60e4feeac5b79512196f8e6130c96f429ff0d6b65dfd5474db833bb523) |
| 14:29:31 | 99 | INF → SOL (native) | Executed | `0xa64a595a…` [🐞](https://debug.barn.cow.fi/order/0xa64a595acd83683b6907e70c6cdce02a3b2220138f9b91a71c8b742733cab4cd) |
| 14:29:35 | 96 | EURC → SOL (native) | Executed | `0x856defc4…` [🐞](https://debug.barn.cow.fi/order/0x856defc4e67e2446ea5ac7916f42c5e9dd1c2542b09deb11c5a43536f232f06f) |
| 14:29:36 | 100 | ETH → SOL (native) | Executed | `0x82cd4640…` [🐞](https://debug.barn.cow.fi/order/0x82cd464083b58bb8bc0c763f18c7a300cb469bd5e03d302c2d60c1e90760842d) |
| 14:29:37 | 101 | BNB → SOL (native) | Executed | `0x4c41c434…` [🐞](https://debug.barn.cow.fi/order/0x4c41c434a3f0a4690e7b988702525bd573d6ff0d3d5b636019a71bfb46f61fda) |
| 14:29:37 | 97 | USDY → SOL (native) | Executed | `0x36919f51…` [🐞](https://debug.barn.cow.fi/order/0x36919f5121c29db1c20761e15c07360f4829a186c438b0262bc2dcf9239877e2) |
| 14:29:52 | 102 | XAUt0 → SOL (native) | Executed | `0xab618336…` [🐞](https://debug.barn.cow.fi/order/0xab618336b2da076de3646142fa3f1cba4a7503a97bf8aa0cde0bce75f63da86f) |
| 14:29:55 | 105 | Fartcoin → SOL (native) | Executed | `0x0e32df18…` [🐞](https://debug.barn.cow.fi/order/0x0e32df18680c59a3bf51c248b6141c4e1e7f1e248bdcafb0eebe648ba1cd5a7f) |
| 14:30:04 | 107 | BOME → SOL (native) | Executed | `0x90c647fe…` [🐞](https://debug.barn.cow.fi/order/0x90c647fea279e55d9797016979eb9e07ae734ed6d360fe864cc62edd7e6e2f59) |
| 14:30:06 | 106 | MEW → SOL (native) | Executed | `0x2eaef34e…` [🐞](https://debug.barn.cow.fi/order/0x2eaef34e732ed62f3f4a4d14f7bd3fc4df82a192326c97b9158c6e55c9abb6de) |
| 14:30:06 | 103 | GLDx → SOL (native) | Executed | `0xfc75da77…` [🐞](https://debug.barn.cow.fi/order/0xfc75da77c0660f945c27c9bfff49c3debd3c8eaa4e2dbb983c015c4b9ff0360a) |
| 14:30:07 | 104 | EUROP → SOL (native) | Executed | `0xee6bb89f…` [🐞](https://debug.barn.cow.fi/order/0xee6bb89f9e0d71c0bdf8d278ed35a4c7559202101cb3a82c7fce38c4c6dbf011) |
| 14:30:11 | 108 | hyloSOL → SOL (native) | Executed | `0x55cd6892…` [🐞](https://debug.barn.cow.fi/order/0x55cd6892db02f18997860da8a44a76c322e810f2bc16940723ecb541f9661476) |
| 14:30:12 | 109 | PSOL → SOL (native) | Executed | `0x02a82394…` [🐞](https://debug.barn.cow.fi/order/0x02a82394acc3d858beebe0b5153b3b157eff9957fcfc8e6a4449d7c05ab695fb) |
| 14:31:49 | 110 | USDC → SOL (native) | Executed | `0xe70398f0…` [🐞](https://debug.barn.cow.fi/order/0xe70398f0a23cd8fbbcf031cf067166a60acfa793f06694492aeb36ce799b581d) |
| 14:31:50 | 111 | USDC → SOL (native) | Executed | `0xaa636f98…` [🐞](https://debug.barn.cow.fi/order/0xaa636f9845ec256f9eea80f5ca3b553d8e847d01814034c428b274b7dcbfab98) |
| 14:31:52 | 112 | USDC → SOL (native) | Executed | `0xb0b3db2f…` [🐞](https://debug.barn.cow.fi/order/0xb0b3db2fd17103de4b9279aa2602b0ffc312dbc07847dbd0bf7ad8ae48615b98) |
| 14:31:53 | 113 | USDC → SOL (native) | Executed | `0x53855895…` [🐞](https://debug.barn.cow.fi/order/0x53855895c324ebda4e42df47d7583487c65fa08003ea11bfd0003cb9c058ee96) |
| 14:31:53 | 114 | USDT → SOL (native) | Executed | `0xaeb6076d…` [🐞](https://debug.barn.cow.fi/order/0xaeb6076d254d58c639762810bae1b9f618f764209a22cf75461b62d939c0f1f8) |
| 14:31:54 | 115 | USDT → SOL (native) | Executed | `0xdf81c19a…` [🐞](https://debug.barn.cow.fi/order/0xdf81c19abff5be43bb67ecadbb2174117f71a0bdfb6bf0442be84f38d3a685ff) |
| 14:31:55 | 116 | USDT → SOL (native) | Executed | `0x0d8213e3…` [🐞](https://debug.barn.cow.fi/order/0x0d8213e3b738355da46bb433ec5555698ce442fd4448567b831b8ffefb56c198) |
| 14:31:57 | 117 | USDT → SOL (native) | Executed | `0x8a8f696a…` [🐞](https://debug.barn.cow.fi/order/0x8a8f696a69a90c053e1b29b873ba2071a7603657d435bc235556a228cc0778e8) |
| 14:35:55 | 16 | JUP → SOL (native) | Executed | `0x426bd719…` [🐞](https://debug.barn.cow.fi/order/0x426bd7190e7abbb7a0d5093c649eea3372c8e19e2c3fc5ae92d81cf771c165cc) |
| 14:35:56 | 19 | JUP → SOL (native) | Executed | `0x9fdd3f6b…` [🐞](https://debug.barn.cow.fi/order/0x9fdd3f6bf6456959c13e2168419ebc95c0bdf448465d46e5bfa243a5e4395ddb) |
| 14:35:57 | 20 | JUP → SOL (native) | Executed | `0x52d2f883…` [🐞](https://debug.barn.cow.fi/order/0x52d2f883e44ed983d10daa10eea59028f0d2b6508c80d35797db2529e368c3a4) |
| 14:35:58 | 21 | JUP → SOL (native) | Executed | `0xeea0e5a1…` [🐞](https://debug.barn.cow.fi/order/0xeea0e5a1e8f210cd2c1101353034a37e1ae7048b488a1bfdc9412a17ba6d2a7b) |
| 14:36:01 | 28 | JUP → SOL (native) | Executed | `0xa77a38f5…` [🐞](https://debug.barn.cow.fi/order/0xa77a38f5ded5518f379f2b4881e09bbc6e13cfd086ca9a876c2017907c810744) |
| 14:37:01 | 50 | USDC → SOL (native) | Executed | `0x6358082b…` [🐞](https://debug.barn.cow.fi/order/0x6358082b06cace22db5f9a89d3a913ada96d48626095d0672f1a8ae45fae0362) |
| 14:37:02 | 57 | USDC → SOL (native) | Executed | `0x4bf85b40…` [🐞](https://debug.barn.cow.fi/order/0x4bf85b402ea1500a36519a74b4c4281c9f9a63ae67bf32d7e5866398a7eb2a68) |
| 14:37:05 | 58 | USDC → SOL (native) | Executed | `0x3bcb499b…` [🐞](https://debug.barn.cow.fi/order/0x3bcb499be8ac4cb5cdfa89f4e01bcf051756322bf583c341d80806b823643bed) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 192 | 99.5% |
| cancelled | 1 | 0.5% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 9s | 19s | 33s | 59s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 883X…8aGz | 192 | 100.0% | 115 | 99,306 | 9s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| kaisersolver | 521 | 246 | 231 | 93.9% | 3 | 25 | 1 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| kaisersolver: SimulationFailed | 3 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 405 times
- Orders filtered for `in_flight`: 74 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 171 | 171 | 100.0% |
| market buy | 22 | 21 | 95.5% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 102 | 102 | 100.0% |
| wSOL → JUP | 27 | 27 | 100.0% |
| wSOL → USDG | 9 | 9 | 100.0% |
| wSOL → USDT | 6 | 6 | 100.0% |
| USDC → SOL (native) | 4 | 3 | 75.0% |
| USDC → wSOL | 4 | 4 | 100.0% |
| JUP → USDC | 2 | 2 | 100.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → PUMP | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| wSOL → USDv | 1 | 1 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → SKHY | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 5 | 5 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 5 | 5 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 5 | 5 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 5 | 5 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 4 | 4 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 4 | 4 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 4 | 4 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 4 | 4 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 4 | 4 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 3 | 3 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 3 | 2 | 66.7% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 3 | 3 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 3 | 3 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 3 | 3 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 3 | 3 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 3 | 3 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 3 | 3 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 3 | 3 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 3 | 3 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 3 | 3 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 3 | 3 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 2 | 2 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 2 | 2 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 2 | 2 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 2 | 2 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 2 | 2 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 2 | 2 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 2 | 2 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 2 | 2 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 2 | 2 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 2 | 2 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 2 | 2 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 2 | 2 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 2 | 2 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 2 | 2 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `5FuJHeRv5i2Kbh9Z7u5QecyPZsH2NVr1ZtYkWfWGyKDc` | 2 | 2 | 100.0% |
| `Bqay3sSGAh4u3VDKUcorzBQyJwy4VsGFMTqJcf1UkRJk` | 2 | 2 | 100.0% |
| `2Mp4ky2h8kUUZsUHMs3uzusbTuj1rKpWFfCwdorP9Qvr` | 2 | 2 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 1 | 1 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 1 | 1 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 1 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 1 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 1 | 1 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 1 | 1 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 1 | 1 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 1 | 1 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 1 | 1 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 1 | 1 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 1 | 1 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 1 | 1 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 1 | 1 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 1 | 1 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 1 | 1 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 1 | 100.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 1 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 1 | 1 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 1 | 1 | 100.0% |
| `4NDCuZeuEDhuhFVjhY5Ko75ExFjqbieop6dJS9HieF6S` | 1 | 1 | 100.0% |
| `86T8JteC1sKQfhkDn1EvXMdHkbsNQyMjih3ChpCx4Q4g` | 1 | 1 | 100.0% |
| `845UahWabaJMr6cBcC2srErFt4Vu1NcZk5KWZeBz1w7P` | 1 | 1 | 100.0% |
| `EkootBUnmtzdfFYiMM59fpf9MKtGFRgafvkgNfQeHpnW` | 1 | 1 | 100.0% |
| `5tNJb3BQQdgah3Lm6EB6HHC8nfWSEqA2szi9KPJ2bwzC` | 1 | 1 | 100.0% |
| `EtGN2Mqwk7WUFehuPEvsDByCS4JjmKFQcqkNo9YzTHHc` | 1 | 1 | 100.0% |
| `EXU2SGW1DUn3q4rd5mbrFL8g6heFnmRbAJGBTgDd4DZe` | 1 | 1 | 100.0% |
| `Av12d8PQks5VCGRfr4JNqgx2jMpZ2aajiiDV7u2XgpKg` | 1 | 1 | 100.0% |
| `Hxy31qAX8gG1taC8axB1LJRm2ey2AebiYT9sZHVxroht` | 1 | 1 | 100.0% |
| `5uZT1qn1Vo18KrcFmYLXfoxWTjiifDtnvADkbR1gW85c` | 1 | 1 | 100.0% |
| `EhFi9WmaNiwuFk6Y9DvQTT1AM2737kLWxMGrxo3fdXRp` | 1 | 1 | 100.0% |
| `456GcE4gDvnz3WCEasBYN9adgmAYP7tNAmFqsTQ9gnFG` | 1 | 1 | 100.0% |
| `2ET4tjdGG7eHwR7pi4wZXxoWvs5aj51ES89K5aXsoR8w` | 1 | 1 | 100.0% |
| `51gy2WwouAwVaXeQm9opcb1egZBK5DatBkzTJYyh14Wr` | 1 | 1 | 100.0% |
| `8RkSH8aw2Nzr3FiJKUcyExuEueWsivcXBqQ81o38BhMm` | 1 | 1 | 100.0% |
| `39fCrvYekhi6Ndg9f5hMJuYtuky7qgYfVUiEC6pEKvGk` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |
| `3WbF4GRLC281MWsdNfDsvCDxF4xQTD5xFykDTH3bX1FH` | 1 | 1 | 100.0% |
| `DMNBvXT8hQu8wtm4rNmwy19hMZGRjRqgWCmQx1aJzDJe` | 1 | 1 | 100.0% |
| `Btb92VzJcM361NCLgWhdWC4kCPUT79ErFwM6eTL1sPgS` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
| `A5LRVELtPmkFetnQrTYzpSYixnkgscVkXGBWk8irf8dZ` | 1 | 1 | 100.0% |
| `5JKW8PHb4uezmNrKf1qTD83Y7dChZDWneZAWj4dRSLxL` | 1 | 1 | 100.0% |
| `EPQYtnQGnht2v5YoAcsPLAoTpy9Fb4b45Dcx2G11zNtQ` | 1 | 1 | 100.0% |
| `DtbQFfNJHwpepofUf5dhnVoNhqQWKSe9vKtT8x4B7EhR` | 1 | 1 | 100.0% |
| `5zPAYSVDvvykYJaqAq3wrdesv9tBiEYmtS2mUSH9HpRY` | 1 | 1 | 100.0% |
| `CpMz1a6NLyvary15etjp3kMhUTYvwedygjT8jH1oA76J` | 1 | 1 | 100.0% |
| `XNnfK6mDFmAvBJyQRTGQV38Zi6aLio2jugLJkLn12jt` | 1 | 1 | 100.0% |
| `7itnib6sv61LpM9KqQ6JBxnLCUkZCaVFGPGfUWzDWKDb` | 1 | 1 | 100.0% |
| `k7MmaqQrhNtNVLESW3SB3F2DXSmqEKNEn875ocu7PfR` | 1 | 1 | 100.0% |
| `3FWkuzjAxz9pMHxXn3bmQWEgFwoQ6vawhEDZHgGjwHLB` | 1 | 1 | 100.0% |
| `ByRSkggfHdbZTaTULGDBiqrKwddHAXSLQh1ECp2wJHu5` | 1 | 1 | 100.0% |
| `HQfDK1XEJHQW2nxk3yEQTqsm9Y3okw4X17S8x8wbcu6Q` | 1 | 1 | 100.0% |
| `FENM5Wbtmhr9Br7TcJuJA4vqEPBrdjwSzQJGXzXqfrV4` | 1 | 1 | 100.0% |
| `52CfB35yd7jyGA6U2198WmCDVV8wi3Xg48S4MgMDvKR1` | 1 | 1 | 100.0% |
| `DBKSmR7E2tkDuZNeweWTCNenv871nxaCVThANH8eQJLV` | 1 | 1 | 100.0% |
| `FCMwP3inMPkh6iUYYee8F9kHE8BtMUPCTAJ6ifPfo7Vy` | 1 | 1 | 100.0% |
| `GjgPAnVX9WafRyu4WS6fAH6KpTyuTH1tg4oHDDcw51BY` | 1 | 1 | 100.0% |
| `DXZKdE6yGHFETyCCdumYuJNvmGUYZucCJjDEN6K5nYUc` | 1 | 1 | 100.0% |
| `cnt7zt27wGwu9SZufyuytxmTyFYaS6HhUUpLgpQdkup` | 1 | 1 | 100.0% |
| `7ehtrkWqiruHhxCfG9gaCApJ3prnfGuEsYVuqB948SeJ` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 14:10:47 | USDC → SOL (native) | market buy | Not filled within fill timeout (cancelled by sim) | `0x3610cda0…` [🐞](https://debug.barn.cow.fi/order/0x3610cda0368adb114e91f93b06d3dcaa4ba11334bb93f7aa1ea5340d56b0afd3) |
