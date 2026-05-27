import { useEffect, useState } from "react";
import { ArrowUpRight, Star } from "lucide-react";
import { HashLink } from "react-router-hash-link";
import { isPrerender } from "../seo/isPrerender";
import Navbar from "./Navbar";

const heroStats = [
  { value: 25, suffix: "+", label: "Years Experience" },
  { value: 60, suffix: "", label: "CISRS-Trained Staff" },
  { value: 100, suffix: "%", label: "Safety Record" },
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
  const shouldLoadVideo = !isPrerender();

  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden bg-[#0B1224] text-white"
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

      <Navbar overlay />

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
                  <HashLink
                    smooth
                    to="/#contact"
                    scroll={(el) => {
                      const yOffset = -80;
                      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: "smooth" });
                    }}
                    className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-5 py-3 text-base font-semibold text-[#0B1224] transition-colors duration-300 min-[420px]:w-fit sm:px-8"
                  >
                    <span className="absolute inset-0 translate-y-full bg-blue-100 transition-transform duration-300 ease-out group-hover:translate-y-0" />

                  <span className="relative z-10 inline-flex items-center gap-3 transition-colors duration-300">
                      Get a Free Quote
                      {/* Added transition and group-hover:rotate-45 below */}
                      <ArrowUpRight className="btn-arrow h-5 w-5 transition-transform duration-300 group-hover:rotate-45" />
                    </span>
                  </HashLink>

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
