# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React-based healthcare website (Viverse Clínica) built with Vite, TypeScript, and shadcn/ui components. The project uses Tailwind CSS for styling and React Router for navigation.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on port 8080)
npm run dev

# Build for production
npm run build

# Build for development mode
npm run build:dev

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## Architecture

### Tech Stack
- **Build Tool**: Vite with React SWC plugin
- **Framework**: React 18 with TypeScript
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS with custom animations
- **Routing**: React Router v6
- **State Management**: React Query (TanStack Query)
- **Forms**: React Hook Form with Zod validation

### Project Structure
- `/src/components/` - React components including UI primitives and page sections
  - `/ui/` - shadcn/ui component library (button, dialog, form, etc.)
  - Main page sections: Header, Hero, About, Services, Footer, etc.
- `/src/pages/` - Route components (Index, NotFound)
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Utility functions (mainly `utils.ts` for className handling)

### Key Conventions
- **Path Aliases**: Use `@/` to import from `src/` directory
- **Component Architecture**: Single-page application with section-based components
- **TypeScript**: Relaxed settings with `noImplicitAny: false` and `strictNullChecks: false`
- **Styling**: Tailwind utility classes with `cn()` helper for conditional classNames

### Main Application Flow
1. Entry point: `src/main.tsx` → `src/App.tsx`
2. App wraps the application with QueryClientProvider, TooltipProvider, and BrowserRouter
3. Routes defined in App.tsx (currently "/" and catch-all "*")
4. Index page assembles the main website from section components

## Important Notes
- Development server runs on IPv6 (::) port 8080
- Lovable tagger plugin is only active in development mode
- Project originated from Lovable.dev platform