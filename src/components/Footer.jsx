import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white pt-16 pb-8 px-6 lg:px-12 relative overflow-hidden font-sans">
      <div className="max-w-[1600px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8 pb-16">
          
          {/* Column 1: Models */}
          <div className="space-y-6">
            <h3 className="text-[13px] font-bold tracking-widest text-white uppercase">Models</h3>
            <ul className="space-y-4">
              <li><Link to="/suv/e9" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">E9</Link></li>
              <li><Link to="/sedan/new-empow" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">NEW EMPOW</Link></li>
              <li><Link to="/suv/gs4-max" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">GS4 MAX</Link></li>
            </ul>
          </div>

          {/* Column 2: Technology */}
          <div className="space-y-6">
            <h3 className="text-[13px] font-bold tracking-widest text-white uppercase">Technology</h3>
            <ul className="space-y-4">
              <li><Link to="/technology/intelligent-system" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">Intelligent System</Link></li>
              <li><Link to="/technology/engine-and-battery" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">Engine & Battery</Link></li>
              <li><Link to="/technology/intelligent-factory" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">Intelligent Factory</Link></li>
            </ul>
          </div>

          {/* Column 3: Discover */}
          <div className="space-y-6">
            <h3 className="text-[13px] font-bold tracking-widest text-white uppercase">Discover</h3>
            <ul className="space-y-4">
              <li><Link to="/gac-group" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">GAC GROUP</Link></li>
              <li><Link to="/brand-story" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">Brand-Story</Link></li>
              <li><Link to="/r-and-d-center" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">R&D Center</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact Us */}
          <div className="space-y-6">
            <h3 className="text-[13px] font-bold tracking-widest text-white uppercase">Contact Us</h3>
            <ul className="space-y-4">
              <li><Link to="/become-partner" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">Become a Partner</Link></li>
              <li><a href="https://career.gac-international.com" target="_blank" rel="noopener noreferrer" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">Jobs</a></li>
            </ul>
          </div>

          {/* Column 5: Service */}
          <div className="space-y-6">
            <h3 className="text-[13px] font-bold tracking-widest text-white uppercase">Service</h3>
            <ul className="space-y-4">
              <li><Link to="/our-service" className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]">Our Service</Link></li>
            </ul>
          </div>

          {/* Column 6: Right side Logo and Contact */}
          <div className="md:col-span-1 flex flex-col items-start md:items-end space-y-6 md:pl-8 col-span-2 pt-8 md:pt-0">
             <img 
              src="https://br-www-resouce-cdn.gacgroup.com/www/static/webp/logo-white-1774411278691.d4b43b0e.webp" 
              alt="GAC Logo" 
              className="h-6 object-contain mb-4"
            />
            <div className="text-right">
              <a 
                href="mailto:GACI_CMD_CDS_OF@gac-international.com" 
                className="text-[#a0a0a0] hover:text-white transition-colors text-[13px]"
              >
                E-mail: GACI_CMD_CDS_OF@gac-international.com
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="flex space-x-4 pt-2">
              <a href="#" aria-label="Facebook" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 7C9.239 7 7 9.239 7 12s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8.169A3.169 3.169 0 1 1 12 8.831a3.169 3.169 0 0 1 0 6.338zm5.228-7.51a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0zM12 2.164c-3.208 0-3.606.014-4.862.07-1.253.058-2.112.259-2.864.551a5.83 5.83 0 0 0-2.108 1.371 5.865 5.865 0 0 0-1.37 2.109c-.292.751-.493 1.611-.55 2.863-.058 1.256-.07 1.655-.07 4.863 0 3.209.012 3.606.07 4.862.057 1.253.258 2.113.55 2.864.382.977.922 1.737 1.37 2.109a5.863 5.863 0 0 0 2.108 1.37c.752.292 1.611.493 2.864.551 1.256.057 1.655.07 4.862.07 3.209 0 3.607-.013 4.863-.07 1.253-.058 2.112-.259 2.864-.552.979-.382 1.738-.923 2.109-1.37a5.856 5.856 0 0 0 1.37-2.108c.292-.751.493-1.612.551-2.864.057-1.256.07-1.654.07-4.862 0-3.209-.013-3.607-.07-4.864-.058-1.253-.259-2.112-.551-2.863a5.856 5.856 0 0 0-1.37-2.109 5.864 5.864 0 0 0-2.109-1.371c-.752-.292-1.612-.493-2.864-.551-1.257-.057-1.655-.07-4.863-.07zm0 2.18c3.153 0 3.528.01 4.775.068 1.156.052 1.783.245 2.203.408.558.217.956.478 1.375.895.415.418.677.817.894 1.375.163.42.355 1.047.408 2.203.057 1.247.068 1.622.068 4.775 0 3.152-.011 3.528-.068 4.774-.053 1.157-.245 1.783-.408 2.204-.217.558-.479.957-.894 1.375-.419.418-.817.678-1.375.894-.42.163-1.047.356-2.203.409-1.247.058-1.622.069-4.775.069-3.153 0-3.528-.011-4.774-.069-1.157-.053-1.783-.246-2.204-.409-.558-.216-.956-.476-1.375-.894-.418-.418-.678-.817-.895-1.375-.162-.421-.355-1.047-.408-2.204-.058-1.246-.069-1.622-.069-4.774 0-3.153.011-3.528.069-4.775.053-1.156.246-1.783.408-2.203.217-.558.477-.957.895-1.375.419-.417.817-.677 1.375-.895.421-.163 1.047-.356 2.204-.408 1.246-.058 1.622-.068 4.774-.068z" />
                </svg>
              </a>
              <a href="#" aria-label="Youtube" className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-colors text-[13px]">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21.582 6.186a2.618 2.618 0 0 0-1.84-1.84C18.117 3.932 12 3.932 12 3.932s-6.117 0-7.742.414a2.618 2.618 0 0 0-1.84 1.84C2 7.818 2 12 2 12s0 4.182.418 5.814a2.618 2.618 0 0 0 1.84 1.84C5.883 20.068 12 20.068 12 20.068s6.117 0 7.742-.414a2.618 2.618 0 0 0 1.84-1.84c.418-1.632.418-5.814.418-5.814s0-4.182-.418-5.814zM9.98 15.441V8.559l6.308 3.441-6.308 3.441z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Cookie Consent */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end pt-8 border-t border-gray-800 gap-8 relative">
          <div className="max-w-[70%]">
            <h3 className="text-[15px] font-bold text-white mb-2">Consent to Cookies & Data processing</h3>
            <p className="text-[13px] text-[#a0a0a0] leading-relaxed">
              We use our own and third-party cookies to ensure the proper functioning of the web portal and its complements, perform navigation analysis and show multimedia content. If you continue browsing, you accept the use of this technology. For more information please see our Cookies Statement. <Link to="/cookies-policy" className="text-white border-b border-white hover:text-gray-300 transition-colors">Learn More</Link>
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pb-1">
            <button className="px-8 py-[10px] border border-white text-white text-[13px] hover:bg-white hover:text-black transition-colors rounded-sm">
              Customize
            </button>
            <button className="px-8 py-[10px] border border-white text-white text-[13px] hover:bg-white hover:text-black transition-colors rounded-sm">
              Only Essential
            </button>
            <button className="px-8 py-[10px] border border-white text-white text-[13px] hover:bg-white hover:text-black transition-colors rounded-sm">
              Accept All
            </button>
          </div>

          {/* Go to top button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden lg:flex absolute bottom-2 -right-2 md:-right-8 bg-white text-black p-2 hover:bg-gray-200 transition-colors z-50 rounded-sm shadow-md"
          >
            <ArrowUp size={20} strokeWidth={2} />
          </button>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
