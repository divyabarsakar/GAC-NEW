import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';

const LifestyleBanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 });

  return (
    <section 
      ref={ref}
      className="relative w-full h-screen overflow-hidden bg-black snap-start"
    >
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          poster="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773715284162-1760350214956-1759025644481-S7banner.webp"
          className="w-full h-full object-cover"
        >
          <source src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773714695303-3月16日.mp4" type="video/mp4" />
        </video>
        {/* Subtle dark gradient mapping to make sure any right-aligned text is fully readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
      </div>

      {/* Button Overlay - Explicitly separated and Bottom Right perfectly matching the very first screenshot layout */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute bottom-[20%] right-6 lg:right-24 z-10"
      >
        <Link 
          to="/discover"
          className="bg-transparent border border-white text-white font-light text-[14px] md:text-[15px] px-10 md:px-12 py-2.5 hover:bg-white hover:text-black transition-colors duration-300 rounded-full shadow-sm block text-center backdrop-blur-sm"
        >
          Learn More
        </Link>
      </motion.div>
    </section>
  );
};

export default LifestyleBanner;
