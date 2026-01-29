# Design Token Structure - Almanac DX UI Kit

## Overview

This document summarizes the design token structure from the Almanac DX UI Kit Figma file, with particular attention to the connection between primitive and semantic variable collections. The color palette brings unified and recognizable consistency to our internal-facing digital products and interfaces through a simple, intentional color system designed to maintain consistency throughout the design and development process.

## Color System Foundation

Almanac colors are made up of two key parts:

### Brand Colors
Brand colors are used to theme an application. For example, a Farm Credit Mid-America application vs a Rural 1st application. These themes are referred to as "Modes" in Figma and allow the same design system to adapt across different brand identities while maintaining consistent functionality.

### System Colors
System colors are the backbone of all our internal applications. They are rooted in a collection of primitive colors that carry no inherent meaning, but are later mapped to role-specific use cases through semantic tokens.

## Variable Collection Architecture

The design system follows a hierarchical token structure with two primary collection types:

### 1. Primitive Collections
Primitive tokens are the foundational design values that define raw design properties without semantic meaning. **These values are not used directly in the UI components** but are referenced by semantic tokens.

#### Color Primitives

Primitive colors are the raw, base values used within Almanac. These are the actual color hex codes that serve as the foundation for creating more abstract, purpose-driven color values.

**Key Points:**
- **Purpose**: Raw colors that reflect the brand's visual identity
- **Use**: NOT used directly in UI components; only referenced by semantic colors
- **Naming Conventions**: Clear, descriptive name for the color followed by its weight (e.g., `Neutral/500` for a medium neutral tone)
- **Flexibility**: Provide flexibility for designers to expand the color system as needed
- **Brand Colors**: Also considered primitive values, but can be mapped as semantic colors to create themeable applications

**Neutral Color Scale:**
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

Semantic tokens represent colors based on their functional roles in the UI rather than their actual color values. They map to primitive color values but are named according to the context in which they are used.

**Key Points:**
- **Purpose**: Ensure color choices are contextually appropriate and maintain usability across different themes and accessibility considerations
- **Use**: Applied directly to UI components; designed to adapt based on themes (e.g., FCMA/Rural 1st)
- **Contextual Naming**: Named based on the component or state they represent (e.g., `text-primary`, `background-page`, `border-subtle`)
- **Theme Flexibility**: By abstracting the color meaning, semantic colors can adapt to different themes by switching the primitive reference while retaining consistent functionality

#### The Four Pillars of Semantic Variables

The Almanac DX semantic variables are comprised of four pillars: **Background**, **Text**, **Border**, and **Icon**. These categories ensure consistent application of color throughout the design system.

##### Background Colors
Background semantic tokens define fills for pages, sections, containers, cards, panels, and interactive elements.

**Examples:**
- `background-page`: Page background (references `Neutral/0` - `#ffffff`)
- `background-primary`: Primary background for containers (references `Neutral/0`)
- `background-light`: Light background variant (references `Neutral/100` - `#f9f9f9`)
- `background-medium`: Medium background variant (references `Neutral/200` - `#dee1e1`)
- `background-dark`: Dark background variant (references `Neutral/300` - `#c8cccc`)
- `background-reverse`: Reverse background for dark themes (references `Neutral/900` - `#273333`)
- `background-brand`: Brand color for non-action items where brand identity is needed
- `background-brand-hover`: Hover state for brand backgrounds
- `background-action`: Button and action element backgrounds
- `background-action-hover`: Hover state for action elements
- `background-disabled`: Disabled element backgrounds

##### Text Colors
Text semantic tokens define text fills for various states and contexts.

**Examples:**
- `text-primary`: Primary body text (references `Neutral/900` or near-black value)
- `text-secondary`: Secondary text with reduced emphasis
- `text-tertiary`: Tertiary text for minimal emphasis
- `text-reverse`: Text for use on dark backgrounds (references `Neutral/0` - `#ffffff`)
- `text-brand`: Brand-colored text
- `text-link`: Link text color
- `text-link-hover`: Hover state for links
- `text-success`: Text for success/positive messaging
- `text-error`: Text for error/destructive messaging
- `text-warning`: Text for warning messaging
- `text-information`: Text for informational messaging

##### Border Colors
Border semantic tokens define borders for sections, containers, panels, and UI elements.

**Examples:**
- `border-reverse`: Borders on dark backgrounds (references `Neutral/0`)
- `border-subtle`: Subtle borders for containers (references `Neutral/200` - `#dee1e1`)
- `border-dark`: Darker borders for emphasis
- `border-strong`: Strong borders with high contrast (references `Neutral/900`)
- `border-brand`: Brand-colored borders for non-action items
- `border-focus`: Focus state borders (typically with additional styling)
- `border-success`: Borders for success/positive elements
- `border-error`: Borders for error/destructive elements
- `border-warning`: Borders for warning elements
- `border-information`: Borders for informational elements

##### Icon Colors
Icon semantic tokens define fills for iconography throughout the interface.

