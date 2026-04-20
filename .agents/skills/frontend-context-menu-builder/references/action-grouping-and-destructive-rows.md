# Action Grouping And Destructive Rows

Context menus are easiest to misuse when action hierarchy is unclear.

## Grouping

- Put common actions first.
- Separate destructive actions from routine actions.
- Keep disabled items readable enough to explain availability.

## Object scope

- Context menus should not include unrelated global actions.
- If an action depends on current selection state, make that dependency obvious.

## Destructive actions

- Use the product's established danger styling.
- If the action is especially risky, the context menu can launch a confirm dialog rather than complete directly.
