# Paradox composite test report

Session: `2026-10-13-06-27-composite-paradox-run`. Environment: staging on Solana mainnet. Start: 2026-10-13T06:28:15.556Z. Saved observation end: 2026-10-13T07:34:00.187Z.

**TLDR:** 33/167 eligible planned flows filled (19.76%); 134 failed.

**Adjusted performance:** 33/167 eligible planned flows = **19.76%**. 3 unsupported non-zero transfer-fee rows are excluded from both numerator and denominator. Original schedule: 170 rows. Raw run evidence is unchanged.

A flow counts as filled only when its saved row result is filled. Main, prerequisite acquisition and cleanup orders are separate below; retries can produce more than one order per flow. These rates describe the recorded test conditions and do not establish production readiness.

Saved run status: finished=true; 0 unfinished scenario phases; final account cleanup pending: not recorded in this older run. A false finished flag can reflect cleanup rather than unfinished trading. This is the saved snapshot, not a new on-chain balance audit.

## Biggest recorded issues

116 × main error: 404 Not Found: NoLiquidity: no route found; 15 × quote failed: 404 Not Found: NoLiquidity: no route found; 3 × main expired

`NoLiquidity` means the quote path returned no usable route; it does not prove that the token has no liquidity or that the named solver caused it. Creation failures occur before settlement. A later cancelled order does not identify why a candidate solution failed.

## Scenario results

| Scenario | Eligible planned | Filled | Failed | Pending | Saved phase |
| --- | --- | --- | --- | --- | --- |
| solver-standard-pairs | 6 | 6 | 0 | 0 | finished |
| solver-same-direction-25 | 25 | 4 | 21 | 0 | finished |
| solver-burst-sell | 84 | 20 | 64 | 0 | finished |
| solver-token-coverage | 52 | 3 | 49 | 0 | finished |

Saved placements: {'main': 36, 'acquire': 2, 'cleanup': 12}. Successful scenario settlements (main + prerequisite acquisition, excluding cleanup): 35 distinct signatures. Selected-order batch sizes: {1: 35}. Shared signatures show batching; they do not establish direct CoW matching.

Timing: median 22.106s; longest 50.035s across 35 successful main/acquisition orders. Endpoints: journal placement → simulator-observed fulfillment, including polling delay.

<details>
<summary>solver-standard-pairs — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | SOL → USDC | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 2 | 2 | SOL → USDT | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 3 | 3 | JUP → USDC | sell 0.5 JUP; self | filled |  | See full order ledger below (same row and trader). |
| 4 | 1 | SOL → USDC | buy 0.25 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 5 | 2 | SOL → USDT | buy 0.25 USDT; sponsored | filled |  | See full order ledger below (same row and trader). |
| 6 | 3 | JUP → USDC | buy 0.25 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |

</details>

<details>
<summary>solver-same-direction-25 — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 7 | 4 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 8 | 5 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 9 | 6 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 10 | 7 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
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
| 36 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 37 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 38 | 31 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 39 | 32 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 40 | 33 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 41 | 34 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 42 | 35 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 43 | 36 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 44 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 45 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 46 | 31 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 47 | 32 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 48 | 33 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 49 | 34 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 50 | 35 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 51 | 36 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 52 | 37 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 53 | 38 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 54 | 39 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 55 | 40 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 56 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 57 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 58 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 59 | 44 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 60 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 61 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 62 | 31 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 63 | 32 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 64 | 33 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 65 | 34 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 66 | 35 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 67 | 36 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 68 | 37 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 69 | 38 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 70 | 39 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 71 | 40 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 72 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 73 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 74 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 75 | 44 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 76 | 45 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 77 | 46 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 78 | 47 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 79 | 48 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 80 | 49 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 81 | 50 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 82 | 51 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 83 | 52 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 84 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 85 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 86 | 31 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 87 | 32 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 88 | 33 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 89 | 34 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 90 | 35 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 91 | 36 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 92 | 37 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 93 | 38 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 94 | 39 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 95 | 40 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 96 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 97 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 98 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 99 | 44 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 100 | 45 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 101 | 46 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 102 | 47 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 103 | 48 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 104 | 49 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 105 | 50 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 106 | 51 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 107 | 52 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 108 | 53 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 109 | 54 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 110 | 55 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 111 | 56 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 112 | 57 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 113 | 58 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 114 | 59 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 115 | 60 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |

</details>

