# Solana QoS report: rosato-smoke-20261029-105125

Barn, orders created between `2026-10-29T10:51:35.358Z` and `2026-10-29T10:55:24.826Z`. Data fetched 2026-10-29T10:54:31+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 8 |
| Orders executed | **4** (50.0%) |
| Sponsored orders never created on-chain | 4 (50.0%) |
| Traders | 2 |
| Settlement txs | 4 |

## Scenario

2 of 6 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 10:51:35 | 1 | 1 | sell 0.01 SOL → USDC | failed | 37s | 1 | main expired |
| 10:51:35 | 2 | 2 | buy 2 JUP ← SOL | filled | 16s | 1 |  |
| 10:52:12 | 3 | 1 | buy 1 JUP ← USDC | failed | 46s | 1 | acquire USDC expired |
| 10:51:51 | 4 | 2 | sell 1 JUP → wSOL | failed | 33s | 1 | main expired |
| 10:52:58 | 5 | 1 | sell 0.5 JUP → SOL | filled | 60s | 2 |  |
| 10:52:24 | 6 | 2 | buy 1 USDT ← USDC | failed | 75s | 2 | main expired |

Scenario orders: 8 (5 main, 3 acquire). Cleanup placed 2 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 10:54:04 | 2 | USDC → SOL (native) | Executed | `0x8ae88e66…` [🐞](https://debug.barn.cow.fi/order/0x8ae88e66da4d4261e9bec544de8d2137f9cb3ba0bb623010c3783ed4f4044f1a) |
| 10:54:06 | 2 | JUP → SOL (native) | Executed | `0xf3fe659e…` [🐞](https://debug.barn.cow.fi/order/0xf3fe659edf3c9b7bca9782fafb2e2e0bbde0148ba9172606ec72e4db37520577) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| expired: never created on-chain (winner found, creation blockhash expired) | 4 | 50.0% |
| executed | 4 | 50.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 18s | 39s | 39s | 39s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| DNvt…HqL1 | 4 | 100.0% | 4 | 119,490 | 18s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| rosato | 6 | 6 | 6 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 35 times
- Orders filtered for `in_flight`: 3 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 6 | 3 | 50.0% |
| market buy | 2 | 1 | 50.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 3 | 1 | 33.3% |
| wSOL → JUP | 2 | 2 | 100.0% |
| JUP → wSOL | 1 | 0 | 0.0% |
| USDC → USDT | 1 | 0 | 0.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 4 | 2 | 50.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 4 | 2 | 50.0% |

## Why orders didn't execute

| Cause | Market | Limit |
|---|---|---|
| Winner too late: creation blockhash expired | 4 | 0 |

## Orders not executed

| Created (UTC) | Pair | Type | Cause | Order |
|---|---|---|---|---|
| 10:51:37 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x9a8929b4…` [🐞](https://debug.barn.cow.fi/order/0x9a8929b43f3c934a688adf704890a60e6c83dedeb87b66bb26bfd1ec3e306a82) |
| 10:51:52 | JUP → wSOL | market sell | Winner too late: creation blockhash expired | `0x70e00650…` [🐞](https://debug.barn.cow.fi/order/0x70e0065055c54707c089a8fe6c07bc0e73c34b57ba8556c3b23833fc79bead71) |
| 10:52:23 | wSOL → USDC | market sell | Winner too late: creation blockhash expired | `0x55276176…` [🐞](https://debug.barn.cow.fi/order/0x55276176c956bab61f1879f321bfb9b8efd295ee9dc4a90d1b6282625831d95a) |
| 10:53:07 | USDC → USDT | market buy | Winner too late: creation blockhash expired | `0xc62887a3…` [🐞](https://debug.barn.cow.fi/order/0xc62887a3e61977e42784dd72f9217de79b5d4bd72bbb76855eb5c3e5c4a9d83f) |
