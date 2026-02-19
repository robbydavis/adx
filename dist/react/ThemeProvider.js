import React, { createContext, useState, useEffect } from 'react';
import { themes } from '../tokens/themes';
export const ThemeContext = createContext(undefined);
const THEME_STORAGE_KEY = 'almanac-theme';
export const ThemeProvider = ({ children, initialTheme = 'fcma', disablePersistence = false, }) => {
    const [themeId, setThemeId] = useState(() => {
        if (typeof window === 'undefined' || disablePersistence) {
            return initialTheme;
        }
        try {
            const stored = localStorage.getItem(THEME_STORAGE_KEY);
            if (stored && (stored === 'fcma' || stored === 'rural-first')) {
                return stored;
            }
        }
        catch (error) {
            console.warn('Failed to read theme from localStorage:', error);
        }
        return initialTheme;
    });
    const theme = themes[themeId];
    useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const root = document.documentElement;
        root.classList.remove('theme-fcma', 'theme-rural-first');
        root.classList.add(`theme-${themeId}`);
        if (!disablePersistence) {
            try {
                localStorage.setItem(THEME_STORAGE_KEY, themeId);
            }
            catch (error) {
                console.warn('Failed to persist theme to localStorage:', error);
            }
        }
    }, [themeId, disablePersistence]);
    const handleSetTheme = (newThemeId) => {
        setThemeId(newThemeId);
    };
    const contextValue = {
        themeId,
        theme,
        setTheme: handleSetTheme,
    };
    return (React.createElement(ThemeContext.Provider, { value: contextValue }, children));
};
//# sourceMappingURL=ThemeProvider.js.map