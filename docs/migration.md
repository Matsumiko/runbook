# Migrating From Skill-Based RunBook

RunBook `0.32.0` removes bundled Codex skills from the package.

The project now focuses on:

- structured project memory
- context routing
- resumable sessions
- multi-agent adapters
- verification discipline

## What Changed

The old `.agents/skills/` bundle is no longer installed by RunBook.

Core files such as `AGENTS.md`, `CONTEXT.md`, `PROJECT.md`, `SESSION.md`, `FRONTEND.md`, and `SECURITY.md` remain the main workflow surface.

## What To Do

Upgrade safely:

```bash
runbook upgrade --dry-run
runbook upgrade
runbook doctor
```

If your project depended on old bundled skills, keep those skill files in your own repo or install equivalent external skills through your agent's normal skill/plugin system.

## Recommended Cleanup

1. Make `AGENTS.md` the short operating entry point.
2. Use `CONTEXT.md` to route agents to task-specific files.
3. Move project-specific commands and architecture notes into `PROJECT.md`.
4. Use `.runbook/sessions/` for runtime checkpoints.
5. Keep custom skills separate from RunBook core.

