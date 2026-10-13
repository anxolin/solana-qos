---
name: solver-test-report
description: Combine completed Solana solver scenarios into a short Markdown report with checked evidence and changes since the previous report. Use for composite test reports or updates to an existing report.
---

# Solver test report

Explain what each scenario tested, what happened, and what needs attention. Write for solvers who cannot access internal logs. Make the report understandable on its own.

## Jupiter reports

For Jupiter, always produce only `{timestamp}_jupiter_solver_test_report_for_cow.md`. Keep it brief and include only errors: quote rejections, failed orders or attempts, cleanup failures and missing evidence needed to investigate them. Do not create a separate solver report or include successful scenarios, performance metrics or coverage summaries. Group repeated errors with counts and affected tokens or row numbers; keep exact errors, final outcomes and useful order links. State unknown ownership clearly. Aim for about 200 words, with compact error evidence if needed. This rule overrides the two-report, per-scenario, successful-example and comparison formats below for Jupiter; evidence checks still apply.

Always keep a Debug tool URL column for Jupiter errors. Link every failed order or cleanup action that has an order ID, even when shortening or grouping the report. For quote failures without an order ID, say "No order ID: quote failed before placement"; never invent a debug link or use a successful order as the failed request's link.

For requests that received no usable quote or failed before placement, include representative tokens, trade direction, order kind and requested amount. Use verified symbols and token links; keep a mint or scenario label when the symbol is uncertain. Give a short possible reason based on the saved error and available evidence, clearly labelled "Possible reason (unconfirmed)" unless verified. For repeated failures, group them but keep examples and affected row numbers. Separate the observed failure stage from its possible cause: `NoLiquidity` means the quote API returned no usable route for that request, not proof that Jupiter returned no quote, that the token has no liquidity, or that support is permanently absent. Explain missing order links and unknown ownership. If evidence doesn't support a specific cause, say "Cause unknown" rather than inventing one. Apply the same rule to other failures before placement, such as creation or validation errors, using their actual stage and message.

## Check the runs

1. Confirm the solver, environment, selected sessions and filename timestamp. Sessions are in `sessions/` at the repo root (`../sessions/` from `sim/`). Check metadata; a shared prefix alone does not confirm which runs belong.
2. Read `meta.json`, `report.md` or `report.html`, and `sim/scenario.csv` for the setup and test goal.
3. Check `sim/journal.jsonl` for placement, retries and cleanup; `orders.json` or `orders.csv` for final outcomes; and `txs.json` for settlement signatures. Check field names before querying.
4. Resolve uncertain counts or errors using selected records from `logs/settle_failures.txt`, `logs/creation_expired.txt` and `logs/competition.json`. Use compact queries, not full log dumps. Quote exact errors rather than generic report labels.

When reading Grafana, verify the data source matches the run's environment before querying containers. A `prod` simulator flag does not select a production Grafana data source. If queries return no records, inspect available data sources and check the order against the matching one before reporting missing logs. In this workspace, production VictoriaLogs uses `vm-auth-prod` and staging uses `vm-auth-staging`; verify these names still exist. Keep supplemental evidence when correcting an earlier query. Read the exact swap input, output, limits and shortfall before explaining "swap does not satisfy order"; check separate solved attempts and join driver failures by auction, solver and solution, rather than assuming all attempts had the same outcome.

Use the selected completed reruns. Exclude superseded setup or configuration runs, but keep failures from selected runs. Ask if selection is unclear. Use the requested timestamp prefix when supplied, otherwise the test date as `YYYYMMDD`. Use metadata for the date inside the reports.

Only read artifacts and write Markdown. Do not stage changes automatically. Trades, scenario or infrastructure changes, PDFs, commits and publishing need a separate request.

## Count results

- **Filled / scheduled:** completed scenario trades / planned rows. Also count placed orders, failures before placement and expected rejections. Retries can create multiple orders for 1 row.
- **Total transactions:** distinct successful settlements for selected scenario orders. Exclude creation, funding, failed attempts and cleanup. Define this scope once.
- Include setup trades when they are scenario rows, and say so. Exclude cleanup from totals; keep its evidence in the relevant scenario.
- Use filled orders for timing. Check the source clock: placement to observed fill, creation to settlement block time, or scenario start to completion. Name both endpoints and whether polling delay is included. Use the same basis throughout; do not average scenario medians.
- Separate failed attempts from failed orders. Show when an order filled later. Deduplicate messages about the same attempt. A deadline warning after a failed submission does not prove a late solver response.

## Did the test achieve its goal?

Lead with a direct answer to the test goal: **achieved**, **not achieved**, or **inconclusive**. For example: “CoW was not achieved. Opposite orders settled through DEX swaps.” Put that answer before fill counts; avoid vague wording such as “no evidence of matching” when transactions show what happened. Use inconclusive when evidence is missing or our setup missed the target, and say why. Assign setup changes and reruns to the test team, not the solver. Fills alone do not prove that a feature worked.

