/**
 * Primitive Typography Tokens
 *
 * These are the raw typography values used within Almanac.
 *
 * ⚠️ IMPORTANT: These primitive tokens should NEVER be used directly in UI components.
 * They are internal-only values that are referenced by semantic typography tokens.
 * Always use semantic typography tokens (display, eyebrow, heading, label, paragraph) in your components.
 */

/**
 * Font Families
 * Brand fonts with web-safe fallback stacks
 */
export const fontFamilies = {
  tradeGothic: '"Trade Gothic Next LT Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  rift: '"Rift", Georgia, "Times New Roman", Times, serif',
} as const;

/**
 * Font Weights
 * Mapping semantic weight names to numeric values
 * Corresponds to Trade Gothic variant availability
 */
export const fontWeights = {
  light: 300,     // Trade Gothic Lt
  regular: 400,   // Trade Gothic Rg
  medium: 500,    // Used for labels and UI elements
  semibold: 600,  // Primary weight for headings and emphasis
  bold: 700,      // Trade Gothic Bd
  heavy: 800,     // Trade Gothic Hv
} as const;

/**
 * Font Sizes
 * Complete scale from smallest to largest
 * Based on Figma design system specifications
 */
export const fontSizes = {
  8: '0.5rem',     // 8px - Eyebrow XS
  10: '0.625rem',  // 10px - Eyebrow SM
  12: '0.75rem',   // 12px - Eyebrow MD, Label XS
  14: '0.875rem',  // 14px - Eyebrow LG, Label SM
  16: '1rem',      // 16px - Paragraph SM, Label MD
  18: '1.125rem',  // 18px - Paragraph MD, Label LG
  20: '1.25rem',   // 20px - Paragraph LG, Heading H6
  24: '1.5rem',    // 24px - Paragraph XL, Heading H5
  28: '1.75rem',   // 28px - Heading H4
  32: '2rem',      // 32px - Heading H3, Display XXS
  36: '2.25rem',   // 36px - Heading H2
  40: '2.5rem',    // 40px - Heading H1, Display XS
  48: '3rem',      // 48px - Display SM
  56: '3.5rem',    // 56px - Display MD
  64: '4rem',      // 64px - Display LG
  80: '5rem',      // 80px - Display XL
} as const;

/**
 * Line Heights
 * Percentage-based line heights for optimal readability
 */
export const lineHeights = {
  100: '100%',  // 1.0 - Tight, used for eyebrow styles
  110: '110%',  // 1.1 - Very tight
  120: '120%',  // 1.2 - Display text
  130: '130%',  // 1.3 - Headings
  140: '140%',  // 1.4 - Large body text
  150: '150%',  // 1.5 - Default body text
  160: '160%',  // 1.6 - Loose body text
} as const;

/**
 * Letter Spacing
 * Percentage-based letter spacing adjustments
 */
export const letterSpacing = {
  tight: '-0.02em',  // -2% - Display text
  normal: '0',       // 0% - Default
  loose: '0.02em',   // +2% - Increased spacing
} as const;

/**
 * Text Transform
 * Used for specific style categories
 */
export const textTransform = {
  none: 'none',
  uppercase: 'uppercase',
  titlecase: 'capitalize',
} as const;

/**
 * All primitive typography values
 * Exported for internal use by semantic tokens
 */
export const primitiveTypography = {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacing,
  textTransform,
} as const;

// Type exports for TypeScript consumers
export type FontFamilies = typeof fontFamilies;
export type FontWeights = typeof fontWeights;
export type FontSizes = typeof fontSizes;
export type LineHeights = typeof lineHeights;
export type LetterSpacing = typeof letterSpacing;
export type TextTransform = typeof textTransform;
export type PrimitiveTypography = typeof primitiveTypography;
