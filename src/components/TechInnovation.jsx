import React from 'react';
import adigoPilotImg from '../assets/adigo-pilot.png';

const TechInnovation = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center pt-20 lg:pt-32 overflow-hidden relative">
      
      {/* Top Text Content */}
      <div className="w-full max-w-4xl flex flex-col items-center text-center px-6 lg:px-12 z-10 space-y-6">
        <h2 className="text-3xl lg:text-4xl font-medium tracking-tight text-gray-900">
          Technological Innovation
        </h2>
        <p className="text-gray-500 font-light text-[15px] leading-relaxed max-w-[800px]">
          At GAC R&D CENTER, we aim to make breakthroughs in the following four aspects and would invest more in technological innovation. We empower product development through technological development
        </p>
        <div className="pt-2">
          <button className="px-8 py-2.5 text-xs text-gray-800 border border-gray-200 hover:bg-black hover:text-white transition-colors duration-300">
            Discover
          </button>
        </div>
      </div>

      {/* Full-width Base Image spanning horizontally */}
      <div className="w-full mt-10 md:mt-16 flex items-end justify-center">
        <img 
          src={adigoPilotImg}
          alt="Technological Innovation ADiGO PILOT Test Vehicle" 
          className="w-full max-w-[1600px] h-auto object-cover transform hover:scale-[1.02] transition-transform duration-[3s]"
        />
      </div>

    </section>
  );
};

export default TechInnovation;
