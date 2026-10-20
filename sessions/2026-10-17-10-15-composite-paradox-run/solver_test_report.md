# Paradox composite test report

Session: `2026-10-17-10-15-composite-paradox-run`. Environment: staging on Solana mainnet. Start: 2026-10-17T10:19:59.678Z. Saved observation end: 2026-10-17T10:43:17.884Z.

**TLDR:** 28/175 eligible planned flows filled (16.00%); 147 failed.

**Adjusted performance:** 28/175 eligible planned flows = **16.00%**. 3 unsupported non-zero transfer-fee rows are excluded from both numerator and denominator. Original schedule: 178 rows. Raw run evidence is unchanged.

A flow counts as filled only when its saved row result is filled. Main, prerequisite acquisition and cleanup orders are separate below; retries can produce more than one order per flow. These rates describe the recorded test conditions and do not establish production readiness.

Saved run status: finished=false; 0 unfinished scenario phases; final account cleanup pending for 21 wallets. A false finished flag can reflect cleanup rather than unfinished trading. This is the saved snapshot, not a new on-chain balance audit.

## Biggest recorded issues

127 × main error: 404 Not Found: NoLiquidity: no route found; 17 × quote failed: 404 Not Found: NoLiquidity: no route found; 1 × acquire JUP quote failed: 404 Not Found: NoLiquidity: no route found

`NoLiquidity` means the quote path returned no usable route; it does not prove that the token has no liquidity or that the named solver caused it. Creation failures occur before settlement. A later cancelled order does not identify why a candidate solution failed.

## Scenario results

| Scenario | Eligible planned | Filled | Failed | Pending | Saved phase |
| --- | --- | --- | --- | --- | --- |
| solver-standard-pairs | 6 | 2 | 4 | 0 | finished |
| solver-same-direction-25 | 25 | 4 | 21 | 0 | finished |
| solver-burst-sell | 84 | 18 | 66 | 0 | finished |
| solver-token-coverage | 52 | 4 | 48 | 0 | finished |
| solver-fresh-accounts | 8 | 0 | 8 | 0 | finished |

Saved placements: {'main': 29, 'acquire': 1, 'cleanup': 14}. Successful scenario settlements (main + prerequisite acquisition, excluding cleanup): 28 distinct signatures. Selected-order batch sizes: {1: 28}. Shared signatures show batching; they do not establish direct CoW matching.

Timing: median 22.246s; longest 34.942s across 28 successful main/acquisition orders. Endpoints: journal placement → simulator-observed fulfillment, including polling delay.

