import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { TESTIMONIALS } from "@/lib/content";

export function Testimonials() {
  const [i, setI] = useState(0);
  const items = TESTIMONIALS;
  const has = items.length > 0;
  const item = items[i];

  return (
    <section className="border-y bg-secondary py-20 lg:py-28">
      <div className="container-x">
        <p className="eyebrow">Client Confidence</p>
        <h2 className="mt-5 max-w-3xl font-display text-3xl leading-tight font-semibold sm:text-4xl lg:text-[2.75rem]">
          Trusted by Customers Who Value Quality.
        </h2>

        {has && item ? (
          <div className="mt-12 grid gap-8 lg:grid-cols-[auto_1fr] lg:items-start">
            <Quote className="h-10 w-10 text-flame" aria-hidden="true" />
            <figure>
              <blockquote className="font-display text-xl leading-relaxed font-medium sm:text-2xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                {item.logo ? (
                  <img
                    src={item.logo}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-10 w-auto object-contain"
                  />
                ) : null}
                <div>
                  <p className="font-display font-semibold">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {[item.role, item.company].filter(Boolean).join(", ")}
                  </p>
                </div>
              </figcaption>
              {items.length > 1 ? (
                <div className="mt-8 flex gap-3">
                  <button
                    type="button"
                    aria-label="Previous testimonial"
                    onClick={() => setI((v) => (v - 1 + items.length) % items.length)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors hover:border-flame"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next testimonial"
                    onClick={() => setI((v) => (v + 1) % items.length)}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-sm border transition-colors hover:border-flame"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              ) : null}
            </figure>
          </div>
        ) : (
          <div className="mt-12 max-w-3xl border-l-2 border-flame bg-card p-9">
            <p className="leading-relaxed text-muted-foreground">
              We publish customer feedback only once it has been given and approved by the
              organisations we supply. Verified testimonials from BER OIL &amp; GAS LTD
              customers will appear here.
            </p>
            <Link
              to="/quote"
              className="mt-7 inline-flex items-center gap-2 border-b-2 border-flame pb-1 font-display font-semibold text-primary"
            >
              Become a customer <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
