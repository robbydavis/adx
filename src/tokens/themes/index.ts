/**
 * Theme System Index
 *
 * Exports all available themes and provides a theme registry for easy access.
 * Themes enable brand-specific adaptations while maintaining consistent functionality.
 */

export * from './types';
export * from './fcma';
export * from './rural-first';

import { Theme, ThemeId, ThemeRegistry } from './types';
import { fcmaTheme } from './fcma';
import { rural1stTheme } from './rural-first';

/**
 * Theme Registry
 * Centralized map of all available themes
 */
export const themes: ThemeRegistry = {
  'fcma': fcmaTheme,
  'rural-first': rural1stTheme,
};

/**
 * Get theme by ID
 * @param id - Theme identifier
 * @returns Theme configuration
 */
export const getTheme = (id: ThemeId): Theme => {
  return themes[id];
};

/**
 * Default theme
 * Used as fallback when no theme is specified
 */
export const defaultTheme: Theme = fcmaTheme;
