# Solana QoS report: 2026-10-06-11-38-all

Barn, orders created between `2026-10-06T11:38:26.635Z` and `2026-10-06T11:48:20.067Z`. Data fetched 2026-10-06T11:48:38+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 19 |
| Orders executed | **16** (84.2%) |
| Sponsored orders never created on-chain | 3 (15.8%) |
| Traders | 12 |
| Settlement txs | 16 |

## Scenario

16 of 23 scenario rows completed. 0 retries, 3 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:38:27 | 1 | 1 | sell 0.02 SOL → CATE | filled | 9s | 1 |  |
| 11:38:36 | 2 | 1 | sell 22.1 CATE → SOL | filled | 57s | 1 |  |
| 11:38:27 | 3 | 2 | sell 0.02 SOL → USDu | filled | 9s | 1 |  |
| 11:38:36 | 4 | 2 | sell 1.43 USDu → SOL | filled | 11s | 1 |  |
| 11:38:27 | 5 | 3 | sell 0.02 SOL → ANSEM | filled | 18s | 1 |  |
| 11:38:45 | 6 | 3 | sell 9.3 ANSEM → SOL | filled | 6s | 1 |  |
| 11:38:27 | 7 | 4 | sell 0.02 SOL → jlUSDG | failed | 45s | 1 | main expired |
| 11:39:12 | 8 | 4 | sell 1.33 jlUSDG → SOL | failed | 0s | 0 | acquire jlUSDG error: Not Found |
| 11:38:27 | 9 | 5 | sell 0.02 SOL → sUSD.infra | failed | 45s | 1 | main expired |
| 11:39:12 | 10 | 5 | sell 1.43 sUSD.infra → SOL | failed | 0s | 0 | acquire sUSD.infra error: Not Found |
| 11:38:27 | 11 | 6 | sell 0.02 SOL → ZARP | filled | 57s | 1 |  |
| 11:39:23 | 12 | 6 | sell 23.9 ZARP → SOL | filled | 4s | 1 |  |
| 11:38:27 | 13 | 7 | sell 0.02 SOL → SILV | filled | 9s | 1 |  |
| 11:38:36 | 14 | 7 | sell 0.497 SILV → SOL | filled | 11s | 1 |  |
| 11:38:27 | 15 | 8 | sell 0.02 SOL → sUSDu | failed | 45s | 1 | main expired |
| 11:39:12 | 16 | 8 | sell 1.23 sUSDu → SOL | failed | 0s | 0 | acquire sUSDu error: Not Found |
| 11:38:27 | 17 | 9 | sell 0.02 SOL → USDM1 | filled | 57s | 1 |  |
| 11:39:24 | 18 | 9 | sell 1.4 USDM1 → SOL | filled | 4s | 1 |  |
| 11:38:27 | 19 | 10 | sell 0.02 SOL → USDu | filled | 20s | 1 |  |
| 11:38:48 | 20 | 10 | sell 1.43 USDu → CATE | filled | 16s | 1 |  |
| 11:38:27 | 21 | 11 | buy 29.5 CATE ← SOL | failed | 1s | 0 | quote failed: Not Found |
| 11:38:27 | 22 | 12 | sell 0.01 SOL → PYUSD | filled | 21s | 1 |  |
| 11:38:27 | 23 | 13 | sell 0.01 SOL → USDG | filled | 20s | 1 |  |

