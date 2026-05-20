import {
  ShieldCheck,
  Clock,
  Users,
  Trophy,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Safety First",
    text: "Fully insured with comprehensive safety protocols and certified equipment on every project.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Service",
    text: "On-time delivery and professional installation by experienced, CISRS-qualified teams.",
    icon: Clock,
  },
  {
    title: "Expert Team",
    text: "Over 60 directly employed scaffolding professionals with years of hands-on industry experience.",
    icon: Users,
  },
  {
    title: "25 Years. Proven Track Record.",
    text: "Established in 2000, we have delivered scaffolding solutions for landmark projects across the Midlands and throughout the UK.",
    icon: Trophy,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="app-section relative overflow-hidden bg-[#0B1224] py-20 text-white">
      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-600/25 blur-[110px]" />

      <div className="app-container relative">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex rounded-full bg-white/10 px-4 py-1 text-[11px] font-medium text-blue-100">
            Why Choose Us
          </div>

          <h2 className="mx-auto max-w-[720px] text-[34px] font-bold leading-[1.05] tracking-[-1px] md:text-[52px]">
            Why Contractors and Clients{" "}
            <em className="italic">Choose Empire Scaffolding</em>
          </h2>
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-[1fr_1.55fr_1fr]">
          <div className="space-y-5">
            {features.slice(0, 2).map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="animate-float rounded-[20px] border border-white/10 bg-white/8 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/12"
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-100">
                    <Icon size={18} />
                  </div>

                  <h3 className="mb-3 text-[18px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col items-center">
            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-white/10 p-2 shadow-[0_25px_90px_rgba(29,78,216,0.18)]">
              <img
                src="/Empire.jpg"
                alt="Empire Scaffolding fleet and team"
                className="h-[320px] w-full rounded-[16px] object-cover md:h-[390px]"
              />
            </div>

            <a
              href="tel:01159641600"
              className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-5 py-2 text-sm font-semibold text-black"
            >
              Get a free quote today - call 0115 9641 600
              <ArrowRight size={16} className="text-blue-600" />
            </a>
          </div>

          <div className="space-y-5">
            {features.slice(2, 4).map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="animate-float rounded-[20px] border border-white/10 bg-white/8 p-5 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:bg-white/12"
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/20 text-blue-100">
                    <Icon size={18} />
                  </div>

                  <h3 className="mb-3 text-[18px] font-semibold">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-white/65">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
