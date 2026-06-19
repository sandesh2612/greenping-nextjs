import Link from "next/link";

export default function Hero() {
  return (
    <section 
      className="relative bg-[#f4fcfc] pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <style>{`
        /* --- Import Inter Font --- */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

        /* --- Subtle Dot Pattern Background --- */
        .bg-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(#d5efef 1.5px, transparent 1.5px);
          background-size: 32px 32px;
          z-index: 0;
        }

        /* --- Image Up-Down Bounce --- */
        @keyframes image-bounce {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .hero-image-bounce {
          animation: image-bounce 4s ease-in-out infinite;
        }
        
        /* --- Badge Pulse Animation --- */
        @keyframes badgePulse {
          0%, 100% { transform: scale(1); box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); }
          50% { transform: scale(1.05); box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); }
        }
        .animate-badge-pulse {
          animation: badgePulse 2s infinite;
        }

        /* --- Description Gentle Pop Animation --- */
        @keyframes gentlePop {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-gentle-pop {
          animation: gentlePop 1s ease-out forwards;
          opacity: 0; /* Stays hidden until animation triggers */
        }

        /* --- Meta Badge Zoom In & Zoom Out --- */
        @keyframes badge-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        .meta-badge-zoom {
          animation: badge-zoom 3s ease-in-out infinite;
          animation-delay: 0.3s;
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-image-bounce,
          .animate-badge-pulse,
          .animate-gentle-pop,
          .meta-badge-zoom {
            animation: none;
            opacity: 1;
          }
        }
      `}</style>

      {/* Background Dots */}
      <div className="bg-dots pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text & Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left pt-6 lg:pt-0">
            
            {/* Trusted Badge */}
            <div className="animate-badge-pulse inline-flex items-center gap-2 bg-[linear-gradient(135deg,#E0F2FE,#CCFBF1)] text-[#0f2b3d] rounded-[100px] px-[1.2rem] py-[0.4rem] text-[0.85rem] font-bold mb-[1.2rem] shadow-[0_2px_8px_rgba(0,0,0,0.05)] border border-[#ccfbf1]">
              <i className="fas fa-bolt text-[#0ea5e9]"></i> ✨ Trusted by 15,000+ businesses worldwide
            </div>
            
            {/* Main Title */}
            <h1 className="text-[3.5rem] sm:text-[3.5rem] font-[800] mb-4 tracking-tight leading-[1.1] bg-[linear-gradient(105deg,#0f2b3d_0%,#1e6b5e_50%,#0f2b3d_100%)] bg-[length:200%_auto] bg-clip-text text-transparent py-1">
              GreenPing<span className="text-[28px] sm:text-[20px] align-super text-[#4a5f5f] font-normal inline-block ml-1">®</span>
            </h1>
            
            {/* Subtitle */}
            <div className="text-[28px] sm:text-[36px] lg:text-[30px] font-bold text-[#173b3b] mb-6 leading-[1.2]">
              Ultimate Solution for WhatsApp <br className="hidden lg:block" />
              Marketing
            </div>
            
            {/* Description */}
            <p className="animate-gentle-pop text-[16px] sm:text-[17px] text-[#1e4a6b] mb-10 leading-relaxed max-w-[95%] lg:max-w-[92%]">
              GreenPing is a <strong className="text-[#173b3b] font-bold">Meta-verified</strong> enterprise platform that revolutionizes customer engagement through <strong className="text-[#173b3b] font-bold">Official WhatsApp Cloud API</strong>. Experience AI-powered automation, real-time analytics, and seamless omnichannel communication — all backed by <strong className="text-[#173b3b] font-bold">99.9% uptime SLA</strong> and bank-grade security.
            </p>
            
            {/* Stats */}
            <div className="flex flex-col gap-6 mb-12 leading-[1.5] text-[#1F2937] w-full">
              {/* Row 1 */}
              <div className="flex flex-wrap items-center gap-x-12 gap-y-6">
                <div className="flex items-center gap-3">
                  <span className="text-[38px] sm:text-[32px] font-extrabold text-[#173b3b] tracking-tight leading-none">15K+</span>
                  <span className="text-[14px] font-medium text-[#7a9393] leading-tight">Active Businesses</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[38px] sm:text-[32px] font-extrabold text-[#173b3b] tracking-tight leading-none">99.9%</span>
                  <span className="text-[14px] font-medium text-[#7a9393] leading-tight">Uptime Guarantee</span>
                </div>
              </div>
              {/* Row 2 */}
              <div className="flex items-center gap-3">
                <span className="text-[38px] sm:text-[32px] font-extrabold text-[#173b3b] tracking-tight leading-none">24/7</span>
                <span className="text-[14px] font-medium text-[#7a9393] leading-tight">Priority Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              
              {/* Get Started Free Button */}
              <Link 
                href="/register" 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 py-[0.8rem] px-[1.8rem] rounded-[60px] bg-[linear-gradient(95deg,#0f2b3d_0%,#1e6b5e_100%)] text-white text-[0.95rem] font-[600] no-underline border-none cursor-pointer text-center relative overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_20px_rgba(30,107,94,0.3)]"
              >
                Get Started Free <i className="fas fa-arrow-right"></i>
              </Link>
              
              {/* Watch Demo Button */}
              <Link 
                href="/#features-modern" 
                className="w-full sm:w-auto inline-flex justify-center items-center gap-2 px-[28px] py-[12px] border-[1.5px] border-[#0f2b3d] bg-transparent text-[#0f2b3d] font-[600] rounded-[40px] no-underline text-center cursor-pointer transition-all duration-200 ease-in-out hover:bg-[#0f2b3d] hover:text-white"
              >
                <i className="fas fa-play-circle text-[20px]"></i> Watch Demo
              </Link>
            </div>
          </div>

          {/* Right Column: Image & Floating Badge */}
          <div className="w-full lg:w-1/2 flex justify-center mt-12 lg:mt-0 relative z-10">
            <div className="relative inline-block text-center">
              <img 
                className="hero-image-bounce w-[95%] sm:w-[85%] lg:w-[100%] max-w-[650px] h-auto object-contain drop-shadow-2xl rounded-3xl" 
                src="/assets/hero-home.webp" 
                alt="WhatsApp Marketing Dashboard"
              />
              
              {/* Official Meta Partner Badge */}
              <div className="meta-badge-zoom absolute -bottom-5 left-1/2 transform -translate-x-1/2 z-20 w-max">
                <span className="bg-[#0f2b3d] text-white px-6 py-3 rounded-full text-sm font-semibold inline-flex items-center gap-2 shadow-[0_10px_25px_rgba(15,43,61,0.4)] border border-[#173b3b]">
                  <i className="fab fa-whatsapp text-[#25D366] text-[20px]"></i> Official Meta Partner
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Floating WhatsApp Button */}
     
      
    </section>
  );
}