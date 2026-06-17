"use client";

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fe] py-10 pb-20 border-t-2 border-[#17a2b8]">
      {/* Container to center the card */}
      <div className="container mx-auto px-4 flex justify-center">
        
        {/* Main Card Wrapper */}
        <div className="w-full max-w-3xl bg-white shadow-sm border border-gray-100 rounded-sm">
          
          {/* Card Header Section */}
          <div className="text-center mt-10 px-6">
            <h1 className="text-[32px] font-normal mt-4 mb-6 text-[#32325d]">Contact us</h1>
            
            <div className="whitespace-pre-line text-[#525f7f] text-[15px] leading-relaxed">
              GreenPing | Shop No 15 Sahu Complex Mangal Bhawan Mathpurena , Raipur - 492001<br></br>
              Ph: (M) +91 8109540259 <br></br>
              Web: greenping.in | Email: info@greenping.in
            </div>
            
            <div className="px-10 mt-8 mb-8">
               <hr className="border-[#e9ecef]" />
            </div>
            
            <div className="mb-10">
              {/* Green @ Icon exactly like screenshot */}
              <i className="fa fa-at text-5xl text-[#4caf50]"></i>
            </div>
          </div>

          {/* Form Section */}
          <div className="px-6 md:px-16 pb-12">
            <form 
              id="lwContactMailForm" 
              method="post" 
              action="https://greenping.in/contact-process"
              className="space-y-5"
            >
              {/* Full Name */}
              <div className="flex items-center bg-white rounded border border-[#cad1d7] focus-within:ring-1 focus-within:ring-[#4caf50] focus-within:border-[#4caf50] transition-all overflow-hidden shadow-sm">
                <div className="px-4 py-3 text-[#adb5bd] border-r border-[#cad1d7] flex items-center justify-center w-12">
                  <i className="fa fa-user text-sm"></i>
                </div>
                <input
                  id="floatingFullName"
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  required
                  className="flex-1 block w-full px-4 py-3 bg-transparent border-none focus:ring-0 outline-none text-[#8898aa] text-[15px] placeholder-[#adb5bd]"
                />
              </div>

              {/* Email Address */}
              <div className="flex items-center bg-white rounded border border-[#cad1d7] focus-within:ring-1 focus-within:ring-[#4caf50] focus-within:border-[#4caf50] transition-all overflow-hidden shadow-sm">
                <div className="px-4 py-3 text-[#adb5bd] border-r border-[#cad1d7] flex items-center justify-center w-12">
                  <i className="fa fa-at text-sm"></i>
                </div>
                <input
                  id="floatingInput"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="flex-1 block w-full px-4 py-3 bg-transparent border-none focus:ring-0 outline-none text-[#8898aa] text-[15px] placeholder-[#adb5bd]"
                />
              </div>

              {/* Subject */}
              <div className="flex items-center bg-white rounded border border-[#cad1d7] focus-within:ring-1 focus-within:ring-[#4caf50] focus-within:border-[#4caf50] transition-all overflow-hidden shadow-sm">
                <div className="px-4 py-3 text-[#adb5bd] border-r border-[#cad1d7] flex items-center justify-center w-12">
                  <i className="fa fa-book text-sm"></i>
                </div>
                <input
                  id="floatingSubject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="flex-1 block w-full px-4 py-3 bg-transparent border-none focus:ring-0 outline-none text-[#8898aa] text-[15px] placeholder-[#adb5bd]"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  id="floatingTextarea"
                  name="message"
                  rows={8}
                  placeholder="Message"
                  required
                  className="w-full block border border-[#cad1d7] rounded py-3 px-4 focus:ring-1 focus:ring-[#4caf50] focus:border-[#4caf50] outline-none text-[#8898aa] text-[15px] placeholder-[#adb5bd] resize-y transition-all shadow-sm"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-full text-[15px] tracking-wide font-semibold text-white bg-[#1a5d5a] hover:bg-[#124240] focus:outline-none transition-colors duration-300 shadow-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}