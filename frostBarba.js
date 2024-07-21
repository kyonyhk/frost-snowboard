document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM fully loaded and parsed');
  
  barba.init({
    transitions: [
      {
        name: 'page-transition',
        async leave(data) {
          console.log('Leaving transition');
          const done = this.async();

          // Ensure the class is added before the animation starts
          $(data.current.container).addClass('fixed');
          $(data.next.container).addClass('fixed');

          // Animate the current container opacity
          await gsap.to(data.current.container, {
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            onComplete: () => {
              console.log('Current container faded out');
            },
          });

          done();
        },
        async enter(data) {
          console.log('Entering transition');

          // Return the promise of the animation of the next container
          await gsap.from(data.next.container, {
            opacity: 0,
            duration: 1,
            ease: 'power4.out',
            onComplete: () => {
              $(data.next.container).removeClass('fixed');
              console.log('Next container faded in');
            },
          });
        },
      },
    ],
    views: [
      {
        namespace: 'collections-cms',
        afterEnter() {
          console.log('Entered collections-cms namespace');
          // Reinitialize any CMS-specific JavaScript here
          // initializeGallery();
        },
      },
      {
        namespace: 'frost-tech-page',
        afterEnter() {
          console.log('Entered frost-tech-page namespace');
          // Reinitialize any Frost Tech Page specific JavaScript here
        },
      },
    ],
  });
});