- **Batching:** group orders by settlement signature and report batch sizes. Inspect swap instructions before claiming 1 swap, proportional payouts or a price guard. Link an example transaction.
- **CoW:** verify opposite orders shared an auction and matched directly without DEX swaps. Same direction batches are not CoW. A failed quote may block 1 pair while others remain testable. Treat unverified price guard explanations as hypotheses.
- **Throughput:** show wave counts and clearing times where useful. Separate creation failures from settlement limits. Bursts with pauses do not establish a sustained rate ceiling.
- **Tokens:** separate fixed input sells, exact output buys and expected rejections. A successful sell does not prove buy support. Check amounts and native SOL handling before treating `NoLiquidity` as a token issue.
- **Size:** measure the full serialized transaction, including signatures, against the 1232-byte limit and test target. Do not infer size from order count or earlier routes. Below-target transactions leave the limit test inconclusive.

Check solver participation in competition records, not DEX names. Decode custom numeric errors only when their program is known. Separate confirmed causes from possible explanations; missing evidence proves neither success nor failure.

Keep quoting, placing an order, accepting a solver solution and settling the trade separate. A quote or placed order does not prove the solver produced an accepted solution. A "swap does not satisfy order" message describes a rejected candidate swap; report its actual failed condition when available, without counting it as solved or inferring that every attempt failed for the same reason. If the user supplies a debug message that you cannot independently read, label it as user-reported evidence.

## Assign ownership

Identify the failing stage and owner from evidence, not where an error was logged. Self paid creation sent directly by the simulator to RPC happens before autopilot handles the order. Quote API errors may come from a solver or another provider. If ownership is unclear, say so.

Before calling an error unknown, investigate the original failure record. Join settling orders and errors by auction and solution, not just a shared auction or nearby timestamp. If submission records include a transaction signature, inspect the failed transaction and the first failing program in its logs; a later successful transaction does not identify the earlier failure. Use named program errors where available. A submission error wrapper does not mean the network or autopilot caused the failure.

Separate the confirmed failure from its underlying cause and repair owner. Titan LessThanMinimumAmountOut and Jupiter SlippageToleranceExceeded confirm that a swap failed its minimum output check when the program is verified. State that clearly, even if quote freshness, minimum output settings or changes between simulation and execution still need investigation. Do not label these confirmed swap failures ownership unknown or automatically call them solver defects. Keep genuine quote or connectivity uncertainty separate. Link failed transactions beside the affected orders and show when driver simulation passed before execution failed.

For solvers other than Jupiter, always produce 2 reports:

- `{timestamp}_{solverName}_solver_test_report.md`: solver performance, feature results, confirmed solver issues, accepted solver limitations and errors of unknown ownership. Keep unknown ownership errors in both reports with the same order evidence; label them **Ownership unknown**, not solver defects. Exclude errors confirmed to be unrelated to the solver. Keep brief test limitations needed to interpret the results, without unrelated service troubleshooting.
- `{timestamp}_{solverName}_solver_test_report_for_cow.md`: the complete report for the CoW team. Include solver results plus creation, quoting, services, RPC, settlement retries, cleanup and uncertain errors from the selected runs. Preserve all evidence and explanations, including those in the solver report.

Label the solver report’s placed-order denominator. Include planned counts and failures before placement in the CoW report so missing orders cannot make an incomplete test look fully successful. Do not claim an autopilot defect without evidence of ownership.

Keep confirmed solver defects and limitations in the solver report, even if they surfaced through an API. Mark team-confirmed accepted solver limitations **known and accepted**; do not count them as unexpected failures or request an immediate fix. Restrictions enforced by autopilot or services belong only in the CoW report, including their error details and order links. Preserve the latest user-confirmed ownership rather than assuming an API rejection is a solver limitation. Shared settlement retries may still need solver input.

**Token-2022 transfer fees are an autopilot limitation.** Autopilot rejects these tokens before solver participation. Keep these rejections, error messages and related links only in the CoW report; do not describe them as a solver limitation or include them in the solver report.

Both reports must have an order table within every scenario, with a few successful examples and all failures in that report's scope. The solver report includes all confirmed solver failures and all errors of unknown ownership. A known failing stage does not by itself establish ownership; retain uncertain cases in both reports. The CoW report includes every failed placement, failed order and order with failed settlement attempts, including setup and cleanup. Group repeated attempts by order, retaining every distinct error and the final outcome. Check completeness against journals, order statuses and failure logs, not just the previous report. Missing failure evidence must be stated. Preserve existing rows and external links in the complete CoW report; repeat solver evidence there so it stands alone.

## Format

Use a neutral title such as "{Solver name} solver test report" for both reports. Do not state that a report is for the solver or the CoW team, and do not link the reports to each other. Keep their filenames and distinct content scopes.

Open with the date and environment, then **TLDR:** and 2-3 short sentences in simple, slightly informal English, like a quick message to a teammate. Use everyday words and natural contractions. Explain technical terms when needed: "opposite orders did not match directly" is clearer than "CoW was not achieved". State the overall result, the main issue and the next action without losing facts or uncertainty. Use clear counts and distinguish planned trades from placed orders when the difference matters. Keep the TLDR relevant to its reader: solver issues in the solver report; service issues and unfinished cleanup may also appear in the CoW report. Follow with:

