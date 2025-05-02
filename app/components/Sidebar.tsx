"use client";

import { Box, VStack, Divider, Tooltip } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import Image from "next/image";
import { apercuMono } from "../fonts";
import {
  HomeIcon,
  AcademicCapIcon,
  BanknotesIcon,
  CalendarIcon,
  ClockIcon,
  Cog8ToothIcon,
  ArrowRightOnRectangleIcon,
  BellIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { useSidebar } from "./SidebarContext";

type NavItem = {
  name: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
};

const navItems: NavItem[] = [
  { name: "HOME", href: "/", icon: <HomeIcon width={18} />, isActive: true },
  {
    name: "STUDENTS",
    href: "/students",
    icon: <AcademicCapIcon width={18} color="#9ca3af" />,
  },
  {
    name: "FINANCE",
    href: "/finance",
    icon: <BanknotesIcon width={18} color="#9ca3af" />,
  },
  {
    name: "CALENDAR",
    href: "/calendar",
    icon: <CalendarIcon width={18} color="#9ca3af" />,
  },
  {
    name: "AVAILABILITY",
    href: "/availability",
    icon: <ClockIcon width={18} color="#9ca3af" />,
  },
];

const bottomNavItems: NavItem[] = [
  {
    name: "NOTIFICATIONS",
    href: "/notifications",
    icon: <BellIcon width={18} color="#9ca3af" />,
  },
  {
    name: "SETTINGS",
    href: "/settings",
    icon: <Cog8ToothIcon width={18} color="#9ca3af" />,
  },
  {
    name: "SIGN OUT",
    href: "/signout",
    icon: <ArrowRightOnRectangleIcon width={18} color="#9ca3af" />,
  },
];

export function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  const renderNavItem = (item: NavItem) => (
    <Tooltip
      key={item.name}
      label={item.name}
      placement="right"
      isDisabled={!isCollapsed}
      bg="#111827"
      color="white"
      fontSize="10px"
      fontWeight="600"
      letterSpacing="1.5px"
      fontFamily={apercuMono.style.fontFamily}
      borderRadius="md"
      hasArrow
      arrowSize={8}
      px={3}
      py={2}
    >
      <Link
        href={item.href}
        py={4}
        px={4}
        width="100%"
        display="flex"
        alignItems="center"
        _hover={{ bg: isCollapsed ? "#e3c757" : "#fff8ec" }}
        className={apercuMono.className}
        fontSize="10px"
        fontWeight="600"
        letterSpacing="1.5px"
        position="relative"
        color={item.isActive ? "inherit" : "#6b6280"}
        bg={
          item.isActive ? (isCollapsed ? "#e3c757" : "#fff8ec") : "transparent"
        }
        transition="background-color 0.3s ease"
        height="48px"
      >
        {/* Icon centered at 35px (half of collapsed width) */}
        <Box
          position="absolute"
          left="35px"
          transform="translateX(-50%)"
          top="50%"
          marginTop="-9px"
        >
          {item.icon}
        </Box>

        {/* Text that appears when expanded */}
        <Box
          position="absolute"
          left="70px"
          opacity={isCollapsed ? 0 : 1}
          visibility={isCollapsed ? "hidden" : "visible"}
          transition="opacity 0.3s ease, visibility 0.3s ease"
          whiteSpace="nowrap"
          top="50%"
          transform="translateY(-50%)"
        >
          {item.name}
        </Box>
      </Link>
    </Tooltip>
  );

  return (
    <Box
      as="aside"
      h="100vh"
      w={isCollapsed ? "70px" : "200px"}
      bg={isCollapsed ? "#fde68a" : "white"}
      borderRightWidth="3px"
      borderRightStyle="solid"
      borderColor={isCollapsed ? "white" : "gray.200"}
      position="fixed"
      left={0}
      top={0}
      display="flex"
      flexDirection="column"
      transition="width 0.3s ease, background-color 0.3s ease, border-color 0.3s ease"
    >
      {/* Main content container */}
      <Box display="flex" flexDirection="column" height="100%">
        {/* Logo section */}
        <Box
          py={10}
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="120px"
          minHeight="120px"
          position="relative"
          overflow="hidden"
        >
          {/* Small logo - always present but opacity controlled by sidebar state */}
          <Box
            position="absolute"
            opacity={isCollapsed ? 1 : 0}
            transition="opacity 0.2s ease"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/wordmark_black_short.webp"
              alt="CC Lessons Short Wordmark"
              width={30}
              height={25}
              style={{ width: "auto", height: "auto" }}
              priority
              className="my-auto"
            />
          </Box>

          {/* Large logo - always present but opacity controlled by sidebar state */}
          <Box
            position="absolute"
            opacity={isCollapsed ? 0 : 1}
            transition="opacity 0.2s ease"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Image
              src="/wordmark_black.webp"
              alt="CC Lessons Wordmark"
              width={65}
              height={16}
              style={{ width: "auto", height: "auto" }}
              priority
              className="my-auto"
            />
          </Box>
        </Box>

        {/* Top navigation items */}
        <Box flex="1">
          <VStack spacing={0} align="stretch" width="100%">
            {navItems.map(renderNavItem)}
          </VStack>
        </Box>

        {/* Sticky bottom section that includes both the divider/toggle and bottom nav */}
        <Box
          position="sticky"
          bottom={0}
          width="100%"
          bg={isCollapsed ? "#fde68a" : "white"}
          transition="background-color 0.3s ease"
        >
          {/* Divider with toggle button */}
          <Box position="relative" width="100%">
            <Divider borderColor={isCollapsed ? "white" : "gray.200"} />

            {/* Toggle button that overlays the border */}
            <Box
              position="absolute"
              right="-12px"
              top="-10px"
              width="24px"
              height="24px"
              borderRadius="full"
              bg={isCollapsed ? "white" : "gray.200"}
              display="flex"
              alignItems="center"
              justifyContent="center"
              cursor="pointer"
              onClick={toggleSidebar}
              boxShadow="0 0 3px rgba(0,0,0,0.1)"
              zIndex={1}
            >
              {isCollapsed ? (
                <ArrowRightCircleIcon width={22} color="#111827" />
              ) : (
                <ArrowLeftCircleIcon width={22} color="gray.200" />
              )}
            </Box>
          </Box>

          {/* Bottom navigation items */}
          <VStack
            spacing={0}
            align="stretch"
            width="100%"
            py={4}
            height="200px"
            minHeight="200px"
            borderTop="2px"
            borderColor={isCollapsed ? "white" : "gray.200"}
            transition="background-color 0.3s ease, border-color 0.3s ease"
          >
            {bottomNavItems.map(renderNavItem)}
          </VStack>
        </Box>
      </Box>
    </Box>
  );
}
