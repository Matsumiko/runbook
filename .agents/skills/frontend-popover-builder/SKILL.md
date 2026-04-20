---
name: frontend-popover-builder
description: Build or refine frontend popovers, anchored mini-panels, contextual overlay cards, and inline utility surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement richer anchored overlays such as filter panels, attribute editors, reaction pickers, detail previews, or small inline forms while preserving the current component family and handling anchoring, layering, focus, dismissal, density, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the content is only a non-essential hint, use `frontend-tooltip-builder`; if it is a compact action menu, use `frontend-dropdown-builder`.
---

# Frontend Popover Builder

## Quick Start

1. Confirm the task is primarily about an anchored popover, utility panel, or contextual mini-surface.
2. Audit the existing overlay cards, trigger buttons, spacing density, and `FRONTEND-DNA.md`.
3. Read `references/popover-contract.md`.
4. Read `references/anchoring-focus-and-dismissal.md`.
5. Read `references/inline-forms-and-density.md`.
6. Build the smallest honest popover surface that still handles anchoring, dismissal, and small-screen fallback correctly.

## Core Rules

- Reuse the existing overlay surface treatment, card family, and motion tone.
- Keep the popover anchored to a clear trigger and preserve surrounding context.
- Use popovers for richer contextual surfaces, not for full-route work or heavy modal subflows.
- Treat focus, scroll behavior, layering, and outside-click dismissal as core behavior.
- Keep density intentional; a popover should feel compact, not cramped.
- Do not call popover work done if the content is visually fine but lacks clear open-close lifecycle or mobile fallback.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear popover contract for trigger, content, and lifecycle
- the right anchored-surface pattern for the job
- explicit handling for focus, dismissal, and collision behavior
- density and hierarchy that match the product instead of generic floating-card UI
- a responsive fallback when the anchored layout breaks down
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby hover cards, anchored menus, filter panels, inline editors, and lightweight overlay surfaces already in the repo.
- Identify whether the request is a filter popover, a detail peek card, a color or reaction picker, a small inline form, or a contextual utility panel.
- Check whether the product already uses popovers versus drawers or modals for similar tasks.

If a local anchored-surface pattern already exists, extend it instead of introducing a parallel popover language.

### 2. Define the popover contract

Clarify:

- what trigger opens the popover
- whether the content is read-only, actionable, or form-like
- whether the popover should trap focus or merely manage it predictably
- close rules for escape, outside click, selection, or explicit action
- placement and collision behavior near layout edges
- whether the trigger remains visible and meaningful while the popover is open
- narrow-layout or touch fallback when the anchored card becomes awkward
- whether the job would be better as a dropdown, tooltip, modal, or drawer

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Shape the surface around the anchored job

- Keep the popover tightly scoped to the trigger context.
- Use concise headers, grouped controls, and clear action rows when needed.
- Avoid turning the popover into a disguised settings page or full-screen workflow.
- Preserve visual connection between trigger and panel without over-decorating the pointer or arrow treatment.

### 4. Handle lifecycle and constrained layouts

- Keep open-close behavior predictable from the trigger.
- Prevent the popover from feeling lost behind other overlays or clipped by layout containers.
- Maintain sane tab order and dismissal rules if the content includes buttons, toggles, or short forms.
- Convert to sheet, drawer, or inline section when mobile or dense states make anchored behavior unreliable.
- If the content grows into a full task flow, escalate to modal or page-level patterns.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one open-close cycle and one internal action path where practical.
- Verify at least one constrained or narrow layout where practical.
- If the popover was only validated structurally and not against real collision, focus, or scroll behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about anchored mini-panels or contextual utility surfaces
- the content is richer than a tooltip or compact dropdown
- anchoring, dismissal, density, and responsive fallback matter

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the content is only a lightweight explanatory hint
- the content is just a compact action menu or selection list
- the content is really a typed combobox or autocomplete field
- the content is specifically a date-selection UI better handled by a date picker pattern
- the task is a full overlay workflow better handled by a modal, drawer, or page
- the work is purely a tiny spacing or copy tweak on an existing popover

## Output Shape

Prefer a structure like:

1. Popover contract and assumptions
2. Anchoring, lifecycle, and responsive fallback covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
