# Solana QoS report: 2026-10-09-16-54-smoke

Prod, orders created between `2026-10-09T16:55:06.802Z` and `2026-10-09T16:56:46.066Z`. Data fetched 2026-10-09T16:56:37+00:00.

> ⚠ Log data wasn't fetched for this session, so failure causes are generic and the competition and rate-limit sections are missing. Set GRAFANA_URL, GRAFANA_API_TOKEN and GRAFANA_DATASOURCE_UID (or create solana-qos/.env.<env>) and run ./qos.py logs.

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
| 16:55:06 | 1 | 1 | sell 0.01 SOL → USDC | filled | 7s | 1 |  |
| 16:55:07 | 2 | 2 | buy 2 JUP ← SOL | filled | 7s | 1 |  |
| 16:55:13 | 3 | 1 | buy 1 JUP ← USDC | filled | 10s | 1 |  |
| 16:55:14 | 4 | 2 | sell 1 JUP → wSOL | filled | 16s | 1 |  |
| 16:55:23 | 5 | 1 | sell 0.5 JUP → SOL | filled | 11s | 1 |  |
| 16:55:30 | 6 | 2 | buy 1 USDT ← USDC | filled | 21s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 6 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 16:55:57 | 1 | 2Z → SOL (native) | Executed | `0x9deb1292…` [🐞](https://debug.cow.fi/order/0x9deb12927b74f09de7dc3f853e661198061a7a24d3014f0a9bfe67f3566884c2) |
| 16:55:57 | 1 | JUP → SOL (native) | Executed | `0xfe6c6937…` [🐞](https://debug.cow.fi/order/0xfe6c6937772c94ca3fdfcf587145cdaced6cff7acc8c4a26401e003c4617e518) |
| 16:55:57 | 1 | USDC → SOL (native) | Executed | `0xf0927a9e…` [🐞](https://debug.cow.fi/order/0xf0927a9ed587ad9ca9084dcb1b998c3bf3cabb211c4dce6cdd3d812137d9c279) |
| 16:55:58 | 2 | JUP → SOL (native) | Executed | `0x7fc6ac14…` [🐞](https://debug.cow.fi/order/0x7fc6ac14d6f03e4003189ccdccc5539b7f8b3203e7c78e3e767beb65edc275c2) |
| 16:55:58 | 2 | USDT → SOL (native) | Executed | `0x4a21178d…` [🐞](https://debug.cow.fi/order/0x4a21178d99a1df72192d697da42db5c4f47cdce0cd8bc5816757a73bba764380) |
| 16:55:58 | 2 | ZERO → SOL (native) | Executed | `0xc8ecc183…` [🐞](https://debug.cow.fi/order/0xc8ecc1838e81f02fd5ee77718d7b6d3a48863085262ddfcdf5d95c2827a8fd59) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 6s | 7s | 14s | 14s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 7 | 100.0% | 7 | 86,113 | 6s |

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 4 | 4 | 100.0% |
| buy | 3 | 3 | 100.0% |

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
