import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import ConvexClientProvider from "./providers/ConvexClientProvider";
import Navbar from "@/components/general/nav";
import { TooltipProvider } from "@/components/ui/tooltip";
import LanguageSelector from "@/components/general/LanguageSelector";

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
  metadataBase: new URL("https://yourdomain.com"), // <-- change to your real domain
  title: "Legal AI Platform",
  description: "Transform your legal practice with AI-powered tools",
  alternates: {
    canonical: "/", // canonical for the homepage
  },
  openGraph: {
    title: "Legal AI Platform",
    description: "Transform your legal practice with AI-powered tools",
    url: "/",
    siteName: "Your Brand",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Legal AI Platform",
    description: "Transform your legal practice with AI-powered tools",
  },
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
          fontFamily: "var(--font-inter), system-ui, -apple-system, sans-serif",
        }}
      >
        <ConvexClientProvider>
          <TooltipProvider>
            <Navbar />
            <main className="relative">{children}</main>
            <LanguageSelector />
          </TooltipProvider>
        </ConvexClientProvider>
      </body>
    </html>
  );
}
