import { families } from "@/data/wedding";
import { Reveal, SectionHeading, FloralCorner } from "./primitives";

function initials(name: string) {
  return name
    .replace(/^(Mr\.|Mrs\.|Ms\.)\s*/, "")
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("");
}

function FamilyColumn({ title, members }: { title: string; members: typeof families.bride }) {
  return (
    <div>
      <h3 className="script text-center text-3xl text-gold">{title}</h3>
      <div className="mt-6 grid gap-4">
        {members.map((m, i) => (
          <Reveal key={m.name} delay={i * 70}>
            <article className="glass flex items-center gap-4 rounded-3xl p-5 lift">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-lg font-medium text-primary-foreground">
                {initials(m.name)}
              </span>
              <div>
                <p className="text-base text-foreground">{m.name}</p>
                <p className="text-xs tracking-[0.18em] uppercase text-gold-deep">{m.relation}</p>
                <p className="mt-1 text-sm text-muted-foreground">{m.note}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export function Family() {
  return (
    <section id="family" className="relative overflow-hidden px-4 py-20 sm:px-6">
      <FloralCorner className="left-0 bottom-0 scale-y-[-1] opacity-60" />
      <SectionHeading
        eyebrow="With blessings from"
        title="Meet the Family"
        subtitle="The people who made this celebration possible — and who can't wait to meet you."
      />
      <div className="mx-auto mt-12 grid max-w-5xl gap-10 md:grid-cols-2">
        <FamilyColumn title="Bride's Family" members={families.bride} />
        <FamilyColumn title="Groom's Family" members={families.groom} />
      </div>
    </section>
  );
}