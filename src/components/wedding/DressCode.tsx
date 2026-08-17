import { Shirt } from "lucide-react";
import { events } from "@/data/wedding";
import { Reveal, SectionHeading } from "./primitives";

export function DressCode() {
  return (
    <section className="relative px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="What to wear"
        title="Dress Code"
        subtitle="A gentle colour guide for each function — come as festive as you like."
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {events.map((e, i) => (
          <Reveal key={e.id} delay={i * 70}>
            <article className="glass h-full rounded-3xl p-6 lift">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-light text-foreground">{e.name}</h3>
                <Shirt className="h-5 w-5 text-gold-deep" />
              </div>
              <div className="mt-4 flex gap-2" aria-hidden="true">
                {e.palette.map((c) => (
                  <span
                    key={c}
                    className="h-8 w-8 rounded-full border border-white/70 shadow-[var(--shadow-soft)]"
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.dressCode}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}