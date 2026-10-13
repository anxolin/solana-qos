# Jupiter focused validation

Use [jupiter-composite.json](../solver-validation/jupiter-composite.json) for **197 main rows, with no bursts and no full token-coverage sweep**. It combines standard-pair and Token-2022 pair scenarios, a reduced xStock scenario, and focused account, payout, precision, general-asset and isolation checks. Production (`prod`) is the default. The `solver` field labels the report; it does not select Jupiter. Use competition and settlement logs to confirm Jupiter handled the orders. Allow about 90–150 minutes including cleanup; slow fills and quote failures can extend this. No live trades were placed during preparation.

The Token-2022 pair file keeps all ten rows. The xStock file keeps all 42 inbound sells and 41 exact-output buys, with three selected sponsor-paid returns; 38 redundant returns were removed. Remaining trader IDs, order kinds, payment modes and scheduled times are preserved. Amounts stay small: SOL inputs are 0.0025 SOL, buys target about 0.0025 SOL of raw tokens, and return/pair sells target about 60% of that. Other callers of those files now use these smaller amounts too. The dated source verdicts describe earlier observations, not permanent support expectations. Other core files retain 0.0025–0.005 SOL inputs, 0.25 USDC targets and adjacent-unit precision amounts. Requote fixed targets before a later run.

## Run order and budget

| Scenario | Main | Possible acquisitions | Cleanup | Estimated creations | Creation allowance before refunds |
|---|---:|---:|---:|---:|---:|
| [Standard pairs](../solver-validation/solver-standard-pairs.csv) | 6 | 2 | 4 | 12 | 0.036 SOL |
| [Receiving-account costs](receiving-account-costs.csv) | 16 | 0 | 8 | 24 | 0.072 SOL |
| [Native/wrapped payouts](native-vs-wrapped-payouts.csv) | 12 | 8 | 4 | 24 | 0.072 SOL |
| [Amount precision](amount-precision.csv) | 12 | 6 | 8 | 26 | 0.078 SOL |
| [Whole Token-2022 pairs](../token-2022/token-2022-to-token-2022.csv) | 10 | 5 | 10 | 25 | 0.075 SOL |
| [General asset gaps](token-coverage-gaps.csv) | 43 | 0 | 22 | 65 | 0.195 SOL |
| [xStocks with three return probes](../token-2022/xstocks.csv) | 86 | 3 | 42 | 131 | 0.393 SOL |
| [Failure isolation](failure-isolation.csv) | 12 | 0 | 8 | 20 | 0.060 SOL |

Total: **197 main rows + 24 possible acquisitions + 106 cleanup orders = 327 estimated creations, or 0.981 SOL**, at the repository's 0.003 SOL planning rate before refunds. Acquisitions are budgeted conservatively even when earlier fills supply the tokens. Three sponsor-paid xStock returns remain: SPYx (ETF control), NFLXx (display multiplier 10) and PLTRx (observed reverse-route failure). Other reverse coverage comes from actual cleanup sales.

Funding is **0.08 SOL per trader, capped at 1.76 SOL per section**. The largest section has 22 traders; xStocks has 14 traders and needs at most 1.12 SOL. Cleanup returns funds before the next section. Keep extra SOL for fees, trading losses, account rent and failed cleanup; the funding cap is not total expenditure. Check sponsor and driver balances too.

The creation cap is **0.981 SOL** and checks a planning estimate rather than actual cumulative spending. Extra cleanup attempts, fallback submissions and pre-existing holdings can cost more. Main retries are disabled, validity is 300 seconds, timeout is 210 seconds with cancellation enabled, and client limits are 2 quotes/s, 5 API calls/s and 8 RPC calls/s. The runner drains unresolved orders, cleans up and takes a 60-second break before the next section.

## Prepare and run

From the repository root:

```sh
cd sim
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/jupiter-composite.json --env prod --preview
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/jupiter-composite.json --env prod --dry-run
```

