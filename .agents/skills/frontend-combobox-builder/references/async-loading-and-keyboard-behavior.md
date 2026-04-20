# Async Loading And Keyboard Behavior

Combobox quality often depends on non-happy-path behavior.

## Async behavior

- Keep loading state visible without replacing the user's input.
- Avoid letting stale responses overwrite newer intent.
- Preserve current selection even while option results refresh.
- Show partial or delayed states honestly when remote results are slow.

## Keyboard behavior

- Arrow keys should move highlight predictably.
- Enter should commit the highlighted option, not surprise-submit a surrounding form.
- Escape should dismiss the option list or clear transient highlight according to local patterns.
- Backspace behavior in multi-select fields should be intentional when the query is empty.

## Focus return

- Closing the option list should not strand focus.
- Selecting an option should leave focus exactly where the field pattern expects.
