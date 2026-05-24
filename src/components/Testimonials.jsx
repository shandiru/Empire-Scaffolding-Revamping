import { useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

const clientLogos = [
  {
    name: "NHS Nottingham University Hospitals",
    src: "/nhs.png",
    alt: "NHS Nottingham University Hospitals logo",
  },
  {
    name: "Nottingham City Council",
    src: "/nottingham.png",
    alt: "Nottingham City Council logo",
  },
  {
    name: "Morgan Sindall Group",
    src: "/mor.png",
    alt: "Morgan Sindall Group logo",
  },
  {
    name: "Bowmer & Kirkland",
    src: "/bow.png",
    alt: "Bowmer and Kirkland logo",
  },
  {
    name: "University of Nottingham",
    src: "/university.png",
    alt: "University of Nottingham logo",
  },
];

// Dynamic testimonial content array
const testimonialsData = [
  {
    id: 1,
    logoSrc: "/nottingham.png",
    logoAlt: "Nottingham City Council logo",
    quote: "“The team delivered exceptional quality and maintained complete transparency throughout the project. The construction was completed on time, and the finishing exceeded our workmanship and strong project management and the finishing exceeded our workmanship and strong project management.”",
    author: "Ghost Hunter",
    role: "Verified Customer"
  },
  {
    id: 2,
    logoSrc: "/nhs.png",
    logoAlt: "NHS logo",
    quote: "“They were the most polite people I've ever had working with me. People need to treat people as they would like to be treated themselves before leaving a bad review.”",
    author: "Martin Wragg",
    role: "Verified Customer"
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  return (
    <section className="app-section bg-white py-16" id="testimonials">
      <div className="app-container rounded-[1.75rem] border border-slate-100 bg-white p-6 shadow-[0_18px_70px_rgba(15,23,42,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          
          {/* Left Side Content */}
          <div>
            <div className="hero-reveal inline-flex items-center gap-3 rounded-full bg-blue-100 px-4 py-2 text-xs font-semibold text-slate-950">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              <span>Our Testimonials</span>
            </div>

            <h2
              className="hero-reveal mt-6 max-w-xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-[2.8rem]"
              style={{ animationDelay: "0.1s" }}
            >
              Client experiences that reflect <span className="italic font-normal">our excellence</span>
            </h2>

            <p
              className="hero-reveal mt-5 max-w-2xl text-sm leading-7 text-slate-500"
              style={{ animationDelay: "0.18s" }}
            >
              What our clients say about our construction services reflects our commitment to 
              quality workmanship, timely project delivery, and transparent communication.
            </p>
          </div>

          {/* Right Side Content (Dynamic Carousel Engine) */}
          <div className="hero-stat relative border-b border-slate-100 pb-8 lg:border-none lg:pb-0" style={{ animationDelay: "0.18s" }}>
            {testimonialsData.map((testimonial, index) => {
              // Only render the active item based on currentSlide state matching the array index
              if (index !== currentSlide) return null;

              return (
                <div key={testimonial.id} className="animate-fadeIn">
                  <div className="mb-8 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-36 items-center justify-start">
                      <img
                        src={testimonial.logoSrc}
                        alt={testimonial.logoAlt}
                        className="max-h-12 max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                    <Quote className="h-12 w-12 fill-slate-100 text-slate-100 transform rotate-180" />
                  </div>

                  <blockquote className="max-w-2xl text-base font-semibold leading-8 text-slate-500">
                    {testimonial.quote}
                  </blockquote>

                  {/* Client Info & Control row */}
                  <div className="mt-10 flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-slate-950">{testimonial.author}</p>
                      <p className="mt-1 text-xs text-slate-500">{testimonial.role}</p>
                    </div>

                    {/* Slider Arrows */}
                    <div className="flex items-center gap-3 group">
                      <button 
                        onClick={prevSlide}
                        className="flex h-10 w-10 items-center group-hover:text-black justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:bg-blue-600 active:scale-95"
                        aria-label="Previous testimonial"
                      >
                        <ArrowLeft className="h-5 w-5" />
                      </button>
                      <button 
                        onClick={nextSlide}
                        className="flex h-10 w-10 items-center group-hover:text-black justify-center rounded-full border border-slate-200 bg-white text-slate-700 transition-all hover:bg-blue-600 active:scale-95"
                        aria-label="Next testimonial"
                      >
                        <ArrowRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Logo Grid Section */}
        <div className="mt-12 border-t border-slate-100 pt-8">
          <p className="mb-8 text-center text-sm text-slate-500">
            Trusted by leading organisations across construction, education, and the public sector
          </p>

          <div className="grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {clientLogos.map((logo, index) => (
              <div
                key={logo.name}
                className="hero-stat flex h-16 w-full max-w-[190px] items-center justify-center rounded-xl bg-white px-5 py-3"
                style={{ animationDelay: `${0.28 + index * 0.08}s` }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
