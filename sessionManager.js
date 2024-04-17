document.addEventListener('DOMContentLoaded', function() {
    // Manage scroll restoration manually to prevent automatic browser handling
    if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
    }

    // Set a history state if not already set
    if (!history.state) {
        history.replaceState({ fromSubdomain: false }, '', location.href);
    }

    var enterButton = document.querySelector('.enter-button');
    if (enterButton) {
        enterButton.addEventListener('click', function() {
            // Delay scrolling to saved position until after animations
            setTimeout(() => {
                let savedPosition = parseInt(sessionStorage.getItem('scrollPosition'), 10);
                if (!isNaN(savedPosition) && savedPosition > 0) {
                    window.scrollTo(0, savedPosition);
                    console.log('Scrolling to saved position:', savedPosition);
                }
            }, 5000); // Delay set to match the hero animation duration
        });
    }

    window.addEventListener('beforeunload', function() {
        // Save the current scroll position to sessionStorage
        sessionStorage.setItem('scrollPosition', window.scrollY || window.pageYOffset);
        // Update the history state to mark navigation to a subdomain
        history.replaceState({ fromSubdomain: true }, '', location.href);
    });

    // When loading from history navigation
    window.addEventListener('popstate', function(event) {
        if (event.state && event.state.fromSubdomain) {
            let savedPosition = parseInt(sessionStorage.getItem('scrollPosition'), 10);
            if (!isNaN(savedPosition) && savedPosition > 0) {
                window.scrollTo(0, savedPosition);
                console.log('Back navigation, scrolling to saved position:', savedPosition);
            }
        } else {
            // On direct entry or refresh, reset the scroll position
            window.scrollTo(0, 0);
            sessionStorage.removeItem('scrollPosition'); // Clear the saved position
            console.log('Direct entry or refresh, resetting position');
        }
    });
});
