import { useCallback, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const GALLERY_ITEMS = [
  { image: "/1.jpg", alt: "Empire Scaffolding gallery image 1" },
  { image: "/2.jpg", alt: "Empire Scaffolding gallery image 2" },
  { image: "/3.jpg", alt: "Empire Scaffolding gallery image 3" },
  { image: "/4.jpg", alt: "Empire Scaffolding gallery image 4" },
  { image: "/5.jpg", alt: "Empire Scaffolding gallery image 5" },
  { image: "/6.jpg", alt: "Empire Scaffolding gallery image 6" },
  { image: "/7.jpg", alt: "Empire Scaffolding gallery image 7" },
  { image: "/8.jpg", alt: "Empire Scaffolding gallery image 8" },
  { image: "/Empire.jpg", alt: "Empire Scaffolding featured gallery image" },
];

const RADIUS = 680;
const CARD_ROT_Y = 25;
const SIDE_SCALE = 0.85;
const SIDE_OPACITY = 0.45;

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(3);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % GALLERY_ITEMS.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
  }, []);

  const onTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchStartY.current = event.touches[0].clientY;
  };

  const onTouchEnd = (event) => {
    if (!touchStartX.current) {
      return;
    }

    const dx = touchStartX.current - event.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - event.changedTouches[0].clientY);

    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) {
      if (dx > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  const getConfig = (index) => {
    const total = GALLERY_ITEMS.length;
    let diff = index - currentIndex;

    if (diff > total / 2) {
      diff -= total;
    }

    if (diff < -total / 2) {
      diff += total;
    }

    const angleOffset = (diff * (360 / total) * Math.PI) / 180;
    const posX = Math.sin(angleOffset) * RADIUS;
    const posZ = (Math.cos(angleOffset) - 1) * RADIUS;
    const isCenter = index === currentIndex;
    const isHidden = Math.abs(diff) > Math.floor(total / 2);

    return {
      x: posX,
      z: posZ + (isCenter ? 30 : 0),
      rotateY: CARD_ROT_Y,
      opacity: isHidden ? 0 : isCenter ? 1 : SIDE_OPACITY,
      scale: isCenter ? 1 : SIDE_SCALE,
      zIndex: Math.round(100 + Math.cos(angleOffset) * 50 - diff * 2),
      visible: !isHidden,
    };
  };

  return (
    <div
      className="flex w-full flex-col items-center overflow-hidden bg-white px-4 py-8 text-slate-900 select-none sm:py-10 lg:py-12"
      data-aos="fade-up"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <p
        className="mb-5 text-[10px] uppercase tracking-[0.3em] text-slate-500 sm:mb-6"
        data-aos="fade-up"
        data-aos-delay="80"
      >
        Gallery · {currentIndex + 1} / {GALLERY_ITEMS.length}
      </p>

      <div
        className="relative flex w-full max-w-[1200px] items-center justify-center"
        data-aos="zoom-in"
        data-aos-delay="140"
        style={{
          height: "clamp(340px, 55vw, 560px)",
          perspective: "1300px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          className="relative flex h-full w-full items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {GALLERY_ITEMS.map((item, index) => {
            const config = getConfig(index);
            const isCenter = index === currentIndex;
            const isHovered = index === hoveredIndex;

            return (
              <motion.div
                key={item.image}
                onClick={() => setCurrentIndex(index)}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="absolute cursor-pointer overflow-hidden"
                style={{
                  width: "clamp(240px, 34vw, 420px)",
                  aspectRatio: "3 / 2",
                  borderRadius: "clamp(16px, 2.5vw, 26px)",
                  background: "#f8fafc",
                  boxShadow: isCenter
                    ? "0 28px 60px rgba(15,23,42,0.18), 0 0 0 1px rgba(148,163,184,0.2)"
                    : "0 16px 32px rgba(15,23,42,0.12), 0 0 0 1px rgba(148,163,184,0.16)",
                  zIndex: isHovered ? config.zIndex + 120 : config.zIndex,
                  transformStyle: "preserve-3d",
                  willChange: "transform, opacity",
                  display: config.visible ? "block" : "none",
                }}
                animate={{
                  x: config.x,
                  z: config.z,
                  rotateY: config.rotateY,
                  scale: config.scale,
                }}
                whileHover={{
                  z: config.z + (isCenter ? 70 : 140),
                  y: -10,
                  scale: isCenter ? 1.04 : config.scale + 0.08,
                  boxShadow: isCenter
                    ? "0 34px 72px rgba(15,23,42,0.22), 0 0 0 1px rgba(148,163,184,0.28)"
                    : "0 24px 48px rgba(15,23,42,0.18), 0 0 0 1px rgba(148,163,184,0.22)",
                }}
                transition={{ type: "spring", stiffness: 85, damping: 21, mass: 1 }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="block h-full w-full object-cover pointer-events-none"
                  draggable
                />
              </motion.div>
            );
          })}
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-[clamp(4px,1.5vw,12px)] top-1/2 z-50 flex -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-xl backdrop-blur-md transition-all duration-200 hover:bg-slate-100 active:scale-90"
          style={{ width: "clamp(36px,5.5vw,48px)", height: "clamp(36px,5.5vw,48px)" }}
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-[clamp(4px,1.5vw,12px)] top-1/2 z-50 flex -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-xl backdrop-blur-md transition-all duration-200 hover:bg-slate-100 active:scale-90"
          style={{ width: "clamp(36px,5.5vw,48px)", height: "clamp(36px,5.5vw,48px)" }}
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div
        className="mt-5 flex items-center gap-[7px] sm:mt-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {GALLERY_ITEMS.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Slide ${index + 1}`}
            className="cursor-pointer rounded-full border-none p-0 transition-all duration-300"
            style={{
              width: index === currentIndex ? 26 : 7,
              height: 7,
              background:
                index === currentIndex
                  ? "rgba(15,23,42,0.88)"
                  : "rgba(148,163,184,0.35)",
              transitionTimingFunction: "cubic-bezier(0.34,1.56,0.64,1)",
            }}
          />
        ))}
      </div>
    </div>
  );
}
