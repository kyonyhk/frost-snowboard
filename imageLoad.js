const container = document.querySelector('.section.is-collections-main')
const itemsWrapper = document.querySelector('.grid')
  // Preload images
  const preloadImages = () => {
      return new Promise((resolve, reject) => {
          imagesLoaded(document.querySelectorAll('img'), resolve);
      });
  };
  // And then..
  preloadImages().then(() => {
      // Remove the loader
      document.body.classList.remove('loading');
      const effect = new RGBShiftEffect(container, itemsWrapper, { strength: 0.25 })
});
