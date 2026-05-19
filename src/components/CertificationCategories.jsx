import React from "react";
import { AiOutlineSafety } from "react-icons/ai";
import { FaRegListAlt, FaRegStar } from "react-icons/fa";
import { LuAward, LuBuilding2 } from "react-icons/lu";

const certifications = [
  {
    id: 1,
    category: "Construction Standards",
    title: "NASC",
    sub: "National Access and Scaffolding Confederation",
    description: "Leading trade association for the access and scaffolding industry, ensuring safety and professional standards.",
    icon: <LuBuilding2 className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 2,
    category: "Safety & Health",
    title: "CHAS",
    sub: "Contractors Health and Safety Assessment Scheme",
    description: "Health and safety pre-qualification scheme for contractors, demonstrating compliance with health and safety standards.",
    icon: <AiOutlineSafety className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 3,
    category: "Quality Management",
    title: "SMAS",
    sub: "Safety Management Advisory Services",
    description: "Health and safety assessment scheme providing assurance of contractor competence and compliance.",
    icon: <FaRegListAlt className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 4,
    category: "Professional Standards",
    title: "Builders Profile",
    sub: "Builders Profile Certification",
    description: "Verified contractor profile ensuring financial stability and professional competence.",
    icon: <FaRegStar className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 5,
    category: "Industry Registration",
    title: "Construction Line",
    sub: "Construction Line Registration",
    description: "Pre-qualification service for construction contractors, ensuring compliance and capability.",
    icon: <LuBuilding2 className="h-8 w-8 text-blue-600" />,
  },
  {
    id: 6,
    category: "Quality Assurance",
    title: "ISO 9001",
    sub: "ISO 9001:2015 Quality Management",
    description: "International standard for quality management systems, ensuring consistent service delivery.",
    icon: <LuAward className="h-8 w-8 text-blue-600" />,
  },
];

const CertificationCategories = () => {
  return (
    <section className="py-12 px-6 bg-gray-50">
      <div className="container mx-auto text-black text-center">
        <h2 className="text-3xl font-semibold mb-7">Our Professional Accreditations & Memberships</h2>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm md:text-base">Construction Standards</button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm md:text-base">Safety & Health</button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm md:text-base">Quality Management</button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm md:text-base">Professional Standards</button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm md:text-base">Industry Registration</button>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-full text-sm md:text-base">Quality Assurance</button>
        </div>
      </div>
      <div className="container mx-auto text-center max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((certification) => (
            <div
              key={certification.id}
              className="flex flex-col items-start p-6 border rounded-lg shadow-md hover:shadow-xl hover:z-10 hover:scale-105 transition-all duration-300 relative"
            >
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-full">{certification.icon}</div>
                <div className="ml-4">
                  <p className="text-xs sm:text-sm text-gray-500 bg-gray-200 p-1 rounded-lg">{certification.category}</p>
                </div>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{certification.title}</h3>
              <p className="text-sm sm:text-base text-gray-700 text-left mb-5">{certification.sub}</p>
              <p className="text-sm sm:text-base text-gray-700 text-left">{certification.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationCategories;