<details>
<summary>solver-token-coverage — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 116 | 61 | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | sell 0.01 SOL; sponsored | failed | main expired | main: [Debug](https://debug.barn.cow.fi/order/0xe5fbe1c12d1eb964a4ad3ca5760b717b9145a270497f2dc2490b08eb4cdc4648) |
| 117 | 62 | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | sell 0.01 SOL; sponsored | failed | main expired | main: [Debug](https://debug.barn.cow.fi/order/0x283d4e11110b5062c848f3b75e15908059d48c554e46128450542510b782b5e7) |
| 118 | 63 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | sell 0.01 SOL; sponsored | failed | main expired | main: [Debug](https://debug.barn.cow.fi/order/0x437738536726048343610e36d1d1c04a198fc9e2757d5abab941c0346321c0a0) |
| 119 | 64 | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | sell 0.01 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 120 | 65 | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 121 | 66 | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 122 | 67 | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 123 | 68 | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | sell 0.01 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 124 | 69 | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 125 | 70 | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 126 | 71 | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 127 | 72 | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | sell 0.01 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 128 | 73 | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 129 | 74 | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 130 | 75 | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 134 | 79 | SOL → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 135 | 80 | SOL → [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 136 | 81 | SOL → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 137 | 82 | SOL → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 138 | 83 | SOL → [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 139 | 84 | SOL → [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 140 | 85 | SOL → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 141 | 86 | SOL → [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 142 | 87 | SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 143 | 88 | SOL → [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 144 | 89 | SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 145 | 90 | SOL → [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 146 | 91 | SOL → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 147 | 92 | SOL → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 148 | 93 | SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 149 | 94 | SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 150 | 95 | SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 151 | 96 | SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 152 | 97 | SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 153 | 98 | SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 154 | 99 | SOL → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 155 | 100 | SOL → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 156 | 61 | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | buy 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 157 | 62 | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | buy 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 158 | 63 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | buy 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 159 | 64 | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | buy 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 160 | 65 | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | buy 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 161 | 66 | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | buy 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 162 | 67 | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | buy 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 163 | 68 | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | buy 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 164 | 69 | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | buy 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 165 | 70 | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | buy 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 166 | 71 | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | buy 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 167 | 72 | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | buy 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 168 | 73 | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | buy 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 169 | 74 | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | buy 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 170 | 75 | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | buy 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

## All recorded orders

<details>
<summary>Main, acquisition and cleanup order ledger</summary>

| Row | Trader | Step | Time (UTC) | Order | Final saved/API status | Debug tool | Settlement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | main | 2026-10-13T06:28:17.677Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf54c3775eb9d3eac3d27d3abd5cdae3a78bfd47a2d0574028ba78dd77bdc63cc) | [Transaction](https://solscan.io/tx/XBMUHgeZGwD7JUgBQtz4p5YH5tcFcMpyaAEQSieVNR48N8f9Xk5CzTGQzo9rTtsXHGpmajdwUsm7GiqsNFPrGkb) |
| 2 | 2 | main | 2026-10-13T06:28:47.506Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2942ff7b0126b6c82c13af3fa8e016476f466eadab464440c3e0fd53d3b7c3b7) | [Transaction](https://solscan.io/tx/MZWrWa5Q7w56QisBKL6CJk6xGqiLC6QK83MRhp49VWEhgLtqMgsTqPRKhFzvzKnGfSKr55tabd4pBsQSMNWY7JM) |
| 3 | 3 | acquire | 2026-10-13T06:29:23.835Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xea5a9dad44c31145b88f0ef77d8a32dad7010e09fcb7321f7eb7dbe426762055) | [Transaction](https://solscan.io/tx/E4p4k7Pn9xijubfwovjkbYtKZkBZX8KELvX4WtZsTeF8nHG224EaVjgQ6hcfmMDMotuqqsh2VRnCN6MddGxmFe2) |
| 3 | 3 | main | 2026-10-13T06:29:31.998Z | JUP → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb06357e970ac9c5c25d8a94365a59ff5c8bf4e3168ae7afd3b0b1eeffae27628) | [Transaction](https://solscan.io/tx/5eMJFPiXcWz1cY4aM4VfhphWoH2xHVPQiEHYqUyRW8Xq8EawybvDJpowDxLQsYJq8iA78RhCGJ3eCsksoDRDKyjJ) |
| 4 | 1 | main | 2026-10-13T06:29:46.409Z | SOL → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6ef1c12cf28d6f39a531d6f9cfd6745206a53d99f847d99e79d39c4fa7914fd7) | [Transaction](https://solscan.io/tx/4RVPfr1LAUtmS2RQxwFNTtgnYh9pofSRxveaBtriE81cowkxE82bxgNCYCCoBAmStgRMgw2Eqmp8V2oEs3f5QCFz) |
| 5 | 2 | main | 2026-10-13T06:30:16.427Z | SOL → USDT; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf7fa4371c65c7bf57755661752a53de88b8b5021d646f4cd80bd292557e1e5ff) | [Transaction](https://solscan.io/tx/2wVVmHqfL2ft7QtnFNGhzCpEnadSkD6okSh3kqPpFp8ePoXg9csYk7BnxujJgezA5SGpVWsnt4TA51xpLGwU1jeJ) |
| 6 | 3 | acquire | 2026-10-13T06:30:52.755Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6ed38c765ca6b6b749441096e4cabd9e6c23e6a1d5959d2cf4b04aa8a50b1f47) | [Transaction](https://solscan.io/tx/31gguG2m3tJJ54zFn4g1NbXiLdCFfnxyNb9suDALA2W84wNNvqPgWMa25FKb1u9726QhnmVkXXYvJu8EAdir6HyY) |
| 6 | 3 | main | 2026-10-13T06:30:59.773Z | JUP → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x91605ce4551df03c5a245adcb315dfb9c9d30adcd754ac0428e6f3e1b230ae1a) | [Transaction](https://solscan.io/tx/4gJy3VvHCQQDFhBKXY4WVfqqauiuNQzwyfUQcyeC2aNZz5e39eF3Dub95DmbtrKjtzSWGyJsEQcRxZN8fb1TEJZy) |
| — | 1 | cleanup | 2026-10-13T06:31:08.906Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x33c658a7f5340c55d4cce3f6eec16aa9502e791ea1f1de3a08ecd750445b6fbc) |  |
| — | 1 | cleanup | 2026-10-13T06:37:54.912Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x55c741c9ca2cb7002d30b67a018a3c2b077a56b739f635d0d0440048e3eb2c51) |  |
| — | 2 | cleanup | 2026-10-13T06:37:55.724Z | Es9vMF → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xe6aefa3f4102ea6a1bc4ce9e9e67a3c0ed509493adf9e357d3b2871b81090c16) |  |
| — | 1 | cleanup | 2026-10-13T06:52:14.479Z | EPjFWd → SOL; sell | expired | [Debug](https://debug.barn.cow.fi/order/0x74f10795fdfd03f2b9a469f58bedf70598f539bed09f988334cb4702aef2c097) |  |
| — | 2 | cleanup | 2026-10-13T06:52:15.440Z | Es9vMF → SOL; sell | expired | [Debug](https://debug.barn.cow.fi/order/0x8960a9ec8f57164c7284eb272f4781ba9ea27cf2e07339f50d605a113aa4762a) |  |
| 7 | 4 | main | 2026-10-13T06:58:28.967Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x26bbeeeac8cf1b239d58303da28301beabe8e219312a26e5e5aa30a9452392d1) | [Transaction](https://solscan.io/tx/3fH28ohzt4J3CTHHComu4H3E8UssJCgaPDDmBM5GuWLncsTmANuXgpBg7VjqjaXiwzPDoJkwQgJjcd9pHBRf1LBw) |
| 9 | 6 | main | 2026-10-13T06:58:29.069Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0327f83894b1c8d3a3303229ccd0f0e41a9b33082d80213585ebd3116ff1cd2f) | [Transaction](https://solscan.io/tx/2SJGSXGrd6gjk21jtQFZMCk7jYqpbHHa5k437VdDWk59aWbXdr1hBroknrcPQuaGUzEaQJjfgoHio8LH3reYDdSZ) |
| 8 | 5 | main | 2026-10-13T06:58:29.170Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x50fcbb0e59fd88a34bbd9d7430ec5576e44fb32b4d8f52242cca3194309a00d2) | [Transaction](https://solscan.io/tx/5DaFmQnouxwrdJUFfvDjizPZXKfUZwcTWHV8K34GrUgr4Yej9R9cbMYLux9JUr9LsfQHenT1ECfZVQmkhJf3jRge) |
| 10 | 7 | main | 2026-10-13T06:58:29.269Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2d9d58ac60ee416e7cc211eef56fa0c08ec0d1dff7d3392704e1661f63fa023a) | [Transaction](https://solscan.io/tx/5G3JErBHMMLGMdTDHLE96H3bdzNS2ttTnjyNbPtjxv4kkTsjAVLxsotUq7Eb8TuBTRaHEThyV6vv2tg2smqXQT9P) |
| — | 4 | cleanup | 2026-10-13T06:59:00.154Z | JUPyiw → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xd0e6523dc293599c4492f6a7aff4c604f99b82736e84f62e1b0b54b0ff698208) |  |
| — | 7 | cleanup | 2026-10-13T06:59:10.474Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xd4614599ec026b53f81ff3d3127390510afa25f2de5a63dbbf084a51e004db68) |  |
| 32 | 29 | main | 2026-10-13T07:10:55.925Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb7aac81d0540938df38e2a92173c197f7dd2a2b7c11ba9481d411c161488dd0f) | [Transaction](https://solscan.io/tx/3L6m1iTrjtMHTTnDtZLDi7rD37oKe3zNaxpWmwFEP3tkuMvXNpbpTb55eGrSriFegqxjvDgBPLqNenaB718wKud5) |
| 33 | 30 | main | 2026-10-13T07:10:57.176Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x325792a8e8838dd0c084d7ebeb598d30d392bf8be7f730d3fd5c86666ce3299a) | [Transaction](https://solscan.io/tx/18BvmYMMVShq7sgHnsDtHhRLUySzS7GtHfLMeeykLwjDwDxcySKkhpHhkHiaRatpR6B12GNafxNqxv9Nak6QhHz) |
| 34 | 31 | main | 2026-10-13T07:10:57.270Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcbcf60272978ce8669c44f4a70156e7cc24dd326674c3e9b6e4fe4f90b4840d1) | [Transaction](https://solscan.io/tx/2KbhYmYu8WJC2D2EyTXt2bv6YkJ5B2NqbomHuvToJBYQ6MLk8Y8HuGaGEQXqm2adf8Dv3CwwZxYtK5bw4T1puP9B) |
| 35 | 32 | main | 2026-10-13T07:10:57.368Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb614085bb2f42434f4e63828ab525636632fb05276b9da5e065d456d746a40ae) | [Transaction](https://solscan.io/tx/3SxdB1Y5uS6SZN2o9CTjrRDKWuAxGCQrVh1nKMUeKGJT5KW9DRzSr5DrfeRWzEZjQZT9PSPCrDWKnfSs3mJLi9Mm) |
| 40 | 33 | main | 2026-10-13T07:13:25.651Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3c88149878ab3fc430a9d84c3d50c47d7811f440789311db4480a55cce281cfa) | [Transaction](https://solscan.io/tx/2aT6oaCwdgWWjZbmscRLRAMko3fUuDbaB2MTP6wiAQUFiMxtrqLsUzHuHTqvZwktha4ARKKuiuxxjqVF1f9nfHGf) |
| 41 | 34 | main | 2026-10-13T07:13:25.840Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xeb180dcaf131e2d5a45996f87b16a8981757bc0f9b7a8de7b15df3405f29d181) | [Transaction](https://solscan.io/tx/5NAYNG4HSyLHUDfcKKxm3MzfxnVhQDoyzRbdfmt6TRA9M7DEuJf9ctkPb5HHTJAPuUnWXqjPq1H4yZ7KhYJDNXwg) |
| 42 | 35 | main | 2026-10-13T07:13:26.989Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x36cead156bc06f672acc26160e844df8c9b39f65d09f67c37dcee148bbefcf30) | [Transaction](https://solscan.io/tx/2WN8UExQrUgiNfmqUBKFi21iSNnRdCqXow3aqMpxKnnuE71AiNttn11uacfFX6a2xseARWr4u24fz3LJEWLPq3n9) |
| 43 | 36 | main | 2026-10-13T07:13:27.089Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5154a7d495067084f0e1b7b6d8c731e3b59ca67723efeee8767a2d9f4bb9a47d) | [Transaction](https://solscan.io/tx/2eXy4A7GmEHgvYTN5hW1Fdv5YMfu4aCDj8wSLGYzbjYD97ynpixAxFv9SeFeWaiDSvqUDAT2UqjuxJvJxbC169Q3) |
| 52 | 37 | main | 2026-10-13T07:15:57.600Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbf5d122d7b5609e09fa29ca62cab4997b987415c9504b2a2cd96d2fb0ec0790f) | [Transaction](https://solscan.io/tx/dDVpB2Guhi7wKkpn5oLPQfZsYxe3N8vNg65XS9MJSmY2XFGZqyBLP1kMvc6UCDxzRCQs2582uLtYSTAJNQbP1ZS) |
| 53 | 38 | main | 2026-10-13T07:15:57.687Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6595b8c95507c284b241af8d66194ceed56d8d17335b5262d458cc753dfda9ab) | [Transaction](https://solscan.io/tx/ST8AHeNC1fyD9H9XcZ3NnrYjwEKeQH8PYdV8jE1RohjoKz2hrCGebWrFvhrzTG8DZHwfvpDF9KYa2uv1jtUwS17) |
| 54 | 39 | main | 2026-10-13T07:15:57.786Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x44b11d3708e36148bf01f3243d98aebc427d4acbcbcec47f45948f947005df08) | [Transaction](https://solscan.io/tx/5fzFMmbxK8qnzA6u8ufwL5xnTPN898YS5ZguBxATwWdC2x1cfS9j2EVdioeKE2J7irtDNFoP9zV7KFMvFFjcRWQB) |
| 55 | 40 | main | 2026-10-13T07:15:57.886Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6ad3b42975c7bf579f353a4a5ee8495199c426c934b8bbcd4ba24f29266f797e) | [Transaction](https://solscan.io/tx/2eNyCDD7bv2nFMQuDGiAaLUF27FnixLy8D4TUBx8axDTpEYiyxw3La3UXxz5Qasj1YcUP5ft2QhSwCvdNiYEAEkd) |
| 76 | 45 | main | 2026-10-13T07:18:27.347Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4720a352ca4041c325d654759902d50b7dd3f71974417cb1da26b60d73365957) | [Transaction](https://solscan.io/tx/rJJXbswKf1GKqes8GnM3U3LoRsnJH5NivB9vuUJQ3Fg7RXe6mhaNoCJFWjfHhXv499sDakxcjHYEAvWjmRivUe2) |
| 78 | 47 | main | 2026-10-13T07:18:27.545Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc9ab7e37ded6f538608cfd39ba745bf1da8230b1370bbc888ae814c5a5e0ca99) | [Transaction](https://solscan.io/tx/vxxHC7rD7GyazdZsZ358QvJMuQT4mUcWMmGFzF5a5ucjUX64GXciSNXQSsUg6sGHWf4J9xbn9SBoKZs6CeNmFiq) |
| 77 | 46 | main | 2026-10-13T07:18:28.498Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7cde8ac5c1952e48ffc602ecbe3b1bf97151bae416f97bc45db4bb2d651327e2) | [Transaction](https://solscan.io/tx/5bNJCYTfWcE6g742eu2TDHKD8P55HXdWtArXaRGFPemsLr7PqF57h56p6BZbrXre5ZvJqAdmxYf2HM2s4VFdaeAg) |
| 79 | 48 | main | 2026-10-13T07:18:28.693Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6e62d391382c8853f341855f2e0fbd203e2a0ec3437ff6b548c5b9da545f8bf6) | [Transaction](https://solscan.io/tx/joBxzbHVQxoCBfkrDDnZmQHDb6E83eadEfkkvYD8HApmro8enfJbzt1GBmBaMRoyW6VhVNCe16wCsVp5V7YFbQf) |
| 113 | 58 | main | 2026-10-13T07:20:59.188Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x54d48dbfa4d58143c586f2b1774cc5a1ba97014c4b4f41b586d4bb57344c76cc) | [Transaction](https://solscan.io/tx/5DCX5gH1inibUFqi1JRhg3msM6LWAHNwuGSHEVMfYeuZeZwG1KdkZK5ZVsfkXiWUzJZouQpVyEbXQ7Yrg8HXSu8X) |
| 114 | 59 | main | 2026-10-13T07:20:59.282Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcce4ad94fe57702fb7bb192a60fabd567223a877ec97087895aaf82460f71a8c) | [Transaction](https://solscan.io/tx/4CYRGEDU9yLGzqXzZ4iKEVa7merexGVyQ8jSuRoFs5xeLQbmSgojbb8Vo7EzADqTNTpEKP4FktWea8jxk7q84G5Z) |
| 115 | 60 | main | 2026-10-13T07:20:59.385Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x30adaa676fd5cd2a61e86a4add58efcd03473b49ee9ada095b4861eb02705a18) | [Transaction](https://solscan.io/tx/6qLoGVTUeM8DzbX862y9VjBDYgz7oXd851KwjHhBBJfEd8Ur6SevD7VWM8Qx7KGp3e6cn6u7gBR1jo4e5oKNmmv) |
| 108 | 53 | main | 2026-10-13T07:20:59.487Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x277ad7c6d8e114898002cfa1e3f2b2e8e282101162f21807bb3d7a3e0e3a2f39) | [Transaction](https://solscan.io/tx/zQfiUkBjJTQ5b4FMqF1H7NjtPq8KeZgZuvUqsCFoseJpTeDkp3tJVjWGQnTZhgxH7C8pjTscYLKiJYaZdqYFxmq) |
| — | 29 | cleanup | 2026-10-13T07:21:30.014Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x8fe6f3671d61cb27c696706655aa83aa12ed61d1a5e365dbdf1b9cbc049e6dc0) |  |
| — | 36 | cleanup | 2026-10-13T07:21:42.075Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xc0f859b4689430e71f08c2751bbe188afe57463de3bcd6338967c87a223e23bd) |  |
| — | 41 | cleanup | 2026-10-13T07:21:53.060Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x51f023f65cadc500be44132469607aa963bb8191d650dfe71598768653263b94) |  |
| 116 | 61 | main | 2026-10-13T07:28:19.532Z | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); sell | expired | [Debug](https://debug.barn.cow.fi/order/0xe5fbe1c12d1eb964a4ad3ca5760b717b9145a270497f2dc2490b08eb4cdc4648) |  |
| 117 | 62 | main | 2026-10-13T07:28:19.555Z | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); sell | expired | [Debug](https://debug.barn.cow.fi/order/0x283d4e11110b5062c848f3b75e15908059d48c554e46128450542510b782b5e7) |  |
| 118 | 63 | main | 2026-10-13T07:28:19.576Z | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sell | expired | [Debug](https://debug.barn.cow.fi/order/0x437738536726048343610e36d1d1c04a198fc9e2757d5abab941c0346321c0a0) |  |
| 119 | 64 | main | 2026-10-13T07:28:20.921Z | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x552a31d3a901f2a37ceca68da35b0181a568a6870df657b2ec1e7bcd8b675bb8) | [Transaction](https://solscan.io/tx/4cJjDq7qXuT57qcAuCAfXQgoWX9QiyLM6Gw1tkDLJ9Y455FBpohNDwnjJhhqhexHhNp2cJREkCZXA5cE6s4RpuP9) |
| 148 | 93 | main | 2026-10-13T07:28:26.578Z | SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x70074cd7eee23edfe4f2e38e39882256883af6657c29b693d05048e04f8f0453) | [Transaction](https://solscan.io/tx/J54Z9JK4dgUQYwvNhwp5Y7VFQcJa8PHAFdqP2FpxZFVNEcY9myXDeoRRmiQwGP2s17178dnJ6N4xknnRVS5RZuX) |
| 149 | 94 | main | 2026-10-13T07:28:26.687Z | SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x66d35568934f69295fb867fd70e48840166fcbbb4734c5f65f192857a36badbc) | [Transaction](https://solscan.io/tx/3dPv41PwpF7LhVfixtZj1YB91VCF9pWn1MSyxxWNzLP9RWgxRAYyxQkZKAZoQNfQXcAAb3m1hXuRgvYVqDTurBBs) |
| — | 64 | cleanup | 2026-10-13T07:29:19.736Z | pumpCm → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x978d95bd9b34bcc83730e2e6fe1ce5eba7d9ba3cf4fd3ef058f4959db3607677) |  |
| — | 71 | cleanup | 2026-10-13T07:29:31.790Z | Xsc9qv → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x95731a6e2ed072bee371f47b9ff099bf8565eb6e71c1d2712a5b289c839b8bff) |  |

</details>

<details>
<summary>All placement and quote errors (unsupported fee rows excluded)</summary>

| Row | Trader | Step | Stage | Time | Exact error |
| --- | --- | --- | --- | --- | --- |
| — | 2 | cleanup | quote | 2026-10-13T06:31:12.556Z | 404 Not Found: NoLiquidity: no route found |
| 18 | 15 | main | quote | 2026-10-13T06:58:27.076Z | 404 Not Found: NoLiquidity: no route found |
| 11 | 8 | main | quote | 2026-10-13T06:58:28.640Z | 404 Not Found: NoLiquidity: no route found |
| 12 | 9 | main | quote | 2026-10-13T06:58:28.754Z | 404 Not Found: NoLiquidity: no route found |
| 13 | 10 | main | quote | 2026-10-13T06:58:28.986Z | 404 Not Found: NoLiquidity: no route found |
| 14 | 11 | main | quote | 2026-10-13T06:58:29.311Z | 404 Not Found: NoLiquidity: no route found |
| 15 | 12 | main | quote | 2026-10-13T06:58:29.420Z | 404 Not Found: NoLiquidity: no route found |
| 16 | 13 | main | quote | 2026-10-13T06:58:29.715Z | 404 Not Found: NoLiquidity: no route found |
| 17 | 14 | main | quote | 2026-10-13T06:58:29.895Z | 404 Not Found: NoLiquidity: no route found |
| 19 | 16 | main | quote | 2026-10-13T06:58:30.295Z | 404 Not Found: NoLiquidity: no route found |
| 20 | 17 | main | quote | 2026-10-13T06:58:30.452Z | 404 Not Found: NoLiquidity: no route found |
| 21 | 18 | main | quote | 2026-10-13T06:58:30.700Z | 404 Not Found: NoLiquidity: no route found |
| 22 | 19 | main | quote | 2026-10-13T06:58:31.008Z | 404 Not Found: NoLiquidity: no route found |
| 23 | 20 | main | quote | 2026-10-13T06:58:31.095Z | 404 Not Found: NoLiquidity: no route found |
| 24 | 21 | main | quote | 2026-10-13T06:58:31.417Z | 404 Not Found: NoLiquidity: no route found |
| 25 | 22 | main | quote | 2026-10-13T06:58:31.520Z | 404 Not Found: NoLiquidity: no route found |
| 26 | 23 | main | quote | 2026-10-13T06:58:31.712Z | 404 Not Found: NoLiquidity: no route found |
| 27 | 24 | main | quote | 2026-10-13T06:58:31.931Z | 404 Not Found: NoLiquidity: no route found |
| 28 | 25 | main | quote | 2026-10-13T06:58:31.998Z | 404 Not Found: NoLiquidity: no route found |
| 29 | 26 | main | quote | 2026-10-13T06:58:32.158Z | 404 Not Found: NoLiquidity: no route found |
| 30 | 27 | main | quote | 2026-10-13T06:58:32.421Z | 404 Not Found: NoLiquidity: no route found |
| 31 | 28 | main | quote | 2026-10-13T06:58:32.650Z | 404 Not Found: NoLiquidity: no route found |
| — | 5 | cleanup | quote | 2026-10-13T06:59:02.865Z | 404 Not Found: NoLiquidity: no route found |
| — | 12 | cleanup | quote | 2026-10-13T06:59:12.745Z | 404 Not Found: NoLiquidity: no route found |
| — | 19 | cleanup | quote | 2026-10-13T06:59:23.100Z | 404 Not Found: NoLiquidity: no route found |
| 39 | 32 | main | quote | 2026-10-13T07:13:28.344Z | 404 Not Found: NoLiquidity: no route found |
| 37 | 30 | main | quote | 2026-10-13T07:13:28.390Z | 404 Not Found: NoLiquidity: no route found |
| 38 | 31 | main | quote | 2026-10-13T07:13:28.695Z | 404 Not Found: NoLiquidity: no route found |
| 36 | 29 | main | quote | 2026-10-13T07:13:28.882Z | 404 Not Found: NoLiquidity: no route found |
| 45 | 30 | main | quote | 2026-10-13T07:15:57.109Z | 404 Not Found: NoLiquidity: no route found |
| 56 | 41 | main | quote | 2026-10-13T07:15:58.194Z | 404 Not Found: NoLiquidity: no route found |
| 57 | 42 | main | quote | 2026-10-13T07:15:58.378Z | 404 Not Found: NoLiquidity: no route found |
| 58 | 43 | main | quote | 2026-10-13T07:15:58.631Z | 404 Not Found: NoLiquidity: no route found |
| 59 | 44 | main | quote | 2026-10-13T07:15:58.975Z | 404 Not Found: NoLiquidity: no route found |
| 46 | 31 | main | quote | 2026-10-13T07:15:59.234Z | 404 Not Found: NoLiquidity: no route found |
| 44 | 29 | main | quote | 2026-10-13T07:15:59.390Z | 404 Not Found: NoLiquidity: no route found |
| 50 | 35 | main | quote | 2026-10-13T07:15:59.590Z | 404 Not Found: NoLiquidity: no route found |
| 48 | 33 | main | quote | 2026-10-13T07:15:59.746Z | 404 Not Found: NoLiquidity: no route found |
| 47 | 32 | main | quote | 2026-10-13T07:15:59.924Z | 404 Not Found: NoLiquidity: no route found |
| 51 | 36 | main | quote | 2026-10-13T07:16:00.252Z | 404 Not Found: NoLiquidity: no route found |
| 49 | 34 | main | quote | 2026-10-13T07:16:00.468Z | 404 Not Found: NoLiquidity: no route found |
| 64 | 33 | main | quote | 2026-10-13T07:18:27.141Z | 404 Not Found: NoLiquidity: no route found |
| 80 | 49 | main | quote | 2026-10-13T07:18:28.262Z | 404 Not Found: NoLiquidity: no route found |
| 81 | 50 | main | quote | 2026-10-13T07:18:28.503Z | 404 Not Found: NoLiquidity: no route found |
| 82 | 51 | main | quote | 2026-10-13T07:18:28.732Z | 404 Not Found: NoLiquidity: no route found |
| 83 | 52 | main | quote | 2026-10-13T07:18:28.930Z | 404 Not Found: NoLiquidity: no route found |
| 61 | 30 | main | quote | 2026-10-13T07:18:29.137Z | 404 Not Found: NoLiquidity: no route found |
| 72 | 41 | main | quote | 2026-10-13T07:18:29.319Z | 404 Not Found: NoLiquidity: no route found |
| 75 | 44 | main | quote | 2026-10-13T07:18:29.606Z | 404 Not Found: NoLiquidity: no route found |
| 62 | 31 | main | quote | 2026-10-13T07:18:29.739Z | 404 Not Found: NoLiquidity: no route found |
| 66 | 35 | main | quote | 2026-10-13T07:18:30.118Z | 404 Not Found: NoLiquidity: no route found |
| 63 | 32 | main | quote | 2026-10-13T07:18:30.425Z | 404 Not Found: NoLiquidity: no route found |
| 70 | 39 | main | quote | 2026-10-13T07:18:30.432Z | 404 Not Found: NoLiquidity: no route found |
| 69 | 38 | main | quote | 2026-10-13T07:18:30.648Z | 404 Not Found: NoLiquidity: no route found |
| 73 | 42 | main | quote | 2026-10-13T07:18:30.863Z | 404 Not Found: NoLiquidity: no route found |
| 74 | 43 | main | quote | 2026-10-13T07:18:30.988Z | 404 Not Found: NoLiquidity: no route found |
| 60 | 29 | main | quote | 2026-10-13T07:18:31.337Z | 404 Not Found: NoLiquidity: no route found |
| 67 | 36 | main | quote | 2026-10-13T07:18:31.440Z | 404 Not Found: NoLiquidity: no route found |
| 65 | 34 | main | quote | 2026-10-13T07:18:31.758Z | 404 Not Found: NoLiquidity: no route found |
| 71 | 40 | main | quote | 2026-10-13T07:18:31.860Z | 404 Not Found: NoLiquidity: no route found |
| 68 | 37 | main | quote | 2026-10-13T07:18:32.168Z | 404 Not Found: NoLiquidity: no route found |
| 105 | 50 | main | quote | 2026-10-13T07:20:57.037Z | 404 Not Found: NoLiquidity: no route found |
| 109 | 54 | main | quote | 2026-10-13T07:20:58.186Z | 404 Not Found: NoLiquidity: no route found |
| 110 | 55 | main | quote | 2026-10-13T07:20:58.470Z | 404 Not Found: NoLiquidity: no route found |
| 111 | 56 | main | quote | 2026-10-13T07:20:58.724Z | 404 Not Found: NoLiquidity: no route found |
| 112 | 57 | main | quote | 2026-10-13T07:20:58.940Z | 404 Not Found: NoLiquidity: no route found |
| 85 | 30 | main | quote | 2026-10-13T07:20:59.300Z | 404 Not Found: NoLiquidity: no route found |
| 87 | 32 | main | quote | 2026-10-13T07:20:59.494Z | 404 Not Found: NoLiquidity: no route found |
| 93 | 38 | main | quote | 2026-10-13T07:20:59.696Z | 404 Not Found: NoLiquidity: no route found |
| 89 | 34 | main | quote | 2026-10-13T07:20:59.901Z | 404 Not Found: NoLiquidity: no route found |
| 100 | 45 | main | quote | 2026-10-13T07:21:00.109Z | 404 Not Found: NoLiquidity: no route found |
| 88 | 33 | main | quote | 2026-10-13T07:21:00.340Z | 404 Not Found: NoLiquidity: no route found |
| 104 | 49 | main | quote | 2026-10-13T07:21:00.587Z | 404 Not Found: NoLiquidity: no route found |
| 106 | 51 | main | quote | 2026-10-13T07:21:00.756Z | 404 Not Found: NoLiquidity: no route found |
| 107 | 52 | main | quote | 2026-10-13T07:21:00.903Z | 404 Not Found: NoLiquidity: no route found |
| 96 | 41 | main | quote | 2026-10-13T07:21:01.160Z | 404 Not Found: NoLiquidity: no route found |
| 99 | 44 | main | quote | 2026-10-13T07:21:01.354Z | 404 Not Found: NoLiquidity: no route found |
| 86 | 31 | main | quote | 2026-10-13T07:21:01.368Z | 404 Not Found: NoLiquidity: no route found |
| 90 | 35 | main | quote | 2026-10-13T07:21:01.620Z | 404 Not Found: NoLiquidity: no route found |
| 94 | 39 | main | quote | 2026-10-13T07:21:01.763Z | 404 Not Found: NoLiquidity: no route found |
| 97 | 42 | main | quote | 2026-10-13T07:21:02.255Z | 404 Not Found: NoLiquidity: no route found |
| 98 | 43 | main | quote | 2026-10-13T07:21:02.261Z | 404 Not Found: NoLiquidity: no route found |
| 84 | 29 | main | quote | 2026-10-13T07:21:02.507Z | 404 Not Found: NoLiquidity: no route found |
| 91 | 36 | main | quote | 2026-10-13T07:21:02.718Z | 404 Not Found: NoLiquidity: no route found |
| 95 | 40 | main | quote | 2026-10-13T07:21:02.808Z | 404 Not Found: NoLiquidity: no route found |
| 92 | 37 | main | quote | 2026-10-13T07:21:03.207Z | 404 Not Found: NoLiquidity: no route found |
| 103 | 48 | main | quote | 2026-10-13T07:21:03.211Z | 404 Not Found: NoLiquidity: no route found |
| 102 | 47 | main | quote | 2026-10-13T07:21:03.462Z | 404 Not Found: NoLiquidity: no route found |
| 101 | 46 | main | quote | 2026-10-13T07:21:03.621Z | 404 Not Found: NoLiquidity: no route found |
| — | 30 | cleanup | quote | 2026-10-13T07:21:32.359Z | 404 Not Found: NoLiquidity: no route found |
| — | 37 | cleanup | quote | 2026-10-13T07:21:42.594Z | 404 Not Found: NoLiquidity: no route found |
| — | 45 | cleanup | quote | 2026-10-13T07:21:52.918Z | 404 Not Found: NoLiquidity: no route found |
| 124 | 69 | main | quote | 2026-10-13T07:28:17.117Z | 404 Not Found: NoLiquidity: no route found |
| 120 | 65 | main | quote | 2026-10-13T07:28:19.267Z | 404 Not Found: NoLiquidity: no route found |
| 121 | 66 | main | quote | 2026-10-13T07:28:19.488Z | 404 Not Found: NoLiquidity: no route found |
| 122 | 67 | main | quote | 2026-10-13T07:28:19.620Z | 404 Not Found: NoLiquidity: no route found |
| 123 | 68 | main | quote | 2026-10-13T07:28:19.949Z | 404 Not Found: NoLiquidity: no route found |
| 125 | 70 | main | quote | 2026-10-13T07:28:20.342Z | 404 Not Found: NoLiquidity: no route found |
| 126 | 71 | main | quote | 2026-10-13T07:28:20.470Z | 404 Not Found: NoLiquidity: no route found |
| 127 | 72 | main | quote | 2026-10-13T07:28:20.733Z | 404 Not Found: NoLiquidity: no route found |
| 128 | 73 | main | quote | 2026-10-13T07:28:20.923Z | 404 Not Found: NoLiquidity: no route found |
| 129 | 74 | main | quote | 2026-10-13T07:28:21.199Z | 404 Not Found: NoLiquidity: no route found |
| 130 | 75 | main | quote | 2026-10-13T07:28:21.338Z | 404 Not Found: NoLiquidity: no route found |
| 134 | 79 | main | quote | 2026-10-13T07:28:21.920Z | 404 Not Found: NoLiquidity: no route found |
| 143 | 88 | main | quote | 2026-10-13T07:28:22.046Z | 404 Not Found: NoLiquidity: no route found |
| 135 | 80 | main | quote | 2026-10-13T07:28:22.530Z | 404 Not Found: NoLiquidity: no route found |
| 136 | 81 | main | quote | 2026-10-13T07:28:22.665Z | 404 Not Found: NoLiquidity: no route found |
| 137 | 82 | main | quote | 2026-10-13T07:28:22.804Z | 404 Not Found: NoLiquidity: no route found |
| 138 | 83 | main | quote | 2026-10-13T07:28:23.084Z | 404 Not Found: NoLiquidity: no route found |
| 139 | 84 | main | quote | 2026-10-13T07:28:23.347Z | 404 Not Found: NoLiquidity: no route found |
| 140 | 85 | main | quote | 2026-10-13T07:28:23.563Z | 404 Not Found: NoLiquidity: no route found |
| 141 | 86 | main | quote | 2026-10-13T07:28:23.684Z | 404 Not Found: NoLiquidity: no route found |
| 142 | 87 | main | quote | 2026-10-13T07:28:23.805Z | 404 Not Found: NoLiquidity: no route found |
| 144 | 89 | main | quote | 2026-10-13T07:28:24.203Z | 404 Not Found: NoLiquidity: no route found |
| 145 | 90 | main | quote | 2026-10-13T07:28:24.389Z | 404 Not Found: NoLiquidity: no route found |
| 146 | 91 | main | quote | 2026-10-13T07:28:24.604Z | 404 Not Found: NoLiquidity: no route found |
| 147 | 92 | main | quote | 2026-10-13T07:28:24.803Z | 404 Not Found: NoLiquidity: no route found |
| 150 | 95 | main | quote | 2026-10-13T07:28:25.434Z | 404 Not Found: NoLiquidity: no route found |
| 151 | 96 | main | quote | 2026-10-13T07:28:25.666Z | 404 Not Found: NoLiquidity: no route found |
| 152 | 97 | main | quote | 2026-10-13T07:28:25.855Z | 404 Not Found: NoLiquidity: no route found |
| 153 | 98 | main | quote | 2026-10-13T07:28:26.036Z | 404 Not Found: NoLiquidity: no route found |
| 154 | 99 | main | quote | 2026-10-13T07:28:26.191Z | 404 Not Found: NoLiquidity: no route found |
| 155 | 100 | main | quote | 2026-10-13T07:28:26.511Z | 404 Not Found: NoLiquidity: no route found |
| — | 62 | cleanup | quote | 2026-10-13T07:29:16.260Z | 404 Not Found: NoLiquidity: no route found |
| — | 94 | cleanup | quote | 2026-10-13T07:30:06.179Z | 404 Not Found: NoLiquidity: no route found |

</details>

<details>
<summary>Cleanup exceptions and remaining balances</summary>

| Trader | Time | Evidence |
| --- | --- | --- |
| 3 | 2026-10-13T06:31:17.081Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.05217 JUPyiw…"], "leftover": ["0.419236 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 2, "reclaimed": 4, "swept": "64452574"} |
| 2 | 2026-10-13T06:31:17.725Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.792783 Es9vMF…"], "closedAccounts": 1, "reclaimed": 2, "swept": "61187526"} |
| 1 | 2026-10-13T06:35:03.088Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.598254 EPjFWd…"], "closedAccounts": 1, "reclaimed": 2, "swept": "60666370"} |
| 3 | 2026-10-13T06:38:00.016Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.419236 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 1 | 2026-10-13T06:41:47.208Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.598254 EPjFWd…"], "closedAccounts": 0, "reclaimed": 1, "swept": "69975000"} |
| 2 | 2026-10-13T06:41:48.529Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.792783 Es9vMF…"], "closedAccounts": 0, "reclaimed": 0, "swept": "67993640"} |
| 3 | 2026-10-13T06:52:19.667Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.419236 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 6 | 2026-10-13T06:59:09.862Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["3.16428 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "64980000"} |
| 5 | 2026-10-13T06:59:20.551Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["3.164641 JUPyiw…"], "closedAccounts": 1, "reclaimed": 1, "swept": "64987975"} |
| 12 | 2026-10-13T06:59:21.829Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.563667 JUPyiw…"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 22 | 2026-10-13T06:59:26.881Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.334926 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 19 | 2026-10-13T06:59:32.783Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.391162 EPjFWd…"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 4 | 2026-10-13T07:02:51.382Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["3.16352 JUPyiw…"], "closedAccounts": 1, "reclaimed": 1, "swept": "62973640"} |
| 7 | 2026-10-13T07:03:04.381Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.599658 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)", "0.391632 EPjFWd…"], "closedAccounts": 1, "reclaimed": 1, "swept": "61490200"} |
| 32 | 2026-10-13T07:21:35.903Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.325169 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "65985000"} |
| 31 | 2026-10-13T07:21:37.131Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.378045 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "64996560"} |
| 33 | 2026-10-13T07:21:41.179Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.270284 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "65996560"} |
| 34 | 2026-10-13T07:21:43.075Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.324249 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "65496560"} |
| 35 | 2026-10-13T07:21:46.193Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.378221 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "64996560"} |
| 30 | 2026-10-13T07:21:47.204Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.658435 EPjFWd…"], "closedAccounts": 1, "reclaimed": 0, "swept": "66985000"} |
| 38 | 2026-10-13T07:21:48.090Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.659453 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "66980000"} |
| 40 | 2026-10-13T07:21:53.181Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.879127 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "65980000"} |
| 39 | 2026-10-13T07:21:56.279Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.769293 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "66480000"} |
| 37 | 2026-10-13T07:21:56.685Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.549498 EPjFWd…"], "closedAccounts": 1, "reclaimed": 1, "swept": "67480000"} |
| 49 | 2026-10-13T07:22:01.225Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.557829 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 45 | 2026-10-13T07:22:04.630Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.82814 EPjFWd…"], "closedAccounts": 1, "reclaimed": 1, "swept": "67480000"} |
| 46 | 2026-10-13T07:22:04.907Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.993776 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "66980000"} |
| 47 | 2026-10-13T07:22:06.771Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.769105 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "66480000"} |
| 48 | 2026-10-13T07:22:10.921Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.32513 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "65980000"} |
| 53 | 2026-10-13T07:22:16.778Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.549293 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "67480000"} |
| 59 | 2026-10-13T07:22:21.911Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.378602 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "64991560"} |
| 58 | 2026-10-13T07:22:23.040Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.324463 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "65491560"} |
| 60 | 2026-10-13T07:22:23.514Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.432653 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "64491560"} |
| 29 | 2026-10-13T07:25:21.567Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.548666 EPjFWd…"], "closedAccounts": 1, "reclaimed": 0, "swept": "65478640"} |
| 36 | 2026-10-13T07:25:32.906Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.432226 EPjFWd…"], "closedAccounts": 1, "reclaimed": 0, "swept": "62495200"} |
| 41 | 2026-10-13T07:25:40.830Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.27923 EPjFWd…"], "closedAccounts": 0, "reclaimed": 0, "swept": "67983640"} |
| 61 | 2026-10-13T07:29:16.835Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["7.914514 9cRCn9… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 63 | 2026-10-13T07:29:19.522Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.114216 2u1tsz… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 62 | 2026-10-13T07:29:25.277Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["210.803664 98kfF7…"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 72 | 2026-10-13T07:29:33.846Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.001098 MUxEsU… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 93 | 2026-10-13T07:30:07.564Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.000127 AymATz… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "63491560"} |
| 98 | 2026-10-13T07:30:09.323Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["590.911382 ukHH6c… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 94 | 2026-10-13T07:30:12.331Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.00140409 Xsv9hR…"], "closedAccounts": 1, "reclaimed": 1, "swept": "63420440"} |
| 64 | 2026-10-13T07:33:10.641Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["213.436227 pumpCm…"], "closedAccounts": 1, "reclaimed": 1, "swept": "56439400"} |
| 71 | 2026-10-13T07:33:20.651Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.00484461 Xsc9qv…"], "closedAccounts": 0, "reclaimed": 0, "swept": "67983640"} |

