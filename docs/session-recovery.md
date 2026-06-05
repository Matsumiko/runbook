# Session Recovery

RunBook keeps long or interrupted agent work resumable through `SESSION.md` and project-local runtime checkpoints.

Runtime sessions are task-scoped working memory. They preserve the current task's goal, plan, touched files, verification, stop point, and next step. Durable project facts belong in `PROJECT.md`; completed meaningful changes belong in `CHANGELOG.md`.

## Runtime Files

Sessions are stored in:

```text
.runbook/sessions/SESSION-YYYYMMDD-HHMM.json
```

Each runtime session records the goal, assumptions, plan, activity log, decisions, touched files, last position, system state, and next steps.

Do not commit runtime sessions unless the team explicitly wants that. The default `.runbook/sessions/.gitignore` keeps local checkpoint JSON files out of git.

## Session Gate

Before implementation, debugging, refactoring, audits, or repository-changing work, check for pending work:

```bash
runbook session pending
```

If a recoverable session exists, do not start new work. Ask the user to type exactly:

```text
I will fight
```

After that exact phrase, inspect resume context:

```bash
runbook session resume
```

Then audit the workspace and continue from the recorded next step. If the user explicitly chooses a fresh task instead, create a new session with:

```bash
runbook session new --force
```

If no recoverable session exists, create a runtime session before the first repository edit. If the CLI is unavailable, manually create `.runbook/sessions/SESSION-[YYYYMMDD]-[HHMM].json` from the schema in `SESSION.md` and keep it updated during work.

When the CLI is available, use it. Manual session JSON is only a fallback after
the CLI fails or is unavailable. Never create a short ad-hoc session object with
only fields such as `name`, `status`, and `summary`; fallback JSON must preserve
the full `SESSION.md` schema.

## Project Bootstrap

When a repo starts with only RunBook files, the first agreed implementation task is project bootstrap.

During bootstrap, agents should:

- create a runtime session before editing
- implement the smallest project structure that satisfies the task
- verify with a real command
- update `PROJECT.md` with verified commands, architecture, paths, environment, tests, and gotchas
- remove every bracket placeholder from `PROJECT.md`; use `none` or `n/a` where a field does not apply
- for frontend bootstrap, update `FRONTEND.md` with verified tone, palette, typography, layout, component, responsive, accessibility, and preview/test decisions
- use `ACTIVE-PLAN.md` only for large or multi-phase work
- use `BACKLOG.md` only for deferred follow-ups
- update `CHANGELOG.md` only for meaningful completed milestones

## Atomic Checkpoints

Runtime sessions work best when agents checkpoint after each meaningful step, not
only at the end.

Use this loop:

1. Record the next action before editing.
2. Make the smallest file change that completes that action.
3. Record every touched file immediately.
4. Update `lastPosition` before starting the next action.
5. Record verification with the exact command and result.

For example:

```bash
runbook session step "Create app.js task logic"
runbook session touch app.js
runbook session note "Implemented localStorage task persistence"
runbook session verify "node verify.js passed"
```

Before claiming a task is done, `runbook session pending` should report no
recoverable sessions. If it still reports an `ACTIVE`, `PAUSED`, `INTERRUPTED`,
or `BLOCKED` session, finish the session bookkeeping or report the work as
incomplete.

## Cleanup

Agents should remove disposable artifacts before closing a task.

Disposable artifacts include temporary pentest output, throwaway reports,
generated payloads, downloaded samples, debug dumps, scratch coverage files,
repro folders, and ad-hoc `tmp` files.

Use ignored scratch locations such as `/tmp`, `.tmp/`, or `tmp/` when practical.
Record temporary artifact paths in the runtime session, then remove them before
final verification unless the user explicitly asked to keep them. Do not delete
files that are part of the requested implementation, tests, fixtures, docs,
snapshots, lockfiles, or permanent project outputs.

If a temporary artifact must remain for review, move it to a deliberate project
path and document why it remains.

Runtime sessions include `summary.artifacts` for this purpose:

```json
{
  "created": ["tmp/pentest-raw.log"],
  "disposable": ["tmp/pentest-raw.log"],
  "kept": [],
  "cleaned": ["tmp/pentest-raw.log"]
}
```

Use `created` for generated outputs, `disposable` for outputs expected to be
removed, `cleaned` after deletion, and `kept` only when an artifact is an
intentional deliverable.

## Commands

```bash
runbook session new
runbook session pending
runbook session resume
runbook session list
runbook session validate
runbook session latest
runbook session show
runbook session note "Found failing auth test"
runbook session step "Fix token refresh handling"
runbook session touch src/auth.ts
runbook session verify "npm test passed"
runbook session close --status completed
runbook session clear --dry-run
runbook session clear
runbook session clear --all --force
```

## Agent Commands

`SESSION.md` defines these conversational commands:

```text
run:status
run:resume
run:recap
```

## Rules

1. `SESSION.md` is the protocol file, not the active progress log.
2. `SESSION-EXAMPLE.json` is only an example.
3. Runtime session JSON files are local working artifacts.
4. Secrets, tokens, cookies, private keys, and sensitive payloads must be written as `[REDACTED]`.
5. Recoverable statuses are `ACTIVE`, `PAUSED`, `INTERRUPTED`, and `BLOCKED`.
6. Cleanup-safe statuses are `COMPLETED` and `CANCELLED`.
7. Completed/cancelled sessions are kept to the newest 5 by default.
8. `session clear` does not remove recoverable sessions unless `--all --force` is used.

## Updating Progress

| Command | Writes to |
| --- | --- |
| `session note` | `log[]` and `lastPosition` |
| `session step` | `plan[]`, `log[]`, and `lastPosition` |
| `session touch` | `summary.filesChanged[]`, `log[]`, and `lastPosition` |
| `session verify` | `summary.verification[]`, `log[]`, and `lastPosition` |

These commands update the latest recoverable session. Create one first with `runbook session new`.
