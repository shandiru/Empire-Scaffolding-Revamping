import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    question: "What types of scaffolding do you provide?",
    answer:
      "We provide traditional tube and fit scaffolding, Plettac system scaffolding, and bespoke solutions for commercial, domestic, and industrial projects of any size.",
  },
  {
    question: "Where do you operate?",
    answer:
      "We are based in Hucknall, Nottinghamshire and operate throughout the Midlands and across the UK. We provide UK-wide quotations for larger projects.",
  },
  {
    question: "Are your staff CISRS qualified?",
    answer:
      "Yes. We have over 60 directly employed CISRS-qualified staff, ensuring every project is delivered safely and to the highest professional standards.",
  },
  {
    question: "What size projects do you take on?",
    answer:
      "We work on everything from small domestic jobs to large-scale high-rise commercial projects. No project is too big or too small.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Call us on 0115 9641 600 or use the contact form below and we'll get back to you promptly with a full quotation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" data-aos="fade-up">
      <div className="app-section py-12 sm:py-14">
        <div className="app-container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <div
            className="lg:sticky lg:top-10 lg:self-start"
            data-aos="fade-up"
            data-aos-delay="80"
          >
            <div className="inline-flex items-center gap-3 text-sm font-semibold text-slate-950">
              <span className="h-px w-12 bg-slate-300" />
              <span>FAQ</span>
            </div>

            <h2 className="mt-5 max-w-xl text-[2.4rem] font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-[3.1rem]">
              Frequently asked questions about our scaffolding services.
            </h2>

            <p className="mt-5 max-w-lg text-base leading-7 text-slate-500">
              A few quick answers about how we work, where we operate, and what
              to expect when you work with Empire Scaffolding.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <article
                  key={faq.question}
                  className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.05)] transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={140 + index * 80}
                >
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7"
                  >
                    <h3 className="text-lg font-semibold leading-snug tracking-[-0.02em] text-slate-900 sm:text-[1.2rem]">
                      {faq.question}
                    </h3>

                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-blue-600 bg-blue-600 text-white"
                          : "border-slate-200 bg-white text-slate-500"
                      }`}
                    >
                      <Plus height={20} width={20} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <p className="overflow-hidden px-6 pb-6 text-base leading-7 text-slate-500 sm:px-7">
                      {faq.answer}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
