# CI Usage

Use `runbook doctor --strict` when CI should fail on incomplete RunBook setup.
Use `runbook doctor --json` when CI needs machine-readable results.

## npm Script

```json
{
  "scripts": {
    "runbook:doctor": "runbook doctor --strict"
  }
}
```

Run it with:

```bash
npm run runbook:doctor
```

## GitHub Actions

```yaml
name: RunBook

on:
  pull_request:
  push:
    branches: [main]

jobs:
  doctor:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npx @matsumiko/runbook doctor --strict
```

## When To Use Strict Mode

Use strict mode when your team wants warnings to block a pull request, such as:

- `PROJECT.md` still looks like a placeholder template
- runtime session JSON files are tracked by git
- adapter files do not route through `CONTEXT.md`
- custom context routes point to missing files

For local development, plain `runbook doctor` is usually enough.
