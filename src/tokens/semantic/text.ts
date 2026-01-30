/**
 * Semantic Text Tokens
 *
 * Text colors define text fills for various states and contexts throughout
 * the interface, including body text, links, and messaging.
 *
 * ✅ USE THESE TOKENS in your components - they are the public API
 * ❌ NEVER use primitive tokens directly in components
 *
 * These semantic tokens reference primitive values but are named according to
 * their contextual purpose. They automatically adapt when themes change.
 */

import { neutral, systemColors } from '../primitives/colors';

/**
 * Text color tokens
 * Organized by usage context and emphasis level
 */
export const text = {
  /**
   * Primary text - Main body text and high-emphasis content
   * References: Neutral/900 (#273333)
   * Usage: Paragraphs, headlines, primary labels
   */
  primary: neutral[1100],

  /**
   * Secondary text - Supporting text with reduced emphasis
   * References: Neutral/500 (#929a9b)
   * Usage: Descriptions, metadata, secondary labels
   */
  secondary: neutral[500],

  /**
   * Tertiary text - Low-emphasis text for minimal prominence
   * References: Neutral/300 (#c8cccc)
   * Usage: Placeholders, hints, disabled text
   */
  tertiary: neutral[300],

  /**
   * Reverse text - Text for use on dark backgrounds
   * References: Neutral/0 (#ffffff)
   * Usage: Text on reverse backgrounds or dark surfaces
   */
  reverse: neutral[0],

  /**
   * Brand text - Brand-colored text for identity and emphasis
   * ⚠️ THEME-AWARE: This value changes based on the active theme (FCMA/Rural 1st)
   * Default: Placeholder - will be overridden by theme
   * Usage: Brand callouts, themed headers, marketing content
   */
  brand: neutral[500], // Placeholder - overridden by theme

  /**
   * Link text - Text color for hyperlinks in default state
   * ⚠️ THEME-AWARE: This value changes based on the active theme
   * Default: Placeholder - will be overridden by theme
   * Usage: Hyperlinks, clickable text elements
   */
  link: neutral[500], // Placeholder - overridden by theme

  /**
   * Link hover text - Text color for hyperlinks in hover state
   * ⚠️ THEME-AWARE: This value changes based on the active theme
   * Default: Placeholder - will be overridden by theme
   * Usage: Hyperlinks on hover/focus
   */
  linkHover: neutral[1100], // Placeholder - overridden by theme

  /**
   * Disabled text - Text for disabled interactive elements
   * References: Neutral/300 (#c8cccc)
   * Usage: Disabled buttons, inputs, and interactive elements
   */
  disabled: neutral[300],

  /**
   * Success text - Text for success states and positive messaging
   * References: System success (#28a745)
   * Usage: Success messages, positive feedback, completion states
   */
  success: systemColors.success,

  /**
   * Error text - Text for error states and destructive messaging
   * References: System error (#dc3545)
   * Usage: Error messages, validation errors, destructive actions
   */
  error: systemColors.error,

  /**
   * Warning text - Text for warning states and cautionary messaging
   * References: System warning (#ffc107)
   * Usage: Warning messages, caution notices, attention states
   */
  warning: systemColors.warning,

  /**
   * Information text - Text for informational messaging
   * References: System info (#17a2b8)
   * Usage: Info messages, tips, contextual help
   */
  information: systemColors.info,
} as const;

// Type export for TypeScript consumers
export type Text = typeof text;
