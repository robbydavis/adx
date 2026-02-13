/**
 * TextInput Component
 *
 * React text input matching the Figma Text Input spec (node 13823:646).
 * Renders a labeled input with CSS class composition for state variants.
 *
 * Usage:
 * ```tsx
 * import { TextInput } from '@almanac/adx';
 *
 * <TextInput label="Email" placeholder="you@example.com" />
 * <TextInput label="Password" state="error" message="Required field" />
 * ```
 */

import React, { forwardRef, InputHTMLAttributes } from 'react';
import { AlertTriangle, AlertCircle } from 'react-feather';

export type TextInputState = 'default' | 'hover' | 'focus' | 'warning' | 'error' | 'disabled';

export interface TextInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'className'> {
  /** Label text displayed above the input */
  label: string;
  /** Visual state of the input (interactive states like hover/focus are handled automatically via CSS) */
  state?: TextInputState;
  /** Validation or helper message displayed below the input (visible for warning/error states) */
  message?: string;
  /** Additional class name for the root element */
  className?: string;
  /** Optional leading icon rendered before the input (16px) */
  leadingIcon?: React.ReactNode;
  /** Optional trailing icon rendered after the input (16px). Overridden by warning/error icons when those states are active. */
  trailingIcon?: React.ReactNode;
}

/**
 * TextInput Component
 *
 * Composes CSS class names from props to render the correct state variant.
 * Supports ref forwarding for integration with form libraries and focus management.
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      state = 'default',
      message,
      className,
      leadingIcon,
      trailingIcon,
      disabled = false,
      ...inputProps
    },
    ref,
  ) => {
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

    return (
      <div className={classes.join(' ')}>
        <label className="adx-text-input__label">{label}</label>
        <div className="adx-text-input__focus-ring">
          <div className="adx-text-input__content">
            {leadingIcon && (
              <span className="adx-text-input__leading-icon" aria-hidden="true">
                {leadingIcon}
              </span>
            )}
            <input
              ref={ref}
              className="adx-text-input__input"
              disabled={isDisabled}
              {...inputProps}
            />
            {showValidationIcon ? (
              <span className="adx-text-input__trailing-icon" aria-hidden="true">
                {state === 'warning'
                  ? <AlertTriangle size={16} color="var(--text-warning)" />
                  : <AlertCircle size={16} color="var(--text-error)" />}
              </span>
            ) : trailingIcon ? (
              <span className="adx-text-input__trailing-icon" aria-hidden="true">
                {trailingIcon}
              </span>
            ) : null}
          </div>
        </div>
        {showMessage && (
          <p className="adx-text-input__message">{message}</p>
        )}
      </div>
    );
  },
);

TextInput.displayName = 'TextInput';
