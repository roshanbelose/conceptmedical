# ESC Congress 2026 — HCP email

`esc-2026-email-v2.html` — responsive HTML email for the ESC Congress 2026 invitation,
built on the Concept Medical brand tokens in `colors_and_type.css` (shipped inside
`Home Page ReDesign for Healthcare Professional (1).zip`).

## Merge fields

Every `{{FIELD}}` must be populated before send. Nothing is pre-filled, because the
congress specifics are not confirmed in this repo.

| Field | Notes |
| --- | --- |
| `ASSET_BASE` | Absolute base URL for images, no trailing slash. Must be publicly reachable — email clients cannot load relative paths or repo-private URLs. |
| `FIRST_NAME` | Salutation token from the ESP. Set a fallback (e.g. "Doctor") for blank values. |
| `BOOTH_NUMBER`, `EVENT_DATES`, `VENUE_NAME`, `CITY` | Congress logistics. |
| `SYMPOSIUM_TITLE`, `SYMPOSIUM_DATE`, `SYMPOSIUM_TIME`, `SYMPOSIUM_ROOM`, `CHAIR_NAME` | Satellite symposium block. Delete the whole `<!-- SYMPOSIUM -->` row if there is no symposium. |
| `URL_HOME`, `URL_BOOK_MEETING`, `URL_SYMPOSIUM` | Destination links. |
| `URL_PREFERENCES`, `URL_UNSUBSCRIBE`, `URL_PRIVACY` | Required for CAN-SPAM / GDPR compliance. |
| `REGULATORY_STATEMENT` | **Must be cleared by Regulatory Affairs.** Approval status for MagicTouch SCB and Abluminus DES+ differs by market; a single global string is unlikely to be correct. Segment the send by region, or use a per-region value. |

## Assets

`assets/concept-medical-with-circle.png` — 420x129, displayed at 210x64 (2x for retina).
Derived from `assets/logo-cm-circle-v3-blue.png` in the homepage bundle: cropped to ink
bounds, flattened onto white (transparent PNGs render on black in several Outlook builds),
resized and optimised (209 KB -> 34 KB).

Host it under `ASSET_BASE` on a public CDN before sending.

## Client hardening

- XHTML 1.0 Transitional doctype, `role="presentation"` tables, fixed 600px body
- All visual styling inlined; the `<style>` block carries only media queries and client hacks
- MSO conditional sets `PixelsPerInch` to 96 and pins a font stack, since the Word engine ignores webfonts
- VML `roundrect` fallbacks for both CTAs, so they keep fill and radius in Outlook 2007-2019
- No `rgba()` in any text or background colour — the Word engine drops it, which would have
  rendered the hero copy near-black on navy. Values are pre-blended to solid hex.
- Hidden preheader, `x-apple-disable-message-reformatting`, Apple data-detector suppression
- Mobile breakpoint at 620px: reduced padding, reflowed headline, hidden header label

## Accessibility

All text/background pairs meet WCAG AA (4.5:1 body, 3:1 large). Verified after the
footer neutrals were darkened from `#6B7589`/`#9AA3B5` to `#687286`, and the regulatory
box was moved off `#EEF1F6` onto white with a border.

## Preview

Merge fields are literal `{{...}}` in the source, so open it through your ESP's preview
with test data — the raw file renders the tokens as visible text by design.
