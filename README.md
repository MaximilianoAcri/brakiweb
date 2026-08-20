# Landing page — Estudio Jurídico Braki & Asoc.

Single-page site for a law firm based in Tapiales, Zona Oeste, Buenos Aires.

Built with React 19, TypeScript, Vite and Tailwind CSS v4.

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5173.

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Type-check (`tsc -b`) and build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint |

## Project layout

```
src/
  config.ts              Contact details and form endpoint — single source of truth
  components/
    Navbar.tsx           Fixed header, scroll state, mobile drawer
    Hero.tsx             Full-screen hero
    PracticeAreas.tsx    Practice-area cards
    WhyChooseUs.tsx      Differentiators and stats
    About.tsx            Firm bio and founder
    Contact.tsx          Contact details and enquiry form
    Footer.tsx           Footer navigation
  assets/                Images (the .webp files are the ones actually shipped)
public/                  favicon, og-image, robots.txt, sitemap.xml
```

## Contact form

Enquiries are delivered by [FormSubmit](https://formsubmit.co) to the address in
`src/config.ts`. No account and no backend are required.

**One-time activation:** the first submission is not delivered. FormSubmit sends
a confirmation email to that address — click the link in it once, and every
later submission arrives in the inbox.

If delivery fails, the form falls back to offering WhatsApp with the enquiry
pre-filled, so a consultation is never silently lost.

Optionally, copy `.env.example` to `.env` and set `VITE_FORMSUBMIT_TOKEN` to the
random endpoint token FormSubmit issues after activation. That keeps the email
address out of the built page source.

## Before deploying

- [ ] Replace the placeholder domain `brakiyasoc.com.ar` in `index.html`
      (`og:url`, `og:image`, `canonical`), `public/robots.txt` and
      `public/sitemap.xml`. Open Graph needs absolute URLs or link previews on
      WhatsApp and Facebook will not render.
- [ ] Activate the contact form (see above) and send one test enquiry.
- [ ] Add a privacy policy page. The form collects personal data, which brings
      it under Argentina's Ley 25.326. The footer's "Legal" column was removed
      because its links pointed nowhere — it should come back pointing at a real
      page.

## Images

`Fondohero.png` and `fotoperfil.jpeg` are the originals and are **not** shipped —
nothing imports them. The components import the `.webp` versions, which are
~98% smaller. If you replace an image, convert it before wiring it up.
