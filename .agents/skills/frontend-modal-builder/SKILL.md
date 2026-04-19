---
name: frontend-modal-builder
description: Build or refine frontend modals, dialogs, sheets, drawers, confirm dialogs, overlay forms, and interruptive action surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement a modal flow, confirmation dialog, destructive-action prompt, side sheet, slide-over panel, or focused overlay step while preserving the current component family and handling trigger context, focus, layering, dismissal, scroll locking, responsive behavior, and action clarity correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is a broader page, auth flow, checkout, or detail page and the modal is only one sub-part, use the matching builder first unless the modal itself is the main job. If the work is only a tiny tweak on an existing modal, use the nearest skill first.
---

# Frontend Modal Builder

## Quick Start

1. Confirm the task is primarily about a modal, dialog, drawer, sheet, or other overlay-based surface.
2. Audit the existing overlay treatment, card family, motion tone, and `FRONTEND-DNA.md`.
3. Read `references/modal-contract.md`.
4. Read `references/layering-focus-and-dismissal.md`.
5. Read `references/sheets-drawers-and-destructive-flows.md`.
6. Build the smallest complete overlay surface that still handles trigger context, dismissal, and responsive behavior honestly.

## Core Rules

- Reuse the existing surface treatment, radius, semantic states, and action language.
- Define the modal contract before choosing centered dialog, side sheet, bottom sheet, or destructive confirm treatment.
- Match the overlay pattern to the job: interruption, review, focused edit, or multi-step subflow.
- Keep the primary action clear and keep dismissal behavior intentional.
- Treat focus handling, layering, and scroll locking as part of the feature, not finishing polish.
- Do not call modal work done if it only renders content and ignores focus, close behavior, or smaller-screen behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear modal or overlay contract
- the right overlay pattern for the interruption level and task complexity
- explicit close, cancel, confirm, and destructive behavior
- focus and keyboard handling that fit the chosen overlay type
- responsive treatment for centered dialogs versus drawers or sheets
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby dialogs, sheets, drawers, confirm prompts, or overlay forms already in the repo.
- Identify whether the request is a small confirm dialog, a side sheet, a multi-step modal, a detail preview overlay, or a destructive-action interruption.
- Check whether there are existing overlay containers, animation rules, or close-button patterns in use.

If a local overlay pattern already exists, extend it instead of introducing a parallel modal language.

### 2. Define the modal contract

Clarify:

- what action or context opens the overlay
- whether the user is confirming, reviewing, editing, or completing a subtask
- whether the overlay blocks progress or can be deferred
- primary, secondary, and destructive actions
- close rules: escape, backdrop click, close button, or explicit action only
- focus target, return focus behavior, and scroll-lock expectations
- whether the content should be a centered dialog, side sheet, bottom sheet, or full-screen mobile takeover
- narrow-layout behavior when the overlay would be too dense as a desktop-style modal

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose overlay type before ornament

- Use centered dialogs for focused short tasks or confirmations.
- Use side sheets or drawers when the task benefits from preserving page context.
- Use bottom sheets or mobile takeovers when smaller screens cannot support dense dialog layouts.
- Keep the user's origin context understandable so the overlay does not feel detached from the action that opened it.
- Keep decorative chrome subordinate to clarity, hierarchy, and action safety.

### 4. Handle dismissal, layering, and interaction states

- Define whether backdrop click and escape are allowed for the specific task.
- Keep cancel and close behavior distinct from destructive or commit actions.
- Prevent hidden background interaction while the overlay is active where blocking behavior is intended.
- Preserve focus order, return focus, and action clarity on narrower layouts.
- Handle loading, error, and confirm states without trapping the user in an unclear overlay state.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one open-close interaction and one confirm-or-cancel path where practical.
- Verify keyboard and smaller-layout behavior where practical.
- If the work was only validated structurally and not against real route, mutation, or focus-management behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about a modal, dialog, drawer, sheet, or overlay UX surface
- focus, dismissal, layering, or interruption level decisions matter
- the overlay surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader page, auth flow, checkout flow, or detail page and the modal is only one sub-part
- the task is mostly a general component without overlay-specific behavior
- the work is purely a tiny copy or spacing tweak on an existing modal

## Output Shape

Prefer a structure like:

1. Modal contract and assumptions
2. Overlay type, dismissal rules, and lifecycle covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
