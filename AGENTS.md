# AGENTS.md

Operating entry point for AI coding agents.

Read this file first. Then read `CONTEXT.md` to decide which project files are relevant for the task. Do not load every RunBook file by default.

---

## Core Principles

- Understand the existing system before making meaningful changes.
- Prefer the repository's current patterns over new abstractions.
- Keep changes scoped to the task and its immediate blast radius.
- Do not overwrite user work or revert changes you did not make unless explicitly asked.
- Treat auth, payments, data migrations, secrets, destructive actions, and public contracts as high-risk.
- Verify honestly. Do not claim work is done without stating what was checked.

---

## Context Routing

After this file, read `CONTEXT.md`.

Use it to choose only the files needed for the task:

- `CODER.md` for project commands, architecture, important paths, environment notes, tests, gotchas, and do-not-touch areas.
- `PLAN.md` for active non-trivial execution plans.
- `SESSION.md` and `.runbook/sessions/` for resume, handoff, interrupted work, `run:status`, `run:resume`, or `run:recap`.
- `FRONTEND-DNA.md` for frontend, UI, layout, visual, interaction, or design-system work.
- `BACKEND-SECURITY-CHECKLIST.md` for backend or security-sensitive work.
- `TODO.md` for strategic backlog and prioritization.
- `CHANGELOG.md` for completed meaningful changes.

If `CONTEXT.md` is missing, continue with the smallest safe set of files and report that the context router is unavailable.

---

## Audit Before Editing

For non-trivial tasks:

1. Read the relevant context files.
2. Inspect the affected files, modules, routes, schemas, UI surfaces, tests, or configuration.
3. Identify the actual problem, not just the symptom.
4. Note risks and constraints before editing.
5. Make the smallest effective change.
6. Verify the result.

For trivial tasks, keep the audit lightweight but still inspect before changing.

---

## Planning

Use a written plan for multi-step, risky, or cross-file work.

- Prefer `PLAN.md` for durable task plans.
- Keep the plan short and status-driven.
- Update the plan when the task changes.
- Do not continue with a stale plan if the audit disproves it.

---

## Session Recovery

If the user sends `run:status`, `run:resume`, or `run:recap`, read `SESSION.md` first and follow its protocol.

Use runtime session files in `.runbook/sessions/` for work that is non-trivial, risky, likely to be interrupted, or explicitly needs handoff.

Never write secrets, tokens, cookies, private keys, raw auth headers, or sensitive payloads into session files.

---

## Frontend Work

Before frontend work, read `FRONTEND-DNA.md`.

Preserve existing visual language, component patterns, layout rhythm, interaction behavior, and responsive constraints unless the user explicitly asks for a redesign.

A frontend task is not done if the result feels visually foreign to the product.

---

## Backend and Security Work

Before backend or security-sensitive work, read `BACKEND-SECURITY-CHECKLIST.md`.

Apply it when work touches authentication, authorization, billing, payments, uploads, webhooks, secrets, admin access, account recovery, migrations, or sensitive data.

---

## Verification

Run the most relevant available checks:

- tests for changed behavior
- lint or typecheck for code quality
- build for integration risk
- manual trace when no automated check exists

If a check cannot be run, say why. Do not replace verification with confidence.

---

## Reporting

Final reports should be concise and factual:

- what changed
- what was verified
- what could not be verified
- residual risk or follow-up only when relevant
