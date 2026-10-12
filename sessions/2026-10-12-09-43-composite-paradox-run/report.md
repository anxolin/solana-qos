# Solana QoS report: 2026-10-12-09-43-composite-paradox-run

Barn, orders created between `2026-10-12T09:43:45.472Z` and `2026-10-12T11:07:08.916Z`. Data fetched 2026-10-12T11:07:15+00:00.

This run was interrupted and resumed at `2026-10-12T10:10:45.413Z`, `2026-10-12T10:27:11.021Z`, `2026-10-12T10:40:43.466Z`, `2026-10-12T10:58:40.644Z`, `2026-10-12T11:06:08.722Z`.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 35 |
| Orders executed | **35** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 27 |
| Settlement txs | 35 |

## Scenario results

Target solver: `paradox`. Pauses: 60s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-12T09:43:45.472Z | 2026-10-12T09:46:39.715Z | 5/6 | 1 | 7 | 7 | 83.3% |
| solver-same-direction-25 | 2026-10-12T10:28:26.616Z | 2026-10-12T10:29:40.519Z | 4/25 | 21 | 4 | 4 | 16.0% |
| solver-burst-sell | 2026-10-12T10:41:58.551Z | 2026-10-12T10:52:34.375Z | 18/84 | 66 | 18 | 18 | 21.4% |
| solver-token-coverage | 2026-10-12T10:59:53.426Z | 2026-10-12T11:00:31.347Z | 6/55 | 49 | 6 | 6 | 10.9% |

## Scenario

