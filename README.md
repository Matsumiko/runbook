<div align="center">

<br/>

<img src="assets/runbook-logo.png" alt="RunBook" width="720"/>

### Operational instruction kit for AI coding agents

<br/>

[![npm](https://img.shields.io/npm/v/%40matsumiko%2Frunbook?style=flat-square&color=0ea5e9&labelColor=0f172a&logo=npm&logoColor=white)](https://www.npmjs.com/package/@matsumiko/runbook)
[![License](https://img.shields.io/badge/license-MIT-8b5cf6?style=flat-square&labelColor=0f172a)](LICENSE)
[![GitHub](https://img.shields.io/badge/github-runbook-94a3b8?style=flat-square&logo=github&labelColor=0f172a)](https://github.com/Matsumiko/runbook)

<br/>

<img src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/openai.svg" alt="" width="15" height="15"/> ![Codex](https://img.shields.io/badge/OpenAI%20Codex-ready-10a37f?style=flat-square&labelColor=0f172a) <img src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/claude-color.svg" alt="" width="15" height="15"/> ![Claude](https://img.shields.io/badge/Claude%20Code-ready-cc785c?style=flat-square&labelColor=0f172a) <img src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/cursor.svg" alt="" width="15" height="15"/> ![Cursor](https://img.shields.io/badge/Cursor-ready-e2e8f0?style=flat-square&labelColor=0f172a) <img src="https://unpkg.com/@lobehub/icons-static-svg@latest/icons/githubcopilot.svg" alt="" width="15" height="15"/> ![Copilot](https://img.shields.io/badge/GitHub%20Copilot-ready-2f81f7?style=flat-square&labelColor=0f172a) ![Node](https://img.shields.io/badge/node-%3E%3D18-22c55e?style=flat-square&logo=node.js&logoColor=white&labelColor=0f172a)

<br/>

> **Audit first. Implement carefully. Verify honestly.**

</div>

---

RunBook helps AI coding agents work with structured project memory, context routing, session recovery, and verification discipline.

It gives a repository:

- `AGENTS.md` as the agent operating entry point
- `CONTEXT.md` as a routing map so agents read the right files for the task
- `CODER.md` as durable project memory for commands, architecture, paths, environment, tests, and gotchas
- `SESSION.md` plus `.runbook/sessions/` for resumable work
- frontend and backend guardrails
- native adapters for Claude, Cursor, Copilot, Gemini, Windsurf, Cline, and Aider

The focus is the core workflow: project memory, context routing, recovery, adapters, and honest verification.

## Quick Start

Use it once without installing:

```bash
npx @matsumiko/runbook init
```

Pick a profile:

```bash
npx @matsumiko/runbook init --profile minimal
npx @matsumiko/runbook init --profile frontend
npx @matsumiko/runbook init --profile backend
npx @matsumiko/runbook init --profile full
```

Add adapter files:

```bash
npx @matsumiko/runbook init --agent claude
npx @matsumiko/runbook init --agent cursor,copilot
npx @matsumiko/runbook init --agent all
```

Preview before writing:

```bash
npx @matsumiko/runbook init --dry-run
npx @matsumiko/runbook upgrade --dry-run
```

Upgrade an existing RunBook install safely:

```bash
npx @matsumiko/runbook upgrade
npx @matsumiko/runbook --version
npx @matsumiko/runbook doctor
npx @matsumiko/runbook doctor --strict
npx @matsumiko/runbook doctor --json
```

## Install Options

| Use case | Command | Run command |
| --- | --- | --- |
| One-shot usage | no install needed | `npx @matsumiko/runbook ...` |
| Project-local dependency | `npm i -D @matsumiko/runbook` | `npx runbook ...` or an npm script |
| Global CLI | `npm i -g @matsumiko/runbook` | `runbook ...` |

## Profiles

Default `runbook init` uses `--profile full`.

| Profile | Installs | Best for |
| --- | --- | --- |
| `minimal` | `AGENTS.md`, `CONTEXT.md`, `CODER.md` | Small repos that only need operating rules and project memory. |
| `frontend` | Minimal + `FRONTEND-DNA.md` | UI, visual consistency, interaction, and design-system work. |
| `backend` | Minimal + `BACKEND-SECURITY-CHECKLIST.md` | API, auth, data, billing, uploads, webhooks, or migrations. |
| `full` | All RunBook files | Teams that want planning, sessions, backlog, changelog, guardrails, and adapters. |

## Core Workflow

1. Run `runbook init` in the project root.
2. Fill `CODER.md` with real commands, architecture, important paths, environment notes, tests, and gotchas.
3. Have the agent read `AGENTS.md`.
4. Have the agent read `CONTEXT.md` and choose task-specific files.
5. For long work, create a checkpoint with `runbook session new`.
6. Verify the change before claiming completion.
7. Record meaningful finished work in `CHANGELOG.md`.

## Context Routing

RunBook uses `CONTEXT.md` so agents do not need to load every file by default.

```bash
npx @matsumiko/runbook context list
npx @matsumiko/runbook context frontend
npx @matsumiko/runbook context backend
npx @matsumiko/runbook context resume
npx @matsumiko/runbook context planning
npx @matsumiko/runbook context inspect
```

Read more: [docs/context-routing.md](docs/context-routing.md)

## Session Recovery

For non-trivial work, RunBook can create project-local runtime sessions:

```bash
npx @matsumiko/runbook session new
npx @matsumiko/runbook session note "Found failing auth test"
npx @matsumiko/runbook session step "Fix token refresh handling"
npx @matsumiko/runbook session verify "npm test passed"
npx @matsumiko/runbook session latest
npx @matsumiko/runbook session show
npx @matsumiko/runbook session close --status completed
```

Read more: [docs/session-recovery.md](docs/session-recovery.md)

## Example: Fixing A Bug With RunBook

1. `runbook init --agent codex`
2. Fill `CODER.md` with project commands and gotchas.
3. Agent reads `AGENTS.md`, then `CONTEXT.md`.
4. For a frontend bug, agent uses `runbook context frontend` and reads `FRONTEND-DNA.md`.
5. For a backend or auth bug, agent uses `runbook context backend` and reads `BACKEND-SECURITY-CHECKLIST.md`.
6. For a long task, agent creates a checkpoint with `runbook session new`.
7. Agent verifies the fix and closes the session.

## Docs

- [CLI reference](docs/cli.md)
- [Context routing](docs/context-routing.md)
- [Session recovery](docs/session-recovery.md)
- [Agent adapters](docs/adapters.md)
- [Examples](docs/examples.md)
- [Upgrading existing installs](docs/upgrading.md)
- [CI usage](docs/ci.md)
- [Release checklist](docs/release.md)
- [Migrating from skill-based RunBook](docs/migration.md)

## Repository Layout

```text
.
|-- bin/
|   `-- runbook.js
|-- docs/
|-- templates/
|-- variants/
|-- AGENTS.md
|-- CONTEXT.md
|-- CODER.md
|-- SESSION.md
|-- FRONTEND-DNA.md
|-- BACKEND-SECURITY-CHECKLIST.md
`-- package.json
```

## Contributing

Issues and pull requests are welcome.

Changes to the instruction system should be concrete, defensible, and helpful for safer, more consistent, or easier-to-audit agent work.

## License

MIT. See [LICENSE](LICENSE).
