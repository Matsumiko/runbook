# Routing Context and Mobile Fallback

Breadcrumbs often depend on real routing or entity context.

Decide:

- whether the trail derives from route config, fetched data, or page state
- how the trail changes on nested dynamic routes
- whether mobile should show a shortened trail, a back link, or a collapsed ancestor menu
- how loading or missing labels are handled
- how focus and accessible labels describe current position

Keep route meaning clear even when the full trail cannot be shown.
