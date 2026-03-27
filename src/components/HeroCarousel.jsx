import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Auto-slide logic
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        nextSlide();
      }, 6000); // 6 seconds per slide
      return () => clearInterval(interval);
    }
  }, [nextSlide, isHovered]);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Background Media */}
          {slides[currentIndex].videoSrc ? (
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              poster={slides[currentIndex].bgImage}
              className="w-full h-full object-cover"
            >
              <source src={slides[currentIndex].videoSrc} type="video/mp4" />
            </video>
          ) : (
            <img 
              src={slides[currentIndex].bgImage} 
              alt={slides[currentIndex].title} 
              className="w-full h-full object-cover"
            />
          )}

          {/* Button Overlay - Adjusted for Carousel Layout */}
          <div className="absolute top-[20%] md:top-[15%] w-full flex flex-col items-center justify-start z-10 px-6 pt-12 md:pt-0 pointer-events-none">
             {/* We rely on the GAC images for the Text, but drop the interactive button gracefully below the visual center */}
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
             
          </div>

          <div className="absolute bottom-[25%] right-6 lg:right-24 z-20 hidden">
             {/* Hiding individual slide buttons to allow the layout to dictate them, or put them consistently here */}
          </div>
          
          <div className="absolute bottom-[20%] md:bottom-[25%] lg:bottom-[30%] w-full flex justify-center z-20 px-6">
            <Link 
              to={slides[currentIndex].link}
              className="bg-transparent border border-white text-white font-light text-[14px] px-8 md:px-12 py-2 md:py-2.5 hover:bg-white hover:text-black transition-colors duration-300 rounded-full shadow-sm text-center"
            >
              Learn More
            </Link>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Controls (Arrows & Pagination) */}
      <div className="absolute bottom-[10%] w-full flex justify-center items-center z-30 gap-6">
        {/* Left Arrow */}
        <button 
          onClick={prevSlide}
          className="w-8 h-8 md:w-10 md:h-10 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
        >
          <ChevronLeft size={18} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Pagination Dots */}
        <div className="flex items-center gap-3">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`transition-all duration-300 rounded-full bg-white ${
                currentIndex === idx ? "w-8 h-1" : "w-1.5 h-1.5 opacity-50 hover:opacity-100"
              }`}
            />
          ))}
        </div>

        {/* Right Arrow */}
        <button 
          onClick={nextSlide}
          className="w-8 h-8 md:w-10 md:h-10 border border-white/50 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-all group"
        >
          <ChevronRight size={18} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

    </div>
  );
};

export default HeroCarousel;
