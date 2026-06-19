export default function Features() {
  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl font-bold">Features Page</h1>
      <p className="mt-4">Hello</p>
    </div>
  );


 }


//export default function Features() {
//   // Features Data Array - Edit your features here easily!
//   // I have used HTML for titles so you can highlight words with the same green color.
//   const featuresList = [
//     {
//       title: 'Embedded <span class="text-green-600">Signup</span>',
//       description: "Integrated Embedded Signup System that makes Customers Onboard easy.",
//       icon: "fab fa-facebook",
//       iconBg: "bg-blue-100/70",
//       iconColor: "text-blue-700"
//     },
//     {
//       title: 'Integrated <span class="text-green-600">WhatsApp Chat</span>',
//       description: "Seamlessly connect with customers through Integrated WhatsApp Chat.",
//       icon: "fas fa-comments",
//       iconBg: "bg-gray-100",
//       iconColor: "text-gray-700"
//     },
//     {
//       title: '<span class="text-green-600">QR Code</span>',
//       description: "Quickly generate QR codes for your WhatsApp phone number with ease.",
//       icon: "fas fa-qrcode",
//       iconBg: "bg-gray-100",
//       iconColor: "text-gray-700"
//     },
//     {
//       title: '<span class="text-green-600">Chat-Bot</span>',
//       description: "Engage customers 24/7 with intelligent chatbot responses effortlessly.",
//       icon: "fas fa-brain",
//       iconBg: "bg-gray-100",
//       iconColor: "text-gray-700"
//     },
//     {
//       title: 'Manage <span class="text-green-600">Templates</span>',
//       description: "Create and manage templates directly in the app without visiting Meta.",
//       icon: "fa fa-layer-group",
//       iconBg: "bg-gray-100",
//       iconColor: "text-gray-700"
//     },
//     {
//       title: '<span class="text-green-600">Flow Maker</span>',
//       description: "Build Bot conversions easily and effectively with Advance Flow Maker.",
//       icon: "fas fa-random",
//       iconBg: "bg-gray-100",
//       iconColor: "text-gray-700"
//     },
//     {
//       title: 'API <span class="text-green-600">Integration</span>',
//       description: "APIs enable smooth integration and data sharing between services.",
//       icon: "fas fa-cogs",
//       iconBg: "bg-gray-100",
//       iconColor: "text-gray-700"
//     },
//     {
//       title: 'Live <span class="text-green-600">Analysis</span>',
//       description: "Get Realtime Analysis and Status of your Campaigns and Messages.",
//       icon: "fas fa-chart-line",
//       iconBg: "bg-gray-100",
//       iconColor: "text-gray-700"
//     },
//     {
//       title: 'Assign <span class="text-green-600">Agents</span>',
//       description: "Assign Chats to Agents or your Team Members with Agents Feature.",
//       icon: "fas fa-user-tie",
//       iconBg: "bg-gray-100",
//       iconColor: "text-gray-700"
//     },
//     {
//       title: '<span class="text-green-600">Campaigns</span>',
//       description: "Effortlessly manage your campaigns with Campaign Management Feature.",
//       icon: "fa fa-rocket",
//       iconBg: "bg-gray-100",
//       iconColor: "text-gray-700"
//     },
//   ];

//   return (
//     <section id="features-modern" className="py-10 bg-gray-50 border-t border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
//         {/* Section Header */}
//         <div className="text-center max-w-3xl mx-auto mb-16">
//           <span className="inline-block px-4 py-1.5 rounded-full bg-green-100 text-green-700 font-semibold text-xs mb-4">
//             Core Capabilities
//           </span>
//           <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
//             Features of <span className="text-green-600">GreenPing</span>
//           </h2>
//           <p className="text-lg text-gray-600 leading-relaxed">
//             Everything you need to scale WhatsApp communication
//           </p>
//         </div>

//         {/* Features Grid: 1 column on mobile, 2 columns on tablet/desktop */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
//           {featuresList.map((feature, index) => (
//             // This div is the main card and holds the hover effect
//             <div 
//               key={index} 
//               className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
//             >
//               {/* Feature Icon */}
//               <div className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full ${feature.iconBg} ${feature.iconColor} text-xl`}>
//                 <i className={feature.icon}></i>
//               </div>
              
//               {/* Feature Text */}
//               <div>
//                 <h3 
//                   className="text-xl font-bold text-gray-900 mb-2"
//                   // Using dangerouslySetInnerHTML to render the highlighted parts in the title
//                   dangerouslySetInnerHTML={{ __html: feature.title }}
//                 />
//                 <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }