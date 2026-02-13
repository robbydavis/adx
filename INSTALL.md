# Installing @almanac/adx

This guide covers how to install and use the ADX design system package in your React projects.

## Prerequisites

Before installing in another project, always build the package first:

```bash
cd /path/to/adx
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` folder. The package won't work without this step.

---

## Installation Methods

Choose the method that best fits your workflow:

### Option 1: Local Path (Recommended for Getting Started)

Best for: Solo development, quick testing, learning the workflow.

From your new project folder:

```bash
npm install /path/to/adx
```

Or using a relative path:

```bash
npm install ../adx
```

**Pros:**
- Simplest setup
- Changes in ADX are immediately available (after rebuilding)

**Cons:**
- Path is relative to your project — if you move folders, the link breaks
- Other team members need the same folder structure

---

### Option 2: Git URL (Best for Team Sharing)

Best for: Sharing with teammates, consistent versioning across projects.

First, push ADX to a Git repository (GitHub, GitLab, Bitbucket, etc.), then:

```bash
# HTTPS
npm install git+https://github.com/your-org/adx.git

# SSH (if you have SSH keys configured)
npm install git+ssh://git@github.com:your-org/adx.git
```

To get updates after pushing changes to ADX:

```bash
npm update @almanac/adx
```

**Pros:**
- Works for entire team without shared folder structure
- Can pin to specific commits or tags

**Cons:**
- Must push changes and run `npm update` to see them

---

### Option 3: npm link (For Active Development)

Best for: Actively developing ADX and a consuming project simultaneously.

```bash
# Step 1: In the ADX folder, create a global link
cd /path/to/adx
npm link

# Step 2: In your project folder, use the link
cd /path/to/your-project
npm link @almanac/adx
```

**Pros:**
- Live updates without reinstalling
- Great for rapid iteration

**Cons:**
- Links can get stale — if things feel broken, run both commands again
- Each developer needs to set up the link locally

---

## Using the Package

### 1. Import Styles (Required)

Add this import to your app's entry point (e.g., `index.tsx`, `App.tsx`, or `main.tsx`):

```tsx
import '@almanac/adx/styles';
```

This loads:
- CSS custom properties (design tokens)
- Font-face declarations for Trade Gothic and Rift
- Component styles

### 2. Wrap Your App with ThemeProvider

```tsx
import { ThemeProvider } from '@almanac/adx';

function App() {
  return (
    <ThemeProvider initialTheme="fcma">
      <YourApp />
    </ThemeProvider>
  );
}
```

Available themes: `"fcma"` | `"rural-first"`

### 3. Use Components

```tsx
import { Button, TextInput, Select } from '@almanac/adx';

function MyForm() {
  return (
    <form>
      <TextInput label="Email" placeholder="you@example.com" />
      <TextInput label="Password" type="password" />
      <Button variant="primary">Sign In</Button>
    </form>
  );
}
```

### 4. Use Design Tokens (Optional)

For custom components that need to match the design system:

```tsx
import { background, text, typography } from '@almanac/adx';

const CustomCard = () => (
  <div style={{
    backgroundColor: background.primary,
    color: text.primary,
    ...typography.paragraph.md,
  }}>
    Custom content
  </div>
);
```

Or use CSS custom properties:

```css
.custom-card {
  background-color: var(--background-primary);
  color: var(--text-primary);
  font-family: var(--font-family-trade-gothic);
  font-size: var(--font-size-16);
}
```

---

## Troubleshooting

| Problem | Cause | Solution |
|---------|-------|----------|
| "Module not found" or "Cannot find module" | Package not built | Run `npm run build` in the ADX folder |
| Styles not appearing | CSS not imported | Add `import '@almanac/adx/styles'` to your entry file |
| Fonts not loading | Font files not accessible | Check that `fonts/` folder exists in ADX |
| React errors about hooks or multiple instances | Two copies of React | Ensure your project uses React 18 (check `peerDependencies`) |
| Changes not appearing after editing ADX | Stale cache | 1. Rebuild ADX (`npm run build`), 2. Delete `node_modules` in your project, 3. Reinstall (`npm install`) |
| TypeScript errors about types | Types not generated | Rebuild ADX — types are in `dist/*.d.ts` |
| "Cannot use import statement outside a module" | Wrong module format | Check your bundler config supports ES modules |

---

## Verification Checklist

After installing, verify everything works:

- [ ] Components import without errors
- [ ] Styles render correctly (colors, fonts, spacing)
- [ ] Theme switching works (FCMA green ↔ Rural 1st blue)
- [ ] TypeScript autocomplete shows component props
- [ ] No console errors about missing modules

---

## Quick Reference

### Package Exports

```tsx
// Components
import {
  Button,
  TextInput,
  Select,
  Menu, MenuItem,
  SideNav, SideNavItem, SideNavToggle,
  Tooltip,
  SelectableCard, SelectableCardGroup,
  Badge, BadgeDot,
} from '@almanac/adx';

// Theme System
import {
  ThemeProvider,
  useTheme,
  useTokens,
} from '@almanac/adx';

// Design Tokens
import {
  background,
  text,
  border,
  icon,
  typography,
  elevation,
} from '@almanac/adx';

// Styles (CSS)
import '@almanac/adx/styles';
```

### Folder Structure (What Gets Published)

```
@almanac/adx/
├── dist/           # Compiled JavaScript + TypeScript declarations
│   ├── index.js
│   ├── index.d.ts
│   ├── react/      # React components
│   ├── tokens/     # Token definitions + CSS
│   └── assets/     # Icons, logos
├── fonts/          # Trade Gothic + Rift font files
└── README.md
```

---

## Getting Help

If you run into issues:

1. Check this troubleshooting guide first
2. Ensure ADX is built (`npm run build`)
3. Try a clean install (delete `node_modules`, reinstall)
4. Check the console for specific error messages

For questions about components or tokens, see the HTML preview pages in the ADX project folder (e.g., `adx-buttons.html`, `adx-tokens.html`).
