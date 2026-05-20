"use client";

import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Recent Projects", href: "projects" },
    { label: "Why Choose Us", href: "why-choose-us" },
    { label: "Testimonials", href: "testimonials" },
    { label: "Contact", href: "contact" },
  ];

  // Handle phone call
  const handleCall = () => {
    console.log("Calling 0115 9641 600");
  };

  return (
    <header className="app-section fixed top-4 left-0 z-50 w-full sm:top-5">
      <div className="app-container flex items-center justify-between rounded-full border border-slate-200/80 bg-white/95 px-4 py-3 shadow-[0_18px_60px_rgba(15,23,42,0.16)] backdrop-blur-md sm:px-7 lg:px-10">
        <div className="flex items-center">
          <HashLink smooth to="/#top" className="flex items-center">
            <img
              src="/Logo.png"
              alt="Empire Scaffolding Logo"
              className="h-11 w-auto object-contain sm:h-12 lg:h-14"
            />
          </HashLink>
        </div>

        <nav className="hidden items-center gap-8 text-[1.05rem] font-medium text-slate-900 lg:flex">
          {navLinks.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={`/#${link.href}`}
              scroll={(el) => {
                const yOffset = -80; // height of your fixed navbar
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                setIsOpen(false); // close mobile menu
              }}
              className="transition hover:text-blue-600"
            >
              {link.label}
            </HashLink>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <div className="hidden items-center gap-2 text-slate-800 xl:flex">
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
            className="inline-flex items-center rounded-full bg-[#0B1224] px-6 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          className="text-slate-900 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="app-container mt-3 flex flex-col items-center gap-4 rounded-[2rem] border border-slate-200 bg-white px-6 py-6 text-lg text-slate-900 shadow-[0_20px_60px_rgba(15,23,42,0.14)] lg:hidden">
          {navLinks.map((link) => (
            <HashLink
              key={link.href}
              smooth
              to={`/#${link.href}`}
              scroll={(el) => {
                const yOffset = -80; // height of your fixed navbar
                const y =
                  el.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
                setIsOpen(false); // close mobile menu
              }}
              className="transition hover:text-blue-600"
            >
              {link.label}
            </HashLink>
          ))}

          <div className="flex items-center gap-2 text-slate-900">
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
            className="rounded-full bg-[#0B1224] px-5 py-3 font-semibold text-white transition hover:bg-blue-800"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
