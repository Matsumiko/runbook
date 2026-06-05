# Cline Core Rules

- Read `AGENTS.md` first, then `CONTEXT.md` to choose task-specific files.
- Read `PROJECT.md` for project commands, architecture, tests, and gotchas.
- If `SESSION.md` exists, use it for resumable checkpoints and `run:status`, `run:resume`, `run:recap`.
- Audit before implementation.
- Use `ACTIVE-PLAN.md` for non-trivial execution plans.
- Prefer minimal diffs and preserve existing project structure.
- Read `FRONTEND.md` before meaningful UI changes.
- Read `SECURITY.md` before sensitive backend changes.
- Verify before claiming completion and report residual risk honestly.
- Remove disposable artifacts created during work, such as temp pentest output, scratch reports, debug dumps, generated payloads, downloaded samples, and ad-hoc `tmp` files, unless the user explicitly asked to keep them. Do not delete requested deliverables, tests, fixtures, docs, snapshots, or lockfiles.
