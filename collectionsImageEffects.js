document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM fully loaded and parsed");
    const mainImageContainer = document.querySelector('.cp_main-image-container');
    const marqueeImages = document.querySelectorAll('.cp_infinite-marquee-image-wrap img');
    const mainImage = mainImageContainer.querySelector('img');
    const canvas = document.getElementById('main-image-canvas');

    console.log("Main image source:", mainImage.src);

    mainImage.style.display = 'none';

    // Initialize Sketch with the main image as the first texture
    let sketch = new Sketch({
        debug: true,
        uniforms: {
            intensity: {value: 1, type: 'f', min: 0., max: 3}
        },
        fragment: `
            void main() {
                uniform float time;
                uniform float progress;
                uniform float intensity;
                uniform sampler2D texture1;
                uniform sampler2D texture2;
                uniform sampler2D displacement;
                uniform vec4 resolution;
                varying vec2 vUv;
    
                mat2 getRotM(float angle) {
                    float s = sin(angle);
                    float c = cos(angle);
                    return mat2(c, -s, s, c);
                }
    
                const float PI = 3.1415;
                const float angle1 = PI * 0.25;
                const float angle2 = -PI * 0.75;
    
                void main() {
                    vec2 newUV = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);
                    vec4 disp = texture2D(displacement, newUV);
                    vec2 dispVec = vec2(disp.r, disp.g);
    
                    vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;
                    vec4 t1 = texture2D(texture1, distortedPosition1);
    
                    vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);
                    vec4 t2 = texture2D(texture2, distortedPosition2);
    
                    gl_FragColor = mix(t1, t2, progress);
            }
        `
    });

    function setCanvasSize() {
        const rect = mainImageContainer.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
        sketch.renderer.setSize(rect.width, rect.height);
        sketch.camera.aspect = rect.width / rect.height;
        sketch.camera.updateProjectionMatrix();

        // Update resolution uniform based on new dimensions
        sketch.uniforms.resolution.value.x = rect.width;
        sketch.uniforms.resolution.value.y = rect.height;
        sketch.uniforms.resolution.value.z = 1 / rect.width;
        sketch.uniforms.resolution.value.w = 1 / rect.height;
        sketch.render(); // Ensure that the scene is re-rendered with new settings
    }

    setCanvasSize(); // Set initial size
    window.addEventListener('resize', setCanvasSize); // Update size on resize

    // Initialize and update the resolution at setup
    sketch.updateResolution();

    // Update resolution on resize
    window.addEventListener('resize', () => sketch.updateResolution());

    // Load initial texture
    sketch.loadTexture(mainImage.src, function(texture) {
        console.log ("Initial texture set");
        sketch.setTexture1(texture);
        sketch.setTexture2(texture);  // Set both textures to the main image initially
        sketch.render();
    });

    // Event listeners for marquee images
    marqueeImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            console.log("Mouse entered on image:", img.src);
            sketch.loadTexture(img.src, function(texture) {
                sketch.setTexture2(texture);
                sketch.startTransition();  // Method to start the transition, ensure you handle it in your Sketch class
            });
        });
        img.addEventListener('mouseleave', function() {
            console.log("Mouse left image, resetting to main iamge");
            sketch.loadTexture(mainImage.src, function(texture) {
                sketch.setTexture2(texture);
                sketch.startTransition();  // Transition back to the main image
            });
        });
    });
});
