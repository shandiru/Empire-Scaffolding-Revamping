export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Empire Scaffolding (GB) Ltd",
  description:
    "Family-run scaffolding company established in 2000, specialising in commercial, domestic and industrial scaffolding across the Midlands and UK.",
  url: "https://empirescaffolding.co.uk",
  telephone: "01159641600",
  email: "info@empirescaffolding.co.uk",
  foundingDate: "2000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bakerbrook Industrial Estate, Wigwam Lane",
    addressLocality: "Hucknall",
    addressRegion: "Nottinghamshire",
    postalCode: "NG15 7SZ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "53.0394",
    longitude: "-1.1977",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday"],
      opens: "09:00",
      closes: "16:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Thursday",
      opens: "09:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "00:00",
      closes: "00:00",
    },
  ],
};

export const faqPageSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of scaffolding do you provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide traditional tube and fit scaffolding, Plettac system scaffolding, and bespoke solutions for commercial, domestic, and industrial projects of any size.",
      },
    },
    {
      "@type": "Question",
      name: "Where do you operate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We are based in Hucknall, Nottinghamshire and operate throughout the Midlands and across the UK. We provide UK-wide quotations for larger projects.",
      },
    },
    {
      "@type": "Question",
      name: "Are your staff CISRS qualified?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We have over 60 directly employed CISRS-qualified staff, ensuring every project is delivered safely and to the highest professional standards.",
      },
    },
    {
      "@type": "Question",
      name: "What size projects do you take on?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We work on everything from small domestic jobs to large-scale high-rise commercial projects. No project is too big or too small.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call us on 0115 9641 600 or use the contact form on our website and we will get back to you promptly with a full quotation.",
      },
    },
  ],
};
