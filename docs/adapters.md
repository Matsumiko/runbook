# Agent Adapters

RunBook ships native instruction files for multiple AI coding agents.

For current validation status, see [adapter-quality-matrix.md](adapter-quality-matrix.md).

| Agent | Native instruction files |
| --- | --- |
| OpenAI Codex | `AGENTS.md` |
| opencode | `opencode.json`, `.opencode/agents/runbook.md` |
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/*.mdc` |
| GitHub Copilot | `.github/copilot-instructions.md`, `.github/instructions/*.instructions.md` |
| Gemini CLI | `GEMINI.md` |
| Windsurf | `.windsurf/rules/*.md` |
| Cline | `.clinerules/*.md` |
| Aider | `CONVENTIONS.md`, `.aider.conf.yml` |

List supported adapters:

```bash
runbook list
```

Install adapters:

```bash
runbook init --agent claude
runbook init --agent opencode
runbook init --agent cursor,copilot
runbook init --agent all
```

## opencode

The opencode adapter installs a project-local RunBook agent and merges RunBook instructions into `opencode.json`.

```bash
runbook init --agent opencode
opencode run --agent runbook "fix failing test"
```

RunBook treats `opencode.json` as user-owned configuration:

- if `opencode.json` does not exist, RunBook creates it
- if it exists, RunBook preserves existing keys and appends `AGENTS.md`, `CONTEXT.md`, and `SESSION.md` to `instructions`
- if `default_agent` already exists, RunBook preserves it unless `--force` is used
- if `opencode.json` is invalid JSON, RunBook skips it unless `--force` is used

Use `--force` intentionally when you want RunBook to set `default_agent` to `runbook`.

Adapters should point agents back to the same core idea:

1. Start from the native instruction file.
2. Read `CONTEXT.md`.
3. Load task-specific RunBook files.
4. Verify before claiming completion.
