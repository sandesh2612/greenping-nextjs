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
    <nav className="bg-white shadow-md dark:bg-gray-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              {/* Note: Standard img is used here for external URL. If you use next/image, you need to configure next.config.js */}
              <img 
                src="/assets/logo.png"
                alt="GreenPing Logo"
                className="h-[55px] w-auto cursor-pointer"
              />
            </Link>
          </div>

          {/* Desktop Menu (Hidden on mobile) */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 font-medium transition-colors">
              <i className="fas fa-home mr-1"></i> Home
            </Link>
            <Link href="/#features-modern" className="text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 font-medium transition-colors">
              <i className="fas fa-rocket mr-1"></i> Features
            </Link>
            <Link href="/#pricing-section" className="text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 font-medium transition-colors">
              <i className="fas fa-tag mr-1"></i> Pricing
            </Link>
            <Link href="/#contact-section" className="text-gray-700 hover:text-green-600 dark:text-gray-300 dark:hover:text-green-400 font-medium transition-colors">
              <i className="fas fa-headset mr-1"></i> Contact
            </Link>
            
            {/* Buttons */}
            <div className="flex items-center space-x-4 ml-4 border-l pl-4 border-gray-200 dark:border-gray-700">
              <Link
                href="/register"
                className="border-2 border-black-400 text-black-400 px-4 py-2 rounded-full font-medium  transition-all"
              >
                <i className="fas fa-user-plus mr-1"></i> Register
              </Link>
              <Link
                href="/login"
                className="bg-gradient-to-r from-[#0f2b3d] to-[#2dd4bf] text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition-all shadow-md"
              >
                <i className="fas fa-sign-in-alt mr-1"></i> Login
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 focus:outline-none p-2"
            >
              <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
          <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col gap-3">
            {/* FIX: Changed href="#" to correct paths */}
            <Link href="/" onClick={toggleMenu} className="block text-gray-700 hover:text-green-600 dark:text-gray-300 font-medium py-2">
              <i className="fas fa-home w-6"></i> Home
            </Link>
            <Link href="/#features-modern" onClick={toggleMenu} className="block text-gray-700 hover:text-green-600 dark:text-gray-300 font-medium py-2">
              <i className="fas fa-rocket w-6"></i> Features
            </Link>
            <Link href="/#pricing-section" onClick={toggleMenu} className="block text-gray-700 hover:text-green-600 dark:text-gray-300 font-medium py-2">
              <i className="fas fa-tag w-6"></i> Pricing
            </Link>
            <Link href="/#contact-section" onClick={toggleMenu} className="block text-gray-700 hover:text-green-600 dark:text-gray-300 font-medium py-2">
              <i className="fas fa-headset w-6"></i> Contact
            </Link>
            
            <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {/* FIX: Changed href="#" to /register and /login */}
              <Link
                href="/register"
                onClick={toggleMenu}
                className="text-center border-2 border-green-600 text-green-600 px-4 py-2 rounded-md font-medium hover:bg-green-600 hover:text-white transition-all w-full"
              >
                <i className="fas fa-user-plus mr-1"></i> Register
              </Link>
              <Link
                href="/login"
                onClick={toggleMenu}
                className="text-center bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition-all shadow-md w-full"
              >
                <i className="fas fa-sign-in-alt mr-1"></i> Login
              </Link>
            </div>
          </div> 
        </div>
      )}
    </nav>
  );
}         