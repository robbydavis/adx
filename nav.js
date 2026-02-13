/**
 * Shared Side Navigation Component
 *
 * Renders the side nav from a single source. Each page includes this script
 * and the nav is automatically rendered with the correct active state.
 */

const NAV_ITEMS = [
  // Overview & Tokens stay at top
  {
    href: 'adx.html',
    label: 'Overview',
    icon: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>'
  },
  {
    href: 'adx-tokens.html',
    label: 'Tokens',
    icon: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>'
  },
  {
    href: 'adx-layout.html',
    label: 'Layout',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>'
  },
  {
    href: 'adx-brand-assets.html',
    label: 'Brand Assets',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>'
  },
  {
    href: 'adx-icons.html',
    label: 'Icons',
    icon: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>'
  },
  {
    href: 'adx-glyphs.html',
    label: 'Glyphs',
    icon: '<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>'
  },
  // Components (alphabetical)
  {
    href: 'adx-accordion-card.html',
    label: 'Accordion Card',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="8 10 12 14 16 10"></polyline>'
  },
  {
    href: 'adx-alerts.html',
    label: 'Alerts',
    icon: '<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>'
  },
  {
    href: 'adx-buttons.html',
    label: 'Buttons',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>'
  },
  {
    href: 'adx-cards.html',
    label: 'Cards',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line>'
  },
  {
    href: 'adx-checkbox.html',
    label: 'Checkbox',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 11 12 14 16 10"></polyline>'
  },
  {
    href: 'adx-expansion-panel.html',
    label: 'Expansion Panel',
    icon: '<polyline points="6 9 12 15 18 9"></polyline><line x1="6" y1="15" x2="18" y2="15"></line>'
  },
  {
    href: 'adx-faq.html',
    label: 'FAQ',
    icon: '<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>'
  },
  {
    href: 'adx-menus.html',
    label: 'Menus',
    icon: '<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>'
  },
  {
    href: 'adx-radio.html',
    label: 'Radio Button',
    icon: '<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle>'
  },
  {
    href: 'adx-selectable-card.html',
    label: 'Selectable Card',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><polyline points="9 11 12 14 22 4"></polyline>'
  },
  {
    href: 'adx-selects.html',
    label: 'Selects',
    icon: '<polyline points="6 9 12 15 18 9"></polyline>'
  },
  {
    href: 'adx-side-nav.html',
    label: 'Side Nav',
    icon: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>'
  },
  {
    href: 'adx-stepper.html',
    label: 'Stepper',
    icon: '<polyline points="4 12 8 12 12 12"></polyline><polygon points="12 8 20 12 12 16 12 8"></polygon>'
  },
  {
    href: 'adx-text-areas.html',
    label: 'Text Areas',
    icon: '<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>'
  },
  {
    href: 'adx-text-inputs.html',
    label: 'Text Inputs',
    icon: '<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>'
  },
  {
    href: 'adx-toast.html',
    label: 'Toast',
    icon: '<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>'
  },
  {
    href: 'adx-tooltip.html',
    label: 'Tooltip',
    icon: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>'
  }
];

function createSvgIcon(iconPath) {
  return `<svg class="adx-side-nav-item__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${iconPath}</svg>`;
}

function getCurrentPage() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1) || 'adx.html';
  return filename;
}

function renderNav() {
  const container = document.getElementById('side-nav');
  if (!container) return;

  const currentPage = getCurrentPage();

  const itemsHtml = NAV_ITEMS.map(item => {
    const isActive = item.href === currentPage;
    const activeClass = isActive ? ' adx-side-nav-item--active' : '';
    return `
      <a href="${item.href}" class="adx-side-nav-item${activeClass}">
        ${createSvgIcon(item.icon)}
        <span class="adx-side-nav-item__label">${item.label}</span>
      </a>`;
  }).join('');

  container.innerHTML = `
    <div class="adx-side-nav__items">
      ${itemsHtml}
    </div>
    <button class="adx-side-nav-toggle" onclick="toggleNav()">
      <svg class="adx-side-nav-toggle__icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline></svg>
    </button>`;
}

// Theme and nav toggle functions
function setTheme(themeId) {
  document.documentElement.className = 'theme-' + themeId;
  document.getElementById('btn-fcma').classList.toggle('active', themeId === 'fcma');
  document.getElementById('btn-rural').classList.toggle('active', themeId === 'rural-first');
}

function toggleNav() {
  var nav = document.getElementById('side-nav');
  nav.classList.toggle('adx-side-nav--open');
  nav.classList.toggle('adx-side-nav--collapsed');
}

function toggleMobileNav() {
  var nav = document.getElementById('side-nav');
  nav.classList.toggle('adx-side-nav--mobile-open');
}

// Render nav when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderNav);
} else {
  renderNav();
}
