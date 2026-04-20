# Positioning And Dismissal

Anchored menus should feel stable and intentional.

## Positioning

- Align the menu to the trigger in a way that matches the button or field geometry.
- Prefer growth direction that preserves the user's spatial model.
- Handle viewport edges with flip or shift behavior instead of clipping.

## Dismissal

- Outside click should usually dismiss.
- Escape should dismiss when keyboard interaction is supported.
- Selection should close the menu for most action menus unless multi-select behavior is explicit.
- Re-triggering the same button should close predictably.

## Focus and return

- Keep highlight or roving focus predictable when using keyboard input.
- Return focus to the trigger after dismissal unless the selected action intentionally moves focus elsewhere.
