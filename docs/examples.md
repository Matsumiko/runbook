# Examples

These examples show the shape of common RunBook output.

## Context Route

```bash
runbook context frontend
```

```text
Frontend work

Read:
  - AGENTS.md
  - CONTEXT.md
  - CODER.md
  - FRONTEND-DNA.md

Use for UI, layout, visual, interaction, responsive, or design-system work.
```

Machine-readable output:

```bash
runbook context frontend --json
```

```json
{
  "route": "frontend",
  "source": "built-in",
  "title": "Frontend work",
  "files": ["AGENTS.md", "CONTEXT.md", "CODER.md", "FRONTEND-DNA.md"],
  "note": "Use for UI, layout, visual, interaction, responsive, or design-system work."
}
```

## Doctor

```bash
runbook doctor
```

```text
RunBook doctor for /path/to/project
  + package.json is valid
  + SESSION-EXAMPLE.json is valid
  + core context files are present
  ? CODER.md has project-specific content
    Fix: Fill CODER.md with real commands, architecture notes, paths, environment notes, tests, and gotchas.

Doctor passed with 1 warning(s).
```

For CI:

```bash
runbook doctor --strict
runbook doctor --json
```

## Session Update

```bash
runbook session new
runbook session note "Found failing auth test"
runbook session step "Fix token refresh handling"
runbook session touch src/auth.ts
runbook session verify "npm test passed"
runbook session show
```

```text
Session: SESSION-20260603-1045.json
Status: ACTIVE
Recoverable: yes

Last position:
  Last action: Verification recorded: npm test passed
  Next step: Close the session if no work remains.
```

