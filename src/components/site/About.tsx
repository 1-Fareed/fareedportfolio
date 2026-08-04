import { about, stats, site } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading index="01" title="About" subtitle="Who I am and what I'm building toward." />

        <div className="mt-14 grid gap-12 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-6">
            {about.map((para, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-lg leading-relaxed text-muted-foreground">{para}</p>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <p className="font-serif text-2xl italic leading-snug text-foreground">
                “Build small, ship often, and let the work speak.”
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <dl className="surface rounded-3xl p-6">
              {[
                { k: "Based in", v: site.location },
                { k: "Studying", v: "B.Tech CSE, 2nd Year" },
                { k: "Focus", v: "AI, Automation, Product" },
                { k: "Open to", v: "Internships, collaborations" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex items-center justify-between gap-4 border-b border-border/70 py-3 last:border-0"
                >
                  <dt className="text-sm text-subtle">{row.k}</dt>
                  <dd className="text-right text-sm font-medium text-foreground">{row.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-5">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="bg-background">
              <div className="h-full px-5 py-8 text-center">
                <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-2 text-xs uppercase tracking-[0.14em] text-subtle">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
