import { useState, type FormEvent } from "react";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

type Entry = { id: number; name: string; message: string; emoji: string };

const emojis = ["❤️", "🌸", "✨", "🎉", "🙏", "💍"];

const seed: Entry[] = [
  { id: 1, name: "Neha & Karan", message: "So happy for you both. Jaipur is about to glow!", emoji: "✨" },
  { id: 2, name: "Uncle Prakash", message: "Blessings for a lifetime of laughter and good food.", emoji: "🙏" },
  { id: 3, name: "Team Theplanify", message: "Planning this one has been pure joy. Congratulations!", emoji: "🎉" },
];

export function Guestbook() {
  const [entries, setEntries] = useState<Entry[]>(seed);
  const [emoji, setEmoji] = useState("❤️");
  const [error, setError] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    const name = String(fd.get("name") ?? "").trim();
    const message = String(fd.get("message") ?? "").trim();
    if (name.length < 2 || message.length < 3) {
      setError("Please add your name and a short message.");
      return;
    }
    setError("");
    setEntries((prev) => [{ id: Date.now(), name, message, emoji }, ...prev]);
    form.reset();
  };

  return (
    <section className="relative px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Leave a note"
        title="Guestbook"
        subtitle="Write something the couple can read on their first anniversary."
      />

      <div className="mx-auto mt-12 grid max-w-5xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <form onSubmit={submit} className="glass-strong grid gap-4 rounded-[2rem] p-6">
            <div>
              <label htmlFor="gb-name" className="mb-1.5 block text-sm text-foreground">
                Your name
              </label>
              <input
                id="gb-name"
                name="name"
                className="w-full rounded-2xl border border-border/70 bg-white/70 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/40"
                placeholder="Who's writing?"
              />
            </div>
            <div>
              <label htmlFor="gb-message" className="mb-1.5 block text-sm text-foreground">
                Message
              </label>
              <textarea
                id="gb-message"
                name="message"
                rows={4}
                className="w-full resize-y rounded-2xl border border-border/70 bg-white/70 px-4 py-3 text-sm outline-none focus:border-gold focus:ring-2 focus:ring-gold/40"
                placeholder="Your wishes for Vijay & Rashima…"
              />
            </div>
            <fieldset>
              <legend className="mb-2 text-sm text-foreground">Add a reaction</legend>
              <div className="flex flex-wrap gap-2">
                {emojis.map((em) => (
                  <button
                    key={em}
                    type="button"
                    aria-pressed={emoji === em}
                    onClick={() => setEmoji(em)}
                    className={cn(
                      "h-11 w-11 rounded-full text-lg transition-transform hover:scale-110",
                      emoji === em ? "bg-[var(--gradient-gold)] scale-110" : "bg-white/60",
                    )}
                  >
                    {em}
                  </button>
                ))}
              </div>
            </fieldset>
            {error ? <p className="text-xs text-destructive">{error}</p> : null}
            <button
              type="submit"
              className="rounded-full bg-[var(--gradient-gold)] px-6 py-3 text-sm font-medium text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] active:scale-95"
            >
              Sign the guestbook
            </button>
          </form>
        </Reveal>

        <ul className="grid gap-4 sm:grid-cols-2 lg:content-start">
          {entries.map((en) => (
            <li
              key={en.id}
              className="glass animate-in fade-in slide-in-from-bottom-3 rounded-3xl p-5 lift"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-base text-foreground">{en.name}</p>
                <span className="text-xl" aria-hidden="true">
                  {en.emoji}
                </span>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{en.message}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}