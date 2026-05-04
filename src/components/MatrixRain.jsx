import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const ref = useRef();

  useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");

    const resize = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };
    resize();

    const cols = Math.floor(c.width / 18);
    const drops = Array(cols).fill(1);
    const chars = "アイウエオカキクケコ01アBCDEFGHIJKLMNOP∑∏∫∂∇⟨⟩←→⊕⊗01010011";

    const iv = setInterval(() => {
      ctx.fillStyle = "rgba(11,12,22,0.055)";
      ctx.fillRect(0, 0, c.width, c.height);
      drops.forEach((y, i) => {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const r = Math.random();
        ctx.fillStyle =
          r > 0.97 ? "#ffffff" :
          r > 0.88 ? "#60a5fa" :
          r > 0.65 ? "#1d3a7a" : "#0d1530";
        ctx.font = `${Math.random() > 0.92 ? "bold " : ""}11px monospace`;
        ctx.fillText(ch, i * 18, y * 18);
        drops[i] = (y * 18 > c.height && Math.random() > 0.975) ? 0 : y + 1;
      });
    }, 50);

    window.addEventListener("resize", resize);
    return () => {
      clearInterval(iv);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed", inset: 0,
        opacity: 0.2, zIndex: 0, pointerEvents: "none",
      }}
    />
  );
}
