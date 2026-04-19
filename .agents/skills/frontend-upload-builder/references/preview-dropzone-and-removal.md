# Preview Dropzone And Removal

Choose review patterns deliberately:

- simple picker: use for one-file flows with low review complexity
- dropzone: use only when drag-and-drop is a real UX improvement and not decorative
- preview cards or attachment rows: use when users need confidence before committing
- avatar or media upload: keep crop, replace, and remove actions close to the preview
- multi-file queues: keep status, filename, size, and actions easy to scan

Removal rules:

- if removal is reversible, make undo or re-add behavior easy
- if removal affects saved state, make that consequence clear
- do not hide remove actions behind unrelated menus when the file is still provisional
