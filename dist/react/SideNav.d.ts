import React, { HTMLAttributes, AnchorHTMLAttributes } from 'react';
export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}
export declare const Badge: React.ForwardRefExoticComponent<BadgeProps & React.RefAttributes<HTMLSpanElement>>;
export interface BadgeDotProps extends HTMLAttributes<HTMLSpanElement> {
}
export declare const BadgeDot: React.ForwardRefExoticComponent<BadgeDotProps & React.RefAttributes<HTMLSpanElement>>;
export interface SideNavItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
    icon: React.ReactNode;
    label: string;
    active?: boolean;
    badge?: number;
    external?: boolean;
    externalIcon?: React.ReactNode;
}
export declare const SideNavItem: React.ForwardRefExoticComponent<SideNavItemProps & React.RefAttributes<HTMLAnchorElement>>;
export interface SideNavToggleProps extends HTMLAttributes<HTMLButtonElement> {
    icon?: React.ReactNode;
}
export declare const SideNavToggle: React.ForwardRefExoticComponent<SideNavToggleProps & React.RefAttributes<HTMLButtonElement>>;
export interface SideNavProps extends HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
    children: React.ReactNode;
}
export declare const SideNav: React.ForwardRefExoticComponent<SideNavProps & React.RefAttributes<HTMLElement>>;
//# sourceMappingURL=SideNav.d.ts.map