document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');

    // Navbar scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations - Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -80px 0px', // Animates slightly after entering viewport
        threshold: 0.15 // Ensures more of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Add a small staggered delay if multiple elements appear at once
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // Counter animation for stat cards
    function animateCounter(el) {
        const target = parseFloat(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        const prefix = el.dataset.prefix || '';
        const isDecimal = el.dataset.decimal === 'true';
        const duration = 2000;
        const startTime = performance.now();

        el.classList.add('counting');

        function update(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * target;

            let display;
            if (isDecimal) {
                display = current.toFixed(2).replace('.', ',');
            } else {
                display = Math.floor(current).toLocaleString('pt-BR');
            }

            el.textContent = prefix + display + suffix;

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    }

    // Observe stat cards for counter animation
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const valueEl = entry.target.querySelector('.stat-card-value');
                if (valueEl && valueEl.dataset.target) {
                    animateCounter(valueEl);
                }
                counterObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll('.stat-card').forEach(card => {
        counterObserver.observe(card);
    });

    // Interactive Features Block
    const interactiveItems = document.querySelectorAll('.interactive-item');
    const interactiveImages = document.querySelectorAll('.interactive-image');

    if (interactiveItems.length > 0) {
        interactiveItems.forEach(item => {
            item.addEventListener('click', () => {
                interactiveItems.forEach(el => el.classList.remove('active'));
                interactiveImages.forEach(el => el.classList.remove('active'));

                item.classList.add('active');

                const targetId = item.dataset.target;
                const targetImage = document.getElementById(targetId);
                if (targetImage) {
                    targetImage.classList.add('active');
                }
            });
        });
    }

    // Mobile Menu Injection
    const navContainer = document.querySelector('.navbar-container');
    if (navContainer) {
        const menuBtn = document.createElement('button');
        menuBtn.className = 'mobile-menu-btn';
        menuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
        
        navContainer.appendChild(menuBtn);

        menuBtn.addEventListener('click', () => {
            document.body.classList.toggle('menu-open');
            if (document.body.classList.contains('menu-open')) {
                menuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
            } else {
                menuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            }
        });

        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a, .nav-actions a').forEach(link => {
            link.addEventListener('click', () => {
                document.body.classList.remove('menu-open');
                menuBtn.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>';
            });
        });
    }
});
