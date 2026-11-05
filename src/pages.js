const {
  portfolioLogos,
  testimonialAvatars,
  renderHeader,
  renderFooter,
  renderCookieBanner
} = require('./templates');

function renderDoc({
  title,
  activePage,
  pageType = '',
  basePath = './',
  content = ''
}) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <link rel="stylesheet" href="${basePath}css/style.css">
</head>
<body data-page-type="${pageType}">
  ${renderHeader(activePage, basePath)}
  
  <main id="main-content">
    ${content}
  </main>

  ${renderFooter(basePath)}
  ${renderCookieBanner(basePath)}

  <script src="${basePath}js/main.js"></script>
</body>
</html>`;
}

// 1. HOME PAGE
function getHomePage(basePath = './') {
  const content = `
<!-- HERO SECTION -->
<section class="hero-section">
  <div class="hero-bg-accent"></div>
  <div class="container hero-grid">
    <div class="hero-content">
      <h1 class="hero-title">
        Custom Logo Design<br>
        <span class="highlight">& Animation Studio</span>
      </h1>
      <p class="hero-subtitle">
        I'll Provide Custom logo animations for startups and established brands that enhance brand identity and make your visuals stand out across all digital platforms.
      </p>
      <a href="${basePath}services/" class="btn-cyan">
        <span>Services</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </a>
    </div>

    <div class="hero-visual">
      <div class="hero-emblem">
        <span class="emblem-symbol">SW</span>
      </div>
    </div>
  </div>
</section>

<!-- WORK PROCESS SECTION -->
<section class="process-section">
  <div class="container">
    <div class="process-grid">
      <div class="process-preview">
        <div style="position: absolute; text-align: center; color: #ffffff;">
          <div style="font-family: 'Wix Madefor Display', sans-serif; font-size: 28px; font-weight: 800; letter-spacing: 1px;">
            LOGO<br><span style="font-size: 18px; font-weight: 600; color: #c7d2fe;">DESIGN & ANIMATION</span>
          </div>
        </div>
        <button class="video-play-btn" type="button" aria-label="Play video introduction" style="z-index: 2;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        </button>
      </div>

      <div class="process-info">
        <h2>Explore Our Services &amp;<br>Work Process</h2>
        <p>
          We offer custom logo design and animations, which is why our services are highly customizable and unique. We create everything from scratch.
        </p>
        <a href="${basePath}#contact" class="btn-white">How to Order</a>
      </div>
    </div>

    <!-- Stepper Bar -->
    <div class="stepper-container">
      <div class="step-item">
        <div class="step-dot"></div>
        <div class="step-label">Select Service</div>
      </div>
      <div class="step-item">
        <div class="step-dot"></div>
        <div class="step-label">Choose Package</div>
      </div>
      <div class="step-item">
        <div class="step-dot"></div>
        <div class="step-label">Fill the Order Form</div>
      </div>
      <div class="step-item">
        <div class="step-dot"></div>
        <div class="step-label">We'll Contact you &amp;<br>Confirm Order</div>
      </div>
      <div class="step-item">
        <div class="step-dot"></div>
        <div class="step-label">Make Payment</div>
      </div>
      <div class="step-item">
        <div class="step-dot"></div>
        <div class="step-label">Order Placed</div>
      </div>
    </div>
  </div>
</section>

