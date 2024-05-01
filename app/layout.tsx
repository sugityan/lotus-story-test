import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/page";
import BottomMenu from "./components/bottom-menu/page";

export const metadata: Metadata = {
  title: "Lotus Story Restaurant",
  description: "Lotus Story Restaurant Menu and Reservations",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "DIN-Light", fontWeight: "normal" }}>
        <Navbar />
        {children}
        <BottomMenu />
      </body>
    </html>
  );
}
