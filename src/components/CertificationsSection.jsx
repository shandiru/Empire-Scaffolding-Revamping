import React from 'react';
import { FaShieldAlt, FaAward, FaThumbsUp } from 'react-icons/fa';

const certifications = [
    {
        title: 'Quality Assurance',
        description: 'Our certifications guarantee that we meet and exceed industry standards for quality and safety.',
        icon: <FaShieldAlt className="h-8 w-8 text-blue-600" />
    },
    {
        title: 'Professional Excellence',
        description: 'Recognition from leading industry bodies validates our expertise and commitment to excellence.',
        icon: <FaAward className="h-8 w-8 text-blue-600" />
    },
    {
        title: 'Client Confidence',
        description: 'Our accreditations provide peace of mind that your project is in capable, qualified hands.',
        icon: <FaThumbsUp className="h-8 w-8 text-blue-600" />
    }
];

const CertificationsSection = () => {
    return (
        <section className="py-12 px-6 bg-gray-50">
            <div className="container mx-auto text-center max-w-6xl shadow-xl bg-white rounded-lg p-8">
                <h2 className="text-3xl font-semibold mb-6">Why Our Certifications Matter</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certifications.map((certification, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-blue-100 p-4 rounded-full mb-4">
                                {certification.icon}
                            </div>
                            <h3 className="text-xl font-semibold">{certification.title}</h3>
                            <p className="text-gray-600">{certification.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CertificationsSection;
