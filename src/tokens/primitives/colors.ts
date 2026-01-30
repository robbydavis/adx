/**
 * Primitive Color Tokens
 *
 * These are the raw, base color values used within Almanac.
 * Values verified against Figma source file (Almanac DX UI Kit).
 *
 * ⚠️ IMPORTANT: These primitive tokens should NEVER be used directly in UI components.
 * They are internal-only values that are referenced by semantic tokens.
 * Always use semantic tokens (background, text, border, icon) in your components.
 */

/**
 * Neutral color scale
 * Used as the foundation for most UI elements
 * Source: Figma → Semantic Color Variables → Background → Body
 */
export const neutral = {
  0: '#ffffff',      // White
  50: '#f9f9f9',     // Off-white (background-light)
  100: '#f3f4f4',    // Lightest gray (background-medium)
  200: '#dee1e1',    // Light gray (background-dark, border-subtle)
  300: '#c8cccc',    // Medium-light gray (background-darker)
  500: '#929a9b',    // Medium gray (background-disabled, text-tertiary)
  700: '#515e5f',    // Dark gray (text-secondary)
  1100: '#040404',   // Near-black (background-reverse, text-primary)
} as const;

/**
 * FCMA Brand Colors
 * Farm Credit Mid-America brand identity colors
 * Source: Figma → Semantic Color Variables → Background → Brand / Action
 *
 * Note: In Figma, the hover state (brand-500) is LIGHTER than primary (brand-600).
 */
export const fcmaBrand = {
  primary: '#5e9732',       // brand-600 - FCMA Green primary
  primaryHover: '#71b33c',  // brand-500 - FCMA Green hover (lighter)
  primaryDisabled: '#b8de9b', // brand-200 - FCMA Green disabled
  primaryLight: '#e4f2d8',  // brand-0 - FCMA Green subtle/light
} as const;

/**
 * Rural 1st Brand Colors
 * Source: Figma → R1st Mode variable definitions
 *
 * Primary and light values extracted from Figma.
 * Hover value calculated based on FCMA pattern (lighter shade).
 */
export const rural1stBrand = {
  primary: '#005b94',       // Rural 1st Blue - Primary brand color (from Figma)
  primaryHover: '#0070b8',  // Rural 1st Blue hover - lighter shade (calculated)
  primaryDisabled: '#99c4de', // Rural 1st Blue disabled (calculated)
  primaryLight: '#e5f5f8',  // Brand-R1st/0 - Light variant (from Figma)
} as const;

/**
 * System Status Colors
 * Used for feedback and messaging throughout the interface
 */
export const systemColors = {
  success: '#2bb656',       // green-600 - Success states
  successLight: '#d4edda',  // Light green - Success backgrounds
  error: '#c63434',         // red-800 - Error states
  errorHover: '#8d3c3e',    // Error hover
  errorLight: '#f8d7da',    // Light red - Error backgrounds
  errorDisabled: '#f3b4b4', // Error disabled backgrounds
  warning: '#dd9903',       // yellow-700 - Warning states
  warningLight: '#fff3cd',  // Light yellow - Warning backgrounds
  info: '#2079c3',          // blue-700 - Informational messaging
  infoHover: '#2b67d3',     // blue-600 - Info hover
  infoLight: '#d1ecf1',     // Light blue - Info backgrounds
  discovery: '#6f5ed3',     // purple-700 - Discovery states
  discoveryHover: '#8187ea', // purple-600 - Discovery hover
  discoveryLight: '#e8e5f8', // Light purple - Discovery backgrounds
} as const;

/**
 * Elevation Shadow Color
 * Base color used for all elevation shadows
 */
export const shadowColor = {
  base: 'rgba(4, 4, 4, 0.24)', // Neutral/1100 at 24% opacity
} as const;

/**
 * Neutral overlay color
 * Used for modal overlays and scrim backgrounds
 */
export const overlayColor = {
  base: 'rgba(4, 4, 4, 0.20)', // Neutral/1100 at 20% opacity
} as const;

/**
 * All primitive colors
 * Exported for internal use by semantic tokens and theme system
 */
export const primitiveColors = {
  neutral,
  fcmaBrand,
  rural1stBrand,
  systemColors,
  shadowColor,
  overlayColor,
} as const;

// Type exports for TypeScript consumers
export type Neutral = typeof neutral;
export type FcmaBrand = typeof fcmaBrand;
export type Rural1stBrand = typeof rural1stBrand;
export type SystemColors = typeof systemColors;
export type ShadowColor = typeof shadowColor;
export type OverlayColor = typeof overlayColor;
export type PrimitiveColors = typeof primitiveColors;