**Examples:**
- `icon-subtle`: Subtle icon color (references `Neutral/500`)
- `icon-dark`: Dark icon color (references `Neutral/900`)
- `icon-reverse`: Icons on dark backgrounds (references `Neutral/0` - `#ffffff`)
- `icon-brand`: Brand-colored icons for static elements
- `icon-link`: Brand-colored icons for links
- `icon-success`: Icons for success/positive elements
- `icon-error`: Icons for error/destructive elements
- `icon-warning`: Icons for warning elements
- `icon-information`: Icons for informational elements

## Connection Point: Primitive → Semantic

### How Primitives Connect to Semantics

The connection between primitive and semantic collections is the cornerstone of the Almanac design system. This relationship enables theming, consistency, and scalable design decisions.

**Connection Pattern:**

1. **Direct Reference**: Semantic tokens directly reference primitive values
   - Example: `background-page` → `Neutral/0` → `#ffffff`
   - Example: `border-subtle` → `Neutral/200` → `#dee1e1`
   - Example: `text-reverse` → `Neutral/0` → `#ffffff`
   - Example: `icon-reverse` → `Neutral/0` → `#ffffff`

2. **Derived Values**: Some semantic tokens may use values derived from primitives
   - Example: `text-primary` may use a value derived from or related to `Neutral/900` but optimized for text contrast
   - Example: Brand color primitives mapped to semantic action tokens for themed experiences

3. **Theme Adaptability**: Semantic tokens remain constant while their primitive references change
   - Example: `background-brand` in FCMA theme → Green primitive
   - Example: `background-brand` in Rural 1st theme → Different brand color primitive
   - The semantic token name stays the same; only the primitive reference changes

### Critical Design Principle

**⚠️ Always use semantic tokens in UI components, never primitive tokens directly.**

This principle ensures:
- **Consistency**: All instances of a UI element use the same semantic token
- **Themeability**: Changing themes updates all components automatically
- **Maintainability**: Updates to color meanings happen in one place
- **Accessibility**: Semantic tokens can be adjusted for contrast without breaking component logic

### Benefits of This Structure

1. **Maintainability**: Changes to primitive values automatically cascade to all semantic tokens that reference them
2. **Consistency**: Ensures uniform color usage across the entire design system
3. **Theme Flexibility**: Enables easy theme switching (FCMA/Rural 1st) by updating primitive references while maintaining semantic meaning
4. **Scalability**: New semantic tokens can be created by referencing existing primitives
5. **Accessibility**: Color relationships can be updated system-wide to meet accessibility standards
6. **Intent-Driven Design**: Designers and developers use tokens that describe purpose, not appearance

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

### For Designers and Developers

1. **⚠️ CRITICAL: Always use semantic tokens** in component designs and code - NEVER use primitive tokens directly
   - ✅ Correct: `color: var(--text-primary);`
   - ❌ Incorrect: `color: #273333;` or `color: var(--neutral-900);`

2. **Use contextually appropriate tokens** based on the element's purpose
   - Use `text-primary` for body text, not `border-dark` even if they have the same value
   - This ensures proper theme adaptation and semantic clarity

3. **Reference primitives only** when creating new semantic tokens to maintain system consistency

4. **Follow the naming convention** when adding new tokens:
   - Semantic: `{category}-{purpose}` (e.g., `background-action`, `text-error`)
   - Primitive: `{Category}/{Weight}` (e.g., `Neutral/500`, `Size/600`)

5. **Document relationships** between semantic and primitive tokens when extending the system

### For Design System Maintainers

1. **Expand primitives thoughtfully** - new primitive values should support multiple semantic use cases
2. **Create semantic tokens** for any new UI pattern or component need
3. **Update theme mappings** when adding brand-related semantic tokens
4. **Test accessibility** when updating primitive values that affect contrast ratios

## Font Assets

Font files are stored in the project's `fonts/` directory:
- **Trade Gothic**: `fonts/trade-gothic/` - Contains 17 OpenType (.otf) font files
- **Rift**: `fonts/rift/` - Contains 10 OpenType (.otf) font files

All font files are validated OpenType format and ready for use in web and application development.

## Notes

### Design System Architecture
- The variable structure demonstrates a clear separation of concerns between raw design values (primitives) and contextual usage (semantics)
- The connection point allows for systematic updates: changing a primitive value updates all dependent semantic tokens
- This structure supports design system evolution and theming capabilities across multiple brand identities

### Documentation Approach
- **Primitive tokens are intentionally not fully listed** in user-facing documentation to avoid confusion
- Only semantic tokens should be referenced in component implementation and design handoffs
- Complete primitive token listings are maintained in Figma for design system maintainers

### Font Assets
- Brand fonts (Trade Gothic and Rift) are available as .otf files in the project repository
- Font files are validated and ready for web and application development

---

*Generated from Figma file: Almanac DX UI Kit (c2FZTSid987UPL9JdSut5R)*
*Node ID: 7353-26815*
