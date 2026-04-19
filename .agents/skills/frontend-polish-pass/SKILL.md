---
name: frontend-polish-pass
description: Refine existing frontend surfaces so they feel consistent, responsive, state-complete, and ready to ship without redesigning the product. Use when Codex needs to clean up spacing, hierarchy, component consistency, loading or empty states, responsive behavior, motion tone, or visual rough edges on an existing UI. Prefer this skill after the stack, theme, and main component structure already exist. If the main job is choosing the stack, use `frontend-foundation-builder`. If the theme still needs to be derived from design context, use `frontend-figma-to-theme`. If the main task is building a dedicated empty, blocked, or recovery state from scratch, use `frontend-empty-state-builder` first. If the main task is building a dedicated notification or alerting surface from scratch, use `frontend-notification-builder` first. If the main task is building a dedicated upload or attachment surface from scratch, use `frontend-upload-builder` first. If the main task is building a dedicated modal or overlay surface from scratch, use `frontend-modal-builder` first. If the main task is building dedicated tabs or a tabbed-surface from scratch, use `frontend-tabs-builder` first. If the main task is building the component itself, use `frontend-component-builder` first.
---

# Frontend Polish Pass

## Quick Start

1. Confirm the UI already exists and needs refinement, not a redesign.
2. Audit the current surface and nearby related surfaces first.
3. Read `references/polish-checklist.md`.
4. Read `references/no-redesign-rule.md`.
5. Read `references/responsive-and-states.md`.
6. Make the smallest set of changes that materially improves ship-readiness.
7. Verify the polish pass honestly.

## Core Rules

- Preserve the existing product DNA.
- Prefer refinement over replacement.
- Fix rough edges in the current direction instead of introducing a new one.
- Cover loading, empty, error, disabled, and responsive states where relevant.
- Avoid ornamental changes that do not improve clarity or usability.
- Do not call the work polished if the surface still breaks in common states.

## What This Skill Should Produce

When used well, the output usually includes:

- a short audit of the current rough edges
- targeted fixes to spacing, hierarchy, alignment, rhythm, and state handling
- responsive cleanup where the current layout degrades
- consistency fixes across nearby components or sections in the same surface
- a realistic verification summary

## Workflow

### 1. Audit before touching code

- Inspect the current surface and the closest neighboring surfaces.
- Identify what actually feels rough: spacing, hierarchy, typography, interaction states, density, or responsiveness.
- Decide whether the issue is local polish or a deeper structural problem.

If it is a structural problem, say so instead of hiding it behind cosmetic tweaks.

### 2. Preserve product DNA

- Follow `FRONTEND-DNA.md` if it exists.
- Reuse the current component family, tokens, spacing rhythm, and interaction style.
- Improve continuity, not novelty.

### 3. Fix the highest-signal issues first

Prioritize:

- broken or weak states
- hierarchy confusion
- spacing and alignment drift
- responsive breakage
- inconsistent component treatment
- obvious visual noise

Do not spend time on vanity animation or decorative changes before these are solid.

### 4. Validate realistic states

Check whichever states are relevant:

- default
- hover
- focus
- active
- disabled
- loading
- empty
- error
- selected
- mobile and desktop layouts

### 5. Verify honestly

- Run the repo's actual checks where possible.
- Confirm the surface improves in context, not only in isolation.
- State what was not verified if anything remains untested.

## Decision Boundary

### Use this skill when:

- the UI already exists
- the main need is refinement, cleanup, or ship-readiness
- the user wants a final polish pass

### Do not use this skill when:

- the task is mostly stack selection
- the main work is extracting a theme from design references
- the main task is building a dedicated empty, blocked, or recovery state from scratch
- the main task is building a dedicated notification or alerting surface from scratch
- the main task is building a dedicated upload or attachment surface from scratch
- the main task is building a dedicated modal or overlay surface from scratch
- the main task is building dedicated tabs or a tabbed-surface from scratch
- the component does not exist yet and still needs to be built from scratch
- the user explicitly wants a redesign rather than a polish pass

## Output Shape

Prefer a structure like:

1. Current rough edges found
2. What was polished
3. States or breakpoints checked
4. Verification performed
5. Remaining gaps or structural issues
