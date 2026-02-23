import React, { forwardRef } from 'react';
export const Tooltip = forwardRef(({ children, position, className, ...rest }, ref) => {
    const classes = ['adx-tooltip'];
    if (className) {
        classes.push(className);
    }
    return (React.createElement("div", { ref: ref, className: classes.join(' '), role: "tooltip", "data-position": position, ...rest }, children));
});
Tooltip.displayName = 'Tooltip';
//# sourceMappingURL=Tooltip.js.map