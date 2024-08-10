// Constants
const PARTICLES_X = 300;
const PARTICLES_Y = 300;
const TOTAL_PARTICLES = PARTICLES_X * PARTICLES_Y;
const TWO_PI = 2 * Math.PI;

gsap.registerPlugin(ScrollTrigger);

// Global variables for easy cleanup and reinitialization
let scene, camera, renderer, particleSystem, animationId, mouse, raycaster;

function initializeParticleSystem() {
  if (typeof THREE === 'undefined') {
    console.error('THREE.js is not loaded. Please ensure it is included before this script.');
    return;
  }

  // Clean up existing animation if it's running
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }

  // Clean up existing THREE.js objects
  if (scene) {
    scene.clear();
    renderer.dispose();
  }
  
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  scene.background = new THREE.Color(0x060e08);

  const canvas = document.querySelector('.hero_webgl-element');
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }
  
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  const circleTexture = createCircleTexture(128, '#6BE688');
  const particleSystem = setupParticleSystem(scene, circleTexture);
  camera.position.z = 120;

  const mouse = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();

  document.addEventListener('mousemove', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  });

  animate(); // Start the animation

  setupScrollTrigger(canvas, stopAnimation, startAnimation);
}

function animate() {
  animationId = requestAnimationFrame(animate);
  updateParticles(particleSystem, raycaster, mouse, camera);
  renderer.render(scene, camera);
}

function stopAnimation() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
}

function startAnimation() {
  if (!animationId) {
    animate();
  }
}

function createCircleTexture(radius, color) {
  const size = radius * 2;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = size;
  const context = canvas.getContext('2d');
  context.beginPath();
  context.arc(radius, radius, radius, 0, TWO_PI, false);
  context.fillStyle = color;
  context.fill();
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function setupParticleSystem(scene, texture) {
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(TOTAL_PARTICLES * 3);
  const scales = new Float32Array(TOTAL_PARTICLES);
  const opacities = new Float32Array(TOTAL_PARTICLES);

  for (let i = 0; i < PARTICLES_X; i++) {
    for (let j = 0; j < PARTICLES_Y; j++) {
      const index = i * PARTICLES_Y + j;
      const x = (i - PARTICLES_X / 2) * 2;
      const y = (j - PARTICLES_Y / 2) * 2;
      positions[index * 3] = x;
      positions[index * 3 + 1] = y;
      positions[index * 3 + 2] = 0;
      scales[index] = 1;
      opacities[index] = 0.5;
    }
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particles.setAttribute('scale', new THREE.BufferAttribute(scales, 1));
  particles.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

  const material = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xffffff) },
      pointTexture: { value: texture },
    },
    vertexShader: vertexShader(),
    fragmentShader: fragmentShader(),
    depthTest: false,
    transparent: true,
  });

  const particleSystem = new THREE.Points(particles, material);
  scene.add(particleSystem);
  return particleSystem;
}

function updateParticles(particleSystem, raycaster, mouse, camera) {
  const positions = particleSystem.geometry.attributes.position.array;
  const scales = particleSystem.geometry.attributes.scale.array;
  const opacities = particleSystem.geometry.attributes.opacity.array;

  raycaster.setFromCamera(mouse, camera);
  const intersects = raycaster.intersectObject(particleSystem);
  const time = Date.now() * 0.005;

  for (let i = 0; i < TOTAL_PARTICLES; i++) {
    const i3 = i * 3;
    const x = positions[i3];
    const y = positions[i3 + 1];

    positions[i3 + 2] = 
      10 * Math.sin(time * 0.1 + x * 0.07) +
      30 * Math.sin(time * 0.1 + y * 0.01) +
      7 * Math.cos(time * 0.5 + x * 0.01);

    let scale = 1;
    let opacity = 0.5;

    if (intersects.length > 0) {
      const distance = Math.hypot(x - intersects[0].point.x, y - intersects[0].point.y);
      if (distance < 10) {
        scale = 1 + ((10 - distance) / 10) * 1.5;
        opacity = 1.0 - (distance / 10) * 0.5;
      }
    }
    
    scales[i] = scale;
    opacities[i] = opacity;
  }

  particleSystem.geometry.attributes.position.needsUpdate = true;
  particleSystem.geometry.attributes.scale.needsUpdate = true;
  particleSystem.geometry.attributes.opacity.needsUpdate = true;
}

function setupScrollTrigger(canvas, stopAnimation, startAnimation) {
  ScrollTrigger.create({
    trigger: '.section.is-collections-main',
    start: 'bottom bottom',
    end: 'bottom 80%',
    onLeave: () => {
      stopAnimation();
      canvas.style.display = 'none';
    },
    onEnterBack: () => {
      canvas.style.display = 'block';
      startAnimation();
    },
  });
}

function vertexShader() {
  return `
    attribute float scale;
    attribute float opacity;
    varying vec2 vUv;
    varying float vOpacity;
    void main() {
      vUv = uv;
      vOpacity = opacity;
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      gl_PointSize = scale * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;
}

function fragmentShader() {
  return `
    uniform vec3 color;
    uniform sampler2D pointTexture;
    varying vec2 vUv;
    varying float vOpacity;
    void main() {
      gl_FragColor = vec4(color, vOpacity) * texture2D(pointTexture, gl_PointCoord);
    }
  `;
}

function setupParticleSystem() {
  if (document.readyState === 'complete') {
    reinitializeParticleSystem();
  } else {
    window.addEventListener('load', reinitializeParticleSystem);
  }
}

setupParticleSystem();

function reinitializeParticleSystem() {
  console.log('Reinitializing particle system');
  // Clean up existing resources
  if (scene) {
    scene.clear();
  }
  if (renderer) {
    renderer.dispose();
  }
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  
  // Reinitialize
  initializeParticleSystem();
}

// If you're not using a front-end framework, you can use the 'popstate' event
// to detect when the user navigates back to the homepage
window.addEventListener('popstate', (event) => {
  if (window.location.pathname === '/') {  // Adjust this condition based on your homepage URL
    reinitializeParticleSystem();
  }
});
