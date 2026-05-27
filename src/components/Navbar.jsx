"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Recent Projects", href: "recent-projects" },
  { label: "Why Choose Us", href: "why-choose-us" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Contact", href: "contact" },
];

const Navbar = ({ overlay = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Handle phone call
  const handleCall = () => {
    console.log("Calling 0115 9641 600");
  };

  return (
    <header
      className="app-section fixed inset-x-0 top-4 left-0 z-50 w-full sm:top-5"
    >
        <div
          className={`app-container flex items-center justify-between ${
          overlay
            ? "rounded-[1.4rem] border border-slate-800 bg-black px-4 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.35)] sm:rounded-[2rem] sm:px-8 lg:rounded-[2.6rem] lg:px-10"
            : "rounded-full border border-slate-800 bg-black/95 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.3)] backdrop-blur-md sm:px-7 lg:px-10"
        }`}
      >
        <div className="flex items-center">
          <HashLink smooth to="/#top" className="flex items-center">
            <img
              src="/Logo-bg.png"
              alt="Empire Scaffolding Logo"
              className="h-11 w-auto object-contain sm:h-12 lg:h-14"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </HashLink>
        </div>

        <nav
          className={`hidden items-center text-[1.05rem] font-medium xl:flex ${
            overlay ? "gap-10 text-slate-100" : "gap-8 text-slate-100"
          }`}
        >
          {navLinks.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={`/#${link.href}`}
              scroll={(el) => {
                const yOffset = -80;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                setIsOpen(false);
              }}
              className="transition hover:text-blue-600"
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        <div className="hidden items-center gap-6 xl:flex">
          <div
            className={`hidden items-center gap-2 xl:flex ${
              overlay ? "text-slate-100" : "text-slate-100"
            }`}
          >
            <Phone className="w-4 h-4" />
            <a
              href="tel:01159641600"
              onClick={handleCall}
              className="whitespace-nowrap font-semibold"
            >
              0115 9641 600
            </a>
          </div>
          <a
            href="mailto:Shay@empirescaffolding.co.uk"
            className={`inline-flex items-center rounded-full bg-blue-600 font-semibold text-white transition hover:bg-[#0B1224] ${
              overlay ? "px-6 py-3 text-sm lg:px-8 lg:text-base" : "px-6 py-3"
            }`}
          >
            {overlay ? "Get Quote" : "Get a Free Quote"}
          </a>
        </div>

        <button
          className={`xl:hidden ${overlay ? "text-slate-100" : "text-slate-100"}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div
          className={`app-container mt-3 flex flex-col gap-4 bg-black px-6 text-slate-100 shadow-[0_20px_60px_rgba(15,23,42,0.3)] xl:hidden ${
            overlay
              ? "rounded-[2rem] border border-slate-800 py-6 text-base"
              : "items-center rounded-[2rem] border border-slate-800 py-6 text-lg"
          }`}
        >
          {navLinks.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={`/#${link.href}`}
              scroll={(el) => {
                const yOffset = -80;
                const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                setIsOpen(false);
              }}
              className={`font-medium transition hover:text-blue-600 ${
                overlay ? "text-slate-100" : ""
              }`}
            >
              {link.label}
            </HashLink>
          ))}

          <div className="flex items-center gap-2 text-slate-100">
            <Phone className="w-4 h-4" />
            <a
              href="tel:01159641600"
              onClick={handleCall}
              className="whitespace-nowrap font-semibold"
            >
              0115 9641 600
            </a>
          </div>
          <a
            href="mailto:Shay@empirescaffolding.co.uk"
            className={`rounded-full bg-blue-600 font-semibold text-white transition hover:bg-[#0B1224] ${
              overlay ? "mt-2 inline-flex w-full items-center justify-center py-3 text-sm" : "px-5 py-3"
            }`}
          >
            {overlay ? "Get Quote" : "Get a Free Quote"}
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
