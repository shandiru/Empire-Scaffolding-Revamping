import { useEffect, useState } from "react";
import { ArrowUpRight, Star, Menu, X } from "lucide-react";

const heroStats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 60, suffix: "", label: "CISRS-Trained Staff" },
  { value: 100, suffix: "%", label: "Safety Record" },
];

const navItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#our-services" },
  { label: "Recent Projects", href: "#recent-projects" },
  { label: "Gallery", href: "#gallery" },
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

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#050816] text-white"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/back.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,15,33,0.1)_0%,rgba(8,15,33,0.2)_25%,rgba(8,15,33,0.62)_70%,rgba(4,8,20,0.92)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.2),transparent_36%),radial-gradient(circle_at_bottom_left,rgba(37,99,235,0.16),transparent_30%)]" />

      <header className="absolute inset-x-0 top-4 z-50 px-4 sm:top-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-[1660px] rounded-[2rem] border border-white/80 bg-white px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.15)] sm:px-8 lg:rounded-[2.6rem] lg:px-10 lg:py-6">
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

            <div className="hidden sm:block">
              <a
                href="mailto:Shay@empirescaffolding.co.uk"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#060922] px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 lg:px-8 lg:py-4 lg:text-base"
              >
                Get Quote
                <ArrowUpRight className="h-4 w-4 lg:h-5 lg:w-5" />
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
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#060922] py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Get Quote
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          )}
        </div>
      </header>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1660px] items-end px-4 pb-10 pt-36 sm:px-6 sm:pb-12 sm:pt-40 lg:px-8 lg:pb-14 lg:pt-44">
        <div className="grid w-full gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(620px,0.95fr)] lg:items-end">
          <div className="max-w-[760px] text-left">
            <div
              className="hero-reveal inline-flex items-center gap-3 rounded-full bg-[#2f3544]/88 px-5 py-3 text-sm font-semibold text-white shadow-[0_16px_32px_rgba(0,0,0,0.24)] backdrop-blur-sm"
              style={{ animationDelay: "0.08s" }}
            >
              <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
              <span>Professional Scaffolding Services</span>
            </div>

            <div className="mt-8">
              <h1
                className="hero-reveal text-5xl font-medium leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[5.5rem]"
                style={{ animationDelay: "0.18s" }}
              >
                Safe &amp; Reliable Scaffolding
              </h1>
              <p
                className="hero-reveal mt-4 text-5xl font-light italic leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-[5rem]"
                style={{ animationDelay: "0.3s" }}
              >
                Solutions
              </p>
            </div>
            <p
              className="hero-reveal mt-6 max-w-xl text-base leading-7 text-white/78 sm:text-lg"
              style={{ animationDelay: "0.42s" }}
            >
              Trusted scaffolding support for commercial, domestic, and industrial
              projects with dependable teams, precise delivery, and a safety-first
              approach from start to finish.
            </p>
          </div>

          <div className="flex flex-col justify-end">
            <div
              className="hero-reveal grid gap-6 sm:grid-cols-3 sm:gap-0"
              style={{ animationDelay: "0.56s" }}
            >
              {heroStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`hero-stat py-5 sm:px-8 sm:py-0 ${
                    index < heroStats.length - 1
                      ? "sm:border-r sm:border-white/12"
                      : ""
                  }`}
                  style={{ animationDelay: `${0.68 + index * 0.12}s` }}
                >
                  <p className="text-5xl font-semibold tracking-tight text-white lg:text-[4rem]">
                    <CounterValue value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-4 text-base text-white/86 lg:text-[1.05rem]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div
              className="hero-reveal mt-8 border-t border-white/12 pt-8"
              style={{ animationDelay: "0.92s" }}
            >
              <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
                <a
                  href="mailto:Shay@empirescaffolding.co.uk"
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#060922] transition hover:bg-blue-50 sm:w-fit"
                >
                  Get Free Quote
                  <ArrowUpRight className="h-5 w-5" />
                </a>

                <div className="flex items-center gap-4">
                  <p className="text-2xl font-semibold leading-none">5.0</p>
                  <div className="flex items-center gap-1 text-blue-300">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <Star key={index} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-white/82">
                    Based on Customer Reviews
                  </p>
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
