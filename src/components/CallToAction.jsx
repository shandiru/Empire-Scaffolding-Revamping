import {
  Instagram,
  Youtube,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600";

const businessHours = [
  "Business hours to be confirmed with client",
  "before go-live",
];

const CallToAction = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-5 py-12 text-slate-900 sm:px-8 sm:py-14 lg:px-10"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.12),transparent_32%),linear-gradient(180deg,#f5f7fb_0%,#eef2f8_100%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.75rem] border border-white/60 bg-white/88 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-slate-950">
            <span className="h-px w-12 bg-slate-300" />
            <span>GET A QUOTE</span>
          </div>

          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-[2.7rem]">
            Tell us about your project.
          </h2>

          <form className="mt-8 space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  className="text-sm font-medium text-slate-600"
                  htmlFor="contact-name"
                >
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium text-slate-600"
                  htmlFor="contact-company"
                >
                  Company Name
                </label>
                <input
                  id="contact-company"
                  name="companyName"
                  type="text"
                  placeholder="Enter company name"
                  className={inputClassName}
                />
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label
                  className="text-sm font-medium text-slate-600"
                  htmlFor="contact-email"
                >
                  Email Address *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="hello@example.com"
                  className={inputClassName}
                />
              </div>

              <div>
                <label
                  className="text-sm font-medium text-slate-600"
                  htmlFor="contact-phone"
                >
                  Phone Number *
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="07XXX XXXXXX"
                  className={inputClassName}
                />
              </div>
            </div>

            <div>
              <label
                className="text-sm font-medium text-slate-600"
                htmlFor="contact-location"
              >
                Project Location *
              </label>
              <input
                id="contact-location"
                name="projectLocation"
                type="text"
                required
                placeholder="Where is the project located?"
                className={inputClassName}
              />
            </div>

            <div>
              <label
                className="text-sm font-medium text-slate-600"
                htmlFor="contact-description"
              >
                Tell us about your project *
              </label>
              <textarea
                id="contact-description"
                name="description"
                rows="4"
                required
                placeholder="Tell us about your scaffolding requirements, project size, and timescales."
                className={`${inputClassName} min-h-32 resize-y`}
              />
            </div>

            <button
              type="submit"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
            >
              SEND ENQUIRY
            </button>
          </form>

          <p className="mt-5 text-center text-xs text-slate-500">
            By submitting this form you agree to us processing your details to
            respond to your enquiry. Your information is handled securely and in
            line with our Privacy Policy.
          </p>

          <div className="mt-6 h-60 w-full">
            <iframe
              className="h-full w-full rounded-xl border border-slate-200"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Hucknall%2C%20Nottinghamshire&output=embed"
              title="Empire Scaffolding Hucknall location map"
            />
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-white/60 bg-white/88 p-8 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm">
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-slate-950">
            <span className="h-px w-12 bg-slate-300" />
            <span>Contact Details</span>
          </div>

          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950">
            Rather just pick up the phone?
          </h2>

          <p className="mt-5 leading-8 text-slate-500">
            Empire Scaffolding (GB) Ltd,
            <br />
            Hucknall, Nottinghamshire
          </p>

          <p className="mt-4 text-slate-500">
            <a
              href="tel:01159641600"
              className="transition hover:text-blue-600"
            >
              0115 9641 600
            </a>
          </p>

          <p className="mt-4 text-slate-500">
            <a
              href="mailto:info@empirescaffolding.co.uk"
              className="inline-flex items-center gap-2 transition hover:text-blue-600"
            >
              <Mail size={18} />
              info@empirescaffolding.co.uk
            </a>
          </p>

          <div className="mt-6 flex items-center gap-4 text-xl">
            <a
              aria-label="Visit our Instagram page"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Instagram height={20} width={20} />
            </a>
            <a
              aria-label="Visit our YouTube page"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 transition hover:border-blue-600 hover:text-blue-600"
              href="#"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Youtube height={20} width={20} />
            </a>
          </div>

          <h3 className="mt-10 text-lg font-semibold text-slate-900">
            Business Hours
          </h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-500">
            {businessHours.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>

          <div className="mt-10 rounded-[1.25rem] border border-slate-200 bg-white/70 p-4">
            <p className="mb-3 text-sm font-medium text-slate-600">Find us block</p>
            <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-500">
              <p>Empire Scaffolding (GB) Ltd</p>
              <p>Hucknall, Nottinghamshire</p>
              <p>United Kingdom</p>
              <a
                className="mt-3 inline-flex items-center gap-2 text-slate-900 transition hover:text-blue-600"
                href="tel:01159641600"
              >
                <Phone height={16} width={16} />
                Call 0115 9641 600
              </a>
              <a
                className="mt-3 inline-flex items-center gap-2 text-slate-900 transition hover:text-blue-600"
                href="https://www.google.com/maps/search/?api=1&query=Hucknall,+Nottinghamshire"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin height={16} width={16} />
                Open Hucknall location
                <ArrowRight height={16} width={16} />
              </a>
            </div>
          </div>

          <div className="mt-8 flex gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="underline transition hover:text-blue-600"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms&condition"
              className="underline transition hover:text-blue-600"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
