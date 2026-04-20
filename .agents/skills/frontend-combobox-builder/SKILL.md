---
name: frontend-combobox-builder
description: Build or refine frontend comboboxes, autocomplete fields, search-select inputs, and typed option pickers on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement async search selects, tag or assignee pickers, command-like field selectors, creatable option inputs, or large-option pickers while preserving the current component family and handling input state, option ranking, keyboard navigation, loading, empty states, and selection clarity correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task does not need text input and filtering, use `frontend-dropdown-builder` instead.
---

# Frontend Combobox Builder

## Quick Start

1. Confirm the task is primarily about combobox, autocomplete, or typed option selection behavior.
2. Audit the existing input family, menu surfaces, chip or token treatment, and `FRONTEND-DNA.md`.
3. Read `references/combobox-contract.md`.
4. Read `references/search-selection-and-empty-states.md`.
5. Read `references/async-loading-and-keyboard-behavior.md`.
6. Build the smallest complete combobox flow that still handles query input, selection, and async or empty states honestly.

## Core Rules

- Reuse the existing text-input family, list row language, badges, and token treatment.
- Distinguish clearly between the typed query, highlighted option, and committed selection.
- Match the combobox mode to the job: single select, multi-select, async search-select, or creatable picker.
- Treat loading, no-result, and keyboard behavior as core feature behavior, not polish.
- Keep selection and clear-reset affordances obvious.
- Do not call combobox work done if it only renders an input plus menu but ignores ranking, empty states, or keyboard flow.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear combobox contract for input, option list, and selection model
- visible states for typing, loading, highlighted option, selected value, and empty results
- keyboard and pointer interactions that feel deliberate and predictable
- async or large-data behavior that does not confuse the selected state
- fallback treatment for narrow layouts or dense option sets
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby selects, autocomplete fields, tag pickers, assignee pickers, and search inputs already in the repo.
- Identify whether the request is single-select, multi-select, async lookup, recent-item picker, or creatable-entry flow.
- Check whether the product already has chips, avatars, grouped options, or recent-search patterns that the combobox should inherit.

If a local typed-selector pattern already exists, extend it instead of introducing a parallel combobox language.

### 2. Define the combobox contract

Clarify:

- whether the field is single-select, multi-select, or creatable
- whether options are local, remote, paged, or mixed
- how the typed query differs from the committed selection
- how options are ranked, grouped, or filtered
- what empty, loading, and error states look like
- whether freeform values are allowed
- whether the input opens on focus, typing, or trigger click
- narrow-layout behavior when the option list grows dense

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build the selection model before embellishment

- Keep the selection state understandable even while the user keeps typing.
- Show why an option is relevant when ranking or grouping is involved.
- Use avatars, icons, secondary metadata, or badges only when they genuinely help selection.
- Avoid merging command-palette behavior or full search-page behavior into a field-level combobox unless the product already does so deliberately.

### 4. Handle async states and keyboard behavior

- Make loading and empty states visibly different.
- Preserve arrow-key navigation, enter selection, escape dismissal, and focus return.
- Prevent stale async responses from visually replacing newer input intent.
- Make clear how selections can be removed, replaced, or reset.
- If the surface becomes a global launcher or full search overlay, switch to command palette or search patterns.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one keyboard selection path and one pointer selection path where practical.
- Verify at least one loading, empty, or async update path where practical.
- If the combobox was only validated structurally and not against real data or async behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about typed option selection or autocomplete behavior
- ranking, filtering, async lookup, or selection state matter
- the field itself is the main UX challenge

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is just a compact menu or non-typed dropdown
- the task is really a global command palette or spotlight launcher
- the task is really a full search or discovery page
- the task is specifically a date-selection input or calendar picker
- the work is purely a tiny copy or spacing tweak on an existing combobox

## Output Shape

Prefer a structure like:

1. Combobox contract and assumptions
2. Query, selection model, and async states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
