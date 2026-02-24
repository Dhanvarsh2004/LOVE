import { useEffect, useRef } from "react";

// Draws floating hearts on a canvas overlay
const FloatingHeartsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const hearts: { x: number; y: number; size: number; speed: number; opacity: number; drift: number }[] = [];

    const createHeart = () => {
      hearts.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 20,
        size: Math.random() * 18 + 10,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
        drift: (Math.random() - 0.5) * 0.8,
      });
    };

    const drawHeart = (x: number, y: number, size: number, opacity: number) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = `hsl(345, 60%, 55%)`;
      ctx.beginPath();
      const topY = y - size / 2;
      ctx.moveTo(x, topY + size / 4);
      ctx.bezierCurveTo(x, topY, x - size / 2, topY, x - size / 2, topY + size / 4);
      ctx.bezierCurveTo(x - size / 2, topY + size / 2, x, topY + size * 0.6, x, topY + size * 0.8);
      ctx.bezierCurveTo(x, topY + size * 0.6, x + size / 2, topY + size / 2, x + size / 2, topY + size / 4);
      ctx.bezierCurveTo(x + size / 2, topY, x, topY, x, topY + size / 4);
      ctx.fill();
      ctx.restore();
    };

    let animationId: number;
    let frameCount = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frameCount++;
      if (frameCount % 30 === 0) createHeart();

      for (let i = hearts.length - 1; i >= 0; i--) {
        const h = hearts[i];
        h.y -= h.speed;
        h.x += h.drift;
        h.opacity -= 0.002;
        drawHeart(h.x, h.y, h.size, h.opacity);
        if (h.y < -30 || h.opacity <= 0) hearts.splice(i, 1);
      }
      animationId = requestAnimationFrame(animate);
    };

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

export default FloatingHeartsCanvas;
