"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LayoutWrapper({ children }) {
  const pathname = usePathname();

  // Hide Navbar and Footer on Documentation page
  const isDocumentation = pathname.startsWith("/Documentation");

  // Hide ONLY Footer on Help page
  const isHelpPage = pathname.startsWith("/help");

  const isprivacypolicy = pathname.startsWith("/privacyPolicy");

  const istermsAndConditions = pathname.startsWith("/termsAndConditions");

  const isdataDeletion = pathname.startsWith("/dataDeletion")
 
  const isrefundPolicy = pathname.startsWith("/refundPolicy")

  return (
    <>
      {/* Navbar will show everywhere EXCEPT Documentation */}
      {!isDocumentation && <Navbar />}

      <main>{children}</main>

      {/* Footer will NOT show on Documentation AND Help page */}
      {!isDocumentation &&
        !isHelpPage &&
        !isprivacypolicy &&
        !istermsAndConditions && !isdataDeletion && !isrefundPolicy &&<Footer />}
    </>
  );
}
