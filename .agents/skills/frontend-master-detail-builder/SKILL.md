---
name: frontend-master-detail-builder
description: Build or refine frontend master-detail surfaces, list-detail workspaces, inbox-style drill-down layouts, and selection-driven record views on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement mailbox layouts, directory-plus-detail views, issue lists with persistent detail panes, or record explorers where list context and detail context must stay visible together while preserving the current component family and handling selection, preview fidelity, empty states, keyboard flow, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mainly split-pane mechanics, use `frontend-split-pane-builder` first. If the task is a full detail route without a persistent master list, use `frontend-detail-page-builder` first.
---

# Frontend Master Detail Builder

## Quick Start

1. Confirm the task is primarily about keeping a master list and selected detail visible in one workflow.
2. Audit the existing list items, detail surfaces, pane treatments, and `FRONTEND-DNA.md`.
3. Read `references/master-detail-contract.md`.
4. Read `references/selection-preview-and-detail-pane.md`.
5. Read `references/loading-empty-and-mobile-fallback.md`.
6. Build the smallest complete master-detail surface that still handles selection and empty states honestly.

## Core Rules

- Reuse the existing list, table, detail, and panel language.
- Define the master-detail contract before choosing list density or detail richness.
- Keep selection state and detail context tightly connected.
- Treat list context retention as part of the feature, not a convenience.
- Keep detail panes rich enough to support the next action without recreating a full route unnecessarily.
- Do not call master-detail work done if it only shows a list and a pane without coherent selection behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear master-detail contract
- an understandable master list with explicit selected state
- a detail surface that reflects the current selection honestly
- empty-list, no-selection, loading-selection, and unavailable-record states
- responsive fallback when simultaneous master and detail context no longer fit
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby inboxes, admin workspaces, explorer panes, or list-to-detail views already in the repo.
- Identify whether the request is mailbox-like, directory-plus-profile, case queue plus case detail, or record list plus inspector.
- Check whether there are existing row patterns, detail headers, tabbed detail panes, or split-pane shells the surface should inherit.

If a local master-detail pattern already exists, extend it instead of introducing a parallel workflow language.

### 2. Define the master-detail contract

Clarify:

- what appears in the master list
- what qualifies as selected state and how it persists
- whether selection is URL-driven, local, keyboard-driven, or mixed
- how much of the record detail belongs inline versus in a full route
- whether bulk selection, unread state, or preview snippets exist
- what empty-list, no-selection, unavailable-record, and loading-selection states look like
- mobile fallback strategy when master and detail cannot stay visible together

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build selection clarity before pane chrome

- Make the selected record obvious without turning every row into a card wall.
- Keep preview density appropriate to the user’s scanning job.
- Use metadata and actions in the detail pane to support decision-making, not to reproduce the entire app.
- Avoid making the master list so dense that selection loses meaning.

### 4. Handle retention, empty states, and fallback

- Preserve user orientation when selection changes, reloads, or disappears.
- Distinguish empty list, filtered-to-zero, and no-selection states.
- Keep detail loading distinct from record-unavailable or permission-limited states.
- Switch to drill-down routes, stacked views, or temporary drawers when small screens cannot support persistent dual context.
- If the surface is really about pane resizing rather than selection workflow, move to split-pane ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one selection-change path and one no-selection or unavailable-record path where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about list-detail or inbox-style workflows
- selected state and retained list context matter
- the master-detail workflow itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really about split-pane resize mechanics rather than selection workflow
- the task is really a full detail route without a persistent master context
- the task is mostly a generic list or table without meaningful detail interaction
- the work is purely a tiny spacing or copy tweak on an existing master-detail surface

## Output Shape

Prefer a structure like:

1. Master-detail contract and assumptions
2. Selection, detail, and state behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
