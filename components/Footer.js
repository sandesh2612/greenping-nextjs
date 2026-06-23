"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image"; 

export default function Footer() {
  // Current year for copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f2b3d] text-gray-300 pt-16 pb-8 overflow-hidden relative">
      {/* Background ambient glow (optional premium effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-2xl h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-col-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2 lg:col-span-2 flex flex-col items-start animate-[slideUpFade_0.5s_ease-out_0.05s_both]">
            <div className="mb-6">
              <Link href="/">
                <img
                  src="https://greenping.in/media-storage/favicon/69ff2f09af87d---67bf00964c924-whatsapp-image-2025-02-06-at-191223-b27d045d-removebg-preview3-1.png"
                  alt="GreenPing"
                  className="h-10 w-auto"
                />
              </Link>
            </div>
            <p className="text-sm lg:w-[65%] text-gray-400 leading-relaxed mb-6">
              Empowering businesses with intelligent WhatsApp marketing
              solutions. Secure, scalable, and built for growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/p/GreenPing-61572933209802/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-teal-500 text-gray-300 hover:text-white transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/green___ping/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-teal-500 text-gray-300 hover:text-white transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/918109540259"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-teal-500 text-gray-300 hover:text-white transition-all duration-300"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.youtube.com/@greenping-x7z"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-teal-500 text-gray-300 hover:text-white transition-all duration-300"
              >
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          {/* Platform Links */}

          <div className="grid grid-cols-3 col-span-2">
            <div className="animate-[slideUpFade_0.5s_ease-out_0.13s_both]">
              <h4 className="text-white font-bold mb-6 tracking-wide">
                Platform
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#features-modern"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#pricing-section"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Documentation"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    API Docs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div className="animate-[slideUpFade_0.5s_ease-out_0.13s_both]">
              <h4 className="text-white font-bold mb-6 tracking-wide">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/#section-about"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/#contact-section"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/help"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    Help
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal inks */}
            <div className="animate-[slideUpFade_0.5s_ease-out_0.17s_both]">
              <h4 className="text-white font-bold mb-6 tracking-wide">
                Legal
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacyPolicy"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/termsAndConditions"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    Terms And Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/dataDeletion"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    Data Deletion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/refundPolicy"
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <i className="fas fa-chevron-right text-[10px] text-teal-500/0 group-hover:text-teal-500 transition-all -ml-3 group-hover:ml-0"></i>{" "}
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-1 col-span-2 md:col-span-1 animate-[slideUpFade_0.5s_ease-out_0.21s_both]">
            <h4 className="text-white font-bold mb-2 tracking-wide">
              Stay connected
            </h4>
            <p className="text-xs text-gray-400 mb-4">
              Get the latest updates and offers.
            </p>

            <form
              className="flex w-full mb-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-teal-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-r-lg transition-colors flex items-center justify-center"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>

            <div className="inline-block">
              <span className="text-[11px] font-medium text-gray-400 bg-white/5 px-3 py-1.5 rounded-full flex items-center gap-1.5 border border-white/5">
                <i className="fas fa-shield-alt text-teal-500"></i> Secure &
                encrypted
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-400 text-center md:text-left">
            © <strong className="text-white">GreenPing</strong> {currentYear}.
            All Rights Reserved.
            <span className="block sm:inline sm:ml-2 mt-1 sm:mt-0">
              <span className="animate-pulse inline-block mx-1">❤️</span>{" "}
              Crafted with innovation
            </span>
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="/#contact-section"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Support
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>

        {/* Floating Premium Badge */}
        <div className="text-center mt-6 text-xs text-gray-500">
          <i className="fas fa-bolt text-teal-500 mr-1"></i> Powered by
          GreenPing WhatsApp API
        </div>
      </div>

      {/* Tailwind config for custom animation - place this in your tailwind.config.js if you want the slide up effect to work perfectly */}
      {/* theme: {
          extend: {
            keyframes: {
              slideUpFade: {
                '0%': { opacity: 0, transform: 'translateY(20px)' },
                '100%': { opacity: 1, transform: 'translateY(0)' },
              }
            }
          }
        }
      */}
    </footer>
  );
}
