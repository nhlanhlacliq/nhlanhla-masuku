"use client";

import { useEffect, useRef } from "react";

// ─── Tweak these ────────────────────────────────────────
const DOT_SPACING = 32;              // px between dots
const DOT_RADIUS = 2;               // dot size in px
const LERP_FACTOR = 0.08;           // scroll inertia (0 = frozen, 1 = instant)
const CENTER_SPEED = 0.2;           // how fast center dots scroll (higher = more)
const EDGE_SPEED = 0.7;             // how fast edge dots scroll (lower = less)
const LIGHT_OPACITY = 0.08;         // dot opacity in light mode
const DARK_OPACITY = 0.06;          // dot opacity in dark mode
const DOT_COLOR = "14,165,233";     // rgb values — sky-500 accent (try "30,41,59" for neutral)
// ────────────────────────────────────────────────────────

const DotGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;

    const onScroll = () => {
      targetScroll = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      currentScroll += (targetScroll - currentScroll) * LERP_FACTOR;

      const w = window.innerWidth;
      const h = window.innerHeight;
      const cx = w / 2;
      const isDark = document.documentElement.classList.contains("dark");
      const dotColor = `rgba(${DOT_COLOR},`;
      const baseOpacity = isDark ? DARK_OPACITY : LIGHT_OPACITY;

      ctx.clearRect(0, 0, w, h);

      const cols = Math.ceil(w / DOT_SPACING) + 2;
      const rows = Math.ceil(h / DOT_SPACING) + 2;

      for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
          const baseX = col * DOT_SPACING;
          const baseY = row * DOT_SPACING;

          // Horizontal distance only — keeps rows flat, no V-shape
          const normalizedDist = Math.abs(baseX - cx) / cx; // 0 = center col, 1 = edge col

          // Center dots move more, edge dots move less
          const parallax =
            CENTER_SPEED + (EDGE_SPEED - CENTER_SPEED) * normalizedDist;

          const scrollOffset = currentScroll * parallax;
          const totalH = rows * DOT_SPACING;
          const y =
            ((((baseY - scrollOffset) % totalH) + totalH) % totalH) -
            DOT_SPACING;

          ctx.beginPath();
          ctx.arc(baseX, y, DOT_RADIUS, 0, Math.PI * 2);
          ctx.fillStyle = dotColor + baseOpacity + ")";
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default DotGrid;
