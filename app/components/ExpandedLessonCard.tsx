"use client";
import {
  Box,
  Flex,
  Text,
  Center,
  VStack,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { apercu, apercuMono, inter } from "../fonts";

interface ExpandedLessonCardProps {
  onClose: () => void;
  onOverlayClick: (event: React.MouseEvent) => void;
}

export function ExpandedLessonCard({
  onClose,
  onOverlayClick,
}: ExpandedLessonCardProps) {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.7)"
        zIndex={1}
        onClick={onOverlayClick}
      />
      <Box
        position="absolute"
        top="-30px"
        left="0"
        right="0"
        bottom="0"
        width="100%"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="none"
        p={0}
        bg="white"
        zIndex={2}
        overflow="auto"
      >
        {/* Main container with padding */}
        <Box p={4}>
          {/* Top section with date square, title and close icon */}
          <Flex justifyContent="space-between" alignItems="center" mb={5}>
            <Flex alignItems="center" width="full">
              <Center
                width="64px"
                height="64px"
                bg="gray.100"
                borderRadius="none"
                flexShrink={0}
                mr={4}
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
              <Text
                className={apercu.className}
                fontSize="xl"
                fontWeight="bold"
                color="#111827"
                flex="1"
              >
                Next Lesson
              </Text>
              <XMarkIcon
                width={24}
                height={24}
                color="#6b7280"
                cursor="pointer"
                onClick={onClose}
                style={{ alignSelf: "flex-start" }}
              />
            </Flex>
          </Flex>

          {/* Main content area - responsive layout */}
          <Grid
            templateColumns={{ base: "1fr", md: "2fr 1fr" }}
            gap={6}
            templateAreas={{
              base: `"buttons"
                     "content"`,
              md: `"content buttons"`,
            }}
          >
            {/* Action buttons - shows above content on mobile, right side on desktop */}
            <GridItem area="buttons" mb={{ base: 4, md: 0 }}>
              <VStack spacing={3} align="stretch">
                <Button
                  width="100%"
                  bg="#34d399"
                  color="white"
                  borderRadius="none"
                  className={apercu.className}
                  fontSize="md"
                  py={6}
                  _hover={{ bg: "#10b981" }}
                >
                  Launch Session
                </Button>

                <Button
                  width="100%"
                  variant="outline"
                  borderColor="gray.300"
                  color="gray.600"
                  borderRadius="none"
                  className={apercu.className}
                  fontSize="md"
                >
                  Reinvite CC Notetaker
                </Button>
              </VStack>
            </GridItem>

            {/* Session content - shows below buttons on mobile, left side on desktop */}
            <GridItem area="content">
              <VStack align="stretch" spacing={5}>
                <Box>
                  <Text
                    className={apercu.className}
                    fontSize="md"
                    fontWeight="bold"
                    color="#4B5563"
                    mb={2}
                  >
                    Last Session Recap
                  </Text>
                  <Text
                    className={inter.className}
                    fontSize="sm"
                    color="#4B5563"
                  >
                    Discussed design patterns and code organization. Identified
                    areas for improvement in the current architecture.
                  </Text>
                </Box>

                <Box>
                  <Text
                    className={apercu.className}
                    fontSize="md"
                    fontWeight="bold"
                    color="#4B5563"
                    mb={2}
                  >
                    Session Goal
                  </Text>
                  <Text
                    className={inter.className}
                    fontSize="sm"
                    color="#4B5563"
                  >
                    Review progress and set objectives for the next sprint
                  </Text>
                </Box>

                <Box>
                  <Text
                    className={apercu.className}
                    fontSize="md"
                    fontWeight="bold"
                    color="#4B5563"
                    mb={2}
                  >
                    Session Activities
                  </Text>
                  <VStack align="stretch" spacing={2} pl={2}>
                    <Text
                      className={inter.className}
                      fontSize="sm"
                      color="#4B5563"
                    >
                      1. Progress update (15 min)
                    </Text>
                    <Text
                      className={inter.className}
                      fontSize="sm"
                      color="#4B5563"
                    >
                      2. Code review and feedback (25 min)
                    </Text>
                    <Text
                      className={inter.className}
                      fontSize="sm"
                      color="#4B5563"
                    >
                      3. Planning next steps (15 min)
                    </Text>
                    <Text
                      className={inter.className}
                      fontSize="sm"
                      color="#4B5563"
                    >
                      4. Questions and discussion (5 min)
                    </Text>
                  </VStack>
                </Box>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
