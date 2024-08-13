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
  cleanupResources();
  
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  scene.background = new THREE.Color(0x060e08);

  const canvas = document.querySelector('.hero_webgl-element');
  if (!canvas) {
    console.error('Canvas element not found');
    return;
  }
  
  renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setSize(window.innerWidth, window.innerHeight);

  window.addEventListener('resize', onWindowResize);

  const circleTexture = createCircleTexture(128, '#6BE688');
  particleSystem = setupParticleSystem(scene, circleTexture);
  camera.position.z = 120;

  mouse = new THREE.Vector2();
  raycaster = new THREE.Raycaster();

  document.addEventListener('mousemove', onDocumentMouseMove);

  animate(); // Start the animation

  setupScrollTrigger(canvas, stopAnimation, startAnimation);
}

function cleanupResources() {
  if (animationId) {
    cancelAnimationFrame(animationId);
    animationId = null;
  }
  if (renderer) {
    renderer.dispose();
  }
  if (scene) {
    scene.clear();
  }
  window.removeEventListener('resize', onWindowResize);
  document.removeEventListener('mousemove', onDocumentMouseMove);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  particleSystem.material.uniforms.resolution.value.set(window.innerWidth, window.innerHeight);
}

function onDocumentMouseMove(event) {
  // Convert mouse position to normalized device coordinates (-1 to +1)
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
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
  const initialPositions = new Float32Array(TOTAL_PARTICLES * 3);

  for (let i = 0; i < TOTAL_PARTICLES; i++) {
    const x = ((i % PARTICLES_X) - PARTICLES_X / 2) * 2;
    const y = (Math.floor(i / PARTICLES_X) - PARTICLES_Y / 2) * 2;
    const i3 = i * 3;
    positions[i3] = x;
    positions[i3 + 1] = y;
    positions[i3 + 2] = 0;
    initialPositions[i3] = x;
    initialPositions[i3 + 1] = y;
    initialPositions[i3 + 2] = 0;
  }

  particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particles.setAttribute('initialPosition', new THREE.BufferAttribute(initialPositions, 3));

  const material = new THREE.ShaderMaterial({
    uniforms: {
      color: { value: new THREE.Color(0xffffff) },
      pointTexture: { value: texture },
      time: { value: 0 },
      mousePosition: { value: new THREE.Vector2() },
      resolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
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
  particleSystem.material.uniforms.time.value += 0.005;
  particleSystem.material.uniforms.mousePosition.value.copy(mouse);
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
    attribute vec3 initialPosition;
    uniform float time;
    uniform vec2 mousePosition;
    uniform vec2 resolution;
    varying float vOpacity;
    varying vec3 vColor;
    
    void main() {
      vec3 pos = initialPosition;
      
      // Wave animation
      float waveZ = 10.0 * sin(time * 0.5 + initialPosition.x * 0.07) +
                    30.0 * sin(time * 0.5 + initialPosition.y * 0.01) +
                    7.0 * cos(time * 2.5 + initialPosition.x * 0.01);
      
      // Convert mousePosition from NDC to same space as particles
      vec2 mousePos = mousePosition * resolution * 0.5;
      
      // Mouse interaction (in 2D, before applying wave)
      float distanceToMouse = distance(initialPosition.xy, mousePos);
      float interactionRadius = 20.0;
      float scale;
      if (distanceToMouse < interactionRadius) {
        scale = 1.0 + (1.0 - distanceToMouse / interactionRadius) * 1.5;
        vOpacity = 1.0 - (distanceToMouse / interactionRadius) * 0.5;
      } else {
        scale = 1.0;
        vOpacity = 0.5;
      }
      
      // Apply wave after calculating mouse interaction
      pos.z = waveZ;
      
      // Debug coloring
      float debugDistance = distance(initialPosition.xy, mousePos);
      vColor = debugDistance < 10.0 ? vec3(1.0, 0.0, 0.0) : vec3(1.0);
      
      vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
      gl_PointSize = scale * (300.0 / -mvPosition.z);
      gl_Position = projectionMatrix * mvPosition;
    }
  `;
}

function fragmentShader() {
  return `
    uniform vec3 color;
    uniform sampler2D pointTexture;
    varying float vOpacity;
    varying vec3 vColor;
    void main() {
      gl_FragColor = vec4(vColor, vOpacity) * texture2D(pointTexture, gl_PointCoord);
    }
  `;
}

// Initial setup
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeParticleSystem);
} else {
  initializeParticleSystem();
}

// If you're using a front-end framework or need to reinitialize
function reinitializeParticleSystem() {
  console.log('Reinitializing particle system');
  cleanupResources();
  initializeParticleSystem();
}

// If you're not using a front-end framework, you can use the 'popstate' event
// to detect when the user navigates back to the homepage
window.addEventListener('popstate', (event) => {
  if (window.location.pathname === '/') {  // Adjust this condition based on your homepage URL
    reinitializeParticleSystem();
  }
});
