import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Globe, Search } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'MODELS', path: '/#models' }, 
    { name: 'TECHNOLOGY', path: '/technology' },
    { name: 'DISCOVER', path: '/discover' },
    { name: 'CONTACT US', path: '/contact' },
    { name: 'SERVICE', path: '/service' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-md shadow-lg py-4 border-b border-gray-800' : 'bg-gradient-to-b from-black/80 to-transparent py-6'
      }`}
    >
      <div className="w-full px-6 lg:px-12 flex justify-between items-center">
        
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Link to="/" className="z-50 relative flex items-center">
            <img 
              src="https://br-www-resouce-cdn.gacgroup.com/www/static/webp/logo-white-1774411278691.d4b43b0e.webp" 
              alt="GAC Logo" 
              className="h-6 md:h-8 w-auto object-contain"
            />
          </Link>
        </div>

        {/* Center: Desktop Menu */}
        <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 space-x-12 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[12px] tracking-[0.1em] font-semibold text-white/90 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons Menu */}
        <div className="hidden lg:flex flex-shrink-0 items-center space-x-6 text-white pl-4 border-l border-white/20">
          <button className="hover:text-gray-300 transition-colors">
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button className="hover:text-gray-300 transition-colors">
            <Globe size={20} strokeWidth={1.5} />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="lg:hidden z-50 relative text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-black/95 backdrop-blur-3xl flex flex-col items-center justify-center transform transition-transform duration-500 lg:hidden ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col space-y-8 text-center text-white w-full px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="text-xl font-light tracking-[0.15em] hover:text-white/60 transition-colors border-b border-gray-800 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex justify-center gap-8 pt-8">
              <button className="flex flex-col items-center gap-2 text-sm font-light tracking-widest hover:text-white/60 transition-colors">
                <Search size={24} strokeWidth={1.5} /> Search
              </button>
              <button className="flex flex-col items-center gap-2 text-sm font-light tracking-widest hover:text-white/60 transition-colors border-l border-gray-800 pl-8">
                <Globe size={24} strokeWidth={1.5} /> Global
              </button>
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
