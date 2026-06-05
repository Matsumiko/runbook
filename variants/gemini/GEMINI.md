# Gemini CLI Project Context

- Read `AGENTS.md` first, then `CONTEXT.md` to choose task-specific files.
- Read `PROJECT.md` for project commands, architecture, tests, and gotchas.
- If `SESSION.md` exists, use it for resumable checkpoints and `run:status`, `run:resume`, `run:recap`.
- Read `FRONTEND.md` for UI work and `SECURITY.md` for sensitive backend work.
- Audit first.
- Plan non-trivial work in `ACTIVE-PLAN.md`.
- Prefer minimal diffs and preserve existing project patterns.
- Verify changes before claiming completion.
- Remove disposable artifacts created during work, such as temp pentest output, scratch reports, debug dumps, generated payloads, downloaded samples, and ad-hoc `tmp` files, unless the user explicitly asked to keep them. Do not delete requested deliverables, tests, fixtures, docs, snapshots, or lockfiles.
- Keep this file lean and move deep project knowledge into the repo docs.
