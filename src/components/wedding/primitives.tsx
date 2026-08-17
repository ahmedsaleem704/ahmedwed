import { type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "li" | "section" | "article";
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <Reveal className={cn("mx-auto max-w-2xl text-center", className)}>
      {eyebrow ? (
        <p className="script text-2xl text-gold sm:text-3xl">{eyebrow}</p>
      ) : null}
      <h2 className="mt-1 text-3xl font-light text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      <div className="gold-rule mx-auto mt-4 w-40" />
      {subtitle ? (
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p>
      ) : null}
    </Reveal>
  );
}

export function FloralCorner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" aria-hidden="true" className={cn("pointer-events-none absolute h-40 w-40 text-gold/45 sm:h-56 sm:w-56", className)}>
      <g fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M4 4C60 8 110 40 140 96c14 26 20 54 20 84" />
        <path d="M8 46c34 4 62 24 80 54" />
        <path d="M46 8c6 34 26 62 56 80" />
        {[
          [40, 40],
          [82, 66],
          [118, 104],
          [142, 150],
          [66, 22],
          [22, 66],
        ].map(([x, y], i) => (
          <g key={i} transform={`translate(${x} ${y})`}>
            {[0, 60, 120, 180, 240, 300].map((r) => (
              <ellipse key={r} cx="0" cy="-7" rx="3.4" ry="7" transform={`rotate(${r})`} />
            ))}
            <circle r="1.8" fill="currentColor" stroke="none" />
          </g>
        ))}
      </g>
    </svg>
  );
}