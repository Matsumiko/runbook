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

## 2026-06-05 12:50 WIB - feat memory - decisions, bug history, and module map

### Summary
Added three durable project memory files so agents can preserve accepted decisions, avoid repeated bugs, and start module work from the right files without introducing a separate overlapping pitfalls file.

### Type
feat / docs / chore

### Area
cli / docs / project-memory / context-routing / package

### Severity
medium

### Changes
- Added `DECISIONS.md` for accepted product, business, architecture, security, data, and UX decisions.
- Added `BUG-HISTORY.md` for fixed bugs, causes, fixes, changed files, and regression checks.
- Added `MODULE-MAP.md` for module responsibilities, first files to inspect, related rules, common tasks, and module-specific pitfalls.
- Added `architecture`, `bugfix`, and `module-work` context routes.
- Added the three files to full-profile installs and npm package contents.

### Files
- `bin/runbook.js` - Added install profile entries, inspect entries, and built-in context routes.
- `templates/core/DECISIONS.md`, `templates/core/BUG-HISTORY.md`, `templates/core/MODULE-MAP.md` - Added installable templates.
- `DECISIONS.md`, `BUG-HISTORY.md`, `MODULE-MAP.md` - Added RunBook package memory.
- `CONTEXT.md`, `templates/context/CONTEXT.md`, `docs/context-routing.md`, `docs/cli.md`, `README.md` - Documented routing and install behavior.
- `test/smoke.js` - Added route and install assertions.

### Verification
- [x] `npm test`
- [x] `npm run pack:dry-run`
- [x] `node bin/runbook.js doctor --strict-live`
- [x] `node bin/runbook.js finish`

### Migration / Deploy
- Migration: none
- Env vars: none
- Deploy steps: publish the next npm version after verification
- Rollback: remove the memory files, context routes, package entries, docs, and tests before publish

### Residual Risk
- Existing installed projects only receive these files after `runbook upgrade --profile full` or a targeted manual copy.

## 2026-06-05 12:35 WIB - feat cli - finish gate and modern runbook controls

### Summary
Added stricter completion checks, runtime session validation, cleanup policy routing, artifact registry fields, and an adapter quality matrix so RunBook installs can be proven before agents claim work is complete.

### Type
feat / docs / chore

### Area
cli / docs / agent-instructions / session-recovery / package

### Severity
medium

### Changes
- Added `runbook doctor --strict-live` for live session validation and pending-session checks.
- Added `runbook session validate` to reject malformed or short ad-hoc runtime session files.
- Added `runbook finish` as a final gate over doctor, session schema, pending sessions, and placeholder memory files.
- Added `POLICIES.md` plus the `security-audit` context route for cleanup, secrets, destructive actions, generated files, network, and pentest boundaries.
- Added `summary.artifacts` to runtime sessions for created, disposable, kept, and cleaned artifacts.
- Added `docs/adapter-quality-matrix.md` to state which adapters are test-covered and which still need live runtime proof.

### Files
- `bin/runbook.js` - Added strict-live, finish, session validation, security-audit route, and artifact defaults.
- `POLICIES.md` - Added cross-cutting agent policies.
- `SESSION-EXAMPLE.json` - Added artifact registry example fields.
- `docs/adapter-quality-matrix.md` - Added adapter validation matrix.
- `docs/cli.md`, `docs/session-recovery.md`, `README.md`, `CONTEXT.md` - Documented the new workflow.

### Verification
- [x] `npm test`
- [x] `npm run pack:dry-run`
- [x] Manual CLI checks for `context security-audit`, `session validate`, `doctor --strict-live`, and `finish` are covered by smoke tests

### Migration / Deploy
- Migration: none
- Env vars: none
- Deploy steps: publish the next npm version after verification
- Rollback: revert the CLI/docs changes before publish

### Residual Risk
- Live external agent runtime proof still depends on provider availability and must be recorded honestly in the adapter matrix.

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
- Restructured `PROJECT.md` and `templates/core/PROJECT.md` as scannable project memory.
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
- Replaced the README ASCII header with a branded RunBook logo asset and refreshed adapter badges with LobeHub icons.
- Moved CLI smoke coverage into `test/smoke.js`.
- Bumped package version to `0.32.0`.

### Files
- `bin/runbook.js` - added context routing, context inspection, init profiles, and session helper commands.
- `test/smoke.js` - added maintainable CLI smoke test coverage.
- `CONTEXT.md` - added task-based context router.
- `templates/context/CONTEXT.md` - added installable context router template.
- `AGENTS.md` - simplified as the operating entry point.
- `PROJECT.md` - restructured project memory template.
- `templates/core/PROJECT.md` - aligned generated project memory template.
- `SESSION.md` - documented new session helper commands.
- `variants/` - aligned agent adapters with `CONTEXT.md`.
- `README.md` - updated product narrative, CLI reference, profiles, session flow, and example workflow.
- `assets/runbook-logo.png` - added branded README logo asset.
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
