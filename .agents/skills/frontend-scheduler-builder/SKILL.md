---
name: frontend-scheduler-builder
description: Build or refine frontend schedulers, resource planning boards, appointment grids, shift planners, dispatch timelines, and slot-based booking surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement room or staff scheduling, booking timelines, service calendars with resource lanes, delivery or dispatch boards, or slot-assignment interfaces while preserving the current component family and handling resource grouping, slot density, overlap, drag or resize behavior, blocked times, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is a month, week, day, or agenda calendar, use `frontend-calendar-builder` first. If the task is dependency planning or task spans, use `frontend-gantt-builder` first.
---

# Frontend Scheduler Builder

## Quick Start

1. Confirm the task is primarily about a resource scheduler, slot board, or time-lane booking surface.
2. Audit the existing page shell, cards, chips, time labels, and `FRONTEND-DNA.md`.
3. Read `references/scheduler-surface-contract.md`.
4. Read `references/resources-slots-and-overlap-model.md`.
5. Read `references/drag-resize-and-mobile-fallback.md`.
6. Build the smallest complete scheduler that still handles resources, slots, and density honestly.

## Core Rules

- Reuse the existing shell, status language, chips, avatars, and semantic colors.
- Define the scheduler contract before choosing rows, columns, lanes, or timeline density.
- Treat resources and time slots as one interaction model, not separate decoration layers.
- Keep booking, assignment, and blocked-time semantics explicit.
- Use drag, resize, or quick actions only when the user workflow truly requires them.
- Do not call scheduler work done if it only renders a grid but ignores overlap, slot rules, or mobile fallback.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear scheduler-surface contract
- visible resource grouping and slot granularity
- understandable overlap, blocked-time, and assignment behavior
- drag, resize, or quick-edit behavior when the task needs it
- responsive fallback when dense scheduling grids stop being usable
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby calendar boards, booking grids, shift planners, dispatch views, or resource panels already in the repo.
- Identify whether the request is an appointment scheduler, room planner, staff roster, dispatch board, or service-slot assignment surface.
- Check whether the product already uses status chips, avatars, lanes, cards, or side panels that the scheduler should inherit.

If a local scheduling pattern already exists, extend it instead of introducing a parallel scheduler language.

### 2. Define the scheduler contract

Clarify:

- what resources or lanes exist
- what time scale and slot granularity apply
- whether the surface is day-only, multi-day, week-based, or rolling
- whether overlapping bookings, double-booking rules, or blocked times exist
- whether drag, resize, reassign, or quick-create behavior is required
- what unassigned work, waitlists, or overflow items look like
- what loading, no-availability, and conflict states look like
- mobile fallback strategy when lane density becomes unreadable

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build resource-time clarity before ornament

- Make the time axis, current period, and resource grouping obvious first.
- Keep booking cards concise enough to scan within constrained slots.
- Use semantic color, avatars, or badges to clarify assignment meaning only when they fit the existing language.
- Avoid turning a scheduler into a generic calendar if resource assignment is the main job.

### 4. Handle overlap, interaction, and responsive behavior

- Keep overlap, conflicts, blocked times, and unavailable slots visibly distinct.
- Preserve orientation while scrolling or switching ranges.
- Make drag, resize, and quick-edit states explicit if interactive scheduling is required.
- Switch to grouped lists, agenda-by-resource views, or sheet-like drill-downs when dense grids fail on smaller screens.
- If the user really needs dependency planning rather than resource scheduling, move to gantt ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one assignment or scheduling path and one conflict, blocked, or no-availability path where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about resource scheduling, slot assignment, or dispatch-style planning
- resource grouping, overlap, and slot behavior matter
- the scheduler surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a month, week, day, or agenda calendar view
- the task is really a gantt or dependency-planning surface
- the task is really a broader dashboard or detail route where the scheduler is only one sub-part
- the work is purely a tiny spacing or copy tweak on an existing scheduler

## Output Shape

Prefer a structure like:

1. Scheduler contract and assumptions
2. Resource, slot, and interaction behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
