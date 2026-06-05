# MODULE-MAP.md

Map of important RunBook package modules.

## CLI

Responsible for:
- Installing and upgrading RunBook files
- Printing context routes
- Managing runtime sessions
- Running doctor and finish gates
- Merging opencode config

Main files:
- `bin/runbook.js`
- `test/smoke.js`

Related rules:
- Do not replace user-owned config unless `--force` is explicit.
- Runtime sessions must stay local and resumable.
- Completion claims should pass `doctor --strict-live` and `finish`.

Common tasks:
- Add a CLI command
- Add a context route
- Add a doctor or finish check
- Update package install profile behavior

Module pitfalls:
- Keep parser behavior backward compatible for positional target arguments.
- Update help text, docs, package files, and smoke tests together.

## Core Memory Files

Responsible for:
- Project operating instructions
- Context routing
- Durable project memory
- Session protocol
- Cleanup and security policies

Main files:
- `AGENTS.md`
- `CONTEXT.md`
- `PROJECT.md`
- `SESSION.md`
- `DECISIONS.md`
- `BUG-HISTORY.md`
- `MODULE-MAP.md`
- `POLICIES.md`
- `SECURITY.md`
- `FRONTEND.md`

Related rules:
- Durable memory should stay compact and reusable.
- Active progress belongs in `.runbook/sessions/*.json`.
- Installable templates belong under `templates/`.

Common tasks:
- Clarify agent behavior
- Add project memory fields
- Add cleanup or session protocol rules

Module pitfalls:
- Avoid duplicate responsibilities between memory files.
- Keep installed templates useful but not falsely project-specific.

## Agent Adapters

Responsible for:
- Native instruction files for external coding agents
- Routing each agent back to core RunBook context

Main files:
- `variants/claude/CLAUDE.md`
- `variants/opencode/.opencode/agents/runbook.md`
- `variants/cursor/.cursor/rules/10-core.mdc`
- `variants/copilot/.github/copilot-instructions.md`
- `variants/gemini/GEMINI.md`
- `variants/windsurf/.windsurf/rules/10-core.md`
- `variants/cline/.clinerules/core.md`
- `variants/aider/CONVENTIONS.md`

Related rules:
- Adapters should stay thin.
- Core behavior should live in canonical RunBook files.
- Adapter proof must distinguish local smoke tests from live external agent tests.

Common tasks:
- Add a native adapter
- Refresh adapter language after core protocol changes
- Update adapter quality matrix

Module pitfalls:
- Do not duplicate long policy text in every adapter.
- Keep `CONTEXT.md` routing visible in each adapter.
