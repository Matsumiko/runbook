---
name: frontend-command-palette-builder
description: Build or refine frontend command palettes, spotlight search overlays, quick-action launchers, and keyboard-first command surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement global command search, jump-to-page launchers, slash-style command menus, or shortcut-driven overlays while preserving the current component family and handling focus, ranking, keyboard navigation, empty states, recent items, and lifecycle correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is a broader search surface, modal flow, or route and the command palette is only one sub-part, use the matching builder first unless the command palette itself is the main job. If the work is only a tiny tweak on an existing palette, use the nearest surface skill first.
---

# Frontend Command Palette Builder

## Quick Start

1. Confirm the task is primarily about a command palette, spotlight search, or keyboard-first launcher surface.
2. Audit the existing overlay treatment, search inputs, result lists, shortcut language, and `FRONTEND-DNA.md`.
3. Read `references/command-palette-contract.md`.
4. Read `references/ranking-shortcuts-and-recent-items.md`.
5. Read `references/overlay-focus-and-empty-states.md`.
6. Build the smallest complete command surface that still handles trigger, ranking, keyboard movement, and empty states honestly.

## Core Rules

- Reuse the existing overlay, input, list-row, icon, and shortcut-chip language.
- Define the command palette contract before choosing global launcher, scoped palette, or slash-style menu treatment.
- Match ranking and grouping to the user's most time-sensitive actions.
- Keep commands, recent items, navigation results, and inline actions clearly differentiated.
- Treat trigger, query, result list, and execution states as one feature, not separate polish passes.
- Do not call command palette work done if it only renders a searchable list and ignores focus, shortcuts, ranking, or empty-state recovery.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear command palette contract
- the right launcher pattern for the product
- explicit trigger, open, query, navigation, and execution behavior
- ranking or grouping that matches likely user intent
- empty, no-match, and loading states that still guide action
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby overlays, search bars, quick-switchers, recent-item lists, or command menus already in the repo.
- Identify whether the request is a global launcher, page jumper, recent-item switcher, action palette, or slash-command menu.
- Check whether there are existing keyboard shortcut conventions, result-row patterns, or spotlight overlay treatments in use.

If a local launcher pattern already exists, extend it instead of introducing a parallel command language.

### 2. Define the command palette contract

Clarify:

- what opens the palette and from where
- whether it searches routes, records, actions, or all of them
- whether results are grouped, ranked, or segmented
- whether recent items, suggested actions, or pinned commands appear before query input
- keyboard behavior for open, close, selection, backtracking, and execution
- what happens after selection: navigate, run action, reveal modal, or fill input
- empty, loading, unavailable, and permission-limited behavior
- narrow-layout or mobile fallback when the desktop palette pattern does not fit

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose launcher pattern before ornament

- Use a global spotlight palette when users need fast navigation or action access from anywhere.
- Use a scoped palette when commands belong to one page, editor, or local workflow.
- Keep result groups and shortcut hints disciplined; do not let every result look equally important.
- Keep recent items and suggested commands useful but subordinate to the user's active query.
- Keep decorative blur or motion subordinate to result clarity and execution confidence.

### 4. Handle focus, ranking, and lifecycle

- Make trigger, open, query, highlighted-row, selected, loading, empty, and error behavior explicit.
- Preserve focus and keyboard orientation when the user opens, filters, backtracks, and closes the palette.
- Keep ranking rules understandable enough that top results feel predictable.
- Handle no-match, permission-limited, or unavailable commands with clear recovery actions.
- Ensure execution feedback is clear when selection performs navigation, mutation, or nested overlay actions.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one open-search-select path and one no-match or fallback path where practical.
- Verify keyboard behavior and narrower-layout treatment where practical.
- If the work was only validated structurally and not against real routing, commands, or execution state, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about command palette, spotlight, or keyboard-first launcher UX
- focus, ranking, keyboard navigation, or quick-action behavior matter
- the command surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader search surface, modal flow, or route and the command palette is only one sub-part
- the task is mostly a generic overlay or search component without launcher-specific behavior
- the work is purely a tiny copy or spacing tweak on an existing command palette

## Output Shape

Prefer a structure like:

1. Command palette contract and assumptions
2. Trigger model, ranking, and lifecycle covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
