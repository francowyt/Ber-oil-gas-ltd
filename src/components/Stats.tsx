import { useEffect, useRef, useState } from "react";
import { STATS } from "@/lib/company";

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setValue(target);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, active, duration]);

  return value;
}

function Stat({
  value,
  suffix,
  label,
  index,
  active,
  tone,
}: {
  value: number;
  suffix: string;
  label: string;
  index: number;
  active: boolean;
  tone: "light" | "dark";
}) {
  const n = useCountUp(value, active, 1400 + index * 200);
  return (
    <div className="px-2 py-10 lg:px-10">
      <p
        className={`font-display text-5xl leading-none font-semibold tabular-nums sm:text-6xl lg:text-7xl ${
          tone === "dark" ? "text-navy-foreground" : "text-navy"
        }`}
      >
        {n}
        <span className="text-flame">{suffix}</span>
      </p>
      <p
        className={`mt-5 font-display text-xs font-semibold tracking-[0.2em] uppercase ${
          tone === "dark" ? "text-navy-foreground/65" : "text-muted-foreground"
        }`}
      >
        {label}
      </p>
    </div>
  );
}

export function Stats({
  tone = "light",
  heading,
}: {
  tone?: "light" | "dark";
  heading?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      aria-label="Business statistics"
      className={tone === "dark" ? "bg-navy" : "bg-background"}
    >
      <div className="container-x py-16 lg:py-20">
        {heading ? (
          <p className={`eyebrow ${tone === "dark" ? "text-navy-foreground/80" : ""}`}>
            {heading}
          </p>
        ) : null}
        <div
          className={`mt-8 grid divide-y sm:grid-cols-3 sm:divide-x sm:divide-y-0 ${
            tone === "dark" ? "divide-white/12 border-y border-white/12" : "divide-border border-y"
          }`}
        >
          {STATS.map((s, i) => (
            <Stat
              key={s.label}
              value={s.value}
              suffix={s.suffix}
              label={s.label}
              index={i}
              active={active}
              tone={tone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
