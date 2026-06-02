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
runbook context resume
runbook context planning
runbook context inspect
```

## Route Map

| Task | Recommended files |
| --- | --- |
| General code task | `AGENTS.md`, `CONTEXT.md`, `CODER.md` |
| Frontend work | `AGENTS.md`, `CONTEXT.md`, `CODER.md`, `FRONTEND-DNA.md` |
| Backend or security-sensitive work | `AGENTS.md`, `CONTEXT.md`, `CODER.md`, `BACKEND-SECURITY-CHECKLIST.md` |
| Resume or handoff | `AGENTS.md`, `CONTEXT.md`, `SESSION.md`, `.runbook/sessions/` |
| Planning or prioritization | `AGENTS.md`, `CONTEXT.md`, `CODER.md`, `PLAN.md`, `TODO.md` |

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
| database migration | `CODER.md`, `BACKEND-SECURITY-CHECKLIST.md`, `docs/database.md` | Use for schema changes and rollback planning. |
| billing work | `CODER.md`, `BACKEND-SECURITY-CHECKLIST.md`, `docs/billing.md` | Use for payments and subscription flows. |
```

Then call:

```bash
runbook context database-migration
runbook context billing-work
```

Route names are matched case-insensitively. Spaces become dashes.
