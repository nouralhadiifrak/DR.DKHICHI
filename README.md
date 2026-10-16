# Dr Mohamed DKHICHI – Website

One-page website for Dr Mohamed DKHICHI, chirurgien-dentiste in Casablanca (Bernoussi).
French (default), English and Arabic (RTL), light/dark mode, online booking through
Google Calendar with a WhatsApp hand-off.

Built with Next.js 16 (App Router, TypeScript), Tailwind CSS 4 and framer-motion.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000 → redirects to /fr
npm run build      # production build
npm run lint
```

Without Google credentials, `npm run dev` runs booking in **demo mode**: the form works,
nothing is saved, and the visitor is still sent to WhatsApp with the summary. In production,
booking answers `not_configured` until Calendar is set up, so a patient never gets a false
confirmation. The form then offers "Envoyer sur WhatsApp" instead.

## Where to edit things

| What | File |
| --- | --- |
| Texts (FR / EN / AR) | `src/i18n/dictionaries/fr.ts`, `en.ts`, `ar.ts` |
| Phone, address, Instagram, Maps links, photos, reviews | `src/lib/site.ts` |
| Opening hours, 20-min slots, booking window | `src/lib/schedule.ts` |
| Colours and fonts | `src/app/globals.css`, `src/app/[lang]/layout.tsx` |
| Logo | `src/components/Logo.tsx` (header/footer), `src/app/icon.svg` (browser tab) |

**Photos:** the files in `public/images/` are placeholders (SVG). Add the real photos as
JPG/WebP with URL-safe names (e.g. `doctor-portrait.webp`, `building.webp`,
`reception.webp`, `waiting-room.webp`, `office.webp`, `treatment-room.webp`), ideally
≥1600 px wide (800×1000 for the portrait), then update the paths in `src/lib/site.ts`.
Order: portrait first (it is also the hero photo), then building, reception, waiting
room, office, treatment rooms. Tall photos: add `fit: "contain"` so they show in full.

## Google Calendar setup

Appointments are written by a Google **service account** into the doctor's calendar,
which is shared with it. Busy time in that calendar blocks slots:

- timed events block their slots, unless the event is marked **"Free"**;
- all-day events always block the whole day (holidays, days off).

Steps:

1. Go to <https://console.cloud.google.com/>, create a project and enable the
   **Google Calendar API** (*APIs & Services → Library*).
2. *IAM & Admin → Service Accounts → Create service account* (no role needed).
   Open it → *Keys → Add key → Create new key → JSON* and download the file.
3. In Google Calendar (the doctor's account): *Settings → Settings for my calendars →
   the calendar → Share with specific people → Add people*, paste the service account's
   email and choose **"Make changes (see private events as free/busy)"**
   (shown as *"Make changes to events"* in some versions).
4. In the same settings page, check the calendar **time zone is (GMT+01:00) Casablanca**.
5. Set the environment variables (`.env.local` locally, *Vercel → Project → Settings →
   Environment Variables* in production). See `.env.example`:
   - `GOOGLE_SERVICE_ACCOUNT_EMAIL` – `client_email` from the JSON
   - `GOOGLE_PRIVATE_KEY` – `private_key` from the JSON, in quotes, keeping the `\n`
   - `GOOGLE_CALENDAR_ID` – the doctor's Gmail address (or the calendar ID shown under
     *Integrate calendar*)
   - `NEXT_PUBLIC_SITE_URL` – the final domain, e.g. `https://www.drdkhichi.ma`
6. Redeploy. Delete the downloaded JSON file once the values are copied.

Each booking creates an event "RDV · Patient name" (20 minutes) with the phone number and
message in its description. The slot is checked again just before saving, so two patients
cannot book the same time.

## WhatsApp hand-off

After the appointment is saved, the site opens WhatsApp (`wa.me/212624966103`) with a
prefilled message containing the name, phone, date, time and message. The patient only
has to press *Send*; the doctor receives the summary on WhatsApp. A manual
"Ouvrir WhatsApp" button is shown too, in case the automatic redirect is blocked.

If the calendar cannot be reached (or is not configured in production), the form shows
"Envoyer sur WhatsApp" so the request still reaches the practice.

## Deploy

Vercel deploys the `main` branch. Import the repo on <https://vercel.com/new>, add the
environment variables above, and set `NEXT_PUBLIC_SITE_URL` to the final domain (it is
used for canonical URLs, hreflang, the sitemap and robots.txt).
