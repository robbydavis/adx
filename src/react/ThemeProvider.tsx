/**
 * Theme Provider
 *
 * React Context provider for managing the active theme.
 * Applies theme class to document.documentElement and persists selection to localStorage.
 *
 * Usage:
 * ```tsx
 * import { ThemeProvider } from '@almanac/design-tokens';
 *
 * function App() {
 *   return (
 *     <ThemeProvider initialTheme="fcma">
 *       <YourApp />
 *     </ThemeProvider>
 *   );
 * }
 * ```
 */

import React, { createContext, useState, useEffect, ReactNode } from 'react';
import { Theme, ThemeId, themes } from '../tokens/themes';

/**
 * Theme context value
 */
export interface ThemeContextValue {
  /**
   * Current theme ID
   */
  themeId: ThemeId;

  /**
   * Current theme configuration
   */
  theme: Theme;

  /**
   * Set the active theme
   * @param themeId - Theme identifier to activate
   */
  setTheme: (themeId: ThemeId) => void;
}

/**
 * Theme context
 */
export const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

/**
 * Local storage key for theme persistence
 */
const THEME_STORAGE_KEY = 'almanac-theme';

/**
 * Theme Provider props
 */
export interface ThemeProviderProps {
  /**
   * Child components
   */
  children: ReactNode;

  /**
   * Initial theme ID (defaults to 'fcma')
   * If theme is persisted in localStorage, that takes precedence
   */
  initialTheme?: ThemeId;

  /**
   * Disable localStorage persistence
   * @default false
   */
  disablePersistence?: boolean;
}

/**
 * Theme Provider Component
 *
 * Manages theme state and applies theme class to document root.
 * Persists theme selection to localStorage for user preference.
 */
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme = 'fcma',
  disablePersistence = false,
}) => {
  // Initialize theme from localStorage or use initialTheme
  const [themeId, setThemeId] = useState<ThemeId>(() => {
    if (typeof window === 'undefined' || disablePersistence) {
      return initialTheme;
    }

    try {
      const stored = localStorage.getItem(THEME_STORAGE_KEY);
      if (stored && (stored === 'fcma' || stored === 'rural-first')) {
        return stored as ThemeId;
      }
    } catch (error) {
      console.warn('Failed to read theme from localStorage:', error);
    }

    return initialTheme;
  });

  // Get current theme configuration
  const theme = themes[themeId];

  // Apply theme class to document root
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const root = document.documentElement;

    // Remove all theme classes
    root.classList.remove('theme-fcma', 'theme-rural-first');

    // Add current theme class
    root.classList.add(`theme-${themeId}`);

    // Persist to localStorage
    if (!disablePersistence) {
      try {
        localStorage.setItem(THEME_STORAGE_KEY, themeId);
      } catch (error) {
        console.warn('Failed to persist theme to localStorage:', error);
      }
    }
  }, [themeId, disablePersistence]);

  // Theme setter function
  const handleSetTheme = (newThemeId: ThemeId) => {
    setThemeId(newThemeId);
  };

  const contextValue: ThemeContextValue = {
    themeId,
    theme,
    setTheme: handleSetTheme,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
