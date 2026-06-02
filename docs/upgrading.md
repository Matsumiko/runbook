# Upgrading RunBook

Use `runbook upgrade` when a project already has RunBook files and you want to add newer missing files safely.

## Safe Upgrade

Preview first:

```bash
runbook upgrade --dry-run
```

Apply missing files:

```bash
runbook upgrade
```

Upgrade a specific project:

```bash
runbook upgrade ./my-app
```

## Profiles

```bash
runbook upgrade --profile minimal
runbook upgrade --profile frontend
runbook upgrade --profile backend
runbook upgrade --profile full
```

## Overwrite Behavior

By default, existing files are skipped. This protects project-specific memory and team edits.

Use `--force` only when you intentionally want to restore the packaged template over an existing RunBook file:

```bash
runbook upgrade --force
```

## Recommended After Upgrade

```bash
runbook doctor
runbook doctor --strict
runbook context inspect
```

Then review `CODER.md`, `CONTEXT.md`, and any adapter files that matter for your team.

## Migration Notes

RunBook `0.32.0` removes bundled Codex skills. See [migration.md](migration.md) if your project used the old `.agents/skills/` bundle.
