# Panel State And Responsive Behavior

Panel behavior must be intentional:

- decide whether each tab panel preserves scroll, form state, and loaded data
- keep loading, empty, and error states inside the active panel understandable
- when tabs overflow, choose one clear fallback: wrap, horizontal scroll, collapse, or alternate mobile selector
- preserve keyboard accessibility and visible focus in the tab bar
- keep active-state indication visible without relying on color alone

Do not leave crowded tab sets to "figure themselves out" on mobile.
