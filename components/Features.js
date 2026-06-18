import React from "react";

export default function Features() {
  const featuresList = [
    {
      title: 'Embedded <span class="text-teal-500">Signup</span>',
      description: "Integrated Embedded Signup System that makes Customers Onboard easy",
      icon: "fab fa-facebook",
    },
    {
      title: 'Integrated <span class="text-teal-500">WhatsApp Chat</span>',
      description: "Seamlessly connect with customers through Integrated WhatsApp Chat.",
      icon: "fas fa-comments",
    },
    {
      title: '<span class="text-teal-500">QR Code</span>',
      description: "Quickly generate QR codes for your WhatsApp phone number with ease.",
      icon: "fas fa-qrcode",
    },
    {
      title: '<span class="text-teal-500">Chat-Bot</span>',
      description: "Engage customers 24/7 with intelligent chatbot responses effortlessly.",
      icon: "fas fa-brain",
    },
    {
      title: 'Manage <span class="text-teal-500">Templates</span>',
      description: "Create and manage templates directly in the app without visiting Meta.",
      icon: "fa fa-layer-group",
    },
    {
      title: '<span class="text-teal-500">Flow Maker</span>',
      description: "Build Bot conversions easily and effectively with Advance Flow Maker.",
      icon: "fas fa-random",
    },
    {
      title: 'API <span class="text-teal-500">Integration</span>',
      description: "APIs enable smooth integration and data sharing between services.",
      icon: "fas fa-cogs",
    },
    {
      title: 'Live <span class="text-teal-500">Analysis</span>',
      description: "Get Realtime Analysis and Status of your Campaigns and Messages.",
      icon: "fas fa-chart-line",
    },
    {
      title: 'Assign <span class="text-teal-500">Agents</span>',
      description: "Assign Chats to Agents or your Team Members with Agents Feature.",
      icon: "fas fa-user-tie",
    },
    {
      title: '<span class="text-teal-500">Campaigns</span>',
      description: "Effortlessly manage your campaigns with Campaign Management Feature.",
      icon: "fa fa-rocket",
    },
  ];

  return (
    <section id="features-modern" className="py-20 bg-[#fafcff]">
      <style>{`
        .feature-card .feature-icon {
          background-color: #f0f4f8;
          color: #0f2b3d;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .feature-card:hover .feature-icon {
          background-color: #0f2b3d;
          color: #f0f4f8;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-teal-50 text-teal-600 font-semibold text-sm mb-4">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0f2b3d] mb-4 tracking-tight">
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
              className="feature-card flex items-start gap-5 p-8 bg-white rounded-3xl cursor-pointer
                         shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                         transition-all duration-300 ease-in-out
                         hover:-translate-y-2 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
            >
              {/* Feature Icon */}
              <div className="feature-icon flex-shrink-0 w-14 h-14 flex items-center justify-center rounded-2xl text-2xl">
                <i className={feature.icon}></i>
              </div>

              {/* Feature Text */}
              <div>
                <h3
                  className="text-xl font-bold text-[#0f2b3d] mb-2 tracking-wide"
                  dangerouslySetInnerHTML={{ __html: feature.title }}
                />
                <p className="text-gray-500 leading-relaxed text-[15px] pr-4">
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