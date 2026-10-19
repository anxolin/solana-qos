# Solana QoS report: 2026-10-17-12-04-composite-jupiter-run

Barn, orders created between `2026-10-17T12:05:19.769Z` and `2026-10-17T12:45:12.328Z`. Data fetched 2026-10-17T12:45:54+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 147 |
| Orders executed | **27** (18.4%) |
| Sponsored orders never created on-chain | 57 (38.8%) |
| Traders | 69 |
| Settlement txs | 27 |

## Scenario results

Target solver: `jupiter`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-10-17T12:05:19.769Z | 2026-10-17T12:06:56.383Z | 3/6 | 3 | 7 | 4 | 50.0% |
| solver-fresh-accounts | 2026-10-17T12:08:32.450Z | 2026-10-17T12:09:47.718Z | 1/8 | 7 | 8 | 1 | 12.5% |
| native-vs-wrapped-payouts | 2026-10-17T12:10:40.063Z | 2026-10-17T12:13:15.267Z | 5/12 | 7 | 14 | 7 | 41.7% |
| amount-precision | 2026-10-17T12:13:55.683Z | 2026-10-17T12:16:32.736Z | 3/12 | 9 | 12 | 3 | 25.0% |
| token-2022-to-token-2022 | 2026-10-17T12:17:32.699Z | 2026-10-17T12:18:54.937Z | 1/10 | 9 | 10 | 1 | 10.0% |
| token-coverage-gaps | 2026-10-17T12:19:43.468Z | 2026-10-17T12:22:29.422Z | 5/43 | 38 | 40 | 5 | 11.6% |
| xstocks | 2026-10-17T12:24:44.733Z | 2026-10-17T12:28:19.101Z | 1/86 | 85 | 44 | 1 | 1.2% |
| failure-isolation | 2026-10-17T12:29:22.930Z | 2026-10-17T12:37:12.745Z | 5/12 | 7 | 12 | 5 | 41.7% |

## Scenario

