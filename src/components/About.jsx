import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

function useCountUp(target, duration = 1800, suffix = "") {
  const [display, setDisplay] = useState("0");
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;

          const numericTarget = parseFloat(target);
          const start = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - (1 - progress) ** 3;
            const current = Math.round(eased * numericTarget);

            setDisplay(`${current}${suffix}`);

            if (progress < 1) {
              requestAnimationFrame(tick);
            }
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [duration, suffix, target]);

  return { ref, display };
}

function useFadeUp(delay = 0) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [delay]);

  return { ref, visible };
}

function fadeStyle(visible, delay = 0, translateY = 20, scale = 1) {
  return {
    opacity: visible ? 1 : 0,
    transform: visible
      ? "translate3d(0,0,0) scale(1)"
      : `translate3d(0,${translateY}px,0) scale(${scale})`,
    transition: `all 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
  };
}

function StatCard({ value, suffix, label, delay }) {
  const { ref, display } = useCountUp(value, 1800, suffix);
  const fade = useFadeUp(delay);

  return (
    <div
      ref={(el) => {
        ref.current = el;
        fade.ref.current = el;
      }}
      style={fadeStyle(fade.visible, 0, 20, 1)}
    >
      <h3 className="text-[42px] font-bold leading-none text-gray-900">
        {display}
      </h3>

      <p className="mt-2 text-[12px] text-gray-500">{label}</p>
    </div>
  );
}

function SpinBadge() {
  return (
    <div className="absolute left-5 top-5 z-10">
      <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-lg">
        <svg
          viewBox="0 0 80 80"
          className="h-full w-full animate-spin"
          style={{ animationDuration: "12s" }}
        >
          <defs>
            <path
              id="circlePath"
              d="M40,40 m-28,0 a28,28 0 1,1 56,0 a28,28 0 1,1 -56,0"
            />
          </defs>

          <text
            fontSize="8"
            fill="#111"
            letterSpacing="1.5"
            fontFamily="sans-serif"
          >
            <textPath href="#circlePath">
              • OUR PROJECTS • OUR PROJECTS •
            </textPath>
          </text>
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          ↗
        </div>
      </div>
    </div>
  );
}

export default function AboutSection() {
  const labelFade = useFadeUp(0);
  const titleFade = useFadeUp(100);
  const descFade = useFadeUp(200);
  const buttonFade = useFadeUp(300);

  const imageFade = useFadeUp(150);
  const cardOneFade = useFadeUp(250);
  const cardTwoFade = useFadeUp(350);

  return (
    <section
      id="about"
      className="app-section bg-gray-50 py-10"
    >
      <div className="app-container">
        {/* TOP */}
        <div className="mb-8 grid gap-8 lg:grid-cols-[1.45fr_0.75fr]">
          <div>
            <div
              ref={labelFade.ref}
              style={fadeStyle(labelFade.visible)}
              className="mb-4 inline-flex rounded-full bg-white px-3 py-1 text-[11px] font-medium text-gray-600"
            >
              About Empire Scaffolding
            </div>

            <h2
              ref={titleFade.ref}
              style={fadeStyle(titleFade.visible, 0.05)}
              className="max-w-[720px] text-[34px] font-bold leading-[1.05] tracking-[-1px] text-gray-900 md:text-[45px]"
            >
              A family-run scaffolding company built on experience, safety, and reliability
            </h2>
          </div>

          <div className="max-w-[360px] lg:ml-auto">
            <p
              ref={descFade.ref}
              style={fadeStyle(descFade.visible, 0.08)}
              className="mb-6 text-sm leading-relaxed text-gray-600"
            >
              Empire Scaffolding (GB) Ltd is a family-run company established in 2000, specialising in the supply, erection, and dismantling of scaffolding for commercial, domestic, and industrial projects. Based in Hucknall, Nottinghamshire, we are ideally located to deliver scaffolding services nationwide.
            </p>

            <div
              ref={buttonFade.ref}
              style={fadeStyle(buttonFade.visible, 0.12)}
            >
              <a
                href="#"
                className="inline-flex items-center gap-2 rounded-full bg-[#0B1224] px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-800"
              >
                Our Services
                <span className="flex h-5 w-5 items-center justify-center">
                  <FiArrowUpRight className="h-4 w-4" />
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid gap-5 lg:grid-cols-[1.45fr_0.7fr_0.7fr]">
          {/* BIG IMAGE */}
          <div
            ref={imageFade.ref}
            style={fadeStyle(imageFade.visible)}
            className="relative h-[320px] overflow-hidden rounded-[20px] bg-blue-100 sm:h-[400px] lg:h-[460px]"
          >
            <img
              src="/Empire.jpg"
              alt="Empire Scaffolding team and fleet of vehicles Hucknall Nottinghamshire"
              className="h-full w-full object-cover"
              loading="lazy"
            />

            <SpinBadge />
          </div>

          {/* CARD 1 */}
          <div
            ref={cardOneFade.ref}
            style={fadeStyle(cardOneFade.visible)}
            className="flex h-[320px] flex-col justify-between rounded-[20px] bg-white p-5"
          >
            <div className="text-center mb-5"> 
              <h3 className="mb-2 text-[18px] font-semibold text-gray-900">
                60+ CISRS-Qualified Staff
              </h3>

              <p className="text-[13px] leading-relaxed text-gray-500">
                Over 60 directly employed, CISRS-qualified professionals delivering safe, reliable scaffolding on every project.
              </p>
            </div>

            <div className="overflow-hidden rounded-[18px]">
              <img
                src="/building.png"
                alt="Commercial scaffolding project by Empire Scaffolding (GB) Ltd"
                className="h-[215px] w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* CARD 2 */}
          <div
            ref={cardTwoFade.ref}
            style={fadeStyle(cardTwoFade.visible)}
            className="h-[320px] rounded-[20px] bg-white p-3"
          >
            <div className="overflow-hidden rounded-[16px]">
              <img
                src="/1.jpg"
                alt="Scaffolding installation by Empire Scaffolding (GB) Ltd"
                className="h-[165px] w-full object-cover"
                loading="lazy"
              />
            </div>

            <div className="px-2 pt-5 text-center">
              <h3 className="mb-2 text-[18px] font-semibold text-gray-900">
               Established 2000
              </h3>

              <p className="text-[13px] leading-relaxed text-gray-500">
                25 years of experience across commercial, domestic, and industrial scaffolding projects throughout the UK.
              </p>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="mt-8 grid grid-cols-1 gap-5 rounded-[20px] bg-white p-5 shadow-[0_18px_50px_rgba(15,23,42,0.06)] sm:grid-cols-3 lg:ml-[53%] lg:mt-[-105px] lg:bg-transparent lg:p-0 lg:shadow-none">
          <StatCard
            value={25}
            suffix="+"
            label="Years Experience"
            delay={0}
          />

          <StatCard
            value={60}
            label="CISRS-Trained Staff"
            delay={150}
          />

          <StatCard
            value={100}
            suffix="%"
            label="Safety Record"
            delay={300}
          />
        </div>
      </div>
    </section>
  );
}
