---
name: frontend-dropdown-builder
description: Build or refine frontend dropdown menus, action menus, overflow menus, and anchored select-like lists on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement kebab menus, profile menus, row-action menus, filter or sort menus, or compact option lists while preserving the current component family and handling trigger behavior, grouping, selection state, positioning, dismissal, and keyboard interaction correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task needs free typing, async search, or autocomplete, use `frontend-combobox-builder` instead.
---

# Frontend Dropdown Builder

## Quick Start

1. Confirm the task is primarily about a dropdown, menu button, or compact anchored option list.
2. Audit the existing trigger buttons, list items, checkmarks, destructive treatments, and `FRONTEND-DNA.md`.
3. Read `references/menu-contract.md`.
4. Read `references/selection-grouping-and-actions.md`.
5. Read `references/positioning-and-dismissal.md`.
6. Build the smallest complete dropdown surface that still handles trigger state, menu grouping, and dismiss behavior honestly.

## Core Rules

- Reuse the existing button family, menu row treatment, iconography, and elevation language.
- Match the dropdown type to the job: action menu, single-select list, sort menu, filter mini-menu, or overflow menu.
- Keep row labels, shortcuts, and destructive actions visually legible and semantically distinct.
- Treat focus order, collision handling, and outside-click dismissal as part of the feature.
- Keep menus compact and direct; if the content starts becoming a panel, use a popover instead.
- Do not call dropdown work done if keyboard navigation, close behavior, or disabled states are ignored.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear dropdown contract for trigger and menu contents
- menu groups or sections that reflect action hierarchy
- explicit active, selected, disabled, and destructive row states
- positioning and dismissal behavior that fit surrounding layout constraints
- keyboard and pointer interaction that feel native to the existing product
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby kebab menus, profile menus, select menus, action lists, and context menus already in the repo.
- Identify whether the request is a lightweight action menu, a checked selection list, a row-level overflow menu, or a filter or sort menu.
- Check whether the product already uses icon-leading rows, shortcut hints, group labels, or destructive-row styling.

If a local menu pattern already exists, extend it instead of introducing a parallel dropdown system.

### 2. Define the menu contract

Clarify:

- what trigger opens the menu
- whether the menu is for actions, selection, or both
- whether menu rows are links, actions, toggles, radios, or checkable items
- which rows belong in groups or dividers
- selected, disabled, loading, or destructive states
- dismissal rules for outside click, escape, re-click, or selection
- placement and collision behavior near viewport edges
- mobile fallback when hover or cramped layout changes the interaction model

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Shape hierarchy before decoration

- Put the highest-confidence or most-used actions near the top.
- Separate destructive or account-sensitive actions from routine actions.
- Keep icons, checkmarks, and shortcut hints aligned with the local component rhythm.
- Avoid menus that mix navigation, form fields, and rich content unless the product already does so deliberately.

### 4. Handle selection and dismissal states

- Keep open and close behavior predictable from the trigger.
- Make current selection visible when the menu acts as a compact selector.
- Ensure disabled or unavailable actions are visually clear without looking broken.
- Preserve keyboard navigation, highlight states, and focus return.
- If the interaction needs search, typeahead selection, or long-form content, move to combobox or popover patterns.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one pointer open-close path and one keyboard path where practical.
- Verify one selected or destructive row state where practical.
- If the dropdown was only validated structurally and not against real positioning or focus-management behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about anchored menus, overflow menus, or compact option lists
- grouping, action hierarchy, selection state, and dismissal behavior matter
- the menu surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task requires typed search, autocomplete, or async option lookup
- the task requires rich content, inline forms, or a mini panel rather than a compact menu
- the main task is really a tooltip-style explanatory hint
- the main task is really a full page, table, search surface, or settings route where the dropdown is only one sub-part
- the work is purely a tiny label or spacing tweak on an existing menu

## Output Shape

Prefer a structure like:

1. Dropdown contract and assumptions
2. Menu structure, selection states, and dismissal behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
