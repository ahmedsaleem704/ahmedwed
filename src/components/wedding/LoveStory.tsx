import { Heart } from "lucide-react";
import { loveStory } from "@/data/wedding";
import { Reveal, SectionHeading, FloralCorner } from "./primitives";
import { cn } from "@/lib/utils";

export function LoveStory() {
  return (
    <section id="story" className="relative overflow-hidden px-4 py-20 sm:px-6">
      <FloralCorner className="right-0 top-8 scale-x-[-1] opacity-70" />
      <SectionHeading
        eyebrow="Once upon a time"
        title="Our Love Story"
        subtitle="Every great celebration begins with a small, ordinary moment."
      />

      <ol className="relative mx-auto mt-14 max-w-4xl">
        <span className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent md:left-1/2" />
        {loveStory.map((m, i) => (
          <Reveal as="li" key={m.title} delay={i * 60} className="relative mb-10 pl-12 md:pl-0">
            <span className="absolute left-[0.55rem] top-8 z-10 flex h-4 w-4 items-center justify-center rounded-full bg-[var(--gradient-gold)] ring-4 ring-background md:left-1/2 md:-translate-x-1/2">
              <Heart className="h-2 w-2 text-primary-foreground" fill="currentColor" />
            </span>
            <div
              className={cn(
                "md:w-[calc(50%-2.5rem)]",
                i % 2 === 0 ? "md:mr-auto md:text-right" : "md:ml-auto",
              )}
            >
              <div className="glass overflow-hidden rounded-3xl lift">
                <img
                  src={m.image}
                  alt={`${m.title} — illustration of Vijay and Rashima`}
                  loading="lazy"
                  className="h-44 w-full bg-white/50 object-contain p-3"
                />
                <div className="p-5">
                  <p className="text-xs tracking-[0.25em] uppercase text-gold-deep">{m.date}</p>
                  <h3 className="mt-1 text-2xl font-light text-foreground">{m.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.text}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}