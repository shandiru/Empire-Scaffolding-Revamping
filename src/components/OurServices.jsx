import {
  ArrowUpRight,
  Building2,
  ClipboardList,
  PanelsTopLeft,
  Wrench,
} from "lucide-react";

const services = [
  {
    title: "Traditional Tube & Fit Scaffolding",
    description:
      "Standard scaffolding for various commercial, domestic, and industrial construction needs.",
    icon: Building2,
    image:
      "/service1.jpg",
  },
  {
    title: "Full Supply, Erection & Dismantling",
    description:
      "We handle all stages of scaffolding work, from initial supply through to safe dismantling.",
    icon: Wrench,
    image:
      "/Empire.jpg",
  },
  {
    title: "Projects of Any Size",
    description:
      "From small domestic towers to large-scale high-rise commercial buildings.",
    icon: ClipboardList,
    image:
      "/service3.jpg",
  },
  {
    title: "Plettac System Scaffolding",
    description:
      "Modular system scaffolding suitable for complex or high-rise projects.",
    icon: PanelsTopLeft,
    image:
      "/service4.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="app-section bg-gray-50 py-16">
      <div className="app-container">
        {/* TOP */}
        <div className="mb-14 text-center">
          <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1 text-[11px] font-medium text-blue-600 shadow-sm">
            ● Our Services
          </div>

          <h2 className="mx-auto max-w-[760px] text-[34px] font-bold leading-[1.1] tracking-[-1px] text-gray-900 md:text-[52px]">
            Reliable scaffolding services for every{" "}
            <em className="italic">project</em>
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group overflow-hidden rounded-[24px] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >
                {/* IMAGE */}
                <div className="relative h-[185px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1224] text-white shadow-lg">
                    <Icon size={20} />
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <h3 className="mb-3 text-[20px] font-semibold leading-tight text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mb-7 text-[14px] leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <button className="inline-flex items-center gap-3 text-sm font-semibold text-gray-900 transition hover:text-blue-600">
                    Learn More

                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                      <ArrowUpRight size={14} />
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM REVIEW */}
        <div className="mt-14 flex flex-col items-center justify-center gap-5 text-center">
          <div className="flex items-center gap-3">
            {/* AVATARS */}
            <div className="flex -space-x-3">
              <img
                src="/avatar1.jpg"
                alt=""
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />

              <img
                src="/avatar2.jpg"
                alt=""
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />

              <img
                src="/avatar3.jpg"
                alt=""
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
              />
            </div>

            <p className="max-w-[540px] text-sm text-gray-600">
              Commercial, domestic, and industrial scaffolding across the UK -{" "}
              <span className="font-semibold text-gray-900 underline underline-offset-4">
                View All Services
              </span>
            </p>
          </div>

          {/* RATING */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold text-gray-900">
            <span className="text-[20px]">5.0/5</span>

            <div className="flex items-center gap-1 text-blue-600">
              ★ ★ ★ ★ ★
            </div>

            <span>Based on Customer Reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}
