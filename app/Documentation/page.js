
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ApiDocumentation() {
  // State for collapsible endpoints
  const [openEndpoints, setOpenEndpoints] = useState({
    sendText: false,
    sendMedia: false,
    sendTemplate: false,
    sendInteractive: false,
    createContact: false,
    updateContact: false,
    assignAgent: true, // Assign Agent is open by default
  });

  // Active section for sidebar highlighting
  const [activeSection, setActiveSection] = useState('base-url');
  
  // Mobile sidebar toggle
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleEndpoint = (key) => {
    setOpenEndpoints((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const copyBaseUrl = () => {
    navigator.clipboard.writeText('https://greenping.in');
    alert('Base URL copied to clipboard!');
  };

  const scrollToTop = () => {
    const main = document.getElementById('main-scroll-container');
    if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Smooth scroll handler
  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsSidebarOpen(false); // Close sidebar on mobile after click
    const element = document.getElementById(id);
    const mainContent = document.getElementById('main-scroll-container');
    
    if (element && mainContent) {
      // 80px offset for the sticky header
      const topPos = element.offsetTop - 80; 
      mainContent.scrollTo({ top: topPos, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  // Intersection Observer to automatically highlight sidebar links on scroll
  useEffect(() => {
    const mainContent = document.getElementById('main-scroll-container');
    const sections = document.querySelectorAll('.scroll-section');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { 
        root: mainContent,
        rootMargin: '-100px 0px -60% 0px', 
        threshold: 0 
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div className="flex h-screen overflow-hidden font-sans bg-[#f4f7f6] text-gray-800 antialiased">
      
      {/* ================= MOBILE OVERLAY ================= */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* ================= SIDEBAR ================= */}
      <aside 
        className={`fixed md:static inset-y-0 left-0 w-64 bg-[#0d4743] text-white flex flex-col flex-shrink-0 z-30 shadow-2xl transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        <div className="p-5 border-b border-[#185b56]">
          <div className="flex items-center gap-2">
            <img 
              src="https://greenping.in/media-storage/dark_theme_logo/69ff2f2ab7659---whatsapp-image-2026-01-11-at-62829-pm-removebg-preview.png" 
              alt="GreenPing" 
              className="h-10 object-contain"
            />
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto py-5 scrollbar-thin scrollbar-thumb-[#185b56] scrollbar-track-transparent">
          {/* GETTING STARTED */}
          <div className="mb-6 px-4">
            <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-widest uppercase">Getting Started</div>
            <ul className="space-y-1">
              <li>
                <a href="#authentication" onClick={(e) => handleScrollTo(e, 'authentication')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'authentication' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-key w-4 text-center"></i> Authentication
                </a>
              </li>
              <li>
                <a href="#basics" onClick={(e) => handleScrollTo(e, 'basics')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'basics' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-info-circle w-4 text-center"></i> Before You Start
                </a>
              </li>
              <li>
                <a href="#base-url" onClick={(e) => handleScrollTo(e, 'base-url')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'base-url' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-link w-4 text-center"></i> Base URL
                </a>
              </li>
            </ul>
          </div>

          {/* MESSAGING APIS */}
          <div className="mb-6 px-4">
            <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-widest uppercase">Messaging APIs</div>
            <ul className="space-y-1">
              <li>
                <a href="#send-text" onClick={(e) => handleScrollTo(e, 'send-text')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'send-text' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-comment w-4 text-center"></i> Send Text
                </a>
              </li>
              <li>
                <a href="#send-media" onClick={(e) => handleScrollTo(e, 'send-media')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'send-media' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-image w-4 text-center"></i> Send Media
                </a>
              </li>
              <li>
                <a href="#send-template" onClick={(e) => handleScrollTo(e, 'send-template')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'send-template' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-envelope-open-text w-4 text-center"></i> Send Template
                </a>
              </li>
              <li>
                <a href="#send-interactive" onClick={(e) => handleScrollTo(e, 'send-interactive')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'send-interactive' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-hand-pointer w-4 text-center"></i> Send Interactive
                </a>
              </li>
            </ul>
          </div>

          {/* CONTACT MANAGEMENT */}
          <div className="mb-6 px-4">
            <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-widest uppercase">Contact Management</div>
            <ul className="space-y-1">
              <li>
                <a href="#create-contact" onClick={(e) => handleScrollTo(e, 'create-contact')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'create-contact' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-user-plus w-4 text-center"></i> Create Contact
                </a>
              </li>
              <li>
                <a href="#update-contact" onClick={(e) => handleScrollTo(e, 'update-contact')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'update-contact' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-user-edit w-4 text-center"></i> Update Contact
                </a>
              </li>
              <li>
                <a href="#assign-agent" onClick={(e) => handleScrollTo(e, 'assign-agent')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'assign-agent' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-user-check w-4 text-center"></i> Assign Agent
                </a>
              </li>
            </ul>
          </div>

          {/* ADDITIONAL INFO */}
          <div className="mb-6 px-4">
            <div className="text-[11px] font-bold text-gray-400 mb-3 tracking-widest uppercase">Additional Info</div>
            <ul className="space-y-1">
              <li>
                <a href="#rate-limits" onClick={(e) => handleScrollTo(e, 'rate-limits')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'rate-limits' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-tachometer-alt w-4 text-center"></i> Rate Limits
                </a>
              </li>
              <li>
                <a href="#error-codes" onClick={(e) => handleScrollTo(e, 'error-codes')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'error-codes' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-exclamation-triangle w-4 text-center"></i> Error Codes
                </a>
              </li>
              <li>
                <a href="#webhook" onClick={(e) => handleScrollTo(e, 'webhook')} className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all ${activeSection === 'webhook' ? 'bg-[#145a55] text-[#22c55e] border-l-4 border-[#22c55e]' : 'text-gray-300 hover:text-white hover:bg-[#145a55] border-l-4 border-transparent'}`}>
                  <i className="fas fa-plug w-4 text-center"></i> Webhook
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main id="main-scroll-container" className="flex-1 flex flex-col h-screen overflow-y-auto scroll-smooth relative w-full">
        
        {/* Top Header */}
        <div className="sticky top-0 bg-[#f4f7f6]/90 backdrop-blur-md px-6 py-4 flex justify-between items-center z-20">
          <button 
            className="md:hidden text-gray-700 hover:text-[#0d4743] transition-colors p-2 -ml-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          <div className="flex justify-start w-full md:w-auto">
  <span className="bg-[#e6f4ea] text-[#1e8e3e] px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] sm:text-xs font-bold flex items-center w-fit gap-1 sm:gap-1.5 border border-[#cce8d6] shadow-sm whitespace-nowrap transition-all duration-200">
    <i className="fas fa-shield-alt"></i> Live API
  </span>
</div>
        </div>

        <div className="container max-w-5xl mx-auto p-4 md:p-8 flex-1">
          
          {/* Hero Section */}
          <div id="base-url" className="scroll-section mb-10 scroll-mt-24">
            <div className="bg-[#12534e] rounded-xl p-8 md:p-10 shadow-lg text-white">
              <h1 className="text-3xl font-bold mb-2 tracking-tight">WhatsApp Cloud API</h1>
              <p className="text-[#a7f3d0] mb-8 font-medium text-sm">Official Meta Partner | 99.9% Uptime | Enterprise-grade security</p>
              
              <div className="inline-flex flex-col sm:flex-row sm:items-center gap-3 bg-black/20 rounded-lg p-2 border border-white/10 backdrop-blur-sm w-full sm:w-auto">
                <div className="bg-black/30 rounded flex items-center px-4 py-2 flex-1 sm:flex-none">
                  <i className="fas fa-link text-gray-300 text-sm mr-3"></i>
                  <span className="font-mono text-sm tracking-wide">https://greenping.in</span>
                </div>
                <button onClick={copyBaseUrl} className="bg-white/10 hover:bg-white/20 transition-colors text-white px-4 py-2 rounded text-sm font-medium flex items-center justify-center gap-2">
                  <i className="far fa-copy"></i> Copy
                </button>
              </div>
            </div>
          </div>

          {/* Authentication Required */}
          <div id="authentication" className="scroll-section mb-8 scroll-mt-24 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="border-l-4 border-[#1e293b] p-6">
              <h3 className="text-lg font-bold text-[#1e293b] mb-2 flex items-center gap-2">
                <i className="fas fa-key text-[#1e293b]"></i> Authentication Required
              </h3>
              <p className="text-sm text-gray-600 mb-5">All API endpoints require Bearer Token authentication.</p>
              
              <div className="bg-[#fef9c3] px-4 py-3 rounded-md text-sm font-mono text-gray-800 mb-5 border border-[#fde047]">
                <span className="text-gray-500 font-bold">Authorization:</span> Bearer {'{bearerToken}'}
              </div>
              
              <p className="text-sm text-gray-700 mb-3">
                <strong>URL Format:</strong> <code className="text-gray-600 font-mono tracking-wide ml-1">https://greenping.in/{'{vendorUid}'}/endpoint</code>
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-2">
                <i className="fas fa-shield-alt text-[#1e293b]"></i> API access is available only on <strong>Standard Plan and above.</strong>
              </p>
            </div>
          </div>

          {/* Before You Start */}
          <div id="basics" className="scroll-section mb-12 scroll-mt-24 bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
            <div className="border-l-4 border-orange-500 p-6">
              <h3 className="text-lg font-bold text-[#1e293b] mb-4 flex items-center gap-2">
                <i className="fas fa-info-circle text-[#1e293b]"></i> Before You Start
              </h3>
              <ul className="space-y-2.5 text-sm text-gray-700">
                <li className="flex items-start gap-2"><span className="text-gray-400">✓</span> Complete WhatsApp Cloud API Setup in your dashboard</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">✓</span> Ensure your WhatsApp Business Account is active and verified</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">✓</span> Phone numbers must be registered with WhatsApp Business API</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">✓</span> Template messages require Meta-approved templates</li>
                <li className="flex items-start gap-2"><span className="text-gray-400">✓</span> Use <strong>from_phone_number_id</strong> (optional) - if not provided, default phone number will be used</li>
              </ul>
            </div>
          </div>

          {/* ================================= ENDPOINTS ================================= */}
          
          {/* Send Text Message */}
          <div id="send-text" className="scroll-section mb-8 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-comment text-[#22c55e]"></i> Send Text Message
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors gap-4" onClick={() => toggleEndpoint('sendText')}>
                <div className="flex items-center gap-3 w-full md:w-auto flex-1">
                  <span className="bg-[#e0e7ff] text-[#4338ca] px-3 py-1 rounded text-xs font-bold tracking-wider uppercase border border-[#c7d2fe]">POST</span>
                  <div className="bg-[#f8fafc] px-3 py-1.5 rounded-md flex-1 md:flex-none">
                    <span className="font-mono text-sm text-gray-600 truncate block">https://greenping.in/{'{vendorUid}'}/contact/send-message</span>
                  </div>
                </div>
                <div className="flex justify-between md:justify-end items-center gap-2 bg-[#f8fafc] border border-gray-200 px-3 py-1.5 rounded-md w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-comment text-gray-500 text-xs"></i>
                    <span className="text-xs font-semibold text-gray-600">Text Message</span>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ml-2 ${openEndpoints.sendText ? 'rotate-180' : ''}`}></i>
                </div>
                
              </div>
              
              {openEndpoints.sendText && (
                <div className="p-6 border-t border-gray-200 bg-white">
                  <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
                    
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#f8fafc] text-gray-700 border-b border-gray-200">
                          <th className="py-3 px-4 font-semibold w-1/4">Parameter</th>
                          <th className="py-3 px-4 font-semibold">Type</th>
                          <th className="py-3 px-4 font-semibold">Required</th>
                          <th className="py-3 px-4 font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">from_phone_number_id</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-gray-500 text-xs">Optional</td><td className="py-3 px-4 text-gray-600">Your WhatsApp Business phone number ID</td></tr>
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">phone_number</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">Recipient's WhatsApp number (without + or 0)</td></tr>
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">message_body</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">Text content of the message</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Send Media Message */}
          <div id="send-media" className="scroll-section mb-8 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-image text-[#22c55e]"></i> Send Media Message
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors gap-4" onClick={() => toggleEndpoint('sendMedia')}>
                <div className="flex items-center gap-3 w-full md:w-auto flex-1">
                  <span className="bg-[#e0e7ff] text-[#4338ca] px-3 py-1 rounded text-xs font-bold tracking-wider uppercase border border-[#c7d2fe]">POST</span>
                  <div className="bg-[#f8fafc] px-3 py-1.5 rounded-md flex-1 md:flex-none">
                    <span className="font-mono text-sm text-gray-600 truncate block">https://greenping.in/{'{vendorUid}'}/contact/send-media-message</span>
                  </div>
                </div>
                <div className="flex justify-between md:justify-end items-center gap-2 bg-[#f8fafc] border border-gray-200 px-3 py-1.5 rounded-md w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-image text-gray-500 text-xs"></i>
                    <span className="text-xs font-semibold text-gray-600">Media Message</span>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ml-2 ${openEndpoints.sendMedia ? 'rotate-180' : ''}`}></i>
                </div>
              </div>
              
              {openEndpoints.sendMedia && (
                <div className="p-6 border-t border-gray-200 bg-white">
                  <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#f8fafc] text-gray-700 border-b border-gray-200">
                          <th className="py-3 px-4 font-semibold w-1/4">Parameter</th>
                          <th className="py-3 px-4 font-semibold">Type</th>
                          <th className="py-3 px-4 font-semibold">Required</th>
                          <th className="py-3 px-4 font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">phone_number</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">Recipient's WhatsApp number</td></tr>
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">media_type</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">image, video, document, or audio</td></tr>
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">media_url</td><td className="py-3 px-4 text-gray-600">URL</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">Public URL of the media file</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Send Template Message */}
          <div id="send-template" className="scroll-section mb-8 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-envelope-open-text text-[#22c55e]"></i> Send Template Message
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors gap-4" onClick={() => toggleEndpoint('sendTemplate')}>
                <div className="flex items-center gap-3 w-full md:w-auto flex-1">
                  <span className="bg-[#e0e7ff] text-[#4338ca] px-3 py-1 rounded text-xs font-bold tracking-wider uppercase border border-[#c7d2fe]">POST</span>
                  <div className="bg-[#f8fafc] px-3 py-1.5 rounded-md flex-1 md:flex-none">
                    <span className="font-mono text-sm text-gray-600 truncate block">https://greenping.in/{'{vendorUid}'}/contact/send-template-message</span>
                  </div>
                </div>
                <div className="flex justify-between md:justify-end items-center gap-2 bg-[#f8fafc] border border-gray-200 px-3 py-1.5 rounded-md w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-envelope-open-text text-gray-500 text-xs"></i>
                    <span className="text-xs font-semibold text-gray-600">Template Message</span>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ml-2 ${openEndpoints.sendTemplate ? 'rotate-180' : ''}`}></i>
                </div>
              </div>
              
              {openEndpoints.sendTemplate && (
                <div className="p-6 border-t border-gray-200 bg-white">
                  <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#f8fafc] text-gray-700 border-b border-gray-200">
                          <th className="py-3 px-4 font-semibold w-1/4">Parameter</th>
                          <th className="py-3 px-4 font-semibold">Type</th>
                          <th className="py-3 px-4 font-semibold">Required</th>
                          <th className="py-3 px-4 font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">phone_number</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">Recipient's WhatsApp number</td></tr>
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">template_name</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">Name of the approved template</td></tr>
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">template_language</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">Language code (en, hi, etc.)</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                     <div className="bg-[#0f172a] p-5 rounded-lg shadow-inner">
                      <div className="text-[#38bdf8] font-bold text-xs uppercase tracking-wider mb-3">Standard Example</div>
                      <pre className="font-mono text-sm text-[#4ade80] overflow-x-auto whitespace-pre">
{`{
  "from_phone_number_id": "669...",
  "phone_number": "918856066529",
  "template_name": "your_template",
  "template_language": "en"
}`}
                      </pre>
                     </div>
                     <div className="bg-[#0f172a] p-5 rounded-lg shadow-inner border border-gray-700">
                      <div className="text-[#38bdf8] font-bold text-xs uppercase tracking-wider mb-3">Carousel Example</div>
                      <pre className="font-mono text-sm text-[#4ade80] overflow-x-auto whitespace-pre">
{`{
  "template_name": "carousel_131",
  "carousel_templates": [
    {
      "media_type": "IMAGE",
      "button_type": ["QUICK_REPLY"]
    }
  ]
}`}
                      </pre>
                     </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Send Interactive Message */}
          <div id="send-interactive" className="scroll-section mb-8 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-hand-pointer text-[#22c55e]"></i> Send Interactive Message
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors gap-4" onClick={() => toggleEndpoint('sendInteractive')}>
                <div className="flex items-center gap-3 w-full md:w-auto flex-1">
                  <span className="bg-[#e0e7ff] text-[#4338ca] px-3 py-1 rounded text-xs font-bold tracking-wider uppercase border border-[#c7d2fe]">POST</span>
                  <div className="bg-[#f8fafc] px-3 py-1.5 rounded-md flex-1 md:flex-none">
                    <span className="font-mono text-sm text-gray-600 truncate block">https://greenping.in/{'{vendorUid}'}/contact/send-interactive-message</span>
                  </div>
                </div>
                <div className="flex justify-between md:justify-end items-center gap-2 bg-[#f8fafc] border border-gray-200 px-3 py-1.5 rounded-md w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-hand-pointer text-gray-500 text-xs"></i>
                    <span className="text-xs font-semibold text-gray-600">Interactive</span>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ml-2 ${openEndpoints.sendInteractive ? 'rotate-180' : ''}`}></i>
                </div>
              </div>
              
              {openEndpoints.sendInteractive && (
                <div className="p-6 border-t border-gray-200 bg-white">
                  <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="bg-[#f8fafc] text-gray-700 border-b border-gray-200">
                          <th className="py-3 px-4 font-semibold w-1/4">Parameter</th>
                          <th className="py-3 px-4 font-semibold">Type</th>
                          <th className="py-3 px-4 font-semibold">Required</th>
                          <th className="py-3 px-4 font-semibold">Description</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">interactive_type</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">button, cta_url, or list</td></tr>
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">body_text</td><td className="py-3 px-4 text-gray-600">string</td><td className="py-3 px-4 text-[#ef4444] font-bold">*</td><td className="py-3 px-4 text-gray-600">Main message body</td></tr>
                        <tr><td className="py-3 px-4 font-mono text-xs text-[#1e293b]">buttons</td><td className="py-3 px-4 text-gray-600">object</td><td className="py-3 px-4 text-gray-500 text-xs">Cond</td><td className="py-3 px-4 text-gray-600">For button type</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-[#0f172a] p-5 rounded-lg shadow-inner">
                    <div className="text-[#38bdf8] font-bold text-xs uppercase tracking-wider mb-3">Button Example</div>
                    <pre className="font-mono text-sm text-[#4ade80] overflow-x-auto whitespace-pre">
{`{
  "interactive_type": "button",
  "header_text": "Choose an option",
  "body_text": "Please select:",
  "buttons": {"1": "Yes", "2": "No", "3": "Maybe"}
}`}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Create Contact */}
          <div id="create-contact" className="scroll-section mb-8 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-user-plus text-[#22c55e]"></i> Create Contact
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors gap-4" onClick={() => toggleEndpoint('createContact')}>
                <div className="flex items-center gap-3 w-full md:w-auto flex-1">
                  <span className="bg-[#e0e7ff] text-[#4338ca] px-3 py-1 rounded text-xs font-bold tracking-wider uppercase border border-[#c7d2fe]">POST</span>
                  <div className="bg-[#f8fafc] px-3 py-1.5 rounded-md flex-1 md:flex-none">
                    <span className="font-mono text-sm text-gray-600 truncate block">https://greenping.in/{'{vendorUid}'}/contact/create</span>
                  </div>
                </div>
                <div className="flex justify-between md:justify-end items-center gap-2 bg-[#f8fafc] border border-gray-200 px-3 py-1.5 rounded-md w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-user-plus text-gray-500 text-xs"></i>
                    <span className="text-xs font-semibold text-gray-600">Create Contact</span>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ml-2 ${openEndpoints.createContact ? 'rotate-180' : ''}`}></i>
                </div>
              </div>
              
              {openEndpoints.createContact && (
                <div className="p-6 border-t border-gray-200 bg-white">
                   <div className="bg-[#0f172a] p-5 rounded-lg shadow-inner">
                    <pre className="font-mono text-sm text-[#4ade80] overflow-x-auto whitespace-pre">
{`{
  "phone_number": "4885057299",
  "first_name": "John",
  "last_name": "Doe",
  "email": "john@domain.com",
  "country": "india",
  "language_code": "en"
}`}
                    </pre>
                   </div>
                </div>
              )}
            </div>
          </div>

          {/* Update Contact */}
          <div id="update-contact" className="scroll-section mb-8 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-user-edit text-[#22c55e]"></i> Update Contact
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors gap-4" onClick={() => toggleEndpoint('updateContact')}>
                <div className="flex items-center gap-3 w-full md:w-auto flex-1">
                  <span className="bg-[#e0e7ff] text-[#4338ca] px-3 py-1 rounded text-xs font-bold tracking-wider uppercase border border-[#c7d2fe]">POST</span>
                  <div className="bg-[#f8fafc] px-3 py-1.5 rounded-md flex-1 md:flex-none">
                    <span className="font-mono text-sm text-gray-600 truncate block">https://greenping.in/{'{vendorUid}'}/contact/update/{'{phoneNumber}'}</span>
                  </div>
                </div>
                <div className="flex justify-between md:justify-end items-center gap-2 bg-[#f8fafc] border border-gray-200 px-3 py-1.5 rounded-md w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-user-edit text-gray-500 text-xs"></i>
                    <span className="text-xs font-semibold text-gray-600">Update Contact</span>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ml-2 ${openEndpoints.updateContact ? 'rotate-180' : ''}`}></i>
                </div>
              </div>
              
              {openEndpoints.updateContact && (
                <div className="p-6 border-t border-gray-200 bg-white">
                   <div className="bg-[#0f172a] p-5 rounded-lg shadow-inner">
                    <pre className="font-mono text-sm text-[#4ade80] overflow-x-auto whitespace-pre">
{`{
  "first_name": "Johan",
  "last_name": "Doe",
  "email": "updated@domain.com",
  "whatsapp_opt_out": false,
  "enable_ai_bot": true
}`}
                    </pre>
                   </div>
                </div>
              )}
            </div>
          </div>

          {/* Assign Agent (Exact Match) */}
          <div id="assign-agent" className="scroll-section mb-12 scroll-mt-24">
             <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-user-check text-[#22c55e]"></i> Assign Team Member & AI Bot Settings
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors gap-4" onClick={() => toggleEndpoint('assignAgent')}>
                <div className="flex items-center gap-3 w-full md:w-auto flex-1">
                  <span className="bg-[#e0e7ff] text-[#4338ca] px-3 py-1 rounded text-xs font-bold tracking-wider uppercase border border-[#c7d2fe]">POST</span>
                  <div className="bg-[#f8fafc] px-3 py-1.5 rounded-md flex-1 md:flex-none">
                    <span className="font-mono text-sm text-gray-600 truncate block">https://greenping.in/{'{vendorUid}'}/contact/assign-team-member</span>
                  </div>
                </div>
                <div className="flex justify-between md:justify-end items-center gap-2 bg-[#f8fafc] border border-gray-200 px-3 py-1.5 rounded-md w-full md:w-auto">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-user-check text-gray-500 text-xs"></i>
                    <span className="text-xs font-semibold text-gray-600">Assign Agent</span>
                  </div>
                  <i className={`fas fa-chevron-down text-gray-400 text-xs transition-transform ml-2 ${openEndpoints.assignAgent ? 'rotate-180' : ''}`}></i>
                </div>
              </div>
              
              {openEndpoints.assignAgent && (
                <div className="p-6 border-t border-gray-200 bg-white">
                   <div className="bg-[#0f172a] p-5 rounded-lg shadow-inner">
                    <pre className="font-mono text-sm text-[#4ade80] overflow-x-auto whitespace-pre">
{`{
  "username_or_email": "team123@test.com",
  "phone_number": "918856066529",
  "enable_ai_bot": 0,
  "enable_reply_bot": 0
}`}
                    </pre>
                   </div>
                </div>
              )}
            </div>
          </div>

          {/* Rate Limits & Headers */}
          <div id="rate-limits" className="scroll-section mb-10 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-tachometer-alt text-[#22c55e]"></i> Rate Limits & Headers
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-6">
              <table className="w-full text-left text-sm">
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="py-4 font-bold text-[#1e293b] w-1/3">Rate Limit</td><td className="py-4 text-gray-600">80 requests per second (standard plan)</td></tr>
                  <tr><td className="py-4 font-bold text-[#1e293b]">Authentication</td><td className="py-4 text-gray-600">Bearer Token + Vendor UID in URL</td></tr>
                  <tr><td className="py-4 font-bold text-[#1e293b]">Response Format</td><td className="py-4 text-gray-600">JSON only</td></tr>
                  <tr><td className="py-4 font-bold text-[#1e293b]">Encoding</td><td className="py-4 text-gray-600">UTF-8</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Error Codes */}
          <div id="error-codes" className="scroll-section mb-10 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-exclamation-triangle text-[#22c55e]"></i> Error Codes
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#f8fafc] border-b border-gray-200">
                    <tr>
                      <th className="py-4 px-6 font-bold text-[#1e293b] w-24">Code</th>
                      <th className="py-4 px-6 font-bold text-[#1e293b] w-1/2">Meaning</th>
                      <th className="py-4 px-6 font-bold text-[#1e293b]">Action Required</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50"><td className="py-4 px-6 font-mono text-gray-700">401</td><td className="py-4 px-6 text-gray-600">API access not available in plan</td><td className="py-4 px-6 text-gray-600">Upgrade subscription</td></tr>
                    <tr className="hover:bg-gray-50"><td className="py-4 px-6 font-mono text-gray-700">22</td><td className="py-4 px-6 text-gray-600">WhatsApp API setup incomplete</td><td className="py-4 px-6 text-gray-600">Complete Cloud API configuration</td></tr>
                    <tr className="hover:bg-gray-50"><td className="py-4 px-6 font-mono text-gray-700">403</td><td className="py-4 px-6 text-gray-600">Invalid vendor UID or authentication</td><td className="py-4 px-6 text-gray-600">Check your vendor UID and token</td></tr>
                    <tr className="hover:bg-gray-50"><td className="py-4 px-6 font-mono text-gray-700">2</td><td className="py-4 px-6 text-gray-600">Validation error / Invalid phone number</td><td className="py-4 px-6 text-gray-600">Ensure number has no + or 0 prefix</td></tr>
                    <tr className="hover:bg-gray-50"><td className="py-4 px-6 font-mono text-gray-700">3</td><td className="py-4 px-6 text-gray-600">Duplicate button labels</td><td className="py-4 px-6 text-gray-600">Use unique button text</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Webhook URL */}
          <div id="webhook" className="scroll-section mb-12 scroll-mt-24">
            <h2 className="text-xl font-bold text-[#1e293b] mb-4 flex items-center gap-3">
              <i className="fas fa-plug text-[#22c55e]"></i> Webhook URL
            </h2>
            <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden p-6">
              
              <div className="bg-[#1e293b] text-white p-4 rounded-lg font-mono text-sm tracking-wide mb-6 shadow-inner w-full overflow-x-auto whitespace-nowrap">
                https://greenping.in/webhook/{'{vendorUid}'}
              </div>
              
              <div className="bg-[#0f172a] rounded-xl p-6 shadow-inner">
                <div className="text-[#38bdf8] font-bold text-xs uppercase tracking-wider mb-4 border-b border-[#1e293b] pb-2">Webhook Response Example:</div>
                <pre className="font-mono text-sm text-[#4ade80] overflow-x-auto whitespace-pre">
{`{
  "contact": {
    "status": "existing/updated/new",
    "phone_number": "XXXXXXXXXX",
    "uid": "XXXXXXXXXX",
    "first_name": "XXXXXXXXXX"
  },
  "message": {
    "whatsapp_message_id": "wamid.XXXXXXXXXX",
    "is_new_message": true,
    "media": {"type": "image", "link": "url"}
  }
}`}
                </pre>
              </div>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-6 py-8 mt-4 text-center border-t border-gray-200">
          <p className="text-sm font-medium text-gray-600 mb-2 flex justify-center items-center gap-2">
            <i className="fab fa-whatsapp text-[#25D366] text-lg"></i> GreenPing - Official WhatsApp Business API Partner
          </p>
          <p className="text-gray-500 text-sm mb-4">
            <span className="flex items-center justify-center gap-3 flex-wrap">
              <a href="mailto:info@greenping.in" className="hover:text-[#0d4743] transition-colors flex items-center gap-1"><i className="far fa-envelope"></i> info@greenping.in</a>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <a href="tel:+918109540259" className="hover:text-[#0d4743] transition-colors flex items-center gap-1"><i className="fas fa-phone text-red-500 text-base sm:text-sm"></i> +91 8109540259</a>
              <span className="text-gray-300 hidden sm:inline">|</span>
              <Link href="https://greenping.in" target="_blank" className="text-[#0d4743] hover:underline font-medium">greenping.in</Link>
            </span>
          </p>
          <p className="text-gray-400 text-xs">© 2025 GreenPing. All rights reserved. API version 2.0.0</p>
        </div>

        {/* Scroll to Top Button */}
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-6 right-6 w-11 h-11 bg-[#1e8e3e] hover:bg-[#156e2f] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:-translate-y-1 z-40 focus:outline-none"
        >
          <i className="fas fa-arrow-up"></i>
        </button>

      </main>
    </div>
  );
}