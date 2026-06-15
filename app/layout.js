import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "../components/Footer"

export const metadata = {
  title: "GreenPing | WhatsApp Marketing",
  description: "Ultimate Solution for WhatsApp Marketing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* FontAwesome for Icons */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </head>
      <body className="bg-white text-black">
        <Navbar /> 
        <main>{children}</main> 
        <Footer/>
      </body>
    </html>
  );
}