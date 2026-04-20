---
name: frontend-data-grid-toolbar-builder
description: Build or refine frontend data-grid toolbars, table control bars, and result-control surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement search plus filter plus sort bars, export or view controls, column visibility menus, or dense result-management toolbars while preserving the current component family and handling selection state, active filters, overflow, reset behavior, and responsive collapse correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is a broader table or search surface, use the broader builder first unless the toolbar itself is the main job. If the task is a selection-triggered bulk-action bar, use `frontend-bulk-action-bar-builder` first. If the task is only a dedicated filter panel, use `frontend-data-filter-builder` first.
---

# Frontend Data Grid Toolbar Builder

## Quick Start

1. Confirm the task is primarily about a table or grid toolbar, not the whole data surface.
2. Audit the existing table controls, filters, inputs, chips, and `FRONTEND-DNA.md`.
3. Read `references/toolbar-contract.md`.
4. Read `references/search-filter-sort-and-column-controls.md`.
5. Read `references/bulk-actions-selection-and-responsive-collapse.md`.
6. Build the smallest complete toolbar surface that still handles selection, controls, and overflow honestly.

## Core Rules

- Reuse the existing input family, chip treatment, button hierarchy, and table-control language.
- Define the toolbar contract before placing search, filter, sort, or bulk-action controls.
- Order controls by user priority rather than visual symmetry.
- Keep selection state, active filters, and reset affordances explicit.
- Treat overflow and responsive collapse as part of the feature, not a polish pass.
- Do not call data-grid-toolbar work done if it only lines up controls but ignores state transitions, overflow, or selection behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear toolbar contract
- understandable grouping of search, filter, sort, and view controls
- explicit selected-row, active-filter, and bulk-action states
- overflow or responsive-collapse behavior for narrower layouts
- reset, clear, or result-summary treatment that matches the data job
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby table headers, search bars, filter rows, action strips, or admin toolbars already in the repo.
- Identify whether the request is a result toolbar, selection-action header, column manager row, or multi-control grid header.
- Check whether there are existing chips, search inputs, dropdowns, badges, bulk-action patterns, or export controls in use.

If a local grid-toolbar pattern already exists, extend it instead of introducing a parallel control language.

### 2. Define the toolbar contract

Clarify:

- what data surface the toolbar controls
- whether search, filters, sort, grouping, view toggles, export, or column visibility controls belong in scope
- whether selection counts or bulk actions exist
- what result summary or active-filter summary should be shown
- whether controls are immediate, applied, or mixed
- what loading, no-selection, and empty-result states look like
- responsive collapse strategy when controls no longer fit on one row

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build task order before decoration

- Put the most-used controls first and closest to the data they affect.
- Keep result summary and active-filter feedback visible without overwhelming the toolbar.
- Separate destructive bulk actions from passive view controls.
- Avoid making every control equal weight; the toolbar should reveal priority.

### 4. Handle selection, overflow, and state transitions

- Make zero-selected and selected states visibly different.
- Keep active filters, sort state, and column changes reversible.
- Collapse secondary controls into menus or popovers before sacrificing the primary search and selection flow.
- Preserve toolbar clarity when the table is empty, filtered to zero, or loading.
- If the user really needs the whole table or discovery surface, move to table or search ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one selection-action path and one active-filter or reset path where practical.
- Verify at least one narrower-layout overflow or collapse case where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about a table or grid toolbar with multiple controls
- selection state, active filters, or overflow behavior matter
- the toolbar itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a broader table or search surface rather than the toolbar layer
- the task is really a selection-triggered bulk-action bar rather than a persistent control toolbar
- the task is really a dedicated filter panel or facet system rather than a compact toolbar
- the task is mostly a generic button row without data-grid state
- the work is purely a tiny spacing or copy tweak on an existing grid toolbar

## Output Shape

Prefer a structure like:

1. Toolbar contract and assumptions
2. Controls, state transitions, and overflow behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
