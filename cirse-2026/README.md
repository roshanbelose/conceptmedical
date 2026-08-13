# Concept Medical — CIRSE 2026 Landing Page

A self-contained static landing page for Concept Medical's presence at the
**CIRSE 2026 Annual Congress** (5–9 September 2026, Bella Center, Copenhagen).

## Provenance
The original brief pointed at the Claude Design project
`CIRSE 2026 Landing Page.dc.html`, which could not be reached from this remote
session (design-system auth requires an interactive `/design-login`, and the
project was not seeded into the workspace). This page was therefore built
**from the Concept Medical design system** — the brand tokens and component
idiom carried in `colors_and_type.css` (Poppins + Cormorant Garamond type, the
CM blue scale, button/section patterns). Replace it with the real design once
the `.dc.html` is available.

## Files
- `index.html` — the page
- `styles.css` — page components, built on the design tokens
- `colors_and_type.css` — Concept Medical brand tokens (from the design system)
- `app.js` — countdown to congress open + scroll reveals (no dependencies)
- `assets/` — brand marks, product renders and fonts used by the page

## Notes on content
Congress facts (dates, venue, theme) and product facts (MagicTouch Sirolimus
Coated Balloon, Nanolute platform, BTK/SFA, FDA Breakthrough/IDE status) are
sourced from public information. Items that need Concept Medical's own input —
**booth number, session times and speakers** — are marked `TBC` in the UI.

No build step: open `index.html` directly, or serve the folder statically.
