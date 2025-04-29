import { Inter } from "next/font/google";
import localFont from "next/font/local";

// Load Inter font from Google
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

// Load Apercu Pro font files
export const apercuPro = localFont({
  src: [
    {
      path: "../public/fonts/apercu-bold-pro.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/apercu-bold-pro.woff",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-apercu-pro",
});

// Load Apercu Mono Pro font files
export const apercuMonoPro = localFont({
  src: [
    {
      path: "../public/fonts/apercu-mono-regular-pro.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/apercu-mono-bold-pro.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-apercu-mono-pro",
});
