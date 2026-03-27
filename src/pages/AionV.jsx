import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AionV = () => {
  const [activeColor, setActiveColor] = useState('pearl-white');

  const colors = [
    { id: 'pearl-white', name: 'Pearl White', hex: '#f0f0f0', image: 'https://images.unsplash.com/photo-1616454790209-40d6bc9f0907?q=80&w=1200&auto=format&fit=crop' },
    { id: 'carbon-black', name: 'Carbon Black', hex: '#111111', image: 'https://images.unsplash.com/photo-1612825173281-9a19337852ba?q=80&w=1200&auto=format&fit=crop' },
    { id: 'volcanic-red', name: 'Volcanic Red', hex: '#63030b', image: 'https://images.unsplash.com/photo-1542362567-b07e54358753?q=80&w=1200&auto=format&fit=crop' }
  ];

  return (
    <div className="w-full bg-[#fcfcfc] overflow-x-hidden">
      {/* 1. Hero Video Header */}
      <section className="relative h-screen w-full bg-black flex flex-col justify-end pb-32">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        >
          {/* Dynamic driving video matching AION V vibe */}
          <source src="https://videos.pexels.com/video-files/3141208/3141208-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-0"></div>

        <div className="relative z-10 px-8 lg:px-24">
          <motion.h1 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-6xl md:text-8xl font-light text-white tracking-tighter"
          >
            AION <span className="font-bold">V</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-white/80 mt-4 max-w-lg text-lg tracking-wide leading-relaxed"
          >
            The benchmark of intelligent mobility. Advanced driving dynamics wrapped in a fiercely elegant silhouette.
          </motion.p>
        </div>
      </section>

      {/* 2. Specs/Energy Highlight */}
      <section className="py-20 bg-black text-white px-8 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-gray-800 border-t border-b border-gray-800 py-12">
          <div className="text-center px-4">
            <h4 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Range (WLTP)</h4>
            <p className="text-4xl lg:text-5xl font-light">600<span className="text-xl">km</span></p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Acceleration</h4>
            <p className="text-4xl lg:text-5xl font-light">7.9<span className="text-xl">s</span></p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Charging (10-80%)</h4>
            <p className="text-4xl lg:text-5xl font-light">30<span className="text-xl">min</span></p>
          </div>
          <div className="text-center px-4">
            <h4 className="text-gray-500 uppercase tracking-widest text-xs mb-2">Drag Coefficient</h4>
            <p className="text-4xl lg:text-5xl font-light">0.23<span className="text-xl">Cd</span></p>
          </div>
        </div>
      </section>

      {/* 3. Image Gallery */}
      <section className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-light tracking-tight text-gray-900">Sculpted <span className="font-bold">Aesthetics</span></h2>
             <div className="w-12 h-1 bg-black mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
               whileHover={{ scale: 0.98 }}
               className="overflow-hidden bg-gray-100 rounded-sm h-[400px]"
            >
              <img src="https://images.unsplash.com/photo-1629897048514-3dd7414dfef6?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Aion V Exterior Side" />
            </motion.div>
            <motion.div 
               whileHover={{ scale: 0.98 }}
               className="overflow-hidden bg-gray-100 rounded-sm h-[400px]"
            >
              <img src="https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop" className="w-full h-full object-cover" alt="Aion V Exterior Front" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 4. Color Variants */}
      <section className="py-32 bg-gray-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <h2 className="text-4xl font-light tracking-tight text-gray-900">
              Your Signature <br /><span className="font-bold">Color</span>
            </h2>
            
            <div className="flex gap-6">
              {colors.map((color) => (
                <button 
                  key={color.id}
                  onClick={() => setActiveColor(color.id)}
                  aria-label={color.name}
                  className={`w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                    activeColor === color.id ? 'border-gray-900 scale-125 shadow-lg' : 'border-transparent scale-100'
                  }`}
                >
                  <span 
                    className="block w-full h-full rounded-full border border-gray-200" 
                    style={{ backgroundColor: color.hex }}
                  />
                </button>
              ))}
            </div>
            
            <p className="text-xl font-medium tracking-wide text-gray-600 transition-opacity duration-300 uppercase">
              {colors.find(c => c.id === activeColor)?.name}
            </p>
          </div>
          
          <div className="relative h-[400px] w-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeColor}
                src={colors.find(c => c.id === activeColor)?.image}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-2xl"
                alt="AION V Color Preview"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 5. Interior Section */}
      <section className="py-0 relative h-screen">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549646401-4af728e14620?q=80&w=1600&auto=format&fit=crop" 
            alt="Premium Interior" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-0"></div>
        
        <div className="relative z-10 h-full flex items-center justify-end max-w-7xl mx-auto px-6">
          <div className="bg-white/95 backdrop-blur-md max-w-md p-12 rounded-sm shadow-2xl">
            <h3 className="text-3xl font-light tracking-tight text-gray-900 mb-6">
              Immersive <span className="font-bold">Sanctuary</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              Step into an acoustic haven. Ambient lighting, sustainable vegan leather, and a 14.6" ultra-HD central display redefine the in-cabin experience. The AION V provides class-leading rear legroom and panoramic visibility.
            </p>
            <ul className="space-y-4 text-sm font-semibold tracking-wide text-gray-800">
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full block"></span> Multi-zone Climate Control
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full block"></span> Immersive 12-Speaker Audio
              </li>
              <li className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-black rounded-full block"></span> ADAS Driving Assistant
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AionV;
