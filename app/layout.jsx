"use client";
import "@/public/css/globals.css";
import Navbar from "@/Components/common/Navbar";
import { Poppins } from "next/font/google";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${pop.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
