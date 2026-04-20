---
name: frontend-gantt-builder
description: Build or refine frontend gantt views, task-span planners, dependency schedules, and project-bar planning surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement project timelines with start and end bars, milestone markers, grouped workstreams, task dependencies, zoomable date ranges, or resource planning lanes while preserving the current component family and handling horizontal density, sticky labels, dependency clarity, empty ranges, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the task is a broader project page and the gantt is only one sub-part, use the broader surface skill first unless the gantt itself is the main job.
---

# Frontend Gantt Builder

## Quick Start

1. Confirm the task is primarily about a gantt or dependency-based planning surface.
2. Audit the existing table rows, bars, chips, milestones, and `FRONTEND-DNA.md`.
3. Read `references/gantt-contract.md`.
4. Read `references/task-bars-dependencies-and-milestones.md`.
5. Read `references/zoom-density-and-mobile-fallback.md`.
6. Build the smallest honest gantt surface that still handles spans, labels, and dense horizontal planning states correctly.

## Core Rules

- Reuse the existing row styling, chips, status language, and surface treatment.
- Treat the gantt as a dependency or schedule-planning surface, not as a generic timeline.
- Keep task labels, date range, and dependency meaning readable together.
- Match zoom and density controls to the actual planning job.
- Preserve milestone and blocker meaning without turning every row into a detail card.
- Do not call gantt work done if it only renders bars but ignores scale, overflow, or empty planning states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear gantt contract for tasks, spans, and dependencies
- bars, milestones, and labels that stay readable under real density
- time-scale and zoom behavior that fit the planning task
- empty-range, blocked, and overloaded states that remain understandable
- responsive fallback when horizontal planning views stop fitting
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby planners, roadmap views, timeline tables, project schedules, or resource boards already in the repo.
- Identify whether the request is a project gantt, dependency planner, roadmap bar view, resource schedule, or grouped workstream surface.
- Check whether the product already uses sticky left labels, milestone chips, row grouping, or dependency indicators.

If a local planning pattern already exists, extend it instead of introducing a parallel gantt language.

### 2. Define the gantt contract

Clarify:

- what rows represent: tasks, projects, workstreams, or resources
- what the date scale covers
- whether dependencies, milestones, or blockers must be shown
- whether zoom levels or range switching are required
- what row grouping or hierarchy exists
- what empty-range, not-started, blocked, and completed states look like
- responsive fallback when horizontal density exceeds the viewport

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build planning clarity before decoration

- Make row labels and current scale obvious from the first scan.
- Keep dependency meaning understandable without excessive connector clutter.
- Use bars, milestones, and status markers to support planning decisions, not decoration.
- Avoid overloading the surface with detail that belongs in row expansion or side panels.

### 4. Handle density, zoom, and smaller screens

- Preserve label readability when the date range compresses.
- Keep sticky label areas and scroll affordances obvious when the board is wide.
- Distinguish empty planning range from filtered-out rows or unavailable data.
- Use simplified list, phased milestones, or alternate summary view when a full gantt cannot work on mobile.
- If the task is really a calendar scheduler or chronology feed rather than a dependency planner, move to calendar or timeline ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one populated planning state and one empty or blocked planning state where practical.
- Verify at least one wide-layout scroll behavior or narrower fallback where practical.
- If the gantt was only validated structurally and not against real task data, dependencies, or scale changes, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about gantt, dependency planning, or task-span scheduling surfaces
- date scale, task bars, and dependency clarity matter
- the gantt view itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a simple timeline, milestone feed, or activity chronology
- the task is really a calendar planner or agenda view
- the task is really a broader project page where the gantt is only one sub-part
- the work is purely a tiny spacing or copy tweak on an existing gantt

## Output Shape

Prefer a structure like:

1. Gantt contract and assumptions
2. Task bars, dependencies, and planning states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
