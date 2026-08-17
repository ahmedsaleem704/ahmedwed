import { useState } from "react";
import { Share2, Check } from "lucide-react";
import { brand, couple } from "@/data/wedding";
import { Reveal, FloralCorner } from "./primitives";

export function ThankYou() {
  const [shared, setShared] = useState(false);

  const share = async () => {
    const data = {
      title: `${couple.groom} weds ${couple.bride}`,
      text: `${couple.tagline} Join us on ${couple.weddingDateLabel}.`,
      url: typeof window !== "undefined" ? window.location.href : "",
    };
    try {
      if (typeof navigator !== "undefined" && navigator.share) {
        await navigator.share(data);
      } else {
        await navigator.clipboard.writeText(data.url);
      }
      setShared(true);
      window.setTimeout(() => setShared(false), 2200);
    } catch {
      /* dismissed */
    }
  };

  return (
    <footer className="relative overflow-hidden px-4 pb-16 pt-20 text-center sm:px-6">
      <FloralCorner className="left-0 top-4 opacity-70" />
      <FloralCorner className="right-0 top-4 scale-x-[-1] opacity-70" />

      <Reveal className="mx-auto max-w-3xl">
        <svg viewBox="0 0 120 60" aria-hidden="true" className="mx-auto h-14 w-28 text-gold">
          <circle cx="46" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="74" cy="30" r="20" fill="none" stroke="currentColor" strokeWidth="2.5" />
        </svg>

        <h2 className="mt-6 text-3xl font-light text-foreground sm:text-4xl">
          Thank You For Being Part of Our Story
        </h2>
        <div className="gold-rule mx-auto my-6 w-40" />
        <p className="script text-4xl text-gold sm:text-5xl">
          {couple.groom} &amp; {couple.bride} ❤️
        </p>

        <button
          type="button"
          onClick={share}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-float)] transition-transform hover:scale-105 active:scale-95"
        >
          {shared ? <Check className="h-4 w-4" /> : <Share2 className="h-4 w-4" />}
          {shared ? "Link copied!" : "Share the Love"}
        </button>

        <div className="mt-12 text-xs text-muted-foreground">
          <p className="text-sm text-foreground">{brand.name}</p>
          <p>{brand.descriptor}</p>
          <p className="mt-1 tracking-[0.3em] uppercase text-gold-deep">{brand.status}</p>
        </div>
      </Reveal>
    </footer>
  );
}