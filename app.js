document.addEventListener('DOMContentLoaded', () => {
    // --- iOS Video Autoplay Fallback ---
    const heroVideo = document.getElementById('hero-video');
    if (heroVideo) {
        heroVideo.muted = true; // Redundant but critical for iOS
        heroVideo.play().catch(e => console.warn('iOS Autoplay blocked (likely Low Power Mode):', e));
        
        // Sometimes a touch event is required to unblock iOS video
        document.body.addEventListener('touchstart', () => {
            if (heroVideo.paused) heroVideo.play();
        }, { once: true });
    }

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0 });
        gsap.to(cursorFollower, { x: e.clientX, y: e.clientY, duration: 0.1 });
    });

    const addCursorHover = (elements) => {
        elements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('active');
                cursorFollower.classList.add('active');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('active');
                cursorFollower.classList.remove('active');
            });
        });
    };

    // Initialize hover on initial elements
    addCursorHover(document.querySelectorAll('a, button, .tab-btn, .client-logo, .menu-icon, h2'));

    // --- Menu Toggle ---
    const menuIcon = document.querySelector('.menu-icon');
    const menuOverlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu-link');

    if (menuIcon && menuOverlay) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('active');
            menuOverlay.classList.toggle('active');
        });

        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menuIcon.classList.remove('active');
                menuOverlay.classList.remove('active');
            });
        });
    }

    // --- GSAP Hero Animations ---
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    
    // Split text into characters
    const titleContent = heroTitle.textContent;
    heroTitle.innerHTML = '';
    titleContent.split('').forEach(char => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        heroTitle.appendChild(span);
    });

    const subtitleContent = heroSubtitle.textContent;
    heroSubtitle.innerHTML = '';
    subtitleContent.split('').forEach(char => {
        const span = document.createElement('span');
        span.className = 'char';
        span.textContent = char === ' ' ? '\u00A0' : char;
        heroSubtitle.appendChild(span);
    });

    gsap.from('.hero-title .char', {
        y: '100%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.05,
        delay: 0.2
    });

    gsap.from('.hero-subtitle .char', {
        y: '100%',
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.03,
        delay: 0.8
    });

    gsap.from('.hero-tags, .scroll-arrow, .site-header', {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 1.5,
        stagger: 0.2
    });

    // --- GSAP ScrollTrigger Animations ---
    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.bio-content p', {
        scrollTrigger: {
            trigger: '.about-section',
            start: 'top 70%'
        },
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power3.out'
    });

    gsap.from('.client-card', {
        scrollTrigger: {
            trigger: '.clients-section',
            start: 'top 80%'
        },
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
    });

    // --- Portfolio Gallery Logic ---
    const galleryGrid = document.getElementById('gallery-grid');
    const tabButtons = document.querySelectorAll('.tab-btn');
    let portfolioData = [];

    // Fetch data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            portfolioData = data;
            renderGallery('All');
        })
        .catch(error => console.error('Error fetching portfolio data:', error));

    // Tab clicks
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');
            renderGallery(category);
        });
    });

    function renderGallery(category) {
        galleryGrid.innerHTML = '';
        
        const filteredData = category === 'All' 
            ? portfolioData 
            : portfolioData.filter(item => item.category === category);

        filteredData.forEach((item, index) => {
            const el = document.createElement('div');
            el.className = 'gallery-item';
            
            // Bento Grid Sizing Logic
            if (index === 0 || index === 5) {
                el.classList.add('bento-large');
            } else if (index === 2) {
                el.classList.add('bento-tall');
            }

            const isVideo = item.imageUrl.match(/\.(mp4|mov|webm)$/i);
            const mediaHTML = isVideo 
                ? `<video src="${item.imageUrl}" autoplay loop muted playsinline></video>`
                : `<img src="${item.imageUrl}" alt="${item.title}">`;

            el.innerHTML = `
                ${mediaHTML}
                <div class="gallery-item-title">${item.title}</div>
                <div class="gallery-item-category">${item.category}</div>
                <p>${item.description}</p>
            `;
            galleryGrid.appendChild(el);
        });

        // Add cursor hover to new gallery items
        addCursorHover(document.querySelectorAll('.gallery-item'));

        // Animate new items
        gsap.fromTo('.gallery-item', 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
    }
});
