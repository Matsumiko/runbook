---
name: frontend-notification-builder
description: Build or refine frontend notifications, alerts, banners, toasts, snackbars, inline status messages, and notification-center surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement async success or error feedback, dismissible banners, announcement bars, persistent alerts, inbox-style notification lists, or status messaging while preserving the current component family and handling urgency, placement, timing, dismissal, stacking, and action clarity correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the task is notification preferences, use `frontend-settings-builder` first. If the task is a recent activity stream, use `frontend-activity-feed-builder` first. If the work is a tweak on an existing alert, use the nearest surface skill first.
---

# Frontend Notification Builder

## Quick Start

1. Confirm the task is primarily about notification delivery, alerting, or status-feedback UI.
2. Audit the existing page shell, semantic-color rules, icon language, and `FRONTEND-DNA.md`.
3. Read `references/notification-contract.md`.
4. Read `references/channel-placement-and-urgency.md`.
5. Read `references/lifecycle-dismissal-and-accessibility.md`.
6. Build the smallest complete notification surface that still communicates urgency, action, and dismissal behavior honestly.

## Core Rules

- Reuse the existing semantic colors, icon family, typography, and surface treatment.
- Define the notification contract before choosing toast, banner, inline alert, or inbox treatment.
- Match the channel to the urgency, scope, and persistence of the message.
- Keep notification copy brief, specific, and actionable.
- Treat toast, banner, inline status, and notification-center surfaces as different jobs, not skin variants of the same block.
- Do not call notification work done if it only renders the happy path and ignores dismissal, stacking, or accessibility behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear notification contract
- the right delivery channel for the actual urgency and scope
- message hierarchy with disciplined primary and secondary actions
- explicit handling for dismissal, persistence, and duplicate events where relevant
- accessible status treatment that does not rely on color alone
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby toasts, inline alerts, banners, system notices, or notification-center surfaces already in the repo.
- Identify whether the request is local feedback, cross-page status messaging, blocking warning, announcement bar, or persistent inbox-style notification work.
- Check whether there are existing provider patterns, semantic icon rules, or alert spacing conventions in use.

If a local notification pattern already exists, extend it instead of introducing a parallel feedback language.

### 2. Define the notification contract

Clarify:

- what triggered the notification
- who needs to see it
- whether the message is local, page-level, app-level, or persistent across sessions
- severity and urgency
- whether it should auto-dismiss, require manual dismissal, or stay in an inbox/history surface
- what the primary next action is
- whether duplicate or repeated events need deduplication or grouping
- narrow-layout behavior if the notification appears inside a compact surface

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose channel before ornament

- Use inline status for local form or component feedback.
- Use toast or snackbar for short-lived, non-blocking updates.
- Use banner or prominent alert for route-level, system-wide, or persistent warnings.
- Use notification-center or inbox treatment for persistent multi-event messaging and read-state behavior.
- Keep the visual weight on meaning and next action, not decorative icons or motion.

### 4. Handle lifecycle and interaction states

- Define auto-dismiss timing only when the user can safely miss the message.
- Keep dismiss, retry, undo, view-details, or resolve actions obvious where relevant.
- Avoid stacking multiple competing notifications when one grouped summary is clearer.
- Preserve explanation and action order on narrower layouts.
- Ensure assistive-technology cues, focus behavior, and keyboard handling match the channel used.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one success or informational notification and one warning or error state where practical.
- Verify dismissal behavior or persistence behavior where relevant.
- If the work was only validated structurally and not against real runtime events, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about in-product notifications, alerts, or status-feedback UX
- urgency, placement, dismissal, or persistence decisions matter
- the notification surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the task is mainly notification preferences or channel settings
- the task is mainly a recent activity feed or collaboration stream rather than notification delivery
- the task is mainly an empty or no-results surface without notification delivery behavior
- the work is purely a tiny copy or spacing tweak on an existing alert

## Output Shape

Prefer a structure like:

1. Notification contract and assumptions
2. Channel choice, urgency treatment, and lifecycle covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
