"use client";

export default function DataDeletionPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fe] py-10 pb-20 border-t-2 border-[#17a2b8]">
      <div className="container mx-auto px-4 flex justify-center">
        {/* Main Card Wrapper */}
        <div className="w-full max-w-4xl bg-white shadow-sm border border-gray-100 rounded-sm overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-gray-50/50 border-b border-gray-100 py-8 px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#32325d]">Data Deletion</h1>
          </div>

          {/* Card Body (Content) */}
          <div className="p-6 md:p-12 text-[#525f7f] text-[15px] leading-relaxed">
            
            <h2 className="text-xl font-bold text-[#32325d] mb-2">
              Data Deletion Instructions
            </h2>
            <p className="font-semibold text-gray-700 mb-6">
              Last Updated: May 14, 2026
            </p>

            <p className="mb-8">
              GreenPing respects the privacy and data rights of all users. Users may request deletion of their account and associated personal data at any time.
            </p>

            <hr className="border-gray-100 my-8" />

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">How to Request Data Deletion</h2>
            <p className="mb-4">
              If you would like to delete your account or request removal of your personal information from GreenPing, please contact us using the details below:
            </p>
            <p className="mb-6 font-medium">
              <i className="fa fa-envelope text-[#17a2b8] mr-2"></i> 
              Email: <a href="mailto:info@greenping.in" className="text-blue-600 hover:underline">info@greenping.in</a>
            </p>
            <p className="mb-3">Please include the following information in your request:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Full Name</li>
              <li>Registered Email Address</li>
              <li>Registered Mobile Number</li>
              <li>Business Name (if applicable)</li>
              <li>Reason for deletion request (optional)</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">What Happens After Your Request</h2>
            <p className="mb-3">Once we receive your request:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>We will verify your identity for security purposes.</li>
              <li>Your account and associated data will be reviewed for deletion.</li>
              <li>Certain information may be retained if required by law, security obligations, fraud prevention, dispute resolution, or regulatory compliance.</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">Processing Time</h2>
            <p className="mb-6">
              Most deletion requests are processed within <strong>7 to 30 business days</strong>.
            </p>

            <hr className="border-gray-100 my-8" />

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">Data That May Be Retained</h2>
            <p className="mb-3">GreenPing may retain limited information where necessary for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Legal compliance</li>
              <li>Security and fraud prevention</li>
              <li>Financial record keeping</li>
              <li>Enforcement of agreements</li>
              <li>Resolving disputes</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">Third-Party Services</h2>
            <p className="mb-6">
              If your data has been shared with third-party providers such as Meta Platforms or WhatsApp Cloud API services, their independent data retention and deletion policies may also apply.
            </p>

            <hr className="border-gray-100 my-8" />

            {/* Contact Section */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">Contact Information</h2>
            <p className="mb-4">For all privacy or data deletion related requests, contact:</p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
              <p className="font-bold text-[#32325d] mb-2">Team GreenPing</p>
              <p className="flex items-center gap-2 mb-1"><i className="fa fa-envelope text-[#17a2b8]"></i> <a href="mailto:info@greenping.in" className="text-blue-600 hover:underline">info@greenping.in</a></p>
              <p className="flex items-center gap-2 mb-4"><i className="fa fa-globe text-[#17a2b8]"></i> <a href="https://greenping.in" className="text-blue-600 hover:underline">https://greenping.in</a></p>
              <p className="text-sm"><strong>Address:</strong><br />Shop no 15 Sahu Complex Magal Bhawan Raipur 492001</p>
            </div>

            <p className="text-lg font-medium text-center text-[#32325d] mt-12 mb-4 px-4 py-4 bg-blue-50/50 rounded border border-blue-100">
              By using GreenPing services, users acknowledge and agree to these data deletion procedures.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}