# Solana QoS report: grafiks-2026-10-09-213017-token-coverage

Barn, orders created between `2026-10-09T20:13:34.876Z` and `2026-10-09T20:17:36.664Z`. Data fetched 2026-10-09T20:19:08+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 41 |
| Orders executed | **41** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 37 |
| Settlement txs | 41 |

## Scenario

41 of 55 scenario rows completed. 0 retries, 3 placement errors (from `sim/journal.jsonl`).

| Planned trades | Filled | Quote failed | Submitted but unfilled | Other failed | Unfinished | Trade completion |
|---|---|---|---|---|---|---|
| 55 | 41 | 14 | 0 | 0 | 0 | 74.5% |

Counts are scenario rows, not failed attempts. Cleanup is excluded. Late fills remain separate from full-flow completion.

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 20:13:35 | 1 | 1 | sell 0.01 SOL → 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump | filled | 12s | 1 |  |
| 20:13:47 | 2 | 1 | buy 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:35 | 3 | 2 | sell 0.01 SOL → 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump | filled | 21s | 1 |  |
| 20:13:56 | 4 | 2 | buy 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:35 | 5 | 3 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | filled | 15s | 1 |  |
| 20:13:49 | 6 | 3 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:35 | 7 | 4 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 18s | 1 |  |
| 20:13:52 | 8 | 4 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:35 | 9 | 5 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | filled | 15s | 1 |  |
| 20:13:50 | 10 | 5 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:35 | 11 | 6 | sell 0.01 SOL → CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH | filled | 15s | 1 |  |
| 20:13:50 | 12 | 6 | buy 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:35 | 13 | 7 | sell 0.01 SOL → XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 | filled | 72s | 1 |  |
| 20:14:47 | 14 | 7 | buy 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1 ← SOL | filled | 5s | 1 |  |
| 20:13:35 | 15 | 8 | sell 0.01 SOL → XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | filled | 18s | 1 |  |
| 20:13:53 | 16 | 8 | buy 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:35 | 17 | 9 | sell 0.01 SOL → USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk | filled | 15s | 1 |  |
| 20:13:50 | 18 | 9 | buy 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:35 | 19 | 10 | sell 0.01 SOL → SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 | filled | 63s | 1 |  |
| 20:14:38 | 20 | 10 | buy 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3 ← SOL | filled | 10s | 1 |  |
| 20:13:35 | 21 | 11 | sell 0.01 SOL → Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh | filled | 19s | 1 |  |
| 20:13:54 | 22 | 11 | buy 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:36 | 23 | 12 | sell 0.01 SOL → MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | filled | 21s | 1 |  |
| 20:13:57 | 24 | 12 | buy 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:36 | 25 | 13 | sell 0.01 SOL → SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb | filled | 12s | 1 |  |
| 20:13:47 | 26 | 13 | buy 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 20:13:36 | 27 | 14 | sell 0.01 SOL → Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 | filled | 56s | 1 |  |
| 20:14:32 | 28 | 14 | buy 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8 ← SOL | filled | 4s | 1 |  |
| 20:13:36 | 29 | 15 | sell 0.01 SOL → XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB | filled | 57s | 1 |  |
| 20:14:32 | 30 | 15 | buy 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB ← SOL | filled | 4s | 1 |  |
| 20:13:36 | 31 | 16 | sell 0.005 SOL → DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 20:13:36 | 32 | 17 | sell 0.005 SOL → HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 20:13:36 | 33 | 18 | sell 0.005 SOL → Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw | failed | 6s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 20:13:36 | 34 | 19 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 18s | 1 |  |
| 20:13:36 | 35 | 20 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 19s | 1 |  |
| 20:13:36 | 36 | 21 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 16s | 1 |  |
| 20:13:37 | 37 | 22 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 18s | 1 |  |
| 20:13:37 | 38 | 23 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 19s | 1 |  |
| 20:13:37 | 39 | 24 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 19s | 1 |  |
| 20:13:37 | 40 | 25 | sell 0.005 SOL → cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | filled | 15s | 1 |  |
| 20:13:37 | 41 | 26 | sell 0.005 SOL → DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | filled | 18s | 1 |  |
| 20:13:37 | 42 | 27 | sell 0.005 SOL → HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | filled | 16s | 1 |  |
| 20:13:37 | 43 | 28 | sell 0.005 SOL → A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | filled | 18s | 1 |  |
| 20:13:37 | 44 | 29 | sell 0.005 SOL → 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | filled | 15s | 1 |  |
| 20:13:37 | 45 | 30 | sell 0.005 SOL → 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | filled | 16s | 1 |  |
| 20:13:37 | 46 | 31 | sell 0.005 SOL → 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | filled | 25s | 1 |  |
| 20:13:38 | 47 | 32 | sell 0.005 SOL → 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | filled | 19s | 1 |  |
| 20:13:38 | 48 | 33 | sell 0.005 SOL → AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | filled | 38s | 1 |  |
| 20:13:38 | 49 | 34 | sell 0.005 SOL → Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | filled | 21s | 1 |  |
| 20:13:38 | 50 | 35 | sell 0.005 SOL → euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | filled | 21s | 1 |  |
| 20:13:38 | 51 | 36 | sell 0.005 SOL → 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | filled | 19s | 1 |  |
| 20:13:38 | 52 | 37 | sell 0.005 SOL → MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | filled | 19s | 1 |  |
| 20:13:38 | 53 | 38 | sell 0.005 SOL → ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | filled | 19s | 1 |  |
| 20:13:38 | 54 | 39 | sell 0.005 SOL → hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | filled | 19s | 1 |  |
| 20:13:38 | 55 | 40 | sell 0.005 SOL → pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | filled | 24s | 1 |  |

