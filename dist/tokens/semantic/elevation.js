import { shadowColor } from '../primitives/colors';
export const elevation = {
    100: `0 2px 4px ${shadowColor.base}`,
    200: `0 4px 8px ${shadowColor.base}`,
    300: `0 8px 16px ${shadowColor.base}`,
    400: `0 16px 32px ${shadowColor.base}`,
};
export const elevationBase = {
    container: 'border-subtle',
    background: 'background-light',
};
export const elevationTokens = {
    elevation,
    elevationBase,
};
//# sourceMappingURL=elevation.js.map