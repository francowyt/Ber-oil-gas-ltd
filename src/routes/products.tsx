import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import quality from "@/assets/quality-diesel.jpg";
import dieselOps from "@/assets/diesel-ops.jpg";
import fleet from "@/assets/fleet.jpg";
import { CtaBand, PageHero } from "@/components/PageHero";
import { BrandedImage } from "@/components/BrandedImage";
import { Reveal } from "@/components/Reveal";
import { PROCESS, SERVICES } from "@/lib/content";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Services | Diesel Supply & Distribution — BER Oil & Gas Ltd" },
      {
        name: "description",
        content:
          "Quality diesel supply and distribution from BER Oil & Gas Ltd, Abuja: diesel supply, bulk diesel supply, commercial and industrial supply, and diesel distribution.",
      },
      { property: "og:title", content: "Products & Services | BER Oil & Gas Ltd" },
      {
        property: "og:description",
        content: "Quality diesel supply and distribution for businesses across Nigeria.",
      },
      { property: "og:url", content: "/products" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const USES = [
  {
    title: "Generator Fuel",
    body: "Diesel supply for commercial and industrial generators supporting continuous power availability.",
  },
  {
    title: "Plant & Equipment",
    body: "Fuel for construction plant, heavy equipment and site machinery.",
  },
  {
    title: "Fleet & Logistics",
    body: "Diesel for commercial vehicle fleets and transport operations.",
  },
  {
    title: "Facilities & Estates",
    body: "Supply for estates, hotels, offices and facilities with standby power needs.",
  },
];

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products & Services"
        title="Quality Diesel Supply & Distribution."
        intro="Our core offering is pure, quality diesel — supplied and distributed to businesses and operations that cannot compromise on fuel integrity."
        image={quality}
      />

      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <BrandedImage
              src={quality}
              alt="Close-up of clean diesel fuel flowing from a dispensing nozzle"
              width={1408}
              height={912}
              className="aspect-4/3 w-full"
              imgClassName="hover:scale-[1.03]"
            />
          </Reveal>
          <Reveal delay={80}>
            <p className="eyebrow">01 — Our Product</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
              A single product, handled with full attention.
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              BER OIL &amp; GAS LTD focuses on the supply and distribution of pure,
              quality diesel. By concentrating on one product, we can give full attention
              to product integrity, professional handling and the reliability of each
              supply arrangement.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Supply volumes, delivery arrangements and commercial terms are confirmed
              directly with each customer based on their stated requirements.
            </p>
            <Link
              to="/quote"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-sm bg-flame px-7 font-semibold text-flame-foreground transition-colors hover:bg-navy"
            >
              Enquire About Diesel Supply
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="border-y bg-secondary py-20 lg:py-28">
        <div className="container-x">
          <Reveal>
            <p className="eyebrow">02 — Our Services</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
              Supply and distribution built around working operations.
            </h2>
          </Reveal>
          <div className="mt-14 space-y-px bg-border">
            {SERVICES.map((s, i) => (
              <Reveal
                key={s.title}
                delay={i * 60}
                className="grid gap-4 bg-card p-8 md:grid-cols-[6rem_1fr_1.2fr] md:items-baseline md:p-10"
              >
                <span className="font-display text-3xl font-semibold text-primary/25">
                  0{i + 1}
                </span>
                <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                <p className="leading-relaxed text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x grid items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <Reveal>
            <p className="eyebrow">03 — Applications</p>
            <h2 className="mt-5 font-display text-3xl leading-tight font-semibold sm:text-4xl">
              Where our diesel supply is used.
            </h2>
            <ul className="mt-10 grid gap-7 sm:grid-cols-2">
              {USES.map((u) => (
                <li key={u.title} className="border-t pt-5">
                  <h3 className="font-display text-lg font-semibold">{u.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {u.body}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={80}>
            <BrandedImage
              src={dieselOps}
              alt="BER Oil & Gas tanker being prepared for diesel distribution"
              width={1408}
              height={1008}
              className="aspect-4/5 w-full"
              imgClassName="hover:scale-[1.03]"
              position="bottom-left"
            />
          </Reveal>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <img
          src={fleet}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy/88" />
        <div className="container-x relative py-20 lg:py-24">
          <Reveal>
            <p className="eyebrow text-navy-foreground/80">04 — How We Work</p>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-semibold text-navy-foreground sm:text-4xl">
              From enquiry to delivery.
            </h2>
          </Reveal>
          <ol className="mt-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal as="li" key={p.step} delay={i * 70}>
                <span className="font-display text-4xl font-semibold text-white/25">
                  {p.step}
                </span>
                <div className="mt-4 h-px w-full bg-white/15">
                  <div className="h-px w-10 bg-flame" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-foreground">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-navy-foreground/70">
                  {p.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand title="Tell Us What You Need Supplied" />
    </>
  );
}
