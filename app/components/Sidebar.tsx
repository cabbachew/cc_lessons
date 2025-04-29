"use client";

import { Box, VStack } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import { apercuMono } from "../fonts";

type NavItem = {
  name: string;
  href: string;
};

const navItems: NavItem[] = [
  { name: "HOME", href: "/" },
  { name: "STUDENTS", href: "/students" },
  { name: "FINANCE", href: "/finance" },
  { name: "CALENDAR", href: "/calendar" },
  { name: "AVAILABILITY", href: "/availability" },
];

export function Sidebar() {
  return (
    <Box
      as="aside"
      h="100vh"
      w="200px"
      bg="white"
      borderRight="1px"
      borderColor="gray.200"
      py={6}
      position="fixed"
      left={0}
      top={0}
    >
      <VStack spacing={6} align="start" px={4}>
        <Box mt={6} mb={6} width="100%" display="flex" justifyContent="center">
          <Image
            src="/wordmark_black.webp"
            alt="CC Lessons Wordmark"
            width={100}
            height={25}
            priority
          />
        </Box>

        <VStack spacing={4} align="start" width="100%">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              py={2}
              px={3}
              borderRadius="md"
              width="100%"
              display="block"
              _hover={{ bg: "gray.100" }}
              className={apercuMono.className}
              fontSize="xs"
              fontWeight="600"
              letterSpacing="1.5px"
            >
              {item.name}
            </Link>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}