<!-- SERVICES SECTION -->
<section class="services-section">
  <div class="container">
    <h2 class="section-title">Services</h2>
    
    <div class="services-cards-grid">
      <!-- Card 1 -->
      <div class="service-card">
        <div class="service-preview-box">
          <div class="preview-grid-bg"></div>
          <div style="position: relative; z-index: 2; width: 64px; height: 64px; border-radius: 50%; background: #000; display: flex; align-items: center; justify-content: center; color: #a855f7; font-weight: 800; font-size: 24px;">
            W
          </div>
        </div>
        <div class="service-body">
          <p>
            Take a look at our <span class="cyan-text">Logo Animation</span> Packages and pick the one that's just right for you.
          </p>
          <a href="${basePath}logo-animation/" class="service-btn">Logo Animation</a>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="service-card">
        <div class="service-preview-box">
          <div class="preview-grid-bg"></div>
          <div style="position: relative; z-index: 2; display: flex; align-items: center; gap: 4px;">
            <span style="font-family: 'Wix Madefor Display', sans-serif; font-size: 40px; font-weight: 900; color: #000;">W</span>
            <span style="font-family: 'Wix Madefor Display', sans-serif; font-size: 40px; font-weight: 900; color: #ef4444;">W</span>
          </div>
        </div>
        <div class="service-body">
          <p>
            Explore our <span class="cyan-text">Logo Design</span> Packages and select the one that suits your requirements.
          </p>
          <a href="${basePath}logo-design/" class="service-btn">Logo Design</a>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="service-card">
        <div class="service-preview-box">
          <div class="preview-grid-bg"></div>
          <div style="position: relative; z-index: 2; font-family: 'Wix Madefor Display', sans-serif; font-size: 38px; font-weight: 900; color: #ef4444; letter-spacing: -2px;">
            SW
          </div>
        </div>
        <div class="service-body">
          <p>
            If you Looking for <span class="cyan-text">Logo Design + Animation</span>, check our packages and fill this form.
          </p>
          <a href="${basePath}#contact" class="service-btn">Custom Request</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- PORTFOLIO SECTION -->
<section class="portfolio-section">
  <div class="container">
    <h2 class="section-title">Portfolio</h2>

    <div class="portfolio-grid">
      <div class="portfolio-card">${portfolioLogos.zpfd}</div>
      <div class="portfolio-card">${portfolioLogos.vivaseats}</div>
      <div class="portfolio-card">${portfolioLogos.arabic}</div>
      <div class="portfolio-card">${portfolioLogos.red}</div>
      <div class="portfolio-card">${portfolioLogos.deflock}</div>
      <div class="portfolio-card">${portfolioLogos.onlybest}</div>
      <div class="portfolio-card">${portfolioLogos.backline}</div>
      <div class="portfolio-card">${portfolioLogos.scend}</div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS SECTION -->
<section class="testimonials-section">
  <div class="container">
    <h2 class="section-title">Testimonials</h2>

    <div class="testimonials-grid">
      <!-- Card 1 -->
      <div class="testimonial-card">
        ${testimonialAvatars.julia}
        <div class="testimonial-name">Julia</div>
        <div class="star-rating">★★★★★</div>
        <p class="testimonial-text">
          Exceptional logo design and animation services! The designer brought my brand to life with a creative and professional touch. Highly recommended!
        </p>
      </div>

      <!-- Card 2 -->
      <div class="testimonial-card">
        ${testimonialAvatars.nancy}
        <div class="testimonial-name">nancy</div>
        <div class="star-rating">★★★★★</div>
        <p class="testimonial-text">
          A pleasure to work with! The logo design is not only visually appealing but also strategically crafted. The animation adds a modern touch, making my brand stand out. Highly recommend!
        </p>
      </div>

      <!-- Card 3 -->
      <div class="testimonial-card">
        ${testimonialAvatars.usman}
        <div class="testimonial-name">usman</div>
        <div class="star-rating">★★★★★</div>
        <p class="testimonial-text">
          Top-tier logo design and animation! The designer's attention to detail and creativity shine through. The animated logo gives my brand a memorable edge. Great investment!
        </p>
      </div>

      <!-- Card 4 -->
      <div class="testimonial-card">
        ${testimonialAvatars.natasha}
        <div class="testimonial-name">Natasha</div>
        <div class="star-rating">★★★★★</div>
        <p class="testimonial-text">
          Impressed with the logo and animation expertise! The designer delivered a logo aligned with my brand vision. The animation brings a fresh, engaging feel. Fantastic job!
        </p>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT SECTION -->
<section class="contact-section" id="contact">
  <div class="container contact-grid">
    <div class="contact-info">
      <h2>Have a Question ?</h2>
      <p>
        Have thoughts, questions, or just want to chat? Fill the form and message using the contact form below.
      </p>
    </div>

    <div class="contact-form-card">
      <form class="contact-form" action="#" method="POST">
        <div class="form-group">
          <label class="form-label" for="contact-name">Your Name *</label>
          <input type="text" id="contact-name" name="your-name" class="form-input" placeholder="Your Name" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="contact-email">Email *</label>
          <input type="email" id="contact-email" name="email" class="form-input" placeholder="Youremail@gmail.com" required />
        </div>

        <div class="form-group">
          <label class="form-label" for="contact-message">Message *</label>
          <textarea id="contact-message" name="message" class="form-textarea" placeholder="Write your Message Here" required></textarea>
        </div>

        <button type="submit" class="form-submit-btn">Send</button>
        <div class="form-notification contact-notification">
          Thank you! Your message has been sent successfully. We will be in touch shortly.
        </div>
      </form>
    </div>
  </div>
