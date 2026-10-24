import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | BER Oil & Gas Ltd" },
      {
        name: "description",
        content:
          "Terms and conditions governing the use of the BER Oil & Gas Ltd website and enquiries submitted through it.",
      },
      { property: "og:title", content: "Terms & Conditions | BER Oil & Gas Ltd" },
      {
        property: "og:description",
        content: "Terms governing use of this website and website enquiries.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <article className="container-x max-w-3xl py-20 lg:py-28">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-5 font-display text-4xl font-semibold">Terms &amp; Conditions</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Use of This Website
          </h2>
          <p className="mt-3">
            This website is operated by {COMPANY.name} ({COMPANY.rc}). By using it you
            agree to use the site lawfully and not to interfere with its operation or
            security.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Information on This Website
          </h2>
          <p className="mt-3">
            Content is provided for general information about our diesel supply and
            distribution activities. It does not constitute an offer, quotation or
            binding commitment. Supply arrangements are confirmed in writing on a
            case-by-case basis.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Enquiries and Quotes
          </h2>
          <p className="mt-3">
            Submitting an enquiry or quote request does not create a contract. Any supply
            of diesel is subject to separate agreed commercial terms between you and
            {" "}{COMPANY.name}.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Intellectual Property
          </h2>
          <p className="mt-3">
            The {COMPANY.name} name, logo and website content are the property of the
            company and may not be reproduced without written permission.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Governing Law
          </h2>
          <p className="mt-3">
            These terms are governed by the laws of the Federal Republic of Nigeria.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">
            {COMPANY.address}. Telephone: {COMPANY.phones.join(" · ")}.
          </p>
        </section>
      </div>
    </article>
  );
}
