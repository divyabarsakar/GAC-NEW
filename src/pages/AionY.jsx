import React from 'react';
import { motion } from 'framer-motion';

const AionY = () => {
  return (
    <div className="w-full bg-[#fcfcfc] overflow-x-hidden min-h-screen">
      <section className="relative h-screen w-full bg-black flex flex-col justify-center items-center pb-32">
        <img 
          src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773716109198-AIONY-pc.webp" 
          alt="AION Y" 
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0"></div>
        <div className="relative z-10 text-center px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-light text-white tracking-tighter uppercase"
          >
            AION <span className="font-bold">Y</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/80 mt-6 max-w-2xl mx-auto text-xl tracking-wide leading-relaxed font-light"
          >
            New Trend Pure Electric SUV. Embrace the future.
          </motion.p>
        </div>
      </section>
    </div>
  );
};

export default AionY;
