---
name: frontend-date-picker-builder
description: Build or refine frontend date pickers, calendar inputs, date-range selectors, and scheduling-oriented date entry surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement single-date pickers, date-range fields, month or week selectors, booking or reporting range controls, or calendar-popover inputs while preserving the current component family and handling parsing, locale, range behavior, disabled dates, mobile fallback, and selection clarity correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is a broader form and date entry is only a small sub-part, use the broader surface skill first unless the date picker itself is the main job.
---

# Frontend Date Picker Builder

## Quick Start

1. Confirm the task is primarily about date-entry, calendar selection, or date-range behavior.
2. Audit the existing input family, calendar surfaces, popover treatment, and `FRONTEND-DNA.md`.
3. Read `references/date-picker-contract.md`.
4. Read `references/single-range-and-calendar-behavior.md`.
5. Read `references/locale-input-and-mobile-fallback.md`.
6. Build the smallest complete date-selection flow that still handles parsing, selection, and narrow-layout fallback honestly.

## Core Rules

- Reuse the existing input family, chip or badge language, calendar surface treatment, and motion tone.
- Match the date picker pattern to the job: single date, range, month, week, or scheduling selection.
- Keep typed input, formatted display, and calendar selection synchronized.
- Treat locale, disabled dates, timezone expectations, and mobile fallback as part of the feature.
- Keep current selection, tentative hover range, and invalid input states visibly distinct.
- Do not call date-picker work done if it only renders a calendar but ignores parsing, boundaries, or touch behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear date-picker contract for input, calendar, and selection model
- visible states for current value, tentative range, invalid entry, and disabled dates
- the right calendar density and month-navigation model for the job
- locale-aware display and parsing assumptions
- fallback treatment for touch or narrow layouts
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby date fields, booking widgets, report filters, and calendar surfaces already in the repo.
- Identify whether the request is a single-date input, a report range selector, a scheduling picker, or a month or week selector.
- Check whether the product already uses anchored calendar popovers, inline calendars, chips, presets, or quick ranges.

If a local date-entry pattern already exists, extend it instead of introducing a parallel calendar language.

### 2. Define the date-selection contract

Clarify:

- single date versus range versus recurring or month-level selection
- whether typed entry, calendar click, presets, or all of them are required
- formatting and locale expectations
- min and max bounds, blocked dates, and disabled periods
- how invalid typed input should behave
- whether time, timezone, or reporting boundary semantics matter
- whether the surface needs quick presets like today, last 7 days, or this month
- mobile fallback when a desktop popover calendar becomes awkward

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build value logic before ornament

- Keep the displayed value and internal selection model in sync.
- Make range start, range end, hover preview, and completed range easy to distinguish.
- Use quick presets only when they clearly reduce user effort.
- Avoid turning the picker into a full scheduling app when the job is only date entry.

### 4. Handle parsing, locale, and responsive behavior

- Distinguish invalid input from empty input and blocked dates.
- Keep month navigation, keyboard traversal, and selection feedback predictable.
- Make it obvious when a range is incomplete or when a preset overrides manual input.
- Convert to a safer mobile treatment when dense calendar popovers break down on smaller screens.
- If time-of-day or advanced scheduling dominates the task, consider a broader scheduling-specific surface instead.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one typed-entry path and one calendar-selection path where practical.
- Verify at least one invalid, disabled, or out-of-range state where practical.
- If the date picker was only validated structurally and not against real locale, timezone, or date-boundary behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about date or range selection UX
- parsing, calendar behavior, locale, or mobile fallback matter
- the date-selection surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a generic dropdown or menu
- the task is really a popover only and not specifically date selection
- the task is really a broader page, settings view, checkout flow, or form where the date input is only a tiny sub-part
- the work is purely a tiny copy or spacing tweak on an existing date picker

## Output Shape

Prefer a structure like:

1. Date-picker contract and assumptions
2. Selection model, locale behavior, and fallback covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
