# RunBook CLI

Use `npx @matsumiko/runbook ...` for one-shot usage, `npx runbook ...` after a local install, or `runbook ...` after a global install.

## Commands

```text
runbook init [target] [--profile <minimal|frontend|backend|full>] [--agent <name|all|none>] [--force] [--dry-run]
runbook upgrade [target] [--profile <minimal|frontend|backend|full>] [--agent <name|all|none>] [--force] [--dry-run]
runbook version [--json]
runbook --version
runbook list
runbook doctor [target] [--strict] [--json]
runbook context list [target] [--json]
runbook context <general|frontend|backend|resume|planning|custom-route> [target] [--json]
runbook context inspect [target]
runbook session new [target]
runbook session list [target]
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
| `minimal` | `AGENTS.md`, `CONTEXT.md`, `CODER.md` | The repo only needs operating rules and project memory. |
| `frontend` | Minimal + `FRONTEND-DNA.md` | UI, visual consistency, layout, interaction, or design-system work matters. |
| `backend` | Minimal + `BACKEND-SECURITY-CHECKLIST.md` | Backend, auth, billing, uploads, webhooks, migrations, or sensitive data matters. |
| `full` | All RunBook files | The team wants context routing, planning, sessions, backlog, changelog, and guardrails. |

## Agent Adapters

| Option | Installs |
| --- | --- |
| `--agent codex` | Core Codex-compatible `AGENTS.md`. |
| `--agent claude` | `CLAUDE.md`. |
| `--agent cursor` | `.cursor/rules/10-core.mdc`. |
| `--agent copilot` | GitHub Copilot instruction files. |
| `--agent gemini` | `GEMINI.md`. |
| `--agent windsurf` | `.windsurf/rules/10-core.md`. |
| `--agent cline` | `.clinerules/core.md`. |
| `--agent aider` | `CONVENTIONS.md` and `.aider.conf.yml`. |
| `--agent all` | All non-Codex adapters. |
| `--agent none` | Only core RunBook files. |

## Safety Options

| Option | Behavior |
| --- | --- |
| `--dry-run` | Prints planned file operations without writing. |
| `--force` | Overwrites existing RunBook files. Use intentionally. |
| `--strict` | For `doctor`, fails with exit code `1` when warnings are present. Useful in CI. |
| `--json` | Prints machine-readable JSON for `version`, `doctor`, and `context` routes. |
| `doctor [target]` | Checks context files, placeholder content, session gitignore, runtime sessions, adapter routing, and custom route file targets. |

See [ci.md](ci.md) for a GitHub Actions example.

## Session Updates

Use these commands while work is in progress so resume/handoff state does not depend on manual JSON editing:

```bash
runbook session note "Found failing auth test"
runbook session step "Fix token refresh handling"
runbook session touch src/auth.ts
runbook session verify "npm test passed"
```

Each command updates the latest recoverable runtime session in `.runbook/sessions/`.
