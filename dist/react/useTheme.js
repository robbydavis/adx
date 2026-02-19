import { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider. ' +
            'Wrap your component tree with <ThemeProvider> to use this hook.');
    }
    return context;
};
//# sourceMappingURL=useTheme.js.map