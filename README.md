<div align="center">

<img
  src="https://capsule-render.vercel.app/api?type=waving&height=220&color=0:0D1117,45:161B22,100:238636&text=RunBook&fontAlign=50&fontAlignY=38&fontColor=F0F6FC&fontSize=68&desc=Operational%20instruction%20kit%20for%20AI%20coding%20agents&descAlign=50&descAlignY=58&descSize=18"
  alt="RunBook banner"
  width="100%"
/>

<p>
  <a href="https://www.npmjs.com/package/@matsumiko/runbook"><img alt="npm" src="https://img.shields.io/npm/v/@matsumiko/runbook?style=for-the-badge&color=cb3837&labelColor=0d1117"></a>
  <a href="LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/license-MIT-6e40c9?style=for-the-badge&labelColor=0d1117"></a>
  <a href="https://github.com/Matsumiko/runbook"><img alt="GitHub" src="https://img.shields.io/badge/github-runbook-58a6ff?style=for-the-badge&logo=github&labelColor=0d1117"></a>
</p>

<p>
  <img alt="Codex" src="https://img.shields.io/badge/OpenAI%20Codex-ready-10a37f?style=flat-square&logo=openai&logoColor=white">
  <img alt="Claude" src="https://img.shields.io/badge/Claude-ready-cc785c?style=flat-square">
  <img alt="Cursor" src="https://img.shields.io/badge/Cursor-ready-111111?style=flat-square">
  <img alt="Copilot" src="https://img.shields.io/badge/GitHub%20Copilot-ready-2f81f7?style=flat-square&logo=githubcopilot&logoColor=white">
  <img alt="Node" src="https://img.shields.io/badge/node-%3E%3D18-3fb950?style=flat-square&logo=node.js&logoColor=white">
</p>

<img
  src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=16&duration=2800&pause=800&color=58A6FF&center=true&vCenter=true&width=860&lines=Audit+first.+Implement+carefully.+Verify+honestly.;Project+memory+for+AI+coding+agents.;Native+adapters+for+Codex,+Claude,+Cursor,+Copilot,+and+more."
  alt="RunBook animated principles"
/>

<p>
  <b>RunBook gives AI coding agents a disciplined operating layer:</b><br/>
  durable project memory, scoped execution, frontend consistency, backend security review,
  and honest verification.
</p>

</div>

---

## Install

Add RunBook to any project with one command:

```bash
npx @matsumiko/runbook init
```

Add native instruction files for a specific agent:

```bash
npx @matsumiko/runbook init --agent claude
npx @matsumiko/runbook init --agent cursor,copilot
npx @matsumiko/runbook init --agent all
```

Preview the install without writing files:

```bash
npx @matsumiko/runbook init --agent all --dry-run
```

Install into a target directory:

```bash
npx @matsumiko/runbook init ./my-app --agent codex
```

Existing files are skipped by default. Use `--force` only when intentionally replacing existing RunBook files.

---

## Why RunBook

AI coding agents are powerful, but they are easy to derail without durable project context and clear execution rules.

<table>
  <tr>
    <td width="50%">
      <h3>Without RunBook</h3>
      <ul>
        <li>Context resets across sessions.</li>
        <li>Agents guess project conventions.</li>
        <li>Frontend output drifts from the product DNA.</li>
        <li>Security review depends on prompting luck.</li>
        <li>"Done" can mean "generated", not verified.</li>
      </ul>
    </td>
    <td width="50%">
      <h3>With RunBook</h3>
      <ul>
        <li>Project memory lives in durable files.</li>
        <li>Agents audit before meaningful changes.</li>
        <li>Implementation stays small and reversible.</li>
        <li>Security-sensitive work follows a checklist.</li>
        <li>Reports include verification and residual risk.</li>
      </ul>
    </td>
  </tr>
</table>

---

## What Gets Installed

