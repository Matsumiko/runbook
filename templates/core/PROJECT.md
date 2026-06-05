# PROJECT.md

Persistent project memory for agents and developers.

Keep this file compact, durable, and project-specific. Do not use it for task logs, active plans, changelog entries, or one-off notes.

Agents may update this file only with verified reusable project facts.

---

## Commands

```bash
# Install dependencies
[command]

# Start development
[command]

# Build
[command]

# Lint
[command]

# Typecheck
[command]

# Test
[command]
```

---

## Architecture

**Project name:** [name]
**Type:** [SaaS web app / API service / monorepo / mobile app / other]
**Primary language(s):** [TypeScript / Python / PHP / etc.]
**Primary framework(s):** [Next.js / FastAPI / Laravel / etc.]
**Database:** [PostgreSQL / MySQL / SQLite / none]
**Auth system:** [NextAuth / Supabase Auth / custom JWT / none]
**Deployment target:** [Vercel / AWS / VPS / other]

Key boundaries:

- [Boundary, module ownership, or non-obvious architectural decision]
- [Important dependency, integration, or data flow]

---

## Important Paths

```text
/
|-- [dir]/  - [what lives here]
|-- [dir]/  - [what lives here]
`-- [dir]/  - [what lives here]
```

---

## Environment

Do not store real secret values here.

| Variable | Required | Purpose | Where to get it |
| --- | --- | --- | --- |
| `[VAR_NAME]` | yes/no | [purpose] | [source] |

---

## Testing

- Unit tests: [command or note]
- Integration tests: [command or note]
- E2E tests: [command or note]
- Test data requirements: [note]
- Services required before tests: [note]

---

## Known Gotchas

### [Gotcha title]

**Problem:** [what goes wrong]
**Why it happens:** [root cause]
**How to avoid:** [what to do instead]

---

## Do Not Touch

- [Generated file, vendor folder, migration rule, protected branch, or sensitive area]
- [Anything agents should avoid unless explicitly asked]
