/**
 * Primitive Tokens Index
 *
 * ⚠️ CRITICAL: These primitive tokens are for INTERNAL USE ONLY.
 * They should NEVER be imported directly in UI components.
 *
 * Primitives are the raw design values that serve as the foundation
 * for semantic tokens. They carry no inherent meaning and should only
 * be referenced when creating semantic tokens or themes.
 *
 * ✅ CORRECT: Use semantic tokens in components
 *    import { background, text } from '@almanac/adx';
 *
 * ❌ WRONG: Never import primitives in components
 *    import { neutral } from '@almanac/adx/primitives';
 */

export * from './colors';
export * from './typography';
export * from './sizing';
