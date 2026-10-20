# Paradox composite test report

Session: `2026-10-12-09-43-composite-paradox-run`. Environment: staging on Solana mainnet. Start: 2026-10-12T09:43:45.472Z. Saved observation end: 2026-10-12T11:06:08.916Z.

**TLDR:** 33/167 eligible planned flows filled (19.76%); 134 failed.

**Adjusted performance:** 33/167 eligible planned flows = **19.76%**. 3 unsupported non-zero transfer-fee rows are excluded from both numerator and denominator. Original schedule: 170 rows. Raw run evidence is unchanged.

A flow counts as filled only when its saved row result is filled. Main, prerequisite acquisition and cleanup orders are separate below; retries can produce more than one order per flow. These rates describe the recorded test conditions and do not establish production readiness.

Saved run status: finished=true; 0 unfinished scenario phases; final account cleanup pending: not recorded in this older run. A false finished flag can reflect cleanup rather than unfinished trading. This is the saved snapshot, not a new on-chain balance audit.

## Biggest recorded issues

119 × main error: 404 Not Found: NoLiquidity: no route found; 15 × quote failed: 404 Not Found: NoLiquidity: no route found

`NoLiquidity` means the quote path returned no usable route; it does not prove that the token has no liquidity or that the named solver caused it. Creation failures occur before settlement. A later cancelled order does not identify why a candidate solution failed.

## Scenario results

| Scenario | Eligible planned | Filled | Failed | Pending | Saved phase |
| --- | --- | --- | --- | --- | --- |
| solver-standard-pairs | 6 | 5 | 1 | 0 | finished |
| solver-same-direction-25 | 25 | 4 | 21 | 0 | finished |
| solver-burst-sell | 84 | 18 | 66 | 0 | finished |
| solver-token-coverage | 52 | 6 | 46 | 0 | finished |

Saved placements: {'main': 33, 'acquire': 2, 'cleanup': 9}. Successful scenario settlements (main + prerequisite acquisition, excluding cleanup): 35 distinct signatures. Selected-order batch sizes: {1: 35}. Shared signatures show batching; they do not establish direct CoW matching.

Timing: median 19.816s; longest 66.655s across 35 successful main/acquisition orders. Endpoints: journal placement → simulator-observed fulfillment, including polling delay.

