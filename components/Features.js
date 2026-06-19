import React from "react";

export default function Features() {
  const featuresList = [
    {
      title: "Embedded Signup",
      description: "Integrated Embedded Signup System that makes Customers Onboard easy",
      icon: "fab fa-facebook",
    },
    {
      title: "Integrated WhatsApp Chat",
      description: "Seamlessly connect with customers through Integrated WhatsApp Chat.",
      icon: "fas fa-comments",
    },
    {
      title: "QR Code",
      description: "Quickly generate QR codes for your WhatsApp phone number with ease.",
      icon: "fas fa-qrcode",
    },
    {
      title: "Chat-Bot",
      description: "Engage customers 24/7 with intelligent chatbot responses effortlessly.",
      icon: "fas fa-brain",
    },
    {
      title: "Manage Templates",
      description: "Create and manage templates directly in the app without visiting Meta.",
      icon: "fa fa-layer-group",
    },
    {
      title: "Flow Maker",
      description: "Build Bot conversions easily and effectively with Advance Flow Maker.",
      icon: "fas fa-random",
    },
    {
      title: "API Integration",
      description: "APIs enable smooth integration and data sharing between services.",
      icon: "fas fa-cogs",
    },
    {
      title: "Live Analysis",
      description: "Get Realtime Analysis and Status of your Campaigns and Messages.",
      icon: "fas fa-chart-line",
    },
    {
      title: "Assign Agents",
      description: "Assign Chats to Agents or your Team Members with Agents Feature.",
      icon: "fas fa-user-tie",
    },
    {
      title: "Campaigns",
      description: "Effortlessly manage your campaigns with Campaign Management Feature.",
      icon: "fa fa-rocket",
    },
  ];

  return (
    <section id="features-modern" className="py-20 bg-[#fafcff]">
      {/* Custom Keyframes for the Gentle Pop Animation */}
      <style>{`
        @keyframes gentlePop {
          0% {
            opacity: 0;
            transform: scale(0.9) translateY(10px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-gentle-pop {
          animation: gentlePop 1s ease-out forwards;
          opacity: 0; /* Ensures it stays hidden before the animation starts */
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 font-semibold text-lg mb-4">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#0f2b3d] mb-4 tracking-tight">
            Features of <span className="text-teal-500">GreenPing</span>
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Everything you need to scale WhatsApp communication
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className="group flex items-start gap-5 p-8 bg-white rounded-3xl cursor-pointer
                         shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Feature Icon */}
              <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl text-2xl
                              bg-[#f0f4f8] text-[#0f2b3d] 
                              transition-colors duration-300 ease-in-out
                              group-hover:bg-[#0f2b3d] group-hover:text-[#f0f4f8]">
                <i className={feature.icon}></i>
              </div>

              {/* Feature Text */}
              <div>
                <h3 
                  className="text-xl font-bold mb-2 tracking-wide 
                             bg-[linear-gradient(120deg,#0f2b3d,#2dd4bf)] bg-clip-text text-transparent
                             animate-gentle-pop"
                  style={{ animationDelay: `${index * 100}ms` }} // Staggered animation effect
                >
                  {feature.title}
                </h3>
                <p className="text-[#1e4a6b] leading-relaxed text-[15px] pr-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}