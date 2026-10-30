# Solana QoS report: 2026-10-27-17-15-token-2022__xstocks

Barn, orders created between `2026-10-27T17:16:02.838Z` and `2026-10-27T17:20:44.695Z`. Data fetched 2026-10-27T17:23:10+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 121 |
| Orders executed | **120** (99.2%) |
| Sponsored orders never created on-chain | 1 (0.8%) |
| Traders | 14 |
| Settlement txs | 120 |

## Scenario

82 of 86 scenario rows completed. 0 retries, 3 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 17:16:03 | 1 | 1 | sell 0.0025 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 25s | 1 |  |
| 17:16:27 | 2 | 1 | sell 0.00321248 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 → SOL | filled | 30s | 2 |  |
| 17:16:57 | 3 | 1 | sell 0.0025 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 7s | 1 |  |
| 17:17:05 | 4 | 1 | sell 0.00020765 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 24s | 2 |  |
| 17:17:28 | 5 | 1 | sell 0.00034609 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W → SOL | filled | 23s | 2 |  |
| 17:17:52 | 6 | 1 | sell 0.0025 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 17s | 1 |  |
| 17:18:08 | 7 | 1 | sell 0.00120141 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh → SOL | filled | 42s | 2 |  |
| 17:16:03 | 8 | 2 | sell 0.0025 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 28s | 1 |  |
| 17:16:31 | 9 | 2 | sell 0.00165941 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 → SOL | filled | 24s | 2 |  |
| 17:16:55 | 10 | 2 | sell 0.0025 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 10s | 1 |  |
| 17:17:05 | 11 | 2 | sell 0.00072217 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB → SOL | filled | 40s | 2 |  |
| 17:17:45 | 12 | 2 | sell 0.0025 SOL → XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ | filled | 7s | 1 |  |
| 17:17:52 | 13 | 2 | sell 0.00174356 XsP7xzNPvEHS1m6qfanPUGjNmdnmsLKEoNAnHjdxxyZ → SOL | filled | 24s | 2 |  |
| 17:16:03 | 14 | 3 | sell 0.0025 SOL → Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ | filled | 25s | 1 |  |
| 17:16:28 | 15 | 3 | sell 0.0003632 Xs8S1uUs1zvS2p7iwtsG3b6fkhpvmwz4GYU3gWAmWHZ → SOL | filled | 18s | 2 |  |
| 17:16:46 | 16 | 3 | sell 0.0025 SOL → Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu | filled | 7s | 1 |  |
| 17:16:53 | 17 | 3 | sell 0.00036664 Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu → SOL | failed | 7s | 0 | acquire Xsa62P5mvPszXL1krVUnU5ar38bBSVcWAB6fmPCo5Zu error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 17:17:00 | 18 | 3 | sell 0.0025 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 8s | 1 |  |
| 17:17:08 | 19 | 3 | sell 0.00070541 Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re → SOL | filled | 30s | 2 |  |
| 17:16:03 | 20 | 4 | sell 0.0025 SOL → XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX | filled | 8s | 1 |  |
| 17:16:10 | 21 | 4 | sell 0.0004981 XspzcW1PRtgf6Wj92HCiZdjzKCyFekVD8P5Ueh3dRMX → SOL | filled | 26s | 2 |  |
| 17:16:36 | 22 | 4 | sell 0.0025 SOL → XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN | filled | 5s | 1 |  |
| 17:16:41 | 23 | 4 | sell 0.00076634 XsCPL9dNWBMvFtTmwcCA5v3xWPSMEBCszbQdiLLq6aN → SOL | filled | 5s | 1 |  |
| 17:16:46 | 24 | 4 | sell 0.0025 SOL → Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu | filled | 5s | 1 |  |
| 17:16:52 | 25 | 4 | sell 0.00148708 Xs7ZdzSHLU9ftNJsii5fCeJhoRWSC32SQGzGQtePxNu → SOL | filled | 5s | 1 |  |
| 17:16:03 | 26 | 5 | sell 0.0025 SOL → Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc | filled | 28s | 1 |  |
| 17:16:31 | 27 | 5 | sell 0.00995113 Xsf9mBktVB9BSU5kf4nHxPq5hCBJ2j2ui3ecFGxPRGc → SOL | filled | 17s | 2 |  |
| 17:16:49 | 28 | 5 | sell 0.0025 SOL → XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg | filled | 17s | 1 |  |
| 17:17:05 | 29 | 5 | sell 0.00247816 XsvNBAYkrDRNhA7wPHQfX3ZUXZyZLdnCQDfHZ56bzpg → SOL | filled | 18s | 2 |  |
| 17:17:23 | 30 | 5 | sell 0.0025 SOL → XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp | filled | 4s | 1 |  |
| 17:17:27 | 31 | 5 | sell 0.00078968 XsbEhLAtcf6HdfpFZ5xEMdqW8nfAvcsP5bdudRLJzJp → SOL | filled | 30s | 2 |  |
| 17:16:03 | 32 | 6 | sell 0.0025 SOL → XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 | filled | 18s | 1 |  |
| 17:16:21 | 33 | 6 | sell 0.00112024 XsqE9cRRpzxcGKDXj1BJ7Xmg4GRhZoyY1KpmGSxAWT2 → SOL | filled | 25s | 2 |  |
| 17:16:46 | 34 | 6 | sell 0.0025 SOL → Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg | filled | 7s | 1 |  |
| 17:16:53 | 35 | 6 | sell 0.00104887 Xs3eBt7uRfJX8QUs4suhyU8p2M6DoUDrJyWBa8LLZsg → SOL | filled | 18s | 2 |  |
| 17:17:11 | 36 | 6 | sell 0.0025 SOL → Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH | filled | 8s | 1 |  |
| 17:17:19 | 37 | 6 | sell 0.00248053 Xs78JED6PFZxWc2wCEPspZW9kL3Se5J7L5TChKgsidH → SOL | filled | 20s | 2 |  |
| 17:16:03 | 38 | 7 | sell 0.0025 SOL → XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 | filled | 19s | 1 |  |
| 17:16:22 | 39 | 7 | sell 0.00078292 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | failed | 52s | 2 | main expired |
| 17:17:14 | 40 | 7 | sell 0.00130486 XsoBhf2ufR8fTyNSjqfU71DYGaE6Z3SUGAidpzriAA4 → SOL | filled | 30s | 2 |  |
| 17:17:44 | 41 | 7 | sell 0.0025 SOL → XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk | filled | 10s | 1 |  |
| 17:17:54 | 42 | 7 | sell 0.20269702 XsfCC9VL4DamVGNgdJpfLXB3sBVa158Gbx8sh7NzmTk → SOL | filled | 20s | 2 |  |
| 17:18:14 | 43 | 7 | sell 0.0025 SOL → Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy | filled | 7s | 1 |  |
| 17:18:21 | 44 | 7 | sell 0.06056963 Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy → SOL | failed | 7s | 0 | acquire Xs2yquAgsHByNzx68WJC55WHjHBvG9JsMB7CWjTLyPy error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 17:16:03 | 45 | 8 | sell 0.0025 SOL → XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM | filled | 8s | 1 |  |
| 17:16:11 | 46 | 8 | sell 0.00270181 XshPgPdXFRWB8tP1j82rebb2Q9rPgGX37RuqzohmArM → SOL | filled | 12s | 1 |  |
| 17:16:22 | 47 | 8 | sell 0.0025 SOL → XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ | filled | 5s | 1 |  |
| 17:16:28 | 48 | 8 | sell 0.00293543 XsaBXg8dU5cPM6ehmVctMkVqoiRG2ZjMo1cyBJ3AykQ → SOL | filled | 30s | 2 |  |
| 17:16:58 | 49 | 8 | sell 0.0025 SOL → Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x | filled | 9s | 1 |  |
| 17:17:07 | 50 | 8 | sell 0.00052262 Xs6B6zawENwAbWVi7w92rjazLuAr5Az59qgWKcNb45x → SOL | filled | 20s | 2 |  |
| 17:16:03 | 51 | 9 | sell 0.0025 SOL → XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL | filled | 9s | 1 |  |
| 17:16:13 | 52 | 9 | sell 0.00191264 XsjFwUPiLofddX5cWFHW35GCbXcSu1BCUGfxoQAQjeL → SOL | filled | 20s | 2 |  |
| 17:16:33 | 53 | 9 | sell 0.0025 SOL → XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav | filled | 10s | 1 |  |
| 17:16:43 | 54 | 9 | sell 0.00028462 XsQLZycSZ7QnBBdBXQaTbQdiUcbRqjNJgyBGAMzhHav → SOL | filled | 23s | 2 |  |
| 17:17:07 | 55 | 9 | sell 0.0025 SOL → XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc | filled | 20s | 1 |  |
| 17:17:27 | 56 | 9 | sell 0.00172031 XsjQP3iMAaQ3kQScQKthQpx9ALRbjKAjQtHg6TFomoc → SOL | filled | 17s | 2 |  |
| 17:16:03 | 57 | 10 | sell 0.0025 SOL → XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo | filled | 10s | 1 |  |
| 17:16:13 | 58 | 10 | sell 0.00076666 XsgSaSvNSqLTtFuyWPBhK9196Xb9Bbdyjj4fH3cPJGo → SOL | filled | 18s | 2 |  |
| 17:16:31 | 59 | 10 | sell 0.0025 SOL → Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci | filled | 10s | 1 |  |
| 17:16:41 | 60 | 10 | sell 0.00236142 Xs151QeqTCiuKtinzfRATnUESM2xTU6V9Wy8Vy538ci → SOL | filled | 18s | 2 |  |
| 17:16:59 | 61 | 10 | sell 0.0025 SOL → XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL | filled | 10s | 1 |  |
| 17:17:09 | 62 | 10 | sell 0.00022735 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL → SOL | filled | 20s | 2 |  |
| 17:17:29 | 63 | 10 | sell 0.00037893 XsEH7wWfJJu2ZT3UCFeVfALnVA6CP5ur7Ee11KmzVpL → SOL | filled | 17s | 2 |  |
| 17:16:03 | 64 | 11 | sell 0.0025 SOL → XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh | filled | 9s | 1 |  |
| 17:16:13 | 65 | 11 | sell 0.00156561 XsaHND8sHyfMfsWPj6kSdd5VwvCayZvjYgKmmcNL5qh → SOL | filled | 18s | 2 |  |
| 17:16:31 | 66 | 11 | sell 0.0025 SOL → XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF | filled | 10s | 1 |  |
| 17:16:41 | 67 | 11 | sell 0.00047014 XsXcJ6GZ9kVnjqGsjBnktRcuwMBmvKWh8S93RefZ1rF → SOL | filled | 30s | 2 |  |
| 17:17:12 | 68 | 11 | sell 0.0025 SOL → XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA | filled | 5s | 1 |  |
| 17:17:16 | 69 | 11 | sell 0.00106586 XsuxRGDzbLjnJ72v74b7p9VY6N66uYgTCyfwwRjVCJA → SOL | filled | 14s | 2 |  |
| 17:16:03 | 70 | 12 | sell 0.0025 SOL → XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe | filled | 8s | 1 |  |
| 17:16:11 | 71 | 12 | sell 0.00068993 XszvaiXGPwvk2nwb3o9C1CX4K6zH8sez11E6uyup6fe → SOL | filled | 20s | 2 |  |
| 17:16:32 | 72 | 12 | sell 0.0025 SOL → XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV | filled | 6s | 1 |  |
| 17:16:38 | 73 | 12 | sell 0.00060557 XsafvsGtzFqqHgTnA3aPC83EAMkacU5mcGtcSayhpVV → SOL | filled | 20s | 2 |  |
| 17:16:58 | 74 | 12 | sell 0.0025 SOL → Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj | filled | 8s | 1 |  |
| 17:17:06 | 75 | 12 | sell 0.00018281 Xswbpc8UqU6e1j9QZEWCjBMjyvz4twqD7PCy6j2e7jj → SOL | filled | 5s | 1 |  |
| 17:16:04 | 76 | 13 | sell 0.0025 SOL → XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n | filled | 10s | 1 |  |
| 17:16:13 | 77 | 13 | sell 0.00702429 XsfAzPzYrYjd4Dpa9BU3cusBsvWfVB9gBcyGC87S57n → SOL | filled | 18s | 2 |  |
| 17:16:32 | 78 | 13 | sell 0.0025 SOL → XsXb7KCxcxTi6hqWfYyEe1kpTwtiCeU5TJbEz8N7RWn | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:16:32 | 79 | 13 | sell 0.0025 SOL → XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU | filled | 4s | 1 |  |
| 17:16:37 | 80 | 13 | sell 0.00170138 XsnhgGRQwhExfS2bmWzR6EYddKGPRGDEjeJsatkmKqU → SOL | filled | 24s | 2 |  |
| 17:16:04 | 81 | 14 | sell 0.0025 SOL → XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB | filled | 19s | 1 |  |
| 17:16:23 | 82 | 14 | sell 0.00379726 XsAsZLF4MmsvS1sDxRMrUz7REjHfwbC9UAMXSRBqgEB → SOL | filled | 24s | 2 |  |
| 17:16:47 | 83 | 14 | sell 0.0025 SOL → Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH | filled | 17s | 1 |  |
| 17:17:04 | 84 | 14 | sell 0.00023241 Xsnuv4omNoHozR6EEW5mXkw8Nrny5rB3jVfLqi6gKMH → SOL | filled | 21s | 2 |  |
| 17:17:24 | 85 | 14 | sell 0.0025 SOL → XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn | filled | 7s | 1 |  |
| 17:17:31 | 86 | 14 | sell 0.01072636 XsrBCwaH8c46xiqXBChzobgufRKxQxAWUWbndgBNzFn → SOL | filled | 20s | 2 |  |

