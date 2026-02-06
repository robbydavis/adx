/**
 * Tooltip Component
 *
 * React tooltip matching the Figma Tooltip spec (node 17440:54).
 * Renders a dark tooltip with optional arrow direction.
 *
 * Usage:
 * ```tsx
 * import { Tooltip } from '@almanac/design-tokens';
 *
 * <Tooltip>Simple tooltip text</Tooltip>
 * <Tooltip arrow="top">Tooltip with arrow pointing up</Tooltip>
 * ```
 *
 * Positioning:
 * This component renders the tooltip element only. Position the tooltip
 * by wrapping in a relative container and using absolute positioning,
 * or integrate with a positioning library like Floating UI.
 */

import React, { forwardRef, HTMLAttributes } from 'react';

export type TooltipArrow = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  /** Tooltip content (text or elements) */
  children: React.ReactNode;
  /** Arrow direction pointing toward the trigger */
  arrow?: TooltipArrow;
  /** Additional class name */
  className?: string;
}

/**
 * Tooltip Component
 *
 * Dark tooltip with reverse background and text colors.
 * Supports optional arrow indicators for directional context.
 */
export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, arrow, className, ...rest }, ref) => {
    const classes = ['adx-tooltip'];

    if (arrow) {
      classes.push(`adx-tooltip--arrow-${arrow}`);
    }

    if (className) {
      classes.push(className);
    }

    return (
      <div ref={ref} className={classes.join(' ')} role="tooltip" {...rest}>
        {children}
      </div>
    );
  }
);

Tooltip.displayName = 'Tooltip';
