import React from 'react';

const AppSection = () => {
  return (
    <section className="bg-white py-16 md:py-20 w-full overflow-hidden relative border-t border-gray-100">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Content */}
        <div className="flex flex-row items-start gap-4 md:gap-6 w-full md:w-[45%] mb-12 md:mb-0 ml-0 md:ml-12 pt-8">
          <div className="bg-[#1a1c1d] rounded-[1.25rem] w-[4.5rem] h-[4.5rem] md:w-20 md:h-20 flex items-center justify-center flex-shrink-0 shadow-lg overflow-hidden group">
             <img src="https://br-www-resouce-cdn.gacgroup.com/www/static/webp/logo-white-1774411278691.d4b43b0e.webp" alt="GAC Logo" className="w-[60%] object-contain" />
          </div>
          <div className="flex flex-col mt-0 md:mt-1">
            <h2 className="text-[26px] sm:text-3xl md:text-[2.2rem] font-medium text-gray-900 leading-tight tracking-normal mb-2 md:mb-3">
              GAC APP
            </h2>
            <p className="text-[#999999] text-[13px] sm:text-sm max-w-md tracking-wide font-light leading-relaxed">
              For Vehicle Remote Control, Sale And After-Sale Service.
            </p>
          </div>
        </div>

        {/* Right Side: Phone Images */}
        <div className="w-full md:w-[55%] flex justify-center md:justify-end relative">
          <img 
             src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/operation/ncar/page/202409/1726053351336-app-ht5.png" 
             onError={(e) => { e.target.src = "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/operation/ncar/page/202408/1724213768804-app_eng.png" }}
             alt="GAC App mockups" 
             className="w-full max-w-[500px] md:max-w-[650px] object-contain object-right" 
          />
        </div>

      </div>
    </section>
  );
};

export default AppSection;
