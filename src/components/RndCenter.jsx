import React from 'react';

const RndCenter = () => {
  return (
    <section className="w-full bg-[#f9f9f9] md:bg-white flex justify-center py-10 md:py-20">
      <div className="w-full max-w-[1400px] flex flex-col-reverse lg:flex-row items-center justify-between px-4 lg:px-8">
        
        {/* Left Column: Image */}
        <div className="w-full lg:w-[55%] mt-10 lg:mt-0 px-4">
          <img 
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80"
            alt="R&D Center and Production System" 
            className="w-full h-auto object-cover rounded-sm shadow-sm brightness-95"
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center px-4 lg:pr-16 lg:pl-12 md:py-12 space-y-6">
          <h2 className="text-[28px] md:text-[34px] font-semibold text-black tracking-wide">
            R&D Center and Production System
          </h2>
          <p className="text-[#333] font-light text-[15px] leading-[1.8]">
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
