---
name: frontend-figma-to-theme
description: Translate Figma design context into frontend theme tokens, stack-specific theme configuration, and durable frontend rules. Use when Codex is given a Figma file, Dev Mode details, variable exports, style guides, screenshots, or design references and needs to turn them into implementable theme tokens or `FRONTEND-DNA.md` guidance. Prefer this skill after the frontend stack is already chosen. If the frontend foundation is not chosen yet for a greenfield project, use `frontend-foundation-builder` first.
---

# Frontend Figma to Theme

## Quick Start

1. Confirm the request is about translating design context into theme tokens, visual rules, or stack theme config.
2. Determine the source quality:
   - Best: Figma Dev Mode variables, modes, code snippets, or MCP context.
   - Good: design token exports, style guides, or documented component rules.
   - Fallback: screenshots, mockups, or visual inspiration only.
3. If the stack is not chosen yet for a greenfield project, use `frontend-foundation-builder` first.
4. Read `references/source-priority.md`.
5. Read `references/token-mapping.md`.
6. Read `references/output-targets.md` for the chosen stack.
7. Build the smallest useful token/theme layer and record assumptions explicitly.

## Core Rules

- Prefer exact design tokens over visual guessing.
- If only screenshots are available, state clearly that colors, spacing, and typography are inferred.
- Preserve the existing stack if the repository already uses one.
- Do not rewrite a mature design system just because a Figma file exists.
- Translate design intent, not pixel-perfect noise.
- Capture durable rules in `FRONTEND-DNA.md` when the file exists.

## What This Skill Should Produce

When this skill is used well, the result usually includes:

- a source-quality assessment
- extracted or inferred color, typography, spacing, radius, border, shadow, and state tokens
- mode or theme mapping such as light and dark
- stack-specific theme output for Chakra UI, Tamagui, or the existing stack
- an updated `FRONTEND-DNA.md` section when the repo uses one
- one representative themed component, layout, or page proving the tokens are live
- a short list of assumptions and verification steps

## Workflow

### 1. Audit the design source

- Prefer Figma variables, modes, and code snippets over screenshots.
- If the user provides screenshots only, extract a compact visual system instead of inventing an entire design language.
- Identify whether the source includes explicit component variants, tokens, or just visual examples.

### 2. Classify confidence

- High confidence: variables, modes, Dev Mode snippets, Code Connect, or documented token exports.
- Medium confidence: annotated style guide, design spec, or reusable component screenshots.
- Low confidence: isolated screenshots or loose inspiration boards.

If confidence is medium or low, say so in the output and avoid overclaiming accuracy.

### 3. Extract the design system

Build a token set covering:

- palette and semantic colors
- typography scale and font usage
- spacing rhythm
- border radius
- border widths and separator treatment
- shadows, elevation, and blur usage
- component states such as hover, focus, active, disabled, and loading
- motion tone if it is explicit enough to preserve

Treat Figma variable modes as theme contexts when appropriate.

### 4. Translate into implementation targets

- For Chakra UI, generate or update theme tokens and semantic tokens.
- For Tamagui, generate or update tokens, themes, and config structure.
- For an existing stack, map the design system into the project’s current token model instead of introducing a new library.

### 5. Write durable guidance

- Update `FRONTEND-DNA.md` when present.
- Document what is exact versus inferred.
- Keep the written rules compact and reusable.

### 6. Verify honestly

- Verify the theme config compiles or at least integrates cleanly into the chosen stack.
- Render at least one example surface if the task includes code changes.
- If the source design was incomplete, flag the missing areas instead of filling them with confident fiction.

## Interpreting Figma Inputs

### Dev Mode and variables

- Use variable collections and modes as the source of truth when available.
- Follow alias chains to the raw values before naming implementation tokens.
- Reuse the provided code syntax if it aligns with the project conventions.

### Styles

- Treat styles as composite visual recipes, especially when gradients, media, or multi-value effects are involved.
- Use styles to inform component recipes, shadows, or special visual treatments that are not represented cleanly as raw variables.

### Screenshots and mockups

- Infer a minimal token system.
- Avoid pretending screenshots provide exact spacing scales or font weights unless they are obvious.
- Mark approximations as approximations.

## Output Shape

Prefer a structure like:

1. Source quality and confidence
2. Extracted or inferred token system
3. Files added or changed
4. Verification performed
5. Assumptions and residual gaps
