# GitHub Copilot Repository Instructions

- Read `AGENTS.md` first, then `CONTEXT.md` to choose task-specific files.
- Read `PROJECT.md` for project commands, architecture, tests, and gotchas.
- If `SESSION.md` exists, use it for resumable checkpoints and `run:status`, `run:resume`, `run:recap`.
- Audit before implementing and prefer the smallest effective change.
- Preserve existing project patterns and naming.
- Verify changes before claiming completion.
- Remove disposable artifacts created during work, such as temp pentest output, scratch reports, debug dumps, generated payloads, downloaded samples, and ad-hoc `tmp` files, unless the user explicitly asked to keep them. Do not delete requested deliverables, tests, fixtures, docs, snapshots, or lockfiles.
- Use path-specific instructions in `.github/instructions/` for frontend and backend-sensitive changes.
