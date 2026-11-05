document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Drawer Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
  const mobileCloseBtn = document.querySelector('.mobile-close-btn');

  if (mobileMenuToggle && mobileNavOverlay) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileNavOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  }

  if (mobileCloseBtn && mobileNavOverlay) {
    mobileCloseBtn.addEventListener('click', () => {
      mobileNavOverlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  // 2. Cookie Banner Logic
  const cookieBanner = document.querySelector('.cookie-banner');
  const cookieAcceptBtn = document.querySelector('.cookie-btn-accept');
  const cookieCloseBtn = document.querySelector('.cookie-btn-close');
  const cookieSettingsBtn = document.querySelector('.cookie-btn-settings');

  if (cookieBanner) {
    const isAccepted = localStorage.getItem('cookies_accepted');
    if (isAccepted) {
      cookieBanner.classList.add('hidden');
    }

    if (cookieAcceptBtn) {
      cookieAcceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookies_accepted', 'true');
        cookieBanner.classList.add('hidden');
      });
    }

    if (cookieCloseBtn) {
      cookieCloseBtn.addEventListener('click', () => {
        cookieBanner.classList.add('hidden');
      });
    }

    if (cookieSettingsBtn) {
      cookieSettingsBtn.addEventListener('click', () => {
        alert('Cookie Preferences:\n- Essential Cookies (Required)\n- Analytics & Performance (Optional)\n- Marketing & Customization (Optional)');
      });
    }
  }

  // 3. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        // Toggle current item
        if (isActive) {
          item.classList.remove('active');
          const icon = item.querySelector('.faq-toggle-icon');
          if (icon) icon.textContent = '+';
        } else {
          item.classList.add('active');
          const icon = item.querySelector('.faq-toggle-icon');
          if (icon) icon.textContent = '−';
        }
      });
    }
  });

  // 4. FAQ Search Filter
  const faqSearchInput = document.querySelector('.faq-search-input');
  if (faqSearchInput) {
    faqSearchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 5. Package Switcher (Logo Design & Logo Animation)
  const packageTabs = document.querySelectorAll('.package-tab');
  const packageData = {
    'logo-design': {
      'Basic': {
        price: '$450',
        title: 'Basic Package',
        desc: 'Logo Design + Vector file (.Ai) + Printable file',
        delivery: '⏱ 7 Days Delivery',
        revisions: '🔄 2 Revision'
      },
      'Standard': {
        price: '$750',
        title: 'Standard Package',
        desc: 'Logo Design + Vector file (.Ai) + Source File + Business Card + Logo Guideline',
        delivery: '⏱ 12 Days Delivery',
        revisions: '🔄 2 Revision'
      },
      'Premium': {
        price: '$1200',
        title: 'Premium Package',
        desc: 'Complete Branding + 3D Mockup + Social Media Kit + Stationery designs + Unlimited concepts',
        delivery: '⏱ 19 Days Delivery',
        revisions: '🔄 3 Revision'
      }
    },
    'logo-animation': {
      'Basic': {
        price: '$150',
        title: 'Basic Animation',
        desc: 'Simple and clean animation Perfect for quick intros and outros.',
        delivery: '⏱ 5 Days Delivery',
        revisions: '🔄 2 Revision'
      },
      'Intermediate': {
        price: '$300',
        title: 'Intermediate Animation',
        desc: 'Advanced And Eye Catching animation with sound FX and transparent video.',
        delivery: '⏱ 8 Days Delivery',
        revisions: '🔄 2 Revision'
      },
      'Pro': {
        price: '$500',
        title: 'Pro Animation',
        desc: 'Complex and Professional animation with custom background music, source file & 4K resolution.',
        delivery: '⏱ 10 Days Delivery',
        revisions: '🔄 2 Revision'
      }
    }
  };

  const pageType = document.body.dataset.pageType;
  if (pageType && packageData[pageType]) {
    const plans = packageData[pageType];
    packageTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const planKey = tab.dataset.plan;
        const plan = plans[planKey];
        if (!plan) return;

        // Update active tab styles
        packageTabs.forEach(t => {
          t.classList.remove('active-orange', 'active-white');
        });
        if (pageType === 'logo-design') {
          tab.classList.add('active-orange');
        } else {
          tab.classList.add('active-white');
        }

        // Update card content
        const priceEl = document.querySelector('.package-price');
        const titleEl = document.querySelector('.package-title');
        const descEl = document.querySelector('.package-desc');
        const deliveryEl = document.querySelector('.package-delivery');
        const revisionsEl = document.querySelector('.package-revisions');

        if (priceEl) priceEl.textContent = plan.price;
        if (titleEl) titleEl.textContent = plan.title;
        if (descEl) descEl.textContent = plan.desc;
        if (deliveryEl) deliveryEl.textContent = plan.delivery;
        if (revisionsEl) revisionsEl.textContent = plan.revisions;
      });
    });
  }

  // 6. Contact Form Submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const notification = document.querySelector('.contact-notification');
      if (notification) {
        notification.classList.add('show');
        contactForm.reset();
        setTimeout(() => {
          notification.classList.remove('show');
        }, 5000);
      }
    });
  }

  // 7. Subscribe Form Submission
  const subscribeForm = document.querySelector('.subscribe-form');
  if (subscribeForm) {
    subscribeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = subscribeForm.querySelector('.subscribe-input');
      if (input && input.value) {
        alert('Thank you for subscribing to our community!');
        subscribeForm.reset();
      }
    });
  }
});
