import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AionUT = () => {
  const [activeColor, setActiveColor] = useState('phantom-black');

  const colors = [
    { id: 'phantom-black', name: 'Phantom Black', hex: '#1c1c1c', image: 'https://images.unsplash.com/photo-1549419137-02e071e6261f?q=80&w=1200&auto=format&fit=crop' },
    { id: 'lunar-silver', name: 'Lunar Silver', hex: '#d1d1d1', image: 'https://images.unsplash.com/photo-1533558701576-23c65e0272fb?q=80&w=1200&auto=format&fit=crop' },
    { id: 'azure-blue', name: 'Azure Blue', hex: '#153a5c', image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=1200&auto=format&fit=crop' }
  ];

  return (
    <div className="w-full bg-[#fcfcfc] overflow-x-hidden">
      {/* 1. Hero Header */}
      <section className="relative h-screen w-full bg-black flex flex-col justify-end pb-32">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        >
          {/* Dynamic urban driving video matching AION UT vibe */}
          <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-0"></div>

        <div className="relative z-10 px-8 lg:px-24">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-light text-white tracking-tighter"
          >
            AION <span className="font-bold cursor-text">UT</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 mt-4 max-w-lg text-lg tracking-wide leading-relaxed"
          >
            Urban agility redefined. Compact, fiercely intelligent, and designed to conquer the city landscape seamlessly.
          </motion.p>
        </div>
      </section>

      {/* 2. Specs/Energy Highlight */}
      <section className="py-20 bg-black text-white px-8 lg:px-24 border-t border-gray-800">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 py-12">
          <div className="border-l-2 border-white/20 pl-6">
            <h4 className="text-gray-400 uppercase tracking-widest text-xs mb-3 font-semibold">Range (WLTP)</h4>
            <p className="text-4xl lg:text-5xl tracking-tight">450<span className="text-2xl text-gray-400 ml-1">km</span></p>
          </div>
          <div className="border-l-2 border-white/20 pl-6">
            <h4 className="text-gray-400 uppercase tracking-widest text-xs mb-3 font-semibold">Efficiency</h4>
            <p className="text-4xl lg:text-5xl tracking-tight">12.5<span className="text-2xl text-gray-400 ml-1">kWh/100</span></p>
          </div>
          <div className="border-l-2 border-white/20 pl-6">
            <h4 className="text-gray-400 uppercase tracking-widest text-xs mb-3 font-semibold">Charging Power</h4>
            <p className="text-4xl lg:text-5xl tracking-tight">120<span className="text-2xl text-gray-400 ml-1">kW</span></p>
          </div>
          <div className="border-l-2 border-white/20 pl-6">
            <h4 className="text-gray-400 uppercase tracking-widest text-xs mb-3 font-semibold">Top Speed</h4>
            <p className="text-4xl lg:text-5xl tracking-tight">160<span className="text-2xl text-gray-400 ml-1">km/h</span></p>
          </div>
        </div>
      </section>

      {/* 3. Existing Smart Tech Section (AION UT specific) */}
      <section className="py-24 px-6 md:px-12 bg-white flex flex-col items-center">
        <div className="max-w-4xl text-center space-y-6 mb-16">
          <h2 className="text-4xl font-light text-gray-900 tracking-tight">Seamless <span className="font-bold">Integration</span></h2>
          <p className="text-gray-600 text-lg">
            Stay endlessly connected. The AION UT brings advanced GAC smart systems usually reserved for premium models into an attainable urban package.
          </p>
        </div>
        
        <div className="w-full max-w-7xl h-[500px] bg-gray-100 rounded-3xl overflow-hidden relative shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?q=80&w=1200&auto=format&fit=crop" 
            alt="Dashboard Infotainment" 
            className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
          />
        </div>
      </section>

      {/* 4. Color Variants (Inherited from AION V) */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
          <h2 className="text-4xl font-light tracking-tight text-gray-900">
            Express <span className="font-bold">Yourself</span>
          </h2>
          
          <div className="flex justify-center gap-6">
            {colors.map((color) => (
              <button 
                key={color.id}
                onClick={() => setActiveColor(color.id)}
                aria-label={color.name}
                className={`w-14 h-14 rounded-full border-4 transition-all duration-300 ${
                  activeColor === color.id ? 'border-gray-900 scale-110 shadow-xl' : 'border-white scale-100 shadow-md'
                }`}
              >
                <span 
                  className="block w-full h-full rounded-full border border-gray-100" 
                  style={{ backgroundColor: color.hex }}
                />
              </button>
            ))}
          </div>
          
          <p className="text-sm font-semibold tracking-[0.2em] text-gray-800 uppercase">
            {colors.find(c => c.id === activeColor)?.name}
          </p>
          
          <div className="relative h-[300px] md:h-[500px] w-full max-w-5xl mx-auto mt-12 bg-gray-100 rounded-xl overflow-hidden shadow-inner flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeColor}
                src={colors.find(c => c.id === activeColor)?.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply"
                alt="AION UT Color Preview"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. Interior Section (Inherited from AION V) */}
      <section className="py-24 bg-white grid grid-cols-1 lg:grid-cols-2 gap-0 max-w-[1600px] mx-auto">
        <div className="h-[600px] overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1541892186981-d101d2ce8fa8?q=80&w=1200&auto=format&fit=crop" 
            alt="AION UT Interior Detail" 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
          />
        </div>
        <div className="h-[600px] bg-gray-50 flex flex-col justify-center px-12 lg:px-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="relative z-10 space-y-8">
            <h3 className="text-3xl font-light tracking-tight text-gray-900 leading-tight">
               Spacious <br/><span className="font-bold">Beyond Class</span>
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
               The AION UT maximizes its compact footprint to provide an airy, lounge-like cabin. Foldable magic seats and bio-based friendly materials wrap you in modern comfort.
            </p>
            <div className="pt-8 border-t border-gray-200">
               <ul className="space-y-6">
                 <li className="flex justify-between items-center text-sm font-medium text-gray-800 uppercase tracking-widest">
                   <span>Storage Volume</span>
                   <span className="text-black font-light text-lg">420L</span>
                 </li>
                 <li className="flex justify-between items-center text-sm font-medium text-gray-800 uppercase tracking-widest">
                   <span>Display Layout</span>
                   <span className="text-black font-light text-lg">10.25" + 12.3"</span>
                 </li>
               </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AionUT;