</section>

<!-- MARQUEE TICKERS -->
<div class="marquee-container" aria-label="Social media links ticker">
  <div class="marquee-content">
    <span class="marquee-item">Watch on YouTube <span class="star-red">✳</span></span>
    <span class="marquee-item">Watch on YouTube <span class="star-red">✳</span></span>
    <span class="marquee-item">Watch on YouTube <span class="star-red">✳</span></span>
    <span class="marquee-item">Watch on YouTube <span class="star-red">✳</span></span>
    <span class="marquee-item">Watch on YouTube <span class="star-red">✳</span></span>
    <span class="marquee-item">Watch on YouTube <span class="star-red">✳</span></span>
    <span class="marquee-item">Watch on YouTube <span class="star-red">✳</span></span>
    <span class="marquee-item">Watch on YouTube <span class="star-red">✳</span></span>
  </div>
</div>

<div class="marquee-container marquee-reverse">
  <div class="marquee-content">
    <span class="marquee-item"><span class="star-cyan">✳</span> Follow on Instagram</span>
    <span class="marquee-item"><span class="star-cyan">✳</span> Follow on Instagram</span>
    <span class="marquee-item"><span class="star-cyan">✳</span> Follow on Instagram</span>
    <span class="marquee-item"><span class="star-cyan">✳</span> Follow on Instagram</span>
    <span class="marquee-item"><span class="star-cyan">✳</span> Follow on Instagram</span>
    <span class="marquee-item"><span class="star-cyan">✳</span> Follow on Instagram</span>
    <span class="marquee-item"><span class="star-cyan">✳</span> Follow on Instagram</span>
    <span class="marquee-item"><span class="star-cyan">✳</span> Follow on Instagram</span>
  </div>
</div>
`;

  return renderDoc({
    title: 'StudioWongs - Motion Graphics Designer',
    activePage: 'home',
    basePath,
    content
  });
}

// 2. SERVICES PAGE
function getServicesPage(basePath = '../') {
  const content = `
<section class="services-section" style="padding-top: 60px; min-height: 80vh;">
  <div class="container">
    <h1 style="font-family: 'Wix Madefor Display', sans-serif; font-size: 26px; font-weight: 700; color: #ffffff; margin-bottom: 40px; text-transform: lowercase;">services</h1>

    <div class="services-cards-grid">
      <!-- Card 1 -->
      <div class="service-card">
        <div class="service-preview-box">
          <div class="preview-grid-bg"></div>
          <div style="position: relative; z-index: 2; width: 64px; height: 64px; border-radius: 50%; background: #000; display: flex; align-items: center; justify-content: center; color: #a855f7; font-weight: 800; font-size: 24px;">
            W
          </div>
        </div>
        <div class="service-body">
          <p>
            Take a look at our <span class="cyan-text">Logo Animation</span> Packages and pick the one that's just right for you.
          </p>
          <a href="${basePath}logo-animation/" class="service-btn">Logo Animation</a>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="service-card">
        <div class="service-preview-box">
          <div class="preview-grid-bg"></div>
          <div style="position: relative; z-index: 2; display: flex; align-items: center; gap: 4px;">
            <span style="font-family: 'Wix Madefor Display', sans-serif; font-size: 40px; font-weight: 900; color: #000;">W</span>
            <span style="font-family: 'Wix Madefor Display', sans-serif; font-size: 40px; font-weight: 900; color: #ef4444;">W</span>
          </div>
        </div>
        <div class="service-body">
          <p>
            Explore our <span class="cyan-text">Logo Design</span> Packages and select the one that suits your requirements.
          </p>
          <a href="${basePath}logo-design/" class="service-btn">Logo Design</a>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="service-card">
        <div class="service-preview-box">
          <div class="preview-grid-bg"></div>
          <div style="position: relative; z-index: 2; font-family: 'Wix Madefor Display', sans-serif; font-size: 38px; font-weight: 900; color: #ef4444; letter-spacing: -2px;">
            SW
          </div>
        </div>
        <div class="service-body">
          <p>
            If you Looking for <span class="cyan-text">Logo Design + Animation</span>, check our packages and fill this form.
          </p>
          <a href="${basePath}#contact" class="service-btn">Custom Request</a>
        </div>
      </div>
    </div>
  </div>
