# Grafiks solver test report

28 October 2026 - staging - session `2026-10-28-09-51-composite-grafiks-run`

**TLDR:** All 25 same-direction sells and all 84 burst sells filled, with batches up to 14. Overall, 180/186 planned trades completed and 180/181 accepted main orders filled; one automatic acquisition is separate. SOL/USDC partly matched directly, while stablecoin opposite orders used swaps. Two cleanup swaps worked later after their output fell 11-12 bps below quotes against a 10 bps guard, so compare those exact route quotes with simulation and execution, including this CASH sell that later filled (https://debug.barn.cow.fi/order/0x249a0dd6ace8d9a1009c91d44da3580dad4f7fbed60399a3006ad42fd911f7d6). Three small JLP requests could not cover new-account rent, so reuse a prepared account or increase the test amount before testing a four-order size boundary.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. 25 same-direction sells | Achieved: 25/25 filled; largest batch 6 | Identify cleanup route error 7000. |
| 2. Sell bursts | Achieved: 84/84 filled; largest batch 14 | Test sustained arrivals separately. |
| 3. Opposite orders | Partial: direct SOL/USDC offset; 14/15 filled | Compare stablecoin route decisions after fees. |
| 4. Token coverage | Partial: 50/52 filled; 1 main simulation retry | Compare 10 bps cleanup guards with actual outputs. |
| 5. Transaction size | Large transactions achieved; boundary inconclusive; 7/10 filled | Isolate four-order JLP sizing from account cost. |

## Changes since 26 October 2026

On the same five-scenario scope, completed trades changed from 183/186 to 180/186; the largest burst batch rose from 12 to 14.

<details>
<summary>Comparison with the previous run</summary>

Baseline: `2026-10-26-08-39-composite-grafiks-run`, staging, verified against its metadata and raw journal. Its separate 8 fresh-account rows are excluded from both denominators. Both reports use explicit main rows, excluding automatic acquisition and cleanup.

| Measure | 26 October | 28 October |
| --- | --- | --- |
| Planned main fills, first 5 scenarios | 183/186 | 180/186 |
| Accepted main fills | 183/183 | 180/181 |
| Token sell / exact-buy fills | 36/37; 13/15 | 35/37; 15/15 |
| Largest burst batch | 12 | 14 |
| Size-test fills | 10/10 | 7/10 |

Unchanged: 25/25 same-direction and 84/84 burst fills. Median observed fills fell from 19.12 to 13.35 seconds in scenario 1 and 9.49 to 6.76 in scenario 2; these use placement to journal-observed fill, include polling and do not isolate solver speed. Account preparation differs, so JLP size success is not a like-for-like performance regression.

Newly recorded failure type: `Custom(7000)` on cleanup order [Debug](https://debug.barn.cow.fi/order/0xc484d474ef7138829bcd48a84d6147711a54418ba047c7cd09cd2c84dfa1104c); it later filled. Jupiter 6001 is an existing error on 3 newly affected orders: main MU and cleanup CASH/SPYx, all later filled, listed below. The baseline has 12 reviewed failed attempts on 15 orders; today has 4 settlement/bundle simulation or execution attempts on 4 orders, with different route and cleanup mix, not proof that earlier triggers were fixed.

Existing service error on new main requests: 3 `SellAmountDoesNotCoverFee` JLP quote rejections, rows 184-186, all unplaced. Existing `NoLiquidity` affected PUMP sell row 128 and cleanup, and `BlockhashExpired` affected PAID row 126; no accepted main order resulted. One USDC setup order expired before sponsored creation.

These successful requests were missing from the baseline:

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 131 / 73 | 2026-10-28T10:09:32.854Z | Sell 0.01 SOL to [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x90db8fd8901be9cfeccf838d847bb2540e0d4ad16f521ae14420ca543a4ad10a) |
| 168 / 73 | 2026-10-28T10:09:43.981Z | Buy SOL to exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xf607ce5a239b4e39f5a4e94aa0a6aa4247b6ad40591f6514e19caf44eb36a9a0) |
| 174 / 79 | 2026-10-28T10:09:44.906Z | Buy SOL to exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x27f5920a6bd18c4808ceacb541379dbfe978b2206fcee78d499748519fb29cf9) |

</details>

## 1. 25 same-direction sells

Batching achieved: all 25 sells filled in 5 settlements, with batches of 3-6.

<details>
<summary>Order evidence and metrics</summary>

Planned: 25; accepted main: 25; fulfilled main: 25. Total transactions: 5. Median / longest observed fill: 13.35 / 25.35 seconds.

**Cleanup route failure.** Auction/solution 403207/5 failed in driver simulation at 09:54:03.998737053 UTC, slot 462432836, after two Whirlpool swaps and a Tess swap reported success. The first failed program is `Sett1erwx2eqT5A8uvu8GBxDFT2W5TNnhirL7hLmb8m`, code 7000; no transaction was submitted for this attempt. **Cause unknown.** We have high confidence in the failing stage, low confidence in the trigger: no verified mapping identifies 7000, and successful inner swaps do not prove their final amount met the route guard. Grafiks/CoW should inspect the submitted route for 403207/5 against its quote and simulated final output, then compare the later successful route for the same 1.801424 JUP input. A verified guard shortfall would support refreshing that quote/guard; a different mapped error would reject that explanation. Ownership is unproven.

All phases finished. `run.finished=false` refers to deferred cleanup, not unfinished trading. Only this selected session is included; the 09:47 setup run and removed Rizzolver run are excluded. Successful rows use placement time; failures use the first failed-attempt time or first saved failure observation. Exact UTC times can precede journal placement confirmation for a sponsored order. Trading options: 60-second fill timeout, 300-second validity, no placement retries, quote/API/RPC limits 5/8/10 per second, `prepareTokenAccounts=false`. Missing-before-quote receiving accounts and solver-paid account rent are not isolated: order creation itself can create receiving accounts. Competition records name only Grafiks, with 152 observed successful transactions across main, acquisition and cleanup; 385 proposals and 155 wins are aggregate counters, not order counts. Supplemental authenticated Grafana reads used verified datasource UID `vm-auth-staging`; no source exports were overwritten.

