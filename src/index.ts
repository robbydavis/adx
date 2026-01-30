/**
 * Almanac DX Design Tokens
 *
 * Production-ready design token system with FCMA and Rural 1st theming support.
 *
 * ## Public API
 *
 * This is the main entry point that exports ONLY semantic tokens and utilities.
 * Primitive tokens are internal-only and should NEVER be imported directly.
 *
 * ### Semantic Tokens (The Four Pillars)
 * - background: Page, container, and element fills
 * - text: Text colors for all contexts
 * - border: Border colors and focus states
 * - icon: Icon fills and states
 *
 * ### Additional Semantic Tokens
 * - typography: Complete typographic system (Display, Eyebrow, Heading, Label, Paragraph)
 * - elevation: Shadow styles for visual depth
 *
 * ### Theme System
 * - themes: Theme registry with FCMA and Rural 1st configurations
 * - ThemeProvider: React context provider for theme management
 * - useTheme: Hook to access current theme
 * - useTokens: Hook to access all semantic tokens
 *
 * ### CSS Variables
 * Import the CSS file to use tokens as CSS custom properties:
 * ```
 * import '@almanac/design-tokens/dist/tokens/styles/index.css';
 * ```
 *
 * ## Usage Examples
 *
 * ### TypeScript Tokens
 * ```tsx
 * import { background, text, typography } from '@almanac/design-tokens';
 *
 * const Button = () => (
 *   <button style={{
 *     backgroundColor: background.action,
 *     color: text.reverse,
 *     ...typography.label.md,
 *   }}>
 *     Click Me
 *   </button>
 * );
 * ```
 *
 * ### CSS Variables
 * ```css
 * .button {
 *   background-color: var(--background-action);
 *   color: var(--text-reverse);
 *   font-family: var(--font-family-trade-gothic);
 *   font-size: var(--font-size-16);
 *   font-weight: var(--font-weight-medium);
 * }
 * ```
 *
 * ### Theme Provider
 * ```tsx
 * import { ThemeProvider } from '@almanac/design-tokens';
 *
 * function App() {
 *   return (
 *     <ThemeProvider initialTheme="fcma">
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 *
 * ## Critical Guidelines
 *
 * ✅ DO:
 * - Use semantic tokens in all components
 * - Use tokens that match element type (background for fills, text for text, etc.)
 * - Use CSS variables for runtime theming
 * - Wrap app in ThemeProvider for React applications
 *
 * ❌ DON'T:
 * - Import primitive tokens directly
 * - Hardcode color or size values
 * - Use wrong pillar (e.g., border token for background)
 * - Skip ThemeProvider when using theme-aware tokens
 */

// ============================================================================
// SEMANTIC TOKENS - The Four Pillars
// ============================================================================

export { background } from './tokens/semantic/background';
export type { Background } from './tokens/semantic/background';

export { text } from './tokens/semantic/text';
export type { Text } from './tokens/semantic/text';

export { border } from './tokens/semantic/border';
export type { Border } from './tokens/semantic/border';

export { icon } from './tokens/semantic/icon';
export type { Icon } from './tokens/semantic/icon';

// ============================================================================
// SEMANTIC TOKENS - Typography & Elevation
// ============================================================================

export { typography, display, eyebrow, heading, label, paragraph } from './tokens/semantic/typography';
export type {
  Typography,
  TypographyStyle,
  Display,
  Eyebrow,
  Heading,
  Label,
  Paragraph,
} from './tokens/semantic/typography';

export { elevation, elevationBase } from './tokens/semantic/elevation';
export type { Elevation, ElevationBase } from './tokens/semantic/elevation';

// ============================================================================
// SEMANTIC TOKENS - Layout
// ============================================================================

export {
  layout,
  breakpoints,
  mediaQueries,
  contentMaxWidths,
  nav,
  sectionPadding,
} from './tokens/semantic/layout';
export type {
  Layout,
  Breakpoints,
  MediaQueries,
  ContentMaxWidths,
  Nav,
  SectionPadding,
} from './tokens/semantic/layout';

// ============================================================================
// THEME SYSTEM
// ============================================================================

export { themes, getTheme, defaultTheme, fcmaTheme, rural1stTheme } from './tokens/themes';
export type { Theme, ThemeId, ThemeColors, ThemeRegistry } from './tokens/themes';

// ============================================================================
// REACT UTILITIES
// ============================================================================

export { ThemeProvider, ThemeContext } from './react/ThemeProvider';
export type { ThemeProviderProps, ThemeContextValue } from './react/ThemeProvider';

export { useTheme } from './react/useTheme';
export { useTokens } from './react/useTokens';
export type { Tokens } from './react/useTokens';

export { Button } from './react/Button';
export type { ButtonProps } from './react/Button';

// ============================================================================
// NOTE: Primitives are NOT exported
// ============================================================================
//
// Primitive tokens (colors, typography, sizing) are internal-only.
// They should NEVER be imported directly in components.
//
// ❌ WRONG: import { neutral } from '@almanac/design-tokens/primitives';
// ✅ CORRECT: import { background, text } from '@almanac/design-tokens';
