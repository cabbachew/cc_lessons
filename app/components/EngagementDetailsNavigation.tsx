"use client";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  Box,
  Flex,
  Tooltip,
  Text,
} from "@chakra-ui/react";
import {
  InformationCircleIcon,
  MapIcon,
  TrophyIcon,
  FolderPlusIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import { apercuMono } from "../fonts";

interface EngagementDetailsNavigationProps {
  tabIndex: number;
  onTabsChange: (index: number) => void;
  children: React.ReactNode;
}

export function EngagementDetailsNavigation({
  tabIndex,
  onTabsChange,
  children,
}: EngagementDetailsNavigationProps) {
  return (
    <Tabs
      mt={2}
      index={tabIndex}
      onChange={onTabsChange}
      variant="unstyled"
      colorScheme="yellow"
      size="sm"
      width="100%"
    >
      <TabList
        borderBottomWidth="1px"
        borderColor="gray.200"
        width="100%"
        flexWrap="wrap"
      >
        <Tab
          className={apercuMono.className}
          fontSize={{ base: "xs", md: "xs" }}
          fontWeight="medium"
          letterSpacing={{ base: "1px", md: "1px" }}
          px={{ base: 4, sm: 4, md: 4 }}
          py={{ base: 3, sm: 3, md: 3 }}
          mr={{ base: 2, sm: 2, md: 2 }}
          color="#6b7280"
          position="relative"
          _selected={{
            color: "#111827",
            fontWeight: "bold",
            _after: {
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: 0,
              right: 0,
              height: "2px",
              bg: "#e3c757",
            },
          }}
        >
          <Flex alignItems="center">
            <Box display={{ base: "block", lg: "none" }}>
              <Tooltip
                label="OVERVIEW"
                placement="top"
                hasArrow
                bg="#111827"
                color="white"
                fontSize="10px"
                fontWeight="600"
                letterSpacing="1.5px"
                fontFamily={apercuMono.style.fontFamily}
                isDisabled={false}
              >
                <InformationCircleIcon width={16} height={16} />
              </Tooltip>
            </Box>
            <Text display={{ base: "none", lg: "block" }}>OVERVIEW</Text>
          </Flex>
        </Tab>
        <Tab
          className={apercuMono.className}
          fontSize={{ base: "xs", md: "xs" }}
          fontWeight="medium"
          letterSpacing={{ base: "1px", md: "1px" }}
          px={{ base: 4, sm: 4, md: 4 }}
          py={{ base: 3, sm: 3, md: 3 }}
          mr={{ base: 2, sm: 2, md: 2 }}
          color="#6b7280"
          position="relative"
          _selected={{
            color: "#111827",
            fontWeight: "bold",
            _after: {
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: 0,
              right: 0,
              height: "2px",
              bg: "#e3c757",
            },
          }}
        >
          <Flex alignItems="center">
            <Box display={{ base: "block", lg: "none" }}>
              <Tooltip
                label="LEARNING PLAN"
                placement="top"
                hasArrow
                bg="#111827"
                color="white"
                fontSize="10px"
                fontWeight="600"
                letterSpacing="1.5px"
                fontFamily={apercuMono.style.fontFamily}
                isDisabled={false}
              >
                <MapIcon width={16} height={16} />
              </Tooltip>
            </Box>
            <Text display={{ base: "none", lg: "block" }}>LEARNING PLAN</Text>
          </Flex>
        </Tab>
        <Tab
          className={apercuMono.className}
          fontSize={{ base: "xs", md: "xs" }}
          fontWeight="medium"
          letterSpacing={{ base: "1px", md: "1px" }}
          px={{ base: 4, sm: 4, md: 4 }}
          py={{ base: 3, sm: 3, md: 3 }}
          mr={{ base: 2, sm: 2, md: 2 }}
          color="#6b7280"
          position="relative"
          _selected={{
            color: "#111827",
            fontWeight: "bold",
            _after: {
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: 0,
              right: 0,
              height: "2px",
              bg: "#e3c757",
            },
          }}
        >
          <Flex alignItems="center">
            <Box display={{ base: "block", lg: "none" }}>
              <Tooltip
                label="MILESTONES"
                placement="top"
                hasArrow
                bg="#111827"
                color="white"
                fontSize="10px"
                fontWeight="600"
                letterSpacing="1.5px"
                fontFamily={apercuMono.style.fontFamily}
                isDisabled={false}
              >
                <TrophyIcon width={16} height={16} />
              </Tooltip>
            </Box>
            <Text display={{ base: "none", lg: "block" }}>MILESTONES</Text>
          </Flex>
        </Tab>
        <Tab
          className={apercuMono.className}
          fontSize={{ base: "xs", md: "xs" }}
          fontWeight="medium"
          letterSpacing={{ base: "1px", md: "1px" }}
          px={{ base: 4, sm: 4, md: 4 }}
          py={{ base: 3, sm: 3, md: 3 }}
          mr={{ base: 2, sm: 2, md: 2 }}
          color="#6b7280"
          position="relative"
          _selected={{
            color: "#111827",
            fontWeight: "bold",
            _after: {
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: 0,
              right: 0,
              height: "2px",
              bg: "#e3c757",
            },
          }}
        >
          <Flex alignItems="center">
            <Box display={{ base: "block", lg: "none" }}>
              <Tooltip
                label="ARTIFACTS"
                placement="top"
                hasArrow
                bg="#111827"
                color="white"
                fontSize="10px"
                fontWeight="600"
                letterSpacing="1.5px"
                fontFamily={apercuMono.style.fontFamily}
                isDisabled={false}
              >
                <FolderPlusIcon width={16} height={16} />
              </Tooltip>
            </Box>
            <Text display={{ base: "none", lg: "block" }}>ARTIFACTS</Text>
          </Flex>
        </Tab>
        <Tab
          className={apercuMono.className}
          fontSize={{ base: "xs", md: "xs" }}
          fontWeight="medium"
          letterSpacing={{ base: "1px", md: "1px" }}
          px={{ base: 4, sm: 4, md: 4 }}
          py={{ base: 3, sm: 3, md: 3 }}
          mr={{ base: 2, sm: 2, md: 2 }}
          color="#6b7280"
          position="relative"
          _selected={{
            color: "#111827",
            fontWeight: "bold",
            _after: {
              content: '""',
              position: "absolute",
              bottom: "-1px",
              left: 0,
              right: 0,
              height: "2px",
              bg: "#e3c757",
            },
          }}
        >
          <Flex alignItems="center">
            <Box display={{ base: "block", lg: "none" }}>
              <Tooltip
                label="HISTORY"
                placement="top"
                hasArrow
                bg="#111827"
                color="white"
                fontSize="10px"
                fontWeight="600"
                letterSpacing="1.5px"
                fontFamily={apercuMono.style.fontFamily}
                isDisabled={false}
              >
                <ClockIcon width={16} height={16} />
              </Tooltip>
            </Box>
            <Text display={{ base: "none", lg: "block" }}>HISTORY</Text>
          </Flex>
        </Tab>
      </TabList>
      <TabPanels position="relative">{children}</TabPanels>
    </Tabs>
  );
}
