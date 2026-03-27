import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-16 px-6 lg:px-12 snap-start">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
          
          {/* Column 1: GAC APP & Email */}
          <div className="md:col-span-1 space-y-6">
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase">GAC APP</h3>
            <div className="flex gap-4 items-center">
              <div className="w-24 h-24 bg-white p-2 flex items-center justify-center">
                {/* QR Code Placeholder */}
                <img 
                  src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://gacgroup.com" 
                  alt="Download GAC App" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="text-xs text-gray-400 max-w-[150px] leading-relaxed">
                Scan to download the ultimate GAC smart experience
              </div>
            </div>
            
            <div className="pt-8">
              <h3 className="text-sm font-semibold tracking-widest text-white uppercase mb-4">Contact</h3>
              <a 
                href="mailto:info@gac-schweiz.ch" 
                className="text-gray-400 hover:text-white transition-colors text-sm break-words border-b border-transparent hover:border-white pb-1"
              >
                E-mail: info@gac-schweiz.ch
              </a>
            </div>
          </div>

          {/* Column 2: Models */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase">Models</h3>
            <ul className="space-y-4">
              <li><Link to="/suv/s7" className="text-gray-400 hover:text-white transition-colors text-sm">S7</Link></li>
              <li><Link to="/models/aion-v" className="text-gray-400 hover:text-white transition-colors text-sm">AION V</Link></li>
              <li><Link to="/models/aion-ut" className="text-gray-400 hover:text-white transition-colors text-sm">AION UT</Link></li>
              <li><Link to="/suv/gac-gs8" className="text-gray-400 hover:text-white transition-colors text-sm">GS8</Link></li>
              <li><Link to="/suv/aion-y" className="text-gray-400 hover:text-white transition-colors text-sm">AION Y</Link></li>
              <li><Link to="/suv/hyptec-ht" className="text-gray-400 hover:text-white transition-colors text-sm">HYPTEC HT</Link></li>
            </ul>
          </div>

          {/* Column 3: Discover & Technology */}
          <div className="space-y-6">
            <h3 className="text-sm font-semibold tracking-widest text-white uppercase">Technology</h3>
            <ul className="space-y-4 pb-4">
              <li><Link to="/technology/intelligent-system" className="text-gray-400 hover:text-white transition-colors text-sm">Intelligent System</Link></li>
              <li><Link to="/technology/engine-and-battery" className="text-gray-400 hover:text-white transition-colors text-sm">Engine & Battery</Link></li>
              <li><Link to="/technology/intelligent-factory" className="text-gray-400 hover:text-white transition-colors text-sm">Intelligent Factory</Link></li>
              <li><Link to="/technology/safety" className="text-gray-400 hover:text-white transition-colors text-sm">Safety</Link></li>
            </ul>

            <h3 className="text-sm font-semibold tracking-widest text-white uppercase">Discover</h3>
            <ul className="space-y-4">
              <li><Link to="/gac-group" className="text-gray-400 hover:text-white transition-colors text-sm">GAC GROUP</Link></li>
              <li><Link to="/brand-story" className="text-gray-400 hover:text-white transition-colors text-sm">Brand-Story</Link></li>
              <li><Link to="/r-and-d-center" className="text-gray-400 hover:text-white transition-colors text-sm">R&D Center</Link></li>
              <li><Link to="/esg-sustainability" className="text-gray-400 hover:text-white transition-colors text-sm">ESG Sustainability</Link></li>
            </ul>
          </div>

          {/* Column 4: Consent to Cookies */}
          <div className="space-y-6 bg-gray-900/50 p-6 border border-gray-800 rounded-sm">
            <h3 className="text-lg font-light tracking-wide text-white">Consent to Cookies & Data processing</h3>
            <p className="text-xs text-gray-400 leading-relaxed font-light">
              We use our own and third-party cookies to ensure the proper functioning of the web portal and its complements, perform navigation analysis and show multimedia content. If you continue browsing, you accept the use of this technology. For more information please see our Cookies Statement.
            </p>
            <div className="pt-2">
              <Link to="/policy/cookies-policy" className="text-white uppercase tracking-widest text-xs border-b border-white pb-1 font-semibold hover:text-gray-300 transition-colors">
                Learn More
              </Link>
            </div>
          </div>

        </div>

        {/* Global Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 uppercase tracking-widest">
          <p>© 2025 GAC SWITZERLAND</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <Link to="/global" className="hover:text-white transition-colors">Global Site</Link>
            <Link to="/europe" className="hover:text-white transition-colors">Europe</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
