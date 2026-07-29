import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fareed Manawwar — AI Agent Builder & Prompt Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Fareed Manawwar — B.Tech student at AKTU, aspiring AI agent builder and prompt engineer. Skills, projects, resume, and contact.",
      },
      { property: "og:title", content: "Fareed Manawwar — AI Agent Builder & Prompt Engineer" },
      {
        property: "og:description",
        content: "Introductory portfolio: profile, skills, projects, goals, and resume.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const skills = [
  { name: "C", level: "Proficient" },
  { name: "C++", level: "Working knowledge" },
  { name: "Python", level: "Learning" },
  { name: "Prompt Engineering", level: "Practicing" },
  { name: "AI Agent Design", level: "Exploring" },
];

const focusAreas = [
  {
    code: "01",
    title: "AI Agent Architecture",
    body: "Studying agent loops, tool use, memory design, and orchestration patterns for autonomous systems.",
  },
  {
    code: "02",
    title: "Prompt Engineering",
    body: "Crafting structured, context-aware prompts to steer model behavior for reliable, task-specific outputs.",
  },
  {
    code: "03",
    title: "Programming Fundamentals",
    body: "Strengthening algorithmic thinking in C and C++, and expanding into Python for AI tooling.",
  },
];

function Index() {
  return (
    <main className="relative min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-20 border-b border-border/60 bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-sm tracking-widest text-primary text-glow">
            &lt;FM/&gt;
          </a>
          <nav className="hidden gap-8 font-display text-xs uppercase tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#about" className="hover:text-primary transition">About</a>
            <a href="#skills" className="hover:text-primary transition">Skills</a>
            <a href="#focus" className="hover:text-primary transition">Focus</a>
            <a href="#projects" className="hover:text-primary transition">Projects</a>
            <a href="#contact" className="hover:text-primary transition">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-md border border-primary/50 px-3 py-1.5 font-display text-[11px] uppercase tracking-[0.2em] text-primary hover:shadow-glow transition"
          >
            Connect
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-24 pb-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <span className="chip">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-glow" />
              System online — Portfolio v1.0
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-foreground md:text-7xl">
              Fareed
              <br />
              <span className="text-primary text-glow">Manawwar</span>
              <span
                aria-hidden
                className="ml-2 inline-block h-[0.9em] w-[0.5ch] translate-y-1 bg-primary align-middle"
                style={{ animation: "blink 1s steps(2) infinite" }}
              />
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              AI Agent Builder <span className="text-primary">/</span> Prompt Engineer in training.
              B.Tech (2nd year) student at Dr. A.P.J. Abdul Kalam Technical University, engineering
              a path toward autonomous, reliable AI systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-md bg-primary px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] text-primary-foreground shadow-glow hover:opacity-90 transition"
              >
                View Work
              </a>
              <a
                href="#resume"
                className="rounded-md border border-accent/60 px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] text-accent hover:shadow-glow-accent transition"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="surface-card p-6">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <span className="font-display text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                identity.sys
              </span>
              <span className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-accent/70" />
                <span className="h-2 w-2 rounded-full bg-primary/70" />
                <span className="h-2 w-2 rounded-full bg-muted-foreground/40" />
              </span>
            </div>
            <dl className="mt-4 space-y-3 font-display text-sm">
              <Row k="name" v="Fareed Manawwar" />
              <Row k="role" v="AI Agent Builder" />
              <Row k="edu" v="B.Tech · AKTU · Year 2" />
              <Row k="stack" v="C · C++ · Python" />
              <Row k="focus" v="Prompt Engineering" />
              <Row k="status" v={<span className="text-primary">available</span>} />
            </dl>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" label="01 / About">
        <div className="grid gap-10 md:grid-cols-2">
          <p className="text-lg leading-relaxed text-foreground/90">
            I am a second-year B.Tech student at Dr. A.P.J. Abdul Kalam Technical University,
            focused on becoming an <span className="text-primary">AI Agent Builder</span>. My
            current work centers on programming fundamentals, prompt engineering, and the design
            principles behind modern autonomous agents.
          </p>
          <p className="text-base leading-relaxed text-muted-foreground">
            I approach the field methodically — building competency in C and C++ for a strong
            engineering foundation, learning Python as the working language of contemporary AI, and
            practicing prompt engineering to interface effectively with large language models. The
            objective is clear: to design and ship dependable AI agents.
          </p>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" label="02 / Skills">
        <div className="grid gap-4 md:grid-cols-3">
          {skills.map((s) => (
            <div key={s.name} className="surface-card p-5">
              <div className="flex items-baseline justify-between">
                <span className="font-display text-lg text-primary">{s.name}</span>
                <span className="font-display text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.level}
                </span>
              </div>
              <div className="mt-4 h-[3px] w-full overflow-hidden rounded bg-muted">
                <div
                  className="h-full bg-primary shadow-glow"
                  style={{
                    width:
                      s.level === "Proficient"
                        ? "82%"
                        : s.level === "Working knowledge"
                          ? "60%"
                          : s.level === "Practicing"
                            ? "55%"
                            : "40%",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FOCUS */}
      <Section id="focus" label="03 / Focus Areas">
        <div className="grid gap-4 md:grid-cols-3">
          {focusAreas.map((f) => (
            <article key={f.code} className="surface-card p-6 scanline">
              <span className="font-display text-xs tracking-[0.2em] text-accent">{f.code}</span>
              <h3 className="mt-3 font-display text-xl text-foreground">{f.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" label="04 / Projects">
        <div className="surface-card p-8 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-primary/50 font-display text-primary shadow-glow">
            &gt;_
          </div>
          <h3 className="mt-5 font-display text-xl text-foreground">Repository initializing</h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Featured projects are currently in development. This section will be populated with
            AI-agent experiments and engineering work as they are completed and published.
          </p>
          <a
            href="https://github.com/1-Fareed"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-md border border-primary/50 px-5 py-2 font-display text-[11px] uppercase tracking-[0.2em] text-primary hover:shadow-glow transition"
          >
            Follow on GitHub →
          </a>
        </div>
      </Section>

      {/* RESUME */}
      <Section id="resume" label="05 / Resume">
        <div className="surface-card flex flex-col items-start justify-between gap-6 p-6 md:flex-row md:items-center">
          <div>
            <h3 className="font-display text-xl text-foreground">Curriculum Vitae</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              The current resume is being prepared. A downloadable link will be provided here upon
              completion.
            </p>
          </div>
          <span className="chip">Status: pending upload</span>
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" label="06 / Contact">
        <div className="grid gap-4 md:grid-cols-3">
          <ContactCard
            label="Email"
            value="fareedmanawwar1@gmail.com"
            href="mailto:fareedmanawwar1@gmail.com"
          />
          <ContactCard
            label="GitHub"
            value="@1-Fareed"
            href="https://github.com/1-Fareed"
          />
          <ContactCard
            label="LinkedIn"
            value="fareed-manawwar"
            href="https://www.linkedin.com/in/fareed-manawwar-8570833ab"
          />
        </div>
      </Section>

      <footer className="border-t border-border/60 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 font-display text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row">
          <span>© {new Date().getFullYear()} Fareed Manawwar</span>
          <span className="text-primary">// end_of_transmission</span>
        </div>
      </footer>
    </main>
  );
}

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-border/50 pb-2 last:border-none">
      <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{k}</dt>
      <dd className="text-right text-sm text-foreground">{v}</dd>
    </div>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-center gap-4">
        <span className="font-display text-xs uppercase tracking-[0.3em] text-primary">
          {label}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent" />
      </div>
      {children}
    </section>
  );
}

function ContactCard({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="surface-card group block p-5 transition hover:shadow-glow"
    >
      <div className="font-display text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-2 truncate font-display text-base text-primary group-hover:text-glow">
        {value}
      </div>
      <div className="mt-4 font-display text-[11px] uppercase tracking-[0.2em] text-accent">
        open →
      </div>
    </a>
  );
}
