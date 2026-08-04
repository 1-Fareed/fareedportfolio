import { Reveal } from "./Reveal";

export function SectionHeading({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-2xl">
      <Reveal>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-subtle">
          <span className="font-mono text-primary">{index}</span>
          <span className="h-px w-10 bg-border" />
          <span>{title}</span>
        </div>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.08}>
          <h2 className="mt-5 text-[clamp(2rem,4.5vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.04em] text-gradient">
            {subtitle}
          </h2>
        </Reveal>
      )}
    </div>
  );
}
