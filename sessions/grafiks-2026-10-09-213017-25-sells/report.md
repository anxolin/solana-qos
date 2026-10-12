# Solana QoS report: grafiks-2026-10-09-213017-25-sells

Barn, orders created between `2026-10-09T19:30:35.068Z` and `2026-10-09T19:35:40.403Z`. Data fetched 2026-10-09T19:36:51+00:00.

## Summary

| Metric | Value |
|---|---|
| Orders placed | 25 |
| Orders executed | **25** (100.0%) |
| Sponsored orders never created on-chain | 0 (0.0%) |
| Traders | 25 |
| Settlement txs | 19 |

## Scenario

25 of 25 scenario rows completed. 0 retries, 0 placement errors (from `sim/journal.jsonl`).

| Planned trades | Filled | Quote failed | Submitted but unfilled | Other failed | Unfinished | Trade completion |
|---|---|---|---|---|---|---|
| 25 | 25 | 0 | 0 | 0 | 0 | 100.0% |

Counts are scenario rows, not failed attempts. Cleanup is excluded. Late fills remain separate from full-flow completion.

| Started (UTC) | Row | Trader | Trade | Result | Took | Orders | Reason |
|---|---|---|---|---|---|---|---|
| 19:30:35 | 1 | 1 | sell 0.005 SOL → JUP | filled | 123s | 1 |  |
| 19:30:35 | 2 | 2 | sell 0.005 SOL → JUP | filled | 51s | 1 |  |
| 19:30:35 | 3 | 3 | sell 0.005 SOL → JUP | filled | 95s | 1 |  |
| 19:30:35 | 4 | 4 | sell 0.005 SOL → JUP | filled | 86s | 1 |  |
| 19:30:35 | 5 | 5 | sell 0.005 SOL → JUP | filled | 46s | 1 |  |
| 19:30:35 | 6 | 6 | sell 0.005 SOL → JUP | filled | 107s | 1 |  |
| 19:30:35 | 7 | 7 | sell 0.005 SOL → JUP | filled | 83s | 1 |  |
| 19:30:35 | 8 | 8 | sell 0.005 SOL → JUP | filled | 99s | 1 |  |
| 19:30:35 | 9 | 9 | sell 0.005 SOL → JUP | filled | 108s | 1 |  |
| 19:30:36 | 10 | 10 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 19:30:36 | 11 | 11 | sell 0.005 SOL → JUP | filled | 41s | 1 |  |
| 19:30:36 | 12 | 12 | sell 0.005 SOL → JUP | filled | 89s | 1 |  |
| 19:30:36 | 13 | 13 | sell 0.005 SOL → JUP | filled | 83s | 1 |  |
| 19:30:36 | 14 | 14 | sell 0.005 SOL → JUP | filled | 80s | 1 |  |
| 19:30:36 | 15 | 15 | sell 0.005 SOL → JUP | filled | 25s | 1 |  |
| 19:30:36 | 16 | 16 | sell 0.005 SOL → JUP | filled | 34s | 1 |  |
| 19:30:36 | 17 | 17 | sell 0.005 SOL → JUP | filled | 84s | 1 |  |
| 19:30:36 | 18 | 18 | sell 0.005 SOL → JUP | filled | 51s | 1 |  |
| 19:30:36 | 19 | 19 | sell 0.005 SOL → JUP | filled | 115s | 1 |  |
| 19:30:37 | 20 | 20 | sell 0.005 SOL → JUP | filled | 70s | 1 |  |
| 19:30:37 | 21 | 21 | sell 0.005 SOL → JUP | filled | 15s | 1 |  |
| 19:30:37 | 22 | 22 | sell 0.005 SOL → JUP | filled | 57s | 1 |  |
| 19:30:37 | 23 | 23 | sell 0.005 SOL → JUP | filled | 63s | 1 |  |
| 19:30:37 | 24 | 24 | sell 0.005 SOL → JUP | filled | 51s | 1 |  |
| 19:30:37 | 25 | 25 | sell 0.005 SOL → JUP | filled | 29s | 1 |  |

Scenario orders: 25 (25 main, 0 acquire). Cleanup placed 25 more, listed below and left out of the stats.

## Backend failure evidence

NoLiquidity is a generic API response, not proof of missing market liquidity. Timing matches are approximate; a shared auction does not prove an order-specific cause.

