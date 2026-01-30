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

  /** Success background - References: System success light (#d4edda) */
  success: systemColors.successLight,

  /** Error background - References: System error light (#f8d7da) */
  error: systemColors.errorLight,

  /** Warning background - References: System warning light (#fff3cd) */
  warning: systemColors.warningLight,

  /** Information background - References: System info light (#d1ecf1) */
  information: systemColors.infoLight,
} as const;

// Type export for TypeScript consumers
export type Background = typeof background;