</details>

## Detailed investigation from the saved report

The following is the original checked investigation, with unsupported fee-token table rows removed. Its historical summaries and comparisons may quote the original raw schedule. Use the adjusted performance and scenario results above for current scoring. Exact errors, ownership caveats and order links are retained.

<details>
<summary>Saved investigation, errors and transaction evidence</summary>

# Paradox solver test report

13 October 2026 · Staging on Solana mainnet · 06:28–07:35 UTC

**TLDR:** Basic swaps passed, but only 33 of 170 planned trades filled: 36 main orders were placed, 131 trades failed quoting and 3 expected rejections happened before placement. Another 3 placed sponsored orders expired, and all 12 cleanup orders stayed unfilled. Next, check quoting and sponsored creation with the test team, and recover the missing settlement failure details with Paradox.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Goal achieved; 6/6 filled | Paradox + CoW: recover failed submission details. |
| 2. 25 same direction sells | Load goal inconclusive; 4/25 filled | Test team: fix quoting and rerun all 25. |
| 3. Sell bursts | Throughput inconclusive; 20/84 filled | Test team: fix quoting and rerun the 5 waves. |
| 4. Token coverage | Coverage not achieved; 3/55 filled | Paradox + CoW: check exact buys and sponsored expiry. |

## Changes since 12 October 2026

