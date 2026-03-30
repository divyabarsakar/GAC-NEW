import React from 'react';
import { motion } from 'framer-motion';

const TechInnovation = () => {
  const adigoPilotImg = "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202503/2e56e41d-0e19-4e5f-85f6-bc462bebbb2a.png";

  return (
    <section className="w-full bg-white flex flex-col items-center pt-16 lg:pt-24 pb-12 lg:pb-24 overflow-hidden relative">
      
      {/* Top Text Content */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-4xl flex flex-col items-center text-center px-6 lg:px-12 z-10 space-y-6"
      >
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900">
          Technological Innovation
        </h2>
        <p className="text-gray-500 font-light text-[15px] leading-relaxed max-w-[800px]">
          At GAC R&D CENTER, we aim to make breakthroughs in the following four aspects and would invest more in technological innovation. We empower product development through technological development
        </p>
        <div className="pt-2">
          <button className="px-8 py-2.5 text-xs tracking-wide text-gray-800 border border-gray-200 hover:bg-black hover:text-white transition-colors duration-300">
            Discover
          </button>
        </div>
      </motion.div>

      {/* Centered Innovation Image */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="w-full max-w-[1200px] mt-10 md:mt-14 px-4 flex items-center justify-center"
      >
        <img 
          src={adigoPilotImg}
          alt="Technological Innovation ADiGO PILOT Test Vehicle" 
          className="w-full h-auto max-h-[70vh] object-contain transform hover:scale-[1.03] transition-transform duration-[2.5s] ease-out"
        />
      </motion.div>

    </section>
  );
};

export default TechInnovation;