### Rows without an order

3 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| BlockhashExpired | acquire | 2 | SOL → METAx, SOL → DFDVx | the transaction's blockhash is no longer valid, sign a fresh one |
| NoLiquidity | main | 1 | SOL → TCENTx | no route found |

Scenario orders: 121 (83 main, 38 acquire). Cleanup placed 0 more, listed below and left out of the stats.

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 120 | 99.2% |
| expired: never created on-chain (winner found, creation blockhash expired) | 1 | 0.8% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 7s | 13s | 24s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 120 | 100.0% | 120 | 159,513 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 124 | 124 | 120 | 96.8% | 3 | 2 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 3 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 45 times
- Orders filtered for `in_flight`: 1 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 121 | 120 | 99.2% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → PLTRx | 3 | 3 | 100.0% |
| wSOL → SPYx | 3 | 3 | 100.0% |
| wSOL → NFLXx | 3 | 3 | 100.0% |
| wSOL → CRCLx | 2 | 2 | 100.0% |
| wSOL → SPCXx | 2 | 2 | 100.0% |
| wSOL → QQQx | 2 | 2 | 100.0% |
| wSOL → MCDx | 2 | 2 | 100.0% |
| wSOL → GMEx | 2 | 2 | 100.0% |
| wSOL → ORCLx | 2 | 2 | 100.0% |
| wSOL → AVGOx | 2 | 2 | 100.0% |
| wSOL → XOMx | 2 | 2 | 100.0% |
| wSOL → MSFTx | 2 | 2 | 100.0% |
| wSOL → NVOx | 2 | 2 | 100.0% |
| wSOL → UBERx | 2 | 2 | 100.0% |
| wSOL → UNHx | 2 | 2 | 100.0% |
| wSOL → KOx | 2 | 2 | 100.0% |
| wSOL → WMTx | 2 | 2 | 100.0% |
| wSOL → AMDx | 2 | 2 | 100.0% |
| wSOL → SKHYx | 2 | 2 | 100.0% |
| wSOL → TSMx | 2 | 2 | 100.0% |
| wSOL → MUx | 2 | 2 | 100.0% |
| PLTRx → SOL (native) | 2 | 1 | 50.0% |
| wSOL → AMZNx | 2 | 2 | 100.0% |
| wSOL → LLYx | 2 | 2 | 100.0% |
| wSOL → HOODx | 2 | 2 | 100.0% |
| wSOL → TSLAx | 2 | 2 | 100.0% |
| wSOL → BRK.Bx | 2 | 2 | 100.0% |
| wSOL → GLDx | 2 | 2 | 100.0% |
| wSOL → TQQQx | 2 | 2 | 100.0% |
| wSOL → STRCx | 2 | 2 | 100.0% |
| wSOL → MRVLx | 2 | 2 | 100.0% |
| SPYx → SOL (native) | 2 | 2 | 100.0% |
| NFLXx → SOL (native) | 2 | 2 | 100.0% |
| wSOL → AAPLx | 2 | 2 | 100.0% |
| wSOL → BMNRx | 2 | 2 | 100.0% |
| wSOL → VIDAx | 2 | 2 | 100.0% |
| wSOL → MSTRx | 2 | 2 | 100.0% |
| wSOL → NVDAx | 2 | 2 | 100.0% |
| wSOL → INTCx | 1 | 1 | 100.0% |
| INTCx → SOL (native) | 1 | 1 | 100.0% |
| ORCLx → SOL (native) | 1 | 1 | 100.0% |
| AVGOx → SOL (native) | 1 | 1 | 100.0% |
| UNHx → SOL (native) | 1 | 1 | 100.0% |
| XOMx → SOL (native) | 1 | 1 | 100.0% |
| NVOx → SOL (native) | 1 | 1 | 100.0% |
| MSFTx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → GOOGLx | 1 | 1 | 100.0% |
| GOOGLx → SOL (native) | 1 | 1 | 100.0% |
| GMEx → SOL (native) | 1 | 1 | 100.0% |
| QQQx → SOL (native) | 1 | 1 | 100.0% |
| MCDx → SOL (native) | 1 | 1 | 100.0% |
| UBERx → SOL (native) | 1 | 1 | 100.0% |
| KOx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → METAx | 1 | 1 | 100.0% |
| wSOL → COINx | 1 | 1 | 100.0% |
| CRCLx → SOL (native) | 1 | 1 | 100.0% |
| SPCXx → SOL (native) | 1 | 1 | 100.0% |
| WMTx → SOL (native) | 1 | 1 | 100.0% |
| COINx → SOL (native) | 1 | 1 | 100.0% |
| TSMx → SOL (native) | 1 | 1 | 100.0% |
| SKHYx → SOL (native) | 1 | 1 | 100.0% |
| AMDx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → SNDKx | 1 | 1 | 100.0% |
| MUx → SOL (native) | 1 | 1 | 100.0% |
| SNDKx → SOL (native) | 1 | 1 | 100.0% |
| AMZNx → SOL (native) | 1 | 1 | 100.0% |
| HOODx → SOL (native) | 1 | 1 | 100.0% |
| LLYx → SOL (native) | 1 | 1 | 100.0% |
| TSLAx → SOL (native) | 1 | 1 | 100.0% |
| BRK.Bx → SOL (native) | 1 | 1 | 100.0% |
| GLDx → SOL (native) | 1 | 1 | 100.0% |
| MRVLx → SOL (native) | 1 | 1 | 100.0% |
| STRCx → SOL (native) | 1 | 1 | 100.0% |
| TQQQx → SOL (native) | 1 | 1 | 100.0% |
| AAPLx → SOL (native) | 1 | 1 | 100.0% |
| BMNRx → SOL (native) | 1 | 1 | 100.0% |
| VIDAx → SOL (native) | 1 | 1 | 100.0% |
| MSTRx → SOL (native) | 1 | 1 | 100.0% |
| wSOL → DFDVx | 1 | 1 | 100.0% |
| NVDAx → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 11 | 11 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 11 | 11 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 9 | 9 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 9 | 9 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 9 | 9 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 9 | 8 | 88.9% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 9 | 9 | 100.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 9 | 9 | 100.0% |
| `91V7pVaQyARieyPXcNpxQZdqk5KoH7P1vgg2YHNBfSti` | 9 | 9 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 8 | 8 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 8 | 8 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 7 | 7 | 100.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 7 | 7 | 100.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 6 | 6 | 100.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 1 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 17:16:39 | PLTRx → SOL (native) | market sell | Winner too late: creation blockhash expired | `0x798c9552…` [🐞](https://debug.barn.cow.fi/order/0x798c9552b41e9f6ecd2a121faa0213abcde4e11445d06c60189b9c438a16b606) |
