# Agent Adapters

RunBook ships native instruction files for multiple AI coding agents.

| Agent | Native instruction files |
| --- | --- |
| OpenAI Codex | `AGENTS.md` |
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
runbook init --agent cursor,copilot
runbook init --agent all
```

Adapters should point agents back to the same core idea:

1. Start from the native instruction file.
2. Read `CONTEXT.md`.
3. Load task-specific RunBook files.
4. Verify before claiming completion.

