---
name: frontend-metric-comparison-builder
description: Build or refine frontend metric-comparison surfaces, before-versus-after panels, benchmark summaries, and variance views on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement current-versus-previous, actual-versus-target, cohort comparison, or baseline-versus-current analytics while preserving the current component family and handling baselines, delta meaning, labels, no-data states, and responsive grouping correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is a broader dashboard, single KPI tile, or chart, use `frontend-dashboard-builder`, `frontend-kpi-card-builder`, or `frontend-chart-builder` first.
---

# Frontend Metric Comparison Builder

## Quick Start

1. Confirm the task is primarily about comparing metrics rather than showing one metric or one chart in isolation.
2. Audit the existing card family, numeric formatting, semantic colors, and `FRONTEND-DNA.md`.
3. Read `references/comparison-surface-contract.md`.
4. Read `references/baselines-variance-and-context.md`.
5. Read `references/responsive-grouping-and-no-data.md`.
6. Build the smallest complete comparison surface that still makes baselines and variance honest.

## Core Rules

- Reuse the existing metric-card, table, badge, and chart-adjacent language.
- Define the comparison contract before choosing cards, rows, columns, or mixed panels.
- Keep each compared metric anchored to an explicit baseline.
- Treat variance meaning as domain-specific, not universally good or bad.
- Preserve comparability before adding decorative trend affordances.
- Do not call comparison work done if it shows differences without explaining what is being compared.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear comparison-surface contract
- explicit metric labels, scopes, and baselines
- disciplined treatment of deltas, variance, and threshold cues
- no-data, unavailable-baseline, and partial-comparison states
- responsive grouping that preserves comparison logic
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby KPI strips, dashboard panels, benchmark cards, or analytics sections already in the repo.
- Identify whether the request is period-over-period comparison, target-vs-actual, segment comparison, benchmark comparison, or plan-vs-reality review.
- Check whether there are existing metric cards, summary tables, status badges, or sparkline patterns that the comparison surface should inherit.

If a local comparison pattern already exists, extend it instead of introducing a parallel language.

### 2. Define the comparison contract

Clarify:

- which metrics are being compared
- what the baseline is for each metric
- whether comparison is between time periods, cohorts, entities, plans, or thresholds
- whether variance is absolute, percentage, indexed, or mixed
- whether supporting microcharts, annotations, or drill-down actions belong in scope
- what unavailable baseline, zero-baseline, and missing-series states look like
- responsive fallback strategy when side-by-side layouts become cramped

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build comparison clarity before ornament

- Make the current metric, the baseline, and the variance readable in one pass.
- Keep labels and units consistent so users do not compare mismatched values accidentally.
- Use arrows, colors, and badges only when they reinforce meaning already present in text.
- Avoid collapsing multiple comparison models into one overloaded tile.

### 4. Handle state and responsive grouping

- Distinguish no baseline from zero change.
- Keep unavailable or stale data visually different from successful comparisons.
- Preserve pairings or grouped metric relationships when the layout stacks on smaller screens.
- If the surface becomes a dashboard or chart system rather than a comparison-focused UI, hand ownership back to the broader skill.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one valid comparison path and one unavailable or partial-baseline path where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about comparing metrics, baselines, or performance deltas
- variance meaning and label clarity matter
- the comparison surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really one KPI tile or stat strip without meaningful comparison logic
- the task is really a chart or multi-series visualization where the graph itself is primary
- the task is really a broader dashboard where the comparison panel is only one section
- the work is purely a tiny spacing or copy tweak on an existing comparison surface

## Output Shape

Prefer a structure like:

1. Comparison contract and assumptions
2. Baselines, variance logic, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
