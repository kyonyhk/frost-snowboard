document.addEventListener('DOMContentLoaded', function() {
    // Manage scroll restoration manually to prevent automatic browser handling
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    var path = window.location.pathname;
    var scrollKey = 'scrollPosition-' + path;
    var preloaderShownKey = 'preloaderShown-' + path;

    // Handle returning to the page
    if (sessionStorage.getItem(preloaderShownKey)) {
        var savedPosition = parseInt(sessionStorage.getItem(scrollKey), 10);
        if (!isNaN(savedPosition) && savedPosition > 0) {
            window.scrollTo(0, savedPosition);
        }
        document.body.classList.add('no-preloader');
    }

    // Save scroll position on navigate away
    document.querySelectorAll("a").forEach(function(link) {
        link.addEventListener('click', function() {
            sessionStorage.setItem(scrollKey, window.scrollY || window.pageYOffset);
        });
    });

    var enterButton = document.querySelector('.enter-button');
    if (enterButton) {
        enterButton.addEventListener('click', function() {
            // Delay scrolling to saved position until after animations
            setTimeout(() => {
                let savedPosition = parseInt(sessionStorage.getItem(scrollKey), 10);
                if (!isNaN(savedPosition) && savedPosition > 0) {
                    window.scrollTo(0, savedPosition);
                }
            }, 5000); // Delay set to match the hero animation duration
        });
    }

    window.addEventListener('beforeunload', function() {
        // Save the current scroll position to sessionStorage
        sessionStorage.setItem(scrollKey, window.scrollY || window.pageYOffset);
        sessionStorage.setItem(preloaderShownKey, 'true');
        // Update the history state to mark navigation to a subdomain
        history.replaceState({ fromSubdomain: true }, '', location.href);
    });

    // When loading from history navigation
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.fromSubdomain) {
            let savedPosition = parseInt(sessionStorage.getItem(scrollKey), 10);
            if (!isNaN(savedPosition) && savedPosition > 0) {
                window.scrollTo(0, savedPosition);
            }
        } else {
            // On direct entry or refresh, reset the scroll position
            window.scrollTo(0, 0);
            sessionStorage.removeItem(scrollKey); // Clear the saved position
        }
    });
});
