# Almanac DX Design Tokens

Production-ready design token system for the Almanac DX UI Kit with FCMA and Rural 1st theming support.

## Overview

This package provides a comprehensive design token system built on a **primitive → semantic architecture** with runtime theme switching capabilities. Tokens are available as both TypeScript objects and CSS custom properties, enabling flexible usage across different frameworks and styling approaches.

### Key Features

- ✅ **Hybrid TypeScript + CSS Variables** - Type-safe tokens with runtime theming
- ✅ **Four Pillars Architecture** - Semantic organization (Background, Text, Border, Icon)
- ✅ **Runtime Theme Switching** - Switch between FCMA and Rural 1st brands
- ✅ **Complete Typography System** - 5 categories with 31 total styles
- ✅ **Elevation System** - 4 levels of shadow depth
- ✅ **React Integration** - ThemeProvider and hooks included
- ✅ **Brand Fonts Included** - Trade Gothic (17 variants) and Rift (10 variants)

## Installation

```bash
npm install @almanac/adx
```

## Quick Start

### 1. Import CSS (Required for CSS Variables)

```tsx
// In your app entry point
import '@almanac/adx/dist/tokens/styles/index.css';
```

### 2. Wrap Your App with ThemeProvider

```tsx
import { ThemeProvider } from '@almanac/adx';

function App() {
  return (
    <ThemeProvider initialTheme="fcma">
      <YourApp />
    </ThemeProvider>
  );
}
```

### 3. Use Tokens in Components

#### Option A: CSS Variables

```css
.button {
  background-color: var(--background-action);
  color: var(--text-reverse);
  border: var(--border-width-thin) solid var(--border-brand);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-8) var(--spacing-16);
  font-family: var(--font-family-trade-gothic);
  font-size: var(--font-size-16);
  font-weight: var(--font-weight-medium);
  box-shadow: var(--elevation-200);
}

.button:hover {
  background-color: var(--background-action-hover);
}
```

#### Option B: TypeScript Tokens

```tsx
import { background, text, border, typography, elevation } from '@almanac/adx';

const Button = () => (
  <button style={{
    backgroundColor: background.action,
    color: text.reverse,
    border: `1px solid ${border.brand}`,
    borderRadius: '0.25rem',
    padding: '0.5rem 1rem',
    ...typography.label.md,
    boxShadow: elevation[200],
  }}>
    Click Me
  </button>
);
```

## Token Categories

### The Four Pillars

The Almanac DX semantic variables are organized into four pillars for consistent color application:

#### 1. Background Tokens

Page, container, and element fills.

```tsx
import { background } from '@almanac/adx';

// Available tokens:
background.page          // Page background (#ffffff)
background.primary       // Primary container background
background.light         // Light background variant
background.medium        // Medium background variant
background.dark          // Dark background variant
background.reverse       // Reverse background for dark themes
background.brand         // Theme-aware brand background
background.brandHover    // Theme-aware brand hover
background.action        // Theme-aware button/CTA background
background.actionHover   // Theme-aware action hover
background.disabled      // Disabled element backgrounds
background.success       // Success state background
background.error         // Error state background
background.warning       // Warning state background
background.information   // Info state background
```

#### 2. Text Tokens

Text colors for all contexts.

```tsx
import { text } from '@almanac/adx';

// Available tokens:
text.primary          // Primary body text
text.secondary        // Secondary text with reduced emphasis
text.tertiary         // Tertiary text for minimal emphasis
text.reverse          // Text for dark backgrounds
text.brand            // Theme-aware brand text
text.link             // Theme-aware link text
text.linkHover        // Theme-aware link hover
text.disabled         // Disabled text
text.success          // Success message text
text.error            // Error message text
text.warning          // Warning message text
text.information      // Info message text
```

#### 3. Border Tokens

Border colors and focus states.

```tsx
import { border } from '@almanac/adx';

// Available tokens:
border.reverse        // Borders on dark backgrounds
border.subtle         // Subtle borders for containers
border.dark           // Medium-emphasis borders
border.strong         // High-contrast borders
border.brand          // Theme-aware brand borders
border.focus          // Theme-aware focus borders
border.success        // Success state borders
border.error          // Error state borders
border.warning        // Warning state borders
border.information    // Info state borders
```

#### 4. Icon Tokens

Icon fills and states.

```tsx
import { icon } from '@almanac/adx';

// Available tokens:
icon.subtle           // Low-emphasis icons
icon.dark             // High-emphasis icons
icon.reverse          // Icons on dark backgrounds
icon.brand            // Theme-aware brand icons
icon.link             // Theme-aware link icons
icon.disabled         // Disabled icons
icon.success          // Success state icons
icon.error            // Error state icons
icon.warning          // Warning state icons
icon.information      // Info state icons
```

