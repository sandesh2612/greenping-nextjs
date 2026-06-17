"use client";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fe] py-10 pb-20 border-t-2 border-[#17a2b8]">
      <div className="container mx-auto px-4 flex justify-center">
        {/* Main Card Wrapper */}
        <div className="w-full max-w-4xl bg-white shadow-sm border border-gray-100 rounded-sm overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-gray-50/50 border-b border-gray-100 py-8 px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#32325d]">Terms And Conditions</h1>
          </div>

          {/* Card Body (Terms Content) */}
          <div className="p-6 md:p-12 text-[#525f7f] text-[15px] leading-relaxed">
            
            <h2 className="text-xl font-bold text-[#32325d] mb-2">
              GreenPing Vendor Responsibilities & Compliance Terms
            </h2>
            <p className="font-semibold text-gray-700 mb-6">
              Last Updated: May 12, 2026
            </p>

            <p className="mb-8">
              These terms define the responsibilities, compliance requirements, and obligations of all users, vendors, and businesses using the GreenPing platform. By using GreenPing, you agree to follow these rules strictly.
            </p>

            <hr className="border-gray-200 my-8" />

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">1. User Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Users must use the GreenPing platform only for lawful business purposes.</li>
              <li>All users must comply with <strong>Meta (WhatsApp) Business Policies</strong> and guidelines at all times.</li>
              <li>
                Users are strictly prohibited from engaging in:
                <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Fraudulent activities</li>
                  <li>Fake or misleading marketing</li>
                  <li>Spam messaging</li>
                  <li>Deceptive communication</li>
                  <li>Illegal promotions or services</li>
                </ul>
              </li>
              <li>Users are responsible for all activities performed under their account, including team members and sub-users.</li>
              <li>Any misuse of the platform may result in immediate suspension or permanent termination of the account.</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">2. Account Security</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Users are fully responsible for maintaining the confidentiality of their account credentials.</li>
              <li>Sharing login credentials with unauthorized persons is strictly prohibited.</li>
              <li>
                Users must immediately report any:
                <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Unauthorized access</li>
                  <li>Suspicious activity</li>
                  <li>Security breach</li>
                </ul>
              </li>
              <li>GreenPing shall not be responsible for any loss caused due to user negligence or weak account security practices.</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">3. Payments and Billing</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Users agree to pay all subscription fees, service charges, and applicable taxes on time.</li>
              <li>
                Failure to make timely payments may result in:
                <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Service restriction</li>
                  <li>Temporary suspension</li>
                  <li>Permanent account deactivation</li>
                </ul>
              </li>
              <li>All payments are generally non-refundable unless explicitly stated otherwise.</li>
              <li>GreenPing reserves the right to modify pricing, plans, or billing structures at any time with prior notice.</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">4. Data Protection & User Responsibility</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Users must ensure that all customer data uploaded or processed on the platform is collected legally.</li>
              <li>It is mandatory to obtain proper <strong>consent from end-users</strong> before sending any WhatsApp messages.</li>
              <li>
                Users must comply with all applicable:
                <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Data protection laws</li>
                  <li>Privacy regulations</li>
                  <li>Local communication laws</li>
                </ul>
              </li>
              <li>GreenPing acts only as a technology provider and is not responsible for misuse of customer data by users.</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">5. Compliance with Meta (WhatsApp) Policies</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                Users must strictly follow all <strong>Meta WhatsApp Business Policies</strong>, including:
                <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Messaging guidelines</li>
                  <li>Template approval rules</li>
                  <li>Opt-in/opt-out requirements</li>
                  <li>Spam control regulations</li>
                </ul>
              </li>
              <li>
                Any violation of Meta policies may result in:
                <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                  <li>WhatsApp number suspension</li>
                  <li>API access restriction</li>
                  <li>Message delivery failure</li>
                </ul>
              </li>
              <li>GreenPing is not responsible for any account bans or restrictions imposed by Meta due to user actions.</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">6. Platform Usage Policy</h2>
            <p className="mb-3 font-semibold text-[#32325d]">Users must NOT use GreenPing for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Sending unsolicited or bulk spam messages</li>
              <li>Scamming or phishing activities</li>
              <li>Illegal product or service promotion</li>
              <li>Harassment or abusive communication</li>
              <li>Sending harmful links or malware</li>
              <li>Violating intellectual property rights</li>
              <li>Misusing automation tools against WhatsApp guidelines</li>
            </ul>
            <p className="mb-6">GreenPing reserves the right to monitor and take action against suspicious activities to maintain platform safety.</p>

            <hr className="border-gray-100 my-8" />

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">7. Service Limitations</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>GreenPing depends on third-party services such as WhatsApp Cloud API and Meta infrastructure.</li>
              <li>Service interruptions, delays, or failures may occur due to external providers.</li>
              <li>GreenPing does not guarantee 100% uptime or uninterrupted service.</li>
              <li>Users agree that performance may vary depending on third-party APIs and network conditions.</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 8 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">8. Termination & Suspension</h2>
            <p className="mb-3 font-semibold text-[#32325d]">GreenPing may suspend or terminate user accounts without prior notice if:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Terms are violated</li>
              <li>Spam or fraud is detected</li>
              <li>Payment is not received</li>
              <li>Meta policy violations occur</li>
              <li>Platform misuse is identified</li>
            </ul>
            <p className="mb-6 text-red-500 font-medium">Serious violations may result in permanent ban without refund.</p>

            <hr className="border-gray-100 my-8" />

            {/* Section 9 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">9. Intellectual Property</h2>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>All software, branding, design, and system architecture of GreenPing belong to the company.</li>
              <li>
                Users are not allowed to:
                <ul className="list-circle pl-6 mt-2 space-y-1 text-gray-600">
                  <li>Copy platform code</li>
                  <li>Reverse engineer systems</li>
                  <li>Resell or replicate services without permission</li>
                </ul>
              </li>
              <li>Unauthorized use of GreenPing branding or systems is strictly prohibited.</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 10 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">10. Updates to Terms</h2>
            <p className="mb-6">
              GreenPing reserves the right to update or modify these terms at any time. Continued use of the platform after updates will be considered acceptance of the revised terms.
            </p>

            <hr className="border-gray-200 my-8" />

            {/* Section 11 - Final Agreement */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">11. Final Agreement</h2>
            <p className="mb-4 font-medium text-[#32325d]">By using GreenPing, you confirm that:</p>
            <ul className="list-none space-y-3 mb-8 bg-gray-50 p-6 rounded-lg border border-gray-100">
              <li className="flex items-start">
                <i className="fa fa-check text-[#4caf50] mt-1 mr-3 text-lg"></i>
                <span>You understand and accept all responsibilities</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check text-[#4caf50] mt-1 mr-3 text-lg"></i>
                <span>You will follow WhatsApp and Meta policies</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check text-[#4caf50] mt-1 mr-3 text-lg"></i>
                <span>You will use the platform ethically and legally</span>
              </li>
              <li className="flex items-start">
                <i className="fa fa-check text-[#4caf50] mt-1 mr-3 text-lg"></i>
                <span>You are responsible for your account activities</span>
              </li>
            </ul>

            <p className="text-red-500 font-medium mb-8">
              Failure to comply may result in action against your account.
            </p>

            <p className="text-lg font-medium text-center text-[#32325d] mt-12 mb-4">
              Thank you for using GreenPing 🚀
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}