# AGENTS.md

This document outlines essential information for AI agents working in this codebase.

## Project Overview

This is a SolidJS application powered by Vinxi, a full-stack web framework. It uses TypeScript for development, Tailwind CSS for styling, and Bun as the package manager and runtime.

## Essential Commands

-   **`bun run dev`**: Starts the development server.
-   **`bun run build`**: Builds the application for production.
-   **`bun run start`**: Starts the production server.
-   **`bun run tw-hint-single`**: Runs a script to inject Tailwind CSS hints into a single file.
-   **`bun run tw-hint`**: Runs a script to inject Tailwind CSS hints globally for `src/**/*.tsx` files.

## Code Organization and Structure

-   **`src/`**: The main application source code.
    -   **`src/app.tsx`**: The root component, responsible for setting up the router and global contexts.
    -   **`src/routes/`**: Implements file-system based routing via SolidStart's `FileRoutes`.
        -   `src/routes/index.tsx`: The main landing page.
        -   `src/routes/docs/`: Contains documentation for various components and features.
        -   `src/routes/[...404].tsx`: The fallback route for unmatched paths.
    -   **`src/devano/`**: A custom component library/design system.
        -   **`src/devano/atoms/`**: Basic UI components (e.g., `Heading`, `Page`, `Stack`).
        -   **`src/devano/components/`**: More complex, reusable components (e.g., `Button`).
        -   **`src/devano/utils/`**: Utility functions, notably `cn` for Tailwind CSS class merging.
        -   **`src/devano/globals.css`**: Global CSS styles, including Tailwind directives.
    -   **`src/global/`**: Stores global state and contexts (e.g., `src/global/individual/Auth.tsx` for authentication).
    -   **`src/types/`**: TypeScript type definitions.
    -   **`src/app.css`**: Application-specific CSS.
    -   **`src/entry-client.tsx`**, **`src/entry-server.tsx`**: Client and server entry points for SolidStart.
-   **`scripts/`**: Contains utility scripts, such as those for Tailwind CSS hinting.

## Naming Conventions and Style Patterns

-   **Components**: PascalCase (e.g., `App`, `Button`, `HomePage`).
-   **Files**: PascalCase for component files (e.g., `Button.tsx`), kebab-case for other files (e.g., `app.css`).
-   **TypeScript**: Strongly typed with interfaces for component props and other data structures.
-   **CSS Styling**: Primarily uses Tailwind CSS classes directly within JSX. The `cn` utility (from `src/devano/utils/cn.ts` or similar) is used for conditional and merged class names.
-   **SolidJS Patterns**: Leverages SolidJS reactive primitives like `createEffect` and `splitProps` for component logic and prop management.

## Testing Approach

-   **Testing Library**: `@solidjs/testing-library` is used for unit and integration testing. Although no explicit test scripts are in `package.json`, agents should expect to find tests written using this library.

## Important Gotchas and Non-Obvious Patterns

-   **Vinxi Framework**: Be aware of Vinxi's full-stack capabilities, including its conventions for API routes, server components, and asset handling.
-   **SolidJS Reactivity Model**: Understanding SolidJS's granular reactivity (signals, memos, effects) is crucial for modifying existing code or adding new features without introducing performance issues or unexpected behavior.
-   **Tailwind CSS Integration**: Styles are almost exclusively applied via Tailwind classes. When modifying component appearance, adjust Tailwind classes directly or extend the Tailwind configuration if necessary. The `cn` utility is important for dynamic class composition.
-   **Path Aliases**: The `~` alias is configured in `tsconfig.json` to refer to the `src/` directory (e.g., `~/devano/utils`).
