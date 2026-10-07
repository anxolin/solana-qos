# Solana QoS report: 2026-10-07-19-17-all

Barn, orders created between `2026-10-07T19:17:33.684Z` and `2026-10-07T19:21:16.996Z`. Data fetched 2026-10-07T19:20:53+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 5 |
| Orders executed | **5** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 3 |
| Settlement txs | 5 |

## Scenario

5 of 23 scenario rows completed. 0 retries, 17 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 19:17:33 | 1 | 1 | sell 0.02 SOL → CATE | filled | 16s | 1 |  |
| 19:17:49 | 2 | 1 | sell 22.1 CATE → SOL | filled | 7s | 1 |  |
| 19:17:33 | 3 | 2 | sell 0.02 SOL → USDu | filled | 12s | 1 |  |
| 19:17:46 | 4 | 2 | sell 1.43 USDu → SOL | failed | 0s | 0 | acquire USDu error: 404 Not Found: NoLiquidity: no route found |
| 19:17:33 | 5 | 3 | sell 0.02 SOL → ANSEM | filled | 28s | 1 |  |
| 19:18:01 | 6 | 3 | sell 9.3 ANSEM → SOL | filled | 5s | 1 |  |
| 19:17:34 | 7 | 4 | sell 0.02 SOL → jlUSDG | failed | 25s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:17:59 | 8 | 4 | sell 1.33 jlUSDG → SOL | failed | 0s | 0 | acquire jlUSDG error: 404 Not Found: NoLiquidity: no route found |
| 19:17:34 | 9 | 5 | sell 0.02 SOL → sUSD.infra | failed | 23s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:17:57 | 10 | 5 | sell 1.43 sUSD.infra → SOL | failed | 0s | 0 | acquire sUSD.infra error: 404 Not Found: NoLiquidity: no route found |
| 19:17:34 | 11 | 6 | sell 0.02 SOL → ZARP | failed | 14s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:17:48 | 12 | 6 | sell 23.9 ZARP → SOL | failed | 0s | 0 | acquire ZARP error: 404 Not Found: NoLiquidity: no route found |
| 19:17:34 | 13 | 7 | sell 0.02 SOL → SILV | failed | 22s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:17:56 | 14 | 7 | sell 0.497 SILV → SOL | failed | 0s | 0 | acquire SILV error: 404 Not Found: NoLiquidity: no route found |
| 19:17:34 | 15 | 8 | sell 0.02 SOL → sUSDu | failed | 19s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:17:53 | 16 | 8 | sell 1.23 sUSDu → SOL | failed | 0s | 0 | acquire sUSDu error: 404 Not Found: NoLiquidity: no route found |
| 19:17:34 | 17 | 9 | sell 0.02 SOL → USDM1 | failed | 21s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:17:55 | 18 | 9 | sell 1.4 USDM1 → SOL | failed | 0s | 0 | acquire USDM1 error: 404 Not Found: NoLiquidity: no route found |
| 19:17:34 | 19 | 10 | sell 0.02 SOL → USDu | failed | 21s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:17:56 | 20 | 10 | sell 1.43 USDu → CATE | failed | 0s | 0 | acquire USDu error: 404 Not Found: NoLiquidity: no route found |
| 19:17:34 | 21 | 11 | buy 29.5 CATE ← SOL | failed | 0s | 0 | quote failed: Not Found |
| 19:17:34 | 22 | 12 | sell 0.01 SOL → PYUSD | failed | 20s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |
| 19:17:34 | 23 | 13 | sell 0.01 SOL → USDG | failed | 16s | 0 | main error: 400 Bad Request: InsufficientValidTo: validTo lies closer than the minimum validity |

Scenario orders: 5 (5 main, 0 acquire). Cleanup placed 3 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 19:18:08 | 1 | CATE → SOL (native) | Executed | `0xee76b456…` [🐞](https://debug.barn.cow.fi/order/0xee76b4561f8c6345ce44bd5ee14f9b2dff6192e9a2120103071bdc9617028530) |
| 19:18:09 | 2 | USDu → SOL (native) | Executed | `0xda87b876…` [🐞](https://debug.barn.cow.fi/order/0xda87b876c6e4ceda419e0ed8869582747893b057e7ee2f19564af7702f009b49) |
| 19:18:10 | 3 | ANSEM → SOL (native) | Executed | `0xf6770c37…` [🐞](https://debug.barn.cow.fi/order/0xf6770c3729b4708e4b57eb48f89cbf3f715d6d74bdf96a80a4958f9d40523cde) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 5 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 5s | 7s | 8s | 8s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| Grr6…x1jS | 5 | 100.0% | 5 | 146,622 | 5s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| jupiter-solve | 9 | 9 | 8 | 88.9% | 0 | 2 | 0 | 0 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 39 times
- Orders filtered for `unreceivable_buy_token_account`: 39 times
- Orders filtered for `in_flight`: 10 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 5 | 5 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → CATE | 1 | 1 | 100.0% |
| wSOL → USDu | 1 | 1 | 100.0% |
| CATE → SOL (native) | 1 | 1 | 100.0% |
| wSOL → ANSEM | 1 | 1 | 100.0% |
| ANSEM → SOL (native) | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `4p3tgZxpw2gKnJnVwQ4Ah3av47HywcXfFaXTFGNU2aTT` | 2 | 2 | 100.0% |
| `DoD7Kb5bE6Jr7Eq2JTdYwfLn7718RzpYxKyQen2rxiBQ` | 2 | 2 | 100.0% |
| `BQAD73uj3XftKnCB5ZB7P67b7AvEdfLefYbLiipch5oC` | 1 | 1 | 100.0% |