<details>
<summary>solver-standard-pairs — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | SOL → USDC | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 2 | 2 | SOL → USDT | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 3 | 3 | JUP → USDC | sell 0.5 JUP; self | failed | acquire JUP quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 4 | 1 | SOL → USDC | buy 0.25 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 5 | 2 | SOL → USDT | buy 0.25 USDT; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 6 | 3 | JUP → USDC | buy 0.25 USDC; sponsored | failed | acquire JUP expired | acquire: [Debug](https://debug.barn.cow.fi/order/0x4f13a75ed48ad0f0f79bd44a5917359989c9f98e5d40c519c0b879b3b6098d2b) |

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
| 33 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main timeout | main: [Debug](https://debug.barn.cow.fi/order/0xfecd08b0dc29f9c90aa540fdae6377cce4763fd2e5bed0cdf7f5cb3b501f7eee) |
| 34 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 35 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 36 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 37 | 30 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 38 | 31 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 39 | 32 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 40 | 33 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 41 | 34 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 42 | 35 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 43 | 36 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 44 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 45 | 30 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 46 | 31 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 47 | 32 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 48 | 33 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 49 | 34 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 50 | 35 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 51 | 36 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 52 | 37 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 53 | 38 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 54 | 39 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 55 | 40 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 56 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 57 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 58 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 59 | 44 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 60 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 61 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 62 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 63 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 64 | 33 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 65 | 34 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 66 | 35 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 67 | 36 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 68 | 37 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 69 | 38 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 70 | 39 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 71 | 40 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 72 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 73 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 74 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 75 | 44 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 76 | 45 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 77 | 46 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 78 | 47 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 79 | 48 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 80 | 49 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 81 | 50 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 82 | 51 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 83 | 52 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 84 | 29 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 85 | 30 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 86 | 31 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 87 | 32 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 88 | 33 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 89 | 34 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 90 | 35 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 91 | 36 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 92 | 37 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 93 | 38 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 94 | 39 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 95 | 40 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 96 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 97 | 42 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 98 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 99 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 100 | 45 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 101 | 46 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 102 | 47 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 103 | 48 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 104 | 49 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 105 | 50 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 106 | 51 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 107 | 52 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 108 | 53 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
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
| 148 | 93 | SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 149 | 94 | SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
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

<details>
<summary>solver-fresh-accounts — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 171 | 101 | SOL → USDC | sell 0.1 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 172 | 102 | SOL → USDC | sell 0.1 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 173 | 103 | SOL → USDC | buy 10 USDC; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 174 | 104 | SOL → USDC | buy 10 USDC; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 175 | 105 | SOL → USDT | sell 0.1 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 176 | 106 | SOL → USDT | sell 0.1 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 177 | 107 | SOL → USDT | buy 10 USDT; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 178 | 108 | SOL → USDT | buy 10 USDT; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

## All recorded orders

<details>
<summary>Main, acquisition and cleanup order ledger</summary>

| Row | Trader | Step | Time (UTC) | Order | Final saved/API status | Debug tool | Settlement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | main | 2026-10-17T10:20:02.452Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9fbc9911d30b213e27c5353bfd52b0d59fbdbc41b640fcd60da73bc24bbbe2e2) | [Transaction](https://solscan.io/tx/xY5n91Ue6PMsSdCryKkcDphBcvtmQnBqXThLidAeaWNsNhvoNFPMY1gj1WqnATrSGyzfc6bHfg4ZuWNnWrHKgs5) |
| 2 | 2 | main | 2026-10-17T10:20:02.558Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc0f2cd966424f822d3b4d28215a838c97fbe69efff2a54cab274b7faa1e9c149) | [Transaction](https://solscan.io/tx/2vTun8NjQdmMXkzKrEtPU6ehvjv4Fs8HFqTQ4eQkfn8AYK7TnR6dBm8zs7TdpibaEzj4Lvf8ChxbaaNLnjoUoh4T) |
| 6 | 3 | acquire | 2026-10-17T10:20:17.931Z | SOL → JUP; sell | expired | [Debug](https://debug.barn.cow.fi/order/0x4f13a75ed48ad0f0f79bd44a5917359989c9f98e5d40c519c0b879b3b6098d2b) |  |
| — | 2 | cleanup | 2026-10-17T10:20:56.689Z | Es9vMF → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xbbfb84c96ae26e415c4f2148d70c3bd2febb66ed964a8f4dcf85afb475268c45) |  |
| 7 | 4 | main | 2026-10-17T10:22:30.159Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x673c6bedea78107087fe2a33a4269273890b5fb02ceaf842c36de903444c8b86) | [Transaction](https://solscan.io/tx/gCrypyqkniB8odTPrnNyjNXV4WWN1hYD83oihbeQBLMzc96txN8ieL65TapQ4wngtkZpEcoaYz7gUM7yw3NgMza) |
| 8 | 5 | main | 2026-10-17T10:22:30.250Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa49ea342bb24b7461c45cff7f39472d306f3ac6f3164c3e4f873b8eab3f39447) | [Transaction](https://solscan.io/tx/LNmayNU5ob1MZfL7kjUoEmAHNEHUxYqrxXfTFDDcXwwg6ovLt6V8DkinX3YWVgazNMxre78dZkmw5q6eoQDf5LV) |
| 9 | 6 | main | 2026-10-17T10:22:30.354Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xba7f18b001f234b4de297176f145e160559fb8087e24aa2c52af11066b768705) | [Transaction](https://solscan.io/tx/67U2en4aKdxZjCWHtsRLUF6SCRbRc3rm5hAV6EoiUevgE3NZpytEbhVezBMTrb5v8Xb3rL5YeksLwQ6dQYodmNXp) |
| 10 | 7 | main | 2026-10-17T10:22:30.447Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4d3fc3896a276eb9ca773aebdcec5a24b0760e96e4142b44c10e0bca8662d190) | [Transaction](https://solscan.io/tx/3YqTgccqHKts4FXD8s3Juk8PYoEyZK9rChjqaXRgRW2nkQX7b3oGGQdVBuRw8pFpncw957WkbQfkq4qDQufazyc2) |
| 32 | 29 | main | 2026-10-17T10:24:05.876Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbc36477303c9eb7975834acbed055931d549fe0af91916f71f474342ce508ae8) | [Transaction](https://solscan.io/tx/4cSyRccUjk5dPxcLQQq8E1KCvGaioJgibeEHdaBXPEtdKWUYGog8WMj14Tg5iP1dPhUFq14E8NBU3PqnoZUp1UBk) |
| 33 | 30 | main | 2026-10-17T10:24:07.218Z | SOL → USDC; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xfecd08b0dc29f9c90aa540fdae6377cce4763fd2e5bed0cdf7f5cb3b501f7eee) |  |
| 34 | 31 | main | 2026-10-17T10:24:07.418Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc2636d26647b2f67d622e6e858d0a423856dbc5590af9e2919eed981fbb28e56) | [Transaction](https://solscan.io/tx/4q3ugBZGcCPrLoSYignoqkuYbFeyb1SSV4rdi1CwhXTrRXyWng8tCREamozzKb9PTdMsdWhoZt542m4UK6AoH8yX) |
| 35 | 32 | main | 2026-10-17T10:24:07.525Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0ee8161ed87ec649c407170878764a8dcc0b8a6c9606052b4ad45ea88aa660e7) | [Transaction](https://solscan.io/tx/3LDScGm4AzjzE8XSRNudreADjvvytBZEpJJicCN6daYSvetXTaxpUjPkhbTELzPVLXmMkgqz8TG1iQyXWoHxXr5R) |
| 37 | 30 | main | 2026-10-17T10:25:36.417Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xed152390b27dbeea8ebdb0fe7cc849e70394b79e22ffb8ba82de0a9dbf4c45b0) | [Transaction](https://solscan.io/tx/5VBL5jk43hk7BR4wKEtRF4PJeWXdD6JBRimBDdJYMTanq6ZvNy7tPyNjRTEyHF9cv83aaY18CzJUDjdk9ZaEeaAc) |
| 40 | 33 | main | 2026-10-17T10:25:37.574Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa4ebf7ac86de9417c5a201251b6a4206afceec0ad67126fb4e1fb91cf9a5df98) | [Transaction](https://solscan.io/tx/4hrtmcBSCtryfaNvUuGuLrbGQSzbxYQ9p7UAQyCyhwwtAMW3B8TpbEb3yijTGtMWw452iXYEyRCjEbmxdcjigAhF) |
| 41 | 34 | main | 2026-10-17T10:25:37.661Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8b6a54804555542711cb381451566dbe758fa51937f7a2c391afc0d49e23ef24) | [Transaction](https://solscan.io/tx/2yMtuVE5qMMjiXwvvFG7HkWB2hTQXSU9jiBbF6WtXaamp6rftkdA2nnQFMiVtRY8w7xRt7kdygDKfCWrFCNsaXxp) |
| 42 | 35 | main | 2026-10-17T10:25:37.764Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd55ab7ba3e27664cff5262be3ca455bae4602f1e7584f273bc1e4e6c7d38f914) | [Transaction](https://solscan.io/tx/3LdA9J9nAUyfPvzda9CdzzjEutCtp6FeaeZRKqQMmcBLbdrk6fdtJTQLZmoCyBRHr5qgYaKrXVRjdcevp273LvEB) |
| 50 | 35 | main | 2026-10-17T10:27:07.219Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x446481ca6978b28bb22800e4b98240194c9093717aeca2d8dc1bb7388eb51b35) | [Transaction](https://solscan.io/tx/52tnGHkarQ3PDcBYDG5dhqXWBqkY9oSDNzZGH7zbwDMxFxTCzHicWQabdpoiy8qnQVWR8KTjpGh4haEAtWGTYrGY) |
| 45 | 30 | main | 2026-10-17T10:27:08.368Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf10510112134bee77fe2d9b3fa19759c219d28a5dfea232721058ca9e6bdff1f) | [Transaction](https://solscan.io/tx/4rVDMkFKHtmM2eM7VcS4qcScwTKB3nwh6ktpV5bDzoWJDyxahG2TfVGvVXhhE8D7aHV9r6b2mZr81ibbSAcYdzbT) |
| 49 | 34 | main | 2026-10-17T10:27:08.465Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7eeb2e243d49453ad78afe3d0317823b2497619647a4977952e29f0db3bf543a) | [Transaction](https://solscan.io/tx/5r6jSWAzmQpPvoBbTQqWFUdJfgfKQVWovZ5a3MezMdNKzXbf4fXKDFWEyqYrgmBQUxz4nA8VSrx8CfX9iYSQFQZB) |
| 48 | 33 | main | 2026-10-17T10:27:08.568Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xea8a0f22ec77a584a5fd32395a4ddb87109d3f96041f47b635935f2352138494) | [Transaction](https://solscan.io/tx/5q39uipDJgk9AyX5X5NYTFa4nnqkcoQE2KYqP4GJ9fyYLho4q4JKSsKdNSjwdf6uwDQYBT2Wpub6kD961rFDHfG4) |
| 67 | 36 | main | 2026-10-17T10:28:39.065Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x01a8fef8227c22ca3bceacb665e248814062635b6f65f80e7b123ff678681b93) | [Transaction](https://solscan.io/tx/2sN7WERoPLizXr8o9B6yZwUYtgmcdU4NYoVr5mqvzndEfhjSp6vgEGryKZ6s1jSdSgsBDcLsUUYKsGhCHsPnNcyE) |
| 63 | 32 | main | 2026-10-17T10:28:39.166Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x683663ad8b3f90ee32c74c0adcc1df31ab83058a059e255a8cfb4885d3381d30) | [Transaction](https://solscan.io/tx/ForJzf6kogBUNTj8SnRvza7ZQnFn3Btk2pf73muQNF3uLpMEb4aQxrz7NHFdhYA5kjZNqUBD6AyWWU74ZFdRJFx) |
| 62 | 31 | main | 2026-10-17T10:28:39.270Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe256925f5765d8c7c46f7f0715185f284d1207880aca5e35e2709ad4f073ea20) | [Transaction](https://solscan.io/tx/26XFs4Jw1UzbHR5qstnnijrJx6Thbg9ZqKfXChapg9aez3ZYotRdixmrfAR2nRVRjzZBi4itW81P8qJW7JQKvLiC) |
| 70 | 39 | main | 2026-10-17T10:28:39.376Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x412a8a5569468200da0ecd8fe927739bbf26e0a5e21797daaff0aab4d8d8d19c) | [Transaction](https://solscan.io/tx/2VewWqqms8zYYYR9EMXXhCqPL53aq4LAuTEfLBCooWm9Yf8H99Ab9UBo3hTEkM7Agjik1w3E978kqd1nHfSnsTjN) |
| 97 | 42 | main | 2026-10-17T10:30:09.662Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe48b18b40384cdeb46ac9cb433c6084e21d13672defee232536c1a0829f9ace7) | [Transaction](https://solscan.io/tx/4NgpC4MZMSjGvzmrfBmLkHtPS2vf55cc98kUo3RWU6r8aYbgn6bJan3VakdoJXYWF97SCCrrkg7SyawECsMRenDu) |
| 89 | 34 | main | 2026-10-17T10:30:09.762Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd9253df4724125a98bc7dec4a3418d55b3b934873bb51bbf61b29f71198501e2) | [Transaction](https://solscan.io/tx/465MFg1fid8V6kfXNDdSePbfw2biT5yq5Ruqje4nmLSVUBidjnG2y9XztdjqdmYSZ2xMuNZa6CetFLV2F5MRJzZS) |
| 99 | 44 | main | 2026-10-17T10:30:09.862Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc4aaa352d61ce165eab8ed9e85919a16bd6e401868863381ab8beb24bf3ead07) | [Transaction](https://solscan.io/tx/2ndMuQtWwHD6nv6JD2eiYp7FZ1jcSG5nZANuHXTSyisNRoL1Dh7Xnep4PHmd8mv374nRoiDeAXNtiMcpsWP3VxWy) |
| — | 39 | cleanup | 2026-10-17T10:30:57.718Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x0826893108789ed419fd41a4a828525ff77d712be8e9d4a3cfe4571a3f1c912e) |  |
| — | 42 | cleanup | 2026-10-17T10:31:00.457Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x0d8d4d513bf781c8ae7668b9d5b58a45740ed72af3e9891fca5a6d76ed44df44) |  |
| 116 | 61 | main | 2026-10-17T10:32:37.691Z | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2c3fc788abff12fb6d44c3ec56ad8cb28279dcc2f8183ad60ad3359fa08fcb6e) | [Transaction](https://solscan.io/tx/2sxWYkNoZRy4p99qUF8wzErjuKW7QUcwfjCogX185R5wC8kDdyh13S5ZD9Jze6zsxWbETG1K6boQd3xps5kt3S5v) |
| 117 | 62 | main | 2026-10-17T10:32:37.783Z | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x75ae0ebd0887e8b5e983b85174a69c45cca3a7374dddc721408766e276736f07) | [Transaction](https://solscan.io/tx/61yp3tznXu5HEgdk2izqaorTrp87nsg5JxoyvMBct8ZT7AeoDiUiX1SNnrjQ5ZR8TVntJ5ovAnuBqvuqQ3sbxeuE) |
| 118 | 63 | main | 2026-10-17T10:32:37.968Z | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9ca4e3b8b4a9debcbd6ba7e88261d73612dce7ef16da443d5b97935dcb251f7a) | [Transaction](https://solscan.io/tx/38PpwowU74dPJJKW8WjHzxESGum42fngAK5wuymovu64KtDqLpJTHDYXevhdbpNLgTKtUgK6Mjhhia7e5rrcTkSk) |
| 119 | 64 | main | 2026-10-17T10:32:39.266Z | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8b6310b8a70ada4ab48cc0dc1379176a4536950af6071222711974c7fd0548e8) | [Transaction](https://solscan.io/tx/39wbVMoxcfKGzkqLSH8gJRtAnUb21azMNhft7qkRUATrKfFtMCFZ8ZjvBtgR4j32PpNXZcDwiv33kH1cfxKfWPP8) |
| — | 64 | cleanup | 2026-10-17T10:33:20.548Z | pumpCm → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xcd108887ed1e23899557b3c919562709eb3c1fcb5ffb11a9529e4357b9a2d9fb) |  |
| — | 1 | cleanup | 2026-10-17T10:37:14.846Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x130d172da3986fcc7102b239cbfeb9ff374820664c172d4b53801e9a27281209) |  |
| — | 2 | cleanup | 2026-10-17T10:37:15.794Z | Es9vMF → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x572c2438403338da650891b350ed354d3e3b4a5c2dd956be5e297d45cf2a5a41) |  |
| — | 4 | cleanup | 2026-10-17T10:38:31.847Z | JUPyiw → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x0c94c7569c297c9fda0f21ed1800d92640c78eb909365b57d942dc31ae03143a) |  |
| — | 5 | cleanup | 2026-10-17T10:38:32.796Z | JUPyiw → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xad63821362f759d36fbc61c0216f5793713bb8bf1c9edf7f18e10043fa567855) |  |
| — | 29 | cleanup | 2026-10-17T10:39:49.496Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x95d413f9321a3a3a48972e5f1d7745c0aadab79e772848c2d0e8a02568f13d10) |  |
| — | 30 | cleanup | 2026-10-17T10:39:50.568Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x254cab8cd1ad754a2ed15c336c1ddad0694dd82888c500f6de466e30040f76cf) |  |
| — | 39 | cleanup | 2026-10-17T10:40:00.359Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x7048ab89746e7de03c8115eaa25edd9cdbeab332c8b7f66ffb6e610f9860b663) |  |
| — | 42 | cleanup | 2026-10-17T10:40:00.761Z | EPjFWd → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x048f28baec1d392ba33a1da6efc082c30223d4ab511925ed663f06681416f54c) |  |
| — | 61 | cleanup | 2026-10-17T10:41:34.347Z | 9cRCn9 → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0x1648cf758162240a311bc1fbf8987732ec9788d4d67ff89849ea148c78f71375) |  |
| — | 62 | cleanup | 2026-10-17T10:41:35.161Z | 98kfF7 → SOL; sell | cancelled | [Debug](https://debug.barn.cow.fi/order/0xb4be53e1f58f5d20f3a38872bdae0a3f06934cb95a00918cf2b1d3184b06b8dc) |  |

</details>

<details>
<summary>All placement and quote errors (unsupported fee rows excluded)</summary>

| Row | Trader | Step | Stage | Time | Exact error |
| --- | --- | --- | --- | --- | --- |
| — | 1 | cleanup | quote | 2026-10-17T10:20:58.047Z | 404 Not Found: NoLiquidity: no route found |
| 11 | 8 | main | quote | 2026-10-17T10:22:28.092Z | 404 Not Found: NoLiquidity: no route found |
| 12 | 9 | main | quote | 2026-10-17T10:22:28.282Z | 404 Not Found: NoLiquidity: no route found |
| 13 | 10 | main | quote | 2026-10-17T10:22:28.574Z | 404 Not Found: NoLiquidity: no route found |
| 14 | 11 | main | quote | 2026-10-17T10:22:28.673Z | 404 Not Found: NoLiquidity: no route found |
| 15 | 12 | main | quote | 2026-10-17T10:22:28.978Z | 404 Not Found: NoLiquidity: no route found |
| 16 | 13 | main | quote | 2026-10-17T10:22:29.149Z | 404 Not Found: NoLiquidity: no route found |
| 18 | 15 | main | quote | 2026-10-17T10:22:29.492Z | 404 Not Found: NoLiquidity: no route found |
| 19 | 16 | main | quote | 2026-10-17T10:22:29.680Z | 404 Not Found: NoLiquidity: no route found |
| 17 | 14 | main | quote | 2026-10-17T10:22:29.820Z | 404 Not Found: NoLiquidity: no route found |
| 20 | 17 | main | quote | 2026-10-17T10:22:29.949Z | 404 Not Found: NoLiquidity: no route found |
| 21 | 18 | main | quote | 2026-10-17T10:22:30.115Z | 404 Not Found: NoLiquidity: no route found |
| 22 | 19 | main | quote | 2026-10-17T10:22:30.396Z | 404 Not Found: NoLiquidity: no route found |
| 23 | 20 | main | quote | 2026-10-17T10:22:30.484Z | 404 Not Found: NoLiquidity: no route found |
| 24 | 21 | main | quote | 2026-10-17T10:22:30.776Z | 404 Not Found: NoLiquidity: no route found |
| 25 | 22 | main | quote | 2026-10-17T10:22:30.912Z | 404 Not Found: NoLiquidity: no route found |
| 26 | 23 | main | quote | 2026-10-17T10:22:31.292Z | 404 Not Found: NoLiquidity: no route found |
| 27 | 24 | main | quote | 2026-10-17T10:22:31.354Z | 404 Not Found: NoLiquidity: no route found |
| 28 | 25 | main | quote | 2026-10-17T10:22:31.516Z | 404 Not Found: NoLiquidity: no route found |
| 29 | 26 | main | quote | 2026-10-17T10:22:31.762Z | 404 Not Found: NoLiquidity: no route found |
| 30 | 27 | main | quote | 2026-10-17T10:22:31.967Z | 404 Not Found: NoLiquidity: no route found |
| 31 | 28 | main | quote | 2026-10-17T10:22:32.175Z | 404 Not Found: NoLiquidity: no route found |
| — | 4 | cleanup | quote | 2026-10-17T10:23:07.604Z | 404 Not Found: NoLiquidity: no route found |
| — | 6 | cleanup | quote | 2026-10-17T10:23:09.675Z | 404 Not Found: NoLiquidity: no route found |
| 43 | 36 | main | quote | 2026-10-17T10:25:37.255Z | 404 Not Found: NoLiquidity: no route found |
| 39 | 32 | main | quote | 2026-10-17T10:25:37.531Z | 404 Not Found: NoLiquidity: no route found |
| 38 | 31 | main | quote | 2026-10-17T10:25:37.589Z | 404 Not Found: NoLiquidity: no route found |
| 36 | 29 | main | quote | 2026-10-17T10:25:37.929Z | 404 Not Found: NoLiquidity: no route found |
| 51 | 36 | main | quote | 2026-10-17T10:27:07.459Z | 404 Not Found: NoLiquidity: no route found |
| 47 | 32 | main | quote | 2026-10-17T10:27:07.471Z | 404 Not Found: NoLiquidity: no route found |
| 44 | 29 | main | quote | 2026-10-17T10:27:07.737Z | 404 Not Found: NoLiquidity: no route found |
| 52 | 37 | main | quote | 2026-10-17T10:27:08.070Z | 404 Not Found: NoLiquidity: no route found |
| 53 | 38 | main | quote | 2026-10-17T10:27:08.193Z | 404 Not Found: NoLiquidity: no route found |
| 46 | 31 | main | quote | 2026-10-17T10:27:08.581Z | 404 Not Found: NoLiquidity: no route found |
| 55 | 40 | main | quote | 2026-10-17T10:27:08.789Z | 404 Not Found: NoLiquidity: no route found |
| 56 | 41 | main | quote | 2026-10-17T10:27:08.905Z | 404 Not Found: NoLiquidity: no route found |
| 54 | 39 | main | quote | 2026-10-17T10:27:08.908Z | 404 Not Found: NoLiquidity: no route found |
| 57 | 42 | main | quote | 2026-10-17T10:27:09.132Z | 404 Not Found: NoLiquidity: no route found |
| 58 | 43 | main | quote | 2026-10-17T10:27:09.338Z | 404 Not Found: NoLiquidity: no route found |
| 59 | 44 | main | quote | 2026-10-17T10:27:09.519Z | 404 Not Found: NoLiquidity: no route found |
| 73 | 42 | main | quote | 2026-10-17T10:28:37.328Z | 404 Not Found: NoLiquidity: no route found |
| 75 | 44 | main | quote | 2026-10-17T10:28:37.478Z | 404 Not Found: NoLiquidity: no route found |
| 65 | 34 | main | quote | 2026-10-17T10:28:37.528Z | 404 Not Found: NoLiquidity: no route found |
| 61 | 30 | main | quote | 2026-10-17T10:28:37.899Z | 404 Not Found: NoLiquidity: no route found |
| 64 | 33 | main | quote | 2026-10-17T10:28:38.062Z | 404 Not Found: NoLiquidity: no route found |
| 60 | 29 | main | quote | 2026-10-17T10:28:38.295Z | 404 Not Found: NoLiquidity: no route found |
| 68 | 37 | main | quote | 2026-10-17T10:28:38.507Z | 404 Not Found: NoLiquidity: no route found |
| 69 | 38 | main | quote | 2026-10-17T10:28:38.651Z | 404 Not Found: NoLiquidity: no route found |
| 71 | 40 | main | quote | 2026-10-17T10:28:38.719Z | 404 Not Found: NoLiquidity: no route found |
| 72 | 41 | main | quote | 2026-10-17T10:28:39.068Z | 404 Not Found: NoLiquidity: no route found |
| 74 | 43 | main | quote | 2026-10-17T10:28:39.211Z | 404 Not Found: NoLiquidity: no route found |
| 66 | 35 | main | quote | 2026-10-17T10:28:39.323Z | 404 Not Found: NoLiquidity: no route found |
| 76 | 45 | main | quote | 2026-10-17T10:28:39.623Z | 404 Not Found: NoLiquidity: no route found |
| 77 | 46 | main | quote | 2026-10-17T10:28:39.686Z | 404 Not Found: NoLiquidity: no route found |
| 78 | 47 | main | quote | 2026-10-17T10:28:40.042Z | 404 Not Found: NoLiquidity: no route found |
| 79 | 48 | main | quote | 2026-10-17T10:28:40.155Z | 404 Not Found: NoLiquidity: no route found |
| 80 | 49 | main | quote | 2026-10-17T10:28:40.451Z | 404 Not Found: NoLiquidity: no route found |
| 81 | 50 | main | quote | 2026-10-17T10:28:40.555Z | 404 Not Found: NoLiquidity: no route found |
| 82 | 51 | main | quote | 2026-10-17T10:28:40.755Z | 404 Not Found: NoLiquidity: no route found |
| 83 | 52 | main | quote | 2026-10-17T10:28:40.968Z | 404 Not Found: NoLiquidity: no route found |
| 88 | 33 | main | quote | 2026-10-17T10:30:06.256Z | 404 Not Found: NoLiquidity: no route found |
| 85 | 30 | main | quote | 2026-10-17T10:30:06.388Z | 404 Not Found: NoLiquidity: no route found |
| 84 | 29 | main | quote | 2026-10-17T10:30:07.490Z | 404 Not Found: NoLiquidity: no route found |
| 96 | 41 | main | quote | 2026-10-17T10:30:08.238Z | 404 Not Found: NoLiquidity: no route found |
| 98 | 43 | main | quote | 2026-10-17T10:30:08.316Z | 404 Not Found: NoLiquidity: no route found |
| 100 | 45 | main | quote | 2026-10-17T10:30:08.363Z | 404 Not Found: NoLiquidity: no route found |
| 90 | 35 | main | quote | 2026-10-17T10:30:08.382Z | 404 Not Found: NoLiquidity: no route found |
| 102 | 47 | main | quote | 2026-10-17T10:30:08.843Z | 404 Not Found: NoLiquidity: no route found |
| 103 | 48 | main | quote | 2026-10-17T10:30:08.934Z | 404 Not Found: NoLiquidity: no route found |
| 104 | 49 | main | quote | 2026-10-17T10:30:09.690Z | 404 Not Found: NoLiquidity: no route found |
| 92 | 37 | main | quote | 2026-10-17T10:30:09.734Z | 404 Not Found: NoLiquidity: no route found |
| 105 | 50 | main | quote | 2026-10-17T10:30:09.753Z | 404 Not Found: NoLiquidity: no route found |
| 106 | 51 | main | quote | 2026-10-17T10:30:09.895Z | 404 Not Found: NoLiquidity: no route found |
| 107 | 52 | main | quote | 2026-10-17T10:30:09.900Z | 404 Not Found: NoLiquidity: no route found |
| 91 | 36 | main | quote | 2026-10-17T10:30:09.902Z | 404 Not Found: NoLiquidity: no route found |
| 87 | 32 | main | quote | 2026-10-17T10:30:09.913Z | 404 Not Found: NoLiquidity: no route found |
| 94 | 39 | main | quote | 2026-10-17T10:30:10.516Z | 404 Not Found: NoLiquidity: no route found |
| 86 | 31 | main | quote | 2026-10-17T10:30:10.555Z | 404 Not Found: NoLiquidity: no route found |
| 95 | 40 | main | quote | 2026-10-17T10:30:11.203Z | 404 Not Found: NoLiquidity: no route found |
| 101 | 46 | main | quote | 2026-10-17T10:30:11.396Z | 404 Not Found: NoLiquidity: no route found |
| 93 | 38 | main | quote | 2026-10-17T10:30:11.409Z | 404 Not Found: NoLiquidity: no route found |
| 108 | 53 | main | quote | 2026-10-17T10:30:11.416Z | 404 Not Found: NoLiquidity: no route found |
| 109 | 54 | main | quote | 2026-10-17T10:30:11.433Z | 404 Not Found: NoLiquidity: no route found |
| 110 | 55 | main | quote | 2026-10-17T10:30:11.692Z | 404 Not Found: NoLiquidity: no route found |
| 111 | 56 | main | quote | 2026-10-17T10:30:11.829Z | 404 Not Found: NoLiquidity: no route found |
| 112 | 57 | main | quote | 2026-10-17T10:30:12.205Z | 404 Not Found: NoLiquidity: no route found |
| 113 | 58 | main | quote | 2026-10-17T10:30:12.410Z | 404 Not Found: NoLiquidity: no route found |
| 114 | 59 | main | quote | 2026-10-17T10:30:12.413Z | 404 Not Found: NoLiquidity: no route found |
| 115 | 60 | main | quote | 2026-10-17T10:30:12.696Z | 404 Not Found: NoLiquidity: no route found |
| — | 29 | cleanup | quote | 2026-10-17T10:30:34.630Z | 404 Not Found: NoLiquidity: no route found |
| — | 30 | cleanup | quote | 2026-10-17T10:30:36.988Z | 404 Not Found: NoLiquidity: no route found |
| — | 31 | cleanup | quote | 2026-10-17T10:30:37.092Z | 404 Not Found: NoLiquidity: no route found |
| — | 34 | cleanup | quote | 2026-10-17T10:30:41.091Z | 404 Not Found: NoLiquidity: no route found |
| 120 | 65 | main | quote | 2026-10-17T10:32:35.888Z | 404 Not Found: NoLiquidity: no route found |
| 121 | 66 | main | quote | 2026-10-17T10:32:36.118Z | 404 Not Found: NoLiquidity: no route found |
| 122 | 67 | main | quote | 2026-10-17T10:32:36.248Z | 404 Not Found: NoLiquidity: no route found |
| 123 | 68 | main | quote | 2026-10-17T10:32:36.399Z | 404 Not Found: NoLiquidity: no route found |
| 124 | 69 | main | quote | 2026-10-17T10:32:36.662Z | 404 Not Found: NoLiquidity: no route found |
| 125 | 70 | main | quote | 2026-10-17T10:32:37.013Z | 404 Not Found: NoLiquidity: no route found |
| 126 | 71 | main | quote | 2026-10-17T10:32:37.165Z | 404 Not Found: NoLiquidity: no route found |
| 127 | 72 | main | quote | 2026-10-17T10:32:37.313Z | 404 Not Found: NoLiquidity: no route found |
| 128 | 73 | main | quote | 2026-10-17T10:32:37.362Z | 404 Not Found: NoLiquidity: no route found |
| 129 | 74 | main | quote | 2026-10-17T10:32:37.693Z | 404 Not Found: NoLiquidity: no route found |
| 130 | 75 | main | quote | 2026-10-17T10:32:37.806Z | 404 Not Found: NoLiquidity: no route found |
| 134 | 79 | main | quote | 2026-10-17T10:32:38.578Z | 404 Not Found: NoLiquidity: no route found |
| 135 | 80 | main | quote | 2026-10-17T10:32:38.877Z | 404 Not Found: NoLiquidity: no route found |
| 136 | 81 | main | quote | 2026-10-17T10:32:39.005Z | 404 Not Found: NoLiquidity: no route found |
| 137 | 82 | main | quote | 2026-10-17T10:32:39.200Z | 404 Not Found: NoLiquidity: no route found |
| 138 | 83 | main | quote | 2026-10-17T10:32:39.403Z | 404 Not Found: NoLiquidity: no route found |
| 139 | 84 | main | quote | 2026-10-17T10:32:39.577Z | 404 Not Found: NoLiquidity: no route found |
| 140 | 85 | main | quote | 2026-10-17T10:32:39.971Z | 404 Not Found: NoLiquidity: no route found |
| 141 | 86 | main | quote | 2026-10-17T10:32:40.187Z | 404 Not Found: NoLiquidity: no route found |
| 142 | 87 | main | quote | 2026-10-17T10:32:40.600Z | 404 Not Found: NoLiquidity: no route found |
| 143 | 88 | main | quote | 2026-10-17T10:32:41.000Z | 404 Not Found: NoLiquidity: no route found |
| 144 | 89 | main | quote | 2026-10-17T10:32:41.191Z | 404 Not Found: NoLiquidity: no route found |
| 145 | 90 | main | quote | 2026-10-17T10:32:41.598Z | 404 Not Found: NoLiquidity: no route found |
| 146 | 91 | main | quote | 2026-10-17T10:32:41.840Z | 404 Not Found: NoLiquidity: no route found |
| 147 | 92 | main | quote | 2026-10-17T10:32:42.236Z | 404 Not Found: NoLiquidity: no route found |
| 148 | 93 | main | quote | 2026-10-17T10:32:42.435Z | 404 Not Found: NoLiquidity: no route found |
| 149 | 94 | main | quote | 2026-10-17T10:32:42.595Z | 404 Not Found: NoLiquidity: no route found |
| 150 | 95 | main | quote | 2026-10-17T10:32:42.786Z | 404 Not Found: NoLiquidity: no route found |
| 154 | 99 | main | quote | 2026-10-17T10:32:43.198Z | 404 Not Found: NoLiquidity: no route found |
| 151 | 96 | main | quote | 2026-10-17T10:32:43.202Z | 404 Not Found: NoLiquidity: no route found |
| 152 | 97 | main | quote | 2026-10-17T10:32:43.599Z | 404 Not Found: NoLiquidity: no route found |
| 153 | 98 | main | quote | 2026-10-17T10:32:43.849Z | 404 Not Found: NoLiquidity: no route found |
| 155 | 100 | main | quote | 2026-10-17T10:32:44.587Z | 404 Not Found: NoLiquidity: no route found |
| — | 61 | cleanup | quote | 2026-10-17T10:33:16.709Z | 404 Not Found: NoLiquidity: no route found |
| 171 | 101 | main | quote | 2026-10-17T10:34:55.783Z | 404 Not Found: NoLiquidity: no route found |
| 172 | 102 | main | quote | 2026-10-17T10:34:56.063Z | 404 Not Found: NoLiquidity: no route found |
| 175 | 105 | main | quote | 2026-10-17T10:34:56.370Z | 404 Not Found: NoLiquidity: no route found |
| 176 | 106 | main | quote | 2026-10-17T10:34:56.528Z | 404 Not Found: NoLiquidity: no route found |
| 173 | 103 | main | quote | 2026-10-17T10:34:57.962Z | 404 Not Found: NoLiquidity: no route found |
| 174 | 104 | main | quote | 2026-10-17T10:34:58.213Z | 404 Not Found: NoLiquidity: no route found |
| 177 | 107 | main | quote | 2026-10-17T10:34:58.418Z | 404 Not Found: NoLiquidity: no route found |
| 178 | 108 | main | quote | 2026-10-17T10:34:58.426Z | 404 Not Found: NoLiquidity: no route found |

</details>

<details>
<summary>Cleanup exceptions and remaining balances</summary>

| Trader | Time | Evidence |
| --- | --- | --- |
| 1 | 2026-10-17T10:21:03.398Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.522563 EPjFWd…"], "closedAccounts": 1, "reclaimed": 1, "swept": "64980000"} |
| 2 | 2026-10-17T10:22:10.133Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.523228 Es9vMF…"], "closedAccounts": 1, "reclaimed": 2, "swept": "64970000"} |
| 7 | 2026-10-17T10:23:16.423Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.737782 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "64980000"} |
| 5 | 2026-10-17T10:23:17.020Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.736445 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "64980000"} |
| 4 | 2026-10-17T10:23:31.134Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.736445 JUPyiw…"], "closedAccounts": 1, "reclaimed": 1, "swept": "64980000"} |
| 6 | 2026-10-17T10:23:35.373Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.736445 JUPyiw…"], "closedAccounts": 1, "reclaimed": 1, "swept": "64980000"} |
| 32 | 2026-10-17T10:30:41.337Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.836271 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "61980000"} |
| 33 | 2026-10-17T10:30:44.293Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.522594 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "64980000"} |
| 36 | 2026-10-17T10:30:47.141Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.418186 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "65985000"} |
| 35 | 2026-10-17T10:30:47.234Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.731717 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 0, "swept": "62980000"} |
| 30 | 2026-10-17T10:30:55.437Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.627155 EPjFWd…"], "closedAccounts": 1, "reclaimed": 0, "swept": "63970000"} |
| 29 | 2026-10-17T10:30:55.515Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.26116 EPjFWd…"], "closedAccounts": 1, "reclaimed": 0, "swept": "67485000"} |
| 31 | 2026-10-17T10:31:00.659Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.731737 EPjFWd…"], "closedAccounts": 1, "reclaimed": 0, "swept": "62980000"} |
| 34 | 2026-10-17T10:31:02.704Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.940821 EPjFWd…"], "closedAccounts": 1, "reclaimed": 1, "swept": "60970000"} |
| 44 | 2026-10-17T10:31:10.620Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.418413 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "65980000"} |
| 39 | 2026-10-17T10:32:13.973Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.36601 EPjFWd…"], "closedAccounts": 1, "reclaimed": 1, "swept": "66470000"} |
| 42 | 2026-10-17T10:32:14.988Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.313758 EPjFWd…"], "closedAccounts": 1, "reclaimed": 2, "swept": "66970000"} |
| 62 | 2026-10-17T10:33:21.348Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["327.452678 98kfF7… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "59985000"} |
| 63 | 2026-10-17T10:33:27.163Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.045897 2u1tsz… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "59985000"} |
| 61 | 2026-10-17T10:33:39.142Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["9.268256 9cRCn9…"], "closedAccounts": 1, "reclaimed": 1, "swept": "59985000"} |
| 64 | 2026-10-17T10:34:40.833Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["226.391347 pumpCm…"], "closedAccounts": 1, "reclaimed": 2, "swept": "59970000"} |
| 1 | 2026-10-17T10:38:28.605Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.522563 EPjFWd…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |
| 2 | 2026-10-17T10:38:29.339Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.523228 Es9vMF…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |
| 6 | 2026-10-17T10:38:35.336Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.736445 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 7 | 2026-10-17T10:38:37.981Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.737782 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 4 | 2026-10-17T10:39:46.235Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.736445 JUPyiw…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |
| 5 | 2026-10-17T10:39:47.006Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.736445 JUPyiw…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |
| 31 | 2026-10-17T10:39:51.815Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.731737 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 32 | 2026-10-17T10:39:53.848Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.836271 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 33 | 2026-10-17T10:39:54.870Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.522594 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 34 | 2026-10-17T10:39:56.013Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.940821 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 35 | 2026-10-17T10:39:58.658Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.731717 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 36 | 2026-10-17T10:39:59.364Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.418186 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 44 | 2026-10-17T10:40:03.302Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.418413 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 29 | 2026-10-17T10:41:07.628Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.26116 EPjFWd…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |
| 30 | 2026-10-17T10:41:07.725Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.627155 EPjFWd…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |
| 39 | 2026-10-17T10:41:20.153Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.36601 EPjFWd…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |
| 42 | 2026-10-17T10:41:21.700Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.313758 EPjFWd…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |
| 63 | 2026-10-17T10:41:37.647Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.045897 2u1tsz… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 64 | 2026-10-17T10:41:38.799Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["226.391347 pumpCm… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "19995000"} |
| 62 | 2026-10-17T10:42:56.676Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["327.452678 98kfF7…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |
| 61 | 2026-10-17T10:42:56.773Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["9.268256 9cRCn9…"], "closedAccounts": 0, "reclaimed": 1, "swept": "19980000"} |

</details>

## Detailed investigation from the saved report

The following is the original checked investigation, with unsupported fee-token table rows removed. Its historical summaries and comparisons may quote the original raw schedule. Use the adjusted performance and scenario results above for current scoring. Exact errors, ownership caveats and order links are retained.

<details>
<summary>Saved investigation, errors and transaction evidence</summary>

# Paradox solver test report

Date: 17 October 2026. Environment: staging / Barn on Solana mainnet. Run: `2026-10-17-10-15-composite-paradox-run`, 10:19:59–10:43:17 UTC; snapshot 10:44:05 UTC. Cleanup remained unresolved.

**TLDR:** Only 28/178 planned trades completed, with 28/29 placed main orders filled; most failures happened during quoting before placement. One oversized acquisition expired, and cleanup left tokens with 21 traders. Next, check quote responses and acquisition sizing with Paradox and CoW, then have the test team rerun the blocked cases.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Not achieved: 2/6 flows; 2/2 main orders filled | Test team + quote provider: check acquisition sizing |
| 2. 25 same-direction sells | Inconclusive: 4/25 flows; 21 quote failures | Test team: restore quoting and rerun the load |
| 3. Sell bursts | Inconclusive: 18/84 flows; 18/19 main orders filled | Paradox + CoW: recover failed-attempt details |
| 4. Token coverage | Not achieved: 4/4 main orders filled; exact buys 0/15 | Paradox + CoW: trace token quote failures |
| 5. Fresh accounts | Inconclusive: 0/8 flows; no orders placed | Test team: rerun after quotes work |

## Changes since 13 October 2026

Across the same 4 scenarios, completed main trades fell from 33 to 28 and placed main orders from 36 to 29; the added fresh-account scenario placed 0/8.

<details>
<summary>Comparison with the previous run</summary>

Baseline: `2026-10-13-06-27-composite-paradox-run`, checked against its journal, orders, competition records and matching report scope; acquisitions and cleanup are separate.

| Matching scope / metric | 13 October | 17 October |
| --- | --- | --- |
| Same 4 scenarios: filled / placed main orders | 33/36 | 28/29 |
| Same 4 scenarios: completed / planned rows | 33/170 | 28/170 |
| Main settlement transactions / largest batch | 33 / 1 | 28 / 1 |
| Token sells / exact-output buys filled | 3 / 0 | 4 / 0 |
| Matching-scenario NoLiquidity row failures | 131 | 137 |
| Main filled-order median / longest, seconds | 22.176 / 50.035 | 22.246 / 34.942 |
| Acquisition orders filled / placed | 2/2 | 0/1 |
| Cleanup orders filled / placed | 0/12 | 0/14 |

Unchanged: same-direction fills 4/25; token exact buys 0/15; batching remains known and accepted. Main amounts, directions and modes match, but standard rows changed from 30-second spacing to concurrent starts, ordinary accounts were prepared upfront, and fill timeout fell from 210 to 60 seconds; this isn't a controlled solver regression comparison.

Newly recorded error type: `PriorityFeeTooHigh`, 4 aggregate rejection events, without order/solution joins. Existing `other` markers affect 3 new UIDs (1 cancelled, 2 later filled), versus 1 previously; affected orders are [row 33, cancelled](https://debug.barn.cow.fi/order/0xfecd08b0dc29f9c90aa540fdae6377cce4763fd2e5bed0cdf7f5cb3b501f7eee), [row 118, later fulfilled](https://debug.barn.cow.fi/order/0x9ca4e3b8b4a9debcbd6ba7e88261d73612dce7ef16da443d5b97935dcb251f7a) and [row 119, later fulfilled](https://debug.barn.cow.fi/order/0x8b6310b8a70ada4ab48cc0dc1379176a4536950af6071222711974c7fd0548e8). The cancelled order is [Debug](https://debug.barn.cow.fi/order/0xfecd08b0dc29f9c90aa540fdae6377cce4763fd2e5bed0cdf7f5cb3b501f7eee). `FailedToSubmit` and deadline counters remain 1 each; these are not established as separate attempts. The expired, oversized acquisition is [Debug](https://debug.barn.cow.fi/order/0x4f13a75ed48ad0f0f79bd44a5917359989c9f98e5d40c519c0b879b3b6098d2b). Ownership remains unknown.

Recovered sells (previously expired; now fulfilled):

| Row / trader | Trade | Debug tool URL |
| --- | --- | --- |
| 116 / 61 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | [Debug](https://debug.barn.cow.fi/order/0x2c3fc788abff12fb6d44c3ec56ad8cb28279dcc2f8183ad60ad3359fa08fcb6e) |
| 117 / 62 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | [Debug](https://debug.barn.cow.fi/order/0x75ae0ebd0887e8b5e983b85174a69c45cca3a7374dddc721408766e276736f07) |
| 118 / 63 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | [Debug](https://debug.barn.cow.fi/order/0x9ca4e3b8b4a9debcbd6ba7e88261d73612dce7ef16da443d5b97935dcb251f7a) |

Previous XAUt0/GLDx fills did not recur; today's requests failed quotes. Missing earlier `SolverFailed` records do not prove a fix.

</details>

## 1. Standard pairs

**Basic pair coverage was not achieved.** Only the 2 SOL sells filled; both JUP flows and the 2 exact stablecoin buys failed before main-order placement.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 2. Filled / placed main orders: 2/2. Completed / planned flows: 2/6. Median / longest fill: 6.589 / 6.704 seconds.

The main-order denominator is 29 placed main orders: 28 fulfilled and 1 was cancelled. A separate sponsored JUP acquisition expired without execution; there were no successful acquisitions. Total transactions means 28 distinct successful settlements of main scenario orders, excluding creation, funding, failed attempts, acquisitions and cleanup. Every successful main order settled separately.

Timings measure placement → simulator-observed fill, including polling delay, using fulfilled main orders only. Overall median / longest fill: 22.246 / 34.942 seconds. Successful examples show placement time; order errors show the first saved failure marker, or expiry/timeout observation when the original failure time is absent. Grouped quote rows show the earliest recorded failure and list every affected row/trader. Rows and traders use combined-session numbering.

**Ownership unknown:** 145 planned flows failed with `404 Not Found: NoLiquidity: no route found`, including 1 JUP acquisition quote and 17 exact-buy quote errors saved only as row failures. This means the API returned no usable quote; it does not prove absent token liquidity, permanent lack of support or a Paradox defect. Native SOL requests use mint `11111111111111111111111111111111`, while successful orders execute with wrapped SOL; the original provider responses needed to explain the difference aren't saved.

Saved staging VictoriaLogs/autopilot competition records show Paradox participation: 66 proposals, 33 wins, 28 submissions and 28 observed settlements. They record 4 `PriorityFeeTooHigh` rejections, 1 `FailedToSubmit` and 1 `settlement_missed_deadline`. Auction/solution IDs and failed transaction signatures are absent, so these aggregate events cannot be joined to the 3 order-level `other` markers or counted as separate failed attempts. **Ownership unknown:** the priority-fee rejection stage is known, but its underlying cause and repair owner are not. A deadline warning does not prove a late solver response.

Evidence gaps: failure extracts preserve only `other` plus UID/time for 3 orders and only the acquisition UID for sponsored creation expiry. Transaction files contain fee/time/CU/error summaries, not failed program logs or full instructions; the Jupiter-only quote timeline is empty and provides no Paradox quote-provider evidence. No confirmed solver defect is established by these saved artifacts.

The latest run processed all 178 planned rows: 28 completed, 145 failed quote lookup with `NoLiquidity`, 3 hit expected transfer-fee token rejection, 1 lost its acquisition to expiry, and 1 timed out after placement. Thus 148 rows failed quoting before any order existed; a further main trade was blocked by the failed acquisition. The 30 non-cleanup placed orders comprise 29 main orders and 1 acquisition. No simulator order retries are recorded.

All 5 scenario phases are marked finished, but the saved run has `finished: false` and 21 traders still holding tokens. The final cleanup pass ended at 10:43:17.873 UTC; the artifact snapshot was fetched at 10:44:05 UTC, before the metadata's 10:44:17.884 observation endpoint. These are snapshot outcomes, not confirmation that the whole session closed cleanly.

Settings: ordinary receiving accounts prepared upfront, 0.07 SOL per ordinary trader, 300-second order validity, 60-second fill timeout, cancellation on timeout; fresh wallets used 0.15 SOL and 500 bps slippage. Scenario funding transferred 8.2 SOL and final cleanup received another 0.472158960 SOL; neither is a net spending figure. All 14 placed cleanup sale orders ended cancelled, with no fills. Another 8 original cleanup quote-error records and 20 quote-failure summary observations are retained below; these are different evidence counts, not 28 distinct orders.

Competition filters recorded 280 `unfunded_sell_token_account` and 9 `in_flight` events. They are aggregate events with no complete UID joins; they cannot be treated as distinct failed orders or assigned as the cause of the quote failures.

The main requests were 0.005 SOL sells to USDC/USDT, a 0.5 JUP sell to USDC, and exact buys of 0.25 USDC/USDT with SOL and 0.25 USDC with JUP. The row-6 acquisition order signed a sell amount of **1015864.983517941 SOL**, far beyond the funded 0.07 SOL, with buy limit 74540579128 raw JUP units. It expired before creation; its debug UID may no longer resolve. The saved artifacts do not identify whether quoting or simulator amount conversion produced those values. The test team must inspect that sizing before using the JUP result to judge solver support.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 10:20:02.452 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. [Settlement](https://solscan.io/tx/xY5n91Ue6PMsSdCryKkcDphBcvtmQnBqXThLidAeaWNsNhvoNFPMY1gj1WqnATrSGyzfc6bHfg4ZuWNnWrHKgs5) | [Debug](https://debug.barn.cow.fi/order/0x9fbc9911d30b213e27c5353bfd52b0d59fbdbc41b640fcd60da73bc24bbbe2e2) |
| 2 / 2 | 10:20:02.558 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | None; fulfilled. [Settlement](https://solscan.io/tx/2vTun8NjQdmMXkzKrEtPU6ehvjv4Fs8HFqTQ4eQkfn8AYK7TnR6dBm8zs7TdpibaEzj4Lvf8ChxbaaNLnjoUoh4T) | [Debug](https://debug.barn.cow.fi/order/0xc0f2cd966424f822d3b4d28215a838c97fbe69efff2a54cab274b7faa1e9c149) |
| 6 / 3 | 10:20:53.076 | Sell 1015864.983517941 SOL → JUP; acquisition for Buy JUP → exactly 0.25 USDC | **Ownership unknown:** `acquire JUP expired`; final status expired, 0 executed. The acquisition exceeded the wallet's 0.07 SOL funding; its sizing source is unavailable. Intended main order was never placed. | [Debug](https://debug.barn.cow.fi/order/0x4f13a75ed48ad0f0f79bd44a5917359989c9f98e5d40c519c0b879b3b6098d2b) |
| 3 / 3 | 10:20:08.238 | Sell 0.5 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | **Ownership unknown:** `acquire JUP quote failed: 404 Not Found: NoLiquidity: no route found`; the JUP acquisition quote failed; intended main trade is shown and the acquisition amount is unavailable. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 4 / 1 | 10:20:12.162 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 5 / 2 | 10:20:10.798 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.25 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |

**Cleanup (excluded from scenario totals):** 0/3 placed cleanup orders filled; 2 traders still held tokens in their last saved check. Quote and timeout ownership remains unknown.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 2 | 10:22:04.816 | Sell 0.523228 [Es9vMF](https://solscan.io/token/Es9vMF) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 68.126 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/qj2tRsqmwe3ZT9ZHdsBhMdCYgTHfxJ9VpcprifKf7cFkr7P6zkZBj5GKwJQQp54vS2bRLyi6BfSYXLYHRJD4qsR) | [Debug](https://debug.barn.cow.fi/order/0xbbfb84c96ae26e415c4f2148d70c3bd2febb66ed964a8f4dcf85afb475268c45) |
| — / 1 | 10:38:24.332 | Sell 0.522563 [EPjFWd](https://solscan.io/token/EPjFWd) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 69.487 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/4jdbH9nmaF5zCsYnEhh3h2MoCZw9Fz8NaL7yYaVPBD38Mja2La2qxubcZ6ku4pLLzwch1jL563D8LQqTUjFdTadn) | [Debug](https://debug.barn.cow.fi/order/0x130d172da3986fcc7102b239cbfeb9ff374820664c172d4b53801e9a27281209) |
| — / 2 | 10:38:25.225 | Sell 0.523228 [Es9vMF](https://solscan.io/token/Es9vMF) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 69.431 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/2MHN9h4EFfK6iKibN8qyo7E5AF4ZEXuWetXQB7jg11nAKaKKpNjx2rC1Sk3TauHYm8ouMUyq2GtPau5RQ1gNTfsM) | [Debug](https://debug.barn.cow.fi/order/0x572c2438403338da650891b350ed354d3e3b4a5c2dd956be5e297d45cf2a5a41) |
| — / 1 | 10:20:58.047 | Sell 0.522563 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; no order placed; balance retained. | No order ID: quote failed before placement |

Last saved leftovers: trader 1: 0.522563 EPjFWd…; trader 2: 0.523228 Es9vMF….

</details>

## 2. 25 same-direction sells

**The full load test is inconclusive.** Only 4/25 trades reached placement and filled separately; batching remains a known and accepted limitation.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 4. Filled / placed main orders: 4/4. Completed / planned flows: 4/25. Median / longest fill: 30.093 / 34.942 seconds.

Only rows 7–10 reached placement; all 4 filled separately. Rows 11–31 failed quotes for the identical 0.005 SOL → JUP sell. Batching is **known and accepted** as a Paradox limitation from the previous report, so no immediate batching fix is requested. Since only 4 of the intended 25 orders reached the solver, this run does not measure full load handling.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 10:22:30.159 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | None; fulfilled. [Settlement](https://solscan.io/tx/gCrypyqkniB8odTPrnNyjNXV4WWN1hYD83oihbeQBLMzc96txN8ieL65TapQ4wngtkZpEcoaYz7gUM7yw3NgMza) | [Debug](https://debug.barn.cow.fi/order/0x673c6bedea78107087fe2a33a4269273890b5fb02ceaf842c36de903444c8b86) |
| 10 / 7 | 10:22:30.447 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | None; fulfilled. [Settlement](https://solscan.io/tx/3YqTgccqHKts4FXD8s3Juk8PYoEyZK9rChjqaXRgRW2nkQX7b3oGGQdVBuRw8pFpncw957WkbQfkq4qDQufazyc2) | [Debug](https://debug.barn.cow.fi/order/0x4d3fc3896a276eb9ca773aebdcec5a24b0760e96e4142b44c10e0bca8662d190) |
| 11 / 8; 12 / 9; 13 / 10; 14 / 11; 15 / 12; 16 / 13; 18 / 15; 19 / 16; 17 / 14; 20 / 17; 21 / 18; 22 / 19; 23 / 20; 24 / 21; 25 / 22; 26 / 23; 27 / 24; 28 / 25; 29 / 26; 30 / 27; 31 / 28 | 10:22:28.092 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. 21 affected rows; last recorded failure 10:22:32.175 UTC. | No order ID: quote failed before placement |

**Cleanup (excluded from scenario totals):** 0/2 placed cleanup orders filled; 4 traders still held tokens in their last saved check. Quote and timeout ownership remains unknown.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 4 | 10:39:41.657 | Sell 1.736445 [JUPyiw](https://solscan.io/token/JUPyiw) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 69.811 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/4TmTARhRbTmEQPmHkU6wrHmvm6B6h5CJ3B5RDreLgHgzSQNTH3qGVfXUMHouxniUiZd8upQcEBDAxNogqSUuqsAW) | [Debug](https://debug.barn.cow.fi/order/0x0c94c7569c297c9fda0f21ed1800d92640c78eb909365b57d942dc31ae03143a) |
| — / 5 | 10:39:42.072 | Sell 1.736445 [JUPyiw](https://solscan.io/token/JUPyiw) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 69.277 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/2bf2CyuE274xa5TNuEZ9PR91keyUm35rYVcqfrsqu4EXENMCYqWrZQ6znWDAVtYPEZMMQsVRH95RWfnMTRhZzSCa) | [Debug](https://debug.barn.cow.fi/order/0xad63821362f759d36fbc61c0216f5793713bb8bf1c9edf7f18e10043fa567855) |
| — / 4 | 10:23:07.604 | Sell 1.736445 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → native SOL (cleanup) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; no order placed; balance retained. | No order ID: quote failed before placement |
| — / 6 | 10:23:09.675 | Sell 1.736445 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → native SOL (cleanup) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; no order placed; balance retained. | No order ID: quote failed before placement |
| — / 7 | 10:23:16.423; 10:38:37.981 | Sell 1.737782 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 2 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 5 | 10:23:17.020 | Sell 1.736445 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 1 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 6 | 10:38:35.336 | Sell 1.736445 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 1 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |

Last saved leftovers: trader 7: 1.737782 JUPyiw…; trader 5: 1.736445 JUPyiw…; trader 4: 1.736445 JUPyiw…; trader 6: 1.736445 JUPyiw….

</details>

## 3. Sell bursts

**Throughput is inconclusive.** Only 19/84 trades reached placement, and 1 was cancelled after a failed attempt; 18 filled.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 18. Filled / placed main orders: 18/19. Completed / planned flows: 18/84. Median / longest fill: 22.246 / 34.876 seconds.

The 4, 8, 16, 24 and 32-order waves were scheduled 90 seconds apart. Filled / planned by wave: 3/4, 4/8, 4/16, 4/24 and 3/32; 65 requests failed quotes. Row 33 had a saved `other` failure marker and was cancelled; trader 30's later fills belong to different orders and do not recover row 33. The incomplete waves and pauses do not establish a sustained throughput ceiling.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 10:24:05.876 | Sell 0.0025 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. [Settlement](https://solscan.io/tx/4cSyRccUjk5dPxcLQQq8E1KCvGaioJgibeEHdaBXPEtdKWUYGog8WMj14Tg5iP1dPhUFq14E8NBU3PqnoZUp1UBk) | [Debug](https://debug.barn.cow.fi/order/0xbc36477303c9eb7975834acbed055931d549fe0af91916f71f474342ce508ae8) |
| 37 / 30 | 10:25:36.417 | Sell 0.003 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. [Settlement](https://solscan.io/tx/5VBL5jk43hk7BR4wKEtRF4PJeWXdD6JBRimBDdJYMTanq6ZvNy7tPyNjRTEyHF9cv83aaY18CzJUDjdk9ZaEeaAc) | [Debug](https://debug.barn.cow.fi/order/0xed152390b27dbeea8ebdb0fe7cc849e70394b79e22ffb8ba82de0a9dbf4c45b0) |
| 99 / 44 | 10:30:09.862 | Sell 0.004 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | None; fulfilled. [Settlement](https://solscan.io/tx/2ndMuQtWwHD6nv6JD2eiYp7FZ1jcSG5nZANuHXTSyisNRoL1Dh7Xnep4PHmd8mv374nRoiDeAXNtiMcpsWP3VxWy) | [Debug](https://debug.barn.cow.fi/order/0xc4aaa352d61ce165eab8ed9e85919a16bd6e401868863381ab8beb24bf3ead07) |
| 33 / 30 | 10:24:35.423311339 | Sell 0.003 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | **Ownership unknown:** saved settlement-failure marker `other`; simulator `main timeout` after 70.014 seconds; final API status cancelled, 0 executed; no later fill. [Cancellation](https://solscan.io/tx/2pEQAY8ayyryvGqdcXXh7xaTU2YRubSEf6fXg48LkNR9FN6i8Nkfs7rEZLewv6b1PhmiR4dpZn7gcufpA5nmRJRQ) | [Debug](https://debug.barn.cow.fi/order/0xfecd08b0dc29f9c90aa540fdae6377cce4763fd2e5bed0cdf7f5cb3b501f7eee) |
| 36 / 29; 44 / 29; 52 / 37; 56 / 41; 64 / 33; 60 / 29; 68 / 37; 72 / 41; 76 / 45; 80 / 49; 88 / 33; 84 / 29; 96 / 41; 100 / 45; 104 / 49; 92 / 37; 108 / 53; 112 / 57 | 10:25:37.929 | Sell 0.0025 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. 18 affected rows; last recorded failure 10:30:12.205 UTC. | No order ID: quote failed before placement |
| 38 / 31; 46 / 31; 54 / 39; 58 / 43; 74 / 43; 66 / 35; 78 / 47; 82 / 51; 98 / 43; 90 / 35; 102 / 47; 106 / 51; 94 / 39; 86 / 31; 110 / 55; 114 / 59 | 10:25:37.589 | Sell 0.0035 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. 16 affected rows; last recorded failure 10:30:12.413 UTC. | No order ID: quote failed before placement |
| 43 / 36; 39 / 32; 51 / 36; 47 / 32; 55 / 40; 59 / 44; 75 / 44; 71 / 40; 79 / 48; 83 / 52; 103 / 48; 107 / 52; 91 / 36; 87 / 32; 95 / 40; 111 / 56; 115 / 60 | 10:25:37.255 | Sell 0.004 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. 17 affected rows; last recorded failure 10:30:12.696 UTC. | No order ID: quote failed before placement |
| 53 / 38; 57 / 42; 73 / 42; 65 / 34; 61 / 30; 69 / 38; 77 / 46; 81 / 50; 85 / 30; 105 / 50; 101 / 46; 93 / 38; 109 / 54; 113 / 58 | 10:27:08.193 | Sell 0.003 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. 14 affected rows; last recorded failure 10:30:12.410 UTC. | No order ID: quote failed before placement |

**Cleanup (excluded from scenario totals):** 0/6 placed cleanup orders filled; 11 traders still held tokens in their last saved check. Quote and timeout ownership remains unknown.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 39 | 10:32:08.144 | Sell 0.36601 [EPjFWd](https://solscan.io/token/EPjFWd) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 70.427 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/26k9PtVhR4ss6RDrpigHS4Ux6BsUyLb8zEeFP3TkeMZS8JLEyP7i4q92p8AqQYeH74mjNsQeswvZW1hCFg1oZiaq) | [Debug](https://debug.barn.cow.fi/order/0x0826893108789ed419fd41a4a828525ff77d712be8e9d4a3cfe4571a3f1c912e) |
| — / 42 | 10:32:09.437 | Sell 0.313758 [EPjFWd](https://solscan.io/token/EPjFWd) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 68.980 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/4e5bmk4GA2JF9XNEcgQTCptD3MuyyhA6d8ptmUePH9VY4G1LHqa4WQuDwhfcXbi61fbSjboiAvyGpbRTCtH3LHeB) | [Debug](https://debug.barn.cow.fi/order/0x0d8d4d513bf781c8ae7668b9d5b58a45740ed72af3e9891fca5a6d76ed44df44) |
| — / 29 | 10:40:58.291 | Sell 0.26116 [EPjFWd](https://solscan.io/token/EPjFWd) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 68.796 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/3DU9eJR6Fzq846rUdNdiaUFitSXrN2zTcXRikzedX8oMXoUogh4j5vPtF62AzgHe87yN81xame7jKJAcY49YvLXR) | [Debug](https://debug.barn.cow.fi/order/0x95d413f9321a3a3a48972e5f1d7745c0aadab79e772848c2d0e8a02568f13d10) |
| — / 30 | 10:41:02.163 | Sell 0.627155 [EPjFWd](https://solscan.io/token/EPjFWd) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 71.595 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/5fzBF7nn4PJajHhyuUErVz57tm3N2K4JxjjENmHzXC7598KwYjuMjwPmtCdpEE25Rcxw5HDLY6PRxWxVCsGXXFU1) | [Debug](https://debug.barn.cow.fi/order/0x254cab8cd1ad754a2ed15c336c1ddad0694dd82888c500f6de466e30040f76cf) |
| — / 39 | 10:41:11.418 | Sell 0.36601 [EPjFWd](https://solscan.io/token/EPjFWd) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 71.060 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/i8SxqHVJEJVr25s3yod2iAPvnQh2hd5gGmTPgpExsSmydp3hX2y7D2rrnmafvKPZ1R5NGqxs84XgiKLGLo7myys) | [Debug](https://debug.barn.cow.fi/order/0x7048ab89746e7de03c8115eaa25edd9cdbeab332c8b7f66ffb6e610f9860b663) |
| — / 42 | 10:41:11.449 | Sell 0.313758 [EPjFWd](https://solscan.io/token/EPjFWd) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 70.688 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/3JB2UyrCATqpkhBvUCrwCCHnZpzkK8gsBC4fXFaJweQFuX7uQuc81BsXWxbcWnkThKUcSvtxCz6sh1u3qkLiDVPG) | [Debug](https://debug.barn.cow.fi/order/0x048f28baec1d392ba33a1da6efc082c30223d4ab511925ed663f06681416f54c) |
| — / 29 | 10:30:34.630 | Sell 0.26116 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; no order placed; balance retained. | No order ID: quote failed before placement |
| — / 30 | 10:30:36.988 | Sell 0.627155 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; no order placed; balance retained. | No order ID: quote failed before placement |
| — / 31 | 10:30:37.092 | Sell 0.731737 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; no order placed; balance retained. | No order ID: quote failed before placement |
| — / 34 | 10:30:41.091 | Sell 0.940821 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; no order placed; balance retained. | No order ID: quote failed before placement |
| — / 32 | 10:30:41.337; 10:39:53.848 | Sell 0.836271 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 2 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 33 | 10:30:44.293; 10:39:54.870 | Sell 0.522594 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 2 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 36 | 10:30:47.141; 10:39:59.364 | Sell 0.418186 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 2 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 35 | 10:30:47.234; 10:39:58.658 | Sell 0.731717 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 2 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 44 | 10:31:10.620; 10:40:03.302 | Sell 0.418413 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 2 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 31 | 10:39:51.815 | Sell 0.731737 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 1 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 34 | 10:39:56.013 | Sell 0.940821 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 1 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |

Last saved leftovers: trader 32: 0.836271 EPjFWd…; trader 33: 0.522594 EPjFWd…; trader 36: 0.418186 EPjFWd…; trader 35: 0.731717 EPjFWd…; trader 30: 0.627155 EPjFWd…; trader 29: 0.26116 EPjFWd…; trader 31: 0.731737 EPjFWd…; trader 34: 0.940821 EPjFWd…; trader 44: 0.418413 EPjFWd…; trader 39: 0.36601 EPjFWd…; trader 42: 0.313758 EPjFWd….

</details>

## 4. Token coverage

**Token coverage was not achieved.** Only ANSEM, PAID, USDG and PUMP sells filled; none of the 15 exact-output buys reached placement.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 4. Filled / placed main orders: 4/4. Completed / planned flows: 4/55. Median / longest fill: 24.879 / 34.567 seconds.

Fixed-input SOL → token sells succeeded for **ANSEM, PAID, USDG and PUMP** (0.01 SOL each). Exact-output token buys succeeded for **none**: all 15 failed quotes, including requests for exactly 3.26 ANSEM, 0.464 USDG and 0.00123 TSLAx. The failed sells and exact buys are listed separately by direction/amount in the table. USDG row 118 and PUMP row 119 each have a saved `other` settlement-failure marker, then fulfilled; the original failed-attempt causes are unavailable.

Expected rejections: SI, ZCAT and ANTHROPIC (rows 131–133, 0.005 SOL each) were rejected by autopilot for Token-2022 transfer fees before solver participation. These are expected checks, not Paradox failures; their exact errors appear below without order IDs.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 61 | 10:32:37.691 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | None; fulfilled. [Settlement](https://solscan.io/tx/2sxWYkNoZRy4p99qUF8wzErjuKW7QUcwfjCogX185R5wC8kDdyh13S5ZD9Jze6zsxWbETG1K6boQd3xps5kt3S5v) | [Debug](https://debug.barn.cow.fi/order/0x2c3fc788abff12fb6d44c3ec56ad8cb28279dcc2f8183ad60ad3359fa08fcb6e) |
| 117 / 62 | 10:32:37.783 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | None; fulfilled. [Settlement](https://solscan.io/tx/61yp3tznXu5HEgdk2izqaorTrp87nsg5JxoyvMBct8ZT7AeoDiUiX1SNnrjQ5ZR8TVntJ5ovAnuBqvuqQ3sbxeuE) | [Debug](https://debug.barn.cow.fi/order/0x75ae0ebd0887e8b5e983b85174a69c45cca3a7374dddc721408766e276736f07) |
| 118 / 63 | 10:32:54.473441829 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | **Ownership unknown:** saved settlement-failure marker `other`; actual error unavailable; later fulfilled. [Settlement](https://solscan.io/tx/38PpwowU74dPJJKW8WjHzxESGum42fngAK5wuymovu64KtDqLpJTHDYXevhdbpNLgTKtUgK6Mjhhia7e5rrcTkSk) | [Debug](https://debug.barn.cow.fi/order/0x9ca4e3b8b4a9debcbd6ba7e88261d73612dce7ef16da443d5b97935dcb251f7a) |
| 119 / 64 | 10:32:54.422370731 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | **Ownership unknown:** saved settlement-failure marker `other`; actual error unavailable; later fulfilled. [Settlement](https://solscan.io/tx/39wbVMoxcfKGzkqLSH8gJRtAnUb21azMNhft7qkRUATrKfFtMCFZ8ZjvBtgR4j32PpNXZcDwiv33kH1cfxKfWPP8) | [Debug](https://debug.barn.cow.fi/order/0x8b6310b8a70ada4ab48cc0dc1379176a4536950af6071222711974c7fd0548e8) |
| 120 / 65 | 10:32:35.888 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 121 / 66 | 10:32:36.118 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 122 / 67 | 10:32:36.248 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 123 / 68 | 10:32:36.399 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 124 / 69 | 10:32:36.662 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 125 / 70 | 10:32:37.013 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 126 / 71 | 10:32:37.165 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 127 / 72 | 10:32:37.313 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 128 / 73 | 10:32:37.362 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 129 / 74 | 10:32:37.693 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 130 / 75 | 10:32:37.806 | Sell 0.01 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 134 / 79 | 10:32:38.578 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 135 / 80 | 10:32:38.877 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 136 / 81 | 10:32:39.005 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 137 / 82 | 10:32:39.200 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 138 / 83 | 10:32:39.403 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 139 / 84 | 10:32:39.577 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 140 / 85 | 10:32:39.971 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 141 / 86 | 10:32:40.187 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 142 / 87 | 10:32:40.600 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 143 / 88 | 10:32:41.000 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 144 / 89 | 10:32:41.191 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 145 / 90 | 10:32:41.598 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 146 / 91 | 10:32:41.840 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 147 / 92 | 10:32:42.236 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 148 / 93 | 10:32:42.435 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 149 / 94 | 10:32:42.595 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 150 / 95 | 10:32:42.786 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 151 / 96 | 10:32:43.202 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 152 / 97 | 10:32:43.599 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 153 / 98 | 10:32:43.849 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 154 / 99 | 10:32:43.198 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 155 / 100 | 10:32:44.587 | Sell 0.005 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. | No order ID: quote failed before placement |
| 156 / 61 | 10:32:59.427 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 157 / 62 | 10:32:59.434 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 158 / 63 | 10:33:14.174 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 159 / 64 | 10:33:12.944 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 160 / 65 | 10:32:41.146 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 161 / 66 | 10:32:40.409 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 162 / 67 | 10:32:42.224 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 163 / 68 | 10:32:42.756 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 164 / 69 | 10:32:43.456 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 165 / 70 | 10:32:43.195 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 166 / 71 | 10:32:44.754 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 167 / 72 | 10:32:44.397 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 168 / 73 | 10:32:45.405 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 169 / 74 | 10:32:46.125 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |
| 170 / 75 | 10:32:45.398 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | **Ownership unknown:** `quote failed: 404 Not Found: NoLiquidity: no route found`; not placed. Original quote-attempt timestamp/request not saved; row-failure observation shown. | No order ID: quote failed before placement |

**Cleanup (excluded from scenario totals):** 0/3 placed cleanup orders filled; 4 traders still held tokens in their last saved check. Quote and timeout ownership remains unknown.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| — / 64 | 10:34:30.116 | Sell 226.391347 [pumpCm](https://solscan.io/token/pumpCm) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 69.568 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/4t6f5SeEpprTL8XmknaPoyj5wz1bpfQ2acwQrUqjopbvEB8nQpLTCUTB3fhaTPcbjKNgEHYUgUrjUYo667gYX2Do) | [Debug](https://debug.barn.cow.fi/order/0xcd108887ed1e23899557b3c919562709eb3c1fcb5ffb11a9529e4357b9a2d9fb) |
| — / 61 | 10:42:46.563 | Sell 9.268256 [9cRCn9](https://solscan.io/token/9cRCn9) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 72.217 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/5vacByFtbJnWVZkjw3E2L6R6WduQmXoPK1mPxkxEKSDZ3BXCnygQncF9NtCURcciwNpjpM7C13ThcBqkV9sHR6de) | [Debug](https://debug.barn.cow.fi/order/0x1648cf758162240a311bc1fbf8987732ec9788d4d67ff89849ea148c78f71375) |
| — / 62 | 10:42:46.677 | Sell 327.452678 [98kfF7](https://solscan.io/token/98kfF7) → native SOL (cleanup) | **Ownership unknown:** simulator `timeout` after 71.516 seconds; final API status cancelled, 0 executed; no later fill. Original failure time/details unavailable; timeout observation shown. [Cancellation](https://solscan.io/tx/4czhhTVNrNaV4fXh5hxXve1qaXq8ySbWZ23PCcPBUFvRUG4pZPgt77Y7vG6beSgV41d1GLeZaHZfeXM7fHUrVteo) | [Debug](https://debug.barn.cow.fi/order/0xb4be53e1f58f5d20f3a38872bdae0a3f06934cb95a00918cf2b1d3184b06b8dc) |
| — / 61 | 10:33:16.709 | Sell 9.268256 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) → native SOL (cleanup) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; no order placed; balance retained. | No order ID: quote failed before placement |
| — / 62 | 10:33:21.348 | Sell 327.452678 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 1 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 63 | 10:33:27.163; 10:41:37.647 | Sell 1.045897 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 2 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |
| — / 64 | 10:41:38.799 | Sell 226.391347 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) → native SOL (cleanup) | **Ownership unknown:** `quote failed: Not Found {"errorType":"NoLiquidity","description":"no route` (exact saved text, truncated); 1 cleanup observations; no placed order recorded for these quote failures, balance retained. Original quote-attempt time unavailable. | No order ID: only cleanup quote-failure summary saved |

Last saved leftovers: trader 62: 327.452678 98kfF7…; trader 63: 1.045897 2u1tsz…; trader 61: 9.268256 9cRCn9…; trader 64: 226.391347 pumpCm….

</details>

## 5. Fresh accounts

**Fresh-account settlement is inconclusive.** All 8 requests failed quoting before placement, so neither account opening nor settlement was exercised.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 0. Filled / placed main orders: 0/0 (no orders placed). Completed / planned flows: 0/8. Median / longest fill: unavailable; no fills.

The journal recorded checks for all 8 receiving accounts at 10:34:51.236 UTC; none appears in upfront token-account creation events. Each wallet requested a 0.1 SOL sell or an exact buy of 10 USDC/USDT, split between self-paid and sponsored modes, with 0.15 SOL funding and 500 bps slippage. All 8 failed `NoLiquidity` before placement; account freshness at settlement and solver-funded opening rent were not tested. No successful order example exists for this scenario.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 171 / 101; 172 / 102 | 10:34:55.783 | Sell 0.1 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. 2 affected rows; last recorded failure 10:34:56.063 UTC. | No order ID: quote failed before placement |
| 173 / 103; 174 / 104 | 10:34:57.962 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. 2 affected rows; last recorded failure 10:34:58.213 UTC. | No order ID: quote failed before placement |
| 175 / 105; 176 / 106 | 10:34:56.370 | Sell 0.1 [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. 2 affected rows; last recorded failure 10:34:56.528 UTC. | No order ID: quote failed before placement |
| 177 / 107; 178 / 108 | 10:34:58.418 | Buy [SOL](https://solscan.io/token/So11111111111111111111111111111111111111112) → exactly 10 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed. 2 affected rows; last recorded failure 10:34:58.426 UTC. | No order ID: quote failed before placement |

Cleanup: no sale orders or leftovers recorded for these wallets.

</details>

</details>

## Exclusion audit

Excluded original row IDs: 131, 132, 133. These are unsupported non-zero transfer-fee probes, rejected before solver participation. They are absent from all scored tables and failure totals above. Their raw records remain in the original session files.

## Sources

Local session evidence: `2026-10-17-10-15-composite-paradox-run/sim/run.json`, `sim/journal.jsonl`, saved `meta.json`, and `orders.json` / `txs.json` where present. Prior checked investigation: `20261017_paradox_solver_test_report_for_cow.md`.

This report was recalculated on 20 October 2026. No new trades, cancellations or cleanup transactions were sent to prepare it.