</section>
`;

  return renderDoc({
    title: 'Services | StudioWongs',
    activePage: 'services',
    basePath,
    content
  });
}

// 3. LOGO DESIGN PAGE
function getLogoDesignPage(basePath = '../') {
  const content = `
<section class="pricing-section">
  <div class="container">
    <div class="pricing-layout">
      <!-- Portfolio Carousel on Left -->
      <div>
        <h2 style="font-family: 'Wix Madefor Display', sans-serif; font-size: 15px; font-weight: 600; color: #a1a1aa; margin-bottom: 16px;">My Portfolio</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
          <div style="aspect-ratio: 1/1;">${portfolioLogos.zpfd}</div>
          <div style="aspect-ratio: 1/1;">${portfolioLogos.deflock}</div>
          <div style="aspect-ratio: 1/1;">${portfolioLogos.vivaseats}</div>
        </div>
      </div>

      <!-- Pricing Card on Right -->
      <div class="package-card">
        <div class="package-tabs">
          <button type="button" class="package-tab active-orange" data-plan="Basic">Basic</button>
          <button type="button" class="package-tab" data-plan="Standard">Standard</button>
          <button type="button" class="package-tab" data-plan="Premium">Premium</button>
        </div>

        <div class="package-card-body">
          <div class="package-price">$450</div>
          <div class="package-title">Basic Package</div>
          <p class="package-desc">
            Logo Design + Vector file (.Ai) + Printable file
          </p>

          <div class="package-meta">
            <span class="package-delivery">⏱ 7 Days Delivery</span>
            <span class="package-revisions">🔄 2 Revision</span>
          </div>

          <div class="whats-included-toggle">
            <span>What's Included</span>
            <span>⌵</span>
          </div>

          <div class="package-buttons">
            <a href="${basePath}#contact" class="btn-package-primary">Continue</a>
            <a href="#compare" class="btn-package-secondary">Compare Package</a>
            <a href="${basePath}#contact" class="btn-package-black">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- COMPARISON SECTION -->
<section class="comparison-section" id="compare">
  <div class="container">
    <h1 style="font-family: 'Wix Madefor Display', sans-serif; font-size: 26px; font-weight: 800; margin-bottom: 24px; text-align: center;">Compare Package</h1>

    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="text-align: left;">---------</th>
            <th>Basic</th>
            <th>Intermediate</th>
            <th>Pro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Printable file</td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Vector File (.AI)</td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Source File</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Business Card</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Logo Guideline</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Transparent Logo Images</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Stationery designs</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>3D mockup</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Source files</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Social media kit</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Revisions</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
          </tr>
          <tr>
            <td>Delivery</td>
            <td>7 Days</td>
            <td>12 Days</td>
            <td>19 Days</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- FAQ SECTION (ORANGE BACKGROUND) -->