| UTC time | Row | Stage | Solver | Backend detail | Match | Cause / order context |
|---|---|---|---|---|---|---|
| 2026-10-09T19:30:50.593826949Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6008))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x018a9b2f2e460a07a573387491cf0dad2c2755c1a03ed2a2b5b76ef92a42dbcc, 0x0400a163c70360f934bf12c57eeeb23adfc7615cf15d5c7434c69e017ea61193, 0x137f41fd6d84576998640c1e9d12e4a65cf3d9e5355f20def0e0b8f8e8f99cfa, 0x22045a182d5c3a842bf840861272f798241bf7b06ca69f7946bbcd28bef455d8, 0x6390c62db4c479f5cf055078d306246af91901671b4939c30ef10fdf41deacdb, 0x7a828061b493d8f5a82be5c1c992ebed3c11822744c9b6c6bf08b7135bbceab3, 0x8447bb3932b489241536fd5f8eeab7cbf7a6f207c1d8e472137ed94973b76030, 0x87164ff113c7656b5ff0685fc5b7eac680658818a72086f6c10a7320cad21bdb, 0x880112a58bfa9c0cfd97a5458be6ed28b6dff2d4656ed80a74d6a583dcb8d918, 0x89d562a6fb1715dbb9b91d68a7abfbc8320774649e3ab7d6e00e3081d1e6c5d9, 0x9583b69187113660dce1d58f32ab84c409e76db654f7e43c462652cf31e5b48a, 0xa20d9ca396611276ed1ed11ed5ec85e4a0b0f152682ddf3e865422aeb8b448da, 0xa55327fd4a0709c70bd59485e9e84dcfc65dfa0b52ce87733cd6b2fad7b67901, 0xb2bc12498c4866989686b9094cf27c549538807ee520bc41127d3b2316679443, 0xbec18c6b3876881ba5a425b9477445257c0e6cc46002b770b85ff80975758868, 0xc6d7b549432323b7b1003ac4b939bb023213e5926f6eed65ce815f6ece9feebe, 0xd27b1a24a1ffecd378e6f1bcae16e06f3def45aeba7dcdd5a1e0ecd94f7a67a2, 0xe3531d77f6853be8963bf8e66fdc92d6a88e15599ac1803137b5cdeff1892e90, 0xe4e78b42c5ca9a205651380f687df63ea552b426d56245d0e2fdb5a719de2902, 0xeecfd29654723d6d6d8be0423573f3af5c6745783fae24b47d883c85f59ceb02, 0xf570aad832988fcd651fa043301ba11245be1be44e51a6f13b5d155328f32acc |
| 2026-10-09T19:30:50.593898929Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(3, Custom(6008))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x018a9b2f2e460a07a573387491cf0dad2c2755c1a03ed2a2b5b76ef92a42dbcc, 0x0400a163c70360f934bf12c57eeeb23adfc7615cf15d5c7434c69e017ea61193, 0x137f41fd6d84576998640c1e9d12e4a65cf3d9e5355f20def0e0b8f8e8f99cfa, 0x22045a182d5c3a842bf840861272f798241bf7b06ca69f7946bbcd28bef455d8, 0x6390c62db4c479f5cf055078d306246af91901671b4939c30ef10fdf41deacdb, 0x7a828061b493d8f5a82be5c1c992ebed3c11822744c9b6c6bf08b7135bbceab3, 0x8447bb3932b489241536fd5f8eeab7cbf7a6f207c1d8e472137ed94973b76030, 0x87164ff113c7656b5ff0685fc5b7eac680658818a72086f6c10a7320cad21bdb, 0x880112a58bfa9c0cfd97a5458be6ed28b6dff2d4656ed80a74d6a583dcb8d918, 0x89d562a6fb1715dbb9b91d68a7abfbc8320774649e3ab7d6e00e3081d1e6c5d9, 0x9583b69187113660dce1d58f32ab84c409e76db654f7e43c462652cf31e5b48a, 0xa20d9ca396611276ed1ed11ed5ec85e4a0b0f152682ddf3e865422aeb8b448da, 0xa55327fd4a0709c70bd59485e9e84dcfc65dfa0b52ce87733cd6b2fad7b67901, 0xb2bc12498c4866989686b9094cf27c549538807ee520bc41127d3b2316679443, 0xbec18c6b3876881ba5a425b9477445257c0e6cc46002b770b85ff80975758868, 0xc6d7b549432323b7b1003ac4b939bb023213e5926f6eed65ce815f6ece9feebe, 0xd27b1a24a1ffecd378e6f1bcae16e06f3def45aeba7dcdd5a1e0ecd94f7a67a2, 0xe3531d77f6853be8963bf8e66fdc92d6a88e15599ac1803137b5cdeff1892e90, 0xe4e78b42c5ca9a205651380f687df63ea552b426d56245d0e2fdb5a719de2902, 0xeecfd29654723d6d6d8be0423573f3af5c6745783fae24b47d883c85f59ceb02, 0xf570aad832988fcd651fa043301ba11245be1be44e51a6f13b5d155328f32acc |
| 2026-10-09T19:32:42.745274721Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x01de3e2ea2f5f14f1fb483397e5d697cfea3dc2cff76a9c46d22601836827293, 0x675a8e07c7faf790d4795e7a577a5a4bee46e97eb7718460d0c8dc0fb34cc41e |
| 2026-10-09T19:32:42.745289951Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x01de3e2ea2f5f14f1fb483397e5d697cfea3dc2cff76a9c46d22601836827293, 0x675a8e07c7faf790d4795e7a577a5a4bee46e97eb7718460d0c8dc0fb34cc41e |
| 2026-10-09T19:32:54.09849404Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x0451936c45eadd3ef99f6e8def3cfb743ff29b8016439b9c3d43dd332587cee9, 0xd6e5fc844e49f41fd81a27d0894050db1d166635be3fe6b75499b237800ffa2b, 0xf18a53cd8010b96a3213cf09580faa87916df58fe38694bf151bedeb91b59cb6 |
| 2026-10-09T19:32:54.09850879Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x0451936c45eadd3ef99f6e8def3cfb743ff29b8016439b9c3d43dd332587cee9, 0xd6e5fc844e49f41fd81a27d0894050db1d166635be3fe6b75499b237800ffa2b, 0xf18a53cd8010b96a3213cf09580faa87916df58fe38694bf151bedeb91b59cb6 |
| 2026-10-09T19:33:02.962592254Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x27d4ffcc461038575c2c8c6d0b1c936ffe9b5a6c24c0a0a6ed866bf157b7b1a6 |
| 2026-10-09T19:33:02.962603474Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x27d4ffcc461038575c2c8c6d0b1c936ffe9b5a6c24c0a0a6ed866bf157b7b1a6 |
| 2026-10-09T19:33:13.313136131Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x94a2718fff13e7fb412b35930012e12a004afd24fec978dcde07f853eb1f17f2, 0xadeaa1f81321884a324e35e21f43cb050e33ab59547b4e08452e9113f6ba30a7 |
| 2026-10-09T19:33:13.313147071Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x94a2718fff13e7fb412b35930012e12a004afd24fec978dcde07f853eb1f17f2, 0xadeaa1f81321884a324e35e21f43cb050e33ab59547b4e08452e9113f6ba30a7 |
| 2026-10-09T19:34:08.481017762Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x1880db62be6c8d8e9689e68243bee987152b7ac2be4802ed068810dc770a2d95, 0x48dd429031e7d75ef5948f04d2e703867d25059d8f4a121012b6137a86fe904f, 0x7ede12ae401109b456fc5eb4ffb269cb5229ab5c61cf5ed6e7dccae983dceac0, 0xe66942790f166c8e4c6ed762161902410e67d2995b3528d7f4bb742dfb89c171 |
| 2026-10-09T19:34:08.481037512Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x1880db62be6c8d8e9689e68243bee987152b7ac2be4802ed068810dc770a2d95, 0x48dd429031e7d75ef5948f04d2e703867d25059d8f4a121012b6137a86fe904f, 0x7ede12ae401109b456fc5eb4ffb269cb5229ab5c61cf5ed6e7dccae983dceac0, 0xe66942790f166c8e4c6ed762161902410e67d2995b3528d7f4bb742dfb89c171 |
| 2026-10-09T19:34:52.928548571Z | — | settlement | grafiks | SimulationFailed { err: UiTransactionError(InstructionError(4, Custom(6001))), program_error: None } | shared auction; order-specific cause unconfirmed | 0x1880db62be6c8d8e9689e68243bee987152b7ac2be4802ed068810dc770a2d95, 0xe514247aad34b33435251c18e4bf00f3e6d1ae84197160764a8509d33059b517, 0xe66942790f166c8e4c6ed762161902410e67d2995b3528d7f4bb742dfb89c171 |

