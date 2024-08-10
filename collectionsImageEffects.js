class Sketch {
  constructor(opts) {
    this.scene = new THREE.Scene();
    this.vertex = `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
        }
      `;
    this.fragment = opts.fragment;
    this.uniforms = opts.uniforms;
    this.renderer = new THREE.WebGLRenderer();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.width, this.height);
    this.renderer.setClearColor(0xeeeeee, 1);
    this.duration = opts.duration || 1;
    this.debug = opts.debug || false;
    this.easing = opts.easing || 'easeInOut';

    this.clicker = document.getElementById('content');

    this.container = document.getElementById('main-image-canvas');
    this.images = JSON.parse(this.container.getAttribute('data-images'));
    this.marqueeImages = document.querySelectorAll(
      '.cp_infinite-marquee-container img'
    );

    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.container.appendChild(this.renderer.domElement);

    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.001,
      1000
    );

    this.camera.position.set(0, 0, 2);
    this.time = 0;
    this.current = 0;
    this.textures = [];

    this.paused = true;
    this.initiate(() => {
      this.setupResize();
      // this.settings();
      this.addObjects();
      this.resize();
      // this.clickEvent();
      this.play();
      this.setupInteractionEvents();
    });
  }

  initiate(cb) {
    let that = this;
    let imageSources = [...this.images]; // Start with main images

    // Add marquee images to the loading list
    this.marqueeImages.forEach(img => {
        imageSources.push(img.src);
    });

    let loadedCount = 0;
    this.textures = new Array(imageSources.length); // Predefine the array size

    // Function to check if all textures are loaded
    const checkAllLoaded = () => {
        if (loadedCount === imageSources.length) {
            cb(); // All textures loaded, execute callback
        }
    };

    if (imageSources.length > 0) {
        imageSources.forEach((src, index) => {
            new THREE.TextureLoader().load(src, texture => {
                that.textures[index] = texture; // Store texture in corresponding position
                loadedCount++;
                checkAllLoaded();
            }, undefined, err => {
                console.error(`Error loading image at ${src}:`, err);
                loadedCount++;
                checkAllLoaded();
            });
        });
    } else {
        console.error("No images found to load.");
    }
  }


  // clickEvent() {
  //   this.clicker.addEventListener('click', () => {
  //     this.next();
  //   });
  // }

  setupInteractionEvents() {
    let lastHoveredIndex = 0; // Track the last hovered index for smoother transitions

    this.marqueeImages.forEach((img, index) => {
        // Calculate the correct index for textures array
        let correctIndex = (index % this.textures.length) + 1; // Assuming first texture is always the main image
        let nextTexture = this.textures[correctIndex];

        if ('ontouchstart' in window) {
            // Mobile touch interaction
            img.addEventListener('click', () => {
                if (this.material.uniforms.texture2.value !== nextTexture) {
                    this.material.uniforms.texture2.value = nextTexture;
                    gsap.to(this.material.uniforms.progress, {
                        value: 1,
                        duration: 1,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            this.material.uniforms.texture1.value = nextTexture;
                            this.material.uniforms.progress.value = 0; // Reset progress after transition
                        }
                    });
                }
            });
        } else {
            // Desktop hover interaction
            img.addEventListener('mouseenter', () => {
                lastHoveredIndex = correctIndex; // Update last hovered index
                this.material.uniforms.texture2.value = nextTexture;
                gsap.to(this.material.uniforms.progress, {
                    value: 1,
                    duration: 1,
                    ease: 'power2.inOut',
                    onComplete: () => {
                        this.material.uniforms.texture1.value = nextTexture;
                        this.material.uniforms.progress.value = 0; // Reset progress after transition
                    }
                });
            });

            img.addEventListener('mouseleave', () => {
                let lastTexture = this.textures[lastHoveredIndex];
                // Transition smoothly to lastHoveredTexture instead of resetting
                if (this.material.uniforms.texture2.value !== lastTexture) {
                    this.material.uniforms.texture2.value = lastTexture;
                    gsap.to(this.material.uniforms.progress, {
                        value: 1,
                        duration: 1,
                        ease: 'power2.inOut',
                        onComplete: () => {
                            this.material.uniforms.texture1.value = lastTexture;
                            this.material.uniforms.progress.value = 0; // Reset progress after transition
                        }
                    });
                }
            });
        }
    });
  }



  
  applyTexture(index) {
      // Assuming the first texture is always the main image and should be skipped for hover effects
      let textureIndex = index + 1; // Adjust index if your array includes a main image at index 0
      let nextTexture = this.textures[textureIndex % this.textures.length]; // Adjusted index
      this.material.uniforms.texture2.value = nextTexture;
      gsap.to(this.material.uniforms.progress, {
          value: 1,
          duration: 1,
          ease: 'power4.inOut',
      });
  }

  // settings() {
  //   let that = this;
  //   if (this.debug) this.gui = new dat.GUI();
  //   this.settings = { progress: 0.5 };
  //   // if(this.debug) this.gui.add(this.settings, "progress", 0, 1, 0.01);

  //   Object.keys(this.uniforms).forEach((item) => {
  //     this.settings[item] = this.uniforms[item].value;
  //     if (this.debug)
  //       this.gui.add(
  //         this.settings,
  //         item,
  //         this.uniforms[item].min,
  //         this.uniforms[item].max,
  //         0.01
  //       );
  //   });
  // }

  setupResize() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    this.width = this.container.offsetWidth;
    this.height = this.container.offsetHeight;
    this.renderer.setSize(this.width, this.height);
    this.camera.aspect = this.width / this.height;

    // image cover
    this.imageAspect =
      this.textures[0].image.height / this.textures[0].image.width;
    let a1;
    let a2;
    if (this.height / this.width > this.imageAspect) {
      a1 = (this.width / this.height) * this.imageAspect;
      a2 = 1;
    } else {
      a1 = 1;
      a2 = this.height / this.width / this.imageAspect;
    }

    this.material.uniforms.resolution.value.x = this.width;
    this.material.uniforms.resolution.value.y = this.height;
    this.material.uniforms.resolution.value.z = a1;
    this.material.uniforms.resolution.value.w = a2;

    const dist = this.camera.position.z;
    const height = 1;
    this.camera.fov = 2 * (180 / Math.PI) * Math.atan(height / (2 * dist));

    this.plane.scale.x = this.camera.aspect;
    this.plane.scale.y = 1;

    this.camera.updateProjectionMatrix();
  }

  addObjects() {
    let that = this;
    this.material = new THREE.ShaderMaterial({
      extensions: {
        derivatives: '#extension GL_OES_standard_derivatives : enable',
      },
      side: THREE.DoubleSide,
      uniforms: {
        time: { type: 'f', value: 0 },
        progress: { type: 'f', value: 0 },
        border: { type: 'f', value: 0 },
        intensity: { type: 'f', value: 0 },
        scaleX: { type: 'f', value: 40 },
        scaleY: { type: 'f', value: 40 },
        transition: { type: 'f', value: 40 },
        swipe: { type: 'f', value: 0 },
        width: { type: 'f', value: 0 },
        radius: { type: 'f', value: 0 },
        texture1: { type: 'f', value: this.textures[0] },
        texture2: { type: 'f', value: this.textures[1] },
        displacement: {
          type: 'f',
          value: new THREE.TextureLoader().load('https://uploads-ssl.webflow.com/65de4d4aa58a7df7f5ea205b/6694cc523ddbd2f97e5e4386_disp1.webp'),
        },
        resolution: { type: 'v4', value: new THREE.Vector4() },
      },
      // wireframe: true,
      vertexShader: this.vertex,
      fragmentShader: this.fragment,
    });

    this.geometry = new THREE.PlaneGeometry(1, 1, 2, 2);

    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  stop() {
    this.paused = true;
  }

  play() {
    this.paused = false;
    this.render();
  }

  next() {
    if (this.isRunning) return;
    this.isRunning = true;
    let len = this.textures.length;
    let nextTexture = this.textures[(this.current + 1) % len];
    this.material.uniforms.texture2.value = nextTexture;
    let tl = new TimelineMax();
    tl.to(this.material.uniforms.progress, this.duration, {
      value: 1,
      ease: Power2[this.easing],
      onComplete: () => {
        this.current = (this.current + 1) % len;
        this.material.uniforms.texture1.value = nextTexture;
        this.material.uniforms.progress.value = 0;
        this.isRunning = false;
      },
    });
  }
  render() {
    if (this.paused) return;
    this.time += 0.05;
    this.material.uniforms.time.value = this.time;
    // this.material.uniforms.progress.value = this.settings.progress;

    Object.keys(this.uniforms).forEach((item) => {
      this.material.uniforms[item].value = 0.1;
    });

    // this.camera.position.z = 3;
    // this.plane.rotation.y = 0.4*Math.sin(this.time)
    // this.plane.rotation.x = 0.5*Math.sin(0.4*this.time)

    requestAnimationFrame(this.render.bind(this));
    this.renderer.render(this.scene, this.camera);
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const canvasContainer = document.getElementById('main-image-canvas');
  const mainImage = document.querySelector('.cp_main-image-container img');
  
  if (mainImage && canvasContainer) {
      // Set the data-images attribute dynamically based on the img src
      const imageSrc = mainImage.src;
      canvasContainer.setAttribute('data-images', JSON.stringify([imageSrc]));

      const dispUrl = 'https://uploads-ssl.webflow.com/65de4d4aa58a7df7f5ea205b/6694cc523ddbd2f97e5e4386_disp1.webp';
      canvasContainer.setAttribute('data-disp', dispUrl);
  }

  if (mainImage) {
      mainImage.style.display = 'none';
  }
  
  let sketch = new Sketch({
    debug: true,
    uniforms: {
      intensity: { value: 0.1, type: 'f', min: 0, max: 3 },
    },
    fragment: `
      uniform float time;
      uniform float progress;
      uniform float intensity;
      uniform float width;
      uniform float scaleX;
      uniform float scaleY;
      uniform float transition;
      uniform float radius;
      uniform float swipe;
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
      const float angle1 = PI *0.25;
      const float angle2 = -PI *0.75;
    
    
      void main()	{
        vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
    
        vec4 disp = texture2D(displacement, newUV);
        vec2 dispVec = vec2(disp.r, disp.g);
    
        vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;
        vec4 t1 = texture2D(texture1, distortedPosition1);
    
        vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);
        vec4 t2 = texture2D(texture2, distortedPosition2);
    
        gl_FragColor = mix(t1, t2, progress);
    
      }
    `,
  });
})
