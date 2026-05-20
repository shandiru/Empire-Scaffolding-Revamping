import React from "react";

const accreditations = [
  {
    title: "NASC",
    description:
      "National Access and Scaffolding Confederation - the leading trade association for the access and scaffolding industry, ensuring safety and professional standards.",
    logo: "/accreditations/nasc.svg",
  },
  {
    title: "CHAS",
    description:
      "Contractors Health and Safety Assessment Scheme - health and safety pre-qualification demonstrating full compliance with industry standards.",
    logo: "/accreditations/chas.svg",
  },
  {
    title: "SMAS",
    description:
      "Safety Management Advisory Services - independent health and safety assessment scheme providing assurance of contractor competence and compliance.",
    logo: "/accreditations/smas.svg",
  },
  {
    title: "Builders Profile",
    description:
      "Verified contractor profile ensuring financial stability and professional competence across the construction industry.",
    logo: "/accreditations/builders-profile.svg",
  },
  {
    title: "Construction Line",
    description:
      "Pre-qualification service for construction contractors, ensuring compliance, capability, and readiness to deliver.",
    logo: "/accreditations/construction-line.svg",
  },
  {
    title: "ISO 9001",
    description:
      "ISO 9001:2015 Quality Management certification - international standard ensuring consistent, high-quality service delivery on every project.",
    logo: "/accreditations/iso-9001.svg",
  },
];

const CertificationCategories = () => {
  return (
    <section className="app-section bg-gray-50 py-16 lg:py-20" id="accreditations">
      <div className="app-container">
        <div className="mb-12">
          <p className="hero-reveal mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            OUR ACCREDITATIONS &amp; MEMBERSHIPS
          </p>
          <h2
            className="hero-reveal text-3xl font-bold text-slate-950 lg:text-4xl"
            style={{ animationDelay: "0.1s" }}
          >
            Our Accreditations &amp; Memberships
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {accreditations.map((accreditation, index) => (
            <article
              key={accreditation.title}
              className="hero-stat rounded-2xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ animationDelay: `${0.16 + index * 0.08}s` }}
            >
              <div className="mb-4 flex h-16 w-28 items-center justify-center rounded-xl border border-slate-200 bg-gray-50 p-3">
                <img
                  src={accreditation.logo}
                  alt={`${accreditation.title} logo - Empire Scaffolding accredited member`}
                  className="max-h-full max-w-full object-contain"
                  loading="lazy"
                />
              </div>

              <h3 className="mb-2 text-lg font-bold text-slate-950">
                {accreditation.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-500">
                {accreditation.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationCategories;
