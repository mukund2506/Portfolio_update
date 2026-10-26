import React, { useEffect, useRef } from 'react';

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle definition
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      baseAlpha: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = Math.min(Math.floor((width * height) / 13000), 75);
    const colors = ['#0284c7', '#0ea5e9', '#38bdf8', '#6366f1', '#4f46e5'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.75,
        vy: (Math.random() - 0.5) * 0.75,
        radius: Math.random() * 2 + 1.2,
        baseAlpha: Math.random() * 0.4 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    // Mouse tracking for interactive connection
    const mouse = { x: -1000, y: -1000, maxDist: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const maxLineDist = 125;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.vx;
        p.y += p.vy;

        // Bounce on edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.baseAlpha;
        ctx.fill();

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxLineDist) {
            const alpha = (1 - dist / maxLineDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = '#0284c7';
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Connect particle to mouse cursor
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDist < mouse.maxDist) {
          const mAlpha = (1 - mDist / mouse.maxDist) * 0.45;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = '#0284c7';
          ctx.globalAlpha = mAlpha;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 1;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      {/* Soft atmospheric ambient glow orbs */}
      <div 
        className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-sky-200/40 rounded-full blur-[140px] pointer-events-none" 
      />
      <div 
        className="absolute bottom-20 right-1/4 w-[450px] h-[450px] bg-blue-200/40 rounded-full blur-[140px] pointer-events-none" 
      />
      <div 
        className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Interactive Canvas */}
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  );
};
