"use client";

import { useEffect, useRef } from "react";

export default function SpiderWebBg() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Array<{ x: number; y: number; vx: number; vy: number }> = [];
    const maxParticles = 150; // Jumlah titik jaring
    const connectionDistance = 140; // Jarak maksimal jaring tersambung
    const mouse = { x: -1000, y: -1000 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < maxParticles; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.8, // Kecepatan gerak lambat & elegan
          vy: (Math.random() - 0.5) * 0.8,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    resizeCanvas();
    initParticles();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Gambar & Update Partikel
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        // Efek Memantul di Batas Layar
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(228, 228, 231, 0.25)"; // Warna titik putih zinc samar
        ctx.fill();
      });

      // Tarik Garis Jaring Laba-Laba antar titik & kursor
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        // Hitung jarak ke kursor mouse
        const dxMouse = p1.x - mouse.x;
        const dyMouse = p1.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);

        if (distMouse < connectionDistance + 40) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          // Jaring di sekitar kursor akan menyala warna Pink Rose mewah
          ctx.strokeStyle = `rgba(244, 63, 94, ${0.4 * (1 - distMouse / (connectionDistance + 40))})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Hitung jarak antar sesama titik
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            // Jaring utama antar titik berwarna ungu/rose gelap tipis
            ctx.strokeStyle = `rgba(145, 27, 73, ${0.12 * (1 - dist / connectionDistance)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-screen h-screen pointer-events-none z-0"
    />
  );
}