<details>
<summary>solver-standard-pairs — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | SOL → USDC | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 2 | 2 | SOL → USDT | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 3 | 3 | JUP → USDC | sell 0.5 JUP; self | failed | main error: 404 Not Found: NoLiquidity: no route found | acquire: [Debug](https://debug.barn.cow.fi/order/0x56258f6f811b625b699e803b1499acbb3151d66590480d7a8ad2628144318680) |
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
| 10 | 7 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 11 | 8 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 12 | 9 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 13 | 10 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 14 | 11 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 15 | 12 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
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
| 34 | 31 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 35 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 36 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 37 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 38 | 31 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 39 | 32 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 40 | 33 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 41 | 34 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 42 | 35 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 43 | 36 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
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
| 56 | 41 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
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
| 80 | 49 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
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
| 100 | 45 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 101 | 46 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 102 | 47 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 103 | 48 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 104 | 49 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 105 | 50 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 106 | 51 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 107 | 52 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 108 | 53 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 109 | 54 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 110 | 55 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 111 | 56 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 112 | 57 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 113 | 58 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 114 | 59 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 115 | 60 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-token-coverage — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 116 | 61 | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 117 | 62 | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 118 | 63 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 119 | 64 | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | sell 0.01 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 120 | 65 | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 121 | 66 | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 122 | 67 | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 123 | 68 | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | sell 0.01 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 124 | 69 | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 125 | 70 | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 126 | 71 | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 127 | 72 | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | sell 0.01 SOL; self | filled |  | See full order ledger below (same row and trader). |
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
| 148 | 93 | SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 149 | 94 | SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 150 | 95 | SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 151 | 96 | SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 152 | 97 | SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 153 | 98 | SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
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
| 1 | 1 | main | 2026-10-12T09:43:47.496Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0bb7c64933550cd366e194e2536cec2212719f65ed72f0d93c0003472d891e71) | [Transaction](https://solscan.io/tx/3EQWS3o7N7g4S65JWSazNCqRmkqbwbmX7stu5VMf5E8rf6FBPeCN5Z6jS3za3p2XRLUsn52ki4C9xJZ1Ssbd95pQ) |
| 2 | 2 | main | 2026-10-12T09:44:17.431Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xae7e8cb5075a8405a1f30fe94ab263c02a78ed381ffafa14ab4f02eeca6232ff) | [Transaction](https://solscan.io/tx/Xh3qzd5eWqcNuyGvq8Yd4MGXcYQCNXt7XW8L9beGD12H4TjQMa32kQpWKBsgC1SDPbi1H8RAEU7ds8VotjtYLQZ) |
| 3 | 3 | acquire | 2026-10-12T09:44:53.742Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x56258f6f811b625b699e803b1499acbb3151d66590480d7a8ad2628144318680) | [Transaction](https://solscan.io/tx/3iJpSYrEbEmemKWbjvXr2ZMsip81mCWSfFj8kNEEnniEHTMzgv4RaK3mKSJiS2FZDGwx53bA9kRQzrHy52FskWPc) |
| 4 | 1 | main | 2026-10-12T09:45:17.105Z | SOL → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb3dfd9b2525adfdf6ad8c980e4a195863c04e441a7f5e09566609e07fb2f9707) | [Transaction](https://solscan.io/tx/VSShuzKui8GcexUCQ1FWRAwFg9cb6BM3oSpdHdeh8Q3qhewyENpkNnLi6iAHDRKHuV22fhSnUsufeDkmMARLw2d) |
| 5 | 2 | main | 2026-10-12T09:45:46.299Z | SOL → USDT; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x64b2104acdf15e9c9220d5f96ccbb7b5c83c1369b40c143c31178160397e5241) | [Transaction](https://solscan.io/tx/5TE1HfQ1o96LuwQfSwbrGhgq9nqvqu3sGsLXyHdgNbVD5YLQttUt4jCtDaz47xSRWmxAW4gy5Xs3PbYRvfCMTgwZ) |
| 6 | 3 | acquire | 2026-10-12T09:46:22.895Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3389ba811d178e3eeaa62e6214bca397841a147ae111b2ff294e1590dd63d55a) | [Transaction](https://solscan.io/tx/23JrXWcGFvii1eGmz1jUeFPEYSeBYoHjTx9ThGKtjJ1szuBzje2Z2U8RmjkMdjFM2JduNgN1jyDzAXwgiDmdiYgt) |
| 6 | 3 | main | 2026-10-12T09:46:33.168Z | JUP → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x847e2b61cadadbb1e4f3555a9c096e3c4171e49523a9c04ff6c6dc62e0f86f35) | [Transaction](https://solscan.io/tx/562dBGdxRWJG5ukW13czZodQRv3xd3nUpqwgRH6q9wZms4FzMhHyNvpeaNHt7J7Sgee9sCQwjkMgDQnTLCJYmDMb) |
| — | 1 | cleanup | 2026-10-12T09:46:42.218Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xe0fed7fbf0819f75c7d96387f3c849754b90de5c2825a1e92cf0f053a5dfe0cb) |  |
| — | 1 | cleanup | 2026-10-12T10:10:59.407Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x4739838071cdd9bc9aaf8c7f474e64d3ba350603c508e52fc5adb961cd406617) |  |
| 7 | 4 | main | 2026-10-12T10:28:33.563Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa744e39777360deaf6b7d0bfced74b200b2f8dad34e78f143b95607c61f334fe) | [Transaction](https://solscan.io/tx/31MM986ieFHuQtGF5wV6upwQ4jRTuAMmYWDBFV7chuCCA8huKq9mQKczcfXTeShJZcfb8Uvca7wgbKor6dbPbfUg) |
| 8 | 5 | main | 2026-10-12T10:28:33.663Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x97c95937108e2c2aca597852779e182e5b0d7eff824f188a3ea5e3c5e8aadd19) | [Transaction](https://solscan.io/tx/3KDVoV7f7gW9ShkXKqJ7XnMZdDpH9ER7NyuVHNFtJq2qwHwdeP37utTauHhAQokG9mpJ6EvYkEBqci6bFciSDTMB) |
| 9 | 6 | main | 2026-10-12T10:28:33.762Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x46ac573090da74c3d5954ce26e35ad1e7c4ffc96b33454b636475d72c0478319) | [Transaction](https://solscan.io/tx/3vUa1iqowt12HSYvCqnYi32xMgHB66gwbLhpHYpnMWyqWpvyonbCU2FKKbyTd8xHoDvWuUzFzSfRnaHvva1QnqEe) |
| 15 | 12 | main | 2026-10-12T10:28:33.861Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd6ae31d69256b8eee069437121d53f8ec2bb49cb6be24de5ab105818d4c7e1a6) | [Transaction](https://solscan.io/tx/3p7c7w3P9SezCZWEANT7zFmvgBy15BLoSaC7jmzDYxYS72uaFn8sXw5t9nfcfCuHrEDY6oBZ7sq5nVxgbz9jgmXU) |
| — | 4 | cleanup | 2026-10-12T10:29:43.166Z | JUPyiw → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x6f2414d1917f5128dbf23ef9d37fbe16a27ea1da91785876cf4a505bba44b5a5) |  |
| 32 | 29 | main | 2026-10-12T10:42:01.024Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3de93a3216ea57e2315b6153c64368f8d03265d4212fe6cef535f5c45049d656) | [Transaction](https://solscan.io/tx/3DruvZzfvAuHum98r1vxboJh8VPVM16xj4H7G2uv947cbVUpbRY9RoiDxcfRABXe9dRNwTiMDXVmuUgkESKwN63r) |
| 33 | 30 | main | 2026-10-12T10:42:01.095Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2b48837881e718d1e9872888c7cc30a503cae16d2e56bb2943ffc8a619972963) | [Transaction](https://solscan.io/tx/5NNgiEZtxHaQ5dcW29zP4WRA2WH3SnSxK2gEGT9xJTQrF8Q5yzN1XMrPVCCgX4SwH4FYDv7hrec1pthdrrVD9hU4) |
| 35 | 32 | main | 2026-10-12T10:42:01.557Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc31bd4281c60c5d4ffb44f7f453aa19d186693fba74881a70e2fb1d627bd0090) | [Transaction](https://solscan.io/tx/2bxXMv9aKXmrWCPkBcHn7AjbkJsN81PhqASfwDHHEKmdNCUzkyo597iZCK1LFxBCUxg5NGQxpdJ2h3rRNjfr6yef) |
| 52 | 37 | main | 2026-10-12T10:47:01.218Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf4df1987820d8b1a518aea9c5da71eb7e02e92c0d4123fec05d9c5cb315b9fb3) | [Transaction](https://solscan.io/tx/3B8odVtXpWP6a5BbdrSh34tWhE6kcUhi4rkwRxDv8nQe7C9XwuDB7LdUzh2rePji5mNJ92uArzg123TP4nX7Y1B9) |
| 53 | 38 | main | 2026-10-12T10:47:01.294Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x51b36b43a390bf8467ea05bc19e647f55a51221e66d20ccbcbefc1c187cb7215) | [Transaction](https://solscan.io/tx/4WEKJSoTBSi32kgwmcfS1kdqHBB1VyWEygjoabyVGPLjmmAh7feyR2T741NyzEnhKQrXEfrCByMHRqjotH4MpbdR) |
| 54 | 39 | main | 2026-10-12T10:47:01.396Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfa2b69a32f6401948a38e5188c0ca93dfdaa990e638c9913a1b398efcef6b375) | [Transaction](https://solscan.io/tx/5PPevigUfvRm7iRCsxeJBAjQBF2wxPwDSkVBCdFUfnr3BNE3gn5e78cQx7tAnxwywWBsmsphmjRNLNyhZw1azZ1G) |
| 55 | 40 | main | 2026-10-12T10:47:01.493Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x40ed3651e042622e8c1867e03b76c1f9aa632710c28845e34113aa069ca9fe22) | [Transaction](https://solscan.io/tx/2rbVL66zS3qKoxSnFYPBTzkzTHhhHCKznEUAvG2SQK36ZVggJ8mWSbyTRcfm2gh3FTMRt68Br69YWD6jQrcg8eMj) |
| 56 | 41 | main | 2026-10-12T10:47:01.597Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xda9e556dca9cb21fd551f7da1808ed91330fa1a42ef2c8e726598fd075922651) | [Transaction](https://solscan.io/tx/5ALTPh7sNmZKHWTqzbg9cWKMCTCATRLnRDzGdFi6z3CAabermQKkVxfBTorYohnvQwpcsuSF7qTuspGWPTA55rcw) |
| 76 | 45 | main | 2026-10-12T10:49:32.002Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x87508fc47ea4def258c0cf55ec24b9c3f1abdb51b138fdb31438d024809c74eb) | [Transaction](https://solscan.io/tx/5t6bwJVhMkjBAmNJVrxjJsLTgof3rkgkJW57YxExBPCCR7naCRwK6ergj4H7TQ1aSaJegybkiDhezHcNDtdvWpL4) |
| 78 | 47 | main | 2026-10-12T10:49:32.198Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb5451f5f0b57342860de82c3176e68f051c86c93c01bf0f7502117b0ffab6353) | [Transaction](https://solscan.io/tx/4fSYbMNuhAGZCXHmmK5tRG8nsYqncS4XRCzTDayvuHR2r1BGhPKb4J5utQZ3WP9rzLjQaZfVnpVuRtqfbcX1AH4k) |
| 79 | 48 | main | 2026-10-12T10:49:32.300Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbe1055b488e5ff9806f5395f4d1e6cfc53922745069b16bddbc5ce12fe642d98) | [Transaction](https://solscan.io/tx/4dQitDBBWvUgAwv312Cf4bNavcQvf2pj8NNmKwmzcnJrS67ba6RA6abNSA53yL84pRxnarohLB8QrznYqfXaSfsb) |
| 77 | 46 | main | 2026-10-12T10:49:33.159Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2abd46c2eebcf47fe7de5d65fa81a05c0581d52ee9e612c25f3919a5c4fbac85) | [Transaction](https://solscan.io/tx/52vtcJh26F1mBfiVWDe9Rvh5PdqCsiSYZPzzfe5TASK6mwRSHTZFcHJubVAJromzUiqmce3Qpk9uEB6UXXRGZX74) |
| 80 | 49 | main | 2026-10-12T10:49:33.441Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd08e57fab874ce6e63c83fc612fc5caed65959b8a75c110566fbd99547ff426e) | [Transaction](https://solscan.io/tx/34Q6u1oeB7osZ2ovg7WCpdkwpY7qqBftYtdEx6uqbhiAEE3BHVduHtbaiZe3BHjxw7Ft1sacchE6QqtyqWNp3LbE) |
| 100 | 45 | main | 2026-10-12T10:52:02.806Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd1f831b170475888bde10803e428738baddfaafd0fbf0075e3209ac3ad18d065) | [Transaction](https://solscan.io/tx/4VRvAgFTEdZK33jEraJEih2Y4EL2raEXHEnJJ6zgbvKwfWyo199wtuZoVCrfwdpYbnF3DERHdBvx2bswsJ8oPjPw) |
| 104 | 49 | main | 2026-10-12T10:52:02.902Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4737a87348611d423f5d3b816499b121eadf3bca71e20b4222a4305c9747d6c8) | [Transaction](https://solscan.io/tx/4KTnfVeQuDv8RGsaC1smKWvAZa91HShtMd2iQK2eoHqcWACRfyZ4ujDjmvQi6wi2z39uLr7HML3cqT2G1x7Qnzqe) |
| 103 | 48 | main | 2026-10-12T10:52:03.006Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6440d3b17de77833d56286dcead2bb36c3044ff71d3629b2da32b637a60e5139) | [Transaction](https://solscan.io/tx/3mfY9ZcxUfxvC8j7sobbL9RyYuXhSUVQp7rMHC5gWaCuSYc2nEmnWkg5ZitVhwmQQEtDAhyggZECHi8j9qXHbrTr) |
| 101 | 46 | main | 2026-10-12T10:52:03.103Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x69a8e1e24fc82eca0733c7259b03d05a0ad47f5b9302406710331938bf5f6fb0) | [Transaction](https://solscan.io/tx/5WxatmxkSvvzk6DEwKQ5JKV3xfGi9upCjxfarPbNfZ2LXQzVor2jzZ6kKHL44uEEVtgdVRjRpjsTtmorvnCEbKbJ) |
| 108 | 53 | main | 2026-10-12T10:52:03.206Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x090b0eb893e0ceaf9a2f1a75ff371c3909120114df27a38f82330f510e213e54) | [Transaction](https://solscan.io/tx/3GAJuvWZU8mdyUo2GBEyobfqCjZvAt7S4bgDs6USXXNXvQ5Hkjk7d9C2PzQevXy8q3ymj9thbYQ4SbF7pNfoTc8U) |
| — | 29 | cleanup | 2026-10-12T10:52:36.680Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x3a6727e73077124a3b31de5ed74f1a9f85cd51eb63ca0a06d876bcd37f2ce1a0) |  |
| — | 39 | cleanup | 2026-10-12T10:52:50.018Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xeb3beb51c828e625b1a1b9fffe3a3668dc69a8e8079beb01991cbae2e44a0aab) |  |
| — | 45 | cleanup | 2026-10-12T10:53:03.281Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x95fdc7eac58f06976b62aa4aac08aec72478a661e1bae3cefbd0767ddf82866e) |  |
| — | 53 | cleanup | 2026-10-12T10:53:20.457Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x5a8cb4884eb4573235ea4c4bcf34739b2cba938dc5db2a70c1667ff3eb351a94) |  |
| 117 | 62 | main | 2026-10-12T11:00:01.995Z | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x22940472cb3842431673d1a9adbb689f11ac4344f1e68588410ec060a0840b39) | [Transaction](https://solscan.io/tx/3H1HypLxZkV4ihPSPx1WyVxNrpeKceYKh6ReYZGkZzTqbdXbPv5oHEZtCH58PFz3vSouhcVvLBrAe4z3i2NdqRcU) |
| 116 | 61 | main | 2026-10-12T11:00:02.323Z | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa570024c2f5ddfabd2c2e6274014a44c0211fba73a81d04981af571209bba510) | [Transaction](https://solscan.io/tx/5V6aNfTicgnEeJEmSLEgJP6aoyDigBsBiGLHXvx4tTwnavQUxqCdMhvAEQtuetH4xHbyGTBqPwUVBA41Py5VBWvg) |
| 118 | 63 | main | 2026-10-12T11:00:02.374Z | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe416f9042ca1c43971053f680b9921a9dcaddb61e44b86ba3c95bf4be72742a2) | [Transaction](https://solscan.io/tx/3wDLN7AQ4FKpTtCaFw1z3MhGd5UQ9v5fmsp1ctEp7ps8fz47jPUZVnFfK8xBDqRoMr9ZUg9DAFssZ2jK6sVp2x8d) |
| 126 | 71 | main | 2026-10-12T11:00:03.107Z | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9d0710b0b8de914535848259e7b6eb7c415ad1f2f8589ed2836d3bc23c14510b) | [Transaction](https://solscan.io/tx/2H7TejAEo5BPybPFxNdzYh7p441QyweMAkx6iJSTQFzV5MCoPXZgAZNCZeNQNDfazSzpp9bps8gS1sA8rwqSLJM) |
| 127 | 72 | main | 2026-10-12T11:00:03.220Z | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x12e9732f5a7eb054bdfc0bb9a88789bc98444b3bc58e82950729fda1c8a7c92e) | [Transaction](https://solscan.io/tx/NrUvGqgtRhUQN2sGdSMEVcTfdWgN6UsaBUHzqfs1ctnM5Fq6ubGth4sjfHr5vTHYxJcNmkXpkwq6f6XtchyGhUy) |
| 153 | 98 | main | 2026-10-12T11:00:08.951Z | SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2589a7336099e0774d3978c5ea1fa839e4e33033daa6171bb11f1046b26a686f) | [Transaction](https://solscan.io/tx/Jj6RR4imJd5JV7MbF3sHoa5jYKiYyDHE2X2WkdgsdaEbRuCPjSRUpNy8zayeL2fXkTv1uTgCwM7ZcjdPQyJC55F) |
| — | 61 | cleanup | 2026-10-12T11:00:34.124Z | 9cRCn9 → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x9c1948db87e04438fbdc83ddf4dfb60fa9213d430eb2ce8ebb53931063f59d59) |  |
| — | 71 | cleanup | 2026-10-12T11:00:52.834Z | Xsc9qv → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xa92fdcd1ce7d3299ea56d4fecc32a6a1f5574ae141347748dc2946930b313070) |  |