<section class="faq-section orange-bg">
  <div class="container">
    <div class="faq-header">
      <h2 class="faq-title">FAQ</h2>
      <div class="faq-search-box">
        <input type="text" class="faq-search-input" placeholder="Looking for something?" aria-label="Search FAQ" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>

    <div class="faq-list">
      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What do I need to get started?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          You need to fill out a Logo Design Order Form where we ask some questions about your brand, such as the name of your brand, business, or services, and your target audience. After that, I will get back to you via email to confirm your order. Following a brief discussion, I will send you an invoice so that you can proceed with placing your order.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What is Logo Styles ?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Logo styles range from minimal wordmarks, monograms, abstract marks, mascots, to emblem badges. During our onboarding questionnaire, we help identify the exact visual direction that best aligns with your target demographic and industry.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What is Source File ?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          A source file refers to the original file that contains the editable and layered information of a design. These are some file types which we'll provide as source files - .eps, .pdf, .Ai, .jpeg or .png (both transparent and normal), along with the font files used in the branding.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What is Vector file ?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Vector file is the original file (.ai) in which logos are designed by which you can edit/resize the logo to any desirable size without quality loss or pixilation.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What is a revision?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          A revision is a modification of the submitted design and refers to the font, color, the arrangement of elements etc. The revision does not mean a brand new design.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What is 3D mockup?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          A 3D mockup is a visual representation of your incredible logo in realistic real-world contexts, and trust me, you're going to adore it!
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What is Logo Guidelines and What includes in it ?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Logo guidelines are rules for using a company's logo consistently. They include instructions on logo usage, color palette, typography, clear space, and examples of correct/incorrect usage. They ensure a cohesive brand image across various platforms.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>I can't find what I need in the packages. Can I have a custom pack?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Yes! Please share your requirements with me, and I'll create a customized quote just for you.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>May I have all the copyrights of the logo design at the end?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          I am a creative designer. I designed all the logos from the visualizations. You are able to use it anywhere without the problem of copyrights. You'll be the owner of the logo design at the end. I just don't provide any certificates for it.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What is transparent logo file?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          A transparent logo is a logo in PNG format. They are easy to recognize as the background of the image is invisible unlike other formats like JPEG. Simply way transparent logo means a logo with a transparent background (a.k.a. no background at all). So, You are able to use at anywhere.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What is Stationery Designs and Social Media Kit?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Stationery designs are a collection of business card, envelope design and letterhead designs. The social media kit is Covers for different social media platforms like Facebook, Twitter, YouTube. It's offered in the Premium Package.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button">
          <span>What if I'm not satisfied with the initial design concepts?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Depending on your package, you have multiple revisions. Just provide us feedback and we'll adjust the designs accordingly.
        </div>
      </div>
    </div>
  </div>
</section>
`;

  return renderDoc({
    title: 'Logo Design Service | StudioWongs',
    activePage: 'logo-design',
    pageType: 'logo-design',
    basePath,
    content
  });
}

// 4. LOGO ANIMATION PAGE
function getLogoAnimationPage(basePath = '../') {
  const content = `
<section class="pricing-section">
  <div class="container">
    <div class="pricing-layout">
      <!-- Video Preview + Mini Portfolio on Left -->
      <div>
        <div class="process-preview" style="margin-bottom: 24px;">
          <button class="video-play-btn" type="button" aria-label="Play sample logo animation">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          </button>
        </div>

        <h2 style="font-family: 'Wix Madefor Display', sans-serif; font-size: 14px; font-weight: 600; color: #a1a1aa; margin-bottom: 12px;">My Portfolio</h2>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px;">
          <div style="aspect-ratio: 1/1;">${portfolioLogos.zpfd}</div>
          <div style="aspect-ratio: 1/1;">${portfolioLogos.deflock}</div>
          <div style="aspect-ratio: 1/1;">${portfolioLogos.vivaseats}</div>
        </div>
      </div>

      <!-- Pricing Card on Right -->
      <div class="package-card">
        <div class="package-tabs">
          <button type="button" class="package-tab active-white" data-plan="Basic">Basic</button>
          <button type="button" class="package-tab" data-plan="Intermediate">Intermediate</button>
          <button type="button" class="package-tab" data-plan="Pro">Pro</button>
        </div>

        <div class="package-card-body">
          <div class="package-price">$150</div>
          <div class="package-title">Basic Animation</div>
          <p class="package-desc">
            Simple and clean animation Perfect for quick intros and outros.
          </p>

          <div class="package-meta">
            <span class="package-delivery">⏱ 5 Days Delivery</span>
            <span class="package-revisions">🔄 2 Revision</span>
          </div>

          <div class="whats-included-toggle">
            <span>What's Included</span>
            <span>⌵</span>
          </div>

          <div class="package-buttons">
            <a href="${basePath}#contact" class="btn-package-purple">Continue</a>
            <a href="${basePath}#contact" class="btn-package-black">Contact Us</a>
            <a href="#compare" class="btn-package-secondary">Compare Package</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- COMPARISON SECTION -->
<section class="comparison-section" id="compare">
  <div class="container">
    <div class="comparison-table-wrapper">
      <table class="comparison-table">
        <thead>
          <tr>
            <th style="text-align: left;">Pacakge</th>
            <th>Basic</th>
            <th>Intermediate</th>
            <th>Pro</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Animation</td>
            <td>Simple &amp; Clean</td>
            <td>Advanced And Eye Catching</td>
            <td>Complex and Professional</td>
          </tr>
          <tr>
            <td>4k Resolution</td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Sound FX</td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>.MP4 VIDEO</td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>.MOV VIDEO</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Transparent Video</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Background Music</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Source File</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>.GIF</td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="cross-mark">✖</span></td>
            <td><span class="check-mark">✔</span></td>
          </tr>
          <tr>
            <td>Revisions</td>
            <td>1</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Delivery</td>
            <td>5 Days</td>
            <td>8 Days</td>
            <td>10 Days</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>

