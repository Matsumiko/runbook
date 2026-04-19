# Source Priority for Figma-to-Theme Work

Use the highest-fidelity design source available.

## Confidence Order

| Priority | Source | Confidence | Notes |
| --- | --- | --- | --- |
| 1 | Figma variables, modes, Dev Mode code snippets, or MCP context | High | Best source for exact token translation |
| 2 | Documented token exports, style guides, annotated component specs | Medium-high | Good when Dev Mode is unavailable |
| 3 | Multiple screenshots of a coherent system | Medium | Good for extracting patterns, weak for exact values |
| 4 | One-off screenshots or inspiration boards | Low | Use only for approximate token inference |

## What Figma Exposes

Figma's current help docs say:

- variables are raw values such as color, number, string, and boolean
- variables can change by mode, such as light and dark or mobile and desktop
- variables can alias other variables to implement design tokens
- Dev Mode can show variable names, collections, modes, alias chains, and code snippets

This makes Dev Mode variables the best handoff path for theme generation.

## Practical Guidance

- If variables and modes exist, prefer them over manually sampling from screenshots.
- If the design uses Code Connect or MCP, prefer connected code and variable metadata over auto-generated snippets.
- If only screenshots exist, infer a compact token system and mark it as inferred.

## Sources

- Figma variables overview: https://help.figma.com/hc/en-us/articles/14506821864087-Overview-of-variables-collections-and-modes
- Variables in Dev Mode: https://help.figma.com/hc/en-us/articles/27882809912471-Variables-in-Dev-Mode
- Figma MCP server: https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server
