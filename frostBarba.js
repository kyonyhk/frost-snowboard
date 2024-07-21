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

// Function to clean up existing animations and listeners
function cleanupBeforeTransition() {
  // Kill all GSAP animations
  gsap.killAll();
  
  // Remove any custom event listeners here
  // For example:
  // document.querySelectorAll('.tech_description-header-wrap').forEach(el => {
  //   el.removeEventListener('click', handleTechDescriptionClick);
  // });
  
  console.log('Cleaned up animations and listeners');
}

// Initialize Barba
barba.init({
  transitions: [{
    name: 'opacity-transition',
    async leave(data) {
      await gsap.to(data.current.container, {
        opacity: 0,
        duration: 0.5,
      });
    },
    enter(data) {
      return gsap.from(data.next.container, {
        opacity: 0,
        duration: 0.5,
      });
    },
  }],
  views: [
    {
      namespace: 'collections-cms',
      beforeEnter() {
        cleanupBeforeTransition();
      },
      afterEnter(data) {
        console.log('Entered collections-cms namespace');
        reinitialiseWebflow(data);
        // Add any CMS-specific initializations here
      },
    },
    {
      namespace: 'frost-tech-page',
      beforeEnter() {
        cleanupBeforeTransition();
      },
      afterEnter(data) {
        console.log('Entered frost-tech-page namespace');
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

// Log when Barba is ready
barba.hooks.ready(() => {
  console.log('Barba is ready');
});
