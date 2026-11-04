# Solana QoS report: 2026-11-04-11-39-composite-rosato-run

Barn, orders created between `2026-11-04T11:42:06.222Z` and `2026-11-04T12:01:49.388Z`. Data fetched 2026-11-04T12:03:51+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 63 |
| Orders executed | **63** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 51 |
| Settlement txs | 63 |

## Scenario results

Target solver: `rosato`. Pauses: 30s after outstanding orders and any cleanup finish.

Trade completion counts planned trades whose full flow finished successfully. Order execution includes acquisitions, retries, and late fills separately.

| Scenario | Start (UTC) | End (UTC) | Rows completed | Rows failed | Orders | Executed | Trade completion |
|---|---|---|---|---|---|---|---|
| solver-standard-pairs | 2026-11-04T11:42:06.222Z | 2026-11-04T11:42:35.131Z | 2/6 | 4 | 3 | 3 | 33.3% |
| solver-same-direction-25 | 2026-11-04T11:42:51.028Z | 2026-11-04T11:45:18.053Z | 25/25 | 0 | 25 | 25 | 100.0% |
| solver-burst-sell-small | 2026-11-04T11:49:00.672Z | 2026-11-04T11:53:44.792Z | 28/28 | 0 | 28 | 28 | 100.0% |
| solver-cow | 2026-11-04T11:56:14.414Z | 2026-11-04T11:59:00.059Z | 0/15 | 15 | 0 | 0 | 0.0% |
| solver-token-sample | 2026-11-04T11:59:13.556Z | 2026-11-04T11:59:29.044Z | 7/12 | 5 | 7 | 7 | 58.3% |

## Scenario

