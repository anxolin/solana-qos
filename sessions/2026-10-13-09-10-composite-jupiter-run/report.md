# Solana QoS report: 2026-10-13-09-10-composite-jupiter-run

Prod, orders created between `2026-10-13T09:10:25.254Z` and `2026-10-13T10:04:43.730Z`. Data fetched 2026-10-13T10:12:11+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 156 |
| Orders executed | **154** (98.7%) |
| Sponsored orders never created on-chain | 1 (0.6%) |
| Traders | 67 |
| Settlement txs | 154 |

## Scenario results

Target solver: `jupiter`. Pauses: 60s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-13T09:10:25.254Z | 2026-10-13T09:13:16.055Z | 6/6 | 0 | 8 | 8 | 100.0% |
| receiving-account-costs | 2026-10-13T09:14:37.355Z | 2026-10-13T09:23:37.504Z | 12/16 | 4 | 12 | 12 | 75.0% |
| native-vs-wrapped-payouts | 2026-10-13T09:25:14.404Z | 2026-10-13T09:31:29.669Z | 12/12 | 0 | 12 | 12 | 100.0% |
| amount-precision | 2026-10-13T09:32:47.527Z | 2026-10-13T09:38:29.010Z | 12/12 | 0 | 18 | 18 | 100.0% |
| token-2022-to-token-2022 | 2026-10-13T09:39:57.928Z | 2026-10-13T09:40:43.361Z | 9/10 | 1 | 10 | 9 | 90.0% |
| token-coverage-gaps | 2026-10-13T09:42:16.179Z | 2026-10-13T09:49:28.244Z | 39/43 | 4 | 40 | 39 | 90.7% |
| xstocks | 2026-10-13T09:52:12.967Z | 2026-10-13T09:53:21.975Z | 43/86 | 43 | 44 | 44 | 50.0% |
| failure-isolation | 2026-10-13T09:55:44.382Z | 2026-10-13T10:03:06.046Z | 12/12 | 0 | 12 | 12 | 100.0% |

## Scenario

