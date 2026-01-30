/**
 * Rural 1st Theme
 *
 * Rural 1st brand theme with blue color identity.
 * Primary brand color: #005b94 (Rural 1st Blue)
 * Source: Figma → R1st Mode variable definitions
 *
 * Note: Primary and light values are from Figma.
 * Hover value is calculated based on FCMA pattern (lighter shade).
 */

import { Theme } from './types';
import { rural1stBrand } from '../primitives/colors';

/**
 * Rural 1st Theme Configuration
 */
export const rural1stTheme: Theme = {
  id: 'rural-first',
  name: 'Rural 1st',
  colors: {
    /** Rural 1st Blue - Primary brand color (from Figma) */
    brand: rural1stBrand.primary, // #005b94

    /** Rural 1st Blue hover - lighter shade (calculated) */
    brandHover: rural1stBrand.primaryHover, // #0070b8

    /** Rural 1st Blue light - subtle background (from Figma) */
    brandLight: rural1stBrand.primaryLight, // #e5f5f8

    /** Action color - same as brand */
    action: rural1stBrand.primary, // #005b94

    /** Action hover */
    actionHover: rural1stBrand.primaryHover, // #0070b8

    /** Link color - same as brand */
    link: rural1stBrand.primary, // #005b94

    /** Link hover */
    linkHover: rural1stBrand.primaryHover, // #0070b8

    /** Focus color */
    focus: rural1stBrand.primary, // #005b94
  },
};
