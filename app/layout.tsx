"use client";
import { useState } from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "VRM IT Services",
  description: "Professional IT solutions for home & business",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-neutral-950 text-neutral-100 selection:bg-neutral-700 selection:text-white">
        


      <WhatsAppButton />

    

        {children}

        <footer className="border-t mt-20 py-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} VRM IT Services | New Delhi
        </footer>
      </body>
    </html>
  );
}

