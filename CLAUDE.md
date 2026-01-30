# CLAUDE.md

## Project Overview

`@almanac/design-tokens` is the design token and theming foundation for the
Almanac DX UI Kit. It provides a theme-aware semantic token system supporting
multiple brands (FCMA, Rural 1st) with runtime theme switching.

This repository implements and enforces design decisions defined in Figma.
It does not invent new design decisions.

---

## Design Intent & Scope

This project encodes the Almanac design system as defined in Figma.

Claude’s role in this repository is to:
- Faithfully implement Figma-defined tokens and components in code
- Preserve design and UX intent through implementation
- Communicate correct usage and best practices through documentation

Claude must not create, infer, or “improve” design decisions.

---

## Token Authority (Non-Negotiable)

Figma is the single source of truth for all design tokens.

- Claude must not generate, rename, infer, or invent tokens
- New tokens may only be added if they already exist in Figma
- Claude must not suggest alternative token structures or naming
- Token work in this repo is strictly representational, not generative

If a required token does not exist in Figma, pause and flag the gap.

---

## Missing or Ambiguous Tokens

If a component or pattern requires a token that is not present:

- Do not create placeholder or temporary tokens
- Do not repurpose semantically incorrect tokens
- Clearly explain what token is missing and why
- Ask for confirmation before proceeding

Design gaps must be resolved in Figma, not in code.

---

## Architecture

This project follows a **Primitive → Semantic token pattern**.

Primitives represent raw values and are strictly internal.
Semantic tokens provide contextual meaning and form the public API.

### Key directories

- `src/tokens/primitives/` — Internal base values (colors, sizing, typography)
- `src/tokens/semantic/` — Public token API (background, text, border, icon, typography, elevation)
- `src/tokens/themes/` — Theme configurations (FCMA, Rural 1st)
- `src/tokens/styles/` — Generated CSS output (fonts.css, tokens.css, index.css)
- `src/react/` — ThemeProvider, `useTheme`, and `useTokens`
- `fonts/` — Brand font files (Trade Gothic, Rift)

Primitives must never be imported or consumed directly.

---

## Code Conventions

- **Never import primitives directly** — always use semantic tokens
- Strict TypeScript enabled (no unused locals or parameters)
- All tokens use `as const` for accurate type inference
- JSDoc comments are required for all exported tokens
- Theme-aware tokens are explicitly marked in source
- Semantic tokens follow `{purpose}-{description}` naming
  - Example: `background-primary`, `text-link`

---

## Theme System

- Supported themes: `ThemeId = 'fcma' | 'rural-first'`
- Theme-aware tokens vary per brand (e.g. `background.brand`, `text.link`)
- React applications must wrap in `<ThemeProvider>`
- Active theme class is applied to `document.documentElement`
  - Example: `theme-fcma`
- Theme selection is persisted to `localStorage`

---

## Documentation Intent

Documentation is intended for both engineers and designers.

Documentation should:
- Explain what a component or token is for
- Communicate design and UX best practices
- Clarify when and when not to use a component
- Call out important accessibility or interaction considerations

Documentation should reinforce correct usage, not just describe APIs.

---

## Documentation Style Guidelines

- Use clear, neutral language
- Avoid internal team jargon
- Prefer concrete examples over abstract explanations
- Assume readers understand React but not Almanac-specific intent

Docs should help teams make good design and UX decisions.

---

## Build & Development

```bash
npm run build          # Validates generated CSS then compiles TypeScript
npm run generate-css   # Ensures token CSS files exist in src/tokens/styles/
