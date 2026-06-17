"use client";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fe] py-10 pb-20 border-t-2 border-[#17a2b8]">
      <div className="container mx-auto px-4 flex justify-center">
        {/* Main Card Wrapper */}
        <div className="w-full max-w-4xl bg-white shadow-sm border border-gray-100 rounded-sm overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-gray-50/50 border-b border-gray-100 py-8 px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#32325d]">Privacy Policy</h1>
          </div>

          {/* Card Body (Policy Content) */}
          <div className="p-6 md:p-12 text-[#525f7f] text-[15px] leading-relaxed">
            
            <p className="font-semibold text-gray-700 mb-6">
              Last Updated: May 12, 2026
            </p>

            <p className="mb-8">
              At GreenPing, we are committed to protecting the privacy, confidentiality, and security of our users, vendors, customers, and visitors. This Privacy Policy explains how we collect, use, process, store, and safeguard your information when you use our platform, services, websites, APIs, and related tools.
              <br /><br />
              By accessing or using GreenPing services, you agree to the practices described in this Privacy Policy.
            </p>

            <hr className="border-gray-200 my-8" />

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">1. Introduction</h2>
            <p className="mb-6">
              GreenPing provides WhatsApp marketing, automation, CRM, communication, and business management solutions powered through official integrations such as WhatsApp Cloud API and Meta Platforms. We respect your privacy and are committed to handling your data responsibly, transparently, and securely.
            </p>

            <hr className="border-gray-200 my-8" />

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-[#32325d] mt-6 mb-3">A. Personal Information</h3>
            <p className="mb-3">During registration or use of our platform, we may collect:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Full Name</li>
              <li>Email Address</li>
              <li>Mobile Number</li>
              <li>Business Name</li>
              <li>Company Information</li>
              <li>Billing Details</li>
              <li>Payment Information</li>
              <li>Profile Details</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#32325d] mt-6 mb-3">B. Business & Operational Data</h3>
            <p className="mb-3">While using GreenPing services, we may collect:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>WhatsApp Business Account details</li>
              <li>Campaign information</li>
              <li>Templates and automation data</li>
              <li>Contact lists uploaded by users</li>
              <li>Team member or employee data</li>
              <li>Customer communication data</li>
              <li>CRM and business management information</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#32325d] mt-6 mb-3">C. Technical & Usage Data</h3>
            <p className="mb-3">We may automatically collect:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>IP Address</li>
              <li>Browser type and version</li>
              <li>Device information</li>
              <li>Operating system</li>
              <li>Login activity</li>
              <li>Usage analytics</li>
              <li>Session information</li>
              <li>Error logs</li>
              <li>Cookies and tracking data</li>
            </ul>
            <p className="mb-6">This data helps us improve performance, security, and user experience.</p>

            <hr className="border-gray-200 my-8" />

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">3. How We Use Your Data</h2>
            
            <h3 className="text-lg font-semibold text-[#32325d] mt-6 mb-3">Service Delivery</h3>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Providing WhatsApp marketing and automation services</li>
              <li>Managing user accounts and subscriptions</li>
              <li>Enabling CRM and communication features</li>
              <li>Processing transactions and payments</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#32325d] mt-6 mb-3">Platform Improvement</h3>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Improving platform performance</li>
              <li>Enhancing security systems</li>
              <li>Fixing technical issues</li>
              <li>Developing new features</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#32325d] mt-6 mb-3">Communication</h3>
            <p className="mb-3">We may contact users regarding:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Account notifications</li>
              <li>Security alerts</li>
              <li>Billing updates</li>
              <li>Platform announcements</li>
              <li>Technical support</li>
              <li>Service-related communications</li>
            </ul>

            <h3 className="text-lg font-semibold text-[#32325d] mt-6 mb-3">Legal & Compliance</h3>
            <p className="mb-3">We may process data to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Comply with legal obligations</li>
              <li>Enforce platform policies</li>
              <li>Prevent fraud or misuse</li>
              <li>Meet Meta and WhatsApp policy requirements</li>
            </ul>

            <hr className="border-gray-200 my-8" />

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">4. End-User Data Responsibility</h2>
            <p className="mb-3">Users and vendors are solely responsible for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Obtaining customer consent before messaging</li>
              <li>Managing customer data lawfully</li>
              <li>Following local privacy regulations</li>
              <li>Ensuring ethical communication practices</li>
            </ul>
            <p className="mb-6">GreenPing does not take responsibility for user-uploaded customer data or messaging activities conducted through the platform.</p>

            <hr className="border-gray-200 my-8" />

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">5. Data Sharing & Third-Party Services</h2>
            <p className="mb-4 font-semibold text-[#32325d]">GreenPing does NOT sell, rent, or trade personal information.</p>
            <p className="mb-3">However, we may share information with trusted third-party providers for operational purposes, including:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>WhatsApp Cloud API</li>
              <li>Meta Platforms</li>
              <li>Payment gateways</li>
              <li>Cloud hosting providers</li>
              <li>Analytics services</li>
              <li>Security and monitoring services</li>
            </ul>
            <p className="mb-4">All third-party providers are required to maintain confidentiality and protect user data.</p>
            <p className="mb-3">We may also disclose information if:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Required by law</li>
              <li>Ordered by government authorities</li>
              <li>Necessary to protect legal rights</li>
              <li>Required to prevent fraud or abuse</li>
            </ul>

            <hr className="border-gray-200 my-8" />

            {/* Additional Sections Summarized nicely */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">6. Cookies & Tracking Technologies</h2>
            <p className="mb-6">GreenPing may use cookies and similar technologies to maintain user sessions, remember preferences, improve website functionality, analyze user behavior, and enhance security. Users can disable cookies through browser settings, although some features may not function properly.</p>

            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">7. Data Security</h2>
            <p className="mb-3">We implement industry-standard security measures, including SSL/HTTPS encryption, secure server infrastructure, access controls, authentication systems, activity monitoring, and firewall protections. While we take reasonable measures to secure data, no online platform can guarantee absolute security. Users are also responsible for protecting account credentials, preventing unauthorized access, and using secure passwords.</p>

            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">8. Data Retention</h2>
            <p className="mb-6">We retain information only as long as necessary to provide services, maintain business operations, comply with legal obligations, resolve disputes, and enforce agreements. Data may be deleted or anonymized after account closure, subject to applicable laws and operational requirements.</p>

            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">9. User Rights</h2>
            <p className="mb-3">Depending on applicable laws, users may have the right to:</p>
            <ul className="list-disc pl-6 mb-6 space-y-1">
              <li>Access their personal data</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of data</li>
              <li>Request data export</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p className="mb-6">For any privacy-related requests, users may contact our support team.</p>

            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">10. WhatsApp & Meta Compliance</h2>
            <p className="mb-6">GreenPing integrates with official Meta and WhatsApp services. Users must comply with WhatsApp Business Policies, Meta Platform Policies, and local communication and privacy laws. GreenPing is not responsible for WhatsApp number bans, Meta account restrictions, template rejection, or messaging limitations caused by user activity.</p>

            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">11. Children’s Privacy</h2>
            <p className="mb-6">GreenPing services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors.</p>

            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">12. International Data Processing</h2>
            <p className="mb-6">By using GreenPing, users understand that data may be processed or stored on servers located in different regions or countries depending on infrastructure and service providers.</p>

            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">13. Changes to this Privacy Policy</h2>
            <p className="mb-6">GreenPing may update this Privacy Policy periodically. Updated versions will become effective immediately upon publication on the platform. Continued use of the platform after updates indicates acceptance of the revised Privacy Policy.</p>

            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">14. Limitation of Liability</h2>
            <p className="mb-6">GreenPing shall not be liable for unauthorized access caused by user negligence, third-party service failures, WhatsApp or Meta platform restrictions, data loss due to external attacks, or indirect/consequential damages. Users use the platform at their own risk.</p>

            <hr className="border-gray-200 my-8" />

            {/* Contact Section */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">15. Contact Information</h2>
            <p className="mb-4">For questions, concerns, or privacy-related requests, please contact:</p>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
              <p className="font-bold text-[#32325d] mb-2">Team GreenPing</p>
              <p className="flex items-center gap-2 mb-1"><i className="fa fa-envelope text-[#17a2b8]"></i> <a href="mailto:info@greenping.in" className="text-blue-600 hover:underline">info@greenping.in</a></p>
              <p className="flex items-center gap-2 mb-4"><i className="fa fa-globe text-[#17a2b8]"></i> <a href="https://greenping.in" className="text-blue-600 hover:underline">https://greenping.in</a></p>
              <p className="text-sm"><strong>Address:</strong><br />Shop no 15 Sahu Complex Magal Bhawan Raipur 492001</p>
            </div>

            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">16. Your Consent</h2>
            <p className="mb-4">By using GreenPing, creating an account, or accessing our services, you acknowledge that:</p>
            <ul className="list-none space-y-2 mb-8">
              <li><i className="fa fa-check text-green-500 mr-2"></i> You have read this Privacy Policy</li>
              <li><i className="fa fa-check text-green-500 mr-2"></i> You understand how your data is collected and used</li>
              <li><i className="fa fa-check text-green-500 mr-2"></i> You agree to the practices described in this policy</li>
            </ul>

            <p className="text-lg font-medium text-center text-[#32325d] mt-12 mb-4">
              Thank you for trusting GreenPing 🚀
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}