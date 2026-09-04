"use client";

import { useEffect, useRef } from "react";

const COLORS = ["#1e5f8c", "#3f8fa8", "#1c2f4a"];

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX: number;
  targetY: number;
  size: number;
  color: string;
  seed: number;
};

export default function NameParticles({ text }: { text: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !container || !ctx) return;

    let cancelled = false;
    let particles: Particle[] = [];
    let animationFrame = 0;
    const mouse = { x: -9999, y: -9999 };
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function buildParticles() {
      if (cancelled) return;
      const width = container!.clientWidth;
      const height = container!.clientHeight;
      if (width === 0 || height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const sample = document.createElement("canvas");
      sample.width = width;
      sample.height = height;
      const sctx = sample.getContext("2d")!;
      const isMobile = width < 640;
      let fontSize = Math.round(height * (isMobile ? 0.6 : 0.56));
      const fontFamily = getComputedStyle(document.body).fontFamily || "sans-serif";
      sctx.fillStyle = "#000";
      sctx.textAlign = "center";
      sctx.textBaseline = "middle";

      sctx.font = `600 ${fontSize}px ${fontFamily}`;
      const maxWidth = width * 0.94;
      const measured = sctx.measureText(text).width;
      if (measured > maxWidth) {
        fontSize = Math.floor(fontSize * (maxWidth / measured));
        sctx.font = `600 ${fontSize}px ${fontFamily}`;
      }

      sctx.fillText(text, width / 2, height / 2 + fontSize * 0.04);

      const imageData = sctx.getImageData(0, 0, width, height).data;
      const gap = isMobile ? 3 : 4;
      const points: { x: number; y: number }[] = [];
      for (let y = 0; y < height; y += gap) {
        for (let x = 0; x < width; x += gap) {
          if (imageData[(y * width + x) * 4 + 3] > 128) points.push({ x, y });
        }
      }

      const maxParticles = 1600;
      let selected = points;
      if (points.length > maxParticles) {
        const step = points.length / maxParticles;
        selected = Array.from({ length: maxParticles }, (_, i) => points[Math.floor(i * step)]);
      }

      particles = selected.map((p) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        targetX: p.x,
        targetY: p.y,
        size: Math.random() * 1.1 + 0.7,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        seed: Math.random() * 1000,
      }));

      if (reduceMotion) {
        for (const p of particles) {
          p.x = p.targetX;
          p.y = p.targetY;
        }
        drawStatic();
      }
    }

    function drawStatic() {
      const width = container!.clientWidth;
      const height = container!.clientHeight;
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = 0.85;
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;
    }

    function onMouseMove(e: MouseEvent) {
      const rect = container!.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    }
    function onMouseLeave() {
      mouse.x = -9999;
      mouse.y = -9999;
    }
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseleave", onMouseLeave);

    function render() {
      if (cancelled) return;
      const width = container!.clientWidth;
      const height = container!.clientHeight;
      const t = performance.now() / 1000;
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        const tx = p.targetX + Math.sin(t * 0.6 + p.seed) * 1.2;
        const ty = p.targetY + Math.cos(t * 0.5 + p.seed) * 1.2;
        p.vx += (tx - p.x) * 0.06;
        p.vy += (ty - p.y) * 0.06;

        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const dist = Math.hypot(mdx, mdy);
        const repelRadius = 55;
        if (dist < repelRadius) {
          const force = (repelRadius - dist) / repelRadius;
          p.vx += (mdx / (dist || 1)) * force * 3.2;
          p.vy += (mdy / (dist || 1)) * force * 3.2;
        }

        p.vx *= 0.82;
        p.vy *= 0.82;
        p.x += p.vx;
        p.y += p.vy;

        ctx!.beginPath();
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = 0.85;
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fill();
      }
      ctx!.globalAlpha = 1;

      animationFrame = requestAnimationFrame(render);
    }

    buildParticles();
    if (document.fonts && document.fonts.status !== "loaded") {
      document.fonts.ready.then(() => {
        if (!cancelled) buildParticles();
      });
    }

    if (!reduceMotion) {
      animationFrame = requestAnimationFrame(render);
    }

    let resizeTimeout: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(buildParticles, 200);
    }
    window.addEventListener("resize", onResize);

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", onResize);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [text]);

  return (
    <div ref={containerRef} className="relative w-full h-[80px] sm:h-[110px] md:h-[140px] lg:h-[160px]">
      <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 w-full h-full" />
    </div>
  );
}
