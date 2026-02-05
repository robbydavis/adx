/**
 * Side Navigation Components
 *
 * React components matching the Figma Side Nav spec (node 5355:19287).
 * Supports open/collapsed states with smooth transitions.
 *
 * Usage:
 * ```tsx
 * import { SideNav, SideNavItem, SideNavToggle, Badge, BadgeDot } from '@almanac/design-tokens';
 * import { Home, Clipboard, FileText, DollarSign } from 'react-feather';
 *
 * <SideNav collapsed={isCollapsed}>
 *   <SideNavItem icon={<Home />} label="Home" active href="/" />
 *   <SideNavItem icon={<Clipboard />} label="Tasks" href="/tasks" badge={3} />
 *   <SideNavItem icon={<FileText />} label="Loans" href="/loans" />
 *   <SideNavItem icon={<DollarSign />} label="Banking" href="/banking" external />
 *   <SideNavToggle onClick={() => setCollapsed(!isCollapsed)} />
 * </SideNav>
 * ```
 */

import React, { forwardRef, createContext, useContext, HTMLAttributes, AnchorHTMLAttributes } from 'react';

/* ==========================================================================
   Context for collapsed state
   ========================================================================== */

const SideNavContext = createContext<{ collapsed: boolean }>({ collapsed: false });

/* ==========================================================================
   Badge Component
   ========================================================================== */

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  /**
   * Badge count or content
   */
  children: React.ReactNode;
}

/**
 * Badge — Notification count indicator
 *
 * Displays a count inside an orange rounded badge.
 * Use for showing unread counts, pending tasks, etc.
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, ...rest }, ref) => {
    const classes = ['adx-badge'];
    if (className) classes.push(className);

    return (
      <span ref={ref} className={classes.join(' ')} {...rest}>
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

/* ==========================================================================
   BadgeDot Component
   ========================================================================== */

export interface BadgeDotProps extends HTMLAttributes<HTMLSpanElement> {}

/**
 * BadgeDot — Small notification indicator
 *
 * A small orange dot to indicate new/unread items without showing a count.
 * Used in collapsed nav state to show notifications exist.
 */
export const BadgeDot = forwardRef<HTMLSpanElement, BadgeDotProps>(
  ({ className, ...rest }, ref) => {
    const classes = ['adx-badge-dot'];
    if (className) classes.push(className);

    return <span ref={ref} className={classes.join(' ')} {...rest} />;
  }
);

BadgeDot.displayName = 'BadgeDot';

/* ==========================================================================
   SideNavItem Component
   ========================================================================== */

export interface SideNavItemProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'children'> {
  /**
   * Icon element (typically from react-feather)
   */
  icon: React.ReactNode;

  /**
   * Navigation label text
   */
  label: string;

  /**
   * Whether this item is currently active/selected
   * @default false
   */
  active?: boolean;

  /**
   * Badge count to display (shows Badge component)
   */
  badge?: number;

  /**
   * Whether to show external link indicator
   * @default false
   */
  external?: boolean;

  /**
   * External link icon element (defaults to ExternalLink from react-feather)
   */
  externalIcon?: React.ReactNode;
}

/**
 * SideNavItem — Navigation link
 *
 * Displays an icon with label, optional badge count, and external link indicator.
 * In collapsed state, shows only the icon with an optional badge dot.
 */
export const SideNavItem = forwardRef<HTMLAnchorElement, SideNavItemProps>(
  (
    {
      icon,
      label,
      active = false,
      badge,
      external = false,
      externalIcon,
      className,
      ...rest
    },
    ref
  ) => {
    useContext(SideNavContext); // Access context to trigger re-renders
    const classes = ['adx-side-nav-item'];

    if (active) classes.push('adx-side-nav-item--active');
    if (className) classes.push(className);

    return (
      <a
        ref={ref}
        className={classes.join(' ')}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        <span className="adx-side-nav-item__icon">{icon}</span>
        <span className="adx-side-nav-item__label">{label}</span>
        {external && externalIcon && (
          <span className="adx-side-nav-item__external">{externalIcon}</span>
        )}
        {badge !== undefined && badge > 0 && <Badge>{badge}</Badge>}
        {badge !== undefined && badge > 0 && (
          <span className="adx-side-nav-item__badge-dot">
            <BadgeDot />
          </span>
        )}
      </a>
    );
  }
);

SideNavItem.displayName = 'SideNavItem';

/* ==========================================================================
   SideNavToggle Component
   ========================================================================== */

export interface SideNavToggleProps extends HTMLAttributes<HTMLButtonElement> {
  /**
   * Icon element for collapse direction (typically ChevronsLeft from react-feather)
   */
  icon?: React.ReactNode;
}

/**
 * SideNavToggle — Collapse/expand button
 *
 * Button to toggle the side nav between open and collapsed states.
 * Icon rotates 180 degrees when collapsed.
 */
export const SideNavToggle = forwardRef<HTMLButtonElement, SideNavToggleProps>(
  ({ icon, className, ...rest }, ref) => {
    const classes = ['adx-side-nav-toggle'];
    if (className) classes.push(className);

    return (
      <button ref={ref} type="button" className={classes.join(' ')} {...rest}>
        <span className="adx-side-nav-toggle__icon">{icon}</span>
      </button>
    );
  }
);

SideNavToggle.displayName = 'SideNavToggle';

/* ==========================================================================
   SideNav Container Component
   ========================================================================== */

export interface SideNavProps extends HTMLAttributes<HTMLElement> {
  /**
   * Whether the nav is in collapsed (icon-only) state
   * @default false
   */
  collapsed?: boolean;

  /**
   * Navigation items and toggle button
   */
  children: React.ReactNode;
}

/**
 * SideNav — Side navigation container
 *
 * Container component that manages the collapsed state context.
 * Wraps SideNavItem components and an optional SideNavToggle.
 */
export const SideNav = forwardRef<HTMLElement, SideNavProps>(
  ({ collapsed = false, className, children, ...rest }, ref) => {
    const classes = ['adx-side-nav'];
    classes.push(collapsed ? 'adx-side-nav--collapsed' : 'adx-side-nav--open');
    if (className) classes.push(className);

    // Separate items from toggle
    const childArray = React.Children.toArray(children);
    const toggleChild = childArray.find(
      (child) => React.isValidElement(child) && child.type === SideNavToggle
    );
    const itemChildren = childArray.filter(
      (child) => !(React.isValidElement(child) && child.type === SideNavToggle)
    );

    return (
      <SideNavContext.Provider value={{ collapsed }}>
        <nav ref={ref} className={classes.join(' ')} {...rest}>
          <div className="adx-side-nav__items">{itemChildren}</div>
          {toggleChild}
        </nav>
      </SideNavContext.Provider>
    );
  }
);

SideNav.displayName = 'SideNav';
