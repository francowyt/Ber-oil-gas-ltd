import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle } from "lucide-react";
import fleet from "@/assets/fleet.jpg";
import { PageHero } from "@/components/PageHero";
import { ContactGroup } from "@/components/ContactGroup";
import { QuoteForm } from "@/components/QuoteForm";
import { COMPANY, mailHref, waHref } from "@/lib/company";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote | Diesel Supply — BER Oil & Gas Ltd" },
      {
        name: "description",
        content:
          "Request a diesel supply quote from BER Oil & Gas Ltd. Share your requirement, quantity and location, and our Abuja team will respond.",
      },
      { property: "og:title", content: "Request a Diesel Supply Quote" },
      {
        property: "og:description",
        content: "Tell us your diesel requirement and our team will respond.",
      },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

function Quote() {
  return (
    <>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell Us What Your Operations Need."
        intro="Share your diesel requirement and our team will follow up with the details required to move forward."
        image={fleet}
      />

      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <QuoteForm />

          <aside className="space-y-6">
            <div className="rounded-sm border bg-secondary p-7">
              <h2 className="font-display text-lg font-semibold">Prefer to talk?</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Call our team directly during business hours.
              </p>
              <div className="mt-5 space-y-3">
                <ContactGroup />
                <a
                  href={mailHref()}
                  className="flex h-12 items-center justify-center gap-2 rounded-sm bg-navy font-semibold text-navy-foreground"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" /> Email Us
                </a>
                <a
                  href={waHref(COMPANY.phones[0])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 items-center justify-center gap-2 rounded-sm border font-semibold"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" /> Chat on WhatsApp
                </a>
              </div>
            </div>
            <div className="rounded-sm border p-7 text-sm leading-relaxed text-muted-foreground">
              <p className="font-display font-semibold text-foreground">
                {COMPANY.name}
              </p>
              <p className="mt-2">{COMPANY.address}</p>
              <p className="mt-2">{COMPANY.rc}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
