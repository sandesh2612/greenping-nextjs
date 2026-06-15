import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-white dark:bg-gray-950 py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Left Column: Text & Content */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-sm font-semibold mb-6 shadow-sm dark:bg-green-900/30 dark:border-green-800 dark:text-green-400">
              <i className="fas fa-bolt text-yellow-500"></i> ✨ Trusted by 15,000+ businesses worldwide
            </div>
            
            {/* Main Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
              GreenPing<span className="text-2xl sm:text-3xl align-super">®</span>
            </h1>
            
            {/* Subtitle */}
            <div className="text-xl sm:text-2xl font-bold text-green-600 dark:text-green-500 mb-6">
              Ultimate Solution for WhatsApp Marketing
            </div>
            
            {/* Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-2xl">
              GreenPing is a <strong className="text-gray-900 dark:text-white">Meta-verified</strong> enterprise platform that revolutionizes customer engagement through <strong className="text-gray-900 dark:text-white">Official WhatsApp Cloud API</strong>. Experience AI-powered automation, real-time analytics, and seamless omnichannel communication — all backed by <strong className="text-gray-900 dark:text-white">99.9% uptime SLA</strong> and bank-grade security.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-10 mb-10">
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-gray-900 dark:text-white">15K+</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Active Businesses</span>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-gray-900 dark:text-white">99.9%</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Uptime Guarantee</span>
              </div>
              <div className="w-px h-10 bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-3xl font-extrabold text-gray-900 dark:text-white">24/7</span>
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Priority Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link 
                href="/register" 
                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-green-600/30"
              >
                Get Started Free <i className="fas fa-arrow-right"></i>
              </Link>
              <Link 
                href="/#features-modern" 
                className="inline-flex justify-center items-center gap-2 px-8 py-3.5 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-lg hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <i className="fas fa-play-circle text-lg"></i> Watch Demo
              </Link>
            </div>
          </div>

          {/* Right Column: Image & Floating Badge */}
          <div className="w-full lg:w-1/2 flex flex-col items-center mt-12 lg:mt-0 relative">
            <img 
              className="w-[90%] sm:w-[80%] lg:w-[90%] rounded-2xl shadow-2xl object-cover border border-gray-100 dark:border-gray-800" 
              src="https://greenping.in/imgs/outer-home/hero-home.webp" 
              alt="WhatsApp Marketing Dashboard"
            />
            
            {/* Floating badge over image */}
            <div className="relative -mt-6 sm:-mt-8 z-10 text-center">
              <span className="bg-[#0f2b3d] text-white px-5 py-2 sm:px-6 sm:py-2.5 rounded-full text-xs sm:text-sm font-medium inline-flex items-center gap-2 shadow-xl border border-gray-700">
                <i className="fab fa-whatsapp text-green-400 text-lg"></i> Official Meta Partner
              </span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}