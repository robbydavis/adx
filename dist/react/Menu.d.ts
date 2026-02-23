import React from 'react';
export interface MenuItemProps {
    label: string;
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    className?: string;
    id?: string;
}
export declare const MenuItem: React.FC<MenuItemProps>;
export interface MenuProps {
    children: React.ReactNode;
    className?: string;
    'aria-label'?: string;
    'aria-labelledby'?: string;
    id?: string;
    'aria-activedescendant'?: string;
}
export declare const Menu: React.FC<MenuProps>;
//# sourceMappingURL=Menu.d.ts.map