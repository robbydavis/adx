/**
 * Semantic Typography Tokens
 *
 * Typography styles define the complete typographic system across five semantic categories:
 * Display, Eyebrow, Heading, Label, and Paragraph.
 * Source: Figma → Typography page (node 13722:1208)
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
 * Display styles are typically the largest text on the screen,
 * reserved for short, important text or numerals.
 * Font: Rift, Bold (700)
 */
export const display = {
  /** display-xl — 104px / 44px line-height, Rift 700 */
  xl: {
    fontFamily: fontFamilies.rift,
    fontSize: fontSizes[104],
    fontWeight: fontWeights.bold,
    lineHeight: '2.75rem',
    letterSpacing: '-0.06rem',
  },

  /** display-l — 96px / 80px line-height, Rift 700 */
  l: {
    fontFamily: fontFamilies.rift,
    fontSize: fontSizes[96],
    fontWeight: fontWeights.bold,
    lineHeight: '5rem',
    letterSpacing: '-0.11rem',
  },

  /** display-m — 72px / 64px line-height, Rift 700 */
  m: {
    fontFamily: fontFamilies.rift,
    fontSize: fontSizes[72],
    fontWeight: fontWeights.bold,
    lineHeight: '4rem',
    letterSpacing: '-0.08rem',
  },

  /** display-m-mobile — 64px / 56px line-height, Rift 700 */
  mMobile: {
    fontFamily: fontFamilies.rift,
    fontSize: fontSizes[64],
    fontWeight: fontWeights.bold,
    lineHeight: '3.5rem',
    letterSpacing: '-0.08rem',
  },

  /** display-s — 56px / 48px line-height, Rift 700 */
  s: {
    fontFamily: fontFamilies.rift,
    fontSize: fontSizes[56],
    fontWeight: fontWeights.bold,
    lineHeight: '2.5rem',
    letterSpacing: '-0.07rem',
  },

  /** display-xs — 48px / 44px line-height, Rift 700 */
  xs: {
    fontFamily: fontFamilies.rift,
    fontSize: fontSizes[48],
    fontWeight: fontWeights.bold,
    lineHeight: '1.75rem',
    letterSpacing: '-0.06rem',
  },
} as const;

/**
 * EYEBROW STYLES
 *
 * Eyebrow styles are often used as a single-line lead-in above a main
 * headline or section title to provide additional context or categorization.
 * Font: Rift for L/M/S, Trade Gothic for XS
 */
export const eyebrow = {
  /** eyebrow-l — 28px / 28px line-height, Rift 600 */
  l: {
    fontFamily: fontFamilies.rift,
    fontSize: fontSizes[28],
    fontWeight: fontWeights.semibold,
    lineHeight: '1.75rem',
    letterSpacing: '-0.0175rem',
  },

  /** eyebrow-m — 24px / 24px line-height, Rift 500 */
  m: {
    fontFamily: fontFamilies.rift,
    fontSize: fontSizes[24],
    fontWeight: fontWeights.medium,
    lineHeight: '1.5rem',
    letterSpacing: '-0.015rem',
  },

  /** eyebrow-s — 20px / 20px line-height, Rift 500 */
  s: {
    fontFamily: fontFamilies.rift,
    fontSize: fontSizes[20],
    fontWeight: fontWeights.medium,
    lineHeight: '1.25rem',
    letterSpacing: '-0.0125rem',
  },

  /** eyebrow-xs — 14px / 16px line-height, Trade Gothic 700, uppercase */
  xs: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[14],
    fontWeight: fontWeights.bold,
    lineHeight: '1rem',
    letterSpacing: '0',
    textTransform: textTransform.uppercase,
  },
} as const;

/**
 * HEADING STYLES
 *
 * Heading styles are used to break up content into sections
 * and provide a clear hierarchy of information.
 * Font: Trade Gothic Next LT Pro
 */
