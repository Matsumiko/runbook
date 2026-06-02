# CHANGELOG

All meaningful changes to this project are recorded here.
Incomplete work must not be logged as finished.

---

## Format Reference

```markdown
## YYYY-MM-DD HH:mm TZ - [type] [area] - short title

### Summary
[What changed, why, and the outcome.]

### Type
feat / fix / refactor / security / perf / infra / docs / chore / breaking

### Area
frontend-client / admin-panel / api / auth / db / infra / docs / config

### Severity
low / medium / high / critical

### Changes
- [Specific change]

### Files
- `path/to/file` - [what changed]

### Verification
- [ ] [Verification step]

### Migration / Deploy
- Migration: [filename or none]
- Env vars: [list or none]
- Deploy steps: [steps or none]
- Rollback: [rollback path]

### Residual Risk
- [Risk or none identified]
```

---

## Entries

<!-- Most recent entry at the top -->

## 2026-06-03 00:40 WIB - feat core - context routing and session CLI upgrade

### Summary
RunBook now focuses on structured project memory, task-based context routing, resumable sessions, multi-agent adapters, and verification discipline. Bundled Codex skills were removed so the package stays smaller and the core workflow is clearer.

### Type
feat / docs / chore / breaking

### Area
cli / docs / agent-instructions / session-recovery / package

### Severity
medium

### Changes
- Added `CONTEXT.md` as the default task-based context routing map.
- Added `runbook context list`, `general`, `frontend`, `backend`, `resume`, `planning`, and `inspect`.
- Added custom context route support from project `CONTEXT.md`.
- Kept custom route examples inactive by default so fresh projects do not route agents to missing project docs.
- Simplified `AGENTS.md` into a concise operating entry point that routes through `CONTEXT.md`.
- Restructured `CODER.md` and `templates/core/CODER.md` as scannable project memory.
- Added `templates/context/CONTEXT.md`.
- Removed bundled `.agents/skills/`.
- Added init profiles: `minimal`, `frontend`, `backend`, and `full`.
- Added `runbook upgrade` for safely adding missing files to existing RunBook installs.
- Added session helpers: `new`, `latest`, `show`, and `close`.
- Added session progress helpers: `note`, `step`, `touch`, and `verify`.
- Added `runbook doctor` for non-destructive RunBook health checks with actionable fix hints.
- Added doctor warnings for custom context routes that point to missing project files.
- Added `runbook doctor --strict` for CI workflows that should fail on warnings.
- Added `runbook version`, `runbook --version`, and JSON version output.
- Added machine-readable JSON output for `runbook doctor` and `runbook context`.
- Updated multi-agent adapters to use `CONTEXT.md` instead of loading all project memory files upfront.
- Updated README positioning, CLI docs, profile docs, session docs, and the real workflow example.
- Split detailed usage docs into `docs/` so README stays focused as a project entry point.
- Added migration guidance for users coming from skill-based RunBook releases.
- Added CI usage documentation for `runbook doctor --strict`.
- Added example output documentation and a release checklist.
- Moved CLI smoke coverage into `test/smoke.js`.
- Bumped package version to `0.32.0`.

### Files
- `bin/runbook.js` - added context routing, context inspection, init profiles, and session helper commands.
- `test/smoke.js` - added maintainable CLI smoke test coverage.
- `CONTEXT.md` - added task-based context router.
- `templates/context/CONTEXT.md` - added installable context router template.
- `AGENTS.md` - simplified as the operating entry point.
- `CODER.md` - restructured project memory template.
- `templates/core/CODER.md` - aligned generated project memory template.
- `SESSION.md` - documented new session helper commands.
- `variants/` - aligned agent adapters with `CONTEXT.md`.
- `README.md` - updated product narrative, CLI reference, profiles, session flow, and example workflow.
- `docs/` - added focused guides for CLI usage, context routing, session recovery, adapters, and upgrading.
- `package.json` - added package metadata, updated tests, and bumped version.
- `.agents/skills/` - removed bundled Codex skill files.

### Verification
- [x] `npm test`
- [x] `npm pack --dry-run`
- [x] Invalid context route fails with exit code `1`
- [x] Invalid init profile fails with exit code `1`
- [x] Invalid session close status fails with exit code `1`
- [x] Custom context route from project `CONTEXT.md` resolves through the CLI
- [x] Actual `init`, adapter install, `upgrade`, and `--force` behavior are covered by smoke tests
- [x] `runbook doctor --strict` fails when warnings are present
- [x] `runbook --version`, `runbook version --json`, `runbook context --json`, and `runbook doctor --json` are covered by smoke tests
- [x] Scan confirms no active `skill/.agents` references remain
- [x] Scan confirms old adapter instruction pattern is removed

### Migration / Deploy
- Migration: none
- Env vars: none
- Deploy steps: publish npm version `0.32.0`
- Rollback: restore version `0.31.0` or revert this changeset

### Residual Risk
- Existing users relying on bundled skills need to keep using the previous release or bring their own skills.
- New session commands create local `.runbook/sessions/*.json` files; these should remain ignored by `.runbook/sessions/.gitignore`.
