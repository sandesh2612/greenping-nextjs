"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form submission handler to simulate the loading animation
  const handleSubmit = (e) => {
    // Note: If you want the form to submit normally to your Laravel backend, 
    // remove e.preventDefault( ). This is just to show the loading state.
    // e.preventDefault(); 
    setIsSubmitting(true);
    
    // Simulate network delay to reset button if needed
    setTimeout(() => {
      setIsSubmitting(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      
      {/* Background Decor (Optional premium feel) */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-[#0f2b3d]/5 to-transparent pointer-events-none"></div>

      <div className="max-w-3xl w-full relative z-10">
        <div className="bg-white/95 backdrop-blur-md rounded-[32px] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden animate-[slideUp_0.6s_ease-out]">
          
          {/* ----- Header Section ----- */}
          <div className="text-center py-10 px-8 sm:px-12 bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#0f2b3d] to-teal-700 rounded-full flex items-center justify-center mb-5 shadow-lg animate-pulse">
              <i className="fa fa-store text-4xl text-white"></i>
            </div>
            <h1 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0f2b3d] to-[#1e4a6b] mb-2 tracking-tight">
              Register as Vendor/Company
            </h1>
            <p className="text-slate-500 font-medium">
              Join our platform and start growing your business
            </p>
          </div>

          {/* ----- Body Section ----- */}
          <div className="p-8 sm:p-10">
            <form 
              action="https://greenping.in/auth/register/vendor/activation" 
              method="POST" 
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* CSRF Token (kept from your original code) */}
              <input type="hidden" name="_token" value="fhXEIxL6jfNbSImOq1wLQv9fMWskdSf3sqOomDvd" />

              {/* Vendor/Company Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-2">
                  Vendor/Company Name
                </label>
                <div className="relative flex items-center">
                  <i className="fa fa-building absolute left-4 text-slate-400 text-lg pointer-events-none"></i>
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 text-sm border-2 border-slate-200 rounded-2xl bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium text-slate-800" 
                    placeholder="Enter your company name" 
                    type="text" 
                    name="vendor_title" 
                    required 
                    autoFocus 
                  />
                </div>
              </div>

              {/* Section Divider */}
              <div className="relative flex items-center py-4">
                <div className="flex-grow border-t border-slate-200"></div>
                <span className="flex-shrink-0 mx-4 text-xs font-bold text-teal-600 uppercase tracking-widest bg-slate-100 px-5 py-2 rounded-full">
                  Admin User Details
                </span>
                <div className="flex-grow border-t border-slate-200"></div>
              </div>

              {/* Username */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-2">
                  Username
                </label>
                <div className="relative flex items-center">
                  <i className="fa fa-id-card absolute left-4 text-slate-400 text-lg pointer-events-none"></i>
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 text-sm border-2 border-slate-200 rounded-2xl bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium text-slate-800" 
                    placeholder="Choose a username" 
                    type="text" 
                    name="username" 
                    required 
                  />
                </div>
              </div>

              {/* First & Last Name Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-2">
                    First Name
                  </label>
                  <div className="relative flex items-center">
                    <i className="fa fa-user absolute left-4 text-slate-400 text-lg pointer-events-none"></i>
                    <input 
                      className="w-full pl-12 pr-4 py-3.5 text-sm border-2 border-slate-200 rounded-2xl bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium text-slate-800" 
                      placeholder="First name" 
                      type="text" 
                      name="first_name" 
                      required 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-2">
                    Last Name
                  </label>
                  <div className="relative flex items-center">
                    <i className="fa fa-user absolute left-4 text-slate-400 text-lg pointer-events-none"></i>
                    <input 
                      className="w-full pl-12 pr-4 py-3.5 text-sm border-2 border-slate-200 rounded-2xl bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium text-slate-800" 
                      placeholder="Last name" 
                      type="text" 
                      name="last_name" 
                      required 
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-2">
                  Mobile Number
                </label>
                <div className="relative flex items-center">
                  <i className="fas fa-mobile-alt absolute left-4 text-slate-400 text-lg pointer-events-none"></i>
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 text-sm border-2 border-slate-200 rounded-2xl bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium text-slate-800" 
                    placeholder="e.g., 919876543210" 
                    type="text" 
                    name="mobile_number" 
                    required 
                  />
                </div>
                <small className="block text-xs text-slate-400 mt-2 ml-1">
                  Mobile number should be with country code without 0 or +
                </small>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-2">
                  Email Address
                </label>
                <div className="relative flex items-center">
                  <i className="fa fa-at absolute left-4 text-slate-400 text-lg pointer-events-none"></i>
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 text-sm border-2 border-slate-200 rounded-2xl bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium text-slate-800" 
                    placeholder="your@email.com" 
                    type="email" 
                    name="email" 
                    required 
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-2">
                  Password
                </label>
                <div className="relative flex items-center">
                  <i className="fa fa-key absolute left-4 text-slate-400 text-lg pointer-events-none"></i>
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 text-sm border-2 border-slate-200 rounded-2xl bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium text-slate-800" 
                    placeholder="Create a strong password" 
                    type="password" 
                    name="password" 
                    required 
                  />
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wide text-slate-600 mb-2">
                  Confirm Password
                </label>
                <div className="relative flex items-center">
                  <i className="fa fa-key absolute left-4 text-slate-400 text-lg pointer-events-none"></i>
                  <input 
                    className="w-full pl-12 pr-4 py-3.5 text-sm border-2 border-slate-200 rounded-2xl bg-white focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all font-medium text-slate-800" 
                    placeholder="Confirm your password" 
                    type="password" 
                    name="password_confirmation" 
                    required 
                  />
                </div>
              </div>

              {/* Terms & Conditions */}
              <label className="flex items-start gap-3 mt-8 cursor-pointer group">
                <input 
                  name="terms_and_conditions" 
                  type="checkbox" 
                  required 
                  className="mt-1 w-5 h-5 cursor-pointer accent-teal-600" 
                />
                <span className="text-sm text-slate-600 leading-relaxed">
                  I agree with the{" "}
                  <a href="https://greenping.in/terms-and-policies/user_terms" target="_blank" className="text-teal-600 font-semibold hover:underline">User Terms</a>,{" "}
                  <a href="https://greenping.in/terms-and-policies/vendor_terms" target="_blank" className="text-teal-600 font-semibold hover:underline">Vendor Terms</a> &amp;{" "}
                  <a href="https://greenping.in/terms-and-policies/privacy_policy" target="_blank" className="text-teal-600 font-semibold hover:underline">Privacy Policy</a>
                </span>
              </label>

              {/* Submit Button */}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#0f2b3d] to-teal-700 text-white mt-4 py-4 rounded-full text-base font-bold uppercase tracking-wide transition-all shadow-md hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-700/30 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="fas fa-spinner fa-spin"></i> Creating Account...
                  </>
                ) : (
                  <>
                    Create Account <i className="fas fa-arrow-right"></i>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* ----- Footer Section ----- */}
          <div className="bg-slate-50 p-8 sm:px-12 text-center border-t border-slate-200">
            {/* Social Login */}
            <div className="mb-6">
              <a 
                href="https://greenping.in/auth/login-google/redirect" 
                className="flex items-center justify-center gap-3 w-full py-3.5 rounded-full font-bold text-sm border-2 border-red-100 bg-white text-red-500 hover:bg-red-50 hover:border-red-200 transition-all shadow-sm hover:-translate-y-0.5"
              >
                <i className="fab fa-google text-lg"></i> Continue with Google
              </a>
            </div>

            {/* Login Redirect */}
            <div className="mt-6">
              <p className="text-slate-500 text-sm mb-3 font-medium">Already have an Account?</p>
              <Link 
                href="https://greenping.in/auth/login" 
                className="inline-block border-2 border-slate-300 text-slate-600 hover:bg-slate-100 px-8 py-2.5 rounded-full font-bold text-sm transition-all"
              >
                Click here to login
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}