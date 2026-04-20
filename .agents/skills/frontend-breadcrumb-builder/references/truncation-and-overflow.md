# Truncation and Overflow

Breadcrumbs fail when real labels are longer than the design mock.

Check:

- long workspace, project, or record names do not break the header
- truncation preserves enough meaning to distinguish similar ancestors
- collapsed ancestors still expose a usable path when depth grows
- separators stay subordinate to labels
- overflow behavior does not hide the current location

Prefer deliberate collapse or concise truncation over uncontrolled wrapping.
