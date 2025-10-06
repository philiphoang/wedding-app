import type { Metadata } from "next";
import "./globals.css";

import Navbar from "./components/Navbar";
import { alexBrush, montserrat } from "./fonts";

export const metadata: Metadata = {
  title: "Philip & Hau",
  description: "Philip's wedding project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Navbar/>
    <html lang="en">
      <body
        className={`${alexBrush.variable} ${montserrat.variable} antialiased`}
        >
        {children}
      </body>
    </html>
        </>
  );
}
