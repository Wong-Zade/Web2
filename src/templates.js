// Shared templates and SVG assets

const logoSvg = (size = 28, basePath = './') => `
<img class="logo-icon" src="${basePath}images/logo.png" width="${size}" height="${size}" alt="StudioWongs Logo" style="border-radius: 8px;" />
`;

const portfolioLogos = {
  zpfd: `
<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #84cc16; border-radius: 8px; padding: 20px;">
  <div style="font-family: 'Wix Madefor Display', sans-serif; font-size: 26px; font-weight: 900; letter-spacing: 2px; color: #000000;">ZPFD2</div>
  <div style="font-family: 'Wix Madefor Text', sans-serif; font-size: 10px; font-weight: 700; letter-spacing: 3px; color: #000000; margin-top: 4px;">BEST IN CLASS</div>
</div>`,

  vivaseats: `
<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #ffffff; border-radius: 8px; padding: 20px; gap: 8px;">
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 3L4 19H20L12 3Z" fill="#8b5cf6" opacity="0.8"/>
    <path d="M12 8L7 19H17L12 8Z" fill="#06b6d4" opacity="0.9"/>
  </svg>
  <span style="font-family: 'Wix Madefor Display', sans-serif; font-size: 20px; font-weight: 700; color: #4c1d95;">vivaseats</span>
</div>`,

  deflock: `
<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #ffffff; border-radius: 8px; padding: 20px;">
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
    <path d="M10 8H20C24.4 8 28 11.6 28 16C28 20.4 24.4 24 20 24H10V8Z" stroke="#0f172a" stroke-width="4"/>
    <rect x="18" y="14" width="6" height="12" rx="2" fill="#a855f7"/>
  </svg>
  <span style="font-family: 'Wix Madefor Display', sans-serif; font-size: 15px; font-weight: 800; letter-spacing: 2px; color: #0f172a; margin-top: 8px;">DEFLOCK</span>
</div>`,

  red: `
<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #ffffff; border-radius: 8px; padding: 20px;">
  <div style="display: flex; align-items: flex-start; font-family: 'Wix Madefor Display', sans-serif; font-size: 34px; font-weight: 900; color: #000000; line-height: 1;">
    <span>red</span>
    <span style="width: 10px; height: 10px; border-radius: 50%; background-color: #e11d48; display: inline-block; margin-left: 2px; margin-top: 2px;"></span>
  </div>
  <span style="font-family: 'Wix Madefor Text', sans-serif; font-size: 9px; font-weight: 600; color: #000000; letter-spacing: 1px; margin-top: 4px;">real estate domain</span>
</div>`,

  artonia: `
<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #faf3e0; border-radius: 8px; padding: 20px;">
  <svg width="44" height="44" viewBox="0 0 44 44" fill="none">
    <circle cx="22" cy="22" r="18" fill="#e28743" stroke="#000000" stroke-width="2"/>
    <ellipse cx="22" cy="24" rx="8" ry="12" fill="#eab308"/>
    <circle cx="17" cy="20" r="3" fill="#0284c7"/>
    <circle cx="27" cy="20" r="3" fill="#0284c7"/>
    <path d="M22 24V28M19 32C20.5 33 23.5 33 25 32" stroke="#000000" stroke-width="2" stroke-linecap="round"/>
  </svg>
  <span style="font-family: 'Wix Madefor Display', sans-serif; font-size: 13px; font-weight: 800; letter-spacing: 3px; color: #1c1917; margin-top: 6px;">ARTONIA</span>
</div>`,

  onlybest: `
<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #000000; border-radius: 8px; padding: 20px;">
  <div style="width: 70px; height: 70px; border-radius: 50%; border: 2px solid #eab308; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #eab308; font-family: 'Wix Madefor Display', sans-serif; font-weight: 800; font-size: 11px; letter-spacing: 1.5px; line-height: 1.2;">
    <span>ONLY</span>
    <span>BEST</span>
  </div>
</div>`,

  backline: `
<div style="width: 100%; height: 100%; display: flex; flex-direction: column; align-items: center; justify-content: center; background-color: #000000; border-radius: 8px; padding: 20px;">
  <span style="font-family: serif; font-size: 10px; font-weight: 600; letter-spacing: 3px; color: #f5f5f4;">THE</span>
  <span style="font-family: serif; font-size: 16px; font-weight: 700; letter-spacing: 2px; color: #ffffff;">BACKLINE.</span>
  <span style="font-family: serif; font-size: 10px; font-weight: 600; letter-spacing: 3px; color: #f5f5f4;">COMPANY</span>
</div>`,

  scend: `
<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #000000; border-radius: 8px; padding: 20px; gap: 4px;">
  <span style="font-family: 'Wix Madefor Display', sans-serif; font-size: 22px; font-weight: 900; letter-spacing: 1.5px; color: #ffffff;">SCEND</span>
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style="margin-bottom: 10px;">
    <rect x="1" y="1" width="10" height="10" stroke="#ffffff" stroke-width="2"/>
  </svg>
</div>`,

  arabic: `
<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: #090d16; border-radius: 8px; padding: 20px;">
  <div style="border: 1px solid #d97706; padding: 8px 14px; border-radius: 4px; display: flex; flex-direction: column; align-items: center;">
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <path d="M16 4C10 4 6 9 6 15C6 22 13 28 16 28C19 28 26 22 26 15C26 9 22 4 16 4ZM16 20C14 20 12 18 12 15C12 12 14 10 16 10C18 10 20 12 20 15C20 18 18 20 16 20Z" fill="#d97706"/>
    </svg>
    <span style="font-size: 8px; color: #d97706; margin-top: 4px; letter-spacing: 1px;">ORIGINAL</span>
  </div>
</div>`
};

