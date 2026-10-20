# Fractal composite test report

Session: `2026-10-17-09-36-composite-fractal-run`. Environment: staging on Solana mainnet. Start: 2026-10-17T09:37:27.581Z. Saved observation end: 2026-10-17T10:08:00.782Z.

**TLDR:** 190/190 eligible planned flows filled (100.00%); 0 failed.

**Adjusted performance:** 190/190 eligible planned flows = **100.00%**. 3 unsupported non-zero transfer-fee rows are excluded from both numerator and denominator. Original schedule: 193 rows. Raw run evidence is unchanged.

A flow counts as filled only when its saved row result is filled. Main, prerequisite acquisition and cleanup orders are separate below; retries can produce more than one order per flow. These rates describe the recorded test conditions and do not establish production readiness.

Saved run status: finished=true; 0 unfinished scenario phases; final account cleanup pending for 0 wallets. A false finished flag can reflect cleanup rather than unfinished trading. This is the saved snapshot, not a new on-chain balance audit.

## Biggest recorded issues

No eligible scenario-row failures.

`NoLiquidity` means the quote path returned no usable route; it does not prove that the token has no liquidity or that the named solver caused it. Creation failures occur before settlement. A later cancelled order does not identify why a candidate solution failed.

## Scenario results

| Scenario | Eligible planned | Filled | Failed | Pending | Saved phase |
| --- | --- | --- | --- | --- | --- |
| solver-standard-pairs | 6 | 6 | 0 | 0 | finished |
| solver-same-direction-25 | 25 | 25 | 0 | 0 | finished |
| solver-burst-sell | 84 | 84 | 0 | 0 | finished |
| solver-cow | 15 | 15 | 0 | 0 | finished |
| solver-token-coverage | 52 | 52 | 0 | 0 | finished |
| solver-fresh-accounts | 8 | 8 | 0 | 0 | finished |

Saved placements: {'main': 190, 'acquire': 2, 'cleanup': 114}. Successful scenario settlements (main + prerequisite acquisition, excluding cleanup): 94 distinct signatures. Selected-order batch sizes: {1: 66, 2: 8, 3: 1, 4: 3, 5: 1, 6: 15}. Shared signatures show batching; they do not establish direct CoW matching.

Timing: median 11.548s; longest 29.991s across 192 successful main/acquisition orders. Endpoints: journal placement → simulator-observed fulfillment, including polling delay.

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
| 11 | 8 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 12 | 9 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 13 | 10 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 14 | 11 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 15 | 12 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 16 | 13 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 17 | 14 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 18 | 15 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 19 | 16 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 20 | 17 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 21 | 18 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 22 | 19 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 23 | 20 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 24 | 21 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 25 | 22 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 26 | 23 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 27 | 24 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 28 | 25 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 29 | 26 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 30 | 27 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 31 | 28 | SOL → JUP | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |

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
| 44 | 29 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 45 | 30 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 46 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 47 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 48 | 33 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 49 | 34 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 50 | 35 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 51 | 36 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 52 | 37 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 53 | 38 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 54 | 39 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 55 | 40 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 56 | 41 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 57 | 42 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 58 | 43 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 59 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 60 | 29 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 61 | 30 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 62 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 63 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 64 | 33 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 65 | 34 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 66 | 35 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 67 | 36 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 68 | 37 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 69 | 38 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 70 | 39 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 71 | 40 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 72 | 41 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 73 | 42 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 74 | 43 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 75 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 76 | 45 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 77 | 46 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 78 | 47 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 79 | 48 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 80 | 49 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 81 | 50 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 82 | 51 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 83 | 52 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 84 | 29 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 85 | 30 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 86 | 31 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 87 | 32 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 88 | 33 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 89 | 34 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 90 | 35 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 91 | 36 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 92 | 37 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 93 | 38 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 94 | 39 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 95 | 40 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 96 | 41 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 97 | 42 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 98 | 43 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 99 | 44 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 100 | 45 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 101 | 46 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 102 | 47 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 103 | 48 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 104 | 49 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 105 | 50 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 106 | 51 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 107 | 52 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 108 | 53 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 109 | 54 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 110 | 55 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 111 | 56 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 112 | 57 | SOL → USDC | sell 0.0025 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 113 | 58 | SOL → USDC | sell 0.003 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 114 | 59 | SOL → USDC | sell 0.0035 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 115 | 60 | SOL → USDC | sell 0.004 SOL; self | filled |  | See full order ledger below (same row and trader). |

</details>

<details>
<summary>solver-cow — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 116 | 62 | SOL → USDC | buy 2.6 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 117 | 64 | SOL → USDC | buy 1.3 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 118 | 65 | SOL → USDC | buy 3.1 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 119 | 66 | SOL → USDT | buy 3.1 USDT; sponsored | filled |  | See full order ledger below (same row and trader). |
| 120 | 67 | SOL → USDT | buy 1.1 USDT; sponsored | filled |  | See full order ledger below (same row and trader). |
| 121 | 68 | SOL → USDC | buy 3.2 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 122 | 61 | SOL → USDC | sell 0.02 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 123 | 62 | USDC → SOL | buy 0.02 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 124 | 63 | SOL → USDC | sell 0.03 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 125 | 64 | USDC → SOL | sell 1.2 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 126 | 65 | USDC → USDT | sell 3 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 127 | 66 | USDT → USDC | sell 3 USDT; sponsored | filled |  | See full order ledger below (same row and trader). |
| 128 | 67 | USDT → USDC | sell 1 USDT; sponsored | filled |  | See full order ledger below (same row and trader). |
| 129 | 68 | USDC → USDT | sell 3 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 130 | 69 | SOL → JUP | sell 0.02 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |

</details>

<details>
<summary>solver-token-coverage — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 131 | 70 | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 132 | 71 | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 133 | 72 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 134 | 73 | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | sell 0.01 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 135 | 74 | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 136 | 75 | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 137 | 76 | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 138 | 77 | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | sell 0.01 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 139 | 78 | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 140 | 79 | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 141 | 80 | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 142 | 81 | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | sell 0.01 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 143 | 82 | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 144 | 83 | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 145 | 84 | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | sell 0.01 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 149 | 88 | SOL → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 150 | 89 | SOL → [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 151 | 90 | SOL → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 152 | 91 | SOL → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 153 | 92 | SOL → [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 154 | 93 | SOL → [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 155 | 94 | SOL → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 156 | 95 | SOL → [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 157 | 96 | SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 158 | 97 | SOL → [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 159 | 98 | SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 160 | 99 | SOL → [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 161 | 100 | SOL → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 162 | 101 | SOL → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 163 | 102 | SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 164 | 103 | SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 165 | 104 | SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 166 | 105 | SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 167 | 106 | SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 168 | 107 | SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 169 | 108 | SOL → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 170 | 109 | SOL → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL) | sell 0.005 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 171 | 70 | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | buy 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); sponsored | filled |  | See full order ledger below (same row and trader). |
| 172 | 71 | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) | buy 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); sponsored | filled |  | See full order ledger below (same row and trader). |
| 173 | 72 | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | buy 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sponsored | filled |  | See full order ledger below (same row and trader). |
| 174 | 73 | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) | buy 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); self | filled |  | See full order ledger below (same row and trader). |
| 175 | 74 | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | buy 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo); sponsored | filled |  | See full order ledger below (same row and trader). |
| 176 | 75 | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) | buy 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH); sponsored | filled |  | See full order ledger below (same row and trader). |
| 177 | 76 | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | buy 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1); sponsored | filled |  | See full order ledger below (same row and trader). |
| 178 | 77 | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) | buy 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W); self | filled |  | See full order ledger below (same row and trader). |
| 179 | 78 | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) | buy 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk); sponsored | filled |  | See full order ledger below (same row and trader). |
| 180 | 79 | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) | buy 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3); sponsored | filled |  | See full order ledger below (same row and trader). |
| 181 | 80 | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) | buy 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh); sponsored | filled |  | See full order ledger below (same row and trader). |
| 182 | 81 | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) | buy 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1); self | filled |  | See full order ledger below (same row and trader). |
| 183 | 82 | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) | buy 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb); sponsored | filled |  | See full order ledger below (same row and trader). |
| 184 | 83 | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) | buy 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8); sponsored | filled |  | See full order ledger below (same row and trader). |
| 185 | 84 | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | buy 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB); sponsored | filled |  | See full order ledger below (same row and trader). |

</details>

<details>
<summary>solver-fresh-accounts — complete eligible row evidence</summary>

| Row | Trader | Direction | Requested amount / mode | Flow result | Exact saved reason | Debug tool |
| --- | --- | --- | --- | --- | --- | --- |
| 186 | 110 | SOL → USDC | sell 0.1 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 187 | 111 | SOL → USDC | sell 0.1 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 188 | 112 | SOL → USDC | buy 10 USDC; self | filled |  | See full order ledger below (same row and trader). |
| 189 | 113 | SOL → USDC | buy 10 USDC; sponsored | filled |  | See full order ledger below (same row and trader). |
| 190 | 114 | SOL → USDT | sell 0.1 SOL; self | filled |  | See full order ledger below (same row and trader). |
| 191 | 115 | SOL → USDT | sell 0.1 SOL; sponsored | filled |  | See full order ledger below (same row and trader). |
| 192 | 116 | SOL → USDT | buy 10 USDT; self | filled |  | See full order ledger below (same row and trader). |
| 193 | 117 | SOL → USDT | buy 10 USDT; sponsored | filled |  | See full order ledger below (same row and trader). |

</details>

## All recorded orders

<details>
<summary>Main, acquisition and cleanup order ledger</summary>

