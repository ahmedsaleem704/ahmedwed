import { useEffect, useState } from "react";
import { couple } from "@/data/wedding";
import { Reveal } from "./primitives";

function diff(target: number) {
  const ms = Math.max(0, target - Date.now());
  return {
    done: ms === 0,
    days: Math.floor(ms / 86400000),
    hours: Math.floor(ms / 3600000) % 24,
    minutes: Math.floor(ms / 60000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
  };
}

export function Countdown() {
  const target = new Date(couple.weddingDate).getTime();
  const [t, setT] = useState(() => diff(target));
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const id = setInterval(() => setT(diff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "Days", value: t.days },
    { label: "Hours", value: t.hours },
    { label: "Minutes", value: t.minutes },
    { label: "Seconds", value: t.seconds },
  ];

  return (
    <section aria-labelledby="countdown-title" className="relative px-4 py-16 sm:px-6">
      <Reveal className="mx-auto max-w-4xl">
        <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-8 text-center sm:p-12">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-peach/50 blur-3xl" />
          <h2 id="countdown-title" className="relative text-2xl font-light text-foreground sm:text-3xl">
            {t.done ? "Today is the day! ❤️" : "Counting down to forever"}
          </h2>
          <div className="gold-rule mx-auto my-5 w-32" />

          {t.done ? (
            <p className="script relative text-3xl text-gold sm:text-5xl">
              {couple.groom} weds {couple.bride}
            </p>
          ) : (
            <div className="relative grid grid-cols-4 gap-2 sm:gap-4">
              {units.map((u) => (
                <div key={u.label} className="glass rounded-3xl px-1 py-4 sm:px-4 sm:py-6">
                  <div className="text-2xl font-light tabular-nums text-gold sm:text-5xl">
                    {mounted ? String(u.value).padStart(2, "0") : "--"}
                  </div>
                  <div className="mt-1 text-[0.6rem] tracking-[0.2em] uppercase text-muted-foreground sm:text-xs">
                    {u.label}
                  </div>
                </div>
              ))}
            </div>
          )}
          <p className="relative mt-6 text-xs tracking-[0.25em] uppercase text-muted-foreground">
            {couple.weddingDateLabel} · 7:30 PM
          </p>
        </div>
      </Reveal>
    </section>
  );
}