import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Charles Isama | Portfolio",
  description:
    "Personal portfolio of Charles Isama, a Chemical and Polymer Engineer and Software Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Header />

        <div className="flex-grow">
          {children}
        </div>

        <Suspense
          fallback={
            <footer className="bg-slate-900 mt-12 py-8" />
          }
        >
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}