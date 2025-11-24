"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VortexBackgroundProps {
  children?: React.ReactNode;
  particleCount?: number;
  baseHue?: number;
  className?: string;
}

export function VortexBackground({
  children,
  particleCount = 700,
  baseHue = 220,
  className,
}: VortexBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    interface Particle {
      x: number;
      y: number;
      angle: number;
      radius: number;
      speed: number;
      size: number;
      hue: number;
    }

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const particles: Particle[] = Array.from({ length: particleCount }, () => {
      const angle = Math.random() * Math.PI * 2;
      const radius = Math.random() * Math.min(canvas.width, canvas.height) * 0.4 + 50;
      return {
        x: centerX + Math.cos(angle) * radius,
        y: centerY + Math.sin(angle) * radius,
        angle,
        radius,
        speed: 0.002 + Math.random() * 0.003,
        size: Math.random() * 2 + 0.5,
        hue: baseHue + Math.random() * 60 - 30,
      };
    });

    const animate = () => {
      time += 0.01;

      // Create trailing effect
      ctx.fillStyle = "rgba(10, 10, 20, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update center based on canvas size
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      for (const particle of particles) {
        // Spiral inward/outward motion
        particle.angle += particle.speed;
        particle.radius += Math.sin(time + particle.angle) * 0.5;

        // Keep particles within bounds
        if (particle.radius < 20) particle.radius = Math.min(canvas.width, canvas.height) * 0.4;
        if (particle.radius > Math.min(canvas.width, canvas.height) * 0.5) particle.radius = 50;

        particle.x = cx + Math.cos(particle.angle) * particle.radius;
        particle.y = cy + Math.sin(particle.angle) * particle.radius;

        // Calculate distance from center for opacity
        const dist = Math.sqrt(Math.pow(particle.x - cx, 2) + Math.pow(particle.y - cy, 2));
        const maxDist = Math.min(canvas.width, canvas.height) * 0.5;
        const opacity = 0.3 + (1 - dist / maxDist) * 0.5;

        // Draw particle with glow
        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 3
        );
        gradient.addColorStop(0, `hsla(${particle.hue}, 80%, 60%, ${opacity})`);
        gradient.addColorStop(0.5, `hsla(${particle.hue}, 70%, 50%, ${opacity * 0.5})`);
        gradient.addColorStop(1, `hsla(${particle.hue}, 60%, 40%, 0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core particle
        ctx.fillStyle = `hsla(${particle.hue}, 90%, 70%, ${opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      }

      // Central glow
      const centerGlow = ctx.createRadialGradient(cx, cy, 0, cx, cy, 200);
      centerGlow.addColorStop(0, `hsla(${baseHue}, 100%, 70%, 0.1)`);
      centerGlow.addColorStop(0.5, `hsla(${baseHue + 30}, 80%, 50%, 0.05)`);
      centerGlow.addColorStop(1, "transparent");
      ctx.fillStyle = centerGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => resizeCanvas();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
    };
  }, [particleCount, baseHue]);

  return (
    <div className={cn("relative w-full min-h-screen overflow-hidden bg-[#0A0A14]", className)}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
