---
name: frontend-audit-log-builder
description: Build or refine frontend audit logs, compliance event logs, and admin action trails on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement security history tables, entity change histories, access logs, or trace surfaces where actor, action, target, timestamps, and field-level changes must stay trustworthy while preserving the current component family and handling density, filtering, diff disclosure, immutable tone, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is really a timeline or recent activity stream, use `frontend-timeline-builder` or `frontend-activity-feed-builder` first. If the log is one section of a broader detail page, use the broader surface skill first unless the audit log itself is the main job.
---

# Frontend Audit Log Builder

## Quick Start

1. Confirm the task is primarily about traceable change history rather than generic recent activity.
2. Audit the existing table, timeline, metadata, and status patterns plus `FRONTEND-DNA.md`.
3. Read `references/audit-log-contract.md`.
4. Read `references/actor-action-diff-and-integrity.md`.
5. Read `references/filters-density-and-detail-reveal.md`.
6. Build the smallest complete audit-log surface that still handles traceability and density honestly.

## Core Rules

- Reuse the existing table, metadata row, chip, and disclosure language.
- Define the audit-log contract before styling rows, diffs, or expandable details.
- Keep actor, action, target, and timestamp explicit.
- Treat audit presentation as trustworthy history, not as a social activity feed.
- Preserve legibility under high density before adding decorative grouping.
- Do not call audit-log work done if it lists events without making accountability or change meaning clear.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear audit-log contract
- visible actor, action, target, and time semantics
- expandable change details or diff reveal when the task requires it
- filtering, density, and immutable-history presentation that fit the use case
- responsive fallback that preserves traceability
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby activity feeds, admin tables, record histories, timelines, or change logs already in the repo.
- Identify whether the request is admin audit history, entity change history, access log, security log, or compliance trace.
- Check whether the product already uses metadata rows, diff chips, expandable rows, or side-panel reveals that the log should inherit.

If a local audit pattern already exists, extend it instead of introducing a parallel traceability language.

### 2. Define the audit-log contract

Clarify:

- what events belong in the log
- whether the scope is global, entity-specific, org-wide, or user-specific
- which attributes are mandatory per entry: actor, action, target, timestamp, source, IP, field changes, or reason
- whether change diffs are inline, expandable, or route-level
- what filtering and search affordances matter
- what empty log, redacted log, partial retention, and loading states look like
- responsive fallback strategy when dense log tables stop fitting

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build trust and readability before ornament

- Make accountability fields readable in one scan.
- Keep immutable history tone calm and serious.
- Use badges or icons to clarify event type, not to gamify the log.
- Avoid mixing audit entries with conversational feed language.

### 4. Handle filters, diffs, and dense states

- Keep filter state explicit so users know what history they are seeing.
- Distinguish redacted, unavailable, and missing-change-detail states.
- Use expandable detail, side panels, or nested rows when field-level changes matter.
- Preserve traceability when collapsing to mobile through stacked rows, reveal drawers, or route-level detail views.
- If the surface becomes more like a general activity stream or milestone sequence, move to feed or timeline ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one populated-log state and one empty or filtered-empty path where practical.
- Verify at least one diff-reveal or detail-expansion path where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about auditability, trace history, or compliance-style event logs
- actor, action, target, and timestamp integrity matter
- the audit-log surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a generic recent-activity feed or social-style event stream
- the task is really a milestone timeline or progress sequence
- the task is really a broader detail page where the audit log is only one supporting section
- the work is purely a tiny spacing or copy tweak on an existing audit-log surface

## Output Shape

Prefer a structure like:

1. Audit-log contract and assumptions
2. Traceability, filters, and state behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
