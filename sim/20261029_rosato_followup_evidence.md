# Rosato follow-up evidence

Date: 29 October 2026. Environment: staging. Extracted from saved simulator journals; no new quote requests or trades were sent.

## Windows and counts

- Smoke main trading: 10:51:35-10:53:59 UTC; cleanup continued to 10:54:25 UTC.
- Composite main scenarios: 10:54:54-11:09:06 UTC; later cleanup is included below.
- Composite: 86 planned main trades, 31 accepted main orders, 29 main fills and 2 expired main orders.
- The 55 trades without an accepted main order comprise 51 NoLiquidity failures, 1 SellAmountDoesNotCoverFee rejection, 1 BlockhashExpired placement rejection and 2 expired acquisition orders.
- Composite fills including acquisition and cleanup: 29 main + 3 acquisition + 22 cleanup = 54. Smoke adds 2 main + 2 acquisition + 2 cleanup = 6. Combined total: 60 successful order outcomes. This is not an independently verified count of 60 distinct settlement transactions in the solver's exact time window.

Two composite cleanup fills were observed after 11:10 UTC. Observation times can differ from chain settlement times; match UIDs and signatures before claiming exact reconciliation. BEER UID prefix 0xaeba7d86 and AUTO UID prefix 0x5ddba2e3 do not match any accepted main order in this composite.

## Accepted main orders in the 86-trade composite

UTC is the simulator placement observation. Final status is the saved journal outcome.