24 of 189 scenario rows completed. 0 retries, 1 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 12:05:19 | 1 | 1 | sell 0.005 SOL → USDC | failed | 72s | 1 | main timeout |
| 12:05:19 | 2 | 2 | sell 0.005 SOL → USDT | failed | 69s | 1 | main timeout |
| 12:05:19 | 3 | 3 | sell 0.5 JUP → USDC | failed | 78s | 1 | acquire JUP timeout |
| 12:06:31 | 4 | 1 | buy 0.25 USDC ← SOL | filled | 10s | 1 |  |
| 12:06:29 | 5 | 2 | buy 0.25 USDT ← SOL | filled | 7s | 1 |  |
| 12:06:38 | 6 | 3 | buy 0.25 USDC ← JUP | filled | 18s | 2 |  |
| 12:08:32 | 7 | 4 | sell 0.1 SOL → USDC | failed | 74s | 1 | main timeout |
| 12:08:32 | 8 | 5 | sell 0.1 SOL → USDC | failed | 38s | 1 | main expired |
| 12:08:32 | 9 | 6 | buy 10 USDC ← SOL | failed | 75s | 1 | main timeout |
| 12:08:32 | 10 | 7 | buy 10 USDC ← SOL | failed | 40s | 1 | main expired |
| 12:08:32 | 11 | 8 | sell 0.1 SOL → USDT | filled | 14s | 1 |  |
| 12:08:32 | 12 | 9 | sell 0.1 SOL → USDT | failed | 42s | 1 | main expired |
| 12:08:32 | 13 | 10 | buy 10 USDT ← SOL | failed | 73s | 1 | main timeout |
| 12:08:32 | 14 | 11 | buy 10 USDT ← SOL | failed | 41s | 1 | main expired |
| 12:10:40 | 15 | 12 | sell 0.005 SOL → USDC | failed | 35s | 1 | main expired |
| 12:10:40 | 16 | 13 | sell 0.005 SOL → USDC | failed | 36s | 1 | main expired |
| 12:10:40 | 17 | 14 | sell 0.005 SOL → USDC | failed | 72s | 1 | main timeout |
| 12:10:40 | 18 | 15 | sell 0.005 SOL → USDC | filled | 41s | 1 |  |
| 12:11:15 | 19 | 12 | sell 0.2 USDC → SOL | failed | 42s | 1 | acquire USDC expired |
| 12:11:16 | 20 | 13 | sell 0.2 USDC → wSOL | failed | 42s | 1 | acquire USDC expired |
| 12:11:51 | 21 | 14 | sell 0.2 USDC → SOL | filled | 66s | 2 |  |
| 12:11:20 | 22 | 15 | sell 0.2 USDC → wSOL | filled | 43s | 1 |  |
| 12:11:57 | 23 | 12 | buy 0.002 SOL ← USDC | failed | 43s | 1 | acquire USDC expired |
| 12:11:58 | 24 | 13 | buy 0.002 wSOL ← USDC | failed | 44s | 1 | acquire USDC expired |
| 12:12:57 | 25 | 14 | buy 0.002 SOL ← USDC | filled | 18s | 2 |  |
| 12:12:04 | 26 | 15 | buy 0.002 wSOL ← USDC | filled | 47s | 1 |  |
| 12:13:55 | 27 | 16 | sell 0.002500001 SOL → USDC | filled | 7s | 1 |  |
| 12:13:55 | 28 | 17 | buy 0.002500001 SOL ← USDC | failed | 79s | 1 | acquire USDC timeout |
| 12:13:55 | 29 | 18 | sell 0.250001 USDC → USDT | failed | 77s | 1 | acquire USDC timeout |
| 12:13:55 | 30 | 19 | buy 0.250001 USDC ← SOL | filled | 11s | 1 |  |
| 12:13:55 | 31 | 20 | sell 100000.00001 BONK → USDC | failed | 78s | 1 | acquire BONK timeout |
| 12:13:55 | 32 | 21 | buy 100000.00001 BONK ← SOL | failed | 72s | 1 | main timeout |
| 12:14:02 | 33 | 16 | sell 0.002500002 SOL → USDC | failed | 70s | 1 | main timeout |
| 12:15:14 | 34 | 17 | buy 0.002500002 SOL ← USDC | failed | 78s | 1 | acquire USDC timeout |
| 12:15:12 | 35 | 18 | sell 0.250002 USDC → USDT | failed | 76s | 1 | acquire USDC timeout |
| 12:14:06 | 36 | 19 | buy 0.250002 USDC ← SOL | failed | 70s | 1 | main timeout |
| 12:15:13 | 37 | 20 | sell 100000.00002 BONK → USDC | failed | 78s | 1 | acquire BONK timeout |
| 12:15:07 | 38 | 21 | buy 100000.00002 BONK ← SOL | filled | 9s | 1 |  |
| 12:17:32 | 39 | 22 | sell 0.0025 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 36s | 1 | main expired |
| 12:17:32 | 40 | 23 | sell 0.0025 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 8s | 1 |  |
| 12:17:32 | 41 | 24 | sell 0.0025 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | failed | 36s | 1 | main expired |
| 12:17:32 | 42 | 25 | sell 0.0025 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 37s | 1 | main expired |
| 12:17:32 | 43 | 26 | sell 0.0025 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | failed | 37s | 1 | main expired |
| 12:18:08 | 44 | 22 | sell 0.162516 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | failed | 42s | 1 | acquire 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH expired |
| 12:17:40 | 45 | 23 | sell 0.162498 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | failed | 37s | 1 | main expired |
| 12:18:09 | 46 | 24 | sell 0.162569 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH → Ai66LHZG9MCzg1WKdawwqduVAXpNDUuV8M3uyq5ppump | failed | 46s | 1 | acquire CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH expired |
| 12:18:09 | 47 | 25 | sell 0.00020765 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → CbcyNo7m1amFWqEQm2m4PLv1UNvpcL3C1Ujm6AkzpKoU | failed | 44s | 1 | acquire XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W expired |
| 12:18:10 | 48 | 26 | sell 1.201385 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | failed | 44s | 1 | acquire 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump expired |
| 12:19:43 | 49 | 27 | sell 0.0025 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | failed | 78s | 1 | main timeout |
| 12:19:43 | 50 | 28 | sell 0.0025 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | failed | 77s | 1 | main timeout |
| 12:19:43 | 51 | 29 | sell 0.0025 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | failed | 76s | 1 | main timeout |
| 12:19:43 | 52 | 30 | sell 0.0025 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | failed | 72s | 1 | main timeout |
| 12:19:43 | 53 | 31 | sell 0.0025 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | failed | 72s | 1 | main timeout |
| 12:19:43 | 54 | 32 | sell 0.0025 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | failed | 76s | 1 | main timeout |
| 12:19:43 | 55 | 33 | sell 0.0025 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | failed | 76s | 1 | main timeout |
| 12:19:43 | 56 | 34 | sell 0.0025 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | failed | 77s | 1 | main timeout |
| 12:19:43 | 57 | 35 | sell 0.0025 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | failed | 78s | 1 | main timeout |
| 12:19:43 | 58 | 36 | sell 0.0025 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | failed | 79s | 1 | main timeout |
| 12:19:43 | 59 | 37 | sell 0.0025 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | failed | 83s | 1 | main timeout |
| 12:19:43 | 60 | 38 | sell 0.0025 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | failed | 84s | 1 | main timeout |
| 12:19:43 | 61 | 39 | sell 0.0025 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | failed | 81s | 1 | main timeout |
| 12:19:43 | 62 | 40 | sell 0.0025 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | failed | 82s | 1 | main timeout |
| 12:19:43 | 63 | 41 | sell 0.0025 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | failed | 85s | 1 | main timeout |
| 12:19:43 | 64 | 42 | sell 0.0025 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | failed | 86s | 1 | main timeout |
| 12:19:43 | 65 | 43 | sell 0.0025 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | failed | 83s | 1 | main timeout |
| 12:19:43 | 66 | 44 | sell 0.0025 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | failed | 83s | 1 | main timeout |
| 12:19:43 | 67 | 45 | sell 0.0025 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | failed | 84s | 1 | main timeout |
| 12:19:43 | 68 | 46 | sell 0.0025 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | failed | 85s | 1 | main timeout |
| 12:19:43 | 69 | 47 | buy 4.915718 Ai66LHZG9MCzg1WKdawwqduVAXpNDUuV8M3uyq5ppump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:19:43 | 70 | 48 | sell 0.0025 SOL → 5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW | failed | 86s | 1 | main timeout |
| 12:21:01 | 71 | 27 | buy 1.283394 EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm ← SOL | failed | 73s | 1 | main timeout |
| 12:21:00 | 72 | 28 | buy 5.856556402 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr ← SOL | failed | 75s | 1 | main timeout |
| 12:20:59 | 73 | 29 | buy 0.001916358 J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn ← SOL | failed | 79s | 1 | main timeout |
| 12:20:54 | 74 | 30 | buy 0.001771982 mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So ← SOL | filled | 13s | 1 |  |
| 12:20:55 | 75 | 31 | buy 0.002058046 jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v ← SOL | filled | 17s | 1 |  |
| 12:20:59 | 76 | 32 | buy 3.23e-06 cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij ← SOL | filled | 12s | 1 |  |
| 12:20:59 | 77 | 33 | buy 0.270987058 DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT ← SOL | failed | 79s | 1 | main timeout |
| 12:21:00 | 78 | 34 | buy 0.242159 HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr ← SOL | filled | 17s | 1 |  |
| 12:21:01 | 79 | 35 | buy 0.235142 A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 ← SOL | failed | 78s | 1 | main timeout |
| 12:21:02 | 80 | 36 | buy 0.058305 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 ← SOL | filled | 14s | 1 |  |
| 12:21:06 | 81 | 37 | buy 0.001718098 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm ← SOL | failed | 79s | 1 | main timeout |
| 12:21:07 | 82 | 38 | buy 0.00010693 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs ← SOL | failed | 80s | 1 | main timeout |
| 12:21:04 | 83 | 39 | buy 0.00036318 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa ← SOL | failed | 76s | 1 | main timeout |
| 12:21:05 | 84 | 40 | buy 6.4e-05 AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P ← SOL | failed | 76s | 1 | main timeout |
| 12:21:08 | 85 | 41 | buy 0.242317 euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:21:09 | 86 | 42 | buy 1.643696 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump ← SOL | failed | 77s | 1 | main timeout |
| 12:21:06 | 87 | 43 | buy 600.28805 MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 ← SOL | failed | 76s | 1 | main timeout |
| 12:21:06 | 88 | 44 | buy 337.283895 ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 ← SOL | failed | 79s | 1 | main timeout |
| 12:21:07 | 89 | 45 | buy 0.002315729 hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT ← SOL | failed | 82s | 1 | main timeout |
| 12:21:08 | 90 | 46 | buy 0.002271161 pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL ← SOL | failed | 77s | 1 | main timeout |
| 12:21:09 | 91 | 48 | buy 6.4e-05 5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW ← SOL | failed | 5s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:24:44 | 92 | 49 | sell 0.0025 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 9s | 1 |  |
| 12:24:44 | 93 | 50 | sell 0.0025 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 38s | 1 | main expired |
| 12:24:44 | 94 | 51 | sell 0.0025 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | failed | 38s | 1 | main expired |
| 12:24:44 | 95 | 52 | sell 0.0025 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | failed | 72s | 1 | main timeout |
| 12:24:44 | 96 | 53 | sell 0.0025 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | failed | 39s | 1 | main expired |
| 12:24:44 | 97 | 54 | sell 0.0025 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | failed | 39s | 1 | main expired |
| 12:24:44 | 98 | 55 | sell 0.0025 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | failed | 41s | 1 | main expired |
| 12:24:44 | 99 | 56 | sell 0.0025 SOL → XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM | failed | 74s | 1 | main timeout |
| 12:24:44 | 100 | 57 | sell 0.0025 SOL → XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL | failed | 41s | 1 | main expired |
| 12:24:44 | 101 | 58 | sell 0.0025 SOL → XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo | failed | 41s | 1 | main expired |
| 12:24:44 | 102 | 59 | sell 0.0025 SOL → XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh | failed | 40s | 1 | main expired |
| 12:24:44 | 103 | 60 | sell 0.0025 SOL → XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe | failed | 75s | 1 | main timeout |
| 12:24:44 | 104 | 61 | sell 0.0025 SOL → XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n | failed | 43s | 1 | main expired |
| 12:24:44 | 105 | 62 | sell 0.0025 SOL → XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB | failed | 44s | 1 | main expired |
| 12:25:25 | 106 | 55 | sell 0.00078292 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | failed | 44s | 1 | acquire XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 expired |
| 12:24:53 | 107 | 49 | buy 0.00321248 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:22 | 108 | 50 | buy 0.00165941 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:22 | 109 | 51 | buy 0.0003632 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:56 | 110 | 52 | buy 0.0004981 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:23 | 111 | 53 | buy 0.00995113 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:24 | 112 | 54 | buy 0.00112024 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:09 | 113 | 55 | buy 0.00130486 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:58 | 114 | 56 | buy 0.00270181 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:25 | 115 | 57 | buy 0.00191264 XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:26 | 116 | 58 | buy 0.00076666 XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:24 | 117 | 59 | buy 0.00156561 XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:59 | 118 | 60 | buy 0.00068993 XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:28 | 119 | 61 | buy 0.00702429 XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n ← SOL | failed | 2s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:28 | 120 | 62 | buy 0.00379726 XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:24:53 | 121 | 49 | sell 0.0025 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 37s | 1 | main expired |
| 12:25:22 | 122 | 50 | sell 0.0025 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 37s | 1 | main expired |
| 12:25:23 | 123 | 51 | sell 0.0025 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | failed | 37s | 1 | main expired |
| 12:25:56 | 124 | 52 | sell 0.0025 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | failed | 70s | 1 | main timeout |
| 12:25:24 | 125 | 53 | sell 0.0025 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | failed | 37s | 1 | main expired |
| 12:25:25 | 126 | 54 | sell 0.0025 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | failed | 39s | 1 | main expired |
| 12:26:09 | 127 | 55 | sell 0.0025 SOL → XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk | failed | 35s | 1 | main expired |
| 12:25:58 | 128 | 56 | sell 0.0025 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | failed | 69s | 1 | main timeout |
| 12:25:26 | 129 | 57 | sell 0.0025 SOL → XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav | failed | 38s | 1 | main expired |
| 12:25:27 | 130 | 58 | sell 0.0025 SOL → Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci | failed | 38s | 1 | main expired |
| 12:25:25 | 131 | 59 | sell 0.0025 SOL → XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF | failed | 35s | 1 | main expired |
| 12:26:00 | 132 | 60 | sell 0.0025 SOL → XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV | failed | 70s | 1 | main timeout |
| 12:25:29 | 133 | 61 | sell 0.0025 SOL → XsXb7KCxcxTi6hqWfYyEe1kpTwtiCeU5TJbEz8N7RWn | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:25:30 | 134 | 62 | sell 0.0025 SOL → Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH | failed | 37s | 1 | main expired |
| 12:25:30 | 135 | 49 | sell 0.00020765 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | failed | 40s | 1 | acquire XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W expired |
| 12:26:10 | 136 | 49 | buy 0.00034609 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:25:59 | 137 | 50 | buy 0.00072217 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:00 | 138 | 51 | buy 0.00036664 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:27:06 | 139 | 52 | buy 0.00076634 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:02 | 140 | 53 | buy 0.00247816 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:03 | 141 | 54 | buy 0.00104887 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:44 | 142 | 55 | buy 0.20269702 XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:27:07 | 143 | 56 | buy 0.00293543 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:05 | 144 | 57 | buy 0.00028462 XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:05 | 145 | 58 | buy 0.00236142 Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:01 | 146 | 59 | buy 0.00047014 XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:27:09 | 147 | 60 | buy 0.00060557 XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:07 | 148 | 62 | buy 0.00023241 Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:10 | 149 | 49 | sell 0.0025 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 35s | 1 | main expired |
| 12:25:59 | 150 | 50 | sell 0.0025 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | failed | 38s | 1 | main expired |
| 12:26:01 | 151 | 51 | sell 0.0025 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 37s | 1 | main expired |
| 12:27:06 | 152 | 52 | sell 0.0025 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | failed | 71s | 1 | main timeout |
| 12:26:03 | 153 | 53 | sell 0.0025 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | failed | 37s | 1 | main expired |
| 12:26:04 | 154 | 54 | sell 0.0025 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | failed | 40s | 1 | main expired |
| 12:26:45 | 155 | 55 | sell 0.0025 SOL → Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy | failed | 35s | 1 | main expired |
| 12:27:07 | 156 | 56 | sell 0.0025 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | failed | 70s | 1 | main timeout |
| 12:26:05 | 157 | 57 | sell 0.0025 SOL → XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc | failed | 37s | 1 | main expired |
| 12:26:06 | 158 | 58 | sell 0.0025 SOL → XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL | failed | 36s | 1 | main expired |
| 12:26:02 | 159 | 59 | sell 0.0025 SOL → XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA | failed | 37s | 1 | main expired |
| 12:27:09 | 160 | 60 | sell 0.0025 SOL → Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj | failed | 69s | 1 | main timeout |
| 12:25:30 | 161 | 61 | sell 0.0025 SOL → XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU | failed | 37s | 1 | main expired |
| 12:26:07 | 162 | 62 | sell 0.0025 SOL → XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn | failed | 36s | 1 | main expired |
| 12:26:42 | 163 | 58 | sell 0.00022735 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL → SOL | failed | 42s | 1 | acquire XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL expired |
| 12:26:45 | 164 | 49 | buy 0.00120141 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:37 | 165 | 50 | buy 0.00174356 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:38 | 166 | 51 | buy 0.00070541 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:28:18 | 167 | 52 | buy 0.00148708 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:39 | 168 | 53 | buy 0.00078968 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:44 | 169 | 54 | buy 0.00248053 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:27:20 | 170 | 55 | buy 0.06056963 Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:28:17 | 171 | 56 | buy 0.00052262 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:41 | 172 | 57 | buy 0.00172031 XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:27:24 | 173 | 58 | buy 0.00037893 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:39 | 174 | 59 | buy 0.00106586 XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:28:18 | 175 | 60 | buy 0.00018281 Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:07 | 176 | 61 | buy 0.00170138 XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:26:43 | 177 | 62 | buy 0.01072636 XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:29:22 | 178 | 63 | sell 0.0025 SOL → USDC | filled | 9s | 1 |  |
| 12:29:22 | 179 | 64 | buy 0.25 USDC ← SOL | filled | 17s | 1 |  |
| 12:29:52 | 180 | 69 | sell 0.0025 SOL → WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp | failed | 71s | 1 | main timeout |
| 12:29:52 | 181 | 70 | sell 0.0025 SOL → CJMihkPYswa3k6az9SUbepjKnkJQ6KWpGG5p9qW9n7NV | failed | 70s | 1 | main timeout |
| 12:29:52 | 182 | 65 | sell 0.0025 SOL → USDC | failed | 70s | 1 | main timeout |
| 12:29:52 | 183 | 66 | buy 0.25 USDC ← SOL | failed | 35s | 1 | main expired |
| 12:30:07 | 184 | 67 | sell 0.0025 SOL → USDC | failed | 34s | 1 | main expired |
| 12:30:07 | 185 | 68 | buy 0.25 USDC ← SOL | filled | 55s | 1 |  |
| 12:36:22 | 186 | 63 | sell 0.0025 SOL → USDC | filled | 44s | 1 |  |
| 12:36:22 | 187 | 64 | buy 0.25 USDC ← SOL | failed | 37s | 1 | main expired |
| 12:36:22 | 188 | 65 | sell 0.0025 SOL → USDC | filled | 50s | 1 |  |
| 12:36:22 | 189 | 66 | buy 0.25 USDC ← SOL | failed | 38s | 1 | main expired |

