/**
 * Primitive Sizing Tokens
 *
 * These are the raw sizing values used within Almanac.
 *
 * ⚠️ IMPORTANT: These primitive tokens should NEVER be used directly in UI components.
 * They are internal-only values that are referenced by semantic tokens and components.
 */

/**
 * Spacing Scale
 * 8px-based rhythm for consistent spacing throughout the interface
 * Provides flexibility for tight to very loose spacing
 */
export const spacing = {
  0: '0',         // 0px - No spacing
  2: '0.125rem',  // 2px - size-50
  4: '0.25rem',   // 4px - size-100
  8: '0.5rem',    // 8px - size-200
  10: '0.625rem', // 10px - size-250
  12: '0.75rem',  // 12px - size-300
  16: '1rem',     // 16px - size-400
  20: '1.25rem',  // 20px - size-500
  24: '1.5rem',   // 24px - size-600
  32: '2rem',     // 32px - size-800
  40: '2.5rem',   // 40px - size-1000
  48: '3rem',     // 48px - size-1200
  56: '3.5rem',   // 56px - size-1400
  64: '4rem',     // 64px - size-1600
  72: '4.5rem',   // 72px - size-1800
  80: '5rem',     // 80px
  88: '5.5rem',   // 88px - size-2200
  96: '6rem',     // 96px - size-2400
  120: '7.5rem',  // 120px - size-3000
  128: '8rem',    // 128px
} as const;

/**
 * Border Radius
 * Consistent corner rounding values
 */
export const borderRadius = {
  none: '0',           // 0px - Sharp corners
  sm: '0.125rem',      // 2px - Subtle rounding
  md: '0.25rem',       // 4px - Standard rounding
  lg: '0.5rem',        // 8px - Pronounced rounding
  xl: '0.75rem',       // 12px - Heavy rounding
  '2xl': '1rem',       // 16px - Extra heavy rounding
  '3xl': '1.25rem',    // 20px
  '4xl': '1.5rem',     // 24px
  '5xl': '2rem',       // 32px
  full: '9999px',      // Pill shape - fully rounded
} as const;

/**
 * Border Widths
 * Standard border thickness values
 */
export const borderWidth = {
  none: '0',          // 0px - No border
  thin: '1px',        // 1px - Hairline border (default)
  medium: '2px',      // 2px - Standard border
  thick: '4px',       // 4px - Heavy border (focus states)
} as const;

/**
 * All primitive sizing values
 * Exported for internal use by semantic tokens and components
 */
export const primitiveSizing = {
  spacing,
  borderRadius,
  borderWidth,
} as const;

// Type exports for TypeScript consumers
export type Spacing = typeof spacing;
export type BorderRadius = typeof borderRadius;
export type BorderWidth = typeof borderWidth;
export type PrimitiveSizing = typeof primitiveSizing;
