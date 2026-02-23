import React, { forwardRef, useCallback } from 'react';
export const SelectableCard = forwardRef(({ children, selected = false, error = false, disabled = false, onClick, className, id, ...ariaProps }, ref) => {
    const classes = ['adx-selectable-card'];
    if (selected) {
        classes.push('adx-selectable-card--selected');
    }
    if (selected && error) {
        classes.push('adx-selectable-card--error');
    }
    if (disabled) {
        classes.push('adx-selectable-card--disabled');
    }
    if (className) {
        classes.push(className);
    }
    const handleClick = useCallback(() => {
        if (!disabled && onClick) {
            onClick();
        }
    }, [disabled, onClick]);
    const handleKeyDown = useCallback((e) => {
        if (disabled)
            return;
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (onClick)
                onClick();
        }
    }, [disabled, onClick]);
    return (React.createElement("button", { ref: ref, id: id, type: "button", className: classes.join(' '), role: "option", "aria-selected": selected, "aria-disabled": disabled || undefined, disabled: disabled, onClick: handleClick, onKeyDown: handleKeyDown, ...ariaProps },
        React.createElement("div", { className: "adx-selectable-card__inner" }, children)));
});
SelectableCard.displayName = 'SelectableCard';
export const SelectableCardGroup = forwardRef(({ children, className, ...ariaProps }, ref) => {
    const classes = ['adx-selectable-card-group'];
    if (className) {
        classes.push(className);
    }
    return (React.createElement("div", { ref: ref, className: classes.join(' '), role: "listbox", ...ariaProps }, children));
});
SelectableCardGroup.displayName = 'SelectableCardGroup';
//# sourceMappingURL=SelectableCard.js.map