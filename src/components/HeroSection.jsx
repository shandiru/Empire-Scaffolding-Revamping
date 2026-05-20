import { useEffect, useState } from "react";
import { ArrowUpRight, Star, Menu, X } from "lucide-react";
import { isPrerender } from "../seo/isPrerender";

const heroStats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 60, suffix: "", label: "CISRS-Trained Staff" },
  { value: 100, suffix: "%", label: "Safety Record" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Recent Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const CounterValue = ({ value, suffix = "", duration = 1600, decimals = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let frameId;
    const startTime = performance.now();

    const updateValue = (currentTime) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      const easedProgress = 1 - (1 - progress) ** 3;
      setDisplayValue(value * easedProgress);

      if (progress < 1) {
        frameId = window.requestAnimationFrame(updateValue);
      }
    };

    frameId = window.requestAnimationFrame(updateValue);
    return () => window.cancelAnimationFrame(frameId);
  }, [duration, value]);

  return (
    <span>
      {displayValue.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldLoadVideo = !isPrerender();

  return (
    <section
      id="top"
      className="relative min-h-screen max-w-330 mt-4 mx-auto rounded-2xl overflow-hidden bg-[#0B1224] text-white"
    >
      <video
        aria-label="Empire Scaffolding aerial view of commercial scaffolding project Nottingham"
        className="absolute inset-0 h-full w-full object-cover"
        poster="/Empire.jpg"
        src={shouldLoadVideo ? "/back.mp4" : undefined}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,33,0.1)_0%,rgba(8,15,33,0.2)_25%,rgba(8,15,33,0.62)_70%,rgba(4,8,20,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.16),transparent_30%)]" />

      <header className="app-section absolute inset-x-0 top-4 z-50 sm:top-6">
        <div className="app-container rounded-[1.4rem] border border-white/80 bg-white px-4 py-3 shadow-[0_20px_60px_rgba(15,23,42,0.15)] sm:rounded-[2rem] sm:px-8 sm:py-4 lg:rounded-[2.6rem] lg:px-10 lg:py-6">
          <div className="flex items-center justify-between gap-4">
            <a href="#top" className="flex items-center">
              <img
                src="/Logo.png"
                alt="Empire Scaffolding Logo"
                className="h-11 w-auto object-contain sm:h-12 lg:h-14"
              />
            </a>

            <nav className="hidden items-center gap-10 text-[1.05rem] font-medium text-slate-700 lg:flex">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Header Quote Button */}
            <div className="hidden sm:block">
              <a
                href="mailto:Shay@empirescaffolding.co.uk"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-[#0B1224] px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 lg:px-8 lg:py-4 lg:text-base"
              >
                <span className="absolute inset-0 translate-y-full bg-blue-700 transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Get Quote
                  {/* Added transition and group-hover:rotate-45 below */}
                  <ArrowUpRight className="btn-arrow h-4 w-4 transition-transform duration-300 group-hover:rotate-45 lg:h-5 lg:w-5" />
                </span>
              </a>
            </div>

            <button
              className="block text-slate-900 lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <div className="mt-5 flex flex-col gap-4 border-t border-slate-200 pt-5 lg:hidden">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium text-slate-700 transition hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="mailto:Shay@empirescaffolding.co.uk"
                className="group relative mt-2 inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-[#0B1224] py-3 text-sm font-semibold text-white transition-colors duration-300"
              >
                <span className="absolute inset-0 translate-y-full bg-blue-700 transition-transform duration-300 ease-out group-hover:translate-y-0" />
                <span className="relative z-10 inline-flex items-center gap-2">
                  Get Quote
                  {/* Added transition and group-hover:rotate-45 below */}
                  <ArrowUpRight className="btn-arrow h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
                </span>
              </a>
            </div>
          )}
        </div>
      </header>

      <div className="app-section relative z-10 flex min-h-screen w-full items-end pb-10 pt-36 sm:pb-12 sm:pt-40 lg:pb-14 lg:pt-44">
        <div className="app-container">
          <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(560px,0.95fr)] lg:items-end">
            <div className="max-w-[760px] text-left">
              <div
                className="hero-reveal inline-flex max-w-full items-center gap-2 rounded-full bg-gray-900/88 px-4 py-3 text-xs font-semibold text-white shadow-[0_16px_32px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:gap-3 sm:px-5 sm:text-sm"
                style={{ animationDelay: "0.08s" }}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                <span>Professional Scaffolding Services</span>
              </div>

              <div className="mt-8">
                <h1
                  className="hero-reveal text-[2.7rem] font-medium leading-[0.98] tracking-tight text-white min-[380px]:text-5xl"
                  style={{ animationDelay: "0.18s" }}
                >
                  Safe &amp; Reliable Scaffolding{" "}
                  <span className="mt-4 block font-light italic">
                    Solutions
                  </span>
                </h1>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <div
                className="hero-reveal grid gap-6 sm:grid-cols-3 sm:gap-0"
                style={{ animationDelay: "0.56s" }}
              >
                {heroStats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="hero-stat relative py-5 sm:px-8 sm:py-0"
                    style={{ animationDelay: `${0.68 + index * 0.12}s` }}
                  >
                    <p className="text-5xl font-semibold tracking-tight text-white lg:text-[3.5rem]">
                      <CounterValue value={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="mt-4 text-base text-white/86 lg:text-[0.9rem]">
                      {stat.label}
                    </p>

                    {/* Slanted Separator Line */}
                    {index < heroStats.length - 1 && (
                      <div className="hidden sm:block absolute right-0 top-1/2 h-20 w-[1px] -translate-y-1/2 rotate-[15deg] bg-white/12" />
                    )}
                  </div>
                ))}
              </div>

              <div
                className="hero-reveal mt-8 border-t border-white/12 pt-8"
                style={{ animationDelay: "0.92s" }}
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-10">

                  {/* Hero Main Video-Style Button */}
                  <a
                    href="mailto:Shay@empirescaffolding.co.uk"
                    className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-5 py-4 text-base font-semibold text-[#0B1224] transition-colors duration-300 min-[420px]:w-fit sm:px-8"
                  >
                    <span className="absolute inset-0 translate-y-full bg-blue-100 transition-transform duration-300 ease-out group-hover:translate-y-0" />

                    <span className="relative z-10 inline-flex items-center gap-3 transition-colors duration-300">
                      Get a Free Quote
                      {/* Added transition and group-hover:rotate-45 below */}
                      <ArrowUpRight className="btn-arrow h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </a>

                  {/* Review Section */}
                  <div className="flex flex-col gap-2 sm:shrink-0">
                    <div className="flex items-center gap-3">
                      <p className="shrink-0 text-2xl font-semibold leading-none text-white">5.0</p>
                      <div className="flex shrink-0 items-center gap-1 text-blue-300">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                    </div>

                    <p className="text-base leading-snug text-white/82">
                      Based on Customer Reviews
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 28px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .hero-reveal {
          opacity: 0;
          will-change: transform, opacity;
          animation: fadeInUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .hero-stat {
          opacity: 0;
          will-change: transform, opacity;
          animation: fadeInUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;