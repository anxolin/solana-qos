# Solana QoS report: 2026-10-13-12-30-token-2022__xstocks

Barn, orders created between `2026-10-13T12:31:30.561Z` and `2026-10-13T12:38:32.010Z`. Data fetched 2026-10-13T12:40:43+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 110 |
| Orders executed | **66** (60.0%) |
| Sponsored orders never created on-chain | 44 (40.0%) |
| Traders | 14 |
| Settlement txs | 66 |

## Scenario

55 of 124 scenario rows completed. 0 retries, 13 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 12:31:30 | 1 | 1 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 12s | 1 |  |
| 12:31:43 | 2 | 1 | sell 0.00863 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | failed | 0s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:31:43 | 3 | 1 | buy 0.00575 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:31:44 | 4 | 1 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | failed | 39s | 1 | main expired |
| 12:32:23 | 5 | 1 | sell 0.000898 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 55s | 2 |  |
| 12:33:18 | 6 | 1 | buy 0.000598 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | filled | 13s | 1 |  |
| 12:33:31 | 7 | 1 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | failed | 41s | 1 | main expired |
| 12:34:12 | 8 | 1 | sell 0.00293 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | failed | 50s | 1 | acquire Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh expired |
| 12:35:02 | 9 | 1 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 43s | 1 | main expired |
| 12:31:30 | 10 | 2 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | failed | 37s | 1 | main expired |
| 12:32:08 | 11 | 2 | sell 0.00415 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | failed | 41s | 1 | acquire Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 expired |
| 12:32:49 | 12 | 2 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | failed | 7s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 12:32:55 | 13 | 2 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | failed | 38s | 1 | main expired |
| 12:33:34 | 14 | 2 | sell 0.00185 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | filled | 46s | 2 |  |
| 12:34:20 | 15 | 2 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | filled | 22s | 1 |  |
| 12:34:42 | 16 | 2 | sell 0.01 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | failed | 41s | 1 | main expired |
| 12:35:23 | 17 | 2 | sell 0.00453 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ → SOL | filled | 44s | 2 |  |
| 12:36:07 | 18 | 2 | buy 0.00302 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ ← SOL | filled | 12s | 1 |  |
| 12:31:30 | 19 | 3 | sell 0.01 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | failed | 38s | 1 | main expired |
| 12:32:08 | 20 | 3 | sell 0.000919 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ → SOL | failed | 41s | 1 | acquire Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ expired |
| 12:32:49 | 21 | 3 | buy 0.000613 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ ← SOL | failed | 41s | 1 | main expired |
| 12:33:30 | 22 | 3 | sell 0.01 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | filled | 29s | 1 |  |
| 12:33:59 | 23 | 3 | sell 0.000967 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu → SOL | filled | 16s | 1 |  |
| 12:34:14 | 24 | 3 | buy 0.000644 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu ← SOL | filled | 13s | 1 |  |
| 12:34:27 | 25 | 3 | sell 0.01 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | failed | 40s | 1 | main expired |
| 12:35:08 | 26 | 3 | sell 0.00185 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re → SOL | filled | 63s | 2 |  |
| 12:36:11 | 27 | 3 | buy 0.00123 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re ← SOL | filled | 13s | 1 |  |
| 12:31:30 | 28 | 4 | sell 0.01 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | filled | 72s | 1 |  |
| 12:32:42 | 29 | 4 | sell 0.00132 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX → SOL | filled | 24s | 1 |  |
| 12:33:06 | 30 | 4 | buy 0.000879 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX ← SOL | filled | 22s | 1 |  |
| 12:33:29 | 31 | 4 | sell 0.01 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | filled | 14s | 1 |  |
| 12:33:43 | 32 | 4 | sell 0.00199 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN → SOL | filled | 15s | 1 |  |
| 12:33:58 | 33 | 4 | buy 0.00133 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN ← SOL | filled | 24s | 1 |  |
| 12:34:22 | 34 | 4 | sell 0.01 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | filled | 17s | 1 |  |
| 12:34:39 | 35 | 4 | sell 0.0039 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu → SOL | filled | 14s | 1 |  |
| 12:34:53 | 36 | 4 | buy 0.0026 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu ← SOL | filled | 15s | 1 |  |
| 12:31:31 | 37 | 5 | sell 0.01 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | failed | 38s | 1 | main expired |
| 12:32:08 | 38 | 5 | sell 0.0285 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc → SOL | failed | 41s | 1 | acquire Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc expired |
| 12:32:49 | 39 | 5 | buy 0.019 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc ← SOL | failed | 7s | 0 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 12:32:56 | 40 | 5 | sell 0.01 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | failed | 38s | 1 | main expired |
| 12:33:34 | 41 | 5 | sell 0.00637 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg → SOL | filled | 60s | 2 |  |
| 12:34:34 | 42 | 5 | buy 0.00425 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg ← SOL | filled | 14s | 1 |  |
| 12:34:48 | 43 | 5 | sell 0.01 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | failed | 41s | 1 | main expired |
| 12:35:29 | 44 | 5 | sell 0.00207 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp → SOL | filled | 42s | 2 |  |
| 12:36:11 | 45 | 5 | buy 0.00138 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp ← SOL | filled | 15s | 1 |  |
| 12:31:31 | 46 | 6 | sell 0.01 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:31:33 | 47 | 6 | sell 0.00302 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | filled | 85s | 2 |  |
| 12:32:58 | 48 | 6 | buy 0.00201 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 ← SOL | filled | 21s | 1 |  |
| 12:33:19 | 49 | 6 | sell 0.01 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | failed | 39s | 1 | main expired |
| 12:33:58 | 50 | 6 | sell 0.00269 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg → SOL | failed | 52s | 1 | acquire Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg expired |
| 12:34:50 | 51 | 6 | buy 0.00179 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg ← SOL | failed | 44s | 1 | main expired |
| 12:35:33 | 52 | 6 | sell 0.01 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | failed | 39s | 1 | main expired |
| 12:36:12 | 53 | 6 | sell 0.00699 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH → SOL | filled | 37s | 2 |  |
| 12:36:49 | 54 | 6 | buy 0.00466 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH ← SOL | filled | 9s | 1 |  |
| 12:31:31 | 55 | 7 | sell 0.01 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:31:34 | 56 | 7 | sell 0.00361 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | failed | 7s | 0 | acquire XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:31:41 | 57 | 7 | buy 0.00241 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:31:42 | 58 | 7 | sell 0.01 SOL → XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk | failed | 38s | 1 | main expired |
| 12:32:20 | 59 | 7 | sell 0.475 XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk → SOL | failed | 43s | 1 | acquire XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk expired |
| 12:33:04 | 60 | 7 | buy 0.317 XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk ← SOL | failed | 43s | 1 | main expired |
| 12:33:47 | 61 | 7 | sell 0.01 SOL → Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy | failed | 41s | 1 | main expired |
| 12:34:28 | 62 | 7 | sell 0.149 Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy → SOL | filled | 63s | 2 |  |
| 12:35:31 | 63 | 7 | buy 0.099 Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy ← SOL | filled | 26s | 1 |  |
| 12:31:31 | 64 | 8 | sell 0.01 SOL → XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM | filled | 69s | 1 |  |
| 12:32:40 | 65 | 8 | sell 0.00614 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM → SOL | filled | 17s | 1 |  |
| 12:32:58 | 66 | 8 | buy 0.00409 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM ← SOL | filled | 19s | 1 |  |
| 12:33:17 | 67 | 8 | sell 0.01 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | filled | 14s | 1 |  |
| 12:33:31 | 68 | 8 | sell 0.00811 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ → SOL | filled | 28s | 1 |  |
| 12:33:59 | 69 | 8 | buy 0.00541 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ ← SOL | filled | 64s | 1 |  |
| 12:35:03 | 70 | 8 | sell 0.01 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | filled | 12s | 1 |  |
| 12:35:15 | 71 | 8 | sell 0.00138 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x → SOL | filled | 12s | 1 |  |
| 12:35:28 | 72 | 8 | buy 0.000917 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x ← SOL | filled | 16s | 1 |  |
| 12:31:31 | 73 | 9 | sell 0.01 SOL → XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:31:34 | 74 | 9 | sell 0.00489 XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL → SOL | failed | 7s | 0 | acquire XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:31:41 | 75 | 9 | buy 0.00326 XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:31:42 | 76 | 9 | sell 0.01 SOL → XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav | failed | 36s | 1 | main expired |
| 12:32:18 | 77 | 9 | sell 0.000645 XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav → SOL | failed | 40s | 1 | acquire XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav expired |
| 12:32:59 | 78 | 9 | buy 0.00043 XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav ← SOL | failed | 43s | 1 | main expired |
| 12:33:42 | 79 | 9 | sell 0.01 SOL → XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc | filled | 62s | 1 |  |
| 12:34:44 | 80 | 9 | sell 0.00836 XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc → SOL | failed | 30s | 1 | main error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 12:35:14 | 81 | 9 | buy 0.00557 XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc ← SOL | filled | 17s | 1 |  |
| 12:31:31 | 82 | 10 | sell 0.01 SOL → XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:31:34 | 83 | 10 | sell 0.00188 XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo → SOL | failed | 46s | 1 | acquire XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo expired |
| 12:32:20 | 84 | 10 | buy 0.00125 XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:32:20 | 85 | 10 | sell 0.01 SOL → Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci | failed | 33s | 1 | main expired |
| 12:32:53 | 86 | 10 | sell 0.00641 Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci → SOL | failed | 49s | 1 | acquire Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci expired |
| 12:33:42 | 87 | 10 | buy 0.00428 Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci ← SOL | failed | 46s | 1 | main expired |
| 12:34:29 | 88 | 10 | sell 0.01 SOL → XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL | failed | 40s | 1 | main expired |
| 12:35:09 | 89 | 10 | sell 0.01 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL → SOL | failed | 48s | 1 | acquire XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL expired |
| 12:35:57 | 90 | 10 | buy 0.00669 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL ← SOL | failed | 40s | 1 | main expired |
| 12:31:31 | 91 | 11 | sell 0.01 SOL → XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:31:34 | 92 | 11 | sell 0.00427 XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh → SOL | failed | 45s | 1 | acquire XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh expired |
| 12:32:18 | 93 | 11 | buy 0.00285 XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:32:19 | 94 | 11 | sell 0.01 SOL → XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF | filled | 24s | 1 |  |
| 12:32:43 | 95 | 11 | sell 0.00107 XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF → SOL | filled | 14s | 1 |  |
| 12:32:57 | 96 | 11 | buy 0.000716 XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF ← SOL | filled | 21s | 1 |  |
| 12:33:17 | 97 | 11 | sell 0.01 SOL → XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA | failed | 38s | 1 | main expired |
| 12:33:55 | 98 | 11 | sell 0.00246 XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA → SOL | failed | 49s | 1 | acquire XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA expired |
| 12:34:44 | 99 | 11 | buy 0.00164 XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA ← SOL | failed | 43s | 1 | main expired |
| 12:31:31 | 100 | 12 | sell 0.01 SOL → XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe | failed | 3s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:31:34 | 101 | 12 | sell 0.00185 XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe → SOL | failed | 8s | 0 | acquire XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe error: 404 Not Found: NoLiquidity: no route found |
| 12:31:42 | 102 | 12 | buy 0.00124 XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:31:43 | 103 | 12 | sell 0.01 SOL → XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV | filled | 57s | 1 |  |
| 12:32:40 | 104 | 12 | sell 0.00149 XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV → SOL | filled | 27s | 1 |  |
| 12:33:08 | 105 | 12 | buy 0.000991 XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV ← SOL | filled | 22s | 1 |  |
| 12:33:30 | 106 | 12 | sell 0.01 SOL → Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj | filled | 11s | 1 |  |
| 12:33:40 | 107 | 12 | sell 0.000428 Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj → SOL | filled | 11s | 1 |  |
| 12:33:51 | 108 | 12 | buy 0.000286 Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj ← SOL | filled | 16s | 1 |  |
| 12:31:31 | 109 | 13 | sell 0.01 SOL → XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n | failed | 38s | 1 | main expired |
| 12:32:10 | 110 | 13 | sell 0.0181 XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n → SOL | failed | 6s | 0 | acquire XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:32:16 | 111 | 13 | buy 0.0121 XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:32:17 | 112 | 13 | sell 0.005 SOL → XsXb7KCxcxTi6hqWfYyEe1kpTwtiCeU5TJbEz8N7RWn | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 12:32:18 | 113 | 13 | sell 0.01 SOL → XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU | failed | 34s | 1 | main expired |
| 12:32:52 | 114 | 13 | sell 0.00372 XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU → SOL | failed | 50s | 1 | acquire XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU expired |
| 12:33:42 | 115 | 13 | buy 0.00248 XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU ← SOL | failed | 47s | 1 | main expired |
| 12:31:31 | 116 | 14 | sell 0.01 SOL → XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB | failed | 38s | 1 | main expired |
| 12:32:09 | 117 | 14 | sell 0.0101 XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB → SOL | failed | 7s | 0 | acquire XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB error: 404 Not Found: NoLiquidity: no route found |
| 12:32:16 | 118 | 14 | buy 0.00673 XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 12:32:17 | 119 | 14 | sell 0.01 SOL → Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH | failed | 34s | 1 | main expired |
| 12:32:51 | 120 | 14 | sell 0.000597 Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH → SOL | filled | 60s | 2 |  |
| 12:33:51 | 121 | 14 | buy 0.000398 Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH ← SOL | filled | 17s | 1 |  |
| 12:34:08 | 122 | 14 | sell 0.01 SOL → XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn | filled | 34s | 1 |  |
| 12:34:42 | 123 | 14 | sell 0.0286 XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn → SOL | filled | 16s | 1 |  |
| 12:34:59 | 124 | 14 | buy 0.0191 XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn ← SOL | failed | 3s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

