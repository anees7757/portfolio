# Setup & Personalization Checklist

Everything in this template that needs your info is marked with a `TODO`
comment or a placeholder like `Your Name`, `you@example.com`, `YN`, or
`Your Role`. Work through the list below and you're done.

> Tip: search the project for `Your Name`, `you@example.com`, `your-username`,
> and `TODO` to jump straight to every spot.

## 1. Identity & contact

| What | File | Placeholder to replace |
|------|------|------------------------|
| Name (hero heading) | `src/components/hero/Hero.tsx` | `Your` / `Name` |
| Role/tagline (hero) | `src/components/hero/Hero.tsx` | `Your Role · Your Focus · Your Stack` |
| Hero intro paragraph | `src/components/hero/Hero.tsx` | the placeholder one-liner |
| Social links (GitHub/LinkedIn/Instagram) | `src/components/hero/Hero.tsx` | `socialLinks` array |
| Name / phone / email / location | `src/components/about/About.tsx` | `infoData` array |
| Name / phone / email / location | `src/components/contact/Contact.tsx` | `contactInfo` array |
| Intro splash name + role | `src/components/intro/Intro.tsx` | `Your Name` / `Your Role` |
| Logo initials (header, 2 spots) | `src/components/header/Header.tsx` | `YN` |
| Logo initials + copyright name (footer) | `src/components/footer/Footer.tsx` | `YN` / `Your Name` |
| Browser tab title | `src/app/layout.tsx` | `metadata.title` |

## 2. About section

In `src/components/about/About.tsx`:

- **Title, education, bio** — the placeholder `<h3>`/`<p>` block in the render.
- **Experience** — the `experiences` array (most recent first).
- **Skills** — the `skills` array (name, icon, category). Icons come from
  [`lucide-react`](https://lucide.dev/icons).
- **Tools** — the `tools` array (points at SVGs in `/public/svgs`).
- **Interests/Hobbies** — the `interests` array inside `About()`.

## 3. Services

`src/components/services/Services.tsx` — the `services` array (title,
description, tags). These are generic examples; tweak to match what you offer.

## 4. Projects

`public/data/projects.ts` — replace the two example entries with your own.
Each field is documented at the top of that file. For screenshots, add images
under `public/projects/<your-id>/` and point the `image` / `images` paths at
them (they currently use `placeholder.svg`).

## 5. Testimonials (optional)

`src/components/reviews/Reviews.tsx` holds testimonial placeholders. This
section is **hidden by default** — to show it, uncomment `<Reviews />` in
`src/app/page.tsx`.

## 6. Assets

- **Portrait** — `public/mefr.png` is the hero image. Replace it with your own
  transparent PNG (keep the glow padding; see the `.hero-portrait` note in
  `src/app/globals.css`) and update the path in `Hero.tsx` if you rename it.
- **CV** — the hero "Download CV" button links to `/cv.pdf`. Drop your CV at
  `public/cv.pdf`, or update/remove the link in `Hero.tsx`.
- **Favicon** — replace `src/app/favicon.ico`.
- **Brand color** — the accent green (`#6B9E78` / the `brand` token) is defined
  in `src/app/globals.css` and `tailwind.config.ts`.

## 7. Contact form email

Copy `.env.example` to `.env` and fill in `EMAIL_USER`, `EMAIL_PASS`
(a Gmail **App Password**), and `RECEIVER_EMAIL`. The form posts to
`src/app/api/contact/route.js`.

## 8. Deploy

Push to GitHub and import into [Vercel](https://vercel.com) (add the same env
vars in the Vercel project settings).
