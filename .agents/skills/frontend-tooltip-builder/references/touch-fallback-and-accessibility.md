# Touch Fallback And Accessibility

Hover cannot be the only way to access meaningful information.

## Touch fallback

- If the content is useful but supplemental, consider focus, tap-to-reveal, or inline help text on touch.
- If the content becomes essential on mobile, it likely should not be a tooltip.
- Avoid long-press-only solutions unless the product already depends on them.

## Accessibility expectations

- Keep the trigger discoverable and keyboard reachable.
- Ensure the tooltip content is associated with the trigger in the stack's accessibility model.
- Do not trap focus inside a tooltip.
- Keep tooltip copy concise and free of repeated label text that adds no value.

## Content discipline

- Do not hide full instructions, validation rules, or legal copy in tooltips.
- If a hint repeats across many controls, consider whether a visible helper pattern is better.
