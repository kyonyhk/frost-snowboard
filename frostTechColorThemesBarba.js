function initializeFrostTechColorThemes() {
  console.log('Initializing Frost Tech Color Themes...');

  const colorThemes = {
    quakeshift: {
      primary: '#6BE688',
      secondary: '#A1FCCF'
    },
    thermoflux: {
      primary: '#D97848',
      secondary: '#FDFDCE'
    },
    flexiweave: {
      primary: '#580DEB',
      secondary: '#877FCB'
    }
  };
  console.log('Found themes:', colorThemes);

  let currentCategory = 'quakeshift'; // Default category

  function updateColors(newCategory) {
    const theme = colorThemes[newCategory];

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

    currentCategory = newCategory;
  }

  function setupEventListeners() {
    const techOptions = document.querySelectorAll('.tech_description-header-wrap');
    techOptions.forEach(option => {
      option.addEventListener('click', function() {
        const newState = this.closest('.tech_description-container').classList[1].split('-')[1];
        updateColors(newState);
      });
    });
  }

  // Initialize with the default state
  updateColors('quakeshift');
  setupEventListeners();

  console.log('Frost Tech color themes initialized');
}

// Cleanup function
function cleanupFrostTechColorThemes() {
  // Remove event listeners
  const techOptions = document.querySelectorAll('.tech_description-header-wrap');
  techOptions.forEach(option => {
    option.removeEventListener('click', null);
  });
}

// Ensure the functions are globally accessible
window.initializeFrostTechColorThemes = initializeFrostTechColorThemes;
window.cleanupFrostTechColorThemes = cleanupFrostTechColorThemes;
