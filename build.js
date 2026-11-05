const fs = require('fs');
const path = require('path');

const {
  getHomePage,
  getServicesPage,
  getLogoDesignPage,
  getLogoAnimationPage,
  getPortfolioPage
} = require('./src/pages');

const distDir = path.join(__dirname, 'dist');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function build() {
  console.log('Building Sheikh Sohel website...');

  // 1. Prepare dist directory
  ensureDir(distDir);
  ensureDir(path.join(distDir, 'css'));
  ensureDir(path.join(distDir, 'js'));
  ensureDir(path.join(distDir, 'services'));
  ensureDir(path.join(distDir, 'logo-design'));
  ensureDir(path.join(distDir, 'logo-animation'));
  ensureDir(path.join(distDir, 'portfolio'));

  // 2. Copy CSS & JS
  const cssSource = fs.readFileSync(path.join(__dirname, 'src', 'css', 'style.css'), 'utf8');
  fs.writeFileSync(path.join(distDir, 'css', 'style.css'), cssSource, 'utf8');

  const jsSource = fs.readFileSync(path.join(__dirname, 'src', 'js', 'main.js'), 'utf8');
  fs.writeFileSync(path.join(distDir, 'js', 'main.js'), jsSource, 'utf8');

  // 3. Build HTML pages
  // Homepage
  const homeHtml = getHomePage('./');
  fs.writeFileSync(path.join(distDir, 'index.html'), homeHtml, 'utf8');

  // Services
  const servicesHtml = getServicesPage('../');
  fs.writeFileSync(path.join(distDir, 'services', 'index.html'), servicesHtml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'services.html'), getServicesPage('./'), 'utf8');

  // Logo Design
  const logoDesignHtml = getLogoDesignPage('../');
  fs.writeFileSync(path.join(distDir, 'logo-design', 'index.html'), logoDesignHtml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'logo-design.html'), getLogoDesignPage('./'), 'utf8');

  // Logo Animation
  const logoAnimationHtml = getLogoAnimationPage('../');
  fs.writeFileSync(path.join(distDir, 'logo-animation', 'index.html'), logoAnimationHtml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'logo-animation.html'), getLogoAnimationPage('./'), 'utf8');

  // Portfolio
  const portfolioHtml = getPortfolioPage('../');
  fs.writeFileSync(path.join(distDir, 'portfolio', 'index.html'), portfolioHtml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'portfolio.html'), getPortfolioPage('./'), 'utf8');

  console.log('Build completed successfully in dist/');
  console.log('Output files:');
  const files = [
    'index.html',
    'services/index.html',
    'services.html',
    'logo-design/index.html',
    'logo-design.html',
    'logo-animation/index.html',
    'logo-animation.html',
    'portfolio/index.html',
    'portfolio.html',
    'css/style.css',
    'js/main.js'
  ];
  for (const f of files) {
    const p = path.join(distDir, f);
    if (fs.existsSync(p)) {
      console.log(`  ✓ ${f} (${fs.statSync(p).size} bytes)`);
    } else {
      console.error(`  ✗ MISSING: ${f}`);
    }
  }
}

build();
