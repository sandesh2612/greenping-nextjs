import React from "react";
import Link from "next/link";

export default function Pricing() {
  // Feature lists
  const freeFeatures = [
    { value: "10", name: "Contacts" },
    { value: "5", name: "Campaigns Per Month" },
    { value: "10", name: "Bot Replies" },
    { value: "10", name: "Bot Flows" },
    { value: "2", name: "Contact Custom Fields" },
    { value: "5", name: "Team Members/Agents" },
    { value: "", name: "AI Chat Bot" },
    { value: "", name: "API and Webhook Access" },
  ];

  const standardFeatures = [
    { value: "Unlimited", name: "Contacts" },
    { value: "Unlimited", name: "Campaigns Per Month" },
    { value: "Unlimited", name: "Bot Replies" },
    { value: "Unlimited", name: "Bot Flows" },
    { value: "Unlimited", name: "Contact Custom Fields" },
    { value: "Unlimited", name: "Team Members/Agents" },
    { value: "", name: "AI Chat Bot" },
    { value: "", name: "API and Webhook Access" },
  ];

  return (
    <section id="pricing-section" className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#f0f4f8] text-[#0f2b3d] font-bold text-xs mb-6">
            <i className="fas fa-tag"></i> Flexible Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0f2b3d] mb-4 tracking-tight">
            <span className="text-[#0eb487]">GreenPing</span> User Plans
          </h2>
          <p className="text-base text-gray-500 font-medium">
            Choose the perfect plan for your business growth <i className="fas fa-chart-line ml-1"></i>
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          
          {/* 1. Free Plan Card (Hover Teal Border) */}
          <div className="group flex flex-col bg-white rounded-[2rem] p-8 lg:p-10 shadow-sm border-2 border-gray-100 hover:border-[#0eb487] hover:shadow-[0_8px_30px_rgb(14,180,135,0.1)] transition-all duration-300">
            <h4 className="text-2xl font-extrabold text-[#0f2b3d] mb-6">
              Free <span className="text-[#0eb487]">Plan</span>
            </h4>
            
            <div className="mb-2 flex items-baseline flex-wrap">
              <span className="text-[32px] sm:text-[40px] font-extrabold text-[#0eb487] leading-none">₹0.00 INR</span>
              <span className="text-gray-400 font-medium text-sm ml-2">/yearly</span>
              <div className="inline-flex items-center gap-1.5 text-[#0eb487] text-xs font-bold ml-3">
                <i className="fas fa-gift"></i> Forever Free
              </div>
            </div>

            <div className="mb-6 mt-4">
              <a 
                href="https://business.whatsapp.com/products/platform-pricing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 transition-colors inline-flex items-center gap-1.5"
              >
                <i className="fas fa-external-link-square-alt"></i> + WhatsApp Cloud Messaging Charges
              </a>
            </div>

            <hr className="border-gray-100 mb-8 transition-colors duration-300 group-hover:border-teal-50" />

            <ul className="flex-1 space-y-5">
              {freeFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600 text-[15px]">
                  <i className="fas fa-check-circle text-[#0eb487] text-lg"></i>
                  <span>
                    {feature.value && <strong className="text-[#0f2b3d] mr-1">{feature.value}</strong>}
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Standard Plan Card (Hover Teal Border & Shadow) */}
          <div className="group flex flex-col bg-white rounded-[2rem] p-8 lg:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-transparent hover:border-[#0eb487] transition-all duration-300 relative mt-8 md:mt-0">
            
            {/* Most Popular Badge */}
            <div className="absolute top-6 right-6 bg-[#0eb487] text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5">
              <i className="fas fa-star"></i> Most Popular
            </div>

            <h4 className="text-2xl font-extrabold text-[#0eb487] mb-6 mt-2 md:mt-0">
              Standard
            </h4>
            
            {/* Monthly Price */}
            <div className="mb-4 flex items-baseline flex-wrap">
              <span className="text-[32px] sm:text-[40px] font-extrabold text-[#0f2b3d] leading-none">₹399.00 INR</span>
              <span className="text-gray-400 font-medium text-sm ml-2">/monthly</span>
              <div className="inline-flex items-center gap-1 text-[#0eb487] text-xs font-bold ml-3">
                <i className="fas fa-percent"></i> Save 15% yearly
              </div>
            </div>

            {/* Yearly Price */}
            <div className="mb-2 flex items-baseline flex-wrap">
              <span className="text-[28px] sm:text-[32px] font-extrabold text-[#0eb487] leading-none">₹1,999.00 INR</span>
              <span className="text-gray-400 font-medium text-sm ml-2">/yearly</span>
            </div>

            <div className="mb-6 mt-4">
              <a 
                href="https://business.whatsapp.com/products/platform-pricing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[13px] font-semibold text-gray-300 hover:text-gray-400 transition-colors inline-flex items-center gap-1.5"
              >
                <i className="fas fa-external-link-square-alt"></i> + WhatsApp Cloud Messaging Charges
              </a>
            </div>

            <hr className="border-gray-100 mb-8 transition-colors duration-300 group-hover:border-teal-50" />

            <ul className="flex-1 space-y-5 mb-10">
              {standardFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-600 text-[15px]">
                  <i className="fas fa-check-circle text-[#0eb487] text-lg"></i>
                  <span>
                    {feature.value && <strong className="text-[#0f2b3d] mr-1">{feature.value}</strong>}
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>

            <Link 
              href="/register" 
              className="mt-auto mx-auto w-max px-8 py-3.5 bg-[#0f2b3d] hover:bg-[#163c55] text-white font-bold rounded-full transition-all shadow-md flex items-center justify-center gap-2"
            >
              Start Free Trial <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}