import React from 'react';

const SafetySection = () => {
  return (
    <section className="w-full bg-[#f9f9f9] flex justify-center py-0 overflow-hidden">
      <div className="w-full flex flex-col lg:flex-row items-stretch">
        
        {/* Left Column: Empty / White Background matching GAC Split style or specific text */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 lg:px-24 py-16 lg:py-32 bg-white space-y-6">
           <h2 className="text-[28px] md:text-[34px] font-semibold text-black tracking-wide">
             World-Class Safety Standards
           </h2>
           <p className="text-[#333] font-light text-[15px] leading-[1.8] max-w-lg">
             GAC Group has established a high-standard safety R&D system, and its products meet the highest safety standards in the world. Several models have achieved 5-star safety ratings in various authoritative tests such as C-NCAP and Euro NCAP, providing users with comprehensive and reliable safety protection.
           </p>
           <div className="pt-4">
               <button className="px-[40px] py-[10px] text-[13px] text-black border-[0.5px] border-gray-400 hover:bg-black hover:text-white transition-colors duration-300 bg-transparent rounded-none">
                 Discover
               </button>
           </div>
        </div>

        {/* Right Column: Safety Image showing NCAP / ANCAP ratings */}
        <div className="w-full lg:w-1/2 relative bg-[#9c9591]">
          {/* We use the exact image from the gacgroup.com/en/ site */}
          <img 
            src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773715368868-AIONV-pc.webp"
            alt="EURO NCAP and ANCAP Safety Ratings" 
            className="w-full h-full object-cover min-h-[400px] lg:absolute lg:inset-0"
          />
        </div>

      </div>
    </section>
  );
};

export default SafetySection;
