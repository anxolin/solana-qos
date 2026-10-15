---
name: solver-scenario-watch
description: Run or watch a Solana solver scenario, spot major failures early, investigate them, and write a preliminary report while the test is still running.
---

# Solver scenario watch

Catch problems during the first scenario, before spending SOL on more tests.

## Start

1. Check the requested solver, scenario, environment and spending limits. Use staging unless production was requested. Run only the requested tests.
2. Read the scenario and [runner guide](../../../sim/README.md). Check its budget and service health before trading. The simulator and backend may use different RPCs. The solver name in a config is only a label; check which solver is actually active.
3. Start the runner in a terminal you control and save its terminal ID and session name, or attach to the requested existing run. Keep the requested budget, schedule and retry limits.

Tests spend real SOL, including on staging. Creating this skill does not authorize a live test. Use existing authorization; ask only if the requested test or spending limit is unclear.

## Watch from the start

Check `sessions/<session>/sim/journal.jsonl`, `sim/run.json`, session metadata and runner output as soon as the run starts. Do not wait for final exports. Check about every 10 seconds, using short tool waits and small, read-only queries. Work directly with these files; no helper scripts are needed.

Count distinct finished trade rows, not attempts. Use the saved run to map rows to scenarios. Track placed orders and their latest status separately, so late fills remain visible. Watch the terminal for startup and funding errors too.

Pause and investigate when:

- **Over 50% of finished trade rows fail**, after at least 5 rows finish. For a smaller scenario, check once all its rows finish.
- **The first 3 finished rows all fail**, with no successful trade or observed fill in that scenario.
- **Over 50% of the latest 10 finished rows fail**, after at least 5 finish. This catches failures after earlier success.
- **At least 3 unfinished rows have orders past the fill timeout plus 30 seconds.**

Check each scenario and the whole run. Pending trades are not failures. Keep retries, cleanup and failed attempts separate from failed trade rows.

Exclude an expected rejection only when the scenario explicitly expects it and the actual error matches. An expected `UnsupportedToken` check that returns HTTP 500 is still unexpected.

Repeated RPC timeouts, HTTP 500s, skipped auctions, no usable quotes, an empty funder or a stopped runner also need attention. Check scheduled gaps and the runner before calling a quiet journal stuck.

## On an alert

1. Tell the user the scenario, failed/finished count, percentage and pending count.
2. For a runner you started, send one Ctrl-C to its saved terminal. Check that it stopped and saved its state. Do not launch the next scenario. Ask before stopping someone else's run.
3. Investigate read-only now. Add the first findings to the report within 2 minutes, even if the cause is unknown. Keep checking live evidence while investigating.

Stopping the runner does not cancel live orders or return funds. List outstanding orders and unfinished cleanup. Do not force-kill processes, delete locks, replay trades, resume, change services or run extra cleanup without authorization. Some rows may start before the alert is noticed.

## Investigate

Find the failing stage before assigning blame:

| Failure | Check first |
| --- | --- |
| Quote / `NoLiquidity` | Direction, amount, order kind and quote response. This error does not prove the token has no liquidity. |
| Creation / HTTP 500 | Original API error, request ID, sponsor and backend RPC. The solver may not have seen the order. |
| Placed but no fill | Order status, autopilot health, auction participation and accepted solutions. A quote is not a solved trade. |
| Settlement | Match order, auction, solver and solution. Inspect the failed transaction and first failing program. |

For logs, use [the query guide](../../../queries/logs.md). Verify the Grafana data source: `vm-auth-staging` for staging or `vm-auth-prod` for production, if still available. If message fields are missing, inspect JSON in `all`. Empty exports do not prove there were no errors. Keep reads small and never print credentials.

Separate facts from possible causes. A timeout alone does not prove a solver defect. Token-2022 transfer-fee restrictions belong to autopilot.

## Report

Create `sessions/<session>/preliminary_report.md` early and update it during the run. Do not wait until the scenario ends. Include:

- Last check time and whether the run is running, paused, finished or interrupted.
- Per-scenario and total counts: successful, failed and pending rows, with failure percentages.
- Alerts, representative exact errors and useful order or debug links.
- What you checked, confirmed causes and open questions.
- Outstanding orders, unfinished cleanup, leftover funds and one next action.

Keep earlier alerts and findings when updating the report. Confirm a pause before claiming it happened. Match debug links and logs to the run's environment.

Share the report path when done. For requested final reports on completed runs, use [solver-test-report](../solver-test-report/SKILL.md). Leave files unstaged.
