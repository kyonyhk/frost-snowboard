(function() {
  // Element selectors
  const elements = {
    menuContainer: document.querySelector('.global-navbar-link.is-menu'),
    arrowIcon: document.querySelector('.navbar-back_arrow-icon'),
    bigCircle: document.querySelector('.navbar-back_big-circle'),
    smallCircle: document.querySelector('.navbar-back_small-circle'),
    backButton: document.querySelector('.global-navbar_back-button'),
    backLink: document.querySelector('.global-navbar_back-link'),
    linkContainers: document.querySelectorAll('.global-navbar-link'),
    navbarContainer: document.querySelector('.global-navbar_navbar-container'),
    iconContainer: document.querySelector('.global-navbar-link.is-icon'),
    closeIcon: document.querySelector('.global-navbar_close-icon'),
    fillSvgElement: document.querySelector('.global-navbar_background-fill svg'),
    strokeSvgElement: document.querySelector('.global-navbar_background-stroke svg'),
    strokePath: document.querySelector('.global-navbar_background-stroke'),
    diamondElement: document.querySelector('.global-navbar_diamond'),
  };

  const paths = {
    defaultFill: document.querySelector('#defaultFillPath'),
    expandedFill: document.querySelector('#expandedFillPath'),
    defaultStroke: document.querySelector('#defaultStrokePath'),
    expandedStroke: document.querySelector('#expandedStrokePath'),
  };

  const textSplits = new Map();
  let menuOpenTimeline;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function init() {
    if (!validateElements()) return;

    gsap.registerPlugin(MorphSVGPlugin);
    setupTextSplits();
    attachEventListeners();
    updateNavbarDisplay();
    setInitialTextState();
  }

  function validateElements() {
    for (const [key, element] of Object.entries(elements)) {
      if (!element) {
        console.error(`Required element not found: ${key}`);
        return false;
      }
    }
    return true;
  }

  function setupTextSplits() {
    elements.linkContainers.forEach((container) => {
      const originalText = container.querySelector('.is-original-text');
      const animatedText = container.querySelector('.is-animated-text');
      if (originalText && animatedText) {
        textSplits.set(container, {
          original: new SplitType(originalText, { types: 'chars' }),
          animated: new SplitType(animatedText, { types: 'chars' }),
        });
      }
    });
  }

  function attachEventListeners() {
    elements.menuContainer.addEventListener('click', handleMenuClick);
    elements.closeIcon.addEventListener('click', handleCloseClick);
    elements.backButton.addEventListener('mouseenter', handleBackButtonHover);
    elements.backButton.addEventListener('mouseleave', handleBackButtonLeave);
    elements.diamondElement.addEventListener('mouseenter', handleDiamondHover);
    elements.diamondElement.addEventListener('mouseleave', handleDiamondLeave);
    elements.linkContainers.forEach(attachLinkContainerListeners);
    if (elements.backLink) {
      elements.backLink.addEventListener('click', handleBackLinkClick);
    }
  }

  function updateNavbarDisplay() {
    const isHomepage = window.location.hostname === 'frost-snow.com' && window.location.pathname === '/';
    elements.diamondElement.style.display = isHomepage ? 'block' : 'none';
    if (elements.backLink) {
      elements.backLink.style.display = isHomepage ? 'none' : 'block';
    }
  }

  function setInitialTextState() {
    animate(document.querySelectorAll('.is-original-text, .is-animated-text'), { y: '0%' });
  }

  function animate(element, properties, options = {}) {
    if (prefersReducedMotion) {
      gsap.set(element, properties);
    } else {
      gsap.to(element, { ...properties, ...options });
    }
  }

  function animateSvg(svgElement, defaultPath, expandedPath, forward = true) {
    const timeline = gsap.timeline();
    timeline.to(
      defaultPath,
      {
        morphSVG: forward ? expandedPath : defaultPath,
        duration: 1,
        ease: 'power4.inOut',
      },
      0
    )
    .to(
      svgElement,
      {
        attr: { viewBox: forward ? '0 0 640 64' : '0 0 180 64' },
        width: forward ? 640 : 180,
        duration: 1,
        ease: 'power4.inOut',
      },
      0
    );
    return timeline;
  }

  function handleMenuClick() {
    const splits = textSplits.get(elements.menuContainer);
    if (!splits) return;

    menuOpenTimeline = gsap.timeline()
      .to([splits.original.chars, splits.animated.chars], {
        y: '100%',
        stagger: 0.1,
        duration: 0.5,
        ease: 'power4.out',
      })
      .add(() => {
        gsap.set(elements.menuContainer, { display: 'none' });
        gsap.set(elements.iconContainer, { display: 'block', opacity: 0 });
        elements.linkContainers.forEach((container) => {
          if (container !== elements.menuContainer) {
            gsap.set(container, { display: 'block', opacity: 0 });
          }
        });
      }, '-=0.5')
      .to(elements.navbarContainer, {
        width: '577px',
        duration: 1,
        ease: 'power4.inOut',
      }, 0)
      .add(animateSvg(elements.fillSvgElement, paths.defaultFill, paths.expandedFill, true).play, 0)
      .add(animateSvg(elements.strokeSvgElement, paths.defaultStroke, paths.expandedStroke, true).play, 0)
      .to([elements.iconContainer, elements.linkContainers], {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      }, 0)
      .add(animateMenuOpenText, '-=0.5')
      .add(resetMenuText, 0);
  }

  function handleCloseClick() {
    const linkTexts = document.querySelectorAll('.global-navbar_text-container .is-original-text, .global-navbar_text-container .is-animated-text');
    const linkTextsSplit = new SplitType(linkTexts, { types: 'chars' });
    const menuSplits = textSplits.get(elements.menuContainer);

    gsap.timeline()
      .to(linkTextsSplit.chars, {
        y: '100%',
        stagger: 0.1,
        duration: 0.5,
        ease: 'power4.out',
      })
      .add(() => {
        gsap.set(elements.iconContainer, { display: 'none' });
        gsap.set(elements.menuContainer, { display: 'block' });
        elements.linkContainers.forEach((container) => {
          if (container !== elements.menuContainer) {
            gsap.set(container, { display: 'none' });
          }
        });
      }, '-=0.5')
      .to(elements.navbarContainer, {
        width: '114px',
        duration: 1,
        ease: 'power4.inOut',
      }, 0)
      .add(animateSvg(elements.fillSvgElement, paths.defaultFill, paths.expandedFill, false).play, 0)
      .add(animateSvg(elements.strokeSvgElement, paths.defaultStroke, paths.expandedStroke, false).play, 0)
      .to(elements.menuContainer, {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      }, 0)
      .add(() => {
        if (menuSplits) {
          gsap.set(menuSplits.original.chars, { y: '100%' });
          gsap.set(menuSplits.animated.chars, { y: '0%' });
          gsap.to(menuSplits.original.chars, {
            y: '0',
            stagger: 0.1,
            duration: 0.5,
            ease: 'power4.out',
          });
        }
      })
      .add(resetMenuText, 0);
  }

  function animateMenuOpenText() {
    elements.linkContainers.forEach((container) => {
      const splits = textSplits.get(container);
      if (splits && container !== elements.menuContainer) {
        gsap.set(splits.original.chars, { y: '100%' });
        gsap.to(splits.original.chars, {
          y: '0%',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.out',
        });
      }
    });
    gsap.fromTo(elements.closeIcon, { scale: 1.1 }, { scale: 1.0, duration: 0.5, ease: 'power4.out' });
  }

  function resetMenuText() {
    elements.linkContainers.forEach((container) => {
      const splits = textSplits.get(container);
      if (splits) {
        gsap.set([splits.original.chars, splits.animated.chars], { y: '0%' });
      }
    });
    setTextHoverAnimations();
  }

  function handleBackButtonHover() {
    animate(elements.bigCircle, {
      scale: 1.2,
      opacity: 1.0,
      duration: 0.5,
      ease: 'power4.inOut',
      fill: '#6BE688',
    });
    animate(elements.smallCircle, {
      scale: 0.8,
      opacity: 1.0,
      duration: 0.5,
      ease: 'power4.inOut',
    });
    animate(elements.arrowIcon, {
      strokeWidth: 2,
      opacity: 1.0,
      duration: 0.5,
      ease: 'power4.inOut',
    });
    animate(elements.strokePath, { opacity: 0.5, duration: 0.5, ease: 'power4.inOut' });
  }

  function handleBackButtonLeave() {
    animate(elements.bigCircle, {
      scale: 1,
      opacity: 0.5,
      duration: 0.3,
      ease: 'power4.inOut',
      fill: '#A1FCCF',
    });
    animate(elements.smallCircle, {
      scale: 1,
      opacity: 0.5,
      duration: 0.3,
      ease: 'power4.inOut',
    });
    animate(elements.arrowIcon, {
      strokeWidth: 1,
      opacity: 0.5,
      duration: 0.3,
      ease: 'power4.inOut',
    });
    animate(elements.strokePath, { opacity: 0.1, duration: 0.3, ease: 'power4.inOut' });
  }

  function handleDiamondHover() {
    animate(elements.diamondElement, {
      boxShadow: '0 0 10px 0 rgba(107, 230, 136)',
      rotation: 225,
      duration: 0.5,
      ease: 'power4.inOut',
    });
  }

  function handleDiamondLeave() {
    animate(elements.diamondElement, {
      boxShadow: 'none',
      rotation: 45,
      duration: 0.3,
      ease: 'power4.inOut',
    });
  }

  function attachLinkContainerListeners(container) {
    container.addEventListener('mouseenter', () => handleLinkContainerHover(container, true));
    container.addEventListener('mouseleave', () => handleLinkContainerHover(container, false));
  }

  function handleLinkContainerHover(container, isEnter) {
    const splits = textSplits.get(container);
    if (!splits) return;

    animate([splits.original.chars, splits.animated.chars], {
      y: isEnter ? '-100%' : '0%',
      stagger: 0.1,
      duration: 0.5,
      ease: 'power4.inOut',
    });

    const opacityValue = isEnter ? 1.0 : 0.5;
    animate([elements.arrowIcon, elements.bigCircle, container], {
      opacity: opacityValue,
      duration: isEnter ? 0.5 : 0.3,
      ease: 'power4.inOut',
    });
    animate(elements.strokePath, {
      opacity: isEnter ? 0.3 : 0.1,
      duration: isEnter ? 0.5 : 0.3,
      ease: 'power4.inOut',
    });
    animate(elements.diamondElement, {
      opacity: opacityValue,
      duration: isEnter ? 0.5 : 0.3,
      ease: 'power4.inOut',
    });
  }

  function handleBackLinkClick(event) {
    event.preventDefault();
    if (history.length > 1) {
      history.back();
    } else {
      window.location.href = 'https://frost-snow.com';
    }
  }

  function setTextHoverAnimations() {
    elements.linkContainers.forEach(attachLinkContainerListeners);
  }

  // Initialize the script
  document.addEventListener('DOMContentLoaded', init);
})();
