# Personal Portfolio

A clean, responsive developer portfolio built with Next.js, Tailwind CSS, and
Framer Motion. This is a **template** — see [`SETUP.md`](./SETUP.md) for a
step-by-step checklist of everything to personalize.

## Built With

- **Next.js** — React framework (App Router).
- **Tailwind CSS** — styling.
- **Framer Motion** — animations.

## Features

- **Responsive Design** — optimized for all devices.
- **Projects Showcase** — highlight your work, with per-project detail pages.
- **Skills & Services** — list your expertise and tools.
- **Contact Form** — sends email via Nodemailer (needs env vars, see below).

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Set up environment variables for the contact form:

   ```bash
   cp .env.example .env
   # then edit .env with your details
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000).

## Personalizing

Everything you need to change is listed in [`SETUP.md`](./SETUP.md). If you use
Claude Code, just open this folder and say **"fill in my portfolio"** — the
included `CLAUDE.md` tells it exactly where each piece of content lives.
