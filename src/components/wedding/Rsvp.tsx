import { useState, type FormEvent } from "react";
import { Heart, Loader2, CheckCircle2 } from "lucide-react";
import { Reveal, SectionHeading } from "./primitives";
import { cn } from "@/lib/utils";

type Errors = Partial<Record<"name" | "phone" | "guests" | "attendance" | "meal", string>>;

const field =
  "w-full rounded-2xl border border-border/70 bg-white/70 px-4 py-3 text-sm text-foreground outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-gold focus:ring-2 focus:ring-gold/40";

export function Rsvp() {
  const [state, setState] = useState<"idle" | "loading" | "done">("idle");
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const next: Errors = {};
    const name = String(fd.get("name") ?? "").trim();
    const phone = String(fd.get("phone") ?? "").trim();
    const guests = Number(fd.get("guests") ?? 0);
    if (name.length < 2) next.name = "Please tell us your name.";
    if (!/^[+\d][\d\s-]{7,15}$/.test(phone)) next.phone = "Enter a valid phone number.";
    if (!guests || guests < 1 || guests > 12) next.guests = "Between 1 and 12 guests, please.";
    if (!fd.get("attendance")) next.attendance = "Let us know if you can make it.";
    if (!fd.get("meal")) next.meal = "Pick a meal preference.";
    setErrors(next);
    if (Object.keys(next).length) return;

    setState("loading");
    window.setTimeout(() => setState("done"), 1100);
  };

  return (
    <section id="rsvp" className="relative px-4 py-20 sm:px-6">
      <SectionHeading
        eyebrow="Will you join us?"
        title="RSVP"
        subtitle="We can't wait to celebrate with you! Kindly respond before 15 November 2026."
      />

      <Reveal className="mx-auto mt-12 max-w-2xl">
        <div className="glass-strong rounded-[2.5rem] p-6 sm:p-10">
          {state === "done" ? (
            <div className="py-10 text-center animate-in fade-in zoom-in-95">
              <CheckCircle2 className="mx-auto h-14 w-14 text-gold animate-twinkle" />
              <h3 className="mt-4 text-3xl font-light text-foreground">Thank you!</h3>
              <p className="script mt-2 text-2xl text-primary">Your RSVP is with us ❤️</p>
              <p className="mt-3 text-sm text-muted-foreground">
                We'll be in touch with the finer details closer to the date.
              </p>
              <button
                type="button"
                onClick={() => setState("idle")}
                className="glass mt-6 rounded-full px-6 py-2 text-sm"
              >
                Submit another response
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="grid gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="rsvp-name" className="mb-1.5 block text-sm text-foreground">
                    Guest name
                  </label>
                  <input id="rsvp-name" name="name" className={field} placeholder="Your full name" aria-invalid={!!errors.name} />
                  {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
                </div>
                <div>
                  <label htmlFor="rsvp-phone" className="mb-1.5 block text-sm text-foreground">
                    Phone number
                  </label>
                  <input id="rsvp-phone" name="phone" type="tel" className={field} placeholder="+91 98765 43210" aria-invalid={!!errors.phone} />
                  {errors.phone ? <p className="mt-1 text-xs text-destructive">{errors.phone}</p> : null}
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="rsvp-guests" className="mb-1.5 block text-sm text-foreground">
                    Number of guests
                  </label>
                  <input id="rsvp-guests" name="guests" type="number" min={1} max={12} defaultValue={1} className={field} aria-invalid={!!errors.guests} />
                  {errors.guests ? <p className="mt-1 text-xs text-destructive">{errors.guests}</p> : null}
                </div>
                <div>
                  <label htmlFor="rsvp-meal" className="mb-1.5 block text-sm text-foreground">
                    Meal preference
                  </label>
                  <select id="rsvp-meal" name="meal" defaultValue="" className={field} aria-invalid={!!errors.meal}>
                    <option value="" disabled>
                      Choose one
                    </option>
                    <option>Vegetarian</option>
                    <option>Non-Vegetarian</option>
                    <option>Vegan</option>
                    <option>Other</option>
                  </select>
                  {errors.meal ? <p className="mt-1 text-xs text-destructive">{errors.meal}</p> : null}
                </div>
              </div>

              <fieldset>
                <legend className="mb-2 text-sm text-foreground">Attendance</legend>
                <div className="grid gap-3 sm:grid-cols-2">
                  {["Joyfully Accept", "Regretfully Decline"].map((opt) => (
                    <label
                      key={opt}
                      className="glass flex cursor-pointer items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-transform hover:scale-[1.02] has-[:checked]:border-gold has-[:checked]:ring-2 has-[:checked]:ring-gold/40"
                    >
                      <input type="radio" name="attendance" value={opt} className="accent-[oklch(0.68_0.13_12)]" />
                      {opt}
                    </label>
                  ))}
                </div>
                {errors.attendance ? <p className="mt-1 text-xs text-destructive">{errors.attendance}</p> : null}
              </fieldset>

              <div>
                <label htmlFor="rsvp-message" className="mb-1.5 block text-sm text-foreground">
                  Message for the couple <span className="text-muted-foreground">(optional)</span>
                </label>
                <textarea id="rsvp-message" name="message" rows={4} className={cn(field, "resize-y")} placeholder="Send them your blessings…" />
              </div>

              <button
                type="submit"
                disabled={state === "loading"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] px-8 py-3.5 text-sm font-medium text-primary-foreground shadow-[var(--shadow-float)] transition-transform hover:scale-[1.02] active:scale-95 disabled:opacity-70"
              >
                {state === "loading" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Heart className="h-4 w-4" fill="currentColor" />}
                {state === "loading" ? "Sending…" : "Send my RSVP"}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </section>
  );
}