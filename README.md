# Zanbio — Marketing Site

![Project Preview]([https://i.ibb.co/FD2rC9s/Screenshot-2023-08-27-at-11-09-54.png](https://rdydika.dev/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdpaqb7s4w%2Fimage%2Fupload%2Fv1782209892%2Frdydika%2Fportfolio%2FZanbio.png&w=1536&q=75))

This is the **marketing website** for [Zanbio](https://zanbio.foya.dev), a B2B SaaS platform that automates Accounts Receivable (AR) and Accounts Payable (AP) for finance teams.

The site is a lead generation tool — visitors browse product features and benefits, then fill a contact form to reach the sales team. There is no authentication, database, or backend. Leads are sent directly to email via SendGrid.

## Routes

| Path | Purpose |
|------|---------|
| `/` | Landing page: hero → features → benefits (AR & AP) → closing CTA |
| `/sales-team` | Lead capture form: name, email, phone, company, job title, current system |
| `/api/contact-sales` | `POST` — validates input with Yup, sends inquiry through SendGrid |

## Tech Stack

| Area | Tools |
|------|-------|
| Framework | Next.js 14 (App Router), TypeScript |
| Styling | Tailwind CSS, SCSS Modules, Tailwind Variants |
| UI | NextUI v2, Radix UI (Toast) |
| Animation | Framer Motion |
| State | Zustand (nav scroll tracking only) |
| Form | react-hook-form + Yup |
| Email | SendGrid |

## Project Structure

```
app/                  # App Router pages, API route, layout
├── page.tsx          # Homepage (client component)
├── layout.tsx        # Root layout with Navbar, Footer, Toaster
├── providers.tsx     # NextUI + Theme providers
├── error.tsx         # Error boundary
├── api/contact-sales/# POST endpoint → SendGrid
├── sales-team/       # Contact form page
└── _components/      # Homepage sections (introduction, features, benefits, tagline)

components/           # Shared UI
├── navbar.tsx        # Sticky nav with scroll-aware tab via IntersectionObserver
├── footer.tsx
├── motion/section.tsx # Framer Motion scroll-triggered wrapper
└── ui/toast.tsx      # Radix-based toast

config/               # Site metadata, nav items, font config
constant/benefits.ts  # AR & AP benefit data (typed arrays)
store/                # Zustand — active menu state
```

## Getting Started

```bash
yarn install
cp .env.example .env.local   # fill in SendGrid credentials
yarn dev                     # http://localhost:3000
yarn build                   # production build (standalone output)
```

## Environment

| Variable | Purpose |
|----------|---------|
| `SENDGRID_API_KEY` | SendGrid API key |
| `NEXT_PUBLIC_SENDGRID_FROM_NAME` | Sender display name |
| `NEXT_PUBLIC_SENDGRID_FROM_EMAIL` | Sender email |
| `NEXT_PUBLIC_SENDGRID_REPLY_TO_EMAIL` | Where inquiries are delivered |

## License

MIT
