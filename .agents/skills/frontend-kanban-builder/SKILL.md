---
name: frontend-kanban-builder
description: Build or refine frontend kanban boards, lane-based workflow surfaces, backlog columns, and status-driven task boards on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement work-in-progress boards, issue or ticket lanes, editorial boards, sprint backlogs, or grouped task-card workflow views while preserving the current component family and handling lane hierarchy, card density, drag affordances, empty lanes, status clarity, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the task is a broader dashboard or detail page and the board is only one sub-part, use the broader skill first unless the board itself is the main job. If the task is primarily operational triage or queue processing rather than status-lane workflow, use `frontend-queue-board-builder` first.
---

# Frontend Kanban Builder

## Quick Start

1. Confirm the task is primarily about a kanban board or lane-based workflow surface.
2. Audit the existing card family, chip treatment, avatars, and `FRONTEND-DNA.md`.
3. Read `references/board-contract.md`.
4. Read `references/lane-card-and-status-model.md`.
5. Read `references/drag-empty-lanes-and-responsive-fallback.md`.
6. Build the smallest honest board that still handles lane structure, card states, and dense or empty lanes correctly.

## Core Rules

- Reuse the existing card treatment, badges, avatars, and action language.
- Treat the board as a workflow surface first, not as a dressed-up table.
- Keep lane meaning and card status obvious without relying on color alone.
- Match board density to the user's prioritization or execution job.
- Preserve scanability before adding drag, quick actions, or decorative affordances.
- Do not call kanban work done if it only renders columns but ignores empty lanes, overflow, or narrow layouts.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear board contract for lanes and cards
- lane hierarchy and ordering that fit the workflow
- card density and metadata that support prioritization
- empty-lane, overflow, and card-state treatment that remain usable
- responsive fallback when multi-column boards stop fitting
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby backlog views, issue boards, workflow columns, or card lists already in the repo.
- Identify whether the request is a classic status board, a swimlane board, a backlog-plus-board hybrid, or a compact board embedded in a route.
- Check whether the product already uses chips, assignee avatars, due dates, priorities, or quick actions inside cards.

If a local board pattern already exists, extend it instead of introducing a parallel kanban language.

### 2. Define the board contract

Clarify:

- what each lane represents
- how cards move or change state
- which metadata matters most on the card face
- whether drag or reorder behavior is required
- whether WIP, counts, or summaries matter per lane
- what empty lanes, loading lanes, and blocked cards look like
- responsive fallback when the lane count exceeds the viewport

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build lane understanding before interaction chrome

- Make lane ordering and lane labels unambiguous.
- Keep card metadata subordinate to the card title or main identity.
- Use counts, badges, or small summaries only when they genuinely aid prioritization.
- Avoid turning every card into a miniature detail page.

### 4. Handle density and board behavior

- Preserve card readability when lanes get crowded.
- Make empty lanes feel intentionally available, not broken.
- Keep drag affordances honest; if movement is not implemented, do not fake draggable UI.
- Use horizontal scroll, stacked sections, or alternate board/list fallback when narrow layouts cannot support many lanes.
- If the job is really a full schedule or dependency planner, switch to calendar or gantt ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one populated-lane state and one empty-lane or dense-board state where practical.
- Verify at least one narrower layout or fallback where practical.
- If the board was only validated structurally and not against real movement or state-update behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about lane-based workflow, status boards, or backlog-style card surfaces
- lane hierarchy, card density, and board state clarity matter
- the kanban board itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a queue board, review queue, or triage worklist
- the task is really a table, list, or detail route with only one board fragment
- the task is really a calendar or schedule surface
- the task is really a dependency or gantt planner
- the work is purely a tiny copy or spacing tweak on an existing board

## Output Shape

Prefer a structure like:

1. Board contract and assumptions
2. Lane model, card model, and board states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
