# Solana QoS report: 2026-10-17-10-15-composite-paradox-run

Barn, orders created between `2026-10-17T10:19:59.678Z` and `2026-10-17T10:44:17.884Z`. Data fetched 2026-10-17T10:44:05+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 30 |
| Orders executed | **28** (93.3%) |
| Sponsored orders never created on-chain | 1 (3.3%) |
| Traders | 22 |
| Settlement txs | 28 |

## Scenario results

Target solver: `paradox`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-17T10:19:59.678Z | 2026-10-17T10:20:53.079Z | 2/6 | 4 | 3 | 2 | 33.3% |
| solver-same-direction-25 | 2026-10-17T10:22:25.708Z | 2026-10-17T10:23:05.392Z | 4/25 | 21 | 4 | 4 | 16.0% |
| solver-burst-sell | 2026-10-17T10:24:04.772Z | 2026-10-17T10:30:32.238Z | 18/84 | 66 | 19 | 18 | 21.4% |
| solver-token-coverage | 2026-10-17T10:32:33.484Z | 2026-10-17T10:33:14.182Z | 4/55 | 51 | 4 | 4 | 7.3% |
| solver-fresh-accounts | 2026-10-17T10:34:53.582Z | 2026-10-17T10:34:58.433Z | 0/8 | 8 | 0 | 0 | 0.0% |

## Scenario