</details>

<details>
<summary>All placement and quote errors (unsupported fee rows excluded)</summary>

| Row | Trader | Step | Stage | Time | Exact error |
| --- | --- | --- | --- | --- | --- |
| 3 | 3 | main | quote | 2026-10-12T09:45:00.592Z | 404 Not Found: NoLiquidity: no route found |
| 10 | 7 | main | quote | 2026-10-12T10:28:29.907Z | 404 Not Found: NoLiquidity: no route found |
| 11 | 8 | main | quote | 2026-10-12T10:28:30.199Z | 404 Not Found: NoLiquidity: no route found |
| 12 | 9 | main | quote | 2026-10-12T10:28:30.410Z | 404 Not Found: NoLiquidity: no route found |
| 13 | 10 | main | quote | 2026-10-12T10:28:30.541Z | 404 Not Found: NoLiquidity: no route found |
| 14 | 11 | main | quote | 2026-10-12T10:28:30.720Z | 404 Not Found: NoLiquidity: no route found |
| 16 | 13 | main | quote | 2026-10-12T10:28:31.107Z | 404 Not Found: NoLiquidity: no route found |
| 17 | 14 | main | quote | 2026-10-12T10:28:31.405Z | 404 Not Found: NoLiquidity: no route found |
| 18 | 15 | main | quote | 2026-10-12T10:28:31.625Z | 404 Not Found: NoLiquidity: no route found |
| 19 | 16 | main | quote | 2026-10-12T10:28:31.740Z | 404 Not Found: NoLiquidity: no route found |
| 20 | 17 | main | quote | 2026-10-12T10:28:32.105Z | 404 Not Found: NoLiquidity: no route found |
| 21 | 18 | main | quote | 2026-10-12T10:28:32.243Z | 404 Not Found: NoLiquidity: no route found |
| 22 | 19 | main | quote | 2026-10-12T10:28:32.319Z | 404 Not Found: NoLiquidity: no route found |
| 23 | 20 | main | quote | 2026-10-12T10:28:32.517Z | 404 Not Found: NoLiquidity: no route found |
| 24 | 21 | main | quote | 2026-10-12T10:28:32.796Z | 404 Not Found: NoLiquidity: no route found |
| 25 | 22 | main | quote | 2026-10-12T10:28:33.027Z | 404 Not Found: NoLiquidity: no route found |
| 26 | 23 | main | quote | 2026-10-12T10:28:33.110Z | 404 Not Found: NoLiquidity: no route found |
| 27 | 24 | main | quote | 2026-10-12T10:28:33.416Z | 404 Not Found: NoLiquidity: no route found |
| 28 | 25 | main | quote | 2026-10-12T10:28:33.506Z | 404 Not Found: NoLiquidity: no route found |
| 29 | 26 | main | quote | 2026-10-12T10:28:33.722Z | 404 Not Found: NoLiquidity: no route found |
| 30 | 27 | main | quote | 2026-10-12T10:28:33.905Z | 404 Not Found: NoLiquidity: no route found |
| 31 | 28 | main | quote | 2026-10-12T10:28:34.234Z | 404 Not Found: NoLiquidity: no route found |
| — | 22 | cleanup | quote | 2026-10-12T10:30:05.081Z | 404 Not Found: NoLiquidity: no route found |
| 34 | 31 | main | quote | 2026-10-12T10:42:05.365Z | 404 Not Found: NoLiquidity: no route found |
| 40 | 33 | main | quote | 2026-10-12T10:44:29.019Z | 404 Not Found: NoLiquidity: no route found |
| 41 | 34 | main | quote | 2026-10-12T10:44:29.142Z | 404 Not Found: NoLiquidity: no route found |
| 42 | 35 | main | quote | 2026-10-12T10:44:29.203Z | 404 Not Found: NoLiquidity: no route found |
| 43 | 36 | main | quote | 2026-10-12T10:44:29.477Z | 404 Not Found: NoLiquidity: no route found |
| 38 | 31 | main | quote | 2026-10-12T10:44:29.695Z | 404 Not Found: NoLiquidity: no route found |
| 37 | 30 | main | quote | 2026-10-12T10:44:29.912Z | 404 Not Found: NoLiquidity: no route found |
| 36 | 29 | main | quote | 2026-10-12T10:44:30.056Z | 404 Not Found: NoLiquidity: no route found |
| 39 | 32 | main | quote | 2026-10-12T10:44:30.292Z | 404 Not Found: NoLiquidity: no route found |
| 57 | 42 | main | quote | 2026-10-12T10:46:59.790Z | 404 Not Found: NoLiquidity: no route found |
| 58 | 43 | main | quote | 2026-10-12T10:46:59.980Z | 404 Not Found: NoLiquidity: no route found |
| 59 | 44 | main | quote | 2026-10-12T10:47:00.098Z | 404 Not Found: NoLiquidity: no route found |
| 48 | 33 | main | quote | 2026-10-12T10:47:00.286Z | 404 Not Found: NoLiquidity: no route found |
| 49 | 34 | main | quote | 2026-10-12T10:47:00.711Z | 404 Not Found: NoLiquidity: no route found |
| 50 | 35 | main | quote | 2026-10-12T10:47:01.271Z | 404 Not Found: NoLiquidity: no route found |
| 51 | 36 | main | quote | 2026-10-12T10:47:01.296Z | 404 Not Found: NoLiquidity: no route found |
| 46 | 31 | main | quote | 2026-10-12T10:47:01.430Z | 404 Not Found: NoLiquidity: no route found |
| 44 | 29 | main | quote | 2026-10-12T10:47:01.495Z | 404 Not Found: NoLiquidity: no route found |
| 47 | 32 | main | quote | 2026-10-12T10:47:01.659Z | 404 Not Found: NoLiquidity: no route found |
| 45 | 30 | main | quote | 2026-10-12T10:47:01.810Z | 404 Not Found: NoLiquidity: no route found |
| 81 | 50 | main | quote | 2026-10-12T10:49:29.795Z | 404 Not Found: NoLiquidity: no route found |
| 82 | 51 | main | quote | 2026-10-12T10:49:30.151Z | 404 Not Found: NoLiquidity: no route found |
| 83 | 52 | main | quote | 2026-10-12T10:49:30.281Z | 404 Not Found: NoLiquidity: no route found |
| 73 | 42 | main | quote | 2026-10-12T10:49:30.410Z | 404 Not Found: NoLiquidity: no route found |
| 74 | 43 | main | quote | 2026-10-12T10:49:30.643Z | 404 Not Found: NoLiquidity: no route found |
| 75 | 44 | main | quote | 2026-10-12T10:49:30.794Z | 404 Not Found: NoLiquidity: no route found |
| 64 | 33 | main | quote | 2026-10-12T10:49:31.116Z | 404 Not Found: NoLiquidity: no route found |
| 65 | 34 | main | quote | 2026-10-12T10:49:31.276Z | 404 Not Found: NoLiquidity: no route found |
| 66 | 35 | main | quote | 2026-10-12T10:49:31.509Z | 404 Not Found: NoLiquidity: no route found |
| 62 | 31 | main | quote | 2026-10-12T10:49:31.627Z | 404 Not Found: NoLiquidity: no route found |
| 60 | 29 | main | quote | 2026-10-12T10:49:31.789Z | 404 Not Found: NoLiquidity: no route found |
| 63 | 32 | main | quote | 2026-10-12T10:49:32.093Z | 404 Not Found: NoLiquidity: no route found |
| 61 | 30 | main | quote | 2026-10-12T10:49:32.276Z | 404 Not Found: NoLiquidity: no route found |
| 71 | 40 | main | quote | 2026-10-12T10:49:32.398Z | 404 Not Found: NoLiquidity: no route found |
| 69 | 38 | main | quote | 2026-10-12T10:49:32.596Z | 404 Not Found: NoLiquidity: no route found |
| 70 | 39 | main | quote | 2026-10-12T10:49:32.905Z | 404 Not Found: NoLiquidity: no route found |
| 68 | 37 | main | quote | 2026-10-12T10:49:33.102Z | 404 Not Found: NoLiquidity: no route found |
| 72 | 41 | main | quote | 2026-10-12T10:49:33.280Z | 404 Not Found: NoLiquidity: no route found |
| 67 | 36 | main | quote | 2026-10-12T10:49:33.423Z | 404 Not Found: NoLiquidity: no route found |
| 109 | 54 | main | quote | 2026-10-12T10:51:59.686Z | 404 Not Found: NoLiquidity: no route found |
| 110 | 55 | main | quote | 2026-10-12T10:52:00.106Z | 404 Not Found: NoLiquidity: no route found |
| 111 | 56 | main | quote | 2026-10-12T10:52:00.218Z | 404 Not Found: NoLiquidity: no route found |
| 112 | 57 | main | quote | 2026-10-12T10:52:00.340Z | 404 Not Found: NoLiquidity: no route found |
| 113 | 58 | main | quote | 2026-10-12T10:52:00.582Z | 404 Not Found: NoLiquidity: no route found |
| 114 | 59 | main | quote | 2026-10-12T10:52:00.698Z | 404 Not Found: NoLiquidity: no route found |
| 115 | 60 | main | quote | 2026-10-12T10:52:01.012Z | 404 Not Found: NoLiquidity: no route found |
| 105 | 50 | main | quote | 2026-10-12T10:52:01.266Z | 404 Not Found: NoLiquidity: no route found |
| 106 | 51 | main | quote | 2026-10-12T10:52:01.365Z | 404 Not Found: NoLiquidity: no route found |
| 107 | 52 | main | quote | 2026-10-12T10:52:01.594Z | 404 Not Found: NoLiquidity: no route found |
| 97 | 42 | main | quote | 2026-10-12T10:52:01.792Z | 404 Not Found: NoLiquidity: no route found |
| 99 | 44 | main | quote | 2026-10-12T10:52:02.298Z | 404 Not Found: NoLiquidity: no route found |
| 98 | 43 | main | quote | 2026-10-12T10:52:02.300Z | 404 Not Found: NoLiquidity: no route found |
| 88 | 33 | main | quote | 2026-10-12T10:52:02.368Z | 404 Not Found: NoLiquidity: no route found |
| 89 | 34 | main | quote | 2026-10-12T10:52:02.591Z | 404 Not Found: NoLiquidity: no route found |
| 90 | 35 | main | quote | 2026-10-12T10:52:02.933Z | 404 Not Found: NoLiquidity: no route found |
| 86 | 31 | main | quote | 2026-10-12T10:52:02.949Z | 404 Not Found: NoLiquidity: no route found |
| 84 | 29 | main | quote | 2026-10-12T10:52:03.192Z | 404 Not Found: NoLiquidity: no route found |
| 87 | 32 | main | quote | 2026-10-12T10:52:03.296Z | 404 Not Found: NoLiquidity: no route found |
| 85 | 30 | main | quote | 2026-10-12T10:52:03.605Z | 404 Not Found: NoLiquidity: no route found |
| 95 | 40 | main | quote | 2026-10-12T10:52:03.723Z | 404 Not Found: NoLiquidity: no route found |
| 93 | 38 | main | quote | 2026-10-12T10:52:04.014Z | 404 Not Found: NoLiquidity: no route found |
| 94 | 39 | main | quote | 2026-10-12T10:52:04.108Z | 404 Not Found: NoLiquidity: no route found |
| 92 | 37 | main | quote | 2026-10-12T10:52:04.327Z | 404 Not Found: NoLiquidity: no route found |
| 96 | 41 | main | quote | 2026-10-12T10:52:04.612Z | 404 Not Found: NoLiquidity: no route found |
| 91 | 36 | main | quote | 2026-10-12T10:52:04.817Z | 404 Not Found: NoLiquidity: no route found |
| 102 | 47 | main | quote | 2026-10-12T10:52:05.141Z | 404 Not Found: NoLiquidity: no route found |
| — | 30 | cleanup | quote | 2026-10-12T10:52:36.456Z | 404 Not Found: NoLiquidity: no route found |
| — | 32 | cleanup | quote | 2026-10-12T10:52:38.301Z | 404 Not Found: NoLiquidity: no route found |
| — | 40 | cleanup | quote | 2026-10-12T10:52:49.046Z | 404 Not Found: NoLiquidity: no route found |
| — | 46 | cleanup | quote | 2026-10-12T10:53:00.884Z | 404 Not Found: NoLiquidity: no route found |
| 119 | 64 | main | quote | 2026-10-12T10:59:58.248Z | 404 Not Found: NoLiquidity: no route found |
| 120 | 65 | main | quote | 2026-10-12T10:59:58.483Z | 404 Not Found: NoLiquidity: no route found |
| 121 | 66 | main | quote | 2026-10-12T10:59:58.690Z | 404 Not Found: NoLiquidity: no route found |
| 122 | 67 | main | quote | 2026-10-12T10:59:58.904Z | 404 Not Found: NoLiquidity: no route found |
| 123 | 68 | main | quote | 2026-10-12T10:59:59.096Z | 404 Not Found: NoLiquidity: no route found |
| 124 | 69 | main | quote | 2026-10-12T10:59:59.498Z | 404 Not Found: NoLiquidity: no route found |
| 125 | 70 | main | quote | 2026-10-12T10:59:59.613Z | 404 Not Found: NoLiquidity: no route found |
| 128 | 73 | main | quote | 2026-10-12T11:00:00.661Z | 404 Not Found: NoLiquidity: no route found |
| 129 | 74 | main | quote | 2026-10-12T11:00:00.810Z | 404 Not Found: NoLiquidity: no route found |
| 130 | 75 | main | quote | 2026-10-12T11:00:01.304Z | 404 Not Found: NoLiquidity: no route found |
| 134 | 79 | main | quote | 2026-10-12T11:00:02.503Z | 404 Not Found: NoLiquidity: no route found |
| 135 | 80 | main | quote | 2026-10-12T11:00:03.201Z | 404 Not Found: NoLiquidity: no route found |
| 136 | 81 | main | quote | 2026-10-12T11:00:03.241Z | 404 Not Found: NoLiquidity: no route found |
| 137 | 82 | main | quote | 2026-10-12T11:00:03.286Z | 404 Not Found: NoLiquidity: no route found |
| 138 | 83 | main | quote | 2026-10-12T11:00:03.689Z | 404 Not Found: NoLiquidity: no route found |
| 139 | 84 | main | quote | 2026-10-12T11:00:03.692Z | 404 Not Found: NoLiquidity: no route found |
| 141 | 86 | main | quote | 2026-10-12T11:00:04.158Z | 404 Not Found: NoLiquidity: no route found |
| 140 | 85 | main | quote | 2026-10-12T11:00:04.199Z | 404 Not Found: NoLiquidity: no route found |
| 142 | 87 | main | quote | 2026-10-12T11:00:04.508Z | 404 Not Found: NoLiquidity: no route found |
| 143 | 88 | main | quote | 2026-10-12T11:00:05.066Z | 404 Not Found: NoLiquidity: no route found |
| 144 | 89 | main | quote | 2026-10-12T11:00:05.322Z | 404 Not Found: NoLiquidity: no route found |
| 145 | 90 | main | quote | 2026-10-12T11:00:05.606Z | 404 Not Found: NoLiquidity: no route found |
| 147 | 92 | main | quote | 2026-10-12T11:00:05.725Z | 404 Not Found: NoLiquidity: no route found |
| 146 | 91 | main | quote | 2026-10-12T11:00:05.741Z | 404 Not Found: NoLiquidity: no route found |
| 148 | 93 | main | quote | 2026-10-12T11:00:06.102Z | 404 Not Found: NoLiquidity: no route found |
| 149 | 94 | main | quote | 2026-10-12T11:00:06.228Z | 404 Not Found: NoLiquidity: no route found |
| 151 | 96 | main | quote | 2026-10-12T11:00:06.599Z | 404 Not Found: NoLiquidity: no route found |
| 150 | 95 | main | quote | 2026-10-12T11:00:06.740Z | 404 Not Found: NoLiquidity: no route found |
| 152 | 97 | main | quote | 2026-10-12T11:00:07.213Z | 404 Not Found: NoLiquidity: no route found |
| 155 | 100 | main | quote | 2026-10-12T11:00:07.567Z | 404 Not Found: NoLiquidity: no route found |
| 154 | 99 | main | quote | 2026-10-12T11:00:07.575Z | 404 Not Found: NoLiquidity: no route found |
| — | 72 | cleanup | quote | 2026-10-12T11:00:50.417Z | 404 Not Found: NoLiquidity: no route found |
| — | 98 | cleanup | quote | 2026-10-12T11:01:13.481Z | 404 Not Found: NoLiquidity: no route found |

