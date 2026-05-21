import { useState } from "react";
import { ChevronRight } from "lucide-react";

const projects = [
  {
    eyebrow: "Historic Building",
    category: "/Nottingham",
    title: "Council House Dome",
    description:
      "Complex scaffolding solution for historic civic building restoration, providing safe access for dome maintenance and architectural preservation work.",
    image: "/council.png",
    tags: ["Historic Building", "Complex Access", "Civic Project"],
  },
  {
    eyebrow: "Victorian Architecture",
    category: "/Birmingham",
    title: "Victoria Law Courts",
    description:
      "Comprehensive scaffolding installation for major Victorian courthouse renovation, ensuring complete building envelope coverage for restoration works.",
    image: "/victoria.png",
    tags: ["Victorian Architecture", "Full Coverage", "Legal Institution"],
  },
  {
    eyebrow: "Multi-Level",
    category: "/Sutton-in-Ashfield",
    title: "Sherwood Observatory",
    description:
      "Multi-level scaffolding system for modern institutional building maintenance, providing safe working platforms across multiple floors and sections.",
    image: "/building.png",
    video: "/castle.mp4",
    tags: ["Multi-Level", "Institutional", "Modern Building"],
  },
  {
    eyebrow: "Historic Building",
    category: "/Nottingham",
    title: "Nottingham Castle",
    description:
      "Complex scaffolding solution for historic civic building restoration, providing safe access for dome maintenance and architectural preservation work.",
    image: "/nottingham castle.jpg",
    tags: ["Historic Building", "Complex Access", "Civic Project"],
  },
  {
    eyebrow: "Modern student accommodation",
    category: "/Liverpool",
    title: "Ablett House",
    description:
      "Modern student accommodation development designed to provide safe and stylish living in the heart of Liverpool.",
    image: "/ablett.jpg",
    tags: [
      "Modern student accommodation",
      "City-centre location",
      "High-rise structure",
    ],
  },
  {
    eyebrow: "Victorian Architecture",
    category: "/Nottingham",
    title: "Nottingham Queens Medical Centre",
    description: "Plettac scaffold for window replacement",
    image: "/queen.jpg",
    tags: ["Victorian Architecture", "Full Coverage", "Legal Institution"],
  },
  {
    eyebrow: "Temporary",
    category: "/Nottingham",
    title: "Temporary garage for Fire engine",
    description:
      "A short-term period, often during construction, renovation, or emergency situations where a permanent garage is unavailable.",
    image: "/garage.jpg",
    tags: ["Temporary", "Emergency", "Legal Institution"],
  },
  {
    eyebrow: "Full Building Access",
    category: "/Nottingham",
    title: "Mansfield Road",
    description: "Traditional tube and fit scaffolding for full renovation works",
    image: "/Mansfield.webp",
    tags: ["Full Building Access", "Safety & Compliance", "Custom Builds"],
  },
];

const RecentProjects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];

  return (
    <section className="app-section bg-white py-10" id="projects">
      <div className="app-container">
        <div className="relative overflow-hidden rounded-[1.5rem] bg-[#0B1224] px-4 py-10 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] sm:rounded-[2rem] sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -right-24 -top-24 h-[36rem] w-[36rem] rounded-full border border-white/10" />
            <div className="absolute -right-10 top-6 h-[42rem] w-[42rem] rounded-full border border-white/10" />
            <div className="absolute left-[-18rem] top-40 h-[56rem] w-[56rem] rounded-full border border-white/[0.06]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%)]" />
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="hero-reveal inline-flex items-center font-semibold text-white">
                <span>Recent Projects</span>
              </div>
              <h2
                className="hero-reveal mx-auto mt-5 max-w-3xl text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[3.1rem]"
                style={{ animationDelay: "0.1s" }}
              >
                A look at some of our recent projects.
              </h2>
            </div>

            <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
              <div className="hero-stat overflow-hidden rounded-[1.2rem] bg-slate-950/60">
                <img
                  alt={`${activeProject.title} scaffolding by Empire Scaffolding (GB) Ltd`}
                  className="h-[260px] w-full object-contain object-center sm:h-[340px] lg:h-[360px]"
                  decoding="async"
                  loading="lazy"
                  src={activeProject.image}
                  style={{ imageRendering: "auto" }}
                />
              </div>

              <div
                className="hero-stat max-w-lg"
                style={{ animationDelay: "0.12s" }}
              >
                <p className="text-base font-bold text-blue-500">
                  {activeProject.category}
                </p>
                <h3 className="mt-4 text-[2rem] font-bold leading-[1.05] tracking-[-0.05em] text-white">
                  {activeProject.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-8 text-white/35">
                  {activeProject.description}
                </p>
                <div className="mt-8">
                  <button
                    type="button"
                    className="inline-flex items-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-blue-800"
                  >
                    <span className="flex h-4 w-6 items-center justify-center text-white">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                    <span className="text-base">View Project</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-4 pt-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {projects.map((project, index) => {
                const isActive = activeProjectIndex === index;

                return (
                  <button
                    key={`${project.title}-${project.category}`}
                    className={`hero-stat flex min-w-0 items-center gap-1 border-t pt-4 text-left transition-colors duration-300 ${
                      isActive
                        ? "border-blue-500 text-white"
                        : "border-white/15 text-white/80 hover:border-blue-500/70 hover:text-white"
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                    type="button"
                    onClick={() => setActiveProjectIndex(index)}
                  >
                    <span className="text-sm font-bold tracking-[-0.03em]">
                      {project.eyebrow}
                    </span>
                    <span className={isActive ? "break-words text-white/35" : "break-words text-white/25"}>
                      {project.category}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