| Row | Trader | Step | Time (UTC) | Order | Final saved/API status | Debug tool | Settlement |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 1 | main | 2026-10-17T09:37:29.579Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5308e7eadf87288950bb21dbcb86334783319c4fe32bf2992c97fb71e3839eee) | [Transaction](https://solscan.io/tx/41NsrCAUqjXkgxc2KAUhc8AeM5YeucaTqrWbNuZxBdfhEyFxRWT5tQTpi4KimyJ5a866Q2bLUyJajzgyd47X3pSL) |
| 2 | 2 | main | 2026-10-17T09:37:30.830Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd6950a4f191bb29ff54eae9c4693b0e6bc4b1ad389a308c7a18d71a7e564d4f3) | [Transaction](https://solscan.io/tx/28FjAqphu8VjeyiGABQ5C53kC2LkCFdr1hcinyXTao3HusU6yWN4WtWrY4Uxg5cwQaYY7hwYvCGSRZ7EuCDLuaX2) |
| 3 | 3 | acquire | 2026-10-17T09:37:35.718Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbe654897596c94f29121277cce5df6ee809de87748256bffb6c687039a0f3034) | [Transaction](https://solscan.io/tx/q1SyrdZUb4qBfaNMDHdZDmAu9SNVoh3e56eEKnqBi2ihZrdvjwjJsc9iowjhunUeuQQvhuYKXWGm8J33NeEgABv) |
| 4 | 1 | main | 2026-10-17T09:37:37.220Z | SOL → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8dc77076d6d95651948bb763018477161faaf4d74c5c1360c4201e32e048c93e) | [Transaction](https://solscan.io/tx/5VgwywQqvTpWti51hrfgkA6EQviL2WbNGqm1ovNRWAAANVu3VgEPxKoHtbcq3fMbLVPNxCf49fCkzZBBDikTvxZ6) |
| 5 | 2 | main | 2026-10-17T09:37:44.640Z | SOL → USDT; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x096dfed5820b1a5a5dfe81e10e32c8e253abc285acbc36aa23bc4f4d51e29f5e) | [Transaction](https://solscan.io/tx/2cNKUutzcXHkVHdHgoCZC7Txmiz4zeEfaTdCrARRtGhWzLEBLgbSqWNLnsamDfbvTfVcmwtE3QGSbaZNnP5txySy) |
| 3 | 3 | main | 2026-10-17T09:37:49.940Z | JUP → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd16084785ac0b0252f14d639b4d6b941421aed500a6c379b3b679a05bd66e430) | [Transaction](https://solscan.io/tx/5DrES1gG9JkWZYM2uQdU5V9EQoTVAkhd2h2qTe2WX7WzRyPD5krKspBnS5sV5CDEX692WwvzDKYFGXegQNgKR5eG) |
| 6 | 3 | acquire | 2026-10-17T09:38:03.825Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x04d77a3d72f3818e4debeedc6f7a18930b027c2644f5d4a8c564594e5c7e9d6f) | [Transaction](https://solscan.io/tx/ZfSwdvUq9VZHXeUuaAPhW2aURK4k5HvbWQGgJ5dTBmvRzW5UnfQsw4EYbK8ssGwr8qUXwcA8Rzhz8mxNyLMPFzF) |
| 6 | 3 | main | 2026-10-17T09:38:14.316Z | JUP → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xaf5b2e53022266408a342d0c25beb8d0439e0e892547fddf33451f6bc3d5ea72) | [Transaction](https://solscan.io/tx/4gXTqcLRhPHSTv2DzRFH4xpH6o6wBgpqYmuanyW95f5emacxrBgK5xWqMtn1fUmNyH84jS4wkGrpndqri8K5Qypq) |
| — | 2 | cleanup | 2026-10-17T09:38:27.754Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0eeb38b6e9c665d3c331dc477f0aeed0c6d2dabdd7cc08a1478345610889ba01) | [Transaction](https://solscan.io/tx/KaAAHfLqmsN4LLctr2H5PrjTX1v6zeyxndsGnFHxGSdMx4EiEmzR9YX15hnxbuYfL3p5XHgTyXpQn3oGFi1t1Qw) |
| — | 3 | cleanup | 2026-10-17T09:38:29.000Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb0e9e2ec1d5fae714fc7a666ebe224dbb15a2d1d84d8a4a84177ada622c3c639) | [Transaction](https://solscan.io/tx/rieCKyEuzJtyjs1wq2PNUmBdHpYbn6ATE351Bxu1hPsE7YSpMg4kHtTzdtvXpxoKurCU9ixzam7XvuWZG5B2UF6) |
| — | 1 | cleanup | 2026-10-17T09:38:29.250Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x33c74bb80f43b931b45d006bca30d06842008b77407eda338b2d72dd7122cbe7) | [Transaction](https://solscan.io/tx/rieCKyEuzJtyjs1wq2PNUmBdHpYbn6ATE351Bxu1hPsE7YSpMg4kHtTzdtvXpxoKurCU9ixzam7XvuWZG5B2UF6) |
| 7 | 4 | main | 2026-10-17T09:39:27.896Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x352369d8b28ec3e6895f9a7771575e8c4e2faa4b41ea91fe42afb9bcec63ea0f) | [Transaction](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) |
| 8 | 5 | main | 2026-10-17T09:39:28.198Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9a16965396dc7d7fcd9abd8e22637f67cdde1cd71ec3b098b9b6c68d073b9d39) | [Transaction](https://solscan.io/tx/2fWXLUGe4DfsKYnqcyN1SE1s3JSrXJB2r7h1SvKpddgJmZDaX6qnUSTmpup1rn3NZkQLeLV8Mqm3b1KSQFZYeqW4) |
| 10 | 7 | main | 2026-10-17T09:39:28.399Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcc6c875420670039bb3e7e95cd0d86644052206119cec850f87ffeb981d9e742) | [Transaction](https://solscan.io/tx/52zzewc75xRmi58EfzrU7uwCo2Em43yPJ4wr2WPcqWyn96SsQhW33wcL6mQXTqcqjtUYpi3xqNznaPNeJjfYVyEg) |
| 9 | 6 | main | 2026-10-17T09:39:28.498Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x68429b2e51694597129525052f6c2b4e82c14d9b26558abf392ebd30eeac1c23) | [Transaction](https://solscan.io/tx/2fWXLUGe4DfsKYnqcyN1SE1s3JSrXJB2r7h1SvKpddgJmZDaX6qnUSTmpup1rn3NZkQLeLV8Mqm3b1KSQFZYeqW4) |
| 11 | 8 | main | 2026-10-17T09:39:28.899Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd2a9d6f001197b70c8a3192324608e8d075b5c92d4b426d0add2e233466f5365) | [Transaction](https://solscan.io/tx/52zzewc75xRmi58EfzrU7uwCo2Em43yPJ4wr2WPcqWyn96SsQhW33wcL6mQXTqcqjtUYpi3xqNznaPNeJjfYVyEg) |
| 13 | 10 | main | 2026-10-17T09:39:29.198Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3f98f710d940c1e6da25a1473847bf44e82f006de69969eaf0f65be20ff76d8c) | [Transaction](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) |
| 14 | 11 | main | 2026-10-17T09:39:29.298Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x576ab924a57e5c0fedcf37e735de64f9568b25fad7b2747e731bbf4da7e507f6) | [Transaction](https://solscan.io/tx/5oMa6HFsv39ogz3TrM9G42BDonvwCvCJqBzabPP7ZbbMuxSvJcAmytF39ZLPktZfyYRFNpaNisYhryut4bhVtpMs) |
| 15 | 12 | main | 2026-10-17T09:39:29.598Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xba4f3a5fae5bf23332d0e3af339b5cc8f4b92d9046e82b7cde958bdc359ff8e4) | [Transaction](https://solscan.io/tx/52zzewc75xRmi58EfzrU7uwCo2Em43yPJ4wr2WPcqWyn96SsQhW33wcL6mQXTqcqjtUYpi3xqNznaPNeJjfYVyEg) |
| 16 | 13 | main | 2026-10-17T09:39:29.698Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb11addb8c7f8aae75706c82c8427d543e715c87e40dd79adf6d1dd9673af8dac) | [Transaction](https://solscan.io/tx/2fWXLUGe4DfsKYnqcyN1SE1s3JSrXJB2r7h1SvKpddgJmZDaX6qnUSTmpup1rn3NZkQLeLV8Mqm3b1KSQFZYeqW4) |
| 17 | 14 | main | 2026-10-17T09:39:30.000Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x44a3c08ba08ce188bb7b5f762c5a61dc15d02ff6e7e985164cefb67df1e3c29d) | [Transaction](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) |
| 18 | 15 | main | 2026-10-17T09:39:30.198Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xda3384ddad4d7b4c90fa08a9f990c4c260c0abd5a2db88b4618efa52df732df4) | [Transaction](https://solscan.io/tx/52zzewc75xRmi58EfzrU7uwCo2Em43yPJ4wr2WPcqWyn96SsQhW33wcL6mQXTqcqjtUYpi3xqNznaPNeJjfYVyEg) |
| 19 | 16 | main | 2026-10-17T09:39:30.400Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xeb6a64102a0f50de9028deb5a9db9d9f373855737a60f80500387b5cce1b0e07) | [Transaction](https://solscan.io/tx/52zzewc75xRmi58EfzrU7uwCo2Em43yPJ4wr2WPcqWyn96SsQhW33wcL6mQXTqcqjtUYpi3xqNznaPNeJjfYVyEg) |
| 12 | 9 | main | 2026-10-17T09:39:30.902Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x49a51e5cd23b0cc5e2bfaee89a28bfd235772c96ded3f69db8e397032971b10b) | [Transaction](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) |
| 21 | 18 | main | 2026-10-17T09:39:31.098Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x423fe9045783fbab6bf2476e39f7179496ff412614a052eb0d61569e34b9f4ce) | [Transaction](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) |
| 22 | 19 | main | 2026-10-17T09:39:31.200Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc74e14d9eff0093db2c3fcf41ab2b7d7f6c68fbefe38cd963565011a609c8e6d) | [Transaction](https://solscan.io/tx/52zzewc75xRmi58EfzrU7uwCo2Em43yPJ4wr2WPcqWyn96SsQhW33wcL6mQXTqcqjtUYpi3xqNznaPNeJjfYVyEg) |
| 23 | 20 | main | 2026-10-17T09:39:31.499Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x87c592fd15302c76aef5eaf5f3b9771a6177da9ad936531b4052586792f1e657) | [Transaction](https://solscan.io/tx/2fWXLUGe4DfsKYnqcyN1SE1s3JSrXJB2r7h1SvKpddgJmZDaX6qnUSTmpup1rn3NZkQLeLV8Mqm3b1KSQFZYeqW4) |
| 24 | 21 | main | 2026-10-17T09:39:31.646Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x49be1d804d1ed24ff2dd46cabcf59df0ebfd019c15ac655df1687306a7d336fe) | [Transaction](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) |
| 25 | 22 | main | 2026-10-17T09:39:31.699Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9ec34ed4588e85b56d7bbe558b17888df220f59a5f136d3024ee9bf16324655c) | [Transaction](https://solscan.io/tx/2fWXLUGe4DfsKYnqcyN1SE1s3JSrXJB2r7h1SvKpddgJmZDaX6qnUSTmpup1rn3NZkQLeLV8Mqm3b1KSQFZYeqW4) |
| 26 | 23 | main | 2026-10-17T09:39:31.802Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2759ccc0cd47d883d3811289822f15aa8548f5d6ba1f11e0b18318a64f1e3baa) | [Transaction](https://solscan.io/tx/5oMa6HFsv39ogz3TrM9G42BDonvwCvCJqBzabPP7ZbbMuxSvJcAmytF39ZLPktZfyYRFNpaNisYhryut4bhVtpMs) |
| 28 | 25 | main | 2026-10-17T09:39:31.927Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x60b6b8200865c7f8921509d08fef7dfad2cf0b128c3dfdeded44dd776ecf84b8) | [Transaction](https://solscan.io/tx/5oMa6HFsv39ogz3TrM9G42BDonvwCvCJqBzabPP7ZbbMuxSvJcAmytF39ZLPktZfyYRFNpaNisYhryut4bhVtpMs) |
| 27 | 24 | main | 2026-10-17T09:39:32.003Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf0bfa2d61663cd87ba12420187582a4c596ad3c47489b0842e6c1a920a0e8820) | [Transaction](https://solscan.io/tx/2yyQbWbD9nrguTZcR6rBke4w181EZfumWjdbdEhsmu6sNM8uaC1GNDPPGV6WjZcgSfzojbkJZiM3X5zqeqNQQvz8) |
| 29 | 26 | main | 2026-10-17T09:39:32.099Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x12d5e1134f3ead2e39af3e504cfbd223f5d32bb65b739610d9d243d3edb7a004) | [Transaction](https://solscan.io/tx/5oMa6HFsv39ogz3TrM9G42BDonvwCvCJqBzabPP7ZbbMuxSvJcAmytF39ZLPktZfyYRFNpaNisYhryut4bhVtpMs) |
| 30 | 27 | main | 2026-10-17T09:39:32.198Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0bb643b6c06d3c8cd8210d1de07f12c5df0129f7a0ddcf964a6f673052e2543b) | [Transaction](https://solscan.io/tx/5oMa6HFsv39ogz3TrM9G42BDonvwCvCJqBzabPP7ZbbMuxSvJcAmytF39ZLPktZfyYRFNpaNisYhryut4bhVtpMs) |
| 31 | 28 | main | 2026-10-17T09:39:32.299Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x92295e23a03df6e893592e4b95767b23692b38d1c995acf2dd5d938514c33011) | [Transaction](https://solscan.io/tx/2fWXLUGe4DfsKYnqcyN1SE1s3JSrXJB2r7h1SvKpddgJmZDaX6qnUSTmpup1rn3NZkQLeLV8Mqm3b1KSQFZYeqW4) |
| 20 | 17 | main | 2026-10-17T09:39:32.400Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2c0af45fe3e5fd920ff317229aadfda32449533d7f3c615bc08010d8b18afa1a) | [Transaction](https://solscan.io/tx/5oMa6HFsv39ogz3TrM9G42BDonvwCvCJqBzabPP7ZbbMuxSvJcAmytF39ZLPktZfyYRFNpaNisYhryut4bhVtpMs) |
| — | 5 | cleanup | 2026-10-17T09:40:00.890Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x27369f57005e8337bf90ebe578ec2043a7cfc8a0b029e521af7b37aee494e612) | [Transaction](https://solscan.io/tx/d3PZFB8uZBJpFuX74gYNSLuAgYHE1nb4Mw5XSUxPY5yBHGa8kL98YRAMFPtThWjJH7ayd5BWAcwdGMYhw87jiwz) |
| — | 6 | cleanup | 2026-10-17T09:40:01.791Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x754f2320feea1bf68fcbf485ee45405eef4127228c12de0b77283811fc2d3f57) | [Transaction](https://solscan.io/tx/d3PZFB8uZBJpFuX74gYNSLuAgYHE1nb4Mw5XSUxPY5yBHGa8kL98YRAMFPtThWjJH7ayd5BWAcwdGMYhw87jiwz) |
| — | 7 | cleanup | 2026-10-17T09:40:03.087Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcd668ed26b7b977d1640e27281c3e9a643b1966968829fc912e50835aa487424) | [Transaction](https://solscan.io/tx/4eiXYramDfMZHm1hhWnm1e3ZV5pWDgdHqUKWMv7PhTbLLV6BeRy3ZX25mphCZSCtACFoXp9ubb19odyUHptLjrWp) |
| — | 8 | cleanup | 2026-10-17T09:40:04.057Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xabc9967cadd679e44dd9d5ca40e9524a768ab43306ae5e2d78557958e8bec436) | [Transaction](https://solscan.io/tx/4eiXYramDfMZHm1hhWnm1e3ZV5pWDgdHqUKWMv7PhTbLLV6BeRy3ZX25mphCZSCtACFoXp9ubb19odyUHptLjrWp) |
| — | 9 | cleanup | 2026-10-17T09:40:05.001Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7e0fda31ed59c9d5610049ff96455973454b0d18769d1c683e38e4f3f9511bb6) | [Transaction](https://solscan.io/tx/4eiXYramDfMZHm1hhWnm1e3ZV5pWDgdHqUKWMv7PhTbLLV6BeRy3ZX25mphCZSCtACFoXp9ubb19odyUHptLjrWp) |
| — | 10 | cleanup | 2026-10-17T09:40:05.873Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x73cea5220c8f85f37adb7e90e6138d7fda5c806a678480cde97b01a58b9ee921) | [Transaction](https://solscan.io/tx/4eiXYramDfMZHm1hhWnm1e3ZV5pWDgdHqUKWMv7PhTbLLV6BeRy3ZX25mphCZSCtACFoXp9ubb19odyUHptLjrWp) |
| — | 11 | cleanup | 2026-10-17T09:40:06.882Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd4a100eb35e457762d4d8008cb31af74d887450c66a53fb137fcf43ad8ee20ba) | [Transaction](https://solscan.io/tx/4eiXYramDfMZHm1hhWnm1e3ZV5pWDgdHqUKWMv7PhTbLLV6BeRy3ZX25mphCZSCtACFoXp9ubb19odyUHptLjrWp) |
| — | 12 | cleanup | 2026-10-17T09:40:08.501Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4a40bbea4c518b38c85f9eab49b7ef3e72ad7e32400f8a9a6017f3f2440cead3) | [Transaction](https://solscan.io/tx/5id4ZpBWGkMpVPNBtW8i3kPBvUuALHXNGFLJ7D5Shj1EkBaRrgzJtKUvLnJa61eEruNPHYTabCn99s3fM4h3Vt87) |
| — | 13 | cleanup | 2026-10-17T09:40:10.441Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc9bf36797149d3ecc55e290283c9bfc0eb1e3363e02b109e3953d4d633e4cd01) | [Transaction](https://solscan.io/tx/5id4ZpBWGkMpVPNBtW8i3kPBvUuALHXNGFLJ7D5Shj1EkBaRrgzJtKUvLnJa61eEruNPHYTabCn99s3fM4h3Vt87) |
| — | 4 | cleanup | 2026-10-17T09:40:13.380Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfa6510da35340cb59528659c0af9d081204a66bbf2fce51d1a470b7e8c29c48a) | [Transaction](https://solscan.io/tx/5id4ZpBWGkMpVPNBtW8i3kPBvUuALHXNGFLJ7D5Shj1EkBaRrgzJtKUvLnJa61eEruNPHYTabCn99s3fM4h3Vt87) |
| — | 14 | cleanup | 2026-10-17T09:40:26.175Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf91666d33213c72a28b5dc47839d13f7bd4ab80d60d560284b6e706418a25a71) | [Transaction](https://solscan.io/tx/4wrKH2he4AAKi7qz7JxHU9AhtPpBcosvszxo6mgg4ohyY1qNBFG1UZX1JCoZEvAQdxuspGmpUqGpY58vZn8msJGK) |
| — | 15 | cleanup | 2026-10-17T09:40:33.117Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd4fc33b66302708d35394683dd17fd2fc1c29b0980be191a11cb9385d53157f3) | [Transaction](https://solscan.io/tx/63y5ozq2cKgSjXXa9FkhKrNpwJokZDxZSUU6GMhkPMFZQ3CUC84xMAPyhrZ3tjTHKpSxhw7HBGh5kAkBkV42YXCF) |
| — | 17 | cleanup | 2026-10-17T09:40:37.902Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa1c5def4b71d245429aeda87849e3a6068f530df48324e68b3cfd60b1300c937) | [Transaction](https://solscan.io/tx/4d3vjUCcHhnuio8VLgpDz3u9obnsKteoN9PyB2Df6Jc9UKLrZAJsQjKcHMc4v43MboALApRi2oFNx3ivpUru8YeP) |
| — | 16 | cleanup | 2026-10-17T09:40:38.281Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcd44939a910ae475a6325f091b18dff69b34d668186bf6a02f68c638e2856809) | [Transaction](https://solscan.io/tx/4d3vjUCcHhnuio8VLgpDz3u9obnsKteoN9PyB2Df6Jc9UKLrZAJsQjKcHMc4v43MboALApRi2oFNx3ivpUru8YeP) |
| — | 18 | cleanup | 2026-10-17T09:40:39.001Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe468dcb69f6b12bcd6e3f543a8abedf1a2c6788b1ea983db05f5f30842695e95) | [Transaction](https://solscan.io/tx/4d3vjUCcHhnuio8VLgpDz3u9obnsKteoN9PyB2Df6Jc9UKLrZAJsQjKcHMc4v43MboALApRi2oFNx3ivpUru8YeP) |
| — | 19 | cleanup | 2026-10-17T09:40:42.641Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xaf707f660fee1931b9639d1ea5985552801f3443c02e99d982538efe3b3a43b8) | [Transaction](https://solscan.io/tx/2tjbxWpYinWkJMbKEGJQmFvWQ9tpSat7FU1NQFmYrcfRAiDdtkFJ7ianAPdCpNAhXstMSYj6RDJddePN5t9qAyTS) |
| — | 20 | cleanup | 2026-10-17T09:40:42.842Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xccf1c0acca14abffaec114915abf831b76afe0ddcd58efd846fa4f8bbfac89bb) | [Transaction](https://solscan.io/tx/2tjbxWpYinWkJMbKEGJQmFvWQ9tpSat7FU1NQFmYrcfRAiDdtkFJ7ianAPdCpNAhXstMSYj6RDJddePN5t9qAyTS) |
| — | 21 | cleanup | 2026-10-17T09:40:53.346Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x65d9b0e686beb81467b011a18a10f9f9040d7311e31a4ecd99d47cca614b837f) | [Transaction](https://solscan.io/tx/2tjbxWpYinWkJMbKEGJQmFvWQ9tpSat7FU1NQFmYrcfRAiDdtkFJ7ianAPdCpNAhXstMSYj6RDJddePN5t9qAyTS) |
| — | 22 | cleanup | 2026-10-17T09:40:53.910Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4ab25cd17e82408dbaf4339f2d147be8510fe3688bbe8003c12070565c5c0809) | [Transaction](https://solscan.io/tx/2tjbxWpYinWkJMbKEGJQmFvWQ9tpSat7FU1NQFmYrcfRAiDdtkFJ7ianAPdCpNAhXstMSYj6RDJddePN5t9qAyTS) |
| — | 24 | cleanup | 2026-10-17T09:40:57.257Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1bdefe6393b671071b0aae8d3622c942be3902a89599c1dd64148322bb1816a9) | [Transaction](https://solscan.io/tx/xDKHcNUaB6UfCJBNddMbVQCKpbcL1gzzLYZc5XZYQMMuPFy4TaMvgFNukpuJ8e3jJu8u2wpV5gnireHc863qm9A) |
| — | 23 | cleanup | 2026-10-17T09:40:59.397Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9fdef49be603530d1b1b5ac432304124b93f21afaf46051a3638a714650c704d) | [Transaction](https://solscan.io/tx/xDKHcNUaB6UfCJBNddMbVQCKpbcL1gzzLYZc5XZYQMMuPFy4TaMvgFNukpuJ8e3jJu8u2wpV5gnireHc863qm9A) |
| — | 25 | cleanup | 2026-10-17T09:41:17.157Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x55c74c735de78a3be1322e2042f9f58c747d401dcea083d1aadf445871a5681b) | [Transaction](https://solscan.io/tx/3BLprhoUQJ9AEZYGzAz7Q374jLUkob94zs3JHHTtNHmqmMHtQASiwRPiQEGUepZWrdF3A43PKKanCdquPyntX8PJ) |
| — | 27 | cleanup | 2026-10-17T09:41:19.699Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x67de9e665a1f3ce773500d11ab5efe4586bb49db073126f016821e593f891949) | [Transaction](https://solscan.io/tx/3BLprhoUQJ9AEZYGzAz7Q374jLUkob94zs3JHHTtNHmqmMHtQASiwRPiQEGUepZWrdF3A43PKKanCdquPyntX8PJ) |
| — | 26 | cleanup | 2026-10-17T09:41:27.504Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8ab04a714ad0643207290d2caed976020a762eb0149078a102d6233fcc5c2b7e) | [Transaction](https://solscan.io/tx/4KaUTAHMhhD3nCNo9m7UMMy7FioZzTg2TzrMGhWJnWdEBpfihm5zJMNoAysaDGqyTAorez79jPYZtELPauVxURm4) |
| — | 28 | cleanup | 2026-10-17T09:41:32.352Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x50258f3f4245f2e21b8ad86f18adfb46c689a79f6efa55841f327f2dac9c04ad) | [Transaction](https://solscan.io/tx/4bnCWSfaH5svqzb5HwM9xVvgafKNFn4rL5sRYz9pC2cNrjaUhhEeCRULbk9PBTZNAMvtDVYsF3ysrvZfVu3FwpSn) |
| 32 | 29 | main | 2026-10-17T09:42:30.459Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4ec000ec20d164ab9383a1b173eb410d8020a67472c3ae430110014aeeff51fb) | [Transaction](https://solscan.io/tx/5ywRveWKca5jdxE7Z4CJH6vjuyWf2JimpL6TRjnBPvmXGXCg3vGVuXWvnjKA56APfpWtj9McwkYou2XCX6Ude2k3) |
| 33 | 30 | main | 2026-10-17T09:42:30.656Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x11fca0ca58bc883ec22f58a272ba5748cb4026d7c94767560cd3ce2472b6b9dc) | [Transaction](https://solscan.io/tx/5ywRveWKca5jdxE7Z4CJH6vjuyWf2JimpL6TRjnBPvmXGXCg3vGVuXWvnjKA56APfpWtj9McwkYou2XCX6Ude2k3) |
| 34 | 31 | main | 2026-10-17T09:42:31.910Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x75041e48c5ad197c2c48d75c7eb34650ca8dd449f648fbaef3445be143b8cb7a) | [Transaction](https://solscan.io/tx/5ywRveWKca5jdxE7Z4CJH6vjuyWf2JimpL6TRjnBPvmXGXCg3vGVuXWvnjKA56APfpWtj9McwkYou2XCX6Ude2k3) |
| 35 | 32 | main | 2026-10-17T09:42:32.010Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xba5cb204662d9aaa0db8b2ba25754bb8358b87a025cfa54a66a8ab628a3c9f7b) | [Transaction](https://solscan.io/tx/5ywRveWKca5jdxE7Z4CJH6vjuyWf2JimpL6TRjnBPvmXGXCg3vGVuXWvnjKA56APfpWtj9McwkYou2XCX6Ude2k3) |
| 38 | 31 | main | 2026-10-17T09:44:00.754Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x652b69f5e0cb502d1e021973c82b2ac533fb54b944409ad8410bb03a2b7d10ce) | [Transaction](https://solscan.io/tx/z5n4xFhsi7R2rtQVU9aEtcog3a7nn5Qd8cCpbUgF51qSJSrsQhbG3gzJDPw9Jrymuc7VviXnBk31mFZYSRd22Ms) |
| 39 | 32 | main | 2026-10-17T09:44:00.955Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x38d363827139c61633428fcd841e5ea27c1da97cf7d22c527c2a8c4b59754a40) | [Transaction](https://solscan.io/tx/z5n4xFhsi7R2rtQVU9aEtcog3a7nn5Qd8cCpbUgF51qSJSrsQhbG3gzJDPw9Jrymuc7VviXnBk31mFZYSRd22Ms) |
| 37 | 30 | main | 2026-10-17T09:44:01.174Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3929ef9a857fb599ae9a8ffe80de79bf2c06fcf2c97a4aa720d9d5b062a1a8e3) | [Transaction](https://solscan.io/tx/z5n4xFhsi7R2rtQVU9aEtcog3a7nn5Qd8cCpbUgF51qSJSrsQhbG3gzJDPw9Jrymuc7VviXnBk31mFZYSRd22Ms) |
| 40 | 33 | main | 2026-10-17T09:44:01.452Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb7bfe26a045f32667ce07cefeb955ba35bcbe5611c4492238e50b948001403f9) | [Transaction](https://solscan.io/tx/z5n4xFhsi7R2rtQVU9aEtcog3a7nn5Qd8cCpbUgF51qSJSrsQhbG3gzJDPw9Jrymuc7VviXnBk31mFZYSRd22Ms) |
| 41 | 34 | main | 2026-10-17T09:44:01.827Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x63e49710904acceeef7d8c3409bbc6147e3effeeb29b71a3413e8105206de63e) | [Transaction](https://solscan.io/tx/z5n4xFhsi7R2rtQVU9aEtcog3a7nn5Qd8cCpbUgF51qSJSrsQhbG3gzJDPw9Jrymuc7VviXnBk31mFZYSRd22Ms) |
| 43 | 36 | main | 2026-10-17T09:44:03.693Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2a8b5ba5c26b8093785ddb072ead5639067e306e5a9793f8ca3b21585cbaf807) | [Transaction](https://solscan.io/tx/4BCzLDuEooizf4XYETppCGDUkPmqFER7iDZASxrz3vyqNwazRke6bzSS2RMDwCKSkcmsErQ8Vm1pAzeatuqwYWUa) |
| 36 | 29 | main | 2026-10-17T09:44:03.792Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3cf004394317b9b7b095f385af412b2a6dc188bbcf9b6d18c216d1202353a29a) | [Transaction](https://solscan.io/tx/4BCzLDuEooizf4XYETppCGDUkPmqFER7iDZASxrz3vyqNwazRke6bzSS2RMDwCKSkcmsErQ8Vm1pAzeatuqwYWUa) |
| 42 | 35 | main | 2026-10-17T09:44:04.948Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x377038b21ee56e9b466e8f26fe065800580baac6d9965343c2512792f02bcd12) | [Transaction](https://solscan.io/tx/4BCzLDuEooizf4XYETppCGDUkPmqFER7iDZASxrz3vyqNwazRke6bzSS2RMDwCKSkcmsErQ8Vm1pAzeatuqwYWUa) |
| 48 | 33 | main | 2026-10-17T09:45:32.455Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x67b84ddf72022042df6b6c1925704a681e83de3d58e65d72d32fb90985b708bf) | [Transaction](https://solscan.io/tx/5PvzY6GgecxQ6C2oTH8LCrwAigZWVVnYiAwJZiZTxKz751XY27WvG9b5MBrcWdSMUmssmJY1mE9rHjYTho6jGSua) |
| 45 | 30 | main | 2026-10-17T09:45:32.648Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc37d7310cbd2606599998d09e4773890ee12b8d3fa2e658bb8a5031e7b301320) | [Transaction](https://solscan.io/tx/McK7NRvQCKVU2UNrfqQTstsxZdTLwHPr5QoXpyw2zq1v8Uqw2tXZGnpzNdSoA7WQ2ACMoRo5xvDWXzS52Ju1xrL) |
| 49 | 34 | main | 2026-10-17T09:45:32.850Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3a664ce143f707771b4cc24c1018cbc43e08f46065bd7ffdc396a619503e0d1f) | [Transaction](https://solscan.io/tx/McK7NRvQCKVU2UNrfqQTstsxZdTLwHPr5QoXpyw2zq1v8Uqw2tXZGnpzNdSoA7WQ2ACMoRo5xvDWXzS52Ju1xrL) |
| 47 | 32 | main | 2026-10-17T09:45:33.050Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xda8cb3b529402fbca50f914916b2727ac0602a205ca58422932fc1aa4e58496b) | [Transaction](https://solscan.io/tx/jLPBb2RV7oza7RQeYVEXQcbWs28EKApR4wV5EHn2TmVTg1FtNPLnJhU5nJ3ckbHczziaQ1BBrPzQAqhMQSTMw6u) |
| 46 | 31 | main | 2026-10-17T09:45:33.149Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8dffd1614e3ef825ff651a7d52966197974e159ca8490bffef1acb61a1f390a2) | [Transaction](https://solscan.io/tx/McK7NRvQCKVU2UNrfqQTstsxZdTLwHPr5QoXpyw2zq1v8Uqw2tXZGnpzNdSoA7WQ2ACMoRo5xvDWXzS52Ju1xrL) |
| 51 | 36 | main | 2026-10-17T09:45:33.548Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5bbe0ef3e7e2dd69ea6f1a82cf0698ac287ddda90e0e99b42ee08303a0db335a) | [Transaction](https://solscan.io/tx/jLPBb2RV7oza7RQeYVEXQcbWs28EKApR4wV5EHn2TmVTg1FtNPLnJhU5nJ3ckbHczziaQ1BBrPzQAqhMQSTMw6u) |
| 44 | 29 | main | 2026-10-17T09:45:33.647Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa9dbe5cb1a9506a10a675f304b5eed8321b2b7416a2ae381dec6c41c18183ceb) | [Transaction](https://solscan.io/tx/5PvzY6GgecxQ6C2oTH8LCrwAigZWVVnYiAwJZiZTxKz751XY27WvG9b5MBrcWdSMUmssmJY1mE9rHjYTho6jGSua) |
| 52 | 37 | main | 2026-10-17T09:45:34.348Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xab9776098c74df04e50de508f02d6082209919c99c5fd9e0959cad7e48f3f5eb) | [Transaction](https://solscan.io/tx/5PvzY6GgecxQ6C2oTH8LCrwAigZWVVnYiAwJZiZTxKz751XY27WvG9b5MBrcWdSMUmssmJY1mE9rHjYTho6jGSua) |
| 53 | 38 | main | 2026-10-17T09:45:34.552Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x10051d8641956cac0f9274e8e261680d5afe7a3a1c8f8f12a5487cd35df24833) | [Transaction](https://solscan.io/tx/McK7NRvQCKVU2UNrfqQTstsxZdTLwHPr5QoXpyw2zq1v8Uqw2tXZGnpzNdSoA7WQ2ACMoRo5xvDWXzS52Ju1xrL) |
| 54 | 39 | main | 2026-10-17T09:45:34.850Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x24ef5153e143f2935d7f7cbee8f1331864d9c5f7b4edcfa0e1ab0b287a880feb) | [Transaction](https://solscan.io/tx/jLPBb2RV7oza7RQeYVEXQcbWs28EKApR4wV5EHn2TmVTg1FtNPLnJhU5nJ3ckbHczziaQ1BBrPzQAqhMQSTMw6u) |
| 57 | 42 | main | 2026-10-17T09:45:35.151Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x19875dd7c7f817572660b82d95ee240b7f27a2024b32e407563729ddb5c4c9d4) | [Transaction](https://solscan.io/tx/McK7NRvQCKVU2UNrfqQTstsxZdTLwHPr5QoXpyw2zq1v8Uqw2tXZGnpzNdSoA7WQ2ACMoRo5xvDWXzS52Ju1xrL) |
| 58 | 43 | main | 2026-10-17T09:45:35.248Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x45eca3447442e8be58206a841716a5b4a4da006e0152232a78e3a2ed67118ce8) | [Transaction](https://solscan.io/tx/jLPBb2RV7oza7RQeYVEXQcbWs28EKApR4wV5EHn2TmVTg1FtNPLnJhU5nJ3ckbHczziaQ1BBrPzQAqhMQSTMw6u) |
| 59 | 44 | main | 2026-10-17T09:45:35.348Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1ab1871808a855f164c7b72adf9f62372e52f5a73dcef4ebe7a224a38f9c51ce) | [Transaction](https://solscan.io/tx/jLPBb2RV7oza7RQeYVEXQcbWs28EKApR4wV5EHn2TmVTg1FtNPLnJhU5nJ3ckbHczziaQ1BBrPzQAqhMQSTMw6u) |
| 50 | 35 | main | 2026-10-17T09:45:35.448Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf71bb449de03b2687cabe1d8aaf93a3eb08fb32d6486dcbb601f500a0c15a8a9) | [Transaction](https://solscan.io/tx/McK7NRvQCKVU2UNrfqQTstsxZdTLwHPr5QoXpyw2zq1v8Uqw2tXZGnpzNdSoA7WQ2ACMoRo5xvDWXzS52Ju1xrL) |
| 55 | 40 | main | 2026-10-17T09:45:35.991Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9e018ddcc70772d64a31c1df15e5565c500037b8d25a87cf3ff834bc9e8bbb10) | [Transaction](https://solscan.io/tx/jLPBb2RV7oza7RQeYVEXQcbWs28EKApR4wV5EHn2TmVTg1FtNPLnJhU5nJ3ckbHczziaQ1BBrPzQAqhMQSTMw6u) |
| 56 | 41 | main | 2026-10-17T09:45:36.090Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4aa8b18061c8067d498409f8dab656cd759d4f6fa998c886457b42d976dc0fcc) | [Transaction](https://solscan.io/tx/5PvzY6GgecxQ6C2oTH8LCrwAigZWVVnYiAwJZiZTxKz751XY27WvG9b5MBrcWdSMUmssmJY1mE9rHjYTho6jGSua) |
| 67 | 36 | main | 2026-10-17T09:47:04.052Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf14ba718545a0e048c741382f75950e1ac0a4d30ef9c50139ae58d4d83af5cc1) | [Transaction](https://solscan.io/tx/3uXtFdBhtKhnmsfVdzV6uRbNwCH2jJ2Sckbz8ZQ3ZP1LrSGFhhhB2ucjWEbG3D1rKLmKZuWr6eMpx1g6s94zEFaQ) |
| 63 | 32 | main | 2026-10-17T09:47:04.252Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf8355d5afd5a063e85b1dd45fd194dac1c11afa9783f5de9f62312fea7c27515) | [Transaction](https://solscan.io/tx/3uXtFdBhtKhnmsfVdzV6uRbNwCH2jJ2Sckbz8ZQ3ZP1LrSGFhhhB2ucjWEbG3D1rKLmKZuWr6eMpx1g6s94zEFaQ) |
| 70 | 39 | main | 2026-10-17T09:47:04.650Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb199429eb406f244a67b18197700b5370a7cab43986672153a7aa84b019a30aa) | [Transaction](https://solscan.io/tx/5vQMGgiyKWs5tyMDfXeFELbRGjAEeAHhomk8a21mwAvgoVAe8XPXubD3fUSxtMbEjEiAY4VJkaDA9DqTccHkTU6Z) |
| 74 | 43 | main | 2026-10-17T09:47:04.863Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8cf3d245f95ac0a692a0a9ca3c5843764c2fac3d4f45d1dfc693be4e4bc0fc0e) | [Transaction](https://solscan.io/tx/3uXtFdBhtKhnmsfVdzV6uRbNwCH2jJ2Sckbz8ZQ3ZP1LrSGFhhhB2ucjWEbG3D1rKLmKZuWr6eMpx1g6s94zEFaQ) |
| 75 | 44 | main | 2026-10-17T09:47:05.052Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf3115b12306c2d3e59f617e548851bb11784c364d5bd817ce90ca20f7fb5f3bc) | [Transaction](https://solscan.io/tx/3uXtFdBhtKhnmsfVdzV6uRbNwCH2jJ2Sckbz8ZQ3ZP1LrSGFhhhB2ucjWEbG3D1rKLmKZuWr6eMpx1g6s94zEFaQ) |
| 71 | 40 | main | 2026-10-17T09:47:05.254Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb7c3a521539b328f4e9cbb0e99b351443fd30a617859e329e30f7a4476d2e106) | [Transaction](https://solscan.io/tx/3uXtFdBhtKhnmsfVdzV6uRbNwCH2jJ2Sckbz8ZQ3ZP1LrSGFhhhB2ucjWEbG3D1rKLmKZuWr6eMpx1g6s94zEFaQ) |
| 73 | 42 | main | 2026-10-17T09:47:05.349Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x93521ae1da235617f53936bd35b6af89badb9a31bad13a856c2e9f0e5293c4e1) | [Transaction](https://solscan.io/tx/3CjFhwP2EEigSPY73E8ttJpuQiCDXiMd4n8XSsqnosUxsbYNoWZ4deRrqRnEdkTZaZdbiT2b2NuUKU7ZYoGSphYM) |
| 66 | 35 | main | 2026-10-17T09:47:05.551Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x84e5eaa96a5526e4186f6861e5bde6f3da80975ad14a51fa06fa32265e825d3f) | [Transaction](https://solscan.io/tx/3uXtFdBhtKhnmsfVdzV6uRbNwCH2jJ2Sckbz8ZQ3ZP1LrSGFhhhB2ucjWEbG3D1rKLmKZuWr6eMpx1g6s94zEFaQ) |
| 61 | 30 | main | 2026-10-17T09:47:05.954Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfcac364bfc1f67c98bf0c8fb1d687181ad3eb87514a65e6893903cf690406b3d) | [Transaction](https://solscan.io/tx/3CjFhwP2EEigSPY73E8ttJpuQiCDXiMd4n8XSsqnosUxsbYNoWZ4deRrqRnEdkTZaZdbiT2b2NuUKU7ZYoGSphYM) |
| 65 | 34 | main | 2026-10-17T09:47:06.155Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc3d0193f52f35ee3bd043ea9862e80e1b58bd892908173e00d714104fa0fdba6) | [Transaction](https://solscan.io/tx/3CjFhwP2EEigSPY73E8ttJpuQiCDXiMd4n8XSsqnosUxsbYNoWZ4deRrqRnEdkTZaZdbiT2b2NuUKU7ZYoGSphYM) |
| 62 | 31 | main | 2026-10-17T09:47:06.449Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe8a1be9a24c9c6b95763611483e97a07c8eac9d69a47d89809dc32e3258327a0) | [Transaction](https://solscan.io/tx/5vQMGgiyKWs5tyMDfXeFELbRGjAEeAHhomk8a21mwAvgoVAe8XPXubD3fUSxtMbEjEiAY4VJkaDA9DqTccHkTU6Z) |
| 69 | 38 | main | 2026-10-17T09:47:06.754Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd81e48b7bf337b71d4ed2dc1ba9944e24fd7c658b1032fc723f8fcc6d6487a74) | [Transaction](https://solscan.io/tx/3CjFhwP2EEigSPY73E8ttJpuQiCDXiMd4n8XSsqnosUxsbYNoWZ4deRrqRnEdkTZaZdbiT2b2NuUKU7ZYoGSphYM) |
| 60 | 29 | main | 2026-10-17T09:47:06.949Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xdecf6725942fa785d4fb39237847d66f768a6e713613025b3105e852f1dc5375) | [Transaction](https://solscan.io/tx/374bY7WqonM4cPvdEoPX2SRSVVi91cjfitaXV6oseGyi9uMgjXLxj9bwxNtc5oXMuTzxqk2JQjn5MAtCQdZeH8y7) |
| 68 | 37 | main | 2026-10-17T09:47:07.351Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x70e1382f02b61fe39e66d59970c4343b817ab7303990b2fd41a274c78a9956d4) | [Transaction](https://solscan.io/tx/374bY7WqonM4cPvdEoPX2SRSVVi91cjfitaXV6oseGyi9uMgjXLxj9bwxNtc5oXMuTzxqk2JQjn5MAtCQdZeH8y7) |
| 64 | 33 | main | 2026-10-17T09:47:07.450Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd0b157894a3c8135d962b55512a5560eb428091ce7578b457208682a3b2eac4e) | [Transaction](https://solscan.io/tx/374bY7WqonM4cPvdEoPX2SRSVVi91cjfitaXV6oseGyi9uMgjXLxj9bwxNtc5oXMuTzxqk2JQjn5MAtCQdZeH8y7) |
| 72 | 41 | main | 2026-10-17T09:47:07.750Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x158921f0aeadfc91d5fcaf7be44638c47f4483394366faef7a92e79852274800) | [Transaction](https://solscan.io/tx/374bY7WqonM4cPvdEoPX2SRSVVi91cjfitaXV6oseGyi9uMgjXLxj9bwxNtc5oXMuTzxqk2JQjn5MAtCQdZeH8y7) |
| 76 | 45 | main | 2026-10-17T09:47:07.851Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9192777b1b342dbd5ac2da8dd13dc3ae49d9c7236e95dd9bf118df6802798c6e) | [Transaction](https://solscan.io/tx/374bY7WqonM4cPvdEoPX2SRSVVi91cjfitaXV6oseGyi9uMgjXLxj9bwxNtc5oXMuTzxqk2JQjn5MAtCQdZeH8y7) |
| 77 | 46 | main | 2026-10-17T09:47:07.951Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcea9b4f2f69fcf24fae50f147815726b395971885c37010dc645e4dd520fa516) | [Transaction](https://solscan.io/tx/3CjFhwP2EEigSPY73E8ttJpuQiCDXiMd4n8XSsqnosUxsbYNoWZ4deRrqRnEdkTZaZdbiT2b2NuUKU7ZYoGSphYM) |
| 81 | 50 | main | 2026-10-17T09:47:08.350Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd907a496f7ff94348ac0bf33df5b12a7123fa5d01f5d5215a0d7b8011fe054d1) | [Transaction](https://solscan.io/tx/3CjFhwP2EEigSPY73E8ttJpuQiCDXiMd4n8XSsqnosUxsbYNoWZ4deRrqRnEdkTZaZdbiT2b2NuUKU7ZYoGSphYM) |
| 82 | 51 | main | 2026-10-17T09:47:08.450Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5ed3ae9c506b5f6d3b9d90248f6a39729f3576a6a8485a321253101ab4f6c5b6) | [Transaction](https://solscan.io/tx/5vQMGgiyKWs5tyMDfXeFELbRGjAEeAHhomk8a21mwAvgoVAe8XPXubD3fUSxtMbEjEiAY4VJkaDA9DqTccHkTU6Z) |
| 83 | 52 | main | 2026-10-17T09:47:08.553Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x44260a985ef1628de39006a67e5c8b8e1ca19a674c20a71c77c93c8cf3cba0a5) | [Transaction](https://solscan.io/tx/5vQMGgiyKWs5tyMDfXeFELbRGjAEeAHhomk8a21mwAvgoVAe8XPXubD3fUSxtMbEjEiAY4VJkaDA9DqTccHkTU6Z) |
| 78 | 47 | main | 2026-10-17T09:47:09.096Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x089cb118f80d34de922bba6352ed77b2a1fb12137260cdb3c9e71f91aba34c88) | [Transaction](https://solscan.io/tx/5vQMGgiyKWs5tyMDfXeFELbRGjAEeAHhomk8a21mwAvgoVAe8XPXubD3fUSxtMbEjEiAY4VJkaDA9DqTccHkTU6Z) |
| 79 | 48 | main | 2026-10-17T09:47:09.192Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7ac15c05916faac10a2a4e5e084d489aed91f1bc6f68adf91168cf1d1d79f2b4) | [Transaction](https://solscan.io/tx/5vQMGgiyKWs5tyMDfXeFELbRGjAEeAHhomk8a21mwAvgoVAe8XPXubD3fUSxtMbEjEiAY4VJkaDA9DqTccHkTU6Z) |
| 80 | 49 | main | 2026-10-17T09:47:09.292Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3f519cb22a694fd1d2f680cc8ae509d3bd59f2d37e6c0b58b288405b2898a9c9) | [Transaction](https://solscan.io/tx/374bY7WqonM4cPvdEoPX2SRSVVi91cjfitaXV6oseGyi9uMgjXLxj9bwxNtc5oXMuTzxqk2JQjn5MAtCQdZeH8y7) |
| 91 | 36 | main | 2026-10-17T09:48:36.054Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x14e916d28b6f00b3683d1d6bb419b83484b092f7a92a0fcda2e868dd5a1725e8) | [Transaction](https://solscan.io/tx/4JmVpiE3JmJcGF12JjbYMDN3rKaqbPSSaWhWKzQBrz2xdM6efadgZQANHE7aVmj34L5awTjyeVy2pXs6Wzp5mwF3) |
| 87 | 32 | main | 2026-10-17T09:48:36.354Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc5a628f161274e1551a6c27d46949402c343a20f610246cf8cbb8b3edb696abd) | [Transaction](https://solscan.io/tx/4JmVpiE3JmJcGF12JjbYMDN3rKaqbPSSaWhWKzQBrz2xdM6efadgZQANHE7aVmj34L5awTjyeVy2pXs6Wzp5mwF3) |
| 98 | 43 | main | 2026-10-17T09:48:36.448Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0478a21b2f9af34be12920a071917f16b62cf11169b2afaf4e8e7076ff5bc4b7) | [Transaction](https://solscan.io/tx/4JmVpiE3JmJcGF12JjbYMDN3rKaqbPSSaWhWKzQBrz2xdM6efadgZQANHE7aVmj34L5awTjyeVy2pXs6Wzp5mwF3) |
| 99 | 44 | main | 2026-10-17T09:48:36.750Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd07d6468a544a87af1eb59bca9329693d733b8c4bd44fde7ca129fbbf0ac7a98) | [Transaction](https://solscan.io/tx/4JmVpiE3JmJcGF12JjbYMDN3rKaqbPSSaWhWKzQBrz2xdM6efadgZQANHE7aVmj34L5awTjyeVy2pXs6Wzp5mwF3) |
| 95 | 40 | main | 2026-10-17T09:48:36.954Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcf42aa2a05174dfd276d6678acf8c193e9a6c01c6135f73a67ddc902e86273f6) | [Transaction](https://solscan.io/tx/4JmVpiE3JmJcGF12JjbYMDN3rKaqbPSSaWhWKzQBrz2xdM6efadgZQANHE7aVmj34L5awTjyeVy2pXs6Wzp5mwF3) |
| 94 | 39 | main | 2026-10-17T09:48:37.248Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb4376daca222c75fa05de768041912472b5288e803bcae871a3cd822b9368d92) | [Transaction](https://solscan.io/tx/3yDvmRDD6wzdGAT97BCRywrMB1BeEDy956ThF5H6oz9suXi9sTZPcq4AEdqPHr2oefJ5nq7UPgd6Rbbz6SfDkhZp) |
| 102 | 47 | main | 2026-10-17T09:48:37.458Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfcab27550e70e1b3dcfac77003681a26f200d9ec3742649a793046aa55088a60) | [Transaction](https://solscan.io/tx/3yDvmRDD6wzdGAT97BCRywrMB1BeEDy956ThF5H6oz9suXi9sTZPcq4AEdqPHr2oefJ5nq7UPgd6Rbbz6SfDkhZp) |
| 86 | 31 | main | 2026-10-17T09:48:37.650Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8e1b09cca80ca6b26cf999f09ec456617890ac7e1cb5c0caf655c1603629a12b) | [Transaction](https://solscan.io/tx/4VaMUVbzuBqvwySLSwKnZKxjQhTxLSmtJa6Ca9UYxmgJZNgAhiXcytxLC9ssTsisuUjcoePDrwUqjVHCWyxQmX3o) |
| 103 | 48 | main | 2026-10-17T09:48:38.052Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5a6a553c2c48964c01abbaf595fdaab35eef722047bcfd57728f1dd4bd702475) | [Transaction](https://solscan.io/tx/4JmVpiE3JmJcGF12JjbYMDN3rKaqbPSSaWhWKzQBrz2xdM6efadgZQANHE7aVmj34L5awTjyeVy2pXs6Wzp5mwF3) |
| 93 | 38 | main | 2026-10-17T09:48:38.153Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc604ad251c9889671987046c341c059c28e8a7ad5977d42a7ef95c05a0286dcb) | [Transaction](https://solscan.io/tx/26EWhLjPiQ62BSvh8ygRZJ67JcUDFVnbvk3o88faVCgDFYtwov1ri5GGbgPsfif2GU4fXrhBr4SjRJr1xxiKfVvh) |
| 89 | 34 | main | 2026-10-17T09:48:38.350Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3bc28fa61c43cdd30736bdacda35a39921c352cdfeb30cec92a64e5431095c29) | [Transaction](https://solscan.io/tx/3yDvmRDD6wzdGAT97BCRywrMB1BeEDy956ThF5H6oz9suXi9sTZPcq4AEdqPHr2oefJ5nq7UPgd6Rbbz6SfDkhZp) |
| 101 | 46 | main | 2026-10-17T09:48:38.651Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc83b84df5eac5918675ee837c1ad86e50c929326239536ce02e2d8815eb68deb) | [Transaction](https://solscan.io/tx/26EWhLjPiQ62BSvh8ygRZJ67JcUDFVnbvk3o88faVCgDFYtwov1ri5GGbgPsfif2GU4fXrhBr4SjRJr1xxiKfVvh) |
| 105 | 50 | main | 2026-10-17T09:48:38.750Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa45d418331f305c44944515d67df5cb8269641240f8b2331be795746ebeb2064) | [Transaction](https://solscan.io/tx/26EWhLjPiQ62BSvh8ygRZJ67JcUDFVnbvk3o88faVCgDFYtwov1ri5GGbgPsfif2GU4fXrhBr4SjRJr1xxiKfVvh) |
| 97 | 42 | main | 2026-10-17T09:48:38.954Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6473e873a6125da4d54340e4c04cabdd94ced95f849f7f45079dc0d757a8af90) | [Transaction](https://solscan.io/tx/26EWhLjPiQ62BSvh8ygRZJ67JcUDFVnbvk3o88faVCgDFYtwov1ri5GGbgPsfif2GU4fXrhBr4SjRJr1xxiKfVvh) |
| 85 | 30 | main | 2026-10-17T09:48:39.150Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7884b84e5f82a0fe0c89d043898307dc78079838b6e66d7d0c36650d1ee66412) | [Transaction](https://solscan.io/tx/26EWhLjPiQ62BSvh8ygRZJ67JcUDFVnbvk3o88faVCgDFYtwov1ri5GGbgPsfif2GU4fXrhBr4SjRJr1xxiKfVvh) |
| 104 | 49 | main | 2026-10-17T09:48:39.350Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x11f1c249c680714327b7200a900dde840286b2d993d9184d1b3fa3683f54af7d) | [Transaction](https://solscan.io/tx/4CxAW85LARJsuK3RdPaQuvbZ3yXjUS4V6zBc3o8BrJRnBqHSaYs2AjkXCFLGmuyqvEABuzGwF7sREbLFtCeXfsbZ) |
| 84 | 29 | main | 2026-10-17T09:48:39.450Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb1c4e11d180e95ec8ca02157ab6f6eeea85aa2f5a1b1af881b7a960d2a11fc56) | [Transaction](https://solscan.io/tx/4CxAW85LARJsuK3RdPaQuvbZ3yXjUS4V6zBc3o8BrJRnBqHSaYs2AjkXCFLGmuyqvEABuzGwF7sREbLFtCeXfsbZ) |
| 92 | 37 | main | 2026-10-17T09:48:39.749Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xef986d2b7d2678395b0f3f08f8dd708d24175152391f2fb65ff54f40332f8064) | [Transaction](https://solscan.io/tx/2Y4fnPdzegmeqe7KCuFQ2BQ3wpuBwuYCWdAfrPgBWt7cGDYE2z5eKZdT1RYwTWZBkvTDRWHL6mcFz4EQYJsCRhJU) |
| 88 | 33 | main | 2026-10-17T09:48:40.050Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa85fc853a66df33182b6f603916b13de2a3939edea8716b267f5dfbca28bfde9) | [Transaction](https://solscan.io/tx/4CxAW85LARJsuK3RdPaQuvbZ3yXjUS4V6zBc3o8BrJRnBqHSaYs2AjkXCFLGmuyqvEABuzGwF7sREbLFtCeXfsbZ) |
| 100 | 45 | main | 2026-10-17T09:48:40.250Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1c8a2de376461cd857d0782fe343bb4413ab96ecba49e2406aaa1866c68d1d6f) | [Transaction](https://solscan.io/tx/4CxAW85LARJsuK3RdPaQuvbZ3yXjUS4V6zBc3o8BrJRnBqHSaYs2AjkXCFLGmuyqvEABuzGwF7sREbLFtCeXfsbZ) |
| 90 | 35 | main | 2026-10-17T09:48:40.566Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1a90be76330e622611d9007b5ce707f211aa41bee4a794e6b30579cc7afe0d5a) | [Transaction](https://solscan.io/tx/4VaMUVbzuBqvwySLSwKnZKxjQhTxLSmtJa6Ca9UYxmgJZNgAhiXcytxLC9ssTsisuUjcoePDrwUqjVHCWyxQmX3o) |
| 106 | 51 | main | 2026-10-17T09:48:40.750Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe123ec87e1c258695489ca9369b932ab0d3d504ecac5ee1346468f900b6e00d7) | [Transaction](https://solscan.io/tx/3yDvmRDD6wzdGAT97BCRywrMB1BeEDy956ThF5H6oz9suXi9sTZPcq4AEdqPHr2oefJ5nq7UPgd6Rbbz6SfDkhZp) |
| 107 | 52 | main | 2026-10-17T09:48:40.850Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbc298a61e0296f4fb30068cf0985ad9358a9f62321c2c97a8cd000ccc2995585) | [Transaction](https://solscan.io/tx/4VaMUVbzuBqvwySLSwKnZKxjQhTxLSmtJa6Ca9UYxmgJZNgAhiXcytxLC9ssTsisuUjcoePDrwUqjVHCWyxQmX3o) |
| 96 | 41 | main | 2026-10-17T09:48:40.956Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe7b4e0db3f8c95a016b11b391dea25dfcfa056fdd7dbf4927c28df2fea91de3e) | [Transaction](https://solscan.io/tx/2Y4fnPdzegmeqe7KCuFQ2BQ3wpuBwuYCWdAfrPgBWt7cGDYE2z5eKZdT1RYwTWZBkvTDRWHL6mcFz4EQYJsCRhJU) |
| 108 | 53 | main | 2026-10-17T09:48:41.051Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x86f307971decb55f95b25c27fe5528d88effe0a69a81b5fcea9f071e183c4074) | [Transaction](https://solscan.io/tx/4CxAW85LARJsuK3RdPaQuvbZ3yXjUS4V6zBc3o8BrJRnBqHSaYs2AjkXCFLGmuyqvEABuzGwF7sREbLFtCeXfsbZ) |
| 109 | 54 | main | 2026-10-17T09:48:41.150Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfa94005b7967a1439a9d9eec8fb90271d9b130e955e6dfc5729821fe9268c1c6) | [Transaction](https://solscan.io/tx/26EWhLjPiQ62BSvh8ygRZJ67JcUDFVnbvk3o88faVCgDFYtwov1ri5GGbgPsfif2GU4fXrhBr4SjRJr1xxiKfVvh) |
| 110 | 55 | main | 2026-10-17T09:48:41.248Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9bbf4cac7936870c789359655aa2629543c0b2e9e278b6b87524ee40567cc6dc) | [Transaction](https://solscan.io/tx/4VaMUVbzuBqvwySLSwKnZKxjQhTxLSmtJa6Ca9UYxmgJZNgAhiXcytxLC9ssTsisuUjcoePDrwUqjVHCWyxQmX3o) |
| 111 | 56 | main | 2026-10-17T09:48:41.350Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc10340103be5a7d17600724bac285209b1528fd30e5ce27c167bf1f69274cb96) | [Transaction](https://solscan.io/tx/4VaMUVbzuBqvwySLSwKnZKxjQhTxLSmtJa6Ca9UYxmgJZNgAhiXcytxLC9ssTsisuUjcoePDrwUqjVHCWyxQmX3o) |
| 112 | 57 | main | 2026-10-17T09:48:41.452Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x931fdf7056dfe26479148585a88e24880b0cd87a5b770f86a196dd6310c56339) | [Transaction](https://solscan.io/tx/4CxAW85LARJsuK3RdPaQuvbZ3yXjUS4V6zBc3o8BrJRnBqHSaYs2AjkXCFLGmuyqvEABuzGwF7sREbLFtCeXfsbZ) |
| 113 | 58 | main | 2026-10-17T09:48:41.556Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x515046ce6c9d09b525f6f811f5758886750a8ec76f9c182504e852a23419bf5e) | [Transaction](https://solscan.io/tx/3yDvmRDD6wzdGAT97BCRywrMB1BeEDy956ThF5H6oz9suXi9sTZPcq4AEdqPHr2oefJ5nq7UPgd6Rbbz6SfDkhZp) |
| 114 | 59 | main | 2026-10-17T09:48:41.651Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xac10354449dead1bd54adf60f7d3213c2c0ff0d93501448b41fbae1f321dd96e) | [Transaction](https://solscan.io/tx/3yDvmRDD6wzdGAT97BCRywrMB1BeEDy956ThF5H6oz9suXi9sTZPcq4AEdqPHr2oefJ5nq7UPgd6Rbbz6SfDkhZp) |
| 115 | 60 | main | 2026-10-17T09:48:41.752Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xde8befa7f3f27f2b1ed2c57497b81dc13d67e321fcf475defce8146c0257236a) | [Transaction](https://solscan.io/tx/4VaMUVbzuBqvwySLSwKnZKxjQhTxLSmtJa6Ca9UYxmgJZNgAhiXcytxLC9ssTsisuUjcoePDrwUqjVHCWyxQmX3o) |
| — | 30 | cleanup | 2026-10-17T09:49:14.713Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x241294dbddff27538a27f7925b2dca459715d07ed38f7067974cb1e54d05b01e) | [Transaction](https://solscan.io/tx/uC1UfsgtTQrvbE6KXauNotCJXiKbuLBUdMoua12a92XVLs3DhctbB8QXtMmdr9T9hAZX4ipnqGteS8q9udAybG6) |
| — | 31 | cleanup | 2026-10-17T09:49:15.662Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5d171dc124954852909c61f8678ff17f706a75e4f0581ba821b4a911f0de3c1c) | [Transaction](https://solscan.io/tx/uC1UfsgtTQrvbE6KXauNotCJXiKbuLBUdMoua12a92XVLs3DhctbB8QXtMmdr9T9hAZX4ipnqGteS8q9udAybG6) |
| — | 32 | cleanup | 2026-10-17T09:49:16.488Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0f5e3a55b01e2d43222594c77463834d064e36a3a59cee3ccda9c72399aafe15) | [Transaction](https://solscan.io/tx/uC1UfsgtTQrvbE6KXauNotCJXiKbuLBUdMoua12a92XVLs3DhctbB8QXtMmdr9T9hAZX4ipnqGteS8q9udAybG6) |
| — | 33 | cleanup | 2026-10-17T09:49:17.511Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa4012e7ebb56f6e0eb184cce797d4c2483687b2aee7222e3a6a4681782064a8f) | [Transaction](https://solscan.io/tx/uC1UfsgtTQrvbE6KXauNotCJXiKbuLBUdMoua12a92XVLs3DhctbB8QXtMmdr9T9hAZX4ipnqGteS8q9udAybG6) |
| — | 34 | cleanup | 2026-10-17T09:49:17.713Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0068871f9d1789c6bd644a9e186d329c51d5dd23863c4e5e29b8a5c133d59406) | [Transaction](https://solscan.io/tx/53xv3EWiyoTZF194MUZYqLpnKUbLgHyTCgKtX8kek8jHDAuNBXjfiKHRkHMx7pa1WcTe3iZdBRJd1NWGwD3Zmb5s) |
| — | 35 | cleanup | 2026-10-17T09:49:19.603Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x374785bd2d729d1e50501b51e2de6235973f8f640d90f59debebb5655cb26f8e) | [Transaction](https://solscan.io/tx/53xv3EWiyoTZF194MUZYqLpnKUbLgHyTCgKtX8kek8jHDAuNBXjfiKHRkHMx7pa1WcTe3iZdBRJd1NWGwD3Zmb5s) |
| — | 36 | cleanup | 2026-10-17T09:49:20.800Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd95784b938c0dcd7b8b5c701d720d384d35d176df73771f9699306011cd276da) | [Transaction](https://solscan.io/tx/53xv3EWiyoTZF194MUZYqLpnKUbLgHyTCgKtX8kek8jHDAuNBXjfiKHRkHMx7pa1WcTe3iZdBRJd1NWGwD3Zmb5s) |
| — | 37 | cleanup | 2026-10-17T09:49:23.449Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x55dfd58f3402a0a535f4453c9f1bf271c25d851638c37004ad7e3083a1150db6) | [Transaction](https://solscan.io/tx/53xv3EWiyoTZF194MUZYqLpnKUbLgHyTCgKtX8kek8jHDAuNBXjfiKHRkHMx7pa1WcTe3iZdBRJd1NWGwD3Zmb5s) |
| — | 38 | cleanup | 2026-10-17T09:49:24.697Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x139d2b0315a6a3ed1d588a71ecfc75b7841033f2456424e52ae305909d125cc9) | [Transaction](https://solscan.io/tx/28tS7eBJqyYLcA4jHN86HowxBKtANTbNczyTCi5b1RKDPmw5DUFBU5yDBZYxDf1ehmCNKKGyBqKTUSRbkzq4czew) |
| — | 29 | cleanup | 2026-10-17T09:49:24.862Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xaa22958f902a92353cf817dbc9230476073eaf448fcca218de68fc285fd4babc) | [Transaction](https://solscan.io/tx/28tS7eBJqyYLcA4jHN86HowxBKtANTbNczyTCi5b1RKDPmw5DUFBU5yDBZYxDf1ehmCNKKGyBqKTUSRbkzq4czew) |
| — | 39 | cleanup | 2026-10-17T09:49:42.262Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xae0aa7fdfe4b7e46217cd1146d6c943aa7d00c9b479bac10ad0938925556e0ba) | [Transaction](https://solscan.io/tx/3ocSRrAHNH21omWH6UTBQ7xn7H2tkTBWLciAawQGowVrfobghaguijADbAYVG3EQCKTPB8G8yQ8YdManYKVP84WH) |
| — | 41 | cleanup | 2026-10-17T09:49:48.962Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8330d691879bf78be0cf643edc2fc8d2f8a94d5eacd45f78d55c940278832f2f) | [Transaction](https://solscan.io/tx/3Hou2hcd5FABcRqBUBvTVsg67bTESzFvPYJZ1hjwFh6KM1re6VF1Eqd1VxHJHqXYS1heLVmGxZGtZBDrKfpQHkPt) |
| — | 40 | cleanup | 2026-10-17T09:49:50.458Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5dab12242ba0237d819cb65d27a3cdca7b7901324555a6ad3ce4247e4d08714c) | [Transaction](https://solscan.io/tx/3Hou2hcd5FABcRqBUBvTVsg67bTESzFvPYJZ1hjwFh6KM1re6VF1Eqd1VxHJHqXYS1heLVmGxZGtZBDrKfpQHkPt) |
| — | 42 | cleanup | 2026-10-17T09:49:53.604Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xac16e23a9497102280609da7b36cf4684dc6f79c239f02a4d664c356394fb7b8) | [Transaction](https://solscan.io/tx/4NkjfX4BEscad77oHqUsFZWvXeWo2oUoPj7GHe4iCA422spvfy7vbXJ1MAjL2NmBb9TKxWj7qKuguT5PhaKxB3FJ) |
| — | 44 | cleanup | 2026-10-17T09:49:57.048Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x123cb797f32443467e53bb93df2838ad997a6c4316879cdd98d9a130b0ab3821) | [Transaction](https://solscan.io/tx/4NkjfX4BEscad77oHqUsFZWvXeWo2oUoPj7GHe4iCA422spvfy7vbXJ1MAjL2NmBb9TKxWj7qKuguT5PhaKxB3FJ) |
| — | 45 | cleanup | 2026-10-17T09:49:59.094Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4c19a9a69f97c55fbb43e21fc54bdcb617676d6e27b6b5687997e7d6ad814d5e) | [Transaction](https://solscan.io/tx/5BKhqVV25TGkDXmAzWqa1nujymJr8LqsAdcMjncL79ZBJWgrM7fYejsR8r5zGRzNr2gFLk8a2Lotp5eURjBXZxRz) |
| — | 43 | cleanup | 2026-10-17T09:49:59.790Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5223d6f1b5c89c9fcd772981fb0cd7430b69cabf716348c9b54352ab43382fbe) | [Transaction](https://solscan.io/tx/5BKhqVV25TGkDXmAzWqa1nujymJr8LqsAdcMjncL79ZBJWgrM7fYejsR8r5zGRzNr2gFLk8a2Lotp5eURjBXZxRz) |
| — | 47 | cleanup | 2026-10-17T09:50:00.191Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x55fc3ad403ef30ec84f3c9e9272fba861098341f82e93312fe3f6381d1179bd4) | [Transaction](https://solscan.io/tx/5BKhqVV25TGkDXmAzWqa1nujymJr8LqsAdcMjncL79ZBJWgrM7fYejsR8r5zGRzNr2gFLk8a2Lotp5eURjBXZxRz) |
| — | 46 | cleanup | 2026-10-17T09:50:02.135Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x276094bf9e0026fcece1bebcfd364a8717b745cccdca4bd22beba95c72afe262) | [Transaction](https://solscan.io/tx/5BKhqVV25TGkDXmAzWqa1nujymJr8LqsAdcMjncL79ZBJWgrM7fYejsR8r5zGRzNr2gFLk8a2Lotp5eURjBXZxRz) |
| — | 48 | cleanup | 2026-10-17T09:50:06.937Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x22116f8857e26f0372179ea1d6d2f293b29e0bf5241da528895aa7d1575d678e) | [Transaction](https://solscan.io/tx/62u6awxEk4i2SfsC1sNQmKkShXa3ZG8S8zdGSDmcyzRZgDu6MbsHbjfFvUUAQCHpxQEAwpovzuFX8vha5Gfqv91f) |
| — | 49 | cleanup | 2026-10-17T09:50:11.681Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x172b32d100d73849714b50ee8e6be452bbcab876e7cdfa838500bd5b8b0d321d) | [Transaction](https://solscan.io/tx/5KTnmAhTQQtc3KnjhmXZaGBLpBWoFE3HBohDudwmBD57Q3EUmV6FKAQPhEsDpSi14nHGTPQG1iCRdebBc8Xw4ZtT) |
| — | 51 | cleanup | 2026-10-17T09:50:24.551Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb3190d5a8d74d4ba96e47f11dd4c5869f8f62abd669bcb1792c915fdf4b7cd95) | [Transaction](https://solscan.io/tx/4n4SrTTYR9rqGHUKy92VQ9xGJ4wwCzDbVAFKjdafQ3daDsSYhDYApdmkW5B8oPaV4oTMFmHf9Jh6w8e3aqZ2nFLm) |
| — | 50 | cleanup | 2026-10-17T09:50:28.196Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe754f6e5a874234d0f8e9c6b49bd3f41be9eeb78c32f7dfa95293ef4a0d6e9f5) | [Transaction](https://solscan.io/tx/5a4hkvcECZhE7ZpsfKeCvjCG3PRMagJP2D37TLiAMQq4FeQxg9ygCL3nr6fkKLaHXSTGfmKdX4N5dqPaoZ3wgyif) |
| — | 52 | cleanup | 2026-10-17T09:50:28.892Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5549ac0bd75f65c4416c09cefbfba351e6f2db78ba0abafd4ad7002cdec4334d) | [Transaction](https://solscan.io/tx/5a4hkvcECZhE7ZpsfKeCvjCG3PRMagJP2D37TLiAMQq4FeQxg9ygCL3nr6fkKLaHXSTGfmKdX4N5dqPaoZ3wgyif) |
| — | 53 | cleanup | 2026-10-17T09:50:34.679Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8f8c890b0de7fedf24d2113a04195c5c8094c92c5a4fad875bba93fab11792c6) | [Transaction](https://solscan.io/tx/5kNkJhxLDm8kVX7Snj4u8PX7SGPsXkwtKHoiWsasejHNUm9ga6GCyBqfFcF4h8Zzrzdver35vmkkpba2wrfUm6pc) |
| — | 55 | cleanup | 2026-10-17T09:50:35.081Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa5212102d0cd6f83dcd21461eb3b04b840e16c9668c5604e39eefa716f62b904) | [Transaction](https://solscan.io/tx/5kNkJhxLDm8kVX7Snj4u8PX7SGPsXkwtKHoiWsasejHNUm9ga6GCyBqfFcF4h8Zzrzdver35vmkkpba2wrfUm6pc) |
| — | 54 | cleanup | 2026-10-17T09:50:35.278Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfd96ec9727d1591554a483272e4ed7d35aa0483b71ba578de3c545bba3fa54e4) | [Transaction](https://solscan.io/tx/5kNkJhxLDm8kVX7Snj4u8PX7SGPsXkwtKHoiWsasejHNUm9ga6GCyBqfFcF4h8Zzrzdver35vmkkpba2wrfUm6pc) |
| — | 56 | cleanup | 2026-10-17T09:50:39.169Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xdadcb728599b54cd13b0f1fa6abf2bb2309d159220df8bc93d5de7bf9a7810e8) | [Transaction](https://solscan.io/tx/3NtXhSdGo8RJf4G44e2bqbu7Np26V2xgCgF2v5byYzo8MCsFY1LbfhQeXzNC3cq6tjEFqwVaBWvccHecjZkWFuE) |
| — | 57 | cleanup | 2026-10-17T09:50:41.802Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xacd6d8ffa0f7a53716a45f5c25241bda14489d8f172c37b3cca288d2a1978d8d) | [Transaction](https://solscan.io/tx/3NtXhSdGo8RJf4G44e2bqbu7Np26V2xgCgF2v5byYzo8MCsFY1LbfhQeXzNC3cq6tjEFqwVaBWvccHecjZkWFuE) |
| — | 58 | cleanup | 2026-10-17T09:50:42.100Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x714f67f706144abd47283dce92864cb920b32fce5188e199767778a710a63ee0) | [Transaction](https://solscan.io/tx/3NtXhSdGo8RJf4G44e2bqbu7Np26V2xgCgF2v5byYzo8MCsFY1LbfhQeXzNC3cq6tjEFqwVaBWvccHecjZkWFuE) |
| — | 59 | cleanup | 2026-10-17T09:50:46.890Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa3bdcdd971fdde262566d788310affac86aa64211f027c7734090bb01bee832a) | [Transaction](https://solscan.io/tx/5XwGRzwFerXCLCGvjrAhux1AUjpJou3tyg9QvWoama2hWLtGujDrGPtCeCLSDd3Xab2SyTpkajDHZcbzb7wriknQ) |
| — | 60 | cleanup | 2026-10-17T09:51:03.093Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x083c00adf251d297f563249386c2b98c869f8f21306a6f2e90dfdc0032c3d437) | [Transaction](https://solscan.io/tx/3hHrXqSc65yLaXPjwhwMoyuy9Qkypj5G2JTYhuuMFUEYQF74TJcGaUbRqoY7VQ85uqdbSnb2R4XdJiVEavVBzJDh) |
| 117 | 64 | main | 2026-10-17T09:52:02.634Z | SOL → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x28b82915a6539a300dce50cf705479d222d91363aacb0bcc9424dff548f5eae9) | [Transaction](https://solscan.io/tx/4xQVJMUMABXhcoQJG179K9WjW9bEWGR81VA88hVeuByMjRcGq9RTUQjg3aT7BcS8H7rnUKAg2SsE5r5zSF8b8qtg) |
| 116 | 62 | main | 2026-10-17T09:52:02.725Z | SOL → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0535c4d0d6f6e38e4c16595c39e2093dbc00ef21325770527cf7dbe99e0eafbf) | [Transaction](https://solscan.io/tx/4xQVJMUMABXhcoQJG179K9WjW9bEWGR81VA88hVeuByMjRcGq9RTUQjg3aT7BcS8H7rnUKAg2SsE5r5zSF8b8qtg) |
| 118 | 65 | main | 2026-10-17T09:52:02.859Z | SOL → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5276119906d8c6536fca04c19b9476e44bc6c89160fcb694ff829350ca4a85ec) | [Transaction](https://solscan.io/tx/4xQVJMUMABXhcoQJG179K9WjW9bEWGR81VA88hVeuByMjRcGq9RTUQjg3aT7BcS8H7rnUKAg2SsE5r5zSF8b8qtg) |
| 119 | 66 | main | 2026-10-17T09:52:03.050Z | SOL → USDT; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3ed4af441c203e054680d16d87ce27728241661d335abed696599aa15bc45d68) | [Transaction](https://solscan.io/tx/5nnP95XAzBsCxnztAWkgCn41mjR1LX2cqNWpxaXttUjpcM6uWvDBkwoyEJvgCWJGcq6rwhGkpbyAsmKbfP1qv1rj) |
| 120 | 67 | main | 2026-10-17T09:52:03.305Z | SOL → USDT; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa03ba450d09bb0401f52dc05acdcfefb5fcc23a9c7e241b2bf8578508072d949) | [Transaction](https://solscan.io/tx/5nnP95XAzBsCxnztAWkgCn41mjR1LX2cqNWpxaXttUjpcM6uWvDBkwoyEJvgCWJGcq6rwhGkpbyAsmKbfP1qv1rj) |
| 121 | 68 | main | 2026-10-17T09:52:03.555Z | SOL → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xaf78ed07f6ac19315c85638ce7008f752ef80fc0d194e3ab8e6c11a71dba9697) | [Transaction](https://solscan.io/tx/4xQVJMUMABXhcoQJG179K9WjW9bEWGR81VA88hVeuByMjRcGq9RTUQjg3aT7BcS8H7rnUKAg2SsE5r5zSF8b8qtg) |
| 122 | 61 | main | 2026-10-17T09:54:31.914Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xac158352d01e4cbf49b72ca614300e8f7caf884fbbaf1c28f4b89d6f8ed02b06) | [Transaction](https://solscan.io/tx/5uBJQhNNVTvj4eNgBuUK9bcPm2mtGuA3VgWgj8mvzen8JueCjiLbjTyezw75sBg5a6Bfuaox561DnsoYVYgho1hp) |
| 124 | 63 | main | 2026-10-17T09:54:32.003Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xed85849f9d912ede393d7aa96c8bcb304ccfdc6f82342db2a90723136af3da99) | [Transaction](https://solscan.io/tx/5uBJQhNNVTvj4eNgBuUK9bcPm2mtGuA3VgWgj8mvzen8JueCjiLbjTyezw75sBg5a6Bfuaox561DnsoYVYgho1hp) |
| 130 | 69 | main | 2026-10-17T09:54:32.122Z | SOL → JUP; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2e58e5edac54301aaacbb9e67df1bf19edaa60b8a9683291489319520f901af3) | [Transaction](https://solscan.io/tx/2GewCxB8HrWamUGAgHncx81SuQjzkvwW5aKdxYnXHynsH6eMxcTE6MTDqfoknZArTsKgPACkBo9mfdtEw9fQGEtd) |
| 125 | 64 | main | 2026-10-17T09:54:32.123Z | USDC → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbc41f6ed0c90156c71d88ee0156fe584f36764c49f16796b7bdbce43cc18fdda) | [Transaction](https://solscan.io/tx/3myKG39tsgtbUmq3cHneu28R3wkputVEtr7U8grTAtqZ7HphpgcLb2zovycVQ9vhvW9y5Athy7Djq1XLU2ZS1qE3) |
| 126 | 65 | main | 2026-10-17T09:54:32.212Z | USDC → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbec7136ac6f0b8abfeb27c39ed360385319422a82e277a95bb5f4e0cd27719d9) | [Transaction](https://solscan.io/tx/5s63ZS49y55DK7cZCb18CJeBfyANZ6ZMvmQKiUZweKoxnpEfXxhNkf7y1YqgJ1kotfCapubt1c7dDn2wAdcdt6D7) |
| 127 | 66 | main | 2026-10-17T09:54:32.365Z | USDT → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3b7c6bf3f138fd3ab1def8359f5dd0864eef02126a9fd1a8601ad48de2439785) | [Transaction](https://solscan.io/tx/4kNuGAShcZiv4bs9QwVmZ9YREXZ4vEeBnnm4NWUJJLBLyVF3q9H6XVeQmmBAdNqrghkGFNMaEUcxX4K5qxjhexuv) |
| 128 | 67 | main | 2026-10-17T09:54:32.584Z | USDT → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x79c8aa558ea40bffa39da80a0e21457eda5976100908586a74020b3bafa4127d) | [Transaction](https://solscan.io/tx/4kNuGAShcZiv4bs9QwVmZ9YREXZ4vEeBnnm4NWUJJLBLyVF3q9H6XVeQmmBAdNqrghkGFNMaEUcxX4K5qxjhexuv) |
| 129 | 68 | main | 2026-10-17T09:54:32.772Z | USDC → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9deddf9f6c3b8060550dd4fe0bf0aea52ed6c1928d5130c6672d1458a260f117) | [Transaction](https://solscan.io/tx/3mSTSGaT2fUdioU495DTJtEs5ToWZPp2nC7ndUhGu6rMBhroY7sJ9hJ7o4LAJzSs1R1nGb4k1bpzMEmECN9s3nj3) |
| 123 | 62 | main | 2026-10-17T09:54:33.241Z | USDC → SOL; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x24d35c1770ca4b4caf4a0caf45dafd9fa0219c9c74400ff71b40008e98e9b8c3) | [Transaction](https://solscan.io/tx/3WogAgoH8jHR44mbDfdvAHVtcTyt7G2FrCmd8uKpfmPCSYRRoPtfdvUQZb9VVM9QnC58cQP55m1sGt3UgK4XhPc5) |
| — | 62 | cleanup | 2026-10-17T09:54:50.083Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xae08025dc186949ea194464cf9a58617abd1659664516da7428d33f13b5de0e1) | [Transaction](https://solscan.io/tx/enU7o4aDYnVv1gWSfGFEKn1dcotLUSua7XUUAJQhkDr9Tnwy6NMiuxYVEMN4JEwfvquGRhvXySzZZhppie8CUAr) |
| — | 63 | cleanup | 2026-10-17T09:54:50.302Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe0d7076b7ca2bc3a1b391442a40a06812fd46ff3296a84f43ea6b7c5b9a28e74) | [Transaction](https://solscan.io/tx/enU7o4aDYnVv1gWSfGFEKn1dcotLUSua7XUUAJQhkDr9Tnwy6NMiuxYVEMN4JEwfvquGRhvXySzZZhppie8CUAr) |
| — | 65 | cleanup | 2026-10-17T09:54:53.028Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6a42ceb7a318fad570d2ca8c0e78e0959760a51517458314457632aa9656b059) | [Transaction](https://solscan.io/tx/32VzLtTVdMo74iHypWvyRV5XeUj53qKNfW9na1qx6YG56DjsaWRipggnaFPfjcH7FJWG8xAFnqFHjZDtbz56g14q) |
| — | 66 | cleanup | 2026-10-17T09:54:53.895Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x268b4afccbbdb6fa6fa1c1d1f8f38ea9524d8991d76017c2193696f560bb21f9) | [Transaction](https://solscan.io/tx/enU7o4aDYnVv1gWSfGFEKn1dcotLUSua7XUUAJQhkDr9Tnwy6NMiuxYVEMN4JEwfvquGRhvXySzZZhppie8CUAr) |
| — | 67 | cleanup | 2026-10-17T09:54:56.464Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbe6a13fc3ec75e50918f6221fac431f2eb60ee3cd8f7e674b79bee05ef93c0b1) | [Transaction](https://solscan.io/tx/48JviFovBRLY86ksc1ojLJGaGD2TChNtiDbiVgFgKkkqD4BrFS5wfWK6HbQ6B5d9bKYnkeGoRDjjNevDCsh3C9mM) |
| — | 68 | cleanup | 2026-10-17T09:54:59.664Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x59137464d565dc0c6142036320746110204f032d521b1d1f33f2f0ddc470b3a6) | [Transaction](https://solscan.io/tx/4MNTCTBm2aYkoCW1kBC6pDd5mVVjXheyPmDyLM94pQKdN9pE5n6mQ61Xe4hF8FFj6xdgntW1zJTR3coA1ZakCxnR) |
| — | 68 | cleanup | 2026-10-17T09:54:59.770Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5afb507ec25244595a98b9cfa537b5094c0bdcdfa94606a1c704473dc380e0ee) | [Transaction](https://solscan.io/tx/48JviFovBRLY86ksc1ojLJGaGD2TChNtiDbiVgFgKkkqD4BrFS5wfWK6HbQ6B5d9bKYnkeGoRDjjNevDCsh3C9mM) |
| — | 69 | cleanup | 2026-10-17T09:55:05.345Z | JUPyiw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf102df71cd1b7540645a050fae0183f0775fa56e6eed077e98b2f4a795ac237b) | [Transaction](https://solscan.io/tx/1LRvUTyF8Qmuay6tqfDE6JG4AAAvXMSFqdkaDwFGchGsc5Gu9rBYCoKDf5ZZ2NEHH6Y6k9NtXzr2Cb9PPvuF7AT) |
| — | 61 | cleanup | 2026-10-17T09:55:05.466Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6921cfd38654f41b3bacb13c60cceb6444023c503bfc1597d49f47c828ecaf26) | [Transaction](https://solscan.io/tx/2ExccfWiUhS1Qh2rsD5M9YF6kUkiWnpbGbcA6DQnYf1P4WHVWRw2wCSR66xfTCig1saXgDVbzYz4pg7cxP6mgCiz) |
| 131 | 70 | main | 2026-10-17T09:56:07.797Z | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4b2c795999ad225a6e7ac700e135b0b33cfcd200b94fe1c50f37f2487e30dc77) | [Transaction](https://solscan.io/tx/moa7TLsSsqAxnFUu1sDAWwVgphnDAQ24UPEBEKPWccHoDsbBcKkXDDEHhJBd1ceMvpZxjTTihnj1jT2nC3PSdYi) |
| 133 | 72 | main | 2026-10-17T09:56:07.823Z | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9f2763e6d0245ccf09a69b1635f550a2a10af4a11c94e121d71c809b95a9d08a) | [Transaction](https://solscan.io/tx/3UBuf1GZLRZoHuJA11DWxDd2DBdycmz3XPXP7sCQK5eeU27NHJDkTVEZGR8RRVShejN9BoMo5KVKu1uWLwyzQGpS) |
| 132 | 71 | main | 2026-10-17T09:56:07.919Z | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc802cf6bd743742b8af63c71c3d47f8fced04840a8f49f362def0d94f35bd5e8) | [Transaction](https://solscan.io/tx/2KhekcFRVMC94HLi5UAfJKBxFw3uBLQht28NHPugQoSLVL8XGrx51PzJoKXLwA3FmQyLQSG6hPenBiWPCQhcLDNs) |
| 135 | 74 | main | 2026-10-17T09:56:08.122Z | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xfda998cf910cceab8839d9344a284677440075c8c8e9038b453e8ba1e3a7ad49) | [Transaction](https://solscan.io/tx/4ANq6px851G9PCqP5bALr6BKrUXZ3PRjFjaM3qBLGetahimrn87d5CuzejTwf1hK4TfNr8eNpA3nv5rNibQ54Cdw) |
| 136 | 75 | main | 2026-10-17T09:56:08.227Z | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc1fff2839ebfdf84f46724621d99d12d14232f3dfea3bdcd3e3f5f4699e8e670) | [Transaction](https://solscan.io/tx/4PDXW9HmhJfvEXyQ8eHmge1pC13v2uJ97ECozQcB8mGStVH36kwNs6KAtxwqZAkipjrNG11QSdCHnGKHG3XTHfDL) |
| 137 | 76 | main | 2026-10-17T09:56:08.448Z | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf489243f5fd9e1027e6be7f58a2230bc07450e2d9baab58cad7c78b045b58c3d) | [Transaction](https://solscan.io/tx/4W3GXD5AQSP1BXM3TbyC8et1yy9zsmc939ebKL5NNpVix7oKWzGZCgrAT1JSPjpL5Ye6FF8eZETfZxWGiWQgPx2S) |
| 139 | 78 | main | 2026-10-17T09:56:08.596Z | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf4e36b260a347afe1e2806a9962609159f2fd6cffffffd8a45c67a358306c2f1) | [Transaction](https://solscan.io/tx/mfseQn8tL1kEQ77DCZzC9boPwZdRi2qvPRk4iAZyijv7KVjFYWkna2VBmPsJ4KPe7mT4MXW2JXqPBi765YBsf2b) |
| 140 | 79 | main | 2026-10-17T09:56:08.617Z | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xce1e3e789f1fb7db45cb2661dced2fd104d8a54ddc0a9bffad0deb94d7be4351) | [Transaction](https://solscan.io/tx/3izHr6nGspwmYRCz4C4x4gtybWFaScwXxjJEAwBpmqrMLdDjvhKJzvGNRZhcJJDcx6vs5sBqeLh7BW5MNmhc5tCE) |
| 141 | 80 | main | 2026-10-17T09:56:08.721Z | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x425559dc81019f2096900621f170cef6605a2d42fe0b8ed5f6a5ea29e53b62f8) | [Transaction](https://solscan.io/tx/3iKbuT2Tm1oM5rYjPJQNMYvh1cXkU7i43EfWQCRpEiNLNHC734xbjNTKUy2DgXhnwTGMLK7drpPmXRK4uABN9xKf) |
| 144 | 83 | main | 2026-10-17T09:56:09.128Z | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6ae2461d5d307aaec6baa523b9a5ae7f1901fc5e5e30102d8908522da0db8aca) | [Transaction](https://solscan.io/tx/3k9hA4jssQw31ZjfoWwgnw3qsTKA4UW1f8zwNghj8mEEFRto2JcxNR46RDg4VUHVC2JdENxzLUroJqBcTYEbKajJ) |
| 143 | 82 | main | 2026-10-17T09:56:09.161Z | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x687f54f46968b11a330500c01bb59cb632cb57e711281fe2ae0f3d6f311630e5) | [Transaction](https://solscan.io/tx/4fCCSbsavTbA9k6P3X4BQqZCWJvRyCdjhsn64UebXJ7RncqNHY6kyKTbGPxFkDdADB9gCPGv5C8zTyCnq1TM5g2x) |
| 145 | 84 | main | 2026-10-17T09:56:09.213Z | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe8db197e1af1415d3b24386ad0c015f4ea76084e7215d22fde8c1b9f3cf296e1) | [Transaction](https://solscan.io/tx/5hcCva7FHMuConKsKjQzJJvj9nN7RoHvTkWaXukkHVusEsiPtjWX5qJGJMsjvx1W2CJx4M2xfk7ereYqmEuTkJRW) |
| 134 | 73 | main | 2026-10-17T09:56:10.820Z | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x317b51ce6f9b2a7695aed6b3fdf9670eea3f38dcae61cf112c96486c63b26b71) | [Transaction](https://solscan.io/tx/5wb5pUN74hrYoqiT56mavSJFfoKtZ9ZJbtryEhZpX62qiTW4zP22dYUi9FGTGG9DCJLnZt5evtbFQaRAZqiB2F3w) |
| 138 | 77 | main | 2026-10-17T09:56:11.220Z | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xdb946dbd1b55843dabdad5d2b50fbc4d3503745d851abd1a5b307c56558c8c6a) | [Transaction](https://solscan.io/tx/5gLNWTAwaWVuTs2CFKCaTYhuexAikzNNtzgbtSURcK5cP9i3uEviA5PVE6G7yf1H4rC7ow5cKYRMKraEWe2ZziqT) |
| 142 | 81 | main | 2026-10-17T09:56:11.418Z | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x567ab6fb078a77f3ddd5715994d2fd650463cc100657bbf5700d2f10060bd364) | [Transaction](https://solscan.io/tx/3k1iSQRhvjTrWPf3h8G6xVnLR5VDifBSF5szfrmCgubauSAeax1Nhnc9WE6QhkTbHb497u3ZqSKvHDrH5p5PGoW2) |
| 149 | 88 | main | 2026-10-17T09:56:12.117Z | SOL → [Bonk](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8ec531dcd49c9bcf8dd0d180e5569849477de632ea8404a6dbd2721a962e2337) | [Transaction](https://solscan.io/tx/2qxb2TgzbUkrzt5mftUW5KhjywKVX4yavHZesc657DNUZawzYsY84ZkgMaxjQp3QUc4aVQtzVVLsjLCxvffrKCbi) |
| 151 | 90 | main | 2026-10-17T09:56:12.519Z | SOL → [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb4ba33772c4acd0fd1bc5dd2258f42af0e46c0013e52d89c2c243af8ad3e422d) | [Transaction](https://solscan.io/tx/37J5kyH2CDaCJ5mq4mQAeCL7DZwj6JWEPWkG6Cz6aC1NudWA3Be8vsZzq9a4UovdfnGmHyZ75rDnEwfsCyUC9a1R) |
| 152 | 91 | main | 2026-10-17T09:56:12.819Z | SOL → [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6dcefe26764fe49c866c7cf6b83f5a39d8606d258c733366a5b9010a0d37f126) | [Transaction](https://solscan.io/tx/6TrCZDPQdEN1iBXqDLKcZwJb3biamjZZWxBpbQeBNvXfpwsfcvSUywa7sjbtiDM1fb1MAk2XrebE3DsnTzcNTrt) |
| 153 | 92 | main | 2026-10-17T09:56:13.221Z | SOL → [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe870562af9b3025de4f5eb16f4a3c013a25ebeeb7fbd685651c0ce336c1bb975) | [Transaction](https://solscan.io/tx/csC5dsopNXm4rP6Gr7BVJtKXXaN77mbjG9Meoyc2P747fDPcuzaEWBjmWYEB72mXCsRkZw64xvxKmbSY3X4Hfw7) |
| 154 | 93 | main | 2026-10-17T09:56:13.419Z | SOL → [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x68ec6a7e99db38145ce010224d70b49adc5b3a36950006321c774f38f6169152) | [Transaction](https://solscan.io/tx/3tSXihsnxUy187pHXbRBRqyGV4z9SHtuJzZj5NnfuxDdboKHUeU564VquXrSbjGURsendDojUGFX5DNBTYrZjzPH) |
| 155 | 94 | main | 2026-10-17T09:56:13.825Z | SOL → [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xdee3ef95d7570e03ac09280c9a4838ba87b244d750c617a39b8051081faf6a1a) | [Transaction](https://solscan.io/tx/5ugyUbgx2K9k2KE8mr9ePsvbiXqyL9CaN8KhZ8j2T912guH5e9mJn41pUaeThDJ9PM9Fcm6mp9CuVvg5PvAnuaev) |
| 156 | 95 | main | 2026-10-17T09:56:13.920Z | SOL → [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x48c50fdd58811ca8496ab2024d2ca9e3b2053cd9fba81030f1342c36acc2f47b) | [Transaction](https://solscan.io/tx/5LNZpSAiihZVzrza2sv1yDykmu8X732nttedo4KH6bijZcqgKDVWiwmttdZiUPpFV6tqzM4MvqgvTK7mxXke1MvD) |
| 157 | 96 | main | 2026-10-17T09:56:14.018Z | SOL → [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xee8e758c3e5ada4b186bf1e3a23e78a31c1f211970c6046c988fd8b583244670) | [Transaction](https://solscan.io/tx/3G99wYudYk1QtcUHZhU1xi51JEQGzZxiUtNWmHX4En42FB3En39ZN7QXSvkdvFMw83i3KPwQk41Zy9zXRZDycrCn) |
| 158 | 97 | main | 2026-10-17T09:56:14.416Z | SOL → [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x79d8b33500cd76f8ac5e90a043d2c6ae6da2c8f024427ea1a203c20194ec6ce1) | [Transaction](https://solscan.io/tx/5QzGnG2NSL3Rtbku5DHKwrMnHYTck5Xt4BQMXvDthKbMNgP84mJ2rxZdmB8YoYshNMTZuhvHojzS4oqVhc4gtmfo) |
| 159 | 98 | main | 2026-10-17T09:56:14.615Z | SOL → [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xee178dd909eec527da1349f13499a661869a6c4b5d6c071af6838be389589f34) | [Transaction](https://solscan.io/tx/ZC7dAVZgDf4MsaumuDZTg8UaGvtCWDdzNS4djkGjEw4XzCqUXWyphjtjFkv7hTu4ctfBmGoEXSkCT52qNBnHJHu) |
| 160 | 99 | main | 2026-10-17T09:56:14.820Z | SOL → [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x32d95ff97655ad070bf2fa7d7707e0ec70d4550701d71e1a11fe14fff73f7dea) | [Transaction](https://solscan.io/tx/5SSbHfSowEYqwDkkpFH5kkCKm68EpBqY8aT91uFBoBGsVBvMZ74moedYN1dupyZTWVQmKnM3NDR8Q8ZGUR78qs4f) |
| 150 | 89 | main | 2026-10-17T09:56:15.125Z | SOL → [$WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x12d853fe8c54646f96be88e94d70df10fc484566e7d417c5a4848aa9f88f8f7f) | [Transaction](https://solscan.io/tx/5THDvA5hVgmM8WUUHs67NiGQtJsZNMkGPK9b5qDkiNh7HBEWVrsodkoAeqkPPgvxBr3mUVXwd1ZF4n2x2dCERmXZ) |
| 161 | 100 | main | 2026-10-17T09:56:15.326Z | SOL → [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x94876ad0435112b20c67d3ffb8cece58dafe7f4880974055e4dd6efe5811cfac) | [Transaction](https://solscan.io/tx/4mfj3MtYpapSY2BxFeS66epRkgK427C8RMmofTZ2GjM5Lt2ryZ1Kqqe71599U1WyLHXkuhpXGyry83ub7NohiNF8) |
| 162 | 101 | main | 2026-10-17T09:56:15.519Z | SOL → [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd64cd8e99efd620dcbac7d0b926671b5f4aaa3bb61b25dfc12a4656be19cd3fe) | [Transaction](https://solscan.io/tx/2Jq7NAWzWa3gYHzAzdoTKHA8xZjrRjV57dP6iFht7Ye91DBR9gyz4FctsegJXTC27hA54P6mGQBvXZXQ1byBEB7M) |
| 163 | 102 | main | 2026-10-17T09:56:15.617Z | SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc9245695cd194e607cccde11c3ea3c74a180a1576489619775f74ecd71f72712) | [Transaction](https://solscan.io/tx/4asktNsbpp3dKt8DTjwASsTB3SdnCPF2WUP26KkP1Lxt5y6T9WUwb4SzFwcDVNBJsw7UUNNHGg9v2H1ePtN7PmUD) |
| 164 | 103 | main | 2026-10-17T09:56:15.726Z | SOL → [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x282a8cc8acb21437507886b862fb71d2da0df1ad8fc9a4ce583923c5d472576b) | [Transaction](https://solscan.io/tx/26h1ZNcrHyw1FKDVVeBnRGtZ6injonLcCiooyN6EqBUfhqoZzqYpbBki7hfrWKdPtuRemYWZ3iBg4isGvjCzD8ts) |
| 165 | 104 | main | 2026-10-17T09:56:15.821Z | SOL → [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xe502b0edca68398d4d9a690be497ede1f68db8d43fd94bbee50b2369ccf11928) | [Transaction](https://solscan.io/tx/5w3GvSZVLJLyxvvRrczoWfnmRXTQPmKTis6iLkR19ACNRoozi7oatnZTcrHU3tnzBNYhdiuMRmaesrYtEGo42pce) |
| 167 | 106 | main | 2026-10-17T09:56:15.917Z | SOL → [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x99030d87d338ea28006fdfc3e9eb01e287c4048c5d58a35b74f2f2b37ab8ddd0) | [Transaction](https://solscan.io/tx/3Qa2dRwp37E3fHwxWL3ntPuac3HTqnm9u7z3Uw99iQvBMJ3p4WT5G4Hvp1REPQKRSxgrZW7N4zVSyVdvrTGeRvKP) |
| 166 | 105 | main | 2026-10-17T09:56:16.021Z | SOL → [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x914cf3fcba2eea81f49e267868d0e7c4a1f49081a6f1c78b7ba98bcb60e9c5f8) | [Transaction](https://solscan.io/tx/2scXTieGefG2Amzrt9WqCyqtQjHMc1gonako4KevpujcvJ6AfyzsoQMqtLw8u7tWiqr7zn5Ty6GUyUYiwvnuzQZ9) |
| 168 | 107 | main | 2026-10-17T09:56:16.119Z | SOL → [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9daa75a54a352bf1eda233e554c0e6f433c0dba3079cb40c129c9a097f8b98e0) | [Transaction](https://solscan.io/tx/2MJTFAMsR5f1tatBG1zV1cBApSDWLzcXmi8CExr6Yih6JTBNaruxDpCoR3SB19NgBnYQbEiSuHMjEsMGTnfURVfB) |
| 169 | 108 | main | 2026-10-17T09:56:16.218Z | SOL → [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1d2e201fbfd5b7f1db3ffb017011c7e1b9aaa718a4cdba38d7a9665dfc90a8ef) | [Transaction](https://solscan.io/tx/3tGNtJNkLdtBN887p5knWv9YWsiknPmsMBbZUz1tSgd15imRhekYZeGt7Mg2nKXVqyfsStdd4maAUmCqL6gQX9HA) |
| 170 | 109 | main | 2026-10-17T09:56:16.318Z | SOL → [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL); sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb1e15cbb9591d427265cc81a4f52e68966ac33d631f20a9615ff720588a25627) | [Transaction](https://solscan.io/tx/QGPkUr3evdfuSgHdFVAEMx2qe8ZzPrLzyDyqH65b1xUyQLpP825i2L5Ejhux4gFHb5dAytpfEsYXxwYELE2tAne) |
| 179 | 78 | main | 2026-10-17T09:56:18.629Z | SOL → [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8bfd1d40ee442a21c9b1384d17f5bbe0520954d0e65d1c74be4584f993112dfa) | [Transaction](https://solscan.io/tx/4vkEn89jdcEq5fyMsxNjMQjF1ZR61fmDWVZoriNP7jJBFUrTtM2RRUDo2aFemoPXFEgr8ocxAGgb9vxR9iRQjZi2) |
| 177 | 76 | main | 2026-10-17T09:56:19.120Z | SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x683c98b7a91a10356897302e90ea9ba6faeac4a0d1b3038705ab92d3b9b04881) | [Transaction](https://solscan.io/tx/2RhzFbkXTwhDoBMwpsmDWEHGw2qWUCNgwUGBuh5tzSZjVNueteMtCAf3C8DDtPNp6Jfxp3gQmFa4ggkw9Y8MJZit) |
| 173 | 72 | main | 2026-10-17T09:56:21.627Z | SOL → [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd306002251feaec6595ca0def15fa6c2820763f7ad928dd3cdf2cde718a293a4) | [Transaction](https://solscan.io/tx/mQiMSY9kxDRtAUi8wTPGs8vRCcfWLtkrQ4wAeohus8gxtNaEuEErcGatDivrqMqgouKn4sxtvwKAPgLNFX8PyGV) |
| 171 | 70 | main | 2026-10-17T09:56:22.186Z | SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc279c877208161009a159132c54b9bec9569ef4f1c75e00305c7bc667a50e3e0) | [Transaction](https://solscan.io/tx/xvVjWPUHNegzYaZ533PEe1ZHBS1znyzTFTtMxZXZLFeqWZnHnAo9iCg1n4CHLJeK2ZhM9mCsFATsJJ1YpYMHSr3) |
| 172 | 71 | main | 2026-10-17T09:56:22.303Z | SOL → [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x8623d2a1d973d46b0aea4d445bcb278981be653fb93b8989914729de912caff5) | [Transaction](https://solscan.io/tx/5x53PtMTkTd9AxaLcxDKytxWB61rMpJdWiQoTHxEQm8v5BTSw1dMZeMxViw5zJeXrjqHLXBmrrf8218UmeneFoHF) |
| 175 | 74 | main | 2026-10-17T09:56:22.900Z | SOL → [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5b129dd002699d511fc7731d359dc85fc566e5f4f13c75bb22016615f1cef349) | [Transaction](https://solscan.io/tx/4QfgnSn6o7iE8qsDSqXSUWPREUPWY2yZLoVx93PKrLBGrJ8KA5xYQHYR1wg9jK917BDbwCb7vQhWuAsCvk3UUhzT) |
| 176 | 75 | main | 2026-10-17T09:56:23.124Z | SOL → [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7e4405cef9f93e604c3a8c1d08611bac9c84a9678c33ccd0a5a24be0cb1cf5f7) | [Transaction](https://solscan.io/tx/2eaUkCw5ZCguYe7LbCD9AL9d7a45kjmuLsU79aC2TtiRqrTHdnqn46892FrDrpQAgawuUi1abcXePgutrNvegcpp) |
| 183 | 82 | main | 2026-10-17T09:56:25.135Z | SOL → [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbfa7e6fb2a261bc4bc83d20393821a4cce05732c6f4376707ee8f6b182d00708) | [Transaction](https://solscan.io/tx/A6cDmJKWXwwsKsASbyB7r9A2j8zSy1kw7kkZoE4DnsAuR5FLujqcFCuXG6a3gY9hZAo16tPaCXSuGbc7Mw7Nvhb) |
| 185 | 84 | main | 2026-10-17T09:56:25.665Z | SOL → [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x761bcc8c201d96dfcaff2856209c8149963fca6a56cad5f065889f7f93645f03) | [Transaction](https://solscan.io/tx/4YRo1ZVSW8utdkJLgifzWhv7mWj1c42UCm5vy2wj7mi2Ft8e6Wd72Jbd9MkJA2SHcVQQX2QVU86SE33utqybZifA) |
| 174 | 73 | main | 2026-10-17T09:56:27.115Z | SOL → [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb99b9a6b24634ba7a0de9a4528ef1d7cc9dc8b5704ea3473155dbfeec65324d8) | [Transaction](https://solscan.io/tx/22cbKyqiLig8HVuidfAR6Zf89pgn5aCXtHc9bmPjrQLmwMwVB78cJXXKJjUP1DqBFXGXFEvbP5QapVAxSo36yBZC) |
| 178 | 77 | main | 2026-10-17T09:56:27.490Z | SOL → [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcd687e6baf0e9aefc655c5eecd58c6f1befd8d7f47e96e533b1e424e01d849e8) | [Transaction](https://solscan.io/tx/2nj83b1dvvB3BsiDP4vdDGJAeKfpgsUhcuUuueGCqcAWFv7GRrNwuA6gKCtMSZgcu9YtasyoPYALVvjkMsyQBfd9) |
| 182 | 81 | main | 2026-10-17T09:56:27.901Z | SOL → [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x42c593906cf353c41884d96e0862c2f0ef8f7a976860198047e6dab82ffe54cc) | [Transaction](https://solscan.io/tx/3JqZpjxAbN4nyEggwn3SpRvdcH4HdAKhZQJFSk3GABZa4GkgbMm9hRMVCAGDdGP8SR4C2rG15jkVSZ4xY6ou4AxQ) |
| 180 | 79 | main | 2026-10-17T09:56:28.405Z | SOL → [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbf332535f385023aab33c2d54a8185c03ce1e716e76c1a4a775ebeaf9c6296b1) | [Transaction](https://solscan.io/tx/8SHAmjJy9JDGSuHvfogQ7T3rueWGXHNwV3dsAsunmGt4BdUEu6D7hTobPeL6shEYwADx495DEpttEoyVeKkEwvv) |
| 181 | 80 | main | 2026-10-17T09:56:28.798Z | SOL → [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa42c9a236824d0f30038481c735592b6c502874663d9f8bafd197e6b3af61d85) | [Transaction](https://solscan.io/tx/3VHadtRVVkYdXGCYC9aP85PYXudZJp3ZTDJna5hpFrdoj54qcyTB4588P7ZWoDjkUepm9BPKAbJvtxC4h8SZSybr) |
| 184 | 83 | main | 2026-10-17T09:56:29.057Z | SOL → [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8); buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4635c8f89f276c61d1cdac077221194b9e9164f09763f498c9abac08a9980879) | [Transaction](https://solscan.io/tx/5nG3J5v2k79yK5m8nAtF225W1RM53ruSrngPZQjn2Kb9JqEdaLPpVmPuXN25Qjq8ZthW3g6o5in7vCmz2aZzYC6u) |
| — | 71 | cleanup | 2026-10-17T09:56:43.911Z | 98kfF7 → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xec1852b7d0b7daa12f8507e00119cabba93046c565b51b1d0723816863bef80c) | [Transaction](https://solscan.io/tx/2Tmp9rJshJFvhQ9NTcCEECVSzowRxip5tXKFb5RA5TEYvqDVZHYQqnEKCfVwik5GFnUJKB5UEzKq2dNA729w2tze) |
| — | 72 | cleanup | 2026-10-17T09:56:44.883Z | 2u1tsz → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0715fa0683e9802d783620ce2880540247fa6d54f586667e1c27ea8350e7985f) | [Transaction](https://solscan.io/tx/XgYHSqGHkD7P8SMyDtqdvr4gLpBPbRnczQ6VYwZfm2a2ApASXq2pLbdV3UfMG76pAvVoTpb5Eg5Y29ymLp8Rh1H) |
| — | 73 | cleanup | 2026-10-17T09:56:45.816Z | pumpCm → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7d4ec0000dd051cb2166e05906956090cb36a489e77ab0048890668d9572153e) | [Transaction](https://solscan.io/tx/2N5ML8qNVwzY7XhiVR8mFS42mwi1LL6UKoyVP2k4DTdWPwBobGRDcG3nLK4KsBcYcxnFGScBN7mfeDnuL22j71YJ) |
| — | 74 | cleanup | 2026-10-17T09:56:46.819Z | 2b1kV6 → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4927b2f97dcbbfdd5c34690bffbbbf512e2091b1c39f93143ae7f340a74c4ff7) | [Transaction](https://solscan.io/tx/5ZttKKEJgGVuNHedPRcWjAP46SkJhdnRrGGBT5ATvgySTJmhRhzSwvxn9Gr5H1Ka9zWBVj7CD7mx3rMHbhEtCUhb) |
| — | 75 | cleanup | 2026-10-17T09:56:47.742Z | CASHx9 → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3e331a69accd4101dc4bc527e72e0f829481f69b9e22b718e5ca034188fa311e) | [Transaction](https://solscan.io/tx/2UH576iJHWWcxotdz8fMU1rHb6hCD8aqFvuSqPBL6bijnwV1pAmXn1TSiqohKxHAJESPykPv3NaCSYyfn7YLLCqR) |
| — | 76 | cleanup | 2026-10-17T09:56:47.849Z | XsueG8 → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3fa646257d2c6788bf5b2a83a67c22b49aac81e12bc791bfb66f7fe1ee399057) | [Transaction](https://solscan.io/tx/5r1Tk4sZrbMBjCMsbQtuDrZc8NLjRtcz42mRPzhLb5R26MKh1UNmZp1HdxGwJmHz2gRaQNzxxTJEQB8hDsojP69y) |
| — | 77 | cleanup | 2026-10-17T09:56:49.590Z | XsoCS1 → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf5a405a873721ccd5dc7371af0beffaf665b288dacacb90cdaa01204263b3cba) | [Transaction](https://solscan.io/tx/4GJGgHk1ZjSuSymB34hv9RRmRibPL22eFH62pidZFrSvLYvhbhFWznmSkuQJXtx51sbDARcHkBGz8fZ1vyivN8rv) |
| — | 78 | cleanup | 2026-10-17T09:56:52.483Z | USDvUS → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2eba66659d84155b796160f9b9e9624b5e96b32eb855284f1eb261d18ddf1f04) | [Transaction](https://solscan.io/tx/3SnCa6mLHk7JSMFCAj7qVXzzp9PWk8A7JoyPwgpbo31RFzuDNBPE92qWWVYteruhVS7fTjYEPkqnauLhJGNhwLPH) |
| — | 79 | cleanup | 2026-10-17T09:56:52.783Z | SKHYhS → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x6cf7170e5d508585b57a754e4d1ea23411310d4f5a9d61c0b6e9cffbb3377540) | [Transaction](https://solscan.io/tx/5duEKPFrNtmX2dzCSTCgeDrgYNaNeMmF1m5ArvcuQaTE96wXMcKL7RBG1pkXQzWwvyuDm8wu9pUMU67Fa6TCYDph) |
| — | 70 | cleanup | 2026-10-17T09:56:56.317Z | 9cRCn9 → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xcd842786617354a8702b0d4578f93a5276ad3efeaf0af85ebb6f87fc8212ea81) | [Transaction](https://solscan.io/tx/JUTqJBjmxqnYfdmHjpf5h2bErVt9EQs4NcSUkq2ScNX1tgWYm3UeQVGGTwU32fpDsrXDJcQytETiWFkC7RqYRpq) |
| — | 81 | cleanup | 2026-10-17T09:57:12.747Z | MUxEsU → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xbf4f7fefab787ef87af7b546b7ef57787ab904112c8c686998e9700b222ad893) | [Transaction](https://solscan.io/tx/2Pjwc4gr5BGfEK2CHzKwkUgoT1aEoWEqM2v15eUTyFY9VHBFEVz87VDsC5m2J772tvFRWQVciuT5KrusEcx5SbGP) |
| — | 80 | cleanup | 2026-10-17T09:57:13.601Z | Xsc9qv → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x16dd023a5544d8a2244a7a4365079e87d7c3f002406fec584ce5ec6cfc610543) | [Transaction](https://solscan.io/tx/2b2eZFvyogAGACtZENVCpj1JbKnoFVJsrNkvWHAkuLUKshgDonJh85VabPVUWtdbaKuZ3ksQXoeavjsWEiNxXwZm) |
| — | 82 | cleanup | 2026-10-17T09:57:20.745Z | SPCXxc → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1b76f96d757416aa4762655ba3e4f0e0668d9f429d9a9f89141b73d1f570affc) | [Transaction](https://solscan.io/tx/21wYETPHuxEmNcFN4yXwYL8b3NaC9JTDHDbJkanqYBZNos7NvEqpmWCC2RuRL3dPgGCMFEDruUPx5QEEuXTKfLRZ) |
| — | 84 | cleanup | 2026-10-17T09:57:21.739Z | XsDoVf → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x32d7d58d400df73f1d86c091fce1568016f1a27dcf784a44e421dfc884e701cf) | [Transaction](https://solscan.io/tx/4ZDTBwmBKtdx3hHU4qYpphwK8Fikz8sx9WmuBCud29RzZsSobMnJkx3syFUXn67EbSkTZr5eW7WeQj9jLfdc8cwK) |
| — | 83 | cleanup | 2026-10-17T09:57:24.286Z | Xs3oZw → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf179cab6c6e553de384a7ee044a05e7ff27774f141bfe72b933e85213c183b75) | [Transaction](https://solscan.io/tx/5rGBGHpdWp7XJXHscrKayWSmSeLyRkG6xerZCqSxb2Q3L7DdR3sH8hPWKdNzPbJuYEXffzYNNSALc3wgVbLaGBuB) |
| — | 88 | cleanup | 2026-10-17T09:57:31.977Z | DezXAZ → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x384fe72a62b701f8600d82a1297365e2270d277a31038ab3aba2fecc1216cc3c) | [Transaction](https://solscan.io/tx/3zSNoGFs22rD6cuh8xd2CL1TNNsdMVKFVFs8ZDv9FpcQaUe1vewnAPAkx9G9eM9dnqyUZWJTiKUrMRFQB14btgaQ) |
| — | 89 | cleanup | 2026-10-17T09:57:37.915Z | EKpQGS → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0158937d386afccffa038fc5d2e9434cfaeb0af8ad7fca1ce6e4f541f5a57f56) | [Transaction](https://solscan.io/tx/6UtgkD5h4J8kiGWfezYTBYDTBS5KWyv8AC57Aaro1UCaVJ1hL7aq5qnGBHud1wSXsB6Jg79KBpSteJpRR83byFr) |
| — | 90 | cleanup | 2026-10-17T09:57:45.730Z | 7GCihg → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xda00e32228bf2c756c6e12f610f3522db9d7e7e40171025760ef7098143fd41c) | [Transaction](https://solscan.io/tx/h1uJM8PKuQb5rGijqzihBjRRgNkqacZMdXsCYWvReabqoGAGHcv4KwCSTYg9aUpmbJFCdkfAMtffyu1j84PKynk) |
| — | 92 | cleanup | 2026-10-17T09:57:54.556Z | mSoLzY → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1433b033712dbc8e1f96072e42f3886a1d8abc1104cea337c05e3381334b01a3) | [Transaction](https://solscan.io/tx/3Pnr53yQxjU4uLbtvxN7Vgkr9UmsKgpebzvdnTmc25Vxs5xszATCmwg3YKx53yhkMbwrVUpw1UG1dG28ycewXtTB) |
| — | 91 | cleanup | 2026-10-17T09:57:57.110Z | J1toso → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc129d0c6f1957fe4831bbd213c31142740e3ec6b255bd7ba5eb894434bd71a45) | [Transaction](https://solscan.io/tx/5Gr5YMRL6xycMPnpCXbJWWJMZDunMqrtCREnNju7xZdT22cLvX4yN8btuKfYYe3t5bZYvKKd7ShT88q1amaGivvR) |
| — | 95 | cleanup | 2026-10-17T09:58:11.949Z | DEkqHy → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4091279cebc05302fcdeba425b545ee37f1dbf8295edbaf067786dfd268478ec) | [Transaction](https://solscan.io/tx/5RxmV17HXGaW7owU52a3f19maxrfMXowHkUVxkMFcmpuEJXTNSPjPaZ52Tjz4nZ1zPzmp67qoJUH2ywTSj1mbYxg) |
| — | 97 | cleanup | 2026-10-17T09:58:20.080Z | A1KLoB → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2e77c40c605e8e903e0a6cfdb471767151bd28b23b070244983588db3f988946) | [Transaction](https://solscan.io/tx/4Z9RMz866MnrbCgUDE2jPK2HpFuJTS8T1WTyGeqFyxnBQeittqamnsRhny72Y8ffTRjhZVQLftA6Sf5EzUSBpvMq) |
| — | 93 | cleanup | 2026-10-17T09:58:22.411Z | jupSoL → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x72db222d0d8d3d9516729be5dadb68285082de5732dcd38a88bc7fafd53ffb93) | [Transaction](https://solscan.io/tx/2tfJBhYRB3aoox1BKwz7yVU3zKUpnwiPBHHQBtoEnaZrcv5QHyRNFPXgjRyAYNQXFZcBMSMMsAVY8nKX8FBesySU) |
| — | 94 | cleanup | 2026-10-17T09:58:23.013Z | cbbtcf → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1610b20106f670fd896cf415ea9883c21563363d3e1c30dcbd611d685c3ef316) | [Transaction](https://solscan.io/tx/5tLH8PxtccC6WK8HTEjf4PD4tguw5vvfDkDk8hhP93Z9KtT8x1b9ruCrb2XXu8Mp7oH1deUzmy4iPWbUWjF3PxE3) |
| — | 96 | cleanup | 2026-10-17T09:58:28.689Z | HzwqbK → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb661c22260c7d43920956bdc44f22198b1ed2d4dedd3a3a7594b1c391623b2c4) | [Transaction](https://solscan.io/tx/JV8skPkxaThmZcTUCPAN6R77asTG9wF2yawVjfLF2vqbv6Ep5VcdmjMDFnYCFYfZk5JZ8MJL9qBLXJY8v7fjAnh) |
| — | 98 | cleanup | 2026-10-17T09:58:36.117Z | 27G8Mt → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x45bebf54631624d956b9f1430690e931077976bd1b77648e116a1fa65a10c22a) | [Transaction](https://solscan.io/tx/2RgE1z6u2M3Qnun5yhgga4rKoRqCffJxxoUbc926BQe2vFQ9H6zGbSvCzNqo3VmVXF3NbERRh43CKivjuJBV1EcD) |
| — | 100 | cleanup | 2026-10-17T09:58:36.326Z | 7vfCXT → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x851e96a8c9381ddb7f2bb7b3d21c2eb1ec3826a01e3ffc6a5b547c404ebe3915) | [Transaction](https://solscan.io/tx/5nBsyXQEfcoHkjptgxpLPjmyQBFhLC2jkCw23NBVg7YfC5fvarpjCNEiT6wCL5wNQRbmHfnWaBhThceBy86X4xEd) |
| — | 99 | cleanup | 2026-10-17T09:58:37.614Z | 5oVNBe → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xf539c8039e8447448a811f2991660ee124728c2962e91edf17d83697a47ae0ef) | [Transaction](https://solscan.io/tx/5M3LYL5QGh54kce8ehNpJv6c2Zp71YCHw17Xb64hf8yquNJWSzmCjP9m1wC56dUvTibXFDcijS832kpCLMedxtsB) |
| — | 101 | cleanup | 2026-10-17T09:58:44.898Z | 9gP2kC → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x9417deaece6457a6596f85693300d2111afb85192c00f03f6773b34840b956c6) | [Transaction](https://solscan.io/tx/4tDS4PGFkd9gCjKUGBA43KDuR9ZwLCyHYsyWwbV3bDsphqRWxS9xoaNGTZQmaraKbCcM4gkwaRXfbpvyT8EYXNCW) |
| — | 102 | cleanup | 2026-10-17T09:58:45.400Z | AymATz → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x49976fcfcc8fde1072b29e84e005053bcda072de801ac21a6537768cda832952) | [Transaction](https://solscan.io/tx/ZwRMPHLoL23buubMppDVxDCGgzmYxqfuFD8BdB6ox59AKQbpDY7LnZ3BAYodqcKUGcDi9CfpwjfyFkR5GuCgMKW) |
| — | 103 | cleanup | 2026-10-17T09:58:49.442Z | Xsv9hR → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x3dcff78a9a183ffbfb4ba011b8a382fa411433164f824bc8a5620f879d20f3b8) | [Transaction](https://solscan.io/tx/3gSwAxZJ48G1ThW2ooNq2Kjf6AnHUS8KL8JUDspSNCn3bFo5uVFv8BUoQnB6iGx2XSDrDDUFdQBFF7YHvbhbjYm7) |
| — | 104 | cleanup | 2026-10-17T09:58:54.356Z | euro5s → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0b97721bd81ca31e66f7359d61537ce060425c7ff7a6ae265f5ff70ad56739a4) | [Transaction](https://solscan.io/tx/2rdKVTvE2yd1jUrKzGmaeiUEWkCcveNRDJjLtPVw5iGMmsXJ7fmsjwQ88Q7j5CtERag3njL5Jz6j4tDzHzDuDz5x) |
| — | 105 | cleanup | 2026-10-17T09:58:56.605Z | 9BB6NF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x837749693336ff587063db3f8a7c42b19b82c54b70a8815feb452d397e04ccba) | [Transaction](https://solscan.io/tx/5vbnumEj2Ev2YhFb7qTduDQ9Xgot7KqQ7cTk7fhSw28Gx3HeyKojnZPPuEQsVncemdtXAsSAKZuBKK1vtZ8vDWT7) |
| — | 106 | cleanup | 2026-10-17T09:58:57.604Z | MEW1gQ → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x5b05e4dbe0b52a7841da44783a7f727436a926182b4f0c856ff6421e2daf2ba9) | [Transaction](https://solscan.io/tx/2YUzFNe3GCfF7P1FxSP6RAeRd1TGm2isvQtVpUH5P5F5dJY9FLvJPZzFuHCepAv9T5GPJxSA7kyjAoLZdHrApbtc) |
| — | 107 | cleanup | 2026-10-17T09:59:03.042Z | ukHH6c → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7473b2a4ee3efc817c041502100b0f64a9a816ceea81a4f4c10b0d74c9f257e4) | [Transaction](https://solscan.io/tx/4JJaPyWugpxMFTvoUqjLeh88JKMVSxD8H81DxsT116PRJ8zESYTF8GEjks2f4rDJ9UfTHNp3m3FXrYyA1E2kbCGz) |
| — | 108 | cleanup | 2026-10-17T09:59:04.131Z | hy1oXY → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa4440307b8363cf5918f6ee94d16626a795e6bad758eef6fd104df427b75e08f) | [Transaction](https://solscan.io/tx/5xKuiexGnbeY7mpd237tyTugfTKtpahkidommT6a5K5DzNbeecoP1XVeTQEuSiYRyPqf6StC5DLWEeYW3r9TddeK) |
| — | 109 | cleanup | 2026-10-17T09:59:04.651Z | pSo1f9 → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x00391f6f651c58ec4c4e49379e46a4ff1a91c35bcb3faced86e1872b37e9da0c) | [Transaction](https://solscan.io/tx/2nQADvsEY3DvadPeu3MH3YBZKyykyL6xWoT9evddKdLRjLFtq7YwVY7JY1ZuKvMj2yW9EtaJLCSLWpHiamSDmdAi) |
| 187 | 111 | main | 2026-10-17T10:00:05.802Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xd49392cc77266e8d8224827ae84c2d1eeacc194a7a385f94aaf37177f7029b29) | [Transaction](https://solscan.io/tx/44kethU4dLfyTi4YJ8htQgUTK76bpmpX7MP75VNzTF5P2pCsWz8A8k9UQx3He8vJ553XVKTUnPTd3r4Zj61aB95c) |
| 191 | 115 | main | 2026-10-17T10:00:06.143Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x1b27aa40402d090840254c770ac00497d2e3c3ef203a10e1e1042389408c7144) | [Transaction](https://solscan.io/tx/3ux9ZZyM5jXSWedx6o1FoSeCr9cFY7BvJQnfJTb2xDspuxxLy31eGfo6e49MMGzGV1PsxM6KX1MtrW7NCqY2yVZm) |
| 189 | 113 | main | 2026-10-17T10:00:06.753Z | SOL → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x49212de09f64ef5876b846e7d01a4f2b76c98e3a71c6e23a29bebd1c1845652a) | [Transaction](https://solscan.io/tx/tL6p85crmMhZ6JKUvPaYtGY7B55r7jykYQ2hY9ve4D9zB7pEonyTvqkD5YyjxKZKFmjZUH6KgyT5wLRgizXBUsU) |
| 186 | 110 | main | 2026-10-17T10:00:07.155Z | SOL → USDC; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc3d6f3d78ce3ff6bd36443e1e00835727efe8d7633266922504bfdf5246e0d1a) | [Transaction](https://solscan.io/tx/44kethU4dLfyTi4YJ8htQgUTK76bpmpX7MP75VNzTF5P2pCsWz8A8k9UQx3He8vJ553XVKTUnPTd3r4Zj61aB95c) |
| 193 | 117 | main | 2026-10-17T10:00:07.375Z | SOL → USDT; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x85f0078bcc280ff5d921f1c8c9e4b8ee9f086d2be1711b0082f832b961b82370) | [Transaction](https://solscan.io/tx/ykjA7eHhY5Ktj5gG5gqFvcBVSMJXRELn4tYmRqEBeXFVwzU2JPnuyZntaN1GjsaUb9ve2j1pjkA9SCxLCH5GEVC) |
| 190 | 114 | main | 2026-10-17T10:00:07.400Z | SOL → USDT; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7f301f90f60da4689247850ba3da5bbc909d23c5fff81d70cc3f6a5dc09ed4e6) | [Transaction](https://solscan.io/tx/3ux9ZZyM5jXSWedx6o1FoSeCr9cFY7BvJQnfJTb2xDspuxxLy31eGfo6e49MMGzGV1PsxM6KX1MtrW7NCqY2yVZm) |
| 192 | 116 | main | 2026-10-17T10:00:08.302Z | SOL → USDT; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa0bf635da3433a5f4cc26ce34661d464545cb076222eae2896c38c11092f6335) | [Transaction](https://solscan.io/tx/ykjA7eHhY5Ktj5gG5gqFvcBVSMJXRELn4tYmRqEBeXFVwzU2JPnuyZntaN1GjsaUb9ve2j1pjkA9SCxLCH5GEVC) |
| 188 | 112 | main | 2026-10-17T10:00:09.986Z | SOL → USDC; buy | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x0026bb3fdc3dafd9f2e26fa17295775589c83f68aa3b2107740cb3cb1702d86f) | [Transaction](https://solscan.io/tx/tL6p85crmMhZ6JKUvPaYtGY7B55r7jykYQ2hY9ve4D9zB7pEonyTvqkD5YyjxKZKFmjZUH6KgyT5wLRgizXBUsU) |
| — | 111 | cleanup | 2026-10-17T10:00:33.704Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x136522926170a43a86e42e7d74f5680d50da57f0cc9aa0916d292666dd9e3e83) | [Transaction](https://solscan.io/tx/2dJUXr8m5T9YVW3nrkx6uTWv5mEXR5MVdVZ81wy6YTVrxHnvorpq34rkwF7BBGqQjuuzb88pYwsFTdBNGTm8Vfe3) |
| — | 112 | cleanup | 2026-10-17T10:00:34.656Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xa50759f296ea01d0916c8ca8f6ae85c766ad2fcb02d330256c91afbf0c7475dd) | [Transaction](https://solscan.io/tx/2dJUXr8m5T9YVW3nrkx6uTWv5mEXR5MVdVZ81wy6YTVrxHnvorpq34rkwF7BBGqQjuuzb88pYwsFTdBNGTm8Vfe3) |
| — | 113 | cleanup | 2026-10-17T10:00:35.396Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x7a649f410acdd5c8da9baa9203a8dc97035c887cf52e65ad87892868a910e644) | [Transaction](https://solscan.io/tx/2dJUXr8m5T9YVW3nrkx6uTWv5mEXR5MVdVZ81wy6YTVrxHnvorpq34rkwF7BBGqQjuuzb88pYwsFTdBNGTm8Vfe3) |
| — | 114 | cleanup | 2026-10-17T10:00:36.905Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xb63cd66c98fba4d55b95bfca2c48077bd28e7bc54c630caebd355a74eeb16f74) | [Transaction](https://solscan.io/tx/KWRqY1ZzwVQanYvawhRECT64YsfNyYX4AkCMZ1Xg6XLrbwixUkC8WSTLszS6UrSNFJTBozUhLfWLdgX4EhG4NuX) |
| — | 115 | cleanup | 2026-10-17T10:00:37.487Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x2663f09016e805b8f7cfcd2c0a262cc3f0d9a1682da786e930c2ea604d6d65e0) | [Transaction](https://solscan.io/tx/KWRqY1ZzwVQanYvawhRECT64YsfNyYX4AkCMZ1Xg6XLrbwixUkC8WSTLszS6UrSNFJTBozUhLfWLdgX4EhG4NuX) |
| — | 116 | cleanup | 2026-10-17T10:00:38.451Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x554bf20f810abee7fae180acd1006b1a0d6e78dbc078a483f5cdf8c58bdf9893) | [Transaction](https://solscan.io/tx/KWRqY1ZzwVQanYvawhRECT64YsfNyYX4AkCMZ1Xg6XLrbwixUkC8WSTLszS6UrSNFJTBozUhLfWLdgX4EhG4NuX) |
| — | 117 | cleanup | 2026-10-17T10:00:39.408Z | Es9vMF → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0xc46c14876467f88ceff59a3ee719832cec6314e7751fd90b890cb9f5f74e2850) | [Transaction](https://solscan.io/tx/KWRqY1ZzwVQanYvawhRECT64YsfNyYX4AkCMZ1Xg6XLrbwixUkC8WSTLszS6UrSNFJTBozUhLfWLdgX4EhG4NuX) |
| — | 110 | cleanup | 2026-10-17T10:00:40.293Z | EPjFWd → SOL; sell | fulfilled | [Debug](https://debug.barn.cow.fi/order/0x4de04335d49bc4a1991cdcfdd0f04e70a3387fcfa9401795809fdc8ed8bcb052) | [Transaction](https://solscan.io/tx/KVr3d5iAt31b4SQm3DfLUiMUwXKPteWkXaz6nfS4i8XVKzLhCS86xdRR8mCWz87gxm5NcWJ14Z1fkfLRha799xo) |

</details>

<details>
<summary>Cleanup exceptions and remaining balances</summary>

| Trader | Time | Evidence |
| --- | --- | --- |
| 3 | 2026-10-17T10:03:43.772Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.057755 JUPyiw…"], "leftover": [], "closedAccounts": 2, "reclaimed": 0, "swept": "22966880"} |
| 64 | 2026-10-17T10:06:11.752Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.1 EPjFWd…"], "leftover": [], "closedAccounts": 1, "reclaimed": 0, "swept": "21478440"} |
| 65 | 2026-10-17T10:06:12.145Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.1 EPjFWd…"], "leftover": [], "closedAccounts": 2, "reclaimed": 0, "swept": "22966880"} |
| 66 | 2026-10-17T10:06:13.246Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.1 Es9vMF…"], "leftover": [], "closedAccounts": 2, "reclaimed": 0, "swept": "22966880"} |
| 67 | 2026-10-17T10:06:14.806Z | {"step": "cleanup", "event": "cleanup_done", "sold": [], "burned": ["0.1 Es9vMF…"], "leftover": [], "closedAccounts": 2, "reclaimed": 0, "swept": "22966880"} |

</details>

## Detailed investigation from the saved report

The following is the original checked investigation, with unsupported fee-token table rows removed. Its historical summaries and comparisons may quote the original raw schedule. Use the adjusted performance and scenario results above for current scoring. Exact errors, ownership caveats and order links are retained.

<details>
<summary>Saved investigation, errors and transaction evidence</summary>

# Fractal solver test report

Date: 17 October 2026. Environment: staging / Barn on Solana mainnet. Selected completed run: `2026-10-17-09-36-composite-fractal-run`, 09:37:27–10:08:00 UTC including cleanup; observation ended 10:09:00 UTC; fetched 10:13:37 UTC.

**TLDR:** Fractal filled all 192 placed scenario orders; 190/193 planned flows completed, with 3 expected transfer-fee token rejections by autopilot before placement. Opposite orders settled separately, and fresh-wallet fills don't establish solver-paid account opening. Next, verify auction overlap and account-opening transactions; cleanup finished without recorded failures.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Achieved: 6/6 flows; 8/8 placed filled | Repeat with larger amounts |
| 2. 25 same-direction sells | Achieved: batches of 6; 25/25 filled | Check swap count and pricing |
| 3. Sell bursts | Achieved for bursts: 84/84 filled | Test team: measure sustained load |
| 4. Opposing orders / CoW | Not achieved: opposite sides settled separately; 15/15 filled | Test team: verify shared auctions |
| 6. Fresh accounts | Flow achieved: 8/8 filled; solver-paid rent inconclusive | Test team: inspect account-opening instructions |

## Changes since 16 October 2026

Across the same 5 scenarios, fills rose from 144/184 to 184/184 placed orders; the added fresh-account scenario filled another 8/8.

<details>
<summary>Comparison with the previous run</summary>

Baseline: completed 16 October staging run `2026-10-16-10-12-composite-fractal-run`, checked against its saved journal, orders and matching report scope.

| Matching scope / metric | 16 October | 17 October |
| --- | --- | --- |
| Same 5 scenarios: filled / placed | 144/184 | 184/184 |
| Same 5 scenarios: completed / planned flows | 142/185 | 182/185 |
| Distinct successful scenario settlements | 64 | 90 |
| Same-direction sell batch maximum | 6 | 6 |
| Token coverage: fixed-input sells / exact-output buys filled | 24 / 3 | 37 / 15 |
| Creation-expired / cancelled scenario orders | 39 / 1 | 0 / 0 |
| Median / longest observed fill, seconds | 14.900 / 69.716 | 11.335 / 29.991 |

Standard pairs (6/6 flows), same-direction sells (25/25) and bursts (84/84) still filled completely. The matching 185 rows have unchanged amounts, directions and order modes. Today ordinary receiving accounts were prepared upfront and cleanup ran between scenarios; yesterday cleanup was deferred, so gains cannot all be attributed to solver changes. Timing includes only fulfilled orders, whose population changed.

New error types: 0. Newly affected failed orders: 0. The same 3 pre-placement rows (146–148) again returned `UnsupportedToken` / `Token-2022 transfer fee`; their exact unchanged errors appear below, without order IDs.

The previous 39 creation expiries and XAUt0 cancellation had unknown ownership; their absence today doesn't establish the earlier cause was fixed.

Recovered examples (all fulfilled; previously creation-expired, except XAUt0, which was cancelled):

| Row / trader | Trade | Debug tool URL |
| --- | --- | --- |
| 131 / 70 | Sell 0.01 SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | [Debug](https://debug.barn.cow.fi/order/0x4b2c795999ad225a6e7ac700e135b0b33cfcd200b94fe1c50f37f2487e30dc77) |
| 175 / 74 | Buy SOL → exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | [Debug](https://debug.barn.cow.fi/order/0x5b129dd002699d511fc7731d359dc85fc566e5f4f13c75bb22016615f1cef349) |
| 185 / 84 | Buy SOL → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | [Debug](https://debug.barn.cow.fi/order/0x761bcc8c201d96dfcaff2856209c8149963fca6a56cad5f065889f7f93645f03) |
| 163 / 102 | Sell 0.005 SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | [Debug](https://debug.barn.cow.fi/order/0xc9245695cd194e607cccde11c3ea3c74a180a1576489619775f74ecd71f72712) |

</details>

## 1. Standard pairs

**The standard-pair goal was achieved.** All 6 flows completed, including both order kinds for each pair.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 8. Filled / placed orders: 8/8. Completed flows / planned rows: 6/6. Median / longest fill: 9.688 / 12.678 seconds.

The placed-order denominator includes 190 main orders and 2 JUP acquisition orders, and excludes cleanup and requests rejected before placement. Six setup trades in the opposite-order scenario are planned rows and count toward completed flows. Total transactions means 94 distinct successful settlements for these 192 scenario orders; it excludes creation, funding, failed attempts and cleanup.

Timings use placement → simulator-observed fill, including polling delay, and include only fulfilled orders. The overall median / longest fill is 11.548 / 29.991 seconds. Table timestamps show placement for successful examples and the first recorded failure for errors; row and trader numbers use combined-session numbering.

Saved staging autopilot competition records confirm Fractal participation: 289 proposed candidates, 168 wins, 168 submissions and 168 observed on chain, including cleanup. The saved settlement-failure and creation-expiry files are empty. Detailed candidate rejections and full transaction instructions aren't stored, so these records cannot prove every attempted solution succeeded or establish swap counts, transaction sizes or account-rent payer.

The run completed 190/193 planned flows: 190 main orders plus 2 acquisitions filled; 3 expected quote rejections produced no orders. There were no simulator order retries, expired orders or cancelled orders. Ordinary receiving token accounts were prepared upfront; fresh-scenario wallets were excluded from that creation step.

Settings: 0.07 SOL per ordinary trader, 300-second order validity, 60-second fill timeout and cancellation on timeout; fresh wallets used 0.15 SOL and 500 bps slippage. The journal records 8.827853466 SOL in scenario funding and another 0.173946880 SOL for final cleanup; these are transferred funds, not net test costs. Across cleanup, all 114 sale orders filled in 74 settlements, all 117 distinct traders had completion records, and no leftovers or failures were recorded. The repeated final cleanup pass is excluded from scenario totals.

Competition filters recorded 365 `unfunded_sell_token_account` and 89 `in_flight` events. These are aggregate events, not distinct failed orders; their individual UIDs and auction joins are unavailable. They do not override the verified final fill counts.

Fixed-input sells and exact-output buys passed for SOL/USDC, SOL/USDT and JUP/USDC. The JUP flows needed 2 extra SOL → JUP acquisitions; both filled. All 8 settlements contained 1 selected order.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 09:37:29.579 | Sell 0.005 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/41NsrCAUqjXkgxc2KAUhc8AeM5YeucaTqrWbNuZxBdfhEyFxRWT5tQTpi4KimyJ5a866Q2bLUyJajzgyd47X3pSL) | [Debug](https://debug.barn.cow.fi/order/0x5308e7eadf87288950bb21dbcb86334783319c4fe32bf2992c97fb71e3839eee) |
| 3 / 3 | 09:37:49.940 | Sell 0.5 JUP → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5DrES1gG9JkWZYM2uQdU5V9EQoTVAkhd2h2qTe2WX7WzRyPD5krKspBnS5sV5CDEX692WwvzDKYFGXegQNgKR5eG) | [Debug](https://debug.barn.cow.fi/order/0xd16084785ac0b0252f14d639b4d6b941421aed500a6c379b3b679a05bd66e430) |
| 4 / 1 | 09:37:37.220 | Buy SOL → exactly 0.25 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5VgwywQqvTpWti51hrfgkA6EQviL2WbNGqm1ovNRWAAANVu3VgEPxKoHtbcq3fMbLVPNxCf49fCkzZBBDikTvxZ6) | [Debug](https://debug.barn.cow.fi/order/0x8dc77076d6d95651948bb763018477161faaf4d74c5c1360c4201e32e048c93e) |
| 6 / 3 | 09:38:14.316 | Buy JUP → exactly 0.25 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4gXTqcLRhPHSTv2DzRFH4xpH6o6wBgpqYmuanyW95f5emacxrBgK5xWqMtn1fUmNyH84jS4wkGrpndqri8K5Qypq) | [Debug](https://debug.barn.cow.fi/order/0xaf5b2e53022266408a342d0c25beb8d0439e0e892547fddf33451f6bc3d5ea72) |

Cleanup: 3/3 token-sale orders filled for 3 traders; no failed cleanup events or leftover tokens were recorded. Dust was burned rather than sold (trader 3: 0.057755 JUPyiw…). The final sweep checked these traders again; repeated cleanup records are not extra orders.

</details>

## 2. 25 same-direction sells

**Batching was achieved.** All 25 sells filled in 5 settlements, with batches of 6.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 5. Filled / placed orders: 25/25. Completed flows / planned rows: 25/25. Median / longest fill: 15.585 / 25.340 seconds.

Setup: 25 self-paid sells of 0.005 SOL → JUP. Settlement membership is 4 batches of 6 and 1 single. The linked batch groups rows 7, 12, 13, 17, 21 and 24; shared signatures verify batching, but swap count and payout pricing are unverified.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 09:39:27.896 | Sell 0.005 SOL → JUP | None; fulfilled. [Settlement](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) | [Debug](https://debug.barn.cow.fi/order/0x352369d8b28ec3e6895f9a7771575e8c4e2faa4b41ea91fe42afb9bcec63ea0f) |
| 12 / 9 | 09:39:30.902 | Sell 0.005 SOL → JUP | None; fulfilled. [Settlement](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) | [Debug](https://debug.barn.cow.fi/order/0x49a51e5cd23b0cc5e2bfaee89a28bfd235772c96ded3f69db8e397032971b10b) |
| 24 / 21 | 09:39:31.646 | Sell 0.005 SOL → JUP | None; fulfilled. [Settlement](https://solscan.io/tx/5QjP6RkmdQQy2f8brTtfNhFHXcBj96iqWYx2Kwsse3cLCXDxWRc88RdHC9g9fd9aYeKckg8jCKT9XZxeqsqayMz6) | [Debug](https://debug.barn.cow.fi/order/0x49be1d804d1ed24ff2dd46cabcf59df0ebfd019c15ac655df1687306a7d336fe) |

Cleanup: 25/25 token-sale orders filled for 25 traders; no failed cleanup events or leftover tokens were recorded. The final sweep checked these traders again; repeated cleanup records are not extra orders.

</details>

## 3. Sell bursts

**Burst handling was achieved; sustained throughput remains inconclusive.** All 84 trades filled, and the largest 32-order wave cleared in 41.942 seconds.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 16. Filled / placed orders: 84/84. Completed flows / planned rows: 84/84. Median / longest fill: 11.908 / 29.991 seconds.

The 4, 8, 16, 24 and 32-order waves were scheduled 90 seconds apart, selling 0.0025–0.004 SOL → USDC. From each scheduled wave start to its last observed fill, clearing took 11.180, 15.476, 26.453, 31.282 and 41.942 seconds. The 16 settlements comprised 11 batches of 6, 2 of 4, 1 of 5, 1 of 3 and 1 of 2; this does not establish a sustained throughput ceiling.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 09:42:30.459 | Sell 0.0025 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5ywRveWKca5jdxE7Z4CJH6vjuyWf2JimpL6TRjnBPvmXGXCg3vGVuXWvnjKA56APfpWtj9McwkYou2XCX6Ude2k3) | [Debug](https://debug.barn.cow.fi/order/0x4ec000ec20d164ab9383a1b173eb410d8020a67472c3ae430110014aeeff51fb) |
| 44 / 29 | 09:45:33.647 | Sell 0.0025 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5PvzY6GgecxQ6C2oTH8LCrwAigZWVVnYiAwJZiZTxKz751XY27WvG9b5MBrcWdSMUmssmJY1mE9rHjYTho6jGSua) | [Debug](https://debug.barn.cow.fi/order/0xa9dbe5cb1a9506a10a675f304b5eed8321b2b7416a2ae381dec6c41c18183ceb) |
| 84 / 29 | 09:48:39.450 | Sell 0.0025 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4CxAW85LARJsuK3RdPaQuvbZ3yXjUS4V6zBc3o8BrJRnBqHSaYs2AjkXCFLGmuyqvEABuzGwF7sREbLFtCeXfsbZ) | [Debug](https://debug.barn.cow.fi/order/0xb1c4e11d180e95ec8ca02157ab6f6eeea85aa2f5a1b1af881b7a960d2a11fc56) |
| 115 / 60 | 09:48:41.752 | Sell 0.004 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4VaMUVbzuBqvwySLSwKnZKxjQhTxLSmtJa6Ca9UYxmgJZNgAhiXcytxLC9ssTsisuUjcoePDrwUqjVHCWyxQmX3o) | [Debug](https://debug.barn.cow.fi/order/0xde8befa7f3f27f2b1ed2c57497b81dc13d67e321fcf475defce8146c0257236a) |

Cleanup: 32/32 token-sale orders filled for 32 traders; no failed cleanup events or leftover tokens were recorded. The final sweep checked these traders again; repeated cleanup records are not extra orders.

</details>

## 4. Opposing orders / CoW

**Direct matching was not achieved in the recorded settlements.** All 15 trades filled, but opposite sides settled separately; the test team needs to confirm shared-auction exposure.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 9. Filled / placed orders: 15/15. Completed flows / planned rows: 15/15. Median / longest fill: 12.486 / 12.826 seconds.

All 6 planned inventory-building buys and all 9 later test orders filled. Opposite SOL/USDC legs (rows 122/123 and 124/125) settled in different transactions. USDC → USDT rows 126 and 129 also settled separately from USDT → USDC rows 127/128, which shared a same-direction batch. Thus no recorded settlement directly matched the opposite sides. The 9 settlements include 2 setup batches; auction overlap and swap instructions are unavailable, so this is not an established solver capability limit.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 62 | 09:52:02.725 | Buy SOL → exactly 2.6 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4xQVJMUMABXhcoQJG179K9WjW9bEWGR81VA88hVeuByMjRcGq9RTUQjg3aT7BcS8H7rnUKAg2SsE5r5zSF8b8qtg) | [Debug](https://debug.barn.cow.fi/order/0x0535c4d0d6f6e38e4c16595c39e2093dbc00ef21325770527cf7dbe99e0eafbf) |
| 122 / 61 | 09:54:31.914 | Sell 0.02 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5uBJQhNNVTvj4eNgBuUK9bcPm2mtGuA3VgWgj8mvzen8JueCjiLbjTyezw75sBg5a6Bfuaox561DnsoYVYgho1hp) | [Debug](https://debug.barn.cow.fi/order/0xac158352d01e4cbf49b72ca614300e8f7caf884fbbaf1c28f4b89d6f8ed02b06) |
| 123 / 62 | 09:54:33.241 | Buy USDC → exactly 0.02 SOL | None; fulfilled. [Settlement](https://solscan.io/tx/3WogAgoH8jHR44mbDfdvAHVtcTyt7G2FrCmd8uKpfmPCSYRRoPtfdvUQZb9VVM9QnC58cQP55m1sGt3UgK4XhPc5) | [Debug](https://debug.barn.cow.fi/order/0x24d35c1770ca4b4caf4a0caf45dafd9fa0219c9c74400ff71b40008e98e9b8c3) |
| 124 / 63 | 09:54:32.003 | Sell 0.03 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/5uBJQhNNVTvj4eNgBuUK9bcPm2mtGuA3VgWgj8mvzen8JueCjiLbjTyezw75sBg5a6Bfuaox561DnsoYVYgho1hp) | [Debug](https://debug.barn.cow.fi/order/0xed85849f9d912ede393d7aa96c8bcb304ccfdc6f82342db2a90723136af3da99) |
| 125 / 64 | 09:54:32.123 | Sell 1.2 USDC → SOL | None; fulfilled. [Settlement](https://solscan.io/tx/3myKG39tsgtbUmq3cHneu28R3wkputVEtr7U8grTAtqZ7HphpgcLb2zovycVQ9vhvW9y5Athy7Djq1XLU2ZS1qE3) | [Debug](https://debug.barn.cow.fi/order/0xbc41f6ed0c90156c71d88ee0156fe584f36764c49f16796b7bdbce43cc18fdda) |
| 126 / 65 | 09:54:32.212 | Sell 3 USDC → USDT | None; fulfilled. [Settlement](https://solscan.io/tx/5s63ZS49y55DK7cZCb18CJeBfyANZ6ZMvmQKiUZweKoxnpEfXxhNkf7y1YqgJ1kotfCapubt1c7dDn2wAdcdt6D7) | [Debug](https://debug.barn.cow.fi/order/0xbec7136ac6f0b8abfeb27c39ed360385319422a82e277a95bb5f4e0cd27719d9) |
| 127 / 66 | 09:54:32.365 | Sell 3 USDT → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4kNuGAShcZiv4bs9QwVmZ9YREXZ4vEeBnnm4NWUJJLBLyVF3q9H6XVeQmmBAdNqrghkGFNMaEUcxX4K5qxjhexuv) | [Debug](https://debug.barn.cow.fi/order/0x3b7c6bf3f138fd3ab1def8359f5dd0864eef02126a9fd1a8601ad48de2439785) |
| 128 / 67 | 09:54:32.584 | Sell 1 USDT → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/4kNuGAShcZiv4bs9QwVmZ9YREXZ4vEeBnnm4NWUJJLBLyVF3q9H6XVeQmmBAdNqrghkGFNMaEUcxX4K5qxjhexuv) | [Debug](https://debug.barn.cow.fi/order/0x79c8aa558ea40bffa39da80a0e21457eda5976100908586a74020b3bafa4127d) |
| 129 / 68 | 09:54:32.772 | Sell 3 USDC → USDT | None; fulfilled. [Settlement](https://solscan.io/tx/3mSTSGaT2fUdioU495DTJtEs5ToWZPp2nC7ndUhGu6rMBhroY7sJ9hJ7o4LAJzSs1R1nGb4k1bpzMEmECN9s3nj3) | [Debug](https://debug.barn.cow.fi/order/0x9deddf9f6c3b8060550dd4fe0bf0aea52ed6c1928d5130c6672d1458a260f117) |
| 130 / 69 | 09:54:32.122 | Sell 0.02 SOL → JUP | None; fulfilled. [Settlement](https://solscan.io/tx/2GewCxB8HrWamUGAgHncx81SuQjzkvwW5aKdxYnXHynsH6eMxcTE6MTDqfoknZArTsKgPACkBo9mfdtEw9fQGEtd) | [Debug](https://debug.barn.cow.fi/order/0x2e58e5edac54301aaacbb9e67df1bf19edaa60b8a9683291489319520f901af3) |

Cleanup: 9/9 token-sale orders filled for 9 traders; no failed cleanup events or leftover tokens were recorded. Dust was burned rather than sold (trader 64: 0.1 EPjFWd…; trader 65: 0.1 EPjFWd…; trader 66: 0.1 Es9vMF…; trader 67: 0.1 Es9vMF…). The final sweep checked these traders again; repeated cleanup records are not extra orders.

</details>

## 5. Token coverage

**Token coverage and expected rejection checks were achieved.** All 52 placed orders filled; autopilot correctly rejected the 3 transfer-fee tokens before solver participation.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 52. Filled / placed orders: 52/52. Completed flows / planned rows: 52/55. Median / longest fill: 11.288 / 17.785 seconds.

Fixed-input SOL → token sells filled for all 37 placed requests: ANSEM, PAID, USDG, PUMP, PYUSD, CASH, CRCLx, SPYx, USDv, SKHY, NVDAx, MU, SPCX, SPCXx, TSLAx, BONK, WIF, POPCAT, JitoSOL, mSOL, JupSOL, cbBTC, USDe, EURC, USDY, JLP, INF, ETH, BNB, XAUt0, GLDx, EUROP, Fartcoin, MEW, BOME, hyloSOL, PSOL.

Exact-output buys paying SOL filled for all 15 placed requests: ANSEM, PAID, USDG, PUMP, PYUSD, CASH, CRCLx, SPYx, USDv, SKHY, NVDAx, MU, SPCX, SPCXx, TSLAx. These cases test ordinary public transfers of tokens carrying the listed extensions; confidential transfers, active hooks and paused/frozen states were not exercised.

Expected rejections: rows 146–148 requested 0.005 SOL → SI, ZCAT and ANTHROPIC. Autopilot rejects Token-2022 transfer fees before solver participation; these are not Fractal failures. Each has no order ID because its quote failed before placement. Exact messages and timestamps follow.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 131 / 70 | 09:56:07.797 | Sell 0.01 SOL → [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) | None; fulfilled. [Settlement](https://solscan.io/tx/moa7TLsSsqAxnFUu1sDAWwVgphnDAQ24UPEBEKPWccHoDsbBcKkXDDEHhJBd1ceMvpZxjTTihnj1jT2nC3PSdYi) | [Debug](https://debug.barn.cow.fi/order/0x4b2c795999ad225a6e7ac700e135b0b33cfcd200b94fe1c50f37f2487e30dc77) |
| 137 / 76 | 09:56:08.448 | Sell 0.01 SOL → [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) | None; fulfilled. [Settlement](https://solscan.io/tx/4W3GXD5AQSP1BXM3TbyC8et1yy9zsmc939ebKL5NNpVix7oKWzGZCgrAT1JSPjpL5Ye6FF8eZETfZxWGiWQgPx2S) | [Debug](https://debug.barn.cow.fi/order/0xf489243f5fd9e1027e6be7f58a2230bc07450e2d9baab58cad7c78b045b58c3d) |
| 163 / 102 | 09:56:15.617 | Sell 0.005 SOL → [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P) | None; fulfilled. [Settlement](https://solscan.io/tx/4asktNsbpp3dKt8DTjwASsTB3SdnCPF2WUP26KkP1Lxt5y6T9WUwb4SzFwcDVNBJsw7UUNNHGg9v2H1ePtN7PmUD) | [Debug](https://debug.barn.cow.fi/order/0xc9245695cd194e607cccde11c3ea3c74a180a1576489619775f74ecd71f72712) |
| 173 / 72 | 09:56:21.627 | Buy SOL → exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) | None; fulfilled. [Settlement](https://solscan.io/tx/mQiMSY9kxDRtAUi8wTPGs8vRCcfWLtkrQ4wAeohus8gxtNaEuEErcGatDivrqMqgouKn4sxtvwKAPgLNFX8PyGV) | [Debug](https://debug.barn.cow.fi/order/0xd306002251feaec6595ca0def15fa6c2820763f7ad928dd3cdf2cde718a293a4) |
| 175 / 74 | 09:56:22.900 | Buy SOL → exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) | None; fulfilled. [Settlement](https://solscan.io/tx/4QfgnSn6o7iE8qsDSqXSUWPREUPWY2yZLoVx93PKrLBGrJ8KA5xYQHYR1wg9jK917BDbwCb7vQhWuAsCvk3UUhzT) | [Debug](https://debug.barn.cow.fi/order/0x5b129dd002699d511fc7731d359dc85fc566e5f4f13c75bb22016615f1cef349) |
| 185 / 84 | 09:56:25.665 | Buy SOL → exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) | None; fulfilled. [Settlement](https://solscan.io/tx/4YRo1ZVSW8utdkJLgifzWhv7mWj1c42UCm5vy2wj7mi2Ft8e6Wd72Jbd9MkJA2SHcVQQX2QVU86SE33utqybZifA) | [Debug](https://debug.barn.cow.fi/order/0x761bcc8c201d96dfcaff2856209c8149963fca6a56cad5f065889f7f93645f03) |

Cleanup: 37/37 token-sale orders filled for 40 traders; no failed cleanup events or leftover tokens were recorded. The final sweep checked these traders again; repeated cleanup records are not extra orders.

</details>

## 6. Fresh accounts

**The fresh-wallet order flows were achieved; solver-paid account opening remains inconclusive.** All 8 cases filled, but the saved evidence does not identify who opened the receiving accounts.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 4. Filled / placed orders: 8/8. Completed flows / planned rows: 8/8. Median / longest fill: 19.110 / 22.562 seconds.

Setup: 8 separate wallets; 4 self-paid and 4 sponsored cases; sells of 0.1 SOL → USDC/USDT and exact buys of 10 USDC/USDT with SOL. All filled in 4 two-order settlements. At 09:59:59.801 UTC the journal recorded the fresh-account check for all 8 receiving addresses; none appears in the upfront token-account creation events. The scenario used 0.15 SOL funding per wallet and 500 bps (5%) slippage. Full creation and settlement instructions are absent, so account freshness at settlement and solver-paid opening rent remain unverified; a successful fill alone cannot establish either.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 186 / 110 | 10:00:07.155 | Sell 0.1 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/44kethU4dLfyTi4YJ8htQgUTK76bpmpX7MP75VNzTF5P2pCsWz8A8k9UQx3He8vJ553XVKTUnPTd3r4Zj61aB95c) | [Debug](https://debug.barn.cow.fi/order/0xc3d6f3d78ce3ff6bd36443e1e00835727efe8d7633266922504bfdf5246e0d1a) |
| 187 / 111 | 10:00:05.802 | Sell 0.1 SOL → USDC | None; fulfilled. [Settlement](https://solscan.io/tx/44kethU4dLfyTi4YJ8htQgUTK76bpmpX7MP75VNzTF5P2pCsWz8A8k9UQx3He8vJ553XVKTUnPTd3r4Zj61aB95c) | [Debug](https://debug.barn.cow.fi/order/0xd49392cc77266e8d8224827ae84c2d1eeacc194a7a385f94aaf37177f7029b29) |
| 188 / 112 | 10:00:09.986 | Buy SOL → exactly 10 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/tL6p85crmMhZ6JKUvPaYtGY7B55r7jykYQ2hY9ve4D9zB7pEonyTvqkD5YyjxKZKFmjZUH6KgyT5wLRgizXBUsU) | [Debug](https://debug.barn.cow.fi/order/0x0026bb3fdc3dafd9f2e26fa17295775589c83f68aa3b2107740cb3cb1702d86f) |
| 189 / 113 | 10:00:06.753 | Buy SOL → exactly 10 USDC | None; fulfilled. [Settlement](https://solscan.io/tx/tL6p85crmMhZ6JKUvPaYtGY7B55r7jykYQ2hY9ve4D9zB7pEonyTvqkD5YyjxKZKFmjZUH6KgyT5wLRgizXBUsU) | [Debug](https://debug.barn.cow.fi/order/0x49212de09f64ef5876b846e7d01a4f2b76c98e3a71c6e23a29bebd1c1845652a) |
| 190 / 114 | 10:00:07.400 | Sell 0.1 SOL → USDT | None; fulfilled. [Settlement](https://solscan.io/tx/3ux9ZZyM5jXSWedx6o1FoSeCr9cFY7BvJQnfJTb2xDspuxxLy31eGfo6e49MMGzGV1PsxM6KX1MtrW7NCqY2yVZm) | [Debug](https://debug.barn.cow.fi/order/0x7f301f90f60da4689247850ba3da5bbc909d23c5fff81d70cc3f6a5dc09ed4e6) |
| 191 / 115 | 10:00:06.143 | Sell 0.1 SOL → USDT | None; fulfilled. [Settlement](https://solscan.io/tx/3ux9ZZyM5jXSWedx6o1FoSeCr9cFY7BvJQnfJTb2xDspuxxLy31eGfo6e49MMGzGV1PsxM6KX1MtrW7NCqY2yVZm) | [Debug](https://debug.barn.cow.fi/order/0x1b27aa40402d090840254c770ac00497d2e3c3ef203a10e1e1042389408c7144) |
| 192 / 116 | 10:00:08.302 | Buy SOL → exactly 10 USDT | None; fulfilled. [Settlement](https://solscan.io/tx/ykjA7eHhY5Ktj5gG5gqFvcBVSMJXRELn4tYmRqEBeXFVwzU2JPnuyZntaN1GjsaUb9ve2j1pjkA9SCxLCH5GEVC) | [Debug](https://debug.barn.cow.fi/order/0xa0bf635da3433a5f4cc26ce34661d464545cb076222eae2896c38c11092f6335) |
| 193 / 117 | 10:00:07.375 | Buy SOL → exactly 10 USDT | None; fulfilled. [Settlement](https://solscan.io/tx/ykjA7eHhY5Ktj5gG5gqFvcBVSMJXRELn4tYmRqEBeXFVwzU2JPnuyZntaN1GjsaUb9ve2j1pjkA9SCxLCH5GEVC) | [Debug](https://debug.barn.cow.fi/order/0x85f0078bcc280ff5d921f1c8c9e4b8ee9f086d2be1711b0082f832b961b82370) |

Cleanup: 8/8 token-sale orders filled for 8 traders; no failed cleanup events or leftover tokens were recorded. The final sweep checked these traders again; repeated cleanup records are not extra orders.

</details>

</details>

## Exclusion audit

Excluded original row IDs: 146, 147, 148. These are unsupported non-zero transfer-fee probes, rejected before solver participation. They are absent from all scored tables and failure totals above. Their raw records remain in the original session files.

## Sources

Local session evidence: `2026-10-17-09-36-composite-fractal-run/sim/run.json`, `sim/journal.jsonl`, saved `meta.json`, and `orders.json` / `txs.json` where present. Prior checked investigation: `20261017_fractal_solver_test_report_for_cow.md`.

This report was recalculated on 20 October 2026. No new trades, cancellations or cleanup transactions were sent to prepare it.