33 of 170 scenario rows completed. 0 retries, 129 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 09:43:45 | 1 | 1 | sell 0.005 SOL → USDC | filled | 8s | 1 |  |
| 09:44:15 | 2 | 2 | sell 0.005 SOL → USDT | filled | 8s | 1 |  |
| 09:44:45 | 3 | 3 | sell 0.5 JUP → USDC | failed | 15s | 1 | main error: 404 Not Found: NoLiquidity: no route found |
| 09:45:15 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 9s | 1 |  |
| 09:45:45 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 11s | 1 |  |
| 09:46:15 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 24s | 2 |  |
| 10:28:26 | 7 | 4 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |
| 10:28:26 | 8 | 5 | sell 0.005 SOL → JUP | filled | 16s | 1 |  |
| 10:28:26 | 9 | 6 | sell 0.005 SOL → JUP | filled | 23s | 1 |  |
| 10:28:27 | 10 | 7 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:27 | 11 | 8 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:27 | 12 | 9 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:27 | 13 | 10 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:27 | 14 | 11 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:27 | 15 | 12 | sell 0.005 SOL → JUP | filled | 73s | 1 |  |
| 10:28:27 | 16 | 13 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:27 | 17 | 14 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:27 | 18 | 15 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:27 | 19 | 16 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 20 | 17 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 21 | 18 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 22 | 19 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 23 | 20 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 24 | 21 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 25 | 22 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 26 | 23 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 27 | 24 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 28 | 25 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:28 | 29 | 26 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:29 | 30 | 27 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:29 | 31 | 28 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:41:58 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 22s | 1 |  |
| 10:41:58 | 33 | 30 | sell 0.003 SOL → USDC | filled | 15s | 1 |  |
| 10:41:58 | 34 | 31 | sell 0.0035 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:41:58 | 35 | 32 | sell 0.004 SOL → USDC | filled | 25s | 1 |  |
| 10:44:28 | 36 | 29 | sell 0.0025 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:44:28 | 37 | 30 | sell 0.003 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:44:28 | 38 | 31 | sell 0.0035 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:44:28 | 39 | 32 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:44:28 | 40 | 33 | sell 0.0025 SOL → USDC | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:44:28 | 41 | 34 | sell 0.003 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:44:28 | 42 | 35 | sell 0.0035 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:44:28 | 43 | 36 | sell 0.004 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 45 | 30 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 46 | 31 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 47 | 32 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 49 | 34 | sell 0.003 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 50 | 35 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 51 | 36 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 31s | 1 |  |
| 10:46:58 | 53 | 38 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 10:46:58 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 28s | 1 |  |
| 10:46:58 | 55 | 40 | sell 0.004 SOL → USDC | filled | 16s | 1 |  |
| 10:46:58 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 35s | 1 |  |
| 10:46:58 | 57 | 42 | sell 0.003 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 58 | 43 | sell 0.0035 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:46:58 | 59 | 44 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 61 | 30 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 62 | 31 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 63 | 32 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 65 | 34 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 66 | 35 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 67 | 36 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 69 | 38 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 70 | 39 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 71 | 40 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 73 | 42 | sell 0.003 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 74 | 43 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 75 | 44 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 76 | 45 | sell 0.0025 SOL → USDC | filled | 48s | 1 |  |
| 10:49:28 | 77 | 46 | sell 0.003 SOL → USDC | filled | 30s | 1 |  |
| 10:49:28 | 78 | 47 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 10:49:28 | 79 | 48 | sell 0.004 SOL → USDC | filled | 39s | 1 |  |
| 10:49:28 | 80 | 49 | sell 0.0025 SOL → USDC | filled | 49s | 1 |  |
| 10:49:28 | 81 | 50 | sell 0.003 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 82 | 51 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:49:28 | 83 | 52 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 85 | 30 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 87 | 32 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 89 | 34 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 90 | 35 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 91 | 36 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 93 | 38 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 95 | 40 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 97 | 42 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 98 | 43 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 99 | 44 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 100 | 45 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 10:51:58 | 101 | 46 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 10:51:58 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 103 | 48 | sell 0.004 SOL → USDC | filled | 17s | 1 |  |
| 10:51:58 | 104 | 49 | sell 0.0025 SOL → USDC | filled | 30s | 1 |  |
| 10:51:58 | 105 | 50 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 107 | 52 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 108 | 53 | sell 0.0025 SOL → USDC | filled | 21s | 1 |  |
| 10:51:58 | 109 | 54 | sell 0.003 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 110 | 55 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 111 | 56 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 112 | 57 | sell 0.0025 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 113 | 58 | sell 0.003 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 114 | 59 | sell 0.0035 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:51:58 | 115 | 60 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:53 | 116 | 61 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 34s | 1 |  |
| 10:59:53 | 117 | 62 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 38s | 1 |  |
| 10:59:53 | 118 | 63 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 34s | 1 |  |
| 10:59:53 | 119 | 64 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:53 | 120 | 65 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:54 | 121 | 66 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:54 | 122 | 67 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:54 | 123 | 68 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:54 | 124 | 69 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:54 | 125 | 70 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:54 | 126 | 71 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 18s | 1 |  |
| 10:59:54 | 127 | 72 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 21s | 1 |  |
| 10:59:54 | 128 | 73 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:54 | 129 | 74 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:54 | 130 | 75 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:55 | 131 | 76 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 10:59:55 | 132 | 77 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 7s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 10:59:55 | 133 | 78 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 7s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 10:59:55 | 134 | 79 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:55 | 135 | 80 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:55 | 136 | 81 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:55 | 137 | 82 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:55 | 138 | 83 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:55 | 139 | 84 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:55 | 140 | 85 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 141 | 86 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 142 | 87 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 143 | 88 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 144 | 89 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 145 | 90 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 146 | 91 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 147 | 92 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 148 | 93 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 149 | 94 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:56 | 150 | 95 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:57 | 151 | 96 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:57 | 152 | 97 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:57 | 153 | 98 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 24s | 1 |  |
| 10:59:57 | 154 | 99 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:59:57 | 155 | 100 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 11:00:27 | 156 | 61 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:00:31 | 157 | 62 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:00:28 | 158 | 63 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:59:58 | 159 | 64 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:59:58 | 160 | 65 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:59:58 | 161 | 66 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:59:58 | 162 | 67 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:59:59 | 163 | 68 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:59:59 | 164 | 69 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:59:59 | 165 | 70 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:00:12 | 166 | 71 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:00:15 | 167 | 72 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:00:00 | 168 | 73 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:00:00 | 169 | 74 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:00:01 | 170 | 75 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

