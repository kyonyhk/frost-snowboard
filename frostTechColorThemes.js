document.addEventListener('DOMContentLoaded', function() {
  const colorThemes = {
    quakeshift: {
      navbarTheme: 'default',
      primary: '#6BE688',
      secondary: '#A1FCCF',
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
      navbarTheme: 'yellow',
      primary: '#D97848',
      secondary: '#FDFDCE',
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
      navbarTheme: 'purple',
      primary: '#580DEB',
      secondary: '#877FCB',
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

  let currentCategory = 'quakeshift'; // Default category

  function updateFrostTechColors(newCategory) {
    const theme = colorThemes[newCategory];

    // Frost tech constants
    const headers = document.querySelectorAll('.h-h5.is-tech');
    const borders = document.querySelectorAll('.tech_border-div');
    const counterNumbers = document.querySelectorAll('.h-h3.is-tech-counter');
    const descriptionNumbers = document.querySelectorAll('.s-s4.is-tech');
    const descriptionHeaders = document.querySelectorAll('.h-h6.is-tech');
    const descriptionParagraphs = document.querySelectorAll('.paragraph.p-p2.is-tech');
    const terminalIcons = document.querySelectorAll('.terminal-icon');
    const terminalParagraphs = document.querySelectorAll('.paragraph.is-terminal.is-tech');

    // Update secondary color elements
    headers.forEach(el => el.style.color = theme.secondary);
    borders.forEach(el => el.style.borderColor = theme.secondary);
    counterNumbers.forEach(el => el.style.color = theme.secondary);
    descriptionNumbers.forEach(el => el.style.color = theme.secondary);
    descriptionHeaders.forEach(el => el.style.color = theme.secondary);
    descriptionParagraphs.forEach(el => el.style.color = `${theme.secondary}80`); // 50% opacity

    // Update primary color elements
    terminalIcons.forEach(el => el.style.backgroundColor = theme.primary);
    terminalParagraphs.forEach(el => el.style.color = `${theme.primary}80`); // 50% opacity
    
    // Update text color
    document.querySelectorAll('.s-s5.is-navbar').forEach(el => {
      el.style.color = theme.textColor;
    });

    // Update diamond color
    const diamondElement = document.querySelector('.global-navbar_diamond');
    if (diamondElement) {
      diamondElement.style.backgroundColor = theme.diamondColor;
      diamondElement.style.borderColor = theme.diamondStroke;
    }
    
    // Update stroke gradient
    const strokePath = document.querySelector('#defaultStrokePath');
    if (strokePath) {
      strokePath.style.stroke = `url(#${theme.strokeGradient})`;
    }
  
    // Update fill gradient
    const fillPath = document.querySelector('#defaultFillPath');
    if (fillPath) {
      fillPath.style.fill = `url(#${theme.fillGradient})`;
    }
  
    // Update arrow icon color
    const arrowIcon = document.querySelector('.navbar-back_arrow-icon path');
    if (arrowIcon) {
      arrowIcon.style.stroke = theme.arrowColor;
    }

    // Update close button color
    const closeIconPath = document.querySelector('.global-navbar_close-icon path');
    if (closeIconPath) {
      closeIconPath.style.fill = theme.closeIcon;
    }
  
    // Update circle colors
    const bigCirclePaths = document.querySelectorAll('.navbar-back_big-circle path');
    const smallCirclePaths = document.querySelectorAll('.navbar-back_small-circle path');
    const backgroundCircle = document.querySelector('.navbar-back_bg');
    
    bigCirclePaths.forEach(path => {
      path.style.stroke = theme.circleStroke;
    });
  
    smallCirclePaths.forEach(path => {
      path.style.stroke = theme.circleStroke;
    });
  
    if (backgroundCircle) {
      backgroundCircle.style.backgroundColor = theme.circleColor;
    }

    currentCategory = newCategory;
  }

  // Example usage:
  function setupFrostTechEventListeners() {
    const techOptions = document.querySelectorAll('.tech_description-header-wrap');
    techOptions.forEach(option => {
      option.addEventListener('click', function() {
        const newState = this.closest('.tech_description-container').classList[1].split('-')[1];
        updateFrostTechColors(newState);
      });
    });
  }

  // Initialize with the default state
  // updateColors('quakeshift');
});

