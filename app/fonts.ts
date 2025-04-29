import { Inter } from "next/font/google";
import localFont from "next/font/local";

// Load Inter font from Google - this is stable and should work
export const inter = Inter({
  subsets: ["latin"],
});

// Load Apercu Pro Bold
export const apercu = localFont({
  src: "../public/fonts/apercu-bold-pro.woff2",
});

// Load Apercu Mono Pro (both weights)
export const apercuMono = localFont({
  src: "../public/fonts/apercu-mono-regular-pro.woff2",
});
