# Responsive Grouping and No-Data States

Comparison logic must survive layout changes.

Requirements:

- preserve compared pairs or groups when stacking on narrower screens
- keep no-baseline and no-data states visually distinct
- prevent card order changes that make side-by-side comparison ambiguous
- use progressive disclosure for secondary context before shrinking primary values too far

If the layout cannot preserve comparison clarity, prefer stacked paired groups over mixed-grid compression.
