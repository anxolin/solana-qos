# Solana QoS report: 2026-10-09-15-00-smoke

Prod, orders created between `2026-10-09T15:00:21.396Z` and `2026-10-09T15:02:11.756Z`. Data fetched 2026-10-09T15:01:56+00:00.

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
| 15:00:21 | 1 | 1 | sell 0.01 SOL → USDC | filled | 7s | 1 |  |
| 15:00:21 | 2 | 2 | buy 2 JUP ← SOL | filled | 20s | 1 |  |
| 15:00:28 | 3 | 1 | buy 1 JUP ← USDC | filled | 10s | 1 |  |
| 15:00:41 | 4 | 2 | sell 1 JUP → wSOL | filled | 7s | 1 |  |
| 15:00:38 | 5 | 1 | sell 0.5 JUP → SOL | filled | 5s | 1 |  |
| 15:00:49 | 6 | 2 | buy 1 USDT ← USDC | filled | 20s | 2 |  |

Scenario orders: 7 (6 main, 1 acquire). Cleanup placed 4 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 15:01:10 | 1 | JUP → SOL (native) | Executed | `0x6278e2ff…` [🐞](https://debug.cow.fi/order/0x6278e2ff0ec83cc5f91ecc94c19b2ddbbdcfe94c746fbaeab1731c9cd22875b7) |
| 15:01:10 | 1 | USDC → SOL (native) | Executed | `0xc72a27d1…` [🐞](https://debug.cow.fi/order/0xc72a27d14579208d52699c579e613d411739a979098f93c12003d6555cad4658) |
| 15:01:12 | 2 | JUP → SOL (native) | Executed | `0xfa28eb5c…` [🐞](https://debug.cow.fi/order/0xfa28eb5cea8b4d662b891f760272b03796b438895c0b3c55a84ff0128496d304) |
| 15:01:12 | 2 | USDT → SOL (native) | Executed | `0x1d17599d…` [🐞](https://debug.cow.fi/order/0x1d17599db4f412d0c25abc19dbff1e710f66af4073ecefdb6aad8ed9c2ae3273) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 7 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 4s | 6s | 18s | 18s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| 28da…jxyN | 7 | 100.0% | 7 | 137,159 | 4s |

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
| JUP → SOL (native) | 1 | 1 | 100.0% |
| JUP → wSOL | 1 | 1 | 100.0% |
| USDC → USDT | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 4 | 4 | 100.0% |
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 3 | 3 | 100.0% |
