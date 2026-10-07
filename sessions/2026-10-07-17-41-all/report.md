# Solana QoS report: 2026-10-07-17-41-all

Barn, orders created between `2026-10-07T17:41:23.477Z` and `2026-10-07T17:45:29.353Z`. Data fetched 2026-10-07T17:45:05+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 16 |
| Orders executed | **4** (25.0%) |
| Sponsored orders never created on-chain | 12 (75.0%) |
| Traders | 12 |
| Settlement txs | 4 |

## Scenario

4 of 23 scenario rows completed. 0 retries, 7 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 17:41:23 | 1 | 1 | sell 0.02 SOL → CATE | failed | 47s | 1 | main expired |
| 17:42:10 | 2 | 1 | sell 22.1 CATE → SOL | failed | 45s | 1 | acquire CATE expired |
| 17:41:23 | 3 | 2 | sell 0.02 SOL → USDu | failed | 47s | 1 | main expired |
| 17:42:10 | 4 | 2 | sell 1.43 USDu → SOL | failed | 46s | 1 | acquire USDu expired |
| 17:41:23 | 5 | 3 | sell 0.02 SOL → ANSEM | filled | 24s | 1 |  |
| 17:41:47 | 6 | 3 | sell 9.3 ANSEM → SOL | filled | 26s | 1 |  |
| 17:41:23 | 7 | 4 | sell 0.02 SOL → jlUSDG | failed | 49s | 1 | main expired |
| 17:42:12 | 8 | 4 | sell 1.33 jlUSDG → SOL | failed | 4s | 0 | acquire jlUSDG error: 404 Not Found: NoLiquidity: no route found |
| 17:41:23 | 9 | 5 | sell 0.02 SOL → sUSD.infra | failed | 51s | 1 | main expired |
| 17:42:14 | 10 | 5 | sell 1.43 sUSD.infra → SOL | failed | 4s | 0 | acquire sUSD.infra error: 404 Not Found: NoLiquidity: no route found |
| 17:41:24 | 11 | 6 | sell 0.02 SOL → ZARP | filled | 22s | 1 |  |
| 17:41:46 | 12 | 6 | sell 23.9 ZARP → SOL | failed | 45s | 1 | main expired |
| 17:41:24 | 13 | 7 | sell 0.02 SOL → SILV | failed | 6s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 17:41:30 | 14 | 7 | sell 0.497 SILV → SOL | failed | 4s | 0 | acquire SILV error: 404 Not Found: NoLiquidity: no route found |
| 17:41:24 | 15 | 8 | sell 0.02 SOL → sUSDu | failed | 51s | 1 | main expired |
| 17:42:15 | 16 | 8 | sell 1.23 sUSDu → SOL | failed | 5s | 0 | acquire sUSDu error: 404 Not Found: NoLiquidity: no route found |
| 17:41:24 | 17 | 9 | sell 0.02 SOL → USDM1 | failed | 51s | 1 | main expired |
| 17:42:15 | 18 | 9 | sell 1.4 USDM1 → SOL | failed | 4s | 0 | acquire USDM1 error: 404 Not Found: NoLiquidity: no route found |
| 17:41:24 | 19 | 10 | sell 0.02 SOL → USDu | failed | 48s | 1 | main expired |
| 17:42:12 | 20 | 10 | sell 1.43 USDu → CATE | failed | 4s | 0 | acquire USDu error: 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one |
| 17:41:24 | 21 | 11 | buy 29.5 CATE ← SOL | failed | 53s | 1 | main expired |
| 17:41:24 | 22 | 12 | sell 0.01 SOL → PYUSD | filled | 23s | 1 |  |
| 17:41:24 | 23 | 13 | sell 0.01 SOL → USDG | failed | 51s | 1 | main expired |

