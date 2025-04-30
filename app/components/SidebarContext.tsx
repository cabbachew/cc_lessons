"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

type SidebarContextType = {
  isCollapsed: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextType | undefined>(undefined);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [hasAutoCollapsed, setHasAutoCollapsed] = useState(false);

  // Check window width directly instead of using useBreakpointValue
  useEffect(() => {
    const checkWidth = () => {
      // Only auto-collapse if we haven't done so already for this session
      if (!hasAutoCollapsed) {
        const xlBreakpoint = 1280; // Standard xl breakpoint in pixels
        if (window.innerWidth <= xlBreakpoint) {
          setIsCollapsed(true);
          setHasAutoCollapsed(true);
        }
      }
    };

    // Run on mount
    checkWidth();

    // Add resize listener
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [hasAutoCollapsed]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <SidebarContext.Provider value={{ isCollapsed, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}
