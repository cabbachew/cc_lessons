"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";
import { apercu, apercuMono } from "../fonts";
import { BreakpointBadge } from "../components/BreakpointBadge";
import {
  ChevronLeftIcon,
  InformationCircleIcon,
  MapIcon,
  TrophyIcon,
  FolderPlusIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function EngagementPage() {
  const searchParams = useSearchParams();
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      const tabNumber = parseInt(tab);
      if (!isNaN(tabNumber) && tabNumber >= 0 && tabNumber <= 4) {
        setTabIndex(tabNumber);
      }
    }
  }, [searchParams]);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  return (
    <PageLayout>
      <Box position="relative">
        <BreakpointBadge />

        <Box bg="white">
          <Link href="/" style={{ textDecoration: "none" }}>
            <Flex
              alignItems="center"
              mb={3}
              width="fit-content"
              _hover={{ color: "#4B5563" }}
            >
              <ChevronLeftIcon width={12} color="#6b7280" />
              <Text
                className={apercuMono.className}
                fontSize="xs"
                fontWeight="medium"
                color="#6b7280"
                ml={0.5}
              >
                BACK
              </Text>
            </Flex>
          </Link>

          <Flex alignItems="center" mb={3}>
            <Heading
              as="h1"
              className={apercu.className}
              fontSize={{ base: "md", sm: "lg", md: "20px", lg: "2xl" }}
              lineHeight={{
                base: "24px",
                sm: "28px",
                md: "30px",
                lg: "36px",
              }}
              fontWeight="bold"
              letterSpacing="-0.05em"
              color="#111827"
            >
              Quintin Leong&apos;s Home Improvement Passion Project
            </Heading>
          </Flex>

          <Box overflowX="hidden">
            <Tabs
              mt={2}
              index={tabIndex}
              onChange={handleTabsChange}
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
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing={{ base: "0.5px", md: "1px" }}
                  px={{ base: 1, sm: 2, md: 4 }}
                  py={{ base: 2, md: 3 }}
                  mr={{ base: 0.5, md: 2 }}
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
                      <InformationCircleIcon width={16} height={16} />
                    </Box>
                    <Text display={{ base: "none", lg: "block" }}>
                      OVERVIEW
                    </Text>
                  </Flex>
                </Tab>
                <Tab
                  className={apercuMono.className}
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing={{ base: "0.5px", md: "1px" }}
                  px={{ base: 1, sm: 2, md: 4 }}
                  py={{ base: 2, md: 3 }}
                  mr={{ base: 0.5, md: 2 }}
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
                      <MapIcon width={16} height={16} />
                    </Box>
                    <Text display={{ base: "none", lg: "block" }}>
                      LEARNING PLAN
                    </Text>
                  </Flex>
                </Tab>
                <Tab
                  className={apercuMono.className}
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing={{ base: "0.5px", md: "1px" }}
                  px={{ base: 1, sm: 2, md: 4 }}
                  py={{ base: 2, md: 3 }}
                  mr={{ base: 0.5, md: 2 }}
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
                      <TrophyIcon width={16} height={16} />
                    </Box>
                    <Text display={{ base: "none", lg: "block" }}>
                      MILESTONES
                    </Text>
                  </Flex>
                </Tab>
                <Tab
                  className={apercuMono.className}
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing={{ base: "0.5px", md: "1px" }}
                  px={{ base: 1, sm: 2, md: 4 }}
                  py={{ base: 2, md: 3 }}
                  mr={{ base: 0.5, md: 2 }}
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
                      <FolderPlusIcon width={16} height={16} />
                    </Box>
                    <Text display={{ base: "none", lg: "block" }}>
                      ARTIFACTS
                    </Text>
                  </Flex>
                </Tab>
                <Tab
                  className={apercuMono.className}
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing={{ base: "0.5px", md: "1px" }}
                  px={{ base: 1, sm: 2, md: 4 }}
                  py={{ base: 2, md: 3 }}
                  mr={{ base: 0.5, md: 2 }}
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
                      <ClockIcon width={16} height={16} />
                    </Box>
                    <Text display={{ base: "none", lg: "block" }}>HISTORY</Text>
                  </Flex>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel p={4}></TabPanel>
                <TabPanel p={4}></TabPanel>
                <TabPanel p={4}></TabPanel>
                <TabPanel p={4}></TabPanel>
                <TabPanel p={4}></TabPanel>
              </TabPanels>
            </Tabs>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}
