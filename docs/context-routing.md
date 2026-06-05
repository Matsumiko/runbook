# Context Routing

RunBook uses `CONTEXT.md` so agents can find the right project knowledge without loading every instruction file at once.

## Default Flow

1. Read `AGENTS.md`.
2. Read `CONTEXT.md`.
3. Load only the files that match the task.
4. Stop reading once there is enough context to act safely.

## CLI Routes

```bash
runbook context list
runbook context general
runbook context frontend
runbook context backend
runbook context architecture
runbook context bugfix
runbook context module-work
runbook context security-audit
runbook context resume
runbook context planning
runbook context inspect
```

## Route Map

| Task | Recommended files |
| --- | --- |
| General code task | `AGENTS.md`, `CONTEXT.md`, `PROJECT.md` |
| Frontend work | `AGENTS.md`, `CONTEXT.md`, `PROJECT.md`, `FRONTEND.md` |
| Backend or security-sensitive work | `AGENTS.md`, `CONTEXT.md`, `PROJECT.md`, `SECURITY.md` |
| Architecture or product decision work | `AGENTS.md`, `CONTEXT.md`, `PROJECT.md`, `DECISIONS.md`, `MODULE-MAP.md` |
| Bugfix or regression work | `AGENTS.md`, `CONTEXT.md`, `PROJECT.md`, `MODULE-MAP.md`, `BUG-HISTORY.md`, `DECISIONS.md` |
| Module-specific implementation work | `AGENTS.md`, `CONTEXT.md`, `PROJECT.md`, `MODULE-MAP.md`, `DECISIONS.md` |
| Security audit or pentest | `AGENTS.md`, `CONTEXT.md`, `PROJECT.md`, `SESSION.md`, `SECURITY.md`, `POLICIES.md` |
| Resume or handoff | `AGENTS.md`, `CONTEXT.md`, `SESSION.md`, `.runbook/sessions/` |
| Planning or prioritization | `AGENTS.md`, `CONTEXT.md`, `PROJECT.md`, `ACTIVE-PLAN.md`, `BACKLOG.md` |

## Inspection

Use `context inspect` to check whether a project has the expected RunBook files:

```bash
runbook context inspect
runbook context inspect ./my-app
```

Missing optional files are not automatic permission to guess. The agent should state the gap and proceed conservatively.

## Custom Routes

Projects can add custom routes in `CONTEXT.md`:

```md
## Custom Routes

| Route | Read these files | Why |
| --- | --- | --- |
| database migration | `PROJECT.md`, `SECURITY.md`, `docs/database.md` | Use for schema changes and rollback planning. |
| billing work | `PROJECT.md`, `SECURITY.md`, `docs/billing.md` | Use for payments and subscription flows. |
```

Then call:

```bash
runbook context database-migration
runbook context billing-work
```

Route names are matched case-insensitively. Spaces become dashes.
