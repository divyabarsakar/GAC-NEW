import React from 'react';
import emblemImg from '../assets/gac-emblem.png';

const CorporateSplit = () => {
  return (
    <section className="w-full bg-white flex justify-center py-12 lg:py-24">
      <div className="w-full max-w-[1400px] flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12">
        
        {/* Left Column: Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 md:px-12 lg:pr-16 xl:pr-24 space-y-6 lg:space-y-8 pb-12 lg:pb-0">
          <h2 className="text-[28px] md:text-[36px] font-medium text-gray-900 tracking-tight leading-snug">
            Guangzhou Automobile Group
          </h2>
          <p className="text-[#555] font-light text-[15px] leading-relaxed max-w-md">
            Guangzhou Automobile Group Co., Ltd. ("GAC") was incorporated in June 1997. In 2023, GAC' s production and sales both exceeded 2.5 million, with a positive year-on-year growth.
          </p>
          <div className="pt-2 lg:pt-4">
            <button className="px-8 py-2.5 text-[13px] tracking-wide text-gray-800 border border-gray-200 hover:bg-black hover:text-white transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Column: Corporate Image */}
        <div className="w-full lg:w-[55%] h-auto">
          <img 
            src={emblemImg}
            alt="Guangzhou Automobile Group Emblem" 
            className="w-full h-auto object-cover rounded-sm"
          />
        </div>

      </div>
    </section>
  );
};

export default CorporateSplit;
