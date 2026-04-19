# Output Targets

Use this reference after extracting the token system.

## Chakra UI

For Chakra UI, prefer outputs such as:

- theme token definitions
- semantic tokens for surface, text, border, and feedback colors
- typography scale and font families
- component recipes or variants for the most visible primitives
- one provider-wrapped demo surface

Keep the first pass aligned with Chakra's web-first setup unless the user asks for something broader.

## Tamagui

For Tamagui, prefer outputs such as:

- token definitions for color, size, space, radius, and z-index where needed
- theme objects for light, dark, or other modes
- font configuration and size ramps
- a `TamaguiProvider` example surface proving the theme is active

Keep the first pass runtime-safe. Do not add compiler complexity unless the project already uses it or the user asked for it.

## Existing Stack

If the repo already uses another design system:

- map tokens into the existing config shape
- update `FRONTEND-DNA.md` instead of introducing a second design language
- preserve local naming and structure

## Minimum Useful Output

At minimum, a solid result should leave behind:

- theme tokens
- mode mapping if present
- one proof-of-life screen or component
- durable written design rules

## Related Skills

- Use `frontend-foundation-builder` first if the stack is not chosen yet.
