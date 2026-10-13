# Solana QoS report: 2026-10-13-06-27-composite-paradox-run

Barn, orders created between `2026-10-13T06:28:15.556Z` and `2026-10-13T07:35:00.187Z`. Data fetched 2026-10-13T07:35:47+00:00.

This run was interrupted and resumed at `2026-10-13T06:37:40.437Z`, `2026-10-13T06:52:00.048Z`, `2026-10-13T06:57:46.586Z`, `2026-10-13T07:10:19.071Z`, `2026-10-13T07:27:38.420Z`, `2026-10-13T07:27:53.174Z`, `2026-10-13T07:33:59.986Z`.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 38 |
| Orders executed | **35** (92.1%) |
| Sponsored orders never created on-chain | 3 (7.9%) |
| Traders | 33 |
| Settlement txs | 35 |

## Scenario results

Target solver: `paradox`. Pauses: 60s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-13T06:28:15.556Z | 2026-10-13T06:31:06.371Z | 6/6 | 0 | 8 | 8 | 100.0% |
| solver-same-direction-25 | 2026-10-13T06:58:22.018Z | 2026-10-13T06:58:57.867Z | 4/25 | 21 | 4 | 4 | 16.0% |
| solver-burst-sell | 2026-10-13T07:10:54.095Z | 2026-10-13T07:21:27.482Z | 20/84 | 64 | 20 | 20 | 23.8% |
| solver-token-coverage | 2026-10-13T07:28:11.157Z | 2026-10-13T07:29:11.184Z | 3/55 | 52 | 6 | 3 | 5.5% |

## Scenario

