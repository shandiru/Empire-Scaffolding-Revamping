import { ArrowUpRight, Quote } from "lucide-react";

const clientLogos = [
  {
    name: "NHS Nottingham University Hospitals",
    src: "/nhs.png",
    alt: "NHS Nottingham University Hospitals logo",
  },
  {
    name: "Nottingham City Council",
    src: "/nottingham.png",
    alt: "Nottingham City Council logo",
  },
  {
    name: "Morgan Sindall Group",
    src: "/mor.png",
    alt: "Morgan Sindall Group logo",
  },
  {
    name: "Bowmer & Kirkland",
    src: "/bow.png",
    alt: "Bowmer and Kirkland logo",
  },
  {
    name: "University of Nottingham",
    src: "/university.png",
    alt: "University of Nottingham logo",
  },
];

const Testimonials = () => {
  return (
    <section
      className="app-section bg-white py-16"
      id="testimonials"
    >
      <div className="app-container rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <div className="hero-reveal inline-flex items-center gap-3 rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-slate-950">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span>Our Testimonials</span>
            </div>

            <h2
              className="hero-reveal mt-6 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]"
              style={{ animationDelay: "0.1s" }}
            >
              Client experiences that reflect our{" "}
              <span className="italic">reliability</span>
            </h2>

            <p
              className="hero-reveal mt-5 max-w-2xl text-sm leading-7 text-slate-500"
              style={{ animationDelay: "0.18s" }}
            >
              Don't just take our word for it - hear from the contractors,
              developers, and homeowners who trust Empire Scaffolding to deliver.
            </p>

            <a
              href="#contact"
              className="hero-reveal mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              style={{ animationDelay: "0.26s" }}
            >
              See All Reviews
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          <div className="hero-stat relative" style={{ animationDelay: "0.18s" }}>
            <div className="mb-8 flex items-center justify-between gap-4">
              <div className="flex h-12 w-36 items-center justify-start">
                <img
                  src="/nottingham.png"
                  alt="Nottingham City Council logo"
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <Quote className="h-12 w-12 fill-slate-100 text-slate-100" />
            </div>

            <blockquote className="max-w-2xl text-base font-semibold leading-8 text-slate-950">
              "They were the most polite people I've ever had working with me.
              People need to treat people as they would like to be treated
              themselves before leaving a bad review."
            </blockquote>

            <div className="mt-10">
              <p className="text-sm font-bold text-slate-950">Martin Wragg</p>
              <p className="mt-1 text-xs text-slate-500">Verified Customer</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-100 pt-8">
          <p className="mb-8 text-center text-sm text-slate-500">
            Trusted by leading organisations across construction, education, and
            the public sector
          </p>

          <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {clientLogos.map((logo, index) => (
              <div
                key={logo.name}
                className="hero-stat flex h-16 w-full max-w-[190px] items-center justify-center rounded-xl bg-white px-5 py-3"
                style={{ animationDelay: `${0.28 + index * 0.08}s` }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