### Typography Tokens

Complete typographic system with 5 categories and 31 total styles.

```tsx
import { typography } from '@almanac/adx';

// Display styles (6 variants)
typography.display.xl    // 80px - Hero text
typography.display.lg    // 64px - Primary headlines
typography.display.md    // 56px - Large section headings
typography.display.sm    // 48px - Medium section headings
typography.display.xs    // 40px - Smaller display text
typography.display.xxs   // 32px - Compact display text

// Eyebrow styles (4 variants)
typography.eyebrow.lg    // 14px - Large category labels
typography.eyebrow.md    // 12px - Standard category labels
typography.eyebrow.sm    // 10px - Small tags
typography.eyebrow.xs    // 8px - Very small tags

// Heading styles (6 variants)
typography.heading.h1    // 40px - Page titles
typography.heading.h2    // 36px - Major section headings
typography.heading.h3    // 32px - Sub-section headings
typography.heading.h4    // 28px - Content section headings
typography.heading.h5    // 24px - Card headings
typography.heading.h6    // 20px - Small component headings

// Label styles (4 variants)
typography.label.lg      // 18px - Large button text
typography.label.md      // 16px - Standard button text
typography.label.sm      // 14px - Small UI labels
typography.label.xs      // 12px - Tiny labels

// Paragraph styles (5 variants)
typography.paragraph.xl  // 24px - Lead paragraphs
typography.paragraph.lg  // 20px - Large body text
typography.paragraph.md  // 18px - Standard paragraphs
typography.paragraph.sm  // 16px - Smaller body text
typography.paragraph.xs  // 14px - Small descriptions

// Each style returns a TypographyStyle object:
// { fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, textTransform? }
```

### Elevation Tokens

Shadow styles for visual depth and hierarchy.

```tsx
import { elevation } from '@almanac/adx';

// Available levels:
elevation[100]    // Y: 2px, Blur: 4px - Container/card hover
elevation[200]    // Y: 4px, Blur: 8px - Elevated containers
elevation[300]    // Y: 8px, Blur: 16px - Menus, popovers
elevation[400]    // Y: 16px, Blur: 32px - Modals, dialogs
```

## Theme System

### Available Themes

#### FCMA (Farm Credit Mid-America)
- Primary Color: `#5e9732` (FCMA Green)
- Hover State: `#4a7928`
- Light Variant: `#e4f2d8`

#### Rural 1st
- ⚠️ **TODO**: Replace placeholder colors with actual Rural 1st brand colors
- Current placeholder: `#c41e3a`

### Switching Themes

#### In React

```tsx
import { useTheme } from '@almanac/adx';

function ThemeSwitcher() {
  const { themeId, theme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme.name}</p>
      <button onClick={() => setTheme('fcma')}>FCMA</button>
      <button onClick={() => setTheme('rural-first')}>Rural 1st</button>
    </div>
  );
}
```

#### In Plain HTML/CSS

```html
<!-- FCMA theme -->
<html class="theme-fcma">
  <!-- Your content -->
</html>

<!-- Rural 1st theme -->
<html class="theme-rural-first">
  <!-- Your content -->
</html>
```

```javascript
// Switch theme with JavaScript
document.documentElement.className = 'theme-fcma';
// or
document.documentElement.className = 'theme-rural-first';
```

## React Hooks

### useTheme()

Access current theme and switch themes.

```tsx
import { useTheme } from '@almanac/adx';

const { themeId, theme, setTheme } = useTheme();
// themeId: 'fcma' | 'rural-first'
// theme: { id, name, colors }
// setTheme: (id: ThemeId) => void
```

### useTokens()

Access all semantic tokens.

```tsx
import { useTokens } from '@almanac/adx';

const tokens = useTokens();
// Returns: { background, text, border, icon, typography, elevation }
```

## CSS Custom Properties Reference

### Colors

```css
/* Background */
--background-page
--background-primary
--background-light
--background-brand (theme-aware)
--background-action (theme-aware)
/* ... and more */

/* Text */
--text-primary
--text-secondary
--text-brand (theme-aware)
--text-link (theme-aware)
/* ... and more */

/* Border */
--border-subtle
--border-brand (theme-aware)
--border-focus (theme-aware)
/* ... and more */

/* Icon */
--icon-dark
--icon-brand (theme-aware)
/* ... and more */
```

### Typography

