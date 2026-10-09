# DrLee.ai website

Marketing site and catalog for DrLee.ai: short, practical AI masterclasses by Dr. Ernesto Lee, for leaders and builders.
Operated by Learning Science Inc., 7027 Broward Blvd #744, Plantation, FL 33317.

## Develop

```bash
npm install
cp env.sample .env.local   # fill in the values
npm run dev
```

Built with Next.js, Tailwind and React. Course catalog data lives in `lib/courses.ts`.

## Legal pages

- Privacy Policy: `app/privacy-policy/page.tsx` (https://drlee.ai/privacy-policy)
- Terms of Service: `app/tos/page.tsx` (https://drlee.ai/tos)

The DrLee.ai mobile app links to both pages.

Support: support@drlee.ai
