---
name: solver-notion-sync
description: Sync Solana solver test runs to Notion and propose updates to each solver's production readiness notes from checked reports.
---

# Sync solver trackers

Use the repository root containing this skill. Update these two Notion databases when asked to sync:

- [State of Solvers on Solana](https://app.notion.com/p/cownation/3ff8da5f04ca80d8a4bdcbe5e58f8a3b): `collection://3ff8da5f-04ca-80d1-aa7f-000b4e65661f`.
- [Solvers on Solana - test runs](https://app.notion.com/p/cownation/3ff8da5f04ca803a9443ef01b9289df9): `collection://3ff8da5f-04ca-80c7-98f2-000b24db864c`.

## Sync

1. Fetch both schemas and query the relevant rows, including pagination. Check `sim/composite-test-runs.md` and `sessions/` for completed composite runs. Confirm solver, environment and date from metadata; skip unfinished runs.
2. Use checked session reports. Generate or correct missing or stale reports with [solver-test-report](../solver-test-report/SKILL.md). Keep the full internal report scope; Jupiter keeps its error-only format. Count filled eligible planned trades / eligible planned trades, including quote and creation failures. Exclude known nonzero transfer-fee trades from both counts, show exclusions, and keep supported zero-fee Token-2022 trades. State evidence gaps, throttling and unverified isolation.
3. Match solvers by identity (`rizzolver` means `Wintermute/Rizzolver`) and runs by session ID and environment. Update existing entries; create missing ones. Leave ambiguous matches unchanged. Set run date, solver relation and fill rate on the 0–100 scale. Keep `TLDR` to 1–3 short sentences with the fill result and biggest observed issues or test limitations. Distinguish failed attempts that later filled from unfilled trades; if there were no eligible trade failures, say so. Include the full report in the page and attach its Markdown file. Preserve Debug and transaction links; quote failures before placement have no order link. Reuse unchanged attachments.
4. Keep each solver's `Test runs` links complete. Review and propose `Status` edits using the structure and confirmation step below. Syncing reports and relations can continue while those edits await confirmation. Preserve `State` unless the user explicitly requests a rollout change. Preserve icons, schemas, unrelated content and attachments. Fetch pages before targeted edits and read Notion's Markdown specification before inserting formatted content.
5. Wait for writes to finish and read back changed rows, reports and attachments. If a write is uncertain, check before retrying. Update `sim/composite-test-runs.md` with verified results and Notion links. Leave local changes unstaged and briefly report changes or blockers.

## Status and production readiness

Keep the summary and readiness notes in `Status`, using this structure and these labels. Use simple, slightly informal English. Give each sentence or checklist item one main point. Split long sentences; avoid jargon and long strings of technical words. Say what worked, what failed and what to do next. Keep the meaning, owner and uncertainty clear; use technical names only when needed to identify the issue. Apply this style to `TLDR` and approval proposals too.

```text
1–2 short sentences: what works and the main issue.

Next: One specific action.

Must for prod:
[ ] Required fix or test and what counts as passing.

Good to have for prod:
[ ] Optional improvement or test.
```

For example, write “Check that the solver creates the missing token account during settlement and pays for it” instead of “Verify solver-paid receiving-account creation at settlement.” Write “Test opposite orders again to check if they match directly” instead of “Reproduce direct matching with opposite orders.”

Preserve existing notes, checklist items and checked states. Keep empty checklist sections; omit `Next` if there is no action. Preserve line breaks and checklist style; text checkboxes are not native Notion tasks.

Review the latest completed run and the previous comparable run, if available. Compare them with the checklist and newer user or solver messages. Separate passed, failed and untested items. A claimed fix is not a verified pass; check tokens, order kinds, amounts, load and account setup. Preserve newer manual facts and flag conflicting evidence.

Keep metrics and detailed errors in test-run pages. Name concrete fixes or tests, with an owner when known; skip “needs more tests”. Keep test limits such as throttling. Preserve which items are required versus optional; fill rate alone does not decide readiness.

Before changing `Status`, show the exact proposed text with links supporting changed items and ask for confirmation. Apply already approved edits without asking again; a general sync request does not approve readiness changes. Re-fetch before writing and preserve newer manual edits. If they conflict, show a revised proposal. Leave unapproved edits pending and mention them in the result.
