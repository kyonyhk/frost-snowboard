document.addEventListener('DOMContentLoaded', function() {
    var enterButton = document.querySelector('.enter-button'); // Adjust the selector as needed
    if (enterButton) {
        enterButton.addEventListener('click', function() {
            setTimeout(() => {
                let savedPosition = parseInt(sessionStorage.getItem('scrollPosition'), 10);
                if (!isNaN(savedPosition) && savedPosition > 0) {
                    window.scrollTo(0, savedPosition);
                    console.log('Scrolling to saved position:', savedPosition);
                }
            }, 5550); // Delay set for the hero animation duration
        });
    }

    window.addEventListener('beforeunload', function() {
        sessionStorage.setItem('scrollPosition', window.scrollY || window.pageYOffset);
    });
});
