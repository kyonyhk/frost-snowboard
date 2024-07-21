// Function to reinitialize Webflow interactions
function reinitialiseWebflow(data) {
  console.log('Reinitializing Webflow interactions');
  
  let parser = new DOMParser();
  let dom = parser.parseFromString(data.next.html, 'text/html');
  let webflowPageId = $(dom).find('html').attr('data-wf-page');
  
  $('html').attr('data-wf-page', webflowPageId);
  
  window.Webflow && window.Webflow.destroy();
  window.Webflow && window.Webflow.ready();
  window.Webflow && window.Webflow.require('ix2').init();

  console.log('Webflow interactions reinitialized');
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

          // Reinitialize Webflow interactions and animations
          reinitialiseWebflow(data);
          if (data.next.namespace === 'frost-tech-page') {
            console.log('Initializing Frost Tech Scripts');
            try {
              if (window.initializeFrostTech) initializeFrostTech();
              if (window.initializeFrostTechImage) initializeFrostTechImage();
              if (window.initializeFrostTechTerminal) initializeFrostTechTerminal();
              if (window.initializeFrostTechDescriptions) initializeFrostTechDescriptions();
              if (window.initializeFrostTechDescriptionHover) initializeFrostTechDescriptionHover();
              if (window.initializeFrostTechCounter) initializeFrostTechCounter();
              if (window.initializeFrostTechColorThemes) initializeFrostTechColorThemes();
            } catch (error) {
              console.error('Error initializing Frost Tech scripts:', error);
            }
          }
        },
      },
    ],
    views: [
      {
        namespace: 'collections-cms',
        afterEnter(data) {
          console.log('Entered collections-cms namespace');
          // Reinitialize any CMS-specific JavaScript here
          reinitialiseWebflow(data);
          // initializeGallery();
        },
      },
      {
        namespace: 'frost-tech-page',
        afterEnter(data) {
          console.log('Entered frost-tech-page namespace');
          // Reinitialize any Frost Tech Page specific JavaScript here
          reinitialiseWebflow(data);
          console.log('Initializing Frost Tech Scripts');
          try {
            if (window.initializeFrostTech) initializeFrostTech();
            if (window.initializeFrostTechImage) initializeFrostTechImage();
            if (window.initializeFrostTechTerminal) initializeFrostTechTerminal();
            if (window.initializeFrostTechDescriptions) initializeFrostTechDescriptions();
            if (window.initializeFrostTechDescriptionHover) initializeFrostTechDescriptionHover();
            if (window.initializeFrostTechCounter) initializeFrostTechCounter();
            if (window.initializeFrostTechColorThemes) initializeFrostTechColorThemes();
          } catch (error) {
            console.error('Error initializing Frost Tech scripts:', error);
          }
        },
      },
    ],
  });
});
