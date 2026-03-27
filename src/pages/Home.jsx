import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import AppSection from '../components/AppSection';
import LifestyleBanner from '../components/LifestyleBanner';
import HeroCarousel from '../components/HeroCarousel';
import CorporateSplit from '../components/CorporateSplit';
import TechInnovation from '../components/TechInnovation';
import RndCenter from '../components/RndCenter';
import SafetySection from '../components/SafetySection';

const NewsCard = ({ image, title, link }) => {
  return (
    <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden group cursor-pointer bg-gray-100">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
      />
      {/* Dark gradient and text that mimics hover reveal from gacgroup.com */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h3 className="text-white text-[14px] md:text-[16px] leading-snug font-light tracking-wide max-w-[90%] translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {title}
        </h3>
      </div>
    </div>
  );
};

const CorporateBlock = ({ title, subTitle, text, linkText, linkUrl, bgImage }) => {
  return (
    <div className="relative group overflow-hidden h-96 w-full flex items-center justify-center cursor-pointer text-center">
      <img 
        src={bgImage} 
        alt={title} 
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105 opacity-90 group-hover:opacity-100"
      />
      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-500"></div>
      <div className="relative z-10 p-8 flex flex-col items-center">
        <h2 className="text-white text-2xl font-light mb-4">{title}</h2>
        {subTitle && <h3 className="text-white/80 text-sm mb-4 uppercase tracking-widest">{subTitle}</h3>}
        {text && <p className="text-white/80 font-light max-w-sm mb-6 leading-relaxed text-sm">{text}</p>}
        {linkText && (
          <Link to={linkUrl} className="text-white uppercase tracking-widest text-xs border-b border-white pb-1 font-semibold hover:text-gray-300 hover:border-gray-300 transition-colors">
            {linkText}
          </Link>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  // Removed body snap config to allow normal scrolling behavior beneath the carousel

  const slides = [
    {
      title: "AION V",
      subtitle: "Rugged & Smart SUV",
      link: "/models/aion-v",
      bgImage: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773715368868-AIONV-pc.webp"
    },
    {
      title: "AION UT",
      subtitle: "A stylish and intelligent next-gen urban EV crossover",
      link: "/models/aion-ut",
      bgImage: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773715515304-AIONUT-pc.webp"
    },
    {
      title: "ALL New GS8",
      subtitle: "Mid-to-large intelligent SUV",
      link: "/suv/gac-gs8",
      bgImage: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773715987042-GS8-pc.webp"
    },
    {
      title: "AION Y",
      subtitle: "New Trend Pure Electric SUV",
      link: "/suv/aion-y",
      bgImage: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773716109198-AIONY-pc.webp"
    },
    {
      title: "HYPTEC HT",
      subtitle: "Luxury Electric SUV",
      link: "/suv/hyptec-ht",
      bgImage: "https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773716242394-HT-pc.webp"
    }
  ];

  return (
    <div className="w-full h-full relative">
      
      {/* 1. First Page: Lifestyle Banner (Top) */}
      <LifestyleBanner />

      {/* 2. Second Page: News Cards Section */}
      <div className="w-full bg-white flex flex-col justify-center items-center py-20 lg:py-32 px-6 lg:px-24">
        <div className="w-full max-w-[1600px] grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <Link to="/news/hyptec-ht">
            <NewsCard 
              image="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773814518051-新闻-HT.webp" 
              title="With its long range, HYPTEC HT takes on high-altitude roads with confidence"
            />
          </Link>
          <Link to="/news/aion-v">
            <NewsCard 
              image="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773814578733-新闻-v(1).webp" 
              title="AION V keeps every ride smooth, easy, and safe"
            />
          </Link>
          <Link to="/news/aion-ut">
            <NewsCard 
              image="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/cms/common/202603/1773814618959-新闻-UT(2).webp" 
              title="Discover the design story behind AION UT with GAC's Chief Design Officer..."
            />
          </Link>
        </div>
      </div>

      {/* 3. Third Page: Hero Carousel (AION V, S7 Slider) */}
      <HeroCarousel slides={slides} />

      {/* 4. Fourth Page: Corporate Split Block (Guangzhou Automobile Group) */}
      <CorporateSplit />

      {/* 5. Fifth Page: Tech Innovation Centered Block */}
      <TechInnovation />

      {/* 6. Sixth Page: R&D Center and Production System */}
      <RndCenter />

      {/* 7. Seventh Page: Safety Ratings Section */}
      <SafetySection />

      {/* Other Supporting Sections */}
      <AppSection />
    </div>
  );
};

export default Home;
