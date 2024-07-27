document.addEventListener('DOMContentLoaded', function() {
    const menuContainer = document.querySelector('.global-navbar-link.is-menu');
    const menuLinks = document.querySelectorAll('.global-navbar-link:not(.is-menu)');
    const sections = {
        'frost': '.section.is-hero',
        'vibes': '.section.is-intro',
        'collections': '.section.is-collections-main',
        'tech': '.section.is-frost-tech-intro'
    };

    // Menu open/close functionality
    if (menuContainer) {
        menuContainer.addEventListener('click', function(e) {
            e.preventDefault();
            toggleMenu();
        });
    }

    // Navigation functionality
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetSection = this.classList[1].replace('is-', ''); // e.g., 'is-frost' becomes 'frost'
            
            if (isHomePage()) {
                scrollToSection(targetSection);
            } else {
                navigateToHomePage(targetSection);
            }

            // Close the menu after navigation
            closeMenu();
        });
    });

    function isHomePage() {
        // Adjust this condition based on your homepage URL structure
        return window.location.pathname === '/' || window.location.pathname === '/index.html';
    }

    function scrollToSection(sectionName) {
        const targetElement = document.querySelector(sections[sectionName]);
        if (targetElement) {
            if (window.SmoothScroll) {
                window.SmoothScroll.scrollTo(targetElement);
            } else {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }

    function navigateToHomePage(sectionName) {
        sessionStorage.setItem('scrollTarget', sectionName);
        window.location.href = '/';
    }

    function toggleMenu() {
        // Add your menu open/close logic here
        console.log('Toggle menu');
    }

    function closeMenu() {
        // Add your menu close logic here
        console.log('Close menu');
    }

    // Check for stored scroll target on page load
    if (isHomePage()) {
        const scrollTarget = sessionStorage.getItem('scrollTarget');
        if (scrollTarget) {
            sessionStorage.removeItem('scrollTarget');
            setTimeout(() => scrollToSection(scrollTarget), 100);
        }
    }
});
