import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/wedding";
import { Reveal, SectionHeading } from "./primitives";

export function Faqs() {
  return (
    <section id="faqs" className="relative px-4 py-20 sm:px-6">
      <SectionHeading eyebrow="Good to know" title="Frequently Asked" />
      <Reveal className="mx-auto mt-12 max-w-3xl">
        <div className="glass-strong rounded-[2.5rem] px-6 py-2 sm:px-10">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`} className="border-border/60">
                <AccordionTrigger className="text-left text-base font-normal text-foreground hover:text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
    </section>
  );
}