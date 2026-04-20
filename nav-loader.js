(function() {
  fetch('/nav.html')
    .then(r => r.text())
    .then(html => {
      const placeholder = document.getElementById('site-nav');
      if (!placeholder) return;
      placeholder.outerHTML = html;
      // Set active link based on current path
      const path = window.location.pathname.replace(/\/$/, '') || '/';
      document.querySelectorAll('nav a, .nav-mobile a').forEach(a => {
        const href = a.getAttribute('href');
        if (!href) return;
        const normalized = href.replace(/^\//, '').replace(/\/$/, '');
        const pageName = path.split('/').pop() || 'index.html';
        if (normalized === pageName || (path === '/' && normalized === 'index.html')) {
          a.classList.add('active');
        }
      });
      // Re-attach burger menu toggle after nav injection
      const burger = document.getElementById('navBurger');
      const mobile = document.getElementById('navMobile');
      const closeBtn = document.getElementById('navMobileClose');
      if (!burger || !mobile) return;
      function closeMobileNav() {
        mobile.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
        mobile.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }
      burger.addEventListener('click', () => {
        const open = mobile.classList.toggle('open');
        burger.setAttribute('aria-expanded', String(open));
        mobile.setAttribute('aria-hidden', String(!open));
        document.body.style.overflow = open ? 'hidden' : '';
      });
      if (closeBtn) closeBtn.addEventListener('click', closeMobileNav);
      document.querySelectorAll('.nav-mobile-link').forEach(link => {
        link.addEventListener('click', closeMobileNav);
      });
      window.addEventListener('keydown', e => { if (e.key === 'Escape') closeMobileNav(); });
    });
})();
