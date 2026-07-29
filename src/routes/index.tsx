import { createFileRoute } from "@tanstack/react-router";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  ExternalLink,
  Code2,
  Brain,
  Wrench,
  GraduationCap,
  Target,
  Sparkles,
  BookOpen,
  Award,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fareed Manawwar — Computer Science Student & Aspiring AI Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Fareed Manawwar — B.Tech CSE student passionate about AI, software development, and building meaningful projects.",
      },
      { property: "og:title", content: "Fareed Manawwar — Aspiring AI Engineer" },
      {
        property: "og:description",
        content: "B.Tech CSE student focused on AI, prompt engineering, and modern software.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const timeline = [
  { icon: GraduationCap, title: "B.Tech Computer Science", body: "Dr. A.P.J. Abdul Kalam Technical University (AKTU)." },
  { icon: BookOpen, title: "First Year Completed", body: "Foundations in computing, mathematics, and programming." },
  { icon: Award, title: "CGPA", body: "To be updated." },
  { icon: Brain, title: "Learning AI Agents", body: "Studying agent design, tool use, and orchestration." },
  { icon: Sparkles, title: "Learning Prompt Engineering", body: "Practicing structured, reliable prompting techniques." },
  { icon: Code2, title: "Learning C Programming", body: "Strengthening low-level and algorithmic thinking." },
  { icon: Target, title: "Goal", body: "Become an AI Engineer building dependable, real-world systems." },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Programming",
    items: [
      { name: "C", note: "" },
      { name: "Python", note: "Learning" },
    ],
  },
  {
    icon: Brain,
    title: "AI",
    items: [
      { name: "Prompt Engineering", note: "" },
      { name: "AI Agents", note: "" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    items: [
      { name: "Git", note: "" },
      { name: "GitHub", note: "" },
      { name: "VS Code", note: "" },
    ],
  },
];

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A minimal, modern developer portfolio built with React and TanStack Start, focused on clarity, performance, and accessibility.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/1-Fareed",
    demo: "#",
  },
  {
    title: "More projects in progress",
    description:
      "AI-agent experiments and small engineering projects will appear here as they are completed and published.",
    tech: ["Python", "LLMs", "Agents"],
    github: "https://github.com/1-Fareed",
    demo: "#",
  },
];

const certifications = [
  {
    title: "Certifications in progress",
    issuer: "Coursework & self-study",
    body: "Actively pursuing certifications in AI, prompt engineering, and programming. Verified credentials will appear here.",
  },
];

function Index() {
  return (
    <main className="relative">
      {/* NAV */}
      <header className="glass-nav sticky top-0 z-40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Fareed<span className="text-sky-400">.</span>
          </a>
          <nav className="hidden gap-7 text-sm text-white/70 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="btn-primary btn-primary-hover !py-2 !px-4 text-xs">
            Get in touch
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="mx-auto max-w-6xl px-6 pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="animate-fade-up max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
            Available for opportunities
          </div>
          <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight md:text-7xl">
            Hi, I'm <span className="bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">Fareed</span>.
          </h1>
          <p className="mt-5 text-lg text-white/70 md:text-xl">
            Computer Science Student <span className="text-white/30">/</span> Aspiring AI Engineer
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/60 md:text-lg">
            I am a B.Tech Computer Science student passionate about Artificial Intelligence, software
            development, and solving real-world problems. I enjoy building projects while continuously
            learning modern technologies.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#projects" className="btn-primary btn-primary-hover">
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="btn-ghost btn-ghost-hover">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <Section id="about" eyebrow="About" title="A snapshot of the journey so far">
        <div className="card-surface p-6 md:p-10">
          <ol className="relative space-y-6 border-l border-white/10 pl-6">
            {timeline.map((t, i) => {
              const Icon = t.icon;
              return (
                <li key={i} className="relative">
                  <span className="absolute -left-[34px] flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#0B0F19] text-sky-400">
                    <Icon className="h-3.5 w-3.5" />
                  </span>
                  <h3 className="text-base font-medium text-white">{t.title}</h3>
                  <p className="mt-1 text-sm text-white/60">{t.body}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </Section>

      {/* SKILLS */}
      <Section id="skills" eyebrow="Skills" title="Tools and technologies I work with">
        <div className="grid gap-5 md:grid-cols-3">
          {skillGroups.map((g) => {
            const Icon = g.icon;
            return (
              <div key={g.title} className="card-surface p-6 transition hover:border-white/15">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sky-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-medium">{g.title}</h3>
                </div>
                <ul className="mt-5 space-y-2">
                  {g.items.map((it) => (
                    <li
                      key={it.name}
                      className="flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2 text-sm"
                    >
                      <span className="text-white/90">{it.name}</span>
                      {it.note && (
                        <span className="text-xs text-sky-300/80">{it.note}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      {/* PROJECTS */}
      <Section id="projects" eyebrow="Projects" title="Selected work and experiments">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="card-surface group relative flex flex-col p-7 transition hover:border-white/15"
            >
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-7 flex gap-3">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost btn-ghost-hover !py-2 !px-3 text-xs"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={p.demo}
                  className="btn-primary btn-primary-hover !py-2 !px-3 text-xs"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section id="certifications" eyebrow="Certifications" title="Credentials and coursework">
        <div className="grid gap-5 md:grid-cols-2">
          {certifications.map((c) => (
            <div key={c.title} className="card-surface p-6">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sky-400">
                  <Award className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="text-base font-medium text-white">{c.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-wider text-white/40">{c.issuer}</p>
                  <p className="mt-3 text-sm leading-relaxed text-white/60">{c.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CONTACT */}
      <Section id="contact" eyebrow="Contact" title="Let's build something together">
        <div className="card-surface p-8 md:p-12">
          <p className="max-w-xl text-base text-white/60">
            I'm open to internships, collaborations, and learning opportunities. Reach out through
            any of the channels below.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ContactCard
              icon={Mail}
              label="Email"
              value="fareedmanawwar1@gmail.com"
              href="mailto:fareedmanawwar1@gmail.com"
            />
            <ContactCard
              icon={Linkedin}
              label="LinkedIn"
              value="fareed-manawwar"
              href="https://www.linkedin.com/in/fareed-manawwar-8570833ab"
            />
            <ContactCard
              icon={Github}
              label="GitHub"
              value="@1-Fareed"
              href="https://github.com/1-Fareed"
            />
          </div>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-xs text-white/40 md:flex-row">
          <span>© {new Date().getFullYear()} Fareed Manawwar. All rights reserved.</span>
          <span>Designed & built with care.</span>
        </div>
      </footer>
    </main>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <div className="mb-10 max-w-2xl">
        <div className="text-xs font-medium uppercase tracking-[0.18em] text-sky-400">{eyebrow}</div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-4 transition hover:border-white/20 hover:bg-white/[0.04]"
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-sky-400">
        <Icon className="h-5 w-5" />
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-wider text-white/40">{label}</div>
        <div className="truncate text-sm text-white">{value}</div>
      </div>
      <ArrowRight className="h-4 w-4 text-white/30 transition group-hover:translate-x-0.5 group-hover:text-white/70" />
    </a>
  );
}