`--env prod` selects production and overrides the JSON environment; the runner already supports this flag. Preview is offline. Dry-run reads balances and quotes without funding, trading or creating a session. It does not simulate future account states, prove auction membership, or validate settlement. Its acquisition estimate uses exact-output quotes while live acquisition sells SOL; distinguish an acquisition estimate failure from failure of the main pair. Review each positive row's quote, amount and funding requirement. Historical probe failures are classified separately from positive-control failures. Repeat the production dry-run before a later live run because prices and route support can change.

Before interpreting account-state results, inspect the relevant receiving ATAs and any leftover funds. Composite wallet ranges are: baseline 1–3; receiving-account costs 4–11; native payouts 12–15; precision 16–21; Token-2022 pairs 22–26; general assets 27–48; xStocks 49–62; failure isolation 63–70. A composite gives different sections different wallets, but a new run reuses the same derived addresses. It does not guarantee empty wallets or absent ATAs. `pnpm sim wallets --traders 1-70` helps inspect balances; confirm ATA existence using RPC/account inspection because a zero token balance does not prove the account is absent.

After the checks, the live command asks for funding confirmation:

```sh
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/jupiter-composite.json --env prod
```

One session and combined report are produced. Use the saved journal, orders and backend logs to evaluate the checks below; the automatic completion percentage alone is insufficient. Continue an interrupted run with `pnpm sim resume-session <session-name>`. If final probe cleanup cannot finish, inspect retained assets and outstanding orders before using `--defer-cleanup`; deferred cleanup is not recovered money.

## What each scenario establishes

### Token-2022, xStocks and general asset gaps

The full [Token-2022 pair scenario](../token-2022/token-2022-to-token-2022.csv) tests five pairs with Token-2022 on both transfer legs; five setup sells are included in its ten main rows. The reduced [xStock scenario](../token-2022/xstocks.csv) contains 42 mints: 42 inbound sells, 41 exact-output buys and three sponsor-paid returns. TCENTx has only an inbound sell in the existing source; its exact-output buy is not covered. Cleanup establishes return coverage only where it succeeds. Retain quote failures and report them separately from settlement failures.

[General asset gaps](token-coverage-gaps.csv) adds 20 sell/buy pairs, one missing CATE buy and a PAXG sell/buy pair. It covers JitoSOL, mSOL, JupSOL, INF, hyloSOL, PSOL, cbBTC, ETH, BNB, USDe, EURC, EUROP, USDY, JLP, XAUt0, PAXG and five meme-token controls. Each pair shares a wallet; cleanup supplies the return sell. This adapts 20 of 55 token-coverage rows and 22 buys from the large buy sweep, both below the user's 50% threshold for reusing a whole scenario. Notes record source row IDs. No runner changes or row-filtering config are needed.

The full token-coverage file is excluded: 12 of its mints repeat the pair/stock files and three rows are fee-token rejection probes. Four other issuer mints (USDv, SKHY, MU and SPCX) add no new extension configurations here; BONK already appears in precision checks. SPYx and CRCLx remain in both reused files because the two-leg transfers are a different condition. Active fee-on-transfer mints are excluded. USDG, PYUSD, EUROP and PAXG had zero older and newer transfer-fee configurations when checked.

| Extension/configuration | Examples | What is exercised |
|---|---|---|
| Metadata pointer and token metadata | ANSEM, PAID, CATE, e/acc | Quotes and normal transfers with Token-2022 metadata |
| Mint close authority and permanent delegate | USDG, PYUSD, CASH, PAXG; delegates also on xStocks | Transfers while authorities exist; no closing or clawback |
| Zero transfer-fee config | USDG, PYUSD, EUROP, PAXG | Transfers with zero fees; recheck active and scheduled fee state |
| Confidential transfer mint and fee config | USDG, PYUSD, PAXG; confidential mint also on xStocks | Public transfers only |
| Transfer hook unset | PUMP, stablecoins, xStocks | Transfers without an active hook program |
| Default account state initialized | CASH, xStocks | Immediately usable receiving accounts |
| Scaled UI amounts | xStocks, including NFLXx with active multiplier 10 | Raw signed/executed accounting despite scaled displays |
| Pausable, running | EUROP, xStocks | Transfers while running |

