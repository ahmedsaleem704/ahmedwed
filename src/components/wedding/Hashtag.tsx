import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { couple } from "@/data/wedding";
import { Reveal } from "./primitives";

export function Hashtag() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(couple.hashtag);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] px-6 py-12 text-center">
          <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-lavender/60 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-blush/60 blur-3xl" />
          <p className="relative text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Tag your photos with
          </p>
          <p className="relative mt-3 text-4xl font-light text-gold animate-shimmer sm:text-6xl">
            {couple.hashtag}
          </p>
          <button
            type="button"
            onClick={copy}
            className="glass relative mt-7 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-foreground transition-transform hover:scale-105 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 animate-in zoom-in text-primary" /> Copied!
              </>
            ) : (
              <>
                <Copy className="h-4 w-4" /> Copy Hashtag
              </>
            )}
          </button>
        </div>
      </Reveal>
    </section>
  );
}