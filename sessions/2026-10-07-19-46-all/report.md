# Solana QoS report: 2026-10-07-19-46-all

Barn, orders created between `2026-10-07T19:46:45.800Z` and `2026-10-07T19:50:00.252Z`. Data fetched 2026-10-07T19:49:35+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 4 |
| Orders executed | **4** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 2 |
| Settlement txs | 4 |

## Scenario

4 of 23 scenario rows completed. 0 retries, 18 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 19:46:45 | 1 | 1 | sell 0.02 SOL → CATE | filled | 18s | 1 |  |
| 19:47:04 | 2 | 1 | sell 22.1 CATE → SOL | filled | 4s | 1 |  |
| 19:46:46 | 3 | 2 | sell 0.02 SOL → USDu | failed | 20s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:47:05 | 4 | 2 | sell 1.43 USDu → SOL | failed | 0s | 0 | acquire USDu error: 404 Not Found: NoLiquidity: no route found |
| 19:46:46 | 5 | 3 | sell 0.02 SOL → ANSEM | filled | 26s | 1 |  |
| 19:47:12 | 6 | 3 | sell 9.3 ANSEM → SOL | filled | 5s | 1 |  |
| 19:46:46 | 7 | 4 | sell 0.02 SOL → jlUSDG | failed | 17s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:47:02 | 8 | 4 | sell 1.33 jlUSDG → SOL | failed | 0s | 0 | acquire jlUSDG error: 404 Not Found: NoLiquidity: no route found |
| 19:46:46 | 9 | 5 | sell 0.02 SOL → sUSD.infra | failed | 21s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:47:07 | 10 | 5 | sell 1.43 sUSD.infra → SOL | failed | 0s | 0 | acquire sUSD.infra error: 404 Not Found: NoLiquidity: no route found |
| 19:46:46 | 11 | 6 | sell 0.02 SOL → ZARP | failed | 19s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:47:05 | 12 | 6 | sell 23.9 ZARP → SOL | failed | 0s | 0 | acquire ZARP error: 404 Not Found: NoLiquidity: no route found |
| 19:46:46 | 13 | 7 | sell 0.02 SOL → SILV | failed | 1s | 0 | main error: 404 Not Found: NoLiquidity: no route found |
| 19:46:47 | 14 | 7 | sell 0.497 SILV → SOL | failed | 1s | 0 | acquire SILV error: 404 Not Found: NoLiquidity: no route found |
| 19:46:46 | 15 | 8 | sell 0.02 SOL → sUSDu | failed | 15s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:47:01 | 16 | 8 | sell 1.23 sUSDu → SOL | failed | 0s | 0 | acquire sUSDu error: 404 Not Found: NoLiquidity: no route found |
| 19:46:46 | 17 | 9 | sell 0.02 SOL → USDM1 | failed | 19s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:47:05 | 18 | 9 | sell 1.4 USDM1 → SOL | failed | 0s | 0 | acquire USDM1 error: 404 Not Found: NoLiquidity: no route found |
| 19:46:46 | 19 | 10 | sell 0.02 SOL → USDu | failed | 21s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:47:07 | 20 | 10 | sell 1.43 USDu → CATE | failed | 0s | 0 | acquire USDu error: 404 Not Found: NoLiquidity: no route found |
| 19:46:46 | 21 | 11 | buy 29.5 CATE ← SOL | failed | 0s | 0 | quote failed: Not Found |
| 19:46:46 | 22 | 12 | sell 0.01 SOL → PYUSD | failed | 23s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:46:47 | 23 | 13 | sell 0.01 SOL → USDG | failed | 16s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |

Scenario orders: 4 (4 main, 0 acquire). Cleanup placed 2 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 19:47:19 | 1 | CATE → SOL (native) | Executed | `0x8fe85b07…` [🐞](https://debug.barn.cow.fi/order/0x8fe85b075ad7af89fb7d7c00a58dc6f43911f5caa11eec53d993f9c84a95ea58) |
| 19:47:27 | 3 | ANSEM → SOL (native) | Executed | `0xf2f2ae11…` [🐞](https://debug.barn.cow.fi/order/0xf2f2ae11d3c03b3bdf037ff17f44b7922dfb7db9d407ffea79db47aaf9040bb4) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 4 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 3s | 9s | 9s | 9s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 4 | 100.0% | 4 | 73,638 | 3s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 6 | 6 | 6 | 100.0% | 0 | 1 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 33 times
- Orders filtered for `unreceivable_buy_token_account`: 33 times
- Orders filtered for `in_flight`: 2 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 4 | 4 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → CATE | 1 | 1 | 100.0% |
| CATE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 2 | 2 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 2 | 2 | 100.0% |
