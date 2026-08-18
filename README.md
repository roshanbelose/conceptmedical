# Concept Medical — ESC 2026 landing section

`esc-2026-landing.html` — the ESC Congress 2026 (Munich, booth T300) landing
section, built as a single self-contained block for an **Elementor Pro HTML
widget**. Fonts, styles and the animation script are all inline; there is no
build step and no external JS dependency.

## Using it

1. Copy the whole file contents into an Elementor Pro **HTML** widget.
2. Replace the hero image `src` (marked `YOUR-MUNICH-IMAGE-URL`) with the
   Munich photo uploaded to the WordPress Media Library.
3. The meeting-request form is a Pardot iframe — swap the `src` if the form
   handler changes.

## Scroll-driven animation

Every effect is *scrubbed* against scroll position rather than fired once by a
trigger, so motion plays forward as you scroll down and rewinds as you scroll
back up. A single rAF-throttled `scroll` handler drives everything.

Behaviour is declared in the markup with `data-cm="<type>"`:

| type | effect |
| --- | --- |
| `reveal` | fade + rise, scrubbed; `data-delay` staggers within a row, `data-lift` sets travel in px |
| `words` | heading is split into per-word spans that cascade in as the block crosses the viewport |
| `data-cm-count` | statistics count up in step with scroll (`data-dec`, `data-sep`, `data-pre`, `data-suf`) |
| `bar` | meter width tracks progress up to `data-w` percent |
| `draw` | SVG stroke draws itself via `stroke-dashoffset` |
| `parallax` | bounded parallax drift (`data-speed`, optional `data-scale`) |
| `spin` | hero rings rotate with scroll instead of on a timer |
| `chips` | the four congress days light up one after another |
| `rail` / `railx` | vertical section rail and the horizontal reading-progress line under the event bar |
| `heroout` | hero copy fades and lifts away as it leaves the viewport |

`data-start` / `data-end` (fractions of viewport height) tune where an
element's animation window begins and ends.

Accessibility and robustness:

- Nothing is hidden unless the script is running (`.cm-js` is set by an inline
  bootstrap), so a no-JS or failed-script visitor sees the complete section.
- `prefers-reduced-motion: reduce` resolves every element to its final state
  with no transforms, and is re-checked live if the OS setting changes.
- Parallax is disabled below 900px; a `ResizeObserver` re-syncs after
  Elementor or lazy-loaded content shifts the layout.
