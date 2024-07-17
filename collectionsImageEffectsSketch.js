class Sketch {
    constructor(opts) {
        console.log("Sketch constructor started");
        this.scene = new THREE.Scene();
        this.vertex = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
        this.fragment = opts.fragment;
        this.uniforms = {
            time: { type: "f", value: 0 },
            progress: { type: "f", value: 0 },
            intensity: opts.uniforms.intensity,
            texture1: { type: "t", value: null },
            texture2: { type: "t", value: null },
            displacement: { type: "t", value: new THREE.TextureLoader().load('https://uploads-ssl.webflow.com/65de4d4aa58a7df7f5ea205b/6694cc523ddbd2f97e5e4386_disp1.webp') },
            resolution: { type: "v4", value: new THREE.Vector4() }
        };
        this.renderer = new THREE.WebGLRenderer({ alpha: true }); // ensure renderer has a transparent background
        this.renderer.setClearColor(0x000000, 0); // clear color set to black but fully transparent
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000);
        this.camera.position.set(0, 0, 5);
        this.camera.lookAt(new THREE.Vector3(0, 0, 0)); // Ensure the camera is looking at the origin
        this.renderer.setSize(window.innerWidth, window.innerHeight);

        // Set styles to ensure the canvas is visible
        this.renderer.domElement.style.position = 'absolute';
        this.renderer.domElement.style.left = '0';
        this.renderer.domElement.style.top = '0';
        this.renderer.domElement.style.width = '100%';
        this.renderer.domElement.style.height = '100%';
        this.renderer.domElement.style.zIndex = '1000'; // high z-index to ensure it's on top
        
        document.body.appendChild(this.renderer.domElement);

        this.initObjects();
        console.log("Sketch constructor completed");
    }

    initObjects() {
        console.log("Initializing objects in scene");
        this.material = new THREE.ShaderMaterial({
            vertexShader: this.vertex,
            fragmentShader: this.fragment,
            uniforms: this.uniforms
        });
        this.geometry = new THREE.PlaneGeometry(2, 2);
        this.plane = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.plane); // Center the plane
        
        this.render();
    }

    render() {
        console.log('Rendering scene');
        if (this.uniforms.texture1.value && this.uniforms.texture2.value) {
            this.renderer.clear();
            this.renderer.setClearColor(0x000000, 0); // Set to red for visibility during debugging
            this.renderer.render(this.scene, this.camera);
        } else {
            console.log('Rendering skipped due to missing textures');
        }
    }

    loadTexture(url, callback) {
        console.log("Loading texture:", url);
        new THREE.TextureLoader().load(url, texture => {
            if (texture) {
                console.log("Texture loaded successfully:", url);
                callback(texture);
            } else {
                console.log("Failed to load texture:", url);
            }
        });
    }

    setTexture1(texture) {
        if (!texture) {
            console.error('Texture1 is null');
            return;
        }
        this.uniforms.texture1.value = texture;
        console.log('Texture1 set successfully');
        this.checkTexturesAndRender();
    }
    
    setTexture2(texture) {
        if (!texture) {
            console.error('Texture2 is null');
            return;
        }
        this.uniforms.texture2.value = texture;
        console.log('Texture2 set successfully');
        this.checkTexturesAndRender();
    }
    
    checkTexturesAndRender() {
        if (this.uniforms.texture1.value && this.uniforms.texture2.value) {
            console.log('Both textures set, attempting to render');
            this.render();
        }
    }

    startTransition() {
        console.log("Starting transition");
        this.uniforms.progress.value = 0;
        this.isAnimating = true;
        this.animate();
    }

    animate() {
        if (this.isAnimating) {
            this.uniforms.progress.value += 0.01; // Adjust speed as needed

            if (this.uniforms.progress.value >= 1) {
                this.uniforms.progress.value = 1;
                this.isAnimating = false; // Stop the animation
            }

            requestAnimationFrame(this.animate.bind(this));
            this.render(); // Ensure rendering is called within the animation loop
        }
    }
}
