/**
 * Tooltip Component
 *
 * React tooltip matching the Figma Tooltip spec (node 17440:54).
 * Renders a dark tooltip with optional position hint.
 *
 * Usage:
 * ```tsx
 * import { Tooltip } from '@almanac/design-tokens';
 *
 * <Tooltip>Simple tooltip text</Tooltip>
 * <Tooltip position="top">Tooltip appears above trigger</Tooltip>
 * ```
 *
 * Positioning:
 * The `position` prop indicates where the tooltip should appear relative
 * to its trigger element. This component renders the tooltip element only.
 * Position the tooltip by wrapping in a relative container and using
 * absolute positioning, or integrate with a positioning library like
 * Floating UI.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** Tooltip content (text or elements) */
  children: React.ReactNode;
  /** Position relative to trigger (for integration with positioning libraries) */
  position?: TooltipPosition;
  /** Additional class name */
  className?: string;
}

/**
 * Tooltip Component
 *
 * Dark tooltip with reverse background and text colors.
 * The position prop is a hint for positioning logic—it does not
 * affect the visual rendering of the tooltip itself.
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, position, className, ...rest }, ref) => {
    const classes = ['adx-tooltip'];

    if (className) {
      classes.push(className);
    }

    return (
      <div
        ref={ref}
        className={classes.join(' ')}
        role="tooltip"
        data-position={position}
        {...rest}
      >
        {children}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
