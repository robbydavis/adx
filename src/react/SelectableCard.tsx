/**
 * SelectableCard Component
 *
 * React selectable card matching the Figma spec (node 13867:498).
 * Uses a slot pattern: the wrapper handles interactive states while
 * the inner content is fully flexible via children.
 *
 * Accessibility:
 * - Uses role="option" when in a group, or role="button" standalone
 * - Supports aria-selected for selection state
 * - Keyboard accessible via Enter/Space to toggle
 *
 * Usage:
 * ```tsx
 * import { SelectableCard } from '@almanac/design-tokens';
 *
 * // Basic usage with custom content
 * <SelectableCard selected={isSelected} onClick={() => setSelected(!isSelected)}>
 *   <h3>Option Title</h3>
 *   <p>Description text</p>
 * </SelectableCard>
 *
 * // With helper classes for common layouts
 * <SelectableCard selected={isSelected} onClick={handleSelect}>
 *   <div className="adx-selectable-card__content--center">
 *     <div className="adx-selectable-card__icon">{icon}</div>
 *     <p className="adx-selectable-card__title">Title</p>
 *   </div>
 * </SelectableCard>
 * ```
 */

import React, { forwardRef, useCallback } from 'react';

export interface SelectableCardProps {
  /** Card content (slot pattern) */
  children: React.ReactNode;
  /** Whether the card is selected */
  selected?: boolean;
  /** Whether the card has a validation error (only applies when selected) */
  error?: boolean;
  /** Whether the card is disabled */
  disabled?: boolean;
  /** Click handler for toggling selection */
  onClick?: () => void;
  /** Additional class name for the root element */
  className?: string;
  /** Accessible label for the card */
  'aria-label'?: string;
  /** Id for the card element */
  id?: string;
}

/**
 * SelectableCard Component
 *
 * Interactive card wrapper that handles selection states, hover, and focus.
 * Content is passed as children using a slot pattern for maximum flexibility.
 */
export const SelectableCard = forwardRef<HTMLButtonElement, SelectableCardProps>(
  (
    {
      children,
      selected = false,
      error = false,
      disabled = false,
      onClick,
      className,
      id,
      ...ariaProps
    },
    ref,
  ) => {
    const classes = ['adx-selectable-card'];

    if (selected) {
      classes.push('adx-selectable-card--selected');
    }

    if (selected && error) {
      classes.push('adx-selectable-card--error');
    }

    if (disabled) {
      classes.push('adx-selectable-card--disabled');
    }

    if (className) {
      classes.push(className);
    }

    const handleClick = useCallback(() => {
      if (!disabled && onClick) {
        onClick();
      }
    }, [disabled, onClick]);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (disabled) return;
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onClick) onClick();
        }
      },
      [disabled, onClick],
    );

    return (
      <button
        ref={ref}
        id={id}
        type="button"
        className={classes.join(' ')}
        role="option"
        aria-selected={selected}
        aria-disabled={disabled || undefined}
        disabled={disabled}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        {...ariaProps}
      >
        <div className="adx-selectable-card__inner">{children}</div>
      </button>
    );
  },
);

SelectableCard.displayName = 'SelectableCard';

/* ========================================================================
   SelectableCardGroup
   ======================================================================== */

export interface SelectableCardGroupProps {
  /** SelectableCard children */
  children: React.ReactNode;
  /** Additional class name */
  className?: string;
  /** Accessible label for the group */
  'aria-label'?: string;
  /** Id of an element that labels this group */
  'aria-labelledby'?: string;
}

/**
 * SelectableCardGroup Component
 *
 * Wrapper for a group of SelectableCards. Provides proper ARIA role
 * and can be used for single-select or multi-select patterns.
 */
export const SelectableCardGroup = forwardRef<HTMLDivElement, SelectableCardGroupProps>(
  ({ children, className, ...ariaProps }, ref) => {
    const classes = ['adx-selectable-card-group'];

    if (className) {
      classes.push(className);
    }

    return (
      <div ref={ref} className={classes.join(' ')} role="listbox" {...ariaProps}>
        {children}
      </div>
    );
  },
);

SelectableCardGroup.displayName = 'SelectableCardGroup';