145 of 197 scenario rows completed. 0 retries, 2 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 09:10:25 | 1 | 1 | sell 0.005 SOL → USDC | filled | 5s | 1 |  |
| 09:10:55 | 2 | 2 | sell 0.005 SOL → USDT | filled | 5s | 1 |  |
| 09:11:25 | 3 | 3 | sell 0.5 JUP → USDC | filled | 16s | 2 |  |
| 09:11:55 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 4s | 1 |  |
| 09:12:25 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 7s | 1 |  |
| 09:12:55 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 21s | 2 |  |
| 09:14:37 | 7 | 4 | sell 0.0025 SOL → USDC | filled | 4s | 1 |  |
| 09:15:07 | 8 | 5 | sell 0.0025 SOL → USDC | filled | 7s | 1 |  |
| 09:15:37 | 9 | 6 | buy 0.25 USDC ← SOL | filled | 7s | 1 |  |
| 09:16:07 | 10 | 7 | buy 0.25 USDC ← SOL | filled | 8s | 1 |  |
| 09:16:37 | 11 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 10s | 1 |  |
| 09:17:07 | 12 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 8s | 1 |  |
| 09:17:37 | 13 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:18:07 | 14 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:20:07 | 15 | 4 | sell 0.0025 SOL → USDC | filled | 4s | 1 |  |
| 09:20:37 | 16 | 5 | sell 0.0025 SOL → USDC | filled | 8s | 1 |  |
| 09:21:07 | 17 | 6 | buy 0.25 USDC ← SOL | filled | 11s | 1 |  |
| 09:21:37 | 18 | 7 | buy 0.25 USDC ← SOL | filled | 11s | 1 |  |
| 09:22:07 | 19 | 8 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 4s | 1 |  |
| 09:22:37 | 20 | 9 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 7s | 1 |  |
| 09:23:07 | 21 | 10 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:23:37 | 22 | 11 | buy 0.25 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:25:14 | 23 | 12 | sell 0.005 SOL → USDC | filled | 7s | 1 |  |
| 09:25:44 | 24 | 13 | sell 0.005 SOL → USDC | filled | 7s | 1 |  |
| 09:26:14 | 25 | 14 | sell 0.005 SOL → USDC | filled | 7s | 1 |  |
| 09:26:44 | 26 | 15 | sell 0.005 SOL → USDC | filled | 5s | 1 |  |
| 09:27:34 | 27 | 12 | sell 0.2 USDC → SOL | filled | 7s | 1 |  |
| 09:28:04 | 28 | 13 | sell 0.2 USDC → wSOL | filled | 10s | 1 |  |
| 09:28:34 | 29 | 14 | sell 0.2 USDC → SOL | filled | 5s | 1 |  |
| 09:29:04 | 30 | 15 | sell 0.2 USDC → wSOL | filled | 8s | 1 |  |
| 09:29:54 | 31 | 12 | buy 0.002 SOL ← USDC | filled | 7s | 1 |  |
| 09:30:24 | 32 | 13 | buy 0.002 wSOL ← USDC | filled | 7s | 1 |  |
| 09:30:54 | 33 | 14 | buy 0.002 SOL ← USDC | filled | 5s | 1 |  |
| 09:31:24 | 34 | 15 | buy 0.002 wSOL ← USDC | filled | 5s | 1 |  |
| 09:32:47 | 35 | 16 | sell 0.002500001 SOL → USDC | filled | 8s | 1 |  |
| 09:33:17 | 36 | 17 | buy 0.002500001 SOL ← USDC | filled | 17s | 2 |  |
| 09:33:47 | 37 | 18 | sell 0.250001 USDC → USDT | filled | 20s | 2 |  |
| 09:34:17 | 38 | 19 | buy 0.250001 USDC ← SOL | filled | 8s | 1 |  |
| 09:34:47 | 39 | 20 | sell 100000.00001 BONK → USDC | filled | 20s | 2 |  |
| 09:35:17 | 40 | 21 | buy 100000.00001 BONK ← SOL | filled | 9s | 1 |  |
| 09:35:47 | 41 | 16 | sell 0.002500002 SOL → USDC | filled | 49s | 1 |  |
| 09:36:17 | 42 | 17 | buy 0.002500002 SOL ← USDC | filled | 17s | 2 |  |
| 09:36:47 | 43 | 18 | sell 0.250002 USDC → USDT | filled | 20s | 2 |  |
| 09:37:17 | 44 | 19 | buy 0.250002 USDC ← SOL | filled | 8s | 1 |  |
| 09:37:47 | 45 | 20 | sell 100000.00002 BONK → USDC | filled | 17s | 2 |  |
| 09:38:17 | 46 | 21 | buy 100000.00002 BONK ← SOL | filled | 11s | 1 |  |
| 09:39:57 | 47 | 22 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 8s | 1 |  |
| 09:39:58 | 48 | 23 | sell 0.0025 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 8s | 1 |  |
| 09:39:58 | 49 | 24 | sell 0.0025 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 8s | 1 |  |
| 09:39:58 | 50 | 25 | sell 0.0025 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 8s | 1 |  |
| 09:39:58 | 51 | 26 | sell 0.0025 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 12s | 1 |  |
| 09:40:05 | 52 | 22 | sell 0.162516 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 4s | 1 |  |
| 09:40:06 | 53 | 23 | sell 0.162498 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 5s | 1 |  |
| 09:40:06 | 54 | 24 | sell 0.162569 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → Ai66LHZG9MCzg1WKdawwqduVAXpNDUuV8M3uyq5ppump | filled | 4s | 1 |  |
| 09:40:06 | 55 | 25 | sell 0.00020765 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU | failed | 36s | 1 | main expired |
| 09:40:10 | 56 | 26 | sell 1.201385 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 7s | 1 |  |
| 09:42:16 | 57 | 27 | sell 0.0025 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 5s | 1 |  |
| 09:42:26 | 58 | 28 | sell 0.0025 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 5s | 1 |  |
| 09:42:36 | 59 | 29 | sell 0.0025 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 5s | 1 |  |
| 09:42:46 | 60 | 30 | sell 0.0025 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 11s | 1 |  |
| 09:42:56 | 61 | 31 | sell 0.0025 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 5s | 1 |  |
| 09:43:06 | 62 | 32 | sell 0.0025 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 5s | 1 |  |
| 09:43:16 | 63 | 33 | sell 0.0025 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 5s | 1 |  |
| 09:43:26 | 64 | 34 | sell 0.0025 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 5s | 1 |  |
| 09:43:36 | 65 | 35 | sell 0.0025 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 14s | 1 |  |
| 09:43:46 | 66 | 36 | sell 0.0025 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 5s | 1 |  |
| 09:43:56 | 67 | 37 | sell 0.0025 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 5s | 1 |  |
| 09:44:06 | 68 | 38 | sell 0.0025 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 5s | 1 |  |
| 09:44:16 | 69 | 39 | sell 0.0025 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 5s | 1 |  |
| 09:44:26 | 70 | 40 | sell 0.0025 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 5s | 1 |  |
| 09:44:36 | 71 | 41 | sell 0.0025 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 21s | 1 |  |
| 09:44:46 | 72 | 27 | buy 1.283394 EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm ← SOL | filled | 6s | 1 |  |
| 09:44:46 | 73 | 42 | sell 0.0025 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 15s | 1 |  |
| 09:44:56 | 74 | 28 | buy 5.856556402 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr ← SOL | filled | 6s | 1 |  |
| 09:44:56 | 75 | 43 | sell 0.0025 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 5s | 1 |  |
| 09:45:06 | 76 | 29 | buy 0.001916358 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn ← SOL | filled | 6s | 1 |  |
| 09:45:06 | 77 | 44 | sell 0.0025 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 5s | 1 |  |
| 09:45:16 | 78 | 30 | buy 0.001771982 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So ← SOL | filled | 6s | 1 |  |
| 09:45:16 | 79 | 45 | sell 0.0025 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 5s | 1 |  |
| 09:45:26 | 80 | 31 | buy 0.002058046 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v ← SOL | filled | 6s | 1 |  |
| 09:45:26 | 81 | 46 | sell 0.0025 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 5s | 1 |  |
| 09:45:36 | 82 | 32 | buy 3.23e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij ← SOL | filled | 6s | 1 |  |
| 09:45:36 | 83 | 47 | buy 4.915718 Ai66LHZG9MCzg1WKdawwqduVAXpNDUuV8M3uyq5ppump ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:45:46 | 84 | 33 | buy 0.270987058 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT ← SOL | filled | 6s | 1 |  |
| 09:45:46 | 85 | 48 | sell 0.0025 SOL → 5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW | failed | 222s | 1 | main timeout |
| 09:45:56 | 86 | 34 | buy 0.242159 HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr ← SOL | filled | 5s | 1 |  |
| 09:46:06 | 87 | 35 | buy 0.235142 A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 ← SOL | filled | 5s | 1 |  |
| 09:46:16 | 88 | 36 | buy 0.058305 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 ← SOL | filled | 5s | 1 |  |
| 09:46:26 | 89 | 37 | buy 0.001718098 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm ← SOL | filled | 5s | 1 |  |
| 09:46:36 | 90 | 38 | buy 0.00010693 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs ← SOL | filled | 5s | 1 |  |
| 09:46:46 | 91 | 39 | buy 0.00036318 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa ← SOL | filled | 8s | 1 |  |
| 09:46:56 | 92 | 40 | buy 6.4e-05 AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P ← SOL | filled | 5s | 1 |  |
| 09:47:06 | 93 | 41 | buy 0.242317 euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:47:16 | 94 | 42 | buy 1.643696 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump ← SOL | filled | 24s | 1 |  |
| 09:47:26 | 95 | 43 | buy 600.28805 MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 ← SOL | filled | 5s | 1 |  |
| 09:47:36 | 96 | 44 | buy 337.283895 ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 ← SOL | filled | 5s | 1 |  |
| 09:47:46 | 97 | 45 | buy 0.002315729 hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT ← SOL | filled | 5s | 1 |  |
| 09:47:56 | 98 | 46 | buy 0.002271161 pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL ← SOL | filled | 6s | 1 |  |
| 09:49:28 | 99 | 48 | buy 6.4e-05 5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:12 | 100 | 49 | sell 0.0025 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 7s | 1 |  |
| 09:52:13 | 101 | 50 | sell 0.0025 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 7s | 1 |  |
| 09:52:13 | 102 | 51 | sell 0.0025 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | filled | 7s | 1 |  |
| 09:52:13 | 103 | 52 | sell 0.0025 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | filled | 9s | 1 |  |
| 09:52:13 | 104 | 53 | sell 0.0025 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | filled | 8s | 1 |  |
| 09:52:13 | 105 | 54 | sell 0.0025 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | filled | 8s | 1 |  |
| 09:52:13 | 106 | 55 | sell 0.0025 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | failed | 5s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 09:52:13 | 107 | 56 | sell 0.0025 SOL → XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM | filled | 9s | 1 |  |
| 09:52:13 | 108 | 57 | sell 0.0025 SOL → XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL | filled | 15s | 1 |  |
| 09:52:14 | 109 | 58 | sell 0.0025 SOL → XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo | filled | 15s | 1 |  |
| 09:52:14 | 110 | 59 | sell 0.0025 SOL → XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh | filled | 13s | 1 |  |
| 09:52:14 | 111 | 60 | sell 0.0025 SOL → XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe | filled | 13s | 1 |  |
| 09:52:14 | 112 | 61 | sell 0.0025 SOL → XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n | filled | 14s | 1 |  |
| 09:52:14 | 113 | 62 | sell 0.0025 SOL → XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB | filled | 14s | 1 |  |
| 09:52:18 | 114 | 55 | sell 0.00078292 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | filled | 49s | 2 |  |
| 09:52:20 | 115 | 49 | buy 0.00321248 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:20 | 116 | 50 | buy 0.00165941 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:20 | 117 | 51 | buy 0.0003632 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:21 | 118 | 52 | buy 0.0004981 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:21 | 119 | 53 | buy 0.00995113 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:21 | 120 | 54 | buy 0.00112024 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:53:07 | 121 | 55 | buy 0.00130486 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:22 | 122 | 56 | buy 0.00270181 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:28 | 123 | 57 | buy 0.00191264 XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:29 | 124 | 58 | buy 0.00076666 XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:26 | 125 | 59 | buy 0.00156561 XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:27 | 126 | 60 | buy 0.00068993 XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:28 | 127 | 61 | buy 0.00702429 XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:28 | 128 | 62 | buy 0.00379726 XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:21 | 129 | 49 | sell 0.0025 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 10s | 1 |  |
| 09:52:22 | 130 | 50 | sell 0.0025 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 10s | 1 |  |
| 09:52:22 | 131 | 51 | sell 0.0025 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | filled | 10s | 1 |  |
| 09:52:24 | 132 | 52 | sell 0.0025 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | filled | 8s | 1 |  |
| 09:52:23 | 133 | 53 | sell 0.0025 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | filled | 7s | 1 |  |
| 09:52:23 | 134 | 54 | sell 0.0025 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | filled | 7s | 1 |  |
| 09:53:07 | 135 | 55 | sell 0.0025 SOL → XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk | filled | 7s | 1 |  |
| 09:52:25 | 136 | 56 | sell 0.0025 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | filled | 11s | 1 |  |
| 09:52:31 | 137 | 57 | sell 0.0025 SOL → XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav | filled | 11s | 1 |  |
| 09:52:32 | 138 | 58 | sell 0.0025 SOL → Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci | filled | 9s | 1 |  |
| 09:52:29 | 139 | 59 | sell 0.0025 SOL → XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF | filled | 7s | 1 |  |
| 09:52:29 | 140 | 60 | sell 0.0025 SOL → XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV | filled | 11s | 1 |  |
| 09:52:30 | 141 | 61 | sell 0.0025 SOL → XsXb7KCxcxTi6hqWfYyEe1kpTwtiCeU5TJbEz8N7RWn | failed | 4s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 09:52:30 | 142 | 62 | sell 0.0025 SOL → Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH | filled | 11s | 1 |  |
| 09:52:31 | 143 | 49 | sell 0.00020765 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 11s | 1 |  |
| 09:52:42 | 144 | 49 | buy 0.00034609 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:32 | 145 | 50 | buy 0.00072217 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:33 | 146 | 51 | buy 0.00036664 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:32 | 147 | 52 | buy 0.00076634 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:30 | 148 | 53 | buy 0.00247816 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:30 | 149 | 54 | buy 0.00104887 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:53:14 | 150 | 55 | buy 0.20269702 XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:36 | 151 | 56 | buy 0.00293543 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:43 | 152 | 57 | buy 0.00028462 XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:40 | 153 | 58 | buy 0.00236142 Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:36 | 154 | 59 | buy 0.00047014 XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF ← SOL | failed | 4s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:41 | 155 | 60 | buy 0.00060557 XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:41 | 156 | 62 | buy 0.00023241 Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:45 | 157 | 49 | sell 0.0025 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 6s | 1 |  |
| 09:52:36 | 158 | 50 | sell 0.0025 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | filled | 14s | 1 |  |
| 09:52:38 | 159 | 51 | sell 0.0025 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 12s | 1 |  |
| 09:52:37 | 160 | 52 | sell 0.0025 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | filled | 10s | 1 |  |
| 09:52:33 | 161 | 53 | sell 0.0025 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | filled | 18s | 1 |  |
| 09:52:34 | 162 | 54 | sell 0.0025 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | filled | 15s | 1 |  |
| 09:53:14 | 163 | 55 | sell 0.0025 SOL → Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy | filled | 7s | 1 |  |
| 09:52:40 | 164 | 56 | sell 0.0025 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | filled | 12s | 1 |  |
| 09:52:46 | 165 | 57 | sell 0.0025 SOL → XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc | filled | 9s | 1 |  |
| 09:52:43 | 166 | 58 | sell 0.0025 SOL → XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL | filled | 7s | 1 |  |
| 09:52:40 | 167 | 59 | sell 0.0025 SOL → XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA | filled | 10s | 1 |  |
| 09:52:44 | 168 | 60 | sell 0.0025 SOL → Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj | filled | 7s | 1 |  |
| 09:52:34 | 169 | 61 | sell 0.0025 SOL → XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU | filled | 18s | 1 |  |
| 09:52:45 | 170 | 62 | sell 0.0025 SOL → XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn | filled | 6s | 1 |  |
| 09:52:50 | 171 | 58 | sell 0.00022735 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL → SOL | filled | 18s | 1 |  |
| 09:52:51 | 172 | 49 | buy 0.00120141 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:51 | 173 | 50 | buy 0.00174356 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:49 | 174 | 51 | buy 0.00070541 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:47 | 175 | 52 | buy 0.00148708 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:51 | 176 | 53 | buy 0.00078968 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:50 | 177 | 54 | buy 0.00248053 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:53:21 | 178 | 55 | buy 0.06056963 Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:52 | 179 | 56 | buy 0.00052262 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:55 | 180 | 57 | buy 0.00172031 XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:53:08 | 181 | 58 | buy 0.00037893 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:50 | 182 | 59 | buy 0.00106586 XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:52 | 183 | 60 | buy 0.00018281 Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:52 | 184 | 61 | buy 0.00170138 XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:52:51 | 185 | 62 | buy 0.01072636 XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 09:55:44 | 186 | 63 | sell 0.0025 SOL → USDC | filled | 5s | 1 |  |
| 09:55:44 | 187 | 64 | buy 0.25 USDC ← SOL | filled | 11s | 1 |  |
| 09:57:14 | 188 | 69 | sell 0.0025 SOL → WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp | filled | 6s | 1 |  |
| 09:57:14 | 189 | 70 | sell 0.0025 SOL → CJMihkPYswa3k6az9SUbepjKnkJQ6KWpGG5p9qW9n7NV | filled | 6s | 1 |  |
| 09:57:14 | 190 | 65 | sell 0.0025 SOL → USDC | filled | 5s | 1 |  |
| 09:57:14 | 191 | 66 | buy 0.25 USDC ← SOL | filled | 15s | 1 |  |
| 09:57:29 | 192 | 67 | sell 0.0025 SOL → USDC | filled | 7s | 1 |  |
| 09:57:29 | 193 | 68 | buy 0.25 USDC ← SOL | filled | 12s | 1 |  |
| 10:02:44 | 194 | 63 | sell 0.0025 SOL → USDC | filled | 6s | 1 |  |
| 10:02:44 | 195 | 64 | buy 0.25 USDC ← SOL | filled | 18s | 1 |  |
| 10:02:44 | 196 | 65 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 10:02:44 | 197 | 66 | buy 0.25 USDC ← SOL | filled | 22s | 1 |  |

