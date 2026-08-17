import { ChevronDown, Sparkles } from "lucide-react";
import { brand, couple } from "@/data/wedding";
import { FloralCorner } from "./primitives";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-24 pb-16 sm:px-6"
    >
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-blush/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-1/3 h-96 w-96 rounded-full bg-lavender/50 blur-3xl" />
      <FloralCorner className="left-0 top-16" />
      <FloralCorner className="right-0 bottom-0 scale-x-[-1] scale-y-[-1]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
        <div className="text-center md:text-left">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs tracking-[0.28em] uppercase text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            Save the date
          </div>

          <h1 className="mt-5 text-5xl leading-[1.05] font-light text-foreground sm:text-6xl lg:text-7xl">
            {couple.groom}
            <span className="script mx-3 text-gold animate-shimmer">&amp;</span>
            {couple.bride}
          </h1>

          <p className="script mt-3 text-2xl text-primary sm:text-3xl">{couple.tagline}</p>

          <div className="gold-rule my-6 w-48 md:mx-0 mx-auto" />

          <p className="text-sm tracking-[0.2em] uppercase text-muted-foreground">
            {couple.weddingDateLabel} · Jaipur, India
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href="#story"
              className="rounded-full bg-gold-gradient px-7 py-3 text-sm font-medium tracking-wide text-primary-foreground shadow-[var(--shadow-float)] transition-transform hover:scale-105 active:scale-95"
            >
              Explore Our Story
            </a>
            <a
              href="#rsvp"
              className="glass rounded-full px-7 py-3 text-sm font-medium text-foreground transition-transform hover:scale-105 active:scale-95"
            >
              RSVP Now
            </a>
          </div>

          <div className="glass mt-10 inline-block rounded-3xl px-6 py-4 text-center md:text-left">
            <p className="text-lg font-semibold tracking-wide text-foreground">{brand.name}</p>
            <p className="text-xs text-muted-foreground">{brand.descriptor}</p>
            <p className="mt-1 text-xs tracking-[0.3em] uppercase text-gold">{brand.status}</p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute inset-6 rounded-full bg-gold-gradient opacity-25 blur-3xl" />
          <img
            src={couple.heroImage}
            alt={`Illustration of ${couple.groom} and ${couple.bride} in Indian wedding attire`}
            width={1024}
            height={1024}
            fetchPriority="high"
            className="relative animate-sway drop-shadow-[0_30px_45px_rgba(180,120,120,0.28)]"
          />
        </div>
      </div>

      <a
        href="#story"
        aria-label="Scroll to our story"
        className="absolute inset-x-0 bottom-6 z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-full text-gold-deep"
      >
        <ChevronDown className="h-6 w-6 animate-bounce" />
      </a>
    </section>
  );
}