This tests liquid examples of those configurations, **not all extension behavior**. Active hooks, paused/frozen states, encrypted transfers, required memos and CPI guard need controlled fixtures. Interest-bearing, non-transferable and group/member configurations are not exercised here. Inspect actual account programs, transfer instructions, raw amounts and routes before calling an extension covered.

Prices, decimals and mint states were read live on October 13, 2026 around 08:36 UTC. Resizing multiplies displayed-token price by the active scaled-UI multiplier to get price per raw decimal token unit, avoiding oversized split-adjusted stock trades. CSV amounts are raw decimal units; do not apply the display multiplier twice. Requote fixed targets before a later run because prices, multipliers, fee states and routes can change.

### Receiving-account costs

USDC is the classic SPL control; USDG is the zero-fee Token-2022 control, pinned by mint rather than a potentially ambiguous symbol. Each token has a sponsored sell, a self-paid sell, a sponsored exact-output buy and a self-paid exact-output buy, each repeated identically on the same wallet. All rows remain in the suite, including USDG exact-output buys that currently fail production quotes. Record these failures as unresolved quote-path results, not successful rent tests or permanent token restrictions. Starts are staggered by 30 seconds so load does not explain an account-cost difference. The repeat starts 330 seconds after the first row's scheduled start; rows on the same wallet also wait for their preceding flow.

For each pair, verify that the first receiving ATA was absent, the first order filled, and that ATA still exists before the repeat. Otherwise the cold/warm comparison is inconclusive. Inspect actual creation instructions, rent transfers, payer and quote fees. Charge new account rent once; a repeat must not create a second account or spend rent again. Compare fee treatment with who actually paid, rather than attributing all quote/output changes to rent. Fresh routes and prices can differ between the two orders.