Backend evidence fetched through `2026-10-09T19:35:40.403Z`.

## Cleanup

| Created (UTC) | Trader | Pair | Result | Order |
|---|---|---|---|---|
| 19:32:39 | 1 | JUP → SOL (native) | Executed | `0x01de3e2e…` [🐞](https://debug.barn.cow.fi/order/0x01de3e2ea2f5f14f1fb483397e5d697cfea3dc2cff76a9c46d22601836827293) |
| 19:32:40 | 2 | JUP → SOL (native) | Executed | `0x675a8e07…` [🐞](https://debug.barn.cow.fi/order/0x675a8e07c7faf790d4795e7a577a5a4bee46e97eb7718460d0c8dc0fb34cc41e) |
| 19:32:41 | 3 | JUP → SOL (native) | Executed | `0x06ec791c…` [🐞](https://debug.barn.cow.fi/order/0x06ec791cbdd85971db9334d3c8c5d561c423d166136320117269f2c4e9f0995a) |
| 19:32:43 | 4 | JUP → SOL (native) | Executed | `0xa2a4ea73…` [🐞](https://debug.barn.cow.fi/order/0xa2a4ea7336682ad96910afdf8e3020e1d3d508a9f2f998c561aca8de2d54149a) |
| 19:32:43 | 5 | JUP → SOL (native) | Executed | `0x3ac9dfe0…` [🐞](https://debug.barn.cow.fi/order/0x3ac9dfe05f29481978a3e59ad37fbfec5f775df1ef159a98582d37eb0528ca86) |
| 19:32:44 | 6 | JUP → SOL (native) | Executed | `0x6b0c0e4a…` [🐞](https://debug.barn.cow.fi/order/0x6b0c0e4a198e7c802c24fe27a821fc451f698ad25effcdd08e31f33c2e81cf8a) |
| 19:32:45 | 7 | JUP → SOL (native) | Executed | `0x96629d19…` [🐞](https://debug.barn.cow.fi/order/0x96629d192d6fa14a48b302deababbbee248c78b2b080632e181d586d500bce3d) |
| 19:32:46 | 8 | JUP → SOL (native) | Executed | `0xf18a53cd…` [🐞](https://debug.barn.cow.fi/order/0xf18a53cd8010b96a3213cf09580faa87916df58fe38694bf151bedeb91b59cb6) |
| 19:32:47 | 9 | JUP → SOL (native) | Executed | `0x0451936c…` [🐞](https://debug.barn.cow.fi/order/0x0451936c45eadd3ef99f6e8def3cfb743ff29b8016439b9c3d43dd332587cee9) |
| 19:32:50 | 10 | JUP → SOL (native) | Executed | `0xd6e5fc84…` [🐞](https://debug.barn.cow.fi/order/0xd6e5fc844e49f41fd81a27d0894050db1d166635be3fe6b75499b237800ffa2b) |
| 19:32:58 | 11 | JUP → SOL (native) | Executed | `0x27d4ffcc…` [🐞](https://debug.barn.cow.fi/order/0x27d4ffcc461038575c2c8c6d0b1c936ffe9b5a6c24c0a0a6ed866bf157b7b1a6) |
| 19:33:07 | 12 | JUP → SOL (native) | Executed | `0x94a2718f…` [🐞](https://debug.barn.cow.fi/order/0x94a2718fff13e7fb412b35930012e12a004afd24fec978dcde07f853eb1f17f2) |
| 19:33:09 | 13 | JUP → SOL (native) | Executed | `0xadeaa1f8…` [🐞](https://debug.barn.cow.fi/order/0xadeaa1f81321884a324e35e21f43cb050e33ab59547b4e08452e9113f6ba30a7) |
| 19:33:19 | 14 | JUP → SOL (native) | Executed | `0x48f759ed…` [🐞](https://debug.barn.cow.fi/order/0x48f759ed0e68f43d8cc0a554054825a24c40e05433b88418babb2213d8616f78) |
| 19:33:22 | 15 | JUP → SOL (native) | Executed | `0x639c3c03…` [🐞](https://debug.barn.cow.fi/order/0x639c3c03f970b91b4057b6667cada99d2e9359ee65409d262431bbe4f4677a1b) |
| 19:33:27 | 16 | JUP → SOL (native) | Executed | `0x85e1ce76…` [🐞](https://debug.barn.cow.fi/order/0x85e1ce76c9828c0ad303b0447d7c3cab536abe0c92e89fcc827a1742f1b27c76) |
| 19:33:28 | 17 | JUP → SOL (native) | Executed | `0x05bdd2c7…` [🐞](https://debug.barn.cow.fi/order/0x05bdd2c773db5f90ad55901aa353907eeae1bf9483dafb30398cc4e6880c4fe1) |
| 19:33:32 | 18 | JUP → SOL (native) | Executed | `0xdc09afb7…` [🐞](https://debug.barn.cow.fi/order/0xdc09afb7137711a665d9704e9465530e8802da914bb796c985782f638c449e2e) |
| 19:33:40 | 19 | JUP → SOL (native) | Executed | `0x9bc8ed74…` [🐞](https://debug.barn.cow.fi/order/0x9bc8ed74a5311cf916915e8ec6ebd47f586cf4d5b66140fa94324ecb6890d0b7) |
| 19:33:50 | 20 | JUP → SOL (native) | Executed | `0x7b484041…` [🐞](https://debug.barn.cow.fi/order/0x7b4840412f4ef616d9d5ddc992dde5306497bbcf62158d1c577d3dc6f64e5fcd) |
| 19:33:56 | 21 | JUP → SOL (native) | Executed | `0xe514247a…` [🐞](https://debug.barn.cow.fi/order/0xe514247aad34b33435251c18e4bf00f3e6d1ae84197160764a8509d33059b517) |
| 19:34:02 | 22 | JUP → SOL (native) | Executed | `0x1880db62…` [🐞](https://debug.barn.cow.fi/order/0x1880db62be6c8d8e9689e68243bee987152b7ac2be4802ed068810dc770a2d95) |
| 19:34:04 | 23 | JUP → SOL (native) | Executed | `0xe6694279…` [🐞](https://debug.barn.cow.fi/order/0xe66942790f166c8e4c6ed762161902410e67d2995b3528d7f4bb742dfb89c171) |
| 19:34:05 | 24 | JUP → SOL (native) | Executed | `0x48dd4290…` [🐞](https://debug.barn.cow.fi/order/0x48dd429031e7d75ef5948f04d2e703867d25059d8f4a121012b6137a86fe904f) |
| 19:34:05 | 25 | JUP → SOL (native) | Executed | `0x7ede12ae…` [🐞](https://debug.barn.cow.fi/order/0x7ede12ae401109b456fc5eb4ffb269cb5229ab5c61cf5ed6e7dccae983dceac0) |

## Order outcomes

| Outcome | Orders | Share |
|---|---|---|
| executed | 25 | 100.0% |

## Time to execution

From order creation (API) to the settlement's block time (RPC).

| Median | p75 | p90 | Max |
|---|---|---|---|
| 57s | 78s | 99s | 111s |

## Solvers

### Settled orders (on-chain fee payer of the settlement tx)

| Solver | Orders settled | Share | Txs | Median CU | Median time to execution |
|---|---|---|---|---|---|
| AuwL…YzVj | 25 | 100.0% | 19 | 187,794 | 57s |

### Competition (autopilot logs)

Counted per auction, so one order can appear in many auctions.

| Driver | Proposed | Won | Landed | Win → landed | Rejected pre-submit | Failed / missed deadline | Solve errors | Solve timeouts |
|---|---|---|---|---|---|---|---|---|
| grafiks | 354 | 44 | 39 | 88.6% | 2 | 6 | 0 | 0 |

Why winning settlements were rejected before submission:

| Driver: reason | Count |
|---|---|
| grafiks: SimulationFailed | 2 |

Autopilot:

- Winner skipped because the sponsored creation blockhash had expired: 0
- Orders filtered for `unfunded_sell_token_account`: 56 times
- Orders filtered for `unreceivable_buy_token_account`: 56 times
- Orders filtered for `in_flight`: 22 times

## By order kind

| Kind | Placed | Executed | Fill rate |
|---|---|---|---|
| sell | 25 | 25 | 100.0% |

## By token pair

| Pair | Placed | Executed | Fill rate |
|---|---|---|---|
| wSOL → JUP | 25 | 25 | 100.0% |

## By trader

| Owner | Placed | Executed | Fill rate |
|---|---|---|---|
| `Bjgd8KYr6TRWPg3hcm9Axtw7qPCn2QbCrXfMefvagrmB` | 1 | 1 | 100.0% |
| `DpYLUbUd69qnQJcqiSyLbHqMzBSpFj3CaiyFMqM1Dzvq` | 1 | 1 | 100.0% |
| `7szSkWM1Jdevor1T5Zk9Xyw7HqXRDnsuMVs1B6xU6y6c` | 1 | 1 | 100.0% |
| `2xy9hiqLAAmeX1vRqN2fn3j8dici24xrpKdEAvcv9ArM` | 1 | 1 | 100.0% |
| `5rfyp1CQfdq34o1GepcEiM3ZaeoBJ9br8XuLq6Ss4iGn` | 1 | 1 | 100.0% |
| `7SFnzXsdeJPRUaWVMYk7NJhLdwFYqNjAzdjS45vMpXtN` | 1 | 1 | 100.0% |
| `5fBSBQ6eG9oWrUGQJbfWzpej61QcXmyNsJdiQL5wpD6Q` | 1 | 1 | 100.0% |
| `Dqo7x1xJoy1UrshsDVAuAUBDvDhXDQw2Szu6rNphRi4k` | 1 | 1 | 100.0% |
| `2ASUsUZrdXUsJSuRzrP2eGUz3ZciALKEuLKAg2H7eSVE` | 1 | 1 | 100.0% |
| `GTUwUpiXK6qsb2ZMvLfErpa7Saj6fkaXo2aB9Ui2CDaA` | 1 | 1 | 100.0% |
| `9DZRNc35bUHKUwFzp5Wmum1pgNnGVcVaiBQcq93rrYsK` | 1 | 1 | 100.0% |
| `4NshMT4GwD6LHVkpqGntQSWcPTHu9B8y4KvQ51GxN7sb` | 1 | 1 | 100.0% |
| `7rWTkih1iDyaw2K6uHY3igX4kw5EfPQTkFXLHghm9dZS` | 1 | 1 | 100.0% |
| `79Cs13M6qxiHaCQD5NCcoTjrN7HU4M9K6UTw8dHARiqv` | 1 | 1 | 100.0% |
| `CCo554Re6Dh1qQPxuUNmjJZQDaErLjZViFek1RqxEbBT` | 1 | 1 | 100.0% |
| `CXx49zrvodtvhtGGCxLsm4MrNTP4rWGSzXXmtrM8AJS6` | 1 | 1 | 100.0% |
| `BpbRUmfXnM3kF4i5eKrtM2ExV3VEzayNsZ6MK6jQkBMf` | 1 | 1 | 100.0% |
| `8Dy1yXgSpXrKdG48cHn8XMc1TPMZdpg5KVK9K1pQx6UL` | 1 | 1 | 100.0% |
| `Gyxgho7MNJQJaFMwPBTWouJZBKnAkYRp2XL2nZ7Mih1x` | 1 | 1 | 100.0% |
| `CNQMMmiqqSUyW8DTGXTKPSaj1fLqVMaKSt67pYDuPxPw` | 1 | 1 | 100.0% |
| `ubyLqApYJJtBGGs42TBeXczgH82GpRYZDp6KrEcVgG7` | 1 | 1 | 100.0% |
| `8ispXb26VcTnNgSESnNyUYokTuVwn7gwQDPHSVJTH118` | 1 | 1 | 100.0% |
| `41g5AP4pwFjQUTbqmqySAckcHa4Cd9LWbcgVka6WpFqs` | 1 | 1 | 100.0% |
| `Cxd9j3hqMiJJLiJyhRcxCpec3DL6YMWwxdgLPPbnr8pq` | 1 | 1 | 100.0% |
| `6xcQjdSZKF4zJ7Q7MB6UQmjowYojV7Apms9JLjrygVaK` | 1 | 1 | 100.0% |
