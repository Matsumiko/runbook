# Token Mapping Guide

Translate design information into implementation tokens deliberately.

## Common Mapping

| Figma input | Translate to | Notes |
| --- | --- | --- |
| Color variables | palette tokens and semantic color tokens | Keep raw palette and semantic usage separate when possible |
| Number variables for padding, gap, radius, stroke | spacing, radius, border-width tokens | Reuse the existing naming rhythm if the repo already has one |
| String variables for font family or weight names | typography tokens | Normalize to the stack's font configuration model |
| Modes | theme variants such as light and dark | Preserve mode names when they map cleanly |
| Alias chains | semantic token hierarchy | Follow aliases back to raw values before deciding naming |
| Styles | composite recipes or component variants | Useful for shadows, gradients, and multi-value effects |

## Important Figma-Specific Rules

- Figma variables can be used for theming and can alias other variables, which makes them a strong source for design-token extraction.
- Figma Dev Mode can show variable code syntax and alias chains, which helps preserve intended naming.
- Styles remain important for composite values. Figma's docs distinguish styles from variables because styles can store composite properties like gradients and other multi-value definitions.

## Translation Heuristics

- Preserve semantic intent before preserving exact names.
- Keep raw tokens and semantic tokens separate when the source makes that possible.
- If the source design is inconsistent, normalize it into the smallest coherent system rather than copying every inconsistency.
- Do not invent a huge token taxonomy from one mockup. Start with what the design clearly supports.

## States to Capture

Where visible or documented, capture:

- default
- hover
- focus
- active or pressed
- disabled
- loading
- selected
- error, warning, success, and info

## Sources

- Figma variables overview: https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes
- Use code snippets in Dev Mode: https://help.figma.com/hc/en-us/articles/15023202277399-Use-code-snippets-in-Dev-Mode
- Create and manage variables: https://help.figma.com/hc/en-us/articles/15145852043927-Create-and-manage-variables-and-collections
- The difference between variables and styles: https://help.figma.com/hc/en-us/articles/15871097384471-The-difference-between-variables-and-styles
