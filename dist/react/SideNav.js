import React, { forwardRef, createContext, useContext } from 'react';
const SideNavContext = createContext({ collapsed: false });
export const Badge = forwardRef(({ className, children, ...rest }, ref) => {
    const classes = ['adx-badge'];
    if (className)
        classes.push(className);
    return (React.createElement("span", { ref: ref, className: classes.join(' '), ...rest }, children));
});
Badge.displayName = 'Badge';
export const BadgeDot = forwardRef(({ className, ...rest }, ref) => {
    const classes = ['adx-badge-dot'];
    if (className)
        classes.push(className);
    return React.createElement("span", { ref: ref, className: classes.join(' '), ...rest });
});
BadgeDot.displayName = 'BadgeDot';
export const SideNavItem = forwardRef(({ icon, label, active = false, badge, external = false, externalIcon, className, ...rest }, ref) => {
    useContext(SideNavContext);
    const classes = ['adx-side-nav-item'];
    if (active)
        classes.push('adx-side-nav-item--active');
    if (className)
        classes.push(className);
    return (React.createElement("a", { ref: ref, className: classes.join(' '), target: external ? '_blank' : undefined, rel: external ? 'noopener noreferrer' : undefined, ...rest },
        React.createElement("span", { className: "adx-side-nav-item__icon" }, icon),
        React.createElement("span", { className: "adx-side-nav-item__label" }, label),
        external && externalIcon && (React.createElement("span", { className: "adx-side-nav-item__external" }, externalIcon)),
        badge !== undefined && badge > 0 && React.createElement(Badge, null, badge),
        badge !== undefined && badge > 0 && (React.createElement("span", { className: "adx-side-nav-item__badge-dot" },
            React.createElement(BadgeDot, null)))));
});
SideNavItem.displayName = 'SideNavItem';
export const SideNavToggle = forwardRef(({ icon, className, ...rest }, ref) => {
    const classes = ['adx-side-nav-toggle'];
    if (className)
        classes.push(className);
    return (React.createElement("button", { ref: ref, type: "button", className: classes.join(' '), ...rest },
        React.createElement("span", { className: "adx-side-nav-toggle__icon" }, icon)));
});
SideNavToggle.displayName = 'SideNavToggle';
export const SideNav = forwardRef(({ collapsed = false, className, children, ...rest }, ref) => {
    const classes = ['adx-side-nav'];
    classes.push(collapsed ? 'adx-side-nav--collapsed' : 'adx-side-nav--open');
    if (className)
        classes.push(className);
    const childArray = React.Children.toArray(children);
    const toggleChild = childArray.find((child) => React.isValidElement(child) && child.type === SideNavToggle);
    const itemChildren = childArray.filter((child) => !(React.isValidElement(child) && child.type === SideNavToggle));
    return (React.createElement(SideNavContext.Provider, { value: { collapsed } },
        React.createElement("nav", { ref: ref, className: classes.join(' '), ...rest },
            React.createElement("div", { className: "adx-side-nav__items" }, itemChildren),
            toggleChild)));
});
SideNav.displayName = 'SideNav';
//# sourceMappingURL=SideNav.js.map