### Rows without a main order

14 rows failed before a main order existed. Any acquisition orders are counted separately.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| Quote unavailable (API: NoLiquidity) | quote | 11 | SOL → ANSEM, SOL → PAID, SOL → USDG, SOL → PUMP, SOL → PYUSD, SOL → CASH, SOL → SPYx, SOL → USDv, SOL → NVDAx, SOL → MU, SOL → SPCX | API reported no route found. This does not prove missing liquidity; underlying cause unknown. |
| UnsupportedToken | main | 3 | SOL → SI, SOL → ZCAT, SOL → ANTHROPIC | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |

Scenario orders: 41 (41 main, 0 acquire). Cleanup placed 37 more, listed below and left out of the stats.

## Backend failure evidence

NoLiquidity is a generic API response, not proof of missing market liquidity. Timing matches are approximate; a shared auction does not prove an order-specific cause.

| UTC time | Row | Stage | Solver | Backend detail | Match | Cause / order context |
|---|---|---|---|---|---|---|
| 2026-10-09T20:13:42.093Z | 31 | main | Unknown | Backend detail unavailable | no backend evidence | Token DEW9dSN6QpWyNthphCpMmAbZP1Q4cEKR9xQXAri98WDP is unsupported: Token-2022 transfer fee |
| 2026-10-09T20:13:42.205Z | 32 | main | Unknown | Backend detail unavailable | no backend evidence | Token HcRLc9VDgjLeK154xDawfb1dmVJ98DoSqcwTHGqiDeJR is unsupported: Token-2022 transfer fee |
| 2026-10-09T20:13:42.602Z | 33 | main | Unknown | Backend detail unavailable | no backend evidence | Token Pren1FvFX6J3E4kXhJuCiAD5aDmGEb7qJRncwA8Lkhw is unsupported: Token-2022 transfer fee |
| 2026-10-09T20:13:47.235Z | 2 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:48.093Z | 26 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:49.883Z | 6 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:50.145Z | 10 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:50.346Z | 12 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:50.724Z | 18 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:53.290Z | 8 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:53.693Z | 16 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:54.760Z | 22 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:56.493Z | 4 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:57.471Z | 24 | main | grafiks | QuotingFailed: No valid quote found | time window (approximate) | Underlying cause unknown |
| 2026-10-09T20:13:46.152639924Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(7, Custom(21))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x03b75404448c9eac34cae2b74a0e504c297db4d81c8da376a6870e36d2f1ee17, 0x08471ed3aa80ffa02d91f6c4181dab1873a146c31af3b81349d25b9050680f2c, 0x0f29fdf51c9e3d0049403efdbb9c852a4ec373252c95f00b61b72e1ed44b86ea, 0x136dd46a8c6909df9f08455af96ffc52fc36ed667ea7b94850a260c9d1e8ae90, 0x249e03c8e3f7a8e8c1bb50c5d3727f830d0e572c0370d5c8ff44051bbdaf1903, 0x5e5d56e3f437c8b09d89252a02820b6bcab7994d1841734c3d8fd396e54f8699, 0x6410778ee4ad5c14fed023aaa32a4d96bbe3e2baa308a63f3b5b0f16464c7dd2, 0x82ac722bf27cf74bb234111714a2df2058f7eb9a1b928b561f196ab128d55300, 0x9b5a2aa2c8159f09055e25a75476d76f167c4456e30f82a8341f049bf08130ce, 0xa19ffa722d5e60ca325e1aeaa6d7b43a24eb034715ad474a2c1f23aa205dd176, 0xcacb7e8caab66573ad9353a66d745387b3714345229f10de78cf993be2bb67d1, 0xe30d693b9d19a63bb8fcbc08f5e5aad7db337733ac3f784ddb8c7da35970c070 |
| 2026-10-09T20:13:46.1526557Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(21))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x03b75404448c9eac34cae2b74a0e504c297db4d81c8da376a6870e36d2f1ee17, 0x08471ed3aa80ffa02d91f6c4181dab1873a146c31af3b81349d25b9050680f2c, 0x0f29fdf51c9e3d0049403efdbb9c852a4ec373252c95f00b61b72e1ed44b86ea, 0x136dd46a8c6909df9f08455af96ffc52fc36ed667ea7b94850a260c9d1e8ae90, 0x249e03c8e3f7a8e8c1bb50c5d3727f830d0e572c0370d5c8ff44051bbdaf1903, 0x5e5d56e3f437c8b09d89252a02820b6bcab7994d1841734c3d8fd396e54f8699, 0x6410778ee4ad5c14fed023aaa32a4d96bbe3e2baa308a63f3b5b0f16464c7dd2, 0x82ac722bf27cf74bb234111714a2df2058f7eb9a1b928b561f196ab128d55300, 0x9b5a2aa2c8159f09055e25a75476d76f167c4456e30f82a8341f049bf08130ce, 0xa19ffa722d5e60ca325e1aeaa6d7b43a24eb034715ad474a2c1f23aa205dd176, 0xcacb7e8caab66573ad9353a66d745387b3714345229f10de78cf993be2bb67d1, 0xe30d693b9d19a63bb8fcbc08f5e5aad7db337733ac3f784ddb8c7da35970c070 |
| 2026-10-09T20:13:51.983131133Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x2ecc9bde7e9cd4dc4fde5a5a60c46d2d989706b6f8e353820616c9d41d7e22ec, 0x3bf47c6c9ee596366206b02cc1dea5da2ab36d088eb48624a449ebca5d4e79fc, 0x434abd0a48defd958d539b5850f06ecae88955e469e1dcf6ba23f2057f034c1a, 0x59b6b9847d3bec6ffb1b475ca8b9eb7b4e149ef9d2f55dd6afa7a88ecb2bcd25, 0x74acd5ebb79f343c6e97a610c7f167a92e66a5655e026628ec88af71b68b64f6, 0x7a812a4a2dce6d403cbd176f279917143e284f94cbe3f9633dabfec61cf0a772, 0x844a5e066c7ad0bc14c434ecf07274d9a528740a8be5480d48a27ab58ce6a9dd, 0x90890cfe00427cb100396f91f725462cd3dcc1959bbd99cacc4a610b6f38d777, 0x93125595f7f8f3f36777e0b959af9fbe61e2b6855b97997ced83a8ded4e3b5db, 0xa7b083b98ec8eedaf9514c3c78039566c5a15dd6aec0d6b04885151f08386469, 0xaabf92a50b1f465add7c3bb04626304199d71983efdf132101605bc19527b7e1, 0xb6b480abc8ece5186bb953bb360f5c77d6903303e38006c0a620861f43f10522, 0xc431c33e0535e889d54c0d2d9c867d606dc7736d3300950ac87b88850750bb09, 0xd27bc4887c573cd978e6106b6578967d56069c67b7bc81abcbd017ec6933fe19, 0xe9302e731566e1dfa284625840d4a0814ee34ff223f9d2062ffe9b884a7c6d7f |
| 2026-10-09T20:13:56.052663414Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x1d433c5871c12d7f1652d8667f18a17eb71f1c00724a494b0ec91e235e21eff7, 0x255aa9043c95098de57a419fc9d96283c4ccff95fe3a7408f30bf2645ceeda96, 0x5397dbde0243d31aa6beb5a5667a777f0525354581c1ad0e5eb5b484ff8af227, 0x53d318786801f8d9a1587154373cba9c5a20e149cca1e4ebc45324607d95c5de, 0x5b2a4c078d38b5fe09483d9fde6315a7a38a5ec59c8c5935430437890f73066d, 0x67ed4a2e4f90feed0afdad9075aa885b1be51e665ff6598adbe4220f65036f64, 0x7bc32bfa565a17d4af7ae43ebe6a728bda1ca004ab604b7df59517e9fd3888aa, 0xd1b5d11aab892a655d0bb2c455fc239c4fdb99abf1f5437f62bd2c63af74af65, 0xf6aaa27686c83d1cdf78287751e13f693e7bba632fabc0bf77c3552643afff4c |
| 2026-10-09T20:14:30.355997562Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x03b75404448c9eac34cae2b74a0e504c297db4d81c8da376a6870e36d2f1ee17, 0x5e5d56e3f437c8b09d89252a02820b6bcab7994d1841734c3d8fd396e54f8699, 0x82ac722bf27cf74bb234111714a2df2058f7eb9a1b928b561f196ab128d55300, 0xa19ffa722d5e60ca325e1aeaa6d7b43a24eb034715ad474a2c1f23aa205dd176 |
| 2026-10-09T20:14:30.356030882Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x03b75404448c9eac34cae2b74a0e504c297db4d81c8da376a6870e36d2f1ee17, 0x5e5d56e3f437c8b09d89252a02820b6bcab7994d1841734c3d8fd396e54f8699, 0x82ac722bf27cf74bb234111714a2df2058f7eb9a1b928b561f196ab128d55300, 0xa19ffa722d5e60ca325e1aeaa6d7b43a24eb034715ad474a2c1f23aa205dd176 |
| 2026-10-09T20:14:35.29917369Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x4083d933d36467ea710b522783dd96605ac58fcd0d4335f086dff0c3f8ec6e9b, 0x94a253bc4b160bd107717a80a01b6c6dd2b7f49338bc0b48232c54e295060e7d |

