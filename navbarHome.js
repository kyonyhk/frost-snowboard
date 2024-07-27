document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(MorphSVGPlugin);

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
    defaultFillPath: document.querySelector('#defaultFillPath'),
    expandedFillPath: document.querySelector('#expandedFillPath'),
    defaultStrokePath: document.querySelector('#defaultStrokePath'),
    expandedStrokePath: document.querySelector('#expandedStrokePath'),
  };

  const fillGElement = elements.fillSvgElement ? elements.fillSvgElement.querySelector('g') : null;

  let menuOpenTimeline;

  const textSplits = new Map();

  function initializeElements() {
    if (!elements.defaultStrokePath || !elements.expandedStrokePath) {
      console.error('SVG paths not found or incorrectly referenced.');
      return false;
    }
    return true;
  }

  function updateNavbarDisplay() {
    const isHomepage = window.location.hostname === 'frost-snow.com' && window.location.pathname === '/';
    if (elements.diamondElement) {
      elements.diamondElement.style.display = isHomepage ? 'block' : 'none';
    }
    if (elements.backLink) {
      elements.backLink.style.display = isHomepage ? 'none' : 'block';
    }
  }

  function setupBackLinkListener() {
    if (elements.backLink) {
      elements.backLink.addEventListener('click', function (event) {
        event.preventDefault();
        if (history.length > 1) {
          history.back();
        } else {
          window.location.href = 'https://frost-snow.com';
        }
      });
    }
  }

  function setInitialTextState() {
    gsap.set('.is-original-text, .is-animated-text', { y: '0%' });
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

    if (svgElement === elements.fillSvgElement && fillGElement) {
      timeline.to(
        fillGElement,
        {
          attr: { filter: forward ? 'url(#expandedBackgroundFilter)' : 'url(#defaultBackgroundFilter)' },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      );
    }

    return timeline;
  }

  function setupHoverEffects() {
    elements.linkContainers.forEach((container) => {
      container.addEventListener('mouseenter', () => handleContainerHover(container, true));
      container.addEventListener('mouseleave', () => handleContainerHover(container, false));
    });

    elements.backButton.addEventListener('mouseenter', () => handleBackButtonHover(true));
    elements.backButton.addEventListener('mouseleave', () => handleBackButtonHover(false));

    elements.diamondElement.addEventListener('mouseenter', () => handleDiamondHover(true));
    elements.diamondElement.addEventListener('mouseleave', () => handleDiamondHover(false));
  }

  function handleContainerHover(container, isEnter) {
    const duration = isEnter ? 0.5 : 0.3;
    const opacity = isEnter ? 1.0 : 0.5;
    const strokeOpacity = isEnter ? 0.3 : 0.1;

    gsap.to([elements.arrowIcon, elements.bigCircle, container, elements.diamondElement], { opacity, duration, ease: 'power4.inOut' });
    gsap.to(elements.strokePath, { opacity: strokeOpacity, duration, ease: 'power4.inOut' });

    const originalText = container.querySelector('.is-original-text');
    const animatedText = container.querySelector('.is-animated-text');

    if (!textSplits.has(container)) {
      textSplits.set(container, {
        original: new SplitType(originalText, { types: 'chars' }),
        animated: new SplitType(animatedText, { types: 'chars' })
      });
    }

    const splits = textSplits.get(container);
    gsap.to([splits.original.chars, splits.animated.chars], {
      y: isEnter ? '-100%' : '0%',
      stagger: 0.1,
      duration: 0.5,
      ease: 'power4.inOut',
    });
  }

  function handleBackButtonHover(isEnter) {
    const duration = isEnter ? 0.5 : 0.3;
    gsap.to(elements.bigCircle, {
      scale: isEnter ? 1.2 : 1,
      opacity: isEnter ? 1.0 : 0.5,
      duration,
      ease: 'power4.inOut',
      fill: isEnter ? '#6BE688' : '#A1FCCF',
    });
    gsap.to(elements.smallCircle, {
      scale: isEnter ? 0.8 : 1,
      opacity: isEnter ? 1.0 : 0.5,
      duration,
      ease: 'power4.inOut',
    });
    gsap.to(elements.arrowIcon, {
      strokeWidth: isEnter ? 2 : 1,
      opacity: isEnter ? 1.0 : 0.5,
      duration,
      ease: 'power4.inOut',
    });
    gsap.to(elements.strokePath, { opacity: isEnter ? 0.5 : 0.1, duration, ease: 'power4.inOut' });
  }

  function handleDiamondHover(isEnter) {
    gsap.to(elements.diamondElement, {
      boxShadow: isEnter ? '0 0 10px 0 rgba(107, 230, 136)' : 'none',
      rotation: isEnter ? 225 : 45,
      duration: isEnter ? 0.5 : 0.3,
      ease: 'power4.inOut',
    });
  }

  function setupMenuClickListener() {
    elements.menuContainer.addEventListener('click', handleMenuClick);
  }

  function handleMenuClick() {
    const menuTexts = {
      original: elements.menuContainer.querySelector('.is-original-text'),
      animated: elements.menuContainer.querySelector('.is-animated-text')
    };

    const menuSplits = {
      original: new SplitType(menuTexts.original, { types: 'chars' }),
      animated: new SplitType(menuTexts.animated, { types: 'chars' })
    };

    menuOpenTimeline = gsap.timeline()
      .to([menuSplits.original.chars, menuSplits.animated.chars], {
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
      .add(animateSvg(elements.fillSvgElement, elements.defaultFillPath, elements.expandedFillPath, true).play(), 0)
      .add(animateSvg(elements.strokeSvgElement, elements.defaultStrokePath, elements.expandedStrokePath, true).play(), 0)
      .to([elements.iconContainer, elements.linkContainers], {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      }, 0)
      .add(() => {
        elements.linkContainers.forEach((container) => {
          if (container !== elements.menuContainer) {
            const texts = {
              original: container.querySelector('.is-original-text'),
              animated: container.querySelector('.is-animated-text')
            };
            const splits = {
              original: new SplitType(texts.original, { types: 'chars' }),
              animated: new SplitType(texts.animated, { types: 'chars' })
            };
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
      }, '-=0.5')
      .add(() => {
        gsap.set([menuSplits.original.chars, menuSplits.animated.chars], { y: '0%' });
        setupHoverEffects();
      }, 0);
  }

  function setupCloseIconListener() {
    elements.closeIcon.addEventListener('click', handleCloseClick);
  }

  function handleCloseClick() {
    const linkTexts = document.querySelectorAll('.global-navbar_text-container .is-original-text, .global-navbar_text-container .is-animated-text');
    const linkTextsSplit = new SplitType(linkTexts, { types: 'chars' });
    const menuTexts = {
      original: elements.menuContainer.querySelector('.is-original-text'),
      animated: elements.menuContainer.querySelector('.is-animated-text')
    };
    const menuSplits = {
      original: new SplitType(menuTexts.original, { types: 'chars' }),
      animated: new SplitType(menuTexts.animated, { types: 'chars' })
    };

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
      .add(animateSvg(elements.fillSvgElement, elements.defaultFillPath, elements.expandedFillPath, false).play(), 0)
      .add(animateSvg(elements.strokeSvgElement, elements.defaultStrokePath, elements.expandedStrokePath, false).play(), 0)
      .to(elements.menuContainer, {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      }, 0)
      .add(() => {
        gsap.set(menuSplits.original.chars, { y: '100%' });
        gsap.set(menuSplits.animated.chars, { y: '0%' });
        gsap.to(menuSplits.original.chars, {
          y: '0',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.out',
        });
      })
      .add(() => {
        gsap.set([menuSplits.original.chars, menuSplits.animated.chars], { y: '0%' });
        setupHoverEffects();
      }, 0);
  }

  function init() {
    if (!initializeElements()) return;

    updateNavbarDisplay();
    setupBackLinkListener();
    setInitialTextState();
    setupHoverEffects();
    setupMenuClickListener();
    setupCloseIconListener();

    gsap.set(elements.expandedFillPath, { opacity: 0 });
  }

  init();
});
