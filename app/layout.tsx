import type { Metadata } from "next";
import { inter, apercuPro, apercuMonoPro } from "./fonts";
import "./globals.css";
import "./fonts.css";

export const metadata: Metadata = {
  title: "CC Lessons",
  description: "View lesson recommendations for your upcoming session.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${apercuPro.variable} ${apercuMonoPro.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
