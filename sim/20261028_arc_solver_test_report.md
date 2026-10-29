# Arc solver test report

28 October 2026 - staging - completed session 13:00:57-13:26:34 UTC

**TLDR:** Small SOL sells worked, but this was a partial test: 61 planned flows were blocked by 503 service errors. That blocked all 52 token flows and 9 opposing-order flows; the outage's underlying cause is still unknown. Overall, 25/111 placed main orders filled, from 182 planned flows. Earlier payment failures are a separate issue: one SOL to USDC sell that worked on retry (https://debug.barn.cow.fi/order/0x0a393d97ed18bae3717de2db1db0919175169d2e00c27baa8e278ca39206934b) requested 0.000008 USDC more than the swap returned. Compare the payment with the route's guaranteed output, and rerun the blocked scenarios once the service works.

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Standard pairs | Not achieved; 2/2 placed main filled | Compare guaranteed output with fixed payment. |
| 2. 25 same-direction orders | Batching not achieved; 6/25 placed filled | Inspect rejected payments before trying batching. |
| 3. Sell bursts | Not achieved; 17/84 placed filled | Separate payment failures from selection and cancellation. |
| 4. Opposing orders | Inconclusive; no main orders placed | Test team should restore prerequisites and rerun. |
| 5. Token coverage | Inconclusive; no main orders placed | Test team should rerun once placement works. |

## Changes since 21 October 2026

Across the matching 182 scheduled flows, main fills changed from 43/136 placed to 25/111 placed; the blocked later scenarios prevent a fair overall performance comparison.

<details>
<summary>Comparison with the previous run</summary>

Baseline: staging session `2026-10-21-12-16-composite-arc-run`, verified against its meta, journal, order snapshots and failure exports. Its first 5 scenarios match these 182 scheduled rows; the removed 8 fresh-account rows are excluded. Main-only figures below exclude automatic acquisitions and cleanup, correcting the broader denominator in the earlier report.

| Metric | 21 October | 28 October |
| --- | --- | --- |
| Main scheduled / placed / filled | 182 / 136 / 43 | 182 / 111 / 25 |
| Distinct main settlement transactions | 43 | 25 |
| Standard / batching / burst fills | 2 / 1 / 30 | 2 / 6 / 17 |
| Opposing / token fills | 3 / 7 | 0 / 0, no main placement |
| Main placement to observed fill median / longest | 13.36 / 70.69 s | 38.39 / 75.03 s |
| Exact-buy completed flows | 0 | 0 |

SPL Token insufficient funds is an existing error type, not new. New affected UIDs include https://debug.barn.cow.fi/order/0x0a393d97ed18bae3717de2db1db0919175169d2e00c27baa8e278ca39206934b (filled after retry) and https://debug.barn.cow.fi/order/0x128d65d9a497911ff30929ca0896e3bbe05e9e0a34b774852d2cc2e24f03be33 (filled after retry). Candidate simulation logging is much fuller today; 546 candidate rejections must not be compared with the old aggregate 9 without the same query. The previous report already records payout shortfalls; missing old detail is not evidence of a fix.

A newly recorded error is settlement-program `Custom(15)` on 1 cancelled order, https://debug.barn.cow.fi/order/0xf3da1b3820e672ac4f426d261b688486a9a5e27e655e055146e655ef6703736f. It rejected an already cancelled order; the checked baseline records did not record this type.

New successful fills missing in the previous matching rows:
- Row 9, Sell 0.005 SOL to JUP (self), filled: https://debug.barn.cow.fi/order/0x1fd91b0791ffdd4feae88470b2435be30c0a1b11e07ea6d308ef7b25c2394349.
- Row 23, Sell 0.005 SOL to JUP (self), filled: https://debug.barn.cow.fi/order/0x89de272a2a66549d59c9333f5a45899fd9d0d3ea169830d3bdb9dc10438f9284.
- Row 24, Sell 0.005 SOL to JUP (self), filled: https://debug.barn.cow.fi/order/0x128d65d9a497911ff30929ca0896e3bbe05e9e0a34b774852d2cc2e24f03be33.

Token coverage is not comparable: the previous token section filled 7 fixed-input sells and 0 exact buys; today it placed none. No known and accepted solver limitation was newly exercised.

</details>

## 1. Standard pairs

**Not achieved.** SOL to USDC and SOL to USDT sells filled, but no exact buy did.

<details>
<summary>Order evidence and metrics</summary>

Filled / scheduled: **2/6**. Placed main orders: **2**. Total transactions: **2**. Median / longest fill: **19.08 / 22.19 seconds**.

Scope throughout: scheduled CSV `step=main` only, including explicit setup rows; automatic `step=acquire`, creation, funding, failed submissions and cleanup are excluded from main totals and transaction counts. Transactions are distinct successful settlement signatures joined to selected main UIDs. Timing is accepted placement to simulator observed fulfilled status, including polling delay. Error timestamps are the first recovered failed attempt, or the saved failure observation if no attempt exists; successful examples use placement time.

Session artifacts are completed exports, fetched at 13:27:48 UTC. All 5 scenario phases finished. `finished=false` records cleanup leftovers, not unfinished trading phases. There are no configured retries, order validity is 300 seconds, and fill timeout is 60 seconds. `prepareTokenAccounts=false` does not establish absent receiving accounts or that Arc paid rent. Competition records show Arc as the only participating solver, wallet `6YuFJJgrx61ZUTrYowSCo1LDuKspC6TqjW5aAwymAyeH`.

Supplemental original staging evidence was read through authenticated `vm-auth-staging`, verified against `/api/datasources`; saved exports were not overwritten. Driver records were joined by auction, solver and solution, with `_time` and `_msg` copied to labels. There are **546 candidate simulation rejections on 133 distinct orders**, plus **59 failed selected settlement attempts on 32 orders**; their union is **135 distinct orders**, including cleanup. The candidate counts split into **416 main / 130 cleanup**; all 546 `bundle simulation failed` records name SPL Token as the failing program and all paired errors are Custom(1), InsufficientFunds. The 59 selected attempts comprise 55 on-chain Custom(1) reverts (SPL Token verified in 2 RPC samples), 3 explicit SPL simulation failures and 1 on-chain settlement-program Custom(15). These are failed attempts, not 605 failed orders. The compact export lists only 32 selected-failure UIDs and misses candidate rejections.