62 of 86 scenario rows completed. 0 retries, 21 placement errors (from `sim/journal.jsonl`).

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 11:42:06 | 1 | 1 | sell 0.005 SOL → USDC | filled | 7s | 1 |  |
| 11:42:06 | 2 | 2 | sell 0.005 SOL → USDT | filled | 6s | 1 |  |
| 11:42:06 | 3 | 3 | sell 0.5 JUP → USDC | failed | 17s | 1 | main error: 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost |
| 11:42:13 | 4 | 1 | buy 0.25 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:42:12 | 5 | 2 | buy 0.25 USDT ← SOL | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:42:23 | 6 | 3 | buy 0.25 USDC ← JUP | failed | 9s | 0 | acquire JUP error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:42:51 | 7 | 4 | sell 0.005 SOL → JUP | filled | 106s | 1 |  |
| 11:42:51 | 8 | 5 | sell 0.005 SOL → JUP | filled | 147s | 1 |  |
| 11:42:51 | 9 | 6 | sell 0.005 SOL → JUP | filled | 141s | 1 |  |
| 11:42:51 | 10 | 7 | sell 0.005 SOL → JUP | filled | 132s | 1 |  |
| 11:42:51 | 11 | 8 | sell 0.005 SOL → JUP | filled | 138s | 1 |  |
| 11:42:51 | 12 | 9 | sell 0.005 SOL → JUP | filled | 73s | 1 |  |
| 11:42:51 | 13 | 10 | sell 0.005 SOL → JUP | filled | 52s | 1 |  |
| 11:42:51 | 14 | 11 | sell 0.005 SOL → JUP | filled | 88s | 1 |  |
| 11:42:51 | 15 | 12 | sell 0.005 SOL → JUP | filled | 69s | 1 |  |
| 11:42:51 | 16 | 13 | sell 0.005 SOL → JUP | filled | 120s | 1 |  |
| 11:42:51 | 17 | 14 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 11:42:51 | 18 | 15 | sell 0.005 SOL → JUP | filled | 65s | 1 |  |
| 11:42:51 | 19 | 16 | sell 0.005 SOL → JUP | filled | 82s | 1 |  |
| 11:42:51 | 20 | 17 | sell 0.005 SOL → JUP | filled | 60s | 1 |  |
| 11:42:51 | 21 | 18 | sell 0.005 SOL → JUP | filled | 99s | 1 |  |
| 11:42:51 | 22 | 19 | sell 0.005 SOL → JUP | filled | 45s | 1 |  |
| 11:42:51 | 23 | 20 | sell 0.005 SOL → JUP | filled | 123s | 1 |  |
| 11:42:51 | 24 | 21 | sell 0.005 SOL → JUP | filled | 30s | 1 |  |
| 11:42:51 | 25 | 22 | sell 0.005 SOL → JUP | filled | 40s | 1 |  |
| 11:42:51 | 26 | 23 | sell 0.005 SOL → JUP | filled | 130s | 1 |  |
| 11:42:51 | 27 | 24 | sell 0.005 SOL → JUP | filled | 78s | 1 |  |
| 11:42:51 | 28 | 25 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 11:42:51 | 29 | 26 | sell 0.005 SOL → JUP | filled | 20s | 1 |  |
| 11:42:51 | 30 | 27 | sell 0.005 SOL → JUP | filled | 48s | 1 |  |
| 11:42:51 | 31 | 28 | sell 0.005 SOL → JUP | filled | 34s | 1 |  |
| 11:49:00 | 32 | 29 | sell 0.0025 SOL → USDC | filled | 27s | 1 |  |
| 11:49:00 | 33 | 30 | sell 0.003 SOL → USDC | filled | 23s | 1 |  |
| 11:49:00 | 34 | 31 | sell 0.0035 SOL → USDC | filled | 17s | 1 |  |
| 11:49:00 | 35 | 32 | sell 0.004 SOL → USDC | filled | 13s | 1 |  |
| 11:50:30 | 36 | 29 | sell 0.0025 SOL → USDC | filled | 49s | 1 |  |
| 11:50:30 | 37 | 30 | sell 0.003 SOL → USDC | filled | 39s | 1 |  |
| 11:50:30 | 38 | 31 | sell 0.0035 SOL → USDC | filled | 32s | 1 |  |
| 11:50:30 | 39 | 32 | sell 0.004 SOL → USDC | filled | 28s | 1 |  |
| 11:50:30 | 40 | 33 | sell 0.0025 SOL → USDC | filled | 12s | 1 |  |
| 11:50:30 | 41 | 34 | sell 0.003 SOL → USDC | filled | 22s | 1 |  |
| 11:50:30 | 42 | 35 | sell 0.0035 SOL → USDC | filled | 19s | 1 |  |
| 11:50:30 | 43 | 36 | sell 0.004 SOL → USDC | filled | 11s | 1 |  |
| 11:52:00 | 44 | 29 | sell 0.0025 SOL → USDC | filled | 65s | 1 |  |
| 11:52:00 | 45 | 30 | sell 0.003 SOL → USDC | filled | 72s | 1 |  |
| 11:52:00 | 46 | 31 | sell 0.0035 SOL → USDC | filled | 48s | 1 |  |
| 11:52:00 | 47 | 32 | sell 0.004 SOL → USDC | filled | 54s | 1 |  |
| 11:52:00 | 48 | 33 | sell 0.0025 SOL → USDC | filled | 104s | 1 |  |
| 11:52:00 | 49 | 34 | sell 0.003 SOL → USDC | filled | 95s | 1 |  |
| 11:52:00 | 50 | 35 | sell 0.0035 SOL → USDC | filled | 59s | 1 |  |
| 11:52:00 | 51 | 36 | sell 0.004 SOL → USDC | filled | 67s | 1 |  |
| 11:52:00 | 52 | 37 | sell 0.0025 SOL → USDC | filled | 44s | 1 |  |
| 11:52:00 | 53 | 38 | sell 0.003 SOL → USDC | filled | 11s | 1 |  |
| 11:52:00 | 54 | 39 | sell 0.0035 SOL → USDC | filled | 40s | 1 |  |
| 11:52:00 | 55 | 40 | sell 0.004 SOL → USDC | filled | 15s | 1 |  |
| 11:52:00 | 56 | 41 | sell 0.0025 SOL → USDC | filled | 34s | 1 |  |
| 11:52:00 | 57 | 42 | sell 0.003 SOL → USDC | filled | 24s | 1 |  |
| 11:52:00 | 58 | 43 | sell 0.0035 SOL → USDC | filled | 18s | 1 |  |
| 11:52:00 | 59 | 44 | sell 0.004 SOL → USDC | filled | 31s | 1 |  |
| 11:56:14 | 60 | 46 | buy 2.6 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:56:14 | 61 | 48 | buy 1.3 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:56:14 | 62 | 49 | buy 3.1 USDC ← SOL | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:56:14 | 63 | 50 | buy 3.1 USDT ← SOL | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:56:14 | 64 | 51 | buy 1.1 USDT ← SOL | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:56:14 | 65 | 52 | buy 3.2 USDC ← SOL | failed | 3s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:58:44 | 66 | 45 | sell 0.02 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:58:44 | 67 | 46 | buy 0.02 SOL ← USDC | failed | 10s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:58:44 | 68 | 47 | sell 0.03 SOL → USDC | failed | 1s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:58:44 | 69 | 48 | sell 1.2 USDC → SOL | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:58:44 | 70 | 49 | sell 3 USDC → USDT | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:58:44 | 71 | 50 | sell 3 USDT → USDC | failed | 9s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:58:44 | 72 | 51 | sell 1 USDT → USDC | failed | 9s | 0 | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:58:44 | 73 | 52 | sell 3 USDC → USDT | failed | 9s | 0 | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:58:44 | 74 | 53 | sell 0.02 SOL → JUP | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:59:13 | 75 | 54 | sell 0.01 SOL → 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:59:13 | 76 | 55 | sell 0.01 SOL → pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | filled | 13s | 1 |  |
| 11:59:13 | 77 | 56 | sell 0.01 SOL → 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | failed | 2s | 0 | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account |
| 11:59:13 | 78 | 57 | sell 0.005 SOL → DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | filled | 10s | 1 |  |
| 11:59:14 | 79 | 58 | sell 0.005 SOL → EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | filled | 12s | 1 |  |
| 11:59:14 | 80 | 59 | sell 0.005 SOL → 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | filled | 12s | 1 |  |
| 11:59:14 | 81 | 60 | sell 0.005 SOL → J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | filled | 12s | 1 |  |
| 11:59:14 | 82 | 61 | sell 0.005 SOL → mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | filled | 13s | 1 |  |
| 11:59:14 | 83 | 62 | sell 0.005 SOL → jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | filled | 10s | 1 |  |
| 11:59:15 | 84 | 54 | buy 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:59:26 | 85 | 55 | buy 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn ← SOL | failed | 0s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |
| 11:59:16 | 86 | 56 | buy 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo ← SOL | failed | 1s | 0 | quote failed: 404 Not Found: NoLiquidity: no route found |

