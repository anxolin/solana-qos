# Jupiter solver test report

Date: 2026-10-13 · Environment: production · Trading: 09:10:25–10:03:43 UTC · Session: `2026-10-13-09-10-composite-jupiter-run`.

**TLDR:** 145/147 placed main orders filled; another 50 scheduled requests failed before placement. Exact-output quotes remain unavailable for all 41 tested xStock buys, and SPYx → e/acc plus PAXG failed to settle. These failures have unknown ownership, and production Jupiter participation could not be confirmed.

Main totals include 9 explicit setup rows. Acquisitions and cleanup are excluded: **145 distinct successful main settlement transactions**, each containing 1 selected main order. Fill timing is placement to observed fulfilled status, including polling delay; overall median 3.79 seconds, longest 46.75 seconds.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Achieved for route execution; 6/6 scheduled, 6/6 placed | Confirm Jupiter participation in production logs. |
| 2. Receiving-account costs | Inconclusive for account-cost pricing; 12/16 scheduled, 12/12 placed | Test team: use fresh wallets and a flow that exposes driver-paid account costs. |
| 3. Native SOL and wSOL payouts | Achieved for payout representation; 12/12 scheduled, 12/12 placed | Confirm which solver executed the verified payouts. |
| 4. Raw amount precision | Achieved for requested raw amounts; 12/12 scheduled, 12/12 placed | Confirm Jupiter participation; retain these amounts for regression checks. |
| 5. Token-2022 pairs | Not achieved for all 5 pairs; 9/10 scheduled, 9/10 placed | Investigate the SPYx → e/acc sponsored order expiry; ownership unknown. |
| 6. Additional asset routes | Not achieved for full asset/order-kind coverage; 39/43 scheduled, 39/40 placed | Investigate PAXG non-settlement and the 3 no-route buys; ownership unknown. |
| 7. xStocks | Not achieved for exact-output coverage; 43/86 scheduled, 43/43 placed | Investigate 41 exact-output no-route buys and transient inbound routes; ownership unknown. |
| 8. Failure isolation | Inconclusive for fault isolation; 12/12 scheduled, 12/12 placed | Test team: introduce a confirmed problematic order and verify a shared auction. |

No earlier Jupiter production report exists in the available report files, so no matching baseline comparison is possible. The earlier production quote preview checked route availability, not settlement performance.

Production log evidence is unavailable: configured container queries and a separate exact-order search returned no records; container discovery showed staging Solana services only. Empty failure/competition files therefore do not establish zero backend failures or Jupiter participation. No confirmed Jupiter defect or accepted solver limitation can be assigned from this run.

## 1. Standard pairs

**Achieved for route execution:** all 6 small SOL/USDC, SOL/USDT and JUP/USDC sell/buy checks filled. Production solver attribution is unavailable.

<details>
<summary>Order evidence and metrics</summary>

Scheduled rows: 6. Placed main orders: 6. Filled: 6. Failed before placement: 0. Unfilled placed orders: 0. Total transactions: 6. Median / longest observed fill: 3.29 / 6.51 seconds.

The 6 rows cover fixed-input sells and exact-output buys, in self-paid and sponsored modes. Two input acquisitions filled and are excluded from main-trade totals.

Timestamps are placement time for successful examples and the first recorded failed attempt/final failure for errors. Trade amounts are exact scenario quantities; xStock quantities are underlying token units. A quote failure has no placed-order ID.

