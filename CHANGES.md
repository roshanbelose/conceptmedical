# Identity 2026 — Elementor HTML improvements

`identity-2026.html` is a hardened, drop-in replacement for the original Elementor
HTML-widget snippet. All markup stays scoped under `#id26`, so it pastes into a
single Elementor **HTML** widget exactly like the original. Visual design is
unchanged — only correctness, accessibility, and performance were improved.

## Bug fixes
- **"Add to Calendar" was a dead button.** In the countdown section it had
  `download="Identity-2026.ics"` but no `href`. It now generates a valid `.ics`
  file client-side (data URI) covering 6–8 Aug 2026 at The Westin, Goa, so the
  download actually works.
- **Removed leaked TinyMCE editor artifacts** (`<span data-mce-type="bookmark"
  class="mce_SELRES_start">` selection markers) that were embedded in the code.
- **Fixed the `<style>` block.** It was broken up by literal `<br />` tags; a stray
  `<br />` before `@import` can invalidate the Google Fonts import. Converted to
  clean CSS with real newlines.
- **Fixed a `box-sizing` selector typo** (`#id26 ::before` → `#id26 *`).

## Accessibility
- Agenda day switcher rebuilt as a proper **ARIA tabs** pattern
  (`role="tablist"/"tab"/"tabpanel"`, `aria-selected`, `aria-controls`,
  roving `tabindex`) with full **keyboard support** (←/→/↑/↓, Home, End).
- Countdown wrapped in `role="timer"` with a descriptive `aria-label`.
- Visible **focus outlines** for keyboard users (`:focus-visible`).
- Primary `<nav>` labelled; decorative bullets/numerals marked `aria-hidden`.
- `prefers-reduced-motion` honoured — disables smooth scrolling and transitions.

## Performance
- Below-the-fold images use `loading="lazy"` + `decoding="async"`.
- Hero image marked `fetchpriority="high"`; `preconnect` hints added for fonts.

## Enhancement
- Restored the intended **scroll-reveal** as safe progressive enhancement:
  content is fully visible without JS or under reduced-motion, and a failsafe
  reveals everything after 3s regardless.

## How to use
Copy everything in `identity-2026.html` from the `<link …>` / `<style>` block down
to the closing `</script>` and paste it into the Elementor HTML widget, replacing
the old snippet.
