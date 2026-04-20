---
name: frontend-select-builder
description: Build or refine frontend select fields, labeled pickers, non-typed option selectors, and field-level selection controls on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement single-select or multi-select fields, status pickers, labeled form selects, grouped option pickers, or compact field selectors while preserving the current component family and handling placeholder state, selected value clarity, labels, helper or error text, disabled options, and mobile fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the task needs typing or autocomplete, use `frontend-combobox-builder`; if it is mainly an action menu, use `frontend-dropdown-builder`.
---

# Frontend Select Builder

## Quick Start

1. Confirm the task is primarily about a field-level select control rather than an action menu.
2. Audit the existing input family, label or helper text treatment, and `FRONTEND-DNA.md`.
3. Read `references/select-contract.md`.
4. Read `references/field-states-and-selection-model.md`.
5. Read `references/mobile-sheet-and-label-integration.md`.
6. Build the smallest honest select surface that still handles labels, value clarity, and smaller-screen fallback correctly.

## Core Rules

- Reuse the existing input, label, helper, error, and chip treatment.
- Treat the select as a field component first, not as a generic floating menu.
- Keep placeholder, current value, and disabled or unavailable states visibly distinct.
- Match the select mode to the job: single value, grouped options, compact multi-select, or status selector.
- Keep the selected state obvious even after the menu closes.
- Do not call select work done if it ignores label, helper, error, or mobile behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear field-level select contract
- visible label, placeholder, selected value, and error states
- option grouping or sectioning that matches the data model
- a selection model that feels native to nearby forms
- mobile fallback that does not make the field unreadable or awkward
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby form selects, status pickers, settings selectors, or compact field controls already in the repo.
- Identify whether the request is a basic single select, grouped category select, multi-select field, or status picker.
- Check whether the product already uses chips, helper text, leading icons, or validation messaging with field-level selectors.

If a local field-select pattern already exists, extend it instead of introducing a parallel select language.

### 2. Define the select contract

Clarify:

- whether the field is single-select or multi-select
- whether options are flat or grouped
- whether placeholder and helper text are required
- whether the field is optional, required, or validation-sensitive
- how selected values should display after commit
- whether disabled or unavailable options need explanation
- whether the field opens as an anchored menu, sheet, or another mobile-safe pattern

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build the field model before ornament

- Keep the closed field readable in dense forms and settings layouts.
- Make selected value, placeholder, and error states distinct without relying on color alone.
- Use icons, badges, or metadata only when they genuinely improve option recognition.
- Avoid turning a form select into a command surface or a generic action menu.

### 4. Handle lifecycle and smaller screens

- Keep open-close behavior predictable from the field trigger.
- Preserve focus, label association, and validation messaging.
- Ensure long labels or large option sets do not collapse the field hierarchy.
- Use sheet or full-width fallback when compact anchored menus are too cramped on mobile.
- If the user must type to find options, move to a combobox instead.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one open-select-close path and one keyboard or form-focus path where practical.
- Verify at least one placeholder, selected, or error state where practical.
- If the select was only validated structurally and not in a real form or field flow, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about labeled select fields or field-level option selection
- placeholder, selected value clarity, label treatment, and validation states matter
- the select control itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task requires typed search, async lookup, or autocomplete
- the task is really an action menu, overflow menu, or row-action dropdown
- the task is really a right-click or long-press context menu
- the task is really a full date-selection or calendar surface
- the work is purely a tiny spacing or copy tweak on an existing select field

## Output Shape

Prefer a structure like:

1. Select contract and assumptions
2. Field states, selection model, and fallback covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