Settlement grouping: {3: 1, 4: 1, 6: 3} (orders per transaction to transactions). [Six-order example](https://solscan.io/tx/3WBFQqqqYmgiFqpEdpLSGuctyJ6zsAYpFzjksxxzMegjfpnXGSLiC5iQaAF6Hm8SG37cAMXRKEBpVRmTF6uzGgka).

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-28T09:52:10.715Z | Sell 0.005 SOL to JUP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xbf6a6822aef47f7712987bdf4642279b49a37f458ba04f7489d4e9b1718819a4) |
| 2 / 2 | 2026-10-28T09:52:10.805Z | Sell 0.005 SOL to JUP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x4f366ca0e7fe4370a8850b1a061a649a0c50b66057bcacc87d2c00913e9d358b) |
| 3 / 3 | 2026-10-28T09:52:10.943Z | Sell 0.005 SOL to JUP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xc3e2dd40ca8c362666bd407d9350f8e3b5d100093e940ea734504dca550fe17b) |

All failed settlement/bundle attempts in this scenario, including cleanup:
| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 24 | 2026-10-28T09:54:03.998790863Z | Sell 1.801424 JUP to SOL [self cleanup] | 403207/5: `SimulationFailed`, instruction 5, `Sett1erwx2eqT5A8uvu8GBxDFT2W5TNnhirL7hLmb8m`, `Custom(7000)`; no verified error name. Later fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xc484d474ef7138829bcd48a84d6147711a54418ba047c7cd09cd2c84dfa1104c) |

</details>

## 2. Sell bursts

All 84 sells filled in 10 settlements, with batches up to 14.

<details>
<summary>Order evidence and metrics</summary>

Planned: 84; accepted main: 84; fulfilled main: 84. Total transactions: 10. Median / longest observed fill: 6.76 / 13.89 seconds.

All five scheduled burst waves completed. This tests separated waves, not continuous saturation. Shared signatures prove batching; they do not prove proportional allocation or a price guard.

Settlement grouping: {1: 1, 4: 1, 6: 1, 7: 1, 8: 1, 10: 3, 14: 2}. [Fourteen-order example](https://solscan.io/tx/3GJwVwzvJBpQtTtyXk4PmriSVcA27pAwakSd89bRgxjKmUq32drG9Vq27cvDpt2Enjfue8uYgacVdoc31AwyzUNL).

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 26 / 26 | 2026-10-28T09:55:57.343Z | Sell 0.0025 SOL to USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x68edbc0f0825bf1c160239cfee50d59f21aa76799db1a87b15772f955d69840b) |
| 27 / 27 | 2026-10-28T09:55:57.676Z | Sell 0.003 SOL to USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x4d68a438f1bd10059c0f5f56ba6028d9107746cbb2f00b11487d3f1a92aa5cbb) |
| 28 / 28 | 2026-10-28T09:55:57.935Z | Sell 0.0035 SOL to USDC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x2aa48ca1047473a95cbff520b4bd9aead97001e0e0b9bb6165ba9d606ee343cf) |

