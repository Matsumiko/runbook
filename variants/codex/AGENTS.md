# Codex Project Instructions

- Read root `AGENTS.md` first, then `CONTEXT.md` to choose task-specific files.
- If `SESSION.md` exists, use it for resumable checkpoints and `run:status`, `run:resume`, `run:recap`.
- Read `PROJECT.md` for project commands, architecture, tests, and gotchas.
- Read `FRONTEND.md` for UI work and `SECURITY.md` for sensitive backend work.
- Audit first, then plan, then implement.
- Prefer the smallest effective change.
- Preserve existing project DNA unless redesign is explicitly requested.
- Verify before claiming completion.
- Before closing repository-changing work, update durable memory when relevant: `PROJECT.md`, `MODULE-MAP.md`, `DECISIONS.md`, `BUG-HISTORY.md`, `FRONTEND.md`, or `SECURITY.md`. If no durable fact changed, say that explicitly.
- Remove disposable artifacts created during work, such as temp pentest output, scratch reports, debug dumps, generated payloads, downloaded samples, and ad-hoc `tmp` files, unless the user explicitly asked to keep them. Do not delete requested deliverables, tests, fixtures, docs, snapshots, or lockfiles.
- Keep this file short and push deep context into the project docs.
