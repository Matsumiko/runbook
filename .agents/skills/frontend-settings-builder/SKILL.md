---
name: frontend-settings-builder
description: Build or refine frontend settings pages, preferences surfaces, account configuration views, team/admin settings panels, and multi-section configuration flows on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement account settings, profile preferences, notification settings, security settings, billing preferences, workspace settings, role-management surfaces, or destructive account actions while preserving the current component family and handling settings navigation, grouped forms, save/discard states, permissions cues, and destructive-action safety correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is in-product toasts, banners, inline alerts, or a notification center, use `frontend-notification-builder` first. If the main task is specifically avatar, attachment, or file-upload UX rather than the settings surface as a whole, use `frontend-upload-builder` first. If the main task is specifically tabbed settings navigation rather than the settings surface as a whole, use `frontend-tabs-builder` first. If the task is just one isolated non-settings form, use `frontend-form-builder` first.
---

# Frontend Settings Builder

## Quick Start

1. Confirm the task is primarily a settings, preferences, or configuration surface.
2. Audit the existing page shell, form family, tabs/sidebar patterns, and `FRONTEND-DNA.md`.
3. Read `references/settings-surface-contract.md`.
4. Read `references/navigation-and-section-grouping.md`.
5. Read `references/save-discard-and-danger-states.md`.
6. Build the smallest complete settings surface that still handles persistence and destructive states honestly.

## Core Rules

- Reuse the existing page shell, input family, and configuration patterns.
- Define the settings surface contract before composing sections.
- Group settings by user goal, not just by backend schema.
- Keep save, discard, and auto-save behavior explicit.
- Treat permissions, access constraints, and destructive actions as first-class states.
- Do not call a settings surface done if it only renders inputs but ignores save/discard, conflict, or destructive behavior.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear settings surface contract
- grouped sections with coherent navigation
- explicit save/discard or persistence behavior
- permission-aware and destructive-action states
- responsive treatment that preserves section clarity
- at least one realistic proof surface
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby settings pages, preference surfaces, admin panels, or account-management views already in the repo.
- Identify whether the request is profile settings, notification preferences, security settings, billing preferences, workspace settings, or admin configuration.
- Check whether there are existing side nav, tabs, section wrappers, inline-save patterns, or confirm-destructive patterns in use.

If a local settings pattern already exists, extend it instead of introducing a parallel configuration language.

### 2. Define the settings surface contract

Clarify:

- who owns the settings
- whether the scope is user, team, workspace, or admin
- which sections exist and how they are grouped
- save, discard, or auto-save behavior
- which settings are gated by role or plan
- destructive actions and their confirmation rules
- loading, success, error, and conflict behavior

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Build grouping before density

- Establish section grouping and navigation first.
- Keep related controls in the same section with clear headings and helper text.
- Separate routine preferences from dangerous or irreversible actions.
- Keep primary save actions obvious and secondary actions subordinate.
- Avoid turning settings pages into long unstructured walls of inputs.

### 4. Handle persistence and destructive states

- Make unsaved changes and save progress visible where relevant.
- Handle success, failure, validation, and conflict states honestly.
- Require explicit confirmation for destructive actions.
- Keep permission-limited settings understandable instead of silently disabled without explanation.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one happy-path save and one non-happy-path state where practical.
- Verify at least one narrower layout where practical.
- If the surface was only validated structurally and not against a real persistence or permission contract, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about settings, preferences, or configuration UX
- grouping, persistence, permissions, or destructive safety matter
- the main challenge is a settings surface rather than one isolated form

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is in-product toasts, banners, inline alerts, or a notification center
- the main task is specifically avatar, attachment, or file-upload UX rather than the settings surface as a whole
- the main task is specifically tabbed settings navigation rather than the settings surface as a whole
- the task is just one isolated non-settings form
- the work is purely a tiny copy or spacing tweak on an existing settings view

## Output Shape

Prefer a structure like:

1. Settings surface contract and assumptions
2. Sections, persistence behavior, and states covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
