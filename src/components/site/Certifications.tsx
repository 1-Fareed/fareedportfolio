import { Award, ArrowUpRight } from "lucide-react";

import { certifications } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="relative px-6 py-28">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          index="05"
          title="Certifications"
          subtitle="Verified credentials and completed programmes."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {certifications.map((cert, i) => (
            <Reveal key={cert.href} delay={i * 0.07}>
              <a
                href={cert.href}
                target="_blank"
                rel="noopener noreferrer"
                className="surface hover-lift group flex h-full flex-col justify-between rounded-3xl p-7"
              >
                <span className="grid h-10 w-10 place-items-center rounded-2xl border border-border bg-muted/50 text-primary">
                  <Award className="h-4.5 w-4.5" />
                </span>
                <div className="mt-10">
                  <h3 className="text-base font-medium text-foreground">{cert.title}</h3>
                  <p className="mt-1 text-sm text-subtle">{cert.issuer}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-primary">
                    View certificate
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
