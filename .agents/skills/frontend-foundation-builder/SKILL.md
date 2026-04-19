---
name: frontend-foundation-builder
description: Bootstrap greenfield frontend applications or brand-new UI surfaces from scratch. Use when Codex needs to choose and initialize a frontend foundation, especially deciding between Chakra UI for web-first React apps and Tamagui for universal web plus React Native or Expo apps. Do not use for small styling tweaks, for projects that already have an established design system, or for repos where the UI stack is already settled unless the user explicitly asks for a replacement evaluation.
---

# Frontend Foundation Builder

## Quick Start

1. Confirm the task is greenfield frontend work or a new isolated frontend surface.
2. Stop and follow the existing stack if the repository already has a stable UI library or design system, unless the user explicitly asks to replace it.
3. Read `references/decision-matrix.md`.
4. Choose the stack:
   - Read `references/chakra.md` for web-first React, Next.js, or Vite projects.
   - Read `references/tamagui.md` for cross-platform React web plus React Native or Expo projects.
5. Ask one clarifying question if the platform target is unclear. If asking is not practical, assume web-first and flag the assumption explicitly.
6. Scaffold the smallest working foundation and verify it.

## Decision Rules

- Respect explicit user choice. If the user already picked Chakra UI or Tamagui, do not re-litigate the decision.
- Prefer Chakra UI for web-first dashboards, SaaS apps, admin tools, and general React apps that need accessible primitives quickly.
- Prefer Tamagui for a shared design system across web and native, or when the task clearly mentions Expo, React Native, or universal UI.
- Do not install both stacks into the same greenfield app unless the user explicitly wants a comparison or migration spike.
- Prefer the smallest foundation that still leaves the project in a coherent state.

## Delivery Standard

When using this skill, produce all of the following:

- a short stack decision and rationale
- the actual install steps used
- provider and theme wiring at the app root
- a minimal token or theme seed that can be extended later
- at least one representative page, layout, or component using the chosen stack
- updates to `CODER.md` and `FRONTEND-DNA.md` when those files exist and the repo expects them
- verification results and any assumptions that still remain

## Workflow

### 1. Audit the starting point

- Confirm whether the work is actually greenfield.
- Check whether the repo already contains a component system, theme tokens, or app shell that should be preserved.
- Identify framework, package manager, and platform target before adding dependencies.

### 2. Choose the foundation

- Use Chakra UI for web-first React projects where fast setup, accessibility, and mature component primitives matter more than native reuse.
- Use Tamagui when the product needs one design system across web and React Native or Expo.
- Record the choice in project memory if durable docs such as `CODER.md` exist.

### 3. Scaffold only the essential base

- Add the minimum dependencies for the chosen stack.
- Wire the root provider first.
- Create or update the first theme config or token file.
- Add one representative screen or component that proves the stack is live.
- Avoid speculative components, heavy theming systems, or broad design explorations unless the user asked for them.

### 4. Establish project DNA

- For a brand-new product, define a clear initial visual direction instead of leaving generic defaults.
- Write the initial design rules into `FRONTEND-DNA.md` if the file exists.
- Keep the first theme small: base colors, typography direction, spacing rhythm, radius, and interaction tone.

### 5. Verify honestly

- Run install, build, lint, or typecheck commands when available.
- If the stack needs manual follow-up, state it clearly.
- Do not claim the foundation is complete if the provider wiring or starter surface was not verified.

## Stack-Specific Notes

### Chakra UI

- Follow `references/chakra.md`.
- Start with the official provider setup, then add snippets or CLI extras only if they help the requested output.
- Keep the first pass web-focused and accessible.

### Tamagui

- Follow `references/tamagui.md`.
- Start with runtime-safe setup before introducing compiler or advanced bundler tuning.
- Keep the first pass compatible with the stated platform target and avoid premature optimization.

## Output Shape

Prefer a response structure like:

1. Chosen foundation and why
2. Files added or changed
3. Commands run for verification
4. Remaining assumptions or follow-up work
