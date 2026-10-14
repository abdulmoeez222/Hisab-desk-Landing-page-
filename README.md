# Hisaab Desk · Landing page + waitlist

Next.js 15 + Tailwind v4. Brand from `../hisaab-desk-brandbook.md`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000. Signups are saved to `data/waitlist.json` while running locally.

## Where signups go in production

Set one environment variable (e.g. in Vercel → Project → Settings → Environment Variables):

```
WAITLIST_WEBHOOK_URL=https://...
```

Every signup is POSTed there as JSON:
`{ name, phone (+92...), email, type (business|individual|accountant), business, source, createdAt }`

Easiest option: a Google Sheet + Apps Script web app (`doPost(e)` that appends `JSON.parse(e.postData.contents)` as a row), or a Zapier / Make webhook.

## Files

- `app/page.tsx` – all sections
- `components/waitlist-form.tsx` – the form (adapted from a 21st.dev waitlist component)
- `components/rasidi.tsx` – Rasidi mascot (SVG, moods: wink, happy, shocked, smirk)
- `components/mockups.tsx` – WhatsApp phone, review card, quote comparison, dashboard
- `app/api/waitlist/route.ts` – saves signups
