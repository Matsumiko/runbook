---
name: frontend-bulk-action-bar-builder
description: Build or refine frontend bulk-action bars, selection-action footers, and multi-select operation surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement sticky selection bars, batch approve or archive controls, or multi-select action surfaces where selected count, action safety, deselection, and overflow handling must stay explicit while preserving the current component family and handling disabled states, confirmations, sticky placement, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mainly a persistent data-grid toolbar or a broader table, queue, or search surface, use the broader matching skill first unless the bulk-action bar itself is the main job.
---

# Frontend Bulk Action Bar Builder

## Quick Start

1. Confirm the task is primarily about selection-driven actions, not a persistent toolbar.
2. Audit the existing selected state, action bars, sticky surfaces, and `FRONTEND-DNA.md`.
3. Read `references/bulk-action-bar-contract.md`.
4. Read `references/selection-count-actions-and-safety.md`.
5. Read `references/sticky-placement-overflow-and-mobile-fallback.md`.
6. Build the smallest complete bulk-action surface that still handles selection scope and action safety honestly.

## Core Rules

- Reuse the existing selected-state, chip, toolbar, and action-button language.
- Define the bulk-action contract before choosing header, footer, floating bar, or sticky shelf treatment.
- Keep selected count, scope, and clear-selection behavior explicit.
- Treat destructive or high-impact bulk actions as safety-critical.
- Preserve the base list or grid scan path when the bar is hidden.
- Do not call bulk-action work done if actions appear without clear scope, exit path, or disabled-state explanation.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear bulk-action-bar contract
- explicit selected count and selection scope
- action grouping that separates safe, secondary, and destructive operations
- disabled, confirmation, and no-selection transitions
- sticky placement and overflow behavior that fit the surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby tables, queues, galleries, or result lists already in the repo.
- Identify whether the request is batch approve, archive, assign, export, delete, or tag work.
- Check whether the product already uses selected rows, sticky headers, footer action bars, or mass-action modals that the surface should inherit.

If a local bulk-action pattern already exists, extend it instead of introducing a parallel selected-state language.

### 2. Define the bulk-action contract

Clarify:

- what items can be selected
- whether selection scope is current page, filtered result set, or mixed
- which actions are available
- which actions need confirmation
- what disabled reasons exist
- whether selection survives pagination, filters, or tabs
- what no-selection, partially-available, and loading states look like
- mobile fallback strategy when action density or sticky placement stops fitting

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build selection clarity before action density

- Make selected count and selection scope readable in one pass.
- Keep the primary batch action obvious without turning every action into a primary CTA.
- Group destructive actions away from routine ones.
- Avoid burying clear-selection or cancel affordances.

### 4. Handle safety, overflow, and fallback

- Keep disabled and unavailable actions visibly explained.
- Distinguish no selection from selection lost due to filter or page changes.
- Use sticky footers, floating shelves, or condensed menus only when they remain understandable.
- Collapse to sheets, overflow menus, or compact selected summaries when small screens cannot support the full bar.
- If the surface is really a full result toolbar or broader table/search build, move ownership to the broader skill.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one select-items path and one clear-selection path where practical.
- Verify at least one destructive or confirmation-gated action path where practical.
- Verify at least one disabled or unavailable-action state where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about bulk or multi-select actions
- selected count, action scope, and safety matter
- the bulk-action bar itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a persistent grid toolbar with filters, sort, and view controls
- the task is really a broader table, queue, or search surface where the bar is only one part
- the task is merely one destructive-action confirmation modal
- the work is purely a tiny spacing or copy tweak on an existing bulk-action surface

## Output Shape

Prefer a structure like:

1. Bulk-action contract and assumptions
2. Selection scope, actions, and safety behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
