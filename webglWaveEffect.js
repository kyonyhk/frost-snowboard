gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  scene.background = new THREE.Color(0x060e08);

  const canvas = document.querySelector('.hero_webgl-element');
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
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

  const maxTilt = 30; // Define the maxTilt value

  if (typeof DeviceOrientationEvent.requestPermission === 'function') {
    DeviceOrientationEvent.requestPermission().then(permissionState => {
      if (permissionState === 'granted') {
        window.addEventListener('deviceorientation', (event) => {
          if (event.gamma !== null && event.beta !== null) {
            console.log('Device Orientation Event:', event);
            mouse.x = event.gamma / maxTilt;
            mouse.y = -(event.beta / maxTilt);
          }
        });
      }
    }).catch(console.error);
  } else {
    // Handle regular non-iOS 13+ devices
    window.addEventListener('deviceorientation', (event) => {
      if (event.gamma !== null && event.beta !== null) {
        console.log('Device Orientation Event:', event);
        mouse.x = event.gamma / maxTilt;
        mouse.y = -(event.beta / maxTilt);
      }
    });
  }


  var animationId = animate();

  function animate() {
    animationId = requestAnimationFrame(animate);
    updateParticles(particleSystem, raycaster, mouse, camera); // Handles particle updating
    renderer.render(scene, camera);
  }

  // ScrollTrigger for controlling the animation based on scroll position
  ScrollTrigger.create({
    trigger: '.section.is-collections-main',
    start: 'bottom bottom',
    end: 'bottom 80%',
    onLeave: () => {
      if (animationId) {
        cancelAnimationFrame(animationId); // Stop the animation loop
        animationId = null;
      }
      canvas.style.display = 'none'; // Hide the canvas
    },
    onEnterBack: () => {
      canvas.style.display = 'block'; // Show the canvas
      if (!animationId) animationId = animate(); // Restart the animation if coming back
    },
  });
});

function createCircleTexture(radius, color) {
  const size = radius * 2;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const context = canvas.getContext('2d');
  context.beginPath();
  context.arc(radius, radius, radius, 0, 2 * Math.PI, false);
  context.fillStyle = color;
  context.fill();
  const texture = new THREE.Texture(canvas);
  texture.needsUpdate = true;
  return texture;
}

function setupParticleSystem(scene, texture) {
  const particlesX = 300;
  const particlesY = 300;
  const particles = new THREE.BufferGeometry();
  const positions = new Float32Array(particlesX * particlesY * 3);
  const scales = new Float32Array(particlesX * particlesY);
  const opacities = new Float32Array(particlesX * particlesY);

  for (let i = 0; i < particlesX; i++) {
    for (let j = 0; j < particlesY; j++) {
      let index = i * particlesY + j;
      const x = (i - particlesX / 2) * 2;
      const y = (j - particlesY / 2) * 2;
      positions[index * 3 + 0] = x;
      positions[index * 3 + 1] = y;
      positions[index * 3 + 2] = 0; // Initial Z position
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

  for (let i = 0; i < positions.length / 3; i++) {
    const i3 = i * 3;
    const x = positions[i3];
    const y = positions[i3 + 1];

    // Wave parameters for X axis
    const waveAmplitudeX = 10;
    const frequencyX = 0.07;
    const phaseX = time * 0.1 + x * frequencyX;

    // Wave parameters for Y axis
    const waveAmplitudeY = 30;
    const frequencyY = 0.01;
    const phaseY = time * 0.1 + y * frequencyY;

    // Additional wave parameters for Z axis
    const waveAmplitudeZ = 7;
    const frequencyZ = 0.01;
    const phaseZ = time * 0.5 + x * frequencyZ;

    // Combine waves on X, Y, and Z axis
    positions[i3 + 2] =
      waveAmplitudeX * Math.sin(phaseX) +
      waveAmplitudeY * Math.sin(phaseY) +
      waveAmplitudeZ * Math.cos(phaseZ);

    let scale = 1;
    let opacity = 0.5;
    if (intersects.length > 0) {
      const distance = Math.sqrt(
        (x - intersects[0].point.x) ** 2 + (y - intersects[0].point.y) ** 2
      );
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
