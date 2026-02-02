/**
 * Menu Component
 *
 * React menu matching the Figma Menu spec (node 13823:796).
 * Renders a popover-style menu container with selectable menu items.
 * Can be used standalone or as a dropdown for the Select component.
 *
 * Accessibility:
 * - Menu has role="listbox" with aria-label support
 * - MenuItems have role="option" and are focusable via tabIndex
 * - Arrow keys navigate between items, Enter/Space activates
 * - Disabled items are skipped during keyboard navigation
 *
 * Usage:
 * ```tsx
 * import { Menu, MenuItem } from '@almanac/design-tokens';
 *
 * <Menu aria-label="Options">
 *   <MenuItem label="Option one" onClick={() => {}} />
 *   <MenuItem label="Option two" selected onClick={() => {}} />
 *   <MenuItem label="Option three" disabled />
 * </Menu>
 * ```
 */

import React, { useRef, useCallback } from 'react';
import { Check } from 'react-feather';

/* ========================================================================
   MenuItem
   ======================================================================== */

export interface MenuItemProps {
  /** Text label for the menu item */
  label: string;
  /** Whether this item is currently selected */
  selected?: boolean;
  /** Whether this item is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional class name for the root element */
  className?: string;
  /** Unique id for aria-activedescendant support */
  id?: string;
}

/**
 * MenuItem Component
 *
 * Renders a single menu item with optional selected checkmark.
 * Focusable via keyboard. Enter/Space activates the item.
 */
export const MenuItem: React.FC<MenuItemProps> = ({
  label,
  selected = false,
  disabled = false,
  onClick,
  className,
  id,
}) => {
  const classes = ['adx-menu-item'];

  if (selected) {
    classes.push('adx-menu-item--selected');
  }

  if (disabled) {
    classes.push('adx-menu-item--disabled');
  }

  if (className) {
    classes.push(className);
  }

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
    <div
      id={id}
      className={classes.join(' ')}
      role="option"
      aria-selected={selected}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : 0}
      onClick={disabled ? undefined : onClick}
      onKeyDown={handleKeyDown}
    >
      <span className="adx-menu-item__label">{label}</span>
      {selected && (
        <span className="adx-menu-item__icon" aria-hidden="true">
          <Check size={20} />
        </span>
      )}
    </div>
  );
};

MenuItem.displayName = 'MenuItem';

/* ========================================================================
   Menu
   ======================================================================== */

export interface MenuProps {
  /** Menu item children */
  children: React.ReactNode;
  /** Additional class name for the root element */
  className?: string;
  /** Accessible label for the menu */
  'aria-label'?: string;
  /** Id of an element that labels this menu */
  'aria-labelledby'?: string;
  /** Id for aria-controls linkage */
  id?: string;
  /** Id of the currently active descendant (for managed focus) */
  'aria-activedescendant'?: string;
}

/**
 * Menu Component
 *
 * Renders a popover-style menu container with keyboard navigation.
 * Arrow keys move focus between enabled menu items.
 */
export const Menu: React.FC<MenuProps> = ({
  children,
  className,
  id,
  ...ariaProps
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  const classes = ['adx-menu'];

  if (className) {
    classes.push(className);
  }

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp' && e.key !== 'Home' && e.key !== 'End') {
      return;
    }

    e.preventDefault();

    const menu = menuRef.current;
    if (!menu) return;

    const items = Array.from(
      menu.querySelectorAll<HTMLElement>('.adx-menu-item:not(.adx-menu-item--disabled)'),
    );
    if (items.length === 0) return;

    const currentIndex = items.indexOf(document.activeElement as HTMLElement);

    let nextIndex: number;
    if (e.key === 'ArrowDown') {
      nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
    } else if (e.key === 'ArrowUp') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else {
      nextIndex = items.length - 1;
    }

    items[nextIndex].focus();
  }, []);

  return (
    <div
      ref={menuRef}
      id={id}
      className={classes.join(' ')}
      role="listbox"
      onKeyDown={handleKeyDown}
      {...ariaProps}
    >
      {children}
    </div>
  );
};

Menu.displayName = 'Menu';
