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
    image: "/Empire.jpg",
  },
  {
    title: "Full Supply, Erection & Dismantling",
    description:
      "We handle all stages of scaffolding work, from initial supply through to safe dismantling.",
    icon: Wrench,
    image: "/building.png",
  },
  {
    title: "Projects of Any Size",
    description:
      "From small domestic houses to large-scale high-rise commercial buildings.",
    icon: ClipboardList,
    image: "/Mansfield.webp",
  },
  {
    title: "Plettac System Scaffolding",
    description:
      "Modular system scaffolding suitable for complex or high-rise projects.",
    icon: PanelsTopLeft,
    image: "/garage.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="app-section bg-gray-50 py-16"
      id="services"
      data-aos="fade-up"
    >
      <div className="app-container">
        {/* TOP */}
        <div className="mb-14 text-center" data-aos="fade-up" data-aos-delay="80">
          <div className="mb-4 inline-flex items-center rounded-full bg-white px-4 py-1 text-[11px] font-medium text-blue-600 shadow-sm">
            ● Our Services
          </div>

          <h2 className="mx-auto max-w-[760px] text-[34px] font-bold leading-[1.1] tracking-[-1px] text-gray-900 md:text-[48px]">
            Reliable scaffolding services for every project
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-[24px] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                data-aos="fade-up"
                data-aos-delay={120 + index * 90}
              >
                {/* IMAGE */}
                <div className="relative h-[185px] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} by Empire Scaffolding (GB) Ltd`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />

                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0B1224] text-white shadow-lg">
                    <Icon size={20} />
                  </div>
                </div>

                {/* CONTENT */}
                {/* 2. Added 'flex-1 flex flex-col' to allow this container to fill remaining space and control its children */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-3 text-[20px] font-semibold leading-tight text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mb-7 text-[14px] leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  {/* 3. Replaced 'mb-7' on paragraph with 'mt-auto' on the button to firmly anchor it to the bottom */}
                 
                </div>
              </div>
            );
          })}
        </div>

        {/* BOTTOM REVIEW */}
        <div
          className="mt-14 flex flex-col items-center justify-center gap-5 text-center"
          data-aos="fade-up"
          data-aos-delay="180"
        >
          <div className="flex items-center gap-3">
            {/* AVATARS */}
            <div className="flex -space-x-3">
              <img
                src="/nhs.png"
                alt="NHS Nottingham University Hospitals logo"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />

              <img
                src="/nottingham.png"
                alt="Nottingham City Council logo"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />

              <img
                src="/university.png"
                alt="University of Nottingham logo"
                className="h-10 w-10 rounded-full border-2 border-white object-cover"
                loading="lazy"
              />
            </div>

            <p className="max-w-[540px] text-sm text-gray-600">
              Commercial, domestic, and industrial scaffolding across the UK 
             
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
