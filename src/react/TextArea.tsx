/**
 * TextArea Component
 *
 * React text area matching the Figma Text Area spec (node 13823:697).
 * Built from the TextInput component — shares the same structure,
 * states, and token usage, with a multi-line textarea element
 * and a minimum height accommodating five lines of text.
 *
 * Usage:
 * ```tsx
 * import { TextArea } from '@almanac/design-tokens';
 *
 * <TextArea label="Comments" placeholder="Enter your comments" />
 * <TextArea label="Description" state="error" message="Required field" />
 * ```
 */

import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import { AlertTriangle, AlertCircle } from 'react-feather';

export type TextAreaState = 'default' | 'hover' | 'focus' | 'warning' | 'error' | 'disabled';

export interface TextAreaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'className'> {
  /** Label text displayed above the textarea */
  label: string;
  /** Visual state of the textarea (interactive states like hover/focus are handled automatically via CSS) */
  state?: TextAreaState;
  /** Validation or helper message displayed below the textarea (visible for warning/error states) */
  message?: string;
  /** Additional class name for the root element */
  className?: string;
}

/**
 * TextArea Component
 *
 * Composes CSS class names from props to render the correct state variant.
 * Supports ref forwarding for integration with form libraries and focus management.
 */
export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      label,
      state = 'default',
      message,
      className,
      disabled = false,
      ...textareaProps
    },
    ref,
  ) => {
    const isDisabled = state === 'disabled' || disabled;
    const showMessage = (state === 'warning' || state === 'error') && message;
    const showValidationIcon = state === 'warning' || state === 'error';

    const classes = ['adx-text-area'];

    if (state !== 'default') {
      classes.push(`adx-text-area--${state}`);
    }

    if (className) {
      classes.push(className);
    }

    return (
      <div className={classes.join(' ')}>
        <label className="adx-text-area__label">{label}</label>
        <div className="adx-text-area__focus-ring">
          <div className="adx-text-area__content">
            <textarea
              ref={ref}
              className="adx-text-area__input"
              disabled={isDisabled}
              {...textareaProps}
            />
            {showValidationIcon && (
              <span className="adx-text-area__trailing-icon" aria-hidden="true">
                {state === 'warning'
                  ? <AlertTriangle size={16} color="var(--text-warning)" />
                  : <AlertCircle size={16} color="var(--text-error)" />}
              </span>
            )}
          </div>
        </div>
        {showMessage && (
          <p className="adx-text-area__message">{message}</p>
        )}
      </div>
    );
  },
);

TextArea.displayName = 'TextArea';