Scenario orders: 16 (14 main, 2 acquire). Cleanup placed 3 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 17:43:11 | 3 | ANSEM → SOL (native) | Executed | `0x04849326…` [🐞](https://debug.barn.cow.fi/order/0x04849326ba56cc2138399ad8f17cfc71069795e3d31d6a7f3675eb78f99b4a10) |
| 17:44:35 | 6 | ZARP → SOL (native) | Executed | `0x974b4d1d…` [🐞](https://debug.barn.cow.fi/order/0x974b4d1d7456eaebf85e7a6001ef5ed27099a2a917650ef4da892303d3a03850) |
| 17:44:43 | 12 | PYUSD → SOL (native) | Executed | `0x4f8192ab…` [🐞](https://debug.barn.cow.fi/order/0x4f8192abbec6ce487af9e37c06c6f8fa66f203116b5b10e341526d2e7256610b) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 12 | 75.0% |
| executed | 4 | 25.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 13s | 18s | 18s | 18s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 4 | 100.0% | 4 | 162,344 | 13s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 16 | 12 | 7 | 58.3% | 4 | 2 | 0 | 0 |
| rosato | 0 | 0 | 0 | – | 0 | 0 | 1 | 0 |
| horadrim | 0 | 0 | 0 | – | 0 | 0 | 17 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 4 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 40 times
- Orders filtered for `unreceivable_buy_token_account`: 40 times
- Orders filtered for `in_flight`: 14 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 13 | 4 | 30.8% |
| buy | 3 | 0 | 0.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDu | 3 | 0 | 0.0% |
| wSOL → CATE | 3 | 0 | 0.0% |
| wSOL → jlUSDG | 1 | 0 | 0.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| wSOL → ZARP | 1 | 1 | 100.0% |
| wSOL → sUSD.infra | 1 | 0 | 0.0% |
| wSOL → sUSDu | 1 | 0 | 0.0% |
| wSOL → USDG | 1 | 0 | 0.0% |
| wSOL → USDM1 | 1 | 0 | 0.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| ZARP → SOL (native) | 1 | 0 | 0.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 2 | 0 | 0.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 2 | 0 | 0.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 2 | 2 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 2 | 1 | 50.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 1 | 0 | 0.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 1 | 0 | 0.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 1 | 0 | 0.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 1 | 0 | 0.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 1 | 0 | 0.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 1 | 1 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 1 | 0 | 0.0% |
| `CaMSDEBp5zy2QxSYqDxqbk28qxFwzLXiNdFJiv9TKqhU` | 1 | 0 | 0.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 12 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 17:41:29 | wSOL → jlUSDG | sell | Winner too late: creation blockhash expired | `0x00f32ac2…` [🐞](https://debug.barn.cow.fi/order/0x00f32ac2be8421c95bcc743a6cf0ef386a4e1967138e3945e5b898fc49aa2f00) |
| 17:41:29 | wSOL → USDu | sell | Winner too late: creation blockhash expired | `0xbfc12da9…` [🐞](https://debug.barn.cow.fi/order/0xbfc12da9b2c73c1fb4c02825f76e92802ed00e58b2da1b1c5bd220b67dc496d2) |
| 17:41:29 | wSOL → CATE | sell | Winner too late: creation blockhash expired | `0x4896def8…` [🐞](https://debug.barn.cow.fi/order/0x4896def8ed2278d54ccb0eea6bca0f27281f587ff0b25b2c404606d0cd85782f) |
| 17:41:30 | wSOL → sUSD.infra | sell | Winner too late: creation blockhash expired | `0xf0ec80e2…` [🐞](https://debug.barn.cow.fi/order/0xf0ec80e2cc1dea30f482541c39328852c5f634db1c38699ff142d7108ea75dd9) |
| 17:41:30 | wSOL → sUSDu | sell | Winner too late: creation blockhash expired | `0x9f8a2294…` [🐞](https://debug.barn.cow.fi/order/0x9f8a2294b3a0bc24336f0d35a3bb2b28fbcbae2140b454ae677e25e204873257) |
| 17:41:31 | wSOL → USDG | sell | Winner too late: creation blockhash expired | `0x4f62d668…` [🐞](https://debug.barn.cow.fi/order/0x4f62d66871b42c4509a3279617ad2c2a76d3a6ed82c4b062df3905c2acd47e5b) |
| 17:41:31 | wSOL → USDM1 | sell | Winner too late: creation blockhash expired | `0x9e770b61…` [🐞](https://debug.barn.cow.fi/order/0x9e770b6130311363b8bbdb4e517715b1259cf716562d8849b2e2b8db74ba37cf) |
| 17:41:31 | wSOL → USDu | sell | Winner too late: creation blockhash expired | `0xddc8a2fa…` [🐞](https://debug.barn.cow.fi/order/0xddc8a2fa8986bce18fd0a3000e4350583e3ac293351e43ee1135d5d048887654) |
| 17:41:33 | wSOL → CATE | buy | Winner too late: creation blockhash expired | `0xb34703af…` [🐞](https://debug.barn.cow.fi/order/0xb34703af55cdd8c22027803eea96698d852af16e15c3d524b41f17e35b6dafb6) |
| 17:41:50 | ZARP → SOL (native) | sell | Winner too late: creation blockhash expired | `0x39b3934b…` [🐞](https://debug.barn.cow.fi/order/0x39b3934b98368bc00a65931a1fbf57679be06990cd87c982f6d7a27da57c0d80) |
| 17:42:14 | wSOL → CATE | buy | Winner too late: creation blockhash expired | `0x75c4add9…` [🐞](https://debug.barn.cow.fi/order/0x75c4add9bcd0a207ccc7f5017092f3ff2f1e251ba2237b3d931145d338eb2c79) |
| 17:42:15 | wSOL → USDu | buy | Winner too late: creation blockhash expired | `0x3721ae33…` [🐞](https://debug.barn.cow.fi/order/0x3721ae339e37f477081f8e0c596d94e48edee3404fe1bf461a5e1fec553d7ac4) |
