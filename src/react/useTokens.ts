/**
 * useTokens Hook
 *
 * Hook that returns all semantic design tokens.
 * Provides type-safe access to the Four Pillars (Background, Text, Border, Icon)
 * plus Typography and Elevation tokens.
 *
 * Usage:
 * ```tsx
 * import { useTokens } from '@almanac/design-tokens';
 *
 * function MyComponent() {
 *   const tokens = useTokens();
 *
 *   return (
 *     <div
 *       style={{
 *         backgroundColor: tokens.background.primary,
 *         color: tokens.text.primary,
 *         borderColor: tokens.border.subtle,
 *         boxShadow: tokens.elevation[200],
 *       }}
 *     >
 *       <h1 style={{
 *         fontFamily: tokens.typography.heading.h1.fontFamily,
 *         fontSize: tokens.typography.heading.h1.fontSize,
 *         fontWeight: tokens.typography.heading.h1.fontWeight,
 *       }}>
 *         Hello World
 *       </h1>
 *     </div>
 *   );
 * }
 * ```
 */

import { background } from '../tokens/semantic/background';
import { text } from '../tokens/semantic/text';
import { border } from '../tokens/semantic/border';
import { icon } from '../tokens/semantic/icon';
import { typography } from '../tokens/semantic/typography';
import { elevation } from '../tokens/semantic/elevation';

/**
 * All semantic tokens organized by category
 */
export interface Tokens {
  /**
   * Background tokens - Page, container, and element fills
   */
  background: typeof background;

  /**
   * Text tokens - Text colors for all contexts
   */
  text: typeof text;

  /**
   * Border tokens - Border colors and focus states
   */
  border: typeof border;

  /**
   * Icon tokens - Icon fills and states
   */
  icon: typeof icon;

  /**
   * Typography tokens - Complete typographic system
   * Includes: display, eyebrow, heading, label, paragraph
   */
  typography: typeof typography;

  /**
   * Elevation tokens - Shadow styles for visual depth
   */
  elevation: typeof elevation;
}

/**
 * Hook to access all design tokens
 *
 * Returns an object containing all semantic tokens organized by the Four Pillars
 * (background, text, border, icon) plus typography and elevation.
 *
 * @returns Object with all semantic design tokens
 */
export const useTokens = (): Tokens => {
  return {
    background,
    text,
    border,
    icon,
    typography,
    elevation,
  };
};
