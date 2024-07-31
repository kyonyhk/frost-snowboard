gsap.registerPlugin(MorphSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

// Navbar constants
const menuContainer = document.querySelector('.global-navbar-link.is-menu');
const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
const arrowIconPath = document.querySelector('.navbar-back_arrow-icon svg path');
const bigCircle = document.querySelector('.navbar-back_big-circle');
const smallCircle = document.querySelector('.navbar-back_small-circle');
const backButton = document.querySelector('.global-navbar_back-button');
const backLink = document.querySelector('.global-navbar_back-link');
const linkContainers = document.querySelectorAll('.global-navbar-link');
const navbar = document.querySelector('.global-navbar');
const navbarContainer = document.querySelector(
  '.global-navbar_navbar-container'
);
const iconContainer = document.querySelector('.global-navbar-link.is-icon');
const closeIcon = document.querySelector('.global-navbar_close-icon');
const closeIconPath = document.querySelector('.global-navbar_close-icon path');

// Fill SVG constants
const fillSvgElement = document.querySelector(
  '.global-navbar_background-fill svg'
);
const fillGElement = fillSvgElement.querySelector('g');
const defaultFillPath = document.querySelector('#defaultFillPath');
const expandedFillPath = document.querySelector('#expandedFillPath');

// Fill stroke constants
const strokeSvgElement = document.querySelector(
  '.global-navbar_background-stroke svg'
);
const strokeGElement = fillSvgElement.querySelector('g');
const defaultStrokePath = document.querySelector('#defaultStrokePath');
const expandedStrokePath = document.querySelector('#expandedStrokePath');

const strokePath = document.querySelector('.global-navbar_background-stroke');

// Diamond constants
const diamondElement = document.querySelector('.global-navbar_diamond');

// Variables
let menuOpenTimeline;
let loadingButtonClicked = false;
let heroAnimationCompleted = false;
let pageLoadAnimationComplete = false;
let heroAnimationTimerId;
let navbarTimeline;

const textSplits = new Map();

// Color themes
const colorThemes = {
  default: {
    textColor: '#A1FCCF',
    diamondColor: '#002814',
    diamondStroke: '#6BE688',
    strokeGradient: 'defaultStrokeGradient',
    fillGradient: 'defaultGradient',
    circleColor: '#002814',
    circleStroke: '#A1FCCF',
    arrowColor: '#6BE688', 
    closeIcon: '#A1FCCF'
  },
  yellow: {
    textColor: '#FDFDCE',
    diamondColor: '#3C3312',
    diamondStroke: '#FDFDCE',
    strokeGradient: 'yellowDefaultStrokeGradient',
    fillGradient: 'yellowDefaultGradient',
    circleColor: '#3C3312',
    circleStroke: '#FDFDCE',
    arrowColor: '#FDFDCE',
    closeIcon: '#FDFDCE'
  },
  purple: {
    textColor: '#877FCB',
    diamondColor: '#1A0544',
    diamondStroke: '#877FCB',
    strokeGradient: 'purpleDefaultStrokeGradient',
    fillGradient: 'purpleDefaultGradient',
    circleColor: '#1A0544',
    circleStroke: '#877FCB',
    arrowColor: '#877FCB',
    closeIcon: '#877FCB'
  },
  quakeshift: {
    textColor: '#A1FCCF',
    diamondColor: '#002814',
    diamondStroke: '#6BE688',
    strokeGradient: 'defaultStrokeGradient',
    fillGradient: 'defaultGradient',
    circleColor: '#002814',
    circleStroke: '#A1FCCF',
    arrowColor: '#6BE688', 
    closeIcon: '#A1FCCF'
  },
  thermoflux: {
    textColor: '#FDFDCE',
    diamondColor: '#3C3312',
    diamondStroke: '#FDFDCE',
    strokeGradient: 'yellowDefaultStrokeGradient',
    fillGradient: 'yellowDefaultGradient',
    circleColor: '#3C3312',
    circleStroke: '#FDFDCE',
    arrowColor: '#FDFDCE',
    closeIcon: '#FDFDCE'
  },
  flexiweave: {
    textColor: '#877FCB',
    diamondColor: '#1A0544',
    diamondStroke: '#877FCB',
    strokeGradient: 'purpleDefaultStrokeGradient',
    fillGradient: 'purpleDefaultGradient',
    circleColor: '#1A0544',
    circleStroke: '#877FCB',
    arrowColor: '#877FCB',
    closeIcon: '#877FCB'
  }
};

// Function to set the color theme
function setColorTheme(theme) {
  const colors = colorThemes[theme] || colorThemes.default;

  // Update text color
  document.querySelectorAll('.s-s5.is-navbar').forEach(el => {
    el.style.color = colors.textColor;
  });

  // Update diamond color
  if (diamondElement) {
    diamondElement.style.backgroundColor = colors.diamondColor;
    diamondElement.style.borderColor = colors.diamondStroke;

    updateSvgColors(colors);
    updateHoverEffects(colors);
  }

  // Update SVG elements
  updateSvgColors(colors);
}

// Function to update SVG colors
function updateSvgColors(colors) {
  // Update stroke gradient
  const strokePath = document.querySelector('#defaultStrokePath');
  if (strokePath) {
    strokePath.style.stroke = `url(#${colors.strokeGradient})`;
  }

  // Update fill gradient
  const fillPath = document.querySelector('#defaultFillPath');
  if (fillPath) {
    fillPath.style.fill = `url(#${colors.fillGradient})`;
  }

  // Update arrow icon color
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon path');
  if (arrowIcon) {
    arrowIcon.style.stroke = colors.arrowColor;
  }

  if (closeIconPath) {
    closeIconPath.style.fill = colors.closeIcon;
  }

  // Update circle colors
  const bigCirclePaths = document.querySelectorAll('.navbar-back_big-circle path');
  const smallCirclePaths = document.querySelectorAll('.navbar-back_small-circle path');
  const backgroundCircle = document.querySelector('.navbar-back_bg');
  
  bigCirclePaths.forEach(path => {
    path.style.stroke = colors.circleStroke;
  });

  smallCirclePaths.forEach(path => {
    path.style.stroke = colors.circleStroke;
  });

  if (backgroundCircle) {
    backgroundCircle.style.backgroundColor = colors.circleColor;
  }
}

// Call this function when the page loads or when navigating to a new page
function updateNavbarColor() {
  const path = window.location.pathname;
  if (path.includes('apex-collection')) {
    setColorTheme('default');
  } else if (path.includes('ember-collection')) {
    setColorTheme('yellow');
  } else if (path.includes('nebula-collection')) {
    setColorTheme('purple');
  } else {
    setColorTheme('default');
  }
}

function updateHoverEffects(colors) {
  // Helper function to remove old listeners and add new ones
  function updateListener(element, eventType, newHandler) {
    const oldHandler = element.getAttribute(`data-${eventType}-handler`);
    if (oldHandler) {
      element.removeEventListener(eventType, window[oldHandler]);
    }
    const handlerName = `${eventType}Handler${Date.now()}`;
    window[handlerName] = newHandler;
    element.setAttribute(`data-${eventType}-handler`, handlerName);
    element.addEventListener(eventType, newHandler);
  }

  // Update diamond hover effect
  if (diamondElement) {
    updateListener(diamondElement, 'mouseenter', function () {
      gsap.to(diamondElement, {
        boxShadow: `0 0 10px 0 ${colors.diamondStroke}`,
        opacity: 1,
        rotation: 225,
        duration: 0.5,
        ease: 'power4.inOut',
      });
      gsap.to(strokePath, { opacity: 0.5, duration: 0.5, ease: 'power4.out' })
    });

    updateListener(diamondElement, 'mouseleave', function () {
      gsap.to(diamondElement, {
        boxShadow: 'none',
        opacity: 0.5, 
        rotation: 45,
        duration: 0.3,
        ease: 'power4.inOut',
      });
      gsap.to(strokePath, { opacity: 0.1, duration: 0.5, ease: 'power4.out' })
    });
  }

  // Update back button hover effect
  if (backButton) {
    updateListener(backButton, 'mouseenter', function () {
      gsap.to(bigCircle, {
        scale: 1.2,
        opacity: 1.0,
        duration: 0.5,
        ease: 'power4.inOut',
        fill: colors.circleStroke,
      });
      gsap.to(smallCircle, {
        scale: 0.9,
        opacity: 1.0,
        duration: 0.5,
        ease: 'power4.inOut',
      });
      gsap.to(arrowIconPath, {
        attr: { 'stroke-width': 2 },
        opacity: 1.0,
        duration: 0.5,
        ease: 'power4.inOut',
      })
      gsap.to(strokePath, { opacity: 0.5, duration: 0.5, ease: 'power4.inOut' });
    });

    updateListener(backButton, 'mouseleave', function () {
      gsap.to(bigCircle, {
        scale: 1,
        opacity: 0.5,
        duration: 0.3,
        ease: 'power4.inOut',
        fill: colors.circleStroke,
      });
      gsap.to(smallCircle, {
        scale: 1.0,
        opacity: 0.5,
        duration: 0.5,
        ease: 'power4.inOut',
      });
      gsap.to(arrowIconPath, {
        attr: { 'stroke-width': 1 },
        opacity: 1.0,
        duration: 0.5,
        ease: 'power4.inOut',
      })
      gsap.to(strokePath, { opacity: 0.1, duration: 0.5, ease: 'power4.inOut' });
    });
  }

  // Update text container hover effects
  linkContainers.forEach((container) => {
    updateListener(container, 'mouseenter', function () {
      gsap.to(container, { color: colors.textColor, duration: 0.5, ease: 'power4.inOut' });
      gsap.to(strokePath, { opacity: 0.3, duration: 0.5, ease: 'power4.inOut' });
    });

    updateListener(container, 'mouseleave', function () {
      gsap.to(container, { color: colors.textColor, duration: 0.3, ease: 'power4.inOut' });
      gsap.to(strokePath, { opacity: 0.1, duration: 0.5, ease: 'power4.inOut' });
    });
  });
}

function isMobile() {
  return window.innerWidth <= 479;
}

function updateNavbarDisplay() {
  const isHomepage =
    window.location.pathname === 'index.html' ||
    window.location.pathname === '/';
  const isCollectionsPage = window.location.pathname.includes('/collections/');
  const isFrostTechPage = window.location.pathname.includes('/frost-tech/');

  if (isMobile()) {
    if (isHomepage) {
      gsap.set(navbar, { display: 'none' });
    } else if (isCollectionsPage || isFrostTechPage) {
      gsap.set(navbar, { display: 'flex' });
    } 
  } else {
    gsap.set(navbar, { display: 'flex' });
  }
  
  if (diamondElement) {
    diamondElement.style.display = isHomepage ? 'block' : 'none';
  }
  if (backLink) {
    backLink.style.display = isHomepage ? 'none' : 'block';
  }
}

function handleNavigation() {
  console.log('Handling navigation');
  const isHomepage = 
    window.location.pathname === 'index.html' ||
    window.location.pathname === '/'; ||
    window.location.pathname === '';

  setInitialNavbarState();

  if (isHomepage) {
    // Reset the homepage-specific variables
    loadingButtonClicked = false;
    heroAnimationCompleted = false;

    if (document.referrer.includes(window.location.origin)) {
    // We're navigating back to the homepage from another page on the same site
      console.log('Returning to homepage from internal link');
      playNavbarIntro();
    } else {
      checkNavbarIntroConditions();
    }
  } else {
    // For non-homepage, start the animation after a delay
    const isCollectionsPage = window.location.pathname.includes('collection');
    const isFrostTechPage = window.location.pathname.includes('frost-tech');
    
    if (isCollectionsPage) {
      startNavbarAnimationForNonHomepage(4000);
    } else if (isFrostTechPage) {
      startNavbarAnimationForNonHomepage(3000);
    } else {
      startNavbarAnimationForNonHomepage(0);
    }
  }

  if (navbar) {
    navbar.style.display = 'flex';
    gsap.to(navbar, { opacity: 1, duration: 0.5, ease: 'power4.out' });
  }

  updateNavbarDisplay();
  updateNavbarColor();
}

function setInitialNavbarState() {
  gsap.set([strokePath, fillSvgElement, diamondElement, backLink, menuContainer], {opacity: 0});
  gsap.set(strokePath, {y: '100%'});
  gsap.set(navbarContainer, {opacity: 0, visibility: 'hidden'}); // Hide the entire navbar container
  gsap.set(navbarContainer, {width: '114px'})
}

function createNavbarTimeline() {
  console.log('Creating navbar timeline');
  // Set initial state
  gsap.set([strokePath, fillSvgElement, diamondElement, backLink, menuContainer], {opacity: 0});
  gsap.set(strokePath, {y: '100%'});

  if (!navbarTimeline) {
    navbarTimeline = gsap.timeline({paused: true})
      .to(strokePath, 
        {opacity: 0.3, y: '0%', duration: 0.5, ease: 'power4.out'}
      )
      .to(fillSvgElement, 
        {opacity: 1, duration: 0.5, ease: 'power4.out'}
      )
      .to([diamondElement, backLink], 
        {opacity: 1, duration: 0.5, ease: 'power4.out'}
      )
      .to(menuContainer, 
        {opacity: 1, duration: 0.5, ease: 'power4.out'}
      );
  }

  console.log('Navbar timeline created'); 
  return navbarTimeline;
}

function playNavbarIntro() {
  console.log('Playing navbar intro animation')
  setInitialNavbarState();
  if (!navbarTimeline) {
    navbarTimeline = createNavbarTimeline();
  }
  gsap.set(navbarContainer, { visibility: 'visible', opacity: 0 });
  gsap.to(navbarContainer, { opacity: 1, duration: 0.5, onComplete: () => {
    navbarTimeline.play();
    updateNavbarColor();
  }});
}

function playNavbarExit(onComplete) {
  console.log('Starting navbar exit animation');
  if (!navbarTimeline) {
    console.log('Creating new navbar timeline');
    navbarTimeline = createNavbarTimeline();
  }

  const timeoutId = setTimeout(() => {
    console.log('Failsafe: Navbar exit animation timed out');
    if (onComplete) {
      console.log('Calling onComplete callback (from failsafe)');
      onComplete();
    }
  }, 2000);
  
  navbarTimeline.reverse().eventCallback('onReverseComplete', () => {
    console.log('Navbar exit animation completed');
    clearTimeout(timeoutId);
    if (onComplete) {
      console.log('Calling onComplete callback');
      onComplete();
    };
  });

  navbarTimeline.reverse(0);
}

function handlePageTransition(newPageUrl, introDuration) {
  playNavbarExit(() => {
    window.location.href = newPageUrl;
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
    if (document.referrer.includes(window.location.origin) || (loadingButtonClicked && heroAnimationCompleted)) {
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
  clearTimeout(heroAnimationTimerId);
  heroAnimationTimerId = setTimeout(() => {
    console.log('Hero animation completed');
    heroAnimationCompleted = true;
    checkNavbarIntroConditions();
  }, 5000);
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

function setupNavbarScrollTrigger() {
  const footer = document.querySelector('.section.is-footer');
  const isHomepage = window.location.pathname === 'index.html' || window.location.pathname === '/';

  if (footer && navbar && isHomepage) {
    ScrollTrigger.create({
      trigger: footer,
      start: 'top 80%',
      end: 'bottom bottom',
      onEnter: () => {
        gsap.to(navbar, {
          opacity: 0,
          duration: 0.5,
          ease: 'power4.out',
          onComplete: () => {
            navbar.style.display = 'none';
          }
        });
      },
      onLeaveBack: () => {
        navbar.style.display = 'flex';
        gsap.to(navbar, {
          opacity: 1,
          duration: 0.5,
          ease: 'power4.out'
        });
      }
    });
  }
}

function setupEventListeners() {
  // Resize event listeners
  window.addEventListener('resize', updateNavbarDisplay);
  
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const href = this.getAttribute('href');
      const introDuration = parseFloat(this.getAttribute('data-intro-duration') || '0');

      playNavbarExit(() => {
        history.pushState(null, '', href);
        loadContent(href);
      })
    });
  });

  // Back button event listener
  // Check if the back link element exists
  if (backLink) {
    backLink.addEventListener('click', function (event) {
      console.log('Back link clicked');
      event.preventDefault(); // Prevent the default anchor behavior if any

      playNavbarExit(() => {
        console.log('Inside onComplete callback');
        if (document.referrer && document.referrer.includes(window.location.origin)) {
          console.log('Going back in history');
          window.history.back();
        } else {
          console.log('Redirecting to homepage');
          loadContent('/');
        }
      })
    });
  }

  // Loading button event listener
  const loadingButton = document.querySelector('.loading_button-container');
  if (loadingButton) {
    loadingButton.addEventListener('click', function() {
      console.log('Loading button clicked');
      loadingButtonClicked = true;
      startHeroAnimationTimer();
    });
  }  

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

  closeIcon.addEventListener('click', function (event) {
    event.preventDefault();
    event.stopPropagation();
  
    console.log('Close icon clicked');
    
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

    updateNavbarDisplay();
  });

  // Listen for popstate events (back/forward navigation)
  window.addEventListener('popstate', function(event) {
    console.log('popstate event triggered');
    loadContent(window.location.pathname);
  });

  if (window.location.pathname === 'index.html' || window.location.pathname === '/') {
    const loadingButton = document.querySelector('.loading_button-container');
    if (loadingButton) {
      loadingButton.addEventListener('click', function() {
        console.log('Loading button clicked');
        loadingButtonClicked = true;
        startHeroAnimationTimer();
      });
    }
  }
}

function loadContent(url) {
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      response.text()
    })
    .then(html => {
      const parser = new DOMParser();
      const newDocument = parser.parseFromString(html, 'text/html');
      document.body.innerHTML = newDocument.body.innerHTML;
      handleNavigation();
      setupEventListeners(); // Re-attach event listeners to new DOM elements
    })
    .catch(error => console.error('Error:', error));
}

document.addEventListener('DOMContentLoaded', function () {
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

  // Ensure paths are correctly selected
  if (!defaultStrokePath || !expandedStrokePath) {
    console.error('SVG paths not found or incorrectly referenced.');
    return;
  }

  setupEventListeners();
  setupTextHoverAnimations();
  updateNavbarColor();
  handleNavigation();
  setInitialTextState();
  updateNavbarDisplay();
  setupNavbarScrollTrigger();
});
