// navbarColors.js

document.addEventListener('DOMContentLoaded', function () {
  const colorThemes = {
    default: {
      primary: '#6BE688',
      secondary: '#A1FCCF',
      tertiary: '#002814',
      fillGradient: {
        default: 'defaultGradient',
        expanded: 'expandedGradient'
      },
      strokeGradient: {
        default: 'defaultStrokeGradient',
        expanded: 'expandedStrokeGradient'
      }
    },
    'apex-collection': {
      primary: '#6BE688',
      secondary: '#A1FCCF',
      tertiary: '#002814',
      fillGradient: {
        default: 'defaultGradient',
        expanded: 'expandedGradient'
      },
      strokeGradient: {
        default: 'defaultStrokeGradient',
        expanded: 'expandedStrokeGradient'
      }
    },
    'ember-collection': {
      primary: '#D97848',
      secondary: '#FDFDCE',
      tertiary: '#3C3312',
      fillGradient: {
        default: 'yellowDefaultGradient',
        expanded: 'yellowExpandedGradient'
      },
      strokeGradient: {
        default: 'yellowDefaultStrokeGradient',
        expanded: 'yellowExpandedStrokeGradient'
      }
    },
    'nebula-collection': {
      primary: '#580DEB',
      secondary: '#877FCB',
      tertiary: '#1A0544',
      fillGradient: {
        default: 'purpleDefaultGradient',
        expanded: 'purpleExpandedGradient'
      },
      strokeGradient: {
        default: 'purpleDefaultStrokeGradient',
        expanded: 'purpleExpandedStrokeGradient'
      }
    },
    'frost-tech-quakeshift': {
      primary: '#6BE688',
      secondary: '#A1FCCF',
      tertiary: '#002814',
      fillGradient: {
        default: 'defaultGradient',
        expanded: 'expandedGradient'
      },
      strokeGradient: {
        default: 'defaultStrokeGradient',
        expanded: 'expandedStrokeGradient'
      }
    },
    'frost-tech-thermoflux': {
      primary: '#D97848',
      secondary: '#FDFDCE',
      tertiary: '#3C3312',
      fillGradient: {
        default: 'yellowDefaultGradient',
        expanded: 'yellowExpandedGradient'
      },
      strokeGradient: {
        default: 'yellowDefaultStrokeGradient',
        expanded: 'yellowExpandedStrokeGradient'
      }
    },
    'frost-tech-flexiweave': {
      primary: '#580DEB',
      secondary: '#877FCB',
      tertiary: '#1A0544',
      fillGradient: {
        default: 'purpleDefaultGradient',
        expanded: 'purpleExpandedGradient'
      },
      strokeGradient: {
        default: 'purpleDefaultStrokeGradient',
        expanded: 'purpleExpandedStrokeGradient'
      }
    }
  };

  window.colorThemes = colorThemes;

  function updateNavbarColors(category) {
    const theme = colorThemes[category] || colorThemes.default;
    const { primary, secondary, tertiary } = theme;

    // Update navbar elements
    document.querySelectorAll('.global-navbar_diamond').forEach(el => {
      el.style.backgroundColor = tertiary;
      el.style.boxShadow = `0 0 10px 0 ${primary}`;
    });
    document.querySelectorAll('.global-navbar_text-container h4').forEach(el => el.style.color = secondary);
    document.querySelectorAll('.navbar-back_arrow-icon path').forEach(el => el.style.stroke = primary);
    document.querySelectorAll('.navbar-back_big-circle path').forEach(el => el.style.stroke = secondary);
    document.querySelectorAll('.navbar-back_small-circle path').forEach(el => el.style.stroke = secondary);
    document.querySelectorAll('.global-navbar_close-icon path').forEach(el => el.style.fill = secondary);

    // Update fill and stroke gradients
    animateFillSvg(true); // or false based on the desired state
    animateStrokeSvg(true); // or false based on the desired state
  }

  function animateFillSvg(forward = true) {
    const category = getCurrentCategory();
    const fillGradientId = colorThemes[category]?.fillGradient[forward ? 'expanded' : 'default'];
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
          fill: `url(#${fillGradientId})`,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      );

    return fillTimeline;
  }

  function animateStrokeSvg(forward = true) {
    const category = getCurrentCategory();
    const strokeGradientId = colorThemes[category]?.strokeGradient[forward ? 'expanded' : 'default'];
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
      )
      .to(
        strokeGElement,
        {
          fill: `url(#${strokeGradientId})`,
          duration: 1,
          ease: 'power4.inOut',
        },
        0
      );

    return strokeTimeline;
  }

  // Get current category from the URL or UI interactions
  function getCurrentCategory() {
    const path = window.location.pathname;
    if (path.includes('collection')) {
      if (path.includes('apex-collection')) return 'apex-collection';
      if (path.includes('ember-collection')) return 'ember-collection';
      if (path.includes('nebula-collection')) return 'nebula-collection';
    } else if (path.includes('frost-tech')) {
      // Default to quakeshift; you can change this logic if needed.
      return 'frost-tech-quakeshift';
    }
    return 'default';
  }

  function addFrostTechListeners() {
    const techOptions = document.querySelectorAll('.tech_description-header-wrap');
    techOptions.forEach(option => {
      option.addEventListener('click', function() {
        const newState = this.closest('.tech_description-container').classList[1].split('-')[1];
        updateNavbarColors(`frost-tech-${newState}`);
      });
    });
  }

  // Update colors on page load or user interaction
  function init() {
    // Call the function to update colors initially
    updateNavbarColors(getCurrentCategory());

    // Add listeners for Frost Tech interactions
    addFrostTechListeners();
  }

  init();

  window.animateFillSvg = animateFillSvg;
  window.animateStrokeSvg = animateStrokeSvg;
});
