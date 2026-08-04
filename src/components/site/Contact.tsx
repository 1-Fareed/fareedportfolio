import { Mail, Github, Linkedin, FileText } from "lucide-react";

import { site } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { MagneticButton } from "./MagneticButton";

const links = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
  { label: "GitHub", value: "@1-Fareed", href: site.github, Icon: Github },
  { label: "LinkedIn", value: "Fareed Manawwar", href: site.linkedin, Icon: Linkedin },
  { label: "Résumé", value: "View document", href: site.resume, Icon: FileText },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="06"
          title="Contact"
          subtitle="Let's build something worth shipping."
        />

        <Reveal delay={0.1}>
          <div className="surface mt-14 rounded-3xl p-8 md:p-12">
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
              I am open to internships, collaborative projects, and conversations about AI and
              automation. The fastest way to reach me is email.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href={`mailto:${site.email}`}>
                <Mail className="h-4 w-4" />
                Get in touch
              </MagneticButton>
              <MagneticButton href={site.resume} external variant="ghost">
                <FileText className="h-4 w-4" />
                Résumé
              </MagneticButton>
            </div>

            <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {links.map(({ label, value, href, Icon }) => (
                <li key={label} className="bg-card">
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-muted/60"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="flex-1">
                      <span className="block text-xs uppercase tracking-[0.14em] text-subtle">
                        {label}
                      </span>
                      <span className="block text-sm text-foreground">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Designed and built with care.</p>
        </footer>
      </div>
    </section>
  );
}