const testimonialAvatars = {
  julia: `
<div class="avatar-circle" style="background-color: #f472b6;">
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="15" r="9" fill="#fbcfe8"/>
    <path d="M8 38C8 30 13 26 20 26C27 26 32 30 32 38" fill="#db2777"/>
    <path d="M12 14C12 9 15 6 20 6C25 6 28 9 28 14C28 16 26 18 24 18H16C14 18 12 16 12 14Z" fill="#4a044e"/>
  </svg>
</div>`,

  nancy: `
<div class="avatar-circle" style="background-color: #f87171;">
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="15" r="9" fill="#fecaca"/>
    <path d="M8 38C8 30 13 26 20 26C27 26 32 30 32 38" fill="#dc2626"/>
    <path d="M11 15C11 8 15 5 20 5C25 5 29 8 29 15C29 19 27 20 20 20C13 20 11 19 11 15Z" fill="#b91c1c"/>
  </svg>
</div>`,

  usman: `
<div class="avatar-circle" style="background-color: #38bdf8;">
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="15" r="9" fill="#bae6fd"/>
    <path d="M8 38C8 30 13 26 20 26C27 26 32 30 32 38" fill="#0284c7"/>
    <path d="M14 14H18V17H14V14ZM22 14H26V17H22V14Z" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M18 15.5H22" stroke="#0f172a" stroke-width="1.5"/>
  </svg>
</div>`,

  natasha: `
<div class="avatar-circle" style="background-color: #c084fc;">
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="15" r="9" fill="#e9d5ff"/>
    <path d="M8 38C8 30 13 26 20 26C27 26 32 30 32 38" fill="#7e22ce"/>
    <circle cx="14" cy="12" r="5" fill="#581c87"/>
    <circle cx="26" cy="12" r="5" fill="#581c87"/>
    <circle cx="20" cy="9" r="6" fill="#581c87"/>
  </svg>
</div>`
};

