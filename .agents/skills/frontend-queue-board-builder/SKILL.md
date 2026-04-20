---
name: frontend-queue-board-builder
description: Build or refine frontend queue boards, triage surfaces, review queues, moderation backlogs, and operational work lists on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement support queues, approval queues, moderation boards, dispatch worklists, or ordered backlogs where prioritization, SLA cues, bulk actions, and quick triage matter while preserving the current component family and handling queue status, ownership, density, selection, escalation cues, and responsive fallback correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is really a generic table or kanban board, use `frontend-table-builder` or `frontend-kanban-builder` first. If the queue is only one section inside a broader dashboard, use `frontend-dashboard-builder` first.
---

# Frontend Queue Board Builder

## Quick Start

1. Confirm the task is primarily about triaging, reviewing, or processing queued work.
2. Audit the existing list, board, status, and action patterns plus `FRONTEND-DNA.md`.
3. Read `references/queue-surface-contract.md`.
4. Read `references/priority-sla-and-triage-actions.md`.
5. Read `references/bulk-selection-escalation-and-responsive-fallback.md`.
6. Build the smallest complete queue surface that still handles priority and triage honestly.

## Core Rules

- Reuse the existing row, card, badge, and status language.
- Define the queue contract before choosing list, board, grouped, or hybrid treatment.
- Keep priority, ownership, and next action obvious at a glance.
- Treat bulk actions and fast triage as operational tools, not decorative chrome.
- Preserve scanability before layering on filters, chips, or expanded metadata.
- Do not call queue work done if it only lists items but ignores prioritization, SLA cues, or empty states.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear queue-surface contract
- visible priority, ownership, and status semantics
- quick triage actions or bulk actions where the workflow needs them
- empty, loading, blocked, and escalation states
- responsive fallback that preserves operational clarity
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby support queues, moderation lists, review boards, intake surfaces, or triage views already in the repo.
- Identify whether the request is a support inbox, moderation queue, approval queue, dispatch intake, or back-office review surface.
- Check whether the product already uses SLA chips, assignee labels, timestamps, severity badges, or triage toolbars that the queue should inherit.

If a local queue pattern already exists, extend it instead of introducing a parallel operational language.

### 2. Define the queue contract

Clarify:

- what kind of work items appear in the queue
- how priority, severity, ownership, and due state are represented
- whether the surface is strictly ordered, grouped, lane-based, or filter-first
- whether bulk selection, assign, defer, approve, reject, or escalate actions exist
- what blocked, snoozed, escalated, or stale items look like
- what empty queue, filtered-empty, and loading states look like
- responsive fallback strategy when dense queue controls stop fitting

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build triage clarity before ornament

- Make the default scan path obvious: identity, urgency, owner, next action.
- Keep metadata subordinate to the information needed for triage.
- Use color and badges to clarify urgency, not to replace labels.
- Avoid over-decorating queue items into miniature detail pages.

### 4. Handle bulk actions, escalation, and fallback

- Keep selected state and bulk actions explicit.
- Distinguish empty queue from everything filtered away.
- Make escalated, overdue, and blocked states visibly different.
- Preserve speed of triage when collapsing to smaller screens through stacked rows, sheets, or route drills.
- If the surface is really a generic table or workflow board, move to table or kanban ownership.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one triage-action path and one escalation or blocked-state path where practical.
- Verify at least one selected or bulk-action state where practical.
- Verify at least one narrower-layout fallback where practical.

## Decision Boundary

### Use this skill when:

- the task is clearly about operational queues, review backlogs, or triage surfaces
- priority, ownership, and next actions matter
- the queue workflow itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is really a generic table or dense list without queue semantics
- the task is really a kanban workflow board organized by status lanes
- the task is really a broader dashboard where the queue is only one panel
- the work is purely a tiny spacing or copy tweak on an existing queue surface

## Output Shape

Prefer a structure like:

1. Queue contract and assumptions
2. Priority, triage, and state behavior covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
