# Session Recovery

RunBook keeps long or interrupted agent work resumable through `SESSION.md` and project-local runtime checkpoints.

## Runtime Files

Sessions are stored in:

```text
.runbook/sessions/SESSION-YYYYMMDD-HHMM.json
```

Each runtime session records the goal, assumptions, plan, activity log, decisions, touched files, last position, system state, and next steps.

Do not commit runtime sessions unless the team explicitly wants that. The default `.runbook/sessions/.gitignore` keeps local checkpoint JSON files out of git.

## Commands

```bash
runbook session new
runbook session list
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
7. `session clear` does not remove recoverable sessions unless `--all --force` is used.

## Updating Progress

| Command | Writes to |
| --- | --- |
| `session note` | `log[]` and `lastPosition` |
| `session step` | `plan[]`, `log[]`, and `lastPosition` |
| `session touch` | `summary.filesChanged[]`, `log[]`, and `lastPosition` |
| `session verify` | `summary.verification[]`, `log[]`, and `lastPosition` |

These commands update the latest recoverable session. Create one first with `runbook session new`.
