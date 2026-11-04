# Cicada solver test report

Date: 2026-10-29. Environment: staging. Test mode: solving only, with Jupiter quotes.

**TLDR:** The solving goal was not achieved in the recorded run: 0 of 182 planned trades completed, with 0 of 136 placed main orders filled. The driver sent solve requests to Cicada, but no returned proposal or settlement is visible, so the cause and repair owner remain unknown. Another 46 main trades never reached placement: 30 hit creation rejection, 15 had no usable exact buy quote, and 1 stopped at an unfilled acquisition. The first useful check is the HTTP completion for auction 425344 before assuming a token or batching limit.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Not achieved; 0/6, 2 main orders placed | CoW: correlate auction 425344 response |
| 2. Same direction | Not achieved; 0/25 filled | CoW: recover solve response completion |
| 3. Sell bursts | Not achieved; 0/84 filled | CoW: correlate requests across waves |
| 4. Opposite orders | Inconclusive; 0/15, none placed | Test team: restore acquisition/placement |
| 5. Token coverage | Not achieved; 0/52, 25 main orders placed | CoW: separate solving and quote gaps |

## Previous report comparison

No matching earlier saved Cicada report or raw session is available. The earlier 16:39 source folder is absent, so a quoting and solving comparison cannot be verified. No earlier report was reconstructed from this solving only run.

## 1. Standard pairs

The standard pair goal was not achieved. Both SOL sells and the JUP acquisition timed out; exact buys did not reach a main order.

<details>
<summary>Order evidence and metrics</summary>

Session: `2026-10-29-17-03-composite-cicada-run`. Start/end: 2026-10-29T17:04:28.901Z / 2026-10-29T17:05:56.655Z. Planned: 6. Main placed: 2. Acquisition placed: 1. Fills and successful settlements: 0. Fill timing: unavailable. Cleanup orders excluded: 0.

**Ownership unknown.** All 137 placed scenario orders (136 main and 1 acquisition) reached a local fill timeout and were cancelled. No returned candidate, rejection, winner, failed settlement attempt or settlement signature was recovered. Cause unknown: our leading explanation is a missing usable solve response in the recorded integration path, with low confidence about the trigger or repair owner. Empty responses, transport failure and incomplete service logging remain alternatives; no response body is available to rank them. CoW should join auction 425344, driver request 1015 at 17:04:35.424Z, to the outbound HTTP completion and Cicada ingress/response. An empty response would narrow this to candidate generation; no ingress would narrow it to transport/configuration. No order replay is needed for that check.

Authenticated `/api/datasources` verified `vm-auth-staging` and `vm-auth-prod`; reads used staging. Between 17:04:28 and 17:33:00 UTC, the driver recorded 342 Cicada `/solve` requests and no other solve outcomes. API competition records named only `jupiter-quote-native` in 270 quote responses. These are shared-window counts, not scenario order counts. The first SOL/USDC and SOL/USDT orders entered auction 425344 at 17:04:35.395Z. The scenario name alone was not used as role evidence.

Total transactions means distinct successful settlements for selected main scenario orders, excluding acquisitions, creation, funding, failed attempts and cleanup. It is 0. Median / longest fill is unavailable because no recorded orders filled. Error rows use the first observed failure timestamp. No successful example exists in any scenario. All placed main orders were fixed input sells; exact buy support remains untested.

3 sponsored placement requests were rejected (2 main, 1 acquisition). This limits coverage and does not establish a Cicada exact buy limitation.

**Creation diagnosis, CoW/test team.** The original POST response is `400 Bad Request: InvalidTransaction: the bundle must not create the buy token account`. This is a service rejection before solver participation; `prepareTokenAccounts=false`. The sponsored bundle included destination account creation. Confidence is high about the rejection stage, but the evidence does not decide whether client assembly or service policy should change. Self paid placements succeeded at creation, narrowing this to the sponsored path rather than general liquidity. The test team should compare the saved account instructions with the placement contract and prepare the destination account through the user/sponsor placement flow when required. A newly accepted sponsored placement would confirm that fix. ATA creation is not a solver obligation. No requests were replayed.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-29T17:05:39.134Z | main, self, sell 0.005 SOL to minimum 0.353779 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x133dadc0f41ae8ff8e304e4ebc1c7c60e1d49265ad3c367ff5c79b28604ad9a0 |
| 2 / 2 | 2026-10-29T17:05:40.050Z | main, self, sell 0.005 SOL to minimum 0.354113 USDT | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x4dd8f4c3b2ec29072b4145d0cd83deca5b3c2c978a77ad2c9aaa71b0c324fdb6 |
| 3 / 3 | 2026-10-29T17:05:45.628Z | acquire, self, sell 0.00203461 SOL to minimum 0.184557 JUP | acquire timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x953e1eb5ea250988f0881fece338706828386ea31bd5149c7d6b2ec8080663bd |
| 4 / 1 | 2026-10-29T17:05:40.084Z | Buy SOL to exactly 0.25 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 5 / 2 | 2026-10-29T17:05:41.143Z | Buy SOL to exactly 0.25 USDT, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 6 / 3 | 2026-10-29T17:05:54.860Z | Buy JUP to exactly 0.25 USDC, sponsored | acquire JUP error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |

Saved competition metadata counts 329 `unfunded_sell_token_account` events. A broader live read of 342 filter records found 0 selected order UIDs in their order lists, so these do not explain the selected cancellations. RPC confirmed that the first placement created funded 0.005 WSOL and empty USDC accounts, without executing the order ([creation transaction](https://solscan.io/tx/2bbiF9xkBa5wvWYyr9Y15soprVA5R2PjtXByfoB9ahLQgT5G2ATj4bFD5ZSDBPyef7M9kzFGLG6dFB6feNeap7Nc)).

### Recovery checkpoint

The final checkpoint has `finished=false` and 30 unresolved records overall (27 `Order lookup timed out`, 3 `Order was not found in the API`). These are recovery lookup results, not additional settlement failures. All placed order exports are cancelled. CoW should reconcile these UIDs against the final exports before further wallet cleanup; ending report metadata does not prove recovery completed.

| Scenario row / trader | Recovery error | Order evidence |
| --- | --- | --- |
| 4 / 1 | Order was not found in the API | Placement rejected; no API order for 0x0fbf3a15355b75e601a0e6f692d36d89f385bbb22a6509fb6ced46cb9bec06fa |
| 5 / 2 | Order was not found in the API | Placement rejected; no API order for 0x4a2bd2177a8a0b7896b9c74e257894db2552d643ce83313f8d7fbb83b8d3de41 |
| 6 / 3 | Order was not found in the API | Placement rejected; no API order for 0xb6488363f41cee82b4d3f6e605ba17696f8b91091d5c44054a7c3c22eca572e0 |

</details>

## 2. 25 orders in the same direction

The batching goal was not achieved. All 25 orders were cancelled without a settlement, so batch size cannot be measured.

<details>
<summary>Order evidence and metrics</summary>

Session: `2026-10-29-17-03-composite-cicada-run`. Start/end: 2026-10-29T17:06:12.130Z / 2026-10-29T17:07:34.963Z. Planned: 25. Main placed: 25. Acquisition placed: 0. Fills and successful settlements: 0. Fill timing: unavailable. Cleanup orders excluded: 30.

**Ownership unknown.** These orders have the same missing solve outcome described in the standard pair evidence. All later became cancelled; no failed settlement signatures are available to decode. CoW should recover the HTTP response completion before assigning a repair owner.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-29T17:07:25.092Z | main, self, sell 0.005 SOL to minimum 1.269 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x87c88269db6bcae182795a145f6c7efcb654a6df537d14d6c9a7df96eebddad3 |
| 8 / 5 | 2026-10-29T17:07:25.684Z | main, self, sell 0.005 SOL to minimum 1.269 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x7bf32c9dcacfb1a9bc16be6547c46fc68456e171120e48816ef207136a4576f5 |
| 9 / 6 | 2026-10-29T17:07:26.766Z | main, self, sell 0.005 SOL to minimum 1.807697 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x2ef9f514ab202dd58bb19495039dcaf870f72a9f18d5b709dbe1a9c0c75c91fd |
| 10 / 7 | 2026-10-29T17:07:27.460Z | main, self, sell 0.005 SOL to minimum 1.807697 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x8e9133b6188e36d2f86594428a59bd572c6e749e9523c6160cbd0864dc3a7a91 |
| 12 / 9 | 2026-10-29T17:07:26.529Z | main, self, sell 0.005 SOL to minimum 1.806268 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xc89d0dcf548554f36d846ff4ec1c25f27ea9e82a0d653ad1a96c9edf66add507 |
| 13 / 10 | 2026-10-29T17:07:27.242Z | main, self, sell 0.005 SOL to minimum 1.267571 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x2c41cef7fdc10111ea5bff62fd17024f4d483a4a892f0f5bd687f6a813cdce6d |
| 14 / 11 | 2026-10-29T17:07:28.412Z | main, self, sell 0.005 SOL to minimum 1.797088 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x9902ef1106ecf25dd29110317233dd30d12c3d836cbaa511d452a99cdb07578f |
| 15 / 12 | 2026-10-29T17:07:29.942Z | main, self, sell 0.005 SOL to minimum 1.258391 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x042d95667ec088ed1369fbf3d5ab907706c9c9b55af0556cdb73c12a8e173fd4 |
| 17 / 14 | 2026-10-29T17:07:31.212Z | main, self, sell 0.005 SOL to minimum 1.797088 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xf5656164dff4dbd60fbac0f1459a402fd1104bb1945583463fb4df70b4b54acc |
| 16 / 13 | 2026-10-29T17:07:30.819Z | main, self, sell 0.005 SOL to minimum 1.797088 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x363612cfad7fb6d7026f158dc893546c2fc8c082f8db18bc3d1ec0ca6d2b5d93 |
| 18 / 15 | 2026-10-29T17:07:30.439Z | main, self, sell 0.005 SOL to minimum 1.268596 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x16e1bc0b52d60a7a1fa17ea23f53405d8e4f30e900ecf15b06cc53097dd9dd16 |
| 19 / 16 | 2026-10-29T17:07:32.139Z | main, self, sell 0.005 SOL to minimum 1.800072 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x5483de21ffd63279c8c988c5a6ad31af878a833ce4059898fdad7020d5b5c063 |
| 20 / 17 | 2026-10-29T17:07:31.929Z | main, self, sell 0.005 SOL to minimum 1.795799 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x24018dbfcf5d75b67a156c163ce8ed741ae90fa9081696ef37ff343c2fe2b6ae |
| 21 / 18 | 2026-10-29T17:07:32.216Z | main, self, sell 0.005 SOL to minimum 1.796664 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x009ea653c4ff45e19b1cfdf831c81926f80dbc65132b602c56eb31b8eae8475a |
| 11 / 8 | 2026-10-29T17:07:32.549Z | main, self, sell 0.005 SOL to minimum 1.807697 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xf0f151b9f7536fd2423c400e3e9f1736f41c999e6e14e90faaedd6ae68ec2543 |
| 22 / 19 | 2026-10-29T17:07:32.824Z | main, self, sell 0.005 SOL to minimum 1.796664 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x1e57b5e43f258008ebf530f21b05557cccf228dceb6b0f434cd3f44500175a57 |
| 23 / 20 | 2026-10-29T17:07:33.031Z | main, self, sell 0.005 SOL to minimum 1.795293 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xfefdd66554900bc0e01cf06d64486a12386834134a2e7ad491636cb99c50eab2 |
| 24 / 21 | 2026-10-29T17:07:33.356Z | main, self, sell 0.005 SOL to minimum 1.795293 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x10346343e2098b60c458313082e8e16800591a0674a5bb002d63dcd1df4cc060 |
| 25 / 22 | 2026-10-29T17:07:34.421Z | main, self, sell 0.005 SOL to minimum 1.806206 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x4fe2692c9fcc1d515da74d9539541cd686cdf08f83bec41a110537974862383b |
| 26 / 23 | 2026-10-29T17:07:34.510Z | main, self, sell 0.005 SOL to minimum 1.267926 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x6e7dd55e1735acf905cd5770a17e5376ac0dc0b3f45bc0c3a973002bac757484 |
| 27 / 24 | 2026-10-29T17:07:34.765Z | main, self, sell 0.005 SOL to minimum 1.805942 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x846dc9a4b86b785a344683fa6f82b04928073f62b8ff9034420b03d40a2820d8 |
| 28 / 25 | 2026-10-29T17:07:34.687Z | main, self, sell 0.005 SOL to minimum 1.26856 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x961f9b7919a0eef5e9d1d567af0750df56f194211fd269cae74e86284b545cd0 |
| 29 / 26 | 2026-10-29T17:07:33.887Z | main, self, sell 0.005 SOL to minimum 1.268614 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x90497b9b8126e53d38a9efd4704b22d447f4019398f530c4fd852aee552ca0f8 |
| 30 / 27 | 2026-10-29T17:07:33.880Z | main, self, sell 0.005 SOL to minimum 1.268614 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xcced594676be0b210172fd758c63e7c451d5d91b7d4c3ca1df7de4973955ba8b |
| 31 / 28 | 2026-10-29T17:07:34.961Z | main, self, sell 0.005 SOL to minimum 1.268614 JUP | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xb9366eaa0cd66485c3d99c3c38cf762b842121da7178e359c548369d8a9bf6cd |

### Cleanup orders

All cleanup orders below timed out and were later cancelled. **Ownership unknown:** no returned solution or failed settlement signature was recovered for them either. Received balances are not counted as fills of this run; reused wallet balance provenance is not fully reconciled.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 6 | 2026-10-29T17:08:47.830Z | cleanup, self, sell 1.816902 JUP to minimum 4938610 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x85444c7b8a53e42b0eded8b1fd032c6da4daccb6dba190ff27184f3401f6a9dd |
| - / 7 | 2026-10-29T17:08:48.413Z | cleanup, self, sell 1.815503 JUP to minimum 4948468 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x7124129b6f3b97a93b98c18c3fdfeb5c840cb9745f074e109f33ce6627753acc |
| - / 8 | 2026-10-29T17:08:48.668Z | cleanup, self, sell 1.815503 JUP to minimum 4951209 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x44128370f0c0cba4dc4f75eee4780320bad22d116a11f8d0a0493e5d74b2ad3f |
| - / 9 | 2026-10-29T17:08:51.211Z | cleanup, self, sell 1.815503 JUP to minimum 4951209 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x91cf077faceb8d7c9bfc8b608e117305e561aef3ec5c17e60957673cdc627590 |
| - / 11 | 2026-10-29T17:08:57.515Z | cleanup, self, sell 1.815503 JUP to minimum 4948120 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xf8adcf3f4f2adb470a847f2c18822ec0496916f18f295eed1ec84616daf028bd |
| - / 13 | 2026-10-29T17:09:00.190Z | cleanup, self, sell 1.815503 JUP to minimum 4948438 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x2e36dac9f337297aa8ec3e803d7267d93f700c0b905e1252c9d43e73b7a03f78 |
| - / 14 | 2026-10-29T17:09:01.676Z | cleanup, self, sell 1.814851 JUP to minimum 4946007 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x187bc7bdbc073adcb261c0062a56a79978870e51769f42cb9bda9d962fa2d825 |
| - / 16 | 2026-10-29T17:09:10.260Z | cleanup, self, sell 1.814851 JUP to minimum 4947003 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xa078b61783175ba8d746d1ab086ae430e321c75fd76f325b0841067ca2e14f85 |
| - / 17 | 2026-10-29T17:09:13.469Z | cleanup, self, sell 1.815151 JUP to minimum 4947586 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xb5598935b542a233a583d9b248cfa1440d4d6654b0864f1e78ef4040ff6aa385 |
| - / 18 | 2026-10-29T17:09:15.280Z | cleanup, self, sell 1.815151 JUP to minimum 4894123 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xcd61648795dc228bdedc993d5db9d32a222ef0429beacb97bd7564fa8a36eb61 |
| - / 19 | 2026-10-29T17:10:09.337Z | cleanup, self, sell 1.814851 JUP to minimum 4946471 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x286f3bf308e4d6e631a8bb0a53261b0cac6657d1fc9fd71900407ce67865b958 |
| - / 20 | 2026-10-29T17:10:12.338Z | cleanup, self, sell 1.814851 JUP to minimum 4948804 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x14b3035c9aca5a404e1ad7eaa0d38c19550be3514a57e1cbc990f4ee18f5dab0 |
| - / 21 | 2026-10-29T17:10:15.517Z | cleanup, self, sell 3.630004 JUP to minimum 9902168 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x537dd710237a6702f1c6456765333caa408d3d8626942a8a471c35213ea36687 |
| - / 22 | 2026-10-29T17:10:20.273Z | cleanup, self, sell 1.814851 JUP to minimum 4946208 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xd14ae14e25eb685eec1d5988f7c3f64b9aa5daed849755d89fcc467cd2abd409 |
| - / 24 | 2026-10-29T17:10:33.620Z | cleanup, self, sell 1.815151 JUP to minimum 4948070 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x386498fea44611319fc52b05789fd073af640370abde13bbc8917f8790aff0c3 |
| - / 6 | 2026-10-29T17:28:45.655Z | cleanup, self, sell 1.816902 JUP to minimum 3453597 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xc17f290a3d1f7788f032508fdb4a573332663abd8bc8e7dba10651ca22c348e2 |
| - / 7 | 2026-10-29T17:28:48.856Z | cleanup, self, sell 1.815503 JUP to minimum 3451159 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xce5868245048568c9754771efd5536e98e44748b9266fc87d61f200a8891a957 |
| - / 8 | 2026-10-29T17:28:49.844Z | cleanup, self, sell 1.815503 JUP to minimum 3335699 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x30fbd30856a4ad0ea6069e93f7fe94d7770f21998856d35ab8de778336a7cd94 |
| - / 9 | 2026-10-29T17:28:52.669Z | cleanup, self, sell 1.815503 JUP to minimum 3451247 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x223c1d05ebe470d8abc35560454a51456b5a9c30073f952c97e86f8a929b70a9 |
| - / 11 | 2026-10-29T17:28:53.717Z | cleanup, self, sell 1.815503 JUP to minimum 3335753 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x8e8ccf0ad9f24659c9da0a3cc0bd0b736abd75a84fc548b95c9dffc18fa3769d |
| - / 13 | 2026-10-29T17:28:59.868Z | cleanup, self, sell 1.815503 JUP to minimum 3335712 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xaad57189c522ea0300b9a685f75a97348dbaa456746000a554f96c5f786ce8b7 |
| - / 14 | 2026-10-29T17:29:02.090Z | cleanup, self, sell 1.814851 JUP to minimum 3451820 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x0c4ca18c372ba03bd8f529cab1760ae83f35c17f4dedfac99d041cc4057576f2 |
| - / 16 | 2026-10-29T17:29:02.397Z | cleanup, self, sell 1.814851 JUP to minimum 3447795 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xb62e3d4398d110388fdcc5a0d81b525275ec04a6ca649c0f5e294d40c81cd54d |
| - / 17 | 2026-10-29T17:29:05.108Z | cleanup, self, sell 1.815151 JUP to minimum 3332864 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x08d480cbf1236a6493d018630c9d2d9494d29f781beb940961971b8b5a75f93b |
| - / 18 | 2026-10-29T17:29:05.235Z | cleanup, self, sell 1.815151 JUP to minimum 3448398 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x2e0104039809985f31bcdc27134f644b7ed6dcf5a2812651ba15a67cee8fd0a6 |
| - / 19 | 2026-10-29T17:30:01.248Z | cleanup, self, sell 1.814851 JUP to minimum 3455418 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xb06828bed8c7fac27ab159726aafc289a88e6568422279801bdd6d0aa9b2d526 |
| - / 20 | 2026-10-29T17:30:13.381Z | cleanup, self, sell 1.814851 JUP to minimum 3411224 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xca0b888007078ffe1a7001f32b63bf1fc8a8dd82d54d15f1b46d518ef8cb664f |
| - / 21 | 2026-10-29T17:30:23.172Z | cleanup, self, sell 3.630004 JUP to minimum 8316278 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x18a19b7b62198885664207794dabd9395c27e426c6bb4b2fc2c89090e8a27e48 |
| - / 22 | 2026-10-29T17:30:20.651Z | cleanup, self, sell 1.814851 JUP to minimum 3454484 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x9dc3f7028e5cea171930b2f1913e174005f152d393bbdf857aacc81ce04c675c |
| - / 24 | 2026-10-29T17:30:22.377Z | cleanup, self, sell 1.815151 JUP to minimum 3440147 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x06f79226157487a5e0c9e9b452cc8ec74bcefa41daebe25426341975a883c69f |

### Recovery checkpoint

The final checkpoint has `finished=false` and 30 unresolved records overall (27 `Order lookup timed out`, 3 `Order was not found in the API`). These are recovery lookup results, not additional settlement failures. All placed order exports are cancelled. CoW should reconcile these UIDs against the final exports before further wallet cleanup; ending report metadata does not prove recovery completed.

| Scenario row / trader | Recovery error | Order evidence |
| --- | --- | --- |

Saved leftovers: trader 6: 1.816902 JUPyiw...; trader 7: 1.815503 JUPyiw...; trader 9: 1.815503 JUPyiw...; trader 8: 1.815503 JUPyiw...; trader 11: 1.815503 JUPyiw...; trader 13: 1.815503 JUPyiw...; trader 14: 1.814851 JUPyiw...; trader 16: 1.814851 JUPyiw...; trader 17: 1.815151 JUPyiw...; trader 18: 1.815151 JUPyiw...; trader 19: 1.814851 JUPyiw...; trader 20: 1.814851 JUPyiw...; trader 21: 3.630004 JUPyiw...; trader 22: 1.814851 JUPyiw...; trader 24: 1.815151 JUPyiw...; trader 6: 1.816902 JUPyiw...; trader 7: 1.815503 JUPyiw...; trader 8: 1.815503 JUPyiw...; trader 9: 1.815503 JUPyiw...; trader 11: 1.815503 JUPyiw...; trader 13: 1.815503 JUPyiw...; trader 14: 1.814851 JUPyiw...; trader 18: 1.815151 JUPyiw...; trader 16: 1.814851 JUPyiw...; trader 17: 1.815151 JUPyiw...; trader 19: 1.814851 JUPyiw...; trader 20: 1.814851 JUPyiw...; trader 22: 1.814851 JUPyiw...; trader 21: 3.630004 JUPyiw...; trader 24: 1.815151 JUPyiw.... These do not prove solver fills.

</details>

## 3. Sell bursts

The throughput goal was not achieved. None of the 4, 8, 16 and 32 order waves or the additional 24 requests filled; no sustained rate ceiling can be inferred.

<details>
<summary>Order evidence and metrics</summary>

Session: `2026-10-29-17-03-composite-cicada-run`. Start/end: 2026-10-29T17:10:58.529Z / 2026-10-29T17:18:29.002Z. Planned: 84. Main placed: 84. Acquisition placed: 0. Fills and successful settlements: 0. Fill timing: unavailable. Cleanup orders excluded: 6.

**Ownership unknown.** These orders have the same missing solve outcome described in the standard pair evidence. All later became cancelled; no failed settlement signatures are available to decode. CoW should recover the HTTP response completion before assigning a repair owner.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 2026-10-29T17:12:09.880Z | main, self, sell 0.0025 SOL to minimum 0.101105 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x68aa26f1530897d6401b201479a450e937a9bc62c7d327a4b2faf33de0494e36 |
| 33 / 30 | 2026-10-29T17:12:07.791Z | main, self, sell 0.003 SOL to minimum 0.151621 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x504047b47d30442ad1f7ab81aa02bdeda8f91fe99d88ac7687fe129e4f6e0798 |
| 34 / 31 | 2026-10-29T17:12:09.022Z | main, self, sell 0.0035 SOL to minimum 0.352309 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xaf4bad4774d8deabd2638f29d2ad896dba2f46dca16aa958e58d10b3ba0a160e |
| 35 / 32 | 2026-10-29T17:12:08.679Z | main, self, sell 0.004 SOL to minimum 0.240892 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x442cf5ab15127701738b201b7c1ab0d2d697bd3c8b99de9c2973ad39ebcbd865 |
| 38 / 31 | 2026-10-29T17:13:38.998Z | main, self, sell 0.0035 SOL to minimum 0.340765 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x7ecd3ebe951986bebcf35d058e01957a2a90e9492c939b5be6717d19d09d3b69 |
| 40 / 33 | 2026-10-29T17:13:39.145Z | main, self, sell 0.0025 SOL to minimum 0.10094 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xf643df68d6a5f76466ca13cfca6dd148286bf2be59f9f776dfe6f61e8f66eb0b |
| 41 / 34 | 2026-10-29T17:13:39.811Z | main, self, sell 0.003 SOL to minimum 0.302037 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x39f6e257666cde2a2e91bff6d301e242830dd59b70de556ffcdba1ee54064c37 |
| 42 / 35 | 2026-10-29T17:13:40.415Z | main, self, sell 0.0035 SOL to minimum 0.201931 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xd03d9cf560c906efd56b6c151d641e4fbb95afd7f7b7139e51a2e9d059f77a80 |
| 43 / 36 | 2026-10-29T17:13:40.603Z | main, self, sell 0.004 SOL to minimum 0.251773 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x6e77154e5003c82f4dba3dcd7122845789bed066c8393b5780a65acf25dea15f |
| 39 / 32 | 2026-10-29T17:13:41.290Z | main, self, sell 0.004 SOL to minimum 0.402379 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x16f51c7f5a96da91a70178b0196de7351887aaba5c5c8a22bfd84a491422f689 |
| 37 / 30 | 2026-10-29T17:13:43.294Z | main, self, sell 0.003 SOL to minimum 0.30138 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x44a5c37b64a8747461084e4ba08dc8671f2cdf396e8455dc72228e4a6e48223d |
| 36 / 29 | 2026-10-29T17:13:43.378Z | main, self, sell 0.0025 SOL to minimum 0.250877 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x3b4244e3cc9e47edd4b8122f1b2158e66b5877e9c92ae5e8370ea3542e3c2d83 |
| 46 / 31 | 2026-10-29T17:15:12.536Z | main, self, sell 0.0035 SOL to minimum 0.352716 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x749d86d865e9ba96f5e24bca0a1ec7fd026b51d624cb70c0f58e438da51a6131 |
| 48 / 33 | 2026-10-29T17:15:14.001Z | main, self, sell 0.0025 SOL to minimum 0.25168 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xdf5d1349740e9949473cbfd490dc45c2a86583631e834d8ae14ac298b03b0a21 |
| 49 / 34 | 2026-10-29T17:15:14.399Z | main, self, sell 0.003 SOL to minimum 0.301091 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xed08328a24792e8085cbcd6785ce0a4830dc1a550dff2458fec7c31484319d9a |
| 50 / 35 | 2026-10-29T17:15:15.796Z | main, self, sell 0.0035 SOL to minimum 0.352716 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x9e9541d493bdd5163dacb54a0a158a4d2b4b52ea95c6594e8294f5c7e31c97d2 |
| 51 / 36 | 2026-10-29T17:15:09.574Z | main, self, sell 0.004 SOL to minimum 0.403248 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x6c422ed3d3b7cf6fe3a866252339938811a49d5e3a84b7e8f2d724ceefbef45d |
| 47 / 32 | 2026-10-29T17:15:10.602Z | main, self, sell 0.004 SOL to minimum 0.403042 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x78d99193f25c348c5edc8ff9a9c62757046ffd57c135b988c6cde9d1657328b5 |
| 45 / 30 | 2026-10-29T17:15:10.399Z | main, self, sell 0.003 SOL to minimum 0.302219 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x8c9e7503dd64ea980f3905b77f471391ad85fa9a404e7b756bb2fe9c4708fc9a |
| 52 / 37 | 2026-10-29T17:15:15.193Z | main, self, sell 0.0025 SOL to minimum 0.101034 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xd29d02ac9aef410117d8525015ae3945744aeaa6c71ccb29bccc818182b368bb |
| 53 / 38 | 2026-10-29T17:15:17.380Z | main, self, sell 0.003 SOL to minimum 0.302094 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xc9b301d65fb3cf924defff8ba23f85f1409729ccf1af867cc48782f8cfebda8b |
| 54 / 39 | 2026-10-29T17:15:17.625Z | main, self, sell 0.0035 SOL to minimum 0.202083 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xca85443cd45f647d87ac65f291436dfb9110b8dcaae128b2277fd02a4c0bdcc7 |
| 55 / 40 | 2026-10-29T17:15:16.726Z | main, self, sell 0.004 SOL to minimum 0.25276 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xc7b4426c38f2ac3a55c6602c55bb761af89034b63254029073cd0bf2d15f0d67 |
| 56 / 41 | 2026-10-29T17:15:14.594Z | main, self, sell 0.0025 SOL to minimum 0.10118 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x514165962cf0643d8ae114900c0d84881c20962fb64a3f5fd3702efdc969cb68 |
| 57 / 42 | 2026-10-29T17:15:17.039Z | main, self, sell 0.003 SOL to minimum 0.151458 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xffeafe69df382fb590990f5a9083f70b6c6c536c7f21071fb83542915a6d5208 |
| 58 / 43 | 2026-10-29T17:15:13.720Z | main, self, sell 0.0035 SOL to minimum 0.19965 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xf132f879d2c0e0c254d0eb7d61476768e9e4f1d70a0e3128be8936f8f888c669 |
| 59 / 44 | 2026-10-29T17:15:16.066Z | main, self, sell 0.004 SOL to minimum 0.25021 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xdde2f8922e38324dad98ccbf2c68c7fa0c7009d3796361827e61c1523dc43ae7 |
| 44 / 29 | 2026-10-29T17:15:15.104Z | main, self, sell 0.0025 SOL to minimum 0.2515 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xb1e3d7bd46531a40c637234f6ba14ae1f18beb1bf5ed7359007f5a39fb55d2dc |
| 61 / 30 | 2026-10-29T17:16:45.314Z | main, self, sell 0.003 SOL to minimum 0.301964 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xc4446ab8cccd530985a6268092315bf2e4e80afd4503dc276d26320b1fd520f0 |
| 63 / 32 | 2026-10-29T17:16:43.593Z | main, self, sell 0.004 SOL to minimum 0.402923 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xe04554fdbe99244e8356775658c2e9e95a5be93112df3505ea2b2b4e63e708e2 |
| 64 / 33 | 2026-10-29T17:16:44.199Z | main, self, sell 0.0025 SOL to minimum 0.251485 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x0ef8f597b4af9863dcf9acda1f725ad0ec391dd0140e1018547f387469605ed1 |
| 65 / 34 | 2026-10-29T17:16:45.584Z | main, self, sell 0.003 SOL to minimum 0.30202 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xff1fb2c2317a25fb74af43230d0d791a06efdee9d0bcdf9244f0732c2187fcb1 |
| 72 / 41 | 2026-10-29T17:16:46.598Z | main, self, sell 0.0025 SOL to minimum 0.251556 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x5b721989e3b2ad629dd44f555469de153fb49e5810c5f83516fcc14d048953df |
| 60 / 29 | 2026-10-29T17:16:45.153Z | main, self, sell 0.0025 SOL to minimum 0.251485 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x92235245843982b9b8eaa6d81d71ac5e2671ad9717e4891a3b2dde85e7410237 |
| 68 / 37 | 2026-10-29T17:16:45.996Z | main, self, sell 0.0025 SOL to minimum 0.251441 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xc6d6da324c9dbf7ecb3fe0f666d53473535d42f9979cd8e2c787216085c13a31 |
| 75 / 44 | 2026-10-29T17:16:49.203Z | main, self, sell 0.004 SOL to minimum 0.402832 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x64a4cc34cd628dbfce9026e44ea57c64c0cac3b7ffcd4f3b3690e349915fcfd2 |
| 71 / 40 | 2026-10-29T17:16:47.096Z | main, self, sell 0.004 SOL to minimum 0.401213 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x3f756240ce0c8c7bf8e09eb2e2ad000ba82341b5429937fffb1db45d20ff753b |
| 70 / 39 | 2026-10-29T17:16:48.212Z | main, self, sell 0.0035 SOL to minimum 0.35235 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xfcd2074381aa52eb47ab9dcb943b643c0f7b8bd7f9976d29aeb3c3f8557522e9 |
| 67 / 36 | 2026-10-29T17:16:48.493Z | main, self, sell 0.004 SOL to minimum 0.402818 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x4e2e526108d6c38b03d8c80e6e6bf16abb39f1ef8ee9dd0cfd744674cf10d4c4 |
| 62 / 31 | 2026-10-29T17:16:48.793Z | main, self, sell 0.0035 SOL to minimum 0.352376 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x2a8ae7f06bb93cae99dbcd0b2a18235925c65d5dd4a8c82edc48195c635e44ab |
| 74 / 43 | 2026-10-29T17:16:49.715Z | main, self, sell 0.0035 SOL to minimum 0.352372 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x8c851c3951f28e954f620ec7ff1927ca017e7f60360a0a619cc53b5ab298a2e0 |
| 66 / 35 | 2026-10-29T17:16:48.999Z | main, self, sell 0.0035 SOL to minimum 0.352372 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x1779abf20f81af700fdd6f049bfa7ffbcb3a6cc840015674503604310aed6b14 |
| 73 / 42 | 2026-10-29T17:16:49.777Z | main, self, sell 0.003 SOL to minimum 0.301964 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x26f15b3fe336d5e0ff6917165192a69610d5d58deb6dc99df770f1dc2a2e5b0b |
| 69 / 38 | 2026-10-29T17:16:49.845Z | main, self, sell 0.003 SOL to minimum 0.301964 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x21038be885c1c2fbed814926399a8e008ddd27758265ae4be94b87504ae21240 |
| 76 / 45 | 2026-10-29T17:16:50.092Z | main, self, sell 0.0025 SOL to minimum 0.100887 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xb8c57517212df2b2c561c750d6baa36ab3901d1a1a687fc6c3d56e74a2109d5f |
| 77 / 46 | 2026-10-29T17:16:50.228Z | main, self, sell 0.003 SOL to minimum 0.151366 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x2441acee966e478c0e0ecc234524f7ecf682f30dda7c174693d5303662be8ed6 |
| 78 / 47 | 2026-10-29T17:16:50.390Z | main, self, sell 0.0035 SOL to minimum 0.201845 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xe9abdb9a23ebda612e567b006b3a58ea676a76c5bc82f18fa8e6f0d44bb2454a |
| 83 / 52 | 2026-10-29T17:16:50.692Z | main, self, sell 0.004 SOL to minimum 0.250661 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xeac92e16874f256e4c025efa86193cfca2898c924570a6befbf7812482ff27ef |
| 80 / 49 | 2026-10-29T17:16:50.923Z | main, self, sell 0.0025 SOL to minimum 0.100872 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xb4ee548008447652e9dd223fdf9476ed5b42617ab59fd2be9b13c7ea60130947 |
| 81 / 50 | 2026-10-29T17:16:50.939Z | main, self, sell 0.003 SOL to minimum 0.30087 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xd12a3588e7f06a6fcee40945e07d5b80d73c975fa30c5fb1b2585a803526138b |
| 82 / 51 | 2026-10-29T17:16:52.141Z | main, self, sell 0.0035 SOL to minimum 0.200741 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xdb35ae4332377d865e88884314e2191529882f447e44ceeea5bf573c5680144c |
| 79 / 48 | 2026-10-29T17:16:53.279Z | main, self, sell 0.004 SOL to minimum 0.401934 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x0028a89b0f6a6685b00d6a35d646a7369c93b7c0b05772d919c53ff8195f0e53 |
| 98 / 43 | 2026-10-29T17:18:13.964Z | main, self, sell 0.0035 SOL to minimum 0.349537 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x243891978384d0007b129a74d5a3faf07c32ccace43944aae13c6eba112a0d46 |
| 102 / 47 | 2026-10-29T17:18:14.577Z | main, self, sell 0.0035 SOL to minimum 0.349309 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x78684772e53e74553ce24390f98e02d8bb91d1f2c693d1499c4685171005d45b |
| 87 / 32 | 2026-10-29T17:18:15.267Z | main, self, sell 0.004 SOL to minimum 0.399778 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xd8df986f5f35eb23dd59bb1c60b66572dff6094f0999f7c55b3ab98a082123ec |
| 88 / 33 | 2026-10-29T17:18:15.964Z | main, self, sell 0.0025 SOL to minimum 0.251 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x28d471e178d482feac219818bd3b5c13b39a6d91eff579c0f74eb48f5d14affd |
| 84 / 29 | 2026-10-29T17:18:17.368Z | main, self, sell 0.0025 SOL to minimum 0.251 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x01a4e2029e4d13f14e5d02d7a35208c509317e79bda8c0ac83d500d47e9f3259 |
| 85 / 30 | 2026-10-29T17:18:17.782Z | main, self, sell 0.003 SOL to minimum 0.298867 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x8cd498bc53ffe027c7f8ae4007f97421f100995573ccb7fa4c35f95324c695fa |
| 89 / 34 | 2026-10-29T17:18:19.092Z | main, self, sell 0.003 SOL to minimum 0.298069 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xd088aafb68475bd6864085a93e2440aec7e9ccc586971d1da53b5c9fbfcb1cb0 |
| 92 / 37 | 2026-10-29T17:18:17.079Z | main, self, sell 0.0025 SOL to minimum 0.251484 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xf5cb4fe0b859bc33ee6cf1be5e3b819195c4e8c36a9da5b198f4df69fc4a69a4 |
| 96 / 41 | 2026-10-29T17:18:18.074Z | main, self, sell 0.0025 SOL to minimum 0.251484 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x06241583b66cdfacde43ee6603d97a7e70804118aa42b4682f671fcd7f9d2ef5 |
| 95 / 40 | 2026-10-29T17:18:18.676Z | main, self, sell 0.004 SOL to minimum 0.402919 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xb5942d4e12d622ed26dcc55bbf1e6c14d16da74fc4808dfbdbab18dc1972e718 |
| 94 / 39 | 2026-10-29T17:18:20.178Z | main, self, sell 0.0035 SOL to minimum 0.352515 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x2cdbd27389d87135001a25f832bbdd21993cb07a72dca9bdae445456e335a477 |
| 91 / 36 | 2026-10-29T17:18:21.091Z | main, self, sell 0.004 SOL to minimum 0.402898 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xef5eaf22e2f3fc25299259d6815314c5c6d09dadba944f5352b2f63e7aa55439 |
| 86 / 31 | 2026-10-29T17:18:20.881Z | main, self, sell 0.0035 SOL to minimum 0.352364 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x8cabecb79a8af2ae41a5835a19cfca8675710856b6397c891fda9acd8ba94fa0 |
| 90 / 35 | 2026-10-29T17:18:21.392Z | main, self, sell 0.0035 SOL to minimum 0.352364 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x7848e3c984b5221a37880fd074cc16a397062117a0f13546fa7666eaffb17b5f |
| 99 / 44 | 2026-10-29T17:18:22.079Z | main, self, sell 0.004 SOL to minimum 0.402831 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x426b17aa6edbf1535cba2ad5e4ceb51cd6fba09f0cc2a927fb3b68e767a041a5 |
| 97 / 42 | 2026-10-29T17:18:22.776Z | main, self, sell 0.003 SOL to minimum 0.297901 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x91a8f42a39409cf79c3e7c0445092c0b250dab0900d52ac314974022d7d5360e |
| 93 / 38 | 2026-10-29T17:18:23.461Z | main, self, sell 0.003 SOL to minimum 0.301911 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xd2f173efd76ea118ccdb5b874e2a671e96129ad0b17c3e55b6af2e19ae8fb11b |
| 100 / 45 | 2026-10-29T17:18:23.784Z | main, self, sell 0.0025 SOL to minimum 0.251441 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x4ea855b431c2151db00746309daf80907d3cb3b60f9c5b2dc02c147f61815ddf |
| 101 / 46 | 2026-10-29T17:18:23.964Z | main, self, sell 0.003 SOL to minimum 0.301911 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x79f9cc010a42f3cdcbf248ba526469573d8acb692ece43952f130fcf876cebcf |
| 107 / 52 | 2026-10-29T17:18:24.267Z | main, self, sell 0.004 SOL to minimum 0.402829 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xe510036ae1fff1c5df8d73881ff58d0365b1fff6542cc31dada260d1ac979f2f |
| 104 / 49 | 2026-10-29T17:18:24.507Z | main, self, sell 0.0025 SOL to minimum 0.24744 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xc346836a01ff7bd0ddf4683eecc9c9d0dbd3d576d1ca152c12587aa21afa2c41 |
| 105 / 50 | 2026-10-29T17:18:24.677Z | main, self, sell 0.003 SOL to minimum 0.298841 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xe1ca5feaf8e725770ec6f49850434c4627f1e5bec43c3cc0c8a65d23fe822ce2 |
| 106 / 51 | 2026-10-29T17:18:24.773Z | main, self, sell 0.0035 SOL to minimum 0.352362 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xde6c0d568f35f5be19bfd303676a577f1764e1e01beacc76bb3cb75860cf0488 |
| 103 / 48 | 2026-10-29T17:18:24.790Z | main, self, sell 0.004 SOL to minimum 0.402829 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x9f403d9f973e27cd56057740067d3110ef7ee8b0e97afa22ccd34bd13fd1ee5f |
| 108 / 53 | 2026-10-29T17:18:25.071Z | main, self, sell 0.0025 SOL to minimum 0.098944 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x80594048c60040cdb6ddc90d9e8cbafd43eeee7f015e73ca3c1f121cfe319ff5 |
| 109 / 54 | 2026-10-29T17:18:25.482Z | main, self, sell 0.003 SOL to minimum 0.149405 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x5d47cc0b525c291af6b3247a51044589af55b2b047b6198fa84752111e4686b1 |
| 110 / 55 | 2026-10-29T17:18:25.610Z | main, self, sell 0.0035 SOL to minimum 0.201909 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xfbbc76f71eddbcf6385a2bf4b4ced198c43e2ab4f29feb7832b82378eca200f2 |
| 111 / 56 | 2026-10-29T17:18:25.724Z | main, self, sell 0.004 SOL to minimum 0.25078 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xcd440429bd9c8a67b597457dd5874879b37a98d5d2a2e254b92824f34fa25a2f |
| 112 / 57 | 2026-10-29T17:18:25.837Z | main, self, sell 0.0025 SOL to minimum 0.099386 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x4576aad2b50566da89f3c0714e442a197277e2c1ef7950299676f6cbfdc6951f |
| 113 / 58 | 2026-10-29T17:18:28.992Z | main, self, sell 0.003 SOL to minimum 0.149846 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x73569b0b381ca1da9dcb8125d341507ab07012e583eeeb4d3e85356c40cdcce4 |
| 114 / 59 | 2026-10-29T17:18:28.155Z | main, self, sell 0.0035 SOL to minimum 0.201909 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xc9674d8a57e24450215d676351f1f69f4902aaba36cc8ad5c725e66a8a14ed05 |
| 115 / 60 | 2026-10-29T17:18:28.283Z | main, self, sell 0.004 SOL to minimum 0.252376 USDC | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x384524a08b55223fb9833c761c5d6accfcf05f50673ada8339e4aef3c0b62049 |

### Cleanup orders

All cleanup orders below timed out and were later cancelled. **Ownership unknown:** no returned solution or failed settlement signature was recovered for them either. Received balances are not counted as fills of this run; reused wallet balance provenance is not fully reconciled.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 31 | 2026-10-29T17:19:46.030Z | cleanup, self, sell 0.355402 USDC to minimum 3470539 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x56c9e77d0120920f74ed35ecbbbcabe6f31872d0eeae384b6216d548b1d2796e |
| - / 34 | 2026-10-29T17:19:47.844Z | cleanup, self, sell 0.304753 USDC to minimum 2974283 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xa8eef52b7176c10e6ff4e9d9d24debd15aae5a937023fe1eb77f21adafc26b6e |
| - / 38 | 2026-10-29T17:19:50.284Z | cleanup, self, sell 0.303327 USDC to minimum 2958566 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x3fe84e57a4d9f2f5cb2352e6b6ca97875631a8514f3a0697879faabfe872d122 |
| - / 50 | 2026-10-29T17:20:34.215Z | cleanup, self, sell 0.304469 USDC to minimum 2969866 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x0338d91a5294551a865a39443bfbaa07fff07e8892cd62a33ae9d2b135a1d042 |
| - / 31 | 2026-10-29T17:31:41.770Z | cleanup, self, sell 0.355402 USDC to minimum 1989442 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0x82d616ad85b13f3faa93210ff85bd6602cb0bfd13741c4211df7586fa1b30a70 |
| - / 50 | 2026-10-29T17:31:44.712Z | cleanup, self, sell 0.304469 USDC to minimum 1491988 base units 11111111111111111111111111111111 | cleanup timeout; cancelled, no fill recorded | https://debug.barn.cow.fi/order/0xf34e860e7d4fdc8176ebdd7459d1638cfbb1bf24a879336bec780f23d3a4598c |

### Recovery checkpoint

The final checkpoint has `finished=false` and 30 unresolved records overall (27 `Order lookup timed out`, 3 `Order was not found in the API`). These are recovery lookup results, not additional settlement failures. All placed order exports are cancelled. CoW should reconcile these UIDs against the final exports before further wallet cleanup; ending report metadata does not prove recovery completed.

| Scenario row / trader | Recovery error | Order evidence |
| --- | --- | --- |

Saved leftovers: trader 31: 0.355402 EPjFWd...; trader 34: 0.304753 EPjFWd...; trader 38: 0.303327 EPjFWd...; trader 50: 0.304469 EPjFWd...; trader 31: 0.355402 EPjFWd...; trader 50: 0.304469 EPjFWd.... These do not prove solver fills.

</details>

## 4. Opposite orders

Direct matching is inconclusive. No main order was placed, so opposite orders were not available together for the test.

<details>
<summary>Order evidence and metrics</summary>

Session: `2026-10-29-17-03-composite-cicada-run`. Start/end: 2026-10-29T17:20:53.459Z / 2026-10-29T17:23:37.874Z. Planned: 15. Main placed: 0. Acquisition placed: 0. Fills and successful settlements: 0. Fill timing: unavailable. Cleanup orders excluded: 0.

15 sponsored placement requests were rejected (9 main, 6 acquisition). This limits coverage and does not establish a Cicada exact buy limitation.

**Creation diagnosis, CoW/test team.** The original POST response is `400 Bad Request: InvalidTransaction: the bundle must not create the buy token account`. This is a service rejection before solver participation; `prepareTokenAccounts=false`. The sponsored bundle included destination account creation. Confidence is high about the rejection stage, but the evidence does not decide whether client assembly or service policy should change. Self paid placements succeeded at creation, narrowing this to the sponsored path rather than general liquidity. The test team should compare the saved account instructions with the placement contract and prepare the destination account through the user/sponsor placement flow when required. A newly accepted sponsored placement would confirm that fix. ATA creation is not a solver obligation. No requests were replayed.

All 15 main trades were blocked by acquisition or placement. Direct match fees, matching behavior and solver support cannot be judged from this setup.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 62 | 2026-10-29T17:20:54.957Z | Buy SOL to exactly 2.6 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 117 / 64 | 2026-10-29T17:20:55.097Z | Buy SOL to exactly 1.3 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 118 / 65 | 2026-10-29T17:20:55.347Z | Buy SOL to exactly 3.1 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 119 / 66 | 2026-10-29T17:20:55.561Z | Buy SOL to exactly 3.1 USDT, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 120 / 67 | 2026-10-29T17:20:55.688Z | Buy SOL to exactly 1.1 USDT, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 121 / 68 | 2026-10-29T17:20:55.885Z | Buy SOL to exactly 3.2 USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 122 / 61 | 2026-10-29T17:23:24.584Z | Sell 0.02 SOL to USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 123 / 62 | 2026-10-29T17:23:32.281Z | Buy USDC to exactly 0.02 SOL, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 124 / 63 | 2026-10-29T17:23:24.705Z | Sell 0.03 SOL to USDC, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 125 / 64 | 2026-10-29T17:23:30.982Z | Sell 1.2 USDC to SOL, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 126 / 65 | 2026-10-29T17:23:31.290Z | Sell 3 USDC to USDT, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 127 / 66 | 2026-10-29T17:23:31.582Z | Sell 3 USDT to USDC, sponsored | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 128 / 67 | 2026-10-29T17:23:31.889Z | Sell 1 USDT to USDC, sponsored | acquire USDT error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 129 / 68 | 2026-10-29T17:23:32.092Z | Sell 3 USDC to USDT, sponsored | acquire USDC error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 130 / 69 | 2026-10-29T17:23:24.889Z | Sell 0.02 SOL to JUP, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |

### Recovery checkpoint

The final checkpoint has `finished=false` and 30 unresolved records overall (27 `Order lookup timed out`, 3 `Order was not found in the API`). These are recovery lookup results, not additional settlement failures. All placed order exports are cancelled. CoW should reconcile these UIDs against the final exports before further wallet cleanup; ending report metadata does not prove recovery completed.

| Scenario row / trader | Recovery error | Order evidence |
| --- | --- | --- |
| 116 / 62 | Order lookup timed out | Placement rejected; no API order for 0xb94a2ebf499818bc2096f9b041bc88a7d7688298dac045dc660ba89a24824555 |
| 117 / 64 | Order lookup timed out | Placement rejected; no API order for 0xcbcbfa5e8eb8d6d2322d4c523e6c05fd49156542778a372a668496e1efada96b |
| 118 / 65 | Order lookup timed out | Placement rejected; no API order for 0x5754ce38d46d1986a555c251ff895611435497fcbc7c310153d59bf03ea4ad61 |
| 119 / 66 | Order lookup timed out | Placement rejected; no API order for 0x2e8d00844f98ec5b14b2bcbd864c7e73ab88fb99607c72e35692dd55e0ecddf3 |
| 120 / 67 | Order lookup timed out | Placement rejected; no API order for 0x428945c6bfe59f31cce6946d2d9e015049c749c05cfa517668d687e32db0d71f |
| 121 / 68 | Order lookup timed out | Placement rejected; no API order for 0xc001fa46fe2bfaa191ec1f3dca2899daa87ec434377dce9b49fb89f7911ff97b |
| 122 / 61 | Order lookup timed out | Placement rejected; no API order for 0x9afbadf7f7a7b646d55a50479626118a724f39bd28a2cb1a71bf109681ff3c29 |
| 124 / 63 | Order lookup timed out | Placement rejected; no API order for 0x43903b7d2efdf28cf6316dfa8ff82ed8389e14f2d9cd12da23f105dde6754ea7 |
| 130 / 69 | Order lookup timed out | Placement rejected; no API order for 0x362100611fca1d5a6ffcab077e747a1ba018cb9cd8018e89e7c6c0cd4a78aa11 |
| 125 / 64 | Order lookup timed out | Placement rejected; no API order for 0x42fbda2611d137d5f5954e58477f615a1ae5d4f332bd1ce77d92baa6f46cf5ed |
| 126 / 65 | Order lookup timed out | Placement rejected; no API order for 0x65891cb8d4f362dde9fc3942e56559b7c6d5f007b622267147289ea897c32694 |
| 127 / 66 | Order lookup timed out | Placement rejected; no API order for 0xcdc52922614ef5b9d7a10a72d3cde4e2426d84d82b22e04f43c10bc98b9d9358 |
| 128 / 67 | Order lookup timed out | Placement rejected; no API order for 0x3dcb1960c453ac618bf10a253ef872e0e94d1a9b4da7f024f53e5d3766a622aa |
| 129 / 68 | Order lookup timed out | Placement rejected; no API order for 0xbaf1100c5c3382b4306fee0020552e43b6d8055bd43334d7cd005de54c435f54 |
| 123 / 62 | Order lookup timed out | Placement rejected; no API order for 0x33ddf6eadd2c8ca74d7ce258ab3fc3bf83c2719d3c4edf241beb2a95ed741e61 |

</details>

## 5. Token coverage

The token coverage goal was not achieved. Successful fixed input sell tokens and exact output buy tokens are both empty.

<details>
<summary>Order evidence and metrics</summary>

Session: `2026-10-29-17-03-composite-cicada-run`. Start/end: 2026-10-29T17:23:56.834Z / 2026-10-29T17:25:30.504Z. Planned: 52. Main placed: 25. Acquisition placed: 0. Fills and successful settlements: 0. Fill timing: unavailable. Cleanup orders excluded: 0.

**Ownership unknown.** These orders have the same missing solve outcome described in the standard pair evidence. All later became cancelled; no failed settlement signatures are available to decode. CoW should recover the HTTP response completion before assigning a repair owner.

12 sponsored placement requests were rejected (12 main, 0 acquisition). This limits coverage and does not establish a Cicada exact buy limitation.

**Creation diagnosis, CoW/test team.** The original POST response is `400 Bad Request: InvalidTransaction: the bundle must not create the buy token account`. This is a service rejection before solver participation; `prepareTokenAccounts=false`. The sponsored bundle included destination account creation. Confidence is high about the rejection stage, but the evidence does not decide whether client assembly or service policy should change. Self paid placements succeeded at creation, narrowing this to the sponsored path rather than general liquidity. The test team should compare the saved account instructions with the placement contract and prepare the destination account through the user/sponsor placement flow when required. A newly accepted sponsored placement would confirm that fix. ATA creation is not a solver obligation. No requests were replayed.

**Ownership unknown.** These 15 exact buy requests returned `404 Not Found: NoLiquidity: no route found` before placement; no order was created. Cause unknown: the API error is saved, but a matching original engine response was not recovered. This does not prove that tokens lack liquidity or that Cicada rejected them; observed quote competition uses Jupiter. Fixed input sells for corresponding tokens reached placement but did not fill, so they are not successful controls. CoW should join the requests below to their API request IDs and provider responses, comparing requested output base units and maximum input before proposing a route or size change.

Successful fixed input sell tokens: none. Successful exact output buy tokens: none. These were not expected rejections; no Cicada capability notes were supplied. Unverified symbols remain mint addresses.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 134 / 73 | 2026-10-29T17:25:14.409Z | main, self, sell 0.01 SOL to minimum 189384200 base units pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x3c8d47979b9de19e4cbe43bcfe202ff6b9d3cb888cd02c64b638f33f6e206e0f |
| 138 / 77 | 2026-10-29T17:25:17.824Z | main, self, sell 0.01 SOL to minimum 110222 base units XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x16939649563ad3b76691b720141cfc943463910eb4b33375221d8bc2b4ed394c |
| 142 / 81 | 2026-10-29T17:25:19.437Z | main, self, sell 0.01 SOL to minimum 905 base units MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1 | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xf42040b2eab8ad5b065a5613a037c7715fdec08061b5a1344f4337777179b186 |
| 146 / 85 | 2026-10-29T17:25:19.720Z | main, self, sell 0.005 SOL to minimum 11143893036 base units DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xd03124b7293141d6cb1c773d3a6b852abd554b5061ee646301bd2f11bc9ed878 |
| 147 / 86 | 2026-10-29T17:25:15.854Z | main, self, sell 0.005 SOL to minimum 1930992 base units EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x76b476930e279e313dcca120d1ee7ba9917d97f78f99488717d74ee3f69e3ca2 |
| 148 / 87 | 2026-10-29T17:25:19.124Z | main, self, sell 0.005 SOL to minimum 8264358585 base units 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x468a98ee20f70dd80a995bd2a08a7996429c6c902cb7e2b37ef7b72cbf9bdb2f |
| 151 / 90 | 2026-10-29T17:25:23.916Z | main, self, sell 0.005 SOL to minimum 2855894 base units jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xdd8ba455150c2b6aab499fce988b30c6c8804e311d81dd78e041b1b9cea57f6e |
| 152 / 91 | 2026-10-29T17:25:24.232Z | main, self, sell 0.005 SOL to minimum 435 base units cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xd0a5741ef85510077267c063829db90870851370762bf08ee523e9fb97fc70e8 |
| 153 / 92 | 2026-10-29T17:25:24.691Z | main, self, sell 0.005 SOL to minimum 353595833 base units DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x41343675ea9496e7697fa0a5b534873b76b84cc5ff63ef6c65c1a7b6261cb4ca |
| 154 / 93 | 2026-10-29T17:25:24.420Z | main, self, sell 0.005 SOL to minimum 316129 base units HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xdf179845318b04ba31c29f22ba55239fa992e593a5616d9419810372910ff192 |
| 155 / 94 | 2026-10-29T17:25:18.715Z | main, self, sell 0.005 SOL to minimum 306585 base units A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6 | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xeea2e9feb30006dff3273818c13163410899b69a36bafcae30ed8ada050bbe16 |
| 156 / 95 | 2026-10-29T17:25:24.914Z | main, self, sell 0.005 SOL to minimum 78918 base units 27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4 | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x76e5549af70a48c3a59918a9cfbd5f4bbf73c64a324d135448faba6845936b8a |
| 157 / 96 | 2026-10-29T17:25:25.234Z | main, self, sell 0.005 SOL to minimum 2387519 base units 5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x0004bbb32855ebfc59b2e30e1d89372f29ae80742477ca1ff103c200bc87c6e9 |
| 158 / 97 | 2026-10-29T17:25:25.246Z | main, self, sell 0.005 SOL to minimum 15050 base units 7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xb8cc0b04f40ae57142fbf63a3316cb06b72abb57d05d3f0a761119c2e690ea2d |
| 159 / 98 | 2026-10-29T17:25:25.596Z | main, self, sell 0.005 SOL to minimum 47246 base units 9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x8346f5341c5e8f4563d57b8f1b76c7b1ee2e2a03fde6a6d403b5950e0acc8b5b |
| 160 / 99 | 2026-10-29T17:25:25.623Z | main, self, sell 0.005 SOL to minimum 86 base units AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xb5e7e3d9618f9932bbc0f19daeb1507522cbe894fb14bf552c19625ef40a1ea7 |
| 149 / 88 | 2026-10-29T17:25:25.849Z | main, self, sell 0.005 SOL to minimum 2662065 base units J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xdabb9a7ce47a003f166304fdf3554e89ac1a38ad124023bd4b444143c06a0bae |
| 161 / 100 | 2026-10-29T17:25:25.976Z | main, self, sell 0.005 SOL to minimum 93851 base units Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xef773e4c7320f1e721b44aa57b7b357b1224c2f816a93ee01914851460ad84be |
| 150 / 89 | 2026-10-29T17:25:25.993Z | main, self, sell 0.005 SOL to minimum 2462637 base units mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x8969c2ad6ec602cfafdb20992251bde21882970971c619e26004687bdef806bc |
| 162 / 101 | 2026-10-29T17:25:22.736Z | main, self, sell 0.005 SOL to minimum 306637 base units euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x68383443cb1c1881b015a9d80784349a4e062ebe7dd77836f451465b3a9a0012 |
| 163 / 102 | 2026-10-29T17:25:20.922Z | main, self, sell 0.005 SOL to minimum 2674663 base units 9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xd504dbd94858bebdb523f763b281d2eb5d1e2db6f8057d721c8fa8a1ab0335eb |
| 164 / 103 | 2026-10-29T17:25:22.135Z | main, self, sell 0.005 SOL to minimum 76724854 base units MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5 | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x2262905f9749bcce79915c807a69bc57b8ee5d627bbd93b7f68734ee04fabdfd |
| 165 / 104 | 2026-10-29T17:25:22.722Z | main, self, sell 0.005 SOL to minimum 534336757 base units ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82 | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0xfe11e9d2c9aad4ab043c00a0d5fdde2ae74a5f3bf604e8fbae27b62e0e9d299e |
| 166 / 105 | 2026-10-29T17:25:25.479Z | main, self, sell 0.005 SOL to minimum 3217790 base units hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x041906b20783a84cd24879f15162718fa97ad2524132b12a20ed76b6e7869fd8 |
| 167 / 106 | 2026-10-29T17:25:23.652Z | main, self, sell 0.005 SOL to minimum 3152968 base units pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL | main timeout; exported status cancelled; executed input/output 0 | https://debug.barn.cow.fi/order/0x0178f1dc9a305e99516b6ad7151ac96abd66691a9373a83aa28fe23a5d80af01 |
| 131 / 70 | 2026-10-29T17:24:04.378Z | Sell 0.01 SOL to 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 132 / 71 | 2026-10-29T17:24:04.488Z | Sell 0.01 SOL to 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 133 / 72 | 2026-10-29T17:24:04.585Z | Sell 0.01 SOL to 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 135 / 74 | 2026-10-29T17:24:04.784Z | Sell 0.01 SOL to 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 136 / 75 | 2026-10-29T17:24:04.884Z | Sell 0.01 SOL to CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 137 / 76 | 2026-10-29T17:24:04.986Z | Sell 0.01 SOL to XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 139 / 78 | 2026-10-29T17:24:05.187Z | Sell 0.01 SOL to USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 140 / 79 | 2026-10-29T17:24:05.397Z | Sell 0.01 SOL to SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 141 / 80 | 2026-10-29T17:24:05.480Z | Sell 0.01 SOL to Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 143 / 82 | 2026-10-29T17:24:05.582Z | Sell 0.01 SOL to SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 144 / 83 | 2026-10-29T17:24:05.733Z | Sell 0.01 SOL to Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 145 / 84 | 2026-10-29T17:24:05.785Z | Sell 0.01 SOL to XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB, sponsored | main error: 400 Bad Request: InvalidTransaction: the bundle must not create the buy token account | No order created; placement rejected |
| 168 / 70 | 2026-10-29T17:24:08.101Z | Buy SOL to exactly 3.26 9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 169 / 71 | 2026-10-29T17:24:08.296Z | Buy SOL to exactly 88.1 98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 170 / 72 | 2026-10-29T17:24:08.502Z | Buy SOL to exactly 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 171 / 73 | 2026-10-29T17:25:14.662Z | Buy SOL to exactly 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn, self | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 172 / 74 | 2026-10-29T17:24:08.694Z | Buy SOL to exactly 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 173 / 75 | 2026-10-29T17:24:08.891Z | Buy SOL to exactly 0.464 CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 174 / 76 | 2026-10-29T17:24:09.104Z | Buy SOL to exactly 0.00574 XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 175 / 77 | 2026-10-29T17:25:18.049Z | Buy SOL to exactly 0.000597 XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W, self | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 176 / 78 | 2026-10-29T17:24:09.303Z | Buy SOL to exactly 0.464 USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 177 / 79 | 2026-10-29T17:24:09.498Z | Buy SOL to exactly 0.0026 SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 178 / 80 | 2026-10-29T17:24:09.707Z | Buy SOL to exactly 0.00196 Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 179 / 81 | 2026-10-29T17:25:19.527Z | Buy SOL to exactly 0.000427 MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1, self | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 180 / 82 | 2026-10-29T17:24:09.925Z | Buy SOL to exactly 0.00276 SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 181 / 83 | 2026-10-29T17:24:10.097Z | Buy SOL to exactly 0.00277 Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |
| 182 / 84 | 2026-10-29T17:24:10.404Z | Buy SOL to exactly 0.00123 XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB, sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement |

### Recovery checkpoint

The final checkpoint has `finished=false` and 30 unresolved records overall (27 `Order lookup timed out`, 3 `Order was not found in the API`). These are recovery lookup results, not additional settlement failures. All placed order exports are cancelled. CoW should reconcile these UIDs against the final exports before further wallet cleanup; ending report metadata does not prove recovery completed.

| Scenario row / trader | Recovery error | Order evidence |
| --- | --- | --- |
| 131 / 70 | Order lookup timed out | Placement rejected; no API order for 0x540c153cd6e38829ea1e288d6519cff2eb41fb9827517423100adf0e708e2d7d |
| 132 / 71 | Order lookup timed out | Placement rejected; no API order for 0x3e9136af6acfccf4f47f599a6876277f437a9a9800ea0380eb5d17f37b2efc24 |
| 133 / 72 | Order lookup timed out | Placement rejected; no API order for 0x75bb92d732b65e5d97b783e4574690b0c601174ecd967b6480bed3d04215940e |
| 135 / 74 | Order lookup timed out | Placement rejected; no API order for 0x42aba128707ac81885ba99709e48c98bb8f46364d3b1fd5a664ba5da31d383f2 |
| 136 / 75 | Order lookup timed out | Placement rejected; no API order for 0xf5b5e1902a3437f5e1c92b52991cd96a89fe049ca4e151f124fbef30a98bec2c |
| 137 / 76 | Order lookup timed out | Placement rejected; no API order for 0xa7afb545b671850ae580de4f16ede673b0cf227a67fe885c4f5255a8f5e100eb |
| 139 / 78 | Order lookup timed out | Placement rejected; no API order for 0x01f215d7d7d11da0772480b0c0f18b635e2236b89dd5e3a221c2bd98bee836cb |
| 140 / 79 | Order lookup timed out | Placement rejected; no API order for 0x49531b9c11e2fc654369ad73b18537a8ed552d9be6008061dbb0100e518e470e |
| 141 / 80 | Order lookup timed out | Placement rejected; no API order for 0x0327c383b74a94f6e22677bd4218879b738d7866eea04d40e399ca6b4f8919cf |
| 143 / 82 | Order lookup timed out | Placement rejected; no API order for 0xed54c8cb91a2381d736129eaca912061efe0604cf133b625ef17fd673d9828df |
| 144 / 83 | Order lookup timed out | Placement rejected; no API order for 0x8c3871e70ff3c4b98c7ea77605289a561c0c0896fdb5c973a454abc43af6d6ae |
| 145 / 84 | Order lookup timed out | Placement rejected; no API order for 0xa7bc83e2b678902947ab06e0c8d8075564332878d02a0451239cee510e9b93f9 |

</details>
