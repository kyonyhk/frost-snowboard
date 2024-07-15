class Sketch {
    constructor(opts) {
        this.scene = new THREE.Scene();
        this.vertex = `varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
        this.fragment = opts.fragment;
        this.uniforms = {
            time: { type: "f", value: 0 },
            progress: { type: "f", value: 0 },
            intensity: opts.uniforms.intensity,
            texture1: { type: "t", value: null },
            texture2: { type: "t", value: null },
            displacement: { type: "t", value: new THREE.TextureLoader().load('path/to/displacement.jpg') },
            resolution: { type: "v4", value: new THREE.Vector4() }
        };
        this.renderer = new THREE.WebGLRenderer();
        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.001, 1000);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.initObjects();
    }

    initObjects() {
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
        requestAnimationFrame(this.render.bind(this));
        this.renderer.render(this.scene, this.camera);
    }

    loadTexture(url, callback) {
        new THREE.TextureLoader().load(url, texture => {
            callback(texture);
        });
    }

    setTexture1(texture) {
        this.uniforms.texture1.value = texture;
    }

    setTexture2(texture) {
        this.uniforms.texture2.value = texture;
    }

    startTransition() {
        this.uniforms.progress.value = 0;
        this.animate();
    }

    animate() {
        this.uniforms.progress.value += 0.01; // Adjust speed as needed
        if (this.uniforms.progress.value >= 1) {
            this.uniforms.progress.value = 1;
        }
        requestAnimationFrame(this.animate.bind(this));
    }
}
