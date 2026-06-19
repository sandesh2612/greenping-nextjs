import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section id="section-about" className="py-10 bg-[#fafcff]">
      <style>{`
        /* Flowing Text Gradient Animation */
        @keyframes textGradientFlow {
          0% { background-position: 0% center; }
          50% { background-position: 100% center; }
          100% { background-position: 0% center; }
        }

        .animate-text-gradient-flow {
          background: linear-gradient(135deg, #0f2b3d, #2dd4bf, #0f2b3d, #38bdf8);
          background-size: 300% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: textGradientFlow 5s linear infinite;
          display: inline-block;
        }

        /* Image Bounce Animation */
        @keyframes float-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
        }
        .about-image-bounce {
          animation: float-bounce 3.8s ease-in-out infinite;
          transition: box-shadow 0.3s ease, transform 0.3s ease;
        }
        .about-image-bounce:hover {
          box-shadow: 0 28px 60px rgba(20, 184, 166, 0.25), 0 12px 24px rgba(0, 0, 0, 0.1);
          animation-play-state: paused;
          transform: translateY(-6px) scale(1.02);
        }

        /* WhatsApp Icon Pulse + Wiggle */
        @keyframes wa-pulse {
          0%, 100% { transform: scale(1) rotate(0deg); filter: drop-shadow(0 0 0px #25D366); }
          25% { transform: scale(1.18) rotate(-8deg); filter: drop-shadow(0 0 8px #25D366cc); }
          50% { transform: scale(1.22) rotate(0deg); filter: drop-shadow(0 0 14px #25D366); }
          75% { transform: scale(1.18) rotate(8deg); filter: drop-shadow(0 0 8px #25D366cc); }
        }

        /* Ripple rings radiating outward */
        @keyframes ripple-out {
          0% { transform: scale(0.7); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }

        .wa-pulse {
          animation: wa-pulse 2.4s ease-in-out infinite;
          cursor: default;
        }
        .wa-ripple {
          position: absolute;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 2px solid #25D36655;
          animation: ripple-out 2.4s ease-out infinite;
          pointer-events: none;
        }
        .wa-ripple:nth-child(2) { animation-delay: 0.8s; }
        .wa-ripple:nth-child(3) { animation-delay: 1.6s; }

        @media (prefers-reduced-motion: reduce) {
          .animate-text-gradient-flow { animation: none; background-position: 0% center; }
          .about-image-bounce { animation: none; }
          .about-image-bounce:hover { transform: none; }
          .wa-pulse { animation: none; }
          .wa-ripple { animation: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main About Card */}
        <div className="bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">

          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

            {/* Left Column: Text Content */}
            <div className="w-full lg:w-1/2 flex flex-col text-center lg:text-left items-center lg:items-start">

              {/* Animated Gradient Brand Name */}
              <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight">
                <span className="animate-text-gradient-flow">
                  GreenPing
                </span>
                <span className="text-sm align-super text-teal-400 font-medium ml-1">TM</span>
              </h1>

              {/* Subtitle with Meta Badge */}
              <h2 className="text-lg md:text-xl font-medium text-teal-600 mt-4 flex flex-wrap justify-center lg:justify-start items-center gap-3">
                is based on
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 bg-teal-50 text-teal-700 rounded-full text-sm font-bold border border-teal-100 shadow-sm transition-transform hover:scale-105 cursor-default">
                  <i className="fas fa-check-circle text-teal-500"></i> Meta Verified
                </span>
              </h2>

              {/* Main Heading with Animated WhatsApp Icon */}
              <h3 className="text-2xl md:text-xl font-semibold text-teal-600 mt-6 mb-4 flex items-center justify-center lg:justify-start gap-3 flex-wrap">
                Official WhatsApp Cloud API
                {/* WhatsApp icon with ripple animation */}
                <span className="relative inline-flex items-center justify-center w-10 h-10">
                  <span className="wa-ripple"></span>
                  <span className="wa-ripple"></span>
                  <span className="wa-ripple"></span>
                  <i className="fab fa-whatsapp text-[#25D366] text-xl "></i>
                </span>
              </h3>

              {/* Description Paragraph */}
              <div className="text-gray-500 leading-relaxed text-[16px] max-w-xl">
                <p>
                  <strong className="animate-text-gradient-flow font-bold">GreenPing</strong> integrates with the{' '}
                  <span className="font-bold text-teal-600">Official WhatsApp Cloud API</span>, providing a streamlined solution for businesses.
                  With <strong className="text-[#0f2b3d]">real-time messaging</strong>, <strong className="text-[#0f2b3d]">automated responses</strong>, and <strong className="text-[#0f2b3d]">easy management</strong>.
                  Secure conversations worldwide — all within one unified interface.
                </p>

                {/* AI & Uptime Stats Pill */}
                <div className="mt-8 inline-flex flex-wrap justify-center lg:justify-start items-center gap-x-2.5 gap-y-2 bg-[#eef2ff] px-5 py-2.5 rounded-full text-sm font-medium text-[#0f2b3d]">
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

              <Image
                src="/assets/about.webp"
                alt="WhatsApp Marketing Dashboard"
                width={700}
                height={500}
                priority
                className="about-image-bounce w-full h-auto rounded-2xl object-cover border-4 border-white shadow-[0_12px_40px_rgba(0,0,0,0.08)]"
              />
            </div>

          </div>

          {/* Extra decorative element */}
          <div className="mt-12 pt-6 flex justify-center items-center opacity-70">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-black-500">
              <i className="fas fa-sync-alt text-teal-500 animate-[spin_3s_linear_infinite]"></i>
              Always synced · Real-time · Global infrastructure
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}