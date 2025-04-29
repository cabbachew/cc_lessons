// app/providers.tsx
"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { useState, useEffect } from "react";
export function Providers({ children }: { children: React.ReactNode }) {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) return null;

  return <ChakraProvider>{children}</ChakraProvider>;
}
