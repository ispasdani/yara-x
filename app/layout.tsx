import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./providers/ConvexClientProvider";
import Navbar from "@/components/general/nav";

// Keep your existing fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Add the legal platform fonts
const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Legal AI Platform",
  description: "Transform your legal practice with AI-powered tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${playfairDisplay.variable} 
          ${inter.variable} 
          font-sans 
          antialiased 
          bg-white 
          text-gray-900 
          min-h-screen
        `}
        style={{
          fontFamily: 'var(--font-inter), system-ui, -apple-system, sans-serif'
        }}
      >
        <ConvexClientProvider>
          <Navbar />
          <main className="relative">
            {children}
          </main>
        </ConvexClientProvider>
      </body>
    </html>
  );
}