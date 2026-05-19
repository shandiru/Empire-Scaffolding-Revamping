import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  { img: "/1.jpg" },
  { img: "/2.jpg" },
  { img: "/3.jpg" },
  { img: "/4.jpg" },
  { img: "/5.jpg" },
  { img: "/6.jpg" },
  { img: "/7.jpg" },
  { img: "/8.jpg" },
  { img: "Empire.jpg" },
];

export default function Gallery() {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Improved: handle auto width detection and scroll snapping properly
  const scrollToCard = (index) => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const cards = scroller.querySelectorAll("[data-card]");
    const targetCard = cards[index];
    if (targetCard) {
      scroller.scrollTo({
        left: targetCard.offsetLeft - scroller.offsetLeft,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const scrollLeft = () => {
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    scrollToCard(newIndex);
  };

  const scrollRight = () => {
    const newIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    scrollToCard(newIndex);
  };

  // ✅ Optional: handle mouse drag scroll for smooth UX
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftPos = useRef(0);

  const handleMouseDown = (e) => {
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeftPos.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => (isDragging.current = false);
  const handleMouseUp = () => (isDragging.current = false);

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // scroll speed
    scrollRef.current.scrollLeft = scrollLeftPos.current - walk;
  };

  return (
    <section className="bg-white py-7 px-4" id="gallery">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-semibold text-2xl uppercase mb-10">Gallery</p>

        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 lg:-left-9 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory  no-scrollbar"
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div className="flex gap-6 pb-4">
              {testimonials.map((item, idx) => (
                <div
                  key={idx}
                  data-card
                  className="min-w-[395px] px-6 py-5 border border-gray-300 rounded-lg shadow-sm hover:shadow-lg transition bg-white snap-start"
                >
                  <img
                    src={item.img}
                    alt={`Testimonial ${idx + 1}`}
                    className="w-full h-80 object-cover rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
                    onClick={() => scrollToCard(idx)}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 lg:-right-8 top-1/2 -translate-y-1/2 bg-blue-600 text-white rounded-full p-2 shadow-lg hover:bg-blue-700 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}