const text = document.querySelector(".h-h2.is-intro");
const span = document.querySelector(".h-h2.is-intro.is-span");
const splineElement = document.querySelector(".three-d-element.is-intro");
const collectionsSection = document.querySelector(".section.is-collections-main");
const blurOverlay = document.querySelector(".section.is-blur-overlay");

console.log(text)
console.log(splineElement)

const splitType = new SplitType(text);
const splitTypeSpan = new SplitType(span);

console.log(splitType.words)

document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(ScrollTrigger)
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: text,
      start: "top 80%",
      end: "bottom 80%",
      toggleActions: "play pause resume reverse",
      scrub: true,
      markers: true,
    },
  });

  const tlSpline = gsap.timeline({
    scrollTrigger: {
      trigger: splineElement,
      start: "top 40%",
      end: "bottom bottom",
      toggleActions: "play pause resume reverse",
      scrub: true,
      markers: {startColor: "white", endColor: "white"},
    },
  });

  const tlCollectionsBlur = gsap.timeline({
    scrollTrigger: {
      trigger: collectionsSection,
      start: "top bottom",
      end: "bottom 80%",
      toggleActions: "play pause resume reverse",
      scrub: true,
      markers: {startColor: "orange", endColor: "orange"},
    }
  })

  const tlCollections = gsap.timeline({
    scrollTrigger: {
      trigger: collectionsSection,
      start: "top 40%",
      end: "bottom bottom",
      toggleActions: "play pause resume reverse",
      scrub: true,
      markers: {startColor: "orange", endColor: "orange"},
    }
  })

  tl.from(splitType.words, {
    duration: 1.5,
    x: -20,
    opacity: 0,
    stagger: 0.2,
    ease: "power4.inOut",
  });
  
  tl.to(splitTypeSpan.words, {
    duration: 1,
    color: "#A1FCCF",
    stagger: 0.05,
    ease: "power4.inOut",
  });

  tlSpline.from(splineElement, {
    duration: 1,
    yPercent: -10,
    opacity: 0,
    ease: "power1.out",
  }, "<")

  tlCollectionBlur.to(blurOverlay, {
    opacity: 100,
    ease: "power4.out",
  })
 });
