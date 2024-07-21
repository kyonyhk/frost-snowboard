document.addEventListener('DOMContentLoaded', function () {
  barba.init({
    transitions: [
      {
        name: 'page-transition',
        enter(data) {
          // Ensure the class is added before the animation starts
          $(data.current.container).addClass('fixed');
          $(data.next.container).addClass('fixed');

          // Animate the current container opacity
          gsap.to(data.current.container, {
            opacity: 0,
            duration: 3,
            ease: 'power4.out',
          });

          // Return the promise of the animation of the next container
          return gsap.from(data.next.container, {
            opacity: 0,
            duration: 3,
            ease: 'power4.out',
            onComplete: () => {
              $(data.next.container).removeClass('fixed');
            },
          });
        },
      },
    ],
    views: [
      {
        namespace: 'collections-cms',
        afterEnter() {
          console.log('ANIMATION!!!');
        },
      },
      {
        namespace: 'frost-tech-page',
        afterEnter() {
          console.log('ANIMATION!!!');
        },
      },
    ],
  });
});
