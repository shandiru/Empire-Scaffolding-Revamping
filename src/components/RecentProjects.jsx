import { useState } from "react";

const projects = [
  {
    title: "Council House Dome",
    location: "Nottingham",
    description:
      "Complex scaffolding solution for historic civic building restoration, providing safe access for dome maintenance and architectural preservation work.",
    image: "/council.png",
    tags: ["Historic Building", "Complex Access", "Civic Project"],
  },
  {
    title: "Victoria Law Courts",
    location: "Birmingham",
    description:
      "Comprehensive scaffolding installation for major Victorian courthouse renovation, ensuring complete building envelope coverage for restoration works.",
    image: "/victoria.png",
    tags: ["Victorian Architecture", "Full Coverage", "Legal Institution"],
  },
  {
    title: "Sherwood Observatory",
    location: "Sutton-in-Ashfield",
    description:
      "Multi-level scaffolding system for modern institutional building maintenance, providing safe working platforms across multiple floors and sections.",
    image: "/building.png",
    video: "/castle.mp4",
    tags: ["Multi-Level", "Institutional", "Modern Building"],
  },
  {
    title: "Nottingham Castle",
    location: "Nottingham",
    description:
      "Complex scaffolding solution for historic civic building restoration, providing safe access for dome maintenance and architectural preservation work.",
    image: "/nottingham castle.jpg",
    tags: ["Historic Building", "Complex Access", "Civic Project"],
  },
  {
    title: "Ablett House",
    location: "Liverpool",
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
    title: "Nottingham Queens Medical Centre",
    location: "Nottingham",
    description: "Plettac scaffold for window replacement",
    image: "/queen.jpg",
    tags: ["Victorian Architecture", "Full Coverage", "Legal Institution"],
  },
  {
    title: "Temporary garage for Fire engine",
    location: "Nottingham",
    description:
      "A short-term period, often during construction, renovation, or emergency situations where a permanent garage is unavailable.",
    image: "/garage.jpg",
    tags: ["Temporary", "Emergency", "Legal Institution"],
  },
  {
    title: "Mansfield Road",
    location: "Nottingham",
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
        <div className="relative overflow-hidden rounded-[1.5rem] bg-blue-600 px-4 py-10 text-white shadow-[0_28px_90px_rgba(37,99,235,0.24)] sm:rounded-[2rem] sm:px-8 sm:py-14 lg:px-12 lg:py-16">
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
                {activeProject.video ? (
                  <video
                    className="h-[260px] w-full object-contain object-center sm:h-[340px] lg:h-[360px]"
                    controls
                    playsInline
                    preload="metadata"
                  >
                    <source src={activeProject.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <img
                    alt={`${activeProject.title} scaffolding by Empire Scaffolding (GB) Ltd`}
                    className="h-[260px] w-full object-contain object-center sm:h-[340px] lg:h-[360px]"
                    decoding="async"
                    loading="lazy"
                    src={activeProject.image}
                    style={{ imageRendering: "auto" }}
                  />
                )}
              </div>

              <div
                className="hero-stat max-w-lg"
                style={{ animationDelay: "0.12s" }}
              >
                <p className="text-base font-bold text-blue-100">
                  /{activeProject.location}
                </p>
                <h3 className="mt-4 text-[2rem] font-bold leading-[1.05] tracking-[-0.05em] text-white">
                  {activeProject.title}
                </h3>
                <p className="mt-5 max-w-lg text-base leading-8 text-white/70">
                  {activeProject.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-white/85">
                  {activeProject.tags.map((tag) => (
                    <li key={tag} className="flex items-start gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-100" />
                      <span>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12 grid gap-4 pt-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {projects.map((project, index) => {
                const isActive = activeProjectIndex === index;

                return (
                  <button
                    key={`${project.title}-${project.location}`}
                    className={`hero-stat flex min-w-0 items-center gap-1 border-t pt-4 text-left transition-colors duration-300 ${
                      isActive
                        ? "border-blue-100 text-white"
                        : "border-white/15 text-white/80 hover:border-blue-100/70 hover:text-white"
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                    type="button"
                    onClick={() => setActiveProjectIndex(index)}
                  >
                    <span className="text-sm font-bold tracking-[-0.03em]">
                      {project.title}
                    </span>
                    <span
                      className={
                        isActive
                          ? "break-words text-white/55"
                          : "break-words text-white/25"
                      }
                    >
                      /{project.location}
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
