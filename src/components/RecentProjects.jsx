import { useRef } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const projects = [
  {
    title: "Council House Dome",
    location: "Nottingham",
    description:
      "Complex scaffolding solution for historic civic building restoration, providing safe access for dome maintenance and architectural preservation work.",
    image: "/council.png", // update path as needed
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
    video: "/castle.mp4", // Video URL for this project
    tags: ["Multi-Level", "Institutional", "Modern Building"],
  },
  {
    title: "Nottingham Castle",
    location: "Nottingham",
    description:
      "Complex scaffolding solution for historic civic building restoration, providing safe access for dome maintenance and architectural preservation work.",
    image: "/nottingham castle.jpg", // update path as needed
    tags: ["Historic Building", "Complex Access", "Civic Project"],
  },
  {
    title: "Ablett House",
    location: "Liverpool",
    description:
      "Modern student accommodation development designed to provide safe and stylish living in the heart of Liverpool.",
    image: "/ablett.jpg",
    tags: ["Modern student accommodation", "City-centre location", "High-rise structure"],
  },
  {
    title: "Nottingham Queens Medical Centre",
    location: "Nottingham",
    description:
      "Plettac scaffold for window replacement",
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
    description:
      "Traditional tube and fit scaffolding for full renovation works",
    image: "/Mansfield.webp",
    tags: ["Full Building Access" , "Safety & Compliance", "Custom Builds"],
  },
];

const RecentProjects = () => {
  const swiperRef = useRef(null);

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-16 bg-white scroll-m-18" id="recent-projects">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">Recent Projects</h2>
        <p className="text-gray-600 mb-10 text-md sm:text-lg max-w-xl mx-auto">
          Showcasing our expertise in high-profile commercial and institutional scaffolding projects
        </p>

        <div className="relative">
          <button
            type="button"
            aria-label="Previous project"
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute -left-12 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-900 shadow-md transition hover:border-blue-600 hover:bg-blue-600 hover:text-white lg:inline-flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Next project"
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute -right-12 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-slate-900 shadow-md transition hover:border-blue-600 hover:bg-blue-600 hover:text-white lg:inline-flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            loop={true}
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="relative lg:px-8"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="relative group h-120 bg-white rounded-xl mb-12 shadow-md overflow-hidden text-left flex flex-col">
                  <div className="relative overflow-hidden">
                    {project.video ? (
                      <video
                        src={project.video}
                        alt={project.title}
                        className="w-full h-58 object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
                        autoPlay
                        muted
                        loop
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-58 object-cover rounded-2xl transform transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <span className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Commercial
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                    <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs border border-gray-300 text-black px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA Button
        <div className="mt-10">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold text-sm hover:bg-blue-700 transition">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default RecentProjects;
