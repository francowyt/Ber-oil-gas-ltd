import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import dieselOps from "@/assets/diesel-ops.jpg";
import quality from "@/assets/quality-diesel.jpg";
import industriesImg from "@/assets/industries.jpg";
import { CtaBand, PageHero } from "@/components/PageHero";
import { BrandedImage } from "@/components/BrandedImage";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";
import { INDUSTRIES, QUALITY_PILLARS, WHY_US } from "@/lib/content";

export const Route = createFileRoute("/why-us")({
  head: () => ({
    meta: [
      { title: "Why Us | Quality Diesel Supplier in Abuja — BER Oil & Gas Ltd" },
      {
        name: "description",
        content:
          "Why businesses choose BER Oil & Gas Ltd for diesel supply in Abuja and across Nigeria: quality, reliability, professional service, customer focus, efficient supply and the industries we support.",
      },
      { property: "og:title", content: "Why Choose BER Oil & Gas Ltd" },
      {
        property: "og:description",
        content:
          "Quality, reliability, professional service and efficient diesel supply for Nigerian businesses.",
      },
      { property: "og:url", content: "/why-us" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/why-us" }],
  }),
  component: WhyUs,
});

function WhyUs() {
  return (
    <>
      <PageHero
        eyebrow="Why BER Oil & Gas"
        title="A Supply Partner Built on Fundamentals."
        intro="We keep our promises simple and our service consistent — because that is what operations depend on."
        image={dieselOps}
      />

      <section id="reasons" className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">01 — Our Strengths</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
              Quality, reliability and professional service — consistently applied.
            </h2>
          </Reveal>
        </div>
        <div className="container-x mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 60} className="bg-card p-9">
              <span className="font-display text-sm font-semibold text-flame">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold">{w.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <Stats tone="light" heading="By the numbers" />

      <section id="quality" className="bg-secondary py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <BrandedImage
              src={quality}
              alt="Clean diesel fuel being dispensed during a BER Oil & Gas supply"
              width={1408}
              height={912}
              className="aspect-4/3 w-full"
              imgClassName="hover:scale-[1.03]"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">02 — Quality</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
              Quality You Can Count On.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Our business is built around supplying and distributing pure, quality
              diesel. Quality is not a slogan for us — it shows up in the product we
              supply, the way it is handled and the consistency of the service around it.
            </p>
            <ul className="mt-8 grid gap-6 sm:grid-cols-2">
              {QUALITY_PILLARS.map((p) => (
                <li key={p.title}>
                  <h3 className="font-display font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section id="industries" className="relative isolate overflow-hidden">
        <img
          src={industriesImg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/88" />
        <div className="container-x relative py-20 lg:py-28">
          <Reveal>
            <p className="eyebrow text-navy-foreground/80">03 — Industries</p>
            <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight font-semibold text-navy-foreground sm:text-4xl lg:text-[2.75rem]">
              Industries We Support.
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-navy-foreground/75">
              These are the sectors our diesel supply and distribution service is designed
              to support.
            </p>
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
          <Link
            to="/quote"
            className="mt-12 inline-flex h-12 items-center gap-2 rounded-sm bg-flame px-7 font-semibold text-flame-foreground transition-colors hover:bg-white hover:text-navy"
          >
            Request a Quote <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <CtaBand title="Let's Talk About Your Fuel Requirement" />
    </>
  );
}
