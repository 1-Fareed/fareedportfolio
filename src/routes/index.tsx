import { createFileRoute } from "@tanstack/react-router";

import { CursorGlow } from "@/components/site/CursorGlow";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Experience } from "@/components/site/Experience";
import { Projects } from "@/components/site/Projects";
import { Skills } from "@/components/site/Skills";
import { Certifications } from "@/components/site/Certifications";
import { Contact } from "@/components/site/Contact";
import { site } from "@/lib/site-data";

const title = "Fareed Manawwar — AI & Automation Engineer";
const description =
  "Portfolio of Fareed Manawwar, a B.Tech CSE student building AI-powered products and automation workflows. Projects, experience, skills, and certifications.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: site.name,
          jobTitle: "AI & Automation Trainee",
          email: `mailto:${site.email}`,
          sameAs: [site.github, site.linkedin],
          description,
        }),
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative">
      <CursorGlow />
      <Nav />
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Contact />
      </div>
    </main>
  );
}
