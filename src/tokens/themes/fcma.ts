/**
 * FCMA Theme
 *
 * Farm Credit Mid-America brand theme with green color identity.
 * Primary brand color: #5e9732 (FCMA Green)
 *
 * This theme overrides the placeholder values in semantic tokens,
 * providing brand-specific colors while maintaining semantic meaning.
 */

import { Theme } from './types';
import { fcmaBrand } from '../primitives/colors';

/**
 * FCMA Theme Configuration
 */
export const fcmaTheme: Theme = {
  id: 'fcma',
  name: 'Farm Credit Mid-America',
  colors: {
    /**
     * FCMA Green - Primary brand identity color
     * Source: Almanac.html documentation
     */
    brand: fcmaBrand.primary, // #5e9732

    /**
     * FCMA Green Hover - ~15% darker for interactive states
     */
    brandHover: fcmaBrand.primaryHover, // #71b33c (lighter, per Figma)

    /**
     * FCMA Green Light - ~90% lighter for backgrounds
     */
    brandLight: fcmaBrand.primaryLight, // #e4f2d8

    /**
     * Action color - Same as brand for FCMA
     * Used for buttons and primary CTAs
     */
    action: fcmaBrand.primary, // #5e9732

    /**
     * Action hover - Darker action color for interactive feedback
     */
    actionHover: fcmaBrand.primaryHover, // #4a7928

    /**
     * Link color - Same as brand for FCMA
     * Used for hyperlinks and clickable text
     */
    link: fcmaBrand.primary, // #5e9732

    /**
     * Link hover - Darker link color for hover state
     */
    linkHover: fcmaBrand.primaryHover, // #4a7928

    /**
     * Focus color - Brand color for focus indicators
     */
    focus: fcmaBrand.primary, // #5e9732
  },
};