### Rows without an order

24 rows failed before an order existed, so no order count includes them.

| Error | Step | Rows | Markets | Detail |
|---|---|---|---|---|
| InvalidTransaction | main | 13 | SOL → USDC ×7, SOL → USDT ×3, SOL → JUP, SOL → USDG, SOL → PYUSD | the bundle must not create the buy token account |
| InvalidTransaction | acquire | 7 | SOL → USDC ×4, SOL → USDT ×2, SOL → JUP | the bundle must not create the buy token account |
| NoLiquidity | quote | 3 | SOL → USDG, SOL → PUMP, SOL → PYUSD | no route found |
| SellAmountDoesNotCoverFee | main | 1 | JUP → USDC | the quoted amount does not cover the execution cost |

Scenario orders: 63 (62 main, 1 acquire). Cleanup placed 51 more, listed below and left out of the stats.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 11:45:22 | 5 | JUP → SOL (native) | Executed | `0xc9a6d21f…` [🐞](https://debug.barn.cow.fi/order/0xc9a6d21fde408b02f1fd0f00bbabc400f7ff21d82ca77d59fd971cc70a87cbe6) |
| 11:45:22 | 6 | JUP → SOL (native) | Executed | `0x239f2692…` [🐞](https://debug.barn.cow.fi/order/0x239f26921714fe4e511d4c82ab888b5843b5527316b7ee554d2292f54ae7fff8) |
| 11:45:23 | 7 | JUP → SOL (native) | Executed | `0x12242d54…` [🐞](https://debug.barn.cow.fi/order/0x12242d54667b8ebe4d046766112be30e689fdfe3a14046e7f7529e74ec3697c7) |
| 11:45:25 | 8 | JUP → SOL (native) | Executed | `0xcc9ee607…` [🐞](https://debug.barn.cow.fi/order/0xcc9ee6070fe708f9eba230352833fc93154c1592b248376c382b59553571e639) |
| 11:45:26 | 9 | JUP → SOL (native) | Executed | `0x57aa31cc…` [🐞](https://debug.barn.cow.fi/order/0x57aa31ccb722a749c9027f0b4153511aea5404b59900e899bc714a28d461d3f4) |
| 11:45:26 | 10 | JUP → SOL (native) | Executed | `0x026cda3d…` [🐞](https://debug.barn.cow.fi/order/0x026cda3da93a5fed6156a1be4d00b71bb3fbedc947c095b23ea8f6851c152063) |
| 11:45:28 | 11 | JUP → SOL (native) | Executed | `0x0e986418…` [🐞](https://debug.barn.cow.fi/order/0x0e9864187b0962580a43672f2da1b70c039a89c6514cb68401e5687260f88375) |
| 11:45:28 | 12 | JUP → SOL (native) | Executed | `0x2057e633…` [🐞](https://debug.barn.cow.fi/order/0x2057e633aa90cd5e188fb6ed39845286ecbb5ec3767dd8d9f9cfe5c083f9e63f) |
| 11:45:31 | 4 | JUP → SOL (native) | Executed | `0x45f66ca5…` [🐞](https://debug.barn.cow.fi/order/0x45f66ca5b946468e0e8c7c2b884035c6286e5d2961da0099ead93ccbd9cb2a63) |
| 11:45:31 | 13 | JUP → SOL (native) | Executed | `0x476d2ebb…` [🐞](https://debug.barn.cow.fi/order/0x476d2ebbb077fcada52625cd1cef56689fbc87d01c1340fb446cb5efb0872a8d) |
| 11:45:42 | 14 | JUP → SOL (native) | Executed | `0x7dd20128…` [🐞](https://debug.barn.cow.fi/order/0x7dd201284ac8cf1098ab4b1d51379c6d671ed0528c96f08e59f0bf27fc3eb77e) |
| 11:45:48 | 15 | JUP → SOL (native) | Executed | `0x420ce9b0…` [🐞](https://debug.barn.cow.fi/order/0x420ce9b0779f495085844482b149467f8c28de3b3c367291d80b8f2c8733e0bb) |
| 11:45:56 | 16 | JUP → SOL (native) | Executed | `0x6fb30412…` [🐞](https://debug.barn.cow.fi/order/0x6fb30412685b4f6884c017b13cba9287f31fe2dffba5eae279346a051f051119) |
| 11:46:00 | 17 | JUP → SOL (native) | Executed | `0x31467647…` [🐞](https://debug.barn.cow.fi/order/0x31467647eb2cd12756d21ff4665b3d15a48e8a5673b47d12fe058f9ee03f9c6e) |
| 11:46:12 | 18 | JUP → SOL (native) | Executed | `0x341595e6…` [🐞](https://debug.barn.cow.fi/order/0x341595e6cb75113747845b62d4ba3c8881bff38d113b2c4fac2644d0c68e4d5c) |
| 11:46:22 | 19 | JUP → SOL (native) | Executed | `0x215f88c7…` [🐞](https://debug.barn.cow.fi/order/0x215f88c7913d6bddace3434d984015e03bc369e00ead2491371200601b85ad30) |
| 11:46:26 | 20 | JUP → SOL (native) | Executed | `0xb8f8c5c4…` [🐞](https://debug.barn.cow.fi/order/0xb8f8c5c47f04403aeffb77153fbff5e083c310490b6b32d53399857477294951) |
| 11:46:30 | 21 | JUP → SOL (native) | Executed | `0x85cf6be1…` [🐞](https://debug.barn.cow.fi/order/0x85cf6be194588f35a65d376cca207fbb57f777e56e63cc26a7c13829a6b93024) |
| 11:46:39 | 22 | JUP → SOL (native) | Executed | `0xd6f11f0a…` [🐞](https://debug.barn.cow.fi/order/0xd6f11f0a853b4a79f783bd2a3fdb5b5e060f67d3b3b6ef04e12541c4eee23d1a) |
| 11:46:43 | 23 | JUP → SOL (native) | Executed | `0xbbe03333…` [🐞](https://debug.barn.cow.fi/order/0xbbe033339091f1e100ae0c3aa50b6da0ead6a78b70fd872aa91b7f32d878a198) |
| 11:46:51 | 24 | JUP → SOL (native) | Executed | `0x4c99adbe…` [🐞](https://debug.barn.cow.fi/order/0x4c99adbe6cc49819b9eec2fc1dd0d12860448d2eb049f9706ab84cfdf02f9b23) |
| 11:47:00 | 25 | JUP → SOL (native) | Executed | `0x01538e01…` [🐞](https://debug.barn.cow.fi/order/0x01538e01363dac3deeff006a2893d53b7667c7aacab871eb5719a569cff8d11f) |
| 11:47:06 | 26 | JUP → SOL (native) | Executed | `0x26cbec1a…` [🐞](https://debug.barn.cow.fi/order/0x26cbec1aab667cb0a650b0455b763399d85b346e75272937e7c1912b2cfdac1f) |
| 11:47:11 | 27 | JUP → SOL (native) | Executed | `0xd02fc451…` [🐞](https://debug.barn.cow.fi/order/0xd02fc451a7595207350e7195151e8478c50c1a821286a0980562bd11d9552918) |
| 11:47:17 | 28 | JUP → SOL (native) | Executed | `0x97a1fc6b…` [🐞](https://debug.barn.cow.fi/order/0x97a1fc6b38cfaf01218186d5caa4efed465f390d0539db73136ff4f9949a0f51) |
| 11:53:48 | 30 | USDC → SOL (native) | Executed | `0x0869da6b…` [🐞](https://debug.barn.cow.fi/order/0x0869da6b4132efc48fe7596ce4517d7f28fe117cf5b89dfd76977be60cc63507) |
| 11:53:49 | 31 | USDC → SOL (native) | Executed | `0x43fefdf3…` [🐞](https://debug.barn.cow.fi/order/0x43fefdf3eadfc1dc1fcfb79be9f95ac3ac2d31b45143693f46d836b58f8a99e5) |
| 11:53:50 | 32 | USDC → SOL (native) | Executed | `0xa21d8210…` [🐞](https://debug.barn.cow.fi/order/0xa21d8210385bae78675f0f00392649487ee45211e076f86e30cc5b7be04bb59e) |
| 11:53:50 | 33 | USDC → SOL (native) | Executed | `0xd80e6486…` [🐞](https://debug.barn.cow.fi/order/0xd80e6486a5c56d5971ce0da1e105768c0738dc7c4980547d70676e35d9532907) |
| 11:53:52 | 34 | USDC → SOL (native) | Executed | `0xb5b47701…` [🐞](https://debug.barn.cow.fi/order/0xb5b47701ae1915592b27d9a48e4fde3d334152b9ea6bd10474d1e8ab02218402) |
| 11:53:53 | 35 | USDC → SOL (native) | Executed | `0x4bbea1e5…` [🐞](https://debug.barn.cow.fi/order/0x4bbea1e5685985440b94304f21f43c768c756f74cc889219b0b46105909969b5) |
| 11:53:54 | 36 | USDC → SOL (native) | Executed | `0x77a9fad3…` [🐞](https://debug.barn.cow.fi/order/0x77a9fad37d9d82fd9430d7682d22ee3cf0b30fe9ad0c81665679e6fd92b4969a) |
| 11:53:55 | 37 | USDC → SOL (native) | Executed | `0xecdf91ef…` [🐞](https://debug.barn.cow.fi/order/0xecdf91efdc4ff1d45e522f9b18edf0d946db874d49638fdd5111b42050d945e7) |
| 11:53:58 | 38 | USDC → SOL (native) | Executed | `0x1864787b…` [🐞](https://debug.barn.cow.fi/order/0x1864787b6fb3710adaf30936d5aeaa228ec96878dea77f7cfce2ead09fbecef2) |
| 11:53:58 | 29 | USDC → SOL (native) | Executed | `0x15b6b122…` [🐞](https://debug.barn.cow.fi/order/0x15b6b12274ca4ed0912b4853e0b3b70a1d7153403c5e4afb6318c5d6f195869f) |
| 11:54:09 | 39 | USDC → SOL (native) | Executed | `0xfb329298…` [🐞](https://debug.barn.cow.fi/order/0xfb329298addb8d98e0ede3d30cc5c76ac2286a165d715cffe2838eec9503cfd4) |
| 11:54:13 | 40 | USDC → SOL (native) | Executed | `0xde3d7c10…` [🐞](https://debug.barn.cow.fi/order/0xde3d7c102f437340346d9a3c2be1ce575fa84709c967e77ede99dae4efb6583b) |
| 11:54:19 | 41 | USDC → SOL (native) | Executed | `0xadcce6ab…` [🐞](https://debug.barn.cow.fi/order/0xadcce6aba5dae57721f35c86eba6f6d9737f7a575c26f5e4e4bb52e1da7af9af) |
| 11:54:21 | 42 | USDC → SOL (native) | Executed | `0x6a193699…` [🐞](https://debug.barn.cow.fi/order/0x6a193699b0bf45967cc722db78f731e60102ff96a236b9c1819f6d8171d67cc0) |
| 11:54:29 | 43 | USDC → SOL (native) | Executed | `0xfe8b5b58…` [🐞](https://debug.barn.cow.fi/order/0xfe8b5b5874d0aa3ab41187d57cb18c992a01c23e7d4d6564543ac81340a5063f) |
| 11:54:31 | 44 | USDC → SOL (native) | Executed | `0x221e94da…` [🐞](https://debug.barn.cow.fi/order/0x221e94dae558e48e0de1907b497c94ee845b6d602808831909981691686b474a) |
| 11:59:38 | 55 | PUMP → SOL (native) | Executed | `0x1865c17f…` [🐞](https://debug.barn.cow.fi/order/0x1865c17f2a3705e0ad3ae18d4ac54ce5fb232ef894dd5c27b836a20dc39bfb78) |
| 11:59:39 | 57 | Bonk → SOL (native) | Executed | `0x8da471ad…` [🐞](https://debug.barn.cow.fi/order/0x8da471ad5443d1a81c8fc443203759f25595d2c810c4992a5c9c2184eaf202d2) |
| 11:59:41 | 59 | POPCAT → SOL (native) | Executed | `0xddbda7ff…` [🐞](https://debug.barn.cow.fi/order/0xddbda7ff5c11c97929224563acc85b9e2bf394f8120391540b5c70915280e98d) |
| 11:59:41 | 58 | $WIF → SOL (native) | Executed | `0x04f1a6dc…` [🐞](https://debug.barn.cow.fi/order/0x04f1a6dcabccbf41bcbcea45db1c4dc10196134d029a99c68e7db9efe0f34de5) |
| 11:59:43 | 60 | JitoSOL → SOL (native) | Executed | `0x4c8e344e…` [🐞](https://debug.barn.cow.fi/order/0x4c8e344e75d8e6c36501201c8d7e6a0e980d42c674409117638676f592f4b33e) |
| 11:59:43 | 61 | mSOL → SOL (native) | Executed | `0x6778215b…` [🐞](https://debug.barn.cow.fi/order/0x6778215bdbbb77f845636b4de2147feb4a7d6caedfb3726a44d2b0a00b18c677) |
| 11:59:44 | 62 | JupSOL → SOL (native) | Executed | `0x5315d98e…` [🐞](https://debug.barn.cow.fi/order/0x5315d98e9457b5431dff0e2575e0d4fa2ffb21c3a9991be71c1432c4c103f94a) |
| 12:00:26 | 1 | USDC → SOL (native) | Executed | `0x0526dc59…` [🐞](https://debug.barn.cow.fi/order/0x0526dc59f5ca55aab1a7264563257e52d3757cdd087fd2522c5573a533902a80) |
| 12:00:27 | 2 | USDT → SOL (native) | Executed | `0xc7223ebc…` [🐞](https://debug.barn.cow.fi/order/0xc7223ebcdca46cc31e3b2a3d320c2d18ee3ba9d14606077fd7bf98bcb00a0030) |
| 12:00:27 | 3 | JUP → SOL (native) | Executed | `0x7b6305d7…` [🐞](https://debug.barn.cow.fi/order/0x7b6305d732cbe4d68a0e1a0f674e87bb2a594b0b9748f6d571180e36b35d57c5) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 63 | 100.0% |

## Time to execution

Market orders, from order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 28s | 64s | 110s | 139s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| DNvt…HqL1 | 63 | 100.0% | 63 | 109,749 | 28s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| rosato | 520 | 122 | 114 | 93.4% | 4 | 0 | 2 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| rosato: SimulationFailed | 4 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unreceivable_buy_token_account`: 226 times
- Orders filtered for `in_flight`: 1 times

## By order type

Limit orders carry CoW Swap's limit-order appData (`0xd2e88c2a59a536f1efe438267ea1b4efacec60b709eb9cd607b5f2caa9d6f910`).

| Type | Placed | Executed | Fill rate |
|---|---|---|---|
| market sell | 63 | 63 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → USDC | 29 | 29 | 100.0% |
| wSOL → JUP | 26 | 26 | 100.0% |
| wSOL → USDT | 1 | 1 | 100.0% |
| wSOL → PUMP | 1 | 1 | 100.0% |
| wSOL → $WIF | 1 | 1 | 100.0% |
| wSOL → Bonk | 1 | 1 | 100.0% |
| wSOL → JitoSOL | 1 | 1 | 100.0% |
| wSOL → POPCAT | 1 | 1 | 100.0% |
| wSOL → mSOL | 1 | 1 | 100.0% |
| wSOL → JupSOL | 1 | 1 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bx3T8brMpb4PyCm1L4T1hRNbRbUXGcT2rKQuY4HoQTz1` | 3 | 3 | 100.0% |
| `3qnVqh7hAWCGVRe5EYKmmr5DoT8zjDFY69VGaDMKGzzQ` | 3 | 3 | 100.0% |
| `ESfc4rsQLGx5q3TJWTYnGnrEcamgafEgsnozX239H6jB` | 3 | 3 | 100.0% |
| `H9ysvmBQaqkYmHFyPSo4hN43dmBPbwKjGnfFGsEcWNN9` | 3 | 3 | 100.0% |
| `2nHXDayL4R2MdUHd1WtqhqTpNUaZBC1weAEUH9TQUjHE` | 2 | 2 | 100.0% |
| `9fnMnpviPY9CMwDhS3aporAX3bNAMarMJ9UBraFcJ1oR` | 2 | 2 | 100.0% |
| `45xR9gQ71wuJjpXc4qCY5SGJd4BwkLf7tTG5DvZgTLqa` | 2 | 2 | 100.0% |
| `2HHhVCkTjx3R7qiKscztda4irAKh8rNZZQkPjcgT4Zty` | 2 | 2 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
| `GBTdf5YUJFqbJUpQRMzV34qJGRCnqzJjHV9afhCsLtUL` | 1 | 1 | 100.0% |
| `Egjsp3Ce1MYPEdqNqDoFYaKFZqHQMXhqeLbHdcUYjVNa` | 1 | 1 | 100.0% |
| `A89MjYq3qyzUrsZFn5yEWATyZKKW4LAzheaPjDwDNCKX` | 1 | 1 | 100.0% |
| `2wf2bRYadJXh8ZBtXUwL1NERdwSpc7Th1NuSPrPHwXmQ` | 1 | 1 | 100.0% |
| `Gid7AK158yZLDtkXZ8G5WvQ92qRiK9FVvncfEzd7QsHU` | 1 | 1 | 100.0% |
| `3ffgUoMyHW8SjcUt9TKbP2C4mfimaZQkmVU4bV6PtA5u` | 1 | 1 | 100.0% |
| `Er8HVNoMuoZi2jUbpzNTJd5fpWqLVE9qR9ynAQCrPHKp` | 1 | 1 | 100.0% |
| `5j2AAB5BXuVsiiF4TEwsTP5AmoRYpUKKG2tSoNb7gP5M` | 1 | 1 | 100.0% |
| `7LaSFNfhyWb9zAXye7JgKqLkn3HeYbcvxEDW6mqAEz6J` | 1 | 1 | 100.0% |
| `EhkGar5GtvQLjuS1K8DJQPYj9vxjFxu7rZdszDhhRxVD` | 1 | 1 | 100.0% |
| `4VJti7783aieHd7E1J7CgsMg3X1mHhhx8xey4832umxE` | 1 | 1 | 100.0% |
| `82PuQ7H3Gmg9LDwEDQ5yMHRdaF9vFbLGBaVnECGqHYFG` | 1 | 1 | 100.0% |
| `6wMiofp8ioY1sWJtWmdi41oDSXUjMXEiysLvM2abJbDz` | 1 | 1 | 100.0% |
| `4o2BnS7CU8KUbyBBEk1ZBGmU9TdLx3dHSE7xSHQp5E7y` | 1 | 1 | 100.0% |
| `bphssQ1SAMKJpZv1twL8ki32HA4awdBecdH4qCK4XJk` | 1 | 1 | 100.0% |
| `6HViS4Cco28ZwVQT7u22iuC1LkM6dDAMePRTqxczfSSE` | 1 | 1 | 100.0% |
| `5dkfT5y9qLuoQeLQVsFdeNtToPNkEojEhFQe1PQQrjFQ` | 1 | 1 | 100.0% |
| `9yM7pEEwLdKe7uvich4uzzemzxrTQYsQgMAEH7tYQtLZ` | 1 | 1 | 100.0% |
