# CLAUDE.md

## Project Overview

`@almanac/adx` is the design token and theming foundation for the
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

## CSS Component Conventions

Component CSS files follow BEM naming and consistent organization.

### Class Naming (BEM)

- **Block:** `adx-{component}` (e.g., `adx-btn`, `adx-select`)
- **Element:** `adx-{component}__{element}` (e.g., `adx-btn__label`)
- **Modifier:** `adx-{component}--{modifier}` (e.g., `adx-btn--primary`, `adx-btn--disabled`)

### State Modifiers

Interactive states use these standard modifiers:
- `--hover`, `--focus`, `--active` — interaction states
- `--disabled` — non-interactive state
- `--warning`, `--error` — validation states
- `--open`, `--selected` — toggle states

### Documentation States

For showing states in preview pages without actual interaction:
- `--static` — disables pointer events for pure visual display
- `--hover-preview`, `--focus-preview` — forces state appearance

### File Structure

Component CSS files include a header comment referencing the Figma node,
followed by sections separated by comment blocks.

### Token Usage

All CSS property values must use semantic tokens from Figma—never hardcoded
values. This ensures the Figma-to-code connection remains intact.

---

## Theme System

- Supported themes: `ThemeId = 'fcma' | 'rural-first'`
- Theme-aware tokens vary per brand (e.g. `background.brand`, `text.link`)
- React applications must wrap in `<ThemeProvider>`
- Active theme class is applied to `document.documentElement`
  - Example: `theme-fcma`
- Theme selection is persisted to `localStorage`

---

## HTML Page Template

All documentation pages follow this structure:

- `<html class="theme-{themeId}">` — theme class on root
- `<nav class="adx-topbar">` — fixed top bar with theme switcher
- `<nav class="adx-side-nav" id="side-nav">` — rendered by nav.js
- `<main class="adx-main">` — primary content
- `<footer class="adx-footer">` — version info

Stylesheets are included in order: fonts.css, tokens.css, layout.css,
component CSS files, then adx.css.

Navigation is rendered by `nav.js` — do not duplicate nav markup.

---

## Navigation

Side navigation is centralized in `nav.js`:
- `NAV_ITEMS` array defines all pages with href, label, and icon
- Active page is detected automatically from URL
- Add new pages by updating the single `NAV_ITEMS` array

Do not manually write navigation markup in HTML files.

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
