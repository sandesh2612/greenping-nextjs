import React from "react";

export default function About() {
  return (
    <section id="section-about" className="py-20 bg-[#fafcff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main About Card */}
        <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
          
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Column: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start">
              
              {/* Animated Gradient Brand Name */}
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">
                  GreenPing
                </span>
                <span className="text-2xl align-super text-gray-400 font-medium ml-1">™</span>
              </h1>
              
              {/* Subtitle with Rotating Meta Badge */}
              <h2 className="text-lg md:text-xl font-medium text-gray-500 mt-4 flex flex-wrap justify-center lg:justify-start items-center gap-3">
                is based on
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-bold border border-teal-100 shadow-sm transition-transform hover:scale-105 cursor-default">
                  <i className="fas fa-check-circle text-teal-500"></i> Meta Verified
                </span>
              </h2>

              {/* Main Heading */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#0f2b3d] mt-6 mb-4 flex items-center justify-center lg:justify-start gap-2">
                Official WhatsApp Cloud API 
                <i className="fab fa-whatsapp text-[#25D366] text-3xl ml-1"></i>
              </h3>
              
              {/* Description Paragraph */}
              <div className="text-gray-500 leading-relaxed text-[16px] max-w-xl">
                <p>
                  <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-green-500">GreenPing</span> integrates with the{' '}
                  <span className="font-bold text-teal-600">Official WhatsApp Cloud API</span>, providing a streamlined solution for businesses. 
                  With <strong className="text-[#0f2b3d]">real-time messaging</strong>, <strong className="text-[#0f2b3d]">automated responses</strong>, and <strong className="text-[#0f2b3d]">easy management</strong>. 
                  Secure conversations worldwide — all within one unified interface.
                </p>
                
                {/* AI & Uptime Stats Pill */}
                <div className="mt-8 inline-flex flex-wrap justify-center lg:justify-start items-center gap-4 bg-[#eef2ff] px-5 py-2.5 rounded-full text-sm font-medium text-[#0f2b3d]">
                  <span className="flex items-center gap-2">
                    <i className="fas fa-chart-line text-teal-500"></i> AI-powered analytics ⚡
                  </span>
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-indigo-200"></div>
                  <span className="flex items-center gap-2">
                    <i className="fas fa-bolt text-teal-500"></i> 99.9% uptime SLA
                  </span>
                </div>
              </div>

              {/* Bottom Extra Premium Content Line */}
              <div className="mt-8 pt-6 border-t border-gray-100 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 text-sm text-[#5b6e8c] font-medium w-full">
                <span className="flex items-center gap-2">
                  <i className="fas fa-cloud-upload-alt text-gray-400"></i> Enterprise-grade reliability
                </span>
                <span className="hidden sm:block text-gray-300">|</span>
                <span className="flex items-center gap-2">
                  <i className="fas fa-shield-alt text-gray-400"></i> End-to-end encryption
                </span>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="w-full lg:w-1/2 flex justify-center relative mt-8 lg:mt-0">
              {/* Subtle background glow/shape behind the image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-green-50 rounded-[2rem] transform rotate-3 scale-105 -z-10"></div>
              
              <img 
                className="w-full max-w-md lg:max-w-full object-cover rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.08)] border-4 border-white" 
                src="https://greenping.in/imgs/outer-home/about.webp" 
                alt="WhatsApp Marketing Dashboard"
              />
            </div>
            
          </div>

          {/* Extra decorative element with continuous animation */}
          <div className="mt-12 pt-6 flex justify-center items-center opacity-70">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-gray-500">
              {/* Custom Tailwind animation for exactly 3 seconds linear infinite */}
              <i className="fas fa-sync-alt text-teal-500 animate-[spin_3s_linear_infinite]"></i>
              Always synced · Real-time · Global infrastructure
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}