---
name: frontend-split-pane-builder
description: Build or refine frontend split-pane surfaces, resizable workspaces, dual-panel editors, inspector layouts, and side-by-side shells on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement mail-style panes, editor-plus-preview layouts, navigator-plus-inspector shells, or resizable detail views while preserving the current component family and handling pane priority, resizing, collapse behavior, overflow, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mainly a master-detail surface rather than pane layout behavior, use `frontend-master-detail-builder` first. If the split pane is only one part of a broader route, use the broader page skill first unless pane behavior itself is the main job.
---

# Frontend Split Pane Builder

## Quick Start

1. Confirm the task is primarily about split-pane layout behavior, not just a page with two columns.
2. Audit the existing shell, panel surfaces, dividers, and `FRONTEND-DNA.md`.
3. Read `references/pane-layout-contract.md`.
4. Read `references/resize-collapse-and-focus.md`.
5. Read `references/persistence-overflow-and-mobile-fallback.md`.
6. Build the smallest complete pane system that still handles priority, resizing, and overflow honestly.

## Core Rules

- Reuse the existing shell, panel, divider, and focus-state language.
- Define the pane contract before choosing static split, resizable panes, or collapsible inspectors.
- Make pane priority and default width logic explicit.
- Treat resize, collapse, and keyboard focus as first-class interaction, not polish.
- Keep scroll ownership and overflow understandable inside each pane.
- Do not call split-pane work done if it only renders two columns but ignores resize, collapse, or mobile fallback.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear pane-layout contract
- explicit primary and secondary pane roles
- resize, collapse, and min-width behavior
- overflow and focus handling that preserve orientation
- responsive fallback when side-by-side panes stop being viable
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby shells, inspectors, editors, side panels, or comparison views already in the repo.
- Identify whether the request is editor plus preview, list plus inspector, compare-two-panels, or navigator plus content.
- Check whether there are existing divider styles, panel headers, tab bars, or shell patterns that the panes should inherit.

If a local pane layout already exists, extend it instead of introducing a parallel shell language.

### 2. Define the pane contract

Clarify:

- what each pane is responsible for
- which pane is primary versus supporting
- whether resize, drag handle, collapse, pin, or swap behavior is required
- min and max width constraints
- whether panes scroll independently or share page scroll
- what empty-pane, loading-pane, and unavailable-pane states look like
- responsive fallback strategy when simultaneous panes stop fitting

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build pane priority before ornament

- Make the primary workspace obvious.
- Keep divider affordances subtle but discoverable.
- Use headers, breadcrumbs, tabs, or toolbar layers to clarify pane ownership only when they fit the current product.
- Avoid squeezing both panes equally if one clearly matters more.

### 4. Handle resize, collapse, and fallback behavior

- Keep resize handles, collapsed states, and restored states explicit.
- Preserve orientation when content inside one pane becomes long or dense.
- Ensure keyboard focus and tab order remain usable after resize or collapse.
- Switch to stacked panes, tabs, drill-downs, or temporary drawers when mobile screens cannot support a real split.
- If the surface is really about persistent list-detail relationships, move to master-detail ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one resize or collapse path where practical.
- Verify at least one overflow path and one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about pane layout behavior, resizing, or dual-panel workspaces
- pane priority and overflow matter
- the split-pane shell itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a master-detail workflow rather than pane-layout mechanics
- the task is really a generic page with a simple sidebar and content column
- the task is mostly a generic component or tiny divider tweak
- the work is purely a tiny spacing or copy tweak on an existing split-pane surface

## Output Shape

Prefer a structure like:

1. Pane contract and assumptions
2. Resize, collapse, and overflow behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