The client inserts receiving-ATA creation into the order-creation transaction ([orders.ts](../../sim/src/orders.ts#L269)). This scenario measures accounting in that client flow. It does **not** establish that Jupiter or its driver can create a missing receiving account during settlement, or that a solver-funded account cost is covered by its fees. Those require a separate supported order-creation flow and payer/fee evidence. USDG's extensions can change; recheck that its transfer fee is still zero and record quote results for both order kinds.

### Native versus wrapped payouts

Four wallets first sell 0.005 SOL for USDC. Each then sells 0.2 USDC for its assigned native SOL or wSOL output, followed by an exact-output buy of 0.002 SOL or wSOL. Both payment modes are represented. Compare native lamport receipts with wSOL token receipts before cleanup unwraps or closes accounts. Separate creation/settlement fees and rent from the intended native receipt; a wallet's total SOL delta is not the executed output amount.

Record requested and actual payment mode for every sponsored row. The runner can fall back to self-paid native-SOL orders ([orders.ts](../../sim/src/orders.ts#L228)); a `forcedSelf` event makes gasless coverage inconclusive even if the order fills. Creation failures, simulation failures and payout failures are distinct outcomes. Explicit wSOL **input** tests are excluded because this client wraps fresh SOL for both SOL and wSOL sell inputs; it would not establish correct spending of a pre-existing wSOL balance.

### Amount precision

Twelve self-paid rows test sells and exact-output buys at small positive amounts differing by one raw unit. SOL uses 9 decimals, USDC 6 and BONK 5. Self-paid placement removes sponsored-expiry and fallback differences from this comparison. USDC sells to USDT; SOL and BONK sells receive USDC. Two USDC-funded native SOL buys can require separate acquisition orders; those are budgeted.

Check the raw signed amount against the intended integer, the signed minimum buy amount or maximum sell amount, and executed amounts and fees against on-chain token/lamport movements. A sell's executed receipts must meet its signed limit and a buy's spending must stay within its signed limit, using the deployed protocol's fee accounting. Do not demand a one-unit difference in the other token's output: quotes, routes and fees can change. The client permits a 5% short-balance sell adjustment; any `amount_capped` event makes the requested exact-amount check inconclusive. This suite does not exhaustively test zero, sub-unit rounding or huge numeric inputs; those belong in quote-only or local validation tests.

### Failure isolation

Two healthy controls run first. At 90 seconds, the XMR and LIKE probes start alongside two healthy controls; two more healthy controls start at 105 seconds. Four late controls start at 420 seconds. Healthy orders include both fixed-input sells and exact-output buys in both payment modes. Distinct wallets let probes wait without blocking healthy rows inside the client.

XMR is pinned to `WXMRyRZhsa19ety5erZhHg4N3xj3EVN92u94422teJp`; LIKE to `CJMihkPYswa3k6az9SUbepjKnkJQ6KWpGG5p9qW9n7NV`. They are drawn from the [existing missing-price sweep](../experiments/no-coingecko-price.csv), which identified tokens with quotes but no CoinGecko price. The new condition is coexistence with healthy orders, rather than another token-coverage sweep. Their current native-price availability and failure stage must be checked. Historical SI/DIVI fee-token probes were excluded because current staging rejected them before placement.

Classify each probe at its actual failing stage. An accepted probe must remain problematic while healthy orders share its actual auction to establish auction-level isolation. Healthy orders should continue quoting and settling without repeatedly failing because of that probe. If a probe is quote-rejected or autopilot filters it before an auction, only pipeline filtering/isolation was exercised. If it fills normally, the historical blocker was not reproduced. Neither outcome proves auction isolation. Scheduled times do not prove common auction membership; check placed order IDs and auction logs. The late controls establish recovery only if probes are confirmed final before those controls are placed; otherwise they remain concurrent controls. Do not call every `NoLiquidity` response a liquidity shortage or every quote error a rate limit without the underlying service response.

This scenario runs last because probe tokens may be hard to sell during cleanup. Unexpected probe fills must still satisfy signed limits. Report any retained balances and their actual cleanup status.

## Optional xStocks market-window comparison

[jupiter-xstocks-market-window.json](../solver-validation/jupiter-xstocks-market-window.json) reuses the **same reduced 86-row xStock scenario** for matched runs during and outside regular US stock-market hours. It has the same amounts/options as the composite, a 1.12 SOL funding cap and a 0.393 SOL creation allowance per run. No separate three-stock CSV is needed. Two runs add 172 main rows and 0.786 SOL of estimated creation allowance before refunds, separately from the 197-row core.

Match versions, raw amounts, options and starting account state across distinct sessions. Record each order's actual placement and settlement window. A single composite run cannot establish a market-hours difference. On October 13, 2026, the regular US stock session is 15:30–22:00 in Belgrade; check exchange holidays and daylight-saving changes for later dates. Allow 30–60 minutes per window, with more time for difficult cleanup. xStocks can trade outside regular stock hours; compare outcomes without assuming off-hours trades must fail.

From `sim/`, prepare each run:

```sh
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/jupiter-xstocks-market-window.json --env prod --preview
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/jupiter-xstocks-market-window.json --env prod --dry-run
```

After reviewing quotes and balances, the live command asks for funding confirmation:

```sh
pnpm sim simulate-composite-scenario ../scenarios/solver-validation/jupiter-xstocks-market-window.json --env prod --session <distinct-market-window-session>
```

This standalone config uses wallets 1–14; do not run it concurrently with the core composite. Check account state and balances before each run. Keep quote failures in both windows and record their full responses separately from settlement/cleanup outcomes.

## Test quality review

This suite schedules orders and collects evidence. Its completion percentage counts trade flows; it does not automatically assert rent accounting, raw precision, payout representation, failure isolation or Jupiter attribution. Nine main rows are explicit preparation (five Token-2022 inputs and four USDC inputs), not nine extra feature checks. Judge each condition using the evidence below.

| Quality finding | Evidence and consequence | Recommended treatment |
|---|---|---|
| Failure isolation is still exploratory | XMR/LIKE were historical missing-price candidates. All 12 rows quoted in both production dry-runs; no current troublesome auction has been established. Healthy fills alone cannot prove isolation. | Lowest-confidence section. Run as exploration or move outside the core until a current blocker and actual shared auction can be verified. Preserve its CSV for that investigation. |
| One cold-account case cannot currently start cold | Read-only RPC check at 09:00 UTC found seven receiving accounts absent, but trader 7 already had a USDC account holding 391632 raw units (0.391632 USDC). This is the self-paid exact-output account-cost case. Repeating it would be warm/warm. | Use fresh test wallets before claiming cold/warm coverage. The composite currently reuses derived wallets and has no starting-wallet offset. Do not close or sell pre-existing holdings merely to manufacture a cold state. Cleanup would otherwise include those holdings. |
| Account-cost scope is narrower than the solver pricing goal | The client creates receiving accounts during placement. This cannot demonstrate driver-only account creation during settlement or correct pricing of a driver-paid account. Four USDG buy rows were quote-rejected, so two intended cold/warm comparisons are unexercised. Combined with the already-warm USDC account, only five of eight planned comparisons currently have both an absent initial account and a working quote path. | Keep as a conditional client/sponsor account-reuse check. Driver-cost pricing needs its own supported flow and payer/fee evidence; quote rejection remains a useful separate outcome. |
| Five meme-token pairs add weak incremental behavioral coverage | WIF, POPCAT, Fartcoin, MEW and BOME add ten mint/route rows, but their ordinary classic-token handling is already represented by baseline and BONK checks. Earlier quotes succeeded for all ten. | Useful for mint breadth, low priority for finding a new behavior. If trimming further, keep one representative or omit the ten rows; this does not add or remove a Token-2022 extension configuration. |
| Several useful checks become inconclusive without inspecting the journal/transactions | Native-SOL sponsorship can fall back to self-paid, precision sells can be capped to available balance, and cleanup can burn dust or retain tokens instead of selling. Another production solver can fill orders. | Keep the checks, but never count fallback as sponsored success, capped amounts as exact-request precision, burn/retention as reverse settlement, or another solver's fill as Jupiter execution. |

The xStock return reduction fixes a real duplicate: 38 additional partial sells were testing the same self-paid or sponsor-paid return pattern already represented elsewhere. Retained SPYx/NFLXx probes provide sponsor-paid reverse checks that cleanup cannot provide; PLTRx retains a concrete previously observed reverse-route failure and now a successful recovery quote. All previously failing inbound/exact-output requests remain. Fixed partial return amounts leave headroom but are not a requirement or a live 60% calculation.

Receiving-account checks need the first account absent, then the first fill successful and the account still present for the repeat. Precision checks need intended signed raw integers and executed amounts; changes in the other token's price are irrelevant to the one-unit comparison. Payout checks need lamport versus wSOL receipts before cleanup and the actual creation payment mode. Token-2022 pair checks need the five actual two-leg trades, not just their five SOL-input preparations. xStock/general-asset compatibility needs main settlement plus explicit cleanup outcomes per mint. These conditions make the cases useful; a generic green completion percentage does not.

## Coverage choices and evidence

The Token-2022 pair scenario keeps every row. The xStock scenario keeps every inbound/exact-output row and three selected returns, with smaller amounts. The focused gap file adds missing assets and order kinds without pulling in the full token sweep. Bursts and sustained load are excluded. Other repeated pairs are controls for account state, payout representation, adjacent-unit amounts or problematic-order coexistence.

Deterministic 429/timeouts, expired blockhashes, cancellation races, exact settlement byte boundaries and token account restrictions need controlled tooling or fixtures. They remain follow-up work. This suite does not drain a driver wallet or change issuer-controlled extensions.

Research sources:

1. [October 12 Smart Contract Sync notes](https://docs.google.com/document/d/1nntIsT7T836Ozd1MUjRE7gLYWDCsWbAoZAwyqypB_aE/edit), “Anxo: Proposal for this week”: prioritizes account-cost accounting, Jupiter stability and simulation checks.
2. [October 12 management-sync update](https://nomevlabs.slack.com/archives/C0980HAC78S/p1791814678529779): calls for Jupiter account-cost pricing and checking how small orders behave.
3. [October 9 error summary](https://nomevlabs.slack.com/archives/C0980HAC78S/p1791568118374189): identifies historical fee/slippage and missing-price problems. Current staging quote checks ruled out SI/DIVI for auction-isolation testing; the [existing missing-price sweep](../experiments/no-coingecko-price.csv) supplies the quoteable XMR/LIKE candidates.
4. [October 10 xStocks request](https://nomevlabs.slack.com/archives/C0980HAC78S/p1791628013533669): explicitly asks for comparisons during and outside stock-market hours.
5. [Client placement code](../../sim/src/orders.ts#L220) and [amount handling](../../sim/src/flow.ts#L140): establish native-SOL fallback, receiving-ATA creation and short-balance adjustments that limit conclusions.

Preparation checks on October 13, 2026: the original expanded suite passed TypeScript typecheck, mint/amount validation and production quote checks. After reducing returns, both updated production previews, preserved inbound/exact-output coverage and revised budget checks passed. The composite represents 77 non-SOL mints, including 52 Token-2022 mints and 42 xStocks, across 70 derived wallets. Current mint states and prices were read without transactions. No live orders, funding transfers or test sessions were created by preparation.

Updated production dry-run completed around 09:05 UTC: **147 of 197 rows passed their quote/acquisition flow check; 50 returned `404 Not Found: NoLiquidity: no route found`**. No section exceeded its spend-after-reserve budget. No funding, orders or sessions were created. Keep all failing requests; a dry-run failure can arise from either the main quote or an acquisition estimate and does not establish settlement behavior.

| Current section | Quote/acquisition checks passed | Failed |
|---|---:|---:|
| Standard pairs | 6 | 0 |
| Receiving-account costs | 12 | 4 |
| Native/wrapped payouts | 12 | 0 |
| Precision | 12 | 0 |
| Token-2022 pairs | 10 | 0 |
| General asset gaps | 40 | 3 |
| xStocks | 43 | 43 |
| Failure isolation | 12 | 0 |

The current 50 failing rows are four USDG buys, CATE/EUROP/PAXG buys, all 41 xStock buys, and the HOODx/TCENTx inbound sells. All three retained sponsor-paid return probes quoted successfully. PLTRx's return failed in the earlier run but recovered in this one; HOODx's inbound quote worked earlier but failed now. This is a changing route snapshot, not evidence of a permanent mint restriction. All requests remain included.

Before return reduction, 185 of 235 checks passed and 50 failed. Removing 38 successful return probes accounts for the smaller suite; changes in PLTRx/HOODx explain why the current failing row set differs while the failure count stays the same. The dry-run's acquisition estimates use exact-output quotes; live acquisitions sell SOL. Inspect the failing stage before calling a sell route unsupported. Successful Token-2022 pair quotes do not establish settlement, and quoteable historical isolation probes do not establish auction isolation.

Earlier production requests returned `HTTP 404` with `{"errorType":"NoLiquidity","description":"no route found"}` for USDG and some xStock buys. This means the production quoter reported no route for those requests; it does not mean a token/account is missing or prove a blanket Token-2022 restriction. The route-selection cause remains unconfirmed. Dry-run prints the status and backend details. Keep and compare these cases.

Quotes do not establish fills, auction isolation, rent accounting or cleanup. Save order IDs, actual placement times, requested/actual payment modes, signed/executed raw amounts, payer/rent transfers, auction participation and unmodified errors with the report. Judge failures against the stated check, rather than automatically calling them passes or solver defects.
