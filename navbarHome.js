document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(MorphSVGPlugin);

  const menuContainer = document.querySelector('.global-navbar-link.is-menu');
  const arrowIcon = document.querySelector('.navbar-back_arrow-icon');
  const bigCircle = document.querySelector('.navbar-back_big-circle');
  const smallCircle = document.querySelector('.navbar-back_small-circle');
  const backButton = document.querySelector('.global-navbar_back-button');
  const backLink = document.querySelector('.global-navbar_back-link');
  const linkContainers = document.querySelectorAll('.global-navbar-link');
  const navbarContainer = document.querySelector('.global-navbar_navbar-container');
  const iconContainer = document.querySelector('.global-navbar-link.is-icon');
  const closeIcon = document.querySelector('.global-navbar_close-icon');

  const fillSvgElement = document.querySelector('.global-navbar_background-fill svg');
  const fillGElement = fillSvgElement.querySelector('g');
  const defaultFillPath = document.querySelector('#defaultFillPath');
  const expandedFillPath = document.querySelector('#expandedFillPath');

  const strokeSvgElement = document.querySelector('.global-navbar_background-stroke svg');
  const strokeGElement = fillSvgElement.querySelector('g');
  const defaultStrokePath = document.querySelector('#defaultStrokePath');
  const expandedStrokePath = document.querySelector('#expandedStrokePath');

  const strokePath = document.querySelector('.global-navbar_background-stroke');

  const diamondElement = document.querySelector('.global-navbar_diamond');

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

  function updateNavbarDisplay() {
    const isHomepage = window.location.hostname === 'frost-snow.com' && window.location.pathname === '/';

    if (isHomepage) {
      diamondElement.style.display = 'block';
      backLink.style.display = 'none';
    } else {
      diamondElement.style.display = 'none';
      backLink.style.display = 'block';
    }
  }

  updateNavbarDisplay();

  if (backLink) {
    backLink.addEventListener('click', function (event) {
      event.preventDefault();
      if (history.length > 1) {
        history.back();
      } else {
        window.location.href = 'https://frost-snow.com';
      }
    });
  }

  // Set initial text state
  function setInitialTextState() {
    document.querySelectorAll('.is-original-text, .is-animated-text').forEach(el => {
      gsap.set(el, { y: '0%' });
    });
  }

  // Fill SVG animation function
  function animateFillSvg(forward = true) {
    return gsap.timeline()
      .to(defaultFillPath, {
        morphSVG: forward ? expandedFillPath : defaultFillPath,
        duration: 1,
        ease: 'power4.inOut',
      }, 0)
      .to(fillSvgElement, {
        attr: { viewBox: forward ? '0 0 640 64' : '0 0 180 64' },
        duration: 1,
        ease: 'power4.inOut',
      }, 0)
      .to(fillSvgElement, {
        width: forward ? 640 : 180,
        duration: 1,
        ease: 'power4.inOut',
      }, 0)
      .to(fillGElement, {
        attr: { filter: forward ? 'url(#expandedBackgroundFilter)' : 'url(#defaultBackgroundFilter)' },
        duration: 1,
        ease: 'power4.inOut',
      }, 0);
  }

  // Stroke SVG animation function
  function animateStrokeSvg(forward = true) {
    return gsap.timeline()
      .to(defaultStrokePath, {
        morphSVG: forward ? expandedStrokePath : defaultStrokePath,
        duration: 1,
        ease: 'power4.inOut',
      }, 0)
      .to(strokeSvgElement, {
        attr: { viewBox: forward ? '0 0 640 64' : '0 0 180 64' },
        duration: 1,
        ease: 'power4.inOut',
      }, 0)
      .to(strokeSvgElement, {
        width: forward ? 640 : 180,
        duration: 1,
        ease: 'power4.inOut',
      }, 0);
  }

  // Text container hover effect
  function setTextHoverAnimations() {
    linkContainers.forEach((container) => {
      container.addEventListener('mouseenter', function () {
        const originalText = container.querySelector('.is-original-text');
        const animatedText = container.querySelector('.is-animated-text');

        const originalSplit = new SplitType(originalText, { types: 'chars' });
        const animatedSplit = new SplitType(animatedText, { types: 'chars' });

        gsap.to(originalSplit.chars, {
          y: '-100%',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.inOut',
        });
        gsap.to(animatedSplit.chars, {
          y: '-100%',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.inOut',
        }, 0);
      });

      container.addEventListener('mouseleave', function () {
        const originalText = container.querySelector('.is-original-text');
        const animatedText = container.querySelector('.is-animated-text');

        const originalSplit = new SplitType(originalText, { types: 'chars' });
        const animatedSplit = new SplitType(animatedText, { types: 'chars' });

        gsap.to(originalSplit.chars, {
          y: '0%',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.inOut',
        });
        gsap.to(animatedSplit.chars, {
          y: '0%',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.inOut',
        }, 0);
      });
    });
  }

  // Apply hover effects
  setTextHoverAnimations();

  // Menu click to expand navbar
  menuContainer.addEventListener('click', function () {
    console.log('Menu text click');

    const menuOriginalText = menuContainer.querySelector('.is-original-text');
    const menuOriginalSplit = new SplitType(menuOriginalText, { types: 'chars' });
    const menuAnimatedText = menuContainer.querySelector('.is-animated-text');
    const menuAnimatedSplit = new SplitType(menuAnimatedText, { types: 'chars' });

    menuOpenTimeline = gsap.timeline()
      .to(menuOriginalSplit.chars, {
        y: '100%',
        stagger: 0.1,
        duration: 0.5,
        ease: 'power4.out',
      })
      .to(menuAnimatedSplit.chars, {
        y: '100%',
        stagger: 0.1,
        duration: 0.5,
        ease: 'power4.out',
      }, 0)
      .add(() => {
        gsap.set(menuContainer, { display: 'none' });
        gsap.set(iconContainer, { display: 'block', opacity: 0 });
        linkContainers.forEach((container) => {
          if (container !== menuContainer) {
            gsap.set(container, { display: 'block', opacity: 0 });
          }
        });
      }, '-=0.5')
      .to(navbarContainer, {
        width: '577px',
        duration: 1,
        ease: 'power4.inOut',
      }, 0)
      .add(animateFillSvg(true).play, 0)
      .add(animateStrokeSvg(true).play, 0)
      .to([iconContainer, linkContainers], {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      }, 0)
      .add(() => {
        gsap.set(menuOriginalSplit.chars, { y: '0%' });
        gsap.set(menuAnimatedSplit.chars, { y: '0%' });
        setTextHoverAnimations(); // Reapply hover animations
      }, 0);
  });

  // Close navbar animation
  closeIcon.addEventListener('click', function () {
    const linkOriginalTexts = document.querySelectorAll('.global-navbar_text-container .is-original-text');
    const linkAnimatedTexts = document.querySelectorAll('.global-navbar_text-container .is-animated-text');
    const menuOriginalText = menuContainer.querySelector('.is-original-text');
    const menuOriginalSplit = new SplitType(menuOriginalText, { types: 'chars' });
    const menuAnimatedText = menuContainer.querySelector('.is-animated-text');
    const menuAnimatedSplit = new SplitType(menuAnimatedText, { types: 'chars' });

    gsap.timeline()
      .to([linkOriginalTexts, linkAnimatedTexts], {
        y: '100%',
        stagger: 0.1,
        duration: 0.5,
        ease: 'power4.out',
      })
      .add(() => {
        gsap.set(iconContainer, { display: 'none' });
        gsap.set(menuContainer, { display: 'block' });
        linkContainers.forEach((container) => {
          if (container !== menuContainer) {
            gsap.set(container, { display: 'none' });
          }
        });
      }, '-=0.5')
      .to(navbarContainer, {
        width: '114px',
        duration: 1,
        ease: 'power4.inOut',
      }, 0)
      .add(animateFillSvg(false).play, 0)
      .add(animateStrokeSvg(false).play, 0)
      .to(menuContainer, {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.inOut',
      }, 0)
      .add(() => {
        gsap.set(menuOriginalSplit.chars, { y: '0%' });
        gsap.set(menuAnimatedSplit.chars, { y: '0%' });
        setTextHoverAnimations(); // Reapply hover animations
      }, 0);
  });

  // Set initial state for text elements
  setInitialTextState();
});
