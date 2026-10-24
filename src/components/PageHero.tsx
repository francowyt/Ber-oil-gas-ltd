import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ContactGroup } from "./ContactGroup";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/85 to-navy/40" />
      <div className="container-x relative py-20 lg:py-28">
        <p className="eyebrow text-navy-foreground/80">{eyebrow}</p>
        <h1 className="mt-5 max-w-3xl font-display text-4xl leading-[1.05] font-semibold text-navy-foreground sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            {intro}
          </p>
        ) : null}
        {children}
      </div>
    </section>
  );
}

export function CtaBand({
  title = "Ready to discuss your diesel supply requirements?",
  text = "Tell us what your operations need and our team will respond with the details required to move forward.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-primary">
      <div className="container-x grid gap-8 py-16 lg:grid-cols-[1.4fr_auto] lg:items-center lg:py-20">
        <div>
          <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl text-primary-foreground/80">{text}</p>
          <ContactGroup tone="dark" className="mt-6 text-primary-foreground" />
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/quote"
            className="inline-flex h-12 items-center rounded-sm bg-flame px-7 font-semibold text-flame-foreground transition-colors hover:bg-navy btn-lift"
          >
            Request a Quote
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center rounded-sm border border-white/40 px-7 font-semibold text-primary-foreground transition-colors hover:bg-white/10"
          >
            Speak With Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
