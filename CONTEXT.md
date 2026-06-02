# CONTEXT.md

This file tells agents which RunBook files to read for each task type.
Do not load every file by default.

Use this as the context router after reading `AGENTS.md`.

---

## Default Load

Always start with:

- `AGENTS.md` - operating rules and verification discipline
- `CONTEXT.md` - this routing map

Then load only the files that match the task.

---

## Context Routes

| Task type | Read these files | Why |
| --- | --- | --- |
| General code task | `AGENTS.md`, `CONTEXT.md`, `CODER.md` | Understand operating rules, project commands, architecture, and gotchas. |
| Project commands or architecture | `CODER.md` | Find install, dev, build, test commands, important paths, environment notes, and project boundaries. |
| Active task execution | `PLAN.md` | Use the durable plan for non-trivial work and update status as work progresses. |
| Resumable work or handoff | `SESSION.md`, `.runbook/sessions/` | Follow recovery protocol and inspect the latest runtime session before continuing. |
| Frontend work | `CODER.md`, `FRONTEND-DNA.md` | Preserve the product's visual language, interaction rules, and UI stack conventions. |
| Backend or security-sensitive work | `CODER.md`, `BACKEND-SECURITY-CHECKLIST.md` | Check auth, data integrity, secrets, abuse protection, and risky backend surfaces. |
| Planning or prioritization | `PLAN.md`, `TODO.md` | Separate active execution from strategic backlog. |
| Completed meaningful changes | `CHANGELOG.md` | Record what shipped, what was verified, and any residual risk. |
| Multi-agent compatibility | `AGENT-VARIANTS.md` | Understand adapter behavior for non-Codex agents. |

---

## CLI Shortcuts

Use these commands to print recommended context files:

```bash
runbook context list
runbook context frontend
runbook context backend
runbook context resume
runbook context planning
runbook context inspect
```

---

## Custom Routes

Add project-specific rows here when the built-in routes are not precise enough.
Route names are matched case-insensitively; spaces become dashes.

| Route | Read these files | Why |
| --- | --- | --- |
| [route name] | `CODER.md`, `docs/example.md` | [When agents should use this route.] |

Example:

If you add `database migration`, call it with `runbook context database-migration`.

---

## Reading Rules

1. Read `AGENTS.md` first.
2. Read `CONTEXT.md` second.
3. Load task-specific files from the routing table.
4. Stop reading when you have enough context to act safely.
5. Do not treat missing optional files as permission to guess; state the gap and proceed conservatively.
6. Never load runtime `.runbook/sessions/*.json` files unless the task involves resume, status, recap, handoff, or interrupted work.
