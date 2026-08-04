import { skillGroups } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  return (
    <section id="skills" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="04"
          title="Skills"
          subtitle="The tools and fundamentals behind the work."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.07}>
              <div className="surface hover-lift h-full rounded-3xl p-7">
                <h3 className="text-sm uppercase tracking-[0.16em] text-subtle">{group.label}</h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-muted/40 px-3.5 py-1.5 text-sm text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
