/**
 * useTheme Hook
 *
 * Hook to access the current theme and theme management functions.
 * Must be used within a ThemeProvider.
 *
 * Usage:
 * ```tsx
 * import { useTheme } from '@almanac/adx';
 *
 * function MyComponent() {
 *   const { themeId, theme, setTheme } = useTheme();
 *
 *   return (
 *     <div>
 *       <p>Current theme: {theme.name}</p>
 *       <button onClick={() => setTheme('fcma')}>Switch to FCMA</button>
 *       <button onClick={() => setTheme('rural-first')}>Switch to Rural 1st</button>
 *     </div>
 *   );
 * }
 * ```
 */

import { useContext } from 'react';
import { ThemeContext, ThemeContextValue } from './ThemeProvider';

/**
 * Hook to access theme context
 *
 * @returns Theme context value with themeId, theme, and setTheme
 * @throws Error if used outside of ThemeProvider
 */
export const useTheme = (): ThemeContextValue => {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error(
      'useTheme must be used within a ThemeProvider. ' +
      'Wrap your component tree with <ThemeProvider> to use this hook.'
    );
  }

  return context;
};
