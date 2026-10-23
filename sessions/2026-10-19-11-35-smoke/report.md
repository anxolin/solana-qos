# Solana QoS report: 2026-10-19-11-35-smoke

Prod, orders created between `2026-10-19T11:35:38.794Z` and `2026-10-19T11:37:15.791Z`. Data fetched 2026-10-19T11:36:24+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 7 |
| Orders executed | **7** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 7 |

## Scenario

6 of 6 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:35:38 | 1 | 1 | sell 0.01 SOL → USDC | filled | 7s | 1 |  |
| 11:35:38 | 2 | 2 | buy 2 JUP ← SOL | filled | 7s | 1 |  |
| 11:35:45 | 3 | 1 | buy 1 JUP ← USDC | filled | 4s | 1 |  |
| 11:35:46 | 4 | 2 | sell 1 JUP → wSOL | filled | 3s | 1 |  |
| 11:35:49 | 5 | 1 | sell 0.5 JUP → SOL | filled | 5s | 1 |  |
| 11:35:49 | 6 | 2 | buy 1 USDT ← USDC | filled | 14s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 3 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:36:05 | 1 | USDC → SOL (native) | Executed | `0x4d4c0380…` [🐞](https://debug.cow.fi/order/0x4d4c0380be770f5b37d5d041bd71510b2f5982f0bacd3e523a9399280d8b322c) |
| 11:36:06 | 2 | JUP → SOL (native) | Executed | `0x124ba4ed…` [🐞](https://debug.cow.fi/order/0x124ba4edfa17fad60816aca3ada384f9bc2e00d26e7d9296d5e1a90e70166c82) |
| 11:36:06 | 2 | USDT → SOL (native) | Executed | `0xcde67cd0…` [🐞](https://debug.cow.fi/order/0xcde67cd041f94de55140d631699a99c71ff743f6af9c5be4ff7875ee9d5b1e19) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 1s | 2s | 3s | 3s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 7 | 100.0% | 7 | 116,896 | 1s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 10 | 10 | 10 | 100.0% | 0 | 0 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 8 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0x8edb72fc822ff168ce66d6c4ade61567503f644242a62de5b35fbf6ea5560349`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 4 | 4 | 100.0% |
| market buy | 3 | 3 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 2 | 2 | 100.0% |
| wSOL → JUP | 1 | 1 | 100.0% |
| USDC → JUP | 1 | 1 | 100.0% |
| JUP → wSOL | 1 | 1 | 100.0% |
| JUP → SOL (native) | 1 | 1 | 100.0% |
| USDC → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 4 | 4 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 3 | 3 | 100.0% |
