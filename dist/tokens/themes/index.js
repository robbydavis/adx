export * from './types';
export * from './fcma';
export * from './rural-first';
import { fcmaTheme } from './fcma';
import { rural1stTheme } from './rural-first';
export const themes = {
    'fcma': fcmaTheme,
    'rural-first': rural1stTheme,
};
export const getTheme = (id) => {
    return themes[id];
};
export const defaultTheme = fcmaTheme;
//# sourceMappingURL=index.js.map