import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";


export const metadata = {
  title: "MOTO MARKET",
  description: "Bike Shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`playfair bg-black text-yellow-500/70 min-h-screen`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
