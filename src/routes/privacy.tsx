import { createFileRoute } from "@tanstack/react-router";
import { COMPANY } from "@/lib/company";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | BER Oil & Gas Ltd" },
      {
        name: "description",
        content:
          "How BER Oil & Gas Ltd collects, uses and protects the information submitted through enquiry and quote request forms on this website.",
      },
      { property: "og:title", content: "Privacy Policy | BER Oil & Gas Ltd" },
      {
        property: "og:description",
        content: "How we handle information submitted through this website.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="container-x max-w-3xl py-20 lg:py-28">
      <p className="eyebrow">Legal</p>
      <h1 className="mt-5 font-display text-4xl font-semibold">Privacy Policy</h1>
      <div className="mt-10 space-y-8 leading-relaxed text-muted-foreground">
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Information We Collect
          </h2>
          <p className="mt-3">
            We collect only the information you choose to submit through our enquiry and
            quote request forms — typically your name, company name, phone number, email
            address, location and details of your diesel requirement.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            How We Use Your Information
          </h2>
          <p className="mt-3">
            Your information is used solely to respond to your enquiry, prepare a quote
            and communicate with you about your diesel supply requirement. We do not sell
            or rent your information to third parties.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Data Retention and Security
          </h2>
          <p className="mt-3">
            Enquiry details are retained only for as long as necessary to serve your
            request and to meet our record-keeping obligations. We apply reasonable
            measures to protect the information you provide.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">Cookies</h2>
          <p className="mt-3">
            This website uses only the technical cookies required for the site to
            function. It does not run advertising or profiling cookies.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Your Rights
          </h2>
          <p className="mt-3">
            You may request access to, correction of, or deletion of the information you
            have submitted by contacting us using the details below.
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl font-semibold text-foreground">
            Contact Us
          </h2>
          <p className="mt-3">
            {COMPANY.name} ({COMPANY.rc}), {COMPANY.address}. Telephone:{" "}
            {COMPANY.phones.join(" · ")}.
          </p>
        </section>
      </div>
    </article>
  );
}
