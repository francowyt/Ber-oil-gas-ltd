export const SERVICES = [
  {
    title: "Diesel Supply & Distribution",
    body: "Reliable supply and distribution of quality diesel designed to support commercial, industrial and operational energy needs.",
  },
  {
    title: "Bulk Diesel Supply",
    body: "For businesses and organisations requiring larger-volume diesel supply for their operations.",
  },
  {
    title: "Commercial & Industrial Supply",
    body: "For businesses that depend on consistent fuel availability to keep operations running.",
  },
  {
    title: "Diesel Distribution",
    body: "Professional coordination and distribution of diesel to customers in line with agreed requirements.",
  },
] as const;

export const WHY_US = [
  {
    title: "Quality Focus",
    body: "A clear commitment to supplying pure, quality diesel to every customer we serve.",
  },
  {
    title: "Reliability",
    body: "Focused on dependable fuel supply that businesses can plan their operations around.",
  },
  {
    title: "Professional Service",
    body: "Clear communication and responsive customer engagement at every stage of the process.",
  },
  {
    title: "Customer-Centred Approach",
    body: "Supply solutions shaped around each customer's stated requirements.",
  },
  {
    title: "Efficient Distribution",
    body: "A structured, organised approach to diesel supply and distribution.",
  },
  {
    title: "Business Continuity",
    body: "Helping customers maintain the energy availability their operations depend on.",
  },
] as const;

export const INDUSTRIES = [
  "Manufacturing",
  "Construction",
  "Hospitality",
  "Telecommunications",
  "Logistics & Transportation",
  "Agriculture",
  "Commercial Businesses",
  "Facilities & Real Estate",
  "Industrial Operations",
] as const;

export const PROCESS = [
  {
    step: "01",
    title: "Understand Your Requirement",
    body: "We start by understanding your diesel supply needs and how they support your operations.",
  },
  {
    step: "02",
    title: "Confirm Supply Requirements",
    body: "We establish quantity, delivery requirements and other relevant details together with you.",
  },
  {
    step: "03",
    title: "Coordinate Distribution",
    body: "Supply and distribution is arranged in line with the requirements agreed with you.",
  },
  {
    step: "04",
    title: "Deliver With Professionalism",
    body: "We maintain clear communication and customer-focused service throughout.",
  },
] as const;

export const FAQS = [
  {
    q: "What does BER OIL & GAS LTD specialise in?",
    a: "BER OIL & GAS LTD is a Nigerian oil and gas company focused on the supply and distribution of pure, quality diesel for commercial, industrial and operational use.",
  },
  {
    q: "How can I request diesel supply?",
    a: "You can submit your requirements through our Request a Quote form, or contact us directly on 08068002660 or 09110816350.",
  },
  {
    q: "Where is BER OIL & GAS LTD located?",
    a: "Our registered address is Plot 601 T.O.S Benson Crescent, Utako, Abuja, FCT, Nigeria.",
  },
  {
    q: "How can I contact BER OIL & GAS LTD?",
    a: "You can call us on 08068002660 or 09110816350, message us on WhatsApp, or send an enquiry through the contact form on this website.",
  },
  {
    q: "Can businesses request diesel supply?",
    a: "Yes. Businesses and organisations can submit their diesel supply requirements to us for consideration, and our team will respond with the relevant details.",
  },
  {
    q: "How do I enquire about bulk diesel supply?",
    a: "Use the Request a Quote form and include your estimated quantity and location. Our team will follow up to confirm the details of your requirement.",
  },
  {
    q: "Is BER OIL & GAS LTD a registered company?",
    a: "Yes. BER OIL & GAS LTD is a private company limited by shares, registered with RC 1924614 and incorporated on 29 April 2022.",
  },
] as const;

export type Testimonial = {
  quote: string;
  name: string;
  company?: string;
  role?: string;
  logo?: string;
};

/**
 * Only genuine, company-approved testimonials belong here.
 * Leave empty until BER OIL & GAS LTD supplies them.
 */
export const TESTIMONIALS: Testimonial[] = [];

export const VALUES = [
  {
    title: "Quality",
    body: "We supply pure, quality diesel and treat product integrity as non-negotiable.",
  },
  {
    title: "Reliability",
    body: "Dependable supply that customers can plan their operations around.",
  },
  {
    title: "Integrity",
    body: "Honest commitments, clear terms and straightforward communication.",
  },
  {
    title: "Professionalism",
    body: "Every enquiry and delivery is handled with discipline and care.",
  },
  {
    title: "Customer Focus",
    body: "Supply arranged around each customer's stated requirements.",
  },
  {
    title: "Efficiency",
    body: "An organised approach to coordination and distribution.",
  },
] as const;

export const QUALITY_PILLARS = [
  {
    title: "Product Quality",
    body: "We supply pure, quality diesel and protect the integrity of the product from supply through to delivery.",
  },
  {
    title: "Consistency",
    body: "Customers receive the same standard of product and service on every supply arrangement.",
  },
  {
    title: "Professional Handling",
    body: "Diesel is handled with the care and discipline expected of a professional energy supplier.",
  },
  {
    title: "Customer Confidence",
    body: "Clear communication and consistent service are how we earn and keep the confidence of the businesses we serve.",
  },
  {
    title: "Reliable Supply",
    body: "Our processes are organised around dependability, so operations are not left waiting.",
  },
  {
    title: "Professional Service",
    body: "Responsive engagement from first enquiry through to completion of supply.",
  },
] as const;
