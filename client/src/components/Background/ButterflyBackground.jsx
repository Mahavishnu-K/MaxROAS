import { useEffect, useRef } from 'react';
import { Renderer, Camera, Geometry, Program, Mesh, Color } from 'ogl';

const vertex = /* glsl */ `
  attribute vec3 position;   // The shape of one butterfly
  attribute vec3 offset;     // Where this specific butterfly is
  attribute vec3 random;     // Random values for speed, size, phase
  attribute vec3 color;      // Color of this butterfly
  
  uniform mat4 modelMatrix;
  uniform mat4 viewMatrix;
  uniform mat4 projectionMatrix;
  uniform float uTime;
  uniform float uSize;       // Global size multiplier
  
  varying vec3 vColor;
  
  void main() {
    vColor = color;
    
    // 1. ANIMATE WINGS (Flapping)
    // We modify the Z position of the wings based on X distance from center
    // + time + random phase.
    vec3 pos = position;
    
    // Flap Speed depends on the 'random.y' value
    float flapSpeed = 15.0 + (random.y * 10.0); 
    float flapPhase = uTime * flapSpeed + random.z * 10.0;
    
    // The "Fold": Bends the wings up and down. 
    // abs(pos.x) ensures both wings flap symmetrically
    float flapAmount = sin(flapPhase);
    
    // Apply flap to Z axis. 
    // We multiply by pos.x to pin the center (body) at 0 and flap the tips.
    pos.z += flapAmount * abs(pos.x) * 0.8; 
    
    // 2. SCALE
    // Randomize size
    float scale = uSize * (0.5 + random.x * 1.0);
    pos *= scale;
    
    // 3. MOVEMENT (Drift)
    // We take the instance offset and add sine wave movement
    vec3 instancePos = offset;
    
    // Drifting math similar to particles, but smoother
    float driftSpeed = 0.2 + (random.x * 0.3);
    float t = uTime * driftSpeed;
    
    instancePos.x += sin(t + random.y * 6.28) * 4.0;
    instancePos.y += cos(t + random.z * 6.28) * 4.0;
    instancePos.z += sin(t + random.x * 6.28) * 2.0; // Minimal depth movement
    
    // Combine local shape position with world instance position
    vec4 mPos = modelMatrix * vec4(pos + instancePos, 1.0);
    
    gl_Position = projectionMatrix * viewMatrix * mPos;
  }
`;

const fragment = /* glsl */ `
  precision highp float;
  varying vec3 vColor;
  
  void main() {
    // Simple solid color. 
    // Since it's a small geometry, we don't need complex texture mapping.
    gl_FragColor = vec4(vColor, 1.0);
  }
`;

const ButterflyBackground = ({
  count = 50,
  colors = ['#000000', '#333333', '#666666'], // Greyscale for white bg
  size = 0.5,
  speed = 1,
  pixelRatio = 1, // Keep at 1 for performance on Retina screens
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Setup Renderer
    const renderer = new Renderer({ 
      dpr: pixelRatio, 
      alpha: true, 
      depth: false // Disable depth to save perf, butterflies can overlap
    });
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    gl.clearColor(0, 0, 0, 0);

    // 2. Camera
    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 20); // Pull camera back to see the field

    // 3. Resize Logic
    const resize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.perspective({ aspect: gl.canvas.width / gl.canvas.height });
    };
    window.addEventListener('resize', resize);
    resize();

    // 4. Geometry (The Butterfly Shape)
    // We define TWO triangles that form a "Bowtie" shape.
    // Center is at 0,0. Left wing goes -x, Right wing goes +x.
    const geometryData = new Float32Array([
       // Left Wing Triangle
       0, 0, 0,    // Center (Body)
      -1, 1, 0,    // Top Left Tip
      -1, -1, 0,   // Bottom Left Tip
      
       // Right Wing Triangle
       0, 0, 0,    // Center (Body)
       1, 1, 0,    // Top Right Tip
       1, -1, 0    // Bottom Right Tip
    ]);

    // 5. Instanced Attributes (Data for each of the 50 butterflies)
    const offsetData = new Float32Array(count * 3);
    const randomData = new Float32Array(count * 3);
    const colorData = new Float32Array(count * 3);

    const parseColor = (hex) => {
        const c = new Color(hex);
        return [c.r, c.g, c.b];
    };

    for (let i = 0; i < count; i++) {
      // Random Position (Spread them wide)
      offsetData[i * 3 + 0] = (Math.random() * 2 - 1) * 20; // X spread
      offsetData[i * 3 + 1] = (Math.random() * 2 - 1) * 10; // Y spread
      offsetData[i * 3 + 2] = (Math.random() * 2 - 1) * 5;  // Z spread

      // Random attributes for shader (Scale, Speed, Phase)
      randomData[i * 3 + 0] = Math.random(); 
      randomData[i * 3 + 1] = Math.random(); 
      randomData[i * 3 + 2] = Math.random();

      // Color
      const hex = colors[Math.floor(Math.random() * colors.length)];
      const rgb = parseColor(hex);
      colorData[i * 3 + 0] = rgb[0];
      colorData[i * 3 + 1] = rgb[1];
      colorData[i * 3 + 2] = rgb[2];
    }

    const geometry = new Geometry(gl, {
      position: { size: 3, data: geometryData },
      offset:   { instanced: true, size: 3, data: offsetData },
      random:   { instanced: true, size: 3, data: randomData },
      color:    { instanced: true, size: 3, data: colorData },
    });

    // 6. Program (Shader)
    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: size },
      },
      transparent: true,
      cullFace: false, // Show both sides of the wings
    });

    const mesh = new Mesh(gl, { mode: gl.TRIANGLES, geometry, program });

    // 7. Animation Loop
    let animationId;
    let lastTime = performance.now();
    let elapsed = 0;

    const update = (t) => {
      animationId = requestAnimationFrame(update);
      const delta = (t - lastTime) / 1000;
      lastTime = t;
      
      // Update global time uniform
      elapsed += delta * speed;
      program.uniforms.uTime.value = elapsed;

      // Optional: Gently rotate the whole group for dynamic feel
      mesh.rotation.y = Math.sin(elapsed * 0.1) * 0.1;

      renderer.render({ scene: mesh, camera });
    };
    
    animationId = requestAnimationFrame(update);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
      if (container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, [count, colors, size, speed, pixelRatio]);

  return <div ref={containerRef} className="w-full h-full absolute inset-0 z-0 pointer-events-none" />;
};

export default ButterflyBackground;