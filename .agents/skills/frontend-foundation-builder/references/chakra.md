# Chakra UI Reference

Use this reference after choosing Chakra UI for a web-first project.

## When to Choose Chakra

Choose Chakra UI for:

- web-only React projects
- Next.js or Vite apps
- admin panels, dashboards, and SaaS surfaces
- teams that want accessible primitives quickly

## Current Setup Notes

As of April 19, 2026:

- Chakra UI docs list Node 20.x as the minimum supported Node version.
- Manual setup starts with `@chakra-ui/react` and `@emotion/react`.
- The docs also point to `@chakra-ui/cli` snippets for faster project bootstrapping.
- Root setup centers on a provider component that wraps the app.

## Practical First Pass

For a new project:

1. Install the core Chakra dependencies the docs call for.
2. Add provider wiring at the root app entry.
3. Create the first theme seed or token overrides only if the task needs them.
4. Build one representative layout or page with Chakra primitives.
5. Keep custom theming light until the first surface is working.

## TypeScript Notes

The current Chakra installation docs call out TypeScript compiler settings such as:

- `module: "ESNext"`
- `moduleResolution: "Bundler"`
- `skipLibCheck: true`

Apply these only when they fit the existing toolchain. Do not force a config rewrite if the project already has a working setup.

## Optional Tooling

Chakra also publishes:

- AI Rules documentation
- an MCP server for AI-assisted component workflows
- a CLI for snippets and theme typing

Use those only when they materially help the task. They are not required for a correct first pass.

## Sources

- Installation: https://chakra-ui.com/docs/get-started/installation
- AI Rules: https://chakra-ui.com/docs/get-started/ai/rules
- MCP Server: https://chakra-ui.com/docs/get-started/ai/mcp-server
- CLI: https://chakra-ui.com/docs/get-started/cli
