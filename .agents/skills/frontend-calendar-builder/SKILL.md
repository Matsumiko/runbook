---
name: frontend-calendar-builder
description: Build or refine frontend calendar views, scheduling boards, month/week/day planners, agenda surfaces, and event-based chronology layouts on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement team calendars, booking calendars, editorial schedules, operational planners, event grids, or agenda views while preserving the current component family and handling time navigation, event density, empty states, overlapping events, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the task is only a date-input control, use `frontend-date-picker-builder`; if it is a resource scheduler or slot board, use `frontend-scheduler-builder`; if it is dependency planning, use `frontend-gantt-builder`.
---

# Frontend Calendar Builder

## Quick Start

1. Confirm the task is primarily about a full calendar or schedule surface rather than a date input.
2. Audit the existing page shell, cards, chips, time labels, and `FRONTEND-DNA.md`.
3. Read `references/calendar-surface-contract.md`.
4. Read `references/month-week-day-and-agenda-views.md`.
5. Read `references/event-density-navigation-and-mobile-fallback.md`.
6. Build the smallest honest calendar surface that still handles navigation, density, and no-event states correctly.

## Core Rules

- Reuse the existing page shell, surface treatment, chips, and semantic state language.
- Treat calendar work as chronology and scheduling UI, not as a date-picker with extra chrome.
- Match the calendar view to the user's planning job: month, week, day, or agenda.
- Keep time navigation, current-date context, and event density understandable.
- Distinguish empty periods, blocked periods, and fully booked states honestly.
- Do not call calendar work done if it only renders a grid but ignores navigation, overlap, or mobile behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear calendar-surface contract
- the right view mode for the scheduling job
- understandable event density, overlap, and empty-period treatment
- visible current-date, date-range, and navigation context
- responsive fallback when dense calendar grids no longer work
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby schedules, booking boards, timeline calendars, or date-based dashboards already in the repo.
- Identify whether the request is a month planner, week scheduler, day schedule, agenda list, or multi-resource calendar.
- Check whether the product already uses chips, status colors, avatars, lanes, or side panels that the calendar should inherit.

If a local scheduling pattern already exists, extend it instead of introducing a parallel calendar language.

### 2. Define the calendar contract

Clarify:

- whether the primary view is month, week, day, agenda, or hybrid
- what events or items populate the surface
- whether overlapping events, multi-day spans, or all-day rows exist
- what navigation controls and default date range are expected
- whether filters, resource lanes, or secondary side panels are needed
- what empty, blocked, or unavailable periods look like
- mobile fallback strategy when full grids become too dense

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build chronology and scan path before decoration

- Make current period and current day obvious.
- Keep event cards concise enough to scan without losing meaning.
- Use color, chips, or status markers to clarify event type only when they fit the existing product language.
- Avoid turning the surface into a miniature analytics dashboard unless that is explicitly the job.

### 4. Handle density, overlap, and smaller screens

- Keep overlapping or stacked events understandable.
- Preserve navigation context while switching between date ranges or view modes.
- Make no-event periods visibly different from filtered-out or unavailable periods.
- Switch to agenda, list, or sheet-like fallback when grid density becomes unreadable on mobile.
- If the task is really a date-input pattern rather than a schedule surface, move to date picker ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one navigation path and one event-density or empty-period path where practical.
- Verify at least one narrower-layout fallback where practical.
- If the calendar was only validated structurally and not against real event data or time boundaries, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about full calendar or scheduling surfaces
- navigation, event density, and chronology readability matter
- the calendar surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a date-input field, date picker, or range selector
- the task is really a resource scheduler or slot-assignment board
- the task is really a gantt or dependency-planning surface
- the task is really a broader dashboard or detail page where the calendar is only one sub-part
- the task is really a simple timeline or history feed rather than a scheduling grid or planner
- the work is purely a tiny spacing or copy tweak on an existing calendar surface

## Output Shape

Prefer a structure like:

1. Calendar contract and assumptions
2. View model, event density, and fallback covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
