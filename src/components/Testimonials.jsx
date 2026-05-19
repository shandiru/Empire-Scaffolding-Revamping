import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Martin Wragg",
    role: "Verified Customer",
    initial: "M",
    bgColor: "bg-blue-600",
    text: `They were the most polite people I've ever had working with me. People need to treat people as they would like to be treated themselves before leaving a bad review.`,
  },
  {
    name: "Ghost Hunter",
    role: "Domestic Customer",
    initial: "G",
    bgColor: "bg-blue-600",
    text: `They did a great job scaffolding the front of our house. It was perfect for what we needed to do, they are very professional and are great value for money.`,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-16 scroll-m-18" id="testimonials">
      <div className="max-w-7xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">
          What Our Customers Say
        </h2>
        <p className="text-sm sm:text-base text-gray-800 mb-12">
          Don't just take our word for it – hear from our satisfied customers
        </p>

        {/* Testimonials Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 w-full max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-left"
            >
              {/* Star Rating */}
              <div className="flex mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="italic text-gray-800 mb-6">"{t.text}"</p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${t.bgColor} text-white rounded-full flex items-center justify-center font-semibold`}
                >
                  {t.initial}
                </div>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Rating Bar */}
        <div
          className="
    mt-10 
    flex flex-col sm:flex-row items-center 
    bg-white rounded-full 
    py-3 px-4 sm:px-6 md:px-8 
    max-w-sm sm:max-w-lg md:max-w-2xl 
    mx-auto 
    justify-center gap-3 sm:gap-4 
    text-xs sm:text-sm md:text-base 
    text-gray-700 shadow-md
  "
        >
          {/* Star Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={16} className="sm:w-5 sm:h-5" fill="currentColor" />
            ))}
          </div>

          {/* Text Section */}
          <p className="text-center leading-tight sm:leading-normal">
            <strong className="font-bold text-gray-900">
              5.0 out of 5 stars ·{" "}
            </strong>
            Based on customer reviews
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
