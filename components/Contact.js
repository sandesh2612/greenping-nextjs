import React from "react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact-section" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 bg-white lg:bg-transparent lg:shadow-none shadow-[0_8px_30px_rgba(0,0,0,0.04)] rounded-3xl lg:rounded-none overflow-hidden lg:overflow-visible">
          
          {/* LEFT SIDE: Info card with gradient */}
          <div className="bg-gradient-to-br from-[#0f2b3d] to-teal-900 text-white p-8 sm:p-12 lg:rounded-l-3xl lg:rounded-r-none relative overflow-hidden shadow-2xl z-10 lg:scale-[1.02] transform transition-transform">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white opacity-5 blur-3xl"></div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-teal-100 text-sm font-semibold mb-8 shadow-sm">
              <i className="fas fa-headset"></i> 24/7 Support
            </div>
            
            {/* Heading & Description */}
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight tracking-tight">
              Let’s talk<br />We’re here to help
            </h2>
            <p className="text-teal-50/80 mb-8 leading-relaxed text-[15px]">
              We're here to help and answer any question you might have. We look forward to hearing from you!
            </p>
            
            <hr className="border-white/10 mb-8" />

            {/* Contact Details List */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-teal-300 text-lg">
                  <i className="fas fa-envelope"></i>
                </div>
                <div>
                  <strong className="block text-white mb-1">Email us</strong>
                  <a href="mailto:info@greenping.in" className="text-teal-100 hover:text-white transition-colors text-sm">
                    info@greenping.in
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-teal-300 text-lg">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div>
                  <strong className="block text-white mb-1">WhatsApp Support</strong>
                  <a href="https://wa.me/918109540259" target="_blank" rel="noopener noreferrer" className="text-teal-100 hover:text-white transition-colors text-sm">
                    +91 81095 40259
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-teal-300 text-lg">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                  <strong className="block text-white mb-1">Call Us</strong>
                  <a href="tel:+918109540259" className="text-teal-100 hover:text-white transition-colors text-sm">
                    +91 81095 40259
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/10 text-teal-300 text-lg">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div>
                  <strong className="block text-white mb-1">Office</strong>
                  <p className="text-teal-100 text-sm leading-relaxed pr-4">
                    GreenPing | Shop No 15 Sahu Complex Mangal Bhawan Mathpurena, Raipur - 492001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Contact Form Modern */}
          <div className="bg-[#fafcff] p-8 sm:p-12 lg:rounded-r-3xl border-y border-r border-gray-100 lg:shadow-xl relative z-0 flex flex-col justify-center">
            
            <div className="mb-8">
              <h3 className="text-3xl font-extrabold text-[#0f2b3d] mb-2">Contact us</h3>
              <p className="text-gray-500 font-medium">Send a message and we’ll reply within 24h</p>
            </div>

            <form 
              className="space-y-5" 
              id="lwContactMailForm" 
              method="post" 
              action="https://greenping.in/contact-process"
            >
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-[#0f2b3d] mb-1.5">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <i className="fa fa-user"></i>
                  </div>
                  <input 
                    type="text" 
                    name="full_name" 
                    placeholder="John Carter" 
                    required 
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Email address */}
              <div>
                <label className="block text-sm font-bold text-[#0f2b3d] mb-1.5">Email address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <i className="fa fa-at"></i>
                  </div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="hello@example.com" 
                    required 
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-bold text-[#0f2b3d] mb-1.5">Subject</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                    <i className="fa fa-book"></i>
                  </div>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder="How can we help?" 
                    required 
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all shadow-sm"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-bold text-[#0f2b3d] mb-1.5">Message</label>
                <div className="relative">
                  <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-gray-400">
                    <i className="fa fa-pen-alt"></i>
                  </div>
                  <textarea 
                    rows="4" 
                    name="message" 
                    placeholder="Write your message here..." 
                    required 
                    className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all shadow-sm resize-y"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="w-full mt-2 bg-teal-500 hover:bg-teal-600 text-white font-bold py-3.5 px-6 rounded-xl transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-2"
              >
                <span>Submit</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </form>

            <hr className="border-gray-200 my-6" />
            
            {/* Secure Footer text */}
            <div className="text-sm text-center text-gray-400 font-medium flex items-center justify-center gap-2">
              <i className="fas fa-lock text-gray-300"></i> Your information is safe with us
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}