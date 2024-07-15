document.addEventListener('DOMContentLoaded', function() {
    const mainImageContainer = document.querySelector('.cp_main-image-container');
    const marqueeImages = document.querySelectorAll('.cp_infinite-marquee-image-wrap img');
    const mainImage = mainImageContainer.querySelector('img');
    const canvas = document.getElementById('main-image-canvas');

    // Initialize Sketch with the main image as the first texture
    let sketch = new Sketch({
        debug: true,
        uniforms: {
            intensity: {value: 1, type: 'f', min: 0., max: 3}
        },
        fragment: `
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

    // Load initial texture
    sketch.loadTexture(mainImage.src, function(texture) {
        sketch.setTexture1(texture);
        sketch.setTexture2(texture);  // Set both textures to the main image initially
    });

    // Event listeners for marquee images
    marqueeImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            sketch.loadTexture(img.src, function(texture) {
                sketch.setTexture2(texture);
                sketch.startTransition();  // Method to start the transition, ensure you handle it in your Sketch class
            });
        });
        img.addEventListener('mouseleave', function() {
            sketch.loadTexture(mainImage.src, function(texture) {
                sketch.setTexture2(texture);
                sketch.startTransition();  // Transition back to the main image
            });
        });
    });
});
