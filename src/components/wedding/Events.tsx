import { useState } from "react";
import { CalendarDays, Clock, MapPin, Sun, Leaf, Music, Flame, Sparkles } from "lucide-react";
import { events, type WeddingEvent } from "@/data/wedding";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

const icons = { sun: Sun, leaf: Leaf, music: Music, flame: Flame, sparkles: Sparkles };

function EventDetails({ e }: { e: WeddingEvent }) {
  const Icon = icons[e.icon];
  return (
    <div className="grid gap-6 sm:grid-cols-[minmax(0,1fr)_1.1fr] sm:items-center">
      <img
        src={e.image}
        alt={`Illustration of the couple at their ${e.name} ceremony`}
        width={768}
        height={768}
        loading="lazy"
        className="mx-auto w-48 sm:w-full sm:max-w-xs drop-shadow-[0_20px_30px_rgba(180,120,120,0.22)]"
      />
      <div>
        <div className="flex items-center gap-2 text-gold-deep">
          <Icon className="h-5 w-5" />
          <h3 className="text-2xl font-light text-foreground sm:text-3xl">{e.name}</h3>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
        <dl className="mt-4 space-y-2 text-sm text-foreground/85">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
            <dt className="sr-only">Date</dt>
            <dd>{e.date}</dd>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 shrink-0 text-primary" />
            <dt className="sr-only">Time</dt>
            <dd>{e.time}</dd>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <dt className="sr-only">Venue</dt>
            <dd>{e.venue}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}

export function Events() {
  const [active, setActive] = useState(events[3]!.id);
  const activeEvent = events.find((e) => e.id === active) ?? events[0]!;

  return (
    <section id="events" className="relative px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Celebrations"
        title="Wedding Events"
        subtitle="Five days, five moods — here is everything you need to plan your celebration with us."
      />

      {/* Desktop: interactive horizontal timeline */}
      <div className="mx-auto mt-14 hidden max-w-5xl md:block">
        <div className="relative">
          <div className="gold-rule absolute inset-x-0 top-6" />
          <ol className="relative grid grid-cols-5">
            {events.map((e, i) => {
              const Icon = icons[e.icon];
              const isActive = e.id === active;
              return (
                <li key={e.id} className="flex flex-col items-center">
                  <button
                    type="button"
                    onClick={() => setActive(e.id)}
                    aria-pressed={isActive}
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300",
                      isActive
                        ? "scale-110 border-gold bg-gold-gradient text-primary-foreground shadow-[var(--shadow-float)]"
                        : "border-border bg-card text-gold-deep hover:scale-105",
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </button>
                  <span
                    className={cn(
                      "mt-3 text-sm tracking-wide transition-colors",
                      isActive ? "text-foreground" : "text-muted-foreground",
                    )}
                    style={{ transitionDelay: `${i * 20}ms` }}
                  >
                    {e.name}
                  </span>
                  <span className="text-xs text-muted-foreground/80">{e.date.split(" ").slice(0, 2).join(" ")}</span>
                </li>
              );
            })}
          </ol>
        </div>

        <Reveal className="glass-strong mt-10 rounded-[2.5rem] p-8">
          <EventDetails key={activeEvent.id} e={activeEvent} />
        </Reveal>
      </div>

      {/* Mobile: vertical timeline */}
      <ol className="relative mx-auto mt-12 max-w-xl space-y-6 border-l border-gold/40 pl-6 md:hidden">
        {events.map((e, i) => (
          <Reveal as="li" key={e.id} delay={i * 60} className="relative">
            <span className="absolute -left-[1.9rem] top-6 h-3 w-3 rounded-full bg-gold-gradient ring-4 ring-background" />
            <div className="glass rounded-3xl p-5">
              <EventDetails e={e} />
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}