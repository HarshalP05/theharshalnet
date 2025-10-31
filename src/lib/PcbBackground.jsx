import { useEffect, useRef } from "react";

function randInt(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

function createPCBPaths(gridX, gridY, gridSize, numPaths) {
  // Each path is an array of connected points
  const paths = [];
  for (let i = 0; i < numPaths; i++) {
    let path = [];
    // Start at a random grid node
    let x = randInt(0, gridX - 1);
    let y = randInt(0, gridY - 1);
    path.push({ x, y });

    // Create a path of random length with L turns
    let steps = randInt(3, Math.min(gridX, gridY, 7));
    for (let j = 0; j < steps; j++) {
      // Move horizontally or vertically (sometimes diagonally)
      let dir = randInt(0, 2);
      if (dir === 0 && x < gridX - 1) x++;
      else if (dir === 1 && y < gridY - 1) y++;
      else if (dir === 2 && x < gridX - 1 && y < gridY - 1) { x++; y++; }
      path.push({ x, y });
    }
    paths.push(path);
  }
  return paths;
}

export default function PcbBackground() {
  const canvasRef = useRef(null);
  const pathsRef = useRef([]);
  const lastSize = useRef({ w: 0, h: 0 });
  const nodesRef = useRef([]); // precomputed node positions

  useEffect(() => {
    if (typeof window === "undefined") return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // --- Dynamic Sizing ---
    let width = window.innerWidth;
    let height = window.innerHeight;

    function setCanvasSize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      // Add 2px overscan in each dimension to avoid subpixel seam lines at edges
      const cssW = width + 2;
      const cssH = height + 2;
      canvas.width = Math.ceil(cssW * dpr);
      canvas.height = Math.ceil(cssH * dpr);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      lastSize.current = { w: width, h: height };
    }
    setCanvasSize();

    // --- PCB grid and connection paths ---
    const gridSize = 76; // slightly larger to reduce node/segment count
    const dotSize = 4.5;
    const gridX = Math.ceil(width / gridSize) + 3;
    const gridY = Math.ceil(height / gridSize) + 3;

    // Precompute node pixel positions for faster draws
    const nodes = [];
    for (let x = 0; x < gridX; x++) {
      for (let y = 0; y < gridY; y++) {
        nodes.push({ px: x * gridSize, py: y * gridSize });
      }
    }
    nodesRef.current = nodes;

    // Generate trace paths
    pathsRef.current = createPCBPaths(
      gridX,
      gridY,
      gridSize,
      Math.floor(gridX * gridY * 0.22) // slight reduction for perf
    );

    // --- Animation State ---
    let animationFrameId;
    const start = performance.now();

    // Respect reduced motion preference
    const prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Pause when tab hidden
    let isActive = true;
    const onVisibility = () => { isActive = document.visibilityState === "visible"; if (isActive) animationFrameId = requestAnimationFrame(drawPCB); };
    document.addEventListener("visibilitychange", onVisibility);

    function drawPCB() {
      if (!isActive) return; // don't draw when inactive

  // Paint a solid base first with slight overscan to avoid any seam showing through
  ctx.fillStyle = "#00090f"; // deeper navy base to darken overall theme
  ctx.fillRect(-2, -2, width + 4, height + 4);

      // --- Draw Connections (traces) ---
      const now = performance.now();
      const t = (now - start) / 1000;
      const pathSpeed = prefersReduced ? 1 : 4; // segments/sec

      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (const path of pathsRef.current) {
        // Animate the path being drawn progressively
        let segsToShow = Math.min(path.length - 1, Math.floor(t * pathSpeed));
        for (let i = 0; i < segsToShow; i++) {
          const a = path[i];
          const b = path[i + 1];
          // Map to pixel coordinates
          const x1 = a.x * gridSize;
          const y1 = a.y * gridSize;
          const x2 = b.x * gridSize;
          const y2 = b.y * gridSize;
          // Soft shimmer
        const shimmer = prefersReduced ? 0.6 : 0.4 + 0.6 * Math.sin((x1 + y1 + t * 80) * 0.003 + t * 1.6);
          ctx.strokeStyle = `rgba(44, 227, 103, ${0.12 + shimmer * 0.14})`;
          ctx.lineWidth = 3;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
        // Animate head of path
        if (segsToShow < path.length - 1) {
          const head = path[segsToShow];
          const prev = path[segsToShow - 1 >= 0 ? segsToShow - 1 : 0];
          const x1 = prev.x * gridSize;
          const y1 = prev.y * gridSize;
          const x2 = head.x * gridSize;
          const y2 = head.y * gridSize;
          ctx.strokeStyle = `rgba(210, 252, 125, ${prefersReduced ? 0.16 : 0.20})`;
          ctx.lineWidth = 3.6;
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      }

      // --- Draw Nodes (pads) ---
  const nodePulse = prefersReduced ? 0.7 : (0.55 + 0.35 * Math.sin(t * 2.2));
  const outerAlpha = 0.10 + nodePulse * 0.12;
  const innerAlpha = (outerAlpha * 0.45);
      ctx.beginPath(); // batch path to reduce state churn
      for (let i = 0; i < nodesRef.current.length; i++) {
        const { px, py } = nodesRef.current[i];
        ctx.fillStyle = `rgba(56, 189, 248, ${outerAlpha})`;
        ctx.moveTo(px + dotSize, py);
        ctx.arc(px, py, dotSize, 0, 2 * Math.PI);
      }
      ctx.fill();
      ctx.beginPath();
      for (let i = 0; i < nodesRef.current.length; i++) {
        const { px, py } = nodesRef.current[i];
        ctx.fillStyle = `rgba(255, 230, 104, ${innerAlpha})`;
        ctx.moveTo(px + dotSize * 0.5, py);
        ctx.arc(px, py, dotSize * 0.5, 0, 2 * Math.PI);
      }
      ctx.fill();

      animationFrameId = requestAnimationFrame(drawPCB);
    }
    animationFrameId = requestAnimationFrame(drawPCB);

    // --- Responsive Resize ---
    const handleResize = () => {
  width = window.innerWidth;
  height = window.innerHeight;
      setCanvasSize();
      const gridX = Math.ceil(width / gridSize) + 3;
      const gridY = Math.ceil(height / gridSize) + 3;
      // recompute nodes
      const nodes = [];
      for (let x = 0; x < gridX; x++) {
        for (let y = 0; y < gridY; y++) {
          nodes.push({ px: x * gridSize, py: y * gridSize });
        }
      }
      nodesRef.current = nodes;
      // regenerate paths (slightly fewer for perf)
      pathsRef.current = createPCBPaths(gridX, gridY, gridSize, Math.floor(gridX * gridY * 0.22));
    };
    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
  className="fixed z-0 pointer-events-none w-full h-full"
  style={{ inset: "-2px" }}
      aria-hidden="true"
    />
  );
}
