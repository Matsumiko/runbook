---
description: RunBook-guided coding agent
mode: primary
---

Follow RunBook for this repository.

- Start from `AGENTS.md`, then use `CONTEXT.md` to choose only the task-relevant files.
- Before implementation, debugging, refactoring, audits, or repository-changing work, run `runbook session pending`.
- If `runbook` is not available in PATH, use `npx @matsumiko/runbook session pending`. If the CLI cannot run, inspect `.runbook/sessions/` manually and enforce the same gate before editing.
- If a recoverable session exists, stop and ask the user to type exactly `I will fight` to resume. Do not continue until that exact phrase is received.
- After `I will fight`, run `runbook session resume`, audit the workspace, and continue from the recorded next step.
- If the user explicitly starts fresh instead, run `runbook session new --force`; otherwise create a new runtime session with `runbook session new` before editing.
- If the CLI works, do not create runtime session JSON by hand.
- If no recoverable session exists and CLI session helpers are unavailable or fail after a real attempt, manually create `.runbook/sessions/SESSION-[YYYYMMDD]-[HHMM].json` from the full `SESSION.md` schema before the first repository edit. Set it to `ACTIVE`, record the user prompt and plan, update it during work, and close it when complete. Never create a short ad-hoc session object with only `name`, `status`, and `summary`.
- Use an atomic checkpoint loop: before a meaningful edit, record the next action; immediately after each file change, record the touched file and update `lastPosition`; before moving to the next implementation step, make sure the previous file change is checkpointed.
- Do not batch all session updates at the end. A step is not complete until both the file change and its runtime session checkpoint are saved.
- Keep the workspace clean. Temporary pentest output, scratch reports, generated payloads, debug dumps, downloaded samples, one-off repro folders, and ad-hoc `tmp` files are disposable unless the user explicitly asks to keep them. Record their paths in the runtime session, delete them before final verification, and do not delete implementation files, tests, fixtures, docs, snapshots, lockfiles, or requested deliverables.
- Read `PROJECT.md` for commands, architecture, important paths, environment notes, tests, gotchas, and do-not-touch areas.
- Read `FRONTEND.md` before UI, layout, visual, responsive, interaction, or design-system work.
- Read `SECURITY.md` before backend or security-sensitive work.
- For project bootstrap from only RunBook files, update `PROJECT.md` after verification with real commands, architecture, paths, environment, tests, and gotchas. Remove every bracket placeholder such as `[command]`, `[name]`, or `[VAR_NAME]`; use `none` or `n/a` where a field does not apply. Checkpoint each created project file before creating the next file, and checkpoint `PROJECT.md` before closing the session.
- For frontend bootstrap or meaningful frontend changes, update `FRONTEND.md` after verification with actual project-specific frontend decisions: tone, palette, typography, layout, component patterns, responsive breakpoints, accessibility expectations, and preview/test commands. If it is still a generic template, replace or add a project-specific baseline near the top before closing. Checkpoint `FRONTEND.md` before closing the session.
- Before closing frontend work, run a placeholder audit such as `rg "\\[e\\.g\\.|#______|___px|\\[font name\\]|\\[describe\\]|\\[value\\]" PROJECT.md FRONTEND.md`. If it finds placeholders in sections that describe the implemented project, replace them with verified facts, `none`, or `n/a`.
- Use `ACTIVE-PLAN.md` only for large or multi-phase active work. Use `BACKLOG.md` only for deferred follow-ups. Use `CHANGELOG.md` only for meaningful completed milestones.
- Update runtime sessions at meaningful milestones with `runbook session step`, `runbook session touch`, `runbook session note`, and `runbook session verify`.
- If CLI session helpers are unavailable and runtime JSON must be edited manually, preserve the `SESSION.md` schema. Keep `summary.filesChanged` as objects with `path` and `change`; keep `summary.verification` as objects with `status` and `command` or `result`.
- Close finished work with `runbook session close --status completed`. Keep only the newest 5 completed/cancelled sessions; never auto-delete recoverable sessions.
- Before the final response, run `runbook session pending` when available. Finished work should report no recoverable runtime sessions; if a session is still `ACTIVE`, finish the bookkeeping or report the work as incomplete.
- Use `SESSION.md` and `.runbook/sessions/` for resumable work, handoff, `run:status`, `run:resume`, or `run:recap`.
- Audit affected files before editing, keep changes scoped, and preserve existing project patterns.
- Verify with the most relevant available command before reporting completion. If verification cannot run, state why.
- Before final response, check for disposable artifacts created during the task and remove them or explicitly document why they remain.
