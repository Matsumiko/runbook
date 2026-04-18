<div align="center">

# RunBook

Operational instruction kit for AI coding agents.

[![npm](https://img.shields.io/npm/v/@matsumiko/runbook?style=flat-square&color=cb3837)](https://www.npmjs.com/package/@matsumiko/runbook)
[![License](https://img.shields.io/badge/license-MIT-6e40c9?style=flat-square&logo=opensourceinitiative&logoColor=white)](LICENSE)
[![Made for Codex](https://img.shields.io/badge/made%20for-OpenAI%20Codex-10a37f?style=flat-square&logo=openai&logoColor=white)](https://openai.com/codex)
[![Works with Claude](https://img.shields.io/badge/works%20with-Claude-cc785c?style=flat-square)](https://anthropic.com)
[![Works with Cursor](https://img.shields.io/badge/works%20with-Cursor-1a1a1a?style=flat-square)](https://cursor.sh)

RunBook installs a structured operating system for AI coding agents:
audit first, preserve project context, make scoped changes, verify work, and report risk clearly.

</div>

---

## What It Is

RunBook is a set of Markdown instruction files and native agent adapters for software projects that use AI coding agents.

It is not a framework, runtime, or SDK. It is a practical operating layer that gives agents:

- a stable project memory
- an audit-first execution model
- frontend consistency rules
- backend security review discipline
- task planning and changelog conventions
- native instruction files for multiple agent tools

RunBook is useful when agent output must stay consistent across sessions, tools, and contributors.

---

## Quick Start

Install the core RunBook files into the current project:

```bash
npx @matsumiko/runbook init
```

Install with a specific native agent adapter:

```bash
npx @matsumiko/runbook init --agent claude
npx @matsumiko/runbook init --agent cursor,copilot
npx @matsumiko/runbook init --agent all
```

Preview the files without writing anything:

```bash
npx @matsumiko/runbook init --agent all --dry-run
```

Install into another directory:

```bash
npx @matsumiko/runbook init ./my-app --agent codex
```

By default, existing files are skipped. Use `--force` only when intentionally replacing existing RunBook files.

---

## CLI Reference

```text
runbook init [target] [--agent <name|all|none>] [--force] [--dry-run]
runbook list
runbook help
```

Supported agent selections:

| Selection | Result |
| --- | --- |
| `codex` | Installs the core `AGENTS.md` based workflow. This is the default. |
| `claude` | Adds `CLAUDE.md`. |
| `cursor` | Adds `.cursor/rules/10-core.mdc`. |
| `copilot` | Adds GitHub Copilot instruction files. |
| `gemini` | Adds `GEMINI.md`. |
| `windsurf` | Adds `.windsurf/rules/10-core.md`. |
| `cline` | Adds `.clinerules/core.md`. |
| `aider` | Adds `CONVENTIONS.md` and `.aider.conf.yml`. |
| `all` | Adds every non-Codex native adapter. |
| `none` | Installs only the core RunBook files. |

List supported adapters:

```bash
npx @matsumiko/runbook list
```

---

## Installed Files

| File | Purpose |
| --- | --- |
| `AGENTS.md` | Primary operating guide for agents. |
| `CODER.md` | Durable project memory: commands, architecture, gotchas, environment notes. |
| `PLAN.md` | Active execution plan that survives session boundaries. |
| `TODO.md` | Strategic backlog ranked by value and impact. |
| `CHANGELOG.md` | Structured record for meaningful completed changes. |
| `FRONTEND-DNA.md` | Visual and interaction rules for frontend work. |
| `BACKEND-SECURITY-CHECKLIST.md` | Security review checklist for sensitive backend surfaces. |
| `AGENT-VARIANTS.md` | Compatibility notes for different AI coding agents. |

Native adapters are installed from `variants/` when selected with `--agent`.

---

## Recommended Setup

After installation:

1. Fill `CODER.md` with project commands, architecture notes, environment variables, and known gotchas.
2. Fill `FRONTEND-DNA.md` before assigning frontend work to agents.
3. Use `TODO.md` for strategic backlog items, not short-lived scratch notes.
4. Leave `PLAN.md` available for the agent to write task-specific execution plans.
5. Keep `CHANGELOG.md` for completed meaningful changes only.
6. Add an instruction to the agent entry prompt:

```text
Read AGENTS.md before making changes.
Follow the operating guide and preserve the existing project conventions.
```

---

## Agent Workflow

RunBook is built around a simple delivery loop:

```text
Understand -> Plan -> Execute -> Verify -> Report
```

The default operating rules require agents to:

- inspect the relevant project context before meaningful implementation
- prefer the smallest effective change
- preserve existing product architecture and UI/UX patterns
- treat backend security as a default requirement
- verify with tests, lint, typecheck, build, or manual traces where practical
- state residual risk honestly instead of claiming unverified completion

---

## Compatibility

| Agent | Native instruction path |
| --- | --- |
| OpenAI Codex | `AGENTS.md` |
| Claude Code | `CLAUDE.md` |
| Cursor | `.cursor/rules/*.mdc` |
| GitHub Copilot | `.github/copilot-instructions.md` and `.github/instructions/*.instructions.md` |
| Gemini CLI | `GEMINI.md` |
| Windsurf | `.windsurf/rules/*.md` |
| Cline | `.clinerules/*.md` |
| Aider | `CONVENTIONS.md` with `.aider.conf.yml` |

The root kit is the canonical policy pack. The `variants/` directory contains smaller native adapters for tools that read instructions from tool-specific paths.

---

## Token Usage

RunBook intentionally trades additional context usage for stronger delivery discipline.

It is best suited for projects where consistency, reviewability, and safety matter more than minimizing every token. For very small one-off tasks, a lighter instruction file may be enough.

---

## Repository Layout

```text
RunBook/
├── bin/runbook.js
├── templates/core/
├── variants/
├── AGENTS.md
├── AGENT-VARIANTS.md
├── FRONTEND-DNA.md
├── BACKEND-SECURITY-CHECKLIST.md
└── README.md
```

---

## Contributing

Issues and pull requests are welcome.

Changes to the instruction system should be concrete and defensible. Prefer improvements that make agent behavior safer, clearer, more consistent, or easier to audit.

---

## License

MIT. See [LICENSE](LICENSE).
