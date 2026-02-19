export type ThemeId = 'fcma' | 'rural-first';
export interface ThemeColors {
    brand: string;
    brandHover: string;
    brandLight: string;
    action: string;
    actionHover: string;
    link: string;
    linkHover: string;
    focus: string;
}
export interface Theme {
    id: ThemeId;
    name: string;
    colors: ThemeColors;
}
export type ThemeRegistry = {
    [K in ThemeId]: Theme;
};
//# sourceMappingURL=types.d.ts.map