import { Phone } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "60+", label: "CISRS-Qualified Staff" },
  { value: "100%", label: "Safety Record" },
  { value: "UK-Wide", label: "Service Coverage" },
];

const StatsContactBar = () => {
  return (
    <section className="app-section relative z-20 bg-white py-6 text-slate-950 shadow-[0_-14px_40px_rgba(15,23,42,0.08)]">
      <div className="app-container flex flex-col gap-8 xl:flex-row xl:items-center xl:justify-between">
        <div className="hero-reveal grid w-full grid-cols-2 gap-y-6 sm:grid-cols-4 xl:max-w-4xl xl:gap-y-0">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`hero-stat px-4 text-center ${index < stats.length - 1 ? "sm:border-r sm:border-slate-200" : ""
                }`}
              style={{ animationDelay: `${0.08 + index * 0.1}s` }}
            >
              <p className="text-2xl font-semibold leading-none tracking-tight text-slate-950 sm:text-[1.7rem] xl:text-3xl">
                {stat.value}
              </p>
              <p className="mt-2 text-xs font-medium text-slate-500 sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div
          className="hero-reveal flex flex-col items-center gap-4 sm:flex-row sm:justify-center xl:shrink-0 xl:justify-end"
          style={{ animationDelay: "0.54s" }}
        >
          <a
            href="tel:01159641600"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
          >
            <Phone className="h-4 w-4 transition-colors duration-200 group-hover:text-blue-600" />
            0115 9641 600
          </a>

          <HashLink
            smooth
            to="/#contact"
            scroll={(el) => {
              const yOffset = -80;
              const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }}
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#0B1224]"
          >
            <span className="relative z-10 transition-colors duration-300">
              Get a Free Quote
            </span>
          </HashLink>
        </div>
      </div>
    </section>
  );
};

export default StatsContactBar;
