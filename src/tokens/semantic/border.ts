/**
 * Semantic Border Tokens
 *
 * Border colors define borders for sections, containers, panels, and UI elements.
 * Used for visual separation, emphasis, and interactive states.
 *
 * ✅ USE THESE TOKENS in your components - they are the public API
 * ❌ NEVER use primitive tokens directly in components
 *
 * These semantic tokens reference primitive values but are named according to
 * their contextual purpose. They automatically adapt when themes change.
 */

import { neutral, systemColors } from '../primitives/colors';

/**
 * Border color tokens
 * Organized by emphasis level and usage context
 */
export const border = {
  /**
   * Reverse border - Borders on dark backgrounds
   * References: Neutral/0 (#ffffff)
   * Usage: Borders on reverse/dark backgrounds, dark-themed sections
   */
  reverse: neutral[0],

  /**
   * Subtle border - Light borders for containers and sections
   * References: Neutral/200 (#dee1e1)
   * Usage: Cards, panels, dividers, subtle separation (documented in base container)
   */
  subtle: neutral[200],

  /**
   * Dark border - Medium-emphasis borders
   * References: Neutral/500 (#929a9b)
   * Usage: Input fields, dropdowns, moderate emphasis
   */
  dark: neutral[500],

  /**
   * Strong border - High-contrast borders for emphasis
   * References: Neutral/900 (#273333)
   * Usage: Active states, strong emphasis, selected elements
   */
  strong: neutral[1100],

  /**
   * Brand border - Brand-colored borders for non-action items
   * ⚠️ THEME-AWARE: This value changes based on the active theme (FCMA/Rural 1st)
   * Default: Placeholder - will be overridden by theme
   * Usage: Brand-themed borders, callouts, featured elements
   */
  brand: neutral[500], // Placeholder - overridden by theme

  /**
   * Focus border - Border color for keyboard focus states
   * Always #c7e4f9 (blue-200) across all themes — not brand-colored
   * Usage: Focused inputs, buttons, interactive elements (via --focus-ring box-shadow)
   */
  focus: '#c7e4f9', // blue-200, Figma focus ring color

  /**
   * Success border - Borders for success states and positive elements
   * References: System success (#28a745)
   * Usage: Success notifications, positive validation states
   */
  success: systemColors.success,

  /**
   * Error border - Borders for error states and destructive elements
   * References: System error (#dc3545)
   * Usage: Error notifications, validation errors, destructive actions
   */
  error: systemColors.error,

  /**
   * Warning border - Borders for warning states and cautionary elements
   * References: System warning (#ffc107)
   * Usage: Warning notifications, caution states
   */
  warning: systemColors.warning,

  /**
   * Information border - Borders for informational elements
   * References: System info (#17a2b8)
   * Usage: Info notifications, contextual help elements
   */
  information: systemColors.info,

  /** Discovery border - References: purple-700 */
  discovery: systemColors.discovery,
} as const;

// Type export for TypeScript consumers
export type Border = typeof border;
