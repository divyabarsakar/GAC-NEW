import React from 'react';
import { Apple, Smartphone } from 'lucide-react';

const AppSection = () => {
  return (
    <section className="bg-white py-24 md:py-32 w-full overflow-hidden snap-start relative">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Side: Content */}
        <div className="flex flex-col space-y-8 order-2 lg:order-1">
          <div>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-gray-900 mb-6 leading-tight">
              Control your journey<br />from your pocket.
            </h2>
            <p className="text-gray-500 text-base md:text-lg max-w-xl leading-relaxed tracking-wide">
              Unlock a world of intelligent features with the GAC Switzerland App. Remote climate control, charging status, smart key access, and scheduling—all integrated seamlessly into your lifestyle.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-gray-100">
            {/* QR Code */}
            <div className="bg-gray-50 p-4 border border-gray-200 rounded-xl shadow-sm">
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://gacgroup.com" 
                alt="GAC App QR Code" 
                className="w-24 h-24 object-contain"
              />
              <p className="text-[10px] text-center text-gray-500 uppercase tracking-widest mt-3 font-semibold">
                Scan to Install
              </p>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-col gap-4">
              <button className="flex items-center gap-4 bg-black text-white px-6 py-3.5 rounded-full hover:bg-gray-800 transition-colors group shadow-md hover:shadow-lg w-48">
                <Apple size={24} className="group-hover:-translate-y-0.5 transition-transform" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-gray-300">Download on the</div>
                  <div className="text-sm font-semibold tracking-wide">App Store</div>
                </div>
              </button>
              <button className="flex items-center gap-4 bg-gray-100 text-gray-900 border border-gray-200 px-6 py-3.5 rounded-full hover:bg-gray-200 transition-colors group shadow-sm hover:shadow-md w-48">
                <Smartphone size={24} className="group-hover:-translate-y-0.5 transition-transform" />
                <div className="text-left">
                  <div className="text-[9px] uppercase tracking-wider text-gray-500">Get it on</div>
                  <div className="text-sm font-semibold tracking-wide">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side: Phone Mockups */}
        <div className="relative h-[500px] md:h-[600px] flex justify-center items-center order-1 lg:order-2">
           <div className="absolute inset-0 bg-blue-50/50 rounded-full blur-3xl transform scale-75 opacity-70"></div>
           
           {/* Phone 1 */}
           <div className="relative z-20 w-[240px] md:w-[280px] h-[500px] md:h-[580px] bg-black rounded-[3rem] border-[8px] border-gray-900 overflow-hidden shadow-2xl transform -rotate-6 translate-y-4 hover:rotate-0 transition-transform duration-700">
              <div className="absolute top-0 inset-x-0 h-6 bg-black z-30 flex justify-center rounded-b-xl w-32 mx-auto"></div>
              {/* Fake UI Inside Phone */}
              <div className="w-full h-full bg-gray-50 flex flex-col pt-12">
                 <div className="px-6 space-y-6">
                    <div className="w-full h-40 bg-white shadow-sm rounded-xl flex items-center justify-center p-4">
                       <img src="https://br-www-resouce-cdn.gacgroup.com/static/Global/tenant/operation/ncar/page/202512/1766476019018-AIONV-红.webp" alt="Aion V" className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div>
                       <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-900">AION V Linked</h4>
                       <p className="text-[10px] text-gray-500 mt-1">Status: Charging (80%)</p>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                       <div className="h-16 bg-blue-50 rounded-xl flex items-center justify-center text-xs font-medium text-blue-700 border border-blue-100">Climate</div>
                       <div className="h-16 bg-gray-100 rounded-xl flex items-center justify-center text-xs font-medium text-gray-700 border border-gray-200">Unlock</div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Phone 2 */}
           <div className="absolute z-10 w-[220px] md:w-[260px] h-[460px] md:h-[540px] bg-white rounded-[2.5rem] mt-24 ml-48 border-[6px] border-gray-200 overflow-hidden shadow-xl transform rotate-6 translate-y-8 hover:translate-y-4 transition-transform duration-700 hidden md:block">
              {/* Fake Dashboard View */}
              <div className="w-full h-full bg-gradient-to-b from-blue-900 to-black p-6 flex flex-col justify-end">
                  <h4 className="text-white font-semibold mb-2 shadow-sm">Journey Logs</h4>
                  <div className="w-full h-24 bg-white/10 backdrop-blur border border-white/20 rounded-xl mb-3"></div>
                  <div className="w-full h-24 bg-white/10 backdrop-blur border border-white/20 rounded-xl"></div>
              </div>
           </div>
        </div>

      </div>
    </section>
  );
};

export default AppSection;
