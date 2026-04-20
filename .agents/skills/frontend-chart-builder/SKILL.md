---
name: frontend-chart-builder
description: Build or refine frontend charts, data-visualization surfaces, trend panels, comparison graphs, and metric-series views on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement line, bar, area, donut, scatter, or sparkline visuals while preserving the current component family and handling axes, legends, units, no-data states, comparison clarity, tooltip behavior, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the task is a broader dashboard and the chart is only one sub-part, use `frontend-dashboard-builder` first unless the chart surface itself is the main job.
---

# Frontend Chart Builder

## Quick Start

1. Confirm the task is primarily about one or more charts or visualization panels.
2. Audit the existing card wrappers, typography, semantic colors, and `FRONTEND-DNA.md`.
3. Read `references/chart-contract.md`.
4. Read `references/axes-legends-and-comparison-clarity.md`.
5. Read `references/empty-data-density-and-mobile-fallback.md`.
6. Build the smallest honest chart surface that still handles labeling, comparison, and no-data states correctly.

## Core Rules

- Reuse the existing card family, labels, semantic state language, and interaction tone.
- Match the chart type to the analytical question instead of decorating metrics with a familiar graph.
- Keep units, ranges, and comparison meaning explicit.
- Treat legends, axes, tooltips, and no-data states as part of the feature.
- Preserve readability before adding gradients, multiple series, or motion.
- Do not call chart work done if it only renders data but leaves users unsure what they are seeing.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear chart contract for question, metric, and comparison model
- the right visualization type for the actual data relationship
- labels, legends, axes, or summary text that make interpretation easy
- empty-data, partial-data, and dense-series treatment that remain honest
- responsive fallback for small screens or compressed cards
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby dashboards, stat cards, chart wrappers, or analytics panels already in the repo.
- Identify whether the request is a trend chart, categorical comparison, proportion breakdown, distribution view, or compact sparkline surface.
- Check whether the product already has color rules, axis treatment, tooltip styling, or chart libraries in use.

If a local chart pattern already exists, extend it instead of introducing a parallel visualization language.

### 2. Define the chart contract

Clarify:

- what question the chart must answer
- which metric or series matter
- whether the goal is trend, comparison, proportion, relationship, or distribution
- what units, time buckets, or categorical groupings are required
- whether legends, tooltips, summaries, or annotations are needed
- what empty, partial, or unavailable data looks like
- responsive fallback when the chart card gets narrow

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build interpretation before ornament

- Choose the chart type that minimizes explanation cost.
- Make units and comparisons obvious without requiring tooltip-only reading.
- Keep series count disciplined enough to remain scannable.
- Use color sparingly and consistently with the product's semantic and accent rules.
- Avoid chart chrome that competes with the data.

### 4. Handle dense, empty, and mobile states

- Distinguish no data from zero values and unavailable data.
- Keep legends and controls subordinate to the chart's main question.
- Preserve chart meaning when labels compress or the card stacks on smaller screens.
- Switch to summary table, list, or simplified chart view when dense series stop reading clearly.
- If the surface is really geospatial, use map ownership instead.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one populated-data state and one no-data or partial-data state where practical.
- Verify at least one narrower-layout fallback where practical.
- If the chart was only validated structurally and not against live data or real scales, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about charts, graphs, or analytical visualization surfaces
- units, legends, labels, and comparison clarity matter
- the chart surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a broader dashboard or analytics route where charts are only one sub-part
- the task is really a map or geospatial surface
- the task is really a kanban board, calendar, timeline, or gantt view
- the work is purely a tiny spacing or copy tweak on an existing chart

## Output Shape

Prefer a structure like:

1. Chart contract and assumptions
2. Visualization type, labels, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