</details>

<details>
<summary>Cleanup exceptions and remaining balances</summary>

| Trader | Time | Evidence |
| --- | --- | --- |
| 2 | 2026-10-12T09:46:46.360Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.806703 Es9vMF…", "1.006755 EPjFWd…", "1.56218 JUPyiw…"], "leftover": [], "closedAccounts": 4, "reclaimed": 2, "swept": "65710569"} |
| 3 | 2026-10-12T09:46:47.123Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.031907 JUPyiw…", "0.25 EPjFWd…"], "leftover": [], "closedAccounts": 3, "reclaimed": 3, "swept": "69114715"} |
| 1 | 2026-10-12T09:50:27.260Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.806183 EPjFWd…"], "closedAccounts": 1, "reclaimed": 3, "swept": "61233452"} |
| 1 | 2026-10-12T10:14:43.066Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.806183 EPjFWd…"], "closedAccounts": 0, "reclaimed": 1, "swept": "69980000"} |
| 7 | 2026-10-12T10:29:46.723Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.391632 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 5 | 2026-10-12T10:29:47.226Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.563767 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "63491560"} |
| 6 | 2026-10-12T10:29:49.276Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.563837 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "63491560"} |
| 12 | 2026-10-12T10:30:01.202Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.563667 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "63491560"} |
| 19 | 2026-10-12T10:30:02.399Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.391162 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 22 | 2026-10-12T10:30:12.750Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.334926 EPjFWd…"], "closedAccounts": 0, "reclaimed": 0, "swept": "69995000"} |
| 4 | 2026-10-12T10:33:27.070Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.563852 JUPyiw…"], "closedAccounts": 1, "reclaimed": 2, "swept": "63481560"} |
| 37 | 2026-10-12T10:52:50.514Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.27916 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "65991560"} |
| 38 | 2026-10-12T10:52:57.001Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.335076 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "65491560"} |
| 30 | 2026-10-12T10:52:57.385Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.334393 EPjFWd…"], "closedAccounts": 1, "reclaimed": 1, "swept": "65491560"} |
| 32 | 2026-10-12T10:53:00.929Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.892886 EPjFWd…"], "closedAccounts": 1, "reclaimed": 1, "swept": "65980000"} |
| 41 | 2026-10-12T10:53:03.777Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.27923 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "65991560"} |
| 40 | 2026-10-12T10:53:10.140Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.446731 EPjFWd…"], "closedAccounts": 1, "reclaimed": 1, "swept": "64491560"} |
| 48 | 2026-10-12T10:53:16.515Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.892598 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 2, "swept": "60486560"} |
| 47 | 2026-10-12T10:53:17.117Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.390678 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "64991560"} |
| 49 | 2026-10-12T10:53:17.816Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.557829 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 2, "swept": "63486560"} |
| 46 | 2026-10-12T10:53:20.169Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.669426 EPjFWd…"], "closedAccounts": 1, "reclaimed": 2, "swept": "62486560"} |
| 29 | 2026-10-12T10:56:19.638Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.278663 EPjFWd…"], "closedAccounts": 1, "reclaimed": 2, "swept": "65981560"} |
| 39 | 2026-10-12T10:56:32.315Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.390854 EPjFWd…"], "closedAccounts": 1, "reclaimed": 2, "swept": "64981560"} |
| 45 | 2026-10-12T10:56:46.514Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.557832 EPjFWd…"], "closedAccounts": 1, "reclaimed": 3, "swept": "63476560"} |
| 53 | 2026-10-12T10:57:03.338Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.278806 EPjFWd…"], "closedAccounts": 1, "reclaimed": 2, "swept": "65981560"} |
| 62 | 2026-10-12T11:00:41.316Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["210.803664 98kfF7… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "59985000"} |
| 63 | 2026-10-12T11:00:42.117Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.114216 2u1tsz… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "59985000"} |
| 72 | 2026-10-12T11:01:07.157Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.001098 MUxEsU…"], "closedAccounts": 1, "reclaimed": 1, "swept": "58420440"} |
| 98 | 2026-10-12T11:01:20.593Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["590.911382 ukHH6c…"], "closedAccounts": 1, "reclaimed": 1, "swept": "63491560"} |
| 61 | 2026-10-12T11:04:16.681Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["7.914514 9cRCn9…"], "closedAccounts": 1, "reclaimed": 2, "swept": "59975000"} |
| 71 | 2026-10-12T11:04:34.651Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.00484461 Xsc9qv…"], "closedAccounts": 1, "reclaimed": 2, "swept": "59975000"} |

