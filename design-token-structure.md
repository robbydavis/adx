# Design Token Structure - Almanac DX UI Kit

## Overview

This document summarizes the design token structure from the Almanac DX UI Kit Figma file, with particular attention to the connection between primitive and semantic variable collections.

## Variable Collection Architecture

The design system follows a hierarchical token structure with two primary collection types:

### 1. Primitive Collections
Primitive tokens are the foundational design values that define raw design properties without semantic meaning.

#### Color Primitives
- **Collection**: `Neutral`
- **Structure**: Numeric scale from lightest to darkest
- **Tokens**:
  - `Neutral/0`: `#ffffff` (White)
  - `Neutral/100`: `#f3f4f4` (Lightest gray)
  - `Neutral/200`: `#dee1e1` (Light gray)
  - `Neutral/300`: `#c8cccc` (Medium-light gray)
  - `Neutral/500`: `#929a9b` (Medium gray)
  - `Neutral/900`: `#273333` (Darkest gray)

#### Typography Primitives
- **Collections**: Font families with size, weight, and style variants
- **Font Families**: Trade Gothic (primary), Rift (display)
- **Structure**: Font family with size, weight, line height, and letter spacing properties
- **Examples**:
  - Trade Gothic variants: Regular, Light, Bold, Heavy, Condensed, Compressed (with italic options)
  - Rift variants: Light, Regular, Medium, Demi, Bold (with italic options)
  - Properties include: family, style, size, weight, lineHeight, letterSpacing

#### Size Primitives
- **Collection**: `Size`
- **Tokens**:
  - `Size/600`: `24` (24px spacing/sizing unit)

### 2. Semantic Collections
Semantic tokens reference primitive values but provide meaning and context for their usage in the UI.

#### Semantic Color Tokens
These tokens map to specific use cases and reference primitive color values:

- **Text Colors**:
  - `text-primary`: `#040404` (Primary text color - very dark, near black)
  - `text-reverse`: `#ffffff` (Text color for use on dark backgrounds - references Neutral/0)

- **Background Colors**:
  - `background-page`: `#ffffff` (Page background - references Neutral/0)

- **Border Colors**:
  - `border-subtle`: `#dee1e1` (Subtle border color - references Neutral/200)

- **Icon Colors**:
  - `icon-reverse`: `#ffffff` (Icon color for use on dark backgrounds - references Neutral/0)

## Connection Point: Primitive → Semantic

### How Primitives Connect to Semantics

The connection between primitive and semantic collections follows this pattern:

1. **Direct Reference**: Semantic tokens directly reference primitive values
   - Example: `background-page` → `Neutral/0` → `#ffffff`
   - Example: `border-subtle` → `Neutral/200` → `#dee1e1`
   - Example: `text-reverse` → `Neutral/0` → `#ffffff`
   - Example: `icon-reverse` → `Neutral/0` → `#ffffff`

2. **Derived Values**: Some semantic tokens may use values derived from primitives
   - Example: `text-primary` uses `#040404`, which may be derived from or related to `Neutral/900` (`#273333`) but is a custom value for optimal text contrast

### Benefits of This Structure

1. **Maintainability**: Changes to primitive values automatically cascade to all semantic tokens that reference them
2. **Consistency**: Ensures consistent color usage across the design system
3. **Flexibility**: Allows for easy theming by swapping primitive values
4. **Scalability**: New semantic tokens can be created by referencing existing primitives

## Token Naming Conventions

### Primitive Tokens
- Format: `{Category}/{Value}`
- Examples: `Neutral/100`, `Size/600`
- Categories are capitalized, values are numeric or descriptive

### Semantic Tokens
- Format: `{Purpose}-{Description}`
- Examples: `text-primary`, `background-page`, `border-subtle`, `icon-reverse`
- Uses kebab-case with descriptive, purpose-driven names

## Typography Styles

The design system defines comprehensive typography styles organized into five semantic categories. The primary font family is **Trade Gothic**, with **Rift** serving as the display typeface for marketing headlines.

### Brand Font Families

- **Trade Gothic**: Primary sans-serif font family
  - Available weights: Regular (Rg), Light (Lt), Bold (Bd), Heavy (Hv)
  - Variants: Standard, Condensed (Cn), Compressed (Cm)
  - Italic variants available for all weights
  - **Font Files**: Located in `fonts/trade-gothic/` (17 .otf files)
  - **Usage**: Primary typeface for UI, body text, headings, labels, and most interface elements
  
- **Rift**: Display typeface
  - Available weights: Light, Regular, Medium, Demi, Bold
  - Italic variants available for all weights
  - **Font Files**: Located in `fonts/rift/` (10 .otf files)
  - **Usage**: Display typeface used sparingly, primarily for headlines within a marketing context
  - **Note**: Not a serif font; reserved for special marketing applications

