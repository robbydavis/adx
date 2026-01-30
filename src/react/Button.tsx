/**
 * Button Component
 *
 * React button matching the Figma Button spec (node 178:8).
 * Renders a <button> with CSS class composition for variant, size, and state.
 *
 * Usage:
 * ```tsx
 * import { Button } from '@almanac/design-tokens';
 *
 * <Button variant="primary" size="medium">Label</Button>
 * <Button variant="secondary" size="small">Label</Button>
 * <Button icon><SomeIcon /></Button>
 * <Button iconBrand><SomeIcon /></Button>
 * ```
 */

import React, { ButtonHTMLAttributes, forwardRef } from 'react';

/**
 * Button component props
 */
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /**
   * Visual style variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';

  /**
   * Button size
   * @default 'medium'
   */
  size?: 'large' | 'medium' | 'small' | 'xsmall';

  /**
   * Render as an icon button (circular, transparent background)
   * @default false
   */
  icon?: boolean;

  /**
   * Render as a brand-colored icon button
   * @default false
   */
  iconBrand?: boolean;

  /**
   * Show loading spinner and disable interaction
   * @default false
   */
  loading?: boolean;

  /**
   * HTML button type attribute
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Button content
   */
  children: React.ReactNode;
}

/**
 * Button Component
 *
 * Composes CSS class names from props to render the correct variant.
 * Supports ref forwarding for integration with form libraries and focus management.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      icon = false,
      iconBrand = false,
      loading = false,
      disabled = false,
      type = 'button',
      className,
      children,
      ...rest
    },
    ref,
  ) => {
    const classes = ['adx-btn'];

    if (icon) {
      classes.push('adx-btn--icon');
    } else if (iconBrand) {
      classes.push('adx-btn--icon-brand');
    } else {
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

    return (
      <button
        ref={ref}
        type={type}
        className={classes.join(' ')}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';
