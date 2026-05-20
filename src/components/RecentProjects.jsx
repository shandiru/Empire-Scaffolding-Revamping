import { useState } from "react";
import { ChevronRight } from "lucide-react";

const projects = [
  {
    eyebrow: "[PLACEHOLDER]",
    category: "/Commercial",
    title: "Nottingham Castle",
    description: "Insert project description - client to supply before go-live.",
    image: "/nottingham castle.jpg",
  },
  {
    eyebrow: "[PLACEHOLDER]",
    category: "/Nottingham Castle Renovation",
    title: "Nottingham Castle Renovation",
    description: "Insert project description - client to supply before go-live.",
    image: "/nottingham.png",
  },
  {
    eyebrow: "[PLACEHOLDER]",
    category: "/Sherwood Observatory",
    title: "Sherwood Observatory",
    description: "Insert project description - client to supply before go-live.",
    image: "/building.png",
  },
];

const RecentProjects = () => {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = projects[activeProjectIndex];

  return (
    <section className="bg-white px-4 py-10 sm:px-6 lg:px-16" id="recent-projects">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0d131b] px-5 py-12 text-white shadow-[0_28px_90px_rgba(15,23,42,0.18)] sm:px-8 sm:py-14 lg:px-12 lg:py-16">
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="absolute -right-24 -top-24 h-[36rem] w-[36rem] rounded-full border border-white/10" />
            <div className="absolute -right-10 top-6 h-[42rem] w-[42rem] rounded-full border border-white/10" />
            <div className="absolute left-[-18rem] top-40 h-[56rem] w-[56rem] rounded-full border border-white/[0.06]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_32%)]" />
          </div>

          <div className="relative">
            <div className="text-center">
              <div className="hero-reveal inline-flex items-center gap-3 font-semibold text-white">
                <span className="h-px w-10 bg-white/30" />
                <span>Recent Projects</span>
                <span className="h-px w-10 bg-white/30" />
              </div>
              <h2
                className="hero-reveal mx-auto mt-5 max-w-3xl text-[2.3rem] font-semibold leading-[1.05] tracking-[-0.05em] text-white sm:text-[3.1rem]"
                style={{ animationDelay: "0.1s" }}
              >
                A look at some of our recent projects.
              </h2>
            </div>

            <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.05fr_1fr] lg:gap-12">
              <div className="hero-stat overflow-hidden rounded-[1.2rem]">
                <img
                  alt={activeProject.title}
                  className="h-[260px] w-full object-cover sm:h-[340px] lg:h-[360px]"
                  src={activeProject.image}
                />
              </div>

              <div
                className="hero-stat max-w-lg"
                style={{ animationDelay: "0.12s" }}
              >
                <p className="text-base font-bold text-amber-400">
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
                    className="inline-flex items-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-transform duration-300 hover:-translate-y-0.5"
                  >
                    <span className="flex h-4 w-6 items-center justify-center text-slate-950">
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
                    key={project.category}
                    className={`hero-stat flex min-w-fit items-center gap-0.5 whitespace-nowrap border-t pt-4 text-left transition-colors duration-300 ${
                      isActive
                        ? "border-white text-white"
                        : "border-white/15 text-white/80 hover:border-white/40 hover:text-white"
                    }`}
                    style={{ animationDelay: `${0.2 + index * 0.08}s` }}
                    type="button"
                    onClick={() => setActiveProjectIndex(index)}
                  >
                    <span className="text-sm font-bold tracking-[-0.03em]">
                      {project.eyebrow}
                    </span>
                    <span className={isActive ? "text-white/35" : "text-white/25"}>
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
