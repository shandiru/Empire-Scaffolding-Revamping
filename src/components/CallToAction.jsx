import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const inputClassName =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600";

const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
};

// Updated business hours data
const businessHours = [
  "Monday: 9:00 AM – 4:30 PM (Hours might differ on Bank Holidays)",
  "Tuesday: 9:00 AM – 4:30 PM",
  "Wednesday: 9:00 AM – 4:30 PM",
  "Thursday: 9:00 AM – 4:00 PM",
  "Friday: 9:00 AM – 4:30 PM",
  "Saturday: Closed",
  "Sunday: Closed",
];

const CallToAction = () => {
  const formRef = useRef(null);
  const [formStatus, setFormStatus] = useState({
    type: "idle",
    message: "",
  });

  const isSubmitting = formStatus.type === "loading";

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      !emailJsConfig.serviceId ||
      !emailJsConfig.templateId ||
      !emailJsConfig.publicKey
    ) {
      setFormStatus({
        type: "error",
        message:
          "Email service is not configured yet. Please try again later or call us directly.",
      });
      return;
    }

    setFormStatus({
      type: "loading",
      message: "Sending your enquiry...",
    });

    try {
      await emailjs.sendForm(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        formRef.current,
        {
          publicKey: emailJsConfig.publicKey,
        }
      );

      formRef.current.reset();
      setFormStatus({
        type: "success",
        message: "Thank you. Your enquiry has been sent successfully.",
      });
    } catch (error) {
      console.error("EmailJS enquiry failed:", error);
      setFormStatus({
        type: "error",
        message:
          "Sorry, your enquiry could not be sent. Please try again or call us on 0115 9641 600.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="app-section relative overflow-hidden py-12 text-slate-900 sm:py-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(21,93,252,0.12),transparent_32%),linear-gradient(180deg,#F9FAFB_0%,#F3F4F6_100%)]" />

      <div className="app-container relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[1.5rem] border border-white/60 bg-white/88 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:rounded-[1.75rem] sm:p-8">
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-slate-950">
            <span className="h-px w-12 bg-slate-300" />
            <span>GET A QUOTE</span>
          </div>

          <h2 className="mt-5 text-[2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950 sm:text-[2.7rem]">
            Tell us about your project.
          </h2>

          <form ref={formRef} className="mt-8 space-y-4" onSubmit={handleSubmit}>
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
                  name="from_name"
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
                  name="company_name"
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
                  name="from_email"
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
                  name="phone_number"
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
                name="project_location"
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
                name="message"
                rows="4"
                required
                placeholder="Tell us about your scaffolding requirements, project size, and timescales."
                className={`${inputClassName} min-h-32 resize-y`}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "SENDING..." : "SEND ENQUIRY"}
            </button>

            {formStatus.message && (
              <p
                aria-live="polite"
                className={`rounded-xl border px-4 py-3 text-sm ${
                  formStatus.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : formStatus.type === "error"
                      ? "border-red-200 bg-red-50 text-red-700"
                      : "border-blue-200 bg-blue-50 text-blue-700"
                }`}
              >
                {formStatus.message}
              </p>
            )}
          </form>

          <p className="mt-5 text-center text-xs text-slate-500">
            By submitting this form you agree to us processing your details to respond to
            your enquiry. Your information is handled securely and in line with our Privacy Policy.
          </p>

          <div className="mt-6 h-60 w-full">
            <iframe
              className="h-full w-full rounded-xl border border-slate-200"
              height="240"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.3122216885804!2d-1.1875307999999998!3d53.032725799999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879eabef559f7d5%3A0x26077de68f86ee4c!2sEmpire%20Scaffolding%20(GB)%20Ltd!5e0!3m2!1sen!2slk!4v1779297176558!5m2!1sen!2slk"
              title="Empire Scaffolding Hucknall location map"
            />
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/60 bg-white/88 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur-sm sm:rounded-[1.75rem] sm:p-8">
          <div className="inline-flex items-center gap-3 text-sm font-semibold text-slate-950">
            <span className="h-px w-12 bg-slate-300" />
            <span>Contact Details</span>
          </div>

          <h3 className="mt-5 text-[2rem] font-semibold leading-[1.05] tracking-[-0.05em] text-slate-950">
            Rather just pick up the phone?
          </h3>

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
                className="mt-3 lg:ml-10 inline-flex items-center gap-2 text-slate-900 transition hover:text-blue-600"
                href="https://maps.app.goo.gl/2t5UQAyUMnBofiH49"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin height={16} width={16} />
                Hucknall, Nottinghamshire
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
