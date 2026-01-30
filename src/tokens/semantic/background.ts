/**
 * Semantic Background Tokens
 *
 * Background colors define fills for pages, sections, containers, cards, panels,
 * and interactive elements throughout the interface.
 * Values verified against Figma source file (Almanac DX UI Kit).
 *
 * ✅ USE THESE TOKENS in your components - they are the public API
 * ❌ NEVER use primitive tokens directly in components
 */

import { neutral, systemColors, overlayColor } from '../primitives/colors';

/**
 * Background color tokens
 * Source: Figma → Semantic Color Variables → Background
 */
export const background = {
  /** Page background - References: Neutral/0 (#ffffff) */
  page: neutral[0],

  /** Primary background - Main container fill. References: Neutral/0 (#ffffff) */
  primary: neutral[0],

  /** Light background - Subtle variant. References: Neutral/050 (#f9f9f9) */
  light: neutral[50],

  /** Medium background - References: Neutral/100 (#f3f4f4) */
  medium: neutral[100],

  /** Dark background - References: Neutral/200 (#dee1e1) */
  dark: neutral[200],

  /** Darker background - References: Neutral/300 (#c8cccc) */
  darker: neutral[300],

  /** Disabled background - References: Neutral/500 (#929a9b) */
  disabled: neutral[500],

  /** Reverse background - Dark surface. References: Neutral/1100 (#040404) */
  reverse: neutral[1100],

  /** Overlay background - Modal scrims. References: Neutral/1100 at 20% */
  overlay: overlayColor.base,

  /**
   * Brand background - For non-action brand identity
   * ⚠️ THEME-AWARE: Overridden by theme
   */
  brand: neutral[500], // Placeholder - overridden by theme

  /**
   * Brand hover background
   * ⚠️ THEME-AWARE: Overridden by theme
   */
  brandHover: neutral[1100], // Placeholder - overridden by theme

  /**
   * Brand subtle background - Light brand tint
   * ⚠️ THEME-AWARE: Overridden by theme
   */
  brandSubtle: neutral[50], // Placeholder - overridden by theme

  /**
   * Action background - Buttons and CTAs
   * ⚠️ THEME-AWARE: Overridden by theme
   */
  action: neutral[500], // Placeholder - overridden by theme

  /**
   * Action hover background
   * ⚠️ THEME-AWARE: Overridden by theme
   */
  actionHover: neutral[1100], // Placeholder - overridden by theme

  /**
   * Action disabled background
   * ⚠️ THEME-AWARE: Overridden by theme
   */
  actionDisabled: neutral[200], // Placeholder - overridden by theme

  /** Action secondary background - References: Neutral/200 (#dee1e1) */
  actionSecondary: neutral[200],

  /** Action secondary hover - References: Neutral/300 (#c8cccc) */
  actionSecondaryHover: neutral[300],

  /** Success background - References: green-600 */
  success: systemColors.success,

  /** Success subtle background - References: green light */
  successSubtle: systemColors.successLight,

  /** Error background - References: red-800 */
  error: systemColors.error,

  /** Error hover background */
  errorHover: systemColors.errorHover,

  /** Error disabled background */
  errorDisabled: systemColors.errorDisabled,

  /** Error subtle background - References: error light */
  errorSubtle: systemColors.errorLight,

  /** Warning background - References: yellow-700 */
  warning: systemColors.warning,

  /** Warning subtle background - References: warning light */
  warningSubtle: systemColors.warningLight,

  /** Information background - References: blue-700 */
  information: systemColors.info,

  /** Information subtle background - References: info light */
  informationSubtle: systemColors.infoLight,

  /** Discovery background - References: purple-700 */
  discovery: systemColors.discovery,

  /** Discovery subtle background - References: discovery light */
  discoverySubtle: systemColors.discoveryLight,
} as const;

// Type export for TypeScript consumers
export type Background = typeof background;
