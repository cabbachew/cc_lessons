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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Tooltip,
} from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";
import { apercu, apercuMono, inter } from "../fonts";
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
                    <Text display={{ base: "none", lg: "block" }}>
                      OVERVIEW
                    </Text>
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
                    <Text display={{ base: "none", lg: "block" }}>
                      LEARNING PLAN
                    </Text>
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
                    <Text display={{ base: "none", lg: "block" }}>
                      MILESTONES
                    </Text>
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
                    <Text display={{ base: "none", lg: "block" }}>
                      ARTIFACTS
                    </Text>
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
              <TabPanels>
                <TabPanel p={4}></TabPanel>
                <TabPanel p={4}>
                  <Box width="100%" borderRadius="none" p={4}>
                    <Flex
                      direction={{ base: "column", lg: "row" }}
                      gap={{ base: 4, lg: 8 }}
                    >
                      <Box flex={{ lg: "1" }}>
                        <Text
                          className={apercu.className}
                          fontSize="md"
                          fontWeight="bold"
                          color="#111827"
                          mb={2}
                        >
                          Learning Goals
                        </Text>
                        <Text
                          className={inter.className}
                          fontSize="m"
                          color="#4B5563"
                        >
                          Develop practical skills in digital content creation
                          while fostering intellectual curiosity and reducing
                          passive screen time through engaging project-based
                          learning.
                        </Text>
                      </Box>

                      <Box flex={{ lg: "1" }}>
                        <Accordion allowToggle>
                          <AccordionItem
                            border="0"
                            borderBottom="1px"
                            borderColor="gray.100"
                            pb={1}
                            mb={1}
                          >
                            <h2>
                              <AccordionButton
                                py={1.5}
                                px={0}
                                _hover={{ bg: "transparent" }}
                              >
                                <Box
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  fontWeight="medium"
                                  fontSize="sm"
                                  className={apercuMono.className}
                                  _hover={{ textDecoration: "underline" }}
                                >
                                  TECHNICAL DEVELOPMENT
                                </Box>
                                <AccordionIcon color="#6b7280" />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2} px={0} pl={2}>
                              <Box
                                className={inter.className}
                                fontSize="sm"
                                color="#4B5563"
                              >
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Create a structured content platform (blog,
                                    podcast, or multimedia project) focusing on
                                    child psychology and education
                                  </Text>
                                </Box>
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Develop and refine interviewing skills for
                                    engaging with experts and sharing diverse
                                    perspectives
                                  </Text>
                                </Box>
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Build a portfolio of written and visual
                                    content that demonstrates communication
                                    abilities
                                  </Text>
                                </Box>
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Learn basic design and content organization
                                    principles to effectively present
                                    information
                                  </Text>
                                </Box>
                              </Box>
                            </AccordionPanel>
                          </AccordionItem>

                          <AccordionItem
                            border="0"
                            borderBottom="1px"
                            borderColor="gray.100"
                            pb={1}
                            mb={1}
                          >
                            <h2>
                              <AccordionButton
                                py={1.5}
                                px={0}
                                _hover={{ bg: "transparent" }}
                              >
                                <Box
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  fontWeight="medium"
                                  fontSize="sm"
                                  className={apercuMono.className}
                                  _hover={{ textDecoration: "underline" }}
                                >
                                  PROJECT CREATION
                                </Box>
                                <AccordionIcon color="#6b7280" />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2} px={0} pl={2}>
                              <Box
                                className={inter.className}
                                fontSize="sm"
                                color="#4B5563"
                              >
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Establish effective systems for managing
                                    project timelines and deadlines
                                  </Text>
                                </Box>
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Develop consistent workflow patterns for
                                    content creation and academic work
                                  </Text>
                                </Box>
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Implement strategies to maintain focus and
                                    reduce procrastination
                                  </Text>
                                </Box>
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Create documentation practices that support
                                    long-term project development
                                  </Text>
                                </Box>
                              </Box>
                            </AccordionPanel>
                          </AccordionItem>

                          <AccordionItem border="0">
                            <h2>
                              <AccordionButton
                                py={1.5}
                                px={0}
                                _hover={{ bg: "transparent" }}
                              >
                                <Box
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  fontWeight="medium"
                                  fontSize="sm"
                                  className={apercuMono.className}
                                  _hover={{ textDecoration: "underline" }}
                                >
                                  PHYSICS &amp; ENGINEERING EXPLORATION
                                </Box>
                                <AccordionIcon color="#6b7280" />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={2} px={0} pl={2}>
                              <Box
                                className={inter.className}
                                fontSize="sm"
                                color="#4B5563"
                              >
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Research psychology programs and related
                                    fields at potential colleges
                                  </Text>
                                </Box>
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Connect with professionals in child
                                    psychology and education for insights and
                                    mentorship
                                  </Text>
                                </Box>
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Identify internship opportunities related to
                                    psychology and education for future summers
                                  </Text>
                                </Box>
                                <Box display="flex" mb={2}>
                                  <Text as="span" mr={2}>
                                    -
                                  </Text>
                                  <Text as="span">
                                    Develop a cohesive narrative that connects
                                    academic interests, extracurriculars, and
                                    future goals
                                  </Text>
                                </Box>
                              </Box>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </Box>
                    </Flex>
                  </Box>
                </TabPanel>
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
