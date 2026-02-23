import React, { useRef, useCallback } from 'react';
import { Check } from 'react-feather';
export const MenuItem = ({ label, selected = false, disabled = false, onClick, className, id, }) => {
    const classes = ['adx-menu-item'];
    if (selected) {
        classes.push('adx-menu-item--selected');
    }
    if (disabled) {
        classes.push('adx-menu-item--disabled');
    }
    if (className) {
        classes.push(className);
    }
    const handleKeyDown = useCallback((e) => {
        if (disabled)
            return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (onClick)
                onClick();
        }
    }, [disabled, onClick]);
    return (React.createElement("div", { id: id, className: classes.join(' '), role: "option", "aria-selected": selected, "aria-disabled": disabled || undefined, tabIndex: disabled ? -1 : 0, onClick: disabled ? undefined : onClick, onKeyDown: handleKeyDown },
        React.createElement("span", { className: "adx-menu-item__label" }, label),
        selected && (React.createElement("span", { className: "adx-menu-item__icon", "aria-hidden": "true" },
            React.createElement(Check, { size: 20 })))));
};
MenuItem.displayName = 'MenuItem';
export const Menu = ({ children, className, id, ...ariaProps }) => {
    const menuRef = useRef(null);
    const classes = ['adx-menu'];
    if (className) {
        classes.push(className);
    }
    const handleKeyDown = useCallback((e) => {
        if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Home' && e.key !== 'End') {
            return;
        }
        e.preventDefault();
        const menu = menuRef.current;
        if (!menu)
            return;
        const items = Array.from(menu.querySelectorAll('.adx-menu-item:not(.adx-menu-item--disabled)'));
        if (items.length === 0)
            return;
        const currentIndex = items.indexOf(document.activeElement);
        let nextIndex;
        if (e.key === 'ArrowDown') {
            nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
        }
        else if (e.key === 'ArrowUp') {
            nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
        }
        else if (e.key === 'Home') {
            nextIndex = 0;
        }
        else {
            nextIndex = items.length - 1;
        }
        items[nextIndex].focus();
    }, []);
    return (React.createElement("div", { ref: menuRef, id: id, className: classes.join(' '), role: "listbox", onKeyDown: handleKeyDown, ...ariaProps }, children));
};
Menu.displayName = 'Menu';
//# sourceMappingURL=Menu.js.map