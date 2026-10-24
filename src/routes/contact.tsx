import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import dieselOps from "@/assets/diesel-ops.jpg";
import { PageHero } from "@/components/PageHero";
import { ContactGroup } from "@/components/ContactGroup";
import { QuoteForm } from "@/components/QuoteForm";
import { SocialLinks } from "@/components/SocialLinks";
import { COMPANY, telHref, waHref } from "@/lib/company";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us | BER Oil & Gas Ltd — Utako, Abuja" },
      {
        name: "description",
        content:
          "Contact BER Oil & Gas Ltd at Plot 601 T.O.S Benson Crescent, Utako, Abuja. Call 08068002660 or 09110816350 for diesel supply enquiries.",
      },
      { property: "og:title", content: "Contact BER Oil & Gas Ltd" },
      {
        property: "og:description",
        content: "Speak with our team about diesel supply and distribution.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Speak With Our Team."
        intro="We are available by phone, WhatsApp and email for diesel supply enquiries from businesses and organisations."
        image={dieselOps}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-semibold">{COMPANY.name}</h2>
              <p className="mt-1 text-sm tracking-[0.14em] text-muted-foreground">
                {COMPANY.rc}
              </p>
            </div>
            <div className="flex gap-4">
              <MapPin className="mt-1 h-5 w-5 shrink-0 text-flame" aria-hidden="true" />
              <div>
                <h3 className="font-display font-semibold">Registered Address</h3>
                <p className="mt-1 text-muted-foreground">{COMPANY.address}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-1 h-5 w-5 shrink-0 text-flame" aria-hidden="true" />
              <div>
                <h3 className="font-display font-semibold">Telephone &amp; Email</h3>
                <ContactGroup className="mt-2" />
              </div>
            </div>
            <div>
              <h3 className="font-display font-semibold">Follow Us</h3>
              <div className="mt-3">
                <SocialLinks tone="light" />
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={telHref(COMPANY.primaryPhone)}
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-sm bg-navy font-semibold text-navy-foreground"
              >
                <Phone className="h-4 w-4" aria-hidden="true" /> Call{" "}
                {COMPANY.primaryPhone}
              </a>
              <a
                href={waHref(COMPANY.phones[0])}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-sm bg-primary font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
              </a>
              <Link
                to="/quote"
                className="inline-flex h-12 flex-1 items-center justify-center rounded-sm border font-semibold"
              >
                Request a Quote
              </Link>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-semibold">Send an Enquiry</h2>
            <p className="mt-2 text-muted-foreground">
              Tell us about your requirement and we will respond with next steps.
            </p>
            <div className="mt-6">
              <QuoteForm compact />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Location map" className="border-t">
        <iframe
          title="Map showing Utako, Abuja — BER Oil & Gas Ltd registered address"
          src="https://www.google.com/maps?q=Plot%20601%20T.O.S%20Benson%20Crescent%2C%20Utako%2C%20Abuja&output=embed"
          className="h-[420px] w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