**Ownership unknown - the fixed payout exceeded available swap output.** Read-only RPC proves two examples after successful Jupiter swaps: the SOL to USDC order that later filled (https://debug.barn.cow.fi/order/0x0a393d97ed18bae3717de2db1db0919175169d2e00c27baa8e278ca39206934b) requested 507466 atoms after Jupiter returned 507458, with 0 atoms already in the source account, a shortfall of 8 atoms (0.000008 USDC); failed transaction https://solscan.io/tx/EbRnY7UjsBU86XYc37XvwAZg2udSpgq3bcRHjdrv1M43ZgZxQTZfSZFHRKgGMQKK273T4LZEbrq9T5nxBhcvDNc. The SOL to JUP order that later filled (https://debug.barn.cow.fi/order/0x128d65d9a497911ff30929ca0896e3bbe05e9e0a34b774852d2cc2e24f03be33) requested 1818552 atoms after Jupiter returned 1817899, with 0 atoms already available, a shortfall of 653 atoms (0.000653 JUP); failed transaction https://solscan.io/tx/2z3oWTy1HWLcp9jrv344scHydMf4qohL5nsyKZ49Ab6iwkB1doHjjB8hrF7Pwbf1jjSeCtP6tsfWKZe3cAjW5jy1. Both fail in top-level SPL Token transfer instruction 6, after the swap succeeds. Distinct source and destination accounts rule out an accidental self-transfer in these examples. This is a payment failure, not Jupiter slippage rejection.

Our leading explanation, with medium confidence, is a fixed payment based on a route quote that does not reserve enough guaranteed output. Confidence in the observed balance shortfalls is high. Price movement or integer rounding could explain why actual swap output fell below the planned payment; original engine solution payout fields and a verified schema for these Jupiter instruction variants were not recovered, so we cannot rank those triggers or quote exact swap slippage bounds. Driver settlement simulation passed before each failed submission: 13:01:12.547 to 13:01:13.854 for the USDC example, and 13:03:32.956 to 13:03:33.832 for JUP. This supports a simulation-to-execution change but does not measure quote age. Arc's submitted route and the shared settlement payment construction are the useful places to inspect, with repair ownership unresolved. Compare guaranteed spendable output, the submitted payment and the user's signed minimum in base units; require guaranteed spendable output >= payment >= signed minimum. If the submitted payment exceeds the guaranteed amount, rebuild the candidate before selection; if it does not, inspect available balance and account use. Do not reduce the accepted payment or widen user limits after selection.

**Ownership unknown - exact buys returned no usable quote.** Nine scheduled exact buys failed before placement: 3 standard requests for exactly 0.25 USDC/USDT and 6 explicit setup requests for 1.1-3.2 USDC/USDT. The saved API error is `404 Not Found: NoLiquidity: no route found`; this identifies the stage, not absent market liquidity or permanent unsupported tokens. Original API records show Arc's driver response `{"kind":"QuotingFailed","description":"No valid quote found"}`. Standard request IDs are `67471da6df0d00e153032e541a5d2220` at 13:01:09.961 (JUP to exactly 0.25 USDC), `230c026ba9dea5284fd02891ef3423c4` at 13:01:16.256 (SOL to exactly 0.25 USDT) and `04d9a4e36966632935170a17ea13858a` at 13:01:22.049 (SOL to exactly 0.25 USDC). Driver requests 1475, 1480 and 1483 called Arc immediately before these records. The exact engine response and first rejected field are unavailable. A shared exact-output conversion or validation issue is a plausible explanation, with medium confidence in the request-pattern association and low confidence in its cause: fixed-input sells on SOL/USDC and SOL/USDT filled, but amount and sponsorship differ. CoW should first recover the original response for request 1475 and compare requested output 250000 atoms, fee conversion and validation; a nonempty engine route rejected by validation supports an adapter fix, while an empty response moves the check to provider routing. No request was replayed and no order exists for these failures.

One standard sell was blocked before placement by a service fee check; its prerequisite acquisition filled and is excluded from the main denominator.

Successful settlement examples: https://solscan.io/tx/51eNaxq59W6Q7oHEJ5UHBzbaHsciJqdhJEatKpRR2hBTuPMu9r8DX4c4kHyFihye2kh8GoydPE7fVyM5UmnwJh8e; https://solscan.io/tx/4yCG4Wt8ZqwzG5jMwUStVp91Dtq1ewpQzUeYoM1ad4FvK3vL27Ez9MBNFWbbths4iCvJzU1P4GowQbuDjve6d1Ms.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 1 / 1 | 2026-10-28T13:01:02.439339919Z | Sell 0.005 SOL to USDC (self) | Ownership unknown: E3 x1; E7 x2. Final fulfilled. | https://debug.barn.cow.fi/order/0x0a393d97ed18bae3717de2db1db0919175169d2e00c27baa8e278ca39206934b |
| 2 / 2 | 2026-10-28T13:01:02.439354169Z | Sell 0.005 SOL to USDT (self) | Ownership unknown: E7 x1; E9 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0xb6cf852146868ec4bf9f7513ab4d2447daa7c0571a3dfa0da82a6a8fb78bace1 |
| 4 / 1 | 2026-10-28T13:01:22.085Z | Buy SOL to exactly 0.25 USDC (sponsored) | Ownership unknown: quote failed: 404 Not Found: NoLiquidity: no route found. No main order created. | No order ID: failed before main placement. |
| 5 / 2 | 2026-10-28T13:01:16.291Z | Buy SOL to exactly 0.25 USDT (sponsored) | Ownership unknown: quote failed: 404 Not Found: NoLiquidity: no route found. No main order created. | No order ID: failed before main placement. |
| 6 / 3 | 2026-10-28T13:01:10.000Z | Buy JUP to exactly 0.25 USDC (sponsored) | Ownership unknown: quote failed: 404 Not Found: NoLiquidity: no route found. No main order created. | No order ID: failed before main placement. |

Cleanup is excluded from all main totals. Failed attempts and cancelled cleanup orders are retained below; a later fill does not erase an earlier failed attempt.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 1 | 2026-10-28T13:01:27.51406444Z | Sell 506014 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E3 x1; E5 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0x65c5a072709a5e8fd6afdd4c83e9ecccb799e83077a6bcb8337758c83b2ac767 |
| - / 2 | 2026-10-28T13:01:27.51405147Z | Sell 500611 atoms USDT to SOL (native) (cleanup) | Ownership unknown: E5 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0x1d6646b6477c290394ef5fa7acc52e5b561e6217492e4b9ad7b7b9eafa608b37 |
| - / 3 | 2026-10-28T13:01:27.51407143Z | Sell 734740 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E5 x13. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xaa5249623dc5ed8dc2e761a4fa70515aac3044a0a37c91fa22479eb6ea1dafe7 |

Exact error key for the attempt counts above:
- `E3`: `Reverted { err: InstructionError(6, Custom(1)) }`.
- `E5`: `SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(1))), program_error: None }`.
- `E7`: `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(1))), program_error: None }`.
- `E9`: `SimulationFailed { err: UiTransactionError(InstructionError(7, Custom(1))), program_error: None }`.

</details>

## 2. 25 same-direction orders

**Batching not achieved.** All 6 fills settled separately, leaving 19 accepted orders cancelled.

<details>
<summary>Order evidence and metrics</summary>

Filled / scheduled: **6/25**. Placed main orders: **25**. Total transactions: **6**. Median / longest fill: **46.26 / 75.03 seconds**.

**Ownership unknown - accepted orders did not fill in the test window.** There are 86 cancelled main orders, 19 in batching and 67 in bursts. The simulator waited 60 seconds then cancelled; request overhead means some observed waits exceed 60 seconds. Most have candidate simulation failures in the supplemental evidence, so this is not simply evidence that Arc never responded. The table separates candidate rejections, failed selected settlements and final cancellations. Orders without a recovered failed selected submission cannot be assigned the payout mechanism from a nearby order. CoW should compare each representative UID's proposal, validation, selection and submitted transaction before its cancellation. If candidates consistently fail payment simulation, inspect the same guaranteed-output inequality; if valid candidates lose selection, inspect the actual score. Cancellation timing and market movement remain alternatives. Bursts with 90-second gaps do not measure a sustained rate ceiling.

**Ownership unknown - the fixed payout exceeded available swap output.** Read-only RPC proves two examples after successful Jupiter swaps: the SOL to USDC order that later filled (https://debug.barn.cow.fi/order/0x0a393d97ed18bae3717de2db1db0919175169d2e00c27baa8e278ca39206934b) requested 507466 atoms after Jupiter returned 507458, with 0 atoms already in the source account, a shortfall of 8 atoms (0.000008 USDC); failed transaction https://solscan.io/tx/EbRnY7UjsBU86XYc37XvwAZg2udSpgq3bcRHjdrv1M43ZgZxQTZfSZFHRKgGMQKK273T4LZEbrq9T5nxBhcvDNc. The SOL to JUP order that later filled (https://debug.barn.cow.fi/order/0x128d65d9a497911ff30929ca0896e3bbe05e9e0a34b774852d2cc2e24f03be33) requested 1818552 atoms after Jupiter returned 1817899, with 0 atoms already available, a shortfall of 653 atoms (0.000653 JUP); failed transaction https://solscan.io/tx/2z3oWTy1HWLcp9jrv344scHydMf4qohL5nsyKZ49Ab6iwkB1doHjjB8hrF7Pwbf1jjSeCtP6tsfWKZe3cAjW5jy1. Both fail in top-level SPL Token transfer instruction 6, after the swap succeeds. Distinct source and destination accounts rule out an accidental self-transfer in these examples. This is a payment failure, not Jupiter slippage rejection.

Our leading explanation, with medium confidence, is a fixed payment based on a route quote that does not reserve enough guaranteed output. Confidence in the observed balance shortfalls is high. Price movement or integer rounding could explain why actual swap output fell below the planned payment; original engine solution payout fields and a verified schema for these Jupiter instruction variants were not recovered, so we cannot rank those triggers or quote exact swap slippage bounds. Driver settlement simulation passed before each failed submission: 13:01:12.547 to 13:01:13.854 for the USDC example, and 13:03:32.956 to 13:03:33.832 for JUP. This supports a simulation-to-execution change but does not measure quote age. Arc's submitted route and the shared settlement payment construction are the useful places to inspect, with repair ownership unresolved. Compare guaranteed spendable output, the submitted payment and the user's signed minimum in base units; require guaranteed spendable output >= payment >= signed minimum. If the submitted payment exceeds the guaranteed amount, rebuild the candidate before selection; if it does not, inspect available balance and account use. Do not reduce the accepted payment or widen user limits after selection.

The 6 successful settlement signatures each carry 1 selected main order: batch sizes **1, 1, 1, 1, 1, 1**. A successful SOL to JUP control is https://debug.barn.cow.fi/order/0x1fd91b0791ffdd4feae88470b2435be30c0a1b11e07ea6d308ef7b25c2394349. No claim about proportional payout or a single shared swap is supported.

Successful settlement examples: https://solscan.io/tx/JUX2mkSGZtdpLPBwWPJcmQfkoNa2L8DCzmvGSMmuh3Rmhm1kFmre9sg9imgwYmEWvPh7AtLhvUDY1FaYFaNstvV; https://solscan.io/tx/59of3sYq3qRFB8Bpm9y4fmD3AiZ6faLamiKmWC2i37D6KDWPAJjdX8bgRWNBLR5ZD1RSMymfq7yMAveTcznQNHrK.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 7 / 4 | 2026-10-28T13:03:07.824530234Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x7be50f3b9a048e7409da14d45d28c054924b717b2e00e2dc55dc92564a1e8510 |
| 8 / 5 | 2026-10-28T13:03:07.824602575Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xe1c14a6c6ef4f8626c9b8b5f117fde094d361821150522deb1690820392d61cf |
| 9 / 6 | 2026-10-28T13:03:01.393Z | Sell 0.005 SOL to JUP (self) | Final fulfilled. | https://debug.barn.cow.fi/order/0x1fd91b0791ffdd4feae88470b2435be30c0a1b11e07ea6d308ef7b25c2394349 |
| 10 / 7 | 2026-10-28T13:03:07.824617875Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xf3ab4995b2b914ebf15914a823117c7d5cb8cc563da44cad89536d2b7b90feb1 |
| 11 / 8 | 2026-10-28T13:03:07.824493694Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x4070ee1748f5441f8954457c85a598848540274813c822b09bbdbfcfdf2e237d |
| 12 / 9 | 2026-10-28T13:03:07.824523814Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x741a254747a1933ec026b65517130eaea147c5cbd96739d43a2d90bde3a899a7 |
| 13 / 10 | 2026-10-28T13:03:07.824595785Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xd5d73ffa4aa84f682125f87ebd83535a4d80aa37da148501bafffbab31b49c29 |
| 14 / 11 | 2026-10-28T13:03:07.824456554Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x04be996384a8f44d0415c658d2b884c0f68262cd705159c19ef837a882758d54 |
| 15 / 12 | 2026-10-28T13:03:07.824463944Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x4. Final fulfilled. | https://debug.barn.cow.fi/order/0x0b1e3cc5656c8205a471502bf6e04bcd04a240d0308403e2cf7a2247fbf3edcb |
| 16 / 13 | 2026-10-28T13:03:07.824478534Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x23bac478fe7b11f91d4a1cd066e532d0693f9c09fee1d55b933378e3f64e2320 |
| 17 / 14 | 2026-10-28T13:03:07.824539134Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x7d32f389f4f8f190b15bf75f0629db7c2eb74799551b55f56a650e201c49c3f3 |
| 18 / 15 | 2026-10-28T13:03:07.824572754Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xaf76645b4b1711987a721ea2347886ff6b485b4948bb1e4e6f5a865d6ad75fc0 |
| 19 / 16 | 2026-10-28T13:03:07.824587245Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xc43534cf2ece783088af3a6ad107a62b8f821ada6ab5eff68c35ff1020beac77 |
| 20 / 17 | 2026-10-28T13:03:07.824557304Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x92bb9b6e6a2bbf1532e3c715c340475478cd1b462ef2c77487b529b0e1dfe18b |
| 21 / 18 | 2026-10-28T13:03:07.824443434Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x004406c0712496a6744784f65a873baa1c500153240b1dab53a30f7e511c548f |
| 22 / 19 | 2026-10-28T13:03:07.824566284Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xa08e5efa85c40951e7b2a78804e4b85d16a0b93a17945780a78f35fabf9da125 |
| 23 / 20 | 2026-10-28T13:03:07.824551284Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. Final fulfilled. | https://debug.barn.cow.fi/order/0x89de272a2a66549d59c9333f5a45899fd9d0d3ea169830d3bdb9dc10438f9284 |
| 24 / 21 | 2026-10-28T13:03:07.824472534Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E3 x3; E7 x3. Final fulfilled. | https://debug.barn.cow.fi/order/0x128d65d9a497911ff30929ca0896e3bbe05e9e0a34b774852d2cc2e24f03be33 |
| 25 / 22 | 2026-10-28T13:03:07.824545324Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x84f50a189e20281d429f3fbc0af693afcfb1b2db950b285c3d7374338f84a1b2 |
| 26 / 23 | 2026-10-28T13:03:07.824487394Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x3. Final fulfilled. | https://debug.barn.cow.fi/order/0x2a1575dd55291725e3ac9f7fe4d6b96b3d280bc94b63f9a0078b1660870d8126 |
| 27 / 24 | 2026-10-28T13:03:07.824501404Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x4. Final fulfilled. | https://debug.barn.cow.fi/order/0x433e804e6763964e1d53337b1553f66d4cb1cdccdc174e5491dc3172e1ce2a24 |
| 28 / 25 | 2026-10-28T13:03:07.824507574Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E3 x1; E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x43e7e620dabedc1f5eb059069eb4226e3dc8ffc059f35ae6acdc30f61d11823b |
| 29 / 26 | 2026-10-28T13:03:07.824581244Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xc102e16fbe098381e2a783795cef9056636390ba7b2b2a0643a6a7e03c9d047b |
| 30 / 27 | 2026-10-28T13:03:07.824608485Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xf39a0a58839f0ad3678b577703c16e3ecb55fb0db60cee48fca72427ffdc5fad |
| 31 / 28 | 2026-10-28T13:03:07.824517244Z | Sell 0.005 SOL to JUP (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x4f99c90e14a4c27da2747a98abed8a148ffdb5e9808592f4728e070fda288a15 |

Cleanup is excluded from all main totals. Failed attempts and cancelled cleanup orders are retained below; a later fill does not erase an earlier failed attempt.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 6 | 2026-10-28T13:04:27.448493505Z | Sell 1815412 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E5 x6. Final fulfilled. | https://debug.barn.cow.fi/order/0x1cd8f72b3b27ac7a0c970a3102e19cd22c48702ec7f65c8c15760c0754dfaff6 |
| - / 12 | 2026-10-28T13:04:42.76075554Z | Sell 1812389 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E5 x7. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xae154ab212f82cc8f12693601a6b3eee533aec39e0921225e9d77fd55ed7e6f1 |
| - / 20 | 2026-10-28T13:04:57.485300273Z | Sell 1812884 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E5 x8. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x19e3b1fd5e5c5159497d3918911f78a4b3800a83bd55fecfb4e0f31e854a3af1 |
| - / 21 | 2026-10-28T13:05:02.52975827Z | Sell 1813372 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E5 x8. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x1344a9159a295a97a21229981dda56dcf9530e569f5f2f6bcd4f054d5fd006ce |
| - / 23 | 2026-10-28T13:05:02.52978019Z | Sell 1813036 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E2 x1; E5 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0x3520cd7b420339061e060cfbd97185c80662198f20c39d87406c656b9a8acbf5 |
| - / 24 | 2026-10-28T13:05:07.551223559Z | Sell 1812484 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E5 x7. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x1beabf95b595931519f2ca8b70b6124436c84622095f54fa4f67687f93fa0f57 |
| - / 12 | 2026-10-28T13:22:36.978312627Z | Sell 1812389 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E6 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0xd9557854bf137fecf4d9cfcabcfe08f1631fe95ea0fb2cbbff6114a1b8eac790 |
| - / 20 | 2026-10-28T13:22:46.728954397Z | Sell 1812884 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E5 x8. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xa06447384252944e6a5e9f9dd19843439c9bfca976c38aee55526f31c9f4cc61 |
| - / 21 | 2026-10-28T13:22:46.728947327Z | Sell 1813372 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E2 x3; E5 x8. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x37fa7edb9875d0b41a387ca629d3558f965a74a00aa578269c10d9d44022d377 |
| - / 24 | 2026-10-28T13:22:46.728933757Z | Sell 1812484 atoms JUP to SOL (native) (cleanup) | Ownership unknown: E5 x7. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x0be72cf191382254090317ee6880d0cea7128c9d810ef309f87c5db1da276461 |

Exact error key for the attempt counts above:
- `E2`: `Reverted { err: InstructionError(5, Custom(1)) }`.
- `E3`: `Reverted { err: InstructionError(6, Custom(1)) }`.
- `E5`: `SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(1))), program_error: None }`.
- `E6`: `SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(1))), program_error: Some(ProgramError { program: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA, code: 1, name: Some("InsufficientFunds") }) }`.
- `E7`: `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(1))), program_error: None }`.

</details>

## 3. Sell bursts

**Not achieved.** Only 17 of 84 placed sells filled, with payment failures and repeated simulation rejections.

<details>
<summary>Order evidence and metrics</summary>

Filled / scheduled: **17/84**. Placed main orders: **84**. Total transactions: **17**. Median / longest fill: **38.39 / 67.83 seconds**.

**Ownership unknown - accepted orders did not fill in the test window.** There are 86 cancelled main orders, 19 in batching and 67 in bursts. The simulator waited 60 seconds then cancelled; request overhead means some observed waits exceed 60 seconds. Most have candidate simulation failures in the supplemental evidence, so this is not simply evidence that Arc never responded. The table separates candidate rejections, failed selected settlements and final cancellations. Orders without a recovered failed selected submission cannot be assigned the payout mechanism from a nearby order. CoW should compare each representative UID's proposal, validation, selection and submitted transaction before its cancellation. If candidates consistently fail payment simulation, inspect the same guaranteed-output inequality; if valid candidates lose selection, inspect the actual score. Cancellation timing and market movement remain alternatives. Bursts with 90-second gaps do not measure a sustained rate ceiling.

The two RPC-verified post-swap payment shortfalls are detailed in scenario 1. The same SPL error elsewhere does not establish an identical amount mismatch without that transaction.

**The test cancelled an order before its in-flight settlement executed.** The cancelled SOL to USDC order (https://debug.barn.cow.fi/order/0xf3da1b3820e672ac4f426d261b688486a9a5e27e655e055146e655ef6703736f) passed simulation, then failed settlement-program `Custom(15)` (`OrderCancelled`) before any swap; transaction https://solscan.io/tx/25a4NQy9fLNweC3WNwUAA9xuHWsyEMpY7xqkYbDzRp5kX3BdTfxnKW3SqjkfUFuYptzfNaDNGqkQbzmovMwHavPu. The successful cancellation executed earlier in slot 462487872, so the immediate mechanism is a cancelled-order rejection, separate from earlier payout failures. CoW should review cancellation handling for selected in-flight settlements; this is not a confirmed solver defect.

Burst wave fills in planned order (4, 8, 16, 24, 32 requests): 3/4, 3/8, 3/16, 4/24, 4/32. Only the 4- and 8-request groups share the same traders across waves; the gaps and test cancellations limit any throughput conclusion.

Successful settlement examples: https://solscan.io/tx/56YMdgWbnTkbhdBiHqrVs3dxZ3iAjpQMZnV1BqDyz73ZozE1kRRqatUdqNgrLSzuZo7FjhRQRQdn7sAScSi4PNPS; https://solscan.io/tx/2iFzsYeZd7Chigtynb8nDwBeuTVW5SV1ACLL59N4mm2pfysWgtJdJPfa6LXzjT9QMPX9VFcQNcaDi6YASXGW34mc.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 32 / 29 | 2026-10-28T13:06:42.329Z | Sell 0.0025 SOL to USDC (self) | Final fulfilled. | https://debug.barn.cow.fi/order/0x56885234d4d8ad7fe2e6cdb6e09c297d14adf7b538ab766c7d64fa1721488352 |
| 33 / 30 | 2026-10-28T13:06:47.541519686Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E4 x1; E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x83529fd8c1a27a912e23933d38a2232b637fa642ee1fb5c8199a68ce197aba6c |
| 34 / 31 | 2026-10-28T13:06:47.541508756Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E3 x4; E7 x5. Final fulfilled. | https://debug.barn.cow.fi/order/0x5c67546201444e37d7b79116b1892e2e930c06892909a908a0b3d8f06928f1bd |
| 35 / 32 | 2026-10-28T13:06:44.033094071Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E3 x2; E7 x5. Final fulfilled. | https://debug.barn.cow.fi/order/0xa2acfe623524bf49d319d34795536322b02289eb2261085477dba3d902f337c9 |
| 36 / 29 | 2026-10-28T13:08:17.604516471Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E4 x1; E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xf749cb7aa94c49932f552555d27ecb35449de8747b537504b2d882db77bb2ee3 |
| 37 / 30 | 2026-10-28T13:08:17.604502991Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x6. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xf3218c2a316d9ee015ae66e9f32d7948dd65370369caf69f29c7268d9508f120 |
| 38 / 31 | 2026-10-28T13:08:12.564114738Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x8. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xe3055981147efe27350b7b233b6fe39f47344a84a6fb0917ae11f2d817388118 |
| 39 / 32 | 2026-10-28T13:08:17.604473601Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x8. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x1a25bbc6010406002c9eaecabffe3ae3dde4f6959b45fc2d2aab828300379463 |
| 40 / 33 | 2026-10-28T13:08:17.604510471Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E1 x1; E3 x3; E4 x1; E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xf3da1b3820e672ac4f426d261b688486a9a5e27e655e055146e655ef6703736f |
| 41 / 34 | 2026-10-28T13:08:13.586271077Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E3 x1; E7 x4. Final fulfilled. | https://debug.barn.cow.fi/order/0x15ae6c967015c5c548dae951e3699bc99859e3ad8547f8edf0490b244785a528 |
| 42 / 35 | 2026-10-28T13:08:12.564099908Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x5. Final fulfilled. | https://debug.barn.cow.fi/order/0xc9c4843a1a9f2d12b4fc7afdd7af114020540cd85d3feeef4a557d44a04cee0c |
| 43 / 36 | 2026-10-28T13:08:17.604480351Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x3. Final fulfilled. | https://debug.barn.cow.fi/order/0x1c48414e6fded78ec4b85e5cef03da9006c620472419b24ebaf81e90a6e02886 |
| 44 / 29 | 2026-10-28T13:10:37.731081259Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x613f0d5ea88046353e08b3c11739fa9ffef0b7013a30f46be9dba770c9e96685 |
| 45 / 30 | 2026-10-28T13:10:37.73114652Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x2. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xb481b9bbfa6bce78c290a67a27a133f501b89c1809a36d1852f169cd71c0a559 |
| 46 / 31 | 2026-10-28T13:10:37.73110215Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x84e87cda34d274b116409de6dd5561e0bad3a1bc837f71aa247e736872c1bec6 |
| 47 / 32 | 2026-10-28T13:10:47.69372082Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x373b892a5ecdcd638e182a71310800d94b97f02345bcf645d01ce1a02efdddf8 |
| 48 / 33 | 2026-10-28T13:10:37.73109392Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x7b5401711d2f481d9e55222a9a3638003320d1615fe84756968d901374b10abd |
| 49 / 34 | 2026-10-28T13:09:52.766694501Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x7. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x8cc2cd1d6802c8ff4bfe3ddf07fceb17c3ce12c9ee683399625149f55b9ae3da |
| 50 / 35 | 2026-10-28T13:10:37.731087889Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x6a7144948cd76566d1b104b4e26b12ad370e1dd49c57cc02661eac0f76d66012 |
| 51 / 36 | 2026-10-28T13:09:43.558Z | Sell 0.004 SOL to USDC (self) | main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xa9b3e94abe08de1de03b6d663d083301ea08bbf3daf910caf06642ce17623c5b |
| 52 / 37 | 2026-10-28T13:09:52.766700671Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x6. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x8ebbb48a0634683e0a80b6f3ce3b1a5ff30366bce76d730c1373ab2aa2d34cee |
| 53 / 38 | 2026-10-28T13:09:52.766671271Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x7. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x27848e5f351afd111be58a194d0f20e1c7e7708fa5dd86426e0300a69f7754e5 |
| 54 / 39 | 2026-10-28T13:09:52.76665106Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x7. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x0463a662ceda92dcaa15221e5618180285ee23cd0d31fc42c9c4c4d2587e8029 |
| 55 / 40 | 2026-10-28T13:09:48.78987478Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E4 x1; E7 x5. Final fulfilled. | https://debug.barn.cow.fi/order/0x55ff29b6c97401fda9949dbc6ed208e483167cbe8915690b2843767470a8e6c0 |
| 56 / 41 | 2026-10-28T13:09:52.766708501Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x6. Final fulfilled. | https://debug.barn.cow.fi/order/0x98730fa0cea149fdf1f6fa3376af28eccd8d8218dfa36d049cf9b98aa269247f |
| 57 / 42 | 2026-10-28T13:09:52.766664131Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E3 x2; E7 x7. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x1e029bea0cef135452309e3b1d7be4b2ddeea0a2946c80e4a0d128e305ae1369 |
| 58 / 43 | 2026-10-28T13:09:52.766686061Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E4 x1; E7 x5. Final fulfilled. | https://debug.barn.cow.fi/order/0x86b6fc1cc7196bddf202644528cb66e9c9ed93ee7ce6eb762fd350bebf209bce |
| 59 / 44 | 2026-10-28T13:09:52.766714691Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E3 x1; E7 x6. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xa6846b5b2240b938ab9be3716d5a027d434c9be0b627bdf08c10d0a171215899 |
| 60 / 29 | 2026-10-28T13:12:02.877109303Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x2eb6844ac0698f725df8768adbc44fb7139878b371a37f2b2025017fc9e355b1 |
| 61 / 30 | 2026-10-28T13:12:02.877166274Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x74cc952e7b8ea30d2861b4c803224f075cff86f22b4a14a52b3cc0e80e70e7bf |
| 62 / 31 | 2026-10-28T13:12:02.877136563Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x5c7b8525507cc141fb20e0a10d218773a798463993624c8cdb7339d28e79b6ab |
| 63 / 32 | 2026-10-28T13:11:52.88508085Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x6. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xe3db2dc324246ced7f2a4fcef3d39c3adfd90f0ec0e043ac1788cc1f678bcbef |
| 64 / 33 | 2026-10-28T13:12:02.877151283Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x701e39994cc161f5e3d78143250f11bbe11222444f0f47f459882b12b009015c |
| 65 / 34 | 2026-10-28T13:12:02.877142703Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x6c40cef0f45dc8c45cf36e797a30f271edf2deaa8fa97f8f82d994a34413f0bb |
| 66 / 35 | 2026-10-28T13:12:02.877093033Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x0c87e69241cba9f16da05493375209f3a25f1d3a3cb47cc08128443c2abbbb40 |
| 67 / 36 | 2026-10-28T13:12:02.877122453Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x5165c55b93210348c8f8bac492032dc9242b1cff8780b5ec79258525033022fa |
| 68 / 37 | 2026-10-28T13:12:02.877181394Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xa6ff999a440de94b2dc9093de23bb75f3b13c570277f32cfc41aac8af7443924 |
| 69 / 38 | 2026-10-28T13:12:02.877221294Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xfa9aa8462ca6ce7c7eb7a8bf374252cb3dd29a055cbb5b5587da48c254d4cab3 |
| 70 / 39 | 2026-10-28T13:12:07.830802001Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xbe2a2fad18e6c062725cbed7b7aeaa004cc12046df6558955e741d994d4a6b91 |
| 71 / 40 | 2026-10-28T13:12:02.877101993Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x150bb9c2699ee8c4c1573ec2b8896c896f1ac4a65520317858a11214d65eec51 |
| 72 / 41 | 2026-10-28T13:12:02.877075453Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x026f423845bff4d5d3e5d61c2c427273a5cf6dcfa5f1f9b821822d9e08cd2d70 |
| 73 / 42 | 2026-10-28T13:12:12.851377203Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x2. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xa06d609e9988591577686724aca7a97d43e40b97306c6ad37c8c8081d7ee591f |
| 74 / 43 | 2026-10-28T13:11:52.88502984Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x2. Final fulfilled. | https://debug.barn.cow.fi/order/0x022e01c095c66898af9675a4982195bcfe259d7c54c7023274d597665ba1cace |
| 75 / 44 | 2026-10-28T13:11:17.72564305Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x5873d2bdfe5a0b0a61086acdf2fdab887005f3f8fe82efc6bf77c4b1d4f9c2ce |
| 76 / 45 | 2026-10-28T13:11:52.88506775Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xa81f5af664d071245e9a9ec2ad9bd7a3adb1ce6b2f49ce8872641346136e85af |
| 77 / 46 | 2026-10-28T13:11:52.88506154Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x71f1e869220ec3b86e12bd1b8605f42e1706f95aea9a5a44215f03a776dc0d0f |
| 78 / 47 | 2026-10-28T13:11:52.88505222Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x7. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x427754530ab6258a633614e87eb95d38be1747f5d9cafbb9f10900ca6e567b54 |
| 79 / 48 | 2026-10-28T13:11:17.72562405Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E3 x1; E7 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0x0dcb7fefa0490a4f2722b59f2472cf82919d2ea11f5a2455f8bfcaf0e3a4d613 |
| 80 / 49 | 2026-10-28T13:11:52.88504558Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x0a4a19024661bc0742a28078075f067f6375727034a1864e40c59a06def0d701 |
| 81 / 50 | 2026-10-28T13:11:52.88507522Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xc97acf3b7fd06c77d2230c85e77be7df38c393da601222bd8e52158650753281 |
| 83 / 52 | 2026-10-28T13:11:17.725817901Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E3 x4; E7 x4. Final fulfilled. | https://debug.barn.cow.fi/order/0xee8916720760d31e28ab950ba181b475945c416f6f3caac6143bfe44a0594772 |
| 84 / 29 | 2026-10-28T13:12:47.78256222Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x2. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xa0088de53e0a60a58b2511517de91b0dd32d859670b29765936f0fc10e8d6ded |
| 85 / 30 | 2026-10-28T13:12:47.7825408Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x60c6c61e66427c1025c3acf5b05b147313b7e0cc6ad743027c73d9a879f386e6 |
| 86 / 31 | 2026-10-28T13:12:58.045729379Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x9244f6a42aef0dee28b59f4de6448e9f48c481085fb58b0b4c527b7c8c707835 |
| 87 / 32 | 2026-10-28T13:12:58.04581441Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xf6e52b578682862421a220748a53f5ee532fff6465a4cdcb24dbf0bf02a83987 |
| 88 / 33 | 2026-10-28T13:12:58.045696709Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x63be864636e6cd267d1fc3ead49c6b0d82aa0eb77965a5b7de32be5f202c79f9 |
| 89 / 34 | 2026-10-28T13:12:47.78256817Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x2. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xab3d929ea551e09d9b2d05d19166fb1a654697a931da0c72388081a72a1b5189 |
| 90 / 35 | 2026-10-28T13:12:58.045626488Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x1404327ec760ddce12b571318af735fdc7c9412420e60e72895e550fbb4b46bb |
| 91 / 36 | 2026-10-28T13:12:58.045787119Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xbd23f61c75678d434c50d96e0493158ee604941df229f3c6ad3711b32753de72 |
| 92 / 37 | 2026-10-28T13:12:58.045763489Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xb609168fea34da9605658ec1d610e1b1491e831811e045045bb7ef56a4c2d454 |
| 93 / 38 | 2026-10-28T13:12:58.045607118Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x02563771b290b6850d4f9f6b1d74d49943a6e1ed4969874878ad8c2451fdadbd |
| 94 / 39 | 2026-10-28T13:12:58.045675569Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x515b8e670c253f5ed922c2e4d27a889a3268476fd18d2b99b5fa0e33519f5bcd |
| 95 / 40 | 2026-10-28T13:12:47.782520129Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x2. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x412aec8935f514c9d7079ae02e2d7dd8e1a9d9c893708db37171b84a4858536c |
| 96 / 41 | 2026-10-28T13:12:58.045736819Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x9a7cb497a27afae3c8b2fea8d41231a5cce5f513ffa885a08c9a694725f019d6 |
| 97 / 42 | 2026-10-28T13:12:58.045638468Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x1b9ef69ddeb8c8c082976e9bb1708530a6add1ca45b3cf4c3385f6c237183bde |
| 98 / 43 | 2026-10-28T13:12:47.782528689Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x45765ec33259e269fed20e742604f776eae6f9142be03717962c3cbe6208a797 |
| 99 / 44 | 2026-10-28T13:12:47.78264793Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x2. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xfa37e233d6e2b458d528717b41533a270855ecc652131a03280e545f5013337e |
| 100 / 45 | 2026-10-28T13:12:58.045681949Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x56e864f09bd19dd0b70b451cff9f7c6c16ea5d1232aa1b0e2140cc8fd12f822b |
| 101 / 46 | 2026-10-28T13:12:58.045619808Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x0916dd0c4ba70955c54f3f87551e975d82e0669f9f568a5bd4a3717618bb83d9 |
| 102 / 47 | 2026-10-28T13:12:58.045710669Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x6fba18af7634c93c4f767b5f9c9a7f2b90dac292b29bfeafd767736cd328deee |
| 103 / 48 | 2026-10-28T13:12:58.045702979Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x696fa53e5a10fb98dd6efd384fd3077daa36b220391596d6851025fc0d091339 |
| 104 / 49 | 2026-10-28T13:12:58.045750049Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xa67951134fa16fd1b4222df001e08b21d868e408d35e2697e8af0e3be25f71fd |
| 105 / 50 | 2026-10-28T13:12:58.045769209Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xbc16b242482f92d3c97f3f04958165b80461cf888c029ccd594d8eae7f3bbcee |
| 106 / 51 | 2026-10-28T13:12:58.045801189Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xda454a7acb3fdf46aea330012b140c04fd0dbfa37e6f6df58cf15da48acffa9f |
| 107 / 52 | 2026-10-28T13:12:47.78261725Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E7 x2. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xca2a021c481be0b0f47fba205221911b22de8c55dd13877ae1c9c5b61b75a60f |
| 108 / 53 | 2026-10-28T13:12:47.78255355Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x896e0118dfa1200a682144c275fa7cc4cbb57ba3e995a56f043bd4aba173b02a |
| 109 / 54 | 2026-10-28T13:12:47.78254756Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E7 x2. Final fulfilled. | https://debug.barn.cow.fi/order/0x7a43db13312ad2075a1878073a5350a2e1eef4a5b771d82365a71ec1b2ba4d4c |
| 110 / 55 | 2026-10-28T13:12:47.782499639Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E7 x4; E8 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0x1790c6339a6bfa023e665ecec998c3fbe50acec7347f4adfe1079426fc9b644b |
| 111 / 56 | 2026-10-28T13:12:47.78264117Z | Sell 0.004 SOL to USDC (self) | Ownership unknown: E3 x2; E7 x3; E8 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0xf6b76a87d4ff5a706d0b72693b9f56c6b6321a0bd81b06a411744ae43004bd1c |
| 112 / 57 | 2026-10-28T13:12:47.782512809Z | Sell 0.0025 SOL to USDC (self) | Ownership unknown: E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x2764f0d29ac45d1705b22ec5a88617be98cee679062acfd8e7d02270315e3e54 |
| 113 / 58 | 2026-10-28T13:12:47.78261117Z | Sell 0.003 SOL to USDC (self) | Ownership unknown: E4 x1; E7 x4. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xbce1487af8a51ca4cc8e09b4c71d81054b8e2edf343c634228e4bbd64614f631 |
| 114 / 59 | 2026-10-28T13:12:47.782534959Z | Sell 0.0035 SOL to USDC (self) | Ownership unknown: E3 x2; E7 x5. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x4b3e4b827ea65e23d46220d6fde2ac7c21aaadacd716f05512fe22c87cd03c37 |

Cleanup is excluded from all main totals. Failed attempts and cancelled cleanup orders are retained below; a later fill does not erase an earlier failed attempt.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| - / 31 | 2026-10-28T13:14:27.69169752Z | Sell 353248 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E5 x2; E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x0fe0272be2087d9fdec1fba6676f409d55ef72326b2aa9c51fd01cd0d3e6dc50 |
| - / 32 | 2026-10-28T13:14:15.337916123Z | Sell 403909 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E2 x3; E5 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0x716e7b93db0f939018afae38d47d8c4de9ed3875365bd2b06fc58d5549060db7 |
| - / 34 | 2026-10-28T13:14:42.700800158Z | Sell 302714 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E5 x2. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x26cb7caf04ef0e07d25b3fac2761ad7a8106014afe1e5265593cb072c3c5a107 |
| - / 35 | 2026-10-28T13:14:25.350831978Z | Sell 353469 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E2 x1; E5 x1; E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xf1a86f4efd95376ab5d828ecf6aca1d1127acf6bcef5483430c4d5f5a6a6646e |
| - / 36 | 2026-10-28T13:15:07.663012219Z | Sell 403555 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E5 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x5014579ff7a52bc18059bd8aae863c8a6d01091dc0e99fa2861bb02899aff1e1 |
| - / 29 | 2026-10-28T13:14:27.691809601Z | Sell 251954 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E5 x3; E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x7ff1072280cd224a14c7432179f5a29a23e21b1ebfa79084ea12d9d38300d7e2 |
| - / 41 | 2026-10-28T13:14:42.700793658Z | Sell 251968 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E2 x1; E3 x1; E5 x3; E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x1cbc3a37d74446418c1684a721a5d9cb4dfc52aef81cdab73ed83fdcb1121957 |
| - / 43 | 2026-10-28T13:14:47.665274664Z | Sell 706573 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E5 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0xd517a74374fc52130b778ee5421b61f2f938bcc1deac2f0c917330a7958c4d3f |
| - / 52 | 2026-10-28T13:15:22.658796009Z | Sell 404134 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E5 x3. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x43df56b87146341754d400ef3112245703c9792bafcab84322a650a8f51beb65 |
| - / 54 | 2026-10-28T13:15:22.658819509Z | Sell 276348 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E2 x1; E3 x1; E5 x8. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x80266a5f8cb8c1402bf0c339b324016cc37b44cd7d24f22b442095c74c718890 |
| - / 55 | 2026-10-28T13:15:37.645757122Z | Sell 353452 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E2 x1; E3 x1; E5 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0x3d9fc84111684d7c7be49f52a7b27d6f97b81a0e4889d15a5911b37679f13e49 |
| - / 56 | 2026-10-28T13:15:52.636077673Z | Sell 402939 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E5 x6. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xd9726b5714b3aa26eb9fbd5619b9d25c856fce71d59eb8a8e0c933698cc8b181 |
| - / 60 | 2026-10-28T13:15:57.650149768Z | Sell 404202 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E2 x4; E5 x8. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0xe388b410a54423b7d7c8b87f88bf6fc8d0581ea8a51e53cf1ddad7b562dc973f |
| - / 36 | 2026-10-28T13:24:06.735849806Z | Sell 403555 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E3 x1; E5 x6; E7 x1. main timeout; Final cancelled. | https://debug.barn.cow.fi/order/0x85aed82e3448efbeee643c223ebc6dd169c77d634f8eda9a821d5c9d5665db09 |
| - / 52 | 2026-10-28T13:24:06.735836436Z | Sell 404134 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E2 x1; E5 x4. Final fulfilled. | https://debug.barn.cow.fi/order/0x429fffb8d75cd96a5351721260790cfcd1b1c5f7ee8f5ddd298d7448adcc4354 |
| - / 60 | 2026-10-28T13:24:12.779308404Z | Sell 404202 atoms USDC to SOL (native) (cleanup) | Ownership unknown: E2 x1. Final fulfilled. | https://debug.barn.cow.fi/order/0x5e2a3dee3cb8c78f0166d5fa74bdf9efda14390acb7683d66966928d2428494f |

Exact error key for the attempt counts above:
- `E1`: `Reverted { err: InstructionError(1, Custom(15)) }`.
- `E2`: `Reverted { err: InstructionError(5, Custom(1)) }`.
- `E3`: `Reverted { err: InstructionError(6, Custom(1)) }`.
- `E4`: `Reverted { err: InstructionError(7, Custom(1)) }`.
- `E5`: `SimulationFailed { err: UiTransactionError(InstructionError(5, Custom(1))), program_error: None }`.
- `E7`: `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(1))), program_error: None }`.
- `E8`: `SimulationFailed { err: UiTransactionError(InstructionError(6, Custom(1))), program_error: Some(ProgramError { program: TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA, code: 1, name: Some("InsufficientFunds") }) }`.

</details>

## 4. Opposing orders

**Inconclusive.** No opposite main orders were placed; 9 flows hit the service outage and 6 setup quotes failed earlier.

<details>
<summary>Order evidence and metrics</summary>

Filled / scheduled: **0/15**. Placed main orders: **0**. Total transactions: **0**. Median / longest fill: unavailable (0 fills).

**Ownership unknown - exact buys returned no usable quote.** Nine scheduled exact buys failed before placement: 3 standard requests for exactly 0.25 USDC/USDT and 6 explicit setup requests for 1.1-3.2 USDC/USDT. The saved API error is `404 Not Found: NoLiquidity: no route found`; this identifies the stage, not absent market liquidity or permanent unsupported tokens. Original API records show Arc's driver response `{"kind":"QuotingFailed","description":"No valid quote found"}`. Standard request IDs are `67471da6df0d00e153032e541a5d2220` at 13:01:09.961 (JUP to exactly 0.25 USDC), `230c026ba9dea5284fd02891ef3423c4` at 13:01:16.256 (SOL to exactly 0.25 USDT) and `04d9a4e36966632935170a17ea13858a` at 13:01:22.049 (SOL to exactly 0.25 USDC). Driver requests 1475, 1480 and 1483 called Arc immediately before these records. The exact engine response and first rejected field are unavailable. A shared exact-output conversion or validation issue is a plausible explanation, with medium confidence in the request-pattern association and low confidence in its cause: fixed-input sells on SOL/USDC and SOL/USDT filled, but amount and sponsorship differ. CoW should first recover the original response for request 1475 and compare requested output 250000 atoms, fee conversion and validation; a nonempty engine route rejected by validation supports an adapter fix, while an empty response moves the check to provider routing. No request was replayed and no order exists for these failures.

The 6 explicit setup rows count in the 15 scheduled main flows. None placed; 5 attempted automatic sell-token acquisitions and hit service errors. No shared opposite auction or direct-match transaction exists, so there is no evidence for a solver matching failure. No successful example exists in this scenario.

The test service blocked placement for the remaining flows. This is a test limitation; service errors are excluded from this report.

| Scenario row / trader | UTC timestamp | Trade | Error(s) and final outcome | Debug tool URL |
| --- | --- | --- | --- | --- |
| 116 / 62 | 2026-10-28T13:17:19.140Z | Buy SOL to exactly 2.6 USDC (sponsored) | Ownership unknown: quote failed: 404 Not Found: NoLiquidity: no route found. No main order created. | No order ID: failed before main placement. |
| 117 / 64 | 2026-10-28T13:17:19.327Z | Buy SOL to exactly 1.3 USDC (sponsored) | Ownership unknown: quote failed: 404 Not Found: NoLiquidity: no route found. No main order created. | No order ID: failed before main placement. |
| 118 / 65 | 2026-10-28T13:17:19.402Z | Buy SOL to exactly 3.1 USDC (sponsored) | Ownership unknown: quote failed: 404 Not Found: NoLiquidity: no route found. No main order created. | No order ID: failed before main placement. |
| 119 / 66 | 2026-10-28T13:17:19.690Z | Buy SOL to exactly 3.1 USDT (sponsored) | Ownership unknown: quote failed: 404 Not Found: NoLiquidity: no route found. No main order created. | No order ID: failed before main placement. |
| 120 / 67 | 2026-10-28T13:17:19.759Z | Buy SOL to exactly 1.1 USDT (sponsored) | Ownership unknown: quote failed: 404 Not Found: NoLiquidity: no route found. No main order created. | No order ID: failed before main placement. |
| 121 / 68 | 2026-10-28T13:17:20.002Z | Buy SOL to exactly 3.2 USDC (sponsored) | Ownership unknown: quote failed: 404 Not Found: NoLiquidity: no route found. No main order created. | No order ID: failed before main placement. |

**Ownership unknown - cleanup quotes failed before an order existed.** Saved leftover text below is truncated by the simulator; the complete provider response and exact mint for `AW1vmJ...` were not recovered. PYUSD is verified as `2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo`. These are separate from planned main trades. Cause unknown; CoW should recover the original quote response for the listed UTC request and compare exact amount/kind before assigning solver ownership.
- Trader 67, 2026-10-28T13:25:25.224Z: 1000 AW1vmJ... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route). No order ID for the rejected quote.

</details>

## 5. Token coverage

**Inconclusive.** All 52 token flows were blocked by 503 service errors, so token support was not tested.

<details>
<summary>Order evidence and metrics</summary>

Filled / scheduled: **0/52**. Placed main orders: **0**. Total transactions: **0**. Median / longest fill: unavailable (0 fills).

The test service blocked placement for the remaining flows. This is a test limitation; service errors are excluded from this report.

Verified token-section fixed-input sells completed: **none**. Verified token-section exact-output buys completed: **none**. No expected rejection was exercised. No successful example exists in this scenario.

No main orders or solver-owned failure records are available for this scenario.

**Ownership unknown - cleanup quotes failed before an order existed.** Saved leftover text below is truncated by the simulator; the complete provider response and exact mint for `AW1vmJ...` were not recovered. PYUSD is verified as `2b1kV6DkPAnxd5ixfnxCpjxmKwqjjaYmCZfHsFu24GXo`. These are separate from planned main trades. Cause unknown; CoW should recover the original quote response for the listed UTC request and compare exact amount/kind before assigning solver ownership.
- Trader 77, 2026-10-28T13:20:47.042Z: 0.464 2b1kV6... (quote failed: Internal Server Error {"errorType":"InternalServerError","de). No order ID for the rejected quote.
- Trader 77, 2026-10-28T13:25:34.593Z: 0.464 2b1kV6... (quote failed: Not Found {"errorType":"NoLiquidity","description":"no route). No order ID for the rejected quote.

</details>
