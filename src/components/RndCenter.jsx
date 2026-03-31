import React from 'react';

const RndCenter = () => {
  return (
    <section className="w-full bg-[#f9f9f9] md:bg-white flex justify-center py-10 md:py-20 lg:py-24">
      <div className="w-full max-w-[1400px] flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-8">
        
        {/* Left Column: Image */}
        <div className="w-full lg:w-[55%] mt-10 lg:mt-0 px-2 sm:px-4 flex justify-center lg:justify-end">
          <img 
            src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202503/17197a44-8c7c-4ee5-b08e-6d3dfc107943.png"
            alt="R&D Center and Production System" 
            className="w-full max-w-[800px] h-auto object-contain"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 lg:pr-16 lg:pl-12 md:py-12 space-y-6">
          <h2 className="text-[26px] md:text-[34px] font-semibold text-black tracking-wide">
            R&D Center and Production System
          </h2>
          <p className="text-[#333] font-light text-[14px] md:text-[15px] leading-[1.8]">
            Founded in 2006, GAC R&D CENTER is the technology management department and R&D system hub of GAC GROUP.
          </p>
          <div className="pt-2">
            <button className="px-[40px] py-[10px] text-[13px] text-black border-[0.5px] border-gray-400 hover:bg-black hover:text-white transition-colors duration-300 bg-transparent rounded-none">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RndCenter;
