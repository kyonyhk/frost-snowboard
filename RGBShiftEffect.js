class RGBShiftEffect extends EffectShell {
  constructor(container, itemsWrapper = null, options = {}) {
    super(container, itemsWrapper);
    if (!this.container || !this.itemsWrapper) return;

    this.options = options || { strength: 0.25 };

    this.init();
  }

  init() {
    this.position = new THREE.Vector3(0, 0, 0);
    this.scale = new THREE.Vector3(1, 1, 1);
    this.geometry = new THREE.PlaneBufferGeometry(1, 1, 32, 32);
    this.uniforms = {
      uTime: { value: 0 },
      uTexture: { value: null },
      uOffsetRed: { value: new THREE.Vector2(0.0, 0.0) },
      uOffsetGreen: { value: new THREE.Vector2(0.0, 0.0) },
      uOffsetBlue: { value: new THREE.Vector2(0.0, 0.0) },
      uAlpha: { value: 0 },
    };
    this.material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: `
        uniform vec2 uOffsetRed;

        varying vec2 vUv;

        vec3 deformationCurve(vec3 position, vec2 uv, vec2 offset) {
          float M_PI = 3.1415926535897932384626433832795;
          position.x = position.x + (sin(uv.y * M_PI) * offset.x);
          position.y = position.y + (sin(uv.x * M_PI) * offset.y);
          return position;
        }

        void main() {
          vUv = uv;
          vec3 newPosition = deformationCurve(position, uv, uOffsetRed);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D uTexture;
        uniform float uAlpha;
        uniform vec2 uOffsetRed;
        uniform vec2 uOffsetGreen;
        uniform vec2 uOffsetBlue;

        varying vec2 vUv;

        vec3 rgbShift(sampler2D texture, vec2 uv, vec2 offsetRed, vec2 offsetGreen, vec2 offsetBlue) {
          float r = texture2D(texture, uv + offsetRed).r;
          float g = texture2D(texture, uv + offsetGreen).g;
          float b = texture2D(texture, uv + offsetBlue).b;
          return vec3(r, g, b);
        }

        void main() {
          vec3 color = rgbShift(uTexture, vUv, uOffsetRed, uOffsetGreen, uOffsetBlue);
          gl_FragColor = vec4(color, uAlpha);
        }
      `,
      transparent: true,
    });
    this.plane = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.plane);
  }

  onMouseEnter() {
    if (!this.currentItem || !this.isMouseOver) {
      this.isMouseOver = true
      // show plane
      gsap.to(this.uniforms.uAlpha, 0.5, {
        value: 1,
        ease: Power4.easeOut
      })
    }
  }

  onMouseLeave(event) {
    gsap.to(this.uniforms.uAlpha, 0.5, {
      value: 0,
      ease: Power4.easeOut
    })
  }

  onMouseMove(event) {
    // project mouse position to world coodinates
    let x = this.mouse.x.map(
      -1,
      1,
      -this.viewSize.width / 2,
      this.viewSize.width / 2
    )
    let y = this.mouse.y.map(
      -1,
      1,
      -this.viewSize.height / 2,
      this.viewSize.height / 2
    )

    this.position = new THREE.Vector3(x, y, 0)
    gsap.to(this.plane.position, 1, {
      x: x,
      y: y,
      ease: Power4.easeOut,
      onUpdate: this.onPositionUpdate.bind(this)
    })
  }

  onPositionUpdate() {
    // compute offset for red
    let offsetRed = this.plane.position
      .clone()
      .sub(this.position)
      .multiplyScalar(-this.options.strength * 1.5); // You might want to increase this strength
    this.uniforms.uOffsetRed.value = offsetRed;
  
    // compute offset for green with a higher strength factor to make it more pronounced
    let offsetGreen = this.plane.position
      .clone()
      .sub(this.position)
      .multiplyScalar(-this.options.strength * 2); // Increase the factor to enhance the effect
    this.uniforms.uOffsetGreen.value = offsetGreen;
  
    // compute offset for blue with an even higher strength factor to make it more pronounced
    let offsetBlue = this.plane.position
      .clone()
      .sub(this.position)
      .multiplyScalar(-this.options.strength * 2.5); // Increase the factor to enhance the effect
    this.uniforms.uOffsetBlue.value = offsetBlue;
  }


  onMouseOver(index, e) {
    if (!this.isLoaded) return
    this.onMouseEnter()
    if (this.currentItem && this.currentItem.index === index) return
    this.onTargetChange(index)
  }

  onTargetChange(index) {
    // item target changed
    this.currentItem = this.items[index]
    if (!this.currentItem.texture) return

    // compute image ratio
    let imageRatio =
      this.currentItem.img.naturalWidth / this.currentItem.img.naturalHeight
    this.scale = new THREE.Vector3(imageRatio, 1, 1)
    this.uniforms.uTexture.value = this.currentItem.texture
    this.plane.scale.copy(this.scale)
  }
}
