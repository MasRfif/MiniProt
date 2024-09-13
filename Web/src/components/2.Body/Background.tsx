// components/Background.tsx
"use client";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  toX: number;
  toY: number;
  c: string;
  size: number;
}

const colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];

const Background = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = { x: 0, y: 0 };
  const rate = 60;
  const arc = 100;
  const speed = 20;
  const size = 7;
  const parts: Particle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = (canvas.width = window.innerWidth);
    const h = (canvas.height = window.innerHeight);

    const create = () => {
      for (let i = 0; i < arc; i++) {
        parts[i] = {
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        };
      }
    };

    const particles = () => {
      ctx.clearRect(0, 0, w, h);

      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        const distanceFactor = distanceBetween(mouse, li);
        const distanceFactorNormalized = Math.max(
          Math.min(15 - distanceFactor / 10, 10),
          1
        );

        ctx.beginPath();
        ctx.arc(
          li.x,
          li.y,
          li.size * distanceFactorNormalized,
          0,
          Math.PI * 2,
          false
        );
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        if (i % 2 === 0) ctx.stroke();
        else ctx.fill();

        li.x += li.toX * (speed * 0.05);
        li.y += li.toY * (speed * 0.05);

        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
      }

      setTimeout(particles, 1000 / rate);
    };

    const distanceBetween = (
      p1: { x: number; y: number },
      p2: { x: number; y: number }
    ) => {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    create();
    particles();

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
};

export default Background;
