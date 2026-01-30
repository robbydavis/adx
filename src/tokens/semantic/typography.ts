/**
 * Semantic Typography Tokens
 *
 * Typography styles define the complete typographic system across five semantic categories:
 * Display, Eyebrow, Heading, Label, and Paragraph.
 *
 * ✅ USE THESE TOKENS in your components - they are the public API
 * ❌ NEVER use primitive typography values directly in components
 *
 * Each style returns a complete TypographyStyle object with all necessary properties.
 */

import {
  fontFamilies,
  fontWeights,
  fontSizes,
  lineHeights,
  letterSpacing,
  textTransform,
} from '../primitives/typography';

/**
 * Typography style structure
 * All typography tokens return this interface
 */
export interface TypographyStyle {
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
  textTransform?: string;
}

/**
 * DISPLAY STYLES
 *
 * Large headlines, hero text, and prominent display elements.
 * Font: Trade Gothic, Semibold, Uppercase
 * Line Height: 120%, Letter Spacing: -2%
 *
 * Note: Rift is the display typeface for marketing headlines when used sparingly.
 * These Trade Gothic styles are for standard application display text.
 */
export const display = {
  /**
   * Display XL - Largest display size
   * Size: 80px
   * Usage: Hero text, landing pages, major marketing moments
   */
  xl: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[80],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[120],
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.uppercase,
  },

  /**
   * Display LG
   * Size: 64px
   * Usage: Primary headlines, section heroes
   */
  lg: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[64],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[120],
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.uppercase,
  },

  /**
   * Display MD
   * Size: 56px
   * Usage: Large section headings
   */
  md: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[56],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[120],
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.uppercase,
  },

  /**
   * Display SM
   * Size: 48px
   * Usage: Medium section headings
   */
  sm: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[48],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[120],
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.uppercase,
  },

  /**
   * Display XS
   * Size: 40px
   * Usage: Smaller display text
   */
  xs: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[40],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[120],
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.uppercase,
  },

  /**
   * Display XXS - Smallest display size
   * Size: 32px
   * Usage: Compact display text, card headers
   */
  xxs: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[32],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[120],
    letterSpacing: letterSpacing.tight,
    textTransform: textTransform.uppercase,
  },
} as const;

/**
 * EYEBROW STYLES
 *
 * Small labels, category tags, and metadata.
 * Font: Trade Gothic, Semibold, Uppercase
 * Line Height: 100%, Letter Spacing: 0%
 */
export const eyebrow = {
  /**
   * Eyebrow LG
   * Size: 14px
   * Usage: Large category labels, primary tags
   */
  lg: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[14],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[100],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.uppercase,
  },

  /**
   * Eyebrow MD
   * Size: 12px
   * Usage: Standard category labels, metadata
   */
  md: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[12],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[100],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.uppercase,
  },

  /**
   * Eyebrow SM
   * Size: 10px
   * Usage: Small tags, compact metadata
   */
  sm: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[10],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[100],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.uppercase,
  },

  /**
   * Eyebrow XS - Smallest eyebrow
   * Size: 8px
   * Usage: Very small tags, micro labels
   */
  xs: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[8],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[100],
    letterSpacing: letterSpacing.normal,
    textTransform: textTransform.uppercase,
  },
} as const;

/**
 * HEADING STYLES
 *
 * Section headings and content hierarchy.
 * Font: Trade Gothic, Semibold, Title case
 * Progressive sizing from H1 (largest) to H6+ (smallest)
 */
export const heading = {
  /**
   * Heading 1 - Largest heading
   * Size: 40px, Line Height: 120%
   * Usage: Page titles, primary section headings
   */
  h1: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[40],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[120],
    letterSpacing: letterSpacing.tight,
  },

  /**
   * Heading 2
   * Size: 36px, Line Height: 120%
   * Usage: Major section headings
   */
  h2: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[36],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[120],
    letterSpacing: letterSpacing.tight,
  },

  /**
   * Heading 3
   * Size: 32px, Line Height: 130%
   * Usage: Sub-section headings
   */
  h3: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[32],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[130],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Heading 4
   * Size: 28px, Line Height: 130%
   * Usage: Content section headings
   */
  h4: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[28],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[130],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Heading 5
   * Size: 24px, Line Height: 140%
   * Usage: Card headings, component titles
   */
  h5: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[24],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[140],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Heading 6 - Smallest standard heading
   * Size: 20px, Line Height: 140%
   * Usage: Small component headings, list headers
   */
  h6: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[20],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights[140],
    letterSpacing: letterSpacing.normal,
  },
} as const;

/**
 * LABEL STYLES
 *
 * UI element labels, form labels, and button text.
 * Font: Trade Gothic, Regular or Medium
 * Small to very small sizes optimized for UI elements
 */
export const label = {
  /**
   * Label LG
   * Size: 18px, Weight: Medium
   * Usage: Large button text, prominent labels
   */
  lg: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[18],
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights[140],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Label MD
   * Size: 16px, Weight: Medium
   * Usage: Standard button text, form labels
   */
  md: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[16],
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights[140],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Label SM
   * Size: 14px, Weight: Medium
   * Usage: Small buttons, input labels, UI labels
   */
  sm: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[14],
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights[140],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Label XS - Smallest label
   * Size: 12px, Weight: Regular
   * Usage: Tiny labels, field hints, micro UI text
   */
  xs: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[12],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[140],
    letterSpacing: letterSpacing.normal,
  },
} as const;

/**
 * PARAGRAPH STYLES
 *
 * Body copy, descriptions, and content text.
 * Font: Trade Gothic, Regular
 * Line heights optimized per size for readability
 * Letter Spacing: 0%
 */
export const paragraph = {
  /**
   * Paragraph XL - Largest body text
   * Size: 24px, Line Height: 150%
   * Usage: Lead paragraphs, featured content
   */
  xl: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[24],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[150],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Paragraph LG
   * Size: 20px, Line Height: 150%
   * Usage: Large body text, introductions
   */
  lg: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[20],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[150],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Paragraph MD - Default body text
   * Size: 18px, Line Height: 150%
   * Usage: Standard paragraphs, content text
   */
  md: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[18],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[150],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Paragraph SM
   * Size: 16px, Line Height: 160%
   * Usage: Smaller body text, descriptions
   */
  sm: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[16],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[160],
    letterSpacing: letterSpacing.normal,
  },

  /**
   * Paragraph XS - Smallest body text
   * Size: 14px, Line Height: 160%
   * Usage: Small descriptions, captions, metadata
   */
  xs: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[14],
    fontWeight: fontWeights.regular,
    lineHeight: lineHeights[160],
    letterSpacing: letterSpacing.normal,
  },
} as const;

/**
 * All semantic typography tokens
 */
export const typography = {
  display,
  eyebrow,
  heading,
  label,
  paragraph,
} as const;

// Type exports for TypeScript consumers
export type Display = typeof display;
export type Eyebrow = typeof eyebrow;
export type Heading = typeof heading;
export type Label = typeof label;
export type Paragraph = typeof paragraph;
export type Typography = typeof typography;
