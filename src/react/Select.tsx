/**
 * Select Component
 *
 * React select matching the Figma Select spec (node 13823:671).
 * Uses the Menu component as a custom dropdown instead of a native select.
 *
 * Accessibility:
 * - Trigger has role="combobox" with aria-expanded, aria-haspopup, aria-controls
 * - Label is linked via aria-labelledby
 * - Arrow keys navigate options when open, Enter/Space opens and selects
 * - Escape closes the dropdown
 * - Focus moves to first/selected item when dropdown opens
 *
 * Usage:
 * ```tsx
 * import { Select } from '@almanac/design-tokens';
 *
 * <Select
 *   label="Country"
 *   options={[
 *     { value: 'us', label: 'United States' },
 *     { value: 'ca', label: 'Canada' },
 *   ]}
 *   value={selected}
 *   onChange={setSelected}
 * />
 * ```
 */

import React, { forwardRef, useState, useRef, useEffect, useCallback, useId } from 'react';
import { AlertTriangle, AlertCircle, ChevronDown } from 'react-feather';
import { Menu, MenuItem } from './Menu';

export type SelectState = 'default' | 'hover' | 'focus' | 'warning' | 'error' | 'disabled';

export interface SelectOption {
  /** Option value */
  value: string;
  /** Display label */
  label: string;
  /** Whether this option is disabled */
  disabled?: boolean;
}

export interface SelectProps {
  /** Label text displayed above the select */
  label: string;
  /** Available options */
  options: SelectOption[];
  /** Currently selected value */
  value?: string;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Visual state of the select */
  state?: SelectState;
  /** Validation or helper message displayed below the select (visible for warning/error states) */
  message?: string;
  /** Additional class name for the root element */
  className?: string;
  /** Called when a new value is selected */
  onChange?: (value: string) => void;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Optional leading icon rendered before the trigger text (16px) */
  leadingIcon?: React.ReactNode;
  /** Optional trailing icon rendered after the trigger text (16px). Overridden by warning/error icons when those states are active. */
  trailingIcon?: React.ReactNode;
}

/**
 * Select Component
 *
 * Renders a custom dropdown trigger with a Menu popover.
 * Full keyboard and screen reader support.
 */
export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      label,
      options,
      value,
      placeholder = 'Select an option',
      state = 'default',
      message,
      className,
      onChange,
      disabled = false,
      leadingIcon,
      trailingIcon,
    },
    ref,
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    const uniqueId = useId();
    const labelId = `${uniqueId}-label`;
    const listboxId = `${uniqueId}-listbox`;

    const isDisabled = state === 'disabled' || disabled;
    const showMessage = (state === 'warning' || state === 'error') && message;
    const showValidationIcon = state === 'warning' || state === 'error';

    const selectedOption = options.find((opt) => opt.value === value);
    const displayLabel = selectedOption ? selectedOption.label : placeholder;
    const isPlaceholder = !selectedOption;

    // Focus the selected item (or first item) when dropdown opens
    useEffect(() => {
      if (!isOpen) return;

      // Delay to allow render
      requestAnimationFrame(() => {
        const menu = menuRef.current;
        if (!menu) return;

        // Focus the selected item, or the first enabled item
        const selected = menu.querySelector<HTMLElement>('.adx-menu-item--selected:not(.adx-menu-item--disabled)');
        const firstEnabled = menu.querySelector<HTMLElement>('.adx-menu-item:not(.adx-menu-item--disabled)');
        const target = selected || firstEnabled;
        if (target) target.focus();
      });
    }, [isOpen]);

    // Close on click outside
    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
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

    const handleSelect = useCallback(
      (optionValue: string) => {
        setIsOpen(false);
        if (onChange) {
          onChange(optionValue);
        }
        // Return focus to trigger after selection
        requestAnimationFrame(() => {
          contentRef.current?.focus();
        });
      },
      [onChange],
    );

    const handleTriggerKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (isDisabled) return;

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

        // Arrow keys open the dropdown
        if ((e.key === 'ArrowDown' || e.key === 'ArrowUp') && !isOpen) {
          setIsOpen(true);
          e.preventDefault();
        }
      },
      [isOpen, isDisabled],
    );

    // Handle Escape from within the dropdown to close and return focus
    const handleDropdownKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') {
          setIsOpen(false);
          e.preventDefault();
          requestAnimationFrame(() => {
            contentRef.current?.focus();
          });
        }
      },
      [],
    );

    // Root classes
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

    // Trigger text classes
    const triggerClasses = ['adx-select__trigger'];
    if (isPlaceholder) {
      triggerClasses.push('adx-select__trigger--placeholder');
    }

    // Chevron classes
    const chevronClasses = ['adx-select__chevron'];
    if (isOpen) {
      chevronClasses.push('adx-select__chevron--open');
    }

    return (
      <div ref={ref} className={classes.join(' ')}>
        <label className="adx-select__label" id={labelId}>{label}</label>
        <div className="adx-select__focus-ring" ref={containerRef}>
          <div
            ref={contentRef}
            className="adx-select__content"
            tabIndex={isDisabled ? undefined : 0}
            onClick={handleToggle}
            onKeyDown={handleTriggerKeyDown}
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            aria-controls={isOpen ? listboxId : undefined}
            aria-labelledby={labelId}
            aria-disabled={isDisabled || undefined}
          >
            {leadingIcon && (
              <span className="adx-select__leading-icon" aria-hidden="true">
                {leadingIcon}
              </span>
            )}
            <span className={triggerClasses.join(' ')}>{displayLabel}</span>
            {showValidationIcon ? (
              <span className="adx-select__trailing-icon" aria-hidden="true">
                {state === 'warning'
                  ? <AlertTriangle size={16} color="var(--text-warning)" />
                  : <AlertCircle size={16} color="var(--text-error)" />}
              </span>
            ) : trailingIcon ? (
              <span className="adx-select__trailing-icon" aria-hidden="true">
                {trailingIcon}
              </span>
            ) : null}
            <span className={chevronClasses.join(' ')} aria-hidden="true">
              <ChevronDown size={20} color="var(--text-primary)" />
            </span>
          </div>
          {isOpen && (
            <div
              className="adx-select__dropdown"
              ref={menuRef}
              onKeyDown={handleDropdownKeyDown}
            >
              <Menu id={listboxId} aria-labelledby={labelId}>
                {options.map((option) => (
                  <MenuItem
                    key={option.value}
                    id={`${uniqueId}-option-${option.value}`}
                    label={option.label}
                    selected={option.value === value}
                    disabled={option.disabled}
                    onClick={() => handleSelect(option.value)}
                  />
                ))}
              </Menu>
            </div>
          )}
        </div>
        {showMessage && (
          <p className="adx-select__message">{message}</p>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';
