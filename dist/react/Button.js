import React, { forwardRef } from 'react';
export const Button = forwardRef(({ variant = 'primary', size = 'medium', icon = false, iconBrand = false, loading = false, disabled = false, type = 'button', className, children, ...rest }, ref) => {
    const classes = ['adx-btn'];
    if (icon) {
        classes.push('adx-btn--icon');
    }
    else if (iconBrand) {
        classes.push('adx-btn--icon-brand');
    }
    else {
        classes.push(`adx-btn--${variant}`);
        classes.push(`adx-btn--${size}`);
    }
    if (loading) {
        classes.push('adx-btn--loading');
    }
    if (disabled) {
        classes.push('adx-btn--disabled');
    }
    if (className) {
        classes.push(className);
    }
    return (React.createElement("button", { ref: ref, type: type, className: classes.join(' '), disabled: disabled || loading, "aria-busy": loading || undefined, ...rest }, children));
});
Button.displayName = 'Button';
//# sourceMappingURL=Button.js.map