import { motion, useReducedMotion } from "framer-motion";
import { Github, ArrowUpRight } from "lucide-react";
import { useRef, useState, type MouseEvent } from "react";

import { projects } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function Spotlight({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: -200, y: -200, on: false });

  function onMove(e: MouseEvent) {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top, on: true });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
      className="surface hover-lift relative h-full overflow-hidden rounded-3xl"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-500"
        style={{
          opacity: pos.on ? 1 : 0,
          background: `radial-gradient(340px circle at ${pos.x}px ${pos.y}px, color-mix(in oklab, var(--color-primary) 14%, transparent), transparent 70%)`,
        }}
      />
      <div className="relative">{children}</div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="03"
          title="Projects"
          subtitle="Selected work — ideas turned into shipped software."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-6">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.1}
              className={project.featured ? "md:col-span-6" : "md:col-span-3"}
            >
              <Spotlight>
                <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_1fr] md:p-12">
                  <div>
                    <span className="font-mono text-xs text-subtle">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                      {project.summary}
                    </p>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-subtle">
                      {project.detail}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-accent"
                      >
                        Live demo
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm text-foreground transition-colors hover:border-primary/50 hover:text-primary"
                      >
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between gap-6">
                    <motion.div
                      aria-hidden
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                      className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted/40"
                    >
                      <div className="grid-lines absolute inset-0 opacity-40" />
                      <div className="absolute inset-0 bg-[radial-gradient(70%_70%_at_30%_20%,color-mix(in_oklab,var(--color-primary)_22%,transparent),transparent_70%)]" />
                      <div className="absolute inset-x-6 bottom-6 space-y-2">
                        <div className="h-2 w-2/3 rounded-full bg-foreground/20" />
                        <div className="h-2 w-1/2 rounded-full bg-foreground/10" />
                        <div className="h-2 w-1/3 rounded-full bg-foreground/10" />
                      </div>
                    </motion.div>

                    <ul className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Spotlight>
            </Reveal>
          ))}

          <Reveal delay={0.15} className="md:col-span-6">
            <div className="rounded-3xl border border-dashed border-border p-10 text-center">
              <p className="text-sm text-muted-foreground">
                More projects are in progress — automation workflows, AI tooling, and systems
                fundamentals.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
