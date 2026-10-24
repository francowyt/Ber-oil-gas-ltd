import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Phone, ShieldCheck } from "lucide-react";
import heroTanker from "@/assets/hero-tanker.jpg";
import dieselOps from "@/assets/diesel-ops.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import fleet from "@/assets/fleet.jpg";
import quality from "@/assets/quality-diesel.jpg";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { BrandedImage } from "@/components/BrandedImage";
import { SocialLinks } from "@/components/SocialLinks";
import { ContactGroup } from "@/components/ContactGroup";
import { VideoSection } from "@/components/VideoSection";
import { BrandMark } from "@/components/BrandMark";
import { COMPANY, telHref } from "@/lib/company";
import { INDUSTRIES, QUALITY_PILLARS, SERVICES, WHY_US } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BER Oil & Gas Ltd | Quality Diesel Supply & Distribution" },
      {
        name: "description",
        content:
          "BER Oil & Gas Ltd provides quality diesel supply and distribution solutions from Abuja, Nigeria. Enquire about reliable diesel supply for your business or organisation.",
      },
      {
        property: "og:title",
        content: "BER Oil & Gas Ltd | Quality Diesel Supply & Distribution",
      },
      {
        property: "og:description",
        content:
          "Quality diesel supply and distribution from Abuja, Nigeria — reliable supply for businesses and operations.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const TRUST = [
  "Oil & Gas",
  "Diesel Supply & Distribution",
  "Quality-Focused",
  "Abuja, Nigeria",
  COMPANY.rc,
];

