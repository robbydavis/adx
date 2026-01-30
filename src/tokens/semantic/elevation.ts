/**
 * Semantic Elevation Tokens
 *
 * Elevation styles use shadow properties to create visual depth and hierarchy.
 * The system defines four elevation levels for consistent layering throughout the interface.
 *
 * ✅ USE THESE TOKENS in your components - they are the public API
 * ❌ NEVER use primitive shadow values directly in components
 *
 * All elevation shadows use a consistent color: RGBA(39, 51, 51, 0.24) with X offset of 0.
 */

import { shadowColor } from '../primitives/colors';

/**
 * Elevation levels
 * Organized from lowest (100) to highest (400)
 */
export const elevation = {
  /**
   * Elevation 100 - Lowest elevation
   * Y Offset: 2px, Blur: 4px
   * Usage: Container/card hover & focus states, subtle elevation
   */
  100: `0 2px 4px ${shadowColor.base}`,

  /**
   * Elevation 200 - Low-medium elevation
   * Y Offset: 4px, Blur: 8px
   * Usage: Intermediate elevation for cards and elevated containers
   */
  200: `0 4px 8px ${shadowColor.base}`,

  /**
   * Elevation 300 - Medium-high elevation
   * Y Offset: 8px, Blur: 16px
   * Usage: Menus, popovers, dropdowns
   */
  300: `0 8px 16px ${shadowColor.base}`,

  /**
   * Elevation 400 - Highest elevation
   * Y Offset: 16px, Blur: 32px
   * Usage: Drawers, modals, dialogs, highest priority overlays
   */
  400: `0 16px 32px ${shadowColor.base}`,
} as const;

/**
 * Base references for elevation context
 */
export const elevationBase = {
  /**
   * Base container style
   * Uses: border-subtle
   * Usage: Default containers, cards, base-level elements
   */
  container: 'border-subtle',

  /**
   * Background style
   * Uses: background-light
   * Usage: Page backgrounds, underlying surfaces
   */
  background: 'background-light',
} as const;

/**
 * All semantic elevation tokens
 */
export const elevationTokens = {
  elevation,
  elevationBase,
} as const;

// Type exports for TypeScript consumers
export type Elevation = typeof elevation;
export type ElevationBase = typeof elevationBase;
export type ElevationTokens = typeof elevationTokens;
