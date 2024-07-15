console.log('Script started');
console.log('THREE object:', typeof THREE !== 'undefined' ? 'defined' : 'undefined');

let scene, camera, renderer;
let currentMesh;
let transitionMaterial;
let isTransitioning = false;
let transitionProgress = 0;
let currentTexture, nextTexture;

function initThreeJS() {
    console.log('Initializing Three.js');
    if (typeof THREE === 'undefined') {
        console.error('Three.js is not loaded');
        return;
    }
    
    const container = document.querySelector('.cp_main-image-container');
    const originalImg = container.querySelector('img');
    const originalMainImageSrc = originalImg.src
    
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    renderer = new THREE.WebGLRenderer({ alpha: true, canvas: document.getElementById('main-image-canvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);

    transitionMaterial = new THREE.ShaderMaterial({
        uniforms: {
            texture1: { value: null },
            texture2: { value: null },
            disp: { value: new THREE.TextureLoader().load('https://your-displacement-image-url.jpg') },
            progress: { value: 0 },
            time: { value: 0 },
            intensity: { value: 0.3 },
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform float progress;
            uniform sampler2D texture1;
            uniform sampler2D texture2;
            uniform sampler2D disp;
            uniform float intensity;
            varying vec2 vUv;

            void main() {
                vec2 uv = vUv;
                vec4 disp = texture2D(disp, uv);
                vec2 distortedPosition1 = uv + (disp.rg * 2.0 - 1.0) * intensity * progress;
                vec2 distortedPosition2 = uv + (disp.rg * 2.0 - 1.0) * intensity * (1.0 - progress);
                vec4 _texture1 = texture2D(texture1, distortedPosition1);
                vec4 _texture2 = texture2D(texture2, distortedPosition2);
                gl_FragColor = mix(_texture1, _texture2, progress);
            }
        `
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    currentMesh = new THREE.Mesh(geometry, transitionMaterial);
    scene.add(currentMesh);

    loadTexture(originalMainImageSrc, (texture) => {
        currentTexture = texture;
        transitionMaterial.uniforms.texture1.value = texture;
        transitionMaterial.uniforms.texture2.value = texture;
        render();
    });

    originalImg.style.display = 'none';
    setupEventListeners();
    window.addEventListener('resize', onWindowResize);
}

function setupEventListeners() {
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const marqueeImages = document.querySelectorAll('.cp_infinite-marquee-image-wrap img');

    marqueeImages.forEach(img => {
        if (isTouchDevice) {
            img.addEventListener('click', () => startTransition(img.src, false));
        } else {
            img.addEventListener('mouseenter', () => startTransition(img.src, true));
            img.addEventListener('mouseleave', () => startTransition(currentTexture.image.src, true));
        }
    });
}

function onWindowResize() {
    const container = document.querySelector('.cp_main-image-container');
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
}

function loadTexture(url, callback) {
    new THREE.TextureLoader().load(url, callback);
}

function startTransition(newImageSrc, isHover) {
    if (isTransitioning) return;
    isTransitioning = true;
    transitionProgress = 0;

    loadTexture(newImageSrc, (texture) => {
        nextTexture = texture;
        transitionMaterial.uniforms.texture1.value = currentTexture;
        transitionMaterial.uniforms.texture2.value = nextTexture;
        animate(isHover);
    });
}

function animate(isHover) {
    requestAnimationFrame(() => animate(isHover));

    if (isTransitioning) {
        transitionProgress += isHover ? 0.02 : 0.01; // Adjust speed as needed
        if (transitionProgress >= 1) {
            isTransitioning = false;
            transitionProgress = 0;
            currentTexture = nextTexture;
            transitionMaterial.uniforms.texture1.value = currentTexture;
            transitionMaterial.uniforms.texture2.value = currentTexture;
        }
        transitionMaterial.uniforms.progress.value = transitionProgress;
    }

    render();
}

function render() {
    renderer.render(scene, camera);
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    if (typeof THREE !== 'undefined') {
        console.log('Three.js is available');
        initThreeJS();
    } else {
        console.error('Three.js is still not loaded');
    }
});

console.log('Script ended');
