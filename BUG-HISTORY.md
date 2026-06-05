# BUG-HISTORY.md

Resolved bugs and regressions for the RunBook package.

## opencode Config Replacement Risk

Date: 2026-06-05
Status: fixed

Problem:
Installing the opencode adapter must not replace a user-owned `opencode.json` that already contains settings.

Cause:
Agent config files often contain local preferences and provider settings, so overwrite-style installation would destroy user configuration.

Fix:
RunBook merges `AGENTS.md`, `CONTEXT.md`, and `SESSION.md` into the existing `instructions` array, preserves unknown keys, and preserves an existing `default_agent` unless `--force` is used.

Files changed:
- `bin/runbook.js`
- `test/smoke.js`
- `docs/adapters.md`
- `docs/cli.md`

Regression check:
Smoke tests create an existing `opencode.json` with `default_agent`, `theme`, and existing `instructions`, then verify RunBook appends instructions without replacing existing values.

## Short Ad-Hoc Session Schema

Date: 2026-06-05
Status: fixed

Problem:
Agents could create tiny session files that looked like checkpoints but lacked enough context to resume safely.

Cause:
The runtime protocol previously relied too much on instruction compliance and did not have a schema validation command.

Fix:
Added `runbook session validate`, full session defaults from `runbook session new`, and strict-live doctor checks.

Files changed:
- `bin/runbook.js`
- `SESSION-EXAMPLE.json`
- `test/smoke.js`
- `docs/session-recovery.md`

Regression check:
Smoke tests create a short session object with `name` and `status`, then assert `runbook session validate` fails with a short ad-hoc schema error.
