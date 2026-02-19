import React, { ReactNode } from 'react';
import { Theme, ThemeId } from '../tokens/themes';
export interface ThemeContextValue {
    themeId: ThemeId;
    theme: Theme;
    setTheme: (themeId: ThemeId) => void;
}
export declare const ThemeContext: React.Context<ThemeContextValue | undefined>;
export interface ThemeProviderProps {
    children: ReactNode;
    initialTheme?: ThemeId;
    disablePersistence?: boolean;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
//# sourceMappingURL=ThemeProvider.d.ts.map