**Candidates rejected after fees.** These are candidate evaluations, not submitted settlement failures. The driver confirms that deducting execution cost would violate the signed order limit; it does not establish whether the submitted route margin, account rent or fee policy should change. Most affected orders later filled, so blanket token or order-kind failure is unsupported. CoW and Grafiks can compare the specific candidate's before/after-fee amounts, account creation and later successful route; apply a margin/cost change only after identifying the differing field. Full engine responses are not saved, so repair ownership remains unproven.
| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 42 / 30 | 2026-10-28T09:59:00.158988605Z | Sell 0.0025 SOL to USDC [self] | 1 candidate rejection(s): `trade 0x09d72efe277b186dc0aff7774c4a4cb47f2175f04171deb8ca7149b94cf28147 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x09d72efe277b186dc0aff7774c4a4cb47f2175f04171deb8ca7149b94cf28147) |
| 38 / 26 | 2026-10-28T09:59:00.214812419Z | Sell 0.0025 SOL to USDC [self] | 1 candidate rejection(s): `trade 0xd23b53db70b0355be382cf7c4fab0b07082f1a0265035c498dc3cfc69ac555a7 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xd23b53db70b0355be382cf7c4fab0b07082f1a0265035c498dc3cfc69ac555a7) |
| 45 / 33 | 2026-10-28T09:59:00.229131549Z | Sell 0.004 SOL to USDC [self] | 1 candidate rejection(s): `trade 0xd9feeb48416614a6db21cedb10677eab821c58fd54148c85b7efe4f0984fece1 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xd9feeb48416614a6db21cedb10677eab821c58fd54148c85b7efe4f0984fece1) |
| 41 / 29 | 2026-10-28T09:59:05.329427432Z | Sell 0.004 SOL to USDC [self] | 1 candidate rejection(s): `trade 0x4729e910a2e08f5694cb6b95af27171e6dc03d3566ea9976cf906f530e91d362 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x4729e910a2e08f5694cb6b95af27171e6dc03d3566ea9976cf906f530e91d362) |
| 64 / 36 | 2026-10-28T10:00:36.435083363Z | Sell 0.0035 SOL to USDC [self] | 1 candidate rejection(s): `trade 0x03f1427b23945537fd1528a1b39a3d8a92e78f629c479cfad17e24d16a3e552a undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x03f1427b23945537fd1528a1b39a3d8a92e78f629c479cfad17e24d16a3e552a) |
| 57 / 29 | 2026-10-28T10:00:36.448784048Z | Sell 0.004 SOL to USDC [self] | 2 candidate rejection(s): `trade 0x26f19fa4cfa40d1d78247660aa79e978dddd8b14dfcccc8ba87437d7f5ed0b3e undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x26f19fa4cfa40d1d78247660aa79e978dddd8b14dfcccc8ba87437d7f5ed0b3e) |
| 68 / 40 | 2026-10-28T10:00:36.494048744Z | Sell 0.0035 SOL to USDC [self] | 1 candidate rejection(s): `trade 0x44ec805154e3032ddc4ac9bbed0c16f9241dd7388520664622896330a4206a1e undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x44ec805154e3032ddc4ac9bbed0c16f9241dd7388520664622896330a4206a1e) |
| 60 / 32 | 2026-10-28T10:00:36.524190295Z | Sell 0.0035 SOL to USDC [self] | 1 candidate rejection(s): `trade 0x509c79a4d38395aa0b975ce51add5a05603676f1bd596485c825c42d40098a9a undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x509c79a4d38395aa0b975ce51add5a05603676f1bd596485c825c42d40098a9a) |
| 61 / 33 | 2026-10-28T10:00:36.538695786Z | Sell 0.004 SOL to USDC [self] | 2 candidate rejection(s): `trade 0x5bb1116c30ec11de138410fbd6e3554ff1b13c68e078fac569959ed7be74da7f undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x5bb1116c30ec11de138410fbd6e3554ff1b13c68e078fac569959ed7be74da7f) |
| 56 / 28 | 2026-10-28T10:00:36.55219644Z | Sell 0.0035 SOL to USDC [self] | 1 candidate rejection(s): `trade 0x7f79b93e8ed0c413a4b53d7931573c5e1f3317fd55412d6f12b86e57a0fa1fb5 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x7f79b93e8ed0c413a4b53d7931573c5e1f3317fd55412d6f12b86e57a0fa1fb5) |
| 55 / 27 | 2026-10-28T10:00:36.579426918Z | Sell 0.003 SOL to USDC [self] | 1 candidate rejection(s): `trade 0xa3c9d8effec0e4a694376bfd3e9402b5fa20359a9fc2d0f31293825f781ff8df undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xa3c9d8effec0e4a694376bfd3e9402b5fa20359a9fc2d0f31293825f781ff8df) |
| 66 / 38 | 2026-10-28T10:00:36.592257326Z | Sell 0.0025 SOL to USDC [self] | 1 candidate rejection(s): `trade 0xa8b259b0d04819ef0d8e406022e3adc516a3ebd88dc697e96b9c60a8e283b4fd undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xa8b259b0d04819ef0d8e406022e3adc516a3ebd88dc697e96b9c60a8e283b4fd) |
| 54 / 26 | 2026-10-28T10:00:36.606044602Z | Sell 0.0025 SOL to USDC [self] | 1 candidate rejection(s): `trade 0xa92514f96d8a93874f3a3e85f05802fdd4312a1bb051689b9fe5d17b0ce10c03 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xa92514f96d8a93874f3a3e85f05802fdd4312a1bb051689b9fe5d17b0ce10c03) |
| 63 / 35 | 2026-10-28T10:00:36.665147725Z | Sell 0.003 SOL to USDC [self] | 2 candidate rejection(s): `trade 0xf0474e467dca47032c7c124d326f0a6b8c4f784cedf02284a6e364d00ddfd755 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xf0474e467dca47032c7c124d326f0a6b8c4f784cedf02284a6e364d00ddfd755) |
| 69 / 41 | 2026-10-28T10:00:36.679233242Z | Sell 0.004 SOL to USDC [self] | 2 candidate rejection(s): `trade 0xfd23096ffedafde244975d3f6d16f205427a8aeedfb2cfd70906ea49ef2f7744 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xfd23096ffedafde244975d3f6d16f205427a8aeedfb2cfd70906ea49ef2f7744) |
| 79 / 27 | 2026-10-28T10:02:14.916939949Z | Sell 0.003 SOL to USDC [self] | 1 candidate rejection(s): `trade 0xd38208fb06b70e13c78c4615d15db95ac1dfee15145ca23ebe9286557249cdd4 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xd38208fb06b70e13c78c4615d15db95ac1dfee15145ca23ebe9286557249cdd4) |
| 95 / 43 | 2026-10-28T10:02:14.96358875Z | Sell 0.003 SOL to USDC [self] | 1 candidate rejection(s): `trade 0xdacb04fb444a8e575a66cc73649f223dfde58da886edbafbb76c1eccbd927fea undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xdacb04fb444a8e575a66cc73649f223dfde58da886edbafbb76c1eccbd927fea) |
| - / 32 | 2026-10-28T10:02:34.741219801Z | Sell 1438272 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 2 candidate rejection(s): `trade 0x4549b108cfadf9026ac84d29cee6311a8b1022c18bfd1e140fc9c9b055c61bf6 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x4549b108cfadf9026ac84d29cee6311a8b1022c18bfd1e140fc9c9b055c61bf6) |
| - / 33 | 2026-10-28T10:02:34.784039314Z | Sell 1643675 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 6 candidate rejection(s): `trade 0xcb94d8e4741b6241e0269ddc9ad6368fd165542223b003d7d576582ec25bc8ee undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xcb94d8e4741b6241e0269ddc9ad6368fd165542223b003d7d576582ec25bc8ee) |
| - / 35 | 2026-10-28T10:02:44.349430734Z | Sell 924431 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 4 candidate rejection(s): `trade 0x9b54e8ed0616769df153e79a2e750d351fe3d1e6076b62d957e9acb731752cdd undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x9b54e8ed0616769df153e79a2e750d351fe3d1e6076b62d957e9acb731752cdd) |
| - / 39 | 2026-10-28T10:03:04.389593774Z | Sell 924716 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 3 candidate rejection(s): `trade 0xaedd59300edeea285986b30592c95864e7430a89e6659fbae47b54e215718ce6 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xaedd59300edeea285986b30592c95864e7430a89e6659fbae47b54e215718ce6) |
| - / 41 | 2026-10-28T10:03:04.420750034Z | Sell 1233098 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0x61f1a4c5925f4172e5d2149e8513174bfe8b4f353d603878913647aa47ff8f0a undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x61f1a4c5925f4172e5d2149e8513174bfe8b4f353d603878913647aa47ff8f0a) |
| - / 42 | 2026-10-28T10:03:04.420750034Z | Sell 513940 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0xf6339223a0f83ec10d07741e2736c0410526cdac070fbf683ee1ea1fc7ca34f5 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xf6339223a0f83ec10d07741e2736c0410526cdac070fbf683ee1ea1fc7ca34f5) |
| - / 45 | 2026-10-28T10:03:29.393597554Z | Sell 822552 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 2 candidate rejection(s): `trade 0x66329245e78e6b8d5036f23c4f58216fb6629bd6abec43d6c80015306fe0a0a7 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x66329245e78e6b8d5036f23c4f58216fb6629bd6abec43d6c80015306fe0a0a7) |
| - / 46 | 2026-10-28T10:03:29.409534768Z | Sell 513340 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 3 candidate rejection(s): `trade 0xa27ac3e6ace92a6bb8d93f7ffc713d822cb2cdb605698fe672c175566d513cdd undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xa27ac3e6ace92a6bb8d93f7ffc713d822cb2cdb605698fe672c175566d513cdd) |
| - / 48 | 2026-10-28T10:03:34.43329174Z | Sell 719181 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0x101fdc5265e8787980a171b6319d21d88e6066fc7c0dc8a26498d6c909beb653 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x101fdc5265e8787980a171b6319d21d88e6066fc7c0dc8a26498d6c909beb653) |
| - / 47 | 2026-10-28T10:03:34.446911364Z | Sell 616715 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0x2b001b03839631a8605b23798cfa827a69faaaf9a58b7e4cd54bab4a3d33cfd0 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x2b001b03839631a8605b23798cfa827a69faaaf9a58b7e4cd54bab4a3d33cfd0) |
| - / 50 | 2026-10-28T10:03:39.623269269Z | Sell 256874 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0xa057b18a24e786bfcb060f877a96b9d2d9ac46113832ebd350921abcf4cd3c26 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xa057b18a24e786bfcb060f877a96b9d2d9ac46113832ebd350921abcf4cd3c26) |
| - / 55 | 2026-10-28T10:04:14.383400258Z | Sell 308361 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0x938d333ec4a07417a64292651661fe0bcbbf09597e8f846daa9955bf40fcdf79 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x938d333ec4a07417a64292651661fe0bcbbf09597e8f846daa9955bf40fcdf79) |
| - / 56 | 2026-10-28T10:04:14.398586715Z | Sell 359848 raw [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0xa1a4c364de4cba955f1827c6ff4186b2855f1facba20c0f05f79602326947e0f undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xa1a4c364de4cba955f1827c6ff4186b2855f1facba20c0f05f79602326947e0f) |

</details>

## 3. Opposite orders

SOL/USDC partly matched directly; stablecoin opposite orders did not demonstrate direct matching. One setup trade failed, and 14/15 main rows filled.

<details>
<summary>Order evidence and metrics</summary>

Planned: 15; accepted main: 15; fulfilled main: 14. Total transactions: 12. Median / longest observed fill: 9.74 / 25.44 seconds.

**Direct matching is only partly demonstrated.** [Rows 117 and 118 share a transaction](https://solscan.io/tx/2G2W8RaBQ3zX2xS5M98Z5uFRMvDMKsUgYDkRFiwvcix7sVdC84oij4QsWxb1r7ih8JxAyJ4hAuKHdGZyfdLnxVSi): 0.03 SOL sold against an exact 0.02 SOL buy. Its verified Jupiter RouteV2 instruction swaps only the 0.01 SOL residual, and a 20,000,000 raw wrapped-SOL internal transfer plus native payout accounts for the matched part. This is partial direct matching across the intended pair labels, not proof that each named pair matched in isolation. Stablecoin rows 120-123 used separate swaps: rows 121/122 share a same-direction USDT to USDC transaction, while rows 120 and 123 each use another swap. **Our leading explanation is that the submitted stablecoin solutions preferred external routes; why is unconfirmed.** Fee deductions or different auction eligibility are strong alternatives to missing matching support. Auction 403373 records both USDT to USDC candidate rejections and 8 simulation passes, but its saved request line contains only the URL, not the full order list or response. Compare those actual submitted route decisions and after-fee prices against a direct stablecoin candidate before changing matching logic. Do not infer a solver defect from fills alone.

Automatic prerequisite acquisition, excluded from main metrics: row 119 bought USDC by selling 0.017291309 SOL; [Debug](https://debug.barn.cow.fi/order/0x1f98ede2738910cf121c0aaa427b4926082194c695a8dea9311894d5f128f359) fulfilled in 9.583 seconds. The generated session report includes this acquisition in its 16 scenario-3 orders / 15 fills; our main-row count is 15 orders / 14 fills.

**Sponsored creation expired.** [journal line 958](/Users/igor/work/cowprotocol/solana-qos/sessions/2026-10-28-09-51-composite-grafiks-run/sim/journal.jsonl:958) saves the accepted exact-buy order for 1.3 USDC at 10:05:22.055 UTC. Autopilot confirms `sponsored creation expired, dropping the order` at 10:05:58.48346622 UTC. Final executed amounts are zero and no settlement signature exists. Several candidates undercut the limit after execution-cost deduction, but the decisive final state is expired sponsored creation, not token expiry at the signed `validTo`. CoW should compare the creation transaction blockhash last-valid height with its first submission/selection before rebuilding stale creation transactions. The nearby 2.6 USDC setup fulfilled; different amount and creation selection timing prevent blaming exact buys generally. CoW owns creation handling; the precise expiry trigger is not saved.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 111 / 61 | 2026-10-28T10:05:56.953Z | Buy SOL to exactly 1.3 USDC [sponsored] | Sponsored creation expired; final expired with zero execution. | [Debug](https://debug.barn.cow.fi/order/0x673230aa30d31f111fe8cf6da2565dc3dae4c4fdfc6fcf8cffe815a2e597bfce) |

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 118 / 60 | 2026-10-28T10:07:51.117Z | Sell 0.03 SOL to USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xbc9363acdd08aa20c0ced7690423f93850609e28a8d218e522c65eb0e68ac5ae) |
| 121 / 63 | 2026-10-28T10:07:51.389Z | Sell 3 USDT to USDC [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x7316b9173660b9cd4992469861493c4520ddce7b2c5f35d518d2c92663d6d293) |
| 120 / 62 | 2026-10-28T10:07:51.731Z | Sell 3 USDC to USDT [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xf045bc70881c18291861e09011a265f3909dde3d866ae9e9a95783d5123910f7) |
| 117 / 59 | 2026-10-28T10:07:51.913Z | Buy USDC to exactly 0.02 SOL [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x45d2ee4b2d913c51aa5a5553a63c4eb8cd8664835b2add0dff46302a0992f9c8) |

**Candidates rejected after fees.** These are candidate evaluations, not submitted settlement failures. The driver confirms that deducting execution cost would violate the signed order limit; it does not establish whether the submitted route margin, account rent or fee policy should change. Most affected orders later filled, so blanket token or order-kind failure is unsupported. CoW and Grafiks can compare the specific candidate's before/after-fee amounts, account creation and later successful route; apply a margin/cost change only after identifying the differing field. Full engine responses are not saved, so repair ownership remains unproven.
| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 111 / 61 | 2026-10-28T10:05:34.122886723Z | Buy SOL to exactly 1.3 USDC [sponsored] | 4 candidate rejection(s): `trade 0x673230aa30d31f111fe8cf6da2565dc3dae4c4fdfc6fcf8cffe815a2e597bfce undercuts its limit price after the cut`; final expired. | [Debug](https://debug.barn.cow.fi/order/0x673230aa30d31f111fe8cf6da2565dc3dae4c4fdfc6fcf8cffe815a2e597bfce) |
| 110 / 59 | 2026-10-28T10:05:34.136190015Z | Buy SOL to exactly 2.6 USDC [sponsored] | 2 candidate rejection(s): `trade 0xb829107d158878366f75ca44f35ae43aa3920921423912b86ea92d8caf375545 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xb829107d158878366f75ca44f35ae43aa3920921423912b86ea92d8caf375545) |
| 121 / 63 | 2026-10-28T10:07:56.288743364Z | Sell 3 USDT to USDC [sponsored] | 1 candidate rejection(s): `trade 0x7316b9173660b9cd4992469861493c4520ddce7b2c5f35d518d2c92663d6d293 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x7316b9173660b9cd4992469861493c4520ddce7b2c5f35d518d2c92663d6d293) |
| 122 / 64 | 2026-10-28T10:07:56.334047734Z | Sell 1 USDT to USDC [sponsored] | 1 candidate rejection(s): `trade 0xe95ef3652f4739652af8300b549605046b47400d9f63c6dcafe27c09c757f0fb undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xe95ef3652f4739652af8300b549605046b47400d9f63c6dcafe27c09c757f0fb) |

