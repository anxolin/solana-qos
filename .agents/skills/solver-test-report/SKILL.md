---
name: solver-test-report
description: Combine completed Solana solver scenarios into a short Markdown report with checked evidence. Use for composite test reports or updates to an existing report.
---

# Solver test report

Explain what each scenario tested, what happened, and what needs attention. Write for solvers who cannot access internal logs. Make the report understandable on its own.

## Check the runs

1. Confirm the solver, environment, selected sessions and filename timestamp. Sessions are in `sessions/` at the repo root (`../sessions/` from `sim/`). Check metadata; a shared prefix alone does not confirm which runs belong.
2. Read `meta.json`, `report.md` or `report.html`, and `sim/scenario.csv` for the setup and test goal.
3. Check `sim/journal.jsonl` for placement, retries and cleanup; `orders.json` or `orders.csv` for final outcomes; and `txs.json` for settlement signatures. Check field names before querying.
4. Resolve uncertain counts or errors using selected records from `logs/settle_failures.txt`, `logs/creation_expired.txt` and `logs/competition.json`. Use compact queries, not full log dumps. Quote exact errors rather than generic report labels.

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

## Assign ownership

Identify the failing stage and owner from evidence, not where an error was logged. Self paid creation sent directly by the simulator to RPC happens before autopilot handles the order. Quote API errors may come from a solver or another provider. If ownership is unclear, say so.

Always produce 2 reports:

- `{timestamp}_{solverName}_solver_test_report.md`: solver performance, feature results, confirmed solver issues, accepted solver limitations and errors of unknown ownership. Keep unknown ownership errors in both reports with the same order evidence; label them **Ownership unknown**, not solver defects. Exclude errors confirmed to be unrelated to the solver. Keep brief test limitations needed to interpret the results, without unrelated service troubleshooting.
- `{timestamp}_{solverName}_solver_test_report_for_cow.md`: the complete report for the CoW team. Include solver results plus creation, quoting, services, RPC, settlement retries, cleanup and uncertain errors from the selected runs. Preserve all evidence and explanations, including those in the solver report. Link to the solver report.

Label the solver report’s placed-order denominator. Include planned counts and failures before placement in the CoW report so missing orders cannot make an incomplete test look fully successful. Do not claim an autopilot defect without evidence of ownership.

Keep confirmed solver defects and limitations in the solver report, even if they surfaced through an API. Mark team-confirmed accepted solver limitations **known and accepted**; do not count them as unexpected failures or request an immediate fix. Restrictions enforced by autopilot or services belong only in the CoW report, including their error details and order links. Preserve the latest user-confirmed ownership rather than assuming an API rejection is a solver limitation. Shared settlement retries may still need solver input.

**Token-2022 transfer fees are an autopilot limitation.** Autopilot rejects these tokens before solver participation. Keep these rejections, error messages and related links only in the CoW report; do not describe them as a solver limitation or include them in the solver report.

Both reports must have an order table within every scenario, with a few successful examples and all failures in that report's scope. The solver report includes all confirmed solver failures and all errors of unknown ownership. A known failing stage does not by itself establish ownership; retain uncertain cases in both reports. The CoW report includes every failed placement, failed order and order with failed settlement attempts, including setup and cleanup. Group repeated attempts by order, retaining every distinct error and the final outcome. Check completeness against journals, order statuses and failure logs, not just the previous report. Missing failure evidence must be stated. Preserve existing rows and external links in the complete CoW report; repeat solver evidence there so it stands alone.

## Format

Open with the date, environment and 1 sentence on the overall result. Follow with:

| Scenario | Outcome | Next check |
| --- | --- | --- |
| 1. Scenario name | Goal achieved, not achieved or inconclusive; then fill count | 1 specific check, with owner where known |

Use a numbered section per scenario. Keep visible text to 2 short sentences: whether the goal was achieved, then the reason or impact. Keep setup details in the evidence block when they add length. Aim for 200–350 visible words for 5 scenarios, including the summary table. Keep full CoW detail inside evidence blocks. Do not repeat the table or add separate Expected, Result and Impact paragraphs.

Put metrics, explanations, order evidence, transaction links and cleanup in 1 closed block per scenario:

```markdown
<details>
<summary>Order evidence and metrics</summary>

Total transactions: N. Median / longest fill: N / N seconds.

| Scenario row / trader | UTC timestamp | Trade | Error(s) | Debug tool URL |
| --- | --- | --- | --- | --- |
| row / trader | first failed attempt | Sell input amount SRC → DEST, or Buy SRC → exactly output amount DEST | exact error; final outcome | order link or why none exists |

</details>
```

Keep blank lines around Markdown inside the block. Do not use `open`. If the renderer cannot expand details, use short evidence subsections instead. Do not create a shared evidence appendix.

## Evidence and wording

- Include a few successful examples per scenario, chosen to show the tested feature or token types, plus all failures in scope. Preserve existing evidence when shortening. Keep exact amounts, decimals, input/output direction and final status. List every token whose sell or exact buy succeeded inside the token section; separate those lists. Use verified token symbols; retain mints in exact errors.
- Use the first failed-attempt timestamp for errors and placement time for successful examples; state this once. For cleanup without a scenario row, use `— / trader`. Use `### Cleanup failures (although orders were filled at later attempts)` only when verified. Keep cleanup collapsed unless it adds a separate actionable issue.
- Copy debug URLs from reports or the matching environment configuration. Quote failures have no order ID; failed creation UIDs may have no debug record. Label these cases and successful orders linked for context. Put transaction links beside the claims they prove. Local paths cannot replace shareable links.
- Use plain English and numerals for counts, durations, sizes and amounts. Keep confirmed causes separate from assumptions. Explain shared evidence gaps once; mark unavailable data as unavailable.
- Omit repeated prose, internal endpoints, long timelines, superseded configuration mistakes and instructions to search inaccessible logs. Include infrastructure or fee payer details only if needed to explain a finding.

## Before delivery

Check totals, timing, cleanup exclusions, error ownership and whether each test achieved its goal. Match all recorded failed orders and attempts to evidence rows in the correct report; confirm every scenario also has successful examples. Verify token lists, table rows and links against sources. Review each report for its intended reader: clear goal result, useful next check and enough evidence to investigate. Keep evidence blocks closed and readable. Preserve unrelated work and leave edits unstaged for review.
