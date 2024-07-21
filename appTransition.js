document.addEventListener('DOMContentLoaded', function() {
  // Apply the fade-in effect when the page loads
  const app = document.querySelector('.app');
  app.classList.add('fade-in');

  // Function to handle the fade-out effect
  function handleFadeOut(event) {
    event.preventDefault(); // Prevent the default link behavior

    const link = event.currentTarget;
    const href = link.getAttribute('href');

    app.classList.remove('fade-in');
    app.classList.add('fade-out');

    // Wait for the fade-out transition to complete before navigating
    setTimeout(() => {
      window.location.href = href;
    }, 1000); // Match this duration with your CSS transition duration
  }

  // Attach event listeners to all internal links
  const internalLinks = document.querySelectorAll('a[href^="/"]');
  internalLinks.forEach(link => {
    link.addEventListener('click', handleFadeOut);
  });

  // Ensure the page starts with the fade-in effect
  window.addEventListener('pageshow', () => {
    app.classList.add('fade-in');
  });
});
