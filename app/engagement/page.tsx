"use client";
import {
  Box,
  Flex,
  Heading,
  Text,
  TabPanel,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { PageLayout } from "../components/PageLayout";
import { apercu, apercuMono, inter } from "../fonts";
import { BreakpointBadge } from "../components/BreakpointBadge";
import { ExpandedLessonCard } from "../components/ExpandedLessonCard";
import { EngagementDetailsNavigation } from "../components/EngagementDetailsNavigation";
import { KeyDates } from "../components/KeyDates";
import { LearningRoadmap } from "../components/LearningRoadmap";
import { GuardianStudentContactCard } from "../components/GuardianStudentContactCard";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { StudentProfileModal } from "../components/StudentProfileModal";

export default function EngagementPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  const [isCardExpanded, setIsCardExpanded] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

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

  const toggleProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
  };

  const handleProfileModalOverlayClick = (event: React.MouseEvent) => {
    // Only close if clicking directly on the overlay, not its children
    if (event.target === event.currentTarget) {
      setIsProfileModalOpen(false);
    }
  };

  // Add ESC key handler for the profile modal
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isProfileModalOpen && tabIndex === 0) {
        setIsProfileModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKey);
    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isProfileModalOpen, tabIndex]);

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
            <EngagementDetailsNavigation
              tabIndex={tabIndex}
              onTabsChange={handleTabsChange}
            >
              <TabPanel p={4}>
                {isProfileModalOpen ? (
                  <Box position="relative" height="calc(100vh - 200px)">
                    <StudentProfileModal
                      onClose={toggleProfileModal}
                      onOverlayClick={handleProfileModalOverlayClick}
                    />
                  </Box>
                ) : (
                  <Flex
                    direction={{ base: "column", md: "row" }}
                    gap={{ base: 6, md: 8 }}
                    alignItems="flex-start"
                  >
                    {/* Left column: blank container for future use */}
                    <Box width={{ base: "100%", md: "50%" }} />
                    {/* Right column: contact info card and accordion */}
                    <Box width={{ base: "100%", md: "50%" }}>
                      {/* Contact Info Card on top */}
                      <GuardianStudentContactCard
                        onProfileClick={toggleProfileModal}
                      />
                      {/* Accordion below */}
                      <Box width="100%">
                        <Accordion allowToggle defaultIndex={[]}>
                          <AccordionItem
                            border="0"
                            borderBottom="1px"
                            borderColor="gray.100"
                          >
                            <h2>
                              <AccordionButton
                                py={2}
                                px={0}
                                _hover={{ bg: "transparent" }}
                              >
                                <Box
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  fontWeight="bold"
                                  fontSize="md"
                                  className={apercu.className}
                                >
                                  Student Overview
                                </Box>
                                <AccordionIcon color="#6b7280" />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} px={0} pl={2}>
                              <Text
                                className={inter.className}
                                fontSize="sm"
                                color="#4B5563"
                                lineHeight="1.6"
                              >
                                Maya is a charismatic seventh grader at Avenues
                                The World School SP who brings a uniquely global
                                perspective from her experiences living in
                                Shanghai, New York, and Mexico City. A natural
                                connector with exceptional social skills, she
                                thrives as a school ambassador and tour guide
                                while showing strong interests in creative
                                pursuits and business. Maya combines strong
                                organizational skills with an outgoing
                                personality, already demonstrating sophisticated
                                thinking about business ethics and
                                sustainability.
                              </Text>
                            </AccordionPanel>
                          </AccordionItem>
                          <AccordionItem border="0">
                            <h2>
                              <AccordionButton
                                py={2}
                                px={0}
                                _hover={{ bg: "transparent" }}
                              >
                                <Box
                                  as="span"
                                  flex="1"
                                  textAlign="left"
                                  fontWeight="bold"
                                  fontSize="md"
                                  className={apercu.className}
                                >
                                  Engagement Overview
                                </Box>
                                <AccordionIcon color="#6b7280" />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel pb={4} px={0} pl={2}>
                              <Text
                                className={inter.className}
                                fontSize="sm"
                                color="#4B5563"
                                lineHeight="1.6"
                              >
                                This engagement will focus on developing
                                Maya&apos;s entrepreneurial vision for a
                                sustainable fashion accessories brand while
                                building core business and marketing skills.
                                Through hands-on mentorship, we&apos;ll help her
                                transform her creative ideas into tangible
                                business plans, emphasizing ethical practices
                                and sustainable development. The mentor will
                                provide structured guidance while nurturing
                                Maya&apos;s natural business acumen and helping
                                her develop systematic approaches to project
                                implementation.
                              </Text>
                            </AccordionPanel>
                          </AccordionItem>
                        </Accordion>
                      </Box>
                    </Box>
                  </Flex>
                )}
              </TabPanel>
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
                                  principles to effectively present information
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
                                  Connect with professionals in child psychology
                                  and education for insights and mentorship
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

                  <Box mt={8} position="relative">
                    {/* Display expanded lesson card when expanded */}
                    {isCardExpanded && (
                      <Box height="calc(100vh - 200px)" position="relative">
                        <ExpandedLessonCard
                          onClose={toggleCardExpansion}
                          onOverlayClick={handleOverlayClick}
                        />
                      </Box>
                    )}

                    {/* Two column layout - Only show when not expanded */}
                    {!isCardExpanded && (
                      <Flex
                        direction={{ base: "column", md: "row" }}
                        gap={{ base: 6, md: 8 }}
                      >
                        {/* Left column - Learning Roadmap (Next Lesson + Future Sessions) */}
                        <Box flex="1" id="learning-roadmap-container">
                          <LearningRoadmap
                            isCardExpanded={isCardExpanded}
                            toggleCardExpansion={toggleCardExpansion}
                            removeLessonParameter={removeLessonParameter}
                          />
                        </Box>

                        {/* Right column - Key Dates */}
                        <Box flex="1" bg="white">
                          <KeyDates />
                        </Box>
                      </Flex>
                    )}
                  </Box>
                </Box>
              </TabPanel>
              <TabPanel p={4}></TabPanel>
              <TabPanel p={4}></TabPanel>
            </EngagementDetailsNavigation>
          </Box>
        </Box>
      </Box>
    </PageLayout>
  );
}
