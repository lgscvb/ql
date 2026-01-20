# Qualin CPA Firm Website

## Overview

This is a professional website for 會林會計師事務所 (Qualin CPA Firm), a Taiwanese accounting firm. The application provides information about accounting services, tax planning, audit services, and company registration. It includes a contact form for client inquiries and a fee calculator for bookkeeping services.

The project uses a full-stack TypeScript architecture with React on the frontend and Express on the backend, with PostgreSQL database support via Drizzle ORM.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **Styling**: Tailwind CSS with custom CSS variables for theming (warm professional palette)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **State Management**: TanStack React Query for server state
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Framework**: Express 5 with TypeScript
- **Runtime**: Node.js with tsx for TypeScript execution
- **API Pattern**: RESTful endpoints under `/api` prefix
- **Development**: Vite middleware for HMR in development mode
- **Production**: Static file serving from built assets

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Validation**: Zod schemas generated from Drizzle schemas via drizzle-zod
- **Storage Abstraction**: Interface-based storage pattern allowing memory or database implementations
- **Current Tables**: users (authentication), contacts (form submissions)

### Key Design Patterns
- **Monorepo Structure**: Client code in `client/`, server in `server/`, shared types in `shared/`
- **Path Aliases**: `@/` for client source, `@shared/` for shared code
- **Type Safety**: End-to-end TypeScript with shared schema types
- **API Client**: Centralized fetch wrapper with error handling in `queryClient.ts`

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for PostgreSQL

### UI Framework
- **Radix UI**: Full suite of accessible UI primitives (dialog, dropdown, tabs, etc.)
- **Lucide React**: Icon library
- **Embla Carousel**: Carousel component
- **Vaul**: Drawer component
- **cmdk**: Command menu component

### Development Tools
- **Drizzle Kit**: Database migrations and schema push (`npm run db:push`)
- **Replit Vite Plugins**: Error overlay, cartographer, and dev banner for Replit environment

### Fonts
- **Google Fonts**: Noto Sans TC (Chinese), Noto Serif TC, Plus Jakarta Sans (loaded via CDN)

## Recent Changes

### January 2026 - UI Redesign
- **Color Palette**: Replaced cold blue with warm teal/green (primary: hsl 168 55% 32%) and cream backgrounds for a more human, professional feel
- **Typography**: Configured Noto Sans TC, Noto Serif TC for Chinese text with Plus Jakarta Sans fallback
- **Page Sections**: Navigation, Hero with badges, Stats, Problems/Solutions, Interactive Calculators (bookkeeping, company setup, VAT), Services Grid, Government Subsidies, FAQ Accordion, Contact Form, Footer
- **SEO**: Added Open Graph and Twitter meta tags
- **Backend**: Implemented contact form API with in-memory storage (POST /api/contact, GET /api/contacts)