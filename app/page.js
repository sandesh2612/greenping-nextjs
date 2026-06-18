import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Pricing from "../components/Pricing"
import Contact from "../components/Contact"
import FAQ from "../components/FAQ"
import WhatsAppButton from "@/components/Whatsappbutton";
 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-white dark:bg-gray-950">
      
     {/* 1. Hero Section */}
      <Hero />
      
      {/* 2. Features Section */}
      <Features />

<About/>
      {/* 3. Pricing Section */}
      <Pricing />

      {/* 4. Contact Section */}
      <Contact />

<FAQ/>

<WhatsAppButton/>

    </main>
  );
}