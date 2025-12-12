/* ================================================
   MANNAT DWIVEDI — Creative Portfolio
   Playful / Editorial Interactions
   ================================================ */

document.addEventListener('DOMContentLoaded', () => {
    initScrollAnimations();
    initNavigation();
    initCardHover();
    initParallaxBlobs();
});

/* ================================================
   SCROLL ANIMATIONS
   ================================================ */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(
        '.work-header, .work-card, .about-layout, .contact-layout, .project-item, .gallery-item, .list-item'
    );
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(25px)';
        el.style.transition = `opacity 0.6s ease-out ${index * 0.05}s, transform 0.6s ease-out ${index * 0.05}s`;
        observer.observe(el);
    });

    const style = document.createElement('style');
    style.textContent = `.is-visible { opacity: 1 !important; transform: translateY(0) !important; }`;
    document.head.appendChild(style);
}

/* ================================================
   NAVIGATION
   ================================================ */
function initNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

/* ================================================
   CARD HOVER EFFECTS
   ================================================ */
function initCardHover() {
    const cards = document.querySelectorAll('.work-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 30;
            const rotateY = (centerX - x) / 30;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px) rotate(-1deg)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Project items dim effect
    const projectItems = document.querySelectorAll('.project-item, .gallery-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            projectItems.forEach(sibling => {
                if (sibling !== item) {
                    sibling.style.opacity = '0.5';
                }
            });
        });

        item.addEventListener('mouseleave', () => {
            projectItems.forEach(sibling => sibling.style.opacity = '');
        });
    });
}

/* ================================================
   PARALLAX BLOBS
   ================================================ */
function initParallaxBlobs() {
    const blobs = document.querySelectorAll('.deco-blob, .shape');
    
    if (blobs.length === 0) return;

    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        
        const moveX = (clientX - innerWidth / 2) / innerWidth * 20;
        const moveY = (clientY - innerHeight / 2) / innerHeight * 20;
        
        blobs.forEach((blob, index) => {
            const factor = 1 + (index * 0.3);
            blob.style.transform = `translate(${moveX * factor}px, ${moveY * factor}px)`;
        });
    });
}

/* ================================================
   PAGE LOAD ANIMATIONS
   ================================================ */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Hero elements
    const heroElements = document.querySelectorAll('.hero-intro, .brush-text, .hero-title, .hero-name-row, .pill-tags, .hero-scroll');
    heroElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.7s ease-out, transform 0.7s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 200 + (index * 100));
    });

    // Page header elements
    const headerElements = document.querySelectorAll('.back-link, .header-number, .page-title, .page-description, .header-tags');
    headerElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, 150 + (index * 80));
    });
});

/* ================================================
   MARQUEE ANIMATION (clone for seamless loop)
   ================================================ */
const marqueeTrack = document.querySelector('.marquee-track');
if (marqueeTrack) {
    const content = marqueeTrack.innerHTML;
    marqueeTrack.innerHTML = content + content;
}
