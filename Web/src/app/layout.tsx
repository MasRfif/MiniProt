import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/3.Footer/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Occasion Event",
  description: "by Charles, Andhika and Qodri",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className}  bg-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
