export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "LocalBusiness"],
  name: "Empire Scaffolding (GB) Ltd",
  url: "https://empirescaffolding.co.uk",
  logo: "https://empirescaffolding.co.uk/Logo-bg.png",
  description:
    "Family-run scaffolding company established in 2000, specialising in the supply, erection and dismantling of scaffolding for commercial, domestic and industrial projects. NASC accredited, CISRS-qualified team based in Hucknall, Nottinghamshire.",
  telephone: "+441159641600",
  email: "info@empirescaffolding.co.uk",
  foundingDate: "2000",
  areaServed: ["Nottinghamshire", "Midlands", "United Kingdom"],
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
    latitude: "53.032725",
    longitude: "-1.187530",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "16:30",
    },
  ],
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Industry Accreditation",
      recognizedBy: {
        "@type": "Organization",
        name: "National Access and Scaffolding Confederation",
        alternateName: "NASC",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Health and Safety Accreditation",
      recognizedBy: {
        "@type": "Organization",
        name: "Contractors Health and Safety Assessment Scheme",
        alternateName: "CHAS",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Health and Safety Assessment",
      recognizedBy: {
        "@type": "Organization",
        name: "Safety Management Advisory Services",
        alternateName: "SMAS",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Quality Management",
      recognizedBy: {
        "@type": "Organization",
        name: "International Organization for Standardization",
        alternateName: "ISO 9001",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Contractor Pre-qualification",
      recognizedBy: {
        "@type": "Organization",
        name: "Constructionline",
      },
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "Contractor Verification",
      recognizedBy: {
        "@type": "Organization",
        name: "Builders Profile",
      },
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
        text: "We provide traditional tube and fit scaffolding, Plettac system scaffolding, and bespoke solutions for commercial, domestic and industrial projects of any size.",
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
        text: "Call us on 0115 9641 600 or use the contact form and we will get back to you promptly with a full quotation.",
      },
    },
  ],
};

export const serviceItemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Scaffolding Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Traditional Tube & Fit Scaffolding",
        description:
          "Standard scaffolding for various commercial, domestic and industrial construction needs.",
        provider: {
          "@type": "GeneralContractor",
          name: "Empire Scaffolding (GB) Ltd",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Full Supply, Erection & Dismantling",
        description:
          "Complete scaffolding management from initial supply through to safe dismantling.",
        provider: {
          "@type": "GeneralContractor",
          name: "Empire Scaffolding (GB) Ltd",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Projects of Any Size",
        description:
          "Scaffolding solutions from small domestic towers to large-scale high-rise commercial buildings.",
        provider: {
          "@type": "GeneralContractor",
          name: "Empire Scaffolding (GB) Ltd",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Plettac System Scaffolding",
        description:
          "Modular system scaffolding suitable for complex or high-rise projects.",
        provider: {
          "@type": "GeneralContractor",
          name: "Empire Scaffolding (GB) Ltd",
        },
      },
    },
  ],
};