Backend evidence fetched through `2026-10-09T20:17:36.664Z`.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 20:14:54 | 1 | ANSEM → SOL (native) | Executed | `0xe17d4afc…` [🐞](https://debug.barn.cow.fi/order/0xe17d4afca2765cb42ceef7c43e66dc5668e85e5f25f294f34d26540a428bf260) |
| 20:14:55 | 2 | PAID → SOL (native) | Executed | `0x25b4ec4d…` [🐞](https://debug.barn.cow.fi/order/0x25b4ec4d43094c332f8aabba0527fcce4e53c1b6b7075d1c27830338ec7388d4) |
| 20:14:56 | 3 | USDG → SOL (native) | Executed | `0xf7fc353c…` [🐞](https://debug.barn.cow.fi/order/0xf7fc353ce346477a146d1327e9c1036ce004dd9076bf8ff97938b126dea6e022) |
| 20:14:57 | 4 | PUMP → SOL (native) | Executed | `0x97468372…` [🐞](https://debug.barn.cow.fi/order/0x974683723cdf9f1dace1605e772703edbb828d823563cb51fa7ab36a61fd1651) |
| 20:14:58 | 5 | PYUSD → SOL (native) | Executed | `0xaab92614…` [🐞](https://debug.barn.cow.fi/order/0xaab9261486b8766751d632e79105a8b3df685fd41c997931eea555433f9d2765) |
| 20:14:59 | 6 | CASH → SOL (native) | Executed | `0x1ede8a5a…` [🐞](https://debug.barn.cow.fi/order/0x1ede8a5a55c3f92c6140230ec61e25ec8bd96ce7670e6f5090e5df4df08cd2f3) |
| 20:15:00 | 7 | CRCLx → SOL (native) | Executed | `0x7ceb9afa…` [🐞](https://debug.barn.cow.fi/order/0x7ceb9afadb41238f889daaa479fb12cfe86a4318361475d9c4579cb4f4c0c2dd) |
| 20:15:01 | 8 | SPYx → SOL (native) | Executed | `0xe6ee2da5…` [🐞](https://debug.barn.cow.fi/order/0xe6ee2da5927d63159407c67fbd34b20a8384fd44a76203a4f3c208d207c59490) |
| 20:15:02 | 9 | USDv → SOL (native) | Executed | `0x346f9d68…` [🐞](https://debug.barn.cow.fi/order/0x346f9d683529fec56d131361955fdf48e33744f9e3e0da1dbbb120f7fc83ce7b) |
| 20:15:05 | 10 | SKHY → SOL (native) | Executed | `0x308d78ce…` [🐞](https://debug.barn.cow.fi/order/0x308d78ce8e990c2bcc4b2bf11fed5189890e8d9a351752f146e9ba2e2f1b574d) |
| 20:15:23 | 11 | NVDAx → SOL (native) | Executed | `0xc0bf7d15…` [🐞](https://debug.barn.cow.fi/order/0xc0bf7d159ca3efa4e487d29dd33235a261d454dd613f755cb4a3f4ab390fa6f6) |
| 20:15:24 | 12 | MU → SOL (native) | Executed | `0xfa089d36…` [🐞](https://debug.barn.cow.fi/order/0xfa089d3616efda5b2c5b94045a3b8300d2006c247c1bd0e363f35c9e486a37bc) |
| 20:15:26 | 13 | SPCX → SOL (native) | Executed | `0x5e7ac2e7…` [🐞](https://debug.barn.cow.fi/order/0x5e7ac2e71ca5b22ad0aa884daae5e0d1592ae99945c185f8a8b5d7379404af38) |
| 20:15:29 | 14 | SPCXx → SOL (native) | Executed | `0x8a2b8673…` [🐞](https://debug.barn.cow.fi/order/0x8a2b8673ed50a3a84836bab37cfb8b816d361ec8237124f97c584ad7cb6030cc) |
| 20:15:30 | 15 | TSLAx → SOL (native) | Executed | `0x08318e4f…` [🐞](https://debug.barn.cow.fi/order/0x08318e4f4f682feea349277b90006679529be44aba7ad267e1fe467f11997ed4) |
| 20:15:34 | 19 | Bonk → SOL (native) | Executed | `0xee133478…` [🐞](https://debug.barn.cow.fi/order/0xee1334781f549d0fbaefec7a1c2f19ec13c1c640865900a13260f74dc0b5a4ae) |
| 20:15:38 | 20 | $WIF → SOL (native) | Executed | `0xe2666f8e…` [🐞](https://debug.barn.cow.fi/order/0xe2666f8ee2aefecacb3ad163f0c56cccde0f28cdf704a894e0f2070be975cfce) |
| 20:15:39 | 21 | POPCAT → SOL (native) | Executed | `0xe2e02676…` [🐞](https://debug.barn.cow.fi/order/0xe2e02676e8a423c42505c1c339a9c36a9018f25586982a20ac7822803d03878f) |
| 20:15:40 | 22 | JitoSOL → SOL (native) | Executed | `0x38f96b30…` [🐞](https://debug.barn.cow.fi/order/0x38f96b306d34fca4c8fe96a269dab8ae21024e868369a30e4fc6819640c04240) |
| 20:15:48 | 23 | mSOL → SOL (native) | Executed | `0xb2e39641…` [🐞](https://debug.barn.cow.fi/order/0xb2e39641f8f98a49b2a32303ecdd3678b8a33c483caf28efc8686fadbc3fc1cb) |
| 20:15:51 | 24 | JupSOL → SOL (native) | Executed | `0xfc14369f…` [🐞](https://debug.barn.cow.fi/order/0xfc14369f5456014425707375835ef2e1ede6610cd6e8e3ba681434fe33d48982) |
| 20:15:54 | 25 | cbBTC → SOL (native) | Executed | `0x3a337556…` [🐞](https://debug.barn.cow.fi/order/0x3a3375569d0837ea949376efb060ecf7e03fc43065aa9a37a65194443092f1f9) |
| 20:16:00 | 26 | USDe → SOL (native) | Executed | `0x347da6fd…` [🐞](https://debug.barn.cow.fi/order/0x347da6fd15c0bc73f07ebc5bb47969bf7ece244568dfb17b955e6f5fd1e74791) |
| 20:16:01 | 27 | EURC → SOL (native) | Executed | `0x29135033…` [🐞](https://debug.barn.cow.fi/order/0x29135033ee9fb4a974d55e59bc79b30916c0ce83d1577631514497be8f140a34) |
| 20:16:02 | 28 | USDY → SOL (native) | Executed | `0x9b25fde8…` [🐞](https://debug.barn.cow.fi/order/0x9b25fde8cdf6aeb6dce50094e33700e03d7f90f06457407e28d298fbdce47105) |
| 20:16:03 | 29 | JLP → SOL (native) | Executed | `0xb4dc8bdd…` [🐞](https://debug.barn.cow.fi/order/0xb4dc8bdd0781a64732c494417f2659730e020d8b4dafecc67ce1b2fd5688f5d7) |
| 20:16:09 | 31 | ETH → SOL (native) | Executed | `0x154f6bc1…` [🐞](https://debug.barn.cow.fi/order/0x154f6bc127f6a6cd7b3f237ac78252c96756235f4a079921a7d169090fe2bbcf) |
| 20:16:09 | 30 | INF → SOL (native) | Executed | `0xba75178b…` [🐞](https://debug.barn.cow.fi/order/0xba75178b2530d94aa5e20cf1043ce693297cf4979e4e756f2f97d50098390f45) |
| 20:16:13 | 32 | BNB → SOL (native) | Executed | `0x0dfe3cf2…` [🐞](https://debug.barn.cow.fi/order/0x0dfe3cf247595115715c3c4b6e93f65caa1c1a53a4e73ee281d49fdcf9931410) |
| 20:16:17 | 33 | XAUt0 → SOL (native) | Executed | `0x33b7c10a…` [🐞](https://debug.barn.cow.fi/order/0x33b7c10a3370690eaa49e6742acbb997ea274e234b94afaa9d997cc0d582f2c9) |
| 20:16:18 | 34 | GLDx → SOL (native) | Executed | `0x466c6afd…` [🐞](https://debug.barn.cow.fi/order/0x466c6afd5f0e21af398bf95660a5af7531c9abdedcea579e7c7812ad52146489) |
| 20:16:21 | 35 | EUROP → SOL (native) | Executed | `0x6e51f368…` [🐞](https://debug.barn.cow.fi/order/0x6e51f3680b7fa252d0df6f8af63f91468e04bd01fcc8769613809d7aaa2f9ed7) |
| 20:16:33 | 36 | Fartcoin → SOL (native) | Executed | `0x6f16d904…` [🐞](https://debug.barn.cow.fi/order/0x6f16d9043de87770f7152f49d580f788a55a63dbe65e1c4fc49214514bbab682) |
| 20:16:34 | 37 | MEW → SOL (native) | Executed | `0xd86fb935…` [🐞](https://debug.barn.cow.fi/order/0xd86fb9355415ce6375aa363273536a2ada72f886fee6fc7faf422e53dfad8b97) |
| 20:16:37 | 39 | hyloSOL → SOL (native) | Executed | `0x99128c5a…` [🐞](https://debug.barn.cow.fi/order/0x99128c5a66aff6f9abc40f632ddadaa4738d38e31dd8425b54c61e164ee2d93d) |
| 20:16:37 | 40 | PSOL → SOL (native) | Executed | `0xce6a40e2…` [🐞](https://debug.barn.cow.fi/order/0xce6a40e2faf2b9c93f166729809adc22a3188702e03af4c0d08d4172e83b3ba3) |
| 20:16:38 | 38 | BOME → SOL (native) | Executed | `0xb95efbc3…` [🐞](https://debug.barn.cow.fi/order/0xb95efbc3c0669c3ed145663ad8b661ecf276207da112aab909279e029af1e1b4) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 41 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 6s | 24s | 61s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| AuwL…YzVj | 41 | 100.0% | 41 | 144,391 | 4s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| grafiks | 85 | 85 | 78 | 91.8% | 1 | 12 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 1 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 42 times
- Orders filtered for `unreceivable_buy_token_account`: 42 times
- Orders filtered for `in_flight`: 23 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 37 | 37 | 100.0% |
| buy | 4 | 4 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → CRCLx | 2 | 2 | 100.0% |
| wSOL → SKHY | 2 | 2 | 100.0% |
| wSOL → SPCXx | 2 | 2 | 100.0% |
| wSOL → TSLAx | 2 | 2 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → PAID | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| wSOL → CASH | 1 | 1 | 100.0% |
| wSOL → USDv | 1 | 1 | 100.0% |
| wSOL → NVDAx | 1 | 1 | 100.0% |
| wSOL → SPCX | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → SPYx | 1 | 1 | 100.0% |
| wSOL → MU | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |
| wSOL → cbBTC | 1 | 1 | 100.0% |
| wSOL → EURC | 1 | 1 | 100.0% |
| wSOL → USDe | 1 | 1 | 100.0% |
| wSOL → USDY | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → JLP | 1 | 1 | 100.0% |
| wSOL → INF | 1 | 1 | 100.0% |
| wSOL → ETH | 1 | 1 | 100.0% |
| wSOL → BNB | 1 | 1 | 100.0% |
| wSOL → XAUt0 | 1 | 1 | 100.0% |
| wSOL → GLDx | 1 | 1 | 100.0% |
| wSOL → EUROP | 1 | 1 | 100.0% |
| wSOL → Fartcoin | 1 | 1 | 100.0% |
| wSOL → MEW | 1 | 1 | 100.0% |
| wSOL → BOME | 1 | 1 | 100.0% |
| wSOL → hyloSOL | 1 | 1 | 100.0% |
| wSOL → PSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 2 | 2 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 2 | 2 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 2 | 2 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 2 | 2 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 1 | 100.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 1 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
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
