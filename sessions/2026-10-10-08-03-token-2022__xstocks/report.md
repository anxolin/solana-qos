# Solana QoS report: 2026-10-10-08-03-token-2022__xstocks

Prod, orders created between `2026-10-10T08:03:37.040Z` and `2026-10-10T08:10:04.421Z`. Data fetched 2026-10-10T08:19:05+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 82 |
| Orders executed | **80** (97.6%) |
| Sponsored orders never created on-chain | 2 (2.4%) |
| Traders | 14 |
| Settlement txs | 80 |

## Scenario

78 of 124 scenario rows completed. 0 retries, 3 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 08:03:37 | 1 | 1 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 18s | 1 |  |
| 08:03:55 | 2 | 1 | sell 0.00863 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | filled | 8s | 1 |  |
| 08:04:03 | 3 | 1 | buy 0.00575 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:03 | 4 | 1 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 11s | 1 |  |
| 08:04:14 | 5 | 1 | sell 0.000898 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 7s | 1 |  |
| 08:04:21 | 6 | 1 | buy 0.000598 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:22 | 7 | 1 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 7s | 1 |  |
| 08:04:29 | 8 | 1 | sell 0.00293 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 4s | 1 |  |
| 08:04:32 | 9 | 1 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:37 | 10 | 2 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 47s | 1 |  |
| 08:04:24 | 11 | 2 | sell 0.00415 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | filled | 44s | 1 |  |
| 08:05:08 | 12 | 2 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:05:08 | 13 | 2 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 10s | 1 |  |
| 08:05:18 | 14 | 2 | sell 0.00185 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | filled | 4s | 1 |  |
| 08:05:22 | 15 | 2 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:05:22 | 16 | 2 | sell 0.01 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | filled | 7s | 1 |  |
| 08:05:29 | 17 | 2 | sell 0.00453 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ → SOL | filled | 32s | 1 |  |
| 08:06:00 | 18 | 2 | buy 0.00302 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:37 | 19 | 3 | sell 0.01 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | filled | 47s | 1 |  |
| 08:04:24 | 20 | 3 | sell 0.000919 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ → SOL | filled | 44s | 1 |  |
| 08:05:08 | 21 | 3 | buy 0.000613 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:05:09 | 22 | 3 | sell 0.01 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | filled | 53s | 1 |  |
| 08:06:02 | 23 | 3 | sell 0.000967 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu → SOL | failed | 0s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 08:06:02 | 24 | 3 | buy 0.000644 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:06:02 | 25 | 3 | sell 0.01 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 7s | 1 |  |
| 08:06:09 | 26 | 3 | sell 0.00185 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re → SOL | filled | 4s | 1 |  |
| 08:06:13 | 27 | 3 | buy 0.00123 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:37 | 28 | 4 | sell 0.01 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | filled | 10s | 1 |  |
| 08:03:47 | 29 | 4 | sell 0.00132 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX → SOL | filled | 5s | 1 |  |
| 08:03:52 | 30 | 4 | buy 0.000879 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:52 | 31 | 4 | sell 0.01 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | filled | 6s | 1 |  |
| 08:03:58 | 32 | 4 | sell 0.00199 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN → SOL | filled | 5s | 1 |  |
| 08:04:03 | 33 | 4 | buy 0.00133 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:04 | 34 | 4 | sell 0.01 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | filled | 9s | 1 |  |
| 08:04:12 | 35 | 4 | sell 0.0039 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu → SOL | filled | 5s | 1 |  |
| 08:04:17 | 36 | 4 | buy 0.0026 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:37 | 37 | 5 | sell 0.01 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | filled | 9s | 1 |  |
| 08:03:46 | 38 | 5 | sell 0.0285 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc → SOL | filled | 7s | 1 |  |
| 08:03:53 | 39 | 5 | buy 0.019 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:54 | 40 | 5 | sell 0.01 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | filled | 5s | 1 |  |
| 08:03:59 | 41 | 5 | sell 0.00637 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg → SOL | filled | 4s | 1 |  |
| 08:04:03 | 42 | 5 | buy 0.00425 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:03 | 43 | 5 | sell 0.01 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | filled | 5s | 1 |  |
| 08:04:07 | 44 | 5 | sell 0.00207 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp → SOL | filled | 57s | 1 |  |
| 08:05:04 | 45 | 5 | buy 0.00138 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:37 | 46 | 6 | sell 0.01 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | filled | 9s | 1 |  |
| 08:03:46 | 47 | 6 | sell 0.00302 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | filled | 7s | 1 |  |
| 08:03:53 | 48 | 6 | buy 0.00201 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:54 | 49 | 6 | sell 0.01 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | filled | 18s | 1 |  |
| 08:04:12 | 50 | 6 | sell 0.00269 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg → SOL | filled | 10s | 1 |  |
| 08:04:23 | 51 | 6 | buy 0.00179 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:23 | 52 | 6 | sell 0.01 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | filled | 7s | 1 |  |
| 08:04:29 | 53 | 6 | sell 0.00699 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH → SOL | filled | 4s | 1 |  |
| 08:04:33 | 54 | 6 | buy 0.00466 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:37 | 55 | 7 | sell 0.01 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | filled | 15s | 1 |  |
| 08:03:53 | 56 | 7 | sell 0.00361 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | filled | 4s | 1 |  |
| 08:03:57 | 57 | 7 | buy 0.00241 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:57 | 58 | 7 | sell 0.01 SOL → XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk | filled | 10s | 1 |  |
| 08:04:07 | 59 | 7 | sell 0.475 XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk → SOL | filled | 7s | 1 |  |
| 08:04:14 | 60 | 7 | buy 0.317 XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:14 | 61 | 7 | sell 0.01 SOL → Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy | filled | 10s | 1 |  |
| 08:04:25 | 62 | 7 | sell 0.149 Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy → SOL | filled | 7s | 1 |  |
| 08:04:32 | 63 | 7 | buy 0.099 Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:37 | 64 | 8 | sell 0.01 SOL → XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM | filled | 10s | 1 |  |
| 08:03:47 | 65 | 8 | sell 0.00614 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM → SOL | filled | 5s | 1 |  |
| 08:03:52 | 66 | 8 | buy 0.00409 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:53 | 67 | 8 | sell 0.01 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | filled | 4s | 1 |  |
| 08:03:56 | 68 | 8 | sell 0.00811 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ → SOL | filled | 8s | 1 |  |
| 08:04:04 | 69 | 8 | buy 0.00541 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:05 | 70 | 8 | sell 0.01 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | filled | 48s | 1 |  |
| 08:04:53 | 71 | 8 | sell 0.00138 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x → SOL | filled | 11s | 1 |  |
| 08:05:04 | 72 | 8 | buy 0.000917 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:37 | 73 | 9 | sell 0.01 SOL → XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL | filled | 16s | 1 |  |
| 08:03:53 | 74 | 9 | sell 0.00489 XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL → SOL | filled | 4s | 1 |  |
| 08:03:57 | 75 | 9 | buy 0.00326 XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:58 | 76 | 9 | sell 0.01 SOL → XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav | filled | 10s | 1 |  |
| 08:04:07 | 77 | 9 | sell 0.000645 XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav → SOL | filled | 8s | 1 |  |
| 08:04:15 | 78 | 9 | buy 0.00043 XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:15 | 79 | 9 | sell 0.01 SOL → XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc | filled | 10s | 1 |  |
| 08:04:26 | 80 | 9 | sell 0.00836 XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc → SOL | failed | 42s | 1 | acquire XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc expired |
| 08:05:07 | 81 | 9 | buy 0.00557 XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:37 | 82 | 10 | sell 0.01 SOL → XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo | filled | 16s | 1 |  |
| 08:03:53 | 83 | 10 | sell 0.00188 XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo → SOL | filled | 5s | 1 |  |
| 08:03:58 | 84 | 10 | buy 0.00125 XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:58 | 85 | 10 | sell 0.01 SOL → Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci | filled | 13s | 1 |  |
| 08:04:11 | 86 | 10 | sell 0.00641 Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci → SOL | filled | 10s | 1 |  |
| 08:04:21 | 87 | 10 | buy 0.00428 Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:22 | 88 | 10 | sell 0.01 SOL → XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL | filled | 7s | 1 |  |
| 08:04:29 | 89 | 10 | sell 0.01 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL → SOL | filled | 20s | 2 |  |
| 08:04:49 | 90 | 10 | buy 0.00669 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:38 | 91 | 11 | sell 0.01 SOL → XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh | filled | 16s | 1 |  |
| 08:03:54 | 92 | 11 | sell 0.00427 XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh → SOL | filled | 8s | 1 |  |
| 08:04:02 | 93 | 11 | buy 0.00285 XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:02 | 94 | 11 | sell 0.01 SOL → XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF | filled | 10s | 1 |  |
| 08:04:13 | 95 | 11 | sell 0.00107 XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF → SOL | filled | 10s | 1 |  |
| 08:04:23 | 96 | 11 | buy 0.000716 XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:23 | 97 | 11 | sell 0.01 SOL → XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA | filled | 7s | 1 |  |
| 08:04:30 | 98 | 11 | sell 0.00246 XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA → SOL | filled | 10s | 1 |  |
| 08:04:39 | 99 | 11 | buy 0.00164 XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:38 | 100 | 12 | sell 0.01 SOL → XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe | filled | 11s | 1 |  |
| 08:03:49 | 101 | 12 | sell 0.00185 XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe → SOL | filled | 5s | 1 |  |
| 08:03:54 | 102 | 12 | buy 0.00124 XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:55 | 103 | 12 | sell 0.01 SOL → XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV | filled | 9s | 1 |  |
| 08:04:04 | 104 | 12 | sell 0.00149 XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV → SOL | filled | 5s | 1 |  |
| 08:04:09 | 105 | 12 | buy 0.000991 XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:09 | 106 | 12 | sell 0.01 SOL → Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj | filled | 14s | 1 |  |
| 08:04:23 | 107 | 12 | sell 0.000428 Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj → SOL | filled | 5s | 1 |  |
| 08:04:28 | 108 | 12 | buy 0.000286 Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:38 | 109 | 13 | sell 0.01 SOL → XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n | failed | 3s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 08:03:41 | 110 | 13 | sell 0.0181 XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n → SOL | filled | 22s | 2 |  |
| 08:04:03 | 111 | 13 | buy 0.0121 XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:03 | 112 | 13 | sell 0.005 SOL → XsXb7KCxcxTi6hqWfYyEe1kpTwtiCeU5TJbEz8N7RWn | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 08:04:05 | 113 | 13 | sell 0.01 SOL → XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU | filled | 20s | 1 |  |
| 08:04:25 | 114 | 13 | sell 0.00372 XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU → SOL | failed | 36s | 1 | main expired |
| 08:05:01 | 115 | 13 | buy 0.00248 XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:03:38 | 116 | 14 | sell 0.01 SOL → XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB | filled | 16s | 1 |  |
| 08:03:54 | 117 | 14 | sell 0.0101 XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB → SOL | filled | 8s | 1 |  |
| 08:04:02 | 118 | 14 | buy 0.00673 XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:02 | 119 | 14 | sell 0.01 SOL → Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH | filled | 4s | 1 |  |
| 08:04:07 | 120 | 14 | sell 0.000597 Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH → SOL | filled | 7s | 1 |  |
| 08:04:13 | 121 | 14 | buy 0.000398 Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 08:04:13 | 122 | 14 | sell 0.01 SOL → XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn | filled | 10s | 1 |  |
| 08:04:23 | 123 | 14 | sell 0.0286 XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn → SOL | filled | 4s | 1 |  |
| 08:04:27 | 124 | 14 | buy 0.0191 XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

