# Mobile Sheet And Label Integration

Field selects often need a different mobile treatment than desktop.

## Mobile fallback

- Anchored menus can become cramped on smaller screens.
- Use sheet or full-width fallback when option density or label length makes anchored menus unreliable.
- Preserve the field label and current value even if the selection surface opens as a sheet.

## Label integration

- Keep label, helper text, and error text visually tied to the closed field.
- If an option list includes icons or metadata, ensure the closed field still reads clearly without reopening.

## Focus and dismissal

- Opening the select should not break tab order or form orientation.
- Closing should return the user to the field context predictably.
