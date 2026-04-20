---
name: frontend-inbox-builder
description: Build or refine frontend inboxes, mailbox-style worklists, message-processing surfaces, and triage inbox views on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement unread sections, pinned threads, support inboxes, notification inboxes, or personal triage surfaces where preview snippets, grouping, read state, and fast next actions must work together while preserving the current component family and handling selection, sectioning, preview density, keyboard flow, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is mainly a generic master-detail shell, an SLA-driven operational queue, or a notification-only center, use `frontend-master-detail-builder`, `frontend-queue-board-builder`, or `frontend-notification-builder` first.
---

# Frontend Inbox Builder

## Quick Start

1. Confirm the task is primarily about inbox processing rather than a generic list or notification feed.
2. Audit the existing list rows, read or unread states, preview patterns, and `FRONTEND-DNA.md`.
3. Read `references/inbox-surface-contract.md`.
4. Read `references/read-state-grouping-and-triage.md`.
5. Read `references/preview-detail-and-mobile-fallback.md`.
6. Build the smallest complete inbox surface that still handles triage, grouping, and read state honestly.

## Core Rules

- Reuse the existing row, badge, timestamp, avatar, and selected-state language.
- Define the inbox contract before choosing compact rows, conversation previews, or pane depth.
- Keep unread state, section grouping, and next action explicit.
- Treat preview text as scanning support, not as a replacement for detail context.
- Preserve speed of triage before layering on decorative chips or secondary metadata.
- Do not call inbox work done if it only lists messages but ignores read state, grouping, or recovery states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear inbox-surface contract
- visible unread, pinned, muted, archived, or sectioned states where needed
- scan-friendly preview rows with honest timestamps and sender or source context
- quick triage actions such as mark read, archive, assign, snooze, or open
- empty, filtered-empty, no-selection, and loading states
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby notification lists, support inboxes, mailboxes, review queues, or list-detail surfaces already in the repo.
- Identify whether the request is a personal inbox, team inbox, support conversation list, notification inbox, or review inbox.
- Check whether the product already uses unread dots, preview snippets, pinned rows, swipe actions, assignee chips, or grouped date sections that the inbox should inherit.

If a local inbox pattern already exists, extend it instead of introducing a parallel triage language.

### 2. Define the inbox contract

Clarify:

- what items appear in the inbox
- whether the inbox is personal, team-based, or shared
- which sections or tabs matter: unread, all, pinned, snoozed, assigned, archived, or similar
- whether selection opens inline detail, a side panel, or a full route
- which quick actions exist
- what empty inbox, filtered-empty, no-selection, and loading states look like
- mobile fallback strategy when row density or side detail stops fitting

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build scan clarity before chrome

- Make the scan path obvious: who or what, why it matters, when it changed, what is unread.
- Keep preview density appropriate to the amount of triage the user must do quickly.
- Use badges and sections to clarify state, not to replace labels.
- Avoid turning every inbox item into a mini detail page.

### 4. Handle read state, triage, and fallback

- Distinguish unread, read, muted, archived, and unavailable items clearly when those states exist.
- Keep selection state and opened detail synchronized.
- Preserve orientation when filters, tabs, or grouped sections change the visible list.
- Switch to drill-down routes, sheets, or stacked views when small screens cannot support persistent list-plus-detail context.
- If the surface is really an SLA-driven work queue or a generic master-detail shell, move ownership to queue or master-detail.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one unread-to-read or triage-action path where practical.
- Verify at least one empty or filtered-empty path where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about inbox processing, mailbox-like triage, or grouped notification work
- unread state, preview snippets, and fast next actions matter
- the inbox workflow itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a generic master-detail shell without inbox semantics
- the task is really an SLA-driven or ownership-heavy operational queue
- the task is really a notification-only center or simple activity feed
- the work is purely a tiny spacing or copy tweak on an existing inbox surface

## Output Shape

Prefer a structure like:

1. Inbox contract and assumptions
2. Read state, grouping, and triage behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
