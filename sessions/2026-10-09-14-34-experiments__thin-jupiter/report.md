# Solana QoS report: 2026-10-09-14-34-experiments__thin-jupiter

Barn, orders created between `2026-10-09T14:34:34.767Z` and `2026-10-09T14:37:00.350Z`. Data fetched 2026-10-09T14:36:37+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 16 |
| Orders executed | **5** (31.2%) |
| Sponsored orders never created on-chain | 11 (68.8%) |
| Traders | 9 |
| Settlement txs | 5 |

## Scenario

3 of 27 scenario rows completed. 0 retries, 12 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 14:34:34 | 1 | 1 | sell 0.005 SOL → EKtmPPLaCbEEKiwoHHtV7TsRsmPXs5CMGtQtZFSiinsc | failed | 46s | 1 | main expired |
| 14:35:20 | 2 | 1 | sell 1710 EKtmPPLaCbEEKiwoHHtV7TsRsmPXs5CMGtQtZFSiinsc → SOL | failed | 51s | 1 | acquire EKtmPPLaCbEEKiwoHHtV7TsRsmPXs5CMGtQtZFSiinsc expired |
| 14:34:35 | 3 | 2 | sell 0.005 SOL → NeonTjSjsuo3rexg9o6vHuMXw62f9V7zvmu8M8Zut44 | failed | 46s | 1 | main expired |
| 14:35:20 | 4 | 2 | sell 33.5 NeonTjSjsuo3rexg9o6vHuMXw62f9V7zvmu8M8Zut44 → SOL | failed | 48s | 1 | acquire NeonTjSjsuo3rexg9o6vHuMXw62f9V7zvmu8M8Zut44 expired |
| 14:34:35 | 5 | 3 | sell 0.005 SOL → GAwhcphCqCv5bKHmCiN4VDdNWfbXJL4npmkc8L3Q9S9H | failed | 46s | 1 | main expired |
| 14:35:20 | 6 | 3 | sell 4640 GAwhcphCqCv5bKHmCiN4VDdNWfbXJL4npmkc8L3Q9S9H → SOL | failed | 49s | 1 | acquire GAwhcphCqCv5bKHmCiN4VDdNWfbXJL4npmkc8L3Q9S9H expired |
| 14:34:35 | 7 | 4 | sell 0.005 SOL → AqoPZcUumKUBHrnfBsNtoNuneYEjoimaiWYq8GH8gpX9 | failed | 46s | 1 | main expired |
| 14:35:20 | 8 | 4 | sell 4120 AqoPZcUumKUBHrnfBsNtoNuneYEjoimaiWYq8GH8gpX9 → SOL | failed | 49s | 1 | acquire AqoPZcUumKUBHrnfBsNtoNuneYEjoimaiWYq8GH8gpX9 expired |
| 14:34:35 | 9 | 5 | sell 0.005 SOL → AyYNfPtftg2zDP4ZbgcoQMggQtwLh4zpfVVmUJs2thto | failed | 46s | 1 | main expired |
| 14:35:21 | 10 | 5 | sell 1690 AyYNfPtftg2zDP4ZbgcoQMggQtwLh4zpfVVmUJs2thto → SOL | failed | 7s | 0 | acquire AyYNfPtftg2zDP4ZbgcoQMggQtwLh4zpfVVmUJs2thto quote failed: 404 Not Found: NoLiquidity: no route found |
| 14:34:35 | 11 | 6 | sell 0.005 SOL → 241aTYhVXZ4WBVSFpfY37RqoCGBQ73KiRFAKvTtnmoon | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 14:34:36 | 12 | 6 | sell 15400 241aTYhVXZ4WBVSFpfY37RqoCGBQ73KiRFAKvTtnmoon → SOL | failed | 88s | 2 | main expired |
| 14:34:35 | 13 | 7 | sell 0.005 SOL → nDZknLvfFRp5rgUHdzTrQsmSY5NKzoavqdLjSHVpump | failed | 47s | 1 | main expired |
| 14:35:22 | 14 | 7 | sell 17700 nDZknLvfFRp5rgUHdzTrQsmSY5NKzoavqdLjSHVpump → SOL | failed | 7s | 0 | acquire nDZknLvfFRp5rgUHdzTrQsmSY5NKzoavqdLjSHVpump error: 404 Not Found: NoLiquidity: no route found |
| 14:34:35 | 15 | 8 | sell 0.005 SOL → 91ryaCo5yGpYZM3bs6GUPs97VWJQj7RozBmqPULgpump | filled | 25s | 1 |  |
| 14:35:00 | 16 | 8 | sell 13900 91ryaCo5yGpYZM3bs6GUPs97VWJQj7RozBmqPULgpump → SOL | filled | 10s | 1 |  |
| 14:34:35 | 17 | 9 | sell 0.005 SOL → 2AVjqmGbMqg7rSyHVv2deVdggsBgBtu1Bi69BUvE5WRv | failed | 2s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 14:34:37 | 18 | 9 | sell 3950 2AVjqmGbMqg7rSyHVv2deVdggsBgBtu1Bi69BUvE5WRv → SOL | filled | 51s | 2 |  |
| 14:36:11 | 19 | 1 | sell 0.005 SOL → 7tFbGa9wt4Q4yxNAdaDcTKahv4WPrJtXh6ty7gjWyKx3 | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 7tFbGa9wt4Q4yxNAdaDcTKahv4WPrJtXh6ty7gjWyKx3 is unsupported: Token-2022 transfer fee |
| 14:36:09 | 20 | 2 | sell 0.005 SOL → JE3HT7SbCgXDQWV6xp3oiiAisDzq4HyZ8wyEVBDCs45Z | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token JE3HT7SbCgXDQWV6xp3oiiAisDzq4HyZ8wyEVBDCs45Z is unsupported: Token-2022 transfer fee |
| 14:36:10 | 21 | 3 | sell 0.005 SOL → 3nqHijNUExsnjNBb15WJsJ2xisyMVGN6FK4aUgZk1Rwj | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 3nqHijNUExsnjNBb15WJsJ2xisyMVGN6FK4aUgZk1Rwj is unsupported: Token-2022 transfer fee |
| 14:36:10 | 22 | 4 | sell 0.005 SOL → HunmXDXMNQYVoDnUL6PNnSYEtFaTZA2WzGh1HJTW7aoV | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token HunmXDXMNQYVoDnUL6PNnSYEtFaTZA2WzGh1HJTW7aoV is unsupported: Token-2022 transfer fee |
| 14:35:28 | 23 | 5 | sell 0.005 SOL → 6JrR1iqPdinYTNvNPWTR2P7e2wSJ1rwdsrKGyhnzjUVr | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 6JrR1iqPdinYTNvNPWTR2P7e2wSJ1rwdsrKGyhnzjUVr is unsupported: Token-2022 transfer fee |
| 14:36:05 | 24 | 6 | sell 0.005 SOL → Gt9brNVXP7gdGtUqZLcJAhbZTjLEcKrA53F18fRSEeAp | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token Gt9brNVXP7gdGtUqZLcJAhbZTjLEcKrA53F18fRSEeAp is unsupported: Token-2022 transfer fee |
| 14:35:29 | 25 | 7 | sell 0.005 SOL → BLLieANeMifThH5gBeKRaNixYJPkf7fuM13VZfJ5STNK | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token BLLieANeMifThH5gBeKRaNixYJPkf7fuM13VZfJ5STNK is unsupported: Token-2022 transfer fee |
| 14:35:10 | 26 | 8 | sell 0.005 SOL → 7LxC96Ag4DnBotK6bMMUj4kdneAo1kdV1xHnzVF5s7W2 | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 7LxC96Ag4DnBotK6bMMUj4kdneAo1kdV1xHnzVF5s7W2 is unsupported: Token-2022 transfer fee |
| 14:35:29 | 27 | 9 | sell 0.005 SOL → 2pouN3by7twkiZGy5aEKYUpf78ALDpKRTNu2WsQkpkqt | failed | 0s | 0 | main error: 400 Bad Request: UnsupportedToken: Token 2pouN3by7twkiZGy5aEKYUpf78ALDpKRTNu2WsQkpkqt is unsupported: Token-2022 transfer fee |

