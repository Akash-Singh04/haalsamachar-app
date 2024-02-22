import type { Metadata } from "next";
import { Inter , Dosis } from "next/font/google";

import "./globals.css";
import Footer from "./components/Footer";
const inter = Inter({ subsets: ["latin"] });
const dosis = Dosis({
  subsets: ["latin"],
  weight: "600"
}  );

export const metadata: Metadata = {
  title: "HaalSamachar",
  description: "Just the place you need to vent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={dosis.className}>
        {children}
        <Footer />
        </body>
        
    </html>
  );
}