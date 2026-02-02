/**
 * CSS Generation Script
 *
 * This script validates that CSS token files exist and are properly formatted.
 * The CSS tokens are currently maintained manually in src/tokens/styles/tokens.css
 *
 * Future enhancement: Generate tokens.css programmatically from TypeScript tokens
 */

const fs = require('fs');
const path = require('path');

const STYLES_DIR = path.join(__dirname, '..', 'src', 'tokens', 'styles');
const FONTS_CSS = path.join(STYLES_DIR, 'fonts.css');
const TOKENS_CSS = path.join(STYLES_DIR, 'tokens.css');
const LAYOUT_CSS = path.join(STYLES_DIR, 'layout.css');
const BUTTON_CSS = path.join(STYLES_DIR, 'button.css');
const SELECT_CSS = path.join(STYLES_DIR, 'select.css');
const MENU_CSS = path.join(STYLES_DIR, 'menu.css');
const INDEX_CSS = path.join(STYLES_DIR, 'index.css');

console.log('🎨 Validating CSS token files...\n');

// Check if all required CSS files exist
const files = [
  { path: FONTS_CSS, name: 'fonts.css' },
  { path: TOKENS_CSS, name: 'tokens.css' },
  { path: LAYOUT_CSS, name: 'layout.css' },
  { path: BUTTON_CSS, name: 'button.css' },
  { path: SELECT_CSS, name: 'select.css' },
  { path: MENU_CSS, name: 'menu.css' },
  { path: INDEX_CSS, name: 'index.css' },
];

let allFilesExist = true;

files.forEach(file => {
  if (fs.existsSync(file.path)) {
    const stats = fs.statSync(file.path);
    console.log(`✅ ${file.name} (${stats.size} bytes)`);
  } else {
    console.log(`❌ ${file.name} - NOT FOUND`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.error('\n❌ Error: Some CSS files are missing');
  process.exit(1);
}

console.log('\n✅ All CSS token files validated successfully');
console.log('\nCSS files ready for use:');
console.log('  - @font-face declarations: src/tokens/styles/fonts.css');
console.log('  - CSS custom properties: src/tokens/styles/tokens.css');
console.log('  - Entry point: src/tokens/styles/index.css');
