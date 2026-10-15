# Jabalpur Car Rental Taxi Service

Premium, mobile-first taxi website UI with reusable React components, Tailwind CSS v4, Lucide icons and validated WhatsApp enquiry drafts.

## Setup

```sh
npm install
npm run dev
```

The development server starts at the port printed in the terminal. To create a production build, run `npm run build`. Run automated tests with `npm run test`.

## Stack and structure

This hosted project uses React 19, TypeScript, Vite and TanStack Start/Router. The existing hosted runtime is preserved instead of introducing React Router DOM, a separate App.jsx or main.jsx bootstrap.

- `src/components/`: Header, Footer, Button, SectionHeading, VehicleCard, ServiceCard, RouteCard, BookingForm and shared interactions.
- `src/sections/`: all reusable homepage sections.
- `src/config/business.ts`: editable business contact details, service areas and validated booking message generation.
- `src/config/content.ts`: services, vehicles, destinations and route content.
- `src/config/theme.ts` and `src/styles.css`: shared design system.
- `src/routes/`: homepage plus Services, Fleet, Routes, Tours, About and Contact pages; every content page has its own metadata.
- `src/assets/`: optimized, generated illustrative automotive and destination images.

## Configure before publishing

Set real `phone`, `whatsapp`, `email`, `address`, `serviceAreas` and `mapsUrl` in `src/config/business.ts`. Phone and WhatsApp are intentionally blank, not invented. WhatsApp expects an international number with country code. The current map opens a city-level Jabalpur search, not a verified business pin. Replace it with your real business map link.

Without a configured WhatsApp number, users can prepare and copy enquiries, but cannot send them to the business. When configured, a validated, encoded `wa.me` link opens WhatsApp with the enquiry. Nothing is automatically sent or confirmed. Fleet seating and availability must be verified with the business. All photographs are illustrative AI-generated images, not verified actual fleet vehicles or documentary destination photography. Replace with business-approved photos for production.

## Booking and security

All required enquiry fields are validated by Zod before message generation, including date, time, passenger count and trip type. Text inputs have length limits; WhatsApp number and message length are validated, and message parameters are URL-encoded. User text is rendered as text, never HTML. This frontend has no server submission, persistence, payment processing or automatic confirmation. Add server-side validation using the same schema when connecting a future booking service.

## Accessibility and layouts

Keyboard-accessible navigation, modal focus management, native FAQ accordions, labeled forms, validation feedback, visible focus rings, reduced-motion support and mobile bottom booking actions are included. Contact metadata and per-page SEO can be adapted without changing the page structure.
