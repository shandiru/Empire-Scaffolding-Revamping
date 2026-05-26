import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Info, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_ITEMS = [
  { image: "/1.jpg" },
  { image: "/2.jpg" },
  { image: "/3.jpg" },
  { image: "/4.jpg" },
  { image: "/5.jpg" },
  { image: "/6.jpg" },
  { image: "/7.jpg" },
  { image: "/8.jpg" },
  { image: "/Empire.jpg" },
];

const RADIUS       = 580;  
const CARD_ROT_Y   = 25;   
const SIDE_SCALE   = 0.85;  
const SIDE_OPACITY = 2;  

export default function GalleryCarousel() {
  const [currentIndex, setCurrentIndex] = useState(3); 
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);

  const handleNext = useCallback(() => setCurrentIndex((p) => (p + 1) % GALLERY_ITEMS.length), []);
  const handlePrev = useCallback(() => setCurrentIndex((p) => (p - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length), []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };
  
  const onTouchEnd = (e) => {
    if (!touchStartX.current) return;
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = Math.abs(touchStartY.current - e.changedTouches[0].clientY);
    if (Math.abs(dx) > 40 && Math.abs(dx) > dy) dx > 0 ? handleNext() : handlePrev();
    touchStartX.current = null;
  };

  const getConfig = (index) => {
    const total = GALLERY_ITEMS.length;
    
    // Signed layout index offset range calculation
    let diff = index - currentIndex;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;

    const angleOffset = (diff * (360 / total) * Math.PI) / 180;

    const posX = Math.sin(angleOffset) * RADIUS;
    const posZ = (Math.cos(angleOffset) - 1) * RADIUS; 

    const isCenter = index === currentIndex;

    const isHidden = Math.abs(diff) > Math.floor(total / 2);

    return {
      x: posX,
      z: posZ + (isCenter ? 30 : 0),
      ry: CARD_ROT_Y,
      op: isHidden ? 0 : (isCenter ? 1 : SIDE_OPACITY),
      sc: isCenter ? 1 : SIDE_SCALE,
      zi: Math.round(100 + (Math.cos(angleOffset) * 50) - diff * 2),
      visible: !isHidden
    };
  };

  return (
    <div
      className="w-full min-h-screen bg-[#0d0e11] text-white flex flex-col justify-center items-center py-10 px-4 overflow-hidden select-none"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <p className="text-white/25 text-[10px] tracking-[0.3em] uppercase mb-7">
        Gallery · {currentIndex + 1} / {GALLERY_ITEMS.length}
      </p>

      {/* ── 3D Orbit Stage ── */}
      <div
        className="relative w-full max-w-[1200px] flex items-center justify-center"
        style={{
          height: 'clamp(340px, 55vw, 560px)',
          perspective: '1300px',
          perspectiveOrigin: '50% 50%',
        }}
      >
        {/* Stage Ring Canvas */}
        <div
          className="relative w-full h-full flex items-center justify-center"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {GALLERY_ITEMS.map((item, index) => {
            const cfg = getConfig(index);
            const isCenter = index === currentIndex;
            const isHovered = index === hoveredIndex;

            return (
              <motion.div
                key={item.id}
                onClick={() => setCurrentIndex(index)}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="absolute overflow-hidden cursor-pointer"
                style={{
                  width: 'clamp(170px, 28vw, 280px)',
                  aspectRatio: '4 / 5',
                  borderRadius: 'clamp(16px, 2.5vw, 26px)',
                  background: '#15161b',
                  boxShadow: isCenter
                    ? '0 45px 95px rgba(0,0,0,0.85), 0 0 0 1px rgba(255,255,255,0.06)'
                    : '0 20px 45px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.02)',
                  zIndex: isHovered ? cfg.zi + 120 : cfg.zi,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform, opacity',
                  display: cfg.visible ? 'block' : 'none',
                }}
                animate={{
                  x: cfg.x,
                  z: cfg.z,
                  rotateY: cfg.ry,
                  opacity: cfg.op,
                  scale: cfg.sc,
                }}
                whileHover={{
                  z: cfg.z + (isCenter ? 70 : 140),
                  y: -10,
                  scale: isCenter ? 1.04 : cfg.sc + 0.08,
                  boxShadow: isCenter
                    ? '0 52px 110px rgba(0,0,0,0.92), 0 0 0 1px rgba(255,255,255,0.08)'
                    : '0 38px 90px rgba(0,0,0,0.82), 0 0 0 1px rgba(255,255,255,0.07)',
                }}
                transition={{ type: 'spring', stiffness: 85, damping: 21, mass: 1 }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover block pointer-events-none"
                  draggable={true}
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── Directional UI Navigation Arrows ── */}
        <button
          onClick={handlePrev}
          className="absolute left-[clamp(4px,1.5vw,12px)] top-1/2 -translate-y-1/2 z-50
            flex items-center justify-center rounded-full
            bg-[rgba(20,21,26,0.75)] hover:bg-[rgba(50,52,65,0.9)] active:scale-90
            backdrop-blur-md border border-white/5 text-white/80
            transition-all duration-200 shadow-2xl"
          style={{ width: 'clamp(36px,5.5vw,48px)', height: 'clamp(36px,5.5vw,48px)' }}
          aria-label="Previous"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-[clamp(4px,1.5vw,12px)] top-1/2 -translate-y-1/2 z-50
            flex items-center justify-center rounded-full
            bg-[rgba(20,21,26,0.75)] hover:bg-[rgba(50,52,65,0.9)] active:scale-90
            backdrop-blur-md border border-white/5 text-white/80
            transition-all duration-200 shadow-2xl"
          style={{ width: 'clamp(36px,5.5vw,48px)', height: 'clamp(36px,5.5vw,48px)' }}
          aria-label="Next"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      {/* ── Carousel Slider Indicator Dots ── */}
      <div className="flex items-center gap-[7px] mt-[clamp(24px,5vw,38px)]">
        {GALLERY_ITEMS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Slide ${i + 1}`}
            className="rounded-full border-none p-0 cursor-pointer transition-all duration-300"
            style={{
              width: i === currentIndex ? 26 : 7,
              height: 7,
              background: i === currentIndex ? 'rgba(255,255,255,0.85)' : 'rgba(255,255,255,0.15)',
              transitionTimingFunction: 'cubic-bezier(0.34,1.56,0.64,1)',
            }}
          />
        ))}
      </div>
    </div>
  );
}