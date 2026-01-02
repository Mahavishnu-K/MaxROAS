import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';

const LightPillar = ({
  topColor = '#ffffff', 
  bottomColor = '#ffffff',
  intensity = 1.0,
  rotationSpeed = 0.3,
  interactive = false,
  className = '',
  glowAmount = 0.005,
  pillarWidth = 3.0,
  pillarHeight = 0.4,
  noiseIntensity = 0.5,
  mixBlendMode = 'normal', // We will use 'difference' in the Hero
  pillarRotation = 0
}) => {
  const containerRef = useRef(null);
  const rafRef = useRef(null);
  const rendererRef = useRef(null);
  const materialRef = useRef(null);
  const mouseRef = useRef(new THREE.Vector2(0, 0));
  const timeRef = useRef(0);
  const [webGLSupported, setWebGLSupported] = useState(true);

  // Check WebGL support
  useEffect(() => {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    if (!gl) {
      setWebGLSupported(false);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current || !webGLSupported) return;

    const container = containerRef.current;
    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: false, // Performance boost
        alpha: true,      // CRITICAL: Allows white background to show through
        powerPreference: 'high-performance',
        precision: 'mediump', // Performance boost
        depth: false,
        stencil: false
      });
    } catch (error) {
      setWebGLSupported(false);
      return;
    }

    // PERFORMANCE: Lock pixel ratio to 1. High DPR on 4k screens kills FPS.
    renderer.setSize(width, height);
    renderer.setPixelRatio(1); 
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const parseColor = hex => {
      const color = new THREE.Color(hex);
      return new THREE.Vector3(color.r, color.g, color.b);
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    // OPTIMIZED FRAGMENT SHADER
    const fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uPillarRotation;
      varying vec2 vUv;

      const float PI = 3.141592653589793;

      mat2 rot(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      // Cheaper noise function for performance
      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);
      }

      void main() {
        vec2 fragCoord = vUv * uResolution;
        vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;
        
        float rotAngle = uPillarRotation * PI / 180.0;
        uv *= rot(rotAngle);

        vec3 origin = vec3(0.0, 0.0, -10.0);
        vec3 direction = normalize(vec3(uv, 1.0));

        float maxDepth = 40.0; // Reduced depth loop for speed
        float depth = 0.1;

        vec3 color = vec3(0.0);
        
        // Loop count reduced from 100 to 60 for better FPS
        for(float i = 0.0; i < 60.0; i++) {
          vec3 pos = origin + direction * depth;
          
          // Simplified deformation
          pos.xz *= rot(uTime * 0.2); 
          pos.y *= uPillarHeight;
          
          // Distance Field
          float fieldDistance = length(cos(pos.xz)) - 0.2;
          float radialBound = length(pos.xz) - uPillarWidth;
          
          // Soft blending
          float k = 1.0;
          float h = max(k * 4.0 - abs(radialBound - fieldDistance), 0.0);
          fieldDistance = min(radialBound, fieldDistance) - h * h * 0.25 / (k * 4.0);
          
          fieldDistance = abs(fieldDistance) * 0.15 + 0.01;

          vec3 gradient = mix(uBottomColor, uTopColor, smoothstep(15.0, -15.0, pos.y));
          
          // Accumulate Light
          color += gradient * (0.01 / fieldDistance); // Simplified lighting math

          if(depth > maxDepth) break;
          depth += fieldDistance;
        }

        color *= uIntensity;

        // Noise
        float rnd = random(gl_FragCoord.xy + uTime);
        color -= rnd * uNoiseIntensity * 0.1;

        // ALPHA HANDLING: 
        // We use the brightness of the pixel to determine opacity.
        // This allows the transparent background to remain transparent.
        float alpha = max(max(color.r, color.g), color.b);
        alpha = smoothstep(0.0, 0.5, alpha); // Soften the alpha edge

        gl_FragColor = vec4(color, alpha);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uResolution: { value: new THREE.Vector2(width, height) },
        uMouse: { value: mouseRef.current },
        uTopColor: { value: parseColor(topColor) },
        uBottomColor: { value: parseColor(bottomColor) },
        uIntensity: { value: intensity },
        uInteractive: { value: interactive },
        uGlowAmount: { value: glowAmount },
        uPillarWidth: { value: pillarWidth },
        uPillarHeight: { value: pillarHeight },
        uNoiseIntensity: { value: noiseIntensity },
        uPillarRotation: { value: pillarRotation }
      },
      transparent: true,
      depthWrite: false,
      depthTest: false
    });
    materialRef.current = material;

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Mouse Interaction
    const handleMouseMove = event => {
      if (!interactive) return;
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      mouseRef.current.set(x, y);
    };

    if (interactive) container.addEventListener('mousemove', handleMouseMove);

    // Optimized Animation Loop
    let lastTime = 0;
    const animate = (time) => {
      if (!materialRef.current || !rendererRef.current) return;
      
      const seconds = time * 0.001;
      timeRef.current = seconds * rotationSpeed;
      materialRef.current.uniforms.uTime.value = timeRef.current;
      rendererRef.current.render(scene, camera);
      
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    const handleResize = () => {
        if (!containerRef.current || !rendererRef.current || !materialRef.current) return;
        const w = containerRef.current.clientWidth;
        const h = containerRef.current.clientHeight;
        rendererRef.current.setSize(w, h);
        materialRef.current.uniforms.uResolution.value.set(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (interactive) container.removeEventListener('mousemove', handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (rendererRef.current && rendererRef.current.domElement) {
        container.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }
    };
  }, [topColor, bottomColor, intensity, rotationSpeed, interactive, webGLSupported]);

  if (!webGLSupported) return null;

  return (
    <div 
        ref={containerRef} 
        className={`w-full h-full absolute top-0 left-0 ${className}`} 
        style={{ mixBlendMode: mixBlendMode }} 
    />
  );
};

export default LightPillar;