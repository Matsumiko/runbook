---
name: frontend-activity-feed-builder
description: Build or refine frontend activity feeds, recent-event streams, collaboration updates, and compact event-history surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement recent activity lists, collaboration feeds, audit-like update streams, workspace event panels, or unread recent-event surfaces while preserving the current component family and handling actor or action clarity, grouping, unread state, density, incremental loading, and responsive flow correctly. Prefer this skill after the frontend stack and visual direction already exist. If the task is really a milestone timeline or progress rail, use `frontend-timeline-builder`; if it is persistent alerts or inbox-style notifications, use `frontend-notification-builder`.
---

# Frontend Activity Feed Builder

## Quick Start

1. Confirm the task is primarily about a recent-activity feed or event stream.
2. Audit the existing list items, avatars, chips, metadata rows, and `FRONTEND-DNA.md`.
3. Read `references/feed-contract.md`.
4. Read `references/actor-action-object-and-grouping.md`.
5. Read `references/unread-density-and-pagination.md`.
6. Build the smallest honest activity feed that still handles grouping, unread state, and dense streams correctly.

## Core Rules

- Reuse the existing list treatment, metadata rhythm, avatars, and status markers.
- Treat the feed as a recent-event stream, not as a milestone timeline or notification stack.
- Keep actor, action, object, and time readable at a glance.
- Match grouping and density to the product's event volume.
- Preserve scannability before adding filters, reactions, or heavy card chrome.
- Do not call activity-feed work done if it only renders event rows but ignores empty, unread, or loading states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear feed contract for event type and stream scope
- feed items that explain who did what and when
- date grouping or compaction that fits the event volume
- unread, loading, and empty-stream treatment that remain understandable
- responsive behavior that preserves scan order on smaller screens
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby notification lists, audit logs, timelines, comment streams, or recent-activity panels already in the repo.
- Identify whether the request is a homepage activity feed, collaboration stream, compact sidebar feed, or record-specific recent events panel.
- Check whether the product already uses avatars, chips, inline badges, timestamps, or date grouping for event rows.

If a local feed pattern already exists, extend it instead of introducing a parallel activity-feed language.

### 2. Define the feed contract

Clarify:

- what events belong in the stream
- whether the scope is global, workspace, project, record, or user-specific
- whether items need unread markers, seen state, or load-more behavior
- whether grouping should be by date, actor, or event type
- how compact the rows should be
- what empty-stream, filtered-empty, and unavailable states look like
- responsive fallback when feed density becomes too high

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build event readability before ornament

- Make actor, action, and target object clear without requiring expansion.
- Keep secondary metadata subordinate to the main event sentence.
- Use icons or chips only when they genuinely speed recognition.
- Avoid turning each item into a heavy card if the job is stream scanning.

### 4. Handle unread, density, and incremental states

- Distinguish unread state from high-priority state.
- Group low-signal events or repeated updates when density gets noisy.
- Preserve chronology without implying milestone meaning where none exists.
- Keep load-more, infinite scroll, or incremental loading behavior obvious.
- If the surface becomes more about structured milestone progress than recent events, move to timeline ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one populated-feed state and one empty or unread-state path where practical.
- Verify at least one loading or incremental-fetch state where practical.
- If the feed was only validated structurally and not against real event data or unread logic, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about recent activity, event streams, or collaboration updates
- actor or action clarity, grouping, and density matter
- the activity feed itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a milestone timeline, progress rail, or roadmap chronology
- the task is really a notification delivery or alerting surface
- the task is really a broader dashboard, detail page, or sidebar where the feed is only one sub-part
- the work is purely a tiny spacing or copy tweak on an existing feed

## Output Shape

Prefer a structure like:

1. Feed contract and assumptions
2. Event model, grouping, and stream states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
