# Helixbox composite test report

Session: `2026-10-20-11-18-composite-helixbox-run`. Environment: staging on Solana mainnet. Start: 2026-10-20T11:20:28.344Z. Saved observation end: 2026-10-20T11:49:19.446Z.

**TLDR:** 62/200 eligible planned flows filled (31.00%); 138 failed.

**Adjusted performance:** 62/200 eligible planned flows = **31.00%**. 3 unsupported non-zero transfer-fee rows are excluded from both numerator and denominator. Original schedule: 203 rows. Raw run evidence is unchanged.

A flow counts as filled only when its saved row result is filled. Main, prerequisite acquisition and cleanup orders are separate below; retries can produce more than one order per flow. These rates describe the recorded test conditions and do not establish production readiness.

Saved run status: finished=false; 0 unfinished scenario phases; final account cleanup pending for 6 wallets. A false finished flag can reflect cleanup rather than unfinished trading. This is the saved snapshot, not a new on-chain balance audit.

## Biggest recorded issues

68 × main error: 404 Not Found: NoLiquidity: no route found; 36 × main timeout; 29 × quote failed: 404 Not Found: NoLiquidity: no route found

`NoLiquidity` means the quote path returned no usable route; it does not prove that the token has no liquidity or that the named solver caused it. Creation failures occur before settlement. A later cancelled order does not identify why a candidate solution failed.

## Scenario results

| Scenario | Eligible planned | Filled | Failed | Pending | Saved phase |
| --- | --- | --- | --- | --- | --- |
| solver-standard-pairs | 6 | 2 | 4 | 0 | finished |
| solver-same-direction-25 | 25 | 0 | 25 | 0 | finished |
| solver-burst-sell | 84 | 48 | 36 | 0 | finished |
| solver-cow | 15 | 3 | 12 | 0 | finished |
| solver-token-coverage | 52 | 5 | 47 | 0 | finished |
| solver-transaction-size | 10 | 0 | 10 | 0 | finished |
| solver-fresh-accounts | 8 | 4 | 4 | 0 | finished |

Saved placements: {'main': 102, 'cleanup': 39, 'acquire': 5}. Successful scenario settlements (main + prerequisite acquisition, excluding cleanup): 67 distinct signatures. Selected-order batch sizes: {1: 67}. Shared signatures show batching; they do not establish direct CoW matching.

Timing: median 15.960s; longest 70.858s across 67 successful main/acquisition orders. Endpoints: journal placement → simulator-observed fulfillment, including polling delay.

<details>
<summary>solver-standard-pairs — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | SOL → USDC | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 2 | 2 | SOL → USDT | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 3 | 3 | JUP → USDC | sell 0.5 JUP; self | failed | acquire JUP quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 4 | 1 | SOL → USDC | buy 0.25 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 5 | 2 | SOL → USDT | buy 0.25 USDT; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 6 | 3 | JUP → USDC | buy 0.25 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-same-direction-25 — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 7 | 4 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 8 | 5 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 9 | 6 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 10 | 7 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 11 | 8 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 12 | 9 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 13 | 10 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 14 | 11 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 15 | 12 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 16 | 13 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 17 | 14 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 18 | 15 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 19 | 16 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 20 | 17 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 21 | 18 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 22 | 19 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 23 | 20 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 24 | 21 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 25 | 22 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 26 | 23 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 27 | 24 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 28 | 25 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 29 | 26 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 30 | 27 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 31 | 28 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-burst-sell — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 32 | 29 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 33 | 30 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 34 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 35 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 36 | 29 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 37 | 30 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 38 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 39 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 40 | 33 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 41 | 34 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 42 | 35 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 43 | 36 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 44 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x3600dfa2f0267c98344d4b67e5c1b7dd8e2019d03a458e9a82008c0a045ef442) |
| 45 | 30 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 46 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 47 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 48 | 33 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x8965ced6b54feb2ce060786b889a7c4dd0dbf8bfcb6a26b5baa0e2e02c5a3bfe) |
| 49 | 34 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 50 | 35 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 51 | 36 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 52 | 37 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x2ea49321c4c7af7e5aab1a309523d4c7ba688c2860fdf3391cd09ee7e38fe7a0) |
| 53 | 38 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 54 | 39 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 55 | 40 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 56 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xea2134e5361d18a02c6cb4223fdc5f64d812ff4668601b26871f569b19137722) |
| 57 | 42 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 58 | 43 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 59 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 60 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x0ef8d1fb208f3a32aa4c0191facaa5716aa2ab50651dd5901c730dabe87da7c9) |
| 61 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x318ec6849424e0d08b1e3ffda7a5a3178e9f02f0a6ccd5fc5d8013bbf30d0e45) |
| 62 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 63 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 64 | 33 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xa29464b482da07d85187322bd5a0658e292bcc25ee2a43b5eb38d798014c4013) |
| 65 | 34 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xe011c31f0d933c9f37b4f3a48b5cea8ee6d4aac593f2e173ff5064dac9badda9) |
| 66 | 35 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 67 | 36 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 68 | 37 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x23babb23a0b7dd989056700b86841679eac7c99d96454ea0a8d2be35c0068175) |
| 69 | 38 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x61801a9bb608178ad7a0054d58ad4392289437019f25fbb7738833db12ad5796) |
| 70 | 39 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 71 | 40 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 72 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x172d1d864dc61d6b3579710187a77b76de88208740d7b145ae24598c9497ff3d) |
| 73 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xb0ea441b35bc174cc2011623545be8aaecb0112f107520a6560b3bcb30507b33) |
| 74 | 43 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 75 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 76 | 45 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x049af8ff6e76d2bec5637e81e07f8730355aa75f69922cefd84b3f43b8b2dd9b) |
| 77 | 46 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x3a526a11616cb89b6d477f82f17a94c79950923dae37b5b7ac033353e9b8a349) |
| 78 | 47 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 79 | 48 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 80 | 49 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x50d470c08c44f8dd6144c5da3ee051e9ef6f10c9448dea078e03f6b94662aed0) |
| 81 | 50 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xcb3125861a93fc78e30e478ff9b868951ee193f9788b03e980dc9bc20950ce8b) |
| 82 | 51 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 83 | 52 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 84 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xc53682bbb41120b625722a340bff62e4066a90af1073c583fe1f27a6fbec261a) |
| 85 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xb372dde7e6a9b22cc0e9ca0d8ec0c7fd719c248cc66adb1fd28cdc0c7ee77874) |
| 86 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 87 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 88 | 33 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xf1cf56452e29d9b92a8a94a39bb1f9283fc1911474db24fed32296ce3292b2b3) |
| 89 | 34 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x8ee832f1cac64a961f48057d02b66b46f5de76810eea6944f671bdd0bb9ea760) |
| 90 | 35 | SOL → USDC | sell 0.0035 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xf42fc1e20af3a9718ed498c66d455a8d424a8b30ee8bba3eb3dfe4f83989a797) |
| 91 | 36 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 92 | 37 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xf2f215e735ad3266de26cea5b3d359b3b92a1d1ec84a9a86ec9858b6054addb9) |
| 93 | 38 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xfcf375c54de800fb41401ecdee81e54079c1897794ca6f6684350c168c268a7f) |
| 94 | 39 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 95 | 40 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 96 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x85f3e7417f81d0f11511ff9be7dd7af2cbd44e55439270e94f069d01ee301fc7) |
| 97 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x82cbfbc55b654690b161718e6cc572753b71df0caaecb41a05bb3e149e59dfe6) |
| 98 | 43 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 99 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 100 | 45 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xd67e86848914c47a50a61aa6cb94567865904b1640a8e2d0444e75dc9c9450cb) |
| 101 | 46 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x1fe89ec533b2a977f23482194418d49e0d8ee0d723565d66629bfcd6ee39a599) |
| 102 | 47 | SOL → USDC | sell 0.0035 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x9e5c456c6adf03db88076ca3408a7e1c49bbe2f9821112c5a18ec2eaa320cadc) |
| 103 | 48 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 104 | 49 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xb13161492db998b9f19bfa9230eb6aa1a7d3691375d20b4552b74a38b143e59b) |
| 105 | 50 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x8c488372a1f7bbba6978b5383af3696558d00658b6e40151a9bdf6833efe0332) |
| 106 | 51 | SOL → USDC | sell 0.0035 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x88dca487a7900e09e0e0cd2c04af8f1e8fce88742fd6b134fd948dec89024a4d) |
| 107 | 52 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 108 | 53 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xc42492cd633d38455e99ee5b5b0de7fcacd7a38807ee8cebdfc08d060ae82aa4) |
| 109 | 54 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x48a765493435f8eb73c8ffc5625091acd6971fc46e44ee3251c7b4f8e71ead0d) |
| 110 | 55 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 111 | 56 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 112 | 57 | SOL → USDC | sell 0.0025 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x3bef5b87ea3c58d7d5a24ab394c80f03b4cc9140f02ed22082ca22b9001b4dca) |
| 113 | 58 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0x13e3037eb1ec302c8ac0c61105262bb53b79e476cc8695596dc6b058cdca0f0d) |
| 114 | 59 | SOL → USDC | sell 0.0035 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xee0d3592c679b68cce0b12b3305e27b1eadfce73fbb5aa28b719170d17f5aee7) |
| 115 | 60 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |

</details>

