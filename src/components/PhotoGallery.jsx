import React from 'react';

const PhotoGallery = () => {
  return (
    <section className="bg-black py-24 md:py-32 w-full overflow-hidden snap-start">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12">
           <div>
             <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
               Gallery
             </h2>
             <p className="text-gray-400 max-w-lg text-sm md:text-base tracking-wide leading-relaxed">
               Crafted for elegance. Engineered for performance. Discover the meticulous design details of the GAC lineup.
             </p>
           </div>
           <button className="hidden md:block text-xs uppercase tracking-widest text-white border-b border-white pb-1 hover:text-gray-400 transition-colors">
              Explore All Design
           </button>
        </div>

        {/* CSS Masonry Grid Style */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full h-auto min-h-[600px]">
          
          {/* Main Large Image */}
          <div className="md:col-span-8 overflow-hidden group rounded-sm w-full h-[400px] md:h-[600px] relative">
            <img 
              src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773716242394-HT-pc.webp" 
              alt="GAC Luxury" 
              className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Side Stacked Images */}
          <div className="md:col-span-4 flex flex-col gap-6 w-full h-[800px] md:h-[600px]">
            <div className="overflow-hidden group rounded-sm flex-1 relative h-1/2">
              <img 
                src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/operation/ncar/page/202510/1761029965293-S7-黑.webp" 
                alt="GAC S7 Detail" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="overflow-hidden group rounded-sm flex-1 relative h-1/2">
              <img 
                src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/operation/ncar/page/202512/1766476191957-AIONY-黄.webp" 
                alt="GAC Concept" 
                className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
          </div>

        </div>

        {/* Additional Full Width Image Strip */}
        <div className="mt-6 overflow-hidden group rounded-sm w-full h-[250px] md:h-[350px] relative">
            <img 
              src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/operation/ncar/page/202512/1766476923442-E9-白.webp" 
              alt="E9 Side Profile" 
              className="w-full h-full object-cover object-bottom transition-transform duration-[2s] group-hover:scale-105 mix-blend-screen opacity-90"
            />
        </div>
        
      </div>
    </section>
  );
};

export default PhotoGallery;
