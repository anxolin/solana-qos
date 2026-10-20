# Kaisersolver composite test report

Session: `2026-10-17-07-54-composite-kaisersolver-run`. Environment: staging on Solana mainnet. Start: 2026-10-17T07:55:09.835Z. Saved observation end: 2026-10-17T08:13:26.935Z.

**TLDR:** 48/203 eligible planned flows filled (23.65%); 155 failed.

**Adjusted performance:** 48/203 eligible planned flows = **23.65%**. 3 unsupported non-zero transfer-fee rows are excluded from both numerator and denominator. Original schedule: 206 rows. Raw run evidence is unchanged.

A flow counts as filled only when its saved row result is filled. Main, prerequisite acquisition and cleanup orders are separate below; retries can produce more than one order per flow. These rates describe the recorded test conditions and do not establish production readiness.

Saved run status: finished=false; 0 unfinished scenario phases; final account cleanup pending for 120 wallets. A false finished flag can reflect cleanup rather than unfinished trading. This is the saved snapshot, not a new on-chain balance audit.

## Biggest recorded issues

127 × main error: 404 Not Found: NoLiquidity: no route found; 27 × quote failed: 404 Not Found: NoLiquidity: no route found; 1 × acquire JUP error: 404 Not Found: NoLiquidity: no route found

`NoLiquidity` means the quote path returned no usable route; it does not prove that the token has no liquidity or that the named solver caused it. Creation failures occur before settlement. A later cancelled order does not identify why a candidate solution failed.

## Scenario results

| Scenario | Eligible planned | Filled | Failed | Pending | Saved phase |
| --- | --- | --- | --- | --- | --- |
| solver-standard-pairs | 6 | 2 | 4 | 0 | finished |
| receiving-account-costs | 16 | 4 | 12 | 0 | finished |
| native-vs-wrapped-payouts | 12 | 6 | 6 | 0 | finished |
| solver-same-direction-25 | 25 | 5 | 20 | 0 | finished |
| solver-burst-sell | 84 | 24 | 60 | 0 | finished |
| solver-token-coverage | 52 | 5 | 47 | 0 | finished |
| solver-fresh-accounts | 8 | 2 | 6 | 0 | finished |

Saved placements: {'main': 48, 'cleanup': 15}. Successful scenario settlements (main + prerequisite acquisition, excluding cleanup): 48 distinct signatures. Selected-order batch sizes: {1: 48}. Shared signatures show batching; they do not establish direct CoW matching.

Timing: median 18.787s; longest 59.865s across 48 successful main/acquisition orders. Endpoints: journal placement → simulator-observed fulfillment, including polling delay.