<details>
<summary>solver-cow — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 116 | 62 | SOL → USDC | buy 2.6 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 117 | 64 | SOL → USDC | buy 1.3 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 118 | 65 | SOL → USDC | buy 3.1 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 119 | 66 | SOL → USDT | buy 3.1 USDT; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 120 | 67 | SOL → USDT | buy 1.1 USDT; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 121 | 68 | SOL → USDC | buy 3.2 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 122 | 61 | SOL → USDC | sell 0.02 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 123 | 62 | USDC → SOL | buy 0.02 SOL; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 124 | 63 | SOL → USDC | sell 0.03 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 125 | 64 | USDC → SOL | sell 1.2 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 126 | 65 | USDC → USDT | sell 3 USDC; sponsored | failed | main expired | acquire: [Debug](https://debug.barn.cow.fi/order/0x4ccd8dd237fbc6f4ec062332d7e4960aa68fc164b019e28175076bffd1ec086e); main: [Debug](https://debug.barn.cow.fi/order/0xfcc550c55c7ba2534761a6ade4379d29dc2c9e2c0e9a2b0618a21f4cd3073fdd) |
| 127 | 66 | USDT → USDC | sell 3 USDT; sponsored | failed | main expired | acquire: [Debug](https://debug.barn.cow.fi/order/0xb45bcdbdfc05322c637a29d2080aa3898159556fa29a474a9bf1e941ef32cdd0); main: [Debug](https://debug.barn.cow.fi/order/0xa04ef079d91e75299899a450137bbcd76ad46504c5330495859c0462cb557ad1) |
| 128 | 67 | USDT → USDC | sell 1 USDT; sponsored | failed | main expired | acquire: [Debug](https://debug.barn.cow.fi/order/0xcd3143d4cf50dbb35347d1b2227022914ec2d11a4ad49a439688dc1799bbb978); main: [Debug](https://debug.barn.cow.fi/order/0xb5be240225feeb80cbc692c3acf9148b1fd60afe0ecd4df56c13cba4cad15234) |
| 129 | 68 | USDC → USDT | sell 3 USDC; sponsored | failed | main expired | acquire: [Debug](https://debug.barn.cow.fi/order/0x006aea0c7f17dddd4cfdfce067e5ab90a3038b1e343d4c9a044c74fce26e5879); main: [Debug](https://debug.barn.cow.fi/order/0x17b5dd391532e23e1e16bd21441c82700423b4ec954d473f32b6d321fb91a488) |
| 130 | 69 | SOL → JUP | sell 0.02 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-token-coverage — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 131 | 70 | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 132 | 71 | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 133 | 72 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 134 | 73 | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | sell 0.01 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 135 | 74 | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 136 | 75 | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 137 | 76 | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 138 | 77 | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | sell 0.01 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 139 | 78 | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 140 | 79 | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 141 | 80 | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 142 | 81 | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | sell 0.01 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 143 | 82 | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 144 | 83 | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 145 | 84 | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 149 | 88 | SOL → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 150 | 89 | SOL → [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 151 | 90 | SOL → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 152 | 91 | SOL → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 153 | 92 | SOL → [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 154 | 93 | SOL → [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 155 | 94 | SOL → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 156 | 95 | SOL → [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 157 | 96 | SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 158 | 97 | SOL → [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 159 | 98 | SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 160 | 99 | SOL → [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 161 | 100 | SOL → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 162 | 101 | SOL → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 163 | 102 | SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 164 | 103 | SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 165 | 104 | SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 166 | 105 | SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 167 | 106 | SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 168 | 107 | SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 169 | 108 | SOL → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 170 | 109 | SOL → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 171 | 70 | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | buy 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 172 | 71 | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | buy 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 173 | 72 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | buy 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 174 | 73 | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | buy 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 175 | 74 | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | buy 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 176 | 75 | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | buy 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 177 | 76 | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | buy 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 178 | 77 | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | buy 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 179 | 78 | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | buy 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 180 | 79 | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | buy 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 181 | 80 | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | buy 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 182 | 81 | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | buy 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 183 | 82 | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | buy 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 184 | 83 | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | buy 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 185 | 84 | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | buy 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-transaction-size — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 186 | 110 | SOL → EURC | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 187 | 114 | SOL → JLP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 188 | 110 | SOL → EURC | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 189 | 111 | SOL → EURC | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 190 | 112 | SOL → EURC | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 191 | 113 | SOL → EURC | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 192 | 114 | SOL → JLP | sell 0.00125 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 193 | 115 | SOL → JLP | sell 0.00125 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 194 | 116 | SOL → JLP | sell 0.00125 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 195 | 117 | SOL → JLP | sell 0.00125 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-fresh-accounts — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 196 | 118 | SOL → USDC | sell 0.1 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 197 | 119 | SOL → USDC | sell 0.1 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 198 | 120 | SOL → USDC | buy 10 USDC; self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 199 | 121 | SOL → USDC | buy 10 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 200 | 122 | SOL → USDT | sell 0.1 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 201 | 123 | SOL → USDT | sell 0.1 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 202 | 124 | SOL → USDT | buy 10 USDT; self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 203 | 125 | SOL → USDT | buy 10 USDT; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

## All recorded orders

<details>
<summary>Main, acquisition and cleanup order ledger</summary>

| Row | Trader | Step | Time (UTC) | Order | Final saved/API status | Debug tool | Settlement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | main | 2026-10-20T11:20:30.292Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x00e45e9d338c6ef7316d5d39f549e801bdf0cf278065680890afe2e58a1e403a) | [Transaction](https://solscan.io/tx/21e5cr9JCxvYKSdAdFNtiQJ7vmKvn6rm3Y8xBbEQ7aE451NEgtsjZjQAxpxcHQ31wMB81rbacFEdYQJutJ5T6hWp) |
| 2 | 2 | main | 2026-10-20T11:20:30.590Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb288191986500ce5d32e36713a586dbdb3d027887705747aad19f65d75bd0c8b) | [Transaction](https://solscan.io/tx/5LxTrVG9n5ohXheFFjt99feCiweS48YfecKrtGPv9HtoFh9VB7DwzmJkCsyZYzDjkHxkNPYw5kZtaj1ras79FxuN) |
| — | 1 | cleanup | 2026-10-20T11:20:40.645Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf42ac4da19f02f2707f79aab9d5526dbf7f11d9b44cb9ae8af650867db8081ab) | [Transaction](https://solscan.io/tx/51ZsKmTfiuWsheqPQTKubRdnVaTrFcKUjHL1Kow3cqp1Y6wsJK1wXv4ydeZuEKYzoCqQSyiUT9zcE8czsGCnUZbq) |
| — | 2 | cleanup | 2026-10-20T11:20:41.693Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8c1d09be331fa1e111e75c8e0841b45d1381711ba9c01cf26dd99ae4acb88915) | [Transaction](https://solscan.io/tx/5g2df8vgiCoUGL8oWKHTXb5ND9zJevLTq65PRr5Eb4kfxgEKFmzQWpZ8CWonjynNjGMhpXSkjmTySohXzi8gH6hv) |
| 34 | 31 | main | 2026-10-20T11:22:49.675Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7c0b9d986eb19f215196a2d5ee76d9869065082527abb4fc28429236e54f8d30) | [Transaction](https://solscan.io/tx/36QWkqhbj2JYSpYejM4jSrHj6KeCqJKybTwxstK7oEsufr6bt8bXbsZ59LCnXmtxCPqWg6iZ5J7n8sUXHkojycYr) |
| 32 | 29 | main | 2026-10-20T11:22:50.116Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3a1e52b2c866c2baaa92dea1550b0bf2d7d1376f4e94a7e44687535f01c9e64d) | [Transaction](https://solscan.io/tx/2Y5WceYW6nbaPhGsADJADk5CYPmFy5kGbaFdGy7ZQSx2YaMvnPiHYAosz6ogFqviwEu53SKrBcev7H7dzbrvKxGa) |
| 33 | 30 | main | 2026-10-20T11:22:50.943Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x41cd1c1dfee293e7e3d75ef345a6af0bf88d20415656d761c4358e145777cb6d) | [Transaction](https://solscan.io/tx/2kjVFEmihLhucQvp19Bok8huqvMNHzABpbyV1cKrESk86GLWUYTVJyEWwRqUAaPxRpPHkMU6KC4MTXmkmVgYqRyo) |
| 35 | 32 | main | 2026-10-20T11:22:51.034Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf24103876b5624dd829a45c51430387f3165672dadb80e91dca3f070a7fe6d7c) | [Transaction](https://solscan.io/tx/Zm491DEc631Nwd1XcZFjB3SpAXvpjzxoQ3oN1AfC7obLCQnCeKcvss6uc1D3Dg5Rmea1QTmSwSpHJY1F9sHp8GM) |
| 40 | 33 | main | 2026-10-20T11:24:20.166Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf80139b804901135991c44e925e6528f00366021a22868a6f8c1083fba6e5d07) | [Transaction](https://solscan.io/tx/31kdHk97umMZASqVUQQCHGHunaqoj1Tvkpc4kAfstuJniTRXsLSHEYkhVstzQefbqTR8SnWhavh1Cgr9V79ksLQg) |
| 41 | 34 | main | 2026-10-20T11:24:20.270Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xccdfaa144e02b7b65ebe66795fcc76480814e58724f76e7605879e5e2889be04) | [Transaction](https://solscan.io/tx/5spxxvq8s4Uy48RMXLXgF4qLvizJHQNFPULaHMaGeqc6dptPBjz5f3whSXHAT512XRupfTQNwzKHmj86dAdK4mLv) |
| 42 | 35 | main | 2026-10-20T11:24:20.572Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x13520714d2bc3715c49d581504387ed490c460d52eb5a3f6df38d28dd6708503) | [Transaction](https://solscan.io/tx/31V4qkhy6uhy4586rwobeeYN51krF5NMZRqLKAij3wZ3ccvBfUWCE3sdXq4CsvUJMVGM5C87yqN7yeKYtWZx2dMP) |
| 43 | 36 | main | 2026-10-20T11:24:20.844Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x782cbd1c117cf3b70d5199f371432e3a487a1342acd2de895a5a7550c42c846e) | [Transaction](https://solscan.io/tx/4xSSAiqnHM14hSRqHBZ9UKmtsrA2JaN8RiSAiTSyqrSSi7X9ASChGnpBc3Xhz7cwmJkTprUcz5cHB316uWPqefNj) |
| 39 | 32 | main | 2026-10-20T11:24:21.059Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x94bf815573821d1c441a88fa268c124ec34539223d13d5cc55ef46d73cb95bad) | [Transaction](https://solscan.io/tx/44Sm4fy87s8L6Y4CNYSN7ufWEDKiNPsnik9L4CZtv46yFKiaAJnSvcktt7rqugbtvQQKPMbTeQNovpAFxXTDjitj) |
| 37 | 30 | main | 2026-10-20T11:24:22.908Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x520a2adc87684379e5a3a3358cd45427a8e3e4363f2c624a81bf16533abe8b3e) | [Transaction](https://solscan.io/tx/3JnAJuRqpGi72cLUngc4G4BH5Kd6KqMgnFwrR41PWUytAJnEF4uPKBxuP2GSHqSiQsEtQ5vuqEoT1dh9V9Egjg2o) |
| 38 | 31 | main | 2026-10-20T11:24:24.142Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x06472355d4870a441e7405531c9e4ca0c864de42feefeeac4a90b0af6891a612) | [Transaction](https://solscan.io/tx/xjtzQUvk4rZKjJ3iDqGt6dmXz2XDXpyqgZWBqziLU98g5ehVLX2EdxYSvSfP2waAHUjszA4SnUGPVuMFHrux467) |
| 36 | 29 | main | 2026-10-20T11:24:24.243Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb3dbcca05841da11e5f3caa5f110a9d248ab1226a075af67b13afdb123fc9b2d) | [Transaction](https://solscan.io/tx/2PDazGHapzWgPJAiNm22r2mhiZJxbPuKHqLTTq3vhH3t7rQTtjqCDRUmunXNtBuZ6LfJCwsv1qoHS8bRgUomm7CD) |
| 47 | 32 | main | 2026-10-20T11:25:51.662Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4e851ee3209bc1f13c4bebff80c36705e6da0f327dfd684b3b7e6aecf419ec6b) | [Transaction](https://solscan.io/tx/2b7yuyBEhpEMC8Ny2aP1VK4WJfssTBUvjqJo3BcQ2LrraAmzmiERMT7k8YPdqDynHn8Lz2obXUjhfejyveWiRih4) |
| 50 | 35 | main | 2026-10-20T11:25:52.062Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x28e6d6bcee368cafdcbf058a76c090b9081e3f64eaae119f5d532bf6aa9834ab) | [Transaction](https://solscan.io/tx/2pTbbyrivSEYptihoR2BCBs1AMarEHZfWukR4b5e9NCZCncgRiKHLtakJu7GT6MAnAWSbkS7CR9258VcDrHRx5Ef) |
| 49 | 34 | main | 2026-10-20T11:25:52.161Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0a8632af36fdffe2f600d12309d51df15cb5e05e926bb4292317176274acc7a4) | [Transaction](https://solscan.io/tx/438pUkv96NY25erwMWgBYQLhGp1mazJG83nNTacSE2cSJ6k2cLwxV5vnUCwiAkDga1yhvUSRb31ZFDFFwycCkGtN) |
| 52 | 37 | main | 2026-10-20T11:25:52.462Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x2ea49321c4c7af7e5aab1a309523d4c7ba688c2860fdf3391cd09ee7e38fe7a0) |  |
| 53 | 38 | main | 2026-10-20T11:25:52.660Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1f9da9a4c1679ce4cac4c4ead6b18e135b640632986993a99498bcbf43502446) | [Transaction](https://solscan.io/tx/5GMbhrSyyyRhq2XA6tDCKhtR5urkZ97saMRTspZAi685gXDGgCaQRsnBp7dL22KLSkkVc9H18fFgDbhsQnsuYRjE) |
| 54 | 39 | main | 2026-10-20T11:25:52.961Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfb2b22744b3366dc466812d0cdac4a9b41702cd45b5f8926f80095ce3ab46fcc) | [Transaction](https://solscan.io/tx/4LRmNYDpzJK6KAmaQzZw6LyssL8wR7WeGFYMuQPkD2cES8C4XQBdTL59dNboMRuo48QYhLkVfx7N7NxbW55Cg5S7) |
| 56 | 41 | main | 2026-10-20T11:25:53.362Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xea2134e5361d18a02c6cb4223fdc5f64d812ff4668601b26871f569b19137722) |  |
| 57 | 42 | main | 2026-10-20T11:25:53.662Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb75adedb26bdd804356c39897382d0abd46497f8d382da7e76838c5d97b7d05d) | [Transaction](https://solscan.io/tx/5ebnuK7BRw12DpiLuEiDn1mfBvQuoZuGGzvey2yKZ8UyrRRpAn8ziQqFSAyszGdLPfsp28poqyHh4dN2PEeH2aSz) |
| 58 | 43 | main | 2026-10-20T11:25:53.866Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe068b31f577fc73ef963202668f000eee42663f384d96818184153296414df18) | [Transaction](https://solscan.io/tx/4cxUpKbHTGPJPJ8HJJSU4sxvcfdj8eDZLBVFAi5hscWxc3iCC6jYP9aPn7aUu4DsvgcDouPUF516TKfHbDJ3dKvb) |
| 59 | 44 | main | 2026-10-20T11:25:54.163Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0563a7df2f15030eb648291051d621e1076ed025338a0a066c510a31dd52ec52) | [Transaction](https://solscan.io/tx/2yh6N8EWgoG36f1NhPmpSfgNCTnTdUUKy2LGL8zv5d7sJy5o2YtUaLbt9bZj7cg32cc5xQQRKzfAGUxNhHyb9pqq) |
| 51 | 36 | main | 2026-10-20T11:25:54.262Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xac38cd120bfbb1025d9db919d0704b19c1abb93d1917184ef2f02aeb0d9b1978) | [Transaction](https://solscan.io/tx/3krzmDgbM3Dzx5K41P6S7VgwQWsR6KtteRbkwQj3rmUULk8JLux1jGVREBYuZT4yviSp1Ke6dYoH9mZbRZt2SWU5) |
| 46 | 31 | main | 2026-10-20T11:25:54.363Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x265f5075f670203aa3490af9c25605ba4bac29a76c1bbf133c9271e99ed8e47d) | [Transaction](https://solscan.io/tx/3WBxawY93rKgAjFG3nLBj1euV8VikjeVQRWT5mbDm8o1kz3TLsEpLCJb4VjjfPwjrqDtJa3wrVN74ZbCCLvMbEUd) |
| 45 | 30 | main | 2026-10-20T11:25:54.459Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7328a7822dae78756b6faa3c2ea60e145c2ea40b1fefc2f0f3ee4f495bec3bc9) | [Transaction](https://solscan.io/tx/2pH3nsBaMWz9KjBP4deLcnWmkLc2m26Ywqz666t5fs8FMPxAYoYvD2XKwqYFHzEMCsbe2foYXWpYwxCJ9sb1DSuQ) |
| 44 | 29 | main | 2026-10-20T11:25:54.561Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x3600dfa2f0267c98344d4b67e5c1b7dd8e2019d03a458e9a82008c0a045ef442) |  |
| 48 | 33 | main | 2026-10-20T11:25:54.663Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x8965ced6b54feb2ce060786b889a7c4dd0dbf8bfcb6a26b5baa0e2e02c5a3bfe) |  |
| 55 | 40 | main | 2026-10-20T11:25:54.762Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc20e34979341ecd403e39e74ecb64cec05d1f3578f524a03f6d766be9b9ce3ab) | [Transaction](https://solscan.io/tx/5WLQKmp27msMvTJkxQqTkFcXn8VQLvQQSKtcKdFnuqRCLD27YyDBAa7s9uAfLKvjgdstGq8KAb9NByr8uJQ9s9qX) |
| 73 | 42 | main | 2026-10-20T11:27:23.577Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xb0ea441b35bc174cc2011623545be8aaecb0112f107520a6560b3bcb30507b33) |  |
| 75 | 44 | main | 2026-10-20T11:27:23.660Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8bd4e5d19dce0cc2ee31caff9d53fde58b23143ede77ad74c96f5d4c806b1f95) | [Transaction](https://solscan.io/tx/5fkPHG1n8pvv4ynVoJq4gzFYiQuE2pPn6CvYgi8zMWP2oZmW8bXU2XjxP9soANb3VvpFWiqjPw3cyh6rvedaXK7a) |
| 63 | 32 | main | 2026-10-20T11:27:23.962Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x68fb48f06dad10bbfc03c36eb0379e27d23fcd4d25df162b8a3204d00c65075b) | [Transaction](https://solscan.io/tx/5U5qjsott8HfHggJtKMjCdJrGHCZD8kVfG6ddgBSJqeY9uBZ35ooybV1GcWUGJtPCqsd6w8DfTEoh5kMoNNtg31P) |
| 67 | 36 | main | 2026-10-20T11:27:24.059Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe888bf383a744507e25832c586e89b8979f467473641d07b8e41112ec3892c7b) | [Transaction](https://solscan.io/tx/3yoMxbJJWuWE2xWeJbUX4TMfMwk4yCSo1ZyM8dUtuV2bQ5z5aTdqU6mPCAae4itpSN5v8B9Wb3BdUL7NjQAsyEXj) |
| 71 | 40 | main | 2026-10-20T11:27:24.465Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1842636accfab5b16a0b6d5e6c6227ed9bb00eb31d077d49c002f0471efef5d6) | [Transaction](https://solscan.io/tx/ws7S5HVh1AkWwvxHsfhRUiGCbHYsWHxyxWjAriWF3UagyQHDSveQPoeEn1yadu8trNvGnNXn1GeGTwWDX2TVQjn) |
| 62 | 31 | main | 2026-10-20T11:27:24.763Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1703e4b16aaa05c1eee53f8436001abdd65ccee6d3976a8228bb188db7c396e7) | [Transaction](https://solscan.io/tx/3gspxaubLYHJCFtyTMM6dZRbEfVdqE5tuCjLhshrm6JK5P6NnNcGpUgY1An3zCfMKnyAvhnL7J6rj8Ykm8tB5A4q) |
| 66 | 35 | main | 2026-10-20T11:27:24.863Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4bd2cf88a5527d3ad9ae5f09a250f55daa9518438058076296f1f110eadc732d) | [Transaction](https://solscan.io/tx/61wsrMZVHb2wwQyGQ1BNFwuraNU13Wy71v64QoJjdZbqyD9D4e8ag9mKiEk7HuBi5XNRLhCC5CUHG8DH5sfxVsE5) |
| 74 | 43 | main | 2026-10-20T11:27:25.161Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcd92397a3653d653106b19a303c1b48974bbc8c30200a076573c5e1ee8b7a00f) | [Transaction](https://solscan.io/tx/3yHLzqu237FvyFr7K7fZZCQm1AjXS9NNkHntQNkuesFNCqBgHQVFZq9icK2KCB4pdb4TtnQrMXES1nFj9tMNGegQ) |
| 70 | 39 | main | 2026-10-20T11:27:25.263Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x54d7d19f5dca27d9d8d214259a4a5e293cbd1c6b110e54322402c3f0da30a174) | [Transaction](https://solscan.io/tx/3NWzqXVijDts3tbCsvnhKJ6CkJypFqGfDBBhJ7Wm7uf98jie8caz63bENfqtgNQFW4HStR3kXDyCcKeK5y3Jyvix) |
| 65 | 34 | main | 2026-10-20T11:27:25.461Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xe011c31f0d933c9f37b4f3a48b5cea8ee6d4aac593f2e173ff5064dac9badda9) |  |
| 69 | 38 | main | 2026-10-20T11:27:25.861Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x61801a9bb608178ad7a0054d58ad4392289437019f25fbb7738833db12ad5796) |  |
| 61 | 30 | main | 2026-10-20T11:27:26.164Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x318ec6849424e0d08b1e3ffda7a5a3178e9f02f0a6ccd5fc5d8013bbf30d0e45) |  |
| 68 | 37 | main | 2026-10-20T11:27:26.361Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x23babb23a0b7dd989056700b86841679eac7c99d96454ea0a8d2be35c0068175) |  |
| 72 | 41 | main | 2026-10-20T11:27:26.561Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x172d1d864dc61d6b3579710187a77b76de88208740d7b145ae24598c9497ff3d) |  |
| 60 | 29 | main | 2026-10-20T11:27:26.860Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x0ef8d1fb208f3a32aa4c0191facaa5716aa2ab50651dd5901c730dabe87da7c9) |  |
| 64 | 33 | main | 2026-10-20T11:27:27.163Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xa29464b482da07d85187322bd5a0658e292bcc25ee2a43b5eb38d798014c4013) |  |
| 76 | 45 | main | 2026-10-20T11:27:27.261Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x049af8ff6e76d2bec5637e81e07f8730355aa75f69922cefd84b3f43b8b2dd9b) |  |
| 77 | 46 | main | 2026-10-20T11:27:27.362Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x3a526a11616cb89b6d477f82f17a94c79950923dae37b5b7ac033353e9b8a349) |  |
| 78 | 47 | main | 2026-10-20T11:27:27.461Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x471c3316db19b5c383dcd747c13cccf6f4a2f43a00b8078d3470bb771a72e934) | [Transaction](https://solscan.io/tx/ZKHD6qs1M5exVWvS91yAUN4sYVcdJHidXXojSjx5qeTxLbTUFGFnkgxo15m3ZnmrxyTQH7DEdxVCfFYm4iotv72) |
| 79 | 48 | main | 2026-10-20T11:27:27.561Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x869b291955645a0aa62660cc6abf93887457323919cb302ea7d8bbdd00f246ab) | [Transaction](https://solscan.io/tx/T15dAEyC1dfPHe8ZKQvQJ3hF2kHDGxz6TAwrxQ4UR7Ki2nyhRGXvYTpj8zek3uE6iLqinvgXMgNXbKNZvZ8qUPB) |
| 80 | 49 | main | 2026-10-20T11:27:27.663Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x50d470c08c44f8dd6144c5da3ee051e9ef6f10c9448dea078e03f6b94662aed0) |  |
| 81 | 50 | main | 2026-10-20T11:27:27.763Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xcb3125861a93fc78e30e478ff9b868951ee193f9788b03e980dc9bc20950ce8b) |  |
| 82 | 51 | main | 2026-10-20T11:27:28.912Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x411f23b70f525bb3c21d42ead117140267d65780e3b133d60508f87ea17044a6) | [Transaction](https://solscan.io/tx/3cdD3ynfUBjX7yEvaxnVhd3Efbf6T4iutqhWTzGuc3UBfBeQeswyyfcS8CwWW1FQLwsUpmDRLxwW9uYoiE2WJpCM) |
| 83 | 52 | main | 2026-10-20T11:27:29.005Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x66a860467a7bb17c799a85547fd4802971312d32c9d1b8ff1f5879e7b4cc8c72) | [Transaction](https://solscan.io/tx/xuEQZxqpZTNhBUJ2Tf8YY34HFWEZdb4pvt3cCRgjDC5fWzdzoASTAYsLjKVQN1dvq3Sj62Zfcs6CiCotkVhsfMN) |
| 95 | 40 | main | 2026-10-20T11:28:55.264Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xdfe9d98754858c30726d0785876f8ae506ca85b9344cc9c76073a0c54829eb56) | [Transaction](https://solscan.io/tx/3SA1MbLSbtXYzcyhDVEogacatkC5hWyKWWkYmHhkZM58CvkvhnAS8PiZer4aP1zyDaAoDYPoPb8EgaEGXgod3oeS) |
| 107 | 52 | main | 2026-10-20T11:28:55.667Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2e694ffda2f7b30712bd5dc19cb8ba528e92a8240b177340a532fb91a28721df) | [Transaction](https://solscan.io/tx/4dQs4BruE3oD1XnpwoS4oDdCgKdbyhY7QDEMMCzYHwjLonKhWw6JWvcifdGVctTtFVdHV4RBmB2SKVUkYqbzUoEP) |
| 103 | 48 | main | 2026-10-20T11:28:55.759Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb15bd55cb12c73a95fa72b2fb253403a72008d835bafcf5071a2822c73b35664) | [Transaction](https://solscan.io/tx/qq4J36q8Ms9eyvUjebJDCrBqoN42VbHCpkygu2Kh5XQ7TxnFCW3znsrC6AbPRNLEWiitMQMdhmNVRs43YMWDccz) |
| 86 | 31 | main | 2026-10-20T11:28:56.063Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1db657c4adf7a1bbc9745c1424fb14446cbcaa14d30ed68494b67ee6e4050291) | [Transaction](https://solscan.io/tx/5i2suxft34fqqc6LpRQCmsXqUAginQ1ZvZaJeBkqWevB1Riz6acEmxMVqt4iNqMri6Ghcc13Egy1Cn8rnqHe6wuQ) |
| 90 | 35 | main | 2026-10-20T11:28:56.265Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xf42fc1e20af3a9718ed498c66d455a8d424a8b30ee8bba3eb3dfe4f83989a797) |  |
| 98 | 43 | main | 2026-10-20T11:28:56.361Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4735cb43bd8a5576d75553c37f6fc25051a2c9c9b6350e08e3325f7a1145bd1a) | [Transaction](https://solscan.io/tx/4hX4awMcdGM4a79FrcB1VmYqSQrW42EnsnFrBmWgpXQ7Sea6UptuB4U7eZsWck6QnwuvpMkDuMZWgzWtxwhzv587) |
| 106 | 51 | main | 2026-10-20T11:28:56.661Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x88dca487a7900e09e0e0cd2c04af8f1e8fce88742fd6b134fd948dec89024a4d) |  |
| 102 | 47 | main | 2026-10-20T11:28:56.962Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x9e5c456c6adf03db88076ca3408a7e1c49bbe2f9821112c5a18ec2eaa320cadc) |  |
| 97 | 42 | main | 2026-10-20T11:28:57.160Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x82cbfbc55b654690b161718e6cc572753b71df0caaecb41a05bb3e149e59dfe6) |  |
| 89 | 34 | main | 2026-10-20T11:28:57.467Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x8ee832f1cac64a961f48057d02b66b46f5de76810eea6944f671bdd0bb9ea760) |  |
| 96 | 41 | main | 2026-10-20T11:28:57.564Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x85f3e7417f81d0f11511ff9be7dd7af2cbd44e55439270e94f069d01ee301fc7) |  |
| 93 | 38 | main | 2026-10-20T11:28:57.861Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xfcf375c54de800fb41401ecdee81e54079c1897794ca6f6684350c168c268a7f) |  |
| 92 | 37 | main | 2026-10-20T11:28:58.063Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xf2f215e735ad3266de26cea5b3d359b3b92a1d1ec84a9a86ec9858b6054addb9) |  |
| 85 | 30 | main | 2026-10-20T11:28:58.261Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xb372dde7e6a9b22cc0e9ca0d8ec0c7fd719c248cc66adb1fd28cdc0c7ee77874) |  |
| 100 | 45 | main | 2026-10-20T11:28:58.361Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xd67e86848914c47a50a61aa6cb94567865904b1640a8e2d0444e75dc9c9450cb) |  |
| 104 | 49 | main | 2026-10-20T11:28:58.566Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xb13161492db998b9f19bfa9230eb6aa1a7d3691375d20b4552b74a38b143e59b) |  |
| 88 | 33 | main | 2026-10-20T11:28:58.870Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xf1cf56452e29d9b92a8a94a39bb1f9283fc1911474db24fed32296ce3292b2b3) |  |
| 105 | 50 | main | 2026-10-20T11:28:59.161Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x8c488372a1f7bbba6978b5383af3696558d00658b6e40151a9bdf6833efe0332) |  |
| 87 | 32 | main | 2026-10-20T11:28:59.363Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd4febc38e01db4757cbb7b9e7452f034dfe28807e939898950ef1330be0020be) | [Transaction](https://solscan.io/tx/4pDRRe2wUhq6ZvDnYgXRUTJ9CYcyQNZVDJLHpUp6N7q5jZdHcAh3KE8yxirf3Y6RH4tDweU1wti6EXwpTDMPNpw4) |
| 99 | 44 | main | 2026-10-20T11:28:59.561Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5d926e2b7625fc34f3116023972f2307fb43ca4c72c3ada718c821742c11d54e) | [Transaction](https://solscan.io/tx/Gn2FtS7fzYZGkxavuBw66ZC886H7TpfBGQScLwjYs138S2oaTq69bMqZLTwUu8LiCBMbJXhn2uSEZpSied8H6KQ) |
| 91 | 36 | main | 2026-10-20T11:28:59.861Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7c8bcba052bcfa7e077c06a3a1849fe34a19ec7fbb577b799ce1f8f662ed7e3d) | [Transaction](https://solscan.io/tx/21a7HTJtgzU2Tfc4rsMATedTcwqBLR1E1r1GHMiaCTirmaVnZuSh9XztBfyneEVTZ5tdxokXEDE8N3ZGJJ4i5yna) |
| 94 | 39 | main | 2026-10-20T11:29:00.064Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7738561508aceec5ae46ed0203bfaefb167f1ddad76e3fbd22e7eb6921f9d595) | [Transaction](https://solscan.io/tx/3vmQ7KTF3YuaytS7vxqx6HAESBjaf7RxT63AAwnnA2maHP7JKcXS4n7SS4bnUEwGPuQLLMH9oDLPQMkNXaNCwZmP) |
| 101 | 46 | main | 2026-10-20T11:29:00.163Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x1fe89ec533b2a977f23482194418d49e0d8ee0d723565d66629bfcd6ee39a599) |  |
| 84 | 29 | main | 2026-10-20T11:29:00.261Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xc53682bbb41120b625722a340bff62e4066a90af1073c583fe1f27a6fbec261a) |  |
| 108 | 53 | main | 2026-10-20T11:29:00.363Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xc42492cd633d38455e99ee5b5b0de7fcacd7a38807ee8cebdfc08d060ae82aa4) |  |
| 109 | 54 | main | 2026-10-20T11:29:00.463Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x48a765493435f8eb73c8ffc5625091acd6971fc46e44ee3251c7b4f8e71ead0d) |  |
| 110 | 55 | main | 2026-10-20T11:29:00.561Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe5350e87ffeee7a1680925ea514e1bb6b33d4e31e3e30d8189b57a87798aa7f9) | [Transaction](https://solscan.io/tx/z14YuYiqBnqKeyDEUiCKPVRx5pMJDnmm8gXtTHhzXQP5G51LdwG5p5ma6hkvfrQn6FULm5hjdsBPxvLzRKG7N38) |
| 111 | 56 | main | 2026-10-20T11:29:00.663Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x440786e8143ec729f34769e2214875236053fd0cd8f50daa2f422486848c7ebd) | [Transaction](https://solscan.io/tx/3dVHeNH2cBMcig5b7Hav9aHxuuDMhqr6F5cK7HWiFCoSdTMUtxEdrygGJxRBchkS3YBZ3YBn39d4jHeKauQdZ4E) |
| 112 | 57 | main | 2026-10-20T11:29:00.764Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x3bef5b87ea3c58d7d5a24ab394c80f03b4cc9140f02ed22082ca22b9001b4dca) |  |
| 113 | 58 | main | 2026-10-20T11:29:00.864Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x13e3037eb1ec302c8ac0c61105262bb53b79e476cc8695596dc6b058cdca0f0d) |  |
| 114 | 59 | main | 2026-10-20T11:29:00.959Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xee0d3592c679b68cce0b12b3305e27b1eadfce73fbb5aa28b719170d17f5aee7) |  |
| 115 | 60 | main | 2026-10-20T11:29:01.061Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9f9b3af55916cbe3598edc58805a4b8dc170aaf73202d318cff47d1441bc8570) | [Transaction](https://solscan.io/tx/4MUQXL4K6w6tHPrgdxf8WUEAGgTysjDZ2d1iEPQAzwBxLbJFxDXR8wjF93h3dgVQ3CCAH3E4Rivb8qEd3cgUL8Ax) |
| — | 30 | cleanup | 2026-10-20T11:30:15.529Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xdfd5e3c266e5eee04671873d038b59da65e8ce7f39d7edf042d25c29b83c7079) | [Transaction](https://solscan.io/tx/2wJ1zCHe4h1GVmUXoEr1GFosTwi3GWJUrUYnzqxGHwtA8pEdKZjE1hzDtqC5UBmNWkzwW7d7wuo3WF68NfQGkyU7) |
| — | 31 | cleanup | 2026-10-20T11:30:16.593Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x73f767d5791b9e7ec107a39c661763e67d878f18cb02800c190f8897a5624498) | [Transaction](https://solscan.io/tx/4kPe7jjRTSbMGUmH8d7mqcU2PD1KZqoFDdf9ZpW6cVyXojnvKWei1iBtLpfFvXXGFhhYMVaqg1ykMpSie2z4DCYD) |
| — | 32 | cleanup | 2026-10-20T11:30:17.246Z | cbbtcf → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3de4a6c87de78a4a7c1c6d31603ca77b52549d4a6bf60424c45eda60c5336d65) | [Transaction](https://solscan.io/tx/2uDsioqEge9ZLS6G8irzvdm58d8eFWcuv7FGnDPMMPmGPWHWyavpm9xaUWbaX7eJ4sgKYom7357bjgdW9F4Q7qGY) |
| — | 32 | cleanup | 2026-10-20T11:30:17.736Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5a2fe5ac46c5b6291b9ad612bcd0aa50db7540b766c9e368898826b9b22b2f4b) | [Transaction](https://solscan.io/tx/1Q4pA4KNtisbzV6dMBQjBC6qqKranywFx5dttqvt84enUcQgG294yXAE3LF2RDbS2NSBNzmLMq1FSeiFLr9919X) |
| — | 33 | cleanup | 2026-10-20T11:30:18.200Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xcc427a5493a80ff93f82586359c2287f9c8b0fe5a387df7a9f83b2211d0c1bfa) |  |
| — | 34 | cleanup | 2026-10-20T11:30:19.444Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x29ea2ca72151596d7483c1ba0cac5662a67fda5576c1f85eddb0af867e26cc6b) | [Transaction](https://solscan.io/tx/5qzbGU3a2gizXRUCdkUTpp7iiqjWxgU3fz6zXNBcDpefFM7P8Xb68zuUrHamBBFqoJhyAWdcNeVxZTqGi4qemCza) |
| — | 35 | cleanup | 2026-10-20T11:30:20.371Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x081bf0407d2f343e95e772c011aa2f075def4b5373d3ff097058f27f1e5b60be) | [Transaction](https://solscan.io/tx/2CXX3jYd4CfquPy34NeC31nckbE1BatLUMtbfNTWxYZt9TJsZjX5oNoryC4L5fmziXago81wVdM5aHyYKfXKY79a) |
| — | 36 | cleanup | 2026-10-20T11:30:22.913Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x72ab5a6cc6c748f7c18217e58f8bd1f0f3509944fb7d273a29b6ab72d8c1c1a7) | [Transaction](https://solscan.io/tx/ocsNHgaafU84QiQST2e5hpv22pdSgUZgjnrTynqtSFuy1CbvpYKXSKa553vBx8jKqyY3Tbd4JDfpBDxaAut31hw) |
| — | 29 | cleanup | 2026-10-20T11:30:24.661Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x99c60cc5e5f5dddbf8f04e1d2f189f9ecf5f35afb603864555dcb4539ecb8441) | [Transaction](https://solscan.io/tx/2STo9kmzNLxxuKiHb9H6n5P5WCwSjBQxdQ4jgrM17E1XCzCCvsF9dq2UQUBvwAKLA7eRTMvZtrnWjW9R78aqvS4n) |
| — | 38 | cleanup | 2026-10-20T11:30:30.150Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x20cfb5ef9d8b5dfdbe23c13087eb7b238dd4f4f0dbd9b9f79a7c68fc89c3eaef) | [Transaction](https://solscan.io/tx/61NvLfyP239BKeN1RvijWkX6bkaLp3qEb9rFxYn8gezkkaRf3m8RL6HUPMLqJ11YVFJBjaeAwG4siGU8JhB1Nhe3) |
| — | 39 | cleanup | 2026-10-20T11:30:38.238Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x86386f803839c096f48d7200cc24def369f232a0e8e30a7378a51089766b5642) | [Transaction](https://solscan.io/tx/2hUcMAgt4tocJ2hRK2PjX8Qs5boLPZWUVUZNzZ3XU3jxMnY9tAsPqwdYdsVjMsUUfsMn3PNHzREAaLVFvcypMnV5) |
| — | 40 | cleanup | 2026-10-20T11:30:42.184Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x48acd8bab8ed2380548d3876fea8868333fbb8841a6db5c12633b7b1b42591bc) | [Transaction](https://solscan.io/tx/2fDPUBYd7jnq56QktLxXGo21oFqn2tr6CGj6s9CmKgGAyKDHGNpkewVha7bXqUL1ZWEZp56ADxwAXTviE6ZubqJS) |
| — | 42 | cleanup | 2026-10-20T11:30:49.469Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x359ccd0a1eef5fb0af572bc71806245834c3cce32f6d3a0fd72be1d8808b2fb3) | [Transaction](https://solscan.io/tx/2VDMop34MbznJtXq9dLr5pfNsbS7JzTyCCXwopQ9J5WQgheS5Zpq7fU3eatoG5RjKsemEn7xj3wyb5wa2UNwstZA) |
| — | 43 | cleanup | 2026-10-20T11:30:53.207Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd9af6b2a6edadc41046e4f1a9e1cc0b4bd79044bc21d6984f122a6cc3bffede1) | [Transaction](https://solscan.io/tx/5Kgf9HGXLHeJWr3haaNMsuWhrocnoVvxJDTJURsPMtFCJgceEpoCZ4sFbkT8VusQSTkrxk2HMmMJipr2gk7W7k6V) |
| — | 44 | cleanup | 2026-10-20T11:30:57.893Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc0a702a5c73b41512289ff1327018f89d9cc56b0e21f1b4c20d560fe47c3efbf) | [Transaction](https://solscan.io/tx/2vn5EqxW5HUxnSk2pwPK3hF5EXFB7hHNVBXwgKvCPkmn6k4WmCBiRZhSHzQkLAThbFotbBmHd6uqTrULkPWxzBd2) |
| — | 47 | cleanup | 2026-10-20T11:31:13.693Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3dab8eabc07f5e7a07c757ada56f42cd4c9fb483d9efaf0257e4a127d7f10ee0) | [Transaction](https://solscan.io/tx/5751ffzxSNdqVEKVcfmDPj9AcTdiyrwNz7PN3uyWEpdUpj4vd4BS1a8DweHh3ha7vVJUgThq1thpeE5J45wXeAkP) |
| — | 48 | cleanup | 2026-10-20T11:31:19.970Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x889b5c1ab26c557d19b609a7c02584c948736b21a6839a68f28579bc88fffb1a) | [Transaction](https://solscan.io/tx/44zD4HxdhQcbwNdJkuQZXrb6JkhEXzAduLo597xBDh3k8GjWQyFwp8vV1f2HzjxSLuVHTh3mXPsvQaKPJ1KTLQVV) |
| — | 51 | cleanup | 2026-10-20T11:31:23.614Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2ae26ca90411b219faaeb1fa4e3816da137b655419de2414e1790800c133ca1d) | [Transaction](https://solscan.io/tx/4Lmy2zkRrCax9DFh1RgjEoaLZbtipn8MCCvgVt9EHxMTTYP1ReUBccmwi6zxwhNgxV4jt54nxkeLB1MsEkzvcxxk) |
| — | 52 | cleanup | 2026-10-20T11:31:40.402Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xee691dc211c769773db9ee29b0ee2a57fa41a23c1eadb09c94abe350fb3fd889) | [Transaction](https://solscan.io/tx/3UPNcvsW7EQncvKn2p18wbxBCBSwoPSo3dQuNsYXsHoc9wV8UspyVXgV6GX99jTo3PmQLTBuVvBhGQr5qMjAXYvg) |
| — | 55 | cleanup | 2026-10-20T11:31:43.835Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4c0859338f77755075ad461013d5282b8645226dbc27a93a1cfe9a4bb0e22ece) | [Transaction](https://solscan.io/tx/C5ssebEP1oCg64KufaWEfBjkiTVrwVqDPBNTqTEKURDgAgFqpKZR2kf9L5kchCrknQu8XXjpHi98kBFF5fRFzoi) |
| — | 56 | cleanup | 2026-10-20T11:31:43.927Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1d47209acf52b7b6c6840107a95ad283b1ab2add75724055a998dbc3124eb446) | [Transaction](https://solscan.io/tx/2TVxtUjRUZWUSLWkdLnTU7Y77U2Mt4Vv6gb8kJXNW4JLGfZGgLxxEVgtGuMHZj7uVc8jMk5A2k9nUtYN8XnsDfoZ) |
| — | 60 | cleanup | 2026-10-20T11:31:59.486Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe3bb6950b34af4ec71e6daa9e5480d52d9b18f43b007d21b23c2f6cb86b3d69c) | [Transaction](https://solscan.io/tx/4zphYKAYD1noXmiUkp9qzLaBMCexTPDfVaxPULbQBezaw4CKHrhrypMGZfv75Q5Wyvk4WvbBYXPJvEHNgr9gs1mM) |
| 122 | 61 | main | 2026-10-20T11:34:52.698Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa254e0969388475ff0249b2899f12de46ef6756194f346a7763014231aaebc6a) | [Transaction](https://solscan.io/tx/5aiQiajsqgwRb5PgHXapkSUfJsHn8padYqSxtDgt2Ra9xmc77t1VwX5iSkEAoKjonVGNwghmkZyxT67UivVeDSJy) |
| 124 | 63 | main | 2026-10-20T11:34:52.788Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe3c3e41a224cbb58b453040075e1c16962911089e8a5be8a84d0a1690e4f3c5b) | [Transaction](https://solscan.io/tx/4JbUmcHHYeNFGsHLVNVF9YaqQq9at8e7rVUwH5e8vZCSrtfafDPBgNDMeGZuxVqqGTAbw3Y391V1TjrGj9LdyVYx) |
| 126 | 65 | acquire | 2026-10-20T11:35:00.200Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4ccd8dd237fbc6f4ec062332d7e4960aa68fc164b019e28175076bffd1ec086e) | [Transaction](https://solscan.io/tx/5hhtf2ffjyiTNgduSJUK67qQJJN9V4dTXPoZVcofGKkxJoHZfrogfFzmUZqVddGGK8ssZr7CJBsBwYRyBMT1fs8s) |
| 127 | 66 | acquire | 2026-10-20T11:35:00.232Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb45bcdbdfc05322c637a29d2080aa3898159556fa29a474a9bf1e941ef32cdd0) | [Transaction](https://solscan.io/tx/FdJY3h7fYuvffuowhw67uRRVLx7ixSgr3JRPXP8XjoCfS7T9V3eAhisLJLFcu1jhUqqkXArPYcyr6gK1bBpAcY3) |
| 125 | 64 | acquire | 2026-10-20T11:35:00.245Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x27d46607c695269898bcdecb4c4b2c5df06c193405967d1e1375827f50d3c78e) | [Transaction](https://solscan.io/tx/4fkcpUu5WpAnvUbKotG4WT5GSDhszbB2PWF84y1RNiDFc32kE7XpSZRHZ2Y6KgZwXi4tW73sDyTf8opRb6HnnooG) |
| 128 | 67 | acquire | 2026-10-20T11:35:00.318Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcd3143d4cf50dbb35347d1b2227022914ec2d11a4ad49a439688dc1799bbb978) | [Transaction](https://solscan.io/tx/4rJjKoAWbDXuqqHswyCZUVNiqjmZMDX2ydGteWXt5hcR89usMoWsTsYFX76LmfW87LVX6WJkdY335YUb1kLHBve2) |
| 129 | 68 | acquire | 2026-10-20T11:35:00.711Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x006aea0c7f17dddd4cfdfce067e5ab90a3038b1e343d4c9a044c74fce26e5879) | [Transaction](https://solscan.io/tx/3eJqJjF6Y5xqkd7DV2XTeb5ke6VCzux5tmvVWFJRBsWYbyTveuuk6A9rRf63CFJYcYVz3jnp66JckWCaqGTZ23MP) |
| 127 | 66 | main | 2026-10-20T11:35:04.158Z | USDT → USDC; sell | expired | [Debug](https://debug.barn.cow.fi/order/0xa04ef079d91e75299899a450137bbcd76ad46504c5330495859c0462cb557ad1) |  |
| 129 | 68 | main | 2026-10-20T11:35:04.479Z | USDC → USDT; sell | expired | [Debug](https://debug.barn.cow.fi/order/0x17b5dd391532e23e1e16bd21441c82700423b4ec954d473f32b6d321fb91a488) |  |
| 126 | 65 | main | 2026-10-20T11:35:10.535Z | USDC → USDT; sell | expired | [Debug](https://debug.barn.cow.fi/order/0xfcc550c55c7ba2534761a6ade4379d29dc2c9e2c0e9a2b0618a21f4cd3073fdd) |  |
| 128 | 67 | main | 2026-10-20T11:35:11.252Z | USDT → USDC; sell | expired | [Debug](https://debug.barn.cow.fi/order/0xb5be240225feeb80cbc692c3acf9148b1fd60afe0ecd4df56c13cba4cad15234) |  |
| 125 | 64 | main | 2026-10-20T11:35:20.512Z | USDC → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa997d2ef0c4bda9f5d1f3b1ad90692c75ad2ce586281e590240d78ebbd0f3abd) | [Transaction](https://solscan.io/tx/b6b7ZpNR3Qr1jUcSS2iucWdXHRjWfVWNasgafMhzMHSu2kuupLKwspQ5Sfg6yMUBWaMqUaBnktyYsfzfrVbtGh6) |
| — | 61 | cleanup | 2026-10-20T11:35:48.932Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x41aee35a3133bfbe3e3ae2a7dbf19a2e5ee241fa98c28a16825267fd95b9d984) | [Transaction](https://solscan.io/tx/icmLFL95eDr6dDyZDVHnBSh6pFJKaKvVLmoKEYsctTCT4DLmwCF9RzDa8RsGspFjUatmxJwMFMZuwGXH7CZxheG) |
| — | 63 | cleanup | 2026-10-20T11:35:50.768Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbe659cbb560cd8f5720acb07ebff40188d8fbb7811c6da84f7c9475379c367a4) | [Transaction](https://solscan.io/tx/289tvHtiuckefHRaKbzjHsi2jMnJwJMEJUNdTjfXzWgH5JdVYR99VBLbdTrgQsnrSDfRWrEBaZxLwkeohEFJNgYh) |
| — | 65 | cleanup | 2026-10-20T11:35:52.965Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3bf84555b617827312af3a9ea877f75fa48a6666f4ad9eb190ad8eda32328862) | [Transaction](https://solscan.io/tx/vdPrA8wRSfRZcEBjadcSpK7diabCX74np75a9zUn4SRpNKRW14uo7VY47XS6jMrwrTFaj7vHcnBN2W99CCqYS1D) |
| — | 66 | cleanup | 2026-10-20T11:35:54.145Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb32d59304fa2f32fdabf1ebc8e034bd89cd4e6c0fa63dddd81bf08b690133965) | [Transaction](https://solscan.io/tx/5JUkDjQ9WZcf5jZsyhyn63mxekrgo4S91chpnhLR4tYehmrrUrmrH2fSnLzwUav2hoMjnDb4s81R6FPVp7aoxqFC) |
| — | 67 | cleanup | 2026-10-20T11:35:56.038Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb3365688a9cf2d149c09fa19f971aeb693dce0af234742296257f3717f1194c8) | [Transaction](https://solscan.io/tx/2j69tzWCeijJnq2LXgRncKTXc38KhzSmVHZ6mxJATMQ6qHDbqr3hJi8U6jpKa3KVgz2RbhavGLJfw4zwnpPhF6Ru) |
| — | 68 | cleanup | 2026-10-20T11:35:58.635Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xda05ed3f157e0768f43440581b0801c710008fb2f70121eb64fb1ca1db9e75f6) | [Transaction](https://solscan.io/tx/4Wnx7cSQKtVbJ34qPvFCR1843ZSEC3cPmh8XgxdvMZ6AJD28NcUZMAB6Ry8ap7ArEKjkGptNp69qbLuJnWDnrSu3) |
| 151 | 90 | main | 2026-10-20T11:37:04.991Z | SOL → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4dc05eff08559dd19d7a4afa72139184db4ac3c2e825e61bc65adb26a7dca489) | [Transaction](https://solscan.io/tx/2K6XJRCxfdJUUaiTpi6CMR7CA7Pp2JdAh4VRhjmgf1Vtj54RxoXu1hry2brDkP1apj7y9yoKUUY8nUVRhx8oN4Ux) |
| 155 | 94 | main | 2026-10-20T11:37:06.324Z | SOL → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x52fa855b1415cf0d2c5894163b0fbc2a4212677c8fccdea106b93522dd3bc92f) | [Transaction](https://solscan.io/tx/47SB9BxmSjRoBuEUPJuH2meNwoGgLYGdpcHzQwD43462NCTfb7Fzxktvmui76kthhXGiZ3ShdzkuXShYnvYBfmAT) |
| 166 | 105 | main | 2026-10-20T11:37:09.139Z | SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x938f754b82a3830764243dde6eb005115daf886f84738b0550ff5bc9c7b5c984) | [Transaction](https://solscan.io/tx/3YSdtWyjtVBP6skihWnMe9EZUmEdGqteWEaEkcge9fpJcmuQfyuXxyibmv9GkUNxSo3WBicLnFxh4PJuD9ERSAAk) |
| 167 | 106 | main | 2026-10-20T11:37:09.429Z | SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x81a837ac645b04a711902491f390926e4840bbbc4122a073df5ce1dd05986292) | [Transaction](https://solscan.io/tx/647h7hAkLvfK16ArxUWA9LZDuf6xu7W3ZzNmQVzkpsy2XJQQeKHisbtG4r4i829yVyYqQdAdLZwoctkuQvtPz1U8) |
| 168 | 107 | main | 2026-10-20T11:37:09.727Z | SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x425d57caf51b731b9c028f7e3987488b01cad83b528e1e0fad99c57e57cb2aef) | [Transaction](https://solscan.io/tx/3BojR2sYQ4KSRLUDq5bZbCVZ9AWYqutHX3Lx3bHRJrquJ9739LKzYocg3w6VtseQyg2SxKBmcJfvy5ZfhLcUbxax) |
| — | 90 | cleanup | 2026-10-20T11:37:36.391Z | 7GCihg → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd3b08914d89f9f1b38cb418fdf4660d5821ed73d0cf45d0d0d94d3ac848f0612) | [Transaction](https://solscan.io/tx/5AHGQ5epN7XJqoRQAiBPs7pE3jS6qepWkvP89dVrGs6AJ4U1DcbixRmgJSUtHTp8AiJEU1rts6dM29zgSNMGS1Dz) |
| — | 94 | cleanup | 2026-10-20T11:37:48.358Z | cbbtcf → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x36c5319254c4c833c16844c01448e85ef05e3abd11c3d12b2c5c62a4b6897e29) | [Transaction](https://solscan.io/tx/4CnHEDhmqtXHAdbQqwQ4zTRXeqy7sUnEPBT8UGEkgXc7F42sahgfudfVD4Fb4xuMf7waUJrwE88JVSNd7daNVFfZ) |
| — | 105 | cleanup | 2026-10-20T11:38:10.368Z | 9BB6NF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x92e74bd47b84a79ace45577e93d84a8a3affc1c36896f8221edf4a0ae2d1c220) | [Transaction](https://solscan.io/tx/4WNexFcChLSPJyCPwwE7Dhho3w8fgKKFzezr3zoK85ze4HdKqK8R9rsKVK2forZUcZxqkBbwKbjmXsF3Vhm72C7H) |
| — | 106 | cleanup | 2026-10-20T11:38:11.608Z | MEW1gQ → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa62c7b1f85e8aa6791ae231a96f2738e7a85d2b41d5e1a8573b019dcba55d8bb) | [Transaction](https://solscan.io/tx/4ytTgKj8cakLAjK4QdbpMJm2h38ZDfwY5ZFQLdXZCsauUFFLdFZX2zeB4TxeNFKEonN3ecbDS7KbGcPuE5y8e7Bm) |
| — | 107 | cleanup | 2026-10-20T11:38:12.408Z | ukHH6c → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0094993eda7678c94e611eead33b2d1a6ae9c9b7d8efc312caa9731e11355f9e) | [Transaction](https://solscan.io/tx/2KSP5shxApcKs3jvYZBP1bGwCqNgtAv9aa5q5deUCGY83uaEL1t9qRLKuLTU2GsA1hEv8XVP56BNTP7btqLKifND) |
| 197 | 119 | main | 2026-10-20T11:41:17.557Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x02b8dece1f5a071f440027616731764078b000f0eb007f2473bb7c776a686374) | [Transaction](https://solscan.io/tx/2xCUZhSCoEgXaWci1u9SZdQTQyQnmksZGs7bShhVRv8kEfeV3TghnWq31dbDvsp8wuhhfRiHAJBoZQXkSonrcjwy) |
| 201 | 123 | main | 2026-10-20T11:41:18.149Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5e45cef78965c19c3710ede4e02d3f8f8258517a323daad35f2e9c2213c864de) | [Transaction](https://solscan.io/tx/3QXxbKRk6qLYmnGr2NwDQvkB2XnT5AKj4xPbjrcwRy58Mef4qyRATYpefJD2nHvUepRQTeBE7Efn9XddyCYeRg2a) |
| 196 | 118 | main | 2026-10-20T11:41:18.524Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc0d2275e81adbfa9be6c294bb56df86dee0f51339ac2971a6a646c4db7a1707b) | [Transaction](https://solscan.io/tx/2Emers3TfWiUskTTzZByrCBLD9zsy4Zn6TLLtpTxeGw3ws3mvjAdxqvYVcfJasQ9L5aj176s3S2WALSm6LP5MDqS) |
| 200 | 122 | main | 2026-10-20T11:41:18.878Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd4431fca2cfd1e3f2e1294db0f1975c72a53bb45637d90998e191d6ac203acd5) | [Transaction](https://solscan.io/tx/3CfAMLBLDN88UWWgtmfztSLoAbSyFQTQr73RKPVvfRSv4TaNdgKQtJhdHjeceLsEoxqEA2QKXbtSk4QgSFCmihX) |
| — | 118 | cleanup | 2026-10-20T11:41:33.337Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5695e0d53b14946a231ae14538d34a6830e20e156ea506207a97fd83edd769f8) | [Transaction](https://solscan.io/tx/bz3mLUa5GBcEKn23QLPeNvFQAhgB4KYFdESFpVPmY6kzkwt48eesp9NQCu61AZN5uop3vqP9eCH3EXJ472MV1fm) |
| — | 119 | cleanup | 2026-10-20T11:41:34.500Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x392324c8f35d213d386951c1dfe986e405d7ca675d5e6ff0f1d273bb3be636aa) | [Transaction](https://solscan.io/tx/4y2kyMKQS7nJCtF6QQiwYdmf9i5At75Y24neqZA1J9jrjMkmkpPM3Qs1j6NdjE3jDoSQhhKD3w4nrEUcCyWLJnKm) |
| — | 122 | cleanup | 2026-10-20T11:41:37.440Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd0c02fc45d549d607fd0c4e7553ddad6485f724c857d5567b7f28ea2182c4ba7) | [Transaction](https://solscan.io/tx/4hWZd4qwmWC3uDUUhyexojK2CzW99mqMt7VsXYyoP3T35qHAVkPuffGEEpXn8wm3aZQ9LNPwN9iK6miX7G6Re8yx) |
| — | 123 | cleanup | 2026-10-20T11:41:38.336Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x612e519ff00dcae601451da045fe59d88b7b137825c8e6f35cc4397404013dae) | [Transaction](https://solscan.io/tx/3xUYTGGANdZgoEuayPwWRHc9njZLYjJpQrT9vhPyDbsk1ESjEfB79VpfDyWbFaMp7kZQQ5ytN8MYtSQWy6qDbtLz) |

</details>

<details>
<summary>All placement and quote errors (unsupported fee rows excluded)</summary>

| Row | Trader | Step | Stage | Time | Exact error |
| --- | --- | --- | --- | --- | --- |
| 7 | 4 | main | quote | 2026-10-20T11:21:29.326Z | 404 Not Found: NoLiquidity: no route found |
| 8 | 5 | main | quote | 2026-10-20T11:21:29.469Z | 404 Not Found: NoLiquidity: no route found |
| 9 | 6 | main | quote | 2026-10-20T11:21:29.544Z | 404 Not Found: NoLiquidity: no route found |
| 10 | 7 | main | quote | 2026-10-20T11:21:29.816Z | 404 Not Found: NoLiquidity: no route found |
| 11 | 8 | main | quote | 2026-10-20T11:21:30.017Z | 404 Not Found: NoLiquidity: no route found |
| 12 | 9 | main | quote | 2026-10-20T11:21:30.117Z | 404 Not Found: NoLiquidity: no route found |
| 13 | 10 | main | quote | 2026-10-20T11:21:30.317Z | 404 Not Found: NoLiquidity: no route found |
| 14 | 11 | main | quote | 2026-10-20T11:21:30.516Z | 404 Not Found: NoLiquidity: no route found |
| 15 | 12 | main | quote | 2026-10-20T11:21:30.793Z | 404 Not Found: NoLiquidity: no route found |
| 16 | 13 | main | quote | 2026-10-20T11:21:31.034Z | 404 Not Found: NoLiquidity: no route found |
| 17 | 14 | main | quote | 2026-10-20T11:21:31.120Z | 404 Not Found: NoLiquidity: no route found |
| 18 | 15 | main | quote | 2026-10-20T11:21:31.413Z | 404 Not Found: NoLiquidity: no route found |
| 19 | 16 | main | quote | 2026-10-20T11:21:31.602Z | 404 Not Found: NoLiquidity: no route found |
| 20 | 17 | main | quote | 2026-10-20T11:21:31.812Z | 404 Not Found: NoLiquidity: no route found |
| 21 | 18 | main | quote | 2026-10-20T11:21:31.955Z | 404 Not Found: NoLiquidity: no route found |
| 22 | 19 | main | quote | 2026-10-20T11:21:32.116Z | 404 Not Found: NoLiquidity: no route found |
| 23 | 20 | main | quote | 2026-10-20T11:21:32.436Z | 404 Not Found: NoLiquidity: no route found |
| 24 | 21 | main | quote | 2026-10-20T11:21:32.586Z | 404 Not Found: NoLiquidity: no route found |
| 25 | 22 | main | quote | 2026-10-20T11:21:32.805Z | 404 Not Found: NoLiquidity: no route found |
| 26 | 23 | main | quote | 2026-10-20T11:21:32.960Z | 404 Not Found: NoLiquidity: no route found |
| 27 | 24 | main | quote | 2026-10-20T11:21:33.118Z | 404 Not Found: NoLiquidity: no route found |
| 28 | 25 | main | quote | 2026-10-20T11:21:33.340Z | 404 Not Found: NoLiquidity: no route found |
| 29 | 26 | main | quote | 2026-10-20T11:21:33.532Z | 404 Not Found: NoLiquidity: no route found |
| 30 | 27 | main | quote | 2026-10-20T11:21:33.865Z | 404 Not Found: NoLiquidity: no route found |
| 31 | 28 | main | quote | 2026-10-20T11:21:33.923Z | 404 Not Found: NoLiquidity: no route found |
| 130 | 69 | main | quote | 2026-10-20T11:34:52.540Z | 404 Not Found: NoLiquidity: no route found |
| 131 | 70 | main | quote | 2026-10-20T11:36:57.710Z | 404 Not Found: NoLiquidity: no route found |
| 132 | 71 | main | quote | 2026-10-20T11:36:57.927Z | 404 Not Found: NoLiquidity: no route found |
| 133 | 72 | main | quote | 2026-10-20T11:36:57.955Z | 404 Not Found: NoLiquidity: no route found |
| 134 | 73 | main | quote | 2026-10-20T11:36:58.216Z | 404 Not Found: NoLiquidity: no route found |
| 135 | 74 | main | quote | 2026-10-20T11:36:58.418Z | 404 Not Found: NoLiquidity: no route found |
| 136 | 75 | main | quote | 2026-10-20T11:36:58.620Z | 404 Not Found: NoLiquidity: no route found |
| 137 | 76 | main | quote | 2026-10-20T11:36:58.729Z | 404 Not Found: NoLiquidity: no route found |
| 138 | 77 | main | quote | 2026-10-20T11:36:59.025Z | 404 Not Found: NoLiquidity: no route found |
| 139 | 78 | main | quote | 2026-10-20T11:36:59.221Z | 404 Not Found: NoLiquidity: no route found |
| 140 | 79 | main | quote | 2026-10-20T11:36:59.331Z | 404 Not Found: NoLiquidity: no route found |
| 141 | 80 | main | quote | 2026-10-20T11:36:59.626Z | 404 Not Found: NoLiquidity: no route found |
| 142 | 81 | main | quote | 2026-10-20T11:36:59.736Z | 404 Not Found: NoLiquidity: no route found |
| 143 | 82 | main | quote | 2026-10-20T11:37:00.061Z | 404 Not Found: NoLiquidity: no route found |
| 144 | 83 | main | quote | 2026-10-20T11:37:00.149Z | 404 Not Found: NoLiquidity: no route found |
| 145 | 84 | main | quote | 2026-10-20T11:37:00.421Z | 404 Not Found: NoLiquidity: no route found |
| 149 | 88 | main | quote | 2026-10-20T11:37:00.933Z | 404 Not Found: NoLiquidity: no route found |
| 150 | 89 | main | quote | 2026-10-20T11:37:01.444Z | 404 Not Found: NoLiquidity: no route found |
| 152 | 91 | main | quote | 2026-10-20T11:37:03.768Z | 404 Not Found: NoLiquidity: no route found |
| 153 | 92 | main | quote | 2026-10-20T11:37:03.970Z | 404 Not Found: NoLiquidity: no route found |
| 154 | 93 | main | quote | 2026-10-20T11:37:04.430Z | 404 Not Found: NoLiquidity: no route found |
| 156 | 95 | main | quote | 2026-10-20T11:37:04.951Z | 404 Not Found: NoLiquidity: no route found |
| 157 | 96 | main | quote | 2026-10-20T11:37:05.172Z | 404 Not Found: NoLiquidity: no route found |
| 158 | 97 | main | quote | 2026-10-20T11:37:05.544Z | 404 Not Found: NoLiquidity: no route found |
| 160 | 99 | main | quote | 2026-10-20T11:37:06.217Z | 404 Not Found: NoLiquidity: no route found |
| 159 | 98 | main | quote | 2026-10-20T11:37:06.221Z | 404 Not Found: NoLiquidity: no route found |
| 161 | 100 | main | quote | 2026-10-20T11:37:06.627Z | 404 Not Found: NoLiquidity: no route found |
| 162 | 101 | main | quote | 2026-10-20T11:37:06.840Z | 404 Not Found: NoLiquidity: no route found |
| 163 | 102 | main | quote | 2026-10-20T11:37:06.962Z | 404 Not Found: NoLiquidity: no route found |
| 164 | 103 | main | quote | 2026-10-20T11:37:07.287Z | 404 Not Found: NoLiquidity: no route found |
| 165 | 104 | main | quote | 2026-10-20T11:37:07.372Z | 404 Not Found: NoLiquidity: no route found |
| 169 | 108 | main | quote | 2026-10-20T11:37:08.224Z | 404 Not Found: NoLiquidity: no route found |
| 170 | 109 | main | quote | 2026-10-20T11:37:08.336Z | 404 Not Found: NoLiquidity: no route found |
| 186 | 110 | main | quote | 2026-10-20T11:39:01.994Z | 404 Not Found: NoLiquidity: no route found |
| 187 | 114 | main | quote | 2026-10-20T11:39:02.091Z | 404 Not Found: NoLiquidity: no route found |
| 189 | 111 | main | quote | 2026-10-20T11:40:31.984Z | 404 Not Found: NoLiquidity: no route found |
| 190 | 112 | main | quote | 2026-10-20T11:40:32.053Z | 404 Not Found: NoLiquidity: no route found |
| 191 | 113 | main | quote | 2026-10-20T11:40:32.105Z | 404 Not Found: NoLiquidity: no route found |
| 193 | 115 | main | quote | 2026-10-20T11:40:32.387Z | 404 Not Found: NoLiquidity: no route found |
| 194 | 116 | main | quote | 2026-10-20T11:40:32.602Z | 404 Not Found: NoLiquidity: no route found |
| 195 | 117 | main | quote | 2026-10-20T11:40:32.792Z | 404 Not Found: NoLiquidity: no route found |
| 188 | 110 | main | quote | 2026-10-20T11:40:32.884Z | 404 Not Found: NoLiquidity: no route found |
| 192 | 114 | main | quote | 2026-10-20T11:40:33.194Z | 404 Not Found: NoLiquidity: no route found |

</details>

<details>
<summary>Cleanup exceptions and remaining balances</summary>

| Trader | Time | Evidence |
| --- | --- | --- |
| 31 | 2026-10-20T11:30:33.989Z | {"step": "cleanup", "event": "cleanup_done", "sold": ["1.808906 EPjFWd…"], "burned": [], "leftover": ["0.002058046 jupSoL… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "69789945"} |
| 36 | 2026-10-20T11:30:41.883Z | {"step": "cleanup", "event": "cleanup_done", "sold": ["1.655607 EPjFWd…"], "burned": [], "leftover": ["0.058305 27G8Mt… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "69824264"} |
| 30 | 2026-10-20T11:30:50.868Z | {"step": "cleanup", "event": "cleanup_done", "sold": ["0.929595 EPjFWd…"], "burned": [], "leftover": ["0.001771982 mSoLzY… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 3, "swept": "69843985"} |
| 34 | 2026-10-20T11:31:05.673Z | {"step": "cleanup", "event": "cleanup_done", "sold": ["0.619933 EPjFWd…"], "burned": [], "leftover": ["0.242159 HzwqbK… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 3, "swept": "69876122"} |
| 48 | 2026-10-20T11:31:41.892Z | {"step": "cleanup", "event": "cleanup_done", "sold": ["0.827783 EPjFWd…"], "burned": [], "leftover": ["0.000064 5GgRAE… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "69888555"} |
| 33 | 2026-10-20T11:31:50.277Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.258007 EPjFWd…"], "closedAccounts": 1, "reclaimed": 4, "swept": "67440000"} |
| 3 | 2026-10-20T11:44:45.130Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.25 EPjFWd…"], "leftover": [], "closedAccounts": 2, "reclaimed": 0, "swept": "22966880"} |
| 31 | 2026-10-20T11:46:02.458Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.002058046 jupSoL… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "21478440"} |
| 34 | 2026-10-20T11:46:04.891Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.242159 HzwqbK… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "21478440"} |
| 33 | 2026-10-20T11:46:06.088Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.258007 EPjFWd…"], "leftover": [], "closedAccounts": 1, "reclaimed": 0, "swept": "21478440"} |
| 48 | 2026-10-20T11:46:06.793Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.000064 5GgRAE… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "21478440"} |
| 30 | 2026-10-20T11:46:11.474Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.001771982 mSoLzY… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "21478440"} |
| 36 | 2026-10-20T11:46:15.913Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.058305 27G8Mt… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "21478440"} |
| 64 | 2026-10-20T11:47:07.091Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.044987 EPjFWd… (quote failed: Bad Request {\"errorType\":\"SellAmountDoesNotCoverFee\",\"descri)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |

</details>

## Detailed investigation from the saved report

The following is the original checked investigation, with unsupported fee-token table rows removed. Its historical summaries and comparisons may quote the original raw schedule. Use the adjusted performance and scenario results above for current scoring. Exact errors, ownership caveats and order links are retained.

<details>
<summary>Saved investigation, errors and transaction evidence</summary>

# Helixbox solver test report

Date: 20 October 2026. Environment: staging / Barn on Solana mainnet. Selected run: `2026-10-20-11-18-composite-helixbox-run`; started 11:20:28 UTC, scenario and cleanup activity ended 11:49:19 UTC, observed through 11:50:19 UTC; data fetched 11:52:24 UTC.

**TLDR:** Helixbox completed 62/203 planned trades (30.5%); 62/102 placed main orders filled (60.8%). Most gaps were no usable quotes and small burst orders timing out, while 4 sponsored orders hit oversized settlement candidates. Check the quote/fee integration first; cleanup is still pending for 6 traders.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Not achieved: 2/6 planned flows filled | Integration team + Helixbox: trace exact-buy and JUP quotes |
| 2. 25 same-direction sells | Inconclusive: 0/25; no placed orders | Restore SOL → JUP quotes before rerun |
| 3. Sell bursts | Not achieved: 48/84 filled | Integration team + Helixbox: align quoted limits with fees |
| 4. Opposing orders / CoW | Inconclusive: 3/15; pairs blocked | Integration team: reduce transaction size; test team: verify pair overlap |
| 5. Token coverage | Not achieved: 5/55 filled | Helixbox + integration team: check quotes by kind and token |
| 6. Transaction size | Inconclusive: 0/10; no placed orders | Test team: restore quotes, then measure serialized bytes |
| 7. Fresh accounts | Sell flow achieved: 4/8; rent goal untested | Test team: make receiving-account creation part of settlement |

No matching earlier Helixbox report was found for this environment; this is the baseline.

## 1. Standard pairs

**The full pair-coverage goal was not achieved.** SOL → USDC/USDT sells worked, but the JUP flow and all exact buys stopped at quoting.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 2. Main orders: 2/2 placed filled. Acquisition orders: 0/0 filled. Median / longest fill: 3.205 / 3.276 seconds.
Completed / planned rows in scope: 2/6.

Scope: 203 planned rows, including the 6 planned setup rows in the opposing-order scenario. Main orders are the primary order for a row: 102 were accepted by the API; 62 fulfilled, 36 cancelled and 4 expired before on-chain creation. There were no main-order retries. The 98 `NoLiquidity` failures comprise 97 main quote requests and 1 prerequisite acquisition quote; all 29 planned exact-output buys failed before placement.

Total transactions means distinct successful settlements for main and prerequisite acquisition orders: 67 overall (62 main + 5 acquisition). Creation, funding, failed attempts and cleanup are excluded. All 67 contained 1 selected scenario order each. Overall median / longest observed fill: 15.960 / 70.858 seconds for these 67 orders; main-only median / longest: 19.114 / 70.858 seconds for 62 orders. Timing is journal confirmed placement → simulator-observed fulfillment, including polling delay. Tables use placement time for successful examples and first recorded failure time for errors; row/trader numbers use combined-session numbering.

**Ownership unknown — quote failures:** exact saved API error `404 Not Found: NoLiquidity: no route found`. This means the API produced no usable route, not proof that a token has no liquidity or Helixbox permanently lacks support. The driver also recorded `QuotingFailed` / `No valid quote found` during the window; an order-by-order upstream cause was not established. Possible reason (unconfirmed): quote-kind, route or fee integration constraints. Helixbox and the integration team should trace the failing requests before assigning a solver defect.

Competition records show Helixbox as the only active solver in this window, and all 105 saved successful main/acquisition/cleanup orders used its settlement fee payer. Window-wide counts (803 proposed, 108 wins, 105 submitted/observed settlements) include background activity and are not distinct test-order counts.

The raw denominator includes 3 expected autopilot rejections; excluding them gives 62/200 (31.0%). Of 203 rows, 101 failed before placement (98 no-route quotes + 3 expected rejections), 36 timed out/cancelled and 4 creation-expired: 141 failed rows. All 7 scenario phases finished, but `run.finished=false` because 6 traders remain cleanup-pending. Receiving accounts were prepared upfront except in the fresh-account scenario. Settings: 60s fill timeout with cancellation, 300s order validity, no retries; quote/API/RPC limits 5/8/10 requests/s. Fresh-account settings: 500 bps slippage and 0.15 SOL funding per trader.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 11:20:30.292 | Sell 0.005 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | Fulfilled in 3.276s. [Settlement](https://solscan.io/tx/21e5cr9JCxvYKSdAdFNtiQJ7vmKvn6rm3Y8xBbEQ7aE451NEgtsjZjQAxpxcHQ31wMB81rbacFEdYQJutJ5T6hWp) | [Debug](https://debug.barn.cow.fi/order/0x00e45e9d338c6ef7316d5d39f549e801bdf0cf278065680890afe2e58a1e403a) |
| 2 / 2 | 11:20:30.590 | Sell 0.005 SOL → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (self) | Fulfilled in 3.134s. [Settlement](https://solscan.io/tx/5LxTrVG9n5ohXheFFjt99feCiweS48YfecKrtGPv9HtoFh9VB7DwzmJkCsyZYzDjkHxkNPYw5kZtaj1ras79FxuN) | [Debug](https://debug.barn.cow.fi/order/0xb288191986500ce5d32e36713a586dbdb3d027887705747aad19f65d75bd0c8b) |
| 3 / 3 | 11:20:35.038 | Sell 0.5 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); blocked at SOL → JUP acquisition quote (acquisition amount not saved) | **Ownership unknown:** `acquire JUP quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 4 / 1 | 11:20:33.939 | Buy SOL → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 5 / 2 | 11:20:33.945 | Buy SOL → exactly 0.25 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 6 / 3 | 11:20:35.112 | Buy [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |

</details>

## 2. 25 same-direction sells

**Batching is inconclusive.** All 25 SOL → JUP requests failed before placement, so there was nothing to batch.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 0. Main orders: 0/0 placed filled. Acquisition orders: 0/0 filled. Median / longest fill: not available (no fills).
Completed / planned rows in scope: 0/25.

All 25 requests were self-paid sells of 0.005 SOL → JUP. No successful examples or batching measurements exist because no order was placed.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7/t4, 8/t5, 9/t6, 10/t7, 11/t8, 12/t9, 13/t10, 14/t11, 15/t12, 16/t13, 17/t14, 18/t15, 19/t16, 20/t17, 21/t18, 22/t19, 23/t20, 24/t21, 25/t22, 26/t23, 27/t24, 28/t25, 29/t26, 30/t27, 31/t28 | 11:21:29.326–11:21:33.923 | 25 × sell 0.005 SOL → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | **Ownership unknown:** 25 × `404 Not Found: NoLiquidity: no route found`; none placed. | No order ID: quote failed before placement. |

</details>

## 3. Sell bursts

**The burst-filling goal was not achieved.** 48/84 orders filled; 36 timed out and were cancelled.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 48. Main orders: 48/84 placed filled. Acquisition orders: 0/0 filled. Median / longest fill: 25.294 / 70.858 seconds.
Completed / planned rows in scope: 48/84.

All 84 main orders were self-paid SOL → USDC sells cycling through 0.0025, 0.003, 0.0035 and 0.004 SOL. All 48 successful settlements contained 1 selected main order; no multi-order batch was observed. Waves were 90 seconds apart; these results do not establish a sustained throughput ceiling.

| Planned wave time | Filled / planned | Last observed fill from first placement |
| --- | --- | --- |
| 0s | 4/4 | 19.644s |
| 90s | 8/8 | 37.941s |
| 180s | 12/16 | 61.806s |
| 270s | 12/24 | 58.800s |
| 360s | 12/32 | 76.154s |

**Ownership unknown — execution-cost deductions:** 72 rejected candidates affected 26 main orders in the final wave. Exact reason: `trade <order UID> undercuts its limit price after the cut`; the exact UID-specific error is retained below. 20 affected orders ended cancelled; 6 later filled. This confirms some candidate payouts fell below the signed limit after execution costs were deducted, but does not establish why quoting and settlement differed or explain all 36 timeouts. Candidate rejections are not additional failed orders.

All 6 recovered orders with rejected candidates are listed alongside every cancelled order. Their table timestamps show the first failed candidate.

Three submitted attempts (rows 52, 73, 77) passed driver simulation, then failed with `InstructionError(2, Custom(15))` in settlement program `EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb`. Its verified interface names 15 `OrderCancelled`: these were test-cancellation races, not swap minimum-output failures. Row 52 failed RPC preflight and has no on-chain submission record; rows 73/77 have failed on-chain transactions linked below. Cancellation block times: 11:26:55, 11:28:27 and 11:28:31 UTC; driver failure times: 11:26:56.239, 11:28:28.935 and 11:28:32.265. Corresponding deadline warnings describe the same 3 attempts, not extra failures or proof of late responses.

Two further candidates for rows 92/93 failed simulation at 11:30:01.273 with `InstructionError(1, Custom(15))`; the simulation records identify the same settlement program. Both orders ended cancelled. Cancellation errors do not explain the initial failure to fill in the test window. Error mapping: [SettlementError::OrderCancelled = 15](https://github.com/cowprotocol/solana-programs/blob/0a7671c552ee8cb1e6f41c1413ce2eeb1389b8e1/interface/src/error.rs#L56).

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 11:22:50.116 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | Fulfilled in 19.204s. [Settlement](https://solscan.io/tx/2Y5WceYW6nbaPhGsADJADk5CYPmFy5kGbaFdGy7ZQSx2YaMvnPiHYAosz6ogFqviwEu53SKrBcev7H7dzbrvKxGa) | [Debug](https://debug.barn.cow.fi/order/0x3a1e52b2c866c2baaa92dea1550b0bf2d7d1376f4e94a7e44687535f01c9e64d) |
| 36 / 29 | 11:24:24.243 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | Fulfilled in 28.912s. [Settlement](https://solscan.io/tx/2PDazGHapzWgPJAiNm22r2mhiZJxbPuKHqLTTq3vhH3t7rQTtjqCDRUmunXNtBuZ6LfJCwsv1qoHS8bRgUomm7CD) | [Debug](https://debug.barn.cow.fi/order/0xb3dbcca05841da11e5f3caa5f110a9d248ab1226a075af67b13afdb123fc9b2d) |
| 44 / 29 | 11:27:04.229 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/JqXFsxcpMjRsE8z2szr6S5fgwkNiM5ysngYQaEEu338nKTSHuGuWGGtwFbMVrA7eKyTsDY6vpG97Gmd2qqNLLjG) | [Debug](https://debug.barn.cow.fi/order/0x3600dfa2f0267c98344d4b67e5c1b7dd8e2019d03a458e9a82008c0a045ef442) |
| 48 / 33 | 11:27:04.637 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/4MJN7UpMLqpGKDb65DtAmyixczH9j6hxYzjSfPq1aNDDPJ5ToPeL1fLGCkyRQVCywhFTxPw3ET4HSbFqg59xzaxT) | [Debug](https://debug.barn.cow.fi/order/0x8965ced6b54feb2ce060786b889a7c4dd0dbf8bfcb6a26b5baa0e2e02c5a3bfe) |
| 52 / 37 | 11:26:56.239548003 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. Failed attempt: auction Id(349360), solution 0; `Transaction simulation failed: Error processing Instruction 2: custom program error: 0xf` → settlement-program `OrderCancelled` (15). Driver simulation passed 11:26:56.22593281; failure 11:26:56.239548003. [Rejected submission (not on chain)](https://solscan.io/tx/58Zs7KYfXpXhEjaGG5Uszk4EQrk2BFUtv6agCxsT5pAiBMxrQNKVVSRtk7spBAeqVBgm4aELKusiqzYTqmkhm8kG) [Test cancellation](https://solscan.io/tx/5aqnAVcSnk5yEbXRWkreQKwHRyCCpukN9bDLmppBkAKp8daT2jwWv4N9aCy7b3wcmgvCQVFpPwMF1LgDGG2tx35v) | [Debug](https://debug.barn.cow.fi/order/0x2ea49321c4c7af7e5aab1a309523d4c7ba688c2860fdf3391cd09ee7e38fe7a0) |
| 56 / 41 | 11:27:02.790 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/4di2K7oM6sE2LZ6xaNgpC1ZmeCA9uLg2KNDWCV6WWRTXDKLU6QNmVpZpRC1vh15USxCDzhw9BiECJCHfDGoAVqHs) | [Debug](https://debug.barn.cow.fi/order/0xea2134e5361d18a02c6cb4223fdc5f64d812ff4668601b26871f569b19137722) |
| 60 / 29 | 11:28:37.665 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/3HCGhL5849qTCrpHifyPamJkjTnyTPacMnmACu4rJkBijUPmFzKM8PzHWGykh6WMavzMMceNoWyKSvZQxiti2gYv) | [Debug](https://debug.barn.cow.fi/order/0x0ef8d1fb208f3a32aa4c0191facaa5716aa2ab50651dd5901c730dabe87da7c9) |
| 61 / 30 | 11:28:36.476 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/3kCt5ktAxp4sPDuXn643WNBJutrcvemJqGu89NQkYZetvzDyWJothmDVsvwvvMGoKip31Y6JhgqMhSNqWfGYzP8b) | [Debug](https://debug.barn.cow.fi/order/0x318ec6849424e0d08b1e3ffda7a5a3178e9f02f0a6ccd5fc5d8013bbf30d0e45) |
| 64 / 33 | 11:28:38.028 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/4U7Bo1pauGgaePVAMpwLhwNVshnbDvNGLN6xZmFQ2jrRqWQLsGto1HkfeX74AuCdzE4NKq8cZHdZHpJcdVaMU1XV) | [Debug](https://debug.barn.cow.fi/order/0xa29464b482da07d85187322bd5a0658e292bcc25ee2a43b5eb38d798014c4013) |
| 65 / 34 | 11:28:34.853 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/2QFpi7JS4x2kZoBmKuWHTdjktQnaKpBkQVPFcisbLTB1a7hb1KgMaQn1zgn74ePr74efTsNMxJ6i8PRP6G8Hrd8L) | [Debug](https://debug.barn.cow.fi/order/0xe011c31f0d933c9f37b4f3a48b5cea8ee6d4aac593f2e173ff5064dac9badda9) |
| 68 / 37 | 11:28:36.067 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/5z62aXFs7VioVKejhD89JNa9vuvP6r8ADEy63QXdmLrJvQ2Y3VQBdh7ad2bLjsgz6KQR1eVwL8GSFyocCW6GqUDs) | [Debug](https://debug.barn.cow.fi/order/0x23babb23a0b7dd989056700b86841679eac7c99d96454ea0a8d2be35c0068175) |
| 69 / 38 | 11:28:35.775 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/3bcsP6rr1DFm232PKWEk21CJV2Gj8MvYNKwUV13AVh7Rqeery8bo66pWq3MVpkfqij3geo5k6asxJwM5uNAZFxri) | [Debug](https://debug.barn.cow.fi/order/0x61801a9bb608178ad7a0054d58ad4392289437019f25fbb7738833db12ad5796) |
| 72 / 41 | 11:28:35.374 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/tWxfLFQNvFWnkbZifezyKHoEoF1KiJbV7ehJkBc64CyqrJkxpd9R35iNPvwUzvgjGDKN4NPojdA2Gdh6AWxFnKf) | [Debug](https://debug.barn.cow.fi/order/0x172d1d864dc61d6b3579710187a77b76de88208740d7b145ae24598c9497ff3d) |
| 73 / 42 | 11:28:28.935685667 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. Failed attempt: auction Id(349378), solution 10; `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(2, Custom(15))) } }` → settlement-program `OrderCancelled` (15). Driver simulation passed 11:28:26.276258725; failure 11:28:28.935685667. [Failed settlement](https://solscan.io/tx/TKaCExSsaNGqFTEX18groqe9QVj5YjYmVhiamhqP1uNyHhTmFr1tfS3G8uRevRkaxcmKijPmMqiGGVHrBo4LAbj) [Test cancellation](https://solscan.io/tx/2gcmyzdnLFq1cemNPkFdNQ9mGHT3fZDDLth8Gq8PDViTTBtKYq7nbasSk9DWwxgijWSmRBrhPyzrn5iuoWQhwrjL) | [Debug](https://debug.barn.cow.fi/order/0xb0ea441b35bc174cc2011623545be8aaecb0112f107520a6560b3bcb30507b33) |
| 76 / 45 | 11:28:37.270 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/2JdaVTm3reFAPdcev8UYdkyHe5VkynqgH5XMZP9fhC83Hfqy8ftckQpdTz9acTURVDL8sLBB3oTMVEdndvpZ9egY) | [Debug](https://debug.barn.cow.fi/order/0x049af8ff6e76d2bec5637e81e07f8730355aa75f69922cefd84b3f43b8b2dd9b) |
| 77 / 46 | 11:28:32.265858242 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. Failed attempt: auction Id(349379), solution 2; `FailedToSubmit { err: Error { request: None, kind: TransactionError(InstructionError(2, Custom(15))) } }` → settlement-program `OrderCancelled` (15). Driver simulation passed 11:28:31.189259567; failure 11:28:32.265858242. [Failed settlement](https://solscan.io/tx/3vzJeh2h7WutfNDJM9J8kBUrYEernDeHRHmz1STiBtmE7TupfQWRMXSSdVTqT68qQqBegP6FcusCEsGMt8ELY8k) [Test cancellation](https://solscan.io/tx/4UFdQFz81VE9xHRN1JNiAa5ncXhDauLuA2QCxUBXKnxvgjXRKPeXtVvcGSeVwmM66cym4kgygXRXC3RB2AZKSj73) | [Debug](https://debug.barn.cow.fi/order/0x3a526a11616cb89b6d477f82f17a94c79950923dae37b5b7ac033353e9b8a349) |
| 80 / 49 | 11:28:37.468 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/5FGy8wJpidLCYgiWWjvSmo2UGp56JCwbubD4Nrma6KvKUFGRAjerA3Hg8opqquUMwccf8PqeCNkuDCwSmMDQ5D8w) | [Debug](https://debug.barn.cow.fi/order/0x50d470c08c44f8dd6144c5da3ee051e9ef6f10c9448dea078e03f6b94662aed0) |
| 81 / 50 | 11:28:38.621 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/Ywog5hrhpf81Vys1Ci8fPNkzAL2CAvBzsAWZ9tfdYdKJRBYZXo2uTi7vuGN8JkJs1MEQwt4eRkYem47CfVJmNaq) | [Debug](https://debug.barn.cow.fi/order/0xcb3125861a93fc78e30e478ff9b868951ee193f9788b03e980dc9bc20950ce8b) |
| 84 / 29 | 11:29:21.284085524 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xc53682bbb41120b625722a340bff62e4066a90af1073c583fe1f27a6fbec261a undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/3tP1GCLjpDwLkGKVCY8jweDW8nyRG7apDVL2JPJfN1pqgF7tMDDVwv4THgis5U6JFYFJYP2rnf84gLsi3hRUENFj) | [Debug](https://debug.barn.cow.fi/order/0xc53682bbb41120b625722a340bff62e4066a90af1073c583fe1f27a6fbec261a) |
| 85 / 30 | 11:29:21.25991415 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xb372dde7e6a9b22cc0e9ca0d8ec0c7fd719c248cc66adb1fd28cdc0c7ee77874 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/3Vwc2beV7d8YkR8QJmyQyd642ZqGeLecvjxMmujqFw44XnN8ewEy3551VLHGKDos3hB5ghQo5m7Gg1x1kHSdJ6ZB) | [Debug](https://debug.barn.cow.fi/order/0xb372dde7e6a9b22cc0e9ca0d8ec0c7fd719c248cc66adb1fd28cdc0c7ee77874) |
| 87 / 32 | 11:29:21.297115925 | Sell 0.004 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xd4febc38e01db4757cbb7b9e7452f034dfe28807e939898950ef1330be0020be undercuts its limit price after the cut`. Later fulfilled in 45.023s. [Settlement](https://solscan.io/tx/4pDRRe2wUhq6ZvDnYgXRUTJ9CYcyQNZVDJLHpUp6N7q5jZdHcAh3KE8yxirf3Y6RH4tDweU1wti6EXwpTDMPNpw4) | [Debug](https://debug.barn.cow.fi/order/0xd4febc38e01db4757cbb7b9e7452f034dfe28807e939898950ef1330be0020be) |
| 88 / 33 | 11:29:21.363122243 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xf1cf56452e29d9b92a8a94a39bb1f9283fc1911474db24fed32296ce3292b2b3 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/5xhUKVDZK7dbZSkxhJSMkuahNzkRM8u6Er7PR81nb26romjHRAncQ9H3xB8tXfyDKzSu23fXDH4myiaE9fUjXqaa) | [Debug](https://debug.barn.cow.fi/order/0xf1cf56452e29d9b92a8a94a39bb1f9283fc1911474db24fed32296ce3292b2b3) |
| 89 / 34 | 11:29:21.211162585 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0x8ee832f1cac64a961f48057d02b66b46f5de76810eea6944f671bdd0bb9ea760 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/2P18ZDXopnHpwqZz7tQZ72KZt1USeKzTUPorLYghpLFtCh6m4jED6rUWM1aMZdNWhXdiJzeh754Bojdo3u9jpU2E) | [Debug](https://debug.barn.cow.fi/order/0x8ee832f1cac64a961f48057d02b66b46f5de76810eea6944f671bdd0bb9ea760) |
| 90 / 35 | 11:29:21.38789053 | Sell 0.0035 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xf42fc1e20af3a9718ed498c66d455a8d424a8b30ee8bba3eb3dfe4f83989a797 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/5GYtCrTcZ4wF4BUMzqu77XggtZ8oNmHsc3ptjnDmjMWzgMtCqJStBC75BjpDSGwzwdBFJeCa6EPUiiVeuUJ8uGzQ) | [Debug](https://debug.barn.cow.fi/order/0xf42fc1e20af3a9718ed498c66d455a8d424a8b30ee8bba3eb3dfe4f83989a797) |
| 92 / 37 | 11:29:21.375745077 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xf2f215e735ad3266de26cea5b3d359b3b92a1d1ec84a9a86ec9858b6054addb9 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. Candidate auction 349397, solution 14: `SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }` at 11:30:01.273849469; simulation identifies the settlement program, `OrderCancelled` (15). [Test cancellation](https://solscan.io/tx/25pAzvafwDjyixDowtSUtVTj5jNEAoebZxjzgftYR7rkLAJKsUDxhS8zpDvQgpWcNwfAowwbXQrYFKt3ZVoCzBnK) | [Debug](https://debug.barn.cow.fi/order/0xf2f215e735ad3266de26cea5b3d359b3b92a1d1ec84a9a86ec9858b6054addb9) |
| 93 / 38 | 11:29:21.399486941 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xfcf375c54de800fb41401ecdee81e54079c1897794ca6f6684350c168c268a7f undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. Candidate auction 349397, solution 15: `SimulationFailed { err: UiTransactionError(InstructionError(1, Custom(15))), program_error: None }` at 11:30:01.27386135; simulation identifies the settlement program, `OrderCancelled` (15). [Test cancellation](https://solscan.io/tx/ekRZSCgfXRZRPq4sPKH6o84t64kVZJcCwBew3d1P197W9W8SS49ezQk4tpMb5LbnMqX8ATZve22LjnCXDu99ZFV) | [Debug](https://debug.barn.cow.fi/order/0xfcf375c54de800fb41401ecdee81e54079c1897794ca6f6684350c168c268a7f) |
| 94 / 39 | 11:29:26.122357352 | Sell 0.0035 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 2 candidate rejections: `trade 0x7738561508aceec5ae46ed0203bfaefb167f1ddad76e3fbd22e7eb6921f9d595 undercuts its limit price after the cut`. Later fulfilled in 57.744s. [Settlement](https://solscan.io/tx/3vmQ7KTF3YuaytS7vxqx6HAESBjaf7RxT63AAwnnA2maHP7JKcXS4n7SS4bnUEwGPuQLLMH9oDLPQMkNXaNCwZmP) | [Debug](https://debug.barn.cow.fi/order/0x7738561508aceec5ae46ed0203bfaefb167f1ddad76e3fbd22e7eb6921f9d595) |
| 95 / 40 | 11:29:21.324560778 | Sell 0.004 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xdfe9d98754858c30726d0785876f8ae506ca85b9344cc9c76073a0c54829eb56 undercuts its limit price after the cut`. Later fulfilled in 54.683s. [Settlement](https://solscan.io/tx/3SA1MbLSbtXYzcyhDVEogacatkC5hWyKWWkYmHhkZM58CvkvhnAS8PiZer4aP1zyDaAoDYPoPb8EgaEGXgod3oeS) | [Debug](https://debug.barn.cow.fi/order/0xdfe9d98754858c30726d0785876f8ae506ca85b9344cc9c76073a0c54829eb56) |
| 96 / 41 | 11:29:21.173906779 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0x85f3e7417f81d0f11511ff9be7dd7af2cbd44e55439270e94f069d01ee301fc7 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/515UhEx5fgLJcc1CDsjSzFA65HvhyhdEH3h4oWhwZDtvGSMzZVC8LVEpSGFw2UJVNEYqJdfbf6fSVEKMfwr5mVSk) | [Debug](https://debug.barn.cow.fi/order/0x85f3e7417f81d0f11511ff9be7dd7af2cbd44e55439270e94f069d01ee301fc7) |
| 97 / 42 | 11:29:21.161166003 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0x82cbfbc55b654690b161718e6cc572753b71df0caaecb41a05bb3e149e59dfe6 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/5fexasE1Wr6BvVu18cstLp1nedXG2yWa7ZSjkYTKqG61joZTsGZeQNgYs6btn7vpviXZP4wVayrPM6MyYhNuX5q9) | [Debug](https://debug.barn.cow.fi/order/0x82cbfbc55b654690b161718e6cc572753b71df0caaecb41a05bb3e149e59dfe6) |
| 98 / 43 | 11:29:26.096244793 | Sell 0.0035 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 2 candidate rejections: `trade 0x4735cb43bd8a5576d75553c37f6fc25051a2c9c9b6350e08e3325f7a1145bd1a undercuts its limit price after the cut`. Later fulfilled in 57.406s. [Settlement](https://solscan.io/tx/4hX4awMcdGM4a79FrcB1VmYqSQrW42EnsnFrBmWgpXQ7Sea6UptuB4U7eZsWck6QnwuvpMkDuMZWgzWtxwhzv587) | [Debug](https://debug.barn.cow.fi/order/0x4735cb43bd8a5576d75553c37f6fc25051a2c9c9b6350e08e3325f7a1145bd1a) |
| 100 / 45 | 11:29:21.310829658 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xd67e86848914c47a50a61aa6cb94567865904b1640a8e2d0444e75dc9c9450cb undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/3SMyc69oWs3vQckUGqpFoo7DtR6JEoBAqLMXMDF78D8fs5U2TpyjTzGeDx4eAEKGwt8uqPk3gSoF6LAmzD3eeuq7) | [Debug](https://debug.barn.cow.fi/order/0xd67e86848914c47a50a61aa6cb94567865904b1640a8e2d0444e75dc9c9450cb) |
| 101 / 46 | 11:29:26.069462624 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 2 candidate rejections: `trade 0x1fe89ec533b2a977f23482194418d49e0d8ee0d723565d66629bfcd6ee39a599 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/VBenvxEBCCdgW2E53Xyb7acfSmjrqrPSikUDmMDBDsWVdmnSHzeTgLzk8LWY9r4TYt3DqF8d8LpHc18hQ19t2tZ) | [Debug](https://debug.barn.cow.fi/order/0x1fe89ec533b2a977f23482194418d49e0d8ee0d723565d66629bfcd6ee39a599) |
| 102 / 47 | 11:29:21.222187406 | Sell 0.0035 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0x9e5c456c6adf03db88076ca3408a7e1c49bbe2f9821112c5a18ec2eaa320cadc undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/3X48yH9oCucLPqBfdeb29fB8t6ADEy6LyNW8EZXz5BAZpzTRvV9evqw5Ty6et6o4TsnVTsKXQZDcQQjpew7jA58R) | [Debug](https://debug.barn.cow.fi/order/0x9e5c456c6adf03db88076ca3408a7e1c49bbe2f9821112c5a18ec2eaa320cadc) |
| 103 / 48 | 11:29:21.248144869 | Sell 0.004 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xb15bd55cb12c73a95fa72b2fb253403a72008d835bafcf5071a2822c73b35664 undercuts its limit price after the cut`. Later fulfilled in 41.937s. [Settlement](https://solscan.io/tx/qq4J36q8Ms9eyvUjebJDCrBqoN42VbHCpkygu2Kh5XQ7TxnFCW3znsrC6AbPRNLEWiitMQMdhmNVRs43YMWDccz) | [Debug](https://debug.barn.cow.fi/order/0xb15bd55cb12c73a95fa72b2fb253403a72008d835bafcf5071a2822c73b35664) |
| 104 / 49 | 11:29:21.235353204 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xb13161492db998b9f19bfa9230eb6aa1a7d3691375d20b4552b74a38b143e59b undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/ZKtih9oh26DFu3b86L8wKoe4usrJyTWNRihWZx4rUvHdb1GfVBEBu26T9q6WYQ4HqrrDzwcfjrG8rdq1rfhTWsA) | [Debug](https://debug.barn.cow.fi/order/0xb13161492db998b9f19bfa9230eb6aa1a7d3691375d20b4552b74a38b143e59b) |
| 105 / 50 | 11:29:21.198793746 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0x8c488372a1f7bbba6978b5383af3696558d00658b6e40151a9bdf6833efe0332 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/2hLidVX3onni4oCsCQ59qQ4zPwx79ZNyyG1Wyt5YcfciAG7u1CcLjxkoNmtWkZRdv2GTE9JrmyN74Atj8VyGyQMK) | [Debug](https://debug.barn.cow.fi/order/0x8c488372a1f7bbba6978b5383af3696558d00658b6e40151a9bdf6833efe0332) |
| 106 / 51 | 11:29:21.186477249 | Sell 0.0035 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0x88dca487a7900e09e0e0cd2c04af8f1e8fce88742fd6b134fd948dec89024a4d undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/nVw3jhyt7abaqxh6nPF5vfDFQDAmQeiphLbhpCzQGUU3zSeRGD22j3vaCCKSp1hzAo2EdsshYUSvAtwUg4RuL88) | [Debug](https://debug.barn.cow.fi/order/0x88dca487a7900e09e0e0cd2c04af8f1e8fce88742fd6b134fd948dec89024a4d) |
| 108 / 53 | 11:29:21.271992848 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xc42492cd633d38455e99ee5b5b0de7fcacd7a38807ee8cebdfc08d060ae82aa4 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/MAKRUHBbZAkHc1EPbSnpC5R9eV4Djd5ePDf9zGEyvk4kgGiZcnCWyuwQPNm2CKza6MpGUuJNyPeTFoeexWB1K3K) | [Debug](https://debug.barn.cow.fi/order/0xc42492cd633d38455e99ee5b5b0de7fcacd7a38807ee8cebdfc08d060ae82aa4) |
| 109 / 54 | 11:29:26.109877993 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 2 candidate rejections: `trade 0x48a765493435f8eb73c8ffc5625091acd6971fc46e44ee3251c7b4f8e71ead0d undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/3enbD7YtM2YJy8dbKB1HjvxaqQ2Wz1zgqtvFBG89Uv8Paicw4zVkn2CHANf8jA9RfpFZEGy1sGmkKQexLFjvSbWt) | [Debug](https://debug.barn.cow.fi/order/0x48a765493435f8eb73c8ffc5625091acd6971fc46e44ee3251c7b4f8e71ead0d) |
| 110 / 55 | 11:29:21.338415863 | Sell 0.0035 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xe5350e87ffeee7a1680925ea514e1bb6b33d4e31e3e30d8189b57a87798aa7f9 undercuts its limit price after the cut`. Later fulfilled in 70.858s. [Settlement](https://solscan.io/tx/z14YuYiqBnqKeyDEUiCKPVRx5pMJDnmm8gXtTHhzXQP5G51LdwG5p5ma6hkvfrQn6FULm5hjdsBPxvLzRKG7N38) | [Debug](https://debug.barn.cow.fi/order/0xe5350e87ffeee7a1680925ea514e1bb6b33d4e31e3e30d8189b57a87798aa7f9) |
| 112 / 57 | 11:29:26.083432885 | Sell 0.0025 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 2 candidate rejections: `trade 0x3bef5b87ea3c58d7d5a24ab394c80f03b4cc9140f02ed22082ca22b9001b4dca undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/BMSnJrxjLY9gnbAVp6sJ8zuMo7KFTD2Py8WMDZK2F23PCJZiuccPxZMKR7wb9L6TQtP4HnYG3TzdJdi8Fo1Yxy9) | [Debug](https://debug.barn.cow.fi/order/0x3bef5b87ea3c58d7d5a24ab394c80f03b4cc9140f02ed22082ca22b9001b4dca) |
| 113 / 58 | 11:29:26.057012868 | Sell 0.003 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 2 candidate rejections: `trade 0x13e3037eb1ec302c8ac0c61105262bb53b79e476cc8695596dc6b058cdca0f0d undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/2z41fKRJK3FfJFu44iuiEpyHn3AnmSA9QyvHjTe1prB83tixkAUHEBwxoJoFm7xEzcJRD7SdcdzfHJJwqz5hXxFu) | [Debug](https://debug.barn.cow.fi/order/0x13e3037eb1ec302c8ac0c61105262bb53b79e476cc8695596dc6b058cdca0f0d) |
| 114 / 59 | 11:29:21.35027008 | Sell 0.0035 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** 3 candidate rejections: `trade 0xee0d3592c679b68cce0b12b3305e27b1eadfce73fbb5aa28b719170d17f5aee7 undercuts its limit price after the cut`. `main timeout`; no fill before test cancellation. Final API status: `cancelled`. [Test cancellation](https://solscan.io/tx/4J4TNGR4iPWn9ArjNNBjo6DG3UJrW4dVN47xy1Wh5vJmEvMkeS5G7njUhvCVe3d6RfPtfdNGUGoNPwGBZtaZXTdo) | [Debug](https://debug.barn.cow.fi/order/0xee0d3592c679b68cce0b12b3305e27b1eadfce73fbb5aa28b719170d17f5aee7) |

### Cleanup

Cleanup is excluded from scenario completion, timing and transaction totals. Across the run, 39 cleanup orders were placed: 38 fulfilled and 1 timed out/cancelled. Cleanup sells remaining balances, optionally burns dust, closes eligible accounts, reclaims order-account rent and sweeps SOL; it is separate from the main trade result.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 33 | 11:31:30.758 | Cleanup: sell 0.258007 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL | **Ownership unknown:** `timeout` after 72.559s; final API status `cancelled`. Later cleanup burned the full 0.258007 USDC and closed its account at 11:45:58, rather than filling the sale. [Burn and close](https://solscan.io/tx/2SgwEknXFHgCPBcNVZ8ZVXWvYMJV7ymqCuxo3aJd8KbETCBBgkqirhrCFBwfKAnjLhdm8LXHbur1jLvfdt9uqfKP) [Test cancellation](https://solscan.io/tx/5GWgSZCknQXss3GdVdHCDk8J7hSYenYWjJGD2EZsao965yxLiLFv8FaDqXCKTpkMPsLc9wAzuduzoKxsWsUNdtmJ) | [Debug](https://debug.barn.cow.fi/order/0xcc427a5493a80ff93f82586359c2287f9c8b0fe5a387df7a9f83b2211d0c1bfa) |

**Ownership unknown — cleanup quotes:** 5 reused wallets retained balances after retry. The same exact token amounts were already left over in the saved 17 October Jupiter run, so their acquisition is not attributed to Helixbox. Saved error strings are truncated; missing descriptions are unavailable. No order was placed for these quote failures.

| Trader | First / last cleanup result (UTC) | Unsold balance → SOL | Exact saved error prefix | Debug tool URL |
| --- | --- | --- | --- | --- |
| 30 | 11:30:50.868 / 11:46:11.474 | 0.001771982 [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So) → SOL | `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` | No order ID: quote failed before placement. |
| 31 | 11:30:33.989 / 11:46:02.458 | 0.002058046 [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v) → SOL | `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` | No order ID: quote failed before placement. |
| 34 | 11:31:05.673 / 11:46:04.891 | 0.242159 [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) → SOL | `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` | No order ID: quote failed before placement. |
| 36 | 11:30:41.883 / 11:46:15.913 | 0.058305 [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) → SOL | `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` | No order ID: quote failed before placement. |
| 48 | 11:31:41.892 / 11:46:06.793 | 0.000064 [PAXG](https://solscan.io/token/5GgRAEmv8ZxF2PR5hY72Qs5x1bnQ6UK2RbTPoqJ3wSwW) → SOL | `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` | No order ID: quote failed before placement. |

The 5 nonempty token accounts remained cleanup-pending. These quote failures and the cancelled cleanup order are separate from the 84 main burst orders.

</details>

## 4. Opposing orders / CoW

**Direct matching is inconclusive.** Quote and creation failures blocked the intended pairs; the successful trades used DEX swaps.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 8. Main orders: 3/7 placed filled. Acquisition orders: 5/5 filled. Median / longest fill: 8.300 / 19.708 seconds.
Completed / planned rows in scope: 3/15.

The 6 planned inventory-setup exact buys (rows 116–121) failed quotes. Rows 122/124 sold SOL → USDC; the opposing USDC → SOL row 125 was not placed until 11:35:20.512, after both SOL → USDC sides were observed filled (11:35:12.061 / 11:34:59.670). All 3 successful transactions used DEX swaps and settled separately. The setup did not establish shared-auction opposing SOL/USDC orders; the stablecoin pair orders never reached on-chain creation.

**Ownership unknown — oversized settlement candidates:** 4 sponsored stablecoin orders had 27 rejected candidates: 13 at 1356 bytes and 14 at 1387 bytes, respectively 124/155 bytes above Solana's 1232-byte serialized transaction limit. The driver measured assembled settlement transactions including signature overhead, not just swap payloads. Each rejection was joined to its order by auction + solution using driver execution-cost/order records. The size failure is confirmed, while responsibility for solver route/transaction construction versus driver-added instructions remains unresolved.

All 4 sponsored creations later expired without filling. Oversize rejection is directly observed before expiry; this does not prove every possible route was too large. Next: Helixbox and integration team should produce a valid-size candidate, and the test team should rerun opposing pairs with verified auction overlap.

Five prerequisite SOL → stablecoin acquisitions all filled. They are separate from the 15 planned rows and do not turn a failed main row into a success. Their 5 extra settlements are included in this section's total of 8. Main-only median / longest fill: 6.882 / 19.363 seconds.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 62 | 11:32:22.121 | Buy SOL → exactly 2.6 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 117 / 64 | 11:32:22.169 | Buy SOL → exactly 1.3 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 118 / 65 | 11:32:22.221 | Buy SOL → exactly 3.1 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 119 / 66 | 11:32:22.661 | Buy SOL → exactly 3.1 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 120 / 67 | 11:32:22.638 | Buy SOL → exactly 1.1 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 121 / 68 | 11:32:22.926 | Buy SOL → exactly 3.2 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 122 / 61 | 11:34:52.698 | Sell 0.02 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | Fulfilled in 19.363s. [Settlement](https://solscan.io/tx/5aiQiajsqgwRb5PgHXapkSUfJsHn8padYqSxtDgt2Ra9xmc77t1VwX5iSkEAoKjonVGNwghmkZyxT67UivVeDSJy) | [Debug](https://debug.barn.cow.fi/order/0xa254e0969388475ff0249b2899f12de46ef6756194f346a7763014231aaebc6a) |
| 123 / 62 | 11:34:52.102 | Buy [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → exactly 0.02 SOL (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 124 / 63 | 11:34:52.788 | Sell 0.03 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | Fulfilled in 6.882s. [Settlement](https://solscan.io/tx/4JbUmcHHYeNFGsHLVNVF9YaqQq9at8e7rVUwH5e8vZCSrtfafDPBgNDMeGZuxVqqGTAbw3Y391V1TjrGj9LdyVYx) | [Debug](https://debug.barn.cow.fi/order/0xe3c3e41a224cbb58b453040075e1c16962911089e8a5be8a84d0a1690e4f3c5b) |
| 125 / 64 | 11:35:20.512 | Sell 1.2 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (sponsored) | Fulfilled in 3.263s. [Settlement](https://solscan.io/tx/b6b7ZpNR3Qr1jUcSS2iucWdXHRjWfVWNasgafMhzMHSu2kuupLKwspQ5Sfg6yMUBWaMqUaBnktyYsfzfrVbtGh6) | [Debug](https://debug.barn.cow.fi/order/0xa997d2ef0c4bda9f5d1f3b1ad90692c75ad2ce586281e590240d78ebbd0f3abd) |
| 126 / 65 | 11:35:11.185430576 | Sell 3 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | **Ownership unknown:** 7 × `TransactionTooLarge { size: 1387 }`; exceeds 1232-byte serialized limit. Final: sponsored creation expired, never created on chain; journal `expired` at 11:35:45.758. Original autopilot message: `sponsored creation expired, dropping the order`. First candidate: auction 349459, solution 5. | [Debug](https://debug.barn.cow.fi/order/0xfcc550c55c7ba2534761a6ade4379d29dc2c9e2c0e9a2b0618a21f4cd3073fdd) (creation UID; debug record may be absent) |
| 127 / 66 | 11:35:06.220323016 | Sell 3 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | **Ownership unknown:** 7 × `TransactionTooLarge { size: 1356 }`; exceeds 1232-byte serialized limit. Final: sponsored creation expired, never created on chain; journal `expired` at 11:35:39.633. Original autopilot message: `sponsored creation expired, dropping the order`. First candidate: auction 349458, solution 4. | [Debug](https://debug.barn.cow.fi/order/0xa04ef079d91e75299899a450137bbcd76ad46504c5330495859c0462cb557ad1) (creation UID; debug record may be absent) |
| 128 / 67 | 11:35:16.233362129 | Sell 1 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | **Ownership unknown:** 6 × `TransactionTooLarge { size: 1356 }`; exceeds 1232-byte serialized limit. Final: sponsored creation expired, never created on chain; journal `expired` at 11:35:46.269. Original autopilot message: `sponsored creation expired, dropping the order`. First candidate: auction 349460, solution 4. | [Debug](https://debug.barn.cow.fi/order/0xb5be240225feeb80cbc692c3acf9148b1fd60afe0ecd4df56c13cba4cad15234) (creation UID; debug record may be absent) |
| 129 / 68 | 11:35:06.220257585 | Sell 3 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | **Ownership unknown:** 7 × `TransactionTooLarge { size: 1387 }`; exceeds 1232-byte serialized limit. Final: sponsored creation expired, never created on chain; journal `expired` at 11:35:39.601. Original autopilot message: `sponsored creation expired, dropping the order`. First candidate: auction 349458, solution 0. | [Debug](https://debug.barn.cow.fi/order/0x17b5dd391532e23e1e16bd21441c82700423b4ec954d473f32b6d321fb91a488) (creation UID; debug record may be absent) |
| 130 / 69 | 11:34:52.540 | Sell 0.02 SOL → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 125 / 64 (acquire) | 11:35:00.245 | Acquisition: sell 0.012016637 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | Fulfilled in 19.708s. [Settlement](https://solscan.io/tx/4fkcpUu5WpAnvUbKotG4WT5GSDhszbB2PWF84y1RNiDFc32kE7XpSZRHZ2Y6KgZwXi4tW73sDyTf8opRb6HnnooG) | [Debug](https://debug.barn.cow.fi/order/0x27d46607c695269898bcdecb4c4b2c5df06c193405967d1e1375827f50d3c78e) |
| 126 / 65 (acquire) | 11:35:00.200 | Acquisition: sell 0.030041592 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | Fulfilled in 9.717s. [Settlement](https://solscan.io/tx/5hhtf2ffjyiTNgduSJUK67qQJJN9V4dTXPoZVcofGKkxJoHZfrogfFzmUZqVddGGK8ssZr7CJBsBwYRyBMT1fs8s) | [Debug](https://debug.barn.cow.fi/order/0x4ccd8dd237fbc6f4ec062332d7e4960aa68fc164b019e28175076bffd1ec086e) |
| 127 / 66 (acquire) | 11:35:00.232 | Acquisition: sell 0.030013521 SOL → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | Fulfilled in 3.468s. [Settlement](https://solscan.io/tx/FdJY3h7fYuvffuowhw67uRRVLx7ixSgr3JRPXP8XjoCfS7T9V3eAhisLJLFcu1jhUqqkXArPYcyr6gK1bBpAcY3) | [Debug](https://debug.barn.cow.fi/order/0xb45bcdbdfc05322c637a29d2080aa3898159556fa29a474a9bf1e941ef32cdd0) |
| 128 / 67 (acquire) | 11:35:00.318 | Acquisition: sell 0.010004546 SOL → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | Fulfilled in 10.397s. [Settlement](https://solscan.io/tx/4rJjKoAWbDXuqqHswyCZUVNiqjmZMDX2ydGteWXt5hcR89usMoWsTsYFX76LmfW87LVX6WJkdY335YUb1kLHBve2) | [Debug](https://debug.barn.cow.fi/order/0xcd3143d4cf50dbb35347d1b2227022914ec2d11a4ad49a439688dc1799bbb978) |
| 129 / 68 (acquire) | 11:35:00.711 | Acquisition: sell 0.030041592 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | Fulfilled in 3.349s. [Settlement](https://solscan.io/tx/3eJqJjF6Y5xqkd7DV2XTeb5ke6VCzux5tmvVWFJRBsWYbyTveuuk6A9rRf63CFJYcYVz3jnp66JckWCaqGTZ23MP) | [Debug](https://debug.barn.cow.fi/order/0x006aea0c7f17dddd4cfdfce067e5ab90a3038b1e343d4c9a044c74fce26e5879) |

### Cleanup

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 64 | 11:47:07.091; last 11:47:07.091 | Cleanup: sell 0.044987 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL | **Ownership unknown:** `quote failed: Bad Request {"errorType":"SellAmountDoesNotCoverFee","descri` (saved string truncated). No order placed; balance remained after retry. The API rejected the amount as insufficient for the fee; the full fee calculation is unavailable. | No order ID: quote failed before placement. |

The 0.044987 USDC remainder equals row 125 acquisition output (1.244987 USDC) minus its 1.2 USDC main sell. This sixth pending trader's remainder did arise in this run.

</details>

## 5. Token coverage

**Broad token coverage was not achieved.** Only 5 token sell flows filled, and none of the 15 exact buys received a usable quote.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 5. Main orders: 5/5 placed filled. Acquisition orders: 0/0 filled. Median / longest fill: 3.206 / 6.374 seconds.
Completed / planned rows in scope: 5/55.

Successful fixed-input sell flows: SOL → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr), [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij), [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump), [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5), [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82). All used 0.005 SOL input. Successful exact-output buys: none. Sell quotes failed for 32 other tokens, and all 15 exact buys failed quotes. A successful SOL → token sell does not establish reverse-direction or exact-output support.

Expected autopilot-only checks: rows 146–148 returned `UnsupportedToken` for Token-2022 transfer fees before solver participation. These 3 expected rejections are not Helixbox limitations; full errors and mints are below.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 131 / 70 | 11:36:57.710 | Sell 0.01 SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 132 / 71 | 11:36:57.927 | Sell 0.01 SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 133 / 72 | 11:36:57.955 | Sell 0.01 SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 134 / 73 | 11:36:58.216 | Sell 0.01 SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 135 / 74 | 11:36:58.418 | Sell 0.01 SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 136 / 75 | 11:36:58.620 | Sell 0.01 SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 137 / 76 | 11:36:58.729 | Sell 0.01 SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 138 / 77 | 11:36:59.025 | Sell 0.01 SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 139 / 78 | 11:36:59.221 | Sell 0.01 SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 140 / 79 | 11:36:59.331 | Sell 0.01 SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 141 / 80 | 11:36:59.626 | Sell 0.01 SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 142 / 81 | 11:36:59.736 | Sell 0.01 SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 143 / 82 | 11:37:00.061 | Sell 0.01 SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 144 / 83 | 11:37:00.149 | Sell 0.01 SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 145 / 84 | 11:37:00.421 | Sell 0.01 SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) (sponsored) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 149 / 88 | 11:37:00.933 | Sell 0.005 SOL → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 150 / 89 | 11:37:01.444 | Sell 0.005 SOL → [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 151 / 90 | 11:37:04.991 | Sell 0.005 SOL → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr) (self) | Fulfilled in 6.374s. [Settlement](https://solscan.io/tx/2K6XJRCxfdJUUaiTpi6CMR7CA7Pp2JdAh4VRhjmgf1Vtj54RxoXu1hry2brDkP1apj7y9yoKUUY8nUVRhx8oN4Ux) | [Debug](https://debug.barn.cow.fi/order/0x4dc05eff08559dd19d7a4afa72139184db4ac3c2e825e61bc65adb26a7dca489) |
| 152 / 91 | 11:37:03.768 | Sell 0.005 SOL → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 153 / 92 | 11:37:03.970 | Sell 0.005 SOL → [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 154 / 93 | 11:37:04.430 | Sell 0.005 SOL → [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 155 / 94 | 11:37:06.324 | Sell 0.005 SOL → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) (self) | Fulfilled in 3.132s. [Settlement](https://solscan.io/tx/47SB9BxmSjRoBuEUPJuH2meNwoGgLYGdpcHzQwD43462NCTfb7Fzxktvmui76kthhXGiZ3ShdzkuXShYnvYBfmAT) | [Debug](https://debug.barn.cow.fi/order/0x52fa855b1415cf0d2c5894163b0fbc2a4212677c8fccdea106b93522dd3bc92f) |
| 156 / 95 | 11:37:04.951 | Sell 0.005 SOL → [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 157 / 96 | 11:37:05.172 | Sell 0.005 SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 158 / 97 | 11:37:05.544 | Sell 0.005 SOL → [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 159 / 98 | 11:37:06.221 | Sell 0.005 SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 160 / 99 | 11:37:06.217 | Sell 0.005 SOL → [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 161 / 100 | 11:37:06.627 | Sell 0.005 SOL → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 162 / 101 | 11:37:06.840 | Sell 0.005 SOL → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 163 / 102 | 11:37:06.962 | Sell 0.005 SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 164 / 103 | 11:37:07.287 | Sell 0.005 SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 165 / 104 | 11:37:07.372 | Sell 0.005 SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 166 / 105 | 11:37:09.139 | Sell 0.005 SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) (self) | Fulfilled in 3.123s. [Settlement](https://solscan.io/tx/3YSdtWyjtVBP6skihWnMe9EZUmEdGqteWEaEkcge9fpJcmuQfyuXxyibmv9GkUNxSo3WBicLnFxh4PJuD9ERSAAk) | [Debug](https://debug.barn.cow.fi/order/0x938f754b82a3830764243dde6eb005115daf886f84738b0550ff5bc9c7b5c984) |
| 167 / 106 | 11:37:09.429 | Sell 0.005 SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) (self) | Fulfilled in 3.247s. [Settlement](https://solscan.io/tx/647h7hAkLvfK16ArxUWA9LZDuf6xu7W3ZzNmQVzkpsy2XJQQeKHisbtG4r4i829yVyYqQdAdLZwoctkuQvtPz1U8) | [Debug](https://debug.barn.cow.fi/order/0x81a837ac645b04a711902491f390926e4840bbbc4122a073df5ce1dd05986292) |
| 168 / 107 | 11:37:09.727 | Sell 0.005 SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) (self) | Fulfilled in 3.206s. [Settlement](https://solscan.io/tx/3BojR2sYQ4KSRLUDq5bZbCVZ9AWYqutHX3Lx3bHRJrquJ9739LKzYocg3w6VtseQyg2SxKBmcJfvy5ZfhLcUbxax) | [Debug](https://debug.barn.cow.fi/order/0x425d57caf51b731b9c028f7e3987488b01cad83b528e1e0fad99c57e57cb2aef) |
| 169 / 108 | 11:37:08.224 | Sell 0.005 SOL → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 170 / 109 | 11:37:08.336 | Sell 0.005 SOL → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 171 / 70 | 11:37:02.242 | Buy SOL → exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 172 / 71 | 11:37:01.529 | Buy SOL → exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 173 / 72 | 11:37:02.340 | Buy SOL → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 174 / 73 | 11:37:02.505 | Buy SOL → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) (self) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 175 / 74 | 11:37:02.690 | Buy SOL → exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 176 / 75 | 11:37:01.786 | Buy SOL → exactly 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 177 / 76 | 11:37:03.038 | Buy SOL → exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 178 / 77 | 11:37:01.896 | Buy SOL → exactly 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) (self) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 179 / 78 | 11:37:03.238 | Buy SOL → exactly 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 180 / 79 | 11:37:03.381 | Buy SOL → exactly 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 181 / 80 | 11:37:04.232 | Buy SOL → exactly 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 182 / 81 | 11:37:04.524 | Buy SOL → exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) (self) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 183 / 82 | 11:37:05.294 | Buy SOL → exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 184 / 83 | 11:37:05.694 | Buy SOL → exactly 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 185 / 84 | 11:37:06.380 | Buy SOL → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |

</details>

## 6. Transaction size

**The size-boundary test is inconclusive.** All 10 requests failed at quoting, so this scenario produced no settlement to measure.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 0. Main orders: 0/0 placed filled. Acquisition orders: 0/0 filled. Median / longest fill: not available (no fills).
Completed / planned rows in scope: 0/10.

The intended check was the full 1232-byte transaction boundary: one baseline and 4-order groups for EURC/JLP. EURC inputs were 0.005 SOL; JLP baseline was 0.005 SOL and group members 0.00125 SOL. No quote succeeded, so no serialized size or successful example is available here. The oversize candidates in scenario 4 were for different orders.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 186 / 110 | 11:39:01.994 | Sell 0.005 SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 187 / 114 | 11:39:02.091 | Sell 0.005 SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 188 / 110 | 11:40:32.884 | Sell 0.005 SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 189 / 111 | 11:40:31.984 | Sell 0.005 SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 190 / 112 | 11:40:32.053 | Sell 0.005 SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 191 / 113 | 11:40:32.105 | Sell 0.005 SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 192 / 114 | 11:40:33.194 | Sell 0.00125 SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 193 / 115 | 11:40:32.387 | Sell 0.00125 SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 194 / 116 | 11:40:32.602 | Sell 0.00125 SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 195 / 117 | 11:40:32.792 | Sell 0.00125 SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) (self) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |

</details>

## 7. Fresh accounts

**Fresh-account sell flows worked; solver-funded account opening remains untested.** The 4 sells filled, while all 4 exact buys stopped at quoting.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 4. Main orders: 4/4 placed filled. Acquisition orders: 0/0 filled. Median / longest fill: 9.666 / 12.835 seconds.
Completed / planned rows in scope: 4/8.

At 11:41:13.722 UTC the simulator checked that all 8 intended receiving token accounts were absent, with no stale-account warning, and skipped upfront preparation. Successful sells used 0.1 SOL → USDC/USDT in self-paid and sponsored modes; all exact buys requested 10 USDC/USDT. The wider 30-case fresh-account scenario was not included.

**Test limitation confirmed on chain:** receiving accounts were created in order-creation transactions before settlement, not by Helixbox. Traders paid for rows 196/200; the sponsor paid for 197/201. Rent was 1,488,440 lamports per account. The 4 settlements used Helixbox's separate fee payer. This verifies fresh-start sell flows, but does not test Helixbox deducting or absorbing receiving-account rent. The test team needs a path where the receiving account is still missing at settlement.

| Row | Receiving-account opening (UTC) | Rent payer | Creation transaction |
| --- | --- | --- | --- |
| 196 | 11:41:17 | trader | [Account opening](https://solscan.io/tx/2aJ9LQasfswvk57ykVa1X1gy6tXbaZMTGEcdpjNc7ziaUKPaATdxJvuKB7x1wHTwmxHztbFgirth8YLJgxQijCpR) |
| 197 | 11:41:26 | sponsor | [Account opening](https://solscan.io/tx/3AJ7kNBStzno66DmrQd2eQ9kFFoNTTyBrJ4eNd1A5DDxFnqp7EfitdYYvMWGGbRwfVazWNsRF2dsd54nc3Mqh128) |
| 200 | 11:41:17 | trader | [Account opening](https://solscan.io/tx/2Z7ZUsENtaqeDTkwXf1mUq2qxMBAJhdhW3BdwRTT6hb1Rtm4ZNBwcnn8tVJJgmh72LGrpaGvTfAYt4eWEAoJnqfE) |
| 201 | 11:41:26 | sponsor | [Account opening](https://solscan.io/tx/5oaHk3Q9NLP52oNEayL4hXQVUBHb197wC6ZWaA4uiy6ugKph8wc26z9b2wGyxD4aeEbYWYGyNDhzCU7DoeY3KZuw) |

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 196 / 118 | 11:41:18.524 | Sell 0.1 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | Fulfilled in 6.572s. [Settlement](https://solscan.io/tx/2Emers3TfWiUskTTzZByrCBLD9zsy4Zn6TLLtpTxeGw3ws3mvjAdxqvYVcfJasQ9L5aj176s3S2WALSm6LP5MDqS) | [Debug](https://debug.barn.cow.fi/order/0xc0d2275e81adbfa9be6c294bb56df86dee0f51339ac2971a6a646c4db7a1707b) |
| 197 / 119 | 11:41:17.557 | Sell 0.1 SOL → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | Fulfilled in 12.761s. [Settlement](https://solscan.io/tx/2xCUZhSCoEgXaWci1u9SZdQTQyQnmksZGs7bShhVRv8kEfeV3TghnWq31dbDvsp8wuhhfRiHAJBoZQXkSonrcjwy) | [Debug](https://debug.barn.cow.fi/order/0x02b8dece1f5a071f440027616731764078b000f0eb007f2473bb7c776a686374) |
| 198 / 120 | 11:41:16.346 | Buy SOL → exactly 10 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 199 / 121 | 11:41:16.426 | Buy SOL → exactly 10 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 200 / 122 | 11:41:18.878 | Sell 0.1 SOL → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (self) | Fulfilled in 3.120s. [Settlement](https://solscan.io/tx/3CfAMLBLDN88UWWgtmfztSLoAbSyFQTQr73RKPVvfRSv4TaNdgKQtJhdHjeceLsEoxqEA2QKXbtSk4QgSFCmihX) | [Debug](https://debug.barn.cow.fi/order/0xd4431fca2cfd1e3f2e1294db0f1975c72a53bb45637d90998e191d6ac203acd5) |
| 201 / 123 | 11:41:18.149 | Sell 0.1 SOL → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | Fulfilled in 12.835s. [Settlement](https://solscan.io/tx/3QXxbKRk6qLYmnGr2NwDQvkB2XnT5AKj4xPbjrcwRy58Mef4qyRATYpefJD2nHvUepRQTeBE7Efn9XddyCYeRg2a) | [Debug](https://debug.barn.cow.fi/order/0x5e45cef78965c19c3710ede4e02d3f8f8258517a323daad35f2e9c2213c864de) |
| 202 / 124 | 11:41:16.601 | Buy SOL → exactly 10 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (self) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |
| 203 / 125 | 11:41:16.905 | Buy SOL → exactly 10 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement. |

</details>

</details>

## Exclusion audit

Excluded original row IDs: 146, 147, 148. These are unsupported non-zero transfer-fee probes, rejected before solver participation. They are absent from all scored tables and failure totals above. Their raw records remain in the original session files.

## Sources

Local session evidence: `2026-10-20-11-18-composite-helixbox-run/sim/run.json`, `sim/journal.jsonl`, saved `meta.json`, and `orders.json` / `txs.json` where present. Prior checked investigation: `20261020_helixbox_solver_test_report_for_cow.md`.

This report was recalculated on 20 October 2026. No new trades, cancellations or cleanup transactions were sent to prepare it.
