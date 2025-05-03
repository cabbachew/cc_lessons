"use client";
import { Box, Flex, Text, Center, VStack } from "@chakra-ui/react";
import { ArrowsPointingInIcon } from "@heroicons/react/24/outline";
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
        bg="rgba(243, 244, 246, 0.8)"
        zIndex={1}
        onClick={onOverlayClick}
      />
      <Box
        position="absolute"
        top="-24px"
        left="0"
        right="0"
        bottom="0"
        width="100%"
        borderWidth="2px"
        borderColor="#34d399"
        borderRadius="none"
        p={0}
        bg="white"
        zIndex={2}
        overflow="auto"
      >
        <Box p={4}>
          <Flex justifyContent="space-between" alignItems="center" mb={2}>
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
              <ArrowsPointingInIcon
                width={18}
                height={18}
                color="#6b7280"
                cursor="pointer"
                onClick={onClose}
                style={{ alignSelf: "flex-start" }}
              />
            </Flex>
          </Flex>
          <Text
            className={inter.className}
            fontSize="sm"
            color="#4B5563"
            mt={4}
          >
            Content for the new section goes here. This card uses a light gray
            border without any drop shadow to maintain a clean, minimal design.
          </Text>

          <Box mt={6}>
            <Text
              className={inter.className}
              fontSize="sm"
              color="#4B5563"
              mb={3}
            >
              This is additional content that appears when the card is expanded.
              You can add more detailed information here that is only visible
              when the user clicks the expand icon.
            </Text>
            <Text className={inter.className} fontSize="sm" color="#4B5563">
              The expanded card now takes up the entire tab panel space,
              properly contained within its boundaries.
            </Text>
          </Box>
        </Box>
      </Box>
    </>
  );
}
