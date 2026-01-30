/**
 * Layout Tokens
 *
 * Responsive page layout framework tokens as defined in Figma
 * (Almanac DX UI Kit — Page Layout Framework).
 *
 * ⚠️ IMPORTANT: All values are sourced directly from Figma.
 * Do not add, rename, or modify tokens without a corresponding Figma change.
 */

/**
 * Breakpoints define the four responsive tiers.
 * Values represent the minimum width for each tier (in px).
 *
 * - desktop: 1280px and above
 * - tablet: 1024px to 1279px
 * - smallTablet: 768px to 1023px
 * - phone: 0px to 767px
 */
export const breakpoints = {
  desktop: 1280,
  tablet: 1024,
  smallTablet: 768,
  phone: 0,
} as const;

/**
 * Media query strings for each breakpoint tier.
 * Ready to use in CSS-in-JS or matchMedia calls.
 */
export const mediaQueries = {
  desktop: '(min-width: 1280px)',
  tablet: '(min-width: 1024px) and (max-width: 1279px)',
  smallTablet: '(min-width: 768px) and (max-width: 1023px)',
  phone: '(max-width: 767px)',
} as const;

/**
 * Content max-width wrappers.
 * These constrain content within sections to readable widths.
 * Each content tier uses the same horizontal padding per breakpoint.
 */
export const contentMaxWidths = {
  /** 1200px — widest content container */
  l: 1200,
  /** 1024px — medium content container */
  m: 1024,
  /** 768px — narrow content container */
  s: 768,
  /** 500px — narrowest content container */
  xs: 500,
} as const;

/**
 * Navigation dimensions.
 * The top bar and side navigation have fixed dimensions across breakpoints.
 * On phone, the side nav is replaced by a mobile nav trigger in the top bar.
 */
export const nav = {
  /** Top bar height in px — consistent across all breakpoints */
  topBarHeight: 52,
  /** Side nav width when collapsed (icon-only) */
  sideNavCollapsed: 64,
  /** Side nav width when expanded (icon + label) */
  sideNavOpen: 200,
} as const;

/**
 * Section padding per breakpoint tier.
 * Sections are full-width containers within `<main>` or `<footer>`.
 *
 * - vertical: top and bottom padding on the section itself
 * - horizontal: left and right padding on the content wrapper inside
 */
export const sectionPadding = {
  desktop: {
    vertical: '2.5rem',   // 40px
    horizontal: '1.5rem', // 24px
  },
  tablet: {
    vertical: '2.5rem',   // 40px
    horizontal: '1.5rem', // 24px
  },
  smallTablet: {
    vertical: '1.5rem',   // 24px
    horizontal: '1rem',   // 16px
  },
  phone: {
    vertical: '1.5rem',   // 24px
    horizontal: '1rem',   // 16px
  },
} as const;

/**
 * Combined layout token export.
 */
export const layout = {
  breakpoints,
  mediaQueries,
  contentMaxWidths,
  nav,
  sectionPadding,
} as const;

// Type exports
export type Breakpoints = typeof breakpoints;
export type MediaQueries = typeof mediaQueries;
export type ContentMaxWidths = typeof contentMaxWidths;
export type Nav = typeof nav;
export type SectionPadding = typeof sectionPadding;
export type Layout = typeof layout;
