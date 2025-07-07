import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';

const TRAIL_RESOLUTION = 256;
const TRAIL_DECAY_RATE = 0.95;
const MAX_DISTORTION = 0.05;
const DISTORTION_RADIUS = 30;
const MOUSE_FORCE_MULTIPLIER = 0.001;

const HypersonicCursor: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-0.5, 0.5, 0.5, -0.5, 0.1, 10);
    camera.position.z = 1;

    // Render a background image instead of a temporary checkerboard
    const geometry = new THREE.PlaneGeometry(1, 1);
    const textureLoader = new THREE.TextureLoader();
    const backgroundTexture = textureLoader.load('/5-removebg-preview.png');
    const material = new THREE.MeshBasicMaterial({ map: backgroundTexture });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const trailCanvas = document.createElement('canvas');
    trailCanvas.width = TRAIL_RESOLUTION;
    trailCanvas.height = TRAIL_RESOLUTION;
    const trailContext = trailCanvas.getContext('2d')!;
    trailContext.fillStyle = 'black';
    trailContext.fillRect(0, 0, TRAIL_RESOLUTION, TRAIL_RESOLUTION);
    const trailTexture = new THREE.CanvasTexture(trailCanvas);
    trailTexture.minFilter = THREE.LinearFilter;
    trailTexture.magFilter = THREE.LinearFilter;

    const composer = new EffectComposer(renderer);
    const renderPass = new RenderPass(scene, camera);
    composer.addPass(renderPass);

    const distortionPass = new ShaderPass({
      uniforms: {
        tDiffuse: { value: null },
        tDistortion: { value: trailTexture },
        uMaxDistortion: { value: MAX_DISTORTION },
        uAspect: { value: width / height },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform sampler2D tDistortion;
        uniform float uMaxDistortion;
        uniform float uAspect;
        varying vec2 vUv;
        void main() {
          vec4 distortionData = texture2D(tDistortion, vUv);
          vec2 displacement = distortionData.rg * 2.0 - 1.0;
          displacement *= distortionData.b * uMaxDistortion;
          displacement.x /= uAspect;
          vec2 distortedUv = vUv + displacement;
          vec4 sceneColor = texture2D(tDiffuse, distortedUv);
          float redOffset = 0.003 * distortionData.b;
          float blueOffset = -0.003 * distortionData.b;
          float r = texture2D(tDiffuse, distortedUv + vec2(redOffset, 0.0)).r;
          float g = sceneColor.g;
          float b = texture2D(tDiffuse, distortedUv + vec2(blueOffset, 0.0)).b;
          gl_FragColor = vec4(r, g, b, 1.0);
        }
      `,
    });
    distortionPass.renderToScreen = true;
    composer.addPass(distortionPass);

    let mouseX = 0,
      mouseY = 0,
      lastX = 0,
      lastY = 0;

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
      distortionPass.uniforms.uAspect.value = width / height;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / width;
      mouseY = e.clientY / height;
    };

    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove);

    const updateTrail = () => {
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const distSq = dx * dx + dy * dy;
      const dist = Math.sqrt(distSq);
      if (dist > 0.001) {
        let vx = 0,
          vy = 0,
          force = 0;
        if (dist > 0) {
          vx = dx / dist;
          vy = dy / dist;
          force = Math.min(distSq * MOUSE_FORCE_MULTIPLIER, 1.0);
        }
        const r = (vx + 1) / 2;
        const g = (vy + 1) / 2;
        const b = force;
        const x = mouseX * TRAIL_RESOLUTION;
        const y = mouseY * TRAIL_RESOLUTION;
        trailContext.shadowColor = `rgba(${r * 255}, ${g * 255}, ${b * 255}, 0.8)`;
        trailContext.shadowBlur = 15;
        trailContext.shadowOffsetX = 0;
        trailContext.shadowOffsetY = 0;
        trailContext.beginPath();
        trailContext.fillStyle = `rgba(${r * 255}, ${g * 255}, ${b * 255}, 0.8)`;
        trailContext.arc(x, y, DISTORTION_RADIUS, 0, Math.PI * 2);
        trailContext.fill();
      }
      trailContext.fillStyle = `rgba(0, 0, 0, ${1 - TRAIL_DECAY_RATE})`;
      trailContext.globalCompositeOperation = 'multiply';
      trailContext.fillRect(0, 0, TRAIL_RESOLUTION, TRAIL_RESOLUTION);
      trailContext.globalCompositeOperation = 'source-over';
      lastX = mouseX;
      lastY = mouseY;
      trailTexture.needsUpdate = true;
    };

    const animate = () => {
      updateTrail();
      composer.render();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      composer.dispose();
      renderer.dispose();
    };
  }, []);

  return <canvas ref={canvasRef} id="hypersonic-canvas" />;
};

export default HypersonicCursor;
