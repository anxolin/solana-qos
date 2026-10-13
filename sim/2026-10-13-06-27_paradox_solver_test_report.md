# Paradox solver test report

13 October 2026 · Staging on Solana mainnet · 06:28–07:35 UTC

**TLDR:** Basic swaps passed, and 33 of 36 placed main orders filled; most planned load and token trades failed quoting before placement. No token-coverage exact buy got a quote, and the saved evidence doesn’t establish who caused the quote failures or 3 sponsored expiries. Next, check those cases with Paradox and CoW, then have the test team rerun the incomplete scenarios.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Goal achieved; 6/6 filled | Paradox + CoW: recover failed submission details. |
| 2. 25 same direction sells | Load goal inconclusive; 4/25 filled | Test team: fix quoting and rerun all 25. |
| 3. Sell bursts | Throughput inconclusive; 20/84 filled | Test team: fix quoting and rerun the 5 waves. |
| 4. Token coverage | Coverage not achieved; 3/6 placed main orders filled | Paradox + CoW: check exact buys and sponsored expiry. |

## Changes since 12 October 2026

Main fills: 33 → 33; placed main orders: 33 → 36; unfilled main orders: 0 → 3.

<details>
<summary>Comparison with the previous run</summary>

Baseline: 12 October staging report; same solver and planned trades. Acquisitions and cleanup are excluded from main totals.

| Result | 12 October | 13 October |
| --- | --- | --- |
| Standard pairs filled / planned | 5/6 | 6/6 |
| Burst sells filled / planned | 18/84 | 20/84 |
| Token coverage filled / planned | 6/52 | 3/52 |
| Quote failures before placement | 134 | 131 |
| Cleanup orders filled / placed | 0/9 | 0/12 |

Unchanged: same direction fills 4/25; token-coverage exact buys 0/15.

**Newly affected orders:** 3 sponsored main orders expired (0 → 3): [ANSEM](https://debug.barn.cow.fi/order/0xe5fbe1c12d1eb964a4ad3ca5760b717b9145a270497f2dc2490b08eb4cdc4648), [PAID](https://debug.barn.cow.fi/order/0x283d4e11110b5062c848f3b75e15908059d48c554e46128450542510b782b5e7), [USDG](https://debug.barn.cow.fi/order/0x437738536726048343610e36d1d1c04a198fc9e2757d5abab941c0346321c0a0). All stayed unfilled; **Ownership unknown**, original creation errors unavailable.

**Existing error, new order:** row 3 recorded `other`, then filled. `FailedToSubmit` was recorded in both runs (1 → 1); its link to row 3 is unverified. No new settlement error type is confirmed.

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
| — / 1 | 2026-10-13 06:34:46.298 UTC | Sell 1.598254 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x33c658a7f5340c55d4cce3f6eec16aa9502e791ea1f1de3a08ecd750445b6fbc) |
| — / 1 | 2026-10-13 06:41:31.749 UTC | Sell 1.598254 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x55c741c9ca2cb7002d30b67a018a3c2b077a56b739f635d0d0440048e3eb2c51) |
| — / 2 | 2026-10-13 06:41:35.209 UTC | Sell 0.792783 USDT → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0xe6aefa3f4102ea6a1bc4ce9e9e67a3c0ed509493adf9e357d3b2871b81090c16) |
| — / 1 | 2026-10-13 06:57:43.209 UTC | Sell 1.598254 USDC → native SOL | **Ownership unknown:** `expired` without execution; final status `expired`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x74f10795fdfd03f2b9a469f58bedf70598f539bed09f988334cb4702aef2c097) |
| — / 2 | 2026-10-13 06:57:46.584 UTC | Sell 0.792783 USDT → native SOL | **Ownership unknown:** `expired` without execution; final status `expired`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x8960a9ec8f57164c7284eb272f4781ba9ea27cf2e07339f50d605a113aa4762a) |
| — / 2 | 2026-10-13 06:31:12.556 UTC | Sell 0.792783 USDT → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 3 | 2026-10-13 06:31:17.081 UTC | Sell 0.419236 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 3 | 2026-10-13 06:38:00.016 UTC | Sell 0.419236 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 3 | 2026-10-13 06:52:19.667 UTC | Sell 0.419236 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |

No cleanup order filled. Leftover balances are recorded snapshots, not a fresh wallet check; some wallets held tokens before these scenario rows. Quote failures and unfilled cleanup orders remain **Ownership unknown**.

</details>

## 2. 25 same direction sells

**The full load test is inconclusive:** 21 trades failed quoting and only 4 reached placement. Each filled separately; batching remains a known and accepted Paradox limitation.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 4. **Median / longest fill:** 20.3 / 28.7 seconds. **Placed main orders filled:** 4/4. Each successful main order settled separately (batch size 1).

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
| — / 4 | 2026-10-13 07:02:37.168 UTC | Sell 3.16352 JUP → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0xd0e6523dc293599c4492f6a7aff4c604f99b82736e84f62e1b0b54b0ff698208) |
| — / 7 | 2026-10-13 07:02:49.793 UTC | Sell 0.391632 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0xd4614599ec026b53f81ff3d3127390510afa25f2de5a63dbbf084a51e004db68) |
| — / 5 | 2026-10-13 06:59:02.865 UTC | Sell 3.164641 JUP → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 6 | 2026-10-13 06:59:09.862 UTC | Sell 3.16428 JUP → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 12 | 2026-10-13 06:59:12.745 UTC | Sell 1.563667 JUP → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 19 | 2026-10-13 06:59:23.100 UTC | Sell 0.391162 USDC → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 22 | 2026-10-13 06:59:26.881 UTC | Sell 0.334926 USDC → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 7 | 2026-10-13 07:03:04.381 UTC | Sell 1.599658 JUP → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |

No cleanup order filled. Leftover balances are recorded snapshots, not a fresh wallet check; some wallets held tokens before these scenario rows. Quote failures and unfilled cleanup orders remain **Ownership unknown**.

</details>

## 3. Sell bursts

**Throughput is inconclusive:** each wave placed and filled only 4 orders, despite planned wave sizes of 4, 8, 16, 24 and 32. The 150-second pauses mean this doesn’t establish a sustained rate limit.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 20. **Median / longest fill:** 25.2 / 34.0 seconds. **Placed main orders filled:** 20/20. Each successful main order settled separately (batch size 1).

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
| — / 29 | 2026-10-13 07:25:09.687 UTC | Sell 0.548666 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x8fe6f3671d61cb27c696706655aa83aa12ed61d1a5e365dbdf1b9cbc049e6dc0) |
| — / 36 | 2026-10-13 07:25:21.913 UTC | Sell 0.432226 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0xc0f859b4689430e71f08c2751bbe188afe57463de3bcd6338967c87a223e23bd) |
| — / 41 | 2026-10-13 07:25:30.036 UTC | Sell 0.27923 USDC → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x51f023f65cadc500be44132469607aa963bb8191d650dfe71598768653263b94) |
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

</details>

## 4. Token coverage

**Broad token coverage was not achieved:** fixed input sells reached PUMP, XAUt0 and GLDx, but none of the 15 exact output buys reached placement. Quote failures and 3 expired sponsored orders left most token types untested.

<details>
<summary>Order evidence and metrics</summary>

**Total transactions:** 3. **Median / longest fill:** 44.0 / 50.0 seconds. **Placed main orders filled:** 3/6. Each successful main order settled separately (batch size 1).

**Ownership unknown:** quotes returned `404 Not Found: NoLiquidity: no route found` before placement. The quote logs contain no provider response records, so neither solver ownership nor a lack of market liquidity is confirmed. Main requests sell native SOL (mint `11111111111111111111111111111111`), while filled orders execute with wSOL; compare native SOL handling, order kind and amount before blaming a token.

Setup: fixed input sells of 0.005–0.01 SOL into 40 token types, plus 15 exact output buys paying SOL. Successful fixed input sells: **SOL → PUMP, XAUt0, GLDx**. Successful exact output buys in this scenario: **none**. Standard-pair exact buys separately succeeded for **USDC and USDT** (USDC paying both SOL and JUP). PUMP and GLDx are Token-2022 controls; XAUt0 is a classic SPL control. Reverse sells and exact buys remain separate checks.

All 15 exact output buys and 31 fixed input sells failed quoting. Liquid staking token coverage was not demonstrated: JitoSOL, mSOL, JupSOL, INF, hyloSOL and PSOL all failed before placement.

**Ownership unknown:** the 3 sponsored sells into ANSEM, PAID and USDG expired without execution. The creation-expiry file lists their UIDs but no error text or transaction signatures. The generated report labels them “Winner too late: creation blockhash expired”, yet competition records show 0 winner skips for that reason. Sponsored creation is the recorded stage; blockhash expiry, late solver response and repair ownership are not independently verified. CoW needs the original creation records before assigning a solver defect.

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
| — / 64 | 2026-10-13 07:32:59.077 UTC | Sell 213.436227 PUMP → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x978d95bd9b34bcc83730e2e6fe1ce5eba7d9ba3cf4fd3ef058f4959db3607677) |
| — / 71 | 2026-10-13 07:33:11.511 UTC | Sell 0.00484461 NVDAx → native SOL | **Ownership unknown:** `timeout` without execution; final status `cancelled`; no later fill. Original settlement/rejection details unavailable. | [Debug](https://debug.barn.cow.fi/order/0x95731a6e2ed072bee371f47b9ff099bf8565eb6e71c1d2712a5b289c839b8bff) |
| — / 62 | 2026-10-13 07:29:16.260 UTC | Sell 210.803664 PAID → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 61 | 2026-10-13 07:29:16.835 UTC | Sell 7.914514 ANSEM → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 63 | 2026-10-13 07:29:19.522 UTC | Sell 1.114216 USDG → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 72 | 2026-10-13 07:29:33.846 UTC | Sell 0.001098 MU → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 94 | 2026-10-13 07:30:06.179 UTC | Sell 0.00140409 GLDx → native SOL | **Ownership unknown:** `404 Not Found: NoLiquidity: no route found`; not placed; balance retained. | No order ID: quote rejected. |
| — / 93 | 2026-10-13 07:30:07.564 UTC | Sell 0.000127 XAUt0 → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |
| — / 98 | 2026-10-13 07:30:09.323 UTC | Sell 590.911382 BOME → native SOL | **Ownership unknown:** `Not Found {"errorType":"NoLiquidity","description":"no route`; exact saved error is truncated. Not placed; balance retained. | No order ID; only cleanup summary saved. |

No cleanup order filled. Leftover balances are recorded snapshots, not a fresh wallet check; some wallets held tokens before these scenario rows. Quote failures and unfilled cleanup orders remain **Ownership unknown**.

</details>
