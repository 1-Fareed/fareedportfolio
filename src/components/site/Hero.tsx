import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { useRef } from "react";

import { site } from "@/lib/site-data";
import { MagneticButton } from "./MagneticButton";

const ease = [0.16, 1, 0.3, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, reduce ? 1 : 0]);

  const words = ["Fareed", "Manawwar"];

  return (
    <section
      id="top"
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-32 pb-24"
    >
      <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-[0.35]" />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[70vh] bg-[radial-gradient(60%_60%_at_50%_0%,color-mix(in_oklab,var(--color-primary)_18%,transparent),transparent_70%)]"
      />

      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Available for internships & collaborations
        </motion.div>

        <h1 className="mt-8 text-[clamp(3rem,11vw,8.5rem)] font-semibold leading-[0.92] tracking-[-0.05em]">
          {words.map((word, i) => (
            <span key={word} className="block overflow-hidden pb-[0.06em]">
              <motion.span
                className="block text-gradient"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.1 + i * 0.09, ease }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-8 grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end"
        >
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground">
            {site.tagline}
          </p>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <MagneticButton href="#projects">
              View projects
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </MagneticButton>
            <MagneticButton href={site.resume} external variant="ghost">
              Resume
            </MagneticButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-subtle"
        >
          <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
