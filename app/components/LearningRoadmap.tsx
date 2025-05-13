import {
  Box,
  Flex,
  Text,
  Center,
  VStack,
  Divider,
  Tooltip,
} from "@chakra-ui/react";
import { apercu, apercuMono, inter } from "../fonts";
import {
  MapPinIcon,
  ArrowsPointingOutIcon,
  EllipsisVerticalIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

interface LearningRoadmapProps {
  isCardExpanded: boolean;
  toggleCardExpansion: () => void;
  removeLessonParameter: () => void;
}

export const LearningRoadmap = ({
  isCardExpanded,
  toggleCardExpansion,
  removeLessonParameter,
}: LearningRoadmapProps) => {
  return (
    <Box bg="white" id="learning-roadmap-container">
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

      {/* Next Lesson Card */}
      <Box mb={4} id="next-session-container">
        <Flex>
          <Flex direction="column" width="24px" mr={3} alignItems="center">
            <Box
              bg="transparent"
              height="24px"
              width="24px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <MapPinIcon width={16} height={16} color="#CBD5E0" />
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
          <Tooltip
            label="VIEW LESSON"
            placement="top"
            hasArrow
            bg="#34d399"
            color="white"
          >
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
                    <VStack align="flex-start" spacing={1} ml={4} flex="1">
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
          </Tooltip>
        </Flex>
      </Box>

      {/* Future Sessions Cards */}
      <Box id="future-sessions-container">
        {/* First Card */}
        <Flex mb={4}>
          <Flex direction="column" width="24px" mr={3} alignItems="center">
            <Box
              bg="transparent"
              height="24px"
              width="24px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <MapPinIcon width={16} height={16} color="#CBD5E0" />
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
                        03
                      </Text>
                    </VStack>
                  </Center>
                  <VStack align="flex-start" spacing={0.5} ml={4}>
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
                {/* Display ellipsis on large screens, buttons on smaller screens */}
                <Box display={{ base: "none", lg: "block" }}>
                  <Center
                    width="32px"
                    height="32px"
                    borderRadius="none"
                    cursor="pointer"
                    _hover={{ bg: "gray.50" }}
                  >
                    <EllipsisVerticalIcon width={20} color="#6b7280" />
                  </Center>
                </Box>
                {/* Responsive action buttons for smaller screens */}
                <Flex
                  display={{ base: "flex", lg: "none" }}
                  width="100%"
                  gap={2}
                  mt={3}
                >
                  <Box
                    flex="1"
                    px={2}
                    py={1.5}
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
                  >
                    Reschedule
                  </Box>
                  <Box
                    flex="1"
                    px={2}
                    py={1.5}
                    bg="white"
                    borderRadius="none"
                    color="#4b5563"
                    fontSize="13px"
                    fontWeight="600"
                    className={apercu.className}
                    cursor="pointer"
                    borderWidth="1px"
                    borderColor="gray.200"
                    _hover={{ bg: "#FEE2E2" }}
                    transition="all 0.2s"
                    textAlign="center"
                  >
                    Cancel
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Flex>

        {/* Second Card */}
        <Flex mb={4}>
          <Flex direction="column" width="24px" mr={3} alignItems="center">
            <Box
              bg="transparent"
              height="24px"
              width="24px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <MapPinIcon width={16} height={16} color="#CBD5E0" />
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
                        10
                      </Text>
                    </VStack>
                  </Center>
                  <VStack align="flex-start" spacing={0.5} ml={4}>
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
                {/* Display ellipsis on large screens, buttons on smaller screens */}
                <Box display={{ base: "none", lg: "block" }}>
                  <Center
                    width="32px"
                    height="32px"
                    borderRadius="none"
                    cursor="pointer"
                    _hover={{ bg: "gray.50" }}
                  >
                    <EllipsisVerticalIcon width={20} color="#6b7280" />
                  </Center>
                </Box>
                {/* Responsive action buttons for smaller screens */}
                <Flex
                  display={{ base: "flex", lg: "none" }}
                  width="100%"
                  gap={2}
                  mt={3}
                >
                  <Box
                    flex="1"
                    px={2}
                    py={1.5}
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
                  >
                    Reschedule
                  </Box>
                  <Box
                    flex="1"
                    px={2}
                    py={1.5}
                    bg="white"
                    borderRadius="none"
                    color="#4b5563"
                    fontSize="13px"
                    fontWeight="600"
                    className={apercu.className}
                    cursor="pointer"
                    borderWidth="1px"
                    borderColor="gray.200"
                    _hover={{ bg: "#FEE2E2" }}
                    transition="all 0.2s"
                    textAlign="center"
                  >
                    Cancel
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Flex>

        {/* Third Card */}
        <Flex mb={4}>
          <Flex direction="column" width="24px" mr={3} alignItems="center">
            <Box
              bg="transparent"
              height="24px"
              width="24px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <MapPinIcon width={16} height={16} color="#CBD5E0" />
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
                        17
                      </Text>
                    </VStack>
                  </Center>
                  <VStack align="flex-start" spacing={0.5} ml={4}>
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
                {/* Display ellipsis on large screens, buttons on smaller screens */}
                <Box display={{ base: "none", lg: "block" }}>
                  <Center
                    width="32px"
                    height="32px"
                    borderRadius="none"
                    cursor="pointer"
                    _hover={{ bg: "gray.50" }}
                  >
                    <EllipsisVerticalIcon width={20} color="#6b7280" />
                  </Center>
                </Box>
                {/* Responsive action buttons for smaller screens */}
                <Flex
                  display={{ base: "flex", lg: "none" }}
                  width="100%"
                  gap={2}
                  mt={3}
                >
                  <Box
                    flex="1"
                    px={2}
                    py={1.5}
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
                  >
                    Reschedule
                  </Box>
                  <Box
                    flex="1"
                    px={2}
                    py={1.5}
                    bg="white"
                    borderRadius="none"
                    color="#4b5563"
                    fontSize="13px"
                    fontWeight="600"
                    className={apercu.className}
                    cursor="pointer"
                    borderWidth="1px"
                    borderColor="gray.200"
                    _hover={{ bg: "#FEE2E2" }}
                    transition="all 0.2s"
                    textAlign="center"
                  >
                    Cancel
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Flex>

        {/* Fourth Card with TBD */}
        <Flex>
          <Flex direction="column" width="24px" mr={3} alignItems="center">
            <Box
              bg="transparent"
              height="24px"
              width="24px"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <MapPinIcon width={16} height={16} color="#CBD5E0" />
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
                  <VStack align="flex-start" spacing={0.5} ml={4}>
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
                  mt={{ base: 3, lg: 0 }}
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
  );
};