| Scenario row / trader | UTC timestamp | Trade | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-13 09:10:27 | Sell 0.005 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0xc59c3ed31f31ef23b069655de1c2bf5befaae159bb06ddae9a708ccc55fdb7a1); [settlement](https://solscan.io/tx/4NZ9bxA54VxMTKa6MBHJcpL1bTPi6dKhKcDo6ZoydM9gzRu5LxPGVXdMJoDkPXscvcjbhG6567jxPd7k5Ao4wCX9) |
| 2 / 2 | 2026-10-13 09:10:57 | Sell 0.005 SOL → USDT | fulfilled; self | [order](https://debug.cow.fi/order/0xb742d1149ae907f8c7d36f08354907e246001746a102bc58ecb929c7d281b66d); [settlement](https://solscan.io/tx/5TyxRzopFuQDM7D5Z6e3aCbFjepsxQoQoEqa5Sp6W2yBW1JkwDFm6o1vXuReLsNiFWBNJv3a9yXRZbAvraAc94Hm) |
| 5 / 2 | 2026-10-13 09:12:26 | Buy SOL → exactly 0.25 USDT | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xfee2c2bccefc1202a081ff05e2eb03d1d4301f198f5990db0f40fca80cdc2fda); [settlement](https://solscan.io/tx/4nvrpKaGdDYzA9261vRpPVhY7syXt5WrfNbJe4PQPa1keF3SDQUgXEbH72GyiAtDTuUZbmpNCvWozxR4LxtL8XiS) |
| 6 / 3 | 2026-10-13 09:13:09 | Buy JUP → exactly 0.25 USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xf8d6f0defd923c7a411a820e3bc72a409b81a61f0e3f4c9a1f86172b68c8b1af); [settlement](https://solscan.io/tx/4TLpq9htXsgarvr7o2MDra2DHcirvcenQqmAb69hnccWaYsbqQuSmUBqPyR2rb786wPu9XBGfgmVdnfEW9JrPXvn) |

</details>

## 2. Receiving-account costs

**Inconclusive for account-cost pricing:** 12/16 rows filled; all 4 USDG exact-output buys failed at quoting. One intended cold account was already warm, and the client creates receiving accounts during placement.

<details>
<summary>Order evidence and metrics</summary>

Scheduled rows: 16. Placed main orders: 12. Filled: 12. Failed before placement: 4. Unfilled placed orders: 0. Total transactions: 12. Median / longest observed fill: 6.29 / 9.60 seconds.

At 09:00 UTC, the test team found 7/8 intended first receiving accounts absent. Trader 7 already held 0.391632 USDC, so its self-paid exact-output comparison was warm/warm; combined with the 2 quote-blocked USDG buy comparisons, only 5/8 comparisons had an absent starting account and a working path. This suite does not measure driver-only account creation or driver-funded pricing.

Timestamps are placement time for successful examples and the first recorded failed attempt/final failure for errors. Trade amounts are exact scenario quantities; xStock quantities are underlying token units. A quote failure has no placed-order ID.

| Scenario row / trader | UTC timestamp | Trade | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-13 09:14:37 | Sell 0.0025 SOL → USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x021bcde77fe5e7121e20fc43038bd77982e681b0671c117f01859698a623fa84); [settlement](https://solscan.io/tx/3cjxGGtxGmru7ncjrrXgdzvn1oEqAZAMUuUmYNv9HZDJ5nbDCvzVW2t6u8YKU7hrNo7sHMNwNa5Aaw8Xy7Vt82CW) |
| 8 / 5 | 2026-10-13 09:15:08 | Sell 0.0025 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x96942334cd19db163f37637224493bc14f22640726b71d0b237377cf1959c944); [settlement](https://solscan.io/tx/MQ48BUxvQkKaFNmzy3boXTKRwLFiZzSYyHW6VUZXL2dH6xjEGuJRCyeLWxhsUAEN6gKVh1PEQaS6ocTJ8goaafc) |
| 9 / 6 | 2026-10-13 09:15:38 | Buy SOL → exactly 0.25 USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x92689bab2aa35256c70d2bd9e1852a8c974b33b4ee600ea3242e2bdf10f48c28); [settlement](https://solscan.io/tx/5s8nSkFZ635RzMuoqWg2qZUAhux2rePxpjsRBiSE3NgAWAZ1U7epBi3WjPWTgQtTDGWWqeca2zDCQqnxV8s9tdsk) |
| 10 / 7 | 2026-10-13 09:16:09 | Buy SOL → exactly 0.25 USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x70bb96661961a55bbfbbf931345a276958dcd96d806251d9e725e601dbabf0f1); [settlement](https://solscan.io/tx/47Bo71XXUkFM2kURLFJ1yRQhPq3KaBhnBFc6eg9Lfbr5pTdETkemJSKSgmiPuti61MMCGzYYTxoSMEKe4HfvNJfw) |
| 11 / 8 | 2026-10-13 09:16:37 | Sell 0.0025 SOL → USDG | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xc025b7de5db8dacba12150e081e580dafc45ec36739700907b2fb18337850402); [settlement](https://solscan.io/tx/Pw7fye7haRwhL6Qeqo8khXL7AUgRKj7uHZgEBFGCgmtDNf1ebXYcB3r7SgeutFNFGJH6LAwPZhginDVxxNghBaQ) |
| 12 / 9 | 2026-10-13 09:17:09 | Sell 0.0025 SOL → USDG | fulfilled; self | [order](https://debug.cow.fi/order/0x822460346af334a04dad3a7ba7c8d3dcffed8f442f0ced7cdc6651711f3fd720); [settlement](https://solscan.io/tx/4ySiJwnvms6WsYMM2S4jvpiUj1s6B2gefbmMrNQmSiCNeZNv4NKyrrgHMaYhqPanupivLdSTwCau6VwbfTBB3n9w) |
| 13 / 10 | 2026-10-13 09:17:37 | Buy SOL → exactly 0.25 USDG | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 14 / 11 | 2026-10-13 09:18:07 | Buy SOL → exactly 0.25 USDG | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 15 / 4 | 2026-10-13 09:20:08 | Sell 0.0025 SOL → USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xe5d94430175413c7e86f471178b4f4c3313dc15e2add4fdc34ff2edc8907eb19); [settlement](https://solscan.io/tx/5e6ixFyrf8Fk7qVYmhDXYz9dSFD4gGzm8Pp116EbcxmbaMt38s7EhBTwk66nMEuFJD6YCENfdJDkDUQ23VMcAPJ6) |
| 16 / 5 | 2026-10-13 09:20:39 | Sell 0.0025 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x730df9fca40cf61ae810e8f79d983686f29bdbdbef724cc3c44783ad2dc44eed); [settlement](https://solscan.io/tx/4mkH1YAgFBTiDPpzwwwk2emoFFAUHJ3N1uUEYrszjfbwYE4vNyMkREnH2AiPnZL7WL6BxBk1NC5S4G7HdjmrhwAU) |
| 17 / 6 | 2026-10-13 09:21:08 | Buy SOL → exactly 0.25 USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x68ee2e5962bc362e89a4014ff53ee6f11879cde7b95593b62096ca249b650438); [settlement](https://solscan.io/tx/3hrbpGxLCjY3f8g7dXoP8CEH2U11eCYNdM759qD62xQCsStfb5CBPhuz6R9zzRAS9e2AfsjD3kmK9BE6kiA47sBu) |
| 18 / 7 | 2026-10-13 09:21:39 | Buy SOL → exactly 0.25 USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x4c66f4da9e0fd33ee6313849784714895030d780da75ee9ca20a2f7989f357bd); [settlement](https://solscan.io/tx/5MZhdNSN1t9iMvFwFBtfXAnY4kkNZs2cPqUTd2GyMEevWUq3tP5LYXrLtD6BpMtPg4UKnM7NqsuENtuii7dCnzbR) |
| 19 / 8 | 2026-10-13 09:22:07 | Sell 0.0025 SOL → USDG | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x4d2d2be25370143bc1876b8283624f6850d217d8278ab7f15952d8bfdc830a41); [settlement](https://solscan.io/tx/2c9AvADpEK8t6ERJ5ZmMVjWC6syPy3djZa3BKmSfEiwGqMf39634JFrAHCWB1B4JmnaVnTFs4299b9hmqTWWey9T) |
| 20 / 9 | 2026-10-13 09:22:38 | Sell 0.0025 SOL → USDG | fulfilled; self | [order](https://debug.cow.fi/order/0x6812b9995c27bd23ac30ab062d063d2952fbbaa28043a0c69ded58c46a5f6888); [settlement](https://solscan.io/tx/vXKk411oaa1LPCvuAzXaojDjhRa28SHkvKr4EnPyiBnK3XBBWGaUHxqCi8dCuAmkcyz1K11cG3yADLa6pmZZSHY) |
| 21 / 10 | 2026-10-13 09:23:07 | Buy SOL → exactly 0.25 USDG | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 22 / 11 | 2026-10-13 09:23:37 | Buy SOL → exactly 0.25 USDG | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |

</details>

## 3. Native SOL and wSOL payouts

**Achieved for payout representation:** all 12 rows filled, including 4 setup rows. The 8 payout settlements confirm native lamport versus wSOL token receipts, with no sponsored-to-self fallback.

<details>
<summary>Order evidence and metrics</summary>

Scheduled rows: 12. Placed main orders: 12. Filled: 12. Failed before placement: 0. Unfilled placed orders: 0. Total transactions: 12. Median / longest observed fill: 6.25 / 9.40 seconds.

Four explicit SOL → USDC preparation rows are included in the 12 scheduled rows. Rows 27/29 increased native wallet balances by exactly 1865277/1865055 lamports; rows 31/33 increased them by exactly 2000000 lamports. Rows 28/30 increased wSOL token balances by exactly 1865248/1864441 raw units; rows 32/34 increased them by exactly 2000000 raw units. All 8 transactions succeeded, and the native cases had zero wSOL increase.

Timestamps are placement time for successful examples and the first recorded failed attempt/final failure for errors. Trade amounts are exact scenario quantities; xStock quantities are underlying token units. A quote failure has no placed-order ID.

| Scenario row / trader | UTC timestamp | Trade | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 23 / 12 | 2026-10-13 09:25:15 | Sell 0.005 SOL → USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xee593b8a813cd5bc1c4061cb96799aeab22e359d313ca5a330da1b17998625ac); [settlement](https://solscan.io/tx/54epfmXKbQzWzDXrRApbGv8Kp4qFooBHPveghLsYbWeTkbazdeMo14z4NQVeRk4mDtXWgj5GbjrkFe4SsuFtb1fe) |
| 24 / 13 | 2026-10-13 09:25:44 | Sell 0.005 SOL → USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x483a37fe6db350e093ee01011c8e12e0df72be70d55cecfe78429da4b0f6de13); [settlement](https://solscan.io/tx/29UkiZ9mHL3XrmtXEGPersCgV44htjtaP71TGj35pctCoKDiotyzsMPBkQndooNEaK4P69Es2g6SziQfP2mJ5Wa7) |
| 25 / 14 | 2026-10-13 09:26:15 | Sell 0.005 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x69e222b695be7bb411f17f439c60f727bda9102ae0ef09ac1ba67ba9e36d931f); [settlement](https://solscan.io/tx/4Ug5rFboPPTi14oMq3yZabXmJ33kvT1UrGTkTPmU8E6CNKJG5KHEYvKkeBMUc3RTEBW9FxEXPzVKDcM9rUQuEFd2) |
| 26 / 15 | 2026-10-13 09:26:46 | Sell 0.005 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x1e4909d75798048e17ff6cd958f9c9aab1416470fdf17195a1f0d051621eca98); [settlement](https://solscan.io/tx/3cGNRa1mVWp5URZWCEEZcpW4ip2Zqun7xqjBQuzSopxrpamU5QoYmc9stjzvW3jjRKfu4Fnn7TauJn8iCHet62wK) |
| 27 / 12 | 2026-10-13 09:27:34 | Sell 0.2 USDC → SOL | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x2111984b9c7e44dccc3b436a16499d336c78339e7abc076f8c6e62b7d1bf4010); [settlement](https://solscan.io/tx/SM1NLmQ8iJEwne3k5GAfpWYUBbHMj3eXHHaiCgcg4Fmha3E1LzDZorUXePUy8bdcoi7EptwaQdnotGWJWUdwudz) |
| 28 / 13 | 2026-10-13 09:28:05 | Sell 0.2 USDC → wSOL | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x70e2202fd2feca70c85611d1cb29f8de6704a2412dbc3025b58b48b408ecb398); [settlement](https://solscan.io/tx/2cbujmUqutAHPUcjHeuhBeb3RtvDo4PpfX8p9hbnpEwZxRyhSkrKJtKqv3JkSt4RqSijjadYZZ8ntzZ2SAtrq5QN) |
| 29 / 14 | 2026-10-13 09:28:36 | Sell 0.2 USDC → SOL | fulfilled; self | [order](https://debug.cow.fi/order/0x160f791dfafbc2dc6468dd2792657fd49f046318f0e10945e2243809aabb4eca); [settlement](https://solscan.io/tx/55pfJBbuffAaiKH5fEwmJFbZRXmmuHjRZ19Nw2VRMd25AsLP442NtwjMufCa895heWQHY6BdmFfK3n2PFtqJxg1f) |
| 30 / 15 | 2026-10-13 09:29:06 | Sell 0.2 USDC → wSOL | fulfilled; self | [order](https://debug.cow.fi/order/0xca8dd3dc565892e58770cc4eff1e03ae07590ca8731bcc092571f696e5e35972); [settlement](https://solscan.io/tx/397Q5XqNzP4Ao36tpKxShc4BtSt4rWyWnKQx3t6y4REjuimNLs66ZGCkM27mk5YFF66jtwfw4sHBwrNchkLQkW1h) |
| 31 / 12 | 2026-10-13 09:29:55 | Buy USDC → exactly 0.002 SOL | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x180a1afcdb9b25cff32dcc78edd55a836a2e94cab8bdc3b3eba904c5fadb877a); [settlement](https://solscan.io/tx/4tL6BmUkcaq42xg3wpwUTwDy8tyE3Cm5hWeVg2AUSTd3rfo5o3SC88S9cN4uEWYW7WrD5KdsbFZ2yMCmiH4xFpBh) |
| 32 / 13 | 2026-10-13 09:30:25 | Buy USDC → exactly 0.002 wSOL | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xd2b6a9338e18c626715782e9c49466c952a90513f0ca7a195cc9beac77d6d89f); [settlement](https://solscan.io/tx/Epg8df5ZJ7vbQRDJ9N49DJyoDT3G8PB1quBCz1h9SNz9yH9N1ZfYiBCq1jerwkSrDJSBHbRSAQQxa2ctQTMWqP2) |
| 33 / 14 | 2026-10-13 09:30:56 | Buy USDC → exactly 0.002 SOL | fulfilled; self | [order](https://debug.cow.fi/order/0x7edac45517bbd6b6062a77dad20353927a30dcda0eb48c1f40e3e88442d78a1b); [settlement](https://solscan.io/tx/5cExpndHZR61JvzdUCWecZCChPost7PeSCfERS6dpVQpm5kokKYKXhw6a9cK1Rn9FeSexiqVMbLqNnAB8Fv38VyP) |
| 34 / 15 | 2026-10-13 09:31:26 | Buy USDC → exactly 0.002 wSOL | fulfilled; self | [order](https://debug.cow.fi/order/0x8aa4af13bcc4a751c62b27c8be63700a5c5affd6d9929eee4900fe231b46436e); [settlement](https://solscan.io/tx/5vhS7ECtCNHA5veeYh3nGogJJ3iXqXkHPFmdJSzMJSTWP5H9FBx3p4gXeTbentNhHo2END4VM8cKo14ovE78hnoL) |

</details>

## 4. Raw amount precision

**Achieved for requested raw amounts:** all 12 trades filled without amount capping. Every executed fixed input or exact output preserved the requested integer, including the one-unit differences.

<details>
<summary>Order evidence and metrics</summary>

Scheduled rows: 12. Placed main orders: 12. Filled: 12. Failed before placement: 0. Unfilled placed orders: 0. Total transactions: 12. Median / longest observed fill: 4.76 / 46.75 seconds.

Fixed-input sells executed exactly the signed input; exact-output buys received exactly the signed output. The other side of the trade can change with price and fees and is not required to differ by one unit.

| Row | Kind | Requested raw amount | Executed raw amount |
| --- | --- | --- | --- |
| 35 | sell SOL | 2500001 | 2500001 |
| 36 | buy SOL | 2500001 | 2500001 |
| 37 | sell USDC | 250001 | 250001 |
| 38 | buy USDC | 250001 | 250001 |
| 39 | sell BONK | 10000000001 | 10000000001 |
| 40 | buy BONK | 10000000001 | 10000000001 |
| 41 | sell SOL | 2500002 | 2500002 |
| 42 | buy SOL | 2500002 | 2500002 |
| 43 | sell USDC | 250002 | 250002 |
| 44 | buy USDC | 250002 | 250002 |
| 45 | sell BONK | 10000000002 | 10000000002 |
| 46 | buy BONK | 10000000002 | 10000000002 |

Timestamps are placement time for successful examples and the first recorded failed attempt/final failure for errors. Trade amounts are exact scenario quantities; xStock quantities are underlying token units. A quote failure has no placed-order ID.

| Scenario row / trader | UTC timestamp | Trade | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 35 / 16 | 2026-10-13 09:32:49 | Sell 0.002500001 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x7d616f00fd480faf2228c6401cdbc58f2f00cd37ebfbe314966990b34470ad65); [settlement](https://solscan.io/tx/2JrC1Tt8h4MmZ6MCi4G4Rphx8Y7AeT1AEy4g35A3fEayYoqY8sKq486b4HDogHX6YwdsPEiY6yARbXKigjVdGkDe) |
| 36 / 17 | 2026-10-13 09:33:30 | Buy USDC → exactly 0.002500001 SOL | fulfilled; self | [order](https://debug.cow.fi/order/0xaff42369d1dae6d8d9a766df49159950bee69610e90fea85b7eb7a4281cda51a); [settlement](https://solscan.io/tx/3uegGck9o473zBbccWHp1cSQCWz8kSQVSoxAeKtCDD888hTJAQTEUeVPkkzqge4sdWVYZ5jUwERSEJDoabqg6F4g) |
| 37 / 18 | 2026-10-13 09:34:04 | Sell 0.250001 USDC → USDT | fulfilled; self | [order](https://debug.cow.fi/order/0xde261ed62ec6e1b10ea51fbc739c60ad427c54636b433ee09dba7c530d1bf26a); [settlement](https://solscan.io/tx/4vW9WMB3qPDGazL1h3FacEZrVbuKRQ1hYzCFVpKoD2gzafXFCzYqkxfNja12HsUdawvu2m9kxu37kn41QG4MfBL4) |
| 38 / 19 | 2026-10-13 09:34:19 | Buy SOL → exactly 0.250001 USDC | fulfilled; self | [order](https://debug.cow.fi/order/0xf0a269ed21c73f9ab14cee5ebcce361b0e706ba82047c1617e6b0b675fffe603); [settlement](https://solscan.io/tx/4Q2sAsbivc1iRKNeYYcLFAi5ijLYbMkqJkmsuYYQBifS69D2bA6RwkGFrGgHXm5WnNcWFp7rWFgFVEFkqadDesfT) |
| 39 / 20 | 2026-10-13 09:35:03 | Sell 100000.00001 BONK → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x7cb16bc394428ed4182e330aaad3bbd9be59c664dab5c8d0133942c3cd0d58b2); [settlement](https://solscan.io/tx/q5bmCkmm4xVhyuq6Ho4oLwJVTmeZNdYoWxyvzBnigGnQemycFqwvX8mf9H8sbRA1aZm9eoEyynFh7oaPhY6W8So) |
| 40 / 21 | 2026-10-13 09:35:19 | Buy SOL → exactly 100000.00001 BONK | fulfilled; self | [order](https://debug.cow.fi/order/0x0c6b1d2d6bbaa30f2abe4e22b26833ead985ba0de2a5c8e9785d6f5495c057de); [settlement](https://solscan.io/tx/36GifpuzZaDnRrC3sCcz5GDpwD6NvCZyw9RXNZSDKi17GHeRDoqmNik3fJaJ1nuvKq2gNUS9n86wYhwJfzAKLyUN) |
| 41 / 16 | 2026-10-13 09:35:49 | Sell 0.002500002 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0xae78850a4c89cff4af1ec94aacbe7daf931a1742efee24e1d2f0a4d8963790d9); [settlement](https://solscan.io/tx/5QcvtRbUvDDbuXqrJRSQoboRYKsWasa9rZMLezkTWc4eRhUf8KJm3z9iZyH67Wx5eHQMAuXAE9tSxicVemGzTX6k) |
| 42 / 17 | 2026-10-13 09:36:31 | Buy USDC → exactly 0.002500002 SOL | fulfilled; self | [order](https://debug.cow.fi/order/0xb7eaf81a87b271a6c7c007faae3a5ca43c9718ff3d60125c72b79d7b8571c864); [settlement](https://solscan.io/tx/3RAo7KU21LqexRsUNmrA4dhuRjEPDs93UvApWkrjXC2aPgokoBciBURLq6u9TdfjXqQzh3hLoPT9dVCwyZs5XNq9) |
| 43 / 18 | 2026-10-13 09:37:03 | Sell 0.250002 USDC → USDT | fulfilled; self | [order](https://debug.cow.fi/order/0xdb01a7ac58f80055dcf76674325658e3a66d5afb754cfae101806f87d32cf7a0); [settlement](https://solscan.io/tx/2xuVmUNDkZ2q5K9v1nQvWEqmRVhaVEATRyBgAACpLFZ5e9YYKvcroJBcgga6YkktbMo1PS5FzC9j89VkjwU6NwR6) |
| 44 / 19 | 2026-10-13 09:37:19 | Buy SOL → exactly 0.250002 USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x105f1ea8500d62920811f1e1a1ac265b3d71918d169e1dfdce575bfc6c637f4d); [settlement](https://solscan.io/tx/4Q8quYDs2KnLRvne3R9w8DQMCp31qr68g7e7fWk3pmEssNyjqBtNwUcMr28mQSPQRD4R2VBBFq523G87D4T6VK4f) |
| 45 / 20 | 2026-10-13 09:38:04 | Sell 100000.00002 BONK → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x0dcfdea946e45c376a125aac17a05a840626de87f933b33c418ed5c343b3b458); [settlement](https://solscan.io/tx/4t5pXUdq4Lp615psUp51xAr7T14eNSdtj6SB1EkpmmhB7tju88rPJWrdUzMqBpUoqqzKiPrTx9zTW3cRstVhECD1) |
| 46 / 21 | 2026-10-13 09:38:19 | Buy SOL → exactly 100000.00002 BONK | fulfilled; self | [order](https://debug.cow.fi/order/0x5dbc8ec3e41bdd9cd7ea888db41b6c9f4402a8d9a44ab7f0178a68b1beec3e0c); [settlement](https://solscan.io/tx/5HTwFxKgxYAedtEsmQo8VEWCj5PbsBxxQCUpVMj48Lr27BpSArKKpQmnykgJw7PRc1JpPmncWpHLZA6skKNV3ARc) |

</details>

## 5. Token-2022 pairs

**Not achieved for all 5 pairs:** 5 setup rows and 4 Token-2022-to-Token-2022 trades filled; SPYx → e/acc expired without execution. Ordinary swaps on these mints do not establish every Token-2022 extension behavior.

<details>
<summary>Order evidence and metrics</summary>

Scheduled rows: 10. Placed main orders: 10. Filled: 9. Failed before placement: 0. Unfilled placed orders: 1. Total transactions: 9. Median / longest observed fill: 6.40 / 9.55 seconds.

Actual pair fills: USDG → PUMP, PYUSD → PAID, CASH → CATE and ANSEM → CRCLx. The 5 SOL-input rows are setup, not pair checks. The sponsored SPYx → e/acc order was marked expired after 35.261 seconds, before its signed validity end of 09:45:37 UTC; executed amounts remained zero. Its order account was absent at the final chain check, and no creation transaction was recorded in the journal. Missing production records prevent establishing why it expired or assigning repair ownership.

Successful fixed-input SOL → token outputs: ANSEM, CASH, PYUSD, SPYx, USDG.

Successful fixed-input token inputs: ANSEM, CASH, PYUSD, USDG.

Successful exact-output token buys: none.

These successful mints span the intended non-transfer-fee extension-bearing tokens, but enabled extension presence is not a test of every extension feature, authority setting, pause/freeze condition or issuer action.

Timestamps are placement time for successful examples and the first recorded failed attempt/final failure for errors. Trade amounts are exact scenario quantities; xStock quantities are underlying token units. A quote failure has no placed-order ID.

| Scenario row / trader | UTC timestamp | Trade | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 47 / 22 | 2026-10-13 09:39:59 | Sell 0.0025 SOL → USDG | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xa02d28d6690f800e3d2eecc328bba48b7ea8883ade8cef9fc3ef7c444f99d1e2); [settlement](https://solscan.io/tx/3Gq6KUB2ze7JxUUDERffL8zQi7YeDw1eLGUq56ZrKMta2tEc1HrDkTaBqc46AL4BxCuX5WagfumLLNXPK8Q5PvDF) |
| 48 / 23 | 2026-10-13 09:39:59 | Sell 0.0025 SOL → PYUSD | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x21cdaf60918597a726226773665e82001dddd4332bacac25fccbced6773e01e3); [settlement](https://solscan.io/tx/tFZLrcAwwGaym1LkUdrUStpfuuEQpP7Eo52DQ11thfJv9hMADQSFeT9aFq2zF1oonLsH8tsvjEt7yQ7ev6kVFYM) |
| 49 / 24 | 2026-10-13 09:39:59 | Sell 0.0025 SOL → CASH | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x59cfc465b5c96552a6a28c0f5fcea6592a02c5e7ded425d744ecb381cb9e748a); [settlement](https://solscan.io/tx/4wNvfiaP5f8YBppq4jfmZW6PCNtxXr1tkpjTfMzH6yxZkFhKD7WJmfnXrAs9KxTiQy7CfEwaLd8kBbPpwYATdtKe) |
| 50 / 25 | 2026-10-13 09:40:00 | Sell 0.0025 SOL → SPYx | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xf33154852eaca3762c5a4dc3308a1a0617c008ee1d53a3c8b351d63e621437cb); [settlement](https://solscan.io/tx/55e5nqkQASx9puXy3DwvYNnpUwg4FHh3zkvgGcRkJGxdTee9CYdVd6La7t51MbJfcUpyr8Z2xq9iQDEJQ6BgPpeq) |
| 51 / 26 | 2026-10-13 09:40:00 | Sell 0.0025 SOL → ANSEM | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x761a6fbf0fda0b1dce4c0e253d7c76164fbd70601aeb450ba6c2754eecf844ce); [settlement](https://solscan.io/tx/4qh7rmEpV5k6hNhryinqD4iuWUewqHt5aAnhFwRxZRQcc1jcpXF7Mh3561T3aYacJiUvgEBpkf2zEmFnZa3cwVz8) |
| 52 / 22 | 2026-10-13 09:40:06 | Sell 0.162516 USDG → PUMP | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x1a742002ec5aa4cd8a5bfea881e18568c58eeed6ec5a4aecccbe73a9ec98e4fe); [settlement](https://solscan.io/tx/3UnECofwYwwNSE1hs3Fz77MoQs4X4tVvDmBAbgK98zEqKpycrQUvuBHFmFdK35Xmgs7ZVt2ZTgvjxsGWtJLPefDu) |
| 53 / 23 | 2026-10-13 09:40:07 | Sell 0.162498 PYUSD → PAID | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x6839a026508f992f3d1476af7f9495f0870ad2bd53ced6dfc59aea6f3f5233f7); [settlement](https://solscan.io/tx/5uzNj4w3PFB9PxTdod6hUPzWTdaPnNLh5mgWvjAfkKBbA5PoCBuzKoiwU3RpBPqeauqiiWWYQWdvtBBxtrLUsMPM) |
| 54 / 24 | 2026-10-13 09:40:07 | Sell 0.162569 CASH → CATE | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xe3e8b1a7fae305d95e85826802232e42be91f96b12f92b23d652d46c58cb30e7); [settlement](https://solscan.io/tx/AZGgZbUemsF4syZo8FcVRdU2METk9gueKEJKCfDrCtYyLxi5vegAuxKT8Z5D8P1nev6a6r657ewLdQKG6L1amvJ) |
| 55 / 25 | 2026-10-13 09:40:43 | Sell 0.00020765 SPYx → e/acc | main expired; final expired; **Ownership unknown** | [order](https://debug.cow.fi/order/0xc6f82275f5cf373b483a467718f1842f37286da57f1bfadd611073cd7ed6e619) |
| 56 / 26 | 2026-10-13 09:40:11 | Sell 1.201385 ANSEM → CRCLx | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x42b8799b2693a968e04e153b76c5fb1f27eebeb28262451e3208e80e545761fd); [settlement](https://solscan.io/tx/5Fjt97b6gjma4gEgkys5v9SvJjmp3JGXNpDUWJUVjuHq2XHNkxfwMznQWQGbyMuNu98THbgi9bfe75NrfsiAUEi3) |

The original SPYx expiry cause is unavailable. [SPYx → e/acc order](https://debug.cow.fi/order/0xc6f82275f5cf373b483a467718f1842f37286da57f1bfadd611073cd7ed6e619) is expired with zero execution; the other 4 pair orders succeeded.

Cleanup can burn quoted dust instead of settling a reverse swap. Only explicit filled return orders establish that direction here.

</details>

## 6. Additional asset routes

**Not achieved for full asset/order-kind coverage:** 39/43 rows filled, with 3 exact-output quote failures and a PAXG timeout. These are separate from the already-covered Token-2022 pair and xStock checks.

<details>
<summary>Order evidence and metrics</summary>

Scheduled rows: 43. Placed main orders: 40. Filled: 39. Failed before placement: 3. Unfilled placed orders: 1. Total transactions: 39. Median / longest observed fill: 3.21 / 22.01 seconds.

CATE, EUROP and PAXG exact-output buys returned `404 Not Found: NoLiquidity: no route found`. PAXG fixed-input row 85 was placed, timed out after 219.862 seconds including cancellation, and is finally cancelled with zero execution. Quote-stage failure is confirmed; whether it came from Jupiter or another quote provider is unconfirmed. Five meme-token pairs add mint breadth but weak new behavior beyond the classic-token controls; keep them lower priority when trimming. This is asset/route coverage, not proof of all extension configurations.

Successful fixed-input SOL → token outputs: $WIF, BNB, BOME, ETH, EURC, EUROP, Fartcoin, INF, JLP, JitoSOL, JupSOL, MEW, POPCAT, PSOL, USDY, USDe, XAUt0, cbBTC, hyloSOL, mSOL.

Successful exact-output token buys: $WIF, BNB, BOME, ETH, EURC, Fartcoin, INF, JLP, JitoSOL, JupSOL, MEW, POPCAT, PSOL, USDY, USDe, XAUt0, cbBTC, hyloSOL, mSOL.

Timestamps are placement time for successful examples and the first recorded failed attempt/final failure for errors. Trade amounts are exact scenario quantities; xStock quantities are underlying token units. A quote failure has no placed-order ID.

| Scenario row / trader | UTC timestamp | Trade | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 57 / 27 | 2026-10-13 09:42:18 | Sell 0.0025 SOL → $WIF | fulfilled; self | [order](https://debug.cow.fi/order/0xb9ed6b0d56ab2839ad6f1a917293c6acaec1a9dd15bd389eb9f03ea92b7ee7ae); [settlement](https://solscan.io/tx/3h4RRSGXNqzfB4KW2yTeQaJsK4wQR5iMREcH1t323mMgUPtreCWsgzbht6pBhmZdoCzZqsyEg46gLQfBi6aruomG) |
| 58 / 28 | 2026-10-13 09:42:28 | Sell 0.0025 SOL → POPCAT | fulfilled; self | [order](https://debug.cow.fi/order/0xef18dc945bba2d87da6b3d18fda93276be2fc425ebf54769dd5925742ab64894); [settlement](https://solscan.io/tx/4cZgGqrELeiq9agmmGZRRvNPUBdF2tcu8WD6nPsuWDwLqWgXUuZPstMJ6qjSLoQ514U5aNF7AGpe1uhQv8Ndxo71) |
| 83 / 47 | 2026-10-13 09:45:36 | Buy SOL → exactly 4.915718 CATE | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 85 / 48 | 2026-10-13 09:49:28 | Sell 0.0025 SOL → PAXG | main timeout; final cancelled; **Ownership unknown** | [order](https://debug.cow.fi/order/0x4d6049c8f8d9bc5fab1d3e8dae675d41e59915f028a0532dad48c1708b6f4498); [cancellation transaction](https://solscan.io/tx/FsML5GsgyR4Z7NMY33Yuiws3CkGcaHLab9Yd2GoHTkxnSPqS69tCBF62hbkvpgewDKMGDHZcDNk3gjjtPS5xgPK) |
| 93 / 41 | 2026-10-13 09:47:06 | Buy SOL → exactly 0.242317 EUROP | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 97 / 45 | 2026-10-13 09:47:48 | Buy SOL → exactly 0.002315729 hyloSOL | fulfilled; self | [order](https://debug.cow.fi/order/0x76cd401af9c778526837c409a0fde45d5dd0a5c8eaa8c28c04d485d02e845005); [settlement](https://solscan.io/tx/2dg8yyaDP64wy3AmnM7U5Y2DPTLFLEvEftB2nobFS1wcgXPGaup3p2Q6NjsAVWEQfsxpPFKus3nvYreA1wmuDQWM) |
| 98 / 46 | 2026-10-13 09:47:58 | Buy SOL → exactly 0.002271161 PSOL | fulfilled; self | [order](https://debug.cow.fi/order/0x9b9324a572ce96941958cb3d1c6c516f2ce82e1f08b65c773acc52c7549785d5); [settlement](https://solscan.io/tx/2sQiciiuBkBwV59xBLhyusBKDZVPdoB1Hse6eKF7J4rWVSTrxTsBR42ehGhJds3MnCtScBvjfYbZhjRyHxhi4fDr) |
| 99 / 48 | 2026-10-13 09:49:28 | Buy SOL → exactly 0.000064 PAXG | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |

</details>

## 7. xStocks

**Not achieved for exact-output coverage:** 40/42 inbound fixed-input trades and all 3 sponsored returns filled; all 41 exact-output buys failed at quoting. Route availability changed during the run, so a no-route response does not establish a permanent token restriction.

<details>
<summary>Order evidence and metrics</summary>

Scheduled rows: 86. Placed main orders: 43. Filled: 43. Failed before placement: 43. Unfilled placed orders: 0. Total transactions: 43. Median / longest observed fill: 6.44 / 25.43 seconds.

Failed inbound requests were PLTRx (row 106) and TCENTx (row 141, scenario label). PLTRx then acquired successfully for row 114 and its sponsored return filled, so the return used a new acquisition rather than the failed inbound trade. HOODx inbound filled in this run. SPYx, NFLXx and PLTRx sponsored returns filled; the stock amounts already account for active scaled display multipliers, which must not be applied again. All 41 no-route buys remain in the evidence table.

Successful fixed-input SOL → token outputs: AAPLx, AMDx, AMZNx, AVGOx, BMNRx, BRK.Bx, COINx, CRCLx, DFDVx, GLDx, GMEx, GOOGLx, HOODx, INTCx, KOx, LLYx, MCDx, METAx, MRVLx, MSFTx, MSTRx, MUx, NFLXx, NVDAx, NVOx, ORCLx, QQQx, SKHYx, SNDKx, SPCXx, SPYx, STRCx, TQQQx, TSLAx, TSMx, UBERx, UNHx, VIDAx, WMTx, XOMx.

Successful fixed-input token inputs: NFLXx, PLTRx, SPYx.

Successful exact-output token buys: none.

Timestamps are placement time for successful examples and the first recorded failed attempt/final failure for errors. Trade amounts are exact scenario quantities; xStock quantities are underlying token units. A quote failure has no placed-order ID.

| Scenario row / trader | UTC timestamp | Trade | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 100 / 49 | 2026-10-13 09:52:16 | Sell 0.0025 SOL → CRCLx | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x5e5abb2461459e07cb5a3b0ce990dcf7bd86ba91901c8772ef4f8ece9bb75d46); [settlement](https://solscan.io/tx/3MkayWCbbVUB59VZGNjCm5gRstvkS6zsPcuiVbRZBGgpbFRiohjBY9hCs2VPeApZtUruBRL7v8Re2DV17foYnigt) |
| 106 / 55 | 2026-10-13 09:52:18 | Sell 0.0025 SOL → PLTRx | 404 Not Found: NoLiquidity: no route found; main error: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 114 / 55 | 2026-10-13 09:52:41 | Sell 0.00078292 PLTRx → SOL | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x96f1a459fa7bd1b5e7587d74c0a39902364146c7c3a52d2a1faa734518b95b08); [settlement](https://solscan.io/tx/5AXmq9xWotic29QdUY6tAvp11tFF6V2sgrqeR4G6Cz2D48EiYdiHuqptZsY42CgBL17es5TArvUnTth8Cu13qBiv) |
| 115 / 49 | 2026-10-13 09:52:21 | Buy SOL → exactly 0.00321248 CRCLx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 116 / 50 | 2026-10-13 09:52:22 | Buy SOL → exactly 0.00165941 SPCXx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 117 / 51 | 2026-10-13 09:52:22 | Buy SOL → exactly 0.0003632 QQQx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 118 / 52 | 2026-10-13 09:52:24 | Buy SOL → exactly 0.0004981 MSFTx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 119 / 53 | 2026-10-13 09:52:23 | Buy SOL → exactly 0.00995113 GMEx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 120 / 54 | 2026-10-13 09:52:23 | Buy SOL → exactly 0.00112024 MCDx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 121 / 55 | 2026-10-13 09:53:07 | Buy SOL → exactly 0.00130486 PLTRx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 122 / 56 | 2026-10-13 09:52:25 | Buy SOL → exactly 0.00270181 INTCx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 123 / 57 | 2026-10-13 09:52:31 | Buy SOL → exactly 0.00191264 ORCLx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 124 / 58 | 2026-10-13 09:52:32 | Buy SOL → exactly 0.00076666 AVGOx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 125 / 59 | 2026-10-13 09:52:29 | Buy SOL → exactly 0.00156561 XOMx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 126 / 60 | 2026-10-13 09:52:29 | Buy SOL → exactly 0.00068993 UNHx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 127 / 61 | 2026-10-13 09:52:30 | Buy SOL → exactly 0.00702429 NVOx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 128 / 62 | 2026-10-13 09:52:30 | Buy SOL → exactly 0.00379726 UBERx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 133 / 53 | 2026-10-13 09:52:26 | Sell 0.0025 SOL → HOODx | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x57499d6de7052672a242b31cbb2ba2ba1290099c6a198261380020d291c7a767); [settlement](https://solscan.io/tx/5kKJkgMtV9rbUwRWc6KZtArDBTqcu2rci95QEiUpRE9HJHNM7LPqibmEJ9TNXxzyPV2RJVy4aeKubcnuALbpoL4A) |
| 141 / 61 | 2026-10-13 09:52:34 | Sell 0.0025 SOL → TCENTx | 404 Not Found: NoLiquidity: no route found; main error: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 144 / 49 | 2026-10-13 09:52:45 | Buy SOL → exactly 0.00034609 SPYx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 145 / 50 | 2026-10-13 09:52:36 | Buy SOL → exactly 0.00072217 TSLAx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 146 / 51 | 2026-10-13 09:52:38 | Buy SOL → exactly 0.00036664 METAx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 147 / 52 | 2026-10-13 09:52:37 | Buy SOL → exactly 0.00076634 GOOGLx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 148 / 53 | 2026-10-13 09:52:33 | Buy SOL → exactly 0.00247816 HOODx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 149 / 54 | 2026-10-13 09:52:34 | Buy SOL → exactly 0.00104887 AMZNx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 150 / 55 | 2026-10-13 09:53:14 | Buy SOL → exactly 0.20269702 VIDAx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 151 / 56 | 2026-10-13 09:52:40 | Buy SOL → exactly 0.00293543 KOx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 152 / 57 | 2026-10-13 09:52:46 | Buy SOL → exactly 0.00028462 MUx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 153 / 58 | 2026-10-13 09:52:43 | Buy SOL → exactly 0.00236142 WMTx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 154 / 59 | 2026-10-13 09:52:40 | Buy SOL → exactly 0.00047014 AMDx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 155 / 60 | 2026-10-13 09:52:44 | Buy SOL → exactly 0.00060557 TSMx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 156 / 62 | 2026-10-13 09:52:45 | Buy SOL → exactly 0.00023241 LLYx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 167 / 59 | 2026-10-13 09:52:43 | Sell 0.0025 SOL → MRVLx | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x5fbcd2f988396046ddd93a9b320cb2370b9babec859760e98e3998a97b9cdab8); [settlement](https://solscan.io/tx/2WLRbEanNNvG9oN7R83bG6Xo4QXepwScRke2JJghBJWLYwgMnZ18wSqDNvJgof6B5oJQ1w9PJbbwMKxnfGMJPCMr) |
| 171 / 58 | 2026-10-13 09:52:51 | Sell 0.00022735 NFLXx → SOL | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x3c7becc214a600736b256c15ca1ac4d1eec0a53da03cc878bae4043824b53f6e); [settlement](https://solscan.io/tx/2YsUUja5MZgCduKMU9BXLeBrrrsuLYj6cYGtWNbQES3LDVxdmeHdcnmoMxkYDvxnB2tk6YUBYQCCkEoWrFjVt1PQ) |
| 172 / 49 | 2026-10-13 09:52:53 | Buy SOL → exactly 0.00120141 NVDAx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 173 / 50 | 2026-10-13 09:52:52 | Buy SOL → exactly 0.00174356 MSTRx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 174 / 51 | 2026-10-13 09:52:50 | Buy SOL → exactly 0.00070541 GLDx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 175 / 52 | 2026-10-13 09:52:49 | Buy SOL → exactly 0.00148708 COINx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 176 / 53 | 2026-10-13 09:52:53 | Buy SOL → exactly 0.00078968 AAPLx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 177 / 54 | 2026-10-13 09:52:50 | Buy SOL → exactly 0.00248053 STRCx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 178 / 55 | 2026-10-13 09:53:21 | Buy SOL → exactly 0.06056963 DFDVx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 179 / 56 | 2026-10-13 09:52:55 | Buy SOL → exactly 0.00052262 BRK.Bx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 180 / 57 | 2026-10-13 09:52:56 | Buy SOL → exactly 0.00172031 TQQQx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 181 / 58 | 2026-10-13 09:53:08 | Buy SOL → exactly 0.00037893 NFLXx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 182 / 59 | 2026-10-13 09:52:51 | Buy SOL → exactly 0.00106586 MRVLx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 183 / 60 | 2026-10-13 09:52:54 | Buy SOL → exactly 0.00018281 SNDKx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 184 / 61 | 2026-10-13 09:52:54 | Buy SOL → exactly 0.00170138 SKHYx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |
| 185 / 62 | 2026-10-13 09:52:52 | Buy SOL → exactly 0.01072636 BMNRx | quote failed: 404 Not Found: NoLiquidity: no route found; final not placed; **Ownership unknown** | No order ID: quote failed before placement |

PLTRx input acquisition filled at 09:52:37 UTC: [acquisition order](https://debug.cow.fi/order/0xb8943687a8b3ece9bca009ddea356251f64609a8d932738be7fb34f3a102db14). This acquisition is excluded from main totals.

Cleanup can burn quoted dust instead of settling a reverse swap. Only explicit filled return orders establish that direction here.

</details>

## 8. Failure isolation

**Inconclusive for fault isolation:** all 12 rows filled, including XMR, LIKE and surrounding controls. The probes did not reproduce a fault, so healthy fills cannot prove that a faulty order would leave its auction unaffected.

<details>
<summary>Order evidence and metrics</summary>

Scheduled rows: 12. Placed main orders: 12. Filled: 12. Failed before placement: 0. Unfilled placed orders: 0. Total transactions: 12. Median / longest observed fill: 7.81 / 18.84 seconds.

XMR and LIKE were historical missing-price candidates, not a confirmed current blocker. A future isolation claim needs a confirmed troublesome order accepted into the same auction as controls; this run does not provide that evidence.

Successful fixed-input SOL → token outputs: LIKE, USDC, XMR.

Successful exact-output token buys: USDC.

Timestamps are placement time for successful examples and the first recorded failed attempt/final failure for errors. Trade amounts are exact scenario quantities; xStock quantities are underlying token units. A quote failure has no placed-order ID.

| Scenario row / trader | UTC timestamp | Trade | Error(s) / final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 186 / 63 | 2026-10-13 09:55:46 | Sell 0.0025 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0xe4e024915d0eb7ba3decbd1f2195f76c8418ff28c4ab7f819ee4e2caf279555a); [settlement](https://solscan.io/tx/3tSr2LzW5HEGXu6ho8FtZSGiiNU8oAgvXjufcUBPaJtNDe3pNYx7fe9BthXm5kJkDEhzFK8Gm5ZX43Ko74x9U5aX) |
| 187 / 64 | 2026-10-13 09:55:45 | Buy SOL → exactly 0.25 USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x3913db61c1a81316ab33784679cad7eb29381ce8bbea5eaac1c7f844c2d7d0a2); [settlement](https://solscan.io/tx/PTBcnGrJrw8dNC3ebV3FNZ3zEKqQqQVQJW2aKFBwP2WNmxSmPHuBB29xbibwFJLr8ssszfqEvRL3uFRatTU8ahH) |
| 188 / 69 | 2026-10-13 09:57:16 | Sell 0.0025 SOL → XMR | fulfilled; self | [order](https://debug.cow.fi/order/0xee7b3b48c1f9cb39e19770b771180d0b6b1ed9ee27f1eddaff56825f45c16c36); [settlement](https://solscan.io/tx/3YvASTrEP6UP9mit8dndw9cp2hSExFqUfHrWz6z89L5q2p6ZoutSUMzgA2XYyj9EPYkW7fbsX3FWQUzzVHb532qn) |
| 189 / 70 | 2026-10-13 09:57:17 | Sell 0.0025 SOL → LIKE | fulfilled; self | [order](https://debug.cow.fi/order/0xa3e44fd7630ac04dcc7acd1ea1ae000716df3aa6dfc774e25adf11d34cb469de); [settlement](https://solscan.io/tx/4ka2nU9BfTksLmmJmhSYNxLL9iWA9NjgKnGvxxieHmEAXMCcE1jZgofwLsANVgKt8p1VGgqd5GqXiB5H45NtcrNZ) |
| 190 / 65 | 2026-10-13 09:57:16 | Sell 0.0025 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0xdb82d6ddde6961bcd8474f3f9d7ea8b3fad354ddf258162d73bbc6ac57db1a30); [settlement](https://solscan.io/tx/3JrcNGi8khqR4MuMG5EkxYJftR5WtGikvoFC6jDBXd2fF8pLVsXEzksaeyiDjpGTrx6D6RKMCkLsHvT6SH4AqXh) |
| 191 / 66 | 2026-10-13 09:57:16 | Buy SOL → exactly 0.25 USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x7ea92113af643f76d43b22921bc7020afda1318e39ae9bf9a28daead7c656fbf); [settlement](https://solscan.io/tx/5wopqUMP55RZ8vNyticUBse4UV8LbuGZ5uB1EDfcneNFSE6Y5LUibwLcDCsBwKpJqFFpXZX6KKLZywWbEtpu3H84) |
| 192 / 67 | 2026-10-13 09:57:30 | Sell 0.0025 SOL → USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x2bcd781cba89c019155f8bcd815dadf68b7a5abf75be32093d4c6721c96be258); [settlement](https://solscan.io/tx/5fj8QdFV5zyfE7eUPNq4eVLpoztraDHzUdAvKMSNFYrdeqmrkZkd62EjFbmpAAxxWrawxpqQrNyYeLQbjue7PfSU) |
| 193 / 68 | 2026-10-13 09:57:32 | Buy SOL → exactly 0.25 USDC | fulfilled; self | [order](https://debug.cow.fi/order/0xfc7cffeeb75a12b016c40f06285e1e581ecc99979fc56fbaa614e7be40e909e6); [settlement](https://solscan.io/tx/3uKEukAdVw1kvkeQM694eBJ9CiARyPVzp2QYMGVfrBPhX6jJAwgkPmuco9oqhpVA13PBZ1rRSUgZWUujK1t8WtzY) |
| 194 / 63 | 2026-10-13 10:02:47 | Sell 0.0025 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x8a258a525236ca54a618da11616186a32d81aba0f98471c9299db9f8d6d7da92); [settlement](https://solscan.io/tx/64zpGvJ3pLnpA6Fo5o6s8kvCY8qY1iRo2ohc8Xo1U6GYtEn9fQNeRe9KckhqQPLCd9dd9ZTLKjmFUzVmwQKrxk2Z) |
| 195 / 64 | 2026-10-13 10:02:46 | Buy SOL → exactly 0.25 USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0xce4fa3740c5c64ebe69a4594656257570622ece9297151a0013a63732302e16e); [settlement](https://solscan.io/tx/4U5M7bnEntjeH1sd8F2pcmiNUmf7PnCfXG9E21V7W5ZyEC59dbfDfZhZ8MxDorDw4EANMNAMk6NvNcnYPQG6GhtK) |
| 196 / 65 | 2026-10-13 10:02:46 | Sell 0.0025 SOL → USDC | fulfilled; self | [order](https://debug.cow.fi/order/0x9e212b15ca1a0750aea6e72b9d3eb277ae80d6ccb8602a853b9df636dddf7321); [settlement](https://solscan.io/tx/3zoTCCpkNKVPdyqesJ2mBJFKY3tMp13fwVFbh35DuDK1kuxdRaULP1pc4DD6MftKDmJ8DnLV37C4R34Kn4k1UoQA) |
| 197 / 66 | 2026-10-13 10:02:47 | Buy SOL → exactly 0.25 USDC | fulfilled; sponsored | [order](https://debug.cow.fi/order/0x2e6346e2b75e30596e6d3376b088593d4fedd385fd4d60e4321acc2fd6bd83dc); [settlement](https://solscan.io/tx/2AMutQ6P8z8xCfYbggMsGnRPT7tFnMsMtbcGyEMnsdmGZ5RjjeEujxfpXugeysNToAjeBaFQ3rCztqkNoATh5kwc) |

</details>
