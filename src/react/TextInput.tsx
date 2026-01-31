/**
 * TextInput Component
 *
 * React text input matching the Figma Text Input spec (node 13823:646).
 * Renders a labeled input with CSS class composition for state variants.
 *
 * Usage:
 * ```tsx
 * import { TextInput } from '@almanac/design-tokens';
 *
 * <TextInput label="Email" placeholder="you@example.com" />
 * <TextInput label="Password" state="error" message="Required field" />
 * ```
 */

import React, { forwardRef, InputHTMLAttributes } from 'react';

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
}

const WarningIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 1.5L14.5 13H1.5L8 1.5Z"
      stroke="var(--text-warning)"
      strokeWidth="1.2"
      strokeLinejoin="round"
      fill="none"
    />
    <line x1="8" y1="6.5" x2="8" y2="9.5" stroke="var(--text-warning)" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="8" cy="11.25" r="0.75" fill="var(--text-warning)" />
  </svg>
);

const ErrorIcon: React.FC = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="6.5" stroke="var(--text-error)" strokeWidth="1.2" fill="none" />
    <line x1="8" y1="5" x2="8" y2="8.5" stroke="var(--text-error)" strokeWidth="1.2" strokeLinecap="round" />
    <circle cx="8" cy="10.5" r="0.75" fill="var(--text-error)" />
  </svg>
);

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
      disabled = false,
      ...inputProps
    },
    ref,
  ) => {
    const isDisabled = state === 'disabled' || disabled;
    const showMessage = (state === 'warning' || state === 'error') && message;
    const showTrailingIcon = state === 'warning' || state === 'error';

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
            <input
              ref={ref}
              className="adx-text-input__input"
              disabled={isDisabled}
              {...inputProps}
            />
            {showTrailingIcon && (
              <span className="adx-text-input__trailing-icon">
                {state === 'warning' ? <WarningIcon /> : <ErrorIcon />}
              </span>
            )}
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
