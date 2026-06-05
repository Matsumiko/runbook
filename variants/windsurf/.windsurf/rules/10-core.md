---
trigger: always_on
---

# Windsurf Core Rules

- Read `AGENTS.md` first, then `CONTEXT.md` to choose task-specific files.
- Read `PROJECT.md` for project commands, architecture, tests, and gotchas.
- If `SESSION.md` exists, use it for resumable checkpoints and `run:status`, `run:resume`, `run:recap`.
- Audit first, then implement.
- Plan non-trivial work in `ACTIVE-PLAN.md`.
- Preserve existing project DNA.
- Read `FRONTEND.md` for UI work and `SECURITY.md` for sensitive backend work.
- Verify before claiming completion.
- Remove disposable artifacts created during work, such as temp pentest output, scratch reports, debug dumps, generated payloads, downloaded samples, and ad-hoc `tmp` files, unless the user explicitly asked to keep them. Do not delete requested deliverables, tests, fixtures, docs, snapshots, or lockfiles.
- Keep rule files concise and avoid duplicating the whole repo policy.
