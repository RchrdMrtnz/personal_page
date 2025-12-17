# Technical Documentation: Personal Portfolio & Automation Showcase

## Project Overview
This project is a high-performance, bilingual (English/Spanish) web application built to showcase technical expertise in AI, Automation, and Full-Stack development. It is engineered with a focus on **speed, scalability, and maintainability**, utilizing modern web standards and a centralized content architecture.

The application serves as a lead generation platform and professional portfolio, featuring a custom design system ("Nebula"), interactive animations, and a fully typed codebase.

## Technology Stack

### Core
*   **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React Server Components)
*   **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
*   **Runtime**: Node.js

### Styling & UI
*   **CSS Engine**: [Tailwind CSS v4](https://tailwindcss.com/) (Alpha/Beta via PostCSS)
*   **Design System**: Custom "Nebula" theme defined in CSS variables.
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) for complex enter/exit and scroll-linked animations.
*   **Icons**: [Lucide React](https://lucide.dev/) for consistent, lightweight SVG icons.
*   **Fonts**: Inter (Body) & Space Grotesk (Display) via `next/font`.

### Internationalization (i18n)
*   **Library**: [`next-intl`](https://next-intl-docs.vercel.app/)
*   **Strategy**: Sub-path routing (`/en`, `/es`) with middleware-based locale detection.
*   **Structure**: JSON-based message catalogs located in `messages/`.

## Project Structure

```bash
├── content/
│   └── site.ts           # Centralized Content Store (CMS-lite)
├── messages/
│   ├── en.json           # English static strings
│   └── es.json           # Spanish static strings
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles & Nebula theme variables
│   │   ├── [locale]/     # Localized routes (Next.js App Router)
│   │   └── api/          # Route Handlers
│   ├── components/
│   │   ├── sections/     # Page sections (Hero, Services, etc.)
│   │   └── ui/           # Reusable primitives (Card, Button, Badge)
│   ├── i18n/             # i18n configuration & routing logic
│   └── middleware.ts     # Locale matching middleware
└── public/               # Static assets (images, PDFs)
```

## Key Architectural Decisions

### 1. Centralized "Code-as-Content" CMS (`content/site.ts`)
Instead of an external headless CMS, the project uses a strictly typed TypeScript file (`content/site.ts`) to manage dynamic content.
*   **Purpose**: Manages experience, projects (case studies), services, and metrics.
*   **Benefit**: Zero network latency for content fetching, strict type safety, and instant updates via code deployment.
*   **Localization**: Content fields use union types `{ en: string, es: string }` to keep translations co-located with the data, rather than scattered in JSON files.

### 2. The "Nebula" Design System
A dark-mode-first aesthetic implemented via native CSS variables in `src/app/globals.css` and exposed to Tailwind.
*   **Palette**:
    *   `--nebula-primary`: Deep violet base.
    *   `--nebula-ink`: Almost-black background.
    *   `--nebula-accent`: Vibrant electric blue for actions/highlights.
    *   `--nebula-surface`: Off-black for cards/panels.
*   **Implementation**: Utilizes Tailwind v4's `@theme` directive (or compatibility layer) to inject these directly into the utility class namespace.

### 3. Hybrid Internationalization
The project uses a hybrid approach for translations:
*   **UI Chrome (Nav, Footer, Buttons)**: Standard `next-intl` JSON keys (`messages/*.json`).
*   **Business Content (Projects, Bio)**: Sourced from `site.ts` with manual locale selection logic in components (e.g., `locale === 'en' ? item.desc.en : item.desc.es`).
*   **Routing**: `src/middleware.ts` handles redirection (e.g., `/` -> `/en`) and persists user preference.

## Setup & Development

### Prerequisites
*   Node.js 18+
*   npm or pnpm

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
# Server starts at http://localhost:3000
```

### Building for Production
```bash
npm run build
npm start
```

## Deployment
The application is designed to be deployed on Vercel or any Node.js compatible hosting. It requires no external databases or environment variables for basic functionality.
