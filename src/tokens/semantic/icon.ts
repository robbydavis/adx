/**
 * Semantic Icon Tokens
 *
 * Icon colors define fills for iconography throughout the interface.
 * Icons should use these semantic colors to maintain consistency with
 * surrounding text and UI elements.
 *
 * ✅ USE THESE TOKENS in your components - they are the public API
 * ❌ NEVER use primitive tokens directly in components
 *
 * These semantic tokens reference primitive values but are named according to
 * their contextual purpose. They automatically adapt when themes change.
 */

import { neutral, systemColors } from '../primitives/colors';

/**
 * Icon color tokens
 * Organized by emphasis level and usage context
 */
export const icon = {
  /**
   * Subtle icon - Low-emphasis iconography
   * References: Neutral/500 (#929a9b)
   * Usage: Secondary icons, decorative icons, supporting iconography
   */
  subtle: neutral[500],

  /**
   * Dark icon - High-emphasis iconography
   * References: Neutral/900 (#273333)
   * Usage: Primary icons, important actions, main navigation icons
   */
  dark: neutral[1100],

  /**
   * Reverse icon - Icons on dark backgrounds
   * References: Neutral/0 (#ffffff)
   * Usage: Icons on reverse/dark backgrounds, dark-themed sections
   */
  reverse: neutral[0],

  /**
   * Brand icon - Brand-colored icons for static elements
   * ⚠️ THEME-AWARE: This value changes based on the active theme (FCMA/Rural 1st)
   * Default: Placeholder - will be overridden by theme
   * Usage: Brand identity icons, themed decorative elements
   */
  brand: neutral[500], // Placeholder - overridden by theme

  /**
   * Link icon - Brand-colored icons for links and interactive elements
   * ⚠️ THEME-AWARE: This value changes based on the active theme
   * Default: Placeholder - will be overridden by theme
   * Usage: Icons in links, clickable icon buttons, navigation
   */
  link: neutral[500], // Placeholder - overridden by theme

  /**
   * Disabled icon - Icons for disabled interactive elements
   * References: Neutral/300 (#c8cccc)
   * Usage: Disabled buttons, inactive navigation items, unavailable actions
   */
  disabled: neutral[300],

  /**
   * Success icon - Icons for success states and positive elements
   * References: System success (#28a745)
   * Usage: Success indicators, checkmarks, positive feedback icons
   */
  success: systemColors.success,

  /**
   * Error icon - Icons for error states and destructive elements
   * References: System error (#dc3545)
   * Usage: Error indicators, alert icons, destructive action warnings
   */
  error: systemColors.error,

  /**
   * Warning icon - Icons for warning states and cautionary elements
   * References: System warning (#ffc107)
   * Usage: Warning indicators, caution icons, attention markers
   */
  warning: systemColors.warning,

  /**
   * Information icon - Icons for informational elements
   * References: System info (#17a2b8)
   * Usage: Info indicators, help icons, contextual tips
   */
  information: systemColors.info,
} as const;

// Type export for TypeScript consumers
export type Icon = typeof icon;
