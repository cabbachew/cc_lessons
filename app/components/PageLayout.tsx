"use client";

import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./Sidebar";
import { ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Flex minH="100vh">
      <Sidebar />
      <Box as="main" flex="1" ml="200px" p={6}>
        {children}
      </Box>
    </Flex>
  );
}
