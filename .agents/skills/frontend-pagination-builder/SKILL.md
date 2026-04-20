---
name: frontend-pagination-builder
description: Build or refine frontend pagination controls, paged result navigation, and cursor-based list navigation on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement previous or next controls, numbered page bars, page-size selectors, result counts, cursor pagers, or load-more style list progression while preserving the current component family and handling current-range clarity, disabled states, URL/state sync, compact layouts, and data-loading transitions correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is a broader table, search, or route surface and pagination is only one sub-part, use the matching builder first unless the pagination itself is the main job. If the work is only a tiny tweak on an existing pager, use the nearest surface skill first.
---

# Frontend Pagination Builder

## Quick Start

1. Confirm the task is primarily about pagination controls, result paging, or list progression UX.
2. Audit the existing table or list family, result summaries, button sizing, and `FRONTEND-DNA.md`.
3. Read `references/pagination-contract.md`.
4. Read `references/result-summary-and-page-size.md`.
5. Read `references/cursor-load-more-and-state-sync.md`.
6. Build the smallest complete pagination surface that still handles current range, disabled states, and state sync honestly.

## Core Rules

- Reuse the existing button, chip, text-link, toolbar, and muted-state language.
- Define the pagination contract before choosing numbered pages, cursor controls, or load-more treatment.
- Match the paging pattern to the data model and user scan behavior.
- Keep range, count, and navigation feedback clearer than decorative chrome.
- Treat controls, result summary, and loading transitions as one feature.
- Do not call pagination work done if it only renders arrows and ignores disabled states, sync behavior, or compact layouts.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear pagination contract
- the right pager pattern for the surface
- explicit current, previous, next, disabled, and loading behavior
- result summary or count treatment where relevant
- responsive fallback for cramped controls
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby tables, search results, list footers, or toolbar controls already in the repo.
- Identify whether the request is numbered pagination, previous or next only, cursor-based paging, infinite-like load more, or compact mobile paging.
- Check whether there are existing result-count summaries, page-size selectors, URL sync rules, or footer layouts in use.

If a local pagination pattern already exists, extend it instead of introducing a parallel paging language.

### 2. Define the pagination contract

Clarify:

- which data model drives the pagination
- whether paging is page-number, cursor, offset, or load-more based
- whether total counts are known and should be shown
- what current-range summary is needed
- whether page-size selection or jump-to-page belongs in scope
- how URL, router, query state, or local component state should stay in sync
- loading, disabled, empty, and error behavior during transitions
- smaller-layout behavior when controls become cramped

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose paging pattern before ornament

- Use numbered pages when users benefit from direct jumps and known totals.
- Use previous or next or cursor controls when exact page counts are not meaningful.
- Use load more only when continued scanning is more important than exact page position.
- Keep range and count language honest; do not imply precision the backend does not provide.
- Keep page-size selectors and extra controls subordinate to primary navigation.

### 4. Handle state sync, loading, and compact layouts

- Make current-page, previous, next, disabled, and loading behavior explicit.
- Preserve selection and focus state during page changes where relevant.
- Keep URL or query synchronization stable when pagination affects the route.
- Handle unknown totals, last-page boundaries, and empty filtered pages deliberately.
- Ensure cramped layouts still preserve next-step clarity, whether that means simplified controls or condensed summaries.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one page-change path and one boundary case such as first or last page where practical.
- Verify URL or local-state sync and narrower-layout treatment where practical.
- If the work was only validated structurally and not against real data paging behavior, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about pagination controls, page navigation, or list progression UX
- state sync, boundary handling, or result-range clarity matter
- the pagination surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader table, search, or route surface and pagination is only one sub-part
- the task is mostly a generic toolbar or button group
- the work is purely a tiny copy or spacing tweak on an existing pager

## Output Shape

Prefer a structure like:

1. Pagination contract and assumptions
2. Pattern choice, state sync, and responsive treatment covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
