# Charts And States

Treat visualization and state coverage as product behavior, not decoration.

When a chart is present:

- include readable labels, units, and legends where needed
- ensure the color treatment matches the existing product language
- prefer the simplest chart that communicates the trend or comparison
- avoid chart-heavy layouts when stat cards or small tables communicate the answer better

Dashboard state checklist:

- full-page loading state
- per-panel loading state when data resolves independently
- empty state for no data or no matching filters
- error state for partial or failed data
- narrow-screen stacking that preserves section priority
- honest fallback when a chart library or data feed is not fully wired yet
