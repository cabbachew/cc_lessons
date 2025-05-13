import { Box, Flex, Text, VStack, Center } from "@chakra-ui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { apercu, apercuMono, inter } from "../fonts";

interface StudentProfileModalProps {
  onClose: () => void;
  onOverlayClick: (event: React.MouseEvent) => void;
}

export const StudentProfileModal: React.FC<StudentProfileModalProps> = ({
  onClose,
  onOverlayClick,
}) => {
  return (
    <>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bg="rgba(0, 0, 0, 0.7)"
        zIndex={100}
        onClick={onOverlayClick}
      />
      <Box
        position="absolute"
        top="20px"
        left="0"
        right="0"
        bottom="0"
        width="100%"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="none"
        p={0}
        bg="white"
        zIndex={101}
        overflow="auto"
        height="calc(100vh - 200px)"
      >
        {/* Modal content */}
        <Box p={4}>
          <Flex justifyContent="space-between" alignItems="center" mb={5}>
            <Flex alignItems="center" width="full">
              <Text
                className={apercu.className}
                fontSize="xl"
                fontWeight="bold"
                color="#111827"
                flex="1"
              >
                Student Profile
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

          <Flex direction={{ base: "column", md: "row" }} gap={8}>
            {/* Left column */}
            <Box flex="1">
              <Text
                className={apercu.className}
                fontSize="md"
                fontWeight="bold"
                color="#111827"
                mb={2}
              >
                Personal Information
              </Text>

              <VStack align="start" spacing={4} mb={6}>
                <Box>
                  <Text
                    className={apercuMono.className}
                    fontSize="xs"
                    color="#6b7280"
                    fontWeight="medium"
                  >
                    NAME
                  </Text>
                  <Text
                    className={inter.className}
                    fontSize="md"
                    color="#4B5563"
                  >
                    Quintin Leong
                  </Text>
                </Box>

                <Box>
                  <Text
                    className={apercuMono.className}
                    fontSize="xs"
                    color="#6b7280"
                    fontWeight="medium"
                  >
                    EMAIL
                  </Text>
                  <Text
                    className={inter.className}
                    fontSize="md"
                    color="#4B5563"
                  >
                    quintinrocks@gmail.com
                  </Text>
                </Box>

                <Box>
                  <Text
                    className={apercuMono.className}
                    fontSize="xs"
                    color="#6b7280"
                    fontWeight="medium"
                  >
                    GRADE
                  </Text>
                  <Text
                    className={inter.className}
                    fontSize="md"
                    color="#4B5563"
                  >
                    10th
                  </Text>
                </Box>

                <Box>
                  <Text
                    className={apercuMono.className}
                    fontSize="xs"
                    color="#6b7280"
                    fontWeight="medium"
                  >
                    SCHOOL
                  </Text>
                  <Text
                    className={inter.className}
                    fontSize="md"
                    color="#4B5563"
                  >
                    Palo Alto High School
                  </Text>
                </Box>
              </VStack>
            </Box>

            {/* Right column */}
            <Box flex="1">
              <Text
                className={apercu.className}
                fontSize="md"
                fontWeight="bold"
                color="#111827"
                mb={2}
              >
                Student Notes
              </Text>
              <Text
                className={inter.className}
                fontSize="md"
                color="#4B5563"
                mb={4}
              >
                Quintin is a creative and enthusiastic student with a passion
                for home improvement projects. He enjoys working with his hands
                and has shown great initiative in learning new skills. His
                current focus is on developing practical skills that can help
                with his DIY projects at home.
              </Text>

              <Text
                className={apercu.className}
                fontSize="md"
                fontWeight="bold"
                color="#111827"
                mb={2}
                mt={6}
              >
                Learning Style
              </Text>
              <Text className={inter.className} fontSize="md" color="#4B5563">
                Quintin learns best through hands-on activities and visual
                demonstrations. He appreciates clear, step-by-step instructions
                and responds well to project-based learning. He's particularly
                engaged when able to see immediate, practical applications for
                the skills he's learning.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </>
  );
};