| Scenario         | Outcome                                                      | Next check                               |
| ---------------- | ------------------------------------------------------------ | ---------------------------------------- |
| 1. Scenario name | Goal achieved, not achieved or inconclusive; then fill count | 1 specific check, with owner where known |

Use a numbered section per scenario. Keep visible text to 2 short sentences: whether the goal was achieved, then the reason or impact. Keep setup details in the evidence block when they add length. Aim for 200-350 visible words for 5 scenarios, including the TLDR and summary table. Keep full CoW detail inside evidence blocks. Do not repeat the table or add separate Expected, Result and Impact paragraphs.

Put metrics, explanations, order evidence, transaction links and cleanup in 1 closed block per scenario:

```markdown
<details>
<summary>Order evidence and metrics</summary>

Total transactions: N. Median / longest fill: N / N seconds.

| Scenario row / trader | UTC timestamp        | Trade                                                                 | Error(s)                   | Debug tool URL                |
| --------------------- | -------------------- | --------------------------------------------------------------------- | -------------------------- | ----------------------------- |
| row / trader          | first failed attempt | Sell input amount SRC → DEST, or Buy SRC → exactly output amount DEST | exact error; final outcome | order link or why none exists |

</details>
```

Keep blank lines around Markdown inside the block. Do not use `open`. If the renderer cannot expand details, use short evidence subsections instead. Do not create a shared evidence appendix.

## Evidence and wording

- Include a few successful examples per scenario, chosen to show the tested feature or token types, plus all failures in scope. Preserve existing evidence when shortening. Keep exact amounts, decimals, input/output direction and final status. List every token whose sell or exact buy succeeded inside the token section; separate those lists. Use verified token symbols; retain mints in exact errors.
- Use the first failed-attempt timestamp for errors and placement time for successful examples; state this once. For cleanup without a scenario row, use `— / trader`. Use `### Cleanup failures (although orders were filled at later attempts)` only when verified. Keep cleanup collapsed unless it adds a separate actionable issue.
- Copy debug URLs from reports or the matching environment configuration. Quote failures have no order ID; failed creation UIDs may have no debug record. Label these cases and successful orders linked for context. Put transaction links beside the claims they prove. Local paths cannot replace shareable links.
- Use plain English and numerals for counts, durations, sizes and amounts. Keep confirmed causes separate from assumptions. Explain shared evidence gaps once; mark unavailable data as unavailable.
- Omit repeated prose, internal endpoints, long timelines, superseded configuration mistakes and instructions to search inaccessible logs. Include infrastructure or fee payer details only if needed to explain a finding.

## Compare with previous reports

When a previous report exists, add a short comparison to both new reports. Use the baseline named by the user, otherwise the latest earlier report for the same solver and environment. Match the solver and CoW report scopes separately. Use report dates and session metadata, not filenames alone; if no matching baseline exists, say so briefly. Ask only when the baseline choice is unclear.

Compare matching scenarios, planned and placed counts, fills, token sell and exact buy coverage, and meaningful changes in failures or timing. Keep denominators, expected-rejection exclusions, acquisition and cleanup exclusions, and timing endpoints consistent. If setup or evidence differs, explain the limit instead of calling the result an improvement or regression. Do not treat fewer placed orders or a different token mix as better solver performance.

After the scenario summary table, add `## Changes since {previous report date}` with 1 short numerical sentence and a closed `<details>` block titled `Comparison with the previous run`. Name the baseline briefly, then show only meaningful numerical changes in a compact before/after table. Summarize unchanged results in 1 line; avoid repeating the scenario explanations or adding a long comparison narrative.

Show newly recorded error types and newly affected orders separately, with counts, exact saved errors, final outcomes and order links where available. Check previous failure records before calling an error new: an existing error on a different order is a newly affected order, not a new error type. Keep aggregate counters separate from distinct orders; say when missing records prevent a comparison. Include 2-4 unique successful fills that were missing or failed in the previous run, choosing new token coverage or recovered trades, with exact amounts, row numbers and debug links. If none exist, say so. Keep full order evidence in its existing scenario blocks.

The comparison must follow each report’s ownership and content scope; repeat shared comparison evidence in the CoW report so it stands alone. Aim for about 150-200 words including table text, allowing extra rows only for distinct actionable new errors. Keep old error explanations out of the diff except for a short evidence caveat.

Check comparison claims against the selected current artifacts and the previous report; inspect previous artifacts when needed and available. State when a claim relies only on the previous report. Missing error details in the new run do not prove an earlier issue was fixed. Carry forward known and accepted limitations and user-confirmed ownership without treating old failures as new-run evidence.

## Before delivery

Check totals, timing, cleanup exclusions, error ownership and whether each test achieved its goal. Match all recorded failed orders and attempts to evidence rows in the correct report; confirm every scenario also has successful examples. Verify token lists, table rows and links against sources. Check that the previous-report comparison uses matching scopes and denominators and does not claim fixes from missing evidence. Review each report for its intended reader: clear goal result, useful next check and enough evidence to investigate. Keep evidence blocks closed and readable. Preserve unrelated work and leave edits unstaged for review.
