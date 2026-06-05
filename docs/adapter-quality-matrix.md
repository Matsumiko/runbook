# Adapter Quality Matrix

This matrix tracks what has been validated for each RunBook adapter.

| Adapter | Native files installed | Config merge tested | Context route tested | Session lifecycle tested | Frontend route tested | Cleanup policy tested | Live agent tested |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Codex | yes | n/a | yes | yes | yes | yes | local CLI only |
| opencode | yes | yes | yes | yes | yes | yes | blocked by provider limit during latest check |
| Claude Code / openclaude | yes | n/a | yes | yes | yes | yes | manually smoke-tested in local TUI flow |
| Cursor | yes | n/a | yes | inherited | yes | yes | not live-tested |
| GitHub Copilot | yes | n/a | yes | inherited | yes | yes | not live-tested |
| Gemini CLI | yes | n/a | yes | inherited | yes | yes | not live-tested |
| Windsurf | yes | n/a | yes | inherited | yes | yes | not live-tested |
| Cline | yes | n/a | yes | inherited | yes | yes | not live-tested |
| Aider | yes | n/a | yes | inherited | yes | yes | not live-tested |

## Meaning

- `yes` means the behavior is covered by repository smoke tests or direct local checks.
- `inherited` means the adapter delegates the behavior to core RunBook files such as `SESSION.md`, `CONTEXT.md`, and `POLICIES.md`.
- `not live-tested` means the adapter file exists and is test-covered, but the actual external agent runtime was not exercised in the latest release check.
- Provider limits must be recorded honestly instead of treated as a pass.

Before a release, update this file after running:

```bash
npm test
npm run pack:dry-run
runbook doctor --strict-live
```