```text
RunBook/
|-- AGENTS.md
|-- CODER.md
|-- PLAN.md
|-- TODO.md
|-- CHANGELOG.md
|-- FRONTEND-DNA.md
|-- BACKEND-SECURITY-CHECKLIST.md
`-- AGENT-VARIANTS.md
```

| File | Role |
| --- | --- |
| `AGENTS.md` | Primary operating guide for AI coding agents. |
| `CODER.md` | Durable project memory: commands, architecture, gotchas, environment notes. |
| `PLAN.md` | Active execution plan that survives session boundaries. |
| `TODO.md` | Strategic backlog ranked by value and impact. |
| `CHANGELOG.md` | Structured record for meaningful completed changes. |
| `FRONTEND-DNA.md` | Visual and interaction rules for frontend work. |
| `BACKEND-SECURITY-CHECKLIST.md` | Security review checklist for sensitive backend surfaces. |
| `AGENT-VARIANTS.md` | Compatibility notes for different AI coding agents. |

---

## Agent Workflow

RunBook standardizes the delivery loop:

```text
SESSION START
  -> read project memory
  -> inspect the affected surface
  -> write a concrete plan
  -> implement the smallest effective change
  -> verify the result
  -> report changes, checks, and residual risk
```

The default operating model pushes agents to:

- audit before meaningful implementation
- preserve existing architecture and UI/UX patterns
- avoid unrelated refactors
- treat backend security as a default requirement
- verify with the best available checks
- avoid claiming completion when validation did not happen

---

## Supported Agents

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

List available adapters:

```bash
npx @matsumiko/runbook list
```

---

## CLI Reference

```text
runbook init [target] [--agent <name|all|none>] [--force] [--dry-run]
runbook list
runbook help
```

| Option | Description |
| --- | --- |
| `--agent codex` | Install the core Codex-compatible `AGENTS.md` workflow. This is the default. |
| `--agent claude` | Add `CLAUDE.md`. |
| `--agent cursor` | Add `.cursor/rules/10-core.mdc`. |
| `--agent copilot` | Add GitHub Copilot instruction files. |
| `--agent gemini` | Add `GEMINI.md`. |
| `--agent windsurf` | Add `.windsurf/rules/10-core.md`. |
| `--agent cline` | Add `.clinerules/core.md`. |
| `--agent aider` | Add `CONVENTIONS.md` and `.aider.conf.yml`. |
| `--agent all` | Add every non-Codex native adapter. |
| `--agent none` | Install only the core RunBook files. |
| `--force` | Overwrite existing files. |
| `--dry-run` | Print planned file operations without writing files. |

---

## Recommended Setup

After installation:

1. Fill `CODER.md` with project commands, architecture notes, environment variables, and known gotchas.
2. Fill `FRONTEND-DNA.md` before assigning frontend work to agents.
3. Use `TODO.md` for strategic backlog items, not temporary scratch notes.
4. Leave `PLAN.md` available for task-specific execution plans.
5. Keep `CHANGELOG.md` for completed meaningful changes only.
6. Add this to the agent entry prompt:

```text
Read AGENTS.md before making changes.
Follow the operating guide and preserve the existing project conventions.
```

---

## Token Usage

RunBook intentionally trades additional context usage for stronger delivery discipline.

It fits projects where consistency, reviewability, and safety matter more than minimizing every token. For very small one-off tasks, a lighter instruction file may be enough.

---

## Repository Layout

```text
.
|-- bin/
|   `-- runbook.js
|-- templates/
|   `-- core/
|-- variants/
|-- AGENTS.md
|-- AGENT-VARIANTS.md
|-- FRONTEND-DNA.md
|-- BACKEND-SECURITY-CHECKLIST.md
|-- package.json
`-- README.md
```

---

## Contributing

Issues and pull requests are welcome.

Changes to the instruction system should be concrete and defensible. Prefer improvements that make agent behavior safer, clearer, more consistent, or easier to audit.

---

## License

MIT. See [LICENSE](LICENSE).

<img
  src="https://capsule-render.vercel.app/api?type=waving&height=120&section=footer&color=0:238636,100:0D1117"
  alt=""
  width="100%"
/>