28 of 178 scenario rows completed. 0 retries, 138 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 10:19:59 | 1 | 1 | sell 0.005 SOL → USDC | filled | 9s | 1 |  |
| 10:19:59 | 2 | 2 | sell 0.005 SOL → USDT | filled | 10s | 1 |  |
| 10:19:59 | 3 | 3 | sell 0.5 JUP → USDC | failed | 9s | 0 | acquire JUP quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:20:08 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:20:09 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:20:08 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 45s | 1 | acquire JUP expired |
| 10:22:25 | 7 | 4 | sell 0.005 SOL → JUP | filled | 17s | 1 |  |
| 10:22:25 | 8 | 5 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 10:22:25 | 9 | 6 | sell 0.005 SOL → JUP | filled | 40s | 1 |  |
| 10:22:25 | 10 | 7 | sell 0.005 SOL → JUP | filled | 40s | 1 |  |
| 10:22:25 | 11 | 8 | sell 0.005 SOL → JUP | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 12 | 9 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 13 | 10 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 14 | 11 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 15 | 12 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 16 | 13 | sell 0.005 SOL → JUP | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 17 | 14 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 18 | 15 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 19 | 16 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 20 | 17 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 21 | 18 | sell 0.005 SOL → JUP | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 22 | 19 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 23 | 20 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 24 | 21 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 25 | 22 | sell 0.005 SOL → JUP | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 26 | 23 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 27 | 24 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 28 | 25 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 29 | 26 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 30 | 27 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:22:25 | 31 | 28 | sell 0.005 SOL → JUP | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:24:04 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 10:24:04 | 33 | 30 | sell 0.003 SOL → USDC | failed | 72s | 1 | main timeout |
| 10:24:04 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 25s | 1 |  |
| 10:24:04 | 35 | 32 | sell 0.004 SOL → USDC | filled | 12s | 1 |  |
| 10:25:34 | 36 | 29 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:25:34 | 37 | 30 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 10:25:34 | 38 | 31 | sell 0.0035 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:25:34 | 39 | 32 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:25:34 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 38s | 1 |  |
| 10:25:34 | 41 | 34 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 10:25:34 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 16s | 1 |  |
| 10:25:34 | 43 | 36 | sell 0.004 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 45 | 30 | sell 0.003 SOL → USDC | filled | 32s | 1 |  |
| 10:27:04 | 46 | 31 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 47 | 32 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 48 | 33 | sell 0.0025 SOL → USDC | filled | 36s | 1 |  |
| 10:27:04 | 49 | 34 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 10:27:04 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 12s | 1 |  |
| 10:27:04 | 51 | 36 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 52 | 37 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 53 | 38 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 54 | 39 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 55 | 40 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 56 | 41 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 57 | 42 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 58 | 43 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:27:04 | 59 | 44 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 61 | 30 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 62 | 31 | sell 0.0035 SOL → USDC | filled | 33s | 1 |  |
| 10:28:34 | 63 | 32 | sell 0.004 SOL → USDC | filled | 27s | 1 |  |
| 10:28:34 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 65 | 34 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 66 | 35 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 67 | 36 | sell 0.004 SOL → USDC | filled | 14s | 1 |  |
| 10:28:34 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 69 | 38 | sell 0.003 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 70 | 39 | sell 0.0035 SOL → USDC | filled | 36s | 1 |  |
| 10:28:34 | 71 | 40 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 73 | 42 | sell 0.003 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 74 | 43 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 75 | 44 | sell 0.004 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 76 | 45 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 77 | 46 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 78 | 47 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 79 | 48 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 81 | 50 | sell 0.003 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 82 | 51 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:28:34 | 83 | 52 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 85 | 30 | sell 0.003 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 87 | 32 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 89 | 34 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 10:30:04 | 90 | 35 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 91 | 36 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 93 | 38 | sell 0.003 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 95 | 40 | sell 0.004 SOL → USDC | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 97 | 42 | sell 0.003 SOL → USDC | filled | 27s | 1 |  |
| 10:30:04 | 98 | 43 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 99 | 44 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 10:30:04 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 101 | 46 | sell 0.003 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 103 | 48 | sell 0.004 SOL → USDC | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 105 | 50 | sell 0.003 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 107 | 52 | sell 0.004 SOL → USDC | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 108 | 53 | sell 0.0025 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 109 | 54 | sell 0.003 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 110 | 55 | sell 0.0035 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 111 | 56 | sell 0.004 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 112 | 57 | sell 0.0025 SOL → USDC | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 113 | 58 | sell 0.003 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 114 | 59 | sell 0.0035 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:30:04 | 115 | 60 | sell 0.004 SOL → USDC | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 116 | 61 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 23s | 1 |  |
| 10:32:33 | 117 | 62 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 23s | 1 |  |
| 10:32:33 | 118 | 63 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 39s | 1 |  |
| 10:32:33 | 119 | 64 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 37s | 1 |  |
| 10:32:33 | 120 | 65 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 121 | 66 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 122 | 67 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 123 | 68 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 124 | 69 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 125 | 70 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 126 | 71 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 127 | 72 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 128 | 73 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 129 | 74 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 130 | 75 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 131 | 76 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 10:32:33 | 132 | 77 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 3s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 10:32:33 | 133 | 78 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 4s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 10:32:33 | 134 | 79 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 135 | 80 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 136 | 81 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 137 | 82 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 138 | 83 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 139 | 84 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 140 | 85 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 141 | 86 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 142 | 87 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 7s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 143 | 88 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 144 | 89 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 145 | 90 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 146 | 91 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 8s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 147 | 92 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 148 | 93 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 149 | 94 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 150 | 95 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 9s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 151 | 96 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 152 | 97 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 153 | 98 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 154 | 99 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 10s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:33 | 155 | 100 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 11s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:32:56 | 156 | 61 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:56 | 157 | 62 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:33:12 | 158 | 63 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:33:10 | 159 | 64 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:35 | 160 | 65 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:36 | 161 | 66 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:36 | 162 | 67 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:36 | 163 | 68 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:36 | 164 | 69 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:37 | 165 | 70 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 6s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:37 | 166 | 71 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 8s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:37 | 167 | 72 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 7s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:37 | 168 | 73 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 8s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:37 | 169 | 74 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 8s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:32:37 | 170 | 75 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 8s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 10:34:53 | 171 | 101 | sell 0.1 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:34:53 | 172 | 102 | sell 0.1 SOL → USDC | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:34:53 | 173 | 103 | buy 10 USDC ← SOL | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:34:53 | 174 | 104 | buy 10 USDC ← SOL | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:34:53 | 175 | 105 | sell 0.1 SOL → USDT | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:34:53 | 176 | 106 | sell 0.1 SOL → USDT | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:34:53 | 177 | 107 | buy 10 USDT ← SOL | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 10:34:53 | 178 | 108 | buy 10 USDT ← SOL | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

148 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | main | 127 | SOL → USDC ×69, SOL → JUP ×21, SOL → USDT ×4, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx, SOL → Bonk, SOL → $WIF, SOL → POPCAT, SOL → JitoSOL, SOL → mSOL, SOL → JupSOL, SOL → cbBTC, SOL → USDe, SOL → EURC, SOL → USDY, SOL → JLP, SOL → INF, SOL → ETH, SOL → BNB, SOL → XAUt0, SOL → GLDx, SOL → EUROP, SOL → Fartcoin, SOL → MEW, SOL → BOME, SOL → hyloSOL, SOL → PSOL | no route found |
| NoLiquidity | quote | 17 | SOL → USDC, SOL → USDT, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx | no route found |
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| NoLiquidity | acquire | 1 | SOL → JUP | no route found |