### Rows without an order

13 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| UnsupportedToken | main | 9 | SOL → JubJub, SOL → PENIS, SOL → TACZ, SOL → LOOP, SOL → wifout, SOL → ㅤ, SOL → XBT, SOL → ROCK, SOL → BUTT | Token 7tFbGa9wt4Q4yxNAdaDcTKahv4WPrJtXh6ty7gjWyKx3 is unsupported: Token-2022 transfer fee |
| NoLiquidity | acquire | 2 | SOL → Tilcayo, SOL → COLLECT | no route found |
| NoLiquidity | main | 2 | SOL → MCAT, SOL → SPEC | no route found |

Scenario orders: 16 (10 main, 6 acquire). Cleanup placed 1 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 14:36:18 | 6 | MCAT → SOL (native) | Executed | `0xbb51ae1c…` [🐞](https://debug.barn.cow.fi/order/0xbb51ae1ccf0d21bc55593fc7be0ad0792fe0ce19dd88b073bef1d48dc4cd35fe) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 11 | 68.8% |
| executed | 5 | 31.2% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 20s | 39s | 39s | 39s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 5 | 100.0% | 5 | 101,589 | 20s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 7 | 7 | 6 | 85.7% | 0 | 0 | 1 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 1
- Orders filtered for `unfunded_sell_token_account`: 23 times
- Orders filtered for `unreceivable_buy_token_account`: 23 times
- Orders filtered for `in_flight`: 3 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 16 | 5 | 31.2% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → Stamp | 2 | 0 | 0.0% |
| wSOL → NEON | 2 | 0 | 0.0% |
| wSOL → www | 2 | 0 | 0.0% |
| wSOL → STONK10 | 2 | 0 | 0.0% |
| wSOL → Tilcayo | 1 | 0 | 0.0% |
| wSOL → TIGRINO | 1 | 1 | 100.0% |
| wSOL → COLLECT | 1 | 0 | 0.0% |
| wSOL → MCAT | 1 | 1 | 100.0% |
| wSOL → SPEC | 1 | 1 | 100.0% |
| TIGRINO → SOL (native) | 1 | 1 | 100.0% |
| MCAT → SOL (native) | 1 | 0 | 0.0% |
| SPEC → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 2 | 0 | 0.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 2 | 0 | 0.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 2 | 0 | 0.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 2 | 0 | 0.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 2 | 2 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 2 | 1 | 50.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 2 | 2 | 100.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 1 | 0 | 0.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 11 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 14:34:36 | wSOL → Stamp | sell | Winner too late: creation blockhash expired | `0x363b4b8d…` [🐞](https://debug.barn.cow.fi/order/0x363b4b8df599b0cfab7e891cac3309246885e0a9fb68452a1067606ab3908efe) |
| 14:34:36 | wSOL → NEON | sell | Winner too late: creation blockhash expired | `0x185d0375…` [🐞](https://debug.barn.cow.fi/order/0x185d0375725c17e19a24c27e415ffb2df2fb7a43c39dca88b3cd8edbcb6bd980) |
| 14:34:36 | wSOL → www | sell | Winner too late: creation blockhash expired | `0x4c0b98a5…` [🐞](https://debug.barn.cow.fi/order/0x4c0b98a597c887c7ac76f78fce5aa7fd0e413cdb3cfda13430267dc3d823306b) |
| 14:34:37 | wSOL → STONK10 | sell | Winner too late: creation blockhash expired | `0x53e3e063…` [🐞](https://debug.barn.cow.fi/order/0x53e3e0637758d9d936629332418e516f8b5e1a9dd47737f740a05270e47cb4d4) |
| 14:34:37 | wSOL → Tilcayo | sell | Winner too late: creation blockhash expired | `0x205a377c…` [🐞](https://debug.barn.cow.fi/order/0x205a377ce8a482c9dacf7c47c606ce91795818bc7c0b0e102562a64420962374) |
| 14:34:38 | wSOL → COLLECT | sell | Winner too late: creation blockhash expired | `0x55d63223…` [🐞](https://debug.barn.cow.fi/order/0x55d63223cab931d8589b54492b386f09a6a6c1fbda5e6c806c885b484682d654) |
| 14:35:24 | MCAT → SOL (native) | sell | Winner too late: creation blockhash expired | `0xa6e4d4f1…` [🐞](https://debug.barn.cow.fi/order/0xa6e4d4f11055a5739987a32d81eefa61b5d081d7665a64c346cf9892af8e46a9) |
| 14:35:27 | wSOL → Stamp | sell | Winner too late: creation blockhash expired | `0x7f29456e…` [🐞](https://debug.barn.cow.fi/order/0x7f29456e16d05f9ccb5eb73c12458f6bfb2fd4e8e597acb2e27e3107540f0a6d) |
| 14:35:28 | wSOL → NEON | sell | Winner too late: creation blockhash expired | `0x62905602…` [🐞](https://debug.barn.cow.fi/order/0x6290560244399465d0c4f8cba2f1291829d6fa5803db7bef0cb92e2f14c8fab4) |
| 14:35:29 | wSOL → www | sell | Winner too late: creation blockhash expired | `0x33e0845b…` [🐞](https://debug.barn.cow.fi/order/0x33e0845b3dd503e867c9ee01ddc4f660fb3f8343d37211ace36d17009f09b079) |
| 14:35:29 | wSOL → STONK10 | sell | Winner too late: creation blockhash expired | `0xceea8cf2…` [🐞](https://debug.barn.cow.fi/order/0xceea8cf27ec41b9bb4f70c867c7199b2246028191015590adec225404e0372c0) |