### Rows without an order

50 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 48 | SOL → USDG ×4, SOL → CATE, SOL → EUROP, SOL → PAXG, SOL → CRCLx, SOL → SPCXx, SOL → QQQx, SOL → MSFTx, SOL → GMEx, SOL → MCDx, SOL → PLTRx, SOL → INTCx, SOL → ORCLx, SOL → AVGOx, SOL → XOMx, SOL → UNHx, SOL → NVOx, SOL → UBERx, SOL → SPYx, SOL → TSLAx, SOL → METAx, SOL → GOOGLx, SOL → HOODx, SOL → AMZNx, SOL → VIDAx, SOL → KOx, SOL → MUx, SOL → WMTx, SOL → AMDx, SOL → TSMx, SOL → LLYx, SOL → NVDAx, SOL → MSTRx, SOL → GLDx, SOL → COINx, SOL → AAPLx, SOL → STRCx, SOL → DFDVx, SOL → BRK.Bx, SOL → TQQQx, SOL → NFLXx, SOL → MRVLx, SOL → SNDKx, SOL → SKHYx, SOL → BMNRx | no route found |
| NoLiquidity | main | 2 | SOL → PLTRx, SOL → TCENTx | no route found |

Scenario orders: 156 (147 main, 9 acquire). Cleanup placed 113 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 09:13:17 | 1 | USDC → SOL (native) | Executed | `0x6459cfac…` [🐞](https://debug.cow.fi/order/0x6459cfac0535874e101a28d5a864d73eebad157378d46e0dabff7d6a03e34bec) |
| 09:13:19 | 2 | USDT → SOL (native) | Executed | `0xe6c40881…` [🐞](https://debug.cow.fi/order/0xe6c408811ac559f773df62af981da2d10885e5c965a484f302e5b9e7c0866821) |
| 09:13:20 | 3 | USDC → SOL (native) | Executed | `0xd25e91e4…` [🐞](https://debug.cow.fi/order/0xd25e91e4301fc5fa4c528445e07f5904c9f2aa40fe95023db7a26d066c81dcbe) |
| 09:23:39 | 4 | JUP → SOL (native) | Executed | `0x67dd4e4c…` [🐞](https://debug.cow.fi/order/0x67dd4e4cb40817104df27c0d5d22e62ef850a95a29119cf2a192b62d42094f6b) |
| 09:23:40 | 4 | USDC → SOL (native) | Executed | `0x0d68d6ab…` [🐞](https://debug.cow.fi/order/0x0d68d6abc088b2ce296e0284b9d680b3a5324ee652cc69d423d22d93ba098ade) |
| 09:23:42 | 5 | JUP → SOL (native) | Executed | `0x45859299…` [🐞](https://debug.cow.fi/order/0x45859299341c5c3b001e6a0aff9d4bd2ae5d106429acc4b37ba18b7f9eee53f2) |
| 09:23:46 | 5 | USDC → SOL (native) | Executed | `0x9a7250be…` [🐞](https://debug.cow.fi/order/0x9a7250be50d2d763bfc299e7949cc2cd9af5afcd4fceefd081612dceac8f3874) |
| 09:23:46 | 6 | JUP → SOL (native) | Executed | `0x3b4b7c6e…` [🐞](https://debug.cow.fi/order/0x3b4b7c6ed4dbfc1c6ab2078f0b306ec0a1e3e3ffe5105f476e77334be35b2e4e) |
| 09:23:46 | 6 | USDC → SOL (native) | Executed | `0x53064a33…` [🐞](https://debug.cow.fi/order/0x53064a33434fd531138e85761caaaf8691fa3a5fa9ac28806fa7d2c0668df49b) |
| 09:23:47 | 7 | JUP → SOL (native) | Executed | `0xe7bc6444…` [🐞](https://debug.cow.fi/order/0xe7bc644494bd6690349c418d1bd4ebd3eb9828a82332b75e7ec87b229ecb0b3c) |
| 09:23:48 | 7 | USDC → SOL (native) | Executed | `0x6ae3ac54…` [🐞](https://debug.cow.fi/order/0x6ae3ac545c8919dae0c9640e8742e686d459e4c2d9d9d6c1a15868ba7f35c735) |
| 09:23:50 | 8 | USDG → SOL (native) | Executed | `0x23bbfd70…` [🐞](https://debug.cow.fi/order/0x23bbfd70314f2284f5f17361e250aac7bde9908d19b80d7c41e5fef7c399d763) |
| 09:23:50 | 9 | USDG → SOL (native) | Executed | `0xcd44e218…` [🐞](https://debug.cow.fi/order/0xcd44e218a238831661644bb93919c693ebd7b053202175f8a407614011663222) |
| 09:31:32 | 12 | JUP → SOL (native) | Executed | `0xc634bd30…` [🐞](https://debug.cow.fi/order/0xc634bd301325bf1a3c83cceb1b56e405a8ec046b3ee85f094f661a463e62cba8) |
| 09:38:30 | 16 | USDC → SOL (native) | Executed | `0x8cecabf6…` [🐞](https://debug.cow.fi/order/0x8cecabf6d81156f26665b64a1d7d196666f0efe9142c13e1e943cb69d1c6e4d1) |
| 09:38:33 | 18 | USDT → SOL (native) | Executed | `0x01ee6d17…` [🐞](https://debug.cow.fi/order/0x01ee6d17828367aee9478a32a17066b5edea4b440e595370531363ccce5be513) |
| 09:38:34 | 19 | USDC → SOL (native) | Executed | `0x1a13e807…` [🐞](https://debug.cow.fi/order/0x1a13e8074258a00b6370686f0de233af624c17cde00dfc973122673679d3883a) |
| 09:38:35 | 20 | USDC → SOL (native) | Executed | `0xbcb4b24e…` [🐞](https://debug.cow.fi/order/0xbcb4b24e5fe7c88528c3feea91da6b35f53b42606e69d98fb1e59c3f25ffdb76) |
| 09:38:38 | 21 | Bonk → SOL (native) | Executed | `0xaed5e902…` [🐞](https://debug.cow.fi/order/0xaed5e9025febcd20f95ffa6f9ddb35f7fac30618627cb5399654fd6c9d506a55) |
| 09:40:47 | 22 | USDC → SOL (native) | Executed | `0x0b71fc90…` [🐞](https://debug.cow.fi/order/0x0b71fc90b4449a4e636c8da60d190ad4ce7691fcbb3575d34db96eea4d1e132f) |
| 09:40:49 | 25 | SPYx → SOL (native) | Executed | `0x4a6bb510…` [🐞](https://debug.cow.fi/order/0x4a6bb510da6e3fe89447cf686a2b6acef08726d660d13719dfb86254c59b45b2) |
| 09:49:30 | 27 | $WIF → SOL (native) | Executed | `0x689fabae…` [🐞](https://debug.cow.fi/order/0x689fabaedb31b1ee997b4a7f848a188a6067468015621477e0a73c613b9959e7) |
| 09:49:31 | 28 | POPCAT → SOL (native) | Executed | `0x06716184…` [🐞](https://debug.cow.fi/order/0x0671618440eaa3ddcd1df3bb7140b0731c65b42a0442aa9ddc92eff154167725) |
| 09:49:32 | 29 | JitoSOL → SOL (native) | Executed | `0x2962bf23…` [🐞](https://debug.cow.fi/order/0x2962bf23b791e05d7d9bc468779d8dba1e6e4c3e9ae00dded350fca16e737dfe) |
| 09:49:33 | 29 | USDC → SOL (native) | Executed | `0x9f0a03d6…` [🐞](https://debug.cow.fi/order/0x9f0a03d67a2cb5b9088932c2f0dc12681b242375a452d8819b7bc22c34e2cd40) |
| 09:49:35 | 30 | USDC → SOL (native) | Executed | `0xfa5f3934…` [🐞](https://debug.cow.fi/order/0xfa5f393483dc0dd05f0c5adfe41aa49d8bc231014e58fe8e99b7889ccba3ff4c) |
| 09:49:36 | 30 | mSOL → SOL (native) | Executed | `0xc2dba967…` [🐞](https://debug.cow.fi/order/0xc2dba967b08768417910c6728e7bcc6bdf536c8c10820b4182d44fd95ad919fa) |
| 09:49:37 | 31 | JupSOL → SOL (native) | Executed | `0x98f90056…` [🐞](https://debug.cow.fi/order/0x98f900568d251a2a7617d3a9a52713e8a4cd5d0d71b7811148f664546d2d584f) |
| 09:49:38 | 31 | USDC → SOL (native) | Executed | `0x286b0cac…` [🐞](https://debug.cow.fi/order/0x286b0cacf07b11fa4d256946ab08726b26c7a4b31d17d84486c3afd2926240ef) |
| 09:49:42 | 32 | cbBTC → SOL (native) | Executed | `0xc808d080…` [🐞](https://debug.cow.fi/order/0xc808d080632e2dc9b49a3a5a6249b3a0aa692435e63dd4969c59a18c1d8f33cb) |
| 09:49:43 | 32 | USDC → SOL (native) | Executed | `0x94b9742a…` [🐞](https://debug.cow.fi/order/0x94b9742a9f9a03ad8b0b2b45ca46a320338bc81cc708d86e3830f42935744645) |
| 09:49:45 | 33 | USDe → SOL (native) | Executed | `0x064c5046…` [🐞](https://debug.cow.fi/order/0x064c5046a5a948d91c74bcfc74a473305c88a801b5fbade82b839dc2690c14c5) |
| 09:49:45 | 33 | USDC → SOL (native) | Executed | `0x88c16b81…` [🐞](https://debug.cow.fi/order/0x88c16b81547c856ddf8e5c547ee9d0c94626538589e23dbaab41c7481d4a1a21) |
| 09:49:46 | 34 | USDC → SOL (native) | Executed | `0xb14611d6…` [🐞](https://debug.cow.fi/order/0xb14611d60723ffbf8d7e5fbd56deed86a659cf564d943a8da95bec16bbcda94c) |
| 09:49:47 | 34 | EURC → SOL (native) | Executed | `0x5848a1b9…` [🐞](https://debug.cow.fi/order/0x5848a1b9fdb630eaed4fe26c2d1edbbbab2a8718026d3283c73052e79ec5c4ef) |
| 09:49:50 | 35 | USDY → SOL (native) | Executed | `0x7e912000…` [🐞](https://debug.cow.fi/order/0x7e912000c5549612b2e4a9881ba10bd8c8b147f815f0f9faef21fc95d7fb737b) |
| 09:49:51 | 35 | USDC → SOL (native) | Executed | `0x5ae75bee…` [🐞](https://debug.cow.fi/order/0x5ae75beec081dca9762c7a993bdb6a21865b01204f7a39d1d3622b98fe7dfb95) |
| 09:49:51 | 36 | USDC → SOL (native) | Executed | `0x30ab82b8…` [🐞](https://debug.cow.fi/order/0x30ab82b83e910e5a65335a3761a2f6cc1a624586ddcdeb7597ae5270909e541d) |
| 09:49:54 | 36 | JLP → SOL (native) | Executed | `0x7dccaade…` [🐞](https://debug.cow.fi/order/0x7dccaade570c253840827a8c2ed0e45f09dd6c895d83c2d79f9413b16a02a95c) |
| 09:49:58 | 37 | USDC → SOL (native) | Executed | `0x7ca019d0…` [🐞](https://debug.cow.fi/order/0x7ca019d0028398dd05e69b00d86b9ab77b565d6bd7d4f8647713448cea69f430) |
| 09:49:58 | 37 | INF → SOL (native) | Executed | `0xd8e18422…` [🐞](https://debug.cow.fi/order/0xd8e1842253f5b2b93099c87e046f4da996e6be104f76f22f8677f1dcee71b34a) |
| 09:50:00 | 38 | ETH → SOL (native) | Executed | `0xe5f8dc7d…` [🐞](https://debug.cow.fi/order/0xe5f8dc7d5eb045159e19ff7e7243f55b57d47bad24710d0d88911babbea71b14) |
| 09:50:00 | 38 | USDC → SOL (native) | Executed | `0xd065aeb2…` [🐞](https://debug.cow.fi/order/0xd065aeb23eb6c42e8470e6ba2609e90fd3d60cbfa88d3551aa81d23615c0c208) |
| 09:50:04 | 39 | BNB → SOL (native) | Executed | `0x32621025…` [🐞](https://debug.cow.fi/order/0x32621025f5c013fa3d8bc652632e570ecbbe18ae57e8c793685ca3d8616ca7cb) |
| 09:50:05 | 39 | USDC → SOL (native) | Executed | `0x3c4cc599…` [🐞](https://debug.cow.fi/order/0x3c4cc59922270e73b9b473f6b8b260436c5d1116204b8e3c7708ea58502322b7) |
| 09:50:09 | 40 | XAUt0 → SOL (native) | Executed | `0x8b34af7b…` [🐞](https://debug.cow.fi/order/0x8b34af7b9cb123bc93cc2b4f9b7ffac632ee9010b6a2defdb7c81e53f0b6859a) |
| 09:50:09 | 40 | USDC → SOL (native) | Executed | `0xcb73973a…` [🐞](https://debug.cow.fi/order/0xcb73973ae1cb5c83bc5a0f655de83d5be0b6c363ea2c8a9e556c9d83e6460f64) |
| 09:50:09 | 41 | USDC → SOL (native) | Executed | `0xd80794ef…` [🐞](https://debug.cow.fi/order/0xd80794ef3f4228bd0b3aaf7e1f4d9af7c4a8d34d4df830929ea60e52172e2bb5) |
| 09:50:10 | 41 | EUROP → SOL (native) | Executed | `0x9ede63a1…` [🐞](https://debug.cow.fi/order/0x9ede63a11a42e2a4cec4623f031cd38c0157e1def0e49b64476fdba8f2ae0250) |
| 09:50:11 | 42 | Fartcoin → SOL (native) | Executed | `0x6ec8c1e4…` [🐞](https://debug.cow.fi/order/0x6ec8c1e4e7dfef6614b88034325a3dbba7072f4f6cd380631733e96d44a956e6) |
| 09:50:16 | 43 | MEW → SOL (native) | Executed | `0x3e1b3e4f…` [🐞](https://debug.cow.fi/order/0x3e1b3e4f4763536f3695db3157d9a3370312fc1dcd13802a8c10babf099dfb60) |
| 09:50:22 | 44 | BOME → SOL (native) | Executed | `0x1caeebc3…` [🐞](https://debug.cow.fi/order/0x1caeebc37c93fcda7df8a52a08dce0a5b4b2c5a18b8a0ed8502c474c89e67625) |
| 09:50:28 | 45 | hyloSOL → SOL (native) | Executed | `0x4de649f4…` [🐞](https://debug.cow.fi/order/0x4de649f4161c078a7694bdd930e9ee4ef70f49c499a09d8c33a41e14db6615ad) |
| 09:50:30 | 45 | USDC → SOL (native) | Executed | `0x5e599f57…` [🐞](https://debug.cow.fi/order/0x5e599f57ed876575ceeae8df07e1bc2d0eea9bb7a90c446dfda02a1a14506ff3) |
| 09:50:32 | 46 | PSOL → SOL (native) | Executed | `0x01411628…` [🐞](https://debug.cow.fi/order/0x014116280bd0165069c5213f19ea7722dc16305be39d46288ebf6097627003f9) |
| 09:50:34 | 46 | USDC → SOL (native) | Executed | `0xdf2d9549…` [🐞](https://debug.cow.fi/order/0xdf2d95491909e4d212699e0b40d4b71652c36fce7c86d5e929ea9770bf4eb93a) |
| 09:50:35 | 47 | USDC → SOL (native) | Executed | `0xed69cf9f…` [🐞](https://debug.cow.fi/order/0xed69cf9f981417a69edafc4a5f2f7650a2db359ef82fb6069edb050dcd082e18) |
| 09:50:43 | 48 | USDC → SOL (native) | Executed | `0xbf735b56…` [🐞](https://debug.cow.fi/order/0xbf735b5640811fd652b9414ce7bf5105c246a8bd07ba11410fcf124b8feb0131) |
| 09:53:26 | 49 | USDC → SOL (native) | Executed | `0x81d729a6…` [🐞](https://debug.cow.fi/order/0x81d729a6f335505ad422b82da43c64803d5224024b430bc37345fb6f66c35f38) |
| 09:53:27 | 49 | CRCLx → SOL (native) | Executed | `0x3de03b24…` [🐞](https://debug.cow.fi/order/0x3de03b24c375b1c22d121a0950943eee405ddbcdfd5e0bd609cba208c6ac73e2) |
| 09:53:27 | 49 | NVDAx → SOL (native) | Executed | `0xc5a37e8d…` [🐞](https://debug.cow.fi/order/0xc5a37e8d485dda7c2f2ddc5f33611db845e04344d05f0df26bebeba819e2e3c2) |
| 09:53:31 | 50 | TSLAx → SOL (native) | Executed | `0x643eddc3…` [🐞](https://debug.cow.fi/order/0x643eddc3a01d2a1ea7e2d8a76b968934a0152e6d9a6b4e48a34af4458e374cc0) |
| 09:53:31 | 50 | MSTRx → SOL (native) | Executed | `0xc03891cc…` [🐞](https://debug.cow.fi/order/0xc03891ccba73e48d586ce8d150bf8ba3ffb430e657ac4102caa985adcf263568) |
| 09:53:32 | 50 | SPCXx → SOL (native) | Executed | `0x701d4b02…` [🐞](https://debug.cow.fi/order/0x701d4b02494dc1331e06ff514ba10fc7f1ae8a301107c54bab98a656b1343660) |
| 09:53:37 | 51 | QQQx → SOL (native) | Executed | `0xc469f0b1…` [🐞](https://debug.cow.fi/order/0xc469f0b18b71cf295729b0968fb0ada68413a940ddd0b0ebf580513f06e71288) |
| 09:53:38 | 51 | METAx → SOL (native) | Executed | `0x539521aa…` [🐞](https://debug.cow.fi/order/0x539521aaaf1319a5c595e80a2dd381950decdcde5bc11e40bb1a5ef281fde7a2) |
| 09:53:39 | 51 | GLDx → SOL (native) | Executed | `0x9256870b…` [🐞](https://debug.cow.fi/order/0x9256870b755fa4ed16892f88d3184b76d17f965dfe56a8c793009419fb222625) |
| 09:53:42 | 52 | COINx → SOL (native) | Executed | `0x338b9067…` [🐞](https://debug.cow.fi/order/0x338b9067927cb357b570bdd3cef224ec904fee631389685ca6813efe0dc9a22e) |
| 09:53:42 | 52 | GOOGLx → SOL (native) | Executed | `0x044d9399…` [🐞](https://debug.cow.fi/order/0x044d9399a616ab6072596e52f94205fecea7f64effe5b547d6ec7c07adfd6909) |
| 09:53:43 | 52 | MSFTx → SOL (native) | Executed | `0xf2730cab…` [🐞](https://debug.cow.fi/order/0xf2730cab51898499b327b79540b87adfe8a2e6dbe506cad80ab52ff5957d0ef0) |
| 09:53:46 | 53 | USDC → SOL (native) | Executed | `0xde6fd1a6…` [🐞](https://debug.cow.fi/order/0xde6fd1a67eb82f43cd4630b8607304c2856ad93327979db4f4083a1c3e5d4da0) |
| 09:53:46 | 53 | GMEx → SOL (native) | Executed | `0x57b8554b…` [🐞](https://debug.cow.fi/order/0x57b8554b8a3e700c0a3ed75b64f984a66318cd35d7440634f1155549ba696942) |
| 09:53:49 | 53 | HOODx → SOL (native) | Executed | `0xfbeb64a7…` [🐞](https://debug.cow.fi/order/0xfbeb64a79747158fb984718115073fc49db511133f523c7da667ef976d7d0f0a) |
| 09:53:50 | 53 | AAPLx → SOL (native) | Executed | `0x8ce40588…` [🐞](https://debug.cow.fi/order/0x8ce40588d08e6698fb0b22470c1a18d941a21bad85c51100d353645bcbb59729) |
| 09:53:51 | 54 | MCDx → SOL (native) | Executed | `0x0f08f163…` [🐞](https://debug.cow.fi/order/0x0f08f16300a544b8873b13d57aa2ac3770df1bbe66309b17fca35fb4c7c6bfa5) |
| 09:53:52 | 54 | STRCx → SOL (native) | Executed | `0xfc209672…` [🐞](https://debug.cow.fi/order/0xfc209672c6072c15f59454a9e0375be660018f28dc99412d2e0bea30e707b3a1) |
| 09:53:52 | 55 | VIDAx → SOL (native) | Executed | `0x295aa655…` [🐞](https://debug.cow.fi/order/0x295aa65535e55a20ff1de1e050118b414b9dd3f240c9b533adc3e06daebc7601) |
| 09:53:53 | 55 | DFDVx → SOL (native) | Executed | `0xc69459d0…` [🐞](https://debug.cow.fi/order/0xc69459d0059f7729c1eca68a09da88219d305f467b927db1635d8b0552023f34) |
| 09:53:55 | 56 | KOx → SOL (native) | Executed | `0x7753a148…` [🐞](https://debug.cow.fi/order/0x7753a1488e89390188b24f63db4fb79c51d2836de8cd5aca8cc6319ab7cf9ff4) |
| 09:53:56 | 54 | AMZNx → SOL (native) | Executed | `0x42f62b79…` [🐞](https://debug.cow.fi/order/0x42f62b796dc8fcfed4d7b921188c2a78d3e74d6faa3a8e217510b43ac497c2ad) |
| 09:53:56 | 56 | BRK.Bx → SOL (native) | Executed | `0xe8328dc1…` [🐞](https://debug.cow.fi/order/0xe8328dc1eba73d08f4b3ed4ba8d2ccf7828286675e6b22623e40c338b5c414ed) |
| 09:53:56 | 57 | ORCLx → SOL (native) | Executed | `0x3cc8f0fe…` [🐞](https://debug.cow.fi/order/0x3cc8f0fe45d32a5eb8b5738a77e4fa8d5db9854d4a9a55898e71ca6e01d2d5fa) |
| 09:53:56 | 56 | INTCx → SOL (native) | Executed | `0xe9bc0714…` [🐞](https://debug.cow.fi/order/0xe9bc0714784ec65cf8436d374cca33ddf3a6a52eafac8cc1368112bcd0f2e518) |
| 09:53:56 | 58 | USDC → SOL (native) | Executed | `0x021aaf34…` [🐞](https://debug.cow.fi/order/0x021aaf3404cedadf3d8f0eb28de9b29cbd86350af5c9c81641b25e39c9f09258) |
| 09:53:57 | 57 | TQQQx → SOL (native) | Executed | `0x6e636d82…` [🐞](https://debug.cow.fi/order/0x6e636d828f9db9fdc4084ffa60f3252037d872178513722c06491d9b8c094283) |
| 09:53:57 | 58 | AVGOx → SOL (native) | Executed | `0x943a4a3b…` [🐞](https://debug.cow.fi/order/0x943a4a3b1566b912d518fa53526a0ea1cfdf0c917ab452b85f20ef35042d793b) |
| 09:53:57 | 57 | MUx → SOL (native) | Executed | `0xf3860cca…` [🐞](https://debug.cow.fi/order/0xf3860cca7e7b506a0eadda5508a617d08fef4f79bb0d24e6b5fca3117e6ebd90) |
| 09:53:58 | 58 | WMTx → SOL (native) | Executed | `0xe334d6b7…` [🐞](https://debug.cow.fi/order/0xe334d6b72d9862f51bfed2470bf1a17fc5831d3648c8bc95768ceb463f6d2e77) |
| 09:54:02 | 59 | USDC → SOL (native) | Executed | `0x02276f5f…` [🐞](https://debug.cow.fi/order/0x02276f5ff72966d3e2c27a514c80df65f5a522634e9e985912ebb010ef5f5e38) |
| 09:54:02 | 59 | AMDx → SOL (native) | Executed | `0xc34ee53f…` [🐞](https://debug.cow.fi/order/0xc34ee53fb116e0f4debf6497a1b9bab90a0881145957219f1277c1a1f0de3d5a) |
| 09:54:03 | 59 | XOMx → SOL (native) | Executed | `0x2f487ff7…` [🐞](https://debug.cow.fi/order/0x2f487ff7726f767b4a1c888e85bf0a796d32af35e4313b365169cbf287d954c4) |
| 09:54:04 | 60 | USDC → SOL (native) | Executed | `0xe5961486…` [🐞](https://debug.cow.fi/order/0xe5961486bac87512fe1fac075098175e3fb33a5b7cee9c36c871ff2f2fe2e6bb) |
| 09:54:04 | 60 | TSMx → SOL (native) | Executed | `0x1e5eb748…` [🐞](https://debug.cow.fi/order/0x1e5eb748ecd5d04edcb0e78f14d4b64c77e93eddb23df44baa1fe6dc624f0385) |
| 09:54:05 | 60 | UNHx → SOL (native) | Executed | `0x34cb89a0…` [🐞](https://debug.cow.fi/order/0x34cb89a0c51f3f017a16feb666baaa46f55acf9edb3cf376351f83ccff758abe) |
| 09:54:05 | 60 | SNDKx → SOL (native) | Executed | `0x92a86f1a…` [🐞](https://debug.cow.fi/order/0x92a86f1ae93f1ba8ec65cc2fab41c7ba58ff9d75bf829159dcb051d61735b927) |
| 09:54:05 | 59 | MRVLx → SOL (native) | Executed | `0x1c36f62a…` [🐞](https://debug.cow.fi/order/0x1c36f62a357cf6bd51740a51dfc5618fd26d1ae8884dca5266324192f9ec45b3) |
| 09:54:20 | 61 | NVOx → SOL (native) | Executed | `0xa4c417c2…` [🐞](https://debug.cow.fi/order/0xa4c417c20067a5103f5f88f7e8637ba190b06cda53ed1ae340cfdaeb6ac38bcf) |
| 09:54:20 | 61 | SKHYx → SOL (native) | Executed | `0x382dd539…` [🐞](https://debug.cow.fi/order/0x382dd539464da344720dba409d90a67d4b70807525967788814600c0b4b6c1c3) |
| 09:54:21 | 61 | ANSEM → SOL (native) | Executed | `0x0101611e…` [🐞](https://debug.cow.fi/order/0x0101611e36f01c2e5c7e6b9a6681552e6ef9e92e94ea804e774bac00874e50e8) |
| 09:54:23 | 62 | BMNRx → SOL (native) | Executed | `0x094ac200…` [🐞](https://debug.cow.fi/order/0x094ac200f84f5a2da1cc3f251b26e4edb807eb9fb9ff7d1b6ac2ce4249c6861c) |
| 09:54:24 | 62 | UBERx → SOL (native) | Executed | `0xf5801b88…` [🐞](https://debug.cow.fi/order/0xf5801b882691cf87fddeeb529079d8f9aa86f0e24b47b3e10fcc7d1c03f48b9d) |
| 09:54:25 | 62 | PAID → SOL (native) | Executed | `0xa93ae5e3…` [🐞](https://debug.cow.fi/order/0xa93ae5e3c21b7b271ab411fb0354cc01598a718fdc7b28692407dcca30ef986d) |
| 09:54:25 | 62 | LLYx → SOL (native) | Executed | `0xbbdc5900…` [🐞](https://debug.cow.fi/order/0xbbdc59000a3fac20f476bcae649a3c455eb849c953163eef2a989bb0c4c828b2) |
| 10:03:08 | 63 | USDC → SOL (native) | Executed | `0x92ee552a…` [🐞](https://debug.cow.fi/order/0x92ee552ad232799d58a35278f841be94aafab2eee0b337ca7a0c5705d092c691) |
| 10:03:09 | 63 | USDG → SOL (native) | Executed | `0xf2143e89…` [🐞](https://debug.cow.fi/order/0xf2143e892b717581461161c8aa6248d907d23d74cd713fba7dd6d1ca412cd4bd) |
| 10:03:10 | 64 | USDC → SOL (native) | Executed | `0x54e86858…` [🐞](https://debug.cow.fi/order/0x54e86858327036ba81d957709ab50e674e5e4951e95721196fe0f0a74eef30e8) |
| 10:03:11 | 64 | PUMP → SOL (native) | Executed | `0xc8b99839…` [🐞](https://debug.cow.fi/order/0xc8b99839453f6048e2d83a3c2bf6b3d2a7746160c14b5460648897b9b4b43289) |
| 10:03:15 | 65 | USDC → SOL (native) | Executed | `0x0fe5dd81…` [🐞](https://debug.cow.fi/order/0x0fe5dd8140537f10ddc96e3969d5e8a67e58f5c90a6a8915b4e14893f09b827b) |
| 10:03:15 | 66 | USDC → SOL (native) | Executed | `0x8410e966…` [🐞](https://debug.cow.fi/order/0x8410e966bfa1007d2ec5ab3faf6c22b3ba855d6921ccf7fab6af60d53424ddd6) |
| 10:03:15 | 67 | USDC → SOL (native) | Executed | `0xb9b8e811…` [🐞](https://debug.cow.fi/order/0xb9b8e811f322d9673abaee816635684dfcf2f4b38a10fcfe292506e806168191) |
| 10:03:16 | 69 | XMR → SOL (native) | Executed | `0x94ef820f…` [🐞](https://debug.cow.fi/order/0x94ef820f92d8f06bee3bf16409e4260eeab5f2699516676aa83d1fd43b0bcb25) |
| 10:03:16 | 70 | LIKE → SOL (native) | Executed | `0xe130f158…` [🐞](https://debug.cow.fi/order/0xe130f158b3f202ac521753dc6969c75ac9582f1dc78260551c9c47bdbcf09f40) |
| 10:03:17 | 68 | USDC → SOL (native) | Executed | `0xb41c1e83…` [🐞](https://debug.cow.fi/order/0xb41c1e836efdd67af66021e487fb99fe3b42aa94117219f80a352a846d576647) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 154 | 98.7% |
| expired: never created on-chain (no settlement before blockhash expiry) | 1 | 0.6% |
| cancelled | 1 | 0.6% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 3s | 5s | 8s | 44s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 154 | 100.0% | 154 | 109,292 | 3s |

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 115 | 113 | 98.3% |
| buy | 41 | 41 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 32 | 32 | 100.0% |
| USDC → SOL (native) | 6 | 6 | 100.0% |
| wSOL → USDG | 5 | 5 | 100.0% |
| USDC → wSOL | 4 | 4 | 100.0% |
| wSOL → Bonk | 4 | 4 | 100.0% |
| wSOL → USDT | 2 | 2 | 100.0% |
| wSOL → JUP | 2 | 2 | 100.0% |
| JUP → USDC | 2 | 2 | 100.0% |
| USDC → USDT | 2 | 2 | 100.0% |
| Bonk → USDC | 2 | 2 | 100.0% |
| wSOL → SPYx | 2 | 2 | 100.0% |
| wSOL → $WIF | 2 | 2 | 100.0% |
| wSOL → POPCAT | 2 | 2 | 100.0% |
| wSOL → JitoSOL | 2 | 2 | 100.0% |
| wSOL → mSOL | 2 | 2 | 100.0% |
| wSOL → JupSOL | 2 | 2 | 100.0% |
| wSOL → cbBTC | 2 | 2 | 100.0% |
| wSOL → USDe | 2 | 2 | 100.0% |
| wSOL → EURC | 2 | 2 | 100.0% |
| wSOL → USDY | 2 | 2 | 100.0% |
| wSOL → JLP | 2 | 2 | 100.0% |
| wSOL → INF | 2 | 2 | 100.0% |
| wSOL → ETH | 2 | 2 | 100.0% |
| wSOL → BNB | 2 | 2 | 100.0% |
| wSOL → XAUt0 | 2 | 2 | 100.0% |
| wSOL → Fartcoin | 2 | 2 | 100.0% |
| wSOL → MEW | 2 | 2 | 100.0% |
| wSOL → BOME | 2 | 2 | 100.0% |
| wSOL → hyloSOL | 2 | 2 | 100.0% |
| wSOL → PSOL | 2 | 2 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| USDG → PUMP | 1 | 1 | 100.0% |
| PYUSD → PAID | 1 | 1 | 100.0% |
| CASH → CATE | 1 | 1 | 100.0% |
| SPYx → e/acc | 1 | 0 | 0.0% |
| ANSEM → CRCLx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → PAXG | 1 | 0 | 0.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| wSOL → QQQx | 1 | 1 | 100.0% |
| wSOL → GMEx | 1 | 1 | 100.0% |
| wSOL → MSFTx | 1 | 1 | 100.0% |
| wSOL → MCDx | 1 | 1 | 100.0% |
| wSOL → INTCx | 1 | 1 | 100.0% |
| wSOL → ORCLx | 1 | 1 | 100.0% |
| wSOL → AVGOx | 1 | 1 | 100.0% |
| wSOL → UNHx | 1 | 1 | 100.0% |
| wSOL → XOMx | 1 | 1 | 100.0% |
| wSOL → NVOx | 1 | 1 | 100.0% |
| wSOL → UBERx | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| wSOL → METAx | 1 | 1 | 100.0% |
| wSOL → HOODx | 1 | 1 | 100.0% |
| wSOL → AMZNx | 1 | 1 | 100.0% |
| wSOL → GOOGLx | 1 | 1 | 100.0% |
| wSOL → KOx | 1 | 1 | 100.0% |
| wSOL → PLTRx | 1 | 1 | 100.0% |
| wSOL → AMDx | 1 | 1 | 100.0% |
| wSOL → TSMx | 1 | 1 | 100.0% |
| wSOL → LLYx | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MUx | 1 | 1 | 100.0% |
| wSOL → WMTx | 1 | 1 | 100.0% |
| wSOL → AAPLx | 1 | 1 | 100.0% |
| wSOL → SKHYx | 1 | 1 | 100.0% |
| wSOL → STRCx | 1 | 1 | 100.0% |
| wSOL → MSTRx | 1 | 1 | 100.0% |
| PLTRx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → COINx | 1 | 1 | 100.0% |
| wSOL → MRVLx | 1 | 1 | 100.0% |
| wSOL → BRK.Bx | 1 | 1 | 100.0% |
| wSOL → NFLXx | 1 | 1 | 100.0% |
| wSOL → BMNRx | 1 | 1 | 100.0% |
| wSOL → SNDKx | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| wSOL → TQQQx | 1 | 1 | 100.0% |
| NFLXx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → VIDAx | 1 | 1 | 100.0% |
| wSOL → DFDVx | 1 | 1 | 100.0% |
| wSOL → XMR | 1 | 1 | 100.0% |
| wSOL → LIKE | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 4 | 4 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 4 | 4 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 4 | 4 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 4 | 4 | 100.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 4 | 4 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 4 | 4 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 4 | 4 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 3 | 3 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 3 | 3 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 3 | 3 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 3 | 3 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 3 | 3 | 100.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 3 | 3 | 100.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 3 | 3 | 100.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 3 | 3 | 100.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 3 | 3 | 100.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 3 | 3 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 3 | 3 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 3 | 3 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 3 | 3 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 3 | 3 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 2 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 2 | 2 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 2 | 2 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 2 | 2 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 2 | 2 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 2 | 2 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 2 | 2 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 2 | 2 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 2 | 2 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 2 | 2 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 2 | 2 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 2 | 2 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 2 | 2 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 2 | 1 | 50.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 2 | 2 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 2 | 2 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 2 | 2 | 100.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 2 | 2 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 2 | 2 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 2 | 2 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 2 | 2 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 2 | 2 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 2 | 2 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 2 | 2 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 2 | 2 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 2 | 2 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 2 | 2 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 2 | 2 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 2 | 2 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 2 | 2 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 2 | 2 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 2 | 2 | 100.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 2 | 100.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 2 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 2 | 2 | 100.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 2 | 100.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 2 | 100.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 2 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 1 | 1 | 100.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 1 | 0 | 0.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 1 | 100.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 1 | 100.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 1 | 1 | 100.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| No settlement before creation blockhash expired | 1 |
| Not filled within fill timeout (cancelled by sim) | 1 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 09:40:08 | SPYx → e/acc | sell | No settlement before creation blockhash expired | `0xc6f82275…` [🐞](https://debug.cow.fi/order/0xc6f82275f5cf373b483a467718f1842f37286da57f1bfadd611073cd7ed6e619) |
| 09:45:47 | wSOL → PAXG | sell | Not filled within fill timeout (cancelled by sim) | `0x4d6049c8…` [🐞](https://debug.cow.fi/order/0x4d6049c8f8d9bc5fab1d3e8dae675d41e59915f028a0532dad48c1708b6f4498) |
