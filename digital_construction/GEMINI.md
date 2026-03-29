# GEMINI Context: Digital Construction

This project is a high-impact corporate landing page for **Digital Construction**, focusing on AI integration, process automation, and digital experiences for construction and business operations.

## Project Overview

- **Main Technologies**: 
  - **Framework**: Next.js 16.2.1 (App Router)
  - **Library**: React 19.1.0
  - **Language**: TypeScript 5.8.3
  - **Styling**: Tailwind CSS 4.2.2 with PostCSS
  - **Icons/Logos**: SVG assets in `public/logos/`
- **Architecture**: 
  - Uses the **Next.js App Router** structure.
  - Core UI components are consolidated in `app/components/site-sections.tsx`.
  - Global styles and Tailwind 4 theme configuration are located in `app/globals.css`.

## Building and Running

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the development server at `http://localhost:3000`. |
| `npm run build` | Compiles the project for production. |
| `npm run start` | Serves the production-built application. |
| `npm run lint` | Runs ESLint to check for code quality and style issues. |

## Project Structure

- `app/`: Contains the application routes and layout.
  - `layout.tsx`: Root layout with metadata and global font settings.
  - `page.tsx`: The main landing page.
  - `automatizacion/`: Route for Automation services.
  - `integracion-ia/`: Route for IA Integration services.
  - `components/`: Shared UI sections (Header, Marquee, Highlights, Contact).
  - `globals.css`: Base styles and Tailwind 4 theme variables.
- `public/`: Static assets.
  - `logos/`: SVG logos for AI tools (ChatGPT, Claude, etc.) and social media.
  - `imagenes/`, `proyectos/`, `servicios/`: Placeholders for project-specific visual content.

## Development Conventions

- **Styling**: 
  - Uses **Tailwind CSS 4**. Theme variables (colors like `background`, `title`, `button`) are defined in `app/globals.css` using the `@theme` directive.
  - High use of `clamp()` for fluid responsive typography and spacing.
  - Glassmorphism effects (e.g., `SiteHeader`) using `backdrop-blur` and semi-transparent borders.
- **Components**: 
  - Prefers functional components with TypeScript interfaces for props.
  - Reusable sections are kept in `site-sections.tsx` to maintain consistency across different landing pages.
- **Language**: The user-facing content is entirely in **Spanish**.
- **Performance**: Utilizes `next/image` for optimized image delivery and `next/link` for client-side navigation.