</details>

## 4. Token coverage

50/52 requests filled, including all 15 exact buys. Three Jupiter attempts failed before the affected orders later filled.

<details>
<summary>Order evidence and metrics</summary>

Planned: 52; accepted main: 50; fulfilled main: 50. Total transactions: 50. Median / longest observed fill: 10.11 / 26.36 seconds.

**Swap guard failures.** Main exact-buy row 173 (427 raw MU, mint `MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1`) failed bundle simulation in 403401/6 at 10:10:14.164507782 UTC, instruction 4 `Custom(6001)`, program Jupiter; bundle logs are `Some([])`, so its instruction mode, input and guard inequality are unavailable. It later fulfilled with exactly 427 raw bought and 4,019,777 lamports sold. Compare that specific solution's swap mode and limits with the successful retry; do not infer its failure mode from a separate cleanup route.

Cleanup CASH and SPYx routes in 403406/1 and /2 passed driver simulation at 10:10:39.446755102 and .447719160 UTC, then reverted on chain inside Jupiter RouteV2. All inner swaps succeeded; both reverted before payout. We matched the discriminator `[187,100,250,204,49,196,175,20]` and fields to the pinned [RouteV2 schema](https://github.com/sevenlabs-hq/carbon/blob/134647d8071675bb316f55c18511e961d4d0361b/decoders/jupiter-swap-decoder/src/instructions/route_v2.rs); this establishes layout, not the historical deployed rounding. **We think the 10 bps swap guard was too tight for the quote-to-execution change, with medium confidence in this lead and high confidence in the output shortfall.** Quote age and differences between simulation and chain state remain unconfirmed alternatives. Both actual outputs exceed their signed order minima, so this was not a payout amount exceeding the swap output. Grafiks can inspect these exact route quotes and guard values; compare quoted output with simulation and failed on-chain transfers before changing slippage. Repair ownership is unproven.

| Auction/solution | Input raw | Encoded quote SOL raw | Inner SOL output raw | Gap / bps | Slippage | Signed buy minimum raw | Output above signed minimum |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 403406/1 CASH | 1,332,298 | 12,946,842 | 12,932,143 | 14,699 / 11.35 | 10 bps | 12,857,194 | 74,949 |
| 403406/2 SPYx | 190,474 | 14,345,622 | 14,327,919 | 17,703 / 12.34 | 10 bps | 14,250,366 | 77,553 |

SPYx output sums both incoming transfers to the route's wrapped-SOL destination, 1,326,667 + 13,001,252; counting only the final transfer would incorrectly suggest a 9% shortfall. Encoded platform and positive-slippage fees are zero. These are reverted transfers, not delivered fills. Both orders filled later after about 70 seconds; cancellation signatures in the journal do not make their final status cancelled.

Successful SOL sells into 35 tokens: [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB), [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn), [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So), [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v), [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij), [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT), [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4), [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6), [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263), [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm), [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm), [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr), [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa), [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs), [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P), [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re), [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA), [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump), [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5), [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82), [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT), [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL).

Successful exact buys of 15 tokens paying SOL: [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB).

**PUMP quote rejection.** Row 128 requested Sell 0.01 SOL to PUMP and received public `NoLiquidity`. The only failed driver quote in that narrow API window is request `eb8a5f73902f86ad639caf80c8e78f47`, 10:09:29.273024982 UTC: `400 Bad Request`, `{"kind":"PriorityFeeTooHigh","description":"Transaction priority fee exceeds the configured budget"}`, 33 ms before the saved public error. We think the driver fee-budget rejection is the leading explanation, with medium confidence in this timing join; no request-token payload joins this line conclusively. The exact PUMP buy for 71.6 PUMP succeeded moments later. This does not prove unavailable liquidity or a permanent token restriction. CoW should compare this request's route compute estimate and unit price with the budget and successful exact-buy control; change estimation if overstated, or review cap policy only after validating route cost. The original provider request/quote slot is missing.

**PAID placement and deferred cleanup.** Row 126 was rejected while posting the signed sponsored creation transaction, not during quoting: `BlockhashExpired`. API request `2bf8f56b9ddf3d86d1f073434e0ebe10` logs the same error at 10:09:32.386880688 UTC; the journal saves the complete transaction and request. UID `0xf978940c8d2b137990fc8d3063e8d747949bfd15a0eb6d9036981246d549706a` remains absent from final orders and unresolved at 10:15:24.101 UTC, with trader 68 cleanup deferred. Preparation was at 10:09:32.335 UTC, only 84 ms before rejection. **We think client/backend RPC state disagreement is a stronger lead than ordinary queue expiry, with medium confidence.** A stale latest-blockhash response remains the strongest alternative. Compare the signed blockhash and both nodes' last-valid/current heights at that exact post; a client-valid but backend-unknown hash supports the first explanation, while a hash already expired on the client supports stale RPC data. No saved blockhash-height trace resolves that trigger, so repair ownership remains unknown.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 128 / 70 | 2026-10-28T10:09:29.306Z | Sell 0.01 SOL to [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) [self] | 404 Not Found: NoLiquidity: no route found; no order placed. | No order ID: quote failed before placement |
| 126 / 68 | 2026-10-28T10:09:32.419Z | Sell 0.01 SOL to [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) [sponsored] | 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one; no accepted main order. Rejected creation UID; API record absent and cleanup unresolved. | [Debug (record may be absent)](https://debug.barn.cow.fi/order/0xf978940c8d2b137990fc8d3063e8d747949bfd15a0eb6d9036981246d549706a) |

**Cleanup quote rejection and final handling.** Trader 70 could not sell 71.6 PUMP; its 10:10:34.662 UTC `cleanup_done` records a `NoLiquidity` leftover. An API `PriorityFeeTooHigh` response at 10:10:27.526226845 UTC, request `a2bb6e1c7aef8337a4b7d564b81c58cb`, is the matching time-window lead, not a proven request join. No cleanup order ID exists for this failed quote. The exact PUMP buy [Debug](https://debug.barn.cow.fi/order/0x6c84867c21972f6b3a284b57f4a1ad90a8f987d754268420cfebef0de65e79a2) is context only, not the failed sell. Cleanup was deferred, then the simulator burned all 71.6 PUMP at 10:15:28.999 UTC and swept SOL; [burn/close transaction](https://solscan.io/tx/2a2m6fN679agHgqnXFFzZ2AYi2B8ymCFW36rSoUzW2q76kqAaYGn97UkB7LxuWjbqgbo9YorqzjcLG6Lkn4LjKU7). Trader 68 remains unresolved; trader 70 does not. CoW should retain the failed cleanup request's cost estimate before allowing fallback disposal; this report made no cleanup transactions.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 125 / 67 | 2026-10-28T10:09:32.236Z | Sell 0.01 SOL to [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xcc5cf43a670fc2df84b8afb64ff236d30633c22464ab8c21db408a7f9e43d11f) |
| 131 / 73 | 2026-10-28T10:09:32.854Z | Sell 0.01 SOL to [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x90db8fd8901be9cfeccf838d847bb2540e0d4ad16f521ae14420ca543a4ad10a) |
| 168 / 73 | 2026-10-28T10:09:43.981Z | Buy SOL to exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) [sponsored] | Filled. | [Debug](https://debug.barn.cow.fi/order/0xf607ce5a239b4e39f5a4e94aa0a6aa4247b6ad40591f6514e19caf44eb36a9a0) |

All failed settlement/bundle attempts in this scenario, including cleanup:
| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 70 | 2026-10-28T10:10:34.662Z | Sell 71.6 PUMP to SOL [cleanup] | `NoLiquidity` quote failure; cleanup initially deferred, all 71.6 PUMP later burned by simulator at 10:15:28.999Z. | No order ID: quote failed before placement |
| - / 74 | 2026-10-28T10:10:39.891369886Z | Sell 0.00190474 SPYx to SOL [self cleanup] | 403406/2: `Reverted { err: InstructionError(4, Custom(6001)) }`, Jupiter RouteV2; [failed transaction](https://solscan.io/tx/2j1WQgiZUD487v8AJPRrZyd6EBXCf7CuWXSPYyfUFRN8Kn2DwYCVNSLfQA29uuvQeyqiwajGAVF2BdrFLKSKgrZK). Later fulfilled despite a saved cancellation signature. | [Debug](https://debug.barn.cow.fi/order/0x3bcbbf854e9e6dc0a06d76b06ac722bd7e161f2d855e654c138f901891a03161) |
| - / 72 | 2026-10-28T10:10:34.460810708Z | Sell 1.332298 CASH to SOL [self cleanup] | 403405/0 rejected priority fee `1047909` over `1000000` lamports; 403406/1 then `Reverted { err: InstructionError(4, Custom(6001)) }` at 10:10:40.32046615Z; [failed transaction](https://solscan.io/tx/zUGDWZVi7fEdPoYRzVwffS4smtjMPo7koHgVBYtjGqfsTpi5Z2CK7bJWCZwKJsLVuuQhQBdDnPcvQFgBNEphFRM). Later fulfilled despite a saved cancellation signature. | [Debug](https://debug.barn.cow.fi/order/0x249a0dd6ace8d9a1009c91d44da3580dad4f7fbed60399a3006ad42fd911f7d6) |
| 173 / 78 | 2026-10-28T10:10:14.164507782Z | Buy SOL to exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) [self] | 403401/6: `SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None }`; bundle identifies Jupiter, empty saved logs. Later fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xc182fe239c9c9b27bf9052a46f66073c91116639bcd20f08c37759835f78c63d) |

**Candidates rejected after fees.** These are candidate evaluations, not submitted settlement failures. The driver confirms that deducting execution cost would violate the signed order limit; it does not establish whether the submitted route margin, account rent or fee policy should change. Most affected orders later filled, so blanket token or order-kind failure is unsupported. CoW and Grafiks can compare the specific candidate's before/after-fee amounts, account creation and later successful route; apply a margin/cost change only after identifying the differing field. Full engine responses are not saved, so repair ownership remains unproven.
| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 129 / 71 | 2026-10-28T10:09:35.1154205Z | Sell 0.01 SOL to [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) [sponsored] | 3 candidate rejection(s): `trade 0x865e204358fcbafc20f63c67caaa80e69472cf1b298604dee1fa06e8d6d7a888 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x865e204358fcbafc20f63c67caaa80e69472cf1b298604dee1fa06e8d6d7a888) |
| 139 / 81 | 2026-10-28T10:09:42.663612202Z | Sell 0.01 SOL to [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) [sponsored] | 2 candidate rejection(s): `trade 0x91045a95bdb588e00e01e4fef917b59ee42cb58e9e7fc161a60707ff7ec3546d undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x91045a95bdb588e00e01e4fef917b59ee42cb58e9e7fc161a60707ff7ec3546d) |
| 163 / 68 | 2026-10-28T10:09:46.768877806Z | Buy SOL to exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) [sponsored] | 1 candidate rejection(s): `trade 0x317b08674422fe580b20b989aa6203f7014bdd485f0a2409ae97428621717727 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x317b08674422fe580b20b989aa6203f7014bdd485f0a2409ae97428621717727) |
| 166 / 71 | 2026-10-28T10:09:59.622175377Z | Buy SOL to exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) [sponsored] | 1 candidate rejection(s): `trade 0x0b86bb700672171409d1d9e9e2a30ff6dd6d1d0afc9a7dd58b724fb7c2487dec undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x0b86bb700672171409d1d9e9e2a30ff6dd6d1d0afc9a7dd58b724fb7c2487dec) |
| 169 / 74 | 2026-10-28T10:09:59.637196755Z | Buy SOL to exactly 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) [self] | 3 candidate rejection(s): `trade 0x707251b84fcdf129dc7a597fd8ad043102731d7a6a0dd25b63979f02570b8206 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x707251b84fcdf129dc7a597fd8ad043102731d7a6a0dd25b63979f02570b8206) |
| 173 / 78 | 2026-10-28T10:09:59.652646805Z | Buy SOL to exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) [self] | 3 candidate rejection(s): `trade 0xc182fe239c9c9b27bf9052a46f66073c91116639bcd20f08c37759835f78c63d undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xc182fe239c9c9b27bf9052a46f66073c91116639bcd20f08c37759835f78c63d) |
| - / 98 | 2026-10-28T10:12:15.199010784Z | Sell 447706 raw [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0xd585bb7a777f8461b81eceae24ac347b06c2ca238f1f5c33aeb81ae96b4102dc undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xd585bb7a777f8461b81eceae24ac347b06c2ca238f1f5c33aeb81ae96b4102dc) |

