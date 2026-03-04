import { useEffect, useRef } from "react";

// Canvas-based firecracker/sparkle burst animation
const FirecrackerCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      life: number; maxLife: number; color: string; size: number;
    }

    const particles: Particle[] = [];
    const colors = [
      "hsl(345, 60%, 55%)", "hsl(340, 45%, 70%)", "hsl(38, 70%, 55%)",
      "hsl(30, 40%, 95%)", "hsl(350, 50%, 30%)", "hsl(20, 80%, 70%)",
    ];

    const burst = (x: number, y: number) => {
      for (let i = 0; i < 40; i++) {
        const angle = (Math.PI * 2 * i) / 40 + Math.random() * 0.3;
        const speed = Math.random() * 4 + 2;
        particles.push({
          x, y,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          life: 1,
          maxLife: 60 + Math.random() * 40,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 3 + 1,
        });
      }
    };

    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;

      // Periodic bursts
      if (frameCount % 90 === 0) {
        burst(
          Math.random() * canvas.width * 0.6 + canvas.width * 0.2,
          Math.random() * canvas.height * 0.4 + canvas.height * 0.1
        );
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.05; // gravity
        p.life -= 1 / p.maxLife;

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        if (p.life <= 0) particles.splice(i, 1);
      }

      animationId = requestAnimationFrame(animate);
    };

    // Initial bursts
    burst(canvas.width * 0.3, canvas.height * 0.3);
    burst(canvas.width * 0.7, canvas.height * 0.25);
    burst(canvas.width * 0.5, canvas.height * 0.2);
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
};

export default FirecrackerCanvas;
