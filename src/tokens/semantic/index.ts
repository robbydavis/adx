/**
 * Semantic Tokens Index
 *
 * ✅ These semantic tokens are the PUBLIC API
 * Always use these in your components, never import primitives directly.
 *
 * Semantic tokens are organized into the Four Pillars:
 * - Background: Page, container, and element fills
 * - Text: Text colors for all contexts
 * - Border: Border colors and focus states
 * - Icon: Icon fills and states
 *
 * Plus additional semantic categories:
 * - Typography: Complete typographic system (Display, Eyebrow, Heading, Label, Paragraph)
 * - Elevation: Shadow styles for visual depth and hierarchy
 * - Radius: Container corner rounding (square → round)
 */

export * from './background';
export * from './text';
export * from './border';
export * from './icon';
export * from './typography';
export * from './elevation';
export * from './layout';
export * from './radius';
