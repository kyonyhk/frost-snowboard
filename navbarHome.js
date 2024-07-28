document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(MorphSVGPlugin);

  const menuContainer = document.querySelector('.global-navbar-link.is-menu');
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
  const bigCircle = document.querySelector('.navbar-back_big-circle');
  const smallCircle = document.querySelector('.navbar-back_small-circle');
  const backButton = document.querySelector('.global-navbar_back-button');
  const backLink = document.querySelector('.global-navbar_back-link');
  const linkContainers = document.querySelectorAll('.global-navbar-link');
  const navbarContainer = document.querySelector(
    '.global-navbar_navbar-container'
  );
  const iconContainer = document.querySelector('.global-navbar-link.is-icon');
  const closeIcon = document.querySelector('.global-navbar_close-icon');

  const fillSvgElement = document.querySelector(
    '.global-navbar_background-fill svg'
  );
  const fillGElement = fillSvgElement.querySelector('g');
  const defaultFillPath = document.querySelector('#defaultFillPath');
  const expandedFillPath = document.querySelector('#expandedFillPath');

  const strokeSvgElement = document.querySelector(
    '.global-navbar_background-stroke svg'
  );
  const strokeGElement = fillSvgElement.querySelector('g');
  const defaultStrokePath = document.querySelector('#defaultStrokePath');
  const expandedStrokePath = document.querySelector('#expandedStrokePath');

  const strokePath = document.querySelector('.global-navbar_background-stroke');

  const diamondElement = document.querySelector('.global-navbar_diamond');

  let menuOpenTimeline;

  let loadingButtonClicked = false;
  let heroAnimationCompleted = false;
  let pageLoadAnimationComplete = false;

  const textSplits = new Map();

  console.log('Elements:', {
    menuContainer,
    arrowIcon,
    bigCircle,
    smallCircle,
    strokePath,
    backButton,
    linkContainers,
    fillSvgElement,
    fillGElement,
    defaultFillPath,
    expandedFillPath,
    strokeSvgElement,
    strokeGElement,
    defaultStrokePath,
    expandedStrokePath,
    strokePath,
    iconContainer,
    closeIcon,
  });

  let navbarTimeline;

  function setInitialNavbarState() {
    gsap.set([strokePath, fillSvgElement, diamondElement, backLink, menuContainer], {opacity: 0});
    gsap.set(strokePath, {y: '100%'});
    gsap.set(navbarContainer, {opacity: 0}); // Hide the entire navbar container
  }

  setInitialNavbarState();

  function createNavbarTimeline() {
    // Set initial state
    gsap.set([strokePath, fillSvgElement, diamondElement, backLink, menuContainer], {opacity: 0});
    gsap.set(strokePath, {y: '100%'});
    
    navbarTimeline = gsap.timeline({paused: true})
      .to(strokePath, 
        {opacity: 0.3, y: '0%', duration: 0.5, ease: 'power4.out'}
      )
      .to(fillSvgElement, 
        {opacity: 1, duration: 0.5, ease: 'power4.out'}
      )
      .to([diamondElement, backLink, menuContainer], 
        {opacity: 1, duration: 0.5, ease: 'power4.out'}
      );

    return navbarTimeline;
  }

  function playNavbarIntro() {
    console.log('Playing navbar intro animation')
    if (!navbarTimeline) {
      navbarTimeline = createNavbarTimeline();
    }
    gsap.to(navbarContainer, { opacity: 1, duration: 0.5 });
    navbarTimeline.play();
  }

  function playNavbarExit(onComplete) {
    if (!navbarTimeline) {
      navbarTimeline = createNavbarTimeline();
    }
    navbarTimeline.reverse().eventCallback('onReverseComplete', onComplete);
  }

  function handlePageTransition(newPageUrl, introDuration) {
    playNavbarExit(() => {
      window.location.href = newPageUrl;
    });
  }

  // Ensure paths are correctly selected
  if (!defaultStrokePath || !expandedStrokePath) {
    console.error('SVG paths not found or incorrectly referenced.');
    return;
  }

  function updateNavbarDisplay() {
    const isHomepage =
      window.location.pathname === 'index.html' ||
      window.location.pathname === '/';

      if (diamondElement) {
        diamondElement.style.display = isHomepage ? 'block' : 'none';
      }
      if (backLink) {
        backLink.style.display = isHomepage ? 'none' : 'block';
      }
    }

  updateNavbarDisplay();

  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      const introDuration = parseFloat(this.getAttribute('data-intro-duration') || '0');
      history.pushState(null, '', href);
      updateNavbarDisplay();
    });
  });

  // Check if the back link element exists
  if (backLink) {
    // Add a click event listener
    backLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default anchor behavior if any

      playNavbarExit(() => {
        if (history.length > 1) {
          history.back(); // Navigate to the previous page
        } else {
          window.location.href = '/'; // Redirect to the homepage
        }
      })
    });
  }

  function startNavbarAnimationForNonHomepage(delay = 0) {
    setTimeout(() => {
      console.log('Starting navbar animation for non-homepage');
      pageLoadAnimationComplete = true;
      checkNavbarIntroConditions();
    }, delay);
  }

  function checkNavbarIntroConditions() {
    const isHomepage = 
      window.location.pathname === 'index.html' ||
      window.location.pathname === '/';

    console.log('Checking navbar intro conditions:', {
      loadingButtonClicked,
      heroAnimationCompleted,
      isHomepage
    });
    
    if (isHomepage) {
      if (loadingButtonClicked && heroAnimationCompleted) {
        playNavbarIntro(); 
      }
    } else {
      if (pageLoadAnimationComplete) {
        playNavbarIntro();
      }
    }
  }

  // Simulate hero animation completion after 5 seconds
  function startHeroAnimationTimer() {
    console.log('Starting hero animation timer');
    setTimeout(() => {
      console.log('Hero animation completed');
      heroAnimationCompleted = true;
      checkNavbarIntroConditions();
    }, 5000);
  }
    
  const loadingButton = document.querySelector('.loading_button-container');
    if (loadingButton) {
      loadingButton.addEventListener('click', function() {
        console.log('Loading button clicked');
        loadingButtonClicked = true;
        startHeroAnimationTimer();
      });
    } else {
      // If we're not on the homepage, start the navbar animation after a delay
      const isCollectionsPage = window.location.pathname.includes('collection');
      const isFrostTechPage = window.location.pathname.includes('frost-tech');
      
      if (isCollectionsPage) {
        startNavbarAnimationForNonHomepage(5000); // 5 second delay for Collections page
      } else if (isFrostTechPage) {
        startNavbarAnimationForNonHomepage(0); // No delay for FrostTech page
      } else {
        startNavbarAnimationForNonHomepage(0); // No delay for other pages
      }
  }  

  // Set initial text state
  function setInitialTextState() {
    document.querySelectorAll('.is-original-text').forEach((el) => {
      gsap.set(el, { y: '0%' });
    });
    document.querySelectorAll('.is-animated-text').forEach((el) => {
      gsap.set(el, { y: '0%' });
    });
  }

  // Fill SVG animation function
  function animateFillSvg(forward = true) {
    const fillTimeline = gsap.timeline();
    fillTimeline
      .to(
        defaultFillPath,
        {
          morphSVG: forward ? expandedFillPath : defaultFillPath,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        fillSvgElement,
        {
          attr: { viewBox: forward ? '0 0 640 64' : '0 0 180 64' },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        fillSvgElement,
        {
          width: forward ? 640 : 180,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        fillGElement,
        {
          attr: {
            filter: forward
              ? 'url(#expandedBackgroundFilter)'
              : 'url(#defaultBackgroundFilter)',
          },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      );

    return fillTimeline;
  }

  // Stroke SVG animation function
  function animateStrokeSvg(forward = true) {
    const strokeTimeline = gsap.timeline();
    strokeTimeline
      .to(
        defaultStrokePath,
        {
          morphSVG: forward ? expandedStrokePath : defaultStrokePath,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        strokeSvgElement,
        {
          attr: { viewBox: forward ? '0 0 640 64' : '0 0 180 64' },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        strokeSvgElement,
        {
          width: forward ? 640 : 180,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      );

    return strokeTimeline;
  }

  // Text container hover effect
  linkContainers.forEach((container) => {
    container.addEventListener('mouseenter', function () {
      gsap.to(arrowIcon, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(bigCircle, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(container, { opacity: 1.0, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(strokePath, {
        opacity: 0.3,
        duration: 0.5,
        ease: 'power4.inOut',
      });
      gsap.to(diamondElement, {
        opacity: 1.0,
        duration: 0.5,
        ease: 'power4.inOut',
      });
    });

    container.addEventListener('mouseleave', function () {
      gsap.to(arrowIcon, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(bigCircle, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(container, { opacity: 0.5, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(strokePath, {
        opacity: 0.1,
        duration: 0.3,
        ease: 'power4.inOut',
      });
      gsap.to(diamondElement, {
        opacity: 0.5,
        duration: 0.3,
        ease: 'power4.inOut',
      });
    });
  });

  // Back button hover effect
  backButton.addEventListener('mouseenter', function () {
    gsap.to(bigCircle, {
      scale: 1.2,
      opacity: 1.0,
      duration: 0.5,
      ease: 'power4.inOut',
      fill: '#6BE688',
    });
    gsap.to(smallCircle, {
      scale: 0.8,
      opacity: 1.0,
      duration: 0.5,
      ease: 'power4.inOut',
    });
    gsap.to(arrowIcon, {
      strokeWidth: 2,
      opacity: 1.0,
      duration: 0.5,
      ease: 'power4.inOut',
    });
    gsap.to(strokePath, { opacity: 0.5, duration: 0.5, ease: 'power4.inOut' });
  });

  backButton.addEventListener('mouseleave', function () {
    gsap.to(bigCircle, {
      scale: 1,
      opacity: 0.5,
      duration: 0.3,
      ease: 'power4.inOut',
      fill: '#A1FCCF',
    });
    gsap.to(smallCircle, {
      scale: 1,
      opacity: 0.5,
      duration: 0.3,
      ease: 'power4.inOut',
    });
    gsap.to(arrowIcon, {
      strokeWidth: 1,
      opacity: 0.5,
      duration: 0.3,
      ease: 'power4.inOut',
    });
    gsap.to(strokePath, { opacity: 0.1, duration: 0.3, ease: 'power4.inOut' });
  });

  // Diamond element hover effect
  diamondElement.addEventListener('mouseenter', function () {
    gsap.to(diamondElement, {
      boxShadow: '0 0 10px 0 rgba(107, 230, 136)',
      rotation: 225,
      duration: 0.5,
      ease: 'power4.inOut',
    });
  });

  diamondElement.addEventListener('mouseleave', function () {
    gsap.to(diamondElement, {
      boxShadow: 'none',
      rotation: 45,
      duration: 0.3,
      ease: 'power4.inOut',
    });
  });

  // Text animation on hover
  function setupTextHoverAnimations() {
    linkContainers.forEach((container) => {
      const originalText = container.querySelector('.is-original-text');
      const animatedText = container.querySelector('.is-animated-text');

      // Remove existing event listeners
      const oldInstance = textSplits.get(container);
      if (oldInstance) {
        container.removeEventListener('mouseenter', oldInstance.enterHandler);
        container.removeEventListener('mouseleave', oldInstance.leaveHandler);
      }

      // Create new SplitType instances
      const splits = {
        original: new SplitType(originalText, { types: 'chars' }),
        animated: new SplitType(animatedText, { types: 'chars' }),
      };

      gsap.set(splits.original.chars, { y: '0%' });
      gsap.set(splits.animated.chars, { y: '0%' });

      const enterHandler = () => {
        gsap.to(splits.original.chars, {
          y: '-100%',
          stagger: 0.02,
          duration: 0.3,
          ease: 'power2.inOut',
        });
        gsap.to(splits.animated.chars, {
          y: '-100%',
          stagger: 0.02,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      };

      const leaveHandler = () => {
        gsap.to(splits.original.chars, {
          y: '0%',
          stagger: 0.02,
          duration: 0.3,
          ease: 'power2.inOut',
        });
        gsap.to(splits.animated.chars, {
          y: '0%',
          stagger: 0.02,
          duration: 0.3,
          ease: 'power2.inOut',
        });
      };

      container.addEventListener('mouseenter', enterHandler);
      container.addEventListener('mouseleave', leaveHandler);

      // Store the new instance and handlers
      textSplits.set(container, { splits, enterHandler, leaveHandler });
    });
  }

  setupTextHoverAnimations();

  // Menu click to expand navbar
  // Initial setup
  gsap.set(expandedFillPath, { opacity: 0 });

  menuContainer.addEventListener('click', function () {
    console.log('Menu text click');

    const menuOriginalText = menuContainer.querySelector('.is-original-text');
    const menuOriginalSplit = new SplitType(menuOriginalText, {
      types: 'chars',
    });
    const menuAnimatedText = menuContainer.querySelector('.is-animated-text');
    const menuAnimatedSplit = new SplitType(menuAnimatedText, {
      types: 'chars',
    });

    const originalTexts = document.querySelectorAll('.global-navbar-link .is-original-text');
    const animatedTexts = document.querySelectorAll('.global-navbar-link .is-animated-text');
  
    const originalSplits = Array.from(originalTexts).map(text => new SplitType(text, { types: 'chars' }));
    const animatedSplits = Array.from(animatedTexts).map(text => new SplitType(text, { types: 'chars' }));

    menuOpenTimeline = gsap
      .timeline()
      .to(menuOriginalSplit.chars, {
        y: '100%',
        stagger: 0.1,
        duration: 0.5,
        ease: 'power4.out',
      })
      .to(
        menuAnimatedSplit.chars,
        {
          y: '100%',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.out',
        },
        0
      )
      .add(() => {
        // Hide menuContainer and show other containers and icons
        gsap.set(menuContainer, { display: 'none' });
        gsap.set(iconContainer, { display: 'block', opacity: 0 });
        linkContainers.forEach((container) => {
          if (container !== menuContainer) {
            gsap.set(container, { display: 'block', opacity: 0 });
          }
        });
      }, '-=0.5') // Start during the exit animation

      .to(
        navbarContainer,
        {
          width: '577px',
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .add(animateFillSvg(true).play, 0)
      .add(animateStrokeSvg(true).play, 0)
      .to(
        [iconContainer, linkContainers],
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power4.inOut',
        },
        0
      )

      // Fading in the containers and icon
      .add(() => {
        linkContainers.forEach((container) => {
          const menuOpenOriginalText =
            container.querySelector('.is-original-text');
          const menuOpenAnimatedText =
            container.querySelector('.is-animated-text');

          const menuOpenOriginalSplit = new SplitType(menuOriginalText, {
            types: 'chars',
          });
          const menuOpenAnimatedSplit = new SplitType(menuAnimatedText, {
            types: 'chars',
          });

          if (container !== menuContainer) {
            gsap.set(menuOpenOriginalSplit.chars, { y: '100%' });
            gsap.to(menuOpenOriginalSplit.chars, {
              y: '0%',
              stagger: 0.1,
              duration: 0.5,
              ease: 'power4.out',
            });
          }
        });

        // Re-setup hover animations for the open menu
        setupTextHoverAnimations();

        gsap.fromTo(
          closeIcon,
          { scale: 1.1 },
          { scale: 1.0, duration: 0.5, ease: 'power4.out' }
        );
      }, '-=0.5')
      .add(() => {
        gsap.set(menuOriginalSplit.chars, { y: '0%' });
        gsap.set(menuAnimatedSplit.chars, { y: '0%' });
      }, 0);
  });

  // Close navbar animation
  console.log('Close Icon before adding event listener:', closeIcon);

  closeIcon.addEventListener('click', function () {
    const linkOriginalTexts = document.querySelectorAll(
      '.global-navbar_text-container .is-original-text'
    );
    const linkAnimatedTexts = document.querySelectorAll(
      '.global-navbar_text-container .is-animated-text'
    );
    const menuSplits = textSplits.get(menuContainer)?.splits || {
      original: new SplitType(
        menuContainer.querySelector('.is-original-text'),
        { types: 'chars' }
      ),
      animated: new SplitType(
        menuContainer.querySelector('.is-animated-text'),
        { types: 'chars' }
      ),
    };

    // Animate out the texts and the close icon
    gsap
      .timeline()
      .to(linkOriginalTexts, {
        y: '0%',
        duration: 0.5,
        ease: 'power4.out',
      })
      .to(
        linkAnimatedTexts,
        {
          y: '0%',
          duration: 0.5,
          ease: 'power4.out',
        },
        0
      )
      .add(() => {
        gsap.set(iconContainer, { display: 'none' });
        gsap.set(menuContainer, { display: 'block' });
        linkContainers.forEach((container) => {
          if (container !== menuContainer) {
            gsap.set(container, { display: 'none' });
          }
        });
      }, '-=0.5')
      .to(
        navbarContainer,
        {
          width: '114px',
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .add(animateFillSvg(false).play, 0)
      .add(animateStrokeSvg(false).play, 0)
      .to(
        menuContainer,
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power4.inOut',
        },
        0
      )
      .add(() => {
        gsap.set(menuSplits.original.chars, { y: '0%' });
        gsap.set(menuSplits.animated.chars, { y: '0%' });
      })
      .add(() => {
        setupTextHoverAnimations();
      }, 0);
  });

  // Set initial state for text elements
  setupTextHoverAnimations();
  setInitialTextState();
});
