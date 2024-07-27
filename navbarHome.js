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
    const isHomepage =
      window.location.hostname === 'frost-snow.com' &&
      window.location.pathname === '/';

    if (isHomepage) {
      if (diamondElement) {
        diamondElement.style.display = 'block';
      }
      if (backLink) {
        backLink.style.display = 'none';
      }
    } else {
      if (diamondElement) {
        diamondElement.style.display = 'none';
      }
      if (backLink) {
        backLink.style.display = 'block';
      }
    }
  }

  updateNavbarDisplay();

  // Check if the back link element exists
  if (backLink) {
    // Add a click event listener
    backLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default anchor behavior if any

      if (history.length > 1) {
        history.back(); // Navigate to the previous page
      } else {
        window.location.href = 'https://frost-snow.com'; // Redirect to the homepage
      }
    });
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
  linkContainers.forEach((container) => {
    const originalText = container.querySelector('.is-original-text');
    const animatedText = container.querySelector('.is-animated-text');

    const originalSplit = new SplitType(originalText, { types: 'chars' });
    const animatedSplit = new SplitType(animatedText, { types: 'chars' });

    gsap.set(originalSplit.chars, { y: '0%' });
    gsap.set(animatedSplit.chars, { y: '0%' });

    container.addEventListener('mouseenter', () => {
      gsap
        .timeline()
        .to(originalSplit.chars, {
          y: '-100%',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.inOut',
        })
        .to(
          animatedSplit.chars,
          { y: '-100%', stagger: 0.1, duration: 0.5, ease: 'power4.inOut' },
          0
        );
    });

    container.addEventListener('mouseleave', () => {
      gsap
        .timeline()
        .to(animatedSplit.chars, {
          y: '0%',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.inOut',
        })
        .to(
          originalSplit.chars,
          { y: '0%', stagger: 0.1, duration: 0.5, ease: 'power4.inOut' },
          0
        );
    });
  });

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

    menuOpenTimeline = gsap
      .timeline()
      .to(menuOriginalSplit.chars, {
        y: '-200%',
        stagger: 0.1,
        duration: 0.5,
        ease: 'power4.out',
      })
      .to(
        menuAnimatedSplit.chars,
        {
          y: '-200%',
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
      .to(
        defaultFillPath,
        {
          morphSVG: expandedFillPath,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        fillSvgElement,
        {
          attr: { viewBox: '0 0 640 64' },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        fillSvgElement,
        {
          width: 640,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        fillGElement,
        {
          attr: { filter: 'url(#expandedBackgroundFilter)' },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        defaultStrokePath,
        {
          morphSVG: expandedStrokePath,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        strokeSvgElement,
        {
          attr: { viewBox: '0 0 640 64' },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        strokeSvgElement,
        {
          width: 640,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        [iconContainer, linkContainers],
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power4.inOut',
        },
        0
      ) // Fading in the containers and icon

      .add(() => {
        linkContainers.forEach((container) => {
          if (container !== menuContainer) {
            gsap.set(originalSplit.chars, { y: '100%' });
            gsap.to(originalSplit.chars, {
              y: '0%',
              stagger: 0.1,
              duration: 0.5,
              ease: 'power4.out',
            });
          }
        });

        gsap.fromTo(
          closeIcon,
          { scale: 1.1 },
          { scale: 1.0, duration: 0.5, ease: 'power4.out' }
        );
      }, '-=0.5');
  });

  // Close navbar animation
  closeIcon.addEventListener('click', function () {
    const linkOriginalTexts = document.querySelectorAll(
      '.global-navbar_text-container .is-original-text'
    );
    const linkAnimatedTexts = document.querySelectorAll(
      '.global-navbar_text-container .is-animated-text'
    );

    // Animate out the texts and the close icon
    gsap
      .timeline()
      .to([linkOriginalTexts, linkAnimatedTexts], {
        y: '-200%',
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
      .to(
        navbarContainer,
        {
          width: '114px',
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        expandedFillPath,
        {
          morphSVG: defaultFillPath,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        fillSvgElement,
        {
          attr: { viewBox: '0 0 180 64' },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        fillSvgElement,
        {
          width: 180,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        fillGElement,
        {
          attr: { filter: 'url(#defaultBackgroundFilter)' },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        expandedStrokePath,
        {
          morphSVG: defaultStrokePath,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        strokeSvgElement,
        {
          attr: { viewBox: '0 0 180 64' },
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        strokeSvgElement,
        {
          width: 180,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      )
      .to(
        [menuContainer],
        {
          opacity: 1,
          duration: 0.5,
          ease: 'power4.inOut',
        },
        0
      )
      .add(() => {
        gsap.set(menuOriginalSplit.chars, { y: '100%' });
        gsap.to(menuOriginalSplit.chars, {
          y: '0',
          stagger: 0.1,
          duration: 0.5,
          ease: 'power4.out',
        });
      });
  });
});
