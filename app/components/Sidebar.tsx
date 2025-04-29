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

export function Sidebar() {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <Box
      as="aside"
      h="100vh"
      w={isCollapsed ? "70px" : "200px"}
      bg={isCollapsed ? "#fde68a" : "white"}
      borderRight="2px"
      borderColor={isCollapsed ? "white" : "gray.200"}
      position="fixed"
      left={0}
      top={0}
      display="flex"
      flexDirection="column"
      transition="width 0.3s ease, background-color 0.3s ease, border-color 0.3s ease"
    >
      <Box px={4} py={6} overflowY="auto" flex="1" bg="transparent">
        <Box
          mt={6}
          mb={14}
          width="100%"
          minHeight="25px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          position="relative"
        >
          <Box
            position="absolute"
            opacity={isCollapsed ? 1 : 0}
            transition="opacity 0.3s ease"
          >
            <Image
              src="/wordmark_black_short.webp"
              alt="CC Lessons Short Wordmark"
              width={30}
              height={25}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Box>
          <Box
            position="absolute"
            opacity={isCollapsed ? 0 : 1}
            transition="opacity 0.3s ease"
          >
            <Image
              src="/wordmark_black.webp"
              alt="CC Lessons Wordmark"
              width={80}
              height={20}
              style={{ width: "auto", height: "auto" }}
              priority
            />
          </Box>
        </Box>

        <VStack spacing={4} align="start" width="100%" mx={-4}>
          {navItems.map((item) => (
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
                href="#"
                py={2}
                px={4}
                width={isCollapsed ? "70px" : "200px"}
                display="flex"
                alignItems="center"
                _hover={{ bg: isCollapsed ? "#e3c757" : "#fff8ec" }}
                className={apercuMono.className}
                fontSize="10px"
                fontWeight="600"
                letterSpacing="1.5px"
                onClick={(e) => e.preventDefault()}
                justifyContent={isCollapsed ? "center" : "flex-start"}
                color={item.isActive ? "inherit" : "#6b6280"}
                bg={
                  item.isActive
                    ? isCollapsed
                      ? "#e3c757"
                      : "#fff8ec"
                    : "transparent"
                }
                transition="width 0.3s ease, background-color 0.3s ease, margin 0.3s ease"
              >
                <Box ml={isCollapsed ? 0 : 4} mr={isCollapsed ? 0 : 6}>
                  {item.icon}
                </Box>
                {!isCollapsed && item.name}
              </Link>
            </Tooltip>
          ))}
        </VStack>
      </Box>

      <Box width="100%" position="relative" bg="transparent">
        <Divider borderColor={isCollapsed ? "white" : "gray.200"} />
        <Box
          position="absolute"
          right={isCollapsed ? "-11px" : "-12px"}
          top="-11px"
          bg={isCollapsed ? "white" : "gray.200"}
          p="0.5"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          boxShadow="sm"
          cursor="pointer"
          onClick={toggleSidebar}
          zIndex="1"
          transition="background-color 0.3s ease, right 0.3s ease"
        >
          {isCollapsed ? (
            <ArrowRightCircleIcon width={18} color="#111827" strokeWidth={2} />
          ) : (
            <ArrowLeftCircleIcon width={18} color="#111827" strokeWidth={2} />
          )}
        </Box>

        <VStack spacing={4} align="start" width="100%" py={4}>
          <Tooltip
            label="NOTIFICATIONS"
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
              href="#"
              py={2}
              px={4}
              width={isCollapsed ? "70px" : "200px"}
              display="flex"
              alignItems="center"
              _hover={{ bg: isCollapsed ? "#e3c757" : "#fff8ec" }}
              className={apercuMono.className}
              fontSize="10px"
              fontWeight="600"
              letterSpacing="1.5px"
              onClick={(e) => e.preventDefault()}
              justifyContent={isCollapsed ? "center" : "flex-start"}
              color="#6b6280"
            >
              <Box ml={isCollapsed ? 0 : 4} mr={isCollapsed ? 0 : 6}>
                <BellIcon width={18} color="#9ca3af" />
              </Box>
              {!isCollapsed && "NOTIFICATIONS"}
            </Link>
          </Tooltip>

          <Tooltip
            label="SETTINGS"
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
              href="#"
              py={2}
              px={4}
              width={isCollapsed ? "70px" : "200px"}
              display="flex"
              alignItems="center"
              _hover={{ bg: isCollapsed ? "#e3c757" : "#fff8ec" }}
              className={apercuMono.className}
              fontSize="10px"
              fontWeight="600"
              letterSpacing="1.5px"
              onClick={(e) => e.preventDefault()}
              justifyContent={isCollapsed ? "center" : "flex-start"}
              color="#6b6280"
            >
              <Box ml={isCollapsed ? 0 : 4} mr={isCollapsed ? 0 : 6}>
                <Cog8ToothIcon width={18} color="#9ca3af" />
              </Box>
              {!isCollapsed && "SETTINGS"}
            </Link>
          </Tooltip>

          <Tooltip
            label="SIGN OUT"
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
              href="#"
              py={2}
              px={4}
              width={isCollapsed ? "70px" : "200px"}
              display="flex"
              alignItems="center"
              _hover={{ bg: isCollapsed ? "#e3c757" : "#fff8ec" }}
              className={apercuMono.className}
              fontSize="10px"
              fontWeight="600"
              letterSpacing="1.5px"
              onClick={(e) => e.preventDefault()}
              justifyContent={isCollapsed ? "center" : "flex-start"}
              color="#6b6280"
            >
              <Box ml={isCollapsed ? 0 : 4} mr={isCollapsed ? 0 : 6}>
                <ArrowRightOnRectangleIcon width={18} color="#9ca3af" />
              </Box>
              {!isCollapsed && "SIGN OUT"}
            </Link>
          </Tooltip>
        </VStack>
      </Box>
    </Box>
  );
}
