"use client"; // Required because we are using interactive state (useState)

import React, { useState } from "react";

export default function FAQ() {
  // State to track which FAQ is currently open (null means all are closed)
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function
  const toggleFAQ = (index) => {
    // If clicking the already open one, close it. Otherwise, open the new one.
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ Data Array - Easy to manage and update
  const faqs = [
    {
      question: "How can I integrate WhatsApp with my business account?",
      answer: "To integrate WhatsApp with your business account, simply sign up for our app, connect your WhatsApp Business Account, and follow the step-by-step guide provided in the dashboard. The integration works directly with the WhatsApp Cloud API."
    },
    {
      question: "Can I manage multiple phone numbers on the same WhatsApp Business Account?",
      answer: "Yes, our app supports managing multiple phone numbers for the same WhatsApp Business Account, enabling you to handle communication from different channels in a single interface."
    },
    {
      question: "How do I create and manage message templates?",
      answer: "You can easily create and manage WhatsApp message templates directly within our app, without needing to visit Meta platform. Simply navigate to the templates section, create your template, and use it in your campaigns."
    },
    {
      question: "What kind of data analytics does the app provide?",
      answer: "The app provides real-time analytics on message delivery, open rates, response times, and user engagement. You can track the performance of your WhatsApp campaigns and optimize them based on these insights."
    },
    {
      question: "Is my data secure when using this app?",
      answer: "Yes, we prioritize security and use industry-standard encryption to protect your data. All communications through the app are fully compliant with WhatsApp privacy and security policies."
    }
  ];

  return (
    <section className="py-10 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2b3d] mb-4 tracking-tight">
            Frequently Asked <span className="text-teal-500">Questions</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Everything you need to know about our platform
          </p>
        </div>

        {/* FAQ Accordion Container */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div 
                  key={index} 
                  className={`border border-gray-200 rounded-2xl transition-all duration-300 overflow-hidden ${
                    isOpen ? "bg-white shadow-md border-teal-200" : "bg-gray-50 hover:bg-white hover:border-gray-300"
                  }`}
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className={`text-lg font-bold pr-4 ${isOpen ? "text-teal-600" : "text-[#0f2b3d]"}`}>
                      {faq.question}
                    </span>
                    
                    {/* Animated Plus/Minus Icon */}
                    <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen ? "bg-teal-100 text-teal-600" : "bg-gray-200 text-gray-500"
                    }`}>
                      <i className={`fas ${isOpen ? "fa-minus" : "fa-plus"}`}></i>
                    </div>
                  </button>

                  {/* Smooth Dropdown Answer Panel */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 pt-0 text-gray-500 leading-relaxed sm:pr-16 text-[15px]">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}