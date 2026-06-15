import React from "react";
import Link from "next/link";

export default function Pricing() {
  // Feature lists for cleaner code
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
    <section id="pricing-section" className="py-20 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 font-semibold text-sm mb-4">
            <i className="fas fa-tag"></i> Flexible Pricing Plans
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2b3d] mb-4 tracking-tight">
            <span className="text-teal-500">GreenPing</span> User Plans
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Choose the perfect plan for your business growth <i className="fas fa-chart-line ml-1"></i>
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* 1. Free Plan Card */}
          <div className="flex flex-col bg-white rounded-3xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
            <h4 className="text-2xl font-bold text-[#0f2b3d] mb-4">Free Plan</h4>
            
            <div className="mb-4">
              <span className="text-4xl font-extrabold text-[#0f2b3d]">₹0.00</span>
              <span className="text-gray-500 font-medium"> /yearly</span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-600 text-xs font-bold rounded-full ml-3 align-text-top">
                <i className="fas fa-gift"></i> Forever Free
              </div>
            </div>

            <div className="mb-6">
              <a 
                href="https://business.whatsapp.com/products/platform-pricing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1.5"
              >
                <i className="fas fa-external-link-alt"></i> + WhatsApp Cloud Messaging Charges
              </a>
            </div>

            <hr className="border-gray-100 mb-6" />

            <ul className="flex-1 space-y-4">
              {freeFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <i className="fas fa-check-circle text-teal-500 mt-1"></i>
                  <span>
                    {feature.value && <strong className="text-[#0f2b3d] mr-1">{feature.value}</strong>}
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* 2. Standard Plan Card (Most Popular) */}
          <div className="flex flex-col bg-white rounded-3xl p-8 shadow-[0_12px_30px_rgba(0,0,0,0.08)] border-2 border-teal-500 relative transform md:-translate-y-4 transition-all duration-300">
            
            {/* Popular Badge */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-teal-500 to-green-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1.5 shadow-md">
              <i className="fas fa-star text-yellow-300"></i> Most Popular
            </div>

            <h4 className="text-2xl font-bold text-[#0f2b3d] mb-4 mt-2">Standard</h4>
            
            <div className="mb-2">
              <span className="text-4xl font-extrabold text-[#0f2b3d]">₹399.00</span>
              <span className="text-gray-500 font-medium"> /monthly</span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-yellow-50 text-yellow-600 text-xs font-bold rounded-full ml-3 align-text-top border border-yellow-100">
                <i className="fas fa-percent"></i> Save 15% yearly
              </div>
            </div>

            <div className="mb-4 text-gray-500 font-medium text-sm">
              <span className="text-lg font-bold text-gray-400 line-through mr-2">₹4,788.00</span> 
              <span className="text-xl font-bold text-[#0f2b3d]">₹1,999.00</span> /yearly
            </div>

            <div className="mb-6">
              <a 
                href="https://business.whatsapp.com/products/platform-pricing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1.5"
              >
                <i className="fas fa-external-link-alt"></i> + WhatsApp Cloud Messaging Charges
              </a>
            </div>

            <hr className="border-gray-100 mb-6" />

            <ul className="flex-1 space-y-4 mb-8">
              {standardFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-600">
                  <i className="fas fa-check-circle text-teal-500 mt-1"></i>
                  <span>
                    {feature.value && <strong className="text-[#0f2b3d] mr-1">{feature.value}</strong>}
                    {feature.name}
                  </span>
                </li>
              ))}
            </ul>

            <Link 
              href="/register" 
              className="w-full py-4 px-6 bg-teal-500 hover:bg-teal-600 text-white text-center font-bold rounded-xl transition-all shadow-lg hover:shadow-teal-500/30 flex items-center justify-center gap-2"
            >
              Start Free Trial <i className="fas fa-arrow-right"></i>
            </Link>
          </div>

        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm font-medium text-gray-500">
            <span className="flex items-center gap-2"><i className="fas fa-lock text-gray-400"></i> 256-bit SSL Secure</span>
            <span className="flex items-center gap-2"><i className="fas fa-credit-card text-gray-400"></i> No Hidden Fees</span>
            <span className="flex items-center gap-2"><i className="fas fa-sync-alt text-gray-400"></i> Cancel Anytime</span>
            <span className="flex items-center gap-2"><i className="fab fa-whatsapp text-green-500"></i> Meta Official Partner</span>
            <span className="flex items-center gap-2"><i className="fas fa-headset text-gray-400"></i> 24/7 Support</span>
          </div>
        </div>

      </div>
    </section>
  );
}