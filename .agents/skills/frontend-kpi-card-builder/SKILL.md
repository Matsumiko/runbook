---
name: frontend-kpi-card-builder
description: Build or refine frontend KPI cards, stat cards, metric summary strips, target-vs-actual blocks, and compact analytics summary surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement revenue cards, growth stats, performance summaries, delta badges, or compact metric panels while preserving the current component family and handling number formatting, comparison clarity, threshold cues, loading states, and responsive clustering correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is a broader dashboard, comparison panel, or chart, use `frontend-dashboard-builder`, `frontend-metric-comparison-builder`, or `frontend-chart-builder` first.
---

# Frontend Kpi Card Builder

## Quick Start

1. Confirm the task is primarily about KPI cards, metric tiles, or compact summary-stat UX.
2. Audit the existing card family, number formatting, semantic colors, and `FRONTEND-DNA.md`.
3. Read `references/metric-card-contract.md`.
4. Read `references/deltas-targets-and-status-cues.md`.
5. Read `references/loading-comparison-and-responsive-clusters.md`.
6. Build the smallest complete KPI-card system that still handles comparison, status, and loading honestly.

## Core Rules

- Reuse the existing card, typography, badge, and icon language.
- Define the metric-card contract before styling deltas, trend arrows, or sparklines.
- Keep primary value, label, and comparison baseline obvious at first glance.
- Use semantic color and status cues sparingly; they should clarify meaning, not decorate the metric.
- Treat multi-card consistency as part of the feature, not an afterthought.
- Do not call KPI-card work done if it only shows pretty numbers without honest comparison, units, or non-happy-path states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear metric-card contract
- visible units, baselines, or date windows for every important metric
- disciplined treatment of deltas, targets, thresholds, and trend indicators
- loading, empty, unavailable, and degraded-data states
- responsive clustering that preserves comparison across cards
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby stat cards, dashboard strips, summary widgets, or analytics headers already in the repo.
- Identify whether the request is for a single KPI card, a metric strip, target-vs-actual tiles, or a compact overview row.
- Check whether there are existing number-format helpers, semantic colors, sparkline wrappers, or badge patterns in use.

If a local KPI-card pattern already exists, extend it instead of introducing a parallel metric language.

### 2. Define the metric-card contract

Clarify:

- what metric is being summarized
- value format, units, and time window
- what comparison baseline exists: previous period, target, benchmark, or none
- whether trend arrows, deltas, thresholds, sparklines, or progress bars belong in the card
- whether each card links to a deeper route or interaction
- what loading, unavailable, no-data, or stale-data states look like
- responsive clustering strategy when cards stack or compress

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build comparison clarity before ornament

- Make the metric label and primary value the first read.
- Keep comparison text and delta cues secondary but still understandable.
- Show trend arrows, thresholds, or progress only when they improve decision support.
- Avoid stuffing one card with multiple unrelated numbers just to save space.

### 4. Handle consistency, state, and responsiveness

- Keep card heights, alignment, and value formatting consistent across a cluster.
- Make positive, negative, neutral, and unavailable states visibly different.
- Ensure loading cards preserve layout rhythm without implying fake precision.
- When cards stack on small screens, preserve label-value-comparison order and avoid truncating key meaning.
- If the user really needs a graph or multi-series comparison, move to chart ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one comparison-state path and one non-happy-path metric state where practical.
- Verify at least one clustered layout and one narrower-layout stacking case where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about KPI cards, stat tiles, or compact metric-summary surfaces
- number formatting, comparison clarity, and threshold cues matter
- the metric-card surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a broader dashboard where KPI cards are only one section
- the task is really a metric-comparison, baseline-delta, or variance-summary surface
- the task is really a chart, graph, or richer analytical visualization
- the task is mostly a generic card component without metric semantics
- the work is purely a tiny spacing or copy tweak on an existing KPI card

## Output Shape

Prefer a structure like:

1. KPI-card contract and assumptions
2. Metrics, comparison cues, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
