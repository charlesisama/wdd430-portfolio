
import type { Metadata } from "next";
import type { ReactNode } from "react";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Charles Isama | Portfolio",
  description:
    "Personal portfolio of Charles Isama, a Chemical and Polymer Engineer and Software Developer."
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Header />

        <div className="flex-grow">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  );
}