</details>

## 5. Transaction size

Seven requests filled in 5 version-1 transactions of 1,571-2,248 bytes. The active size boundary and four-order JLP settlement remain untested.

<details>
<summary>Order evidence and metrics</summary>

Planned: 10; accepted main: 7; fulfilled main: 7. Total transactions: 5. Median / longest observed fill: 3.34 / 6.39 seconds.

**Large transactions demonstrated; the active limit was not tested.** RPC `getTransaction` with `encoding: base64` and `maxSupportedTransactionVersion: 1` returned these complete serialized transactions, including signatures. We requested the exact settlement signatures recorded in the orders, inspected parsed and base64 responses, and verified version 1 and `meta.err=null`. The largest response explicitly labels its encoding `base64`; its serialized prefix begins `0x81`. We do not apply a legacy signatures-first layout to these version-1 bytes. Landed sizes above the historical 1,232-byte limit are observations of version 1, not oversize defects or proof of a 1,232/1,233-byte rejection boundary. Four simultaneous EURC orders split 1+3; only one of the four small JLP requests placed, so no four-order JLP size test occurred.

| Main row(s) | Complete serialized bytes | Version / result | Transaction |
| --- | --- | --- | --- |
| 177 | 2211 | 1 / successful | [Transaction](https://solscan.io/tx/23CH9VPwq9m7csq7gU8FtE664zUbeem5BPp1AitsMjTtdVwrZmQUXKCCfByNxurnoYvyfQmDxUAAAgHG3pk4NN9f) |
| 178 | 2017 | 1 / successful | [Transaction](https://solscan.io/tx/4qr3QXLXWykMpcvgXjsnBhyoGGBDdfUr3V13prdVLWFs9bmh99pyXUbKPg44ud6wLdseitoJr14KTxnd8dKKbkpY) |
| 179 | 1604 | 1 / successful | [Transaction](https://solscan.io/tx/3FDKZW8xdUm1ay7ArCdxnPQGRk1TJw94T7Lfu6DKas59FF2MBmEcbsea6xmZAjA8jsTBQ8j4A7VzJBCryvWg3DAv) |
| 180-182 | 2248 | 1 / successful | [Transaction](https://solscan.io/tx/2fE5Vzas6Vxgu5vS4txjJfdByPpNge6cctBskZRdZLguht2h3DL5xshkAcD7yjCSPmpVMDmshMsxFq5t9MQvhvtN) |
| 183 | 1571 | 1 / successful | [Transaction](https://solscan.io/tx/4ho1JV41jUkthYNRJvQA5oYeMVDaQKc91Rkdj3AX7v1EnmaKULoedUBGCahsButwZZH4fojvirBiWX3vYXxnieYt) |

**Three JLP quotes cannot cover receiving-account rent.** Rows 184-186 each requested Sell 0.00125 SOL to JLP. Original API computed quotes at 10:14:42.361357208, .462341683 and .584935656 UTC contain provider output 28,507 raw JLP, `networkFee=14000`, `buyTokenAtaRent=1488440`, and null adjusted sell/buy amounts. Rent alone exceeds the 1,250,000-lamport input by 238,440 lamports; including the listed network fee gives a 252,440-lamport deficit before other adjustments. **We think new-account cost explains these rejections, with high confidence.** The same-size JLP control for trader 108 at .982567793 has the same raw provider output, rent 0 and adjusted output 28,187; it filled. This directly argues against no liquidity or no small-JLP support. CoW/test setup should use prepared receiving accounts or enough input to cover rent, then verify all four requests are accepted before measuring batch size. No new quotes were requested for this report.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 184 / 109 | 2026-10-28T10:14:42.432Z | Sell 0.00125 SOL to JLP [self] | 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost; no order placed. | No order ID: quote failed before placement |
| 185 / 110 | 2026-10-28T10:14:42.494Z | Sell 0.00125 SOL to JLP [self] | 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost; no order placed. | No order ID: quote failed before placement |
| 186 / 111 | 2026-10-28T10:14:42.616Z | Sell 0.00125 SOL to JLP [self] | 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost; no order placed. | No order ID: quote failed before placement |

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 177 / 104 | 2026-10-28T10:13:13.414Z | Sell 0.005 SOL to EURC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x7dab7813cb6e037a69aeb5cb5a30329bd1f42ff48ba21a9bbcb71c17349dc4ea) |
| 178 / 108 | 2026-10-28T10:13:13.617Z | Sell 0.005 SOL to JLP [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x9d2d77e7e0f3bec6ea1911cd28e66682ee3725de93210959c15053f65d853ad3) |
| 181 / 106 | 2026-10-28T10:14:43.710Z | Sell 0.005 SOL to EURC [self] | Filled. | [Debug](https://debug.barn.cow.fi/order/0x3ca7356ce81a45fea481427585db44f6f1208dc7de997c1cc97420e75c8fb444) |

**Candidates rejected after fees.** These are candidate evaluations, not submitted settlement failures. The driver confirms that deducting execution cost would violate the signed order limit; it does not establish whether the submitted route margin, account rent or fee policy should change. Most affected orders later filled, so blanket token or order-kind failure is unsupported. CoW and Grafiks can compare the specific candidate's before/after-fee amounts, account creation and later successful route; apply a margin/cost change only after identifying the differing field. Full engine responses are not saved, so repair ownership remains unproven.
| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 105 | 2026-10-28T10:14:59.867988173Z | Sell 461900 raw [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0x8666f85f471b07fc44e777124d30858d89b9c6d8768dda017439c7221cd44188 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0x8666f85f471b07fc44e777124d30858d89b9c6d8768dda017439c7221cd44188) |
| - / 106 | 2026-10-28T10:14:59.883487425Z | Sell 461900 raw [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0xa038e9f99729a0123351bc3204f5f7cfd3c21aa1652b9b17c7b88478197f3f71 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xa038e9f99729a0123351bc3204f5f7cfd3c21aa1652b9b17c7b88478197f3f71) |
| - / 107 | 2026-10-28T10:14:59.89941479Z | Sell 461900 raw [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) to [SOL](https://solscan.io/token/11111111111111111111111111111111) [cleanup] | 1 candidate rejection(s): `trade 0xa294b6ca085fc650f50142fd82a1db0e89c15f8f4bf8278ad22c731d1a002811 undercuts its limit price after the cut`; final fulfilled. | [Debug](https://debug.barn.cow.fi/order/0xa294b6ca085fc650f50142fd82a1db0e89c15f8f4bf8278ad22c731d1a002811) |

Evidence completeness: raw scenario CSV, journal, final orders, transactions, competition and saved failures were checked. Supplemental driver/API records were joined by auction, solver and solution; both reverted signatures were read from RPC. Missing engine/provider quote slots, simulation output amounts for the empty-log MUx attempt and a verified Sett1er 7000 mapping prevent a stronger trigger diagnosis. No pending remote reads remain.

</details>
