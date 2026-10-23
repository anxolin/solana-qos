---
name: solver-notion-sync
description: Update the CoW Solana solver directory and test-run tracker in Notion from completed composite runs and checked reports.
---

# Sync solver trackers

Use the repository root containing this skill. Update these two Notion databases when asked to sync:

- [State of Solvers on Solana](https://app.notion.com/p/cownation/3ff8da5f04ca80d8a4bdcbe5e58f8a3b): `collection://3ff8da5f-04ca-80d1-aa7f-000b4e65661f`.
- [Solvers on Solana - test runs](https://app.notion.com/p/cownation/3ff8da5f04ca803a9443ef01b9289df9): `collection://3ff8da5f-04ca-80c7-98f2-000b24db864c`.

## Sync

1. Fetch both schemas and query the relevant rows, including pagination. Check `sim/composite-test-runs.md` and `sessions/` for completed composite runs. Confirm solver, environment and date from metadata; skip unfinished runs.
2. Use checked session reports. Generate or correct missing or stale reports with [solver-test-report](../solver-test-report/SKILL.md). Keep the full internal report scope; Jupiter keeps its error-only format. Count filled eligible planned trades / eligible planned trades, including quote and creation failures. Exclude known nonzero transfer-fee trades from both counts, show exclusions, and keep supported zero-fee Token-2022 trades. State evidence gaps, throttling and unverified isolation.
3. Match solvers by identity (`rizzolver` means `Wintermute/Rizzolver`) and runs by session ID and environment. Update existing entries; create missing ones. Leave ambiguous matches unchanged. Set run date, solver relation and fill rate on the 0–100 scale. Keep `TLDR` to 1–3 short sentences with the fill result and biggest observed issues or test limitations. Distinguish failed attempts that later filled from unfilled trades; if there were no eligible trade failures, say so. Include the full report in the page and attach its Markdown file. Preserve Debug and transaction links; quote failures before placement have no order link. Reuse unchanged attachments.
4. Keep each solver's `Test runs` links complete and update `Status` as described below. Preserve `State` unless the user explicitly requests a rollout change. Preserve icons, schemas, unrelated content and attachments. Fetch pages before targeted edits and read Notion's Markdown specification before inserting formatted content.
5. Wait for writes to finish and read back changed rows, reports and attachments. If a write is uncertain, check before retrying. Update `sim/composite-test-runs.md` with verified results and Notion links. Leave local changes unstaged and briefly report changes or blockers.

## Status

`Status` is one short, high-level sentence about the solver's current performance or capabilities and main limitation. Base it on the latest completed run by actual run time and current user-provided facts. Do not copy the latest run's `TLDR` or list dates, counts, errors and cleanup details; keep detailed metrics and findings in the test-run pages. Preserve newer user-provided facts when local evidence is older.

Example: “JUP and sponsored orders now work well; some burst orders still fail and batching is not supported.”

State what happened. Skip generic next steps such as “needs more tests”, “retest on staging” or “needs improvement”; further testing is already understood for staging runs, especially below 80%. Keep limitations such as proxy throttling when they affect interpretation. Fill rate alone does not decide rollout state.
