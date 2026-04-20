---
name: frontend-timeline-builder
description: Build or refine frontend timelines, milestone rails, audit trails, and ordered event-sequence surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement release timelines, incident histories, order or shipment progress, audit trails, or roadmap sequences while preserving the current component family and handling time grouping, status markers, chronology clarity, dense history states, and responsive flow correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the task is a broader detail page or onboarding flow and the timeline is only one sub-part, use the broader surface skill first unless the timeline itself is the main job. If the task is mainly a recent activity stream, use `frontend-activity-feed-builder`.
---

# Frontend Timeline Builder

## Quick Start

1. Confirm the task is primarily about chronology, milestones, or ordered event history.
2. Audit the existing status chips, metadata rows, feed items, and `FRONTEND-DNA.md`.
3. Read `references/timeline-contract.md`.
4. Read `references/chronology-grouping-and-status-markers.md`.
5. Read `references/density-empty-states-and-responsive-flow.md`.
6. Build the smallest honest timeline surface that still handles chronology, grouping, and dense history states correctly.

## Core Rules

- Reuse the existing status language, icons, chips, metadata rows, and spacing rhythm.
- Match the timeline type to the job: milestone rail, progress sequence, or audit trail.
- Keep chronology unambiguous whether the view runs top-down, left-right, or grouped by date.
- Make status markers, timestamps, and supporting metadata readable without turning every entry into a card wall.
- Distinguish major milestones from routine events.
- Do not call timeline work done if it only renders dots and lines but fails to explain chronology or empty states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear timeline contract for event type and ordering
- chronology that is easy to scan and hard to misread
- grouped milestones or history states that fit the product
- empty, loading, and dense-history treatment that remains readable
- responsive behavior that preserves order on smaller screens
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby timelines, order histories, progress rails, roadmap lists, audit trails, or recent-event surfaces already in the repo.
- Identify whether the request is a horizontal milestone timeline, incident history, shipment progress, audit trail, or roadmap chronology.
- Check whether the product already uses status chips, timestamps, avatars, metadata rows, or section grouping that the timeline should inherit.

If a local chronology pattern already exists, extend it instead of introducing a parallel timeline language.

### 2. Define the timeline contract

Clarify:

- what events or milestones are being shown
- whether ordering is newest-first, oldest-first, or fixed milestone order
- whether events need date grouping, actor grouping, or status grouping
- which entries are major versus minor
- whether entries need actions, expanders, or detail reveals
- what loading, empty, missing-history, or partial-history states look like
- responsive fallback when horizontal or dense layouts stop working

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build chronology before decoration

- Make the ordering logic obvious from the first scan.
- Keep connectors, markers, and labels subordinate to the event content.
- Use status color or icon only when it adds meaning and fits the existing product language.
- Avoid over-designing every event card if the job is really to show sequence and change over time.

### 4. Handle density and non-happy paths

- Group repeated low-signal events when the surface gets noisy.
- Keep empty history, first event, and final milestone states distinct.
- Preserve chronology clarity when the layout collapses to one column on mobile.
- If the surface becomes a broader detail route or onboarding flow with many other sections, hand ownership back to the broader skill.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one ordered history case and one empty or dense-history state where practical.
- Verify at least one narrower-layout fallback where practical.
- If the timeline was only validated structurally and not against real timestamps or event ordering, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about history, milestones, or chronological sequence UI
- chronology, grouping, and status-marker clarity matter
- the timeline surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a recent activity feed, collaboration update stream, or unread recent-events panel
- the task is really a full calendar or scheduler surface
- the task is really a broader detail page, onboarding route, or dashboard where the timeline is only one sub-part
- the task is really a gantt or dependency-planning surface
- the work is purely a tiny copy or spacing tweak on an existing timeline

## Output Shape

Prefer a structure like:

1. Timeline contract and assumptions
2. Chronology model, grouping, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
