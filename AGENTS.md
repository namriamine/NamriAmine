# Repository Guidelines

## Project Structure & Module Organization

This is a Next.js 15 App Router portfolio built with React, TypeScript, Tailwind CSS, and Motion. Route entry points and global styles live in `app/`; sections, site chrome, and UI primitives live in `components/sections/`, `components/layout/`, and `components/ui/`.

Keep portfolio copy and metadata in `data/personal.ts`, `data/projects.ts`, and `data/skills.ts`; do not duplicate it in components. Shared types, helpers, hooks, and UI state live in `types/`, `lib/`, `hooks/`, and `store/`. Static assets belong in `public/`; end-to-end specs are in `tests/`.

## Build, Test, and Development Commands

Use pnpm only (`pnpm@10.15.1`).

```bash
pnpm dev           # run the local development server
pnpm lint          # check Biome formatting and lint rules
pnpm type-check    # validate TypeScript without emitting files
pnpm build         # create the production build
pnpm test:e2e      # run Playwright against the production build
pnpm image:optimize # optimize a supplied image via scripts/optimize-image.mjs
```

Run `pnpm build` before `pnpm test:e2e`: Playwright serves `next start` on port 3001. Stop stale port-3001 servers after rebuilding.

## Coding Style & Naming Conventions

Biome is the source of truth: 2-space indentation, single quotes, no semicolons, and 100-character lines. Run `pnpm lint` before submitting; use `pnpm format` or `pnpm lint:fix` only when intended. Name React components in PascalCase (`ScrollProgress.tsx`), hooks with `use` (`useActiveSection.ts`), and data modules in concise lowercase (`projects.ts`). Use the `@/` alias for root imports.

Preserve the light-only theme: do not add `dark:` utilities. Maintain reduced-motion support, accessible labels, and established section IDs, which must agree with `hooks/useActiveSection.ts` and `lib/constants.ts`.

## Testing Guidelines

Add or update Playwright tests in `tests/portfolio.spec.ts` for user-visible behavior. Use descriptive `test('...')` names and resilient role, label, or `data-*` locators. Verify desktop and mobile behavior when changing layout, navigation, CTAs, assets, metadata, or animations. The suite covers Chromium, Pixel 5, and Mobile Safari.

## Commit & Pull Request Guidelines

Recent history uses concise imperative subjects, often scoped by intent: `Fix: correctness and a11y`, `Polish portfolio typography`, or `Update resume package`. Keep commits focused; avoid generated output and temporary artifacts. Pull requests should explain the user-facing change, list checks run, link related issues, and include screenshots for visual updates. Keep portfolio claims, dates, roles, links, and metrics aligned with `data/`; do not add unverified or sensitive personal information.
