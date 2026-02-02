---
name: token-validator
description: Validate design tokens against Figma naming conventions, semantic correctness, and architecture rules
user-invocable: true
allowed-tools: Read, Grep, Glob
---

# Token Validator

Audit design token files for consistency with the Almanac design system architecture.

Figma is the single source of truth. Do not create, rename, infer, or invent tokens.

## What to Validate

When given a file path (via `$ARGUMENTS`), read that file. If no path is given, scan `src/tokens/semantic/` for all token files.

### 1. Naming Convention
Tokens must follow `{purpose}-{description}` pattern:
- `background-primary`, `background-brand`, `background-brand-subtle`
- `text-primary`, `text-secondary`, `text-error`, `text-link`
- `border-dark`, `border-strong`, `border-warning`
- `icon-primary`, `icon-brand`

Flag any tokens that don't match this pattern.

### 2. Architecture Rules
- Semantic tokens live in `src/tokens/semantic/`
- Primitives live in `src/tokens/primitives/`
- **Semantic tokens must never import from primitives directly** — they reference primitives through the theme layer
- CSS custom properties in `src/tokens/styles/` must reference semantic tokens only

Search for violations:
- `import` statements pulling from `../primitives/` in semantic files
- Hardcoded color values (hex, rgb, hsl) in component CSS files
- Raw pixel values for spacing where a token should be used

### 3. Type Safety
- All token objects use `as const` for literal type inference
- Token exports have JSDoc comments explaining purpose
- No `any` types in token definitions

### 4. CSS Token Usage
When scanning CSS files in `src/tokens/styles/`:
- All `color`, `background`, `border-color`, `box-shadow` properties should use `var(--token-name)`
- Font properties should use `var(--font-*)` tokens
- Spacing should use `var(--component-space-*)` or `var(--spacing-*)` tokens
- Border radius should use `var(--radius-*)` tokens
- Hardcoded values are acceptable only for `width`, `height` on icons (e.g., `16px`, `20px`) and `line-height` ratios

### 5. Theme Completeness
For theme-aware tokens, verify both themes define values:
- Check `src/tokens/themes/` for FCMA and Rural 1st definitions
- Flag any token that exists in one theme but not the other

## Report Format

```
## Token Audit: [filename]

### Naming: [PASS/FAIL]
- [List any violations with line numbers]

### Architecture: [PASS/FAIL]
- [List any import violations or hardcoded values]

### Type Safety: [PASS/FAIL]
- [List missing `as const`, JSDoc, or type issues]

### CSS Usage: [PASS/FAIL]
- [List hardcoded values that should be tokens]

### Theme Completeness: [PASS/FAIL]
- [List tokens missing from either theme]

### Summary
[Overall assessment and priority fixes]
```

## Important

If you find a token that appears to be missing from Figma (exists in code but has no Figma equivalent), flag it clearly. Do not suggest creating new tokens — design gaps must be resolved in Figma.
