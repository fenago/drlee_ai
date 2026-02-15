# DrLee.ai - Claude Code Project Notes

## Supabase (CRITICAL)

- The Supabase instance (`hplmrlvzbqeiimzgzmbw`) is **shared with the mobile app**.
- **DO NOT** modify, drop, or alter any existing tables — you will break the mobile app.
- All new tables for the web app MUST use the prefix `web_` (e.g., `web_assessments`, `web_leads`).
- Only create new `web_*` tables. Never touch tables without the `web_` prefix.

## Tech Stack

- Next.js 14 (App Router), TypeScript, Tailwind CSS + DaisyUI
- Framer Motion for animations
- Supabase for new features (assessments, etc.)
- MongoDB/Mongoose for legacy auth (NextAuth adapter, User, Lead models)
- Google Gemini for AI analysis
- Deepgram for real-time voice transcription
- Resend for email delivery
- Stripe for payments

## Key Conventions

- Course data lives in `lib/courses.ts`, catalog display in `components/landing/CatalogNew.tsx`
- API routes follow Next.js App Router pattern (`app/api/*/route.ts`)
- Environment variables in `.env.local` (see `env.sample` for reference)