<!-- FAQ SECTION (DARK ARCHED BACKGROUND) -->
<section class="faq-section dark-bg">
  <div class="container">
    <div class="faq-header">
      <h2 class="faq-title cyan">FAQ</h2>
      <div class="faq-search-box">
        <input type="text" class="faq-search-input" placeholder="Looking for something?" aria-label="Search FAQ" />
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </div>

    <div class="faq-list">
      <!-- Item 1 (open by default as seen in screenshot) -->
      <div class="faq-item active">
        <button class="faq-question-btn" type="button" style="color: var(--accent-cyan);">
          <span>What do I need to get started?</span>
          <span class="faq-toggle-icon">−</span>
        </button>
        <div class="faq-answer">
          You need to fill out a Logo Animation Order Form where we ask some questions about your requirement. After that, I will get back to you via email to confirm your order. Following a brief discussion, I will send you an invoice so that you can proceed with placing your order.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button" style="color: var(--accent-cyan);">
          <span>Logo Animation Examples</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          You can explore multiple samples in our portfolio grid above or request a tailored reel tailored to your specific industry (tech, esports, e-commerce, corporate).
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button" style="color: var(--accent-cyan);">
          <span>The logo animation includes logo design?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Logo animation packages focus on bringing an existing logo to life. If you need both brand identity design and motion graphics, check out our combined custom packages!
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button" style="color: var(--accent-cyan);">
          <span>What I need to start with the logo animation?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          We need your logo in vector format (.ai, .eps, or layered .psd/svg). If you only have raster files, we can vectorize them before animation.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button" style="color: var(--accent-cyan);">
          <span>I only have my logo on PNG, JPG, can you convert it to a vector file?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Yes! We provide professional manual vector tracing so your logo renders razor sharp in 4K resolution across all formats.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button" style="color: var(--accent-cyan);">
          <span>Do you make other animation works besides logo animation?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Yes, we create YouTube intro/outros, animated stream alerts, title cards, lower thirds, and social media template animations.
        </div>
      </div>

      <div class="faq-item">
        <button class="faq-question-btn" type="button" style="color: var(--accent-cyan);">
          <span>If we don't have a logo, can you create one for us?</span>
          <span class="faq-toggle-icon">+</span>
        </button>
        <div class="faq-answer">
          Certainly! Visit our Logo Design page to choose a design package or request a combined logo design and animation combo.
        </div>
      </div>
    </div>
  </div>
</section>
`;

  return renderDoc({
    title: 'Logo Animation Service | StudioWongs',
    activePage: 'logo-animation',
    pageType: 'logo-animation',
    basePath,
    content
  });
}

// 5. PORTFOLIO PAGE
function getPortfolioPage(basePath = '../') {
  const content = `
<section class="portfolio-page-header">
  <div class="container">
    <h1 class="portfolio-page-title">My Portfolio</h1>
  </div>
</section>

<section>
  <div class="container">
    <div class="portfolio-full-grid">
      <div class="portfolio-card-lg">${portfolioLogos.artonia}</div>
      <div class="portfolio-card-lg">${portfolioLogos.deflock}</div>
      <div class="portfolio-card-lg">${portfolioLogos.arabic}</div>
      <div class="portfolio-card-lg">${portfolioLogos.onlybest}</div>
      <div class="portfolio-card-lg">${portfolioLogos.red}</div>
      <div class="portfolio-card-lg">${portfolioLogos.scend}</div>
      <div class="portfolio-card-lg">${portfolioLogos.backline}</div>
      <div class="portfolio-card-lg">${portfolioLogos.vivaseats}</div>
      <div class="portfolio-card-lg">${portfolioLogos.zpfd}</div>
    </div>
  </div>
</section>
`;

  return renderDoc({
    title: 'Portfolio',
    activePage: 'portfolio',
    basePath,
    content
  });
}

module.exports = {
  getHomePage,
  getServicesPage,
  getLogoDesignPage,
  getLogoAnimationPage,
  getPortfolioPage
};
