const canvas = document.querySelector(".grid-canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const lineSpacing = 32;
  const lineLength = [4, 8]; // Dash pattern: 5 pixels filled, 10 pixels empty
  const numberOfHLines = canvas.height / lineSpacing;
  const numberOfVLines = canvas.width / lineSpacing;
  const hLines = [];
  const vLines = [];

  // Initialize horizontal lines
  for (let i = 0; i < numberOfHLines; i++) {
    hLines.push({
      y: i * lineSpacing,
      x: -canvas.width,
      opacity: 0,
    });
  }

  // Initialize vertical lines
  for (let i = 0; i < numberOfVLines; i++) {
    vLines.push({
      x: i * lineSpacing,
      y: canvas.height,
      opacity: 0,
    });
  }

  // Function to draw all lines based on their current properties
  function drawLines() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = '#A1FCCF'
    hLines.forEach(line => {
      ctx.beginPath();
      ctx.setLineDash(lineLength);
      ctx.globalAlpha = line.opacity;
      ctx.moveTo(line.x, line.y);
      ctx.lineTo(line.x + canvas.width, line.y);
      ctx.stroke();
    });

    ctx.strokeStyle = '#A1FCCF'
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

  // Animate horizontal lines
  ScrollTrigger.create({
    trigger: canvas,
    start: "top 70%",
    end: "bottom bottom",
    scrub: true,
    onEnter: () => {
      hLines.forEach((line, index) => {
        gsap.fromTo(
          line,
          { x: -canvas.width, opacity: 0 },
          {
            x: 0,
            opacity: 0.2,
            duration: 1,
            delay: index * 0.02,
            onUpdate: drawLines,
            ease: "power4.out",
          }
        );
      });

      // Delay the animation of vertical lines
      gsap.delayedCall(0.2, () => {
        vLines.forEach((line, index) => {
          gsap.fromTo(
            line,
            { y: canvas.height, opacity: 0 },
            {
              y: -lineSpacing,
              opacity: 0.2,
              duration: 1,
              delay: index * 0.02,
              onUpdate: drawLines,
              ease: "power4.inOut",
            }
          );
        });
      });
    },
    once: true,
  });