export const heading = {
  /** heading-xl — 40px / 44px line-height, Trade Gothic 700 */
  xl: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[40],
    fontWeight: fontWeights.bold,
    lineHeight: '2.75rem',
    letterSpacing: '-0.025rem',
  },

  /** heading-xl-light — 40px / 44px line-height, Trade Gothic 400 */
  xlLight: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[40],
    fontWeight: fontWeights.regular,
    lineHeight: '2.75rem',
    letterSpacing: '-0.025rem',
  },

  /** heading-l — 32px / 40px line-height, Trade Gothic 700 */
  l: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[32],
    fontWeight: fontWeights.bold,
    lineHeight: '2.5rem',
    letterSpacing: '0',
  },

  /** heading-l-light — 32px / 40px line-height, Trade Gothic 400 */
  lLight: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[32],
    fontWeight: fontWeights.regular,
    lineHeight: '2.5rem',
    letterSpacing: '0',
  },

  /** heading-m — 28px / 36px line-height, Trade Gothic 700 */
  m: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[28],
    fontWeight: fontWeights.bold,
    lineHeight: '2.25rem',
    letterSpacing: '0',
  },

  /** heading-m-mobile — 28px / 36px line-height, Trade Gothic 700 */
  mMobile: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[28],
    fontWeight: fontWeights.bold,
    lineHeight: '2.25rem',
    letterSpacing: '0',
  },

  /** heading-m-light-mobile — 28px / 36px line-height, Trade Gothic 400 */
  mLightMobile: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[28],
    fontWeight: fontWeights.regular,
    lineHeight: '2.25rem',
    letterSpacing: '0',
  },

  /** heading-s — 24px / 32px line-height, Trade Gothic 700 */
  s: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[24],
    fontWeight: fontWeights.bold,
    lineHeight: '2rem',
    letterSpacing: '0',
  },

  /** heading-s-light — 24px / 32px line-height, Trade Gothic 400 */
  sLight: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[24],
    fontWeight: fontWeights.regular,
    lineHeight: '2rem',
    letterSpacing: '0',
  },

  /** heading-xs — 20px / 28px line-height, Trade Gothic 700 */
  xs: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[20],
    fontWeight: fontWeights.bold,
    lineHeight: '1.75rem',
    letterSpacing: '0',
  },

  /** heading-xxs — 16px / 24px line-height, Trade Gothic 700 */
  xxs: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[16],
    fontWeight: fontWeights.bold,
    lineHeight: '1.5rem',
    letterSpacing: '0',
  },
} as const;

/**
 * LABEL STYLES
 *
 * Label styles are generally short, straightforward, and descriptive,
 * providing essential information. Used to identify or name elements
 * within a user interface, such as buttons, form fields, or other UI components.
 * Font: Trade Gothic Next LT Pro
 *
 * Note: Each of these styles supports regular (400) and bold (800) weights.
 * Default weights have been assigned per Figma.
 */
export const label = {
  /** label-xl — 20px / 24px line-height, Trade Gothic 400 */
  xl: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[20],
    fontWeight: fontWeights.regular,
    lineHeight: '1.5rem',
    letterSpacing: '0',
  },

  /** label-l — 18px / 24px line-height, Trade Gothic 400 */
  l: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[18],
    fontWeight: fontWeights.regular,
    lineHeight: '1.5rem',
    letterSpacing: '0',
  },

  /** label-m — 16px / 20px line-height, Trade Gothic 800 */
  m: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[16],
    fontWeight: fontWeights.heavy,
    lineHeight: '1.25rem',
    letterSpacing: '0',
  },

  /** label-s — 14px / 16px line-height, Trade Gothic 700 */
  s: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[14],
    fontWeight: fontWeights.bold,
    lineHeight: '1rem',
    letterSpacing: '0',
  },

  /** label-xs — 12px / 16px line-height, Trade Gothic 700 */
  xs: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[12],
    fontWeight: fontWeights.bold,
    lineHeight: '1rem',
    letterSpacing: '0',
  },
} as const;

/**
 * PARAGRAPH STYLES
 *
 * Paragraph styles are typically for longer blocks of text,
 * used for mostly text-based content.
 * Font: Trade Gothic Next LT Pro (XS uses Condensed variant)
 *
 * Note: Each of these styles supports regular (400) and bold (800).
 * Italic and underline are also supported.
 */
export const paragraph = {
  /** paragraph-xxl — 24px / 28px line-height, Trade Gothic 400 */
  xxl: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[24],
    fontWeight: fontWeights.regular,
    lineHeight: '1.75rem',
    letterSpacing: '0',
  },

  /** paragraph-xl — 20px / 24px line-height, Trade Gothic 400 */
  xl: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[20],
    fontWeight: fontWeights.regular,
    lineHeight: '1.5rem',
    letterSpacing: '0',
  },

  /** paragraph-l — 18px / 24px line-height, Trade Gothic 400 */
  l: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[18],
    fontWeight: fontWeights.regular,
    lineHeight: '1.5rem',
    letterSpacing: '0',
  },

  /** paragraph-m — 16px / 20px line-height, Trade Gothic 400 (default P) */
  m: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[16],
    fontWeight: fontWeights.regular,
    lineHeight: '1.25rem',
    letterSpacing: '0',
  },

  /** paragraph-s — 14px / 20px line-height, Trade Gothic 400 */
  s: {
    fontFamily: fontFamilies.tradeGothic,
    fontSize: fontSizes[14],
    fontWeight: fontWeights.regular,
    lineHeight: '1.25rem',
    letterSpacing: '0',
  },

  /** paragraph-xs — 12px / 16px line-height, Trade Gothic Next Condensed 700 */
  xs: {
    fontFamily: fontFamilies.tradeGothicCondensed,
    fontSize: fontSizes[12],
    fontWeight: fontWeights.bold,
    lineHeight: '1rem',
    letterSpacing: '0',
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
