"use client";

import React from 'react';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md bg-white p-10 rounded-xl shadow-xl">
        
        {/* Profile Icon Section */}
        <div className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-slate-900 mb-6">
          <svg className="h-14 w-14 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        
        <h2 className="text-center text-3xl font-extrabold text-slate-900 tracking-tight mb-10">
          Welcome Back
        </h2>

        <div className="space-y-6">
          <form 
            action="https://greenping.in/auth/login" 
            method="POST" 
            id="loginForm" 
            noValidate
            className="space-y-8"
          >
            <input 
              type="hidden" 
              name="_token" 
              defaultValue="7uni0nIgzBR2t72SAzlnTG63UUQEskUuof0vfDDG" 
            />

            {/* Email Field */}
            <div>
              <label htmlFor="loginEmail" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                Email / Username / Mobile
              </label>
              <div className="mt-1.5 relative">
                <input 
                  id="loginEmail" 
                  name="email" 
                  type="text" 
                  autoComplete="email" 
                  required 
                  autoFocus
                  placeholder="Enter your email or phone number" 
                  className="w-full px-5 py-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-0 focus:border-green-600 sm:text-sm"
                />
              </div>
              <p className="mt-1 text-[10px] text-gray-500">
                Mobile number should be with country code without 0 or +
              </p>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="loginPassword" className="block text-xs font-bold text-gray-500 uppercase tracking-widest">
                Password
              </label>
              <div className="mt-1.5 relative">
                <input 
                  id="loginPassword" 
                  name="password" 
                  type="password" 
                  autoComplete="current-password" 
                  required 
                  placeholder="Enter your password" 
                  className="w-full px-5 py-4 border border-gray-200 rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-0 focus:border-green-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input 
                  id="rememberCheckbox" 
                  name="remember" 
                  type="checkbox" 
                  className="h-4 w-4 text-green-700 border-gray-300 rounded cursor-pointer"
                />
                <label htmlFor="rememberCheckbox" className="ml-2 block text-gray-600 cursor-pointer">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="https://greenping.in/auth/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div>
              <button 
                type="submit" 
                className="w-full flex justify-center py-4 px-6 rounded-lg text-lg font-bold text-white bg-[#104D40] hover:bg-[#155A48] transition-colors tracking-[0.25em]"
              >
                LOGIN
              </button>
            </div>
          </form>

          {/* Social Login Button */}
          <div className="mt-8">
            <Link 
              href="https://greenping.in/auth/login-google/redirect" 
              className="w-full flex justify-center items-center py-4 px-6 border-2 border-[#E9A7A0] rounded-lg bg-white text-lg font-medium text-[#E9A7A0] hover:bg-[#FFF5F5] transition-colors"
            >
              <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              Continue with Google
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}