# Project notes – Dr Mohamed DKHICHI website

Read this first when resuming work. It records decisions, status and open items.
No secrets belong in this file.

## Client

- Dr Mohamed DKHICHI, chirurgien-dentiste (male – all texts use masculine forms).
- Address: N37, Lot Bernoussi 2, Bd Mbarek Ben Boubker Hammadi, 20610 Casablanca
  (confirmed by the client; the Bouskoura address in the first brief was a copy error).
- One number for calls and WhatsApp: 06 24 96 61 03 (+212 6 24 96 61 03). No landline.
- Hours: Mon–Thu 09:00–20:00 · Fri 13:00–20:00 · Sat 09:00–14:00 · Sun closed. Slots: 20 min.
- Instagram: https://www.instagram.com/centre.dentaire.dkhichi/
- Languages: French (default), English, Arabic (RTL).
- Palette: #E3F2FD · #90CAF9 · #2196F3 · #0D47A1, stars gold (#B8924F / #E3C88A).
  Fonts: Cormorant Garamond + Inter; Arabic: IBM Plex Sans Arabic + Amiri.

## Decisions

- Stack copied from the Dr Ben Elghali project (same proven setup): Next.js 16.4 App Router,
  Tailwind 4, framer-motion, google-auth-library. `cacheComponents` on.
- i18n: `/fr`, `/en`, `/ar` routes; `src/proxy.ts` redirects `/` to the saved or default locale.
- Theme: `dark` class on `<html>` set by an inline script before paint. Reviews band and
  footer stay navy in both themes.
- Logo: tooth line emblem in a double ring + "Dr Mohamed DKHICHI / Chirurgien-dentiste"
  (client chose the doctor's name over "Centre Dentaire Dkhichi").
- Button light trails: sky blue #90CAF9 / #2196F3 (client: "whatever looks good").
- Google rating shown as "5,0 sur Google" without a review count (client's choice).
- Qualifications: only the degree (Faculté de médecine dentaire de Casablanca) is a credential;
  the other three are practice strengths (dental emergencies, gentle care, modern practice
  with hygiene/sterilisation), not diplomas. The house icon is used for "Cabinet moderne".
- Services (confirmed): soins & détartrage, extractions & dents de sagesse, implants,
  prothèses, orthodontie, esthétique & blanchiment. Texts avoid medical promises.
- Calendar: timed events block slots unless "Free"; all-day events always block the day.
  Slot re-checked before insert; honeypot field; demo success only outside production.
- After booking: auto-redirect to WhatsApp (wa.me) with the full summary after ~1.8 s,
  plus a manual "Ouvrir WhatsApp" button. Calendar unreachable / not configured →
  "Envoyer sur WhatsApp" button.
- SEO: per-language metadata, canonical + hreflang (x-default = /fr), JSON-LD
  (`Physician` + `Dentist`, address, phone, hours, Instagram), sitemap.xml with hreflang,
  robots.txt disallowing /api/.
- Google Maps links use the place CID from the client's link (`maps.google.com/?cid=…`).

## Open items

- [ ] Real photos (portrait + building, reception, waiting room, office, treatment rooms);
      current images are SVG placeholders.
- [ ] Confirm the degree title ("Docteur en médecine dentaire", FMD Casablanca) and whether
      he wants a graduation year or further training listed.
- [ ] Confirm he accepts dental emergencies (shown as a qualification and in the badges).
- [ ] Native-speaker check of all Arabic texts, including the name الدكتور محمد الدخيشي.
- [ ] Validation of all texts and service details by the doctor.
- [ ] OK to display the three Google reviews (verbatim).
- [ ] Google Calendar: service account + share the doctor's calendar ("Make changes"),
      timezone (GMT+01:00) Casablanca, env vars in Vercel, redeploy.
- [ ] Domain name in the doctor's name, then set NEXT_PUBLIC_SITE_URL.
- [ ] Check the Google Maps embed and the `?cid=` links on a real device (not verifiable
      from the build environment).
- [ ] Legal: Ordre / advertising rules for dentists; patient data (law 09-08 / CNDP) →
      privacy page and legal notice.
- [ ] Google Business Profile: add the website link, photos, reply to reviews.
