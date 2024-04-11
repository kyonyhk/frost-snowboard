document.addEventListener('DOMContentLoaded', function() {
  var preloader = document.querySelector('.s-s3.is-loading'); 
  var load = 0;
  var interval = setInterval(function() {
    load++;
    if (preloader) {
      preloader.textContent = load + '%'; 
    }
    if (load >= 100) {
      clearInterval(interval);
      setTimeout(function() {
        preloader.style.opacity = '0';
        preloader.style.transition = 'opacity 1s ease-out';
        preloader.style.transitionTimingFunction = 'cubic-bezier(0.19, 1, 0.22, 1)'; 
      }, 1000); // 
    }
  }, 20); 
});
