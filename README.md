# Hisaab Desk landing page

Static landing page for Hisaab Desk. Plain HTML, CSS and JS — no build step.

## Run locally

```
python -m http.server 8765
```

Then open http://localhost:8765/.

- `index.html` — the page
- `css/`, `js/` — styles and scripts
- `assets/` — Billu artwork, flag, favicons, social card
- `hisaabdesk-logo-pack/` — full brand logo pack

The waitlist form posts to the live Billu worker API; it does not send when the page is opened via `file://`.
