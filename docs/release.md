# Release Checklist

Run this checklist before publishing RunBook.

## Preflight

```bash
npm test
npm pack --dry-run
node -c bin/runbook.js
```

Check that no tarball was left behind:

```bash
ls -1 matsumiko-runbook-*.tgz 2>/dev/null || true
```

## Versioning

RunBook is still `0.x`, so breaking changes can ship in a minor release. Still, breaking changes must be called out clearly in `README.md`, `CHANGELOG.md`, and migration docs.

For `0.32.0`, the breaking change is removal of bundled `.agents/skills/`.

## Publish

```bash
npm publish --access public
```

After publishing:

```bash
npx @matsumiko/runbook --version
npx @matsumiko/runbook doctor --json
```

## Rollback

If the release is bad:

1. Deprecate the affected npm version with a clear message.
2. Restore the previous known-good version.
3. Publish a patch release with the fix.
4. Update `CHANGELOG.md` with the incident and resolution.

