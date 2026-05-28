import { Link } from "react-router-dom";

const pageLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Recent Projects", href: "/#projects" },
  { label: "Accreditations", href: "/#accreditations" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
];

// Clean formatting for the opening hours data
const openingHours = [
  { days: "Mon - Wed", time: "9:00 AM – 4:30 PM" },
  { days: "Thursday", time: "9:00 AM – 4:30 PM" },
  { days: "Friday", time: "9:00 AM – 4:30 PM" },
  { days: "Sat - Sun", time: "Closed" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0B1224] text-white">
      <div className="app-section py-12">
        <div className="app-container">
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            <div className="flex flex-1 flex-col">
              <span className="mb-4 text-xl font-bold">
                Empire Scaffolding (GB) Ltd
              </span>

              <p className="mb-6 max-w-sm leading-relaxed text-gray-300">
                A family-run scaffolding company established in 2000, delivering
                safe, reliable scaffolding solutions for commercial, domestic, and
                industrial projects across the Midlands and throughout the UK.
              </p>
            </div>

            <div className="flex flex-1 flex-col md:items-center">
              <h4 className="mb-6 text-lg font-semibold">Pages</h4>
              <ul className="space-y-4 text-gray-300 md:text-center">
                {pageLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-1 flex-col md:items-center">
              <h4 className="mb-6 text-lg font-semibold">Opening Hours</h4>
              <ul className="space-y-2 text-sm text-gray-300 md:text-center">
                {openingHours.map((item) => (
                  <li key={item.days} className="flex justify-between gap-4 md:block">
                    <span className="font-medium text-white md:block md:text-xs md:uppercase md:tracking-wider md:text-gray-400">
                      {item.days}
                    </span>
                    <span className="md:block md:mt-0.5">
                      {item.time}
                    </span>
                  </li>
                ))}
                <li className="mt-2 text-center text-xs italic text-gray-400">
                  *Hours might differ on Bank Holidays
                </li>
              </ul>
            </div>

            <div className="flex flex-1 flex-col items-start md:items-end">
              <h4 className="mb-6 text-lg font-semibold">Company</h4>
              <ul className="space-y-4 text-gray-300 md:text-right">
                <li>
                  <a
                    href="tel:01159641600"
                    className="transition-colors hover:text-white"
                  >
                    0115 9641 600
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:info@empirescaffolding.co.uk"
                    className="transition-colors hover:text-white"
                  >
                    info@empirescaffolding.co.uk
                  </a>
                </li>

                <li>
                  <a
                    href="https://maps.app.goo.gl/2t5UQAyUMnBofiH49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-colors hover:text-white"
                  >
                    Bakerbrook Industrial Estate
                    <br />
                    Wigwam Lane, Hucknall
                    <br />
                    Nottingham NG15 7SZ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20" />

      <div className="app-section py-6">
        <div className="app-container flex flex-col items-center justify-between gap-4 text-sm text-gray-300 md:flex-row">
          <div className="text-center md:text-left">
            © 2026 Empire Scaffolding (GB) Ltd. All rights reserved.
          </div>

          <div>
            Powered by{" "}
            <a
              href="https://www.ansely.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white hover:underline"
            >
              Ansely
            </a>
          </div>

          <div className="flex gap-6">
            <Link
              to="/privacy-policy"
              className="underline transition hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-and-conditions"
              className="underline transition hover:text-white"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
