import { MapPin, CalendarClock, Navigation } from "lucide-react";
import { venue } from "@/data/wedding";
import { Reveal, SectionHeading } from "./primitives";

export function Venue() {
  return (
    <section id="venue" className="relative px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Where the magic happens" title="The Venue" />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="glass-strong overflow-hidden rounded-[2.5rem]">
            <img
              src={venue.image}
              alt={`${venue.name} decorated with a floral mandap at dusk`}
              width={1280}
              height={800}
              loading="lazy"
              className="h-56 w-full object-cover sm:h-72"
            />
            <div className="p-6 sm:p-8">
              <h3 className="text-2xl font-light text-foreground">{venue.name}</h3>
              <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {venue.address}
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                <CalendarClock className="h-4 w-4 shrink-0 text-primary" />
                {venue.dateTime}
              </p>
              <a
                href={venue.directions}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
              >
                <Navigation className="h-4 w-4" />
                Get Directions
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="glass-strong h-full overflow-hidden rounded-[2.5rem] p-2">
            <iframe
              title={`Map showing ${venue.name}`}
              src={venue.mapEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full rounded-[2rem] border-0 lg:h-full lg:min-h-[26rem]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}