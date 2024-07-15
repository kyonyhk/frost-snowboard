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
        this.renderer = new THREE.WebGLRenderer();
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
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
        this.scene.add(this.plane);
        this.render();
    }

    render() {
        console.log("Rendering scene");
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    loadTexture(url, callback) {
        console.log("Loading texture:", url);
        new THREE.TextureLoader().load(url, texture => {
            callback(texture);
        });
    }

    setTexture1(texture) {
        console.log("Setting texture1");
        this.uniforms.texture1.value = texture;
    }

    setTexture2(texture) {
        console.log("Setting texture2");
        this.uniforms.texture2.value = texture;
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