Scenario orders: 19 (19 main, 0 acquire). Cleanup placed 11 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:39:35 | 1 | CATE → SOL (native) | Executed | `0xaf98d3d4…` [🐞](https://debug.barn.cow.fi/order/0xaf98d3d4fc1510a7d737d65d66ba9ae0553ae85ca818fb60d2e6c49068a6293f) |
| 11:39:36 | 2 | USDu → SOL (native) | Executed | `0x3ca7ac2e…` [🐞](https://debug.barn.cow.fi/order/0x3ca7ac2e8a0c626bfc3c39c956e98e843a23416cadd23a37a9eeecadd04dddbd) |
| 11:39:37 | 3 | ANSEM → SOL (native) | Executed | `0x17dae3ea…` [🐞](https://debug.barn.cow.fi/order/0x17dae3eaf95f7bf3893f21908bfa2f201d0c042f5c5efe828d35dc12f1275b9f) |
| 11:40:42 | 6 | ZARP → SOL (native) | Executed | `0x742b9187…` [🐞](https://debug.barn.cow.fi/order/0x742b9187d5ba84a1d982ba7d0b1a41edb321d0d4ecf54c708b6305c95b55a2e7) |
| 11:41:28 | 7 | SILV → SOL (native) | Executed | `0x0a6c73b5…` [🐞](https://debug.barn.cow.fi/order/0x0a6c73b54e60a150e7f701c52a2e2fea4a0fd4d00bfe69bbb1074c44b100f5b6) |
| 11:42:33 | 9 | USDM1 → SOL (native) | Executed | `0x8e8be8f0…` [🐞](https://debug.barn.cow.fi/order/0x8e8be8f0dd8217f8de7b04f19cb0286fb7ec47a99d1cf6c9c079f0dd4b1c01ba) |
| 11:43:47 | 10 | USDu → SOL (native) | Executed | `0x2a2145ae…` [🐞](https://debug.barn.cow.fi/order/0x2a2145ae304fe7d1a05941aad7b8e335d78bdca5142e6fe9676038725d1c10e7) |
| 11:43:52 | 10 | CATE → SOL (native) | Executed | `0x631f74a5…` [🐞](https://debug.barn.cow.fi/order/0x631f74a53e4ec14f04524f32445734084c5aaa337f12433c5781983d3f42343d) |
| 11:44:22 | 12 | mSOL → SOL (native) | Executed | `0x3c04476a…` [🐞](https://debug.barn.cow.fi/order/0x3c04476aa7ef362476d2e5fa1f0a0274f938190d3b4c5ff41de283961c047b9b) |
| 11:44:29 | 12 | PYUSD → SOL (native) | Executed | `0xda31e1ae…` [🐞](https://debug.barn.cow.fi/order/0xda31e1ae6d16cd0a022833b72b134d8b5c6142454b9687bcc665eca4d0f6a2f2) |
| 11:45:17 | 13 | USDG → SOL (native) | Executed | `0x01ca62ca…` [🐞](https://debug.barn.cow.fi/order/0x01ca62ca2030da1abb78bd6ce79c975f018a018e86930c8a009c7522cba39cba) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 16 | 84.2% |
| expired: never created on-chain (winner found, creation blockhash expired) | 3 | 15.8% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 7s | 12s | 51s | 53s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| jupiter-solve | 16 | 100.0% | 16 | 146,481 | 7s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 65 | 41 | 33 | 80.5% | 3 | 10 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| jupiter-solve: SimulationFailed | 3 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 113 times
- Orders filtered for `in_flight`: 27 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 19 | 16 | 84.2% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDu | 2 | 2 | 100.0% |
| wSOL → CATE | 1 | 1 | 100.0% |
| wSOL → ZARP | 1 | 1 | 100.0% |
| wSOL → SILV | 1 | 1 | 100.0% |
| wSOL → USDM1 | 1 | 1 | 100.0% |
| wSOL → sUSDu | 1 | 0 | 0.0% |
| wSOL → sUSD.infra | 1 | 0 | 0.0% |
| wSOL → jlUSDG | 1 | 0 | 0.0% |
| CATE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| USDu → SOL (native) | 1 | 1 | 100.0% |
| wSOL → USDG | 1 | 1 | 100.0% |
| SILV → SOL (native) | 1 | 1 | 100.0% |
| wSOL → PYUSD | 1 | 1 | 100.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |
| USDu → CATE | 1 | 1 | 100.0% |
| ZARP → SOL (native) | 1 | 1 | 100.0% |
| USDM1 → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 2 | 2 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 2 | 2 | 100.0% |
| `7RqUGHCV2tngEBctNc8o58nPDy6AsYzsUHAW2JgA2XX9` | 2 | 2 | 100.0% |
| `FjcXArDzUrBTJ1Lv6Yc8n9atjkNYaxKosVjn6VSxZTrK` | 2 | 2 | 100.0% |
| `HTsxGEXBSe8rdUJjtW7e4v4YChNXTVmLQXuqBvvQtJuF` | 2 | 2 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 2 | 2 | 100.0% |
| `GcY8jk3HeHLDmdPa8wRVnHkn8f77frWdZxRWr6rrdyus` | 2 | 2 | 100.0% |
| `BPmy52DKPodqoSUirZUBedULujAZr6s778i4hc153r1X` | 1 | 0 | 0.0% |
| `AM6Qwi3vwMCGpRbJ55zDatByeAtsbcfXvXBh77be8C9T` | 1 | 0 | 0.0% |
| `3FHY6qZALHavE387YcUMyqFYdYCiR5PbLSxdQBpwR6JK` | 1 | 0 | 0.0% |
| `CDY1rvEes25vx7DZwxp5BRSgAewDQMgwBExfAMEymdMC` | 1 | 1 | 100.0% |
| `AQHstwk1uwAEnz8JE41HEbbD1EaPBjBwtid2qbo1Q3KD` | 1 | 1 | 100.0% |

## Why orders didn't execute

| Cause | Orders |
|---|---|
| Winner too late: creation blockhash expired | 3 |

## Orders not executed

| Created (UTC) | Pair | Kind | Cause | Order |
|---|---|---|---|---|
| 11:38:30 | wSOL → sUSDu | sell | Winner too late: creation blockhash expired | `0xd2078428…` [🐞](https://debug.barn.cow.fi/order/0xd20784285a9e7a58bde785b803caa50218501edfde61cac0f7273fd8206fbc1f) |
| 11:38:30 | wSOL → sUSD.infra | sell | Winner too late: creation blockhash expired | `0xa7b077dd…` [🐞](https://debug.barn.cow.fi/order/0xa7b077dd5a47dee1ed4ab9b541bc3a9366bcb64da3ec6f417853fa0e7624f2b1) |
| 11:38:31 | wSOL → jlUSDG | sell | Winner too late: creation blockhash expired | `0x510ea616…` [🐞](https://debug.barn.cow.fi/order/0x510ea61681e4a5a12e1bd56a75e8c0605fb0f5bae5ade8eb78d723639db6d2bd) |
