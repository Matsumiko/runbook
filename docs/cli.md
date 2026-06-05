# RunBook CLI

Use `npx @matsumiko/runbook ...` for one-shot usage, `npx runbook ...` after a local install, or `runbook ...` after a global install.

## Commands

```text
runbook init [target] [--profile <minimal|frontend|backend|full>] [--agent <name|all|none>] [--force] [--dry-run]
runbook upgrade [target] [--profile <minimal|frontend|backend|full>] [--agent <name|all|none>] [--force] [--dry-run]
runbook version [--json]
runbook --version
runbook list
runbook doctor [target] [--strict] [--strict-live] [--json]
runbook finish [target] [--json]
runbook context list [target] [--json]
runbook context <general|frontend|backend|architecture|bugfix|module-work|security-audit|resume|planning|custom-route> [target] [--json]
runbook context inspect [target]
runbook session new [target]
runbook session pending [target]
runbook session resume [target]
runbook session list [target]
runbook session validate [target] [--json]
runbook session latest [target]
runbook session show [target]
runbook session note [target] <text>
runbook session step [target] <text>
runbook session touch [target] <path>
runbook session verify [target] <command-or-result>
runbook session close [target] [--status <completed|paused|cancelled|blocked>]
runbook session clear [target] [--keep <count>] [--older-than <days>] [--dry-run]
runbook session clear [target] --all --force
runbook help
```

## Init Profiles

Default `runbook init` uses `--profile full`.

| Profile | Files | Use when |
| --- | --- | --- |
| `minimal` | `AGENTS.md`, `CONTEXT.md`, `PROJECT.md` | The repo only needs operating rules and project memory. |
| `frontend` | Minimal + `FRONTEND.md` | UI, visual consistency, layout, interaction, or design-system work matters. |
| `backend` | Minimal + `SECURITY.md` | Backend, auth, billing, uploads, webhooks, migrations, or sensitive data matters. |
| `full` | All RunBook files | The team wants context routing, planning, sessions, backlog, changelog, and guardrails. |

The full profile also installs durable project memory files:

- `DECISIONS.md` for accepted decisions agents must not undo accidentally.
- `BUG-HISTORY.md` for fixed bugs, causes, fixes, and regression checks.
- `MODULE-MAP.md` for module responsibilities, first files to inspect, and module-specific constraints.

## Agent Adapters

| Option | Installs |
| --- | --- |
| `--agent codex` | Core Codex-compatible `AGENTS.md`. |
| `--agent opencode` | `opencode.json` plus `.opencode/agents/runbook.md`. Existing `opencode.json` is merged, not replaced. |
| `--agent claude` | `CLAUDE.md`. |
| `--agent cursor` | `.cursor/rules/10-core.mdc`. |
| `--agent copilot` | GitHub Copilot instruction files. |
| `--agent gemini` | `GEMINI.md`. |
| `--agent windsurf` | `.windsurf/rules/10-core.md`. |
| `--agent cline` | `.clinerules/core.md`. |
| `--agent aider` | `CONVENTIONS.md` and `.aider.conf.yml`. |
| `--agent all` | All non-Codex adapters. |
| `--agent none` | Only core RunBook files. |

For opencode projects:

```bash
runbook init --agent opencode
opencode run --agent runbook "fix failing test"
```

If `opencode.json` already exists, RunBook preserves existing settings, appends `AGENTS.md`, `CONTEXT.md`, and `SESSION.md` to `instructions`, and only changes `default_agent` when it is missing or `--force` is used.

## Safety Options

| Option | Behavior |
| --- | --- |
| `--dry-run` | Prints planned file operations without writing. |
| `--force` | Overwrites existing RunBook files. Use intentionally. |
| `--strict` | For `doctor`, fails with exit code `1` when warnings are present. Useful in CI. |
| `--strict-live` | For `doctor`, also validates runtime sessions and fails if recoverable sessions remain. Implies `--strict`. |
| `--json` | Prints machine-readable JSON for `version`, `doctor`, and `context` routes. |
| `doctor [target]` | Checks context files, placeholder content, session gitignore, runtime sessions, adapter routing, and custom route file targets. |

`runbook finish [target]` is the final gate for meaningful task completion. It runs `doctor --strict-live`, validates runtime session files, checks that no recoverable session remains, and fails if project memory files still look like untouched templates.

See [ci.md](ci.md) for a GitHub Actions example.

## Session Updates

Before repository-changing task work, agents should check for interrupted work:

```bash
runbook session pending
```

If a recoverable session exists, the agent should wait for the user to type exactly `I will fight`, then inspect resume context:

```bash
runbook session resume
```

Use these commands while work is in progress so resume/handoff state does not depend on manual JSON editing:

```bash
runbook session note "Found failing auth test"
runbook session step "Fix token refresh handling"
runbook session touch src/auth.ts
runbook session verify "npm test passed"
```

Each command updates the latest recoverable runtime session in `.runbook/sessions/`.

Use `runbook session validate [target]` when reviewing generated session files or debugging resume behavior. It rejects malformed JSON, short ad-hoc session objects, and missing required schema sections.

Completed and cancelled sessions are automatically kept to the newest 5 by default. Recoverable sessions (`ACTIVE`, `PAUSED`, `INTERRUPTED`, `BLOCKED`) are never removed unless `--all --force` is used.
