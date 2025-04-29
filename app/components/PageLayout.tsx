"use client";

import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";
import { SidebarProvider, useSidebar } from "./SidebarContext";

type PageLayoutProps = {
  children: ReactNode;
};

function PageLayoutContent({ children }: PageLayoutProps) {
  const { isCollapsed } = useSidebar();

  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box
        as="main"
        flex="1"
        ml={isCollapsed ? "70px" : "200px"}
        p={6}
        transition="margin-left 0.3s ease"
      >
        {children}
      </Box>
    </Flex>
  );
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <SidebarProvider>
      <PageLayoutContent>{children}</PageLayoutContent>
    </SidebarProvider>
  );
}
