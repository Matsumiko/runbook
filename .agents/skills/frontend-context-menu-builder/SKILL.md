---
name: frontend-context-menu-builder
description: Build or refine frontend context menus, right-click action menus, long-press menus, and cursor-anchored action surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement file or row context actions, canvas object menus, list-item right-click menus, or long-press mobile action sheets while preserving the current component family and handling trigger semantics, cursor anchoring, keyboard fallback, destructive grouping, discoverability, and dismissal correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the task is mainly a button-triggered menu, use `frontend-dropdown-builder`; if it is a richer mini-panel, use `frontend-popover-builder`.
---

# Frontend Context Menu Builder

## Quick Start

1. Confirm the task is primarily about right-click, long-press, or cursor-anchored actions.
2. Audit the existing row actions, menu surfaces, destructive states, and `FRONTEND-DNA.md`.
3. Read `references/trigger-and-anchor-contract.md`.
4. Read `references/action-grouping-and-destructive-rows.md`.
5. Read `references/keyboard-touch-and-discoverability.md`.
6. Build the smallest honest context menu that still handles trigger semantics, fallback, and dismissal correctly.

## Core Rules

- Reuse the existing menu row treatment, iconography, semantic color rules, and elevation language.
- Treat context menus as object-scoped action surfaces, not generic dropdowns with a different trigger.
- Keep destructive, navigation, and state-changing actions visibly distinct.
- Handle right-click, keyboard, and touch fallback deliberately.
- Preserve orientation to the object or row being acted on.
- Do not call context-menu work done if it only renders rows but ignores discoverability or fallback behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear context-menu contract for trigger, scope, and action list
- menu placement that respects cursor or object anchor semantics
- destructive and grouped actions that stay readable and safe
- keyboard and touch fallbacks that keep the feature usable outside pointer right-click
- dismissal and focus behavior that do not strand the user
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby row menus, overflow actions, file explorer actions, canvas-item tools, or table row actions already in the repo.
- Identify whether the request is a right-click row menu, canvas object menu, long-press mobile action menu, or keyboard-invoked context surface.
- Check whether the product already uses hover affordances, selected-row states, or utility bars that the menu must align with.

If a local contextual-action pattern already exists, extend it instead of introducing a parallel context-menu language.

### 2. Define the context contract

Clarify:

- what object, row, or area owns the context menu
- whether trigger is pointer context-click, keyboard shortcut, long press, or multiple paths
- how the action list changes by object type or selection state
- which actions are destructive, disabled, or conditional
- cursor or object anchoring behavior
- dismissal rules for outside click, escape, re-open, or selection
- discoverability fallback when right-click is not obvious in the product

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Shape action hierarchy around object scope

- Keep the menu tightly scoped to the selected object or row.
- Put common actions near the top and destructive actions clearly separated.
- Use icons or shortcuts only when they help recognition and match the surrounding product language.
- Avoid mixing unrelated global actions into a local context menu.

### 4. Handle fallback and lifecycle behavior

- Preserve row or object selection clarity when the menu opens.
- Support keyboard invocation or an alternate trigger when practical.
- Use mobile sheet or long-press fallback when right-click does not exist.
- Ensure the menu closes predictably after selection or dismissal.
- If the surface becomes a persistent tool panel, switch to popover or sidebar patterns instead.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one context-click or equivalent open-close path and one fallback path where practical.
- Verify at least one destructive or disabled row state where practical.
- If the context menu was only validated structurally and not against real row, canvas, or focus behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about context-specific actions triggered by right-click, long press, or cursor position
- object scope, destructive grouping, and fallback behavior matter
- the context menu itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is mainly a button-triggered dropdown or overflow menu
- the task is mainly a field-level selector
- the task is really a richer contextual mini-panel with form-like content
- the task is purely a tiny label or spacing tweak on an existing context menu

## Output Shape

Prefer a structure like:

1. Context-menu contract and assumptions
2. Trigger semantics, action hierarchy, and fallback covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
