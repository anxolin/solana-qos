# Solana QoS report: 2026-10-28-12-59-composite-arc-run

Barn, orders created between `2026-10-28T13:00:57.255Z` and `2026-10-28T13:26:34.603Z`. Data fetched 2026-10-28T13:27:48+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 112 |
| Orders executed | **26** (23.2%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 60 |
| Settlement txs | 26 |

## Scenario results

Target solver: `arc`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-28T13:00:57.255Z | 2026-10-28T13:01:22.088Z | 2/6 | 4 | 3 | 3 | 33.3% |
| solver-same-direction-25 | 2026-10-28T13:02:55.461Z | 2026-10-28T13:04:21.048Z | 6/25 | 19 | 25 | 6 | 24.0% |
| solver-burst-sell | 2026-10-28T13:06:39.708Z | 2026-10-28T13:14:06.596Z | 17/84 | 67 | 84 | 17 | 20.2% |
| solver-cow | 2026-10-28T13:17:18.876Z | 2026-10-28T13:19:56.389Z | 0/15 | 15 | 0 | 0 | 0.0% |
| solver-token-coverage | 2026-10-28T13:20:23.165Z | 2026-10-28T13:20:37.284Z | 0/52 | 52 | 0 | 0 | 0.0% |

## Scenario

25 of 182 scenario rows completed. 0 retries, 41 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 13:00:57 | 1 | 1 | sell 0.005 SOL → USDC | filled | 24s | 1 |  |
| 13:00:57 | 2 | 2 | sell 0.005 SOL → USDT | filled | 18s | 1 |  |
| 13:00:57 | 3 | 3 | sell 0.5 JUP → USDC | failed | 12s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 13:01:21 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:01:15 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:01:09 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:02:55 | 7 | 4 | sell 0.005 SOL → JUP | failed | 76s | 1 | main timeout |
| 13:02:55 | 8 | 5 | sell 0.005 SOL → JUP | failed | 77s | 1 | main timeout |
| 13:02:55 | 9 | 6 | sell 0.005 SOL → JUP | filled | 9s | 1 |  |
| 13:02:55 | 10 | 7 | sell 0.005 SOL → JUP | failed | 78s | 1 | main timeout |
| 13:02:55 | 11 | 8 | sell 0.005 SOL → JUP | failed | 74s | 1 | main timeout |
| 13:02:55 | 12 | 9 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 13:02:55 | 13 | 10 | sell 0.005 SOL → JUP | failed | 86s | 1 | main timeout |
| 13:02:55 | 14 | 11 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 13:02:55 | 15 | 12 | sell 0.005 SOL → JUP | filled | 64s | 1 |  |
| 13:02:55 | 16 | 13 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 13:02:55 | 17 | 14 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 13:02:55 | 18 | 15 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 13:02:55 | 19 | 16 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 13:02:55 | 20 | 17 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 13:02:55 | 21 | 18 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 13:02:55 | 22 | 19 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 13:02:55 | 23 | 20 | sell 0.005 SOL → JUP | filled | 84s | 1 |  |
| 13:02:55 | 24 | 21 | sell 0.005 SOL → JUP | filled | 45s | 1 |  |
| 13:02:55 | 25 | 22 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 13:02:55 | 26 | 23 | sell 0.005 SOL → JUP | filled | 51s | 1 |  |
| 13:02:55 | 27 | 24 | sell 0.005 SOL → JUP | filled | 61s | 1 |  |
| 13:02:55 | 28 | 25 | sell 0.005 SOL → JUP | failed | 80s | 1 | main timeout |
| 13:02:55 | 29 | 26 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 13:02:55 | 30 | 27 | sell 0.005 SOL → JUP | failed | 81s | 1 | main timeout |
| 13:02:55 | 31 | 28 | sell 0.005 SOL → JUP | failed | 82s | 1 | main timeout |
| 13:06:39 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 13s | 1 |  |
| 13:06:39 | 33 | 30 | sell 0.003 SOL → USDC | failed | 70s | 1 | main timeout |
| 13:06:39 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 71s | 1 |  |
| 13:06:39 | 35 | 32 | sell 0.004 SOL → USDC | filled | 41s | 1 |  |
| 13:08:09 | 36 | 29 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 13:08:09 | 37 | 30 | sell 0.003 SOL → USDC | failed | 72s | 1 | main timeout |
| 13:08:09 | 38 | 31 | sell 0.0035 SOL → USDC | failed | 73s | 1 | main timeout |
| 13:08:09 | 39 | 32 | sell 0.004 SOL → USDC | failed | 75s | 1 | main timeout |
| 13:08:09 | 40 | 33 | sell 0.0025 SOL → USDC | failed | 69s | 1 | main timeout |
| 13:08:09 | 41 | 34 | sell 0.003 SOL → USDC | filled | 41s | 1 |  |
| 13:08:09 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 31s | 1 |  |
| 13:08:09 | 43 | 36 | sell 0.004 SOL → USDC | filled | 26s | 1 |  |
| 13:09:39 | 44 | 29 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 13:09:39 | 45 | 30 | sell 0.003 SOL → USDC | failed | 74s | 1 | main timeout |
| 13:09:39 | 46 | 31 | sell 0.0035 SOL → USDC | failed | 72s | 1 | main timeout |
| 13:09:39 | 47 | 32 | sell 0.004 SOL → USDC | failed | 75s | 1 | main timeout |
| 13:09:39 | 48 | 33 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 13:09:39 | 49 | 34 | sell 0.003 SOL → USDC | failed | 76s | 1 | main timeout |
| 13:09:39 | 50 | 35 | sell 0.0035 SOL → USDC | failed | 76s | 1 | main timeout |
| 13:09:39 | 51 | 36 | sell 0.004 SOL → USDC | failed | 72s | 1 | main timeout |
| 13:09:39 | 52 | 37 | sell 0.0025 SOL → USDC | failed | 76s | 1 | main timeout |
| 13:09:39 | 53 | 38 | sell 0.003 SOL → USDC | failed | 76s | 1 | main timeout |
| 13:09:39 | 54 | 39 | sell 0.0035 SOL → USDC | failed | 79s | 1 | main timeout |
| 13:09:39 | 55 | 40 | sell 0.004 SOL → USDC | filled | 41s | 1 |  |
| 13:09:39 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 66s | 1 |  |
| 13:09:39 | 57 | 42 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 13:09:39 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 51s | 1 |  |
| 13:09:39 | 59 | 44 | sell 0.004 SOL → USDC | failed | 76s | 1 | main timeout |
| 13:11:09 | 60 | 29 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 13:11:09 | 61 | 30 | sell 0.003 SOL → USDC | failed | 75s | 1 | main timeout |
| 13:11:09 | 62 | 31 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 13:11:09 | 63 | 32 | sell 0.004 SOL → USDC | failed | 81s | 1 | main timeout |
| 13:11:09 | 64 | 33 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 13:11:09 | 65 | 34 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 13:11:09 | 66 | 35 | sell 0.0035 SOL → USDC | failed | 83s | 1 | main timeout |
| 13:11:09 | 67 | 36 | sell 0.004 SOL → USDC | failed | 82s | 1 | main timeout |
| 13:11:09 | 68 | 37 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 13:11:09 | 69 | 38 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 13:11:09 | 70 | 39 | sell 0.0035 SOL → USDC | failed | 81s | 1 | main timeout |
| 13:11:09 | 71 | 40 | sell 0.004 SOL → USDC | failed | 80s | 1 | main timeout |
| 13:11:09 | 72 | 41 | sell 0.0025 SOL → USDC | failed | 83s | 1 | main timeout |
| 13:11:09 | 73 | 42 | sell 0.003 SOL → USDC | failed | 82s | 1 | main timeout |
| 13:11:09 | 74 | 43 | sell 0.0035 SOL → USDC | filled | 56s | 1 |  |
| 13:11:09 | 75 | 44 | sell 0.004 SOL → USDC | failed | 77s | 1 | main timeout |
| 13:11:09 | 76 | 45 | sell 0.0025 SOL → USDC | failed | 75s | 1 | main timeout |
| 13:11:09 | 77 | 46 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 13:11:09 | 78 | 47 | sell 0.0035 SOL → USDC | failed | 84s | 1 | main timeout |
| 13:11:09 | 79 | 48 | sell 0.004 SOL → USDC | filled | 22s | 1 |  |
| 13:11:09 | 80 | 49 | sell 0.0025 SOL → USDC | failed | 73s | 1 | main timeout |
| 13:11:09 | 81 | 50 | sell 0.003 SOL → USDC | failed | 79s | 1 | main timeout |
| 13:11:09 | 82 | 51 | sell 0.0035 SOL → USDC | filled | 10s | 1 |  |
| 13:11:09 | 83 | 52 | sell 0.004 SOL → USDC | filled | 62s | 1 |  |
| 13:12:39 | 84 | 29 | sell 0.0025 SOL → USDC | failed | 80s | 1 | main timeout |
| 13:12:39 | 85 | 30 | sell 0.003 SOL → USDC | failed | 77s | 1 | main timeout |
| 13:12:39 | 86 | 31 | sell 0.0035 SOL → USDC | failed | 86s | 1 | main timeout |
| 13:12:39 | 87 | 32 | sell 0.004 SOL → USDC | failed | 86s | 1 | main timeout |
| 13:12:39 | 88 | 33 | sell 0.0025 SOL → USDC | failed | 81s | 1 | main timeout |
| 13:12:39 | 89 | 34 | sell 0.003 SOL → USDC | failed | 78s | 1 | main timeout |
| 13:12:39 | 90 | 35 | sell 0.0035 SOL → USDC | failed | 86s | 1 | main timeout |
| 13:12:39 | 91 | 36 | sell 0.004 SOL → USDC | failed | 87s | 1 | main timeout |
| 13:12:39 | 92 | 37 | sell 0.0025 SOL → USDC | failed | 81s | 1 | main timeout |
| 13:12:39 | 93 | 38 | sell 0.003 SOL → USDC | failed | 87s | 1 | main timeout |
| 13:12:39 | 94 | 39 | sell 0.0035 SOL → USDC | failed | 87s | 1 | main timeout |
| 13:12:39 | 95 | 40 | sell 0.004 SOL → USDC | failed | 81s | 1 | main timeout |
| 13:12:39 | 96 | 41 | sell 0.0025 SOL → USDC | failed | 86s | 1 | main timeout |
| 13:12:39 | 97 | 42 | sell 0.003 SOL → USDC | failed | 86s | 1 | main timeout |
| 13:12:39 | 98 | 43 | sell 0.0035 SOL → USDC | failed | 85s | 1 | main timeout |
| 13:12:39 | 99 | 44 | sell 0.004 SOL → USDC | failed | 77s | 1 | main timeout |
| 13:12:39 | 100 | 45 | sell 0.0025 SOL → USDC | failed | 78s | 1 | main timeout |
| 13:12:39 | 101 | 46 | sell 0.003 SOL → USDC | failed | 85s | 1 | main timeout |
| 13:12:39 | 102 | 47 | sell 0.0035 SOL → USDC | failed | 85s | 1 | main timeout |
| 13:12:39 | 103 | 48 | sell 0.004 SOL → USDC | failed | 85s | 1 | main timeout |
| 13:12:39 | 104 | 49 | sell 0.0025 SOL → USDC | failed | 85s | 1 | main timeout |
| 13:12:39 | 105 | 50 | sell 0.003 SOL → USDC | failed | 86s | 1 | main timeout |
| 13:12:39 | 106 | 51 | sell 0.0035 SOL → USDC | failed | 87s | 1 | main timeout |
| 13:12:39 | 107 | 52 | sell 0.004 SOL → USDC | failed | 85s | 1 | main timeout |
| 13:12:39 | 108 | 53 | sell 0.0025 SOL → USDC | failed | 79s | 1 | main timeout |
| 13:12:39 | 109 | 54 | sell 0.003 SOL → USDC | filled | 42s | 1 |  |
| 13:12:39 | 110 | 55 | sell 0.0035 SOL → USDC | filled | 64s | 1 |  |
| 13:12:39 | 111 | 56 | sell 0.004 SOL → USDC | filled | 46s | 1 |  |
| 13:12:39 | 112 | 57 | sell 0.0025 SOL → USDC | failed | 85s | 1 | main timeout |
| 13:12:39 | 113 | 58 | sell 0.003 SOL → USDC | failed | 86s | 1 | main timeout |
| 13:12:39 | 114 | 59 | sell 0.0035 SOL → USDC | failed | 86s | 1 | main timeout |
| 13:12:39 | 115 | 60 | sell 0.004 SOL → USDC | filled | 20s | 1 |  |
| 13:17:18 | 116 | 62 | buy 2.6 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:17:18 | 117 | 64 | buy 1.3 USDC ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:17:18 | 118 | 65 | buy 3.1 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:17:18 | 119 | 66 | buy 3.1 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:17:18 | 120 | 67 | buy 1.1 USDT ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:17:18 | 121 | 68 | buy 3.2 USDC ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 13:19:48 | 122 | 61 | sell 0.02 SOL → USDC | failed | 0s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:19:48 | 123 | 62 | buy 0.02 SOL ← USDC | failed | 0s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:19:48 | 124 | 63 | sell 0.03 SOL → USDC | failed | 0s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:19:48 | 125 | 64 | sell 1.2 USDC → SOL | failed | 7s | 0 | acquire USDC quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:19:48 | 126 | 65 | sell 3 USDC → USDT | failed | 7s | 0 | acquire USDC quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:19:48 | 127 | 66 | sell 3 USDT → USDC | failed | 7s | 0 | acquire USDT quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:19:48 | 128 | 67 | sell 1 USDT → USDC | failed | 7s | 0 | acquire USDT quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:19:48 | 129 | 68 | sell 3 USDC → USDT | failed | 7s | 0 | acquire USDC quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:19:48 | 130 | 69 | sell 0.02 SOL → JUP | failed | 1s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:23 | 131 | 70 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 4s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:23 | 132 | 71 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 4s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:23 | 133 | 72 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 4s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:23 | 134 | 73 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 4s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:23 | 135 | 74 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 5s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:23 | 136 | 75 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 5s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:23 | 137 | 76 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 5s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:23 | 138 | 77 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 5s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 139 | 78 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | failed | 5s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 140 | 79 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | failed | 5s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 141 | 80 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 6s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 142 | 81 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | failed | 5s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 143 | 82 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | failed | 6s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 144 | 83 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 6s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 145 | 84 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 6s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 146 | 85 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | failed | 6s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 147 | 86 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 7s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:24 | 148 | 87 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 7s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 149 | 88 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 7s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 150 | 89 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 7s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 151 | 90 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 7s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 152 | 91 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 7s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 153 | 92 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 8s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 154 | 93 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 8s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 155 | 94 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 8s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 156 | 95 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 8s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 157 | 96 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 8s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:25 | 158 | 97 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 9s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:26 | 159 | 98 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 9s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:26 | 160 | 99 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 9s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:26 | 161 | 100 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 9s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:26 | 162 | 101 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 9s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:26 | 163 | 102 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 9s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:26 | 164 | 103 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 10s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:26 | 165 | 104 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 10s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:26 | 166 | 105 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 10s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:26 | 167 | 106 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 10s | 0 | main error: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:27 | 168 | 70 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 0s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:27 | 169 | 71 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 1s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:27 | 170 | 72 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:28 | 171 | 73 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 2s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:28 | 172 | 74 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 2s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:28 | 173 | 75 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 3s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:28 | 174 | 76 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 3s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:28 | 175 | 77 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 4s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:29 | 176 | 78 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 4s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:29 | 177 | 79 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | failed | 5s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:30 | 178 | 80 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 6s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:29 | 179 | 81 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 5s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:30 | 180 | 82 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 6s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:30 | 181 | 83 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 6s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |
| 13:20:30 | 182 | 84 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 6s | 0 | quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 |

### Rows without an order

71 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 | main | 40 | SOL → USDC ×2, SOL → JUP, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx, SOL → Bonk, SOL → $WIF, SOL → POPCAT, SOL → JitoSOL, SOL → mSOL, SOL → JupSOL, SOL → cbBTC, SOL → USDe, SOL → EURC, SOL → USDY, SOL → JLP, SOL → INF, SOL → ETH, SOL → BNB, SOL → XAUt0, SOL → GLDx, SOL → EUROP, SOL → Fartcoin, SOL → MEW, SOL → BOME, SOL → hyloSOL, SOL → PSOL |  |
| <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 | quote | 16 | USDC → SOL, SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → CRCLx, SOL → SPYx, SOL → USDv, SOL → SKHY, SOL → NVDAx, SOL → MU, SOL → SPCX, SOL → SPCXx, SOL → TSLAx |  |
| NoLiquidity | quote | 9 | SOL → USDC ×5, SOL → USDT ×3, JUP → USDC | no route found |
| acquire USDC quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 | acquire | 3 | SOL → USDC ×3 |  |
| acquire USDT quote failed: <html>
<head><title>503 Service Temporarily Unavailable</title></head>
<body>
<center><h1>503 Service Temporarily Unavailable</h1></center>
<hr><center>nginx</center>
</body>
</html>
 | acquire | 2 | SOL → USDT ×2 |  |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |

Scenario orders: 112 (111 main, 1 acquire). Cleanup placed 35 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 13:01:23 | 1 | USDC → SOL (native) | Executed | `0x65c5a072…` [🐞](https://debug.barn.cow.fi/order/0x65c5a072709a5e8fd6afdd4c83e9ecccb799e83077a6bcb8337758c83b2ac767) |
| 13:01:24 | 2 | USDT → SOL (native) | Executed | `0x1d6646b6…` [🐞](https://debug.barn.cow.fi/order/0x1d6646b6477c290394ef5fa7acc52e5b561e6217492e4b9ad7b7b9eafa608b37) |
| 13:01:26 | 3 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xaa524962…` [🐞](https://debug.barn.cow.fi/order/0xaa5249623dc5ed8dc2e761a4fa70515aac3044a0a37c91fa22479eb6ea1dafe7) |
| 13:04:25 | 6 | JUP → SOL (native) | Executed | `0x1cd8f72b…` [🐞](https://debug.barn.cow.fi/order/0x1cd8f72b3b27ac7a0c970a3102e19cd22c48702ec7f65c8c15760c0754dfaff6) |
| 13:04:33 | 12 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xae154ab2…` [🐞](https://debug.barn.cow.fi/order/0xae154ab212f82cc8f12693601a6b3eee533aec39e0921225e9d77fd55ed7e6f1) |
| 13:04:56 | 20 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x19e3b1fd…` [🐞](https://debug.barn.cow.fi/order/0x19e3b1fd5e5c5159497d3918911f78a4b3800a83bd55fecfb4e0f31e854a3af1) |
| 13:04:57 | 21 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x1344a915…` [🐞](https://debug.barn.cow.fi/order/0x1344a9159a295a97a21229981dda56dcf9530e569f5f2f6bcd4f054d5fd006ce) |
| 13:04:59 | 23 | JUP → SOL (native) | Executed | `0x3520cd7b…` [🐞](https://debug.barn.cow.fi/order/0x3520cd7b420339061e060cfbd97185c80662198f20c39d87406c656b9a8acbf5) |
| 13:05:06 | 24 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x1beabf95…` [🐞](https://debug.barn.cow.fi/order/0x1beabf95b595931519f2ca8b70b6124436c84622095f54fa4f67687f93fa0f57) |
| 13:14:10 | 31 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x0fe0272b…` [🐞](https://debug.barn.cow.fi/order/0x0fe0272be2087d9fdec1fba6676f409d55ef72326b2aa9c51fd01cd0d3e6dc50) |
| 13:14:11 | 32 | USDC → SOL (native) | Executed | `0x716e7b93…` [🐞](https://debug.barn.cow.fi/order/0x716e7b93db0f939018afae38d47d8c4de9ed3875365bd2b06fc58d5549060db7) |
| 13:14:13 | 34 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x26cb7caf…` [🐞](https://debug.barn.cow.fi/order/0x26cb7caf04ef0e07d25b3fac2761ad7a8106014afe1e5265593cb072c3c5a107) |
| 13:14:17 | 35 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xf1a86f4e…` [🐞](https://debug.barn.cow.fi/order/0xf1a86f4efd95376ab5d828ecf6aca1d1127acf6bcef5483430c4d5f5a6a6646e) |
| 13:14:19 | 36 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x5014579f…` [🐞](https://debug.barn.cow.fi/order/0x5014579ff7a52bc18059bd8aae863c8a6d01091dc0e99fa2861bb02899aff1e1) |
| 13:14:20 | 29 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x7ff10722…` [🐞](https://debug.barn.cow.fi/order/0x7ff1072280cd224a14c7432179f5a29a23e21b1ebfa79084ea12d9d38300d7e2) |
| 13:14:29 | 40 | USDC → SOL (native) | Executed | `0x0ee6beda…` [🐞](https://debug.barn.cow.fi/order/0x0ee6bedab5ba8befb2ebcd406522638c12ff23ddcf0dbe599c0c45d3c851ef2b) |
| 13:14:31 | 41 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x1cbc3a37…` [🐞](https://debug.barn.cow.fi/order/0x1cbc3a37d74446418c1684a721a5d9cb4dfc52aef81cdab73ed83fdcb1121957) |
| 13:14:37 | 43 | USDC → SOL (native) | Executed | `0xd517a743…` [🐞](https://debug.barn.cow.fi/order/0xd517a74374fc52130b778ee5421b61f2f938bcc1deac2f0c917330a7958c4d3f) |
| 13:15:00 | 48 | USDC → SOL (native) | Executed | `0xa1b31675…` [🐞](https://debug.barn.cow.fi/order/0xa1b31675eb6b39ef8e5368510b8a2240aae3333a6afb62dd2bbf4c8de05f715a) |
| 13:15:12 | 51 | USDC → SOL (native) | Executed | `0xf6d325d8…` [🐞](https://debug.barn.cow.fi/order/0xf6d325d88aab00ffb8df439b5e416b40f4ef2707a779b21ea87346e3612be9ba) |
| 13:15:15 | 52 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x43df56b8…` [🐞](https://debug.barn.cow.fi/order/0x43df56b87146341754d400ef3112245703c9792bafcab84322a650a8f51beb65) |
| 13:15:20 | 54 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x80266a5f…` [🐞](https://debug.barn.cow.fi/order/0x80266a5f8cb8c1402bf0c339b324016cc37b44cd7d24f22b442095c74c718890) |
| 13:15:35 | 55 | USDC → SOL (native) | Executed | `0x3d9fc841…` [🐞](https://debug.barn.cow.fi/order/0x3d9fc84111684d7c7be49f52a7b27d6f97b81a0e4889d15a5911b37679f13e49) |
| 13:15:42 | 56 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xd9726b57…` [🐞](https://debug.barn.cow.fi/order/0xd9726b5714b3aa26eb9fbd5619b9d25c856fce71d59eb8a8e0c933698cc8b181) |
| 13:15:53 | 60 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe388b410…` [🐞](https://debug.barn.cow.fi/order/0xe388b410a54423b7d7c8b87f88bf6fc8d0581ea8a51e53cf1ddad7b562dc973f) |
| 13:22:31 | 12 | JUP → SOL (native) | Executed | `0xd9557854…` [🐞](https://debug.barn.cow.fi/order/0xd9557854bf137fecf4d9cfcabcfe08f1631fe95ea0fb2cbbff6114a1b8eac790) |
| 13:22:32 | 20 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xa0644738…` [🐞](https://debug.barn.cow.fi/order/0xa06447384252944e6a5e9f9dd19843439c9bfca976c38aee55526f31c9f4cc61) |
| 13:22:33 | 21 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x37fa7edb…` [🐞](https://debug.barn.cow.fi/order/0x37fa7edb9875d0b41a387ca629d3558f965a74a00aa578269c10d9d44022d377) |
| 13:22:34 | 24 | JUP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x0be72cf1…` [🐞](https://debug.barn.cow.fi/order/0x0be72cf191382254090317ee6880d0cea7128c9d810ef309f87c5db1da276461) |
| 13:23:51 | 31 | USDC → SOL (native) | Executed | `0x0da4f67b…` [🐞](https://debug.barn.cow.fi/order/0x0da4f67b4c23130b0bd47a4841b44a3be5e76b604e4f72876ac12cb96f4347f4) |
| 13:24:00 | 35 | USDC → SOL (native) | Executed | `0xbb1f6a8b…` [🐞](https://debug.barn.cow.fi/order/0xbb1f6a8b14296c27fe892c01c6e1f60cdb3d5c1692252dd640f2be3f93574154) |
| 13:24:02 | 36 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x85aed82e…` [🐞](https://debug.barn.cow.fi/order/0x85aed82e3448efbeee643c223ebc6dd169c77d634f8eda9a821d5c9d5665db09) |
| 13:24:06 | 52 | USDC → SOL (native) | Executed | `0x429fffb8…` [🐞](https://debug.barn.cow.fi/order/0x429fffb8d75cd96a5351721260790cfcd1b1c5f7ee8f5ddd298d7448adcc4354) |
| 13:24:08 | 56 | USDC → SOL (native) | Executed | `0xe159a907…` [🐞](https://debug.barn.cow.fi/order/0xe159a907f8659043a3ffdc3e1b5b0c85028053eecd43422199c3510bfdada1a5) |
| 13:24:10 | 60 | USDC → SOL (native) | Executed | `0x5e2a3dee…` [🐞](https://debug.barn.cow.fi/order/0x5e2a3dee3cb8c78f0166d5fa74bdf9efda14390acb7683d66966928d2428494f) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| cancelled | 86 | 76.8% |
| executed | 26 | 23.2% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 35s | 49s | 58s | 69s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 6YuF…AyeH | 26 | 100.0% | 26 | 115,697 | 35s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| arc | 872 | 101 | 42 | 41.6% | 3 | 0 | 2 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| arc: SimulationFailed | 3 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 280 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 112 | 26 | 23.2% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 85 | 18 | 21.2% |
| wSOL → JUP | 26 | 7 | 26.9% |
| wSOL → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 5 | 0 | 0.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 5 | 1 | 20.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 5 | 1 | 20.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 5 | 1 | 20.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 4 | 0 | 0.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 4 | 1 | 25.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 4 | 1 | 25.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 4 | 1 | 25.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 3 | 0 | 0.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 3 | 0 | 0.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 3 | 0 | 0.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 3 | 1 | 33.3% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 3 | 1 | 33.3% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 3 | 0 | 0.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 3 | 2 | 66.7% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 3 | 0 | 0.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 2 | 1 | 50.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 2 | 0 | 0.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 2 | 0 | 0.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 2 | 1 | 50.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 2 | 1 | 50.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 0 | 0.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 0 | 0.0% |
| `AeKzwwZupJtSvQmf9PQMsp5c5HiWT1jrKT8mWStqF4sh` | 2 | 0 | 0.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 0 | 0.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 0 | 0.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 0 | 0.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 0 | 0.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 0 | 0.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 0 | 0.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 0 | 0.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 0 | 0.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 0 | 0.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 0 | 0.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 0 | 0.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 0 | 0.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 0 | 0.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 0 | 0.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 0 | 0.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 0 | 0.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 0 | 0.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 0 | 0.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 1 | 0 | 0.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 1 | 1 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 0 | 0.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 0 | 0.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 0 | 0.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 86 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 13:02:59 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x7be50f3b…` [🐞](https://debug.barn.cow.fi/order/0x7be50f3b9a048e7409da14d45d28c054924b717b2e00e2dc55dc92564a1e8510) |
| 13:03:00 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xe1c14a6c…` [🐞](https://debug.barn.cow.fi/order/0xe1c14a6c6ef4f8626c9b8b5f117fde094d361821150522deb1690820392d61cf) |
| 13:03:00 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf3ab4995…` [🐞](https://debug.barn.cow.fi/order/0xf3ab4995b2b914ebf15914a823117c7d5cb8cc563da44cad89536d2b7b90feb1) |
| 13:03:00 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x4070ee17…` [🐞](https://debug.barn.cow.fi/order/0x4070ee1748f5441f8954457c85a598848540274813c822b09bbdbfcfdf2e237d) |
| 13:03:03 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x004406c0…` [🐞](https://debug.barn.cow.fi/order/0x004406c0712496a6744784f65a873baa1c500153240b1dab53a30f7e511c548f) |
| 13:03:03 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x741a2547…` [🐞](https://debug.barn.cow.fi/order/0x741a254747a1933ec026b65517130eaea147c5cbd96739d43a2d90bde3a899a7) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xa08e5efa…` [🐞](https://debug.barn.cow.fi/order/0xa08e5efa85c40951e7b2a78804e4b85d16a0b93a17945780a78f35fabf9da125) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x04be9963…` [🐞](https://debug.barn.cow.fi/order/0x04be996384a8f44d0415c658d2b884c0f68262cd705159c19ef837a882758d54) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x84f50a18…` [🐞](https://debug.barn.cow.fi/order/0x84f50a189e20281d429f3fbc0af693afcfb1b2db950b285c3d7374338f84a1b2) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x23bac478…` [🐞](https://debug.barn.cow.fi/order/0x23bac478fe7b11f91d4a1cd066e532d0693f9c09fee1d55b933378e3f64e2320) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x7d32f389…` [🐞](https://debug.barn.cow.fi/order/0x7d32f389f4f8f190b15bf75f0629db7c2eb74799551b55f56a650e201c49c3f3) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xaf76645b…` [🐞](https://debug.barn.cow.fi/order/0xaf76645b4b1711987a721ea2347886ff6b485b4948bb1e4e6f5a865d6ad75fc0) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xc43534cf…` [🐞](https://debug.barn.cow.fi/order/0xc43534cf2ece783088af3a6ad107a62b8f821ada6ab5eff68c35ff1020beac77) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x43e7e620…` [🐞](https://debug.barn.cow.fi/order/0x43e7e620dabedc1f5eb059069eb4226e3dc8ffc059f35ae6acdc30f61d11823b) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xd5d73ffa…` [🐞](https://debug.barn.cow.fi/order/0xd5d73ffa4aa84f682125f87ebd83535a4d80aa37da148501bafffbab31b49c29) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xc102e16f…` [🐞](https://debug.barn.cow.fi/order/0xc102e16fbe098381e2a783795cef9056636390ba7b2b2a0643a6a7e03c9d047b) |
| 13:03:04 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x92bb9b6e…` [🐞](https://debug.barn.cow.fi/order/0x92bb9b6e6a2bbf1532e3c715c340475478cd1b462ef2c77487b529b0e1dfe18b) |
| 13:03:05 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0xf39a0a58…` [🐞](https://debug.barn.cow.fi/order/0xf39a0a58839f0ad3678b577703c16e3ecb55fb0db60cee48fca72427ffdc5fad) |
| 13:03:05 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x4f99c90e…` [🐞](https://debug.barn.cow.fi/order/0x4f99c90e14a4c27da2747a98abed8a148ffdb5e9808592f4728e070fda288a15) |
| 13:06:41 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x83529fd8…` [🐞](https://debug.barn.cow.fi/order/0x83529fd8c1a27a912e23933d38a2232b637fa642ee1fb5c8199a68ce197aba6c) |
| 13:08:11 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe3055981…` [🐞](https://debug.barn.cow.fi/order/0xe3055981147efe27350b7b233b6fe39f47344a84a6fb0917ae11f2d817388118) |
| 13:08:11 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf3da1b38…` [🐞](https://debug.barn.cow.fi/order/0xf3da1b3820e672ac4f426d261b688486a9a5e27e655e055146e655ef6703736f) |
| 13:08:13 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf3218c2a…` [🐞](https://debug.barn.cow.fi/order/0xf3218c2a316d9ee015ae66e9f32d7948dd65370369caf69f29c7268d9508f120) |
| 13:08:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf749cb7a…` [🐞](https://debug.barn.cow.fi/order/0xf749cb7aa94c49932f552555d27ecb35449de8747b537504b2d882db77bb2ee3) |
| 13:08:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1a25bbc6…` [🐞](https://debug.barn.cow.fi/order/0x1a25bbc6010406002c9eaecabffe3ae3dde4f6959b45fc2d2aab828300379463) |
| 13:09:42 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x84e87cda…` [🐞](https://debug.barn.cow.fi/order/0x84e87cda34d274b116409de6dd5561e0bad3a1bc837f71aa247e736872c1bec6) |
| 13:09:42 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x613f0d5e…` [🐞](https://debug.barn.cow.fi/order/0x613f0d5ea88046353e08b3c11739fa9ffef0b7013a30f46be9dba770c9e96685) |
| 13:09:42 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa9b3e94a…` [🐞](https://debug.barn.cow.fi/order/0xa9b3e94abe08de1de03b6d663d083301ea08bbf3daf910caf06642ce17623c5b) |
| 13:09:42 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8cc2cd1d…` [🐞](https://debug.barn.cow.fi/order/0x8cc2cd1d6802c8ff4bfe3ddf07fceb17c3ce12c9ee683399625149f55b9ae3da) |
| 13:09:43 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb481b9bb…` [🐞](https://debug.barn.cow.fi/order/0xb481b9bbfa6bce78c290a67a27a133f501b89c1809a36d1852f169cd71c0a559) |
| 13:09:43 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x373b892a…` [🐞](https://debug.barn.cow.fi/order/0x373b892a5ecdcd638e182a71310800d94b97f02345bcf645d01ce1a02efdddf8) |
| 13:09:43 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x8ebbb48a…` [🐞](https://debug.barn.cow.fi/order/0x8ebbb48a0634683e0a80b6f3ce3b1a5ff30366bce76d730c1373ab2aa2d34cee) |
| 13:09:44 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x27848e5f…` [🐞](https://debug.barn.cow.fi/order/0x27848e5f351afd111be58a194d0f20e1c7e7708fa5dd86426e0300a69f7754e5) |
| 13:09:44 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0463a662…` [🐞](https://debug.barn.cow.fi/order/0x0463a662ceda92dcaa15221e5618180285ee23cd0d31fc42c9c4c4d2587e8029) |
| 13:09:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x7b540171…` [🐞](https://debug.barn.cow.fi/order/0x7b5401711d2f481d9e55222a9a3638003320d1615fe84756968d901374b10abd) |
| 13:09:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1e029bea…` [🐞](https://debug.barn.cow.fi/order/0x1e029bea0cef135452309e3b1d7be4b2ddeea0a2946c80e4a0d128e305ae1369) |
| 13:09:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa6846b5b…` [🐞](https://debug.barn.cow.fi/order/0xa6846b5b2240b938ab9be3716d5a027d434c9be0b627bdf08c10d0a171215899) |
| 13:09:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6a714494…` [🐞](https://debug.barn.cow.fi/order/0x6a7144948cd76566d1b104b4e26b12ad370e1dd49c57cc02661eac0f76d66012) |
| 13:11:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0a4a1902…` [🐞](https://debug.barn.cow.fi/order/0x0a4a19024661bc0742a28078075f067f6375727034a1864e40c59a06def0d701) |
| 13:11:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc97acf3b…` [🐞](https://debug.barn.cow.fi/order/0xc97acf3b7fd06c77d2230c85e77be7df38c393da601222bd8e52158650753281) |
| 13:11:15 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x74cc952e…` [🐞](https://debug.barn.cow.fi/order/0x74cc952e7b8ea30d2861b4c803224f075cff86f22b4a14a52b3cc0e80e70e7bf) |
| 13:11:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x701e3999…` [🐞](https://debug.barn.cow.fi/order/0x701e39994cc161f5e3d78143250f11bbe11222444f0f47f459882b12b009015c) |
| 13:11:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa81f5af6…` [🐞](https://debug.barn.cow.fi/order/0xa81f5af664d071245e9a9ec2ad9bd7a3adb1ce6b2f49ce8872641346136e85af) |
| 13:11:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x71f1e869…` [🐞](https://debug.barn.cow.fi/order/0x71f1e869220ec3b86e12bd1b8605f42e1706f95aea9a5a44215f03a776dc0d0f) |
| 13:11:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x42775453…` [🐞](https://debug.barn.cow.fi/order/0x427754530ab6258a633614e87eb95d38be1747f5d9cafbb9f10900ca6e567b54) |
| 13:11:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5873d2bd…` [🐞](https://debug.barn.cow.fi/order/0x5873d2bdfe5a0b0a61086acdf2fdab887005f3f8fe82efc6bf77c4b1d4f9c2ce) |
| 13:11:17 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0c87e692…` [🐞](https://debug.barn.cow.fi/order/0x0c87e69241cba9f16da05493375209f3a25f1d3a3cb47cc08128443c2abbbb40) |
| 13:11:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5165c55b…` [🐞](https://debug.barn.cow.fi/order/0x5165c55b93210348c8f8bac492032dc9242b1cff8780b5ec79258525033022fa) |
| 13:11:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa6ff999a…` [🐞](https://debug.barn.cow.fi/order/0xa6ff999a440de94b2dc9093de23bb75f3b13c570277f32cfc41aac8af7443924) |
| 13:11:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfa9aa846…` [🐞](https://debug.barn.cow.fi/order/0xfa9aa8462ca6ce7c7eb7a8bf374252cb3dd29a055cbb5b5587da48c254d4cab3) |
| 13:11:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6c40cef0…` [🐞](https://debug.barn.cow.fi/order/0x6c40cef0f45dc8c45cf36e797a30f271edf2deaa8fa97f8f82d994a34413f0bb) |
| 13:11:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2eb6844a…` [🐞](https://debug.barn.cow.fi/order/0x2eb6844ac0698f725df8768adbc44fb7139878b371a37f2b2025017fc9e355b1) |
| 13:11:18 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xe3db2dc3…` [🐞](https://debug.barn.cow.fi/order/0xe3db2dc324246ced7f2a4fcef3d39c3adfd90f0ec0e043ac1788cc1f678bcbef) |
| 13:11:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa06d609e…` [🐞](https://debug.barn.cow.fi/order/0xa06d609e9988591577686724aca7a97d43e40b97306c6ad37c8c8081d7ee591f) |
| 13:11:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbe2a2fad…` [🐞](https://debug.barn.cow.fi/order/0xbe2a2fad18e6c062725cbed7b7aeaa004cc12046df6558955e741d994d4a6b91) |
| 13:11:19 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x150bb9c2…` [🐞](https://debug.barn.cow.fi/order/0x150bb9c2699ee8c4c1573ec2b8896c896f1ac4a65520317858a11214d65eec51) |
| 13:11:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x026f4238…` [🐞](https://debug.barn.cow.fi/order/0x026f423845bff4d5d3e5d61c2c427273a5cf6dcfa5f1f9b821822d9e08cd2d70) |
| 13:11:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x5c7b8525…` [🐞](https://debug.barn.cow.fi/order/0x5c7b8525507cc141fb20e0a10d218773a798463993624c8cdb7339d28e79b6ab) |
| 13:12:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x896e0118…` [🐞](https://debug.barn.cow.fi/order/0x896e0118dfa1200a682144c275fa7cc4cbb57ba3e995a56f043bd4aba173b02a) |
| 13:12:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x2764f0d2…` [🐞](https://debug.barn.cow.fi/order/0x2764f0d29ac45d1705b22ec5a88617be98cee679062acfd8e7d02270315e3e54) |
| 13:12:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbce1487a…` [🐞](https://debug.barn.cow.fi/order/0xbce1487af8a51ca4cc8e09b4c71d81054b8e2edf343c634228e4bbd64614f631) |
| 13:12:45 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x4b3e4b82…` [🐞](https://debug.barn.cow.fi/order/0x4b3e4b827ea65e23d46220d6fde2ac7c21aaadacd716f05512fe22c87cd03c37) |
| 13:12:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x45765ec3…` [🐞](https://debug.barn.cow.fi/order/0x45765ec33259e269fed20e742604f776eae6f9142be03717962c3cbe6208a797) |
| 13:12:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xca2a021c…` [🐞](https://debug.barn.cow.fi/order/0xca2a021c481be0b0f47fba205221911b22de8c55dd13877ae1c9c5b61b75a60f) |
| 13:12:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x60c6c61e…` [🐞](https://debug.barn.cow.fi/order/0x60c6c61e66427c1025c3acf5b05b147313b7e0cc6ad743027c73d9a879f386e6) |
| 13:12:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x56e864f0…` [🐞](https://debug.barn.cow.fi/order/0x56e864f09bd19dd0b70b451cff9f7c6c16ea5d1232aa1b0e2140cc8fd12f822b) |
| 13:12:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfa37e233…` [🐞](https://debug.barn.cow.fi/order/0xfa37e233d6e2b458d528717b41533a270855ecc652131a03280e545f5013337e) |
| 13:12:46 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xab3d929e…` [🐞](https://debug.barn.cow.fi/order/0xab3d929ea551e09d9b2d05d19166fb1a654697a931da0c72388081a72a1b5189) |
| 13:12:47 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa0088de5…` [🐞](https://debug.barn.cow.fi/order/0xa0088de53e0a60a58b2511517de91b0dd32d859670b29765936f0fc10e8d6ded) |
| 13:12:47 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x412aec89…` [🐞](https://debug.barn.cow.fi/order/0x412aec8935f514c9d7079ae02e2d7dd8e1a9d9c893708db37171b84a4858536c) |
| 13:12:48 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xb609168f…` [🐞](https://debug.barn.cow.fi/order/0xb609168fea34da9605658ec1d610e1b1491e831811e045045bb7ef56a4c2d454) |
| 13:12:48 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x63be8646…` [🐞](https://debug.barn.cow.fi/order/0x63be864636e6cd267d1fc3ead49c6b0d82aa0eb77965a5b7de32be5f202c79f9) |
| 13:12:48 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xf6e52b57…` [🐞](https://debug.barn.cow.fi/order/0xf6e52b578682862421a220748a53f5ee532fff6465a4cdcb24dbf0bf02a83987) |
| 13:12:49 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x515b8e67…` [🐞](https://debug.barn.cow.fi/order/0x515b8e670c253f5ed922c2e4d27a889a3268476fd18d2b99b5fa0e33519f5bcd) |
| 13:12:49 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbd23f61c…` [🐞](https://debug.barn.cow.fi/order/0xbd23f61c75678d434c50d96e0493158ee604941df229f3c6ad3711b32753de72) |
| 13:12:50 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x02563771…` [🐞](https://debug.barn.cow.fi/order/0x02563771b290b6850d4f9f6b1d74d49943a6e1ed4969874878ad8c2451fdadbd) |
| 13:12:50 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x6fba18af…` [🐞](https://debug.barn.cow.fi/order/0x6fba18af7634c93c4f767b5f9c9a7f2b90dac292b29bfeafd767736cd328deee) |
| 13:12:50 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xda454a7a…` [🐞](https://debug.barn.cow.fi/order/0xda454a7acb3fdf46aea330012b140c04fd0dbfa37e6f6df58cf15da48acffa9f) |
| 13:12:50 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x696fa53e…` [🐞](https://debug.barn.cow.fi/order/0x696fa53e5a10fb98dd6efd384fd3077daa36b220391596d6851025fc0d091339) |
| 13:12:51 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xa6795113…` [🐞](https://debug.barn.cow.fi/order/0xa67951134fa16fd1b4222df001e08b21d868e408d35e2697e8af0e3be25f71fd) |
| 13:12:51 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0916dd0c…` [🐞](https://debug.barn.cow.fi/order/0x0916dd0c4ba70955c54f3f87551e975d82e0669f9f568a5bd4a3717618bb83d9) |
| 13:12:51 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbc16b242…` [🐞](https://debug.barn.cow.fi/order/0xbc16b242482f92d3c97f3f04958165b80461cf888c029ccd594d8eae7f3bbcee) |
| 13:12:51 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1b9ef69d…` [🐞](https://debug.barn.cow.fi/order/0x1b9ef69ddeb8c8c082976e9bb1708530a6add1ca45b3cf4c3385f6c237183bde) |
| 13:12:51 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9244f6a4…` [🐞](https://debug.barn.cow.fi/order/0x9244f6a42aef0dee28b59f4de6448e9f48c481085fb58b0b4c527b7c8c707835) |
| 13:12:51 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9a7cb497…` [🐞](https://debug.barn.cow.fi/order/0x9a7cb497a27afae3c8b2fea8d41231a5cce5f513ffa885a08c9a694725f019d6) |
| 13:12:51 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x1404327e…` [🐞](https://debug.barn.cow.fi/order/0x1404327ec760ddce12b571318af735fdc7c9412420e60e72895e550fbb4b46bb) |
