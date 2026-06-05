# PROJECT.md

Persistent project memory for the RunBook package.

RunBook is an npm-distributed instruction kit and CLI for AI coding agents. The package installs project memory files, context routing, runtime session helpers, and native adapter files for multiple agent tools.

## Commands

```bash
npm test
npm run pack:dry-run
node bin/runbook.js doctor --strict-live
node bin/runbook.js finish
```

## Architecture

Project name: `@matsumiko/runbook`
Type: npm CLI package and markdown instruction kit
Primary language: JavaScript CommonJS
Runtime: Node.js 18+
CLI entrypoint: `bin/runbook.js`

Key boundaries:

- `bin/runbook.js` owns install, upgrade, context routing, doctor, finish, and runtime session commands.
- `templates/` contains files copied into target projects.
- Root markdown files are the canonical package docs and default full-profile sources.
- `variants/` contains thin native adapter files for non-Codex agents.
- `.runbook/sessions/*.json` are local runtime artifacts and must not be tracked.

## Important Paths

```text
bin/runbook.js                 - CLI implementation
test/smoke.js                  - end-to-end CLI smoke coverage
templates/context/CONTEXT.md   - installable context router template
templates/core/                - installable project memory templates
variants/                      - native agent adapters
docs/                          - user-facing CLI, adapter, CI, migration, and session docs
POLICIES.md                    - cleanup, secrets, generated-file, network, and pentest policies
SESSION.md                     - runtime session protocol
SESSION-EXAMPLE.json           - full session schema example
DECISIONS.md                   - accepted package decisions
BUG-HISTORY.md                 - resolved package bugs and regression checks
MODULE-MAP.md                  - package module ownership and first files to inspect
```

## Environment

No runtime secrets are required for local tests.

| Variable | Required | Purpose | Where to get it |
| --- | --- | --- | --- |
| none | no | The smoke suite runs without external services. | n/a |

## Testing

- Smoke tests: `npm test`
- Package contents: `npm run pack:dry-run`
- Local strict health gate: `node bin/runbook.js doctor --strict-live`
- Final local gate: `node bin/runbook.js finish`

The smoke suite creates temporary directories under the OS temp folder and removes them after each scenario.

## Known Gotchas

### Published package version may lag local changes

Problem: npm may still expose an older version while local files already contain unreleased changes.
Why it happens: publish is manual.
How to avoid: trust local `node bin/runbook.js ...` tests for unreleased work and publish only after `npm test` plus `npm run pack:dry-run` pass.

### Root project memory must not stay template-like

Problem: `doctor --strict` fails if root `PROJECT.md` or `FRONTEND.md` still contains bracket placeholders.
Why it happens: RunBook treats root memory like any installed project memory.
How to avoid: keep these files project-specific and keep installable templates under `templates/`.

## Do Not Touch

- Do not track runtime `.runbook/sessions/*.json` files.
- Do not replace user-owned `opencode.json`; merge RunBook keys instead.
- Do not remove adapter variants from `variants/` without updating tests and docs.
- Do not publish without checking package contents.