<details>
<summary>solver-standard-pairs — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | SOL → USDC | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 2 | 2 | SOL → USDT | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 3 | 3 | JUP → USDC | sell 0.5 JUP; self | failed | acquire JUP error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 4 | 1 | SOL → USDC | buy 0.25 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 5 | 2 | SOL → USDT | buy 0.25 USDT; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 6 | 3 | JUP → USDC | buy 0.25 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>receiving-account-costs — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 7 | 4 | SOL → USDC | sell 0.0025 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 8 | 5 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 9 | 6 | SOL → USDC | buy 0.25 USDC; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 10 | 7 | SOL → USDC | buy 0.25 USDC; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 11 | 8 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | sell 0.0025 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 12 | 9 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 13 | 10 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | buy 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 14 | 11 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | buy 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 15 | 4 | SOL → USDC | sell 0.0025 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 16 | 5 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 17 | 6 | SOL → USDC | buy 0.25 USDC; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 18 | 7 | SOL → USDC | buy 0.25 USDC; self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 19 | 8 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | sell 0.0025 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 20 | 9 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 21 | 10 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | buy 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 22 | 11 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | buy 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>native-vs-wrapped-payouts — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 23 | 12 | SOL → USDC | sell 0.005 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 24 | 13 | SOL → USDC | sell 0.005 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 25 | 14 | SOL → USDC | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 26 | 15 | SOL → USDC | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 27 | 12 | USDC → SOL | sell 0.2 USDC; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 28 | 13 | USDC → wSOL | sell 0.2 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 29 | 14 | USDC → SOL | sell 0.2 USDC; self | filled |  | See full order ledger below (same row and trader). |
| 30 | 15 | USDC → wSOL | sell 0.2 USDC; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 31 | 12 | USDC → SOL | buy 0.002 SOL; sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 32 | 13 | USDC → wSOL | buy 0.002 wSOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 33 | 14 | USDC → SOL | buy 0.002 SOL; self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 34 | 15 | USDC → wSOL | buy 0.002 wSOL; self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-same-direction-25 — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 35 | 16 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 36 | 17 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 37 | 18 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 38 | 19 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 39 | 20 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 40 | 21 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 41 | 22 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 42 | 23 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 43 | 24 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 44 | 25 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 45 | 26 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 46 | 27 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 47 | 28 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 48 | 29 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 49 | 30 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 50 | 31 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 51 | 32 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 52 | 33 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 53 | 34 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 54 | 35 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 55 | 36 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 56 | 37 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 57 | 38 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 58 | 39 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 59 | 40 | SOL → JUP | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-burst-sell — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 60 | 41 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 61 | 42 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 62 | 43 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 63 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 64 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 65 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 66 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 67 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 68 | 45 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 69 | 46 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 70 | 47 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 71 | 48 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 72 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 73 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 74 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 75 | 44 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 76 | 45 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 77 | 46 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 78 | 47 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 79 | 48 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 80 | 49 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 81 | 50 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 82 | 51 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 83 | 52 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 84 | 53 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 85 | 54 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 86 | 55 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 87 | 56 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 88 | 41 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 89 | 42 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 90 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 91 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 92 | 45 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 93 | 46 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 94 | 47 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 95 | 48 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 96 | 49 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 97 | 50 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 98 | 51 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 99 | 52 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 100 | 53 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 101 | 54 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 102 | 55 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 103 | 56 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 104 | 57 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 105 | 58 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 106 | 59 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 107 | 60 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 108 | 61 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 109 | 62 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 110 | 63 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 111 | 64 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 112 | 41 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 113 | 42 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 114 | 43 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 115 | 44 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 116 | 45 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 117 | 46 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 118 | 47 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 119 | 48 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 120 | 49 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 121 | 50 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 122 | 51 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 123 | 52 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 124 | 53 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 125 | 54 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 126 | 55 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 127 | 56 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 128 | 57 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 129 | 58 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 130 | 59 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 131 | 60 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 132 | 61 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 133 | 62 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 134 | 63 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 135 | 64 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 136 | 65 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 137 | 66 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 138 | 67 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 139 | 68 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 140 | 69 | SOL → USDC | sell 0.0025 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 141 | 70 | SOL → USDC | sell 0.003 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 142 | 71 | SOL → USDC | sell 0.0035 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 143 | 72 | SOL → USDC | sell 0.004 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-token-coverage — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 144 | 73 | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 145 | 74 | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 146 | 75 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 147 | 76 | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | sell 0.01 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 148 | 77 | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 149 | 78 | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 150 | 79 | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 151 | 80 | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | sell 0.01 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 152 | 81 | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 153 | 82 | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 154 | 83 | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 155 | 84 | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | sell 0.01 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 156 | 85 | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 157 | 86 | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 158 | 87 | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | sell 0.01 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 162 | 91 | SOL → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 163 | 92 | SOL → [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 164 | 93 | SOL → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 165 | 94 | SOL → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 166 | 95 | SOL → [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 167 | 96 | SOL → [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 168 | 97 | SOL → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 169 | 98 | SOL → [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 170 | 99 | SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 171 | 100 | SOL → [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 172 | 101 | SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 173 | 102 | SOL → [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 174 | 103 | SOL → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 175 | 104 | SOL → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 176 | 105 | SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 177 | 106 | SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 178 | 107 | SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 179 | 108 | SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 180 | 109 | SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 181 | 110 | SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 182 | 111 | SOL → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 183 | 112 | SOL → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL) | sell 0.005 SOL; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 184 | 73 | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | buy 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 185 | 74 | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | buy 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 186 | 75 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | buy 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 187 | 76 | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | buy 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 188 | 77 | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | buy 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 189 | 78 | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | buy 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 190 | 79 | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | buy 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 191 | 80 | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | buy 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 192 | 81 | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | buy 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 193 | 82 | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | buy 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 194 | 83 | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | buy 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 195 | 84 | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | buy 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1); self | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 196 | 85 | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | buy 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 197 | 86 | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | buy 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 198 | 87 | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | buy 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB); sponsored | failed | quote failed: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

<details>
<summary>solver-fresh-accounts — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 199 | 113 | SOL → USDC | sell 0.1 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 200 | 114 | SOL → USDC | sell 0.1 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 201 | 115 | SOL → USDC | buy 10 USDC; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 202 | 116 | SOL → USDC | buy 10 USDC; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 203 | 117 | SOL → USDT | sell 0.1 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 204 | 118 | SOL → USDT | sell 0.1 SOL; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 205 | 119 | SOL → USDT | buy 10 USDT; self | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |
| 206 | 120 | SOL → USDT | buy 10 USDT; sponsored | failed | main error: 404 Not Found: NoLiquidity: no route found | No order ID: quote failed before placement. |

</details>

## All recorded orders

<details>
<summary>Main, acquisition and cleanup order ledger</summary>

| Row | Trader | Step | Time (UTC) | Order | Final saved/API status | Debug tool | Settlement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | main | 2026-10-17T07:55:12.017Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7d89e1c8d8a53e024f421c279e068f92389a047aa8c4352b4360177814c1c7c3) | [Transaction](https://solscan.io/tx/4XS6xSwHfiJSW1xWVw1MaxBv73h5p9C5STUQU4twRhfhiBdAter5Bo2Z2gTngZFseb2PuLRs5UKK7mJGVCapNthm) |
| 2 | 2 | main | 2026-10-17T07:55:12.099Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfc8833f9c2d0c2a5a462434f7dabdb266aa441b231d7439537eda2acb24af904) | [Transaction](https://solscan.io/tx/5Apz4X44eGFvxJ5e6UXvfYrHEMK4BqXzJcFZUYYhYaGwF7aCWzFMtJitTQyJDKtNUQgUewyDXPZnzBDeA9q3LDpV) |
| — | 2 | cleanup | 2026-10-17T07:55:22.536Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5786b676fb6b2c6a4a8d6d55bcb562e3c20e5c53db0d57b38cb09b54b158d02a) | [Transaction](https://solscan.io/tx/83T1cMPZg8Ta98ZWvhH1vfBTzzXZQK2zua851GGBRtuRhEoKAmf1QTk23fXDBWyL2GrZeRa4qpJKqU8ZhbfQnsZ) |
| 7 | 4 | main | 2026-10-17T07:55:51.338Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa78a1814556b223e9f32f8f930fd8165737f64e7a0faa39ae391f3838380cba6) | [Transaction](https://solscan.io/tx/2vN1EpvBjmgLJzjPZBv9Gi4f5pRt6e8YaTWwA5dz7CyoGupX8pupWxnJfhNdeae9XvH8MGQAfaZ7rRD52WYp9vQF) |
| 8 | 5 | main | 2026-10-17T07:55:52.858Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0176a947c0f0fd608a39e4563c7159015808eb76da7ed92079296c6806c5ceca) | [Transaction](https://solscan.io/tx/2y2mLm3dZsWtJy3nYkmLsStPS5z8T7UY1HhvJ9XydcLxZfk3t6DvaeZu7QdSL1xp88qY8tJDpAA2hc4q9DEiWpUP) |
| 16 | 5 | main | 2026-10-17T07:56:04.615Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2892e36a20a0b9675189329044f29cd4c515c940985c675ea2f3fc0916c884ab) | [Transaction](https://solscan.io/tx/5XFcVPzwWZ19tMkqcdKw1zEWWBW1mGphoNsDuYChQnf87XLqcXAwkYUZS14r6J7XGdZHksxzqc798fhw1xgzAy1K) |
| 15 | 4 | main | 2026-10-17T07:56:23.605Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc291175e5e86bd3469df912923dc99c127dad3c33cb175d270b9ea0038da9931) | [Transaction](https://solscan.io/tx/3T6yNM82YodkPiYNKBzerdPTFx97sBjS7CdzCbpSYtzbKvqXE5uYtfeh5pagUNeH15Tdduq9dajRxHCP2soBrYCk) |
| — | 4 | cleanup | 2026-10-17T07:56:29.555Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd25c6b6048caf8b6fd57bb2272717f2e5c89093e1ea18e79146f0a5c984206dd) | [Transaction](https://solscan.io/tx/43iPv9xiPErAYCejUKHRVQcQCSNr4G3yY44Jih3GZrAgwD1ViUaWQTPWKL19yw9vR6kqULNQGEcrGtY3oRNiJKAX) |
| 23 | 12 | main | 2026-10-17T07:57:02.747Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x57a45bbbc9e514774ee555f708f720afedc27924a127feef226bdc71086126d0) | [Transaction](https://solscan.io/tx/Ep1jTKaqe7xZRqeCjR9hSaRgvrkwnT2jK6NxdxceyjWYUGasfUsQszWAAJsiVvdMjKKfzQmXAss5Sbq6KieL9mC) |
| 24 | 13 | main | 2026-10-17T07:57:02.834Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2edfa152f2c8a1f9be6d4fe7159e4ed0b6cb946261da51ff92626f6194b27ab3) | [Transaction](https://solscan.io/tx/2cet8XSuMg5xJz72tNyG3nu9jwkiRXjnvYdkmuwqipWHnNXtgYnFS13EeWgTvjFCyRghqwQHA8Mjya52GcMScEe6) |
| 25 | 14 | main | 2026-10-17T07:57:04.226Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x99d5142ede5c2393410a23dde1663ee65b4e122bf19aea51c4063ffdb5735eef) | [Transaction](https://solscan.io/tx/ct4Ngrf6Vzr2mjGkmjwndjm7mcgBiC6LeoRrZmt6py7682dPoSJNzq6CpNma6DugsbMiXM5MLJe7Z1TTmixGdaK) |
| 26 | 15 | main | 2026-10-17T07:57:04.525Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x100ee1d892c5f15427739c670bf8bc0093ffd8aed8979d62c276ec989375f4a9) | [Transaction](https://solscan.io/tx/3oBwPVo8VVhAk7j9AXYGsCjqsXMmxMaYMwHNZzKELD1Z9hsNWw2JQtKthgNf8oHM74G6JScMFNT8G8pCATx8ioiM) |
| 28 | 13 | main | 2026-10-17T07:57:16.072Z | USDC → wSOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xab080a365bba0511eac390ea65d27984e8205b80eb375d7a5df54348b396f1a1) | [Transaction](https://solscan.io/tx/36GDV6C1869M9GxziktCKVwn4SjTXjp1hqsMS9Fykzz26scpu26zxH31UbDdRmRvFFHt2up8msd6z2ZzRz4fMuAE) |
| 29 | 14 | main | 2026-10-17T07:57:27.670Z | USDC → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4d1686f09c7e6afabd0e02d1250e47cde0f6fcf070144fbb94023905470976d5) | [Transaction](https://solscan.io/tx/49XVCUBk2Mde1cH2dQzLJQVah1CKRk3JAqpryPLMUJEyY3vZ97XSkPF2LyRAjLn87K4fPxhEVhRbC7jSkzWC1N7g) |
| — | 15 | cleanup | 2026-10-17T07:57:37.092Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfbff34697d43b35824034f27877e8018fbfb24ae53f81ff193f0ad5716cc5e0a) | [Transaction](https://solscan.io/tx/4wRSPuYjCrpSHg3ngvFeAV74rYd26qSqvobQ7nYLMzVhgD9SPY9WtKQ6rhcfXnMd9eHVjdVf9QwgCGr7YxUPggNm) |
| 38 | 19 | main | 2026-10-17T07:58:07.481Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x13fbb68cb4133a22c3d17245c846925fe1b0e6d94549c1f86f0f2446c2791171) | [Transaction](https://solscan.io/tx/35fnmmBFfpnf8bECC92VCXVTeFSRerZ1HEt1kL1sRKW6Zr3F5GT2B2FszdacFm4wbPMtD44ZFP2wYF8T4YfNyqhk) |
| 39 | 20 | main | 2026-10-17T07:58:07.578Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb952693ae99cfc91a9a883c9601ebaeab8de623436d06a19f307bf1d33c8fbd8) | [Transaction](https://solscan.io/tx/3qKtmYvesbpt4WMF9A6G47RVZCcFFhVzB2o2b6VyEchaVY3Hts9P8Go8f2Mtmmgy9SyxkpXYbgiYeioVn3riVSqQ) |
| 35 | 16 | main | 2026-10-17T07:58:08.229Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x24ab5311c04926bbb7eb03dba5ff48327ca6bc5978d569d5f1ec6b4cedf4a17d) | [Transaction](https://solscan.io/tx/32zYNmdJuyrnCfCojpueusfkjBeRiB7vdsajVQ3MCZ6TX7hPWjrTrSBH9JpgMAG2wfjA2jXHxejujnKJQSq3Z58A) |
| 36 | 17 | main | 2026-10-17T07:58:08.323Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0d08bc56fba18c7ab0f0a0febcfb75453f3ba51471addf79a47c328d0f7aab8f) | [Transaction](https://solscan.io/tx/4FN5NTwfQHJ3m71kVuB1nvjDWgA3Ufy9s84uZJaeJNTE9MZfpjLoBioyTHMd3tSyZnBErCzzDDaDGsbnerQt52kz) |
| 37 | 18 | main | 2026-10-17T07:58:08.421Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf6700d63a1ab6f6ce90188d3f2d2be184cf9d68f30ce90b68e3c31bed0983346) | [Transaction](https://solscan.io/tx/4uHoniN6SXVT9UD8KT3u3pu4PMbtCZZteJbpsF5zmpxXnxjw5A9PV2zmzJ1aWh9NcJXbuRcsxbP9knrh4zk3XNfF) |
| — | 17 | cleanup | 2026-10-17T07:58:46.524Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1d8c6c685049d0a76461ddcadd709cc5577fd239336af812d1762aa0887f670d) | [Transaction](https://solscan.io/tx/WkhyxYTGxr2PUtNnG8w1nMoStxorNULLa1qtjLmJUWzncSG1wuz2qC2UYtnyQVyYNph53RxrApHesbDhribeuDy) |
| — | 18 | cleanup | 2026-10-17T07:58:47.779Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd93584e5b40a1f3105b7c8ec2d6df94b9fdc87b5bb6065b8c507464241df4b16) | [Transaction](https://solscan.io/tx/4LzVbScubdYUrg8BAJNYhpjanHz5jtNFvAFCcRyogTjXjabsSpSzGoy9T5P2FcWKQihAjRAk7U6iB67fHtLWd9NH) |
| — | 38 | cleanup | 2026-10-17T07:59:24.990Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7cffbf0e46cb25465af12c518e60ad729e89037a748e667843250ae6a4f1a255) | [Transaction](https://solscan.io/tx/2mYE8Ahekktqa9FVxBcnhkPoLLLhuGxvPjd9iM7EnHqhHLAnNUq3PJJE5N9AWaSDEQWesLjB8QfV3dQNgu3D1vYJ) |
| 60 | 41 | main | 2026-10-17T07:59:56.688Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfd131bda7c360610c2d9566377154a43c0b479d2119994d4f680387bceafc155) | [Transaction](https://solscan.io/tx/3aAgNz2zg72CZqCvUc7MMYSQ1Y1baCrr4zt4R4NNAJuxm65H5VqN7WEapLqv8q3npkXfyQc2jiM7HDixGAMyEvSg) |
| 61 | 42 | main | 2026-10-17T07:59:56.984Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xed02ca74165d3dabe153e1746f43f41454566e8b701129724af44e73363ce49f) | [Transaction](https://solscan.io/tx/3ePqqExfYjRiRGTWCZhytW7jATq9sx7o1y8nCAwxUiefGu9YN78d9e2dG1g2UsgcJiQvrZwcXt1NLVQrjhBgqAjB) |
| 63 | 44 | main | 2026-10-17T07:59:57.392Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x99bb2d8bc3859f6c4105bcd8f43387c4b2dc8c8324f69e8a8c172e6b170804c0) | [Transaction](https://solscan.io/tx/LGyDdn3tcsBPvyYUQEUVexRtrnz8fcW8mgMCuRLeYecZVu5rvVyJmLKFrPPJJ5d8pnr9agvSWe4jmqUkc2Mcppg) |
| 62 | 43 | main | 2026-10-17T07:59:57.464Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3fd99e77d799fba1d0be7e01cac22c896273401e3a033781e965ee792907a340) | [Transaction](https://solscan.io/tx/3XKPknxhF7P229BTrv5Ff5FhhgGv6FWWseggMkpXrwT3tubZLZWhaE1ZhkvJWnBCkfvxcY85VzAuRjEX3NSdr9vc) |
| 69 | 46 | main | 2026-10-17T08:01:26.283Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc7d4ad7c65898258665fb655889d4213a469d3bfedbddaed1867f66004e965ec) | [Transaction](https://solscan.io/tx/2eoBHEVLHtVYatizFvuaicPNQFYfh4HmdVnvpvvuzV8FPaJkRyk7R4XSDp5Kqxmj3NJVQ8HXvCGWTLuKknqg7Trc) |
| 68 | 45 | main | 2026-10-17T08:01:26.476Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x87b3e94711603764fa24cfce1331d2f0c728ff191b871e48c366d4e57a7c05bc) | [Transaction](https://solscan.io/tx/G4q8X4HHcR1fgx7wWcxVeyPVp8ZnqqMciPnyPA6mP2PWrtJ1gcuU5488Etc9wWHYiWjJ5SZiQdUQHftPtG5zghv) |
| 70 | 47 | main | 2026-10-17T08:01:26.677Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x67cbe16f739e90d895c7d1c5bf1cb7bf7d1de552862e71dd21a4de7b087a8493) | [Transaction](https://solscan.io/tx/2sYL6TWWf6t9WyjtVvpx68o6YjCEAM74uoV93MCfyou1HQhVPGZPYSkgdJm2onVzSN8TvGkobazT3p5oHfZ8Ne82) |
| 71 | 48 | main | 2026-10-17T08:01:27.826Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8e8e3375fb5922e9c67638eeb04d25d1a07a81c60ecc02c3750b24c4015899e5) | [Transaction](https://solscan.io/tx/2ad2upghJsdqMubHLLgPTbF7PCsynUp1yWDLdgLAsN6EUHFZRwZnnk6mHsCwfvQdC3WSoXuzauP219KaphpdDp7C) |
| 67 | 44 | main | 2026-10-17T08:01:27.925Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1b871fcc25e6e6cf12b76d134ef66a43cf68fad377efe9fc1db6ed7ed9ac6661) | [Transaction](https://solscan.io/tx/5fDFsftT8bzNfF4FgkTCESEKCsqV5AGkpgAYrJL8A26Gdh1Lf98pG9QbQsoPWHCytr1vcfGAVKsX5hWmGh4K5435) |
| 80 | 49 | main | 2026-10-17T08:02:57.277Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbf4b05f23c96f974727b824065d877aaf4e3dde65255cf4bb4dbc33bf3701f7e) | [Transaction](https://solscan.io/tx/aPbRNfQqmM9GE3ugvrp9kFcy4yc84WWkp61HDQkYCVmWuJrk46DKNeSjRXKoyaHNaYKydhoqm4rY6L5NfujbCJx) |
| 81 | 50 | main | 2026-10-17T08:02:57.382Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe7dab9123aba5302b1795419fd6c0743369b242f572e7c2495310027583ba5ec) | [Transaction](https://solscan.io/tx/44SGCiZG1A5ctz4M71cn647m1hKuD7ewoyyNF9zs2btsC7LWDiBZyE8D6v7jD1fxjYYuc8hgbCGPH3pR3MMSGyD3) |
| 82 | 51 | main | 2026-10-17T08:02:57.476Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x91426450eea1ecada8fcc45fb692e4ba2afbb315f9efafbc74a45c10dc978a2b) | [Transaction](https://solscan.io/tx/3PkzX8mmfr69xZ7tFnbsiDiacrD4nbn36AEXGnuVvvEzNfVgrBxjH3F466afKX1ysbLNcqSJxka9AL2qc4vHTwut) |
| 84 | 53 | main | 2026-10-17T08:02:57.680Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7f3dedcfc0b4d192ef7ec420c5e9a7ec90dbd7ea1b8ef96d04ebc84da180c533) | [Transaction](https://solscan.io/tx/32gSutvV1CKg2RSpp94hFgvAJ9jThsvjK691Qv2nQfono6uHuJKDFwsp6eEWJ3RmuUdsgbPMBYmg9M6g8Ho66Bw9) |
| 83 | 52 | main | 2026-10-17T08:02:58.619Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x933c84e2eef10233b14af965b55c836e1e7af6404bd8cbe96c2a731cbee6eebf) | [Transaction](https://solscan.io/tx/hnUJB85sXinGSNBEnJDndXgNtXG3zVamFpVJCJwTMhNGjhdmrWuUxApVNh1PQgszzmvkKQ57JZ4ubVkyC4TG7t9) |
| 88 | 41 | main | 2026-10-17T08:04:28.278Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x61f6a349b502f827aa88930d007bd00e576dd2c6e678ba6630cb1ac46bfaa320) | [Transaction](https://solscan.io/tx/3WUy6PjiLG8DKrUUMrEuiLeWDN6jDmuZR4Wh94adp1CkoWDJrB7wWCMmsVLi4wm4DELS2xxgorTJTTtmFWixxWcY) |
| 91 | 44 | main | 2026-10-17T08:04:28.378Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1f73c600be6491ef01eb691ffa1968a26f3f04e7f249b7107208baf8869893e8) | [Transaction](https://solscan.io/tx/38X4SbFFZzFx75aDKK7Xb2DoqbafP1Z39s1T8gNM65VU5E1n3XejhSbkZpZNj9DaGF2j62GrTC5uM13ri81CGM9R) |
| 95 | 48 | main | 2026-10-17T08:04:28.480Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x457dcf6145666f3e2ceb338e1c2289407a5b72abcef9ea28c1455a3c6a356e47) | [Transaction](https://solscan.io/tx/5capxcCDvZqX1j6M2LWdiyn3va1paC6DcVPxAwMxAEt2brCBBtebx3v4FGjMWarqYsf3AvMKYRBAPMCJGHG2UUAJ) |
| 101 | 54 | main | 2026-10-17T08:04:29.123Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd5c1b50132ee0620f4c3ed7bff04a4012c4e684ba52091163f6c15f134422fd6) | [Transaction](https://solscan.io/tx/2jgAfMUB13F8E3YRryaXB5AVD6sJeTzUHy4aXXQQnLpBX2XUCnQkP9XLzdWvSTEh4uZJoKsdUnPuLX62fVZYaRxL) |
| 89 | 42 | main | 2026-10-17T08:04:29.219Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5b94f29d583aae09677e2e59c5d0f8e3d719f367fe27b42486ca0bb48eba7a26) | [Transaction](https://solscan.io/tx/2AqHm84MKPSJBAcM8665i1rozowujV1JZVSj2kkz4ea4Gvp6BSg6iirdMq567neKGiuj2ymGaQVbnEpZk5xNU1tN) |
| 116 | 45 | main | 2026-10-17T08:05:58.875Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x875e01334a7497f9df5e124f222d60c2a54471769c6a0d01f3a978b671c75184) | [Transaction](https://solscan.io/tx/2QvGaPdT1jm54Swk1drTBH54fsDADcmCw5RT97a5eTEFgDUrknrGN5bcapRdQSCsrvRj2ELhD7caV7YFhBF8tHYT) |
| 121 | 50 | main | 2026-10-17T08:05:58.979Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbd57598a66d268d3122d8f8c591f5d188cac3432805a81052c90c4d907b3d0d4) | [Transaction](https://solscan.io/tx/h6eJYyvTYDCCDzen5cBvXNGbVS19CPaQENVfppxPpvyvTMkBqxYF4tcLTr9UiqUzkiPq8px4CzVyp6AZCma3bjR) |
| 131 | 60 | main | 2026-10-17T08:05:59.178Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x514a9c7f1cfd54075d79aa5a3d938095cda43153ec1d221f00f2feb440fd0362) | [Transaction](https://solscan.io/tx/3PjPxqLuyuQYsmQxadbCXYa76fy2VVgtyzDgFp7eFvn7q8prw1AhQ7xcF632QKonaTbb8DEj9HQVFtqhDspqsQmZ) |
| 130 | 59 | main | 2026-10-17T08:06:00.132Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xdf3ead54f5b9a6233b9a5152ebde13925150490ab413c841ddb43333d0fbf833) | [Transaction](https://solscan.io/tx/3H5j7KZKyNPXKJ8Aj4ke7t1SpQneiw77JmtVhAQT9XgqserS9vb5892dAFC1cEpFGsDgWGgVaVHmA93WX2KgM29C) |
| 135 | 64 | main | 2026-10-17T08:06:00.323Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6cfa4ad0642ec4f7c8647febeb9bce07426cc1df9c3cc5bbbf1f30628d84a805) | [Transaction](https://solscan.io/tx/5Fn12FyeFVVoq9nCUwGtdWjTaV82NiyKFGC1Hv6QzJMTSmcgfHEz69GwUhqfZidvEhzcL741zJXQZaLXen3gv4uR) |
| — | 44 | cleanup | 2026-10-17T08:06:54.798Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x71c37fea648d711bdc8c214b3a2b5b136486153c59c9a23add396c6e329ba4e3) | [Transaction](https://solscan.io/tx/32H2pzdQVk7zBBfRs5Uo9KKuZUhfmfoWwHoQfnCe7a67Gzh4PTS9rJ1nXSaFSZkGeRm6kz5v2cQBymSfur5dc7pK) |
| — | 47 | cleanup | 2026-10-17T08:07:00.687Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xddd44ff35826c49a1701465f2e419cf77838ddd55b1fc252f30f821b1d449b8a) | [Transaction](https://solscan.io/tx/t2GUceLHk4jRfZ3qnuDRfbnMNyGK4o24Th2HJrzTKofoSjJ5sJfuooDKXcfwQ3RaQ4SoGpJMG2fgCQpeHELGXRs) |
| — | 50 | cleanup | 2026-10-17T08:07:07.881Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x52f1e19456668f945a251c1dec608557bd6b00d012281b12e5783d6abd7dec90) | [Transaction](https://solscan.io/tx/46arwGGfDC33d9PWJuieBbAaqS1W7fP8s2YG9rfweKLWxfYDdhpbxk511v6LD5RuWg8JfGPNqfG1xggKxemmdfvE) |
| — | 59 | cleanup | 2026-10-17T08:07:33.703Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x630c774dee953855e73aa1022780f98fb4437552fe81d5fefb52e763bf19522c) | [Transaction](https://solscan.io/tx/3niqdHGVSdiFYNFno7r25inZXHrUR6tLEay3EKCiNcZoPuSgueL7PHQqa5NehU5XunbHEyd4QmEajVPDDnzrhRsi) |
| — | 58 | cleanup | 2026-10-17T08:07:35.645Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xaec74d144355ba0d7cf77e6fe8c5a93e59c143cd01e243a1bad8b491e55f8568) | [Transaction](https://solscan.io/tx/nk7at5CNRe3uF6BKCyRnGZBfHofLPRZDs6MMqcYtFnSTKAx6p24pgXeNRR8nWyUqe7HVzPbUFYh9HqpB2heDHnX) |
| — | 65 | cleanup | 2026-10-17T08:07:47.511Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcc4c1ba19cafb09d8a690a444a43de1ce05b2b7f0bbfe72901f1fd672a0260f0) | [Transaction](https://solscan.io/tx/5Xg6wCRnmYJJdtBpic7UiEFS8cVmVfX7d2uWrRV2STHxfACtAcUFkA5RRfhkZNjZ7AMKebhGVxrB4enPDwMszD2R) |
| — | 69 | cleanup | 2026-10-17T08:08:01.821Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x65626aeb7fd83ef62e12b73d914447135c544d31a9c1dc3c4521db989fe26e0d) | [Transaction](https://solscan.io/tx/5tL6jcB5nrWjh6FXecEy9WAr2n6T1FDJqmTGP82f4y3vKfgfonVZaAycj3RAzmQLkSDMrmfPguMJmv74g8YyvCmZ) |
| 144 | 73 | main | 2026-10-17T08:08:39.024Z | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x04f1924f064763d555e9a5dd86a40c956bd92c9e8f9b239d22d4fd718b8d1b1b) | [Transaction](https://solscan.io/tx/5usuZxw1v8XZRWnnshmrRQtC4rJ26EP5yL2cRB7XjyKL3DxdANspkdZAArEg5jaPvxTAW3uhTbbUwSXAnrLsisg7) |
| 145 | 74 | main | 2026-10-17T08:08:39.098Z | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x23a1ef9f95206201727808c4859d921fe886bf9ff32a6acb2e3be10a3a1777b3) | [Transaction](https://solscan.io/tx/4JmVKa95SP7AvR72oukmVzyFQ1CxuDJcipfNBiLT3GcT56AWv4UsqGmtf3rdVXRyVNkC46F47RJDcSvfCigg6CKL) |
| 146 | 75 | main | 2026-10-17T08:08:39.207Z | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa5f99fb1844619a7e1b12fa3a9c6e56d303d72590608ca661463d3a98b355258) | [Transaction](https://solscan.io/tx/4Gwr8CAmc8cHDRZ3dM6W6gfPXLGKAJH62dtEbjjr6DpVZVJH7xBhHi8NAJCsXDFtecf6NfWspZyF8joWEbFgDiYp) |
| 148 | 77 | main | 2026-10-17T08:08:39.426Z | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x912784cd70a1ac7ce2b97074763e7604473dc611bd89675c65b79b5a59f724a8) | [Transaction](https://solscan.io/tx/5E5ntw8DKNGDHemzsmPo1XPf6WuXFQpVeM4X8HsMMYtwYoK73kQYR5kd21K6PTr8JXqmvfSuZm2WkBox9tvBTJEd) |
| 147 | 76 | main | 2026-10-17T08:08:40.741Z | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x69ec4aafcf35b3fd0a812b022fd3f9afcfe37746d5b7a38eb7f0fd2cbe7c9d88) | [Transaction](https://solscan.io/tx/WCrReZMZSFHrYLa7wSiNDhYBX4RCHWy4hTwFkbG5uRhsP3TTguyigzme4fypfdRvg5NJFL5uMeWbV6djx9hBd65) |
| 199 | 113 | main | 2026-10-17T08:10:14.796Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xdcdbc85b9ec3602671bc243b39c6c9d6d75c3519e9cf5a124522cb655e6640d7) | [Transaction](https://solscan.io/tx/66NJ6VkF4VcoU2PSDdiDoYQDLdsDUxuRWCs4KEHVeC7UMJBs4guW91bQNY5BddFi2JswraEjfxXkajzhdxDq8odH) |
| 203 | 117 | main | 2026-10-17T08:10:15.635Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8ba749871f4d30c20e8156f535615c1c949953b2660f8c1af209a327a032acda) | [Transaction](https://solscan.io/tx/3mFC1Yix6xSDbv6gm4rvDjvtEXFUguczXuoBRoJgXw3jsZJ9H3Yzd6Wa2ARA9tmkV5ArhbSrsYpj8MsdLxGorUTv) |
| — | 113 | cleanup | 2026-10-17T08:10:40.032Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7db66ed1896798fb96632c82ee4b76296811c19c632162630207ef035c47049e) | [Transaction](https://solscan.io/tx/TrPifqgPW8whA3vY6SpUCCEkTv7qFpfzHn51M8B9ZYNae11MzzEYvzTdoF8GtnKHfDNtzf5Kp1BxEpuamPFKDVF) |
| — | 117 | cleanup | 2026-10-17T08:10:43.774Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa6012a70c4ec2e61191f95aa4934c52bfb459f35dd20b06cb95da8cdc04630d8) | [Transaction](https://solscan.io/tx/ZZHDzgQUmyKCC1m65D7RWongPYbTdx4Qjr4WEXbDicbxbfPtYay53m2wLNfbLTVohvdfUM3tGxDXGpbJavTvbse) |

</details>

<details>
<summary>All placement and quote errors (unsupported fee rows excluded)</summary>

| Row | Trader | Step | Stage | Time | Exact error |
| --- | --- | --- | --- | --- | --- |
| 3 | 3 | acquire | quote | 2026-10-17T07:55:16.841Z | 404 Not Found: NoLiquidity: no route found |
| 11 | 8 | main | quote | 2026-10-17T07:55:51.536Z | 404 Not Found: NoLiquidity: no route found |
| 12 | 9 | main | quote | 2026-10-17T07:55:51.783Z | 404 Not Found: NoLiquidity: no route found |
| 9 | 6 | main | quote | 2026-10-17T07:55:51.914Z | 404 Not Found: NoLiquidity: no route found |
| 10 | 7 | main | quote | 2026-10-17T07:55:52.094Z | 404 Not Found: NoLiquidity: no route found |
| 19 | 8 | main | quote | 2026-10-17T07:55:52.787Z | 404 Not Found: NoLiquidity: no route found |
| 20 | 9 | main | quote | 2026-10-17T07:55:53.123Z | 404 Not Found: NoLiquidity: no route found |
| 30 | 15 | main | quote | 2026-10-17T07:57:08.054Z | 404 Not Found: NoLiquidity: no route found |
| 27 | 12 | main | quote | 2026-10-17T07:57:22.185Z | 404 Not Found: NoLiquidity: no route found |
| 32 | 13 | main | quote | 2026-10-17T07:57:29.347Z | 404 Not Found: NoLiquidity: no route found |
| 40 | 21 | main | quote | 2026-10-17T07:58:04.923Z | 404 Not Found: NoLiquidity: no route found |
| 41 | 22 | main | quote | 2026-10-17T07:58:05.057Z | 404 Not Found: NoLiquidity: no route found |
| 42 | 23 | main | quote | 2026-10-17T07:58:05.331Z | 404 Not Found: NoLiquidity: no route found |
| 43 | 24 | main | quote | 2026-10-17T07:58:05.531Z | 404 Not Found: NoLiquidity: no route found |
| 44 | 25 | main | quote | 2026-10-17T07:58:05.730Z | 404 Not Found: NoLiquidity: no route found |
| 45 | 26 | main | quote | 2026-10-17T07:58:05.851Z | 404 Not Found: NoLiquidity: no route found |
| 46 | 27 | main | quote | 2026-10-17T07:58:06.132Z | 404 Not Found: NoLiquidity: no route found |
| 47 | 28 | main | quote | 2026-10-17T07:58:06.254Z | 404 Not Found: NoLiquidity: no route found |
| 48 | 29 | main | quote | 2026-10-17T07:58:06.446Z | 404 Not Found: NoLiquidity: no route found |
| 49 | 30 | main | quote | 2026-10-17T07:58:06.736Z | 404 Not Found: NoLiquidity: no route found |
| 50 | 31 | main | quote | 2026-10-17T07:58:06.841Z | 404 Not Found: NoLiquidity: no route found |
| 51 | 32 | main | quote | 2026-10-17T07:58:07.038Z | 404 Not Found: NoLiquidity: no route found |
| 52 | 33 | main | quote | 2026-10-17T07:58:07.336Z | 404 Not Found: NoLiquidity: no route found |
| 53 | 34 | main | quote | 2026-10-17T07:58:07.442Z | 404 Not Found: NoLiquidity: no route found |
| 54 | 35 | main | quote | 2026-10-17T07:58:07.642Z | 404 Not Found: NoLiquidity: no route found |
| 55 | 36 | main | quote | 2026-10-17T07:58:07.929Z | 404 Not Found: NoLiquidity: no route found |
| 56 | 37 | main | quote | 2026-10-17T07:58:08.057Z | 404 Not Found: NoLiquidity: no route found |
| 57 | 38 | main | quote | 2026-10-17T07:58:08.337Z | 404 Not Found: NoLiquidity: no route found |
| 58 | 39 | main | quote | 2026-10-17T07:58:08.449Z | 404 Not Found: NoLiquidity: no route found |
| 59 | 40 | main | quote | 2026-10-17T07:58:08.639Z | 404 Not Found: NoLiquidity: no route found |
| — | 16 | cleanup | quote | 2026-10-17T07:58:54.531Z | 404 Not Found: NoLiquidity: no route found |
| 65 | 42 | main | quote | 2026-10-17T08:01:25.915Z | 404 Not Found: NoLiquidity: no route found |
| 64 | 41 | main | quote | 2026-10-17T08:01:26.209Z | 404 Not Found: NoLiquidity: no route found |
| 66 | 43 | main | quote | 2026-10-17T08:01:26.317Z | 404 Not Found: NoLiquidity: no route found |
| 85 | 54 | main | quote | 2026-10-17T08:02:56.063Z | 404 Not Found: NoLiquidity: no route found |
| 86 | 55 | main | quote | 2026-10-17T08:02:56.177Z | 404 Not Found: NoLiquidity: no route found |
| 87 | 56 | main | quote | 2026-10-17T08:02:56.545Z | 404 Not Found: NoLiquidity: no route found |
| 73 | 42 | main | quote | 2026-10-17T08:02:56.631Z | 404 Not Found: NoLiquidity: no route found |
| 72 | 41 | main | quote | 2026-10-17T08:02:56.770Z | 404 Not Found: NoLiquidity: no route found |
| 74 | 43 | main | quote | 2026-10-17T08:02:57.032Z | 404 Not Found: NoLiquidity: no route found |
| 75 | 44 | main | quote | 2026-10-17T08:02:57.148Z | 404 Not Found: NoLiquidity: no route found |
| 79 | 48 | main | quote | 2026-10-17T08:02:57.344Z | 404 Not Found: NoLiquidity: no route found |
| 78 | 47 | main | quote | 2026-10-17T08:02:57.635Z | 404 Not Found: NoLiquidity: no route found |
| 77 | 46 | main | quote | 2026-10-17T08:02:57.756Z | 404 Not Found: NoLiquidity: no route found |
| 76 | 45 | main | quote | 2026-10-17T08:02:58.028Z | 404 Not Found: NoLiquidity: no route found |
| 94 | 47 | main | quote | 2026-10-17T08:04:25.918Z | 404 Not Found: NoLiquidity: no route found |
| 92 | 45 | main | quote | 2026-10-17T08:04:26.115Z | 404 Not Found: NoLiquidity: no route found |
| 100 | 53 | main | quote | 2026-10-17T08:04:26.444Z | 404 Not Found: NoLiquidity: no route found |
| 98 | 51 | main | quote | 2026-10-17T08:04:26.543Z | 404 Not Found: NoLiquidity: no route found |
| 97 | 50 | main | quote | 2026-10-17T08:04:26.806Z | 404 Not Found: NoLiquidity: no route found |
| 96 | 49 | main | quote | 2026-10-17T08:04:26.917Z | 404 Not Found: NoLiquidity: no route found |
| 104 | 57 | main | quote | 2026-10-17T08:04:27.211Z | 404 Not Found: NoLiquidity: no route found |
| 105 | 58 | main | quote | 2026-10-17T08:04:27.316Z | 404 Not Found: NoLiquidity: no route found |
| 106 | 59 | main | quote | 2026-10-17T08:04:27.601Z | 404 Not Found: NoLiquidity: no route found |
| 107 | 60 | main | quote | 2026-10-17T08:04:27.717Z | 404 Not Found: NoLiquidity: no route found |
| 108 | 61 | main | quote | 2026-10-17T08:04:27.929Z | 404 Not Found: NoLiquidity: no route found |
| 109 | 62 | main | quote | 2026-10-17T08:04:28.204Z | 404 Not Found: NoLiquidity: no route found |
| 110 | 63 | main | quote | 2026-10-17T08:04:28.407Z | 404 Not Found: NoLiquidity: no route found |
| 111 | 64 | main | quote | 2026-10-17T08:04:28.536Z | 404 Not Found: NoLiquidity: no route found |
| 102 | 55 | main | quote | 2026-10-17T08:04:28.772Z | 404 Not Found: NoLiquidity: no route found |
| 103 | 56 | main | quote | 2026-10-17T08:04:28.931Z | 404 Not Found: NoLiquidity: no route found |
| 90 | 43 | main | quote | 2026-10-17T08:04:29.207Z | 404 Not Found: NoLiquidity: no route found |
| 93 | 46 | main | quote | 2026-10-17T08:04:29.317Z | 404 Not Found: NoLiquidity: no route found |
| 99 | 52 | main | quote | 2026-10-17T08:04:29.603Z | 404 Not Found: NoLiquidity: no route found |
| 118 | 47 | main | quote | 2026-10-17T08:05:56.027Z | 404 Not Found: NoLiquidity: no route found |
| 124 | 53 | main | quote | 2026-10-17T08:05:56.227Z | 404 Not Found: NoLiquidity: no route found |
| 122 | 51 | main | quote | 2026-10-17T08:05:56.435Z | 404 Not Found: NoLiquidity: no route found |
| 120 | 49 | main | quote | 2026-10-17T08:05:56.624Z | 404 Not Found: NoLiquidity: no route found |
| 128 | 57 | main | quote | 2026-10-17T08:05:56.737Z | 404 Not Found: NoLiquidity: no route found |
| 129 | 58 | main | quote | 2026-10-17T08:05:56.962Z | 404 Not Found: NoLiquidity: no route found |
| 132 | 61 | main | quote | 2026-10-17T08:05:57.228Z | 404 Not Found: NoLiquidity: no route found |
| 133 | 62 | main | quote | 2026-10-17T08:05:57.356Z | 404 Not Found: NoLiquidity: no route found |
| 134 | 63 | main | quote | 2026-10-17T08:05:57.542Z | 404 Not Found: NoLiquidity: no route found |
| 126 | 55 | main | quote | 2026-10-17T08:05:57.853Z | 404 Not Found: NoLiquidity: no route found |
| 127 | 56 | main | quote | 2026-10-17T08:05:57.946Z | 404 Not Found: NoLiquidity: no route found |
| 114 | 43 | main | quote | 2026-10-17T08:05:58.238Z | 404 Not Found: NoLiquidity: no route found |
| 117 | 46 | main | quote | 2026-10-17T08:05:58.339Z | 404 Not Found: NoLiquidity: no route found |
| 123 | 52 | main | quote | 2026-10-17T08:05:58.547Z | 404 Not Found: NoLiquidity: no route found |
| 115 | 44 | main | quote | 2026-10-17T08:05:58.764Z | 404 Not Found: NoLiquidity: no route found |
| 119 | 48 | main | quote | 2026-10-17T08:05:58.942Z | 404 Not Found: NoLiquidity: no route found |
| 113 | 42 | main | quote | 2026-10-17T08:05:59.238Z | 404 Not Found: NoLiquidity: no route found |
| 125 | 54 | main | quote | 2026-10-17T08:05:59.426Z | 404 Not Found: NoLiquidity: no route found |
| 112 | 41 | main | quote | 2026-10-17T08:05:59.540Z | 404 Not Found: NoLiquidity: no route found |
| 136 | 65 | main | quote | 2026-10-17T08:05:59.797Z | 404 Not Found: NoLiquidity: no route found |
| 137 | 66 | main | quote | 2026-10-17T08:05:59.998Z | 404 Not Found: NoLiquidity: no route found |
| 138 | 67 | main | quote | 2026-10-17T08:06:00.234Z | 404 Not Found: NoLiquidity: no route found |
| 139 | 68 | main | quote | 2026-10-17T08:06:00.380Z | 404 Not Found: NoLiquidity: no route found |
| 140 | 69 | main | quote | 2026-10-17T08:06:00.540Z | 404 Not Found: NoLiquidity: no route found |
| 141 | 70 | main | quote | 2026-10-17T08:06:00.837Z | 404 Not Found: NoLiquidity: no route found |
| 142 | 71 | main | quote | 2026-10-17T08:06:00.996Z | 404 Not Found: NoLiquidity: no route found |
| 143 | 72 | main | quote | 2026-10-17T08:06:01.253Z | 404 Not Found: NoLiquidity: no route found |
| — | 41 | cleanup | quote | 2026-10-17T08:06:48.343Z | 404 Not Found: NoLiquidity: no route found |
| — | 53 | cleanup | quote | 2026-10-17T08:07:09.237Z | 404 Not Found: NoLiquidity: no route found |
| 149 | 78 | main | quote | 2026-10-17T08:08:36.170Z | 404 Not Found: NoLiquidity: no route found |
| 150 | 79 | main | quote | 2026-10-17T08:08:36.381Z | 404 Not Found: NoLiquidity: no route found |
| 151 | 80 | main | quote | 2026-10-17T08:08:36.483Z | 404 Not Found: NoLiquidity: no route found |
| 152 | 81 | main | quote | 2026-10-17T08:08:36.776Z | 404 Not Found: NoLiquidity: no route found |
| 153 | 82 | main | quote | 2026-10-17T08:08:36.914Z | 404 Not Found: NoLiquidity: no route found |
| 154 | 83 | main | quote | 2026-10-17T08:08:37.176Z | 404 Not Found: NoLiquidity: no route found |
| 155 | 84 | main | quote | 2026-10-17T08:08:37.286Z | 404 Not Found: NoLiquidity: no route found |
| 156 | 85 | main | quote | 2026-10-17T08:08:37.577Z | 404 Not Found: NoLiquidity: no route found |
| 157 | 86 | main | quote | 2026-10-17T08:08:37.686Z | 404 Not Found: NoLiquidity: no route found |
| 158 | 87 | main | quote | 2026-10-17T08:08:37.970Z | 404 Not Found: NoLiquidity: no route found |
| 162 | 91 | main | quote | 2026-10-17T08:08:38.487Z | 404 Not Found: NoLiquidity: no route found |
| 163 | 92 | main | quote | 2026-10-17T08:08:38.973Z | 404 Not Found: NoLiquidity: no route found |
| 164 | 93 | main | quote | 2026-10-17T08:08:40.091Z | 404 Not Found: NoLiquidity: no route found |
| 165 | 94 | main | quote | 2026-10-17T08:08:40.332Z | 404 Not Found: NoLiquidity: no route found |
| 166 | 95 | main | quote | 2026-10-17T08:08:40.532Z | 404 Not Found: NoLiquidity: no route found |
| 167 | 96 | main | quote | 2026-10-17T08:08:40.887Z | 404 Not Found: NoLiquidity: no route found |
| 168 | 97 | main | quote | 2026-10-17T08:08:41.307Z | 404 Not Found: NoLiquidity: no route found |
| 169 | 98 | main | quote | 2026-10-17T08:08:41.533Z | 404 Not Found: NoLiquidity: no route found |
| 170 | 99 | main | quote | 2026-10-17T08:08:41.691Z | 404 Not Found: NoLiquidity: no route found |
| 171 | 100 | main | quote | 2026-10-17T08:08:42.129Z | 404 Not Found: NoLiquidity: no route found |
| 172 | 101 | main | quote | 2026-10-17T08:08:42.480Z | 404 Not Found: NoLiquidity: no route found |
| 173 | 102 | main | quote | 2026-10-17T08:08:42.681Z | 404 Not Found: NoLiquidity: no route found |
| 174 | 103 | main | quote | 2026-10-17T08:08:42.935Z | 404 Not Found: NoLiquidity: no route found |
| 175 | 104 | main | quote | 2026-10-17T08:08:43.305Z | 404 Not Found: NoLiquidity: no route found |
| 176 | 105 | main | quote | 2026-10-17T08:08:43.533Z | 404 Not Found: NoLiquidity: no route found |
| 177 | 106 | main | quote | 2026-10-17T08:08:43.708Z | 404 Not Found: NoLiquidity: no route found |
| 178 | 107 | main | quote | 2026-10-17T08:08:43.878Z | 404 Not Found: NoLiquidity: no route found |
| 179 | 108 | main | quote | 2026-10-17T08:08:44.173Z | 404 Not Found: NoLiquidity: no route found |
| 180 | 109 | main | quote | 2026-10-17T08:08:44.293Z | 404 Not Found: NoLiquidity: no route found |
| 181 | 110 | main | quote | 2026-10-17T08:08:44.502Z | 404 Not Found: NoLiquidity: no route found |
| 182 | 111 | main | quote | 2026-10-17T08:08:44.724Z | 404 Not Found: NoLiquidity: no route found |
| 183 | 112 | main | quote | 2026-10-17T08:08:45.035Z | 404 Not Found: NoLiquidity: no route found |
| 200 | 114 | main | quote | 2026-10-17T08:10:13.704Z | 404 Not Found: NoLiquidity: no route found |
| 204 | 118 | main | quote | 2026-10-17T08:10:14.027Z | 404 Not Found: NoLiquidity: no route found |
| 202 | 116 | main | quote | 2026-10-17T08:10:14.334Z | 404 Not Found: NoLiquidity: no route found |
| 201 | 115 | main | quote | 2026-10-17T08:10:14.516Z | 404 Not Found: NoLiquidity: no route found |
| 206 | 120 | main | quote | 2026-10-17T08:10:14.719Z | 404 Not Found: NoLiquidity: no route found |
| 205 | 119 | main | quote | 2026-10-17T08:10:15.030Z | 404 Not Found: NoLiquidity: no route found |

</details>

<details>
<summary>Cleanup exceptions and remaining balances</summary>

| Trader | Time | Evidence |
| --- | --- | --- |
| 3 | 2026-10-17T07:55:23.806Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.058532 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "49995000"} |
| 1 | 2026-10-17T07:55:24.537Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.52419 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "44980000"} |
| 5 | 2026-10-17T07:56:35.138Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.524182 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 2, "swept": "44975000"} |
| 13 | 2026-10-17T07:57:36.546Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.434037 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 2, "swept": "44990000"} |
| 14 | 2026-10-17T07:57:40.438Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.324164 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 2, "swept": "46879029"} |
| 12 | 2026-10-17T07:57:44.988Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.633982 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "44985000"} |
| 19 | 2026-10-17T07:58:56.909Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.250001 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)", "1.73034 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 2, "swept": "72556601"} |
| 20 | 2026-10-17T07:58:57.813Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.730338 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 3, "reclaimed": 1, "swept": "77956880"} |
| 16 | 2026-10-17T07:59:06.617Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["3.449266 JUPyiw… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)", "0.258698 EPjFWd…"], "closedAccounts": 1, "reclaimed": 2, "swept": "72474999"} |
| 42 | 2026-10-17T08:06:57.856Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.629092 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 2, "reclaimed": 2, "swept": "45463440"} |
| 43 | 2026-10-17T08:06:57.964Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.737069 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 2, "reclaimed": 1, "swept": "47968440"} |
| 45 | 2026-10-17T08:07:00.067Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.523986 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 2, "reclaimed": 2, "swept": "46463440"} |
| 46 | 2026-10-17T08:07:05.028Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.58347 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 2, "reclaimed": 1, "swept": "48468440"} |
| 48 | 2026-10-17T08:07:12.529Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.838621 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 2, "reclaimed": 2, "swept": "43575200"} |
| 49 | 2026-10-17T08:07:12.731Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.525735 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 4, "reclaimed": 1, "swept": "52158680"} |
| 41 | 2026-10-17T08:07:14.428Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.051437 EPjFWd…"], "closedAccounts": 2, "reclaimed": 2, "swept": "46570120"} |
| 51 | 2026-10-17T08:07:19.214Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.736092 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 4, "reclaimed": 1, "swept": "51158680"} |
| 52 | 2026-10-17T08:07:25.106Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.841221 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 4, "reclaimed": 1, "swept": "50658680"} |
| 53 | 2026-10-17T08:07:27.200Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.262022 EPjFWd…"], "closedAccounts": 4, "reclaimed": 1, "swept": "52158680"} |
| 54 | 2026-10-17T08:07:27.903Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.314476 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 4, "reclaimed": 1, "swept": "51658680"} |
| 61 | 2026-10-17T08:07:48.166Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.263274 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 3, "reclaimed": 0, "swept": "54668680"} |
| 68 | 2026-10-17T08:07:56.539Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.420639 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 0, "reclaimed": 0, "swept": "49995000"} |
| 64 | 2026-10-17T08:07:57.781Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.419164 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "45980000"} |
| 60 | 2026-10-17T08:08:02.315Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["0.840679 EPjFWd… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 4, "reclaimed": 1, "swept": "50658680"} |
| 73 | 2026-10-17T08:09:10.141Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["9.180371 9cRCn9… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "39985000"} |
| 74 | 2026-10-17T08:09:12.549Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["338.420782 98kfF7… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "39985000"} |
| 75 | 2026-10-17T08:09:17.842Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.048339 2u1tsz… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "39985000"} |
| 77 | 2026-10-17T08:09:19.021Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["1.048334 2b1kV6… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "39985000"} |
| 76 | 2026-10-17T08:09:22.092Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": [], "leftover": ["227.142297 pumpCm… (quote failed: Not Found {\"errorType\":\"NoLiquidity\",\"description\":\"no route)"], "closedAccounts": 1, "reclaimed": 1, "swept": "39980000"} |

</details>

## Detailed investigation from the saved report

The following is the original checked investigation, with unsupported fee-token table rows removed. Its historical summaries and comparisons may quote the original raw schedule. Use the adjusted performance and scenario results above for current scoring. Exact errors, ownership caveats and order links are retained.

<details>
<summary>Saved investigation, errors and transaction evidence</summary>

# Kaisersolver solver test report

Date: 17 October 2026. Environment: staging / Barn, on Solana mainnet. Scenario trading: 07:55:09–08:10:28 UTC; run observation ended 08:14:26 UTC; snapshot fetched 08:15:21 UTC.

**TLDR:** Coverage is incomplete: 48/206 planned trades filled, and all 48 placed scenario orders filled. Another 155 requests failed during quoting, 3 were expected autopilot rejections, and final account cleanup failed. Next, trace the quote failures, review the driver fee cap, and finish cleanup before rerunning the missing coverage.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Inconclusive; 2/6 planned; 2/2 placed filled | Quote owner unknown: trace exact-buy and acquisition requests |
| 2. Receiving-account costs | Inconclusive; 4/16 planned; 4/4 placed filled | Test team: rerun with verified missing and existing accounts |
| 3. Native and wrapped SOL payouts | Inconclusive; 6/12 planned; 6/6 placed filled | Test team: rerun the missing receipt modes |
| 4. 25 same-direction sells | Not achieved: batching; 5/25 planned; 5/5 placed filled | Solver + test team: restore full load and check batching |
| 5. Sell bursts | Inconclusive; 24/84 planned; 24/24 placed filled | Quote owner unknown: restore waves before testing throughput |
| 7. Fresh accounts | Inconclusive; 2/8 planned; 2/2 placed filled | Quote owner unknown: trace sponsored and exact-buy requests |

No earlier matching Kaisersolver staging report was found, so there is no baseline comparison.

## 1. Standard pairs

Inconclusive: only the 2 self-paid SOL sells reached settlement. All 3 exact buys and the JUP sell failed during quoting.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 2. Filled / placed: 2/2. Median / longest fill: 6.340 / 6.363 seconds.

Filled / scheduled: 2/6. Failures before placement: 4 (4 NoLiquidity).

**Ownership unknown:** each `NoLiquidity` row below means the quote API returned no usable route for that request. Cause unknown; this does not establish absent token liquidity or a solver defect.

Selected session: `2026-10-17-07-54-composite-kaisersolver-run`. Metadata, saved scenario, journal, orders and transaction summaries were reconciled; all 7 trading phases finished. Solver participation is confirmed by the staging competition records and the matching settlement fee payer, not by the DEX used.

Totals: 48 placed scenario orders filled in 48 distinct successful settlement transactions; 39 self-paid and 9 sponsored. No placed scenario order ultimately failed. All 34 scheduled exact-output buys failed during quoting, so buy settlement support was not tested. Each timing measures local journal placement → observed fulfilled status, including polling; overall median / longest: 18.787 / 59.865 seconds. Creation, funding, failed attempts and cleanup are excluded; the 4 explicit preparation trades in scenario 3 are included.

Table timestamps are placement times for successful examples and original first-failure times for errors. Initial exact-buy failures without a separate `place_error` use the journal failure timestamp. Server error times can precede the local confirmed-placement timestamp. Row numbers are the composite CSV row numbers, not file line numbers.

Supplemental checks used the verified `vm-auth-staging` data source. During the fresh-account requests, the API recorded the Kaisersolver driver response `{"kind":"QuotingFailed","description":"No valid quote found"}` at 08:10:13.721878146–08:10:14.934813433 UTC; no deeper cause was recorded in the matching driver error records. The generic response does not identify whether the solver, driver validation or request handling caused the missing quote.

The planned denominator is 206 rows: 48 filled, 155 quote failures and 3 expected rejections. The artifact bundle contains 63 fulfilled orders: 48 scenario and 15 cleanup orders. The saved run remains `finished=false` because final cleanup failed.

**Driver fee policy:** original logs resolve the saved generic `other` labels to 12 pre-submission priority-fee rejections on 11 orders: 8 scenario orders and 3 cleanup orders. Errors were joined by auction, solution and solver `kaisersolver`; the estimated fee exceeded the driver’s 1,000,000-lamport cap. No failed settlement signature was recorded for these rejected attempts; every affected order later filled. This is a confirmed driver budget restriction, not evidence of an on-chain swap failure or solver defect; CoW should review fee estimation and the cap. Every affected order and distinct error is retained below.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-17T07:55:12.017Z | Sell 0.005 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 0.52419 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.521543 | Filled; observed after 6.363s | [0x7d89e1c8d8a53e024f421c279e068f92389a047aa8c4352b4360177814c1c7c3](https://debug.barn.cow.fi/order/0x7d89e1c8d8a53e024f421c279e068f92389a047aa8c4352b4360177814c1c7c3); [settlement](https://solscan.io/tx/4XS6xSwHfiJSW1xWVw1MaxBv73h5p9C5STUQU4twRhfhiBdAter5Bo2Z2gTngZFseb2PuLRs5UKK7mJGVCapNthm) |
| 2 / 2 | 2026-10-17T07:55:12.099Z | Sell 0.005 SOL (native) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (self); received 0.524861 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB); signed minimum 0.522211 | Filled; observed after 6.317s | [0xfc8833f9c2d0c2a5a462434f7dabdb266aa441b231d7439537eda2acb24af904](https://debug.barn.cow.fi/order/0xfc8833f9c2d0c2a5a462434f7dabdb266aa441b231d7439537eda2acb24af904); [settlement](https://solscan.io/tx/5Apz4X44eGFvxJ5e6UXvfYrHEMK4BqXzJcFZUYYhYaGwF7aCWzFMtJitTQyJDKtNUQgUewyDXPZnzBDeA9q3LDpV) |
| 3 / 3 | 2026-10-17T07:55:16.841Z | Sell 0.5 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); acquisition quote: Sell 0.001321123 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) | acquisition quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 4 / 1 | 2026-10-17T07:55:18.623Z | Buy SOL (native) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 5 / 2 | 2026-10-17T07:55:18.762Z | Buy SOL (native) → exactly 0.25 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 6 / 3 | 2026-10-17T07:55:17.012Z | Buy [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |

</details>

## 2. Receiving-account costs

Inconclusive: the receiving accounts were prepared before this scenario. Its 4 filled SOL→USDC sells do not compare missing-account costs with existing-account costs.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 4. Filled / placed: 4/4. Median / longest fill: 7.871 / 31.546 seconds.

Filled / scheduled: 4/16. Failures before placement: 12 (12 NoLiquidity).

**Ownership unknown:** each `NoLiquidity` row below means the quote API returned no usable route for that request. Cause unknown; this does not establish absent token liquidity or a solver defect.

The CSV asks for first-use versus repeated-account costs, but ordinary-run setup already prepared the receiving accounts. The scenario therefore tests an existing-account path only; test-team setup must change for a valid cost comparison.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-17T07:56:14.400059604Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored); received 0.262133 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.260797 | `PriorityFeeTooHigh(OverBudget { lamports: 1110464, cap: 1000000 })` (auction 295523, solution 1, 2026-10-17T07:56:14.400059604Z); later filled; observed after 31.546s | [0xa78a1814556b223e9f32f8f930fd8165737f64e7a0faa39ae391f3838380cba6](https://debug.barn.cow.fi/order/0xa78a1814556b223e9f32f8f930fd8165737f64e7a0faa39ae391f3838380cba6); [settlement](https://solscan.io/tx/2vN1EpvBjmgLJzjPZBv9Gi4f5pRt6e8YaTWwA5dz7CyoGupX8pupWxnJfhNdeae9XvH8MGQAfaZ7rRD52WYp9vQF) |
| 8 / 5 | 2026-10-17T07:55:52.858Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 0.262073 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.260797 | Filled; observed after 9.551s | [0x0176a947c0f0fd608a39e4563c7159015808eb76da7ed92079296c6806c5ceca](https://debug.barn.cow.fi/order/0x0176a947c0f0fd608a39e4563c7159015808eb76da7ed92079296c6806c5ceca); [settlement](https://solscan.io/tx/2y2mLm3dZsWtJy3nYkmLsStPS5z8T7UY1HhvJ9XydcLxZfk3t6DvaeZu7QdSL1xp88qY8tJDpAA2hc4q9DEiWpUP) |
| 15 / 4 | 2026-10-17T07:56:23.605Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored); received 0.262101 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.260792 | Filled; observed after 3.294s | [0xc291175e5e86bd3469df912923dc99c127dad3c33cb175d270b9ea0038da9931](https://debug.barn.cow.fi/order/0xc291175e5e86bd3469df912923dc99c127dad3c33cb175d270b9ea0038da9931); [settlement](https://solscan.io/tx/3T6yNM82YodkPiYNKBzerdPTFx97sBjS7CdzCbpSYtzbKvqXE5uYtfeh5pagUNeH15Tdduq9dajRxHCP2soBrYCk) |
| 16 / 5 | 2026-10-17T07:56:04.410119608Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 0.262109 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.260787 | `PriorityFeeTooHigh(OverBudget { lamports: 1036437, cap: 1000000 })` (auction 295521, solution 0, 2026-10-17T07:56:04.410119608Z); later filled; observed after 6.191s | [0x2892e36a20a0b9675189329044f29cd4c515c940985c675ea2f3fc0916c884ab](https://debug.barn.cow.fi/order/0x2892e36a20a0b9675189329044f29cd4c515c940985c675ea2f3fc0916c884ab); [settlement](https://solscan.io/tx/5XFcVPzwWZ19tMkqcdKw1zEWWBW1mGphoNsDuYChQnf87XLqcXAwkYUZS14r6J7XGdZHksxzqc798fhw1xgzAy1K) |
| 9 / 6 | 2026-10-17T07:55:51.914Z | Buy SOL (native) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 10 / 7 | 2026-10-17T07:55:52.094Z | Buy SOL (native) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 11 / 8 | 2026-10-17T07:55:51.536Z | Sell 0.0025 SOL (native) → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 12 / 9 | 2026-10-17T07:55:51.783Z | Sell 0.0025 SOL (native) → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 13 / 10 | 2026-10-17T07:55:50.730Z | Buy SOL (native) → exactly 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 14 / 11 | 2026-10-17T07:55:51.042Z | Buy SOL (native) → exactly 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (self) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 17 / 6 | 2026-10-17T07:55:52.895Z | Buy SOL (native) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 18 / 7 | 2026-10-17T07:55:53.371Z | Buy SOL (native) → exactly 0.25 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 19 / 8 | 2026-10-17T07:55:52.787Z | Sell 0.0025 SOL (native) → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 20 / 9 | 2026-10-17T07:55:53.123Z | Sell 0.0025 SOL (native) → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 21 / 10 | 2026-10-17T07:55:52.388Z | Buy SOL (native) → exactly 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 22 / 11 | 2026-10-17T07:55:52.578Z | Buy SOL (native) → exactly 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (self) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| — / 4 | 2026-10-17T07:56:29.422542743Z | Cleanup: Sell 0.524234 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (native); received 0.004990594 SOL | `PriorityFeeTooHigh(OverBudget { lamports: 1165986, cap: 1000000 })` (auction 295526, solution 1, 2026-10-17T07:56:29.422542743Z); later filled; excluded from scenario totals | [0xd25c6b6048caf8b6fd57bb2272717f2e5c89093e1ea18e79146f0a5c984206dd](https://debug.barn.cow.fi/order/0xd25c6b6048caf8b6fd57bb2272717f2e5c89093e1ea18e79146f0a5c984206dd); [settlement](https://solscan.io/tx/43iPv9xiPErAYCejUKHRVQcQCSNr4G3yY44Jih3GZrAgwD1ViUaWQTPWKL19yw9vR6kqULNQGEcrGtY3oRNiJKAX) |

</details>

## 3. Native and wrapped SOL payouts

Inconclusive for the full payment-mode comparison. On-chain balances confirm 1 self-paid native SOL receipt and 1 sponsored wSOL receipt; the other receipt cases failed during quoting.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 6. Filled / placed: 6/6. Median / longest fill: 12.697 / 21.640 seconds.

Filled / scheduled: 6/12. Failures before placement: 6 (6 NoLiquidity).

**Ownership unknown:** each `NoLiquidity` row below means the quote API returned no usable route for that request. Cause unknown; this does not establish absent token liquidity or a solver defect.

The 6 fills include 4 SOL→USDC preparation rows plus only 2 of the 8 intended SOL receipt rows. Exact-output receipt coverage: 0/4 placed; sponsored native-SOL receipt coverage: 0 placed, so self-paid success does not establish gasless support.

Row 28’s [settlement](https://solscan.io/tx/36GDV6C1869M9GxziktCKVwn4SjTXjp1hqsMS9Fykzz26scpu26zxH31UbDdRmRvFFHt2up8msd6z2ZzRz4fMuAE) increased the trader’s wSOL token balance from 0.003933669 to 0.005837833 wSOL, a 0.001904164 increase. Row 29’s [settlement](https://solscan.io/tx/49XVCUBk2Mde1cH2dQzLJQVah1CKRk3JAqpryPLMUJEyY3vZ97XSkPF2LyRAjLn87K4fPxhEVhRbC7jSkzWC1N7g) increased the receiving wallet’s native balance by 1,904,029 lamports (0.001904029 SOL), with no receiving wSOL token balance. These RPC balance checks were made before interpreting cleanup, which can unwrap wSOL.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 23 / 12 | 2026-10-17T07:57:02.747Z | Sell 0.005 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored); received 0.524055 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.521488 | Filled; observed after 18.786s | [0x57a45bbbc9e514774ee555f708f720afedc27924a127feef226bdc71086126d0](https://debug.barn.cow.fi/order/0x57a45bbbc9e514774ee555f708f720afedc27924a127feef226bdc71086126d0); [settlement](https://solscan.io/tx/Ep1jTKaqe7xZRqeCjR9hSaRgvrkwnT2jK6NxdxceyjWYUGasfUsQszWAAJsiVvdMjKKfzQmXAss5Sbq6KieL9mC) |
| 28 / 13 | 2026-10-17T07:57:16.072Z | Sell 0.2 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) (sponsored); received 0.001904164 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112); signed minimum 0.001895296 | Filled; observed after 12.600s | [0xab080a365bba0511eac390ea65d27984e8205b80eb375d7a5df54348b396f1a1](https://debug.barn.cow.fi/order/0xab080a365bba0511eac390ea65d27984e8205b80eb375d7a5df54348b396f1a1); [settlement](https://solscan.io/tx/36GDV6C1869M9GxziktCKVwn4SjTXjp1hqsMS9Fykzz26scpu26zxH31UbDdRmRvFFHt2up8msd6z2ZzRz4fMuAE) |
| 29 / 14 | 2026-10-17T07:57:27.670Z | Sell 0.2 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (native) (self); received 0.001904029 SOL (native); signed minimum 0.001894568 | Filled; observed after 3.303s | [0x4d1686f09c7e6afabd0e02d1250e47cde0f6fcf070144fbb94023905470976d5](https://debug.barn.cow.fi/order/0x4d1686f09c7e6afabd0e02d1250e47cde0f6fcf070144fbb94023905470976d5); [settlement](https://solscan.io/tx/49XVCUBk2Mde1cH2dQzLJQVah1CKRk3JAqpryPLMUJEyY3vZ97XSkPF2LyRAjLn87K4fPxhEVhRbC7jSkzWC1N7g) |
| 27 / 12 | 2026-10-17T07:57:22.185Z | Sell 0.2 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (native) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 30 / 15 | 2026-10-17T07:57:08.054Z | Sell 0.2 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 31 / 12 | 2026-10-17T07:57:22.487Z | Buy [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → exactly 0.002 SOL (native) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 32 / 13 | 2026-10-17T07:57:29.347Z | Buy [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → exactly 0.002 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 33 / 14 | 2026-10-17T07:57:31.293Z | Buy [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → exactly 0.002 SOL (native) (self) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 34 / 15 | 2026-10-17T07:57:08.354Z | Buy [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → exactly 0.002 [wSOL](https://solscan.io/token/So11111111111111111111111111111111111111112) (self) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |

</details>

## 4. 25 same-direction sells

Batching was not achieved: the 5 placed orders settled in 5 separate transactions. Another 20 rows failed during quoting, so the planned 25-order load was not reached.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 5. Filled / placed: 5/5. Median / longest fill: 18.876 / 34.553 seconds.

Filled / scheduled: 5/25. Failures before placement: 20 (20 NoLiquidity).

**Ownership unknown:** each `NoLiquidity` row below means the quote API returned no usable route for that request. Cause unknown; this does not establish absent token liquidity or a solver defect.

Observed settlement batch sizes: 1, 1, 1, 1, 1 scenario orders. No two selected orders shared a settlement signature, so the requested four-order batching plus remainder did not happen in the placed subset; swap aggregation and proportional payouts were not tested.

The first 5 requests (rows 35–39) obtained quotes; all remaining 20 failed. A follow-up check of staging logs at 07:58:03–07:58:10 UTC found 25 outgoing quote solve-request records for Kaisersolver and 20 API responses `{"kind":"QuotingFailed","description":"No valid quote found"}`. The driver therefore attempted all 25 quote requests; the cutoff was not simply the simulator submitting only 5. **Possible reason (unconfirmed):** a rate, capacity or request-handling limit in the quote path. The matching driver logs did not record the original solver response bodies, so the cause and repair owner remain unknown. Follow-up Grafana checks confirmed the same outgoing-request / failed-quote counts for the larger bursts: 8/3, 16/11, 24/19 and 32/27. The inspected driver code returns `QuotingFailed` when solution computation leaves no trade to quote; direct HTTP errors use a different error kind. No explicit HTTP 429, timeout or fee-related solution-drop reason was logged. The original engine responses are missing, so an internal request limit remains unconfirmed; ask Kaisersolver to inspect its staging `/solve` records for 17 October, 07:58:04–07:58:09 UTC, 0.005 SOL→JUP.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 35 / 16 | 2026-10-17T07:58:08.229Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self); received 1.730339 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN); signed minimum 1.721689 | Filled; observed after 18.876s | [0x24ab5311c04926bbb7eb03dba5ff48327ca6bc5978d569d5f1ec6b4cedf4a17d](https://debug.barn.cow.fi/order/0x24ab5311c04926bbb7eb03dba5ff48327ca6bc5978d569d5f1ec6b4cedf4a17d); [settlement](https://solscan.io/tx/32zYNmdJuyrnCfCojpueusfkjBeRiB7vdsajVQ3MCZ6TX7hPWjrTrSBH9JpgMAG2wfjA2jXHxejujnKJQSq3Z58A) |
| 37 / 18 | 2026-10-17T07:58:08.421Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self); received 1.730337 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN); signed minimum 1.721689 | Filled; observed after 34.553s | [0xf6700d63a1ab6f6ce90188d3f2d2be184cf9d68f30ce90b68e3c31bed0983346](https://debug.barn.cow.fi/order/0xf6700d63a1ab6f6ce90188d3f2d2be184cf9d68f30ce90b68e3c31bed0983346); [settlement](https://solscan.io/tx/4uHoniN6SXVT9UD8KT3u3pu4PMbtCZZteJbpsF5zmpxXnxjw5A9PV2zmzJ1aWh9NcJXbuRcsxbP9knrh4zk3XNfF) |
| 38 / 19 | 2026-10-17T07:58:07.481Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self); received 1.73034 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN); signed minimum 1.721689 | Filled; observed after 12.485s | [0x13fbb68cb4133a22c3d17245c846925fe1b0e6d94549c1f86f0f2446c2791171](https://debug.barn.cow.fi/order/0x13fbb68cb4133a22c3d17245c846925fe1b0e6d94549c1f86f0f2446c2791171); [settlement](https://solscan.io/tx/35fnmmBFfpnf8bECC92VCXVTeFSRerZ1HEt1kL1sRKW6Zr3F5GT2B2FszdacFm4wbPMtD44ZFP2wYF8T4YfNyqhk) |
| 40 / 21 | 2026-10-17T07:58:04.923Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 41 / 22 | 2026-10-17T07:58:05.057Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 42 / 23 | 2026-10-17T07:58:05.331Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 43 / 24 | 2026-10-17T07:58:05.531Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 44 / 25 | 2026-10-17T07:58:05.730Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 45 / 26 | 2026-10-17T07:58:05.851Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 46 / 27 | 2026-10-17T07:58:06.132Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 47 / 28 | 2026-10-17T07:58:06.254Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 48 / 29 | 2026-10-17T07:58:06.446Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 49 / 30 | 2026-10-17T07:58:06.736Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 50 / 31 | 2026-10-17T07:58:06.841Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 51 / 32 | 2026-10-17T07:58:07.038Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 52 / 33 | 2026-10-17T07:58:07.336Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 53 / 34 | 2026-10-17T07:58:07.442Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 54 / 35 | 2026-10-17T07:58:07.642Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 55 / 36 | 2026-10-17T07:58:07.929Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 56 / 37 | 2026-10-17T07:58:08.057Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 57 / 38 | 2026-10-17T07:58:08.337Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 58 / 39 | 2026-10-17T07:58:08.449Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 59 / 40 | 2026-10-17T07:58:08.639Z | Sell 0.005 SOL (native) → [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |

</details>

## 5. Sell bursts

Inconclusive for the intended load test: only 24 of 84 planned trades were placed. All 24 filled separately; quote failures reduced every wave above 4 orders.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 24. Filled / placed: 24/24. Median / longest fill: 23.520 / 59.865 seconds.

Filled / scheduled: 24/84. Failures before placement: 60 (60 NoLiquidity).

**Ownership unknown:** each `NoLiquidity` row below means the quote API returned no usable route for that request. Cause unknown; this does not establish absent token liquidity or a solver defect.

Waves were scheduled 90 seconds apart. Clearing time below is first placement → last observed fill within that wave, including polling; the gaps and reduced waves do not establish a sustained throughput ceiling.

| Planned wave | Placed / filled | Quote failures | Clearing time, seconds |
| --- | --- | --- | --- |
| 4 | 4/4 | 0 | 19.302 |
| 8 | 5/5 | 3 | 31.380 |
| 16 | 5/5 | 11 | 59.865 |
| 24 | 5/5 | 19 | 34.914 |
| 32 | 5/5 | 27 | 47.741 |

All 24 successful settlements contained 1 selected scenario order each. The 8-, 16-, 24- and 32-order waves each placed exactly 5 orders, matching the quote cutoff in scenario 4. This repeated pattern needs investigation before treating the missing trades as liquidity failures. Placement retries were set to 0, so requests that failed quoting were not retried; that setting does not explain the initial failures.

**Additional window record; Ownership unknown:** at 08:00:28.623249159 UTC, auction 295573 logged `Status { status: 400, body: "{\"kind\":\"SolverFailed\",\"description\":\"Solver engine returned an invalid response\"}" }`. The original driver records checked did not expose the response body or affected order IDs, so its cause and impact on this session cannot be established; do not count it as another failed row.

Competition counters cover the whole observation window: 121 proposed solutions, 75 wins, 63 submitted / observed settlements, 12 fee-cap rejections and 1 `SolverFailed`. They are event counts, not distinct failed user orders; the 219 `unfunded_sell_token_account` filter events are also window-wide, and the 2 UIDs in the saved order-state extract are outside this session’s 63 orders.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 60 / 41 | 2026-10-17T07:59:56.688Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 0.262119 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.260953 | Filled; observed after 19.303s | [0xfd131bda7c360610c2d9566377154a43c0b479d2119994d4f680387bceafc155](https://debug.barn.cow.fi/order/0xfd131bda7c360610c2d9566377154a43c0b479d2119994d4f680387bceafc155); [settlement](https://solscan.io/tx/3aAgNz2zg72CZqCvUc7MMYSQ1Y1baCrr4zt4R4NNAJuxm65H5VqN7WEapLqv8q3npkXfyQc2jiM7HDixGAMyEvSg) |
| 69 / 46 | 2026-10-17T08:01:26.283Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 0.314372 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.312879 | Filled; observed after 24.804s | [0xc7d4ad7c65898258665fb655889d4213a469d3bfedbddaed1867f66004e965ec](https://debug.barn.cow.fi/order/0xc7d4ad7c65898258665fb655889d4213a469d3bfedbddaed1867f66004e965ec); [settlement](https://solscan.io/tx/2eoBHEVLHtVYatizFvuaicPNQFYfh4HmdVnvpvvuzV8FPaJkRyk7R4XSDp5Kqxmj3NJVQ8HXvCGWTLuKknqg7Trc) |
| 80 / 49 | 2026-10-17T08:02:57.277Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 0.262017 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.260657 | Filled; observed after 59.865s | [0xbf4b05f23c96f974727b824065d877aaf4e3dde65255cf4bb4dbc33bf3701f7e](https://debug.barn.cow.fi/order/0xbf4b05f23c96f974727b824065d877aaf4e3dde65255cf4bb4dbc33bf3701f7e); [settlement](https://solscan.io/tx/aPbRNfQqmM9GE3ugvrp9kFcy4yc84WWkp61HDQkYCVmWuJrk46DKNeSjRXKoyaHNaYKydhoqm4rY6L5NfujbCJx) |
| 81 / 50 | 2026-10-17T08:03:39.497591576Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 0.314479 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.312768 | `PriorityFeeTooHigh(OverBudget { lamports: 1165986, cap: 1000000 })` (auction 295612, solution 2, 2026-10-17T08:03:39.497591576Z); later filled; observed after 53.622s | [0xe7dab9123aba5302b1795419fd6c0743369b242f572e7c2495310027583ba5ec](https://debug.barn.cow.fi/order/0xe7dab9123aba5302b1795419fd6c0743369b242f572e7c2495310027583ba5ec); [settlement](https://solscan.io/tx/44SGCiZG1A5ctz4M71cn647m1hKuD7ewoyyNF9zs2btsC7LWDiBZyE8D6v7jD1fxjYYuc8hgbCGPH3pR3MMSGyD3) |
| 82 / 51 | 2026-10-17T08:03:19.530829863Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 0.36685 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.364895 | `PriorityFeeTooHigh(OverBudget { lamports: 1059988, cap: 1000000 })` (auction 295608, solution 2, 2026-10-17T08:03:19.530829863Z); later filled; observed after 41.344s | [0x91426450eea1ecada8fcc45fb692e4ba2afbb315f9efafbc74a45c10dc978a2b](https://debug.barn.cow.fi/order/0x91426450eea1ecada8fcc45fb692e4ba2afbb315f9efafbc74a45c10dc978a2b); [settlement](https://solscan.io/tx/3PkzX8mmfr69xZ7tFnbsiDiacrD4nbn36AEXGnuVvvEzNfVgrBxjH3F466afKX1ysbLNcqSJxka9AL2qc4vHTwut) |
| 131 / 60 | 2026-10-17T08:05:59.540429022Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 0.419211 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 0.417023 | `PriorityFeeTooHigh(OverBudget { lamports: 1165986, cap: 1000000 })` (auction 295640, solution 0, 2026-10-17T08:05:59.540429022Z); `PriorityFeeTooHigh(OverBudget { lamports: 1400000, cap: 1000000 })` (auction 295642, solution 0, 2026-10-17T08:06:09.554957086Z); later filled; observed after 32.483s | [0x514a9c7f1cfd54075d79aa5a3d938095cda43153ec1d221f00f2feb440fd0362](https://debug.barn.cow.fi/order/0x514a9c7f1cfd54075d79aa5a3d938095cda43153ec1d221f00f2feb440fd0362); [settlement](https://solscan.io/tx/3PjPxqLuyuQYsmQxadbCXYa76fy2VVgtyzDgFp7eFvn7q8prw1AhQ7xcF632QKonaTbb8DEj9HQVFtqhDspqsQmZ) |
| 64 / 41 | 2026-10-17T08:01:26.209Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 65 / 42 | 2026-10-17T08:01:25.915Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 66 / 43 | 2026-10-17T08:01:26.317Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 72 / 41 | 2026-10-17T08:02:56.770Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 73 / 42 | 2026-10-17T08:02:56.631Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 74 / 43 | 2026-10-17T08:02:57.032Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 75 / 44 | 2026-10-17T08:02:57.148Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 76 / 45 | 2026-10-17T08:02:58.028Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 77 / 46 | 2026-10-17T08:02:57.756Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 78 / 47 | 2026-10-17T08:02:57.635Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 79 / 48 | 2026-10-17T08:02:57.344Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 85 / 54 | 2026-10-17T08:02:56.063Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 86 / 55 | 2026-10-17T08:02:56.177Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 87 / 56 | 2026-10-17T08:02:56.545Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 90 / 43 | 2026-10-17T08:04:29.207Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 92 / 45 | 2026-10-17T08:04:26.115Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 93 / 46 | 2026-10-17T08:04:29.317Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 94 / 47 | 2026-10-17T08:04:25.918Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 96 / 49 | 2026-10-17T08:04:26.917Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 97 / 50 | 2026-10-17T08:04:26.806Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 98 / 51 | 2026-10-17T08:04:26.543Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 99 / 52 | 2026-10-17T08:04:29.603Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 100 / 53 | 2026-10-17T08:04:26.444Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 102 / 55 | 2026-10-17T08:04:28.772Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 103 / 56 | 2026-10-17T08:04:28.931Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 104 / 57 | 2026-10-17T08:04:27.211Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 105 / 58 | 2026-10-17T08:04:27.316Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 106 / 59 | 2026-10-17T08:04:27.601Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 107 / 60 | 2026-10-17T08:04:27.717Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 108 / 61 | 2026-10-17T08:04:27.929Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 109 / 62 | 2026-10-17T08:04:28.204Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 110 / 63 | 2026-10-17T08:04:28.407Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 111 / 64 | 2026-10-17T08:04:28.536Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 112 / 41 | 2026-10-17T08:05:59.540Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 113 / 42 | 2026-10-17T08:05:59.238Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 114 / 43 | 2026-10-17T08:05:58.238Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 115 / 44 | 2026-10-17T08:05:58.764Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 117 / 46 | 2026-10-17T08:05:58.339Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 118 / 47 | 2026-10-17T08:05:56.027Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 119 / 48 | 2026-10-17T08:05:58.942Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 120 / 49 | 2026-10-17T08:05:56.624Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 122 / 51 | 2026-10-17T08:05:56.435Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 123 / 52 | 2026-10-17T08:05:58.547Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 124 / 53 | 2026-10-17T08:05:56.227Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 125 / 54 | 2026-10-17T08:05:59.426Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 126 / 55 | 2026-10-17T08:05:57.853Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 127 / 56 | 2026-10-17T08:05:57.946Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 128 / 57 | 2026-10-17T08:05:56.737Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 129 / 58 | 2026-10-17T08:05:56.962Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 132 / 61 | 2026-10-17T08:05:57.228Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 133 / 62 | 2026-10-17T08:05:57.356Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 134 / 63 | 2026-10-17T08:05:57.542Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 136 / 65 | 2026-10-17T08:05:59.797Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 137 / 66 | 2026-10-17T08:05:59.998Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 138 / 67 | 2026-10-17T08:06:00.234Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 139 / 68 | 2026-10-17T08:06:00.380Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 140 / 69 | 2026-10-17T08:06:00.540Z | Sell 0.0025 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 141 / 70 | 2026-10-17T08:06:00.837Z | Sell 0.003 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 142 / 71 | 2026-10-17T08:06:00.996Z | Sell 0.0035 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 143 / 72 | 2026-10-17T08:06:01.253Z | Sell 0.004 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| — / — | 2026-10-17T08:00:28.623249159Z | Auction 295573; no order mapping available | `SolverFailed`: `Solver engine returned an invalid response`; scenario impact unverified; Ownership unknown | No order ID available: window-wide solve failure, not a linked placement failure |
| — / 50 | 2026-10-17T08:07:09.543611593Z | Cleanup: Sell 0.628922 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (native); received 0.005988148 SOL | `PriorityFeeTooHigh(OverBudget { lamports: 1165986, cap: 1000000 })` (auction 295654, solution 0, 2026-10-17T08:07:09.543611593Z); later filled; excluded from scenario totals | [0x52f1e19456668f945a251c1dec608557bd6b00d012281b12e5783d6abd7dec90](https://debug.barn.cow.fi/order/0x52f1e19456668f945a251c1dec608557bd6b00d012281b12e5783d6abd7dec90); [settlement](https://solscan.io/tx/46arwGGfDC33d9PWJuieBbAaqS1W7fP8s2YG9rfweKLWxfYDdhpbxk511v6LD5RuWg8JfGPNqfG1xggKxemmdfvE) |
| — / 59 | 2026-10-17T08:07:34.550473278Z | Cleanup: Sell 0.735527 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) → SOL (native); received 0.007003491 SOL | `PriorityFeeTooHigh(OverBudget { lamports: 1355459, cap: 1000000 })` (auction 295659, solution 1, 2026-10-17T08:07:34.550473278Z); later filled; excluded from scenario totals | [0x630c774dee953855e73aa1022780f98fb4437552fe81d5fefb52e763bf19522c](https://debug.barn.cow.fi/order/0x630c774dee953855e73aa1022780f98fb4437552fe81d5fefb52e763bf19522c); [settlement](https://solscan.io/tx/3niqdHGVSdiFYNFno7r25inZXHrUR6tLEay3EKCiNcZoPuSgueL7PHQqa5NehU5XunbHEyd4QmEajVPDDnzrhRsi) |

</details>

## 6. Token coverage

Inconclusive for broad token coverage: fixed-input SOL sells reached 5 tokens. None of the 15 exact-output buys reached placement.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 5. Filled / placed: 5/5. Median / longest fill: 22.227 / 22.292 seconds.

Filled / scheduled: 5/55. Failures before placement: 50 (47 NoLiquidity; 3 expected autopilot rejections).

**Ownership unknown:** each `NoLiquidity` row below means the quote API returned no usable route for that request. Cause unknown; this does not establish absent token liquidity or a solver defect.

Successful fixed-input sells: SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo). All 5 used 0.01 SOL input; none proves a token→SOL sell or exact-output buy works. Successful token-input sells: none. Successful exact-output buys: none (0/15 placed). Symbols use the saved mint mapping; successful output decimals were verified by RPC.

Of 40 fixed-input sells, 5 filled, 32 had no usable quote and 3 were expected autopilot rejections. All 15 exact-output buys failed during quoting. Rows 159–161 were rejected for Token-2022 transfer fees before solver participation; this is an autopilot limitation, not a Kaisersolver limitation.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 144 / 73 | 2026-10-17T08:08:50.797879533Z | Sell 0.01 SOL (native) → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored); received 9.180371 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); signed minimum 9.13854 | `PriorityFeeTooHigh(OverBudget { lamports: 1110464, cap: 1000000 })` (auction 295674, solution 0, 2026-10-17T08:08:50.797879533Z); later filled; observed after 22.227s | [0x04f1924f064763d555e9a5dd86a40c956bd92c9e8f9b239d22d4fd718b8d1b1b](https://debug.barn.cow.fi/order/0x04f1924f064763d555e9a5dd86a40c956bd92c9e8f9b239d22d4fd718b8d1b1b); [settlement](https://solscan.io/tx/5usuZxw1v8XZRWnnshmrRQtC4rJ26EP5yL2cRB7XjyKL3DxdANspkdZAArEg5jaPvxTAW3uhTbbUwSXAnrLsisg7) |
| 145 / 74 | 2026-10-17T08:08:39.098Z | Sell 0.01 SOL (native) → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) (sponsored); received 338.420782 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); signed minimum 336.724591 | Filled; observed after 12.793s | [0x23a1ef9f95206201727808c4859d921fe886bf9ff32a6acb2e3be10a3a1777b3](https://debug.barn.cow.fi/order/0x23a1ef9f95206201727808c4859d921fe886bf9ff32a6acb2e3be10a3a1777b3); [settlement](https://solscan.io/tx/4JmVKa95SP7AvR72oukmVzyFQ1CxuDJcipfNBiLT3GcT56AWv4UsqGmtf3rdVXRyVNkC46F47RJDcSvfCigg6CKL) |
| 146 / 75 | 2026-10-17T08:08:50.767063973Z | Sell 0.01 SOL (native) → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored); received 1.048339 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); signed minimum 1.042988 | `PriorityFeeTooHigh(OverBudget { lamports: 1110464, cap: 1000000 })` (auction 295674, solution 5, 2026-10-17T08:08:50.767063973Z); later filled; observed after 22.292s | [0xa5f99fb1844619a7e1b12fa3a9c6e56d303d72590608ca661463d3a98b355258](https://debug.barn.cow.fi/order/0xa5f99fb1844619a7e1b12fa3a9c6e56d303d72590608ca661463d3a98b355258); [settlement](https://solscan.io/tx/4Gwr8CAmc8cHDRZ3dM6W6gfPXLGKAJH62dtEbjjr6DpVZVJH7xBhHi8NAJCsXDFtecf6NfWspZyF8joWEbFgDiYp) |
| 147 / 76 | 2026-10-17T08:08:40.741Z | Sell 0.01 SOL (native) → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) (self); received 227.142297 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); signed minimum 225.9543 | Filled; observed after 12.643s | [0x69ec4aafcf35b3fd0a812b022fd3f9afcfe37746d5b7a38eb7f0fd2cbe7c9d88](https://debug.barn.cow.fi/order/0x69ec4aafcf35b3fd0a812b022fd3f9afcfe37746d5b7a38eb7f0fd2cbe7c9d88); [settlement](https://solscan.io/tx/WCrReZMZSFHrYLa7wSiNDhYBX4RCHWy4hTwFkbG5uRhsP3TTguyigzme4fypfdRvg5NJFL5uMeWbV6djx9hBd65) |
| 148 / 77 | 2026-10-17T08:08:50.782430651Z | Sell 0.01 SOL (native) → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) (sponsored); received 1.048334 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo); signed minimum 1.042983 | `PriorityFeeTooHigh(OverBudget { lamports: 1110464, cap: 1000000 })` (auction 295674, solution 4, 2026-10-17T08:08:50.782430651Z); later filled; observed after 22.249s | [0x912784cd70a1ac7ce2b97074763e7604473dc611bd89675c65b79b5a59f724a8](https://debug.barn.cow.fi/order/0x912784cd70a1ac7ce2b97074763e7604473dc611bd89675c65b79b5a59f724a8); [settlement](https://solscan.io/tx/5E5ntw8DKNGDHemzsmPo1XPf6WuXFQpVeM4X8HsMMYtwYoK73kQYR5kd21K6PTr8JXqmvfSuZm2WkBox9tvBTJEd) |
| 149 / 78 | 2026-10-17T08:08:36.170Z | Sell 0.01 SOL (native) → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 150 / 79 | 2026-10-17T08:08:36.381Z | Sell 0.01 SOL (native) → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 151 / 80 | 2026-10-17T08:08:36.483Z | Sell 0.01 SOL (native) → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 152 / 81 | 2026-10-17T08:08:36.776Z | Sell 0.01 SOL (native) → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 153 / 82 | 2026-10-17T08:08:36.914Z | Sell 0.01 SOL (native) → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 154 / 83 | 2026-10-17T08:08:37.176Z | Sell 0.01 SOL (native) → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 155 / 84 | 2026-10-17T08:08:37.286Z | Sell 0.01 SOL (native) → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 156 / 85 | 2026-10-17T08:08:37.577Z | Sell 0.01 SOL (native) → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 157 / 86 | 2026-10-17T08:08:37.686Z | Sell 0.01 SOL (native) → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 158 / 87 | 2026-10-17T08:08:37.970Z | Sell 0.01 SOL (native) → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 162 / 91 | 2026-10-17T08:08:38.487Z | Sell 0.005 SOL (native) → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 163 / 92 | 2026-10-17T08:08:38.973Z | Sell 0.005 SOL (native) → [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 164 / 93 | 2026-10-17T08:08:40.091Z | Sell 0.005 SOL (native) → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 165 / 94 | 2026-10-17T08:08:40.332Z | Sell 0.005 SOL (native) → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 166 / 95 | 2026-10-17T08:08:40.532Z | Sell 0.005 SOL (native) → [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 167 / 96 | 2026-10-17T08:08:40.887Z | Sell 0.005 SOL (native) → [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 168 / 97 | 2026-10-17T08:08:41.307Z | Sell 0.005 SOL (native) → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 169 / 98 | 2026-10-17T08:08:41.533Z | Sell 0.005 SOL (native) → [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 170 / 99 | 2026-10-17T08:08:41.691Z | Sell 0.005 SOL (native) → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 171 / 100 | 2026-10-17T08:08:42.129Z | Sell 0.005 SOL (native) → [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 172 / 101 | 2026-10-17T08:08:42.480Z | Sell 0.005 SOL (native) → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 173 / 102 | 2026-10-17T08:08:42.681Z | Sell 0.005 SOL (native) → [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 174 / 103 | 2026-10-17T08:08:42.935Z | Sell 0.005 SOL (native) → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 175 / 104 | 2026-10-17T08:08:43.305Z | Sell 0.005 SOL (native) → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 176 / 105 | 2026-10-17T08:08:43.533Z | Sell 0.005 SOL (native) → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 177 / 106 | 2026-10-17T08:08:43.708Z | Sell 0.005 SOL (native) → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 178 / 107 | 2026-10-17T08:08:43.878Z | Sell 0.005 SOL (native) → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 179 / 108 | 2026-10-17T08:08:44.173Z | Sell 0.005 SOL (native) → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 180 / 109 | 2026-10-17T08:08:44.293Z | Sell 0.005 SOL (native) → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 181 / 110 | 2026-10-17T08:08:44.502Z | Sell 0.005 SOL (native) → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 182 / 111 | 2026-10-17T08:08:44.724Z | Sell 0.005 SOL (native) → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 183 / 112 | 2026-10-17T08:08:45.035Z | Sell 0.005 SOL (native) → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 184 / 73 | 2026-10-17T08:09:01.481Z | Buy SOL (native) → exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 185 / 74 | 2026-10-17T08:08:52.190Z | Buy SOL (native) → exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 186 / 75 | 2026-10-17T08:09:01.680Z | Buy SOL (native) → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 187 / 76 | 2026-10-17T08:08:53.547Z | Buy SOL (native) → exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) (self) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 188 / 77 | 2026-10-17T08:09:01.992Z | Buy SOL (native) → exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 189 / 78 | 2026-10-17T08:08:39.093Z | Buy SOL (native) → exactly 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 190 / 79 | 2026-10-17T08:08:39.287Z | Buy SOL (native) → exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 191 / 80 | 2026-10-17T08:08:39.484Z | Buy SOL (native) → exactly 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) (self) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 192 / 81 | 2026-10-17T08:08:39.768Z | Buy SOL (native) → exactly 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 193 / 82 | 2026-10-17T08:08:40.078Z | Buy SOL (native) → exactly 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 194 / 83 | 2026-10-17T08:08:40.784Z | Buy SOL (native) → exactly 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 195 / 84 | 2026-10-17T08:08:41.168Z | Buy SOL (native) → exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) (self) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 196 / 85 | 2026-10-17T08:08:41.921Z | Buy SOL (native) → exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 197 / 86 | 2026-10-17T08:08:42.286Z | Buy SOL (native) → exactly 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 198 / 87 | 2026-10-17T08:08:43.133Z | Buy SOL (native) → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) (sponsored) | initial exact-output quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |

</details>

## 7. Fresh accounts

Inconclusive for sponsored account opening: only the 2 self-paid controls were placed and filled. The other 6 requests failed during quoting despite larger amounts and 5% slippage.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 2. Filled / placed: 2/2. Median / longest fill: 8.105 / 12.596 seconds.

Filled / scheduled: 2/8. Failures before placement: 6 (6 NoLiquidity).

**Ownership unknown:** each `NoLiquidity` row below means the quote API returned no usable route for that request. Cause unknown; this does not establish absent token liquidity or a solver defect.

Setup checked all 8 receiving-account addresses at 08:10:10.095 UTC and recorded the scenario as fresh-checked; their wallets were excluded from ordinary account preparation. Settings: 0.15 SOL funding per wallet, 500 bps (5%) slippage, 0.1 SOL sell inputs and exact buys of 10 USDC or USDT.

Only rows 199 and 203 reached placement, both self-paid. Their receiving token accounts already existed with zero balance at settlement, consistent with self-paid order creation; these controls do not show the solver or sponsor opening a receiving account. Sponsored sells (200, 204) and all exact buys (201, 202, 205, 206) returned NoLiquidity before placement. Larger amounts did not remove this quote-stage failure, and no signed-limit or account-rent settlement error was observed here.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 199 / 113 | 2026-10-17T08:10:14.796Z | Sell 0.1 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self); received 10.485423 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v); signed minimum 9.960877 | Filled; observed after 3.614s | [0xdcdbc85b9ec3602671bc243b39c6c9d6d75c3519e9cf5a124522cb655e6640d7](https://debug.barn.cow.fi/order/0xdcdbc85b9ec3602671bc243b39c6c9d6d75c3519e9cf5a124522cb655e6640d7); [settlement](https://solscan.io/tx/66NJ6VkF4VcoU2PSDdiDoYQDLdsDUxuRWCs4KEHVeC7UMJBs4guW91bQNY5BddFi2JswraEjfxXkajzhdxDq8odH) |
| 203 / 117 | 2026-10-17T08:10:15.635Z | Sell 0.1 SOL (native) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (self); received 10.500042 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB); signed minimum 9.973713 | Filled; observed after 12.596s | [0x8ba749871f4d30c20e8156f535615c1c949953b2660f8c1af209a327a032acda](https://debug.barn.cow.fi/order/0x8ba749871f4d30c20e8156f535615c1c949953b2660f8c1af209a327a032acda); [settlement](https://solscan.io/tx/3mFC1Yix6xSDbv6gm4rvDjvtEXFUguczXuoBRoJgXw3jsZJ9H3Yzd6Wa2ARA9tmkV5ArhbSrsYpj8MsdLxGorUTv) |
| 200 / 114 | 2026-10-17T08:10:13.704Z | Sell 0.1 SOL (native) → [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 201 / 115 | 2026-10-17T08:10:14.516Z | Buy SOL (native) → exactly 10 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 202 / 116 | 2026-10-17T08:10:14.334Z | Buy SOL (native) → exactly 10 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 204 / 118 | 2026-10-17T08:10:14.027Z | Sell 0.1 SOL (native) → [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 205 / 119 | 2026-10-17T08:10:15.030Z | Buy SOL (native) → exactly 10 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (self) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| 206 / 120 | 2026-10-17T08:10:14.719Z | Buy SOL (native) → exactly 10 [USDT](https://solscan.io/token/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB) (sponsored) | main-order quote: `404 Not Found: NoLiquidity: no route found`; Ownership unknown; no order placed | No order ID: quote failed before placement |
| — / traders 1–120 | 2026-10-17T08:13:26.932Z | Composite-wide final token-account closure / cleanup funding | `Transaction simulation failed: Transaction results in an account (1) with insufficient funds for rent.`; final cleanup failed, all 120 traders remain pending in the saved checkpoint | No order ID: cleanup funding failed before an order was placed; no submitted transaction signature recorded |

**Composite cleanup:** 15 cleanup sell orders all filled and are excluded from the main totals; 3 had the recovered fee-cap rejections listed in scenarios 2 and 5. Intermediate cleanup sold leftover tokens, unwrapped temporary wSOL, reclaimed finished order records and swept native SOL while retaining prepared receiving accounts; the composite’s final account-closing step failed. A reclaimed order record is not a receiving token account.

The rent failure came from simulator cleanup funding, before solver participation. The local diagnosis reproduced the rent error with a 10,000-lamport top-up to an empty wallet and passed a read-only simulation with 660,240 lamports (650,240 rent floor plus 10,000 for closure fees). The local fix funds that floor; this saved run does not prove cleanup completed afterward. Owner: test team; finish cleanup and verify the pending accounts before marking the run finished.

</details>

</details>

## Exclusion audit

Excluded original row IDs: 159, 160, 161. These are unsupported non-zero transfer-fee probes, rejected before solver participation. They are absent from all scored tables and failure totals above. Their raw records remain in the original session files.

## Sources

Local session evidence: `2026-10-17-07-54-composite-kaisersolver-run/sim/run.json`, `sim/journal.jsonl`, saved `meta.json`, and `orders.json` / `txs.json` where present. Prior checked investigation: `20261017_kaisersolver_solver_test_report_for_cow.md`.

This report was recalculated on 20 October 2026. No new trades, cancellations or cleanup transactions were sent to prepare it.
