import React, { forwardRef } from 'react';
import { AlertTriangle, AlertCircle } from 'react-feather';
export const TextInput = forwardRef(({ label, state = 'default', message, className, leadingIcon, trailingIcon, disabled = false, ...inputProps }, ref) => {
    const isDisabled = state === 'disabled' || disabled;
    const showMessage = (state === 'warning' || state === 'error') && message;
    const showValidationIcon = state === 'warning' || state === 'error';
    const classes = ['adx-text-input'];
    if (state !== 'default') {
        classes.push(`adx-text-input--${state}`);
    }
    if (className) {
        classes.push(className);
    }
    return (React.createElement("div", { className: classes.join(' ') },
        React.createElement("label", { className: "adx-text-input__label" }, label),
        React.createElement("div", { className: "adx-text-input__focus-ring" },
            React.createElement("div", { className: "adx-text-input__content" },
                leadingIcon && (React.createElement("span", { className: "adx-text-input__leading-icon", "aria-hidden": "true" }, leadingIcon)),
                React.createElement("input", { ref: ref, className: "adx-text-input__input", disabled: isDisabled, ...inputProps }),
                showValidationIcon ? (React.createElement("span", { className: "adx-text-input__trailing-icon", "aria-hidden": "true" }, state === 'warning'
                    ? React.createElement(AlertTriangle, { size: 16, color: "var(--text-warning)" })
                    : React.createElement(AlertCircle, { size: 16, color: "var(--text-error)" }))) : trailingIcon ? (React.createElement("span", { className: "adx-text-input__trailing-icon", "aria-hidden": "true" }, trailingIcon)) : null)),
        showMessage && (React.createElement("p", { className: "adx-text-input__message" }, message))));
});
TextInput.displayName = 'TextInput';
//# sourceMappingURL=TextInput.js.map