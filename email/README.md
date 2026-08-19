# Conference Submission Deadlines 2026–27 — Account Engagement email

`conference-deadlines-2026-27.html` is the HTML email template, built for Salesforce
Account Engagement (Pardot) and hand-coded for broad email-client support.

## Before you send

1. **Host the logo.** The template references
   `https://www.conceptmedical.com/email/concept-medical-logo-white.png` in two places
   (header and footer). Upload the white logo under **Content → Files** in Account
   Engagement and replace both `src` values with the hosted URL. Supply a 2× asset
   (320 px wide) so it stays sharp on retina screens — the `width` attribute keeps it
   at 160 px. Do **not** re-embed the logo as a `data:` URI: Gmail, Outlook and most
   webmail clients strip those, and it bloated the previous file to several MB.

2. **Merge fields.** The template uses classic Account Engagement merge fields:
   `%%view_online%%`, `%%account_address%%`, `%%email_preference_center%%` and
   `%%unsubscribe%%`. Account Engagement will not let the email be saved or sent
   without an unsubscribe link and the sender address. If your org runs on Lightning
   HML instead, swap them for `{{Recipient.…}}` / `{{Unsubscribe}}` equivalents.

3. **Test.** Send a test through Litmus / Email on Acid or seed addresses covering
   Outlook 2016+ on Windows, Outlook.com, Gmail (web + Android + iOS), and Apple Mail
   in both light and dark mode.

## Editing the cards

Every card uses byte-identical markup apart from its data, so cards can be copied,
reordered or deleted as whole `<table>` blocks. Each card is followed by a 16 px
spacer table — keep that spacer when you copy a card, and delete it with the card.

Two card styles are available:

- **Urgent** — blue `1px solid #1D4E9F` border, "Deadline soon" pill, solid blue button.
- **Standard** — grey `1px solid #DDE3EE` border, no pill, outlined button.

Cards are ordered by nearest deadline first; re-sort them when dates change.
