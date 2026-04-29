import dns from "node:dns"
dns.setServers(['8.8.8.8', '8.8.4.4'])

import { Geist, Geist_Mono, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Navber from "@/components/shared/Navber";



const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
});

// age akta font ar veriable banaw then seta ke use koro
//zdi akadhik use korte hoy tokhon uselly main layout a export kore jakhane lagbe sekhane use kore felte pari amra

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata = {
  title: "Dragon News",
  description: "Best News in Bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en" className={` h-full antialiased`}>
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
