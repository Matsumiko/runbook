---
name: frontend-stepper-builder
description: Build or refine frontend steppers, progress indicators, wizard rails, and flow-sequence surfaces on top of an existing stack, theme, and product UI DNA. Use when Codex needs to implement numbered steps, current-step indicators, completed-step markers, gated step navigation, or vertical or horizontal progress trails while preserving the current component family and handling sequence meaning, step-state clarity, validation gating, mobile fallback, and completion cues correctly. Prefer this skill after the frontend stack and visual direction already exist. If the stack is not chosen yet, use `frontend-foundation-builder` first. If the theme still needs to be derived from Figma or screenshots, use `frontend-figma-to-theme` first. If the main task is a broader onboarding, checkout, or multi-step form flow and the stepper is only one sub-part, use the matching builder first unless the stepper itself is the main job. If the work is only a tiny tweak on an existing stepper, use the nearest surface skill first.
---

# Frontend Stepper Builder

## Quick Start

1. Confirm the task is primarily about step indicators, progress rails, or wizard-sequence UI.
2. Audit the existing header treatments, progress language, icon use, and `FRONTEND-DNA.md`.
3. Read `references/stepper-contract.md`.
4. Read `references/progression-gating-and-validation.md`.
5. Read `references/mobile-layout-and-completion-states.md`.
6. Build the smallest complete stepper surface that still handles progression meaning, gating, and smaller-layout behavior honestly.

## Core Rules

- Reuse the existing header, badge, icon, divider, and semantic-state language.
- Define the stepper contract before choosing horizontal, vertical, compact, or checklist-like treatment.
- Match the stepper to real progression logic, not decorative wizard tropes.
- Keep current, completed, blocked, and upcoming steps visually distinct without becoming noisy.
- Treat step meaning, gating, and completion feedback as one feature.
- Do not call stepper work done if it only renders circles and lines while ignoring gating, status meaning, or mobile fallback.

## What This Skill Should Produce

When used well, the output usually includes:

- a clear stepper contract
- progression labels that reflect real flow stages
- explicit previous, current, completed, blocked, and upcoming behavior
- gating or validation cues where relevant
- responsive fallback for narrow layouts
- verification notes that mention actual checks performed

## Workflow

### 1. Audit before building

- Inspect nearby onboarding flows, checkout headers, multi-step forms, or progress indicators already in the repo.
- Identify whether the request is a horizontal stepper, vertical step rail, compact mobile progress indicator, or a checklist-like progression cue.
- Check whether there are existing numbered markers, completion icons, inline status chips, or wizard shells in use.

If a local stepper pattern already exists, extend it instead of introducing a parallel progression language.

### 2. Define the stepper contract

Clarify:

- what stages the stepper represents
- whether users can move freely or only forward
- which steps are completed, editable, blocked, or optional
- whether validation or async completion gates progression
- whether clicking a step navigates, reveals content, or only indicates progress
- how the current step is announced in the shell or page heading
- smaller-layout behavior when all steps no longer fit comfortably

If the request is underspecified, infer the smallest sensible contract and flag the assumption.

### 3. Choose progression treatment before ornament

- Use horizontal steppers when stage order is short and fits within the page shell.
- Use vertical step rails when labels are longer or the flow benefits from richer step descriptions.
- Use compact progress indicators on narrow layouts when full labels become cramped.
- Keep optional or skipped steps honest instead of visually identical to completed ones.
- Keep connectors, icons, and motion subordinate to progression clarity.

### 4. Handle status meaning, gating, and completion

- Make current, completed, blocked, optional, skipped, and error states explicit.
- Preserve orientation when validation or async work delays progression.
- Keep clickability rules clear; users should know whether a previous step is revisitable.
- Handle completion messaging so the last stage feels distinct from in-progress steps.
- Ensure mobile fallback still communicates where the user is and what comes next.

### 5. Verify honestly

- Run the checks the repo already supports.
- Verify at least one stage transition and one blocked, optional, or completion case where practical.
- Verify smaller-layout treatment where practical.
- If the work was only validated structurally and not against real step logic, validation gating, or routing, state that clearly.

## Decision Boundary

### Use this skill when:

- the task is clearly about steppers, progress trails, or wizard-sequence indicators
- status meaning, gating, or stage navigation matter
- the stepper surface itself is the main UX job

### Do not use this skill when:

- the main task is stack selection
- the theme still needs to be derived from design references
- the main task is a broader onboarding, checkout, or multi-step form flow and the stepper is only one sub-part
- the task is mostly a generic heading or navigation component
- the work is purely a tiny copy or spacing tweak on an existing stepper

## Output Shape

Prefer a structure like:

1. Stepper contract and assumptions
2. Progression model, gating, and responsive treatment covered
3. Files added or changed
4. Verification performed
5. Remaining gaps or follow-up work
