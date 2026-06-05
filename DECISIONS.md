# DECISIONS.md

Accepted decisions for the RunBook package.

## Uppercase Markdown Files Are Canonical

Status: accepted
Date: 2026-06-05

Decision:
RunBook uses uppercase root memory filenames such as `PROJECT.md`, `SESSION.md`, `DECISIONS.md`, `BUG-HISTORY.md`, and `MODULE-MAP.md`.

Reason:
The package already uses uppercase canonical instruction files, and consistency matters more than preserving older lowercase naming ideas.

Impact:
- CLI install profiles copy uppercase files.
- Context routes refer to uppercase files.
- Docs should not introduce duplicate lowercase variants.

Review:
Only with explicit package owner approval.

## Long-Term Memory Is Separate From Runtime Sessions

Status: accepted
Date: 2026-06-05

Decision:
Durable project facts live in project memory files, while active task progress lives in `.runbook/sessions/*.json`.

Reason:
Mixing task logs into durable memory makes future agents over-read stale work and increases hallucinated continuity.

Impact:
- `DECISIONS.md` stores accepted decisions.
- `BUG-HISTORY.md` stores fixed bugs and regression checks.
- `MODULE-MAP.md` stores module ownership and likely files.
- Runtime session files store in-progress work, handoff state, verification, and artifacts.

Review:
Only with explicit package owner approval.
