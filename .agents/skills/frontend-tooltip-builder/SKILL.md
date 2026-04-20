---
name: frontend-tooltip-builder
description: Build or refine frontend tooltips, hover hints, info triggers, and lightweight contextual help on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement non-essential hover or focus hints, icon-triggered explainers, dense control labels, or status clarifiers while preserving the current component family and handling trigger behavior, timing, placement, touch fallback, and accessibility correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the content is interactive or essential to task completion, use `frontend-popover-builder` or a broader surface skill instead.
---

# Frontend Tooltip Builder

## Quick Start

1. Confirm the task is primarily about tooltip, hover-hint, or icon-help behavior.
2. Audit the existing trigger styles, motion tone, spacing density, and `FRONTEND-DNA.md`.
3. Read `references/trigger-and-content-contract.md`.
4. Read `references/placement-hover-and-focus.md`.
5. Read `references/touch-fallback-and-accessibility.md`.
6. Build the smallest honest tooltip system that still handles trigger state, placement, and non-hover fallback correctly.

## Core Rules

- Reuse the existing icon language, text treatment, radius, shadow, and motion tone.
- Keep tooltip content supplementary, not required to complete the main task.
- Match the trigger to the surrounding control instead of introducing decorative hint chrome.
- Treat hover, focus, delay, and dismissal behavior as part of the feature.
- Provide a touch or keyboard fallback where hover is not available.
- Do not call tooltip work done if critical instructions only exist inside hover-only UI.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear tooltip contract for trigger and content
- placement behavior that fits the surrounding layout
- keyboard and pointer behavior that do not fight nearby controls
- a fallback path for touch or hover-less environments
- copy that stays short, specific, and genuinely supplemental
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby icon buttons, badges, form labels, dense controls, and existing help affordances already in the repo.
- Identify whether the request is a simple label tooltip, a multi-line explanatory hint, an info-icon helper, or a status clarifier.
- Check whether the product already uses hover cards, popovers, or native title attributes so the new treatment does not fork the interaction language.

If a local tooltip pattern already exists, extend it instead of introducing a parallel hint system.

### 2. Define the tooltip contract

Clarify:

- what element triggers the tooltip
- whether the tooltip is plain text or a short structured hint
- whether the content is supplemental versus required
- open and close triggers for pointer, keyboard, and focus states
- delay expectations for hover entry and exit
- placement preferences and collision handling
- touch fallback behavior where hover is unavailable
- whether the tooltip should be suppressed on small screens or converted into an alternate help pattern

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Keep tooltip content small and honest

- Keep content short enough to scan without turning the tooltip into a mini panel.
- Avoid multi-step instructions, destructive warnings, or decision-making content inside a tooltip.
- Anchor the tooltip visually to the triggering control without obscuring nearby labels or critical data.
- Prefer plain, precise copy over promotional or overly conversational text.

### 4. Handle interaction and fallback states

- Keep hover, focus, and dismissal behavior predictable.
- Avoid sticky tooltip states unless the product already uses them deliberately.
- Ensure the tooltip does not block surrounding actions, text selection, or scrolling.
- Provide an alternate reveal path when the same explanation must work on touch devices.
- If the content needs links, toggles, or longer explanation, switch to a popover or broader surface instead.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one pointer interaction and one keyboard-focus path where practical.
- Verify at least one narrow or hover-less fallback where practical.
- If the tooltip was only validated structurally and not against real focus or collision behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about tooltips, help hints, or lightweight contextual explanation
- the content should remain supplemental and low-friction
- trigger timing, placement, and touch fallback matter

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the content is interactive, scrollable, or large enough to function as a mini surface
- the main task is really an action menu, select menu, or dropdown list
- the main task is really a combobox or search-select field
- the main task is really a date-selection surface
- the work is purely a tiny copy tweak on an existing tooltip

## Output Shape

Prefer a structure like:

1. Tooltip contract and assumptions
2. Trigger, placement, and fallback behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