44 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 41 | SOL → CRCLx, SOL → SPYx, SOL → NVDAx, SOL → SPCXx, SOL → TSLAx, SOL → MSTRx, SOL → QQQx, SOL → METAx, SOL → GLDx, SOL → MSFTx, SOL → GOOGLx, SOL → COINx, SOL → GMEx, SOL → HOODx, SOL → AAPLx, SOL → MCDx, SOL → AMZNx, SOL → STRCx, SOL → PLTRx, SOL → VIDAx, SOL → DFDVx, SOL → INTCx, SOL → KOx, SOL → BRK.Bx, SOL → ORCLx, SOL → MUx, SOL → TQQQx, SOL → AVGOx, SOL → WMTx, SOL → NFLXx, SOL → XOMx, SOL → AMDx, SOL → MRVLx, SOL → UNHx, SOL → TSMx, SOL → SNDKx, SOL → NVOx, SOL → SKHYx, SOL → UBERx, SOL → LLYx, SOL → BMNRx | no route found |
| BlockhashExpired | main | 2 | METAx → SOL, SOL → NVOx | the transaction's blockhash is no longer valid, sign a fresh one |
| NoLiquidity | main | 1 | SOL → TCENTx | no route found |

Scenario orders: 82 (79 main, 3 acquire). Cleanup placed 238 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 08:06:38 | 1 | xavier → SOL (native) | Executed | `0x168fedf3…` [🐞](https://debug.cow.fi/order/0x168fedf3601eb169400385de88b4ee83b14aeb19910b23b783382d9a169c189d) |
| 08:06:38 | 1 | 2Z → SOL (native) | Executed | `0x2e65ba89…` [🐞](https://debug.cow.fi/order/0x2e65ba89395d27cef16c39adbb020e363c6262e2856c5fdb51f2ae219b19e5aa) |
| 08:06:38 | 1 | JupSOL → SOL (native) | Executed | `0x880e411c…` [🐞](https://debug.cow.fi/order/0x880e411c9136d0b4c1decb12299d73204c4423b1ec2d7ef10e391ba5763f367a) |
| 08:06:38 | 1 | TRUMP → SOL (native) | Executed | `0x724dff65…` [🐞](https://debug.cow.fi/order/0x724dff6548de248703ea5df08f6bfd45417b245b72703aca853f7e2c0e16fb0a) |
| 08:06:39 | 1 | KMNO → SOL (native) | Executed | `0x2a034751…` [🐞](https://debug.cow.fi/order/0x2a034751b067f96b288ca0d01cd7fd81fc74e4dbc17e57f56057352d20f17a8c) |
| 08:06:39 | 1 | Pnut → SOL (native) | Executed | `0x01a2fffa…` [🐞](https://debug.cow.fi/order/0x01a2fffad36de1862e6c02742a2972e005271f268e63f1077774eaa6e88da848) |
| 08:06:39 | 1 | HEEHEE → SOL (native) | Executed | `0x2e49eb5a…` [🐞](https://debug.cow.fi/order/0x2e49eb5ad3611709e3e3c5c34a51383b01ec3f430339a70012f8feab99726c1a) |
| 08:06:40 | 1 | PAYAI → SOL (native) | Executed | `0x876a0bac…` [🐞](https://debug.cow.fi/order/0x876a0bac9f974608cc6eb83d739729da4ffb29df3095603bdb23ac0cc6293300) |
| 08:06:40 | 1 | SHIB → SOL (native) | Executed | `0x22c71c4a…` [🐞](https://debug.cow.fi/order/0x22c71c4aff107f52e649a77440a3f851e92769aa013b0769b8692535f2e9cb27) |
| 08:06:41 | 1 | USDC → SOL (native) | Executed | `0xcf89ffea…` [🐞](https://debug.cow.fi/order/0xcf89ffeabcbba341317b993abea7b77223988635d68afbdf36e5e3105342b295) |
| 08:06:41 | 1 | MSTR → SOL (native) | Executed | `0x90c52873…` [🐞](https://debug.cow.fi/order/0x90c52873d3fcbabae5a0c73e463da9c71366d016c4616fa9116d46642a614d22) |
| 08:06:41 | 1 | CRCLx → SOL (native) | Executed | `0x6e1ac73e…` [🐞](https://debug.cow.fi/order/0x6e1ac73ed435368d329798d0ee044e219da0cacb87e333ea26892e7d6d934b7d) |
| 08:06:41 | 1 | Jotchua → SOL (native) | Executed | `0xd9368ea5…` [🐞](https://debug.cow.fi/order/0xd9368ea5c9b3ba3c3ab2bc5afc95f3bd294b0368dcde2a34f94d1774bdf7e36d) |
| 08:06:42 | 1 | PAID → SOL (native) | Executed | `0xfbea6326…` [🐞](https://debug.cow.fi/order/0xfbea6326474fff717eb8b0f3d7d4da5808fbcd80b3e0dfd3c1ddc0c69f254fe3) |
| 08:06:42 | 1 | LLY → SOL (native) | Executed | `0x9db18b28…` [🐞](https://debug.cow.fi/order/0x9db18b28f4669e4c26ced95013eb002d1de9edc0f96dac8e38e1db6ea7b7d425) |
| 08:06:42 | 1 | SPYx → SOL (native) | Executed | `0x2d088437…` [🐞](https://debug.cow.fi/order/0x2d0884372f1cb9caeb7288228d2add45da81c6bb6af3362fa18cb3e01017c291) |
| 08:06:42 | 1 | NVDAx → SOL (native) | Executed | `0x0319f4ef…` [🐞](https://debug.cow.fi/order/0x0319f4ef0843c503b8ae04702175396ebedf6740512baea9f7ceaf11be655080) |
| 08:06:55 | 2 | WOJAK → SOL (native) | Executed | `0x278ee3e5…` [🐞](https://debug.cow.fi/order/0x278ee3e59cad685ada13200d9b0948a0f2a3f2a752dd6a4f8bcd3774f9f0c88d) |
| 08:06:55 | 2 | GUAC → SOL (native) | Executed | `0xfd17a1b6…` [🐞](https://debug.cow.fi/order/0xfd17a1b687e1cdc5744e41177288a156510054f3b66aba4b13088b028fef5c44) |
| 08:06:55 | 2 | AVAX → SOL (native) | Executed | `0x222d34fc…` [🐞](https://debug.cow.fi/order/0x222d34fc98c35bb851e5c5ce0066d27165c488dace49e6aa5543d67f389d4c84) |
| 08:06:56 | 2 | wXRP → SOL (native) | Executed | `0x3da7094c…` [🐞](https://debug.cow.fi/order/0x3da7094c3229bc0f2523f9b22456553231a71563e28d35320e539b971843d9c0) |
| 08:06:56 | 2 | ZEREBRO → SOL (native) | Executed | `0x9315bafe…` [🐞](https://debug.cow.fi/order/0x9315bafedfb103b9aa2736a72a9a7b995e8c805077af6f29dd42039f7929394a) |
| 08:06:56 | 2 | arc → SOL (native) | Executed | `0x43657c35…` [🐞](https://debug.cow.fi/order/0x43657c35bc3df4d58eb15a16f591abcc3ac23c5b41fafbc8369557d574f9079a) |
| 08:06:56 | 2 | CX → SOL (native) | Executed | `0x729ef8c2…` [🐞](https://debug.cow.fi/order/0x729ef8c2ed65ed0e8ee3e79f79a844506de73c3c4ca70667a10f94939892ed83) |
| 08:06:57 | 2 | xHYPE → SOL (native) | Executed | `0x6ff0bef9…` [🐞](https://debug.cow.fi/order/0x6ff0bef98c873bd16ae4e44f165b9ecd94fedee21f2a2c0809e1d98e902ad20e) |
| 08:06:57 | 2 | MANEKI → SOL (native) | Executed | `0x70e2297b…` [🐞](https://debug.cow.fi/order/0x70e2297b1b392cd6c470052e781bf52e04a1d738373554bb8cd3a60eda0280c8) |
| 08:06:58 | 2 | USDT → SOL (native) | Executed | `0x505527ea…` [🐞](https://debug.cow.fi/order/0x505527ea90492641e25acd1ff4c2449749ffb0925e2665577179c71f6b756493) |
| 08:06:58 | 2 | DJT → SOL (native) | Executed | `0x8a55ae14…` [🐞](https://debug.cow.fi/order/0x8a55ae1417451675c2e5c118ee033f61ff3940cb02380ede932973a13c38d831) |
| 08:06:58 | 2 | OTC → SOL (native) | Executed | `0x362478f9…` [🐞](https://debug.cow.fi/order/0x362478f9e36ebbf323b63ae9c2c890a3bff71d3bbc5ab4fd2d3f77ed646476e7) |
| 08:06:59 | 2 | ZERO → SOL (native) | Executed | `0x33491193…` [🐞](https://debug.cow.fi/order/0x334911934ab919ce73cc99ba89cfa420fd40e2910475c26bc24d8cb7ff18406e) |
| 08:06:59 | 2 | SPCXx → SOL (native) | Executed | `0x0869a7ad…` [🐞](https://debug.cow.fi/order/0x0869a7add0f5f719e7bea020f3cca74ef09e7329299281f9f7e180d60ccc2744) |
| 08:06:59 | 2 | MSTRx → SOL (native) | Executed | `0x8456baf0…` [🐞](https://debug.cow.fi/order/0x8456baf0a20d0c2aab61698bde2aef808a72124d4f274c2fec749908fc05794d) |
| 08:06:59 | 2 | TSLAx → SOL (native) | Executed | `0x39b0ac63…` [🐞](https://debug.cow.fi/order/0x39b0ac63202251ad4faf182d0f1314514c5b3bb197068c2e63e44367944abd65) |
| 08:07:00 | 2 | CATE → SOL (native) | Executed | `0x1b7e2d14…` [🐞](https://debug.cow.fi/order/0x1b7e2d142ece28d01e484d236e6219799ce6d8a52d9ac0790f35e91ec0960241) |
| 08:07:00 | 2 | PENGUIN → SOL (native) | Executed | `0xa06cfb2d…` [🐞](https://debug.cow.fi/order/0xa06cfb2df38d767d32ed87d78e92c7a4208005ae06e6cafc30ace311b9ed8a68) |
| 08:07:00 | 2 | three → SOL (native) | Executed | `0x4ad0ffa9…` [🐞](https://debug.cow.fi/order/0x4ad0ffa9759c43cb3bc7c00401dc1b9dd34736fc06022fea9872fab142ee9e13) |
| 08:07:01 | 3 | BOBO → SOL (native) | Executed | `0x2a9ac50c…` [🐞](https://debug.cow.fi/order/0x2a9ac50c724896e7bbbc3fa3b8cdedab6b8a115150c68d1cc1943ecb69c086ca) |
| 08:07:01 | 3 | IO → SOL (native) | Executed | `0xb01cb1a2…` [🐞](https://debug.cow.fi/order/0xb01cb1a261dee421fa9ae906dd75758c2d568f287ad0ba97130d5043b7ae18a3) |
| 08:07:01 | 3 | reUSD → SOL (native) | Executed | `0x96756f98…` [🐞](https://debug.cow.fi/order/0x96756f986c8fe0e18d3e04b37d74c6243e2640e5351d9b96c44c3f682978355b) |
| 08:07:02 | 3 | RAGEGUY → SOL (native) | Executed | `0x7ff35a5b…` [🐞](https://debug.cow.fi/order/0x7ff35a5b9eb8a9a03bac97c4dc999f73f206cb4f61b00f6774a479cdb51132a3) |
| 08:07:02 | 3 | AVICI → SOL (native) | Executed | `0x34769936…` [🐞](https://debug.cow.fi/order/0x3476993611a89fd8942b780f9eb3d3ea6b8d21e598906b20e0f4af06ca38800a) |
| 08:07:02 | 3 | wNEAR → SOL (native) | Executed | `0xfbb19be3…` [🐞](https://debug.cow.fi/order/0xfbb19be3b78b51029c0fb3bea773dd0869d129373f2148d800eee16ca58bd5e9) |
| 08:07:02 | 3 | USDG → SOL (native) | Executed | `0x3f78d30b…` [🐞](https://debug.cow.fi/order/0x3f78d30b9a567e45f77d0586297dfa97634c44040bc656262c712ef89cb5b4fc) |
| 08:07:03 | 3 | METAx → SOL (native) | Executed | `0x2a379122…` [🐞](https://debug.cow.fi/order/0x2a379122987a920bc046cec7db044a47dc21b673c0288db630c79739c23ca07e) |
| 08:07:03 | 3 | JEANPHIL → SOL (native) | Executed | `0x8a6269b2…` [🐞](https://debug.cow.fi/order/0x8a6269b29e77d41c6e70d032b045cbfe6cde0fbfa4e2ee8a2ba420c6c6788c78) |
| 08:07:04 | 3 | COCKROACH → SOL (native) | Executed | `0x38e5fd7c…` [🐞](https://debug.cow.fi/order/0x38e5fd7c959df7bdf68293651e809335fa8efe262a11870b9395a63fe2fe5c0a) |
| 08:07:04 | 3 | BURNIE → SOL (native) | Executed | `0x21cfa3d3…` [🐞](https://debug.cow.fi/order/0x21cfa3d372a9f35d17a7a15919954df8090f5a65439ade32b09ed958c11e2de7) |
| 08:07:04 | 3 | GLDx → SOL (native) | Executed | `0xd1af3e05…` [🐞](https://debug.cow.fi/order/0xd1af3e05f5c379ccdcd21b81fc668bc02ecc547512099cb38acfaf86849bbc9f) |
| 08:07:05 | 3 | DKNG → SOL (native) | Executed | `0x64643dfb…` [🐞](https://debug.cow.fi/order/0x64643dfbb67d91c4f0c24fdce1cb370a9d3667f39bbed1f3902a32704340a392) |
| 08:07:05 | 3 | QQQx → SOL (native) | Executed | `0x83f96546…` [🐞](https://debug.cow.fi/order/0x83f965469b32798a564baa66cfc885b01ff35481d295fda2ee690a42ad395a6d) |
| 08:07:05 | 3 | DREGG → SOL (native) | Executed | `0x490c4814…` [🐞](https://debug.cow.fi/order/0x490c4814554cf4afe8d60b4f83ba3cf800bd934c8a0cdd3dab2da20287f6b449) |
| 08:07:05 | 3 | URA → SOL (native) | Executed | `0x0a4a6f41…` [🐞](https://debug.cow.fi/order/0x0a4a6f41af6f29d9802f147bb2420b340a9f32e9224cf9119d2c79045d345cc9) |
| 08:07:06 | 4 | VIRTUAL → SOL (native) | Executed | `0xb30408ad…` [🐞](https://debug.cow.fi/order/0xb30408ade7d350230f498a354a1712627dd02b374bac72eaed0121c5280becc2) |
| 08:07:06 | 4 | SOLAMA → SOL (native) | Executed | `0x183d4181…` [🐞](https://debug.cow.fi/order/0x183d41816121a9617c3d216386485d26c130bae40d04816c47ec79bbeb9d5f27) |
| 08:07:06 | 4 | 67 → SOL (native) | Executed | `0x2af81fc0…` [🐞](https://debug.cow.fi/order/0x2af81fc0e60900dc0daea46937bbe3211a3666718aee2f22ddbd3278e01b3358) |
| 08:07:06 | 4 | UNI → SOL (native) | Executed | `0x38267635…` [🐞](https://debug.cow.fi/order/0x3826763548e717bfef0255397fa8771f3cf903d03922ff4ff9a3ba3652098aaf) |
| 08:07:07 | 4 | MF → SOL (native) | Executed | `0xb6cd7b24…` [🐞](https://debug.cow.fi/order/0xb6cd7b24b13d599890a29bfec10bfc7ceac36b1f1db327ad3fe1119fb047e716) |
| 08:07:07 | 4 | STONK → SOL (native) | Executed | `0x6bfe07e7…` [🐞](https://debug.cow.fi/order/0x6bfe07e7655ba5314448104f1b843a2ba65013f73ea91d422b27c2ede552b83d) |
| 08:07:08 | 4 | CODEC → SOL (native) | Executed | `0x24446d7e…` [🐞](https://debug.cow.fi/order/0x24446d7ed1013487f95b270f2b02d6a28f7a668b4526b7d497651e82a9c5f7cf) |
| 08:07:08 | 4 | PERPSPAD → SOL (native) | Executed | `0xef944fcb…` [🐞](https://debug.cow.fi/order/0xef944fcbf2dc8c8819ecb87d68a89c18e9c0e011afd8df83845ab80948f48419) |
| 08:07:08 | 4 | PURPE → SOL (native) | Executed | `0x467c31f6…` [🐞](https://debug.cow.fi/order/0x467c31f6316a1dee10464cc7e7985161755ead9652d6ac56778e1f8c82f85af0) |
| 08:07:08 | 4 | MET → SOL (native) | Executed | `0x98a7310e…` [🐞](https://debug.cow.fi/order/0x98a7310e1ca01f49103e20b3a1e846ba3bc2da1eacd668257b50cadcb76f2969) |
| 08:07:09 | 4 | PLTRx → SOL (native) | Executed | `0x33aa0f10…` [🐞](https://debug.cow.fi/order/0x33aa0f105df011f8c23d9432521e158aa30ed39458269a5b14028ee4ee36a54a) |
| 08:07:09 | 4 | PFE → SOL (native) | Executed | `0x06d1c5bb…` [🐞](https://debug.cow.fi/order/0x06d1c5bb8c36dea0f0f86505c49f949558e286e151662da942444fe4da0759cf) |
| 08:07:09 | 4 | BABA → SOL (native) | Executed | `0xf7949a15…` [🐞](https://debug.cow.fi/order/0xf7949a15eb4e4d1420d428b29800787b02c25fbd88819336007d870b13e1b8c0) |
| 08:07:10 | 4 | HeavyPulp → SOL (native) | Executed | `0xa01178e5…` [🐞](https://debug.cow.fi/order/0xa01178e5d782afc24d5389ffe2ddfc4a225068c46968e4a732e0f63f7a233560) |
| 08:07:10 | 4 | baton → SOL (native) | Executed | `0xd08245a4…` [🐞](https://debug.cow.fi/order/0xd08245a4a1afa8667fc9c613ff52299159ba71165f233ed1c9d84a554e2dd1da) |
| 08:07:10 | 4 | MSFTx → SOL (native) | Executed | `0xb4ba13c1…` [🐞](https://debug.cow.fi/order/0xb4ba13c1c36dc08b1f39d371f2e3cf4478df7dc49b723e09253a1e2d4e9525fb) |
| 08:07:10 | 4 | COINx → SOL (native) | Executed | `0x2afa7635…` [🐞](https://debug.cow.fi/order/0x2afa7635e12492d523865200518a63da2bbf9d47bf29101d19b0c932354d0b0f) |
| 08:07:11 | 4 | GOOGLx → SOL (native) | Executed | `0xde9c0fd9…` [🐞](https://debug.cow.fi/order/0xde9c0fd9ff111e9c443226397951e37af8da3225ef8d570fc0c4987b53c445b8) |
| 08:07:11 | 5 | PYTHIA → SOL (native) | Executed | `0x69abecba…` [🐞](https://debug.cow.fi/order/0x69abecbad7ef9753a13d94b29345103e0f5173f9862ef871aafc39ae06abced0) |
| 08:07:11 | 5 | HEEBOO → SOL (native) | Executed | `0x307022eb…` [🐞](https://debug.cow.fi/order/0x307022eb9f4d4a295a4daf52ebd6abb58a52efca7b040c606ee7ef1035c6ea4e) |
| 08:07:12 | 5 | MORPHO → SOL (native) | Executed | `0x647f73d8…` [🐞](https://debug.cow.fi/order/0x647f73d87a182e74dcd20e5916435f8b7f1e416cf1555d47b31d28e0ae7a3e27) |
| 08:07:12 | 5 | USX → SOL (native) | Executed | `0x030e1ffa…` [🐞](https://debug.cow.fi/order/0x030e1ffa0d77893df699a243183f557b39d15030b2da568884fcf954f11fe980) |
| 08:07:12 | 5 | CHILLGUY → SOL (native) | Executed | `0x5a67dc3e…` [🐞](https://debug.cow.fi/order/0x5a67dc3e381eba3ddc5a31f958880d14fddb744d2fa5de0d8075adac6dde60af) |
| 08:07:13 | 5 | HARAMBE → SOL (native) | Executed | `0xfe5e543d…` [🐞](https://debug.cow.fi/order/0xfe5e543deba5497294360043f8a23f8998a73d0b93c4cbae7e8a9a0fd040134b) |
| 08:07:13 | 5 | eUSX → SOL (native) | Executed | `0xc0026bb2…` [🐞](https://debug.cow.fi/order/0xc0026bb2a5320682ae1346f82f3af5af1fe5114d988c2c329bffc1aa017c6d2d) |
| 08:07:13 | 5 | WEN → SOL (native) | Executed | `0x5da86f9d…` [🐞](https://debug.cow.fi/order/0x5da86f9d573ed685024c0fc7917a020e6128708e2216d3912f9969cd73761ef6) |
| 08:07:14 | 5 | OGDOGE → SOL (native) | Executed | `0x7b791721…` [🐞](https://debug.cow.fi/order/0x7b791721d09758e83cc895d3e33f4d504a8330e5d49df671f58819b8efc9b65e) |
| 08:07:14 | 5 | ZEC → SOL (native) | Executed | `0x40988760…` [🐞](https://debug.cow.fi/order/0x4098876000d0387686f37c201c11753f3c90c9d0d129f23370a406e1c43e6488) |
| 08:07:14 | 5 | CHAT → SOL (native) | Executed | `0xa9405ceb…` [🐞](https://debug.cow.fi/order/0xa9405ceb36956054de22507fd430f061d5b7c33ebe2b0a29906736527da2544d) |
| 08:07:15 | 5 | MCDx → SOL (native) | Executed | `0xc2788848…` [🐞](https://debug.cow.fi/order/0xc278884830903c525d1555920c454ed50e9a8fa8f242f49a745445b937ef1f88) |
| 08:07:15 | 5 | RKLB → SOL (native) | Executed | `0x693a9ad5…` [🐞](https://debug.cow.fi/order/0x693a9ad5a0e67365c3e6deeffd434a59311c4ea41a8aa8cafb0ba2c40eefbad8) |
| 08:07:16 | 5 | AAPLx → SOL (native) | Executed | `0x1e39749e…` [🐞](https://debug.cow.fi/order/0x1e39749ec94041e10df8155a35da2232b802206e81ac9e5de37e54b46dc3eeb7) |
| 08:07:16 | 5 | DRAM → SOL (native) | Executed | `0x2e4e8b65…` [🐞](https://debug.cow.fi/order/0x2e4e8b65e10c8fd75ffb5b6545c75065f67fe27d0f21b9c67906fb37dfe59c44) |
| 08:07:16 | 5 | GMEx → SOL (native) | Executed | `0xa9eba57a…` [🐞](https://debug.cow.fi/order/0xa9eba57a38e922976cc007637a7539f115bcca188c71387814fae7d5d74c5d9d) |
| 08:07:16 | 5 | SKHY → SOL (native) | Executed | `0x8a250c8a…` [🐞](https://debug.cow.fi/order/0x8a250c8a1ea3e6b906f476d00558ad9879e44f7129a9885f83f4272fd4602a15) |
| 08:07:17 | 5 | e/acc → SOL (native) | Executed | `0xe720bb82…` [🐞](https://debug.cow.fi/order/0xe720bb829d0bf455d3b8499302ccf77aee1bee3f8e110bec478380c64ab68984) |
| 08:07:17 | 5 | HOODx → SOL (native) | Executed | `0x5b4fa8e7…` [🐞](https://debug.cow.fi/order/0x5b4fa8e71b9de1b532ed6c4641643ba6083f3676f6d175a94d07d9815993a750) |
| 08:07:17 | 6 | AAVE → SOL (native) | Executed | `0xcf9a1999…` [🐞](https://debug.cow.fi/order/0xcf9a19991c92f9961e8a65dc5810813af46f243cf66b0de1f3c573dfc5823643) |
| 08:07:17 | 6 | retire → SOL (native) | Executed | `0x073eef7e…` [🐞](https://debug.cow.fi/order/0x073eef7e1e3aeca8086287e06f4a8c309b8913970cd8a8690bfa425133083cc2) |
| 08:07:18 | 6 | GOLD → SOL (native) | Executed | `0x228b7a94…` [🐞](https://debug.cow.fi/order/0x228b7a94bc2b6ba73a4374747f37bfb1e96b62a5779b2160283d6cd66b1ce373) |
| 08:07:18 | 6 | WHALES → SOL (native) | Executed | `0xa1c01756…` [🐞](https://debug.cow.fi/order/0xa1c017565ebc0255dd4916b35284ef5bd0012740c8e6b70b2b48a92ad3ec9884) |
| 08:07:19 | 6 | XMR → SOL (native) | Executed | `0xc640f9e5…` [🐞](https://debug.cow.fi/order/0xc640f9e51cc4ed0e059cafc01f1d64609201c4c90f3d847718d8bd43b1e6f2e1) |
| 08:07:19 | 6 | syrupUSDC → SOL (native) | Executed | `0x01e48bb0…` [🐞](https://debug.cow.fi/order/0x01e48bb085e6f22093a9cb0482eb2fde7409386e6983db864ab1fe0ffa794888) |
| 08:07:19 | 6 | FTX Token → SOL (native) | Executed | `0x85ac7f72…` [🐞](https://debug.cow.fi/order/0x85ac7f72a8a360699656dc4580cd54a3c4166ba94a3c4b857b49c42e227dc07d) |
| 08:07:19 | 6 | STREAM → SOL (native) | Executed | `0x7a7cd036…` [🐞](https://debug.cow.fi/order/0x7a7cd0366a243b5dd28df21632f192552f908f809372b9a2540bba7310d502c7) |
| 08:07:20 | 6 | PEAQ → SOL (native) | Executed | `0xcc74acaf…` [🐞](https://debug.cow.fi/order/0xcc74acafc234791780af829c879dcaacd87184a216019247748f20fa54d747c3) |
| 08:07:20 | 6 | AUDIO → SOL (native) | Executed | `0x35d0ddb7…` [🐞](https://debug.cow.fi/order/0x35d0ddb7417a13ef2caa8fa1d4577ff9c7f0a92260cca630b4dc8aef0317cd3d) |
| 08:07:20 | 6 | LINK → SOL (native) | Executed | `0x89d7e3a0…` [🐞](https://debug.cow.fi/order/0x89d7e3a0661fad004af8684261c99a8a8720a3273255b878a4be99798d298ce0) |
| 08:07:21 | 6 | JupUSD → SOL (native) | Executed | `0x90880958…` [🐞](https://debug.cow.fi/order/0x90880958cc23c12e6fe7461c3d5e3957ddb13fc7a6073614646deb7f349f2b86) |
| 08:07:21 | 6 | HODL → SOL (native) | Executed | `0x8aa42ce1…` [🐞](https://debug.cow.fi/order/0x8aa42ce142b4f4a816810171f609ae8b5c8c69941909219955861486202d30dd) |
| 08:07:21 | 6 | MCDx → SOL (native) | Executed | `0x8ede2ada…` [🐞](https://debug.cow.fi/order/0x8ede2ada19ecbc4e0fe6ce99716ac481804e73b2e188eaf94962d98ad384091a) |
| 08:07:22 | 6 | AMZNx → SOL (native) | Executed | `0x1275f606…` [🐞](https://debug.cow.fi/order/0x1275f606613c6e455263bca3f577d99fc6ac393a03069b4cf53ba5439d0bee64) |
| 08:07:22 | 6 | MSFTx → SOL (native) | Executed | `0xc0e479b7…` [🐞](https://debug.cow.fi/order/0xc0e479b7df15fb5d9475d108dc65e4d602727e7a9223a07a266a8d4940f43705) |
| 08:07:22 | 6 | STRCx → SOL (native) | Executed | `0x82104fea…` [🐞](https://debug.cow.fi/order/0x82104fead7eac5d4d0a9895160be6e8c74632a794e7fba8e219f5265f1c0bfe2) |
| 08:07:23 | 7 | HAMMY → SOL (native) | Executed | `0x86c9e6e3…` [🐞](https://debug.cow.fi/order/0x86c9e6e386b2ef9d0fc4bb1d300b1d3b265f316b0a4fceba2d4168464f9db14b) |
| 08:07:23 | 7 | xBTC → SOL (native) | Executed | `0xb7a0b80e…` [🐞](https://debug.cow.fi/order/0xb7a0b80e1cc79beb4dfc1832e53997ef9e2d657faeaf1c95d3047cc2f21d014d) |
| 08:07:23 | 7 | Cake → SOL (native) | Executed | `0x16fbd4a2…` [🐞](https://debug.cow.fi/order/0x16fbd4a25cb6f9952c46d29508713187115ff447bb2e71ae32beababb2e09f7e) |
| 08:07:24 | 7 | stSOL → SOL (native) | Executed | `0x1e858479…` [🐞](https://debug.cow.fi/order/0x1e8584794016353dee3855d933f0b39e29ebd341d1eaae2da5c9f5dd9ca00088) |
| 08:07:24 | 7 | hyUSD → SOL (native) | Executed | `0x7fb2c58b…` [🐞](https://debug.cow.fi/order/0x7fb2c58bd1e9dae71420c66f21ab5ff670f70e3b1c71cf8df4a3173805684706) |
| 08:07:24 | 7 | CHILLHOUSE → SOL (native) | Executed | `0xff5539fe…` [🐞](https://debug.cow.fi/order/0xff5539fedde1d3750d43bb5c67734f07c9e127f0d4119364c9358f4cd2ee3e7f) |
| 08:07:24 | 7 | READY → SOL (native) | Executed | `0x2c03d758…` [🐞](https://debug.cow.fi/order/0x2c03d758de214f4ebc309d1dd2c1a6356e12c34128ff3fe1dd467706e88eb5ae) |
| 08:07:25 | 7 | LOCKIN → SOL (native) | Executed | `0xd13d6dfa…` [🐞](https://debug.cow.fi/order/0xd13d6dfa1b00533e5099bd48140c8944e9fff4bfade4d41d8a8a072df57ead32) |
| 08:07:25 | 7 | hSOL → SOL (native) | Executed | `0xd0fb76fd…` [🐞](https://debug.cow.fi/order/0xd0fb76fd3072bcec6f25f90a2733b93c1a5197b06878e2a8798b726dc3fabc7b) |
| 08:07:25 | 7 | HOOKED → SOL (native) | Executed | `0xde63ab13…` [🐞](https://debug.cow.fi/order/0xde63ab13072969ff0c0fe84874d95eafcf12181bfc1ef5c4d37c46ff86d05479) |
| 08:07:26 | 7 | PLTRx → SOL (native) | Executed | `0xc29c80fc…` [🐞](https://debug.cow.fi/order/0xc29c80fc3c27ad7405880eaa85b14c112dfe84bf7d2a568afa118c2e88582ae8) |
| 08:07:26 | 7 | VIDAx → SOL (native) | Executed | `0x64f87422…` [🐞](https://debug.cow.fi/order/0x64f87422f34a85c6c4a2be50328e8da1dd17ab7c91aa73fbb57bc4c869123b29) |
| 08:07:26 | 7 | DFDVx → SOL (native) | Executed | `0xe1261721…` [🐞](https://debug.cow.fi/order/0xe126172174fcc666bcb3ab4300ecf172472b43929e0ddc0bd2266654352b1305) |
| 08:07:27 | 7 | PYUSD → SOL (native) | Executed | `0xd0cb66c6…` [🐞](https://debug.cow.fi/order/0xd0cb66c6668fe929a00e837d9953f0efbc8e75069652756102f4ec1b1895c5a9) |
| 08:07:27 | 7 | WINGS → SOL (native) | Executed | `0x251afe09…` [🐞](https://debug.cow.fi/order/0x251afe09dac39ab4595a2610495caf5cb6a77c3a6de7c8a84e51b0f607aa6279) |
| 08:07:27 | 8 | PYTH → SOL (native) | Executed | `0x8c4d772b…` [🐞](https://debug.cow.fi/order/0x8c4d772bd80dd4c70bdde205b7fae9376fbd090f71a79f8119982c32fed6c6be) |
| 08:07:28 | 8 | USDe → SOL (native) | Executed | `0x16f35b71…` [🐞](https://debug.cow.fi/order/0x16f35b71b0eb3d61205c85606480e3cfdfbf14aad71ce33762bc2a2bdb43fa72) |
| 08:07:28 | 8 | GP → SOL (native) | Executed | `0x5d500988…` [🐞](https://debug.cow.fi/order/0x5d500988024e7af48878ddccbcc21b6822bc7344648fbdc1f6aabab52040c154) |
| 08:07:28 | 8 | LIKE → SOL (native) | Executed | `0x1e21751d…` [🐞](https://debug.cow.fi/order/0x1e21751df1ce8bc6f975bfe887ef9aa1ed7498d585879d9467850fb1bb1f6e26) |
| 08:07:29 | 8 | ACT → SOL (native) | Executed | `0x410121d1…` [🐞](https://debug.cow.fi/order/0x410121d1b6ec94c0bba6ee75ad52211243f3200c773cb95a1ee4f1a5f3f84be6) |
| 08:07:29 | 8 | RETARDIO → SOL (native) | Executed | `0xb653fb44…` [🐞](https://debug.cow.fi/order/0xb653fb447f28a74faaf6e25ddbb5eb5e438a582861744ccb344aef3fa73c7bdd) |
| 08:07:29 | 8 | Anon → SOL (native) | Executed | `0xc746d4ff…` [🐞](https://debug.cow.fi/order/0xc746d4ff9ac21d128e9081898f5807b3003969f29e68e4e94e3a62be11aedca0) |
| 08:07:30 | 8 | ONyc → SOL (native) | Executed | `0xf585a9f4…` [🐞](https://debug.cow.fi/order/0xf585a9f4cee4d3a1f2c9f8259137706c91a277cf364aa8c8bf8540c2b565b271) |
| 08:07:30 | 8 | BILLY → SOL (native) | Executed | `0x6f9474a9…` [🐞](https://debug.cow.fi/order/0x6f9474a9119e8de291cced35ffda4416290521ec465a25358d708dcaa52922ea) |
| 08:07:30 | 8 | Hobbes → SOL (native) | Executed | `0x8f1e5580…` [🐞](https://debug.cow.fi/order/0x8f1e5580952d9843ec45acf2410838d1be6416c5a9e26ef0c09172e53ea7fffa) |
| 08:07:31 | 8 | GRIFFAIN → SOL (native) | Executed | `0xb6adb5f2…` [🐞](https://debug.cow.fi/order/0xb6adb5f28beea2eae938a3ff8a90b38cae4259538f4122a9494c4350fce7b14e) |
| 08:07:31 | 8 | BRK.Bx → SOL (native) | Executed | `0x042db266…` [🐞](https://debug.cow.fi/order/0x042db2663ba331a411f792866aeec0b4137396d7de190a1da953544198f7286f) |
| 08:07:31 | 8 | KOx → SOL (native) | Executed | `0x305abc94…` [🐞](https://debug.cow.fi/order/0x305abc94963c41b05b3a2404e211d61445152f36d1f9812e756b0b1fad75f916) |
| 08:07:32 | 8 | INTC → SOL (native) | Executed | `0x72bd37a0…` [🐞](https://debug.cow.fi/order/0x72bd37a046204f6ee5dc3ea6ccb46d7c3c571ad0e2e2ec005b4172c7709206aa) |
| 08:07:32 | 8 | INTCx → SOL (native) | Executed | `0x9d0dbdb0…` [🐞](https://debug.cow.fi/order/0x9d0dbdb093f2ab0f714292472dbce51894ede389ed8324e43ecc192d07f71c0e) |
| 08:07:33 | 8 | GLDx → SOL (native) | Executed | `0x4098cb22…` [🐞](https://debug.cow.fi/order/0x4098cb22c847f1c26aafac472cd7f509599e848516ba688c0fcef0440e1d35ca) |
| 08:07:33 | 9 | HAROLD → SOL (native) | Executed | `0xf086eeb9…` [🐞](https://debug.cow.fi/order/0xf086eeb9c60c71d7e5becf2ed0b461b9c94c35670e5eaa7bb77e146cb1c1907f) |
| 08:07:33 | 9 | ARX → SOL (native) | Executed | `0x0407d30a…` [🐞](https://debug.cow.fi/order/0x0407d30a6da5b732ebfa8babdea679b33fc8a5b3eebef65d05bbc5bdceb3bcbc) |
| 08:07:34 | 9 | dreams → SOL (native) | Executed | `0x26cdcf69…` [🐞](https://debug.cow.fi/order/0x26cdcf6974c2139c892e7c9249d6a2e0221dce16b8da1adcf96b50a2700e4f14) |
| 08:07:34 | 9 | $BEER → SOL (native) | Executed | `0xd2aaf411…` [🐞](https://debug.cow.fi/order/0xd2aaf4110d3fcbb0da373deeeb33252f7ae2d72a0a5cf335c19cd530db6598a6) |
| 08:07:34 | 9 | UFD → SOL (native) | Executed | `0xb4f1f1b0…` [🐞](https://debug.cow.fi/order/0xb4f1f1b0e4772eca39a6357c3d6f750fd6f6f155155e3086aa2d0d0a2d8b20cb) |
| 08:07:34 | 9 | PEPE → SOL (native) | Executed | `0x397392fd…` [🐞](https://debug.cow.fi/order/0x397392fd412a4e0423ab0c6c5275a1136533455b37bbdec21fda41b122c82b57) |
| 08:07:34 | 9 | MUSHU → SOL (native) | Executed | `0x9903864d…` [🐞](https://debug.cow.fi/order/0x9903864d0f11848431c30d1740948c195db6b33d7f8d73b90aab00b6e54115e6) |
| 08:07:35 | 9 | lanternSOL → SOL (native) | Executed | `0x576c7beb…` [🐞](https://debug.cow.fi/order/0x576c7bebca603f5c45cf9700f8c09a65cf0dd3f1a927aaabcccbb69c049cb532) |
| 08:07:35 | 9 | GHOST → SOL (native) | Executed | `0x4d262bcb…` [🐞](https://debug.cow.fi/order/0x4d262bcbeac900566d3369127ebda81310f1e44435facd00f0b7811382287c8e) |
| 08:07:35 | 9 | ALON → SOL (native) | Executed | `0x56fd9b13…` [🐞](https://debug.cow.fi/order/0x56fd9b1367540a6cfb6dca8d55b16feffa7c3467fdeb150ded00e49c3a744487) |
| 08:07:35 | 9 | MUx → SOL (native) | Executed | `0x9d7e738a…` [🐞](https://debug.cow.fi/order/0x9d7e738a7b528093a9826c6177d0286a83938ddc5d43d3c8a37857b051d4e10d) |
| 08:07:35 | 9 | TQQQx → SOL (native) | Executed | `0x4a8a61e8…` [🐞](https://debug.cow.fi/order/0x4a8a61e80a9167a63aecf697a6a5bde71829bd98f957e6f44e98a439c82dc7a4) |
| 08:07:36 | 9 | AAPLx → SOL (native) | Executed | `0x59c617e9…` [🐞](https://debug.cow.fi/order/0x59c617e983e8f8f76a001c9240a5a702ca566f1ca7ad19b15d26077e1a4c6467) |
| 08:07:36 | 9 | fone → SOL (native) | Executed | `0xa2ec969b…` [🐞](https://debug.cow.fi/order/0xa2ec969b97ef71088e1a74aafdccdaf693f1a9e8536a8e219d286853a057674b) |
| 08:07:36 | 9 | PUMP → SOL (native) | Executed | `0x747bcce4…` [🐞](https://debug.cow.fi/order/0x747bcce452de5b1eede3165d91c2e1aa93f31d853861f232726ec456414a5696) |
| 08:07:36 | 9 | ORCLx → SOL (native) | Executed | `0x17a6ca2f…` [🐞](https://debug.cow.fi/order/0x17a6ca2fb404d6020660bc5d84be25c9a5bec9d20587b41d917e9bbb7c43c078) |
| 08:07:37 | 9 | MANIFEST → SOL (native) | Executed | `0x4a8cf148…` [🐞](https://debug.cow.fi/order/0x4a8cf1486572ae5b410868c228e7f7eb683c5efb151b113c0c35922a18ad70de) |
| 08:07:37 | 10 | cbBTC → SOL (native) | Executed | `0xbc6fcc4b…` [🐞](https://debug.cow.fi/order/0xbc6fcc4b4f4a4a9dbf96623c76c8306711cfb959627cce20e16d52f9467d95c4) |
| 08:07:37 | 10 | $HACHI → SOL (native) | Executed | `0x30417a6b…` [🐞](https://debug.cow.fi/order/0x30417a6b3c0cba9072481c2378260da3be0e7254aa2533a97fc9b614de7a123f) |
| 08:07:37 | 10 | TROLL → SOL (native) | Executed | `0xcb3c842a…` [🐞](https://debug.cow.fi/order/0xcb3c842a5040acf317db34bd469184e0689d9fb787ca1f6d565db7ed300e6ef6) |
| 08:07:37 | 10 | vSOL → SOL (native) | Executed | `0x70df2b27…` [🐞](https://debug.cow.fi/order/0x70df2b2786ec055d71248bd8b8a4779c91084e7ba5c496e4ca4c7a73491d5096) |
| 08:07:37 | 10 | pippin → SOL (native) | Executed | `0x45fcecfc…` [🐞](https://debug.cow.fi/order/0x45fcecfc3c312981478a1324547597a95b05c4c1eff473b6fb36109274737945) |
| 08:07:38 | 10 | SANC → SOL (native) | Executed | `0x21046d73…` [🐞](https://debug.cow.fi/order/0x21046d732c6144c502817cc8badffa8b1f897d232e8441735bbbfc0c50e0c800) |
| 08:07:38 | 10 | SLOTH → SOL (native) | Executed | `0xdc500845…` [🐞](https://debug.cow.fi/order/0xdc500845a74a29fd5504b54945577e030d40681296f36077b22264b1b9525275) |
| 08:07:38 | 10 | Ban → SOL (native) | Executed | `0xc7564c2d…` [🐞](https://debug.cow.fi/order/0xc7564c2dea9c3a6ee77c2f275b0a02576f48195c2c0ae6f0f68d0bd41d88afe0) |
| 08:07:38 | 10 | Bert → SOL (native) | Executed | `0x1b0801bb…` [🐞](https://debug.cow.fi/order/0x1b0801bb0d9e67a05e2e1a97fa5010d03f6de893361c5549c8b37b0509d3a42c) |
| 08:07:38 | 10 | CRED → SOL (native) | Executed | `0x97213302…` [🐞](https://debug.cow.fi/order/0x9721330272fc2e904c2bb5d2edbc07297d8d05b92eaf109ed2b01e173ec7639f) |
| 08:07:39 | 10 | ONyc → SOL (native) | Executed | `0x8cd89d90…` [🐞](https://debug.cow.fi/order/0x8cd89d90c9de0a62ad2141d656974bef1589aad02e0846882e8c72f5b930de70) |
| 08:07:39 | 10 | DOGE → SOL (native) | Executed | `0x16a10b13…` [🐞](https://debug.cow.fi/order/0x16a10b1380cc4218a97f788a3c05733f895adde73847c5025ebabda0fa148276) |
| 08:07:39 | 10 | SKR → SOL (native) | Executed | `0xc760ce64…` [🐞](https://debug.cow.fi/order/0xc760ce648e125887d3cb5ebcae7885c1f96fb1f5bfb4f39ff35995b175d26723) |
| 08:07:39 | 10 | knightcat → SOL (native) | Still open | `0xb11c6530…` [🐞](https://debug.cow.fi/order/0xb11c6530c1349a5247a9ba811dba5b7a63c451930e9c7b4108c19c00cf7ef688) |
| 08:07:39 | 10 | WMTx → SOL (native) | Executed | `0x1918a994…` [🐞](https://debug.cow.fi/order/0x1918a994e8e1869afe9d4500c35a7202a12e3f0acd8ac27ad9d82bc09a5c6d93) |
| 08:07:40 | 10 | TSLAx → SOL (native) | Executed | `0xfc0dd160…` [🐞](https://debug.cow.fi/order/0xfc0dd16027b7a659abf886ec26e2eec9b7fc63bbfc9d049ccbba925a9865ab59) |
| 08:07:40 | 10 | SNDK → SOL (native) | Executed | `0x6825321f…` [🐞](https://debug.cow.fi/order/0x6825321f8b156b933bcd158333ad511b39e48cbf53b30d75a5410859c52c1aaa) |
| 08:07:40 | 10 | NFLXx → SOL (native) | Executed | `0x65b631b2…` [🐞](https://debug.cow.fi/order/0x65b631b20c07bb956f82b4e55886c3adc4d94ca79307995ce2cb055849e220f6) |
| 08:07:40 | 10 | AVGOx → SOL (native) | Executed | `0xf0c1d3ea…` [🐞](https://debug.cow.fi/order/0xf0c1d3ea0f1e16a725f619f60fd0bf40a0dd0861e55721ae465d449350656982) |
| 08:07:41 | 10 | LMT → SOL (native) | Executed | `0x87de1970…` [🐞](https://debug.cow.fi/order/0x87de19708eccc02f3771b317c61d303bc2130fb694bea2d18daa32375fe8ad52) |
| 08:08:13 | 11 | ALPHA → SOL (native) | Executed | `0xbe5e745d…` [🐞](https://debug.cow.fi/order/0xbe5e745de0577ade09016388c107338fd08e582916e9a1dab793688dfbd2f753) |
| 08:08:13 | 11 | ETH → SOL (native) | Executed | `0xf35cd7b3…` [🐞](https://debug.cow.fi/order/0xf35cd7b33b34c5b21f23443f70ffbf6c4fc5f1af67d68c408b74ac31edf67cc1) |
| 08:08:13 | 11 | LIT → SOL (native) | Executed | `0x4753a310…` [🐞](https://debug.cow.fi/order/0x4753a310f7dfbb58899b13f2e997fb093302f090435a8b311127ef661644227b) |
| 08:08:14 | 11 | Bonk → SOL (native) | Executed | `0x0bc22e7d…` [🐞](https://debug.cow.fi/order/0x0bc22e7d754e25e2ec02797850ebd56c5caa72d2784289be4c82d07f488a10f6) |
| 08:08:14 | 11 | SOLC → SOL (native) | Executed | `0xbc71c4ae…` [🐞](https://debug.cow.fi/order/0xbc71c4ae84e9305fa71243fcb49ef800a476dadb5f1ddcc3ca95d70bf570ce00) |
| 08:08:15 | 11 | DOOD → SOL (native) | Executed | `0x2fea5bb6…` [🐞](https://debug.cow.fi/order/0x2fea5bb60a077cf60e045862c7cc18ebaeb713de98588e6c9adccc8a63f2f2a6) |
| 08:08:15 | 11 | PBTC → SOL (native) | Executed | `0xd3f0b13f…` [🐞](https://debug.cow.fi/order/0xd3f0b13fc841209fe0fb0d5385a792a09054809123f680686679ff8302b31495) |
| 08:08:15 | 11 | LMAO! → SOL (native) | Executed | `0xae6d2ca4…` [🐞](https://debug.cow.fi/order/0xae6d2ca4d4829d6ba01506ed0b4a83ddc54cdf8599edf4d42dc6f91f48cfca9b) |
| 08:08:16 | 11 | neet → SOL (native) | Executed | `0xd94235c5…` [🐞](https://debug.cow.fi/order/0xd94235c52e9721a526e3abe76bb997f544a61d6456533746f282bc1eaea5abff) |
| 08:08:16 | 11 | Pepe → SOL (native) | Executed | `0x5c5efbca…` [🐞](https://debug.cow.fi/order/0x5c5efbca9d98304bee7c35933845c6f9ca341e6f044ca44026b74fd8f609fd6e) |
| 08:08:17 | 11 | AMDx → SOL (native) | Executed | `0xdb508331…` [🐞](https://debug.cow.fi/order/0xdb508331eedf6d40270b1d6099378648f07d2dfea40777e8a0cf81c0ffdd304e) |
| 08:08:17 | 11 | MRVLx → SOL (native) | Executed | `0xcc8655cb…` [🐞](https://debug.cow.fi/order/0xcc8655cbc83370c1004ed90b0b3d143cd0439c808889da0789cb81bcd4dbd87c) |
| 08:08:17 | 11 | COINx → SOL (native) | Executed | `0xb143a49b…` [🐞](https://debug.cow.fi/order/0xb143a49bd28ba31b5e5603f2b36718ac5ee202eaffe5294bf0c4bdc459fb9c3b) |
| 08:08:17 | 11 | SOLANGELES → SOL (native) | Executed | `0xc3a6a6d7…` [🐞](https://debug.cow.fi/order/0xc3a6a6d7632ed21a5f552b612a419a5d38bf0da9fbc03bcb9cbc4197d71a5b3c) |
| 08:08:18 | 11 | COST → SOL (native) | Executed | `0xf13c8fb3…` [🐞](https://debug.cow.fi/order/0xf13c8fb39d11a48db7c6f53a87ed411da7b23843bf530a196e0eb6903652c0fc) |
| 08:08:18 | 11 | XOMx → SOL (native) | Executed | `0x3110908f…` [🐞](https://debug.cow.fi/order/0x3110908fdd223684d2be66e4bed4329522f8609a8131265b1c30663ffadc0387) |
| 08:08:19 | 12 | TAI → SOL (native) | Executed | `0x14647a3a…` [🐞](https://debug.cow.fi/order/0x14647a3a66781b6964e2098ec942c29ddf0b76886f286333af81a5c192371a0a) |
| 08:08:19 | 12 | GEOD → SOL (native) | Executed | `0xa58b0c77…` [🐞](https://debug.cow.fi/order/0xa58b0c7770a9a472bbfcc8af159f9fbaa1c97f2a436ab75589941064a2b6b031) |
| 08:08:19 | 12 | ATR → SOL (native) | Executed | `0xbe870ddc…` [🐞](https://debug.cow.fi/order/0xbe870ddc3c0b099d8c0a6fa32214303b13e8b14f02e66c44b4ad90005aa39bd6) |
| 08:08:20 | 12 | INJ → SOL (native) | Executed | `0xe3eb5b83…` [🐞](https://debug.cow.fi/order/0xe3eb5b8364722feff4466f5f10457a9ea4bc0331af62ccbf48f8d95e48d5195d) |
| 08:08:20 | 12 | nub → SOL (native) | Executed | `0xf2e6894e…` [🐞](https://debug.cow.fi/order/0xf2e6894e4fa3353d91139f3224b8960f015a205351fcc49478dd8e4f9eecc238) |
| 08:08:20 | 12 | GRASS → SOL (native) | Executed | `0x0b07a1d4…` [🐞](https://debug.cow.fi/order/0x0b07a1d44addf8b854bd1b8c02b6bb4e5fb306756bdee7674148d839059b38b2) |
| 08:08:21 | 12 | PUMPCADE → SOL (native) | Executed | `0x0f2d2564…` [🐞](https://debug.cow.fi/order/0x0f2d256454c019598e1719f828dd3c615145f355b66853d1148fb5f6b4c06658) |
| 08:08:21 | 12 | Percolator → SOL (native) | Executed | `0xeb2b57dd…` [🐞](https://debug.cow.fi/order/0xeb2b57dd26fb19b2d1c85c8dce74aa64ee9215126b4726109274c11f452b06ae) |
| 08:08:21 | 12 | BP → SOL (native) | Executed | `0x8628ef30…` [🐞](https://debug.cow.fi/order/0x8628ef30c9bebbe7646abbfbaa9652bc4819771a08280f2e5d74c089e3127830) |
| 08:08:21 | 12 | SNDKx → SOL (native) | Executed | `0xb704a097…` [🐞](https://debug.cow.fi/order/0xb704a097d8991976475c804b2a57844cc321112d23b276695cf03a9904c81543) |
| 08:08:22 | 12 | TTWO → SOL (native) | Executed | `0x3db69f86…` [🐞](https://debug.cow.fi/order/0x3db69f861e355eae1f1c5727f5a86e89e7b5d1758fa34fa94426044e64cc1c6a) |
| 08:08:22 | 12 | TSMx → SOL (native) | Executed | `0x15a94bac…` [🐞](https://debug.cow.fi/order/0x15a94bac327eb7f39eb794f257bac1c51cc6c8546c2f0a0420245592a5c04b73) |
| 08:08:22 | 12 | RKC → SOL (native) | Executed | `0xf79ab153…` [🐞](https://debug.cow.fi/order/0xf79ab153c32537a8cb4827815f511963b72d35722702eb2d0645d6d171b1c32a) |
| 08:08:23 | 12 | UNHx → SOL (native) | Executed | `0x0b00bc24…` [🐞](https://debug.cow.fi/order/0x0b00bc247f353181db3db1ab2c38f9e8fa5cf5b2dee24d592db07a733eae4aed) |
| 08:08:23 | 13 | PST → SOL (native) | Executed | `0xd832f4af…` [🐞](https://debug.cow.fi/order/0xd832f4afcd766a47d1a33e709b4388ba12616731f345c9ed24f4658710c21c72) |
| 08:08:23 | 13 | ORE → SOL (native) | Executed | `0x0c12d959…` [🐞](https://debug.cow.fi/order/0x0c12d959c5d34b4eb041f04c70f48486e454cccfa27f30e461e42cff8f22a923) |
| 08:08:23 | 13 | mini → SOL (native) | Executed | `0x5123c995…` [🐞](https://debug.cow.fi/order/0x5123c99574babe6d873e9c9809830900ce95729369a6a8f0c65406394ffbbcb1) |
| 08:08:24 | 13 | pwease → SOL (native) | Executed | `0x4dc70e83…` [🐞](https://debug.cow.fi/order/0x4dc70e83dfe79541c29fc5cefd8e850bc6238b2f043b51facd1e237da2671106) |
| 08:08:24 | 13 | FWOG → SOL (native) | Executed | `0xa50017c5…` [🐞](https://debug.cow.fi/order/0xa50017c570184d25658e607e358f0688d4887a1a4d79703320c2f17f9f1dc17b) |
| 08:08:25 | 13 | DOLAN → SOL (native) | Executed | `0x2c0ea3cd…` [🐞](https://debug.cow.fi/order/0x2c0ea3cdaa135aa7251ee0c2e11cbb5df6ae55ad205c78d802685e1965079524) |
| 08:08:25 | 13 | Cupsey → SOL (native) | Executed | `0x5d150b98…` [🐞](https://debug.cow.fi/order/0x5d150b984e236cf1993ce93ea07f448c41a0796e96aeac005b069924cd7a5d72) |
| 08:08:25 | 13 | HYPE → SOL (native) | Executed | `0xba0bc695…` [🐞](https://debug.cow.fi/order/0xba0bc695fb598753b86efe90a4b92cfb91ccaa01d041b82e7eae46e801d6009d) |
| 08:08:26 | 13 | ORCA → SOL (native) | Executed | `0x6808f692…` [🐞](https://debug.cow.fi/order/0x6808f692c289058460185e4b60c82946d2e5f484f2dbfd75f4394561ec4b729b) |
| 08:08:26 | 13 | DJI6930 → SOL (native) | Executed | `0x64583aff…` [🐞](https://debug.cow.fi/order/0x64583afff27a2dd8374d4cd6e47b1b86021e13b866d18a1f7086157d5b4cc770) |
| 08:08:26 | 13 | CYPH → SOL (native) | Executed | `0x276ef6a1…` [🐞](https://debug.cow.fi/order/0x276ef6a121821fd25434400be82e86f00c8ba241e16a88f3107a3ae4568aac63) |
| 08:08:26 | 13 | SKHYx → SOL (native) | Executed | `0x96f38b13…` [🐞](https://debug.cow.fi/order/0x96f38b1312b6116cdea529be32cb9aa5c3a20db6da853fb8e8329fb8d7dd5775) |
| 08:08:27 | 14 | xSOL → SOL (native) | Executed | `0x71af01cb…` [🐞](https://debug.cow.fi/order/0x71af01cb41770a26f956b7bead0a5f69a7ba8f9e0d63347f64109c3694b3181c) |
| 08:08:27 | 14 | GEOD → SOL (native) | Executed | `0xb295f8aa…` [🐞](https://debug.cow.fi/order/0xb295f8aae1dd1ff2b705713d6e0336c358a11a66691fd2674c264b38ef7a6bee) |
| 08:08:28 | 14 | SIGMA → SOL (native) | Executed | `0xb2e61403…` [🐞](https://debug.cow.fi/order/0xb2e61403900b323f6d7814661cdd2a06632661b772cbfa789d5d6a7dd775aef2) |
| 08:08:28 | 14 | KLED → SOL (native) | Executed | `0x0fae79e4…` [🐞](https://debug.cow.fi/order/0x0fae79e467540f26e66c0f59aa376b330cee5e90b061307a4d40e528cf6765d8) |
| 08:08:28 | 14 | $WIF → SOL (native) | Executed | `0x787c3c3c…` [🐞](https://debug.cow.fi/order/0x787c3c3c6f6a9ca28d8c90d5fdabfe996adc1328d9561677e47540f3b71ad47d) |
| 08:08:28 | 14 | GBACK → SOL (native) | Executed | `0x1bec848d…` [🐞](https://debug.cow.fi/order/0x1bec848d83029475ce3ceb7d169a2d6e7e010df2d17c5800237d5b7492a05c86) |
| 08:08:29 | 14 | ISC → SOL (native) | Executed | `0x7834a786…` [🐞](https://debug.cow.fi/order/0x7834a78687fab88aedd9942b1ae0119fb9caeba7da684a68be2270062d304178) |
| 08:08:29 | 14 | JTO → SOL (native) | Executed | `0xd0eb794c…` [🐞](https://debug.cow.fi/order/0xd0eb794cb8964c26b9d4d6cb7e532b2c0314b8fe6e8cf6515bb0ac20cc1a1e22) |
| 08:08:29 | 14 | ALCH → SOL (native) | Executed | `0xe3771b6f…` [🐞](https://debug.cow.fi/order/0xe3771b6f64dfad67ff7ecc6f05ab1459aff298d3f60be9e9433d0d115599ed17) |
| 08:08:29 | 14 | SUI → SOL (native) | Executed | `0x5c4ae38b…` [🐞](https://debug.cow.fi/order/0x5c4ae38b472b759f201f5f6d0eaac94539437cdb08df4832687536a4502a6670) |
| 08:08:30 | 14 | GOR → SOL (native) | Executed | `0x6bffcc13…` [🐞](https://debug.cow.fi/order/0x6bffcc13dc26e13cfeb1b22f0faffa1c5ddafd35e46d72646cd40a02275dd16c) |
| 08:08:30 | 14 | LBTC → SOL (native) | Executed | `0x337f07e3…` [🐞](https://debug.cow.fi/order/0x337f07e3b268702bedf6709fb0f0ab7db8afe36bf7a92db6aef8f92e34d1f903) |
| 08:08:30 | 14 | ZAMA → SOL (native) | Executed | `0xc98d3eb1…` [🐞](https://debug.cow.fi/order/0xc98d3eb1d8d433ede11b53e6c1bfc6dfa4563923173d7b716ea98ae841f88b81) |
| 08:08:30 | 14 | NPC → SOL (native) | Executed | `0x08b717a7…` [🐞](https://debug.cow.fi/order/0x08b717a787b9a448d8a2f5be0c59aa58e8a7a7c3c1fa53516a4836e84ca3bbbc) |
| 08:08:30 | 14 | UBERx → SOL (native) | Executed | `0xa26c6a52…` [🐞](https://debug.cow.fi/order/0xa26c6a520f5f4218afb1428a1c934bb67ad399d920b6921dad1cdf019703bb0f) |
| 08:08:30 | 14 | CASH → SOL (native) | Executed | `0x280eec53…` [🐞](https://debug.cow.fi/order/0x280eec5394cbd387d2902e003c72d43ed4d82f72072b24c5c9eb6338f511d78e) |
| 08:08:30 | 14 | GEOM → SOL (native) | Executed | `0x6ac86413…` [🐞](https://debug.cow.fi/order/0x6ac864134f3f4f7c01e850fcb2f5d37f9b653e3397c6dbfecc7f254ff899e327) |
| 08:08:31 | 14 | BMNRx → SOL (native) | Executed | `0x2d6ed269…` [🐞](https://debug.cow.fi/order/0x2d6ed2690621d58b6c1bb8658a2732a748cf867b01694b16ca107a00fbb5a3fe) |
| 08:08:31 | 14 | BIO → SOL (native) | Executed | `0xc1a84404…` [🐞](https://debug.cow.fi/order/0xc1a8440430d612ea96853072ed1f636fe20130898ae68ede48537b5cbdedcf75) |
| 08:08:31 | 14 | USDv → SOL (native) | Executed | `0xbb811e6c…` [🐞](https://debug.cow.fi/order/0xbb811e6c72d0e8be1fc6a12ed76b10c8017fdc26a72d16318e1cd4125666eb82) |
| 08:08:31 | 14 | WEN → SOL (native) | Executed | `0x130ae6cb…` [🐞](https://debug.cow.fi/order/0x130ae6cba306b01b7254a6da92dc7ea7a0be6946915e8889a421b1abdd2248df) |
| 08:08:32 | 14 | LLYx → SOL (native) | Executed | `0x747ef4b9…` [🐞](https://debug.cow.fi/order/0x747ef4b9fcad1d24b3ea05d18c7615e5db451f13c62bb460bd33edbb711b9117) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 80 | 97.6% |
| expired: never created on-chain (winner found, creation blockhash expired) | 2 | 2.4% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 8s | 28s | 53s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 80 | 100.0% | 80 | 203,606 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 370 | 370 | 317 | 85.7% | 44 | 18 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: PriorityFeeTooHigh | 32 |
| jupiter-solve: SimulationFailed | 12 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `in_flight`: 37 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 82 | 80 | 97.6% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → TQQQx | 2 | 1 | 50.0% |
| wSOL → NFLXx | 2 | 2 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → SPCXx | 1 | 1 | 100.0% |
| wSOL → QQQx | 1 | 1 | 100.0% |
| wSOL → GMEx | 1 | 1 | 100.0% |
| wSOL → MCDx | 1 | 1 | 100.0% |
| wSOL → PLTRx | 1 | 1 | 100.0% |
| wSOL → ORCLx | 1 | 1 | 100.0% |
| wSOL → AVGOx | 1 | 1 | 100.0% |
| wSOL → MSFTx | 1 | 1 | 100.0% |
| wSOL → XOMx | 1 | 1 | 100.0% |
| wSOL → INTCx | 1 | 1 | 100.0% |
| wSOL → UBERx | 1 | 1 | 100.0% |
| wSOL → UNHx | 1 | 1 | 100.0% |
| GMEx → SOL (native) | 1 | 1 | 100.0% |
| MCDx → SOL (native) | 1 | 1 | 100.0% |
| MSFTx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → NVOx | 1 | 1 | 100.0% |
| INTCx → SOL (native) | 1 | 1 | 100.0% |
| UNHx → SOL (native) | 1 | 1 | 100.0% |
| PLTRx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GOOGLx | 1 | 1 | 100.0% |
| ORCLx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → KOx | 1 | 1 | 100.0% |
| AVGOx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → HOODx | 1 | 1 | 100.0% |
| XOMx → SOL (native) | 1 | 1 | 100.0% |
| UBERx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AMZNx | 1 | 1 | 100.0% |
| CRCLx → SOL (native) | 1 | 1 | 100.0% |
| NVOx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TSMx | 1 | 1 | 100.0% |
| KOx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → VIDAx | 1 | 1 | 100.0% |
| wSOL → MUx | 1 | 1 | 100.0% |
| wSOL → WMTx | 1 | 1 | 100.0% |
| GOOGLx → SOL (native) | 1 | 1 | 100.0% |
| HOODx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → AMDx | 1 | 1 | 100.0% |
| wSOL → LLYx | 1 | 1 | 100.0% |
| wSOL → AAPLx | 1 | 1 | 100.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| TSMx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → COINx | 1 | 1 | 100.0% |
| wSOL → SKHYx | 1 | 1 | 100.0% |
| wSOL → BRK.Bx | 1 | 1 | 100.0% |
| LLYx → SOL (native) | 1 | 1 | 100.0% |
| VIDAx → SOL (native) | 1 | 1 | 100.0% |
| AAPLx → SOL (native) | 1 | 1 | 100.0% |
| MUx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SNDKx | 1 | 1 | 100.0% |
| WMTx → SOL (native) | 1 | 1 | 100.0% |
| AMZNx → SOL (native) | 1 | 1 | 100.0% |
| COINx → SOL (native) | 1 | 1 | 100.0% |
| AMDx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BMNRx | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → DFDVx | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| wSOL → STRCx | 1 | 1 | 100.0% |
| wSOL → MRVLx | 1 | 1 | 100.0% |
| BMNRx → SOL (native) | 1 | 1 | 100.0% |
| SNDKx → SOL (native) | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 1 | 100.0% |
| QQQx → SOL (native) | 1 | 1 | 100.0% |
| DFDVx → SOL (native) | 1 | 1 | 100.0% |
| SKHYx → SOL (native) | 1 | 0 | 0.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |
| STRCx → SOL (native) | 1 | 1 | 100.0% |
| MRVLx → SOL (native) | 1 | 1 | 100.0% |
| NFLXx → SOL (native) | 1 | 1 | 100.0% |
| BRK.Bx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → TSLAx | 1 | 1 | 100.0% |
| wSOL → METAx | 1 | 1 | 100.0% |
| TSLAx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → MSTRx | 1 | 1 | 100.0% |
| MSTRx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| GLDx → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 7 | 7 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 6 | 6 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 6 | 6 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 6 | 6 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 6 | 6 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 6 | 6 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 6 | 5 | 83.3% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 6 | 6 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 6 | 6 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 6 | 6 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 6 | 6 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 6 | 6 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 5 | 5 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 4 | 3 | 75.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 2 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 08:04:26 | SKHYx → SOL (native) | sell | Winner too late: creation blockhash expired | `0x0b2358dc…` [🐞](https://debug.cow.fi/order/0x0b2358dc6d80a1ea832611ca843f9ac5f420032406c572eb5d85640c236866c6) |
| 08:04:33 | wSOL → TQQQx | sell | Winner too late: creation blockhash expired | `0x31ef3ba5…` [🐞](https://debug.cow.fi/order/0x31ef3ba5e93ed551c0e2ebebc914f66f6ba8eb0868ed22172729f9b7b4cbe000) |
