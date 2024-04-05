(function() {
  const canvas = document.querySelector(".grid-canvas");
  if (!canvas) {
    console.error("Canvas element not found");
    return;
  }
  
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const lineSpacing = 32;
  const lineLength = [4, 8];
  const numberOfHLines = canvas.height / lineSpacing;
  const numberOfVLines = canvas.width / lineSpacing;
  const hLines = [];
  const vLines = [];

  for (let i = 0; i < numberOfHLines; i++) {
    hLines.push({
      y: i * lineSpacing,
      x: -canvas.width,
      opacity: 0,
    });
  }

  for (let i = 0; i < numberOfVLines; i++) {
    vLines.push({
      x: i * lineSpacing,
      y: canvas.height,
      opacity: 0,
    });
  }

  function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#A1FCCF';

    hLines.forEach(line => {
      ctx.beginPath();
      ctx.setLineDash(lineLength);
      ctx.globalAlpha = line.opacity;
      ctx.moveTo(line.x, line.y);
      ctx.lineTo(line.x + canvas.width, line.y);
      ctx.stroke();
    });

    vLines.forEach(line => {
      ctx.beginPath();
      ctx.setLineDash(lineLength);
      ctx.globalAlpha = line.opacity;
      ctx.moveTo(line.x, line.y + canvas.height);
      ctx.lineTo(line.x, line.y);
      ctx.stroke();
    });
    ctx.globalAlpha = 1;
  }

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.create({
    trigger: canvas,
    start: "top 70%",
    end: "bottom bottom",
    scrub: true,
    markers: true,
    onEnter: () => animateLines(),
    once: true,
  });

  function animateLines() {
    hLines.forEach((line, index) => {
      gsap.fromTo(line, { x: -canvas.width, opacity: 0 }, {
        x: 0,
        opacity: 0.5,
        duration: 1,
        delay: index * 0.02,
        onUpdate: drawLines,
        ease: "power4.out",
      });
    });

    gsap.delayedCall(0.2, () => {
      vLines.forEach((line, index) => {
        gsap.fromTo(line, { y: canvas.height, opacity: 0 }, {
          y: -lineSpacing,
          opacity: 0.5,
          duration: 1,
          delay: index * 0.02,
          onUpdate: drawLines,
          ease: "power4.inOut",
        });
      });
    });
  }

})();
