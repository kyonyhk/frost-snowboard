let scene, camera, renderer;
let currentMesh;
let hoverTransitionMaterial, clickTransitionMaterial;
let isTransitioning = false;
let transitionProgress = 0;
let currentTexture, nextTexture;

function initThreeJS() {
    const container = document.querySelector('.cp_main-image-container');
    const originalImg = container.querySelector('img');
    const originalMainImageSrc = originalImg.src
    
    scene = new THREE.Scene();
    camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    renderer = new THREE.WebGLRenderer({ alpha: true, canvas: document.getElementById('main-image-canvas') });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Create hover transition material (Wave effect)
    hoverTransitionMaterial = new THREE.ShaderMaterial({
        uniforms: {
            texture1: { value: null },
            texture2: { value: null },
            disp: { value: new THREE.TextureLoader().load('path/to/displacement-image.jpg') },
            intensity: { value: 0.15 },
            progress: { value: 0 },
            time: { value: 0 }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D texture1;
            uniform sampler2D texture2;
            uniform sampler2D disp;
            uniform float intensity;
            uniform float progress;
            uniform float time;
            varying vec2 vUv;

            void main() {
                vec2 distortedPosition = vec2(vUv.x + progress * (sin(vUv.y * 10.0 + time) * 0.1), vUv.y);
                vec4 displacement = texture2D(disp, distortedPosition);
                vec2 uvFrom = vUv + vec2(progress * intensity * displacement.r, 0.0);
                vec2 uvTo = vUv - vec2((1.0 - progress) * intensity * displacement.r, 0.0);
                vec4 colorFrom = texture2D(texture1, uvFrom);
                vec4 colorTo = texture2D(texture2, uvTo);

                gl_FragColor = mix(colorFrom, colorTo, progress);
            }
        `
    });

    // Create click transition material (Perlin effect)
    clickTransitionMaterial = new THREE.ShaderMaterial({
        uniforms: {
            texture1: { value: null },
            texture2: { value: null },
            progress: { value: 0 },
            time: { value: 0 }
        },
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            uniform sampler2D texture1;
            uniform sampler2D texture2;
            uniform float progress;
            uniform float time;
            varying vec2 vUv;

            // Simplex 2D noise
            vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

            float snoise(vec2 v){
                const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                        -0.577350269189626, 0.024390243902439);
                vec2 i  = floor(v + dot(v, C.yy) );
                vec2 x0 = v -   i + dot(i, C.xx);
                vec2 i1;
                i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
                vec4 x12 = x0.xyxy + C.xxzz;
                x12.xy -= i1;
                i = mod(i, 289.0);
                vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
                + i.x + vec3(0.0, i1.x, 1.0 ));
                vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
                    dot(x12.zw,x12.zw)), 0.0);
                m = m*m ;
                m = m*m ;
                vec3 x = 2.0 * fract(p * C.www) - 1.0;
                vec3 h = abs(x) - 0.5;
                vec3 ox = floor(x + 0.5);
                vec3 a0 = x - ox;
                m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
                vec3 g;
                g.x  = a0.x  * x0.x  + h.x  * x0.y;
                g.yz = a0.yz * x12.xz + h.yz * x12.yw;
                return 130.0 * dot(m, g);
            }

            void main() {
                vec2 newUV = vUv;
                float noise = snoise(vec2(newUV.x * 10.0 + time * 0.5, newUV.y * 10.0 - time * 0.5));
                newUV.x += noise * 0.02 * progress;
                newUV.y += noise * 0.02 * progress;

                vec4 color1 = texture2D(texture1, newUV);
                vec4 color2 = texture2D(texture2, newUV);
                gl_FragColor = mix(color1, color2, progress);
            }
        `
    });

    // Create a plane for rendering the images
    const geometry = new THREE.PlaneGeometry(2, 2);
    currentMesh = new THREE.Mesh(geometry, hoverTransitionMaterial);
    scene.add(currentMesh);

    loadTexture(originalMainImageSrc, (texture) => {
        currentTexture = texture;
        hoverTransitionMaterial.uniforms.texture1.value = texture;
        hoverTransitionMaterial.uniforms.texture2.value = texture;
        clickTransitionMaterial.uniforms.texture1.value = texture;
        clickTransitionMaterial.uniforms.texture2.value = texture;
        render();
    });

    // Hide the original image
    originalImg.style.display = 'none';

    // Set up event listeners for marquee images
    setupMarqueeImageListeners();

    //Handle window resize
    window.addEventListener('resize', onWindowResize);
}

function setupMarqueeImageListeners() {
    const marqueeImages = document.querySelectorAll('.cp_infinite-marquee-image-wrap img');
    marqueeImages.forEach(img => {
        img.addEventListener('mouseenter', () => startTransition(img.src, true));
        img.addEventListener('mouseleave', () => startTransition(currentTexture.image.src, true));
        img.addEventListener('click', () => startTransition(img.src, false));
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
        currentMesh.material = isHover ? hoverTransitionMaterial : clickTransitionMaterial;
        currentMesh.material.uniforms.texture1.value = currentTexture;
        currentMesh.material.uniforms.texture2.value = nextTexture;
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
            currentMesh.material.uniforms.texture1.value = currentTexture;
            currentMesh.material.uniforms.texture2.value = currentTexture;
        }
        currentMesh.material.uniforms.progress.value = transitionProgress;
        currentMesh.material.uniforms.time.value += 0.01;
    }

    render();
}

function render() {
    renderer.render(scene, camera);
}

// Initialize everything when the DOM is ready
document.addEventListener('DOMContentLoaded', initThreeJS);
