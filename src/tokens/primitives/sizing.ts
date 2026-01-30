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
  2: '0.125rem',  // 2px - Hairline spacing
  4: '0.25rem',   // 4px - Extra tight
  8: '0.5rem',    // 8px - Tight (base unit)
  12: '0.75rem',  // 12px - Compact
  16: '1rem',     // 16px - Default
  20: '1.25rem',  // 20px - Comfortable
  24: '1.5rem',   // 24px - Spacious (documented in Size/600)
  32: '2rem',     // 32px - Extra spacious
  40: '2.5rem',   // 40px - Loose
  48: '3rem',     // 48px - Very loose
  64: '4rem',     // 64px - Extra loose
  80: '5rem',     // 80px - Maximum standard spacing
  96: '6rem',     // 96px - Section spacing
  128: '8rem',    // 128px - Large section spacing
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