137 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 119 | SOL → USDC ×66, SOL → JUP ×21, JUP → USDC, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → SPCX, SOL → SPCXx, SOL → TSLAx, SOL → Bonk, SOL → $WIF, SOL → POPCAT, SOL → JitoSOL, SOL → mSOL, SOL → JupSOL, SOL → cbBTC, SOL → USDe, SOL → EURC, SOL → USDY, SOL → JLP, SOL → INF, SOL → ETH, SOL → BNB, SOL → XAUt0, SOL → GLDx, SOL → EUROP, SOL → Fartcoin, SOL → MEW, SOL → hyloSOL, SOL → PSOL | no route found |
| NoLiquidity | quote | 15 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |

Scenario orders: 35 (33 main, 2 acquire). Cleanup placed 9 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 09:46:41 | 1 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe0fed7fb…` [🐞](https://debug.barn.cow.fi/order/0xe0fed7fbf0819f75c7d96387f3c849754b90de5c2825a1e92cf0f053a5dfe0cb) |
| 10:10:58 | 1 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x47398380…` [🐞](https://debug.barn.cow.fi/order/0x4739838071cdd9bc9aaf8c7f474e64d3ba350603c508e52fc5adb961cd406617) |
| 10:29:42 | 4 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x6f2414d1…` [🐞](https://debug.barn.cow.fi/order/0x6f2414d1917f5128dbf23ef9d37fbe16a27ea1da91785876cf4a505bba44b5a5) |
| 10:52:36 | 29 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x3a6727e7…` [🐞](https://debug.barn.cow.fi/order/0x3a6727e73077124a3b31de5ed74f1a9f85cd51eb63ca0a06d876bcd37f2ce1a0) |
| 10:52:49 | 39 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xeb3beb51…` [🐞](https://debug.barn.cow.fi/order/0xeb3beb51c828e625b1a1b9fffe3a3668dc69a8e8079beb01991cbae2e44a0aab) |
| 10:53:01 | 45 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x95fdc7ea…` [🐞](https://debug.barn.cow.fi/order/0x95fdc7eac58f06976b62aa4aac08aec72478a661e1bae3cefbd0767ddf82866e) |
| 10:53:20 | 53 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x5a8cb488…` [🐞](https://debug.barn.cow.fi/order/0x5a8cb4884eb4573235ea4c4bcf34739b2cba938dc5db2a70c1667ff3eb351a94) |
| 11:00:33 | 61 | ANSEM → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x9c1948db…` [🐞](https://debug.barn.cow.fi/order/0x9c1948db87e04438fbdc83ddf4dfb60fa9213d430eb2ce8ebb53931063f59d59) |
| 11:00:52 | 71 | NVDAx → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xa92fdcd1…` [🐞](https://debug.barn.cow.fi/order/0xa92fdcd1ce7d3299ea56d4fecc32a6a1f5574ae141347748dc2946930b313070) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 35 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 17s | 25s | 32s | 64s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 8oLu…T8ku | 35 | 100.0% | 35 | 98,547 | 17s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| paradox | 66 | 41 | 36 | 87.8% | 3 | 2 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| paradox: PriorityFeeTooHigh | 3 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 1
- Orders filtered for `unfunded_sell_token_account`: 989 times
- Orders filtered for `unreceivable_buy_token_account`: 989 times
- Orders filtered for `in_flight`: 8 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 32 | 32 | 100.0% |
| buy | 3 | 3 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 20 | 20 | 100.0% |
| wSOL → JUP | 6 | 6 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| JUP → USDC | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 3 | 3 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 1 | 1 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 1 | 1 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 1 | 1 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 1 | 1 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 1 | 1 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 1 | 1 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 1 | 1 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 1 | 1 | 100.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 1 | 1 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 1 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `BYoBuZNnMSEfTDrCc13Z8zmxk6JpYUNsXB8kX1PFwPSa` | 1 | 1 | 100.0% |
| `3UybR25BSNZAdvk7UZohM5BxmY7iqMtyvpZL2h6XzX1J` | 1 | 1 | 100.0% |
| `8fabdXanjhdAgsY5EnQmpecBQNk13xUXAWAs9Finv4QJ` | 1 | 1 | 100.0% |
