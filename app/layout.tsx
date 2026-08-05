import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verlinken.ch",
  description: "Links, die verbinden",
  icons: {
    icon: [
      { url: "/logos/logo-icon.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/logo-icon.png", sizes: "16x16", type: "image/png" },
      { url: "/logos/logo-icon.svg", type: "image/svg+xml" },
    ],
    apple: "/logos/logo-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}