### Rows without an order

45 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 44 | SOL → CATE, SOL → EUROP, SOL → PAXG, SOL → CRCLx, SOL → SPCXx, SOL → QQQx, SOL → MSFTx, SOL → GMEx, SOL → MCDx, SOL → PLTRx, SOL → INTCx, SOL → ORCLx, SOL → AVGOx, SOL → XOMx, SOL → UNHx, SOL → NVOx, SOL → UBERx, SOL → SPYx, SOL → TSLAx, SOL → METAx, SOL → GOOGLx, SOL → HOODx, SOL → AMZNx, SOL → VIDAx, SOL → KOx, SOL → MUx, SOL → WMTx, SOL → AMDx, SOL → TSMx, SOL → LLYx, SOL → NVDAx, SOL → MSTRx, SOL → GLDx, SOL → COINx, SOL → AAPLx, SOL → STRCx, SOL → DFDVx, SOL → BRK.Bx, SOL → TQQQx, SOL → NFLXx, SOL → MRVLx, SOL → SNDKx, SOL → SKHYx, SOL → BMNRx | no route found |
| NoLiquidity | main | 1 | SOL → TCENTx | no route found |

Scenario orders: 147 (126 main, 21 acquire). Cleanup placed 28 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 12:06:58 | 1 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xa04161d3…` [🐞](https://debug.barn.cow.fi/order/0xa04161d3e6cda25201ffaaf7483343250f47c3e3e14fd015dd84197b901e3f0a) |
| 12:06:59 | 2 | USDT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x00874584…` [🐞](https://debug.barn.cow.fi/order/0x00874584e709b587a1dd210b06a65fda3af6efb164d89ae452ef0bb15d7f5f87) |
| 12:07:01 | 3 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xffe316da…` [🐞](https://debug.barn.cow.fi/order/0xffe316da36c4ec2cfc9ee8dd61bf26c6f96f51f325f8e92d4ae400b0a6213e32) |
| 12:09:54 | 8 | USDT → SOL (native) | Executed | `0x7eb346a7…` [🐞](https://debug.barn.cow.fi/order/0x7eb346a753dd241b88a1c9ea9ddaec8387356d83a62945223cc2c4f341dec20c) |
| 12:16:34 | 16 | USDC → SOL (native) | Executed | `0xea717281…` [🐞](https://debug.barn.cow.fi/order/0xea717281ad3e00b6e2bf8e5b83204f9dd3bfa0358f640133fd725e1e537da7f1) |
| 12:16:38 | 19 | USDC → SOL (native) | Executed | `0x2e71eb80…` [🐞](https://debug.barn.cow.fi/order/0x2e71eb8099f506333e6bfa3d1685ac7467e35bd94a3926b3e1bdcca7e9dc6f95) |
| 12:16:42 | 21 | Bonk → SOL (native) | Executed | `0xce7a93d5…` [🐞](https://debug.barn.cow.fi/order/0xce7a93d554c977c0912addf69af40f19102b94666fb560d00fb262a4b562a148) |
| 12:18:57 | 23 | PYUSD → SOL (native) | Executed | `0x297b3e23…` [🐞](https://debug.barn.cow.fi/order/0x297b3e23aa65ef3540e8aa29cb05fd40d68bc2b965f106327a6cd100bc8725af) |
| 12:22:34 | 30 | mSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x07c3e296…` [🐞](https://debug.barn.cow.fi/order/0x07c3e29648df268c317844776061ef40058f13d3f6c8a146b97d8f7e07cf8aaf) |
| 12:22:36 | 31 | JupSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xcd756259…` [🐞](https://debug.barn.cow.fi/order/0xcd7562599596b1e714fa01d2f15480c48a2f54c6f2d2c009f1aec3ea98756f33) |
| 12:22:39 | 32 | cbBTC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x3b3a2a89…` [🐞](https://debug.barn.cow.fi/order/0x3b3a2a8942f19df6843ad67004085240d5b810a30eb8a777aad274d3b8340fc1) |
| 12:22:41 | 34 | EURC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xc3e96d06…` [🐞](https://debug.barn.cow.fi/order/0xc3e96d0645c35b7d220e1f09353f3a0c34960fda9666f0d56350f9de0d5817d5) |
| 12:22:44 | 36 | JLP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x22ffae21…` [🐞](https://debug.barn.cow.fi/order/0x22ffae2104220394738119d73739ba60e52965227473373db2826e47538332c2) |
| 12:23:17 | 48 | PAXG → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x4fe4c2a1…` [🐞](https://debug.barn.cow.fi/order/0x4fe4c2a1413be1823f76d542f41cbdcb945376f36db17fd9c6ae2da11d522fff) |
| 12:28:21 | 49 | CRCLx → SOL (native) | Executed | `0xef18aa9e…` [🐞](https://debug.barn.cow.fi/order/0xef18aa9ea77d2f1f3699fbda336ec30b696e2364994aba9438077210aec8ec77) |
| 12:37:15 | 64 | USDC → SOL (native) | Executed | `0x0add706c…` [🐞](https://debug.barn.cow.fi/order/0x0add706c52b6052cdf068798f8cf4f3b9ae7285af3af6f78292ef7e1ff8a197c) |
| 12:37:16 | 65 | USDC → SOL (native) | Executed | `0x9d6c0ea5…` [🐞](https://debug.barn.cow.fi/order/0x9d6c0ea50ac2e00ea0ae241839e784ecb613249cebd2634f5a71568fa0b085b6) |
| 12:37:19 | 68 | USDC → SOL (native) | Executed | `0x9fdaaf20…` [🐞](https://debug.barn.cow.fi/order/0x9fdaaf202bb39466dfac49a92a1d698d579a839ccc9cf5ed79b98eaa723701d9) |
| 12:37:24 | 63 | USDC → SOL (native) | Executed | `0x21352fdf…` [🐞](https://debug.barn.cow.fi/order/0x21352fdf8babadc6a8befc914df476e2a36f9d98164ee55d71e18976a17466f3) |
| 12:39:29 | 1 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x095eb99e…` [🐞](https://debug.barn.cow.fi/order/0x095eb99ebc2b54b4f66103a50c7e89d80386d9b7408adccccde2c56b99e89b48) |
| 12:39:30 | 2 | USDT → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x683fde96…` [🐞](https://debug.barn.cow.fi/order/0x683fde96ba693c02a2a3d2111b4fcba8fb0de9969296d78d124d318d9c9c884e) |
| 12:39:32 | 3 | USDC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xbf967f2a…` [🐞](https://debug.barn.cow.fi/order/0xbf967f2add8220faa88fe7492f5457e3490a7a565398134149f3e3015f141804) |
| 12:41:57 | 30 | mSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xde988334…` [🐞](https://debug.barn.cow.fi/order/0xde988334c57087a9f24acee8008fcdfcc13b22666f23f1600a2cc26b306d6295) |
| 12:41:58 | 31 | JupSOL → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xb5a65e52…` [🐞](https://debug.barn.cow.fi/order/0xb5a65e521882188a66efc57be4f2dc7b5da8038e926930b92dbf17f390392f02) |
| 12:41:59 | 32 | cbBTC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xe409127e…` [🐞](https://debug.barn.cow.fi/order/0xe409127ee44b5cfe94e3e04a06a31aa6b7be35ba94373a531ea798752a06c9d5) |
| 12:42:00 | 34 | EURC → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0xdc7b009b…` [🐞](https://debug.barn.cow.fi/order/0xdc7b009b743cbb52a1d816da86fb26de145102ea36637779661a8f1f3be9f53e) |
| 12:42:01 | 36 | JLP → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x2c10569b…` [🐞](https://debug.barn.cow.fi/order/0x2c10569b103a29a3c4b5fd78583b7a14687f25439cc707d0b7095b780928abb4) |
| 12:42:02 | 48 | PAXG → SOL (native) | Not filled within fill timeout (cancelled by sim) | `0x81fe34f1…` [🐞](https://debug.barn.cow.fi/order/0x81fe34f199d21f890f03c66173326a0a8a10251966c3f23d5d61921b431b73c7) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| cancelled | 63 | 42.9% |
| expired: never created on-chain (winner found, creation blockhash expired) | 57 | 38.8% |
| executed | 27 | 18.4% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 36s | 44s | 51s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 27 | 100.0% | 27 | 92,923 | 6s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 42 | 42 | 37 | 88.1% | 4 | 2 | 80 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: PriorityFeeTooHigh | 3 |
| jupiter-solve: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 467 times
- Orders filtered for `in_flight`: 1 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 110 | 13 | 11.8% |
| market buy | 37 | 14 | 37.8% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 34 | 11 | 32.4% |
| wSOL → USDT | 6 | 2 | 33.3% |
| wSOL → Bonk | 4 | 1 | 25.0% |
| wSOL → SPYx | 4 | 0 | 0.0% |
| wSOL → JUP | 2 | 1 | 50.0% |
| USDC → wSOL | 2 | 2 | 100.0% |
| USDC → SOL (native) | 2 | 2 | 100.0% |
| wSOL → USDG | 2 | 0 | 0.0% |
| wSOL → CASH | 2 | 0 | 0.0% |
| wSOL → ANSEM | 2 | 0 | 0.0% |
| wSOL → $WIF | 2 | 0 | 0.0% |
| wSOL → POPCAT | 2 | 0 | 0.0% |
| wSOL → JitoSOL | 2 | 0 | 0.0% |
| wSOL → mSOL | 2 | 1 | 50.0% |
| wSOL → JupSOL | 2 | 1 | 50.0% |
| wSOL → USDe | 2 | 0 | 0.0% |
| wSOL → cbBTC | 2 | 1 | 50.0% |
| wSOL → EURC | 2 | 1 | 50.0% |
| wSOL → USDY | 2 | 0 | 0.0% |
| wSOL → JLP | 2 | 1 | 50.0% |
| wSOL → INF | 2 | 0 | 0.0% |
| wSOL → ETH | 2 | 0 | 0.0% |
| wSOL → BNB | 2 | 0 | 0.0% |
| wSOL → XAUt0 | 2 | 0 | 0.0% |
| wSOL → MEW | 2 | 0 | 0.0% |
| wSOL → Fartcoin | 2 | 0 | 0.0% |
| wSOL → BOME | 2 | 0 | 0.0% |
| wSOL → hyloSOL | 2 | 0 | 0.0% |
| wSOL → PSOL | 2 | 0 | 0.0% |
| wSOL → PLTRx | 2 | 0 | 0.0% |
| wSOL → NFLXx | 2 | 0 | 0.0% |
| JUP → USDC | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| PYUSD → PAID | 1 | 0 | 0.0% |
| wSOL → EUROP | 1 | 0 | 0.0% |
| wSOL → PAXG | 1 | 0 | 0.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 0 | 0.0% |
| wSOL → QQQx | 1 | 0 | 0.0% |
| wSOL → GMEx | 1 | 0 | 0.0% |
| wSOL → MSFTx | 1 | 0 | 0.0% |
| wSOL → MCDx | 1 | 0 | 0.0% |
| wSOL → INTCx | 1 | 0 | 0.0% |
| wSOL → ORCLx | 1 | 0 | 0.0% |
| wSOL → AVGOx | 1 | 0 | 0.0% |
| wSOL → UNHx | 1 | 0 | 0.0% |
| wSOL → XOMx | 1 | 0 | 0.0% |
| wSOL → NVOx | 1 | 0 | 0.0% |
| wSOL → UBERx | 1 | 0 | 0.0% |
| wSOL → TSLAx | 1 | 0 | 0.0% |
| wSOL → METAx | 1 | 0 | 0.0% |
| wSOL → HOODx | 1 | 0 | 0.0% |
| wSOL → AMZNx | 1 | 0 | 0.0% |
| wSOL → AMDx | 1 | 0 | 0.0% |
| wSOL → MUx | 1 | 0 | 0.0% |
| wSOL → WMTx | 1 | 0 | 0.0% |
| wSOL → LLYx | 1 | 0 | 0.0% |
| wSOL → SKHYx | 1 | 0 | 0.0% |
| wSOL → GOOGLx | 1 | 0 | 0.0% |
| wSOL → KOx | 1 | 0 | 0.0% |
| wSOL → MSTRx | 1 | 0 | 0.0% |
| wSOL → TSMx | 1 | 0 | 0.0% |
| wSOL → GLDx | 1 | 0 | 0.0% |
| wSOL → MRVLx | 1 | 0 | 0.0% |
| wSOL → AAPLx | 1 | 0 | 0.0% |
| wSOL → STRCx | 1 | 0 | 0.0% |
| wSOL → TQQQx | 1 | 0 | 0.0% |
| wSOL → BMNRx | 1 | 0 | 0.0% |
| wSOL → VIDAx | 1 | 0 | 0.0% |
| wSOL → NVDAx | 1 | 0 | 0.0% |
| wSOL → DFDVx | 1 | 0 | 0.0% |
| wSOL → COINx | 1 | 0 | 0.0% |
| wSOL → BRK.Bx | 1 | 0 | 0.0% |
| wSOL → SNDKx | 1 | 0 | 0.0% |
| wSOL → LIKE | 1 | 0 | 0.0% |
| wSOL → XMR | 1 | 0 | 0.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 5 | 4 | 80.0% |
| `D5Juw1hxgQcRm8k4L6kZTXXuysQpQpYU72he3YaiSWtF` | 4 | 1 | 25.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 4 | 0 | 0.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 4 | 0 | 0.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 3 | 2 | 66.7% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 3 | 0 | 0.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 3 | 0 | 0.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 3 | 3 | 100.0% |
| `Dp2XHbRAJAhtPbgTrKn3NgJ8hVxAef1yV9HkGMMd1C2Q` | 3 | 0 | 0.0% |
| `CWoGeyfDCmjDaxLAEnA28wQoG4KDdcayk5HqmSQJTvdM` | 3 | 0 | 0.0% |
| `J5t3FmpcjEgxEebw78WJu3PrijvoqsAB3Vo191eJYuGk` | 3 | 0 | 0.0% |
| `5AXJiRJCiKJpMarrSA7bTMJHPaSyavftQWrUY4YWrb14` | 3 | 0 | 0.0% |
| `CAqpqVSnDjnxm7JAXkdDCSKYHuUgW4qxH4eAK7Zn721D` | 3 | 0 | 0.0% |
| `8sLLQ8SdVL1u4jZcoZJ2DswkEuAzfSE839eE1SdpoJM` | 3 | 0 | 0.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 3 | 0 | 0.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 3 | 0 | 0.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 3 | 0 | 0.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 3 | 0 | 0.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 2 | 1 | 50.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 2 | 1 | 50.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 2 | 1 | 50.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 2 | 1 | 50.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 2 | 1 | 50.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 2 | 0 | 0.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 2 | 0 | 0.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 2 | 0 | 0.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 2 | 0 | 0.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 2 | 1 | 50.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 2 | 0 | 0.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 2 | 0 | 0.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 2 | 0 | 0.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 2 | 0 | 0.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 2 | 0 | 0.0% |
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 2 | 0 | 0.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 2 | 1 | 50.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 2 | 1 | 50.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 2 | 0 | 0.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 2 | 1 | 50.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 2 | 1 | 50.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 2 | 0 | 0.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 2 | 1 | 50.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 2 | 0 | 0.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 2 | 0 | 0.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 2 | 0 | 0.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 2 | 0 | 0.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 2 | 0 | 0.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 2 | 0 | 0.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 2 | 0 | 0.0% |
| `2JhA5W8ziaCa6uANLkdjHgY3BHA4Fj1NoH3o3evqRJGR` | 2 | 0 | 0.0% |
| `49k3agouaq3H4yXJUnYS3PXDsU3jNYTBhbge9ndbTEAQ` | 2 | 0 | 0.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 2 | 0 | 0.0% |
| `7jYGYMsm3ipmFNLNamB84rrLyup7i7gB5pZVjWocwc7W` | 2 | 2 | 100.0% |
| `4vAqJJF6zCDEa29XZ39VVcyVhLHJCxs8ZQDS9j9rXbiQ` | 2 | 1 | 50.0% |
| `5T2E4usQc2Z3DmDJHFF3h1fJjpy7NrL1riJy3dfpTxWV` | 2 | 1 | 50.0% |
| `CkNoDeh153FSoPFiYxt5xGoeKpc6WuCNkU64w3BckgsT` | 2 | 0 | 0.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 0 | 0.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 0 | 0.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 0 | 0.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 0 | 0.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 0 | 0.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 0 | 0.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 0 | 0.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 1 | 0 | 0.0% |
| `5qt5EyzAo1rsdbsi2qocJXnZWikSqypN6prtjmGpMtJM` | 1 | 0 | 0.0% |
| `2XrPQ9zfrfmFkyEuAd7524oXBusFTzE8CE3Y4JrtSrg8` | 1 | 0 | 0.0% |
| `CoJJmRcAf9fJ8YyJoUknTEc2dccS2rp2hVtBNCwQe5Tv` | 1 | 0 | 0.0% |
| `EjqmXqD3n5EzT53NXU1vV3n1j8LRYJ2EGMYJXzy3Zjc2` | 1 | 0 | 0.0% |
| `F43yfDYsNr97Bd7PH4qgbSR3hAUDLYJw2j3RZjkTYzyt` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Not filled within fill timeout (cancelled by sim) | 63 | 0 |
| Winner too late: creation blockhash expired | 56 | 0 |
| Settlement too large for one transaction | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 12:05:21 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x676829c7…` [🐞](https://debug.barn.cow.fi/order/0x676829c7a9e0b4da0191ee65aa7c4a7c6d3aeaa9b55999715ec1de210069c6f7) |
| 12:05:21 | wSOL → USDT | market sell | Not filled within fill timeout (cancelled by sim) | `0x5dbc1596…` [🐞](https://debug.barn.cow.fi/order/0x5dbc15961325f4db95ae25d23a36080ce4108c9ce5c3ae1adb7b93e6361e84bb) |
| 12:05:27 | wSOL → JUP | market sell | Not filled within fill timeout (cancelled by sim) | `0x349bacc7…` [🐞](https://debug.barn.cow.fi/order/0x349bacc7123fda827bd3be537d0293c5bbc56236f21f32bceaea4d592166da20) |
| 12:08:35 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x3878f4aa…` [🐞](https://debug.barn.cow.fi/order/0x3878f4aa838f0787ec7307179ee80ce7c05ef8f589d2d2447bb6f913f62e7b66) |
| 12:08:35 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x0a707ded…` [🐞](https://debug.barn.cow.fi/order/0x0a707dedfd036f98af6d2f457bf7e24c432d042e60663e65eb4fd80900ad1a46) |
| 12:08:36 | wSOL → USDT | market sell | Winner too late: creation blockhash expired | `0x3e01024e…` [🐞](https://debug.barn.cow.fi/order/0x3e01024e0815d38b696fbe8f810d956c80ca15d548c48c0bfc62dfef07424964) |
| 12:08:37 | wSOL → USDC | market buy | Not filled within fill timeout (cancelled by sim) | `0x8f68b87d…` [🐞](https://debug.barn.cow.fi/order/0x8f68b87d13a167cbadd6d1b3cb7b3919955e35066291d540d203300295e5fa7b) |
| 12:08:37 | wSOL → USDC | market buy | Winner too late: creation blockhash expired | `0xf02f3155…` [🐞](https://debug.barn.cow.fi/order/0xf02f315510a1e0988b47ed499db30ab3a4fcfa5f096a1f1143e9aa5d5cd6b51c) |
| 12:08:38 | wSOL → USDT | market buy | Not filled within fill timeout (cancelled by sim) | `0x041e8cf9…` [🐞](https://debug.barn.cow.fi/order/0x041e8cf995cbb7f739366d26d1faef93cb2d369e41daf7f040c8f4688e9a6818) |
| 12:08:38 | wSOL → USDT | market buy | Winner too late: creation blockhash expired | `0x5c43e6f3…` [🐞](https://debug.barn.cow.fi/order/0x5c43e6f3af2180b8c971f8fb846218e13b13984fa998f6e406d14ced2fbe8ccd) |
| 12:10:40 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0xf04319e9…` [🐞](https://debug.barn.cow.fi/order/0xf04319e92566783aa333da97a09cab4be4ef88d917f13b36a2a1b8a903bd0e63) |
| 12:10:41 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x953f6136…` [🐞](https://debug.barn.cow.fi/order/0x953f613675752f15aafa176f57adfe98f7d16de68a4822d11ac75d3b4e809dee) |
| 12:10:41 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x37461fe1…` [🐞](https://debug.barn.cow.fi/order/0x37461fe1736cd142a9d61195d9bd8e2e6d0530274e7f42151e5e7da768f2ff3e) |
| 12:11:22 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x254059cd…` [🐞](https://debug.barn.cow.fi/order/0x254059cdb3114d26efb753e0d391beaf7d48c881908d84603b1608cfe62c8792) |
| 12:11:23 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x56bfd91c…` [🐞](https://debug.barn.cow.fi/order/0x56bfd91cef3d3f2fbe23363bf910f0a0c54d93088c40f99adeb15ecf1bca1fd6) |
| 12:12:06 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0xfd493f82…` [🐞](https://debug.barn.cow.fi/order/0xfd493f8236037b01a0e077510dd4bacd08bd12e80ad6cdbc81223aa151f71e54) |
| 12:12:07 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0xbbe47385…` [🐞](https://debug.barn.cow.fi/order/0xbbe4738555bd32c1c1d7d08e30eecae78db46dd9d972972cca488983a14d5cb2) |
| 12:13:59 | wSOL → Bonk | market buy | Not filled within fill timeout (cancelled by sim) | `0x98f60d67…` [🐞](https://debug.barn.cow.fi/order/0x98f60d67c29561b0773446fc782a763eba2da6257e8e67de3e2251c273ffa4a2) |
| 12:14:04 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc3577951…` [🐞](https://debug.barn.cow.fi/order/0xc3577951b3451bc4f0b5701c35b8820f76cb990d8cf4cd60adca00f3a4a4c4c6) |
| 12:14:04 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xc6582f52…` [🐞](https://debug.barn.cow.fi/order/0xc6582f52519a435f6cf1acb729014ec727c759a8ae3b216f1091471c7c7f1db5) |
| 12:14:05 | wSOL → Bonk | market sell | Not filled within fill timeout (cancelled by sim) | `0x53933c2e…` [🐞](https://debug.barn.cow.fi/order/0x53933c2ebb8422bbfbae16b52dfe4690796e86b48ee2809c9e8df49807ec4e6e) |
| 12:14:06 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x9d3dc574…` [🐞](https://debug.barn.cow.fi/order/0x9d3dc57491d4de30fad34e445ecbaac61ee54ec26de869bd9b3e8012352e9bb0) |
| 12:14:07 | wSOL → USDC | market buy | Not filled within fill timeout (cancelled by sim) | `0x276801e8…` [🐞](https://debug.barn.cow.fi/order/0x276801e8dcf65a98dcef06e86b24c82e257f7d8955dd9f5cb4de82bd2b7cd601) |
| 12:15:20 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xfa21901a…` [🐞](https://debug.barn.cow.fi/order/0xfa21901afd0147ee8285990b26fe0118035aac6651b320111d5ec4319a363a5e) |
| 12:15:21 | wSOL → Bonk | market sell | Not filled within fill timeout (cancelled by sim) | `0x7ca04c20…` [🐞](https://debug.barn.cow.fi/order/0x7ca04c2089fcbe24e2d3d8b2d8dd35065c1f33d8fd04a217df026eb1e95e322b) |
| 12:15:22 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0xbab447bb…` [🐞](https://debug.barn.cow.fi/order/0xbab447bb016b2bd47145964388c272ae43e39dfccb933ae24309d4cf79252d37) |
| 12:17:33 | wSOL → USDG | market sell | Winner too late: creation blockhash expired | `0x7498aac8…` [🐞](https://debug.barn.cow.fi/order/0x7498aac82fc66333233a6d92259bf668cdfc0dba512826bbfbda2b949c5d705b) |
| 12:17:34 | wSOL → CASH | market sell | Winner too late: creation blockhash expired | `0xec8637ff…` [🐞](https://debug.barn.cow.fi/order/0xec8637ffc2d1bd57b1ba8775ff2ce8b2bee5f5e5c0ad17d204fdee5c24979c3b) |
| 12:17:34 | wSOL → SPYx | market sell | Winner too late: creation blockhash expired | `0x1ccac092…` [🐞](https://debug.barn.cow.fi/order/0x1ccac0922842e79e314bce634a1dd6248a1b2e448d6520c7230c3f3df2d67ef7) |
| 12:17:35 | wSOL → ANSEM | market sell | Winner too late: creation blockhash expired | `0xc1932cdd…` [🐞](https://debug.barn.cow.fi/order/0xc1932cdde5a0f4d1604033ede5c6f27eecbb2acc78d5c55c688ba0fe28e9e6dd) |
| 12:17:40 | PYUSD → PAID | market sell | Settlement too large for one transaction | `0x964e85b0…` [🐞](https://debug.barn.cow.fi/order/0x964e85b0f0d144cffa5968183cf237a6272e71c88596fe9c930ab1a27932cf8b) |
| 12:18:15 | wSOL → USDG | market sell | Winner too late: creation blockhash expired | `0x6d3dc35e…` [🐞](https://debug.barn.cow.fi/order/0x6d3dc35e2d72ce7542839c48d5c755cedabe23c94ed57520736400c6c0013b06) |
| 12:18:17 | wSOL → CASH | market sell | Winner too late: creation blockhash expired | `0x6ec52130…` [🐞](https://debug.barn.cow.fi/order/0x6ec52130576109cc751cef608e6cc7b5e72ee459eb9017c4261af00784443c85) |
| 12:18:18 | wSOL → SPYx | market sell | Winner too late: creation blockhash expired | `0xadfe6599…` [🐞](https://debug.barn.cow.fi/order/0xadfe659952f2041567e6a2421497b92581c3a65e156bd7c6b44599b99ff2a060) |
| 12:18:18 | wSOL → ANSEM | market sell | Winner too late: creation blockhash expired | `0x869bdf16…` [🐞](https://debug.barn.cow.fi/order/0x869bdf16efda3e6110f34a6a5e77a772c478ee69944f6053197f164bce7e9622) |
| 12:19:47 | wSOL → $WIF | market sell | Not filled within fill timeout (cancelled by sim) | `0xab04b8d0…` [🐞](https://debug.barn.cow.fi/order/0xab04b8d0b153bdd5a83d20a89c7224b8021ad048a16b5dd7445c11b95c8d316f) |
| 12:19:47 | wSOL → POPCAT | market sell | Not filled within fill timeout (cancelled by sim) | `0x350b175d…` [🐞](https://debug.barn.cow.fi/order/0x350b175d6bd10d9f34cb5569a888c448697af0426cde7ff58cba3e914fcfda25) |
| 12:19:47 | wSOL → JitoSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x70fcc87e…` [🐞](https://debug.barn.cow.fi/order/0x70fcc87e94a6f758eb1b8467b6af33eedb0a2e9912d8f4c8c51585686dc40860) |
| 12:19:47 | wSOL → mSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0xfdaff537…` [🐞](https://debug.barn.cow.fi/order/0xfdaff5373a6a7294cd98e23c232b1b79be04947dcfdc2c4dc5f1d254b9f33cd0) |
| 12:19:48 | wSOL → JupSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x9bd2d7d0…` [🐞](https://debug.barn.cow.fi/order/0x9bd2d7d08925bf7db06d9cb27fbe933b88e4b6d3ee9c1de1ffa253f7c4546fde) |
| 12:19:49 | wSOL → USDe | market sell | Not filled within fill timeout (cancelled by sim) | `0x70d651c3…` [🐞](https://debug.barn.cow.fi/order/0x70d651c3809fe3eb207760f9e064716066c2aac2dc8251869092618b1cfc2779) |
| 12:19:50 | wSOL → cbBTC | market sell | Not filled within fill timeout (cancelled by sim) | `0x78f2996a…` [🐞](https://debug.barn.cow.fi/order/0x78f2996abbc3dab63a24dc316c001c0c27251a227dbd4a278a8405dec0e92a26) |
| 12:19:50 | wSOL → EURC | market sell | Not filled within fill timeout (cancelled by sim) | `0x59e8b7b1…` [🐞](https://debug.barn.cow.fi/order/0x59e8b7b160bc216da1e2595b366e2d8e7b53106d64e4add7241b44b52c5dd138) |
| 12:19:51 | wSOL → USDY | market sell | Not filled within fill timeout (cancelled by sim) | `0xeec483bd…` [🐞](https://debug.barn.cow.fi/order/0xeec483bd1838d3f17f40f7c40045601bad0ebc93b7cc5c797bc8e071e7e933bc) |
| 12:19:52 | wSOL → JLP | market sell | Not filled within fill timeout (cancelled by sim) | `0x2d70d17b…` [🐞](https://debug.barn.cow.fi/order/0x2d70d17b45026c61d23ffb9a48f06306d964e7582879d0e341a8852e8386bca5) |
| 12:19:52 | wSOL → INF | market sell | Not filled within fill timeout (cancelled by sim) | `0xe94691c5…` [🐞](https://debug.barn.cow.fi/order/0xe94691c5c78ed773420a74fd9e429b45e06942821177304504adbc0f408bf8ff) |
| 12:19:52 | wSOL → ETH | market sell | Not filled within fill timeout (cancelled by sim) | `0x9285835f…` [🐞](https://debug.barn.cow.fi/order/0x9285835fb39c861e10834f345761342a62d2e11e74c9f8c6918d1d52e981e844) |
| 12:19:52 | wSOL → BNB | market sell | Not filled within fill timeout (cancelled by sim) | `0x1f77c255…` [🐞](https://debug.barn.cow.fi/order/0x1f77c255a1087eb1b8b7c4bb16b26ef040e961d56043a0527a940ce5ad2c3212) |
| 12:19:53 | wSOL → XAUt0 | market sell | Not filled within fill timeout (cancelled by sim) | `0x72956e95…` [🐞](https://debug.barn.cow.fi/order/0x72956e95d7a871f7d64055eb075015e365c929f38fbbb907a05fc4fd15e27aea) |
| 12:19:54 | wSOL → MEW | market sell | Not filled within fill timeout (cancelled by sim) | `0x5f8b947e…` [🐞](https://debug.barn.cow.fi/order/0x5f8b947e9252cfb97456e69070adec4cbf7e8ba988b038dccebb4a7ea1bf8e13) |
| 12:19:54 | wSOL → EUROP | market sell | Not filled within fill timeout (cancelled by sim) | `0x76dd2bf6…` [🐞](https://debug.barn.cow.fi/order/0x76dd2bf6f6b56d1a0fa915d93b22e18428806cc96c638792c12b481c628ee5b3) |
| 12:19:54 | wSOL → Fartcoin | market sell | Not filled within fill timeout (cancelled by sim) | `0x2a286234…` [🐞](https://debug.barn.cow.fi/order/0x2a286234b159f498b0f15b9f6ab271c371e9e7fbcc47ac9a58defe15770eb94a) |
| 12:19:54 | wSOL → BOME | market sell | Not filled within fill timeout (cancelled by sim) | `0xb8d8b122…` [🐞](https://debug.barn.cow.fi/order/0xb8d8b122db48f1fdce5badaca83ae0a87e795adecaa437383c519ccfebe4576b) |
| 12:19:55 | wSOL → hyloSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x3b66d324…` [🐞](https://debug.barn.cow.fi/order/0x3b66d32442bd528470960225828fe48dd51a46aa0648d58dc41908bf203d60d6) |
| 12:19:55 | wSOL → PSOL | market sell | Not filled within fill timeout (cancelled by sim) | `0x658256ac…` [🐞](https://debug.barn.cow.fi/order/0x658256ac1de93fdb06534822d3e82d3fdced0a41fc510bc807fb496fdaf002cd) |
| 12:19:55 | wSOL → PAXG | market sell | Not filled within fill timeout (cancelled by sim) | `0xfdf61da4…` [🐞](https://debug.barn.cow.fi/order/0xfdf61da4595de201d8ad8cf54e49a42e4e1f50711caa04dec84c4f117646e99d) |
| 12:21:06 | wSOL → POPCAT | market buy | Not filled within fill timeout (cancelled by sim) | `0xc06c18ba…` [🐞](https://debug.barn.cow.fi/order/0xc06c18bab55694e64eee3e6b4fe2f7b2b0779d755aee7b48adbed394103026d4) |
| 12:21:07 | wSOL → $WIF | market buy | Not filled within fill timeout (cancelled by sim) | `0x04b20a6e…` [🐞](https://debug.barn.cow.fi/order/0x04b20a6eb8a26f70b743a4ac26fc9e64607df4101843b4ba04d0598a9dfdeb25) |
| 12:21:07 | wSOL → JitoSOL | market buy | Not filled within fill timeout (cancelled by sim) | `0x0c624fa5…` [🐞](https://debug.barn.cow.fi/order/0x0c624fa5966627fd2284c24ae194192183ab2b8191462a5da4f7d19d91fa6300) |
| 12:21:08 | wSOL → USDe | market buy | Not filled within fill timeout (cancelled by sim) | `0xbf5e731b…` [🐞](https://debug.barn.cow.fi/order/0xbf5e731b8941aeff4aafa53b31b3732ebdaeb9f94807eb093d218766338766b3) |
| 12:21:08 | wSOL → USDY | market buy | Not filled within fill timeout (cancelled by sim) | `0x34447eaa…` [🐞](https://debug.barn.cow.fi/order/0x34447eaa51baf00602afc8936818dcadb6358ad34d0a4d4f07021cd3b51cc423) |
| 12:21:12 | wSOL → BNB | market buy | Not filled within fill timeout (cancelled by sim) | `0x9ac03db9…` [🐞](https://debug.barn.cow.fi/order/0x9ac03db987a99a6a48a2cef2e4792f7cc321700f3c77fc5e72674cf5d54d897a) |
| 12:21:12 | wSOL → XAUt0 | market buy | Not filled within fill timeout (cancelled by sim) | `0x21d61ea4…` [🐞](https://debug.barn.cow.fi/order/0x21d61ea428bbbbf594f6ba6a188af6801343970891c0b11386c203566a4ac94a) |
| 12:21:14 | wSOL → MEW | market buy | Not filled within fill timeout (cancelled by sim) | `0xf9989bb3…` [🐞](https://debug.barn.cow.fi/order/0xf9989bb31f4bbecf55f124794ecacf721ac154ae2d0c6192993168e2e522072c) |
| 12:21:14 | wSOL → INF | market buy | Not filled within fill timeout (cancelled by sim) | `0x77482f1d…` [🐞](https://debug.barn.cow.fi/order/0x77482f1d97fa844dc357c65d7ea63b31edbf7b7e6b3b276a14f1e18e211b7d70) |
| 12:21:18 | wSOL → PSOL | market buy | Not filled within fill timeout (cancelled by sim) | `0x3f987022…` [🐞](https://debug.barn.cow.fi/order/0x3f987022485f87a2fb71f03faa2a980b1fed6f08cd65bbb33873fbb4bd922686) |
| 12:21:18 | wSOL → Fartcoin | market buy | Not filled within fill timeout (cancelled by sim) | `0xc31c166f…` [🐞](https://debug.barn.cow.fi/order/0xc31c166feb9b3a1e076f68506a54ff3963456a76d3b52ab668b2e31f84f7494c) |
| 12:21:18 | wSOL → BOME | market buy | Not filled within fill timeout (cancelled by sim) | `0x1a887e3d…` [🐞](https://debug.barn.cow.fi/order/0x1a887e3dc46df0417e7ae1b1f10b26058e77316c057f9c9730f6eda314c73003) |
| 12:21:19 | wSOL → ETH | market buy | Not filled within fill timeout (cancelled by sim) | `0x46a71af8…` [🐞](https://debug.barn.cow.fi/order/0x46a71af8a2808f022f6046f63904e1e0efd89808cbab790cec62efdf54922cec) |
| 12:21:19 | wSOL → hyloSOL | market buy | Not filled within fill timeout (cancelled by sim) | `0x84d09bd8…` [🐞](https://debug.barn.cow.fi/order/0x84d09bd857501f3088a876319ecd56d7758ad575ff6f60b249a50ab8a44a8e80) |
| 12:24:46 | wSOL → SPCXx | market sell | Winner too late: creation blockhash expired | `0xb455adb1…` [🐞](https://debug.barn.cow.fi/order/0xb455adb1238ae0ec941a4ff653734d0629469197d504f1676aabca635890dd38) |
| 12:24:47 | wSOL → QQQx | market sell | Winner too late: creation blockhash expired | `0xca1fb33c…` [🐞](https://debug.barn.cow.fi/order/0xca1fb33c975a828f748d6a723c54234ac23ab6d70dc1f3199e35939e8953fb91) |
| 12:24:47 | wSOL → GMEx | market sell | Winner too late: creation blockhash expired | `0x82a39583…` [🐞](https://debug.barn.cow.fi/order/0x82a395833dae7303155e4df28d0a098664129670f08a226d95d2e62ecfd1c4a0) |
| 12:24:47 | wSOL → MSFTx | market sell | Not filled within fill timeout (cancelled by sim) | `0x9a20907a…` [🐞](https://debug.barn.cow.fi/order/0x9a20907a947d1b57d248a66207507536615c30da586461032c5995a8ed725e11) |
| 12:24:47 | wSOL → MCDx | market sell | Winner too late: creation blockhash expired | `0xd5a5a66d…` [🐞](https://debug.barn.cow.fi/order/0xd5a5a66d6fdec7a89112e43ce8d5548efde1ba389150f46e555f3ace0f04a208) |
| 12:24:48 | wSOL → INTCx | market sell | Not filled within fill timeout (cancelled by sim) | `0x0dd05eea…` [🐞](https://debug.barn.cow.fi/order/0x0dd05eea92152037806595bb1e34046e3af2d84b170baa8747f0f0b7fac3c229) |
| 12:24:48 | wSOL → PLTRx | market sell | Winner too late: creation blockhash expired | `0x53acd711…` [🐞](https://debug.barn.cow.fi/order/0x53acd71130f64294c48d6029551e5b9fd57dfc19e49e80ec9873f49cc3e5ca0b) |
| 12:24:49 | wSOL → ORCLx | market sell | Winner too late: creation blockhash expired | `0x42a39708…` [🐞](https://debug.barn.cow.fi/order/0x42a39708acd759f11677aa71382fb0f2c3f625e1544fccc1968fabef395bd93d) |
| 12:24:50 | wSOL → AVGOx | market sell | Winner too late: creation blockhash expired | `0xe5439777…` [🐞](https://debug.barn.cow.fi/order/0xe54397772b8070d77b1656f207a7f28d72acfade5ce98b0a691af561d7e02ca1) |
| 12:24:50 | wSOL → UNHx | market sell | Not filled within fill timeout (cancelled by sim) | `0xc7ae8ec3…` [🐞](https://debug.barn.cow.fi/order/0xc7ae8ec3acc6d638e3e22b40f6fff48d869dd8b5f3aa4f1e7811ca8b02244303) |
| 12:24:50 | wSOL → XOMx | market sell | Winner too late: creation blockhash expired | `0x0cc8aa38…` [🐞](https://debug.barn.cow.fi/order/0x0cc8aa38b6659ec813c58b02bb838dd445a863457e734e3b9f558dbeb9593078) |
| 12:24:51 | wSOL → NVOx | market sell | Winner too late: creation blockhash expired | `0x3f8489bc…` [🐞](https://debug.barn.cow.fi/order/0x3f8489bc511f732e1b5695da837a5a1051e2f6363e881c592bdefb67719a858f) |
| 12:24:51 | wSOL → UBERx | market sell | Winner too late: creation blockhash expired | `0xab8c30ee…` [🐞](https://debug.barn.cow.fi/order/0xab8c30ee47bd0d4b6dea8d273cea4d508aeb94ba4393bf2adf6d3e0ff62167fc) |
| 12:24:54 | wSOL → SPYx | market sell | Winner too late: creation blockhash expired | `0xdb832b44…` [🐞](https://debug.barn.cow.fi/order/0xdb832b441c2be48b018eda10202ae13a69c7e96ea369879f7c371fc9aa39facb) |
| 12:25:23 | wSOL → TSLAx | market sell | Winner too late: creation blockhash expired | `0x3a6404e2…` [🐞](https://debug.barn.cow.fi/order/0x3a6404e2c2146aa5d620bfcea4f8a631c8c0212be0833c871fac09d4fea74245) |
| 12:25:24 | wSOL → METAx | market sell | Winner too late: creation blockhash expired | `0xc1aa22cb…` [🐞](https://debug.barn.cow.fi/order/0xc1aa22cb2e3641c9dc5c12f639c12dc1ba44a0dfd6251ff9f965bfad1fe9e4d9) |
| 12:25:26 | wSOL → HOODx | market sell | Winner too late: creation blockhash expired | `0xedf6ed79…` [🐞](https://debug.barn.cow.fi/order/0xedf6ed799f96776e22fb3483d99d463daf95da058bbdabd5b5784e3e39cee570) |
| 12:25:27 | wSOL → AMZNx | market sell | Winner too late: creation blockhash expired | `0x11fc16a4…` [🐞](https://debug.barn.cow.fi/order/0x11fc16a44c1d0711055a98bb746f3897dd1ff0275a2b2d32ac94cb6adafa0944) |
| 12:25:28 | wSOL → AMDx | market sell | Winner too late: creation blockhash expired | `0x1b42a490…` [🐞](https://debug.barn.cow.fi/order/0x1b42a49091e127c7b661a94bfb44ba2c186989b38251a99e2dd16deadfc9153a) |
| 12:25:28 | wSOL → MUx | market sell | Winner too late: creation blockhash expired | `0x9e9cf95e…` [🐞](https://debug.barn.cow.fi/order/0x9e9cf95e0d5800f5433b25bb9e401bac6bccf457f0a7a8e76b66dc7d9437bf61) |
| 12:25:29 | wSOL → WMTx | market sell | Winner too late: creation blockhash expired | `0x96423075…` [🐞](https://debug.barn.cow.fi/order/0x9642307569573860b3350172686de15df5bd5171a0d561d7aa7b30d8f203f4a5) |
| 12:25:31 | wSOL → LLYx | market sell | Winner too late: creation blockhash expired | `0x3f681acf…` [🐞](https://debug.barn.cow.fi/order/0x3f681acf080dc6123648ce9a9eec3fd955445662035ed58135292bf82df14a96) |
| 12:25:31 | wSOL → SKHYx | market sell | Winner too late: creation blockhash expired | `0x196bb246…` [🐞](https://debug.barn.cow.fi/order/0x196bb246922bfb98c493afff91789571ee781f1d93c011cda7342fbbb0573ddc) |
| 12:25:32 | wSOL → PLTRx | market sell | Winner too late: creation blockhash expired | `0xc48f54ed…` [🐞](https://debug.barn.cow.fi/order/0xc48f54ed2615dcf6a39c85227116f1e38821189ee03af020b34b1ce8b1914e94) |
| 12:25:37 | wSOL → SPYx | market sell | Winner too late: creation blockhash expired | `0x759782ba…` [🐞](https://debug.barn.cow.fi/order/0x759782ba1ac008dbd84d0c06ba1349fffbb016b7acb649dbdbb3fa1c11177cba) |
| 12:25:58 | wSOL → GOOGLx | market sell | Not filled within fill timeout (cancelled by sim) | `0xc441adc0…` [🐞](https://debug.barn.cow.fi/order/0xc441adc01c05fa67ef56d1548e74ea96258a1e8815b6a8ace7d73120799620ac) |
| 12:25:59 | wSOL → KOx | market sell | Not filled within fill timeout (cancelled by sim) | `0x6dbed1b9…` [🐞](https://debug.barn.cow.fi/order/0x6dbed1b94f95e264b342880ce1e5bd7d9c9a19e3d6b24830b1fa79460e3619e0) |
| 12:26:00 | wSOL → MSTRx | market sell | Winner too late: creation blockhash expired | `0x86276e71…` [🐞](https://debug.barn.cow.fi/order/0x86276e71cd864f955038eda1e5e436c003c20eabef46cb4ed839b8f5398e7495) |
| 12:26:01 | wSOL → TSMx | market sell | Not filled within fill timeout (cancelled by sim) | `0xaea5e86f…` [🐞](https://debug.barn.cow.fi/order/0xaea5e86f6872bc05863ad8d8236e72203aaa93832964655a0cf908219c342900) |
| 12:26:02 | wSOL → GLDx | market sell | Winner too late: creation blockhash expired | `0xa5430ed3…` [🐞](https://debug.barn.cow.fi/order/0xa5430ed37bc7a089d5e184f2a9d3d91471fe66b9629e63f8313295a03c4c6b92) |
| 12:26:03 | wSOL → MRVLx | market sell | Winner too late: creation blockhash expired | `0xccf13d58…` [🐞](https://debug.barn.cow.fi/order/0xccf13d58631c5110553cd5103c1fcd1411f037871272642e71d7d21fd53cfaf0) |
| 12:26:04 | wSOL → AAPLx | market sell | Winner too late: creation blockhash expired | `0x927a259c…` [🐞](https://debug.barn.cow.fi/order/0x927a259ce76d3ccc5639bd32aa86d21f775ab181f3ec8e14fa6708c54f0bef73) |
| 12:26:06 | wSOL → STRCx | market sell | Winner too late: creation blockhash expired | `0xbe6e6722…` [🐞](https://debug.barn.cow.fi/order/0xbe6e67228b5237e8910a07375d899ad6b99fcd9acb1d81a4472679dc38ee0e0b) |
| 12:26:06 | wSOL → TQQQx | market sell | Winner too late: creation blockhash expired | `0x3b3cd043…` [🐞](https://debug.barn.cow.fi/order/0x3b3cd0439b8fafcb6add6ec9b564cbdab81cc9fbd5133e6593ac2a1ca0c2da99) |
| 12:26:07 | wSOL → NFLXx | market sell | Winner too late: creation blockhash expired | `0x47811b28…` [🐞](https://debug.barn.cow.fi/order/0x47811b28979d8c9f45095b197d5f6db1cf93ec12991daafbd38d7ce20af998a5) |
| 12:26:08 | wSOL → BMNRx | market sell | Winner too late: creation blockhash expired | `0xb8e350af…` [🐞](https://debug.barn.cow.fi/order/0xb8e350af930ec019f4c848269d541bb67233b53ac67f28c91ab6d93f12ed529e) |
| 12:26:09 | wSOL → VIDAx | market sell | Winner too late: creation blockhash expired | `0x67739599…` [🐞](https://debug.barn.cow.fi/order/0x677395990f6ec280fad44028ab2beab36f09af2d5fd67e8cb32f591b13d50093) |
| 12:26:11 | wSOL → NVDAx | market sell | Winner too late: creation blockhash expired | `0xbcfacdda…` [🐞](https://debug.barn.cow.fi/order/0xbcfacdda5d4d528a70f58d77546128200071bf05dbd4c81811f45694a7476445) |
| 12:26:45 | wSOL → DFDVx | market sell | Winner too late: creation blockhash expired | `0x0157ac17…` [🐞](https://debug.barn.cow.fi/order/0x0157ac17d1e83b09f0ed50aa6ef761adb31b139c9026879d7fea2962d11f8034) |
| 12:26:49 | wSOL → NFLXx | market sell | Winner too late: creation blockhash expired | `0x1b3dad62…` [🐞](https://debug.barn.cow.fi/order/0x1b3dad62944358abf8cde2fa03915c2a53f6883bd07802d8fd355bdcaa58af55) |
| 12:27:07 | wSOL → COINx | market sell | Not filled within fill timeout (cancelled by sim) | `0x7bb019e3…` [🐞](https://debug.barn.cow.fi/order/0x7bb019e379c6348fa2b39cced58f6c91f97a94906375cf3610314bc9b3368878) |
| 12:27:08 | wSOL → BRK.Bx | market sell | Not filled within fill timeout (cancelled by sim) | `0x24640169…` [🐞](https://debug.barn.cow.fi/order/0x24640169a28b784c3bb6e3230e75aaadad1a42ccd5c2d2c4168cdae423f63f7e) |
| 12:27:11 | wSOL → SNDKx | market sell | Not filled within fill timeout (cancelled by sim) | `0x4c74cde2…` [🐞](https://debug.barn.cow.fi/order/0x4c74cde2bd03e628e944288002ffa479c86ec44223488538aaa9efd3edec06ff) |
| 12:29:55 | wSOL → LIKE | market sell | Not filled within fill timeout (cancelled by sim) | `0x5deff725…` [🐞](https://debug.barn.cow.fi/order/0x5deff725771f5d6cfc055eb3612ce322ad90d500b1a2d855640275ab487a510d) |
| 12:29:55 | wSOL → USDC | market sell | Not filled within fill timeout (cancelled by sim) | `0x60267717…` [🐞](https://debug.barn.cow.fi/order/0x602677173da9a86420c416b4857359ccca2df95bcc11b800ab9a2c2afd0978ee) |
| 12:29:55 | wSOL → USDC | market buy | Winner too late: creation blockhash expired | `0x8b34d157…` [🐞](https://debug.barn.cow.fi/order/0x8b34d157a599ac3229717290d4565697b4b786640fc3e37543c0d1fc2293cd57) |
| 12:29:56 | wSOL → XMR | market sell | Not filled within fill timeout (cancelled by sim) | `0x3a1bc893…` [🐞](https://debug.barn.cow.fi/order/0x3a1bc89308637d5c95d1f990ba0bad9c0b1ef3eef9b256c51281e62f542c90fa) |
| 12:30:09 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0xafca40cd…` [🐞](https://debug.barn.cow.fi/order/0xafca40cdebb38855f34b5dfbe9d94e9287b25f5bc0b294a054044899af889168) |
| 12:36:25 | wSOL → USDC | market buy | Winner too late: creation blockhash expired | `0xdd7718d4…` [🐞](https://debug.barn.cow.fi/order/0xdd7718d4179094fa72b01c88cc0e3b9450045371212fa47fb606827454230f9c) |
| 12:36:25 | wSOL → USDC | market buy | Winner too late: creation blockhash expired | `0xba061851…` [🐞](https://debug.barn.cow.fi/order/0xba0618510f56ecc4932cd97686e9dd4af3a0140fd7a83edfc15376e1d1284cb4) |
