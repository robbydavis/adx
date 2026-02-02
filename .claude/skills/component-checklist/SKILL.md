---
name: component-checklist
description: Verify that a component meets Almanac design system requirements including Figma alignment, token usage, accessibility, and theme support
user-invocable: true
allowed-tools: Read, Grep, Glob
---

# Component Implementation Checklist

When reviewing a component, verify it meets the following requirements. Read the component's CSS and React files, then report on each category.

## Design Alignment
- [ ] Component design exists in Figma (check for Figma node reference in file header)
- [ ] All visual values use semantic design tokens (no hardcoded colors, sizes, or spacing)
- [ ] Theme-aware tokens are properly applied (works with both FCMA and Rural 1st)
- [ ] CSS class naming follows BEM pattern with `adx-` prefix (e.g., `.adx-component__element--modifier`)

## Token Usage
- [ ] Uses only semantic tokens from `src/tokens/semantic/` (never primitives from `src/tokens/primitives/`)
- [ ] Token naming follows `{purpose}-{description}` pattern (e.g., `--text-primary`, `--border-error`)
- [ ] CSS custom properties reference `var(--token-name)` — no raw values for colors, spacing, radii, or typography

## Code Quality
- [ ] TypeScript strict mode compatible (no unused locals or parameters)
- [ ] All exported types and components have JSDoc comments
- [ ] React component uses `forwardRef` for DOM access
- [ ] Component has a `displayName` set
- [ ] Props interface is exported and well-documented

## Accessibility
- [ ] Appropriate ARIA roles assigned (e.g., `role="combobox"`, `role="listbox"`)
- [ ] Labels linked via `aria-labelledby` or `<label>` association
- [ ] Decorative icons have `aria-hidden="true"`
- [ ] Disabled state uses `aria-disabled` where appropriate
- [ ] Keyboard navigation supported (arrow keys, Enter, Space, Escape as relevant)
- [ ] Focus management handled (focus moves logically, returns after interactions)
- [ ] Focus indicator visible (`:focus-visible` or `--focus-ring` token)

## State Coverage
- [ ] All Figma-defined states are implemented (default, hover, focus, warning, error, disabled)
- [ ] Hover and focus states use CSS pseudo-classes where possible
- [ ] Warning/error states show validation icons and messages
- [ ] Disabled state prevents interaction and uses tertiary text color

## HTML Preview Page
- [ ] Component has an `adx-*.html` preview page
- [ ] All states are demonstrated as static cards
- [ ] Interactive playground allows toggling states
- [ ] Theme switcher works on the preview page

## Report Format

For each category, list:
- **Pass**: Items that meet requirements
- **Fail**: Items that don't meet requirements, with specific file and line references
- **N/A**: Items not applicable to this component type

Provide a summary with the overall pass rate and priority fixes needed.
