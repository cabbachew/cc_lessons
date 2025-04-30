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
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function EngagementPage() {
  const [tabIndex, setTabIndex] = useState(0);

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

          <Box
            overflowX="auto"
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            <Tabs
              mt={2}
              index={tabIndex}
              onChange={handleTabsChange}
              variant="unstyled"
              colorScheme="yellow"
              size="sm"
            >
              <TabList
                borderBottomWidth="1px"
                borderColor="gray.200"
                minW="max-content"
              >
                <Tab
                  className={apercuMono.className}
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing="1px"
                  px={{ base: 2, sm: 3, md: 4 }}
                  py={3}
                  mr={{ base: 1, md: 2 }}
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
                  OVERVIEW
                </Tab>
                <Tab
                  className={apercuMono.className}
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing="1px"
                  px={{ base: 2, sm: 3, md: 4 }}
                  py={3}
                  mr={{ base: 1, md: 2 }}
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
                  LEARNING PLAN
                </Tab>
                <Tab
                  className={apercuMono.className}
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing="1px"
                  px={{ base: 2, sm: 3, md: 4 }}
                  py={3}
                  mr={{ base: 1, md: 2 }}
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
                  MILESTONES
                </Tab>
                <Tab
                  className={apercuMono.className}
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing="1px"
                  px={{ base: 2, sm: 3, md: 4 }}
                  py={3}
                  mr={{ base: 1, md: 2 }}
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
                  ARTIFACTS
                </Tab>
                <Tab
                  className={apercuMono.className}
                  fontSize={{ base: "10px", md: "xs" }}
                  fontWeight="medium"
                  letterSpacing="1px"
                  px={{ base: 2, sm: 3, md: 4 }}
                  py={3}
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
                  HISTORY
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