function Home() {
  return (
    <>
      {/* 01 — HERO */}
      <section className="relative isolate overflow-hidden bg-navy">
        <img
          src={heroTanker}
          alt="BER Oil & Gas branded diesel tanker truck on a highway near Abuja at dusk"
          width={1920}
          height={1088}
          className="hero-img absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="hero-overlay absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/30" />
        <div className="container-x relative flex min-h-[600px] flex-col justify-center py-24 lg:min-h-[720px]">
          <p className="hero-in [--d:300ms] inline-flex w-fit items-center gap-2 border-l-2 border-flame bg-white/5 px-3 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase text-navy-foreground/80">
            <ShieldCheck className="h-3.5 w-3.5 text-flame" aria-hidden="true" />
            {COMPANY.name} | {COMPANY.rc}
          </p>
          <h1 className="hero-in [--d:500ms] mt-7 max-w-4xl font-display text-4xl leading-[1.03] font-semibold text-navy-foreground sm:text-6xl lg:text-7xl">
            Reliable Diesel Supply.
            <span className="block text-flame">Quality You Can Count On.</span>
          </h1>
          <p className="hero-in [--d:750ms] mt-7 max-w-2xl text-base leading-relaxed text-navy-foreground/80 sm:text-lg">
            BER OIL &amp; GAS LTD delivers reliable supply and distribution of quality
            diesel for businesses and operations across Nigeria.
          </p>
          <div className="hero-in [--d:950ms] mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/quote"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-sm bg-flame px-8 py-3.5 font-semibold text-flame-foreground transition-colors hover:bg-white hover:text-navy"
            >
              Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              to="/products"
              className="inline-flex h-13 items-center justify-center gap-2 rounded-sm border border-white/35 px-8 py-3.5 font-semibold text-navy-foreground transition-colors hover:bg-white/10"
            >
              Explore Products &amp; Services
            </Link>
          </div>
        </div>
        <BrandMark
          decorative
          fallbackClassName="!absolute right-5 bottom-5 !hidden h-14 w-28 rounded-sm bg-background px-2 shadow-sm lg:!inline-flex"
        />
      </section>

      {/* 02 — TRUST / INTRODUCTION */}
      <section aria-label="Company highlights" className="border-b bg-card">
        <ul className="container-x grid grid-cols-2 divide-y divide-border sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5 lg:divide-x">
          {TRUST.map((t) => (
            <li
              key={t}
              className="px-2 py-6 text-center font-display text-sm font-medium tracking-wide text-foreground/80 lg:px-6"
            >
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container-x max-w-4xl">
          <Reveal>
            <p className="font-display text-xl leading-relaxed font-medium sm:text-2xl">
              BER OIL &amp; GAS LTD is a Nigerian oil and gas company focused on the
              supply and distribution of pure, quality diesel — serving businesses and
              organisations that depend on consistent fuel availability to keep their
              operations running.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 03 — BUSINESS STATISTICS */}
      <Stats tone="dark" heading="Our record so far" />

      {/* 04 — ABOUT */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <BrandedImage
              src={aboutTeam}
              alt="Nigerian business executives reviewing supply documents in an Abuja boardroom"
              width={1408}
              height={1008}
              className="aspect-4/3 w-full"
              imgClassName="hover:scale-[1.03]"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">01 — Who We Are</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
              Energy Supply Built Around Quality and Reliability.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              We work with businesses that cannot afford compromises in fuel quality or
              supply consistency. Our approach is straightforward: understand the
              requirement, communicate clearly, and distribute efficiently.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Reliability",
                "Quality",
                "Professional service",
                "Customer focus",
                "Efficient supply",
                "Business continuity",
              ].map((i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <span className="h-1.5 w-1.5 shrink-0 bg-flame" aria-hidden="true" />
                  {i}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="mt-9 inline-flex items-center gap-2 border-b-2 border-flame pb-1 font-display font-semibold text-primary"
            >
              Discover BER Oil &amp; Gas <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* VIDEO — COMPANY STORY */}
      <VideoSection />

      {/* 05 — PRODUCTS & SERVICES */}
      <section className="bg-navy py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow text-navy-foreground/80">02 — Products &amp; Services</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold text-navy-foreground sm:text-4xl lg:text-[2.75rem]">
              Quality Diesel, Delivered With Confidence.
            </h2>
            <p className="mt-6 leading-relaxed text-navy-foreground/75">
              From generators and plant machinery to commercial fleets and facilities, we
              coordinate supply around what your operations actually require.
            </p>
            <ul className="mt-9 space-y-px bg-white/10">
              {SERVICES.map((s) => (
                <li key={s.title} className="bg-navy py-4">
                  <h3 className="font-display text-lg font-semibold text-navy-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy-foreground/70">
                    {s.body}
                  </p>
                </li>
              ))}
            </ul>
            <Link
              to="/products"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-sm bg-flame px-7 font-semibold text-flame-foreground transition-colors hover:bg-white hover:text-navy"
            >
              Explore Products &amp; Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <BrandedImage
              src={dieselOps}
              alt="Fuel operations officer beside a BER Oil & Gas diesel tanker discharge line"
              width={1408}
              height={1008}
              className="aspect-4/5 w-full"
              imgClassName="hover:scale-[1.03]"
              position="bottom-left"
            />
          </Reveal>
        </div>
      </section>

      {/* 06 — WHY CHOOSE BER OIL & GAS */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">03 — Why BER Oil &amp; Gas</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
              Reasons corporate customers choose to work with us.
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 60} className="bg-card p-8">
                <span className="font-display text-sm font-semibold text-flame">
                  0{i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {w.body}
                </p>
              </Reveal>
            ))}
          </ul>
          <Link
            to="/why-us"
            className="mt-10 inline-flex items-center gap-2 border-b-2 border-flame pb-1 font-display font-semibold text-primary"
          >
            See why us in full <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 07 — INDUSTRIES WE SUPPORT */}
      <section className="relative isolate overflow-hidden">
        <img
          src={fleet}
          alt="Row of BER Oil & Gas branded diesel tankers at a fuel logistics yard at dusk"
          width={1920}
          height={912}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/88" />
        <div className="container-x relative py-20 lg:py-28">
          <Reveal>
            <p className="eyebrow text-navy-foreground/80">04 — Industries We Support</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold text-navy-foreground sm:text-4xl">
              Built for the sectors that run on dependable fuel.
            </h2>
          </Reveal>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal
                as="li"
                key={ind}
                delay={i * 40}
                className="flex items-center gap-3 border border-white/15 bg-white/5 px-5 py-4 font-display text-sm font-medium text-navy-foreground"
              >
                <span className="h-1.5 w-1.5 bg-flame" aria-hidden="true" />
                {ind}
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* 08 — QUALITY */}
      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="eyebrow">05 — Quality</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
              Quality You Can Count On.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our focus is the supply and distribution of pure, quality diesel — handled
              professionally and delivered consistently, so our customers can operate with
              confidence.
            </p>
            <ul className="mt-10 grid gap-7 sm:grid-cols-2">
              {QUALITY_PILLARS.slice(0, 4).map((p) => (
                <li key={p.title} className="border-t pt-5">
                  <h3 className="font-display text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <BrandedImage
              src={quality}
              alt="Close-up of clean diesel fuel flowing from a dispensing nozzle"
              width={1408}
              height={912}
              className="aspect-4/5 w-full"
              imgClassName="hover:scale-[1.03]"
            />
          </Reveal>
        </div>
      </section>

      {/* 09 — TESTIMONIALS */}
      <Testimonials />

      {/* 10 — REQUEST A QUOTE */}
      <section className="bg-primary">
        <div className="container-x grid gap-8 py-16 lg:grid-cols-[1.4fr_auto] lg:items-center lg:py-20">
          <div>
            <h2 className="font-display text-3xl font-semibold text-primary-foreground sm:text-4xl">
              Request a Diesel Supply Quote.
            </h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/80">
              Tell us your requirement, quantity and location — our team will respond with
              the details needed to move forward.
            </p>
            <ContactGroup tone="dark" className="mt-6 text-primary-foreground" />
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/quote"
              className="inline-flex h-12 items-center rounded-sm bg-flame px-7 font-semibold text-flame-foreground transition-colors hover:bg-navy"
            >
              Request a Quote
            </Link>
            <a
              href={telHref(COMPANY.primaryPhone)}
              className="inline-flex h-12 items-center gap-2 rounded-sm border border-white/40 px-7 font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" aria-hidden="true" /> Call {COMPANY.primaryPhone}
            </a>
          </div>
        </div>
      </section>

      {/* 11 — CONTACT */}
      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">06 — Contact</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
              Speak With Our Team.
            </h2>
            <ul className="mt-8 space-y-5 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-flame" aria-hidden="true" />
                <span className="text-muted-foreground">{COMPANY.address}</span>
              </li>
              <li>
                <ContactGroup />
              </li>
            </ul>
            <div className="mt-8">
              <SocialLinks tone="light" />
            </div>
            <Link
              to="/contact"
              className="mt-9 inline-flex items-center gap-2 border-b-2 border-flame pb-1 font-display font-semibold text-primary"
            >
              Go to contact page <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <iframe
              title="Map showing Utako, Abuja — BER Oil & Gas Ltd registered address"
              src="https://www.google.com/maps?q=Plot%20601%20T.O.S%20Benson%20Crescent%2C%20Utako%2C%20Abuja&output=embed"
              className="h-[360px] w-full rounded-sm border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
