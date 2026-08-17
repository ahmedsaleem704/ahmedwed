import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

type Bit = { left: number; delay: number; duration: number; size: number; opacity: number };

function makeBits(count: number, seedScale: number): Bit[] {
  return Array.from({ length: count }, (_, i) => ({
    left: ((i * 37 + seedScale * 13) % 100),
    delay: (i * 1.7) % 14,
    duration: 16 + ((i * 5) % 14),
    size: 10 + ((i * 7) % 16),
    opacity: 0.25 + ((i * 3) % 5) / 12,
  }));
}

/** Ambient floating hearts + sparkles. Client-only to avoid hydration noise. */
export function Ambience() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const hearts = makeBits(12, 1);
  const sparks = makeBits(20, 5);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((b, i) => (
        <Heart
          key={`h${i}`}
          className="absolute bottom-[-8vh] animate-float-up text-primary/40"
          style={{
            left: `${b.left}%`,
            width: b.size,
            height: b.size,
            opacity: b.opacity,
            animationDelay: `${b.delay}s`,
            animationDuration: `${b.duration}s`,
          }}
          fill="currentColor"
        />
      ))}
      {sparks.map((b, i) => (
        <span
          key={`s${i}`}
          className="absolute rounded-full bg-gold animate-twinkle"
          style={{
            left: `${(b.left * 1.3) % 100}%`,
            top: `${(b.delay * 7) % 100}%`,
            width: Math.max(3, b.size / 4),
            height: Math.max(3, b.size / 4),
            animationDelay: `${b.delay / 2}s`,
          }}
        />
      ))}
    </div>
  );
}