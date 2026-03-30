import React from 'react';
import { motion } from 'framer-motion';
import emblemImg from '../assets/gac-emblem.png';

const CorporateSplit = () => {
  return (
    <section className="w-full bg-[#fafafa] py-16 lg:py-24 flex justify-center overflow-hidden">
      <div className="w-full max-w-[1280px] px-5 sm:px-10 lg:px-12 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[45%] flex flex-col justify-center space-y-6 lg:space-y-8 mb-12 lg:mb-0 lg:pr-10 xl:pr-16"
        >
          <h2 className="text-[28px] md:text-[32px] font-semibold text-[#1a1a1a] tracking-tight leading-snug">
            Guangzhou Automobile Group
          </h2>
          
          <p className="text-[#555] font-normal text-[15px] md:text-[16px] leading-[1.8] max-w-[450px]">
            Guangzhou Automobile Group Co., Ltd. ("GAC") was incorporated in June 1997. In 2023, GAC' s production and sales both exceeded 2.5 million, with a positive year-on-year growth.
          </p>
          
          <div className="pt-2">
            <button className="px-8 py-3 text-[13px] font-medium tracking-wide text-black bg-transparent border border-black hover:bg-black hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Column: Corporate Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full lg:w-[48%] flex justify-end"
        >
          <img 
            src={emblemImg}
            alt="Guangzhou Automobile Group Emblem" 
            className="w-full max-w-[550px] lg:max-w-none h-auto object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default CorporateSplit;
