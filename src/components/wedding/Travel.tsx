import { Plane, TrainFront, Bus, Car, Hotel, MapPin } from "lucide-react";
import { travel } from "@/data/wedding";
import { Reveal, SectionHeading } from "./primitives";

const icons = { plane: Plane, train: TrainFront, bus: Bus, car: Car } as const;

export function Travel() {
  return (
    <section className="relative px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Plan your trip" title="Travel &amp; Stay" />

      <div className="mx-auto mt-12 max-w-5xl">
        <h3 className="script text-center text-3xl text-gold">Getting There</h3>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {travel.getting.map((g, i) => {
            const Icon = icons[g.icon as keyof typeof icons];
            return (
              <Reveal key={g.title} delay={i * 60}>
                <article className="glass h-full rounded-3xl p-5 lift">
                  <Icon className="h-6 w-6 text-gold-deep" />
                  <h4 className="mt-3 text-lg font-light text-foreground">{g.title}</h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{g.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <h3 className="script mt-14 text-center text-3xl text-gold">Where to Stay</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {travel.hotels.map((h, i) => (
            <Reveal key={h.name} delay={i * 70}>
              <article className="glass flex h-full flex-col rounded-3xl p-6 lift">
                <Hotel className="h-6 w-6 text-gold-deep" />
                <h4 className="mt-3 text-lg font-light text-foreground">{h.name}</h4>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  {h.location}
                </p>
                <p className="mt-3 text-sm text-foreground">{h.price}</p>
                <p className="text-xs text-muted-foreground">{h.distance}</p>
                <a
                  href={h.link}
                  className="mt-5 inline-flex justify-center rounded-full border border-gold/60 px-5 py-2.5 text-sm text-gold-deep transition-colors hover:bg-secondary"
                >
                  Book a room
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}