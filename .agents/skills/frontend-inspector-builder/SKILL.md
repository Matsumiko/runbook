---
name: frontend-inspector-builder
description: Build or refine frontend inspectors, property side panels, metadata drawers, and contextual detail panes on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement right-side inspectors, asset properties panels, layer or node inspectors, record metadata panes, or contextual object details where section grouping, property clarity, secondary actions, and selection sync must work together while preserving the current component family and handling empty states, collapse behavior, pinning, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mainly split-pane mechanics, a full detail route, or a dedicated review decision surface, use `frontend-split-pane-builder`, `frontend-detail-page-builder`, or `frontend-review-panel-builder` first.
---

# Frontend Inspector Builder

## Quick Start

1. Confirm the task is primarily about contextual inspection, not about the full page shell.
2. Audit the existing panels, metadata rows, form controls, and `FRONTEND-DNA.md`.
3. Read `references/inspector-surface-contract.md`.
4. Read `references/properties-metadata-and-actions.md`.
5. Read `references/selection-sync-collapse-and-mobile-fallback.md`.
6. Build the smallest complete inspector that still handles context, actions, and fallback honestly.

## Core Rules

- Reuse the existing panel, label, divider, chip, and form-control language.
- Define the inspector contract before choosing collapsible sections, tabs, or inline editors.
- Keep the inspected object and current selection explicit.
- Treat the inspector as supporting context, not as a replacement for the whole app.
- Preserve scannability of property groups before layering on decorative chrome.
- Do not call inspector work done if it only lists fields without clear context, grouping, or no-selection states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear inspector-surface contract
- understandable property groups and metadata hierarchy
- contextual actions that fit the inspected object
- no-selection, empty, unavailable-object, and loading states
- collapse or pin behavior where the workflow needs it
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby side panels, metadata cards, property editors, or object detail panes already in the repo.
- Identify whether the request is an asset inspector, node inspector, record metadata pane, or properties sidebar.
- Check whether the product already uses disclosure groups, sticky headers, inline editors, or action rows that the inspector should inherit.

If a local inspector pattern already exists, extend it instead of introducing a parallel side-panel language.

### 2. Define the inspector contract

Clarify:

- what object is being inspected
- whether the inspector is read-only, editable, or mixed
- which sections belong in the panel
- which contextual actions matter
- whether selection changes update the panel live
- whether pin, collapse, or hide behavior exists
- what no-selection, unavailable-object, and loading states look like
- mobile fallback strategy when the inspector can no longer remain visible beside the main content

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build context clarity before chrome

- Make the current object identity obvious at the top of the inspector.
- Keep properties grouped by meaning rather than by arbitrary implementation order.
- Use inline edit affordances only when the surrounding product already supports them.
- Avoid stuffing the inspector with content that belongs in a full detail route.

### 4. Handle sync, collapse, and fallback

- Keep the panel synchronized with selection without disorienting the user.
- Distinguish no selection from unavailable or permission-limited objects.
- Keep collapsed sections, pinned state, or secondary tabs explicit when they exist.
- Collapse to drawers, sheets, or route-level detail views when narrow screens cannot support a persistent inspector.
- If the main job is really split-pane mechanics or review decision-making, move ownership to the matching specialized skill.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one populated-inspector path and one no-selection or unavailable-object path where practical.
- Verify at least one collapse, pin, or section-toggle path where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about contextual inspection or property panels
- grouped metadata and secondary actions matter
- the inspector itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really split-pane shell mechanics
- the task is really a full detail route or dedicated review surface
- the task is mostly a generic form or one isolated metadata card
- the work is purely a tiny spacing or copy tweak on an existing inspector

## Output Shape

Prefer a structure like:

1. Inspector contract and assumptions
2. Metadata, actions, and state behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
