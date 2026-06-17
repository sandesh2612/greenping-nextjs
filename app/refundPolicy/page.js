"use client";

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fe] py-10 pb-20 border-t-2 border-[#17a2b8]">
      <div className="container mx-auto px-4 flex justify-center">
        {/* Main Card Wrapper */}
        <div className="w-full max-w-4xl bg-white shadow-sm border border-gray-100 rounded-sm overflow-hidden">
          
          {/* Card Header */}
          <div className="bg-gray-50/50 border-b border-gray-100 py-8 px-6 text-center">
            <h1 className="text-3xl md:text-4xl font-bold text-[#32325d]">Refund Policy</h1>
          </div>

          {/* Card Body (Content) */}
          <div className="p-6 md:p-12 text-[#525f7f] text-[15px] leading-relaxed">
            
            <p className="font-semibold text-gray-700 mb-6">
              Last Updated: May 14, 2026
            </p>

            <p className="mb-4">
              Thank you for choosing GreenPing.
            </p>
            <p className="mb-8">
              This Refund Policy explains the terms regarding payments, subscriptions, cancellations, and refunds for services provided by GreenPing.
            </p>

            <hr className="border-gray-100 my-8" />

            {/* Section 1 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">1. General Policy</h2>
            <p className="mb-4">
              GreenPing provides digital software services including WhatsApp marketing, CRM, automation, communication, and business management solutions.
            </p>
            <p className="mb-6 font-semibold text-[#32325d]">
              Due to the nature of digital products and software services, all payments made to GreenPing are generally non-refundable unless otherwise stated in this policy.
            </p>

            <hr className="border-gray-100 my-8" />

            {/* Section 2 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">2. Subscription Services</h2>
            <p className="mb-3">Users may purchase subscription plans or service packages to access GreenPing features. Subscriptions may include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>WhatsApp marketing services</li>
              <li>CRM features</li>
              <li>Automation tools</li>
              <li>Messaging services</li>
              <li>Business management features</li>
              <li>API integrations</li>
            </ul>
            <p className="mb-6">Access to paid services is activated after successful payment confirmation.</p>

            <hr className="border-gray-100 my-8" />

            {/* Section 3 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">3. No Refund After Service Activation</h2>
            <p className="mb-3">Once any of the following occurs, refunds may not be provided:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Account activation</li>
              <li>Subscription activation</li>
              <li>API setup completion</li>
              <li>WhatsApp integration setup</li>
              <li>Usage of platform services</li>
              <li>Consumption of credits or messaging balance</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 4 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">4. Eligible Refund Situations</h2>
            <p className="mb-3">Refunds may be considered only under the following conditions:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Duplicate payment</li>
              <li>Technical failure caused solely by GreenPing</li>
              <li>Payment charged but service not activated</li>
              <li>Billing error verified by our team</li>
            </ul>
            <p className="mb-6">Approved refunds will be processed to the original payment method where possible.</p>

            <hr className="border-gray-100 my-8" />

            {/* Section 5 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">5. Non-Refundable Situations</h2>
            <p className="mb-3">Refunds will not be issued for:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>User policy violations</li>
              <li>WhatsApp or Meta account bans</li>
              <li>Template rejection by Meta</li>
              <li>Messaging restrictions caused by user behavior</li>
              <li>User inactivity</li>
              <li>Change of mind after purchase</li>
              <li>Failure to use purchased services</li>
              <li>Third-party platform downtime</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 6 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">6. Trial & Demo Services</h2>
            <p className="mb-6">
              If GreenPing provides free trials, demo access, or testing environments, users are encouraged to evaluate the platform before purchasing any paid plan.
            </p>

            <hr className="border-gray-100 my-8" />

            {/* Section 7 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">7. Cancellation Policy</h2>
            <p className="mb-4">Users may cancel subscriptions at any time.</p>
            <p className="mb-6">
              Cancellation will stop future billing cycles but will not automatically generate refunds for previous payments already processed.
            </p>

            <hr className="border-gray-100 my-8" />

            {/* Section 8 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">8. Chargebacks & Payment Disputes</h2>
            <p className="mb-3">Users are encouraged to contact GreenPing support before initiating chargebacks or payment disputes. Fraudulent chargebacks may result in:</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>Account suspension</li>
              <li>Permanent account termination</li>
              <li>Restriction of future services</li>
            </ul>

            <hr className="border-gray-100 my-8" />

            {/* Section 9 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">9. Processing Time</h2>
            <p className="mb-6">
              If a refund is approved, processing may take approximately <strong>7–15 business days</strong> depending on the payment provider or banking system.
            </p>

            <hr className="border-gray-100 my-8" />

            {/* Section 10 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">10. Third-Party Services</h2>
            <p className="mb-3">Certain services rely on third-party providers including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Meta Platforms</li>
              <li>WhatsApp Cloud API</li>
              <li>Payment gateways</li>
              <li>Hosting providers</li>
            </ul>
            <p className="mb-6">GreenPing is not responsible for interruptions, restrictions, or failures caused by third-party platforms.</p>

            <hr className="border-gray-100 my-8" />

            {/* Section 11 */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">11. Changes to this Policy</h2>
            <p className="mb-6">
              GreenPing reserves the right to modify or update this Refund Policy at any time without prior notice. Updated versions will become effective immediately upon publication.
            </p>

            <hr className="border-gray-100 my-8" />

            {/* Contact Section */}
            <h2 className="text-2xl font-bold text-[#32325d] mt-8 mb-4">12. Contact Information</h2>
            <p className="mb-4">For billing or refund related questions, please contact:</p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
              <p className="font-bold text-[#32325d] mb-2">Team GreenPing</p>
              <p className="flex items-center gap-2 mb-1"><i className="fa fa-envelope text-[#17a2b8]"></i> <a href="mailto:info@greenping.in" className="text-blue-600 hover:underline">info@greenping.in</a></p>
              <p className="flex items-center gap-2 mb-4"><i className="fa fa-globe text-[#17a2b8]"></i> <a href="https://greenping.in" className="text-blue-600 hover:underline">https://greenping.in</a></p>
              <p className="text-sm"><strong>Address:</strong><br />Shop no 15 Sahu Complex Magal Bhawan Raipur 492001</p>
            </div>

            <p className="text-lg font-medium text-center text-[#32325d] mt-12 mb-4 px-4 py-4 bg-blue-50/50 rounded border border-blue-100">
              By purchasing or using GreenPing services, users acknowledge that they have read, understood, and agreed to this Refund Policy.
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}