```css
/* Font Families */
--font-family-trade-gothic
--font-family-rift

/* Font Sizes */
--font-size-8 through --font-size-80

/* Font Weights */
--font-weight-light: 300
--font-weight-regular: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
--font-weight-heavy: 800

/* Line Heights */
--line-height-100 through --line-height-160

/* Letter Spacing */
--letter-spacing-tight: -0.02em
--letter-spacing-normal: 0
--letter-spacing-loose: 0.02em
```

### Spacing & Sizing

```css
/* Spacing */
--spacing-0 through --spacing-128

/* Border Radius */
--border-radius-none through --border-radius-full

/* Border Width */
--border-width-thin: 1px
--border-width-medium: 2px
--border-width-thick: 4px
```

### Elevation

```css
--elevation-100
--elevation-200
--elevation-300
--elevation-400
```

## Critical Guidelines

### ✅ DO

1. **Always use semantic tokens** in components
   ```tsx
   // ✅ CORRECT
   <div style={{ backgroundColor: background.primary }} />
   ```

2. **Use tokens that match element type**
   ```tsx
   // ✅ CORRECT - Use text token for text
   <p style={{ color: text.primary }}>Text</p>

   // ✅ CORRECT - Use background token for backgrounds
   <div style={{ backgroundColor: background.light }} />
   ```

3. **Use CSS variables for runtime theming**
   ```css
   /* ✅ CORRECT - Automatically adapts to theme */
   .button {
     background-color: var(--background-action);
   }
   ```

### ❌ DON'T

1. **Never import primitive tokens**
   ```tsx
   // ❌ WRONG
   import { neutral } from '@almanac/adx/primitives';

   // ✅ CORRECT
   import { background } from '@almanac/adx';
   ```

2. **Never hardcode colors or sizes**
   ```tsx
   // ❌ WRONG
   <div style={{ backgroundColor: '#5e9732', padding: '16px' }} />

   // ✅ CORRECT
   <div style={{ backgroundColor: background.brand, padding: '1rem' }} />
   ```

3. **Don't use wrong pillar**
   ```tsx
   // ❌ WRONG - Using border token for background
   <div style={{ backgroundColor: border.subtle }} />

   // ✅ CORRECT - Use background token
   <div style={{ backgroundColor: background.light }} />
   ```

## Font Assets

### Trade Gothic (Primary Typeface)
- **Location**: `fonts/trade-gothic/`
- **Variants**: 17 .otf files
- **Weights**: Light (300), Regular (400), Semibold (600), Bold (700), Heavy (800)
- **Styles**: Standard, Condensed, Compressed
- **Usage**: Primary typeface for UI, body text, headings, labels

### Rift (Display Typeface)
- **Location**: `fonts/rift/`
- **Variants**: 10 .otf files
- **Weights**: Light (300), Regular (400), Medium (500), Demi (600), Bold (700)
- **Usage**: Display typeface for marketing headlines (used sparingly)

## Development

### Build

```bash
npm run build
```

Compiles TypeScript to JavaScript in the `dist/` folder.

### Generate CSS

```bash
npm run generate-css
```

Validates CSS token files.

## TypeScript Support

Full TypeScript support with exported types for all tokens:

```tsx
import type {
  Background,
  Text,
  Border,
  Icon,
  Typography,
  TypographyStyle,
  Elevation,
  Theme,
  ThemeId,
  Tokens,
} from '@almanac/adx';
```

## Architecture

### Token Hierarchy

```
Primitive Tokens (Internal Only)
  ↓ referenced by
Semantic Tokens (Public API)
  ↓ consumed by
UI Components
```

### Theme Adaptability

```
Semantic Token Name (constant)
  ↓ references
Primitive Value (changes per theme)
  ↓ results in
Theme-Specific Appearance
```

Example:
- `background.brand` always references "brand background"
- In FCMA theme: `background.brand` → `#5e9732` (green)
- In Rural 1st theme: `background.brand` → (Rural 1st color)

## TODO

- [ ] Get actual Rural 1st brand colors and update `src/tokens/primitives/colors.ts`
- [ ] Verify typography values against Figma specifications
- [ ] Build first set of React components using tokens
- [ ] Add utility functions if needed (token validators, CSS variable generators)
- [ ] Consider adding animation tokens (duration, easing)
- [ ] Consider adding responsive breakpoint tokens

## Documentation

- [Design Token Structure](./design-token-structure.md) - Comprehensive documentation of the token architecture

## Support

For questions or issues, please contact the Almanac DX team.

---

**Version**: 0.1.0
**License**: UNLICENSED (Private)