| Scenario row | Placement UTC | Trade | Mode | Final status | Full UID | Debug link |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2026-10-29T10:54:56.268Z | Sell 0.005 SOL to USDC | self | fulfilled | 0x9e56e6431ddcaf64a03b2fa3e1d0be94a46395743b35f8c21af06b21b201af22 | [Order](https://debug.barn.cow.fi/order/0x9e56e6431ddcaf64a03b2fa3e1d0be94a46395743b35f8c21af06b21b201af22) |
| 2 | 2026-10-29T10:54:57.209Z | Sell 0.005 SOL to USDT | self | fulfilled | 0xf3a2d09f9b9ea42bfe29a7311cb5ca472b09277fbe337faf11801eef6a1f93a5 | [Order](https://debug.barn.cow.fi/order/0xf3a2d09f9b9ea42bfe29a7311cb5ca472b09277fbe337faf11801eef6a1f93a5) |
| 4 | 2026-10-29T10:55:07.773Z | Buy exactly 0.25 USDC paying SOL | sponsored | fulfilled | 0x29b7cccae341bc55a25f2cae234351a9de28e756cd328a6754dd35cb55a77808 | [Order](https://debug.barn.cow.fi/order/0x29b7cccae341bc55a25f2cae234351a9de28e756cd328a6754dd35cb55a77808) |
| 5 | 2026-10-29T10:55:39.654Z | Buy exactly 0.25 USDT paying SOL | sponsored | fulfilled | 0x6a7b9f25c6fc8d7b19c0bc1e99aeb423d8377dd8770e0141029e549117fad4ac | [Order](https://debug.barn.cow.fi/order/0x6a7b9f25c6fc8d7b19c0bc1e99aeb423d8377dd8770e0141029e549117fad4ac) |
| 6 | 2026-10-29T10:55:41.905Z | Buy exactly 0.25 USDC paying JUP | sponsored | fulfilled | 0x719087585f08d3aaf672d1104a42e61cfd89cd3c0c8c840d9834d6b07eeb9db0 | [Order](https://debug.barn.cow.fi/order/0x719087585f08d3aaf672d1104a42e61cfd89cd3c0c8c840d9834d6b07eeb9db0) |
| 7 | 2026-10-29T10:57:08.089Z | Sell 0.005 SOL to JUP | self | fulfilled | 0xc28cbee1ffd7282a2b9c92f9733e1f726651fa88175fb3a1d969d57b2fbfddf2 | [Order](https://debug.barn.cow.fi/order/0xc28cbee1ffd7282a2b9c92f9733e1f726651fa88175fb3a1d969d57b2fbfddf2) |
| 8 | 2026-10-29T10:57:08.387Z | Sell 0.005 SOL to JUP | self | fulfilled | 0x06284a8c31855ef089f56f8183a81347cd771e47529a2b19ea1a30c9c861866b | [Order](https://debug.barn.cow.fi/order/0x06284a8c31855ef089f56f8183a81347cd771e47529a2b19ea1a30c9c861866b) |
| 9 | 2026-10-29T10:57:08.608Z | Sell 0.005 SOL to JUP | self | fulfilled | 0x23a0c19f92774c5877f44cedaf219bd6c6d961ec97c5f1e2c55c4ba97bfa5642 | [Order](https://debug.barn.cow.fi/order/0x23a0c19f92774c5877f44cedaf219bd6c6d961ec97c5f1e2c55c4ba97bfa5642) |
| 10 | 2026-10-29T10:57:09.617Z | Sell 0.005 SOL to JUP | self | fulfilled | 0xcace0b3724150ded7d1e3016e15adede3cf981a4c9cd52f3baeaa41acc0e7444 | [Order](https://debug.barn.cow.fi/order/0xcace0b3724150ded7d1e3016e15adede3cf981a4c9cd52f3baeaa41acc0e7444) |
| 11 | 2026-10-29T10:57:10.566Z | Sell 0.005 SOL to JUP | self | fulfilled | 0x4b3c7b5de69f84edefe8f4e975619f2cece3fe5d6eae45c26388f9db9e1cc9f1 | [Order](https://debug.barn.cow.fi/order/0x4b3c7b5de69f84edefe8f4e975619f2cece3fe5d6eae45c26388f9db9e1cc9f1) |
| 14 | 2026-10-29T10:57:11.701Z | Sell 0.005 SOL to JUP | self | fulfilled | 0x93b3832c751a1bb6775aabc8eee14e200b5e279ee50b90be30d1cb6b1d6d8dd9 | [Order](https://debug.barn.cow.fi/order/0x93b3832c751a1bb6775aabc8eee14e200b5e279ee50b90be30d1cb6b1d6d8dd9) |
| 25 | 2026-10-29T10:57:13.862Z | Sell 0.005 SOL to JUP | self | fulfilled | 0x67df248c72d7486852af1cf7590ab1c37f5ed90d6f29c4c36177250b96fbf117 | [Order](https://debug.barn.cow.fi/order/0x67df248c72d7486852af1cf7590ab1c37f5ed90d6f29c4c36177250b96fbf117) |
| 32 | 2026-10-29T10:59:36.184Z | Sell 0.0025 SOL to USDC | self | fulfilled | 0x16d6712c8bf038b9fbe6931ad122d7e653d0ac34322fc0ac0673f51a5a4f634d | [Order](https://debug.barn.cow.fi/order/0x16d6712c8bf038b9fbe6931ad122d7e653d0ac34322fc0ac0673f51a5a4f634d) |
| 33 | 2026-10-29T10:59:37.413Z | Sell 0.003 SOL to USDC | self | fulfilled | 0xb3ef76f9e7917bfd1c5e424a246cbc98b06a7e41606aff1cb5790c14945fd49e | [Order](https://debug.barn.cow.fi/order/0xb3ef76f9e7917bfd1c5e424a246cbc98b06a7e41606aff1cb5790c14945fd49e) |
| 34 | 2026-10-29T10:59:38.364Z | Sell 0.0035 SOL to USDC | self | fulfilled | 0xdfd2444cfcda9af83ee8b52e6ac4ac5f481e086d79a7d389b645236f41173d6d | [Order](https://debug.barn.cow.fi/order/0xdfd2444cfcda9af83ee8b52e6ac4ac5f481e086d79a7d389b645236f41173d6d) |
| 40 | 2026-10-29T11:01:06.230Z | Sell 0.0025 SOL to USDC | self | fulfilled | 0x8fc0ad09dfe5d49271a4104a0500d45efc975674bc851b2646419ec714af2561 | [Order](https://debug.barn.cow.fi/order/0x8fc0ad09dfe5d49271a4104a0500d45efc975674bc851b2646419ec714af2561) |
| 41 | 2026-10-29T11:01:08.384Z | Sell 0.003 SOL to USDC | self | fulfilled | 0x423594717e4313cc813ce95189932b3c7098c5b25d2f9eecf7615dd4274e524d | [Order](https://debug.barn.cow.fi/order/0x423594717e4313cc813ce95189932b3c7098c5b25d2f9eecf7615dd4274e524d) |
| 42 | 2026-10-29T11:01:07.440Z | Sell 0.0035 SOL to USDC | self | fulfilled | 0xbd820dc3149a1cc52cdaa49fa8b828c4cb31d9c94bdd9f8eb10535aa1e9a460b | [Order](https://debug.barn.cow.fi/order/0xbd820dc3149a1cc52cdaa49fa8b828c4cb31d9c94bdd9f8eb10535aa1e9a460b) |
| 44 | 2026-10-29T11:02:38.492Z | Sell 0.0025 SOL to USDC | self | fulfilled | 0xceb6356cc04365c082f271dbd8cddfdb4f6c9334971a1a79057bff44ebe05c87 | [Order](https://debug.barn.cow.fi/order/0xceb6356cc04365c082f271dbd8cddfdb4f6c9334971a1a79057bff44ebe05c87) |
| 45 | 2026-10-29T11:02:37.361Z | Sell 0.003 SOL to USDC | self | fulfilled | 0x5a4083a115e7659958853f44b003ff12b03169e8a66f11319a4f308c302f4445 | [Order](https://debug.barn.cow.fi/order/0x5a4083a115e7659958853f44b003ff12b03169e8a66f11319a4f308c302f4445) |
| 51 | 2026-10-29T11:02:36.205Z | Sell 0.004 SOL to USDC | self | fulfilled | 0x57c2febee5d54b15891dc7d85f0651b42114182ad21aa09dd92fb4e7a537b029 | [Order](https://debug.barn.cow.fi/order/0x57c2febee5d54b15891dc7d85f0651b42114182ad21aa09dd92fb4e7a537b029) |
| 61 | 2026-10-29T11:04:13.233Z | Buy exactly 1.3 USDC paying SOL | sponsored | fulfilled | 0xb016cfa395c8351a6261a22a060585add2aae15fb7af1021fe23b08786cd3d0b | [Order](https://debug.barn.cow.fi/order/0xb016cfa395c8351a6261a22a060585add2aae15fb7af1021fe23b08786cd3d0b) |
| 63 | 2026-10-29T11:04:15.402Z | Buy exactly 3.1 USDT paying SOL | sponsored | fulfilled | 0x6f77797c9fd0466cb7e163a68e0e309099f29a62720393356c0c45e7e2b85c11 | [Order](https://debug.barn.cow.fi/order/0x6f77797c9fd0466cb7e163a68e0e309099f29a62720393356c0c45e7e2b85c11) |
| 66 | 2026-10-29T11:06:40.975Z | Sell 0.02 SOL to USDC | sponsored | expired | 0x841adb8a5e0ddd4a84a8cfb343246d17ecafd88007c29e692e790107e5c7ef2f | [Order](https://debug.barn.cow.fi/order/0x841adb8a5e0ddd4a84a8cfb343246d17ecafd88007c29e692e790107e5c7ef2f) |
| 67 | 2026-10-29T11:07:11.297Z | Buy exactly 0.02 SOL paying USDC | sponsored | fulfilled | 0x5555024ffd75d5e1c56bcd50536aebbecd8728bc92f3bc957ca60e210fedbbe2 | [Order](https://debug.barn.cow.fi/order/0x5555024ffd75d5e1c56bcd50536aebbecd8728bc92f3bc957ca60e210fedbbe2) |
| 68 | 2026-10-29T11:06:42.147Z | Sell 0.03 SOL to USDC | sponsored | fulfilled | 0x319844da36b5ecf1b8a2bb9dbbe4d0bf5affc2c6bbd330745a0cd44615615aff | [Order](https://debug.barn.cow.fi/order/0x319844da36b5ecf1b8a2bb9dbbe4d0bf5affc2c6bbd330745a0cd44615615aff) |
| 69 | 2026-10-29T11:06:38.911Z | Sell 1.2 USDC to SOL | sponsored | fulfilled | 0x3dc300f723ea2d3406d30f39a155d02622fa57d371b4310ebb269302f1e8414c | [Order](https://debug.barn.cow.fi/order/0x3dc300f723ea2d3406d30f39a155d02622fa57d371b4310ebb269302f1e8414c) |
| 75 | 2026-10-29T11:08:13.052Z | Sell 0.01 SOL to 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH | sponsored | expired | 0x3ae8125fa9bc018a6590dd35d9953ff66307a58d720c379c476951bdfd92ca83 | [Order](https://debug.barn.cow.fi/order/0x3ae8125fa9bc018a6590dd35d9953ff66307a58d720c379c476951bdfd92ca83) |
| 76 | 2026-10-29T11:08:15.091Z | Sell 0.01 SOL to pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn | self | fulfilled | 0x326e09e42fecf74ef851e46e41e666ff263f276860c82dff580bd295a7e8f1a7 | [Order](https://debug.barn.cow.fi/order/0x326e09e42fecf74ef851e46e41e666ff263f276860c82dff580bd295a7e8f1a7) |
| 77 | 2026-10-29T11:08:15.989Z | Sell 0.01 SOL to 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo | sponsored | fulfilled | 0x593a685e50bfd1e71090e1da904c313a4755bb31d2df5e48799aa22178283a5c | [Order](https://debug.barn.cow.fi/order/0x593a685e50bfd1e71090e1da904c313a4755bb31d2df5e48799aa22178283a5c) |
| 78 | 2026-10-29T11:08:18.285Z | Sell 0.005 SOL to DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263 | self | fulfilled | 0xd0c084e7cb291950a443be96db8388f592dba6788ffc9ea7c71e3425c65eaebb | [Order](https://debug.barn.cow.fi/order/0xd0c084e7cb291950a443be96db8388f592dba6788ffc9ea7c71e3425c65eaebb) |

## Trades that never reached accepted main-order placement

UTC is the saved API error time when available, otherwise the row failure observation time. NoLiquidity is the public API response and does not distinguish solver deadlines from route failures. Five NoLiquidity rows have only the saved row-failure text rather than an original response body. The blockhash rejection has a prepared UID, but no accepted main order. Expired acquisitions have their own UIDs.

| Scenario row | Failure UTC | Planned trade | Mode | Saved error | Related rejected or expired acquisition UID |
| --- | --- | --- | --- | --- | --- |
| 3 | 2026-10-29T10:55:17.057Z | Sell 0.5 JUP to USDC | self | 400 Bad Request: SellAmountDoesNotCoverFee: the quoted amount does not cover the execution cost | No accepted main-order UID |
| 12 | 2026-10-29T10:57:09.062Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 13 | 2026-10-29T10:57:09.090Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 15 | 2026-10-29T10:57:10.160Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 16 | 2026-10-29T10:57:10.167Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 17 | 2026-10-29T10:57:10.163Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 18 | 2026-10-29T10:57:10.165Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 19 | 2026-10-29T10:57:11.276Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 20 | 2026-10-29T10:57:11.261Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 21 | 2026-10-29T10:57:11.265Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 22 | 2026-10-29T10:57:11.263Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 23 | 2026-10-29T10:57:11.267Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 24 | 2026-10-29T10:57:11.270Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 26 | 2026-10-29T10:57:12.374Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 27 | 2026-10-29T10:57:12.375Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 28 | 2026-10-29T10:57:12.370Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 29 | 2026-10-29T10:57:12.372Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 30 | 2026-10-29T10:57:13.436Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 31 | 2026-10-29T10:57:13.524Z | Sell 0.005 SOL to JUP | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 35 | 2026-10-29T10:59:36.881Z | Sell 0.004 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 36 | 2026-10-29T11:01:08.011Z | Sell 0.0025 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 37 | 2026-10-29T11:01:08.007Z | Sell 0.003 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 38 | 2026-10-29T11:01:08.009Z | Sell 0.0035 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 39 | 2026-10-29T11:01:08.127Z | Sell 0.004 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 43 | 2026-10-29T11:01:06.908Z | Sell 0.004 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 46 | 2026-10-29T11:02:39.172Z | Sell 0.0035 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 47 | 2026-10-29T11:02:36.932Z | Sell 0.004 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 48 | 2026-10-29T11:02:38.033Z | Sell 0.0025 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 49 | 2026-10-29T11:02:38.123Z | Sell 0.003 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 50 | 2026-10-29T11:02:40.211Z | Sell 0.0035 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 52 | 2026-10-29T11:02:38.031Z | Sell 0.0025 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 53 | 2026-10-29T11:02:38.037Z | Sell 0.003 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 54 | 2026-10-29T11:02:38.035Z | Sell 0.0035 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 55 | 2026-10-29T11:02:39.156Z | Sell 0.004 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 56 | 2026-10-29T11:02:39.135Z | Sell 0.0025 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 57 | 2026-10-29T11:02:39.129Z | Sell 0.003 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 58 | 2026-10-29T11:02:39.131Z | Sell 0.0035 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 59 | 2026-10-29T11:02:39.133Z | Sell 0.004 SOL to USDC | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 60 | 2026-10-29T11:04:11.807Z | Buy exactly 2.6 USDC paying SOL | sponsored | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 62 | 2026-10-29T11:04:14.272Z | Buy exactly 3.1 USDC paying SOL | sponsored | 400 Bad Request: BlockhashExpired: the transaction's blockhash is no longer valid, sign a fresh one | 0x8ffe13ea484f79e263b158ff8c2189933f4612954b2d62643841d8111c89cfaa |
| 64 | 2026-10-29T11:04:11.812Z | Buy exactly 1.1 USDT paying SOL | sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 65 | 2026-10-29T11:04:11.810Z | Buy exactly 3.2 USDC paying SOL | sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 70 | 2026-10-29T11:07:25.320Z | Sell 3 USDC to USDT | sponsored | acquire USDC expired | 0x9024aa6197385330fb409638ca1fb9f8ee311b5f27927db71536794bbebc258c |
| 71 | 2026-10-29T11:06:41.789Z | Sell 3 USDT to USDC | sponsored | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 72 | 2026-10-29T11:07:24.313Z | Sell 1 USDT to USDC | sponsored | acquire USDT expired | 0xc3b2a4a8fa8b84ac8f95f8b47b89fc9f22f871f5c47de01e9b0af71169901df2 |
| 73 | 2026-10-29T11:06:51.760Z | Sell 3 USDC to USDT | sponsored | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 74 | 2026-10-29T11:06:41.791Z | Sell 0.02 SOL to JUP | sponsored | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 79 | 2026-10-29T11:08:16.808Z | Sell 0.005 SOL to EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 80 | 2026-10-29T11:08:16.805Z | Sell 0.005 SOL to 7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 81 | 2026-10-29T11:08:16.811Z | Sell 0.005 SOL to J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 82 | 2026-10-29T11:08:17.917Z | Sell 0.005 SOL to mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 83 | 2026-10-29T11:08:17.910Z | Sell 0.005 SOL to jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v | self | 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 84 | 2026-10-29T11:08:49.948Z | Buy exactly 0.464 2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH paying SOL | sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 85 | 2026-10-29T11:08:36.032Z | Buy exactly 71.6 pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn paying SOL | self | quote failed: 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |
| 86 | 2026-10-29T11:08:54.934Z | Buy exactly 0.464 2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo paying SOL | sponsored | quote failed: 404 Not Found: NoLiquidity: no route found | No accepted main-order UID |

## Other orders for count matching

These orders are excluded from the 29 main composite fills. Final UTC is the simulator observation. Amounts are integer token units from the placement journal.

| Run | Step | Scenario row | Final UTC | Sell token / raw amount | Buy token / raw limit | Final status | Full UID |
| --- | --- | --- | --- | --- | --- | --- | --- |
| composite | acquire | 3 | 2026-10-29T10:55:14.546Z | SOL / 2003436 | JUP / 185166 | fulfilled | 0x370446200f09231873d71cae080600b92f4e05bf1c26c77a2923b4d6d00cd49e |
| composite | acquire | 6 | 2026-10-29T10:55:40.018Z | SOL / 2213956 | JUP / 810101 | fulfilled | 0x4c78392016a4ec388fc86de08f4a2887897fc3d68bf57cc232ed19657285f5da |
| composite | cleanup | - | 2026-10-29T10:56:07.754Z | EPjFWd / 751696 | SOL / 7418207 | fulfilled | 0x42c4c9972335f6294b047e1f1cfb5a067a644e30ee46e5f7cb8bb4721604acc3 |
| composite | cleanup | - | 2026-10-29T10:56:23.108Z | Es9vMF / 752060 | SOL / 7415651 | fulfilled | 0xac319f179c57347c080c046c0ed4a303ca701e7c412ff03633663a4778b071bb |
| composite | cleanup | - | 2026-10-29T10:56:14.170Z | EPjFWd / 250000 | SOL / 2461418 | fulfilled | 0x4750001ef831365dc5b78f901e6d1dd736c6609bc72abb717314b8c21b92933f |
| composite | cleanup | - | 2026-10-29T10:59:04.615Z | JUPyiw / 1842893 | SOL / 4944652 | fulfilled | 0xdf8226a3214e83aaff281384bfb93c5752fa2fb4eeb4ed3a5f91434af9154ad9 |
| composite | cleanup | - | 2026-10-29T10:58:23.631Z | JUPyiw / 1843004 | SOL / 4943998 | fulfilled | 0x4f7bf88937a7d774755e1af1b0d5662580fc47ce4df17d53e9139678aeff7c7a |
| composite | cleanup | - | 2026-10-29T10:58:52.782Z | JUPyiw / 1843291 | SOL / 4944771 | fulfilled | 0xc662ec7719a6e31c2dd9898ade10cb588f56746f4865352d92e9723bec79313c |
| composite | cleanup | - | 2026-10-29T10:59:12.486Z | JUPyiw / 1842833 | SOL / 4943541 | fulfilled | 0xeb7f493467cbdb1d3a7a59cf3bfe57c342051ca89ce09d0c9f3bf16a63ee395e |
| composite | cleanup | - | 2026-10-29T10:58:27.855Z | JUPyiw / 1842880 | SOL / 4943667 | fulfilled | 0x80f9342fa4be5ffd854f9b52783b2adcb97ce4ddd9022ec20433ebefe238c21c |
| composite | cleanup | - | 2026-10-29T10:58:49.372Z | JUPyiw / 1842912 | SOL / 4943538 | fulfilled | 0x90c946c8f3a70e7bd7a27b341a85700cf5c4e5825e6327ea52d11e434908d58a |
| composite | cleanup | - | 2026-10-29T11:03:32.268Z | EPjFWd / 499652 | SOL / 4936609 | fulfilled | 0x7b01e9ce6a50b4802df342d929a156eae25ab5c5fa5446fdc7caba8bffa275bd |
| composite | cleanup | - | 2026-10-29T11:03:37.014Z | EPjFWd / 600037 | SOL / 5930692 | fulfilled | 0x82d63c7459c9e9f06728df6af6ff215cc4999e15bfbf61fe84f9705ec77bbd7b |
| composite | cleanup | - | 2026-10-29T11:03:19.101Z | EPjFWd / 332898 | SOL / 3286324 | fulfilled | 0x369450656d6c7e846c8d3f2e33859215957afa92cface906cbdc8f98d80325d0 |
| composite | cleanup | - | 2026-10-29T11:03:48.788Z | EPjFWd / 232489 | SOL / 2292517 | fulfilled | 0xa04565e3d9181da22f15e70b70d6c78def060456b3a23600d945dd1123392bd9 |
| composite | cleanup | - | 2026-10-29T11:03:27.625Z | EPjFWd / 350395 | SOL / 3459710 | fulfilled | 0x3d0c91c5d96ef62d0c0e60413e5e36b48ac30c12e68f2620ba4d80c19f6acd62 |
| composite | cleanup | - | 2026-10-29T11:03:45.401Z | EPjFWd / 400203 | SOL / 3954750 | fulfilled | 0x96a6de650994aa5cb10bb33bf8bfc14ca8eb00c2728ecdfb3e84a8a68d87ff0e |
| composite | acquire | 72 | 2026-10-29T11:07:24.313Z | SOL / 14727078 | USDT / 1321333 | expired | 0xc3b2a4a8fa8b84ac8f95f8b47b89fc9f22f871f5c47de01e9b0af71169901df2 |
| composite | acquire | 70 | 2026-10-29T11:07:25.319Z | SOL / 44232840 | USDC / 4264529 | expired | 0x9024aa6197385330fb409638ca1fb9f8ee311b5f27927db71536794bbebc258c |
| composite | acquire | 67 | 2026-10-29T11:07:08.760Z | SOL / 32970177 | USDC / 3140575 | fulfilled | 0x4b0a9cad869a49b33e328b33290aaefac1e4b8f37fa9657a9322e33f4bb1d2d2 |
| composite | cleanup | - | 2026-10-29T11:07:52.226Z | EPjFWd / 2851324 | SOL / 28219266 | fulfilled | 0x8ed905814272c01a5c19f9fd024e5a7115231e5d6c7c783e7b15bbcef0162751 |
| composite | cleanup | - | 2026-10-29T11:09:25.120Z | pumpCm / 229080387 | SOL / 9910531 | fulfilled | 0x8690c500be78dd60871fd4e2a026edf444b17f6de6297fd207dd3e2f2269c6af |
| composite | cleanup | - | 2026-10-29T11:09:34.180Z | 2b1kV6 / 841343 | SOL / 8316008 | fulfilled | 0xaecb7173b7c043b78251007477db300b4e036a7411c350cb3e8048b7263c941e |
| composite | cleanup | - | 2026-10-29T11:09:28.273Z | DezXAZ / 16288378163 | SOL / 4940574 | fulfilled | 0x913a436b3a52f4e281591772307883b689b5eaf47f9f1cb8524cdf0051625329 |
| composite | cleanup | - | 2026-10-29T11:09:58.890Z | JUPyiw / 1843265 | SOL / 3455851 | fulfilled | 0xc56b39bbb2d12455dfdc31e95179a8bde6bbbbf9ad3a7da19b4364c4967b7358 |
| composite | cleanup | - | 2026-10-29T11:10:37.734Z | EPjFWd / 1138488 | SOL / 9765254 | fulfilled | 0x7c6f871c25310ad44dabbb15798d38e62a65144bf16f98235fcb4d6e7e61eb52 |
| composite | cleanup | - | 2026-10-29T11:10:32.653Z | Es9vMF / 3100000 | SOL / 29127827 | fulfilled | 0x23ae98f5fa8efeaf608f00680677dc5a0e50ca95147bba8465f8f14260746eb8 |
| smoke | main | 1 | 2026-10-29T10:52:12.470Z | SOL / 10000000 | USDC / 850529 | expired | 0x9a8929b43f3c934a688adf704890a60e6c83dedeb87b66bb26bfd1ec3e306a82 |
| smoke | main | 2 | 2026-10-29T10:51:51.229Z | SOL / 6946761 | JUP / 2000000 | fulfilled | 0x3948d4e492506b295315a03650d2e4179f4016b3775cbc572312f1850c49c5b0 |
| smoke | main | 4 | 2026-10-29T10:52:24.635Z | JUP / 1000000 | wSOL / 2679280 | expired | 0x70e0065055c54707c089a8fe6c07bc0e73c34b57ba8556c3b23833fc79bead71 |
| smoke | acquire | 3 | 2026-10-29T10:52:58.371Z | SOL / 6439470 | USDC / 494538 | expired | 0x55276176c956bab61f1879f321bfb9b8efd295ee9dc4a90d1b6282625831d95a |
| smoke | acquire | 6 | 2026-10-29T10:53:05.896Z | SOL / 17492725 | USDC / 1601451 | fulfilled | 0xf7c8ecac50b1820c122a9f633bcff7a585ba8e6d6d6672f69b16a23723906b73 |
| smoke | main | 6 | 2026-10-29T10:53:39.412Z | USDC / 1156530 | USDT / 1000000 | expired | 0xc62887a3e61977e42784dd72f9217de79b5d4bd72bbb76855eb5c3e5c4a9d83f |
| smoke | acquire | 5 | 2026-10-29T10:53:14.126Z | SOL / 2003042 | JUP / 184738 | fulfilled | 0xd8f8b01bd6035046647311a11fe5fdc0f585e7f6d877e1e381ed2c197071e3cf |
| smoke | main | 5 | 2026-10-29T10:53:58.621Z | JUP / 500000 | SOL / 1336330 | fulfilled | 0x097bf81890dfa53353a7e31ba5577ccfd3ea82c4c924e9413aa94ef170e48716 |
| smoke | cleanup | - | 2026-10-29T10:54:14.320Z | EPjFWd / 1608646 | SOL / 15876365 | fulfilled | 0x8ae88e66da4d4261e9bec544de8d2137f9cb3ba0bb623010c3783ed4f4044f1a |
| smoke | cleanup | - | 2026-10-29T10:54:19.307Z | JUPyiw / 2000000 | SOL / 5373424 | fulfilled | 0xf3fe659edf3c9b7bca9782fafb2e2e0bbde0148ba9172606ec72e4db37520577 |

Sources: ../sessions/2026-10-29-10-54-composite-rosato-run/sim/journal.jsonl and ../sessions/rosato-smoke-20261029-105125/sim/journal.jsonl.

