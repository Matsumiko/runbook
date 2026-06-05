# Aider Conventions

- Read `AGENTS.md` first, then `CONTEXT.md` to choose task-specific files.
- Read `PROJECT.md` for project commands, architecture, tests, and gotchas.
- If `SESSION.md` exists, use it for resumable checkpoints and `run:status`, `run:resume`, `run:recap`.
- Audit before implementation.
- Plan non-trivial work in `ACTIVE-PLAN.md`.
- Prefer the smallest effective change over broad rewrites.
- Preserve existing project patterns and naming.
- Read `FRONTEND.md` for frontend work and `SECURITY.md` for sensitive backend work.
- Verify before claiming completion.
- Before closing repository-changing work, update durable memory when relevant: `PROJECT.md`, `MODULE-MAP.md`, `DECISIONS.md`, `BUG-HISTORY.md`, `FRONTEND.md`, or `SECURITY.md`. If no durable fact changed, say that explicitly.
- Remove disposable artifacts created during work, such as temp pentest output, scratch reports, debug dumps, generated payloads, downloaded samples, and ad-hoc `tmp` files, unless the user explicitly asked to keep them. Do not delete requested deliverables, tests, fixtures, docs, snapshots, or lockfiles.
- Be explicit about assumptions, trade-offs, and residual risk.
