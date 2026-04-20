---
name: frontend-table-builder
description: Build or refine frontend tables, data grids, list views, and dense data surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement admin tables, activity logs, invoices, directories, or other row-and-column surfaces while handling density, sorting, filtering affordances, row states, empty states, loading states, and responsive degradation correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is really pagination, broader search, dedicated filtering, data-grid toolbar work, row context actions, queue, audit, kanban, empty-state recovery, or general component work, use the matching specialized skill first.
---

# Frontend Table Builder

## Quick Start

1. Confirm the task is primarily table, data grid, or list-surface work.
2. Audit nearby tables, data-density patterns, and `FRONTEND-DNA.md`.
3. Read `references/table-contract.md`.
4. Read `references/states-and-density.md`.
5. Read `references/responsive-and-actions.md`.
6. Build the smallest complete data surface that still handles important table states honestly.

## Core Rules

- Reuse the existing table family, tokens, and spacing rhythm.
- Define the table contract before building columns.
- Handle empty, loading, error, dense, and selected states deliberately.
- Keep sorting, filtering, bulk actions, and row actions understandable.
- Prefer clarity over cramming more columns into one viewport.
- Do not call a table done if it only renders rows but breaks in real usage states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear table contract
- columns and cell structure that fit the product
- row states and table states that are relevant to the surface
- sorting or filtering affordances when the task requires them
- responsive treatment for narrower layouts
- one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby tables, list views, or cards that already display dense data.
- Identify whether the surface is a simple table, interactive grid, mobile-adaptive list, or admin data view.
- Check whether there is already a table primitive or data-grid abstraction in use.

If a local table pattern already exists, extend it instead of introducing a parallel one.

### 2. Define the table contract

Clarify:

- data shape
- column list
- default sorting
- selection behavior
- row actions
- pagination, infinite scroll, or compact list behavior
- empty, loading, and error handling
- responsive fallback strategy

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build the data surface systemically

- Reuse existing table, badge, button, input, filter, and pagination components where available.
- Keep headers, row density, and action placement consistent.
- Group controls by task and avoid overcrowding the toolbar.
- Prefer scanability over ornamental styling.

### 4. Handle data states and interaction

- Make loading, empty, and error states obvious.
- Preserve row hover, selected, and focus behavior where relevant.
- Ensure row actions remain discoverable without making every row noisy.
- Keep bulk actions and filters understandable.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one realistic density case and one non-happy-path state where practical.
- If the table was only verified visually and not against live data behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about tables, data lists, or grid-like surfaces
- density and scanability matter
- the main challenge is presenting structured data well

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is specifically a paginated-result footer or page-navigation surface rather than the table as a whole
- the task is specifically a search or discovery surface where query and refinement UX matter most
- the task is specifically a filter bar, facet panel, or applied-filter system rather than the table as a whole
- the task is specifically a data-grid toolbar, bulk-action header, or result-control bar rather than the table as a whole
- the task is specifically a row context menu or right-click action surface rather than the table as a whole
- the task is specifically a queue board or triage worklist rather than the table as a whole
- the task is specifically an audit log or compliance-history surface rather than the table as a whole
- the task is specifically a kanban board or workflow lane surface rather than the table as a whole
- the main task is specifically an empty table, zero-row replacement, or recovery-first no-data surface
- the task is mostly a generic non-data component
- the work is purely a tiny copy or spacing tweak on an existing table

## Output Shape

Prefer a structure like:

1. Table contract and assumptions
2. Columns, actions, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
