"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="pb-[2px] shadow-sm bg-[linear-gradient(90deg,#0f2b3d,#2dd4bf)] sticky top-0 z-50">

    <nav className="bg-white  ">
      <style>{`
        /* Nav link underline animation */
        .nav-link-container {
          position: relative;
          padding-bottom: 6px;
          cursor: pointer;
          display: inline-block;
        }
        .nav-link-container::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(90deg, #0f2b3d, #2dd4bf);
          transition: width 0.3s ease-in-out;
        }
        .nav-link-container:hover::after {
          width: 70%;
        }

        

        /* Logo drop-shadow filter */
        .brand-logo-img {
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.05));
          transition: all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .brand-logo-img:hover {
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.12));
          transform: scale(1.04);
        }

        /* Login button shine effect */
        .login-btn::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 60%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.45s ease;
        }
        .login-btn:hover::before {
          left: 140%;
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-link-container::after,
          .btn-animated::after { transition: none; }
          .brand-logo-img { transition: none; }
          .login-btn::before { display: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[85px]">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                src="/assets/logo.png"
                alt="GreenPing Logo"
                className="brand-logo-img h-[50px] sm:h-[60px] w-auto cursor-pointer object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">

            {/* Nav Links — font-weight:500, font-size:0.95rem, color:#1F2937, px-4 py-2, rounded-[40px] */}
            <Link href="/" className="nav-link-container group">
              <div className="flex items-center gap-2 text-[#1F2937] font-medium text-[0.95rem] px-4 py-2 rounded-[40px] transition-all duration-300 group-hover:-translate-y-[2px]">
                <i className="fas fa-home"></i> Home
              </div>
            </Link>

            <Link href="/#features-modern" className="nav-link-container group">
              <div className="flex items-center gap-2 text-[#1F2937] font-medium text-[0.95rem] px-4 py-2 rounded-[40px] transition-all duration-300 group-hover:-translate-y-[2px]">
                <i className="fas fa-rocket"></i> Features
              </div>
            </Link>

            <Link href="/#pricing-section" className="nav-link-container group">
              <div className="flex items-center gap-2 text-[#1F2937] font-medium text-[0.95rem] px-4 py-2 rounded-[40px] transition-all duration-300 group-hover:-translate-y-[2px]">
                <i className="fas fa-tag"></i> Pricing
              </div>
            </Link>

            <Link href="/#contact-section" className="nav-link-container group">
              <div className="flex items-center gap-2 text-[#1F2937] font-medium text-[0.95rem] px-4 py-2 rounded-[40px] transition-all duration-300 group-hover:-translate-y-[2px]">
                <i className="fas fa-headset"></i> Contact
              </div>
            </Link>

            {/* Action Buttons */}
            <div className="flex items-center space-x-5 pl-7 ml-2 border-l border-gray-200">

              {/* Register — border:1.5px #0f2b3d, color:#0f2b3d, bg:transparent, rounded-[40px], py-2 px-6 */}
              <Link
                href="/register"
                className="btn-animated inline-flex items-center justify-center gap-2
                           border-[1.5px] border-[#0f2b3d] text-[#0f2b3d] bg-transparent
                           rounded-[40px] py-2 px-6
                           font-semibold text-[14px]
                           transition-all duration-300
                           hover:bg-slate-50 hover:-translate-y-[2px]"
              >
                <i className="fas fa-user-plus"></i> Register
              </Link>

              {/* Login — gradient bg, white text, rounded-[40px], py-2 px-6, relative overflow-hidden */}
              <Link
                href="/login"
                className="login-btn btn-animated inline-flex items-center justify-center gap-2
                           bg-[linear-gradient(105deg,#0f2b3d_0%,#1e6b5e_100%)] text-white
                           rounded-[40px] py-2 px-6
                           relative overflow-hidden
                           font-semibold text-[14px]
                           transition-all duration-300
                           hover:opacity-90 hover:-translate-y-[2px]
                           shadow-sm"
              >
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-[#173b3b] hover:text-[#0f766e] focus:outline-none p-2"
            >
              <i className={`fas ${isOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 z-40">
          <div className="px-4 pt-2 pb-6 flex flex-col gap-1">

            {/* Mobile nav links — font-medium text-[0.95rem] text-[#1F2937] */}
            <Link href="/" onClick={toggleMenu}
              className="flex items-center gap-3 px-3 py-3.5 text-[#1F2937] font-medium text-[0.95rem] border-b border-gray-50 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <i className="fas fa-home w-5 text-center text-[#173b3b]"></i> Home
            </Link>
            <Link href="/#features-modern" onClick={toggleMenu}
              className="flex items-center gap-3 px-3 py-3.5 text-[#1F2937] font-medium text-[0.95rem] border-b border-gray-50 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <i className="fas fa-rocket w-5 text-center"></i> Features
            </Link>
            <Link href="/#pricing-section" onClick={toggleMenu}
              className="flex items-center gap-3 px-3 py-3.5 text-[#1F2937] font-medium text-[0.95rem] border-b border-gray-50 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <i className="fas fa-tag w-5 text-center"></i> Pricing
            </Link>
            <Link href="/#contact-section" onClick={toggleMenu}
              className="flex items-center gap-3 px-3 py-3.5 text-[#1F2937] font-medium text-[0.95rem] border-b border-gray-50 rounded-lg hover:bg-gray-50 transition-colors duration-200">
              <i className="fas fa-headset w-5 text-center"></i> Contact
            </Link>

            {/* Mobile Buttons */}
            <div className="flex flex-col gap-3 mt-5 px-3">
              <Link
                href="/register"
                onClick={toggleMenu}
                className="flex items-center justify-center gap-2 w-full
                           border-[1.5px] border-[#0f2b3d] text-[#0f2b3d] bg-transparent
                           rounded-[40px] py-2 px-6
                           font-semibold text-[14px]
                           transition-all duration-300 hover:bg-slate-50"
              >
                <i className="fas fa-user-plus"></i> Register
              </Link>
              <Link
                href="/login"
                onClick={toggleMenu}
                className="login-btn flex items-center justify-center gap-2 w-full
                           bg-[linear-gradient(105deg,#0f2b3d_0%,#1e6b5e_100%)] text-white
                           rounded-[40px] py-2 px-6
                           relative overflow-hidden
                           font-semibold text-[14px]
                           transition-all duration-300 hover:opacity-90 shadow-sm"
              >
                <i className="fas fa-sign-in-alt"></i> Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
}