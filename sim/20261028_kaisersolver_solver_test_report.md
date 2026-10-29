# Kaisersolver solver test report

Date: 28 October 2026. Environment: staging / Barn, Solana mainnet.

**TLDR:** All 109 load test sells filled with batches up to 4, and all 12 native/wrapped trades completed. Of 195 planned trades, 15 never reached placement: 12 exact buys got no usable quote and 3 hit quote or creation checks. Of 180 accepted orders, 178 filled and 2 sponsored USDG orders expired before creation, including this exact buy (https://debug.barn.cow.fi/order/0xf953aadd4459fb97f5dbd2ccf2437a1aed7eaa34c8ed7cce88ebda522bd1e074). Two swaps worked on retry after missing their minimum outputs, including this SPCX sell (https://debug.barn.cow.fi/order/0x67639909a36bfe6e2ebf09f1dc05685483b9eb436d5a3983fac83f750a671738); compare their quotes and 25 bps limits with execution. Separately, 5 original cleanup orders stayed cancelled.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Partial; 4/6 planned completed, 4/4 placed filled | Test team should restore the 2 requests that never reached placement |
| 2. Receiving-account costs | Inconclusive for full cost comparison; 14/16 filled | Compare creation rent and quote deductions separately |
| 3. Native and wrapped payouts | Achieved; 12/12 filled | Keep native wallet and wrapped account controls |
| 4. Same-direction sells | Achieved; 25/25 filled, batches up to 4 | Decode payouts before claiming proportional allocation |
| 5. Sell bursts | Achieved; 84/84 filled | Test team can measure sustained load separately |
| 6. Token coverage | Partial; 39/52 planned completed, 39/39 placed filled | Inspect 2 failed routes; capture missing quote-response joins |

## Changes since 20 October 2026

For the matching 195 planned requests, completed flows changed from 182 to 178; same-direction batches grew from 3 to 4 orders.

<details>
<summary>Comparison with the previous run</summary>

Baseline: `2026-10-20-14-05-composite-kaisersolver-run` and its 20 October staging solver report. Its extra 8 fresh-account requests are excluded; matching counts below were recalculated from raw journals and orders. Both runs used a 60-second fill timeout, 300-second validity and no simulator retries. Account preparation changed from enabled to disabled.

| Matching metric | 20 October | 28 October |
| --- | --- | --- |
| Completed / planned main flows | 182/195 | 178/195 |
| Main filled / placed; settlement transactions | 182/183; 107 | 178/180; 96 |
| Standard; receiving; native/wrapped flows | 6/6; 16/16; 11/12 | 4/6; 14/16; 12/12 |
| Same-direction fills / transactions | 25/9 | 25/7 |
| Burst fills / transactions | 84/30 | 84/24 |
| Token sells; exact buys | 37/37; 3/15 | 36/37; 3/15 |
| Median / longest observed main fill | 11.283 / 60.086s | 11.605 / 57.551s |

Different preparation and filled mixes prevent a controlled speed or reliability claim. Token exact buys stayed 3/15, but successful tokens changed from PUMP/SPYx/NVDAx to ANSEM/PYUSD/USDv. NoLiquidity and Jupiter 6001 already occurred; current decoded routes use 25bps instead of the earlier 8bps examples. Three newly affected winning-attempt UIDs (2 main, 1 cleanup) each had 1 failure and later filled, versus 15 attempts for 14 UIDs in the full prior report; different routes and scope prevent calling that a proven fix. Nexus Custom(52) is newly recorded in the compared evidence, not a proved newly introduced defect. All 5 cancelled cleanup originals remain cancelled; replacements are separate UIDs.

New successful controls that failed previously:

- Source row 31: Buy USDC to exactly 0.002 SOL (sponsored), filled; [Debug](https://debug.barn.cow.fi/order/0x7c900e0c2c10195acaf955937c875650145f4d62a8a863c4dfd33df49b391e35).
- Source row 181: Buy SOL to exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored), filled; [Debug](https://debug.barn.cow.fi/order/0x9575cb120d84a14370c51d03c276827b7a7a4d2ffc8bf6cdf164949da73f1023).
- Source row 185: Buy SOL to exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) (sponsored), filled; [Debug](https://debug.barn.cow.fi/order/0x8fa4970adb5aa68a3e82ea2bcc20df672f382ed963ad0f9e15744af4ab05f164).
- Source row 189: Buy SOL to exactly 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored), filled; [Debug](https://debug.barn.cow.fi/order/0xa2fe280e4d21e129796546a1fff51e7440c45c10561a9a961a1cbc3174ff566e).

</details>

## 1. Standard pairs

The full goal was not achieved, although all 4 placed main orders filled. Two requests stopped before placement, so they do not test solver execution.

<details>
<summary>Order evidence and metrics</summary>

Selected session: `2026-10-28-11-43-composite-kaisersolver-run`. All 6 scenario phases finished; metadata ends at 12:10:57.512 UTC, snapshot 12:18:00 UTC. `finished=false` reflects deferred cleanup. No opposing-order or transaction-size stress scenario was selected.

Main totals include explicit CSV setup trades, but exclude automatic `step=acquire` prerequisites and cleanup: 178/180 main orders filled, 178/195 planned flows, 96 distinct successful main settlement transactions. Four automatic acquisitions filled in 4 additional transactions. There were 15 failures before main placement, 2 expired accepted sponsored orders and no expected rejection rows. Cleanup placed 109 separate orders: 104 fulfilled and 5 were cancelled; these totals do not include the unplaced residual-token quote failures. All timing uses journal placement to observed fulfilled status, including polling; overall median / longest 11.605 / 57.551 seconds. Success timestamps below are placement times; errors use the first failed attempt/response. For cleanup cancellation, the timestamp is the observed timeout event.

Competition records identify only Kaisersolver, with key `883XazUhNq9ZbmkzSqJjh72Azx9ZG9HcfZyF8auG8aGz`. Its 459 proposals, 208 wins, 205 submitted and 205 observed on chain include cleanup and are not main-order counts. Authenticated Grafana `/api/datasources` verified `VictoriaLogs Staging`, UID `vm-auth-staging`. Supplemental reads aliased `_time` and `_msg`, joined auction/solver/solution and completed RPC reads for all 3 failed version-1 transactions. No exports were overwritten and no quotes or transactions were replayed.

**Ownership unknown: one cleanup route failed, then filled.** Auction 404809/4 passed driver simulation at 12:08:57.0678295 UTC and submitted at 12:08:57.081623072. RPC identifies the first failing program as Nexus `AQU1FRd7papthgdrwPTTq5JacJh8YtwEXaBfKU3bTz45`, propagated through `Sett1erwx2eqT5A8uvu8GBxDFT2W5TNnhirL7hLmb8m`. Exact logs say `Exhausted available liquidity in the dex.` and `Nexus error: Insufficient tokens out: 3560480`. This number is the program's reported value, not a measured shortfall. The same UID later sold 0.510573 USDC for 4,961,842 lamports, above signed minimum 4,956,238. Confidence is high in the failure mechanism and medium in changing route feasibility as the explanation; an optimistic quote or route construction is the strongest alternative. Inspect the submitted Nexus route and pool state at simulation/execution slots against its expected output and the successful route. A route that fails against the same state points to construction; a state change points to freshness. Repair ownership is unproved.

Total transactions: 4. Filled / placed main orders: 4/4; completed / planned: 4/6. Median / longest fill: 4.902 / 6.712 seconds. Batch sizes (orders: transactions): 1: 4.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-28T11:46:40.941Z | Sell 0.005 SOL to USDC (self) | Filled; observed 3.136s. | [Debug](https://debug.barn.cow.fi/order/0x4942d555303b806b4f0b45ca7ae35f79b19f5a57a634f26b6bddefad452dfc55); [transaction](https://solscan.io/tx/5U3T7AjXxogsZMrB7tDUBAtkeESX2omFs2rzzv4fCP5nxzx7LVnra8TaGZNFggJmie2mst87hoKWG8KPXbXdm6TL) |
| 5 / 2 | 2026-10-28T11:46:43.864Z | Buy SOL to exactly 0.25 USDT (sponsored) | Filled; observed 6.441s. | [Debug](https://debug.barn.cow.fi/order/0xaf159363f5688594f5faad4a5a3a2287e5313863dab619dbb7e982e6b06bed70); [transaction](https://solscan.io/tx/566nJ6CsKpzjFvEpUkXfLSMFUxzMtdR6MJ4xPKMXLSLLddm5Z8DjjLWicZ7CrwfK5teM2V8x1NgE7nmNGJ8YKTLq) |
| 6 / 3 | 2026-10-28T11:47:04.994Z | Buy JUP to exactly 0.25 USDC (sponsored) | Filled; observed 6.712s. | [Debug](https://debug.barn.cow.fi/order/0x28b400b32ef4418caec5ce585169247446da770a4465c912705acfce54738884); [transaction](https://solscan.io/tx/52dA1ZbtvuuWCFWDXj92tQdJQfYyDtSjYY9Dy3Rm2AVfA5sY51LjzZ3UX1v99UjeSJJgvFe4WWyMPE5uGCx7dQhT) |

Cleanup failures and failed attempts, excluded from main metrics:

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| - / 1 | 2026-10-28T12:08:58.801301801Z | Sell 0.510573 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Ownership unknown: Nexus InstructionError(4, Custom(52)); auction 404809/4; Insufficient tokens out: 3560480; [transaction](https://solscan.io/tx/3Re1bnYGonCFbNSNnr5NyZDLK3ijmcmdMqMQK6XBjPtZf1QBMr43mfN9U6TrsxUTnXanwr7MaTyW9LAHHsyZsBnW). Later filled; observed 12.842s. | [Debug](https://debug.barn.cow.fi/order/0xe6ed1fec70a8b8a15a46f815e3756a0f543b14ddb1a7c9e7dff0a0ff8ec1e742); [transaction](https://solscan.io/tx/6NPhEyunA2tBBYZGtKGSrH5o3MLgnCdixi9kmmyi3pkQ7Bf5gYqVFy7VwGBQ2nq9gGCaAGmSKF6sezNggRdrAon) |

Raw evidence: selected session `sim/journal.jsonl`, keyed by the source row, trader and UID above; `orders.json` for final status and `logs/settle_failures.txt` for failed attempts. External links identify the exact orders and transactions.

</details>

## 2. Receiving-account costs

The full cost comparison is inconclusive; 14/16 trades filled. Checked receiving accounts were created before settlement, so this does not demonstrate solver-funded receiving rent.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 12. Filled / placed main orders: 14/16; completed / planned: 14/16. Median / longest fill: 11.142 / 28.315 seconds. Batch sizes (orders: transactions): 1: 10, 2: 2.

**Actual account behavior.** The first sponsored USDC sell's receiving account had 0 lamports before creation and 1,488,440 after [creation](https://solscan.io/tx/P1HjD6Hh739kVzsVv9qY6698EEQk9JYYWPXDBU1NvcT6uDMbC4JzuSXTKaSxLYCXbNBZpmgGwVaitpyB2AXwXMT). Its ATA instruction names sponsor `By48hFyxZztVDux2RvC33jvXghdP7t1up18WbjLqmM73` as source. The first self-paid USDC/USDG receiving token accounts were absent before their creation transactions and present at zero afterwards; users paid creation, shown by the [USDC creation](https://solscan.io/tx/tbi14C2QA1TgFNbHZkDKQj1G9kuAtS2CSUXqtrFZkjGSFEe3SHyonQZxo42SzMMBw1gE61JjoymgZSRyENCqXAs) and [USDG creation](https://solscan.io/tx/21odLCWf6uRtUURJNTJTW3TnrxnzuZSoJouGKVeX1hXJe8P4Yq1G7kw9M245YhfbcNwmWyEga5QLyaQkVGQzARoV). The later sponsored USDG sell's account was created with 1,600,200 lamports by the same sponsor in [creation](https://solscan.io/tx/5vUii529t4XrDSey7vkotwGbwJVZCdEK1MsCf2tf4XxczqqjEhmu7YeUnUQoCbqMinREv97gp3Su5nRksiSTuWnU). These accounts already exist at settlement. Disabled preparation therefore exposed missing accounts, but creation funded their rent before the solver's settlement. Paired full quote fees and total costs were not saved; the test team should compare creation rent plus fee/output deductions for matched first/repeat requests.

**Ownership unknown: 2 sponsored USDG creations expired.** The first 0.0025 SOL sell and exact 0.25 USDG buy were accepted by the API but never created on chain. Autopilot logs `sponsored creation expired, dropping the order` at 11:48:16.402336441/11:48:16.402354141 UTC for the exact UIDs below. The journal observed expiry after 31.543/34.581 seconds, before signed order validity; this is creation expiry, not the 300-second order deadline. Later same-direction/amount requests and self-paid controls succeeded, weakening blanket USDG incompatibility. Confidence is high in stage, low in underlying cause and owner. Blockhash lifetime, selection and creation timing remain alternatives; no failed creation signature was recovered. CoW should join creation submission and last-valid height with the selected candidate before assigning repair ownership. The later USDG requests are not warm-after-fill controls because their first requests expired.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-28T11:47:42.903Z | Sell 0.0025 SOL to USDC (sponsored) | Filled; observed 6.558s. | [Debug](https://debug.barn.cow.fi/order/0x7c696b3011800510666acba4808bb5ac2daf1741760ffa6b8b3016a2ab0f4e91); [transaction](https://solscan.io/tx/32N4iUHRtrxTeRVrNiM9NxtgDaZUYBLcvdauh2jzxdJipDFBYhYPsHdbL6mqJjMCRJL186rksgvBicaKQAiZfne2) |
| 8 / 5 | 2026-10-28T11:47:44.325Z | Sell 0.0025 SOL to USDC (self) | Filled; observed 6.454s. | [Debug](https://debug.barn.cow.fi/order/0xe7882e55283d5a0b3ab74d22a37e48951db4a16d2fe4651bf4ecb8e736a36d93); [transaction](https://solscan.io/tx/32N4iUHRtrxTeRVrNiM9NxtgDaZUYBLcvdauh2jzxdJipDFBYhYPsHdbL6mqJjMCRJL186rksgvBicaKQAiZfne2) |
| 11 / 8 | 2026-10-28T11:48:14.753Z | Sell 0.0025 SOL to [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | Ownership unknown: journal expired, final API expired; zero execution; observed 31.543s. | [Debug](https://debug.barn.cow.fi/order/0x018f969a98b92dfa294e9b6a1267f43638f03ac7eff6822747626dfab69abbea) |
| 13 / 10 | 2026-10-28T11:48:18.713Z | Buy SOL to exactly 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | Ownership unknown: journal expired, final API expired; zero execution; observed 34.581s. | [Debug](https://debug.barn.cow.fi/order/0xf953aadd4459fb97f5dbd2ccf2437a1aed7eaa34c8ed7cce88ebda522bd1e074) |
| 19 / 8 | 2026-10-28T11:48:15.272Z | Sell 0.0025 SOL to [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | Filled; observed 19.408s. | [Debug](https://debug.barn.cow.fi/order/0x1e67c25573925fcf9ebdd8dff17eb9f151e648d40fd618aec4fc8cb0a9eb0a0c); [transaction](https://solscan.io/tx/5ZiWVwFEX1VFhVj2cWpd1fVi3oSGvmxLcDjBDnpTTP8YnVuAvSAtTCCzcpHk4vJQwkCVngVjBodEYHgntXam9XAn) |
| 22 / 11 | 2026-10-28T11:47:57.317Z | Buy SOL to exactly 0.25 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (self) | Filled; observed 21.922s. | [Debug](https://debug.barn.cow.fi/order/0xe08cd1ece135559c47e49b7eb4ad152b2db088520ee10e96fbc835fcca2d0f3a); [transaction](https://solscan.io/tx/4J2pPzXUuzZabhWbPXGwoMDNNA3hry7cprSsPXfkwDUKtabkxXULha4258QuXgnXXc1saFbNMHCGMHHpnkAcAzRY) |

Raw evidence: selected session `sim/journal.jsonl`, keyed by the source row, trader and UID above; `orders.json` for final status and `logs/settle_failures.txt` for failed attempts. External links identify the exact orders and transactions.

</details>

## 3. Native and wrapped payouts

The goal was achieved for all 8 receipt requests and 4 setup sells. Native wallet credits and wrapped token-account credits were verified separately.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 10. Filled / placed main orders: 12/12; completed / planned: 12/12. Median / longest fill: 8.091 / 57.551 seconds. Batch sizes (orders: transactions): 1: 9, 3: 1.

Sponsored and self-paid 0.2 USDC sells to native SOL/wSOL and exact buys of 0.002 native SOL/wSOL all filled. Two automatic USDC acquisitions also filled and are excluded from main metrics. No failed winning attempt was joined to this scenario.

Native sponsored sell [settlement](https://solscan.io/tx/5AAvn5zN7VnhmbH9xv4xZcuFfW8uacp9ivsEGCWvCaG5BtdyVGoE7vJ5vsQSR7hSS6E9z7TtDQHYy7TYXXAsMdjQ) increased the owner wallet by exactly 1,936,826 lamports. Native self-paid exact-buy [settlement](https://solscan.io/tx/5K3Gb2LjKZ7bANkKCM2i5qthxoiAFAEKc9CraCx1Kq8bnnvYNsGknKVsPUg7rhfKaahe35boGNhNc1NawnfoXQ22) increased the owner wallet by exactly 2,000,000 lamports. The sponsored wrapped sell credited its wSOL account from 0 to 1,936,786; the self-paid wrapped exact buy added 2,000,000 to an existing 1,936,897 token balance. These prove distinct receipt assets, not every possible route or rent mode.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 27 / 12 | 2026-10-28T11:50:11.639Z | Sell 0.2 USDC to SOL (sponsored) | Filled; observed 9.497s. | [Debug](https://debug.barn.cow.fi/order/0x9c510e7896047dd5a308ce17ff325585222fe69a257b97683b4d4b6c23236f6a); [transaction](https://solscan.io/tx/5AAvn5zN7VnhmbH9xv4xZcuFfW8uacp9ivsEGCWvCaG5BtdyVGoE7vJ5vsQSR7hSS6E9z7TtDQHYy7TYXXAsMdjQ) |
| 28 / 13 | 2026-10-28T11:50:17.819Z | Sell 0.2 USDC to wSOL (sponsored) | Filled; observed 57.551s. | [Debug](https://debug.barn.cow.fi/order/0xa015b890f5259327bedfbdce9bac321abdace3b87e419cd49467c12bb8926968); [transaction](https://solscan.io/tx/HDkPZ3YMwdU2sxxENtu18qsbDrefmaGJ4r6GFLM4uqnEuf9aBmsRxmdT3ChK5UmtYiGcFdDM1nCqY6fZrvTuBC3) |
| 33 / 14 | 2026-10-28T11:51:13.998Z | Buy USDC to exactly 0.002 SOL (self) | Filled; observed 6.203s. | [Debug](https://debug.barn.cow.fi/order/0x7d3a34faeddee072b3671fb6186ef8c8c266f7d048c7bc8e3acc2b79b93e97cb); [transaction](https://solscan.io/tx/5K3Gb2LjKZ7bANkKCM2i5qthxoiAFAEKc9CraCx1Kq8bnnvYNsGknKVsPUg7rhfKaahe35boGNhNc1NawnfoXQ22) |
| 34 / 15 | 2026-10-28T11:50:32.907Z | Buy USDC to exactly 0.002 wSOL (self) | Filled; observed 12.776s. | [Debug](https://debug.barn.cow.fi/order/0x95e405ff8c3d738940b21a6bb272a73b0eda16680c9493925e4d69d5aea84ef9); [transaction](https://solscan.io/tx/2pncm7Q2MWuQTeQqXLzsrz1Zw8RQnRSmtAZ1wAxdcNhjbLLQtyNtN9oM19tHhLmqpdPkozevvJKSJ7uhHZsPENsW) |

Raw evidence: selected session `sim/journal.jsonl`, keyed by the source row, trader and UID above; `orders.json` for final status and `logs/settle_failures.txt` for failed attempts. External links identify the exact orders and transactions.

</details>

## 4. Same-direction sells

Batching was achieved: 25/25 filled in 7 transactions. One checked 4-order transaction used 1 Jupiter Route instruction.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 7. Filled / placed main orders: 25/25; completed / planned: 25/25. Median / longest fill: 13.237 / 32.052 seconds. Batch sizes (orders: transactions): 1: 1, 4: 6.

The [4-order transaction](https://solscan.io/tx/5WSQSZP8H2dpMHro9Y6BySeCay9WZrdFeRNKfSgZZLkQkeFfSdtnQJWMZtMDEJytXEGq8hwu1Arwy48QiB8wdbuV) settles source rows 35, 37, 42 and 43 with one top-level Jupiter Route between settlement-program calls. Proportional payouts and price-guard logic were not decoded. Same-direction batching is not direct matching of opposite orders.

**Ownership unknown: 4 JUP cleanup originals stayed cancelled.** Observed 69.658-71.512-second waits include cancellation and polling. All have zero execution; later cleanup replacements, where present, have different UIDs. Narrow live logs contain simulation-passing candidates for trader 16's original in auction 404627/2 and trader 19's original in 404627/13; solution 0 was submitted instead. This weakens a blanket no-route explanation but does not prove profitable eligibility or unfair selection. Confidence in cancellation is high; cause is low confidence. CoW should compare candidate scores, fee/limit eligibility and winning decisions before cancellation. A valid better candidate omitted from selection would support scheduling; only invalid candidates would support route economics. No failed on-chain attempt was joined to these originals.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 35 / 16 | 2026-10-28T11:52:30.742Z | Sell 0.005 SOL to JUP (self) | Filled; observed 3.272s. | [Debug](https://debug.barn.cow.fi/order/0x4f6422215555cc620d26d2023f07e7755b6a70ec621a1003890feb2a798f4afb); [transaction](https://solscan.io/tx/5WSQSZP8H2dpMHro9Y6BySeCay9WZrdFeRNKfSgZZLkQkeFfSdtnQJWMZtMDEJytXEGq8hwu1Arwy48QiB8wdbuV) |
| 36 / 17 | 2026-10-28T11:52:31.140Z | Sell 0.005 SOL to JUP (self) | Filled; observed 28.738s. | [Debug](https://debug.barn.cow.fi/order/0xcf90c19ef23461c1b71a10e96a6037460f64da6640f16844361fc25db681b3c2); [transaction](https://solscan.io/tx/3nc9e6YsEL4mfDRwYgehopbCmR6kjrEXDVAcECyJ63zs7M4u5T2easYqmW42jPGYmQGG4CBpwqN9xJ5gRuFPZH3z) |
| 37 / 18 | 2026-10-28T11:52:31.241Z | Sell 0.005 SOL to JUP (self) | Filled; observed 3.335s. | [Debug](https://debug.barn.cow.fi/order/0x2bfa078201382a86d8a894e30ee9881531d376df4a5a0207e6b2846e10bc35ee); [transaction](https://solscan.io/tx/5WSQSZP8H2dpMHro9Y6BySeCay9WZrdFeRNKfSgZZLkQkeFfSdtnQJWMZtMDEJytXEGq8hwu1Arwy48QiB8wdbuV) |

Cleanup failures and failed attempts, excluded from main metrics:

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| - / 19 | 2026-10-28T11:54:20.584Z | Sell 1.798393 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) to [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Ownership unknown: journal timeout, final API cancelled; zero execution; [transaction](https://solscan.io/tx/2kKPmQWdSXthTP1JuERwafqzKi7Nvcw3e4ZeeuTsN9SR3oeKnRthBVXZ5CfUVPPhsNcxPqBVDpf1VRfhNZkSpcNJ); observed 69.658s. | [Debug](https://debug.barn.cow.fi/order/0xe2dbaa7fb18dd86c52115f3b54d945d7ced168ac87d7d5d829a981836a4e67f5) |
| - / 23 | 2026-10-28T11:54:26.394Z | Sell 1.79826 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) to [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Ownership unknown: journal timeout, final API cancelled; zero execution; [transaction](https://solscan.io/tx/2uxFyW2C7ZZ4ery4p2xBtUPn1H1QHNcMMS96VAmeZBNe81zc6kQ59Dp2DU4R8qWyZdfmRBh7AuWrjqeDmJShi9Tv); observed 71.512s. | [Debug](https://debug.barn.cow.fi/order/0xe11748fd6874841c32d203e8f1ac5e9a17f321ea28fe148de03e09d2a562041c) |
| - / 24 | 2026-10-28T11:54:26.573Z | Sell 1.79826 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) to [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Ownership unknown: journal timeout, final API cancelled; zero execution; [transaction](https://solscan.io/tx/BdeqB6BEq771ifz81uCARtHpYZViF6JPSQdVp826ai7aLfYygFT8vLWefwCoUdKi6Ng6vKbm88eJtVtG8JwoG7V); observed 70.585s. | [Debug](https://debug.barn.cow.fi/order/0xc4013c93c1593138489b6f7080494f8effcbfc89ce65c8aaac159f313c61761a) |
| - / 16 | 2026-10-28T11:54:29.525Z | Sell 1.79826 [JUP](https://solscan.io/token/JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN) to [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Ownership unknown: journal timeout, final API cancelled; zero execution; [transaction](https://solscan.io/tx/3KREGJETXZMFQthZoyrz7SYUnyyEjnE5EdjyznWnWG6EYaVhSTrMeSQYsNtT4Kbn3afE6TykSq6GP3a2K6RULpiz); observed 69.839s. | [Debug](https://debug.barn.cow.fi/order/0x55eac2e13f40a375d4fc297617d876e972a53524e58967b20417177b13264d4d) |

Raw evidence: selected session `sim/journal.jsonl`, keyed by the source row, trader and UID above; `orders.json` for final status and `logs/settle_failures.txt` for failed attempts. External links identify the exact orders and transactions.

</details>

## 5. Sell bursts

The burst goal was achieved: all 84 trades filled. The 5 separated waves do not establish a sustained throughput limit.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 24. Filled / placed main orders: 84/84; completed / planned: 84/84. Median / longest fill: 14.321 / 36.361 seconds. Batch sizes (orders: transactions): 1: 3, 3: 3, 4: 18.

Waves contained 4, 8, 16, 24 and 32 trades with 90-second gaps. Wave size / first row start to last row done: 4: 6.078s, 8: 12.527s, 16: 35.577s, 24: 37.490s, 32: 48.083s. This includes preparation and placement, unlike fill timing.

**Ownership unknown: cleanup.** One 0.768048 USDC to native SOL original was cancelled with zero execution after 69.429 seconds. No failed signature was joined to it. The verified mechanism is timeout followed by simulator cancellation; underlying cause is unknown, confidence low. Route/fee feasibility and selection remain alternatives. CoW should join candidates, scores and submission decisions before cancellation; an unexplained timeout does not yet give the solver a specific fix.

Trader 67 separately retained 1000 units of pre-existing `AW1vmJ...` after cleanup quote `NoLiquidity` at 12:04:46.334 and 12:09:44.858 UTC. It was not a scenario token request, has no order ID and remains deferred. Its full mint and original provider body are absent from the saved cleanup message. This is not a failed main trade or a confirmed solver limitation.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 60 / 41 | 2026-10-28T11:55:30.322Z | Sell 0.0025 SOL to USDC (self) | Filled; observed 3.157s. | [Debug](https://debug.barn.cow.fi/order/0x6cf559836adf6e239de08baf17e9617fddb3e71eb15013908ff886b8a0fa1f19); [transaction](https://solscan.io/tx/rp9DEd1mD3AB7smcC5v33YAVKFqAU6mypKfxnycfTPD3WpVZF6aBM12Z51vvzM6omZ2GHntyqQExjMz87yWe2QK) |
| 112 / 41 | 2026-10-28T12:01:38.723Z | Sell 0.0025 SOL to USDC (self) | Filled; observed 33.030s. | [Debug](https://debug.barn.cow.fi/order/0x608f9cc54c74c016ad60c46c4924628fae7737839d65640eb970bd21ec7b738d); [transaction](https://solscan.io/tx/5TTd8K21k46ta4zB51eL2rsu2YYYEJ57tiMkTTVUpzvdzJoCxE9r2Z6wkHBmg6DjNAPW3EYo9W2C8v75vokfjuSx) |
| 138 / 67 | 2026-10-28T12:01:40.475Z | Sell 0.0035 SOL to USDC (self) | Filled; observed 14.200s. | [Debug](https://debug.barn.cow.fi/order/0xa4a421fb8290f50c5822fc18df3c97b3138ee9f719265f8d3604878128351923); [transaction](https://solscan.io/tx/3BgRX4GxtzoSvCdXmeRXBhv17mrTqcC94at9GnkLmouBNUaD1v2oX5RapAyNW6iWetYHmG58GpznaEPochnHvaVh) |

Cleanup failures and failed attempts, excluded from main metrics:

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| - / 49 | 2026-10-28T12:03:38.261Z | Sell 0.768048 [USDC](https://solscan.io/token/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v) to [SOL](https://solscan.io/token/11111111111111111111111111111111) (cleanup) | Ownership unknown: journal timeout, final API cancelled; zero execution; [transaction](https://solscan.io/tx/2MHR1RV3JSFWGAah8cukfWrR8MbgeqkWy2MwzYYbiaNZQV53Kb54XVPmnmgFsaqnS35a8pKCVv2nE8yNEianMdS4); observed 69.429s. | [Debug](https://debug.barn.cow.fi/order/0x3f04e89a479004f8083c1ee2ca46519f40e9a7d43ea573cdfb8d72f78fe143c5) |

The 2 unplaced residual-token cleanup quote failures are journal `cleanup_done` records for trader 67 at 12:04:46.334 and 12:09:44.858 UTC; no Debug record exists.

Raw evidence: selected session `sim/journal.jsonl`, keyed by the source row, trader and UID above; `orders.json` for final status and `logs/settle_failures.txt` for failed attempts. External links identify the exact orders and transactions.

</details>

## 6. Token coverage

The full coverage goal was not achieved: 36/37 fixed-input sells and 3/15 exact buys completed. Two failed sell attempts later filled; exact-buy quote failures remain unexplained.

<details>
<summary>Order evidence and metrics</summary>

Total transactions: 39. Filled / placed main orders: 39/39; completed / planned: 39/52. Median / longest fill: 8.841 / 21.309 seconds. Batch sizes (orders: transactions): 1: 39.

Fixed-input SOL sells succeeded to: [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump), [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH), [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn), [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH), [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1), [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk), [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3), [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh), [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1), [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb), [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8), [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB), [BONK](https://solscan.io/token/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263), [WIF](https://solscan.io/token/EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm), [POPCAT](https://solscan.io/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr), [JitoSOL](https://solscan.io/token/J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn), [mSOL](https://solscan.io/token/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So), [JupSOL](https://solscan.io/token/jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v), [cbBTC](https://solscan.io/token/cbbtcf3aa214zXHbiAZQwf4122FBYbraNdFqgw4iMij), [USDe](https://solscan.io/token/DEkqHyPN7GMRJ5cArtQFAWefqbZb33Hyf6s5iCwjEonT), [EURC](https://solscan.io/token/HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr), [USDY](https://solscan.io/token/A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6), [JLP](https://solscan.io/token/27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4), [INF](https://solscan.io/token/5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm), [ETH](https://solscan.io/token/7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs), [BNB](https://solscan.io/token/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa), [XAUt0](https://solscan.io/token/AymATz4TCL9sWNEEV9Kvyz45CHVhDZ6kUgjTJPzLpU9P), [GLDx](https://solscan.io/token/Xsv9hRk1z5ystj9MhnA7Lq4vjSsLwzL2nxrwmwtD3re), [EUROP](https://solscan.io/token/euro5sNHrZC2wu2RoLvy6xxoVMc3Qnd1vjxoWf4MftA), [Fartcoin](https://solscan.io/token/9BB6NFEcjBCtnNLFko2FqVQBq8HHM13kCyYcdQbgpump), [MEW](https://solscan.io/token/MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5), [BOME](https://solscan.io/token/ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82), [hyloSOL](https://solscan.io/token/hy1oXYgrBW6PVcJ4s6s2FKavRdwgWTXdfE69AxT7kPT), [PSOL](https://solscan.io/token/pSo1f9nQXWgXibFtKf7NWYxb5enAM4qfP6UJSiXRQfL). Exact buys succeeded for [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump), [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo), [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk).

**Ownership unknown: 12 exact-buy quote failures.** Eight failed at initial quoting and 4 during the main flow's quote stage, all before placement. Each returned `404 Not Found: NoLiquidity: no route found`. They bought PAID, USDG, PUMP, CASH, CRCLx, SPYx, SKHY, NVDAx, MU, SPCX, SPCXx and TSLAx using SOL; exact amounts are below. Every corresponding fixed-input sell filled. USDG 0.25 exact buys filled in the receiving-account scenario, while 0.464 failed here; kind/amount and route feasibility are better leads than blanket token support. Confidence is high that the API returned no usable quote and low in cause/owner. Four original API bodies retain only `errorType=NoLiquidity, description=no route found`; 8 initial failures preserve the same response text. Completed staging reads for 12:05:45-12:05:56 show driver solve requests and successful fee processing, but no original engine responses or reliable per-failure request joins. A cross-container error-text search also returned none. CoW should capture normalized exact-output requests, request IDs and engine bodies in a future authorized rerun. A valid engine solution discarded by the API would reject the token-support theory. No quote was replayed.

**Ownership unknown: 2 Jupiter minimum-output failures, both later filled.** RPC identifies Jupiter `JUP6LkbZbjS1jKKwapdHNy74zcZ3tLUZoi5QNyVTaV4` as first failing program. Both fixed-input Route instructions use discriminator `e517cb977ae3ad2a`, input 10,000,000 lamports, 25bps tolerance and zero platform fee. Layout matches the [checked pinned IDL](https://github.com/jup-ag/jupiter-amm-implementation/blob/cc068c9d1df0060c62f9a8a4fc37ea13ea7b9b39/jupiter/idls/jupiter_aggregator.json); this supports decoding but does not prove the historical deployed version or exact rounding.

SPCX output 6,843 (0.006843) was below approximately 6,845 against quote 6,863, about 2 units short. Its signed minimum was 5,752, leaving 1,091 units above that user limit. USDv output 1,020,216 (1.020216) was below approximately 1,020,542 against quote 1,023,100, about 326 units short; signed minimum was 858,095, leaving 162,121. Rounding can move thresholds by 1 unit. Quote-to-output movement was about 29.14/28.19bps, beyond 25bps. Both driver simulations passed roughly 0.013 seconds before submission; this is not quote age. Same-UID later fills paid 6,855 SPCX and 1,022,206 USDv.

Confidence is high in minimum-output failure and medium in route movement versus swap protection as the retry explanation. An optimistic route estimate is the strongest alternative; repair ownership remains unproved. Inspect the solver-produced 3-leg routes, quote slots and final Manifest legs against execution state. First reproduce the allowance comparison; consider changing protection only when the promised payment, user minimum and every fee remain covered.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL / transaction |
| --- | --- | --- | --- | --- |
| 144 / 73 | 2026-10-28T12:05:39.228Z | Sell 0.01 SOL to [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored) | Filled; observed 6.501s. | [Debug](https://debug.barn.cow.fi/order/0x8899fb33f3f2efe6dd63550735c8221819930487c50bce197aee97473d7bef9e); [transaction](https://solscan.io/tx/3uU8VUNpNtRK6pTBfeMb1WtrmVjXpyfRsAwsqZfBfhYe3KthxK63x31isdALvNMmM43mQBiV9ct3zGeBdHoBYART) |
| 152 / 81 | 2026-10-28T12:05:44.261703561Z | Sell 0.01 SOL to [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored) | Ownership unknown: Jupiter InstructionError(6, Custom(6001)); auction 404770/10; [transaction](https://solscan.io/tx/2FKrGSxCCNTfHJFzDknyvH9WdoWdQrYUgL1onjMS1yKAPHmoFoRxzobCcD9Q2fVxkMjBmorqWYLDwJu3AqnqeQ2q). Later filled; observed 11.570s. | [Debug](https://debug.barn.cow.fi/order/0xaaeaf5a603c2171bf7b9ece023a2cff97cabcae51bd6b7abfadf03fc512470bd); [transaction](https://solscan.io/tx/3Yq4yMpF1HGTA2p71ZbcUpMG1QWXDzKFzLex211F3fSrtQWPac26rqTJQjnZ65eX5Jyj2KRsKP3BGiM9NWpFMA3n) |
| 156 / 85 | 2026-10-28T12:05:44.225925119Z | Sell 0.01 SOL to [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) (sponsored) | Ownership unknown: Jupiter InstructionError(6, Custom(6001)); auction 404770/4; [transaction](https://solscan.io/tx/5cLE8vQioJevq6QcaMwStqnx5o5Uwc7iTHQQYm8AiFvod76X7vPqXsQjRqCX36zyexzLYoZofdH6ay9T3EfiDHL3). Later filled; observed 11.553s. | [Debug](https://debug.barn.cow.fi/order/0x67639909a36bfe6e2ebf09f1dc05685483b9eb436d5a3983fac83f750a671738); [transaction](https://solscan.io/tx/3NH3nYXBnQJCag4H3wbNMnphVVkcNg2vHFU29yX8pcJGaCbarVuG1EDMQLFMWYsSWUqYen3hiCpDYra1eQLmpeWJ) |
| 181 / 73 | 2026-10-28T12:05:49.334Z | Buy SOL to exactly 3.26 [ANSEM](https://solscan.io/token/9cRCn9rGT8V2imeM2BaKs13yhMEais3ruM3rPvTGpump) (sponsored) | Filled; observed 15.095s. | [Debug](https://debug.barn.cow.fi/order/0x9575cb120d84a14370c51d03c276827b7a7a4d2ffc8bf6cdf164949da73f1023); [transaction](https://solscan.io/tx/641TKqPpnLundSYNMbiNtVsiMTEYicBGGGmyRn5oPtLb5RLbxT9G3SaJK89vdbwdSSmepuHh9feLRj7h71n3JtXe) |
| 182 / 74 | 2026-10-28T12:05:50.058Z | Buy SOL to exactly 88.1 [PAID](https://solscan.io/token/98kfF7rmsg1QDUEoCqNE7g7M1FdrTt92TEp2CLzypump) (sponsored) | main error: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 183 / 75 | 2026-10-28T12:05:49.696Z | Buy SOL to exactly 0.464 [USDG](https://solscan.io/token/2u1tszSeqZ3qBWF3uNGPFc8TzMk2tdiwknnRMWGWjGWH) (sponsored) | main error: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 184 / 76 | 2026-10-28T12:05:47.769Z | Buy SOL to exactly 71.6 [PUMP](https://solscan.io/token/pumpCmXqMfrsAkQ5r49WcJnRayYRqmXz6ae8H7H9Dfn) (self) | main error: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 185 / 77 | 2026-10-28T12:05:47.349Z | Buy SOL to exactly 0.464 [PYUSD](https://solscan.io/token/2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo) (sponsored) | Filled; observed 11.723s. | [Debug](https://debug.barn.cow.fi/order/0x8fa4970adb5aa68a3e82ea2bcc20df672f382ed963ad0f9e15744af4ab05f164); [transaction](https://solscan.io/tx/PRniABevAfYPb4ZsbDUz4iroKxRFrAzPH4jETsvp2GaipRoBPs5zMSLCyGqUPZXuQidhnfc7MqXatDYpqGM8BsU) |
| 186 / 78 | 2026-10-28T12:05:50.434Z | Buy SOL to exactly 0.464 [CASH](https://solscan.io/token/CASHx9KJUStyftLFWGvEVf59SGeG9sh5FfcnZMVPCASH) (sponsored) | main error: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 187 / 79 | 2026-10-28T12:05:47.113Z | Buy SOL to exactly 0.00574 [CRCLx](https://solscan.io/token/XsueG8BtpquVJX9LVLLEGuViXUungE6WmK5YZ3p3bd1) (sponsored) | quote failed: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 188 / 80 | 2026-10-28T12:05:55.284Z | Buy SOL to exactly 0.000597 [SPYx](https://solscan.io/token/XsoCS1TfEyfFhfvj8EtZ528L3CaKBDBRqRapnBbDF2W) (self) | quote failed: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 189 / 81 | 2026-10-28T12:05:53.177Z | Buy SOL to exactly 0.464 [USDv](https://solscan.io/token/USDvUSpnhCr9yBgj3UyVrD239HRUv4RsHwH2FxsWuMk) (sponsored) | Filled; observed 13.608s. | [Debug](https://debug.barn.cow.fi/order/0xa2fe280e4d21e129796546a1fff51e7440c45c10561a9a961a1cbc3174ff566e); [transaction](https://solscan.io/tx/KSJq6BZEjRs6UCfHP2hKHVfZ9bfzooGAJgudqvV6syZd5TcakkbP4HJNupDtR2mTcehCSQGA6YvFi2UvGPibC3e) |
| 190 / 82 | 2026-10-28T12:05:47.551Z | Buy SOL to exactly 0.0026 [SKHY](https://solscan.io/token/SKHYhSjuRWHgikq8eRKbtBbpABgJSkd7ytQV14i9EQ3) (sponsored) | quote failed: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 191 / 83 | 2026-10-28T12:05:47.391Z | Buy SOL to exactly 0.00196 [NVDAx](https://solscan.io/token/Xsc9qvGR1efVDFGLrVsmkzv3qi45LTBjeUKSPmx9qEh) (sponsored) | quote failed: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 192 / 84 | 2026-10-28T12:05:51.955Z | Buy SOL to exactly 0.000427 [MU](https://solscan.io/token/MUxEsUKSMACyw5fZf68wxf5FLnZVhtU9CwH8uNNGay1) (self) | quote failed: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 193 / 85 | 2026-10-28T12:05:52.250Z | Buy SOL to exactly 0.00276 [SPCX](https://solscan.io/token/SPCXxcqXj6e5dJDVNovHN8744zkbhM2bYudU45BimGb) (sponsored) | quote failed: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 194 / 86 | 2026-10-28T12:05:48.095Z | Buy SOL to exactly 0.00277 [SPCXx](https://solscan.io/token/Xs3oZwbHvqis4NYcf4YKWmEia2eC84wSiVrcYcTqpH8) (sponsored) | quote failed: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |
| 195 / 87 | 2026-10-28T12:05:48.321Z | Buy SOL to exactly 0.00123 [TSLAx](https://solscan.io/token/XsDoVfqeBukxuZHWhdvWHBhgEHjGNst4MLodqsJHzoB) (sponsored) | quote failed: 404 Not Found: NoLiquidity: no route found; final: no main order placed. | No accepted order ID: failed before placement |

Raw evidence: selected session `sim/journal.jsonl`, keyed by the source row, trader and UID above; `orders.json` for final status and `logs/settle_failures.txt` for failed attempts. External links identify the exact orders and transactions.

</details>