Main fills: 33 → 33; placed main orders: 33 → 36; unfilled main orders: 0 → 3.

<details>
<summary>Comparison with the previous run</summary>

Baseline: 12 October staging report; same solver and planned trades. Acquisitions and cleanup are excluded from main totals.

| Result | 12 October | 13 October |
| --- | --- | --- |
| Standard pairs filled / planned | 5/6 | 6/6 |
| Burst sells filled / planned | 18/84 | 20/84 |
| Token coverage filled / planned | 6/55 | 3/55 |
| Quote failures before placement | 134 | 131 |
| Cleanup orders filled / placed | 0/9 | 0/12 |

Unchanged: same direction fills 4/25; token-coverage exact buys 0/15.

**Newly affected orders:** 3 sponsored main orders expired (0 → 3): [ANSEM](https://debug.barn.cow.fi/order/0xe5fbe1c12d1eb964a4ad3ca5760b717b9145a270497f2dc2490b08eb4cdc4648), [PAID](https://debug.barn.cow.fi/order/0x283d4e11110b5062c848f3b75e15908059d48c554e46128450542510b782b5e7), [USDG](https://debug.barn.cow.fi/order/0x437738536726048343610e36d1d1c04a198fc9e2757d5abab941c0346321c0a0). All stayed unfilled; **Ownership unknown**, original creation errors unavailable.

**Existing error, new order:** row 3 recorded `other`, then filled. `FailedToSubmit` was recorded in both runs (1 → 1); its link to row 3 is unverified. No new settlement error type is confirmed.

**New cleanup errors:** simulator reclaim failures 0 → 10; 1 reports `Error processing Instruction 0: missing required signature for instruction` ([order](https://debug.barn.cow.fi/order/0x33c658a7f5340c55d4cce3f6eec16aa9502e791ea1f1de3a08ecd750445b6fbc)). The other 9 report `Transaction simulation failed` with empty or truncated logs. These are separate from solver settlement.

**New successful fills** (none filled in the previous run):

| Row | Trade | Order |
| --- | --- | --- |
| 3 | Sell 0.5 JUP → USDC | [Filled](https://debug.barn.cow.fi/order/0xb06357e970ac9c5c25d8a94365a59ff5c8bf4e3168ae7afd3b0b1eeffae27628) |
| 119 | Sell 0.01 SOL → PUMP | [Filled](https://debug.barn.cow.fi/order/0x552a31d3a901f2a37ceca68da35b0181a568a6870df657b2ec1e7bcd8b675bb8) |
| 148 | Sell 0.005 SOL → XAUt0 | [Filled](https://debug.barn.cow.fi/order/0x70074cd7eee23edfe4f2e38e39882256883af6657c29b693d05048e04f8f0453) |
| 149 | Sell 0.005 SOL → GLDx | [Filled](https://debug.barn.cow.fi/order/0x66d35568934f69295fb867fd70e48840166fcbbb4734c5f65f192857a36badbc) |

Earlier cleanup fee and SPL Token errors have no comparable detail here; this does not prove they were fixed.

</details>

## 1. Standard pairs

**Basic swap coverage was achieved:** all 6 trades filled, including 3 exact output buys. The JUP sell filled after a recorded failed settlement attempt whose cause isn’t saved.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 6. **Median / longest fill:** 6.5 / 41.1 seconds. **Placed main orders filled:** 6/6. Each successful main order settled separately (batch size 1).

Selected session: `2026-10-13-06-27-composite-paradox-run`, composite `paradox-standard-load-and-tokens`. All 4 scenarios finished; its 7 resumes are included. No earlier sessions are included. Competition records list Paradox as the only participating driver: 62 proposals, 36 wins and 35 observed settlements, including 2 acquisition settlements.

Counts use composite row numbers and saved trader IDs. Total transactions means distinct successful settlements of main scenario orders; funding, creation, failed attempts and cleanup are excluded. The 2 automatic JUP acquisitions are not planned scenario rows and are counted separately: both filled. Across the 4 scenarios, 33 main orders filled in 33 successful settlement transactions. No confirmed solver defect is established by the saved artifacts. Overall main-order timing is 22.2 seconds median / 50.0 seconds longest across 33 fills.

Fill times measure journal placement to observed fulfillment and include polling delay. Successful examples use placement time; errors use the first saved failed-attempt time. For the 15 token exact buys, only the row failure timestamp is saved; the original quote-attempt time is unavailable. Where only expiry, timeout or a cleanup summary is saved, its first observation time is shown instead; the original failure time is unavailable.

Setup: 3 self paid sells (0.005 SOL → USDC, 0.005 SOL → USDT, 0.5 JUP → USDC), then 3 sponsored exact buys (0.25 USDC paying SOL, 0.25 USDT paying SOL, 0.25 USDC paying JUP), 30 seconds apart.

**Ownership unknown:** row 3 has a settlement failure labelled `other` at 06:29:32.13234329 UTC. Competition totals show 1 `FailedToSubmit` and 1 `settlement_missed_deadline`, but omit auction/solution IDs and failed submission signatures, so they cannot be reliably joined to that order or counted as 2 distinct attempts. Row 3 later filled in 41.1 seconds. A deadline warning does not establish a late solver response.

Evidence gaps apply throughout: original quote-provider responses, order-linked rejection logs, failed transaction signatures and program logs are unavailable. A `NoLiquidity` wrapper or generic expiry label does not establish the cause. Prior-session fee or SPL Token errors are not evidence for this run.

**Planned trades:** 6; **completed trades:** 6; **failed before placement:** 0.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-13 06:28:17.677 UTC | Sell 0.005 SOL → USDC | Filled in 6.4 seconds. | [Debug](https://debug.barn.cow.fi/order/0xf54c3775eb9d3eac3d27d3abd5cdae3a78bfd47a2d0574028ba78dd77bdc63cc) [Settlement](https://solscan.io/tx/XBMUHgeZGwD7JUgBQtz4p5YH5tcFcMpyaAEQSieVNR48N8f9Xk5CzTGQzo9rTtsXHGpmajdwUsm7GiqsNFPrGkb) |
| 2 / 2 | 2026-10-13 06:28:47.506 UTC | Sell 0.005 SOL → USDT | Filled in 3.1 seconds. | [Debug](https://debug.barn.cow.fi/order/0x2942ff7b0126b6c82c13af3fa8e016476f466eadab464440c3e0fd53d3b7c3b7) [Settlement](https://solscan.io/tx/MZWrWa5Q7w56QisBKL6CJk6xGqiLC6QK83MRhp49VWEhgLtqMgsTqPRKhFzvzKnGfSKr55tabd4pBsQSMNWY7JM) |
| 3 / 3 | 2026-10-13 06:29:32.13234329 UTC | Sell 0.5 JUP → USDC | **Ownership unknown:** `other` settlement failure; later filled in 41.1 seconds. Original submission details unavailable. | [Debug](https://debug.barn.cow.fi/order/0xb06357e970ac9c5c25d8a94365a59ff5c8bf4e3168ae7afd3b0b1eeffae27628) [Settlement](https://solscan.io/tx/5eMJFPiXcWz1cY4aM4VfhphWoH2xHVPQiEHYqUyRW8Xq8EawybvDJpowDxLQsYJq8iA78RhCGJ3eCsksoDRDKyjJ) |
| 4 / 1 | 2026-10-13 06:29:46.409 UTC | Buy SOL → exactly 0.25 USDC | Filled in 6.6 seconds. | [Debug](https://debug.barn.cow.fi/order/0x6ef1c12cf28d6f39a531d6f9cfd6745206a53d99f847d99e79d39c4fa7914fd7) [Settlement](https://solscan.io/tx/4RVPfr1LAUtmS2RQxwFNTtgnYh9pofSRxveaBtriE81cowkxE82bxgNCYCCoBAmStgRMgw2Eqmp8V2oEs3f5QCFz) |
| 5 / 2 | 2026-10-13 06:30:16.427 UTC | Buy SOL → exactly 0.25 USDT | Filled in 6.4 seconds. | [Debug](https://debug.barn.cow.fi/order/0xf7fa4371c65c7bf57755661752a53de88b8b5021d646f4cd80bd292557e1e5ff) [Settlement](https://solscan.io/tx/2wVVmHqfL2ft7QtnFNGhzCpEnadSkD6okSh3kqPpFp8ePoXg9csYk7BnxujJgezA5SGpVWsnt4TA51xpLGwU1jeJ) |
| 6 / 3 | 2026-10-13 06:30:59.773 UTC | Buy JUP → exactly 0.25 USDC | Filled in 6.6 seconds. | [Debug](https://debug.barn.cow.fi/order/0x91605ce4551df03c5a245adcb315dfb9c9d30adcd754ac0428e6f3e1b230ae1a) [Settlement](https://solscan.io/tx/4gJy3VvHCQQDFhBKXY4WVfqqauiuNQzwyfUQcyeC2aNZz5e39eF3Dub95DmbtrKjtzSWGyJsEQcRxZN8fb1TEJZy) |
| 3 acquisition / 3 | 2026-10-13 06:29:23.835 UTC | Sell 0.001617419 SOL → JUP | Filled; automatic acquisition, excluded from main totals. | [Debug](https://debug.barn.cow.fi/order/0xea5a9dad44c31145b88f0ef77d8a32dad7010e09fcb7321f7eb7dbe426762055) [Settlement](https://solscan.io/tx/E4p4k7Pn9xijubfwovjkbYtKZkBZX8KELvX4WtZsTeF8nHG224EaVjgQ6hcfmMDMotuqqsh2VRnCN6MddGxmFe2) |
| 6 acquisition / 3 | 2026-10-13 06:30:52.755 UTC | Sell 0.002416567 SOL → JUP | Filled; automatic acquisition, excluded from main totals. | [Debug](https://debug.barn.cow.fi/order/0x6ed38c765ca6b6b749441096e4cabd9e6c23e6a1d5959d2cf4b04aa8a50b1f47) [Settlement](https://solscan.io/tx/31gguG2m3tJJ54zFn4g1NbXiLdCFfnxyNb9suDALA2W84wNNvqPgWMa25FKb1u9726QhnmVkXXYvJu8EAdir6HyY) |

**Cleanup evidence (excluded from scenario totals)**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 1 | 2026-10-13 06:34:46.298 UTC | Sell 1.598254 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 06:34:58.796 UTC: `Simulation failed. <br>Message: Transaction simulation failed: Error processing Instruction 0: missing required signature for instruction. <br>Logs: <br>[<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpP` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0x33c658a7f5340c55d4cce3f6eec16aa9502e791ea1f1de3a08ecd750445b6fbc) |
| — / 1 | 2026-10-13 06:41:31.749 UTC | Sell 1.598254 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 06:41:44.356 UTC: `Simulation failed. <br>Message: Transaction simulation failed. <br>Logs: <br>[]. <br>Catch the `SendTransactionError` and call `getLogs()` on it for full details.` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0x55c741c9ca2cb7002d30b67a018a3c2b077a56b739f635d0d0440048e3eb2c51) |
| — / 2 | 2026-10-13 06:41:35.209 UTC | Sell 0.792783 USDT → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 06:41:46.914 UTC: `Simulation failed. <br>Message: Transaction simulation failed. <br>Logs: <br>[<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb invoke [1]",<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb consu` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0xe6aefa3f4102ea6a1bc4ce9e9e67a3c0ed509493adf9e357d3b2871b81090c16) |
| — / 1 | 2026-10-13 06:57:43.209 UTC | Sell 1.598254 USDC → native SOL | **Ownership unknown:** `expired` without execution; final status `expired`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x74f10795fdfd03f2b9a469f58bedf70598f539bed09f988334cb4702aef2c097) |
| — / 2 | 2026-10-13 06:57:46.584 UTC | Sell 0.792783 USDT → native SOL | **Ownership unknown:** `expired` without execution; final status `expired`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x8960a9ec8f57164c7284eb272f4781ba9ea27cf2e07339f50d605a113aa4762a) |
| — / 2 | 2026-10-13 06:31:12.556 UTC | Sell 0.792783 USDT → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 3 | 2026-10-13 06:31:17.081 UTC | Sell 0.419236 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 3 | 2026-10-13 06:38:00.016 UTC | Sell 0.419236 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 3 | 2026-10-13 06:52:19.667 UTC | Sell 0.419236 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |

No cleanup order filled. Leftover balances are recorded snapshots, not a fresh wallet check; some wallets held tokens before these scenario rows. Quote failures and unfilled cleanup orders remain **Ownership unknown**.

Cleanup was deferred. Last saved leftover records cover 3 traders: trader 3: 0.419236 EPjFWd…; trader 2: 0.792783 Es9vMF…; trader 1: 1.598254 EPjFWd….

Reclaim errors above happened in simulator cleanup transactions, separately from solver settlement. The instruction-0 missing-signature error confirms a reclaim signing failure; other logs are empty or truncated and do not establish a program error or repair owner. These simulator operations are not counted as solver defects.

Trader 3 burned 0.05217 JUP during cleanup instead of selling it. [Account-close transaction](https://solscan.io/tx/4Vs5aiqzET7wYWDKCApAvSWnggmh5y5uwTKBP1coPL4aX3L9G6iCVURtcAtLKH4gGo5fBJrTUFKbFvcNrdCv1vuM) records that cleanup action.

</details>

## 2. 25 same direction sells

**The full load test is inconclusive:** 21 trades failed quoting and only 4 reached placement. Each filled separately; batching remains a known and accepted Paradox limitation.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 4. **Median / longest fill:** 20.3 / 28.7 seconds. **Placed main orders filled:** 4/4. Each successful main order settled separately (batch size 1).

**Planned trades:** 25; **completed trades:** 4; **failed before placement:** 21.

Setup: 25 simultaneous self paid sells of 0.005 SOL → JUP. The 4 placed orders settled in 4 separate transactions. Batching is recorded as **known and accepted** in the preceding Paradox report; no immediate batching fix is requested. Swap counts, proportional payouts and price guards cannot be verified from the saved transaction summaries.

**Ownership unknown:** quotes returned `404 Not Found: NoLiquidity: no route found` before placement. The quote logs contain no provider response records, so neither solver ownership nor a lack of market liquidity is confirmed. Main requests sell native SOL (mint `11111111111111111111111111111111`), while filled orders execute with wSOL; compare native SOL handling, order kind and amount before blaming a token.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-13 06:58:28.967 UTC | Sell 0.005 SOL → JUP | Filled in 18.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x26bbeeeac8cf1b239d58303da28301beabe8e219312a26e5e5aa30a9452392d1) [Settlement](https://solscan.io/tx/3fH28ohzt4J3CTHHComu4H3E8UssJCgaPDDmBM5GuWLncsTmANuXgpBg7VjqjaXiwzPDoJkwQgJjcd9pHBRf1LBw) |
| 8 / 5 | 2026-10-13 06:58:29.170 UTC | Sell 0.005 SOL → JUP | Filled in 28.7 seconds. | [Debug](https://debug.barn.cow.fi/order/0x50fcbb0e59fd88a34bbd9d7430ec5576e44fb32b4d8f52242cca3194309a00d2) [Settlement](https://solscan.io/tx/5DaFmQnouxwrdJUFfvDjizPZXKfUZwcTWHV8K34GrUgr4Yej9R9cbMYLux9JUr9LsfQHenT1ECfZVQmkhJf3jRge) |
| 9 / 6 | 2026-10-13 06:58:29.069 UTC | Sell 0.005 SOL → JUP | Filled in 9.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x0327f83894b1c8d3a3303229ccd0f0e41a9b33082d80213585ebd3116ff1cd2f) [Settlement](https://solscan.io/tx/2SJGSXGrd6gjk21jtQFZMCk7jYqpbHHa5k437VdDWk59aWbXdr1hBroknrcPQuaGUzEaQJjfgoHio8LH3reYDdSZ) |
| 10 / 7 | 2026-10-13 06:58:29.269 UTC | Sell 0.005 SOL → JUP | Filled in 22.2 seconds. | [Debug](https://debug.barn.cow.fi/order/0x2d9d58ac60ee416e7cc211eef56fa0c08ec0d1dff7d3392704e1661f63fa023a) [Settlement](https://solscan.io/tx/5G3JErBHMMLGMdTDHLE96H3bdzNS2ttTnjyNbPtjxv4kkTsjAVLxsotUq7Eb8TuBTRaHEThyV6vv2tg2smqXQT9P) |
| 11 / 8 | 2026-10-13 06:58:28.640 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 12 / 9 | 2026-10-13 06:58:28.754 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 13 / 10 | 2026-10-13 06:58:28.986 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 14 / 11 | 2026-10-13 06:58:29.311 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 15 / 12 | 2026-10-13 06:58:29.420 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 16 / 13 | 2026-10-13 06:58:29.715 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 17 / 14 | 2026-10-13 06:58:29.895 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 18 / 15 | 2026-10-13 06:58:27.076 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 19 / 16 | 2026-10-13 06:58:30.295 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 20 / 17 | 2026-10-13 06:58:30.452 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 21 / 18 | 2026-10-13 06:58:30.700 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 22 / 19 | 2026-10-13 06:58:31.008 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 23 / 20 | 2026-10-13 06:58:31.095 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 24 / 21 | 2026-10-13 06:58:31.417 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 25 / 22 | 2026-10-13 06:58:31.520 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 26 / 23 | 2026-10-13 06:58:31.712 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 27 / 24 | 2026-10-13 06:58:31.931 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 28 / 25 | 2026-10-13 06:58:31.998 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 29 / 26 | 2026-10-13 06:58:32.158 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 30 / 27 | 2026-10-13 06:58:32.421 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 31 / 28 | 2026-10-13 06:58:32.650 UTC | Sell 0.005 SOL → JUP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |

**Cleanup evidence (excluded from scenario totals)**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 4 | 2026-10-13 07:02:37.168 UTC | Sell 3.16352 JUP → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 07:02:48.295 UTC: `Simulation failed. <br>Message: Transaction simulation failed. <br>Logs: <br>[<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb invoke [1]",<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb consu` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0xd0e6523dc293599c4492f6a7aff4c604f99b82736e84f62e1b0b54b0ff698208) |
| — / 7 | 2026-10-13 07:02:49.793 UTC | Sell 0.391632 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 07:03:01.514 UTC: `Simulation failed. <br>Message: Transaction simulation failed. <br>Logs: <br>[<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb invoke [1]",<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb consu` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0xd4614599ec026b53f81ff3d3127390510afa25f2de5a63dbbf084a51e004db68) |
| — / 5 | 2026-10-13 06:59:02.865 UTC | Sell 3.164641 JUP → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 6 | 2026-10-13 06:59:09.862 UTC | Sell 3.16428 JUP → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 12 | 2026-10-13 06:59:12.745 UTC | Sell 1.563667 JUP → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 19 | 2026-10-13 06:59:23.100 UTC | Sell 0.391162 USDC → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 22 | 2026-10-13 06:59:26.881 UTC | Sell 0.334926 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 7 | 2026-10-13 07:03:04.381 UTC | Sell 1.599658 JUP → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |

No cleanup order filled. Leftover balances are recorded snapshots, not a fresh wallet check; some wallets held tokens before these scenario rows. Quote failures and unfilled cleanup orders remain **Ownership unknown**.

Cleanup was deferred. Last saved leftover records cover 7 traders: trader 6: 3.16428 JUPyiw…; trader 5: 3.164641 JUPyiw…; trader 12: 1.563667 JUPyiw…; trader 22: 0.334926 EPjFWd…; trader 19: 0.391162 EPjFWd…; trader 4: 3.16352 JUPyiw…; trader 7: 1.599658 JUPyiw…, 0.391632 EPjFWd….

Reclaim errors above happened in simulator cleanup transactions, separately from solver settlement. The instruction-0 missing-signature error confirms a reclaim signing failure; other logs are empty or truncated and do not establish a program error or repair owner. These simulator operations are not counted as solver defects.

</details>

## 3. Sell bursts

**Throughput is inconclusive:** each wave placed and filled only 4 orders, despite planned wave sizes of 4, 8, 16, 24 and 32. The 150-second pauses mean this doesn’t establish a sustained rate limit.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 20. **Median / longest fill:** 25.2 / 34.0 seconds. **Placed main orders filled:** 20/20. Each successful main order settled separately (batch size 1).

**Planned trades:** 84; **completed trades:** 20; **failed before placement:** 64.

**Ownership unknown:** quotes returned `404 Not Found: NoLiquidity: no route found` before placement. The quote logs contain no provider response records, so neither solver ownership nor a lack of market liquidity is confirmed. Main requests sell native SOL (mint `11111111111111111111111111111111`), while filled orders execute with wSOL; compare native SOL handling, order kind and amount before blaming a token.

Setup: self paid SOL → USDC sells with inputs of 0.0025, 0.003, 0.0035 and 0.004 SOL. Wave clearing times below measure first row start to last observed fill, including quoting, creation and polling; these differ from the placement-to-fill metrics.

| Wave | Planned | Placed / filled | Quote failures | Clearing time |
| --- | --- | --- | --- | --- |
| 1 | 4 | 4 / 4 | 0 | 35.8 seconds |
| 2 | 8 | 4 / 4 | 4 | 33.3 seconds |
| 3 | 16 | 4 / 4 | 12 | 34.7 seconds |
| 4 | 24 | 4 / 4 | 20 | 35.7 seconds |
| 5 | 32 | 4 / 4 | 28 | 33.4 seconds |

The 64 missing orders failed at quoting, before settlement. Clearing only 4 placed orders per wave does not demonstrate a 4-order solver capacity limit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 2026-10-13 07:10:55.925 UTC | Sell 0.0025 SOL → USDC | Filled in 34.0 seconds. | [Debug](https://debug.barn.cow.fi/order/0xb7aac81d0540938df38e2a92173c197f7dd2a2b7c11ba9481d411c161488dd0f) [Settlement](https://solscan.io/tx/3L6m1iTrjtMHTTnDtZLDi7rD37oKe3zNaxpWmwFEP3tkuMvXNpbpTb55eGrSriFegqxjvDgBPLqNenaB718wKud5) |
| 33 / 30 | 2026-10-13 07:10:57.176 UTC | Sell 0.003 SOL → USDC | Filled in 25.2 seconds. | [Debug](https://debug.barn.cow.fi/order/0x325792a8e8838dd0c084d7ebeb598d30d392bf8be7f730d3fd5c86666ce3299a) [Settlement](https://solscan.io/tx/18BvmYMMVShq7sgHnsDtHhRLUySzS7GtHfLMeeykLwjDwDxcySKkhpHhkHiaRatpR6B12GNafxNqxv9Nak6QhHz) |
| 34 / 31 | 2026-10-13 07:10:57.270 UTC | Sell 0.0035 SOL → USDC | Filled in 31.7 seconds. | [Debug](https://debug.barn.cow.fi/order/0xcbcf60272978ce8669c44f4a70156e7cc24dd326674c3e9b6e4fe4f90b4840d1) [Settlement](https://solscan.io/tx/2KbhYmYu8WJC2D2EyTXt2bv6YkJ5B2NqbomHuvToJBYQ6MLk8Y8HuGaGEQXqm2adf8Dv3CwwZxYtK5bw4T1puP9B) |
| 35 / 32 | 2026-10-13 07:10:57.368 UTC | Sell 0.004 SOL → USDC | Filled in 9.6 seconds. | [Debug](https://debug.barn.cow.fi/order/0xb614085bb2f42434f4e63828ab525636632fb05276b9da5e065d456d746a40ae) [Settlement](https://solscan.io/tx/3SxdB1Y5uS6SZN2o9CTjrRDKWuAxGCQrVh1nKMUeKGJT5KW9DRzSr5DrfeRWzEZjQZT9PSPCrDWKnfSs3mJLi9Mm) |
| 36 / 29 | 2026-10-13 07:13:28.882 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 37 / 30 | 2026-10-13 07:13:28.390 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 38 / 31 | 2026-10-13 07:13:28.695 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 39 / 32 | 2026-10-13 07:13:28.344 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 40 / 33 | 2026-10-13 07:13:25.651 UTC | Sell 0.0025 SOL → USDC | Filled in 28.4 seconds. | [Debug](https://debug.barn.cow.fi/order/0x3c88149878ab3fc430a9d84c3d50c47d7811f440789311db4480a55cce281cfa) [Settlement](https://solscan.io/tx/2aT6oaCwdgWWjZbmscRLRAMko3fUuDbaB2MTP6wiAQUFiMxtrqLsUzHuHTqvZwktha4ARKKuiuxxjqVF1f9nfHGf) |
| 41 / 34 | 2026-10-13 07:13:25.840 UTC | Sell 0.003 SOL → USDC | Filled in 31.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0xeb180dcaf131e2d5a45996f87b16a8981757bc0f9b7a8de7b15df3405f29d181) [Settlement](https://solscan.io/tx/5NAYNG4HSyLHUDfcKKxm3MzfxnVhQDoyzRbdfmt6TRA9M7DEuJf9ctkPb5HHTJAPuUnWXqjPq1H4yZ7KhYJDNXwg) |
| 42 / 35 | 2026-10-13 07:13:26.989 UTC | Sell 0.0035 SOL → USDC | Filled in 21.8 seconds. | [Debug](https://debug.barn.cow.fi/order/0x36cead156bc06f672acc26160e844df8c9b39f65d09f67c37dcee148bbefcf30) [Settlement](https://solscan.io/tx/2WN8UExQrUgiNfmqUBKFi21iSNnRdCqXow3aqMpxKnnuE71AiNttn11uacfFX6a2xseARWr4u24fz3LJEWLPq3n9) |
| 43 / 36 | 2026-10-13 07:13:27.089 UTC | Sell 0.004 SOL → USDC | Filled in 9.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x5154a7d495067084f0e1b7b6d8c731e3b59ca67723efeee8767a2d9f4bb9a47d) [Settlement](https://solscan.io/tx/2eXy4A7GmEHgvYTN5hW1Fdv5YMfu4aCDj8wSLGYzbjYD97ynpixAxFv9SeFeWaiDSvqUDAT2UqjuxJvJxbC169Q3) |
| 44 / 29 | 2026-10-13 07:15:59.390 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 45 / 30 | 2026-10-13 07:15:57.109 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 46 / 31 | 2026-10-13 07:15:59.234 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 47 / 32 | 2026-10-13 07:15:59.924 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 48 / 33 | 2026-10-13 07:15:59.746 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 49 / 34 | 2026-10-13 07:16:00.468 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 50 / 35 | 2026-10-13 07:15:59.590 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 51 / 36 | 2026-10-13 07:16:00.252 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 52 / 37 | 2026-10-13 07:15:57.600 UTC | Sell 0.0025 SOL → USDC | Filled in 31.2 seconds. | [Debug](https://debug.barn.cow.fi/order/0xbf5d122d7b5609e09fa29ca62cab4997b987415c9504b2a2cd96d2fb0ec0790f) [Settlement](https://solscan.io/tx/dDVpB2Guhi7wKkpn5oLPQfZsYxe3N8vNg65XS9MJSmY2XFGZqyBLP1kMvc6UCDxzRCQs2582uLtYSTAJNQbP1ZS) |
| 53 / 38 | 2026-10-13 07:15:57.687 UTC | Sell 0.003 SOL → USDC | Filled in 25.4 seconds. | [Debug](https://debug.barn.cow.fi/order/0x6595b8c95507c284b241af8d66194ceed56d8d17335b5262d458cc753dfda9ab) [Settlement](https://solscan.io/tx/ST8AHeNC1fyD9H9XcZ3NnrYjwEKeQH8PYdV8jE1RohjoKz2hrCGebWrFvhrzTG8DZHwfvpDF9KYa2uv1jtUwS17) |
| 54 / 39 | 2026-10-13 07:15:57.786 UTC | Sell 0.0035 SOL → USDC | Filled in 19.0 seconds. | [Debug](https://debug.barn.cow.fi/order/0x44b11d3708e36148bf01f3243d98aebc427d4acbcbcec47f45948f947005df08) [Settlement](https://solscan.io/tx/5fzFMmbxK8qnzA6u8ufwL5xnTPN898YS5ZguBxATwWdC2x1cfS9j2EVdioeKE2J7irtDNFoP9zV7KFMvFFjcRWQB) |
| 55 / 40 | 2026-10-13 07:15:57.886 UTC | Sell 0.004 SOL → USDC | Filled in 9.7 seconds. | [Debug](https://debug.barn.cow.fi/order/0x6ad3b42975c7bf579f353a4a5ee8495199c426c934b8bbcd4ba24f29266f797e) [Settlement](https://solscan.io/tx/2eNyCDD7bv2nFMQuDGiAaLUF27FnixLy8D4TUBx8axDTpEYiyxw3La3UXxz5Qasj1YcUP5ft2QhSwCvdNiYEAEkd) |
| 56 / 41 | 2026-10-13 07:15:58.194 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 57 / 42 | 2026-10-13 07:15:58.378 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 58 / 43 | 2026-10-13 07:15:58.631 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 59 / 44 | 2026-10-13 07:15:58.975 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 60 / 29 | 2026-10-13 07:18:31.337 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 61 / 30 | 2026-10-13 07:18:29.137 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 62 / 31 | 2026-10-13 07:18:29.739 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 63 / 32 | 2026-10-13 07:18:30.425 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 64 / 33 | 2026-10-13 07:18:27.141 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 65 / 34 | 2026-10-13 07:18:31.758 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 66 / 35 | 2026-10-13 07:18:30.118 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 67 / 36 | 2026-10-13 07:18:31.440 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 68 / 37 | 2026-10-13 07:18:32.168 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 69 / 38 | 2026-10-13 07:18:30.648 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 70 / 39 | 2026-10-13 07:18:30.432 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 71 / 40 | 2026-10-13 07:18:31.860 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 72 / 41 | 2026-10-13 07:18:29.319 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 73 / 42 | 2026-10-13 07:18:30.863 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 74 / 43 | 2026-10-13 07:18:30.988 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 75 / 44 | 2026-10-13 07:18:29.606 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 76 / 45 | 2026-10-13 07:18:27.347 UTC | Sell 0.0025 SOL → USDC | Filled in 25.2 seconds. | [Debug](https://debug.barn.cow.fi/order/0x4720a352ca4041c325d654759902d50b7dd3f71974417cb1da26b60d73365957) [Settlement](https://solscan.io/tx/rJJXbswKf1GKqes8GnM3U3LoRsnJH5NivB9vuUJQ3Fg7RXe6mhaNoCJFWjfHhXv499sDakxcjHYEAvWjmRivUe2) |
| 77 / 46 | 2026-10-13 07:18:28.498 UTC | Sell 0.003 SOL → USDC | Filled in 31.3 seconds. | [Debug](https://debug.barn.cow.fi/order/0x7cde8ac5c1952e48ffc602ecbe3b1bf97151bae416f97bc45db4bb2d651327e2) [Settlement](https://solscan.io/tx/5bNJCYTfWcE6g742eu2TDHKD8P55HXdWtArXaRGFPemsLr7PqF57h56p6BZbrXre5ZvJqAdmxYf2HM2s4VFdaeAg) |
| 78 / 47 | 2026-10-13 07:18:27.545 UTC | Sell 0.0035 SOL → USDC | Filled in 22.1 seconds. | [Debug](https://debug.barn.cow.fi/order/0xc9ab7e37ded6f538608cfd39ba745bf1da8230b1370bbc888ae814c5a5e0ca99) [Settlement](https://solscan.io/tx/vxxHC7rD7GyazdZsZ358QvJMuQT4mUcWMmGFzF5a5ucjUX64GXciSNXQSsUg6sGHWf4J9xbn9SBoKZs6CeNmFiq) |
| 79 / 48 | 2026-10-13 07:18:28.693 UTC | Sell 0.004 SOL → USDC | Filled in 9.4 seconds. | [Debug](https://debug.barn.cow.fi/order/0x6e62d391382c8853f341855f2e0fbd203e2a0ec3437ff6b548c5b9da545f8bf6) [Settlement](https://solscan.io/tx/joBxzbHVQxoCBfkrDDnZmQHDb6E83eadEfkkvYD8HApmro8enfJbzt1GBmBaMRoyW6VhVNCe16wCsVp5V7YFbQf) |
| 80 / 49 | 2026-10-13 07:18:28.262 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 81 / 50 | 2026-10-13 07:18:28.503 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 82 / 51 | 2026-10-13 07:18:28.732 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 83 / 52 | 2026-10-13 07:18:28.930 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 84 / 29 | 2026-10-13 07:21:02.507 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 85 / 30 | 2026-10-13 07:20:59.300 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 86 / 31 | 2026-10-13 07:21:01.368 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 87 / 32 | 2026-10-13 07:20:59.494 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 88 / 33 | 2026-10-13 07:21:00.340 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 89 / 34 | 2026-10-13 07:20:59.901 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 90 / 35 | 2026-10-13 07:21:01.620 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 91 / 36 | 2026-10-13 07:21:02.718 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 92 / 37 | 2026-10-13 07:21:03.207 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 93 / 38 | 2026-10-13 07:20:59.696 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 94 / 39 | 2026-10-13 07:21:01.763 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 95 / 40 | 2026-10-13 07:21:02.808 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 96 / 41 | 2026-10-13 07:21:01.160 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 97 / 42 | 2026-10-13 07:21:02.255 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 98 / 43 | 2026-10-13 07:21:02.261 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 99 / 44 | 2026-10-13 07:21:01.354 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 100 / 45 | 2026-10-13 07:21:00.109 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 101 / 46 | 2026-10-13 07:21:03.621 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 102 / 47 | 2026-10-13 07:21:03.462 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 103 / 48 | 2026-10-13 07:21:03.211 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 104 / 49 | 2026-10-13 07:21:00.587 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 105 / 50 | 2026-10-13 07:20:57.037 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 106 / 51 | 2026-10-13 07:21:00.756 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 107 / 52 | 2026-10-13 07:21:00.903 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 108 / 53 | 2026-10-13 07:20:59.487 UTC | Sell 0.0025 SOL → USDC | Filled in 25.4 seconds. | [Debug](https://debug.barn.cow.fi/order/0x277ad7c6d8e114898002cfa1e3f2b2e8e282101162f21807bb3d7a3e0e3a2f39) [Settlement](https://solscan.io/tx/zQfiUkBjJTQ5b4FMqF1H7NjtPq8KeZgZuvUqsCFoseJpTeDkp3tJVjWGQnTZhgxH7C8pjTscYLKiJYaZdqYFxmq) |
| 109 / 54 | 2026-10-13 07:20:58.186 UTC | Sell 0.003 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 110 / 55 | 2026-10-13 07:20:58.470 UTC | Sell 0.0035 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 111 / 56 | 2026-10-13 07:20:58.724 UTC | Sell 0.004 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 112 / 57 | 2026-10-13 07:20:58.940 UTC | Sell 0.0025 SOL → USDC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 113 / 58 | 2026-10-13 07:20:59.188 UTC | Sell 0.003 SOL → USDC | Filled in 28.3 seconds. | [Debug](https://debug.barn.cow.fi/order/0x54d48dbfa4d58143c586f2b1774cc5a1ba97014c4b4f41b586d4bb57344c76cc) [Settlement](https://solscan.io/tx/5DCX5gH1inibUFqi1JRhg3msM6LWAHNwuGSHEVMfYeuZeZwG1KdkZK5ZVsfkXiWUzJZouQpVyEbXQ7Yrg8HXSu8X) |
| 114 / 59 | 2026-10-13 07:20:59.282 UTC | Sell 0.0035 SOL → USDC | Filled in 19.0 seconds. | [Debug](https://debug.barn.cow.fi/order/0xcce4ad94fe57702fb7bb192a60fabd567223a877ec97087895aaf82460f71a8c) [Settlement](https://solscan.io/tx/4CYRGEDU9yLGzqXzZ4iKEVa7merexGVyQ8jSuRoFs5xeLQbmSgojbb8Vo7EzADqTNTpEKP4FktWea8jxk7q84G5Z) |
| 115 / 60 | 2026-10-13 07:20:59.385 UTC | Sell 0.004 SOL → USDC | Filled in 9.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x30adaa676fd5cd2a61e86a4add58efcd03473b49ee9ada095b4861eb02705a18) [Settlement](https://solscan.io/tx/6qLoGVTUeM8DzbX862y9VjBDYgz7oXd851KwjHhBBJfEd8Ur6SevD7VWM8Qx7KGp3e6cn6u7gBR1jo4e5oKNmmv) |

**Cleanup evidence (excluded from scenario totals)**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 29 | 2026-10-13 07:25:09.687 UTC | Sell 0.548666 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 07:25:20.034 UTC: `Simulation failed. <br>Message: Transaction simulation failed. <br>Logs: <br>[<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb invoke [1]",<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb consu` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0x8fe6f3671d61cb27c696706655aa83aa12ed61d1a5e365dbdf1b9cbc049e6dc0) |
| — / 36 | 2026-10-13 07:25:21.913 UTC | Sell 0.432226 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 07:25:31.353 UTC: `Simulation failed. <br>Message: Transaction simulation failed. <br>Logs: <br>[<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb invoke [1]",<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb consu` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0xc0f859b4689430e71f08c2751bbe188afe57463de3bcd6338967c87a223e23bd) |
| — / 41 | 2026-10-13 07:25:30.036 UTC | Sell 0.27923 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 07:25:39.281 UTC: `Simulation failed. <br>Message: Transaction simulation failed. <br>Logs: <br>[]. <br>Catch the `SendTransactionError` and call `getLogs()` on it for full details.` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0x51f023f65cadc500be44132469607aa963bb8191d650dfe71598768653263b94) |
| — / 30 | 2026-10-13 07:21:32.359 UTC | Sell 0.658435 USDC → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 32 | 2026-10-13 07:21:35.903 UTC | Sell 1.325169 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 31 | 2026-10-13 07:21:37.131 UTC | Sell 0.378045 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 33 | 2026-10-13 07:21:41.179 UTC | Sell 0.270284 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 37 | 2026-10-13 07:21:42.594 UTC | Sell 0.549498 USDC → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 34 | 2026-10-13 07:21:43.075 UTC | Sell 0.324249 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 35 | 2026-10-13 07:21:46.193 UTC | Sell 0.378221 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 38 | 2026-10-13 07:21:48.090 UTC | Sell 0.659453 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 45 | 2026-10-13 07:21:52.918 UTC | Sell 0.82814 USDC → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 40 | 2026-10-13 07:21:53.181 UTC | Sell 0.879127 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 39 | 2026-10-13 07:21:56.279 UTC | Sell 0.769293 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 49 | 2026-10-13 07:22:01.225 UTC | Sell 0.557829 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 46 | 2026-10-13 07:22:04.907 UTC | Sell 0.993776 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 47 | 2026-10-13 07:22:06.771 UTC | Sell 0.769105 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 48 | 2026-10-13 07:22:10.921 UTC | Sell 1.32513 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 53 | 2026-10-13 07:22:16.778 UTC | Sell 0.549293 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 59 | 2026-10-13 07:22:21.911 UTC | Sell 0.378602 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 58 | 2026-10-13 07:22:23.040 UTC | Sell 0.324463 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 60 | 2026-10-13 07:22:23.514 UTC | Sell 0.432653 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |

No cleanup order filled. Leftover balances are recorded snapshots, not a fresh wallet check; some wallets held tokens before these scenario rows. Quote failures and unfilled cleanup orders remain **Ownership unknown**.

Cleanup was deferred. Last saved leftover records cover 22 traders: trader 32: 1.325169 EPjFWd…; trader 31: 0.378045 EPjFWd…; trader 33: 0.270284 EPjFWd…; trader 34: 0.324249 EPjFWd…; trader 35: 0.378221 EPjFWd…; trader 30: 0.658435 EPjFWd…; trader 38: 0.659453 EPjFWd…; trader 40: 0.879127 EPjFWd…; trader 39: 0.769293 EPjFWd…; trader 37: 0.549498 EPjFWd…; trader 49: 0.557829 EPjFWd…; trader 45: 0.82814 EPjFWd…; trader 46: 0.993776 EPjFWd…; trader 47: 0.769105 EPjFWd…; trader 48: 1.32513 EPjFWd…; trader 53: 0.549293 EPjFWd…; trader 59: 0.378602 EPjFWd…; trader 58: 0.324463 EPjFWd…; trader 60: 0.432653 EPjFWd…; trader 29: 0.548666 EPjFWd…; trader 36: 0.432226 EPjFWd…; trader 41: 0.27923 EPjFWd….

Reclaim errors above happened in simulator cleanup transactions, separately from solver settlement. The instruction-0 missing-signature error confirms a reclaim signing failure; other logs are empty or truncated and do not establish a program error or repair owner. These simulator operations are not counted as solver defects.

</details>

## 4. Token coverage

**Broad token coverage was not achieved:** fixed input sells reached PUMP, XAUt0 and GLDx, but none of the 15 exact output buys reached placement. Quote failures and 3 expired sponsored orders left most token types untested.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 3. **Median / longest fill:** 44.0 / 50.0 seconds. **Placed main orders filled:** 3/6. Each successful main order settled separately (batch size 1).

**Planned trades:** 55; **completed trades:** 3; **failed before placement:** 49 (46 quote failures and 3 expected autopilot rejections).

**Ownership unknown:** quotes returned `404 Not Found: NoLiquidity: no route found` before placement. The quote logs contain no provider response records, so neither solver ownership nor a lack of market liquidity is confirmed. Main requests sell native SOL (mint `11111111111111111111111111111111`), while filled orders execute with wSOL; compare native SOL handling, order kind and amount before blaming a token.

Setup: fixed input sells of 0.005–0.01 SOL into 40 token types, plus 15 exact output buys paying SOL. Successful fixed input sells: **SOL → PUMP, XAUt0, GLDx**. Successful exact output buys in this scenario: **none**. Standard-pair exact buys separately succeeded for **USDC and USDT** (USDC paying both SOL and JUP). PUMP and GLDx are Token-2022 controls; XAUt0 is a classic SPL control. Reverse sells and exact buys remain separate checks.

All 15 exact output buys and 31 fixed input sells failed quoting. Liquid staking token coverage was not demonstrated: JitoSOL, mSOL, JupSOL, INF, hyloSOL and PSOL all failed before placement.

**Ownership unknown:** the 3 sponsored sells into ANSEM, PAID and USDG expired without execution. The creation-expiry file lists their UIDs but no error text or transaction signatures. The generated report labels them “Winner too late: creation blockhash expired”, yet competition records show 0 winner skips for that reason. Sponsored creation is the recorded stage; blockhash expiry, late solver response and repair ownership are not independently verified. CoW needs the original creation records before assigning a solver defect.

The 3 transfer-fee probes (SI, ZCAT and ANTHROPIC) were rejected as expected by **autopilot before solver participation**. This is an autopilot limitation. Totals reconcile as 170 planned = 33 filled + 3 placed but expired + 131 quote failures + 3 expected rejections. The 128 journal `place_error` events include 119 main and 9 cleanup events; 15 more exact buy quote failures appear only as `row_failed`. No main-order retries were configured.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 61 | 2026-10-13 07:28:53.955 UTC | Sell 0.01 SOL → ANSEM | **Ownership unknown:** `main expired`; no execution. Sponsored creation expiry reported; original cause unavailable. | [Debug](https://debug.barn.cow.fi/order/0xe5fbe1c12d1eb964a4ad3ca5760b717b9145a270497f2dc2490b08eb4cdc4648) |
| 117 / 62 | 2026-10-13 07:28:54.013 UTC | Sell 0.01 SOL → PAID | **Ownership unknown:** `main expired`; no execution. Sponsored creation expiry reported; original cause unavailable. | [Debug](https://debug.barn.cow.fi/order/0x283d4e11110b5062c848f3b75e15908059d48c554e46128450542510b782b5e7) |
| 118 / 63 | 2026-10-13 07:28:54.208 UTC | Sell 0.01 SOL → USDG | **Ownership unknown:** `main expired`; no execution. Sponsored creation expiry reported; original cause unavailable. | [Debug](https://debug.barn.cow.fi/order/0x437738536726048343610e36d1d1c04a198fc9e2757d5abab941c0346321c0a0) |
| 119 / 64 | 2026-10-13 07:28:20.921 UTC | Sell 0.01 SOL → PUMP | Filled in 50.0 seconds. | [Debug](https://debug.barn.cow.fi/order/0x552a31d3a901f2a37ceca68da35b0181a568a6870df657b2ec1e7bcd8b675bb8) [Settlement](https://solscan.io/tx/4cJjDq7qXuT57qcAuCAfXQgoWX9QiyLM6Gw1tkDLJ9Y455FBpohNDwnjJhhqhexHhNp2cJREkCZXA5cE6s4RpuP9) |
| 120 / 65 | 2026-10-13 07:28:19.267 UTC | Sell 0.01 SOL → PYUSD | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 121 / 66 | 2026-10-13 07:28:19.488 UTC | Sell 0.01 SOL → CASH | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 122 / 67 | 2026-10-13 07:28:19.620 UTC | Sell 0.01 SOL → CRCLx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 123 / 68 | 2026-10-13 07:28:19.949 UTC | Sell 0.01 SOL → SPYx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 124 / 69 | 2026-10-13 07:28:17.117 UTC | Sell 0.01 SOL → USDv | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 125 / 70 | 2026-10-13 07:28:20.342 UTC | Sell 0.01 SOL → SKHY | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 126 / 71 | 2026-10-13 07:28:20.470 UTC | Sell 0.01 SOL → NVDAx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 127 / 72 | 2026-10-13 07:28:20.733 UTC | Sell 0.01 SOL → MU | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 128 / 73 | 2026-10-13 07:28:20.923 UTC | Sell 0.01 SOL → SPCX | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 129 / 74 | 2026-10-13 07:28:21.199 UTC | Sell 0.01 SOL → SPCXx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 130 / 75 | 2026-10-13 07:28:21.338 UTC | Sell 0.01 SOL → TSLAx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 134 / 79 | 2026-10-13 07:28:21.920 UTC | Sell 0.005 SOL → BONK | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 135 / 80 | 2026-10-13 07:28:22.530 UTC | Sell 0.005 SOL → WIF | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 136 / 81 | 2026-10-13 07:28:22.665 UTC | Sell 0.005 SOL → POPCAT | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 137 / 82 | 2026-10-13 07:28:22.804 UTC | Sell 0.005 SOL → JitoSOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 138 / 83 | 2026-10-13 07:28:23.084 UTC | Sell 0.005 SOL → mSOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 139 / 84 | 2026-10-13 07:28:23.347 UTC | Sell 0.005 SOL → JupSOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 140 / 85 | 2026-10-13 07:28:23.563 UTC | Sell 0.005 SOL → cbBTC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 141 / 86 | 2026-10-13 07:28:23.684 UTC | Sell 0.005 SOL → USDe | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 142 / 87 | 2026-10-13 07:28:23.805 UTC | Sell 0.005 SOL → EURC | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 143 / 88 | 2026-10-13 07:28:22.046 UTC | Sell 0.005 SOL → USDY | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 144 / 89 | 2026-10-13 07:28:24.203 UTC | Sell 0.005 SOL → JLP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 145 / 90 | 2026-10-13 07:28:24.389 UTC | Sell 0.005 SOL → INF | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 146 / 91 | 2026-10-13 07:28:24.604 UTC | Sell 0.005 SOL → ETH | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 147 / 92 | 2026-10-13 07:28:24.803 UTC | Sell 0.005 SOL → BNB | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 148 / 93 | 2026-10-13 07:28:26.578 UTC | Sell 0.005 SOL → XAUt0 | Filled in 43.7 seconds. | [Debug](https://debug.barn.cow.fi/order/0x70074cd7eee23edfe4f2e38e39882256883af6657c29b693d05048e04f8f0453) [Settlement](https://solscan.io/tx/J54Z9JK4dgUQYwvNhwp5Y7VFQcJa8PHAFdqP2FpxZFVNEcY9myXDeoRRmiQwGP2s17178dnJ6N4xknnRVS5RZuX) |
| 149 / 94 | 2026-10-13 07:28:26.687 UTC | Sell 0.005 SOL → GLDx | Filled in 44.0 seconds. | [Debug](https://debug.barn.cow.fi/order/0x66d35568934f69295fb867fd70e48840166fcbbb4734c5f65f192857a36badbc) [Settlement](https://solscan.io/tx/3dPv41PwpF7LhVfixtZj1YB91VCF9pWn1MSyxxWNzLP9RWgxRAYyxQkZKAZoQNfQXcAAb3m1hXuRgvYVqDTurBBs) |
| 150 / 95 | 2026-10-13 07:28:25.434 UTC | Sell 0.005 SOL → EUROP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 151 / 96 | 2026-10-13 07:28:25.666 UTC | Sell 0.005 SOL → Fartcoin | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 152 / 97 | 2026-10-13 07:28:25.855 UTC | Sell 0.005 SOL → MEW | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 153 / 98 | 2026-10-13 07:28:26.036 UTC | Sell 0.005 SOL → BOME | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 154 / 99 | 2026-10-13 07:28:26.191 UTC | Sell 0.005 SOL → hyloSOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 155 / 100 | 2026-10-13 07:28:26.511 UTC | Sell 0.005 SOL → PSOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 156 / 61 | 2026-10-13 07:28:55.203 UTC | Buy SOL → exactly 3.26 ANSEM | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 157 / 62 | 2026-10-13 07:28:55.370 UTC | Buy SOL → exactly 88.1 PAID | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 158 / 63 | 2026-10-13 07:28:55.564 UTC | Buy SOL → exactly 0.464 USDG | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 159 / 64 | 2026-10-13 07:29:11.179 UTC | Buy SOL → exactly 71.6 PUMP | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 160 / 65 | 2026-10-13 07:28:26.682 UTC | Buy SOL → exactly 0.464 PYUSD | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 161 / 66 | 2026-10-13 07:28:26.867 UTC | Buy SOL → exactly 0.464 CASH | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 162 / 67 | 2026-10-13 07:28:26.995 UTC | Buy SOL → exactly 0.00574 CRCLx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 163 / 68 | 2026-10-13 07:28:25.177 UTC | Buy SOL → exactly 0.000597 SPYx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 164 / 69 | 2026-10-13 07:28:22.300 UTC | Buy SOL → exactly 0.464 USDv | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 165 / 70 | 2026-10-13 07:28:27.573 UTC | Buy SOL → exactly 0.0026 SKHY | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 166 / 71 | 2026-10-13 07:28:27.599 UTC | Buy SOL → exactly 0.00196 NVDAx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 167 / 72 | 2026-10-13 07:28:27.779 UTC | Buy SOL → exactly 0.000427 MU | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 168 / 73 | 2026-10-13 07:28:28.054 UTC | Buy SOL → exactly 0.00276 SPCX | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 169 / 74 | 2026-10-13 07:28:25.225 UTC | Buy SOL → exactly 0.00277 SPCXx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |
| 170 / 75 | 2026-10-13 07:28:28.380 UTC | Buy SOL → exactly 0.00123 TSLAx | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote rejected. |

**Cleanup evidence (excluded from scenario totals)**

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 64 | 2026-10-13 07:32:59.077 UTC | Sell 213.436227 PUMP → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 07:33:07.842 UTC: `Simulation failed. <br>Message: Transaction simulation failed. <br>Logs: <br>[<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb invoke [1]",<br>  "Program EzHqcdJssenE2R8xogJ8wpL66PRQet9M6ubpsX4QxpPb consu` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0x978d95bd9b34bcc83730e2e6fe1ce5eba7d9ba3cf4fd3ef058f4959db3607677) |
| — / 71 | 2026-10-13 07:33:11.511 UTC | Sell 0.00484461 NVDAx → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. Simulator reclaim at 2026-10-13 07:33:19.136 UTC: `Simulation failed. <br>Message: Transaction simulation failed. <br>Logs: <br>[]. <br>Catch the `SendTransactionError` and call `getLogs()` on it for full details.` (exact saved text; truncated where shown). | [Debug](https://debug.barn.cow.fi/order/0x95731a6e2ed072bee371f47b9ff099bf8565eb6e71c1d2712a5b289c839b8bff) |
| — / 62 | 2026-10-13 07:29:16.260 UTC | Sell 210.803664 PAID → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 61 | 2026-10-13 07:29:16.835 UTC | Sell 7.914514 ANSEM → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 63 | 2026-10-13 07:29:19.522 UTC | Sell 1.114216 USDG → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 72 | 2026-10-13 07:29:33.846 UTC | Sell 0.001098 MU → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 94 | 2026-10-13 07:30:06.179 UTC | Sell 0.00140409 GLDx → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 93 | 2026-10-13 07:30:07.564 UTC | Sell 0.000127 XAUt0 → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 98 | 2026-10-13 07:30:09.323 UTC | Sell 590.911382 BOME → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |

No cleanup order filled. Leftover balances are recorded snapshots, not a fresh wallet check; some wallets held tokens before these scenario rows. Quote failures and unfilled cleanup orders remain **Ownership unknown**.

Cleanup was deferred. Last saved leftover records cover 9 traders: trader 61: 7.914514 9cRCn9…; trader 63: 1.114216 2u1tsz…; trader 62: 210.803664 98kfF7…; trader 72: 0.001098 MUxEsU…; trader 93: 0.000127 AymATz…; trader 98: 590.911382 ukHH6c…; trader 94: 0.00140409 Xsv9hR…; trader 64: 213.436227 pumpCm…; trader 71: 0.00484461 Xsc9qv….

Reclaim errors above happened in simulator cleanup transactions, separately from solver settlement. The instruction-0 missing-signature error confirms a reclaim signing failure; other logs are empty or truncated and do not establish a program error or repair owner. These simulator operations are not counted as solver defects.

</details>

</details>

## Exclusion audit

Excluded original row IDs: 131, 132, 133. These are unsupported non-zero transfer-fee probes, rejected before solver participation. They are absent from all scored tables and failure totals above. Their raw records remain in the original session files.

## Sources

Local session evidence: `2026-10-13-06-27-composite-paradox-run/sim/run.json`, `sim/journal.jsonl`, saved `meta.json`, and `orders.json` / `txs.json` where present. Prior checked investigation: `2026-10-13-06-27_paradox_solver_test_report_for_cow.md`.

This report was recalculated on 20 October 2026. No new trades, cancellations or cleanup transactions were sent to prepare it.
