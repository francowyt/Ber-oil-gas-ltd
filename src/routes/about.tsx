import { createFileRoute } from "@tanstack/react-router";
import aboutTeam from "@/assets/about-team.jpg";
import fleet from "@/assets/fleet.jpg";
import { CtaBand, PageHero } from "@/components/PageHero";
import { BrandedImage } from "@/components/BrandedImage";
import { Reveal } from "@/components/Reveal";
import { Stats } from "@/components/Stats";
import { COMPANY } from "@/lib/company";
import { FAQS, VALUES } from "@/lib/content";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | BER Oil & Gas Ltd — Diesel Supply Company in Abuja" },
      {
        name: "description",
        content:
          "BER Oil & Gas Ltd (RC 1924614) is a Nigerian oil and gas company incorporated in 2022, focused on the supply and distribution of quality diesel from Abuja. Read our story, mission, values and FAQs.",
      },
      { property: "og:title", content: "About BER Oil & Gas Ltd" },
      {
        property: "og:description",
        content:
          "A Nigerian oil and gas company focused on the supply and distribution of quality diesel.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: About,
});

const FACTS = [
  { label: "Company Name", value: COMPANY.name },
  { label: "CAC Registration", value: COMPANY.rc },
  { label: "Company Type", value: COMPANY.type },
  { label: "Date of Incorporation", value: COMPANY.incorporated },
  { label: "Principal Business Activity", value: "Oil & Gas" },
  { label: "Area of Operation", value: "Supply and distribution of pure, quality diesel" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Energy Supply Built Around Quality and Reliability."
        intro="BER OIL & GAS LTD is a Nigerian oil and gas company focused on the supply and distribution of pure, quality diesel for businesses and operations."
        image={fleet}
      />

      <section id="who-we-are" className="py-20 lg:py-28">
        <div className="container-x grid items-start gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="eyebrow">01 — Who We Are</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
              A focused business, built for corporate customers.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              BER OIL &amp; GAS LTD is a Nigerian oil and gas company operating from
              Abuja, with a single clear focus: the supply and distribution of pure,
              quality diesel for commercial, industrial and operational use.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              We serve organisations whose operations depend on the availability and
              integrity of their fuel. Our work is built on reliability, professional
              service, customer responsiveness and efficient distribution.
            </p>
          </Reveal>
          <Reveal delay={80}>
            <BrandedImage
              src={aboutTeam}
              alt="BER Oil & Gas corporate discussion in an Abuja office"
              width={1408}
              height={1008}
              className="aspect-4/3 w-full"
              imgClassName="hover:scale-[1.03]"
            />
          </Reveal>
        </div>
      </section>

      <Stats tone="dark" heading="Our record so far" />

      <section id="our-story" className="py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow">02 — Our Story</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold sm:text-4xl">
              A company created to make quality diesel dependable.
            </h2>
          </Reveal>
          <Reveal delay={80} className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              BER OIL &amp; GAS LTD was incorporated on {COMPANY.incorporated} as a
              private company limited by shares, registered with the Corporate Affairs
              Commission under {COMPANY.rc}.
            </p>
            <p>
              The company was established around a straightforward observation: many
              Nigerian businesses depend on diesel every single day, and the difference
              between a good day and a lost one often comes down to whether their fuel is
              of good quality and arrives as agreed.
            </p>
            <p>
              Further milestones from the company's history will be published here as they
              are provided.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        id="mission-vision"
        className="border-y bg-secondary py-20 lg:py-24"
        aria-label="Mission and vision"
      >
        <div className="container-x grid gap-px bg-border md:grid-cols-2">
          <Reveal className="bg-card p-9 lg:p-12">
            <p className="eyebrow">03 — Our Mission</p>
            <p className="mt-6 font-display text-xl leading-relaxed font-medium sm:text-2xl">
              To supply and distribute pure, quality diesel reliably and professionally,
              so that the businesses we serve can keep their operations running with
              confidence.
            </p>
          </Reveal>
          <Reveal delay={80} className="bg-card p-9 lg:p-12">
            <p className="eyebrow">04 — Our Vision</p>
            <p className="mt-6 font-display text-xl leading-relaxed font-medium sm:text-2xl">
              To be recognised as a trusted Nigerian diesel supply and distribution
              company, known for quality, consistency and customer confidence.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="values" className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">05 — Our Values</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold sm:text-4xl">
              What guides how we work.
            </h2>
          </Reveal>
          <ul className="mt-14 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((v, i) => (
              <Reveal as="li" key={v.title} delay={i * 50} className="bg-card p-8">
                <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="approach" className="bg-navy py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <Reveal>
            <p className="eyebrow text-navy-foreground/80">06 — Our Approach</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold text-navy-foreground sm:text-4xl">
              Understand. Confirm. Coordinate. Deliver.
            </h2>
          </Reveal>
          <Reveal delay={80} className="space-y-4 leading-relaxed text-navy-foreground/75">
            <p>
              Every engagement starts with a conversation about what your operations
              actually need. We confirm the requirement together, coordinate supply around
              it and keep communication clear from first enquiry through to delivery.
            </p>
            <p>
              Volumes, delivery arrangements and commercial terms are agreed directly with
              each customer — we do not make commitments we have not confirmed.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-secondary py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">07 — Corporate Information</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
              Registered and verifiable.
            </h2>
          </Reveal>
          <dl className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
            {FACTS.map((f, i) => (
              <Reveal key={f.label} delay={i * 50} className="bg-card p-7">
                <dt className="font-display text-xs font-semibold tracking-[0.16em] uppercase text-muted-foreground">
                  {f.label}
                </dt>
                <dd className="mt-3 font-display text-lg font-medium">{f.value}</dd>
              </Reveal>
            ))}
          </dl>
          <p className="mt-8 max-w-3xl text-sm text-muted-foreground">
            Registered address: {COMPANY.address}.
          </p>
        </div>
      </section>

      <section id="faq" className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">08 — FAQ</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold sm:text-4xl">
              Frequently Asked Questions.
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              Anything not answered here? Call us on {COMPANY.primaryPhone}.
            </p>
          </Reveal>
          <div className="divide-y border-y">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-display text-lg font-medium">
                    {f.q}
                    <span
                      className="text-flame transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Work With BER Oil & Gas" />
    </>
  );
}
