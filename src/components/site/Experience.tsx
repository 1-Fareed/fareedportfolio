import { experience } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="02"
          title="Experience"
          subtitle="Learning in the open, one build at a time."
        />

        <ol className="mt-14 space-y-4">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 0.08} as="li">
              <article className="surface hover-lift rounded-3xl p-7 md:p-9">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm text-primary">{item.org}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {item.status}
                    </span>
                    <span className="font-mono text-xs text-subtle">{item.period}</span>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
