import React, { forwardRef, useState, useRef, useEffect, useCallback, useId } from 'react';
import { AlertTriangle, AlertCircle, ChevronDown } from 'react-feather';
import { Menu, MenuItem } from './Menu';
export const Select = forwardRef(({ label, options, value, placeholder = 'Select an option', state = 'default', message, className, onChange, disabled = false, leadingIcon, trailingIcon, }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);
    const contentRef = useRef(null);
    const menuRef = useRef(null);
    const uniqueId = useId();
    const labelId = `${uniqueId}-label`;
    const listboxId = `${uniqueId}-listbox`;
    const isDisabled = state === 'disabled' || disabled;
    const showMessage = (state === 'warning' || state === 'error') && message;
    const showValidationIcon = state === 'warning' || state === 'error';
    const selectedOption = options.find((opt) => opt.value === value);
    const displayLabel = selectedOption ? selectedOption.label : placeholder;
    const isPlaceholder = !selectedOption;
    useEffect(() => {
        if (!isOpen)
            return;
        requestAnimationFrame(() => {
            const menu = menuRef.current;
            if (!menu)
                return;
            const selected = menu.querySelector('.adx-menu-item--selected:not(.adx-menu-item--disabled)');
            const firstEnabled = menu.querySelector('.adx-menu-item:not(.adx-menu-item--disabled)');
            const target = selected || firstEnabled;
            if (target)
                target.focus();
        });
    }, [isOpen]);
    useEffect(() => {
        if (!isOpen)
            return;
        const handleClickOutside = (e) => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);
    const handleToggle = useCallback(() => {
        if (!isDisabled) {
            setIsOpen((prev) => !prev);
        }
    }, [isDisabled]);
    const handleSelect = useCallback((optionValue) => {
        setIsOpen(false);
        if (onChange) {
            onChange(optionValue);
        }
        requestAnimationFrame(() => {
            contentRef.current?.focus();
        });
    }, [onChange]);
    const handleTriggerKeyDown = useCallback((e) => {
        if (isDisabled)
            return;
        if (e.key === 'Escape' && isOpen) {
            setIsOpen(false);
            e.preventDefault();
            return;
        }
        if ((e.key === 'Enter' || e.key === ' ') && !isOpen) {
            setIsOpen(true);
            e.preventDefault();
            return;
        }
        if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !isOpen) {
            setIsOpen(true);
            e.preventDefault();
        }
    }, [isOpen, isDisabled]);
    const handleDropdownKeyDown = useCallback((e) => {
        if (e.key === 'Escape') {
            setIsOpen(false);
            e.preventDefault();
            requestAnimationFrame(() => {
                contentRef.current?.focus();
            });
        }
    }, []);
    const classes = ['adx-select'];
    if (state !== 'default') {
        classes.push(`adx-select--${state}`);
    }
    if (isOpen) {
        classes.push('adx-select--open');
    }
    if (className) {
        classes.push(className);
    }
    const triggerClasses = ['adx-select__trigger'];
    if (isPlaceholder) {
        triggerClasses.push('adx-select__trigger--placeholder');
    }
    const chevronClasses = ['adx-select__chevron'];
    if (isOpen) {
        chevronClasses.push('adx-select__chevron--open');
    }
    return (React.createElement("div", { ref: ref, className: classes.join(' ') },
        React.createElement("label", { className: "adx-select__label", id: labelId }, label),
        React.createElement("div", { className: "adx-select__focus-ring", ref: containerRef },
            React.createElement("div", { ref: contentRef, className: "adx-select__content", tabIndex: isDisabled ? undefined : 0, onClick: handleToggle, onKeyDown: handleTriggerKeyDown, role: "combobox", "aria-expanded": isOpen, "aria-haspopup": "listbox", "aria-controls": isOpen ? listboxId : undefined, "aria-labelledby": labelId, "aria-disabled": isDisabled || undefined },
                leadingIcon && (React.createElement("span", { className: "adx-select__leading-icon", "aria-hidden": "true" }, leadingIcon)),
                React.createElement("span", { className: triggerClasses.join(' ') }, displayLabel),
                showValidationIcon ? (React.createElement("span", { className: "adx-select__trailing-icon", "aria-hidden": "true" }, state === 'warning'
                    ? React.createElement(AlertTriangle, { size: 16, color: "var(--text-warning)" })
                    : React.createElement(AlertCircle, { size: 16, color: "var(--text-error)" }))) : trailingIcon ? (React.createElement("span", { className: "adx-select__trailing-icon", "aria-hidden": "true" }, trailingIcon)) : null,
                React.createElement("span", { className: chevronClasses.join(' '), "aria-hidden": "true" },
                    React.createElement(ChevronDown, { size: 20, color: "var(--text-primary)" }))),
            isOpen && (React.createElement("div", { className: "adx-select__dropdown", ref: menuRef, onKeyDown: handleDropdownKeyDown },
                React.createElement(Menu, { id: listboxId, "aria-labelledby": labelId }, options.map((option) => (React.createElement(MenuItem, { key: option.value, id: `${uniqueId}-option-${option.value}`, label: option.label, selected: option.value === value, disabled: option.disabled, onClick: () => handleSelect(option.value) }))))))),
        showMessage && (React.createElement("p", { className: "adx-select__message" }, message))));
});
Select.displayName = 'Select';
//# sourceMappingURL=Select.js.map