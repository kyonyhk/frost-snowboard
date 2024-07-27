document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.global-navbar-link');
    const sections = {
        'frost': '.section.is-hero',
        'vibes': '.section.is-intro',
        'collections': '.section.is-collections-main',
        'tech': '.section.is-frost-tech-intro'
    };

    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.classList[1].replace('is-', ''); // e.g., 'is-frost' becomes 'frost'
            
            if (isHomePage()) {
                scrollToSection(targetSection);
            } else {
                navigateToHomePage(targetSection);
            }
        });
    });

    function isHomePage() {
        // Adjust this condition based on your homepage URL structure
        return window.location.pathname === '/' || window.location.pathname === '/index.html';
    }

    function scrollToSection(sectionName) {
        const targetElement = document.querySelector(sections[sectionName]);
        if (targetElement) {
            // If you're using a smooth scroll library like Lenis, use its scrollTo method
            if (window.SmoothScroll) {
                window.SmoothScroll.scrollTo(targetElement);
            } else {
                // Fallback to native smooth scroll
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    function navigateToHomePage(sectionName) {
        // Store the target section in sessionStorage
        sessionStorage.setItem('scrollTarget', sectionName);
        // Navigate to the homepage
        window.location.href = '/';
    }

    // Check for stored scroll target on page load
    if (isHomePage()) {
        const scrollTarget = sessionStorage.getItem('scrollTarget');
        if (scrollTarget) {
            // Clear the stored target
            sessionStorage.removeItem('scrollTarget');
            // Scroll to the target section after a short delay to ensure the page is loaded
            setTimeout(() => scrollToSection(scrollTarget), 100);
        }
    }
});
