/**
 * Semantic Radius Tokens
 *
 * Radius sizes for containers, matching Figma semantic variable names.
 * Source: Figma → Semantic Variables → Radius
 *
 * ✅ USE THESE TOKENS in your components - they are the public API
 * ❌ NEVER use primitive borderRadius tokens directly in components
 */

import { borderRadius } from '../primitives/sizing';

/**
 * Radius tokens
 * Figma semantic variable names → primitive borderRadius values
 */
export const radius = {
  /** radius-square — 0px (size-0) */
  square: borderRadius.none,

  /** radius-2xs — 4px (size-100) */
  '2xs': borderRadius.md,

  /** radius-xs — 8px (size-200) */
  xs: borderRadius.lg,

  /** radius-s — 12px (size-300) */
  s: borderRadius.xl,

  /** radius-m — 16px (size-400) */
  m: borderRadius['2xl'],

  /** radius-l — 20px (size-500) */
  l: borderRadius['3xl'],

  /** radius-xl — 24px (size-600) */
  xl: borderRadius['4xl'],

  /** radius-2xl — 32px (size-800) */
  '2xl': borderRadius['5xl'],

  /** radius-round — 9999px (size-9999) */
  round: borderRadius.full,
} as const;

// Type export for TypeScript consumers
export type Radius = typeof radius;
