import type { Metadata } from "next";
import "./globals.css";
import AOSInit from "@/components/aos/AOSInit";
import Navbar from "@/components/Navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "LawBridge LLP | Top Law Firm In Pakistan",
  description: "Top Law Firm in Pakistan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AOSInit />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}