function renderHeader(activePage = 'home', basePath = './') {
  return `
<header class="site-header">
  <div class="container nav-container">
    <a href="${basePath}" class="logo-link" aria-label="StudioWongs Homepage">
      ${logoSvg(28, basePath)}
      <span class="sr-only">StudioWongs</span>
    </a>

    <nav class="nav-desktop" aria-label="Main Navigation">
      <a href="${basePath}" class="nav-item ${activePage === 'home' ? 'active' : ''}">Home</a>
      
      <div class="nav-dropdown">
        <a href="${basePath}services/" class="nav-item ${activePage === 'services' || activePage === 'logo-design' || activePage === 'logo-animation' ? 'active' : ''}">
          Services
        </a>
        <div class="dropdown-menu">
          <a href="${basePath}logo-design/" class="dropdown-link">Logo Design</a>
          <a href="${basePath}logo-animation/" class="dropdown-link">Logo Animation</a>
          <a href="${basePath}portfolio/" class="dropdown-link">Portfolio</a>
        </div>
      </div>

      <a href="${basePath}#templates" class="nav-item">After Effects Templates</a>
      <a href="${basePath}#blog" class="nav-item">Blog</a>
      <a href="${basePath}#about" class="nav-item">About</a>
      <a href="${basePath}#contact" class="nav-item">Contact</a>
    </nav>

    <div class="header-actions">
      <button class="login-btn" type="button" aria-label="Log In">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
        <span>Log In</span>
      </button>

      <button class="mobile-menu-toggle" type="button" aria-label="Open Mobile Menu">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </div>
  </div>
</header>

<!-- Mobile Drawer Overlay -->
<div class="mobile-nav-overlay" aria-label="Mobile Navigation Menu">
  <div class="mobile-nav-header">
    <a href="${basePath}" class="logo-link">
      ${logoSvg(32, basePath)}
    </a>
    <button class="mobile-close-btn" type="button" aria-label="Close Menu">✕</button>
  </div>
  <div class="mobile-links">
    <a href="${basePath}">Home</a>
    <div>
      <a href="${basePath}services/">Services</a>
      <div class="mobile-sublinks">
        <a href="${basePath}logo-design/">— Logo Design</a>
        <a href="${basePath}logo-animation/">— Logo Animation</a>
        <a href="${basePath}portfolio/">— Portfolio</a>
      </div>
    </div>
    <a href="${basePath}#templates">After Effects Templates</a>
    <a href="${basePath}#blog">Blog</a>
    <a href="${basePath}#about">About</a>
    <a href="${basePath}#contact">Contact</a>
  </div>
</div>
`;
}

function renderFooter(basePath = './') {
  return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <!-- Brand column -->
      <div class="footer-brand">
        ${logoSvg(42, basePath)}
        <div class="footer-brand-title">
          <div>studio</div>
          <div>wongs</div>
        </div>
      </div>

      <!-- Policies column -->
      <div class="footer-column">
        <h4>Policies</h4>
        <div class="footer-links-list">
          <a href="${basePath}#terms">Terms & Conditions</a>
          <a href="${basePath}#cancellation">Cancellation Policy</a>
          <a href="${basePath}#payment">Payment Policy</a>
          <a href="${basePath}#delivery">Delivery Policy</a>
          <a href="${basePath}#refund">Refund Policy</a>
          <a href="${basePath}#cookies">Cookie Policy</a>
          <a href="${basePath}#privacy">Privacy Policy</a>
        </div>
      </div>

      <!-- Subscribe column -->
      <div class="footer-column subscribe-box">
        <h4>Subscribe and join our community !</h4>
        <p>Free tutorial files, updates, and template discounts</p>
        <p class="sub-text">Join our community today!</p>
        
        <form class="subscribe-form" action="#" method="POST">
          <input type="email" class="subscribe-input" placeholder="e.g., name@example.com" required aria-label="Email address" />
          <button type="submit" class="subscribe-btn">Subscribe</button>
        </form>

        <label class="checkbox-label">
          <input type="checkbox" required />
          <span>By clicking the subscribe form I agree to the <a href="${basePath}#terms" style="text-decoration: underline;">Terms & Conditions</a></span>
        </label>
      </div>
    </div>

    <div class="copyright-bar">
      Copyright © 2026 StudioWongs · All Rights Reserved.
    </div>
  </div>
</footer>
`;
}

function renderCookieBanner(basePath = './') {
  return `
<div class="cookie-banner" role="dialog" aria-label="Cookie consent banner">
  <div class="cookie-text">
    We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies. 
    <a href="${basePath}#privacy">Privacy Policy</a>
  </div>
  <div class="cookie-actions">
    <button class="cookie-btn-settings" type="button">Settings</button>
    <button class="cookie-btn-accept" type="button">Accept</button>
    <button class="cookie-btn-close" type="button" aria-label="Close cookie banner">✕</button>
  </div>
</div>
`;
}

module.exports = {
  logoSvg,
  portfolioLogos,
  testimonialAvatars,
  renderHeader,
  renderFooter,
  renderCookieBanner
};
