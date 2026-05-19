import React from "react";
import { FaAward, FaBuilding, FaExternalLinkAlt } from "react-icons/fa"; // Importing specific icons from react-icons

const PRSection = () => {
  const cards = [
    {
      icon: <FaAward className="w-6 h-6 text-blue-500" />, // Award icon
      title: "Building Awards Recognition",
      description:
        "Nottingham Castle refurbishment project shortlisted at prestigious building awards",
      link: "https://gftomlinson.co.uk/nottingham-castle-refurbishment-project-of-the-year-shortlisted-at-prestigious-building-awards/", // Updated link
    },
    {
      icon: <FaBuilding className="w-6 h-6 text-blue-500" />, // Building icon
      title: "Major Milestone Achieved",
      description:
        "15km of scaffolding removed as Nottingham Castle renovation reaches major milestone",
      link: "https://gftomlinson.co.uk/major-milestone-for-nottingham-castle-renovation-as-15km-of-scaffolding-is-removed/", // Updated link
    },
  ];

  return (
    <section className="py-5 px-4 md:px-8 lg:px-16">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">PR</h2>
        <p className="text-gray-500 mt-2">Latest news and achievements</p>
      </div>

      <div className="grid gap-15 md:grid-cols-2 max-w-4xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-xl shadow-lg border border-blue-600 hover:shadow-md transition duration-300"
          >
            <div className="flex items-start space-x-3 mb-4">
              {card.icon}
              <h3 className="font-semibold text-lg">{card.title}</h3>
            </div>
            <p className="text-gray-600 text-sm mb-6">{card.description}</p>

            {/* Center the button at the bottom of the card */}
            <div className="flex justify-center mt-auto">
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
      inline-flex items-center justify-center gap-2
      bg-blue-600 text-white
      px-5 sm:px-6 md:px-8 lg:px-10
      py-2 sm:py-2.5
      rounded-lg text-sm sm:text-base font-medium
      hover:bg-gray-800 transition-all duration-300
    "
              >
                Read More
                <FaExternalLinkAlt className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default PRSection;
