import { useCallback, useEffect, useRef, useState } from "react";
import { Sparkles } from "lucide-react";
import { couple } from "@/data/wedding";
import { Reveal, SectionHeading } from "./primitives";

const W = 640;
const H = 320;

export function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);
  const [percent, setPercent] = useState(0);
  const [revealed, setRevealed] = useState(false);

  const paint = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, "#e9c9d4");
    grad.addColorStop(0.5, "#d9c39a");
    grad.addColorStop(1, "#cbb6e0");
    ctx.globalCompositeOperation = "source-over";
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "rgba(255,255,255,0.55)";
    for (let i = 0; i < 60; i++) {
      const x = (i * 97) % W;
      const y = (i * 53) % H;
      ctx.beginPath();
      ctx.arc(x, y, 2 + (i % 3), 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = "rgba(90,50,60,0.75)";
    ctx.font = "600 24px Karla, sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("Scratch to reveal our special date!", W / 2, H / 2);
  }, []);

  useEffect(() => {
    paint();
  }, [paint]);

  const measure = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const { data } = ctx.getImageData(0, 0, W, H);
    let clear = 0;
    for (let i = 3; i < data.length; i += 4 * 24) if (data[i]! < 40) clear++;
    const total = Math.ceil(data.length / (4 * 24));
    const pct = Math.round((clear / total) * 100);
    setPercent(pct);
    if (pct > 55) setRevealed(true);
  }, []);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const x = ((clientX - rect.left) / rect.width) * W;
    const y = ((clientY - rect.top) / rect.height) * H;
    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 28, 0, Math.PI * 2);
    ctx.fill();
  };

  useEffect(() => {
    if (!revealed) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx) return;
    let frame = 0;
    const id = setInterval(() => {
      frame++;
      ctx.globalCompositeOperation = "destination-out";
      ctx.beginPath();
      ctx.arc(W / 2, H / 2, frame * 26, 0, Math.PI * 2);
      ctx.fill();
      if (frame > 18) clearInterval(id);
    }, 24);
    setPercent(100);
    return () => clearInterval(id);
  }, [revealed]);

  return (
    <section className="relative px-4 py-16 sm:px-6">
      <SectionHeading eyebrow="A little surprise" title="Save the Date" />

      <Reveal className="mx-auto mt-10 max-w-2xl">
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-4 sm:p-6">
          <div className="relative aspect-[2/1] w-full overflow-hidden rounded-3xl bg-[var(--gradient-romance)]">
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              {revealed ? (
                <Sparkles className="mb-2 h-7 w-7 animate-twinkle text-gold" />
              ) : null}
              <p className="script text-4xl text-gold sm:text-6xl">Save the Date ❤️</p>
              <p className="mt-2 text-lg tracking-[0.2em] uppercase text-foreground sm:text-xl">
                {couple.weddingDateLabel}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Rambagh Heritage Palace, Jaipur</p>
            </div>
            <canvas
              ref={canvasRef}
              width={W}
              height={H}
              aria-label="Scratch card. Use the reveal button if you prefer."
              className="absolute inset-0 h-full w-full cursor-crosshair touch-none"
              onPointerDown={(e) => {
                drawing.current = true;
                e.currentTarget.setPointerCapture(e.pointerId);
                scratch(e.clientX, e.clientY);
              }}
              onPointerMove={(e) => {
                if (!drawing.current) return;
                scratch(e.clientX, e.clientY);
              }}
              onPointerUp={() => {
                drawing.current = false;
                measure();
              }}
              onPointerLeave={() => {
                if (drawing.current) measure();
                drawing.current = false;
              }}
            />
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex-1 min-w-40">
              <div className="h-2 overflow-hidden rounded-full bg-secondary">
                <div
                  className="h-full rounded-full bg-[var(--gradient-gold)] transition-[width] duration-300"
                  style={{ width: `${percent}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{percent}% revealed</p>
            </div>
            <button
              type="button"
              onClick={() => setRevealed(true)}
              className="glass rounded-full px-5 py-2 text-sm text-foreground transition-transform hover:scale-105"
            >
              Reveal it for me
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}