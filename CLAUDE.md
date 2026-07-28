# CLAUDE.md

This is a personal portfolio built with Next.js (App Router), Tailwind CSS, and
Framer Motion. It ships as a **template**: all personal content has been
replaced with placeholders for a new owner to fill in.

## Helping the owner personalize

When the user asks to "fill in the portfolio" (or gives you their details),
your job is to replace the placeholders. **`SETUP.md` is the source of truth**
for every place that needs editing — read it first and work through it.

Placeholders to look for across the codebase:

- `Your Name`, `Your Role`, `Your Title / Role`
- `you@example.com`, `+1 234 567 8900`, `City, Country`
- `your-username` (social URLs)
- `YN` (logo initials in the header and footer)
- `TODO` comments

Content lives in a few predictable spots:

- **Identity & contact:** `src/components/hero/Hero.tsx`,
  `src/components/about/About.tsx`, `src/components/contact/Contact.tsx`,
  `src/components/header/Header.tsx`, `src/components/footer/Footer.tsx`,
  `src/components/intro/Intro.tsx`, `src/app/layout.tsx`
- **Projects:** `public/data/projects.ts` (shape documented at the top of the
  file). Project images go under `public/projects/<id>/`.
- **Skills / tools / experience / interests:** arrays at the top of
  `src/components/about/About.tsx`
- **Services:** `services` array in `src/components/services/Services.tsx`
- **Testimonials:** `src/components/reviews/Reviews.tsx` (hidden until
  `<Reviews />` is uncommented in `src/app/page.tsx`)

Assets: hero portrait `public/mefr.png`, CV `public/cv.pdf` (linked from the
hero), favicon `src/app/favicon.ico`. Brand accent color and the `brand` token
are in `src/app/globals.css` and `tailwind.config.ts`.

## Guidelines

- Don't invent facts about the user. If a detail (a project, a job, a link)
  isn't provided, ask rather than fabricate.
- After edits, run `npm run build` (or `npm run lint`) to confirm nothing broke.
- Icons come from `lucide-react` — use real icon names from that package.

## Contact form

`src/app/api/contact/route.js` sends email via Nodemailer/Gmail using env vars
in `.env` (see `.env.example`). `EMAIL_PASS` must be a Gmail App Password.

## Commands

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run lint` — lint
