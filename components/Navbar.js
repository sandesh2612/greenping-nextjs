"use client"; 

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <style>{`
        /* --- Navbar Hover Underline Animation (Center Expanding) --- */
        .nav-link-container {
          position: relative;
          padding-bottom: 6px; /* Space between text and underline */
          cursor: pointer;
          display: inline-block;
        }
        .nav-link-container::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          background-color: #173b3b; /* Dark Teal underline */
          transition: width 0.3s ease-in-out;
        }
        .nav-link-container:hover::after {
          width: 100%;
        }

        /* --- Button Hover Underline Animation --- */
        .btn-animated {
          position: relative;
        }
        .btn-animated::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -6px; /* Button ke thik niche line aayegi */
          left: 50%;
          transform: translateX(-50%);
          background-color: #173b3b; 
          transition: width 0.3s ease-in-out;
        }
        .btn-animated:hover::after {
          width: 100%;
        }

        @media (prefers-reduced-motion: reduce) {
          .nav-link-container::after, .btn-animated::after { transition: none; }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[85px]">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img 
                src="/assets/logo.png"
                alt="GreenPing Logo"
                className="h-[50px] sm:h-[60px] w-auto cursor-pointer object-contain"
              />
            </Link>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden lg:flex items-center space-x-8">
            
            {/* Nav Links */}
            <Link href="/" className="nav-link-container group">
              <div className="flex items-center gap-2 text-[#173b3b] font-bold text-[15px] transform transition-transform duration-300 group-hover:-translate-y-[2px]">
                <i className="fas fa-home text-[#173b3b]"></i> Home
              </div>
            </Link>
            <Link href="/#features-modern" className="nav-link-container group">
              <div className="flex items-center gap-2 text-[#173b3b] font-bold text-[15px] transform transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:text-[#173b3b]">
                <i className="fas fa-rocket text-[#173b3b] transition-colors duration-300 group-hover:text-[#173b3b]"></i> Features
              </div>
            </Link>
            <Link href="/#pricing-section" className="nav-link-container group">
              <div className="flex items-center gap-2 text-[#173b3b] font-bold text-[15px] transform transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:text-[#173b3b]">
                <i className="fas fa-tag text-[#173b3b] transition-colors duration-300 group-hover:text-[#173b3b]"></i> Pricing
              </div>
            </Link>
            <Link href="/#contact-section" className="nav-link-container group">
              <div className="flex items-center gap-2 text-[#173b3b] font-bold text-[15px] transform transition-transform duration-300 group-hover:-translate-y-[2px] group-hover:text-[#173b3b]">
                <i className="fas fa-headset text-[#173b3b] transition-colors duration-300 group-hover:text-[#173b3b]"></i> Contact
              </div>
            </Link>
            
            {/* Action Buttons with Animation */}
            <div className="flex items-center space-x-5 pl-7 ml-2 border-l border-gray-200">
              
              {/* Updated Register Button with External Link */}
              <Link
                href="/register"
                className="btn-animated inline-flex items-center justify-center gap-2 border-[1.5px] border-[#0f2b3d] !text-[#0f2b3d] bg-transparent rounded-[40px] !py-[0.5rem] !px-[1.5rem] transition-all duration-300 font-bold hover:bg-slate-50 hover:-translate-y-[2px] text-[14px]"
              >
                <i className="fas fa-user-plus !text-[#0f2b3d]"></i> Register
              </Link>
              
              {/* Updated Login Button with External Link */}
              <Link
                href="/login"
                className="btn-animated inline-flex items-center justify-center gap-2 bg-[linear-gradient(105deg,#0f2b3d_0%,#1e6b5e_100%)] !text-white !py-[0.5rem] !px-[1.5rem] overflow-hidden rounded-[40px] transition-all duration-300 font-bold hover:opacity-90 hover:-translate-y-[2px] text-[14px] shadow-sm"
              >
                <i className="fas fa-sign-in-alt !text-white"></i> Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-[#173b3b] hover:text-[#0f766e] focus:outline-none p-2"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0 z-40">
          <div className="px-4 pt-2 pb-6 flex flex-col gap-1">
            <Link href="/" onClick={toggleMenu} className="block px-3 py-3.5 text-[#173b3b] font-bold border-b border-gray-50 hover:bg-gray-50">
              <i className="fas fa-home w-8 text-center text-[#173b3b]"></i> Home
            </Link>
            <Link href="/#features-modern" onClick={toggleMenu} className="block px-3 py-3.5 text-[#4a5f5f] font-bold border-b border-gray-50 hover:bg-gray-50 hover:text-[#173b3b]">
              <i className="fas fa-rocket w-8 text-center"></i> Features
            </Link>
            <Link href="/#pricing-section" onClick={toggleMenu} className="block px-3 py-3.5 text-[#4a5f5f] font-semibold border-b border-gray-50 hover:bg-gray-50 hover:text-[#173b3b]">
              <i className="fas fa-tag w-8 text-center"></i> Pricing
            </Link>
            <Link href="/#contact-section" onClick={toggleMenu} className="block px-3 py-3.5 text-[#4a5f5f] font-semibold border-b border-gray-50 hover:bg-gray-50 hover:text-[#173b3b]">
              <i className="fas fa-headset w-8 text-center"></i> Contact
            </Link>
            
            {/* Mobile Action Buttons */}
            <div className="flex flex-col gap-3 mt-5 px-3">
              
              {/* Updated Mobile Register Button with External Link */}
              <Link
                href="https://greenping.in/auth/register/vendor"
                onClick={toggleMenu}
                className="flex items-center justify-center gap-2 w-full text-center border-[1.5px] border-[#0f2b3d] !text-[#0f2b3d] bg-transparent rounded-[40px] !py-[0.5rem] !px-[1.5rem] transition-all duration-300 font-bold hover:bg-slate-50"
              >
                <i className="fas fa-user-plus !text-[#0f2b3d]"></i> Register
              </Link>
              
              {/* Updated Mobile Login Button with External Link */}
              <Link
                href="https://greenping.in/auth/login"
                onClick={toggleMenu}
                className="flex items-center justify-center gap-2 w-full text-center bg-[linear-gradient(105deg,#0f2b3d_0%,#1e6b5e_100%)] !text-white !py-[0.5rem] !px-[1.5rem] overflow-hidden rounded-[40px] transition-all duration-300 font-bold hover:opacity-90 shadow-sm"
              >
                <i className="fas fa-sign-in-alt !text-white"></i> Login
              </Link>
            </div>
          </div> 
        </div>
      )}
    </nav>
  );
}