33 of 170 scenario rows completed. 0 retries, 128 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 06:28:15 | 1 | 1 | sell 0.005 SOL → USDC | filled | 8s | 1 |  |
| 06:28:45 | 2 | 2 | sell 0.005 SOL → USDT | filled | 5s | 1 |  |
| 06:29:15 | 3 | 3 | sell 0.5 JUP → USDC | filled | 57s | 2 |  |
| 06:29:45 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 7s | 1 |  |
| 06:30:15 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 7s | 1 |  |
| 06:30:45 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 21s | 2 |  |
| 06:58:22 | 7 | 4 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 06:58:22 | 8 | 5 | sell 0.005 SOL → JUP | filled | 36s | 1 |  |
| 06:58:22 | 9 | 6 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 06:58:22 | 10 | 7 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 06:58:22 | 11 | 8 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:22 | 12 | 9 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:22 | 13 | 10 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:22 | 14 | 11 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:22 | 15 | 12 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 16 | 13 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 17 | 14 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 18 | 15 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 19 | 16 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 20 | 17 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 21 | 18 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 22 | 19 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 23 | 20 | sell 0.005 SOL → JUP | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 24 | 21 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:23 | 25 | 22 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:24 | 26 | 23 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:24 | 27 | 24 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:24 | 28 | 25 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:24 | 29 | 26 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:24 | 30 | 27 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 06:58:24 | 31 | 28 | sell 0.005 SOL → JUP | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:10:54 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 07:10:54 | 33 | 30 | sell 0.003 SOL → USDC | filled | 28s | 1 |  |
| 07:10:54 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 35s | 1 |  |
| 07:10:54 | 35 | 32 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 07:13:24 | 36 | 29 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:13:24 | 37 | 30 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:13:24 | 38 | 31 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:13:24 | 39 | 32 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:13:24 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 07:13:24 | 41 | 34 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 07:13:24 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 07:13:24 | 43 | 36 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 07:15:54 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 45 | 30 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 46 | 31 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 47 | 32 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 49 | 34 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 50 | 35 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 51 | 36 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 07:15:54 | 53 | 38 | sell 0.003 SOL → USDC | filled | 29s | 1 |  |
| 07:15:54 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 23s | 1 |  |
| 07:15:54 | 55 | 40 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 07:15:54 | 56 | 41 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 57 | 42 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 58 | 43 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:15:54 | 59 | 44 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 61 | 30 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 62 | 31 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 63 | 32 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 65 | 34 | sell 0.003 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 66 | 35 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 67 | 36 | sell 0.004 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 69 | 38 | sell 0.003 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 70 | 39 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 71 | 40 | sell 0.004 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 73 | 42 | sell 0.003 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 74 | 43 | sell 0.0035 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 75 | 44 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 28s | 1 |  |
| 07:18:24 | 77 | 46 | sell 0.003 SOL → USDC | filled | 36s | 1 |  |
| 07:18:24 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 26s | 1 |  |
| 07:18:24 | 79 | 48 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 07:18:24 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 81 | 50 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 82 | 51 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:18:24 | 83 | 52 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 85 | 30 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 87 | 32 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 89 | 34 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 90 | 35 | sell 0.0035 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 91 | 36 | sell 0.004 SOL → USDC | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 93 | 38 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 95 | 40 | sell 0.004 SOL → USDC | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 97 | 42 | sell 0.003 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 98 | 43 | sell 0.0035 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 99 | 44 | sell 0.004 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 101 | 46 | sell 0.003 SOL → USDC | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 103 | 48 | sell 0.004 SOL → USDC | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 105 | 50 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 107 | 52 | sell 0.004 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 07:20:54 | 109 | 54 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 110 | 55 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 111 | 56 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 112 | 57 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:20:54 | 113 | 58 | sell 0.003 SOL → USDC | filled | 33s | 1 |  |
| 07:20:54 | 114 | 59 | sell 0.0035 SOL → USDC | filled | 24s | 1 |  |
| 07:20:54 | 115 | 60 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 07:28:11 | 116 | 61 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 43s | 1 | main expired |
| 07:28:11 | 117 | 62 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 43s | 1 | main expired |
| 07:28:11 | 118 | 63 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 43s | 1 | main expired |
| 07:28:11 | 119 | 64 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 59s | 1 |  |
| 07:28:11 | 120 | 65 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:11 | 121 | 66 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:11 | 122 | 67 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:11 | 123 | 68 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:12 | 124 | 69 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:12 | 125 | 70 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:12 | 126 | 71 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:12 | 127 | 72 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:12 | 128 | 73 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:12 | 129 | 74 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:12 | 130 | 75 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:12 | 131 | 76 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 07:28:12 | 132 | 77 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 07:28:12 | 133 | 78 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 07:28:13 | 134 | 79 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:13 | 135 | 80 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:13 | 136 | 81 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:13 | 137 | 82 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:13 | 138 | 83 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:13 | 139 | 84 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:13 | 140 | 85 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:13 | 141 | 86 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:13 | 142 | 87 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:13 | 143 | 88 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:14 | 144 | 89 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:14 | 145 | 90 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:14 | 146 | 91 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:14 | 147 | 92 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:14 | 148 | 93 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 56s | 1 |  |
| 07:28:14 | 149 | 94 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 56s | 1 |  |
| 07:28:14 | 150 | 95 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:14 | 151 | 96 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:14 | 152 | 97 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:15 | 153 | 98 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:15 | 154 | 99 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:15 | 155 | 100 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 07:28:53 | 156 | 61 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:54 | 157 | 62 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:54 | 158 | 63 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:29:10 | 159 | 64 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:19 | 160 | 65 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:19 | 161 | 66 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:19 | 162 | 67 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:19 | 163 | 68 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:17 | 164 | 69 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:20 | 165 | 70 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:20 | 166 | 71 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:20 | 167 | 72 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:20 | 168 | 73 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:21 | 169 | 74 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 07:28:21 | 170 | 75 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

134 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 116 | SOL → USDC ×64, SOL → JUP ×21, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx, SOL → Bonk, SOL → $WIF, SOL → POPCAT, SOL → JitoSOL, SOL → mSOL, SOL → JupSOL, SOL → cbBTC, SOL → USDe, SOL → EURC, SOL → USDY, SOL → JLP, SOL → INF, SOL → ETH, SOL → BNB, SOL → EUROP, SOL → Fartcoin, SOL → MEW, SOL → BOME, SOL → hyloSOL, SOL → PSOL | no route found |
| NoLiquidity | quote | 15 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |

Scenario orders: 38 (36 main, 2 acquire). Cleanup placed 12 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 06:31:08 | 1 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x33c658a7…` [🐞](https://debug.barn.cow.fi/order/0x33c658a7f5340c55d4cce3f6eec16aa9502e791ea1f1de3a08ecd750445b6fbc) |
| 06:37:54 | 1 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x55c741c9…` [🐞](https://debug.barn.cow.fi/order/0x55c741c9ca2cb7002d30b67a018a3c2b077a56b739f635d0d0440048e3eb2c51) |
| 06:37:54 | 2 | USDT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe6aefa3f…` [🐞](https://debug.barn.cow.fi/order/0xe6aefa3f4102ea6a1bc4ce9e9e67a3c0ed509493adf9e357d3b2871b81090c16) |
| 06:52:13 | 1 | USDC → SOL (native) | Expired without a fill | `0x74f10795…` [🐞](https://debug.barn.cow.fi/order/0x74f10795fdfd03f2b9a469f58bedf70598f539bed09f988334cb4702aef2c097) |
| 06:52:14 | 2 | USDT → SOL (native) | Expired without a fill | `0x8960a9ec…` [🐞](https://debug.barn.cow.fi/order/0x8960a9ec8f57164c7284eb272f4781ba9ea27cf2e07339f50d605a113aa4762a) |
| 06:58:59 | 4 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd0e6523d…` [🐞](https://debug.barn.cow.fi/order/0xd0e6523dc293599c4492f6a7aff4c604f99b82736e84f62e1b0b54b0ff698208) |
| 06:59:10 | 7 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd4614599…` [🐞](https://debug.barn.cow.fi/order/0xd4614599ec026b53f81ff3d3127390510afa25f2de5a63dbbf084a51e004db68) |
| 07:21:29 | 29 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x8fe6f367…` [🐞](https://debug.barn.cow.fi/order/0x8fe6f3671d61cb27c696706655aa83aa12ed61d1a5e365dbdf1b9cbc049e6dc0) |
| 07:21:41 | 36 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc0f859b4…` [🐞](https://debug.barn.cow.fi/order/0xc0f859b4689430e71f08c2751bbe188afe57463de3bcd6338967c87a223e23bd) |
| 07:21:52 | 41 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x51f023f6…` [🐞](https://debug.barn.cow.fi/order/0x51f023f65cadc500be44132469607aa963bb8191d650dfe71598768653263b94) |
| 07:29:18 | 64 | PUMP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x978d95bd…` [🐞](https://debug.barn.cow.fi/order/0x978d95bd9b34bcc83730e2e6fe1ce5eba7d9ba3cf4fd3ef058f4959db3607677) |
| 07:29:30 | 71 | NVDAx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x95731a6e…` [🐞](https://debug.barn.cow.fi/order/0x95731a6e2ed072bee371f47b9ff099bf8565eb6e71c1d2712a5b289c839b8bff) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 35 | 92.1% |
| expired: never created on-chain (winner found, creation blockhash expired) | 3 | 7.9% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 19s | 28s | 41s | 48s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 8oLu…T8ku | 35 | 100.0% | 35 | 100,615 | 19s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| paradox | 62 | 36 | 35 | 97.2% | 0 | 2 | 37 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 789 times
- Orders filtered for `unreceivable_buy_token_account`: 789 times
- Orders filtered for `in_flight`: 10 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 35 | 32 | 91.4% |
| buy | 3 | 3 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 22 | 22 | 100.0% |
| wSOL → JUP | 6 | 6 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| JUP → USDC | 2 | 2 | 100.0% |
| wSOL → ANSEM | 1 | 0 | 0.0% |
| wSOL → PAID | 1 | 0 | 0.0% |
| wSOL → USDG | 1 | 0 | 0.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 4 | 4 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 1 | 1 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 1 | 1 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 1 | 1 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 1 | 1 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 1 | 1 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 1 | 1 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 1 | 1 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 1 | 1 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 1 | 1 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 1 | 1 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 1 | 1 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 1 | 1 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 1 | 1 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 1 | 1 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 1 | 1 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 0 | 0.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 1 | 0 | 0.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 0 | 0.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 1 | 1 | 100.0% |
| `Cu76vwvyEjJB3UYoPgsbV1HRLsMPGXK3SdkNfmRdsPK9` | 1 | 1 | 100.0% |
| `AAgrup6WmfRwMPNADdHC3V2azWwgPhKzPeGBdbmny67M` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 3 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 07:28:19 | wSOL → ANSEM | sell | Winner too late: creation blockhash expired | `0xe5fbe1c1…` [🐞](https://debug.barn.cow.fi/order/0xe5fbe1c12d1eb964a4ad3ca5760b717b9145a270497f2dc2490b08eb4cdc4648) |
| 07:28:19 | wSOL → PAID | sell | Winner too late: creation blockhash expired | `0x283d4e11…` [🐞](https://debug.barn.cow.fi/order/0x283d4e11110b5062c848f3b75e15908059d48c554e46128450542510b782b5e7) |
| 07:28:19 | wSOL → USDG | sell | Winner too late: creation blockhash expired | `0x43773853…` [🐞](https://debug.barn.cow.fi/order/0x437738536726048343610e36d1d1c04a198fc9e2757d5abab941c0346321c0a0) |