Scenario orders: 30 (29 main, 1 acquire). Cleanup placed 14 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 10:20:55 | 2 | USDT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xbbfb84c9…` [🐞](https://debug.barn.cow.fi/order/0xbbfb84c96ae26e415c4f2148d70c3bd2febb66ed964a8f4dcf85afb475268c45) |
| 10:30:57 | 39 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x08268931…` [🐞](https://debug.barn.cow.fi/order/0x0826893108789ed419fd41a4a828525ff77d712be8e9d4a3cfe4571a3f1c912e) |
| 10:31:00 | 42 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x0d8d4d51…` [🐞](https://debug.barn.cow.fi/order/0x0d8d4d513bf781c8ae7668b9d5b58a45740ed72af3e9891fca5a6d76ed44df44) |
| 10:33:20 | 64 | PUMP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xcd108887…` [🐞](https://debug.barn.cow.fi/order/0xcd108887ed1e23899557b3c919562709eb3c1fcb5ffb11a9529e4357b9a2d9fb) |
| 10:37:14 | 1 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x130d172d…` [🐞](https://debug.barn.cow.fi/order/0x130d172da3986fcc7102b239cbfeb9ff374820664c172d4b53801e9a27281209) |
| 10:37:15 | 2 | USDT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x572c2438…` [🐞](https://debug.barn.cow.fi/order/0x572c2438403338da650891b350ed354d3e3b4a5c2dd956be5e297d45cf2a5a41) |
| 10:38:31 | 4 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x0c94c756…` [🐞](https://debug.barn.cow.fi/order/0x0c94c7569c297c9fda0f21ed1800d92640c78eb909365b57d942dc31ae03143a) |
| 10:38:32 | 5 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xad638213…` [🐞](https://debug.barn.cow.fi/order/0xad63821362f759d36fbc61c0216f5793713bb8bf1c9edf7f18e10043fa567855) |
| 10:39:48 | 29 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x95d413f9…` [🐞](https://debug.barn.cow.fi/order/0x95d413f9321a3a3a48972e5f1d7745c0aadab79e772848c2d0e8a02568f13d10) |
| 10:39:49 | 30 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x254cab8c…` [🐞](https://debug.barn.cow.fi/order/0x254cab8cd1ad754a2ed15c336c1ddad0694dd82888c500f6de466e30040f76cf) |
| 10:40:00 | 39 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x7048ab89…` [🐞](https://debug.barn.cow.fi/order/0x7048ab89746e7de03c8115eaa25edd9cdbeab332c8b7f66ffb6e610f9860b663) |
| 10:40:00 | 42 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x048f28ba…` [🐞](https://debug.barn.cow.fi/order/0x048f28baec1d392ba33a1da6efc082c30223d4ab511925ed663f06681416f54c) |
| 10:41:33 | 61 | ANSEM → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x1648cf75…` [🐞](https://debug.barn.cow.fi/order/0x1648cf758162240a311bc1fbf8987732ec9788d4d67ff89849ea148c78f71375) |
| 10:41:34 | 62 | PAID → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb4be53e1…` [🐞](https://debug.barn.cow.fi/order/0xb4be53e1f58f5d20f3a38872bdae0a3f06934cb95a00918cf2b1d3184b06b8dc) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 28 | 93.3% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 3.3% |
| cancelled | 1 | 3.3% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 20s | 31s | 32s | 34s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 8oLu…T8ku | 28 | 100.0% | 28 | 94,865 | 20s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| paradox | 66 | 33 | 28 | 84.8% | 4 | 2 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| paradox: PriorityFeeTooHigh | 4 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 280 times
- Orders filtered for `in_flight`: 9 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 30 | 28 | 93.3% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 20 | 19 | 95.0% |
| wSOL → JUP | 5 | 4 | 80.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 3 | 2 | 66.7% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 3 | 3 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 2 | 2 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 2 | 2 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 2 | 2 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 0 | 0.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 1 | 1 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 1 | 1 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 1 | 1 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 1 | 1 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 1 | 1 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 1 | 1 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 1 | 0 |
| Not filled within fill timeout (cancelled by sim) | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 10:20:17 | wSOL → JUP | market sell | Winner too late: creation blockhash expired | `0x4f13a75e…` [🐞](https://debug.barn.cow.fi/order/0x4f13a75ed48ad0f0f79bd44a5917359989c9f98e5d40c519c0b879b3b6098d2b) |
| 10:24:06 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfecd08b0…` [🐞](https://debug.barn.cow.fi/order/0xfecd08b0dc29f9c90aa540fdae6377cce4763fd2e5bed0cdf7f5cb3b501f7eee) |
