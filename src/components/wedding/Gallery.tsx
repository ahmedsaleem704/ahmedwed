import { useEffect, useState } from "react";
import { Heart, X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "@/data/wedding";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

export function Gallery() {
  const [open, setOpen] = useState<number | null>(null);
  const [liked, setLiked] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => ((i ?? 0) + 1) % gallery.length);
      if (e.key === "ArrowLeft") setOpen((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section id="gallery" className="relative px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Moments"
        title="Our Gallery"
        subtitle="A few of our favourite frames — more will be added after the celebrations."
      />

      <div className="mx-auto mt-12 max-w-5xl columns-2 gap-4 md:columns-3 [&>*]:mb-4">
        {gallery.map((g, i) => (
          <Reveal key={i} delay={(i % 3) * 80} className="break-inside-avoid">
            <figure className="group relative overflow-hidden rounded-3xl bg-card shadow-[var(--shadow-soft)] lift">
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="block w-full"
                aria-label={`Open image: ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/25 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
              <button
                type="button"
                onClick={() => setLiked((l) => ({ ...l, [i]: !l[i] }))}
                aria-label={liked[i] ? "Remove from favourites" : "Add to favourites"}
                aria-pressed={!!liked[i]}
                className="glass absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full"
              >
                <Heart
                  className={cn(
                    "h-4 w-4 transition-transform duration-300",
                    liked[i] ? "scale-125 text-primary" : "text-muted-foreground",
                  )}
                  fill={liked[i] ? "currentColor" : "none"}
                />
              </button>
            </figure>
          </Reveal>
        ))}
      </div>

      {open !== null ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          className="fixed inset-0 z-[60] flex items-center justify-center bg-rose-ink/70 p-4 backdrop-blur-md animate-in fade-in"
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(null)}
            className="glass absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => ((i ?? 0) - 1 + gallery.length) % gallery.length);
            }}
            className="glass absolute left-3 flex h-11 w-11 items-center justify-center rounded-full sm:left-8"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <img
            src={gallery[open]!.src}
            alt={gallery[open]!.alt}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[82vh] max-w-full rounded-3xl bg-card object-contain shadow-[var(--shadow-float)] animate-in zoom-in-95"
          />
          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              setOpen((i) => ((i ?? 0) + 1) % gallery.length);
            }}
            className="glass absolute right-3 flex h-11 w-11 items-center justify-center rounded-full sm:right-8"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      ) : null}
    </section>
  );
}