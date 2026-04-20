---
name: frontend-detail-page-builder
description: Build or refine frontend detail pages, entity views, product detail routes, admin drill-down screens, and other route-level detail surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement summary headers, key metadata, primary and secondary actions, status treatment, related sections, timelines, tabs, or drill-down states while preserving the current component family and handling hierarchy, scannability, and responsive composition correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is a generic multi-section page rather than a drill-down detail surface, use `frontend-page-builder`. If the task is really breadcrumb, timeline, org-chart, master-detail, audit-log, or another specialized surface, use the matching specialized skill instead.
---

# Frontend Detail Page Builder

## Quick Start

1. Confirm the task is primarily a detail surface, drill-down view, or record-specific page.
2. Audit the existing page shell, section wrappers, metadata patterns, and `FRONTEND-DNA.md`.
3. Read `references/detail-surface-contract.md`.
4. Read `references/summary-and-action-hierarchy.md`.
5. Read `references/related-sections-and-empty-states.md`.
6. Build the smallest complete detail page that still handles summary, related sections, and non-happy-path states honestly.

## Core Rules

- Reuse the existing page shell, card family, metadata treatment, and action language.
- Define the detail surface contract before composing sections.
- Make the first viewport answer what this record is, what state it is in, and what the user can do next.
- Keep primary actions close to the summary they affect.
- Treat related sections, history, and supporting data as subordinate to the main record summary.
- Do not call a detail page done if it only renders fields but ignores loading, missing, or unavailable states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear detail surface contract
- a summary header with strong hierarchy and obvious primary action
- related sections that support the main record without competing with it
- explicit loading, empty, error, or unavailable states
- responsive treatment that preserves scan order
- at least one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby detail routes, record pages, or admin drill-down surfaces already in the repo.
- Identify whether the request is a product detail page, user detail page, order/invoice detail, case/ticket detail, project detail, or another entity-specific drill-down.
- Check whether there are existing summary headers, status chips, action bars, breadcrumb patterns, metadata rows, tabs, timelines, or side panels in use.

If a local detail pattern already exists, extend it instead of introducing a parallel detail language.

### 2. Define the detail surface contract

Clarify:

- which entity or record this page represents
- what must be understood immediately in the first viewport
- what the primary action or primary read should be
- which metadata is essential versus secondary
- which related sections matter: activity, attachments, members, notes, purchases, logs, or related items
- whether tabs, side panels, or inline sections are needed
- loading, empty, error, missing-record, and permission behavior

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build summary and action hierarchy deliberately

- Establish the route header and summary block first.
- Keep title, status, identity clues, and primary action visible without forcing a deep scroll.
- Use metadata rows, badges, or stat blocks to support understanding, not to create noise.
- Keep destructive or secondary actions visibly subordinate.
- Avoid turning the top of the page into a wall of equally weighted data points.

### 4. Handle related sections and non-happy paths

- Make related sections clearly subordinate to the summary surface.
- Show honest zero-data treatment when related items or histories are empty.
- Handle missing record, access-limited, or unavailable states explicitly.
- Preserve orientation when the page uses tabs, anchor links, or side panels.
- Ensure mobile stacking still keeps the identity and primary action obvious.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one summary state and one non-happy-path state where practical.
- Verify at least one narrower layout where practical.
- If the page was only validated structurally and not against a real route or data contract, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about a detail page or drill-down route
- summary, metadata, and action hierarchy matter
- related sections or history must support one main record cleanly

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is a generic multi-section page rather than a record-specific detail surface
- the task is specifically a master-detail or inbox-style list-detail workspace
- the task is specifically breadcrumb, ancestry-path, or route-trail work
- the task is specifically a timeline, milestone rail, or chronology feed surface
- the task is specifically an audit-log or change-history surface
- the task is specifically an org chart, reporting hierarchy, or department-structure surface
- the task is clearly a dashboard or analytics overview
- the task is specifically an auth entry or access-state flow
- the task is specifically a public-facing marketing or conversion page
- the task is specifically a checkout, billing, or purchase flow
- the task is specifically a settings or preferences surface
- the task is specifically a focused modal, dialog, drawer, or overlay flow
- the task is specifically a dedicated tabbed subview or tab-surface implementation
- the task is mostly one component, one form, or one table
- the work is purely a tiny copy or spacing tweak on an existing detail page

## Output Shape

Prefer a structure like:

1. Detail surface contract and assumptions
2. Summary hierarchy, sections, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
