const logos = [
  {
    name: "Persimmon",
    src: "/nhs.png", // Place image in public/logos/
    alt: "Persimmon logo",
  },
  {
    name: "Nottingham City Council",
    src: "/nottingham.png",
    alt: "Nottingham City Council logo",
  },
  {
    name: "British Gypsum",
    src: "/mor.png",
    alt: "British Gypsum logo",
  },
  {
    name: "British Gypsum",
    src: "/bow.png",
    alt: "British Gypsum logo",
  },
  {
    name: "University of Nottingham",
    src: "/university.png",
    alt: "University of Nottingham logo",
  },
];

const TrustedBy = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
          Trusted by Leading Organizations
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-10 max-w-xl mx-auto">
          We're proud to work with some of the most respected names in construction,
          education, and public sector
        </p>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 items-center justify-items-center gap-6">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="bg-white px-6 py-4 rounded-xl shadow-sm w-full max-w-[200px] h-[80px] flex items-center justify-center hover:scale-105 hover:z-10 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Quote */}
        <p className="mt-10 text-sm italic text-gray-700 max-w-3xl mx-auto font-semibold">
          "Working with prestigious clients across residential, commercial, public sector, and educational projects"
        </p>
      </div>
    </section>
  );
};

export default TrustedBy;
