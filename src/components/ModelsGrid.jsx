import React from 'react';
import { Link } from 'react-router-dom';

const cars = [
  {
    name: "S7",
    tagline: "Big on Space, Big on Smarts",
    price: "From CHF 45,900",
    range: "600km WLTP",
    acceleration: "4.9s 0-100km/h",
    image: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773715232466-s7-pc.webp",
    link: "/suv/s7"
  },
  {
    name: "AION V",
    tagline: "Rugged & Smart SUV",
    price: "From CHF 38,500",
    range: "500km WLTP",
    acceleration: "6.5s 0-100km/h",
    image: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773715368868-AIONV-pc.webp",
    link: "/models/aion-v"
  },
  {
    name: "AION UT",
    tagline: "Next-gen urban EV crossover",
    price: "From CHF 32,900",
    range: "400km WLTP",
    acceleration: "7.2s 0-100km/h",
    image: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773715515304-AIONUT-pc.webp",
    link: "/models/aion-ut"
  },
  {
    name: "E9",
    tagline: "Luxury Flagship MPV",
    price: "From CHF 65,000",
    range: "1032km PHEV Range",
    acceleration: "8.8s 0-100km/h",
    image: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/operation/ncar/page/202512/1766476923442-E9-白.webp",
    link: "/models/e9"
  },
  {
    name: "EMKOO",
    tagline: "Hybrid Intelligent SUV",
    price: "From CHF 36,900",
    range: "1000km Hybrid Range",
    acceleration: "7.0s 0-100km/h",
    image: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/operation/ncar/page/202512/1766476368158-EMKOO-蓝绿.webp",
    link: "/suv/emkoo"
  }
];

const CarCard = ({ car }) => (
  <Link to={car.link} className="flex flex-col group bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 rounded-sm overflow-hidden">
    <div className="relative w-full aspect-[16/10] bg-gray-50 overflow-hidden flex items-center justify-center p-6">
      <img 
        src={car.image} 
        alt={car.name} 
        className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700" 
      />
    </div>
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-xl font-bold tracking-wider text-gray-900">{car.name}</h3>
          <p className="text-xs tracking-wide text-gray-500 uppercase mt-1">{car.tagline}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-900">{car.price}</p>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest mt-1">Estim. MSRP</p>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 mt-auto">
        <div>
          <p className="text-xs text-gray-400 tracking-wider">RANGE</p>
          <p className="text-sm font-semibold text-gray-800 mt-1">{car.range}</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 tracking-wider">ACCELERATION</p>
          <p className="text-sm font-semibold text-gray-800 mt-1">{car.acceleration}</p>
        </div>
      </div>
    </div>
  </Link>
);

const ModelsGrid = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24 px-4 sm:px-6 lg:px-12 w-full snap-start">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 className="text-[26px] sm:text-3xl md:text-4xl font-light tracking-tight text-gray-900 mb-4">
            Discover Our Lineup
          </h2>
          <p className="text-gray-500 max-w-2xl text-[13px] md:text-base tracking-wide leading-relaxed">
            Experience the future of mobility with GAC's premium range of intelligent electric and hybrid vehicles designed perfectly for Swiss roads.
          </p>
        </div>
        
        {/* Top 3 Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {cars.slice(0, 3).map(car => (
            <CarCard key={car.name} car={car} />
          ))}
        </div>
        
        {/* Bottom 2 Models Centered/Balanced */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.slice(3).map(car => (
            <CarCard key={car.name} car={car} />
          ))}
          <div className="hidden lg:flex flex-col items-center justify-center p-8 border border-dashed border-gray-300 rounded-sm text-center">
             <h3 className="text-xl font-light tracking-wider text-gray-800 mb-2">Configure Your GAC</h3>
             <p className="text-xs text-gray-500 mb-6">Build your perfect vehicle with our studio.</p>
             <button className="px-8 py-3 bg-black text-white text-xs uppercase tracking-widest font-semibold hover:bg-gray-800 transition-colors">Start Building</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelsGrid;