25 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| NoLiquidity | quote | 9 | SOL → CRCLx, SOL → PLTRx, SOL → ORCLx, SOL → AVGOx, SOL → XOMx, SOL → UNHx, SOL → NVOx, SOL → UBERx, SOL → BMNRx | no route found |
| NoLiquidity | main | 8 | CRCLx → SOL, SOL → MCDx, SOL → PLTRx, SOL → ORCLx, SOL → AVGOx, SOL → XOMx, SOL → UNHx, SOL → TCENTx | no route found |
| NoLiquidity | acquire | 5 | SOL → PLTRx, SOL → ORCLx, SOL → UNHx, SOL → NVOx, SOL → UBERx | no route found |
| BlockhashExpired | main | 3 | SOL → SPCXx, SOL → GMEx, TQQQx → SOL | the transaction's blockhash is no longer valid, sign a fresh one |

Scenario orders: 110 (86 main, 24 acquire). Cleanup placed 24 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 12:37:06 | 1 | SPYx → SOL (native) | Executed | `0xb508d1d9…` [🐞](https://debug.barn.cow.fi/order/0xb508d1d93223fb6df721e3af3d0b32e42bc1b0a46d4d22696592404479aceaa8) |
| 12:37:06 | 1 | CRCLx → SOL (native) | Executed | `0x89d9732c…` [🐞](https://debug.barn.cow.fi/order/0x89d9732cc3b4208ccc642df11fb1c1bb159fe2f915c3d6c05fe3eec7d2aeed3e) |
| 12:37:08 | 2 | TSLAx → SOL (native) | Executed | `0x744c1a99…` [🐞](https://debug.barn.cow.fi/order/0x744c1a996c1304395c874617b25e89285a27a6a8d47dfc4b891a5eff0d4edece) |
| 12:37:08 | 2 | MSTRx → SOL (native) | Executed | `0x4da561ff…` [🐞](https://debug.barn.cow.fi/order/0x4da561ff2add48125f9d0c82b04a4aaac7e8a1a6e67bcef6b0aef1681aa4b10f) |
| 12:37:09 | 3 | METAx → SOL (native) | Executed | `0x452091d2…` [🐞](https://debug.barn.cow.fi/order/0x452091d2b217b653b7a83791213723300bb791b917cc3fd938bd7caf3bae601c) |
| 12:37:09 | 3 | GLDx → SOL (native) | Executed | `0x4c442e28…` [🐞](https://debug.barn.cow.fi/order/0x4c442e28238c44dee78e8711470982f9a6e658bd7be0e15b6cd5a76ec3868850) |
| 12:37:12 | 5 | AAPLx → SOL (native) | Executed | `0xdb13154c…` [🐞](https://debug.barn.cow.fi/order/0xdb13154c7bbc5fdd01fa160f23180d7f4dee8ad80b169ebe4b2c9bf7d04c960a) |
| 12:37:12 | 4 | MSFTx → SOL (native) | Executed | `0xafb26605…` [🐞](https://debug.barn.cow.fi/order/0xafb26605c9ec05f9485b7440ea18e99cfe6efbb647e14812263655b678014074) |
| 12:37:12 | 4 | GOOGLx → SOL (native) | Executed | `0xd35dfead…` [🐞](https://debug.barn.cow.fi/order/0xd35dfead807049f8471f6f4b5bec4980c7ae48fdf2c4bcbfe5f35e14b653a860) |
| 12:37:12 | 4 | COINx → SOL (native) | Executed | `0xde934595…` [🐞](https://debug.barn.cow.fi/order/0xde934595086ef2e8b874eba6a7a34f8c632c960cadd3d9fdbd27288b76155cf3) |
| 12:37:13 | 6 | STRCx → SOL (native) | Executed | `0x781fe6a4…` [🐞](https://debug.barn.cow.fi/order/0x781fe6a4f648c997ae04faa7a04771a3a0160970dc2d4f4cff287f65de6ec559) |
| 12:37:13 | 6 | MCDx → SOL (native) | Executed | `0x74e1e486…` [🐞](https://debug.barn.cow.fi/order/0x74e1e486d654c7d00133eed5c82ce806fb3f8373b9ee7d07006e6a25b0f79ec6) |
| 12:37:13 | 5 | HOODx → SOL (native) | Executed | `0x56c91832…` [🐞](https://debug.barn.cow.fi/order/0x56c918325efdb912a0a2b29d7c9e1ba3f69d90b2d6c14287f5df66616fd045a6) |
| 12:37:14 | 7 | DFDVx → SOL (native) | Executed | `0x9259738b…` [🐞](https://debug.barn.cow.fi/order/0x9259738b3f8184f71c1058120f8076f8bcbca1e8dbffb81b444f5f5b3513caa9) |
| 12:37:15 | 8 | INTCx → SOL (native) | Executed | `0x91f65ad7…` [🐞](https://debug.barn.cow.fi/order/0x91f65ad7f7b89e7ac16357d03115b65130aa3c22656d9d929d1241a3ea76b2e0) |
| 12:37:15 | 8 | KOx → SOL (native) | Executed | `0x1667af7d…` [🐞](https://debug.barn.cow.fi/order/0x1667af7d6925a18f8be95dc56120a94f0a1686f0849dccd4539c0cf4efe65d4e) |
| 12:37:15 | 8 | BRK.Bx → SOL (native) | Executed | `0x4027a058…` [🐞](https://debug.barn.cow.fi/order/0x4027a05835c4f0423687605b55490fde7600c6f142fe92c39bd4d08d955cf76e) |
| 12:37:16 | 9 | TQQQx → SOL (native) | Executed | `0x4f1bcd8b…` [🐞](https://debug.barn.cow.fi/order/0x4f1bcd8b792e2b8635cad3a0c3a9f8361a3694a3a8301e52f7db2a59133e6060) |
| 12:37:17 | 10 | knightcat → SOL (native) | Executed | `0x8e58b3a6…` [🐞](https://debug.barn.cow.fi/order/0x8e58b3a66525f300cf2e5872a3a3984359c97176cd837dbe834ad6ffbd88385a) |
| 12:37:34 | 11 | AMDx → SOL (native) | Executed | `0xd9f910bf…` [🐞](https://debug.barn.cow.fi/order/0xd9f910bf7726061c2effb567c0b36346f46622cb9869d8806ebd8c1c16280e92) |
| 12:37:43 | 12 | SNDKx → SOL (native) | Executed | `0xada40b00…` [🐞](https://debug.barn.cow.fi/order/0xada40b009547d8d556ed2a5c9d6dec7595c1151964d2e725620b05a85fbb706f) |
| 12:37:43 | 12 | TSMx → SOL (native) | Executed | `0xd627f508…` [🐞](https://debug.barn.cow.fi/order/0xd627f508d483ad1a1f36aa8da94064fc242a03f13f18f2e1d52ba50701c03bc2) |
| 12:37:45 | 14 | BMNRx → SOL (native) | Executed | `0x1667c1b3…` [🐞](https://debug.barn.cow.fi/order/0x1667c1b3df87020aafe22339a12ebd746cef60572d4594cd272d4aba4cf5c1db) |
| 12:37:47 | 14 | LLYx → SOL (native) | Executed | `0x837d65cc…` [🐞](https://debug.barn.cow.fi/order/0x837d65cccdb041abf71acec0797b64dd8974fc9e1648dd1d36b5321df90132cf) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 66 | 60.0% |
| expired: never created on-chain (winner found, creation blockhash expired) | 44 | 40.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 9s | 18s | 34s | 65s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| AuwL…YzVj | 47 | 71.2% | 47 | 178,125 | 8s |
| DNvt…HqL1 | 7 | 10.6% | 7 | 168,083 | 27s |
| fractal | 5 | 7.6% | 5 | 87,555 | 9s |
| Grr6…x1jS | 4 | 6.1% | 4 | 181,187 | 15s |
| 8oLu…T8ku | 3 | 4.5% | 3 | 104,333 | 15s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| grafiks | 86 | 73 | 66 | 90.4% | 7 | 0 | 0 | 0 |
| jupiter-solve | 12 | 12 | 8 | 66.7% | 3 | 2 | 13 | 0 |
| rosato | 14 | 8 | 7 | 87.5% | 0 | 1 | 15 | 0 |
| fractal | 38 | 7 | 6 | 85.7% | 0 | 2 | 0 | 0 |
| paradox | 4 | 4 | 3 | 75.0% | 1 | 0 | 44 | 0 |
| zurui | 0 | 0 | 0 | – | 0 | 0 | 65 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 65 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 7 |
| jupiter-solve: PriorityFeeTooHigh | 2 |
| jupiter-solve: SimulationFailed | 1 |
| paradox: FailedToCreate | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 1
- Orders filtered for `unfunded_sell_token_account`: 77 times
- Orders filtered for `unreceivable_buy_token_account`: 77 times
- Orders filtered for `in_flight`: 45 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 80 | 45 | 56.2% |
| market buy | 30 | 21 | 70.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → QQQx | 3 | 0 | 0.0% |
| wSOL → VIDAx | 3 | 0 | 0.0% |
| wSOL → MUx | 3 | 0 | 0.0% |
| wSOL → SPYx | 3 | 2 | 66.7% |
| wSOL → LLYx | 3 | 2 | 66.7% |
| wSOL → SKHYx | 3 | 0 | 0.0% |
| wSOL → WMTx | 3 | 0 | 0.0% |
| wSOL → TSLAx | 3 | 2 | 66.7% |
| wSOL → HOODx | 3 | 2 | 66.7% |
| wSOL → MRVLx | 3 | 0 | 0.0% |
| wSOL → AMZNx | 3 | 0 | 0.0% |
| wSOL → NVDAx | 3 | 0 | 0.0% |
| wSOL → TQQQx | 3 | 3 | 100.0% |
| wSOL → DFDVx | 3 | 2 | 66.7% |
| wSOL → GLDx | 3 | 2 | 66.7% |
| wSOL → NFLXx | 3 | 0 | 0.0% |
| wSOL → MSTRx | 3 | 2 | 66.7% |
| wSOL → AAPLx | 3 | 2 | 66.7% |
| wSOL → STRCx | 3 | 2 | 66.7% |
| wSOL → SPCXx | 2 | 0 | 0.0% |
| wSOL → GMEx | 2 | 0 | 0.0% |
| wSOL → MSFTx | 2 | 2 | 100.0% |
| wSOL → INTCx | 2 | 2 | 100.0% |
| wSOL → MCDx | 2 | 2 | 100.0% |
| wSOL → TSMx | 2 | 2 | 100.0% |
| wSOL → AMDx | 2 | 2 | 100.0% |
| wSOL → KOx | 2 | 2 | 100.0% |
| wSOL → GOOGLx | 2 | 2 | 100.0% |
| wSOL → SNDKx | 2 | 2 | 100.0% |
| wSOL → METAx | 2 | 2 | 100.0% |
| wSOL → COINx | 2 | 2 | 100.0% |
| wSOL → BRK.Bx | 2 | 2 | 100.0% |
| wSOL → CRCLx | 1 | 1 | 100.0% |
| wSOL → UBERx | 1 | 0 | 0.0% |
| wSOL → NVOx | 1 | 0 | 0.0% |
| wSOL → XOMx | 1 | 0 | 0.0% |
| wSOL → AVGOx | 1 | 0 | 0.0% |
| INTCx → SOL (native) | 1 | 1 | 100.0% |
| TSMx → SOL (native) | 1 | 1 | 100.0% |
| MCDx → SOL (native) | 1 | 1 | 100.0% |
| MSFTx → SOL (native) | 1 | 1 | 100.0% |
| AMDx → SOL (native) | 1 | 1 | 100.0% |
| SPYx → SOL (native) | 1 | 1 | 100.0% |
| KOx → SOL (native) | 1 | 1 | 100.0% |
| LLYx → SOL (native) | 1 | 1 | 100.0% |
| SNDKx → SOL (native) | 1 | 1 | 100.0% |
| GOOGLx → SOL (native) | 1 | 1 | 100.0% |
| METAx → SOL (native) | 1 | 1 | 100.0% |
| TSLAx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → BMNRx | 1 | 1 | 100.0% |
| HOODx → SOL (native) | 1 | 1 | 100.0% |
| COINx → SOL (native) | 1 | 1 | 100.0% |
| BMNRx → SOL (native) | 1 | 1 | 100.0% |
| DFDVx → SOL (native) | 1 | 1 | 100.0% |
| BRK.Bx → SOL (native) | 1 | 1 | 100.0% |
| MSTRx → SOL (native) | 1 | 1 | 100.0% |
| AAPLx → SOL (native) | 1 | 1 | 100.0% |
| GLDx → SOL (native) | 1 | 1 | 100.0% |
| STRCx → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 10 | 6 | 60.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 10 | 6 | 60.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 10 | 6 | 60.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 10 | 6 | 60.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 9 | 9 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 9 | 9 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 8 | 4 | 50.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 7 | 5 | 71.4% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 7 | 3 | 42.9% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 7 | 0 | 0.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 7 | 3 | 42.9% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 6 | 3 | 50.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 6 | 6 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 4 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 44 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 12:31:33 | wSOL → SPCXx | market sell | Winner too late: creation blockhash expired | `0x18bad71c…` [🐞](https://debug.barn.cow.fi/order/0x18bad71c0a52de220b78b8f8242eecf13a4b15502b43b0142204160b93930b57) |
| 12:31:33 | wSOL → QQQx | market sell | Winner too late: creation blockhash expired | `0x04933f7a…` [🐞](https://debug.barn.cow.fi/order/0x04933f7a5193a44792056207290a96373b69326350c77cfc5cc63620bca2d48e) |
| 12:31:33 | wSOL → GMEx | market sell | Winner too late: creation blockhash expired | `0xbd2fa4d2…` [🐞](https://debug.barn.cow.fi/order/0xbd2fa4d2f195145f6fb11a1b56f3a64d80be16f00b9fea13ca7bf738cd7f2836) |
| 12:31:35 | wSOL → UBERx | market sell | Winner too late: creation blockhash expired | `0x981dddf7…` [🐞](https://debug.barn.cow.fi/order/0x981dddf74d4ee76840289d7e10c6e0f6bc14d6ffd9668339e1318737a7d1d2d2) |
| 12:31:35 | wSOL → NVOx | market sell | Winner too late: creation blockhash expired | `0x6b9daadb…` [🐞](https://debug.barn.cow.fi/order/0x6b9daadb1a0e55df755ef9f154d0b39821c9132be97266cb826d90ca01f0dc34) |
| 12:31:40 | wSOL → XOMx | market sell | Winner too late: creation blockhash expired | `0xbbae1912…` [🐞](https://debug.barn.cow.fi/order/0xbbae191268af2e193c312e1f957f09227579729a06edd5e94f99216c85bbe050) |
| 12:31:42 | wSOL → AVGOx | market sell | Winner too late: creation blockhash expired | `0x7e6584c3…` [🐞](https://debug.barn.cow.fi/order/0x7e6584c367dd2d99eaa215df031b87fff1903989628552ce4f746593eef82aa4) |
| 12:31:43 | wSOL → VIDAx | market sell | Winner too late: creation blockhash expired | `0x1b35e9c4…` [🐞](https://debug.barn.cow.fi/order/0x1b35e9c452578f97741a81fa21cd51050c5717b1555c76ac4db861adb06079a2) |
| 12:31:43 | wSOL → MUx | market sell | Winner too late: creation blockhash expired | `0xf3f8253b…` [🐞](https://debug.barn.cow.fi/order/0xf3f8253bc3ede0a885282c8c5914cf1b0c2c1f79f521832dfb7553b3454e6f92) |
| 12:31:45 | wSOL → SPYx | market sell | Winner too late: creation blockhash expired | `0x8a910b61…` [🐞](https://debug.barn.cow.fi/order/0x8a910b619e6afa3ef3d8fe4678e697d0093a682bb435dcbca77cc44fd7b2dfd7) |
| 12:32:15 | wSOL → SPCXx | market sell | Winner too late: creation blockhash expired | `0x8ccd2c8d…` [🐞](https://debug.barn.cow.fi/order/0x8ccd2c8d061d8c4787ad4c488e336a9b59d01e1a7e607606eedce8b1a2162f48) |
| 12:32:15 | wSOL → QQQx | market sell | Winner too late: creation blockhash expired | `0x498787c5…` [🐞](https://debug.barn.cow.fi/order/0x498787c5315a842d8b81f5f99300a77ed78eb779ec17d73fae3041b7108d6c2c) |
| 12:32:16 | wSOL → GMEx | market sell | Winner too late: creation blockhash expired | `0xc751869c…` [🐞](https://debug.barn.cow.fi/order/0xc751869c9d88813a03f4f1b50d72002a9d090983545b8a6d3e262dc69b0617e2) |
| 12:32:18 | wSOL → LLYx | market sell | Winner too late: creation blockhash expired | `0x73a825d1…` [🐞](https://debug.barn.cow.fi/order/0x73a825d117afff918f9199fe054823cca8a22695289a8a5043adf1a9dbd27f9b) |
| 12:32:18 | wSOL → SKHYx | market sell | Winner too late: creation blockhash expired | `0x6afeeb08…` [🐞](https://debug.barn.cow.fi/order/0x6afeeb08a24ee834845a7adab72f9d6a881d86a60e560c73f7c3d83ecdd93f91) |
| 12:32:20 | wSOL → WMTx | market sell | Winner too late: creation blockhash expired | `0xa768ead9…` [🐞](https://debug.barn.cow.fi/order/0xa768ead941475ae7ce5c8cf6283bf85edec46d3ed07603fab3b7589a52d6edab) |
| 12:32:25 | wSOL → MUx | market sell | Winner too late: creation blockhash expired | `0x37753a8c…` [🐞](https://debug.barn.cow.fi/order/0x37753a8c97c88a15b9611ffe53d07f222d106e01163acf31413bdd90ae87e696) |
| 12:32:27 | wSOL → VIDAx | market sell | Winner too late: creation blockhash expired | `0x3818e16f…` [🐞](https://debug.barn.cow.fi/order/0x3818e16f3b99c3894cc08fba2c00042c4effd4f85d88ae1e01ef1fc1fec2b5e1) |
| 12:32:56 | wSOL → QQQx | market buy | Winner too late: creation blockhash expired | `0xdfbda4e6…` [🐞](https://debug.barn.cow.fi/order/0xdfbda4e6b65d418350635d86901a68b2f3726bba1a4f9028c7f32a4f9d9718de) |
| 12:32:59 | wSOL → TSLAx | market sell | Winner too late: creation blockhash expired | `0x38c9291f…` [🐞](https://debug.barn.cow.fi/order/0x38c9291f78973ca922b079bfcc3b74d1d1031d4c8fc9b176583d354fe21847ff) |
| 12:32:59 | wSOL → HOODx | market sell | Winner too late: creation blockhash expired | `0x720a6c3a…` [🐞](https://debug.barn.cow.fi/order/0x720a6c3abc5574fcca49b8370fd1c63ec17960cee6b7a6bbf76cb2240a0f2080) |
| 12:33:07 | wSOL → MUx | market buy | Winner too late: creation blockhash expired | `0x136f0ba3…` [🐞](https://debug.barn.cow.fi/order/0x136f0ba37e59c8562846064a0cb45063bb2fcf76c9db180192b78c7bc139100e) |
| 12:33:07 | wSOL → SKHYx | market sell | Winner too late: creation blockhash expired | `0x86a50b34…` [🐞](https://debug.barn.cow.fi/order/0x86a50b3467bc85b285fb20cdc1f582ceee24d0f46bc9736d265a7f0a411ec7d7) |
| 12:33:08 | wSOL → WMTx | market sell | Winner too late: creation blockhash expired | `0x298afa30…` [🐞](https://debug.barn.cow.fi/order/0x298afa303a8bca1f852d7ac48bf0d351cb658bee15e2771569214bca2c0e130c) |
| 12:33:12 | wSOL → VIDAx | market buy | Winner too late: creation blockhash expired | `0x0fed41fa…` [🐞](https://debug.barn.cow.fi/order/0x0fed41fa2a7def60268242e4b0fa8145c9a927b1b7833178c91b778fb2495711) |
| 12:33:21 | wSOL → MRVLx | market sell | Winner too late: creation blockhash expired | `0x2d6d55ae…` [🐞](https://debug.barn.cow.fi/order/0x2d6d55aec80896504dad142fafb16cc6faf280c2bd5448985db4e1a70d3102c0) |
| 12:33:23 | wSOL → AMZNx | market sell | Winner too late: creation blockhash expired | `0x91377c52…` [🐞](https://debug.barn.cow.fi/order/0x91377c5265f2fbdd39c8b39ee8b4cc237825465715eef3ac223507ef2e4e82e8) |
| 12:33:35 | wSOL → NVDAx | market sell | Winner too late: creation blockhash expired | `0x1e21a9c4…` [🐞](https://debug.barn.cow.fi/order/0x1e21a9c45039411879d8e11841a3cf6146cf8c7d630af5e12005d23b29dc13cf) |
| 12:33:51 | wSOL → DFDVx | market sell | Winner too late: creation blockhash expired | `0xfee95006…` [🐞](https://debug.barn.cow.fi/order/0xfee950068ccd1409dc51cdaf9ee32eb1b81d4ffa3747d836db0c291baaf9fdec) |
| 12:33:51 | wSOL → WMTx | market buy | Winner too late: creation blockhash expired | `0x459d5ff0…` [🐞](https://debug.barn.cow.fi/order/0x459d5ff0790200e116698c9347ea9852b2d2f3bf8b51c5dd03a2e548a70fdeac) |
| 12:33:51 | wSOL → SKHYx | market buy | Winner too late: creation blockhash expired | `0xa7aef5d0…` [🐞](https://debug.barn.cow.fi/order/0xa7aef5d023b52fb4c8f0d7aa542f75227e709195188022ff0ece232d8d8bafe8) |
| 12:34:10 | wSOL → MRVLx | market sell | Winner too late: creation blockhash expired | `0x401e2ab0…` [🐞](https://debug.barn.cow.fi/order/0x401e2ab05368741306e57cc5753153c9113365a3297f6afb41500c84b9dcbe1a) |
| 12:34:12 | wSOL → AMZNx | market sell | Winner too late: creation blockhash expired | `0x7763c36a…` [🐞](https://debug.barn.cow.fi/order/0x7763c36a0ad1573efa71d2ba947327556e7fc0700c6b359cecfa0a2caa944e6c) |
| 12:34:24 | wSOL → NVDAx | market sell | Winner too late: creation blockhash expired | `0xde665948…` [🐞](https://debug.barn.cow.fi/order/0xde665948704f1be484c03976652bf81253fe1f25d024a17d7e440407bdeaab8a) |
| 12:34:31 | wSOL → GLDx | market sell | Winner too late: creation blockhash expired | `0xde93ffe0…` [🐞](https://debug.barn.cow.fi/order/0xde93ffe01c3fc4b5469f91a50571376baaa70eb1092b9acbecc86a1a2c3c4c30) |
| 12:34:32 | wSOL → NFLXx | market sell | Winner too late: creation blockhash expired | `0x25494060…` [🐞](https://debug.barn.cow.fi/order/0x25494060dbcfba1e67e52918c2ca6e4d0be2190f3d4385912e392f75cf021930) |
| 12:34:45 | wSOL → MSTRx | market sell | Winner too late: creation blockhash expired | `0xdcd570c0…` [🐞](https://debug.barn.cow.fi/order/0xdcd570c04807c805f7d222b19cc9052f2a3eac5755fc7240f5a72e28d96a77d5) |
| 12:34:49 | wSOL → MRVLx | market buy | Winner too late: creation blockhash expired | `0xf328e272…` [🐞](https://debug.barn.cow.fi/order/0xf328e2723a8eaab9a8e74660bfc53388507aa83be3cf1d4562b55a422c6e30b4) |
| 12:34:52 | wSOL → AAPLx | market sell | Winner too late: creation blockhash expired | `0x5e01eecd…` [🐞](https://debug.barn.cow.fi/order/0x5e01eecdaef36e60b0de2e441e90ded96bc2d017bd4c2a751f1501db82b14ea2) |
| 12:34:56 | wSOL → AMZNx | market buy | Winner too late: creation blockhash expired | `0x4a63fedd…` [🐞](https://debug.barn.cow.fi/order/0x4a63feddb5afe42bde171bda614f26ea87034a4828c91d1ba482ac4fae5a1ceb) |
| 12:35:07 | wSOL → NVDAx | market buy | Winner too late: creation blockhash expired | `0x95ea34ac…` [🐞](https://debug.barn.cow.fi/order/0x95ea34ac08f0565d4b72796e9567f8deeb3b587131f0a80b07ae9d0401639c2e) |
| 12:35:22 | wSOL → NFLXx | market sell | Winner too late: creation blockhash expired | `0xa5a0e34b…` [🐞](https://debug.barn.cow.fi/order/0xa5a0e34b04dd2dd32cd9c45d71871006b5bdba2600b140f95ebf62f4751f5acc) |
| 12:35:37 | wSOL → STRCx | market sell | Winner too late: creation blockhash expired | `0xad525d48…` [🐞](https://debug.barn.cow.fi/order/0xad525d48e298bc4d7c99bf12689a17887174267800529d5528dceecf1e953bad) |
| 12:36:03 | wSOL → NFLXx | market buy | Winner too late: creation blockhash expired | `0x97789e61…` [🐞](https://debug.barn.cow.fi/order/0x97789e611359b1ac9afd18d43a8d41a25cbafee91e7b1188ac8ba3ce8f4600fb) |
