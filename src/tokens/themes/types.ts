/**
 * Theme System Types
 *
 * Defines the structure for themes in the Almanac DX design system.
 * Themes enable brand-specific adaptations (FCMA vs Rural 1st) while
 * maintaining consistent functionality through semantic token names.
 */

/**
 * Theme identifiers
 * Used to specify which theme is active
 */
export type ThemeId = 'fcma' | 'rural-first';

/**
 * Brand color overrides
 * Each theme provides brand-specific color values that override
 * the placeholders in semantic tokens
 */
export interface ThemeColors {
  /**
   * Primary brand color
   * Used for brand identity, non-action brand elements
   */
  brand: string;

  /**
   * Brand hover state
   * Typically 15% darker than primary for interactive feedback
   */
  brandHover: string;

  /**
   * Light brand variant
   * Typically 90% lighter for backgrounds and subtle elements
   */
  brandLight: string;

  /**
   * Action/CTA color
   * Used for buttons and primary actions (often same as brand)
   */
  action: string;

  /**
   * Action hover state
   * Hover state for buttons and primary actions
   */
  actionHover: string;

  /**
   * Link color
   * Used for hyperlinks and clickable text (often same as brand)
   */
  link: string;

  /**
   * Link hover state
   * Hover state for hyperlinks
   */
  linkHover: string;

  /**
   * Focus color
   * Used for focus rings and keyboard navigation indicators
   */
  focus: string;
}

/**
 * Theme configuration
 * Complete theme definition with metadata and color overrides
 */
export interface Theme {
  /**
   * Unique theme identifier
   */
  id: ThemeId;

  /**
   * Human-readable theme name
   */
  name: string;

  /**
   * Brand-specific color overrides
   * These values override the placeholders in semantic tokens
   */
  colors: ThemeColors;
}

/**
 * Theme registry
 * Maps theme IDs to theme configurations
 */
export type ThemeRegistry = {
  [K in ThemeId]: Theme;
};
