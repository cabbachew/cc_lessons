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
  Center,
  VStack,
  Divider,
} from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";
import { apercu, apercuMono, inter } from "../fonts";
import { BreakpointBadge } from "../components/BreakpointBadge";
import { ExpandedLessonCard } from "../components/ExpandedLessonCard";
import {
  ChevronLeftIcon,
  InformationCircleIcon,
  MapIcon,
  TrophyIcon,
  FolderPlusIcon,
  ClockIcon,
  ArrowsPointingOutIcon,
  MapPinIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function EngagementPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const [isCardExpanded, setIsCardExpanded] = useState(false);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      const tabNumber = parseInt(tab);
      if (!isNaN(tabNumber) && tabNumber >= 0 && tabNumber <= 4) {
        setTabIndex(tabNumber);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab) {
      const tabNumber = parseInt(tab);
      if (!isNaN(tabNumber) && tabNumber >= 0 && tabNumber <= 4) {
        setTabIndex(tabNumber);
      }
    }

    // Check if coming from home page "view lesson" button
    const lesson = searchParams.get("lesson");
    if (lesson === "true") {
      setIsCardExpanded(true);
      setTabIndex(1); // Set to Learning Plan tab
    }
  }, [searchParams]);

  // Helper function to remove lesson parameter from URL
  const removeLessonParameter = useCallback(() => {
    const url = new URL(window.location.href);
    url.searchParams.delete("lesson");
    router.replace(url.pathname + url.search, { scroll: false });
  }, [router]);

  // Handle keyboard escape key press
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isCardExpanded) {
        setIsCardExpanded(false);
        removeLessonParameter();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isCardExpanded, removeLessonParameter]);

  const handleTabsChange = (index: number) => {
    setTabIndex(index);
  };

  const toggleCardExpansion = () => {
    const newExpandedState = !isCardExpanded;
    setIsCardExpanded(newExpandedState);

    // Update URL when card is closed to remove lesson parameter
    if (!newExpandedState) {
      removeLessonParameter();
    }
  };

  const handleOverlayClick = (event: React.MouseEvent) => {
    // Only close if clicking directly on the overlay, not its children
    if (event.target === event.currentTarget) {
      setIsCardExpanded(false);
      removeLessonParameter();
    }
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
              <TabPanels position="relative">
                <TabPanel p={4}></TabPanel>
                <TabPanel p={4} position="relative">
                  <Box
                    width="100%"
                    borderRadius="none"
                    position="relative"
                    pt={4}
                  >
                    <Flex
                      direction={{ base: "column", lg: "row" }}
                      gap={{ base: 4, lg: 8 }}
                      display={isCardExpanded ? "none" : "flex"}
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
                          mb={4}
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

                    <Box
                      mt={8}
                      position="relative"
                      height={isCardExpanded ? "calc(100vh - 200px)" : "auto"}
                    >
                      <Text
                        className={apercu.className}
                        fontSize="md"
                        fontWeight="bold"
                        color="#111827"
                        mb={2}
                        display={isCardExpanded ? "none" : "block"}
                      >
                        Learning Roadmap
                      </Text>

                      {isCardExpanded && (
                        <ExpandedLessonCard
                          onClose={toggleCardExpansion}
                          onOverlayClick={handleOverlayClick}
                        />
                      )}

                      {!isCardExpanded && (
                        <Box
                          flex="1"
                          bg="white"
                          pt={4}
                          id="next-session-container"
                        >
                          <Flex>
                            <Flex
                              direction="column"
                              width="24px"
                              mr={3}
                              alignItems="center"
                            >
                              <Box
                                bg="transparent"
                                height="24px"
                                width="24px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <MapPinIcon
                                  width={16}
                                  height={16}
                                  color="#CBD5E0"
                                />
                              </Box>
                              <Box
                                flex="1"
                                bg="transparent"
                                width="8px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                              >
                                <Divider
                                  orientation="vertical"
                                  height="100%"
                                  borderColor="#CBD5E0"
                                  borderWidth="1px"
                                />
                              </Box>
                            </Flex>
                            <Box
                              id="next-session-card"
                              flex="1"
                              borderWidth="2px"
                              borderColor="gray.200"
                              borderRadius="none"
                              p={0}
                              bg="white"
                              cursor="pointer"
                              onClick={toggleCardExpansion}
                              transition="all 0.2s"
                              shadow="md"
                              boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                              _hover={{
                                borderColor: "#34d399",
                                transform: "translateY(-2px)",
                                boxShadow:
                                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                              }}
                            >
                              <Box p={2.5}>
                                <Flex
                                  direction={{ base: "column", lg: "row" }}
                                  alignItems={{
                                    base: "stretch",
                                    lg: "center",
                                  }}
                                  justifyContent="space-between"
                                >
                                  <Flex alignItems="flex-start" width="full">
                                    <Center
                                      width="64px"
                                      height="64px"
                                      bg="gray.100"
                                      borderRadius="none"
                                      flexShrink={0}
                                    >
                                      <VStack spacing={0} justify="center">
                                        <Text
                                          className={apercuMono.className}
                                          fontSize="11px"
                                          letterSpacing="0.5px"
                                          color="#4b5563"
                                        >
                                          JUN
                                        </Text>
                                        <Text
                                          className={apercu.className}
                                          fontSize="28px"
                                          fontWeight="bold"
                                          color="#4b5563"
                                          lineHeight="1"
                                        >
                                          01
                                        </Text>
                                      </VStack>
                                    </Center>
                                    <VStack
                                      align="flex-start"
                                      spacing={1}
                                      ml={4}
                                      flex="1"
                                    >
                                      <Flex
                                        width="100%"
                                        justifyContent="space-between"
                                        alignItems="center"
                                      >
                                        <Text
                                          className={apercu.className}
                                          fontSize="16px"
                                          fontWeight="bold"
                                          letterSpacing="-0.02em"
                                          color="#111827"
                                        >
                                          Next Lesson
                                        </Text>
                                        <ArrowsPointingOutIcon
                                          width={18}
                                          height={18}
                                          color="#6b7280"
                                        />
                                      </Flex>
                                      <Text
                                        className={inter.className}
                                        fontSize="sm"
                                        color="#4B5563"
                                      >
                                        ---
                                      </Text>
                                    </VStack>
                                  </Flex>
                                </Flex>
                              </Box>
                            </Box>
                          </Flex>
                        </Box>
                      )}
                    </Box>

                    {/* Two column layout */}
                    {!isCardExpanded && (
                      <Box mt={4} p={0} borderRadius="none">
                        <Flex
                          direction={{ base: "column", md: "row" }}
                          gap={{ base: 6, md: 8 }}
                        >
                          {/* Left column */}
                          <Box
                            flex="1"
                            bg="white"
                            id="future-sessions-container"
                          >
                            <Box>
                              {/* First Card */}
                              <Flex mb={4}>
                                <Flex
                                  direction="column"
                                  width="24px"
                                  mr={3}
                                  alignItems="center"
                                >
                                  <Box
                                    bg="transparent"
                                    height="24px"
                                    width="24px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                  >
                                    <MapPinIcon
                                      width={16}
                                      height={16}
                                      color="#CBD5E0"
                                    />
                                  </Box>
                                  <Box
                                    flex="1"
                                    bg="transparent"
                                    width="8px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                  >
                                    <Divider
                                      orientation="vertical"
                                      height="100%"
                                      borderColor="#CBD5E0"
                                      borderWidth="1px"
                                    />
                                  </Box>
                                </Flex>
                                <Box
                                  flex="1"
                                  borderRadius="none"
                                  borderWidth="1px"
                                  borderColor="gray.200"
                                  shadow="md"
                                  boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                                  bg="white"
                                >
                                  <Box p={2.5}>
                                    <Flex
                                      direction={{ base: "column", lg: "row" }}
                                      alignItems={{
                                        base: "stretch",
                                        lg: "center",
                                      }}
                                      justifyContent="space-between"
                                    >
                                      <Flex
                                        alignItems="flex-start"
                                        width="full"
                                      >
                                        <Center
                                          width="64px"
                                          height="64px"
                                          bg="gray.100"
                                          borderRadius="none"
                                          flexShrink={0}
                                        >
                                          <VStack spacing={0} justify="center">
                                            <Text
                                              className={apercuMono.className}
                                              fontSize="11px"
                                              letterSpacing="0.5px"
                                              color="#4b5563"
                                            >
                                              JUN
                                            </Text>
                                            <Text
                                              className={apercu.className}
                                              fontSize="28px"
                                              fontWeight="bold"
                                              color="#4b5563"
                                              lineHeight="1"
                                            >
                                              03
                                            </Text>
                                          </VStack>
                                        </Center>
                                        <VStack
                                          align="flex-start"
                                          spacing={0.5}
                                          ml={4}
                                        >
                                          <Text
                                            className={apercu.className}
                                            fontSize="16px"
                                            fontWeight="bold"
                                            letterSpacing="-0.02em"
                                            color="#111827"
                                            noOfLines={1}
                                            overflow="hidden"
                                            textOverflow="ellipsis"
                                            maxWidth="100%"
                                          >
                                            Session Title
                                          </Text>
                                        </VStack>
                                      </Flex>
                                      <Center
                                        width="32px"
                                        height="32px"
                                        borderRadius="none"
                                        cursor="pointer"
                                        _hover={{ bg: "gray.50" }}
                                      >
                                        <EllipsisVerticalIcon
                                          width={20}
                                          color="#6b7280"
                                        />
                                      </Center>
                                    </Flex>
                                  </Box>
                                </Box>
                              </Flex>

                              {/* Second Card */}
                              <Flex mb={4}>
                                <Flex
                                  direction="column"
                                  width="24px"
                                  mr={3}
                                  alignItems="center"
                                >
                                  <Box
                                    bg="transparent"
                                    height="24px"
                                    width="24px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                  >
                                    <MapPinIcon
                                      width={16}
                                      height={16}
                                      color="#CBD5E0"
                                    />
                                  </Box>
                                  <Box
                                    flex="1"
                                    bg="transparent"
                                    width="8px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                  >
                                    <Divider
                                      orientation="vertical"
                                      height="100%"
                                      borderColor="#CBD5E0"
                                      borderWidth="1px"
                                    />
                                  </Box>
                                </Flex>
                                <Box
                                  flex="1"
                                  borderRadius="none"
                                  borderWidth="1px"
                                  borderColor="gray.200"
                                  shadow="md"
                                  boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                                  bg="white"
                                >
                                  <Box p={2.5}>
                                    <Flex
                                      direction={{ base: "column", lg: "row" }}
                                      alignItems={{
                                        base: "stretch",
                                        lg: "center",
                                      }}
                                      justifyContent="space-between"
                                    >
                                      <Flex
                                        alignItems="flex-start"
                                        width="full"
                                      >
                                        <Center
                                          width="64px"
                                          height="64px"
                                          bg="gray.100"
                                          borderRadius="none"
                                          flexShrink={0}
                                        >
                                          <VStack spacing={0} justify="center">
                                            <Text
                                              className={apercuMono.className}
                                              fontSize="11px"
                                              letterSpacing="0.5px"
                                              color="#4b5563"
                                            >
                                              JUN
                                            </Text>
                                            <Text
                                              className={apercu.className}
                                              fontSize="28px"
                                              fontWeight="bold"
                                              color="#4b5563"
                                              lineHeight="1"
                                            >
                                              10
                                            </Text>
                                          </VStack>
                                        </Center>
                                        <VStack
                                          align="flex-start"
                                          spacing={0.5}
                                          ml={4}
                                        >
                                          <Text
                                            className={apercu.className}
                                            fontSize="16px"
                                            fontWeight="bold"
                                            letterSpacing="-0.02em"
                                            color="#111827"
                                            noOfLines={1}
                                            overflow="hidden"
                                            textOverflow="ellipsis"
                                            maxWidth="100%"
                                          >
                                            Session Title
                                          </Text>
                                        </VStack>
                                      </Flex>
                                      <Center
                                        width="32px"
                                        height="32px"
                                        borderRadius="none"
                                        cursor="pointer"
                                        _hover={{ bg: "gray.50" }}
                                      >
                                        <EllipsisVerticalIcon
                                          width={20}
                                          color="#6b7280"
                                        />
                                      </Center>
                                    </Flex>
                                  </Box>
                                </Box>
                              </Flex>

                              {/* Third Card */}
                              <Flex>
                                <Flex
                                  direction="column"
                                  width="24px"
                                  mr={3}
                                  alignItems="center"
                                >
                                  <Box
                                    bg="transparent"
                                    height="24px"
                                    width="24px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                  >
                                    <MapPinIcon
                                      width={16}
                                      height={16}
                                      color="#CBD5E0"
                                    />
                                  </Box>
                                  <Box
                                    flex="1"
                                    bg="transparent"
                                    width="8px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                  >
                                    <Divider
                                      orientation="vertical"
                                      height="100%"
                                      borderColor="#CBD5E0"
                                      borderWidth="1px"
                                    />
                                  </Box>
                                </Flex>
                                <Box
                                  flex="1"
                                  borderRadius="none"
                                  borderWidth="1px"
                                  borderColor="gray.200"
                                  shadow="md"
                                  boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                                  bg="white"
                                >
                                  <Box p={2.5}>
                                    <Flex
                                      direction={{ base: "column", lg: "row" }}
                                      alignItems={{
                                        base: "stretch",
                                        lg: "center",
                                      }}
                                      justifyContent="space-between"
                                    >
                                      <Flex
                                        alignItems="flex-start"
                                        width="full"
                                      >
                                        <Center
                                          width="64px"
                                          height="64px"
                                          bg="gray.100"
                                          borderRadius="none"
                                          flexShrink={0}
                                        >
                                          <VStack spacing={0} justify="center">
                                            <Text
                                              className={apercuMono.className}
                                              fontSize="11px"
                                              letterSpacing="0.5px"
                                              color="#4b5563"
                                            >
                                              JUN
                                            </Text>
                                            <Text
                                              className={apercu.className}
                                              fontSize="28px"
                                              fontWeight="bold"
                                              color="#4b5563"
                                              lineHeight="1"
                                            >
                                              17
                                            </Text>
                                          </VStack>
                                        </Center>
                                        <VStack
                                          align="flex-start"
                                          spacing={0.5}
                                          ml={4}
                                        >
                                          <Text
                                            className={apercu.className}
                                            fontSize="16px"
                                            fontWeight="bold"
                                            letterSpacing="-0.02em"
                                            color="#111827"
                                            noOfLines={1}
                                            overflow="hidden"
                                            textOverflow="ellipsis"
                                            maxWidth="100%"
                                          >
                                            Session Title
                                          </Text>
                                        </VStack>
                                      </Flex>
                                      <Center
                                        width="32px"
                                        height="32px"
                                        borderRadius="none"
                                        cursor="pointer"
                                        _hover={{ bg: "gray.50" }}
                                      >
                                        <EllipsisVerticalIcon
                                          width={20}
                                          color="#6b7280"
                                        />
                                      </Center>
                                    </Flex>
                                  </Box>
                                </Box>
                              </Flex>

                              {/* Fourth Card with TBD */}
                              <Flex mt={4}>
                                <Flex
                                  direction="column"
                                  width="24px"
                                  mr={3}
                                  alignItems="center"
                                >
                                  <Box
                                    bg="transparent"
                                    height="24px"
                                    width="24px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                  >
                                    <MapPinIcon
                                      width={16}
                                      height={16}
                                      color="#CBD5E0"
                                    />
                                  </Box>
                                  <Box
                                    flex="1"
                                    bg="transparent"
                                    width="8px"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                  >
                                    <Divider
                                      orientation="vertical"
                                      height="100%"
                                      borderColor="#CBD5E0"
                                      borderWidth="1px"
                                    />
                                  </Box>
                                </Flex>
                                <Box
                                  flex="1"
                                  borderRadius="none"
                                  borderWidth="1px"
                                  borderColor="gray.200"
                                  shadow="md"
                                  boxShadow="0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                                  bg="white"
                                >
                                  <Box p={2.5}>
                                    <Flex
                                      direction={{ base: "column", lg: "row" }}
                                      alignItems={{
                                        base: "stretch",
                                        lg: "center",
                                      }}
                                      justifyContent="space-between"
                                    >
                                      <Flex
                                        alignItems="flex-start"
                                        width="full"
                                      >
                                        <Center
                                          width="64px"
                                          height="64px"
                                          bg="gray.100"
                                          borderRadius="none"
                                          flexShrink={0}
                                        >
                                          <VStack spacing={0} justify="center">
                                            <Text
                                              className={apercu.className}
                                              fontSize="20px"
                                              fontWeight="bold"
                                              color="#4b5563"
                                              lineHeight="1"
                                            >
                                              TBD
                                            </Text>
                                          </VStack>
                                        </Center>
                                        <VStack
                                          align="flex-start"
                                          spacing={0.5}
                                          ml={4}
                                        >
                                          <Text
                                            className={apercu.className}
                                            fontSize="16px"
                                            fontWeight="bold"
                                            letterSpacing="-0.02em"
                                            color="#111827"
                                            noOfLines={1}
                                            overflow="hidden"
                                            textOverflow="ellipsis"
                                            maxWidth="100%"
                                          >
                                            Session Title
                                          </Text>
                                        </VStack>
                                      </Flex>
                                      <Box
                                        px={4}
                                        py={2}
                                        mx={{ base: 0, lg: 1 }}
                                        mt={{ base: 4, lg: 0 }}
                                        bg="white"
                                        borderRadius="none"
                                        color="#4b5563"
                                        fontSize="13px"
                                        fontWeight="600"
                                        className={apercu.className}
                                        cursor="pointer"
                                        borderWidth="1px"
                                        borderColor="gray.200"
                                        _hover={{ bg: "#ecfdf5" }}
                                        transition="all 0.2s"
                                        textAlign="center"
                                        width={{ base: "full", lg: "auto" }}
                                        whiteSpace="nowrap"
                                        display="inline-block"
                                      >
                                        Schedule
                                      </Box>
                                    </Flex>
                                  </Box>
                                </Box>
                              </Flex>
                            </Box>
                          </Box>

                          {/* Right column */}
                          <Box flex="1" bg="white" p={4}>
                            <Text
                              className={apercu.className}
                              fontSize="md"
                              fontWeight="bold"
                              color="#111827"
                              mb={3}
                            >
                              Key Dates
                            </Text>

                            <Box>
                              <Box
                                display="grid"
                                gridTemplateColumns="1fr 3fr"
                                gap={4}
                              >
                                {/* First Row */}
                                <Text
                                  className={apercuMono.className}
                                  fontSize="xs"
                                  color="#6b7280"
                                  fontWeight="medium"
                                >
                                  OCT 11, 2024
                                </Text>
                                <Text
                                  className={inter.className}
                                  fontSize="sm"
                                  color="#4B5563"
                                >
                                  Math test
                                </Text>

                                {/* Second Row */}
                                <Text
                                  className={apercuMono.className}
                                  fontSize="xs"
                                  color="#6b7280"
                                  fontWeight="medium"
                                >
                                  DEC 3, 2024
                                </Text>
                                <Text
                                  className={inter.className}
                                  fontSize="sm"
                                  color="#4B5563"
                                >
                                  Completed homework before tutoring session
                                </Text>

                                {/* Third Row */}
                                <Text
                                  className={apercuMono.className}
                                  fontSize="xs"
                                  color="#6b7280"
                                  fontWeight="medium"
                                >
                                  DEC 10, 2024
                                </Text>
                                <Text
                                  className={inter.className}
                                  fontSize="sm"
                                  color="#4B5563"
                                >
                                  Math exam
                                </Text>

                                {/* Fourth Row */}
                                <Text
                                  className={apercuMono.className}
                                  fontSize="xs"
                                  color="#6b7280"
                                  fontWeight="medium"
                                >
                                  DEC 16, 2024
                                </Text>
                                <Text
                                  className={inter.className}
                                  fontSize="sm"
                                  color="#4B5563"
                                >
                                  Winter break begins
                                </Text>

                                {/* Fifth Row */}
                                <Text
                                  className={apercuMono.className}
                                  fontSize="xs"
                                  color="#6b7280"
                                  fontWeight="medium"
                                >
                                  JAN 6, 2025
                                </Text>
                                <Text
                                  className={inter.className}
                                  fontSize="sm"
                                  color="#4B5563"
                                >
                                  Winter break ends
                                </Text>

                                {/* Sixth Row */}
                                <Text
                                  className={apercuMono.className}
                                  fontSize="xs"
                                  color="#6b7280"
                                  fontWeight="medium"
                                >
                                  FEB 5, 2025
                                </Text>
                                <Text
                                  className={inter.className}
                                  fontSize="sm"
                                  color="#4B5563"
                                >
                                  Spanish test on preterite and imperfect tenses
                                </Text>

                                {/* Seventh Row */}
                                <Text
                                  className={apercuMono.className}
                                  fontSize="xs"
                                  color="#6b7280"
                                  fontWeight="medium"
                                >
                                  MAR 10, 2025
                                </Text>
                                <Text
                                  className={inter.className}
                                  fontSize="sm"
                                  color="#4B5563"
                                >
                                  Spanish test on verb conjugations
                                </Text>
                              </Box>
                            </Box>
                          </Box>
                        </Flex>
                      </Box>
                    )}
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