</details>

## Detailed investigation from the saved report

The following is the original checked investigation, with unsupported fee-token table rows removed. Its historical summaries and comparisons may quote the original raw schedule. Use the adjusted performance and scenario results above for current scoring. Exact errors, ownership caveats and order links are retained.

<details>
<summary>Saved investigation, errors and transaction evidence</summary>

# Paradox solver test report

12 October 2026 · Staging · 09:43–11:06 UTC

**TLDR:** Only 33/170 planned trades completed, though every placed main order filled. Most trades couldn't get a quote, so we still don't know how much load Paradox can handle or which tokens work reliably. Next, check the quote failures with Paradox and finish cleanup: 28 wallets still have tokens left.

134 trades returned `NoLiquidity` and 3 hit known protocol restrictions before placement. Totals exclude 2 acquisition orders and 9 cancelled cleanup orders; all 4 scenarios finished.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Incomplete; 5/6 trades filled | Paradox + CoW: inspect the failed JUP → USDC quote and fee handling. |
| 2. 25 same direction sells | Throughput inconclusive; 4/25 filled | Paradox + CoW: investigate 21 quote failures before increasing load. |
| 3. Sell bursts | Throughput inconclusive; 18/84 filled | Paradox + CoW: stabilize quoting, then measure sustained throughput. |
| 4. Token coverage | Partial; 6/55 planned trades filled; 0 exact buys | Paradox + CoW: check exact output quotes and fresh LST routes. |

## 1. Standard pairs

**Basic swaps were only partly validated.** SOL/USDC and SOL/USDT worked, but the JUP → USDC sell failed quoting.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 5. **Median / longest fill:** 6.5 / 10.1 seconds. All 5 placed main orders filled; each settled separately.

Setup: 6 trades, 30 seconds apart: self paid SOL → USDC, SOL → USDT and JUP → USDC sells, followed by sponsored exact buys of 0.25 USDC, 0.25 USDT and 0.25 USDC paying JUP. The simulator acquired JUP in 2 additional orders; these are excluded from main-order totals.

Times are UTC. Successful examples use placement time; failures use the first recorded failed attempt. Fill times measure placement to observed fill and include polling delay. Total transactions means distinct successful settlements of main scenario orders, excluding funding, creation, acquisitions, failed attempts and cleanup. Composite row numbers and saved trader IDs are used below.

