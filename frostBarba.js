function reinitialiseWebflow(data) {
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let webflowPageId = $(dom).find('html').attr('data-wf-page');

  $('html').attr('data-wf-page', webflowPageId);

  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();

  window.Webflow && window.Webflow.require('ix2').init();
}

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

          // Reinitialize Webflow interactions
          reinitialiseWebflow(data);
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
          
          // Reinitialize Webflow interactions
          reinitialiseWebflow(data);
        },
      },
      {
        namespace: 'frost-tech-page',
        afterEnter() {
          console.log('Entered frost-tech-page namespace');
          // Reinitialize any Frost Tech Page specific JavaScript here

          // Reinitialize Webflow interactions
          reinitialiseWebflow(data);
        },
      },
    ],
  });
});