### Typography Style Categories

#### 1. Display Styles (6 variations)
- **Font Family**: Trade Gothic (Note: Rift is the display typeface for marketing headlines)
- **Weight**: Semibold
- **Case**: Uppercase
- **Line Height**: 120%
- **Letter Spacing**: -2%
- **Sizes**: Range from largest to moderate-large display sizes
- **Usage**: Large headlines, hero text, prominent display elements

#### 2. Eyebrow Styles (4 variations)
- **Font Family**: Trade Gothic
- **Weight**: Semibold
- **Case**: Uppercase
- **Line Height**: 100%
- **Letter Spacing**: 0%
- **Sizes**: 14px, 12px, 10px, 8px
- **Usage**: Small labels, category tags, metadata

#### 3. Heading Styles (10 variations)
- **Font Family**: Trade Gothic
- **Weight**: Semibold
- **Case**: Title case
- **Sizes**: Progressive hierarchy from large (H1) to small (H6)
- **Line Height & Letter Spacing**: Adjusted per size for optimal readability
- **Usage**: Section headings, content hierarchy

#### 4. Label Styles (6 variations)
- **Font Family**: Trade Gothic
- **Weight**: Regular or Medium
- **Sizes**: Small to very small
- **Usage**: UI element labels, form labels, button text

#### 5. Paragraph Styles (6 variations)
- **Font Family**: Trade Gothic
- **Weight**: Regular
- **Line Height**: Varies across variants (adjusted per size for optimal readability)
- **Letter Spacing**: 0%
- **Sizes**: Moderate to small body text sizes
- **Usage**: Body copy, descriptions, content text

## Elevation Styles

The design system defines a systematic elevation scale using shadow properties to create visual depth and hierarchy.

### Elevation Levels

All elevation shadows use a consistent color: `RGBA(39, 51, 51, 0.24)` with X offset of `0`.

#### elevation-400 (Highest)
- **Y Offset**: 16px
- **Blur Radius**: 32px
- **Usage**: Drawers, modals, dialogs, highest priority overlays

#### elevation-300
- **Y Offset**: 8px
- **Blur Radius**: 16px
- **Usage**: Menus, popovers, dropdowns

#### elevation-200
- **Y Offset**: 4px
- **Blur Radius**: 8px
- **Usage**: Intermediate elevation for cards and elevated containers

#### elevation-100 (Lowest)
- **Y Offset**: 2px
- **Blur Radius**: 4px
- **Usage**: Container/card hover & focus states, subtle elevation

### Base References

- **Base Container**: Uses `border-subtle` style
  - **Usage**: Default containers, cards, base-level elements
  
- **Background**: Uses `background-light` style
  - **Usage**: Page backgrounds, underlying surfaces

## Typography Token Structure

Typography tokens are organized by font family and usage context:

### Trade Gothic Tokens
- **Family**: Trade Gothic (primary sans-serif font)
- **Properties**: style, size, weight, lineHeight, letterSpacing
- **Variants**: Regular, Light, Bold, Heavy, Condensed (Cn), Compressed (Cm)
- **Usage**: UI elements, body text, headings, labels, paragraphs
- **Token Structure**: Organized by semantic categories (Display, Eyebrow, Heading, Label, Paragraph)

### Rift Tokens
- **Family**: Rift (display typeface)
- **Properties**: style, size, weight, lineHeight, letterSpacing
- **Variants**: Light, Regular, Medium, Demi, Bold (with italic options)
- **Usage**: Marketing headlines, display text (used sparingly)
- **Token Structure**: Reserved for special marketing display applications

## Recommendations for Token Usage

1. **Always use semantic tokens** in component designs rather than primitive tokens directly
2. **Reference primitives** when creating new semantic tokens to maintain consistency
3. **Follow the naming convention** when adding new tokens to the system
4. **Document relationships** between semantic and primitive tokens for maintainability

## Font Assets

Font files are stored in the project's `fonts/` directory:
- **Trade Gothic**: `fonts/trade-gothic/` - Contains 17 OpenType (.otf) font files
- **Rift**: `fonts/rift/` - Contains 10 OpenType (.otf) font files

All font files are validated OpenType format and ready for use in web and application development.

## Notes

- The variable structure demonstrates a clear separation of concerns between raw design values (primitives) and contextual usage (semantics)
- The connection point allows for systematic updates: changing a primitive value updates all dependent semantic tokens
- This structure supports design system evolution and theming capabilities
- Brand fonts (Trade Gothic and Rift) are available as .otf files in the project repository

---

*Generated from Figma file: Almanac DX UI Kit (c2FZTSid987UPL9JdSut5R)*
*Node ID: 7353-26815*