**Ownership unknown:** the API returned `404 Not Found: NoLiquidity: no route found` before placement. Backend records confirm the Paradox driver returned `QuotingFailed: no valid quote found`; they do not expose the underlying solver or Jupiter response. This error does not prove that a token has no DEX liquidity.

Row 3 acquired JUP successfully, then its 0.5 JUP → USDC sell quote failed. Row 6 later completed a 0.25 USDC exact buy paying JUP. The pair and direction are the same, but the order kind and amount differ; compare those quote requests.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 09:43:47.496 | Sell 0.005 SOL → USDC | None; filled in 6.2 seconds. | [Debug](https://debug.barn.cow.fi/order/0x0bb7c64933550cd366e194e2536cec2212719f65ed72f0d93c0003472d891e71) |
| 4 / 1 | 09:45:17.105 | Buy SOL → exactly 0.25 USDC | None; filled in 7.1 seconds. | [Debug](https://debug.barn.cow.fi/order/0xb3dfd9b2525adfdf6ad8c980e4a195863c04e441a7f5e09566609e07fb2f9707) |
| 6 / 3 | 09:46:33.168 | Buy JUP → exactly 0.25 USDC | None; filled in 6.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x847e2b61cadadbb1e4f3555a9c096e3c4171e49523a9c04ff6c6dc62e0f86f35) |
| 3 / 3 | 09:45:00.592 | Sell 0.5 JUP → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |

**Deferred cleanup**

1 wallet had recorded token leftovers when cleanup was deferred. Both USDC → SOL cleanup orders received 43 fee rejections each: output fell below the order minimum after the solver fee. The rejection is confirmed; **ownership unknown** between the proposed solution and driver fee handling.

Initial cleanup also burned 5 token balances listed below. A failed quote could trigger burning in the simulator version used at that point; 4 no-valid-quote responses were recorded nearby, but the journal does not identify each token’s quote decision. The simulator safety fix now preserves tokens after every failed quote; already burned tokens cannot be recovered.

For unplaced cleanup balances without a separate error event, the timestamp is the first cleanup summary recording the failure. Balances are the saved end-of-test records, not a fresh wallet scan; they may include holdings from earlier sessions.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 1 | 09:46:45.987 | Sell 0.806183 USDC → SOL | 43 solutions rejected: `undercuts its limit price after the solver fee`. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0xe0fed7fbf0819f75c7d96387f3c849754b90de5c2825a1e92cf0f053a5dfe0cb) |
| — / 1 | 10:11:01.256 | Sell 0.806183 USDC → SOL | 43 solutions rejected: `undercuts its limit price after the solver fee`. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x4739838071cdd9bc9aaf8c7f474e64d3ba350603c508e52fc5adb961cd406617) |
| — / 2 | 09:46:43.163 | 0.806703 USDT balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/2PpKAMttQ9bUGbpkMKAXDq1p7ZF2wiwiLetoCaiKG9vfJrYvMGdXmnZAZjLU9xeK41N7U1sumkYYaMwf6cenn5hw) |
| — / 2 | 09:46:43.163 | 1.006755 USDC balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/2PpKAMttQ9bUGbpkMKAXDq1p7ZF2wiwiLetoCaiKG9vfJrYvMGdXmnZAZjLU9xeK41N7U1sumkYYaMwf6cenn5hw) |
| — / 2 | 09:46:43.163 | 1.56218 JUP balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/2PpKAMttQ9bUGbpkMKAXDq1p7ZF2wiwiLetoCaiKG9vfJrYvMGdXmnZAZjLU9xeK41N7U1sumkYYaMwf6cenn5hw) |
| — / 3 | 09:46:44.061 | 0.031907 JUP balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/349SB2ZeTtnY2eb5akHo3fepp7HWTZ2stSBhUWt62e8gPkgcJSMD6ggqpkvo97cPddToYM1zdKpaNZ1DfTSUVo6w) |
| — / 3 | 09:46:44.061 | 0.25 USDC balance | Simulator cleanup burned this balance. Per-token quote decision was not recorded; it cannot be recovered. | [Transaction](https://solscan.io/tx/349SB2ZeTtnY2eb5akHo3fepp7HWTZ2stSBhUWt62e8gPkgcJSMD6ggqpkvo97cPddToYM1zdKpaNZ1DfTSUVo6w) |

</details>

## 2. 25 same direction sells

**Same direction throughput is inconclusive.** Only 4 orders reached settlement because 21 failed quoting; all 4 settled individually, as expected for Paradox.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 4. **Median / longest fill:** 19.1 / 66.7 seconds. All 4 placed main orders filled; each settled separately.

Setup: 25 self paid sells of 0.005 SOL → JUP submitted together. Batching is a known and accepted missing feature in Paradox; the useful check here was whether same-direction order flow could quote and settle reliably.

**Ownership unknown:** the API returned `404 Not Found: NoLiquidity: no route found` before placement. Backend records confirm the Paradox driver returned `QuotingFailed: no valid quote found`; they do not expose the underlying solver or Jupiter response. This error does not prove that a token has no DEX liquidity.

All 4 placed orders filled in separate transactions; no batch was observed. [Example settlement](https://solscan.io/tx/31MM986ieFHuQtGF5wV6upwQ4jRTuAMmYWDBFV7chuCCA8huKq9mQKczcfXTeShJZcfb8Uvca7wgbKor6dbPbfUg). One route passed driver simulation but failed on chain at Jupiter’s minimum output check; a later attempt filled the order. Check route freshness and the minimum output used at submission.

The deadline warning followed that failed submission; it does not establish a late solver response.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 10:28:33.563 | Sell 0.005 SOL → JUP | None; filled in 21.9 seconds. | [Debug](https://debug.barn.cow.fi/order/0xa744e39777360deaf6b7d0bfced74b200b2f8dad34e78f143b95607c61f334fe) |
| 8 / 5 | 10:28:33.663 | Sell 0.005 SOL → JUP | None; filled in 9.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x97c95937108e2c2aca597852779e182e5b0d7eff824f188a3ea5e3c5e8aadd19) |
| 9 / 6 | 10:28:33.762 | Sell 0.005 SOL → JUP | None; filled in 16.2 seconds. | [Debug](https://debug.barn.cow.fi/order/0x46ac573090da74c3d5954ce26e35ad1e7c4ffc96b33454b636475d72c0478319) |
| 10 / 7 | 10:28:29.907 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 11 / 8 | 10:28:30.199 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 12 / 9 | 10:28:30.410 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 13 / 10 | 10:28:30.541 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 14 / 11 | 10:28:30.720 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 16 / 13 | 10:28:31.107 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 17 / 14 | 10:28:31.405 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 18 / 15 | 10:28:31.625 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 19 / 16 | 10:28:31.740 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 20 / 17 | 10:28:32.105 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 21 / 18 | 10:28:32.243 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 22 / 19 | 10:28:32.319 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 23 / 20 | 10:28:32.517 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 24 / 21 | 10:28:32.796 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 25 / 22 | 10:28:33.027 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 26 / 23 | 10:28:33.110 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 27 / 24 | 10:28:33.416 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 28 / 25 | 10:28:33.506 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 29 / 26 | 10:28:33.722 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 30 / 27 | 10:28:33.905 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 31 / 28 | 10:28:34.234 | Sell 0.005 SOL → JUP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 15 / 12 | 10:28:58.499 | Sell 0.005 SOL → JUP | Filled later. `FailedToSubmit`: Jupiter `6001 SlippageToleranceExceeded` at instruction 6. Driver simulation passed; execution failed on chain. [Failed transaction](https://solscan.io/tx/tshHzsQqRLneTzaGMYL597PVSQsfHAeWSRGL4rWNrFz6xUbJt68J9ETkQXy97THWNVy8rks2wcWNWwTPCKXf1nB). | [Debug](https://debug.barn.cow.fi/order/0xd6ae31d69256b8eee069437121d53f8ec2bb49cb6be24de5ab105818d4c7e1a6) |

**Deferred cleanup**

7 wallets had recorded token leftovers when cleanup was deferred. During this cleanup window, 34 candidate solutions failed simulation with SPL Token `InvalidAccountData` at instruction 6. Logs omit their order IDs, so these failures cannot be assigned to individual cleanup orders; **ownership unknown**. Check native SOL output and token account setup with the driver team.

For unplaced cleanup balances without a separate error event, the timestamp is the first cleanup summary recording the failure. Balances are the saved end-of-test records, not a fresh wallet scan; they may include holdings from earlier sessions.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 4 | 10:33:22.164 | Sell 1.563852 JUP → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x6f2414d1917f5128dbf23ef9d37fbe16a27ea1da91785876cf4a505bba44b5a5) |
| — / 5 | 10:29:47.226 | Sell 1.563767 JUP → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 6 | 10:29:49.276 | Sell 1.563837 JUP → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 7 | 10:29:46.723 | Sell 0.391632 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 12 | 10:30:01.202 | Sell 1.563667 JUP → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 19 | 10:30:02.399 | Sell 0.391162 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 22 | 10:30:05.081 | Sell 0.334926 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |

</details>

## 3. Sell bursts

**The throughput ceiling is inconclusive.** Quote failures prevented most orders from entering auctions, including every order in the 8-order wave.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 18. **Median / longest fill:** 23.6 / 44.4 seconds. All 18 placed main orders filled; each settled separately.

Setup: Self paid SOL → USDC sells in waves of 4, 8, 16, 24 and 32, 150 seconds apart. Inputs were 0.0025–0.004 SOL; 84 scheduled trades in total.

**Ownership unknown:** the API returned `404 Not Found: NoLiquidity: no route found` before placement. Backend records confirm the Paradox driver returned `QuotingFailed: no valid quote found`; they do not expose the underlying solver or Jupiter response. This error does not prove that a token has no DEX liquidity.

| Wave size | Filled / scheduled | Last observed fill after wave started |
| --- | --- | --- |
| 4 | 3/4 | 25.3 seconds |
| 8 | 0/8 | No fills |
| 16 | 5/16 | 34.9 seconds |
| 24 | 5/24 | 49.3 seconds |
| 32 | 5/32 | 35.8 seconds |

The 8-order wave failed entirely, while later larger waves filled some orders. That pattern points to quote reliability, not a demonstrated settlement capacity limit. Pauses and pre-placement failures prevent a sustained orders-per-minute claim.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 10:42:01.024 | Sell 0.0025 SOL → USDC | None; filled in 19.8 seconds. | [Debug](https://debug.barn.cow.fi/order/0x3de93a3216ea57e2315b6153c64368f8d03265d4212fe6cef535f5c45049d656) |
| 33 / 30 | 10:42:01.095 | Sell 0.003 SOL → USDC | None; filled in 12.7 seconds. | [Debug](https://debug.barn.cow.fi/order/0x2b48837881e718d1e9872888c7cc30a503cae16d2e56bb2943ffc8a619972963) |
| 35 / 32 | 10:42:01.557 | Sell 0.004 SOL → USDC | None; filled in 22.4 seconds. | [Debug](https://debug.barn.cow.fi/order/0xc31bd4281c60c5d4ffb44f7f453aa19d186693fba74881a70e2fb1d627bd0090) |
| 34 / 31 | 10:42:05.365 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 36 / 29 | 10:44:30.056 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 37 / 30 | 10:44:29.912 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 38 / 31 | 10:44:29.695 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 39 / 32 | 10:44:30.292 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 40 / 33 | 10:44:29.019 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 41 / 34 | 10:44:29.142 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 42 / 35 | 10:44:29.203 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 43 / 36 | 10:44:29.477 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 44 / 29 | 10:47:01.495 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 45 / 30 | 10:47:01.810 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 46 / 31 | 10:47:01.430 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 47 / 32 | 10:47:01.659 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 48 / 33 | 10:47:00.286 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 49 / 34 | 10:47:00.711 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 50 / 35 | 10:47:01.271 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 51 / 36 | 10:47:01.296 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 57 / 42 | 10:46:59.790 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 58 / 43 | 10:46:59.980 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 59 / 44 | 10:47:00.098 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 60 / 29 | 10:49:31.789 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 61 / 30 | 10:49:32.276 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 62 / 31 | 10:49:31.627 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 63 / 32 | 10:49:32.093 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 64 / 33 | 10:49:31.116 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 65 / 34 | 10:49:31.276 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 66 / 35 | 10:49:31.509 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 67 / 36 | 10:49:33.423 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 68 / 37 | 10:49:33.102 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 69 / 38 | 10:49:32.596 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 70 / 39 | 10:49:32.905 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 71 / 40 | 10:49:32.398 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 72 / 41 | 10:49:33.280 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 73 / 42 | 10:49:30.410 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 74 / 43 | 10:49:30.643 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 75 / 44 | 10:49:30.794 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 81 / 50 | 10:49:29.795 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 82 / 51 | 10:49:30.151 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 83 / 52 | 10:49:30.281 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 84 / 29 | 10:52:03.192 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 85 / 30 | 10:52:03.605 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 86 / 31 | 10:52:02.949 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 87 / 32 | 10:52:03.296 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 88 / 33 | 10:52:02.368 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 89 / 34 | 10:52:02.591 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 90 / 35 | 10:52:02.933 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 91 / 36 | 10:52:04.817 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 92 / 37 | 10:52:04.327 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 93 / 38 | 10:52:04.014 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 94 / 39 | 10:52:04.108 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 95 / 40 | 10:52:03.723 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 96 / 41 | 10:52:04.612 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 97 / 42 | 10:52:01.792 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 98 / 43 | 10:52:02.300 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 99 / 44 | 10:52:02.298 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 102 / 47 | 10:52:05.141 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 105 / 50 | 10:52:01.266 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 106 / 51 | 10:52:01.365 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 107 / 52 | 10:52:01.594 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 109 / 54 | 10:51:59.686 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 110 / 55 | 10:52:00.106 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 111 / 56 | 10:52:00.218 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 112 / 57 | 10:52:00.340 | Sell 0.0025 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 113 / 58 | 10:52:00.582 | Sell 0.003 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 114 / 59 | 10:52:00.698 | Sell 0.0035 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 115 / 60 | 10:52:01.012 | Sell 0.004 SOL → USDC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 78 / 47 | 10:49:42.631 | Sell 0.0035 SOL → USDC | Filled later. `PriorityFeeTooHigh`: `transaction priority fee exceeds the configured budget`; estimate 1,165,986 lamports > 1,000,000 cap. Rejected before submission. | [Debug](https://debug.barn.cow.fi/order/0xb5451f5f0b57342860de82c3176e68f051c86c93c01bf0f7502117b0ffab6353) |
| 77 / 46 | 10:49:47.563 | Sell 0.003 SOL → USDC | Filled later. `PriorityFeeTooHigh`: `transaction priority fee exceeds the configured budget`; estimate 1,137,548 lamports > 1,000,000 cap. Rejected before submission. | [Debug](https://debug.barn.cow.fi/order/0x2abd46c2eebcf47fe7de5d65fa81a05c0581d52ee9e612c25f3919a5c4fbac85) |
| 76 / 45 | 10:50:07.379 | Sell 0.0025 SOL → USDC | Filled later. `PriorityFeeTooHigh`: `transaction priority fee exceeds the configured budget`; estimate 1,059,988 lamports > 1,000,000 cap. Rejected before submission. | [Debug](https://debug.barn.cow.fi/order/0x87508fc47ea4def258c0cf55ec24b9c3f1abdb51b138fdb31438d024809c74eb) |

**Deferred cleanup**

14 wallets had recorded token leftovers when cleanup was deferred. During this cleanup window, 107 candidate solutions failed simulation with SPL Token `InvalidAccountData` at instruction 6. Logs omit their order IDs, so these failures cannot be assigned to individual cleanup orders; **ownership unknown**. Check native SOL output and token account setup with the driver team.

For unplaced cleanup balances without a separate error event, the timestamp is the first cleanup summary recording the failure. Balances are the saved end-of-test records, not a fresh wallet scan; they may include holdings from earlier sessions.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 29 | 10:56:14.492 | Sell 0.278663 USDC → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x3a6727e73077124a3b31de5ed74f1a9f85cd51eb63ca0a06d876bcd37f2ce1a0) |
| — / 39 | 10:56:27.135 | Sell 0.390854 USDC → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0xeb3beb51c828e625b1a1b9fffe3a3668dc69a8e8079beb01991cbae2e44a0aab) |
| — / 45 | 10:56:41.394 | Sell 0.557832 USDC → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x95fdc7eac58f06976b62aa4aac08aec72478a661e1bae3cefbd0767ddf82866e) |
| — / 53 | 10:56:58.288 | Sell 0.278806 USDC → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x5a8cb4884eb4573235ea4c4bcf34739b2cba938dc5db2a70c1667ff3eb351a94) |
| — / 30 | 10:52:36.456 | Sell 0.334393 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 32 | 10:52:38.301 | Sell 0.892886 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 37 | 10:52:50.514 | Sell 0.27916 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 38 | 10:52:57.001 | Sell 0.335076 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 40 | 10:52:49.046 | Sell 0.446731 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 41 | 10:53:03.777 | Sell 0.27923 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 46 | 10:53:00.884 | Sell 0.669426 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 47 | 10:53:17.117 | Sell 0.390678 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 48 | 10:53:16.515 | Sell 0.892598 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 49 | 10:53:17.816 | Sell 0.557829 USDC → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |

</details>

## 4. Token coverage

**Token coverage is only partly demonstrated.** Fixed input sells reached 6 tokens, but no exact output buy reached placement; every tested LST failed quoting.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 6. **Median / longest fill:** 19.1 / 29.1 seconds. All 6 placed main orders filled; each settled separately.

Setup: 40 fixed input SOL sells into different tokens and 15 exact output buys paying SOL, submitted together. The tested list included memecoins, LSTs, stablecoins and Token-2022 assets. SOL input varied from 0.005 to 0.01.

**Ownership unknown:** the API returned `404 Not Found: NoLiquidity: no route found` before placement. Backend records confirm the Paradox driver returned `QuotingFailed: no valid quote found`; they do not expose the underlying solver or Jupiter response. This error does not prove that a token has no DEX liquidity.

Successful fixed input sells: SOL → **ANSEM, PAID, USDG, NVDAx, MU and BOME**. The first 5 are Token-2022 assets; BOME is a classic SPL memecoin. Successful exact output buys: **none**. SOL → LST coverage was not demonstrated: JitoSOL, mSOL, JupSOL, INF, hyloSOL and PSOL all failed before placement.

Sells filled 6/40 planned rows; all 15 exact buys failed their preliminary quote. Buying a token with a fixed SOL input does not prove exact output buy support or the ability to sell it back.

3 Token-2022 transfer-fee tokens were rejected by autopilot before solver participation: SI, ZCAT and ANTHROPIC. This is a known protocol restriction, not a Paradox failure.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 61 | 11:00:02.323 | Sell 0.01 SOL → ANSEM | None; filled in 25.6 seconds. | [Debug](https://debug.barn.cow.fi/order/0xa570024c2f5ddfabd2c2e6274014a44c0211fba73a81d04981af571209bba510) |
| 127 / 72 | 11:00:03.220 | Sell 0.01 SOL → MU | None; filled in 12.5 seconds. | [Debug](https://debug.barn.cow.fi/order/0x12e9732f5a7eb054bdfc0bb9a88789bc98444b3bc58e82950729fda1c8a7c92e) |
| 153 / 98 | 11:00:08.951 | Sell 0.005 SOL → BOME | None; filled in 12.6 seconds. | [Debug](https://debug.barn.cow.fi/order/0x2589a7336099e0774d3978c5ea1fa839e4e33033daa6171bb11f1046b26a686f) |
| 119 / 64 | 10:59:58.248 | Sell 0.01 SOL → PUMP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 120 / 65 | 10:59:58.483 | Sell 0.01 SOL → PYUSD | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 121 / 66 | 10:59:58.690 | Sell 0.01 SOL → CASH | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 122 / 67 | 10:59:58.904 | Sell 0.01 SOL → CRCLx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 123 / 68 | 10:59:59.096 | Sell 0.01 SOL → SPYx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 124 / 69 | 10:59:59.498 | Sell 0.01 SOL → USDv | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 125 / 70 | 10:59:59.613 | Sell 0.01 SOL → SKHY | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 128 / 73 | 11:00:00.661 | Sell 0.01 SOL → SPCX | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 129 / 74 | 11:00:00.810 | Sell 0.01 SOL → SPCXx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 130 / 75 | 11:00:01.304 | Sell 0.01 SOL → TSLAx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 134 / 79 | 11:00:02.503 | Sell 0.005 SOL → Bonk | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 135 / 80 | 11:00:03.201 | Sell 0.005 SOL → $WIF | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 136 / 81 | 11:00:03.241 | Sell 0.005 SOL → POPCAT | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 137 / 82 | 11:00:03.286 | Sell 0.005 SOL → JitoSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 138 / 83 | 11:00:03.689 | Sell 0.005 SOL → mSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 139 / 84 | 11:00:03.692 | Sell 0.005 SOL → JupSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 140 / 85 | 11:00:04.199 | Sell 0.005 SOL → cbBTC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 141 / 86 | 11:00:04.158 | Sell 0.005 SOL → USDe | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 142 / 87 | 11:00:04.508 | Sell 0.005 SOL → EURC | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 143 / 88 | 11:00:05.066 | Sell 0.005 SOL → USDY | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 144 / 89 | 11:00:05.322 | Sell 0.005 SOL → JLP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 145 / 90 | 11:00:05.606 | Sell 0.005 SOL → INF | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 146 / 91 | 11:00:05.741 | Sell 0.005 SOL → ETH | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 147 / 92 | 11:00:05.725 | Sell 0.005 SOL → BNB | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 148 / 93 | 11:00:06.102 | Sell 0.005 SOL → XAUt0 | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 149 / 94 | 11:00:06.228 | Sell 0.005 SOL → GLDx | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 150 / 95 | 11:00:06.740 | Sell 0.005 SOL → EUROP | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 151 / 96 | 11:00:06.599 | Sell 0.005 SOL → Fartcoin | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 152 / 97 | 11:00:07.213 | Sell 0.005 SOL → MEW | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 154 / 99 | 11:00:07.575 | Sell 0.005 SOL → hyloSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 155 / 100 | 11:00:07.567 | Sell 0.005 SOL → PSOL | Main quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 156 / 61 | 11:00:28.155 | Buy SOL → exactly 3.26 ANSEM | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 157 / 62 | 11:00:31.345 | Buy SOL → exactly 88.1 PAID | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 158 / 63 | 11:00:28.365 | Buy SOL → exactly 0.464 USDG | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 159 / 64 | 10:59:59.285 | Buy SOL → exactly 71.6 PUMP | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 160 / 65 | 10:59:59.895 | Buy SOL → exactly 0.464 PYUSD | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 161 / 66 | 11:00:00.485 | Buy SOL → exactly 0.464 CASH | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 162 / 67 | 11:00:01.003 | Buy SOL → exactly 0.00574 CRCLx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 163 / 68 | 11:00:01.968 | Buy SOL → exactly 0.000597 SPYx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 164 / 69 | 11:00:03.198 | Buy SOL → exactly 0.464 USDv | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 165 / 70 | 11:00:03.513 | Buy SOL → exactly 0.0026 SKHY | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 166 / 71 | 11:00:12.822 | Buy SOL → exactly 0.00196 NVDAx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 167 / 72 | 11:00:16.287 | Buy SOL → exactly 0.000427 MU | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 168 / 73 | 11:00:06.055 | Buy SOL → exactly 0.00276 SPCX | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 169 / 74 | 11:00:06.157 | Buy SOL → exactly 0.00277 SPCXx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |
| 170 / 75 | 11:00:07.480 | Buy SOL → exactly 0.00123 TSLAx | Preliminary exact output quote failed: `404 Not Found: NoLiquidity: no route found`. Not placed. | No order ID: quote rejected. |

**Deferred cleanup**

6 wallets had recorded token leftovers when cleanup was deferred. During this cleanup window, 81 candidate solutions failed simulation with SPL Token `InvalidAccountData` at instruction 6. Logs omit their order IDs, so these failures cannot be assigned to individual cleanup orders; **ownership unknown**. Check native SOL output and token account setup with the driver team.

For unplaced cleanup balances without a separate error event, the timestamp is the first cleanup summary recording the failure. Balances are the saved end-of-test records, not a fresh wallet scan; they may include holdings from earlier sessions.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 61 | 11:04:11.618 | Sell 7.914514 ANSEM → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0x9c1948db87e04438fbdc83ddf4dfb60fa9213d430eb2ce8ebb53931063f59d59) |
| — / 71 | 11:04:30.695 | Sell 0.00484461 NVDAx → SOL | **Ownership unknown:** no fill before timeout; no order-specific rejection reason verified. Timed out; cancelled with no execution. Cleanup deferred; tokens retained. | [Debug](https://debug.barn.cow.fi/order/0xa92fdcd1ce7d3299ea56d4fecc32a6a1f5574ae141347748dc2946930b313070) |
| — / 62 | 11:00:41.316 | Sell 210.803664 PAID → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 63 | 11:00:42.117 | Sell 1.114216 USDG → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 72 | 11:00:50.417 | Sell 0.001098 MU → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |
| — / 98 | 11:01:13.481 | Sell 590.911382 BOME → SOL | **Ownership unknown:** `NoLiquidity: no route found`; cleanup quote failed. Not placed; tokens retained; cleanup deferred. | No order ID: quote failed. |

</details>

</details>

## Exclusion audit

Excluded original row IDs: 131, 132, 133. These are unsupported non-zero transfer-fee probes, rejected before solver participation. They are absent from all scored tables and failure totals above. Their raw records remain in the original session files.

## Sources

Local session evidence: `2026-10-12-09-43-composite-paradox-run/sim/run.json`, `sim/journal.jsonl`, saved `meta.json`, and `orders.json` / `txs.json` where present. Prior checked investigation: `20261012_paradox_solver_test_report_for_cow.md`.

This report was recalculated on 20 October 2026. No new trades, cancellations or cleanup transactions were sent to prepare it.
